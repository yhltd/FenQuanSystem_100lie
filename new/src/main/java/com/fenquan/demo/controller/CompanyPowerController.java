package com.fenquan.demo.controller;

import com.fenquan.demo.entity.CompanyPower;
import com.fenquan.demo.entity.UserInfo;
import com.fenquan.demo.service.ICompanyPowerService;
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
@RequestMapping("/company_power")
public class CompanyPowerController {

    @Autowired
    IUserInfoService iUserInfoService;

    @Autowired
    ICompanyPowerService iCompanyPowerService;

    @RequestMapping("/getList")
    public ResultInfo queryList(HttpSession session) {
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
        Map<String, Object> map = iUserInfoService.login(userInfo.getD(), userInfo.getE(), userInfo.getB());
        SessionUtil.setPower(session, StringUtils.cast(map.get("power")));
        SessionUtil.setGongSiPower(session, StringUtils.cast(map.get("companyPower")));
        SessionUtil.setRenYuanPower(session, StringUtils.cast(map.get("personPower")));
        PowerUtil powerUtil = PowerUtil.getPowerUtil(session);
        if (!powerUtil.isSelect("工作台权限设置")) {
            return ResultInfo.error(401, "无权限");
        }
        try {
            String token = SessionUtil.getToken(session);
            String[] token_list = token.split(",");
            token_list = token_list[1].split("\"");
            String login_company = token_list[3];
            List<CompanyPower> select_list = iCompanyPowerService.getList(login_company);
            return ResultInfo.success("获取成功", select_list);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }


    @RequestMapping(value = "/update", method = RequestMethod.POST)
    public ResultInfo update(HttpSession session,String column,int id,String this_value) {
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
        Map<String, Object> map = iUserInfoService.login(userInfo.getD(), userInfo.getE(), userInfo.getB());
        SessionUtil.setPower(session, StringUtils.cast(map.get("power")));
        SessionUtil.setGongSiPower(session, StringUtils.cast(map.get("companyPower")));
        SessionUtil.setRenYuanPower(session, StringUtils.cast(map.get("personPower")));
        PowerUtil powerUtil = PowerUtil.getPowerUtil(session);
        if (!powerUtil.isUpdate("工作台权限设置")) {
            return ResultInfo.error(401, "无权限");
        }
        try {
            if (iCompanyPowerService.update(column,id,this_value)) {
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
