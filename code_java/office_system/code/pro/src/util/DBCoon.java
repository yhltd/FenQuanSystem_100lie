package util;

import java.sql.*;


public class DBCoon {

    private static final String driver="com.microsoft.sqlserver.jdbc.SQLServerDriver";
    private static final String url = "jdbc:sqlserver://yhocn.cn;databasename=";
    private static final String database_name = "yao";
    private static final String user_name = "sa";
    private static final String password = "Lyh07910_001";


    static ResultSet rs = null;
    static PreparedStatement ps = null;
    static Connection conn=null;


    public static void init() {
        try {
            /*加载驱动*/
            Class.forName(driver);
            conn=DriverManager.getConnection(url+database_name,user_name,password);
            System.out.println("数据库连接成功");
        }catch (Exception e){
            e.printStackTrace();
            System.out.println("数据库连接失败");
        }
    }

    /*查询数据(传递参数)*/
    public static ResultSet searchSql(String sql,Object[] args){
        try {
            ps = conn.prepareStatement(sql);
            for (int j = 0; j < args.length; j++) {
                ps.setObject(j+1, args[j]);
            }
            rs = ps.executeQuery();
            System.out.println("数据查询成功");
            System.out.println(rs);
        } catch (SQLException e) {
            e.printStackTrace();
            System.out.println("数据查询失败");
        }
        return rs;
    }

    /*查询数据库返回int类型*/
    public static int selectReturnInt(String sql)  {
        int  i = 0;
        try {
            ps = conn.prepareStatement(sql);
            rs = ps.executeQuery();

            if(rs.next()) {
                i=rs.getInt("count");
            }

        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        System.out.println("从数据库中查询到的列的使用行数i是"+i);
        return i;
    }

    /*查询数据库返回int类型*/
    public static int selectGongsiInt(String sql)  {
        int  i = 0;
        try {
            ps = conn.prepareStatement(sql);
            rs = ps.executeQuery();

            if(rs.next()) {
                i=rs.getInt("count");
            }

        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        System.out.println("从数据库中查到的当前公司名称数是"+i);
        return i;
    }


    /*查询数据库返回String类型*/
    public static String selectRank(String sql,String colum)  {
        System.out.println(colum);
        String result = "";
        int recive = 0;
        try {
            ps = conn.prepareStatement(sql);
            System.out.println("ps的值是:"+ps);
            rs = ps.executeQuery();
            System.out.println("rs的值是:"+rs);
            //结果集没有当前行的解决方法：在执行excuteQuery方法得到结果集之后，在后面添加rs.next()方法，指向下一个
            //rs.next();
            if(rs.next()){
                //rs = ps.executeQuery();
                System.out.println(rs);
                result = rs.getString(colum);
                System.out.println("查询成功result:"+result);
            }
        } catch (SQLException throwables) {
            throwables.printStackTrace();
            System.out.println("查询列的权限失败");
        }
        System.out.println("返回的是:"+result);
        return result;
    }


    /*增删改查数据(传递参数)*/
    public static int addUpdDel(String sql,Object[] args){
        int i = 0;
        try{
            ps = conn.prepareStatement(sql);
            for (int j = 0; j < args.length; j++) {
                ps.setObject(j+1, args[j]);
            }
            i = ps.executeUpdate();
            System.out.println("增删改成功");
        } catch (SQLException e) {
            e.printStackTrace();
            System.out.println("增删改失败");
        }
        return i;
    }
    /*增删改查数据(传递参数)*/
    public static int addUpdDel(String sql){
        int i = 0;
        try{
            ps = conn.prepareStatement(sql);
            i = ps.executeUpdate();
            System.out.println("增删改成功");
        } catch (SQLException e) {
            e.printStackTrace();
            System.out.println("增删改失败");
        }
        return i;
    }

    /*不传递参数查询信息*/
    public static ResultSet getInfo(String sql){
        try {
            ps = conn.prepareStatement(sql);
            rs = ps.executeQuery();
            System.out.println("数据查询成功");
        } catch (SQLException e) {
            e.printStackTrace();
            System.out.println("数据查询失败");
        }
        return rs;
    }


    /*关流*/
    public static void close() {
        try {
            if (rs != null) {
                rs.close();
            }
            if (ps != null) {
                ps.close();
            }
            if (conn != null) {
                conn.close();
            }
        } catch (SQLException e) {
            System.out.println("数据流关闭异常");
        }
    }


}
