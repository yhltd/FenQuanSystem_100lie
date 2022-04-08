<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2020/11/13
  Time: 17:05
  To change this template use File | Settincopy | File Templates.
--%>

<html>
<head>
    <link rel="shortcut icon" href="img/logo.png" />
    <%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
    <%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

    <link rel="stylesheet" href="static/bootstrap-3.3.7-dist/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="static/css/regulations.css"/>
    <script src="static/jquery/jquery.min.js"></script>
    <script src="static/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>
    <title>云合未来分权编辑系统</title>
</head>



<%--<body background="img/bed9ce9cea513a6a5c5ee082d608860a.jpg">--%>
<body >
<div style="text-align: left">
    <h3 style="margin-left: 14px">人员权限规定</h3>
    <span style="margin-left: 14px"></span>输入姓名：<input type="text" name="user" id="putUser" required style="text-align: left">
    <button id="selectPower" style="padding-right: 5px;background-color:#9acfea;;border-radius: 7px;border-color: #9acfea;text-align: left" >查询</button>
    <h6></h6>
    <table border="1" class="table-condensed" style="margin-left: 14px;width:22701px">
        <thead style="text-align: center">
        <td style="width: 227px">公司名称</td>
        <td style="width: 227px">访问人员</td>
        <td style="width: 227px">C</td>
        <td>D</td>
        <td>E</td>
        <td>F</td>
        <td>G</td>
        <td>H</td>
        <td>I</td>
        <td>J</td>
        <td>K</td>
        <td>L</td>
        <td>M</td>
        <td>N</td>
        <td>O</td>
        <td>P</td>
        <td>Q</td>
        <td>R</td>
        <td>S</td>
        <td>T</td>
        <td>U</td>
        <td>V</td>
        <td>W</td>
        <td>X</td>
        <td>Y</td>
        <td>Z</td>
        <td>AA</td>
        <td>AB</td>
        <td>AC</td>
        <td>AD</td>
        <td>AE</td>
        <td>AF</td>
        <td>AG</td>
        <td>AH</td>
        <td>AI</td>
        <td>AJ</td>
        <td>AK</td>
        <td>AL</td>
        <td>AM</td>
        <td>AN</td>
        <td>AO</td>
        <td>AP</td>
        <td>AQ</td>
        <td>AR</td>
        <td>ASS</td>
        <td>AT</td>
        <td>AU</td>
        <td>AV</td>
        <td>AW</td>
        <td>AX</td>
        <td>AY</td>
        <td>AZ</td>
        <td>BA</td>
        <td>BB</td>
        <td>BC</td>
        <td>BD</td>
        <td>BE</td>
        <td>BF</td>
        <td>BG</td>
        <td>BH</td>
        <td>BI</td>
        <td>BJ</td>
        <td>BK</td>
        <td>BL</td>
        <td>BM</td>
        <td>BN</td>
        <td>BO</td>
        <td>BP</td>
        <td>BQ</td>
        <td>BR</td>
        <td>BS</td>
        <td>BT</td>
        <td>BU</td>
        <td>BV</td>
        <td>BW</td>
        <td>BX</td>
        <td>BYY</td>
        <td>BZ</td>
        <td>CA</td>
        <td>CB</td>
        <td>CC</td>
        <td>CD</td>
        <td>CE</td>
        <td>CF</td>
        <td>CG</td>
        <td>CH</td>
        <td>CI</td>
        <td>CJ</td>
        <td>CK</td>
        <td>CL</td>
        <td>CM</td>
        <td>CN</td>
        <td>CO</td>
        <td>CP</td>
        <td>CQ</td>
        <td>CR</td>
        <td>CS</td>
        <td>CT</td>
        <td>CU</td>
        <td>CV</td>
