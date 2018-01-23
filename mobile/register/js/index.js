$(document).ready(function() {
    function url() {
        var url = location.search,
            params = {},
            strs_v;
        if (url.indexOf("?") != -1) {
            var str = url.substr(1);
            strs = str.split("&");
            for (var i = 0; i < strs.length; i++) {
                strs_v = strs[i].split("=");
                params[strs_v[0]] = strs_v[1];
            }
        }
        return params;
    }

    function vl() {
        var vl = url();
        $("#jr").text(decodeURI(vl.inviteName));
    }
    vl();

    function data() {
        var param = url();
        param['nickName'] = $("#nc").val();
        param['phone'] = $("#iphone").val();
        param['code'] = $("#mail").val();
        return param;
    }

    $("#yzm").on("tap", function() {
        var nc = $("#nc").val();
        var iphone = $("#iphone").val();
        if (!kong(nc)) {
            console.log(nc);
            mui.toast('昵称不能为空');
            return false;
        }
        if (!kong(iphone)) {
            mui.toast('手机号不能为空');
            return false;
        } else {
            var regrex = /^1[0-9]{10}$/;
            if (!regrex.test(iphone)) {
                mui.toast('手机号填写错误');
                return false;
            }
        }

        $.ajax({
            url: 'http://api.duzvp.com/sendMessage/sendMessageCode.action',
            type: 'POST',
            timeout: 6000,
            dataType: 'json',
            data: { phone: iphone },
            success: function(data) {
                if (data && data.code == 0) {
                    mui.alert(data.msg);
                } else {
                    var da = document.getElementById("yzm");
                    get_code_time(da);
                }
            }
        });

    });
    $(".dz-bg-btn").on("click", function() {
        var nc = $("#nc").val();
        var iphone = $("#iphone").val();
        var mail = $("#mail").val();
        if (!kong(nc)) {
            mui.toast('昵称不能为空');

            return false;
        }
        if (!kong(iphone)) {
            mui.toast('手机号不能为空');
            return false;
        } else {
            var regrex = /^1[0-9]{10}$/;
            if (!regrex.test(iphone)) {
                mui.toast('手机号填写错误');
                return false;
            }
        }
        if (!kong(mail)) {
            mui.toast('验证码不能为空');
            return false;
        }
        $.ajax({
            url: 'http://api.duzvp.com/dzuser/register.action',
            type: 'POST',
            data: data(),
            timeout: 6000,
            dataType: 'json',
            success: function(data) {
                console.log(data);
                if (data && data.code == 1) {
                    $(".dz-fix3").removeClass("hide");
                    $(".dz-fix2").removeClass("hide");
                    $(".dz-fix1").removeClass("hide");
                } else {
                    mui.alert(data.msg);
                }
            }
        });

    });
    $(".dz-fix-gb").on("tap", function() {
        $(".dz-fix").hide();
    });
    $(".dz-fix3").on("tap", function() {
        $(this).addClass("hide");
        $(".dz-fix2").addClass("hide");
        $(".dz-fix1").addClass("hide");
    });

    function kong(value) {
        return /.+/.test(value);
    }
    /*function settime(obj,countdown) {
        if (countdown == 0) {
            obj.removeAttribute("disabled");
            obj.value = "获取验证码";
        } else {
            obj.setAttribute("disabled", true);
            obj.value = "重新发送(" + countdown + ")";
            countdown--;
            setTimeout(function(){
                settime(obj,countdown--);
            }, 1000);
        } 
    }*/
    var wait = 60;
    get_code_time = function(o) {
        if (wait == 0) {
            o.removeAttribute("disabled");
            o.value = "重新获取";
            wait = 60;
        } else {
            o.setAttribute("disabled", true);
            o.value = wait + "s";
            wait--;
            setTimeout(function() {
                get_code_time(o)
            }, 1000);
        }
    }

    function goDownload() {
        var u = navigator.userAgent,
            app = navigator.appVersion;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
        var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // 是安卓浏览器      
        if (isAndroid) {
            window.location.href = 'http://xxxxxxx.cn/release/xxxx-release.apk'; // 跳安卓端下载地址     
        } // 是iOS浏览器      
        if (isIOS) {
            window.location.href = 'https://itunes.apple.com/cn/app/xxxxxxx/id1124348115?mt=8'; // 跳AppStore下载地址 
        }
        // 是微信内部webView      
        if (is_weixn()) {
            alert("请点击右上角按钮, 点击使用浏览器打开");
        } // 是PC端      
    }
});