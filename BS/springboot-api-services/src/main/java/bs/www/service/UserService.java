package bs.www.service;

import bs.www.common.Param;
import bs.www.pojo.Goods;
import bs.www.pojo.User;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

/**
 * @author w雨落云烟w
 * @date 2023/12/14 18:45
 * @description: 接口UserService
 */
public interface UserService {

    //常用于无jwt时登录或新用户登录
    HashMap<String, Object> login(String js_code);

    //检验用户合法性
    HashMap<String, Object> checkLogin(String jwt);

    //直接获取所有cartData
    List<String> getShoppingCart(String jwt);

    //直接覆盖原cartData
    void updateShoppingCart(String jwt, List<String> newShoppingCart);

    //新增订单，锁定商品
    Boolean createOrders(String jwt ,ArrayList<Param> goodsIdList);

    //取消订单
    Boolean deleteOrders(String jwt, String ordersId) throws Exception;

    //仅更新订单的收货地址
    void updateOrders(String jwt, String newAddress);

    //直接获取所有orders
    List<Object> getOrders(String jwt);

    //直接覆盖原deliveryAddress
    void updateDeliveryAddress(String jwt, Object newDeliveryAddress);

    //直接获取所有收货地址
    ArrayList<User.Address> getDeliveryAddress(String jwt);

    //提交反馈
    void submitFeedback(String jwt, String feedback);

    //查询商品
    ArrayList<Goods> findGoods(String goodsName);
}
