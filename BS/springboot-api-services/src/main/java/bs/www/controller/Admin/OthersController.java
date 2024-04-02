package bs.www.controller.Admin;

import bs.www.service.AdminService;
import bs.www.vo.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/admin")
public class OthersController {
    @Autowired
    private AdminService adminService;

    @RequestMapping(value = "/feedback",method = RequestMethod.GET)
    public Result getFeedback(){
        return Result.success(adminService.getFeedback());
    }
}
