<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2020/11/21
  Time: 10:56
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<link rel="stylesheet" href="static/bootstrap-3.3.7-dist/css/bootstrap.min.css"/><!--这是bootstrap css文件-->
<link rel="stylesheet" href="static/css/regulations.css"/>
<script src="static/jquery/jquery.min.js"></script> <!--这是jquery-->
<script src="static/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script><!--这是bootstrap js文件-->

<script src="static/easyui/jquery.easyui.min.js"></script><!--这是jQuery easyUI文件-->
<script src="static/easyui/locale/easyui-lang-zh_CN.js"></script><!--这是easyui中文包文件-->
<link rel="stylesheet" type="text/css" href="static/easyui/themes/default/easyui.css"><!--这是easyui默认主题CSS文件-->
<link rel="stylesheet" type="text/css" href="static/easyui/themes/icon.css"><!--这是easyui图标CSS文件-->
<link rel="stylesheet" type="text/css" href="static/easyui/demo/demo.css"><!--这是easyui图标demo样式-->
<script type="text/javascript" src="static/echarts/echarts.min.js"></script>

<html>
<head>
    <%--    <link rel="shortcut icon" href="img/logo.jpg" />--%>
    <%--    <title>云合未来分权编辑系统</title>--%>
</head>
<body>
<%--background="img/b99b47d72f4862c3367aea38418795b9.jpg"--%>
<%--    <div style="float: right;margin-right: 100px;margin-bottom: 0px;padding-bottom: 0px">--%>
<%--        <a href="renYuan" style="text-align: right;font-size: medium;color: black">用户:${userName}</a><br>--%>
<%--        <span style="font-size: medium">公司:${GongSi}</span><br>--%>
<%--        <a href="logout">退出</a>--%>
<%--    </div>--%>
<%--    <img src="img/20201124113000.jpg" style="width: 80px;height: 70px;float: left;margin-left: 50px;margin-bottom: 0px"/>--%>
<%--    <h2 style="margin-top: 25px;padding-left: 30px">公司管理系统</h2>--%>
<div class="easyui-layout" style="width:1200px;height:550px;">
    <%--        <div data-options="region:'west',split:true" title="" style="width:230px">--%>
    <%--            <div class="easyui-accordion" data-options="fit:true,border:false">--%>

    <%--                <div title="公司"  data-options="iconCls:'icon-reload',selected:true" style="padding:10px">--%>
    <%--&lt;%&ndash;                    <a href="gongSiRegister.jsp" style="color: black">公司添加</a><br>&ndash;%&gt;--%>
    <%--&lt;%&ndash;                       &lt;%&ndash; <a href="#gstj" id="tt2" style="color: black">公司添加</a><br>&ndash;%&gt;&ndash;%&gt;--%>
    <%--&lt;%&ndash;                    <a href="gongSi" style="color: black">公司规定</a><br>&ndash;%&gt;--%>
    <%--&lt;%&ndash;                    <a href="barChart.jsp" style="color: black">公司柱状图</a><br>&ndash;%&gt;--%>
    <%--&lt;%&ndash;                    <a href="javascript:void(0)" onclick="showcontent('公司添加')"><p style="font-size: 17px">公司添加</p></a>&ndash;%&gt;--%>
    <%--                    <a href="javascript:void(0)" onclick="showcontent('公司规定')"><p style="font-size: 17px"><img src="img/gs2.png" style="height: 16px;width: 16px">公司规定</p></a>--%>
    <%--                    <a href="javascript:void(0)" onclick="showcontent('公司柱状图')"><p style="font-size: 17px"><img src="img/gs3.png" style="height: 16px;width: 16px">公司柱状图</p></a>--%>
    <%--                    <a href="javascript:void(0)" onclick="showcontent('工作台')"><p style="font-size: 17px"><img src="img/gs3.png" style="height: 16px;width: 16px">工作台</p></a>--%>
    <%--                </div>--%>
    <%--                <div title="人员" data-options="iconCls:'icon-man'" style="padding:10px;">--%>
    <%--&lt;%&ndash;                    <a href="renYuanRegister.jsp" style="color: black">人员添加</a><br>&ndash;%&gt;--%>
    <%--&lt;%&ndash;                    <a href="renYuan" style="color: black">人员管理</a><br>&ndash;%&gt;--%>
    <%--&lt;%&ndash;                    <a href="renYuanRegulations.jsp" style="color: black">人员权限规定</a><br>&ndash;%&gt;--%>
    <%--&lt;%&ndash;                    <a href="renYuanInit" style="color: black">人员柱状图</a><br>&ndash;%&gt;--%>
    <%--    &lt;%&ndash;&ndash;%&gt;--%>
    <%--                    <a href="javascript:void(0)" onclick="showcontent('人员添加')"><p style="font-size: 17px"><img src="img/ry2.png" style="height: 16px;width: 16px">人员添加</p></a>--%>
    <%--                    <a href="javascript:void(0)" onclick="showcontent('人员管理')"><p style="font-size: 17px"><img src="img/ry3.png" style="height: 16px;width: 16px">人员管理</p></a>--%>
    <%--                    <a href="javascript:void(0)" onclick="showcontent('人员权限规定')"><p style="font-size: 17px"><img src="img/ry4.png" style="height: 16px;width: 16px">人员权限规定</p></a>--%>
    <%--                    <a href="javascript:void(0)" onclick="showcontent('人员柱状图')"><p style="font-size: 17px"><img src="img/ry5.png" style="height: 16px;width: 16px">人员柱状图</p></a>--%>

    <%--                </div>--%>
    <%--                <div title="操作" data-options="iconCls:'icon-search'" style="padding:10px">--%>
    <%--&lt;%&ndash;                    <a href="useRenYuan" style="color: black">人员使用情况</a><br>&ndash;%&gt;--%>
    <%--&lt;%&ndash;                    &lt;%&ndash;<a href="test.jsp" style="color: black">测试</a><br>&ndash;%&gt;&ndash;%&gt;--%>
    <%--&lt;%&ndash;                    <a href="logout" id="logout" style="color: black">退出</a><br>&ndash;%&gt;--%>
    <%--                    <a href="javascript:void(0)" onclick="showcontent('人员使用情况')"><p style="font-size: 17px"><img src="img/cz2.png" style="height: 16px;width: 16px">人员使用情况</p></a>--%>
    <%--                    <a href="logout" id="logout"><p style="font-size: 17px"><img src="img/cz3.png" style="height: 16px;width: 16px">退出</p></a>--%>
    <%--                </div>--%>
    <%--            </div>--%>
    <%--        </div>--%>
    <div data-options="region:'center',iconCls:'icon-ok'" style="margin-right: 10px">
        <%--            <div id="test" class="easyui-tabs" data-options="fit:true,border:false,plain:true">--%>
        <div  title="工作台" style=" height: 580px;width: 1000px;float: left">
            <h6>   </h6>
            <div style="user-select: none; ">
                <input id="isLot" type="checkbox" style="margin-left: 14px"/>
                <label for="isLot" style="padding-right: 5px">是否即时保存</label>
                <button id="sav" style="padding-right: 5px;background-color: #9acfea;border-radius: 7px;border-color: #9acfea">保存</button>
                开始日期：<input class="easyui-datebox" name="begindate" id="begindate" data-options="formatter:myformatter,parser:myparser"></input>
                结束日期：<input class="easyui-datebox" name="enddate" id="enddate" data-options="formatter:myformatter,parser:myparser"></input>
                <button id="selectDate"  style="padding-right: 5px;background-color: #9acfea;border-radius: 7px;border-color: #9acfea">查询</button>
                <button id="insert"  style=" padding-right: 5px;background-color: #9acfea;border-radius: 7px;border-color: #9acfea">添加</button>
                <%--<button id="getAll" style="margin-right: -100px;background-color: #9acfea;border-radius: 7px;border-color: #9acfea">获取数据</button>--%>
            </div>
            <h6>   </h6>
            <table border="1" class="table-condensed" style="margin-left: 14px">
                <thead style="text-align: center;font-weight: bold">
                <td>ID</td><td>人员</td><td>公司</td> <td>C</td> <td>D</td> <td>E</td> <td>F</td> <td>G</td> <td>H</td> <td>I</td> <td>J</td> <td>K</td> <td>L</td> <td>M</td> <td>N</td> <td>O</td> <td>P</td> <td>Q</td> <td>R</td> <td>S</td> <td>T</td> <td>U</td> <td>V</td> <td>W</td> <td>X</td> <td>Y</td> <td>Z</td>
                <td>AA</td> <td>AB</td> <td>AC</td> <td>AD</td> <td>AE</td> <td>AF</td> <td>AG</td> <td>AH</td> <td>AI</td> <td>AJ</td> <td>AK</td> <td>AL</td> <td>AM</td> <td>AN</td> <td>AO</td> <td>AP</td> <td>AQ</td> <td>AR</td> <td>ASS</td> <td>AT</td> <td>AU</td> <td>AV</td> <td>AW</td> <td>AX</td> <td>AY</td> <td>AZ</td>
                <td>BA</td> <td>BB</td> <td>BC</td> <td>BD</td> <td>BE</td> <td>BF</td> <td>BG</td> <td>BH</td> <td>BI</td> <td>BJ</td> <td>BK</td> <td>BL</td> <td>BM</td> <td>BN</td> <td>BO</td> <td>BP</td> <td>BQ</td> <td>BR</td> <td>BS</td> <td>BT</td> <td>BU</td> <td>BV</td> <td>BW</td> <td>BX</td> <td>BYY</td> <td>BZ</td>
                <td>CA</td> <td>CB</td> <td>CC</td> <td>CD</td> <td>CE</td> <td>CF</td> <td>CG</td> <td>CH</td> <td>CI</td> <td>CJ</td> <td>CK</td> <td>CL</td> <td>CM</td> <td>CN</td> <td>CO</td> <td>CP</td> <td>CQ</td> <td>CR</td> <td>CS</td> <td>CT</td> <td>CU</td> <td>CV</td>
                </thead>
                <tbody id="content" style="text-align: center">
                </tbody>
                <tfoot>

                <td><input type="text" name="id"  class="input" style="background: transparent" ></td><td><input type="text" name="renYuan" id="renYuan" class="input" style="background: transparent" ></td> <td><input type="text" name="gongSi" id="gongSi" class="input" style="background: transparent" ></td>
                <td><input type="text" name="C" class="input" style="background: transparent"></td> <td><input type="text" name="D"  class="input" style="background: transparent"></td> <td><input type="text" name="E"  class="input" style="background: transparent"></td> <td><input type="text" name="F"  class="input" style="background: transparent"></td> <td><input type="text" name="G"  class="input" style="background: transparent"></td> <td><input type="text" name="H"  class="input" style="background: transparent"></td> <td><input type="text" name="I"  class="input" style="background: transparent"></td> <td><input type="text" name="J"  class="input" style="background: transparent"></td> <td><input type="text" name="K"  class="input" style="background: transparent"></td> <td><input type="text" name="L"  class="input" style="background: transparent"></td> <td><input type="text" name="M"  class="input" style="background: transparent"></td> <td><input type="text" name="N"  class="input" style="background: transparent"></td> <td><input type="text" name="O"  class="input" style="background: transparent"></td> <td><input type="text" name="P"  class="input" style="background: transparent"></td> <td><input type="text" name="Q"  class="input" style="background: transparent"></td> <td><input type="text" name="R"  class="input" style="background: transparent"></td> <td><input type="text" name="S"  class="input" style="background: transparent"></td> <td><input type="text" name="T"  class="input" style="background: transparent"></td> <td><input type="text" name="U"  class="input" style="background: transparent"></td> <td><input type="text" name="V"  class="input" style="background: transparent"></td> <td><input type="text" name="W"  class="input" style="background: transparent"></td> <td><input type="text" name="X"  class="input" style="background: transparent"></td> <td><input type="text" name="Y"  class="input" style="background: transparent"></td> <td><input type="text" name="Z"  class="input" style="background: transparent"></td>
                <td><input type="text" name="AA" class="input" style="background: transparent"></td> <td><input type="text" name="AB"  class="input" style="background: transparent"></td> <td><input type="text" name="AC"  class="input" style="background: transparent"></td> <td><input type="text" name="AD"  class="input" style="background: transparent"></td> <td><input type="text" name="AE"  class="input" style="background: transparent"></td> <td><input type="text" name="AF"  class="input" style="background: transparent"></td> <td><input type="text" name="AG"  class="input" style="background: transparent"></td> <td><input type="text" name="AH"  class="input" style="background: transparent"></td> <td><input type="text" name="AI"  class="input" style="background: transparent"></td> <td><input type="text" name="AJ"  class="input" style="background: transparent"></td> <td><input type="text" name="AK"  class="input" style="background: transparent"></td> <td><input type="text" name="AL"  class="input" style="background: transparent"></td> <td><input type="text" name="AM"  class="input" style="background: transparent"></td> <td><input type="text" name="AN"  class="input" style="background: transparent"></td> <td><input name="AO" type="text"  class="input" style="background: transparent"></td> <td><input type="text" name="AP"  class="input" style="background: transparent"></td> <td><input type="text" name="AQ"  class="input" style="background: transparent"></td> <td><input type="text" name="AR"  class="input" style="background: transparent"></td> <td><input type="text" name="ASS"  class="input" style="background: transparent"></td> <td><input type="text" name="AT"  class="input" style="background: transparent"></td> <td><input type="text" name="AU"  class="input" style="background: transparent"></td> <td><input type="text" name="AV"  class="input" style="background: transparent"></td> <td><input type="text" name="AW"  class="input" style="background: transparent"></td> <td><input type="text" name="AX"  class="input" style="background: transparent"></td> <td><input type="text" name="AY"  class="input" style="background: transparent"></td> <td><input type="text" name="AZ"  class="input" style="background: transparent"></td>
                <td><input type="text" name="BA"  class="input" style="background: transparent"></td> <td style="color: #ffffff;"><input type="text" name="BB" class="input" style="background: transparent"></td> <td><input type="text" name="BC"  class="input" style="background: transparent"></td> <td><input type="text" name="BD"  class="input" style="background: transparent"></td> <td><input type="text" name="BE"  class="input" style="background: transparent"></td> <td><input type="text" name="BF"  class="input" style="background: transparent"></td> <td><input type="text" name="BG"  class="input" style="background: transparent"></td> <td><input type="text" name="BH"  class="input" style="background: transparent"></td> <td><input type="text" name="BI"  class="input" style="background: transparent"></td> <td><input type="text" name="BJ"  class="input" style="background: transparent"></td> <td><input type="text" name="BK"  class="input" style="background: transparent"></td> <td><input type="text" name="BL"  class="input" style="background: transparent"></td> <td><input type="text" name="BM"  class="input" style="background: transparent"></td> <td><input type="text" name="BN"  class="input" style="background: transparent"></td> <td><input name="BO" type="text"  class="input" style="background: transparent"></td> <td><input type="text" name="BP"  class="input" style="background: transparent"></td> <td><input type="text" name="BQ"  class="input" style="background: transparent"></td> <td><input type="text" name="BR"  class="input" style="background: transparent"></td> <td><input type="text" name="BS"  class="input" style="background: transparent"></td> <td><input type="text" name="BT"  class="input" style="background: transparent"></td> <td><input type="text" name="BU"  class="input" style="background: transparent"></td> <td><input type="text" name="BV"  class="input" style="background: transparent"></td> <td><input type="text" name="BW"  class="input" style="background: transparent"></td> <td><input type="text" name="BX"  class="input" style="background: transparent"></td> <td><input type="text" name="BYY"  class="input" style="background: transparent"></td> <td><input type="text" name="BZ"  class="input" style="background: transparent"></td>
                <td><input type="text" name="CA"  class="input" style="background: transparent"></td> <td><input type="text" name="CB" class="input" style="background: transparent"></td> <td><input type="text" name="CC"  class="input" style="background: transparent"></td> <td><input type="text" name="CD"  class="input" style="background: transparent"></td> <td><input type="text" name="CE"  class="input" style="background: transparent"></td> <td><input type="text" name="CF"  class="input" style="background: transparent"></td> <td><input type="text" name="CG"  class="input" style="background: transparent"></td> <td><input type="text" name="CH"  class="input" style="background: transparent"></td> <td><input type="text" name="CI"  class="input" style="background: transparent"></td> <td><input type="text" name="CJ"  class="input" style="background: transparent"></td> <td><input type="text" name="CK"  class="input" style="background: transparent"></td> <td><input type="text" name="CL"  class="input" style="background: transparent"></td> <td><input type="text" name="CM"  class="input" style="background: transparent"></td> <td><input type="text" name="CN"  class="input" style="background: transparent"></td> <td><input name="CO" type="text"  class="input" style="background: transparent"></td> <td><input type="text" name="CP"  class="input" style="background: transparent"></td> <td><input type="text" name="CQ"  class="input" style="background: transparent"></td> <td><input type="text" name="CR"  class="input" style="background: transparent"></td> <td><input type="text" name="CS"  class="input" style="background: transparent"></td> <td><input type="text" name="CT"  class="input" style="background: transparent"></td> <td><input type="text" name="CU"  class="input" style="background: transparent"></td> <td><input type="text" name="CV"  class="input" style="background: transparent"></td>

                </tfoot>
            </table>
            <%--                    <span>总条数：</span>--%>
            <%--<c:forEach items="${wkInfo}" var="wk">
                <tr>
                    <td hidden="hidden"><input type="text" name="id" value="${wk.id}"></td>
                    <td><input type="text" name="A" value="${wk.a}" class="input" style="background: transparent"></td> <td><input type="text" name="B" value="${wk.b}" class="input" style="background: transparent"></td> <td><input type="text" name="C" value="${wk.c}" class="input" style="background: transparent"></td> <td><input type="text" name="D" value="${wk.d}" class="input" style="background: transparent"></td> <td><input type="text" name="E" value="${wk.e}" class="input" style="background: transparent"></td> <td><input type="text" name="F" value="${wk.f}" class="input" style="background: transparent"></td> <td><input type="text" name="G" value="${wk.g}" class="input" style="background: transparent"></td> <td><input type="text" name="H" value="${wk.h}" class="input" style="background: transparent"></td> <td><input type="text" name="I" value="${wk.i}" class="input" style="background: transparent"></td> <td><input type="text" name="J" value="${wk.j}" class="input" style="background: transparent"></td> <td><input type="text" name="K" value="${wk.k}" class="input" style="background: transparent"></td> <td><input type="text" name="L" value="${wk.l}" class="input" style="background: transparent"></td> <td><input type="text" name="M" value="${wk.m}" class="input" style="background: transparent"></td> <td><input type="text" name="N" value="${wk.n}" class="input" style="background: transparent"></td> <td><input type="text" name="O" value="${wk.o}" class="input" style="background: transparent"></td> <td><input type="text" name="P" value="${wk.p}" class="input" style="background: transparent"></td> <td><input type="text" name="Q" value="${wk.q}" class="input" style="background: transparent"></td> <td><input type="text" name="R" value="${wk.r}" class="input" style="background: transparent"></td> <td><input type="text" name="S" value="${wk.s}" class="input" style="background: transparent"></td> <td><input type="text" name="T" value="${wk.t}" class="input" style="background: transparent"></td> <td><input type="text" name="U" value="${wk.u}" class="input" style="background: transparent"></td> <td><input type="text" name="V" value="${wk.v}" class="input" style="background: transparent"></td> <td><input type="text" name="W" value="${wk.w}" class="input" style="background: transparent"></td> <td><input type="text" name="X" value="${wk.x}" class="input" style="background: transparent"></td> <td><input type="text" name="Y" value="${wk.y}" class="input" style="background: transparent"></td> <td><input type="text" name="Z" value="${wk.z}" class="input" style="background: transparent"></td>
                    <td><input type="text" name="AA" value="${wk.AA}" class="input" style="background: transparent"></td> <td><input type="text" name="AB" value="${wk.AB}" class="input" style="background: transparent"></td> <td><input type="text" name="AC" value="${wk.AC}" class="input" style="background: transparent"></td> <td><input type="text" name="AD" value="${wk.AD}" class="input" style="background: transparent"></td> <td><input type="text" name="AE" value="${wk.AE}" class="input" style="background: transparent"></td> <td><input type="text" name="AF" value="${wk.AF}" class="input" style="background: transparent"></td> <td><input type="text" name="AG" value="${wk.AG}" class="input" style="background: transparent"></td> <td><input type="text" name="AH" value="${wk.AH}" class="input" style="background: transparent"></td> <td><input type="text" name="AI" value="${wk.AI}" class="input" style="background: transparent"></td> <td><input type="text" name="AJ" value="${wk.AJ}" class="input" style="background: transparent"></td> <td><input type="text" name="AK" value="${wk.AK}" class="input" style="background: transparent"></td> <td><input type="text" name="AL" value="${wk.AL}" class="input" style="background: transparent"></td> <td><input type="text" name="AM" value="${wk.AM}" class="input" style="background: transparent"></td> <td><input type="text" name="AN" value="${wk.AN}" class="input" style="background: transparent"></td> <td><input name="AO" type="text" value="${wk.AO}" class="input" style="background: transparent"></td> <td><input type="text" name="AP" value="${wk.AP}" class="input" style="background: transparent"></td> <td><input type="text" name="AQ" value="${wk.AQ}" class="input" style="background: transparent"></td> <td><input type="text" name="AR" value="${wk.AR}" class="input" style="background: transparent"></td> <td><input type="text" name="ASS" value="${wk.ASS}" class="input" style="background: transparent"></td> <td><input type="text" name="AT" value="${wk.AT}" class="input" style="background: transparent"></td> <td><input type="text" name="AU" value="${wk.AU}" class="input" style="background: transparent"></td> <td><input type="text" name="AV" value="${wk.AV}" class="input" style="background: transparent"></td> <td><input type="text" name="AW" value="${wk.AW}" class="input" style="background: transparent"></td> <td><input type="text" name="AX" value="${wk.AX}" class="input" style="background: transparent"></td> <td><input type="text" name="AY" value="${wk.AY}" class="input" style="background: transparent"></td> <td><input type="text" name="AZ" value="${wk.AZ}" class="input" style="background: transparent"></td>
                    <td><input type="text" name="BA" value="${wk.BA}" class="input" style="background: transparent"></td> <td style="color: #ffffff;"><input type="text" name="BB" value="${wk.BB}" class="input" style="background: transparent"></td> <td><input type="text" name="BC" value="${wk.BC}" class="input" style="background: transparent"></td> <td><input type="text" name="BD" value="${wk.BD}" class="input" style="background: transparent"></td> <td><input type="text" name="BE" value="${wk.BE}" class="input" style="background: transparent"></td> <td><input type="text" name="BF" value="${wk.BF}" class="input" style="background: transparent"></td> <td><input type="text" name="BG" value="${wk.BG}" class="input" style="background: transparent"></td> <td><input type="text" name="BH" value="${wk.BH}" class="input" style="background: transparent"></td> <td><input type="text" name="BI" value="${wk.BI}" class="input" style="background: transparent"></td> <td><input type="text" name="BJ" value="${wk.BJ}" class="input" style="background: transparent"></td> <td><input type="text" name="BK" value="${wk.BK}" class="input" style="background: transparent"></td> <td><input type="text" name="BL" value="${wk.BL}" class="input" style="background: transparent"></td> <td><input type="text" name="BM" value="${wk.BM}" class="input" style="background: transparent"></td> <td><input type="text" name="BN" value="${wk.BN}" class="input" style="background: transparent"></td> <td><input name="BO" type="text" value="${wk.BO}" class="input" style="background: transparent"></td> <td><input type="text" name="BP" value="${wk.BP}" class="input" style="background: transparent"></td> <td><input type="text" name="BQ" value="${wk.BQ}" class="input" style="background: transparent"></td> <td><input type="text" name="BR" value="${wk.BR}" class="input" style="background: transparent"></td> <td><input type="text" name="BS" value="${wk.BS}" class="input" style="background: transparent"></td> <td><input type="text" name="BT" value="${wk.BT}" class="input" style="background: transparent"></td> <td><input type="text" name="BU" value="${wk.BU}" class="input" style="background: transparent"></td> <td><input type="text" name="BV" value="${wk.BV}" class="input" style="background: transparent"></td> <td><input type="text" name="BW" value="${wk.BW}" class="input" style="background: transparent"></td> <td><input type="text" name="BX" value="${wk.BX}" class="input" style="background: transparent"></td> <td><input type="text" name="BYY" value="${wk.BYY}" class="input" style="background: transparent"></td> <td><input type="text" name="BZ" value="${wk.BZ}" class="input" style="background: transparent"></td>
                    <td><input type="text" name="CA" value="${wk.CA}" class="input" style="background: transparent"></td> <td><input type="text" name="CB" value="${wk.CB}" class="input" style="background: transparent"></td> <td><input type="text" name="CC" value="${wk.CC}" class="input" style="background: transparent"></td> <td><input type="text" name="CD" value="${wk.CD}" class="input" style="background: transparent"></td> <td><input type="text" name="CE" value="${wk.CE}" class="input" style="background: transparent"></td> <td><input type="text" name="CF" value="${wk.CF}" class="input" style="background: transparent"></td> <td><input type="text" name="CG" value="${wk.CG}" class="input" style="background: transparent"></td> <td><input type="text" name="CH" value="${wk.CH}" class="input" style="background: transparent"></td> <td><input type="text" name="CI" value="${wk.CI}" class="input" style="background: transparent"></td> <td><input type="text" name="CJ" value="${wk.CJ}" class="input" style="background: transparent"></td> <td><input type="text" name="CK" value="${wk.CK}" class="input" style="background: transparent"></td> <td><input type="text" name="CL" value="${wk.CL}" class="input" style="background: transparent"></td> <td><input type="text" name="CM" value="${wk.CM}" class="input" style="background: transparent"></td> <td><input type="text" name="CN" value="${wk.CN}" class="input" style="background: transparent"></td> <td><input name="CO" type="text" value="${wk.CO}" class="input" style="background: transparent"></td> <td><input type="text" name="CP" value="${wk.CP}" class="input" style="background: transparent"></td> <td><input type="text" name="CQ" value="${wk.CQ}" class="input" style="background: transparent"></td> <td><input type="text" name="CR" value="${wk.CR}" class="input" style="background: transparent"></td> <td><input type="text" name="CS" value="${wk.CS}" class="input" style="background: transparent"></td> <td><input type="text" name="CT" value="${wk.CT}" class="input" style="background: transparent"></td> <td><input type="text" name="CU" value="${wk.CU}" class="input" style="background: transparent"></td> <td><input type="text" name="CV" value="${wk.CV}" class="input" style="background: transparent"></td> <td><input type="text" name="renYuan" value="${wk.renYuan}" class="input" style="background: transparent" readonly="readonly"></td> <td><input type="text" name="gongSi" value="${wk.gongSi}" class="input" style="background: transparent" readonly="readonly"></td>
                </tr>
            </c:forEach>--%>
            <%--                        <%=request.getAttribute("wkYGInfo")%>--%>
            <%--    <c:forEach items="${wkYGInfo}" var="wkyg">
                    <tr>
                        <td hidden="hidden"><input type="text" name="id" value="${wkyg.id}"></td>
                        <td><input type="text" name="A" value="${wkyg.a}" class="input" style="background: transparent"></td> <td><input type="text" name="B" value="${wkyg.b}" class="input" style="background: transparent"></td> <td><input type="text" name="C" value="${wkyg.c}" class="input" style="background: transparent"></td> <td><input type="text" name="D" value="${wkyg.d}" class="input" style="background: transparent"></td> <td><input type="text" name="E" value="${wkyg.e}" class="input" style="background: transparent"></td> <td><input type="text" name="F" value="${wkyg.f}" class="input" style="background: transparent"></td> <td><input type="text" name="G" value="${wkyg.g}" class="input" style="background: transparent"></td> <td><input type="text" name="H" value="${wkyg.h}" class="input" style="background: transparent"></td> <td><input type="text" name="I" value="${wkyg.i}" class="input" style="background: transparent"></td> <td><input type="text" name="J" value="${wkyg.j}" class="input" style="background: transparent"></td> <td><input type="text" name="K" value="${wkyg.k}" class="input" style="background: transparent"></td> <td><input type="text" name="L" value="${wkyg.l}" class="input" style="background: transparent"></td> <td><input type="text" name="M" value="${wkyg.m}" class="input" style="background: transparent"></td> <td><input type="text" name="N" value="${wkyg.n}" class="input" style="background: transparent"></td> <td><input type="text" name="O" value="${wkyg.o}" class="input" style="background: transparent"></td> <td><input type="text" name="P" value="${wkyg.p}" class="input" style="background: transparent"></td> <td><input type="text" name="Q" value="${wkyg.q}" class="input" style="background: transparent"></td> <td><input type="text" name="R" value="${wkyg.r}" class="input" style="background: transparent"></td> <td><input type="text" name="S" value="${wkyg.s}" class="input" style="background: transparent"></td> <td><input type="text" name="T" value="${wkyg.t}" class="input" style="background: transparent"></td> <td><input type="text" name="U" value="${wkyg.u}" class="input" style="background: transparent"></td> <td><input type="text" name="V" value="${wkyg.v}" class="input" style="background: transparent"></td> <td><input type="text" name="W" value="${wkyg.w}" class="input" style="background: transparent"></td> <td><input type="text" name="X" value="${wkyg.x}" class="input" style="background: transparent"></td> <td><input type="text" name="Y" value="${wkyg.y}" class="input" style="background: transparent"></td> <td><input type="text" name="Z" value="${wkyg.z}" class="input" style="background: transparent"></td>
                        <td><input type="text" name="AA" value="${wkyg.AA}" class="input" style="background: transparent"></td> <td><input type="text" name="AB" value="${wkyg.AB}" class="input" style="background: transparent"></td> <td><input type="text" name="AC" value="${wkyg.AC}" class="input" style="background: transparent"></td> <td><input type="text" name="AD" value="${wkyg.AD}" class="input" style="background: transparent"></td> <td><input type="text" name="AE" value="${wkyg.AE}" class="input" style="background: transparent"></td> <td><input type="text" name="AF" value="${wkyg.AF}" class="input" style="background: transparent"></td> <td><input type="text" name="AG" value="${wkyg.AG}" class="input" style="background: transparent"></td> <td><input type="text" name="AH" value="${wkyg.AH}" class="input" style="background: transparent"></td> <td><input type="text" name="AI" value="${wkyg.AI}" class="input" style="background: transparent"></td> <td><input type="text" name="AJ" value="${wkyg.AJ}" class="input" style="background: transparent"></td> <td><input type="text" name="AK" value="${wkyg.AK}" class="input" style="background: transparent"></td> <td><input type="text" name="AL" value="${wkyg.AL}" class="input" style="background: transparent"></td> <td><input type="text" name="AM" value="${wkyg.AM}" class="input" style="background: transparent"></td> <td><input type="text" name="AN" value="${wkyg.AN}" class="input" style="background: transparent"></td> <td><input name="AO" type="text" value="${wkyg.AO}" class="input" style="background: transparent"></td> <td><input type="text" name="AP" value="${wkyg.AP}" class="input" style="background: transparent"></td> <td><input type="text" name="AQ" value="${wkyg.AQ}" class="input" style="background: transparent"></td> <td><input type="text" name="AR" value="${wkyg.AR}" class="input" style="background: transparent"></td> <td><input type="text" name="ASS" value="${wkyg.ASS}" class="input" style="background: transparent"></td> <td><input type="text" name="AT" value="${wkyg.AT}" class="input" style="background: transparent"></td> <td><input type="text" name="AU" value="${wkyg.AU}" class="input" style="background: transparent"></td> <td><input type="text" name="AV" value="${wkyg.AV}" class="input" style="background: transparent"></td> <td><input type="text" name="AW" value="${wkyg.AW}" class="input" style="background: transparent"></td> <td><input type="text" name="AX" value="${wkyg.AX}" class="input" style="background: transparent"></td> <td><input type="text" name="AY" value="${wkyg.AY}" class="input" style="background: transparent"></td> <td><input type="text" name="AZ" value="${wkyg.AZ}" class="input" style="background: transparent"></td>
                        <td><input type="text" name="BA" value="${wkyg.BA}" class="input" style="background: transparent"></td> <td style="color: #ffffff;"><input type="text" name="BB" value="${wkyg.BB}" class="input" style="background: transparent"></td> <td><input type="text" name="BC" value="${wkyg.BC}" class="input" style="background: transparent"></td> <td><input type="text" name="BD" value="${wkyg.BD}" class="input" style="background: transparent"></td> <td><input type="text" name="BE" value="${wkyg.BE}" class="input" style="background: transparent"></td> <td><input type="text" name="BF" value="${wkyg.BF}" class="input" style="background: transparent"></td> <td><input type="text" name="BG" value="${wkyg.BG}" class="input" style="background: transparent"></td> <td><input type="text" name="BH" value="${wkyg.BH}" class="input" style="background: transparent"></td> <td><input type="text" name="BI" value="${wkyg.BI}" class="input" style="background: transparent"></td> <td><input type="text" name="BJ" value="${wkyg.BJ}" class="input" style="background: transparent"></td> <td><input type="text" name="BK" value="${wkyg.BK}" class="input" style="background: transparent"></td> <td><input type="text" name="BL" value="${wkyg.BL}" class="input" style="background: transparent"></td> <td><input type="text" name="BM" value="${wkyg.BM}" class="input" style="background: transparent"></td> <td><input type="text" name="BN" value="${wkyg.BN}" class="input" style="background: transparent"></td> <td><input name="BO" type="text" value="${wkyg.BO}" class="input" style="background: transparent"></td> <td><input type="text" name="BP" value="${wkyg.BP}" class="input" style="background: transparent"></td> <td><input type="text" name="BQ" value="${wkyg.BQ}" class="input" style="background: transparent"></td> <td><input type="text" name="BR" value="${wkyg.BR}" class="input" style="background: transparent"></td> <td><input type="text" name="BS" value="${wkyg.BS}" class="input" style="background: transparent"></td> <td><input type="text" name="BT" value="${wkygBT}" class="input" style="background: transparent"></td> <td><input type="text" name="BU" value="${wkyg.BU}" class="input" style="background: transparent"></td> <td><input type="text" name="BV" value="${wkyg.BV}" class="input" style="background: transparent"></td> <td><input type="text" name="BW" value="${wkyg.BW}" class="input" style="background: transparent"></td> <td><input type="text" name="BX" value="${wkyg.BX}" class="input" style="background: transparent"></td> <td><input type="text" name="BYY" value="${wkyg.BYY}" class="input" style="background: transparent"></td> <td><input type="text" name="BZ" value="${wkyg.BZ}" class="input" style="background: transparent"></td>
                        <td><input type="text" name="CA" value="${wkyg.CA}" class="input" style="background: transparent"></td> <td><input type="text" name="CB" value="${wkyg.CB}" class="input" style="background: transparent"></td> <td><input type="text" name="CC" value="${wkyg.CC}" class="input" style="background: transparent"></td> <td><input type="text" name="CD" value="${wkyg.CD}" class="input" style="background: transparent"></td> <td><input type="text" name="CE" value="${wkyg.CE}" class="input" style="background: transparent"></td> <td><input type="text" name="CF" value="${wkyg.CF}" class="input" style="background: transparent"></td> <td><input type="text" name="CG" value="${wkyg.CG}" class="input" style="background: transparent"></td> <td><input type="text" name="CH" value="${wkyg.CH}" class="input" style="background: transparent"></td> <td><input type="text" name="CI" value="${wkyg.CI}" class="input" style="background: transparent"></td> <td><input type="text" name="CJ" value="${wkyg.CJ}" class="input" style="background: transparent"></td> <td><input type="text" name="CK" value="${wkyg.CK}" class="input" style="background: transparent"></td> <td><input type="text" name="CL" value="${wkyg.CL}" class="input" style="background: transparent"></td> <td><input type="text" name="CM" value="${wkyg.CM}" class="input" style="background: transparent"></td> <td><input type="text" name="CN" value="${wkyg.CN}" class="input" style="background: transparent"></td> <td><input name="CO" type="text" value="${wkyg.CO}" class="input" style="background: transparent"></td> <td><input type="text" name="CP" value="${wkyg.CP}" class="input" style="background: transparent"></td> <td><input type="text" name="CQ" value="${wkyg.CQ}" class="input" style="background: transparent"></td> <td><input type="text" name="CR" value="${wkyg.CR}" class="input" style="background: transparent"></td> <td><input type="text" name="CS" value="${wkyg.CS}" class="input" style="background: transparent"></td> <td><input type="text" name="CT" value="${wkyg.CT}" class="input" style="background: transparent"></td> <td><input type="text" name="CU" value="${wkyg.CU}" class="input" style="background: transparent"></td> <td><input type="text" name="CV" value="${wkyg.CV}" class="input" style="background: transparent"></td> <td><input type="text" name="renYuan" value="${wkyg.renYuan}" class="input" style="background: transparent" readonly="readonly"></td> <td><input type="text" name="gongSi" value="${wkyg.gongSi}" class="input" style="background: transparent" readonly="readonly"></td>
                    </tr>
                </c:forEach>--%>

        </div>



        <%--                <div title="公司添加" data-options="href:'gongSiRegister.jsp'" style="padding:10px; "></div>--%>
        <%--&lt;%&ndash;                <div title="公司柱状图" data-options="href:'barChart.jsp'" style="padding:10px"></div>&ndash;%&gt;--%>
        <%--                <div title="公司规定" data-options="href:'gongSi'" style="padding:10px; "></div>--%>
        <%--                <div title="公司柱状图" data-options="href:'barChart.jsp'" style="padding:10px; "></div>--%>
        <%--                <div title="人员添加" data-options="href:'renYuanRegister.jsp'" style="padding:10px;"></div>--%>
        <%--                <div title="人员管理" data-options="href:'renYuan'" style="padding:10px; "></div>--%>
        <%--                <div title="人员权限规定" data-options="href:'renYuanRegulations.jsp'" style="padding:10px; "></div>--%>
        <%--                <div title="人员柱状图" data-options="href:'renYuanInit'"  style="padding:10px; ">--%>


        <%--                    <div id="main" style="width: 3000px;height: 100%">--%>

        <%--                    </div>--%>
    </div>
    <%--                <div title="人员使用情况" data-options="href:'useRenYuan'" style="padding:10px; "></div>--%>
    <%--               &lt;%&ndash; <div title="测试" data-options="href:'test.jsp'" style="padding:10px; background-color: #99CCFF;"></div>&ndash;%&gt;--%>


    <%--&lt;%&ndash;                <div title="人员管理" data-options="href:'renYuan'" style="padding:10px"></div>&ndash;%&gt;--%>
    <%--&lt;%&ndash;                <div title="人员权限规定" data-options="href:'copy'" style="padding:10px"></div>&ndash;%&gt;--%>


    <%--            </div>--%>
