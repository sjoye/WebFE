var node = document.querySelector("#dock");
var draging = null;
var f = 1;
//使用事件委托，将li的事件委托给ul
//firefox设置了setData后元素才能拖动！
node.ondragstart = function (event) {
    event.dataTransfer.setData("te", event.target.innerText); //不能使用text，firefox会打开新tab
    //event.dataTransfer.setData("self", event.target);
    draging = event.target.parentNode;
}

//拖拽结束时处理
node.ondragend = function (event) {
    $('#dock li').removeClass('clearho');
}

node.ondragover = function (event) {
    event.preventDefault();
    var target = event.target.parentNode;
    //因为dragover会发生在ul上，所以要判断是不是子元素
    if (target.nodeName === "LI") {
        if (target !== draging) {
            var targetRect = target.getBoundingClientRect();
            var dragingRect = draging.getBoundingClientRect();
            if (target) {
                if (target.animated) {
                    return;
                }
            }
            if (order(draging) < order(target) && draging.nodeName === "LI") {
                node.insertBefore(draging, target.nextSibling);
                $('#dock li').removeClass('lihover');
            } else if (order(draging) >= order(target) && draging.nodeName === "LI") {
                node.insertBefore(draging, target);
                $('#dock li').removeClass('lihover');
            }
            _animate(dragingRect, draging);
            _animate(targetRect, target);
        }
    }
}



//获取元素在父元素中的index
function order(el) {
    var index = 0;
    if (!el || !el.parentNode) {
        return -1;
    }
    while (el && (el = el.previousElementSibling)) {
        index++;
    }
    return index;
}

function _animate(prevRect, target) {
    var ms = 300;
    if (ms) {
        var currentRect = target.getBoundingClientRect();

        if (prevRect.nodeType === 1) {
            prevRect = prevRect.getBoundingClientRect();
        }

        _css(target, 'transition', 'none');
        _css(target, 'transform', 'translate3d(' +
            (prevRect.left - currentRect.left) + 'px,' +
            (prevRect.top - currentRect.top) + 'px,0)'
        );
        target.offsetWidth; // 触发重绘
        //放在timeout里面也可以
        // setTimeout(function() {
        //     _css(target, 'transition', 'all ' + ms + 'ms');
        //     _css(target, 'transform', 'translate3d(0,0,0)');
        // }, 0);
        _css(target, 'transition', 'all ' + ms + 'ms');
        _css(target, 'transform', 'translate3d(0,0,0)');
        clearTimeout(target.animated);
        target.animated = setTimeout(function () {
            _css(target, 'transition', '');
            _css(target, 'transform', '');
            target.animated = false;
        }, ms);
    }
}
//给元素添加style
function _css(el, prop, val) {
    var style = el && el.style;

    if (style) {
        if (val === void 0) {
            if (document.defaultView && document.defaultView.getComputedStyle) {
                val = document.defaultView.getComputedStyle(el, '');
            } else if (el.currentStyle) {
                val = el.currentStyle;
            }

            return prop === void 0 ? val : val[prop];
        } else {
            if (!(prop in style)) {
                prop = '-webkit-' + prop;
            }
            style[prop] = val + (typeof val === 'string' ? '' : 'px');
        }
    }
}


$('#head-sider').click(function(){
    $('aside').toggleClass('aside-show');
    $(this).toggleClass('side-open');
})
// $(document).mouseup(function (e) {
//     var area = $('aside');   // 设置目标区域
//     if (!area.is(e.target) && area.has(e.target).length === 0) {
//         $('aside').removeClass('aside-show');
//     }
// });

function apps(){
    $('#apps').toggleClass('apps');
}

$(function () {
    clock();
    //Dock动效控制
    $('#dock li').hover(function () {
        $(this).prev().addClass('lihover');
    }, function () {
        $(this).prev().removeClass('lihover');
    })
    $('#dock li').on({
        mousedown: function () {
            $('#dock li').addClass('clearho');
        },
        mouseup: function () {
            $('#dock li').removeClass('clearho');
        },
    });
})

//时钟
function clock() {
    var now = new Date();
    var year = now.getFullYear(); //得到年份
    var month = now.getMonth();//得到月份
    var date = now.getDate();//得到日期
    var day = now.getDay();//得到星期
    var hour = now.getHours();//得到小时
    var minu = now.getMinutes();//得到分钟
    var sec = now.getSeconds();//得到秒
    var MS = now.getMilliseconds();//获取毫秒
    var week;
    month = month + 1;
    if (month < 10) month = "0" + month;
    if (date < 10) date = "0" + date;
    if (hour < 10) hour = "0" + hour;
    if (minu < 10) minu = "0" + minu;
    if (sec < 10) sec = "0" + sec;
    var arr_week = new Array("周日", "周一", "周二", "周三", "周四", "周五", "周六");
    week = arr_week[day];
    var time = "";
    time = week + " " + hour + ":" + minu + ":" + sec;
    today = year + "-" + month + "-" + date + " " + week;
    //当前日期赋值
    $("#timer").html(time);
    $("#today").html(today);
    //设置得到当前日期的函数的执行间隔时间，每1000毫秒刷新一次。
    setTimeout("clock()", 1000);
}

//右键禁用，自定菜单
window.oncontextmenu = function (e) {
    e.preventDefault();
    var menu = document.querySelector("#menu");
    menu.style.left = e.clientX + 'px';
    menu.style.top = e.clientY + 'px';
    menu.style.height = '150px';
}

window.onclick = function (e) {
    document.querySelector('#menu').style.height = 0;
}

//全屏模式
function isfull() {
    return document.isFullScreen || document.mozIsFullScreen || document.msIsFullScreen || document.webkitIsFullScreen;
}
$('#full').click(function () {
    var docElm = document.documentElement;
    if (!isfull()) {
        //W3C
        if (docElm.requestFullscreen) {
            docElm.requestFullscreen();
        }
        //FireFox
        else if (docElm.mozRequestFullScreen) {
            docElm.mozRequestFullScreen();
        }
        //Chrome等
        else if (docElm.webkitRequestFullScreen) {
            docElm.webkitRequestFullScreen();
        }
        //IE11
        else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
})


