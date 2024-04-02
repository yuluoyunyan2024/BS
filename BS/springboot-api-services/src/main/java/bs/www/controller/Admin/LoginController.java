package bs.www.controller.Admin;

import bs.www.service.AdminService;
import bs.www.vo.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/admin")
public class LoginController {
    @Autowired
    private AdminService adminService;

    @RequestMapping(value = "/login-log", method = RequestMethod.GET)
    public Result login(@RequestParam("name") String name,@RequestParam("pass") String pass){
        Map res = adminService.login(name,pass);
//        System.out.println(res.get("jwt"));
        if(res.get("jwt")==null) return Result.error(null);
        return Result.success(res);
    }

    @DeleteMapping("/login-log")
    public Result outLogin(@RequestHeader("Authorization") String jwt){
        if(adminService.outLogin(jwt)) return Result.success();
        return Result.error(null);
    }
}
