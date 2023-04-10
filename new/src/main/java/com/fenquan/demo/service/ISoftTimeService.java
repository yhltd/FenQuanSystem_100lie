package com.fenquan.demo.service;

import com.fenquan.demo.entity.PersonPower;
import com.fenquan.demo.entity.SoftTime;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public interface ISoftTimeService {

    /**
     * 查询加密信息
     *
     * @return 信息集合
     */
    Map<String,Object> getList(String company);
}
