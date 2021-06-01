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

public class WorkbenchAddServlet extends HttpServlet  {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doPost(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        HttpSession session = req.getSession();
        String username = (String) session.getAttribute("userName");
        String gognsi = (String) session.getAttribute("GongSi");
        WorkbenchDao wkd=new WorkbenchDaoImp();
           boolean result= wkd.addWorkbench(username,gognsi);
           req.setAttribute("result",result);
           req.getRequestDispatcher("/workbench.jsp").forward(req, resp);
    }
}
