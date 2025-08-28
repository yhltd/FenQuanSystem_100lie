function getList() {
    $ajax({
        type: 'post',
        url: '/company_power/getList',
    }, false, '', function (res) {
        if (res.code == 200) {
            if(res.msg == '无权限'){
                alert('无权限');
            }else{
                console.log(res.data)
                setTable1(res.data);
                setTable2(res.data);
                setTable3(res.data);
                setTable4(res.data);
            }

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

})

function columnUpd(id,column){
    var this_value = $('#' + column + id).val();
    $ajax({
        type: 'post',
        url: '/company_power/update',
        data: {
            column:column,
            id:id,
            this_value:this_value
        },
    }, false, '', function (res) {
        // alert(res.msg);
        if (res.code == 200) {
            var obj = ""
            if(res.msg == '修改成功'){
                obj = document.getElementById("upd_1");
            }else if(res.msg == '无权限'){
                obj = document.getElementById("upd_3");
            }else{
                obj = document.getElementById("upd_2");
            }
            obj.hidden = false
            setTimeout(function(){
                obj.hidden = true
            },3000);

            getList();
        }
    })
}

function setTable1(data) {
    if ($('#companyPowerTable1').html != '') {
        $('#companyPowerTable1').bootstrapTable('load', data);
    }

    $('#companyPowerTable1').bootstrapTable({
        data: data,
        sortStable: true,
        classes: 'table gradient-table',
        idField: 'id',
        pagination: false,
        clickToSelect: true,
        locale: 'zh-CN',
        toolbar: '#table-toolbar',
        toolbarAlign: '',
        theadClasses: "",//这里设置表头样式
        columns: [
            // {
            //     field: '',
            //     title: '序号',
            //     align: 'center',
            //     sortable: true,
            //     width: 70,
            //     formatter: function (value, row, index) {
            //         return index + 1;
            //     }
            // },
            {
                field: 'b',
                title: '公司',
                align: 'center',
                sortable: true,
                width: 200,
            }, {
                field: 'c',
                title: 'A',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="C' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'C\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="C' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'C\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'd',
                title: 'B',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="D' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'D\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="D' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'D\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'e',
                title: 'C',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="E' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'E\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="E' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'E\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'f',
                title: 'D',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="F' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'F\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="F' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'F\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'g',
                title: 'E',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="G' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'G\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="G' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'G\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'h',
                title: 'F',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="H' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'H\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="H' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'H\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'i',
                title: 'G',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="I' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'I\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="I' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'I\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'j',
                title: 'H',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="J' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'J\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="J' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'J\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'k',
                title: 'I',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="K' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'K\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="K' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'K\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'l',
                title: 'J',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="L' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'L\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="L' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'L\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'm',
                title: 'K',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="M' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'M\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="M' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'M\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'n',
                title: 'L',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="N' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'N\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="N' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'N\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'o',
                title: 'M',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="O' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'O\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="O' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'O\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'p',
                title: 'N',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="P' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'P\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="P' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'P\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'q',
                title: 'O',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="Q' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'Q\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="Q' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'Q\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'r',
                title: 'P',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="R' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'R\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="R' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'R\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 's',
                title: 'Q',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="S' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'S\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="S' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'S\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 't',
                title: 'R',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="T' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'T\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="T' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'T\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'u',
                title: 'S',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="U' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'U\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="U' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'U\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'v',
                title: 'T',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="V' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'V\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="V' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'V\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'w',
                title: 'U',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="W' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'W\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="W' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'W\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'x',
                title: 'V',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="X' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'X\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="X' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'X\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'y',
                title: 'W',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="Y' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'Y\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="Y' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'Y\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'z',
                title: 'X',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="Z' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'Z\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="Z' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'Z\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'aa',
                title: 'Y',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="AA' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'AA\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="AA' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'AA\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'ab',
                title: 'Z',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="AB' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'AB\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="AB' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'AB\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }
        ],
    })
}

function setTable2(data) {
    if ($('#companyPowerTable2').html != '') {
        $('#companyPowerTable2').bootstrapTable('load', data);
    }

    $('#companyPowerTable2').bootstrapTable({
        data: data,
        sortStable: true,
        classes: 'table gradient-table',
        idField: 'id',
        pagination: false,
        clickToSelect: true,
        locale: 'zh-CN',
        toolbar: '',
        toolbarAlign: '',
        theadClasses: "",//这里设置表头样式
        columns: [
            // {
            //     field: '',
            //     title: '序号',
            //     align: 'center',
            //     sortable: true,
            //     width: 70,
            //     formatter: function (value, row, index) {
            //         return index + 1;
            //     }
            // },
            {
                field: 'b',
                title: '公司',
                align: 'center',
                sortable: true,
                width: 200,
            },
            {
                field: 'ac',
                title: 'AA',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="AC' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'AC\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="AC' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'AC\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'ad',
                title: 'AB',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="AD' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'AD\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="AD' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'AD\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'ae',
                title: 'AC',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="AE' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'AE\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="AE' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'AE\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'af',
                title: 'AD',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="AF' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'AF\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="AF' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'AF\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'ag',
                title: 'AE',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="AG' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'AG\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="AG' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'AG\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'ah',
                title: 'AF',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="AH' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'AH\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="AH' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'AH\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'ai',
                title: 'AG',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="AI' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'AI\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="AI' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'AI\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'aj',
                title: 'AH',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="AJ' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'AJ\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="AJ' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'AJ\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'ak',
                title: 'AI',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="AK' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'AK\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="AK' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'AK\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'al',
                title: 'AJ',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="AL' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'AL\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="AL' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'AL\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'am',
                title: 'AK',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="AM' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'AM\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="AM' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'AM\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'an',
                title: 'AL',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="AN' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'AN\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="AN' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'AN\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'ao',
                title: 'AM',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="AO' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'AO\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="AO' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'AO\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'ap',
                title: 'AN',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="AP' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'AP\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="AP' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'AP\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'aq',
                title: 'AO',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="AQ' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'AQ\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="AQ' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'AQ\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'ar',
                title: 'AP',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="AR' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'AR\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="AR' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'AR\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'ass',
                title: 'AQ',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="ASS' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'ASS\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="ASS' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'ASS\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'at',
                title: 'AR',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="AT' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'AT\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="AT' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'AT\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'au',
                title: 'AS',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="AU' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'AU\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="AU' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'AU\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'av',
                title: 'AT',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="AV' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'AV\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="AV' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'AV\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'aw',
                title: 'AU',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="AW' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'AW\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="AW' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'AW\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'ax',
                title: 'AV',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="AX' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'AX\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="AX' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'AX\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'ay',
                title: 'AW',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="AY' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'AY\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="AY' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'AY\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'az',
                title: 'AX',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="AZ' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'AZ\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="AZ' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'AZ\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'ba',
                title: 'AY',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="BA' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'BA\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="BA' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'BA\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'bb',
                title: 'AZ',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="BB' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'BB\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="BB' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'BB\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }
        ],
    })
}

function setTable3(data) {
    if ($('#companyPowerTable3').html != '') {
        $('#companyPowerTable3').bootstrapTable('load', data);
    }

    $('#companyPowerTable3').bootstrapTable({
        data: data,
        sortStable: true,
        classes: 'table gradient-table',
        idField: 'id',
        pagination: false,
        clickToSelect: true,
        locale: 'zh-CN',
        toolbar: '',
        toolbarAlign: '',
        theadClasses: "",//这里设置表头样式
        columns: [
            // {
            //     field: '',
            //     title: '序号',
            //     align: 'center',
            //     sortable: true,
            //     width: 70,
            //     formatter: function (value, row, index) {
            //         return index + 1;
            //     }
            // },
            {
                field: 'b',
                title: '公司',
                align: 'center',
                sortable: true,
                width: 200,
            },{
                field: 'bc',
                title: 'BA',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="BC' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'BC\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="BC' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'BC\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'bd',
                title: 'BB',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="BD' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'BD\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="BD' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'BD\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'be',
                title: 'BC',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="BE' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'BE\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="BE' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'BE\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'bf',
                title: 'BD',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="BF' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'BF\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="BF' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'BF\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'bg',
                title: 'BE',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="BG' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'BG\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="BG' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'BG\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'bh',
                title: 'BF',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="BH' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'BH\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="BH' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'BH\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'bi',
                title: 'BG',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="BI' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'BI\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="BI' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'BI\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'bj',
                title: 'BH',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="BJ' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'BJ\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="BJ' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'BJ\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'bk',
                title: 'BI',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="BK' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'BK\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="BK' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'BK\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'bl',
                title: 'BJ',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="BL' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'BL\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="BL' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'BL\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'bm',
                title: 'BK',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="BM' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'BM\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="BM' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'BM\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'bn',
                title: 'BL',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="BN' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'BN\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="BN' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'BN\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'bo',
                title: 'BM',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="BO' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'BO\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="BO' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'BO\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'bp',
                title: 'BN',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="BP' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'BP\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="BP' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'BP\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'bq',
                title: 'BO',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="BQ' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'BQ\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="BQ' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'BQ\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'br',
                title: 'BP',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="BR' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'BR\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="BR' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'BR\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'bs',
                title: 'BQ',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="BS' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'BS\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="BS' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'BS\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'bt',
                title: 'BR',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="BT' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'BT\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="BT' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'BT\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'bu',
                title: 'BS',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="BU' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'BU\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="BU' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'BU\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'bv',
                title: 'BT',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="BV' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'BV\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="BV' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'BV\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'bw',
                title: 'BU',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="BW' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'BW\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="BW' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'BW\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'bx',
                title: 'BV',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="BX' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'BX\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="BX' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'BX\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'by',
                title: 'BW',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="BY' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'BY\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="BY' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'BY\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'bz',
                title: 'BX',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="BZ' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'BZ\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="BZ' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'BZ\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'ca',
                title: 'BY',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="CA' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'CA\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="CA' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'CA\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'cb',
                title: 'BZ',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="CB' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'CB\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="CB' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'CB\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }
        ],
    })
}

function setTable4(data) {
    if ($('#companyPowerTable4').html != '') {
        $('#companyPowerTable4').bootstrapTable('load', data);
    }

    $('#companyPowerTable4').bootstrapTable({
        data: data,
        sortStable: true,
        classes: 'table gradient-table',
        idField: 'id',
        pagination: false,
        clickToSelect: true,
        locale: 'zh-CN',
        toolbar: '',
        toolbarAlign: '',
        theadClasses: "",//这里设置表头样式
        columns: [
            // {
            //     field: '',
            //     title: '序号',
            //     align: 'center',
            //     sortable: true,
            //     width: 70,
            //     formatter: function (value, row, index) {
            //         return index + 1;
            //     }
            // },
            {
                field: 'b',
                title: '公司',
                align: 'center',
                sortable: true,
                width: 200,
            }, {
                field: 'cc',
                title: 'CA',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="CC' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'CC\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="CC' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'CC\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'cd',
                title: 'CB',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="CD' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'CD\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="CD' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'CD\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'ce',
                title: 'CC',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="CE' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'CE\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="CE' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'CE\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'cf',
                title: 'CD',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="CF' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'CF\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="CF' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'CF\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'cg',
                title: 'CE',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="CG' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'CG\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="CG' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'CG\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'ch',
                title: 'CF',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="CH' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'CH\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="CH' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'CH\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'ci',
                title: 'CG',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="CI' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'CI\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="CI' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'CI\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'cj',
                title: 'CH',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="CJ' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'CJ\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="CJ' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'CJ\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'ck',
                title: 'CI',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="CK' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'CK\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="CK' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'CK\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'cl',
                title: 'CJ',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="CL' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'CL\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="CL' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'CL\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'cm',
                title: 'CK',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="CM' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'CM\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="CM' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'CM\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'cn',
                title: 'CL',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="CN' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'CN\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="CN' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'CN\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'co',
                title: 'CM',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="CO' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'CO\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="CO' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'CO\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'cp',
                title: 'CN',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="CP' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'CP\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="CP' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'CP\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'cq',
                title: 'CO',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="CQ' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'CQ\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="CQ' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'CQ\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'cr',
                title: 'CP',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="CR' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'CR\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="CR' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'CR\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'cs',
                title: 'CQ',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="CS' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'CS\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="CS' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'CS\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'ct',
                title: 'CR',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="CT' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'CT\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="CT' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'CT\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'cu',
                title: 'CS',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="CU' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'CU\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="CU' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'CU\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'cv',
                title: 'CT',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="CV' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'CV\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="CV' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'CV\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'cw',
                title: 'CU',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="CW' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'CW\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="CW' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'CW\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }, {
                field: 'cx',
                title: 'CV',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(value == "√"){
                        return '<select id="CX' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'CX\'' + ')" class="form-control">' +
                            '<option value="√" selected="selected">√</option>'+
                            '<option value=" "> </option>'+
                            '</select> '
                    }else{
                        return '<select id="CX' + row.id + '" onchange="javascript:columnUpd(' + row.id +',' + '\'CX\'' + ')" class="form-control">' +
                            '<option value="√" >√</option>'+
                            '<option value=" " selected="selected"> </option>'+
                            '</select> '
                    }
                }
            }
        ],
    })
}