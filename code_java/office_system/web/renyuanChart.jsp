<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2020/11/20
  Time: 9:18
  To change this template use File | Settings | File Templates.
--%>

<html>
<head>
  <%@page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
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

  <meta http-equiv="Content-Type" content="text/html" charset="UTF-8">
  <link rel="shortcut icon" href="img/logo.png" />
  <title>云合未来分权编辑系统</title>
  <script type="text/javascript" src="static/echarts/echarts.min.js"></script>
  <script type="text/javascript" src="static/jquery/jquery.min.js"></script>
</head>
<body >

<a href="workbench.jsp" style="font-size: 30px;color: black;margin-left: 14px">人员柱状图</a>
<div style="border: 1px ;height:35px;margin-right: 20px;margin-left: 14px">

<%--  <select class="easyui-combobox width" name="username" id="username" style="font-size: 20px;background-color: #e7e7e7;border: 1px;color: white;margin-left: 30%">--%>
  <select class="easyui-combobox width" name="username" id="username" style="font-size: 20px;height:30px;width: 150px;background-color: #9acfea;color: black;margin-left: 14px">
    <c:forEach items="${renyuanInit}" var="username">
      <option>${username}</option>
    </c:forEach>
  </select>
    <%--<div id="content"></div>--%>
     <%-- <select class="easyui-combobox width" name="username" id="username" style="font-size: 20px;width: 150px;background-color: #9acfea;color: black;margin-left: 40%">
        <option>${username}</option>
      </select>--%>

  <button id="select_renyuan" style="background-color: #9acfea; border-color:#9acfea;font-size: 20px;border-radius: 7px;height:35px"> 查  询  </button>
</div><br><br>

<div style="width: 100%; height: 400px; overflow-x: scroll;margin-left: 14px">
  <div id="main" style="width: 3000px;height: 100%;"></div>
