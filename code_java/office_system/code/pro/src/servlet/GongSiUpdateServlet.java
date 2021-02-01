package servlet;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonParser;
import dao.GongSiDao;
import dao.GongSiDaoImp;
import dao.JsonReader;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;

public class GongSiUpdateServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doPost(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String jsonData = req.getParameter("jsonData");
        Gson gson = new Gson();
        JsonParser jsonParser = new JsonParser();
        //获取JsonArray对象
        JsonArray jsonElements = jsonParser.parse(jsonData).getAsJsonArray();
        ArrayList<JsonReader> jrlist = new ArrayList<>();
        for (JsonElement je : jsonElements) {
            //解析
            JsonReader jr = gson.fromJson(je, JsonReader.class);
            jrlist.add(jr);
        }

        String id=jrlist.get(jrlist.size()-1).getId();
        int gongSiId = Integer.parseInt(id);
        String column=jrlist.get(jrlist.size()-1).getColumn();
        String C=jrlist.get(jrlist.size()-1).getNewvalue();
        String D=jrlist.get(jrlist.size()-1).getNewvalue();
        String E=jrlist.get(jrlist.size()-1).getNewvalue();
        String F=jrlist.get(jrlist.size()-1).getNewvalue();
        String G=jrlist.get(jrlist.size()-1).getNewvalue();
        String H=jrlist.get(jrlist.size()-1).getNewvalue();
        String I=jrlist.get(jrlist.size()-1).getNewvalue();
        String J=jrlist.get(jrlist.size()-1).getNewvalue();
        String K=jrlist.get(jrlist.size()-1).getNewvalue();
        String L=jrlist.get(jrlist.size()-1).getNewvalue();
        String M=jrlist.get(jrlist.size()-1).getNewvalue();
        String N=jrlist.get(jrlist.size()-1).getNewvalue();
        String O=jrlist.get(jrlist.size()-1).getNewvalue();
        String P=jrlist.get(jrlist.size()-1).getNewvalue();
        String Q=jrlist.get(jrlist.size()-1).getNewvalue();
        String R=jrlist.get(jrlist.size()-1).getNewvalue();
        String S=jrlist.get(jrlist.size()-1).getNewvalue();
        String T=jrlist.get(jrlist.size()-1).getNewvalue();
        String U=jrlist.get(jrlist.size()-1).getNewvalue();
        String V=jrlist.get(jrlist.size()-1).getNewvalue();
        String W=jrlist.get(jrlist.size()-1).getNewvalue();
        String X=jrlist.get(jrlist.size()-1).getNewvalue();
        String Y=jrlist.get(jrlist.size()-1).getNewvalue();
        String Z=jrlist.get(jrlist.size()-1).getNewvalue();

        String AA=jrlist.get(jrlist.size()-1).getNewvalue();
        String AB=jrlist.get(jrlist.size()-1).getNewvalue();
        String AC=jrlist.get(jrlist.size()-1).getNewvalue();
        String AD=jrlist.get(jrlist.size()-1).getNewvalue();
        String AE=jrlist.get(jrlist.size()-1).getNewvalue();
        String AF=jrlist.get(jrlist.size()-1).getNewvalue();
        String AG=jrlist.get(jrlist.size()-1).getNewvalue();
        String AH=jrlist.get(jrlist.size()-1).getNewvalue();
        String AI=jrlist.get(jrlist.size()-1).getNewvalue();
        String AJ=jrlist.get(jrlist.size()-1).getNewvalue();
        String AK=jrlist.get(jrlist.size()-1).getNewvalue();
        String AL=jrlist.get(jrlist.size()-1).getNewvalue();
        String AM=jrlist.get(jrlist.size()-1).getNewvalue();
        String AN=jrlist.get(jrlist.size()-1).getNewvalue();
        String AO=jrlist.get(jrlist.size()-1).getNewvalue();
        String AP=jrlist.get(jrlist.size()-1).getNewvalue();
        String AQ=jrlist.get(jrlist.size()-1).getNewvalue();
        String AR=jrlist.get(jrlist.size()-1).getNewvalue();
        String ASS=jrlist.get(jrlist.size()-1).getNewvalue();
        String AT=jrlist.get(jrlist.size()-1).getNewvalue();
        String AU=jrlist.get(jrlist.size()-1).getNewvalue();
        String AV=jrlist.get(jrlist.size()-1).getNewvalue();
        String AW=jrlist.get(jrlist.size()-1).getNewvalue();
        String AX=jrlist.get(jrlist.size()-1).getNewvalue();
        String AY=jrlist.get(jrlist.size()-1).getNewvalue();
        String AZ=jrlist.get(jrlist.size()-1).getNewvalue();

        String BA=jrlist.get(jrlist.size()-1).getNewvalue();
        String BB=jrlist.get(jrlist.size()-1).getNewvalue();
        String BC=jrlist.get(jrlist.size()-1).getNewvalue();
        String BD=jrlist.get(jrlist.size()-1).getNewvalue();
        String BE=jrlist.get(jrlist.size()-1).getNewvalue();
        String BF=jrlist.get(jrlist.size()-1).getNewvalue();
        String BG=jrlist.get(jrlist.size()-1).getNewvalue();
        String BH=jrlist.get(jrlist.size()-1).getNewvalue();
        String BI=jrlist.get(jrlist.size()-1).getNewvalue();
        String BJ=jrlist.get(jrlist.size()-1).getNewvalue();
        String BK=jrlist.get(jrlist.size()-1).getNewvalue();
        String BL=jrlist.get(jrlist.size()-1).getNewvalue();
        String BM=jrlist.get(jrlist.size()-1).getNewvalue();
        String BN=jrlist.get(jrlist.size()-1).getNewvalue();
        String BO=jrlist.get(jrlist.size()-1).getNewvalue();
        String BP=jrlist.get(jrlist.size()-1).getNewvalue();
        String BQ=jrlist.get(jrlist.size()-1).getNewvalue();
        String BR=jrlist.get(jrlist.size()-1).getNewvalue();
        String BS=jrlist.get(jrlist.size()-1).getNewvalue();
        String BT=jrlist.get(jrlist.size()-1).getNewvalue();
        String BU=jrlist.get(jrlist.size()-1).getNewvalue();
        String BV=jrlist.get(jrlist.size()-1).getNewvalue();
        String BW=jrlist.get(jrlist.size()-1).getNewvalue();
        String BX=jrlist.get(jrlist.size()-1).getNewvalue();
        String BYY=jrlist.get(jrlist.size()-1).getNewvalue();
        String BZ=jrlist.get(jrlist.size()-1).getNewvalue();

        String CA=jrlist.get(jrlist.size()-1).getNewvalue();
        String CB=jrlist.get(jrlist.size()-1).getNewvalue();
        String CC=jrlist.get(jrlist.size()-1).getNewvalue();
        String CD=jrlist.get(jrlist.size()-1).getNewvalue();
        String CE=jrlist.get(jrlist.size()-1).getNewvalue();
        String CF=jrlist.get(jrlist.size()-1).getNewvalue();
        String CG=jrlist.get(jrlist.size()-1).getNewvalue();
        String CH=jrlist.get(jrlist.size()-1).getNewvalue();
        String CI=jrlist.get(jrlist.size()-1).getNewvalue();
        String CJ=jrlist.get(jrlist.size()-1).getNewvalue();
        String CK=jrlist.get(jrlist.size()-1).getNewvalue();
        String CL=jrlist.get(jrlist.size()-1).getNewvalue();
        String CM=jrlist.get(jrlist.size()-1).getNewvalue();
        String CN=jrlist.get(jrlist.size()-1).getNewvalue();
        String CO=jrlist.get(jrlist.size()-1).getNewvalue();
        String CP=jrlist.get(jrlist.size()-1).getNewvalue();
        String CQ=jrlist.get(jrlist.size()-1).getNewvalue();
        String CR=jrlist.get(jrlist.size()-1).getNewvalue();
        String CS=jrlist.get(jrlist.size()-1).getNewvalue();
        String CT=jrlist.get(jrlist.size()-1).getNewvalue();
        String CU=jrlist.get(jrlist.size()-1).getNewvalue();
        String CV=jrlist.get(jrlist.size()-1).getNewvalue();
        String CW=jrlist.get(jrlist.size()-1).getNewvalue();
        String CX=jrlist.get(jrlist.size()-1).getNewvalue();

        GongSiDao gsd = new GongSiDaoImp();
        if(column.equals("C")){
            gsd.updateC(gongSiId,C);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("D")){
            gsd.updateD(gongSiId,D);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("E")){
            gsd.updateE(gongSiId,E);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("F")){
            gsd.updateF(gongSiId,F);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("G")){
            gsd.updateG(gongSiId,G);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("H")){
            gsd.updateH(gongSiId,H);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("I")){
            gsd.updateI(gongSiId,I);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("J")){
            gsd.updateJ(gongSiId,J);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("K")){
            gsd.updateK(gongSiId,K);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("L")){
            gsd.updateL(gongSiId,L);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("M")){
            gsd.updateM(gongSiId,M);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("N")){
            gsd.updateN(gongSiId,N);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("O")){
            gsd.updateO(gongSiId,O);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("P")){
            gsd.updateP(gongSiId,P);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("Q")){
            gsd.updateQ(gongSiId,Q);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("R")){
            gsd.updateR(gongSiId,R);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("S")){
            gsd.updateS(gongSiId,S);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("T")){
            gsd.updateT(gongSiId,T);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("U")){
            gsd.updateU(gongSiId,U);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("V")){
            gsd.updateV(gongSiId,V);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("W")){
            gsd.updateW(gongSiId,W);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("X")){
            gsd.updateX(gongSiId,X);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("Y")){
            gsd.updateY(gongSiId,Y);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("Z")){
            gsd.updateZ(gongSiId,Z);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }

        if(column.equals("AA")){
            gsd.updateAA(gongSiId,AA);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("AB")){
            gsd.updateAB(gongSiId,AB);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("AC")){
            gsd.updateAC(gongSiId,AC);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("AD")){
            gsd.updateAD(gongSiId,AD);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("AE")){
            gsd.updateAE(gongSiId,AE);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("AF")){
            gsd.updateAF(gongSiId,AF);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("AG")){
            gsd.updateAG(gongSiId,AG);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("AH")){
            gsd.updateAH(gongSiId,AH);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("AI")){
            gsd.updateAI(gongSiId,AI);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("AJ")){
            gsd.updateAJ(gongSiId,AJ);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("AK")){
            gsd.updateAK(gongSiId,AK);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("AL")){
            gsd.updateAL(gongSiId,AL);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("AM")){
            gsd.updateAM(gongSiId,AM);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("AN")){
            gsd.updateAN(gongSiId,AN);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("AO")){
            gsd.updateAO(gongSiId,AO);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("AP")){
            gsd.updateAP(gongSiId,AP);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("AQ")){
            gsd.updateAQ(gongSiId,AQ);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("AR")){
            gsd.updateAR(gongSiId,AR);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("ASS")){
            gsd.updateASS(gongSiId,ASS);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("AT")){
            gsd.updateAT(gongSiId,AT);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("AU")){
            gsd.updateAU(gongSiId,AU);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("AV")){
            gsd.updateAV(gongSiId,AV);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("AW")){
            gsd.updateAW(gongSiId,AW);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("AX")){
            gsd.updateAX(gongSiId,AX);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("AY")){
            gsd.updateAY(gongSiId,AY);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("AZ")){
            gsd.updateAZ(gongSiId,AZ);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }

        if(column.equals("BA")){
            gsd.updateBA(gongSiId,BA);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("BB")){
            gsd.updateBB(gongSiId,BB);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("BC")){
            gsd.updateBC(gongSiId,BC);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("BD")){
            gsd.updateBD(gongSiId,BD);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("BE")){
            gsd.updateBE(gongSiId,BE);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("BF")){
            gsd.updateBF(gongSiId,BF);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("BG")){
            gsd.updateBG(gongSiId,BG);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("BH")){
            gsd.updateBH(gongSiId,BH);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("BI")){
            gsd.updateBI(gongSiId,BI);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("BJ")){
            gsd.updateBJ(gongSiId,BJ);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("BK")){
            gsd.updateBK(gongSiId,BK);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("BL")){
            gsd.updateBL(gongSiId,BL);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("BM")){
            gsd.updateBM(gongSiId,BM);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("BN")){
            gsd.updateBN(gongSiId,BN);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("BO")){
            gsd.updateBO(gongSiId,BO);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("BP")){
            gsd.updateBP(gongSiId,BP);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("BQ")){
            gsd.updateBQ(gongSiId,BQ);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("BR")){
            gsd.updateBR(gongSiId,BR);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("BS")){
            gsd.updateBS(gongSiId,BS);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("BT")){
            gsd.updateBT(gongSiId,BT);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("BU")){
            gsd.updateBU(gongSiId,BU);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("BV")){
            gsd.updateBV(gongSiId,BV);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("BW")){
            gsd.updateBW(gongSiId,BW);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("BX")){
            gsd.updateBX(gongSiId,BX);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("BYY")){
            gsd.updateBYY(gongSiId,BYY);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("BZ")){
            gsd.updateBZ(gongSiId,BZ);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }

        if(column.equals("CA")){
            gsd.updateCA(gongSiId,CA);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("CB")){
            gsd.updateCB(gongSiId,CB);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("CC")){
            gsd.updateCC(gongSiId,CC);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("CD")){
            gsd.updateCD(gongSiId,CD);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("CE")){
            gsd.updateCE(gongSiId,CE);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("CF")){
            gsd.updateCF(gongSiId,CF);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("CG")){
            gsd.updateCG(gongSiId,CG);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("CH")){
            gsd.updateCH(gongSiId,CH);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("CI")){
            gsd.updateCI(gongSiId,CI);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("CJ")){
            gsd.updateCJ(gongSiId,CJ);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("CK")){
            gsd.updateCK(gongSiId,CK);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("CL")){
            gsd.updateCL(gongSiId,CL);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("CM")){
            gsd.updateCM(gongSiId,CM);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("CN")){
            gsd.updateCN(gongSiId,CN);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("CO")){
            gsd.updateCO(gongSiId,CO);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("CP")){
            gsd.updateCP(gongSiId,CP);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("CQ")){
            gsd.updateCQ(gongSiId,CQ);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("CR")){
            gsd.updateCR(gongSiId,CR);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("CS")){
            gsd.updateCS(gongSiId,CS);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("CT")){
            gsd.updateCT(gongSiId,CT);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("CU")){
            gsd.updateCU(gongSiId,CU);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("CV")){
            gsd.updateCV(gongSiId,CV);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("CW")){
            gsd.updateCW(gongSiId,CW);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
        if(column.equals("CX")){
            gsd.updateCX(gongSiId,CX);
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }

    }


}
