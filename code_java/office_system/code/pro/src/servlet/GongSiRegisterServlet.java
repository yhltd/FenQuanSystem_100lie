package servlet;

import dao.GongSiDao;
import dao.GongSiDaoImp;
import javaBean.GongSi;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class GongSiRegisterServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String B=req.getParameter("B");
        //实例化对象
        GongSi gs=new GongSi();
        gs.setB(B);

        GongSiDao gsd=new GongSiDaoImp();
        if (gsd.register(gs)){
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
    }
}
