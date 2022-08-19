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
    private String c;

    /**
     * 账号
     */
    private String d;

    /**
     * 密码
     */
    private String e;


    /**
     * 账号状态
     */
    private String zhuangtai;

    /**
     * 邮箱
     */
    private String email;

    /**
     * 电话
     */
    private String phone;

    /**
     * 编号
     */
    private String bianhao;

    /**
     * 编号，用于关联人员权限规定
     */
    private String renyuanId;

    /**
     * 权限表id
     */
    private String quanxian_id;



}
