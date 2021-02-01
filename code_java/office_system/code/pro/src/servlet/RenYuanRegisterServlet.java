package servlet;

import dao.RenYuanDao;
import dao.RenYuanDaoImp;
import javaBean.RenYuan;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class RenYuanRegisterServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doPost(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String gongSi=req.getParameter("gongSi");
        String user=req.getParameter("user");
        String name=req.getParameter("name");
        String pwd=req.getParameter("pwd");
        //实例化一个对象，组装属性
        RenYuan renYuan=new RenYuan();
        renYuan.setB(gongSi);
        renYuan.setC(user);
        renYuan.setD(name);
        renYuan.setE(pwd);

        RenYuanDao ryd=new RenYuanDaoImp();
        if (ryd.register(renYuan)){
            System.out.println("注册成功");
            req.getRequestDispatcher("renYuan").forward(req, resp);
        }
    }
}
