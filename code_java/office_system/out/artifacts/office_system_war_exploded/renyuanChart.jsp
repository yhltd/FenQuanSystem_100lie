<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2020/11/20
  Time: 9:18
  To change this template use File | Settings | File Templates.
--%>
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

<html>
<head>
  <meta http-equiv="Content-Type" content="text/html" charset="UTF-8">
  <title>柱状图</title>
  <script type="text/javascript" src="static/echarts/echarts.min.js"></script>
  <script type="text/javascript" src="static/jquery/jquery.min.js"></script>
</head>
<body style="background-color: #99CCFF">
<a href="workbench.jsp" style="font-size: 30px;color: black">工作台</a>
<div style="background-color: #e7e7e7;border: 1px ;margin-bottom: auto;margin-right: 20px">

<%--  <select class="easyui-combobox width" name="username" id="username" style="font-size: 20px;background-color: #e7e7e7;border: 1px;color: white;margin-left: 30%">--%>
  <select class="easyui-combobox width" name="username" id="username" style="font-size: 20px;width: 150px;background-color: #9acfea;color: black;margin-left: 40%">
    <c:forEach items="${renyuanInit}" var="username">
      <option>${username}</option>
    </c:forEach>
  </select>
  <button id="select_renyuan"onclick="RenYuanChoose" style="font-size: 20px;background-color: #6666FF;color: white;border-radius: 7px"> 查  询  </button>
</div><br><br>

<div style="width: 100%; height: 400px; overflow-x: scroll">
  <div id="main" style="width: 3000px;height: 100%"></div>
</div>
</body>
<script type="text/javascript">
    var myChart = echarts.init(document.getElementById('main'));
    myChart.showLoading();
    $.get('RenYuanChart').done(function (data) {
      myChart.hideLoading();
      data = JSON.parse(data);

      var columns = []
      var values = []
      for (let col in data){
        columns.push(col);
        values.push(data[col])
      }

      myChart.setOption({
        title: {
          text: '人员柱状图'
        },
        legend: {
          type: 'plain',
          data:['${userName}']
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
        xAxis:{
          type: 'category',
          data: columns
        },
        yAxis: {
          type: 'value'
        },
        series: {
          name: '${userName}',
          data: values,
          type: 'bar',
          label: {
            show: "true",
            // position: "top"
            position: "bottom"
          }
        },
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
    $('button').click(function (){
        myChart.showLoading();
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
              myChart.hideLoading();
              data = JSON.parse(result);
              var columns = []
              var values = []
              for (let col in data){
                columns.push(col);
                values.push(data[col])
              }
              myChart.setOption({
                title: {
                  text: '人员柱状图'
                },
                legend: {
                  type: 'plain',
                  data:[username]
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
                  name: username,
                  data: values,
                  type: 'bar',
                  label: {
                    show: "true",
                    // position: "top"
                    position: "bottom"
                  }
                }]
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
</html>

