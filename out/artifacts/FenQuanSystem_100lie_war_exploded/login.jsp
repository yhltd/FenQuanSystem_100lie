<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2020/11/10
  Time: 14:21
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<%@ taglib prefix="c"  uri="http://java.sun.com/jsp/jstl/core" %>

<link rel="stylesheet" href="static/bootstrap-3.3.7-dist/css/bootstrap.min.css  "/>
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
        <form action="login" method="post" id="myform">
            <h3 style="color: black;font-size: 50px;font-weight:bold">云合未来分权在线管理系统</h3>
            <h4 style="color: white">Control Function Online System.YHLTD</h4>
            <table class="table" style="text-align: center;width: 80%;margin: auto">
                <tr>
                    <td>
                        <div id="content"></div>

                    </td>
                </tr>
                <tr>
                    <td>
                        <span class="glyphicon glyphicon-user" style="color: white"></span>&nbsp;&nbsp;<input type="text" name="name" id="name" value="${cookie.loginAct.value}" required placeholder="请输入用户名" class="input">
                    </td>
                </tr>
                <tr>
                    <td>
                        <span class="glyphicon glyphicon-lock" style="color: white"></span>&nbsp;&nbsp;<input type="password" name="pwd" id="pwd" value="${cookie.loginPwd.value}" required placeholder="请输入密码" class="input">
                    </td>
                </tr>
                <tr>
                    <td>
                        <c:if test="${not empty cookie.loginAct and not empty cookie.loginPwd}">
                            &nbsp;&nbsp;<input  type="checkbox" name="isRem" id="isRem" checked="true" class="input" >十天内免登陆
                        </c:if>
                        <c:if test="${empty cookie.loginAct or empty cookie.loginPwd}">
                            &nbsp;&nbsp;<input  type="checkbox" name="isRem" id="isRem"  class="input" >十天内免登陆
                        </c:if>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <input type="submit" value="登录" style="background-color: #9acfea;border-color: #9acfea"  class="btn-success width">
                    </td>
                </tr>
            </table>
        </form>

    </div>
</body>
<script>

        $(function (){
            var a=1;
            $.ajax({
                type: 'post',
                url:'getGongsSiName',
                data:{

                },
                /*async:true,*/
               /* dataType: "String",*/
                success:function (result){
                    console.log(result)
                    //转换为javascript对象
                    var user = eval('('+result+')');
                    var str = "<select class=\"easyui-combobox width\" name=\"gongSi\" id=\"gongSi\" form='myform'>";
                    var strcontent ="";
                    for(var i=0;i<user.length;i++){
                        strcontent+="<option>"+user[i]+"</option>"
                    }
                    str+=strcontent+"</select>";
                    $("#content").html(str);
                    // for (let i = 0;i<result.length;++i){
                    //     $('#gongSis').val(result[i])
                    // }
                    /*alert("success");*/
                },error:function () {
                    alert("error!");
                }
             })
         });

        var errori ='<%=request.getParameter("errorq")%>';
        if(errori=='yes'){
            alert("登录失败!");
        }
</script>
</html>
