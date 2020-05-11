var node = document.querySelector("#dock");
var draging = null;
//使用事件委托，将li的事件委托给ul
//firefox设置了setData后元素才能拖动！
node.ondragstart = function (event) {
    event.dataTransfer.setData("te", event.target.innerText); //不能使用text，firefox会打开新tab
    //event.dataTransfer.setData("self", event.target);
    draging = event.target.parentNode;
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
            if(order(draging) < order(target) && draging.nodeName === "LI") {
                node.insertBefore(draging, target.nextSibling);
                $('#dock li').removeClass('lihover');
            } else if(order(draging) >= order(target) && draging.nodeName === "LI"){
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

//Dock动效控制
$('ul li').hover(function () {
    $(this).prev().addClass('lihover');
}, function () {
    $(this).prev().removeClass('lihover');
})
$('ul li').mousedown(function () {
    $(this).prev().addClass('clearho');
})
$('ul li').mouseup(function () {
    $('#dock li').removeClass('clearho');
})



function side(){
    $('aside').toggleClass('aside-show');  
}
