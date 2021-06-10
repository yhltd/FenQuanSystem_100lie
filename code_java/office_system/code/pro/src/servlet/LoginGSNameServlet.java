package servlet;

import com.google.gson.Gson;
import dao.GongSiDao;
import dao.GongSiDaoImp;
import javaBean.GongSi;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
import net.sf.json.JSONArray;

public class LoginGSNameServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        GongSiDao gsd=new GongSiDaoImp();

        List<GongSi> gsList= gsd.GongSiName();
//        List<GongSi> gsname = new ArrayList<>();
//        GongSi gs = new GongSi();
//        for(int i = 0 ; i< gsList.size(); i++){
//            gs.setB(gsList.get(i).getB());
//            System.out.println(gsList.get(i).getB());
//        }
//        gsname.add(gs);
//        PrintWriter out = resp.getWriter();
//        JSONArray json = JSONArray.fromObject(gsname);
//        System.out.println(json);
//        out.print(json);
        List<String> usernmame = new ArrayList<>();
        for(int i = 0 ; i< gsList.size(); i++){
            System.out.println(gsList.get(i).getB());
            String name = gsList.get(i).getB();
            usernmame.add(name);
        }
        Gson gson = new Gson();
        String result = gson.toJson(usernmame);
        resp.getWriter().write(result);
//        req.setAttribute("gsName",usernmame);
//        req.getRequestDispatcher("/login.jsp").forward(req, resp);
    }
}
