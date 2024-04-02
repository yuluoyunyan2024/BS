package bs.www.controller.User;

import bs.www.common.Param;
import bs.www.service.UserService;
import bs.www.vo.Result;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/user")
public class UserOrdersManagement {
    @Autowired
    private UserService userService;

    @PostMapping("/orders")
    public Result createOrders(@RequestHeader("Authorization") String jwt, @RequestBody Map orders) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        Param[] params = mapper.readValue(orders.get("param").toString(), Param[].class);

        ArrayList<Param> arrayList = new ArrayList<>();
        for (Param i : params) {
//        System.out.println("ID:"+i.get_id()+",Num:"+i.getNum());
            Param param = new Param();
            param.set_id(i.get_id());
            param.setNum(i.getNum());
            arrayList.add(param);
        }
//    System.out.println(arrayList);
        if (userService.createOrders(jwt, arrayList)) return Result.success(true);
        return Result.error("false");
    }


    @DeleteMapping("/orders/{ordersId}")
    public Result deleteOrders(@RequestHeader("Authorization") String jwt, @PathVariable String ordersId) {
        System.out.println(ordersId);
        try {
            userService.deleteOrders(jwt, ordersId);
            return Result.success();
        } catch (Exception e) {
            return Result.error(String.valueOf(e));
        }
    }

    @PutMapping("/orders")
    public Result updateOrders(@RequestHeader("Authorization") String jwt, String newAddress) {
        try {
            userService.updateOrders(jwt, newAddress);
            return Result.success();
        } catch (Exception e) {
            return Result.error(String.valueOf(e));
        }
    }

    @RequestMapping(value = "/orders", method = RequestMethod.GET)
    public Result getOrders(@RequestHeader("Authorization") String jwt) {
        try {
            List res = userService.getOrders(jwt);
            return Result.success(res);
        } catch (Exception e) {
            return Result.error(String.valueOf(e));
        }
    }
}
