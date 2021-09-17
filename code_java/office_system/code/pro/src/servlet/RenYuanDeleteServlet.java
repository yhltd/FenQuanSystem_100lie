package servlet;

import dao.RenYuanDao;
import dao.RenYuanDaoImp;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class RenYuanDeleteServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doPost(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String id = req.getParameter("id");
        String renyuan_id = req.getParameter("renyuan_id");
        System.out.println("删除的人员id为："+id);
        /*获取到的id是一个引用数据类型即对象，需要变成基本数据类型作为参数传输*/
        int RenYuanId = Integer.parseInt(id);
        /*调用dao层，返回值是一个整形数字*/
        RenYuanDao ryd = new RenYuanDaoImp();
        /*delete方法的参数为int id，所以必须把从jsp页面获取到的id转换成基本数据类型*/
        if(ryd.delete(RenYuanId)){
            ryd.delete2(renyuan_id);
            /*站内转发：请求转发到searchAll的servlet*/
            req.getRequestDispatcher("workbench.jsp").forward(req, resp);
        }
    }
}