<%--        <td>CW</td>--%>
<%--        <td>CX</td>--%>
<%--        <td>CV</td>--%>
<%--        <td>操作</td>--%>
        </thead>
        <tbody id="contentrenYuan">
        <tfoot id="hide">
        <c:forEach items="${copy1Info}" var="copy">
            <form action="copyUpdate" method="post">
                <tr>
                    <td hidden="hidden"><input type="text" name="id" value="${copy.id}"></td>
                    <td><input type="text" name="quanXian" value="${copy.quanXian}" class="input"
                               style="background: transparent"></td>
                    <td><input type="text" name="B" value="${copy.b}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="C" value="${copy.c}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="D" value="${copy.d}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="E" value="${copy.e}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="F" value="${copy.f}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="G" value="${copy.g}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="H" value="${copy.h}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="I" value="${copy.i}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="J" value="${copy.j}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="K" value="${copy.k}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="L" value="${copy.l}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="M" value="${copy.m}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="N" value="${copy.n}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="O" value="${copy.o}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="P" value="${copy.p}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="Q" value="${copy.q}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="R" value="${copy.r}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="S" value="${copy.s}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="T" value="${copy.t}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="U" value="${copy.u}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="V" value="${copy.v}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="W" value="${copy.w}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="X" value="${copy.x}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="Y" value="${copy.y}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="Z" value="${copy.z}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="AA" value="${copy.AA}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="AB" value="${copy.AB}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="AC" value="${copy.AC}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="AD" value="${copy.AD}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="AE" value="${copy.AE}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="AF" value="${copy.AF}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="AG" value="${copy.AG}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="AH" value="${copy.AH}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="AI" value="${copy.AI}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="AJ" value="${copy.AJ}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="AK" value="${copy.AK}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="AL" value="${copy.AL}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="AM" value="${copy.AM}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="AN" value="${copy.AN}" class="input" style="background: transparent">
                    </td>
                    <td><input name="AO" type="text" value="${copy.AO}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="AP" value="${copy.AP}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="AQ" value="${copy.AQ}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="AR" value="${copy.AR}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="ASS" value="${copy.ASS}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="AT" value="${copy.AT}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="AU" value="${copy.AU}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="AV" value="${copy.AV}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="AW" value="${copy.AW}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="AX" value="${copy.AX}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="AY" value="${copy.AY}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="AZ" value="${copy.AZ}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="BA" value="${copy.BA}" class="input" style="background: transparent">
                    </td>
                    <td style="color: #ffffff;"><input type="text" name="BB" value="${copy.BB}" class="input"
                                                       style="background: transparent"></td>
                    <td><input type="text" name="BC" value="${copy.BC}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="BD" value="${copy.BD}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="BE" value="${copy.BE}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="BF" value="${copy.BF}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="BG" value="${copy.BG}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="BH" value="${copy.BH}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="BI" value="${copy.BI}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="BJ" value="${copy.BJ}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="BK" value="${copy.BK}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="BL" value="${copy.BL}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="BM" value="${copy.BM}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="BN" value="${copy.BN}" class="input" style="background: transparent">
                    </td>
                    <td><input name="BO" type="text" value="${copy.BO}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="BP" value="${copy.BP}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="BQ" value="${copy.BQ}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="BR" value="${copy.BR}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="BS" value="${copy.BS}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="BT" value="${copy.BT}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="BU" value="${copy.BU}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="BV" value="${copy.BV}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="BW" value="${copy.BW}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="BX" value="${copy.BX}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="BYY" value="${copy.BYY}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="BZ" value="${copy.BZ}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="CA" value="${copy.CA}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="CB" value="${copy.CB}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="CC" value="${copy.CC}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="CD" value="${copy.CD}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="CE" value="${copy.CE}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="CF" value="${copy.CF}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="CG" value="${copy.CG}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="CH" value="${copy.CH}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="CI" value="${copy.CI}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="CJ" value="${copy.CJ}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="CK" value="${copy.CK}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="CL" value="${copy.CL}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="CM" value="${copy.CM}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="CN" value="${copy.CN}" class="input" style="background: transparent">
                    </td>
                    <td><input name="CO" type="text" value="${copy.CO}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="CP" value="${copy.CP}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="CQ" value="${copy.CQ}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="CR" value="${copy.CR}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="CS" value="${copy.CS}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="CT" value="${copy.CT}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="CU" value="${copy.CU}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="CV" value="${copy.CV}" class="input" style="background: transparent">
                    </td>
