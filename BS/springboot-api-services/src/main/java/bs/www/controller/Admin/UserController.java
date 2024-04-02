package bs.www.controller.Admin;

import bs.www.service.AdminService;
import bs.www.vo.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin")
public class UserController {
    @Autowired
    private AdminService adminService;

    @PutMapping("/user/{id}")
    public Result updateUserState(@PathVariable("id") String id){
        Boolean res =  adminService.updaetUserState(id);
        if(res) return Result.success(res);
        return Result.error(String.valueOf(res));
    }

    @RequestMapping(value = "/user",method = RequestMethod.GET)
    public Result getUserInfo(){
        return Result.success(adminService.getUserInfo());
    }
}
