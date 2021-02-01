<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2020/11/11
  Time: 9:21
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<link rel="stylesheet" href="static/bootstrap-3.3.7-dist/css/bootstrap.min.css"/>
<link rel="stylesheet" href="static/css/regulations.css"/>
<script src="static/jquery/jquery.min.js"></script>
<script src="static/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>
<html>
<head>
    <title>人员管理</title>
</head>
<body background="img/1f48c75e2db216327a7681d59da0726f.jpg">
    <div style="text-align: center">
        <h2 style="text-align: center;color: white">人员管理</h2>
        <table border="1" class="table-condensed"  style="margin-left: auto;margin-right: auto;">
            <tr style="text-align: center">
                <td style="color: white">公司</td>
                <td style="color: white">姓名</td>
                <td style="color: white">账号</td>
                <td style="color: white">密码</td>
                <td style="color: white">操作</td>
            </tr>
            <c:forEach items="${renyuanInfo}" var="ry">
                <form action="updateRenYuan" method="post">
                    <tr>
                        <td hidden="hidden"><input type="text" name="id" value="${ry.id}" class="input"></td>
                        <td style="color: white"><input type="text" name="gongSi" value="${ry.b}" class="input" style="background: transparent"></td>
                        <td style="color: white"><input type="text" name="user" value="${ry.c}" class="input" style="background: transparent"></td>
                        <td style="color: white"><input type="text" name="name" value="${ry.d}" class="input" style="background: transparent"></td>
                        <td style="color: white"><input type="text" name="pwd" value="${ry.e}" class="input" style="background: transparent"></td>
                        <td><a href="deleteRenYuan?id=${ry.id}" style="color: white">删除</a> <input type="submit" value="修改" class="btn-success"> </td>
                    </tr>
                </form>
            </c:forEach>
        </table>
        <a href="workbench" style="color: black;font-size: 18px">返回主页</a>
    </div>
</body>
</html>