<%--                    <td><input type="text" name="CW" value="${copy.CW}" class="input" style="background: transparent">--%>
<%--                    </td>--%>
<%--                    <td><input type="text" name="CX" value="${copy.CX}" class="input" style="background: transparent">--%>
<%--                    </td>--%>
<%--                    <td><input type="text" name="CX" value="${copy.CV}" class="input" style="background: transparent">--%>
<%--                    </td>--%>
                </tr>
            </form>
        </c:forEach>

        </tfoot>
        </tbody>

    </table>
    <%--    <a href="workbench.jsp" style="color: white;font-size: 18px">返回主页</a>--%>
</div>
<script>
    $(document).ready(function () {
        // var time = new Date();
        // var day = ("0" + time.getDate()).slice(-2);
        // var month = ("0" + (time.getMonth() + 1)).slice(-2);
        // var today = time.getFullYear() + "-" + (month) + "-" + (day);
        // $('#now1').val(today);
        // $('#now2').val(today);
    })
    arr = []
    $('input').change('input', function () {
        console.log("123")
        let newvalue = this.value;
        let td = this.parentElement;
        let tr = td.parentElement;
        let firsttd = tr.firstElementChild;
        let firstinput = firsttd.firstElementChild
        let id = firstinput.value;
        let column = this.name;
        arr.push({
            id: id,
            newvalue: newvalue,
            column: column
        })
        console.log("进来了")
        console.log(arr)

        $.ajax({
            type: 'post',
            url: 'copyUpdate',
            data: {
                jsonData: JSON.stringify(arr)
            },
            dataType: 'json',
            success: function (data) {
                console.log(data)
            },
            error: function (err) {
                console.log(err)
            }
        })
    })

    function myChange(b){
        var newvalue = b.value;
        var td = b.parentElement;
        var tr = td.parentElement;
        var firsttd = tr.firstElementChild;
        var firstinput = firsttd.firstElementChild;
        var id = firstinput.value;
        var column = b.name;

        arr.push({
            id: id,
            newvalue: newvalue,
            column: column
        })

        $.ajax({
            type: 'post',
            url: 'copyUpdate',
            data: {
                jsonData: JSON.stringify(arr)
            },
            dataType: 'json',
            success: function (data) {
                console.log(data)
            },
            error: function (err) {
                console.log(err)
            }
        })
    }

    $('#selectPower').click(function(){
        $.ajax({
            type: 'post',
            url: 'chooseUserName',
            data: {
                chooseName:$('#putUser').val()
            },
            success: function (result) {
                $("#hide").remove();
                console.log(result)
                //转换为javascript对象
                var user = eval('('+result+')');
                var strcontent ="";
                if (user.length == 0){
                    strcontent = "<tr><td hidden=\"hidden\"><input name=\"id\" readonly=\"readonly\" value=" + "></input></td><td><input readonly=\"readonly\" name=\"quanxian\" value="+"></input></td><td><input readonly=\"readonly\" name=\"B\" value="+"></input></td><td><input onblur=\"myChange(this)\" name=\"C\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"D\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"E\" readonly=\"readonly\" value="+"></input></td><td><input name=\"F\" readonly=\"readonly\"  onblur = \"myChange(this)\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"G\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"H\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"I\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"J\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"K\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"L\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"M\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"N\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"O\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"P\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"Q\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"R\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"S\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"T\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"U\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"V\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"W\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"X\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"Y\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"Z\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"AA\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"AB\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"AC\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"AD\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"AE\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"AF\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"AG\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"AH\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"AI\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"AJ\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"AK\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"AL\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"AM\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"AN\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"AO\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"AP\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"AQ\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"AR\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"ASS\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"AT\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"AU\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"AV\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"AW\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"AX\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"AY\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"AZ\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"BA\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"BB\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"BC\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"BD\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"BE\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"BF\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"BG\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"HB\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"BI\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"BJ\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"BK\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"BL\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"BM\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"BN\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"BO\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"BP\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"BQ\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"BR\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"BS\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"BT\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"BU\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"BV\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"BW\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"BX\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"BYY\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"BZ\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"CA\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"CB\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"CC\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"CD\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"CE\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"CF\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"CG\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"CH\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"CI\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"CJ\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"CK\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"CL\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"CM\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"CN\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"CO\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"CP\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"CQ\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"CR\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"CS\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"CT\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"CU\" readonly=\"readonly\" value="+"></input></td><td><input onblur = \"myChange(this)\" name=\"CV\" readonly=\"readonly\" value="+"></input></td></tr>"
                }else {
                    for (var i = 0; i < user.length; i++) {
                        strcontent+="<tr><td hidden=\"hidden\"><input name=\"id\" readonly=\"readonly\" value="+user[i].id+"></input></td><td><input readonly=\"readonly\" name=\"quanxian\" value="+user[i].quanXian+"></input></td><td><input readonly=\"readonly\" name=\"B\" value="+user[i].B+"></input></td><td><input onblur=\"myChange(this)\" name=\"C\" value="+user[i].C+"></input></td><td><input onblur = \"myChange(this)\" name=\"D\" value="+user[i].D+"></input></td><td><input onblur = \"myChange(this)\" name=\"E\" value="+user[i].E+"></input></td><td><input name=\"F\"  onblur = \"myChange(this)\" value="+user[i].F+"></input></td><td><input onblur = \"myChange(this)\" name=\"G\" value="+user[i].G+"></input></td><td><input onblur = \"myChange(this)\" name=\"H\" value="+user[i].H+"></input></td><td><input onblur = \"myChange(this)\" name=\"I\" value="+user[i].I+"></input></td><td><input onblur = \"myChange(this)\" name=\"J\" value="+user[i].J+"></input></td><td><input onblur = \"myChange(this)\" name=\"K\" value="+user[i].K+"></input></td><td><input onblur = \"myChange(this)\" name=\"L\" value="+user[i].L+"></input></td><td><input onblur = \"myChange(this)\" name=\"M\" value="+user[i].M+"></input></td><td><input onblur = \"myChange(this)\" name=\"N\" value="+user[i].N+"></input></td><td><input onblur = \"myChange(this)\" name=\"O\" value="+user[i].O+"></input></td><td><input onblur = \"myChange(this)\" name=\"P\" value="+user[i].P+"></input></td><td><input onblur = \"myChange(this)\" name=\"Q\" value="+user[i].Q+"></input></td><td><input onblur = \"myChange(this)\" name=\"R\" value="+user[i].R+"></input></td><td><input onblur = \"myChange(this)\" name=\"S\" value="+user[i].S+"></input></td><td><input onblur = \"myChange(this)\" name=\"T\" value="+user[i].T+"></input></td><td><input onblur = \"myChange(this)\" name=\"U\" value="+user[i].U+"></input></td><td><input onblur = \"myChange(this)\" name=\"V\" value="+user[i].V+"></input></td><td><input onblur = \"myChange(this)\" name=\"W\" value="+user[i].W+"></input></td><td><input onblur = \"myChange(this)\" name=\"X\" value="+user[i].X+"></input></td><td><input onblur = \"myChange(this)\" name=\"Y\" value="+user[i].Y+"></input></td><td><input onblur = \"myChange(this)\" name=\"Z\" value="+user[i].Z+"></input></td><td><input onblur = \"myChange(this)\" name=\"AA\" value="+user[i].AA+"></input></td><td><input onblur = \"myChange(this)\" name=\"AB\" value="+user[i].AB+"></input></td><td><input onblur = \"myChange(this)\" name=\"AC\" value="+user[i].AC+"></input></td><td><input onblur = \"myChange(this)\" name=\"AD\" value="+user[i].AD+"></input></td><td><input onblur = \"myChange(this)\" name=\"AE\" value="+user[i].AE+"></input></td><td><input onblur = \"myChange(this)\" name=\"AF\" value="+user[i].AF+"></input></td><td><input onblur = \"myChange(this)\" name=\"AG\" value="+user[i].AG+"></input></td><td><input onblur = \"myChange(this)\" name=\"AH\" value="+user[i].AH+"></input></td><td><input onblur = \"myChange(this)\" name=\"AI\" value="+user[i].AI+"></input></td><td><input onblur = \"myChange(this)\" name=\"AJ\" value="+user[i].AJ+"></input></td><td><input onblur = \"myChange(this)\" name=\"AK\" value="+user[i].AK+"></input></td><td><input onblur = \"myChange(this)\" name=\"AL\" value="+user[i].AL+"></input></td><td><input onblur = \"myChange(this)\" name=\"AM\" value="+user[i].AM+"></input></td><td><input onblur = \"myChange(this)\" name=\"AN\" value="+user[i].AN+"></input></td><td><input onblur = \"myChange(this)\" name=\"AO\" value="+user[i].AO+"></input></td><td><input onblur = \"myChange(this)\" name=\"AP\" value="+user[i].AP+"></input></td><td><input onblur = \"myChange(this)\" name=\"AQ\" value="+user[i].AQ+"></input></td><td><input onblur = \"myChange(this)\" name=\"AR\" value="+user[i].AR+"></input></td><td><input onblur = \"myChange(this)\" name=\"ASS\" value="+user[i].ASS+"></input></td><td><input onblur = \"myChange(this)\" name=\"AT\" value="+user[i].AT+"></input></td><td><input onblur = \"myChange(this)\" name=\"AU\" value="+user[i].AU+"></input></td><td><input onblur = \"myChange(this)\" name=\"AV\" value="+user[i].AV+"></input></td><td><input onblur = \"myChange(this)\" name=\"AW\" value="+user[i].AW+"></input></td><td><input onblur = \"myChange(this)\" name=\"AX\" value="+user[i].AX+"></input></td><td><input onblur = \"myChange(this)\" name=\"AY\" value="+user[i].AY+"></input></td><td><input onblur = \"myChange(this)\" name=\"AZ\" value="+user[i].AZ+"></input></td><td><input onblur = \"myChange(this)\" name=\"BA\" value="+user[i].BA+"></input></td><td><input onblur = \"myChange(this)\" name=\"BB\" value="+user[i].BB+"></input></td><td><input onblur = \"myChange(this)\" name=\"BC\" value="+user[i].BC+"></input></td><td><input onblur = \"myChange(this)\" name=\"BD\" value="+user[i].BD+"></input></td><td><input onblur = \"myChange(this)\" name=\"BE\" value="+user[i].BE+"></input></td><td><input onblur = \"myChange(this)\" name=\"BF\" value="+user[i].BF+"></input></td><td><input onblur = \"myChange(this)\" name=\"BG\" value="+user[i].BG+"></input></td><td><input onblur = \"myChange(this)\" name=\"HB\" value="+user[i].BH+"></input></td><td><input onblur = \"myChange(this)\" name=\"BI\" value="+user[i].BI+"></input></td><td><input onblur = \"myChange(this)\" name=\"BJ\" value="+user[i].BJ+"></input></td><td><input onblur = \"myChange(this)\" name=\"BK\" value="+user[i].BK+"></input></td><td><input onblur = \"myChange(this)\" name=\"BL\" value="+user[i].BL+"></input></td><td><input onblur = \"myChange(this)\" name=\"BM\" value="+user[i].BM+"></input></td><td><input onblur = \"myChange(this)\" name=\"BN\" value="+user[i].BN+"></input></td><td><input onblur = \"myChange(this)\" name=\"BO\" value="+user[i].BO+"></input></td><td><input onblur = \"myChange(this)\" name=\"BP\" value="+user[i].BP+"></input></td><td><input onblur = \"myChange(this)\" name=\"BQ\" value="+user[i].BQ+"></input></td><td><input onblur = \"myChange(this)\" name=\"BR\" value="+user[i].BR+"></input></td><td><input onblur = \"myChange(this)\" name=\"BS\" value="+user[i].BS+"></input></td><td><input onblur = \"myChange(this)\" name=\"BT\" value="+user[i].BT+"></input></td><td><input onblur = \"myChange(this)\" name=\"BU\" value="+user[i].BU+"></input></td><td><input onblur = \"myChange(this)\" name=\"BV\" value="+user[i].BV+"></input></td><td><input onblur = \"myChange(this)\" name=\"BW\" value="+user[i].BW+"></input></td><td><input onblur = \"myChange(this)\" name=\"BX\" value="+user[i].BX+"></input></td><td><input onblur = \"myChange(this)\" name=\"BYY\" value="+user[i].BYY+"></input></td><td><input onblur = \"myChange(this)\" name=\"BZ\" value="+user[i].BZ+"></input></td><td><input onblur = \"myChange(this)\" name=\"CA\" value="+user[i].CA+"></input></td><td><input onblur = \"myChange(this)\" name=\"CB\" value="+user[i].CB+"></input></td><td><input onblur = \"myChange(this)\" name=\"CC\" value="+user[i].CC+"></input></td><td><input onblur = \"myChange(this)\" name=\"CD\" value="+user[i].CD+"></input></td><td><input onblur = \"myChange(this)\" name=\"CE\" value="+user[i].CE+"></input></td><td><input onblur = \"myChange(this)\" name=\"CF\" value="+user[i].CF+"></input></td><td><input onblur = \"myChange(this)\" name=\"CG\" value="+user[i].CG+"></input></td><td><input onblur = \"myChange(this)\" name=\"CH\" value="+user[i].CH+"></input></td><td><input onblur = \"myChange(this)\" name=\"CI\" value="+user[i].CI+"></input></td><td><input onblur = \"myChange(this)\" name=\"CJ\" value="+user[i].CJ+"></input></td><td><input onblur = \"myChange(this)\" name=\"CK\" value="+user[i].CK+"></input></td><td><input onblur = \"myChange(this)\" name=\"CL\" value="+user[i].CL+"></input></td><td><input onblur = \"myChange(this)\" name=\"CM\" value="+user[i].CM+"></input></td><td><input onblur = \"myChange(this)\" name=\"CN\" value="+user[i].CN+"></input></td><td><input onblur = \"myChange(this)\" name=\"CO\" value="+user[i].CO+"></input></td><td><input onblur = \"myChange(this)\" name=\"CP\" value="+user[i].CP+"></input></td><td><input onblur = \"myChange(this)\" name=\"CQ\" value="+user[i].CQ+"></input></td><td><input onblur = \"myChange(this)\" name=\"CR\" value="+user[i].CR+"></input></td><td><input onblur = \"myChange(this)\" name=\"CS\" value="+user[i].CS+"></input></td><td><input onblur = \"myChange(this)\" name=\"CT\" value="+user[i].CT+"></input></td><td><input onblur = \"myChange(this)\" name=\"CU\" value="+user[i].CU+"></input></td><td><input onblur = \"myChange(this)\" name=\"CV\" value="+user[i].CV+"></input></td></tr>"                    }
                }



                $("#contentrenYuan").html(strcontent);
            },
            error: function (err) {
                console.log(err)
            }
        })
    })
</script>
</body>

</html>
