!function(e) {
    function i(n) {
        if (a[n])
            return a[n].exports;
        var t = a[n] = {
            exports: {},
            id: n,
            loaded: !1
        };
        return e[n].call(t.exports, t, t.exports, i),
        t.loaded = !0,
        t.exports
    }
    var a = {};
    return i.m = e,
    i.c = a,
    i.p = "",
    i(0)
}([function(e, i, a) {
    "use strict";
    function n(e, i) {
        t(e)
        // d(e),
        // s(e),
        // l(e),
        // r(e)
    }
    function t(e) {
        function i() {
            u && requestAnimFrame(i),
            n(),
            t()
        }
        function a() {
            for (d = o.width / 2,
            l = o.height / 2,
            v = [],
            r = 0; r < h; r++)
                s = {
                    x: Math.random() * o.width,
                    y: Math.random() * o.height,
                    z: Math.random() * o.width,
                    o: "0." + Math.floor(99 * Math.random()) + 1
                },
                v.push(s)
        }
        function n() {
            for (r = 0; r < h; r++)
                s = v[r],
                s.z--,
                s.z <= 0 && (s.z = o.width)
        }
        function t() {
            var e, i, n;
            for (o.width == window.innerWidth && o.width == window.innerWidth || (o.width = window.innerWidth,
            o.height = window.innerHeight,
            a()),
            0 == w && (f.fillStyle = "rgba(5,4,15,1)",
            f.fillRect(0, 0, o.width, o.height)),
            f.fillStyle = "rgba(255, 250, 230, " + c + ")",
            r = 0; r < h; r++)
                s = v[r],
                e = (s.x - d) * (m / s.z),
                e += d,
                i = (s.y - l) * (m / s.z),
                i += l,
                n = 1 * (m / s.z),

                // f.shadowOffsetX=1,
                // f.shadowOffsetY=1,
                // f.shadowBlur=10,
                // f.shadowColor="rgba(255, 255, 255, 0.8)",
                f.beginPath(),
                f.arc(e, i, n, 0, 2*Math.PI),
                f.closePath(),
                //f.fillRect(e, i, n, n),//矩形
                f.fillStyle = "rgba(255, 250, 230, " + s.o + ")",
                f.fill()
        }
        window.requestAnimFrame = function() {
            return window.requestAnimationFrame
        }();
        var d, l, s, r, o = document.getElementById("space"), f = o.getContext("2d"), h = 1900, c = "0." + Math.floor(9 * Math.random()) + 1, m = 2 * o.width, w = 0, v = [], u = !0;
        a(),
        i()
    }
    a(2);
    var o, f = $(".space"), h = 0;
    f.each(function() {
        var e = $(this).find("textarea.schemaData")
          , i = e.val()
          , a = JSON.parse(i);
        a && n($(this), a)
    }),
    e.exports = n
}
, , function(e, i) {}
]);
