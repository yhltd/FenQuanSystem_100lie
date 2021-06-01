package servlet;

import dao.RenYuanDao;
import dao.RenYuanDaoImp;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

public class LoginServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doPost(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        /*req.getParameter获取前台输入框的值即input框里的name属性的值*/
        String B = req.getParameter("gongSi");
        String D = req.getParameter("name");
        String E = req.getParameter("pwd");
        RenYuanDao ryd = new RenYuanDaoImp();
        if(ryd.login(B,D,E)){
            //将用户名带入工作台
            HttpSession session = req.getSession();
            session.setAttribute("userName",D);
            session.setAttribute("GongSi",B);
            //取得权限判断是不是管理员
            String qx=ryd.QuanXian(B,D,E);
            session.setAttribute("quanxian",qx);
            if(ryd.QuanXian(B,D,E).equals("管理员")){
                System.out.println(qx+"登录成功");
                req.getRequestDispatcher("workbenchGLY").forward(req, resp);
            }else{
                System.out.println(qx+"登录成功");
                req.getRequestDispatcher("workbenchYG").forward(req, resp);
            }
        }else {
            /*如果不获取参数则使用重定向到登录页面*/
            System.out.println("登录失败");
            resp.sendRedirect("login.jsp");
        }
    }
}