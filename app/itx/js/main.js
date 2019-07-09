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
}

+ function(a, b, c) {
    function d(b) {
        return this.each(function() {
            var c = a(this);
            new e(c, b)
        })
    }
    var e = function(b, c) {
        this.options = a.extend({}, e.DEFAULTS, c),
            this.$element = b,
            this.$canvas = this._createCanvas(),
            this.startPoint = this._getCanvasHeight() * this.options.startPoint,
            this.xWidth = this._getRandomXwidth(this.options.minXwidth, this.options.maxXwidth),
            this.init()
    };
    e.DEFAULTS = {
        customWidth: 0,
        customHeight: 0,
        posTop: 0,
        posLeft: 0,
        minXwidth: 500,
        maxXwidth: 1e3,
        startPoint: .3,
        minMoveSpeed: 150,
        maxMoveSpeed: 50,
        curveNum: 1,
        minCurveWidth: 1,
        maxCurveWidth: 5,
        minTransparent: .5,
        maxTransparent: .5
    },
        e.prototype = {
            _getWrapWidth: function() {
                return this.$element.outerWidth()
            },
            _getWrapHeight: function() {
                return this.$element.outerHeight()
            },
            _getCanvasWidth: function() {
                return 0 == this.options.customWidth ? this._getWrapWidth() : this.options.customWidth
            },
            _getCanvasHeight: function() {
                return 0 == this.options.customHeight ? this._getWrapHeight() : this.options.customHeight
            },
            _createCanvas: function() {
                var b = a("<canvas></canvas>");
                return b.css({
                    position: "absolute",
                    top: this.options.posTop,
                    left: this.options.posLeft
                }).attr({
                    width: this._getCanvasWidth(),
                    height: this._getCanvasHeight()
                }),
                    b
            },
            _getRandomNum: function(a, b) {
                return (a + Math.random() * (b - a)).toFixed(1)
            },
            _getRandomXwidth: function(a, b) {
                var c = b - a,
                    d = Math.random();
                return a + Math.round(c * d)
            },
            _getRandomXOffset: function() {
                var a = Math.random();
                return Math.round(this.xWidth * a)
            },
            _getRandomSPOffset: function() {
                var a = this.startPoint / 2,
                    b = Math.random();
                return Math.round(a * b)
            },
            _getRandomSpeed: function(a, b) {
                var c = this.options.minMoveSpeed,
                    d = this.options.maxMoveSpeed;
                a && (c = a),
                b && (d = b);
                var e = Math.random(),
                    f = d - c;
                return c + Math.round(f * e)
            },
            _runDrawCurve: function(a, b, c, d, e, f) {
                for (var g, h, i, j, k, l, m, n, o = a.getContext("2d"), p = Math.ceil(this._getCanvasWidth() / this.xWidth), q = b > this.startPoint ? 2 * this.startPoint - b : 2 * (this.startPoint - b) + b, r = 0; r < this.options.curveNum; r++) {
                    g = c[r],
                        h = d[r],
                        m = e[r],
                        n = f[r];
                    for (var s = 0; s < p + 1; s++)
                        i = {
                            x: this.xWidth * s - g,
                            y: this.startPoint
                        },
                            j = {
                                x: this.xWidth * (s + 1) - g,
                                y: this.startPoint
                            },
                            k = {
                                x: this.xWidth * (s + .5) - g,
                                y: b
                            },
                            l = {
                                x: this.xWidth * (s + .5) - g,
                                y: q
                            },
                            o.save(),
                            o.translate(0, h),
                            o.strokeStyle = "rgba(255, 255, 255, " + m + ")",
                            o.lineWidth = n,
                            o.beginPath(),
                            o.moveTo(i.x, i.y),
                            o.bezierCurveTo(k.x, k.y, l.x, l.y, j.x, j.y),
                            o.stroke(),
                            o.restore()
                }
            },
            _clearCurve: function(a) {
                var b = a.getContext("2d");
                return b.clearRect(0, 0, this._getCanvasWidth(), this._getCanvasHeight()),
                    this
            },
            _moveCurve: function(a, b, c) {
                function d() {
                    h._clearCurve(a)._runDrawCurve(a, e, m, n, o, p),
                    g && (e += 1,
                    e >= f && (g = !1)),
                    g || (e -= 1,
                    e <= 0 && (g = !0)),
                        setTimeout(d, b)
                }
                var e = 0,
                    f = 2 * this.startPoint,
                    g = !0,
                    h = this;
                c && (e = c);
                for (var i, j, k, l, m = [], n = [], o = [], p = [], q = 0; q < this.options.curveNum; q++)
                    i = this._getRandomXOffset(),
                        m.push(i);
                for (var r = 0; r < this.options.curveNum; r++)
                    j = this._getRandomSPOffset(),
                        n.push(j);
                for (var s = 0; s < this.options.curveNum; s++)
                    k = this._getRandomNum(this.options.minTransparent, this.options.maxTransparent),
                        o.push(k);
                for (var t = 0; t < this.options.curveNum; t++)
                    l = this._getRandomNum(this.options.minCurveWidth, this.options.maxCurveWidth),
                        p.push(l);
                h._runDrawCurve(a, e, m, n, o, p),
                    d()
            },
            _drawCurve: function() {
                var a, b = this.$canvas,
                    c = b[0];
                return c.getContext ? (a = this._getRandomSpeed(),
                    this._moveCurve(c, a)) : this._insertImg(),
                    this
            },
            _insertCanvas: function() {
                var a = this.$element,
                    b = this.$canvas;
                return a.css({
                    position: "relative",
                    overflow: "hidden"
                }),
                    a.children(".main").css({
                        position: "relative",
                        "z-index": 5
                    }),
                    b.appendTo(a),
                    this
            },
            _insertImg: function() {
                var b = this.$element,
                    c = a('<div class="index-line"></div>');
                return b.append(c),
                    this
            },
            init: function() {
                this._insertCanvas(),
                    this._drawCurve()
            }
        },
        a.fn.drawBezierCurve = d,
        a.fn.drawBezierCurve.Constructor = e
}(jQuery, window, document), + function(a, b, c) {
function d(b) {
    return this.each(function() {
        var c = a(this);
        new e(c, b)
    })
}
var e = function(b, c) {
    this.options = a.extend({}, e.DEFAULTS, c),
        this.$element = b,
        this.$canvas = this._createCanvas(),
        this.amplitude = this._getRandomA(this.options.minAmplitude, this.options.maxAmplitude),
        this.omega = this._getRandomOmega(this.options.minOmega, this.options.maxOmega),
        this.init()
};
e.DEFAULTS = {
    minAmplitude: 50,
    maxAmplitude: 100,
    minOmega: 500,
    maxOmega: 1e3,
    speed: 5,
    startPoint: 0
},
    e.prototype = {
        _getWrapWidth: function() {
            return this.$element.outerWidth()
        },
        _getWrapHeight: function() {
            return this.$element.outerHeight()
        },
        _createCanvas: function() {
            var b = a("<canvas></canvas>");
            return b.css({
                position: "absolute",
                top: "0px",
                left: "0px"
            }).attr({
                width: this._getWrapWidth(),
                height: this._getWrapHeight()
            }),
                b
        },
        _drawCurve: function() {
            var a = this.$canvas,
                b = a[0];
            return b.getContext && this._runDrawCurve(b),
                this
        },
        _getRandomA: function(a, b) {
            var c = b - a,
                d = Math.random();
            return a + Math.round(d * c)
        },
        _getRandomOmega: function(a, b) {
            var c = b - a,
                d = Math.random(),
                e = (a + Math.round(d * c)) / 2;
            return (Math.asin(1) / e).toFixed(3)
        },
        _sinFun: function(a) {
            var b = this.amplitude,
                c = this.omega;
            return b / 2 * Math.sin(c * a) + b / 2 + this.options.startPoint
        },
        _runDrawCurve: function(a) {
            var b = a.getContext("2d");
            b.lineWidth = 3,
                b.strokeStyle = "rgba(255, 255, 255,.5)";
            var c = 0,
                d = this._sinFun(c),
                e = this,
                f = setInterval(function() {
                    c <= e._getWrapWidth() ? (b.beginPath(),
                        b.moveTo(c, d),
                        c += 1,
                        d = e._sinFun(c),
                        b.lineTo(c, d),
                        b.stroke()) : clearInterval(f)
                }, this.options.speed);
            return this
        },
        _insertCanvas: function() {
            var a = this.$element,
                b = this.$canvas;
            return a.css({
                position: "relative",
                overflow: "hidden"
            }),
                b.appendTo(a),
                this
        },
        init: function() {
            this._insertCanvas(),
                this._drawCurve()
        }
    },
    a.fn.drawCurve = d,
    a.fn.drawCurve.Constructor = e
}(jQuery, window, document);

$("#show").drawBezierCurve({
customHeight: 500,
posTop: -200,
minXwidth: 850,
maxXwidth: 1e3,
startPoint: .5,
minMoveSpeed: 88,
maxMoveSpeed: 36,
curveNum: 1,
minCurveWidth: 1,
maxCurveWidth: 2,
minTransparent: .2,
maxTransparent: .6
}).drawBezierCurve({
customHeight: 500,
posTop: -200,
minXwidth: 850,
maxXwidth: 1e3,
startPoint: .5,
minMoveSpeed: 66,
maxMoveSpeed: 16,
curveNum: 1,
minCurveWidth: 1,
maxCurveWidth: 2,
minTransparent: .2,
maxTransparent: .6
});
