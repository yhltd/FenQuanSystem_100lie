package servlet;

import dao.RenYuanDao;
import dao.RenYuanDaoImp;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class RenYuanUpdateServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doPost(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String id = req.getParameter("id");
        int renYuanId = Integer.parseInt(id);

        String B = req.getParameter("gongSi");
        String C = req.getParameter("user");
        String D = req.getParameter("name");
        String E = req.getParameter("pwd");

        RenYuanDao ryd = new RenYuanDaoImp();

        if(ryd.update(renYuanId, B, C, D, E)){
            req.getRequestDispatcher("renYuan").forward(req, resp);
        }
    }
}
