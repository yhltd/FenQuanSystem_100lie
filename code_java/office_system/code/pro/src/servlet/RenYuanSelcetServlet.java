package servlet;

import com.google.gson.Gson;
import dao.RenYuanDao;
import dao.RenYuanDaoImp;
import javaBean.RenYuan;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class RenYuanSelcetServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doPost(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException{

        String user= req.getParameter("username");
        String gongSi= req.getParameter("gongSi");
        Gson gson = new Gson();

        RenYuanDao ryd=new RenYuanDaoImp();
        List<RenYuan> renyuanInfo= ryd.renyuanSelct(user,gongSi);



        String result = gson.toJson(renyuanInfo);
        System.out.println("result");
        resp.getWriter().write(result);




      /*  req.setAttribute("renyuanInfo",renyuanInfo);
        System.out.println("显示成功");
        req.getRequestDispatcher("/renYuanManagement.jsp").forward(req, resp);*/
    }
}
