package dao;

import javaBean.Workbench;
import util.DBCoon;

import java.sql.ResultSet;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class WorkbenchDaoImp implements WorkbenchDao{
    /*创建一个返回值标志*/
    static boolean flag = false;
    /*提高sql作用域，每个方法里都要编写sql语句*/
    static String sql = null;
    @Override
    public List<Workbench> workbenchInfo(String gognsi) {
        List<Workbench>workbenchList=new ArrayList<>();
        try{
            DBCoon.init();
            String sql="select * from baitaoquanxian where [公司] = '" + gognsi + "'";
            ResultSet rs=DBCoon.getInfo(sql);
            System.out.println("获取工作台信息成功");
            while(rs.next()){
                Workbench wk=new Workbench();
                wk.setId(rs.getInt("id"));
                wk.setRenYuan(rs.getString("人员"));
                wk.setGongSi(rs.getString("公司"));

                wk.setA(rs.getString("A"));
                wk.setB(rs.getString("B"));
                wk.setC(rs.getString("C"));
                wk.setD(rs.getString("D"));
                wk.setE(rs.getString("E"));
                wk.setF(rs.getString("F"));
                wk.setG(rs.getString("G"));
                wk.setH(rs.getString("H"));
                wk.setI(rs.getString("I"));
                wk.setJ(rs.getString("J"));
                wk.setK(rs.getString("K"));
                wk.setL(rs.getString("L"));
                wk.setM(rs.getString("M"));
                wk.setN(rs.getString("N"));
                wk.setO(rs.getString("O"));
                wk.setP(rs.getString("P"));
                wk.setQ(rs.getString("Q"));
                wk.setR(rs.getString("R"));
                wk.setS(rs.getString("S"));
                wk.setT(rs.getString("T"));
                wk.setU(rs.getString("U"));
                wk.setV(rs.getString("V"));
                wk.setW(rs.getString("W"));
                wk.setX(rs.getString("X"));
                wk.setY(rs.getString("Y"));
                wk.setZ(rs.getString("Z"));

                wk.setAA(rs.getString("AA"));
                wk.setAB(rs.getString("AB"));
                wk.setAC(rs.getString("AC"));
                wk.setAD(rs.getString("AD"));
                wk.setAE(rs.getString("AE"));
                wk.setAF(rs.getString("AF"));
                wk.setAG(rs.getString("AG"));
                wk.setAH(rs.getString("AH"));
                wk.setAI(rs.getString("AI"));
                wk.setAJ(rs.getString("AJ"));
                wk.setAK(rs.getString("AK"));
                wk.setAL(rs.getString("AL"));
                wk.setAM(rs.getString("AM"));
                wk.setAN(rs.getString("AN"));
                wk.setAO(rs.getString("AO"));
                wk.setAP(rs.getString("AP"));
                wk.setAQ(rs.getString("AQ"));
                wk.setAR(rs.getString("AR"));
                wk.setASS(rs.getString("ASS"));
                wk.setAT(rs.getString("AT"));
                wk.setAU(rs.getString("AU"));
                wk.setAV(rs.getString("AV"));
                wk.setAW(rs.getString("AW"));
                wk.setAX(rs.getString("AX"));
                wk.setAY(rs.getString("AY"));
                wk.setAZ(rs.getString("AZ"));

                wk.setBA(rs.getString("BA"));
                wk.setBB(rs.getString("BB"));
                wk.setBC(rs.getString("BC"));
                wk.setBD(rs.getString("BD"));
                wk.setBE(rs.getString("BE"));
                wk.setBF(rs.getString("BF"));
                wk.setBG(rs.getString("BG"));
                wk.setBH(rs.getString("BH"));
                wk.setBI(rs.getString("BI"));
                wk.setBJ(rs.getString("BJ"));
                wk.setBK(rs.getString("BK"));
                wk.setBL(rs.getString("BL"));
                wk.setBM(rs.getString("BM"));
                wk.setBN(rs.getString("BN"));
                wk.setBO(rs.getString("BO"));
                wk.setBP(rs.getString("BP"));
                wk.setBQ(rs.getString("BQ"));
                wk.setBR(rs.getString("BR"));
                wk.setBS(rs.getString("BS"));
                wk.setBT(rs.getString("BT"));
                wk.setBU(rs.getString("BU"));
                wk.setBV(rs.getString("BV"));
                wk.setBW(rs.getString("BW"));
                wk.setBX(rs.getString("BX"));
                wk.setBYY(rs.getString("BYY"));
                wk.setBZ(rs.getString("BZ"));

                wk.setCA(rs.getString("CA"));
                wk.setCB(rs.getString("CB"));
                wk.setCC(rs.getString("CC"));
                wk.setCD(rs.getString("CD"));
                wk.setCE(rs.getString("CE"));
                wk.setCF(rs.getString("CF"));
                wk.setCG(rs.getString("CG"));
                wk.setCH(rs.getString("CH"));
                wk.setCI(rs.getString("CI"));
                wk.setCJ(rs.getString("CJ"));
                wk.setCK(rs.getString("CK"));
                wk.setCL(rs.getString("CL"));
                wk.setCM(rs.getString("CM"));
                wk.setCN(rs.getString("CN"));
                wk.setCO(rs.getString("CO"));
                wk.setCP(rs.getString("CP"));
                wk.setCQ(rs.getString("CQ"));
                wk.setCR(rs.getString("CR"));
                wk.setCS(rs.getString("CS"));
                wk.setCT(rs.getString("CT"));
                wk.setCU(rs.getString("CU"));
                wk.setCV(rs.getString("CV"));

                workbenchList.add(wk);
            }
        }catch (Exception e){
            e.printStackTrace();
        }


        return workbenchList;
    }

    @Override
    public List<Workbench> workbenchYGInfo(String GongSi) {
        List<Workbench>workbenchYGList=new ArrayList<>();
        try{
            DBCoon.init();
            String sql="select * from baitaoquanxian where 公司=?";
            Object[] args = {GongSi};
            ResultSet rs=DBCoon.searchSql(sql,args);
            System.out.println("获取工作台员工信息成功");
            while(rs.next()){
                Workbench wk=new Workbench();
                wk.setId(rs.getInt("id"));
                wk.setRenYuan(rs.getString("人员"));
                wk.setGongSi(rs.getString("公司"));

                wk.setA(rs.getString("A"));
                wk.setB(rs.getString("B"));
                wk.setC(rs.getString("C"));
                wk.setD(rs.getString("D"));
                wk.setE(rs.getString("E"));
                wk.setF(rs.getString("F"));
                wk.setG(rs.getString("G"));
                wk.setH(rs.getString("H"));
                wk.setI(rs.getString("I"));
                wk.setJ(rs.getString("J"));
                wk.setK(rs.getString("K"));
                wk.setL(rs.getString("L"));
                wk.setM(rs.getString("M"));
                wk.setN(rs.getString("N"));
                wk.setO(rs.getString("O"));
                wk.setP(rs.getString("P"));
                wk.setQ(rs.getString("Q"));
                wk.setR(rs.getString("R"));
                wk.setS(rs.getString("S"));
                wk.setT(rs.getString("T"));
                wk.setU(rs.getString("U"));
                wk.setV(rs.getString("V"));
                wk.setW(rs.getString("W"));
                wk.setX(rs.getString("X"));
                wk.setY(rs.getString("Y"));
                wk.setZ(rs.getString("Z"));

                wk.setAA(rs.getString("AA"));
                wk.setAB(rs.getString("AB"));
                wk.setAC(rs.getString("AC"));
                wk.setAD(rs.getString("AD"));
                wk.setAE(rs.getString("AE"));
                wk.setAF(rs.getString("AF"));
                wk.setAG(rs.getString("AG"));
                wk.setAH(rs.getString("AH"));
                wk.setAI(rs.getString("AI"));
                wk.setAJ(rs.getString("AJ"));
                wk.setAK(rs.getString("AK"));
                wk.setAL(rs.getString("AL"));
                wk.setAM(rs.getString("AM"));
                wk.setAN(rs.getString("AN"));
                wk.setAO(rs.getString("AO"));
                wk.setAP(rs.getString("AP"));
                wk.setAQ(rs.getString("AQ"));
                wk.setAR(rs.getString("AR"));
                wk.setASS(rs.getString("ASS"));
                wk.setAT(rs.getString("AT"));
                wk.setAU(rs.getString("AU"));
                wk.setAV(rs.getString("AV"));
                wk.setAW(rs.getString("AW"));
                wk.setAX(rs.getString("AX"));
                wk.setAY(rs.getString("AY"));
                wk.setAZ(rs.getString("AZ"));

                wk.setBA(rs.getString("BA"));
                wk.setBB(rs.getString("BB"));
                wk.setBC(rs.getString("BC"));
                wk.setBD(rs.getString("BD"));
                wk.setBE(rs.getString("BE"));
                wk.setBF(rs.getString("BF"));
                wk.setBG(rs.getString("BG"));
                wk.setBH(rs.getString("BH"));
                wk.setBI(rs.getString("BI"));
                wk.setBJ(rs.getString("BJ"));
                wk.setBK(rs.getString("BK"));
                wk.setBL(rs.getString("BL"));
                wk.setBM(rs.getString("BM"));
                wk.setBN(rs.getString("BN"));
                wk.setBO(rs.getString("BO"));
                wk.setBP(rs.getString("BP"));
                wk.setBQ(rs.getString("BQ"));
                wk.setBR(rs.getString("BR"));
                wk.setBS(rs.getString("BS"));
                wk.setBT(rs.getString("BT"));
                wk.setBU(rs.getString("BU"));
                wk.setBV(rs.getString("BV"));
                wk.setBW(rs.getString("BW"));
                wk.setBX(rs.getString("BX"));
                wk.setBYY(rs.getString("BYY"));
                wk.setBZ(rs.getString("BZ"));

                wk.setCA(rs.getString("CA"));
                wk.setCB(rs.getString("CB"));
                wk.setCC(rs.getString("CC"));
                wk.setCD(rs.getString("CD"));
                wk.setCE(rs.getString("CE"));
                wk.setCF(rs.getString("CF"));
                wk.setCG(rs.getString("CG"));
                wk.setCH(rs.getString("CH"));
                wk.setCI(rs.getString("CI"));
                wk.setCJ(rs.getString("CJ"));
                wk.setCK(rs.getString("CK"));
                wk.setCL(rs.getString("CL"));
                wk.setCM(rs.getString("CM"));
                wk.setCN(rs.getString("CN"));
                wk.setCO(rs.getString("CO"));
                wk.setCP(rs.getString("CP"));
                wk.setCQ(rs.getString("CQ"));
                wk.setCR(rs.getString("CR"));
                wk.setCS(rs.getString("CS"));
                wk.setCT(rs.getString("CT"));
                wk.setCU(rs.getString("CU"));
                wk.setCV(rs.getString("CV"));

                workbenchYGList.add(wk);
            }
        }catch (Exception e){
            e.printStackTrace();
        }

        return workbenchYGList;
    }

    /**
     * 批量修改工作台数据
     * @param id 修改数据的id
     * @param value 修改的值
     * @param column 修改的列
     * @return true
     */
    @Override
    public boolean updateWorkbench(String id, String value, String column) {
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set value=? where id=? and column=?";
            Object[] args = {id,value,column};
            int i = DBCoon.addUpdDel(sql,args);
            if (i>0){
                flag = true;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return flag;
    }

    @Override
    public boolean updateA(int id, String A) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set A=?,日期=? where id=?";

            Object[] args={A,日期,id};
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
    public boolean updateB(int id, String B) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set B=?,日期=? where id=?";

            Object[] args={B,日期,id};
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
    public boolean updateC(int id, String C) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set C=?,日期=? where id=?";

            Object[] args={C,日期,id};
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
    public boolean updateD(int id, String D) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set D=?,日期=? where id=?";

            Object[] args={D,日期,id};
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
    public boolean updateE(int id, String E) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set E=?,日期=? where id=?";

            Object[] args={E,日期,id};
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
    public boolean updateF(int id, String F) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set F=?,日期=? where id=?";

            Object[] args={F,日期,id};
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
    public boolean updateG(int id, String G) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set G=?,日期=? where id=?";

            Object[] args={G,日期,id};
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
    public boolean updateH(int id, String H) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set H=?,日期=? where id=?";

            Object[] args={H,日期,id};
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
    public boolean updateI(int id, String I) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set I=?,日期=? where id=?";

            Object[] args={I,日期,id};
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
    public boolean updateJ(int id, String J) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set J=?,日期=? where id=?";

            Object[] args={J,日期,id};
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
    public boolean updateK(int id, String K) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set K=?,日期=? where id=?";

            Object[] args={K,日期,id};
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
    public boolean updateL(int id, String L) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set L=?,日期=? where id=?";

            Object[] args={L,日期,id};
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
    public boolean updateM(int id, String M) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set M=?,日期=? where id=?";

            Object[] args={M,日期,id};
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
    public boolean updateN(int id, String N) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set N=?,日期=? where id=?";

            Object[] args={N,日期,id};
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
    public boolean updateO(int id, String O) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set O=?,日期=? where id=?";

            Object[] args={O,日期,id};
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
    public boolean updateP(int id, String P) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set P=?,日期=? where id=?";

            Object[] args={P,日期,id};
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
    public boolean updateQ(int id, String Q) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set Q=?,日期=? where id=?";

            Object[] args={Q,日期,id};
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
    public boolean updateR(int id, String R) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set R=?,日期=? where id=?";

            Object[] args={R,日期,id};
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
    public boolean updateS(int id, String S) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set S=?,日期=? where id=?";

            Object[] args={S,日期,id};
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
    public boolean updateT(int id, String T) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set T=?,日期=? where id=?";

            Object[] args={T,日期,id};
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
    public boolean updateU(int id, String U) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set U=?,日期=? where id=?";

            Object[] args={U,日期,id};
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
    public boolean updateV(int id, String V) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set V=?,日期=? where id=?";

            Object[] args={V,日期,id};
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
    public boolean updateW(int id, String W) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set W=?,日期=? where id=?";

            Object[] args={W,日期,id};
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
    public boolean updateX(int id, String X) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set X=?,日期=? where id=?";

            Object[] args={X,日期,id};
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
    public boolean updateY(int id, String Y) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set Y=?,日期=? where id=?";

            Object[] args={Y,日期,id};
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
    public boolean updateZ(int id, String Z) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set Z=?,日期=? where id=?";

            Object[] args={Z,日期,id};
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
    public boolean updateAA(int id, String AA) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set AA=?,日期=? where id=?";

            Object[] args={AA,日期,id};
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
    public boolean updateAB(int id, String AB) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set AB=?,日期=? where id=?";

            Object[] args={AB,日期,id};
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
    public boolean updateAC(int id, String AC) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set AC=?,日期=? where id=?";

            Object[] args={AC,日期,id};
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
    public boolean updateAD(int id, String AD) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set AD=?,日期=? where id=?";

            Object[] args={AD,日期,id};
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
    public boolean updateAE(int id, String AE) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set AE=?,日期=? where id=?";

            Object[] args={AE,日期,id};
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
    public boolean updateAF(int id, String AF) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set AF=?,日期=? where id=?";

            Object[] args={AF,日期,id};
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
    public boolean updateAG(int id, String AG) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set AG=?,日期=? where id=?";

            Object[] args={AG,日期,id};
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
    public boolean updateAH(int id, String AH) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());

        try {
            DBCoon.init();
            sql = "update baitaoquanxian set AH=?,日期=? where id=?";

            Object[] args={AH,日期,id};
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
    public boolean updateAI(int id, String AI) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set AI=?,日期=? where id=?";

            Object[] args={AI,日期,id};
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
    public boolean updateAJ(int id, String AJ) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set AJ=?,日期=? where id=?";

            Object[] args={AJ,日期,id};
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
    public boolean updateAK(int id, String AK) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set AK=?,日期=? where id=?";

            Object[] args={AK,日期,id};
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
    public boolean updateAL(int id, String AL) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set AL=?,日期=? where id=?";

            Object[] args={AL,日期,id};
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
    public boolean updateAM(int id, String AM) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set AM=?,日期=? where id=?";

            Object[] args={AM,日期,id};
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
    public boolean updateAN(int id, String AN) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set AN=?,日期=? where id=?";

            Object[] args={AN,日期,id};
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
    public boolean updateAO(int id, String AO) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set AO=?,日期=? where id=?";

            Object[] args={AO,日期,id};
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
    public boolean updateAP(int id, String AP) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set AP=?,日期=? where id=?";

            Object[] args={AP,日期,id};
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
    public boolean updateAQ(int id, String AQ) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set AQ=?,日期=? where id=?";

            Object[] args={AQ,日期,id};
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
    public boolean updateAR(int id, String AR) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set AR=?,日期=? where id=?";

            Object[] args={AR,日期,id};
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
    public boolean updateASS(int id, String ASS) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set ASS=?,日期=? where id=?";

            Object[] args={ASS,日期,id};
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
    public boolean updateAT(int id, String AT) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set AT=?,日期=? where id=?";

            Object[] args={AT,日期,id};
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
    public boolean updateAU(int id, String AU) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set AU=?,日期=? where id=?";

            Object[] args={AU,日期,id};
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
    public boolean updateAV(int id, String AV) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set AV=?,日期=? where id=?";

            Object[] args={AV,日期,id};
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
    public boolean updateAW(int id, String AW) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set AW=?,日期=? where id=?";

            Object[] args={AW,日期,id};
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
    public boolean updateAX(int id, String AX) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set AX=?,日期=? where id=?";

            Object[] args={AX,日期,id};
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
    public boolean updateAY(int id, String AY) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set AY=?,日期=? where id=?";

            Object[] args={AY,日期,id};
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
    public boolean updateAZ(int id, String AZ) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set AZ=?,日期=? where id=?";

            Object[] args={AZ,日期,id};
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
    public boolean updateBA(int id, String BA) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set BA=?,日期=? where id=?";

            Object[] args={BA,日期,id};
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
    public boolean updateBB(int id, String BB) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set BB=?,日期=? where id=?";

            Object[] args={BB,日期,id};
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
    public boolean updateBC(int id, String BC) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set BC=?,日期=? where id=?";

            Object[] args={BC,日期,id};
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
    public boolean updateBD(int id, String BD) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set BD=?,日期=? where id=?";

            Object[] args={BD,日期,id};
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
    public boolean updateBE(int id, String BE) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set BE=?,日期=? where id=?";

            Object[] args={BE,日期,id};
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
    public boolean updateBF(int id, String BF) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set BF=?,日期=? where id=?";

            Object[] args={BF,日期,id};
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
    public boolean updateBG(int id, String BG) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set BG=?,日期=? where id=?";

            Object[] args={BG,日期,id};
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
    public boolean updateBH(int id, String BH) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set BH=?,日期=? where id=?";

            Object[] args={BH,日期,id};
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
    public boolean updateBI(int id, String BI) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set BI=?,日期=? where id=?";

            Object[] args={BI,日期,id};
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
    public boolean updateBJ(int id, String BJ) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set BJ=?,日期=? where id=?";

            Object[] args={BJ,日期,id};
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
    public boolean updateBK(int id, String BK) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set BK=?,日期=? where id=?";

            Object[] args={BK,日期,id};
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
    public boolean updateBL(int id, String BL) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set BL=?,日期=? where id=?";

            Object[] args={BL,日期,id};
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
    public boolean updateBM(int id, String BM) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set BM=?,日期=? where id=?";

            Object[] args={BM,日期,id};
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
    public boolean updateBN(int id, String BN) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set BN=?,日期=? where id=?";

            Object[] args={BN,日期,id};
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
    public boolean updateBO(int id, String BO) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set BO=?,日期=? where id=?";

            Object[] args={BO,日期,id};
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
    public boolean updateBP(int id, String BP) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set BP=?,日期=? where id=?";

            Object[] args={BP,日期,id};
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
    public boolean updateBQ(int id, String BQ) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set BQ=?,日期=? where id=?";

            Object[] args={BQ,日期,id};
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
    public boolean updateBR(int id, String BR) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set BR=?,日期=? where id=?";

            Object[] args={BR,日期,id};
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
    public boolean updateBS(int id, String BS) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set BS=?,日期=? where id=?";

            Object[] args={BS,日期,id};
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
    public boolean updateBT(int id, String BT) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set BT=?,日期=? where id=?";

            Object[] args={BT,日期,id};
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
    public boolean updateBU(int id, String BU) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set BU=?,日期=? where id=?";

            Object[] args={BU,日期,id};
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
    public boolean updateBV(int id, String BV) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set BV=?,日期=? where id=?";

            Object[] args={BV,日期,id};
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
    public boolean updateBW(int id, String BW) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set BW=?,日期=? where id=?";

            Object[] args={BW,日期,id};
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
    public boolean updateBX(int id, String BX) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set BX=?,日期=? where id=?";

            Object[] args={BX,日期,id};
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
    public boolean updateBYY(int id, String BYY) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set BYY=?,日期=? where id=?";

            Object[] args={BYY,日期,id};
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
    public boolean updateBZ(int id, String BZ) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set BZ=?,日期=? where id=?";

            Object[] args={BZ,日期,id};
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
    public boolean updateCA(int id, String CA) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set CA=?,日期=? where id=?";

            Object[] args={CA,日期,id};
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
    public boolean updateCB(int id, String CB) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set CB=?,日期=? where id=?";

            Object[] args={CB,日期,id};
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
    public boolean updateCC(int id, String CC) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set CC=?,日期=? where id=?";

            Object[] args={CC,日期,id};
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
    public boolean updateCD(int id, String CD) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set CD=?,日期=? where id=?";

            Object[] args={CD,日期,id};
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
    public boolean updateCE(int id, String CE) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set CE=?,日期=? where id=?";

            Object[] args={CE,日期,id};
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
    public boolean updateCF(int id, String CF) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set CF=?,日期=? where id=?";

            Object[] args={CF,日期,id};
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
    public boolean updateCG(int id, String CG) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set CG=?,日期=? where id=?";

            Object[] args={CG,日期,id};
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
    public boolean updateCH(int id, String CH) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set CH=?,日期=? where id=?";

            Object[] args={CH,日期,id};
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
    public boolean updateCI(int id, String CI) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set CI=?,日期=? where id=?";

            Object[] args={CI,日期,id};
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
    public boolean updateCJ(int id, String CJ) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set CJ=?,日期=? where id=?";

            Object[] args={CJ,日期,id};
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
    public boolean updateCK(int id, String CK) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set CK=?,日期=? where id=?";

            Object[] args={CK,日期,id};
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
    public boolean updateCL(int id, String CL) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set CL=?,日期=? where id=?";

            Object[] args={CL,日期,id};
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
    public boolean updateCM(int id, String CM) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set CM=?,日期=? where id=?";

            Object[] args={CM,日期,id};
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
    public boolean updateCN(int id, String CN) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set CN=?,日期=? where id=?";

            Object[] args={CN,日期,id};
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
    public boolean updateCO(int id, String CO) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set CO=?,日期=? where id=?";

            Object[] args={CO,日期,id};
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
    public boolean updateCP(int id, String CP) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set CP=?,日期=? where id=?";

            Object[] args={CP,日期,id};
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
    public boolean updateCQ(int id, String CQ) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set CQ=?,日期=? where id=?";

            Object[] args={CQ,日期,id};
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
    public boolean updateCR(int id, String CR) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set CR=?,日期=? where id=?";

            Object[] args={CR,日期,id};
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
    public boolean updateCS(int id, String CS) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set CS=?,日期=? where id=?";

            Object[] args={CS,日期,id};
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
    public boolean updateCT(int id, String CT) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set CT=?,日期=? where id=?";

            Object[] args={CT,日期,id};
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
    public boolean updateCU(int id, String CU) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set CU=?,日期=? where id=?";

            Object[] args={CU,日期,id};
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
    public boolean updateCV(int id, String CV) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        String 日期=df.format(new Date());
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set CV=?,日期=? where id=?";

            Object[] args={CV,日期,id};
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
    public List<Workbench> getWorkbench(String gognsi) {
        List<Workbench>workbenchList=new ArrayList<>();
        try{
            DBCoon.init();
            String sql="select * from baitaoquanxian where   公司 = '" + gognsi + "'";
            System.out.println(sql);
            ResultSet rs=DBCoon.getInfo(sql);
            System.out.println("获取工作台信息成功2");
            while(rs.next()){
                Workbench wk=new Workbench();
                wk.setId(rs.getInt("id"));
                wk.setRenYuan(rs.getString("人员"));
                wk.setGongSi(rs.getString("公司"));

                wk.setA(rs.getString("A"));
                wk.setB(rs.getString("B"));
                wk.setC(rs.getString("C"));
                wk.setD(rs.getString("D"));
                wk.setE(rs.getString("E"));
                wk.setF(rs.getString("F"));
                wk.setG(rs.getString("G"));
                wk.setH(rs.getString("H"));
                wk.setI(rs.getString("I"));
                wk.setJ(rs.getString("J"));
                wk.setK(rs.getString("K"));
                wk.setL(rs.getString("L"));
                wk.setM(rs.getString("M"));
                wk.setN(rs.getString("N"));
                wk.setO(rs.getString("O"));
                wk.setP(rs.getString("P"));
                wk.setQ(rs.getString("Q"));
                wk.setR(rs.getString("R"));
                wk.setS(rs.getString("S"));
                wk.setT(rs.getString("T"));
                wk.setU(rs.getString("U"));
                wk.setV(rs.getString("V"));
                wk.setW(rs.getString("W"));
                wk.setX(rs.getString("X"));
                wk.setY(rs.getString("Y"));
                wk.setZ(rs.getString("Z"));

                wk.setAA(rs.getString("AA"));
                wk.setAB(rs.getString("AB"));
                wk.setAC(rs.getString("AC"));
                wk.setAD(rs.getString("AD"));
                wk.setAE(rs.getString("AE"));
                wk.setAF(rs.getString("AF"));
                wk.setAG(rs.getString("AG"));
                wk.setAH(rs.getString("AH"));
                wk.setAI(rs.getString("AI"));
                wk.setAJ(rs.getString("AJ"));
                wk.setAK(rs.getString("AK"));
                wk.setAL(rs.getString("AL"));
                wk.setAM(rs.getString("AM"));
                wk.setAN(rs.getString("AN"));
                wk.setAO(rs.getString("AO"));
                wk.setAP(rs.getString("AP"));
                wk.setAQ(rs.getString("AQ"));
                wk.setAR(rs.getString("AR"));
                wk.setASS(rs.getString("ASS"));
                wk.setAT(rs.getString("AT"));
                wk.setAU(rs.getString("AU"));
                wk.setAV(rs.getString("AV"));
                wk.setAW(rs.getString("AW"));
                wk.setAX(rs.getString("AX"));
                wk.setAY(rs.getString("AY"));
                wk.setAZ(rs.getString("AZ"));

                wk.setBA(rs.getString("BA"));
                wk.setBB(rs.getString("BB"));
                wk.setBC(rs.getString("BC"));
                wk.setBD(rs.getString("BD"));
                wk.setBE(rs.getString("BE"));
                wk.setBF(rs.getString("BF"));
                wk.setBG(rs.getString("BG"));
                wk.setBH(rs.getString("BH"));
                wk.setBI(rs.getString("BI"));
                wk.setBJ(rs.getString("BJ"));
                wk.setBK(rs.getString("BK"));
                wk.setBL(rs.getString("BL"));
                wk.setBM(rs.getString("BM"));
                wk.setBN(rs.getString("BN"));
                wk.setBO(rs.getString("BO"));
                wk.setBP(rs.getString("BP"));
                wk.setBQ(rs.getString("BQ"));
                wk.setBR(rs.getString("BR"));
                wk.setBS(rs.getString("BS"));
                wk.setBT(rs.getString("BT"));
                wk.setBU(rs.getString("BU"));
                wk.setBV(rs.getString("BV"));
                wk.setBW(rs.getString("BW"));
                wk.setBX(rs.getString("BX"));
                wk.setBYY(rs.getString("BYY"));
                wk.setBZ(rs.getString("BZ"));

                wk.setCA(rs.getString("CA"));
                wk.setCB(rs.getString("CB"));
                wk.setCC(rs.getString("CC"));
                wk.setCD(rs.getString("CD"));
                wk.setCE(rs.getString("CE"));
                wk.setCF(rs.getString("CF"));
                wk.setCG(rs.getString("CG"));
                wk.setCH(rs.getString("CH"));
                wk.setCI(rs.getString("CI"));
                wk.setCJ(rs.getString("CJ"));
                wk.setCK(rs.getString("CK"));
                wk.setCL(rs.getString("CL"));
                wk.setCM(rs.getString("CM"));
                wk.setCN(rs.getString("CN"));
                wk.setCO(rs.getString("CO"));
                wk.setCP(rs.getString("CP"));
                wk.setCQ(rs.getString("CQ"));
                wk.setCR(rs.getString("CR"));
                wk.setCS(rs.getString("CS"));
                wk.setCT(rs.getString("CT"));
                wk.setCU(rs.getString("CU"));
                wk.setCV(rs.getString("CV"));

                workbenchList.add(wk);
            }
        }catch (Exception e){
            e.printStackTrace();
        }


        return workbenchList;
    }

    @Override
    public List<Workbench> getWorkbenchUsername(String gognsi, String username) {
        List<Workbench>workbenchList=new ArrayList<>();
        try{
            DBCoon.init();
            String sql="select * from baitaoquanxian where   公司 = '" + gognsi + "' and 人员 = '" + username + "'";
            ResultSet rs=DBCoon.getInfo(sql);
            System.out.println("获取工作台信息成功");
            while(rs.next()){
                Workbench wk=new Workbench();
                wk.setId(rs.getInt("id"));
                wk.setRenYuan(rs.getString("人员"));
                wk.setGongSi(rs.getString("公司"));

                wk.setA(rs.getString("A"));
                wk.setB(rs.getString("B"));
                wk.setC(rs.getString("C"));
                wk.setD(rs.getString("D"));
                wk.setE(rs.getString("E"));
                wk.setF(rs.getString("F"));
                wk.setG(rs.getString("G"));
                wk.setH(rs.getString("H"));
                wk.setI(rs.getString("I"));
                wk.setJ(rs.getString("J"));
                wk.setK(rs.getString("K"));
                wk.setL(rs.getString("L"));
                wk.setM(rs.getString("M"));
                wk.setN(rs.getString("N"));
                wk.setO(rs.getString("O"));
                wk.setP(rs.getString("P"));
                wk.setQ(rs.getString("Q"));
                wk.setR(rs.getString("R"));
                wk.setS(rs.getString("S"));
                wk.setT(rs.getString("T"));
                wk.setU(rs.getString("U"));
                wk.setV(rs.getString("V"));
                wk.setW(rs.getString("W"));
                wk.setX(rs.getString("X"));
                wk.setY(rs.getString("Y"));
                wk.setZ(rs.getString("Z"));

                wk.setAA(rs.getString("AA"));
                wk.setAB(rs.getString("AB"));
                wk.setAC(rs.getString("AC"));
                wk.setAD(rs.getString("AD"));
                wk.setAE(rs.getString("AE"));
                wk.setAF(rs.getString("AF"));
                wk.setAG(rs.getString("AG"));
                wk.setAH(rs.getString("AH"));
                wk.setAI(rs.getString("AI"));
                wk.setAJ(rs.getString("AJ"));
                wk.setAK(rs.getString("AK"));
                wk.setAL(rs.getString("AL"));
                wk.setAM(rs.getString("AM"));
                wk.setAN(rs.getString("AN"));
                wk.setAO(rs.getString("AO"));
                wk.setAP(rs.getString("AP"));
                wk.setAQ(rs.getString("AQ"));
                wk.setAR(rs.getString("AR"));
                wk.setASS(rs.getString("ASS"));
                wk.setAT(rs.getString("AT"));
                wk.setAU(rs.getString("AU"));
                wk.setAV(rs.getString("AV"));
                wk.setAW(rs.getString("AW"));
                wk.setAX(rs.getString("AX"));
                wk.setAY(rs.getString("AY"));
                wk.setAZ(rs.getString("AZ"));

                wk.setBA(rs.getString("BA"));
                wk.setBB(rs.getString("BB"));
                wk.setBC(rs.getString("BC"));
                wk.setBD(rs.getString("BD"));
                wk.setBE(rs.getString("BE"));
                wk.setBF(rs.getString("BF"));
                wk.setBG(rs.getString("BG"));
                wk.setBH(rs.getString("BH"));
                wk.setBI(rs.getString("BI"));
                wk.setBJ(rs.getString("BJ"));
                wk.setBK(rs.getString("BK"));
                wk.setBL(rs.getString("BL"));
                wk.setBM(rs.getString("BM"));
                wk.setBN(rs.getString("BN"));
                wk.setBO(rs.getString("BO"));
                wk.setBP(rs.getString("BP"));
                wk.setBQ(rs.getString("BQ"));
                wk.setBR(rs.getString("BR"));
                wk.setBS(rs.getString("BS"));
                wk.setBT(rs.getString("BT"));
                wk.setBU(rs.getString("BU"));
                wk.setBV(rs.getString("BV"));
                wk.setBW(rs.getString("BW"));
                wk.setBX(rs.getString("BX"));
                wk.setBYY(rs.getString("BYY"));
                wk.setBZ(rs.getString("BZ"));

                wk.setCA(rs.getString("CA"));
                wk.setCB(rs.getString("CB"));
                wk.setCC(rs.getString("CC"));
                wk.setCD(rs.getString("CD"));
                wk.setCE(rs.getString("CE"));
                wk.setCF(rs.getString("CF"));
                wk.setCG(rs.getString("CG"));
                wk.setCH(rs.getString("CH"));
                wk.setCI(rs.getString("CI"));
                wk.setCJ(rs.getString("CJ"));
                wk.setCK(rs.getString("CK"));
                wk.setCL(rs.getString("CL"));
                wk.setCM(rs.getString("CM"));
                wk.setCN(rs.getString("CN"));
                wk.setCO(rs.getString("CO"));
                wk.setCP(rs.getString("CP"));
                wk.setCQ(rs.getString("CQ"));
                wk.setCR(rs.getString("CR"));
                wk.setCS(rs.getString("CS"));
                wk.setCT(rs.getString("CT"));
                wk.setCU(rs.getString("CU"));
                wk.setCV(rs.getString("CV"));

                workbenchList.add(wk);
            }
        }catch (Exception e){
            e.printStackTrace();
        }


        return workbenchList;
    }

    @Override
    public List<Workbench> getWorkbenchToDate(String startTime, String endTime, String gognsi) {
        List<Workbench>workbenchList=new ArrayList<>();
        try{
            DBCoon.init();
            String sql="select * from baitaoquanxian where 日期 >= '" + startTime + "' and 日期 <= '" + endTime + "' and 公司 = '" + gognsi + "'";
            System.out.println(sql);
            ResultSet rs=DBCoon.getInfo(sql);
            System.out.println("获取工作台信息成功1");
            while(rs.next()){
                Workbench wk=new Workbench();
                wk.setId(rs.getInt("id"));
                wk.setRenYuan(rs.getString("人员"));
                wk.setGongSi(rs.getString("公司"));

                wk.setA(rs.getString("A"));
                wk.setB(rs.getString("B"));
                wk.setC(rs.getString("C"));
                wk.setD(rs.getString("D"));
                wk.setE(rs.getString("E"));
                wk.setF(rs.getString("F"));
                wk.setG(rs.getString("G"));
                wk.setH(rs.getString("H"));
                wk.setI(rs.getString("I"));
                wk.setJ(rs.getString("J"));
                wk.setK(rs.getString("K"));
                wk.setL(rs.getString("L"));
                wk.setM(rs.getString("M"));
                wk.setN(rs.getString("N"));
                wk.setO(rs.getString("O"));
                wk.setP(rs.getString("P"));
                wk.setQ(rs.getString("Q"));
                wk.setR(rs.getString("R"));
                wk.setS(rs.getString("S"));
                wk.setT(rs.getString("T"));
                wk.setU(rs.getString("U"));
                wk.setV(rs.getString("V"));
                wk.setW(rs.getString("W"));
                wk.setX(rs.getString("X"));
                wk.setY(rs.getString("Y"));
                wk.setZ(rs.getString("Z"));

                wk.setAA(rs.getString("AA"));
                wk.setAB(rs.getString("AB"));
                wk.setAC(rs.getString("AC"));
                wk.setAD(rs.getString("AD"));
                wk.setAE(rs.getString("AE"));
                wk.setAF(rs.getString("AF"));
                wk.setAG(rs.getString("AG"));
                wk.setAH(rs.getString("AH"));
                wk.setAI(rs.getString("AI"));
                wk.setAJ(rs.getString("AJ"));
                wk.setAK(rs.getString("AK"));
                wk.setAL(rs.getString("AL"));
                wk.setAM(rs.getString("AM"));
                wk.setAN(rs.getString("AN"));
                wk.setAO(rs.getString("AO"));
                wk.setAP(rs.getString("AP"));
                wk.setAQ(rs.getString("AQ"));
                wk.setAR(rs.getString("AR"));
                wk.setASS(rs.getString("ASS"));
                wk.setAT(rs.getString("AT"));
                wk.setAU(rs.getString("AU"));
                wk.setAV(rs.getString("AV"));
                wk.setAW(rs.getString("AW"));
                wk.setAX(rs.getString("AX"));
                wk.setAY(rs.getString("AY"));
                wk.setAZ(rs.getString("AZ"));

                wk.setBA(rs.getString("BA"));
                wk.setBB(rs.getString("BB"));
                wk.setBC(rs.getString("BC"));
                wk.setBD(rs.getString("BD"));
                wk.setBE(rs.getString("BE"));
                wk.setBF(rs.getString("BF"));
                wk.setBG(rs.getString("BG"));
                wk.setBH(rs.getString("BH"));
                wk.setBI(rs.getString("BI"));
                wk.setBJ(rs.getString("BJ"));
                wk.setBK(rs.getString("BK"));
                wk.setBL(rs.getString("BL"));
                wk.setBM(rs.getString("BM"));
                wk.setBN(rs.getString("BN"));
                wk.setBO(rs.getString("BO"));
                wk.setBP(rs.getString("BP"));
                wk.setBQ(rs.getString("BQ"));
                wk.setBR(rs.getString("BR"));
                wk.setBS(rs.getString("BS"));
                wk.setBT(rs.getString("BT"));
                wk.setBU(rs.getString("BU"));
                wk.setBV(rs.getString("BV"));
                wk.setBW(rs.getString("BW"));
                wk.setBX(rs.getString("BX"));
                wk.setBYY(rs.getString("BYY"));
                wk.setBZ(rs.getString("BZ"));

                wk.setCA(rs.getString("CA"));
                wk.setCB(rs.getString("CB"));
                wk.setCC(rs.getString("CC"));
                wk.setCD(rs.getString("CD"));
                wk.setCE(rs.getString("CE"));
                wk.setCF(rs.getString("CF"));
                wk.setCG(rs.getString("CG"));
                wk.setCH(rs.getString("CH"));
                wk.setCI(rs.getString("CI"));
                wk.setCJ(rs.getString("CJ"));
                wk.setCK(rs.getString("CK"));
                wk.setCL(rs.getString("CL"));
                wk.setCM(rs.getString("CM"));
                wk.setCN(rs.getString("CN"));
                wk.setCO(rs.getString("CO"));
                wk.setCP(rs.getString("CP"));
                wk.setCQ(rs.getString("CQ"));
                wk.setCR(rs.getString("CR"));
                wk.setCS(rs.getString("CS"));
                wk.setCT(rs.getString("CT"));
                wk.setCU(rs.getString("CU"));
                wk.setCV(rs.getString("CV"));

                workbenchList.add(wk);
            }
        }catch (Exception e){
            e.printStackTrace();
        }


        return workbenchList;
    }

    @Override
    public List<Workbench> getWorkbenchToDateUsername(String startTime, String endTime, String gognsi, String username) {
        List<Workbench>workbenchList=new ArrayList<>();
        try{
            DBCoon.init();
            String sql="select * from baitaoquanxian where 日期 >= '" + startTime + "' and 日期 <= '" + endTime + "' and 公司 = '" + gognsi + "' and 人员 = '" + username + "'";
            ResultSet rs=DBCoon.getInfo(sql);
            System.out.println("获取工作台信息成功");
            while(rs.next()){
                Workbench wk=new Workbench();
                wk.setId(rs.getInt("id"));
                wk.setRenYuan(rs.getString("人员"));
                wk.setGongSi(rs.getString("公司"));

                wk.setA(rs.getString("A"));
                wk.setB(rs.getString("B"));
                wk.setC(rs.getString("C"));
                wk.setD(rs.getString("D"));
                wk.setE(rs.getString("E"));
                wk.setF(rs.getString("F"));
                wk.setG(rs.getString("G"));
                wk.setH(rs.getString("H"));
                wk.setI(rs.getString("I"));
                wk.setJ(rs.getString("J"));
                wk.setK(rs.getString("K"));
                wk.setL(rs.getString("L"));
                wk.setM(rs.getString("M"));
                wk.setN(rs.getString("N"));
                wk.setO(rs.getString("O"));
                wk.setP(rs.getString("P"));
                wk.setQ(rs.getString("Q"));
                wk.setR(rs.getString("R"));
                wk.setS(rs.getString("S"));
                wk.setT(rs.getString("T"));
                wk.setU(rs.getString("U"));
                wk.setV(rs.getString("V"));
                wk.setW(rs.getString("W"));
                wk.setX(rs.getString("X"));
                wk.setY(rs.getString("Y"));
                wk.setZ(rs.getString("Z"));

                wk.setAA(rs.getString("AA"));
                wk.setAB(rs.getString("AB"));
                wk.setAC(rs.getString("AC"));
                wk.setAD(rs.getString("AD"));
                wk.setAE(rs.getString("AE"));
                wk.setAF(rs.getString("AF"));
                wk.setAG(rs.getString("AG"));
                wk.setAH(rs.getString("AH"));
                wk.setAI(rs.getString("AI"));
                wk.setAJ(rs.getString("AJ"));
                wk.setAK(rs.getString("AK"));
                wk.setAL(rs.getString("AL"));
                wk.setAM(rs.getString("AM"));
                wk.setAN(rs.getString("AN"));
                wk.setAO(rs.getString("AO"));
                wk.setAP(rs.getString("AP"));
                wk.setAQ(rs.getString("AQ"));
                wk.setAR(rs.getString("AR"));
                wk.setASS(rs.getString("ASS"));
                wk.setAT(rs.getString("AT"));
                wk.setAU(rs.getString("AU"));
                wk.setAV(rs.getString("AV"));
                wk.setAW(rs.getString("AW"));
                wk.setAX(rs.getString("AX"));
                wk.setAY(rs.getString("AY"));
                wk.setAZ(rs.getString("AZ"));

                wk.setBA(rs.getString("BA"));
                wk.setBB(rs.getString("BB"));
                wk.setBC(rs.getString("BC"));
                wk.setBD(rs.getString("BD"));
                wk.setBE(rs.getString("BE"));
                wk.setBF(rs.getString("BF"));
                wk.setBG(rs.getString("BG"));
                wk.setBH(rs.getString("BH"));
                wk.setBI(rs.getString("BI"));
                wk.setBJ(rs.getString("BJ"));
                wk.setBK(rs.getString("BK"));
                wk.setBL(rs.getString("BL"));
                wk.setBM(rs.getString("BM"));
                wk.setBN(rs.getString("BN"));
                wk.setBO(rs.getString("BO"));
                wk.setBP(rs.getString("BP"));
                wk.setBQ(rs.getString("BQ"));
                wk.setBR(rs.getString("BR"));
                wk.setBS(rs.getString("BS"));
                wk.setBT(rs.getString("BT"));
                wk.setBU(rs.getString("BU"));
                wk.setBV(rs.getString("BV"));
                wk.setBW(rs.getString("BW"));
                wk.setBX(rs.getString("BX"));
                wk.setBYY(rs.getString("BYY"));
                wk.setBZ(rs.getString("BZ"));

                wk.setCA(rs.getString("CA"));
                wk.setCB(rs.getString("CB"));
                wk.setCC(rs.getString("CC"));
                wk.setCD(rs.getString("CD"));
                wk.setCE(rs.getString("CE"));
                wk.setCF(rs.getString("CF"));
                wk.setCG(rs.getString("CG"));
                wk.setCH(rs.getString("CH"));
                wk.setCI(rs.getString("CI"));
                wk.setCJ(rs.getString("CJ"));
                wk.setCK(rs.getString("CK"));
                wk.setCL(rs.getString("CL"));
                wk.setCM(rs.getString("CM"));
                wk.setCN(rs.getString("CN"));
                wk.setCO(rs.getString("CO"));
                wk.setCP(rs.getString("CP"));
                wk.setCQ(rs.getString("CQ"));
                wk.setCR(rs.getString("CR"));
                wk.setCS(rs.getString("CS"));
                wk.setCT(rs.getString("CT"));
                wk.setCU(rs.getString("CU"));
                wk.setCV(rs.getString("CV"));

                workbenchList.add(wk);
            }
        }catch (Exception e){
            e.printStackTrace();
        }


        return workbenchList;
    }

    @Override
    public boolean addWorkbench(String gongSi, String renYuan) {
        try {
            DBCoon.init();
            sql = "insert into baitaoquanxian(公司,人员)values('" + gongSi + "','" + renYuan + "')";
            int i = DBCoon.addUpdDel(sql);
            if (i>0){
                flag=true;
                System.out.println("添加成功");
            }
        }catch (Exception e) {
            System.out.println("添加失败");
            e.printStackTrace();
        }finally {
            DBCoon.close();
        }
        return flag;
    }
}


