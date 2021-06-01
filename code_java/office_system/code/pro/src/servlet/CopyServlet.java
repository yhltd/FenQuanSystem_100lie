package servlet;

import dao.Copy1Dao;
import dao.Copy1DaoImp;
import dao.WorkbenchDao;
import dao.WorkbenchDaoImp;
import javaBean.Copy1;
import javaBean.Workbench;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.List;

public class CopyServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doPost(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        HttpSession session = req.getSession();
        String gognsi = (String) session.getAttribute("GongSi");
        String quanxian = (String) session.getAttribute("quanxian");
           if (quanxian.equals("管理员")){
               Copy1Dao copy=new Copy1DaoImp();
               List<Copy1> copy1Info= copy.copy1Info(gognsi);
               req.setAttribute("copy1Info",copy1Info);
               req.getRequestDispatcher("/renYuanRegulations.jsp").forward(req, resp);
           }else{
               session.getAttribute("userName");
               WorkbenchDao wkd=new WorkbenchDaoImp();
               List<Workbench> wkYGInfo= wkd.workbenchInfo(gognsi);
               req.setAttribute("wkYGInfo",wkYGInfo);
               req.getRequestDispatcher("/workbench.jsp").forward(req, resp);
           }
    }
}
