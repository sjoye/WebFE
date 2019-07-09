!function(e) {
    function i(a) {
        if (n[a])
            return n[a].exports;
        var t = n[a] = {
            exports: {},
            id: a,
            loaded: !1
        };
        return e[a].call(t.exports, t, t.exports, i),
        t.loaded = !0,
        t.exports
    }
    var n = {};
    return i.m = e,
    i.c = n,
    i.p = "",
    i(0)
}([function(e, i, n) {
    "use strict";
    function a(e, i) {
        t(e),
        d(e),
        l(e),
        s(e),
        o(e)
    }
    function t(e) {
        function i() {
            d = document.getElementById("scene"),
            l = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,1,0),
            l.position.z = 1e3,
            o = new THREE.Scene,
            f = new Array;
            for (var e = 2 * Math.PI, i = new THREE.SpriteCanvasMaterial({
                color: 3636666,//节点颜色，原始白色6775000
                program: function(i) {
                    i.beginPath(),
                    i.arc(0, 0, .5, 0, e, !0),
                    i.fill()
                }
            }), a = 0, t = 0; t < w; t++)
                for (var m = 0; m < v; m++)
                    h = f[a++] = new THREE.Sprite(i),
                    h.position.x = t * c - w * c / 2,
                    h.position.z = m * c - v * c / 2,
                    o.add(h);
            r = new THREE.CanvasRenderer,
            r.setClearColor(328719, 1),
            r.setPixelRatio(window.devicePixelRatio),
            r.setSize(window.innerWidth, window.innerHeight),
            d.appendChild(r.domElement),
            s = new Stats,
            window.addEventListener("resize", n, !1)
        }
        function n() {
            u = window.innerWidth / 2,
            p = window.innerHeight / 2,
            l.aspect = window.innerWidth / window.innerHeight,
            l.updateProjectionMatrix(),
            r.setSize(window.innerWidth, window.innerHeight)
        }
        function a() {
            requestAnimationFrame(a),
            t(),
            s.update()
        }
        function t() {
            l.position.x += .05 * (85 - l.position.x),
            l.position.y += .05 * (342 - l.position.y),
            l.lookAt(o.position);
            for (var e = 0, i = 0; i < w; i++)
                for (var n = 0; n < v; n++)
                    h = f[e++],
                    h.position.y = 50 * Math.sin(.3 * (i + m)) + 50 * Math.sin(.5 * (n + m)),
                    h.scale.x = h.scale.y = 4 * (Math.sin(.3 * (i + m)) + 1) + 4 * (Math.sin(.5 * (n + m)) + 1);
            r.render(o, l),
            m += .1
        }
        var d, s, l, o, r, f, h, c = 80, w = 40, v = 40, m = 0, u = window.innerWidth / 2, p = window.innerHeight / 2;
        i(),
        a()
    }
    function d(e) {
        e.find(".title .t0").addClass("pulse").addClass("animated");
        for (var i = e.find(".text").attr("data-text"), n = i.length - 1, a = 0; a <= n; a++)
            e.find(".text").append('<span style="transition: ' + 3 * Math.random() + "s; transition-delay: " + Math.random() + 's;">' + i.charAt(a) + "</span>");
        setTimeout(function() {
            e.find(".text").addClass("active")
        }, 1e3),
        setTimeout(function() {
            e.find(".title .meeting").addClass("slideInUp").addClass("animated")
        }, 1500)
    }
    function s(e) {
        var i = e.find(".timeline-li.line").length;
        setTimeout(function() {
            e.find(".timeline-li.name").each(function(n, a) {
                $(this).on("click", function(a) {
                    a.preventDefault(),
                    clearInterval(r),
                    e.find(".title").fadeOut("100"),
                    h = n,
                    $(this).addClass("active"),
                    $(this).nextAll(".timeline-li").removeClass("active"),
                    $(this).prevAll(".timeline-li").addClass("active"),
                    $(".timeline-li.line").find(".whiteline").stop().animate({
                        width: "0"
                    }, 1),
                    $(".timeline-li.line.active").find(".whiteline").stop().animate({
                        width: "100%"
                    }, 1),
                    e.find(".showarea .area").removeClass("active").hide(),
                    e.find(".showarea .area").eq(h).show(),
                    e.find(".showarea .area").eq(h).addClass("active"),
                    r = setInterval(function() {
                        e.find(".timeline-li.line").eq(h) && h <= i ? (e.find(".timeline-li.line").eq(h).addClass("active").find(".whiteline").animate({
                            width: "100%"
                        }, 4e3),
                        e.find(".timeline-li.name").eq(h).addClass("active"),
                        e.find(".showarea .area").hide(),
                        e.find(".showarea .area").removeClass("active"),
                        e.find(".showarea .area").eq(h).show(),
                        e.find(".showarea .area").eq(h).addClass("active"),
                        h++) : clearInterval(r)
                    }, 4e3)
                })
            })
        }, 7e3)
    }
    function l(e, i) {
        var n = e.find(".timeline-li.line").length;
        h = i || h,
        setTimeout(function() {
            e.find(".title").fadeOut("100"),
            e.find(".timeline-li.name").eq(0).addClass("active"),
            e.find(".timeline-li.line").eq(0).addClass("active").find(".whiteline").stop().animate({
                width: "100%"
            }, 4e3),
            e.find(".showarea .area").hide(),
            e.find(".showarea .area").eq(0).show(),
            e.find(".showarea .area").eq(0).addClass("active"),
            r = setInterval(function() {
                e.find(".timeline-li.line").eq(h) && h < n ? (h++,
                e.find(".timeline-li.line").eq(h).addClass("active").find(".whiteline").stop().animate({
                    width: "100%"
                }, 4e3),
                e.find(".timeline-li.name").eq(h).addClass("active"),
                e.find(".showarea .area").hide(),
                e.find(".showarea .area").removeClass("active"),
                e.find(".showarea .area").eq(h).show(),
                e.find(".showarea .area").eq(h).addClass("active")) : clearInterval(r)
            }, 4e3),
            e.find(".showarea .area").on("mouseout mouseover", function(i) {
                i.preventDefault(),
                "mouseover" == i.type ? (e.find(".timeline-li.line").find(".whiteline").stop(),
                clearInterval(r)) : h < n && (e.find(".timeline-li.name").eq(h).addClass("active"),
                e.find(".timeline-li.line").eq(h).prevAll(".timeline-li.line").find(".whiteline").width("100%"),
                e.find(".timeline-li.line").eq(h).addClass("active").find(".whiteline").stop().animate({
                    width: "100%"
                }, 4e3),
                e.find(".showarea .area").hide(),
                e.find(".showarea .area").removeClass("active"),
                e.find(".showarea .area").eq(h).show(),
                e.find(".showarea .area").eq(h).addClass("active"),
                r = setInterval(function() {
                    e.find(".timeline-li.line").eq(h) && h < n ? (h++,
                    e.find(".timeline-li.line").eq(h).addClass("active").find(".whiteline").stop().animate({
                        width: "100%"
                    }, 4e3),
                    e.find(".timeline-li.name").eq(h).addClass("active"),
                    e.find(".showarea .area").hide(),
                    e.find(".showarea .area").removeClass("active"),
                    e.find(".showarea .area").eq(h).show(),
                    e.find(".showarea .area").eq(h).addClass("active")) : clearInterval(r)
                }, 4e3))
            }),
            h >= n && clearInterval(r)
        }, 7e3)
    }
    function o(e) {
        e.find(".video").on("click", function(i) {
            i.preventDefault(),
            e.find(".mask").show();
            var n = e.find(".video").attr("data-link");
            e.find(".vs").html('<video autoplay="true" controls="controls" src="' + n + '" style="width:100%;"></video>')
        }),
        e.find(".close").on("click", function(i) {
            i.preventDefault(),
            e.find(".mask").hide(),
            e.find(".vs").html("")
        })
    }
    n(2);
    var r, f = $(".wb-zc-tymod-yunqi-2016mod"), h = 0;
    f.each(function() {
        var e = $(this).find("textarea.schemaData")
          , i = e.val()
          , n = JSON.parse(i);
        n && a($(this), n)
    }),
    e.exports = a
}
, , function(e, i) {}
]);
