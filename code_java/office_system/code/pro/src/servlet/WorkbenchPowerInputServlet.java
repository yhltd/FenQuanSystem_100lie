package servlet;

import dao.RenYuanDao;
import dao.RenYuanDaoImp;
import util.ColumUtil;



import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

public class WorkbenchPowerInputServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doPost(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
//        resp.setCharacterEncoding("utf-8");

      RenYuanDao renYuanDao = new RenYuanDaoImp();
        ColumUtil alpan = new ColumUtil();
      HttpSession session = req.getSession();


        String D =(String) session.getAttribute("userName");
        System.out.println("输出从session中获取的uerName:"+D);
        String B =(String) session.getAttribute("GongSi");
        System.out.println("输出从session中获取的GongSi:"+B);
        String power = renYuanDao.getPower(B,D);
        System.out.println("输出查询到的当前登录人员的权限power:"+power);
        String alphabet = req.getParameter("colum");
        System.out.println("输出前端传来的testAlpanbet:"+alphabet);
        String colum = alpan.getAlphabet(alphabet);
        System.out.println("经过处理之后的列column:"+colum);
        String result = renYuanDao.selectRankPower(colum,power);
        System.out.println("servlet返回结果:"+result);

        resp.getWriter().write(result);
    }
}
