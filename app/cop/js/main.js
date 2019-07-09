$(document).ready(function(){
    var num;
    $('.nav-main>li[id]').hover(function(){
        var Obj = $(this).attr('id');
        num = Obj.substring(3, Obj.length);
        $('#box-'+num).slideDown(300);
    },function(){
        $('#box-'+num).hide();
    });
//    hidden-box hover e
    $('.hidden-box').hover(function(){
        $(this).show();
    },function(){
        $(this).slideUp(200);
    });
});

 function huiche(){
        document.getElementById("search").click(); //调用按钮事件
    }

    $(document).ready(function(){
        $(".ui-select").selectWidget({
            change       : function (changes) {
                return changes;
            },
            effect       : "slide",
            keyControl   : true,
            speed        : 188,
            scrollHeight : 250
        });
		$('#search').click(function(){
			window.location.href = '/'+ $('#from').val() + '/' + getCookie('zone-url') + '/all?search=' + encodeURI($('#keyword').val())
		});
    });


// layui框架加载初始化
layui.use('layer', function(){
  var layer = layui.layer;
});     

function login() {
layer.open({
        type: 1,
        closeBtn: 1,
        shade: [0.66],
        title:  false,
        area: ['399px', '500px'],
        content: '<div class="t-login">欢迎来到寻回网</div>'+
        '<div class="temp">'+
        '<div id="TabBox-login" class="TabBox-login">'+

        '<ul class="tabboxul">'+
        '<li>'+
        '<div class="t-login-h" style="height:130px;line-height:130px">找回密码</div>'+
        '<form name="find-form" method="post" style="width:300px;margin:0 auto;text-align:center">'+
        '<input type="button" value="使用验证邮箱找回" class="DLA" onClick="tablogin()"/>'+
        '<div style="width:100%;height:50px"></div>'+
        '<input type="button" value="使用密保问题找回" class="DLA" onClick="tablogin()"/>'+
        '<div>'+
        '<div style="width:100%;height:60px"></div>'+
        '<ul>'+
        '<li style="float: left;margin-left:10px"><a href="#findback" class="col" onclick="tablogin()">返回登录</a></li>'+
        '<li style="float: right;margin-right:10px"><a href="#regist" class="col" onclick="tabsign()">免费注册</a></li>'+
        '</ul>'+
        '</div>'+
        '</form>'+
        '</li>'+
        '</ul>'+

        '<ul class="tabboxul">'+
        '<li>'+
        '<div class="t-login-h">登 录</div>'+
        '<form name="form1" method="post" class="formtab">'+
        '<table>'+
        '<tr><td width="30"><span class="logintext"><div style="margin-left: 2px"><i class="icon">&#xe60a</i></div></span></td>'+
        '<td width="196"><div class="DSR" id="zhk">'+
        '<input type="text" id="zh" name="user" class="DLSR" placeholder=" 请输入用户名" maxlength=" 20" onBlur="cna()" required/>'+
        '</div></td></tr>'+
        '<tr><td width="30"><span class="logintext"><div style="margin-top: 2px"><i class="icon" style="font-size: 22px">&#xe608</i></div></span></td>'+
        '<td width="196" height="66"><div class="DSR" id="mk">'+
        '<input type="password" id="m" name="psd" class="DLSR" placeholder=" 请输入密码" maxlength="20" onBlur="cmm()" required/>'+
        '</div></td></tr>'+
        '</table>'+
        '<div>'+
        '<div style="width:100%;height:39px"></div>'+
        '<ul>'+
        '<li style="float: left;"><a href="#findback" class="col" onclick="tabfind()">忘记密码</a></li>'+
        '<li style="float: right;" class="next"><a href="#regist" class="col" onclick="tabsign()">免费注册</a></li>'+
        '</ul>'+
        '</div>'+
        '<div style="width:100%;height:66px"></div>'+
        '<input type="button" value="登  录" class="DLA" id="dl" onClick="signin()"/>'+
        '</form>'+
        '</li>'+
        '</ul>'+

        '<ul class="tabboxul">'+
        '<li>'+
        '<div class="t-login-h" style="height:100px;line-height:100px">注 册</div>'+
        '<form name="signform" method="post" class="formtab">'+
        '<table>'+
        '<tr><td width="30"><span class="logintext"><div style="margin-left: 2px"><i class="icon">&#xe60a</i></div></span></td>'+
        '<td width="196"><div class="DSR" id="rzh">'+
        '<input type="text" id="username" name="username" class="DLSR" placeholder=" 5-20个字符，可含字母、数字" maxlength=" 20" onBlur="checkna()" required/>'+
        '</div></td></tr>'+
        '<tr><td width="30"><span class="logintext"><div style="margin-top: 2px"><i class="icon" style="font-size: 22px">&#xe608</i></div></span></td>'+
        '<td width="196" height="60"><div class="DSR" id="rmk">'+
        '<input type="password" id="dlmm" name="psd" class="DLSR" placeholder=" 请输入5-30位的密码" maxlength="20" onBlur="checkm1()" required/>'+
        '</div></td></tr>'+
        '<tr><td width="30"><span class="logintext"><div style="margin-top: 2px"><i class="icon" style="font-size: 22px">&#xe608</i></div></span></td>'+
        '<td width="196"><div class="DSR" id="rcmk">'+
        '<input type="password" id="confirm" name="psd2" class="DLSR" placeholder=" 请再次输入密码" maxlength="20" onBlur="checkm2()" required/>'+
        '</div></td></tr>'+
        '<tr><td width="30"><span class="logintext"><div style="margin-top: 2px"><i class="icon" style="font-size: 22px">&#xe68b</i></div></span></td>'+
        '<td width="196" height="60"><div class="DSR" id="rm">'+
        '<input type="text" id="e" name="yx" class="DLSR" placeholder=" 请填写邮箱，保障您的账户安全" maxlength="20" onBlur="checkmail()" required/>'+
        '</div></td></tr>'+
        '</table>'+
        '<div style="width:100%;height:8px"></div>'+
        '<input type="button" value="立 即 注 册" class="DLA" id="zc" onClick="signin()"/>'+
        '<div onclick="tablogin()" style="width:100%;text-align:center;margin-top:18px"><a href="#login" class="col">已有账号？点此登录</a></div>'+
        '</form>'+
        '</li>'+
        '</ul>'+
        '</div></div>',

        yes: function(index, layero){
            $.ajax({
                type: 'POST',
                url: '/user/mbx',
                data: {

                },
                success: function (data) {
                    var json = JSON.parse(data);
                    if (json.status == 1) {
                        location.reload();//success
                    } else {
                        alert('fail');
                    }
                }
            });
        }
    });
}

