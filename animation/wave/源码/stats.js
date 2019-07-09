var Stats = function() {
    function a(a, b, c) {
        return a = document.createElement(a),
        a.id = b,
        a.style.cssText = c,
        a
    }
    function b(b, c, d) {
        var e = a("div", b, "padding:0 0 3px 3px;text-align:left;background:" + d)
          , f = a("div", b + "Text", "font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px;color:" + c);
        for (f.innerHTML = b.toUpperCase(),
        e.appendChild(f),
        b = a("div", b + "Graph", "width:74px;height:30px;background:" + c),
        e.appendChild(b),
        c = 0; 74 > c; c++)
            b.appendChild(a("span", "", "width:1px;height:30px;float:left;opacity:0.9;background:" + d));
        return e
    }
    function c(a) {
        for (var b = j.children, c = 0; c < b.length; c++)
            b[c].style.display = c === a ? "block" : "none";
        i = a
    }
    function d(a, b) {
        a.appendChild(a.firstChild).style.height = Math.min(30, 30 - 30 * b) + "px"
    }
    var e = self.performance && self.performance.now ? self.performance.now.bind(performance) : Date.now
      , f = e()
      , g = f
      , h = 0
      , i = 0
      , j = a("div", "stats", "width:80px;opacity:0.9;cursor:pointer");
    j.addEventListener("mousedown", function(a) {
        a.preventDefault(),
        c(++i % j.children.length)
    }, !1);
    var k = 0
      , l = 1 / 0
      , m = 0
      , n = b("fps", "#0ff", "#002")
      , o = n.children[0]
      , p = n.children[1];
    j.appendChild(n);
    var q = 0
      , r = 1 / 0
      , s = 0
      , n = b("ms", "#0f0", "#020")
      , t = n.children[0]
      , u = n.children[1];
    if (j.appendChild(n),
    self.performance && self.performance.memory) {
        var v = 0
          , w = 1 / 0
          , x = 0
          , n = b("mb", "#f08", "#201")
          , y = n.children[0]
          , z = n.children[1];
        j.appendChild(n)
    }
    return c(i),
    {
        REVISION: 14,
        domElement: j,
        setMode: c,
        begin: function() {
            f = e()
        },
        end: function() {
            var a = e();
            if (q = a - f,
            r = Math.min(r, q),
            s = Math.max(s, q),
            t.textContent = (0 | q) + " MS (" + (0 | r) + "-" + (0 | s) + ")",
            d(u, q / 200),
            h++,
            a > g + 1e3 && (k = Math.round(1e3 * h / (a - g)),
            l = Math.min(l, k),
            m = Math.max(m, k),
            o.textContent = k + " FPS (" + l + "-" + m + ")",
            d(p, k / 100),
            g = a,
            h = 0,
            void 0 !== v)) {
                var b = performance.memory.usedJSHeapSize
                  , c = performance.memory.jsHeapSizeLimit;
                v = Math.round(9.54e-7 * b),
                w = Math.min(w, v),
                x = Math.max(x, v),
                y.textContent = v + " MB (" + w + "-" + x + ")",
                d(z, b / c)
            }
            return a
        },
        update: function() {
            f = this.end()
        }
    }
}
;
"object" == typeof module && (module.exports = Stats);
