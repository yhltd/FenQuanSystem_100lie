package com.fenquan.demo.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.fenquan.demo.entity.UserInfo;
import com.fenquan.demo.entity.UserInfocopy;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;


@Mapper
public interface UserInfoMapper extends BaseMapper<UserInfo> {
    @Select("select B from baitaoquanxian_renyun GROUP BY B")
    List<UserInfo> get_select_List();

    @Select("select C from baitaoquanxian_renyun where B=#{company} GROUP BY C")
    List<UserInfo> get_renyuan_List(String company);

    @Select("select renyuan.id,renyuan.B,renyuan.C,renyuan.D,renyuan.E,renyuan.renyuan_id,renyuan.zhuangtai,renyuan.email,renyuan.phone,renyuan.bianhao,renyuan.bumen,quanxian.id as quanxian_id from baitaoquanxian_renyun as renyuan left join baitaoquanxian_copy1 as quanxian on renyuan.renyuan_id = quanxian.renyuan_id where renyuan.B =#{company}")
    List<UserInfo> queryC(String company);

    @Select("select renyuan.id,renyuan.B,renyuan.C,renyuan.D,renyuan.E,renyuan.renyuan_id,renyuan.zhuangtai,renyuan.email,renyuan.phone,renyuan.bianhao,renyuan.bumen,quanxian.id as quanxian_id from baitaoquanxian_renyun as renyuan left join baitaoquanxian_copy1 as quanxian on  renyuan.renyuan_id = quanxian.renyuan_id where renyuan.B=#{company} and renyuan.C like '%'+#{query}+'%'")
    List<UserInfo> queryC_Inquire(String company ,String query);

    @Insert("insert into baitaoquanxian_renyun(quanxian,B,C,D,E,renyuan_id,zhuangtai,email,phone,bianhao,bumen) values(company,B,add_C,add_E,renyuan_id,add_zhuangtai,add_email,add_phone,add_bianhao,add_bumen)")
    List<UserInfocopy> add(String add_C, String add_D, String add_E, String add_zhuangtai, String add_email, String add_phone, String add_bianhao,String add_bumen);

    @Insert("insert into baitaoquanxian_copy1(quanxian,B,renyuan_id) values(#{company},#{B},#{renyuan_id})")
    boolean addcopy(String company, String B,String renyuan_id);
}
