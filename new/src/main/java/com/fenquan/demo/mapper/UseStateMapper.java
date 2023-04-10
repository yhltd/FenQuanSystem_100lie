package com.fenquan.demo.mapper;
import com.baomidou.dynamic.datasource.annotation.DS;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.fenquan.demo.entity.CompanyPower;
import com.fenquan.demo.entity.UseState;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Repository;

import java.util.List;


@Mapper
@Repository
@DS("druid")
public interface UseStateMapper extends BaseMapper<UseState> {

    @Select("select * from baitaoquanxian_copy2 where 公司=#{company}")
    List<UseState> getList(String company);

    @Update("update baitaoquanxian_copy2 set ${column} = '' where id=#{id}")
    boolean update(String column,int id);

    @Update("update baitaoquanxian_copy2 set A='',B='',C='',D='',E='',F='',G=''," +
            "H='',I='',J='',K='',L='',M='',N='',O='',P='',Q='',R='',S='',T='',U=''," +
            "V='',W='',X='',Y='',Z='',AA='',AB='',AC='',AD='',AE='',AF='',AG='',AH=''," +
            "AI='',AJ='',AK='',AL='',AM='',AN='',AO='',AP='',AQ='',AR='',ASS='',AT='',AU=''," +
            "AV='',AW='',AX='',AY='',AZ='',BA='',BB='',BC='',BD='',BE='',BF='',BG='',BH='',BI=''," +
            "BJ='',BK='',BL='',BM='',BN='',BO='',BP='',BQ='',BR='',BS='',BT='',BU='',BV='',BW='',BX=''," +
            "BYY='',BZ='',CA='',CB='',CC='',CD='',CE='',CF='',CG='',CH='',CI='',CJ='',CK='',CL='',CM='',CN=''," +
            "CO='',CP='',CQ='',CR='',CS='',CT='',CU='',CV='' where 公司=#{company}")
    boolean update_all(String company);

    @Update("update baitaoquanxian_copy2 set ${column} = #{name} where 公司=#{company}")
    boolean updateName(String column,String company,String name);
}
