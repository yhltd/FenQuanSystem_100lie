package com.fenquan.demo.mapper;

import com.baomidou.dynamic.datasource.annotation.DS;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.fenquan.demo.entity.CompanyPower;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
@DS("druid")
public interface CompanyPowerMapper extends BaseMapper<CompanyPower> {

    @Select("select * from baitaoquanxian_gongsi where B=#{company}")
    List<CompanyPower> getList(String company);

    @Update("update baitaoquanxian_gongsi set ${column} = #{this_value} where id=#{id}")
    boolean update(String column,int id,String this_value);

}
