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
    <link rel="shortcut icon" href="img/logo.png" />
    <title>云合未来分权编辑系统</title>
<%--    <script type="text/javascript">--%>
<%--        function $(id)--%>
<%--        {--%>
<%--            return document.getElementById(id);--%>
<%--        }--%>
<%--        function clearDiv()--%>
<%--        {--%>
<%--            // var nodes = $('div1').childNodes;--%>
<%--            // for(var i = 0 ; i < nodes.length ; i++)--%>
<%--            // {--%>
<%--            //     if(nodes[i].type == 'text')--%>
<%--            //     {--%>
<%--            //         nodes[i].value = '';--%>
<%--            //     }--%>
<%--            // }--%>
<%--            // $(':input','#myform')--%>
<%--            //     .not(':button, :reset, :hidden')--%>
<%--            //     .val('')--%>
<%--            //     .removeAttr('checked')--%>
<%--            //     .removeAttr('selected');--%>
<%--            $('input').val('')--%>
<%--        }--%>

<%--    </script>--%>
</head>
<%--<body background="img/9465fee2dc55cfd019c45a9858076f25.jpg">--%>
<body >
    <div class="div" >
        <h3 style="font-family: 微软雅黑">&nbsp;&nbsp;人员添加</h3>
        <form action="register" method="post">
            <table class="table" >
                <tr>
                    <td><span>&nbsp;&nbsp;输入公司：</span><input type="text" id="text1" name="gongSi" required></td>
                </tr>
                <tr>
                    <td><span>&nbsp;&nbsp;输入姓名：</span><input type="text" id="text2" name="user" required></td>
                </tr>
                <tr>
                    <td><span>&nbsp;&nbsp;输入账号：</span><input type="text" id="text3" name="name" required></td>
                </tr>
                <tr>
                    <td><span>&nbsp;&nbsp;输入密码：</span><input type="text" id="text4" name="pwd" required></td>
                </tr>
                <tr>
                    <td colspan="2"> &nbsp;&nbsp;<input type="submit" value="提交" class="btn-primary" style="background-color: #9acfea;border-color:#9acfea;  width: 148px">  <input type="reset" value="清空" class="btn-primary"  style="background-color: #9acfea;border-color:#9acfea;  width: 148px"></td>
                </tr>
            </table>
        </form>
<%--        <a href="workbench.jsp" style="font-size: 18px">返回</a>--%>
    </div>
</body>
</html>
<script>
</script>