package servlet;

import com.google.gson.Gson;
import dao.RenYuanDao;
import dao.RenYuanDaoImp;
import dao.WorkbenchDao;
import dao.WorkbenchDaoImp;
import javaBean.RenYuan;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class RenYuanRegisterServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doPost(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String gongSi = req.getParameter("gongSi");
        String user = req.getParameter("user");
        String name = req.getParameter("name");
        String pwd = req.getParameter("pwd");
        //实例化一个对象，组装属性
        RenYuan renYuan = new RenYuan();
        renYuan.setB(gongSi);
        renYuan.setC(user);
        renYuan.setD(name);
        renYuan.setE(pwd);

        RenYuanDao ryd = new RenYuanDaoImp();
        if (ryd.register(renYuan)) {
            //System.out.println("注册成功");

//            if (user != null || name != null || pwd != null) {
//                boolean res = ryd.register(renYuan);
//                Gson gson = new Gson();
//                String result = gson.toJson(res);
//                resp.getWriter().write(result);
////                req.setAttribute("result", result);
//                System.out.println("注册成功");
//
//            } else {
//                System.out.println("插入失败");
//
//                //req.getRequestDispatcher("index.jsp").forward(req, resp);
//
//            }

        /*String name = req.getParameter("user");
        boolean used = false;
        if ("ajax".equals(name)) {
            used= true;
        }
        resp.setContentType("text/html;charset=utf-8");
        PrintWriter out = resp.getWriter();
        out.print(used);
        out.flush();
        out.close();*/

/*
        if(req.getParameter("user") != null) {
            String user = req.getParameter("user");
            String msg = "";
            if (user != null) {
                msg = "添加成功";
            }
            resp.setContentType("text/html;charset=utf-8");
            PrintWriter out = resp.getWriter();
            out.print(msg);
            out.flush();
            out.close();
        }
        }*/
        }
    }
}


