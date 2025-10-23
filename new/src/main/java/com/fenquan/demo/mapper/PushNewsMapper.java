package com.fenquan.demo.mapper;

import com.baomidou.dynamic.datasource.annotation.DS;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.fenquan.demo.entity.PushNews;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
@DS("db3")
public interface PushNewsMapper extends BaseMapper<PushNews> {
//    @Select("select * from product_pushnews WHERE xtname = '分权编辑系统' AND gsname = '云合未来'")
//    List<PushNews> getList();

    @Select("SELECT * FROM product_pushnews " +
            "WHERE xtname = '分权编辑系统' " +
            "AND gsname = #{companyName} " +
            "AND ( " +
            "   (qidate IS NULL OR GETUTCDATE() >= CONVERT(DATETIME, LEFT(qidate, 10), 120)) " +
            "   AND (zhidate IS NULL OR GETUTCDATE() <= CONVERT(DATETIME, LEFT(zhidate, 10), 120)) " +
            ")")
    List<PushNews> getList(@Param("companyName") String companyName);

    @Select("SELECT beizhu2,beizhu3 FROM product_pushnews " +
            "WHERE xtname = '分权编辑系统' " +
            "AND gsname = #{companyName} " )
    List<PushNews> getLogin(@Param("companyName") String companyName);
}
