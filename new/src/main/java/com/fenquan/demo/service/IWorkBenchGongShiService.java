package com.fenquan.demo.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.fenquan.demo.entity.Department;
import com.fenquan.demo.entity.PersonPower;
import com.fenquan.demo.entity.WorkBench_GongShi;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

public interface IWorkBenchGongShiService {

    /**
     * 查询
     *
     * @return 信息集合
     */
    List<WorkBench_GongShi> getList(String company);


    /**
     * 条件查询
     *
     * @return 信息集合
     */
    List<WorkBench_GongShi> queryList(String company, String query);


    /**
     * 添加
     *
     * @param workBench_GongShi 添加对象
     * @return 是否添加成功
     */
    WorkBench_GongShi add(WorkBench_GongShi workBench_GongShi);

    /**
     * 修改
     *
     * @param workBench_GongShi 修改对象
     * @return 是否修改成功
     */
    boolean update(WorkBench_GongShi workBench_GongShi);

    /**
     * 删除
     *
     * @param idList 根据id集合删除
     * @return 是否删除成功
     */
    boolean delete(List<Integer> idList);

}
