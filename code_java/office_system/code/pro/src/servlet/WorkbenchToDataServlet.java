package servlet;

import com.google.gson.Gson;
import dao.WorkbenchDao;
import dao.WorkbenchDaoImp;
import javaBean.Workbench;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.List;

public class WorkbenchToDataServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doPost(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        HttpSession session = req.getSession();
        session.getAttribute("userName");
        String gognsi = (String) session.getAttribute("GongSi");
        WorkbenchDao wkd=new WorkbenchDaoImp();
        List<Workbench> wkYGInfo= wkd.workbenchInfo(gognsi);
//        req.setAttribute("wkYGInfo",wkYGInfo);
//        req.getRequestDispatcher("/test.jsp").forward(req, resp);
//        resp.getWriter().write(result);
        Gson gson = new Gson();
        String result = gson.toJson(wkYGInfo);

        resp.getWriter().write(result);

    }
}
