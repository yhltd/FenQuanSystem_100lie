package com.fenquan.demo.mapper;

import com.baomidou.dynamic.datasource.annotation.DS;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.fenquan.demo.entity.PersonPower;
import com.fenquan.demo.entity.WorkBench_GongShi;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Repository;

import java.util.List;


@Mapper
@Repository
@DS("druid")
public interface WorkBenchGongShiMapper extends BaseMapper<WorkBench_GongShi>{

    @Select("select * from baitaoquanxian_jisuan where company=#{company}")
    List<WorkBench_GongShi> getList(String company);

    @Select("select * from baitaoquanxian_jisuan where company=#{company} and thiscolumn like '%'+#{query}+'%'")
    List<WorkBench_GongShi> queryList(String company, String query);

}
