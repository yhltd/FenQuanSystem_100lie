package dao;

import javaBean.RenYuan;
import util.DBCoon;

import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class RenYuanDaoImp implements RenYuanDao{
    /*创建一个返回值标志*/
    static boolean flag = false;
    /*提高sql作用域，每个方法里都要编写sql语句*/
    static String sql = null;

    @Override
    public boolean login(String B,String D, String E) {
        try {
            DBCoon.init();
            sql = "select * from baitaoquanxian_renyun where B=? and D= ? and E = ?";
            /*使用预编译SQL传递参数*/
            Object[] args = {B,D,E};
            ResultSet rs = DBCoon.searchSql(sql, args);
            /*遍历数据库里的公司账号密码与从jsp传来的账号密码作对比*/
            while (rs.next()) {
                if (rs.getString("B").equals(B)&&rs.getString("D").equals(D)&&rs.getString("E").equals(E)){
                    flag = true;
                    System.out.println("登录成功");
                }
            }
        }catch (Exception e) {
            System.out.println("登录失败");
            e.printStackTrace();
        } finally {
            DBCoon.close();
        }
        return flag;
    }

    @Override
    public String QuanXian(String B, String D, String E) {
        String qx="";
        try {
            DBCoon.init();
            sql = "select * from baitaoquanxian_renyun where B=? and D= ? and E = ?";
            /*使用预编译SQL传递参数*/
            Object[] args = {B,D,E};
            ResultSet rs = DBCoon.searchSql(sql, args);
            /*获取权限*/
            while (rs.next()) {
                qx=rs.getString("C");
                System.out.println("权限是"+qx);
            }
        }catch (Exception e) {
            System.out.println("登录失败");
            e.printStackTrace();
        } finally {
            DBCoon.close();
        }
        return qx;
    }

    @Override
    /*获取当前登录用户的权限*/
    public String getPower(String B, String D) {
        String power="";
        try {
            DBCoon.init();
            sql = "select * from baitaoquanxian_renyun where B=? and D= ? ";
            /*使用预编译SQL传递参数*/
            Object[] args = {B,D};
            ResultSet rs = DBCoon.searchSql(sql, args);
            /*获取权限*/
            while (rs.next()) {
                power=rs.getString("C");
                System.out.println("权限是"+power);
            }
        }catch (Exception e) {
            System.out.println("查询用户权限失败");
            e.printStackTrace();
        } finally {
            DBCoon.close();
        }
        return power;
    }

    @Override
    /*查询当前登录人员对工作台中某一列进行修改的权限*/
    public String selectRankPower(String colum, String power)  {
        String resultPower = null;
        try {
            int result;
            DBCoon.init();
            sql = "select "+colum+" from baitaoquanxian_copy1 where B = '"+power+"'";
            resultPower = DBCoon.selectRank(sql,colum);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            DBCoon.close();
        }
        return resultPower;
    }

    @Override
    public List<RenYuan> renyuanInfo() {
        List<RenYuan>renyuanList=new ArrayList<>();
        try {
            DBCoon.init();
            String sql="select*from baitaoquanxian_renyun";
            ResultSet rs=DBCoon.getInfo(sql);
            System.out.println("获取所有用户信息成功");
            while(rs.next()){
                RenYuan ry=new RenYuan();
                ry.setId(rs.getInt("id"));
                ry.setB(rs.getString("B"));
                ry.setC(rs.getString("C"));
                ry.setD(rs.getString("D"));
                ry.setE(rs.getString("E"));
                renyuanList.add(ry);
            }
        }catch (Exception e){
            e.printStackTrace();
            System.out.println("获取所有用户信息成功");
        }finally {
            DBCoon.close();
        }
        return renyuanList;
    }

    @Override
    public boolean register(RenYuan renYuan) {
        try {
            DBCoon.init();
            sql="insert into baitaoquanxian_renyun(B,C,D,E)"+"values(?,?,?,?)";
            Object[] args = {renYuan.getB(),renYuan.getC(),renYuan.getD(),renYuan.getE()};
            int i = DBCoon.addUpdDel(sql,args);
            if (i>0){
                flag = true;
                System.out.println("注册成功");
            }
        }catch (Exception e) {
            e.printStackTrace();
            System.out.println("注册失败");
        }finally {
            DBCoon.close();
        }
        return flag;
    }

    @Override
    public boolean update(int id, String B, String C, String D, String E) {
        try {
            DBCoon.init();
            sql = "update baitaoquanxian_renyun set B=?,C=?,D=?,E=? where id=?";
            Object[] args={B,C,D,E,id};
            int i = DBCoon.addUpdDel(sql,args);
            if (i>0){
                flag=true;
                System.out.println("数据更新成功");
            }
        }catch (Exception e) {
            System.out.println("数据更新失败");
            e.printStackTrace();
        }finally {
            DBCoon.close();
        }
        return flag;
    }

    @Override
    public boolean delete(int id) {
        try {
            DBCoon.init();
            sql = "delete from baitaoquanxian_renyun where id = ?";
            Object[] args = {id};
            int i = DBCoon.addUpdDel(sql,args);
            if (i>0){
                flag=true;
                System.out.println("删除成功");
            }
        }catch (Exception e) {
            System.out.println("删除失败");
            e.printStackTrace();
        }finally {
            DBCoon.close();
        }
        return flag;
    }


}
