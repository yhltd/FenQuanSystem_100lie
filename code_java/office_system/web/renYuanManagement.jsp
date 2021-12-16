<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2020/11/11
  Time: 9:21
  To change this template use File | Settings | File Templates.
--%>

<html>

<head>

    <link rel="shortcut icon" href="img/logo.png" />
    <title>云合未来分权编辑系统</title>
    <%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

    <link rel="stylesheet" href="static/bootstrap-3.3.7-dist/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="static/css/regulations.css"/>
    <script src="static/jquery/jquery.min.js"></script>
    <script src="static/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>
</head>

<%--<body background="img/1f48c75e2db216327a7681d59da0726f.jpg">--%>

<body >
<%--<style>
    /*table,#content234{
        margin-left: 20px;
    }*/
</style>--%>
        <h3 style="margin-left: 14px;margin-right: 50px">人员管理</h3>
        <div style="margin-left: 14px">

        <span id="content234" style="width: 150px;height: 30px">
            <input id="inp" style="display: none" value="${GongSi}"/>
            请选择姓名：
        </span>
        <input  type="button"  value="查询" id="but1" style="border-color:#9acfea; background-color:#9acfea; width: 50px;height: 30px">
        <p>*此页面数据为实时修改，编辑后自动保存</p>
        <table border="1" class="table-condensed"  >
            <thead style="text-align: center">
                <td >公司</td>
                <td >姓名</td>
                <td >账号</td>
                <td >密码</td>
                <td >操作</td>
            </thead>
            <tbody id="content2">

            </tbody>
            <tfoot id="hidfoot">
                <c:forEach  items="${renyuanInfo}" var="ry" >
                    <form action="updateRenYuan" method="post" id="myform">
                        <tr>
                            <td hidden="hidden"><input type="text" name="id" value="${ry.id}" class="input">
                                <input type="text" name="renyuan_id" value="${ry.renyuan_id}" class="input"></td>
                            <td ><input type="text" name="gongSi" value="${ry.b}" class="input" style="background: transparent"></td>
                            <td ><input type="text" name="user" value="${ry.c}" class="input" style="background: transparent"></td>
                            <td ><input type="text" name="name" value="${ry.d}" class="input" style="background: transparent"></td>
                            <td ><input type="text" name="pwd" value="${ry.e}" class="input" style="background: transparent"></td>
                            <td><a href="deleteRenYuan?id=${ry.id}&renyuan_id=${ry.renyuan_id}," >删除</a>   </td>
<%--                            <a href="updateRenYuan?id=${ry.id}&gongSi=${ry.b}&user=${ry.c}&name=${ry.d}&pwd=${ry.e}" >修改</a>--%>
<%--                            <input style="border-color:#9acfea; background-color: #9acfea" type="submit" value="修改" class="btn-success">--%>
<%--                            &user=--%>
                        </tr>
                    </form>
                </c:forEach>
            </tfoot>

        </table>
