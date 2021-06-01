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

public class WorkbenchForTimeServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doPost(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        HttpSession session = req.getSession();
        String username = (String) session.getAttribute("userName");
        String gognsi = (String) session.getAttribute("GongSi");
        String quanxian = (String) session.getAttribute("quanxian");
//        String column = req.getParameter("column");
        String startTime = req.getParameter("startTime");
        String endTime = req.getParameter("endTime");
        WorkbenchDao wkd=new WorkbenchDaoImp();
        if(quanxian.equals("管理员")){
            List<Workbench> wkYGInfo= wkd.getWorkbenchToDate(startTime,endTime,gognsi);
            req.setAttribute("wkYGInfo",wkYGInfo);
            req.getRequestDispatcher("/workbench.jsp").forward(req, resp);
        }else{
            List<Workbench> wkYGInfo= wkd.getWorkbenchToDateUsername(startTime,endTime,gognsi,username);
            req.setAttribute("wkYGInfo",wkYGInfo);
            req.getRequestDispatcher("/workbench.jsp").forward(req, resp);
        }


    }
}
