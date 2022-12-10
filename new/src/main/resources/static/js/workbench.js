let select_list = []
let gongshi_list = []

function getList() {
    $ajax({
        type: 'post',
        url: '/workBench/getList',
    }, false, '', function (res) {
        if (res.code == 200) {
            console.log(res.data)
            select_list = res.data
            setTable(res.data);
        }
    })
}

function getJiSuanList() {
    $ajax({
        type: 'post',
        async:false,
        url: '/workbench_gongshi/getList2',
    }, false, '', function (res) {
        if (res.code == 200) {
            $.session.set('gongshi_list', JSON.stringify(res.data))
        }
    })
}


function getGongSiList() {
    $ajax({
        type: 'post',
        async:false,
        url: '/workBench/getGongSiList',
    }, false, '', function (res) {
        if (res.code == 200) {
            console.log(res.data)
            $.session.set('companyPower', JSON.stringify(res.data))
        }
    })
}

function getRenYuanList() {
    $ajax({
        type: 'post',
        async:false,
        url: '/workBench/getRenYuanList',
    }, false, '', function (res) {
        if (res.code == 200) {
            console.log(res.data)
            var this_list = []
            var this_list2 = []
            for(var i=0; i<res.data.length; i++){
                if(res.data[i].chashanquanxian == '修改'){
                    this_list.push(
                        res.data[i]
                    )
                }else if(res.data[i].chashanquanxian == '查询'){
                    this_list2.push(
                        res.data[i]
                    )

                    for (let key in res.data[i]) {
                        console.log(key)
                        if(res.data[i][key] != '√'){
                            $("#workBenchTable").bootstrapTable('hideColumn',key)
                        }
                    }

                }
            }
            $.session.set('personPower', JSON.stringify(this_list))
            $.session.set('personSelect', JSON.stringify(this_list2))
        }
    })
}

function getName() {
    $ajax({
        type: 'post',
        async:false,
        url: '/workBench/getName',
    }, false, '', function (res) {
        if (res.code == 200) {
            console.log(res.data)
            $.session.set('name', res.data)
            console.log($.session.get('name'))
        }
    })
}

