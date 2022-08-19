package com.fenquan.demo.service.impl;


import com.fenquan.demo.entity.CompanyPower;
import com.fenquan.demo.mapper.CompanyPowerMapper;
import com.fenquan.demo.service.ICompanyPowerService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompanyPowerImpl extends ServiceImpl<CompanyPowerMapper, CompanyPower> implements ICompanyPowerService {
    @Autowired
    CompanyPowerMapper companyPowerMapper;

    @Override
    public List<CompanyPower> getList(String company) {
        return companyPowerMapper.getList(company);
    }

    @Override
    public boolean update(String column,int id,String this_value) {
        return companyPowerMapper.update(column,id,this_value);
    }

}
