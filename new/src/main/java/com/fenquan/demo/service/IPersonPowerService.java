package com.fenquan.demo.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.fenquan.demo.entity.PersonPower;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public interface IPersonPowerService {

    /**
     * 查询人员权限
     *
     * @return 信息集合
     */
    List<PersonPower> getList(String company);

    /**
     * 查询人员权限
     *
     * @return 信息集合
     */
    List<PersonPower> queryList(String company,String query);

    /**
     * 修改人员对应列的权限
     */
    boolean update(String column,int id,String this_value);

}
