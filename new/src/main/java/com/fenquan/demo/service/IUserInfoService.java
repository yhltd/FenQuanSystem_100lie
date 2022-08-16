package com.fenquan.demo.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.fenquan.demo.entity.UserInfo;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public interface IUserInfoService {
    /**
     * 查询公司下拉
     *
     * @return 信息集合
     */
    List<UserInfo> get_select_List();


    /**
     * 登陆
     *
     * @param username 用户名
     * @param password  密码
     * @param company   公司
     * @return 转Json后的用户信息
     */
    Map<String,Object> login(String username, String password, String company);
}
