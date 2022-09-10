package com.fenquan.demo.entity;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;


@Data
@TableName("baitaoquanxian_jisuan")
public class WorkBench_GongShi {

    /**
     * id自增列
     */
    @TableId(value = "id" , type = IdType.AUTO)
    private Integer id;

    /**
     * 工作台列
     */
    private String thiscolumn;

    /**
     * 公式
     */
    private String gongshi;

    /**
     * 公司
     */
    private String company;

}
