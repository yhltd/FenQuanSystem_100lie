package com.fenquan.demo.service.impl;

import com.baomidou.dynamic.datasource.annotation.DS;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.fenquan.demo.entity.PushNews;
import com.fenquan.demo.mapper.PushNewsMapper;
import com.fenquan.demo.service.PushNewsService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PushNewsImpl extends ServiceImpl<PushNewsMapper, PushNews> implements PushNewsService {

    // 移除自动注入的 PushNewsMapper，因为父类已经提供了
    // 直接使用父类的 getBaseMapper() 方法

    @Override
    @DS("db3")
    public List<PushNews> getList(String companyName) {
        // 使用父类提供的 getBaseMapper() 方法获取 mapper
        return baseMapper.getList(companyName);
    }
}
