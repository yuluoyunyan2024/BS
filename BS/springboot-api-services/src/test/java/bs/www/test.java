package bs.www;

import bs.www.common.Param;
import bs.www.pojo.User;
import bs.www.repository.RedisRepository;
import bs.www.service.UserService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.web.reactive.function.client.WebClient;

@SpringBootTest
public class test {

    @Autowired
    private RedisRepository redisRepository;
    private WebClient webClient = WebClient.create();
    @Autowired
    private RedisTemplate redisTemplate;
    @Autowired
    private MongoTemplate mongoTemplate;
    @Autowired
    private UserService userService;

    @Test
    public void testMethod() throws JsonProcessingException {

        String json = "[{\"_id\":\"658d63ea496909cec02f7d81\",\"num\":1},{\"_id\":\"658d6548496909cec02f7d83\",\"num\":1}]";
        ObjectMapper mapper = new ObjectMapper();
        Param[] params = mapper.readValue(json, Param[].class);
        String openid = "222";
        for (Param i : params) {
            System.out.println(i.get_id());
            System.out.println(i.getNum());
        }

        System.out.println(mongoTemplate.exists(new Query(Criteria.where("openid").is(openid)),User.class));
    }
}