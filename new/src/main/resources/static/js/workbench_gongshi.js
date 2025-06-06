
function getList() {
    $ajax({
        type: 'post',
        url: '/workbench_gongshi/getList',
    }, false, '', function (res) {
        if (res.code == 200) {
            setTable(res.data);
        }
    })
}

$(function () {
    getList();


    //点击刷新按钮
    $("#refresh-btn").click(function () {
        getList();
    })

    $("#select-btn").click(function () {
        var query=$('#query').val()
        $ajax({
            type: 'post',
            url: '/workbench_gongshi/queryList',
            data:{
                query:query
            }
        }, false, '', function (res) {
            if (res.code == 200) {
                setTable(res.data);
            }
        })
    })

    //点击新增按钮显示弹窗
    $("#add-btn").click(function () {
        $('#add-modal').modal('show');
    })

    //新增弹窗里点击关闭按钮
    $('#add-close-btn').click(function () {
        $('#add-modal').modal('hide');
    })

    //新增弹窗里点击提交按钮
    $("#add-submit-btn").click(function () {
        let params = formToJson("#add-form")
        var this_column = params.thiscolumn
        var gongshi = params.gongshi
        var lie = ""
        for(var i=1; i<=gongshi.length; i++){
            var this_str = gongshi.substring(i-1,i)
            var this_asc = gongshi.charCodeAt(i-1)
            if((this_asc >= 65 && this_asc <= 90) || (this_asc >= 97 && this_asc <= 122)){
                lie = lie + this_str
            }else{
                if(lie != ""){
                    if(lie.toUpperCase() == this_column.toUpperCase()){
                        alert("列公式不能含有自身")
                        return;
                    }
                }
                lie = ""
            }
        }
        // return;

        if (checkForm('#add-form')) {
            $ajax({
                type: 'post',
                url: '/workbench_gongshi/add',
                data: JSON.stringify({
                    addUserInfo: params
                }),
                dataType: 'json',
                contentType: 'application/json;charset=utf-8'
            }, false, '', function (res) {
                alert(res.msg)
                if(res.code == 200){
                    $('#add-form')[0].reset();
                    getList();
                    $('#add-close-btn').click();
                }
            })
        }
    })


    //点击修改按钮显示弹窗
    $('#update-btn').click(function () {
        let rows = getTableSelection('#labelTable')
        if (rows.length > 1 || rows.length == 0) {
            alert('请选择一条数据修改');
            return;
        }
        $('#update-modal').modal('show');
        setForm(rows[0].data, '#update-form');
    })

    //修改弹窗点击关闭按钮
    $('#update-close-btn').click(function () {
        $('#update-form')[0].reset();
        $('#update-modal').modal('hide');
    })

    //修改弹窗里点击提交按钮
    $('#update-submit-btn').click(function () {
        var msg = confirm("确认要修改吗？")
        if (msg) {
            let params = formToJson('#update-form');
            var this_column = params.thiscolumn
            var gongshi = params.gongshi
            var lie = ""
            for(var i=1; i<=gongshi.length; i++){
                var this_str = gongshi.substring(i-1,i)
                var this_asc = gongshi.charCodeAt(i-1)
                if((this_asc >= 65 && this_asc <= 90) || (this_asc >= 97 && this_asc <= 122)){
                    lie = lie + this_str
                }else{
                    if(lie != ""){
                        if(lie.toUpperCase() == this_column.toUpperCase()){
                            alert("列公式不能含有自身")
                            return;
                        }
                    }
                    lie = ""
                }
            }
            if (checkForm('#update-form')) {
                $ajax({
                    type: 'post',
                    url: '/workbench_gongshi/update',
                    data: {
                        userInfoJson: JSON.stringify(params)
                    },
                    dataType: 'json',
                    contentType: 'application/json;charset=utf-8'
                }, false, '', function (res) {
                    alert(res.msg);
                    if (res.code == 200) {
                        $('#update-close-btn').click();
                        $('#update-modal').modal('hide');
                        getList();
                    }
                })
            }
        }
    })

    //点击删除按钮
    $('#delete-btn').click(function () {
        var msg = confirm("确认要删除吗？")
        if (msg) {
            let rows = getTableSelection("#labelTable");
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
                url: '/workbench_gongshi/delete',
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

})

function setTable(data) {
    if ($('#labelTable').html != '') {
        $('#labelTable').bootstrapTable('load', data);
    }
    var count = 0;
    $('#labelTable').bootstrapTable({
        data: data,
        sortStable: true,
        classes: 'table table-hover table table-bordered',
        idField: 'id',
        pagination: true,
        pageSize : 15,//单页记录数
        clickToSelect: true,
        locale: 'zh-CN',
        toolbar: '#table-toolbar',
        toolbarAlign: 'left',
        theadClasses: "thead-light",//这里设置表头样式
        columns: [
            {
                field: 'id',
                title: '序号',
                align: 'center',
                width: 50,
                formatter: function (value, row, index) {
                    return index + 1;
                }
            },
            {
                field: 'thiscolumn',
                title: '工作台列',
                align: 'center',
                sortable: true,
                width: 150,
                formatter:function(value, row , index){
                    if(value == null || value == ''){
                        value = '-'
                    }
                    return "<div title='"+value+"'; style='overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width: 100%;word-wrap:break-all;word-break:break-all;' href='javascript:edit(\""+row.id+"\",true)'>"+value+"</div>";
                }
            }, {
                field: 'gongshi',
                title: '计算公式',
                align: 'center',
                sortable: true,
                width: 150,
                formatter:function(value, row , index){
                    if(value == null || value == ''){
                        value = '-'
                    }
                    return "<div title='"+value+"'; style='overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width: 100%;word-wrap:break-all;word-break:break-all;' href='javascript:edit(\""+row.id+"\",true)'>"+value+"</div>";
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
            // count += 1;
            // if (count <= 1 ) {
            //     $(el).addClass('selected')
            //
            // }else{
            //     $(el).removeClass('selected')
            // }
            // window.setInterval(function(){count = 0;},1000);
        }

    })

}