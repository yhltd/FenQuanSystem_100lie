package com.fenquan.demo.controller;
import com.fenquan.demo.entity.Department;
import com.fenquan.demo.entity.PersonPower;
import com.fenquan.demo.entity.WorkBench_GongShi;
import com.fenquan.demo.service.IWorkBenchGongShiService;
import com.fenquan.demo.util.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.List;


@Slf4j
@RestController
@RequestMapping("/workbench_gongshi")
public class WorkBenchGongShiController {

    @Autowired
    IWorkBenchGongShiService iWorkBenchGongShiService;


    @RequestMapping("/getList")
    public ResultInfo getList(HttpSession session) {
        PowerUtil powerUtil = PowerUtil.getPowerUtil(session);
        if (!powerUtil.isSelect("工作台公式设置")) {
            return ResultInfo.error(401, "无权限");
        }
        try {
            String token = SessionUtil.getToken(session);
            String[] token_list = token.split(",");
            token_list = token_list[1].split("\"");
            String login_company = token_list[3];
            List<WorkBench_GongShi> select_list = iWorkBenchGongShiService.getList(login_company);
            return ResultInfo.success("获取成功", select_list);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }

    @RequestMapping("/getList2")
    public ResultInfo getList2(HttpSession session) {
        PowerUtil powerUtil = PowerUtil.getPowerUtil(session);
//        if (!powerUtil.isSelect("工作台公式设置")) {
//            return ResultInfo.error(401, "无权限");
//        }
        try {
            String token = SessionUtil.getToken(session);
            String[] token_list = token.split(",");
            token_list = token_list[1].split("\"");
            String login_company = token_list[3];
            List<WorkBench_GongShi> select_list = iWorkBenchGongShiService.getList(login_company);
            return ResultInfo.success("获取成功", select_list);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }


    @RequestMapping("/queryList")
    public ResultInfo queryList(HttpSession session,String query) {
        PowerUtil powerUtil = PowerUtil.getPowerUtil(session);
        if (!powerUtil.isSelect("工作台公式设置")) {
            return ResultInfo.error(401, "无权限");
        }
        try {
            String token = SessionUtil.getToken(session);
            String[] token_list = token.split(",");
            token_list = token_list[1].split("\"");
            String login_company = token_list[3];
            List<WorkBench_GongShi> select_list = iWorkBenchGongShiService.queryList(login_company,query);
            return ResultInfo.success("获取成功", select_list);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }

    /**
     * 添加
     *
     * @param map
     * @return ResultInfo
     */
    @RequestMapping("/add")
    public ResultInfo add(@RequestBody HashMap map, HttpSession session) {
        PowerUtil powerUtil = PowerUtil.getPowerUtil(session);
        if (!powerUtil.isAdd("工作台公式设置")) {
            return ResultInfo.error(401, "无权限");
        }
        GsonUtil gsonUtil = new GsonUtil(GsonUtil.toJson(map));
        try {
            WorkBench_GongShi workBench_GongShi = GsonUtil.toEntity(gsonUtil.get("addUserInfo"), WorkBench_GongShi.class);
            String token = SessionUtil.getToken(session);
            String[] token_list = token.split(",");
            token_list = token_list[1].split("\"");
            String login_company = token_list[3];
            workBench_GongShi.setCompany(login_company);
            workBench_GongShi = iWorkBenchGongShiService.add(workBench_GongShi);
            if (StringUtils.isNotNull(workBench_GongShi)) {
                return ResultInfo.success("添加成功", workBench_GongShi);
            } else {
                return ResultInfo.success("添加失败", null);
            }
        } catch (Exception e) {
            e.printStackTrace();
            log.error("添加失败：{}", e.getMessage());
            log.error("参数：{}", map);
            return ResultInfo.error("添加失败");
        }
    }


    /**
     * 修改
     *
     * @param menuSettingsJson
     * @return ResultInfo
     */
    @RequestMapping(value = "/update", method = RequestMethod.POST)
    public ResultInfo update(@RequestBody String menuSettingsJson,HttpSession session) {
        PowerUtil powerUtil = PowerUtil.getPowerUtil(session);
        if (!powerUtil.isUpdate("工作台公式设置")) {
            return ResultInfo.error(401, "无权限");
        }
        WorkBench_GongShi workBench_GongShi = null;
        try {
            workBench_GongShi = DecodeUtil.decodeToJson(menuSettingsJson, WorkBench_GongShi.class);
            if (iWorkBenchGongShiService.update(workBench_GongShi)) {
                return ResultInfo.success("修改成功", workBench_GongShi);
            } else {
                return ResultInfo.success("修改失败", workBench_GongShi);
            }
        } catch (Exception e) {
            e.printStackTrace();
            log.error("修改失败：{}", e.getMessage());
            log.error("参数：{}", workBench_GongShi);
            return ResultInfo.error("修改失败");
        }
    }

    /**
     * 删除
     *
     * @param map
     * @return ResultInfo
     */
    @RequestMapping("/delete")
    public ResultInfo delete(@RequestBody HashMap map,HttpSession session) {
        PowerUtil powerUtil = PowerUtil.getPowerUtil(session);
        if (!powerUtil.isDelete("工作台公式设置")) {
            return ResultInfo.error(401, "无权限");
        }
        GsonUtil gsonUtil = new GsonUtil(GsonUtil.toJson(map));
        List<Integer> idList = GsonUtil.toList(gsonUtil.get("idList"), Integer.class);
        try {
            if (iWorkBenchGongShiService.delete(idList)) {
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
}
