package com.fenquan.demo.service.impl;


import com.fenquan.demo.entity.UserInfo;
import com.fenquan.demo.mapper.UserInfoMapper;
import com.fenquan.demo.service.IUserInfoService;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.fenquan.demo.util.StringUtils;
import com.fenquan.demo.util.GsonUtil;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class UserInfoImpl extends ServiceImpl<UserInfoMapper, UserInfo> implements IUserInfoService {
    @Autowired
    UserInfoMapper userInfoMapper;

    @Override
    public List<UserInfo> get_select_List() {
        return userInfoMapper.get_select_List();
    }

    @Override
    public List<UserInfo> get_renyuan_List(String company) {
        return userInfoMapper.get_renyuan_List(company);
    }

    @Override
    public Map<String, Object> login(String username, String password,String company) {
        //条件构造器
        QueryWrapper<UserInfo> queryWrapper = new QueryWrapper<>();
        //公司
        queryWrapper.eq("B", company);
        //账号
        queryWrapper.eq("D", username);
        //密码
        queryWrapper.eq("E", password);
        //获取User
        UserInfo userInfo = this.getOne(queryWrapper);
        //如果不为空
        String data = StringUtils.EMPTY;
        if (StringUtils.isNotNull(userInfo)) {
            //转JSON
            data = GsonUtil.toJson(userInfo);
            Map<String, Object> map = new HashMap<>();
            map.put("token", data);
            return map;
        }
        return null;
    }

    @Override
    public List<UserInfo> queryC(String query) {return userInfoMapper.queryC(query);}

    @Override
    public List<UserInfo> queryC_Inquire(String company,String query) {
        return userInfoMapper.queryC_Inquire(company,query);
    }

    @Override
    public UserInfo add(UserInfo userInfo) {return this.save(userInfo) ? userInfo : null;}

    @Override
    public boolean addcopy(String company, String B,String renyuan_id) {
        return userInfoMapper.addcopy(company,B,renyuan_id);
    }

    @Override
    public boolean update(UserInfo userInfo) {
        return this.updateById(userInfo);
    }

    @Override
    public boolean delete(List<Integer> idList) {return removeByIds(idList);}

    @Override
    public boolean delete_quanxian(List<Integer> quanxianList) {return removeByIds(quanxianList);}

    @Override
    public boolean deletecopy(List<Integer> renyuanid) {return removeByIds(renyuanid);}



}