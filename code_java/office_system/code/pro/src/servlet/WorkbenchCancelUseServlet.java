package servlet;

import dao.RenYuanDao;
import dao.RenYuanDaoImp;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

public class WorkbenchCancelUseServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doPost(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException{
        HttpSession session = req.getSession();
        String gognsi = (String) session.getAttribute("GongSi");
        String column = req.getParameter("column");
        RenYuanDao renYuanDao = new RenYuanDaoImp();
        boolean renyuanDelete = renYuanDao.renyuanDelete(gognsi,column);
        System.out.println(renyuanDelete);
        req.getRequestDispatcher("login").forward(req, resp);
    }
}
