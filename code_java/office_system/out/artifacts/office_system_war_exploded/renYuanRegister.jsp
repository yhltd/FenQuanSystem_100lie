<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2020/11/16
  Time: 11:38
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<link rel="stylesheet" href="static/bootstrap-3.3.7-dist/css/bootstrap.min.css"/>
<link rel="stylesheet" href="static/css/register.css" type="text/css">
<script src="static/jquery/jquery.min.js"></script>
<script src="static/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>
<html>
<head>
    <title>人员注册</title>
</head>
<%--<body background="img/9465fee2dc55cfd019c45a9858076f25.jpg">--%>
<body >
    <div class="div">
        <h3>人员添加</h3>
        <form action="register" method="post">
            <table class="table" >
                <tr>
                    <td>输入公司：<input type="text" name="gongSi" required></td>
                </tr>
                <tr>
                    <td>输入姓名：<input type="text" name="user" required></td>
                </tr>
                <tr>
                    <td>输入账号：<input type="text" name="name" required></td>
                </tr>
                <tr>
                    <td>输入密码：<input type="text" name="pwd" required></td>
                </tr>
                <tr>
                    <td colspan="2"> <input type="submit" value="提交" class="btn-primary" style="background-color: #9acfea;border-color:#9acfea;  width: 285px"></td>
                </tr>
            </table>
        </form>
        <a href="workbench.jsp" style="font-size: 18px">返回</a>
    </div>
</body>
</html>
<script>
</script>