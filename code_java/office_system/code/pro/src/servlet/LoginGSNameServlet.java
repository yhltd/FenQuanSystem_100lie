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

public class LoginGSNameServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        GongSiDao gsd=new GongSiDaoImp();
        List<GongSi> gsName= gsd.GongSiName();
        List<String> usernmame = new ArrayList<>();
        for(int i = 0 ; i< gsName.size(); i++){
            System.out.println(gsName.get(i).getC());
            String name = gsName.get(i).getB();
            usernmame.add(name);
        }
        req.setAttribute("gsName",usernmame);
        req.getRequestDispatcher("/login.jsp").forward(req, resp);
    }
}
