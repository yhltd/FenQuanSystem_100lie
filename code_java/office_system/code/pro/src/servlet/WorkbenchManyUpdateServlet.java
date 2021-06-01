package servlet;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonParser;
import dao.*;
import javaBean.Workbench;
import util.ColumUtil;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class WorkbenchManyUpdateServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        super.doPost(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        HttpSession session = req.getSession();
        String gognsi = (String) session.getAttribute("GongSi");
        String jsonChange = req.getParameter("jsonData");
        System.out.println("前端接收到的值是"+jsonChange);
        Gson gson = new Gson();
        JsonParser jsonParser = new JsonParser();
        ColumUtil columUtil = new ColumUtil();

        boolean flag  = false;

        String id;
        String column;
        String value;
        JsonArray jsonElements = jsonParser.parse(jsonChange).getAsJsonArray();
        System.out.println("jsonElements的值是"+jsonElements);
        ArrayList<JsonReader> jrList = new ArrayList<>();
        for (JsonElement je:jsonElements){
            JsonReader jr = gson.fromJson(je,JsonReader.class);

            id = jr.getId();
            int wkId = Integer.parseInt(id);
            column = jr.getColumn();

            String A=jr.getNewvalue();
            String B=jr.getNewvalue();
            String C=jr.getNewvalue();
            String D=jr.getNewvalue();
            String E=jr.getNewvalue();
            String F=jr.getNewvalue();
            String G=jr.getNewvalue();
            String H=jr.getNewvalue();
            String I=jr.getNewvalue();
            String J=jr.getNewvalue();
            String K=jr.getNewvalue();
            String L=jr.getNewvalue();
            String M=jr.getNewvalue();
            String N=jr.getNewvalue();
            String O=jr.getNewvalue();
            String P=jr.getNewvalue();
            String Q=jr.getNewvalue();
            String R=jr.getNewvalue();
            String S=jr.getNewvalue();
            String T=jr.getNewvalue();
            String U=jr.getNewvalue();
            String V=jr.getNewvalue();
            String W=jr.getNewvalue();
            String X=jr.getNewvalue();
            String Y=jr.getNewvalue();
            String Z=jr.getNewvalue();

            String AA=jr.getNewvalue();
            String AB=jr.getNewvalue();
            String AC=jr.getNewvalue();
            String AD=jr.getNewvalue();
            String AE=jr.getNewvalue();
            String AF=jr.getNewvalue();
            String AG=jr.getNewvalue();
            String AH=jr.getNewvalue();
            String AI=jr.getNewvalue();
            String AJ=jr.getNewvalue();
            String AK=jr.getNewvalue();
            String AL=jr.getNewvalue();
            String AM=jr.getNewvalue();
            String AN=jr.getNewvalue();
            String AO=jr.getNewvalue();
            String AP=jr.getNewvalue();
            String AQ=jr.getNewvalue();
            String AR=jr.getNewvalue();
            String ASS=jr.getNewvalue();
            String AT=jr.getNewvalue();
            String AU=jr.getNewvalue();
            String AV=jr.getNewvalue();
            String AW=jr.getNewvalue();
            String AX=jr.getNewvalue();
            String AY=jr.getNewvalue();
            String AZ=jr.getNewvalue();

            String BA=jr.getNewvalue();
            String BB=jr.getNewvalue();
            String BC=jr.getNewvalue();
            String BD=jr.getNewvalue();
            String BE=jr.getNewvalue();
            String BF=jr.getNewvalue();
            String BG=jr.getNewvalue();
            String BH=jr.getNewvalue();
            String BI=jr.getNewvalue();
            String BJ=jr.getNewvalue();
            String BK=jr.getNewvalue();
            String BL=jr.getNewvalue();
            String BM=jr.getNewvalue();
            String BN=jr.getNewvalue();
            String BO=jr.getNewvalue();
            String BP=jr.getNewvalue();
            String BQ=jr.getNewvalue();
            String BR=jr.getNewvalue();
            String BS=jr.getNewvalue();
            String BT=jr.getNewvalue();
            String BU=jr.getNewvalue();
            String BV=jr.getNewvalue();
            String BW=jr.getNewvalue();
            String BX=jr.getNewvalue();
            String BYY=jr.getNewvalue();
            String BZ=jr.getNewvalue();

            String CA=jr.getNewvalue();
            String CB=jr.getNewvalue();
            String CC=jr.getNewvalue();
            String CD=jr.getNewvalue();
            String CE=jr.getNewvalue();
            String CF=jr.getNewvalue();
            String CG=jr.getNewvalue();
            String CH=jr.getNewvalue();
            String CI=jr.getNewvalue();
            String CJ=jr.getNewvalue();
            String CK=jr.getNewvalue();
            String CL=jr.getNewvalue();
            String CM=jr.getNewvalue();
            String CN=jr.getNewvalue();
            String CO=jr.getNewvalue();
            String CP=jr.getNewvalue();
            String CQ=jr.getNewvalue();
            String CR=jr.getNewvalue();
            String CS=jr.getNewvalue();
            String CT=jr.getNewvalue();
            String CU=jr.getNewvalue();
            String CV=jr.getNewvalue();
            RenYuanDao renYuanDao = new RenYuanDaoImp();
            WorkbenchDao wkd=new WorkbenchDaoImp();
            if(column.equals("A")){
                wkd.updateA(wkId,A);
                boolean renyuanDelete = renYuanDao.renyuanDelete(gognsi,column);
                System.out.println(renyuanDelete);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("B")){
                wkd.updateB(wkId,B);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("C")){
                wkd.updateC(wkId,C);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("D")){
                wkd.updateD(wkId,D);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("E")){
                wkd.updateE(wkId,E);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("F")){
                wkd.updateF(wkId,F);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("G")){
                wkd.updateG(wkId,G);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("H")){
                wkd.updateH(wkId,H);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("I")){
                wkd.updateI(wkId,I);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("J")){
                wkd.updateJ(wkId,J);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("K")){
                wkd.updateK(wkId,K);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("L")){
                wkd.updateL(wkId,L);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("M")){
                wkd.updateM(wkId,M);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("N")){
                wkd.updateN(wkId,N);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("O")){
                wkd.updateO(wkId,O);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("P")){
                wkd.updateP(wkId,P);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("Q")){
                wkd.updateQ(wkId,Q);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("R")){
                wkd.updateR(wkId,R);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("S")){
                wkd.updateS(wkId,S);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("T")){
                wkd.updateT(wkId,T);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("U")){
                wkd.updateU(wkId,U);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("V")){
                wkd.updateV(wkId,V);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("W")){
                wkd.updateW(wkId,W);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("X")){
                wkd.updateX(wkId,X);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("Y")){
                wkd.updateY(wkId,Y);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("Z")){
                wkd.updateZ(wkId,Z);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }

            if(column.equals("AA")){
                wkd.updateAA(wkId,AA);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("AB")){
                wkd.updateAB(wkId,AB);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("AC")){
                wkd.updateAC(wkId,AC);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("AD")){
                wkd.updateAD(wkId,AD);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("AE")){
                wkd.updateAE(wkId,AE);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("AF")){
                wkd.updateAF(wkId,AF);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("AG")){
                wkd.updateAG(wkId,AG);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("AH")){
                wkd.updateAH(wkId,AH);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("AI")){
                wkd.updateAI(wkId,AI);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("AJ")){
                wkd.updateAJ(wkId,AJ);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("AK")){
                wkd.updateAK(wkId,AK);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("AL")){
                wkd.updateAL(wkId,AL);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("AM")){
                wkd.updateAM(wkId,AM);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("AN")){
                wkd.updateAN(wkId,AN);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("AO")){
                wkd.updateAO(wkId,AO);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("AP")){
                wkd.updateAP(wkId,AP);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("AQ")){
                wkd.updateAQ(wkId,AQ);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("AR")){
                wkd.updateAR(wkId,AR);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("ASS")){
                wkd.updateASS(wkId,ASS);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("AT")){
                wkd.updateAT(wkId,AT);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("AU")){
                wkd.updateAU(wkId,AU);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("AV")){
                wkd.updateAV(wkId,AV);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("AW")){
                wkd.updateAW(wkId,AW);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("AX")){
                wkd.updateAX(wkId,AX);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("AY")){
                wkd.updateAY(wkId,AY);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("AZ")){
                wkd.updateAZ(wkId,AZ);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }

            if(column.equals("BA")){
                wkd.updateBA(wkId,BA);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("BB")){
                wkd.updateBB(wkId,BB);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("BC")){
                wkd.updateBC(wkId,BC);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("BD")){
                wkd.updateBD(wkId,BD);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("BE")){
                wkd.updateBE(wkId,BE);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("BF")){
                wkd.updateBF(wkId,BF);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("BG")){
                wkd.updateBG(wkId,BG);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("BH")){
                wkd.updateBH(wkId,BH);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("BI")){
                wkd.updateBI(wkId,BI);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("BJ")){
                wkd.updateBJ(wkId,BJ);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("BK")){
                wkd.updateBK(wkId,BK);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("BL")){
                wkd.updateBL(wkId,BL);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("BM")){
                wkd.updateBM(wkId,BM);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("BN")){
                wkd.updateBN(wkId,BN);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("BO")){
                wkd.updateBO(wkId,BO);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("BP")){
                wkd.updateBP(wkId,BP);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("BQ")){
                wkd.updateBQ(wkId,BQ);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("BR")){
                wkd.updateBR(wkId,BR);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("BS")){
                wkd.updateBS(wkId,BS);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("BT")){
                wkd.updateBT(wkId,BT);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("BU")){
                wkd.updateBU(wkId,BU);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("BV")){
                wkd.updateBV(wkId,BV);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("BW")){
                wkd.updateBW(wkId,BW);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("BX")){
                wkd.updateBX(wkId,BX);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("BYY")){
                wkd.updateBYY(wkId,BYY);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("BZ")){
                wkd.updateBZ(wkId,BZ);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }

            if(column.equals("CA")){
                wkd.updateCA(wkId,CA);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("CB")){
                wkd.updateCB(wkId,CB);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("CC")){
                wkd.updateCC(wkId,CC);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("CD")){
                wkd.updateCD(wkId,CD);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("CE")){
                wkd.updateCE(wkId,CE);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("CF")){
                wkd.updateCF(wkId,CF);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("CG")){
                wkd.updateCG(wkId,CG);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("CH")){
                wkd.updateCH(wkId,CH);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("CI")){
                wkd.updateCI(wkId,CI);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("CJ")){
                wkd.updateCJ(wkId,CJ);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("CK")){
                wkd.updateCK(wkId,CK);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("CL")){
                wkd.updateCL(wkId,CL);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("CM")){
                wkd.updateCM(wkId,CM);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("CN")){
                wkd.updateCN(wkId,CN);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("CO")){
                wkd.updateCO(wkId,CO);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("CP")){
                wkd.updateCP(wkId,CP);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("CQ")){
                wkd.updateCQ(wkId,CQ);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("CR")){
                wkd.updateCR(wkId,CR);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("CS")){
                wkd.updateCS(wkId,CS);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("CT")){
                wkd.updateCT(wkId,CT);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("CU")){
                wkd.updateCU(wkId,CU);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if(column.equals("CV")){
                wkd.updateCV(wkId,CV);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }

        }



    }
}
