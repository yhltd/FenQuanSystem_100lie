package servlet;

import dao.GongSiDao;
import dao.GongSiDaoImp;
import javaBean.GongSi;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class GongSiRegisterServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String B=req.getParameter("B");
        //实例化对象
        GongSi gs=new GongSi();
        gs.setB(B);


        GongSiDao gsd=new GongSiDaoImp();
        List<GongSi> gsName= gsd.GongSiName();
        int gongSiNum = 0;
        for(int i = 0 ; i< gsName.size(); i++){
            System.out.println(gsName.get(i).getC());
            String name = gsName.get(i).getB();
            if(B.equals(name)){
                gongSiNum = 1;
            }
        }
        if(gongSiNum != 0){
            req.getRequestDispatcher("/gongSiRegister.jsp").forward(req, resp);
        }else{
            if (gsd.register(gs)){
                req.getRequestDispatcher("gongSi").forward(req, resp);
            }
        }
    }
}
