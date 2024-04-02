package bs.www.controller.Admin;

import bs.www.pojo.Goods;
import bs.www.service.AdminService;
import bs.www.vo.Result;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin")
public class GoodsController {
    @Autowired
    private AdminService adminService;

    @PostMapping("/goods")
    public Result addGoods(@RequestBody Goods newGoods) {
        System.out.println(newGoods);
        Object res = adminService.addGoods(newGoods);
        return Result.success(res);
    }

    @DeleteMapping("/goods/{id}")
    public Result deleteGoods(@PathVariable("id") String id) {
        Boolean res = adminService.deleteGoods(id);
        if (res) return Result.success(res);
        return Result.error("false");
    }

    @PutMapping("/goods/{id}")
    public Result updateGoods(@PathVariable("id") String id, @RequestBody Goods newGooodsData) {
//        adminService.updateGoods(param);
        System.out.println(id);
        System.out.println(newGooodsData);
        adminService.updateGoods(id,newGooodsData);
        return null;
    }

    @RequestMapping(value = "/goods", method = RequestMethod.GET)
    public Result getGoods() {
        return Result.success(adminService.getGoods());
    }
}
