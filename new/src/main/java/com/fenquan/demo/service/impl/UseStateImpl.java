package com.fenquan.demo.service.impl;

import com.fenquan.demo.entity.UseState;
import com.fenquan.demo.mapper.UseStateMapper;
import com.fenquan.demo.service.IUseStateService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class UseStateImpl extends ServiceImpl<UseStateMapper, UseState> implements IUseStateService {

    @Autowired
    UseStateMapper useStateMapper;

    @Override
    public List<UseState> getList(String company) {
        return useStateMapper.getList(company);
    }

    @Override
    public boolean update(String column,int id) {
        return useStateMapper.update(column,id);
    }

    @Override
    public boolean updateName(String column,String company,String name) {
        return useStateMapper.updateName(column,company,name);
    }

}
