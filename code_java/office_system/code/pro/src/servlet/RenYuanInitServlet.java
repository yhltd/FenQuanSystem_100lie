package servlet;

import dao.*;
import javaBean.GongSi;
import javaBean.RenYuan;
import javaBean.Workbench;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class RenYuanInitServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doPost(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException{
        HttpSession session = req.getSession();
        String gognsi = (String) session.getAttribute("GongSi");
        String quanxian = (String) session.getAttribute("quanxian");
        RenYuanDao renYuanDao = new RenYuanDaoImp();
        if (quanxian.equals("管理员")){
            List<RenYuan> renyuanInit = renYuanDao.getRenYuan(gognsi);
            List<String> usernmame = new ArrayList<>();
            for(int i = 0 ; i< renyuanInit.size(); i++){
                System.out.println(renyuanInit.get(i).getC());
                String name = renyuanInit.get(i).getC();
                usernmame.add(name);
            }

            req.setAttribute("renyuanInit",usernmame);
            req.getRequestDispatcher("/renyuanChart.jsp").forward(req, resp);
        }else{
            req.getRequestDispatcher("/renyuanChart.jsp").forward(req, resp);
        }
    }
}
