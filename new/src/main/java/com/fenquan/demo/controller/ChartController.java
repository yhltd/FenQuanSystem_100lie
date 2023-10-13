package com.fenquan.demo.controller;

import com.fenquan.demo.entity.Chart;
import com.fenquan.demo.entity.UserInfo;
import com.fenquan.demo.service.IChartService;
import com.fenquan.demo.service.IUserInfoService;
import com.fenquan.demo.util.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Map;


@Slf4j
@RestController
@RequestMapping("/chart")
public class ChartController {

    @Autowired
    IUserInfoService iUserInfoService;

    @Autowired
    IChartService iChartService;

    @RequestMapping("/getGongSiList")
    public ResultInfo getGongSiList(HttpSession session) {
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
        Map<String, Object> map = iUserInfoService.login(userInfo.getD(), userInfo.getE(), userInfo.getB());
        SessionUtil.setPower(session, StringUtils.cast(map.get("power")));
        SessionUtil.setGongSiPower(session, StringUtils.cast(map.get("companyPower")));
        SessionUtil.setRenYuanPower(session, StringUtils.cast(map.get("personPower")));
        PowerUtil powerUtil = PowerUtil.getPowerUtil(session);
        if (!powerUtil.isSelect("公司数据分析")) {
            return ResultInfo.error(401, "无权限");
        }
        try {
            String token = SessionUtil.getToken(session);
            String[] token_list = token.split(",");
            token_list = token_list[1].split("\"");
            String login_company = token_list[3];
            List<Chart> select_list = iChartService.getGongSiList(login_company);
            return ResultInfo.success("获取成功", select_list);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }

    @RequestMapping("/queryGongSiList")
    public ResultInfo queryGongSiList(HttpSession session,String start_date,String stop_date) {
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
        Map<String, Object> map = iUserInfoService.login(userInfo.getD(), userInfo.getE(), userInfo.getB());
        SessionUtil.setPower(session, StringUtils.cast(map.get("power")));
        SessionUtil.setGongSiPower(session, StringUtils.cast(map.get("companyPower")));
        SessionUtil.setRenYuanPower(session, StringUtils.cast(map.get("personPower")));
        PowerUtil powerUtil = PowerUtil.getPowerUtil(session);
        if (!powerUtil.isSelect("公司数据分析")) {
            return ResultInfo.error(401, "无权限");
        }
        try {
            String token = SessionUtil.getToken(session);
            String[] token_list = token.split(",");
            token_list = token_list[1].split("\"");
            String login_company = token_list[3];
            List<Chart> select_list = iChartService.queryGongSiList(login_company,start_date,stop_date);
            return ResultInfo.success("获取成功", select_list);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }

    @RequestMapping("/queryRenYuanList")
    public ResultInfo queryRenYuanList(HttpSession session,String name,String start_date,String stop_date) {
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
        Map<String, Object> map = iUserInfoService.login(userInfo.getD(), userInfo.getE(), userInfo.getB());
        SessionUtil.setPower(session, StringUtils.cast(map.get("power")));
        SessionUtil.setGongSiPower(session, StringUtils.cast(map.get("companyPower")));
        SessionUtil.setRenYuanPower(session, StringUtils.cast(map.get("personPower")));
        PowerUtil powerUtil = PowerUtil.getPowerUtil(session);
        if (!powerUtil.isSelect("人员数据分析")) {
            return ResultInfo.error(401, "无权限");
        }
        try {
            String token = SessionUtil.getToken(session);
            String[] token_list = token.split(",");
            token_list = token_list[1].split("\"");
            String login_company = token_list[3];
            List<Chart> select_list = iChartService.queryRenYuanList(login_company,name,start_date,stop_date);
            return ResultInfo.success("获取成功", select_list);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }


}
