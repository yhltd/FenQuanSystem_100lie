package servlet;

import com.google.gson.Gson;
import dao.RenYuanDao;
import dao.RenYuanDaoImp;
import util.ColumUtil;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.*;

public class RenYuanAllChartServlet extends HttpServlet {
    private  static final long serialVersionUID=1L;

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doPost(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        HttpSession httpSession = req.getSession();
        ColumUtil cu = new ColumUtil();
        //GongSiDao gongSiDao = new GongSiDaoImp();
        RenYuanDao renYuanDao = new RenYuanDaoImp();
        String B = (String) httpSession.getAttribute("GongSi");
        String user = req.getParameter("username");
        List alphabet = new ArrayList();
        Map<String,Integer> map = new LinkedHashMap<>();
        String column ;
        int rowCount;
        alphabet = cu.getColumn();
        for (int i = 0;i<alphabet.size();i++){
            column = String.valueOf(alphabet.get(i));
            if(column.equals("CW") ){
                break;
            }else if (column.equals("AS")){
                column = "ASS";
                rowCount = renYuanDao.getRowCount(column,B,user);
            }else if (column.equals("BY") ){
                column = "BYY";
                rowCount = renYuanDao.getRowCount(column,B,user);
            }else{
                rowCount = renYuanDao.getRowCount(column,B,user);
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
