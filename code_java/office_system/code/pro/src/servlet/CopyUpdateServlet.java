package servlet;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonParser;
import dao.*;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.ArrayList;

public class CopyUpdateServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doPost(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String jsonData = req.getParameter("jsonData");
        System.out.println("集合jsonData:"+jsonData);
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
        System.out.println("集合jrlist:"+jrlist);
        String id=jrlist.get(jrlist.size()-1).getId();
        int ryId = Integer.parseInt(id);
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

        Copy1Dao cd = new Copy1DaoImp();
        if(column.equals("C")){
            cd.updateC(ryId,C);
            //req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("D")){
            cd.updateD(ryId,D);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("E")){
            cd.updateE(ryId,E);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("F")){
            cd.updateF(ryId,F);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("G")){
            cd.updateG(ryId,G);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("H")){
            cd.updateH(ryId,H);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("I")){
            cd.updateI(ryId,I);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("J")){
            cd.updateJ(ryId,J);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("K")){
            cd.updateK(ryId,K);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("L")){
            cd.updateL(ryId,L);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("M")){
            cd.updateM(ryId,M);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("N")){
            cd.updateN(ryId,N);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("O")){
            cd.updateO(ryId,O);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("P")){
            cd.updateP(ryId,P);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("Q")){
            cd.updateQ(ryId,Q);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("R")){
            cd.updateR(ryId,R);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("S")){
            cd.updateS(ryId,S);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("T")){
            cd.updateT(ryId,T);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("U")){
            cd.updateU(ryId,U);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("V")){
            cd.updateV(ryId,V);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("W")){
            cd.updateW(ryId,W);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("X")){
            cd.updateX(ryId,X);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("Y")){
            cd.updateY(ryId,Y);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("Z")){
            cd.updateZ(ryId,Z);
            req.getRequestDispatcher("copy").forward(req, resp);
        }

        if(column.equals("AA")){
            cd.updateAA(ryId,AA);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("AB")){
            cd.updateAB(ryId,AB);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("AC")){
            cd.updateAC(ryId,AC);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("AD")){
            cd.updateAD(ryId,AD);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("AE")){
            cd.updateAE(ryId,AE);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("AF")){
            cd.updateAF(ryId,AF);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("AG")){
            cd.updateAG(ryId,AG);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("AH")){
            cd.updateAH(ryId,AH);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("AI")){
            cd.updateAI(ryId,AI);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("AJ")){
            cd.updateAJ(ryId,AJ);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("AK")){
            cd.updateAK(ryId,AK);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("AL")){
            cd.updateAL(ryId,AL);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("AM")){
            cd.updateAM(ryId,AM);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("AN")){
            cd.updateAN(ryId,AN);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("AO")){
            cd.updateAO(ryId,AO);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("AP")){
            cd.updateAP(ryId,AP);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("AQ")){
            cd.updateAQ(ryId,AQ);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("AR")){
            cd.updateAR(ryId,AR);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("ASS")){
            cd.updateASS(ryId,ASS);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("AT")){
            cd.updateAT(ryId,AT);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("AU")){
            cd.updateAU(ryId,AU);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("AV")){
            cd.updateAV(ryId,AV);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("AW")){
            cd.updateAW(ryId,AW);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("AX")){
            cd.updateAX(ryId,AX);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("AY")){
            cd.updateAY(ryId,AY);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("AZ")){
            cd.updateAZ(ryId,AZ);
            req.getRequestDispatcher("copy").forward(req, resp);
        }

        if(column.equals("BA")){
            cd.updateBA(ryId,BA);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("BB")){
            cd.updateBB(ryId,BB);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("BC")){
            cd.updateBC(ryId,BC);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("BD")){
            cd.updateBD(ryId,BD);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("BE")){
            cd.updateBE(ryId,BE);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("BF")){
            cd.updateBF(ryId,BF);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("BG")){
            cd.updateBG(ryId,BG);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("BH")){
            cd.updateBH(ryId,BH);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("BI")){
            cd.updateBI(ryId,BI);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("BJ")){
            cd.updateBJ(ryId,BJ);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("BK")){
            cd.updateBK(ryId,BK);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("BL")){
            cd.updateBL(ryId,BL);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("BM")){
            cd.updateBM(ryId,BM);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("BN")){
            cd.updateBN(ryId,BN);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("BO")){
            cd.updateBO(ryId,BO);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("BP")){
            cd.updateBP(ryId,BP);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("BQ")){
            cd.updateBQ(ryId,BQ);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("BR")){
            cd.updateBR(ryId,BR);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("BS")){
            cd.updateBS(ryId,BS);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("BT")){
            cd.updateBT(ryId,BT);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("BU")){
            cd.updateBU(ryId,BU);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("BV")){
            cd.updateBV(ryId,BV);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("BW")){
            cd.updateBW(ryId,BW);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("BX")){
            cd.updateBX(ryId,BX);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("BYY")){
            cd.updateBYY(ryId,BYY);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("BZ")){
            cd.updateBZ(ryId,BZ);
            req.getRequestDispatcher("copy").forward(req, resp);
        }

        if(column.equals("CA")){
            cd.updateCA(ryId,CA);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("CB")){
            cd.updateCB(ryId,CB);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("CC")){
            cd.updateCC(ryId,CC);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("CD")){
            cd.updateCD(ryId,CD);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("CE")){
            cd.updateCE(ryId,CE);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("CF")){
            cd.updateCF(ryId,CF);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("CG")){
            cd.updateCG(ryId,CG);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("CH")){
            cd.updateCH(ryId,CH);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("CI")){
            cd.updateCI(ryId,CI);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("CJ")){
            cd.updateCJ(ryId,CJ);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("CK")){
            cd.updateCK(ryId,CK);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("CL")){
            cd.updateCL(ryId,CL);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("CM")){
            cd.updateCM(ryId,CM);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("CN")){
            cd.updateCN(ryId,CN);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("CO")){
            cd.updateCO(ryId,CO);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("CP")){
            cd.updateCP(ryId,CP);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("CQ")){
            cd.updateCQ(ryId,CQ);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("CR")){
            cd.updateCR(ryId,CR);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("CS")){
            cd.updateCS(ryId,CS);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("CT")){
            cd.updateCT(ryId,CT);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("CU")){
            cd.updateCU(ryId,CU);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("CV")){
            cd.updateCV(ryId,CV);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("CW")){
            cd.updateCW(ryId,CW);
            req.getRequestDispatcher("copy").forward(req, resp);
        }
        if(column.equals("CX")){
            cd.updateCX(ryId,CX);
            req.getRequestDispatcher("copy").forward(req, resp);
        }






//        String id = req.getParameter("id");
//        int copyId = Integer.parseInt(id);
//
//        String quanXian = req.getParameter("quanXian");
//        String B = req.getParameter("B");
//        String C = req.getParameter("C");
//        String D = req.getParameter("D");
//        String E = req.getParameter("E");
//        String F = req.getParameter("F");
//        String G = req.getParameter("G");
//        String H = req.getParameter("H");
//        String I = req.getParameter("I");
//        String J = req.getParameter("J");
//        String K = req.getParameter("K");
//        String L = req.getParameter("L");
//        String M = req.getParameter("M");
//        String N = req.getParameter("N");
//        String O = req.getParameter("O");
//        String P = req.getParameter("P");
//        String Q = req.getParameter("Q");
//        String R = req.getParameter("R");
//        String S = req.getParameter("S");
//        String T = req.getParameter("T");
//        String U = req.getParameter("U");
//        String V = req.getParameter("V");
//        String W = req.getParameter("W");
//        String X = req.getParameter("X");
//        String Y = req.getParameter("Y");
//        String Z = req.getParameter("Z");
//
//        String AA = req.getParameter("AA");
//        String AB = req.getParameter("AB");
//        String AC = req.getParameter("AC");
//        String AD = req.getParameter("AD");
//        String AE = req.getParameter("AE");
//        String AF = req.getParameter("AF");
//        String AG = req.getParameter("AG");
//        String AH = req.getParameter("AH");
//        String AI = req.getParameter("AI");
//        String AJ = req.getParameter("AJ");
//        String AK = req.getParameter("AK");
//        String AL = req.getParameter("AL");
//        String AM = req.getParameter("AM");
//        String AN = req.getParameter("AN");
//        String AO = req.getParameter("AO");
//        String AP = req.getParameter("AP");
//        String AQ = req.getParameter("AQ");
//        String AR = req.getParameter("AR");
//        String ASS = req.getParameter("ASS");
//        String AT = req.getParameter("AT");
//        String AU = req.getParameter("AU");
//        String AV = req.getParameter("AV");
//        String AW = req.getParameter("AW");
//        String AX = req.getParameter("AX");
//        String AY = req.getParameter("AY");
//        String AZ = req.getParameter("AZ");
//
//        String BA = req.getParameter("BA");
//        String BB = req.getParameter("BB");
//        String BC = req.getParameter("BC");
//        String BD = req.getParameter("BD");
//        String BE = req.getParameter("BE");
//        String BF = req.getParameter("BF");
//        String BG = req.getParameter("BG");
//        String BH = req.getParameter("BH");
//        String BI = req.getParameter("BI");
//        String BJ = req.getParameter("BJ");
//        String BK = req.getParameter("BK");
//        String BL = req.getParameter("BL");
//        String BM = req.getParameter("BM");
//        String BN = req.getParameter("BN");
//        String BO = req.getParameter("BO");
//        String BP = req.getParameter("BP");
//        String BQ = req.getParameter("BQ");
//        String BR = req.getParameter("BR");
//        String BS = req.getParameter("BS");
//        String BT = req.getParameter("BT");
//        String BU = req.getParameter("BU");
//        String BV = req.getParameter("BV");
//        String BW = req.getParameter("BW");
//        String BX = req.getParameter("BX");
//        String BYY = req.getParameter("BYY");
//        String BZ = req.getParameter("BZ");
//
//        String CA = req.getParameter("CA");
//        String CB = req.getParameter("CB");
//        String CC = req.getParameter("CC");
//        String CD = req.getParameter("CD");
//        String CE = req.getParameter("CE");
//        String CF = req.getParameter("CF");
//        String CG = req.getParameter("CG");
//        String CH = req.getParameter("CH");
//        String CI = req.getParameter("CI");
//        String CJ = req.getParameter("CJ");
//        String CK = req.getParameter("CK");
//        String CL = req.getParameter("CL");
//        String CM = req.getParameter("CM");
//        String CN = req.getParameter("CN");
//        String CO = req.getParameter("CO");
//        String CP = req.getParameter("CP");
//        String CQ = req.getParameter("CQ");
//        String CR = req.getParameter("CR");
//        String CS = req.getParameter("CS");
//        String CT = req.getParameter("CT");
//        String CU = req.getParameter("CU");
//        String CV = req.getParameter("CV");
//        String CW = req.getParameter("CW");
//        String CX = req.getParameter("CX");
//
//        Copy1Dao cd = new Copy1DaoImp();
//
//        if (cd.update(copyId,quanXian,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,
//                AA,AB,AC,AD,AE,AF,AG,AH,AI,AJ,AK,AL,AM,AN,AO,AP,AQ,AR,ASS,AT,AU,AV,AW,AX,AY,AZ,
//                BA,BB,BC,BD,BE,BF,BG,BH,BI,BJ,BK,BL,BM,BN,BO,BP,BQ,BR,BS,BT,BU,BV,BW,BX,BYY,BZ,
//                CA,CB,CC,CD,CE,CF,CG,CH,CI,CJ,CK,CL,CM,CN,CO,CP,CQ,CR,CS,CT,CU,CV,CW,CX)){
//            req.getRequestDispatcher("copy").forward(req, resp);
//        }
    }
}
