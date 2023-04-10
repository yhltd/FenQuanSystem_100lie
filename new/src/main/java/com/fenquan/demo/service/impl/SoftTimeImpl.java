package com.fenquan.demo.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.fenquan.demo.entity.*;
import com.fenquan.demo.mapper.ChartMapper;
import com.fenquan.demo.mapper.SoftTimeMapper;
import com.fenquan.demo.service.ISoftTimeService;
import com.fenquan.demo.util.GsonUtil;
import com.fenquan.demo.util.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class SoftTimeImpl extends ServiceImpl<SoftTimeMapper, SoftTime> implements ISoftTimeService {

    @Autowired
    SoftTimeMapper softTimeMapper;

//    @Override
//    public List<SoftTime> getList(String company) {
//        return softTimeMapper.getList(company);
//    }

    @Override
    public Map<String, Object> getList(String company) {
        //条件构造器
        QueryWrapper<SoftTime> queryWrapper = new QueryWrapper<>();
        //公司
        queryWrapper.eq("name", company);
        //账号
        queryWrapper.eq("soft_name", "分权");
        //获取User
        SoftTime controlSoftTime = this.getOne(queryWrapper);
        //如果不为空
        String data = StringUtils.EMPTY;
        if (StringUtils.isNotNull(controlSoftTime)) {
            //转JSON
            data = GsonUtil.toJson(controlSoftTime);
            Map<String, Object> map = new HashMap<>();
            map.put("token", data);
            return map;
        }
        return null;
    }

}