$(function () {

    //刷新
    getJiSuanList();
    getGongSiList();
    getRenYuanList();
    getName();
    getList();

    var this_str = ""
    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
    for(var i=0; i<gongshi_list.length; i++){
        if(gongshi_list[i].thiscolumn.toUpperCase() != '' && gongshi_list[i].thiscolumn.toUpperCase() != null) {
            var panduan = true
            var this_arr = this_str.split(",")
            for(var j=0; j<this_arr.length; j++){
                if(gongshi_list[i].thiscolumn.toUpperCase() == this_arr[j]){
                    panduan = false
                }
            }
            if(panduan){
                if(this_str != ''){
                    this_str = this_str + "," + gongshi_list[i].thiscolumn.toUpperCase()
                }else{
                    this_str = gongshi_list[i].thiscolumn.toUpperCase()
                }
            }

        }
    }

    if(this_str != ''){
        alert("列 " + this_str + " 有设置公式");
    }

    //点击刷新按钮
    $("#refresh-btn").click(function () {
        getList();
    })

    //点击查询按钮
    $("#select-btn").click(function () {
        var this_column = $('#this_column').val();
        var start_date = $('#start_date').val();
        var stop_date = $('#stop_date').val();
        if (start_date == '') {
            start_date = '1900-01-01'
        }
        if (stop_date == '') {
            stop_date = '2100-12-31'
        }

        $ajax({
            type: 'post',
            url: '/workBench/queryList',
            data: {
                column: this_column,
                start_date: start_date,
                stop_date, stop_date
            }
        }, false, '', function (res) {
            if (res.code == 200) {
                select_list = res.data
                setTable(res.data);
            }
        })
    })


    //点击新增按钮
    $("#add-btn").click(function () {
        var myDate = new Date((new Date).getTime() + 8 * 60 * 60 * 1000);
        var time = myDate.toJSON().split('T').join(' ').substr(0, 19);
        time = time.split(" ")[0]
        console.log(time)
        var msg = confirm("确认要新增一行数据吗？")
        if (msg) {
            $ajax({
                type: 'post',
                url: '/workBench/add',
                data: {
                    today: time
                }
            }, false, '', function (res) {
                alert(res.msg)
                if (res.code == 200) {
                    getList();
                }
            })
        }

    })

    //点击删除按钮
    $('#delete-btn').click(function () {
        var msg = confirm("确认要删除吗？")
        if (msg) {
            let rows = getTableSelection("#workBenchTable");
            if (rows.length == 0) {
                alert('请选择要删除的数据！')
                return;
            }
            let idList = [];
            $.each(rows, function (index, row) {
                idList.push(row.data.id)
            })
            $ajax({
                type: 'post',
                url: '/workBench/delete',
                data: JSON.stringify({
                    idList: idList
                }),
                dataType: 'json',
                contentType: 'application/json;charset=utf-8'
            }, false, '', function (res) {
                alert(res.msg);
                if (res.code == 200) {
                    getList();
                }
            })
        }
    })

    $('#one_click_export').click(function () {
        var array = select_list
        console.log(array)
        var header = []
        for (var i = 0; i < array.length; i++) {
            header.push({
                人员: array[i].人员,
                日期: array[i].日期,
                a最后修改日期: array[i].a最后修改日期,
                A: array[i].a,
                B: array[i].b,
                C: array[i].c,
                D: array[i].d,
                E: array[i].e,
                F: array[i].f,
                G: array[i].g,
                H: array[i].h,
                I: array[i].i,
                J: array[i].j,
                K: array[i].k,
                L: array[i].l,
                M: array[i].m,
                N: array[i].n,
                O: array[i].o,
                P: array[i].p,
                Q: array[i].q,
                R: array[i].r,
                S: array[i].s,
                T: array[i].t,
                U: array[i].u,
                V: array[i].v,
                W: array[i].w,
                X: array[i].x,
                Y: array[i].y,
                Z: array[i].z,
                AA: array[i].aa,
                AB: array[i].ab,
                AC: array[i].ac,
                AD: array[i].ad,
                AE: array[i].ae,
                AF: array[i].af,
                AG: array[i].ag,
                AH: array[i].ah,
                AI: array[i].ai,
                AJ: array[i].aj,
                AK: array[i].ak,
                AL: array[i].al,
                AM: array[i].am,
                AN: array[i].an,
                AO: array[i].ao,
                AP: array[i].ap,
                AQ: array[i].aq,
                AR: array[i].ar,
                AS: array[i].ass,
                AT: array[i].at,
                AU: array[i].au,
                AV: array[i].av,
                AW: array[i].aw,
                AX: array[i].ax,
                AY: array[i].ay,
                AZ: array[i].az,
                BA: array[i].ba,
                BB: array[i].bb,
                BC: array[i].bc,
                BD: array[i].bd,
                BE: array[i].be,
                BF: array[i].bf,
                BG: array[i].bg,
                BH: array[i].bh,
                BI: array[i].bi,
                BJ: array[i].bj,
                BK: array[i].bk,
                BL: array[i].bl,
                BM: array[i].bm,
                BN: array[i].bn,
                BO: array[i].bo,
                BP: array[i].bp,
                BQ: array[i].bq,
                BR: array[i].br,
                BS: array[i].bs,
                BT: array[i].bt,
                BU: array[i].bu,
                BV: array[i].bv,
                BW: array[i].bw,
                BX: array[i].bx,
                BY: array[i].byy,
                BZ: array[i].bz,
                CA: array[i].ca,
                CB: array[i].cb,
                CC: array[i].cc,
                CD: array[i].cd,
                CE: array[i].ce,
                CF: array[i].cf,
                CG: array[i].cg,
                CH: array[i].ch,
                CI: array[i].ci,
                CJ: array[i].cj,
                CK: array[i].ck,
                CL: array[i].cl,
                CM: array[i].cm,
                CN: array[i].cn,
                CO: array[i].co,
                CP: array[i].cp,
                CQ: array[i].cq,
                CR: array[i].cr,
                CS: array[i].cs,
                CT: array[i].ct,
                CU: array[i].cu,
                CV: array[i].cv,
            })
        }
        title = ['人员', '添加日期', '最后修改日期', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'AA', 'AB', 'AC', 'AD', 'AE', 'AF', 'AG', 'AH', 'AI', 'AJ', 'AK', 'AL', 'AM', 'AN', 'AO', 'AP', 'AQ', 'AR', 'AS', 'AT', 'AU', 'AV', 'AW', 'AX', 'AY', 'AZ', 'BA', 'BB', 'BC', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BK', 'BL', 'BM', 'BN', 'BO', 'BP', 'BQ', 'BR', 'BS', 'BT', 'BU', 'BV', 'BW', 'BX', 'BY', 'BZ', 'CA', 'CB', 'CC', 'CD', 'CE', 'CF', 'CG', 'CH', 'CI', 'CJ', 'CK', 'CL', 'CM', 'CN', 'CO', 'CP', 'CQ', 'CR', 'CS', 'CT', 'CU', 'CV']
        JSONToExcelConvertor(header, "工作台", title)
    })


})

function JSONToExcelConvertor(JSONData, FileName, title, filter) {
    if (!JSONData)
        return;
    //转化json为object
    var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;

    var excel = "<table>";

    //设置表头
    var row = "<tr>";

    if (title) {
        //使用标题项
        for (var i in title) {
            row += "<th align='center'>" + title[i] + '</th>';
        }

    } else {
        //不使用标题项
        for (var i in arrData[0]) {
            row += "<th align='center'>" + i + '</th>';
        }
    }

    excel += row + "</tr>";

    //设置数据
    for (var i = 0; i < arrData.length; i++) {
        var row = "<tr>";

        for (var index in arrData[i]) {
            //判断是否有过滤行
            if (filter) {
                if (filter.indexOf(index) == -1) {
                    var value = arrData[i][index] == null ? "" : arrData[i][index];
                    row += '<td>' + value + '</td>';
                }
            } else {
                var value = arrData[i][index] == null ? "" : arrData[i][index];
                row += "<td align='center'>" + value + "</td>";
            }
        }

        excel += row + "</tr>";
    }

    excel += "</table>";

    var excelFile = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:x='urn:schemas-microsoft-com:office:excel' xmlns='http://www.w3.org/TR/REC-html40'>";
    excelFile += '<meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8">';
    excelFile += '<meta http-equiv="content-type" content="application/vnd.ms-excel';
    excelFile += '; charset=UTF-8">';
    excelFile += "<head>";
    excelFile += "<!--[if gte mso 9]>";
    excelFile += "<xml>";
    excelFile += "<x:ExcelWorkbook>";
    excelFile += "<x:ExcelWorksheets>";
    excelFile += "<x:ExcelWorksheet>";
    excelFile += "<x:Name>";
    excelFile += "{worksheet}";
    excelFile += "</x:Name>";
    excelFile += "<x:WorksheetOptions>";
    excelFile += "<x:DisplayGridlines/>";
    excelFile += "</x:WorksheetOptions>";
    excelFile += "</x:ExcelWorksheet>";
    excelFile += "</x:ExcelWorksheets>";
    excelFile += "</x:ExcelWorkbook>";
    excelFile += "</xml>";
    excelFile += "<![endif]-->";
    excelFile += "</head>";
    excelFile += "<body>";
    excelFile += excel;
    excelFile += "</body>";
    excelFile += "</html>";


    var uri = 'data:application/vnd.ms-excel;charset=utf-8,' + encodeURIComponent(excelFile);

    var link = document.createElement("a");
    link.href = uri;

    link.style = "visibility:hidden";
    link.download = FileName + ".xls";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


function columnUpd(id, column) {
    var this_value = $('#' + column + id).val();
    var myDate = new Date((new Date).getTime() + 8 * 60 * 60 * 1000);
    var time = myDate.toJSON().split('T').join(' ').substr(0, 19);
    time = time.split(" ")[0]
    $ajax({
        type: 'post',
        url: '/workBench/update',
        data: {
            column: column,
            id: id,
            value: this_value,
            time: time
        },
    }, true, '', function (res) {
        // alert(res.msg);
        if (res.code == 200) {
            var obj = ""
            if (res.msg == '修改成功') {
                obj = document.getElementById("upd_1");
            } else if (res.msg == '无权限') {
                obj = document.getElementById("upd_3");
                getList();
            } else {
                obj = document.getElementById("upd_2");
                getList();
            }
            obj.hidden = false
            setTimeout(function () {
                obj.hidden = true
            }, 3000);

        }
    })
}

function columnUse(column) {
    console.log(column)
    $ajax({
        type: 'post',
        url: '/use_state/getZhuangTai',
    }, false, '', function (res) {
        // alert(res.msg);
        if (res.code == 200) {
            var this_list = res.data[0]
            if (this_list[column.toLowerCase()] != '' && this_list[column.toLowerCase()] != $.session.get('name')) {
                alert('此列已被占用')
                var id = document.activeElement.id
                $('#' + id).blur();
            } else {
                $ajax({
                    type: 'post',
                    url: '/use_state/updateName',
                    data: {
                        column: column,
                    },
                }, false, '', function (res) {
                    // alert(res.msg);
                    if (res.code == 200) {
                        console.log('已占用' + column + '列')
                    }
                })
            }
        }
    })
}

function columnUseRefresh(column) {

    console.log(column)
    $ajax({
        type: 'post',
        url: '/use_state/getZhuangTai',
    }, false, '', function (res) {
        // alert(res.msg);
        if (res.code == 200) {
            var this_list = res.data[0]
            if (this_list[column.toLowerCase()] != '' && this_list[column.toLowerCase()] == $.session.get('name')) {
                $ajax({
                    type: 'post',
                    url: '/use_state/update',
                    data: {
                        column: column,
                        id: this_list['id']
                    },
                }, false, '', function (res) {
                    // alert(res.msg);
                    if (res.code == 200) {
                        console.log('已占用' + column + '列')
                    }
                })
            }
        }
    })
}


function setTable(data) {
    if ($('#workBenchTable').html != '') {
        $('#workBenchTable').bootstrapTable('load', data);
    }

    $('#workBenchTable').bootstrapTable({
        data: data,
        sortStable: true,
        classes: 'table',
        idField: 'id',
        pagination: true,
        pageSize: 15,//单页记录数
        clickToSelect: true,
        locale: 'zh-CN',
        toolbar: '#table-toolbar',
        toolbarAlign: 'left',
        theadClasses: "thead-light",//这里设置表头样式
        columns: [
            {
                field: '',
                title: '序号',
                align: 'center',
                sortable: true,
                width: 70,
                formatter: function (value, row, index) {
                    return index + 1;
                }
            },
            {
                field: '人员',
                title: '人员',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: '日期',
                title: '添加日期',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'a最后修改日期',
                title: '最后修改日期',
                align: 'center',
                sortable: true,
                width: 130,
            }, {
                field: 'a',
                title: 'A',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].c == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'A'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].a = value
                    }
                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].c == "√" && JSON.parse($.session.get('personPower'))[0].c == "√") {
                        return '<input id="A' + row.id + '" onfocus="javascript:columnUse(' + '\'A\'' + ')" onblur="javascript:columnUseRefresh(' + '\'A\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'A\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'b',
                title: 'B',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].d == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'B'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].b = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].d == "√" && JSON.parse($.session.get('personPower'))[0].d == "√") {
                        return '<input id="B' + row.id + '" onfocus="javascript:columnUse(' + '\'B\'' + ')" onblur="javascript:columnUseRefresh(' + '\'B\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'B\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'c',
                title: 'C',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].e == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'C'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].c = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].e == "√" && JSON.parse($.session.get('personPower'))[0].e == "√") {
                        return '<input id="C' + row.id + '" onfocus="javascript:columnUse(' + '\'C\'' + ')" onblur="javascript:columnUseRefresh(' + '\'C\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'C\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'd',
                title: 'D',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].f == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'D'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].d = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].f == "√" && JSON.parse($.session.get('personPower'))[0].f == "√") {
                        return '<input id="D' + row.id + '" onfocus="javascript:columnUse(' + '\'D\'' + ')" onblur="javascript:columnUseRefresh(' + '\'D\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'D\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'e',
                title: 'E',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].g == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'E'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].e = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].g == "√" && JSON.parse($.session.get('personPower'))[0].g == "√") {
                        return '<input id="E' + row.id + '" onfocus="javascript:columnUse(' + '\'E\'' + ')" onblur="javascript:columnUseRefresh(' + '\'E\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'E\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'f',
                title: 'F',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].h == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'F'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].f = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].h == "√" && JSON.parse($.session.get('personPower'))[0].h == "√") {
                        return '<input id="F' + row.id + '" onfocus="javascript:columnUse(' + '\'F\'' + ')" onblur="javascript:columnUseRefresh(' + '\'F\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'F\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'g',
                title: 'G',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].i == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'G'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].g = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].i == "√" && JSON.parse($.session.get('personPower'))[0].i == "√") {
                        return '<input id="G' + row.id + '" onfocus="javascript:columnUse(' + '\'G\'' + ')" onblur="javascript:columnUseRefresh(' + '\'G\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'G\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'h',
                title: 'H',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].j == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'H'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].h = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].j == "√" && JSON.parse($.session.get('personPower'))[0].j == "√") {
                        return '<input id="H' + row.id + '" onfocus="javascript:columnUse(' + '\'H\'' + ')" onblur="javascript:columnUseRefresh(' + '\'H\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'H\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'i',
                title: 'I',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].k == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'I'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].i = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].k == "√" && JSON.parse($.session.get('personPower'))[0].k == "√") {
                        return '<input id="I' + row.id + '" onfocus="javascript:columnUse(' + '\'I\'' + ')" onblur="javascript:columnUseRefresh(' + '\'I\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'I\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'j',
                title: 'J',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].l == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'J'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].j = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].l == "√" && JSON.parse($.session.get('personPower'))[0].l == "√") {
                        return '<input id="J' + row.id + '" onfocus="javascript:columnUse(' + '\'J\'' + ')" onblur="javascript:columnUseRefresh(' + '\'J\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'J\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'k',
                title: 'K',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].m == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'K'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].k = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].m == "√" && JSON.parse($.session.get('personPower'))[0].m == "√") {
                        return '<input id="K' + row.id + '" onfocus="javascript:columnUse(' + '\'K\'' + ')" onblur="javascript:columnUseRefresh(' + '\'K\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'K\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'l',
                title: 'L',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].n == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'L'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].l = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].n == "√" && JSON.parse($.session.get('personPower'))[0].n == "√") {
                        return '<input id="L' + row.id + '" onfocus="javascript:columnUse(' + '\'L\'' + ')" onblur="javascript:columnUseRefresh(' + '\'L\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'L\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'm',
                title: 'M',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].o == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'M'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].m = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].o == "√" && JSON.parse($.session.get('personPower'))[0].o == "√") {
                        return '<input id="M' + row.id + '" onfocus="javascript:columnUse(' + '\'M\'' + ')" onblur="javascript:columnUseRefresh(' + '\'M\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'M\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'n',
                title: 'N',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].p == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'N'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].n = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].p == "√" && JSON.parse($.session.get('personPower'))[0].p == "√") {
                        return '<input id="N' + row.id + '" onfocus="javascript:columnUse(' + '\'N\'' + ')" onblur="javascript:columnUseRefresh(' + '\'N\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'N\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'o',
                title: 'O',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].q == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'O'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].o = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].q == "√" && JSON.parse($.session.get('personPower'))[0].q == "√") {
                        return '<input id="O' + row.id + '" onfocus="javascript:columnUse(' + '\'O\'' + ')" onblur="javascript:columnUseRefresh(' + '\'O\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'O\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'p',
                title: 'P',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].r == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'P'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].p = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].r == "√" && JSON.parse($.session.get('personPower'))[0].r == "√") {
                        return '<input id="P' + row.id + '" onfocus="javascript:columnUse(' + '\'P\'' + ')" onblur="javascript:columnUseRefresh(' + '\'P\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'P\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'q',
                title: 'Q',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].s == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'Q'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].q = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].s == "√" && JSON.parse($.session.get('personPower'))[0].s == "√") {
                        return '<input id="Q' + row.id + '" onfocus="javascript:columnUse(' + '\'Q\'' + ')" onblur="javascript:columnUseRefresh(' + '\'Q\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'Q\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'r',
                title: 'R',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].t == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'R'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].r = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].t == "√" && JSON.parse($.session.get('personPower'))[0].t == "√") {
                        return '<input id="R' + row.id + '" onfocus="javascript:columnUse(' + '\'R\'' + ')" onblur="javascript:columnUseRefresh(' + '\'R\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'R\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 's',
                title: 'S',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].u == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'S'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].s = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].u == "√" && JSON.parse($.session.get('personPower'))[0].u == "√") {
                        return '<input id="S' + row.id + '" onfocus="javascript:columnUse(' + '\'S\'' + ')" onblur="javascript:columnUseRefresh(' + '\'S\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'S\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 't',
                title: 'T',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].v == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'T'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].t = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].v == "√" && JSON.parse($.session.get('personPower'))[0].v == "√") {
                        return '<input id="T' + row.id + '" onfocus="javascript:columnUse(' + '\'T\'' + ')" onblur="javascript:columnUseRefresh(' + '\'T\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'T\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'u',
                title: 'U',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].w == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'U'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].u = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].w == "√" && JSON.parse($.session.get('personPower'))[0].w == "√") {
                        return '<input id="U' + row.id + '" onfocus="javascript:columnUse(' + '\'U\'' + ')" onblur="javascript:columnUseRefresh(' + '\'U\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'U\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'v',
                title: 'V',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].x == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'V'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].v = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].x == "√" && JSON.parse($.session.get('personPower'))[0].x == "√") {
                        return '<input id="V' + row.id + '" onfocus="javascript:columnUse(' + '\'V\'' + ')" onblur="javascript:columnUseRefresh(' + '\'V\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'V\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'w',
                title: 'W',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].y == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'W'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].w = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].y == "√" && JSON.parse($.session.get('personPower'))[0].y == "√") {
                        return '<input id="W' + row.id + '" onfocus="javascript:columnUse(' + '\'W\'' + ')" onblur="javascript:columnUseRefresh(' + '\'W\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'W\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'x',
                title: 'X',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].z == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'X'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].x = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].z == "√" && JSON.parse($.session.get('personPower'))[0].z == "√") {
                        return '<input id="X' + row.id + '" onfocus="javascript:columnUse(' + '\'X\'' + ')" onblur="javascript:columnUseRefresh(' + '\'X\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'X\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'y',
                title: 'Y',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].aa == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'Y'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].y = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].aa == "√" && JSON.parse($.session.get('personPower'))[0].aa == "√") {
                        return '<input id="Y' + row.id + '" onfocus="javascript:columnUse(' + '\'Y\'' + ')" onblur="javascript:columnUseRefresh(' + '\'Y\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'Y\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'z',
                title: 'Z',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].ab == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'Z'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].z = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].ab == "√" && JSON.parse($.session.get('personPower'))[0].ab == "√") {
                        return '<input id="Z' + row.id + '" onfocus="javascript:columnUse(' + '\'Z\'' + ')" onblur="javascript:columnUseRefresh(' + '\'Z\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'Z\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'aa',
                title: 'AA',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].ac == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'AA'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].aa = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].ac == "√" && JSON.parse($.session.get('personPower'))[0].ac == "√") {
                        return '<input id="AA' + row.id + '" onfocus="javascript:columnUse(' + '\'AA\'' + ')" onblur="javascript:columnUseRefresh(' + '\'AA\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'AA\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'ab',
                title: 'AB',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].ad == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'AB'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].ab = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].ad == "√" && JSON.parse($.session.get('personPower'))[0].ad == "√") {
                        return '<input id="AB' + row.id + '" onfocus="javascript:columnUse(' + '\'AB\'' + ')" onblur="javascript:columnUseRefresh(' + '\'AB\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'AB\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'ac',
                title: 'AC',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].ae == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'AC'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].ac = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].ae == "√" && JSON.parse($.session.get('personPower'))[0].ae == "√") {
                        return '<input id="AC' + row.id + '" onfocus="javascript:columnUse(' + '\'AC\'' + ')" onblur="javascript:columnUseRefresh(' + '\'AC\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'AC\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'ad',
                title: 'AD',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].af == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'AD'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].ad = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].af == "√" && JSON.parse($.session.get('personPower'))[0].af == "√") {
                        return '<input id="AD' + row.id + '" onfocus="javascript:columnUse(' + '\'AD\'' + ')" onblur="javascript:columnUseRefresh(' + '\'AD\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'AD\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'ae',
                title: 'AE',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].ag == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'AE'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].ae = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].ag == "√" && JSON.parse($.session.get('personPower'))[0].ag == "√") {
                        return '<input id="AE' + row.id + '" onfocus="javascript:columnUse(' + '\'AE\'' + ')" onblur="javascript:columnUseRefresh(' + '\'AE\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'AE\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'af',
                title: 'AF',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].ah == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'AF'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].af = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].ah == "√" && JSON.parse($.session.get('personPower'))[0].ah == "√") {
                        return '<input id="AF' + row.id + '" onfocus="javascript:columnUse(' + '\'AF\'' + ')" onblur="javascript:columnUseRefresh(' + '\'AF\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'AF\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'ag',
                title: 'AG',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].ai == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'AG'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].ag = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].ai == "√" && JSON.parse($.session.get('personPower'))[0].ai == "√") {
                        return '<input id="AG' + row.id + '" onfocus="javascript:columnUse(' + '\'AG\'' + ')" onblur="javascript:columnUseRefresh(' + '\'AG\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'AG\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'ah',
                title: 'AH',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].aj == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'AH'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].ah = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].aj == "√" && JSON.parse($.session.get('personPower'))[0].aj == "√") {
                        return '<input id="AH' + row.id + '" onfocus="javascript:columnUse(' + '\'AH\'' + ')" onblur="javascript:columnUseRefresh(' + '\'AH\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'AH\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'ai',
                title: 'AI',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].ak == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'AI'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].ai = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].ak == "√" && JSON.parse($.session.get('personPower'))[0].ak == "√") {
                        return '<input id="AI' + row.id + '" onfocus="javascript:columnUse(' + '\'AI\'' + ')" onblur="javascript:columnUseRefresh(' + '\'AI\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'AI\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'aj',
                title: 'AJ',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].al == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'AJ'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].aj = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].al == "√" && JSON.parse($.session.get('personPower'))[0].al == "√") {
                        return '<input id="AJ' + row.id + '" onfocus="javascript:columnUse(' + '\'AJ\'' + ')" onblur="javascript:columnUseRefresh(' + '\'AJ\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'AJ\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'ak',
                title: 'AK',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].am == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'AK'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].ak = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].am == "√" && JSON.parse($.session.get('personPower'))[0].am == "√") {
                        return '<input id="AK' + row.id + '" onfocus="javascript:columnUse(' + '\'AK\'' + ')" onblur="javascript:columnUseRefresh(' + '\'AK\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'AK\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'al',
                title: 'AL',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].an == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'AL'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].al = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].an == "√" && JSON.parse($.session.get('personPower'))[0].an == "√") {
                        return '<input id="AL' + row.id + '" onfocus="javascript:columnUse(' + '\'AL\'' + ')" onblur="javascript:columnUseRefresh(' + '\'AL\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'AL\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'am',
                title: 'AM',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].ao == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'AM'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].am = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].ao == "√" && JSON.parse($.session.get('personPower'))[0].ao == "√") {
                        return '<input id="AM' + row.id + '" onfocus="javascript:columnUse(' + '\'AM\'' + ')" onblur="javascript:columnUseRefresh(' + '\'AM\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'AM\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'an',
                title: 'AN',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].ap == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'AN'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].an = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].ap == "√" && JSON.parse($.session.get('personPower'))[0].ap == "√") {
                        return '<input id="AN' + row.id + '" onfocus="javascript:columnUse(' + '\'AN\'' + ')" onblur="javascript:columnUseRefresh(' + '\'AN\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'AN\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'ao',
                title: 'AO',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].aq == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'AO'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].ao = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].aq == "√" && JSON.parse($.session.get('personPower'))[0].aq == "√") {
                        return '<input id="AO' + row.id + '" onfocus="javascript:columnUse(' + '\'AO\'' + ')" onblur="javascript:columnUseRefresh(' + '\'AO\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'AO\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'ap',
                title: 'AP',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].ar == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'AP'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].ap = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].ar == "√" && JSON.parse($.session.get('personPower'))[0].ar == "√") {
                        return '<input id="AP' + row.id + '" onfocus="javascript:columnUse(' + '\'AP\'' + ')" onblur="javascript:columnUseRefresh(' + '\'AP\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'AP\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'aq',
                title: 'AQ',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].ass == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'AQ'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].aq = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].ass == "√" && JSON.parse($.session.get('personPower'))[0].ass == "√") {
                        return '<input id="AQ' + row.id + '" onfocus="javascript:columnUse(' + '\'AQ\'' + ')" onblur="javascript:columnUseRefresh(' + '\'AQ\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'AQ\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'ar',
                title: 'AR',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].at == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'AR'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].ar = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].at == "√" && JSON.parse($.session.get('personPower'))[0].at == "√") {
                        return '<input id="AR' + row.id + '" onfocus="javascript:columnUse(' + '\'AR\'' + ')" onblur="javascript:columnUseRefresh(' + '\'AR\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'AR\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'ass',
                title: 'AS',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].au == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'AS'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].ass = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].au == "√" && JSON.parse($.session.get('personPower'))[0].au == "√") {
                        return '<input id="ASS' + row.id + '" onfocus="javascript:columnUse(' + '\'ASS\'' + ')" onblur="javascript:columnUseRefresh(' + '\'ASS\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'ASS\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'at',
                title: 'AT',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].av == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'AT'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].at = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].av == "√" && JSON.parse($.session.get('personPower'))[0].av == "√") {
                        return '<input id="AT' + row.id + '" onfocus="javascript:columnUse(' + '\'AT\'' + ')" onblur="javascript:columnUseRefresh(' + '\'AT\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'AT\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'au',
                title: 'AU',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].aw == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'AU'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].au = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].aw == "√" && JSON.parse($.session.get('personPower'))[0].aw == "√") {
                        return '<input id="AU' + row.id + '" onfocus="javascript:columnUse(' + '\'AU\'' + ')" onblur="javascript:columnUseRefresh(' + '\'AU\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'AU\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'av',
                title: 'AV',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].ax == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'AV'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].av = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].ax == "√" && JSON.parse($.session.get('personPower'))[0].ax == "√") {
                        return '<input id="AV' + row.id + '" onfocus="javascript:columnUse(' + '\'AV\'' + ')" onblur="javascript:columnUseRefresh(' + '\'AV\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'AV\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'aw',
                title: 'AW',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].ay == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'AW'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].aw = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].ay == "√" && JSON.parse($.session.get('personPower'))[0].ay == "√") {
                        return '<input id="AW' + row.id + '" onfocus="javascript:columnUse(' + '\'AW\'' + ')" onblur="javascript:columnUseRefresh(' + '\'AW\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'AW\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'ax',
                title: 'AX',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].az == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'AX'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].ax = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].az == "√" && JSON.parse($.session.get('personPower'))[0].az == "√") {
                        return '<input id="AX' + row.id + '" onfocus="javascript:columnUse(' + '\'AX\'' + ')" onblur="javascript:columnUseRefresh(' + '\'AX\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'AX\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'ay',
                title: 'AY',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].ba == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'AY'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].ay = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].ba == "√" && JSON.parse($.session.get('personPower'))[0].ba == "√") {
                        return '<input id="AY' + row.id + '" onfocus="javascript:columnUse(' + '\'AY\'' + ')" onblur="javascript:columnUseRefresh(' + '\'AY\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'AY\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'az',
                title: 'AZ',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].bb == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'AZ'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].az = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].bb == "√" && JSON.parse($.session.get('personPower'))[0].bb == "√") {
                        return '<input id="AZ' + row.id + '" onfocus="javascript:columnUse(' + '\'AZ\'' + ')" onblur="javascript:columnUseRefresh(' + '\'AZ\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'AZ\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'ba',
                title: 'BA',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].bc == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'BA'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].ba = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].bc == "√" && JSON.parse($.session.get('personPower'))[0].bc == "√") {
                        return '<input id="BA' + row.id + '" onfocus="javascript:columnUse(' + '\'BA\'' + ')" onblur="javascript:columnUseRefresh(' + '\'BA\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'BA\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'bb',
                title: 'BB',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].bd == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'BB'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].bb = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].bd == "√" && JSON.parse($.session.get('personPower'))[0].bd == "√") {
                        return '<input id="BB' + row.id + '" onfocus="javascript:columnUse(' + '\'BB\'' + ')" onblur="javascript:columnUseRefresh(' + '\'BB\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'BB\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'bc',
                title: 'BC',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].be == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'BC'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].bc = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].be == "√" && JSON.parse($.session.get('personPower'))[0].be == "√") {
                        return '<input id="BC' + row.id + '" onfocus="javascript:columnUse(' + '\'BC\'' + ')" onblur="javascript:columnUseRefresh(' + '\'BC\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'BC\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'bd',
                title: 'BD',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].bf == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'BD'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].bd = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].bf == "√" && JSON.parse($.session.get('personPower'))[0].bf == "√") {
                        return '<input id="BD' + row.id + '" onfocus="javascript:columnUse(' + '\'BD\'' + ')" onblur="javascript:columnUseRefresh(' + '\'BD\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'BD\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'be',
                title: 'BE',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].bg == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'BE'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].be = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].bg == "√" && JSON.parse($.session.get('personPower'))[0].bg == "√") {
                        return '<input id="BE' + row.id + '" onfocus="javascript:columnUse(' + '\'BE\'' + ')" onblur="javascript:columnUseRefresh(' + '\'BE\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'BE\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'bf',
                title: 'BF',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].bh == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'BF'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].bf = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].bh == "√" && JSON.parse($.session.get('personPower'))[0].bh == "√") {
                        return '<input id="BF' + row.id + '" onfocus="javascript:columnUse(' + '\'BF\'' + ')" onblur="javascript:columnUseRefresh(' + '\'BF\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'BF\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'bg',
                title: 'BG',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].bi == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'BG'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].bg = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].bi == "√" && JSON.parse($.session.get('personPower'))[0].bi == "√") {
                        return '<input id="BG' + row.id + '" onfocus="javascript:columnUse(' + '\'BG\'' + ')" onblur="javascript:columnUseRefresh(' + '\'BG\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'BG\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'bh',
                title: 'BH',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].bj == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'BH'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].bh = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].bj == "√" && JSON.parse($.session.get('personPower'))[0].bj == "√") {
                        return '<input id="BH' + row.id + '" onfocus="javascript:columnUse(' + '\'BH\'' + ')" onblur="javascript:columnUseRefresh(' + '\'BH\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'BH\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'bi',
                title: 'BI',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].bk == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'BI'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].bi = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].bk == "√" && JSON.parse($.session.get('personPower'))[0].bk == "√") {
                        return '<input id="BI' + row.id + '" onfocus="javascript:columnUse(' + '\'BI\'' + ')" onblur="javascript:columnUseRefresh(' + '\'BI\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'BI\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'bj',
                title: 'BJ',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].bl == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'BJ'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].bj = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].bl == "√" && JSON.parse($.session.get('personPower'))[0].bl == "√") {
                        return '<input id="BJ' + row.id + '" onfocus="javascript:columnUse(' + '\'BJ\'' + ')" onblur="javascript:columnUseRefresh(' + '\'BJ\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'BJ\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'bk',
                title: 'BK',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].bm == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'BK'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].bk = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].bm == "√" && JSON.parse($.session.get('personPower'))[0].bm == "√") {
                        return '<input id="BK' + row.id + '" onfocus="javascript:columnUse(' + '\'BK\'' + ')" onblur="javascript:columnUseRefresh(' + '\'BK\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'BK\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'bl',
                title: 'BL',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].bn == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'BL'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].bl = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].bn == "√" && JSON.parse($.session.get('personPower'))[0].bn == "√") {
                        return '<input id="BL' + row.id + '" onfocus="javascript:columnUse(' + '\'BL\'' + ')" onblur="javascript:columnUseRefresh(' + '\'BL\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'BL\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'bm',
                title: 'BM',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].bo == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'BM'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].bm = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }
                    
                    if (JSON.parse($.session.get('companyPower'))[0].bo == "√" && JSON.parse($.session.get('personPower'))[0].bo == "√") {
                        return '<input id="BM' + row.id + '" onfocus="javascript:columnUse(' + '\'BM\'' + ')" onblur="javascript:columnUseRefresh(' + '\'BM\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'BM\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'bn',
                title: 'BN',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].bp == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'BN'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].bn = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }
                    
                    if (JSON.parse($.session.get('companyPower'))[0].bp == "√" && JSON.parse($.session.get('personPower'))[0].bp == "√") {
                        return '<input id="BN' + row.id + '" onfocus="javascript:columnUse(' + '\'BN\'' + ')" onblur="javascript:columnUseRefresh(' + '\'BN\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'BN\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'bo',
                title: 'BO',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].bq == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'BO'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].bo = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }
                    
                    if (JSON.parse($.session.get('companyPower'))[0].bq == "√" && JSON.parse($.session.get('personPower'))[0].bq == "√") {
                        return '<input id="BO' + row.id + '" onfocus="javascript:columnUse(' + '\'BO\'' + ')" onblur="javascript:columnUseRefresh(' + '\'BO\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'BO\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'bp',
                title: 'BP',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].br == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'BP'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].bp = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }
                    
                    if (JSON.parse($.session.get('companyPower'))[0].br == "√" && JSON.parse($.session.get('personPower'))[0].br == "√") {
                        return '<input id="BP' + row.id + '" onfocus="javascript:columnUse(' + '\'BP\'' + ')" onblur="javascript:columnUseRefresh(' + '\'BP\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'BP\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'bq',
                title: 'BQ',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].bs == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'BQ'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].bq = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }
                    
                    if (JSON.parse($.session.get('companyPower'))[0].bs == "√" && JSON.parse($.session.get('personPower'))[0].bs == "√") {
                        return '<input id="BQ' + row.id + '" onfocus="javascript:columnUse(' + '\'BQ\'' + ')" onblur="javascript:columnUseRefresh(' + '\'BQ\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'BQ\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'br',
                title: 'BR',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].bt == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'BR'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].br = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }
                    
                    if (JSON.parse($.session.get('companyPower'))[0].bt == "√" && JSON.parse($.session.get('personPower'))[0].bt == "√") {
                        return '<input id="BR' + row.id + '" onfocus="javascript:columnUse(' + '\'BR\'' + ')" onblur="javascript:columnUseRefresh(' + '\'BR\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'BR\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'bs',
                title: 'BS',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].bu == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'BS'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].bs = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }
                    
                    if (JSON.parse($.session.get('companyPower'))[0].bu == "√" && JSON.parse($.session.get('personPower'))[0].bu == "√") {
                        return '<input id="BS' + row.id + '" onfocus="javascript:columnUse(' + '\'BS\'' + ')" onblur="javascript:columnUseRefresh(' + '\'BS\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'BS\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'bt',
                title: 'BT',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].bv == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'BT'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].bt = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }
                    
                    if (JSON.parse($.session.get('companyPower'))[0].bv == "√" && JSON.parse($.session.get('personPower'))[0].bv == "√") {
                        return '<input id="BT' + row.id + '" onfocus="javascript:columnUse(' + '\'BT\'' + ')" onblur="javascript:columnUseRefresh(' + '\'BT\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'BT\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'bu',
                title: 'BU',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].bw == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'BU'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].bu = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }
                    
                    if (JSON.parse($.session.get('companyPower'))[0].bw == "√" && JSON.parse($.session.get('personPower'))[0].bw == "√") {
                        return '<input id="BU' + row.id + '" onfocus="javascript:columnUse(' + '\'BU\'' + ')" onblur="javascript:columnUseRefresh(' + '\'BU\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'BU\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'bv',
                title: 'BV',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].bx == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'BV'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].bv = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }
                    
                    if (JSON.parse($.session.get('companyPower'))[0].bx == "√" && JSON.parse($.session.get('personPower'))[0].bx == "√") {
                        return '<input id="BV' + row.id + '" onfocus="javascript:columnUse(' + '\'BV\'' + ')" onblur="javascript:columnUseRefresh(' + '\'BV\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'BV\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'bw',
                title: 'BW',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].byy == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'BW'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].bw = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }
                    
                    if (JSON.parse($.session.get('companyPower'))[0].byy == "√" && JSON.parse($.session.get('personPower'))[0].byy == "√") {
                        return '<input id="BW' + row.id + '" onfocus="javascript:columnUse(' + '\'BW\'' + ')" onblur="javascript:columnUseRefresh(' + '\'BW\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'BW\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'bx',
                title: 'BX',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].bz == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'BX'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].bx = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }
                    
                    if (JSON.parse($.session.get('companyPower'))[0].bz == "√" && JSON.parse($.session.get('personPower'))[0].bz == "√") {
                        return '<input id="BX' + row.id + '" onfocus="javascript:columnUse(' + '\'BX\'' + ')" onblur="javascript:columnUseRefresh(' + '\'BX\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'BX\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'byy',
                title: 'BY',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].ca == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'BY'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].byy = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }
                    
                    if (JSON.parse($.session.get('companyPower'))[0].ca == "√" && JSON.parse($.session.get('personPower'))[0].ca == "√") {
                        return '<input id="BY' + row.id + '" onfocus="javascript:columnUse(' + '\'BY\'' + ')" onblur="javascript:columnUseRefresh(' + '\'BY\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'BY\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'bz',
                title: 'BZ',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].cb == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'BZ'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].bz = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }
                    
                    if (JSON.parse($.session.get('companyPower'))[0].cb == "√" && JSON.parse($.session.get('personPower'))[0].cb == "√") {
                        return '<input id="BZ' + row.id + '" onfocus="javascript:columnUse(' + '\'BZ\'' + ')" onblur="javascript:columnUseRefresh(' + '\'BZ\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'BZ\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'ca',
                title: 'CA',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].cc == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'CA'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].ca = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }
                    
                    if (JSON.parse($.session.get('companyPower'))[0].cc == "√" && JSON.parse($.session.get('personPower'))[0].cc == "√") {
                        return '<input id="CA' + row.id + '" onfocus="javascript:columnUse(' + '\'CA\'' + ')" onblur="javascript:columnUseRefresh(' + '\'CA\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'A\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'cb',
                title: 'CB',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].cd == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'CB'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].cb = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].cd == "√" && JSON.parse($.session.get('personPower'))[0].cd == "√") {
                        return '<input id="CB' + row.id + '" onfocus="javascript:columnUse(' + '\'CB\'' + ')" onblur="javascript:columnUseRefresh(' + '\'CB\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'CB\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'cc',
                title: 'CC',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].ce == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'CC'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].cc = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].ce == "√" && JSON.parse($.session.get('personPower'))[0].ce == "√") {
                        return '<input id="CC' + row.id + '" onfocus="javascript:columnUse(' + '\'CC\'' + ')" onblur="javascript:columnUseRefresh(' + '\'CC\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'CC\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'cd',
                title: 'CD',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].cf == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'CD'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].cd = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].cf == "√" && JSON.parse($.session.get('personPower'))[0].cf == "√") {
                        return '<input id="CD' + row.id + '" onfocus="javascript:columnUse(' + '\'CD\'' + ')" onblur="javascript:columnUseRefresh(' + '\'CD\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'CD\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'ce',
                title: 'CE',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].cg == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'CE'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].ce = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].cg == "√" && JSON.parse($.session.get('personPower'))[0].cg == "√") {
                        return '<input id="CE' + row.id + '" onfocus="javascript:columnUse(' + '\'CE\'' + ')" onblur="javascript:columnUseRefresh(' + '\'CE\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'CE\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'cf',
                title: 'CF',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].ch == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'CF'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].cf = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].ch == "√" && JSON.parse($.session.get('personPower'))[0].ch == "√") {
                        return '<input id="CF' + row.id + '" onfocus="javascript:columnUse(' + '\'CF\'' + ')" onblur="javascript:columnUseRefresh(' + '\'CF\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'CF\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'cg',
                title: 'CG',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].ci == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'CG'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].cg = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].ci == "√" && JSON.parse($.session.get('personPower'))[0].ci == "√") {
                        return '<input id="CG' + row.id + '" onfocus="javascript:columnUse(' + '\'CG\'' + ')" onblur="javascript:columnUseRefresh(' + '\'CG\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'CG\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'ch',
                title: 'CH',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].cj == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'CH'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].ch = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].cj == "√" && JSON.parse($.session.get('personPower'))[0].cj == "√") {
                        return '<input id="CH' + row.id + '" onfocus="javascript:columnUse(' + '\'CH\'' + ')" onblur="javascript:columnUseRefresh(' + '\'CH\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'CH\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'ci',
                title: 'CI',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].ck == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'CI'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].ci = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].ck == "√" && JSON.parse($.session.get('personPower'))[0].ck == "√") {
                        return '<input id="CI' + row.id + '" onfocus="javascript:columnUse(' + '\'CI\'' + ')" onblur="javascript:columnUseRefresh(' + '\'CI\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'CI\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'cj',
                title: 'CJ',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].cl == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'CJ'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].cj = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].cl == "√" && JSON.parse($.session.get('personPower'))[0].cl == "√") {
                        return '<input id="CJ' + row.id + '" onfocus="javascript:columnUse(' + '\'CJ\'' + ')" onblur="javascript:columnUseRefresh(' + '\'CJ\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'CJ\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'ck',
                title: 'CK',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].cm == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'CK'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].ck = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].cm == "√" && JSON.parse($.session.get('personPower'))[0].cm == "√") {
                        return '<input id="CK' + row.id + '" onfocus="javascript:columnUse(' + '\'CK\'' + ')" onblur="javascript:columnUseRefresh(' + '\'CK\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'CK\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'cl',
                title: 'CL',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].cn == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'CL'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].cl = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }
                    
                    if (JSON.parse($.session.get('companyPower'))[0].cn == "√" && JSON.parse($.session.get('personPower'))[0].cn == "√") {
                        return '<input id="CL' + row.id + '" onfocus="javascript:columnUse(' + '\'CL\'' + ')" onblur="javascript:columnUseRefresh(' + '\'CL\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'CL\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'cm',
                title: 'CM',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].co == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'CM'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].cm = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].co == "√" && JSON.parse($.session.get('personPower'))[0].co == "√") {
                        return '<input id="CM' + row.id + '" onfocus="javascript:columnUse(' + '\'CM\'' + ')" onblur="javascript:columnUseRefresh(' + '\'CM\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'CM\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'cn',
                title: 'CN',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].cp == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'CN'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].cn = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].cp == "√" && JSON.parse($.session.get('personPower'))[0].cp == "√") {
                        return '<input id="CN' + row.id + '" onfocus="javascript:columnUse(' + '\'CN\'' + ')" onblur="javascript:columnUseRefresh(' + '\'CN\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'CN\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'co',
                title: 'CO',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].cq == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'CO'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].co = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].cq == "√" && JSON.parse($.session.get('personPower'))[0].cq == "√") {
                        return '<input id="CO' + row.id + '" onfocus="javascript:columnUse(' + '\'CO\'' + ')" onblur="javascript:columnUseRefresh(' + '\'CO\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'CO\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'cp',
                title: 'CP',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].cr == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'CP'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].cp = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].cr == "√" && JSON.parse($.session.get('personPower'))[0].cr == "√") {
                        return '<input id="CP' + row.id + '" onfocus="javascript:columnUse(' + '\'CP\'' + ')" onblur="javascript:columnUseRefresh(' + '\'CP\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'CP\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'cq',
                title: 'CQ',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].cs == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'CQ'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].cq = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].cs == "√" && JSON.parse($.session.get('personPower'))[0].cs == "√") {
                        return '<input id="CQ' + row.id + '" onfocus="javascript:columnUse(' + '\'CQ\'' + ')" onblur="javascript:columnUseRefresh(' + '\'CQ\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'CQ\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'cr',
                title: 'CR',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].ct == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'CR'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].cr = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].ct == "√" && JSON.parse($.session.get('personPower'))[0].ct == "√") {
                        return '<input id="CR' + row.id + '" onfocus="javascript:columnUse(' + '\'CR\'' + ')" onblur="javascript:columnUseRefresh(' + '\'CR\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'CR\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'cs',
                title: 'CS',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].cu == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'CS'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].cs = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].cu == "√" && JSON.parse($.session.get('personPower'))[0].cu == "√") {
                        return '<input id="CS' + row.id + '" onfocus="javascript:columnUse(' + '\'CS\'' + ')" onblur="javascript:columnUseRefresh(' + '\'CS\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'CS\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'ct',
                title: 'CT',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].cv == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'CT'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].ct = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].cv == "√" && JSON.parse($.session.get('personPower'))[0].cv == "√") {
                        return '<input id="CT' + row.id + '" onfocus="javascript:columnUse(' + '\'CT\'' + ')" onblur="javascript:columnUseRefresh(' + '\'CT\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'CT\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'cu',
                title: 'CU',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].cw == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'CU'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].cu = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].cw == "√" && JSON.parse($.session.get('personPower'))[0].cw == "√") {
                        return '<input id="CU' + row.id + '" onfocus="javascript:columnUse(' + '\'CU\'' + ')" onblur="javascript:columnUseRefresh(' + '\'CU\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'CU\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }, {
                field: 'cv',
                title: 'CV',
                align: 'center',
                sortable: true,
                width: 150,
                visible:JSON.parse($.session.get('personSelect'))[0].cx == "√",
                formatter: function (value, row, index) {

                    var this_gongshi = ""
                    var gongshi_list = JSON.parse($.session.get('gongshi_list'))
                    for(var i=0; i<gongshi_list.length; i++){
                        if(gongshi_list[i].thiscolumn.toUpperCase() == 'CV'){
                            this_gongshi = gongshi_list[i].gongshi
                            break;
                        }
                    }
                    var A = data[index].a
                    var B = data[index].b
                    var C = data[index].c
                    var D = data[index].d
                    var E = data[index].e
                    var F = data[index].f
                    var G = data[index].g
                    var H = data[index].h
                    var I = data[index].i
                    var J = data[index].j
                    var K = data[index].k
                    var L = data[index].l
                    var M = data[index].M
                    var N = data[index].n
                    var O = data[index].o
                    var P = data[index].p
                    var Q = data[index].q
                    var R = data[index].r
                    var S = data[index].s
                    var T = data[index].t
                    var U = data[index].u
                    var V = data[index].v
                    var W = data[index].w
                    var X = data[index].x
                    var Y = data[index].y
                    var Z = data[index].z
                    var AA = data[index].aa
                    var AB = data[index].ab
                    var AC = data[index].ac
                    var AD = data[index].ad
                    var AE = data[index].ae
                    var AF = data[index].af
                    var AG = data[index].ag
                    var AH = data[index].ah
                    var AI = data[index].ai
                    var AJ = data[index].aj
                    var AK = data[index].ak
                    var AL = data[index].al
                    var AM = data[index].am
                    var AN = data[index].an
                    var AO = data[index].ao
                    var AP = data[index].ap
                    var AQ = data[index].aq
                    var AR = data[index].ar
                    var AS = data[index].ass
                    var AT = data[index].at
                    var AU = data[index].au
                    var AV = data[index].av
                    var AW = data[index].aw
                    var AX = data[index].ax
                    var AY = data[index].ay
                    var AZ = data[index].az
                    var BA = data[index].ba
                    var BB = data[index].bb
                    var BC = data[index].bc
                    var BD = data[index].bd
                    var BE = data[index].be
                    var BF = data[index].bf
                    var BG = data[index].bg
                    var BH = data[index].bh
                    var BI = data[index].bi
                    var BJ = data[index].bj
                    var BK = data[index].bk
                    var BL = data[index].bl
                    var BM = data[index].bm
                    var BN = data[index].bn
                    var BO = data[index].bo
                    var BP = data[index].bp
                    var BQ = data[index].bq
                    var BR = data[index].br
                    var BS = data[index].bs
                    var BT = data[index].bt
                    var BU = data[index].bu
                    var BV = data[index].bv
                    var BW = data[index].bw
                    var BX = data[index].bx
                    var BY = data[index].byy
                    var BZ = data[index].bz
                    var CA = data[index].ca
                    var CB = data[index].cb
                    var CC = data[index].cc
                    var CD = data[index].cd
                    var CE = data[index].ce
                    var CF = data[index].cf
                    var CG = data[index].cg
                    var CH = data[index].ch
                    var CI = data[index].ci
                    var CJ = data[index].cj
                    var CK = data[index].ck
                    var CL = data[index].cl
                    var CM = data[index].cm
                    var CN = data[index].cn
                    var CO = data[index].co
                    var CP = data[index].cp
                    var CQ = data[index].cq
                    var CR = data[index].cr
                    var CS = data[index].cs
                    var CT = data[index].CT
                    var CU = data[index].cu
                    var CV = data[index].cv
                    if(this_gongshi != ''){
                        value = eval(this_gongshi.toUpperCase())
                        data[index].cv = value
                    }

                    if(isNaN(value)){
                        value = ''
                    }

                    if (JSON.parse($.session.get('companyPower'))[0].cx == "√" && JSON.parse($.session.get('personPower'))[0].cx == "√") {
                        return '<input id="CV' + row.id + '" onfocus="javascript:columnUse(' + '\'CV\'' + ')" onblur="javascript:columnUseRefresh(' + '\'CV\'' + ')" oninput="javascript:columnUpd(' + row.id + ',' + '\'CV\'' + ')" value="' + value + '" class="form-control"  >'
                    } else {
                        return '<input value="' + value + '" class="form-control" readonly="readonly" >'
                    }
                }
            }
        ],
        onClickRow: function (row, el) {
            let isSelect = $(el).hasClass('selected')
            if (isSelect) {
                $(el).removeClass('selected')
            } else {
                $(el).addClass('selected')
            }
        }
    })
}
