package com.fenquan.demo.controller;

import com.fenquan.demo.entity.UseState;
import com.fenquan.demo.entity.UserInfo;
import com.fenquan.demo.service.IUseStateService;
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
@RequestMapping("/use_state")
public class UseStateController {

    @Autowired
    IUserInfoService iUserInfoService;

    @Autowired
    IUseStateService iUseStateService;

    @RequestMapping("/getList")
    public ResultInfo queryList(HttpSession session) {
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
        Map<String, Object> map = iUserInfoService.login(userInfo.getD(), userInfo.getE(), userInfo.getB());
        SessionUtil.setPower(session, StringUtils.cast(map.get("power")));
        SessionUtil.setGongSiPower(session, StringUtils.cast(map.get("companyPower")));
        SessionUtil.setRenYuanPower(session, StringUtils.cast(map.get("personPower")));
        PowerUtil powerUtil = PowerUtil.getPowerUtil(session);
        if (!powerUtil.isSelect("工作台使用状态")) {
            return ResultInfo.error(401, "无权限");
        }
        try {
            String token = SessionUtil.getToken(session);
            String[] token_list = token.split(",");
            token_list = token_list[1].split("\"");
            String login_company = token_list[3];
            List<UseState> select_list = iUseStateService.getList(login_company);
            return ResultInfo.success("获取成功", select_list);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }

    @RequestMapping("/getZhuangTai")
    public ResultInfo getList(HttpSession session) {
        try {
            String token = SessionUtil.getToken(session);
            String[] token_list = token.split(",");
            token_list = token_list[1].split("\"");
            String login_company = token_list[3];
            List<UseState> select_list = iUseStateService.getList(login_company);
            return ResultInfo.success("获取成功", select_list);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }


    //解除占用工作台列
    @RequestMapping(value = "/update", method = RequestMethod.POST)
    public ResultInfo update(HttpSession session,String column,int id) {
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
        Map<String, Object> map = iUserInfoService.login(userInfo.getD(), userInfo.getE(), userInfo.getB());
        SessionUtil.setPower(session, StringUtils.cast(map.get("power")));
        SessionUtil.setGongSiPower(session, StringUtils.cast(map.get("companyPower")));
        SessionUtil.setRenYuanPower(session, StringUtils.cast(map.get("personPower")));
        PowerUtil powerUtil = PowerUtil.getPowerUtil(session);
        if (!powerUtil.isUpdate("工作台使用状态")) {
            return ResultInfo.error(401, "无权限");
        }
        try {
            if (iUseStateService.update(column,id)) {
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


    //解除说有
    @RequestMapping(value = "/update_all", method = RequestMethod.POST)
    public ResultInfo update_all(HttpSession session) {
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
        Map<String, Object> map = iUserInfoService.login(userInfo.getD(), userInfo.getE(), userInfo.getB());
        SessionUtil.setPower(session, StringUtils.cast(map.get("power")));
        SessionUtil.setGongSiPower(session, StringUtils.cast(map.get("companyPower")));
        SessionUtil.setRenYuanPower(session, StringUtils.cast(map.get("personPower")));
        PowerUtil powerUtil = PowerUtil.getPowerUtil(session);
        String token = SessionUtil.getToken(session);
        String[] token_list = token.split(",");
        token_list = token_list[1].split("\"");
        String company = token_list[3];
        if (!powerUtil.isUpdate("工作台使用状态")) {
            return ResultInfo.error(401, "无权限");
        }
        try {
            if (iUseStateService.update_all(company)) {
                return ResultInfo.success("修改成功",company);
            } else {
                return ResultInfo.success("修改失败",company);
            }
        } catch (Exception e) {
            e.printStackTrace();
            log.error("修改失败：{}", e.getMessage());
            return ResultInfo.error("修改失败");
        }
    }

    //占用工作台列
    @RequestMapping(value = "/updateName", method = RequestMethod.POST)
    public ResultInfo updateName(HttpSession session,String column) {
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
        Map<String, Object> map = iUserInfoService.login(userInfo.getD(), userInfo.getE(), userInfo.getB());
        SessionUtil.setPower(session, StringUtils.cast(map.get("power")));
        SessionUtil.setGongSiPower(session, StringUtils.cast(map.get("companyPower")));
        SessionUtil.setRenYuanPower(session, StringUtils.cast(map.get("personPower")));
        PowerUtil powerUtil = PowerUtil.getPowerUtil(session);
        if (!powerUtil.isUpdate("工作台使用状态")) {
            return ResultInfo.error(401, "无权限");
        }
        try {
            String token = SessionUtil.getToken(session);
            String[] token_list = token.split(",");
            token_list = token_list[1].split("\"");
            String login_company = token_list[3];

            token_list = token.split(",");
            token_list = token_list[2].split("\"");
            String renyuan = token_list[3];

            if (iUseStateService.updateName(column,login_company,renyuan)) {
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
