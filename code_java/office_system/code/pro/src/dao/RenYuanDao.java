package dao;

import javaBean.Copy2;
import javaBean.GongSi;
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
    public String selectRankPower(String colum,String power,String B);


    /*显示人员表信息*/
    public List<RenYuan> renyuanInfo(String gognsi);

    /*姓名查询显示人员信息*/
    public List<RenYuan> renyuanSelct(String username);

    /*获取前台的信息，封装成renYuan对象*/
    public boolean register(RenYuan renYuan);

    /*根据获取到的内容修改人员信息*/
    public boolean update(int id,String B, String C,String D, String E);

    /*获取前台传递的id删除人员*/
    public boolean delete(int id);
    /*获取前台传递的人员id删除人员规定*/
    public boolean delete2(String renyuan_id);
    /*获取列使用数量*/
    public int getRowCount(String column,String B,String user);

    /*显示人员使用情况*/
    public List<Copy2> renuseInfo(String gongsi);

    /*删除人员使用列*/
    public boolean renyuanDelete(String gognsi , String column);

    /*查询当前列是否有人正在修改*/
    public String getRenYuanUse(String colum,String B);

    /*添加当前列修改人员*/
    public boolean addRenYuanUse(String colum,String B,String D);

    /*查询登录公司下的人员*/
    public List<RenYuan> getRenYuan(String gognsi);

    //修改B列
    public boolean updateB(String B,int id);

    //修改C列
    public boolean updateC(String C,int id);

    //修改D列
    public boolean updateD(String D,int id);

    //修改E列
    public boolean updateE(String E,int id);

}
