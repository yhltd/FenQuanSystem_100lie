package dao;

import javaBean.Copy2;
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
            System.out.println(rs);
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
    public String selectRankPower(String colum, String power,String B)  {
        String resultPower = null;
        try {
            int result;
            DBCoon.init();
            sql = "select " + colum + " from baitaoquanxian_copy1 where B = '" + power + "' and quanxian = '" + B + "'";
            resultPower = DBCoon.selectRank(sql,colum);

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            DBCoon.close();
        }
        System.out.println(resultPower);
        return resultPower;
    }

    @Override
    public List<RenYuan> renyuanInfo(String gognsi) {
        List<RenYuan>renyuanList=new ArrayList<>();
        try {
            DBCoon.init();
            String sql="select*from baitaoquanxian_renyun where B = '" + gognsi + "'";
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
    public List<RenYuan> renyuanSelct(String username) {
        List<RenYuan>renyuanList=new ArrayList<>();
        try {
            DBCoon.init();
            String sql="select*from baitaoquanxian_renyun where C = '" + username + "'";
            ResultSet rs=DBCoon.getInfo(sql);
            System.out.println("获取用户信息成功");
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
            System.out.println("获取用户信息成功");
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

    @Override
    public int getRowCount(String column, String B, String user) {
        int resultCount =0;
        try {

            DBCoon.init();
            //sql = "SELECT count("+column+") as count FROM baitaoquanxian where 公司 = '" + B + "' and "+column+" !=''";
            sql = "SELECT count("+column+") as count FROM baitaoquanxian where [人员] = '" + user + "' and 公司 = '" + B + "' and "+column+" != ''";
            resultCount = DBCoon.selectReturnInt(sql);
            System.out.println("执行了sql,resultCount:"+resultCount);

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            DBCoon.close();
        }
        System.out.println("返回的结果resultCount等于"+resultCount);
        return resultCount;
    }

    @Override
    public List<Copy2> renuseInfo(String gongsi) {
        List<Copy2>renyuanUse=new ArrayList<>();
        try {
            DBCoon.init();
            String sql="select * from baitaoquanxian_copy2 where 公司 = '" + gongsi + "'";
            ResultSet rs=DBCoon.getInfo(sql);
            System.out.println("获取公司信息成功");
            System.out.println("rs的值是："+rs);
            while (rs.next()) {
                Copy2 gs = new Copy2();
                gs.setId(rs.getInt("id"));
                gs.setA(rs.getString("A"));
                gs.setB(rs.getString("B"));
                gs.setC(rs.getString("C"));
                gs.setD(rs.getString("D"));
                gs.setE(rs.getString("E"));
                gs.setF(rs.getString("F"));
                gs.setG(rs.getString("G"));
                gs.setH(rs.getString("H"));
                gs.setI(rs.getString("I"));
                gs.setJ(rs.getString("J"));
                gs.setK(rs.getString("K"));
                gs.setL(rs.getString("L"));
                gs.setM(rs.getString("M"));
                gs.setN(rs.getString("N"));
                gs.setO(rs.getString("O"));
                gs.setP(rs.getString("P"));
                gs.setQ(rs.getString("Q"));
                gs.setR(rs.getString("R"));
                gs.setS(rs.getString("S"));
                gs.setT(rs.getString("T"));
                gs.setU(rs.getString("U"));
                gs.setV(rs.getString("V"));
                gs.setW(rs.getString("W"));
                gs.setX(rs.getString("X"));
                gs.setY(rs.getString("Y"));
                gs.setZ(rs.getString("Z"));

                gs.setAA(rs.getString("AA"));
                gs.setAB(rs.getString("AB"));
                gs.setAC(rs.getString("AC"));
                gs.setAD(rs.getString("AD"));
                gs.setAE(rs.getString("AE"));
                gs.setAF(rs.getString("AF"));
                gs.setAG(rs.getString("AG"));
                gs.setAH(rs.getString("AH"));
                gs.setAI(rs.getString("AI"));
                gs.setAJ(rs.getString("AJ"));
                gs.setAK(rs.getString("AK"));
                gs.setAL(rs.getString("AL"));
                gs.setAM(rs.getString("AM"));
                gs.setAN(rs.getString("AN"));
                gs.setAO(rs.getString("AO"));
                gs.setAP(rs.getString("AP"));
                gs.setAQ(rs.getString("AQ"));
                gs.setAR(rs.getString("AR"));
                gs.setASS(rs.getString("ASS"));
                gs.setAT(rs.getString("AT"));
                gs.setAU(rs.getString("AU"));
                gs.setAV(rs.getString("AV"));
                gs.setAW(rs.getString("AW"));
                gs.setAX(rs.getString("AX"));
                gs.setAY(rs.getString("AY"));
                gs.setAZ(rs.getString("AZ"));

                gs.setBA(rs.getString("BA"));
                gs.setBB(rs.getString("BB"));
                gs.setBC(rs.getString("BC"));
                gs.setBD(rs.getString("BD"));
                gs.setBE(rs.getString("BE"));
                gs.setBF(rs.getString("BF"));
                gs.setBG(rs.getString("BG"));
                gs.setBH(rs.getString("BH"));
                gs.setBI(rs.getString("BI"));
                gs.setBJ(rs.getString("BJ"));
                gs.setBK(rs.getString("BK"));
                gs.setBL(rs.getString("BL"));
                gs.setBM(rs.getString("BM"));
                gs.setBN(rs.getString("BN"));
                gs.setBO(rs.getString("BO"));
                gs.setBP(rs.getString("BP"));
                gs.setBQ(rs.getString("BQ"));
                gs.setBR(rs.getString("BR"));
                gs.setBS(rs.getString("BS"));
                gs.setBT(rs.getString("BT"));
                gs.setBU(rs.getString("BU"));
                gs.setBV(rs.getString("BV"));
                gs.setBW(rs.getString("BW"));
                gs.setBX(rs.getString("BX"));
                gs.setBYY(rs.getString("BYY"));
                gs.setBZ(rs.getString("BZ"));

                gs.setCA(rs.getString("CA"));
                gs.setCB(rs.getString("CB"));
                gs.setCC(rs.getString("CC"));
                gs.setCD(rs.getString("CD"));
                gs.setCE(rs.getString("CE"));
                gs.setCF(rs.getString("CF"));
                gs.setCG(rs.getString("CG"));
                gs.setCH(rs.getString("CH"));
                gs.setCI(rs.getString("CI"));
                gs.setCJ(rs.getString("CJ"));
                gs.setCK(rs.getString("CK"));
                gs.setCL(rs.getString("CL"));
                gs.setCM(rs.getString("CM"));
                gs.setCN(rs.getString("CN"));
                gs.setCO(rs.getString("CO"));
                gs.setCP(rs.getString("CP"));
                gs.setCQ(rs.getString("CQ"));
                gs.setCR(rs.getString("CR"));
                gs.setCS(rs.getString("CS"));
                gs.setCT(rs.getString("CT"));
                gs.setCU(rs.getString("CU"));
                gs.setCV(rs.getString("CV"));
                gs.set公司(rs.getString("公司"));
                renyuanUse.add(gs);
//                System.out.println("输出gongsiList的值"+gongsiList);
            }
            System.out.println("输出返回给servlet的参数:"+renyuanUse);
        }catch (Exception e){
            System.out.println("获取公司信息失败");
            e.printStackTrace();
        }finally{
            DBCoon.close();
        }
        return renyuanUse;
    }

    @Override
    public boolean renyuanDelete(String gognsi , String column) {
        try {
            DBCoon.init();
            //sql = "delete from baitaoquanxian_renyun where 公司 = '" + gognsi + "' and " + column + " != '' ";
            sql = "update baitaoquanxian_copy2 set " + column + " = '' where 公司 = '" + gognsi + "'";
            //Object[] args = {gognsi,column};
            int i = DBCoon.addUpdDel(sql);
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

    @Override
    public String getRenYuanUse(String colum, String B) {
        String resultPower = null;
        try {
            int result;
            DBCoon.init();
            sql = "select " + colum + " from baitaoquanxian_copy2 where 公司 = '" + B + "' and " + colum + " != ''";
            resultPower = DBCoon.selectRank(sql,colum);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            DBCoon.close();
        }
        return resultPower;
    }

    @Override
    public boolean addRenYuanUse(String colum, String B, String D) {
        try {
            DBCoon.init();
            sql = "update baitaoquanxian_copy2 set " + colum + " = '" + D + "' where 公司 = '" + B + "'";
            int i = DBCoon.addUpdDel(sql);
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
 /*获取当前登录公司下的人员*/
    @Override
    public List<RenYuan> getRenYuan(String gognsi) {
        List<RenYuan>renyuanList=new ArrayList<>();
        try {
            DBCoon.init();
            String sql="select*from baitaoquanxian_renyun where B = '" + gognsi + "'";
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
    public boolean updateB(String B,int id) {
        try {
            DBCoon.init();
            sql = "update baitaoquanxian_renyun set B=? where id=?";

            Object[] args={B,id};
            int i = DBCoon.addUpdDel(sql,args);
            if (i>0){
                flag=true;
            }
        }catch (Exception e) {
            e.printStackTrace();
        }finally {
            DBCoon.close();
        }
        return flag;
    }

    @Override
    public boolean updateC(String C,int id) {
        try {
            DBCoon.init();
            sql = "update baitaoquanxian_renyun set C=? where id=?";

            Object[] args={C,id};
            int i = DBCoon.addUpdDel(sql,args);
            if (i>0){
                flag=true;
            }
        }catch (Exception e) {
            e.printStackTrace();
        }finally {
            DBCoon.close();
        }
        return flag;
    }

    @Override
    public boolean updateD(String D,int id) {
        try {
            DBCoon.init();
            sql = "update baitaoquanxian_renyun set D=? where id=?";

            Object[] args={D,id};
            int i = DBCoon.addUpdDel(sql,args);
            if (i>0){
                flag=true;
            }
        }catch (Exception e) {
            e.printStackTrace();
        }finally {
            DBCoon.close();
        }
        return flag;
    }

    @Override
    public boolean updateE(String E,int id) {
        try {
            DBCoon.init();
            sql = "update baitaoquanxian_renyun set E=? where id=?";

            Object[] args={E,id};
            int i = DBCoon.addUpdDel(sql,args);
            if (i>0){
                flag=true;
            }
        }catch (Exception e) {
            e.printStackTrace();
        }finally {
            DBCoon.close();
        }
        return flag;
    }


}
