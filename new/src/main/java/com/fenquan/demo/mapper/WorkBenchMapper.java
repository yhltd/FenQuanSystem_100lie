package com.fenquan.demo.mapper;

import com.baomidou.dynamic.datasource.annotation.DS;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.fenquan.demo.entity.WorkBench;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
@DS("druid")
public interface WorkBenchMapper extends BaseMapper<WorkBench> {

    @Select("select * from baitaoquanxian where 公司=#{company} order by 日期 desc")
    List<WorkBench> getList(String company);

    @Select("select * from baitaoquanxian where 公司=#{company} and convert(date,${column}) >= convert(date,#{start_date}) and convert(date,${column}) <= convert(date,#{stop_date}) order by 日期 desc")
    List<WorkBench> queryList(String company,String start_date,String stop_date,String column);

    @Insert("insert into baitaoquanxian(人员,公司,日期,a最后修改日期) values(#{renyuan},#{company},#{today},#{today})")
    boolean add(String company, String renyuan,String today);

    @Update("update baitaoquanxian set ${column} = #{value},a最后修改日期=#{time} where id=#{id}")
    boolean update(String column,String value,int id,String time);
}