function sign() {
    layer.open({
        type: 1,
        closeBtn: 1,
        shade: [0.66],
        title:  false,
        area: ['399px', '500px'],
        content: '<div class="t-login">欢迎来到寻回网</div>'+
        '<div class="temp">'+
        '<div id="TabBox-login" class="TabBox-login" style="transform: translate(-798px, 0px) translateZ(0px);">'+

        '<ul class="tabboxul">'+
        '<li>'+
        '<div class="t-login-h" style="height:130px;line-height:130px">找回密码</div>'+
        '<form name="findform" method="post" class="formtab">'+
        '<input type="button" value="使用验证邮箱找回" class="DLA" id="dl" onClick="tablogin()"/>'+
        '<div style="width:100%;height:50px"></div>'+
        '<input type="button" value="使用密保问题找回" class="DLA" id="dl" onClick="tablogin()"/>'+
        '<div>'+
        '<div style="width:100%;height:60px"></div>'+
        '<ul>'+
        '<li style="float: left;margin-left:10px"><a href="#findback" class="col" onclick="tablogin()">返回登录</a></li>'+
        '<li style="float: right;margin-right:10px"><a href="#regist" class="col" onclick="tabsign()">免费注册</a></li>'+
        '</ul>'+
        '</div>'+
        '</form>'+
        '</li>'+
        '</ul>'+

        '<ul class="tabboxul">'+
        '<li>'+
        '<div class="t-login-h">登 录</div>'+
        '<form name="form1" method="post" class="formtab">'+
        '<table>'+
        '<tr><td width="30"><span class="logintext"><div style="margin-left: 2px"><i class="icon">&#xe60a</i></div></span></td>'+
        '<td width="196"><div class="DSR" id="zhk">'+
        '<input type="text" id="zh" name="user" class="DLSR" placeholder=" 请输入用户名" maxlength=" 20" onBlur="cna()" required/>'+
        '</div></td></tr>'+
        '<tr><td width="30"><span class="logintext"><div style="margin-top: 2px"><i class="icon" style="font-size: 22px">&#xe608</i></div></span></td>'+
        '<td width="196" height="66"><div class="DSR" id="mk">'+
        '<input type="password" id="m" name="psd" class="DLSR" placeholder=" 请输入密码" maxlength="20" onBlur="cmm()" required/>'+
        '</div></td></tr>'+
        '</table>'+
        '<div>'+
        '<div style="width:100%;height:39px"></div>'+
        '<ul>'+
        '<li style="float: left;"><a href="#findback" class="col" onclick="tabfind()">忘记密码</a></li>'+
        '<li style="float: right;" class="next"><a href="#regist" class="col" onclick="tabsign()">免费注册</a></li>'+
        '</ul>'+
        '</div>'+
        '<div style="width:100%;height:66px"></div>'+
        '<input type="button" value="登  录" class="DLA" id="dl" onClick="signin()"/>'+
        '</form>'+
        '</li>'+
        '</ul>'+

        '<ul class="tabboxul">'+
        '<li>'+
        '<div class="t-login-h" style="height:100px;line-height:100px">注 册</div>'+
        '<form name="signform" method="post" class="formtab">'+
        '<table>'+
        '<tr><td width="30"><span class="logintext"><div style="margin-left: 2px"><i class="icon">&#xe60a</i></div></span></td>'+
        '<td width="196"><div class="DSR" id="rzh">'+
        '<input type="text" id="username" name="username" class="DLSR" placeholder=" 5-20个字符，可含字母、数字" maxlength=" 20" onBlur="checkna()" required/>'+
        '</div></td></tr>'+
        '<tr><td width="30"><span class="logintext"><div style="margin-top: 2px"><i class="icon" style="font-size: 22px">&#xe608</i></div></span></td>'+
        '<td width="196" height="60"><div class="DSR" id="rmk">'+
        '<input type="password" id="dlmm" name="psd" class="DLSR" placeholder=" 请输入5-30位的密码" maxlength="20" onBlur="checkm1()" required/>'+
        '</div></td></tr>'+
        '<tr><td width="30"><span class="logintext"><div style="margin-top: 2px"><i class="icon" style="font-size: 22px">&#xe608</i></div></span></td>'+
        '<td width="196"><div class="DSR" id="rcmk">'+
        '<input type="password" id="confirm" name="psd2" class="DLSR" placeholder=" 请再次输入密码" maxlength="20" onBlur="checkm2()" required/>'+
        '</div></td></tr>'+
        '<tr><td width="30"><span class="logintext"><div style="margin-top: 2px"><i class="icon" style="font-size: 22px">&#xe68b</i></div></span></td>'+
        '<td width="196" height="60"><div class="DSR" id="rm">'+
        '<input type="text" id="e" name="yx" class="DLSR" placeholder=" 请填写邮箱，保障您的账户安全" maxlength="20" onBlur="checkmail()" required/>'+
        '</div></td></tr>'+
        '</table>'+
        '<div style="width:100%;height:8px"></div>'+
        '<input type="button" value="立 即 注 册" class="DLA" id="zc" onClick="signin()"/>'+
        '<div onclick="tablogin()" style="width:100%;text-align:center;margin-top:18px"><a href="#login" class="col">已有账号？点此登录</a></div>'+
        '</form>'+
        '</li>'+
        '</ul>'+
        '</div></div>',

        yes: function(index, layero){
            $.ajax({
                type: 'POST',
                url: '/user/mbx',
                data: {

                },
                success: function (data) {
                    var json = JSON.parse(data);
                    if (json.status == 1) {
                        location.reload();//success
                    } else {
                        alert('fail');
                    }
                }
            });
        }
    });
}

function tabfind(){
    $('#TabBox-login').css('transform', 'translate(0px, 0px) translateZ(0px)');
}

function tabsign(){
    $('#TabBox-login').css('transform', 'translate(-798px, 0px) translateZ(0px)');
}

function tablogin(){
    $('#TabBox-login').css('transform', 'translate(-399px, 0px) translateZ(0px)');
}

