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
    public List<SoftTime> getList(String company) {
        return softTimeMapper.getList(company);
    }

}
