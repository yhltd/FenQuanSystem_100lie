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
    <div style="width: 100%; height: 400px; overflow-x: scroll">
        <div id="main" style="width: 3000px;height: 100%"></div>
    </div>

<%--    <a href="workbench.jsp">工作台</a>--%>
<script type="text/javascript">
    // var myChart = echarts.init(document.getElementById('main'));
    // var option = {
    //     title: {
    //         text: '公司柱状图'
    //     },
    //     tooltip: {
    //         show:true
    //     },
    //     legend: {
    //         data:['公司']
    //     },
    //     xAxis: {
    //         data:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    //             "AA","AB","AC","AD","AE","AF","AG","AH","AI","AJ","AK","AL","AM","AN","AO","AP","AQ","AR","ASS","AT","AU","AV","AW","AX","AY","AZ",
    //             "BA","BB","BC","BD","BE","BF","BG","BH","BI","BJ","BK","BL","BM","BN","BO","BP","BQ","BR","BS","BT","BU","BV","BW","BX","BYY","BZ",
    //             "CA","CB","CC","CD","CE","CF","CG","CH","CI","CJ","CK","CL","CM","CN","CO","CP","CQ","CR","CS","CT","CU","CV"]
    //     },
    //     yAxis: {},
    //     series: [{
    //         name: '公司',
    //         type: 'bar',
    //     }]
    // };
    //加载数据
    // loadDATA(option);
    // 为echarts对象加载数据
    // myChart.setOption(option);

    //  function loadDATA(option){
    //     $.ajax({
    //         type : "post",
    //         url : "gongSiChart",
    //         data : {},
    //         // dataType : "json", //返回数据形式为json
    //         success : function(result) {
    //             alert(result)
    //             // if (result) {
    //             //     //初始化option.xAxis[0]中的data
    //             //     option.xAxis[0].data=[];
    //             //     for(var i=0;i<result.length;i++){
    //             //         option.xAxis[0].data.push(result[i].C);
    //             //     }
    //             //     //初始化option.series[0]中的data
    //             //     option.series[0].data=[];
    //             //     for(var i=0;i<result.length;i++){
    //             //         option.series[0].data.push(result[i].B);
    //             //     }
    //             // }
    //         },
    //         error : function(errorMsg) {
    //             //请求失败时执行该函数
    //             alert("图表请求数据失败!");
    //             myChart.hideLoading();
    //         },
    //     });
    // }

    var myChart = echarts.init(document.getElementById('main'));
    myChart.showLoading();
    $.get('gongSiChart').done(function (data) {
        myChart.hideLoading();
        data = JSON.parse(data);

        var columns = []
        var values = []
        for (let col in data){
            columns.push(col);
            values.push(data[col])
        }
        console.log(columns)


        myChart.setOption({
            title: {
                text: '公司柱状图'
            },
            legend: {
                type: 'plain',
                data:['${GongSi}']
            },
            grid: {
                containLabel: 'true',
                left: 10,
                bottom: 10,
                right: 10,
            },
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "shadow"
                }
            },
            xAxis: {
                type: 'category',
                data: columns
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                name: '${GongSi}',
                data: values,
                type: 'bar',
                label: {
                    show: "true",
                    // position: "top"
                    position: "bottom"
                }
            }]
        });
    });
</script>
</body>

</html>