//登录表单验证
    var uname=0;
    function cna(){
        lna=form1.user.value;
        var hao = document.getElementById("zh").value;
        var reg = /^[^\s'"!@#$%]+$/;
        iszh = reg.test(hao);
        var transx=$('#TabBox-login').css('transform');
        if(parseFloat(transx.substring(7).split(',')[4])==-399){
            if ( lna.length <5 || lna.length >20)
            {
                cn('账号有误噢亲，请仔细检查::>_<::');
                $('#zhk').css('border', '2px solid #FF6C6C');
                mz=0;
            }else if(!iszh) {
                cn('账号有误噢亲，请仔细检查::>_<::');
                $('#zhk').css('border', '2px solid #FF6C6C');
                mz=0;
            }else{
                $('#zhk').css('border', '1px solid #000');
                mz=1;
            }
        }
    }

    $(document).ready(function(){
        $("#zh").blur(function() {
            var transx=$('#TabBox-login').css('transform');
            if(parseFloat(transx.substring(7).split(',')[4])==-399) {
                lna = form1.user.value;
                if (lna.length > 4 && lna.length < 21) {
                    $.ajax({
                        type: 'GET',
                        url: '/register/username/',
                        data: {username: $("#zh").val()},
                        success: function (data) {
                            var json = JSON.parse(data);
                            if (json.status == 1) {
                                mz = 0;
                                cn('该账号不存在噢亲::>_<::');
                                $('#zhk').css('border', '2px solid #FF6C6C');
                            } else {
                                mz = 1;
                            }
                        }
                    });
                }
            }
        })
    });

    //验证密码 
    function cmm() {
        psd = form1.psd.value;
        var mmm = document.getElementById("m").value;
        var reg = /^[^\s'"!@#$%]+$/;
        ism = reg.test(mmm);
        var transx = $('#TabBox-login').css('transform');
        if (parseFloat(transx.substring(7).split(',')[4]) == -399) {
            if (psd.length < 5 || psd.length > 30) {
                cm('密码有误噢亲，请仔细检查::>_<::');
                $('#mk').css('border', '2px solid #FF6C6C');
                mi = 0;
            } else if (!ism) {
                cm('密码有误噢亲，请仔细检查::>_<::');
                $('#mk').css('border', '2px solid #FF6C6C');
                mi = 0;
            } else {
                mi = 1;
                $('#mk').css('border', '1px solid #000');
                if (mz && mi != 0) {

                }
            }
        }
    }

//注册表单验证
var usn=0;
var uemail=0;
var infotest=0;

//表单验证
function checkna(){
    na=signform.username.value;
    var hao = document.getElementById("username").value;
    var reg = /^[^\s'"!@#$%]+$/;
    iszh = reg.test(hao);
    psd1=signform.psd.value;
    if ( na.length <5 || na.length >20)
    {
        jc('请输入5-20位字符噢亲::>_<::');
        $('#rzh').css('border', '2px solid #FF6C6C');
        smz=0;
    }else if(!iszh) {
        jc('不能包含空格及特殊字符::>_<::');
        $('#rzh').css('border', '2px solid #FF6C6C');
        smz=0;
    }
    else{
        if (psd1 == na) {
            jc('密码不能与账号相同::>_<::');
            mi=0;
        }
        smz=1;
        $('#rzh').css('border', '1px solid #000');
        if (smz && mi && qr && youx !== 0) {
            $('#zc').attr("disabled", false);
        }
    }
}

$(document).ready(function(){
    $("#username").blur(function() {
        $.ajax({
            type: 'GET',
            url: '/register/username/',
            data: {
                username: $("#username").val()
            },
            success: function(data) {
                var json = JSON.parse(data);
                if (json.status == 1) {
                    //当前用户名可注册
                } else {
                    jc('被注册了噢亲，换个用户名吧::>_<::');
                    $('#username').css('border', '2px solid #FF6C6C');
                }
            }
        });
    })
});

//验证密码 
function checkm1(){
    psd1=signform.psd.value;
    var flagZM=false ;
    var flagSZ=false ;
    var flagQT=false ;
    var mmm = document.getElementById("dlmm").value;
    var reg = /^[^\s'"!@#$%]+$/;
    ism = reg.test(mmm);
    if(psd1.length<5 || psd1.length>30){
        jcm('请输入5-30位密码噢亲::>_<::');
        $('#rmk').css('border', '2px solid #FF6C6C');
        mi=0;
    }else if(!ism) {
        jcm('密码不能包含空格及特殊字符::>_<::');
        $('#rmk').css('border', '2px solid #FF6C6C');
        smz=0;
    }else{
        mi=1;
        $('#rmk').css('border', '1px solid #000');
        if (psd1 == na) {
            jcm('密码不能与账号相同::>_<::');
            $('#rmk').css('border', '2px solid #FF6C6C');
            mi=0;
        }
        if (smz && mi && qr && youx !== 0) {
            $('#rmk').css('border', '1px solid #FFF');
        }
        if(signform.psd.value!=signform.psd2.value) {
            jcc('密码不一致::>_<::');
            $('#rcmk').css('border', '2px solid #FF6C6C');
            qr=0;
        }else{
            qr=1;
            $('#rmk').css('border', '1px solid #000');
            $('#rcmk').css('border', '1px solid #000');
        }
    }

}
//验证确认密码 
function checkm2(){
    if(signform.psd.value!=signform.psd2.value) {
        jcc('密码不一致::>_<::');
        $('#rcmk').css('border', '2px solid #FF6C6C');
        qr=0;
    } else {
        qr=1;
        $('#rcmk').css('border', '1px solid #000');
    }
}

//验证邮箱
function checkmail() {
    var email = document.getElementById("e").value;
    var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
    ismail = reg.test(email);
    if (!ismail) {
        jce('邮箱格式有误,请仔细检查::>_<::');
        $('#rm').css('border', '2px solid #FF6C6C');
        youx=0;
    }else {
        youx=1;
        $('#rm').css('border', '1px solid #000');

    }
}

$(document).ready(function(){
    $("#e").blur(function() {
        $.ajax({
            type: 'GET',
            url: '/register/echeck/',
            data: {email: $("#e").val()},
            success: function(data) {
                var json = JSON.parse(data);
                if (json.status == 1) {
                    //当前邮箱可注册
                } else {
                    jce('被注册了噢亲，换个邮箱吧::>_<::');
                    $('#rm').css('border', '2px solid #FF6C6C');
                }
            }
        });
    })
});

function jc($info) {
    layer.tips($info, '#username', {
        tips: [2, '#3e61f2'],
        time: 6000,
        tipsMore: true
    });
}

function jcm($info) {
    layer.tips($info, '#dlmm', {
        tips: [2, '#3e61f2'],
        time: 6000,
        tipsMore: true
    });
}

function jcc($info) {
    layer.tips($info, '#confirm', {
        tips: [2, '#3e61f2'],
        time: 6000,
        tipsMore: true
    });
}

function jce($info) {
    layer.tips($info, '#e', {
        tips: [2, '#3e61f2'],
        time: 6000,
        tipsMore: true
    });
}

//点击注册后的处理函数,采用多重验证确保高安全性
function zhuce() {
    checkna();
    checkm1();
    checkm2();
    checkmail();
    if (smz && mi && qr && youx !== 0) {
        $.ajax({
            type: 'GET',
            url: '/register/username/',
            data: {
                username: $("#username").val()
            },
            success: function (data) {
                var json = JSON.parse(data);
                if (json.status == 1) {
                    usn = 1;//当前用户名可注册
                } else {
                    infotest=1;
                    usn = 0;
                    jc('被注册了噢亲，换个用户名吧::>_<::');
                    $('#username').css('border', '2px solid #FF6C6C');
                }
            }
        });
        $.ajax({
            type: 'GET',
            url: '/register/echeck/',
            data: {email: $("#e").val()},
            success: function (data) {
                var json = JSON.parse(data);
                if (json.status == 1) {
                    uemail = 1;//当前邮箱可注册
                } else {
                    infotest=1;
                    uemail = 0;
                    jce('被注册了噢亲，换个邮箱吧::>_<::');
                    $('#e').css('border', '2px solid #FF6C6C');
                }
            }
        });
        var index = layer.load(2, {
            time: 1*1999,
            shade: [0.1,'#000']
        });
        setTimeout(zcpost,1999);//为AJAX预留充分时间，确保大多数情况下在接来下的函数执行前请求完成
    }
}

function zcpost() {
    if (usn && uemail !== 0) {
        var username = /^[^\s'"!@#$%]+$/;
        var dlmm = /^[^\s'"!@#$%]+$/;
        var email = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;

        if (username.test($("#username").val()) && dlmm.test($("#dlmm").val()) && email.test($("#e").val())) {
            $.ajax({
                type: 'POST',
                url: '/register/reg',
                data: {
                    username: $("#username").val(),
                    yx: $("#e").val(),
                    psd: $("#dlmm").val()
                },
                success: function (data) {
                    var json = JSON.parse(data);
                    if (json.status == 1) {
                        zcok();//success
                    } else {
                        zcfail();
                    }
                }
            });
        } else {
            zcerror();//您所填写的信息格式有误，请仔细检查后再次提交
        }
    }
    else if(infotest ==1)
    {

    }
    else{
        zcout();
    }
}

function zcok() {
    layer.open({
        type: 1,
        closeBtn: 0,
        shift: 0,
        skin: 'demo-class',
        shade: [0.7],
        btn: '知道了',
        title:  ['恭喜您！注册成功', 'font-size:18px;margin:0 auto;padding: 0;'],
        area: ['600px', '199px'],
        content: '<div style="padding-top: 36px">一封验证激活邮件已发至您所填写的邮箱，请您尽快在<span style="color: red">24</span>小时有效期内查收</div>'+
        '<div style="font-size: 12px">您所注册的账号在激活后便可正常使用，激活成功后您即可享受寻回网提供的所有服务</div>'+
        '<div style="font-size: 12px">若您未收到验证邮件，请检查所填邮箱是否准确，或查看其是否在垃圾邮件内</div>',
        // yes: function(index, layero){
        //     layer.close(index); //如果设定了yes回调，需进行手工关闭
        // }
    });
}

function zcerror() {
    layer.open({
        type: 1,
        closeBtn: 0,
        shift: 0,
        skin: 'demo-class',
        shade: [0.7],
        btn: '确定',
        title:  ['提交信息', 'font-size:18px;margin:0 auto;padding: 0;'],
        area: ['500px', '160px'],
        content: '<div style="font-size: 15px;padding-top: 36px">抱歉，您所填写的信息格式有误，请您仔细检查注册信息后再次提交</div>',
    });
}

function zcfail() {
    layer.open({
        type: 1,
        closeBtn: 0,
        shift: 0,
        skin: 'demo-class',
        shade: [0.7],
        btn: '确定',
        title:  ['提交信息', 'font-size:18px;margin:0 auto;padding: 0;'],
        area: ['500px', '160px'],
        content: '<div style="font-size: 15px;padding-top: 36px">抱歉，出错了，服务器或许出现了一些问题，请您稍后再试</div>',
    });
}

function zcout() {
    layer.open({
        type: 1,
        closeBtn: 0,
        shift: 0,
        skin: 'demo-class',
        shade: [0.7],
        btn: '确定',
        title: ['提交信息', 'font-size:18px;margin:0 auto;padding: 0;'],
        area: ['500px', '160px'],
        content: '<div style="font-size: 15px;padding-top: 36px">抱歉，可能网络问题导致请求超时，请重试</div>',
    });
}

function spost() {
    layer.open({
        type: 1,
        closeBtn: 1,
        shade: [0.66],
        title:  false,
        area: ['560px', ''],
        content: '<div class="t-login">发 布 失 物 招 领</div>'+
        '<form class="BD" id="shiwupost"><table class="P">'+
        '<tr><td width="36px"><div class="tpsvg" style="margin-top: 2px"><i class="icon" style="font-size: 17px">&#xe605</i></div>失物类型：<select name="LX" value=""><option>手机数码</option><option>卡证钱包</option><option>饰品衣物</option><option>宠物</option><option>其他</option></select>'+
        '</td>'+
        '</tr>'+
        '<tr><td><div class="tpsvg"><i class="icon">&#xe602</i></div>当前区域：<input class="SCITY" id="scitySelect" value="南宁市" readonly="readonly" name="zone"></td></tr>'+
        '<tr><td><div class="msdiv"><textarea name="info" id="test" class="ms" placeholder="在此填写描述后，即可添加图片"></textarea></div></td></tr>'+
        '</table>'+
        '<div class="TP"><div id="fileList" style="font-size: 13px; width:100%"></div></div>'+
        '<div style="text-align: center;padding-bottom: 10px"><input type="button" value="确认发布" disabled="disabled" class="FB" id="tj"></div>'+
        '</form>',
    });
    var test=new Vcity.CitySelector({input:'scitySelect'});
    //字数统计模块
    (function($) {
        $.fn.limitTextarea = function(opts) {
            var defaults = {
                maxNumber: 160, //允许输入的最大字数
                position: 'top', //提示文字的位置，top：文本框上方，bottom：文本框下方
                onOk: function() {}, //输入后，字数未超出时调用的函数
                onOver: function() {} //输入后，字数超出时调用的函数

            }
            var option = $.extend(defaults, opts);
            this.each(function() {
                var _this = $(this);
                var info = '<div id="info" style="float: left;clear: both;">还可输入<b style="color:blue;">' + (option.maxNumber - _this.val().length) + '</b>字</div>'
                    +'<button type="button" id="Button1" class="file" disabled="disabled"><div style="margin-top: 1px;float: left"><i class="icon" style="font-size: 17px">&#xe601</i></div><div class="tpsvg">添加图片</div></button>';
                var fn = function() {
                    var $info = $('#info');
                    //接下来处理输入的内容是文字还是字母的函数，判断字符数
                    var extraNumber = Math.ceil(getLength($(this).val())/2);
                    function getLength(str){
                        return String(str).replace(/[^\x00-\xff]/g,'aa').length;
                    };

                    if (extraNumber <= 160 && extraNumber > 0) {
                        $info.html('还可输入<b style="color:blue;">' + (160-extraNumber) + '</b>字');
                        $('#tj').attr("disabled",false);
                        $('#Button1').attr("disabled",false);
                        $("#tj").hover(function(){
                            $("#tj").css("border-radius","50px");
                            $("#tj").css("width","166px");
                        },function(){
                            $("#tj").css("border-radius","6px");
                            $("#tj").css("width","116px");
                        });
                        option.onOk();
                    } else if(extraNumber == 0){
                        $('#tj').attr("disabled","disabled");
                        $('#Button1').attr("disabled","disabled");
                        option.onOver();
                    }else{
                        $info.html('已经超出<b style="color:red;">' + (extraNumber-160) + '</b>字');
                        $('#tj').attr("disabled","disabled");
                        $('#Button1').attr("disabled","disabled");
                        option.onOver();
                    }

                };

                switch (option.position) {
                    case 'top':
                        _this.before(info);
                        break;
                    case 'bottom':
                    default:
                        _this.after(info);
                }

                //绑定输入事件监听器
                if (window.addEventListener) { //先执行W3C
                    _this.get(0).addEventListener("input", fn, false);
                } else {
                    _this.get(0).addEventListener("onpropertychange", fn);
                }
                if (window.VBArray && window.addEventListener) { //IE9
                    _this.get(0).addEventListener("onkeydown", function() {
                        var key = window.event.keyCode;
                        (key == 8 || key == 46) && fn(); //处理回退与删除
                    });
                    _this.get(0).addEventListener("oncut", fn); //处理粘贴
                }
            });
        }
    })(jQuery)

//插件调用；
    $(function() {
        $('#test').limitTextarea({
            maxNumber: 160, //最大字数
            position: 'bottom', //提示文字的位置，top：文本框上方，bottom：文本框下方
            onOk: function() {
                $('#test').css('background-color', 'white');
                $('#tj').css('background-color', '#f2273e');
                $('#tj').css('cursor', 'pointer');
            }, /*输入后，字数未超出时调用的函数*/
            onOver: function() {
                $('#test').css('background-color', 'white');
                $('#tj').css('background-color', 'lightpink');
                $('#tj').css('cursor', 'default');
            } //输入后，字数超出时调用的函数，这里把文本区域的背景变为粉红色
        });
    });
//添加图片模块
    $(function() {
        var btn, settings, upload;
        settings = {
            url: "/shiwu/sc", //指定的服务器接收文件的后台程序
            fileSuffixs: ["jpg", "jpeg", "png", "bmp"],
            maximumFilesUpload: 6, //最大文件上传数
            onComplete: function(msg) {
                //这里暂时不需要了php端处理
                // //获得返回值列表
                // var idList = JSON.parse(msg)['response'];
                // //先检测是否存在idlist不存在则创建
                // if (this.idList) {
                //     this.idList = [];
                // } else {
                //     //将获得的idlist合并到之前的内容中
                //     this.idList = this.idList.concat(idList);
                // }
                $("#testdiv").append(msg + "<br/>");
            },
            onAllComplete: function() {
                scok(); //alert("图片上传完成");
            },
            isGetFileSize: true, //是否获取上传文件大小，设置此项为true时，将在onChosen回调中返回文件fileSize和获取大小时的错误提示文本errorText
            onChosen: function(file, obj, fileSize, errorText) {
                if (fileSize >= 5120) {
                    alert("抱歉，您上传的图片过大，超过了5MB"); //$("#file_size").text(file + "文件大小为：" + fileSize + "KB");
                    return false;
                } else {
                    //$("#file_size").text(file + "文件大小为：" + fileSize + "KB"); //alert(errorText);
                }
                return true; //返回false将取消当前选择的文件
            },
            perviewElementId: "fileList", //设置预览图片的元素id
            perviewImgStyle: { width: '75px', height: '75px', border: '1px solid #09C' } //设置预览图片的样式
        };
        var firstClickHack = function() {
            var params = $("#shiwupost").serialize();
            //var self = $(this);
            $.ajax({
                url: "/shiwu/newdraft",
                type: "post",
                dataType: "json",
                data: params,
                success: function(data) {
                    var json = JSON.parse(data);
                    if (json.status) {
                        //TODO: 添加一个新的draft
                        //可能需要一个回调来处理
                    }
                }
            });
        };
        btn = $("#Button1").one('click', firstClickHack);
        btn = $("#Button1").uploadFile(settings);
        upload = btn.data("uploadFileData");

        $("#tj").click(function() {

            var params = $("#shiwupost").serialize();
            params += '&draft=1';
            $.ajax({
                url: "/shiwu/updatepost",
                type: "post",
                dataType: "json",
                data: params,
                success: function(data) {
                    var json = JSON.parse(data);
                    if (json.status) {
                        //添加一个长度值的判断，如果选择的文件大小为0则提示结束访问
                        if (upload.choseFilePath.length === 0) {
                            scok();
                        } else {
                            upload.submitUpload();
                        }
                    } else {
                        alert("发布失败，请重试");
                    }
                }
            });
        });
    });

    function scok() {
        layer.open({
            type: 1,
            closeBtn: 0,
            shift: 0,
            skin: 'demo-class',
            shade: [0.7],
            title: ['提交信息', 'font-size:18px;padding-left:116px'],
            area: ['300px', '139px'],
            btn: ['确定'],
            content: '<div style="color: #ff006f;margin: 19px 0 0 32px">恭喜，您已发布成功！请静候佳音</div>',
            yes: function(index, layero) {
                layer.close(index); //如果设定了yes回调，需进行手工关闭
                var cityurl = 'guilin';
                window.location.href = 'http://www.xunhuiwang.cn/shiwu/' + cityurl + '/all';
            }
        });
    }

    function getCookie(name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return unescape(arr[2]);
        else
            return null;
    }

    /*无刷新异步上传插件 */

    (function($) {
        var defaultSettings = {
            url: "", //上传地址
            buttonFeature: true, //true:点击按钮时仅选择文件； false:选择完文件后立即上传
            fileSuffixs: ["jpg", "jpeg", "png", "bmp"], //允许上传的文件后缀名列表
            errorText: "不能上传后缀为 {0} 的文件！", //错误提示文本，其中{0}将会被上传文件的后缀名替换
            onCheckUpload: function(text) { //上传时检查文件后缀名不包含在fileSuffixs属性中时触发的回调函数，(text为错误提示文本)
                alert(text);
            },
            onComplete: function(msg) { //上传完成后的回调函数[不管成功或失败，它都将被触发](msg为服务端的返回字符串)
            },
            onAllComplete: function() {}, //全部文件上传完成触发的事件

            onChosen: function(file, obj, fileSize, errorText) { //选择文件后的回调函数，(file为选中文件的本地路径;obj为当前的上传控件实例;fileSize为当前文件的大小,errorText为获取文件大小时的错误提示文本)
                //alert(file);
                return true; //在此回调中返回false将取消当前选择的文件
            },
            maximumFilesUpload: 6, //最大文件选择数(当此属性大于1时，buttonFeature属性只能为true)
            submitFilesNum: 6, //最大提交上传数（当触发submitUpload方法时，文件上传的个数）
            onSubmitHandle: function(uploadFileNumber) { //提交上传时的回调函数，uploadFileNumber为当前上传的文件数量
                //在此回调中返回false上传提交将被阻止
                return true;
            },
            onSameFilesHandle: function(file) { //当重复选择相同的文件时触发
                //在此回调中返回false当前选择的文件将从上传队列中取消
                return true;
            },
            isGetFileSize: false, //是否获取文件大小，默认为false
            isSaveErrorFile: true, //是否保存上传失败的文件，默认true
            perviewElementId: "", //用于预览的元素id（请传入一个div元素的id）
            perviewImgStyle: null //用于设置图片预览时的样式（可不设置，在不设置的情况下多文件上传时只能显示一张图片），如{ width: '100px', height: '100px', border: '1px solid #ebebeb' }
        };

        $.fn.uploadFile = function(settings) {

            settings = $.extend({}, defaultSettings, settings || {});

            if (settings.perviewElementId) {
                //设置图片预览元素的必须样式
                if (!settings.perviewImgStyle) {
                    var perviewImg = document.getElementById(settings.perviewElementId);
                    perviewImg.style.overflow = "hidden";
                }
            }

            return this.each(function() {
                var self = $(this);

                var upload = new UploadAssist(settings);

                upload.createIframe(this);

                //绑定当前按钮点击事件
                self.bind("click", function(e) {
                    upload.chooseFile();
                });

                //将上传辅助类的实例，存放到当前对象中，方便外部获取
                self.data("uploadFileData", upload);
            });
        };
    })(jQuery);

//上传辅助类
    function UploadAssist(settings) {
        //保存设置
        this.settings = settings;
        //已选择文件的路径集合
        this.choseFilePath = [];
        //上传错误文件集合
        this.uploadError = [];
        //创建的iframe唯一名称
        this.iframeName = "upload" + this.getTimestamp();
        //提交状态
        this.submitStatus = true;
        //已经上传的文件数
        this.uploadFilesNum = 0;
        //上传完成计数
        this.uploadNum = 0;
        //针对IE上传获取文件大小时的错误提示文本
        this.errorText = "请设置浏览器一些参数后再上传文件，方法如下（设置一次即可）：\n请依次点击浏览器菜单中的\n'工具->Internet选项->安全->可信站点->自定义级别'\n在弹出的自定义级别窗口中找到 'ActiveX控件和插件' 项，" +
            "将下面的子项全部选为 '启用' 后，点击确定。\n此时不要关闭当前窗口，再点击 '站点' 按钮，在弹出的窗口中将下面复选框的 '√' 去掉，然后点击 '添加' 按钮并关闭当前窗口。\n最后一路 '确定' 完成并刷新当前页面。";
        return this;
    }

    UploadAssist.prototype = {
        //辅助类构造器
        constructor: UploadAssist,

        //创建iframe
        createIframe: function( /*插件中指定的dom对象*/ elem) {

            var html = "<html>" + "<head>" + "<title>upload</title>" + "<script>" + "function getDCMT(iframeName){return window.frames[iframeName].document;}" + "</" + "script>" + "</head>" + "<body>" + "</body>" + "</html>";

            this.iframe = $("<iframe name='" + this.iframeName + "'></iframe>")[0];
            this.iframe.style.width = "0px";
            this.iframe.style.height = "0px";
            this.iframe.style.border = "0px solid #fff";
            this.iframe.style.margin = "0px";
            elem.parentNode.insertBefore(this.iframe, elem);
            var iframeDocument = this.getIframeContentDocument();
            iframeDocument.write(html);
        },

        //获取时间戳
        getTimestamp: function() {
            return (new Date()).valueOf();
        },

        //创建上传控件到创建的iframe中
        createInputFile: function() {
            var that = this;
            var dcmt = this.getIframeContentDocument();
            var input = dcmt.createElement("input");
            var randomNum = this.getTimestamp();
            input.type = "file";
            $(input).attr("name", "input" + randomNum);
            $(input).attr("id", input.name);

            input.onchange = function() {

                if (that.checkFileIsExist(this.value)) {
                    var status = that.settings.onSameFilesHandle(this.value);
                    alert("您好，该图片已被选择上传");
                    if (typeof status === "boolean" && !status) {
                        that.removeFile(this.name);
                        return;
                    }
                    return false;
                }

                //保存已经选择的文件路径
                that.choseFilePath.push({ "name": this.name, "value": this.value });

                var fileSuf = this.value.substring(this.value.lastIndexOf(".") + 1);

                //检查是否为允许上传的文件
                if (!that.checkFileIsUpload(fileSuf, that.settings.fileSuffixs)) {
                    that.removeFile(this.name);
                    that.settings.onCheckUpload(that.settings.errorText.replace("{0}", fileSuf));
                    return;
                }

                var fileSize;
                var errorTxt = null;
                //是否获取上传文件大小
                if (that.settings.isGetFileSize) {
                    fileSize = perviewImage.getFileSize(this, dcmt);
                    if (fileSize == "error") {
                        fileSize = 0;
                        errorTxt = that.errorText;
                    }
                }

                //选中后的回调
                var chosenStatus = that.settings.onChosen(this.value, this, fileSize, errorTxt);
                if (typeof chosenStatus === "boolean" && !chosenStatus) {
                    that.removeFile(this.name);
                    return;
                }



                //是否开启了图片预览
                if (that.settings.perviewElementId) {
                    if (!that.settings.perviewImgStyle) {
                        perviewImage.beginPerview(this, that.settings.perviewElementId, dcmt, fileSuf);
                    } else {
                        var ul = perviewImage.getPerviewRegion(that.settings.perviewElementId);
                        var main = perviewImage.createPreviewElement(this.name, this.value, that.settings.perviewImgStyle);
                        var li = document.createElement("li");
                        if ($.browser.msie) {
                            li.style.styleFloat = "left";
                        } else {
                            li.style.cssFloat = "left";
                        }

                        li.style.margin = "1px";
                        li.appendChild(main);
                        ul.appendChild(li);
                        var div = $(main).children("div").get(0);
                        $(main).find("img[name]").hover(function() {
                            this.src = perviewImage.closeImg.after;
                        }, function() {
                            this.src = perviewImage.closeImg.before;
                        }).click(function() {
                            that.removeFile($(this).attr("name"));
                            $(this).parents("li").fadeOut(200, function() {
                                $(this).remove();
                            });
                        });

                        perviewImage.beginPerview(this, div, dcmt, fileSuf);
                    }
                }

                if (!that.settings.buttonFeature) {
                    that.submitUpload();
                }
            };

            var formName = "form" + randomNum;
            var form = $('<form method="post" target="iframe' + randomNum + '" enctype="multipart/form-data" action="' + that.settings.url + '" name="' + formName + '"></form>');
            form.append(input);

            $(dcmt.body).append($("<div></div>").append(form)
                .append($("<iframe name='iframe" + randomNum + "'></iframe>").on("load", function() {
                    var dcmt1 = that.getInsideIframeContentDocument(this.name);
                    if (dcmt1.body.innerHTML) {
                        //开始上传下一个文件
                        that.insideOperation();
                        that.uploadNum++;

                        //注意：上传失败的响应文本默认为"error"
                        var responseText = $(dcmt1.body).text();

                        if (responseText == "error" && that.settings.isSaveErrorFile) {
                            //保存上传失败的文件
                            that.uploadError.push(this.name.replace("iframe", "input"));
                        }

                        var obj = that.getObjectByName(this.name.replace("iframe", "input"));
                        if (obj) {
                            //是否开启了预览
                            if (that.settings.perviewElementId) {
                                var closeImg = $("#" + that.settings.perviewElementId).find("img[name='" + obj.name + "']");
                                closeImg.next().hide();
                                if (responseText !== "error") {
                                    //对于上传成功的文件，将它从预览中删除
                                    closeImg.parents("li").fadeOut("slow", function() {
                                        $(this).remove();
                                    });
                                } else {
                                    //上传失败的文件，加亮显示
                                    closeImg.css("visibility", "visible").parents("li").css({
                                        "border": "1px solid #ff9999",
                                        "background-color": "#ffdddd"
                                    });
                                }
                            }
                        }

                        if (that.settings.onComplete) {
                            that.settings.onComplete(dcmt1.body.innerHTML);
                        }

                        if (that.uploadNum == that.uploadFilesNum) {
                            that.submitStatus = true;
                            that.clearUploadQueue();
                            that.uploadFilesNum = 0;
                            that.uploadNum = 0;
                            that.settings.onAllComplete();
                        }

                        dcmt1.body.innerHTML = "";
                    }
                })));
            return input;
        },

        //获取创建的iframe中的document对象
        getIframeContentDocument: function() {
            return this.iframe.contentDocument || this.iframe.contentWindow.document;
        },

        //获取创建的iframe所在的window对象
        getIframeWindow: function() {
            return this.iframe.contentWindow || this.iframe.contentDocument.parentWindow;
        },

        //获取创建的iframe内部iframe的document对象
        getInsideIframeContentDocument: function(iframeName) {
            return this.getIframeWindow().getDCMT(iframeName);
        },

        //获取上传input控件
        getUploadInput: function() {
            var inputs = this.getIframeContentDocument().getElementsByTagName("input");
            var len = inputs.length;

            if (len > 0) {
                if (!inputs[len - 1].value) {
                    return inputs[len - 1];
                } else {
                    return this.createInputFile();
                }
            }
            return this.createInputFile();
        },

        //forEach迭代函数
        forEach: function( /*数组*/ arr, /*代理函数*/ fn) {
            var len = arr.length;
            for (var i = 0; i < len; i++) {
                var tmp = arr[i];
                if (fn.call(tmp, i, tmp) == false) {
                    break;
                }
            }
        },

        //提交上传
        submitUpload: function() {
            var status = this.settings.onSubmitHandle(this.choseFilePath.length);
            if (typeof status === "boolean") {
                if (!status) {
                    return;
                }
            }
            this.clearedNotChooseFile();

            var sbmtNum = this.settings.submitFilesNum;
            var len = this.choseFilePath.length;
            var dcmt = this.getIframeContentDocument();
            var that = this;

            if (!len) return;
            if (!this.submitStatus) return;
            this.filesNum = len;

            //设置有效上传数量，有可能选择的文件小于设置的提交数量
            var advisableSubmitNum = sbmtNum < len ? sbmtNum : len;

            this.uploadFilesNum = advisableSubmitNum;

            this.submitStatus = false;
            for (var i = 0; i < advisableSubmitNum; i++) {
                (function(n) {
                    var time = (n + 1) * 500;
                    window.setTimeout(function() {
                        var obj = that.choseFilePath[n];
                        var formName = obj.name.replace("input", "form");
                        that.forEach(dcmt.forms, function() {
                            if (this.name == formName) {
                                this.submit();
                                return false;
                            }
                        });
                        if (that.settings.perviewElementId) {
                            //用于设置上传loading图片显示
                            var imgclose = $("#" + that.settings.perviewElementId).find("img[name='" + obj.name + "']");
                            imgclose.next().show();
                            imgclose.css("visibility", "hidden");
                        }
                    }, time);
                })(i);
            }
        },
        //内部提交操作，外部不能调用
        insideOperation: function() {
            var len = this.choseFilePath.length;
            var dcmt = this.getIframeContentDocument();
            var that = this;

            if (!len) return;
            var obj = this.choseFilePath[this.uploadFilesNum];

            if (obj && obj.name) {
                this.uploadFilesNum++;
                (function(o) {
                    window.setTimeout(function() {
                        var formName = o.name.replace("input", "form");

                        that.forEach(dcmt.forms, function(i) {
                            if (this.name == formName) {
                                this.submit();
                                return false;
                            }
                        });

                        if (that.settings.perviewElementId) {
                            //用于设置上传loading图片显示
                            var imgclose = $("#" + that.settings.perviewElementId).find("img[name='" + o.name + "']");
                            imgclose.next().show();
                            imgclose.css("visibility", "hidden");
                        }
                    }, 300);
                })(obj);
            }
        },
        //检查文件是否可以上传
        checkFileIsUpload: function(fileSuf, suffixs) {

            var status = false;
            this.forEach(suffixs, function(i, n) {
                if (fileSuf.toLowerCase() === n.toLowerCase()) {
                    status = true;
                    return false;
                }
            });
            return status;
        },

        //检查上传的文件是否已经存在上传队列中
        checkFileIsExist: function( /*当前上传的文件*/ file) {

            var status = false;
            this.forEach(this.choseFilePath, function(i, n) {
                if (n.value == file) {
                    status = true;
                    return false;
                }
            });
            return status;
        },

        //清除未选择文件的上传控件
        clearedNotChooseFile: function() {
            var files = this.getIframeContentDocument().getElementsByTagName("input");

            this.forEach(files, function(i, n) {
                if (!n.value) {
                    var div = n.parentNode.parentNode;
                    div.parentNode.removeChild(div);
                    return false;
                }
            });
        },

        //将指定上传的文件从上传队列中删除
        removeFile: function(name) {
            var that = this;
            var files = this.getIframeContentDocument().getElementsByTagName("input");
            this.forEach(this.choseFilePath, function(i, n) {
                if (n.name == name) {
                    that.forEach(files, function(j, m) {
                        if (m.name == n.name) {
                            var div = m.parentNode.parentNode;
                            div.parentNode.removeChild(div);
                            return false;
                        }
                    });
                    that.choseFilePath.splice(i, 1);
                    return false;
                }
            });
        },
        //获取选择的上传文件对象
        getObjectByName: function(name) {
            var obj, that = this;
            this.forEach(this.choseFilePath, function(i) {
                if (this.name === name) {
                    obj = that.choseFilePath[i];
                    return false;
                }
            });
            return obj;
        },
        //清空上传队列
        clearUploadQueue: function() {
            var len = this.uploadError.length;
            var that = this;
            if (!len) {
                this.choseFilePath.length = 0;
                this.getIframeContentDocument().body.innerHTML = "";
            } else {
                var errorFiles = this.uploadError.join();
                var newArr = this.choseFilePath.slice(0);
                this.forEach(newArr, function() {
                    if (errorFiles.indexOf(this.name) == -1) {
                        that.removeFile(this.name);
                    }
                });
            }
            this.uploadError.length = 0;
        },

        //选择上传文件
        chooseFile: function() {
            var uploadfile;
            if (!this.choseFilePath.length && this.settings.perviewElementId) {
                $("#" + this.settings.perviewElementId).find("ul").empty();
            }
            if (this.choseFilePath.length == this.settings.maximumFilesUpload) {
                if (this.settings.maximumFilesUpload <= 1) {
                    this.choseFilePath.length = 0;
                    var files = this.getIframeContentDocument().getElementsByTagName("input");
                    if (!files.length) {
                        uploadfile = this.getUploadInput();
                        $(uploadfile).click();
                        return;
                    } else {
                        uploadfile = files[0];
                        $(uploadfile).click();
                        return;
                    }
                } else {

                    return (alert('您添加图片数量已达上限'));
                }
            }
            uploadfile = this.getUploadInput();
            $(uploadfile).click();
        }
    };

//图片预览操作
    var perviewImage = {
        timers: [],
        closeImg: {
            before: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAYAAABPYyMiAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAALEgAACxIB0t1+/AAAAAl2cEFnAAAAEAAAABAAXMatwwAAAkdJREFUSMetlU9IVFEUxu88m7GCN45GMmOE78EEhX8qxO1UYuRiWuhg2UoIFFqIEOEf5rUp3QuOuBFnSlJH0GlRUCmiQxSB1qKcxaALF6K5KFFDlEIX3/eQ97hTw9DZ/GbunPN9517uuSPEX8N1CAbPgRPjYGoSXKmwMjXBvGHWqdT5ncnhhHzZuwcaNL5CoTc06l8C12tY4AB8CngtAHadB+uKwJ4tcMOToR+fE0yUgdFRUCsVOYV2iTqvqKtzg39siU4edeQBC0ZAtS83Y3uoA9R9SZ9G+h4wIfgUTE6DerdVwPEeLHCByim5kVIJFnLHyiPr73oPfebo+5A/xN+BxqRc2D0ExjxgSJPnhdbA0ZNs5K48z5ilLy+1WEqCgScZzvA00PAYXMgD633kFrhYxUbaWHdZLhfooy83LpY3Qf+myCrqeevTPPL0Ihv0Z1fv36bvd/sY5mUn4Gjih1ayATgszq7+ePw5t/ufwZLnGQouAqE4GP4FdlKog5c0nGY/M6xzy+VKxuj7kQtxChvz8gIPj3wkzEZ25XkhTkmM8+5+Ic8zvtJ3kAvBFjD5CdQj1gLlDBu5x+8X5MLmeBawYXN8zdBj9OGJB/keCCd3FLkBRlOgmhD/JdTX1OWYRvikO3/YEr1cSPAoozug1iRyCu0+GOPlnuIT7F0zMxzyQi8vU9gDXr0Nvl0F53iE6/1WHV87eL0avMU/sy+8C728vBsV/2jADNdP8OYHsJkvYjkF8set+ft3wG8L4LNmcLoWPDhrdzgC7aGKMEP0Q1UAAAAASUVORK5CYII=",
            after: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAB3RJTUUH1wwbFhkQHxvdFgAAArpJREFUeNplz1to1QUAx/HP/3/O2c7OrudsR8vmamOL2hw5LaQHgxKCLvQSRVgPFhJKo4cyMsmxKNQgfOuhfKxICQTpocvAIFhai/WSTNIcnK3pbu12tnO2cwsfbZ+H3+MXfgGbfURDgn0xHgiIFskUuPgOE/7njsBxahsYqAnDN1p3765N9/QIYzGL4+Myw8PlbC53fp23j5HZFBhgSxPft27f3tfX36+ure2O+sbKiitnzrg2MjK/xjNH+RUCeJbo41xsSyb3PtR/WLQuLhIGVAJKlEsUSyUBrp8966+xsdkl+o7zTwiP8mqSvffu6ZMLs+565YAVWRvL1xSWrpufvmHr/v3y1dVu30pHIuk4pxCEiCQ4nIyEYk15heakmm3bdR06Zrq0LjM3ruPNI+o7O8V7uy1NTkjV10vw4ns0Rw6Q7uCTdLwS1LfMyM+Mytxa0r73aVse2adp52Oau7pd/eGCq4MHNUxPKc4sy1dEylwOt3FPNUH09gTrWhILSr+d9N3pQfGGpHRXjz9/+tHoqRe0t8yqasyK1lKNKlrDdYpVCEqUixRLLBZTep98DkD7zofFO3pVGqlqJlJDDDEK4TkmQlbXc+QWGZ9P2TMwpHXHLpnL541+dVRtMuWp00NmGncpxCkUCLDGWDjJWp6LG0XmJtn6xOu2PrjLzUvn3fr6JdVXP3btmyNqGlN2vHbC/Dxry5SZ+pTfIyh3MN3Jyxt54cKVYYXVKZPn3peIFkTK5G5ckp34W+bLE7IjeWGOOT78gp8DQPwzBtt5dymkkqTmbuIpYnUEAblZsldIrLLB0AGeX2QlAEDD5xy7n7eWia2GlKsREhaIb9CEZS58wKFRplGJAGD9W36JMXwf9cmKdF1RIlGgrmS1zOU/GDjIyZv8iwoENguRQKqblnqiI8yUWUAWJQD4D4Cg/5i7WltRAAAAAElFTkSuQmCC"
        },
        loading: "data:image/gif;base64,R0lGODlhEAAQAKIGAMLY8YSx5HOm4Mjc88/g9Ofw+v///wAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgAGACwAAAAAEAAQAAADMGi6RbUwGjKIXCAA016PgRBElAVlG/RdLOO0X9nK61W39qvqiwz5Ls/rRqrggsdkAgAh+QQFCgAGACwCAAAABwAFAAADD2hqELAmiFBIYY4MAutdCQAh+QQFCgAGACwGAAAABwAFAAADD1hU1kaDOKMYCGAGEeYFCQAh+QQFCgAGACwKAAIABQAHAAADEFhUZjSkKdZqBQG0IELDQAIAIfkEBQoABgAsCgAGAAUABwAAAxBoVlRKgyjmlAIBqCDCzUoCACH5BAUKAAYALAYACgAHAAUAAAMPaGpFtYYMAgJgLogA610JACH5BAUKAAYALAIACgAHAAUAAAMPCAHWFiI4o1ghZZJB5i0JACH5BAUKAAYALAAABgAFAAcAAAMQCAFmIaEp1motpDQySMNFAgA7",
        fileImg: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAEn0lEQVR4nO3aPY4cRQCG4QJt4IjIwV5phYwQlyEi8hEcEiFESgAXQBbHcYiILETASv5h/6Znequ73+dJOpnSfNErlVRfjDl+nPS/bN/vY4zfZo+o+HL2APjMqzHGN7NHVAgAWyQCz0QA2CoReAYCwJaJwMoEgK0TgRUJAHsgAisRAPZCBFYgAOyJCFzY1ewBD3g/xng3ewSruD7j7Kvbr8dCF7DlALwbY/wwewSreDPGeHHGeRG4EFcA9sp14AIEgD0TgTMJAHsnAmcQAI5ABBYSAI5CBBYQALbqnwVnROBEAsBW/TXG+GXBORE4gQCwZX+MMX5ecE4EnkgA2Lq3QwRWIwDsgQisRADYCxFYgQCwJyJwYQLA3pwTgW8vvGX3BIA9WhqBr4cIfEIA2CsRuAABYM9E4EwCwN6JwBkEgCMQgYUEgKMQgQUEgCMRgRMJAEcjAicQAI5IBJ5IADgqEXgCAeDIROARAsDRvR1j/LTgXCICAkDBn0ME7iQAVIjAHQSAEhH4jABQIwIfEQCKROCWAFAlAkMAaMtHQACoS0dAACAcAQGA/yQjIADwQS4CAgCfSkVAAOD/MhEQALhbIgICAPc7fAQEAB526AgIADzusBEQAHiaQ0ZAAODpDhcBAYDTnBOB7y685WwCAKdbGoGbsbEICAAsc4gICAAst/sIXM0eAPf4aozxZvaIFd3cfn+dOUIA2LIXswesbHoEXAFgrqnXAQGA+W4e/8k6BADCBADCBADCBADCBADCvANghr9nD3hGm37LIADM8P3sAc/o9RjjevaI+7gCQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQNjV7AEPeDnGeD17BJzp5ewBD9lyAK7GGNezR8CRuQJAmABAmABAmABAmABAmABAmABAmABA2L+QtW4QG9di8wAAAABJRU5ErkJggg==",
        //获取预览元素
        getElementObject: function (elem) {
            if (elem.nodeType && elem.nodeType === 1) {
                return elem;
            } else {
                return document.getElementById(elem);
            }
        },
        //开始图片预览
        beginPerview: function (/*文件上传控件实例*/ file, /*需要显示的元素id或元素实例*/ perviewElemId, /*上传页面所在的document对象*/ dcmt, /*文件后缀名*/ fileSuf) {
            var imgSufs = ",jpg,jpeg,bmp,png,gif,";
            var isImage = imgSufs.indexOf("," + fileSuf.toLowerCase() + ",") > -1; //检查是否为图片

            if (isImage) {
                this.imageOperation(file, perviewElemId, dcmt);
            } else {
                this.fileOperation(perviewElemId, fileSuf);
            }
        },
        //一般文件显示操作
        fileOperation: function (/*需要显示的元素id或元素实例*/ perviewElemId, /*文件后缀名*/ fileSuf) {
            var preview_div = this.getElementObject(perviewElemId);

            var MAXWIDTH = preview_div.clientWidth;
            var MAXHEIGHT = preview_div.clientHeight;
            var img = document.createElement("img");
            preview_div.appendChild(img);
            img.style.visibility = "hidden";
            img.src = this.fileImg;
            img.onload = function () {
                var rect = perviewImage.clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
                img.style.width = rect.width + 'px';
                img.style.height = rect.height + 'px';
                img.style.marginLeft = rect.left + 'px';
                img.style.marginTop = rect.top + 'px';
                img.style.visibility = "visible";
            }
            var txtTop = 0 - (MAXHEIGHT * 2 / 3);
            $('<div style="text-align:center; position:relative; z-index:100; color:#404040;font: 13px/27px Arial,sans-serif;"></div>')
                .text(fileSuf + "文件").css("top", txtTop + "px").appendTo(preview_div);

        },
        //图片预览操作
        imageOperation: function (/*文件上传控件实例*/ file, /*需要显示的元素id或元素实例*/ perviewElemId, /*上传页面所在的document对象*/ dcmt) {
            for (var t = 0; t < this.timers.length; t++) {
                window.clearInterval(this.timers[t]);
            }
            this.timers.length = 0;

            var preview_div = this.getElementObject(perviewElemId);
            var MAXWIDTH = preview_div.clientWidth;
            var MAXHEIGHT = preview_div.clientHeight;

            if (file.files && file.files[0]) { //此处为Firefox，Chrome内核以及IE10以上的操作
                preview_div.innerHTML = "";
                var img = document.createElement("img");
                preview_div.appendChild(img);
                img.style.visibility = "hidden";

                img.onload = function () {
                    var rect = perviewImage.clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
                    if (img.offsetWidth > img.offsetHeight) {
                        img.style.width = (img.offsetWidth / img.offsetHeight) * 75 + 'px';
                        img.style.height = 75 + 'px';
                        img.style.marginLeft = ((img.offsetWidth / img.offsetHeight) * 75 - 75) / (-2) + 'px';
                        img.style.marginTop = 0 + 'px';
                        img.style.visibility = "visible";
                    } else if (img.offsetWidth < img.offsetHeight) {
                        img.style.width = 75 + 'px';
                        img.style.height = (img.offsetHeight / img.offsetWidth) * 75 + 'px';
                        img.style.marginLeft = 0 + 'px';
                        img.style.marginTop = ((img.offsetHeight / img.offsetWidth) * 75 - 75) / (-2) + 'px';
                        img.style.visibility = "visible";
                    } else {
                        img.style.width = rect.width + 'px';
                        img.style.height = rect.height + 'px';
                        img.style.marginLeft = rect.left + 'px';
                        img.style.marginTop = rect.top + 'px';
                        img.style.visibility = "visible";
                    }
                }

                var reader = new FileReader();
                reader.onload = function (evt) {
                    img.src = evt.target.result;
                }
                reader.readAsDataURL(file.files[0]);
            } else { //此处为IE6，7，8，9的操作

                file.select();
                var src = dcmt.selection.createRange().text;

                var div_sFilter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale',src='" + src + "')";
                var img_sFilter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='image',src='" + src + "')";

                preview_div.innerHTML = "";
                var img = document.createElement("div");
                preview_div.appendChild(img);
                img.style.filter = img_sFilter;
                img.style.visibility = "hidden";
                img.style.width = "100%";
                img.style.height = "100%";

                function setImageDisplay() {
                    var rect = perviewImage.clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
                    preview_div.innerHTML = "";
                    var div = document.createElement("div");
                    if (img.offsetWidth > img.offsetHeight) {
                        div.style.width = (img.offsetWidth / img.offsetHeight) * 75 + 'px';
                        div.style.height = 75 + 'px';
                        div.style.marginLeft = ((img.offsetWidth / img.offsetHeight) * 75 - 75) / (-2) + 'px';
                        div.style.marginTop = 0 + 'px';
                        div.style.filter = div_sFilter;
                        preview_div.appendChild(div);
                    } else if (img.offsetWidth < img.offsetHeight) {
                        div.style.width = 75 + 'px';
                        div.style.height = (img.offsetHeight / img.offsetWidth) * 75 + 'px';
                        div.style.marginLeft = 0 + 'px';
                        div.style.marginTop = ((img.offsetHeight / img.offsetWidth) * 75 - 75) / (-2) + 'px';
                        div.style.filter = div_sFilter;
                        preview_div.appendChild(div);
                    } else {
                        div.style.width = rect.width + 'px';
                        div.style.height = rect.height + 'px';
                        div.style.marginLeft = rect.left + 'px';
                        div.style.marginTop = rect.top + 'px';
                        div.style.filter = div_sFilter;
                        preview_div.appendChild(div);
                    }
                    preview_div.appendChild(div);
                }

                //图片加载计数
                var tally = 0;

                var timer = window.setInterval(function () {
                    if (img.offsetHeight != MAXHEIGHT) {
                        window.clearInterval(timer);
                        setImageDisplay();
                    } else {
                        tally++;
                    }
                    //如果超过两秒钟图片还不能加载，就停止当前的轮询
                    if (tally > 20) {
                        window.clearInterval(timer);
                        setImageDisplay();
                    }
                }, 100);

                this.timers.push(timer);
            }
        },
        //按比例缩放图片
        clacImgZoomParam: function (maxWidth, maxHeight, width, height) { //传参，最大宽度，最大高度，宽度，高度
            var param = {width: width, height: height};
            if (width > maxWidth || height > maxHeight) {
                var rateWidth = width / maxWidth;
                var rateHeight = height / maxHeight;

                if (rateWidth > rateHeight) {
                    param.width = maxWidth;
                    param.height = Math.round(height / rateWidth);

                } else {
                    param.width = Math.round(width / rateHeight);
                    param.height = maxHeight;
                }
            }

            param.left = Math.round((maxWidth - param.width) / 2); //调整位置
            param.top = Math.round((maxHeight - param.height) / 2);
            return param;
        },
        //创建图片预览元素
        createPreviewElement: function (/*关闭图片名称*/ name, /*上传时的文件名*/ file, /*预览时的样式*/ style) {
            var img = document.createElement("div");
            img.title = file;
            img.style.overflow = "hidden";
            for (var s in style) {
                img.style[s] = style[s];
            }

            var text = document.createElement("div");
            text.style.width = style.width;
            text.style.overflow = "hidden";
            text.style.textOverflow = "ellipsis";
            text.style.whiteSpace = "nowrap";
            //text.innerHTML = file;


            var top = 0 - window.parseInt(style.width) + 1;
            var right = 0 - window.parseInt(style.width) + 18; //取消图标的位置;
            var close = document.createElement("img");
            close.setAttribute("name", name);
            close.src = this.closeImg.before;
            close.style.position = "relative";
            close.style.top = top + "px";
            close.style.right = right + "px";
            close.style.cursor = "pointer";

            var loadtop = (0 - window.parseInt(style.height)) / 2 - 26;
            var loadright = (0 - window.parseInt(style.width)) / 2 + 22;
            var imgloading = document.createElement("img");
            imgloading.src = this.loading;
            imgloading.style.position = "relative";
            imgloading.style.top = loadtop + "px";
            imgloading.style.right = loadright + "px";
            imgloading.style.display = "none";

            var main = document.createElement("div");
            main.appendChild(img);
            main.appendChild(text);
            main.appendChild(close);
            main.appendChild(imgloading);
            return main;
        },

        //获取预览区域
        getPerviewRegion: function (elem) {
            var perview = $(this.getElementObject(elem));
            if (!perview.find("ul").length) {
                var ul = document.createElement("ul");
                ul.style.listStyleType = "none";
                ul.style.margin = "0px";
                ul.style.padding = "0px";

                var div = document.createElement("div");
                div.style.clear = "both";
                perview.append(ul).append(div);
                return ul;
            } else {
                return perview.children("ul").get(0);
            }
        },
        //获取上传文件大小
        getFileSize: function (/*上传控件dom对象*/ file, /*上传控件所在的document对象*/ dcmt) {
            var fileSize;
            if (file.files && file.files[0]) {
                fileSize = file.files[0].size;
            } else {
                file.select();
                var src = dcmt.selection.createRange().text;
                try {
                    var fso = new ActiveXObject("Scripting.FileSystemObject");
                    var fileObj = fso.getFile(src);
                    fileSize = fileObj.size;
                } catch (e) {
                    return "error";
                }
            }
            fileSize = ((fileSize / 1024) + "").split(".")[0];
            return fileSize;
        }
    }
}



function cn($info) {
    layer.tips($info, '#zh', {
        tips: [2, '#3e61f2'],
        time: 1888,
        tipsMore: true
    });
}

function cm($info) {
    layer.tips($info, '#m', {
        tips: [2, '#3e61f2'],
        time: 1888,
        tipsMore: true
    });
}

function signin() {
    cna();
    cmm();
    if (smz && mi != 0) {

                $.ajax({
                    type: 'GET',
                    url: '/register/username/',
                    data: {username: $("#zh").val()},
                    success: function(data) {
                        var json = JSON.parse(data);
                        if (json.status == 1) {
                            smz=0;
                            uname=3;
                            cn('该账号不存在噢亲::>_<::');
                            $('#zhk').css('border', '2px solid #FF6C6C');
                        } else {
                            uname=1;
                            smz=1;
                        }
                    }
                });

        var index = layer.load(2, {
            time: 1*999,
            shade: [0.1,'#000']
        });
        setTimeout(log,888);//为AJAX预留充分时间，确保大多数情况下在接来下的函数执行前请求完成
    }

}

function log() {
    if (uname == 1) {
        var username = /^[^\s'"!@#$%]+$/;
        var dlmm = /^[^\s'"!@#$%]+$/;
        if (username.test($("#zh").val()) && dlmm.test($("#m").val())) {
                $.ajax({
                    type: 'POST',
                    url: '/log',
                    data: {
                        username: $("#zh").val(),
                        psd: $("#m").val()
                    },
                    success: function (data) {
                        var json = JSON.parse(data);
                        if (json.status == 1) {
                            window.location.replace("http://www.xunhuiwang.cn"); //success
                        } else {
                            xlogin();
                        }
                    }
                });
            }
    }
    else if(uname == 3)
    {
        //null
    }
    else{
        out();
    }
}


//发布模块


