package dao;

import javaBean.Copy1;

import java.util.List;

public interface Copy1Dao {
    /*显示公司表信息*/
    public List<Copy1> copy1Info(String gognsi);

//    /*根据获取到的内容修改Copy1信息*/
//    public boolean update(int id, String quanXian,String B,String C,String D, String E, String F,String G, String H, String I,String J, String K, String L,String M, String N, String O,String P, String Q, String R,String S, String T, String U,String V, String W, String X,String Y, String Z,
//                          String AA,String AB, String AC,String AD, String AE, String AF,String AG, String AH, String AI,String AJ, String AK, String AL,String AM, String AN, String AO,String AP, String AQ, String AR,String ASS, String AT, String AU,String AV, String AW, String AX,String AY, String AZ,
//                          String BA,String BB, String BC,String BD, String BE, String BF,String BG, String BH, String BI,String BJ, String BK, String BL,String BM, String BN, String BO,String BP, String BQ, String BR,String BS, String BT, String BU,String BV, String BW, String BX,String BYY, String BZ,
//                          String CA,String CB, String CC,String CD, String CE, String CF,String CG, String CH, String CI,String CJ, String CK, String CL,String CM, String CN, String CO,String CP, String CQ, String CR,String CS, String CT, String CU,String CV, String CW, String CX);

    public boolean updateC(int id,String C);
    public boolean updateD(int id,String D);
    public boolean updateE(int id,String E);
    public boolean updateF(int id,String F);
    public boolean updateG(int id,String G);
    public boolean updateH(int id,String H);
    public boolean updateI(int id,String I);
    public boolean updateJ(int id,String J);
    public boolean updateK(int id,String K);
    public boolean updateL(int id,String L);
    public boolean updateM(int id,String M);
    public boolean updateN(int id,String N);
    public boolean updateO(int id,String O);
    public boolean updateP(int id,String P);
    public boolean updateQ(int id,String Q);
    public boolean updateR(int id,String R);
    public boolean updateS(int id,String S);
    public boolean updateT(int id,String T);
    public boolean updateU(int id,String U);
    public boolean updateV(int id,String V);
    public boolean updateW(int id,String W);
    public boolean updateX(int id,String X);
    public boolean updateY(int id,String Y);
    public boolean updateZ(int id,String Z);

    public boolean updateAA(int id,String AA);
    public boolean updateAB(int id,String AB);
    public boolean updateAC(int id,String AC);
    public boolean updateAD(int id,String AD);
    public boolean updateAE(int id,String AE);
    public boolean updateAF(int id,String AF);
    public boolean updateAG(int id,String AG);
    public boolean updateAH(int id,String AH);
    public boolean updateAI(int id,String AI);
    public boolean updateAJ(int id,String AJ);
    public boolean updateAK(int id,String AK);
    public boolean updateAL(int id,String AL);
    public boolean updateAM(int id,String AM);
    public boolean updateAN(int id,String AN);
    public boolean updateAO(int id,String AO);
    public boolean updateAP(int id,String AP);
    public boolean updateAQ(int id,String AQ);
    public boolean updateAR(int id,String AR);
    public boolean updateASS(int id,String ASS);
    public boolean updateAT(int id,String AT);
    public boolean updateAU(int id,String AU);
    public boolean updateAV(int id,String AV);
    public boolean updateAW(int id,String AW);
    public boolean updateAX(int id,String AX);
    public boolean updateAY(int id,String AY);
    public boolean updateAZ(int id,String AZ);

    public boolean updateBA(int id,String BA);
    public boolean updateBB(int id,String BB);
    public boolean updateBC(int id,String BC);
    public boolean updateBD(int id,String BD);
    public boolean updateBE(int id,String BE);
    public boolean updateBF(int id,String BF);
    public boolean updateBG(int id,String BG);
    public boolean updateBH(int id,String BH);
    public boolean updateBI(int id,String BI);
    public boolean updateBJ(int id,String BJ);
    public boolean updateBK(int id,String BK);
    public boolean updateBL(int id,String BL);
    public boolean updateBM(int id,String BM);
    public boolean updateBN(int id,String BN);
    public boolean updateBO(int id,String BO);
    public boolean updateBP(int id,String BP);
    public boolean updateBQ(int id,String BQ);
    public boolean updateBR(int id,String BR);
    public boolean updateBS(int id,String BS);
    public boolean updateBT(int id,String BT);
    public boolean updateBU(int id,String BU);
    public boolean updateBV(int id,String BV);
    public boolean updateBW(int id,String BW);
    public boolean updateBX(int id,String BX);
    public boolean updateBYY(int id,String BYY);
    public boolean updateBZ(int id,String BZ);

    public boolean updateCA(int id,String CA);
    public boolean updateCB(int id,String CB);
    public boolean updateCC(int id,String CC);
    public boolean updateCD(int id,String CD);
    public boolean updateCE(int id,String CE);
    public boolean updateCF(int id,String CF);
    public boolean updateCG(int id,String CG);
    public boolean updateCH(int id,String CH);
    public boolean updateCI(int id,String CI);
    public boolean updateCJ(int id,String CJ);
    public boolean updateCK(int id,String CK);
    public boolean updateCL(int id,String CL);
    public boolean updateCM(int id,String CM);
    public boolean updateCN(int id,String CN);
    public boolean updateCO(int id,String CO);
    public boolean updateCP(int id,String CP);
    public boolean updateCQ(int id,String CQ);
    public boolean updateCR(int id,String CR);
    public boolean updateCS(int id,String CS);
    public boolean updateCT(int id,String CT);
    public boolean updateCU(int id,String CU);
    public boolean updateCV(int id,String CV);
    public boolean updateCW(int id,String CW);
    public boolean updateCX(int id,String CX);



    /*工作台获取人员信息*/
    public List<Copy1> cpInfo(String B);

    /*显示公司表信息*/
    public List<Copy1> getRenYuanInfo(String gognsi,String user);
}
