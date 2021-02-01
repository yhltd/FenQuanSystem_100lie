package dao;

import javaBean.GongSi;
import util.DBCoon;

import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class GongSiDaoImp implements GongSiDao {
    /*创建一个返回值标志*/
    static boolean flag = false;
    /*提高sql作用域，每个方法里都要编写sql语句*/
    static String sql = null;

    @Override
    public List<GongSi> GongSiName() {
        List<GongSi>GongSiNameList=new ArrayList<>();
        try {
            DBCoon.init();
            String sql="select B from baitaoquanxian_gongsi";
            ResultSet rs=DBCoon.getInfo(sql);
            System.out.println("获取所有用户信息成功");
            while(rs.next()){
                GongSi gs=new GongSi();
                gs.setB(rs.getString("B"));
                GongSiNameList.add(gs);
            }
        }catch (Exception e){
            e.printStackTrace();
            System.out.println("获取所有用户信息成功");
        }finally {
            DBCoon.close();
        }
        return GongSiNameList;
    }

    @Override
    public List<GongSi> gongsiInfo() {
        List<GongSi>gongsiList=new ArrayList<>();
        try {
            DBCoon.init();
            String sql="select*from baitaoquanxian_gongsi";
            ResultSet rs=DBCoon.getInfo(sql);
            System.out.println("获取公司信息成功");
            while (rs.next()) {
                GongSi gs = new GongSi();
                gs.setId(rs.getInt("id"));
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
                gs.setCW(rs.getString("CW"));
                gs.setCX(rs.getString("CX"));

                gongsiList.add(gs);
            }
        }catch (Exception e){
            System.out.println("获取公司信息失败");
            e.printStackTrace();
        }finally{
            DBCoon.close();
        }
        return gongsiList;
    }

//    @Override
//    public boolean update(int id,String B, String C, String D, String E, String F, String G, String H, String I, String J, String K, String L, String M, String N, String O, String P, String Q, String R, String S, String T, String U, String V, String W, String X, String Y, String Z,
//                          String AA, String AB, String AC, String AD, String AE, String AF, String AG, String AH, String AI, String AJ, String AK, String AL, String AM, String AN, String AO, String AP, String AQ, String AR, String ASS, String AT, String AU, String AV, String AW, String AX, String AY, String AZ,
//                          String BA, String BB, String BC, String BD, String BE, String BF, String BG, String BH, String BI, String BJ, String BK, String BL, String BM, String BN, String BO, String BP, String BQ, String BR, String BS, String BT, String BU, String BV, String BW, String BX, String BYY, String BZ,
//                          String CA, String CB, String CC, String CD, String CE, String CF, String CG, String CH, String CI, String CJ, String CK, String CL, String CM, String CN, String CO, String CP, String CQ, String CR, String CS, String CT, String CU, String CV, String CW, String CX) {
//        try {
//            DBCoon.init();
//            sql = "update baitaoquanxian_gongsi set B=?,C=?,D=?,E=?,F=?,G=?,H=?,I=?,J=?,K=?,L=?,M=?,N=?,O=?,P=?,Q=?,R=?,S=?,T=?,U=?,V=?,W=?,X=?,Y=?,Z=?," +
//                    "AA=?,AB=?,AC=?,AD=?,AE=?,AF=?,AG=?,AH=?,AI=?,AJ=?,AK=?,AL=?,AM=?,AN=?,AO=?,AP=?,AQ=?,AR=?,ASS=?,AT=?,AU=?,AV=?,AW=?,AX=?,AY=?,AZ=?," +
//                    "BA=?,BB=?,BC=?,BD=?,BE=?,BF=?,BG=?,BH=?,BI=?,BJ=?,BK=?,BL=?,BM=?,BN=?,BO=?,BP=?,BQ=?,BR=?,BS=?,BT=?,BU=?,BV=?,BW=?,BX=?,BYY=?,BZ=?," +
//                    "CA=?,CB=?,CC=?,CD=?,CE=?,CF=?,CG=?,CH=?,CI=?,CJ=?,CK=?,CL=?,CM=?,CN=?,CO=?,CP=?,CQ=?,CR=?,CS=?,CT=?,CU=?,CV=?,CW=?,CX=? where id=?";
//
//            Object[] args={B, C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,
//                    AA,AB,AC,AD,AE,AF,AG,AH,AI,AJ,AK,AL,AM,AN,AO,AP,AQ,AR,ASS,AT,AU,AV,AW,AX,AY,AZ,
//                    BA,BB,BC,BD,BE,BF,BG,BH,BI,BJ,BK,BL,BM,BN,BO,BP,BQ,BR,BS,BT,BU,BV,BW,BX,BYY,BZ,
//                    CA,CB,CC,CD,CE,CF,CG,CH,CI,CJ,CK,CL,CM,CN,CO,CP,CQ,CR,CS,CT,CU,CV,CW,CX,id};
//            int i = DBCoon.addUpdDel(sql,args);
//            if (i>0){
//                flag=true;
//                System.out.println("数据更新成功");
//            }
//        }catch (Exception e) {
//            System.out.println("数据更新失败");
//            e.printStackTrace();
//        }finally {
//            DBCoon.close();
//        }
//        return flag;
//    }

    @Override
    public boolean register(GongSi gongSi) {
        try {
            DBCoon.init();
            sql="insert into baitaoquanxian_gongsi(B)"+"values(?)";
            Object[] args = {gongSi.getB()};
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
    public boolean delete(int id) {
        try {
            DBCoon.init();
            sql="delete from baitaoquanxian_gongsi where id = ?";
            Object[] args={id};
            int i=DBCoon.addUpdDel(sql,args);
            if(i>0){
                flag=true;
            }
        }catch (Exception e){
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
            sql = "update baitaoquanxian_gongsi set C=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set D=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set E=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set F=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set G=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set H=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set I=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set J=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set K=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set L=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set M=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set N=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set O=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set P=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set Q=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set R=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set S=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set T=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set U=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set V=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set W=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set X=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set Y=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set Z=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set AA=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set AB=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set AC=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set AD=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set AE=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set AF=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set AG=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set AH=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set AI=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set AJ=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set AK=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set AL=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set AM=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set AN=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set AO=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set AP=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set AQ=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set AR=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set ASS=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set AT=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set AU=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set AV=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set AW=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set AX=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set AY=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set AZ=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set BA=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set BB=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set BC=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set BD=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set BE=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set BF=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set BG=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set BH=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set BI=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set BJ=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set BK=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set BL=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set BM=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set BN=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set BO=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set BP=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set BQ=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set BR=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set BS=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set BT=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set BU=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set BV=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set BW=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set BX=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set BYY=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set BZ=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set CA=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set CB=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set CC=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set CD=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set CE=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set CF=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set CG=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set CH=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set CI=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set CJ=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set CK=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set CL=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set CM=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set CN=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set CO=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set CP=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set CQ=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set CR=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set CS=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set CT=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set CU=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set CV=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set CW=? where id=?";

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
            sql = "update baitaoquanxian_gongsi set CX=? where id=?";

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

    
}
