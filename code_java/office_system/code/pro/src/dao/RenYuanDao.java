package dao;

import javaBean.RenYuan;

import java.util.List;

public interface  RenYuanDao {
    /*获取前台的账号密码判断能否登录成功*/
    public boolean login(String B,String D, String E);

    /*获取登录时是否为管理员 */
    public String QuanXian(String B,String D, String E);

    /*查询登录人员的权限*/
    public String getPower(String B,String D);


    /*查询当前登录人员对列修改的权限*/
    public String selectRankPower(String colum,String power);


    /*显示人员表信息*/
    public List<RenYuan> renyuanInfo();

    /*获取前台的信息，封装成renYuan对象*/
    public boolean register(RenYuan renYuan);

    /*根据获取到的内容修改人员信息*/
    public boolean update(int id,String B, String C,String D, String E);

    /*获取前台传递的id删除人员*/
    public boolean delete(int id);

}
