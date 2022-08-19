package com.fenquan.demo.service;

import com.fenquan.demo.entity.CompanyPower;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ICompanyPowerService {
    /**
     * 查询公司权限
     *
     * @return 信息集合
     */
    List<CompanyPower> getList(String company);

    /**
     * 查询公司权限
     *
     * @return 信息集合
     */
    boolean update(String column,int id,String this_value);
}
