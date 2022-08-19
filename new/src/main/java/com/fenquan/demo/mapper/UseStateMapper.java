package com.fenquan.demo.mapper;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.fenquan.demo.entity.CompanyPower;
import com.fenquan.demo.entity.UseState;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;


@Mapper
public interface UseStateMapper extends BaseMapper<UseState> {

    @Select("select * from baitaoquanxian_copy2 where 公司=#{company}")
    List<UseState> getList(String company);

    @Update("update baitaoquanxian_copy2 set ${column} = '' where id=#{id}")
    boolean update(String column,int id);
}
