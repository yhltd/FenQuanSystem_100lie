package servlet;

import dao.WorkbenchDao;
import dao.WorkbenchDaoImp;
import javaBean.Workbench;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.List;

public class WorkbenchServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doPost(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        HttpSession session = req.getSession();
        session.getAttribute("userName");
        WorkbenchDao wkd=new WorkbenchDaoImp();
        List<Workbench> wkYGInfo= wkd.workbenchInfo();
        req.setAttribute("wkYGInfo",wkYGInfo);
        req.getRequestDispatcher("/workbench.jsp").forward(req, resp);

    }
}
