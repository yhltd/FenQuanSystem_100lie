package servlet;

import com.google.gson.Gson;
import com.google.gson.JsonElement;
import dao.JsonReader;
import dao.RenYuanDao;
import dao.RenYuanDaoImp;
import javaBean.RenYuan;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

public class RenYuanInfoAjaxServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doPost(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException{
        String gognsi = req.getParameter("gongSi");
        String user= req.getParameter("name");
        Gson gson = new Gson();

        RenYuanDao ryd=new RenYuanDaoImp();
        List<RenYuan> renyuanInfos= ryd.renyuanInfo(gognsi);
        ArrayList<String> renyuanInfo = new ArrayList<>();

        for(int i=0;i<renyuanInfos.size();i++){
            renyuanInfo.add(renyuanInfos.get(i).getC());
        }


        String result = gson.toJson(renyuanInfo);

        resp.getWriter().write(result);
      /*  req.setAttribute("renyuanInfo",renyuanInfo);
        System.out.println("显示成功");
        req.getRequestDispatcher("/renYuanManagement.jsp").forward(req, resp);*/
    }
}
