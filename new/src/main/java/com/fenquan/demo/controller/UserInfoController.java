package com.fenquan.demo.controller;

import com.fenquan.demo.entity.UserInfo;
import com.fenquan.demo.service.IUserInfoService;
import com.fenquan.demo.util.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
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

    @RequestMapping("/login")
    public ResultInfo login(HttpSession session, String username, String password, String company) {
        try {
            //获取user
            Map<String, Object> map = iUserInfoService.login(username, password, company);
            UserInfo userInfo=new UserInfo();
            //为Null则查询不到
            if (StringUtils.isEmpty(map)) {
                SessionUtil.remove(session, "token");
                return ResultInfo.error(-1, "用户名密码错误");
            } else {
                SessionUtil.setToken(session, map.get("token").toString());
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
     *登录查询
     * */
    @RequestMapping("/queryC")
    public ResultInfo queryC(HttpSession session){
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
     *查询
     * */
    @RequestMapping("/queryC_Inquire")
    public ResultInfo queryC_Inquire(HttpSession session,String query){
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
    public ResultInfo add(String add_C,String add_D,String add_E,String add_zhuangtai,String add_email,String add_phone,String add_bianhao ,HttpSession session){
        Random ran = new Random(System.currentTimeMillis());
        ran.nextLong();
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
            iuser.setRenyuanId(ran.toString());
            iuser.setZhuangtai(add_zhuangtai);
            iuser.setBianhao(add_bianhao);
            iuser.setEmail(add_email);
            iuser.setPhone(add_phone);
            iuser = iUserInfoService.add(iuser);

            if (StringUtils.isNotNull(iuser) && iUserInfoService.addcopy(login_company,add_C,ran.toString())) {
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
    public ResultInfo delete(@RequestBody HashMap map , HttpSession session){
        GsonUtil gsonUtil = new GsonUtil(GsonUtil.toJson(map));
        List<Integer> idList = GsonUtil.toList(gsonUtil.get("idList"), Integer.class);
        List<Integer> quanxianList = GsonUtil.toList(gsonUtil.get("quanxianList"), Integer.class);
        try{
            if (iUserInfoService.delete(idList) && iUserInfoService.deletecopy(quanxianList)) {
                return ResultInfo.success("删除成功", idList);
            } else {
                return ResultInfo.success("删除失败", idList);
            }
        }catch (Exception e){
            e.printStackTrace();
            log.error("删除失败：{}", e.getMessage());
            return ResultInfo.error("删除失败");
        }
    }

}
