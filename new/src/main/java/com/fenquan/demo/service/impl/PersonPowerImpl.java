package com.fenquan.demo.service.impl;

import com.fenquan.demo.entity.PersonPower;
import com.fenquan.demo.mapper.PersonPowerMapper;
import com.fenquan.demo.service.IPersonPowerService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonPowerImpl extends ServiceImpl<PersonPowerMapper, PersonPower> implements IPersonPowerService {
    @Autowired
    PersonPowerMapper personPowerMapper;

    @Override
    public List<PersonPower> getList(String company) {
        return personPowerMapper.getList(company);
    }

    @Override
    public List<PersonPower> get_divide(String company,String chashanquanxian) {
        return personPowerMapper.get_divide(company,chashanquanxian);
    }

    @Override
    public List<PersonPower> queryList(String company,String query) {
        return personPowerMapper.queryList(company,query);
    }

    @Override
    public boolean update(String column,int id,String this_value) {
        return personPowerMapper.update(column,id,this_value);
    }
//
//    @Override
//    public boolean deletecopy(String renyuan_id) {
//        return false;
//    }

    @Override
    public boolean delete(String renyuan_id) {return removeById(renyuan_id);}

//    @Override
//    public boolean deletecopy(String renyuan_id) {return removeById(renyuan_id);}
}
