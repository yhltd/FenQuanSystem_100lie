package com.fenquan.demo.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.fenquan.demo.entity.UserInfo;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;


@Mapper
public interface UserInfoMapper extends BaseMapper<UserInfo> {
    @Select("select B from baitaoquanxian_renyun GROUP BY B")
    List<UserInfo> get_select_List();
}
