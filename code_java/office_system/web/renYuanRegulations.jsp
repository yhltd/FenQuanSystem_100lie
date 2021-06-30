<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2020/11/13
  Time: 17:05
  To change this template use File | Settincopy | File Templates.
--%>

<html>
<head>
    <title>人员规定</title>
</head>
<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<link rel="stylesheet" href="static/bootstrap-3.3.7-dist/css/bootstrap.min.css"/>
<link rel="stylesheet" href="static/css/regulations.css"/>
<script src="static/jquery/jquery.min.js"></script>
<script src="static/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>


<%--<body background="img/bed9ce9cea513a6a5c5ee082d608860a.jpg">--%>
<body >
<div style="text-align: center">
    <h3 style="text-align: center">人员规定</h3>
    输入姓名：<input type="text" name="user" id="putUser" required style="text-align: left">
    <button id="selectPower" style="padding-right: 5px;background-color:#9acfea;;border-radius: 7px;border-color: #9acfea;text-align: left" >查询</button>
    <table border="1" class="table-condensed" >
        <thead style="text-align: center">
            <td>公司名称</td>
            <td>访问人员</td>
            <td>C</td>
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
            <td>CW</td>
            <td>CX</td>
           <%-- <td>操作</td>--%>
        </thead>
        <tbody id="contentrenYuan">

        </tbody>
        <%--<c:forEach items="${copy1Info}" var="copy">
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
                    <td><input type="text" name="CW" value="${copy.CW}" class="input" style="background: transparent">
                    </td>
                    <td><input type="text" name="CX" value="${copy.CX}" class="input" style="background: transparent">
                    </td>
                </tr>
            </form>
        </c:forEach>--%>
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

    $('#selectPower').click(function(){

        $.ajax({
            type: 'post',
            url: 'chooseUserName',
            data: {
                chooseName:$('#putUser').val()
            },
            success: function (result) {
                console.log(result)
                //转换为javascript对象
                var user = eval('('+result+')');
                var strcontent ="";

                for(var i=0;i<user.length;i++){
                    strcontent+="<td>"+user[i].B+"</td><td>"+user[i].quanXian+"</td><td>"+user[i].C+"</td><td>"+user[i].D+"</td><td>"+user[i].E+"</td><td>"+user[i].E+"</td><td>"+user[i].F+"</td><td>"+user[i].G+"</td><td>"+user[i].H+"</td><td>"+user[i].I+"</td><td>"+user[i].J+"</td><td>"+user[i].K+"</td><td>"+user[i].L+"</td><td>"+user[i].M+"</td><td>"+user[i].N+"</td><td>"+user[i].O+"</td><td>"+user[i].P+"</td><td>"+user[i].Q+"</td><td>"+user[i].R+"</td><td>"+user[i].S+"</td><td>"+user[i].T+"</td><td>"+user[i].U+"</td><td>"+user[i].V+"</td><td>"+user[i].W+"</td><td>"+user[i].X+"</td><td>"+user[i].Y+"</td><td>"+user[i].Z+"</td><td>"+user[i].AA+"</td><td>"+user[i].AB+"</td><td>"+user[i].AC+"</td><td>"+user[i].AD+"</td><td>"+user[i].AE+"</td><td>"+user[i].AF+"</td><td>"+user[i].AG+"</td><td>"+user[i].AH+"</td><td>"+user[i].AI+"</td><td>"+user[i].AJ+"</td><td>"+user[i].AK+"</td><td>"+user[i].AL+"</td><td>"+user[i].AM+"</td><td>"+user[i].AN+"</td><td>"+user[i].AO+"</td><td>"+user[i].AP+"</td><td>"+user[i].AQ+"</td><td>"+user[i].AR+"</td><td>"+user[i].ASS+"</td><td>"+user[i].AT+"</td><td>"+user[i].AU+"</td><td>"+user[i].AV+"</td><td>"+user[i].AW+"</td><td>"+user[i].AX+"</td><td>"+user[i].AY+"</td><td>"+user[i].AZ+"</td><td>"+user[i].BA+"</td><td>"+user[i].BB+"</td><td>"+user[i].BC+"</td><td>"+user[i].BD+"</td><td>"+user[i].BE+"</td><td>"+user[i].BF+"</td><td>"+user[i].BG+"</td><td>"+user[i].BH+"</td><td>"+user[i].BI+"</td><td>"+user[i].BJ+"</td><td>"+user[i].BK+"</td><td>"+user[i].BL+"</td><td>"+user[i].BM+"</td><td>"+user[i].BN+"</td><td>"+user[i].BO+"</td><td>"+user[i].BP+"</td><td>"+user[i].BQ+"</td><td>"+user[i].BR+"</td><td>"+user[i].BS+"</td><td>"+user[i].BT+"</td><td>"+user[i].BU+"</td><td>"+user[i].BV+"</td><td>"+user[i].BW+"</td><td>"+user[i].BX+"</td><td>"+user[i].BYY+"</td><td>"+user[i].BZ+"</td><td>"+user[i].CA+"</td><td>"+user[i].CB+"</td><td>"+user[i].CC+"</td><td>"+user[i].CD+"</td><td>"+user[i].CE+"</td><td>"+user[i].CF+"</td><td>"+user[i].CG+"</td><td>"+user[i].CH+"</td><td>"+user[i].CI+"</td><td>"+user[i].CJ+"</td><td>"+user[i].CK+"</td><td>"+user[i].CL+"</td><td>"+user[i].CM+"</td><td>"+user[i].CN+"</td><td>"+user[i].CO+"</td><td>"+user[i].CP+"</td><td>"+user[i].CQ+"</td><td>"+user[i].CR+"</td><td>"+user[i].CS+"</td><td>"+user[i].CT+"</td><td>"+user[i].CU+"</td><td>"+user[i].CV+"</td><td>"+user[i].CW+"</td><td>"+user[i].CX+"</td>"
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
