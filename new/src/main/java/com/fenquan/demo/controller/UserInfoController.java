package com.fenquan.demo.controller;

import com.fenquan.demo.entity.Department;
import com.fenquan.demo.entity.SoftTime;
import com.fenquan.demo.entity.UserInfo;
import com.fenquan.demo.service.IDepartmentService;
import com.fenquan.demo.service.IPersonPowerService;
import com.fenquan.demo.service.ISoftTimeService;
import com.fenquan.demo.service.IUserInfoService;
import com.fenquan.demo.util.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;


@Slf4j
@RestController
@RequestMapping("/user")
public class UserInfoController{

    @Autowired
    IUserInfoService iUserInfoService;

    @Autowired
    ISoftTimeService iSoftTimeService;

    @Autowired
    IPersonPowerService iPersonPowerService;

    @Autowired
    IDepartmentService iDepartmentService;

    //登录页面公司下拉查询
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

    //查询人员下拉列表
    @RequestMapping("/get_renyuan_List")
    public ResultInfo get_renyuan_List(HttpSession session) {
        try {
            String token = SessionUtil.getToken(session);
            String[] token_list = token.split(",");
            token_list = token_list[1].split("\"");
            String login_company = token_list[3];
            List<UserInfo> select_list = iUserInfoService.get_renyuan_List(login_company);
            return ResultInfo.success("获取成功", select_list);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }


    //登录
    @RequestMapping("/login")
    public ResultInfo login(HttpSession session, String username, String password, String company) {
        try {
            //获取user
            SessionUtil.remove(session, "token");
            Map<String, Object> quanxian_map = iSoftTimeService.getList(company);
            if (StringUtils.isEmpty(quanxian_map)) {
                return ResultInfo.error(-1, "工具到期，请联系我公司续费。");
            }else{
                String token = quanxian_map.get("token").toString();
                String[] token_list = token.split(",");
                String[] endtime_list = token_list[0].split("\"");
                String endtime = endtime_list[3];
                String[] mark1_list = token_list[1].split("\"");
                String mark1 = mark1_list[3];
                String[] mark2_list = token_list[2].split("\"");
                String mark2 = mark2_list[3];
                String[] mark4_list = token_list[3].split("\"");
                String mark4 = mark4_list[3];
//                String pushtime = new SimpleDateFormat("yyyy-MM-dd").format(new Date());
            }
            Map<String, Object> map = iUserInfoService.login(username, password, company);
            //为Null则查询不到
            if (StringUtils.isEmpty(map)) {
                SessionUtil.remove(session, "token");
                return ResultInfo.error(-1, "用户名密码错误或账号被锁定");
            } else {
                SessionUtil.setToken(session, map.get("token").toString());
                SessionUtil.setPower(session, StringUtils.cast(map.get("power")));
                SessionUtil.setGongSiPower(session, StringUtils.cast(map.get("companyPower")));
                SessionUtil.setRenYuanPower(session, StringUtils.cast(map.get("personPower")));
                String token = SessionUtil.getToken(session);
                String[] token_list = token.split(",");
                token_list = token_list[1].split("\"");
                String login_company = token_list[3];
                return ResultInfo.success("登陆成功", null);
            }
        } catch (Exception e) {
            log.error("登陆失败：{}", e.getMessage());
            log.error("参数：{}", username);
            log.error("参数：{}", password);
            return ResultInfo.error("错误!");
        }
    }

    /*
     *人员信息页面刷新
     * */
    @RequestMapping("/queryC")
    public ResultInfo queryC(HttpSession session){
        PowerUtil powerUtil = PowerUtil.getPowerUtil(session);
        if (!powerUtil.isSelect("人员管理")) {
            return ResultInfo.error(401, "无权限");
        }
        String token = SessionUtil.getToken(session);
        String[] token_list = token.split(",");
        token_list = token_list[1].split("\"");
        String login_company = token_list[3];
        try {
            List<UserInfo> queryC=iUserInfoService.queryC(login_company);
            return ResultInfo.success("查询成功!",queryC);
        }catch (Exception e){
            log.error("查询失败：{}",e.getMessage());
            return ResultInfo.error("错误!");
        }
    }

    /*
     *人员信息页面条件查询
     * */
    @RequestMapping("/queryC_Inquire")
    public ResultInfo queryC_Inquire(HttpSession session,String query){
        PowerUtil powerUtil = PowerUtil.getPowerUtil(session);
        if (!powerUtil.isSelect("人员管理")) {
            return ResultInfo.error(401, "无权限");
        }
        String token = SessionUtil.getToken(session);
        String[] token_list = token.split(",");
        token_list = token_list[1].split("\"");
        String login_company = token_list[3];
        try {
            List<UserInfo> queryC_Inquire=iUserInfoService.queryC_Inquire(login_company,query);
            return ResultInfo.success("查询成功!",queryC_Inquire);
        }catch (Exception e){
            log.error("查询失败：{}",e.getMessage());
            return ResultInfo.error("错误!");
        }
    }


    /*
     *添加
     * */
    @RequestMapping("/add")
    public ResultInfo add(String add_C,String add_D,String add_E,String add_zhuangtai,String add_email,String add_phone,String add_bianhao,String add_bumen,String chashanquanxian ,HttpSession session){
        PowerUtil powerUtil = PowerUtil.getPowerUtil(session);
        if (!powerUtil.isAdd("人员管理")) {
            return ResultInfo.error(401, "无权限");
        }
//        Random ran = new Random(System.currentTimeMillis());
//        ran.nextLong();
        DateTimeFormatter fmt= DateTimeFormatter.ofPattern("yyyyMMddHHmmssSSS");
        String newsNo= LocalDateTime.now().format(fmt);
        String token = SessionUtil.getToken(session);
        String[] token_list = token.split(",");
        token_list = token_list[1].split("\"");
        String login_company = token_list[3];
        UserInfo iuser = new UserInfo();
        try{
            iuser.setB(login_company);
            iuser.setC(add_C);
            iuser.setD(add_D);
            iuser.setE(add_E);
            iuser.setRenyuanId(newsNo);
            iuser.setZhuangtai(add_zhuangtai);
            iuser.setBianhao(add_bianhao);
            iuser.setEmail(add_email);
            iuser.setPhone(add_phone);
            iuser.setBumen(add_bumen);
            String a= "查询";
            String b= "修改";
            iuser = iUserInfoService.add(iuser);
            if (StringUtils.isNotNull(iuser) && iUserInfoService.addcopy(login_company,add_C,newsNo,a)&& iUserInfoService.addcopy(login_company,add_C,newsNo,b)) {
                return ResultInfo.success("添加成功", iuser);
            } else {
                return ResultInfo.success("添加失败", null);
            }
        }catch (Exception e){
            e.printStackTrace();
            log.error("添加失败：{}", e.getMessage());
            return ResultInfo.error("添加失败");
        }
    }




    /*
     *修改
     * */
    @RequestMapping(value = "/update", method = RequestMethod.POST)
    public ResultInfo update(@RequestBody String menuSettingsJson ,HttpSession session){
        PowerUtil powerUtil = PowerUtil.getPowerUtil(session);
        if (!powerUtil.isUpdate("人员管理")) {
            return ResultInfo.error(401, "无权限");
        }
        UserInfo userInfo = null;
        try{
            userInfo = DecodeUtil.decodeToJson(menuSettingsJson, UserInfo.class);
            if (iUserInfoService.update(userInfo)) {
                return ResultInfo.success("修改成功", userInfo);
            } else {
                return ResultInfo.success("修改失败", userInfo);
            }
        }catch (Exception e){
            e.printStackTrace();
            log.error("修改失败：{}", e.getMessage());
            return ResultInfo.error("修改失败");
        }
    }


    /*
     *删除
     * */
    @RequestMapping("/delete")
    public ResultInfo delete(HttpSession session,String renyuan_id){
//        GsonUtil gsonUtil = new GsonUtil(GsonUtil.toJson(map));
       //List<Integer> renyuan_id = GsonUtil.toList(gsonUtil.get("renyuan_id"), Integer.class);
//        List<Integer> quanxianList = GsonUtil.toList(gsonUtil.get("quanxianList"), Integer.class);
        try{
            if (iUserInfoService.delete(renyuan_id) && iUserInfoService.deletecopy(renyuan_id)) {
                return ResultInfo.success("删除成功", renyuan_id);
            } else {
                return ResultInfo.success("删除失败", renyuan_id);
            }
        }catch (Exception e){
            e.printStackTrace();
            log.error("删除失败：{}", e.getMessage());
            return ResultInfo.error("删除失败");
        }
    }

    /*
     *列表部门查询
     * */
    @RequestMapping("/querbumen")
    public ResultInfo querbumen(HttpSession session){
        String token = SessionUtil.getToken(session);
        String[] token_list = token.split(",");
        token_list = token_list[1].split("\"");
        String login_company = token_list[3];
        try {
            List<Department> querbumen=iDepartmentService.querbumen(login_company);
            return ResultInfo.success("查询成功!",querbumen);
        }catch (Exception e){
            log.error("查询失败：{}",e.getMessage());
            return ResultInfo.error("错误!");
        }
    }

}
