<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2020/11/18
  Time: 16:56
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<link rel="stylesheet" href="static/bootstrap-3.3.7-dist/css/bootstrap.min.css"/>
<link rel="stylesheet" href="static/css/register.css" type="text/css">
<script src="static/jquery/jquery.min.js"></script>
<script src="static/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>
<html>
<head>
    <title>添加公司</title>
</head>
<%--<body background="img/ca4bf2a0431a3bb635d539f3e8f3ebe0.jpg">--%>
<body>
    <div class="div">
        <form action="gongSiRegister" method="post">
            <h3 style="text-align: left;">公司添加</h3>
            <table class="table">
                <tr>
                    <td><label >输入公司：</label><input type="text" name="B" required></td>
                </tr>
                <tr>
                    <td colspan="2"> <input type="submit" value="提交" class="btn-primary" style="border-color: #9acfea; background-color:#9acfea; width: 285px"></td>
                </tr>
            </table>
        </form>
<%--        <h4><a href="workbench.jsp" >返回</a></h4>--%>
    </div>
</body>
</html>
