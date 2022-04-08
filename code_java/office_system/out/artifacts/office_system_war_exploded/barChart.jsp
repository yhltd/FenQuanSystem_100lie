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
    <link rel="shortcut icon" href="img/logo.png" />
    <title>云合未来分权编辑系统</title>
    <script type="text/javascript" src="static/echarts/echarts.min.js"></script>
    <script type="text/javascript" src="static/jquery/jquery.min.js"></script>
</head>
<body>
<%--为echarts准备一个dom--%>
<div style="margin:1%">
    <p style="font-size: 30px;color: black;">公司柱状图</p>
    <span>合计：</span>
    <span id="heji">0</span>
</div>

<div id="main" style="width: 3000px;height: 100%"></div>
<%--    <div style="width: 100%; height: 400px; overflow-x: scroll;margin-left: 14px">--%>
<%--        --%>
<%--    </div>--%>

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

        var columns = [] //["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","AA","AB","AC","AD","AE","AF","AG","AH","AI","AJ","AK","AL","AM","AN","AO","AP","AQ","AR","AS","AT","AU","AV","AW","AX","AW","AZ","BA","BB","BC","BD","BE","BF","BG","BG","BI","BJ","BK","BL","BM","BN","BO","BP","BQ","BR","BS","BT","BU","BV","BW","BX","BY","BZ","CA","CB","CC","CD","CE","CF","CG","CH","CI","CJ","CK","CL","CM","CN","CO","CP","CQ","CR","CS","CT","CU","CV"]
        var values = []
        var span=document.getElementById("heji");
        var heji=0
        for (let col in data){
            columns.push(col);
            values.push(data[col])
            heji=heji+data[col]
        }
        span.innerText=heji;
        //console.log(columns)


        myChart.setOption({
            title: {
                text: "",
                textStyle:{
                    color:'#000000', //颜色
                    fontStyle:'normal', //风格
                    fontWeight:'normal', //粗细
                    fontFamily:'Microsoft yahei', //字体
                    fontSize:20, //大小
                    align:'center' //水平对齐
                },
            },
            grid:{
                left:'40px'
            },
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "shadow"
                }
            },
            xAxis: {

                nameTextStyle: {
                    fontSize:15,
                    color:'#000000', //颜色
                },
                name: '列',
                type: 'category',
                data: columns,
                axisLine:{
                    lineStyle:{
                        color:'#000000',
                        width:2,//这里是为了突出显示加上的
                    }
                },

            },
            yAxis: {
                nameTextStyle: {
                    fontSize:15,
                    color:'#000000', //颜色
                },
                axisLine:{
                    lineStyle:{
                        color:'#000000',
                        width:2,//这里是为了突出显示加上的
                    }
                },
                name: '数量',
                type: 'value'
            },
            series: [{
                name: '${GongSi}',
                type: 'bar',//柱状图
                data: values,
                itemStyle: {
                    normal: {
                        color: "#f4422c",//折线点的颜色
                    }
                },
            }],

            <%--title: {--%>
            <%--    text: '公司柱状图'--%>
            <%--},--%>
            <%--legend: {--%>
            <%--    type: 'plain',--%>
            <%--    data:['${GongSi}']--%>
            <%--},--%>
            <%--grid: {--%>
            <%--    containLabel: 'true',--%>
            <%--    left: 10,--%>
            <%--    bottom: 10,--%>
            <%--    right: 10,--%>
            <%--},--%>
            <%--tooltip: {--%>
            <%--    trigger: "axis",--%>
            <%--    axisPointer: {--%>
            <%--        type: "shadow"--%>
            <%--    }--%>
            <%--},--%>
            <%--xAxis: {--%>
            <%--    type: 'category',--%>
            <%--    data: columns--%>
            <%--},--%>
            <%--yAxis: {--%>
            <%--    type: 'value'--%>
            <%--    --%>
            <%--},--%>
            <%--series: [{--%>
            <%--    name: '${GongSi}',--%>
            <%--    data: values,--%>
            <%--    type: 'bar',--%>
            <%--    label: {--%>
            <%--        show: "true",--%>
            <%--        // position: "top"--%>
            <%--        position: "bottom"--%>
            <%--    }--%>
            <%--}]--%>
        });
    });
</script>
</body>

</html>
