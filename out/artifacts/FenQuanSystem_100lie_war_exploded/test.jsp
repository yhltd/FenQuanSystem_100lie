<!--

  Created by IntelliJ ID

  User: Administra

  Date: 2021/5

  Time: 15

  To change this template use File | Settings | File Templates.
-->

<html>

  <head>
    <link rel="shortcut icon" href="img/logo.png" />
    <title>云合未来分权编辑系统</title>

  </head>
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
  <body>


  <div style="user-select: none">
    <button id="getAll" style="margin-right: -100px;background-color: #9acfea;border-radius: 7px;border-color: #9acfea">获取数据</button>
  </div>
  <form>
  <table border="1" class="table-condensed" id="table">
    <tr style="text-align: center">
      <td>A</td> <td>B</td> <td>C</td> <td>D</td> <td>E</td> <td>F</td> <td>G</td> <td>H</td> <td>I</td> <td>J</td> <td>K</td> <td>L</td> <td>M</td> <td>N</td> <td>O</td> <td>P</td> <td>Q</td> <td>R</td> <td>S</td> <td>T</td> <td>U</td> <td>V</td> <td>W</td> <td>X</td> <td>Y</td> <td>Z</td>
      <td>AA</td> <td>AB</td> <td>AC</td> <td>AD</td> <td>AE</td> <td>AF</td> <td>AG</td> <td>AH</td> <td>AI</td> <td>AJ</td> <td>AK</td> <td>AL</td> <td>AM</td> <td>AN</td> <td>AO</td> <td>AP</td> <td>AQ</td> <td>AR</td> <td>ASS</td> <td>AT</td> <td>AU</td> <td>AV</td> <td>AW</td> <td>AX</td> <td>AY</td> <td>AZ</td>
      <td>BA</td> <td>BB</td> <td>BC</td> <td>BD</td> <td>BE</td> <td>BF</td> <td>BG</td> <td>BH</td> <td>BI</td> <td>BJ</td> <td>BK</td> <td>BL</td> <td>BM</td> <td>BN</td> <td>BO</td> <td>BP</td> <td>BQ</td> <td>BR</td> <td>BSS</td> <td>BT</td> <td>BU</td> <td>BV</td> <td>BW</td> <td>BX</td> <td>BYY</td> <td>BZ</td>
      <td>CA</td> <td>CB</td> <td>CC</td> <td>CD</td> <td>CE</td> <td>CF</td> <td>CG</td> <td>CH</td> <td>CI</td> <td>CJ</td> <td>CK</td> <td>CL</td> <td>CM</td> <td>CN</td> <td>CO</td> <td>CP</td> <td>CQ</td> <td>CR</td> <td>CS</td> <td>CT</td> <td>CU</td> <td>CV</td> <td>人员</td> <td>公司</td>
    <tr>
      <c:forEach items="${wkInfo}" var="wk">
    <tr>
      <td hidden="hidden"><input type="text" name="id" value="${wk.id}"></td>
      <td><input type="text" name="A" value="${wk.a}" class="input" style="background: transparent"></td> <td><input type="text" name="B" value="${wk.b}" class="input" style="background: transparent"></td> <td><input type="text" name="C" value="${wk.c}" class="input" style="background: transparent"></td> <td><input type="text" name="D" value="${wk.d}" class="input" style="background: transparent"></td> <td><input type="text" name="E" value="${wk.e}" class="input" style="background: transparent"></td> <td><input type="text" name="F" value="${wk.f}" class="input" style="background: transparent"></td> <td><input type="text" name="G" value="${wk.g}" class="input" style="background: transparent"></td> <td><input type="text" name="H" value="${wk.h}" class="input" style="background: transparent"></td> <td><input type="text" name="I" value="${wk.i}" class="input" style="background: transparent"></td> <td><input type="text" name="J" value="${wk.j}" class="input" style="background: transparent"></td> <td><input type="text" name="K" value="${wk.k}" class="input" style="background: transparent"></td> <td><input type="text" name="L" value="${wk.l}" class="input" style="background: transparent"></td> <td><input type="text" name="M" value="${wk.m}" class="input" style="background: transparent"></td> <td><input type="text" name="N" value="${wk.n}" class="input" style="background: transparent"></td> <td><input type="text" name="O" value="${wk.o}" class="input" style="background: transparent"></td> <td><input type="text" name="P" value="${wk.p}" class="input" style="background: transparent"></td> <td><input type="text" name="Q" value="${wk.q}" class="input" style="background: transparent"></td> <td><input type="text" name="R" value="${wk.r}" class="input" style="background: transparent"></td> <td><input type="text" name="S" value="${wk.s}" class="input" style="background: transparent"></td> <td><input type="text" name="T" value="${wk.t}" class="input" style="background: transparent"></td> <td><input type="text" name="U" value="${wk.u}" class="input" style="background: transparent"></td> <td><input type="text" name="V" value="${wk.v}" class="input" style="background: transparent"></td> <td><input type="text" name="W" value="${wk.w}" class="input" style="background: transparent"></td> <td><input type="text" name="X" value="${wk.x}" class="input" style="background: transparent"></td> <td><input type="text" name="Y" value="${wk.y}" class="input" style="background: transparent"></td> <td><input type="text" name="Z" value="${wk.z}" class="input" style="background: transparent"></td>
      <td><input type="text" name="AA" value="${wk.AA}" class="input" style="background: transparent"></td> <td><input type="text" name="AB" value="${wk.AB}" class="input" style="background: transparent"></td> <td><input type="text" name="AC" value="${wk.AC}" class="input" style="background: transparent"></td> <td><input type="text" name="AD" value="${wk.AD}" class="input" style="background: transparent"></td> <td><input type="text" name="AE" value="${wk.AE}" class="input" style="background: transparent"></td> <td><input type="text" name="AF" value="${wk.AF}" class="input" style="background: transparent"></td> <td><input type="text" name="AG" value="${wk.AG}" class="input" style="background: transparent"></td> <td><input type="text" name="AH" value="${wk.AH}" class="input" style="background: transparent"></td> <td><input type="text" name="AI" value="${wk.AI}" class="input" style="background: transparent"></td> <td><input type="text" name="AJ" value="${wk.AJ}" class="input" style="background: transparent"></td> <td><input type="text" name="AK" value="${wk.AK}" class="input" style="background: transparent"></td> <td><input type="text" name="AL" value="${wk.AL}" class="input" style="background: transparent"></td> <td><input type="text" name="AM" value="${wk.AM}" class="input" style="background: transparent"></td> <td><input type="text" name="AN" value="${wk.AN}" class="input" style="background: transparent"></td> <td><input name="AO" type="text" value="${wk.AO}" class="input" style="background: transparent"></td> <td><input type="text" name="AP" value="${wk.AP}" class="input" style="background: transparent"></td> <td><input type="text" name="AQ" value="${wk.AQ}" class="input" style="background: transparent"></td> <td><input type="text" name="AR" value="${wk.AR}" class="input" style="background: transparent"></td> <td><input type="text" name="ASS" value="${wk.ASS}" class="input" style="background: transparent"></td> <td><input type="text" name="AT" value="${wk.AT}" class="input" style="background: transparent"></td> <td><input type="text" name="AU" value="${wk.AU}" class="input" style="background: transparent"></td> <td><input type="text" name="AV" value="${wk.AV}" class="input" style="background: transparent"></td> <td><input type="text" name="AW" value="${wk.AW}" class="input" style="background: transparent"></td> <td><input type="text" name="AX" value="${wk.AX}" class="input" style="background: transparent"></td> <td><input type="text" name="AY" value="${wk.AY}" class="input" style="background: transparent"></td> <td><input type="text" name="AZ" value="${wk.AZ}" class="input" style="background: transparent"></td>
      <td><input type="text" name="BA" value="${wk.BA}" class="input" style="background: transparent"></td> <td style="color: #ffffff;"><input type="text" name="BB" value="${wk.BB}" class="input" style="background: transparent"></td> <td><input type="text" name="BC" value="${wk.BC}" class="input" style="background: transparent"></td> <td><input type="text" name="BD" value="${wk.BD}" class="input" style="background: transparent"></td> <td><input type="text" name="BE" value="${wk.BE}" class="input" style="background: transparent"></td> <td><input type="text" name="BF" value="${wk.BF}" class="input" style="background: transparent"></td> <td><input type="text" name="BG" value="${wk.BG}" class="input" style="background: transparent"></td> <td><input type="text" name="BH" value="${wk.BH}" class="input" style="background: transparent"></td> <td><input type="text" name="BI" value="${wk.BI}" class="input" style="background: transparent"></td> <td><input type="text" name="BJ" value="${wk.BJ}" class="input" style="background: transparent"></td> <td><input type="text" name="BK" value="${wk.BK}" class="input" style="background: transparent"></td> <td><input type="text" name="BL" value="${wk.BL}" class="input" style="background: transparent"></td> <td><input type="text" name="BM" value="${wk.BM}" class="input" style="background: transparent"></td> <td><input type="text" name="BN" value="${wk.BN}" class="input" style="background: transparent"></td> <td><input name="BO" type="text" value="${wk.BO}" class="input" style="background: transparent"></td> <td><input type="text" name="BP" value="${wk.BP}" class="input" style="background: transparent"></td> <td><input type="text" name="BQ" value="${wk.BQ}" class="input" style="background: transparent"></td> <td><input type="text" name="BR" value="${wk.BR}" class="input" style="background: transparent"></td> <td><input type="text" name="BS" value="${wk.BS}" class="input" style="background: transparent"></td> <td><input type="text" name="BT" value="${wk.BT}" class="input" style="background: transparent"></td> <td><input type="text" name="BU" value="${wk.BU}" class="input" style="background: transparent"></td> <td><input type="text" name="BV" value="${wk.BV}" class="input" style="background: transparent"></td> <td><input type="text" name="BW" value="${wk.BW}" class="input" style="background: transparent"></td> <td><input type="text" name="BX" value="${wk.BX}" class="input" style="background: transparent"></td> <td><input type="text" name="BYY" value="${wk.BYY}" class="input" style="background: transparent"></td> <td><input type="text" name="BZ" value="${wk.BZ}" class="input" style="background: transparent"></td>
      <td><input type="text" name="CA" value="${wk.CA}" class="input" style="background: transparent"></td> <td><input type="text" name="CB" value="${wk.CB}" class="input" style="background: transparent"></td> <td><input type="text" name="CC" value="${wk.CC}" class="input" style="background: transparent"></td> <td><input type="text" name="CD" value="${wk.CD}" class="input" style="background: transparent"></td> <td><input type="text" name="CE" value="${wk.CE}" class="input" style="background: transparent"></td> <td><input type="text" name="CF" value="${wk.CF}" class="input" style="background: transparent"></td> <td><input type="text" name="CG" value="${wk.CG}" class="input" style="background: transparent"></td> <td><input type="text" name="CH" value="${wk.CH}" class="input" style="background: transparent"></td> <td><input type="text" name="CI" value="${wk.CI}" class="input" style="background: transparent"></td> <td><input type="text" name="CJ" value="${wk.CJ}" class="input" style="background: transparent"></td> <td><input type="text" name="CK" value="${wk.CK}" class="input" style="background: transparent"></td> <td><input type="text" name="CL" value="${wk.CL}" class="input" style="background: transparent"></td> <td><input type="text" name="CM" value="${wk.CM}" class="input" style="background: transparent"></td> <td><input type="text" name="CN" value="${wk.CN}" class="input" style="background: transparent"></td> <td><input name="CO" type="text" value="${wk.CO}" class="input" style="background: transparent"></td> <td><input type="text" name="CP" value="${wk.CP}" class="input" style="background: transparent"></td> <td><input type="text" name="CQ" value="${wk.CQ}" class="input" style="background: transparent"></td> <td><input type="text" name="CR" value="${wk.CR}" class="input" style="background: transparent"></td> <td><input type="text" name="CS" value="${wk.CS}" class="input" style="background: transparent"></td> <td><input type="text" name="CT" value="${wk.CT}" class="input" style="background: transparent"></td> <td><input type="text" name="CU" value="${wk.CU}" class="input" style="background: transparent"></td> <td><input type="text" name="CV" value="${wk.CV}" class="input" style="background: transparent"></td> <td><input type="text" name="renYuan" value="${wk.renYuan}" class="input" style="background: transparent" readonly="readonly"></td> <td><input type="text" name="gongSi" value="${wk.gongSi}" class="input" style="background: transparent" readonly="readonly"></td>
    </tr>
    </c:forEach>
    <%--                        <%=request.getAttribute("wkYGInfo")%>--%>
    <c:forEach items="${wkYGInfo}" var="wkyg">
      <tr>
        <td hidden="hidden"><input type="text" name="id" value="${wkyg.id}"></td>
        <td><input type="text" id="A" name="A" value="${wkyg.a}" class="input" style="background: transparent"></td> <td><input type="text" name="B" value="${wkyg.b}" class="input" style="background: transparent"></td> <td><input type="text" name="C" value="${wkyg.c}" class="input" style="background: transparent"></td> <td><input type="text" name="D" value="${wkyg.d}" class="input" style="background: transparent"></td> <td><input type="text" name="E" value="${wkyg.e}" class="input" style="background: transparent"></td> <td><input type="text" name="F" value="${wkyg.f}" class="input" style="background: transparent"></td> <td><input type="text" name="G" value="${wkyg.g}" class="input" style="background: transparent"></td> <td><input type="text" name="H" value="${wkyg.h}" class="input" style="background: transparent"></td> <td><input type="text" name="I" value="${wkyg.i}" class="input" style="background: transparent"></td> <td><input type="text" name="J" value="${wkyg.j}" class="input" style="background: transparent"></td> <td><input type="text" name="K" value="${wkyg.k}" class="input" style="background: transparent"></td> <td><input type="text" name="L" value="${wkyg.l}" class="input" style="background: transparent"></td> <td><input type="text" name="M" value="${wkyg.m}" class="input" style="background: transparent"></td> <td><input type="text" name="N" value="${wkyg.n}" class="input" style="background: transparent"></td> <td><input type="text" name="O" value="${wkyg.o}" class="input" style="background: transparent"></td> <td><input type="text" name="P" value="${wkyg.p}" class="input" style="background: transparent"></td> <td><input type="text" name="Q" value="${wkyg.q}" class="input" style="background: transparent"></td> <td><input type="text" name="R" value="${wkyg.r}" class="input" style="background: transparent"></td> <td><input type="text" name="S" value="${wkyg.s}" class="input" style="background: transparent"></td> <td><input type="text" name="T" value="${wkyg.t}" class="input" style="background: transparent"></td> <td><input type="text" name="U" value="${wkyg.u}" class="input" style="background: transparent"></td> <td><input type="text" name="V" value="${wkyg.v}" class="input" style="background: transparent"></td> <td><input type="text" name="W" value="${wkyg.w}" class="input" style="background: transparent"></td> <td><input type="text" name="X" value="${wkyg.x}" class="input" style="background: transparent"></td> <td><input type="text" name="Y" value="${wkyg.y}" class="input" style="background: transparent"></td> <td><input type="text" name="Z" value="${wkyg.z}" class="input" style="background: transparent"></td>
        <td><input type="text" name="AA" value="${wkyg.AA}" class="input" style="background: transparent"></td> <td><input type="text" name="AB" value="${wkyg.AB}" class="input" style="background: transparent"></td> <td><input type="text" name="AC" value="${wkyg.AC}" class="input" style="background: transparent"></td> <td><input type="text" name="AD" value="${wkyg.AD}" class="input" style="background: transparent"></td> <td><input type="text" name="AE" value="${wkyg.AE}" class="input" style="background: transparent"></td> <td><input type="text" name="AF" value="${wkyg.AF}" class="input" style="background: transparent"></td> <td><input type="text" name="AG" value="${wkyg.AG}" class="input" style="background: transparent"></td> <td><input type="text" name="AH" value="${wkyg.AH}" class="input" style="background: transparent"></td> <td><input type="text" name="AI" value="${wkyg.AI}" class="input" style="background: transparent"></td> <td><input type="text" name="AJ" value="${wkyg.AJ}" class="input" style="background: transparent"></td> <td><input type="text" name="AK" value="${wkyg.AK}" class="input" style="background: transparent"></td> <td><input type="text" name="AL" value="${wkyg.AL}" class="input" style="background: transparent"></td> <td><input type="text" name="AM" value="${wkyg.AM}" class="input" style="background: transparent"></td> <td><input type="text" name="AN" value="${wkyg.AN}" class="input" style="background: transparent"></td> <td><input name="AO" type="text" value="${wkyg.AO}" class="input" style="background: transparent"></td> <td><input type="text" name="AP" value="${wkyg.AP}" class="input" style="background: transparent"></td> <td><input type="text" name="AQ" value="${wkyg.AQ}" class="input" style="background: transparent"></td> <td><input type="text" name="AR" value="${wkyg.AR}" class="input" style="background: transparent"></td> <td><input type="text" name="ASS" value="${wkyg.ASS}" class="input" style="background: transparent"></td> <td><input type="text" name="AT" value="${wkyg.AT}" class="input" style="background: transparent"></td> <td><input type="text" name="AU" value="${wkyg.AU}" class="input" style="background: transparent"></td> <td><input type="text" name="AV" value="${wkyg.AV}" class="input" style="background: transparent"></td> <td><input type="text" name="AW" value="${wkyg.AW}" class="input" style="background: transparent"></td> <td><input type="text" name="AX" value="${wkyg.AX}" class="input" style="background: transparent"></td> <td><input type="text" name="AY" value="${wkyg.AY}" class="input" style="background: transparent"></td> <td><input type="text" name="AZ" value="${wkyg.AZ}" class="input" style="background: transparent"></td>
        <td><input type="text" name="BA" value="${wkyg.BA}" class="input" style="background: transparent"></td> <td style="color: #ffffff;"><input type="text" name="BB" value="${wkyg.BB}" class="input" style="background: transparent"></td> <td><input type="text" name="BC" value="${wkyg.BC}" class="input" style="background: transparent"></td> <td><input type="text" name="BD" value="${wkyg.BD}" class="input" style="background: transparent"></td> <td><input type="text" name="BE" value="${wkyg.BE}" class="input" style="background: transparent"></td> <td><input type="text" name="BF" value="${wkyg.BF}" class="input" style="background: transparent"></td> <td><input type="text" name="BG" value="${wkyg.BG}" class="input" style="background: transparent"></td> <td><input type="text" name="BH" value="${wkyg.BH}" class="input" style="background: transparent"></td> <td><input type="text" name="BI" value="${wkyg.BI}" class="input" style="background: transparent"></td> <td><input type="text" name="BJ" value="${wkyg.BJ}" class="input" style="background: transparent"></td> <td><input type="text" name="BK" value="${wkyg.BK}" class="input" style="background: transparent"></td> <td><input type="text" name="BL" value="${wkyg.BL}" class="input" style="background: transparent"></td> <td><input type="text" name="BM" value="${wkyg.BM}" class="input" style="background: transparent"></td> <td><input type="text" name="BN" value="${wkyg.BN}" class="input" style="background: transparent"></td> <td><input name="BO" type="text" value="${wkyg.BO}" class="input" style="background: transparent"></td> <td><input type="text" name="BP" value="${wkyg.BP}" class="input" style="background: transparent"></td> <td><input type="text" name="BQ" value="${wkyg.BQ}" class="input" style="background: transparent"></td> <td><input type="text" name="BR" value="${wkyg.BR}" class="input" style="background: transparent"></td> <td><input type="text" name="BS" value="${wkyg.BS}" class="input" style="background: transparent"></td> <td><input type="text" name="BT" value="${wkygBT}" class="input" style="background: transparent"></td> <td><input type="text" name="BU" value="${wkyg.BU}" class="input" style="background: transparent"></td> <td><input type="text" name="BV" value="${wkyg.BV}" class="input" style="background: transparent"></td> <td><input type="text" name="BW" value="${wkyg.BW}" class="input" style="background: transparent"></td> <td><input type="text" name="BX" value="${wkyg.BX}" class="input" style="background: transparent"></td> <td><input type="text" name="BYY" value="${wkyg.BYY}" class="input" style="background: transparent"></td> <td><input type="text" name="BZ" value="${wkyg.BZ}" class="input" style="background: transparent"></td>
        <td><input type="text" name="CA" value="${wkyg.CA}" class="input" style="background: transparent"></td> <td><input type="text" name="CB" value="${wkyg.CB}" class="input" style="background: transparent"></td> <td><input type="text" name="CC" value="${wkyg.CC}" class="input" style="background: transparent"></td> <td><input type="text" name="CD" value="${wkyg.CD}" class="input" style="background: transparent"></td> <td><input type="text" name="CE" value="${wkyg.CE}" class="input" style="background: transparent"></td> <td><input type="text" name="CF" value="${wkyg.CF}" class="input" style="background: transparent"></td> <td><input type="text" name="CG" value="${wkyg.CG}" class="input" style="background: transparent"></td> <td><input type="text" name="CH" value="${wkyg.CH}" class="input" style="background: transparent"></td> <td><input type="text" name="CI" value="${wkyg.CI}" class="input" style="background: transparent"></td> <td><input type="text" name="CJ" value="${wkyg.CJ}" class="input" style="background: transparent"></td> <td><input type="text" name="CK" value="${wkyg.CK}" class="input" style="background: transparent"></td> <td><input type="text" name="CL" value="${wkyg.CL}" class="input" style="background: transparent"></td> <td><input type="text" name="CM" value="${wkyg.CM}" class="input" style="background: transparent"></td> <td><input type="text" name="CN" value="${wkyg.CN}" class="input" style="background: transparent"></td> <td><input name="CO" type="text" value="${wkyg.CO}" class="input" style="background: transparent"></td> <td><input type="text" name="CP" value="${wkyg.CP}" class="input" style="background: transparent"></td> <td><input type="text" name="CQ" value="${wkyg.CQ}" class="input" style="background: transparent"></td> <td><input type="text" name="CR" value="${wkyg.CR}" class="input" style="background: transparent"></td> <td><input type="text" name="CS" value="${wkyg.CS}" class="input" style="background: transparent"></td> <td><input type="text" name="CT" value="${wkyg.CT}" class="input" style="background: transparent"></td> <td><input type="text" name="CU" value="${wkyg.CU}" class="input" style="background: transparent"></td> <td><input type="text" name="CV" value="${wkyg.CV}" class="input" style="background: transparent"></td> <td><input type="text" name="renYuan" value="${wkyg.renYuan}" class="input" style="background: transparent" readonly="readonly"></td> <td><input type="text" name="gongSi" value="${wkyg.gongSi}" class="input" style="background: transparent" readonly="readonly"></td>
      </tr>
    </c:forEach>
  </table>
  </form>
  <script>
    /*查询数据*/
    // let wkYGInfo = [];
    $('#getAll').click(function (){
     /* $('#table').load("test.jsp",function(){*/
        $.ajax({
          type:'post',
          url:'workbenchGetData',
          data:{

          },
          dataType:'text',
          success:function (wkYGInfo){
            console.log(wkYGInfo)
            // wkYGInfo.push(data)
            for(var i=1;i<=wkYGInfo.length;i++){
              $('#A').val(wkYGInfo[i].A)
            }
          },
          error:function (err){
            console.log(err)
          }
        })
      /*});*/
    });

  </script>
  </body>
</html>