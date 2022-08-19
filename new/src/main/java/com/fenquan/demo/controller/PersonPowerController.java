package com.fenquan.demo.controller;

import com.fenquan.demo.entity.PersonPower;
import com.fenquan.demo.service.IPersonPowerService;
import com.fenquan.demo.util.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.List;


@Slf4j
@RestController
@RequestMapping("/person_power")
public class PersonPowerController {

    @Autowired
    IPersonPowerService iPersonPowerService;

    @RequestMapping("/getList")
    public ResultInfo getList(HttpSession session) {
        try {
            String token = SessionUtil.getToken(session);
            String[] token_list = token.split(",");
            token_list = token_list[1].split("\"");
            String login_company = token_list[3];
            List<PersonPower> select_list = iPersonPowerService.getList(login_company);
            return ResultInfo.success("获取成功", select_list);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }

    @RequestMapping("/queryList")
    public ResultInfo queryList(HttpSession session,String query) {
        try {
            String token = SessionUtil.getToken(session);
            String[] token_list = token.split(",");
            token_list = token_list[1].split("\"");
            String login_company = token_list[3];
            List<PersonPower> select_list = iPersonPowerService.queryList(login_company,query);
            return ResultInfo.success("获取成功", select_list);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }


    @RequestMapping(value = "/update", method = RequestMethod.POST)
    public ResultInfo update(HttpSession session,String column,int id,String this_value) {
        try {
            if (iPersonPowerService.update(column,id,this_value)) {
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
