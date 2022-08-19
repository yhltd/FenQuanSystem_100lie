package com.fenquan.demo.service;

import com.fenquan.demo.entity.Chart;

import java.util.List;

public interface IChartService {

    /**
     * 查询公司图表数据
     *
     * @return 信息集合
     */
    List<Chart> getGongSiList(String company);


    /**
     * 条件查询公司图表数据
     *
     * @return 信息集合
     */
    List<Chart> queryGongSiList(String company,String start_date,String stop_date);

    /**
     * 条件查询公司图表数据
     *
     * @return 信息集合
     */
    List<Chart> queryRenYuanList(String company,String name,String start_date,String stop_date);

}
