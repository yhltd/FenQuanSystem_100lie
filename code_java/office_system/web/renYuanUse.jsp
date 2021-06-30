<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2020/11/11
  Time: 13:23
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<link rel="stylesheet" href="static/bootstrap-3.3.7-dist/css/bootstrap.min.css"/>
<link rel="stylesheet" href="static/css/regulations.css"/>
<script src="static/jquery/jquery.min.js"></script>
<script src="static/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>

<html>
<head>
  <title>使用人员</title>
</head>
<body style="background-color: #31708f" >
<%--<div id="div1" style=" width:100%;height:100%; ">--%>
   <%-- <style >
        /*#div1{
            background: #99CCFF;
            width：100%;
            hight:100%;
        }*/
    </style>--%>
    <div style="text-align: center">
        <h3 style="margin-right: 50px">使用人员</h3>
        <div style="margin-left: 0px">
            <%--<a href="workbench.jsp" style="color: black;font-size: 18px">返回主页</a>--%>
            <%--<a href="useRenYuan" style="color: black;font-size: 18px">刷新</a>--%>
            <input type="text" id="delete"name="delete"  placeholder = "请输入要删除的列!!!">
            <button onclick="deleteRenYuan()" style="border-color:#9acfea;background-color:#9acfea;border-radius: 7px;">删除</button>
        </div>
        <table border="1" class="table-condensed" id="gsTable"  >
            <tr style="text-align: center">
                <td>公司名称</td><td>A</td><td>B</td> <td>C</td> <td>D</td> <td>E</td> <td>F</td> <td>G</td> <td>H</td> <td>I</td> <td>J</td> <td>K</td> <td>L</td> <td>M</td> <td>N</td> <td>O</td> <td>P</td> <td>Q</td> <td>R</td> <td>S</td> <td>T</td> <td>U</td> <td>V</td> <td>W</td> <td>X</td> <td>Y</td> <td>Z</td>
                <td>AA</td> <td>AB</td> <td>AC</td> <td>AD</td> <td>AE</td> <td>AF</td> <td>AG</td> <td>AH</td> <td>AI</td> <td>AJ</td> <td>AK</td> <td>AL</td> <td>AM</td> <td>AN</td> <td>AO</td> <td>AP</td> <td>AQ</td> <td>AR</td> <td>ASS</td> <td>AT</td> <td>AU</td> <td>AV</td> <td>AW</td> <td>AX</td> <td>AY</td> <td>AZ</td>
                <td>BA</td> <td>BB</td> <td>BC</td> <td>BD</td> <td>BE</td> <td>BF</td> <td>BG</td> <td>BH</td> <td>BI</td> <td>BJ</td> <td>BK</td> <td>BL</td> <td>BM</td> <td>BN</td> <td>BO</td> <td>BP</td> <td>BQ</td> <td>BR</td> <td>BSS</td> <td>BT</td> <td>BU</td> <td>BV</td> <td>BW</td> <td>BX</td> <td>BYY</td> <td>BZ</td>
                <td>CA</td> <td>CB</td> <td>CC</td> <td>CD</td> <td>CE</td> <td>CF</td> <td>CG</td> <td>CH</td> <td>CI</td> <td>CJ</td> <td>CK</td> <td>CL</td> <td>CM</td> <td>CN</td> <td>CO</td> <td>CP</td> <td>CQ</td> <td>CR</td> <td>CS</td> <td>CT</td> <td>CU</td> <td>CV</td>
            </tr>
            <c:forEach items="${renyuanInfo}" var="gs">
                <tr>
                    <td hidden="hidden"><input type="text" name="id" value="${gs.id}"></td>
                    <td><input type="text" name="公司" value="${gs.公司}" class="input" style="background: transparent"></td>  <td><input type="text" name="A" value="${gs.a}" class="input" style="background: transparent"></td>  <td><input type="text" name="B" value="${gs.b}" class="input" style="background: transparent"></td> <td><input type="text" name="C" value="${gs.c}" class="input" style="background: transparent"></td> <td><input type="text" name="D" value="${gs.d}" class="input" style="background: transparent"></td> <td><input type="text" name="E" value="${gs.e}" class="input" style="background: transparent"></td> <td><input type="text" name="F" value="${gs.f}" class="input" style="background: transparent"></td> <td><input type="text" name="G" value="${gs.g}" class="input" style="background: transparent"></td> <td><input type="text" name="H" value="${gs.h}" class="input" style="background: transparent"></td> <td><input type="text" name="I" value="${gs.i}" class="input" style="background: transparent"></td> <td><input type="text" name="J" value="${gs.j}" class="input" style="background: transparent"></td> <td><input type="text" name="K" value="${gs.k}" class="input" style="background: transparent"></td> <td><input type="text" name="L" value="${gs.l}" class="input" style="background: transparent"></td> <td><input type="text" name="M" value="${gs.m}" class="input" style="background: transparent"></td> <td><input type="text" name="N" value="${gs.n}" class="input" style="background: transparent"></td> <td><input type="text" name="O" value="${gs.o}" class="input" style="background: transparent"></td> <td><input type="text" name="P" value="${gs.p}" class="input" style="background: transparent"></td> <td><input type="text" name="Q" value="${gs.q}" class="input" style="background: transparent"></td> <td><input type="text" name="R" value="${gs.r}" class="input" style="background: transparent"></td> <td><input type="text" name="S" value="${gs.s}" class="input" style="background: transparent"></td> <td><input type="text" name="T" value="${gs.t}" class="input" style="background: transparent"></td> <td><input type="text" name="U" value="${gs.u}" class="input" style="background: transparent"></td> <td><input type="text" name="V" value="${gs.v}" class="input" style="background: transparent"></td> <td><input type="text" name="W" value="${gs.w}" class="input" style="background: transparent"></td> <td><input type="text" name="X" value="${gs.x}" class="input" style="background: transparent"></td> <td><input type="text" name="Y" value="${gs.y}" class="input" style="background: transparent"></td> <td><input type="text" name="Z" value="${gs.z}" class="input" style="background: transparent"></td>
                    <td><input type="text" name="AA" value="${gs.AA}" class="input" style="background: transparent"></td> <td><input type="text" name="AB" value="${gs.AB}" class="input" style="background: transparent"></td> <td><input type="text" name="AC" value="${gs.AC}" class="input" style="background: transparent"></td> <td><input type="text" name="AD" value="${gs.AD}" class="input" style="background: transparent"></td> <td><input type="text" name="AE" value="${gs.AE}" class="input" style="background: transparent"></td> <td><input type="text" name="AF" value="${gs.AF}" class="input" style="background: transparent"></td> <td><input type="text" name="AG" value="${gs.AG}" class="input" style="background: transparent"></td> <td><input type="text" name="AH" value="${gs.AH}" class="input" style="background: transparent"></td> <td><input type="text" name="AI" value="${gs.AI}" class="input" style="background: transparent"></td> <td><input type="text" name="AJ" value="${gs.AJ}" class="input" style="background: transparent"></td> <td><input type="text" name="AK" value="${gs.AK}" class="input" style="background: transparent"></td> <td><input type="text" name="AL" value="${gs.AL}" class="input" style="background: transparent"></td> <td><input type="text" name="AM" value="${gs.AM}" class="input" style="background: transparent"></td> <td><input type="text" name="AN" value="${gs.AN}" class="input" style="background: transparent"></td> <td><input name="AO" type="text" value="${gs.AO}" class="input" style="background: transparent"></td> <td><input type="text" name="AP" value="${gs.AP}" class="input" style="background: transparent"></td> <td><input type="text" name="AQ" value="${gs.AQ}" class="input" style="background: transparent"></td> <td><input type="text" name="AR" value="${gs.AR}" class="input" style="background: transparent"></td> <td><input type="text" name="ASS" value="${gs.ASS}" class="input" style="background: transparent"></td> <td><input type="text" name="AT" value="${gs.AT}" class="input" style="background: transparent"></td> <td><input type="text" name="AU" value="${gs.AU}" class="input" style="background: transparent"></td> <td><input type="text" name="AV" value="${gs.AV}" class="input" style="background: transparent"></td> <td><input type="text" name="AW" value="${gs.AW}" class="input" style="background: transparent"></td> <td><input type="text" name="AX" value="${gs.AX}" class="input" style="background: transparent"></td> <td><input type="text" name="AY" value="${gs.AY}" class="input" style="background: transparent"></td> <td><input type="text" name="AZ" value="${gs.AZ}" class="input" style="background: transparent"></td>
                    <td><input type="text" name="BA" value="${gs.BA}" class="input" style="background: transparent"></td> <td><input type="text" name="BB" value="${gs.BB}" class="input" style="background: transparent"></td> <td><input type="text" name="BC" value="${gs.BC}" class="input" style="background: transparent"></td> <td><input type="text" name="BD" value="${gs.BD}" class="input" style="background: transparent"></td> <td><input type="text" name="BE" value="${gs.BE}" class="input" style="background: transparent"></td> <td><input type="text" name="BF" value="${gs.BF}" class="input" style="background: transparent"></td> <td><input type="text" name="BG" value="${gs.BG}" class="input" style="background: transparent"></td> <td><input type="text" name="BH" value="${gs.BH}" class="input" style="background: transparent"></td> <td><input type="text" name="BI" value="${gs.BI}" class="input" style="background: transparent"></td> <td><input type="text" name="BJ" value="${gs.BJ}" class="input" style="background: transparent"></td> <td><input type="text" name="BK" value="${gs.BK}" class="input" style="background: transparent"></td> <td><input type="text" name="BL" value="${gs.BL}" class="input" style="background: transparent"></td> <td><input type="text" name="BM" value="${gs.BM}" class="input" style="background: transparent"></td> <td><input type="text" name="BN" value="${gs.BN}" class="input" style="background: transparent"></td> <td><input name="BO" type="text" value="${gs.BO}" class="input" style="background: transparent"></td> <td><input type="text" name="BP" value="${gs.BP}" class="input" style="background: transparent"></td> <td><input type="text" name="BQ" value="${gs.BQ}" class="input" style="background: transparent"></td> <td><input type="text" name="BR" value="${gs.BR}" class="input" style="background: transparent"></td> <td><input type="text" name="BS" value="${gs.BS}" class="input" style="background: transparent"></td> <td><input type="text" name="BT" value="${gs.BT}" class="input" style="background: transparent"></td> <td><input type="text" name="BU" value="${gs.BU}" class="input" style="background: transparent"></td> <td><input type="text" name="BV" value="${gs.BV}" class="input" style="background: transparent"></td> <td><input type="text" name="BW" value="${gs.BW}" class="input" style="background: transparent"></td> <td><input type="text" name="BX" value="${gs.BX}" class="input" style="background: transparent"></td> <td><input type="text" name="BYY" value="${gs.BYY}" class="input" style="background: transparent"></td> <td><input type="text" name="BZ" value="${gs.BZ}" class="input" style="background: transparent"></td>
                    <td><input type="text" name="CA" value="${gs.CA}" class="input" style="background: transparent"></td> <td><input type="text" name="CB" value="${gs.CB}" class="input" style="background: transparent"></td> <td><input type="text" name="CC" value="${gs.CC}" class="input" style="background: transparent"></td> <td><input type="text" name="CD" value="${gs.CD}" class="input" style="background: transparent"></td> <td><input type="text" name="CE" value="${gs.CE}" class="input" style="background: transparent"></td> <td><input type="text" name="CF" value="${gs.CF}" class="input" style="background: transparent"></td> <td><input type="text" name="CG" value="${gs.CG}" class="input" style="background: transparent"></td> <td><input type="text" name="CH" value="${gs.CH}" class="input" style="background: transparent"></td> <td><input type="text" name="CI" value="${gs.CI}" class="input" style="background: transparent"></td> <td><input type="text" name="CJ" value="${gs.CJ}" class="input" style="background: transparent"></td> <td><input type="text" name="CK" value="${gs.CK}" class="input" style="background: transparent"></td> <td><input type="text" name="CL" value="${gs.CL}" class="input" style="background: transparent"></td> <td><input type="text" name="CM" value="${gs.CM}" class="input" style="background: transparent"></td> <td><input type="text" name="CN" value="${gs.CN}" class="input" style="background: transparent"></td> <td><input name="CO" type="text" value="${gs.CO}" class="input" style="background: transparent"></td> <td><input type="text" name="CP" value="${gs.CP}" class="input" style="background: transparent"></td> <td><input type="text" name="CQ" value="${gs.CQ}" class="input" style="background: transparent"></td> <td><input type="text" name="CR" value="${gs.CR}" class="input" style="background: transparent"></td> <td><input type="text" name="CS" value="${gs.CS}" class="input" style="background: transparent"></td> <td><input type="text" name="CT" value="${gs.CT}" class="input" style="background: transparent"></td> <td><input type="text" name="CU" value="${gs.CU}" class="input" style="background: transparent"></td> <td><input type="text" name="CV" value="${gs.CV}" class="input" style="background: transparent"></td>
                </tr>
            </c:forEach>
        </table>

    </div>

<%--</div>--%>
<%--background="img/ba668ebbf140a440821ae93daadb9089.jpg"--%>
<script type="text/javascript">
    arr = []
    function deleteRenYuan(){
        let column = $('#delete').val();
        console.log(column)
        $.ajax({
            type: 'post',
            url:'delteRenYuan',
            data:{
                column:column
            },
            dataType: "text",
            success:function (result){
                console.log(result)
                alert("删除成功!!!")
                ShuaXin();
            }
        })
    }

    /*刷新*/
    let ShuaXin = function (){
        $.ajax({
            type: 'post',
            url:'useRenYuan',
            data:{

            },
            dataType: "text",
            success:function (result){

            }
        })
    }
</script>
</body>

</html>
