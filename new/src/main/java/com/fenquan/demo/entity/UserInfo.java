package com.fenquan.demo.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;


@Data
@TableName("baitaoquanxian_renyun")
public class UserInfo {

    /**
     * id自增列
     */
    @TableId(value = "id" , type = IdType.AUTO)
    private Integer id;

    /**
     * 公司
     */
    private String B;

    /**
     * 姓名
     */
    private String C;

    /**
     * 账号
     */
    private String D;

    /**
     * 密码
     */
    private String E;

    /**
     * 编号，用于关联人员权限规定
     */
    private String renyuanId;



}
