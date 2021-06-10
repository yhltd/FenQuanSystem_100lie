package servlet;

import dao.WorkbenchDao;
import dao.WorkbenchDaoImp;
import javaBean.Workbench;
import com.google.gson.Gson;
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
       /* HttpSession session = req.getSession();
        String renYuan = (String) session.getAttribute("renYuan");
        String gongSi = (String) session.getAttribute("gongSi");*/
        String renYuan = req.getParameter("renYuan");
        String gongSi = req.getParameter("gongSi");
        System.out.println(renYuan);
        if (renYuan != null || gongSi!=null ){
            WorkbenchDao wkd=new WorkbenchDaoImp();
            boolean res= wkd.addWorkbench(gongSi,renYuan);
            Gson gson = new Gson();
            String result = gson.toJson(res);
            resp.getWriter().write(result);
          /* req.setAttribute("result",result);
           req.getRequestDispatcher("/workbench.jsp").forward(req, resp);*/
        }else{
            System.out.println("插入失败");

            /*req.getRequestDispatcher("/workbench.jsp").forward(req, resp);*/
        }

    }
}
