package bs.www.utils;

import lombok.Data;

@Data
public class OrdersUtil {
    private String ordersID;
    private String name;
    private String price;
    private int num;
    private String imgSrc;
    private Boolean isReturn;
    private Boolean isArrival;
}
