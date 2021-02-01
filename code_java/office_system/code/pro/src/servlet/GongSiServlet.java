package servlet;

import dao.GongSiDao;
import dao.GongSiDaoImp;
import javaBean.GongSi;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

public class GongSiServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doPost(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException{
        GongSiDao gsd=new GongSiDaoImp();
        List<GongSi>gongsiInfo= gsd.gongsiInfo();
        req.setAttribute("gongsiInfo",gongsiInfo);
        System.out.println("显示成功");
        req.getRequestDispatcher("/gongSiRegulations.jsp").forward(req, resp);
    }
}
