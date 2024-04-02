package bs.www.service.Impl;

import bs.www.pojo.Goods;
import bs.www.pojo.User;
import bs.www.service.AdminService;
import bs.www.utils.JwtUtil;
import com.mongodb.client.result.DeleteResult;
import com.mongodb.client.result.UpdateResult;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class AdminServiceImpl implements AdminService {
    @Autowired
    private MongoTemplate mongoTemplate;

    @Autowired
    private RedisTemplate redisTemplate;

    @Override
    public Map login(String username, String password) {
        HashMap<String, Object> res = new HashMap<>();

        Query query = new Query(Criteria.where("username").is(username).and("password").is(password));
        boolean has = mongoTemplate.exists(query, "admin");
        res.put("has", has);

        if (has) {
            HashMap<String, Object> claims = new HashMap<>();
            claims.put("jwt", new Date());
            res.put("jwt", JwtUtil.genToken(claims));
        }

        return res;
    }

    @Override
    public boolean outLogin(String jwt) {
        return Boolean.TRUE.equals(redisTemplate.delete(jwt));
    }

    @Override
    public List getFeedback() {
        List<User> userList = mongoTemplate.findAll(User.class);
        ArrayList<String> res = new ArrayList<>();
        for (User item : userList) res.add(String.valueOf(item.getFeedback()));

        return res;
    }

    @Override
    public Object addGoods(Goods newGoods) {
        newGoods.set_id(new ObjectId().toString());
        return mongoTemplate.insert(newGoods);
    }

    @Override
    public void updateGoods(String id, Goods newGoodsData) {
        Query query = new Query(Criteria.where("_id").is(id));
        Update update = new Update().set("name", newGoodsData.getName())
                .set("price", newGoodsData.getPrice())
                .set("inventory", newGoodsData.getInventory())
                .set("description", newGoodsData.getDescription())
                .set("type", newGoodsData.getType());

        UpdateResult res= mongoTemplate.updateFirst(query, update, Goods.class);
        System.out.println(res);
    }

    @Override
    public Boolean updaetUserState(String id) {
        Query query = new Query(Criteria.where("_id").is(id));
        Update update = new Update();
        User user;
        try {
            user = mongoTemplate.findAndModify(query, update, User.class);
        } catch (Exception e) {
            return false;
        }
        if (user == null) return false;
        return true;
    }

    @Override
    public List getUserInfo() {
        return mongoTemplate.findAll(User.class);
    }

    @Override
    public List getOrders() {

        List<User> userList = mongoTemplate.findAll(User.class);
        ArrayList<Object> res = new ArrayList<>();
        for (User i : userList) {
            res.add(i.getOrders());
        }
        return res;
    }

    @Override
    public Boolean updateOrders(String id) {
        Query query = new Query(Criteria.where("_id").is(id));
        Update update = new Update();
        UpdateResult res = mongoTemplate.updateFirst(query, update, User.Orders.class);
        return res.getModifiedCount() == 1 && res.getMatchedCount() == 1;
    }

    @Override
    public Boolean deleteGoods(String id) {
        Query query = new Query(Criteria.where("_id").is(id));
        DeleteResult res = mongoTemplate.remove(query, Goods.class);
        return res.getDeletedCount() == 1;
    }

    @Override
    public Object getGoods() {
        return mongoTemplate.findAll(Goods.class);
    }


}
