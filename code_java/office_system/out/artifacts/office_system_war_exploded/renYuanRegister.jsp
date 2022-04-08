
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
<%--action="register" method="post"--%>
<%--<form method="post">--%>
<div class="div" >
    <h3 style="font-family: 微软雅黑">&nbsp;&nbsp;人员添加</h3>
    <table class="table" >
        <tr>
            <td><span>&nbsp;&nbsp;输入公司：</span><input type="text" readonly="readonly" id="text1" name="gongSi" required value="${GongSi}" ></td>
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
            <td colspan="2"> &nbsp;&nbsp;<input id="sumbit" type="submit" value="提交" class="btn-primary" style="background-color: #9acfea;border-color:#9acfea;  width: 148px">  <input id="empty" type="reset" value="清空" class="btn-primary"  style="background-color: #9acfea;border-color:#9acfea;  width: 148px"></td>
            <input type="hidden" id="path" value="${pageContext.request.contextPath}">
            <span id="userspan"></span>
        </tr>
    </table>
    <%--    </form>--%>
    <%--        <a href="workbench.jsp" style="font-size: 18px">返回</a>--%>
</div>
<script type="text/javascript">
    $('#sumbit').click(function (){
        var gongSi = $('input[name="gongSi"]').val();
        var user= $('input[name="user"]').val();
        var name = $('input[name="name"]').val();
        var pwd = $('input[name="pwd"]').val();

        if(!user) {
            alert("请输入姓名！")
            return false;
        }
        if(!name) {
            alert("请输入账号！")
            return false;
        }
        if (!pwd) {
            alert("请输入密码！")
            return false;
        }
        console.log(gongSi)
        console.log(user);
        console.log(name);
        console.log(pwd)
        $.ajax( {
            type: 'post',
            url:'register',
            async:true,
            data:{
                gongSi:gongSi,
                user:user,
                name:name,
                pwd:pwd,
            },

            success: function (data) {
                alert("添加成功");
                console.log(data)
                var user= $('input[name="user"]').val("");
                var name = $('input[name="name"]').val("");
                var pwd = $('input[name="pwd"]').val("");
            },
            error:function (){
                console.log(err)
            }
        })
    })

    $('#empty').click(function () {
        var user= $('input[name="user"]').val("");
        var name = $('input[name="name"]').val("");
        var pwd = $('input[name="pwd"]').val("");
    })

</script>
</body>
</html>
<%--    <script type="text/javascript">--%>
<%--         /*$(function(){--%>
<%--        $('input[name=user]').click(function(){--%>
<%--            $.ajax({--%>
<%--                type:"post",--%>
<%--                url:$("#path").val()+'register',--%>
<%--                data:{"user":$('input[name=user]').val()},--%>
<%--                dataType:"text",--%>
<%--                success:function (data) {--%>
<%--                    $("#userspan").html(data);--%>
<%--                    //alert("添加成功")--%>
<%--                    //$('input[name=user]').val("")--%>
<%--                    /!*$("#userspan").html(data);*!/--%>
<%--                    /!* var userNode = $('input[name=user]');--%>
<%--                    userNode.empty();--%>
<%--                    if ($('user').val() != null && $('user').val() != '') {--%>
<%--                        userNode.val($('#user').val());--%>
<%--                    }*!/--%>
<%--                },--%>
<%--                error:function (xmlHttpRequest) {--%>
<%--                    alert(xmlHttpRequest.status);--%>
<%--                }--%>
<%--            })--%>
<%--        })*/--%>

<%--        /* $('input').change('input',function(){--%>
<%--        arr = []--%>
<%--        let newvalue = this.value;--%>
<%--        let td = this.parentElement;--%>
<%--        let tr = td.parentElement;--%>
<%--        let firsttd = tr.firstElementChild;--%>
<%--        let firstinput = firsttd.firstElementChild--%>
<%--        let id = firstinput.value;--%>
<%--        let column = this.name;--%>
<%--        arr.push({--%>
<%--        id: id,--%>
<%--        newvalue:newvalue,--%>
<%--        column: column,--%>
<%--    })--%>
<%--        console.log(arr)--%>

<%--        $.ajax({--%>
<%--        type: 'post',--%>
<%--        url: 'updateRenYuan',--%>
<%--        data: {--%>
<%--        jsonData: JSON.stringify(arr)--%>
<%--    },--%>
<%--        dataType: 'json',--%>
<%--        success: function(data){--%>
<%--        console.log(data)--%>
<%--    },--%>
<%--        error: function(err){--%>
<%--        alert("修改成功！")--%>
<%--        console.log(err)--%>
<%--    }--%>
<%--    })--%>
<%--    })*/--%>
<%--        $('#test').click(function (){--%>
<%--        alert("1");--%>
<%--        var user= $('input[name="user"]').val();--%>
<%--        var name = $('input[name="name"]').val();--%>
<%--        var pwd = $('input[name="pwd"]').val();--%>
<%--        console.log(user);--%>
<%--        console.log(name);--%>
<%--        console.log(pwd)--%>
<%--        $.ajax( {--%>
<%--            type: 'post',--%>
<%--            url:'register',--%>
<%--            async:true,--%>
<%--            data:{--%>
<%--                user:user,--%>
<%--                name:name,--%>
<%--                pwd:pwd,--%>
<%--    },--%>

<%--        success: function (data) {--%>
<%--            alert("注册成功");--%>
<%--            console.log(data)--%>
<%--    },--%>
<%--        error:function (){--%>
<%--            console.log(err)--%>
<%--    }--%>
<%--    })--%>
<%--/*            if (user != null) {--%>
<%--                alert("添加成功")--%>
<%--                $('#text2').val(""),--%>
<%--                    $('#text3').val(""),--%>
<%--                    $('#text4').val("")--%>
<%--            }*/--%>
<%--    })--%>
<%--       /*$(document).ready(function () {--%>
<%--           $("input[name=user]").blur(function () {--%>
<%--                   var name = this.value;--%>
<%--                   if (name == null || name == "") {--%>
<%--                       $("#submit").html("用户名不能为空！");--%>
<%--                   } else {--%>
<%--                        $.ajax( {--%>
<%--                            type: "post",--%>
<%--                            url: "register",--%>
<%--                            data:"name="--%>
<%--                        })--%>
<%--                   }--%>
<%--               })--%>
<%--           })*/--%>
<%--      /*  $('input').change('input',function(){--%>
<%--            arr = []--%>
<%--            let newvalue = this.value;--%>
<%--            let td = this.parentElement;--%>
<%--            let tr = td.parentElement;--%>
<%--            let firsttd = tr.firstElementChild;--%>
<%--            let firstinput = firsttd.firstElementChild--%>
<%--            let id = firstinput.value;--%>
<%--            let column = this.name;--%>
<%--            arr.push({--%>
<%--                id: id,--%>
<%--                newvalue:newvalue,--%>
<%--                column: column,--%>
<%--            })--%>
<%--            console.log(arr)--%>

<%--            $.ajax({--%>
<%--                type: 'post',--%>
<%--                url: 'register',--%>
<%--                data: {--%>
<%--                    jsonData: JSON.stringify(arr)--%>
<%--                },--%>
<%--                dataType: 'json',--%>
<%--                success: function(data){--%>
<%--                    console.log(data)--%>
<%--                },--%>
<%--                error: function(err){--%>
<%--                    alert("添加成功！"),--%>
<%--                    console.log(err)--%>
<%--                }--%>
<%--            })--%>
<%--        })*/--%>

<%--    </script>--%>