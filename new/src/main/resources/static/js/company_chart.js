function getList() {
    $ajax({
        type: 'post',
        url: '/chart/getGongSiList',
    }, false, '', function (res) {
        if (res.code == 200) {
            console.log(res.data)
            chart_refresh(res.data);
        }
    })
}

$(function () {

    //刷新
    getList();

    //点击刷新按钮
    $("#refresh-btn").click(function () {
        getList();
    })

    $("#this_column").change(function () {
        getList();
    })

    $("#select-btn").click(function () {
        var start_date=$('#start_date').val()
        var stop_date=$('#stop_date').val()
        if(start_date == ''){
            start_date = '1900-1-1'
        }
        if(stop_date == ''){
            stop_date = '2100-12-31'
        }

        if(start_date > stop_date){
            alert("起始日期不能晚于结束日期")
            return;
        }

        $ajax({
            type: 'post',
            url: '/chart/queryGongSiList',
            data:{
                start_date:start_date,
                stop_date:stop_date
            }
        }, false, '', function (res) {
            if (res.code == 200) {
                console.log(res.data)
                chart_refresh(res.data);
            }
        })
    })





})

function chart_refresh(this_arr){

    let data1 = []
    let data2 = []
    var this_column = $("#this_column").val();

    if(this_arr[0] == null){
        if(this_column == 'A列-Z列'){
            data1 = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
            data2 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        }else if(this_column == 'AA列-AZ列'){
            data1 = ['AA','AB','AC','AD','AE','AF','AG','AH','AI','AJ','AK','AL','AM','AN','AO','AP','AQ','AR','AS','AT','AU','AV','AW','AX','AY','AZ']
            data2 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        }else if(this_column == 'BA列-BZ列'){
            data1 = ['BA','BB','BC','BD','BE','BF','BG','BH','BI','BJ','BK','BL','BM','BN','BO','BP','BQ','BR','BS','BT','BU','BV','BW','BX','BY','BZ']
            data2 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        }else if(this_column == 'CA列-CV列'){
            data1 = ['CA','CB','CC','CD','CE','CF','CG','CH','CI','CJ','CK','CL','CM','CN','CO','CP','CQ','CR','CS','CT','CU','CV']
            data2 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        }else if(this_column == 'A列-CV列'){
            data1 = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','AA','AB','AC','AD','AE','AF','AG','AH','AI','AJ','AK','AL','AM','AN','AO','AP','AQ','AR','AS','AT','AU','AV','AW','AX','AY','AZ','BA','BB','BC','BD','BE','BF','BG','BH','BI','BJ','BK','BL','BM','BN','BO','BP','BQ','BR','BS','BT','BU','BV','BW','BX','BY','BZ','CA','CB','CC','CD','CE','CF','CG','CH','CI','CJ','CK','CL','CM','CN','CO','CP','CQ','CR','CS','CT','CU','CV']
            data2 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        }
    }else{
        if(this_column == 'A列-Z列'){
            data1 = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',]
            data2 = [this_arr[0].a,this_arr[0].b,this_arr[0].c,this_arr[0].d,this_arr[0].e,this_arr[0].f,this_arr[0].g,this_arr[0].h,this_arr[0].i,this_arr[0].j,this_arr[0].k,this_arr[0].l,this_arr[0].m,this_arr[0].n,this_arr[0].o,this_arr[0].p,this_arr[0].q,this_arr[0].r,this_arr[0].s,this_arr[0].t,this_arr[0].u,this_arr[0].v,this_arr[0].w,this_arr[0].x,this_arr[0].y,this_arr[0].z]
        }else if(this_column == 'AA列-AZ列'){
            data1 = ['AA','AB','AC','AD','AE','AF','AG','AH','AI','AJ','AK','AL','AM','AN','AO','AP','AQ','AR','AS','AT','AU','AV','AW','AX','AY','AZ']
            data2 = [this_arr[0].aa,this_arr[0].ab,this_arr[0].ac,this_arr[0].ad,this_arr[0].ae,this_arr[0].af,this_arr[0].ag,this_arr[0].ah,this_arr[0].ai,this_arr[0].aj,this_arr[0].ak,this_arr[0].al,this_arr[0].am,this_arr[0].an,this_arr[0].ao,this_arr[0].ap,this_arr[0].aq,this_arr[0].ar,this_arr[0].ass,this_arr[0].at,this_arr[0].au,this_arr[0].av,this_arr[0].aw,this_arr[0].ax,this_arr[0].ay,this_arr[0].az]
        }else if(this_column == 'BA列-BZ列'){
            data1 = ['BA','BB','BC','BD','BE','BF','BG','BH','BI','BJ','BK','BL','BM','BN','BO','BP','BQ','BR','BS','BT','BU','BV','BW','BX','BY','BZ']
            data2 = [this_arr[0].ba,this_arr[0].bb,this_arr[0].bc,this_arr[0].bd,this_arr[0].be,this_arr[0].bf,this_arr[0].bg,this_arr[0].bh,this_arr[0].bi,this_arr[0].bj,this_arr[0].bk,this_arr[0].bl,this_arr[0].bm,this_arr[0].bn,this_arr[0].bo,this_arr[0].bp,this_arr[0].bq,this_arr[0].br,this_arr[0].bs,this_arr[0].bt,this_arr[0].bu,this_arr[0].bv,this_arr[0].bw,this_arr[0].bx,this_arr[0].byy,this_arr[0].bz]
        }else if(this_column == 'CA列-CV列'){
            data1 = ['CA','CB','CC','CD','CE','CF','CG','CH','CI','CJ','CK','CL','CM','CN','CO','CP','CQ','CR','CS','CT','CU','CV']
            data2 = [this_arr[0].ca,this_arr[0].cb,this_arr[0].cc,this_arr[0].cd,this_arr[0].ce,this_arr[0].cf,this_arr[0].cg,this_arr[0].ch,this_arr[0].ci,this_arr[0].cj,this_arr[0].ck,this_arr[0].cl,this_arr[0].cm,this_arr[0].cn,this_arr[0].co,this_arr[0].cp,this_arr[0].cq,this_arr[0].cr,this_arr[0].cs,this_arr[0].ct,this_arr[0].cu,this_arr[0].cv]
        }else if(this_column == 'A列-CV列'){
            data1 = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','AA','AB','AC','AD','AE','AF','AG','AH','AI','AJ','AK','AL','AM','AN','AO','AP','AQ','AR','AS','AT','AU','AV','AW','AX','AY','AZ','BA','BB','BC','BD','BE','BF','BG','BH','BI','BJ','BK','BL','BM','BN','BO','BP','BQ','BR','BS','BT','BU','BV','BW','BX','BY','BZ','CA','CB','CC','CD','CE','CF','CG','CH','CI','CJ','CK','CL','CM','CN','CO','CP','CQ','CR','CS','CT','CU','CV']
            data2 = [this_arr[0].a,this_arr[0].b,this_arr[0].c,this_arr[0].d,this_arr[0].e,this_arr[0].f,this_arr[0].g,this_arr[0].h,this_arr[0].i,this_arr[0].j,this_arr[0].k,this_arr[0].l,this_arr[0].m,this_arr[0].n,this_arr[0].o,this_arr[0].p,this_arr[0].q,this_arr[0].r,this_arr[0].s,this_arr[0].t,this_arr[0].u,this_arr[0].v,this_arr[0].w,this_arr[0].x,this_arr[0].y,this_arr[0].z,this_arr[0].aa,this_arr[0].ab,this_arr[0].ac,this_arr[0].ad,this_arr[0].ae,this_arr[0].af,this_arr[0].ag,this_arr[0].ah,this_arr[0].ai,this_arr[0].aj,this_arr[0].ak,this_arr[0].al,this_arr[0].am,this_arr[0].an,this_arr[0].ao,this_arr[0].ap,this_arr[0].aq,this_arr[0].ar,this_arr[0].ass,this_arr[0].at,this_arr[0].au,this_arr[0].av,this_arr[0].aw,this_arr[0].ax,this_arr[0].ay,this_arr[0].az,this_arr[0].ba,this_arr[0].bb,this_arr[0].bc,this_arr[0].bd,this_arr[0].be,this_arr[0].bf,this_arr[0].bg,this_arr[0].bh,this_arr[0].bi,this_arr[0].bj,this_arr[0].bk,this_arr[0].bl,this_arr[0].bm,this_arr[0].bn,this_arr[0].bo,this_arr[0].bp,this_arr[0].bq,this_arr[0].br,this_arr[0].bs,this_arr[0].bt,this_arr[0].bu,this_arr[0].bv,this_arr[0].bw,this_arr[0].bx,this_arr[0].byy,this_arr[0].bz,this_arr[0].ca,this_arr[0].cb,this_arr[0].cc,this_arr[0].cd,this_arr[0].ce,this_arr[0].cf,this_arr[0].cg,this_arr[0].ch,this_arr[0].ci,this_arr[0].cj,this_arr[0].ck,this_arr[0].cl,this_arr[0].cm,this_arr[0].cn,this_arr[0].co,this_arr[0].cp,this_arr[0].cq,this_arr[0].cr,this_arr[0].cs,this_arr[0].ct,this_arr[0].cu,this_arr[0].cv]
        }
    }

    // data1 = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
    //     'AA','AB','AC','AD','AE','AF','AG','AH','AI','AJ','AK','AL','AM','AN','AO','AP','AQ','AR','AS','AT','AU','AV','AW','AX','AY','AZ',
    //     'BA','BB','BC','BD','BE','BF','BG','BH','BI','BJ','BK','BL','BM','BN','BO','BP','BQ','BR','BS','BT','BU','BV','BW','BX','BY','BZ',
    //     'CA','CB','CC','CD','CE','CF','CG','CH','CI','CJ','CK','CL','CM','CN','CO','CP','CQ','CR','CS','CT','CU','CV']

    // data2 = [this_arr[0].a,this_arr[0].b,this_arr[0].c,this_arr[0].d,this_arr[0].e,this_arr[0].f,this_arr[0].g,this_arr[0].h,this_arr[0].i,this_arr[0].j,this_arr[0].k,this_arr[0].l,this_arr[0].m,this_arr[0].n,this_arr[0].o,this_arr[0].p,this_arr[0].q,this_arr[0].r,this_arr[0].s,this_arr[0].t,this_arr[0].u,this_arr[0].v,this_arr[0].w,this_arr[0].x,this_arr[0].y,this_arr[0].z,
    //             this_arr[0].aa,this_arr[0].ab,this_arr[0].ac,this_arr[0].ad,this_arr[0].ae,this_arr[0].af,this_arr[0].ag,this_arr[0].ah,this_arr[0].ai,this_arr[0].aj,this_arr[0].ak,this_arr[0].al,this_arr[0].am,this_arr[0].an,this_arr[0].ao,this_arr[0].ap,this_arr[0].aq,this_arr[0].ar,this_arr[0].ass,this_arr[0].at,this_arr[0].au,this_arr[0].av,this_arr[0].aw,this_arr[0].ax,this_arr[0].ay,this_arr[0].az,
    //             this_arr[0].ba,this_arr[0].bb,this_arr[0].bc,this_arr[0].bd,this_arr[0].be,this_arr[0].bf,this_arr[0].bg,this_arr[0].bh,this_arr[0].bi,this_arr[0].bj,this_arr[0].bk,this_arr[0].bl,this_arr[0].bm,this_arr[0].bn,this_arr[0].bo,this_arr[0].bp,this_arr[0].bq,this_arr[0].br,this_arr[0].bs,this_arr[0].bt,this_arr[0].bu,this_arr[0].bv,this_arr[0].bw,this_arr[0].bx,this_arr[0].byy,this_arr[0].bz,
    //             this_arr[0].ca,this_arr[0].cb,this_arr[0].cc,this_arr[0].cd,this_arr[0].ce,this_arr[0].cf,this_arr[0].cg,this_arr[0].ch,this_arr[0].ci,this_arr[0].cj,this_arr[0].ck,this_arr[0].cl,this_arr[0].cm,this_arr[0].cn,this_arr[0].co,this_arr[0].cp,this_arr[0].cq,this_arr[0].cr,this_arr[0].cs,this_arr[0].ct,this_arr[0].cu,this_arr[0].cv]


    var myChart = echarts.init(document.getElementById('chart'));

    var option;
    // if (option.length > 0) {
    //     namenum = Math.floor(100 / (option.length / 26));         //这个3可以顺便调整是用来判断当前视图要显示几个
    //     if (option.length > 26) {                                 //3也可以调整用来判断是否显示滚动条
    //         showEchart = true;
    //     } else {
    //         showEchart = false;
    //     }
    // }

    option = {
        title: {
            text: '工作台整体使用情况',
        },
        xAxis: {
            type: 'category',
            data: data1,

        },

        yAxis: {
            type: 'value',
        },
        series: [
            {
                label: {
                    show: true,
                    position: 'top'
                },
                data: data2,
                type: 'bar',
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(180, 180, 180, 0.2)'
                }
            }
        ],

        dataZoom: {
            show: true, // 为true 滚动条出现
            realtime: true,
            type:'slider', // 有type这个属性，滚动条在最下面，也可以不行，写y：36，这表示距离顶端36px，一般就是在图上面。
            height: 20, // 表示滚动条的高度，也就是粗细
            start: 0, // 表示默认展示20%～80%这一段。
            end: 30
        }

    };
    myChart.setOption(option);


}