</div>

<script>

    debugger;
    /* $('#tt2').click({
         border: false,
         onSelect: function (title) {
             if (title == "公司添加") {
                 selectDS();
             }
         }
     })*/

    /*
        function squareAccounts() {
            var childwin = $("#content")[0].contentWindow;
            childwin.iframfunAccounts();
        }
        //所有修改的值
        let changeList = [];
        $(document).ready(function () {
            var time = new Date();
            var day = ("0" + time.getDate()).slice(-2);
            var month = ("0" + (time.getMonth() + 1)).slice(-2);
            var today = time.getFullYear() + "-" + (month) + "-" + (day);
            $('#now1').val(today);
            $('#now2').val(today);
        })

        arr=[]
        pushInput = []
        //修改单条数据
        let inputChange = function(){
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

            $.ajax({
                type: 'post',
                url: 'workbenchUpdate',
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
        }*/
    /*  //判断用户对列的权限并对单条数据进行修改
      let Immediately = function (){
             let colum = this.name//当前修改的列

              $.ajax({
                  type: 'post',
                  url:'WorkbenchInputPower',
                  data:{
                      colum:colum
                  },
                 dataType: "text",
                  success:function (result){
                       alert(result);
                      if (result == "√"){
                         $('input').removeAttr('readOnly')
                          // $('input').on('blur',inputChange)
                          $('input[type=text]').change(inputChange);
                          /!*取消用户对当前列的编辑*!/
                          let cancelUse = function(){
                              let column = this.name;


                              $.ajax({
                                  type: 'post',
                                  url: 'WorkbenchCancel',
                                  data: {
                                      column:column
                                  },
                                  dataType: 'text',
                                  success: function(data){
                                      console.log(data)
                                  },
                                  error: function(err){
                                      console.log(err)
                                  }
                              })
                          }
                      }else{
                          $('input').attr('readOnly','readOnly')
                          // alert("您没有修改"+colum+"列的权限!")
                          // $('input').blur()
                      }
                  }
              })
      }*/
    /*
    //内容改变，获取焦点时触发
    $("tbody input").focus(function (){
        var a=1;
        //即时修改
        let isLot = $('#isLot').is(':checked');

        //判断是否是即时修改
        if (isLot){
            /!*判断修改列的权限，对input进行修改*!/
            $('input').on('focus',Immediately);
            //alert("即时修改执行!")
        }else{
             alert("即时修改没执行!")
            // $('input').blur()
        }
    })


    //内容发生改变，失去焦点时触发
    $('input[type=text]').change(function (){
        let newvalue = this.value;
        let td = this.parentElement;
        let tr = td.parentElement;
        let firsttd = tr.firstElementChild;
        let firstinput = firsttd.firstElementChild
        let id = firstinput.value;
        let column = this.name;

        push({
            column:column,
            value:newvalue,
            id:id
        })
    })

    function push(changeItem){

        changeList.push(changeItem)

        if(changeList.length == 0){
            changeList.push(changeItem)
        }else {
            //循环搜索是否已经修改过
            for(let i = 0;i< changeList.length;i++){
                //如果已经修改过就直接改变值
                if(changeList[i].id == changeItem.id && changeList[i].column == changeItem.column){
                    changeList[i].value = changeItem.value;
                    //跳出方法
                    return;
                }
            }
           //如果程序走到这一行，说明用户没有修改过input
           changeList.push(changeItem)
        }
    }

$('tbody input').focus(function (){
        let colum = this.name//当前修改的列

        $.ajax({
            type: 'post',
            url:'WorkbenchInputPower',
            data:{
                colum:colum
            },
            dataType: "text",
            success:function (result){
                // alert(result);
                if (result == "√"){
                    $('input').removeAttr('readOnly')
                }else{
                    $('input').attr('readOnly','readOnly')
                    var aa = 0;
                }
            }
        })
    })

/!*判断修改公司权限*!/
    function openGongSi(){
        $.ajax({
            type: 'post',
            url:'gongSi',
            data:{
                // colum:colum
            },
            dataType: "text",
            success:function (result){
                console.log(result)
                // alert(result);
                if (result == 1){
                    // $('input').removeAttr('readOnly')
                    // $('input').on('blur',inputChange)
                    // $('input[type=text]').change(inputChange);
                    alert("当前用户无权限!!!")
                }else{
                    // $('input').attr('readOnly','readOnly')
                    // alert("您没有修改"+colum+"列的权限!")
                    // $('input').blur()
                }
            }
        })
    }*/
    /* $('#save').click(function (){
         let tId;
         let tColumn;
         let tValue;

         for (let a = 0;a< changeList.length;a++){
             tId = changeList[a].id;
             tColumn = changeList[a].column;
             tValue = changeList[a].value
             pushInput.push({
                 id:tId,
                 column:tColumn,
                 newvalue:tValue
             })

         }
         $.ajax({
             type:'post',
             url:'WorkbenchManyUpdate',
             data:{
                 jsonData:JSON.stringify(pushInput)

             },
             dataType:'json',
             success:function (data){
                 console.log(data)
                 alert("修改成功")
                 JOptionPane.showMessageDialog(null, "消息提示");
             },
             error:function (err){
                 console.log(err)
             }
         })
         //JOptionPane.showMessageDialog(null, "消息提示");
     })*/
    function showcontent(language){
        // $('#content').html('Introduction to ' + language + ' language');
        var url="";
        if(language=="公司添加"){
            url="gongSiRegister.jsp";
        }else if(language=="公司规定"){
            url="gongSi";
        }else if(language=="公司柱状图"){
            url="barChart.jsp";
        }else if(language=="人员添加"){
            url="renYuanRegister.jsp";
        }else if(language=="人员管理"){
            url="renYuan";
            //url="renYuanManagement.jsp";
        }else if(language=="人员权限规定"){
            //url="renYuanRegulations.jsp";
            url="copy";
        }else if(language=="人员柱状图"){
            url="renYuanInit";
        }else if(language=="人员柱状图"){
            url="renYuanInit";
        }else if(language=="人员使用情况"){
            url="useRenYuan";
        }

        $('#test').tabs('add',{
            title:language,
            href:url,
            closable:true
        })


    }

    /*easyUI日期组件*/
    function myformatter(date) {

        var y = date.getFullYear();

        var m = date.getMonth() + 1;

        var d = date.getDate();

        return y + '-' + (m < 10 ? ('0' + m) : m) + '-'

            + (d < 10 ? ('0' + d) : d);

    }

    function myparser(s) {

        if (!s)

            return new Date();

        var ss = (s.split('-'));

        var y = parseInt(ss[0], 10);

        var m = parseInt(ss[1], 10);

        var d = parseInt(ss[2], 10);

        if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {

            return new Date(y, m - 1, d);

        } else {

            return new Date();

        }

    }
    /*日期组件汉化*/
    $('#begindate').datebox({
        // required:true,
        okText: '确定',
        closeText: '关闭',
        currentText: '今天',
    });
    var c = $('#begindate').datebox('calendar');
    c.calendar({
        weeks: ['日', '一', '二', '三', '四', '五', '六'],
        months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    });

    $('#enddate').datebox({
        // required:true,
        okText: '确定',
        closeText: '关闭',
        currentText: '今天',
    });
    var c = $('#enddate').datebox('calendar');
    c.calendar({
        weeks: ['日', '一', '二', '三', '四', '五', '六'],
        months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    });





    function getDate(){
        var begindate=$('#begindate').datebox('getValue');  //注意.datebox('getValue')是EasyUI固定的写法。
        var enddate=$('#enddate').datebox('getValue');
    }
    function setDate(){
        $("#begindate").datebox('setValue',begindate);

        $("#enddate").datebox('setValue',enddate);
    }   //setValue是EasyUI固定的写法。

    /*根据日期查询数据*/
    $('#selectDate').click(function (){
        var  a1=1;
        /* /内容发生改变，失去焦点时触发
         $('tbody input').blur(function (){
             var a=1;
             console.log(a);
             let newvalue = this.value;
             let td = this.parentElement;
             let tr = td.parentElement;
             let firsttd = tr.firstElementChild;
             let firstinput = firsttd.firstElementChild;
             let id = firstinput.value;
             let column = this.name;
             console.log(column);
             console.log(firstinput);
             console.log(firsttd);
             console.log(tr);
             console.log(td);
             console.log(newvalue);
             console.log(id);
             arr=[];
             arr.push({
                 column:column,
                 value:newvalue,
                 id:id
             })
             $("#save").click(function (){
                 $.ajax({
                     type: 'post',
                     url: 'workbenchUpdate',
                     data: {
                         jsonData: JSON.stringify(arr)
                     },

                     success: function(data){
                         alert("保存成功")
                     },
                     error: function(err){
                         console.log(err)
                     }
                 })
             })

         })*/


        let startTime = new Date($('#begindate').val())
        let endTime = new Date($('#enddate').val())
        if (startTime.getTime()>endTime.getTime()){
            alert("开始时间不能大于结束时间")
        }else{
            $.ajax({
                type:'post',
                url:'workbenchTime',
                data:{
                    startTime:$('#begindate').val(),
                    endTime:$('#enddate').val(),
                },

                success:function (result){
                    console.log(result)
                    alert("查询成功")
                    //转换为javascript对象
                    var user = eval('('+result+')');

                    var strcontent ="";
                    for(var i=0;i<user.length;i++){
                        strcontent+="<tr><td><input name=\"id\" readonly=\"readonly\" value="+user[i].id+"></input></td><td><input readonly=\"readonly\" name=\"renYuan\" value="+user[i].renYuan+"></input></td><td><input readonly=\"readonly\" name=\"gongSi\" value="+user[i].gongSi+"></input></td><td><input onchange = \"myChange(this)\" name=\"C\" value="+user[i].C+"></input></td><td><input onchange = \"myChange(this)\" name=\"D\" value="+user[i].D+"></input></td><td><input onchange = \"myChange(this)\" name=\"E\" value="+user[i].E+"></input></td><td><input name=\"F\"  onchange = \"myChange(this)\" value="+user[i].F+"></input></td><td><input onchange = \"myChange(this)\" name=\"G\" value="+user[i].G+"></input></td><td><input onchange = \"myChange(this)\" name=\"H\" value="+user[i].H+"></input></td><td><input onchange = \"myChange(this)\" name=\"I\" value="+user[i].I+"></input></td><td><input onchange = \"myChange(this)\" name=\"J\" value="+user[i].J+"></input></td><td><input onchange = \"myChange(this)\" name=\"K\" value="+user[i].K+"></input></td><td><input onchange = \"myChange(this)\" name=\"L\" value="+user[i].L+"></input></td><td><input onchange = \"myChange(this)\" name=\"M\" value="+user[i].M+"></input></td><td><input onchange = \"myChange(this)\" name=\"N\" value="+user[i].N+"></input></td><td><input onchange = \"myChange(this)\" name=\"O\" value="+user[i].O+"></input></td><td><input onchange = \"myChange(this)\" name=\"P\" value="+user[i].P+"></input></td><td><input onchange = \"myChange(this)\" name=\"Q\" value="+user[i].Q+"></input></td><td><input onchange = \"myChange(this)\" name=\"R\" value="+user[i].R+"></input></td><td><input onchange = \"myChange(this)\" name=\"S\" value="+user[i].S+"></input></td><td><input onchange = \"myChange(this)\" name=\"T\" value="+user[i].T+"></input></td><td><input onchange = \"myChange(this)\" name=\"U\" value="+user[i].U+"></input></td><td><input onchange = \"myChange(this)\" name=\"V\" value="+user[i].V+"></input></td><td><input onchange = \"myChange(this)\" name=\"W\" value="+user[i].W+"></input></td><td><input onchange = \"myChange(this)\" name=\"X\" value="+user[i].X+"></input></td><td><input onchange = \"myChange(this)\" name=\"Y\" value="+user[i].Y+"></input></td><td><input onchange = \"myChange(this)\" name=\"Z\" value="+user[i].Z+"></input></td><td><input onchange = \"myChange(this)\" name=\"AA\" value="+user[i].AA+"></input></td><td><input onchange = \"myChange(this)\" name=\"AB\" value="+user[i].AB+"></input></td><td><input onchange = \"myChange(this)\" name=\"AC\" value="+user[i].AC+"></input></td><td><input onchange = \"myChange(this)\" name=\"AD\" value="+user[i].AD+"></input></td><td><input onchange = \"myChange(this)\" name=\"AE\" value="+user[i].AE+"></input></td><td><input onchange = \"myChange(this)\" name=\"AF\" value="+user[i].AF+"></input></td><td><input onchange = \"myChange(this)\" name=\"AG\" value="+user[i].AG+"></input></td><td><input onchange = \"myChange(this)\" name=\"AH\" value="+user[i].AH+"></input></td><td><input onchange = \"myChange(this)\" name=\"AI\" value="+user[i].AI+"></input></td><td><input onchange = \"myChange(this)\" name=\"AJ\" value="+user[i].AJ+"></input></td><td><input onchange = \"myChange(this)\" name=\"AK\" value="+user[i].AK+"></input></td><td><input onchange = \"myChange(this)\" name=\"AL\" value="+user[i].AL+"></input></td><td><input onchange = \"myChange(this)\" name=\"AM\" value="+user[i].AM+"></input></td><td><input onchange = \"myChange(this)\" name=\"AN\" value="+user[i].AN+"></input></td><td><input onchange = \"myChange(this)\" name=\"AO\" value="+user[i].AO+"></input></td><td><input onchange = \"myChange(this)\" name=\"AP\" value="+user[i].AP+"></input></td><td><input onchange = \"myChange(this)\" name=\"AQ\" value="+user[i].AQ+"></input></td><td><input onchange = \"myChange(this)\" name=\"AR\" value="+user[i].AR+"></input></td><td><input onchange = \"myChange(this)\" name=\"ASS\" value="+user[i].ASS+"></input></td><td><input onchange = \"myChange(this)\" name=\"AT\" value="+user[i].AT+"></input></td><td><input onchange = \"myChange(this)\" name=\"AU\" value="+user[i].AU+"></input></td><td><input onchange = \"myChange(this)\" name=\"AV\" value="+user[i].AV+"></input></td><td><input onchange = \"myChange(this)\" name=\"AW\" value="+user[i].AW+"></input></td><td><input onchange = \"myChange(this)\" name=\"AX\" value="+user[i].AX+"></input></td><td><input onchange = \"myChange(this)\" name=\"AY\" value="+user[i].AY+"></input></td><td><input onchange = \"myChange(this)\" name=\"AZ\" value="+user[i].AZ+"></input></td><td><input onchange = \"myChange(this)\" name=\"BA\" value="+user[i].BA+"></input></td><td><input onchange = \"myChange(this)\" name=\"BB\" value="+user[i].BB+"></input></td><td><input onchange = \"myChange(this)\" name=\"BC\" value="+user[i].BC+"></input></td><td><input onchange = \"myChange(this)\" name=\"BD\" value="+user[i].BD+"></input></td><td><input onchange = \"myChange(this)\" name=\"BE\" value="+user[i].BE+"></input></td><td><input onchange = \"myChange(this)\" name=\"BF\" value="+user[i].BF+"></input></td><td><input onchange = \"myChange(this)\" name=\"BG\" value="+user[i].BG+"></input></td><td><input onchange = \"myChange(this)\" name=\"HB\" value="+user[i].BH+"></input></td><td><input onchange = \"myChange(this)\" name=\"BI\" value="+user[i].BI+"></input></td><td><input onchange = \"myChange(this)\" name=\"BJ\" value="+user[i].BJ+"></input></td><td><input onchange = \"myChange(this)\" name=\"BK\" value="+user[i].BK+"></input></td><td><input onchange = \"myChange(this)\" name=\"BL\" value="+user[i].BL+"></input></td><td><input onchange = \"myChange(this)\" name=\"BM\" value="+user[i].BM+"></input></td><td><input onchange = \"myChange(this)\" name=\"BN\" value="+user[i].BN+"></input></td><td><input onchange = \"myChange(this)\" name=\"BO\" value="+user[i].BO+"></input></td><td><input onchange = \"myChange(this)\" name=\"BP\" value="+user[i].BP+"></input></td><td><input onchange = \"myChange(this)\" name=\"BQ\" value="+user[i].BQ+"></input></td><td><input onchange = \"myChange(this)\" name=\"BR\" value="+user[i].BR+"></input></td><td><input onchange = \"myChange(this)\" name=\"BS\" value="+user[i].BS+"></input></td><td><input onchange = \"myChange(this)\" name=\"BT\" value="+user[i].BT+"></input></td><td><input onchange = \"myChange(this)\" name=\"BU\" value="+user[i].BU+"></input></td><td><input onchange = \"myChange(this)\" name=\"BV\" value="+user[i].BV+"></input></td><td><input onchange = \"myChange(this)\" name=\"BW\" value="+user[i].BW+"></input></td><td><input onchange = \"myChange(this)\" name=\"BX\" value="+user[i].BX+"></input></td><td><input onchange = \"myChange(this)\" name=\"BYY\" value="+user[i].BYY+"></input></td><td><input onchange = \"myChange(this)\" name=\"BZ\" value="+user[i].BZ+"></input></td><td><input onchange = \"myChange(this)\" name=\"CA\" value="+user[i].CA+"></input></td><td><input onchange = \"myChange(this)\" name=\"CB\" value="+user[i].CB+"></input></td><td><input onchange = \"myChange(this)\" name=\"CC\" value="+user[i].CC+"></input></td><td><input onchange = \"myChange(this)\" name=\"CD\" value="+user[i].CD+"></input></td><td><input onchange = \"myChange(this)\" name=\"CE\" value="+user[i].CE+"></input></td><td><input onchange = \"myChange(this)\" name=\"CF\" value="+user[i].CF+"></input></td><td><input onchange = \"myChange(this)\" name=\"CG\" value="+user[i].CG+"></input></td><td><input onchange = \"myChange(this)\" name=\"CH\" value="+user[i].CH+"></input></td><td><input onchange = \"myChange(this)\" name=\"CI\" value="+user[i].CI+"></input></td><td><input onchange = \"myChange(this)\" name=\"CJ\" value="+user[i].CJ+"></input></td><td><input onchange = \"myChange(this)\" name=\"CK\" value="+user[i].CK+"></input></td><td><input onchange = \"myChange(this)\" name=\"CL\" value="+user[i].CL+"></input></td><td><input onchange = \"myChange(this)\" name=\"CM\" value="+user[i].CM+"></input></td><td><input onchange = \"myChange(this)\" name=\"CN\" value="+user[i].CN+"></input></td><td><input onchange = \"myChange(this)\" name=\"CO\" value="+user[i].CO+"></input></td><td><input onchange = \"myChange(this)\" name=\"CP\" value="+user[i].CP+"></input></td><td><input onchange = \"myChange(this)\" name=\"CQ\" value="+user[i].CQ+"></input></td><td><input onchange = \"myChange(this)\" name=\"CR\" value="+user[i].CR+"></input></td><td><input onchange = \"myChange(this)\" name=\"CS\" value="+user[i].CS+"></input></td><td><input onchange = \"myChange(this)\" name=\"CT\" value="+user[i].CT+"></input></td><td><input onchange = \"myChange(this)\" name=\"CU\" value="+user[i].CU+"></input></td><td><input onchange = \"myChange(this)\" name=\"CV\" value="+user[i].CV+"></input></td></tr>"
                    }

                    $("#content").html(strcontent);
                    $('table tr').find('td:eq(0)').hide();
                },
                error:function (err){
                    console.log(err)
                }
            })
        }

    });

    /*添加一行*/
    $("#insert").click(function (){
        debugger;
        var a=1;
        console.log(a);
        var renyuan = $("#renYuan").val();
        console.log(renyuan);
        var gongSi = $("#gongSi").val();
        console.log(gongSi);
        $.ajax({
            type:'post',
            url:'addWorkbench',
            data:{
                renYuan:renyuan,
                gongSi:gongSi,

            },

            success:function (data){
                console.log(data)
                alert("插入成功")
            },
            error:function (){
                console.log(err)
            }
        })
    });

    /*查询数据*/
    $('#getAll').click(function (){

        $.ajax({
            type:'post',
            url:'workbenchGetData',
            data:{


            },
            dataType:'text',
            success:function (data){
                //console.log(data)
            },
            error:function (){
                //console.log(err)
            }
        })
    });

    /*及时修改*/
    $("#isLot").click(function (){
        var a=1;
        arr=[];
        if ($('#isLot').is(':checked')){
            $("tbody input").blur(function (){

                console.log(3);
                let newvalue = this.value;
                let td = this.parentElement;
                let tr = td.parentElement;
                let firsttd = tr.firstElementChild;
                let firstinput = firsttd.firstElementChild
                let id = firstinput.value;
                let column = this.name;
                console.log(column);
                console.log(firstinput);
                console.log(firsttd);
                console.log(tr);
                console.log(td);
                console.log(newvalue);
                console.log(id);
                arr.push({
                    id: id,
                    newvalue: newvalue,
                    column: column
                }),
                    console.log(arr);
                $.ajax({
                    type: 'post',
                    url: 'workbenchUpdate',
                    data: {
                        jsonData: JSON.stringify(arr)
                    },

                    success: function(data){
                        console.log(data)
                    },
                    error: function(err){
                        console.log(err)
                    }
                })

            })

        } else{
            console.log(2);
        }
    });

    /*
        //内容发生改变，失去焦点时触发
        $('input').change(function (){
            var a=1;
            console.log(a);
            let newvalue = this.value;
            let td = this.parentElement;
            let tr = td.parentElement;
            let firsttd = tr.firstElementChild;
            let firstinput = firsttd.firstElementChild;
            let id = firstinput.value;
            let column = this.name;
            console.log(column);
            console.log(firstinput);
            console.log(firsttd);
            console.log(tr);
            console.log(td);
            console.log(newvalue);
            console.log(id);
            arr=[];
            arr.push({
                column:column,
            value:newvalue,
                id:id
            })
            $("#sav").click(function (){
                $.ajax({
                    type: 'post',
                    url: 'workbenchUpdate',
                    data: {
                        jsonData: JSON.stringify(arr)
                    },

                    success: function(data){
                        alert("保存成功")
                    },
                    error: function(err){
                        console.log(err)
                    }
                })
            })

        });*/
    /*$('table tr').find('td:eq(0)').hide();*/

    /*document.getElementsByTagName("input").onclick = function() {
        alert("123");
    };*/
    /* var btn1 = document.getElementsByClassName('F');
     function abc() {
         alert('abc');
     }
     btn1.onclick = abc;
 */
    var arr2=[];
    function myChange(b){


        console.log(arr2);
        var newvalue = b.value;
        var td = b.parentElement;
        var tr = td.parentElement;
        var firsttd = tr.firstElementChild;
        var firstinput = firsttd.firstElementChild;
        var id = firstinput.value;
        var column = b.name;
        console.log(column);
        console.log(firstinput);
        console.log(firsttd);
        console.log(tr);
        console.log(td);
        console.log(newvalue);
        console.log(id);

        arr2.push({
            column:column,
            value:newvalue,
            id:id
        }),
            console.log(arr2);

    };
    console.log(arr2);
    $("#sav").click(function (){
        debugger;
        let tId;
        let tColumn;
        let tValue;
        arr=[];
        for (let a = 0;a< arr2.length;a++){
            tId = arr2[a].id;
            tColumn = arr2[a].column;
            tValue = arr2[a].value;

            arr.push({
                id:tId,
                column:tColumn,
                newvalue:tValue
            })

        }
        console.log(arr);
        $.ajax({
            type: 'post',
            url: 'workbenchUpdate',
            data: {
                jsonData: JSON.stringify(arr)
            },

            success: function(data){
                console.log(data)
                alert("修改成功")
            },
            error: function(err){
                console.log(err)
            }
        })
    });
    /*
        function logout() {
            console.log("out")
            window.location.href="/login.jsp";
        }*/
    /*var errorq ='<%=request.getParameter("error")%>';
    if(errorq=='yes'){
    alert("用户无法对当前列修改!");
    }*/
    /* $("#logout").click(function () {
         console.log("out");
         $.ajax({
             type: "POST",

             url: "logout" ,
             data:{

             },
             success : function(msg){

                 if(msg){
                     window.location.href="/login.jsp";
                 }
             }
         })
     })*/

</script>

</body>
</html>
