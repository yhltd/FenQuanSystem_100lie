package com.fenquan.demo.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;


@Data
@TableName("baitaoquanxian_department")

public class Department {
    /**
     * id自增列
     */
    @TableId(value = "id" , type = IdType.AUTO)
    private Integer id;

    /**
     * 公司
     */
    private String company;

    /**
     * 部门
     */
    private String departmentName;

    /**
     * 页面名称
     */
    private String viewName;

    /**
     * 增
     */
    private String ins;

    /**
     * 删
     */
    private String del;

    /**
     * 改
     */
    private String upd;

    /**
     * 查
     */
    private String sel;
}
