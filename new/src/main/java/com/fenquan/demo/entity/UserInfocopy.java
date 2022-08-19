package com.fenquan.demo.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@Data
@TableName("baitaoquanxian_copy1")

public class UserInfocopy {
        /**
         * id自增列
         */
        @TableId(value = "id" , type = IdType.AUTO)
        private Integer id;

        /**
         * 公司名权限
         */
        private String quanxian;

        /**
         * 姓名管理员
         */
        private String B;

        /**
         * 人员id
         */
        private String renyuanid;
}
