package com.fenquan.demo.controller;

import com.fenquan.demo.entity.CompanyPower;
import com.fenquan.demo.entity.Department;
import com.fenquan.demo.entity.PersonPower;
import com.fenquan.demo.entity.WorkBench;
import com.fenquan.demo.service.IWorkBenchService;
import com.fenquan.demo.util.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.List;


@Slf4j
@RestController
@RequestMapping("/workBench")
public class WorkBenchController {

    @Autowired
    IWorkBenchService iWorkBenchService;

    @RequestMapping("/getList")
    public ResultInfo getList(HttpSession session) {
        PowerUtil powerUtil = PowerUtil.getPowerUtil(session);
        if (!powerUtil.isSelect("工作台")) {
            return ResultInfo.error(401, "无权限");
        }
        try {
            String token = SessionUtil.getToken(session);
            String[] token_list = token.split(",");
            token_list = token_list[1].split("\"");
            String login_company = token_list[3];
            List<WorkBench> select_list = iWorkBenchService.getList(login_company);
            return ResultInfo.success("获取成功", select_list);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }

    @RequestMapping("/queryList")
    public ResultInfo queryList(HttpSession session,String start_date,String stop_date,String column) {
        PowerUtil powerUtil = PowerUtil.getPowerUtil(session);
        if (!powerUtil.isSelect("工作台")) {
            return ResultInfo.error(401, "无权限");
        }
        try {
            String token = SessionUtil.getToken(session);
            String[] token_list = token.split(",");
            token_list = token_list[1].split("\"");
            String login_company = token_list[3];
            List<WorkBench> select_list = iWorkBenchService.queryList(login_company,start_date,stop_date,column);
            return ResultInfo.success("获取成功", select_list);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }


    //获取公司权限
    @RequestMapping("/getGongSiList")
    public ResultInfo getGongSiList(HttpSession session) {
        try {
            List<CompanyPower> companyPower = SessionUtil.getGongSiPower(session);
            return ResultInfo.success("获取成功", companyPower);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }


    //获取个人权限
    @RequestMapping("/getRenYuanList")
    public ResultInfo getRenYuanList(HttpSession session) {
        try {
            List<PersonPower> personPower = SessionUtil.getRenYuanPower(session);
            return ResultInfo.success("获取成功", personPower);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }

    //获取登录人
    @RequestMapping("/getName")
    public ResultInfo getName(HttpSession session) {
        try {
            String token = SessionUtil.getToken(session);
            String[] token_list = token.split(",");
            token_list = token_list[2].split("\"");
            String renyuan = token_list[3];
            return ResultInfo.success("获取成功", renyuan);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }

    /*
     *添加
     * */
    @RequestMapping("/add")
    public ResultInfo add(HttpSession session,String today){
        PowerUtil powerUtil = PowerUtil.getPowerUtil(session);
        if (!powerUtil.isAdd("工作台")) {
            return ResultInfo.error(401, "无权限");
        }
        String token = SessionUtil.getToken(session);
        String[] token_list = token.split(",");
        token_list = token_list[1].split("\"");
        String login_company = token_list[3];

        token_list = token.split(",");
        token_list = token_list[2].split("\"");
        String renyuan = token_list[3];
        try{
            if (iWorkBenchService.add(login_company,renyuan,today)) {
                return ResultInfo.success("添加成功", true);
            } else {
                return ResultInfo.success("添加失败", null);
            }
        }catch (Exception e){
            e.printStackTrace();
            log.error("添加失败：{}", e.getMessage());
            return ResultInfo.error("添加失败");
        }
    }


    //删除
    @RequestMapping("/delete")
    public ResultInfo delete(@RequestBody HashMap map, HttpSession session) {
        PowerUtil powerUtil = PowerUtil.getPowerUtil(session);
        if (!powerUtil.isDelete("工作台")) {
            return ResultInfo.error(401, "无权限");
        }
        GsonUtil gsonUtil = new GsonUtil(GsonUtil.toJson(map));
        List<Integer> idList = GsonUtil.toList(gsonUtil.get("idList"), Integer.class);
        try {
            if (iWorkBenchService.delete(idList)) {
                return ResultInfo.success("删除成功", idList);
            } else {
                return ResultInfo.success("删除失败", idList);
            }
        } catch (Exception e) {
            e.printStackTrace();
            log.error("删除失败：{}", e.getMessage());
            log.error("参数：{}", idList);
            return ResultInfo.error("删除失败");
        }
    }


    //修改数据
    @RequestMapping(value = "/update", method = RequestMethod.POST)
    public ResultInfo update(HttpSession session,String column,String value,int id,String time) {
        PowerUtil powerUtil = PowerUtil.getPowerUtil(session);
        if (!powerUtil.isUpdate("工作台使用状态")) {
            return ResultInfo.error(401, "无权限");
        }
        try {
            if (iWorkBenchService.update(column,value,id,time)) {
                return ResultInfo.success("修改成功",column);
            } else {
                return ResultInfo.success("修改失败",column);
            }
        } catch (Exception e) {
            e.printStackTrace();
            log.error("修改失败：{}", e.getMessage());
            return ResultInfo.error("修改失败");
        }
    }

}
