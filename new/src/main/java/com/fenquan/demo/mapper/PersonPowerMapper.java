package com.fenquan.demo.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.fenquan.demo.entity.PersonPower;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

@Mapper
public interface PersonPowerMapper extends BaseMapper<PersonPower> {

    @Select("select * from baitaoquanxian_copy1 where quanxian=#{company}")
    List<PersonPower> getList(String company);

    @Select("select * from baitaoquanxian_copy1 where quanxian=#{company} and B like '%'+#{query}+'%'")
    List<PersonPower> queryList(String company,String query);

    @Update("update baitaoquanxian_copy1 set ${column} = #{this_value} where id=#{id}")
    boolean update(String column,int id,String this_value);

}
