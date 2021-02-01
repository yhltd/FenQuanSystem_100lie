<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2020/11/20
  Time: 9:18
  To change this template use File | Settings | File Templates.
--%>
<%@page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<script src="static/jquery/jquery.min.js"></script> <!--这是jquery-->

<html>
<head>
    <meta http-equiv="Content-Type" content="text/html" charset="UTF-8">
    <title>柱状图</title>
    <script type="text/javascript" src="static/echarts/echarts.min.js"></script>
    <script type="text/javascript" src="static/jquery/jquery.min.js"></script>
</head>
<body>
<%--为echarts准备一个dom--%>
    <div id="main" style="width: 600px;height: 400px"></div>
    <a href="workbench">工作台</a>
</body>
<script type="text/javascript">
    var myChart = echarts.init(document.getElementById('main'));
    var option = {
        title: {
            text: '公司柱状图'
        },
        tooltip: {
            show:true
        },
        legend: {
            data:['公司']
        },
        xAxis: [{
            type:'category'
        }],
        yAxis: [{
            type:'value'
        }],
        series: [{
            name: '公司',
            type: 'bar',
        }]
    };
    //加载数据
    loadDATA(option);
    // 为echarts对象加载数据
    myChart.setOption(option);

    function loadDATA(option){
        $.ajax({
            type : "post",
            url : "gongSiChart",
            data : {},
            dataType : "json", //返回数据形式为json
            success : function(result) {
                if (result) {
                    //初始化option.xAxis[0]中的data
                    option.xAxis[0].data=[];
                    for(var i=0;i<result.length;i++){
                        option.xAxis[0].data.push(result[i].C);
                    }
                    //初始化option.series[0]中的data
                    option.series[0].data=[];
                    for(var i=0;i<result.length;i++){
                        option.series[0].data.push(result[i].B);
                    }
                }
            },
            error : function(errorMsg) {
                //请求失败时执行该函数
                alert("图表请求数据失败!");
                myChart.hideLoading();
            },
        });
    }
</script>
</html>
