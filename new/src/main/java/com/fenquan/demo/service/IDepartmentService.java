package com.fenquan.demo.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.fenquan.demo.entity.Department;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public interface IDepartmentService {
    /**
     * 查询部门权限
     *
     * @return 信息集合
     */
    List<Department> getList(String company);

    /**
     * 条件查询部门权限
     *
     * @return 信息集合
     */
    List<Department> queryList(String company,String department);

    /**
     * 添加
     *
     * @param department 添加对象
     * @return 是否添加成功
     */
    Department add(Department department);

    /**
     * 修改
     *
     * @param department 修改对象
     * @return 是否修改成功
     */
    boolean update(Department department);

    /**
     * 删除
     *
     * @param idList 根据id集合删除
     * @return 是否删除成功
     */
    boolean delete(List<Integer> idList);
}
