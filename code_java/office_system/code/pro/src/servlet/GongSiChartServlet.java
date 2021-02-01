package servlet;

import dao.GongSiDaoImp;
import javaBean.GongSi;
import net.sf.json.JSONArray;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

public class GongSiChartServlet extends HttpServlet {
    private  static final long serialVersionUID=1L;

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doPost(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        GongSiDaoImp gsd=new GongSiDaoImp();
        List<GongSi> gongSiChart= gsd.gongsiInfo();
        resp.setContentType("text/html; charset=utf-8");
        JSONArray json=new JSONArray().fromObject(gongSiChart);
        System.out.println(json.toString());
        PrintWriter out = resp.getWriter();
        out.println(json);
        out.flush();
        out.close();
    }
}
