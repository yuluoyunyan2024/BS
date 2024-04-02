package bs.www.service;

import bs.www.pojo.Goods;
import bs.www.vo.Result;

import java.util.List;
import java.util.Map;

public interface AdminService {
    Map login(String username, String password);

    boolean outLogin(String jwt);

    List getFeedback();

    //    boolean addGoods(Goods newGoods);
    Object addGoods(Goods newGoods);

    Object getGoods();

    void updateGoods(String id,Goods newGoodsData);

    Boolean updaetUserState(String id);

    List getUserInfo();

    List getOrders();

    Boolean updateOrders(String id);

    Boolean deleteGoods(String id);
}
