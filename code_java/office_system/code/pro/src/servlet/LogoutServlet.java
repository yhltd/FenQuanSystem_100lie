package servlet;

import dao.RenYuanDao;
import dao.RenYuanDaoImp;

import javax.servlet.ServletException;
import javax.servlet.http.*;
import java.io.IOException;

public class LogoutServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doPost(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        //处理请求信息 获取session
        HttpSession session = req.getSession();
        //销毁session
        System.out.println("destroy");
        session.invalidate();
        String rpath = req.getContextPath();
        //响应处理结果(重定向)
        resp.setHeader("Cache-Control","no-cache");
        resp.sendRedirect(rpath+"/login.jsp");
    }
}