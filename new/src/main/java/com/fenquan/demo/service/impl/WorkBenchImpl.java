package com.fenquan.demo.service.impl;

import com.fenquan.demo.entity.WorkBench;
import com.fenquan.demo.mapper.WorkBenchMapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.fenquan.demo.service.IWorkBenchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WorkBenchImpl extends ServiceImpl<WorkBenchMapper, WorkBench> implements IWorkBenchService {

    @Autowired
    WorkBenchMapper workBenchMapper;

    @Override
    public List<WorkBench> getList(String company) {
        return workBenchMapper.getList(company);
    }

    @Override
    public List<WorkBench> queryList(String company,String start_date,String stop_date,String column) {
        return workBenchMapper.queryList(company,start_date,stop_date,column);
    }

    @Override
    public boolean add(String company, String renyuan,String today) {
        return workBenchMapper.add(company,renyuan,today);
    }

    @Override
    public boolean delete(List<Integer> idList) {
        return removeByIds(idList);
    }

    @Override
    public boolean update(String column,String value,int id,String time) {
        return workBenchMapper.update(column,value,id,time);
    }

}