<%--        <a href="workbench.jsp" style="color: black;font-size: 18px">返回主页</a>--%>
    </div>
    <script>
        var gongsi=$("#inp").val();
        console.log(gongsi);
        $(function (){
            var a=1;

            $.ajax({
                type: 'post',
                url:'renYuanAjax',
                data:{
                    gongSi: gongsi
                },
                /*async:true,*/
                /* dataType: "String",*/
                success:function (result){
                    console.log(result)
                    //转换为javascript对象
                    var user = eval('('+result+')');
                    var str = "<select id=\"sel1\" class=\"easyui-combobox width\" style=\"height: 30px;width: 150px;\" >";
                    var strcontent ="";
                    for(var i=0;i<user.length;i++){
                        strcontent+="<option>"+user[i]+"</option>"
                    }
                    str+=strcontent+"</select>";
                    $("#content234").html(str);
                    // for (let i = 0;i<result.length;++i){
                    //     $('#gongSis').val(result[i])
                    // }
                    /*alert("success");*/
                },error:function () {
                    alert("error!");
                }
            })
        });
        $("#but1").click(function () {
            let sel=$("#sel1").val();
            console.log(gongsi);
            $(function (){
                var a=1;

                $.ajax({
                    type: 'post',
                    url:'RenYuanSelcet',
                    data:{
                        username: sel
                    },

                    success:function (result){
                        console.log(result)
                        //转换为javascript对象
                        var user = eval('('+result+')');
                        var strcontent ="";
                        for(var i=0;i<user.length;i++){
                            //strcontent+="<td hidden=\"hidden\"><input style=\"background: transparent\" form=\"myform\" class=\"input\" value= "+user[i].id+"></input></td><td style=\"color: black\"><input style=\"background: transparent\" form=\"myform\" name=\"gongSi\" class=\"input\" value="+user[i].B+"></input></td><td name=\"user\" style=\"color: black\"><input style=\"background: transparent\" form=\"myform\" name=\"user\" class=\"input\" value="+user[i].C+"></input></td><td style=\"color: black\"><input style=\"background: transparent\" form=\"myform\" name=\"name\" class=\"input\" value="+user[i].D+"></input></td><td style=\"color: black\"><input style=\"background: transparent\" form=\"myform\" class=\"input\" name=\"pwd\" value="+user[i].E+"></input></td><td><a href=\"deleteRenYuan?id="+user[i].id+"\" style=\"color: black\">删除</a>  </td><br>"
                            strcontent+="<tr><td hidden=\"hidden\"><input name=\"id\" readonly=\"readonly\" value="+user[i].id+"></input></td><td><input readonly=\"readonly\" name=\"gongSi\" value="+user[i].B+"></input></td><td><input onblur=\"myChange(this)\" name=\"user\" value="+user[i].C+"></input></td><td><input onblur = \"myChange(this)\" name=\"name\" value="+user[i].D+"></input></td><td><input onblur = \"myChange(this)\" name=\"pwd\" value="+user[i].E+"></td> <td><a href=\"deleteRenYuan?id="+user[i].id+"\" style=\"color: black\">删除</a></tr>"
                        }
                        //<input form="myform" type="submit" value="修改" class="btn-success">
                        $("#content2").html(strcontent);
                        $("#hidfoot").remove();
                    },error:function () {
                        alert("error!");
                    }
                })
            })

        })

        $('input').change('input',function(){
            arr = []
            let newvalue = this.value;
            let td = this.parentElement;
            let tr = td.parentElement;
            let firsttd = tr.firstElementChild;
            let firstinput = firsttd.firstElementChild
            let id = firstinput.value;
            let column = this.name;
            arr.push({
                id: id,
                newvalue:newvalue,
                column: column,
            })
            console.log(arr)

            $.ajax({
                type: 'post',
                url: 'updateRenYuan',
                data: {
                    jsonData: JSON.stringify(arr)
                },
                dataType: 'json',
                success: function(data){
                    console.log(data)
                },
                error: function(err){
                    alert("修改成功！")
                    console.log(err)
                }
            })
        })

        function myChange(b){
            arr = []
            // let newvalue = this.value;
            // let td = this.parentElement;
            // let tr = td.parentElement;
            // let firsttd = tr.firstElementChild;
            // let firstinput = firsttd.firstElementChild
            // let id = firstinput.value;
            // let column = this.name;

            var newvalue = b.value;
            var td = b.parentElement;
            var tr = td.parentElement;
            var firsttd = tr.firstElementChild;
            var firstinput = firsttd.firstElementChild;
            var id = firstinput.value;
            var column = b.name;

            arr.push({
                id: id,
                newvalue:newvalue,
                column: column,
            })
            console.log(arr)

            $.ajax({
                type: 'post',
                url: 'updateRenYuan',
                data: {
                    jsonData: JSON.stringify(arr)
                },
                dataType: 'json',
                success: function(data){
                    console.log(data)
                },
                error: function(err){
                    console.log(err)
                }
            })
        }
    </script>
</body>

</html>
