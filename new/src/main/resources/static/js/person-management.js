

function getList() {
    // $('#query').val('')
    $ajax({
        type: 'post',
        url: '/user/queryC',
    }, false, '', function (res) {
        if (res.code == 200) {
            setTable(res.data);
        }
    })
}

function querbumen() {
    $ajax({
        type: 'post',
        url: '/user/querbumen',
    }, false, '', function (res) {
        if (res.code == 200) {
            console.log(res.data)
            var list = res.data
            var xiala = ""
            for(var i=0; i<list.length; i++){
                if(list[i].departmentName != '' && list[i].departmentName != undefined){
                    xiala = '<option value="' + list[i].departmentName + '">' + list[i].departmentName + '</option>'
                }
                $("#add_bumen").append(xiala);
                $("#update-bumen").append(xiala);
            }
        }
    })
}



$(function () {
    //刷新
    getList();

    querbumen();

    $("#select-btn").click(function () {
        var query=$('#query').val()
        if(query==""){
            alert("姓名不能为空");
        }
        $ajax({
            type: 'post',
            url: '/user/queryC_Inquire',
            data:{
                query:query
            }
        }, false, '', function (res) {
            if (res.code == 200) {
                setTable(res.data);
            }
        })
    })


    $("#refresh-btn").click(function () {
        getList();
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
        var add_C = $('#add_C').val();
        var add_D = $('#add_D').val();
        var add_E = $('#add_E').val();
        var add_zhuangtai = $('#add_zhuangtai').val();
        var add_email = $('#add_email').val();
        var add_phone = $('#add_phone').val();
        var add_bianhao = $('#add_bianhao').val();
        var add_bumen = $('#add_bumen').val();
        if(add_C==""||add_D==""||add_E==""||add_zhuangtai==""){
            alert("姓名,账号，密码，账号状态都不能为空");
        }else{
            $ajax({
                type: 'post',
                url: '/user/queryC_Inquire',
                data:{
                    query:add_C
                }
            }, false, '', function (res) {
                if (res.code == 200) {
                    if(res.data.length > 0){
                        alert("姓名重复！");
                    }else{
                        $ajax({
                            type: 'post',
                            url: '/user/add',
                            data: {
                                add_C:add_C,
                                add_D:add_D,
                                add_E:add_E,
                                add_zhuangtai:add_zhuangtai,
                                add_email:add_email,
                                add_phone:add_phone,
                                add_bianhao:add_bianhao,
                                add_bumen:add_bumen,
                            },
                        }, false, '', function (res) {
                            alert(res.msg)
                            if (res.code == 200) {
                                $('#add-form')[0].reset();
                                getList();
                                $('#add-close-btn').click();
                            }

                        })
                    }
                }
            })
        }

    })








    /*$("#add-submit-btn").click(function () {
        let params = formToJson("#add-form")
        console.log(params)
        // if (checkForm('#add-form')) {
            $ajax({
                type: 'post',
                url: '/user/add',
                data: JSON.stringify({
                    addUserInfo: params
                }),
                dataType: 'json',
                contentType: 'application/json;charset=utf-8'
            }, false, '', function (res) {
                alert(res.msg)
                if (res.code == 200) {
                    $('#add-form')[0].reset();
                    getList();
                    $('#add-close-btn').click();
                }
            })
        // }
    })*/

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

    $('#qr-btn').click(function () {
        let rows = getTableSelection('#labelTable')
        if (rows.length > 1 || rows.length == 0) {
            alert('请选择一条数据生成');
            return;
        }
        console.log(rows[0].data)
        var thisStr = rows[0].data.b + "`" + rows[0].data.d + "`" + rows[0].data.e
        console.log(thisStr)
        $ajax({
            type: 'post',
            url: '/jiami/jiamiGet',
            data:{
                text:thisStr
            }
        }, false, '', function (res) {
            console.log(res)
            var url = window.top.location.href.replace("/html/main.html","") + "?user=" + res
            console.log(url)
            var qrcode_container = document.getElementById('qrcode');
            // 生成二维码
            var qrcode = new QRCode(qrcode_container, {
                text: url, // 二维码中的内容
                width: 200, // 二维码的宽度
                height: 200, // 二维码的高度
                colorDark: "#000000", // 二维码的颜色
                colorLight: "#ffffff", // 二维码的背景色
            });
            var base64_qrcode = qrcode_container.firstChild.toDataURL("image/png");
            console.log(base64_qrcode)
            downloadFileByBase64(rows[0].data.c+".png",base64_qrcode.split(",")[1])
        })
    })

    //修改弹窗点击关闭按钮
    $('#update-close-btn').click(function () {
        $('#update-form')[0].reset();
        $('#update-modal').modal('hide');
    })

    //修改弹窗里点击提交按钮
    $('#update-submit-btn').click(function () {
        var msg = confirm("确认要修改吗？")
        var update_C = $('#update-C').val();
        var update_D = $('#update-D').val();
        var update_E = $('#update-E').val();
        var update_zhuangtai = $('#add-zhuangtai').val();
        if(update_C==""||update_D==""||update_E==""||update_zhuangtai==""){
            alert("姓名,账号，密码，账号状态都不能为空");
        }else{
            if (msg) {
                let params = formToJson('#update-form');
                // if (checkForm('#update-form')) {
                $ajax({
                    type: 'post',
                    url: '/user/update',
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
                // }
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
            let renyuan_id = ""
            $.each(rows, function (index, row) {
                renyuan_id = row.data.renyuanId
            })

            $ajax({
                type: 'post',
                url: '/user/delete',
                data: {
                    renyuan_id: renyuan_id,
                }
            }, false, '', function (res) {
                alert(res.msg)
                if (res.code == 200) {
                    getList();
                }
            })
        }
    })

    //上传excel
    $('#upload-btn').click(function () {
        $('#file').trigger('click');

    })

    //判断文件名改变
    $('#file').change(function () {
        var url = null;
        if ($('#file').val() != '') {
            if ($('#file').val().substr(-5) == '.xlsx') {
                var excel = document.getElementById("file").files[0]
                var oFReader = new FileReader();
                oFReader.readAsDataURL(excel);
                oFReader.onloadend = function (oFRevent) {
                    url = oFRevent.target.result;
                    $ajax({
                        type: 'post',
                        url: '/user/upload',
                        data: {
                            excel: url
                        },
                    }, false, '', function (res) {
                        $('#file').val('');
                        alert(res.msg);
                        if (res.code == 200) {
                            getList();
                        }
                    })
                }
            } else {
                alert("请选择正确的Excel文件！")
                $('#file').val('');
            }
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
            // {
            //     field: 'b',
            //     title: '公司',
            //     align: 'center',
            //     sortable: true,
            //     width: 150,
            //     formatter:function(value, row , index){
            //         if(value == null || value == ''){
            //             value = '-'
            //         }
            //         return "<div title='"+value+"'; style='overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width: 100%;word-wrap:break-all;word-break:break-all;' href='javascript:edit(\""+row.id+"\",true)'>"+value+"</div>";
            //     }
            //
            // },
            {
                field: 'c',
                title: '姓名',
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
                field: 'd',
                title: '账号',
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
                field: 'e',
                title: '密码',
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
            ,{
                field: 'bumen',
                title: '部门',
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
            ,{
                field: 'zhuangtai',
                title: '账号状态',
                align: 'center',
                sortable: true,
                width: 150,
                formatter:function(value, row , index){
                    if(value == null || value == ''){
                        value = '-'
                    }
                    return "<div title='"+value+"'; style='overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width: 100%;word-wrap:break-all;word-break:break-all;' href='javascript:edit(\""+row.id+"\",true)'>"+value+"</div>";
                }
            },{
                field: 'email',
                title: '邮箱',
                align: 'center',
                sortable: true,
                width: 150,
                formatter:function(value, row , index){
                    if(value == null || value == ''){
                        value = '-'
                    }
                    return "<div title='"+value+"'; style='overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width: 100%;word-wrap:break-all;word-break:break-all;' href='javascript:edit(\""+row.id+"\",true)'>"+value+"</div>";
                }
            },{
                field: 'phone',
                title: '手机号码',
                align: 'center',
                sortable: true,
                width: 150,
                formatter:function(value, row , index){
                    if(value == null || value == ''){
                        value = '-'
                    }
                    return "<div title='"+value+"'; style='overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width: 100%;word-wrap:break-all;word-break:break-all;' href='javascript:edit(\""+row.id+"\",true)'>"+value+"</div>";
                }
            },{
                field: 'bianhao',
                title: '员工编号',
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


function dataURLtoBlob(dataurl, name) {//name:文件名
    var mime = name.substring(name.lastIndexOf('.') + 1)//后缀名
    var bstr = atob(dataurl), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type: mime});
}

function downloadFile(url, name = '默认文件名') {
    var a = document.createElement("a")//创建a标签触发点击下载
    a.setAttribute("href", url)//附上
    a.setAttribute("download", name);
    a.setAttribute("target", "_blank");
    let clickEvent = document.createEvent("MouseEvents");
    clickEvent.initEvent("click", true, true);
    a.dispatchEvent(clickEvent);
}

//主函数
function downloadFileByBase64(name, base64) {
    var myBlob = dataURLtoBlob(base64, name);
    var myUrl = URL.createObjectURL(myBlob);
    downloadFile(myUrl, name)
}

//获取后缀
function getType(file) {
    var filename = file;
    var index1 = filename.lastIndexOf(".");
    var index2 = filename.length;
    var type = filename.substring(index1 + 1, index2);
    return type;
}

//根据文件后缀 获取base64前缀不同
function getBase64Type(type) {
    switch (type) {
        case 'data:text/plain;base64':
            return 'txt';
        case 'data:application/msword;base64':
            return 'doc';
        case 'data:application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64':
            return 'docx';
        case 'data:application/vnd.ms-excel;base64':
            return 'xls';
        case 'data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64':
            return 'xlsx';
        case 'data:application/pdf;base64':
            return 'pdf';
        case 'data:application/vnd.openxmlformats-officedocument.presentationml.presentation;base64':
            return 'pptx';
        case 'data:application/vnd.ms-powerpoint;base64':
            return 'ppt';
        case 'data:image/png;base64':
            return 'png';
        case 'data:image/jpeg;base64':
            return 'jpg';
        case 'data:image/gif;base64':
            return 'gif';
        case 'data:image/svg+xml;base64':
            return 'svg';
        case 'data:image/x-icon;base64':
            return 'ico';
        case 'data:image/bmp;base64':
            return 'bmp';
    }
}

function base64ToBlob(code) {
    code = code.replace(/[\n\r]/g, '');
    const raw = window.atob(code);
    const rawLength = raw.length;
    const uInt8Array = new Uint8Array(rawLength);
    for (let i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i)
    }
    return new Blob([uInt8Array], {type: 'application/pdf'})
}