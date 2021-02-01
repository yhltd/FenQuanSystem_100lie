<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2020/11/10
  Time: 14:21
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<%@ taglib prefix="c"  uri="http://java.sun.com/jsp/jstl/core" %>

<link rel="stylesheet" href="static/bootstrap-3.3.7-dist/css/bootstrap.min.css"/>
<link rel="stylesheet" href="static/css/login.css" type="text/css">
<script src="static/jquery/jquery.min.js"></script>
<script src="static/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>

<script src="static/easyui/jquery.easyui.min.js"></script><!--这是jQuery easyUI文件-->
<script src="static/easyui/locale/easyui-lang-zh_CN.js"></script><!--这是easyui中文包文件-->
<link rel="stylesheet" type="text/css" href="static/easyui/themes/default/easyui.css"><!--这是easyui默认主题CSS文件-->
<link rel="stylesheet" type="text/css" href="static/easyui/themes/icon.css"><!--这是easyui图标CSS文件-->
<link rel="stylesheet" type="text/css" href="static/easyui/demo/demo.css"><!--这是easyui图标demo样式-->


<html>
<head>
    <title>登录</title>
</head>
<body background="img/63f5201199ee3b6e7d6218e54a81ba86.jpg">
    <div class="div">
        <form action="login" method="post">
            <h3 style="color: white">管理中心</h3>
            <h4 style="color: white">System Management Center</h4>
            <table class="table" style="text-align: center;width: 80%;margin: auto">
                <tr>
                    <td>
                        <select class="easyui-combobox width" name="gongSi" id="gongSi">
                            <c:forEach items="${gsName}" var="gsName">
                                <option>${gsName.b}</option>
                            </c:forEach>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span class="glyphicon glyphicon-user" style="color: white"></span>&nbsp;&nbsp;<input type="text" name="name" id="name" required placeholder="请输入用户名" class="input">
                    </td>
                </tr>
                <tr>
                    <td>
                        <span class="glyphicon glyphicon-lock" style="color: white"></span>&nbsp;&nbsp;<input type="password" name="pwd" id="pwd" required placeholder="请输入密码" class="input">
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <input type="submit" value="登录" class="btn-success width">
                    </td>
                </tr>
            </table>
        </form>
    </div>
</body>
</html>
