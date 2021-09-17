<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2020/11/10
  Time: 14:18
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<link rel="stylesheet" href="static/bootstrap-3.3.7-dist/css/bootstrap.min.css"/><!--这是bootstrap css文件-->
<link rel="stylesheet" href="static/css/regulations.css"/>
<script src="static/jquery/jquery.min.js"></script> <!--这是jquery-->
<script src="static/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script><!--这是bootstrap js文件-->

<script src="static/easyui/jquery.easyui.min.js"></script><!--这是jQuery easyUI文件-->
<script src="static/easyui/locale/easyui-lang-zh_CN.js"></script><!--这是easyui中文包文件-->
<link rel="stylesheet" type="text/css" href="static/easyui/themes/default/easyui.css"><!--这是easyui默认主题CSS文件-->
<link rel="stylesheet" type="text/css" href="static/easyui/themes/icon.css"><!--这是easyui图标CSS文件-->
<link rel="stylesheet" type="text/css" href="static/easyui/demo/demo.css"><!--这是easyui图标demo样式-->
<html>
<head>
  <title>index</title>
</head>
<body>
  <h2>公司管理系统</h2>
  <div class="easyui-layout" style="width:1200px;height:550px;">
<%--    <div data-options="region:'east',split:true" title="East" style="width:180px;">--%>
<%--      <ul class="easyui-tree" data-options="url:'tree_data1.json',method:'get',animate:true,dnd:true"></ul>--%>
<%--    </div>--%>
    <div data-options="region:'west',split:true" title="" style="width:230px">
      <div class="easyui-accordion" data-options="fit:true,border:false">
        <div title="公司" style="padding:10px;">
<%--          <a href="gongSiRegister.jsp" style="color: black">公司添加</a><br>--%>
          <a href="gongSi" style="color: black">公司规定</a><br>
          <a href="barChart.jsp" style="color: black">公司柱状图</a><br>
        </div>
        <div title="人员" data-options="selected:true" style="padding:10px;">
          <a href="renYuanRegister.jsp" style="color: black">人员添加</a><br>
          <a href="renYuan" style="color: black">人员管理</a><br>
          <a href="copy" style="color: black">人员规定</a><br>
          <a href="renyuanChart.jsp" style="color: black">人员柱状图</a><br>
        </div>
        <div title="操作" style="padding:10px">
          <a href="login.jsp" style="color: black">退出</a>
        </div>
      </div>
    </div>
    <div data-options="region:'center',title:'主页',iconCls:'icon-ok'">
      <div class="easyui-tabs" data-options="fit:true,border:false,plain:true">
        <div title="公司规定" data-options="href:'gongSi'" style="padding:10px"></div>
        <div title="DataGrid" style="padding:5px">
          <table class="easyui-datagrid"
                 data-options="url:'datagrid_data1.json',method:'get',singleSelect:true,fit:true,fitColumns:true">
            <thead>
            <tr>
              <th data-options="field:'itemid'" width="80">Item ID</th>
              <th data-options="field:'productid'" width="100">Product ID</th>
              <th data-options="field:'listprice',align:'right'" width="80">List Price</th>
              <th data-options="field:'unitcost',align:'right'" width="80">Unit Cost</th>
              <th data-options="field:'attr1'" width="150">Attribute</th>
              <th data-options="field:'status',align:'center'" width="50">Status</th>
            </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  </div>

</body>
</html>
