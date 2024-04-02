package bs.www.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.data.mongodb.core.mapping.MongoId;

import java.time.LocalDateTime;
import java.util.ArrayList;

/**
 * @author w雨落云烟w
 * @date 2023/12/14 19:01
 * @description: 数据库集合user的实体类
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "user")
public class User {

    @Data
    public static class Orders {
        private ObjectId ordersID;          //订单编号
        private String goodsID;             //商品id
        private Boolean isArrival;          //是否到货
        private int num;                    //商品数量
    }

    @Data
    public static class Address {
        private String addressee;           //收件人
        private String fullAddress;         //详细地址
        private String phone;               //手机号
    }

    @Id
    private String id;                      //mongo自带_id属性
    private String openid;                  //openid
    private Boolean state;                  //用户状态，是否在黑名单
    private String name;                    //用户名
    private String phone;                   //手机号
    private LocalDateTime createTime;       //创建时间
    private ArrayList<String> shoppingCart; //购物车
    private ArrayList<String> feedback;     //用户反馈
    private ArrayList<Orders> orders;       //订单
    private ArrayList<Address> deliveryAddress; //收货地址
}
