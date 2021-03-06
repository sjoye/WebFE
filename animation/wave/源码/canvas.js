THREE.SpriteCanvasMaterial = function(a) {
    THREE.Material.call(this),
    this.type = "SpriteCanvasMaterial",
    this.color = new THREE.Color(16777215),
    this.program = function(a, b) {}
    ,
    this.setValues(a)
}
,
THREE.SpriteCanvasMaterial.prototype = Object.create(THREE.Material.prototype),
THREE.SpriteCanvasMaterial.prototype.constructor = THREE.SpriteCanvasMaterial,
THREE.SpriteCanvasMaterial.prototype.clone = function() {
    var a = new THREE.SpriteCanvasMaterial;
    return a.copy(this),
    a.color.copy(this.color),
    a.program = this.program,
    a
}
,
THREE.CanvasRenderer = function(a) {
    function b() {
        ra.setRGB(0, 0, 0),
        sa.setRGB(0, 0, 0),
        ta.setRGB(0, 0, 0);
        for (var a = 0, b = w.length; b > a; a++) {
            var c = w[a]
              , d = c.color;
            c instanceof THREE.AmbientLight ? ra.add(d) : c instanceof THREE.DirectionalLight ? sa.add(d) : c instanceof THREE.PointLight && ta.add(d)
        }
    }
    function c(a, b, c) {
        for (var d = 0, e = w.length; e > d; d++) {
            var f = w[d];
            if (ma.copy(f.color),
            f instanceof THREE.DirectionalLight) {
                var g = ua.setFromMatrixPosition(f.matrixWorld).normalize()
                  , h = b.dot(g);
                if (0 >= h)
                    continue;h *= f.intensity,
                c.add(ma.multiplyScalar(h))
            } else if (f instanceof THREE.PointLight) {
                var g = ua.setFromMatrixPosition(f.matrixWorld)
                  , h = b.dot(ua.subVectors(g, a).normalize());
                if (0 >= h)
                    continue;if (h *= 0 == f.distance ? 1 : 1 - Math.min(a.distanceTo(g) / f.distance, 1),
                0 == h)
                    continue;h *= f.intensity,
                c.add(ma.multiplyScalar(h))
            }
        }
    }
    function d(a, b, c) {
        m(c.opacity),
        n(c.blending);
        var d = b.scale.x * T
          , e = b.scale.y * U
          , f = .5 * Math.sqrt(d * d + e * e);
        if (qa.min.set(a.x - f, a.y - f),
        qa.max.set(a.x + f, a.y + f),
        c instanceof THREE.SpriteMaterial) {
            var g = c.map;
            if (null !== g) {
                var h = na[g.id];
                if ((void 0 === h || h.version !== g.version) && (h = j(g),
                na[g.id] = h),
                void 0 !== h.canvas) {
                    s(h.canvas);
                    var i = g.image
                      , k = i.width * g.offset.x
                      , l = i.height * g.offset.y
                      , o = i.width * g.repeat.x
                      , p = i.height * g.repeat.y
                      , q = d / o
                      , t = e / p;
                    $.save(),
                    $.translate(a.x, a.y),
                    0 !== c.rotation && $.rotate(c.rotation),
                    $.translate(-d / 2, -e / 2),
                    $.scale(q, t),
                    $.translate(-k, -l),
                    $.fillRect(k, l, o, p),
                    $.restore()
                }
            } else
                s(c.color.getStyle()),
                $.save(),
                $.translate(a.x, a.y),
                0 !== c.rotation && $.rotate(c.rotation),
                $.scale(d, -e),
                $.fillRect(-.5, -.5, 1, 1),
                $.restore()
        } else
            c instanceof THREE.SpriteCanvasMaterial && (r(c.color.getStyle()),
            s(c.color.getStyle()),
            $.save(),
            $.translate(a.x, a.y),
            0 !== c.rotation && $.rotate(c.rotation),
            $.scale(d, e),
            c.program($),
            $.restore())
    }
    function e(a, b, c, d) {
        if (m(d.opacity),
        n(d.blending),
        $.beginPath(),
        $.moveTo(a.positionScreen.x, a.positionScreen.y),
        $.lineTo(b.positionScreen.x, b.positionScreen.y),
        d instanceof THREE.LineBasicMaterial) {
            if (o(d.linewidth),
            p(d.linecap),
            q(d.linejoin),
            d.vertexColors !== THREE.VertexColors)
                r(d.color.getStyle());
            else {
                var e = c.vertexColors[0].getStyle()
                  , f = c.vertexColors[1].getStyle();
                if (e === f)
                    r(e);
                else {
                    try {
                        var g = $.createLinearGradient(a.positionScreen.x, a.positionScreen.y, b.positionScreen.x, b.positionScreen.y);
                        g.addColorStop(0, e),
                        g.addColorStop(1, f)
                    } catch (h) {
                        g = e
                    }
                    r(g)
                }
            }
            $.stroke(),
            qa.expandByScalar(2 * d.linewidth)
        } else
            d instanceof THREE.LineDashedMaterial && (o(d.linewidth),
            p(d.linecap),
            q(d.linejoin),
            r(d.color.getStyle()),
            t([d.dashSize, d.gapSize]),
            $.stroke(),
            qa.expandByScalar(2 * d.linewidth),
            t([]))
    }
    function f(a, b, d, e, f, j, l, o) {
        if (O.info.render.vertices += 3,
        O.info.render.faces++,
        m(o.opacity),
        n(o.blending),
        B = a.positionScreen.x,
        C = a.positionScreen.y,
        D = b.positionScreen.x,
        E = b.positionScreen.y,
        F = d.positionScreen.x,
        G = d.positionScreen.y,
        g(B, C, D, E, F, G),
        (o instanceof THREE.MeshLambertMaterial || o instanceof THREE.MeshPhongMaterial) && null === o.map)
            ka.copy(o.color),
            la.copy(o.emissive),
            o.vertexColors === THREE.FaceColors && ka.multiply(l.color),
            ja.copy(ra),
            va.copy(a.positionWorld).add(b.positionWorld).add(d.positionWorld).divideScalar(3),
            c(va, l.normalModel, ja),
            ja.multiply(ka).add(la),
            o.wireframe === !0 ? h(ja, o.wireframeLinewidth, o.wireframeLinecap, o.wireframeLinejoin) : i(ja);
        else if (o instanceof THREE.MeshBasicMaterial || o instanceof THREE.MeshLambertMaterial || o instanceof THREE.MeshPhongMaterial)
            if (null !== o.map) {
                var p = o.map.mapping;
                p === THREE.UVMapping && (H = l.uvs,
                k(B, C, D, E, F, G, H[e].x, H[e].y, H[f].x, H[f].y, H[j].x, H[j].y, o.map))
            } else
                null !== o.envMap ? o.envMap.mapping === THREE.SphericalReflectionMapping && (wa.copy(l.vertexNormalsModel[e]).applyMatrix3(xa),
                I = .5 * wa.x + .5,
                J = .5 * wa.y + .5,
                wa.copy(l.vertexNormalsModel[f]).applyMatrix3(xa),
                K = .5 * wa.x + .5,
                L = .5 * wa.y + .5,
                wa.copy(l.vertexNormalsModel[j]).applyMatrix3(xa),
                M = .5 * wa.x + .5,
                N = .5 * wa.y + .5,
                k(B, C, D, E, F, G, I, J, K, L, M, N, o.envMap)) : (ja.copy(o.color),
                o.vertexColors === THREE.FaceColors && ja.multiply(l.color),
                o.wireframe === !0 ? h(ja, o.wireframeLinewidth, o.wireframeLinecap, o.wireframeLinejoin) : i(ja));
        else
            o instanceof THREE.MeshNormalMaterial ? (wa.copy(l.normalModel).applyMatrix3(xa),
            ja.setRGB(wa.x, wa.y, wa.z).multiplyScalar(.5).addScalar(.5),
            o.wireframe === !0 ? h(ja, o.wireframeLinewidth, o.wireframeLinecap, o.wireframeLinejoin) : i(ja)) : (ja.setRGB(1, 1, 1),
            o.wireframe === !0 ? h(ja, o.wireframeLinewidth, o.wireframeLinecap, o.wireframeLinejoin) : i(ja))
    }
    function g(a, b, c, d, e, f) {
        $.beginPath(),
        $.moveTo(a, b),
        $.lineTo(c, d),
        $.lineTo(e, f),
        $.closePath()
    }
    function h(a, b, c, d) {
        o(b),
        p(c),
        q(d),
        r(a.getStyle()),
        $.stroke(),
        qa.expandByScalar(2 * b)
    }
    function i(a) {
        s(a.getStyle()),
        $.fill()
    }
    function j(a) {
        if (0 === a.version || a instanceof THREE.CompressedTexture || a instanceof THREE.DataTexture)
            return {
                canvas: void 0,
                version: a.version
            };
        var b = a.image;
        if (b.complete === !1)
            return {
                canvas: void 0,
                version: 0
            };
        var c = document.createElement("canvas");
        c.width = b.width,
        c.height = b.height;
        var d = c.getContext("2d");
        d.setTransform(1, 0, 0, -1, 0, b.height),
        d.drawImage(b, 0, 0);
        var e = a.wrapS === THREE.RepeatWrapping
          , f = a.wrapT === THREE.RepeatWrapping
          , g = "no-repeat";
        e === !0 && f === !0 ? g = "repeat" : e === !0 ? g = "repeat-x" : f === !0 && (g = "repeat-y");
        var h = $.createPattern(c, g);
        return a.onUpdate && a.onUpdate(a),
        {
            canvas: h,
            version: a.version
        }
    }
    function k(a, b, c, d, e, f, g, h, i, k, l, m, n) {
        var o = na[n.id];
        if ((void 0 === o || o.version !== n.version) && (o = j(n),
        na[n.id] = o),
        void 0 === o.canvas)
            return s("rgba( 0, 0, 0, 1)"),
            void $.fill();
        s(o.canvas);
        var p, q, r, t, u, v, w, x, y = n.offset.x / n.repeat.x, z = n.offset.y / n.repeat.y, A = n.image.width * n.repeat.x, B = n.image.height * n.repeat.y;
        g = (g + y) * A,
        h = (h + z) * B,
        i = (i + y) * A,
        k = (k + z) * B,
        l = (l + y) * A,
        m = (m + z) * B,
        c -= a,
        d -= b,
        e -= a,
        f -= b,
        i -= g,
        k -= h,
        l -= g,
        m -= h,
        w = i * m - l * k,
        0 !== w && (x = 1 / w,
        p = (m * c - k * e) * x,
        q = (m * d - k * f) * x,
        r = (i * e - l * c) * x,
        t = (i * f - l * d) * x,
        u = a - p * g - r * h,
        v = b - q * g - t * h,
        $.save(),
        $.transform(p, q, r, t, u, v),
        $.fill(),
        $.restore())
    }
    function l(a, b, c) {
        var d, e = b.x - a.x, f = b.y - a.y, g = e * e + f * f;
        0 !== g && (d = c / Math.sqrt(g),
        e *= d,
        f *= d,
        b.x += e,
        b.y += f,
        a.x -= e,
        a.y -= f)
    }
    function m(a) {
        ba !== a && ($.globalAlpha = a,
        ba = a)
    }
    function n(a) {
        ca !== a && (a === THREE.NormalBlending ? $.globalCompositeOperation = "source-over" : a === THREE.AdditiveBlending ? $.globalCompositeOperation = "lighter" : a === THREE.SubtractiveBlending && ($.globalCompositeOperation = "darker"),
        ca = a)
    }
    function o(a) {
        fa !== a && ($.lineWidth = a,
        fa = a)
    }
    function p(a) {
        ga !== a && ($.lineCap = a,
        ga = a)
    }
    function q(a) {
        ha !== a && ($.lineJoin = a,
        ha = a)
    }
    function r(a) {
        da !== a && ($.strokeStyle = a,
        da = a)
    }
    function s(a) {
        ea !== a && ($.fillStyle = a,
        ea = a)
    }
    function t(a) {
        ia.length !== a.length && ($.setLineDash(a),
        ia = a)
    }
    console.log("THREE.CanvasRenderer", THREE.REVISION),
    a = a || {};
    var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O = this, P = new THREE.Projector, Q = void 0 !== a.canvas ? a.canvas : document.createElement("canvas"), R = Q.width, S = Q.height, T = Math.floor(R / 2), U = Math.floor(S / 2), V = 0, W = 0, X = R, Y = S, Z = 1, $ = Q.getContext("2d", {
        alpha: a.alpha === !0
    }), _ = new THREE.Color(0), aa = a.alpha === !0 ? 0 : 1, ba = 1, ca = 0, da = null , ea = null , fa = null , ga = null , ha = null , ia = [], ja = (new THREE.RenderableVertex,
    new THREE.RenderableVertex,
    new THREE.Color), ka = (new THREE.Color,
    new THREE.Color,
    new THREE.Color,
    new THREE.Color,
    new THREE.Color), la = new THREE.Color, ma = new THREE.Color, na = {}, oa = new THREE.Box2, pa = new THREE.Box2, qa = new THREE.Box2, ra = new THREE.Color, sa = new THREE.Color, ta = new THREE.Color, ua = new THREE.Vector3, va = new THREE.Vector3, wa = new THREE.Vector3, xa = new THREE.Matrix3;
    void 0 === $.setLineDash && ($.setLineDash = function() {}
    ),
    this.domElement = Q,
    this.autoClear = !0,
    this.sortObjects = !0,
    this.sortElements = !0,
    this.info = {
        render: {
            vertices: 0,
            faces: 0
        }
    },
    this.supportsVertexTextures = function() {}
    ,
    this.setFaceCulling = function() {}
    ,
    this.getContext = function() {
        return $
    }
    ,
    this.getContextAttributes = function() {
        return $.getContextAttributes()
    }
    ,
    this.getPixelRatio = function() {
        return Z
    }
    ,
    this.setPixelRatio = function(a) {
        void 0 !== a && (Z = a)
    }
    ,
    this.setSize = function(a, b, c) {
        R = a * Z,
        S = b * Z,
        Q.width = R,
        Q.height = S,
        T = Math.floor(R / 2),
        U = Math.floor(S / 2),
        c !== !1 && (Q.style.width = a + "px",
        Q.style.height = b + "px"),
        oa.min.set(-T, -U),
        oa.max.set(T, U),
        pa.min.set(-T, -U),
        pa.max.set(T, U),
        ba = 1,
        ca = 0,
        da = null ,
        ea = null ,
        fa = null ,
        ga = null ,
        ha = null ,
        this.setViewport(0, 0, a, b)
    }
    ,
    this.setViewport = function(a, b, c, d) {
        V = a * Z,
        W = b * Z,
        X = c * Z,
        Y = d * Z
    }
    ,
    this.setScissor = function() {}
    ,
    this.setScissorTest = function() {}
    ,
    this.setClearColor = function(a, b) {
        _.set(a),
        aa = void 0 !== b ? b : 1,
        pa.min.set(-T, -U),
        pa.max.set(T, U)
    }
    ,
    this.setClearColorHex = function(a, b) {
        console.warn("THREE.CanvasRenderer: .setClearColorHex() is being removed. Use .setClearColor() instead."),
        this.setClearColor(a, b)
    }
    ,
    this.getClearColor = function() {
        return _
    }
    ,
    this.getClearAlpha = function() {
        return aa
    }
    ,
    this.getMaxAnisotropy = function() {
        return 0
    }
    ,
    this.clear = function() {
        pa.isEmpty() === !1 && (pa.intersect(oa),
        pa.expandByScalar(2),
        pa.min.x = pa.min.x + T,
        pa.min.y = -pa.min.y + U,
        pa.max.x = pa.max.x + T,
        pa.max.y = -pa.max.y + U,
        1 > aa && $.clearRect(0 | pa.min.x, 0 | pa.max.y, pa.max.x - pa.min.x | 0, pa.min.y - pa.max.y | 0),
        aa > 0 && (n(THREE.NormalBlending),
        m(1),
        s("rgba(" + Math.floor(255 * _.r) + "," + Math.floor(255 * _.g) + "," + Math.floor(255 * _.b) + "," + aa + ")"),
        $.fillRect(0 | pa.min.x, 0 | pa.max.y, pa.max.x - pa.min.x | 0, pa.min.y - pa.max.y | 0)),
        pa.makeEmpty())
    }
    ,
    this.clearColor = function() {}
    ,
    this.clearDepth = function() {}
    ,
    this.clearStencil = function() {}
    ,
    this.render = function(a, c) {
        if (c instanceof THREE.Camera == !1)
            return void console.error("THREE.CanvasRenderer.render: camera is not an instance of THREE.Camera.");
        this.autoClear === !0 && this.clear(),
        O.info.render.vertices = 0,
        O.info.render.faces = 0,
        $.setTransform(X / R, 0, 0, -Y / S, V, S - W),
        $.translate(T, U),
        u = P.projectScene(a, c, this.sortObjects, this.sortElements),
        v = u.elements,
        w = u.lights,
        x = c,
        xa.getNormalMatrix(c.matrixWorldInverse),
        b();
        for (var g = 0, h = v.length; h > g; g++) {
            var i = v[g]
              , j = i.material;
            if (void 0 !== j && 0 !== j.opacity) {
                if (qa.makeEmpty(),
                i instanceof THREE.RenderableSprite)
                    y = i,
                    y.x *= T,
                    y.y *= U,
                    d(y, i, j);
                else if (i instanceof THREE.RenderableLine)
                    y = i.v1,
                    z = i.v2,
                    y.positionScreen.x *= T,
                    y.positionScreen.y *= U,
                    z.positionScreen.x *= T,
                    z.positionScreen.y *= U,
                    qa.setFromPoints([y.positionScreen, z.positionScreen]),
                    oa.intersectsBox(qa) === !0 && e(y, z, i, j);
                else if (i instanceof THREE.RenderableFace) {
                    if (y = i.v1,
                    z = i.v2,
                    A = i.v3,
                    y.positionScreen.z < -1 || y.positionScreen.z > 1)
                        continue;if (z.positionScreen.z < -1 || z.positionScreen.z > 1)
                        continue;if (A.positionScreen.z < -1 || A.positionScreen.z > 1)
                        continue;y.positionScreen.x *= T,
                    y.positionScreen.y *= U,
                    z.positionScreen.x *= T,
                    z.positionScreen.y *= U,
                    A.positionScreen.x *= T,
                    A.positionScreen.y *= U,
                    j.overdraw > 0 && (l(y.positionScreen, z.positionScreen, j.overdraw),
                    l(z.positionScreen, A.positionScreen, j.overdraw),
                    l(A.positionScreen, y.positionScreen, j.overdraw)),
                    qa.setFromPoints([y.positionScreen, z.positionScreen, A.positionScreen]),
                    oa.intersectsBox(qa) === !0 && f(y, z, A, 0, 1, 2, i, j)
                }
                pa.union(qa)
            }
        }
        $.setTransform(1, 0, 0, 1, 0, 0)
    }
}
;
