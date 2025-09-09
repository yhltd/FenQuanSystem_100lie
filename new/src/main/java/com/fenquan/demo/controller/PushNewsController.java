package com.fenquan.demo.controller;

import com.fenquan.demo.entity.Chart;
import com.fenquan.demo.entity.PushNews;
import com.fenquan.demo.entity.UserInfo;
import com.fenquan.demo.service.IUserInfoService;
import com.fenquan.demo.service.PushNewsService;
import com.fenquan.demo.util.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/psuhnews")
public class PushNewsController {

    @Autowired
    IUserInfoService iUserInfoService;

    @Autowired
    PushNewsService pushNewsService;

    @RequestMapping("/getnews")
    public ResultInfo getnews(HttpSession session) {
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
        Map<String, Object> map = iUserInfoService.login(userInfo.getD(), userInfo.getE(), userInfo.getB());
        SessionUtil.setPower(session, StringUtils.cast(map.get("power")));
        SessionUtil.setGongSiPower(session, StringUtils.cast(map.get("companyPower")));
        SessionUtil.setRenYuanPower(session, StringUtils.cast(map.get("personPower")));
        PowerUtil powerUtil = PowerUtil.getPowerUtil(session);
        String companyName = (String) session.getAttribute("companyName");
        log.info("从session获取的companyName: {}", companyName);
        if (!powerUtil.isSelect("人员数据分析")) {
            return ResultInfo.error(401, "无权限");
        }
        try {
            String token = SessionUtil.getToken(session);
            String[] token_list = token.split(",");
            token_list = token_list[1].split("\"");
            String login_company = token_list[3];
            List<PushNews> select_list = pushNewsService.getList(companyName);
            return ResultInfo.success("获取成功", select_list);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }

}
