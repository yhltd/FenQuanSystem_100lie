package com.fenquan.demo.mapper;

import com.baomidou.dynamic.datasource.annotation.DS;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.fenquan.demo.entity.UserInfo;
import com.fenquan.demo.entity.UserInfocopy;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;


@Mapper
@Repository
@DS("druid")
public interface UserInfoMapper extends BaseMapper<UserInfo> {
    @Select("select B from baitaoquanxian_renyun GROUP BY B")
    List<UserInfo> get_select_List();

    @Select("select C from baitaoquanxian_renyun where B=#{company} GROUP BY C")
    List<UserInfo> get_renyuan_List(String company);

    @Select("select * from baitaoquanxian_renyun where  B=#{company} ")
    List<UserInfo> queryC(String company);

    @Select("select * from baitaoquanxian_renyun where B=#{company} and C like '%'+#{query}+'%'")
    List<UserInfo> queryC_Inquire(String company ,String query);

    @Insert("insert into baitaoquanxian_renyun(quanxian,B,C,D,E,renyuan_id,zhuangtai,email,phone,bianhao,bumen) values(company,B,add_C,add_E,renyuan_id,add_zhuangtai,add_email,add_phone,add_bianhao,add_bumen)")
    List<UserInfocopy> add(String add_C, String add_D, String add_E,String renyuan_id, String add_zhuangtai, String add_email, String add_phone, String add_bianhao,String add_bumen);

    @Insert("insert into baitaoquanxian_copy1(quanxian,B,renyuan_id,chashanquanxian) values(#{company},#{B},#{renyuan_id},#{chashanquanxian})")
    boolean addcopy(String company, String B,String renyuan_id,String chashanquanxian);

    @Delete("delete from baitaoquanxian_renyun where renyuan_id =#{renyuan_id}")
    boolean delete(String renyuan_id);

    @Delete("delete from baitaoquanxian_copy1 where renyuan_id =#{renyuan_id}")
    boolean deletecopy(String renyuan_id);
}
