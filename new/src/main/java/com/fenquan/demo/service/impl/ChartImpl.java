package com.fenquan.demo.service.impl;

import com.fenquan.demo.entity.Chart;
import com.fenquan.demo.mapper.ChartMapper;
import com.fenquan.demo.service.IChartService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChartImpl extends ServiceImpl<ChartMapper, Chart> implements IChartService {

    @Autowired
    ChartMapper chartMapper;

    @Override
    public List<Chart> getGongSiList(String company) {
        return chartMapper.getGongSiList(company);
    }

    @Override
    public List<Chart> queryGongSiList(String company,String start_date,String stop_date) {
        return chartMapper.queryGongSiList(company,start_date,stop_date);
    }

    @Override
    public List<Chart> queryRenYuanList(String company,String name,String start_date,String stop_date) {
        return chartMapper.queryRenYuanList(company,name,start_date,stop_date);
    }
}
