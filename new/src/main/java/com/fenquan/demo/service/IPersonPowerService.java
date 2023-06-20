package com.fenquan.demo.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.fenquan.demo.entity.PersonPower;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public interface IPersonPowerService {

    /**
     * 查询人员权限
     *
     * @return 信息集合
     */
    List<PersonPower> getList(String company);

    /**
     * 查询人员权限
     *
     * @return 信息集合
     */
    List<PersonPower> get_divide(String company, String chashanquanxian);

    /**
     * 查询人员权限
     *
     * @return 信息集合
     */
    List<PersonPower> queryList(String company,String query,String inquire_revise);

    /**
     * 修改人员对应列的权限
     */
    boolean update(String column,int id,String this_value);

//    /**
//     * 删除
//     *
//     * @param quanxianList 根据id集合删除
//     * @return 是否删除成功
//     */
//    boolean deletecopy(List<Integer> quanxianList);

    /**
     * 删除
     *
     * @param idList 根据id集合删除
     * @return 是否删除成功
     */
    boolean delete(String renyuan_id);
}
