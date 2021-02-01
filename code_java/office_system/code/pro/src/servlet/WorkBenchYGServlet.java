package servlet;

import dao.WorkbenchDao;
import dao.WorkbenchDaoImp;
import javaBean.Workbench;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

public class WorkBenchYGServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        super.doPost(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        //HttpSession session = req.getSession();
        //session.getAttribute("userName");
        String GongSi = req.getParameter("gongSi");
        WorkbenchDao wkd=new WorkbenchDaoImp();
        List<Workbench> wkInfo= wkd.workbenchYGInfo(GongSi);
        req.setAttribute("wkInfo",wkInfo);
        req.getRequestDispatcher("/workbench.jsp").forward(req, resp);
    }
}