</div>
<script type="text/javascript">
  /*$(function (){
    var a=1;
    $.ajax({
      type: 'post',
      url:'renYuanInit',
      data:{

      },
      /!*async:true,*!/
      /!* dataType: "String",*!/
      success:function (result){
        console.log(result)
        //转换为javascript对象
        var user = eval('('+result+')');
          console.log(user)
          var str = "<select class=\"easyui-combobox width\" name=\"username\" id=\"username\" style=\"font-size: 20px;width: 150px;background-color: #9acfea;color: black;margin-left: 40%\">";
        var strcontent ="";
        for(var i=0;i<user.length;i++){
          strcontent+="<option>"+user[i]+"</option>"
            console.log(user[i])
        }
          str+=strcontent+"</select>";
        $("#content").html(str);
        // for (let i = 0;i<result.length;++i){
        //     $('#gongSis').val(result[i])
        // }
        /!*alert("success");*!/
      },error:function () {
        alert("error1!");
      }
    })
  })*/
  var renyuanChart = echarts.init(document.getElementById('main'));
  renyuanChart.showLoading();
  $.get('RenYuanChart').done(function (data) {
    renyuanChart.hideLoading();
    data = JSON.parse(data);

    var columns = []
    var values = []
    for (let col in data){
      columns.push(col);
      values.push(data[col])
    }

    renyuanChart.setOption({
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
        left:'14px'
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
            color: "#F4422C",//折线点的颜色
          }
        },
      }],

      <%--title: {--%>
      <%--  text: '人员柱状图'--%>
      <%--},--%>
      <%--legend: {--%>
      <%--  type: 'plain',--%>
      <%--  data:['${userName}']--%>
      <%--},--%>
      <%--grid: {--%>
      <%--  containLabel: 'true',--%>
      <%--  left: 10,--%>
      <%--  bottom: 10,--%>
      <%--  right: 10,--%>
      <%--},--%>
      <%--tooltip: {--%>
      <%--  trigger: "axis",--%>
      <%--  axisPointer: {--%>
      <%--    type: "shadow"--%>
      <%--  }--%>
      <%--},--%>
      <%--xAxis:{--%>
      <%--  type: 'category',--%>
      <%--  data: columns--%>
      <%--},--%>
      <%--yAxis: {--%>
      <%--  type: 'value'--%>
      <%--},--%>
      <%--series: {--%>
      <%--  name: '${userName}',--%>
      <%--  data: values,--%>
      <%--  type: 'bar',--%>
      <%--  label: {--%>
      <%--    show: "true",--%>
      <%--    // position: "top"--%>
      <%--    position: "bottom"--%>
      <%--  }--%>
      <%--},--%>
    });


    <%--myChartPie.setOption({--%>
    <%--  series: [{--%>
    <%--    name: '${userName}',--%>
    <%--    data: values,columns,--%>
    <%--    type: 'pie',--%>
    <%--    radius: '55%',--%>

    <%--  }]--%>
    <%--});--%>

  });

  <%--var myChart = echarts.init(document.getElementById('main'));--%>
  <%-- myChart.showLoading();--%>
  <%--$.get('RenYuanChart').done(function (data) {--%>
  <%--  myChart.hideLoading();--%>
  <%--  data = JSON.parse(data);--%>

  <%--  var columns = []--%>
  <%--  var values = []--%>
  <%--  for (let col in data){--%>
  <%--    columns.push(col);--%>
  <%--    values.push(data[col])--%>
  <%--  }--%>

  <%--  myChart.setOption({--%>
  <%--    title: {--%>
  <%--      text: '人员柱状图'--%>
  <%--    },--%>
  <%--    legend: {--%>
  <%--      type: 'plain',--%>
  <%--      data:['${userName}']--%>
  <%--    },--%>
  <%--    grid: {--%>
  <%--      containLabel: 'true',--%>
  <%--      left: 10,--%>
  <%--      bottom: 10,--%>
  <%--      right: 10,--%>
  <%--    },--%>
  <%--    tooltip: {--%>
  <%--      trigger: "axis",--%>
  <%--      axisPointer: {--%>
  <%--        type: "shadow"--%>
  <%--      }--%>
  <%--    },--%>
  <%--    xAxis:{--%>
  <%--      type: 'category',--%>
  <%--      data: columns--%>
  <%--     },--%>
  <%--    yAxis: {--%>
  <%--      type: 'value'--%>
  <%--         },--%>
  <%--    series: {--%>
  <%--                name: '${userName}',--%>
  <%--                data: values,--%>
  <%--                type: 'bar',--%>
  <%--                label: {--%>
  <%--                  show: "true",--%>
  <%--                  // position: "top"--%>
  <%--                  position: "bottom"--%>
  <%--                }--%>
  <%--        },--%>
  <%--  });--%>


  <%--  &lt;%&ndash;myChartPie.setOption({&ndash;%&gt;--%>
  <%--  &lt;%&ndash;  series: [{&ndash;%&gt;--%>
  <%--  &lt;%&ndash;    name: '${userName}',&ndash;%&gt;--%>
  <%--  &lt;%&ndash;    data: values,columns,&ndash;%&gt;--%>
  <%--  &lt;%&ndash;    type: 'pie',&ndash;%&gt;--%>
  <%--  &lt;%&ndash;    radius: '55%',&ndash;%&gt;--%>

  <%--  &lt;%&ndash;  }]&ndash;%&gt;--%>
  <%--  &lt;%&ndash;});&ndash;%&gt;--%>

  <%--});--%>
  /*饼图*/
  $('#select_renyuan').click(function (){
    renyuanChart.showLoading();
    let username = $('#username').val();
    console.log(username)
    $.ajax({
      type: 'post',
      url:'RenYuanAllChart',
      data:{
        username:username
      },
      dataType: "text",
      success:function (result){
        console.log(result)
        alert("查询成功!!!")
        renyuanChart.hideLoading();
        data = JSON.parse(result);
        var columns = []
        var values = []
        for (let col in data){
          columns.push(col);
          values.push(data[col])
        }
        renyuanChart.setOption({

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
                color: "#F4422C",//折线点的颜色
              }
            },
          }],

          // title: {
          //   text: '人员柱状图'
          // },
          // legend: {
          //   type: 'plain',
          //   data:[username]
          // },
          // grid: {
          //   containLabel: 'true',
          //   left: 10,
          //   bottom: 10,
          //   right: 10,
          // },
          // tooltip: {
          //   trigger: "axis",
          //   axisPointer: {
          //     type: "shadow"
          //   }
          // },
          // xAxis: {
          //   type: 'category',
          //   data: columns
          // },
          // yAxis: {
          //   type: 'value'
          // },
          // series: [{
          //   name: username,
          //   data: values,
          //   type: 'bar',
          //   label: {
          //     show: "true",
          //     // position: "top"
          //     position: "bottom"
          //   }
          // }]

        });
      }
    })

  })
  // function RenYuanChoose(){
  //   myChart.showLoading();
  //   let username = $('#username').val();
  //   console.log(username)
  //   $.ajax({
  //     type: 'post',
  //     url:'RenYuanAllChart',
  //     data:{
  //       username:username
  //     },
  //     dataType: "text",
  //     success:function (result){
  //       console.log(result)
  //       alert("查询成功!!!")
  //       myChart.hideLoading();
  //       data = JSON.parse(result);
  //       var columns = []
  //       var values = []
  //       for (let col in data){
  //         columns.push(col);
  //         values.push(data[col])
  //       }
  //       myChart.setOption({
  //         title: {
  //           text: '人员柱状图'
  //         },
  //         legend: {
  //           type: 'plain',
  //           data:[username]
  //         },
  //         grid: {
  //           containLabel: 'true',
  //           left: 10,
  //           bottom: 10,
  //           right: 10,
  //         },
  //         tooltip: {
  //           trigger: "axis",
  //           axisPointer: {
  //             type: "shadow"
  //           }
  //         },
  //         xAxis: {
  //           type: 'category',
  //           data: columns
  //         },
  //         yAxis: {
  //           type: 'value'
  //         },
  //         series: [{
  //           name: username,
  //           data: values,
  //           type: 'bar',
  //           label: {
  //             show: "true",
  //             // position: "top"
  //             position: "bottom"
  //           }
  //         }]
  //       });
  //     }
  //   })
  // }


</script>
</body>

</html>

