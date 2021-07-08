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
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

public class WorkbenchUpdateServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        super.doPost(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String jsonData = req.getParameter("jsonData");
        System.out.println(jsonData);
        Gson gson = new Gson();
        JsonParser jsonParser = new JsonParser();
        //获取JsonArray对象
        JsonArray jsonElements = jsonParser.parse(jsonData).getAsJsonArray();
        ArrayList<JsonReader> jrlist = new ArrayList<>();

        HttpSession session = req.getSession();
        String userName =(String) session.getAttribute("userName");
        String GongSi =(String) session.getAttribute("GongSi");
        for (JsonElement je : jsonElements) {
            //解析
            JsonReader jr = gson.fromJson(je, JsonReader.class);
            jrlist.add(jr);
        }
        String id=jrlist.get(jrlist.size()-1).getId();
        int wkId = Integer.parseInt(id);
        String column=jrlist.get(jrlist.size()-1).getColumn();
        String A=jrlist.get(jrlist.size()-1).getNewvalue();
        String B=jrlist.get(jrlist.size()-1).getNewvalue();
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


        RenYuanDao renYuanDao = new RenYuanDaoImp();
        WorkbenchDao wkd=new WorkbenchDaoImp();
        String power = renYuanDao.getPower(GongSi,userName);
        String result = renYuanDao.selectRankPower(column,power,GongSi);
        System.out.println(result);
        if (result.equals("√")) {

            if (column.equals("A")) {
                wkd.updateA(wkId, A);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("B")) {
                wkd.updateB(wkId, B);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("C")) {
                wkd.updateC(wkId, C);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("D")) {
                wkd.updateD(wkId, D);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("E")) {
                wkd.updateE(wkId, E);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("F")) {
                System.out.println("F123");
                wkd.updateF(wkId, F);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("G")) {
                wkd.updateG(wkId, G);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("H")) {
                wkd.updateH(wkId, H);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("I")) {
                wkd.updateI(wkId, I);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("J")) {
                wkd.updateJ(wkId, J);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("K")) {
                wkd.updateK(wkId, K);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("L")) {
                wkd.updateL(wkId, L);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("M")) {
                wkd.updateM(wkId, M);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("N")) {
                wkd.updateN(wkId, N);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("O")) {
                wkd.updateO(wkId, O);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("P")) {
                wkd.updateP(wkId, P);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("Q")) {
                wkd.updateQ(wkId, Q);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("R")) {
                wkd.updateR(wkId, R);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("S")) {
                wkd.updateS(wkId, S);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("T")) {
                wkd.updateT(wkId, T);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("U")) {
                wkd.updateU(wkId, U);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("V")) {
                wkd.updateV(wkId, V);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("W")) {
                wkd.updateW(wkId, W);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("X")) {
                wkd.updateX(wkId, X);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("Y")) {
                wkd.updateY(wkId, Y);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("Z")) {
                wkd.updateZ(wkId, Z);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }

            if (column.equals("AA")) {
                wkd.updateAA(wkId, AA);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("AB")) {
                wkd.updateAB(wkId, AB);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("AC")) {
                wkd.updateAC(wkId, AC);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("AD")) {
                wkd.updateAD(wkId, AD);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("AE")) {
                wkd.updateAE(wkId, AE);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("AF")) {
                wkd.updateAF(wkId, AF);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("AG")) {
                wkd.updateAG(wkId, AG);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("AH")) {
                wkd.updateAH(wkId, AH);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("AI")) {
                wkd.updateAI(wkId, AI);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("AJ")) {
                wkd.updateAJ(wkId, AJ);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("AK")) {
                wkd.updateAK(wkId, AK);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("AL")) {
                wkd.updateAL(wkId, AL);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("AM")) {
                wkd.updateAM(wkId, AM);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("AN")) {
                wkd.updateAN(wkId, AN);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("AO")) {
                wkd.updateAO(wkId, AO);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("AP")) {
                wkd.updateAP(wkId, AP);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("AQ")) {
                wkd.updateAQ(wkId, AQ);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("AR")) {
                wkd.updateAR(wkId, AR);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("ASS")) {
                wkd.updateASS(wkId, ASS);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("AT")) {
                wkd.updateAT(wkId, AT);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("AU")) {
                wkd.updateAU(wkId, AU);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("AV")) {
                wkd.updateAV(wkId, AV);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("AW")) {
                wkd.updateAW(wkId, AW);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("AX")) {
                wkd.updateAX(wkId, AX);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("AY")) {
                wkd.updateAY(wkId, AY);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("AZ")) {
                wkd.updateAZ(wkId, AZ);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }

            if (column.equals("BA")) {
                wkd.updateBA(wkId, BA);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("BB")) {
                wkd.updateBB(wkId, BB);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("BC")) {
                wkd.updateBC(wkId, BC);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("BD")) {
                wkd.updateBD(wkId, BD);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("BE")) {
                wkd.updateBE(wkId, BE);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("BF")) {
                wkd.updateBF(wkId, BF);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("BG")) {
                wkd.updateBG(wkId, BG);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("BH")) {
                wkd.updateBH(wkId, BH);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("BI")) {
                wkd.updateBI(wkId, BI);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("BJ")) {
                wkd.updateBJ(wkId, BJ);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("BK")) {
                wkd.updateBK(wkId, BK);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("BL")) {
                wkd.updateBL(wkId, BL);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("BM")) {
                wkd.updateBM(wkId, BM);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("BN")) {
                wkd.updateBN(wkId, BN);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("BO")) {
                wkd.updateBO(wkId, BO);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("BP")) {
                wkd.updateBP(wkId, BP);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("BQ")) {
                wkd.updateBQ(wkId, BQ);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("BR")) {
                wkd.updateBR(wkId, BR);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("BS")) {
                wkd.updateBS(wkId, BS);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("BT")) {
                wkd.updateBT(wkId, BT);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("BU")) {
                wkd.updateBU(wkId, BU);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("BV")) {
                wkd.updateBV(wkId, BV);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("BW")) {
                wkd.updateBW(wkId, BW);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("BX")) {
                wkd.updateBX(wkId, BX);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("BYY")) {
                wkd.updateBYY(wkId, BYY);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("BZ")) {
                wkd.updateBZ(wkId, BZ);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }

            if (column.equals("CA")) {
                wkd.updateCA(wkId, CA);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("CB")) {
                wkd.updateCB(wkId, CB);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("CC")) {
                wkd.updateCC(wkId, CC);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("CD")) {
                wkd.updateCD(wkId, CD);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("CE")) {
                wkd.updateCE(wkId, CE);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("CF")) {
                wkd.updateCF(wkId, CF);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("CG")) {
                wkd.updateCG(wkId, CG);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("CH")) {
                wkd.updateCH(wkId, CH);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("CI")) {
                wkd.updateCI(wkId, CI);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("CJ")) {
                wkd.updateCJ(wkId, CJ);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("CK")) {
                wkd.updateCK(wkId, CK);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("CL")) {
                wkd.updateCL(wkId, CL);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("CM")) {
                wkd.updateCM(wkId, CM);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("CN")) {
                wkd.updateCN(wkId, CN);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("CO")) {
                wkd.updateCO(wkId, CO);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("CP")) {
                wkd.updateCP(wkId, CP);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("CQ")) {
                wkd.updateCQ(wkId, CQ);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("CR")) {
                wkd.updateCR(wkId, CR);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("CS")) {
                wkd.updateCS(wkId, CS);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("CT")) {
                wkd.updateCT(wkId, CT);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("CU")) {
                wkd.updateCU(wkId, CU);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
            if (column.equals("CV")) {
                wkd.updateCV(wkId, CV);
                req.getRequestDispatcher("workbench").forward(req, resp);
            }
        }else{
            /*如果不获取参数则使用重定向到登录页面*/
            System.out.println("修改失败");
            resp.sendRedirect("workbench.jsp?error=yes");
        }
    }
}
