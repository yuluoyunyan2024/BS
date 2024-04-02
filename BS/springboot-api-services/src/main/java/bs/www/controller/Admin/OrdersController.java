package bs.www.controller.Admin;

import bs.www.service.AdminService;
import bs.www.vo.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin")
public class OrdersController {
    @Autowired
    private AdminService adminService;

    @RequestMapping(value = "/orders",method = RequestMethod.GET)
    public Result getOrders(){
        return Result.success(adminService.getOrders());
    }

    @PutMapping("/orders/{id}")
    public Result updateOrders(@PathVariable("id") String id){
        Boolean res = adminService.updateOrders(id);
        if(res) return Result.success(res);
        return Result.error("false");
    }
}
