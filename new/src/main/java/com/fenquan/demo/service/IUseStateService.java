package com.fenquan.demo.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.fenquan.demo.entity.UseState;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public interface IUseStateService {

    /**
     * 查询占用情况
     *
     * @return 信息集合
     */
    List<UseState> getList(String company);

    /**
     * 解除占用
     */
    boolean update(String column,int id);

    /**
     * 占用
     */
    boolean updateName(String column,String company,String name);

}
