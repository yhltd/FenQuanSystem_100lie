package com.fenquan.demo.controller;

import com.fenquan.demo.entity.UserInfo;
import com.fenquan.demo.service.IUserInfoService;
import com.fenquan.demo.util.*;
import lombok.extern.slf4j.Slf4j;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.io.FileInputStream;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Slf4j
@RestController
@RequestMapping("/user")
public class UserInfoController{

    @Autowired
    IUserInfoService iUserInfoService;


    @RequestMapping("/get_select_List")
    public ResultInfo queryList() {
        try {
            List<UserInfo> select_list = iUserInfoService.get_select_List();
            return ResultInfo.success("获取成功", select_list);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }

    @RequestMapping("/login")
    public ResultInfo login(String username, String password, String company) {
        try {
            //获取user
            Map<String, Object> map = iUserInfoService.login(username, password, company);

            //为Null则查询不到
            if (StringUtils.isEmpty(map)) {
                return ResultInfo.error(-1, "用户名密码错误");
            } else {
                return ResultInfo.success("登陆成功", null);
            }
        } catch (Exception e) {
            log.error("登陆失败：{}", e.getMessage());
            log.error("参数：{}", username);
            log.error("参数：{}", password);
            return ResultInfo.error("错误!");
        }
    }

}
