package com.fenquan.demo.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.fenquan.demo.entity.Department;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

@Mapper
public interface DepartmentMapper extends BaseMapper<Department> {

    @Select("select * from baitaoquanxian_department where company=#{company}")
    List<Department> getList(String company);

    @Select("select * from baitaoquanxian_department where company=#{company} and department_name like '%'+#{department}+'%'")
    List<Department> queryList(String company,String department);

    @Select("select department_name from baitaoquanxian_department where company=#{company} GROUP BY department_name")
    List<Department> querbumen(String company);

}
