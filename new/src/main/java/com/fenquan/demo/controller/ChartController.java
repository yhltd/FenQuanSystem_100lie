package com.fenquan.demo.controller;

import com.fenquan.demo.entity.Chart;
import com.fenquan.demo.service.IChartService;
import com.fenquan.demo.util.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.List;


@Slf4j
@RestController
@RequestMapping("/chart")
public class ChartController {

    @Autowired
    IChartService iChartService;

    @RequestMapping("/getGongSiList")
    public ResultInfo getGongSiList(HttpSession session) {
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
