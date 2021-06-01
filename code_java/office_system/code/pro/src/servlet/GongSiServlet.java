package servlet;

import dao.GongSiDao;
import dao.GongSiDaoImp;
import dao.WorkbenchDao;
import dao.WorkbenchDaoImp;
import javaBean.GongSi;
import javaBean.Workbench;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.List;

public class GongSiServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doPost(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException{
        HttpSession session = req.getSession();
        String gognsi = (String) session.getAttribute("GongSi");
        String quanxian = (String) session.getAttribute("quanxian");
//        int result = 1;
        if (quanxian.equals("管理员")){
            GongSiDao gsd=new GongSiDaoImp();
            List<GongSi>gongsiInfo= gsd.gongsiInfo(gognsi);
            req.setAttribute("gongsiInfo",gongsiInfo);
            System.out.println("显示成功");
            req.getRequestDispatcher("/gongSiRegulations.jsp").forward(req, resp);
        }else{
            session.getAttribute("userName");
            WorkbenchDao wkd=new WorkbenchDaoImp();
            List<Workbench> wkYGInfo= wkd.workbenchInfo(gognsi);
            req.setAttribute("wkYGInfo",wkYGInfo);
            req.getRequestDispatcher("/workbench.jsp").forward(req, resp);
        }

    }
}
