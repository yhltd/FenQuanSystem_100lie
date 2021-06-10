package dao;

import javaBean.Copy1;
import util.DBCoon;

import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class Copy1DaoImp implements Copy1Dao{
    /*创建一个返回值标志*/
    static boolean flag = false;
    /*提高sql作用域，每个方法里都要编写sql语句*/
    static String sql = null;

    @Override
    public List<Copy1> copy1Info(String gognsi) {
        List<Copy1>copy1List=new ArrayList<>();
        try {
            DBCoon.init();
            String sql="select*from baitaoquanxian_copy1 where quanxian = '" + gognsi + "'";
            ResultSet rs=DBCoon.getInfo(sql);
            System.out.println("获取copy1信息成功");
            while(rs.next()){
                Copy1 copy=new Copy1();
                copy.setId(rs.getInt("id"));
                copy.setC(rs.getString("C"));
                copy.setD(rs.getString("D"));
                copy.setE(rs.getString("E"));
                copy.setF(rs.getString("F"));
                copy.setG(rs.getString("G"));
                copy.setH(rs.getString("H"));
                copy.setI(rs.getString("I"));
                copy.setJ(rs.getString("J"));
                copy.setK(rs.getString("K"));
                copy.setL(rs.getString("L"));
                copy.setM(rs.getString("M"));
                copy.setN(rs.getString("N"));
                copy.setO(rs.getString("O"));
                copy.setP(rs.getString("P"));
                copy.setQ(rs.getString("Q"));
                copy.setR(rs.getString("R"));
                copy.setS(rs.getString("S"));
                copy.setT(rs.getString("T"));
                copy.setU(rs.getString("U"));
                copy.setV(rs.getString("V"));
                copy.setW(rs.getString("W"));
                copy.setX(rs.getString("X"));
                copy.setY(rs.getString("Y"));
                copy.setZ(rs.getString("Z"));

                copy.setAA(rs.getString("AA"));
                copy.setAB(rs.getString("AB"));
                copy.setAC(rs.getString("AC"));
                copy.setAD(rs.getString("AD"));
                copy.setAE(rs.getString("AE"));
                copy.setAF(rs.getString("AF"));
                copy.setAG(rs.getString("AG"));
                copy.setAH(rs.getString("AH"));
                copy.setAI(rs.getString("AI"));
                copy.setAJ(rs.getString("AJ"));
                copy.setAK(rs.getString("AK"));
                copy.setAL(rs.getString("AL"));
                copy.setAM(rs.getString("AM"));
                copy.setAN(rs.getString("AN"));
                copy.setAO(rs.getString("AO"));
                copy.setAP(rs.getString("AP"));
                copy.setAQ(rs.getString("AQ"));
                copy.setAR(rs.getString("AR"));
                copy.setASS(rs.getString("ASS"));
                copy.setAT(rs.getString("AT"));
                copy.setAU(rs.getString("AU"));
                copy.setAV(rs.getString("AV"));
                copy.setAW(rs.getString("AW"));
                copy.setAX(rs.getString("AX"));
                copy.setAY(rs.getString("AY"));
                copy.setAZ(rs.getString("AZ"));

                copy.setBA(rs.getString("BA"));
                copy.setBB(rs.getString("BB"));
                copy.setBC(rs.getString("BC"));
                copy.setBD(rs.getString("BD"));
                copy.setBE(rs.getString("BE"));
                copy.setBF(rs.getString("BF"));
                copy.setBG(rs.getString("BG"));
                copy.setBH(rs.getString("BH"));
                copy.setBI(rs.getString("BI"));
                copy.setBJ(rs.getString("BJ"));
                copy.setBK(rs.getString("BK"));
                copy.setBL(rs.getString("BL"));
                copy.setBM(rs.getString("BM"));
                copy.setBN(rs.getString("BN"));
                copy.setBO(rs.getString("BO"));
                copy.setBP(rs.getString("BP"));
                copy.setBQ(rs.getString("BQ"));
                copy.setBR(rs.getString("BR"));
                copy.setBS(rs.getString("BS"));
                copy.setBT(rs.getString("BT"));
                copy.setBU(rs.getString("BU"));
                copy.setBV(rs.getString("BV"));
                copy.setBW(rs.getString("BW"));
                copy.setBX(rs.getString("BX"));
                copy.setBYY(rs.getString("BYY"));
                copy.setBZ(rs.getString("BZ"));

                copy.setCA(rs.getString("CA"));
                copy.setCB(rs.getString("CB"));
                copy.setCC(rs.getString("CC"));
                copy.setCD(rs.getString("CD"));
                copy.setCE(rs.getString("CE"));
                copy.setCF(rs.getString("CF"));
                copy.setCG(rs.getString("CG"));
                copy.setCH(rs.getString("CH"));
                copy.setCI(rs.getString("CI"));
                copy.setCJ(rs.getString("CJ"));
                copy.setCK(rs.getString("CK"));
                copy.setCL(rs.getString("CL"));
                copy.setCM(rs.getString("CM"));
                copy.setCN(rs.getString("CN"));
                copy.setCO(rs.getString("CO"));
                copy.setCP(rs.getString("CP"));
                copy.setCQ(rs.getString("CQ"));
                copy.setCR(rs.getString("CR"));
                copy.setCS(rs.getString("CS"));
                copy.setCT(rs.getString("CT"));
                copy.setCU(rs.getString("CU"));
                copy.setCV(rs.getString("CV"));
                copy.setCW(rs.getString("CW"));
                copy.setCX(rs.getString("CX"));

                copy.setQuanXian(rs.getString("quanxian"));

                copy.setB(rs.getString("B"));

                copy1List.add(copy);
            }
        }catch (Exception e){
            e.printStackTrace();
        }
        return copy1List;
    }

    @Override
    public boolean updateC(int id, String C) {
        try {
            DBCoon.init();
            sql = "update baitaoquanxian_copy1 set C=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set D=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set E=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set F=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set G=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set H=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set I=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set J=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set K=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set L=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set M=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set N=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set O=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set P=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set Q=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set R=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set S=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set T=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set U=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set V=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set W=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set X=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set Y=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set Z=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set AA=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set AB=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set AC=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set AD=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set AE=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set AF=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set AG=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set AH=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set AI=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set AJ=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set AK=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set AL=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set AM=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set AN=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set AO=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set AP=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set AQ=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set AR=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set ASS=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set AT=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set AU=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set AV=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set AW=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set AX=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set AY=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set AZ=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set BA=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set BB=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set BC=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set BD=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set BE=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set BF=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set BG=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set BH=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set BI=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set BJ=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set BK=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set BL=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set BM=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set BN=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set BO=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set BP=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set BQ=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set BR=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set BS=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set BT=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set BU=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set BV=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set BW=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set BX=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set BYY=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set BZ=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set CA=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set CB=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set CC=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set CD=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set CE=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set CF=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set CG=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set CH=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set CI=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set CJ=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set CK=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set CL=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set CM=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set CN=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set CO=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set CP=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set CQ=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set CR=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set CS=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set CT=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set CU=? where id=?";

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
            sql = "update baitaoquanxian_copy1 set CV=? where id=?";

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

    @Override
    public boolean updateCW(int id, String CW) {
        try {
            DBCoon.init();
            sql = "update baitaoquanxian_copy1 set CW=? where id=?";
            Object[] args={CW,id};
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
    public boolean updateCX(int id, String CX) {
        try {
            DBCoon.init();
            sql = "update baitaoquanxian_copy1 set CX=? where id=?";
            Object[] args={CX,id};
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
    public List<Copy1> cpInfo(String B) {
        List<Copy1>cpList=new ArrayList<>();
        try {
            DBCoon.init();
            sql = "select * from baitaoquanxian_copy1 where B=?";
            Object[] args={B};
            ResultSet rs = DBCoon.searchSql(sql,args);
            while(rs.next()){
                Copy1 cp=new Copy1();
                cp.setId(rs.getInt("id"));
                cp.setQuanXian(rs.getString("quanxian"));
                cp.setB(rs.getString("B"));
                cp.setC(rs.getString("C"));
                cp.setD(rs.getString("D"));
                cp.setE(rs.getString("E"));
                cp.setF(rs.getString("F"));
                cp.setG(rs.getString("G"));
                cp.setH(rs.getString("H"));
                cp.setI(rs.getString("I"));
                cp.setJ(rs.getString("J"));
                cp.setK(rs.getString("K"));
                cp.setL(rs.getString("L"));
                cp.setM(rs.getString("M"));
                cp.setN(rs.getString("N"));
                cp.setO(rs.getString("O"));
                cp.setP(rs.getString("P"));
                cp.setQ(rs.getString("Q"));
                cp.setR(rs.getString("R"));
                cp.setS(rs.getString("S"));
                cp.setT(rs.getString("T"));
                cp.setU(rs.getString("U"));
                cp.setV(rs.getString("V"));
                cp.setW(rs.getString("W"));
                cp.setX(rs.getString("X"));
                cp.setY(rs.getString("Y"));
                cp.setZ(rs.getString("Z"));

                cp.setAA(rs.getString("AA"));
                cp.setAB(rs.getString("AB"));
                cp.setAC(rs.getString("AC"));
                cp.setAD(rs.getString("AD"));
                cp.setAE(rs.getString("AE"));
                cp.setAF(rs.getString("AF"));
                cp.setAG(rs.getString("AG"));
                cp.setAH(rs.getString("AH"));
                cp.setAI(rs.getString("AI"));
                cp.setAJ(rs.getString("AJ"));
                cp.setAK(rs.getString("AK"));
                cp.setAL(rs.getString("AL"));
                cp.setAM(rs.getString("AM"));
                cp.setAN(rs.getString("AN"));
                cp.setAO(rs.getString("AO"));
                cp.setAP(rs.getString("AP"));
                cp.setAQ(rs.getString("AQ"));
                cp.setAR(rs.getString("AR"));
                cp.setASS(rs.getString("ASS"));
                cp.setAT(rs.getString("AT"));
                cp.setAU(rs.getString("AU"));
                cp.setAV(rs.getString("AV"));
                cp.setAW(rs.getString("AW"));
                cp.setAX(rs.getString("AX"));
                cp.setAY(rs.getString("AY"));
                cp.setAZ(rs.getString("AZ"));

                cp.setBA(rs.getString("BA"));
                cp.setBB(rs.getString("BB"));
                cp.setBC(rs.getString("BC"));
                cp.setBD(rs.getString("BD"));
                cp.setBE(rs.getString("BE"));
                cp.setBF(rs.getString("BF"));
                cp.setBG(rs.getString("BG"));
                cp.setBH(rs.getString("BH"));
                cp.setBI(rs.getString("BI"));
                cp.setBJ(rs.getString("BJ"));
                cp.setBK(rs.getString("BK"));
                cp.setBL(rs.getString("BL"));
                cp.setBM(rs.getString("BM"));
                cp.setBN(rs.getString("BN"));
                cp.setBO(rs.getString("BO"));
                cp.setBP(rs.getString("BP"));
                cp.setBQ(rs.getString("BQ"));
                cp.setBR(rs.getString("BR"));
                cp.setBS(rs.getString("BS"));
                cp.setBT(rs.getString("BT"));
                cp.setBU(rs.getString("BU"));
                cp.setBV(rs.getString("BV"));
                cp.setBW(rs.getString("BW"));
                cp.setBX(rs.getString("BX"));
                cp.setBYY(rs.getString("BYY"));
                cp.setBZ(rs.getString("BZ"));

                cp.setCA(rs.getString("CA"));
                cp.setCB(rs.getString("CB"));
                cp.setCC(rs.getString("CC"));
                cp.setCD(rs.getString("CD"));
                cp.setCE(rs.getString("CE"));
                cp.setCF(rs.getString("CF"));
                cp.setCG(rs.getString("CG"));
                cp.setCH(rs.getString("CH"));
                cp.setCI(rs.getString("CI"));
                cp.setCJ(rs.getString("CJ"));
                cp.setCK(rs.getString("CK"));
                cp.setCL(rs.getString("CL"));
                cp.setCM(rs.getString("CM"));
                cp.setCN(rs.getString("CN"));
                cp.setCO(rs.getString("CO"));
                cp.setCP(rs.getString("CP"));
                cp.setCQ(rs.getString("CQ"));
                cp.setCR(rs.getString("CR"));
                cp.setCS(rs.getString("CS"));
                cp.setCT(rs.getString("CT"));
                cp.setCU(rs.getString("CU"));
                cp.setCV(rs.getString("CV"));
                cp.setCW(rs.getString("CW"));
                cp.setCX(rs.getString("CX"));
                cpList.add(cp);
            }
        }catch (Exception e) {
            System.out.println("数据更新失败");
            e.printStackTrace();
        }finally {
            DBCoon.close();
        }
        return cpList;
    }

    @Override
    public List<Copy1> getRenYuanInfo(String gognsi, String user) {
        List<Copy1>copy1List=new ArrayList<>();
        try {
            DBCoon.init();
            String sql="select*from baitaoquanxian_copy1 where quanxian = '" + gognsi + "'and B = '" + user + "'";
            ResultSet rs=DBCoon.getInfo(sql);
            System.out.println("获取copy1信息成功");
            while(rs.next()){
                Copy1 copy=new Copy1();
                copy.setId(rs.getInt("id"));
                copy.setC(rs.getString("C"));
                copy.setD(rs.getString("D"));
                copy.setE(rs.getString("E"));
                copy.setF(rs.getString("F"));
                copy.setG(rs.getString("G"));
                copy.setH(rs.getString("H"));
                copy.setI(rs.getString("I"));
                copy.setJ(rs.getString("J"));
                copy.setK(rs.getString("K"));
                copy.setL(rs.getString("L"));
                copy.setM(rs.getString("M"));
                copy.setN(rs.getString("N"));
                copy.setO(rs.getString("O"));
                copy.setP(rs.getString("P"));
                copy.setQ(rs.getString("Q"));
                copy.setR(rs.getString("R"));
                copy.setS(rs.getString("S"));
                copy.setT(rs.getString("T"));
                copy.setU(rs.getString("U"));
                copy.setV(rs.getString("V"));
                copy.setW(rs.getString("W"));
                copy.setX(rs.getString("X"));
                copy.setY(rs.getString("Y"));
                copy.setZ(rs.getString("Z"));

                copy.setAA(rs.getString("AA"));
                copy.setAB(rs.getString("AB"));
                copy.setAC(rs.getString("AC"));
                copy.setAD(rs.getString("AD"));
                copy.setAE(rs.getString("AE"));
                copy.setAF(rs.getString("AF"));
                copy.setAG(rs.getString("AG"));
                copy.setAH(rs.getString("AH"));
                copy.setAI(rs.getString("AI"));
                copy.setAJ(rs.getString("AJ"));
                copy.setAK(rs.getString("AK"));
                copy.setAL(rs.getString("AL"));
                copy.setAM(rs.getString("AM"));
                copy.setAN(rs.getString("AN"));
                copy.setAO(rs.getString("AO"));
                copy.setAP(rs.getString("AP"));
                copy.setAQ(rs.getString("AQ"));
                copy.setAR(rs.getString("AR"));
                copy.setASS(rs.getString("ASS"));
                copy.setAT(rs.getString("AT"));
                copy.setAU(rs.getString("AU"));
                copy.setAV(rs.getString("AV"));
                copy.setAW(rs.getString("AW"));
                copy.setAX(rs.getString("AX"));
                copy.setAY(rs.getString("AY"));
                copy.setAZ(rs.getString("AZ"));

                copy.setBA(rs.getString("BA"));
                copy.setBB(rs.getString("BB"));
                copy.setBC(rs.getString("BC"));
                copy.setBD(rs.getString("BD"));
                copy.setBE(rs.getString("BE"));
                copy.setBF(rs.getString("BF"));
                copy.setBG(rs.getString("BG"));
                copy.setBH(rs.getString("BH"));
                copy.setBI(rs.getString("BI"));
                copy.setBJ(rs.getString("BJ"));
                copy.setBK(rs.getString("BK"));
                copy.setBL(rs.getString("BL"));
                copy.setBM(rs.getString("BM"));
                copy.setBN(rs.getString("BN"));
                copy.setBO(rs.getString("BO"));
                copy.setBP(rs.getString("BP"));
                copy.setBQ(rs.getString("BQ"));
                copy.setBR(rs.getString("BR"));
                copy.setBS(rs.getString("BS"));
                copy.setBT(rs.getString("BT"));
                copy.setBU(rs.getString("BU"));
                copy.setBV(rs.getString("BV"));
                copy.setBW(rs.getString("BW"));
                copy.setBX(rs.getString("BX"));
                copy.setBYY(rs.getString("BYY"));
                copy.setBZ(rs.getString("BZ"));

                copy.setCA(rs.getString("CA"));
                copy.setCB(rs.getString("CB"));
                copy.setCC(rs.getString("CC"));
                copy.setCD(rs.getString("CD"));
                copy.setCE(rs.getString("CE"));
                copy.setCF(rs.getString("CF"));
                copy.setCG(rs.getString("CG"));
                copy.setCH(rs.getString("CH"));
                copy.setCI(rs.getString("CI"));
                copy.setCJ(rs.getString("CJ"));
                copy.setCK(rs.getString("CK"));
                copy.setCL(rs.getString("CL"));
                copy.setCM(rs.getString("CM"));
                copy.setCN(rs.getString("CN"));
                copy.setCO(rs.getString("CO"));
                copy.setCP(rs.getString("CP"));
                copy.setCQ(rs.getString("CQ"));
                copy.setCR(rs.getString("CR"));
                copy.setCS(rs.getString("CS"));
                copy.setCT(rs.getString("CT"));
                copy.setCU(rs.getString("CU"));
                copy.setCV(rs.getString("CV"));
                copy.setCW(rs.getString("CW"));
                copy.setCX(rs.getString("CX"));

                copy.setQuanXian(rs.getString("quanxian"));

                copy.setB(rs.getString("B"));

                copy1List.add(copy);
            }
        }catch (Exception e){
            e.printStackTrace();
        }
        System.out.println(copy1List);
        return copy1List;
    }

}
