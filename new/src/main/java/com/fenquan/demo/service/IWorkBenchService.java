package com.fenquan.demo.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.fenquan.demo.entity.WorkBench;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public interface IWorkBenchService {

    /**
     * 查询工作台全部数据
     *
     * @return 信息集合
     */
    List<WorkBench> getList(String company);

    /**
     * 条件查询工作台数据
     *
     * @return 信息集合
     */
    List<WorkBench> queryList(String company, String start_date,String stop_date,String column);

    /**
     * 添加
     */
    boolean add(String company, String renyuan,String today);

    /**
     * 删除
     *
     * @param idList 根据id集合删除
     * @return 是否删除成功
     */
    boolean delete(List<Integer> idList);

    /**
     * 添加
     */
    boolean update(String column,String value,int id,String time);
}
