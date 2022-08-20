package com.fenquan.demo.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.fenquan.demo.entity.Department;
import com.fenquan.demo.mapper.DepartmentMapper;
import com.fenquan.demo.service.IDepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepartmentImpl extends ServiceImpl<DepartmentMapper, Department> implements IDepartmentService {

    @Autowired
    DepartmentMapper departmentMapper;

    @Override
    public List<Department> getList(String company) {
        return departmentMapper.getList(company);
    }

    @Override
    public List<Department> queryList(String company,String department) {
        return departmentMapper.queryList(company,department);
    }

    @Override
    public Department add(Department department) {
        return this.save(department) ? department : null;
    }

    @Override
    public boolean update(Department department) {
        return this.updateById(department);
    }

    @Override
    public boolean delete(List<Integer> idList) {
        return removeByIds(idList);
    }
}
