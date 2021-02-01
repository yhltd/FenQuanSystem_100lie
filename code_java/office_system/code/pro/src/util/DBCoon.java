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
        } catch (SQLException e) {
            e.printStackTrace();
            System.out.println("数据查询失败");
        }
        return rs;
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
