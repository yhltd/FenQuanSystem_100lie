package com.fenquan.demo.mapper;

import com.baomidou.dynamic.datasource.annotation.DS;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.fenquan.demo.entity.PersonPower;
import com.fenquan.demo.entity.UserInfo;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
@DS("druid")
public interface PersonPowerMapper extends BaseMapper<PersonPower> {

    @Select("select * from baitaoquanxian_copy1 where quanxian=#{company}")
    List<PersonPower> getList(String company);

    @Select("select * from baitaoquanxian_copy1 where quanxian=#{company} and chashanquanxian=#{chashanquanxian}")
    List<PersonPower> get_divide(String company,String chashanquanxian);

    @Select("select * from baitaoquanxian_copy1 where renyuan_id=#{id}")
    List<PersonPower> getListById(String id);

    @Select("select * from baitaoquanxian_copy1 where quanxian=#{company} and B like '%'+#{query}+'%' and chashanquanxian like '%'+ #{inquire_revise} +'%'")
    List<PersonPower> queryList(String company,String query,String inquire_revise);

    @Update("update baitaoquanxian_copy1 set ${column} = #{this_value} where id=#{id}")
    boolean update(String column,int id,String this_value);

    @Delete("delete from baitaoquanxian_copy1 where renyuan_id =#{renyuan_id}")
    boolean delete(String renyuan_id);
}
