package com.fenquan.demo.service.impl;
import com.fenquan.demo.entity.Department;
import com.fenquan.demo.entity.PersonPower;
import com.fenquan.demo.entity.WorkBench_GongShi;
import com.fenquan.demo.mapper.WorkBenchGongShiMapper;
import com.fenquan.demo.service.IWorkBenchGongShiService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WorkBenchGongShiImpl extends ServiceImpl<WorkBenchGongShiMapper, WorkBench_GongShi> implements IWorkBenchGongShiService {
    @Autowired
    WorkBenchGongShiMapper workBenchGongShiMapper;

    @Override
    public List<WorkBench_GongShi> getList(String company) {
            return workBenchGongShiMapper.getList(company);
            }

    @Override
    public List<WorkBench_GongShi> queryList(String company, String query) {
            return workBenchGongShiMapper.queryList(company,query);
            }

    @Override
    public WorkBench_GongShi add(WorkBench_GongShi workBench_GongShi) {
            return this.save(workBench_GongShi) ? workBench_GongShi : null;
            }

    @Override
    public boolean update(WorkBench_GongShi workBench_GongShi) {
            return this.updateById(workBench_GongShi);
            }

    @Override
    public boolean delete(List<Integer> idList) {
            return removeByIds(idList);
            }
}
