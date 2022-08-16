function get_select_List() {
    $ajax({
        type: 'post',
        url: '/user/get_select_List',
    }, false, '', function (res) {
        if (res.code == 200) {
            console.log(res.data)
            var list = res.data
            var xiala = ""
            for(var i=0; i<list.length; i++){
                if(list[i].b != '' && list[i].b != undefined){
                    xiala = '<option value="' + list[i].b + '">' + list[i].b + '</option>'
                }
                $("#company").append(xiala);
            }
        }
    })
}


$(function () {

    get_select_List();

    $("#submit-btn").click(function () {
        if(checkForm('#login-form')){
            let params = formToJson('#login-form')
            $ajax({
                type: 'post',
                url: 'user/login',
                data: {
                    company: params.company,
                    username: params.username,
                    password: params.password
                }
            }, false, '', function (res) {
                alert(res.msg)
                if (res.code > 0) {
                    window.location.href = "html/main.html";
                }
            })
        }
    })
})