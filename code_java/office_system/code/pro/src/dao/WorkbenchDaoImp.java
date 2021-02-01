package dao;

import javaBean.Workbench;
import util.DBCoon;

import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class WorkbenchDaoImp implements WorkbenchDao{
    /*创建一个返回值标志*/
    static boolean flag = false;
    /*提高sql作用域，每个方法里都要编写sql语句*/
    static String sql = null;
    @Override
    public List<Workbench> workbenchInfo() {
        List<Workbench>workbenchList=new ArrayList<>();
        try{
            DBCoon.init();
            String sql="select * from baitaoquanxian";
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

    @Override
    public boolean updateA(int id, String A) {
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set A=? where id=?";

            Object[] args={A,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set B=? where id=?";

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
    public boolean updateC(int id, String C) {
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set C=? where id=?";

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
    public boolean updateD(int id, String D) {
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set D=? where id=?";

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
    public boolean updateE(int id, String E) {
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set E=? where id=?";

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

    @Override
    public boolean updateF(int id, String F) {
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set F=? where id=?";

            Object[] args={F,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set G=? where id=?";

            Object[] args={G,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set H=? where id=?";

            Object[] args={H,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set I=? where id=?";

            Object[] args={I,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set J=? where id=?";

            Object[] args={J,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set K=? where id=?";

            Object[] args={K,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set L=? where id=?";

            Object[] args={L,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set M=? where id=?";

            Object[] args={M,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set N=? where id=?";

            Object[] args={N,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set O=? where id=?";

            Object[] args={O,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set P=? where id=?";

            Object[] args={P,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set Q=? where id=?";

            Object[] args={Q,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set R=? where id=?";

            Object[] args={R,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set S=? where id=?";

            Object[] args={S,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set T=? where id=?";

            Object[] args={T,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set U=? where id=?";

            Object[] args={U,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set V=? where id=?";

            Object[] args={V,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set W=? where id=?";

            Object[] args={W,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set X=? where id=?";

            Object[] args={X,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set Y=? where id=?";

            Object[] args={Y,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set Z=? where id=?";

            Object[] args={Z,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set AA=? where id=?";

            Object[] args={AA,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set AB=? where id=?";

            Object[] args={AB,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set AC=? where id=?";

            Object[] args={AC,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set AD=? where id=?";

            Object[] args={AD,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set AE=? where id=?";

            Object[] args={AE,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set AF=? where id=?";

            Object[] args={AF,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set AG=? where id=?";

            Object[] args={AG,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set AH=? where id=?";

            Object[] args={AH,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set AI=? where id=?";

            Object[] args={AI,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set AJ=? where id=?";

            Object[] args={AJ,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set AK=? where id=?";

            Object[] args={AK,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set AL=? where id=?";

            Object[] args={AL,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set AM=? where id=?";

            Object[] args={AM,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set AN=? where id=?";

            Object[] args={AN,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set AO=? where id=?";

            Object[] args={AO,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set AP=? where id=?";

            Object[] args={AP,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set AQ=? where id=?";

            Object[] args={AQ,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set AR=? where id=?";

            Object[] args={AR,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set ASS=? where id=?";

            Object[] args={ASS,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set AT=? where id=?";

            Object[] args={AT,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set AU=? where id=?";

            Object[] args={AU,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set AV=? where id=?";

            Object[] args={AV,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set AW=? where id=?";

            Object[] args={AW,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set AX=? where id=?";

            Object[] args={AX,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set AY=? where id=?";

            Object[] args={AY,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set AZ=? where id=?";

            Object[] args={AZ,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set BA=? where id=?";

            Object[] args={BA,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set BB=? where id=?";

            Object[] args={BB,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set BC=? where id=?";

            Object[] args={BC,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set BD=? where id=?";

            Object[] args={BD,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set BE=? where id=?";

            Object[] args={BE,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set BF=? where id=?";

            Object[] args={BF,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set BG=? where id=?";

            Object[] args={BG,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set BH=? where id=?";

            Object[] args={BH,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set BI=? where id=?";

            Object[] args={BI,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set BJ=? where id=?";

            Object[] args={BJ,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set BK=? where id=?";

            Object[] args={BK,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set BL=? where id=?";

            Object[] args={BL,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set BM=? where id=?";

            Object[] args={BM,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set BN=? where id=?";

            Object[] args={BN,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set BO=? where id=?";

            Object[] args={BO,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set BP=? where id=?";

            Object[] args={BP,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set BQ=? where id=?";

            Object[] args={BQ,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set BR=? where id=?";

            Object[] args={BR,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set BS=? where id=?";

            Object[] args={BS,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set BT=? where id=?";

            Object[] args={BT,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set BU=? where id=?";

            Object[] args={BU,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set BV=? where id=?";

            Object[] args={BV,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set BW=? where id=?";

            Object[] args={BW,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set BX=? where id=?";

            Object[] args={BX,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set BYY=? where id=?";

            Object[] args={BYY,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set BZ=? where id=?";

            Object[] args={BZ,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set CA=? where id=?";

            Object[] args={CA,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set CB=? where id=?";

            Object[] args={CB,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set CC=? where id=?";

            Object[] args={CC,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set CD=? where id=?";

            Object[] args={CD,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set CE=? where id=?";

            Object[] args={CE,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set CF=? where id=?";

            Object[] args={CF,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set CG=? where id=?";

            Object[] args={CG,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set CH=? where id=?";

            Object[] args={CH,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set CI=? where id=?";

            Object[] args={CI,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set CJ=? where id=?";

            Object[] args={CJ,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set CK=? where id=?";

            Object[] args={CK,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set CL=? where id=?";

            Object[] args={CL,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set CM=? where id=?";

            Object[] args={CM,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set CN=? where id=?";

            Object[] args={CN,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set CO=? where id=?";

            Object[] args={CO,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set CP=? where id=?";

            Object[] args={CP,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set CQ=? where id=?";

            Object[] args={CQ,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set CR=? where id=?";

            Object[] args={CR,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set CS=? where id=?";

            Object[] args={CS,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set CT=? where id=?";

            Object[] args={CT,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set CU=? where id=?";

            Object[] args={CU,id};
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
        try {
            DBCoon.init();
            sql = "update baitaoquanxian set CV=? where id=?";

            Object[] args={CV,id};
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
