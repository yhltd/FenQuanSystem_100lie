package servlet;

import dao.Copy1Dao;
import dao.Copy1DaoImp;
import javaBean.Copy1;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

public class CopyServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doPost(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        Copy1Dao copy=new Copy1DaoImp();
        List<Copy1> copy1Info= copy.copy1Info();
        req.setAttribute("copy1Info",copy1Info);
        req.getRequestDispatcher("/renYuanRegulations.jsp").forward(req, resp);
    }
}
