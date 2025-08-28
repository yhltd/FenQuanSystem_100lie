function getList() {
    $ajax({
        type: 'post',
        url: '/use_state/getList',
    }, false, '', function (res) {
        if (res.code == 200) {
            console.log(res.data)
            setTable1(res.data);
            setTable2(res.data);
            setTable3(res.data);
            setTable4(res.data);
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

    $("#relieve_limit").click(function (){
        if (confirm("确认解除所有列的占用状态吗?")){
            $ajax({
                type: 'post',
                url: '/use_state/update_all',
            }, false, '', function (res) {
                if (res.code == 200) {
                    var obj = ""
                    if(res.msg == '修改成功'){
                        obj = document.getElementById("upd_1");
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
    })


})

function columnUpd(id,column){

    if (confirm("确认解除" + column + "列的占用状态吗?")){
        $ajax({
            type: 'post',
            url: '/use_state/update',
            data: {
                column:column,
                id:id
            },
        }, false, '', function (res) {
            // alert(res.msg);
            if (res.code == 200) {
                var obj = ""
                if(res.msg == '修改成功'){
                    obj = document.getElementById("upd_1");
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

}


function setTable1(data) {
    if ($('#useStateTable1').html != '') {
        $('#useStateTable1').bootstrapTable('load', data);
    }

    $('#useStateTable1').bootstrapTable({
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
                field: '公司',
                title: '公司',
                align: 'center',
                sortable: true,
                width: 200,
            }, {
                field: 'a',
                title: 'A',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'A\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'A\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'b',
                title: 'B',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'B\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'B\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'c',
                title: 'C',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'C\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'C\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'd',
                title: 'D',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'D\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'D\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'e',
                title: 'E',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'E\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'E\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'f',
                title: 'F',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'F\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'F\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'g',
                title: 'G',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'G\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'G\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'h',
                title: 'H',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'H\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'H\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'i',
                title: 'I',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'I\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'I\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'j',
                title: 'J',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'J\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'J\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'k',
                title: 'K',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'K\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'K\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'l',
                title: 'L',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'L\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'L\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'm',
                title: 'M',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'M\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'M\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'n',
                title: 'N',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'N\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'N\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'o',
                title: 'O',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'O\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'O\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'p',
                title: 'P',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'P\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'P\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'q',
                title: 'Q',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'Q\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'Q\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'r',
                title: 'R',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'R\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'R\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 's',
                title: 'S',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'S\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'S\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 't',
                title: 'T',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'T\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'T\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'u',
                title: 'U',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'U\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'U\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'v',
                title: 'V',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'V\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'V\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'w',
                title: 'W',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'W\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'W\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'x',
                title: 'X',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'X\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'X\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'y',
                title: 'Y',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'Y\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'Y\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'z',
                title: 'Z',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'Z\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'Z\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }
        ],
    })
}

function setTable2(data) {
    if ($('#useStateTable2').html != '') {
        $('#useStateTable2').bootstrapTable('load', data);
    }

    $('#useStateTable2').bootstrapTable({
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
                field: '公司',
                title: '公司',
                align: 'center',
                sortable: true,
                width: 200,
            },
            {
                field: 'aa',
                title: 'AA',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'AA\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'AA\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'ab',
                title: 'AB',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'AB\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'AB\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'ac',
                title: 'AC',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'AC\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'AC\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'ad',
                title: 'AD',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'AD\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'AD\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'ae',
                title: 'AE',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'AE\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'AE\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'af',
                title: 'AF',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'AF\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'AF\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'ag',
                title: 'AG',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'AG\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'AG\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'ah',
                title: 'AH',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'AH\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'AH\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'ai',
                title: 'AI',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'AI\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'AI\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'aj',
                title: 'AJ',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'AJ\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'AJ\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'ak',
                title: 'AK',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'AK\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'AK\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'al',
                title: 'AL',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'AL\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'AL\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'am',
                title: 'AM',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'AM\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'AM\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'an',
                title: 'AN',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'AN\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'AN\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'ao',
                title: 'AO',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'AO\'' + ')" value="'+ value +'" class="form-control" readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'AO\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'ap',
                title: 'AP',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'AP\'' + ')" value="'+ value +'" class="form-control" readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'AP\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'aq',
                title: 'AQ',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input  onclick="javascript:columnUpd(' + row.id +',' + '\'AQ\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input  onclick="javascript:columnUpd(' + row.id +',' + '\'AQ\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'ar',
                title: 'AR',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'AR\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'AR\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'ass',
                title: 'AS',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'ASS\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'ASS\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'at',
                title: 'AT',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'AT\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'AT\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'au',
                title: 'AU',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'AU\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'AU\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'av',
                title: 'AV',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'AV\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'AV\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'aw',
                title: 'AW',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'AW\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'AW\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'ax',
                title: 'AX',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'AX\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'AX\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'ay',
                title: 'AY',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'AY\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'AY\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'az',
                title: 'AZ',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'AZ\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'AZ\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }
        ],
    })
}

function setTable3(data) {
    if ($('#useStateTable3').html != '') {
        $('#useStateTable3').bootstrapTable('load', data);
    }

    $('#useStateTable3').bootstrapTable({
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
                field: '公司',
                title: '公司',
                align: 'center',
                sortable: true,
                width: 200,
            },{
                field: 'ba',
                title: 'BA',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'BA\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'BA\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'bb',
                title: 'BB',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'BB\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'BB\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'bc',
                title: 'BC',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'BC\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'BC\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'bd',
                title: 'BD',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'BD\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'BD\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'be',
                title: 'BE',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'BE\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'BE\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'bf',
                title: 'BF',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'BF\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'BF\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'bg',
                title: 'BG',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'BG\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'BG\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'bh',
                title: 'BH',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'BH\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'BH\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'bi',
                title: 'BI',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'BI\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'BI\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'bj',
                title: 'BJ',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'BJ\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'BJ\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'bk',
                title: 'BK',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'BK\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'BK\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'bl',
                title: 'BL',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'BL\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'BL\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'bm',
                title: 'BM',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'BM\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'BM\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'bn',
                title: 'BN',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'BN\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'BN\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'bo',
                title: 'BO',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'BO\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'BO\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'bp',
                title: 'BP',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'BP\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'BP\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'bq',
                title: 'BQ',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'BQ\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'BQ\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'br',
                title: 'BR',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'BR\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'BR\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'bs',
                title: 'BS',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'BS\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'BS\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'bt',
                title: 'BT',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'BT\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'BT\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'bu',
                title: 'BU',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'BU\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'BU\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'bv',
                title: 'BV',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'BV\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'BV\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'bw',
                title: 'BW',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'BW\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'BW\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'bx',
                title: 'BX',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'BX\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'BX\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'byy',
                title: 'BY',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'BYY\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'BYY\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'bz',
                title: 'BZ',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'BZ\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'BZ\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }
        ],
    })
}

function setTable4(data) {
    if ($('#useStateTable4').html != '') {
        $('#useStateTable4').bootstrapTable('load', data);
    }

    $('#useStateTable4').bootstrapTable({
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
                field: '公司',
                title: '公司',
                align: 'center',
                sortable: true,
                width: 200,
            }, {
                field: 'ca',
                title: 'CA',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'CA\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'CA\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'cb',
                title: 'CB',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'CB\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'CB\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'cc',
                title: 'CC',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'CC\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'CC\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'cd',
                title: 'CD',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'CD\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'CD\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'ce',
                title: 'CE',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'CE\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'CE\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'cf',
                title: 'CF',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'CF\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'CF\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'cg',
                title: 'CG',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'CG\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'CG\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'ch',
                title: 'CH',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'CH\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'CH\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'ci',
                title: 'CI',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'CI\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'CI\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'cj',
                title: 'CJ',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'CJ\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'CJ\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'ck',
                title: 'CK',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'CK\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'CK\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'cl',
                title: 'CL',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'CL\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'CL\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'cm',
                title: 'CM',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'CM\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'CM\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'cn',
                title: 'CN',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'Cn\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'Cn\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'co',
                title: 'CO',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'CO\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'CO\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'cp',
                title: 'CP',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'CP\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'CP\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'cq',
                title: 'CQ',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'CQ\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'CQ\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'cr',
                title: 'CR',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'CR\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'CR\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'cs',
                title: 'CS',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'CS\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'CS\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'ct',
                title: 'CT',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'CT\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'CT\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'cu',
                title: 'CU',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'CU\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'CU\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }, {
                field: 'cv',
                title: 'CV',
                align: 'center',
                sortable: true,
                width: 80,
                formatter:function(value, row , index){
                    if(true){
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'CV\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }else{
                        return '<input onclick="javascript:columnUpd(' + row.id +',' + '\'CV\'' + ')" value="'+ value +'" class="form-control"  readonly="readonly">'
                    }
                }
            }
        ],
    })
}