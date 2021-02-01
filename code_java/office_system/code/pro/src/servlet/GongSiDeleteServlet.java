package servlet;

import dao.GongSiDao;
import dao.GongSiDaoImp;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class GongSiDeleteServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doPost(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String id=req.getParameter("id");
        int GongSiId = Integer.parseInt(id);
        GongSiDao gsd=new GongSiDaoImp();
        if(gsd.delete(GongSiId)){
            req.getRequestDispatcher("gongSi").forward(req, resp);
        }
    }
}
