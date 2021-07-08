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
import java.io.IOException;
import java.util.ArrayList;

public class RenYuanUpdateServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doPost(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
//        String id = req.getParameter("id");
//        int renYuanId = Integer.parseInt(id);
//
//        String B = req.getParameter("gongSi");
//        String C = req.getParameter("user");
//        String D = req.getParameter("name");
//        String E = req.getParameter("pwd");
//
//        RenYuanDao ryd = new RenYuanDaoImp();
//
//        if(ryd.update(renYuanId, B, C, D, E)){
//            System.out.println("修改人员信息成功");
//            req.getRequestDispatcher("workbench.jsp").forward(req, resp);
//        }

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
        String column=jrlist.get(jrlist.size()-1).getColumn();
        int id = Integer.parseInt(jrlist.get(jrlist.size()-1).getId());
        String B=jrlist.get(jrlist.size()-1).getNewvalue();
        String C=jrlist.get(jrlist.size()-1).getNewvalue();
        String D=jrlist.get(jrlist.size()-1).getNewvalue();
        String E=jrlist.get(jrlist.size()-1).getNewvalue();

        RenYuanDao ryd = new RenYuanDaoImp();

        if(column.equals("gongSi")){
            ryd.updateB(B,id);
            req.getRequestDispatcher("workbench.jsp").forward(req, resp);
        }
        if(column.equals("user")){
            ryd.updateC(C,id);
            req.getRequestDispatcher("workbench.jsp").forward(req, resp);
        }
        if(column.equals("name")){
            ryd.updateD(D,id);
            req.getRequestDispatcher("workbench.jsp").forward(req, resp);
        }
        if(column.equals("pwd")){
            ryd.updateE(E,id);
            req.getRequestDispatcher("workbench.jsp").forward(req, resp);
        }
    }
}
