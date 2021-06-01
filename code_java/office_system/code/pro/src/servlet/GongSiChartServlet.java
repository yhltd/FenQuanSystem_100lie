package servlet;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import dao.GongSiDao;
import dao.GongSiDaoImp;
import javaBean.GongSi;
import net.sf.json.JSONArray;
import util.ColumUtil;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.*;

public class GongSiChartServlet extends HttpServlet {
    private  static final long serialVersionUID=1L;

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doPost(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        HttpSession httpSession = req.getSession();
        ColumUtil cu = new ColumUtil();
        GongSiDao gongSiDao = new GongSiDaoImp();
        String B = (String) httpSession.getAttribute("GongSi");
        List alphabet = new ArrayList();
        Map<String,Integer> map = new TreeMap<>();
        String column ;

        int rowCount;
        alphabet = cu.getColumn();
        for (int i = 0;i<alphabet.size();i++){
           column = String.valueOf(alphabet.get(i));
           if(column.equals("CW") ){
               break;
           }else if (column.equals("AS")){
               column = "ASS";
               rowCount = gongSiDao.getRowCount(column,B);
           }else if (column.equals("BY") ){
               column = "BYY";
               rowCount = gongSiDao.getRowCount(column,B);
           }else{
               rowCount = gongSiDao.getRowCount(column,B);
           }
            map.put(column,rowCount);
        }
        for (String key:map.keySet()){
            int value = map.get(key);
        }

        Gson gson = new Gson();
        String result = gson.toJson(map);

        resp.getWriter().write(result);
    }
}
