package servlet;

import dao.RenYuanDao;
import dao.RenYuanDaoImp;
import javaBean.RenYuan;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.List;

public class RenYuanInfoServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doPost(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException{

        HttpSession session = req.getSession();
        String gognsi = (String) session.getAttribute("GongSi");
        String user = (String) session.getAttribute("userName");
        RenYuanDao ryd=new RenYuanDaoImp();
        List<RenYuan> renyuanInfo= ryd.renyuanInfo(gognsi);
        req.setAttribute("renyuanInfo",renyuanInfo);
        System.out.println("显示成功");
        req.getRequestDispatcher("/renYuanManagement.jsp").forward(req, resp);
    }
}
