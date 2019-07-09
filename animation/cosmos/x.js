!function(t) {
    function e(n) {
        if (i[n])
            return i[n].exports;
        var r = i[n] = {
            exports: {},
            id: n,
            loaded: !1
        };
        return t[n].call(r.exports, r, r.exports, e),
        r.loaded = !0,
        r.exports
    }
    var i = {};
    return e.m = t,
    e.c = i,
    e.p = "",
    e(0)
}([function(t, e, i) {
    "use strict";
    function n(t, e) {
        r(t),
        a(t),
        s(t),
        o(t),
        c(t)
    }
    function r(t) {
        function e() {
            E = new l.HemisphereLight(16777215,16777215,.5),
            w = new l.DirectionalLight(16777215,.8),
            w.position.set(200, 200, 200),
            w.castShadow = !0,
            M = new l.DirectionalLight(16777215,.4),
            M.position.set(-100, 200, 50),
            M.castShadow = !0,
            m.add(E),
            m.add(w),
            m.add(M)
        }
        function i() {
            L = window.innerWidth,
            R = 900,
            x = L / R,
            P = L / 2,
            C = R / 2,
            y = 60,
            _ = 110,
            b = 2e4,
            m = new l.Scene,
            g = new l.PerspectiveCamera(y,x,_,b),
            g.position.z = 400,
            g.position.x = 180,
            g.position.y = -800,
            g.lookAt(new l.Vector3(0,0,0)),
            T = new l.WebGLRenderer({
                alpha: !0,
                antialias: !0
            }),
            T.setSize(L, R),
            T.setClearColor(66583, 0),
            T.shadowMap.enabled = !0,
            S = document.getElementById("scene"),
            S.appendChild(T.domElement),
            n()
        }
        function n() {
            function t(t) {
                I = {
                    x: t.clientX,
                    y: t.clientY
                }
            }
            function e(t) {}
            function i(t) {}
            function n(t) {
                t.touches.length > 1 && (t.preventDefault(),
                mousePos = {
                    x: t.touches[0].pageX,
                    y: t.touches[0].pageY
                })
            }
            function r(t) {
                mousePos = {
                    x: windowHalfX,
                    y: windowHalfY
                }
            }
            function a(t) {
                1 == t.touches.length && (t.preventDefault(),
                mousePos = {
                    x: t.touches[0].pageX,
                    y: t.touches[0].pageY
                })
            }
            function o() {
                L = window.innerWidth,
                R = 900,
                P = L / 2,
                C = R / 2,
                T.setSize(L, R),
                g.aspect = L / R,
                g.updateProjectionMatrix()
            }
            window.addEventListener("resize", o, !1),
            document.addEventListener("mousemove", t, !1),
            document.addEventListener("mousedown", e, !1),
            document.addEventListener("mouseup", i, !1),
            document.addEventListener("touchstart", n, !1),
            document.addEventListener("touchend", r, !1),
            document.addEventListener("touchmove", a, !1)
        }
        function r() {
            if (U % 2 === 0 && O && 0 !== O.vortex) {
                for (var t = 0; t < A.geometry.vertices.length; t++) {
                    var e = A.geometry.vertices[t]
                      , i = -Math.PI / 180;
                    i *= O.vortex > 0 ? (1 - e.length() / O.radius) * O.vortex : e.length() / O.radius * Math.abs(O.vortex),
                    e.applyAxisAngle(N, i)
                }
                A.geometry.verticesNeedUpdate = !0
            }
            U++
        }
        function a(t) {
            r(),
            A.rotation.z -= .0025,
            o(),
            requestAnimationFrame(a)
        }
        function o() {
            v && v.update(),
            T.render(m, g)
        }
        function s() {
            var t = document.createElement("canvas");
            t.width = 128,
            t.height = 128;
            var e = t.getContext("2d")
              , i = e.createRadialGradient(t.width / 2, t.height / 2, 0, t.width / 2, t.height / 2, t.width / 2);
            return i.addColorStop(0, "rgba(255,255,255,1)"),
            i.addColorStop(.2, "rgba(240,255,240,1)"),
            i.addColorStop(.22, "rgba(0,150,255,.2)"),
            i.addColorStop(1, "rgba(0,50,255,0)"),
            e.fillStyle = i,
            e.fillRect(0, 0, t.width, t.height),
            t
        }
        function c() {
            var t = new l.CanvasTexture(s())
              , e = new l.Geometry
              , i = new l.PointsMaterial({
                size: 8,
                map: t,
                vertexColors: l.VertexColors,
                blending: l.AdditiveBlending,
                depthTest: !1,
                transparent: !0
            });
            A = new l.Points(e,i),
            m.add(A)
        }
        function h(t) {
            function e(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.pow(2, 31)
                  , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1103515245
                  , n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 12345;
                return (t * i + n) % e
            }
            return {
                toArray: function() {
                    for (var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, n = i / -6e4, r = t.modulus(), a = t.armTheta(), o = [], s = 0, c = 0; c < t.arms; c++)
                        for (var h = 0; h < t.stops; h++) {
                            s = e(s, r);
                            var l = h / t.stops
                              , u = 1 - l + 1 - t.dispersion
                              , d = s / r
                              , p = 2 * (d - .5)
                              , f = l * Math.PI * 2 * t.revolutions + a * c
                              , m = n + f + Math.PI * u * p * t.sparse
                              , g = Math.sqrt(l) * t.radius
                              , v = Math.cos(m) * g
                              , y = Math.sin(m) * g
                              , x = 0
                              , _ = 2 * (d - .5) + Math.pow(1.125, 8 * (1 - l))
                              , b = .5 * (Math.sin((d + n + l) * Math.PI * 2) + 1);
                            o.push({
                                x: v,
                                y: y,
                                z: x,
                                size: _,
                                alpha: b
                            })
                        }
                    return o
                }
            }
        }
        function u(t) {
            for (var e = 10 - 10 * t.dispersion * (1 - t.bulge), i = 10 - 10 * t.dispersion * (1 - t.bulge), n = 40 - 40 * t.dispersion * (1 - t.bulge), r = new l.Geometry, a = h(t).toArray(), o = 0; o < a.length; o++) {
                var s = a[o]
                  , c = Math.pow(Math.pow(s.x, 2) + Math.pow(s.y, 2), .5)
                  , u = Math.max(0, (.8 * t.radius - c) / (.8 * t.radius));
                u = (1 - Math.cos(u * Math.PI)) * t.bulge;
                var d = new l.Vector3;
                d.x = s.x,
                d.y = s.y,
                d.z = (-n + 2 * n * Math.random()) * u,
                r.vertices.push(d),
                r.colors.push(new l.Color(u,u,1));
                for (var p = Math.round(5 * u), f = 0; f < p; ) {
                    var m = new l.Vector3;
                    m.x = s.x - e + Math.random() * (2 * e),
                    m.y = s.y - i + Math.random() * (2 * i),
                    m.z = (-n + 2 * n * Math.random()) * u,
                    r.vertices.push(m),
                    r.colors.push(new l.Color(u,u,1)),
                    f++
                }
            }
            r.mergeVertices(),
            r.verticesNeedUpdate = !0,
            A.geometry = r
        }
        function d(t) {
            var e = "# .PCD v.7 - Point Cloud Data file format\r\n";
            e += "VERSION .7\r\n",
            e += "FIELDS x y z rgb\r\n",
            e += "SIZE 4 4 4 4\r\n",
            e += "TYPE F F F F\r\n",
            e += "COUNT 1 1 1 1\r\n",
            e += "WIDTH " + t.length + "\r\n",
            e += "HEIGHT 1\r\n",
            e += "VIEWPOINT 0 0 0 1 0 0 0\r\n",
            e += "POINTS " + t.length + "\r\n",
            e += "DATA ascii\r\n";
            for (var i = 0; i < t.length; i++) {
                var n = t[i]
                  , r = n.x.toFixed(5)
                  , a = n.y.toFixed(5)
                  , o = n.z.toFixed(5);
                e += r + " " + a + " " + o + " 4.2108e+06",
                i < t.length - 1 && (e += "\r\n")
            }
            return e
        }
        function p(t) {
            for (var e = {
                vertex: {
                    x: [],
                    y: [],
                    z: []
                },
                face: {
                    vertex_index: []
                }
            }, i = 0; i < t.length; i++) {
                var n = t[i];
                e.vertex.x.push(n.x),
                e.vertex.y.push(n.y),
                e.vertex.z.push(n.z)
            }
            var r = writePLY(e);
            return r
        }
        function f(t) {
            for (var e = "", i = 0; i < t.length; i++) {
                var n = t[i]
                  , r = n.x.toFixed(6)
                  , a = n.y.toFixed(6)
                  , o = n.z.toFixed(6);
                e += r + " " + a + " " + o + "\r\n"
            }
            return e
        }
        var m = void 0
          , g = void 0
          , v = void 0
          , y = void 0
          , x = void 0
          , _ = void 0
          , b = void 0
          , w = void 0
          , M = void 0
          , E = void 0
          , T = void 0
          , S = void 0
          , A = void 0
          , L = void 0
          , R = void 0
          , P = void 0
          , C = void 0
          , I = {
            x: 0,
            y: 0
        }
          , U = 0
          , N = new l.Vector3(0,0,1);
        i(),
        c(),
        e(),
        a();
        var O = function t() {
            function t() {
                this.arms = 2,
                this.stops = 5e3,
                this.revolutions = 1.8,
                this.radius = 400,
                this.sparse = .4,
                this.dispersion = .6,
                this.bulge = .9,
                this.vortex = .3,
                this.randomize = function() {
                    for (var t = 0; t < gui.__controllers.length; t++) {
                        var e = gui.__controllers[t];
                        if (e.__min) {
                            var i = e.__min + (e.__max - e.__min) * Math.random();
                            this[e.property] = i,
                            e.updateDisplay()
                        }
                    }
                    u(this)
                }
                ,
                this.exportPCD = function() {
                    var t = A.geometry
                      , e = d(t.vertices);
                    D(e, "galaxy.pcd")
                }
                ,
                this.exportXYZ = function() {
                    var t = A.geometry
                      , e = f(t.vertices);
                    D(e, "galaxy.xyz")
                }
                ,
                this.exportPLY = function() {
                    var t = A.geometry
                      , e = p(t.vertices);
                    D(e, "galaxy.ply")
                }
                ,
                this.exportOBJ = function() {
                    var t = new l.OBJExporter
                      , e = t.parse(m);
                    D(e, "galaxy.obj")
                }
                ,
                this.exportSTL = function() {
                    var t = new l.STLExporter
                      , e = t.parse(m);
                    D(e, "galaxy.stl")
                }
                ,
                this.armTheta = function() {
                    return 2 * Math.PI / this.arms
                }
                ,
                this.modulus = function() {
                    return Math.pow(2, 31)
                }
            }
            return new t
        }();
        (function() {
            function t(t, e, i) {
                this.x = t || 0,
                this.y = e || 0,
                this.z = i || 0
            }
            var e = {
                x: .09,
                y: .09,
                z: .3
            };
            return t.prototype = {
                randomize: function() {
                    return this.x = 1e3 * Math.random(),
                    this.y = 1e3 * Math.random(),
                    this.z = 1e3 * Math.random(),
                    this
                },
                toGrid: function() {
                    return this.x = Math.round(this.x / e.x) * e.x,
                    this.y = Math.round(this.y / e.y) * e.y,
                    this.z = Math.round(this.z / e.z) * e.z,
                    this
                },
                toFixed: function() {
                    return this.x = +this.x.toFixed(2),
                    this.y = +this.y.toFixed(2),
                    this.z = +this.z.toFixed(2),
                    this
                }
            },
            t.grid = function(e) {
                for (var i = 0; i < e.length; i++)
                    e[i].toGrid().toFixed();
                t.sort(e)
            }
            ,
            t.sort = function(t) {
                t.sort(function(t, e) {
                    return t.z === e.z ? t.x === e.x ? t.y === e.y ? 0 : t.y > e.y ? 1 : -1 : t.x > e.x ? 1 : -1 : t.z > e.z ? 1 : -1
                })
            }
            ,
            t
        })();
        u(O);
        var D = function() {
            var t = document.createElement("a");
            return document.body.appendChild(t),
            function(e, i, n) {
                e = n ? JSON.stringify(e) : e;
                var r = new Blob([e],{
                    type: "octet/stream"
                })
                  , a = window.URL.createObjectURL(r);
                t.href = a,
                t.download = i,
                t.click(),
                window.URL.revokeObjectURL(a)
            }
        }()
    }
    function a(t) {
        t.find(".title .t0").addClass("pulse").addClass("animated");
        for (var e = t.find(".text").attr("data-text"), i = e.length - 1, n = 0; n <= i; n++)
            t.find(".text").append('<span style="transition: ' + 3 * Math.random() + "s; transition-delay: " + Math.random() + 's;">' + e.charAt(n) + "</span>");
        setTimeout(function() {
            t.find(".text").addClass("active")
        }, 1e3),
        setTimeout(function() {
            t.find(".title .meeting").addClass("slideInUp").addClass("animated")
        }, 1500)
    }
    function o(t) {
        var e = t.find(".timeline-li.line").length;
        setTimeout(function() {
            t.find(".timeline-li.name").each(function(i, n) {
                $(this).on("click", function(n) {
                    n.preventDefault(),
                    clearInterval(h),
                    t.find(".title").fadeOut("100"),
                    u = i,
                    $(this).addClass("active"),
                    $(this).nextAll(".timeline-li").removeClass("active"),
                    $(this).prevAll(".timeline-li").addClass("active"),
                    $(".timeline-li.line").find(".whiteline").stop().animate({
                        width: "0"
                    }, 1),
                    $(".timeline-li.line.active").find(".whiteline").stop().animate({
                        width: "100%"
                    }, 1),
                    t.find(".showarea .area").removeClass("active").hide(),
                    t.find(".showarea .area").eq(u).show(),
                    t.find(".showarea .area").eq(u).addClass("active"),
                    h = setInterval(function() {
                        t.find(".timeline-li.line").eq(u) && u <= e ? (t.find(".timeline-li.line").eq(u).addClass("active").find(".whiteline").animate({
                            width: "100%"
                        }, 4e3),
                        t.find(".timeline-li.name").eq(u).addClass("active"),
                        t.find(".showarea .area").hide(),
                        t.find(".showarea .area").removeClass("active"),
                        t.find(".showarea .area").eq(u).show(),
                        t.find(".showarea .area").eq(u).addClass("active"),
                        u++) : clearInterval(h)
                    }, 4e3)
                })
            })
        }, 7e3)
    }
    function s(t, e) {
        var i = t.find(".timeline-li.line").length;
        u = e || u,
        setTimeout(function() {
            t.find(".title").fadeOut("100"),
            t.find(".timeline-li.name").eq(0).addClass("active"),
            t.find(".timeline-li.line").eq(0).addClass("active").find(".whiteline").stop().animate({
                width: "100%"
            }, 4e3),
            t.find(".showarea .area").hide(),
            t.find(".showarea .area").eq(0).show(),
            t.find(".showarea .area").eq(0).addClass("active"),
            h = setInterval(function() {
                t.find(".timeline-li.line").eq(u) && u < i ? (u++,
                t.find(".timeline-li.line").eq(u).addClass("active").find(".whiteline").stop().animate({
                    width: "100%"
                }, 4e3),
                t.find(".timeline-li.name").eq(u).addClass("active"),
                t.find(".showarea .area").hide(),
                t.find(".showarea .area").removeClass("active"),
                t.find(".showarea .area").eq(u).show(),
                t.find(".showarea .area").eq(u).addClass("active")) : clearInterval(h)
            }, 4e3),
            t.find(".showarea .area").on("mouseout mouseover", function(e) {
                e.preventDefault(),
                "mouseover" == e.type ? (t.find(".timeline-li.line").find(".whiteline").stop(),
                clearInterval(h)) : u < i && (t.find(".timeline-li.name").eq(u).addClass("active"),
                t.find(".timeline-li.line").eq(u).prevAll(".timeline-li.line").find(".whiteline").width("100%"),
                t.find(".timeline-li.line").eq(u).addClass("active").find(".whiteline").stop().animate({
                    width: "100%"
                }, 4e3),
                t.find(".showarea .area").hide(),
                t.find(".showarea .area").removeClass("active"),
                t.find(".showarea .area").eq(u).show(),
                t.find(".showarea .area").eq(u).addClass("active"),
                h = setInterval(function() {
                    t.find(".timeline-li.line").eq(u) && u < i ? (u++,
                    t.find(".timeline-li.line").eq(u).addClass("active").find(".whiteline").stop().animate({
                        width: "100%"
                    }, 4e3),
                    t.find(".timeline-li.name").eq(u).addClass("active"),
                    t.find(".showarea .area").hide(),
                    t.find(".showarea .area").removeClass("active"),
                    t.find(".showarea .area").eq(u).show(),
                    t.find(".showarea .area").eq(u).addClass("active")) : clearInterval(h)
                }, 4e3))
            }),
            u >= i && clearInterval(h)
        }, 7e3)
    }
    function c(t) {
        t.find(".video").on("click", function(e) {
            e.preventDefault(),
            t.find(".mask").show();
            var i = t.find(".video").attr("data-link");
            t.find(".vs").html('<video autoplay="true" controls="controls" src="' + i + '" style="width:100%;"></video>')
        }),
        t.find(".close").on("click", function(e) {
            e.preventDefault(),
            t.find(".mask").hide(),
            t.find(".vs").html("")
        })
    }
    i(2);
    var h, l = i(6), u = 0, d = $(".wb-zc-tymod-yunqi-2017mod");
    d.each(function() {
        var t = $(this).find("textarea.schemaData")
          , e = t.val()
          , i = JSON.parse(e);
        i && n($(this), i)
    }),
    t.exports = n
}
, , function(t, e) {}
, , , , function(t, e, i) {
    var n, r, a, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ;
    !function(i, s) {
        "object" === o(e) && "undefined" != typeof t ? s(e) : (r = [e],
        n = s,
        a = "function" == typeof n ? n.apply(e, r) : n,
        !(void 0 !== a && (t.exports = a)))
    }(void 0, function(t) {
        "use strict";
        function e() {}
        function i(t, e) {
            this.x = t || 0,
            this.y = e || 0
        }
        function n(t, e, r, a, o, s, c, h, l, u) {
            Object.defineProperty(this, "id", {
                value: Ms++
            }),
            this.uuid = ws.generateUUID(),
            this.name = "",
            this.image = void 0 !== t ? t : n.DEFAULT_IMAGE,
            this.mipmaps = [],
            this.mapping = void 0 !== e ? e : n.DEFAULT_MAPPING,
            this.wrapS = void 0 !== r ? r : vo,
            this.wrapT = void 0 !== a ? a : vo,
            this.magFilter = void 0 !== o ? o : wo,
            this.minFilter = void 0 !== s ? s : Eo,
            this.anisotropy = void 0 !== l ? l : 1,
            this.format = void 0 !== c ? c : zo,
            this.type = void 0 !== h ? h : To,
            this.offset = new i(0,0),
            this.repeat = new i(1,1),
            this.generateMipmaps = !0,
            this.premultiplyAlpha = !1,
            this.flipY = !0,
            this.unpackAlignment = 4,
            this.encoding = void 0 !== u ? u : ds,
            this.version = 0,
            this.onUpdate = null
        }
        function r(t, e, i, n) {
            this.x = t || 0,
            this.y = e || 0,
            this.z = i || 0,
            this.w = void 0 !== n ? n : 1
        }
        function a(t, e, i) {
            this.uuid = ws.generateUUID(),
            this.width = t,
            this.height = e,
            this.scissor = new r(0,0,t,e),
            this.scissorTest = !1,
            this.viewport = new r(0,0,t,e),
            i = i || {},
            void 0 === i.minFilter && (i.minFilter = wo),
            this.texture = new n(void 0,void 0,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),
            this.depthBuffer = void 0 === i.depthBuffer || i.depthBuffer,
            this.stencilBuffer = void 0 === i.stencilBuffer || i.stencilBuffer,
            this.depthTexture = void 0 !== i.depthTexture ? i.depthTexture : null
        }
        function s(t, e, i) {
            a.call(this, t, e, i),
            this.activeCubeFace = 0,
            this.activeMipMapLevel = 0
        }
        function c(t, e, i, n) {
            this._x = t || 0,
            this._y = e || 0,
            this._z = i || 0,
            this._w = void 0 !== n ? n : 1
        }
        function h(t, e, i) {
            this.x = t || 0,
            this.y = e || 0,
            this.z = i || 0
        }
        function l() {
            this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
            arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
        }
        function u(t, e, i, r, a, o, s, c, h, l, u, d) {
            n.call(this, null , o, s, c, h, l, r, a, u, d),
            this.image = {
                data: t,
                width: e,
                height: i
            },
            this.magFilter = void 0 !== h ? h : xo,
            this.minFilter = void 0 !== l ? l : xo,
            this.generateMipmaps = !1,
            this.flipY = !1,
            this.unpackAlignment = 1
        }
        function d(t, e, i, r, a, o, s, c, h, l) {
            t = void 0 !== t ? t : [],
            e = void 0 !== e ? e : co,
            n.call(this, t, e, i, r, a, o, s, c, h, l),
            this.flipY = !1
        }
        function p() {
            this.seq = [],
            this.map = {}
        }
        function f(t, e, i) {
            var n = t[0];
            if (n <= 0 || n > 0)
                return t;
            var r = e * i
              , a = Ss[r];
            if (void 0 === a && (a = new Float32Array(r),
            Ss[r] = a),
            0 !== e) {
                n.toArray(a, 0);
                for (var o = 1, s = 0; o !== e; ++o)
                    s += i,
                    t[o].toArray(a, s)
            }
            return a
        }
        function m(t, e) {
            var i = As[e];
            void 0 === i && (i = new Int32Array(e),
            As[e] = i);
            for (var n = 0; n !== e; ++n)
                i[n] = t.allocTextureUnit();
            return i
        }
        function g(t, e) {
            t.uniform1f(this.addr, e)
        }
        function v(t, e) {
            t.uniform1i(this.addr, e)
        }
        function y(t, e) {
            void 0 === e.x ? t.uniform2fv(this.addr, e) : t.uniform2f(this.addr, e.x, e.y)
        }
        function x(t, e) {
            void 0 !== e.x ? t.uniform3f(this.addr, e.x, e.y, e.z) : void 0 !== e.r ? t.uniform3f(this.addr, e.r, e.g, e.b) : t.uniform3fv(this.addr, e)
        }
        function _(t, e) {
            void 0 === e.x ? t.uniform4fv(this.addr, e) : t.uniform4f(this.addr, e.x, e.y, e.z, e.w)
        }
        function b(t, e) {
            t.uniformMatrix2fv(this.addr, !1, e.elements || e)
        }
        function w(t, e) {
            void 0 === e.elements ? t.uniformMatrix3fv(this.addr, !1, e) : (Rs.set(e.elements),
            t.uniformMatrix3fv(this.addr, !1, Rs))
        }
        function M(t, e) {
            void 0 === e.elements ? t.uniformMatrix4fv(this.addr, !1, e) : (Ls.set(e.elements),
            t.uniformMatrix4fv(this.addr, !1, Ls))
        }
        function E(t, e, i) {
            var n = i.allocTextureUnit();
            t.uniform1i(this.addr, n),
            i.setTexture2D(e || Es, n)
        }
        function T(t, e, i) {
            var n = i.allocTextureUnit();
            t.uniform1i(this.addr, n),
            i.setTextureCube(e || Ts, n)
        }
        function S(t, e) {
            t.uniform2iv(this.addr, e)
        }
        function A(t, e) {
            t.uniform3iv(this.addr, e)
        }
        function L(t, e) {
            t.uniform4iv(this.addr, e)
        }
        function R(t) {
            switch (t) {
            case 5126:
                return g;
            case 35664:
                return y;
            case 35665:
                return x;
            case 35666:
                return _;
            case 35674:
                return b;
            case 35675:
                return w;
            case 35676:
                return M;
            case 35678:
                return E;
            case 35680:
                return T;
            case 5124:
            case 35670:
                return v;
            case 35667:
            case 35671:
                return S;
            case 35668:
            case 35672:
                return A;
            case 35669:
            case 35673:
                return L
            }
        }
        function P(t, e) {
            t.uniform1fv(this.addr, e)
        }
        function C(t, e) {
            t.uniform1iv(this.addr, e)
        }
        function I(t, e) {
            t.uniform2fv(this.addr, f(e, this.size, 2))
        }
        function U(t, e) {
            t.uniform3fv(this.addr, f(e, this.size, 3))
        }
        function N(t, e) {
            t.uniform4fv(this.addr, f(e, this.size, 4))
        }
        function O(t, e) {
            t.uniformMatrix2fv(this.addr, !1, f(e, this.size, 4))
        }
        function D(t, e) {
            t.uniformMatrix3fv(this.addr, !1, f(e, this.size, 9))
        }
        function F(t, e) {
            t.uniformMatrix4fv(this.addr, !1, f(e, this.size, 16))
        }
        function B(t, e, i) {
            var n = e.length
              , r = m(i, n);
            t.uniform1iv(this.addr, r);
            for (var a = 0; a !== n; ++a)
                i.setTexture2D(e[a] || Es, r[a])
        }
        function z(t, e, i) {
            var n = e.length
              , r = m(i, n);
            t.uniform1iv(this.addr, r);
            for (var a = 0; a !== n; ++a)
                i.setTextureCube(e[a] || Ts, r[a])
        }
        function G(t) {
            switch (t) {
            case 5126:
                return P;
            case 35664:
                return I;
            case 35665:
                return U;
            case 35666:
                return N;
            case 35674:
                return O;
            case 35675:
                return D;
            case 35676:
                return F;
            case 35678:
                return B;
            case 35680:
                return z;
            case 5124:
            case 35670:
                return C;
            case 35667:
            case 35671:
                return S;
            case 35668:
            case 35672:
                return A;
            case 35669:
            case 35673:
                return L
            }
        }
        function H(t, e, i) {
            this.id = t,
            this.addr = i,
            this.setValue = R(e.type)
        }
        function V(t, e, i) {
            this.id = t,
            this.addr = i,
            this.size = e.size,
            this.setValue = G(e.type)
        }
        function k(t) {
            this.id = t,
            p.call(this)
        }
        function j(t, e) {
            t.seq.push(e),
            t.map[e.id] = e
        }
        function W(t, e, i) {
            var n = t.name
              , r = n.length;
            for (Ps.lastIndex = 0; ; ) {
                var a = Ps.exec(n)
                  , o = Ps.lastIndex
                  , s = a[1]
                  , c = "]" === a[2]
                  , h = a[3];
                if (c && (s |= 0),
                void 0 === h || "[" === h && o + 2 === r) {
                    j(i, void 0 === h ? new H(s,t,e) : new V(s,t,e));
                    break
                }
                var l = i.map
                  , u = l[s];
                void 0 === u && (u = new k(s),
                j(i, u)),
                i = u
            }
        }
        function X(t, e, i) {
            p.call(this),
            this.renderer = i;
            for (var n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS), r = 0; r < n; ++r) {
                var a = t.getActiveUniform(e, r)
                  , o = a.name
                  , s = t.getUniformLocation(e, o);
                W(a, s, this)
            }
        }
        function q(t, e, i) {
            return void 0 === e && void 0 === i ? this.set(t) : this.setRGB(t, e, i)
        }
        function Y(t, e) {
            this.min = void 0 !== t ? t : new i(+(1 / 0),+(1 / 0)),
            this.max = void 0 !== e ? e : new i(-(1 / 0),-(1 / 0))
        }
        function Z(t, e) {
            function n() {
                var t = new Float32Array([-1, -1, 0, 0, 1, -1, 1, 0, 1, 1, 1, 1, -1, 1, 0, 1])
                  , e = new Uint16Array([0, 1, 2, 0, 2, 3]);
                a = f.createBuffer(),
                o = f.createBuffer(),
                f.bindBuffer(f.ARRAY_BUFFER, a),
                f.bufferData(f.ARRAY_BUFFER, t, f.STATIC_DRAW),
                f.bindBuffer(f.ELEMENT_ARRAY_BUFFER, o),
                f.bufferData(f.ELEMENT_ARRAY_BUFFER, e, f.STATIC_DRAW),
                d = f.createTexture(),
                p = f.createTexture(),
                m.bindTexture(f.TEXTURE_2D, d),
                f.texImage2D(f.TEXTURE_2D, 0, f.RGB, 16, 16, 0, f.RGB, f.UNSIGNED_BYTE, null ),
                f.texParameteri(f.TEXTURE_2D, f.TEXTURE_WRAP_S, f.CLAMP_TO_EDGE),
                f.texParameteri(f.TEXTURE_2D, f.TEXTURE_WRAP_T, f.CLAMP_TO_EDGE),
                f.texParameteri(f.TEXTURE_2D, f.TEXTURE_MAG_FILTER, f.NEAREST),
                f.texParameteri(f.TEXTURE_2D, f.TEXTURE_MIN_FILTER, f.NEAREST),
                m.bindTexture(f.TEXTURE_2D, p),
                f.texImage2D(f.TEXTURE_2D, 0, f.RGBA, 16, 16, 0, f.RGBA, f.UNSIGNED_BYTE, null ),
                f.texParameteri(f.TEXTURE_2D, f.TEXTURE_WRAP_S, f.CLAMP_TO_EDGE),
                f.texParameteri(f.TEXTURE_2D, f.TEXTURE_WRAP_T, f.CLAMP_TO_EDGE),
                f.texParameteri(f.TEXTURE_2D, f.TEXTURE_MAG_FILTER, f.NEAREST),
                f.texParameteri(f.TEXTURE_2D, f.TEXTURE_MIN_FILTER, f.NEAREST),
                s = {
                    vertexShader: ["uniform lowp int renderType;", "uniform vec3 screenPosition;", "uniform vec2 scale;", "uniform float rotation;", "uniform sampler2D occlusionMap;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "varying float vVisibility;", "void main() {", "vUV = uv;", "vec2 pos = position;", "if ( renderType == 2 ) {", "vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );", "vVisibility =        visibility.r / 9.0;", "vVisibility *= 1.0 - visibility.g / 9.0;", "vVisibility *=       visibility.b / 9.0;", "vVisibility *= 1.0 - visibility.a / 9.0;", "pos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;", "pos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;", "}", "gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );", "}"].join("\n"),
                    fragmentShader: ["uniform lowp int renderType;", "uniform sampler2D map;", "uniform float opacity;", "uniform vec3 color;", "varying vec2 vUV;", "varying float vVisibility;", "void main() {", "if ( renderType == 0 ) {", "gl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );", "} else if ( renderType == 1 ) {", "gl_FragColor = texture2D( map, vUV );", "} else {", "vec4 texture = texture2D( map, vUV );", "texture.a *= opacity * vVisibility;", "gl_FragColor = texture;", "gl_FragColor.rgb *= color;", "}", "}"].join("\n")
                },
                c = r(s),
                l = {
                    vertex: f.getAttribLocation(c, "position"),
                    uv: f.getAttribLocation(c, "uv")
                },
                u = {
                    renderType: f.getUniformLocation(c, "renderType"),
                    map: f.getUniformLocation(c, "map"),
                    occlusionMap: f.getUniformLocation(c, "occlusionMap"),
                    opacity: f.getUniformLocation(c, "opacity"),
                    color: f.getUniformLocation(c, "color"),
                    scale: f.getUniformLocation(c, "scale"),
                    rotation: f.getUniformLocation(c, "rotation"),
                    screenPosition: f.getUniformLocation(c, "screenPosition")
                }
            }
            function r(e) {
                var i = f.createProgram()
                  , n = f.createShader(f.FRAGMENT_SHADER)
                  , r = f.createShader(f.VERTEX_SHADER)
                  , a = "precision " + t.getPrecision() + " float;\n";
                return f.shaderSource(n, a + e.fragmentShader),
                f.shaderSource(r, a + e.vertexShader),
                f.compileShader(n),
                f.compileShader(r),
                f.attachShader(i, n),
                f.attachShader(i, r),
                f.linkProgram(i),
                i
            }
            var a, o, s, c, l, u, d, p, f = t.context, m = t.state;
            this.render = function(r, s, g) {
                if (0 !== e.length) {
                    var v = new h
                      , y = g.w / g.z
                      , x = .5 * g.z
                      , _ = .5 * g.w
                      , b = 16 / g.w
                      , w = new i(b * y,b)
                      , M = new h(1,1,0)
                      , E = new i(1,1)
                      , T = new Y;
                    T.min.set(g.x, g.y),
                    T.max.set(g.x + (g.z - 16), g.y + (g.w - 16)),
                    void 0 === c && n(),
                    f.useProgram(c),
                    m.initAttributes(),
                    m.enableAttribute(l.vertex),
                    m.enableAttribute(l.uv),
                    m.disableUnusedAttributes(),
                    f.uniform1i(u.occlusionMap, 0),
                    f.uniform1i(u.map, 1),
                    f.bindBuffer(f.ARRAY_BUFFER, a),
                    f.vertexAttribPointer(l.vertex, 2, f.FLOAT, !1, 16, 0),
                    f.vertexAttribPointer(l.uv, 2, f.FLOAT, !1, 16, 8),
                    f.bindBuffer(f.ELEMENT_ARRAY_BUFFER, o),
                    m.disable(f.CULL_FACE),
                    m.buffers.depth.setMask(!1);
                    for (var S = 0, A = e.length; S < A; S++) {
                        b = 16 / g.w,
                        w.set(b * y, b);
                        var L = e[S];
                        if (v.set(L.matrixWorld.elements[12], L.matrixWorld.elements[13], L.matrixWorld.elements[14]),
                        v.applyMatrix4(s.matrixWorldInverse),
                        v.applyMatrix4(s.projectionMatrix),
                        M.copy(v),
                        E.x = g.x + M.x * x + x - 8,
                        E.y = g.y + M.y * _ + _ - 8,
                        T.containsPoint(E) === !0) {
                            m.activeTexture(f.TEXTURE0),
                            m.bindTexture(f.TEXTURE_2D, null ),
                            m.activeTexture(f.TEXTURE1),
                            m.bindTexture(f.TEXTURE_2D, d),
                            f.copyTexImage2D(f.TEXTURE_2D, 0, f.RGB, E.x, E.y, 16, 16, 0),
                            f.uniform1i(u.renderType, 0),
                            f.uniform2f(u.scale, w.x, w.y),
                            f.uniform3f(u.screenPosition, M.x, M.y, M.z),
                            m.disable(f.BLEND),
                            m.enable(f.DEPTH_TEST),
                            f.drawElements(f.TRIANGLES, 6, f.UNSIGNED_SHORT, 0),
                            m.activeTexture(f.TEXTURE0),
                            m.bindTexture(f.TEXTURE_2D, p),
                            f.copyTexImage2D(f.TEXTURE_2D, 0, f.RGBA, E.x, E.y, 16, 16, 0),
                            f.uniform1i(u.renderType, 1),
                            m.disable(f.DEPTH_TEST),
                            m.activeTexture(f.TEXTURE1),
                            m.bindTexture(f.TEXTURE_2D, d),
                            f.drawElements(f.TRIANGLES, 6, f.UNSIGNED_SHORT, 0),
                            L.positionScreen.copy(M),
                            L.customUpdateCallback ? L.customUpdateCallback(L) : L.updateLensFlares(),
                            f.uniform1i(u.renderType, 2),
                            m.enable(f.BLEND);
                            for (var R = 0, P = L.lensFlares.length; R < P; R++) {
                                var C = L.lensFlares[R];
                                C.opacity > .001 && C.scale > .001 && (M.x = C.x,
                                M.y = C.y,
                                M.z = C.z,
                                b = C.size * C.scale / g.w,
                                w.x = b * y,
                                w.y = b,
                                f.uniform3f(u.screenPosition, M.x, M.y, M.z),
                                f.uniform2f(u.scale, w.x, w.y),
                                f.uniform1f(u.rotation, C.rotation),
                                f.uniform1f(u.opacity, C.opacity),
                                f.uniform3f(u.color, C.color.r, C.color.g, C.color.b),
                                m.setBlending(C.blending, C.blendEquation, C.blendSrc, C.blendDst),
                                t.setTexture2D(C.texture, 1),
                                f.drawElements(f.TRIANGLES, 6, f.UNSIGNED_SHORT, 0))
                            }
                        }
                    }
                    m.enable(f.CULL_FACE),
                    m.enable(f.DEPTH_TEST),
                    m.buffers.depth.setMask(!0),
                    t.resetGLState()
                }
            }
        }
        function J(t, e) {
            function i() {
                var t = new Float32Array([-.5, -.5, 0, 0, .5, -.5, 1, 0, .5, .5, 1, 1, -.5, .5, 0, 1])
                  , e = new Uint16Array([0, 1, 2, 0, 2, 3]);
                o = f.createBuffer(),
                s = f.createBuffer(),
                f.bindBuffer(f.ARRAY_BUFFER, o),
                f.bufferData(f.ARRAY_BUFFER, t, f.STATIC_DRAW),
                f.bindBuffer(f.ELEMENT_ARRAY_BUFFER, s),
                f.bufferData(f.ELEMENT_ARRAY_BUFFER, e, f.STATIC_DRAW),
                l = r(),
                u = {
                    position: f.getAttribLocation(l, "position"),
                    uv: f.getAttribLocation(l, "uv")
                },
                d = {
                    uvOffset: f.getUniformLocation(l, "uvOffset"),
                    uvScale: f.getUniformLocation(l, "uvScale"),
                    rotation: f.getUniformLocation(l, "rotation"),
                    scale: f.getUniformLocation(l, "scale"),
                    color: f.getUniformLocation(l, "color"),
                    map: f.getUniformLocation(l, "map"),
                    opacity: f.getUniformLocation(l, "opacity"),
                    modelViewMatrix: f.getUniformLocation(l, "modelViewMatrix"),
                    projectionMatrix: f.getUniformLocation(l, "projectionMatrix"),
                    fogType: f.getUniformLocation(l, "fogType"),
                    fogDensity: f.getUniformLocation(l, "fogDensity"),
                    fogNear: f.getUniformLocation(l, "fogNear"),
                    fogFar: f.getUniformLocation(l, "fogFar"),
                    fogColor: f.getUniformLocation(l, "fogColor"),
                    alphaTest: f.getUniformLocation(l, "alphaTest")
                };
                var i = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
                i.width = 8,
                i.height = 8;
                var a = i.getContext("2d");
                a.fillStyle = "white",
                a.fillRect(0, 0, 8, 8),
                p = new n(i),
                p.needsUpdate = !0
            }
            function r() {
                var e = f.createProgram()
                  , i = f.createShader(f.VERTEX_SHADER)
                  , n = f.createShader(f.FRAGMENT_SHADER);
                return f.shaderSource(i, ["precision " + t.getPrecision() + " float;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform float rotation;", "uniform vec2 scale;", "uniform vec2 uvOffset;", "uniform vec2 uvScale;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "void main() {", "vUV = uvOffset + uv * uvScale;", "vec2 alignedPosition = position * scale;", "vec2 rotatedPosition;", "rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;", "rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;", "vec4 finalPosition;", "finalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );", "finalPosition.xy += rotatedPosition;", "finalPosition = projectionMatrix * finalPosition;", "gl_Position = finalPosition;", "}"].join("\n")),
                f.shaderSource(n, ["precision " + t.getPrecision() + " float;", "uniform vec3 color;", "uniform sampler2D map;", "uniform float opacity;", "uniform int fogType;", "uniform vec3 fogColor;", "uniform float fogDensity;", "uniform float fogNear;", "uniform float fogFar;", "uniform float alphaTest;", "varying vec2 vUV;", "void main() {", "vec4 texture = texture2D( map, vUV );", "if ( texture.a < alphaTest ) discard;", "gl_FragColor = vec4( color * texture.xyz, texture.a * opacity );", "if ( fogType > 0 ) {", "float depth = gl_FragCoord.z / gl_FragCoord.w;", "float fogFactor = 0.0;", "if ( fogType == 1 ) {", "fogFactor = smoothstep( fogNear, fogFar, depth );", "} else {", "const float LOG2 = 1.442695;", "fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );", "fogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );", "}", "gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );", "}", "}"].join("\n")),
                f.compileShader(i),
                f.compileShader(n),
                f.attachShader(e, i),
                f.attachShader(e, n),
                f.linkProgram(e),
                e
            }
            function a(t, e) {
                return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : e.id - t.id
            }
            var o, s, l, u, d, p, f = t.context, m = t.state, g = new h, v = new c, y = new h;
            this.render = function(n, r) {
                if (0 !== e.length) {
                    void 0 === l && i(),
                    f.useProgram(l),
                    m.initAttributes(),
                    m.enableAttribute(u.position),
                    m.enableAttribute(u.uv),
                    m.disableUnusedAttributes(),
                    m.disable(f.CULL_FACE),
                    m.enable(f.BLEND),
                    f.bindBuffer(f.ARRAY_BUFFER, o),
                    f.vertexAttribPointer(u.position, 2, f.FLOAT, !1, 16, 0),
                    f.vertexAttribPointer(u.uv, 2, f.FLOAT, !1, 16, 8),
                    f.bindBuffer(f.ELEMENT_ARRAY_BUFFER, s),
                    f.uniformMatrix4fv(d.projectionMatrix, !1, r.projectionMatrix.elements),
                    m.activeTexture(f.TEXTURE0),
                    f.uniform1i(d.map, 0);
                    var c = 0
                      , h = 0
                      , x = n.fog;
                    x ? (f.uniform3f(d.fogColor, x.color.r, x.color.g, x.color.b),
                    x.isFog ? (f.uniform1f(d.fogNear, x.near),
                    f.uniform1f(d.fogFar, x.far),
                    f.uniform1i(d.fogType, 1),
                    c = 1,
                    h = 1) : x.isFogExp2 && (f.uniform1f(d.fogDensity, x.density),
                    f.uniform1i(d.fogType, 2),
                    c = 2,
                    h = 2)) : (f.uniform1i(d.fogType, 0),
                    c = 0,
                    h = 0);
                    for (var _ = 0, b = e.length; _ < b; _++) {
                        var w = e[_];
                        w.modelViewMatrix.multiplyMatrices(r.matrixWorldInverse, w.matrixWorld),
                        w.z = -w.modelViewMatrix.elements[14]
                    }
                    e.sort(a);
                    for (var M = [], _ = 0, b = e.length; _ < b; _++) {
                        var w = e[_]
                          , E = w.material;
                        if (E.visible !== !1) {
                            f.uniform1f(d.alphaTest, E.alphaTest),
                            f.uniformMatrix4fv(d.modelViewMatrix, !1, w.modelViewMatrix.elements),
                            w.matrixWorld.decompose(g, v, y),
                            M[0] = y.x,
                            M[1] = y.y;
                            var T = 0;
                            n.fog && E.fog && (T = h),
                            c !== T && (f.uniform1i(d.fogType, T),
                            c = T),
                            null !== E.map ? (f.uniform2f(d.uvOffset, E.map.offset.x, E.map.offset.y),
                            f.uniform2f(d.uvScale, E.map.repeat.x, E.map.repeat.y)) : (f.uniform2f(d.uvOffset, 0, 0),
                            f.uniform2f(d.uvScale, 1, 1)),
                            f.uniform1f(d.opacity, E.opacity),
                            f.uniform3f(d.color, E.color.r, E.color.g, E.color.b),
                            f.uniform1f(d.rotation, E.rotation),
                            f.uniform2fv(d.scale, M),
                            m.setBlending(E.blending, E.blendEquation, E.blendSrc, E.blendDst),
                            m.buffers.depth.setTest(E.depthTest),
                            m.buffers.depth.setMask(E.depthWrite),
                            E.map ? t.setTexture2D(E.map, 0) : t.setTexture2D(p, 0),
                            f.drawElements(f.TRIANGLES, 6, f.UNSIGNED_SHORT, 0)
                        }
                    }
                    m.enable(f.CULL_FACE),
                    t.resetGLState()
                }
            }
        }
        function Q() {
            Object.defineProperty(this, "id", {
                value: Bh++
            }),
            this.uuid = ws.generateUUID(),
            this.name = "",
            this.type = "Material",
            this.fog = !0,
            this.lights = !0,
            this.blending = Ea,
            this.side = ma,
            this.shading = xa,
            this.vertexColors = _a,
            this.opacity = 1,
            this.transparent = !1,
            this.blendSrc = Ba,
            this.blendDst = za,
            this.blendEquation = Ra,
            this.blendSrcAlpha = null ,
            this.blendDstAlpha = null ,
            this.blendEquationAlpha = null ,
            this.depthFunc = Ya,
            this.depthTest = !0,
            this.depthWrite = !0,
            this.clippingPlanes = null ,
            this.clipIntersection = !1,
            this.clipShadows = !1,
            this.colorWrite = !0,
            this.precision = null ,
            this.polygonOffset = !1,
            this.polygonOffsetFactor = 0,
            this.polygonOffsetUnits = 0,
            this.dithering = !1,
            this.alphaTest = 0,
            this.premultipliedAlpha = !1,
            this.overdraw = 0,
            this.visible = !0,
            this.needsUpdate = !0
        }
        function K(t) {
            Q.call(this),
            this.type = "ShaderMaterial",
            this.defines = {},
            this.uniforms = {},
            this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
            this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}",
            this.linewidth = 1,
            this.wireframe = !1,
            this.wireframeLinewidth = 1,
            this.fog = !1,
            this.lights = !1,
            this.clipping = !1,
            this.skinning = !1,
            this.morphTargets = !1,
            this.morphNormals = !1,
            this.extensions = {
                derivatives: !1,
                fragDepth: !1,
                drawBuffers: !1,
                shaderTextureLOD: !1
            },
            this.defaultAttributeValues = {
                color: [1, 1, 1],
                uv: [0, 0],
                uv2: [0, 0]
            },
            this.index0AttributeName = void 0,
            void 0 !== t && (void 0 !== t.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),
            this.setValues(t))
        }
        function $(t) {
            Q.call(this),
            this.type = "MeshDepthMaterial",
            this.depthPacking = _s,
            this.skinning = !1,
            this.morphTargets = !1,
            this.map = null ,
            this.alphaMap = null ,
            this.displacementMap = null ,
            this.displacementScale = 1,
            this.displacementBias = 0,
            this.wireframe = !1,
            this.wireframeLinewidth = 1,
            this.fog = !1,
            this.lights = !1,
            this.setValues(t)
        }
        function tt(t, e) {
            this.min = void 0 !== t ? t : new h(+(1 / 0),+(1 / 0),+(1 / 0)),
            this.max = void 0 !== e ? e : new h(-(1 / 0),-(1 / 0),-(1 / 0))
        }
        function et(t, e) {
            this.center = void 0 !== t ? t : new h,
            this.radius = void 0 !== e ? e : 0
        }
        function it() {
            this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1],
            arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
        }
        function nt(t, e) {
            this.normal = void 0 !== t ? t : new h(1,0,0),
            this.constant = void 0 !== e ? e : 0
        }
        function rt(t, e, i, n, r, a) {
            this.planes = [void 0 !== t ? t : new nt, void 0 !== e ? e : new nt, void 0 !== i ? i : new nt, void 0 !== n ? n : new nt, void 0 !== r ? r : new nt, void 0 !== a ? a : new nt]
        }
        function at(t, e, n, o) {
            function s(e, i, n, r) {
                var a = e.geometry
                  , o = null
                  , s = M
                  , c = e.customDepthMaterial;
                if (n && (s = E,
                c = e.customDistanceMaterial),
                c)
                    o = c;
                else {
                    var h = !1;
                    i.morphTargets && (a && a.isBufferGeometry ? h = a.morphAttributes && a.morphAttributes.position && a.morphAttributes.position.length > 0 : a && a.isGeometry && (h = a.morphTargets && a.morphTargets.length > 0)),
                    e.isSkinnedMesh && i.skinning === !1 && console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:", e);
                    var l = e.isSkinnedMesh && i.skinning
                      , u = 0;
                    h && (u |= _),
                    l && (u |= b),
                    o = s[u]
                }
                if (t.localClippingEnabled && i.clipShadows === !0 && 0 !== i.clippingPlanes.length) {
                    var d = o.uuid
                      , p = i.uuid
                      , f = T[d];
                    void 0 === f && (f = {},
                    T[d] = f);
                    var m = f[p];
                    void 0 === m && (m = o.clone(),
                    f[p] = m),
                    o = m
                }
                o.visible = i.visible,
                o.wireframe = i.wireframe;
                var g = i.side;
                return F.renderSingleSided && g == va && (g = ma),
                F.renderReverseSided && (g === ma ? g = ga : g === ga && (g = ma)),
                o.side = g,
                o.clipShadows = i.clipShadows,
                o.clippingPlanes = i.clippingPlanes,
                o.wireframeLinewidth = i.wireframeLinewidth,
                o.linewidth = i.linewidth,
                n && void 0 !== o.uniforms.lightPos && o.uniforms.lightPos.value.copy(r),
                o
            }
            function c(e, i, r, a) {
                if (e.visible !== !1) {
                    var o = e.layers.test(i.layers);
                    if (o && (e.isMesh || e.isLine || e.isPoints) && e.castShadow && (!e.frustumCulled || p.intersectsObject(e))) {
                        e.modelViewMatrix.multiplyMatrices(r.matrixWorldInverse, e.matrixWorld);
                        var h = n.update(e)
                          , l = e.material;
                        if (Array.isArray(l))
                            for (var u = h.groups, d = 0, f = u.length; d < f; d++) {
                                var m = u[d]
                                  , g = l[m.materialIndex];
                                if (g && g.visible) {
                                    var v = s(e, g, a, x);
                                    t.renderBufferDirect(r, null , h, v, e, m);
                                }
                            }
                        else if (l.visible) {
                            var v = s(e, l, a, x);
                            t.renderBufferDirect(r, null , h, v, e, null )
                        }
                    }
                    for (var y = e.children, _ = 0, b = y.length; _ < b; _++)
                        c(y[_], i, r, a)
                }
            }
            var u = t.context
              , d = t.state
              , p = new rt
              , f = new l
              , m = e.shadows
              , g = new i
              , v = new i(o.maxTextureSize,o.maxTextureSize)
              , y = new h
              , x = new h
              , _ = 1
              , b = 2
              , w = (_ | b) + 1
              , M = new Array(w)
              , E = new Array(w)
              , T = {}
              , S = [new h(1,0,0), new h(-1,0,0), new h(0,0,1), new h(0,0,-1), new h(0,1,0), new h(0,-1,0)]
              , A = [new h(0,1,0), new h(0,1,0), new h(0,1,0), new h(0,1,0), new h(0,0,1), new h(0,0,-1)]
              , L = [new r, new r, new r, new r, new r, new r]
              , R = new $;
            R.depthPacking = bs,
            R.clipping = !0;
            for (var P = Fh.distanceRGBA, C = Us.clone(P.uniforms), I = 0; I !== w; ++I) {
                var U = 0 !== (I & _)
                  , N = 0 !== (I & b)
                  , O = R.clone();
                O.morphTargets = U,
                O.skinning = N,
                M[I] = O;
                var D = new K({
                    defines: {
                        USE_SHADOWMAP: ""
                    },
                    uniforms: C,
                    vertexShader: P.vertexShader,
                    fragmentShader: P.fragmentShader,
                    morphTargets: U,
                    skinning: N,
                    clipping: !0
                });
                E[I] = D
            }
            var F = this;
            this.enabled = !1,
            this.autoUpdate = !0,
            this.needsUpdate = !1,
            this.type = pa,
            this.renderReverseSided = !0,
            this.renderSingleSided = !0,
            this.render = function(e, i) {
                if (F.enabled !== !1 && (F.autoUpdate !== !1 || F.needsUpdate !== !1) && 0 !== m.length) {
                    d.disable(u.BLEND),
                    d.buffers.color.setClear(1, 1, 1, 1),
                    d.buffers.depth.setTest(!0),
                    d.setScissorTest(!1);
                    for (var n, r, o = 0, s = m.length; o < s; o++) {
                        var h = m[o]
                          , l = h.shadow;
                        if (void 0 !== l) {
                            var _ = l.camera
                              , b = l.matrix;
                            if (x.setFromMatrixPosition(h.matrixWorld),
                            _.position.copy(x),
                            g.copy(l.mapSize),
                            g.min(v),
                            h && h.isPointLight) {
                                n = 6,
                                r = !0;
                                var w = g.x
                                  , M = g.y;
                                L[0].set(2 * w, M, w, M),
                                L[1].set(0, M, w, M),
                                L[2].set(3 * w, M, w, M),
                                L[3].set(w, M, w, M),
                                L[4].set(3 * w, 0, w, M),
                                L[5].set(w, 0, w, M),
                                g.x *= 4,
                                g.y *= 2,
                                b.makeTranslation(-x.x, -x.y, -x.z)
                            } else
                                n = 1,
                                r = !1,
                                y.setFromMatrixPosition(h.target.matrixWorld),
                                _.lookAt(y),
                                _.updateMatrixWorld(),
                                _.matrixWorldInverse.getInverse(_.matrixWorld),
                                b.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1),
                                b.multiply(_.projectionMatrix),
                                b.multiply(_.matrixWorldInverse);
                            if (null === l.map) {
                                var E = {
                                    minFilter: xo,
                                    magFilter: xo,
                                    format: zo
                                };
                                l.map = new a(g.x,g.y,E),
                                l.map.texture.name = h.name + ".shadowMap",
                                _.updateProjectionMatrix()
                            }
                            l.isSpotLightShadow && l.update(h);
                            var T = l.map;
                            t.setRenderTarget(T),
                            t.clear();
                            for (var R = 0; R < n; R++) {
                                if (r) {
                                    y.copy(_.position),
                                    y.add(S[R]),
                                    _.up.copy(A[R]),
                                    _.lookAt(y),
                                    _.updateMatrixWorld(),
                                    _.matrixWorldInverse.getInverse(_.matrixWorld);
                                    var P = L[R];
                                    d.viewport(P)
                                }
                                f.multiplyMatrices(_.projectionMatrix, _.matrixWorldInverse),
                                p.setFromMatrix(f),
                                c(e, i, _, r)
                            }
                        } else
                            console.warn("THREE.WebGLShadowMap:", h, "has no shadow.")
                    }
                    var C = t.getClearColor()
                      , I = t.getClearAlpha();
                    t.setClearColor(C, I),
                    F.needsUpdate = !1
                }
            }
        }
        function ot(t, e) {
            this.origin = void 0 !== t ? t : new h,
            this.direction = void 0 !== e ? e : new h
        }
        function st(t, e, i, n) {
            this._x = t || 0,
            this._y = e || 0,
            this._z = i || 0,
            this._order = n || st.DefaultOrder
        }
        function ct() {
            this.mask = 1
        }
        function ht() {
            function t() {
                r.setFromEuler(n, !1)
            }
            function e() {
                n.setFromQuaternion(r, void 0, !1)
            }
            Object.defineProperty(this, "id", {
                value: zh++
            }),
            this.uuid = ws.generateUUID(),
            this.name = "",
            this.type = "Object3D",
            this.parent = null ,
            this.children = [],
            this.up = ht.DefaultUp.clone();
            var i = new h
              , n = new st
              , r = new c
              , a = new h(1,1,1);
            n.onChange(t),
            r.onChange(e),
            Object.defineProperties(this, {
                position: {
                    enumerable: !0,
                    value: i
                },
                rotation: {
                    enumerable: !0,
                    value: n
                },
                quaternion: {
                    enumerable: !0,
                    value: r
                },
                scale: {
                    enumerable: !0,
                    value: a
                },
                modelViewMatrix: {
                    value: new l
                },
                normalMatrix: {
                    value: new it
                }
            }),
            this.matrix = new l,
            this.matrixWorld = new l,
            this.matrixAutoUpdate = ht.DefaultMatrixAutoUpdate,
            this.matrixWorldNeedsUpdate = !1,
            this.layers = new ct,
            this.visible = !0,
            this.castShadow = !1,
            this.receiveShadow = !1,
            this.frustumCulled = !0,
            this.renderOrder = 0,
            this.userData = {},
            this.onBeforeRender = function() {}
            ,
            this.onAfterRender = function() {}
        }
        function lt(t, e) {
            this.start = void 0 !== t ? t : new h,
            this.end = void 0 !== e ? e : new h
        }
        function ut(t, e, i) {
            this.a = void 0 !== t ? t : new h,
            this.b = void 0 !== e ? e : new h,
            this.c = void 0 !== i ? i : new h
        }
        function dt(t, e, i, n, r, a) {
            this.a = t,
            this.b = e,
            this.c = i,
            this.normal = n && n.isVector3 ? n : new h,
            this.vertexNormals = Array.isArray(n) ? n : [],
            this.color = r && r.isColor ? r : new q,
            this.vertexColors = Array.isArray(r) ? r : [],
            this.materialIndex = void 0 !== a ? a : 0
        }
        function pt(t) {
            Q.call(this),
            this.type = "MeshBasicMaterial",
            this.color = new q(16777215),
            this.map = null ,
            this.lightMap = null ,
            this.lightMapIntensity = 1,
            this.aoMap = null ,
            this.aoMapIntensity = 1,
            this.specularMap = null ,
            this.alphaMap = null ,
            this.envMap = null ,
            this.combine = $a,
            this.reflectivity = 1,
            this.refractionRatio = .98,
            this.wireframe = !1,
            this.wireframeLinewidth = 1,
            this.wireframeLinecap = "round",
            this.wireframeLinejoin = "round",
            this.skinning = !1,
            this.morphTargets = !1,
            this.lights = !1,
            this.setValues(t)
        }
        function ft(t, e, i) {
            if (Array.isArray(t))
                throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
            this.uuid = ws.generateUUID(),
            this.array = t,
            this.itemSize = e,
            this.count = void 0 !== t ? t.length / e : 0,
            this.normalized = i === !0,
            this.dynamic = !1,
            this.updateRange = {
                offset: 0,
                count: -1
            },
            this.onUploadCallback = function() {}
            ,
            this.version = 0
        }
        function mt(t, e) {
            ft.call(this, new Int8Array(t), e)
        }
        function gt(t, e) {
            ft.call(this, new Uint8Array(t), e)
        }
        function vt(t, e) {
            ft.call(this, new Uint8ClampedArray(t), e)
        }
        function yt(t, e) {
            ft.call(this, new Int16Array(t), e)
        }
        function xt(t, e) {
            ft.call(this, new Uint16Array(t), e)
        }
        function _t(t, e) {
            ft.call(this, new Int32Array(t), e)
        }
        function bt(t, e) {
            ft.call(this, new Uint32Array(t), e)
        }
        function wt(t, e) {
            ft.call(this, new Float32Array(t), e)
        }
        function Mt(t, e) {
            ft.call(this, new Float64Array(t), e)
        }
        function Et() {
            this.indices = [],
            this.vertices = [],
            this.normals = [],
            this.colors = [],
            this.uvs = [],
            this.uvs2 = [],
            this.groups = [],
            this.morphTargets = {},
            this.skinWeights = [],
            this.skinIndices = [],
            this.boundingBox = null ,
            this.boundingSphere = null ,
            this.verticesNeedUpdate = !1,
            this.normalsNeedUpdate = !1,
            this.colorsNeedUpdate = !1,
            this.uvsNeedUpdate = !1,
            this.groupsNeedUpdate = !1
        }
        function Tt(t) {
            if (0 === t.length)
                return -(1 / 0);
            for (var e = t[0], i = 1, n = t.length; i < n; ++i)
                t[i] > e && (e = t[i]);
            return e
        }
        function St() {
            return Gh++
        }
        function At() {
            Object.defineProperty(this, "id", {
                value: St()
            }),
            this.uuid = ws.generateUUID(),
            this.name = "",
            this.type = "Geometry",
            this.vertices = [],
            this.colors = [],
            this.faces = [],
            this.faceVertexUvs = [[]],
            this.morphTargets = [],
            this.morphNormals = [],
            this.skinWeights = [],
            this.skinIndices = [],
            this.lineDistances = [],
            this.boundingBox = null ,
            this.boundingSphere = null ,
            this.elementsNeedUpdate = !1,
            this.verticesNeedUpdate = !1,
            this.uvsNeedUpdate = !1,
            this.normalsNeedUpdate = !1,
            this.colorsNeedUpdate = !1,
            this.lineDistancesNeedUpdate = !1,
            this.groupsNeedUpdate = !1
        }
        function Lt() {
            Object.defineProperty(this, "id", {
                value: St()
            }),
            this.uuid = ws.generateUUID(),
            this.name = "",
            this.type = "BufferGeometry",
            this.index = null ,
            this.attributes = {},
            this.morphAttributes = {},
            this.groups = [],
            this.boundingBox = null ,
            this.boundingSphere = null ,
            this.drawRange = {
                start: 0,
                count: 1 / 0
            }
        }
        function Rt(t, e) {
            ht.call(this),
            this.type = "Mesh",
            this.geometry = void 0 !== t ? t : new Lt,
            this.material = void 0 !== e ? e : new pt({
                color: 16777215 * Math.random()
            }),
            this.drawMode = hs,
            this.updateMorphTargets()
        }
        function Pt(t, e, i, n, r, a) {
            At.call(this),
            this.type = "BoxGeometry",
            this.parameters = {
                width: t,
                height: e,
                depth: i,
                widthSegments: n,
                heightSegments: r,
                depthSegments: a
            },
            this.fromBufferGeometry(new Ct(t,e,i,n,r,a)),
            this.mergeVertices()
        }
        function Ct(t, e, i, n, r, a) {
            function o(t, e, i, n, r, a, o, m, g, v, y) {
                var x, _, b = a / g, w = o / v, M = a / 2, E = o / 2, T = m / 2, S = g + 1, A = v + 1, L = 0, R = 0, P = new h;
                for (_ = 0; _ < A; _++) {
                    var C = _ * w - E;
                    for (x = 0; x < S; x++) {
                        var I = x * b - M;
                        P[t] = I * n,
                        P[e] = C * r,
                        P[i] = T,
                        l.push(P.x, P.y, P.z),
                        P[t] = 0,
                        P[e] = 0,
                        P[i] = m > 0 ? 1 : -1,
                        u.push(P.x, P.y, P.z),
                        d.push(x / g),
                        d.push(1 - _ / v),
                        L += 1
                    }
                }
                for (_ = 0; _ < v; _++)
                    for (x = 0; x < g; x++) {
                        var U = p + x + S * _
                          , N = p + x + S * (_ + 1)
                          , O = p + (x + 1) + S * (_ + 1)
                          , D = p + (x + 1) + S * _;
                        c.push(U, N, D),
                        c.push(N, O, D),
                        R += 6
                    }
                s.addGroup(f, R, y),
                f += R,
                p += L
            }
            Lt.call(this),
            this.type = "BoxBufferGeometry",
            this.parameters = {
                width: t,
                height: e,
                depth: i,
                widthSegments: n,
                heightSegments: r,
                depthSegments: a
            };
            var s = this;
            n = Math.floor(n) || 1,
            r = Math.floor(r) || 1,
            a = Math.floor(a) || 1;
            var c = []
              , l = []
              , u = []
              , d = []
              , p = 0
              , f = 0;
            o("z", "y", "x", -1, -1, i, e, t, a, r, 0),
            o("z", "y", "x", 1, -1, i, e, -t, a, r, 1),
            o("x", "z", "y", 1, 1, t, i, e, n, a, 2),
            o("x", "z", "y", 1, -1, t, i, -e, n, a, 3),
            o("x", "y", "z", 1, -1, t, e, i, n, r, 4),
            o("x", "y", "z", -1, -1, t, e, -i, n, r, 5),
            this.setIndex(c),
            this.addAttribute("position", new wt(l,3)),
            this.addAttribute("normal", new wt(u,3)),
            this.addAttribute("uv", new wt(d,2))
        }
        function It(t, e, i, n) {
            At.call(this),
            this.type = "PlaneGeometry",
            this.parameters = {
                width: t,
                height: e,
                widthSegments: i,
                heightSegments: n
            },
            this.fromBufferGeometry(new Ut(t,e,i,n)),
            this.mergeVertices()
        }
        function Ut(t, e, i, n) {
            Lt.call(this),
            this.type = "PlaneBufferGeometry",
            this.parameters = {
                width: t,
                height: e,
                widthSegments: i,
                heightSegments: n
            };
            var r, a, o = t / 2, s = e / 2, c = Math.floor(i) || 1, h = Math.floor(n) || 1, l = c + 1, u = h + 1, d = t / c, p = e / h, f = [], m = [], g = [], v = [];
            for (a = 0; a < u; a++) {
                var y = a * p - s;
                for (r = 0; r < l; r++) {
                    var x = r * d - o;
                    m.push(x, -y, 0),
                    g.push(0, 0, 1),
                    v.push(r / c),
                    v.push(1 - a / h)
                }
            }
            for (a = 0; a < h; a++)
                for (r = 0; r < c; r++) {
                    var _ = r + l * a
                      , b = r + l * (a + 1)
                      , w = r + 1 + l * (a + 1)
                      , M = r + 1 + l * a;
                    f.push(_, b, M),
                    f.push(b, w, M)
                }
            this.setIndex(f),
            this.addAttribute("position", new wt(m,3)),
            this.addAttribute("normal", new wt(g,3)),
            this.addAttribute("uv", new wt(v,2))
        }
        function Nt() {
            ht.call(this),
            this.type = "Camera",
            this.matrixWorldInverse = new l,
            this.projectionMatrix = new l
        }
        function Ot(t, e, i, n) {
            Nt.call(this),
            this.type = "PerspectiveCamera",
            this.fov = void 0 !== t ? t : 50,
            this.zoom = 1,
            this.near = void 0 !== i ? i : .1,
            this.far = void 0 !== n ? n : 2e3,
            this.focus = 10,
            this.aspect = void 0 !== e ? e : 1,
            this.view = null ,
            this.filmGauge = 35,
            this.filmOffset = 0,
            this.updateProjectionMatrix()
        }
        function Dt(t, e, i, n, r, a) {
            Nt.call(this),
            this.type = "OrthographicCamera",
            this.zoom = 1,
            this.view = null ,
            this.left = t,
            this.right = e,
            this.top = i,
            this.bottom = n,
            this.near = void 0 !== r ? r : .1,
            this.far = void 0 !== a ? a : 2e3,
            this.updateProjectionMatrix()
        }
        function Ft(t) {
            function e(e, i) {
                var n = e.array
                  , r = e.dynamic ? t.DYNAMIC_DRAW : t.STATIC_DRAW
                  , a = t.createBuffer();
                t.bindBuffer(i, a),
                t.bufferData(i, n, r),
                e.onUploadCallback();
                var o = t.FLOAT;
                return n instanceof Float32Array ? o = t.FLOAT : n instanceof Float64Array ? console.warn("Unsupported data buffer format: Float64Array") : n instanceof Uint16Array ? o = t.UNSIGNED_SHORT : n instanceof Int16Array ? o = t.SHORT : n instanceof Uint32Array ? o = t.UNSIGNED_INT : n instanceof Int32Array ? o = t.INT : n instanceof Int8Array ? o = t.BYTE : n instanceof Uint8Array && (o = t.UNSIGNED_BYTE),
                {
                    buffer: a,
                    type: o,
                    bytesPerElement: n.BYTES_PER_ELEMENT,
                    version: e.version
                }
            }
            function i(e, i, n) {
                var r = i.array
                  , a = i.updateRange;
                t.bindBuffer(n, e),
                i.dynamic === !1 ? t.bufferData(n, r, t.STATIC_DRAW) : a.count === -1 ? t.bufferSubData(n, 0, r) : 0 === a.count ? console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually.") : (t.bufferSubData(n, a.offset * r.BYTES_PER_ELEMENT, r.subarray(a.offset, a.offset + a.count)),
                a.count = 0)
            }
            function n(t) {
                return t.isInterleavedBufferAttribute && (t = t.data),
                o[t.uuid]
            }
            function r(e) {
                var i = o[e.uuid];
                i && (t.deleteBuffer(i.buffer),
                delete o[e.uuid])
            }
            function a(t, n) {
                t.isInterleavedBufferAttribute && (t = t.data);
                var r = o[t.uuid];
                void 0 === r ? o[t.uuid] = e(t, n) : r.version < t.version && (i(r.buffer, t, n),
                r.version = t.version)
            }
            var o = {};
            return {
                get: n,
                remove: r,
                update: a
            }
        }
        function Bt(t, e) {
            return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program && e.program && t.program !== e.program ? t.program.id - e.program.id : t.material.id !== e.material.id ? t.material.id - e.material.id : t.z !== e.z ? t.z - e.z : t.id - e.id
        }
        function zt(t, e) {
            return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e.id
        }
        function Gt() {
            function t() {
                a = -1,
                s = -1
            }
            function e(t, e, i, n, c) {
                var h, l;
                i.transparent ? (h = o,
                l = ++s) : (h = r,
                l = ++a);
                var u = h[l];
                u ? (u.id = t.id,
                u.object = t,
                u.geometry = e,
                u.material = i,
                u.program = i.program,
                u.renderOrder = t.renderOrder,
                u.z = n,
                u.group = c) : (u = {
                    id: t.id,
                    object: t,
                    geometry: e,
                    material: i,
                    program: i.program,
                    renderOrder: t.renderOrder,
                    z: n,
                    group: c
                },
                h.push(u))
            }
            function i() {
                r.length = a + 1,
                o.length = s + 1
            }
            function n() {
                r.sort(Bt),
                o.sort(zt)
            }
            var r = []
              , a = -1
              , o = []
              , s = -1;
            return {
                opaque: r,
                transparent: o,
                init: t,
                push: e,
                finish: i,
                sort: n
            }
        }
        function Ht() {
            function t(t, e) {
                var n = t.id + "," + e.id
                  , r = i[n];
                return void 0 === r && (r = new Gt,
                i[n] = r),
                r
            }
            function e() {
                i = {}
            }
            var i = {};
            return {
                get: t,
                dispose: e
            }
        }
        function Vt(t, e, i) {
            function n(t) {
                s = t
            }
            function r(i) {
                i.array instanceof Uint32Array && e.get("OES_element_index_uint") ? (c = t.UNSIGNED_INT,
                h = 4) : i.array instanceof Uint16Array ? (c = t.UNSIGNED_SHORT,
                h = 2) : (c = t.UNSIGNED_BYTE,
                h = 1)
            }
            function a(e, n) {
                t.drawElements(s, n, c, e * h),
                i.calls++,
                i.vertices += n,
                s === t.TRIANGLES && (i.faces += n / 3)
            }
            function o(n, r, a) {
                var o = e.get("ANGLE_instanced_arrays");
                return null === o ? void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.") : (o.drawElementsInstancedANGLE(s, a, c, r * h, n.maxInstancedCount),
                i.calls++,
                i.vertices += a * n.maxInstancedCount,
                void (s === t.TRIANGLES && (i.faces += n.maxInstancedCount * a / 3)))
            }
            var s, c, h;
            this.setMode = n,
            this.setIndex = r,
            this.render = a,
            this.renderInstances = o
        }
        function kt(t, e, i) {
            function n(t) {
                o = t
            }
            function r(e, n) {
                t.drawArrays(o, e, n),
                i.calls++,
                i.vertices += n,
                o === t.TRIANGLES && (i.faces += n / 3)
            }
            function a(n, r, a) {
                var s = e.get("ANGLE_instanced_arrays");
                if (null === s)
                    return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
                var c = n.attributes.position;
                c.isInterleavedBufferAttribute ? (a = c.data.count,
                s.drawArraysInstancedANGLE(o, 0, a, n.maxInstancedCount)) : s.drawArraysInstancedANGLE(o, r, a, n.maxInstancedCount),
                i.calls++,
                i.vertices += a * n.maxInstancedCount,
                o === t.TRIANGLES && (i.faces += n.maxInstancedCount * a / 3)
            }
            var o;
            this.setMode = n,
            this.render = r,
            this.renderInstances = a
        }
        function jt(t, e, i) {
            function n(t) {
                var r = t.target
                  , a = s[r.id];
                null !== a.index && e.remove(a.index);
                for (var o in a.attributes)
                    e.remove(a.attributes[o]);
                r.removeEventListener("dispose", n),
                delete s[r.id];
                var h = c[r.id];
                h && (e.remove(h),
                delete c[r.id]),
                h = c[a.id],
                h && (e.remove(h),
                delete c[a.id]),
                i.geometries--
            }
            function r(t, e) {
                var r = s[e.id];
                return r ? r : (e.addEventListener("dispose", n),
                e.isBufferGeometry ? r = e : e.isGeometry && (void 0 === e._bufferGeometry && (e._bufferGeometry = (new Lt).setFromObject(t)),
                r = e._bufferGeometry),
                s[e.id] = r,
                i.geometries++,
                r)
            }
            function a(i) {
                var n = i.index
                  , r = i.attributes;
                null !== n && e.update(n, t.ELEMENT_ARRAY_BUFFER);
                for (var a in r)
                    e.update(r[a], t.ARRAY_BUFFER);
                var o = i.morphAttributes;
                for (var a in o)
                    for (var s = o[a], c = 0, h = s.length; c < h; c++)
                        e.update(s[c], t.ARRAY_BUFFER)
            }
            function o(i) {
                var n = c[i.id];
                if (n)
                    return n;
                var r = []
                  , a = i.index
                  , o = i.attributes;
                if (null !== a)
                    for (var s = a.array, h = 0, l = s.length; h < l; h += 3) {
                        var u = s[h + 0]
                          , d = s[h + 1]
                          , p = s[h + 2];
                        r.push(u, d, d, p, p, u)
                    }
                else
                    for (var s = o.position.array, h = 0, l = s.length / 3 - 1; h < l; h += 3) {
                        var u = h + 0
                          , d = h + 1
                          , p = h + 2;
                        r.push(u, d, d, p, p, u)
                    }
                return n = new (Tt(r) > 65535 ? bt : xt)(r,1),
                e.update(n, t.ELEMENT_ARRAY_BUFFER),
                c[i.id] = n,
                n
            }
            var s = {}
              , c = {};
            return {
                get: r,
                update: a,
                getWireframeAttribute: o
            }
        }
        function Wt() {
            var t = {};
            return {
                get: function(e) {
                    if (void 0 !== t[e.id])
                        return t[e.id];
                    var n;
                    switch (e.type) {
                    case "DirectionalLight":
                        n = {
                            direction: new h,
                            color: new q,
                            shadow: !1,
                            shadowBias: 0,
                            shadowRadius: 1,
                            shadowMapSize: new i
                        };
                        break;
                    case "SpotLight":
                        n = {
                            position: new h,
                            direction: new h,
                            color: new q,
                            distance: 0,
                            coneCos: 0,
                            penumbraCos: 0,
                            decay: 0,
                            shadow: !1,
                            shadowBias: 0,
                            shadowRadius: 1,
                            shadowMapSize: new i
                        };
                        break;
                    case "PointLight":
                        n = {
                            position: new h,
                            color: new q,
                            distance: 0,
                            decay: 0,
                            shadow: !1,
                            shadowBias: 0,
                            shadowRadius: 1,
                            shadowMapSize: new i
                        };
                        break;
                    case "HemisphereLight":
                        n = {
                            direction: new h,
                            skyColor: new q,
                            groundColor: new q
                        };
                        break;
                    case "RectAreaLight":
                        n = {
                            color: new q,
                            position: new h,
                            halfWidth: new h,
                            halfHeight: new h
                        }
                    }
                    return t[e.id] = n,
                    n
                }
            }
        }
        function Xt(t, e, i) {
            function n(t) {
                var n = i.frame
                  , r = t.geometry
                  , o = e.get(t, r);
                return a[o.id] !== n && (r.isGeometry && o.updateFromObject(t),
                e.update(o),
                a[o.id] = n),
                o
            }
            function r() {
                a = {}
            }
            var a = {};
            return {
                update: n,
                clear: r
            }
        }
        function qt(t) {
            for (var e = t.split("\n"), i = 0; i < e.length; i++)
                e[i] = i + 1 + ": " + e[i];
            return e.join("\n")
        }
        function Yt(t, e, i) {
            var n = t.createShader(e);
            return t.shaderSource(n, i),
            t.compileShader(n),
            t.getShaderParameter(n, t.COMPILE_STATUS) === !1 && console.error("THREE.WebGLShader: Shader couldn't compile."),
            "" !== t.getShaderInfoLog(n) && console.warn("THREE.WebGLShader: gl.getShaderInfoLog()", e === t.VERTEX_SHADER ? "vertex" : "fragment", t.getShaderInfoLog(n), qt(i)),
            n
        }
        function Zt(t) {
            switch (t) {
            case ds:
                return ["Linear", "( value )"];
            case ps:
                return ["sRGB", "( value )"];
            case ms:
                return ["RGBE", "( value )"];
            case vs:
                return ["RGBM", "( value, 7.0 )"];
            case ys:
                return ["RGBM", "( value, 16.0 )"];
            case xs:
                return ["RGBD", "( value, 256.0 )"];
            case fs:
                return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
            default:
                throw new Error("unsupported encoding: " + t)
            }
        }
        function Jt(t, e) {
            var i = Zt(e);
            return "vec4 " + t + "( vec4 value ) { return " + i[0] + "ToLinear" + i[1] + "; }"
        }
        function Qt(t, e) {
            var i = Zt(e);
            return "vec4 " + t + "( vec4 value ) { return LinearTo" + i[0] + i[1] + "; }"
        }
        function Kt(t, e) {
            var i;
            switch (e) {
            case no:
                i = "Linear";
                break;
            case ro:
                i = "Reinhard";
                break;
            case ao:
                i = "Uncharted2";
                break;
            case oo:
                i = "OptimizedCineon";
                break;
            default:
                throw new Error("unsupported toneMapping: " + e)
            }
            return "vec3 " + t + "( vec3 color ) { return " + i + "ToneMapping( color ); }"
        }
        function $t(t, e, i) {
            t = t || {};
            var n = [t.derivatives || e.envMapCubeUV || e.bumpMap || e.normalMap || e.flatShading ? "#extension GL_OES_standard_derivatives : enable" : "", (t.fragDepth || e.logarithmicDepthBuffer) && i.get("EXT_frag_depth") ? "#extension GL_EXT_frag_depth : enable" : "", t.drawBuffers && i.get("WEBGL_draw_buffers") ? "#extension GL_EXT_draw_buffers : require" : "", (t.shaderTextureLOD || e.envMap) && i.get("EXT_shader_texture_lod") ? "#extension GL_EXT_shader_texture_lod : enable" : ""];
            return n.filter(ie).join("\n")
        }
        function te(t) {
            var e = [];
            for (var i in t) {
                var n = t[i];
                n !== !1 && e.push("#define " + i + " " + n)
            }
            return e.join("\n")
        }
        function ee(t, e, i) {
            for (var n = {}, r = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES), a = 0; a < r; a++) {
                var o = t.getActiveAttrib(e, a)
                  , s = o.name;
                n[s] = t.getAttribLocation(e, s)
            }
            return n
        }
        function ie(t) {
            return "" !== t
        }
        function ne(t, e) {
            return t.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
        }
        function re(t) {
            function e(t, e) {
                var i = Dh[e];
                if (void 0 === i)
                    throw new Error("Can not resolve #include <" + e + ">");
                return re(i)
            }
            var i = /^[ \t]*#include +<([\w\d.]+)>/gm;
            return t.replace(i, e)
        }
        function ae(t) {
            function e(t, e, i, n) {
                for (var r = "", a = parseInt(e); a < parseInt(i); a++)
                    r += n.replace(/\[ i \]/g, "[ " + a + " ]");
                return r
            }
            var i = /for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g;
            return t.replace(i, e)
        }
        function oe(t, e, i, n) {
            var r = t.context
              , a = i.extensions
              , o = i.defines
              , s = i.__webglShader.vertexShader
              , c = i.__webglShader.fragmentShader
              , h = "SHADOWMAP_TYPE_BASIC";
            n.shadowMapType === pa ? h = "SHADOWMAP_TYPE_PCF" : n.shadowMapType === fa && (h = "SHADOWMAP_TYPE_PCF_SOFT");
            var l = "ENVMAP_TYPE_CUBE"
              , u = "ENVMAP_MODE_REFLECTION"
              , d = "ENVMAP_BLENDING_MULTIPLY";
            if (n.envMap) {
                switch (i.envMap.mapping) {
                case co:
                case ho:
                    l = "ENVMAP_TYPE_CUBE";
                    break;
                case fo:
                case mo:
                    l = "ENVMAP_TYPE_CUBE_UV";
                    break;
                case lo:
                case uo:
                    l = "ENVMAP_TYPE_EQUIREC";
                    break;
                case po:
                    l = "ENVMAP_TYPE_SPHERE"
                }
                switch (i.envMap.mapping) {
                case ho:
                case uo:
                    u = "ENVMAP_MODE_REFRACTION"
                }
                switch (i.combine) {
                case $a:
                    d = "ENVMAP_BLENDING_MULTIPLY";
                    break;
                case to:
                    d = "ENVMAP_BLENDING_MIX";
                    break;
                case eo:
                    d = "ENVMAP_BLENDING_ADD"
                }
            }
            var p, f, m = t.gammaFactor > 0 ? t.gammaFactor : 1, g = $t(a, n, t.extensions), v = te(o), y = r.createProgram();
            i.isRawShaderMaterial ? (p = [v, "\n"].filter(ie).join("\n"),
            f = [g, v, "\n"].filter(ie).join("\n")) : (p = ["precision " + n.precision + " float;", "precision " + n.precision + " int;", "#define SHADER_NAME " + i.__webglShader.name, v, n.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + m, "#define MAX_BONES " + n.maxBones, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + u : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.displacementMap && n.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.vertexColors ? "#define USE_COLOR" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.skinning ? "#define USE_SKINNING" : "", n.useVertexTexture ? "#define BONE_TEXTURE" : "", n.morphTargets ? "#define USE_MORPHTARGETS" : "", n.morphNormals && n.flatShading === !1 ? "#define USE_MORPHNORMALS" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", "#define NUM_CLIPPING_PLANES " + n.numClippingPlanes, n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + h : "", n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && t.extensions.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_COLOR", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(ie).join("\n"),
            f = [g, "precision " + n.precision + " float;", "precision " + n.precision + " int;", "#define SHADER_NAME " + i.__webglShader.name, v, n.alphaTest ? "#define ALPHATEST " + n.alphaTest : "", "#define GAMMA_FACTOR " + m, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + l : "", n.envMap ? "#define " + u : "", n.envMap ? "#define " + d : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.vertexColors ? "#define USE_COLOR" : "", n.gradientMap ? "#define USE_GRADIENTMAP" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", "#define NUM_CLIPPING_PLANES " + n.numClippingPlanes, "#define UNION_CLIPPING_PLANES " + (n.numClippingPlanes - n.numClipIntersection), n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + h : "", n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", n.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && t.extensions.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", n.envMap && t.extensions.get("EXT_shader_texture_lod") ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", n.toneMapping !== io ? "#define TONE_MAPPING" : "", n.toneMapping !== io ? Dh.tonemapping_pars_fragment : "", n.toneMapping !== io ? Kt("toneMapping", n.toneMapping) : "", n.dithering ? "#define DITHERING" : "", n.outputEncoding || n.mapEncoding || n.envMapEncoding || n.emissiveMapEncoding ? Dh.encodings_pars_fragment : "", n.mapEncoding ? Jt("mapTexelToLinear", n.mapEncoding) : "", n.envMapEncoding ? Jt("envMapTexelToLinear", n.envMapEncoding) : "", n.emissiveMapEncoding ? Jt("emissiveMapTexelToLinear", n.emissiveMapEncoding) : "", n.outputEncoding ? Qt("linearToOutputTexel", n.outputEncoding) : "", n.depthPacking ? "#define DEPTH_PACKING " + i.depthPacking : "", "\n"].filter(ie).join("\n")),
            s = re(s, n),
            s = ne(s, n),
            c = re(c, n),
            c = ne(c, n),
            i.isShaderMaterial || (s = ae(s),
            c = ae(c));
            var x = p + s
              , _ = f + c
              , b = Yt(r, r.VERTEX_SHADER, x)
              , w = Yt(r, r.FRAGMENT_SHADER, _);
            r.attachShader(y, b),
            r.attachShader(y, w),
            void 0 !== i.index0AttributeName ? r.bindAttribLocation(y, 0, i.index0AttributeName) : n.morphTargets === !0 && r.bindAttribLocation(y, 0, "position"),
            r.linkProgram(y);
            var M = r.getProgramInfoLog(y)
              , E = r.getShaderInfoLog(b)
              , T = r.getShaderInfoLog(w)
              , S = !0
              , A = !0;
            r.getProgramParameter(y, r.LINK_STATUS) === !1 ? (S = !1,
            console.error("THREE.WebGLProgram: shader error: ", r.getError(), "gl.VALIDATE_STATUS", r.getProgramParameter(y, r.VALIDATE_STATUS), "gl.getProgramInfoLog", M, E, T)) : "" !== M ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", M) : "" !== E && "" !== T || (A = !1),
            A && (this.diagnostics = {
                runnable: S,
                material: i,
                programLog: M,
                vertexShader: {
                    log: E,
                    prefix: p
                },
                fragmentShader: {
                    log: T,
                    prefix: f
                }
            }),
            r.deleteShader(b),
            r.deleteShader(w);
            var L;
            this.getUniforms = function() {
                return void 0 === L && (L = new X(r,y,t)),
                L
            }
            ;
            var R;
            return this.getAttributes = function() {
                return void 0 === R && (R = ee(r, y)),
                R
            }
            ,
            this.destroy = function() {
                r.deleteProgram(y),
                this.program = void 0
            }
            ,
            Object.defineProperties(this, {
                uniforms: {
                    get: function() {
                        return console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms()."),
                        this.getUniforms()
                    }
                },
                attributes: {
                    get: function() {
                        return console.warn("THREE.WebGLProgram: .attributes is now .getAttributes()."),
                        this.getAttributes()
                    }
                }
            }),
            this.id = Hh++,
            this.code = e,
            this.usedTimes = 1,
            this.program = y,
            this.vertexShader = b,
            this.fragmentShader = w,
            this
        }
        function se(t, e) {
            function i(t) {
                var i = t.skeleton
                  , n = i.bones;
                if (e.floatVertexTextures)
                    return 1024;
                var r = e.maxVertexUniforms
                  , a = Math.floor((r - 20) / 4)
                  , o = Math.min(a, n.length);
                return o < n.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + n.length + " bones. This GPU supports " + o + "."),
                0) : o
            }
            function n(t, e) {
                var i;
                return t ? t.isTexture ? i = t.encoding : t.isWebGLRenderTarget && (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),
                i = t.texture.encoding) : i = ds,
                i === ds && e && (i = fs),
                i
            }
            var r = []
              , a = {
                MeshDepthMaterial: "depth",
                MeshNormalMaterial: "normal",
                MeshBasicMaterial: "basic",
                MeshLambertMaterial: "lambert",
                MeshPhongMaterial: "phong",
                MeshToonMaterial: "phong",
                MeshStandardMaterial: "physical",
                MeshPhysicalMaterial: "physical",
                LineBasicMaterial: "basic",
                LineDashedMaterial: "dashed",
                PointsMaterial: "points"
            }
              , o = ["precision", "supportsVertexTextures", "map", "mapEncoding", "envMap", "envMapMode", "envMapEncoding", "lightMap", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "displacementMap", "specularMap", "roughnessMap", "metalnessMap", "gradientMap", "alphaMap", "combine", "vertexColors", "fog", "useFog", "fogExp", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "maxMorphTargets", "maxMorphNormals", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "numRectAreaLights", "shadowMapEnabled", "shadowMapType", "toneMapping", "physicallyCorrectLights", "alphaTest", "doubleSided", "flipSided", "numClippingPlanes", "numClipIntersection", "depthPacking", "dithering"];
            this.getParameters = function(r, o, s, c, h, l) {
                var u = a[r.type]
                  , d = l.isSkinnedMesh ? i(l) : 0
                  , p = t.getPrecision();
                null !== r.precision && (p = e.getMaxPrecision(r.precision),
                p !== r.precision && console.warn("THREE.WebGLProgram.getParameters:", r.precision, "not supported, using", p, "instead."));
                var f = t.getRenderTarget()
                  , m = {
                    shaderID: u,
                    precision: p,
                    supportsVertexTextures: e.vertexTextures,
                    outputEncoding: n(f ? f.texture : null , t.gammaOutput),
                    map: !!r.map,
                    mapEncoding: n(r.map, t.gammaInput),
                    envMap: !!r.envMap,
                    envMapMode: r.envMap && r.envMap.mapping,
                    envMapEncoding: n(r.envMap, t.gammaInput),
                    envMapCubeUV: !!r.envMap && (r.envMap.mapping === fo || r.envMap.mapping === mo),
                    lightMap: !!r.lightMap,
                    aoMap: !!r.aoMap,
                    emissiveMap: !!r.emissiveMap,
                    emissiveMapEncoding: n(r.emissiveMap, t.gammaInput),
                    bumpMap: !!r.bumpMap,
                    normalMap: !!r.normalMap,
                    displacementMap: !!r.displacementMap,
                    roughnessMap: !!r.roughnessMap,
                    metalnessMap: !!r.metalnessMap,
                    specularMap: !!r.specularMap,
                    alphaMap: !!r.alphaMap,
                    gradientMap: !!r.gradientMap,
                    combine: r.combine,
                    vertexColors: r.vertexColors,
                    fog: !!s,
                    useFog: r.fog,
                    fogExp: s && s.isFogExp2,
                    flatShading: r.shading === ya,
                    sizeAttenuation: r.sizeAttenuation,
                    logarithmicDepthBuffer: e.logarithmicDepthBuffer,
                    skinning: r.skinning && d > 0,
                    maxBones: d,
                    useVertexTexture: e.floatVertexTextures,
                    morphTargets: r.morphTargets,
                    morphNormals: r.morphNormals,
                    maxMorphTargets: t.maxMorphTargets,
                    maxMorphNormals: t.maxMorphNormals,
                    numDirLights: o.directional.length,
                    numPointLights: o.point.length,
                    numSpotLights: o.spot.length,
                    numRectAreaLights: o.rectArea.length,
                    numHemiLights: o.hemi.length,
                    numClippingPlanes: c,
                    numClipIntersection: h,
                    dithering: r.dithering,
                    shadowMapEnabled: t.shadowMap.enabled && l.receiveShadow && o.shadows.length > 0,
                    shadowMapType: t.shadowMap.type,
                    toneMapping: t.toneMapping,
                    physicallyCorrectLights: t.physicallyCorrectLights,
                    premultipliedAlpha: r.premultipliedAlpha,
                    alphaTest: r.alphaTest,
                    doubleSided: r.side === va,
                    flipSided: r.side === ga,
                    depthPacking: void 0 !== r.depthPacking && r.depthPacking
                };
                return m
            }
            ,
            this.getProgramCode = function(t, e) {
                var i = [];
                if (e.shaderID ? i.push(e.shaderID) : (i.push(t.fragmentShader),
                i.push(t.vertexShader)),
                void 0 !== t.defines)
                    for (var n in t.defines)
                        i.push(n),
                        i.push(t.defines[n]);
                for (var r = 0; r < o.length; r++)
                    i.push(e[o[r]]);
                return i.join()
            }
            ,
            this.acquireProgram = function(e, i, n) {
                for (var a, o = 0, s = r.length; o < s; o++) {
                    var c = r[o];
                    if (c.code === n) {
                        a = c,
                        ++a.usedTimes;
                        break
                    }
                }
                return void 0 === a && (a = new oe(t,n,e,i),
                r.push(a)),
                a
            }
            ,
            this.releaseProgram = function(t) {
                if (0 === --t.usedTimes) {
                    var e = r.indexOf(t);
                    r[e] = r[r.length - 1],
                    r.pop(),
                    t.destroy()
                }
            }
            ,
            this.programs = r
        }
        function ce(t, e, i, n, r, a, o) {
            function s(t, e) {
                if (t.width > e || t.height > e) {
                    var i = e / Math.max(t.width, t.height)
                      , n = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
                    n.width = Math.floor(t.width * i),
                    n.height = Math.floor(t.height * i);
                    var r = n.getContext("2d");
                    return r.drawImage(t, 0, 0, t.width, t.height, 0, 0, n.width, n.height),
                    console.warn("THREE.WebGLRenderer: image is too big (" + t.width + "x" + t.height + "). Resized to " + n.width + "x" + n.height, t),
                    n
                }
                return t
            }
            function c(t) {
                return ws.isPowerOfTwo(t.width) && ws.isPowerOfTwo(t.height)
            }
            function h(t) {
                if (t instanceof HTMLImageElement || t instanceof HTMLCanvasElement) {
                    var e = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
                    e.width = ws.nearestPowerOfTwo(t.width),
                    e.height = ws.nearestPowerOfTwo(t.height);
                    var i = e.getContext("2d");
                    return i.drawImage(t, 0, 0, e.width, e.height),
                    console.warn("THREE.WebGLRenderer: image is not power of two (" + t.width + "x" + t.height + "). Resized to " + e.width + "x" + e.height, t),
                    e
                }
                return t
            }
            function l(t) {
                return t.wrapS !== vo || t.wrapT !== vo || t.minFilter !== xo && t.minFilter !== wo
            }
            function u(e) {
                return e === xo || e === _o || e === bo ? t.NEAREST : t.LINEAR
            }
            function d(t) {
                var e = t.target;
                e.removeEventListener("dispose", d),
                f(e),
                o.textures--
            }
            function p(t) {
                var e = t.target;
                e.removeEventListener("dispose", p),
                m(e),
                o.textures--
            }
            function f(e) {
                var i = n.get(e);
                if (e.image && i.__image__webglTextureCube)
                    t.deleteTexture(i.__image__webglTextureCube);
                else {
                    if (void 0 === i.__webglInit)
                        return;
                    t.deleteTexture(i.__webglTexture)
                }
                n.remove(e)
            }
            function m(e) {
                var i = n.get(e)
                  , r = n.get(e.texture);
                if (e) {
                    if (void 0 !== r.__webglTexture && t.deleteTexture(r.__webglTexture),
                    e.depthTexture && e.depthTexture.dispose(),
                    e.isWebGLRenderTargetCube)
                        for (var a = 0; a < 6; a++)
                            t.deleteFramebuffer(i.__webglFramebuffer[a]),
                            i.__webglDepthbuffer && t.deleteRenderbuffer(i.__webglDepthbuffer[a]);
                    else
                        t.deleteFramebuffer(i.__webglFramebuffer),
                        i.__webglDepthbuffer && t.deleteRenderbuffer(i.__webglDepthbuffer);
                    n.remove(e.texture),
                    n.remove(e)
                }
            }
            function g(e, r) {
                var a = n.get(e);
                if (e.version > 0 && a.__version !== e.version) {
                    var o = e.image;
                    if (void 0 === o)
                        console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined", e);
                    else {
                        if (o.complete !== !1)
                            return void _(a, e, r);
                        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete", e)
                    }
                }
                i.activeTexture(t.TEXTURE0 + r),
                i.bindTexture(t.TEXTURE_2D, a.__webglTexture)
            }
            function v(e, h) {
                var l = n.get(e);
                if (6 === e.image.length)
                    if (e.version > 0 && l.__version !== e.version) {
                        l.__image__webglTextureCube || (e.addEventListener("dispose", d),
                        l.__image__webglTextureCube = t.createTexture(),
                        o.textures++),
                        i.activeTexture(t.TEXTURE0 + h),
                        i.bindTexture(t.TEXTURE_CUBE_MAP, l.__image__webglTextureCube),
                        t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, e.flipY);
                        for (var u = e && e.isCompressedTexture, p = e.image[0] && e.image[0].isDataTexture, f = [], m = 0; m < 6; m++)
                            u || p ? f[m] = p ? e.image[m].image : e.image[m] : f[m] = s(e.image[m], r.maxCubemapSize);
                        var g = f[0]
                          , v = c(g)
                          , y = a(e.format)
                          , _ = a(e.type);
                        x(t.TEXTURE_CUBE_MAP, e, v);
                        for (var m = 0; m < 6; m++)
                            if (u)
                                for (var b, w = f[m].mipmaps, M = 0, E = w.length; M < E; M++)
                                    b = w[M],
                                    e.format !== zo && e.format !== Bo ? i.getCompressedTextureFormats().indexOf(y) > -1 ? i.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + m, M, y, b.width, b.height, 0, b.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + m, M, y, b.width, b.height, 0, y, _, b.data);
                            else
                                p ? i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + m, 0, y, f[m].width, f[m].height, 0, y, _, f[m].data) : i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + m, 0, y, y, _, f[m]);
                        e.generateMipmaps && v && t.generateMipmap(t.TEXTURE_CUBE_MAP),
                        l.__version = e.version,
                        e.onUpdate && e.onUpdate(e)
                    } else
                        i.activeTexture(t.TEXTURE0 + h),
                        i.bindTexture(t.TEXTURE_CUBE_MAP, l.__image__webglTextureCube)
            }
            function y(e, r) {
                i.activeTexture(t.TEXTURE0 + r),
                i.bindTexture(t.TEXTURE_CUBE_MAP, n.get(e).__webglTexture)
            }
            function x(i, o, s) {
                var c;
                if (s ? (t.texParameteri(i, t.TEXTURE_WRAP_S, a(o.wrapS)),
                t.texParameteri(i, t.TEXTURE_WRAP_T, a(o.wrapT)),
                t.texParameteri(i, t.TEXTURE_MAG_FILTER, a(o.magFilter)),
                t.texParameteri(i, t.TEXTURE_MIN_FILTER, a(o.minFilter))) : (t.texParameteri(i, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE),
                t.texParameteri(i, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE),
                o.wrapS === vo && o.wrapT === vo || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.", o),
                t.texParameteri(i, t.TEXTURE_MAG_FILTER, u(o.magFilter)),
                t.texParameteri(i, t.TEXTURE_MIN_FILTER, u(o.minFilter)),
                o.minFilter !== xo && o.minFilter !== wo && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.", o)),
                c = e.get("EXT_texture_filter_anisotropic")) {
                    if (o.type === Co && null === e.get("OES_texture_float_linear"))
                        return;
                    if (o.type === Io && null === e.get("OES_texture_half_float_linear"))
                        return;
                    (o.anisotropy > 1 || n.get(o).__currentAnisotropy) && (t.texParameterf(i, c.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(o.anisotropy, r.getMaxAnisotropy())),
                    n.get(o).__currentAnisotropy = o.anisotropy)
                }
            }
            function _(e, n, u) {
                void 0 === e.__webglInit && (e.__webglInit = !0,
                n.addEventListener("dispose", d),
                e.__webglTexture = t.createTexture(),
                o.textures++),
                i.activeTexture(t.TEXTURE0 + u),
                i.bindTexture(t.TEXTURE_2D, e.__webglTexture),
                t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, n.flipY),
                t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, n.premultiplyAlpha),
                t.pixelStorei(t.UNPACK_ALIGNMENT, n.unpackAlignment);
                var p = s(n.image, r.maxTextureSize);
                l(n) && c(p) === !1 && (p = h(p));
                var f = c(p)
                  , m = a(n.format)
                  , g = a(n.type);
                x(t.TEXTURE_2D, n, f);
                var v, y = n.mipmaps;
                if (n.isDepthTexture) {
                    var _ = t.DEPTH_COMPONENT;
                    if (n.type === Co) {
                        if (!A)
                            throw new Error("Float Depth Texture only supported in WebGL2.0");
                        _ = t.DEPTH_COMPONENT32F
                    } else
                        A && (_ = t.DEPTH_COMPONENT16);
                    n.format === ko && _ === t.DEPTH_COMPONENT && n.type !== Lo && n.type !== Po && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),
                    n.type = Lo,
                    g = a(n.type)),
                    n.format === jo && (_ = t.DEPTH_STENCIL,
                    n.type !== Do && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),
                    n.type = Do,
                    g = a(n.type))),
                    i.texImage2D(t.TEXTURE_2D, 0, _, p.width, p.height, 0, m, g, null )
                } else if (n.isDataTexture)
                    if (y.length > 0 && f) {
                        for (var b = 0, w = y.length; b < w; b++)
                            v = y[b],
                            i.texImage2D(t.TEXTURE_2D, b, m, v.width, v.height, 0, m, g, v.data);
                        n.generateMipmaps = !1
                    } else
                        i.texImage2D(t.TEXTURE_2D, 0, m, p.width, p.height, 0, m, g, p.data);
                else if (n.isCompressedTexture)
                    for (var b = 0, w = y.length; b < w; b++)
                        v = y[b],
                        n.format !== zo && n.format !== Bo ? i.getCompressedTextureFormats().indexOf(m) > -1 ? i.compressedTexImage2D(t.TEXTURE_2D, b, m, v.width, v.height, 0, v.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : i.texImage2D(t.TEXTURE_2D, b, m, v.width, v.height, 0, m, g, v.data);
                else if (y.length > 0 && f) {
                    for (var b = 0, w = y.length; b < w; b++)
                        v = y[b],
                        i.texImage2D(t.TEXTURE_2D, b, m, m, g, v);
                    n.generateMipmaps = !1
                } else
                    i.texImage2D(t.TEXTURE_2D, 0, m, m, g, p);
                n.generateMipmaps && f && t.generateMipmap(t.TEXTURE_2D),
                e.__version = n.version,
                n.onUpdate && n.onUpdate(n)
            }
            function b(e, r, o, s) {
                var c = a(r.texture.format)
                  , h = a(r.texture.type);
                i.texImage2D(s, 0, c, r.width, r.height, 0, c, h, null ),
                t.bindFramebuffer(t.FRAMEBUFFER, e),
                t.framebufferTexture2D(t.FRAMEBUFFER, o, s, n.get(r.texture).__webglTexture, 0),
                t.bindFramebuffer(t.FRAMEBUFFER, null )
            }
            function w(e, i) {
                t.bindRenderbuffer(t.RENDERBUFFER, e),
                i.depthBuffer && !i.stencilBuffer ? (t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_COMPONENT16, i.width, i.height),
                t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_ATTACHMENT, t.RENDERBUFFER, e)) : i.depthBuffer && i.stencilBuffer ? (t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_STENCIL, i.width, i.height),
                t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.RENDERBUFFER, e)) : t.renderbufferStorage(t.RENDERBUFFER, t.RGBA4, i.width, i.height),
                t.bindRenderbuffer(t.RENDERBUFFER, null )
            }
            function M(e, i) {
                var r = i && i.isWebGLRenderTargetCube;
                if (r)
                    throw new Error("Depth Texture with cube render targets is not supported!");
                if (t.bindFramebuffer(t.FRAMEBUFFER, e),
                !i.depthTexture || !i.depthTexture.isDepthTexture)
                    throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
                n.get(i.depthTexture).__webglTexture && i.depthTexture.image.width === i.width && i.depthTexture.image.height === i.height || (i.depthTexture.image.width = i.width,
                i.depthTexture.image.height = i.height,
                i.depthTexture.needsUpdate = !0),
                g(i.depthTexture, 0);
                var a = n.get(i.depthTexture).__webglTexture;
                if (i.depthTexture.format === ko)
                    t.framebufferTexture2D(t.FRAMEBUFFER, t.DEPTH_ATTACHMENT, t.TEXTURE_2D, a, 0);
                else {
                    if (i.depthTexture.format !== jo)
                        throw new Error("Unknown depthTexture format");
                    t.framebufferTexture2D(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.TEXTURE_2D, a, 0)
                }
            }
            function E(e) {
                var i = n.get(e)
                  , r = e.isWebGLRenderTargetCube === !0;
                if (e.depthTexture) {
                    if (r)
                        throw new Error("target.depthTexture not supported in Cube render targets");
                    M(i.__webglFramebuffer, e)
                } else if (r) {
                    i.__webglDepthbuffer = [];
                    for (var a = 0; a < 6; a++)
                        t.bindFramebuffer(t.FRAMEBUFFER, i.__webglFramebuffer[a]),
                        i.__webglDepthbuffer[a] = t.createRenderbuffer(),
                        w(i.__webglDepthbuffer[a], e)
                } else
                    t.bindFramebuffer(t.FRAMEBUFFER, i.__webglFramebuffer),
                    i.__webglDepthbuffer = t.createRenderbuffer(),
                    w(i.__webglDepthbuffer, e);
                t.bindFramebuffer(t.FRAMEBUFFER, null )
            }
            function T(e) {
                var r = n.get(e)
                  , a = n.get(e.texture);
                e.addEventListener("dispose", p),
                a.__webglTexture = t.createTexture(),
                o.textures++;
                var s = e.isWebGLRenderTargetCube === !0
                  , h = c(e);
                if (s) {
                    r.__webglFramebuffer = [];
                    for (var l = 0; l < 6; l++)
                        r.__webglFramebuffer[l] = t.createFramebuffer()
                } else
                    r.__webglFramebuffer = t.createFramebuffer();
                if (s) {
                    i.bindTexture(t.TEXTURE_CUBE_MAP, a.__webglTexture),
                    x(t.TEXTURE_CUBE_MAP, e.texture, h);
                    for (var l = 0; l < 6; l++)
                        b(r.__webglFramebuffer[l], e, t.COLOR_ATTACHMENT0, t.TEXTURE_CUBE_MAP_POSITIVE_X + l);
                    e.texture.generateMipmaps && h && t.generateMipmap(t.TEXTURE_CUBE_MAP),
                    i.bindTexture(t.TEXTURE_CUBE_MAP, null )
                } else
                    i.bindTexture(t.TEXTURE_2D, a.__webglTexture),
                    x(t.TEXTURE_2D, e.texture, h),
                    b(r.__webglFramebuffer, e, t.COLOR_ATTACHMENT0, t.TEXTURE_2D),
                    e.texture.generateMipmaps && h && t.generateMipmap(t.TEXTURE_2D),
                    i.bindTexture(t.TEXTURE_2D, null );
                e.depthBuffer && E(e)
            }
            function S(e) {
                var r = e.texture;
                if (r.generateMipmaps && c(e) && r.minFilter !== xo && r.minFilter !== wo) {
                    var a = e && e.isWebGLRenderTargetCube ? t.TEXTURE_CUBE_MAP : t.TEXTURE_2D
                      , o = n.get(r).__webglTexture;
                    i.bindTexture(a, o),
                    t.generateMipmap(a),
                    i.bindTexture(a, null )
                }
            }
            var A = "undefined" != typeof WebGL2RenderingContext && t instanceof WebGL2RenderingContext;
            this.setTexture2D = g,
            this.setTextureCube = v,
            this.setTextureCubeDynamic = y,
            this.setupRenderTarget = T,
            this.updateRenderTargetMipmap = S
        }
        function he() {
            function t(t) {
                var e = t.uuid
                  , i = n[e];
                return void 0 === i && (i = {},
                n[e] = i),
                i
            }
            function e(t) {
                delete n[t.uuid]
            }
            function i() {
                n = {}
            }
            var n = {};
            return {
                get: t,
                remove: e,
                clear: i
            }
        }
        function le(t, e, i) {
            function n() {
                var e = !1
                  , i = new r
                  , n = null
                  , a = new r;
                return {
                    setMask: function(i) {
                        n === i || e || (t.colorMask(i, i, i, i),
                        n = i)
                    },
                    setLocked: function(t) {
                        e = t
                    },
                    setClear: function(e, n, r, o, s) {
                        s === !0 && (e *= o,
                        n *= o,
                        r *= o),
                        i.set(e, n, r, o),
                        a.equals(i) === !1 && (t.clearColor(e, n, r, o),
                        a.copy(i))
                    },
                    reset: function() {
                        e = !1,
                        n = null ,
                        a.set(0, 0, 0, 1)
                    }
                }
            }
            function a() {
                var e = !1
                  , i = null
                  , n = null
                  , r = null ;
                return {
                    setTest: function(e) {
                        e ? p(t.DEPTH_TEST) : f(t.DEPTH_TEST)
                    },
                    setMask: function(n) {
                        i === n || e || (t.depthMask(n),
                        i = n)
                    },
                    setFunc: function(e) {
                        if (n !== e) {
                            if (e)
                                switch (e) {
                                case Wa:
                                    t.depthFunc(t.NEVER);
                                    break;
                                case Xa:
                                    t.depthFunc(t.ALWAYS);
                                    break;
                                case qa:
                                    t.depthFunc(t.LESS);
                                    break;
                                case Ya:
                                    t.depthFunc(t.LEQUAL);
                                    break;
                                case Za:
                                    t.depthFunc(t.EQUAL);
                                    break;
                                case Ja:
                                    t.depthFunc(t.GEQUAL);
                                    break;
                                case Qa:
                                    t.depthFunc(t.GREATER);
                                    break;
                                case Ka:
                                    t.depthFunc(t.NOTEQUAL);
                                    break;
                                default:
                                    t.depthFunc(t.LEQUAL)
                                }
                            else
                                t.depthFunc(t.LEQUAL);
                            n = e
                        }
                    },
                    setLocked: function(t) {
                        e = t
                    },
                    setClear: function(e) {
                        r !== e && (t.clearDepth(e),
                        r = e)
                    },
                    reset: function() {
                        e = !1,
                        i = null ,
                        n = null ,
                        r = null
                    }
                }
            }
            function o() {
                var e = !1
                  , i = null
                  , n = null
                  , r = null
                  , a = null
                  , o = null
                  , s = null
                  , c = null
                  , h = null ;
                return {
                    setTest: function(e) {
                        e ? p(t.STENCIL_TEST) : f(t.STENCIL_TEST)
                    },
                    setMask: function(n) {
                        i === n || e || (t.stencilMask(n),
                        i = n)
                    },
                    setFunc: function(e, i, o) {
                        n === e && r === i && a === o || (t.stencilFunc(e, i, o),
                        n = e,
                        r = i,
                        a = o)
                    },
                    setOp: function(e, i, n) {
                        o === e && s === i && c === n || (t.stencilOp(e, i, n),
                        o = e,
                        s = i,
                        c = n)
                    },
                    setLocked: function(t) {
                        e = t
                    },
                    setClear: function(e) {
                        h !== e && (t.clearStencil(e),
                        h = e)
                    },
                    reset: function() {
                        e = !1,
                        i = null ,
                        n = null ,
                        r = null ,
                        a = null ,
                        o = null ,
                        s = null ,
                        c = null ,
                        h = null
                    }
                }
            }
            function s(e, i, n) {
                var r = new Uint8Array(4)
                  , a = t.createTexture();
                t.bindTexture(e, a),
                t.texParameteri(e, t.TEXTURE_MIN_FILTER, t.NEAREST),
                t.texParameteri(e, t.TEXTURE_MAG_FILTER, t.NEAREST);
                for (var o = 0; o < n; o++)
                    t.texImage2D(i + o, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, r);
                return a
            }
            function c() {
                C.setClear(0, 0, 0, 1),
                I.setClear(1),
                U.setClear(0),
                p(t.DEPTH_TEST),
                I.setFunc(Ya),
                y(!1),
                x(sa),
                p(t.CULL_FACE),
                p(t.BLEND),
                g(Ea)
            }
            function h() {
                for (var t = 0, e = O.length; t < e; t++)
                    O[t] = 0
            }
            function l(i) {
                if (O[i] = 1,
                0 === D[i] && (t.enableVertexAttribArray(i),
                D[i] = 1),
                0 !== F[i]) {
                    var n = e.get("ANGLE_instanced_arrays");
                    n.vertexAttribDivisorANGLE(i, 0),
                    F[i] = 0
                }
            }
            function u(i, n) {
                if (O[i] = 1,
                0 === D[i] && (t.enableVertexAttribArray(i),
                D[i] = 1),
                F[i] !== n) {
                    var r = e.get("ANGLE_instanced_arrays");
                    r.vertexAttribDivisorANGLE(i, n),
                    F[i] = n
                }
            }
            function d() {
                for (var e = 0, i = D.length; e !== i; ++e)
                    D[e] !== O[e] && (t.disableVertexAttribArray(e),
                    D[e] = 0)
            }
            function p(e) {
                B[e] !== !0 && (t.enable(e),
                B[e] = !0)
            }
            function f(e) {
                B[e] !== !1 && (t.disable(e),
                B[e] = !1)
            }
            function m() {
                if (null === z && (z = [],
                e.get("WEBGL_compressed_texture_pvrtc") || e.get("WEBGL_compressed_texture_s3tc") || e.get("WEBGL_compressed_texture_etc1")))
                    for (var i = t.getParameter(t.COMPRESSED_TEXTURE_FORMATS), n = 0; n < i.length; n++)
                        z.push(i[n]);
                return z
            }
            function g(e, n, r, a, o, s, c, h) {
                e !== Ma ? p(t.BLEND) : f(t.BLEND),
                e === G && h === q || (e === Ta ? h ? (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD),
                t.blendFuncSeparate(t.ONE, t.ONE, t.ONE, t.ONE)) : (t.blendEquation(t.FUNC_ADD),
                t.blendFunc(t.SRC_ALPHA, t.ONE)) : e === Sa ? h ? (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD),
                t.blendFuncSeparate(t.ZERO, t.ZERO, t.ONE_MINUS_SRC_COLOR, t.ONE_MINUS_SRC_ALPHA)) : (t.blendEquation(t.FUNC_ADD),
                t.blendFunc(t.ZERO, t.ONE_MINUS_SRC_COLOR)) : e === Aa ? h ? (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD),
                t.blendFuncSeparate(t.ZERO, t.SRC_COLOR, t.ZERO, t.SRC_ALPHA)) : (t.blendEquation(t.FUNC_ADD),
                t.blendFunc(t.ZERO, t.SRC_COLOR)) : h ? (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD),
                t.blendFuncSeparate(t.ONE, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA)) : (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD),
                t.blendFuncSeparate(t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA)),
                G = e,
                q = h),
                e === La ? (o = o || n,
                s = s || r,
                c = c || a,
                n === H && o === j || (t.blendEquationSeparate(i(n), i(o)),
                H = n,
                j = o),
                r === V && a === k && s === W && c === X || (t.blendFuncSeparate(i(r), i(a), i(s), i(c)),
                V = r,
                k = a,
                W = s,
                X = c)) : (H = null ,
                V = null ,
                k = null ,
                j = null ,
                W = null ,
                X = null )
            }
            function v(e) {
                e.side === va ? f(t.CULL_FACE) : p(t.CULL_FACE),
                y(e.side === ga),
                e.transparent === !0 ? g(e.blending, e.blendEquation, e.blendSrc, e.blendDst, e.blendEquationAlpha, e.blendSrcAlpha, e.blendDstAlpha, e.premultipliedAlpha) : g(Ma),
                I.setFunc(e.depthFunc),
                I.setTest(e.depthTest),
                I.setMask(e.depthWrite),
                C.setMask(e.colorWrite),
                b(e.polygonOffset, e.polygonOffsetFactor, e.polygonOffsetUnits)
            }
            function y(e) {
                Y !== e && (e ? t.frontFace(t.CW) : t.frontFace(t.CCW),
                Y = e)
            }
            function x(e) {
                e !== oa ? (p(t.CULL_FACE),
                e !== Z && (e === sa ? t.cullFace(t.BACK) : e === ca ? t.cullFace(t.FRONT) : t.cullFace(t.FRONT_AND_BACK))) : f(t.CULL_FACE),
                Z = e
            }
            function _(e) {
                e !== J && (it && t.lineWidth(e),
                J = e)
            }
            function b(e, i, n) {
                e ? (p(t.POLYGON_OFFSET_FILL),
                Q === i && K === n || (t.polygonOffset(i, n),
                Q = i,
                K = n)) : f(t.POLYGON_OFFSET_FILL)
            }
            function w() {
                return $
            }
            function M(e) {
                $ = e,
                e ? p(t.SCISSOR_TEST) : f(t.SCISSOR_TEST)
            }
            function E(e) {
                void 0 === e && (e = t.TEXTURE0 + tt - 1),
                nt !== e && (t.activeTexture(e),
                nt = e)
            }
            function T(e, i) {
                null === nt && E();
                var n = rt[nt];
                void 0 === n && (n = {
                    type: void 0,
                    texture: void 0
                },
                rt[nt] = n),
                n.type === e && n.texture === i || (t.bindTexture(e, i || st[e]),
                n.type = e,
                n.texture = i)
            }
            function S() {
                try {
                    t.compressedTexImage2D.apply(t, arguments)
                } catch (t) {
                    console.error(t)
                }
            }
            function A() {
                try {
                    t.texImage2D.apply(t, arguments)
                } catch (t) {
                    console.error(t)
                }
            }
            function L(e) {
                at.equals(e) === !1 && (t.scissor(e.x, e.y, e.z, e.w),
                at.copy(e))
            }
            function R(e) {
                ot.equals(e) === !1 && (t.viewport(e.x, e.y, e.z, e.w),
                ot.copy(e))
            }
            function P() {
                for (var e = 0; e < D.length; e++)
                    1 === D[e] && (t.disableVertexAttribArray(e),
                    D[e] = 0);
                B = {},
                z = null ,
                nt = null ,
                rt = {},
                G = null ,
                Y = null ,
                Z = null ,
                C.reset(),
                I.reset(),
                U.reset()
            }
            var C = new n
              , I = new a
              , U = new o
              , N = t.getParameter(t.MAX_VERTEX_ATTRIBS)
              , O = new Uint8Array(N)
              , D = new Uint8Array(N)
              , F = new Uint8Array(N)
              , B = {}
              , z = null
              , G = null
              , H = null
              , V = null
              , k = null
              , j = null
              , W = null
              , X = null
              , q = !1
              , Y = null
              , Z = null
              , J = null
              , Q = null
              , K = null
              , $ = null
              , tt = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)
              , et = parseFloat(/^WebGL\ ([0-9])/.exec(t.getParameter(t.VERSION))[1])
              , it = parseFloat(et) >= 1
              , nt = null
              , rt = {}
              , at = new r
              , ot = new r
              , st = {};
            return st[t.TEXTURE_2D] = s(t.TEXTURE_2D, t.TEXTURE_2D, 1),
            st[t.TEXTURE_CUBE_MAP] = s(t.TEXTURE_CUBE_MAP, t.TEXTURE_CUBE_MAP_POSITIVE_X, 6),
            {
                buffers: {
                    color: C,
                    depth: I,
                    stencil: U
                },
                init: c,
                initAttributes: h,
                enableAttribute: l,
                enableAttributeAndDivisor: u,
                disableUnusedAttributes: d,
                enable: p,
                disable: f,
                getCompressedTextureFormats: m,
                setBlending: g,
                setMaterial: v,
                setFlipSided: y,
                setCullFace: x,
                setLineWidth: _,
                setPolygonOffset: b,
                getScissorTest: w,
                setScissorTest: M,
                activeTexture: E,
                bindTexture: T,
                compressedTexImage2D: S,
                texImage2D: A,
                scissor: L,
                viewport: R,
                reset: P
            }
        }
        function ue(t, e, i) {
            function n() {
                if (void 0 !== a)
                    return a;
                var i = e.get("EXT_texture_filter_anisotropic");
                return a = null !== i ? t.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
            }
            function r(e) {
                if ("highp" === e) {
                    if (t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_FLOAT).precision > 0 && t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT).precision > 0)
                        return "highp";
                    e = "mediump"
                }
                return "mediump" === e && t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_FLOAT).precision > 0 && t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp"
            }
            var a, o = void 0 !== i.precision ? i.precision : "highp", s = r(o);
            s !== o && (console.warn("THREE.WebGLRenderer:", o, "not supported, using", s, "instead."),
            o = s);
            var c = i.logarithmicDepthBuffer === !0 && !!e.get("EXT_frag_depth")
              , h = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)
              , l = t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS)
              , u = t.getParameter(t.MAX_TEXTURE_SIZE)
              , d = t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE)
              , p = t.getParameter(t.MAX_VERTEX_ATTRIBS)
              , f = t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS)
              , m = t.getParameter(t.MAX_VARYING_VECTORS)
              , g = t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS)
              , v = l > 0
              , y = !!e.get("OES_texture_float")
              , x = v && y;
            return {
                getMaxAnisotropy: n,
                getMaxPrecision: r,
                precision: o,
                logarithmicDepthBuffer: c,
                maxTextures: h,
                maxVertexTextures: l,
                maxTextureSize: u,
                maxCubemapSize: d,
                maxAttributes: p,
                maxVertexUniforms: f,
                maxVaryings: m,
                maxFragmentUniforms: g,
                vertexTextures: v,
                floatFragmentTextures: y,
                floatVertexTextures: x
            }
        }
        function de(t) {
            var e = {};
            return {
                get: function(i) {
                    if (void 0 !== e[i])
                        return e[i];
                    var n;
                    switch (i) {
                    case "WEBGL_depth_texture":
                        n = t.getExtension("WEBGL_depth_texture") || t.getExtension("MOZ_WEBGL_depth_texture") || t.getExtension("WEBKIT_WEBGL_depth_texture");
                        break;
                    case "EXT_texture_filter_anisotropic":
                        n = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                        break;
                    case "WEBGL_compressed_texture_s3tc":
                        n = t.getExtension("WEBGL_compressed_texture_s3tc") || t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                        break;
                    case "WEBGL_compressed_texture_pvrtc":
                        n = t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                        break;
                    case "WEBGL_compressed_texture_etc1":
                        n = t.getExtension("WEBGL_compressed_texture_etc1");
                        break;
                    default:
                        n = t.getExtension(i)
                    }
                    return null === n && console.warn("THREE.WebGLRenderer: " + i + " extension not supported."),
                    e[i] = n,
                    n
                }
            }
        }
        function pe() {
            function t() {
                h.value !== n && (h.value = n,
                h.needsUpdate = r > 0),
                i.numPlanes = r,
                i.numIntersection = 0
            }
            function e(t, e, n, r) {
                var a = null !== t ? t.length : 0
                  , o = null ;
                if (0 !== a) {
                    if (o = h.value,
                    r !== !0 || null === o) {
                        var l = n + 4 * a
                          , u = e.matrixWorldInverse;
                        c.getNormalMatrix(u),
                        (null === o || o.length < l) && (o = new Float32Array(l));
                        for (var d = 0, p = n; d !== a; ++d,
                        p += 4)
                            s.copy(t[d]).applyMatrix4(u, c),
                            s.normal.toArray(o, p),
                            o[p + 3] = s.constant
                    }
                    h.value = o,
                    h.needsUpdate = !0
                }
                return i.numPlanes = a,
                o
            }
            var i = this
              , n = null
              , r = 0
              , a = !1
              , o = !1
              , s = new nt
              , c = new it
              , h = {
                value: null ,
                needsUpdate: !1
            };
            this.uniform = h,
            this.numPlanes = 0,
            this.numIntersection = 0,
            this.init = function(t, i, o) {
                var s = 0 !== t.length || i || 0 !== r || a;
                return a = i,
                n = e(t, o, 0),
                r = t.length,
                s
            }
            ,
            this.beginShadows = function() {
                o = !0,
                e(null )
            }
            ,
            this.endShadows = function() {
                o = !1,
                t()
            }
            ,
            this.setState = function(i, s, c, l, u, d) {
                if (!a || null === i || 0 === i.length || o && !c)
                    o ? e(null ) : t();
                else {
                    var p = o ? 0 : r
                      , f = 4 * p
                      , m = u.clippingState || null ;
                    h.value = m,
                    m = e(i, l, f, d);
                    for (var g = 0; g !== f; ++g)
                        m[g] = n[g];
                    u.clippingState = m,
                    this.numIntersection = s ? this.numPlanes : 0,
                    this.numPlanes += p
                }
            }
        }
        function fe(t) {
            function e() {
                return null === it ? yt : 1
            }
            function i() {
                Jt.init(),
                Jt.scissor(ht.copy(xt).multiplyScalar(yt)),
                Jt.viewport(ut.copy(bt).multiplyScalar(yt)),
                Jt.buffers.color.setClear(ft.r, ft.g, ft.b, mt, V)
            }
            function n() {
                et = null ,
                ct = null ,
                st = "",
                ot = -1,
                Jt.reset()
            }
            function a(t) {
                t.preventDefault(),
                n(),
                i(),
                Qt.clear(),
                ee.clear()
            }
            function o(t) {
                var e = t.target;
                e.removeEventListener("dispose", o),
                s(e)
            }
            function s(t) {
                c(t),
                Qt.remove(t)
            }
            function c(t) {
                var e = Qt.get(t).program;
                t.program = void 0,
                void 0 !== e && ie.releaseProgram(e)
            }
            function d(t, e, i) {
                t.render(function(t) {
                    tt.renderBufferImmediate(t, e, i)
                })
            }
            function p(t, e) {
                return Math.abs(e[0]) - Math.abs(t[0])
            }
            function f(t, e, i, n) {
                if (i && i.isInstancedBufferGeometry && null === Yt.get("ANGLE_instanced_arrays"))
                    return void console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
                void 0 === n && (n = 0),
                Jt.initAttributes();
                var r = i.attributes
                  , a = e.getAttributes()
                  , o = t.defaultAttributeValues;
                for (var s in a) {
                    var c = a[s];
                    if (c >= 0) {
                        var h = r[s];
                        if (void 0 !== h) {
                            var l = h.normalized
                              , u = h.itemSize
                              , d = $t.get(h)
                              , p = d.buffer
                              , f = d.type
                              , m = d.bytesPerElement;
                            if (h.isInterleavedBufferAttribute) {
                                var g = h.data
                                  , v = g.stride
                                  , y = h.offset;
                                g && g.isInstancedInterleavedBuffer ? (Jt.enableAttributeAndDivisor(c, g.meshPerAttribute),
                                void 0 === i.maxInstancedCount && (i.maxInstancedCount = g.meshPerAttribute * g.count)) : Jt.enableAttribute(c),
                                Gt.bindBuffer(Gt.ARRAY_BUFFER, p),
                                Gt.vertexAttribPointer(c, u, f, l, v * m, (n * v + y) * m)
                            } else
                                h.isInstancedBufferAttribute ? (Jt.enableAttributeAndDivisor(c, h.meshPerAttribute),
                                void 0 === i.maxInstancedCount && (i.maxInstancedCount = h.meshPerAttribute * h.count)) : Jt.enableAttribute(c),
                                Gt.bindBuffer(Gt.ARRAY_BUFFER, p),
                                Gt.vertexAttribPointer(c, u, f, l, 0, n * u * m)
                        } else if (void 0 !== o) {
                            var x = o[s];
                            if (void 0 !== x)
                                switch (x.length) {
                                case 2:
                                    Gt.vertexAttrib2fv(c, x);
                                    break;
                                case 3:
                                    Gt.vertexAttrib3fv(c, x);
                                    break;
                                case 4:
                                    Gt.vertexAttrib4fv(c, x);
                                    break;
                                default:
                                    Gt.vertexAttrib1fv(c, x)
                                }
                        }
                    }
                }
                Jt.disableUnusedAttributes()
            }
            function m(t, e, i) {
                if (t.visible) {
                    var n = t.layers.test(e.layers);
                    if (n)
                        if (t.isLight)
                            j.push(t);
                        else if (t.isSprite)
                            t.frustumCulled && !wt.intersectsSprite(t) || Q.push(t);
                        else if (t.isLensFlare)
                            $.push(t);
                        else if (t.isImmediateRenderObject)
                            i && At.setFromMatrixPosition(t.matrixWorld).applyMatrix4(St),
                            W.push(t, null , t.material, At.z, null );
                        else if ((t.isMesh || t.isLine || t.isPoints) && (t.isSkinnedMesh && t.skeleton.update(),
                        !t.frustumCulled || wt.intersectsObject(t))) {
                            i && At.setFromMatrixPosition(t.matrixWorld).applyMatrix4(St);
                            var r = ee.update(t)
                              , a = t.material;
                            if (Array.isArray(a))
                                for (var o = r.groups, s = 0, c = o.length; s < c; s++) {
                                    var h = o[s]
                                      , l = a[h.materialIndex];
                                    l && l.visible && W.push(t, r, l, At.z, h)
                                }
                            else
                                a.visible && W.push(t, r, a, At.z, null )
                        }
                    for (var u = t.children, s = 0, c = u.length; s < c; s++)
                        m(u[s], e, i)
                }
            }
            function g(t, e, i, n) {
                for (var r = 0, a = t.length; r < a; r++) {
                    var o = t[r]
                      , s = o.object
                      , c = o.geometry
                      , h = void 0 === n ? o.material : n
                      , l = o.group;
                    if (s.onBeforeRender(tt, e, i, c, h, l),
                    i.isArrayCamera && i.enabled)
                        for (var u = i.cameras, d = 0, p = u.length; d < p; d++) {
                            var f = u[d]
                              , m = f.bounds;
                            tt.setViewport(m.x * gt * yt, m.y * vt * yt, m.z * gt * yt, m.w * vt * yt),
                            tt.setScissor(m.x * gt * yt, m.y * vt * yt, m.z * gt * yt, m.w * vt * yt),
                            tt.setScissorTest(!0),
                            v(s, e, f, c, h, l)
                        }
                    else
                        v(s, e, i, c, h, l);
                    s.onAfterRender(tt, e, i, c, h, l)
                }
            }
            function v(t, e, i, n, r, a) {
                if (t.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse, t.matrixWorld),
                t.normalMatrix.getNormalMatrix(t.modelViewMatrix),
                t.isImmediateRenderObject) {
                    Jt.setMaterial(r);
                    var o = x(i, e.fog, r, t);
                    st = "",
                    d(t, o, r)
                } else
                    tt.renderBufferDirect(i, e.fog, n, r, t, a)
            }
            function y(t, e, i) {
                var n = Qt.get(t)
                  , r = ie.getParameters(t, Nt, e, Mt.numPlanes, Mt.numIntersection, i)
                  , a = ie.getProgramCode(t, r)
                  , s = n.program
                  , h = !0;
                if (void 0 === s)
                    t.addEventListener("dispose", o);
                else if (s.code !== a)
                    c(t);
                else {
                    if (void 0 !== r.shaderID)
                        return;
                    h = !1
                }
                if (h) {
                    if (r.shaderID) {
                        var l = Fh[r.shaderID];
                        n.__webglShader = {
                            name: t.type,
                            uniforms: Us.clone(l.uniforms),
                            vertexShader: l.vertexShader,
                            fragmentShader: l.fragmentShader
                        }
                    } else
                        n.__webglShader = {
                            name: t.type,
                            uniforms: t.uniforms,
                            vertexShader: t.vertexShader,
                            fragmentShader: t.fragmentShader
                        };
                    t.__webglShader = n.__webglShader,
                    s = ie.acquireProgram(t, r, a),
                    n.program = s,
                    t.program = s
                }
                var u = s.getAttributes();
                if (t.morphTargets) {
                    t.numSupportedMorphTargets = 0;
                    for (var d = 0; d < tt.maxMorphTargets; d++)
                        u["morphTarget" + d] >= 0 && t.numSupportedMorphTargets++
                }
                if (t.morphNormals) {
                    t.numSupportedMorphNormals = 0;
                    for (var d = 0; d < tt.maxMorphNormals; d++)
                        u["morphNormal" + d] >= 0 && t.numSupportedMorphNormals++
                }
                var p = n.__webglShader.uniforms;
                (t.isShaderMaterial || t.isRawShaderMaterial) && t.clipping !== !0 || (n.numClippingPlanes = Mt.numPlanes,
                n.numIntersection = Mt.numIntersection,
                p.clippingPlanes = Mt.uniform),
                n.fog = e,
                n.lightsHash = Nt.hash,
                t.lights && (p.ambientLightColor.value = Nt.ambient,
                p.directionalLights.value = Nt.directional,
                p.spotLights.value = Nt.spot,
                p.rectAreaLights.value = Nt.rectArea,
                p.pointLights.value = Nt.point,
                p.hemisphereLights.value = Nt.hemi,
                p.directionalShadowMap.value = Nt.directionalShadowMap,
                p.directionalShadowMatrix.value = Nt.directionalShadowMatrix,
                p.spotShadowMap.value = Nt.spotShadowMap,
                p.spotShadowMatrix.value = Nt.spotShadowMatrix,
                p.pointShadowMap.value = Nt.pointShadowMap,
                p.pointShadowMatrix.value = Nt.pointShadowMatrix);
                var f = n.program.getUniforms()
                  , m = X.seqWithValue(f.seq, p);
                n.uniformsList = m
            }
            function x(t, e, i, n) {
                dt = 0;
                var r = Qt.get(i);
                if (Et && (Tt || t !== ct)) {
                    var a = t === ct && i.id === ot;
                    Mt.setState(i.clippingPlanes, i.clipIntersection, i.clipShadows, t, r, a)
                }
                i.needsUpdate === !1 && (void 0 === r.program ? i.needsUpdate = !0 : i.fog && r.fog !== e ? i.needsUpdate = !0 : i.lights && r.lightsHash !== Nt.hash ? i.needsUpdate = !0 : void 0 === r.numClippingPlanes || r.numClippingPlanes === Mt.numPlanes && r.numIntersection === Mt.numIntersection || (i.needsUpdate = !0)),
                i.needsUpdate && (y(i, e, n),
                i.needsUpdate = !1);
                var o = !1
                  , s = !1
                  , c = !1
                  , h = r.program
                  , l = h.getUniforms()
                  , d = r.__webglShader.uniforms;
                if (h.id !== et && (Gt.useProgram(h.program),
                et = h.id,
                o = !0,
                s = !0,
                c = !0),
                i.id !== ot && (ot = i.id,
                s = !0),
                o || t !== ct) {
                    if (l.setValue(Gt, "projectionMatrix", t.projectionMatrix),
                    Zt.logarithmicDepthBuffer && l.setValue(Gt, "logDepthBufFC", 2 / (Math.log(t.far + 1) / Math.LN2)),
                    t !== ct && (ct = t,
                    s = !0,
                    c = !0),
                    i.isShaderMaterial || i.isMeshPhongMaterial || i.isMeshStandardMaterial || i.envMap) {
                        var p = l.map.cameraPosition;
                        void 0 !== p && p.setValue(Gt, At.setFromMatrixPosition(t.matrixWorld))
                    }
                    (i.isMeshPhongMaterial || i.isMeshLambertMaterial || i.isMeshBasicMaterial || i.isMeshStandardMaterial || i.isShaderMaterial || i.skinning) && l.setValue(Gt, "viewMatrix", t.matrixWorldInverse),
                    l.setValue(Gt, "toneMappingExposure", tt.toneMappingExposure),
                    l.setValue(Gt, "toneMappingWhitePoint", tt.toneMappingWhitePoint)
                }
                if (i.skinning) {
                    l.setOptional(Gt, n, "bindMatrix"),
                    l.setOptional(Gt, n, "bindMatrixInverse");
                    var f = n.skeleton;
                    if (f) {
                        var m = f.bones;
                        if (Zt.floatVertexTextures) {
                            if (void 0 === f.boneTexture) {
                                var g = Math.sqrt(4 * m.length);
                                g = ws.nextPowerOfTwo(Math.ceil(g)),
                                g = Math.max(g, 4);
                                var v = new Float32Array(g * g * 4);
                                v.set(f.boneMatrices);
                                var x = new u(v,g,g,zo,Co);
                                f.boneMatrices = v,
                                f.boneTexture = x,
                                f.boneTextureSize = g
                            }
                            l.setValue(Gt, "boneTexture", f.boneTexture),
                            l.setValue(Gt, "boneTextureSize", f.boneTextureSize)
                        } else
                            l.setOptional(Gt, f, "boneMatrices")
                    }
                }
                return s && (i.lights && C(d, c),
                e && i.fog && E(d, e),
                (i.isMeshBasicMaterial || i.isMeshLambertMaterial || i.isMeshPhongMaterial || i.isMeshStandardMaterial || i.isMeshNormalMaterial || i.isMeshDepthMaterial) && _(d, i),
                i.isLineBasicMaterial ? b(d, i) : i.isLineDashedMaterial ? (b(d, i),
                w(d, i)) : i.isPointsMaterial ? M(d, i) : i.isMeshLambertMaterial ? T(d, i) : i.isMeshToonMaterial ? A(d, i) : i.isMeshPhongMaterial ? S(d, i) : i.isMeshPhysicalMaterial ? R(d, i) : i.isMeshStandardMaterial ? L(d, i) : i.isMeshDepthMaterial ? i.displacementMap && (d.displacementMap.value = i.displacementMap,
                d.displacementScale.value = i.displacementScale,
                d.displacementBias.value = i.displacementBias) : i.isMeshNormalMaterial && P(d, i),
                void 0 !== d.ltcMat && (d.ltcMat.value = Is.LTC_MAT_TEXTURE),
                void 0 !== d.ltcMag && (d.ltcMag.value = Is.LTC_MAG_TEXTURE),
                X.upload(Gt, r.uniformsList, d, tt)),
                l.setValue(Gt, "modelViewMatrix", n.modelViewMatrix),
                l.setValue(Gt, "normalMatrix", n.normalMatrix),
                l.setValue(Gt, "modelMatrix", n.matrixWorld),
                h
            }
            function _(t, e) {
                t.opacity.value = e.opacity,
                t.diffuse.value = e.color,
                e.emissive && t.emissive.value.copy(e.emissive).multiplyScalar(e.emissiveIntensity),
                t.map.value = e.map,
                t.specularMap.value = e.specularMap,
                t.alphaMap.value = e.alphaMap,
                e.lightMap && (t.lightMap.value = e.lightMap,
                t.lightMapIntensity.value = e.lightMapIntensity),
                e.aoMap && (t.aoMap.value = e.aoMap,
                t.aoMapIntensity.value = e.aoMapIntensity);
                var i;
                if (e.map ? i = e.map : e.specularMap ? i = e.specularMap : e.displacementMap ? i = e.displacementMap : e.normalMap ? i = e.normalMap : e.bumpMap ? i = e.bumpMap : e.roughnessMap ? i = e.roughnessMap : e.metalnessMap ? i = e.metalnessMap : e.alphaMap ? i = e.alphaMap : e.emissiveMap && (i = e.emissiveMap),
                void 0 !== i) {
                    i.isWebGLRenderTarget && (i = i.texture);
                    var n = i.offset
                      , r = i.repeat;
                    t.offsetRepeat.value.set(n.x, n.y, r.x, r.y)
                }
                t.envMap.value = e.envMap,
                t.flipEnvMap.value = e.envMap && e.envMap.isCubeTexture ? -1 : 1,
                t.reflectivity.value = e.reflectivity,
                t.refractionRatio.value = e.refractionRatio
            }
            function b(t, e) {
                t.diffuse.value = e.color,
                t.opacity.value = e.opacity
            }
            function w(t, e) {
                t.dashSize.value = e.dashSize,
                t.totalSize.value = e.dashSize + e.gapSize,
                t.scale.value = e.scale
            }
            function M(t, e) {
                if (t.diffuse.value = e.color,
                t.opacity.value = e.opacity,
                t.size.value = e.size * yt,
                t.scale.value = .5 * vt,
                t.map.value = e.map,
                null !== e.map) {
                    var i = e.map.offset
                      , n = e.map.repeat;
                    t.offsetRepeat.value.set(i.x, i.y, n.x, n.y)
                }
            }
            function E(t, e) {
                t.fogColor.value = e.color,
                e.isFog ? (t.fogNear.value = e.near,
                t.fogFar.value = e.far) : e.isFogExp2 && (t.fogDensity.value = e.density)
            }
            function T(t, e) {
                e.emissiveMap && (t.emissiveMap.value = e.emissiveMap)
            }
            function S(t, e) {
                t.specular.value = e.specular,
                t.shininess.value = Math.max(e.shininess, 1e-4),
                e.emissiveMap && (t.emissiveMap.value = e.emissiveMap),
                e.bumpMap && (t.bumpMap.value = e.bumpMap,
                t.bumpScale.value = e.bumpScale),
                e.normalMap && (t.normalMap.value = e.normalMap,
                t.normalScale.value.copy(e.normalScale)),
                e.displacementMap && (t.displacementMap.value = e.displacementMap,
                t.displacementScale.value = e.displacementScale,
                t.displacementBias.value = e.displacementBias)
            }
            function A(t, e) {
                S(t, e),
                e.gradientMap && (t.gradientMap.value = e.gradientMap)
            }
            function L(t, e) {
                t.roughness.value = e.roughness,
                t.metalness.value = e.metalness,
                e.roughnessMap && (t.roughnessMap.value = e.roughnessMap),
                e.metalnessMap && (t.metalnessMap.value = e.metalnessMap),
                e.emissiveMap && (t.emissiveMap.value = e.emissiveMap),
                e.bumpMap && (t.bumpMap.value = e.bumpMap,
                t.bumpScale.value = e.bumpScale),
                e.normalMap && (t.normalMap.value = e.normalMap,
                t.normalScale.value.copy(e.normalScale)),
                e.displacementMap && (t.displacementMap.value = e.displacementMap,
                t.displacementScale.value = e.displacementScale,
                t.displacementBias.value = e.displacementBias),
                e.envMap && (t.envMapIntensity.value = e.envMapIntensity)
            }
            function R(t, e) {
                t.clearCoat.value = e.clearCoat,
                t.clearCoatRoughness.value = e.clearCoatRoughness,
                L(t, e)
            }
            function P(t, e) {
                e.bumpMap && (t.bumpMap.value = e.bumpMap,
                t.bumpScale.value = e.bumpScale),
                e.normalMap && (t.normalMap.value = e.normalMap,
                t.normalScale.value.copy(e.normalScale)),
                e.displacementMap && (t.displacementMap.value = e.displacementMap,
                t.displacementScale.value = e.displacementScale,
                t.displacementBias.value = e.displacementBias)
            }
            function C(t, e) {
                t.ambientLightColor.needsUpdate = e,
                t.directionalLights.needsUpdate = e,
                t.pointLights.needsUpdate = e,
                t.spotLights.needsUpdate = e,
                t.rectAreaLights.needsUpdate = e,
                t.hemisphereLights.needsUpdate = e
            }
            function I(t) {
                for (var e = 0, i = 0, n = t.length; i < n; i++) {
                    var r = t[i];
                    r.castShadow && (Nt.shadows[e] = r,
                    e++)
                }
                Nt.shadows.length = e
            }
            function U(t, e) {
                var i, n, r, a, o, s, c, h, l = 0, u = 0, d = 0, p = e.matrixWorldInverse, f = 0, m = 0, g = 0, v = 0, y = 0;
                for (i = 0,
                n = t.length; i < n; i++)
                    if (r = t[i],
                    o = r.color,
                    s = r.intensity,
                    c = r.distance,
                    h = r.shadow && r.shadow.map ? r.shadow.map.texture : null ,
                    r.isAmbientLight)
                        l += o.r * s,
                        u += o.g * s,
                        d += o.b * s;
                    else if (r.isDirectionalLight) {
                        var x = ne.get(r);
                        x.color.copy(r.color).multiplyScalar(r.intensity),
                        x.direction.setFromMatrixPosition(r.matrixWorld),
                        At.setFromMatrixPosition(r.target.matrixWorld),
                        x.direction.sub(At),
                        x.direction.transformDirection(p),
                        x.shadow = r.castShadow,
                        r.castShadow && (a = r.shadow,
                        x.shadowBias = a.bias,
                        x.shadowRadius = a.radius,
                        x.shadowMapSize = a.mapSize),
                        Nt.directionalShadowMap[f] = h,
                        Nt.directionalShadowMatrix[f] = r.shadow.matrix,
                        Nt.directional[f] = x,
                        f++
                    } else if (r.isSpotLight) {
                        var x = ne.get(r);
                        x.position.setFromMatrixPosition(r.matrixWorld),
                        x.position.applyMatrix4(p),
                        x.color.copy(o).multiplyScalar(s),
                        x.distance = c,
                        x.direction.setFromMatrixPosition(r.matrixWorld),
                        At.setFromMatrixPosition(r.target.matrixWorld),
                        x.direction.sub(At),
                        x.direction.transformDirection(p),
                        x.coneCos = Math.cos(r.angle),
                        x.penumbraCos = Math.cos(r.angle * (1 - r.penumbra)),
                        x.decay = 0 === r.distance ? 0 : r.decay,
                        x.shadow = r.castShadow,
                        r.castShadow && (a = r.shadow,
                        x.shadowBias = a.bias,
                        x.shadowRadius = a.radius,
                        x.shadowMapSize = a.mapSize),
                        Nt.spotShadowMap[g] = h,
                        Nt.spotShadowMatrix[g] = r.shadow.matrix,
                        Nt.spot[g] = x,
                        g++
                    } else if (r.isRectAreaLight) {
                        var x = ne.get(r);
                        x.color.copy(o).multiplyScalar(s / (r.width * r.height)),
                        x.position.setFromMatrixPosition(r.matrixWorld),
                        x.position.applyMatrix4(p),
                        It.identity(),
                        Pt.copy(r.matrixWorld),
                        Pt.premultiply(p),
                        It.extractRotation(Pt),
                        x.halfWidth.set(.5 * r.width, 0, 0),
                        x.halfHeight.set(0, .5 * r.height, 0),
                        x.halfWidth.applyMatrix4(It),
                        x.halfHeight.applyMatrix4(It),
                        Nt.rectArea[v] = x,
                        v++
                    } else if (r.isPointLight) {
                        var x = ne.get(r);
                        x.position.setFromMatrixPosition(r.matrixWorld),
                        x.position.applyMatrix4(p),
                        x.color.copy(r.color).multiplyScalar(r.intensity),
                        x.distance = r.distance,
                        x.decay = 0 === r.distance ? 0 : r.decay,
                        x.shadow = r.castShadow,
                        r.castShadow && (a = r.shadow,
                        x.shadowBias = a.bias,
                        x.shadowRadius = a.radius,
                        x.shadowMapSize = a.mapSize),
                        Nt.pointShadowMap[m] = h,
                        Nt.pointShadowMatrix[m] = r.shadow.matrix,
                        Nt.point[m] = x,
                        m++
                    } else if (r.isHemisphereLight) {
                        var x = ne.get(r);
                        x.direction.setFromMatrixPosition(r.matrixWorld),
                        x.direction.transformDirection(p),
                        x.direction.normalize(),
                        x.skyColor.copy(r.color).multiplyScalar(s),
                        x.groundColor.copy(r.groundColor).multiplyScalar(s),
                        Nt.hemi[y] = x,
                        y++
                    }
                Nt.ambient[0] = l,
                Nt.ambient[1] = u,
                Nt.ambient[2] = d,
                Nt.directional.length = f,
                Nt.spot.length = g,
                Nt.rectArea.length = v,
                Nt.point.length = m,
                Nt.hemi.length = y,
                Nt.hash = f + "," + m + "," + g + "," + v + "," + y + "," + Nt.shadows.length
            }
            function N() {
                var t = dt;
                return t >= Zt.maxTextures && console.warn("WebGLRenderer: trying to use " + t + " texture units while this GPU supports only " + Zt.maxTextures),
                dt += 1,
                t
            }
            function O(t) {
                var e;
                if (t === go)
                    return Gt.REPEAT;
                if (t === vo)
                    return Gt.CLAMP_TO_EDGE;
                if (t === yo)
                    return Gt.MIRRORED_REPEAT;
                if (t === xo)
                    return Gt.NEAREST;
                if (t === _o)
                    return Gt.NEAREST_MIPMAP_NEAREST;
                if (t === bo)
                    return Gt.NEAREST_MIPMAP_LINEAR;
                if (t === wo)
                    return Gt.LINEAR;
                if (t === Mo)
                    return Gt.LINEAR_MIPMAP_NEAREST;
                if (t === Eo)
                    return Gt.LINEAR_MIPMAP_LINEAR;
                if (t === To)
                    return Gt.UNSIGNED_BYTE;
                if (t === Uo)
                    return Gt.UNSIGNED_SHORT_4_4_4_4;
                if (t === No)
                    return Gt.UNSIGNED_SHORT_5_5_5_1;
                if (t === Oo)
                    return Gt.UNSIGNED_SHORT_5_6_5;
                if (t === So)
                    return Gt.BYTE;
                if (t === Ao)
                    return Gt.SHORT;
                if (t === Lo)
                    return Gt.UNSIGNED_SHORT;
                if (t === Ro)
                    return Gt.INT;
                if (t === Po)
                    return Gt.UNSIGNED_INT;
                if (t === Co)
                    return Gt.FLOAT;
                if (t === Io && (e = Yt.get("OES_texture_half_float"),
                null !== e))
                    return e.HALF_FLOAT_OES;
                if (t === Fo)
                    return Gt.ALPHA;
                if (t === Bo)
                    return Gt.RGB;
                if (t === zo)
                    return Gt.RGBA;
                if (t === Go)
                    return Gt.LUMINANCE;
                if (t === Ho)
                    return Gt.LUMINANCE_ALPHA;
                if (t === ko)
                    return Gt.DEPTH_COMPONENT;
                if (t === jo)
                    return Gt.DEPTH_STENCIL;
                if (t === Ra)
                    return Gt.FUNC_ADD;
                if (t === Pa)
                    return Gt.FUNC_SUBTRACT;
                if (t === Ca)
                    return Gt.FUNC_REVERSE_SUBTRACT;
                if (t === Na)
                    return Gt.ZERO;
                if (t === Oa)
                    return Gt.ONE;
                if (t === Da)
                    return Gt.SRC_COLOR;
                if (t === Fa)
                    return Gt.ONE_MINUS_SRC_COLOR;
                if (t === Ba)
                    return Gt.SRC_ALPHA;
                if (t === za)
                    return Gt.ONE_MINUS_SRC_ALPHA;
                if (t === Ga)
                    return Gt.DST_ALPHA;
                if (t === Ha)
                    return Gt.ONE_MINUS_DST_ALPHA;
                if (t === Va)
                    return Gt.DST_COLOR;
                if (t === ka)
                    return Gt.ONE_MINUS_DST_COLOR;
                if (t === ja)
                    return Gt.SRC_ALPHA_SATURATE;
                if ((t === Wo || t === Xo || t === qo || t === Yo) && (e = Yt.get("WEBGL_compressed_texture_s3tc"),
                null !== e)) {
                    if (t === Wo)
                        return e.COMPRESSED_RGB_S3TC_DXT1_EXT;
                    if (t === Xo)
                        return e.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                    if (t === qo)
                        return e.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                    if (t === Yo)
                        return e.COMPRESSED_RGBA_S3TC_DXT5_EXT
                }
                if ((t === Zo || t === Jo || t === Qo || t === Ko) && (e = Yt.get("WEBGL_compressed_texture_pvrtc"),
                null !== e)) {
                    if (t === Zo)
                        return e.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                    if (t === Jo)
                        return e.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                    if (t === Qo)
                        return e.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                    if (t === Ko)
                        return e.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
                }
                if (t === $o && (e = Yt.get("WEBGL_compressed_texture_etc1"),
                null !== e))
                    return e.COMPRESSED_RGB_ETC1_WEBGL;
                if ((t === Ia || t === Ua) && (e = Yt.get("EXT_blend_minmax"),
                null !== e)) {
                    if (t === Ia)
                        return e.MIN_EXT;
                    if (t === Ua)
                        return e.MAX_EXT
                }
                return t === Do && (e = Yt.get("WEBGL_depth_texture"),
                null !== e) ? e.UNSIGNED_INT_24_8_WEBGL : 0
            }
            console.log("THREE.WebGLRenderer", ra),
            t = t || {};
            var D = void 0 !== t.canvas ? t.canvas : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")
              , F = void 0 !== t.context ? t.context : null
              , B = void 0 !== t.alpha && t.alpha
              , z = void 0 === t.depth || t.depth
              , G = void 0 === t.stencil || t.stencil
              , H = void 0 !== t.antialias && t.antialias
              , V = void 0 === t.premultipliedAlpha || t.premultipliedAlpha
              , k = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer
              , j = []
              , W = null
              , Y = new Float32Array(8)
              , Q = []
              , $ = [];
            this.domElement = D,
            this.context = null ,
            this.autoClear = !0,
            this.autoClearColor = !0,
            this.autoClearDepth = !0,
            this.autoClearStencil = !0,
            this.sortObjects = !0,
            this.clippingPlanes = [],
            this.localClippingEnabled = !1,
            this.gammaFactor = 2,
            this.gammaInput = !1,
            this.gammaOutput = !1,
            this.physicallyCorrectLights = !1,
            this.toneMapping = no,
            this.toneMappingExposure = 1,
            this.toneMappingWhitePoint = 1,
            this.maxMorphTargets = 8,
            this.maxMorphNormals = 4;
            var tt = this
              , et = null
              , it = null
              , nt = null
              , ot = -1
              , st = ""
              , ct = null
              , ht = new r
              , lt = null
              , ut = new r
              , dt = 0
              , ft = new q(0)
              , mt = 0
              , gt = D.width
              , vt = D.height
              , yt = 1
              , xt = new r(0,0,gt,vt)
              , _t = !1
              , bt = new r(0,0,gt,vt)
              , wt = new rt
              , Mt = new pe
              , Et = !1
              , Tt = !1
              , St = new l
              , At = new h
              , Pt = new l
              , It = new l
              , Nt = {
                hash: "",
                ambient: [0, 0, 0],
                directional: [],
                directionalShadowMap: [],
                directionalShadowMatrix: [],
                spot: [],
                spotShadowMap: [],
                spotShadowMatrix: [],
                rectArea: [],
                point: [],
                pointShadowMap: [],
                pointShadowMatrix: [],
                hemi: [],
                shadows: []
            }
              , Bt = {
                geometries: 0,
                textures: 0
            }
              , zt = {
                frame: 0,
                calls: 0,
                vertices: 0,
                faces: 0,
                points: 0
            };
            this.info = {
                render: zt,
                memory: Bt,
                programs: null
            };
            var Gt;
            try {
                var qt = {
                    alpha: B,
                    depth: z,
                    stencil: G,
                    antialias: H,
                    premultipliedAlpha: V,
                    preserveDrawingBuffer: k
                };
                if (Gt = F || D.getContext("webgl", qt) || D.getContext("experimental-webgl", qt),
                null === Gt)
                    throw null !== D.getContext("webgl") ? "Error creating WebGL context with your selected attributes." : "Error creating WebGL context.";
                void 0 === Gt.getShaderPrecisionFormat && (Gt.getShaderPrecisionFormat = function() {
                    return {
                        rangeMin: 1,
                        rangeMax: 1,
                        precision: 1
                    }
                }
                ),
                D.addEventListener("webglcontextlost", a, !1)
            } catch (t) {
                console.error("THREE.WebGLRenderer: " + t)
            }
            var Yt = new de(Gt);
            Yt.get("WEBGL_depth_texture"),
            Yt.get("OES_texture_float"),
            Yt.get("OES_texture_float_linear"),
            Yt.get("OES_texture_half_float"),
            Yt.get("OES_texture_half_float_linear"),
            Yt.get("OES_standard_derivatives"),
            Yt.get("ANGLE_instanced_arrays"),
            Yt.get("OES_element_index_uint") && (Lt.MaxIndex = 4294967296);
            var Zt = new ue(Gt,Yt,t)
              , Jt = new le(Gt,Yt,O)
              , Qt = new he
              , Kt = new ce(Gt,Yt,Jt,Qt,Zt,O,Bt)
              , $t = new Ft(Gt)
              , te = new jt(Gt,$t,Bt)
              , ee = new Xt(Gt,te,zt)
              , ie = new se(this,Zt)
              , ne = new Wt
              , re = new Ht;
            this.info.programs = ie.programs;
            var ae, oe, fe, me, ge = new kt(Gt,Yt,zt), ve = new Vt(Gt,Yt,zt);
            i(),
            this.context = Gt,
            this.capabilities = Zt,
            this.extensions = Yt,
            this.properties = Qt,
            this.state = Jt;
            var ye = new at(this,Nt,ee,Zt);
            this.shadowMap = ye;
            var xe = new J(this,Q)
              , _e = new Z(this,$);
            this.getContext = function() {
                return Gt
            }
            ,
            this.getContextAttributes = function() {
                return Gt.getContextAttributes()
            }
            ,
            this.forceContextLoss = function() {
                var t = Yt.get("WEBGL_lose_context");
                t && t.loseContext()
            }
            ,
            this.getMaxAnisotropy = function() {
                return Zt.getMaxAnisotropy()
            }
            ,
            this.getPrecision = function() {
                return Zt.precision
            }
            ,
            this.getPixelRatio = function() {
                return yt
            }
            ,
            this.setPixelRatio = function(t) {
                void 0 !== t && (yt = t,
                this.setSize(bt.z, bt.w, !1))
            }
            ,
            this.getSize = function() {
                return {
                    width: gt,
                    height: vt
                }
            }
            ,
            this.setSize = function(t, e, i) {
                gt = t,
                vt = e,
                D.width = t * yt,
                D.height = e * yt,
                i !== !1 && (D.style.width = t + "px",
                D.style.height = e + "px"),
                this.setViewport(0, 0, t, e)
            }
            ,
            this.setViewport = function(t, e, i, n) {
                Jt.viewport(bt.set(t, e, i, n))
            }
            ,
            this.setScissor = function(t, e, i, n) {
                Jt.scissor(xt.set(t, e, i, n))
            }
            ,
            this.setScissorTest = function(t) {
                Jt.setScissorTest(_t = t)
            }
            ,
            this.getClearColor = function() {
                return ft
            }
            ,
            this.setClearColor = function(t, e) {
                ft.set(t),
                mt = void 0 !== e ? e : 1,
                Jt.buffers.color.setClear(ft.r, ft.g, ft.b, mt, V)
            }
            ,
            this.getClearAlpha = function() {
                return mt
            }
            ,
            this.setClearAlpha = function(t) {
                mt = t,
                Jt.buffers.color.setClear(ft.r, ft.g, ft.b, mt, V)
            }
            ,
            this.clear = function(t, e, i) {
                var n = 0;
                (void 0 === t || t) && (n |= Gt.COLOR_BUFFER_BIT),
                (void 0 === e || e) && (n |= Gt.DEPTH_BUFFER_BIT),
                (void 0 === i || i) && (n |= Gt.STENCIL_BUFFER_BIT),
                Gt.clear(n)
            }
            ,
            this.clearColor = function() {
                this.clear(!0, !1, !1)
            }
            ,
            this.clearDepth = function() {
                this.clear(!1, !0, !1)
            }
            ,
            this.clearStencil = function() {
                this.clear(!1, !1, !0)
            }
            ,
            this.clearTarget = function(t, e, i, n) {
                this.setRenderTarget(t),
                this.clear(e, i, n)
            }
            ,
            this.resetGLState = n,
            this.dispose = function() {
                D.removeEventListener("webglcontextlost", a, !1),
                re.dispose()
            }
            ,
            this.renderBufferImmediate = function(t, e, i) {
                Jt.initAttributes();
                var n = Qt.get(t);
                t.hasPositions && !n.position && (n.position = Gt.createBuffer()),
                t.hasNormals && !n.normal && (n.normal = Gt.createBuffer()),
                t.hasUvs && !n.uv && (n.uv = Gt.createBuffer()),
                t.hasColors && !n.color && (n.color = Gt.createBuffer());
                var r = e.getAttributes();
                if (t.hasPositions && (Gt.bindBuffer(Gt.ARRAY_BUFFER, n.position),
                Gt.bufferData(Gt.ARRAY_BUFFER, t.positionArray, Gt.DYNAMIC_DRAW),
                Jt.enableAttribute(r.position),
                Gt.vertexAttribPointer(r.position, 3, Gt.FLOAT, !1, 0, 0)),
                t.hasNormals) {
                    if (Gt.bindBuffer(Gt.ARRAY_BUFFER, n.normal),
                    !i.isMeshPhongMaterial && !i.isMeshStandardMaterial && !i.isMeshNormalMaterial && i.shading === ya)
                        for (var a = 0, o = 3 * t.count; a < o; a += 9) {
                            var s = t.normalArray
                              , c = (s[a + 0] + s[a + 3] + s[a + 6]) / 3
                              , h = (s[a + 1] + s[a + 4] + s[a + 7]) / 3
                              , l = (s[a + 2] + s[a + 5] + s[a + 8]) / 3;
                            s[a + 0] = c,
                            s[a + 1] = h,
                            s[a + 2] = l,
                            s[a + 3] = c,
                            s[a + 4] = h,
                            s[a + 5] = l,
                            s[a + 6] = c,
                            s[a + 7] = h,
                            s[a + 8] = l
                        }
                    Gt.bufferData(Gt.ARRAY_BUFFER, t.normalArray, Gt.DYNAMIC_DRAW),
                    Jt.enableAttribute(r.normal),
                    Gt.vertexAttribPointer(r.normal, 3, Gt.FLOAT, !1, 0, 0)
                }
                t.hasUvs && i.map && (Gt.bindBuffer(Gt.ARRAY_BUFFER, n.uv),
                Gt.bufferData(Gt.ARRAY_BUFFER, t.uvArray, Gt.DYNAMIC_DRAW),
                Jt.enableAttribute(r.uv),
                Gt.vertexAttribPointer($t.uv, 2, Gt.FLOAT, !1, 0, 0)),
                t.hasColors && i.vertexColors !== _a && (Gt.bindBuffer(Gt.ARRAY_BUFFER, n.color),
                Gt.bufferData(Gt.ARRAY_BUFFER, t.colorArray, Gt.DYNAMIC_DRAW),
                Jt.enableAttribute(r.color),
                Gt.vertexAttribPointer(r.color, 3, Gt.FLOAT, !1, 0, 0)),
                Jt.disableUnusedAttributes(),
                Gt.drawArrays(Gt.TRIANGLES, 0, t.count),
                t.count = 0
            }
            ,
            this.renderBufferDirect = function(t, i, n, r, a, o) {
                Jt.setMaterial(r);
                var s = x(t, i, r, a)
                  , c = n.id + "_" + s.id + "_" + (r.wireframe === !0)
                  , h = !1;
                c !== st && (st = c,
                h = !0);
                var l = a.morphTargetInfluences;
                if (void 0 !== l) {
                    for (var u = [], d = 0, m = l.length; d < m; d++) {
                        var g = l[d];
                        u.push([g, d])
                    }
                    u.sort(p),
                    u.length > 8 && (u.length = 8);
                    for (var v = n.morphAttributes, d = 0, m = u.length; d < m; d++) {
                        var g = u[d];
                        if (Y[d] = g[0],
                        0 !== g[0]) {
                            var y = g[1];
                            r.morphTargets === !0 && v.position && n.addAttribute("morphTarget" + d, v.position[y]),
                            r.morphNormals === !0 && v.normal && n.addAttribute("morphNormal" + d, v.normal[y])
                        } else
                            r.morphTargets === !0 && n.removeAttribute("morphTarget" + d),
                            r.morphNormals === !0 && n.removeAttribute("morphNormal" + d)
                    }
                    for (var d = u.length, _ = Y.length; d < _; d++)
                        Y[d] = 0;
                    s.getUniforms().setValue(Gt, "morphTargetInfluences", Y),
                    h = !0
                }
                var y = n.index
                  , b = n.attributes.position
                  , w = 1;
                r.wireframe === !0 && (y = te.getWireframeAttribute(n),
                w = 2);
                var M = ge;
                null !== y && (M = ve,
                M.setIndex(y)),
                h && (f(r, s, n),
                null !== y && Gt.bindBuffer(Gt.ELEMENT_ARRAY_BUFFER, $t.get(y).buffer));
                var E = 0;
                null !== y ? E = y.count : void 0 !== b && (E = b.count);
                var T = n.drawRange.start * w
                  , S = n.drawRange.count * w
                  , A = null !== o ? o.start * w : 0
                  , L = null !== o ? o.count * w : 1 / 0
                  , R = Math.max(T, A)
                  , P = Math.min(E, T + S, A + L) - 1
                  , C = Math.max(0, P - R + 1);
                if (0 !== C) {
                    if (a.isMesh)
                        if (r.wireframe === !0)
                            Jt.setLineWidth(r.wireframeLinewidth * e()),
                            M.setMode(Gt.LINES);
                        else
                            switch (a.drawMode) {
                            case hs:
                                M.setMode(Gt.TRIANGLES);
                                break;
                            case ls:
                                M.setMode(Gt.TRIANGLE_STRIP);
                                break;
                            case us:
                                M.setMode(Gt.TRIANGLE_FAN)
                            }
                    else if (a.isLine) {
                        var I = r.linewidth;
                        void 0 === I && (I = 1),
                        Jt.setLineWidth(I * e()),
                        a.isLineSegments ? M.setMode(Gt.LINES) : a.isLineLoop ? M.setMode(Gt.LINE_LOOP) : M.setMode(Gt.LINE_STRIP)
                    } else
                        a.isPoints && M.setMode(Gt.POINTS);
                    n && n.isInstancedBufferGeometry ? n.maxInstancedCount > 0 && M.renderInstances(n, R, C) : M.render(R, C)
                }
            }
            ,
            this.compile = function(t, e) {
                j = [],
                t.traverse(function(t) {
                    t.isLight && j.push(t)
                }),
                U(j, e),
                t.traverse(function(e) {
                    if (e.material)
                        if (Array.isArray(e.material))
                            for (var i = 0; i < e.material.length; i++)
                                y(e.material[i], t.fog, e);
                        else
                            y(e.material, t.fog, e)
                })
            }
            ,
            this.render = function(t, e, i, n) {
                if (void 0 !== e && e.isCamera !== !0)
                    return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
                st = "",
                ot = -1,
                ct = null ,
                t.autoUpdate === !0 && t.updateMatrixWorld(),
                e.onBeforeRender(tt),
                null === e.parent && e.updateMatrixWorld(),
                e.matrixWorldInverse.getInverse(e.matrixWorld),
                St.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
                wt.setFromMatrix(St),
                j.length = 0,
                Q.length = 0,
                $.length = 0,
                Tt = this.localClippingEnabled,
                Et = Mt.init(this.clippingPlanes, Tt, e),
                W = re.get(t, e),
                W.init(),
                m(t, e, tt.sortObjects),
                W.finish(),
                tt.sortObjects === !0 && W.sort(),
                Et && Mt.beginShadows(),
                I(j),
                ye.render(t, e),
                U(j, e),
                Et && Mt.endShadows(),
                zt.frame++,
                zt.calls = 0,
                zt.vertices = 0,
                zt.faces = 0,
                zt.points = 0,
                void 0 === i && (i = null ),
                this.setRenderTarget(i);
                var r = t.background;
                null === r ? Jt.buffers.color.setClear(ft.r, ft.g, ft.b, mt, V) : r && r.isColor && (Jt.buffers.color.setClear(r.r, r.g, r.b, 1, V),
                n = !0),
                (this.autoClear || n) && this.clear(this.autoClearColor, this.autoClearDepth, this.autoClearStencil),
                r && r.isCubeTexture ? (void 0 === fe && (fe = new Ot,
                me = new Rt(new Ct(5,5,5),new K({
                    uniforms: Fh.cube.uniforms,
                    vertexShader: Fh.cube.vertexShader,
                    fragmentShader: Fh.cube.fragmentShader,
                    side: ga,
                    depthTest: !1,
                    depthWrite: !1,
                    fog: !1
                }))),
                fe.projectionMatrix.copy(e.projectionMatrix),
                fe.matrixWorld.extractRotation(e.matrixWorld),
                fe.matrixWorldInverse.getInverse(fe.matrixWorld),
                me.material.uniforms.tCube.value = r,
                me.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse, me.matrixWorld),
                ee.update(me),
                tt.renderBufferDirect(fe, null , me.geometry, me.material, me, null )) : r && r.isTexture && (void 0 === ae && (ae = new Dt(-1,1,1,-1,0,1),
                oe = new Rt(new Ut(2,2),new pt({
                    depthTest: !1,
                    depthWrite: !1,
                    fog: !1
                }))),
                oe.material.map = r,
                ee.update(oe),
                tt.renderBufferDirect(ae, null , oe.geometry, oe.material, oe, null ));
                var a = W.opaque
                  , o = W.transparent;
                if (t.overrideMaterial) {
                    var s = t.overrideMaterial;
                    a.length && g(a, t, e, s),
                    o.length && g(o, t, e, s)
                } else
                    a.length && g(a, t, e),
                    o.length && g(o, t, e);
                xe.render(t, e),
                _e.render(t, e, ut),
                i && Kt.updateRenderTargetMipmap(i),
                Jt.buffers.depth.setTest(!0),
                Jt.buffers.depth.setMask(!0),
                Jt.buffers.color.setMask(!0),
                e.isArrayCamera && e.enabled && tt.setScissorTest(!1),
                e.onAfterRender(tt)
            }
            ,
            this.setFaceCulling = function(t, e) {
                Jt.setCullFace(t),
                Jt.setFlipSided(e === la)
            }
            ,
            this.allocTextureUnit = N,
            this.setTexture2D = function() {
                var t = !1;
                return function(e, i) {
                    e && e.isWebGLRenderTarget && (t || (console.warn("THREE.WebGLRenderer.setTexture2D: don't use render targets as textures. Use their .texture property instead."),
                    t = !0),
                    e = e.texture),
                    Kt.setTexture2D(e, i)
                }
            }(),
            this.setTexture = function() {
                var t = !1;
                return function(e, i) {
                    t || (console.warn("THREE.WebGLRenderer: .setTexture is deprecated, use setTexture2D instead."),
                    t = !0),
                    Kt.setTexture2D(e, i)
                }
            }(),
            this.setTextureCube = function() {
                var t = !1;
                return function(e, i) {
                    e && e.isWebGLRenderTargetCube && (t || (console.warn("THREE.WebGLRenderer.setTextureCube: don't use cube render targets as textures. Use their .texture property instead."),
                    t = !0),
                    e = e.texture),
                    e && e.isCubeTexture || Array.isArray(e.image) && 6 === e.image.length ? Kt.setTextureCube(e, i) : Kt.setTextureCubeDynamic(e, i)
                }
            }(),
            this.getRenderTarget = function() {
                return it
            }
            ,
            this.setRenderTarget = function(t) {
                it = t,
                t && void 0 === Qt.get(t).__webglFramebuffer && Kt.setupRenderTarget(t);
                var e, i = t && t.isWebGLRenderTargetCube;
                if (t) {
                    var n = Qt.get(t);
                    e = i ? n.__webglFramebuffer[t.activeCubeFace] : n.__webglFramebuffer,
                    ht.copy(t.scissor),
                    lt = t.scissorTest,
                    ut.copy(t.viewport)
                } else
                    e = null ,
                    ht.copy(xt).multiplyScalar(yt),
                    lt = _t,
                    ut.copy(bt).multiplyScalar(yt);
                if (nt !== e && (Gt.bindFramebuffer(Gt.FRAMEBUFFER, e),
                nt = e),
                Jt.scissor(ht),
                Jt.setScissorTest(lt),
                Jt.viewport(ut),
                i) {
                    var r = Qt.get(t.texture);
                    Gt.framebufferTexture2D(Gt.FRAMEBUFFER, Gt.COLOR_ATTACHMENT0, Gt.TEXTURE_CUBE_MAP_POSITIVE_X + t.activeCubeFace, r.__webglTexture, t.activeMipMapLevel)
                }
            }
            ,
            this.readRenderTargetPixels = function(t, e, i, n, r, a) {
                if ((t && t.isWebGLRenderTarget) === !1)
                    return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
                var o = Qt.get(t).__webglFramebuffer;
                if (o) {
                    var s = !1;
                    o !== nt && (Gt.bindFramebuffer(Gt.FRAMEBUFFER, o),
                    s = !0);
                    try {
                        var c = t.texture
                          , h = c.format
                          , l = c.type;
                        if (h !== zo && O(h) !== Gt.getParameter(Gt.IMPLEMENTATION_COLOR_READ_FORMAT))
                            return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                        if (!(l === To || O(l) === Gt.getParameter(Gt.IMPLEMENTATION_COLOR_READ_TYPE) || l === Co && (Yt.get("OES_texture_float") || Yt.get("WEBGL_color_buffer_float")) || l === Io && Yt.get("EXT_color_buffer_half_float")))
                            return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                        Gt.checkFramebufferStatus(Gt.FRAMEBUFFER) === Gt.FRAMEBUFFER_COMPLETE ? e >= 0 && e <= t.width - n && i >= 0 && i <= t.height - r && Gt.readPixels(e, i, n, r, O(h), O(l), a) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")
                    } finally {
                        s && Gt.bindFramebuffer(Gt.FRAMEBUFFER, nt)
                    }
                }
            }
        }
        function me(t, e) {
            this.name = "",
            this.color = new q(t),
            this.density = void 0 !== e ? e : 25e-5
        }
        function ge(t, e, i) {
            this.name = "",
            this.color = new q(t),
            this.near = void 0 !== e ? e : 1,
            this.far = void 0 !== i ? i : 1e3
        }
        function ve() {
            ht.call(this),
            this.type = "Scene",
            this.background = null ,
            this.fog = null ,
            this.overrideMaterial = null ,
            this.autoUpdate = !0
        }
        function ye(t, e, i, n, r) {
            ht.call(this),
            this.lensFlares = [],
            this.positionScreen = new h,
            this.customUpdateCallback = void 0,
            void 0 !== t && this.add(t, e, i, n, r)
        }
        function xe(t) {
            Q.call(this),
            this.type = "SpriteMaterial",
            this.color = new q(16777215),
            this.map = null ,
            this.rotation = 0,
            this.fog = !1,
            this.lights = !1,
            this.setValues(t)
        }
        function _e(t) {
            ht.call(this),
            this.type = "Sprite",
            this.material = void 0 !== t ? t : new xe
        }
        function be() {
            ht.call(this),
            this.type = "LOD",
            Object.defineProperties(this, {
                levels: {
                    enumerable: !0,
                    value: []
                }
            })
        }
        function we(t, e) {
            if (t = t || [],
            this.bones = t.slice(0),
            this.boneMatrices = new Float32Array(16 * this.bones.length),
            void 0 === e)
                this.calculateInverses();
            else if (this.bones.length === e.length)
                this.boneInverses = e.slice(0);
            else {
                console.warn("THREE.Skeleton boneInverses is the wrong length."),
                this.boneInverses = [];
                for (var i = 0, n = this.bones.length; i < n; i++)
                    this.boneInverses.push(new l)
            }
        }
        function Me() {
            ht.call(this),
            this.type = "Bone"
        }
        function Ee(t, e) {
            Rt.call(this, t, e),
            this.type = "SkinnedMesh",
            this.bindMode = "attached",
            this.bindMatrix = new l,
            this.bindMatrixInverse = new l;
            var i = this.initBones()
              , n = new we(i);
            this.bind(n, this.matrixWorld),
            this.normalizeSkinWeights()
        }
        function Te(t) {
            Q.call(this),
            this.type = "LineBasicMaterial",
            this.color = new q(16777215),
            this.linewidth = 1,
            this.linecap = "round",
            this.linejoin = "round",
            this.lights = !1,
            this.setValues(t)
        }
        function Se(t, e, i) {
            return 1 === i ? (console.warn("THREE.Line: parameter THREE.LinePieces no longer supported. Created THREE.LineSegments instead."),
            new Ae(t,e)) : (ht.call(this),
            this.type = "Line",
            this.geometry = void 0 !== t ? t : new Lt,
            void (this.material = void 0 !== e ? e : new Te({
                color: 16777215 * Math.random()
            })))
        }
        function Ae(t, e) {
            Se.call(this, t, e),
            this.type = "LineSegments"
        }
        function Le(t, e) {
            Se.call(this, t, e),
            this.type = "LineLoop"
        }
        function Re(t) {
            Q.call(this),
            this.type = "PointsMaterial",
            this.color = new q(16777215),
            this.map = null ,
            this.size = 1,
            this.sizeAttenuation = !0,
            this.lights = !1,
            this.setValues(t)
        }
        function Pe(t, e) {
            ht.call(this),
            this.type = "Points",
            this.geometry = void 0 !== t ? t : new Lt,
            this.material = void 0 !== e ? e : new Re({
                color: 16777215 * Math.random()
            })
        }
        function Ce() {
            ht.call(this),
            this.type = "Group"
        }
        function Ie(t, e, i, r, a, o, s, c, h) {
            function l() {
                requestAnimationFrame(l),
                t.readyState >= t.HAVE_CURRENT_DATA && (u.needsUpdate = !0)
            }
            n.call(this, t, e, i, r, a, o, s, c, h),
            this.generateMipmaps = !1;
            var u = this;
            l()
        }
        function Ue(t, e, i, r, a, o, s, c, h, l, u, d) {
            n.call(this, null , o, s, c, h, l, r, a, u, d),
            this.image = {
                width: e,
                height: i
            },
            this.mipmaps = t,
            this.flipY = !1,
            this.generateMipmaps = !1
        }
        function Ne(t, e, i, r, a, o, s, c, h) {
            n.call(this, t, e, i, r, a, o, s, c, h),
            this.needsUpdate = !0
        }
        function Oe(t, e, i, r, a, o, s, c, h, l) {
            if (l = void 0 !== l ? l : ko,
            l !== ko && l !== jo)
                throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
            void 0 === i && l === ko && (i = Lo),
            void 0 === i && l === jo && (i = Do),
            n.call(this, null , r, a, o, s, c, l, i, h),
            this.image = {
                width: t,
                height: e
            },
            this.magFilter = void 0 !== s ? s : xo,
            this.minFilter = void 0 !== c ? c : xo,
            this.flipY = !1,
            this.generateMipmaps = !1
        }
        function De(t) {
            Lt.call(this),
            this.type = "WireframeGeometry";
            var e, i, n, r, a, o, s, c, l, u, d = [], p = [0, 0], f = {}, m = ["a", "b", "c"];
            if (t && t.isGeometry) {
                var g = t.faces;
                for (e = 0,
                n = g.length; e < n; e++) {
                    var v = g[e];
                    for (i = 0; i < 3; i++)
                        s = v[m[i]],
                        c = v[m[(i + 1) % 3]],
                        p[0] = Math.min(s, c),
                        p[1] = Math.max(s, c),
                        l = p[0] + "," + p[1],
                        void 0 === f[l] && (f[l] = {
                            index1: p[0],
                            index2: p[1]
                        })
                }
                for (l in f)
                    o = f[l],
                    u = t.vertices[o.index1],
                    d.push(u.x, u.y, u.z),
                    u = t.vertices[o.index2],
                    d.push(u.x, u.y, u.z)
            } else if (t && t.isBufferGeometry) {
                var y, x, _, b, w, M, E, T;
                if (u = new h,
                null !== t.index) {
                    for (y = t.attributes.position,
                    x = t.index,
                    _ = t.groups,
                    0 === _.length && (_ = [{
                        start: 0,
                        count: x.count,
                        materialIndex: 0
                    }]),
                    r = 0,
                    a = _.length; r < a; ++r)
                        for (b = _[r],
                        w = b.start,
                        M = b.count,
                        e = w,
                        n = w + M; e < n; e += 3)
                            for (i = 0; i < 3; i++)
                                s = x.getX(e + i),
                                c = x.getX(e + (i + 1) % 3),
                                p[0] = Math.min(s, c),
                                p[1] = Math.max(s, c),
                                l = p[0] + "," + p[1],
                                void 0 === f[l] && (f[l] = {
                                    index1: p[0],
                                    index2: p[1]
                                });
                    for (l in f)
                        o = f[l],
                        u.fromBufferAttribute(y, o.index1),
                        d.push(u.x, u.y, u.z),
                        u.fromBufferAttribute(y, o.index2),
                        d.push(u.x, u.y, u.z)
                } else
                    for (y = t.attributes.position,
                    e = 0,
                    n = y.count / 3; e < n; e++)
                        for (i = 0; i < 3; i++)
                            E = 3 * e + i,
                            u.fromBufferAttribute(y, E),
                            d.push(u.x, u.y, u.z),
                            T = 3 * e + (i + 1) % 3,
                            u.fromBufferAttribute(y, T),
                            d.push(u.x, u.y, u.z)
            }
            this.addAttribute("position", new wt(d,3))
        }
        function Fe(t, e, i) {
            At.call(this),
            this.type = "ParametricGeometry",
            this.parameters = {
                func: t,
                slices: e,
                stacks: i
            },
            this.fromBufferGeometry(new Be(t,e,i)),
            this.mergeVertices()
        }
        function Be(t, e, i) {
            Lt.call(this),
            this.type = "ParametricBufferGeometry",
            this.parameters = {
                func: t,
                slices: e,
                stacks: i
            };
            var n, r, a = [], o = [], s = [], c = [], l = 1e-5, u = new h, d = new h, p = new h, f = new h, m = new h, g = e + 1;
            for (n = 0; n <= i; n++) {
                var v = n / i;
                for (r = 0; r <= e; r++) {
                    var y = r / e;
                    d = t(y, v, d),
                    o.push(d.x, d.y, d.z),
                    y - l >= 0 ? (p = t(y - l, v, p),
                    f.subVectors(d, p)) : (p = t(y + l, v, p),
                    f.subVectors(p, d)),
                    v - l >= 0 ? (p = t(y, v - l, p),
                    m.subVectors(d, p)) : (p = t(y, v + l, p),
                    m.subVectors(p, d)),
                    u.crossVectors(f, m).normalize(),
                    s.push(u.x, u.y, u.z),
                    c.push(y, v)
                }
            }
            for (n = 0; n < i; n++)
                for (r = 0; r < e; r++) {
                    var x = n * g + r
                      , _ = n * g + r + 1
                      , b = (n + 1) * g + r + 1
                      , w = (n + 1) * g + r;
                    a.push(x, _, w),
                    a.push(_, b, w)
                }
            this.setIndex(a),
            this.addAttribute("position", new wt(o,3)),
            this.addAttribute("normal", new wt(s,3)),
            this.addAttribute("uv", new wt(c,2))
        }
        function ze(t, e, i, n) {
            At.call(this),
            this.type = "PolyhedronGeometry",
            this.parameters = {
                vertices: t,
                indices: e,
                radius: i,
                detail: n
            },
            this.fromBufferGeometry(new Ge(t,e,i,n)),
            this.mergeVertices()
        }
        function Ge(t, e, n, r) {
            function a(t) {
                for (var i = new h, n = new h, r = new h, a = 0; a < e.length; a += 3)
                    d(e[a + 0], i),
                    d(e[a + 1], n),
                    d(e[a + 2], r),
                    o(i, n, r, t)
            }
            function o(t, e, i, n) {
                var r, a, o = Math.pow(2, n), s = [];
                for (r = 0; r <= o; r++) {
                    s[r] = [];
                    var c = t.clone().lerp(i, r / o)
                      , h = e.clone().lerp(i, r / o)
                      , l = o - r;
                    for (a = 0; a <= l; a++)
                        0 === a && r === o ? s[r][a] = c : s[r][a] = c.clone().lerp(h, a / l)
                }
                for (r = 0; r < o; r++)
                    for (a = 0; a < 2 * (o - r) - 1; a++) {
                        var d = Math.floor(a / 2);
                        a % 2 === 0 ? (u(s[r][d + 1]),
                        u(s[r + 1][d]),
                        u(s[r][d])) : (u(s[r][d + 1]),
                        u(s[r + 1][d + 1]),
                        u(s[r + 1][d]))
                    }
            }
            function s(t) {
                for (var e = new h, i = 0; i < v.length; i += 3)
                    e.x = v[i + 0],
                    e.y = v[i + 1],
                    e.z = v[i + 2],
                    e.normalize().multiplyScalar(t),
                    v[i + 0] = e.x,
                    v[i + 1] = e.y,
                    v[i + 2] = e.z
            }
            function c() {
                for (var t = new h, e = 0; e < v.length; e += 3) {
                    t.x = v[e + 0],
                    t.y = v[e + 1],
                    t.z = v[e + 2];
                    var i = m(t) / 2 / Math.PI + .5
                      , n = g(t) / Math.PI + .5;
                    y.push(i, 1 - n)
                }
                p(),
                l()
            }
            function l() {
                for (var t = 0; t < y.length; t += 6) {
                    var e = y[t + 0]
                      , i = y[t + 2]
                      , n = y[t + 4]
                      , r = Math.max(e, i, n)
                      , a = Math.min(e, i, n);
                    r > .9 && a < .1 && (e < .2 && (y[t + 0] += 1),
                    i < .2 && (y[t + 2] += 1),
                    n < .2 && (y[t + 4] += 1))
                }
            }
            function u(t) {
                v.push(t.x, t.y, t.z)
            }
            function d(e, i) {
                var n = 3 * e;
                i.x = t[n + 0],
                i.y = t[n + 1],
                i.z = t[n + 2]
            }
            function p() {
                for (var t = new h, e = new h, n = new h, r = new h, a = new i, o = new i, s = new i, c = 0, l = 0; c < v.length; c += 9,
                l += 6) {
                    t.set(v[c + 0], v[c + 1], v[c + 2]),
                    e.set(v[c + 3], v[c + 4], v[c + 5]),
                    n.set(v[c + 6], v[c + 7], v[c + 8]),
                    a.set(y[l + 0], y[l + 1]),
                    o.set(y[l + 2], y[l + 3]),
                    s.set(y[l + 4], y[l + 5]),
                    r.copy(t).add(e).add(n).divideScalar(3);
                    var u = m(r);
                    f(a, l + 0, t, u),
                    f(o, l + 2, e, u),
                    f(s, l + 4, n, u)
                }
            }
            function f(t, e, i, n) {
                n < 0 && 1 === t.x && (y[e] = t.x - 1),
                0 === i.x && 0 === i.z && (y[e] = n / 2 / Math.PI + .5)
            }
            function m(t) {
                return Math.atan2(t.z, -t.x)
            }
            function g(t) {
                return Math.atan2(-t.y, Math.sqrt(t.x * t.x + t.z * t.z))
            }
            Lt.call(this),
            this.type = "PolyhedronBufferGeometry",
            this.parameters = {
                vertices: t,
                indices: e,
                radius: n,
                detail: r
            },
            n = n || 1,
            r = r || 0;
            var v = []
              , y = [];
            a(r),
            s(n),
            c(),
            this.addAttribute("position", new wt(v,3)),
            this.addAttribute("normal", new wt(v.slice(),3)),
            this.addAttribute("uv", new wt(y,2)),
            this.normalizeNormals()
        }
        function He(t, e) {
            At.call(this),
            this.type = "TetrahedronGeometry",
            this.parameters = {
                radius: t,
                detail: e
            },
            this.fromBufferGeometry(new Ve(t,e)),
            this.mergeVertices()
        }
        function Ve(t, e) {
            var i = [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1]
              , n = [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1];
            Ge.call(this, i, n, t, e),
            this.type = "TetrahedronBufferGeometry",
            this.parameters = {
                radius: t,
                detail: e
            }
        }
        function ke(t, e) {
            At.call(this),
            this.type = "OctahedronGeometry",
            this.parameters = {
                radius: t,
                detail: e
            },
            this.fromBufferGeometry(new je(t,e)),
            this.mergeVertices()
        }
        function je(t, e) {
            var i = [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1]
              , n = [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2];
            Ge.call(this, i, n, t, e),
            this.type = "OctahedronBufferGeometry",
            this.parameters = {
                radius: t,
                detail: e
            }
        }
        function We(t, e) {
            At.call(this),
            this.type = "IcosahedronGeometry",
            this.parameters = {
                radius: t,
                detail: e
            },
            this.fromBufferGeometry(new Xe(t,e)),
            this.mergeVertices()
        }
        function Xe(t, e) {
            var i = (1 + Math.sqrt(5)) / 2
              , n = [-1, i, 0, 1, i, 0, -1, -i, 0, 1, -i, 0, 0, -1, i, 0, 1, i, 0, -1, -i, 0, 1, -i, i, 0, -1, i, 0, 1, -i, 0, -1, -i, 0, 1]
              , r = [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1];
            Ge.call(this, n, r, t, e),
            this.type = "IcosahedronBufferGeometry",
            this.parameters = {
                radius: t,
                detail: e
            }
        }
        function qe(t, e) {
            At.call(this),
            this.type = "DodecahedronGeometry",
            this.parameters = {
                radius: t,
                detail: e
            },
            this.fromBufferGeometry(new Ye(t,e)),
            this.mergeVertices()
        }
        function Ye(t, e) {
            var i = (1 + Math.sqrt(5)) / 2
              , n = 1 / i
              , r = [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -n, -i, 0, -n, i, 0, n, -i, 0, n, i, -n, -i, 0, -n, i, 0, n, -i, 0, n, i, 0, -i, 0, -n, i, 0, -n, -i, 0, n, i, 0, n]
              , a = [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9];
            Ge.call(this, r, a, t, e),
            this.type = "DodecahedronBufferGeometry",
            this.parameters = {
                radius: t,
                detail: e
            }
        }
        function Ze(t, e, i, n, r, a) {
            At.call(this),
            this.type = "TubeGeometry",
            this.parameters = {
                path: t,
                tubularSegments: e,
                radius: i,
                radialSegments: n,
                closed: r
            },
            void 0 !== a && console.warn("THREE.TubeGeometry: taper has been removed.");
            var o = new Je(t,e,i,n,r);
            this.tangents = o.tangents,
            this.normals = o.normals,
            this.binormals = o.binormals,
            this.fromBufferGeometry(o),
            this.mergeVertices()
        }
        function Je(t, e, n, r, a) {
            function o() {
                for (d = 0; d < e; d++)
                    s(d);
                s(a === !1 ? e : 0),
                l(),
                c()
            }
            function s(i) {
                var a = t.getPointAt(i / e)
                  , o = u.normals[i]
                  , s = u.binormals[i];
                for (p = 0; p <= r; p++) {
                    var c = p / r * Math.PI * 2
                      , h = Math.sin(c)
                      , l = -Math.cos(c);
                    m.x = l * o.x + h * s.x,
                    m.y = l * o.y + h * s.y,
                    m.z = l * o.z + h * s.z,
                    m.normalize(),
                    y.push(m.x, m.y, m.z),
                    f.x = a.x + n * m.x,
                    f.y = a.y + n * m.y,
                    f.z = a.z + n * m.z,
                    v.push(f.x, f.y, f.z)
                }
            }
            function c() {
                for (p = 1; p <= e; p++)
                    for (d = 1; d <= r; d++) {
                        var t = (r + 1) * (p - 1) + (d - 1)
                          , i = (r + 1) * p + (d - 1)
                          , n = (r + 1) * p + d
                          , a = (r + 1) * (p - 1) + d;
                        _.push(t, i, a),
                        _.push(i, n, a)
                    }
            }
            function l() {
                for (d = 0; d <= e; d++)
                    for (p = 0; p <= r; p++)
                        g.x = d / e,
                        g.y = p / r,
                        x.push(g.x, g.y)
            }
            Lt.call(this),
            this.type = "TubeBufferGeometry",
            this.parameters = {
                path: t,
                tubularSegments: e,
                radius: n,
                radialSegments: r,
                closed: a
            },
            e = e || 64,
            n = n || 1,
            r = r || 8,
            a = a || !1;
            var u = t.computeFrenetFrames(e, a);
            this.tangents = u.tangents,
            this.normals = u.normals,
            this.binormals = u.binormals;
            var d, p, f = new h, m = new h, g = new i, v = [], y = [], x = [], _ = [];
            o(),
            this.setIndex(_),
            this.addAttribute("position", new wt(v,3)),
            this.addAttribute("normal", new wt(y,3)),
            this.addAttribute("uv", new wt(x,2))
        }
        function Qe(t, e, i, n, r, a, o) {
            At.call(this),
            this.type = "TorusKnotGeometry",
            this.parameters = {
                radius: t,
                tube: e,
                tubularSegments: i,
                radialSegments: n,
                p: r,
                q: a
            },
            void 0 !== o && console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."),
            this.fromBufferGeometry(new Ke(t,e,i,n,r,a)),
            this.mergeVertices()
        }
        function Ke(t, e, i, n, r, a) {
            function o(t, e, i, n, r) {
                var a = Math.cos(t)
                  , o = Math.sin(t)
                  , s = i / e * t
                  , c = Math.cos(s);
                r.x = n * (2 + c) * .5 * a,
                r.y = n * (2 + c) * o * .5,
                r.z = n * Math.sin(s) * .5
            }
            Lt.call(this),
            this.type = "TorusKnotBufferGeometry",
            this.parameters = {
                radius: t,
                tube: e,
                tubularSegments: i,
                radialSegments: n,
                p: r,
                q: a
            },
            t = t || 100,
            e = e || 40,
            i = Math.floor(i) || 64,
            n = Math.floor(n) || 8,
            r = r || 2,
            a = a || 3;
            var s, c, l = [], u = [], d = [], p = [], f = new h, m = new h, g = new h, v = new h, y = new h, x = new h, _ = new h;
            for (s = 0; s <= i; ++s) {
                var b = s / i * r * Math.PI * 2;
                for (o(b, r, a, t, g),
                o(b + .01, r, a, t, v),
                x.subVectors(v, g),
                _.addVectors(v, g),
                y.crossVectors(x, _),
                _.crossVectors(y, x),
                y.normalize(),
                _.normalize(),
                c = 0; c <= n; ++c) {
                    var w = c / n * Math.PI * 2
                      , M = -e * Math.cos(w)
                      , E = e * Math.sin(w);
                    f.x = g.x + (M * _.x + E * y.x),
                    f.y = g.y + (M * _.y + E * y.y),
                    f.z = g.z + (M * _.z + E * y.z),
                    u.push(f.x, f.y, f.z),
                    m.subVectors(f, g).normalize(),
                    d.push(m.x, m.y, m.z),
                    p.push(s / i),
                    p.push(c / n)
                }
            }
            for (c = 1; c <= i; c++)
                for (s = 1; s <= n; s++) {
                    var T = (n + 1) * (c - 1) + (s - 1)
                      , S = (n + 1) * c + (s - 1)
                      , A = (n + 1) * c + s
                      , L = (n + 1) * (c - 1) + s;
                    l.push(T, S, L),
                    l.push(S, A, L)
                }
            this.setIndex(l),
            this.addAttribute("position", new wt(u,3)),
            this.addAttribute("normal", new wt(d,3)),
            this.addAttribute("uv", new wt(p,2))
        }
        function $e(t, e, i, n, r) {
            At.call(this),
            this.type = "TorusGeometry",
            this.parameters = {
                radius: t,
                tube: e,
                radialSegments: i,
                tubularSegments: n,
                arc: r
            },
            this.fromBufferGeometry(new ti(t,e,i,n,r)),
            this.mergeVertices()
        }
        function ti(t, e, i, n, r) {
            Lt.call(this),
            this.type = "TorusBufferGeometry",
            this.parameters = {
                radius: t,
                tube: e,
                radialSegments: i,
                tubularSegments: n,
                arc: r
            },
            t = t || 100,
            e = e || 40,
            i = Math.floor(i) || 8,
            n = Math.floor(n) || 6,
            r = r || 2 * Math.PI;
            var a, o, s = [], c = [], l = [], u = [], d = new h, p = new h, f = new h;
            for (a = 0; a <= i; a++)
                for (o = 0; o <= n; o++) {
                    var m = o / n * r
                      , g = a / i * Math.PI * 2;
                    p.x = (t + e * Math.cos(g)) * Math.cos(m),
                    p.y = (t + e * Math.cos(g)) * Math.sin(m),
                    p.z = e * Math.sin(g),
                    c.push(p.x, p.y, p.z),
                    d.x = t * Math.cos(m),
                    d.y = t * Math.sin(m),
                    f.subVectors(p, d).normalize(),
                    l.push(f.x, f.y, f.z),
                    u.push(o / n),
                    u.push(a / i)
                }
            for (a = 1; a <= i; a++)
                for (o = 1; o <= n; o++) {
                    var v = (n + 1) * a + o - 1
                      , y = (n + 1) * (a - 1) + o - 1
                      , x = (n + 1) * (a - 1) + o
                      , _ = (n + 1) * a + o;
                    s.push(v, y, _),
                    s.push(y, x, _)
                }
            this.setIndex(s),
            this.addAttribute("position", new wt(c,3)),
            this.addAttribute("normal", new wt(l,3)),
            this.addAttribute("uv", new wt(u,2))
        }
        function ei(t, e) {
            At.call(this),
            this.type = "ExtrudeGeometry",
            this.parameters = {
                shapes: t,
                options: e
            },
            this.fromBufferGeometry(new ii(t,e)),
            this.mergeVertices()
        }
        function ii(t, e) {
            return "undefined" == typeof t ? void (t = []) : (Lt.call(this),
            this.type = "ExtrudeBufferGeometry",
            t = Array.isArray(t) ? t : [t],
            this.addShapeList(t, e),
            void this.computeVertexNormals())
        }
        function ni(t, e) {
            At.call(this),
            this.type = "TextGeometry",
            this.parameters = {
                text: t,
                parameters: e
            },
            this.fromBufferGeometry(new ri(t,e)),
            this.mergeVertices()
        }
        function ri(t, e) {
            e = e || {};
            var i = e.font;
            if ((i && i.isFont) === !1)
                return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),
                new At;
            var n = i.generateShapes(t, e.size, e.curveSegments);
            e.amount = void 0 !== e.height ? e.height : 50,
            void 0 === e.bevelThickness && (e.bevelThickness = 10),
            void 0 === e.bevelSize && (e.bevelSize = 8),
            void 0 === e.bevelEnabled && (e.bevelEnabled = !1),
            ii.call(this, n, e),
            this.type = "TextBufferGeometry"
        }
        function ai(t, e, i, n, r, a, o) {
            At.call(this),
            this.type = "SphereGeometry",
            this.parameters = {
                radius: t,
                widthSegments: e,
                heightSegments: i,
                phiStart: n,
                phiLength: r,
                thetaStart: a,
                thetaLength: o
            },
            this.fromBufferGeometry(new oi(t,e,i,n,r,a,o)),
            this.mergeVertices()
        }
        function oi(t, e, i, n, r, a, o) {
            Lt.call(this),
            this.type = "SphereBufferGeometry",
            this.parameters = {
                radius: t,
                widthSegments: e,
                heightSegments: i,
                phiStart: n,
                phiLength: r,
                thetaStart: a,
                thetaLength: o
            },
            t = t || 50,
            e = Math.max(3, Math.floor(e) || 8),
            i = Math.max(2, Math.floor(i) || 6),
            n = void 0 !== n ? n : 0,
            r = void 0 !== r ? r : 2 * Math.PI,
            a = void 0 !== a ? a : 0,
            o = void 0 !== o ? o : Math.PI;
            var s, c, l = a + o, u = 0, d = [], p = new h, f = new h, m = [], g = [], v = [], y = [];
            for (c = 0; c <= i; c++) {
                var x = []
                  , _ = c / i;
                for (s = 0; s <= e; s++) {
                    var b = s / e;
                    p.x = -t * Math.cos(n + b * r) * Math.sin(a + _ * o),
                    p.y = t * Math.cos(a + _ * o),
                    p.z = t * Math.sin(n + b * r) * Math.sin(a + _ * o),
                    g.push(p.x, p.y, p.z),
                    f.set(p.x, p.y, p.z).normalize(),
                    v.push(f.x, f.y, f.z),
                    y.push(b, 1 - _),
                    x.push(u++)
                }
                d.push(x)
            }
            for (c = 0; c < i; c++)
                for (s = 0; s < e; s++) {
                    var w = d[c][s + 1]
                      , M = d[c][s]
                      , E = d[c + 1][s]
                      , T = d[c + 1][s + 1];
                    (0 !== c || a > 0) && m.push(w, M, T),
                    (c !== i - 1 || l < Math.PI) && m.push(M, E, T)
                }
            this.setIndex(m),
            this.addAttribute("position", new wt(g,3)),
            this.addAttribute("normal", new wt(v,3)),
            this.addAttribute("uv", new wt(y,2))
        }
        function si(t, e, i, n, r, a) {
            At.call(this),
            this.type = "RingGeometry",
            this.parameters = {
                innerRadius: t,
                outerRadius: e,
                thetaSegments: i,
                phiSegments: n,
                thetaStart: r,
                thetaLength: a
            },
            this.fromBufferGeometry(new ci(t,e,i,n,r,a)),
            this.mergeVertices()
        }
        function ci(t, e, n, r, a, o) {
            Lt.call(this),
            this.type = "RingBufferGeometry",
            this.parameters = {
                innerRadius: t,
                outerRadius: e,
                thetaSegments: n,
                phiSegments: r,
                thetaStart: a,
                thetaLength: o
            },
            t = t || 20,
            e = e || 50,
            a = void 0 !== a ? a : 0,
            o = void 0 !== o ? o : 2 * Math.PI,
            n = void 0 !== n ? Math.max(3, n) : 8,
            r = void 0 !== r ? Math.max(1, r) : 1;
            var s, c, l, u = [], d = [], p = [], f = [], m = t, g = (e - t) / r, v = new h, y = new i;
            for (c = 0; c <= r; c++) {
                for (l = 0; l <= n; l++)
                    s = a + l / n * o,
                    v.x = m * Math.cos(s),
                    v.y = m * Math.sin(s),
                    d.push(v.x, v.y, v.z),
                    p.push(0, 0, 1),
                    y.x = (v.x / e + 1) / 2,
                    y.y = (v.y / e + 1) / 2,
                    f.push(y.x, y.y);
                m += g
            }
            for (c = 0; c < r; c++) {
                var x = c * (n + 1);
                for (l = 0; l < n; l++) {
                    s = l + x;
                    var _ = s
                      , b = s + n + 1
                      , w = s + n + 2
                      , M = s + 1;
                    u.push(_, b, M),
                    u.push(b, w, M)
                }
            }
            this.setIndex(u),
            this.addAttribute("position", new wt(d,3)),
            this.addAttribute("normal", new wt(p,3)),
            this.addAttribute("uv", new wt(f,2))
        }
        function hi(t, e, i, n) {
            At.call(this),
            this.type = "LatheGeometry",
            this.parameters = {
                points: t,
                segments: e,
                phiStart: i,
                phiLength: n
            },
            this.fromBufferGeometry(new li(t,e,i,n)),
            this.mergeVertices()
        }
        function li(t, e, n, r) {
            Lt.call(this),
            this.type = "LatheBufferGeometry",
            this.parameters = {
                points: t,
                segments: e,
                phiStart: n,
                phiLength: r
            },
            e = Math.floor(e) || 12,
            n = n || 0,
            r = r || 2 * Math.PI,
            r = ws.clamp(r, 0, 2 * Math.PI);
            var a, o, s, c = [], l = [], u = [], d = 1 / e, p = new h, f = new i;
            for (o = 0; o <= e; o++) {
                var m = n + o * d * r
                  , g = Math.sin(m)
                  , v = Math.cos(m);
                for (s = 0; s <= t.length - 1; s++)
                    p.x = t[s].x * g,
                    p.y = t[s].y,
                    p.z = t[s].x * v,
                    l.push(p.x, p.y, p.z),
                    f.x = o / e,
                    f.y = s / (t.length - 1),
                    u.push(f.x, f.y)
            }
            for (o = 0; o < e; o++)
                for (s = 0; s < t.length - 1; s++) {
                    a = s + o * t.length;
                    var y = a
                      , x = a + t.length
                      , _ = a + t.length + 1
                      , b = a + 1;
                    c.push(y, x, b),
                    c.push(x, _, b)
                }
            if (this.setIndex(c),
            this.addAttribute("position", new wt(l,3)),
            this.addAttribute("uv", new wt(u,2)),
            this.computeVertexNormals(),
            r === 2 * Math.PI) {
                var w = this.attributes.normal.array
                  , M = new h
                  , E = new h
                  , T = new h;
                for (a = e * t.length * 3,
                o = 0,
                s = 0; o < t.length; o++,
                s += 3)
                    M.x = w[s + 0],
                    M.y = w[s + 1],
                    M.z = w[s + 2],
                    E.x = w[a + s + 0],
                    E.y = w[a + s + 1],
                    E.z = w[a + s + 2],
                    T.addVectors(M, E).normalize(),
                    w[s + 0] = w[a + s + 0] = T.x,
                    w[s + 1] = w[a + s + 1] = T.y,
                    w[s + 2] = w[a + s + 2] = T.z
            }
        }
        function ui(t, e) {
            At.call(this),
            this.type = "ShapeGeometry",
            "object" === ("undefined" == typeof e ? "undefined" : o(e)) && (console.warn("THREE.ShapeGeometry: Options parameter has been removed."),
            e = e.curveSegments),
            this.parameters = {
                shapes: t,
                curveSegments: e
            },
            this.fromBufferGeometry(new di(t,e)),
            this.mergeVertices()
        }
        function di(t, e) {
            function i(t) {
                var i, s, h, l = r.length / 3, u = t.extractPoints(e), d = u.shape, p = u.holes;
                if (Vh.isClockWise(d) === !1)
                    for (d = d.reverse(),
                    i = 0,
                    s = p.length; i < s; i++)
                        h = p[i],
                        Vh.isClockWise(h) === !0 && (p[i] = h.reverse());
                var f = Vh.triangulateShape(d, p);
                for (i = 0,
                s = p.length; i < s; i++)
                    h = p[i],
                    d = d.concat(h);
                for (i = 0,
                s = d.length; i < s; i++) {
                    var m = d[i];
                    r.push(m.x, m.y, 0),
                    a.push(0, 0, 1),
                    o.push(m.x, m.y)
                }
                for (i = 0,
                s = f.length; i < s; i++) {
                    var g = f[i]
                      , v = g[0] + l
                      , y = g[1] + l
                      , x = g[2] + l;
                    n.push(v, y, x),
                    c += 3
                }
            }
            Lt.call(this),
            this.type = "ShapeBufferGeometry",
            this.parameters = {
                shapes: t,
                curveSegments: e
            },
            e = e || 12;
            var n = []
              , r = []
              , a = []
              , o = []
              , s = 0
              , c = 0;
            if (Array.isArray(t) === !1)
                i(t);
            else
                for (var h = 0; h < t.length; h++)
                    i(t[h]),
                    this.addGroup(s, c, h),
                    s += c,
                    c = 0;
            this.setIndex(n),
            this.addAttribute("position", new wt(r,3)),
            this.addAttribute("normal", new wt(a,3)),
            this.addAttribute("uv", new wt(o,2))
        }
        function pi(t, e) {
            Lt.call(this),
            this.type = "EdgesGeometry",
            this.parameters = {
                thresholdAngle: e
            },
            e = void 0 !== e ? e : 1;
            var i, n, r, a, o = [], s = Math.cos(ws.DEG2RAD * e), c = [0, 0], h = {}, l = ["a", "b", "c"];
            t.isBufferGeometry ? (a = new At,
            a.fromBufferGeometry(t)) : a = t.clone(),
            a.mergeVertices(),
            a.computeFaceNormals();
            for (var u = a.vertices, d = a.faces, p = 0, f = d.length; p < f; p++)
                for (var m = d[p], g = 0; g < 3; g++)
                    i = m[l[g]],
                    n = m[l[(g + 1) % 3]],
                    c[0] = Math.min(i, n),
                    c[1] = Math.max(i, n),
                    r = c[0] + "," + c[1],
                    void 0 === h[r] ? h[r] = {
                        index1: c[0],
                        index2: c[1],
                        face1: p,
                        face2: void 0
                    } : h[r].face2 = p;
            for (r in h) {
                var v = h[r];
                if (void 0 === v.face2 || d[v.face1].normal.dot(d[v.face2].normal) <= s) {
                    var y = u[v.index1];
                    o.push(y.x, y.y, y.z),
                    y = u[v.index2],
                    o.push(y.x, y.y, y.z)
                }
            }
            this.addAttribute("position", new wt(o,3))
        }
        function fi(t, e, i, n, r, a, o, s) {
            At.call(this),
            this.type = "CylinderGeometry",
            this.parameters = {
                radiusTop: t,
                radiusBottom: e,
                height: i,
                radialSegments: n,
                heightSegments: r,
                openEnded: a,
                thetaStart: o,
                thetaLength: s
            },
            this.fromBufferGeometry(new mi(t,e,i,n,r,a,o,s)),
            this.mergeVertices()
        }
        function mi(t, e, n, r, a, o, s, c) {
            function l() {
                var i, o, l = new h, u = new h, b = 0, w = (e - t) / n;
                for (o = 0; o <= a; o++) {
                    var M = []
                      , E = o / a
                      , T = E * (e - t) + t;
                    for (i = 0; i <= r; i++) {
                        var S = i / r
                          , A = S * c + s
                          , L = Math.sin(A)
                          , R = Math.cos(A);
                        u.x = T * L,
                        u.y = -E * n + x,
                        u.z = T * R,
                        f.push(u.x, u.y, u.z),
                        l.set(L, w, R).normalize(),
                        m.push(l.x, l.y, l.z),
                        g.push(S, 1 - E),
                        M.push(v++)
                    }
                    y.push(M)
                }
                for (i = 0; i < r; i++)
                    for (o = 0; o < a; o++) {
                        var P = y[o][i]
                          , C = y[o + 1][i]
                          , I = y[o + 1][i + 1]
                          , U = y[o][i + 1];
                        p.push(P, C, U),
                        p.push(C, I, U),
                        b += 6
                    }
                d.addGroup(_, b, 0),
                _ += b
            }
            function u(n) {
                var a, o, l, u = new i, y = new h, b = 0, w = n === !0 ? t : e, M = n === !0 ? 1 : -1;
                for (o = v,
                a = 1; a <= r; a++)
                    f.push(0, x * M, 0),
                    m.push(0, M, 0),
                    g.push(.5, .5),
                    v++;
                for (l = v,
                a = 0; a <= r; a++) {
                    var E = a / r
                      , T = E * c + s
                      , S = Math.cos(T)
                      , A = Math.sin(T);
                    y.x = w * A,
                    y.y = x * M,
                    y.z = w * S,
                    f.push(y.x, y.y, y.z),
                    m.push(0, M, 0),
                    u.x = .5 * S + .5,
                    u.y = .5 * A * M + .5,
                    g.push(u.x, u.y),
                    v++
                }
                for (a = 0; a < r; a++) {
                    var L = o + a
                      , R = l + a;
                    n === !0 ? p.push(R, R + 1, L) : p.push(R + 1, R, L),
                    b += 3
                }
                d.addGroup(_, b, n === !0 ? 1 : 2),
                _ += b
            }
            Lt.call(this),
            this.type = "CylinderBufferGeometry",
            this.parameters = {
                radiusTop: t,
                radiusBottom: e,
                height: n,
                radialSegments: r,
                heightSegments: a,
                openEnded: o,
                thetaStart: s,
                thetaLength: c
            };
            var d = this;
            t = void 0 !== t ? t : 20,
            e = void 0 !== e ? e : 20,
            n = void 0 !== n ? n : 100,
            r = Math.floor(r) || 8,
            a = Math.floor(a) || 1,
            o = void 0 !== o && o,
            s = void 0 !== s ? s : 0,
            c = void 0 !== c ? c : 2 * Math.PI;
            var p = []
              , f = []
              , m = []
              , g = []
              , v = 0
              , y = []
              , x = n / 2
              , _ = 0;
            l(),
            o === !1 && (t > 0 && u(!0),
            e > 0 && u(!1)),
            this.setIndex(p),
            this.addAttribute("position", new wt(f,3)),
            this.addAttribute("normal", new wt(m,3)),
            this.addAttribute("uv", new wt(g,2))
        }
        function gi(t, e, i, n, r, a, o) {
            fi.call(this, 0, t, e, i, n, r, a, o),
            this.type = "ConeGeometry",
            this.parameters = {
                radius: t,
                height: e,
                radialSegments: i,
                heightSegments: n,
                openEnded: r,
                thetaStart: a,
                thetaLength: o
            }
        }
        function vi(t, e, i, n, r, a, o) {
            mi.call(this, 0, t, e, i, n, r, a, o),
            this.type = "ConeBufferGeometry",
            this.parameters = {
                radius: t,
                height: e,
                radialSegments: i,
                heightSegments: n,
                openEnded: r,
                thetaStart: a,
                thetaLength: o
            }
        }
        function yi(t, e, i, n) {
            At.call(this),
            this.type = "CircleGeometry",
            this.parameters = {
                radius: t,
                segments: e,
                thetaStart: i,
                thetaLength: n
            },
            this.fromBufferGeometry(new xi(t,e,i,n)),
            this.mergeVertices()
        }
        function xi(t, e, n, r) {
            Lt.call(this),
            this.type = "CircleBufferGeometry",
            this.parameters = {
                radius: t,
                segments: e,
                thetaStart: n,
                thetaLength: r
            },
            t = t || 50,
            e = void 0 !== e ? Math.max(3, e) : 8,
            n = void 0 !== n ? n : 0,
            r = void 0 !== r ? r : 2 * Math.PI;
            var a, o, s = [], c = [], l = [], u = [], d = new h, p = new i;
            for (c.push(0, 0, 0),
            l.push(0, 0, 1),
            u.push(.5, .5),
            o = 0,
            a = 3; o <= e; o++,
            a += 3) {
                var f = n + o / e * r;
                d.x = t * Math.cos(f),
                d.y = t * Math.sin(f),
                c.push(d.x, d.y, d.z),
                l.push(0, 0, 1),
                p.x = (c[a] / t + 1) / 2,
                p.y = (c[a + 1] / t + 1) / 2,
                u.push(p.x, p.y)
            }
            for (a = 1; a <= e; a++)
                s.push(a, a + 1, 0);
            this.setIndex(s),
            this.addAttribute("position", new wt(c,3)),
            this.addAttribute("normal", new wt(l,3)),
            this.addAttribute("uv", new wt(u,2))
        }
        function _i(t) {
            K.call(this, {
                uniforms: Us.merge([Is.lights, {
                    opacity: {
                        value: 1
                    }
                }]),
                vertexShader: Dh.shadow_vert,
                fragmentShader: Dh.shadow_frag
            }),
            this.lights = !0,
            this.transparent = !0,
            Object.defineProperties(this, {
                opacity: {
                    enumerable: !0,
                    get: function() {
                        return this.uniforms.opacity.value
                    },
                    set: function(t) {
                        this.uniforms.opacity.value = t
                    }
                }
            }),
            this.setValues(t)
        }
        function bi(t) {
            K.call(this, t),
            this.type = "RawShaderMaterial"
        }
        function wi(t) {
            Q.call(this),
            this.defines = {
                STANDARD: ""
            },
            this.type = "MeshStandardMaterial",
            this.color = new q(16777215),
            this.roughness = .5,
            this.metalness = .5,
            this.map = null ,
            this.lightMap = null ,
            this.lightMapIntensity = 1,
            this.aoMap = null ,
            this.aoMapIntensity = 1,
            this.emissive = new q(0),
            this.emissiveIntensity = 1,
            this.emissiveMap = null ,
            this.bumpMap = null ,
            this.bumpScale = 1,
            this.normalMap = null ,
            this.normalScale = new i(1,1),
            this.displacementMap = null ,
            this.displacementScale = 1,
            this.displacementBias = 0,
            this.roughnessMap = null ,
            this.metalnessMap = null ,
            this.alphaMap = null ,
            this.envMap = null ,
            this.envMapIntensity = 1,
            this.refractionRatio = .98,
            this.wireframe = !1,
            this.wireframeLinewidth = 1,
            this.wireframeLinecap = "round",
            this.wireframeLinejoin = "round",
            this.skinning = !1,
            this.morphTargets = !1,
            this.morphNormals = !1,
            this.setValues(t)
        }
        function Mi(t) {
            wi.call(this),
            this.defines = {
                PHYSICAL: ""
            },
            this.type = "MeshPhysicalMaterial",
            this.reflectivity = .5,
            this.clearCoat = 0,
            this.clearCoatRoughness = 0,
            this.setValues(t)
        }
        function Ei(t) {
            Q.call(this),
            this.type = "MeshPhongMaterial",
            this.color = new q(16777215),
            this.specular = new q(1118481),
            this.shininess = 30,
            this.map = null ,
            this.lightMap = null ,
            this.lightMapIntensity = 1,
            this.aoMap = null ,
            this.aoMapIntensity = 1,
            this.emissive = new q(0),
            this.emissiveIntensity = 1,
            this.emissiveMap = null ,
            this.bumpMap = null ,
            this.bumpScale = 1,
            this.normalMap = null ,
            this.normalScale = new i(1,1),
            this.displacementMap = null ,
            this.displacementScale = 1,
            this.displacementBias = 0,
            this.specularMap = null ,
            this.alphaMap = null ,
            this.envMap = null ,
            this.combine = $a,
            this.reflectivity = 1,
            this.refractionRatio = .98,
            this.wireframe = !1,
            this.wireframeLinewidth = 1,
            this.wireframeLinecap = "round",
            this.wireframeLinejoin = "round",
            this.skinning = !1,
            this.morphTargets = !1,
            this.morphNormals = !1,
            this.setValues(t)
        }
        function Ti(t) {
            Ei.call(this),
            this.defines = {
                TOON: ""
            },
            this.type = "MeshToonMaterial",
            this.gradientMap = null ,
            this.setValues(t)
        }
        function Si(t) {
            Q.call(this, t),
            this.type = "MeshNormalMaterial",
            this.bumpMap = null ,
            this.bumpScale = 1,
            this.normalMap = null ,
            this.normalScale = new i(1,1),
            this.displacementMap = null ,
            this.displacementScale = 1,
            this.displacementBias = 0,
            this.wireframe = !1,
            this.wireframeLinewidth = 1,
            this.fog = !1,
            this.lights = !1,
            this.skinning = !1,
            this.morphTargets = !1,
            this.morphNormals = !1,
            this.setValues(t)
        }
        function Ai(t) {
            Q.call(this),
            this.type = "MeshLambertMaterial",
            this.color = new q(16777215),
            this.map = null ,
            this.lightMap = null ,
            this.lightMapIntensity = 1,
            this.aoMap = null ,
            this.aoMapIntensity = 1,
            this.emissive = new q(0),
            this.emissiveIntensity = 1,
            this.emissiveMap = null ,
            this.specularMap = null ,
            this.alphaMap = null ,
            this.envMap = null ,
            this.combine = $a,
            this.reflectivity = 1,
            this.refractionRatio = .98,
            this.wireframe = !1,
            this.wireframeLinewidth = 1,
            this.wireframeLinecap = "round",
            this.wireframeLinejoin = "round",
            this.skinning = !1,
            this.morphTargets = !1,
            this.morphNormals = !1,
            this.setValues(t)
        }
        function Li(t) {
            Q.call(this),
            this.type = "LineDashedMaterial",
            this.color = new q(16777215),
            this.linewidth = 1,
            this.scale = 1,
            this.dashSize = 3,
            this.gapSize = 1,
            this.lights = !1,
            this.setValues(t)
        }
        function Ri(t, e, i) {
            var n = this
              , r = !1
              , a = 0
              , o = 0;
            this.onStart = void 0,
            this.onLoad = t,
            this.onProgress = e,
            this.onError = i,
            this.itemStart = function(t) {
                o++,
                r === !1 && void 0 !== n.onStart && n.onStart(t, a, o),
                r = !0
            }
            ,
            this.itemEnd = function(t) {
                a++,
                void 0 !== n.onProgress && n.onProgress(t, a, o),
                a === o && (r = !1,
                void 0 !== n.onLoad && n.onLoad())
            }
            ,
            this.itemError = function(t) {
                void 0 !== n.onError && n.onError(t)
            }
        }
        function Pi(t) {
            this.manager = void 0 !== t ? t : Xh
        }
        function Ci(t) {
            this.manager = void 0 !== t ? t : Xh,
            this._parser = null
        }
        function Ii(t) {
            this.manager = void 0 !== t ? t : Xh,
            this._parser = null
        }
        function Ui(t) {
            this.manager = void 0 !== t ? t : Xh
        }
        function Ni(t) {
            this.manager = void 0 !== t ? t : Xh
        }
        function Oi(t) {
            this.manager = void 0 !== t ? t : Xh
        }
        function Di(t, e) {
            ht.call(this),
            this.type = "Light",
            this.color = new q(t),
            this.intensity = void 0 !== e ? e : 1,
            this.receiveShadow = void 0
        }
        function Fi(t, e, i) {
            Di.call(this, t, i),
            this.type = "HemisphereLight",
            this.castShadow = void 0,
            this.position.copy(ht.DefaultUp),
            this.updateMatrix(),
            this.groundColor = new q(e)
        }
        function Bi(t) {
            this.camera = t,
            this.bias = 0,
            this.radius = 1,
            this.mapSize = new i(512,512),
            this.map = null ,
            this.matrix = new l
        }
        function zi() {
            Bi.call(this, new Ot(50,1,.5,500))
        }
        function Gi(t, e, i, n, r, a) {
            Di.call(this, t, e),
            this.type = "SpotLight",
            this.position.copy(ht.DefaultUp),
            this.updateMatrix(),
            this.target = new ht,
            Object.defineProperty(this, "power", {
                get: function() {
                    return this.intensity * Math.PI
                },
                set: function(t) {
                    this.intensity = t / Math.PI
                }
            }),
            this.distance = void 0 !== i ? i : 0,
            this.angle = void 0 !== n ? n : Math.PI / 3,
            this.penumbra = void 0 !== r ? r : 0,
            this.decay = void 0 !== a ? a : 1,
            this.shadow = new zi
        }
        function Hi(t, e, i, n) {
            Di.call(this, t, e),
            this.type = "PointLight",
            Object.defineProperty(this, "power", {
                get: function() {
                    return 4 * this.intensity * Math.PI
                },
                set: function(t) {
                    this.intensity = t / (4 * Math.PI)
                }
            }),
            this.distance = void 0 !== i ? i : 0,
            this.decay = void 0 !== n ? n : 1,
            this.shadow = new Bi(new Ot(90,1,.5,500))
        }
        function Vi() {
            Bi.call(this, new Dt(-5,5,5,-5,.5,500))
        }
        function ki(t, e) {
            Di.call(this, t, e),
            this.type = "DirectionalLight",
            this.position.copy(ht.DefaultUp),
            this.updateMatrix(),
            this.target = new ht,
            this.shadow = new Vi
        }
        function ji(t, e) {
            Di.call(this, t, e),
            this.type = "AmbientLight",
            this.castShadow = void 0
        }
        function Wi(t, e, i, n) {
            Di.call(this, t, e),
            this.type = "RectAreaLight",
            this.position.set(0, 1, 0),
            this.updateMatrix(),
            this.width = void 0 !== i ? i : 10,
            this.height = void 0 !== n ? n : 10
        }
        function Xi(t, e, i, n) {
            this.parameterPositions = t,
            this._cachedIndex = 0,
            this.resultBuffer = void 0 !== n ? n : new e.constructor(i),
            this.sampleValues = e,
            this.valueSize = i
        }
        function qi(t, e, i, n) {
            Xi.call(this, t, e, i, n),
            this._weightPrev = -0,
            this._offsetPrev = -0,
            this._weightNext = -0,
            this._offsetNext = -0
        }
        function Yi(t, e, i, n) {
            Xi.call(this, t, e, i, n)
        }
        function Zi(t, e, i, n) {
            Xi.call(this, t, e, i, n)
        }
        function Ji(t, e, i, n) {
            if (void 0 === t)
                throw new Error("track name is undefined");
            if (void 0 === e || 0 === e.length)
                throw new Error("no keyframes in track named " + t);
            this.name = t,
            this.times = qh.convertArray(e, this.TimeBufferType),
            this.values = qh.convertArray(i, this.ValueBufferType),
            this.setInterpolation(n || this.DefaultInterpolation),
            this.validate(),
            this.optimize()
        }
        function Qi(t, e, i, n) {
            Ji.call(this, t, e, i, n)
        }
        function Ki(t, e, i, n) {
            Xi.call(this, t, e, i, n)
        }
        function $i(t, e, i, n) {
            Ji.call(this, t, e, i, n)
        }
        function tn(t, e, i, n) {
            Ji.call(this, t, e, i, n)
        }
        function en(t, e, i, n) {
            Ji.call(this, t, e, i, n)
        }
        function nn(t, e, i) {
            Ji.call(this, t, e, i)
        }
        function rn(t, e, i, n) {
            Ji.call(this, t, e, i, n)
        }
        function an(t, e, i, n) {
            Ji.apply(this, arguments)
        }
        function on(t, e, i) {
            this.name = t,
            this.tracks = i,
            this.duration = void 0 !== e ? e : -1,
            this.uuid = ws.generateUUID(),
            this.duration < 0 && this.resetDuration(),
            this.optimize()
        }
        function sn(t) {
            this.manager = void 0 !== t ? t : Xh,
            this.textures = {}
        }
        function cn(t) {
            this.manager = void 0 !== t ? t : Xh
        }
        function hn() {
            this.onLoadStart = function() {}
            ,
            this.onLoadProgress = function() {}
            ,
            this.onLoadComplete = function() {}
        }
        function ln(t) {
            "boolean" == typeof t && (console.warn("THREE.JSONLoader: showStatus parameter has been removed from constructor."),
            t = void 0),
            this.manager = void 0 !== t ? t : Xh,
            this.withCredentials = !1
        }
        function un(t) {
            this.manager = void 0 !== t ? t : Xh,
            this.texturePath = ""
        }
        function dn(t, e, i, n, r) {
            var a = .5 * (n - e)
              , o = .5 * (r - i)
              , s = t * t
              , c = t * s;
            return (2 * i - 2 * n + a + o) * c + (-3 * i + 3 * n - 2 * a - o) * s + a * t + i
        }
        function pn(t, e) {
            var i = 1 - t;
            return i * i * e
        }
        function fn(t, e) {
            return 2 * (1 - t) * t * e
        }
        function mn(t, e) {
            return t * t * e
        }
        function gn(t, e, i, n) {
            return pn(t, e) + fn(t, i) + mn(t, n)
        }
        function vn(t, e) {
            var i = 1 - t;
            return i * i * i * e
        }
        function yn(t, e) {
            var i = 1 - t;
            return 3 * i * i * t * e
        }
        function xn(t, e) {
            return 3 * (1 - t) * t * t * e
        }
        function _n(t, e) {
            return t * t * t * e
        }
        function bn(t, e, i, n, r) {
            return vn(t, e) + yn(t, i) + xn(t, n) + _n(t, r)
        }
        function wn() {
            this.arcLengthDivisions = 200
        }
        function Mn(t, e) {
            wn.call(this),
            this.v1 = t,
            this.v2 = e
        }
        function En() {
            wn.call(this),
            this.curves = [],
            this.autoClose = !1
        }
        function Tn(t, e, i, n, r, a, o, s) {
            wn.call(this),
            this.aX = t,
            this.aY = e,
            this.xRadius = i,
            this.yRadius = n,
            this.aStartAngle = r,
            this.aEndAngle = a,
            this.aClockwise = o,
            this.aRotation = s || 0
        }
        function Sn(t) {
            wn.call(this),
            this.points = void 0 === t ? [] : t
        }
        function An(t, e, i, n) {
            wn.call(this),
            this.v0 = t,
            this.v1 = e,
            this.v2 = i,
            this.v3 = n
        }
        function Ln(t, e, i) {
            wn.call(this),
            this.v0 = t,
            this.v1 = e,
            this.v2 = i
        }
        function Rn(t) {
            En.call(this),
            this.currentPoint = new i,
            t && this.fromPoints(t)
        }
        function Pn() {
            Rn.apply(this, arguments),
            this.holes = []
        }
        function Cn() {
            this.subPaths = [],
            this.currentPath = null
        }
        function In(t) {
            this.data = t
        }
        function Un(t) {
            this.manager = void 0 !== t ? t : Xh
        }
        function Nn(t) {
            this.manager = void 0 !== t ? t : Xh
        }
        function On() {
            this.type = "StereoCamera",
            this.aspect = 1,
            this.eyeSep = .064,
            this.cameraL = new Ot,
            this.cameraL.layers.enable(1),
            this.cameraL.matrixAutoUpdate = !1,
            this.cameraR = new Ot,
            this.cameraR.layers.enable(2),
            this.cameraR.matrixAutoUpdate = !1
        }
        function Dn(t, e, i) {
            ht.call(this),
            this.type = "CubeCamera";
            var n = 90
              , r = 1
              , a = new Ot(n,r,t,e);
            a.up.set(0, -1, 0),
            a.lookAt(new h(1,0,0)),
            this.add(a);
            var o = new Ot(n,r,t,e);
            o.up.set(0, -1, 0),
            o.lookAt(new h(-1,0,0)),
            this.add(o);
            var c = new Ot(n,r,t,e);
            c.up.set(0, 0, 1),
            c.lookAt(new h(0,1,0)),
            this.add(c);
            var l = new Ot(n,r,t,e);
            l.up.set(0, 0, -1),
            l.lookAt(new h(0,-1,0)),
            this.add(l);
            var u = new Ot(n,r,t,e);
            u.up.set(0, -1, 0),
            u.lookAt(new h(0,0,1)),
            this.add(u);
            var d = new Ot(n,r,t,e);
            d.up.set(0, -1, 0),
            d.lookAt(new h(0,0,-1)),
            this.add(d);
            var p = {
                format: Bo,
                magFilter: wo,
                minFilter: wo
            };
            this.renderTarget = new s(i,i,p),
            this.renderTarget.texture.name = "CubeCamera",
            this.updateCubeMap = function(t, e) {
                null === this.parent && this.updateMatrixWorld();
                var i = this.renderTarget
                  , n = i.texture.generateMipmaps;
                i.texture.generateMipmaps = !1,
                i.activeCubeFace = 0,
                t.render(e, a, i),
                i.activeCubeFace = 1,
                t.render(e, o, i),
                i.activeCubeFace = 2,
                t.render(e, c, i),
                i.activeCubeFace = 3,
                t.render(e, l, i),
                i.activeCubeFace = 4,
                t.render(e, u, i),
                i.texture.generateMipmaps = n,
                i.activeCubeFace = 5,
                t.render(e, d, i),
                t.setRenderTarget(null )
            }
        }
        function Fn(t) {
            Ot.call(this),
            this.enabled = !1,
            this.cameras = t || []
        }
        function Bn() {
            ht.call(this),
            this.type = "AudioListener",
            this.context = el.getContext(),
            this.gain = this.context.createGain(),
            this.gain.connect(this.context.destination),
            this.filter = null
        }
        function zn(t) {
            ht.call(this),
            this.type = "Audio",
            this.context = t.context,
            this.gain = this.context.createGain(),
            this.gain.connect(t.getInput()),
            this.autoplay = !1,
            this.buffer = null ,
            this.loop = !1,
            this.startTime = 0,
            this.playbackRate = 1,
            this.isPlaying = !1,
            this.hasPlaybackControl = !0,
            this.sourceType = "empty",
            this.filters = []
        }
        function Gn(t) {
            zn.call(this, t),
            this.panner = this.context.createPanner(),
            this.panner.connect(this.gain)
        }
        function Hn(t, e) {
            this.analyser = t.context.createAnalyser(),
            this.analyser.fftSize = void 0 !== e ? e : 2048,
            this.data = new Uint8Array(this.analyser.frequencyBinCount),
            t.getOutput().connect(this.analyser)
        }
        function Vn(t, e, i) {
            this.binding = t,
            this.valueSize = i;
            var n, r = Float64Array;
            switch (e) {
            case "quaternion":
                n = this._slerp;
                break;
            case "string":
            case "bool":
                r = Array,
                n = this._select;
                break;
            default:
                n = this._lerp
            }
            this.buffer = new r(4 * i),
            this._mixBufferRegion = n,
            this.cumulativeWeight = 0,
            this.useCount = 0,
            this.referenceCount = 0
        }
        function kn(t, e, i) {
            var n = i || jn.parseTrackName(e);
            this._targetGroup = t,
            this._bindings = t.subscribe_(e, n)
        }
        function jn(t, e, i) {
            this.path = e,
            this.parsedPath = i || jn.parseTrackName(e),
            this.node = jn.findNode(t, this.parsedPath.nodeName) || t,
            this.rootNode = t
        }
        function Wn(t) {
            this.uuid = ws.generateUUID(),
            this._objects = Array.prototype.slice.call(arguments),
            this.nCachedObjects_ = 0;
            var e = {};
            this._indicesByUUID = e;
            for (var i = 0, n = arguments.length; i !== n; ++i)
                e[arguments[i].uuid] = i;
            this._paths = [],
            this._parsedPaths = [],
            this._bindings = [],
            this._bindingsIndicesByPath = {};
            var r = this;
            this.stats = {
                objects: {
                    get total() {
                        return r._objects.length
                    },
                    get inUse() {
                        return this.total - r.nCachedObjects_
                    }
                },
                get bindingsPerObject() {
                    return r._bindings.length
                }
            }
        }
        function Xn(t, e, i) {
            this._mixer = t,
            this._clip = e,
            this._localRoot = i || null ;
            for (var n = e.tracks, r = n.length, a = new Array(r), o = {
                endingStart: os,
                endingEnd: os
            }, s = 0; s !== r; ++s) {
                var c = n[s].createInterpolant(null );
                a[s] = c,
                c.settings = o
            }
            this._interpolantSettings = o,
            this._interpolants = a,
            this._propertyBindings = new Array(r),
            this._cacheIndex = null ,
            this._byClipCacheIndex = null ,
            this._timeScaleInterpolant = null ,
            this._weightInterpolant = null ,
            this.loop = es,
            this._loopCount = -1,
            this._startTime = null ,
            this.time = 0,
            this.timeScale = 1,
            this._effectiveTimeScale = 1,
            this.weight = 1,
            this._effectiveWeight = 1,
            this.repetitions = 1 / 0,
            this.paused = !1,
            this.enabled = !0,
            this.clampWhenFinished = !1,
            this.zeroSlopeAtStart = !0,
            this.zeroSlopeAtEnd = !0
        }
        function qn(t) {
            this._root = t,
            this._initMemoryManager(),
            this._accuIndex = 0,
            this.time = 0,
            this.timeScale = 1
        }
        function Yn(t) {
            "string" == typeof t && (console.warn("THREE.Uniform: Type parameter is no longer needed."),
            t = arguments[1]),
            this.value = t
        }
        function Zn() {
            Lt.call(this),
            this.type = "InstancedBufferGeometry",
            this.maxInstancedCount = void 0
        }
        function Jn(t, e, i, n) {
            this.uuid = ws.generateUUID(),
            this.data = t,
            this.itemSize = e,
            this.offset = i,
            this.normalized = n === !0
        }
        function Qn(t, e) {
            this.uuid = ws.generateUUID(),
            this.array = t,
            this.stride = e,
            this.count = void 0 !== t ? t.length / e : 0,
            this.dynamic = !1,
            this.updateRange = {
                offset: 0,
                count: -1
            },
            this.onUploadCallback = function() {}
            ,
            this.version = 0
        }
        function Kn(t, e, i) {
            Qn.call(this, t, e),
            this.meshPerAttribute = i || 1
        }
        function $n(t, e, i) {
            ft.call(this, t, e),
            this.meshPerAttribute = i || 1
        }
        function tr(t, e, i, n) {
            this.ray = new ot(t,e),
            this.near = i || 0,
            this.far = n || 1 / 0,
            this.params = {
                Mesh: {},
                Line: {},
                LOD: {},
                Points: {
                    threshold: 1
                },
                Sprite: {}
            },
            Object.defineProperties(this.params, {
                PointCloud: {
                    get: function() {
                        return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."),
                        this.Points
                    }
                }
            })
        }
        function er(t, e) {
            return t.distance - e.distance
        }
        function ir(t, e, i, n) {
            if (t.visible !== !1 && (t.raycast(e, i),
            n === !0))
                for (var r = t.children, a = 0, o = r.length; a < o; a++)
                    ir(r[a], e, i, !0)
        }
        function nr(t) {
            this.autoStart = void 0 === t || t,
            this.startTime = 0,
            this.oldTime = 0,
            this.elapsedTime = 0,
            this.running = !1
        }
        function rr(t, e, i) {
            return this.radius = void 0 !== t ? t : 1,
            this.phi = void 0 !== e ? e : 0,
            this.theta = void 0 !== i ? i : 0,
            this
        }
        function ar(t, e, i) {
            return this.radius = void 0 !== t ? t : 1,
            this.theta = void 0 !== e ? e : 0,
            this.y = void 0 !== i ? i : 0,
            this
        }
        function or(t, e) {
            Rt.call(this, t, e),
            this.animationsMap = {},
            this.animationsList = [];
            var i = this.geometry.morphTargets.length
              , n = "__default"
              , r = 0
              , a = i - 1
              , o = i / 1;
            this.createAnimation(n, r, a, o),
            this.setAnimationWeight(n, 1)
        }
        function sr(t) {
            ht.call(this),
            this.material = t,
            this.render = function(t) {}
        }
        function cr(t, e, i, n) {
            this.object = t,
            this.size = void 0 !== e ? e : 1;
            var r = void 0 !== i ? i : 16711680
              , a = void 0 !== n ? n : 1
              , o = 0
              , s = this.object.geometry;
            s && s.isGeometry ? o = 3 * s.faces.length : s && s.isBufferGeometry && (o = s.attributes.normal.count);
            var c = new Lt
              , h = new wt(2 * o * 3,3);
            c.addAttribute("position", h),
            Ae.call(this, c, new Te({
                color: r,
                linewidth: a
            })),
            this.matrixAutoUpdate = !1,
            this.update()
        }
        function hr(t) {
            ht.call(this),
            this.light = t,
            this.light.updateMatrixWorld(),
            this.matrix = t.matrixWorld,
            this.matrixAutoUpdate = !1;
            for (var e = new Lt, i = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1], n = 0, r = 1, a = 32; n < a; n++,
            r++) {
                var o = n / a * Math.PI * 2
                  , s = r / a * Math.PI * 2;
                i.push(Math.cos(o), Math.sin(o), 1, Math.cos(s), Math.sin(s), 1)
            }
            e.addAttribute("position", new wt(i,3));
            var c = new Te({
                fog: !1
            });
            this.cone = new Ae(e,c),
            this.add(this.cone),
            this.update()
        }
        function lr(t) {
            this.bones = this.getBoneList(t);
            for (var e = new Lt, i = [], n = [], r = new q(0,0,1), a = new q(0,1,0), o = 0; o < this.bones.length; o++) {
                var s = this.bones[o];
                s.parent && s.parent.isBone && (i.push(0, 0, 0),
                i.push(0, 0, 0),
                n.push(r.r, r.g, r.b),
                n.push(a.r, a.g, a.b))
            }
            e.addAttribute("position", new wt(i,3)),
            e.addAttribute("color", new wt(n,3));
            var c = new Te({
                vertexColors: wa,
                depthTest: !1,
                depthWrite: !1,
                transparent: !0
            });
            Ae.call(this, e, c),
            this.root = t,
            this.matrix = t.matrixWorld,
            this.matrixAutoUpdate = !1,
            this.update()
        }
        function ur(t, e) {
            this.light = t,
            this.light.updateMatrixWorld();
            var i = new oi(e,4,2)
              , n = new pt({
                wireframe: !0,
                fog: !1
            });
            n.color.copy(this.light.color),
            Rt.call(this, i, n),
            this.matrix = this.light.matrixWorld,
            this.matrixAutoUpdate = !1
        }
        function dr(t) {
            ht.call(this),
            this.light = t,
            this.light.updateMatrixWorld(),
            this.matrix = t.matrixWorld,
            this.matrixAutoUpdate = !1;
            var e = new Te({
                color: t.color
            })
              , i = new Lt;
            i.addAttribute("position", new ft(new Float32Array(15),3)),
            this.add(new Se(i,e)),
            this.update()
        }
        function pr(t, e) {
            ht.call(this),
            this.light = t,
            this.light.updateMatrixWorld(),
            this.matrix = t.matrixWorld,
            this.matrixAutoUpdate = !1;
            var i = new je(e);
            i.rotateY(.5 * Math.PI);
            var n = new pt({
                vertexColors: wa,
                wireframe: !0
            })
              , r = i.getAttribute("position")
              , a = new Float32Array(3 * r.count);
            i.addAttribute("color", new ft(a,3)),
            this.add(new Rt(i,n)),
            this.update()
        }
        function fr(t, e, i, n) {
            t = t || 10,
            e = e || 10,
            i = new q(void 0 !== i ? i : 4473924),
            n = new q(void 0 !== n ? n : 8947848);
            for (var r = e / 2, a = t / e, o = t / 2, s = [], c = [], h = 0, l = 0, u = -o; h <= e; h++,
            u += a) {
                s.push(-o, 0, u, o, 0, u),
                s.push(u, 0, -o, u, 0, o);
                var d = h === r ? i : n;
                d.toArray(c, l),
                l += 3,
                d.toArray(c, l),
                l += 3,
                d.toArray(c, l),
                l += 3,
                d.toArray(c, l),
                l += 3
            }
            var p = new Lt;
            p.addAttribute("position", new wt(s,3)),
            p.addAttribute("color", new wt(c,3));
            var f = new Te({
                vertexColors: wa
            });
            Ae.call(this, p, f)
        }
        function mr(t, e, i, n, r, a) {
            t = t || 10,
            e = e || 16,
            i = i || 8,
            n = n || 64,
            r = new q(void 0 !== r ? r : 4473924),
            a = new q(void 0 !== a ? a : 8947848);
            var o, s, c, h, l, u, d, p = [], f = [];
            for (h = 0; h <= e; h++)
                c = h / e * (2 * Math.PI),
                o = Math.sin(c) * t,
                s = Math.cos(c) * t,
                p.push(0, 0, 0),
                p.push(o, 0, s),
                d = 1 & h ? r : a,
                f.push(d.r, d.g, d.b),
                f.push(d.r, d.g, d.b);
            for (h = 0; h <= i; h++)
                for (d = 1 & h ? r : a,
                u = t - t / i * h,
                l = 0; l < n; l++)
                    c = l / n * (2 * Math.PI),
                    o = Math.sin(c) * u,
                    s = Math.cos(c) * u,
                    p.push(o, 0, s),
                    f.push(d.r, d.g, d.b),
                    c = (l + 1) / n * (2 * Math.PI),
                    o = Math.sin(c) * u,
                    s = Math.cos(c) * u,
                    p.push(o, 0, s),
                    f.push(d.r, d.g, d.b);
            var m = new Lt;
            m.addAttribute("position", new wt(p,3)),
            m.addAttribute("color", new wt(f,3));
            var g = new Te({
                vertexColors: wa
            });
            Ae.call(this, m, g)
        }
        function gr(t, e, i, n) {
            this.object = t,
            this.size = void 0 !== e ? e : 1;
            var r = void 0 !== i ? i : 16776960
              , a = void 0 !== n ? n : 1
              , o = 0
              , s = this.object.geometry;
            s && s.isGeometry ? o = s.faces.length : console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.");
            var c = new Lt
              , h = new wt(2 * o * 3,3);
            c.addAttribute("position", h),
            Ae.call(this, c, new Te({
                color: r,
                linewidth: a
            })),
            this.matrixAutoUpdate = !1,
            this.update()
        }
        function vr(t, e) {
            ht.call(this),
            this.light = t,
            this.light.updateMatrixWorld(),
            this.matrix = t.matrixWorld,
            this.matrixAutoUpdate = !1,
            void 0 === e && (e = 1);
            var i = new Lt;
            i.addAttribute("position", new wt([-e, e, 0, e, e, 0, e, -e, 0, -e, -e, 0, -e, e, 0],3));
            var n = new Te({
                fog: !1
            });
            this.add(new Se(i,n)),
            i = new Lt,
            i.addAttribute("position", new wt([0, 0, 0, 0, 0, 1],3)),
            this.add(new Se(i,n)),
            this.update()
        }
        function yr(t) {
            function e(t, e, n) {
                i(t, n),
                i(e, n)
            }
            function i(t, e) {
                a.push(0, 0, 0),
                o.push(e.r, e.g, e.b),
                void 0 === s[t] && (s[t] = []),
                s[t].push(a.length / 3 - 1)
            }
            var n = new Lt
              , r = new Te({
                color: 16777215,
                vertexColors: ba
            })
              , a = []
              , o = []
              , s = {}
              , c = new q(16755200)
              , h = new q(16711680)
              , l = new q(43775)
              , u = new q(16777215)
              , d = new q(3355443);
            e("n1", "n2", c),
            e("n2", "n4", c),
            e("n4", "n3", c),
            e("n3", "n1", c),
            e("f1", "f2", c),
            e("f2", "f4", c),
            e("f4", "f3", c),
            e("f3", "f1", c),
            e("n1", "f1", c),
            e("n2", "f2", c),
            e("n3", "f3", c),
            e("n4", "f4", c),
            e("p", "n1", h),
            e("p", "n2", h),
            e("p", "n3", h),
            e("p", "n4", h),
            e("u1", "u2", l),
            e("u2", "u3", l),
            e("u3", "u1", l),
            e("c", "t", u),
            e("p", "c", d),
            e("cn1", "cn2", d),
            e("cn3", "cn4", d),
            e("cf1", "cf2", d),
            e("cf3", "cf4", d),
            n.addAttribute("position", new wt(a,3)),
            n.addAttribute("color", new wt(o,3)),
            Ae.call(this, n, r),
            this.camera = t,
            this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(),
            this.matrix = t.matrixWorld,
            this.matrixAutoUpdate = !1,
            this.pointMap = s,
            this.update()
        }
        function xr(t, e) {
            this.object = t,
            void 0 === e && (e = 16776960);
            var i = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7])
              , n = new Float32Array(24)
              , r = new Lt;
            r.setIndex(new ft(i,1)),
            r.addAttribute("position", new ft(n,3)),
            Ae.call(this, r, new Te({
                color: e
            })),
            this.matrixAutoUpdate = !1,
            this.update()
        }
        function _r(t, e, i, n, r, a) {
            ht.call(this),
            void 0 === n && (n = 16776960),
            void 0 === i && (i = 1),
            void 0 === r && (r = .2 * i),
            void 0 === a && (a = .2 * r),
            void 0 === il && (il = new Lt,
            il.addAttribute("position", new wt([0, 0, 0, 0, 1, 0],3)),
            nl = new mi(0,.5,1,5,1),
            nl.translate(0, -.5, 0)),
            this.position.copy(e),
            this.line = new Se(il,new Te({
                color: n
            })),
            this.line.matrixAutoUpdate = !1,
            this.add(this.line),
            this.cone = new Rt(nl,new pt({
                color: n
            })),
            this.cone.matrixAutoUpdate = !1,
            this.add(this.cone),
            this.setDirection(t),
            this.setLength(i, r, a)
        }
        function br(t) {
            t = t || 1;
            var e = [0, 0, 0, t, 0, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 0, t]
              , i = [1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1]
              , n = new Lt;
            n.addAttribute("position", new wt(e,3)),
            n.addAttribute("color", new wt(i,3));
            var r = new Te({
                vertexColors: wa
            });
            Ae.call(this, n, r)
        }
        function wr() {
            function t(t, a, o, s) {
                e = t,
                i = o,
                n = -3 * t + 3 * a - 2 * o - s,
                r = 2 * t - 2 * a + o + s
            }
            var e = 0
              , i = 0
              , n = 0
              , r = 0;
            return {
                initCatmullRom: function(e, i, n, r, a) {
                    t(i, n, a * (n - e), a * (r - i))
                },
                initNonuniformCatmullRom: function(e, i, n, r, a, o, s) {
                    var c = (i - e) / a - (n - e) / (a + o) + (n - i) / o
                      , h = (n - i) / o - (r - i) / (o + s) + (r - n) / s;
                    c *= o,
                    h *= o,
                    t(i, n, c, h)
                },
                calc: function(t) {
                    var a = t * t
                      , o = a * t;
                    return e + i * t + n * a + r * o
                }
            }
        }
        function Mr(t) {
            wn.call(this),
            this.points = t || [],
            this.closed = !1
        }
        function Er(t, e, i, n) {
            wn.call(this),
            this.v0 = t,
            this.v1 = e,
            this.v2 = i,
            this.v3 = n
        }
        function Tr(t, e, i) {
            wn.call(this),
            this.v0 = t,
            this.v1 = e,
            this.v2 = i
        }
        function Sr(t, e) {
            wn.call(this),
            this.v1 = t,
            this.v2 = e
        }
        function Ar(t, e, i, n, r, a) {
            Tn.call(this, t, e, i, i, n, r, a)
        }
        function Lr(t, e, i, n, r, a, o) {
            return console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead."),
            new dt(t,e,i,r,a,o)
        }
        function Rr(t) {
            return console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead."),
            t
        }
        function Pr(t) {
            return void 0 === t && (t = []),
            console.warn("THREE.MultiMaterial has been removed. Use an Array instead."),
            t.isMultiMaterial = !0,
            t.materials = t,
            t.clone = function() {
                return t.slice()
            }
            ,
            t
        }
        function Cr(t, e) {
            return console.warn("THREE.PointCloud has been renamed to THREE.Points."),
            new Pe(t,e)
        }
        function Ir(t) {
            return console.warn("THREE.Particle has been renamed to THREE.Sprite."),
            new _e(t)
        }
        function Ur(t, e) {
            return console.warn("THREE.ParticleSystem has been renamed to THREE.Points."),
            new Pe(t,e)
        }
        function Nr(t) {
            return console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."),
            new Re(t)
        }
        function Or(t) {
            return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."),
            new Re(t)
        }
        function Dr(t) {
            return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."),
            new Re(t)
        }
        function Fr(t, e, i) {
            return console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead."),
            new h(t,e,i)
        }
        function Br(t, e) {
            return console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead."),
            new ft(t,e).setDynamic(!0)
        }
        function zr(t, e) {
            return console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead."),
            new mt(t,e)
        }
        function Gr(t, e) {
            return console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead."),
            new gt(t,e)
        }
        function Hr(t, e) {
            return console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead."),
            new vt(t,e)
        }
        function Vr(t, e) {
            return console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead."),
            new yt(t,e)
        }
        function kr(t, e) {
            return console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead."),
            new xt(t,e)
        }
        function jr(t, e) {
            return console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead."),
            new _t(t,e)
        }
        function Wr(t, e) {
            return console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead."),
            new bt(t,e)
        }
        function Xr(t, e) {
            return console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead."),
            new wt(t,e)
        }
        function qr(t, e) {
            return console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead."),
            new Mt(t,e)
        }
        function Yr(t) {
            console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."),
            Mr.call(this, t),
            this.type = "catmullrom",
            this.closed = !0
        }
        function Zr(t) {
            console.warn("THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."),
            Mr.call(this, t),
            this.type = "catmullrom"
        }
        function Jr(t) {
            console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."),
            Mr.call(this, t),
            this.type = "catmullrom"
        }
        function Qr(t, e) {
            return console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead."),
            new xr(t,e)
        }
        function Kr(t, e) {
            return console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead."),
            new Ae(new pi(t.geometry),new Te({
                color: void 0 !== e ? e : 16777215
            }))
        }
        function $r(t, e) {
            return console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead."),
            new Ae(new De(t.geometry),new Te({
                color: void 0 !== e ? e : 16777215
            }))
        }
        function ta(t) {
            return console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader."),
            new Pi(t)
        }
        function ea(t) {
            return console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader."),
            new Ii(t)
        }
        function ia() {
            console.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js."),
            this.projectVector = function(t, e) {
                console.warn("THREE.Projector: .projectVector() is now vector.project()."),
                t.project(e)
            }
            ,
            this.unprojectVector = function(t, e) {
                console.warn("THREE.Projector: .unprojectVector() is now vector.unproject()."),
                t.unproject(e)
            }
            ,
            this.pickingRay = function() {
                console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")
            }
        }
        function na() {
            console.error("THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js"),
            this.domElement = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"),
            this.clear = function() {}
            ,
            this.render = function() {}
            ,
            this.setClearColor = function() {}
            ,
            this.setSize = function() {}
        }
        void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52)),
        void 0 === Number.isInteger && (Number.isInteger = function(t) {
            return "number" == typeof t && isFinite(t) && Math.floor(t) === t
        }
        ),
        void 0 === Math.sign && (Math.sign = function(t) {
            return t < 0 ? -1 : t > 0 ? 1 : +t
        }
        ),
        void 0 === Function.prototype.name && Object.defineProperty(Function.prototype, "name", {
            get: function() {
                return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]
            }
        }),
        void 0 === Object.assign && !function() {
            Object.assign = function(t) {
                if (void 0 === t || null === t)
                    throw new TypeError("Cannot convert undefined or null to object");
                for (var e = Object(t), i = 1; i < arguments.length; i++) {
                    var n = arguments[i];
                    if (void 0 !== n && null !== n)
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
        }(),
        Object.assign(e.prototype, {
            addEventListener: function(t, e) {
                void 0 === this._listeners && (this._listeners = {});
                var i = this._listeners;
                void 0 === i[t] && (i[t] = []),
                i[t].indexOf(e) === -1 && i[t].push(e)
            },
            hasEventListener: function(t, e) {
                if (void 0 === this._listeners)
                    return !1;
                var i = this._listeners;
                return void 0 !== i[t] && i[t].indexOf(e) !== -1
            },
            removeEventListener: function(t, e) {
                if (void 0 !== this._listeners) {
                    var i = this._listeners
                      , n = i[t];
                    if (void 0 !== n) {
                        var r = n.indexOf(e);
                        r !== -1 && n.splice(r, 1)
                    }
                }
            },
            dispatchEvent: function(t) {
                if (void 0 !== this._listeners) {
                    var e = this._listeners
                      , i = e[t.type];
                    if (void 0 !== i) {
                        t.target = this;
                        var n = []
                          , r = 0
                          , a = i.length;
                        for (r = 0; r < a; r++)
                            n[r] = i[r];
                        for (r = 0; r < a; r++)
                            n[r].call(this, t)
                    }
                }
            }
        });
        var ra = "85"
          , aa = {
            LEFT: 0,
            MIDDLE: 1,
            RIGHT: 2
        }
          , oa = 0
          , sa = 1
          , ca = 2
          , ha = 3
          , la = 0
          , ua = 1
          , da = 0
          , pa = 1
          , fa = 2
          , ma = 0
          , ga = 1
          , va = 2
          , ya = 1
          , xa = 2
          , _a = 0
          , ba = 1
          , wa = 2
          , Ma = 0
          , Ea = 1
          , Ta = 2
          , Sa = 3
          , Aa = 4
          , La = 5
          , Ra = 100
          , Pa = 101
          , Ca = 102
          , Ia = 103
          , Ua = 104
          , Na = 200
          , Oa = 201
          , Da = 202
          , Fa = 203
          , Ba = 204
          , za = 205
          , Ga = 206
          , Ha = 207
          , Va = 208
          , ka = 209
          , ja = 210
          , Wa = 0
          , Xa = 1
          , qa = 2
          , Ya = 3
          , Za = 4
          , Ja = 5
          , Qa = 6
          , Ka = 7
          , $a = 0
          , to = 1
          , eo = 2
          , io = 0
          , no = 1
          , ro = 2
          , ao = 3
          , oo = 4
          , so = 300
          , co = 301
          , ho = 302
          , lo = 303
          , uo = 304
          , po = 305
          , fo = 306
          , mo = 307
          , go = 1e3
          , vo = 1001
          , yo = 1002
          , xo = 1003
          , _o = 1004
          , bo = 1005
          , wo = 1006
          , Mo = 1007
          , Eo = 1008
          , To = 1009
          , So = 1010
          , Ao = 1011
          , Lo = 1012
          , Ro = 1013
          , Po = 1014
          , Co = 1015
          , Io = 1016
          , Uo = 1017
          , No = 1018
          , Oo = 1019
          , Do = 1020
          , Fo = 1021
          , Bo = 1022
          , zo = 1023
          , Go = 1024
          , Ho = 1025
          , Vo = zo
          , ko = 1026
          , jo = 1027
          , Wo = 2001
          , Xo = 2002
          , qo = 2003
          , Yo = 2004
          , Zo = 2100
          , Jo = 2101
          , Qo = 2102
          , Ko = 2103
          , $o = 2151
          , ts = 2200
          , es = 2201
          , is = 2202
          , ns = 2300
          , rs = 2301
          , as = 2302
          , os = 2400
          , ss = 2401
          , cs = 2402
          , hs = 0
          , ls = 1
          , us = 2
          , ds = 3e3
          , ps = 3001
          , fs = 3007
          , ms = 3002
          , gs = 3003
          , vs = 3004
          , ys = 3005
          , xs = 3006
          , _s = 3200
          , bs = 3201
          , ws = {
            DEG2RAD: Math.PI / 180,
            RAD2DEG: 180 / Math.PI,
            generateUUID: function() {
                var t, e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), i = new Array(36), n = 0;
                return function() {
                    for (var r = 0; r < 36; r++)
                        8 === r || 13 === r || 18 === r || 23 === r ? i[r] = "-" : 14 === r ? i[r] = "4" : (n <= 2 && (n = 33554432 + 16777216 * Math.random() | 0),
                        t = 15 & n,
                        n >>= 4,
                        i[r] = e[19 === r ? 3 & t | 8 : t]);
                    return i.join("")
                }
            }(),
            clamp: function(t, e, i) {
                return Math.max(e, Math.min(i, t))
            },
            euclideanModulo: function(t, e) {
                return (t % e + e) % e
            },
            mapLinear: function(t, e, i, n, r) {
                return n + (t - e) * (r - n) / (i - e)
            },
            lerp: function(t, e, i) {
                return (1 - i) * t + i * e
            },
            smoothstep: function(t, e, i) {
                return t <= e ? 0 : t >= i ? 1 : (t = (t - e) / (i - e),
                t * t * (3 - 2 * t))
            },
            smootherstep: function(t, e, i) {
                return t <= e ? 0 : t >= i ? 1 : (t = (t - e) / (i - e),
                t * t * t * (t * (6 * t - 15) + 10))
            },
            randInt: function(t, e) {
                return t + Math.floor(Math.random() * (e - t + 1))
            },
            randFloat: function(t, e) {
                return t + Math.random() * (e - t)
            },
            randFloatSpread: function(t) {
                return t * (.5 - Math.random())
            },
            degToRad: function(t) {
                return t * ws.DEG2RAD
            },
            radToDeg: function(t) {
                return t * ws.RAD2DEG
            },
            isPowerOfTwo: function(t) {
                return 0 === (t & t - 1) && 0 !== t
            },
            nearestPowerOfTwo: function(t) {
                return Math.pow(2, Math.round(Math.log(t) / Math.LN2))
            },
            nextPowerOfTwo: function(t) {
                return t--,
                t |= t >> 1,
                t |= t >> 2,
                t |= t >> 4,
                t |= t >> 8,
                t |= t >> 16,
                t++,
                t
            }
        };
        Object.defineProperties(i.prototype, {
            width: {
                get: function() {
                    return this.x
                },
                set: function(t) {
                    this.x = t
                }
            },
            height: {
                get: function() {
                    return this.y
                },
                set: function(t) {
                    this.y = t
                }
            }
        }),
        Object.assign(i.prototype, {
            isVector2: !0,
            set: function(t, e) {
                return this.x = t,
                this.y = e,
                this
            },
            setScalar: function(t) {
                return this.x = t,
                this.y = t,
                this
            },
            setX: function(t) {
                return this.x = t,
                this
            },
            setY: function(t) {
                return this.y = t,
                this
            },
            setComponent: function(t, e) {
                switch (t) {
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                default:
                    throw new Error("index is out of range: " + t)
                }
                return this
            },
            getComponent: function(t) {
                switch (t) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                default:
                    throw new Error("index is out of range: " + t)
                }
            },
            clone: function() {
                return new this.constructor(this.x,this.y)
            },
            copy: function(t) {
                return this.x = t.x,
                this.y = t.y,
                this
            },
            add: function(t, e) {
                return void 0 !== e ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
                this.addVectors(t, e)) : (this.x += t.x,
                this.y += t.y,
                this)
            },
            addScalar: function(t) {
                return this.x += t,
                this.y += t,
                this
            },
            addVectors: function(t, e) {
                return this.x = t.x + e.x,
                this.y = t.y + e.y,
                this
            },
            addScaledVector: function(t, e) {
                return this.x += t.x * e,
                this.y += t.y * e,
                this
            },
            sub: function(t, e) {
                return void 0 !== e ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
                this.subVectors(t, e)) : (this.x -= t.x,
                this.y -= t.y,
                this)
            },
            subScalar: function(t) {
                return this.x -= t,
                this.y -= t,
                this
            },
            subVectors: function(t, e) {
                return this.x = t.x - e.x,
                this.y = t.y - e.y,
                this
            },
            multiply: function(t) {
                return this.x *= t.x,
                this.y *= t.y,
                this
            },
            multiplyScalar: function(t) {
                return this.x *= t,
                this.y *= t,
                this
            },
            divide: function(t) {
                return this.x /= t.x,
                this.y /= t.y,
                this
            },
            divideScalar: function(t) {
                return this.multiplyScalar(1 / t)
            },
            min: function(t) {
                return this.x = Math.min(this.x, t.x),
                this.y = Math.min(this.y, t.y),
                this
            },
            max: function(t) {
                return this.x = Math.max(this.x, t.x),
                this.y = Math.max(this.y, t.y),
                this
            },
            clamp: function(t, e) {
                return this.x = Math.max(t.x, Math.min(e.x, this.x)),
                this.y = Math.max(t.y, Math.min(e.y, this.y)),
                this
            },
            clampScalar: function() {
                var t = new i
                  , e = new i;
                return function(i, n) {
                    return t.set(i, i),
                    e.set(n, n),
                    this.clamp(t, e)
                }
            }(),
            clampLength: function(t, e) {
                var i = this.length();
                return this.multiplyScalar(Math.max(t, Math.min(e, i)) / i)
            },
            floor: function() {
                return this.x = Math.floor(this.x),
                this.y = Math.floor(this.y),
                this
            },
            ceil: function() {
                return this.x = Math.ceil(this.x),
                this.y = Math.ceil(this.y),
                this
            },
            round: function() {
                return this.x = Math.round(this.x),
                this.y = Math.round(this.y),
                this
            },
            roundToZero: function() {
                return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
                this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
                this
            },
            negate: function() {
                return this.x = -this.x,
                this.y = -this.y,
                this
            },
            dot: function(t) {
                return this.x * t.x + this.y * t.y
            },
            lengthSq: function() {
                return this.x * this.x + this.y * this.y
            },
            length: function() {
                return Math.sqrt(this.x * this.x + this.y * this.y)
            },
            lengthManhattan: function() {
                return Math.abs(this.x) + Math.abs(this.y)
            },
            normalize: function() {
                return this.divideScalar(this.length())
            },
            angle: function t() {
                var t = Math.atan2(this.y, this.x);
                return t < 0 && (t += 2 * Math.PI),
                t
            },
            distanceTo: function(t) {
                return Math.sqrt(this.distanceToSquared(t))
            },
            distanceToSquared: function(t) {
                var e = this.x - t.x
                  , i = this.y - t.y;
                return e * e + i * i
            },
            distanceToManhattan: function(t) {
                return Math.abs(this.x - t.x) + Math.abs(this.y - t.y)
            },
            setLength: function(t) {
                return this.multiplyScalar(t / this.length())
            },
            lerp: function(t, e) {
                return this.x += (t.x - this.x) * e,
                this.y += (t.y - this.y) * e,
                this
            },
            lerpVectors: function(t, e, i) {
                return this.subVectors(e, t).multiplyScalar(i).add(t)
            },
            equals: function(t) {
                return t.x === this.x && t.y === this.y
            },
            fromArray: function(t, e) {
                return void 0 === e && (e = 0),
                this.x = t[e],
                this.y = t[e + 1],
                this
            },
            toArray: function(t, e) {
                return void 0 === t && (t = []),
                void 0 === e && (e = 0),
                t[e] = this.x,
                t[e + 1] = this.y,
                t
            },
            fromBufferAttribute: function(t, e, i) {
                return void 0 !== i && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),
                this.x = t.getX(e),
                this.y = t.getY(e),
                this
            },
            rotateAround: function(t, e) {
                var i = Math.cos(e)
                  , n = Math.sin(e)
                  , r = this.x - t.x
                  , a = this.y - t.y;
                return this.x = r * i - a * n + t.x,
                this.y = r * n + a * i + t.y,
                this
            }
        });
        var Ms = 0;
        n.DEFAULT_IMAGE = void 0,
        n.DEFAULT_MAPPING = so,
        Object.defineProperty(n.prototype, "needsUpdate", {
            set: function(t) {
                t === !0 && this.version++
            }
        }),
        Object.assign(n.prototype, e.prototype, {
            constructor: n,
            isTexture: !0,
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(t) {
                return this.name = t.name,
                this.image = t.image,
                this.mipmaps = t.mipmaps.slice(0),
                this.mapping = t.mapping,
                this.wrapS = t.wrapS,
                this.wrapT = t.wrapT,
                this.magFilter = t.magFilter,
                this.minFilter = t.minFilter,
                this.anisotropy = t.anisotropy,
                this.format = t.format,
                this.type = t.type,
                this.offset.copy(t.offset),
                this.repeat.copy(t.repeat),
                this.generateMipmaps = t.generateMipmaps,
                this.premultiplyAlpha = t.premultiplyAlpha,
                this.flipY = t.flipY,
                this.unpackAlignment = t.unpackAlignment,
                this.encoding = t.encoding,
                this
            },
            toJSON: function(t) {
                function e(t) {
                    var e;
                    return void 0 !== t.toDataURL ? e = t : (e = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"),
                    e.width = t.width,
                    e.height = t.height,
                    e.getContext("2d").drawImage(t, 0, 0, t.width, t.height)),
                    e.width > 2048 || e.height > 2048 ? e.toDataURL("image/jpeg", .6) : e.toDataURL("image/png")
                }
                if (void 0 !== t.textures[this.uuid])
                    return t.textures[this.uuid];
                var i = {
                    metadata: {
                        version: 4.5,
                        type: "Texture",
                        generator: "Texture.toJSON"
                    },
                    uuid: this.uuid,
                    name: this.name,
                    mapping: this.mapping,
                    repeat: [this.repeat.x, this.repeat.y],
                    offset: [this.offset.x, this.offset.y],
                    wrap: [this.wrapS, this.wrapT],
                    minFilter: this.minFilter,
                    magFilter: this.magFilter,
                    anisotropy: this.anisotropy,
                    flipY: this.flipY
                };
                if (void 0 !== this.image) {
                    var n = this.image;
                    void 0 === n.uuid && (n.uuid = ws.generateUUID()),
                    void 0 === t.images[n.uuid] && (t.images[n.uuid] = {
                        uuid: n.uuid,
                        url: e(n)
                    }),
                    i.image = n.uuid
                }
                return t.textures[this.uuid] = i,
                i
            },
            dispose: function() {
                this.dispatchEvent({
                    type: "dispose"
                })
            },
            transformUv: function(t) {
                if (this.mapping === so) {
                    if (t.multiply(this.repeat),
                    t.add(this.offset),
                    t.x < 0 || t.x > 1)
                        switch (this.wrapS) {
                        case go:
                            t.x = t.x - Math.floor(t.x);
                            break;
                        case vo:
                            t.x = t.x < 0 ? 0 : 1;
                            break;
                        case yo:
                            1 === Math.abs(Math.floor(t.x) % 2) ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x)
                        }
                    if (t.y < 0 || t.y > 1)
                        switch (this.wrapT) {
                        case go:
                            t.y = t.y - Math.floor(t.y);
                            break;
                        case vo:
                            t.y = t.y < 0 ? 0 : 1;
                            break;
                        case yo:
                            1 === Math.abs(Math.floor(t.y) % 2) ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y)
                        }
                    this.flipY && (t.y = 1 - t.y)
                }
            }
        }),
        Object.assign(r.prototype, {
            isVector4: !0,
            set: function(t, e, i, n) {
                return this.x = t,
                this.y = e,
                this.z = i,
                this.w = n,
                this
            },
            setScalar: function(t) {
                return this.x = t,
                this.y = t,
                this.z = t,
                this.w = t,
                this
            },
            setX: function(t) {
                return this.x = t,
                this
            },
            setY: function(t) {
                return this.y = t,
                this
            },
            setZ: function(t) {
                return this.z = t,
                this
            },
            setW: function(t) {
                return this.w = t,
                this
            },
            setComponent: function(t, e) {
                switch (t) {
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                case 2:
                    this.z = e;
                    break;
                case 3:
                    this.w = e;
                    break;
                default:
                    throw new Error("index is out of range: " + t)
                }
                return this
            },
            getComponent: function(t) {
                switch (t) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                case 3:
                    return this.w;
                default:
                    throw new Error("index is out of range: " + t)
                }
            },
            clone: function() {
                return new this.constructor(this.x,this.y,this.z,this.w)
            },
            copy: function(t) {
                return this.x = t.x,
                this.y = t.y,
                this.z = t.z,
                this.w = void 0 !== t.w ? t.w : 1,
                this
            },
            add: function(t, e) {
                return void 0 !== e ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
                this.addVectors(t, e)) : (this.x += t.x,
                this.y += t.y,
                this.z += t.z,
                this.w += t.w,
                this)
            },
            addScalar: function(t) {
                return this.x += t,
                this.y += t,
                this.z += t,
                this.w += t,
                this
            },
            addVectors: function(t, e) {
                return this.x = t.x + e.x,
                this.y = t.y + e.y,
                this.z = t.z + e.z,
                this.w = t.w + e.w,
                this
            },
            addScaledVector: function(t, e) {
                return this.x += t.x * e,
                this.y += t.y * e,
                this.z += t.z * e,
                this.w += t.w * e,
                this
            },
            sub: function(t, e) {
                return void 0 !== e ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
                this.subVectors(t, e)) : (this.x -= t.x,
                this.y -= t.y,
                this.z -= t.z,
                this.w -= t.w,
                this)
            },
            subScalar: function(t) {
                return this.x -= t,
                this.y -= t,
                this.z -= t,
                this.w -= t,
                this
            },
            subVectors: function(t, e) {
                return this.x = t.x - e.x,
                this.y = t.y - e.y,
                this.z = t.z - e.z,
                this.w = t.w - e.w,
                this
            },
            multiplyScalar: function(t) {
                return this.x *= t,
                this.y *= t,
                this.z *= t,
                this.w *= t,
                this
            },
            applyMatrix4: function(t) {
                var e = this.x
                  , i = this.y
                  , n = this.z
                  , r = this.w
                  , a = t.elements;
                return this.x = a[0] * e + a[4] * i + a[8] * n + a[12] * r,
                this.y = a[1] * e + a[5] * i + a[9] * n + a[13] * r,
                this.z = a[2] * e + a[6] * i + a[10] * n + a[14] * r,
                this.w = a[3] * e + a[7] * i + a[11] * n + a[15] * r,
                this
            },
            divideScalar: function(t) {
                return this.multiplyScalar(1 / t)
            },
            setAxisAngleFromQuaternion: function(t) {
                this.w = 2 * Math.acos(t.w);
                var e = Math.sqrt(1 - t.w * t.w);
                return e < 1e-4 ? (this.x = 1,
                this.y = 0,
                this.z = 0) : (this.x = t.x / e,
                this.y = t.y / e,
                this.z = t.z / e),
                this
            },
            setAxisAngleFromRotationMatrix: function(t) {
                var e, i, n, r, a = .01, o = .1, s = t.elements, c = s[0], h = s[4], l = s[8], u = s[1], d = s[5], p = s[9], f = s[2], m = s[6], g = s[10];
                if (Math.abs(h - u) < a && Math.abs(l - f) < a && Math.abs(p - m) < a) {
                    if (Math.abs(h + u) < o && Math.abs(l + f) < o && Math.abs(p + m) < o && Math.abs(c + d + g - 3) < o)
                        return this.set(1, 0, 0, 0),
                        this;
                    e = Math.PI;
                    var v = (c + 1) / 2
                      , y = (d + 1) / 2
                      , x = (g + 1) / 2
                      , _ = (h + u) / 4
                      , b = (l + f) / 4
                      , w = (p + m) / 4;
                    return v > y && v > x ? v < a ? (i = 0,
                    n = .707106781,
                    r = .707106781) : (i = Math.sqrt(v),
                    n = _ / i,
                    r = b / i) : y > x ? y < a ? (i = .707106781,
                    n = 0,
                    r = .707106781) : (n = Math.sqrt(y),
                    i = _ / n,
                    r = w / n) : x < a ? (i = .707106781,
                    n = .707106781,
                    r = 0) : (r = Math.sqrt(x),
                    i = b / r,
                    n = w / r),
                    this.set(i, n, r, e),
                    this
                }
                var M = Math.sqrt((m - p) * (m - p) + (l - f) * (l - f) + (u - h) * (u - h));
                return Math.abs(M) < .001 && (M = 1),
                this.x = (m - p) / M,
                this.y = (l - f) / M,
                this.z = (u - h) / M,
                this.w = Math.acos((c + d + g - 1) / 2),
                this
            },
            min: function(t) {
                return this.x = Math.min(this.x, t.x),
                this.y = Math.min(this.y, t.y),
                this.z = Math.min(this.z, t.z),
                this.w = Math.min(this.w, t.w),
                this
            },
            max: function(t) {
                return this.x = Math.max(this.x, t.x),
                this.y = Math.max(this.y, t.y),
                this.z = Math.max(this.z, t.z),
                this.w = Math.max(this.w, t.w),
                this
            },
            clamp: function(t, e) {
                return this.x = Math.max(t.x, Math.min(e.x, this.x)),
                this.y = Math.max(t.y, Math.min(e.y, this.y)),
                this.z = Math.max(t.z, Math.min(e.z, this.z)),
                this.w = Math.max(t.w, Math.min(e.w, this.w)),
                this
            },
            clampScalar: function() {
                var t = new r
                  , e = new r;
                return function(i, n) {
                    return t.set(i, i, i, i),
                    e.set(n, n, n, n),
                    this.clamp(t, e)
                }
            }(),
            floor: function() {
                return this.x = Math.floor(this.x),
                this.y = Math.floor(this.y),
                this.z = Math.floor(this.z),
                this.w = Math.floor(this.w),
                this
            },
            ceil: function() {
                return this.x = Math.ceil(this.x),
                this.y = Math.ceil(this.y),
                this.z = Math.ceil(this.z),
                this.w = Math.ceil(this.w),
                this
            },
            round: function() {
                return this.x = Math.round(this.x),
                this.y = Math.round(this.y),
                this.z = Math.round(this.z),
                this.w = Math.round(this.w),
                this
            },
            roundToZero: function() {
                return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
                this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
                this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z),
                this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w),
                this
            },
            negate: function() {
                return this.x = -this.x,
                this.y = -this.y,
                this.z = -this.z,
                this.w = -this.w,
                this
            },
            dot: function(t) {
                return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w
            },
            lengthSq: function() {
                return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
            },
            length: function() {
                return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
            },
            lengthManhattan: function() {
                return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
            },
            normalize: function() {
                return this.divideScalar(this.length())
            },
            setLength: function(t) {
                return this.multiplyScalar(t / this.length())
            },
            lerp: function(t, e) {
                return this.x += (t.x - this.x) * e,
                this.y += (t.y - this.y) * e,
                this.z += (t.z - this.z) * e,
                this.w += (t.w - this.w) * e,
                this
            },
            lerpVectors: function(t, e, i) {
                return this.subVectors(e, t).multiplyScalar(i).add(t)
            },
            equals: function(t) {
                return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
            },
            fromArray: function(t, e) {
                return void 0 === e && (e = 0),
                this.x = t[e],
                this.y = t[e + 1],
                this.z = t[e + 2],
                this.w = t[e + 3],
                this
            },
            toArray: function(t, e) {
                return void 0 === t && (t = []),
                void 0 === e && (e = 0),
                t[e] = this.x,
                t[e + 1] = this.y,
                t[e + 2] = this.z,
                t[e + 3] = this.w,
                t
            },
            fromBufferAttribute: function(t, e, i) {
                return void 0 !== i && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),
                this.x = t.getX(e),
                this.y = t.getY(e),
                this.z = t.getZ(e),
                this.w = t.getW(e),
                this
            }
        }),
        Object.assign(a.prototype, e.prototype, {
            isWebGLRenderTarget: !0,
            setSize: function(t, e) {
                this.width === t && this.height === e || (this.width = t,
                this.height = e,
                this.dispose()),
                this.viewport.set(0, 0, t, e),
                this.scissor.set(0, 0, t, e)
            },
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(t) {
                return this.width = t.width,
                this.height = t.height,
                this.viewport.copy(t.viewport),
                this.texture = t.texture.clone(),
                this.depthBuffer = t.depthBuffer,
                this.stencilBuffer = t.stencilBuffer,
                this.depthTexture = t.depthTexture,
                this
            },
            dispose: function() {
                this.dispatchEvent({
                    type: "dispose"
                })
            }
        }),
        s.prototype = Object.create(a.prototype),
        s.prototype.constructor = s,
        s.prototype.isWebGLRenderTargetCube = !0,
        Object.assign(c, {
            slerp: function(t, e, i, n) {
                return i.copy(t).slerp(e, n)
            },
            slerpFlat: function(t, e, i, n, r, a, o) {
                var s = i[n + 0]
                  , c = i[n + 1]
                  , h = i[n + 2]
                  , l = i[n + 3]
                  , u = r[a + 0]
                  , d = r[a + 1]
                  , p = r[a + 2]
                  , f = r[a + 3];
                if (l !== f || s !== u || c !== d || h !== p) {
                    var m = 1 - o
                      , g = s * u + c * d + h * p + l * f
                      , v = g >= 0 ? 1 : -1
                      , y = 1 - g * g;
                    if (y > Number.EPSILON) {
                        var x = Math.sqrt(y)
                          , _ = Math.atan2(x, g * v);
                        m = Math.sin(m * _) / x,
                        o = Math.sin(o * _) / x
                    }
                    var b = o * v;
                    if (s = s * m + u * b,
                    c = c * m + d * b,
                    h = h * m + p * b,
                    l = l * m + f * b,
                    m === 1 - o) {
                        var w = 1 / Math.sqrt(s * s + c * c + h * h + l * l);
                        s *= w,
                        c *= w,
                        h *= w,
                        l *= w
                    }
                }
                t[e] = s,
                t[e + 1] = c,
                t[e + 2] = h,
                t[e + 3] = l
            }
        }),
        Object.defineProperties(c.prototype, {
            x: {
                get: function() {
                    return this._x
                },
                set: function(t) {
                    this._x = t,
                    this.onChangeCallback()
                }
            },
            y: {
                get: function() {
                    return this._y
                },
                set: function(t) {
                    this._y = t,
                    this.onChangeCallback()
                }
            },
            z: {
                get: function() {
                    return this._z
                },
                set: function(t) {
                    this._z = t,
                    this.onChangeCallback()
                }
            },
            w: {
                get: function() {
                    return this._w
                },
                set: function(t) {
                    this._w = t,
                    this.onChangeCallback()
                }
            }
        }),
        Object.assign(c.prototype, {
            set: function(t, e, i, n) {
                return this._x = t,
                this._y = e,
                this._z = i,
                this._w = n,
                this.onChangeCallback(),
                this
            },
            clone: function() {
                return new this.constructor(this._x,this._y,this._z,this._w)
            },
            copy: function(t) {
                return this._x = t.x,
                this._y = t.y,
                this._z = t.z,
                this._w = t.w,
                this.onChangeCallback(),
                this
            },
            setFromEuler: function(t, e) {
                if ((t && t.isEuler) === !1)
                    throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
                var i = t._x
                  , n = t._y
                  , r = t._z
                  , a = t.order
                  , o = Math.cos
                  , s = Math.sin
                  , c = o(i / 2)
                  , h = o(n / 2)
                  , l = o(r / 2)
                  , u = s(i / 2)
                  , d = s(n / 2)
                  , p = s(r / 2);
                return "XYZ" === a ? (this._x = u * h * l + c * d * p,
                this._y = c * d * l - u * h * p,
                this._z = c * h * p + u * d * l,
                this._w = c * h * l - u * d * p) : "YXZ" === a ? (this._x = u * h * l + c * d * p,
                this._y = c * d * l - u * h * p,
                this._z = c * h * p - u * d * l,
                this._w = c * h * l + u * d * p) : "ZXY" === a ? (this._x = u * h * l - c * d * p,
                this._y = c * d * l + u * h * p,
                this._z = c * h * p + u * d * l,
                this._w = c * h * l - u * d * p) : "ZYX" === a ? (this._x = u * h * l - c * d * p,
                this._y = c * d * l + u * h * p,
                this._z = c * h * p - u * d * l,
                this._w = c * h * l + u * d * p) : "YZX" === a ? (this._x = u * h * l + c * d * p,
                this._y = c * d * l + u * h * p,
                this._z = c * h * p - u * d * l,
                this._w = c * h * l - u * d * p) : "XZY" === a && (this._x = u * h * l - c * d * p,
                this._y = c * d * l - u * h * p,
                this._z = c * h * p + u * d * l,
                this._w = c * h * l + u * d * p),
                e !== !1 && this.onChangeCallback(),
                this
            },
            setFromAxisAngle: function(t, e) {
                var i = e / 2
                  , n = Math.sin(i);
                return this._x = t.x * n,
                this._y = t.y * n,
                this._z = t.z * n,
                this._w = Math.cos(i),
                this.onChangeCallback(),
                this
            },
            setFromRotationMatrix: function(t) {
                var e, i = t.elements, n = i[0], r = i[4], a = i[8], o = i[1], s = i[5], c = i[9], h = i[2], l = i[6], u = i[10], d = n + s + u;
                return d > 0 ? (e = .5 / Math.sqrt(d + 1),
                this._w = .25 / e,
                this._x = (l - c) * e,
                this._y = (a - h) * e,
                this._z = (o - r) * e) : n > s && n > u ? (e = 2 * Math.sqrt(1 + n - s - u),
                this._w = (l - c) / e,
                this._x = .25 * e,
                this._y = (r + o) / e,
                this._z = (a + h) / e) : s > u ? (e = 2 * Math.sqrt(1 + s - n - u),
                this._w = (a - h) / e,
                this._x = (r + o) / e,
                this._y = .25 * e,
                this._z = (c + l) / e) : (e = 2 * Math.sqrt(1 + u - n - s),
                this._w = (o - r) / e,
                this._x = (a + h) / e,
                this._y = (c + l) / e,
                this._z = .25 * e),
                this.onChangeCallback(),
                this
            },
            setFromUnitVectors: function() {
                var t, e = new h, i = 1e-6;
                return function(n, r) {
                    return void 0 === e && (e = new h),
                    t = n.dot(r) + 1,
                    t < i ? (t = 0,
                    Math.abs(n.x) > Math.abs(n.z) ? e.set(-n.y, n.x, 0) : e.set(0, -n.z, n.y)) : e.crossVectors(n, r),
                    this._x = e.x,
                    this._y = e.y,
                    this._z = e.z,
                    this._w = t,
                    this.normalize()
                }
            }(),
            inverse: function() {
                return this.conjugate().normalize()
            },
            conjugate: function() {
                return this._x *= -1,
                this._y *= -1,
                this._z *= -1,
                this.onChangeCallback(),
                this
            },
            dot: function(t) {
                return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
            },
            lengthSq: function() {
                return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
            },
            length: function() {
                return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
            },
            normalize: function() {
                var t = this.length();
                return 0 === t ? (this._x = 0,
                this._y = 0,
                this._z = 0,
                this._w = 1) : (t = 1 / t,
                this._x = this._x * t,
                this._y = this._y * t,
                this._z = this._z * t,
                this._w = this._w * t),
                this.onChangeCallback(),
                this
            },
            multiply: function(t, e) {
                return void 0 !== e ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),
                this.multiplyQuaternions(t, e)) : this.multiplyQuaternions(this, t)
            },
            premultiply: function(t) {
                return this.multiplyQuaternions(t, this)
            },
            multiplyQuaternions: function(t, e) {
                var i = t._x
                  , n = t._y
                  , r = t._z
                  , a = t._w
                  , o = e._x
                  , s = e._y
                  , c = e._z
                  , h = e._w;
                return this._x = i * h + a * o + n * c - r * s,
                this._y = n * h + a * s + r * o - i * c,
                this._z = r * h + a * c + i * s - n * o,
                this._w = a * h - i * o - n * s - r * c,
                this.onChangeCallback(),
                this
            },
            slerp: function(t, e) {
                if (0 === e)
                    return this;
                if (1 === e)
                    return this.copy(t);
                var i = this._x
                  , n = this._y
                  , r = this._z
                  , a = this._w
                  , o = a * t._w + i * t._x + n * t._y + r * t._z;
                if (o < 0 ? (this._w = -t._w,
                this._x = -t._x,
                this._y = -t._y,
                this._z = -t._z,
                o = -o) : this.copy(t),
                o >= 1)
                    return this._w = a,
                    this._x = i,
                    this._y = n,
                    this._z = r,
                    this;
                var s = Math.sqrt(1 - o * o);
                if (Math.abs(s) < .001)
                    return this._w = .5 * (a + this._w),
                    this._x = .5 * (i + this._x),
                    this._y = .5 * (n + this._y),
                    this._z = .5 * (r + this._z),
                    this;
                var c = Math.atan2(s, o)
                  , h = Math.sin((1 - e) * c) / s
                  , l = Math.sin(e * c) / s;
                return this._w = a * h + this._w * l,
                this._x = i * h + this._x * l,
                this._y = n * h + this._y * l,
                this._z = r * h + this._z * l,
                this.onChangeCallback(),
                this
            },
            equals: function(t) {
                return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w
            },
            fromArray: function(t, e) {
                return void 0 === e && (e = 0),
                this._x = t[e],
                this._y = t[e + 1],
                this._z = t[e + 2],
                this._w = t[e + 3],
                this.onChangeCallback(),
                this
            },
            toArray: function(t, e) {
                return void 0 === t && (t = []),
                void 0 === e && (e = 0),
                t[e] = this._x,
                t[e + 1] = this._y,
                t[e + 2] = this._z,
                t[e + 3] = this._w,
                t
            },
            onChange: function(t) {
                return this.onChangeCallback = t,
                this
            },
            onChangeCallback: function() {}
        }),
        Object.assign(h.prototype, {
            isVector3: !0,
            set: function(t, e, i) {
                return this.x = t,
                this.y = e,
                this.z = i,
                this
            },
            setScalar: function(t) {
                return this.x = t,
                this.y = t,
                this.z = t,
                this
            },
            setX: function(t) {
                return this.x = t,
                this
            },
            setY: function(t) {
                return this.y = t,
                this
            },
            setZ: function(t) {
                return this.z = t,
                this
            },
            setComponent: function(t, e) {
                switch (t) {
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                case 2:
                    this.z = e;
                    break;
                default:
                    throw new Error("index is out of range: " + t)
                }
                return this
            },
            getComponent: function(t) {
                switch (t) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                default:
                    throw new Error("index is out of range: " + t)
                }
            },
            clone: function() {
                return new this.constructor(this.x,this.y,this.z)
            },
            copy: function(t) {
                return this.x = t.x,
                this.y = t.y,
                this.z = t.z,
                this
            },
            add: function(t, e) {
                return void 0 !== e ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
                this.addVectors(t, e)) : (this.x += t.x,
                this.y += t.y,
                this.z += t.z,
                this)
            },
            addScalar: function(t) {
                return this.x += t,
                this.y += t,
                this.z += t,
                this
            },
            addVectors: function(t, e) {
                return this.x = t.x + e.x,
                this.y = t.y + e.y,
                this.z = t.z + e.z,
                this
            },
            addScaledVector: function(t, e) {
                return this.x += t.x * e,
                this.y += t.y * e,
                this.z += t.z * e,
                this
            },
            sub: function(t, e) {
                return void 0 !== e ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
                this.subVectors(t, e)) : (this.x -= t.x,
                this.y -= t.y,
                this.z -= t.z,
                this)
            },
            subScalar: function(t) {
                return this.x -= t,
                this.y -= t,
                this.z -= t,
                this
            },
            subVectors: function(t, e) {
                return this.x = t.x - e.x,
                this.y = t.y - e.y,
                this.z = t.z - e.z,
                this
            },
            multiply: function(t, e) {
                return void 0 !== e ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),
                this.multiplyVectors(t, e)) : (this.x *= t.x,
                this.y *= t.y,
                this.z *= t.z,
                this)
            },
            multiplyScalar: function(t) {
                return this.x *= t,
                this.y *= t,
                this.z *= t,
                this
            },
            multiplyVectors: function(t, e) {
                return this.x = t.x * e.x,
                this.y = t.y * e.y,
                this.z = t.z * e.z,
                this
            },
            applyEuler: function() {
                var t = new c;
                return function(e) {
                    return (e && e.isEuler) === !1 && console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),
                    this.applyQuaternion(t.setFromEuler(e))
                }
            }(),
            applyAxisAngle: function() {
                var t = new c;
                return function(e, i) {
                    return this.applyQuaternion(t.setFromAxisAngle(e, i))
                }
            }(),
            applyMatrix3: function(t) {
                var e = this.x
                  , i = this.y
                  , n = this.z
                  , r = t.elements;
                return this.x = r[0] * e + r[3] * i + r[6] * n,
                this.y = r[1] * e + r[4] * i + r[7] * n,
                this.z = r[2] * e + r[5] * i + r[8] * n,
                this
            },
            applyMatrix4: function(t) {
                var e = this.x
                  , i = this.y
                  , n = this.z
                  , r = t.elements;
                this.x = r[0] * e + r[4] * i + r[8] * n + r[12],
                this.y = r[1] * e + r[5] * i + r[9] * n + r[13],
                this.z = r[2] * e + r[6] * i + r[10] * n + r[14];
                var a = r[3] * e + r[7] * i + r[11] * n + r[15];
                return this.divideScalar(a)
            },
            applyQuaternion: function(t) {
                var e = this.x
                  , i = this.y
                  , n = this.z
                  , r = t.x
                  , a = t.y
                  , o = t.z
                  , s = t.w
                  , c = s * e + a * n - o * i
                  , h = s * i + o * e - r * n
                  , l = s * n + r * i - a * e
                  , u = -r * e - a * i - o * n;
                return this.x = c * s + u * -r + h * -o - l * -a,
                this.y = h * s + u * -a + l * -r - c * -o,
                this.z = l * s + u * -o + c * -a - h * -r,
                this
            },
            project: function() {
                var t = new l;
                return function(e) {
                    return t.multiplyMatrices(e.projectionMatrix, t.getInverse(e.matrixWorld)),
                    this.applyMatrix4(t)
                }
            }(),
            unproject: function() {
                var t = new l;
                return function(e) {
                    return t.multiplyMatrices(e.matrixWorld, t.getInverse(e.projectionMatrix)),
                    this.applyMatrix4(t)
                }
            }(),
            transformDirection: function(t) {
                var e = this.x
                  , i = this.y
                  , n = this.z
                  , r = t.elements;
                return this.x = r[0] * e + r[4] * i + r[8] * n,
                this.y = r[1] * e + r[5] * i + r[9] * n,
                this.z = r[2] * e + r[6] * i + r[10] * n,
                this.normalize()
            },
            divide: function(t) {
                return this.x /= t.x,
                this.y /= t.y,
                this.z /= t.z,
                this
            },
            divideScalar: function(t) {
                return this.multiplyScalar(1 / t)
            },
            min: function(t) {
                return this.x = Math.min(this.x, t.x),
                this.y = Math.min(this.y, t.y),
                this.z = Math.min(this.z, t.z),
                this
            },
            max: function(t) {
                return this.x = Math.max(this.x, t.x),
                this.y = Math.max(this.y, t.y),
                this.z = Math.max(this.z, t.z),
                this
            },
            clamp: function(t, e) {
                return this.x = Math.max(t.x, Math.min(e.x, this.x)),
                this.y = Math.max(t.y, Math.min(e.y, this.y)),
                this.z = Math.max(t.z, Math.min(e.z, this.z)),
                this
            },
            clampScalar: function() {
                var t = new h
                  , e = new h;
                return function(i, n) {
                    return t.set(i, i, i),
                    e.set(n, n, n),
                    this.clamp(t, e)
                }
            }(),
            clampLength: function(t, e) {
                var i = this.length();
                return this.multiplyScalar(Math.max(t, Math.min(e, i)) / i)
            },
            floor: function() {
                return this.x = Math.floor(this.x),
                this.y = Math.floor(this.y),
                this.z = Math.floor(this.z),
                this
            },
            ceil: function() {
                return this.x = Math.ceil(this.x),
                this.y = Math.ceil(this.y),
                this.z = Math.ceil(this.z),
                this
            },
            round: function() {
                return this.x = Math.round(this.x),
                this.y = Math.round(this.y),
                this.z = Math.round(this.z),
                this
            },
            roundToZero: function() {
                return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
                this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
                this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z),
                this
            },
            negate: function() {
                return this.x = -this.x,
                this.y = -this.y,
                this.z = -this.z,
                this
            },
            dot: function(t) {
                return this.x * t.x + this.y * t.y + this.z * t.z
            },
            lengthSq: function() {
                return this.x * this.x + this.y * this.y + this.z * this.z
            },
            length: function() {
                return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
            },
            lengthManhattan: function() {
                return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
            },
            normalize: function() {
                return this.divideScalar(this.length())
            },
            setLength: function(t) {
                return this.multiplyScalar(t / this.length())
            },
            lerp: function(t, e) {
                return this.x += (t.x - this.x) * e,
                this.y += (t.y - this.y) * e,
                this.z += (t.z - this.z) * e,
                this
            },
            lerpVectors: function(t, e, i) {
                return this.subVectors(e, t).multiplyScalar(i).add(t)
            },
            cross: function(t, e) {
                if (void 0 !== e)
                    return console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),
                    this.crossVectors(t, e);
                var i = this.x
                  , n = this.y
                  , r = this.z;
                return this.x = n * t.z - r * t.y,
                this.y = r * t.x - i * t.z,
                this.z = i * t.y - n * t.x,
                this
            },
            crossVectors: function(t, e) {
                var i = t.x
                  , n = t.y
                  , r = t.z
                  , a = e.x
                  , o = e.y
                  , s = e.z;
                return this.x = n * s - r * o,
                this.y = r * a - i * s,
                this.z = i * o - n * a,
                this
            },
            projectOnVector: function(t) {
                var e = t.dot(this) / t.lengthSq();
                return this.copy(t).multiplyScalar(e)
            },
            projectOnPlane: function() {
                var t = new h;
                return function(e) {
                    return t.copy(this).projectOnVector(e),
                    this.sub(t)
                }
            }(),
            reflect: function() {
                var t = new h;
                return function(e) {
                    return this.sub(t.copy(e).multiplyScalar(2 * this.dot(e)))
                }
            }(),
            angleTo: function(t) {
                var e = this.dot(t) / Math.sqrt(this.lengthSq() * t.lengthSq());
                return Math.acos(ws.clamp(e, -1, 1))
            },
            distanceTo: function(t) {
                return Math.sqrt(this.distanceToSquared(t))
            },
            distanceToSquared: function(t) {
                var e = this.x - t.x
                  , i = this.y - t.y
                  , n = this.z - t.z;
                return e * e + i * i + n * n
            },
            distanceToManhattan: function(t) {
                return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
            },
            setFromSpherical: function(t) {
                var e = Math.sin(t.phi) * t.radius;
                return this.x = e * Math.sin(t.theta),
                this.y = Math.cos(t.phi) * t.radius,
                this.z = e * Math.cos(t.theta),
                this
            },
            setFromCylindrical: function(t) {
                return this.x = t.radius * Math.sin(t.theta),
                this.y = t.y,
                this.z = t.radius * Math.cos(t.theta),
                this
            },
            setFromMatrixPosition: function(t) {
                return this.setFromMatrixColumn(t, 3)
            },
            setFromMatrixScale: function(t) {
                var e = this.setFromMatrixColumn(t, 0).length()
                  , i = this.setFromMatrixColumn(t, 1).length()
                  , n = this.setFromMatrixColumn(t, 2).length();
                return this.x = e,
                this.y = i,
                this.z = n,
                this
            },
            setFromMatrixColumn: function(t, e) {
                return this.fromArray(t.elements, 4 * e)
            },
            equals: function(t) {
                return t.x === this.x && t.y === this.y && t.z === this.z
            },
            fromArray: function(t, e) {
                return void 0 === e && (e = 0),
                this.x = t[e],
                this.y = t[e + 1],
                this.z = t[e + 2],
                this
            },
            toArray: function(t, e) {
                return void 0 === t && (t = []),
                void 0 === e && (e = 0),
                t[e] = this.x,
                t[e + 1] = this.y,
                t[e + 2] = this.z,
                t
            },
            fromBufferAttribute: function(t, e, i) {
                return void 0 !== i && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),
                this.x = t.getX(e),
                this.y = t.getY(e),
                this.z = t.getZ(e),
                this
            }
        }),
        Object.assign(l.prototype, {
            isMatrix4: !0,
            set: function(t, e, i, n, r, a, o, s, c, h, l, u, d, p, f, m) {
                var g = this.elements;
                return g[0] = t,
                g[4] = e,
                g[8] = i,
                g[12] = n,
                g[1] = r,
                g[5] = a,
                g[9] = o,
                g[13] = s,
                g[2] = c,
                g[6] = h,
                g[10] = l,
                g[14] = u,
                g[3] = d,
                g[7] = p,
                g[11] = f,
                g[15] = m,
                this
            },
            identity: function() {
                return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
                this
            },
            clone: function() {
                return (new l).fromArray(this.elements)
            },
            copy: function(t) {
                var e = this.elements
                  , i = t.elements;
                return e[0] = i[0],
                e[1] = i[1],
                e[2] = i[2],
                e[3] = i[3],
                e[4] = i[4],
                e[5] = i[5],
                e[6] = i[6],
                e[7] = i[7],
                e[8] = i[8],
                e[9] = i[9],
                e[10] = i[10],
                e[11] = i[11],
                e[12] = i[12],
                e[13] = i[13],
                e[14] = i[14],
                e[15] = i[15],
                this
            },
            copyPosition: function(t) {
                var e = this.elements
                  , i = t.elements;
                return e[12] = i[12],
                e[13] = i[13],
                e[14] = i[14],
                this
            },
            extractBasis: function(t, e, i) {
                return t.setFromMatrixColumn(this, 0),
                e.setFromMatrixColumn(this, 1),
                i.setFromMatrixColumn(this, 2),
                this
            },
            makeBasis: function(t, e, i) {
                return this.set(t.x, e.x, i.x, 0, t.y, e.y, i.y, 0, t.z, e.z, i.z, 0, 0, 0, 0, 1),
                this
            },
            extractRotation: function() {
                var t = new h;
                return function(e) {
                    var i = this.elements
                      , n = e.elements
                      , r = 1 / t.setFromMatrixColumn(e, 0).length()
                      , a = 1 / t.setFromMatrixColumn(e, 1).length()
                      , o = 1 / t.setFromMatrixColumn(e, 2).length();
                    return i[0] = n[0] * r,
                    i[1] = n[1] * r,
                    i[2] = n[2] * r,
                    i[4] = n[4] * a,
                    i[5] = n[5] * a,
                    i[6] = n[6] * a,
                    i[8] = n[8] * o,
                    i[9] = n[9] * o,
                    i[10] = n[10] * o,
                    this
                }
            }(),
            makeRotationFromEuler: function(t) {
                (t && t.isEuler) === !1 && console.error("THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
                var e = this.elements
                  , i = t.x
                  , n = t.y
                  , r = t.z
                  , a = Math.cos(i)
                  , o = Math.sin(i)
                  , s = Math.cos(n)
                  , c = Math.sin(n)
                  , h = Math.cos(r)
                  , l = Math.sin(r);
                if ("XYZ" === t.order) {
                    var u = a * h
                      , d = a * l
                      , p = o * h
                      , f = o * l;
                    e[0] = s * h,
                    e[4] = -s * l,
                    e[8] = c,
                    e[1] = d + p * c,
                    e[5] = u - f * c,
                    e[9] = -o * s,
                    e[2] = f - u * c,
                    e[6] = p + d * c,
                    e[10] = a * s
                } else if ("YXZ" === t.order) {
                    var m = s * h
                      , g = s * l
                      , v = c * h
                      , y = c * l;
                    e[0] = m + y * o,
                    e[4] = v * o - g,
                    e[8] = a * c,
                    e[1] = a * l,
                    e[5] = a * h,
                    e[9] = -o,
                    e[2] = g * o - v,
                    e[6] = y + m * o,
                    e[10] = a * s
                } else if ("ZXY" === t.order) {
                    var m = s * h
                      , g = s * l
                      , v = c * h
                      , y = c * l;
                    e[0] = m - y * o,
                    e[4] = -a * l,
                    e[8] = v + g * o,
                    e[1] = g + v * o,
                    e[5] = a * h,
                    e[9] = y - m * o,
                    e[2] = -a * c,
                    e[6] = o,
                    e[10] = a * s
                } else if ("ZYX" === t.order) {
                    var u = a * h
                      , d = a * l
                      , p = o * h
                      , f = o * l;
                    e[0] = s * h,
                    e[4] = p * c - d,
                    e[8] = u * c + f,
                    e[1] = s * l,
                    e[5] = f * c + u,
                    e[9] = d * c - p,
                    e[2] = -c,
                    e[6] = o * s,
                    e[10] = a * s
                } else if ("YZX" === t.order) {
                    var x = a * s
                      , _ = a * c
                      , b = o * s
                      , w = o * c;
                    e[0] = s * h,
                    e[4] = w - x * l,
                    e[8] = b * l + _,
                    e[1] = l,
                    e[5] = a * h,
                    e[9] = -o * h,
                    e[2] = -c * h,
                    e[6] = _ * l + b,
                    e[10] = x - w * l
                } else if ("XZY" === t.order) {
                    var x = a * s
                      , _ = a * c
                      , b = o * s
                      , w = o * c;
                    e[0] = s * h,
                    e[4] = -l,
                    e[8] = c * h,
                    e[1] = x * l + w,
                    e[5] = a * h,
                    e[9] = _ * l - b,
                    e[2] = b * l - _,
                    e[6] = o * h,
                    e[10] = w * l + x
                }
                return e[3] = 0,
                e[7] = 0,
                e[11] = 0,
                e[12] = 0,
                e[13] = 0,
                e[14] = 0,
                e[15] = 1,
                this
            },
            makeRotationFromQuaternion: function(t) {
                var e = this.elements
                  , i = t._x
                  , n = t._y
                  , r = t._z
                  , a = t._w
                  , o = i + i
                  , s = n + n
                  , c = r + r
                  , h = i * o
                  , l = i * s
                  , u = i * c
                  , d = n * s
                  , p = n * c
                  , f = r * c
                  , m = a * o
                  , g = a * s
                  , v = a * c;
                return e[0] = 1 - (d + f),
                e[4] = l - v,
                e[8] = u + g,
                e[1] = l + v,
                e[5] = 1 - (h + f),
                e[9] = p - m,
                e[2] = u - g,
                e[6] = p + m,
                e[10] = 1 - (h + d),
                e[3] = 0,
                e[7] = 0,
                e[11] = 0,
                e[12] = 0,
                e[13] = 0,
                e[14] = 0,
                e[15] = 1,
                this
            },
            lookAt: function() {
                var t = new h
                  , e = new h
                  , i = new h;
                return function(n, r, a) {
                    var o = this.elements;
                    return i.subVectors(n, r),
                    0 === i.lengthSq() && (i.z = 1),
                    i.normalize(),
                    t.crossVectors(a, i),
                    0 === t.lengthSq() && (i.z += 1e-4,
                    t.crossVectors(a, i)),
                    t.normalize(),
                    e.crossVectors(i, t),
                    o[0] = t.x,
                    o[4] = e.x,
                    o[8] = i.x,
                    o[1] = t.y,
                    o[5] = e.y,
                    o[9] = i.y,
                    o[2] = t.z,
                    o[6] = e.z,
                    o[10] = i.z,
                    this
                }
            }(),
            multiply: function(t, e) {
                return void 0 !== e ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),
                this.multiplyMatrices(t, e)) : this.multiplyMatrices(this, t)
            },
            premultiply: function(t) {
                return this.multiplyMatrices(t, this)
            },
            multiplyMatrices: function(t, e) {
                var i = t.elements
                  , n = e.elements
                  , r = this.elements
                  , a = i[0]
                  , o = i[4]
                  , s = i[8]
                  , c = i[12]
                  , h = i[1]
                  , l = i[5]
                  , u = i[9]
                  , d = i[13]
                  , p = i[2]
                  , f = i[6]
                  , m = i[10]
                  , g = i[14]
                  , v = i[3]
                  , y = i[7]
                  , x = i[11]
                  , _ = i[15]
                  , b = n[0]
                  , w = n[4]
                  , M = n[8]
                  , E = n[12]
                  , T = n[1]
                  , S = n[5]
                  , A = n[9]
                  , L = n[13]
                  , R = n[2]
                  , P = n[6]
                  , C = n[10]
                  , I = n[14]
                  , U = n[3]
                  , N = n[7]
                  , O = n[11]
                  , D = n[15];
                return r[0] = a * b + o * T + s * R + c * U,
                r[4] = a * w + o * S + s * P + c * N,
                r[8] = a * M + o * A + s * C + c * O,
                r[12] = a * E + o * L + s * I + c * D,
                r[1] = h * b + l * T + u * R + d * U,
                r[5] = h * w + l * S + u * P + d * N,
                r[9] = h * M + l * A + u * C + d * O,
                r[13] = h * E + l * L + u * I + d * D,
                r[2] = p * b + f * T + m * R + g * U,
                r[6] = p * w + f * S + m * P + g * N,
                r[10] = p * M + f * A + m * C + g * O,
                r[14] = p * E + f * L + m * I + g * D,
                r[3] = v * b + y * T + x * R + _ * U,
                r[7] = v * w + y * S + x * P + _ * N,
                r[11] = v * M + y * A + x * C + _ * O,
                r[15] = v * E + y * L + x * I + _ * D,
                this
            },
            multiplyScalar: function(t) {
                var e = this.elements;
                return e[0] *= t,
                e[4] *= t,
                e[8] *= t,
                e[12] *= t,
                e[1] *= t,
                e[5] *= t,
                e[9] *= t,
                e[13] *= t,
                e[2] *= t,
                e[6] *= t,
                e[10] *= t,
                e[14] *= t,
                e[3] *= t,
                e[7] *= t,
                e[11] *= t,
                e[15] *= t,
                this
            },
            applyToBufferAttribute: function() {
                var t = new h;
                return function(e) {
                    for (var i = 0, n = e.count; i < n; i++)
                        t.x = e.getX(i),
                        t.y = e.getY(i),
                        t.z = e.getZ(i),
                        t.applyMatrix4(this),
                        e.setXYZ(i, t.x, t.y, t.z);
                    return e
                }
            }(),
            determinant: function() {
                var t = this.elements
                  , e = t[0]
                  , i = t[4]
                  , n = t[8]
                  , r = t[12]
                  , a = t[1]
                  , o = t[5]
                  , s = t[9]
                  , c = t[13]
                  , h = t[2]
                  , l = t[6]
                  , u = t[10]
                  , d = t[14]
                  , p = t[3]
                  , f = t[7]
                  , m = t[11]
                  , g = t[15];
                return p * (+r * s * l - n * c * l - r * o * u + i * c * u + n * o * d - i * s * d) + f * (+e * s * d - e * c * u + r * a * u - n * a * d + n * c * h - r * s * h) + m * (+e * c * l - e * o * d - r * a * l + i * a * d + r * o * h - i * c * h) + g * (-n * o * h - e * s * l + e * o * u + n * a * l - i * a * u + i * s * h)
            },
            transpose: function() {
                var t, e = this.elements;
                return t = e[1],
                e[1] = e[4],
                e[4] = t,
                t = e[2],
                e[2] = e[8],
                e[8] = t,
                t = e[6],
                e[6] = e[9],
                e[9] = t,
                t = e[3],
                e[3] = e[12],
                e[12] = t,
                t = e[7],
                e[7] = e[13],
                e[13] = t,
                t = e[11],
                e[11] = e[14],
                e[14] = t,
                this
            },
            setPosition: function(t) {
                var e = this.elements;
                return e[12] = t.x,
                e[13] = t.y,
                e[14] = t.z,
                this
            },
            getInverse: function(t, e) {
                var i = this.elements
                  , n = t.elements
                  , r = n[0]
                  , a = n[1]
                  , o = n[2]
                  , s = n[3]
                  , c = n[4]
                  , h = n[5]
                  , l = n[6]
                  , u = n[7]
                  , d = n[8]
                  , p = n[9]
                  , f = n[10]
                  , m = n[11]
                  , g = n[12]
                  , v = n[13]
                  , y = n[14]
                  , x = n[15]
                  , _ = p * y * u - v * f * u + v * l * m - h * y * m - p * l * x + h * f * x
                  , b = g * f * u - d * y * u - g * l * m + c * y * m + d * l * x - c * f * x
                  , w = d * v * u - g * p * u + g * h * m - c * v * m - d * h * x + c * p * x
                  , M = g * p * l - d * v * l - g * h * f + c * v * f + d * h * y - c * p * y
                  , E = r * _ + a * b + o * w + s * M;
                if (0 === E) {
                    var T = "THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0";
                    if (e === !0)
                        throw new Error(T);
                    return console.warn(T),
                    this.identity()
                }
                var S = 1 / E;
                return i[0] = _ * S,
                i[1] = (v * f * s - p * y * s - v * o * m + a * y * m + p * o * x - a * f * x) * S,
                i[2] = (h * y * s - v * l * s + v * o * u - a * y * u - h * o * x + a * l * x) * S,
                i[3] = (p * l * s - h * f * s - p * o * u + a * f * u + h * o * m - a * l * m) * S,
                i[4] = b * S,
                i[5] = (d * y * s - g * f * s + g * o * m - r * y * m - d * o * x + r * f * x) * S,
                i[6] = (g * l * s - c * y * s - g * o * u + r * y * u + c * o * x - r * l * x) * S,
                i[7] = (c * f * s - d * l * s + d * o * u - r * f * u - c * o * m + r * l * m) * S,
                i[8] = w * S,
                i[9] = (g * p * s - d * v * s - g * a * m + r * v * m + d * a * x - r * p * x) * S,
                i[10] = (c * v * s - g * h * s + g * a * u - r * v * u - c * a * x + r * h * x) * S,
                i[11] = (d * h * s - c * p * s - d * a * u + r * p * u + c * a * m - r * h * m) * S,
                i[12] = M * S,
                i[13] = (d * v * o - g * p * o + g * a * f - r * v * f - d * a * y + r * p * y) * S,
                i[14] = (g * h * o - c * v * o - g * a * l + r * v * l + c * a * y - r * h * y) * S,
                i[15] = (c * p * o - d * h * o + d * a * l - r * p * l - c * a * f + r * h * f) * S,
                this
            },
            scale: function(t) {
                var e = this.elements
                  , i = t.x
                  , n = t.y
                  , r = t.z;
                return e[0] *= i,
                e[4] *= n,
                e[8] *= r,
                e[1] *= i,
                e[5] *= n,
                e[9] *= r,
                e[2] *= i,
                e[6] *= n,
                e[10] *= r,
                e[3] *= i,
                e[7] *= n,
                e[11] *= r,
                this
            },
            getMaxScaleOnAxis: function() {
                var t = this.elements
                  , e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2]
                  , i = t[4] * t[4] + t[5] * t[5] + t[6] * t[6]
                  , n = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
                return Math.sqrt(Math.max(e, i, n))
            },
            makeTranslation: function(t, e, i) {
                return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, i, 0, 0, 0, 1),
                this
            },
            makeRotationX: function(t) {
                var e = Math.cos(t)
                  , i = Math.sin(t);
                return this.set(1, 0, 0, 0, 0, e, -i, 0, 0, i, e, 0, 0, 0, 0, 1),
                this
            },
            makeRotationY: function(t) {
                var e = Math.cos(t)
                  , i = Math.sin(t);
                return this.set(e, 0, i, 0, 0, 1, 0, 0, -i, 0, e, 0, 0, 0, 0, 1),
                this
            },
            makeRotationZ: function(t) {
                var e = Math.cos(t)
                  , i = Math.sin(t);
                return this.set(e, -i, 0, 0, i, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
                this
            },
            makeRotationAxis: function(t, e) {
                var i = Math.cos(e)
                  , n = Math.sin(e)
                  , r = 1 - i
                  , a = t.x
                  , o = t.y
                  , s = t.z
                  , c = r * a
                  , h = r * o;
                return this.set(c * a + i, c * o - n * s, c * s + n * o, 0, c * o + n * s, h * o + i, h * s - n * a, 0, c * s - n * o, h * s + n * a, r * s * s + i, 0, 0, 0, 0, 1),
                this
            },
            makeScale: function(t, e, i) {
                return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1),
                this
            },
            makeShear: function(t, e, i) {
                return this.set(1, e, i, 0, t, 1, i, 0, t, e, 1, 0, 0, 0, 0, 1),
                this
            },
            compose: function(t, e, i) {
                return this.makeRotationFromQuaternion(e),
                this.scale(i),
                this.setPosition(t),
                this
            },
            decompose: function() {
                var t = new h
                  , e = new l;
                return function(i, n, r) {
                    var a = this.elements
                      , o = t.set(a[0], a[1], a[2]).length()
                      , s = t.set(a[4], a[5], a[6]).length()
                      , c = t.set(a[8], a[9], a[10]).length()
                      , h = this.determinant();
                    h < 0 && (o = -o),
                    i.x = a[12],
                    i.y = a[13],
                    i.z = a[14],
                    e.copy(this);
                    var l = 1 / o
                      , u = 1 / s
                      , d = 1 / c;
                    return e.elements[0] *= l,
                    e.elements[1] *= l,
                    e.elements[2] *= l,
                    e.elements[4] *= u,
                    e.elements[5] *= u,
                    e.elements[6] *= u,
                    e.elements[8] *= d,
                    e.elements[9] *= d,
                    e.elements[10] *= d,
                    n.setFromRotationMatrix(e),
                    r.x = o,
                    r.y = s,
                    r.z = c,
                    this
                }
            }(),
            makePerspective: function(t, e, i, n, r, a) {
                void 0 === a && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
                var o = this.elements
                  , s = 2 * r / (e - t)
                  , c = 2 * r / (i - n)
                  , h = (e + t) / (e - t)
                  , l = (i + n) / (i - n)
                  , u = -(a + r) / (a - r)
                  , d = -2 * a * r / (a - r);
                return o[0] = s,
                o[4] = 0,
                o[8] = h,
                o[12] = 0,
                o[1] = 0,
                o[5] = c,
                o[9] = l,
                o[13] = 0,
                o[2] = 0,
                o[6] = 0,
                o[10] = u,
                o[14] = d,
                o[3] = 0,
                o[7] = 0,
                o[11] = -1,
                o[15] = 0,
                this
            },
            makeOrthographic: function(t, e, i, n, r, a) {
                var o = this.elements
                  , s = 1 / (e - t)
                  , c = 1 / (i - n)
                  , h = 1 / (a - r)
                  , l = (e + t) * s
                  , u = (i + n) * c
                  , d = (a + r) * h;
                return o[0] = 2 * s,
                o[4] = 0,
                o[8] = 0,
                o[12] = -l,
                o[1] = 0,
                o[5] = 2 * c,
                o[9] = 0,
                o[13] = -u,
                o[2] = 0,
                o[6] = 0,
                o[10] = -2 * h,
                o[14] = -d,
                o[3] = 0,
                o[7] = 0,
                o[11] = 0,
                o[15] = 1,
                this
            },
            equals: function(t) {
                for (var e = this.elements, i = t.elements, n = 0; n < 16; n++)
                    if (e[n] !== i[n])
                        return !1;
                return !0
            },
            fromArray: function(t, e) {
                void 0 === e && (e = 0);
                for (var i = 0; i < 16; i++)
                    this.elements[i] = t[i + e];
                return this
            },
            toArray: function(t, e) {
                void 0 === t && (t = []),
                void 0 === e && (e = 0);
                var i = this.elements;
                return t[e] = i[0],
                t[e + 1] = i[1],
                t[e + 2] = i[2],
                t[e + 3] = i[3],
                t[e + 4] = i[4],
                t[e + 5] = i[5],
                t[e + 6] = i[6],
                t[e + 7] = i[7],
                t[e + 8] = i[8],
                t[e + 9] = i[9],
                t[e + 10] = i[10],
                t[e + 11] = i[11],
                t[e + 12] = i[12],
                t[e + 13] = i[13],
                t[e + 14] = i[14],
                t[e + 15] = i[15],
                t
            }
        }),
        u.prototype = Object.create(n.prototype),
        u.prototype.constructor = u,
        u.prototype.isDataTexture = !0,
        d.prototype = Object.create(n.prototype),
        d.prototype.constructor = d,
        d.prototype.isCubeTexture = !0,
        Object.defineProperty(d.prototype, "images", {
            get: function() {
                return this.image
            },
            set: function(t) {
                this.image = t
            }
        });
        var Es = new n
          , Ts = new d
          , Ss = []
          , As = []
          , Ls = new Float32Array(16)
          , Rs = new Float32Array(9);
        k.prototype.setValue = function(t, e) {
            for (var i = this.seq, n = 0, r = i.length; n !== r; ++n) {
                var a = i[n];
                a.setValue(t, e[a.id])
            }
        }
        ;
        var Ps = /([\w\d_]+)(\])?(\[|\.)?/g;
        X.prototype.setValue = function(t, e, i) {
            var n = this.map[e];
            void 0 !== n && n.setValue(t, i, this.renderer)
        }
        ,
        X.prototype.setOptional = function(t, e, i) {
            var n = e[i];
            void 0 !== n && this.setValue(t, i, n)
        }
        ,
        X.upload = function(t, e, i, n) {
            for (var r = 0, a = e.length; r !== a; ++r) {
                var o = e[r]
                  , s = i[o.id];
                s.needsUpdate !== !1 && o.setValue(t, s.value, n)
            }
        }
        ,
        X.seqWithValue = function(t, e) {
            for (var i = [], n = 0, r = t.length; n !== r; ++n) {
                var a = t[n];
                a.id in e && i.push(a)
            }
            return i
        }
        ;
        var Cs = {
            aliceblue: 15792383,
            antiquewhite: 16444375,
            aqua: 65535,
            aquamarine: 8388564,
            azure: 15794175,
            beige: 16119260,
            bisque: 16770244,
            black: 0,
            blanchedalmond: 16772045,
            blue: 255,
            blueviolet: 9055202,
            brown: 10824234,
            burlywood: 14596231,
            cadetblue: 6266528,
            chartreuse: 8388352,
            chocolate: 13789470,
            coral: 16744272,
            cornflowerblue: 6591981,
            cornsilk: 16775388,
            crimson: 14423100,
            cyan: 65535,
            darkblue: 139,
            darkcyan: 35723,
            darkgoldenrod: 12092939,
            darkgray: 11119017,
            darkgreen: 25600,
            darkgrey: 11119017,
            darkkhaki: 12433259,
            darkmagenta: 9109643,
            darkolivegreen: 5597999,
            darkorange: 16747520,
            darkorchid: 10040012,
            darkred: 9109504,
            darksalmon: 15308410,
            darkseagreen: 9419919,
            darkslateblue: 4734347,
            darkslategray: 3100495,
            darkslategrey: 3100495,
            darkturquoise: 52945,
            darkviolet: 9699539,
            deeppink: 16716947,
            deepskyblue: 49151,
            dimgray: 6908265,
            dimgrey: 6908265,
            dodgerblue: 2003199,
            firebrick: 11674146,
            floralwhite: 16775920,
            forestgreen: 2263842,
            fuchsia: 16711935,
            gainsboro: 14474460,
            ghostwhite: 16316671,
            gold: 16766720,
            goldenrod: 14329120,
            gray: 8421504,
            green: 32768,
            greenyellow: 11403055,
            grey: 8421504,
            honeydew: 15794160,
            hotpink: 16738740,
            indianred: 13458524,
            indigo: 4915330,
            ivory: 16777200,
            khaki: 15787660,
            lavender: 15132410,
            lavenderblush: 16773365,
            lawngreen: 8190976,
            lemonchiffon: 16775885,
            lightblue: 11393254,
            lightcoral: 15761536,
            lightcyan: 14745599,
            lightgoldenrodyellow: 16448210,
            lightgray: 13882323,
            lightgreen: 9498256,
            lightgrey: 13882323,
            lightpink: 16758465,
            lightsalmon: 16752762,
            lightseagreen: 2142890,
            lightskyblue: 8900346,
            lightslategray: 7833753,
            lightslategrey: 7833753,
            lightsteelblue: 11584734,
            lightyellow: 16777184,
            lime: 65280,
            limegreen: 3329330,
            linen: 16445670,
            magenta: 16711935,
            maroon: 8388608,
            mediumaquamarine: 6737322,
            mediumblue: 205,
            mediumorchid: 12211667,
            mediumpurple: 9662683,
            mediumseagreen: 3978097,
            mediumslateblue: 8087790,
            mediumspringgreen: 64154,
            mediumturquoise: 4772300,
            mediumvioletred: 13047173,
            midnightblue: 1644912,
            mintcream: 16121850,
            mistyrose: 16770273,
            moccasin: 16770229,
            navajowhite: 16768685,
            navy: 128,
            oldlace: 16643558,
            olive: 8421376,
            olivedrab: 7048739,
            orange: 16753920,
            orangered: 16729344,
            orchid: 14315734,
            palegoldenrod: 15657130,
            palegreen: 10025880,
            paleturquoise: 11529966,
            palevioletred: 14381203,
            papayawhip: 16773077,
            peachpuff: 16767673,
            peru: 13468991,
            pink: 16761035,
            plum: 14524637,
            powderblue: 11591910,
            purple: 8388736,
            red: 16711680,
            rosybrown: 12357519,
            royalblue: 4286945,
            saddlebrown: 9127187,
            salmon: 16416882,
            sandybrown: 16032864,
            seagreen: 3050327,
            seashell: 16774638,
            sienna: 10506797,
            silver: 12632256,
            skyblue: 8900331,
            slateblue: 6970061,
            slategray: 7372944,
            slategrey: 7372944,
            snow: 16775930,
            springgreen: 65407,
            steelblue: 4620980,
            tan: 13808780,
            teal: 32896,
            thistle: 14204888,
            tomato: 16737095,
            turquoise: 4251856,
            violet: 15631086,
            wheat: 16113331,
            white: 16777215,
            whitesmoke: 16119285,
            yellow: 16776960,
            yellowgreen: 10145074
        };
        Object.assign(q.prototype, {
            isColor: !0,
            r: 1,
            g: 1,
            b: 1,
            set: function(t) {
                return t && t.isColor ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" == typeof t && this.setStyle(t),
                this
            },
            setScalar: function(t) {
                return this.r = t,
                this.g = t,
                this.b = t,
                this
            },
            setHex: function(t) {
                return t = Math.floor(t),
                this.r = (t >> 16 & 255) / 255,
                this.g = (t >> 8 & 255) / 255,
                this.b = (255 & t) / 255,
                this
            },
            setRGB: function(t, e, i) {
                return this.r = t,
                this.g = e,
                this.b = i,
                this
            },
            setHSL: function() {
                function t(t, e, i) {
                    return i < 0 && (i += 1),
                    i > 1 && (i -= 1),
                    i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - i) : t
                }
                return function(e, i, n) {
                    if (e = ws.euclideanModulo(e, 1),
                    i = ws.clamp(i, 0, 1),
                    n = ws.clamp(n, 0, 1),
                    0 === i)
                        this.r = this.g = this.b = n;
                    else {
                        var r = n <= .5 ? n * (1 + i) : n + i - n * i
                          , a = 2 * n - r;
                        this.r = t(a, r, e + 1 / 3),
                        this.g = t(a, r, e),
                        this.b = t(a, r, e - 1 / 3)
                    }
                    return this
                }
            }(),
            setStyle: function(t) {
                function e(e) {
                    void 0 !== e && parseFloat(e) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.")
                }
                var i;
                if (i = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(t)) {
                    var n, r = i[1], a = i[2];
                    switch (r) {
                    case "rgb":
                    case "rgba":
                        if (n = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a))
                            return this.r = Math.min(255, parseInt(n[1], 10)) / 255,
                            this.g = Math.min(255, parseInt(n[2], 10)) / 255,
                            this.b = Math.min(255, parseInt(n[3], 10)) / 255,
                            e(n[5]),
                            this;
                        if (n = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a))
                            return this.r = Math.min(100, parseInt(n[1], 10)) / 100,
                            this.g = Math.min(100, parseInt(n[2], 10)) / 100,
                            this.b = Math.min(100, parseInt(n[3], 10)) / 100,
                            e(n[5]),
                            this;
                        break;
                    case "hsl":
                    case "hsla":
                        if (n = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) {
                            var o = parseFloat(n[1]) / 360
                              , s = parseInt(n[2], 10) / 100
                              , c = parseInt(n[3], 10) / 100;
                            return e(n[5]),
                            this.setHSL(o, s, c)
                        }
                    }
                } else if (i = /^\#([A-Fa-f0-9]+)$/.exec(t)) {
                    var h = i[1]
                      , l = h.length;
                    if (3 === l)
                        return this.r = parseInt(h.charAt(0) + h.charAt(0), 16) / 255,
                        this.g = parseInt(h.charAt(1) + h.charAt(1), 16) / 255,
                        this.b = parseInt(h.charAt(2) + h.charAt(2), 16) / 255,
                        this;
                    if (6 === l)
                        return this.r = parseInt(h.charAt(0) + h.charAt(1), 16) / 255,
                        this.g = parseInt(h.charAt(2) + h.charAt(3), 16) / 255,
                        this.b = parseInt(h.charAt(4) + h.charAt(5), 16) / 255,
                        this
                }
                if (t && t.length > 0) {
                    var h = Cs[t];
                    void 0 !== h ? this.setHex(h) : console.warn("THREE.Color: Unknown color " + t)
                }
                return this
            },
            clone: function() {
                return new this.constructor(this.r,this.g,this.b)
            },
            copy: function(t) {
                return this.r = t.r,
                this.g = t.g,
                this.b = t.b,
                this
            },
            copyGammaToLinear: function(t, e) {
                return void 0 === e && (e = 2),
                this.r = Math.pow(t.r, e),
                this.g = Math.pow(t.g, e),
                this.b = Math.pow(t.b, e),
                this
            },
            copyLinearToGamma: function(t, e) {
                void 0 === e && (e = 2);
                var i = e > 0 ? 1 / e : 1;
                return this.r = Math.pow(t.r, i),
                this.g = Math.pow(t.g, i),
                this.b = Math.pow(t.b, i),
                this
            },
            convertGammaToLinear: function() {
                var t = this.r
                  , e = this.g
                  , i = this.b;
                return this.r = t * t,
                this.g = e * e,
                this.b = i * i,
                this
            },
            convertLinearToGamma: function() {
                return this.r = Math.sqrt(this.r),
                this.g = Math.sqrt(this.g),
                this.b = Math.sqrt(this.b),
                this
            },
            getHex: function() {
                return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
            },
            getHexString: function() {
                return ("000000" + this.getHex().toString(16)).slice(-6)
            },
            getHSL: function(t) {
                var e, i, n = t || {
                    h: 0,
                    s: 0,
                    l: 0
                }, r = this.r, a = this.g, o = this.b, s = Math.max(r, a, o), c = Math.min(r, a, o), h = (c + s) / 2;
                if (c === s)
                    e = 0,
                    i = 0;
                else {
                    var l = s - c;
                    switch (i = h <= .5 ? l / (s + c) : l / (2 - s - c),
                    s) {
                    case r:
                        e = (a - o) / l + (a < o ? 6 : 0);
                        break;
                    case a:
                        e = (o - r) / l + 2;
                        break;
                    case o:
                        e = (r - a) / l + 4
                    }
                    e /= 6
                }
                return n.h = e,
                n.s = i,
                n.l = h,
                n
            },
            getStyle: function() {
                return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
            },
            offsetHSL: function(t, e, i) {
                var n = this.getHSL();
                return n.h += t,
                n.s += e,
                n.l += i,
                this.setHSL(n.h, n.s, n.l),
                this
            },
            add: function(t) {
                return this.r += t.r,
                this.g += t.g,
                this.b += t.b,
                this
            },
            addColors: function(t, e) {
                return this.r = t.r + e.r,
                this.g = t.g + e.g,
                this.b = t.b + e.b,
                this
            },
            addScalar: function(t) {
                return this.r += t,
                this.g += t,
                this.b += t,
                this
            },
            sub: function(t) {
                return this.r = Math.max(0, this.r - t.r),
                this.g = Math.max(0, this.g - t.g),
                this.b = Math.max(0, this.b - t.b),
                this
            },
            multiply: function(t) {
                return this.r *= t.r,
                this.g *= t.g,
                this.b *= t.b,
                this
            },
            multiplyScalar: function(t) {
                return this.r *= t,
                this.g *= t,
                this.b *= t,
                this
            },
            lerp: function(t, e) {
                return this.r += (t.r - this.r) * e,
                this.g += (t.g - this.g) * e,
                this.b += (t.b - this.b) * e,
                this
            },
            equals: function(t) {
                return t.r === this.r && t.g === this.g && t.b === this.b
            },
            fromArray: function(t, e) {
                return void 0 === e && (e = 0),
                this.r = t[e],
                this.g = t[e + 1],
                this.b = t[e + 2],
                this
            },
            toArray: function(t, e) {
                return void 0 === t && (t = []),
                void 0 === e && (e = 0),
                t[e] = this.r,
                t[e + 1] = this.g,
                t[e + 2] = this.b,
                t
            },
            toJSON: function() {
                return this.getHex()
            }
        });
        var Is = {
            common: {
                diffuse: {
                    value: new q(15658734)
                },
                opacity: {
                    value: 1
                },
                map: {
                    value: null
                },
                offsetRepeat: {
                    value: new r(0,0,1,1)
                },
                specularMap: {
                    value: null
                },
                alphaMap: {
                    value: null
                },
                envMap: {
                    value: null
                },
                flipEnvMap: {
                    value: -1
                },
                reflectivity: {
                    value: 1
                },
                refractionRatio: {
                    value: .98
                }
            },
            aomap: {
                aoMap: {
                    value: null
                },
                aoMapIntensity: {
                    value: 1
                }
            },
            lightmap: {
                lightMap: {
                    value: null
                },
                lightMapIntensity: {
                    value: 1
                }
            },
            emissivemap: {
                emissiveMap: {
                    value: null
                }
            },
            bumpmap: {
                bumpMap: {
                    value: null
                },
                bumpScale: {
                    value: 1
                }
            },
            normalmap: {
                normalMap: {
                    value: null
                },
                normalScale: {
                    value: new i(1,1)
                }
            },
            displacementmap: {
                displacementMap: {
                    value: null
                },
                displacementScale: {
                    value: 1
                },
                displacementBias: {
                    value: 0
                }
            },
            roughnessmap: {
                roughnessMap: {
                    value: null
                }
            },
            metalnessmap: {
                metalnessMap: {
                    value: null
                }
            },
            gradientmap: {
                gradientMap: {
                    value: null
                }
            },
            fog: {
                fogDensity: {
                    value: 25e-5
                },
                fogNear: {
                    value: 1
                },
                fogFar: {
                    value: 2e3
                },
                fogColor: {
                    value: new q(16777215)
                }
            },
            lights: {
                ambientLightColor: {
                    value: []
                },
                directionalLights: {
                    value: [],
                    properties: {
                        direction: {},
                        color: {},
                        shadow: {},
                        shadowBias: {},
                        shadowRadius: {},
                        shadowMapSize: {}
                    }
                },
                directionalShadowMap: {
                    value: []
                },
                directionalShadowMatrix: {
                    value: []
                },
                spotLights: {
                    value: [],
                    properties: {
                        color: {},
                        position: {},
                        direction: {},
                        distance: {},
                        coneCos: {},
                        penumbraCos: {},
                        decay: {},
                        shadow: {},
                        shadowBias: {},
                        shadowRadius: {},
                        shadowMapSize: {}
                    }
                },
                spotShadowMap: {
                    value: []
                },
                spotShadowMatrix: {
                    value: []
                },
                pointLights: {
                    value: [],
                    properties: {
                        color: {},
                        position: {},
                        decay: {},
                        distance: {},
                        shadow: {},
                        shadowBias: {},
                        shadowRadius: {},
                        shadowMapSize: {}
                    }
                },
                pointShadowMap: {
                    value: []
                },
                pointShadowMatrix: {
                    value: []
                },
                hemisphereLights: {
                    value: [],
                    properties: {
                        direction: {},
                        skyColor: {},
                        groundColor: {}
                    }
                },
                rectAreaLights: {
                    value: [],
                    properties: {
                        color: {},
                        position: {},
                        width: {},
                        height: {}
                    }
                }
            },
            points: {
                diffuse: {
                    value: new q(15658734)
                },
                opacity: {
                    value: 1
                },
                size: {
                    value: 1
                },
                scale: {
                    value: 1
                },
                map: {
                    value: null
                },
                offsetRepeat: {
                    value: new r(0,0,1,1)
                }
            }
        }
          , Us = {
            merge: function(t) {
                for (var e = {}, i = 0; i < t.length; i++) {
                    var n = this.clone(t[i]);
                    for (var r in n)
                        e[r] = n[r]
                }
                return e
            },
            clone: function(t) {
                var e = {};
                for (var i in t) {
                    e[i] = {};
                    for (var n in t[i]) {
                        var r = t[i][n];
                        r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture) ? e[i][n] = r.clone() : Array.isArray(r) ? e[i][n] = r.slice() : e[i][n] = r
                    }
                }
                return e
            }
        }
          , Ns = "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif\n"
          , Os = "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif\n"
          , Ds = "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif\n"
          , Fs = "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif\n"
          , Bs = "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif"
          , zs = "\nvec3 transformed = vec3( position );\n"
          , Gs = "\nvec3 objectNormal = vec3( normal );\n"
          , Hs = "float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\tif( decayExponent > 0.0 ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\tfloat maxDistanceCutoffFactor = pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\treturn distanceFalloff * maxDistanceCutoffFactor;\n#else\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n#endif\n\t}\n\treturn 1.0;\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5 / LUT_SIZE;\n\tfloat theta = acos( dot( N, V ) );\n\tvec2 uv = vec2(\n\t\tsqrt( saturate( roughness ) ),\n\t\tsaturate( theta / ( 0.5 * PI ) ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.86267 + (0.49788 + 0.01436 * y ) * y;\n\tfloat b = 3.45068 + (4.18814 + y) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = (x > 0.0) ? v : 0.5 * inversesqrt( 1.0 - x * x ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transpose( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tvec3 result = vec3( LTC_ClippedSphereFormFactor( vectorFormFactor ) );\n\treturn result;\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n\treturn specularColor * AB.x + AB.y;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n"
          , Vs = "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = dFdx( surf_pos );\n\t\tvec3 vSigmaY = dFdy( surf_pos );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif\n"
          , ks = "#if NUM_CLIPPING_PLANES > 0\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; ++ i ) {\n\t\tvec4 plane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t\t\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; ++ i ) {\n\t\t\tvec4 plane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\tif ( clipped ) discard;\n\t\n\t#endif\n#endif\n"
          , js = "#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( PHYSICAL ) && ! defined( PHONG )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif\n"
          , Ws = "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvarying vec3 vViewPosition;\n#endif\n"
          , Xs = "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n"
          , qs = "#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif"
          , Ys = "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif\n"
          , Zs = "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif"
          , Js = "#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif"
          , Qs = "#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transpose( const in mat3 v ) {\n\tmat3 tmp;\n\ttmp[0] = vec3(v[0].x, v[1].x, v[2].x);\n\ttmp[1] = vec3(v[0].y, v[1].y, v[2].y);\n\ttmp[2] = vec3(v[0].z, v[1].z, v[2].z);\n\treturn tmp;\n}\n"
          , Ks = "#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n\tvec3 absDirection = abs(direction);\n\tint face = -1;\n\tif( absDirection.x > absDirection.z ) {\n\t\tif(absDirection.x > absDirection.y )\n\t\t\tface = direction.x > 0.0 ? 0 : 3;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\telse {\n\t\tif(absDirection.z > absDirection.y )\n\t\t\tface = direction.z > 0.0 ? 2 : 5;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\treturn face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n\tfloat dxRoughness = dFdx(roughness);\n\tfloat dyRoughness = dFdy(roughness);\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\n\tfloat mipLevel = 0.5 * log2(d);\n\treturn vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n\tbool bRes = mipLevel == 0.0;\n\tscale =  bRes && (scale < a) ? a : scale;\n\tvec3 r;\n\tvec2 offset;\n\tint face = getFaceFromDirection(direction);\n\tfloat rcpPowScale = 1.0 / powScale;\n\tif( face == 0) {\n\t\tr = vec3(direction.x, -direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 1) {\n\t\tr = vec3(direction.y, direction.x, direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 2) {\n\t\tr = vec3(direction.z, direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 3) {\n\t\tr = vec3(direction.x, direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse if( face == 4) {\n\t\tr = vec3(direction.y, direction.x, -direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse {\n\t\tr = vec3(direction.z, -direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\tr = normalize(r);\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n\tvec2 base = offset + vec2( texelOffset );\n\treturn base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV(vec3 reflectedDirection, float roughness ) {\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\n\tfloat r1 = floor(roughnessVal);\n\tfloat r2 = r1 + 1.0;\n\tfloat t = fract(roughnessVal);\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n\tfloat s = mipInfo.y;\n\tfloat level0 = mipInfo.x;\n\tfloat level1 = level0 + 1.0;\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n\tvec4 result = mix(color10, color20, t);\n\treturn vec4(result.rgb, 1.0);\n}\n#endif\n"
          , $s = "#ifdef FLIP_SIDED\n\tobjectNormal = -objectNormal;\n#endif\nvec3 transformedNormal = normalMatrix * objectNormal;\n"
          , tc = "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif\n"
          , ec = "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normal * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif\n"
          , ic = "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif\n"
          , nc = "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif\n"
          , rc = "  gl_FragColor = linearToOutputTexel( gl_FragColor );\n"
          , ac = "\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.xyz, vec3( gammaFactor ) ), value.w );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.xyz, vec3( 1.0 / gammaFactor ) ), value.w );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.xyz * value.w * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.x, max( value.g, value.b ) );\n\tfloat M      = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM            = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.x, max( value.g, value.b ) );\n\tfloat D      = max( maxRange / maxRGB, 1.0 );\n\tD            = min( floor( D ) / 255.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\n\tXp_Y_XYZp = max(Xp_Y_XYZp, vec3(1e-6, 1e-6, 1e-6));\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract(Le);\n\tvResult.z = (Le - (floor(vResult.w*255.0))/255.0)/255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2((Le - 127.0) / 2.0);\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\n\treturn vec4( max(vRGB, 0.0), 1.0 );\n}\n"
          , oc = "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\tsampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n\t\tsampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\tvec3 reflectView = flipNormal * normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\tenvColor = envMapTexelToLinear( envColor );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif\n"
          , sc = "#if defined( USE_ENVMAP ) || defined( PHYSICAL )\n\tuniform float reflectivity;\n\tuniform float envMapIntensity;\n#endif\n#ifdef USE_ENVMAP\n\t#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\n\t\tvarying vec3 vWorldPosition;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif\n"
          , cc = "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif\n"
          , hc = "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif\n"
          , lc = "\n#ifdef USE_FOG\nfogDepth = -mvPosition.z;\n#endif"
          , uc = "#ifdef USE_FOG\n  varying float fogDepth;\n#endif\n"
          , dc = "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 ) );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif\n"
          , pc = "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif\n"
          , fc = "#ifdef TOON\n\tuniform sampler2D gradientMap;\n\tvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\t\tfloat dotNL = dot( normal, lightDirection );\n\t\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t\t#ifdef USE_GRADIENTMAP\n\t\t\treturn texture2D( gradientMap, coord ).rgb;\n\t\t#else\n\t\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t\t#endif\n\t}\n#endif\n"
          , mc = "#ifdef USE_LIGHTMAP\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif\n"
          , gc = "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif"
          , vc = "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif\n"
          , yc = "uniform vec3 ambientLightColor;\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltcMat;\tuniform sampler2D ltcMag;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif\n#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar - 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV(queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent));\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = saturate( reflectVec.y * 0.5 + 0.5 );\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif\n"
          , xc = "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n"
          , _c = "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_BlinnPhong( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = BlinnExponentToGGXRoughness( material.specularShininess );\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos - halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos + halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos + halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos - halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tfloat norm = texture2D( ltcMag, uv ).a;\n\t\tvec4 t = texture2D( ltcMat, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3(   1,   0, t.y ),\n\t\t\tvec3(   0, t.z,   0 ),\n\t\t\tvec3( t.w,   0, t.x )\n\t\t);\n\t\treflectedLight.directSpecular += lightColor * material.specularColor * norm * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifdef TOON\n\t\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#else\n\t\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\t\tvec3 irradiance = dotNL * directLight.color;\n\t#endif\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)\n"
          , bc = "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef STANDARD\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.clearCoat = saturate( clearCoat );\tmaterial.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );\n#endif\n"
          , wc = "struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n\t#ifndef STANDARD\n\t\tfloat clearCoat;\n\t\tfloat clearCoatRoughness;\n\t#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearCoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos - halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos + halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos + halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos - halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tfloat norm = texture2D( ltcMag, uv ).a;\n\t\tvec4 t = texture2D( ltcMat, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3(   1,   0, t.y ),\n\t\t\tvec3(   0, t.z,   0 ),\n\t\t\tvec3( t.w,   0, t.x )\n\t\t);\n\t\treflectedLight.directSpecular += lightColor * material.specularColor * norm * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifndef STANDARD\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n\treflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\t#ifndef STANDARD\n\t\treflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifndef STANDARD\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\tfloat dotNL = dotNV;\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.indirectSpecular += ( 1.0 - clearCoatDHR ) * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n\t#ifndef STANDARD\n\t\treflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}\n"
          , Mc = "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#ifdef USE_LIGHTMAP\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tirradiance += getLightProbeIndirectIrradiance( geometry, 8 );\n\t#endif\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tvec3 radiance = getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), 8 );\n\t#ifndef STANDARD\n\t\tvec3 clearCoatRadiance = getLightProbeIndirectRadiance( geometry, Material_ClearCoat_BlinnShininessExponent( material ), 8 );\n\t#else\n\t\tvec3 clearCoatRadiance = vec3( 0.0 );\n\t#endif\n\tRE_IndirectSpecular( radiance, clearCoatRadiance, geometry, material, reflectedLight );\n#endif\n"
          , Ec = "#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n\tgl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n#endif"
          , Tc = "#ifdef USE_LOGDEPTHBUF\n\tuniform float logDepthBufFC;\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n#endif\n"
          , Sc = "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n\tuniform float logDepthBufFC;\n#endif"
          , Ac = "#ifdef USE_LOGDEPTHBUF\n\tgl_Position.z = log2(max( EPSILON, gl_Position.w + 1.0 )) * logDepthBufFC;\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t#else\n\t\tgl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n\t#endif\n#endif\n"
          , Lc = "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif\n"
          , Rc = "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n"
          , Pc = "#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) * offsetRepeat.zw + offsetRepeat.xy );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n"
          , Cc = "#ifdef USE_MAP\n\tuniform vec4 offsetRepeat;\n\tuniform sampler2D map;\n#endif\n"
          , Ic = "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif\n"
          , Uc = "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif"
          , Nc = "#ifdef USE_MORPHNORMALS\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif\n"
          , Oc = "#ifdef USE_MORPHTARGETS\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif"
          , Dc = "#ifdef USE_MORPHTARGETS\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\t#endif\n#endif\n"
          , Fc = "#ifdef DOUBLE_SIDED\n\tfloat flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n#else\n\tfloat flipNormal = 1.0;\n#endif\n"
          , Bc = "#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal ) * flipNormal;\n#endif\n#ifdef USE_NORMALMAP\n\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n"
          , zc = "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 S = normalize( q0 * st1.t - q1 * st0.t );\n\t\tvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n\t\tvec3 N = normalize( surf_norm );\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = normalScale * mapN.xy;\n\t\tmat3 tsn = mat3( S, T, N );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif\n"
          , Gc = "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 1.0 - 2.0 * rgb.xyz;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n"
          , Hc = "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif\n"
          , Vc = "#ifdef USE_SKINNING\n\tvec4 mvPosition = modelViewMatrix * skinned;\n#else\n\tvec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\n#endif\ngl_Position = projectionMatrix * mvPosition;\n"
          , kc = "#if defined( DITHERING )\n  gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif\n"
          , jc = "#if defined( DITHERING )\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif\n"
          , Wc = "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif\n"
          , Xc = "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif"
          , qc = "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = floor( uv * size + 0.5 ) / size;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\treturn (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn 1.0;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\tfloat dp = ( length( lightToPosition ) - shadowBias ) / 1000.0;\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif\n"
          , Yc = "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n#endif\n"
          , Zc = "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif\n"
          , Jc = "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}\n"
          , Qc = "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif"
          , Kc = "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif\n"
          , $c = "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\tskinned  = bindMatrixInverse * skinned;\n#endif\n"
          , th = "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n#endif\n"
          , eh = "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif"
          , ih = "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif"
          , nh = "#if defined( TONE_MAPPING )\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif\n"
          , rh = "#define saturate(a) clamp( a, 0.0, 1.0 )\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\n"
          , ah = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n#endif"
          , oh = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n\tuniform vec4 offsetRepeat;\n#endif\n"
          , sh = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n#endif"
          , ch = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif"
          , hh = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n#endif"
          , lh = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = uv2;\n#endif"
          , uh = "#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( PHYSICAL ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n\t#ifdef USE_SKINNING\n\t\tvec4 worldPosition = modelMatrix * skinned;\n\t#else\n\t\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n\t#endif\n#endif\n"
          , dh = "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n\tgl_FragColor.a *= opacity;\n}\n"
          , ph = "varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}\n"
          , fh = "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}\n"
          , mh = "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n"
          , gh = "uniform vec3 lightPos;\nvarying vec4 vWorldPosition;\n#include <common>\n#include <packing>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tgl_FragColor = packDepthToRGBA( length( vWorldPosition.xyz - lightPos.xyz ) / 1000.0 );\n}\n"
          , vh = "varying vec4 vWorldPosition;\n#include <common>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <skinbase_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition;\n}\n"
          , yh = "uniform sampler2D tEquirect;\nuniform float tFlip;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldPosition );\n\tvec2 sampleUV;\n\tsampleUV.y = saturate( tFlip * direction.y * -0.5 + 0.5 );\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n}\n"
          , xh = "varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}\n"
          , _h = "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n"
          , bh = "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}\n"
          , wh = "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\treflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <normal_flip>\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n"
          , Mh = "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}\n"
          , Eh = "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <normal_flip>\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n"
          , Th = "#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n"
          , Sh = "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_flip>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n"
          , Ah = "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n"
          , Lh = "#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifndef STANDARD\n\tuniform float clearCoat;\n\tuniform float clearCoatRoughness;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <lights_pars>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_flip>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n"
          , Rh = "#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n"
          , Ph = "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\t#include <normal_flip>\n\t#include <normal_fragment>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}\n"
          , Ch = "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}\n"
          , Ih = "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n"
          , Uh = "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#ifdef USE_SIZEATTENUATION\n\t\tgl_PointSize = size * ( scale / - mvPosition.z );\n\t#else\n\t\tgl_PointSize = size;\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n"
          , Nh = "uniform float opacity;\n#include <common>\n#include <packing>\n#include <bsdfs>\n#include <lights_pars>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( 0.0, 0.0, 0.0, opacity * ( 1.0 - getShadowMask() ) );\n}\n"
          , Oh = "#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n}\n"
          , Dh = {
            alphamap_fragment: Ns,
            alphamap_pars_fragment: Os,
            alphatest_fragment: Ds,
            aomap_fragment: Fs,
            aomap_pars_fragment: Bs,
            begin_vertex: zs,
            beginnormal_vertex: Gs,
            bsdfs: Hs,
            bumpmap_pars_fragment: Vs,
            clipping_planes_fragment: ks,
            clipping_planes_pars_fragment: js,
            clipping_planes_pars_vertex: Ws,
            clipping_planes_vertex: Xs,
            color_fragment: qs,
            color_pars_fragment: Ys,
            color_pars_vertex: Zs,
            color_vertex: Js,
            common: Qs,
            cube_uv_reflection_fragment: Ks,
            defaultnormal_vertex: $s,
            displacementmap_pars_vertex: tc,
            displacementmap_vertex: ec,
            emissivemap_fragment: ic,
            emissivemap_pars_fragment: nc,
            encodings_fragment: rc,
            encodings_pars_fragment: ac,
            envmap_fragment: oc,
            envmap_pars_fragment: sc,
            envmap_pars_vertex: cc,
            envmap_vertex: hc,
            fog_vertex: lc,
            fog_pars_vertex: uc,
            fog_fragment: dc,
            fog_pars_fragment: pc,
            gradientmap_pars_fragment: fc,
            lightmap_fragment: mc,
            lightmap_pars_fragment: gc,
            lights_lambert_vertex: vc,
            lights_pars: yc,
            lights_phong_fragment: xc,
            lights_phong_pars_fragment: _c,
            lights_physical_fragment: bc,
            lights_physical_pars_fragment: wc,
            lights_template: Mc,
            logdepthbuf_fragment: Ec,
            logdepthbuf_pars_fragment: Tc,
            logdepthbuf_pars_vertex: Sc,
            logdepthbuf_vertex: Ac,
            map_fragment: Lc,
            map_pars_fragment: Rc,
            map_particle_fragment: Pc,
            map_particle_pars_fragment: Cc,
            metalnessmap_fragment: Ic,
            metalnessmap_pars_fragment: Uc,
            morphnormal_vertex: Nc,
            morphtarget_pars_vertex: Oc,
            morphtarget_vertex: Dc,
            normal_flip: Fc,
            normal_fragment: Bc,
            normalmap_pars_fragment: zc,
            packing: Gc,
            premultiplied_alpha_fragment: Hc,
            project_vertex: Vc,
            dithering_fragment: kc,
            dithering_pars_fragment: jc,
            roughnessmap_fragment: Wc,
            roughnessmap_pars_fragment: Xc,
            shadowmap_pars_fragment: qc,
            shadowmap_pars_vertex: Yc,
            shadowmap_vertex: Zc,
            shadowmask_pars_fragment: Jc,
            skinbase_vertex: Qc,
            skinning_pars_vertex: Kc,
            skinning_vertex: $c,
            skinnormal_vertex: th,
            specularmap_fragment: eh,
            specularmap_pars_fragment: ih,
            tonemapping_fragment: nh,
            tonemapping_pars_fragment: rh,
            uv_pars_fragment: ah,
            uv_pars_vertex: oh,
            uv_vertex: sh,
            uv2_pars_fragment: ch,
            uv2_pars_vertex: hh,
            uv2_vertex: lh,
            worldpos_vertex: uh,
            cube_frag: dh,
            cube_vert: ph,
            depth_frag: fh,
            depth_vert: mh,
            distanceRGBA_frag: gh,
            distanceRGBA_vert: vh,
            equirect_frag: yh,
            equirect_vert: xh,
            linedashed_frag: _h,
            linedashed_vert: bh,
            meshbasic_frag: wh,
            meshbasic_vert: Mh,
            meshlambert_frag: Eh,
            meshlambert_vert: Th,
            meshphong_frag: Sh,
            meshphong_vert: Ah,
            meshphysical_frag: Lh,
            meshphysical_vert: Rh,
            normal_frag: Ph,
            normal_vert: Ch,
            points_frag: Ih,
            points_vert: Uh,
            shadow_frag: Nh,
            shadow_vert: Oh
        }
          , Fh = {
            basic: {
                uniforms: Us.merge([Is.common, Is.aomap, Is.lightmap, Is.fog]),
                vertexShader: Dh.meshbasic_vert,
                fragmentShader: Dh.meshbasic_frag
            },
            lambert: {
                uniforms: Us.merge([Is.common, Is.aomap, Is.lightmap, Is.emissivemap, Is.fog, Is.lights, {
                    emissive: {
                        value: new q(0)
                    }
                }]),
                vertexShader: Dh.meshlambert_vert,
                fragmentShader: Dh.meshlambert_frag
            },
            phong: {
                uniforms: Us.merge([Is.common, Is.aomap, Is.lightmap, Is.emissivemap, Is.bumpmap, Is.normalmap, Is.displacementmap, Is.gradientmap, Is.fog, Is.lights, {
                    emissive: {
                        value: new q(0)
                    },
                    specular: {
                        value: new q(1118481)
                    },
                    shininess: {
                        value: 30
                    }
                }]),
                vertexShader: Dh.meshphong_vert,
                fragmentShader: Dh.meshphong_frag
            },
            standard: {
                uniforms: Us.merge([Is.common, Is.aomap, Is.lightmap, Is.emissivemap, Is.bumpmap, Is.normalmap, Is.displacementmap, Is.roughnessmap, Is.metalnessmap, Is.fog, Is.lights, {
                    emissive: {
                        value: new q(0)
                    },
                    roughness: {
                        value: .5
                    },
                    metalness: {
                        value: .5
                    },
                    envMapIntensity: {
                        value: 1
                    }
                }]),
                vertexShader: Dh.meshphysical_vert,
                fragmentShader: Dh.meshphysical_frag
            },
            points: {
                uniforms: Us.merge([Is.points, Is.fog]),
                vertexShader: Dh.points_vert,
                fragmentShader: Dh.points_frag
            },
            dashed: {
                uniforms: Us.merge([Is.common, Is.fog, {
                    scale: {
                        value: 1
                    },
                    dashSize: {
                        value: 1
                    },
                    totalSize: {
                        value: 2
                    }
                }]),
                vertexShader: Dh.linedashed_vert,
                fragmentShader: Dh.linedashed_frag
            },
            depth: {
                uniforms: Us.merge([Is.common, Is.displacementmap]),
                vertexShader: Dh.depth_vert,
                fragmentShader: Dh.depth_frag
            },
            normal: {
                uniforms: Us.merge([Is.common, Is.bumpmap, Is.normalmap, Is.displacementmap, {
                    opacity: {
                        value: 1
                    }
                }]),
                vertexShader: Dh.normal_vert,
                fragmentShader: Dh.normal_frag
            },
            cube: {
                uniforms: {
                    tCube: {
                        value: null
                    },
                    tFlip: {
                        value: -1
                    },
                    opacity: {
                        value: 1
                    }
                },
                vertexShader: Dh.cube_vert,
                fragmentShader: Dh.cube_frag
            },
            equirect: {
                uniforms: {
                    tEquirect: {
                        value: null
                    },
                    tFlip: {
                        value: -1
                    }
                },
                vertexShader: Dh.equirect_vert,
                fragmentShader: Dh.equirect_frag
            },
            distanceRGBA: {
                uniforms: {
                    lightPos: {
                        value: new h
                    }
                },
                vertexShader: Dh.distanceRGBA_vert,
                fragmentShader: Dh.distanceRGBA_frag
            }
        };
        Fh.physical = {
            uniforms: Us.merge([Fh.standard.uniforms, {
                clearCoat: {
                    value: 0
                },
                clearCoatRoughness: {
                    value: 0
                }
            }]),
            vertexShader: Dh.meshphysical_vert,
            fragmentShader: Dh.meshphysical_frag
        },
        Object.assign(Y.prototype, {
            set: function(t, e) {
                return this.min.copy(t),
                this.max.copy(e),
                this
            },
            setFromPoints: function(t) {
                this.makeEmpty();
                for (var e = 0, i = t.length; e < i; e++)
                    this.expandByPoint(t[e]);
                return this
            },
            setFromCenterAndSize: function() {
                var t = new i;
                return function(e, i) {
                    var n = t.copy(i).multiplyScalar(.5);
                    return this.min.copy(e).sub(n),
                    this.max.copy(e).add(n),
                    this
                }
            }(),
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(t) {
                return this.min.copy(t.min),
                this.max.copy(t.max),
                this
            },
            makeEmpty: function() {
                return this.min.x = this.min.y = +(1 / 0),
                this.max.x = this.max.y = -(1 / 0),
                this
            },
            isEmpty: function() {
                return this.max.x < this.min.x || this.max.y < this.min.y
            },
            getCenter: function(t) {
                var e = t || new i;
                return this.isEmpty() ? e.set(0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5)
            },
            getSize: function(t) {
                var e = t || new i;
                return this.isEmpty() ? e.set(0, 0) : e.subVectors(this.max, this.min)
            },
            expandByPoint: function(t) {
                return this.min.min(t),
                this.max.max(t),
                this
            },
            expandByVector: function(t) {
                return this.min.sub(t),
                this.max.add(t),
                this
            },
            expandByScalar: function(t) {
                return this.min.addScalar(-t),
                this.max.addScalar(t),
                this
            },
            containsPoint: function(t) {
                return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y)
            },
            containsBox: function(t) {
                return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y
            },
            getParameter: function(t, e) {
                var n = e || new i;
                return n.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y))
            },
            intersectsBox: function(t) {
                return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y)
            },
            clampPoint: function(t, e) {
                var n = e || new i;
                return n.copy(t).clamp(this.min, this.max)
            },
            distanceToPoint: function() {
                var t = new i;
                return function(e) {
                    var i = t.copy(e).clamp(this.min, this.max);
                    return i.sub(e).length()
                }
            }(),
            intersect: function(t) {
                return this.min.max(t.min),
                this.max.min(t.max),
                this
            },
            union: function(t) {
                return this.min.min(t.min),
                this.max.max(t.max),
                this
            },
            translate: function(t) {
                return this.min.add(t),
                this.max.add(t),
                this
            },
            equals: function(t) {
                return t.min.equals(this.min) && t.max.equals(this.max)
            }
        });
        var Bh = 0;
        Object.assign(Q.prototype, e.prototype, {
            isMaterial: !0,
            setValues: function(t) {
                if (void 0 !== t)
                    for (var e in t) {
                        var i = t[e];
                        if (void 0 !== i) {
                            var n = this[e];
                            void 0 !== n ? n && n.isColor ? n.set(i) : n && n.isVector3 && i && i.isVector3 ? n.copy(i) : "overdraw" === e ? this[e] = Number(i) : this[e] = i : console.warn("THREE." + this.type + ": '" + e + "' is not a property of this material.")
                        } else
                            console.warn("THREE.Material: '" + e + "' parameter is undefined.")
                    }
            },
            toJSON: function(t) {
                function e(t) {
                    var e = [];
                    for (var i in t) {
                        var n = t[i];
                        delete n.metadata,
                        e.push(n)
                    }
                    return e
                }
                var i = void 0 === t;
                i && (t = {
                    textures: {},
                    images: {}
                });
                var n = {
                    metadata: {
                        version: 4.5,
                        type: "Material",
                        generator: "Material.toJSON"
                    }
                };
                if (n.uuid = this.uuid,
                n.type = this.type,
                "" !== this.name && (n.name = this.name),
                this.color && this.color.isColor && (n.color = this.color.getHex()),
                void 0 !== this.roughness && (n.roughness = this.roughness),
                void 0 !== this.metalness && (n.metalness = this.metalness),
                this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()),
                this.specular && this.specular.isColor && (n.specular = this.specular.getHex()),
                void 0 !== this.shininess && (n.shininess = this.shininess),
                void 0 !== this.clearCoat && (n.clearCoat = this.clearCoat),
                void 0 !== this.clearCoatRoughness && (n.clearCoatRoughness = this.clearCoatRoughness),
                this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid),
                this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid),
                this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid),
                this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid,
                n.bumpScale = this.bumpScale),
                this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid,
                n.normalScale = this.normalScale.toArray()),
                this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid,
                n.displacementScale = this.displacementScale,
                n.displacementBias = this.displacementBias),
                this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid),
                this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid),
                this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid),
                this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid),
                this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid,
                n.reflectivity = this.reflectivity),
                this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid),
                void 0 !== this.size && (n.size = this.size),
                void 0 !== this.sizeAttenuation && (n.sizeAttenuation = this.sizeAttenuation),
                this.blending !== Ea && (n.blending = this.blending),
                this.shading !== xa && (n.shading = this.shading),
                this.side !== ma && (n.side = this.side),
                this.vertexColors !== _a && (n.vertexColors = this.vertexColors),
                this.opacity < 1 && (n.opacity = this.opacity),
                this.transparent === !0 && (n.transparent = this.transparent),
                n.depthFunc = this.depthFunc,
                n.depthTest = this.depthTest,
                n.depthWrite = this.depthWrite,
                this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
                this.premultipliedAlpha === !0 && (n.premultipliedAlpha = this.premultipliedAlpha),
                this.wireframe === !0 && (n.wireframe = this.wireframe),
                this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth),
                "round" !== this.wireframeLinecap && (n.wireframeLinecap = this.wireframeLinecap),
                "round" !== this.wireframeLinejoin && (n.wireframeLinejoin = this.wireframeLinejoin),
                n.skinning = this.skinning,
                n.morphTargets = this.morphTargets,
                n.dithering = this.dithering,
                i) {
                    var r = e(t.textures)
                      , a = e(t.images);
                    r.length > 0 && (n.textures = r),
                    a.length > 0 && (n.images = a)
                }
                return n
            },
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(t) {
                this.name = t.name,
                this.fog = t.fog,
                this.lights = t.lights,
                this.blending = t.blending,
                this.side = t.side,
                this.shading = t.shading,
                this.vertexColors = t.vertexColors,
                this.opacity = t.opacity,
                this.transparent = t.transparent,
                this.blendSrc = t.blendSrc,
                this.blendDst = t.blendDst,
                this.blendEquation = t.blendEquation,
                this.blendSrcAlpha = t.blendSrcAlpha,
                this.blendDstAlpha = t.blendDstAlpha,
                this.blendEquationAlpha = t.blendEquationAlpha,
                this.depthFunc = t.depthFunc,
                this.depthTest = t.depthTest,
                this.depthWrite = t.depthWrite,
                this.colorWrite = t.colorWrite,
                this.precision = t.precision,
                this.polygonOffset = t.polygonOffset,
                this.polygonOffsetFactor = t.polygonOffsetFactor,
                this.polygonOffsetUnits = t.polygonOffsetUnits,
                this.dithering = t.dithering,
                this.alphaTest = t.alphaTest,
                this.premultipliedAlpha = t.premultipliedAlpha,
                this.overdraw = t.overdraw,
                this.visible = t.visible,
                this.clipShadows = t.clipShadows,
                this.clipIntersection = t.clipIntersection;
                var e = t.clippingPlanes
                  , i = null ;
                if (null !== e) {
                    var n = e.length;
                    i = new Array(n);
                    for (var r = 0; r !== n; ++r)
                        i[r] = e[r].clone()
                }
                return this.clippingPlanes = i,
                this
            },
            dispose: function() {
                this.dispatchEvent({
                    type: "dispose"
                })
            }
        }),
        K.prototype = Object.create(Q.prototype),
        K.prototype.constructor = K,
        K.prototype.isShaderMaterial = !0,
        K.prototype.copy = function(t) {
            return Q.prototype.copy.call(this, t),
            this.fragmentShader = t.fragmentShader,
            this.vertexShader = t.vertexShader,
            this.uniforms = Us.clone(t.uniforms),
            this.defines = t.defines,
            this.wireframe = t.wireframe,
            this.wireframeLinewidth = t.wireframeLinewidth,
            this.lights = t.lights,
            this.clipping = t.clipping,
            this.skinning = t.skinning,
            this.morphTargets = t.morphTargets,
            this.morphNormals = t.morphNormals,
            this.extensions = t.extensions,
            this
        }
        ,
        K.prototype.toJSON = function(t) {
            var e = Q.prototype.toJSON.call(this, t);
            return e.uniforms = this.uniforms,
            e.vertexShader = this.vertexShader,
            e.fragmentShader = this.fragmentShader,
            e
        }
        ,
        $.prototype = Object.create(Q.prototype),
        $.prototype.constructor = $,
        $.prototype.isMeshDepthMaterial = !0,
        $.prototype.copy = function(t) {
            return Q.prototype.copy.call(this, t),
            this.depthPacking = t.depthPacking,
            this.skinning = t.skinning,
            this.morphTargets = t.morphTargets,
            this.map = t.map,
            this.alphaMap = t.alphaMap,
            this.displacementMap = t.displacementMap,
            this.displacementScale = t.displacementScale,
            this.displacementBias = t.displacementBias,
            this.wireframe = t.wireframe,
            this.wireframeLinewidth = t.wireframeLinewidth,
            this
        }
        ,
        Object.assign(tt.prototype, {
            isBox3: !0,
            set: function(t, e) {
                return this.min.copy(t),
                this.max.copy(e),
                this
            },
            setFromArray: function(t) {
                for (var e = +(1 / 0), i = +(1 / 0), n = +(1 / 0), r = -(1 / 0), a = -(1 / 0), o = -(1 / 0), s = 0, c = t.length; s < c; s += 3) {
                    var h = t[s]
                      , l = t[s + 1]
                      , u = t[s + 2];
                    h < e && (e = h),
                    l < i && (i = l),
                    u < n && (n = u),
                    h > r && (r = h),
                    l > a && (a = l),
                    u > o && (o = u)
                }
                return this.min.set(e, i, n),
                this.max.set(r, a, o),
                this
            },
            setFromBufferAttribute: function(t) {
                for (var e = +(1 / 0), i = +(1 / 0), n = +(1 / 0), r = -(1 / 0), a = -(1 / 0), o = -(1 / 0), s = 0, c = t.count; s < c; s++) {
                    var h = t.getX(s)
                      , l = t.getY(s)
                      , u = t.getZ(s);
                    h < e && (e = h),
                    l < i && (i = l),
                    u < n && (n = u),
                    h > r && (r = h),
                    l > a && (a = l),
                    u > o && (o = u)
                }
                return this.min.set(e, i, n),
                this.max.set(r, a, o),
                this
            },
            setFromPoints: function(t) {
                this.makeEmpty();
                for (var e = 0, i = t.length; e < i; e++)
                    this.expandByPoint(t[e]);
                return this
            },
            setFromCenterAndSize: function() {
                var t = new h;
                return function(e, i) {
                    var n = t.copy(i).multiplyScalar(.5);
                    return this.min.copy(e).sub(n),
                    this.max.copy(e).add(n),
                    this
                }
            }(),
            setFromObject: function(t) {
                return this.makeEmpty(),
                this.expandByObject(t)
            },
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(t) {
                return this.min.copy(t.min),
                this.max.copy(t.max),
                this
            },
            makeEmpty: function() {
                return this.min.x = this.min.y = this.min.z = +(1 / 0),
                this.max.x = this.max.y = this.max.z = -(1 / 0),
                this
            },
            isEmpty: function() {
                return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
            },
            getCenter: function(t) {
                var e = t || new h;
                return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5)
            },
            getSize: function(t) {
                var e = t || new h;
                return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min)
            },
            expandByPoint: function(t) {
                return this.min.min(t),
                this.max.max(t),
                this
            },
            expandByVector: function(t) {
                return this.min.sub(t),
                this.max.add(t),
                this
            },
            expandByScalar: function(t) {
                return this.min.addScalar(-t),
                this.max.addScalar(t),
                this
            },
            expandByObject: function() {
                var t = new h;
                return function(e) {
                    var i = this;
                    return e.updateMatrixWorld(!0),
                    e.traverse(function(e) {
                        var n, r, a = e.geometry;
                        if (void 0 !== a)
                            if (a.isGeometry) {
                                var o = a.vertices;
                                for (n = 0,
                                r = o.length; n < r; n++)
                                    t.copy(o[n]),
                                    t.applyMatrix4(e.matrixWorld),
                                    i.expandByPoint(t)
                            } else if (a.isBufferGeometry) {
                                var s = a.attributes.position;
                                if (void 0 !== s)
                                    for (n = 0,
                                    r = s.count; n < r; n++)
                                        t.fromBufferAttribute(s, n).applyMatrix4(e.matrixWorld),
                                        i.expandByPoint(t)
                            }
                    }),
                    this
                }
            }(),
            containsPoint: function(t) {
                return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z)
            },
            containsBox: function(t) {
                return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z
            },
            getParameter: function(t, e) {
                var i = e || new h;
                return i.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z))
            },
            intersectsBox: function(t) {
                return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z)
            },
            intersectsSphere: function() {
                var t = new h;
                return function(e) {
                    return this.clampPoint(e.center, t),
                    t.distanceToSquared(e.center) <= e.radius * e.radius
                }
            }(),
            intersectsPlane: function(t) {
                var e, i;
                return t.normal.x > 0 ? (e = t.normal.x * this.min.x,
                i = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x,
                i = t.normal.x * this.min.x),
                t.normal.y > 0 ? (e += t.normal.y * this.min.y,
                i += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y,
                i += t.normal.y * this.min.y),
                t.normal.z > 0 ? (e += t.normal.z * this.min.z,
                i += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z,
                i += t.normal.z * this.min.z),
                e <= t.constant && i >= t.constant
            },
            clampPoint: function(t, e) {
                var i = e || new h;
                return i.copy(t).clamp(this.min, this.max)
            },
            distanceToPoint: function() {
                var t = new h;
                return function(e) {
                    var i = t.copy(e).clamp(this.min, this.max);
                    return i.sub(e).length()
                }
            }(),
            getBoundingSphere: function() {
                var t = new h;
                return function(e) {
                    var i = e || new et;
                    return this.getCenter(i.center),
                    i.radius = .5 * this.getSize(t).length(),
                    i
                }
            }(),
            intersect: function(t) {
                return this.min.max(t.min),
                this.max.min(t.max),
                this.isEmpty() && this.makeEmpty(),
                this
            },
            union: function(t) {
                return this.min.min(t.min),
                this.max.max(t.max),
                this
            },
            applyMatrix4: function() {
                var t = [new h, new h, new h, new h, new h, new h, new h, new h];
                return function(e) {
                    return this.isEmpty() ? this : (t[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
                    t[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
                    t[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
                    t[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
                    t[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
                    t[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
                    t[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
                    t[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
                    this.setFromPoints(t),
                    this)
                }
            }(),
            translate: function(t) {
                return this.min.add(t),
                this.max.add(t),
                this
            },
            equals: function(t) {
                return t.min.equals(this.min) && t.max.equals(this.max)
            }
        }),
        Object.assign(et.prototype, {
            set: function(t, e) {
                return this.center.copy(t),
                this.radius = e,
                this
            },
            setFromPoints: function() {
                var t = new tt;
                return function(e, i) {
                    var n = this.center;
                    void 0 !== i ? n.copy(i) : t.setFromPoints(e).getCenter(n);
                    for (var r = 0, a = 0, o = e.length; a < o; a++)
                        r = Math.max(r, n.distanceToSquared(e[a]));
                    return this.radius = Math.sqrt(r),
                    this
                }
            }(),
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(t) {
                return this.center.copy(t.center),
                this.radius = t.radius,
                this
            },
            empty: function() {
                return this.radius <= 0
            },
            containsPoint: function(t) {
                return t.distanceToSquared(this.center) <= this.radius * this.radius
            },
            distanceToPoint: function(t) {
                return t.distanceTo(this.center) - this.radius
            },
            intersectsSphere: function(t) {
                var e = this.radius + t.radius;
                return t.center.distanceToSquared(this.center) <= e * e
            },
            intersectsBox: function(t) {
                return t.intersectsSphere(this)
            },
            intersectsPlane: function(t) {
                return Math.abs(this.center.dot(t.normal) - t.constant) <= this.radius
            },
            clampPoint: function(t, e) {
                var i = this.center.distanceToSquared(t)
                  , n = e || new h;
                return n.copy(t),
                i > this.radius * this.radius && (n.sub(this.center).normalize(),
                n.multiplyScalar(this.radius).add(this.center)),
                n
            },
            getBoundingBox: function(t) {
                var e = t || new tt;
                return e.set(this.center, this.center),
                e.expandByScalar(this.radius),
                e
            },
            applyMatrix4: function(t) {
                return this.center.applyMatrix4(t),
                this.radius = this.radius * t.getMaxScaleOnAxis(),
                this
            },
            translate: function(t) {
                return this.center.add(t),
                this
            },
            equals: function(t) {
                return t.center.equals(this.center) && t.radius === this.radius
            }
        }),
        Object.assign(it.prototype, {
            isMatrix3: !0,
            set: function(t, e, i, n, r, a, o, s, c) {
                var h = this.elements;
                return h[0] = t,
                h[1] = n,
                h[2] = o,
                h[3] = e,
                h[4] = r,
                h[5] = s,
                h[6] = i,
                h[7] = a,
                h[8] = c,
                this
            },
            identity: function() {
                return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1),
                this
            },
            clone: function() {
                return (new this.constructor).fromArray(this.elements)
            },
            copy: function(t) {
                var e = this.elements
                  , i = t.elements;
                return e[0] = i[0],
                e[1] = i[1],
                e[2] = i[2],
                e[3] = i[3],
                e[4] = i[4],
                e[5] = i[5],
                e[6] = i[6],
                e[7] = i[7],
                e[8] = i[8],
                this
            },
            setFromMatrix4: function(t) {
                var e = t.elements;
                return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]),
                this
            },
            applyToBufferAttribute: function() {
                var t = new h;
                return function(e) {
                    for (var i = 0, n = e.count; i < n; i++)
                        t.x = e.getX(i),
                        t.y = e.getY(i),
                        t.z = e.getZ(i),
                        t.applyMatrix3(this),
                        e.setXYZ(i, t.x, t.y, t.z);
                    return e
                }
            }(),
            multiply: function(t) {
                return this.multiplyMatrices(this, t)
            },
            premultiply: function(t) {
                return this.multiplyMatrices(t, this)
            },
            multiplyMatrices: function(t, e) {
                var i = t.elements
                  , n = e.elements
                  , r = this.elements
                  , a = i[0]
                  , o = i[3]
                  , s = i[6]
                  , c = i[1]
                  , h = i[4]
                  , l = i[7]
                  , u = i[2]
                  , d = i[5]
                  , p = i[8]
                  , f = n[0]
                  , m = n[3]
                  , g = n[6]
                  , v = n[1]
                  , y = n[4]
                  , x = n[7]
                  , _ = n[2]
                  , b = n[5]
                  , w = n[8];
                return r[0] = a * f + o * v + s * _,
                r[3] = a * m + o * y + s * b,
                r[6] = a * g + o * x + s * w,
                r[1] = c * f + h * v + l * _,
                r[4] = c * m + h * y + l * b,
                r[7] = c * g + h * x + l * w,
                r[2] = u * f + d * v + p * _,
                r[5] = u * m + d * y + p * b,
                r[8] = u * g + d * x + p * w,
                this
            },
            multiplyScalar: function(t) {
                var e = this.elements;
                return e[0] *= t,
                e[3] *= t,
                e[6] *= t,
                e[1] *= t,
                e[4] *= t,
                e[7] *= t,
                e[2] *= t,
                e[5] *= t,
                e[8] *= t,
                this
            },
            determinant: function() {
                var t = this.elements
                  , e = t[0]
                  , i = t[1]
                  , n = t[2]
                  , r = t[3]
                  , a = t[4]
                  , o = t[5]
                  , s = t[6]
                  , c = t[7]
                  , h = t[8];
                return e * a * h - e * o * c - i * r * h + i * o * s + n * r * c - n * a * s
            },
            getInverse: function(t, e) {
                t && t.isMatrix4 && console.error("THREE.Matrix3.getInverse no longer takes a Matrix4 argument.");
                var i = t.elements
                  , n = this.elements
                  , r = i[0]
                  , a = i[1]
                  , o = i[2]
                  , s = i[3]
                  , c = i[4]
                  , h = i[5]
                  , l = i[6]
                  , u = i[7]
                  , d = i[8]
                  , p = d * c - h * u
                  , f = h * l - d * s
                  , m = u * s - c * l
                  , g = r * p + a * f + o * m;
                if (0 === g) {
                    var v = "THREE.Matrix3.getInverse(): can't invert matrix, determinant is 0";
                    if (e === !0)
                        throw new Error(v);
                    return console.warn(v),
                    this.identity()
                }
                var y = 1 / g;
                return n[0] = p * y,
                n[1] = (o * u - d * a) * y,
                n[2] = (h * a - o * c) * y,
                n[3] = f * y,
                n[4] = (d * r - o * l) * y,
                n[5] = (o * s - h * r) * y,
                n[6] = m * y,
                n[7] = (a * l - u * r) * y,
                n[8] = (c * r - a * s) * y,
                this
            },
            transpose: function() {
                var t, e = this.elements;
                return t = e[1],
                e[1] = e[3],
                e[3] = t,
                t = e[2],
                e[2] = e[6],
                e[6] = t,
                t = e[5],
                e[5] = e[7],
                e[7] = t,
                this
            },
            getNormalMatrix: function(t) {
                return this.setFromMatrix4(t).getInverse(this).transpose()
            },
            transposeIntoArray: function(t) {
                var e = this.elements;
                return t[0] = e[0],
                t[1] = e[3],
                t[2] = e[6],
                t[3] = e[1],
                t[4] = e[4],
                t[5] = e[7],
                t[6] = e[2],
                t[7] = e[5],
                t[8] = e[8],
                this
            },
            equals: function(t) {
                for (var e = this.elements, i = t.elements, n = 0; n < 9; n++)
                    if (e[n] !== i[n])
                        return !1;
                return !0
            },
            fromArray: function(t, e) {
                void 0 === e && (e = 0);
                for (var i = 0; i < 9; i++)
                    this.elements[i] = t[i + e];
                return this
            },
            toArray: function(t, e) {
                void 0 === t && (t = []),
                void 0 === e && (e = 0);
                var i = this.elements;
                return t[e] = i[0],
                t[e + 1] = i[1],
                t[e + 2] = i[2],
                t[e + 3] = i[3],
                t[e + 4] = i[4],
                t[e + 5] = i[5],
                t[e + 6] = i[6],
                t[e + 7] = i[7],
                t[e + 8] = i[8],
                t
            }
        }),
        Object.assign(nt.prototype, {
            set: function(t, e) {
                return this.normal.copy(t),
                this.constant = e,
                this
            },
            setComponents: function(t, e, i, n) {
                return this.normal.set(t, e, i),
                this.constant = n,
                this
            },
            setFromNormalAndCoplanarPoint: function(t, e) {
                return this.normal.copy(t),
                this.constant = -e.dot(this.normal),
                this
            },
            setFromCoplanarPoints: function() {
                var t = new h
                  , e = new h;
                return function(i, n, r) {
                    var a = t.subVectors(r, n).cross(e.subVectors(i, n)).normalize();
                    return this.setFromNormalAndCoplanarPoint(a, i),
                    this
                }
            }(),
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(t) {
                return this.normal.copy(t.normal),
                this.constant = t.constant,
                this
            },
            normalize: function() {
                var t = 1 / this.normal.length();
                return this.normal.multiplyScalar(t),
                this.constant *= t,
                this
            },
            negate: function() {
                return this.constant *= -1,
                this.normal.negate(),
                this
            },
            distanceToPoint: function(t) {
                return this.normal.dot(t) + this.constant
            },
            distanceToSphere: function(t) {
                return this.distanceToPoint(t.center) - t.radius
            },
            projectPoint: function(t, e) {
                return this.orthoPoint(t, e).sub(t).negate()
            },
            orthoPoint: function(t, e) {
                var i = this.distanceToPoint(t)
                  , n = e || new h;
                return n.copy(this.normal).multiplyScalar(i)
            },
            intersectLine: function() {
                var t = new h;
                return function(e, i) {
                    var n = i || new h
                      , r = e.delta(t)
                      , a = this.normal.dot(r);
                    if (0 !== a) {
                        var o = -(e.start.dot(this.normal) + this.constant) / a;
                        if (!(o < 0 || o > 1))
                            return n.copy(r).multiplyScalar(o).add(e.start)
                    } else if (0 === this.distanceToPoint(e.start))
                        return n.copy(e.start)
                }
            }(),
            intersectsLine: function(t) {
                var e = this.distanceToPoint(t.start)
                  , i = this.distanceToPoint(t.end);
                return e < 0 && i > 0 || i < 0 && e > 0
            },
            intersectsBox: function(t) {
                return t.intersectsPlane(this)
            },
            intersectsSphere: function(t) {
                return t.intersectsPlane(this)
            },
            coplanarPoint: function(t) {
                var e = t || new h;
                return e.copy(this.normal).multiplyScalar(-this.constant)
            },
            applyMatrix4: function() {
                var t = new h
                  , e = new it;
                return function(i, n) {
                    var r = this.coplanarPoint(t).applyMatrix4(i)
                      , a = n || e.getNormalMatrix(i)
                      , o = this.normal.applyMatrix3(a).normalize();
                    return this.constant = -r.dot(o),
                    this
                }
            }(),
            translate: function(t) {
                return this.constant = this.constant - t.dot(this.normal),
                this
            },
            equals: function(t) {
                return t.normal.equals(this.normal) && t.constant === this.constant
            }
        }),
        Object.assign(rt.prototype, {
            set: function(t, e, i, n, r, a) {
                var o = this.planes;
                return o[0].copy(t),
                o[1].copy(e),
                o[2].copy(i),
                o[3].copy(n),
                o[4].copy(r),
                o[5].copy(a),
                this
            },
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(t) {
                for (var e = this.planes, i = 0; i < 6; i++)
                    e[i].copy(t.planes[i]);
                return this
            },
            setFromMatrix: function(t) {
                var e = this.planes
                  , i = t.elements
                  , n = i[0]
                  , r = i[1]
                  , a = i[2]
                  , o = i[3]
                  , s = i[4]
                  , c = i[5]
                  , h = i[6]
                  , l = i[7]
                  , u = i[8]
                  , d = i[9]
                  , p = i[10]
                  , f = i[11]
                  , m = i[12]
                  , g = i[13]
                  , v = i[14]
                  , y = i[15];
                return e[0].setComponents(o - n, l - s, f - u, y - m).normalize(),
                e[1].setComponents(o + n, l + s, f + u, y + m).normalize(),
                e[2].setComponents(o + r, l + c, f + d, y + g).normalize(),
                e[3].setComponents(o - r, l - c, f - d, y - g).normalize(),
                e[4].setComponents(o - a, l - h, f - p, y - v).normalize(),
                e[5].setComponents(o + a, l + h, f + p, y + v).normalize(),
                this
            },
            intersectsObject: function() {
                var t = new et;
                return function(e) {
                    var i = e.geometry;
                    return null === i.boundingSphere && i.computeBoundingSphere(),
                    t.copy(i.boundingSphere).applyMatrix4(e.matrixWorld),
                    this.intersectsSphere(t)
                }
            }(),
            intersectsSprite: function() {
                var t = new et;
                return function(e) {
                    return t.center.set(0, 0, 0),
                    t.radius = .7071067811865476,
                    t.applyMatrix4(e.matrixWorld),
                    this.intersectsSphere(t)
                }
            }(),
            intersectsSphere: function(t) {
                for (var e = this.planes, i = t.center, n = -t.radius, r = 0; r < 6; r++) {
                    var a = e[r].distanceToPoint(i);
                    if (a < n)
                        return !1
                }
                return !0
            },
            intersectsBox: function() {
                var t = new h
                  , e = new h;
                return function(i) {
                    for (var n = this.planes, r = 0; r < 6; r++) {
                        var a = n[r];
                        t.x = a.normal.x > 0 ? i.min.x : i.max.x,
                        e.x = a.normal.x > 0 ? i.max.x : i.min.x,
                        t.y = a.normal.y > 0 ? i.min.y : i.max.y,
                        e.y = a.normal.y > 0 ? i.max.y : i.min.y,
                        t.z = a.normal.z > 0 ? i.min.z : i.max.z,
                        e.z = a.normal.z > 0 ? i.max.z : i.min.z;
                        var o = a.distanceToPoint(t)
                          , s = a.distanceToPoint(e);
                        if (o < 0 && s < 0)
                            return !1
                    }
                    return !0
                }
            }(),
            containsPoint: function(t) {
                for (var e = this.planes, i = 0; i < 6; i++)
                    if (e[i].distanceToPoint(t) < 0)
                        return !1;
                return !0
            }
        }),
        Object.assign(ot.prototype, {
            set: function(t, e) {
                return this.origin.copy(t),
                this.direction.copy(e),
                this
            },
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(t) {
                return this.origin.copy(t.origin),
                this.direction.copy(t.direction),
                this
            },
            at: function(t, e) {
                var i = e || new h;
                return i.copy(this.direction).multiplyScalar(t).add(this.origin)
            },
            lookAt: function(t) {
                return this.direction.copy(t).sub(this.origin).normalize(),
                this
            },
            recast: function() {
                var t = new h;
                return function(e) {
                    return this.origin.copy(this.at(e, t)),
                    this
                }
            }(),
            closestPointToPoint: function(t, e) {
                var i = e || new h;
                i.subVectors(t, this.origin);
                var n = i.dot(this.direction);
                return n < 0 ? i.copy(this.origin) : i.copy(this.direction).multiplyScalar(n).add(this.origin)
            },
            distanceToPoint: function(t) {
                return Math.sqrt(this.distanceSqToPoint(t))
            },
            distanceSqToPoint: function() {
                var t = new h;
                return function(e) {
                    var i = t.subVectors(e, this.origin).dot(this.direction);
                    return i < 0 ? this.origin.distanceToSquared(e) : (t.copy(this.direction).multiplyScalar(i).add(this.origin),
                    t.distanceToSquared(e))
                }
            }(),
            distanceSqToSegment: function() {
                var t = new h
                  , e = new h
                  , i = new h;
                return function(n, r, a, o) {
                    t.copy(n).add(r).multiplyScalar(.5),
                    e.copy(r).sub(n).normalize(),
                    i.copy(this.origin).sub(t);
                    var s, c, h, l, u = .5 * n.distanceTo(r), d = -this.direction.dot(e), p = i.dot(this.direction), f = -i.dot(e), m = i.lengthSq(), g = Math.abs(1 - d * d);
                    if (g > 0)
                        if (s = d * f - p,
                        c = d * p - f,
                        l = u * g,
                        s >= 0)
                            if (c >= -l)
                                if (c <= l) {
                                    var v = 1 / g;
                                    s *= v,
                                    c *= v,
                                    h = s * (s + d * c + 2 * p) + c * (d * s + c + 2 * f) + m
                                } else
                                    c = u,
                                    s = Math.max(0, -(d * c + p)),
                                    h = -s * s + c * (c + 2 * f) + m;
                            else
                                c = -u,
                                s = Math.max(0, -(d * c + p)),
                                h = -s * s + c * (c + 2 * f) + m;
                        else
                            c <= -l ? (s = Math.max(0, -(-d * u + p)),
                            c = s > 0 ? -u : Math.min(Math.max(-u, -f), u),
                            h = -s * s + c * (c + 2 * f) + m) : c <= l ? (s = 0,
                            c = Math.min(Math.max(-u, -f), u),
                            h = c * (c + 2 * f) + m) : (s = Math.max(0, -(d * u + p)),
                            c = s > 0 ? u : Math.min(Math.max(-u, -f), u),
                            h = -s * s + c * (c + 2 * f) + m);
                    else
                        c = d > 0 ? -u : u,
                        s = Math.max(0, -(d * c + p)),
                        h = -s * s + c * (c + 2 * f) + m;
                    return a && a.copy(this.direction).multiplyScalar(s).add(this.origin),
                    o && o.copy(e).multiplyScalar(c).add(t),
                    h
                }
            }(),
            intersectSphere: function() {
                var t = new h;
                return function(e, i) {
                    t.subVectors(e.center, this.origin);
                    var n = t.dot(this.direction)
                      , r = t.dot(t) - n * n
                      , a = e.radius * e.radius;
                    if (r > a)
                        return null ;
                    var o = Math.sqrt(a - r)
                      , s = n - o
                      , c = n + o;
                    return s < 0 && c < 0 ? null : s < 0 ? this.at(c, i) : this.at(s, i)
                }
            }(),
            intersectsSphere: function(t) {
                return this.distanceToPoint(t.center) <= t.radius
            },
            distanceToPlane: function(t) {
                var e = t.normal.dot(this.direction);
                if (0 === e)
                    return 0 === t.distanceToPoint(this.origin) ? 0 : null ;
                var i = -(this.origin.dot(t.normal) + t.constant) / e;
                return i >= 0 ? i : null
            },
            intersectPlane: function(t, e) {
                var i = this.distanceToPlane(t);
                return null === i ? null : this.at(i, e)
            },
            intersectsPlane: function(t) {
                var e = t.distanceToPoint(this.origin);
                if (0 === e)
                    return !0;
                var i = t.normal.dot(this.direction);
                return i * e < 0
            },
            intersectBox: function(t, e) {
                var i, n, r, a, o, s, c = 1 / this.direction.x, h = 1 / this.direction.y, l = 1 / this.direction.z, u = this.origin;
                return c >= 0 ? (i = (t.min.x - u.x) * c,
                n = (t.max.x - u.x) * c) : (i = (t.max.x - u.x) * c,
                n = (t.min.x - u.x) * c),
                h >= 0 ? (r = (t.min.y - u.y) * h,
                a = (t.max.y - u.y) * h) : (r = (t.max.y - u.y) * h,
                a = (t.min.y - u.y) * h),
                i > a || r > n ? null : ((r > i || i !== i) && (i = r),
                (a < n || n !== n) && (n = a),
                l >= 0 ? (o = (t.min.z - u.z) * l,
                s = (t.max.z - u.z) * l) : (o = (t.max.z - u.z) * l,
                s = (t.min.z - u.z) * l),
                i > s || o > n ? null : ((o > i || i !== i) && (i = o),
                (s < n || n !== n) && (n = s),
                n < 0 ? null : this.at(i >= 0 ? i : n, e)))
            },
            intersectsBox: function() {
                var t = new h;
                return function(e) {
                    return null !== this.intersectBox(e, t)
                }
            }(),
            intersectTriangle: function() {
                var t = new h
                  , e = new h
                  , i = new h
                  , n = new h;
                return function(r, a, o, s, c) {
                    e.subVectors(a, r),
                    i.subVectors(o, r),
                    n.crossVectors(e, i);
                    var h, l = this.direction.dot(n);
                    if (l > 0) {
                        if (s)
                            return null ;
                        h = 1
                    } else {
                        if (!(l < 0))
                            return null ;
                        h = -1,
                        l = -l
                    }
                    t.subVectors(this.origin, r);
                    var u = h * this.direction.dot(i.crossVectors(t, i));
                    if (u < 0)
                        return null ;
                    var d = h * this.direction.dot(e.cross(t));
                    if (d < 0)
                        return null ;
                    if (u + d > l)
                        return null ;
                    var p = -h * t.dot(n);
                    return p < 0 ? null : this.at(p / l, c)
                }
            }(),
            applyMatrix4: function(t) {
                return this.direction.add(this.origin).applyMatrix4(t),
                this.origin.applyMatrix4(t),
                this.direction.sub(this.origin),
                this.direction.normalize(),
                this
            },
            equals: function(t) {
                return t.origin.equals(this.origin) && t.direction.equals(this.direction)
            }
        }),
        st.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"],
        st.DefaultOrder = "XYZ",
        Object.defineProperties(st.prototype, {
            x: {
                get: function() {
                    return this._x
                },
                set: function(t) {
                    this._x = t,
                    this.onChangeCallback()
                }
            },
            y: {
                get: function() {
                    return this._y
                },
                set: function(t) {
                    this._y = t,
                    this.onChangeCallback()
                }
            },
            z: {
                get: function() {
                    return this._z
                },
                set: function(t) {
                    this._z = t,
                    this.onChangeCallback()
                }
            },
            order: {
                get: function() {
                    return this._order
                },
                set: function(t) {
                    this._order = t,
                    this.onChangeCallback()
                }
            }
        }),
        Object.assign(st.prototype, {
            isEuler: !0,
            set: function(t, e, i, n) {
                return this._x = t,
                this._y = e,
                this._z = i,
                this._order = n || this._order,
                this.onChangeCallback(),
                this
            },
            clone: function() {
                return new this.constructor(this._x,this._y,this._z,this._order)
            },
            copy: function(t) {
                return this._x = t._x,
                this._y = t._y,
                this._z = t._z,
                this._order = t._order,
                this.onChangeCallback(),
                this
            },
            setFromRotationMatrix: function(t, e, i) {
                var n = ws.clamp
                  , r = t.elements
                  , a = r[0]
                  , o = r[4]
                  , s = r[8]
                  , c = r[1]
                  , h = r[5]
                  , l = r[9]
                  , u = r[2]
                  , d = r[6]
                  , p = r[10];
                return e = e || this._order,
                "XYZ" === e ? (this._y = Math.asin(n(s, -1, 1)),
                Math.abs(s) < .99999 ? (this._x = Math.atan2(-l, p),
                this._z = Math.atan2(-o, a)) : (this._x = Math.atan2(d, h),
                this._z = 0)) : "YXZ" === e ? (this._x = Math.asin(-n(l, -1, 1)),
                Math.abs(l) < .99999 ? (this._y = Math.atan2(s, p),
                this._z = Math.atan2(c, h)) : (this._y = Math.atan2(-u, a),
                this._z = 0)) : "ZXY" === e ? (this._x = Math.asin(n(d, -1, 1)),
                Math.abs(d) < .99999 ? (this._y = Math.atan2(-u, p),
                this._z = Math.atan2(-o, h)) : (this._y = 0,
                this._z = Math.atan2(c, a))) : "ZYX" === e ? (this._y = Math.asin(-n(u, -1, 1)),
                Math.abs(u) < .99999 ? (this._x = Math.atan2(d, p),
                this._z = Math.atan2(c, a)) : (this._x = 0,
                this._z = Math.atan2(-o, h))) : "YZX" === e ? (this._z = Math.asin(n(c, -1, 1)),
                Math.abs(c) < .99999 ? (this._x = Math.atan2(-l, h),
                this._y = Math.atan2(-u, a)) : (this._x = 0,
                this._y = Math.atan2(s, p))) : "XZY" === e ? (this._z = Math.asin(-n(o, -1, 1)),
                Math.abs(o) < .99999 ? (this._x = Math.atan2(d, h),
                this._y = Math.atan2(s, a)) : (this._x = Math.atan2(-l, p),
                this._y = 0)) : console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + e),
                this._order = e,
                i !== !1 && this.onChangeCallback(),
                this
            },
            setFromQuaternion: function() {
                var t = new l;
                return function(e, i, n) {
                    return t.makeRotationFromQuaternion(e),
                    this.setFromRotationMatrix(t, i, n)
                }
            }(),
            setFromVector3: function(t, e) {
                return this.set(t.x, t.y, t.z, e || this._order)
            },
            reorder: function() {
                var t = new c;
                return function(e) {
                    return t.setFromEuler(this),
                    this.setFromQuaternion(t, e)
                }
            }(),
            equals: function(t) {
                return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order;
            },
            fromArray: function(t) {
                return this._x = t[0],
                this._y = t[1],
                this._z = t[2],
                void 0 !== t[3] && (this._order = t[3]),
                this.onChangeCallback(),
                this
            },
            toArray: function(t, e) {
                return void 0 === t && (t = []),
                void 0 === e && (e = 0),
                t[e] = this._x,
                t[e + 1] = this._y,
                t[e + 2] = this._z,
                t[e + 3] = this._order,
                t
            },
            toVector3: function(t) {
                return t ? t.set(this._x, this._y, this._z) : new h(this._x,this._y,this._z)
            },
            onChange: function(t) {
                return this.onChangeCallback = t,
                this
            },
            onChangeCallback: function() {}
        }),
        Object.assign(ct.prototype, {
            set: function(t) {
                this.mask = 1 << t | 0
            },
            enable: function(t) {
                this.mask |= 1 << t | 0
            },
            toggle: function(t) {
                this.mask ^= 1 << t | 0
            },
            disable: function(t) {
                this.mask &= ~(1 << t | 0)
            },
            test: function(t) {
                return 0 !== (this.mask & t.mask)
            }
        });
        var zh = 0;
        ht.DefaultUp = new h(0,1,0),
        ht.DefaultMatrixAutoUpdate = !0,
        Object.assign(ht.prototype, e.prototype, {
            isObject3D: !0,
            applyMatrix: function(t) {
                this.matrix.multiplyMatrices(t, this.matrix),
                this.matrix.decompose(this.position, this.quaternion, this.scale)
            },
            setRotationFromAxisAngle: function(t, e) {
                this.quaternion.setFromAxisAngle(t, e)
            },
            setRotationFromEuler: function(t) {
                this.quaternion.setFromEuler(t, !0)
            },
            setRotationFromMatrix: function(t) {
                this.quaternion.setFromRotationMatrix(t)
            },
            setRotationFromQuaternion: function(t) {
                this.quaternion.copy(t)
            },
            rotateOnAxis: function() {
                var t = new c;
                return function(e, i) {
                    return t.setFromAxisAngle(e, i),
                    this.quaternion.multiply(t),
                    this
                }
            }(),
            rotateX: function() {
                var t = new h(1,0,0);
                return function(e) {
                    return this.rotateOnAxis(t, e)
                }
            }(),
            rotateY: function() {
                var t = new h(0,1,0);
                return function(e) {
                    return this.rotateOnAxis(t, e)
                }
            }(),
            rotateZ: function() {
                var t = new h(0,0,1);
                return function(e) {
                    return this.rotateOnAxis(t, e)
                }
            }(),
            translateOnAxis: function() {
                var t = new h;
                return function(e, i) {
                    return t.copy(e).applyQuaternion(this.quaternion),
                    this.position.add(t.multiplyScalar(i)),
                    this
                }
            }(),
            translateX: function() {
                var t = new h(1,0,0);
                return function(e) {
                    return this.translateOnAxis(t, e)
                }
            }(),
            translateY: function() {
                var t = new h(0,1,0);
                return function(e) {
                    return this.translateOnAxis(t, e)
                }
            }(),
            translateZ: function() {
                var t = new h(0,0,1);
                return function(e) {
                    return this.translateOnAxis(t, e)
                }
            }(),
            localToWorld: function(t) {
                return t.applyMatrix4(this.matrixWorld)
            },
            worldToLocal: function() {
                var t = new l;
                return function(e) {
                    return e.applyMatrix4(t.getInverse(this.matrixWorld))
                }
            }(),
            lookAt: function() {
                var t = new l;
                return function(e) {
                    this.isCamera ? t.lookAt(this.position, e, this.up) : t.lookAt(e, this.position, this.up),
                    this.quaternion.setFromRotationMatrix(t)
                }
            }(),
            add: function(t) {
                if (arguments.length > 1) {
                    for (var e = 0; e < arguments.length; e++)
                        this.add(arguments[e]);
                    return this
                }
                return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t),
                this) : (t && t.isObject3D ? (null !== t.parent && t.parent.remove(t),
                t.parent = this,
                t.dispatchEvent({
                    type: "added"
                }),
                this.children.push(t)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t),
                this)
            },
            remove: function(t) {
                if (arguments.length > 1)
                    for (var e = 0; e < arguments.length; e++)
                        this.remove(arguments[e]);
                var i = this.children.indexOf(t);
                i !== -1 && (t.parent = null ,
                t.dispatchEvent({
                    type: "removed"
                }),
                this.children.splice(i, 1))
            },
            getObjectById: function(t) {
                return this.getObjectByProperty("id", t)
            },
            getObjectByName: function(t) {
                return this.getObjectByProperty("name", t)
            },
            getObjectByProperty: function(t, e) {
                if (this[t] === e)
                    return this;
                for (var i = 0, n = this.children.length; i < n; i++) {
                    var r = this.children[i]
                      , a = r.getObjectByProperty(t, e);
                    if (void 0 !== a)
                        return a
                }
            },
            getWorldPosition: function(t) {
                var e = t || new h;
                return this.updateMatrixWorld(!0),
                e.setFromMatrixPosition(this.matrixWorld)
            },
            getWorldQuaternion: function() {
                var t = new h
                  , e = new h;
                return function(i) {
                    var n = i || new c;
                    return this.updateMatrixWorld(!0),
                    this.matrixWorld.decompose(t, n, e),
                    n
                }
            }(),
            getWorldRotation: function() {
                var t = new c;
                return function(e) {
                    var i = e || new st;
                    return this.getWorldQuaternion(t),
                    i.setFromQuaternion(t, this.rotation.order, !1)
                }
            }(),
            getWorldScale: function() {
                var t = new h
                  , e = new c;
                return function(i) {
                    var n = i || new h;
                    return this.updateMatrixWorld(!0),
                    this.matrixWorld.decompose(t, e, n),
                    n
                }
            }(),
            getWorldDirection: function() {
                var t = new c;
                return function(e) {
                    var i = e || new h;
                    return this.getWorldQuaternion(t),
                    i.set(0, 0, 1).applyQuaternion(t)
                }
            }(),
            raycast: function() {},
            traverse: function(t) {
                t(this);
                for (var e = this.children, i = 0, n = e.length; i < n; i++)
                    e[i].traverse(t)
            },
            traverseVisible: function(t) {
                if (this.visible !== !1) {
                    t(this);
                    for (var e = this.children, i = 0, n = e.length; i < n; i++)
                        e[i].traverseVisible(t)
                }
            },
            traverseAncestors: function(t) {
                var e = this.parent;
                null !== e && (t(e),
                e.traverseAncestors(t))
            },
            updateMatrix: function() {
                this.matrix.compose(this.position, this.quaternion, this.scale),
                this.matrixWorldNeedsUpdate = !0
            },
            updateMatrixWorld: function(t) {
                this.matrixAutoUpdate && this.updateMatrix(),
                (this.matrixWorldNeedsUpdate || t) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
                this.matrixWorldNeedsUpdate = !1,
                t = !0);
                for (var e = this.children, i = 0, n = e.length; i < n; i++)
                    e[i].updateMatrixWorld(t)
            },
            toJSON: function(t) {
                function e(e, i) {
                    return void 0 === e[i.uuid] && (e[i.uuid] = i.toJSON(t)),
                    i.uuid
                }
                function i(t) {
                    var e = [];
                    for (var i in t) {
                        var n = t[i];
                        delete n.metadata,
                        e.push(n)
                    }
                    return e
                }
                var n = void 0 === t || "" === t
                  , r = {};
                n && (t = {
                    geometries: {},
                    materials: {},
                    textures: {},
                    images: {}
                },
                r.metadata = {
                    version: 4.5,
                    type: "Object",
                    generator: "Object3D.toJSON"
                });
                var a = {};
                if (a.uuid = this.uuid,
                a.type = this.type,
                "" !== this.name && (a.name = this.name),
                "{}" !== JSON.stringify(this.userData) && (a.userData = this.userData),
                this.castShadow === !0 && (a.castShadow = !0),
                this.receiveShadow === !0 && (a.receiveShadow = !0),
                this.visible === !1 && (a.visible = !1),
                a.matrix = this.matrix.toArray(),
                void 0 !== this.geometry && (a.geometry = e(t.geometries, this.geometry)),
                void 0 !== this.material)
                    if (Array.isArray(this.material)) {
                        for (var o = [], s = 0, c = this.material.length; s < c; s++)
                            o.push(e(t.materials, this.material[s]));
                        a.material = o
                    } else
                        a.material = e(t.materials, this.material);
                if (this.children.length > 0) {
                    a.children = [];
                    for (var s = 0; s < this.children.length; s++)
                        a.children.push(this.children[s].toJSON(t).object)
                }
                if (n) {
                    var h = i(t.geometries)
                      , l = i(t.materials)
                      , u = i(t.textures)
                      , d = i(t.images);
                    h.length > 0 && (r.geometries = h),
                    l.length > 0 && (r.materials = l),
                    u.length > 0 && (r.textures = u),
                    d.length > 0 && (r.images = d)
                }
                return r.object = a,
                r
            },
            clone: function(t) {
                return (new this.constructor).copy(this, t)
            },
            copy: function(t, e) {
                if (void 0 === e && (e = !0),
                this.name = t.name,
                this.up.copy(t.up),
                this.position.copy(t.position),
                this.quaternion.copy(t.quaternion),
                this.scale.copy(t.scale),
                this.matrix.copy(t.matrix),
                this.matrixWorld.copy(t.matrixWorld),
                this.matrixAutoUpdate = t.matrixAutoUpdate,
                this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate,
                this.layers.mask = t.layers.mask,
                this.visible = t.visible,
                this.castShadow = t.castShadow,
                this.receiveShadow = t.receiveShadow,
                this.frustumCulled = t.frustumCulled,
                this.renderOrder = t.renderOrder,
                this.userData = JSON.parse(JSON.stringify(t.userData)),
                e === !0)
                    for (var i = 0; i < t.children.length; i++) {
                        var n = t.children[i];
                        this.add(n.clone())
                    }
                return this
            }
        }),
        Object.assign(lt.prototype, {
            set: function(t, e) {
                return this.start.copy(t),
                this.end.copy(e),
                this
            },
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(t) {
                return this.start.copy(t.start),
                this.end.copy(t.end),
                this
            },
            getCenter: function(t) {
                var e = t || new h;
                return e.addVectors(this.start, this.end).multiplyScalar(.5)
            },
            delta: function(t) {
                var e = t || new h;
                return e.subVectors(this.end, this.start)
            },
            distanceSq: function() {
                return this.start.distanceToSquared(this.end)
            },
            distance: function() {
                return this.start.distanceTo(this.end)
            },
            at: function(t, e) {
                var i = e || new h;
                return this.delta(i).multiplyScalar(t).add(this.start)
            },
            closestPointToPointParameter: function() {
                var t = new h
                  , e = new h;
                return function(i, n) {
                    t.subVectors(i, this.start),
                    e.subVectors(this.end, this.start);
                    var r = e.dot(e)
                      , a = e.dot(t)
                      , o = a / r;
                    return n && (o = ws.clamp(o, 0, 1)),
                    o
                }
            }(),
            closestPointToPoint: function(t, e, i) {
                var n = this.closestPointToPointParameter(t, e)
                  , r = i || new h;
                return this.delta(r).multiplyScalar(n).add(this.start)
            },
            applyMatrix4: function(t) {
                return this.start.applyMatrix4(t),
                this.end.applyMatrix4(t),
                this
            },
            equals: function(t) {
                return t.start.equals(this.start) && t.end.equals(this.end)
            }
        }),
        Object.assign(ut, {
            normal: function() {
                var t = new h;
                return function(e, i, n, r) {
                    var a = r || new h;
                    a.subVectors(n, i),
                    t.subVectors(e, i),
                    a.cross(t);
                    var o = a.lengthSq();
                    return o > 0 ? a.multiplyScalar(1 / Math.sqrt(o)) : a.set(0, 0, 0)
                }
            }(),
            barycoordFromPoint: function() {
                var t = new h
                  , e = new h
                  , i = new h;
                return function(n, r, a, o, s) {
                    t.subVectors(o, r),
                    e.subVectors(a, r),
                    i.subVectors(n, r);
                    var c = t.dot(t)
                      , l = t.dot(e)
                      , u = t.dot(i)
                      , d = e.dot(e)
                      , p = e.dot(i)
                      , f = c * d - l * l
                      , m = s || new h;
                    if (0 === f)
                        return m.set(-2, -1, -1);
                    var g = 1 / f
                      , v = (d * u - l * p) * g
                      , y = (c * p - l * u) * g;
                    return m.set(1 - v - y, y, v)
                }
            }(),
            containsPoint: function() {
                var t = new h;
                return function(e, i, n, r) {
                    var a = ut.barycoordFromPoint(e, i, n, r, t);
                    return a.x >= 0 && a.y >= 0 && a.x + a.y <= 1
                }
            }()
        }),
        Object.assign(ut.prototype, {
            set: function(t, e, i) {
                return this.a.copy(t),
                this.b.copy(e),
                this.c.copy(i),
                this
            },
            setFromPointsAndIndices: function(t, e, i, n) {
                return this.a.copy(t[e]),
                this.b.copy(t[i]),
                this.c.copy(t[n]),
                this
            },
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(t) {
                return this.a.copy(t.a),
                this.b.copy(t.b),
                this.c.copy(t.c),
                this
            },
            area: function() {
                var t = new h
                  , e = new h;
                return function() {
                    return t.subVectors(this.c, this.b),
                    e.subVectors(this.a, this.b),
                    .5 * t.cross(e).length()
                }
            }(),
            midpoint: function(t) {
                var e = t || new h;
                return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
            },
            normal: function(t) {
                return ut.normal(this.a, this.b, this.c, t)
            },
            plane: function(t) {
                var e = t || new nt;
                return e.setFromCoplanarPoints(this.a, this.b, this.c)
            },
            barycoordFromPoint: function(t, e) {
                return ut.barycoordFromPoint(t, this.a, this.b, this.c, e)
            },
            containsPoint: function(t) {
                return ut.containsPoint(t, this.a, this.b, this.c)
            },
            closestPointToPoint: function() {
                var t = new nt
                  , e = [new lt, new lt, new lt]
                  , i = new h
                  , n = new h;
                return function(r, a) {
                    var o = a || new h
                      , s = 1 / 0;
                    if (t.setFromCoplanarPoints(this.a, this.b, this.c),
                    t.projectPoint(r, i),
                    this.containsPoint(i) === !0)
                        o.copy(i);
                    else {
                        e[0].set(this.a, this.b),
                        e[1].set(this.b, this.c),
                        e[2].set(this.c, this.a);
                        for (var c = 0; c < e.length; c++) {
                            e[c].closestPointToPoint(i, !0, n);
                            var l = i.distanceToSquared(n);
                            l < s && (s = l,
                            o.copy(n))
                        }
                    }
                    return o
                }
            }(),
            equals: function(t) {
                return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c)
            }
        }),
        Object.assign(dt.prototype, {
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(t) {
                this.a = t.a,
                this.b = t.b,
                this.c = t.c,
                this.normal.copy(t.normal),
                this.color.copy(t.color),
                this.materialIndex = t.materialIndex;
                for (var e = 0, i = t.vertexNormals.length; e < i; e++)
                    this.vertexNormals[e] = t.vertexNormals[e].clone();
                for (var e = 0, i = t.vertexColors.length; e < i; e++)
                    this.vertexColors[e] = t.vertexColors[e].clone();
                return this
            }
        }),
        pt.prototype = Object.create(Q.prototype),
        pt.prototype.constructor = pt,
        pt.prototype.isMeshBasicMaterial = !0,
        pt.prototype.copy = function(t) {
            return Q.prototype.copy.call(this, t),
            this.color.copy(t.color),
            this.map = t.map,
            this.lightMap = t.lightMap,
            this.lightMapIntensity = t.lightMapIntensity,
            this.aoMap = t.aoMap,
            this.aoMapIntensity = t.aoMapIntensity,
            this.specularMap = t.specularMap,
            this.alphaMap = t.alphaMap,
            this.envMap = t.envMap,
            this.combine = t.combine,
            this.reflectivity = t.reflectivity,
            this.refractionRatio = t.refractionRatio,
            this.wireframe = t.wireframe,
            this.wireframeLinewidth = t.wireframeLinewidth,
            this.wireframeLinecap = t.wireframeLinecap,
            this.wireframeLinejoin = t.wireframeLinejoin,
            this.skinning = t.skinning,
            this.morphTargets = t.morphTargets,
            this
        }
        ,
        Object.defineProperty(ft.prototype, "needsUpdate", {
            set: function(t) {
                t === !0 && this.version++
            }
        }),
        Object.assign(ft.prototype, {
            isBufferAttribute: !0,
            setArray: function(t) {
                if (Array.isArray(t))
                    throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
                this.count = void 0 !== t ? t.length / this.itemSize : 0,
                this.array = t
            },
            setDynamic: function(t) {
                return this.dynamic = t,
                this
            },
            copy: function(t) {
                return this.array = new t.array.constructor(t.array),
                this.itemSize = t.itemSize,
                this.count = t.count,
                this.normalized = t.normalized,
                this.dynamic = t.dynamic,
                this
            },
            copyAt: function(t, e, i) {
                t *= this.itemSize,
                i *= e.itemSize;
                for (var n = 0, r = this.itemSize; n < r; n++)
                    this.array[t + n] = e.array[i + n];
                return this
            },
            copyArray: function(t) {
                return this.array.set(t),
                this
            },
            copyColorsArray: function(t) {
                for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) {
                    var a = t[n];
                    void 0 === a && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", n),
                    a = new q),
                    e[i++] = a.r,
                    e[i++] = a.g,
                    e[i++] = a.b
                }
                return this
            },
            copyIndicesArray: function(t) {
                for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) {
                    var a = t[n];
                    e[i++] = a.a,
                    e[i++] = a.b,
                    e[i++] = a.c
                }
                return this
            },
            copyVector2sArray: function(t) {
                for (var e = this.array, n = 0, r = 0, a = t.length; r < a; r++) {
                    var o = t[r];
                    void 0 === o && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", r),
                    o = new i),
                    e[n++] = o.x,
                    e[n++] = o.y
                }
                return this
            },
            copyVector3sArray: function(t) {
                for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) {
                    var a = t[n];
                    void 0 === a && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", n),
                    a = new h),
                    e[i++] = a.x,
                    e[i++] = a.y,
                    e[i++] = a.z
                }
                return this
            },
            copyVector4sArray: function(t) {
                for (var e = this.array, i = 0, n = 0, a = t.length; n < a; n++) {
                    var o = t[n];
                    void 0 === o && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", n),
                    o = new r),
                    e[i++] = o.x,
                    e[i++] = o.y,
                    e[i++] = o.z,
                    e[i++] = o.w
                }
                return this
            },
            set: function(t, e) {
                return void 0 === e && (e = 0),
                this.array.set(t, e),
                this
            },
            getX: function(t) {
                return this.array[t * this.itemSize]
            },
            setX: function(t, e) {
                return this.array[t * this.itemSize] = e,
                this
            },
            getY: function(t) {
                return this.array[t * this.itemSize + 1]
            },
            setY: function(t, e) {
                return this.array[t * this.itemSize + 1] = e,
                this
            },
            getZ: function(t) {
                return this.array[t * this.itemSize + 2]
            },
            setZ: function(t, e) {
                return this.array[t * this.itemSize + 2] = e,
                this
            },
            getW: function(t) {
                return this.array[t * this.itemSize + 3]
            },
            setW: function(t, e) {
                return this.array[t * this.itemSize + 3] = e,
                this
            },
            setXY: function(t, e, i) {
                return t *= this.itemSize,
                this.array[t + 0] = e,
                this.array[t + 1] = i,
                this
            },
            setXYZ: function(t, e, i, n) {
                return t *= this.itemSize,
                this.array[t + 0] = e,
                this.array[t + 1] = i,
                this.array[t + 2] = n,
                this
            },
            setXYZW: function(t, e, i, n, r) {
                return t *= this.itemSize,
                this.array[t + 0] = e,
                this.array[t + 1] = i,
                this.array[t + 2] = n,
                this.array[t + 3] = r,
                this
            },
            onUpload: function(t) {
                return this.onUploadCallback = t,
                this
            },
            clone: function() {
                return new this.constructor(this.array,this.itemSize).copy(this)
            }
        }),
        mt.prototype = Object.create(ft.prototype),
        mt.prototype.constructor = mt,
        gt.prototype = Object.create(ft.prototype),
        gt.prototype.constructor = gt,
        vt.prototype = Object.create(ft.prototype),
        vt.prototype.constructor = vt,
        yt.prototype = Object.create(ft.prototype),
        yt.prototype.constructor = yt,
        xt.prototype = Object.create(ft.prototype),
        xt.prototype.constructor = xt,
        _t.prototype = Object.create(ft.prototype),
        _t.prototype.constructor = _t,
        bt.prototype = Object.create(ft.prototype),
        bt.prototype.constructor = bt,
        wt.prototype = Object.create(ft.prototype),
        wt.prototype.constructor = wt,
        Mt.prototype = Object.create(ft.prototype),
        Mt.prototype.constructor = Mt,
        Object.assign(Et.prototype, {
            computeGroups: function(t) {
                for (var e, i = [], n = void 0, r = t.faces, a = 0; a < r.length; a++) {
                    var o = r[a];
                    o.materialIndex !== n && (n = o.materialIndex,
                    void 0 !== e && (e.count = 3 * a - e.start,
                    i.push(e)),
                    e = {
                        start: 3 * a,
                        materialIndex: n
                    })
                }
                void 0 !== e && (e.count = 3 * a - e.start,
                i.push(e)),
                this.groups = i
            },
            fromGeometry: function(t) {
                var e, n = t.faces, r = t.vertices, a = t.faceVertexUvs, o = a[0] && a[0].length > 0, s = a[1] && a[1].length > 0, c = t.morphTargets, h = c.length;
                if (h > 0) {
                    e = [];
                    for (var l = 0; l < h; l++)
                        e[l] = [];
                    this.morphTargets.position = e
                }
                var u, d = t.morphNormals, p = d.length;
                if (p > 0) {
                    u = [];
                    for (var l = 0; l < p; l++)
                        u[l] = [];
                    this.morphTargets.normal = u
                }
                for (var f = t.skinIndices, m = t.skinWeights, g = f.length === r.length, v = m.length === r.length, l = 0; l < n.length; l++) {
                    var y = n[l];
                    this.vertices.push(r[y.a], r[y.b], r[y.c]);
                    var x = y.vertexNormals;
                    if (3 === x.length)
                        this.normals.push(x[0], x[1], x[2]);
                    else {
                        var _ = y.normal;
                        this.normals.push(_, _, _)
                    }
                    var b = y.vertexColors;
                    if (3 === b.length)
                        this.colors.push(b[0], b[1], b[2]);
                    else {
                        var w = y.color;
                        this.colors.push(w, w, w)
                    }
                    if (o === !0) {
                        var M = a[0][l];
                        void 0 !== M ? this.uvs.push(M[0], M[1], M[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", l),
                        this.uvs.push(new i, new i, new i))
                    }
                    if (s === !0) {
                        var M = a[1][l];
                        void 0 !== M ? this.uvs2.push(M[0], M[1], M[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", l),
                        this.uvs2.push(new i, new i, new i))
                    }
                    for (var E = 0; E < h; E++) {
                        var T = c[E].vertices;
                        e[E].push(T[y.a], T[y.b], T[y.c])
                    }
                    for (var E = 0; E < p; E++) {
                        var S = d[E].vertexNormals[l];
                        u[E].push(S.a, S.b, S.c)
                    }
                    g && this.skinIndices.push(f[y.a], f[y.b], f[y.c]),
                    v && this.skinWeights.push(m[y.a], m[y.b], m[y.c])
                }
                return this.computeGroups(t),
                this.verticesNeedUpdate = t.verticesNeedUpdate,
                this.normalsNeedUpdate = t.normalsNeedUpdate,
                this.colorsNeedUpdate = t.colorsNeedUpdate,
                this.uvsNeedUpdate = t.uvsNeedUpdate,
                this.groupsNeedUpdate = t.groupsNeedUpdate,
                this
            }
        });
        var Gh = 0;
        Object.assign(At.prototype, e.prototype, {
            isGeometry: !0,
            applyMatrix: function(t) {
                for (var e = (new it).getNormalMatrix(t), i = 0, n = this.vertices.length; i < n; i++) {
                    var r = this.vertices[i];
                    r.applyMatrix4(t)
                }
                for (var i = 0, n = this.faces.length; i < n; i++) {
                    var a = this.faces[i];
                    a.normal.applyMatrix3(e).normalize();
                    for (var o = 0, s = a.vertexNormals.length; o < s; o++)
                        a.vertexNormals[o].applyMatrix3(e).normalize()
                }
                return null !== this.boundingBox && this.computeBoundingBox(),
                null !== this.boundingSphere && this.computeBoundingSphere(),
                this.verticesNeedUpdate = !0,
                this.normalsNeedUpdate = !0,
                this
            },
            rotateX: function() {
                var t = new l;
                return function(e) {
                    return t.makeRotationX(e),
                    this.applyMatrix(t),
                    this
                }
            }(),
            rotateY: function() {
                var t = new l;
                return function(e) {
                    return t.makeRotationY(e),
                    this.applyMatrix(t),
                    this
                }
            }(),
            rotateZ: function() {
                var t = new l;
                return function(e) {
                    return t.makeRotationZ(e),
                    this.applyMatrix(t),
                    this
                }
            }(),
            translate: function() {
                var t = new l;
                return function(e, i, n) {
                    return t.makeTranslation(e, i, n),
                    this.applyMatrix(t),
                    this
                }
            }(),
            scale: function() {
                var t = new l;
                return function(e, i, n) {
                    return t.makeScale(e, i, n),
                    this.applyMatrix(t),
                    this
                }
            }(),
            lookAt: function() {
                var t = new ht;
                return function(e) {
                    t.lookAt(e),
                    t.updateMatrix(),
                    this.applyMatrix(t.matrix)
                }
            }(),
            fromBufferGeometry: function(t) {
                function e(t, e, i, r) {
                    var a = void 0 !== s ? [d[t].clone(), d[e].clone(), d[i].clone()] : []
                      , o = void 0 !== c ? [n.colors[t].clone(), n.colors[e].clone(), n.colors[i].clone()] : []
                      , h = new dt(t,e,i,a,o,r);
                    n.faces.push(h),
                    void 0 !== l && n.faceVertexUvs[0].push([p[t].clone(), p[e].clone(), p[i].clone()]),
                    void 0 !== u && n.faceVertexUvs[1].push([f[t].clone(), f[e].clone(), f[i].clone()])
                }
                var n = this
                  , r = null !== t.index ? t.index.array : void 0
                  , a = t.attributes
                  , o = a.position.array
                  , s = void 0 !== a.normal ? a.normal.array : void 0
                  , c = void 0 !== a.color ? a.color.array : void 0
                  , l = void 0 !== a.uv ? a.uv.array : void 0
                  , u = void 0 !== a.uv2 ? a.uv2.array : void 0;
                void 0 !== u && (this.faceVertexUvs[1] = []);
                for (var d = [], p = [], f = [], m = 0, g = 0; m < o.length; m += 3,
                g += 2)
                    n.vertices.push(new h(o[m],o[m + 1],o[m + 2])),
                    void 0 !== s && d.push(new h(s[m],s[m + 1],s[m + 2])),
                    void 0 !== c && n.colors.push(new q(c[m],c[m + 1],c[m + 2])),
                    void 0 !== l && p.push(new i(l[g],l[g + 1])),
                    void 0 !== u && f.push(new i(u[g],u[g + 1]));
                var v = t.groups;
                if (v.length > 0)
                    for (var m = 0; m < v.length; m++)
                        for (var y = v[m], x = y.start, _ = y.count, g = x, b = x + _; g < b; g += 3)
                            void 0 !== r ? e(r[g], r[g + 1], r[g + 2], y.materialIndex) : e(g, g + 1, g + 2, y.materialIndex);
                else if (void 0 !== r)
                    for (var m = 0; m < r.length; m += 3)
                        e(r[m], r[m + 1], r[m + 2]);
                else
                    for (var m = 0; m < o.length / 3; m += 3)
                        e(m, m + 1, m + 2);
                return this.computeFaceNormals(),
                null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()),
                null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()),
                this
            },
            center: function() {
                this.computeBoundingBox();
                var t = this.boundingBox.getCenter().negate();
                return this.translate(t.x, t.y, t.z),
                t
            },
            normalize: function() {
                this.computeBoundingSphere();
                var t = this.boundingSphere.center
                  , e = this.boundingSphere.radius
                  , i = 0 === e ? 1 : 1 / e
                  , n = new l;
                return n.set(i, 0, 0, -i * t.x, 0, i, 0, -i * t.y, 0, 0, i, -i * t.z, 0, 0, 0, 1),
                this.applyMatrix(n),
                this
            },
            computeFaceNormals: function() {
                for (var t = new h, e = new h, i = 0, n = this.faces.length; i < n; i++) {
                    var r = this.faces[i]
                      , a = this.vertices[r.a]
                      , o = this.vertices[r.b]
                      , s = this.vertices[r.c];
                    t.subVectors(s, o),
                    e.subVectors(a, o),
                    t.cross(e),
                    t.normalize(),
                    r.normal.copy(t)
                }
            },
            computeVertexNormals: function(t) {
                void 0 === t && (t = !0);
                var e, i, n, r, a, o;
                for (o = new Array(this.vertices.length),
                e = 0,
                i = this.vertices.length; e < i; e++)
                    o[e] = new h;
                if (t) {
                    var s, c, l, u = new h, d = new h;
                    for (n = 0,
                    r = this.faces.length; n < r; n++)
                        a = this.faces[n],
                        s = this.vertices[a.a],
                        c = this.vertices[a.b],
                        l = this.vertices[a.c],
                        u.subVectors(l, c),
                        d.subVectors(s, c),
                        u.cross(d),
                        o[a.a].add(u),
                        o[a.b].add(u),
                        o[a.c].add(u)
                } else
                    for (this.computeFaceNormals(),
                    n = 0,
                    r = this.faces.length; n < r; n++)
                        a = this.faces[n],
                        o[a.a].add(a.normal),
                        o[a.b].add(a.normal),
                        o[a.c].add(a.normal);
                for (e = 0,
                i = this.vertices.length; e < i; e++)
                    o[e].normalize();
                for (n = 0,
                r = this.faces.length; n < r; n++) {
                    a = this.faces[n];
                    var p = a.vertexNormals;
                    3 === p.length ? (p[0].copy(o[a.a]),
                    p[1].copy(o[a.b]),
                    p[2].copy(o[a.c])) : (p[0] = o[a.a].clone(),
                    p[1] = o[a.b].clone(),
                    p[2] = o[a.c].clone())
                }
                this.faces.length > 0 && (this.normalsNeedUpdate = !0)
            },
            computeFlatVertexNormals: function() {
                var t, e, i;
                for (this.computeFaceNormals(),
                t = 0,
                e = this.faces.length; t < e; t++) {
                    i = this.faces[t];
                    var n = i.vertexNormals;
                    3 === n.length ? (n[0].copy(i.normal),
                    n[1].copy(i.normal),
                    n[2].copy(i.normal)) : (n[0] = i.normal.clone(),
                    n[1] = i.normal.clone(),
                    n[2] = i.normal.clone())
                }
                this.faces.length > 0 && (this.normalsNeedUpdate = !0)
            },
            computeMorphNormals: function() {
                var t, e, i, n, r;
                for (i = 0,
                n = this.faces.length; i < n; i++)
                    for (r = this.faces[i],
                    r.__originalFaceNormal ? r.__originalFaceNormal.copy(r.normal) : r.__originalFaceNormal = r.normal.clone(),
                    r.__originalVertexNormals || (r.__originalVertexNormals = []),
                    t = 0,
                    e = r.vertexNormals.length; t < e; t++)
                        r.__originalVertexNormals[t] ? r.__originalVertexNormals[t].copy(r.vertexNormals[t]) : r.__originalVertexNormals[t] = r.vertexNormals[t].clone();
                var a = new At;
                for (a.faces = this.faces,
                t = 0,
                e = this.morphTargets.length; t < e; t++) {
                    if (!this.morphNormals[t]) {
                        this.morphNormals[t] = {},
                        this.morphNormals[t].faceNormals = [],
                        this.morphNormals[t].vertexNormals = [];
                        var o, s, c = this.morphNormals[t].faceNormals, l = this.morphNormals[t].vertexNormals;
                        for (i = 0,
                        n = this.faces.length; i < n; i++)
                            o = new h,
                            s = {
                                a: new h,
                                b: new h,
                                c: new h
                            },
                            c.push(o),
                            l.push(s)
                    }
                    var u = this.morphNormals[t];
                    a.vertices = this.morphTargets[t].vertices,
                    a.computeFaceNormals(),
                    a.computeVertexNormals();
                    var o, s;
                    for (i = 0,
                    n = this.faces.length; i < n; i++)
                        r = this.faces[i],
                        o = u.faceNormals[i],
                        s = u.vertexNormals[i],
                        o.copy(r.normal),
                        s.a.copy(r.vertexNormals[0]),
                        s.b.copy(r.vertexNormals[1]),
                        s.c.copy(r.vertexNormals[2])
                }
                for (i = 0,
                n = this.faces.length; i < n; i++)
                    r = this.faces[i],
                    r.normal = r.__originalFaceNormal,
                    r.vertexNormals = r.__originalVertexNormals
            },
            computeLineDistances: function() {
                for (var t = 0, e = this.vertices, i = 0, n = e.length; i < n; i++)
                    i > 0 && (t += e[i].distanceTo(e[i - 1])),
                    this.lineDistances[i] = t
            },
            computeBoundingBox: function() {
                null === this.boundingBox && (this.boundingBox = new tt),
                this.boundingBox.setFromPoints(this.vertices)
            },
            computeBoundingSphere: function() {
                null === this.boundingSphere && (this.boundingSphere = new et),
                this.boundingSphere.setFromPoints(this.vertices)
            },
            merge: function(t, e, i) {
                if ((t && t.isGeometry) === !1)
                    return void console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", t);
                var n, r = this.vertices.length, a = this.vertices, o = t.vertices, s = this.faces, c = t.faces, h = this.faceVertexUvs[0], l = t.faceVertexUvs[0], u = this.colors, d = t.colors;
                void 0 === i && (i = 0),
                void 0 !== e && (n = (new it).getNormalMatrix(e));
                for (var p = 0, f = o.length; p < f; p++) {
                    var m = o[p]
                      , g = m.clone();
                    void 0 !== e && g.applyMatrix4(e),
                    a.push(g)
                }
                for (var p = 0, f = d.length; p < f; p++)
                    u.push(d[p].clone());
                for (p = 0,
                f = c.length; p < f; p++) {
                    var v, y, x, _ = c[p], b = _.vertexNormals, w = _.vertexColors;
                    v = new dt(_.a + r,_.b + r,_.c + r),
                    v.normal.copy(_.normal),
                    void 0 !== n && v.normal.applyMatrix3(n).normalize();
                    for (var M = 0, E = b.length; M < E; M++)
                        y = b[M].clone(),
                        void 0 !== n && y.applyMatrix3(n).normalize(),
                        v.vertexNormals.push(y);
                    v.color.copy(_.color);
                    for (var M = 0, E = w.length; M < E; M++)
                        x = w[M],
                        v.vertexColors.push(x.clone());
                    v.materialIndex = _.materialIndex + i,
                    s.push(v)
                }
                for (p = 0,
                f = l.length; p < f; p++) {
                    var T = l[p]
                      , S = [];
                    if (void 0 !== T) {
                        for (var M = 0, E = T.length; M < E; M++)
                            S.push(T[M].clone());
                        h.push(S)
                    }
                }
            },
            mergeMesh: function(t) {
                return (t && t.isMesh) === !1 ? void console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", t) : (t.matrixAutoUpdate && t.updateMatrix(),
                void this.merge(t.geometry, t.matrix))
            },
            mergeVertices: function() {
                var t, e, i, n, r, a, o, s, c = {}, h = [], l = [], u = 4, d = Math.pow(10, u);
                for (i = 0,
                n = this.vertices.length; i < n; i++)
                    t = this.vertices[i],
                    e = Math.round(t.x * d) + "_" + Math.round(t.y * d) + "_" + Math.round(t.z * d),
                    void 0 === c[e] ? (c[e] = i,
                    h.push(this.vertices[i]),
                    l[i] = h.length - 1) : l[i] = l[c[e]];
                var p = [];
                for (i = 0,
                n = this.faces.length; i < n; i++) {
                    r = this.faces[i],
                    r.a = l[r.a],
                    r.b = l[r.b],
                    r.c = l[r.c],
                    a = [r.a, r.b, r.c];
                    for (var f = 0; f < 3; f++)
                        if (a[f] === a[(f + 1) % 3]) {
                            p.push(i);
                            break
                        }
                }
                for (i = p.length - 1; i >= 0; i--) {
                    var m = p[i];
                    for (this.faces.splice(m, 1),
                    o = 0,
                    s = this.faceVertexUvs.length; o < s; o++)
                        this.faceVertexUvs[o].splice(m, 1)
                }
                var g = this.vertices.length - h.length;
                return this.vertices = h,
                g
            },
            sortFacesByMaterialIndex: function() {
                function t(t, e) {
                    return t.materialIndex - e.materialIndex
                }
                for (var e = this.faces, i = e.length, n = 0; n < i; n++)
                    e[n]._id = n;
                e.sort(t);
                var r, a, o = this.faceVertexUvs[0], s = this.faceVertexUvs[1];
                o && o.length === i && (r = []),
                s && s.length === i && (a = []);
                for (var n = 0; n < i; n++) {
                    var c = e[n]._id;
                    r && r.push(o[c]),
                    a && a.push(s[c])
                }
                r && (this.faceVertexUvs[0] = r),
                a && (this.faceVertexUvs[1] = a)
            },
            toJSON: function() {
                function t(t, e, i) {
                    return i ? t | 1 << e : t & ~(1 << e)
                }
                function e(t) {
                    var e = t.x.toString() + t.y.toString() + t.z.toString();
                    return void 0 !== d[e] ? d[e] : (d[e] = u.length / 3,
                    u.push(t.x, t.y, t.z),
                    d[e])
                }
                function i(t) {
                    var e = t.r.toString() + t.g.toString() + t.b.toString();
                    return void 0 !== f[e] ? f[e] : (f[e] = p.length,
                    p.push(t.getHex()),
                    f[e])
                }
                function n(t) {
                    var e = t.x.toString() + t.y.toString();
                    return void 0 !== g[e] ? g[e] : (g[e] = m.length / 2,
                    m.push(t.x, t.y),
                    g[e])
                }
                var r = {
                    metadata: {
                        version: 4.5,
                        type: "Geometry",
                        generator: "Geometry.toJSON"
                    }
                };
                if (r.uuid = this.uuid,
                r.type = this.type,
                "" !== this.name && (r.name = this.name),
                void 0 !== this.parameters) {
                    var a = this.parameters;
                    for (var o in a)
                        void 0 !== a[o] && (r[o] = a[o]);
                    return r
                }
                for (var s = [], c = 0; c < this.vertices.length; c++) {
                    var h = this.vertices[c];
                    s.push(h.x, h.y, h.z)
                }
                for (var l = [], u = [], d = {}, p = [], f = {}, m = [], g = {}, c = 0; c < this.faces.length; c++) {
                    var v = this.faces[c]
                      , y = !0
                      , x = !1
                      , _ = void 0 !== this.faceVertexUvs[0][c]
                      , b = v.normal.length() > 0
                      , w = v.vertexNormals.length > 0
                      , M = 1 !== v.color.r || 1 !== v.color.g || 1 !== v.color.b
                      , E = v.vertexColors.length > 0
                      , T = 0;
                    if (T = t(T, 0, 0),
                    T = t(T, 1, y),
                    T = t(T, 2, x),
                    T = t(T, 3, _),
                    T = t(T, 4, b),
                    T = t(T, 5, w),
                    T = t(T, 6, M),
                    T = t(T, 7, E),
                    l.push(T),
                    l.push(v.a, v.b, v.c),
                    l.push(v.materialIndex),
                    _) {
                        var S = this.faceVertexUvs[0][c];
                        l.push(n(S[0]), n(S[1]), n(S[2]))
                    }
                    if (b && l.push(e(v.normal)),
                    w) {
                        var A = v.vertexNormals;
                        l.push(e(A[0]), e(A[1]), e(A[2]))
                    }
                    if (M && l.push(i(v.color)),
                    E) {
                        var L = v.vertexColors;
                        l.push(i(L[0]), i(L[1]), i(L[2]))
                    }
                }
                return r.data = {},
                r.data.vertices = s,
                r.data.normals = u,
                p.length > 0 && (r.data.colors = p),
                m.length > 0 && (r.data.uvs = [m]),
                r.data.faces = l,
                r
            },
            clone: function() {
                return (new At).copy(this)
            },
            copy: function(t) {
                var e, i, n, r, a, o;
                this.vertices = [],
                this.colors = [],
                this.faces = [],
                this.faceVertexUvs = [[]],
                this.morphTargets = [],
                this.morphNormals = [],
                this.skinWeights = [],
                this.skinIndices = [],
                this.lineDistances = [],
                this.boundingBox = null ,
                this.boundingSphere = null ,
                this.name = t.name;
                var s = t.vertices;
                for (e = 0,
                i = s.length; e < i; e++)
                    this.vertices.push(s[e].clone());
                var c = t.colors;
                for (e = 0,
                i = c.length; e < i; e++)
                    this.colors.push(c[e].clone());
                var h = t.faces;
                for (e = 0,
                i = h.length; e < i; e++)
                    this.faces.push(h[e].clone());
                for (e = 0,
                i = t.faceVertexUvs.length; e < i; e++) {
                    var l = t.faceVertexUvs[e];
                    for (void 0 === this.faceVertexUvs[e] && (this.faceVertexUvs[e] = []),
                    n = 0,
                    r = l.length; n < r; n++) {
                        var u = l[n]
                          , d = [];
                        for (a = 0,
                        o = u.length; a < o; a++) {
                            var p = u[a];
                            d.push(p.clone())
                        }
                        this.faceVertexUvs[e].push(d)
                    }
                }
                var f = t.morphTargets;
                for (e = 0,
                i = f.length; e < i; e++) {
                    var m = {};
                    if (m.name = f[e].name,
                    void 0 !== f[e].vertices)
                        for (m.vertices = [],
                        n = 0,
                        r = f[e].vertices.length; n < r; n++)
                            m.vertices.push(f[e].vertices[n].clone());
                    if (void 0 !== f[e].normals)
                        for (m.normals = [],
                        n = 0,
                        r = f[e].normals.length; n < r; n++)
                            m.normals.push(f[e].normals[n].clone());
                    this.morphTargets.push(m)
                }
                var g = t.morphNormals;
                for (e = 0,
                i = g.length; e < i; e++) {
                    var v = {};
                    if (void 0 !== g[e].vertexNormals)
                        for (v.vertexNormals = [],
                        n = 0,
                        r = g[e].vertexNormals.length; n < r; n++) {
                            var y = g[e].vertexNormals[n]
                              , x = {};
                            x.a = y.a.clone(),
                            x.b = y.b.clone(),
                            x.c = y.c.clone(),
                            v.vertexNormals.push(x)
                        }
                    if (void 0 !== g[e].faceNormals)
                        for (v.faceNormals = [],
                        n = 0,
                        r = g[e].faceNormals.length; n < r; n++)
                            v.faceNormals.push(g[e].faceNormals[n].clone());
                    this.morphNormals.push(v)
                }
                var _ = t.skinWeights;
                for (e = 0,
                i = _.length; e < i; e++)
                    this.skinWeights.push(_[e].clone());
                var b = t.skinIndices;
                for (e = 0,
                i = b.length; e < i; e++)
                    this.skinIndices.push(b[e].clone());
                var w = t.lineDistances;
                for (e = 0,
                i = w.length; e < i; e++)
                    this.lineDistances.push(w[e]);
                var M = t.boundingBox;
                null !== M && (this.boundingBox = M.clone());
                var E = t.boundingSphere;
                return null !== E && (this.boundingSphere = E.clone()),
                this.elementsNeedUpdate = t.elementsNeedUpdate,
                this.verticesNeedUpdate = t.verticesNeedUpdate,
                this.uvsNeedUpdate = t.uvsNeedUpdate,
                this.normalsNeedUpdate = t.normalsNeedUpdate,
                this.colorsNeedUpdate = t.colorsNeedUpdate,
                this.lineDistancesNeedUpdate = t.lineDistancesNeedUpdate,
                this.groupsNeedUpdate = t.groupsNeedUpdate,
                this
            },
            dispose: function() {
                this.dispatchEvent({
                    type: "dispose"
                })
            }
        }),
        Lt.MaxIndex = 65535,
        Object.assign(Lt.prototype, e.prototype, {
            isBufferGeometry: !0,
            getIndex: function() {
                return this.index
            },
            setIndex: function(t) {
                Array.isArray(t) ? this.index = new (Tt(t) > 65535 ? bt : xt)(t,1) : this.index = t
            },
            addAttribute: function(t, e) {
                return (e && e.isBufferAttribute) === !1 && (e && e.isInterleavedBufferAttribute) === !1 ? (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),
                void this.addAttribute(t, new ft(arguments[1],arguments[2]))) : "index" === t ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),
                void this.setIndex(e)) : (this.attributes[t] = e,
                this)
            },
            getAttribute: function(t) {
                return this.attributes[t]
            },
            removeAttribute: function(t) {
                return delete this.attributes[t],
                this
            },
            addGroup: function(t, e, i) {
                this.groups.push({
                    start: t,
                    count: e,
                    materialIndex: void 0 !== i ? i : 0
                })
            },
            clearGroups: function() {
                this.groups = []
            },
            setDrawRange: function(t, e) {
                this.drawRange.start = t,
                this.drawRange.count = e
            },
            applyMatrix: function(t) {
                var e = this.attributes.position;
                void 0 !== e && (t.applyToBufferAttribute(e),
                e.needsUpdate = !0);
                var i = this.attributes.normal;
                if (void 0 !== i) {
                    var n = (new it).getNormalMatrix(t);
                    n.applyToBufferAttribute(i),
                    i.needsUpdate = !0
                }
                return null !== this.boundingBox && this.computeBoundingBox(),
                null !== this.boundingSphere && this.computeBoundingSphere(),
                this
            },
            rotateX: function() {
                var t = new l;
                return function(e) {
                    return t.makeRotationX(e),
                    this.applyMatrix(t),
                    this
                }
            }(),
            rotateY: function() {
                var t = new l;
                return function(e) {
                    return t.makeRotationY(e),
                    this.applyMatrix(t),
                    this
                }
            }(),
            rotateZ: function() {
                var t = new l;
                return function(e) {
                    return t.makeRotationZ(e),
                    this.applyMatrix(t),
                    this
                }
            }(),
            translate: function() {
                var t = new l;
                return function(e, i, n) {
                    return t.makeTranslation(e, i, n),
                    this.applyMatrix(t),
                    this
                }
            }(),
            scale: function() {
                var t = new l;
                return function(e, i, n) {
                    return t.makeScale(e, i, n),
                    this.applyMatrix(t),
                    this
                }
            }(),
            lookAt: function() {
                var t = new ht;
                return function(e) {
                    t.lookAt(e),
                    t.updateMatrix(),
                    this.applyMatrix(t.matrix)
                }
            }(),
            center: function() {
                this.computeBoundingBox();
                var t = this.boundingBox.getCenter().negate();
                return this.translate(t.x, t.y, t.z),
                t
            },
            setFromObject: function(t) {
                var e = t.geometry;
                if (t.isPoints || t.isLine) {
                    var i = new wt(3 * e.vertices.length,3)
                      , n = new wt(3 * e.colors.length,3);
                    if (this.addAttribute("position", i.copyVector3sArray(e.vertices)),
                    this.addAttribute("color", n.copyColorsArray(e.colors)),
                    e.lineDistances && e.lineDistances.length === e.vertices.length) {
                        var r = new wt(e.lineDistances.length,1);
                        this.addAttribute("lineDistance", r.copyArray(e.lineDistances))
                    }
                    null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()),
                    null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone())
                } else
                    t.isMesh && e && e.isGeometry && this.fromGeometry(e);
                return this
            },
            updateFromObject: function(t) {
                var e = t.geometry;
                if (t.isMesh) {
                    var i = e.__directGeometry;
                    if (e.elementsNeedUpdate === !0 && (i = void 0,
                    e.elementsNeedUpdate = !1),
                    void 0 === i)
                        return this.fromGeometry(e);
                    i.verticesNeedUpdate = e.verticesNeedUpdate,
                    i.normalsNeedUpdate = e.normalsNeedUpdate,
                    i.colorsNeedUpdate = e.colorsNeedUpdate,
                    i.uvsNeedUpdate = e.uvsNeedUpdate,
                    i.groupsNeedUpdate = e.groupsNeedUpdate,
                    e.verticesNeedUpdate = !1,
                    e.normalsNeedUpdate = !1,
                    e.colorsNeedUpdate = !1,
                    e.uvsNeedUpdate = !1,
                    e.groupsNeedUpdate = !1,
                    e = i
                }
                var n;
                return e.verticesNeedUpdate === !0 && (n = this.attributes.position,
                void 0 !== n && (n.copyVector3sArray(e.vertices),
                n.needsUpdate = !0),
                e.verticesNeedUpdate = !1),
                e.normalsNeedUpdate === !0 && (n = this.attributes.normal,
                void 0 !== n && (n.copyVector3sArray(e.normals),
                n.needsUpdate = !0),
                e.normalsNeedUpdate = !1),
                e.colorsNeedUpdate === !0 && (n = this.attributes.color,
                void 0 !== n && (n.copyColorsArray(e.colors),
                n.needsUpdate = !0),
                e.colorsNeedUpdate = !1),
                e.uvsNeedUpdate && (n = this.attributes.uv,
                void 0 !== n && (n.copyVector2sArray(e.uvs),
                n.needsUpdate = !0),
                e.uvsNeedUpdate = !1),
                e.lineDistancesNeedUpdate && (n = this.attributes.lineDistance,
                void 0 !== n && (n.copyArray(e.lineDistances),
                n.needsUpdate = !0),
                e.lineDistancesNeedUpdate = !1),
                e.groupsNeedUpdate && (e.computeGroups(t.geometry),
                this.groups = e.groups,
                e.groupsNeedUpdate = !1),
                this
            },
            fromGeometry: function(t) {
                return t.__directGeometry = (new Et).fromGeometry(t),
                this.fromDirectGeometry(t.__directGeometry)
            },
            fromDirectGeometry: function(t) {
                var e = new Float32Array(3 * t.vertices.length);
                if (this.addAttribute("position", new ft(e,3).copyVector3sArray(t.vertices)),
                t.normals.length > 0) {
                    var i = new Float32Array(3 * t.normals.length);
                    this.addAttribute("normal", new ft(i,3).copyVector3sArray(t.normals))
                }
                if (t.colors.length > 0) {
                    var n = new Float32Array(3 * t.colors.length);
                    this.addAttribute("color", new ft(n,3).copyColorsArray(t.colors))
                }
                if (t.uvs.length > 0) {
                    var r = new Float32Array(2 * t.uvs.length);
                    this.addAttribute("uv", new ft(r,2).copyVector2sArray(t.uvs))
                }
                if (t.uvs2.length > 0) {
                    var a = new Float32Array(2 * t.uvs2.length);
                    this.addAttribute("uv2", new ft(a,2).copyVector2sArray(t.uvs2))
                }
                if (t.indices.length > 0) {
                    var o = Tt(t.indices) > 65535 ? Uint32Array : Uint16Array
                      , s = new o(3 * t.indices.length);
                    this.setIndex(new ft(s,1).copyIndicesArray(t.indices))
                }
                this.groups = t.groups;
                for (var c in t.morphTargets) {
                    for (var h = [], l = t.morphTargets[c], u = 0, d = l.length; u < d; u++) {
                        var p = l[u]
                          , f = new wt(3 * p.length,3);
                        h.push(f.copyVector3sArray(p))
                    }
                    this.morphAttributes[c] = h
                }
                if (t.skinIndices.length > 0) {
                    var m = new wt(4 * t.skinIndices.length,4);
                    this.addAttribute("skinIndex", m.copyVector4sArray(t.skinIndices))
                }
                if (t.skinWeights.length > 0) {
                    var g = new wt(4 * t.skinWeights.length,4);
                    this.addAttribute("skinWeight", g.copyVector4sArray(t.skinWeights))
                }
                return null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()),
                null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()),
                this
            },
            computeBoundingBox: function() {
                null === this.boundingBox && (this.boundingBox = new tt);
                var t = this.attributes.position;
                void 0 !== t ? this.boundingBox.setFromBufferAttribute(t) : this.boundingBox.makeEmpty(),
                (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
            },
            computeBoundingSphere: function() {
                var t = new tt
                  , e = new h;
                return function() {
                    null === this.boundingSphere && (this.boundingSphere = new et);
                    var i = this.attributes.position;
                    if (i) {
                        var n = this.boundingSphere.center;
                        t.setFromBufferAttribute(i),
                        t.getCenter(n);
                        for (var r = 0, a = 0, o = i.count; a < o; a++)
                            e.x = i.getX(a),
                            e.y = i.getY(a),
                            e.z = i.getZ(a),
                            r = Math.max(r, n.distanceToSquared(e));
                        this.boundingSphere.radius = Math.sqrt(r),
                        isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
                    }
                }
            }(),
            computeFaceNormals: function() {},
            computeVertexNormals: function() {
                var t = this.index
                  , e = this.attributes
                  , i = this.groups;
                if (e.position) {
                    var n = e.position.array;
                    if (void 0 === e.normal)
                        this.addAttribute("normal", new ft(new Float32Array(n.length),3));
                    else
                        for (var r = e.normal.array, a = 0, o = r.length; a < o; a++)
                            r[a] = 0;
                    var s, c, l, u = e.normal.array, d = new h, p = new h, f = new h, m = new h, g = new h;
                    if (t) {
                        var v = t.array;
                        0 === i.length && this.addGroup(0, v.length);
                        for (var y = 0, x = i.length; y < x; ++y)
                            for (var _ = i[y], b = _.start, w = _.count, a = b, o = b + w; a < o; a += 3)
                                s = 3 * v[a + 0],
                                c = 3 * v[a + 1],
                                l = 3 * v[a + 2],
                                d.fromArray(n, s),
                                p.fromArray(n, c),
                                f.fromArray(n, l),
                                m.subVectors(f, p),
                                g.subVectors(d, p),
                                m.cross(g),
                                u[s] += m.x,
                                u[s + 1] += m.y,
                                u[s + 2] += m.z,
                                u[c] += m.x,
                                u[c + 1] += m.y,
                                u[c + 2] += m.z,
                                u[l] += m.x,
                                u[l + 1] += m.y,
                                u[l + 2] += m.z
                    } else
                        for (var a = 0, o = n.length; a < o; a += 9)
                            d.fromArray(n, a),
                            p.fromArray(n, a + 3),
                            f.fromArray(n, a + 6),
                            m.subVectors(f, p),
                            g.subVectors(d, p),
                            m.cross(g),
                            u[a] = m.x,
                            u[a + 1] = m.y,
                            u[a + 2] = m.z,
                            u[a + 3] = m.x,
                            u[a + 4] = m.y,
                            u[a + 5] = m.z,
                            u[a + 6] = m.x,
                            u[a + 7] = m.y,
                            u[a + 8] = m.z;
                    this.normalizeNormals(),
                    e.normal.needsUpdate = !0
                }
            },
            merge: function(t, e) {
                if ((t && t.isBufferGeometry) === !1)
                    return void console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", t);
                void 0 === e && (e = 0);
                var i = this.attributes;
                for (var n in i)
                    if (void 0 !== t.attributes[n])
                        for (var r = i[n], a = r.array, o = t.attributes[n], s = o.array, c = o.itemSize, h = 0, l = c * e; h < s.length; h++,
                        l++)
                            a[l] = s[h];
                return this
            },
            normalizeNormals: function() {
                for (var t, e, i, n, r = this.attributes.normal, a = 0, o = r.count; a < o; a++)
                    t = r.getX(a),
                    e = r.getY(a),
                    i = r.getZ(a),
                    n = 1 / Math.sqrt(t * t + e * e + i * i),
                    r.setXYZ(a, t * n, e * n, i * n)
            },
            toNonIndexed: function() {
                if (null === this.index)
                    return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."),
                    this;
                var t = new Lt
                  , e = this.index.array
                  , i = this.attributes;
                for (var n in i) {
                    for (var r = i[n], a = r.array, o = r.itemSize, s = new a.constructor(e.length * o), c = 0, h = 0, l = 0, u = e.length; l < u; l++) {
                        c = e[l] * o;
                        for (var d = 0; d < o; d++)
                            s[h++] = a[c++]
                    }
                    t.addAttribute(n, new ft(s,o))
                }
                return t
            },
            toJSON: function() {
                var t = {
                    metadata: {
                        version: 4.5,
                        type: "BufferGeometry",
                        generator: "BufferGeometry.toJSON"
                    }
                };
                if (t.uuid = this.uuid,
                t.type = this.type,
                "" !== this.name && (t.name = this.name),
                void 0 !== this.parameters) {
                    var e = this.parameters;
                    for (var i in e)
                        void 0 !== e[i] && (t[i] = e[i]);
                    return t
                }
                t.data = {
                    attributes: {}
                };
                var n = this.index;
                if (null !== n) {
                    var r = Array.prototype.slice.call(n.array);
                    t.data.index = {
                        type: n.array.constructor.name,
                        array: r
                    }
                }
                var a = this.attributes;
                for (var i in a) {
                    var o = a[i]
                      , r = Array.prototype.slice.call(o.array);
                    t.data.attributes[i] = {
                        itemSize: o.itemSize,
                        type: o.array.constructor.name,
                        array: r,
                        normalized: o.normalized
                    }
                }
                var s = this.groups;
                s.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(s)));
                var c = this.boundingSphere;
                return null !== c && (t.data.boundingSphere = {
                    center: c.center.toArray(),
                    radius: c.radius
                }),
                t
            },
            clone: function() {
                return (new Lt).copy(this)
            },
            copy: function(t) {
                var e, i, n;
                this.index = null ,
                this.attributes = {},
                this.morphAttributes = {},
                this.groups = [],
                this.boundingBox = null ,
                this.boundingSphere = null ,
                this.name = t.name;
                var r = t.index;
                null !== r && this.setIndex(r.clone());
                var a = t.attributes;
                for (e in a) {
                    var o = a[e];
                    this.addAttribute(e, o.clone())
                }
                var s = t.morphAttributes;
                for (e in s) {
                    var c = []
                      , h = s[e];
                    for (i = 0,
                    n = h.length; i < n; i++)
                        c.push(h[i].clone());
                    this.morphAttributes[e] = c
                }
                var l = t.groups;
                for (i = 0,
                n = l.length; i < n; i++) {
                    var u = l[i];
                    this.addGroup(u.start, u.count, u.materialIndex)
                }
                var d = t.boundingBox;
                null !== d && (this.boundingBox = d.clone());
                var p = t.boundingSphere;
                return null !== p && (this.boundingSphere = p.clone()),
                this.drawRange.start = t.drawRange.start,
                this.drawRange.count = t.drawRange.count,
                this
            },
            dispose: function() {
                this.dispatchEvent({
                    type: "dispose"
                })
            }
        }),
        Rt.prototype = Object.assign(Object.create(ht.prototype), {
            constructor: Rt,
            isMesh: !0,
            setDrawMode: function(t) {
                this.drawMode = t
            },
            copy: function(t) {
                return ht.prototype.copy.call(this, t),
                this.drawMode = t.drawMode,
                this
            },
            updateMorphTargets: function() {
                var t = this.geometry.morphTargets;
                if (void 0 !== t && t.length > 0) {
                    this.morphTargetInfluences = [],
                    this.morphTargetDictionary = {};
                    for (var e = 0, i = t.length; e < i; e++)
                        this.morphTargetInfluences.push(0),
                        this.morphTargetDictionary[t[e].name] = e
                }
            },
            raycast: function() {
                function t(t, e, i, n, r, a, o) {
                    return ut.barycoordFromPoint(t, e, i, n, y),
                    r.multiplyScalar(y.x),
                    a.multiplyScalar(y.y),
                    o.multiplyScalar(y.z),
                    r.add(a).add(o),
                    r.clone()
                }
                function e(t, e, i, n, r, a, o) {
                    var s, c = t.material;
                    if (s = c.side === ga ? i.intersectTriangle(a, r, n, !0, o) : i.intersectTriangle(n, r, a, c.side !== va, o),
                    null === s)
                        return null ;
                    _.copy(o),
                    _.applyMatrix4(t.matrixWorld);
                    var h = e.ray.origin.distanceTo(_);
                    return h < e.near || h > e.far ? null : {
                        distance: h,
                        point: _.clone(),
                        object: t
                    }
                }
                function n(i, n, r, a, o, h, l, d) {
                    s.fromBufferAttribute(a, h),
                    c.fromBufferAttribute(a, l),
                    u.fromBufferAttribute(a, d);
                    var p = e(i, n, r, s, c, u, x);
                    return p && (o && (m.fromBufferAttribute(o, h),
                    g.fromBufferAttribute(o, l),
                    v.fromBufferAttribute(o, d),
                    p.uv = t(x, s, c, u, m, g, v)),
                    p.face = new dt(h,l,d,ut.normal(s, c, u)),
                    p.faceIndex = h),
                    p
                }
                var r = new l
                  , a = new ot
                  , o = new et
                  , s = new h
                  , c = new h
                  , u = new h
                  , d = new h
                  , p = new h
                  , f = new h
                  , m = new i
                  , g = new i
                  , v = new i
                  , y = new h
                  , x = new h
                  , _ = new h;
                return function(i, h) {
                    var l = this.geometry
                      , y = this.material
                      , _ = this.matrixWorld;
                    if (void 0 !== y && (null === l.boundingSphere && l.computeBoundingSphere(),
                    o.copy(l.boundingSphere),
                    o.applyMatrix4(_),
                    i.ray.intersectsSphere(o) !== !1 && (r.getInverse(_),
                    a.copy(i.ray).applyMatrix4(r),
                    null === l.boundingBox || a.intersectsBox(l.boundingBox) !== !1))) {
                        var b;
                        if (l.isBufferGeometry) {
                            var w, M, E, T, S, A = l.index, L = l.attributes.position, R = l.attributes.uv;
                            if (null !== A)
                                for (T = 0,
                                S = A.count; T < S; T += 3)
                                    w = A.getX(T),
                                    M = A.getX(T + 1),
                                    E = A.getX(T + 2),
                                    b = n(this, i, a, L, R, w, M, E),
                                    b && (b.faceIndex = Math.floor(T / 3),
                                    h.push(b));
                            else
                                for (T = 0,
                                S = L.count; T < S; T += 3)
                                    w = T,
                                    M = T + 1,
                                    E = T + 2,
                                    b = n(this, i, a, L, R, w, M, E),
                                    b && (b.index = w,
                                    h.push(b))
                        } else if (l.isGeometry) {
                            var P, C, I, U, N = Array.isArray(y), O = l.vertices, D = l.faces, F = l.faceVertexUvs[0];
                            F.length > 0 && (U = F);
                            for (var B = 0, z = D.length; B < z; B++) {
                                var G = D[B]
                                  , H = N ? y[G.materialIndex] : y;
                                if (void 0 !== H) {
                                    if (P = O[G.a],
                                    C = O[G.b],
                                    I = O[G.c],
                                    H.morphTargets === !0) {
                                        var V = l.morphTargets
                                          , k = this.morphTargetInfluences;
                                        s.set(0, 0, 0),
                                        c.set(0, 0, 0),
                                        u.set(0, 0, 0);
                                        for (var j = 0, W = V.length; j < W; j++) {
                                            var X = k[j];
                                            if (0 !== X) {
                                                var q = V[j].vertices;
                                                s.addScaledVector(d.subVectors(q[G.a], P), X),
                                                c.addScaledVector(p.subVectors(q[G.b], C), X),
                                                u.addScaledVector(f.subVectors(q[G.c], I), X)
                                            }
                                        }
                                        s.add(P),
                                        c.add(C),
                                        u.add(I),
                                        P = s,
                                        C = c,
                                        I = u
                                    }
                                    if (b = e(this, i, a, P, C, I, x)) {
                                        if (U && U[B]) {
                                            var Y = U[B];
                                            m.copy(Y[0]),
                                            g.copy(Y[1]),
                                            v.copy(Y[2]),
                                            b.uv = t(x, P, C, I, m, g, v)
                                        }
                                        b.face = G,
                                        b.faceIndex = B,
                                        h.push(b)
                                    }
                                }
                            }
                        }
                    }
                }
            }(),
            clone: function() {
                return new this.constructor(this.geometry,this.material).copy(this)
            }
        }),
        Pt.prototype = Object.create(At.prototype),
        Pt.prototype.constructor = Pt,
        Ct.prototype = Object.create(Lt.prototype),
        Ct.prototype.constructor = Ct,
        It.prototype = Object.create(At.prototype),
        It.prototype.constructor = It,
        Ut.prototype = Object.create(Lt.prototype),
        Ut.prototype.constructor = Ut,
        Nt.prototype = Object.assign(Object.create(ht.prototype), {
            constructor: Nt,
            isCamera: !0,
            copy: function(t) {
                return ht.prototype.copy.call(this, t),
                this.matrixWorldInverse.copy(t.matrixWorldInverse),
                this.projectionMatrix.copy(t.projectionMatrix),
                this
            },
            getWorldDirection: function() {
                var t = new c;
                return function(e) {
                    var i = e || new h;
                    return this.getWorldQuaternion(t),
                    i.set(0, 0, -1).applyQuaternion(t)
                }
            }(),
            clone: function() {
                return (new this.constructor).copy(this)
            }
        }),
        Ot.prototype = Object.assign(Object.create(Nt.prototype), {
            constructor: Ot,
            isPerspectiveCamera: !0,
            copy: function(t) {
                return Nt.prototype.copy.call(this, t),
                this.fov = t.fov,
                this.zoom = t.zoom,
                this.near = t.near,
                this.far = t.far,
                this.focus = t.focus,
                this.aspect = t.aspect,
                this.view = null === t.view ? null : Object.assign({}, t.view),
                this.filmGauge = t.filmGauge,
                this.filmOffset = t.filmOffset,
                this
            },
            setFocalLength: function(t) {
                var e = .5 * this.getFilmHeight() / t;
                this.fov = 2 * ws.RAD2DEG * Math.atan(e),
                this.updateProjectionMatrix()
            },
            getFocalLength: function() {
                var t = Math.tan(.5 * ws.DEG2RAD * this.fov);
                return .5 * this.getFilmHeight() / t
            },
            getEffectiveFOV: function() {
                return 2 * ws.RAD2DEG * Math.atan(Math.tan(.5 * ws.DEG2RAD * this.fov) / this.zoom)
            },
            getFilmWidth: function() {
                return this.filmGauge * Math.min(this.aspect, 1)
            },
            getFilmHeight: function() {
                return this.filmGauge / Math.max(this.aspect, 1)
            },
            setViewOffset: function(t, e, i, n, r, a) {
                this.aspect = t / e,
                this.view = {
                    fullWidth: t,
                    fullHeight: e,
                    offsetX: i,
                    offsetY: n,
                    width: r,
                    height: a
                },
                this.updateProjectionMatrix()
            },
            clearViewOffset: function() {
                this.view = null ,
                this.updateProjectionMatrix()
            },
            updateProjectionMatrix: function() {
                var t = this.near
                  , e = t * Math.tan(.5 * ws.DEG2RAD * this.fov) / this.zoom
                  , i = 2 * e
                  , n = this.aspect * i
                  , r = -.5 * n
                  , a = this.view;
                if (null !== a) {
                    var o = a.fullWidth
                      , s = a.fullHeight;
                    r += a.offsetX * n / o,
                    e -= a.offsetY * i / s,
                    n *= a.width / o,
                    i *= a.height / s
                }
                var c = this.filmOffset;
                0 !== c && (r += t * c / this.getFilmWidth()),
                this.projectionMatrix.makePerspective(r, r + n, e, e - i, t, this.far)
            },
            toJSON: function(t) {
                var e = ht.prototype.toJSON.call(this, t);
                return e.object.fov = this.fov,
                e.object.zoom = this.zoom,
                e.object.near = this.near,
                e.object.far = this.far,
                e.object.focus = this.focus,
                e.object.aspect = this.aspect,
                null !== this.view && (e.object.view = Object.assign({}, this.view)),
                e.object.filmGauge = this.filmGauge,
                e.object.filmOffset = this.filmOffset,
                e
            }
        }),
        Dt.prototype = Object.assign(Object.create(Nt.prototype), {
            constructor: Dt,
            isOrthographicCamera: !0,
            copy: function(t) {
                return Nt.prototype.copy.call(this, t),
                this.left = t.left,
                this.right = t.right,
                this.top = t.top,
                this.bottom = t.bottom,
                this.near = t.near,
                this.far = t.far,
                this.zoom = t.zoom,
                this.view = null === t.view ? null : Object.assign({}, t.view),
                this
            },
            setViewOffset: function(t, e, i, n, r, a) {
                this.view = {
                    fullWidth: t,
                    fullHeight: e,
                    offsetX: i,
                    offsetY: n,
                    width: r,
                    height: a
                },
                this.updateProjectionMatrix()
            },
            clearViewOffset: function() {
                this.view = null ,
                this.updateProjectionMatrix()
            },
            updateProjectionMatrix: function() {
                var t = (this.right - this.left) / (2 * this.zoom)
                  , e = (this.top - this.bottom) / (2 * this.zoom)
                  , i = (this.right + this.left) / 2
                  , n = (this.top + this.bottom) / 2
                  , r = i - t
                  , a = i + t
                  , o = n + e
                  , s = n - e;
                if (null !== this.view) {
                    var c = this.zoom / (this.view.width / this.view.fullWidth)
                      , h = this.zoom / (this.view.height / this.view.fullHeight)
                      , l = (this.right - this.left) / this.view.width
                      , u = (this.top - this.bottom) / this.view.height;
                    r += l * (this.view.offsetX / c),
                    a = r + l * (this.view.width / c),
                    o -= u * (this.view.offsetY / h),
                    s = o - u * (this.view.height / h)
                }
                this.projectionMatrix.makeOrthographic(r, a, o, s, this.near, this.far)
            },
            toJSON: function(t) {
                var e = ht.prototype.toJSON.call(this, t);
                return e.object.zoom = this.zoom,
                e.object.left = this.left,
                e.object.right = this.right,
                e.object.top = this.top,
                e.object.bottom = this.bottom,
                e.object.near = this.near,
                e.object.far = this.far,
                null !== this.view && (e.object.view = Object.assign({}, this.view)),
                e
            }
        });
        var Hh = 0;
        me.prototype.isFogExp2 = !0,
        me.prototype.clone = function() {
            return new me(this.color.getHex(),this.density)
        }
        ,
        me.prototype.toJSON = function(t) {
            return {
                type: "FogExp2",
                color: this.color.getHex(),
                density: this.density
            }
        }
        ,
        ge.prototype.isFog = !0,
        ge.prototype.clone = function() {
            return new ge(this.color.getHex(),this.near,this.far)
        }
        ,
        ge.prototype.toJSON = function(t) {
            return {
                type: "Fog",
                color: this.color.getHex(),
                near: this.near,
                far: this.far
            }
        }
        ,
        ve.prototype = Object.assign(Object.create(ht.prototype), {
            constructor: ve,
            copy: function(t, e) {
                return ht.prototype.copy.call(this, t, e),
                null !== t.background && (this.background = t.background.clone()),
                null !== t.fog && (this.fog = t.fog.clone()),
                null !== t.overrideMaterial && (this.overrideMaterial = t.overrideMaterial.clone()),
                this.autoUpdate = t.autoUpdate,
                this.matrixAutoUpdate = t.matrixAutoUpdate,
                this
            },
            toJSON: function(t) {
                var e = ht.prototype.toJSON.call(this, t);
                return null !== this.background && (e.object.background = this.background.toJSON(t)),
                null !== this.fog && (e.object.fog = this.fog.toJSON()),
                e
            }
        }),
        ye.prototype = Object.assign(Object.create(ht.prototype), {
            constructor: ye,
            isLensFlare: !0,
            copy: function(t) {
                ht.prototype.copy.call(this, t),
                this.positionScreen.copy(t.positionScreen),
                this.customUpdateCallback = t.customUpdateCallback;
                for (var e = 0, i = t.lensFlares.length; e < i; e++)
                    this.lensFlares.push(t.lensFlares[e]);
                return this
            },
            add: function(t, e, i, n, r, a) {
                void 0 === e && (e = -1),
                void 0 === i && (i = 0),
                void 0 === a && (a = 1),
                void 0 === r && (r = new q(16777215)),
                void 0 === n && (n = Ea),
                i = Math.min(i, Math.max(0, i)),
                this.lensFlares.push({
                    texture: t,
                    size: e,
                    distance: i,
                    x: 0,
                    y: 0,
                    z: 0,
                    scale: 1,
                    rotation: 0,
                    opacity: a,
                    color: r,
                    blending: n
                })
            },
            updateLensFlares: function() {
                var t, e, i = this.lensFlares.length, n = 2 * -this.positionScreen.x, r = 2 * -this.positionScreen.y;
                for (t = 0; t < i; t++)
                    e = this.lensFlares[t],
                    e.x = this.positionScreen.x + n * e.distance,
                    e.y = this.positionScreen.y + r * e.distance,
                    e.wantedRotation = e.x * Math.PI * .25,
                    e.rotation += .25 * (e.wantedRotation - e.rotation)
            }
        }),
        xe.prototype = Object.create(Q.prototype),
        xe.prototype.constructor = xe,
        xe.prototype.isSpriteMaterial = !0,
        xe.prototype.copy = function(t) {
            return Q.prototype.copy.call(this, t),
            this.color.copy(t.color),
            this.map = t.map,
            this.rotation = t.rotation,
            this
        }
        ,
        _e.prototype = Object.assign(Object.create(ht.prototype), {
            constructor: _e,
            isSprite: !0,
            raycast: function() {
                var t = new h
                  , e = new h
                  , i = new h;
                return function(n, r) {
                    e.setFromMatrixPosition(this.matrixWorld),
                    n.ray.closestPointToPoint(e, t),
                    i.setFromMatrixScale(this.matrixWorld);
                    var a = i.x * i.y / 4;
                    if (!(e.distanceToSquared(t) > a)) {
                        var o = n.ray.origin.distanceTo(t);
                        o < n.near || o > n.far || r.push({
                            distance: o,
                            point: t.clone(),
                            face: null ,
                            object: this
                        })
                    }
                }
            }(),
            clone: function() {
                return new this.constructor(this.material).copy(this)
            }
        }),
        be.prototype = Object.assign(Object.create(ht.prototype), {
            constructor: be,
            copy: function(t) {
                ht.prototype.copy.call(this, t, !1);
                for (var e = t.levels, i = 0, n = e.length; i < n; i++) {
                    var r = e[i];
                    this.addLevel(r.object.clone(), r.distance)
                }
                return this
            },
            addLevel: function(t, e) {
                void 0 === e && (e = 0),
                e = Math.abs(e);
                for (var i = this.levels, n = 0; n < i.length && !(e < i[n].distance); n++)
                    ;
                i.splice(n, 0, {
                    distance: e,
                    object: t
                }),
                this.add(t)
            },
            getObjectForDistance: function(t) {
                for (var e = this.levels, i = 1, n = e.length; i < n && !(t < e[i].distance); i++)
                    ;
                return e[i - 1].object
            },
            raycast: function() {
                var t = new h;
                return function(e, i) {
                    t.setFromMatrixPosition(this.matrixWorld);
                    var n = e.ray.origin.distanceTo(t);
                    this.getObjectForDistance(n).raycast(e, i)
                }
            }(),
            update: function() {
                var t = new h
                  , e = new h;
                return function(i) {
                    var n = this.levels;
                    if (n.length > 1) {
                        t.setFromMatrixPosition(i.matrixWorld),
                        e.setFromMatrixPosition(this.matrixWorld);
                        var r = t.distanceTo(e);
                        n[0].object.visible = !0;
                        for (var a = 1, o = n.length; a < o && r >= n[a].distance; a++)
                            n[a - 1].object.visible = !1,
                            n[a].object.visible = !0;
                        for (; a < o; a++)
                            n[a].object.visible = !1
                    }
                }
            }(),
            toJSON: function(t) {
                var e = ht.prototype.toJSON.call(this, t);
                e.object.levels = [];
                for (var i = this.levels, n = 0, r = i.length; n < r; n++) {
                    var a = i[n];
                    e.object.levels.push({
                        object: a.object.uuid,
                        distance: a.distance
                    })
                }
                return e
            }
        }),
        Object.assign(we.prototype, {
            calculateInverses: function() {
                this.boneInverses = [];
                for (var t = 0, e = this.bones.length; t < e; t++) {
                    var i = new l;
                    this.bones[t] && i.getInverse(this.bones[t].matrixWorld),
                    this.boneInverses.push(i)
                }
            },
            pose: function() {
                var t, e, i;
                for (e = 0,
                i = this.bones.length; e < i; e++)
                    t = this.bones[e],
                    t && t.matrixWorld.getInverse(this.boneInverses[e]);
                for (e = 0,
                i = this.bones.length; e < i; e++)
                    t = this.bones[e],
                    t && (t.parent && t.parent.isBone ? (t.matrix.getInverse(t.parent.matrixWorld),
                    t.matrix.multiply(t.matrixWorld)) : t.matrix.copy(t.matrixWorld),
                    t.matrix.decompose(t.position, t.quaternion, t.scale))
            },
            update: function() {
                var t = new l
                  , e = new l;
                return function() {
                    for (var i = this.bones, n = this.boneInverses, r = this.boneMatrices, a = this.boneTexture, o = 0, s = i.length; o < s; o++) {
                        var c = i[o] ? i[o].matrixWorld : e;
                        t.multiplyMatrices(c, n[o]),
                        t.toArray(r, 16 * o)
                    }
                    void 0 !== a && (a.needsUpdate = !0)
                }
            }(),
            clone: function() {
                return new we(this.bones,this.boneInverses)
            }
        }),
        Me.prototype = Object.assign(Object.create(ht.prototype), {
            constructor: Me,
            isBone: !0
        }),
        Ee.prototype = Object.assign(Object.create(Rt.prototype), {
            constructor: Ee,
            isSkinnedMesh: !0,
            initBones: function() {
                var t, e, i, n, r = [];
                if (this.geometry && void 0 !== this.geometry.bones) {
                    for (i = 0,
                    n = this.geometry.bones.length; i < n; i++)
                        e = this.geometry.bones[i],
                        t = new Me,
                        r.push(t),
                        t.name = e.name,
                        t.position.fromArray(e.pos),
                        t.quaternion.fromArray(e.rotq),
                        void 0 !== e.scl && t.scale.fromArray(e.scl);
                    for (i = 0,
                    n = this.geometry.bones.length; i < n; i++)
                        e = this.geometry.bones[i],
                        e.parent !== -1 && null !== e.parent && void 0 !== r[e.parent] ? r[e.parent].add(r[i]) : this.add(r[i])
                }
                return this.updateMatrixWorld(!0),
                r
            },
            bind: function(t, e) {
                this.skeleton = t,
                void 0 === e && (this.updateMatrixWorld(!0),
                this.skeleton.calculateInverses(),
                e = this.matrixWorld),
                this.bindMatrix.copy(e),
                this.bindMatrixInverse.getInverse(e)
            },
            pose: function() {
                this.skeleton.pose()
            },
            normalizeSkinWeights: function() {
                var t, e;
                if (this.geometry && this.geometry.isGeometry)
                    for (e = 0; e < this.geometry.skinWeights.length; e++) {
                        var i = this.geometry.skinWeights[e];
                        t = 1 / i.lengthManhattan(),
                        t !== 1 / 0 ? i.multiplyScalar(t) : i.set(1, 0, 0, 0)
                    }
                else if (this.geometry && this.geometry.isBufferGeometry) {
                    var n = new r
                      , a = this.geometry.attributes.skinWeight;
                    for (e = 0; e < a.count; e++)
                        n.x = a.getX(e),
                        n.y = a.getY(e),
                        n.z = a.getZ(e),
                        n.w = a.getW(e),
                        t = 1 / n.lengthManhattan(),
                        t !== 1 / 0 ? n.multiplyScalar(t) : n.set(1, 0, 0, 0),
                        a.setXYZW(e, n.x, n.y, n.z, n.w)
                }
            },
            updateMatrixWorld: function(t) {
                Rt.prototype.updateMatrixWorld.call(this, t),
                "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode)
            },
            clone: function() {
                return new this.constructor(this.geometry,this.material).copy(this)
            }
        }),
        Te.prototype = Object.create(Q.prototype),
        Te.prototype.constructor = Te,
        Te.prototype.isLineBasicMaterial = !0,
        Te.prototype.copy = function(t) {
            return Q.prototype.copy.call(this, t),
            this.color.copy(t.color),
            this.linewidth = t.linewidth,
            this.linecap = t.linecap,
            this.linejoin = t.linejoin,
            this
        }
        ,
        Se.prototype = Object.assign(Object.create(ht.prototype), {
            constructor: Se,
            isLine: !0,
            raycast: function() {
                var t = new l
                  , e = new ot
                  , i = new et;
                return function(n, r) {
                    var a = n.linePrecision
                      , o = a * a
                      , s = this.geometry
                      , c = this.matrixWorld;
                    if (null === s.boundingSphere && s.computeBoundingSphere(),
                    i.copy(s.boundingSphere),
                    i.applyMatrix4(c),
                    n.ray.intersectsSphere(i) !== !1) {
                        t.getInverse(c),
                        e.copy(n.ray).applyMatrix4(t);
                        var l = new h
                          , u = new h
                          , d = new h
                          , p = new h
                          , f = this && this.isLineSegments ? 2 : 1;
                        if (s.isBufferGeometry) {
                            var m = s.index
                              , g = s.attributes
                              , v = g.position.array;
                            if (null !== m)
                                for (var y = m.array, x = 0, _ = y.length - 1; x < _; x += f) {
                                    var b = y[x]
                                      , w = y[x + 1];
                                    l.fromArray(v, 3 * b),
                                    u.fromArray(v, 3 * w);
                                    var M = e.distanceSqToSegment(l, u, p, d);
                                    if (!(M > o)) {
                                        p.applyMatrix4(this.matrixWorld);
                                        var E = n.ray.origin.distanceTo(p);
                                        E < n.near || E > n.far || r.push({
                                            distance: E,
                                            point: d.clone().applyMatrix4(this.matrixWorld),
                                            index: x,
                                            face: null ,
                                            faceIndex: null ,
                                            object: this
                                        })
                                    }
                                }
                            else
                                for (var x = 0, _ = v.length / 3 - 1; x < _; x += f) {
                                    l.fromArray(v, 3 * x),
                                    u.fromArray(v, 3 * x + 3);
                                    var M = e.distanceSqToSegment(l, u, p, d);
                                    if (!(M > o)) {
                                        p.applyMatrix4(this.matrixWorld);
                                        var E = n.ray.origin.distanceTo(p);
                                        E < n.near || E > n.far || r.push({
                                            distance: E,
                                            point: d.clone().applyMatrix4(this.matrixWorld),
                                            index: x,
                                            face: null ,
                                            faceIndex: null ,
                                            object: this
                                        })
                                    }
                                }
                        } else if (s.isGeometry)
                            for (var T = s.vertices, S = T.length, x = 0; x < S - 1; x += f) {
                                var M = e.distanceSqToSegment(T[x], T[x + 1], p, d);
                                if (!(M > o)) {
                                    p.applyMatrix4(this.matrixWorld);
                                    var E = n.ray.origin.distanceTo(p);
                                    E < n.near || E > n.far || r.push({
                                        distance: E,
                                        point: d.clone().applyMatrix4(this.matrixWorld),
                                        index: x,
                                        face: null ,
                                        faceIndex: null ,
                                        object: this
                                    })
                                }
                            }
                    }
                }
            }(),
            clone: function() {
                return new this.constructor(this.geometry,this.material).copy(this)
            }
        }),
        Ae.prototype = Object.assign(Object.create(Se.prototype), {
            constructor: Ae,
            isLineSegments: !0
        }),
        Le.prototype = Object.assign(Object.create(Se.prototype), {
            constructor: Le,
            isLineLoop: !0
        }),
        Re.prototype = Object.create(Q.prototype),
        Re.prototype.constructor = Re,
        Re.prototype.isPointsMaterial = !0,
        Re.prototype.copy = function(t) {
            return Q.prototype.copy.call(this, t),
            this.color.copy(t.color),
            this.map = t.map,
            this.size = t.size,
            this.sizeAttenuation = t.sizeAttenuation,
            this
        }
        ,
        Pe.prototype = Object.assign(Object.create(ht.prototype), {
            constructor: Pe,
            isPoints: !0,
            raycast: function() {
                var t = new l
                  , e = new ot
                  , i = new et;
                return function(n, r) {
                    function a(t, i) {
                        var a = e.distanceSqToPoint(t);
                        if (a < d) {
                            var s = e.closestPointToPoint(t);
                            s.applyMatrix4(c);
                            var h = n.ray.origin.distanceTo(s);
                            if (h < n.near || h > n.far)
                                return;
                            r.push({
                                distance: h,
                                distanceToRay: Math.sqrt(a),
                                point: s.clone(),
                                index: i,
                                face: null ,
                                object: o
                            })
                        }
                    }
                    var o = this
                      , s = this.geometry
                      , c = this.matrixWorld
                      , l = n.params.Points.threshold;
                    if (null === s.boundingSphere && s.computeBoundingSphere(),
                    i.copy(s.boundingSphere),
                    i.applyMatrix4(c),
                    i.radius += l,
                    n.ray.intersectsSphere(i) !== !1) {
                        t.getInverse(c),
                        e.copy(n.ray).applyMatrix4(t);
                        var u = l / ((this.scale.x + this.scale.y + this.scale.z) / 3)
                          , d = u * u
                          , p = new h;
                        if (s.isBufferGeometry) {
                            var f = s.index
                              , m = s.attributes
                              , g = m.position.array;
                            if (null !== f)
                                for (var v = f.array, y = 0, x = v.length; y < x; y++) {
                                    var _ = v[y];
                                    p.fromArray(g, 3 * _),
                                    a(p, _)
                                }
                            else
                                for (var y = 0, b = g.length / 3; y < b; y++)
                                    p.fromArray(g, 3 * y),
                                    a(p, y)
                        } else
                            for (var w = s.vertices, y = 0, b = w.length; y < b; y++)
                                a(w[y], y)
                    }
                }
            }(),
            clone: function() {
                return new this.constructor(this.geometry,this.material).copy(this)
            }
        }),
        Ce.prototype = Object.assign(Object.create(ht.prototype), {
            constructor: Ce
        }),
        Ie.prototype = Object.create(n.prototype),
        Ie.prototype.constructor = Ie,
        Ue.prototype = Object.create(n.prototype),
        Ue.prototype.constructor = Ue,
        Ue.prototype.isCompressedTexture = !0,
        Ne.prototype = Object.create(n.prototype),
        Ne.prototype.constructor = Ne,
        Oe.prototype = Object.create(n.prototype),
        Oe.prototype.constructor = Oe,
        Oe.prototype.isDepthTexture = !0,
        De.prototype = Object.create(Lt.prototype),
        De.prototype.constructor = De,
        Fe.prototype = Object.create(At.prototype),
        Fe.prototype.constructor = Fe,
        Be.prototype = Object.create(Lt.prototype),
        Be.prototype.constructor = Be,
        ze.prototype = Object.create(At.prototype),
        ze.prototype.constructor = ze,
        Ge.prototype = Object.create(Lt.prototype),
        Ge.prototype.constructor = Ge,
        He.prototype = Object.create(At.prototype),
        He.prototype.constructor = He,
        Ve.prototype = Object.create(Ge.prototype),
        Ve.prototype.constructor = Ve,
        ke.prototype = Object.create(At.prototype),
        ke.prototype.constructor = ke,
        je.prototype = Object.create(Ge.prototype),
        je.prototype.constructor = je,
        We.prototype = Object.create(At.prototype),
        We.prototype.constructor = We,
        Xe.prototype = Object.create(Ge.prototype),
        Xe.prototype.constructor = Xe,
        qe.prototype = Object.create(At.prototype),
        qe.prototype.constructor = qe,
        Ye.prototype = Object.create(Ge.prototype),
        Ye.prototype.constructor = Ye,
        Ze.prototype = Object.create(At.prototype),
        Ze.prototype.constructor = Ze,
        Je.prototype = Object.create(Lt.prototype),
        Je.prototype.constructor = Je,
        Qe.prototype = Object.create(At.prototype),
        Qe.prototype.constructor = Qe,
        Ke.prototype = Object.create(Lt.prototype),
        Ke.prototype.constructor = Ke,
        $e.prototype = Object.create(At.prototype),
        $e.prototype.constructor = $e,
        ti.prototype = Object.create(Lt.prototype),
        ti.prototype.constructor = ti;
        var Vh = {
            area: function(t) {
                for (var e = t.length, i = 0, n = e - 1, r = 0; r < e; n = r++)
                    i += t[n].x * t[r].y - t[r].x * t[n].y;
                return .5 * i
            },
            triangulate: function() {
                function t(t, e, i, n, r, a) {
                    var o, s, c, h, l, u, d, p, f;
                    if (s = t[a[e]].x,
                    c = t[a[e]].y,
                    h = t[a[i]].x,
                    l = t[a[i]].y,
                    u = t[a[n]].x,
                    d = t[a[n]].y,
                    (h - s) * (d - c) - (l - c) * (u - s) <= 0)
                        return !1;
                    var m, g, v, y, x, _, b, w, M, E, T, S, A, L, R;
                    for (m = u - h,
                    g = d - l,
                    v = s - u,
                    y = c - d,
                    x = h - s,
                    _ = l - c,
                    o = 0; o < r; o++)
                        if (p = t[a[o]].x,
                        f = t[a[o]].y,
                        !(p === s && f === c || p === h && f === l || p === u && f === d) && (b = p - s,
                        w = f - c,
                        M = p - h,
                        E = f - l,
                        T = p - u,
                        S = f - d,
                        R = m * E - g * M,
                        A = x * w - _ * b,
                        L = v * S - y * T,
                        R >= -Number.EPSILON && L >= -Number.EPSILON && A >= -Number.EPSILON))
                            return !1;
                    return !0
                }
                return function(e, i) {
                    var n = e.length;
                    if (n < 3)
                        return null ;
                    var r, a, o, s = [], c = [], h = [];
                    if (Vh.area(e) > 0)
                        for (a = 0; a < n; a++)
                            c[a] = a;
                    else
                        for (a = 0; a < n; a++)
                            c[a] = n - 1 - a;
                    var l = n
                      , u = 2 * l;
                    for (a = l - 1; l > 2; ) {
                        if (u-- <= 0)
                            return console.warn("THREE.ShapeUtils: Unable to triangulate polygon! in triangulate()"),
                            i ? h : s;
                        if (r = a,
                        l <= r && (r = 0),
                        a = r + 1,
                        l <= a && (a = 0),
                        o = a + 1,
                        l <= o && (o = 0),
                        t(e, r, a, o, l, c)) {
                            var d, p, f, m, g;
                            for (d = c[r],
                            p = c[a],
                            f = c[o],
                            s.push([e[d], e[p], e[f]]),
                            h.push([c[r], c[a], c[o]]),
                            m = a,
                            g = a + 1; g < l; m++,
                            g++)
                                c[m] = c[g];
                            l--,
                            u = 2 * l
                        }
                    }
                    return i ? h : s
                }
            }(),
            triangulateShape: function(t, e) {
                function i(t) {
                    var e = t.length;
                    e > 2 && t[e - 1].equals(t[0]) && t.pop()
                }
                function n(t, e, i) {
                    return t.x !== e.x ? t.x < e.x ? t.x <= i.x && i.x <= e.x : e.x <= i.x && i.x <= t.x : t.y < e.y ? t.y <= i.y && i.y <= e.y : e.y <= i.y && i.y <= t.y
                }
                function r(t, e, i, r, a) {
                    var o = e.x - t.x
                      , s = e.y - t.y
                      , c = r.x - i.x
                      , h = r.y - i.y
                      , l = t.x - i.x
                      , u = t.y - i.y
                      , d = s * c - o * h
                      , p = s * l - o * u;
                    if (Math.abs(d) > Number.EPSILON) {
                        var f;
                        if (d > 0) {
                            if (p < 0 || p > d)
                                return [];
                            if (f = h * l - c * u,
                            f < 0 || f > d)
                                return []
                        } else {
                            if (p > 0 || p < d)
                                return [];
                            if (f = h * l - c * u,
                            f > 0 || f < d)
                                return []
                        }
                        if (0 === f)
                            return !a || 0 !== p && p !== d ? [t] : [];
                        if (f === d)
                            return !a || 0 !== p && p !== d ? [e] : [];
                        if (0 === p)
                            return [i];
                        if (p === d)
                            return [r];
                        var m = f / d;
                        return [{
                            x: t.x + m * o,
                            y: t.y + m * s
                        }]
                    }
                    if (0 !== p || h * l !== c * u)
                        return [];
                    var g = 0 === o && 0 === s
                      , v = 0 === c && 0 === h;
                    if (g && v)
                        return t.x !== i.x || t.y !== i.y ? [] : [t];
                    if (g)
                        return n(i, r, t) ? [t] : [];
                    if (v)
                        return n(t, e, i) ? [i] : [];
                    var y, x, _, b, w, M, E, T;
                    return 0 !== o ? (t.x < e.x ? (y = t,
                    _ = t.x,
                    x = e,
                    b = e.x) : (y = e,
                    _ = e.x,
                    x = t,
                    b = t.x),
                    i.x < r.x ? (w = i,
                    E = i.x,
                    M = r,
                    T = r.x) : (w = r,
                    E = r.x,
                    M = i,
                    T = i.x)) : (t.y < e.y ? (y = t,
                    _ = t.y,
                    x = e,
                    b = e.y) : (y = e,
                    _ = e.y,
                    x = t,
                    b = t.y),
                    i.y < r.y ? (w = i,
                    E = i.y,
                    M = r,
                    T = r.y) : (w = r,
                    E = r.y,
                    M = i,
                    T = i.y)),
                    _ <= E ? b < E ? [] : b === E ? a ? [] : [w] : b <= T ? [w, x] : [w, M] : _ > T ? [] : _ === T ? a ? [] : [y] : b <= T ? [y, x] : [y, M]
                }
                function a(t, e, i, n) {
                    var r = e.x - t.x
                      , a = e.y - t.y
                      , o = i.x - t.x
                      , s = i.y - t.y
                      , c = n.x - t.x
                      , h = n.y - t.y
                      , l = r * s - a * o
                      , u = r * h - a * c;
                    if (Math.abs(l) > Number.EPSILON) {
                        var d = c * s - h * o;
                        return l > 0 ? u >= 0 && d >= 0 : u >= 0 || d >= 0
                    }
                    return u > 0
                }
                function o(t, e) {
                    function i(t, e) {
                        var i = y.length - 1
                          , n = t - 1;
                        n < 0 && (n = i);
                        var r = t + 1;
                        r > i && (r = 0);
                        var o = a(y[t], y[n], y[r], s[e]);
                        if (!o)
                            return !1;
                        var c = s.length - 1
                          , h = e - 1;
                        h < 0 && (h = c);
                        var l = e + 1;
                        return l > c && (l = 0),
                        o = a(s[e], s[h], s[l], y[t]),
                        !!o
                    }
                    function n(t, e) {
                        var i, n, a;
                        for (i = 0; i < y.length; i++)
                            if (n = i + 1,
                            n %= y.length,
                            a = r(t, e, y[i], y[n], !0),
                            a.length > 0)
                                return !0;
                        return !1
                    }
                    function o(t, i) {
                        var n, a, o, s, c;
                        for (n = 0; n < x.length; n++)
                            for (a = e[x[n]],
                            o = 0; o < a.length; o++)
                                if (s = o + 1,
                                s %= a.length,
                                c = r(t, i, a[o], a[s], !0),
                                c.length > 0)
                                    return !0;
                        return !1
                    }
                    for (var s, c, h, l, u, d, p, f, m, g, v, y = t.concat(), x = [], _ = [], b = 0, w = e.length; b < w; b++)
                        x.push(b);
                    for (var M = 0, E = 2 * x.length; x.length > 0; ) {
                        if (E--,
                        E < 0) {
                            console.log("Infinite Loop! Holes left:" + x.length + ", Probably Hole outside Shape!");
                            break
                        }
                        for (h = M; h < y.length; h++) {
                            l = y[h],
                            c = -1;
                            for (var b = 0; b < x.length; b++)
                                if (d = x[b],
                                p = l.x + ":" + l.y + ":" + d,
                                void 0 === _[p]) {
                                    s = e[d];
                                    for (var T = 0; T < s.length; T++)
                                        if (u = s[T],
                                        i(h, T) && !n(l, u) && !o(l, u)) {
                                            c = T,
                                            x.splice(b, 1),
                                            f = y.slice(0, h + 1),
                                            m = y.slice(h),
                                            g = s.slice(c),
                                            v = s.slice(0, c + 1),
                                            y = f.concat(g).concat(v).concat(m),
                                            M = h;
                                            break
                                        }
                                    if (c >= 0)
                                        break;
                                    _[p] = !0
                                }
                            if (c >= 0)
                                break
                        }
                    }
                    return y
                }
                i(t),
                e.forEach(i);
                for (var s, c, h, l, u, d, p = {}, f = t.concat(), m = 0, g = e.length; m < g; m++)
                    Array.prototype.push.apply(f, e[m]);
                for (s = 0,
                c = f.length; s < c; s++)
                    u = f[s].x + ":" + f[s].y,
                    void 0 !== p[u] && console.warn("THREE.ShapeUtils: Duplicate point", u, s),
                    p[u] = s;
                var v = o(t, e)
                  , y = Vh.triangulate(v, !1);
                for (s = 0,
                c = y.length; s < c; s++)
                    for (l = y[s],
                    h = 0; h < 3; h++)
                        u = l[h].x + ":" + l[h].y,
                        d = p[u],
                        void 0 !== d && (l[h] = d);
                return y.concat()
            },
            isClockWise: function(t) {
                return Vh.area(t) < 0
            }
        };
        ei.prototype = Object.create(At.prototype),
        ei.prototype.constructor = ei,
        ii.prototype = Object.create(Lt.prototype),
        ii.prototype.constructor = ii,
        ii.prototype.getArrays = function() {
            var t = this.getAttribute("position")
              , e = t ? Array.prototype.slice.call(t.array) : []
              , i = this.getAttribute("uv")
              , n = i ? Array.prototype.slice.call(i.array) : []
              , r = this.index
              , a = r ? Array.prototype.slice.call(r.array) : [];
            return {
                position: e,
                uv: n,
                index: a
            }
        }
        ,
        ii.prototype.addShapeList = function(t, e) {
            var i = t.length;
            e.arrays = this.getArrays();
            for (var n = 0; n < i; n++) {
                var r = t[n];
                this.addShape(r, e)
            }
            this.setIndex(e.arrays.index),
            this.addAttribute("position", new wt(e.arrays.position,3)),
            this.addAttribute("uv", new wt(e.arrays.uv,2))
        }
        ,
        ii.prototype.addShape = function(t, e) {
            function n(t, e, i) {
                return e || console.error("THREE.ExtrudeGeometry: vec does not exist"),
                e.clone().multiplyScalar(i).add(t)
            }
            function r(t, e, n) {
                var r, a, o = 1, s = t.x - e.x, c = t.y - e.y, h = n.x - t.x, l = n.y - t.y, u = s * s + c * c, d = s * l - c * h;
                if (Math.abs(d) > Number.EPSILON) {
                    var p = Math.sqrt(u)
                      , f = Math.sqrt(h * h + l * l)
                      , m = e.x - c / p
                      , g = e.y + s / p
                      , v = n.x - l / f
                      , y = n.y + h / f
                      , x = ((v - m) * l - (y - g) * h) / (s * l - c * h);
                    r = m + s * x - t.x,
                    a = g + c * x - t.y;
                    var _ = r * r + a * a;
                    if (_ <= 2)
                        return new i(r,a);
                    o = Math.sqrt(_ / 2)
                } else {
                    var b = !1;
                    s > Number.EPSILON ? h > Number.EPSILON && (b = !0) : s < -Number.EPSILON ? h < -Number.EPSILON && (b = !0) : Math.sign(c) === Math.sign(l) && (b = !0),
                    b ? (r = -c,
                    a = s,
                    o = Math.sqrt(u)) : (r = s,
                    a = c,
                    o = Math.sqrt(u / 2))
                }
                return new i(r / o,a / o)
            }
            function a() {
                var t = _.length / 3;
                if (L) {
                    var i = 0
                      , n = J * i;
                    for ($ = 0; $ < Q; $++)
                        Z = V[$],
                        l(Z[2] + n, Z[1] + n, Z[0] + n);
                    for (i = P + 2 * A,
                    n = J * i,
                    $ = 0; $ < Q; $++)
                        Z = V[$],
                        l(Z[0] + n, Z[1] + n, Z[2] + n)
                } else {
                    for ($ = 0; $ < Q; $++)
                        Z = V[$],
                        l(Z[2], Z[1], Z[0]);
                    for ($ = 0; $ < Q; $++)
                        Z = V[$],
                        l(Z[0] + J * P, Z[1] + J * P, Z[2] + J * P)
                }
                F.addGroup(t, _.length / 3 - t, void 0 !== e.material ? e.material : 0)
            }
            function o() {
                var t = _.length / 3
                  , i = 0;
                for (s(k, i),
                i += k.length,
                O = 0,
                D = G.length; O < D; O++)
                    N = G[O],
                    s(N, i),
                    i += N.length;
                F.addGroup(t, _.length / 3 - t, void 0 !== e.extrudeMaterial ? e.extrudeMaterial : 1)
            }
            function s(t, e) {
                var i, n;
                for ($ = t.length; --$ >= 0; ) {
                    i = $,
                    n = $ - 1,
                    n < 0 && (n = t.length - 1);
                    var r = 0
                      , a = P + 2 * A;
                    for (r = 0; r < a; r++) {
                        var o = J * r
                          , s = J * (r + 1)
                          , c = e + i + o
                          , h = e + n + o
                          , l = e + n + s
                          , d = e + i + s;
                        u(c, h, l, d, t, r, a, i, n)
                    }
                }
            }
            function c(t, e, i) {
                M.push(t),
                M.push(e),
                M.push(i)
            }
            function l(t, e, i) {
                d(t),
                d(e),
                d(i);
                var n = _.length / 3
                  , r = U.generateTopUV(F, _, n - 3, n - 2, n - 1);
                p(r[0]),
                p(r[1]),
                p(r[2])
            }
            function u(t, e, i, n, r, a, o, s, c) {
                d(t),
                d(e),
                d(n),
                d(e),
                d(i),
                d(n);
                var h = _.length / 3
                  , l = U.generateSideWallUV(F, _, h - 6, h - 3, h - 2, h - 1);
                p(l[0]),
                p(l[1]),
                p(l[3]),
                p(l[1]),
                p(l[2]),
                p(l[3])
            }
            function d(t) {
                b.push(_.length / 3),
                _.push(M[3 * t + 0]),
                _.push(M[3 * t + 1]),
                _.push(M[3 * t + 2])
            }
            function p(t) {
                w.push(t.x),
                w.push(t.y)
            }
            var f, m, g, v, y, x = e.arrays ? e.arrays : this.getArrays(), _ = x.position, b = x.index, w = x.uv, M = [], E = void 0 !== e.amount ? e.amount : 100, T = void 0 !== e.bevelThickness ? e.bevelThickness : 6, S = void 0 !== e.bevelSize ? e.bevelSize : T - 2, A = void 0 !== e.bevelSegments ? e.bevelSegments : 3, L = void 0 === e.bevelEnabled || e.bevelEnabled, R = void 0 !== e.curveSegments ? e.curveSegments : 12, P = void 0 !== e.steps ? e.steps : 1, C = e.extrudePath, I = !1, U = void 0 !== e.UVGenerator ? e.UVGenerator : ei.WorldUVGenerator;
            C && (f = C.getSpacedPoints(P),
            I = !0,
            L = !1,
            m = void 0 !== e.frames ? e.frames : C.computeFrenetFrames(P, !1),
            g = new h,
            v = new h,
            y = new h),
            L || (A = 0,
            T = 0,
            S = 0);
            var N, O, D, F = this, B = t.extractPoints(R), z = B.shape, G = B.holes, H = !Vh.isClockWise(z);
            if (H) {
                for (z = z.reverse(),
                O = 0,
                D = G.length; O < D; O++)
                    N = G[O],
                    Vh.isClockWise(N) && (G[O] = N.reverse());
                H = !1
            }
            var V = Vh.triangulateShape(z, G)
              , k = z;
            for (O = 0,
            D = G.length; O < D; O++)
                N = G[O],
                z = z.concat(N);
            for (var j, W, X, q, Y, Z, J = z.length, Q = V.length, K = [], $ = 0, tt = k.length, et = tt - 1, it = $ + 1; $ < tt; $++,
            et++,
            it++)
                et === tt && (et = 0),
                it === tt && (it = 0),
                K[$] = r(k[$], k[et], k[it]);
            var nt, rt = [], at = K.concat();
            for (O = 0,
            D = G.length; O < D; O++) {
                for (N = G[O],
                nt = [],
                $ = 0,
                tt = N.length,
                et = tt - 1,
                it = $ + 1; $ < tt; $++,
                et++,
                it++)
                    et === tt && (et = 0),
                    it === tt && (it = 0),
                    nt[$] = r(N[$], N[et], N[it]);
                rt.push(nt),
                at = at.concat(nt)
            }
            for (j = 0; j < A; j++) {
                for (X = j / A,
                q = T * Math.cos(X * Math.PI / 2),
                W = S * Math.sin(X * Math.PI / 2),
                $ = 0,
                tt = k.length; $ < tt; $++)
                    Y = n(k[$], K[$], W),
                    c(Y.x, Y.y, -q);
                for (O = 0,
                D = G.length; O < D; O++)
                    for (N = G[O],
                    nt = rt[O],
                    $ = 0,
                    tt = N.length; $ < tt; $++)
                        Y = n(N[$], nt[$], W),
                        c(Y.x, Y.y, -q)
            }
            for (W = S,
            $ = 0; $ < J; $++)
                Y = L ? n(z[$], at[$], W) : z[$],
                I ? (v.copy(m.normals[0]).multiplyScalar(Y.x),
                g.copy(m.binormals[0]).multiplyScalar(Y.y),
                y.copy(f[0]).add(v).add(g),
                c(y.x, y.y, y.z)) : c(Y.x, Y.y, 0);
            var ot;
            for (ot = 1; ot <= P; ot++)
                for ($ = 0; $ < J; $++)
                    Y = L ? n(z[$], at[$], W) : z[$],
                    I ? (v.copy(m.normals[ot]).multiplyScalar(Y.x),
                    g.copy(m.binormals[ot]).multiplyScalar(Y.y),
                    y.copy(f[ot]).add(v).add(g),
                    c(y.x, y.y, y.z)) : c(Y.x, Y.y, E / P * ot);
            for (j = A - 1; j >= 0; j--) {
                for (X = j / A,
                q = T * Math.cos(X * Math.PI / 2),
                W = S * Math.sin(X * Math.PI / 2),
                $ = 0,
                tt = k.length; $ < tt; $++)
                    Y = n(k[$], K[$], W),
                    c(Y.x, Y.y, E + q);
                for (O = 0,
                D = G.length; O < D; O++)
                    for (N = G[O],
                    nt = rt[O],
                    $ = 0,
                    tt = N.length; $ < tt; $++)
                        Y = n(N[$], nt[$], W),
                        I ? c(Y.x, Y.y + f[P - 1].y, f[P - 1].x + q) : c(Y.x, Y.y, E + q)
            }
            a(),
            o(),
            e.arrays || (this.setIndex(b),
            this.addAttribute("position", new wt(_,3)),
            this.addAttribute("uv", new wt(e.arrays.uv,2)))
        }
        ,
        ei.WorldUVGenerator = {
            generateTopUV: function(t, e, n, r, a) {
                var o = e[3 * n]
                  , s = e[3 * n + 1]
                  , c = e[3 * r]
                  , h = e[3 * r + 1]
                  , l = e[3 * a]
                  , u = e[3 * a + 1];
                return [new i(o,s), new i(c,h), new i(l,u)]
            },
            generateSideWallUV: function(t, e, n, r, a, o) {
                var s = e[3 * n]
                  , c = e[3 * n + 1]
                  , h = e[3 * n + 2]
                  , l = e[3 * r]
                  , u = e[3 * r + 1]
                  , d = e[3 * r + 2]
                  , p = e[3 * a]
                  , f = e[3 * a + 1]
                  , m = e[3 * a + 2]
                  , g = e[3 * o]
                  , v = e[3 * o + 1]
                  , y = e[3 * o + 2];
                return Math.abs(c - u) < .01 ? [new i(s,1 - h), new i(l,1 - d), new i(p,1 - m), new i(g,1 - y)] : [new i(c,1 - h), new i(u,1 - d), new i(f,1 - m), new i(v,1 - y)]
            }
        },
        ni.prototype = Object.create(At.prototype),
        ni.prototype.constructor = ni,
        ri.prototype = Object.create(ii.prototype),
        ri.prototype.constructor = ri,
        ai.prototype = Object.create(At.prototype),
        ai.prototype.constructor = ai,
        oi.prototype = Object.create(Lt.prototype),
        oi.prototype.constructor = oi,
        si.prototype = Object.create(At.prototype),
        si.prototype.constructor = si,
        ci.prototype = Object.create(Lt.prototype),
        ci.prototype.constructor = ci,
        hi.prototype = Object.create(At.prototype),
        hi.prototype.constructor = hi,
        li.prototype = Object.create(Lt.prototype),
        li.prototype.constructor = li,
        ui.prototype = Object.create(At.prototype),
        ui.prototype.constructor = ui,
        di.prototype = Object.create(Lt.prototype),
        di.prototype.constructor = di,
        pi.prototype = Object.create(Lt.prototype),
        pi.prototype.constructor = pi,
        fi.prototype = Object.create(At.prototype),
        fi.prototype.constructor = fi,
        mi.prototype = Object.create(Lt.prototype),
        mi.prototype.constructor = mi,
        gi.prototype = Object.create(fi.prototype),
        gi.prototype.constructor = gi,
        vi.prototype = Object.create(mi.prototype),
        vi.prototype.constructor = vi,
        yi.prototype = Object.create(At.prototype),
        yi.prototype.constructor = yi,
        xi.prototype = Object.create(Lt.prototype),
        xi.prototype.constructor = xi;
        var kh = Object.freeze({
            WireframeGeometry: De,
            ParametricGeometry: Fe,
            ParametricBufferGeometry: Be,
            TetrahedronGeometry: He,
            TetrahedronBufferGeometry: Ve,
            OctahedronGeometry: ke,
            OctahedronBufferGeometry: je,
            IcosahedronGeometry: We,
            IcosahedronBufferGeometry: Xe,
            DodecahedronGeometry: qe,
            DodecahedronBufferGeometry: Ye,
            PolyhedronGeometry: ze,
            PolyhedronBufferGeometry: Ge,
            TubeGeometry: Ze,
            TubeBufferGeometry: Je,
            TorusKnotGeometry: Qe,
            TorusKnotBufferGeometry: Ke,
            TorusGeometry: $e,
            TorusBufferGeometry: ti,
            TextGeometry: ni,
            TextBufferGeometry: ri,
            SphereGeometry: ai,
            SphereBufferGeometry: oi,
            RingGeometry: si,
            RingBufferGeometry: ci,
            PlaneGeometry: It,
            PlaneBufferGeometry: Ut,
            LatheGeometry: hi,
            LatheBufferGeometry: li,
            ShapeGeometry: ui,
            ShapeBufferGeometry: di,
            ExtrudeGeometry: ei,
            ExtrudeBufferGeometry: ii,
            EdgesGeometry: pi,
            ConeGeometry: gi,
            ConeBufferGeometry: vi,
            CylinderGeometry: fi,
            CylinderBufferGeometry: mi,
            CircleGeometry: yi,
            CircleBufferGeometry: xi,
            BoxGeometry: Pt,
            BoxBufferGeometry: Ct
        });
        _i.prototype = Object.create(K.prototype),
        _i.prototype.constructor = _i,
        _i.prototype.isShadowMaterial = !0,
        bi.prototype = Object.create(K.prototype),
        bi.prototype.constructor = bi,
        bi.prototype.isRawShaderMaterial = !0,
        wi.prototype = Object.create(Q.prototype),
        wi.prototype.constructor = wi,
        wi.prototype.isMeshStandardMaterial = !0,
        wi.prototype.copy = function(t) {
            return Q.prototype.copy.call(this, t),
            this.defines = {
                STANDARD: ""
            },
            this.color.copy(t.color),
            this.roughness = t.roughness,
            this.metalness = t.metalness,
            this.map = t.map,
            this.lightMap = t.lightMap,
            this.lightMapIntensity = t.lightMapIntensity,
            this.aoMap = t.aoMap,
            this.aoMapIntensity = t.aoMapIntensity,
            this.emissive.copy(t.emissive),
            this.emissiveMap = t.emissiveMap,
            this.emissiveIntensity = t.emissiveIntensity,
            this.bumpMap = t.bumpMap,
            this.bumpScale = t.bumpScale,
            this.normalMap = t.normalMap,
            this.normalScale.copy(t.normalScale),
            this.displacementMap = t.displacementMap,
            this.displacementScale = t.displacementScale,
            this.displacementBias = t.displacementBias,
            this.roughnessMap = t.roughnessMap,
            this.metalnessMap = t.metalnessMap,
            this.alphaMap = t.alphaMap,
            this.envMap = t.envMap,
            this.envMapIntensity = t.envMapIntensity,
            this.refractionRatio = t.refractionRatio,
            this.wireframe = t.wireframe,
            this.wireframeLinewidth = t.wireframeLinewidth,
            this.wireframeLinecap = t.wireframeLinecap,
            this.wireframeLinejoin = t.wireframeLinejoin,
            this.skinning = t.skinning,
            this.morphTargets = t.morphTargets,
            this.morphNormals = t.morphNormals,
            this
        }
        ,
        Mi.prototype = Object.create(wi.prototype),
        Mi.prototype.constructor = Mi,
        Mi.prototype.isMeshPhysicalMaterial = !0,
        Mi.prototype.copy = function(t) {
            return wi.prototype.copy.call(this, t),
            this.defines = {
                PHYSICAL: ""
            },
            this.reflectivity = t.reflectivity,
            this.clearCoat = t.clearCoat,
            this.clearCoatRoughness = t.clearCoatRoughness,
            this
        }
        ,
        Ei.prototype = Object.create(Q.prototype),
        Ei.prototype.constructor = Ei,
        Ei.prototype.isMeshPhongMaterial = !0,
        Ei.prototype.copy = function(t) {
            return Q.prototype.copy.call(this, t),
            this.color.copy(t.color),
            this.specular.copy(t.specular),
            this.shininess = t.shininess,
            this.map = t.map,
            this.lightMap = t.lightMap,
            this.lightMapIntensity = t.lightMapIntensity,
            this.aoMap = t.aoMap,
            this.aoMapIntensity = t.aoMapIntensity,
            this.emissive.copy(t.emissive),
            this.emissiveMap = t.emissiveMap,
            this.emissiveIntensity = t.emissiveIntensity,
            this.bumpMap = t.bumpMap,
            this.bumpScale = t.bumpScale,
            this.normalMap = t.normalMap,
            this.normalScale.copy(t.normalScale),
            this.displacementMap = t.displacementMap,
            this.displacementScale = t.displacementScale,
            this.displacementBias = t.displacementBias,
            this.specularMap = t.specularMap,
            this.alphaMap = t.alphaMap,
            this.envMap = t.envMap,
            this.combine = t.combine,
            this.reflectivity = t.reflectivity,
            this.refractionRatio = t.refractionRatio,
            this.wireframe = t.wireframe,
            this.wireframeLinewidth = t.wireframeLinewidth,
            this.wireframeLinecap = t.wireframeLinecap,
            this.wireframeLinejoin = t.wireframeLinejoin,
            this.skinning = t.skinning,
            this.morphTargets = t.morphTargets,
            this.morphNormals = t.morphNormals,
            this
        }
        ,
        Ti.prototype = Object.create(Ei.prototype),
        Ti.prototype.constructor = Ti,
        Ti.prototype.isMeshToonMaterial = !0,
        Ti.prototype.copy = function(t) {
            return Ei.prototype.copy.call(this, t),
            this.gradientMap = t.gradientMap,
            this
        }
        ,
        Si.prototype = Object.create(Q.prototype),
        Si.prototype.constructor = Si,
        Si.prototype.isMeshNormalMaterial = !0,
        Si.prototype.copy = function(t) {
            return Q.prototype.copy.call(this, t),
            this.bumpMap = t.bumpMap,
            this.bumpScale = t.bumpScale,
            this.normalMap = t.normalMap,
            this.normalScale.copy(t.normalScale),
            this.displacementMap = t.displacementMap,
            this.displacementScale = t.displacementScale,
            this.displacementBias = t.displacementBias,
            this.wireframe = t.wireframe,
            this.wireframeLinewidth = t.wireframeLinewidth,
            this.skinning = t.skinning,
            this.morphTargets = t.morphTargets,
            this.morphNormals = t.morphNormals,
            this
        }
        ,
        Ai.prototype = Object.create(Q.prototype),
        Ai.prototype.constructor = Ai,
        Ai.prototype.isMeshLambertMaterial = !0,
        Ai.prototype.copy = function(t) {
            return Q.prototype.copy.call(this, t),
            this.color.copy(t.color),
            this.map = t.map,
            this.lightMap = t.lightMap,
            this.lightMapIntensity = t.lightMapIntensity,
            this.aoMap = t.aoMap,
            this.aoMapIntensity = t.aoMapIntensity,
            this.emissive.copy(t.emissive),
            this.emissiveMap = t.emissiveMap,
            this.emissiveIntensity = t.emissiveIntensity,
            this.specularMap = t.specularMap,
            this.alphaMap = t.alphaMap,
            this.envMap = t.envMap,
            this.combine = t.combine,
            this.reflectivity = t.reflectivity,
            this.refractionRatio = t.refractionRatio,
            this.wireframe = t.wireframe,
            this.wireframeLinewidth = t.wireframeLinewidth,
            this.wireframeLinecap = t.wireframeLinecap,
            this.wireframeLinejoin = t.wireframeLinejoin,
            this.skinning = t.skinning,
            this.morphTargets = t.morphTargets,
            this.morphNormals = t.morphNormals,
            this
        }
        ,
        Li.prototype = Object.create(Q.prototype),
        Li.prototype.constructor = Li,
        Li.prototype.isLineDashedMaterial = !0,
        Li.prototype.copy = function(t) {
            return Q.prototype.copy.call(this, t),
            this.color.copy(t.color),
            this.linewidth = t.linewidth,
            this.scale = t.scale,
            this.dashSize = t.dashSize,
            this.gapSize = t.gapSize,
            this
        }
        ;
        var jh = Object.freeze({
            ShadowMaterial: _i,
            SpriteMaterial: xe,
            RawShaderMaterial: bi,
            ShaderMaterial: K,
            PointsMaterial: Re,
            MeshPhysicalMaterial: Mi,
            MeshStandardMaterial: wi,
            MeshPhongMaterial: Ei,
            MeshToonMaterial: Ti,
            MeshNormalMaterial: Si,
            MeshLambertMaterial: Ai,
            MeshDepthMaterial: $,
            MeshBasicMaterial: pt,
            LineDashedMaterial: Li,
            LineBasicMaterial: Te,
            Material: Q
        })
          , Wh = {
            enabled: !1,
            files: {},
            add: function(t, e) {
                this.enabled !== !1 && (this.files[t] = e)
            },
            get: function(t) {
                if (this.enabled !== !1)
                    return this.files[t]
            },
            remove: function(t) {
                delete this.files[t]
            },
            clear: function() {
                this.files = {}
            }
        }
          , Xh = new Ri;
        Object.assign(Pi.prototype, {
            load: function(t, e, i, n) {
                void 0 === t && (t = ""),
                void 0 !== this.path && (t = this.path + t);
                var r = this
                  , a = Wh.get(t);
                if (void 0 !== a)
                    return r.manager.itemStart(t),
                    setTimeout(function() {
                        e && e(a),
                        r.manager.itemEnd(t)
                    }, 0),
                    a;
                var o = /^data:(.*?)(;base64)?,(.*)$/
                  , s = t.match(o);
                if (s) {
                    var c = s[1]
                      , h = !!s[2]
                      , l = s[3];
                    l = window.decodeURIComponent(l),
                    h && (l = window.atob(l));
                    try {
                        var u, d = (this.responseType || "").toLowerCase();
                        switch (d) {
                        case "arraybuffer":
                        case "blob":
                            u = new ArrayBuffer(l.length);
                            for (var p = new Uint8Array(u), f = 0; f < l.length; f++)
                                p[f] = l.charCodeAt(f);
                            "blob" === d && (u = new Blob([u],{
                                type: c
                            }));
                            break;
                        case "document":
                            var m = new DOMParser;
                            u = m.parseFromString(l, c);
                            break;
                        case "json":
                            u = JSON.parse(l);
                            break;
                        default:
                            u = l
                        }
                        window.setTimeout(function() {
                            e && e(u),
                            r.manager.itemEnd(t)
                        }, 0)
                    } catch (e) {
                        window.setTimeout(function() {
                            n && n(e),
                            r.manager.itemEnd(t),
                            r.manager.itemError(t)
                        }, 0)
                    }
                } else {
                    var g = new XMLHttpRequest;
                    g.open("GET", t, !0),
                    g.addEventListener("load", function(i) {
                        var a = i.target.response;
                        Wh.add(t, a),
                        200 === this.status ? (e && e(a),
                        r.manager.itemEnd(t)) : 0 === this.status ? (console.warn("THREE.FileLoader: HTTP Status 0 received."),
                        e && e(a),
                        r.manager.itemEnd(t)) : (n && n(i),
                        r.manager.itemEnd(t),
                        r.manager.itemError(t))
                    }, !1),
                    void 0 !== i && g.addEventListener("progress", function(t) {
                        i(t)
                    }, !1),
                    g.addEventListener("error", function(e) {
                        n && n(e),
                        r.manager.itemEnd(t),
                        r.manager.itemError(t)
                    }, !1),
                    void 0 !== this.responseType && (g.responseType = this.responseType),
                    void 0 !== this.withCredentials && (g.withCredentials = this.withCredentials),
                    g.overrideMimeType && g.overrideMimeType(void 0 !== this.mimeType ? this.mimeType : "text/plain");
                    for (var v in this.requestHeader)
                        g.setRequestHeader(v, this.requestHeader[v]);
                    g.send(null )
                }
                return r.manager.itemStart(t),
                g
            },
            setPath: function(t) {
                return this.path = t,
                this
            },
            setResponseType: function(t) {
                return this.responseType = t,
                this
            },
            setWithCredentials: function(t) {
                return this.withCredentials = t,
                this
            },
            setMimeType: function(t) {
                return this.mimeType = t,
                this
            },
            setRequestHeader: function(t) {
                return this.requestHeader = t,
                this
            }
        }),
        Object.assign(Ci.prototype, {
            load: function(t, e, i, n) {
                function r(r) {
                    c.load(t[r], function(t) {
                        var i = a._parser(t, !0);
                        o[r] = {
                            width: i.width,
                            height: i.height,
                            format: i.format,
                            mipmaps: i.mipmaps
                        },
                        h += 1,
                        6 === h && (1 === i.mipmapCount && (s.minFilter = wo),
                        s.format = i.format,
                        s.needsUpdate = !0,
                        e && e(s))
                    }, i, n)
                }
                var a = this
                  , o = []
                  , s = new Ue;
                s.image = o;
                var c = new Pi(this.manager);
                if (c.setPath(this.path),
                c.setResponseType("arraybuffer"),
                Array.isArray(t))
                    for (var h = 0, l = 0, u = t.length; l < u; ++l)
                        r(l);
                else
                    c.load(t, function(t) {
                        var i = a._parser(t, !0);
                        if (i.isCubemap)
                            for (var n = i.mipmaps.length / i.mipmapCount, r = 0; r < n; r++) {
                                o[r] = {
                                    mipmaps: []
                                };
                                for (var c = 0; c < i.mipmapCount; c++)
                                    o[r].mipmaps.push(i.mipmaps[r * i.mipmapCount + c]),
                                    o[r].format = i.format,
                                    o[r].width = i.width,
                                    o[r].height = i.height
                            }
                        else
                            s.image.width = i.width,
                            s.image.height = i.height,
                            s.mipmaps = i.mipmaps;
                        1 === i.mipmapCount && (s.minFilter = wo),
                        s.format = i.format,
                        s.needsUpdate = !0,
                        e && e(s)
                    }, i, n);
                return s
            },
            setPath: function(t) {
                return this.path = t,
                this
            }
        }),
        Object.assign(Ii.prototype, {
            load: function(t, e, i, n) {
                var r = this
                  , a = new u
                  , o = new Pi(this.manager);
                return o.setResponseType("arraybuffer"),
                o.load(t, function(t) {
                    var i = r._parser(t);
                    i && (void 0 !== i.image ? a.image = i.image : void 0 !== i.data && (a.image.width = i.width,
                    a.image.height = i.height,
                    a.image.data = i.data),
                    a.wrapS = void 0 !== i.wrapS ? i.wrapS : vo,
                    a.wrapT = void 0 !== i.wrapT ? i.wrapT : vo,
                    a.magFilter = void 0 !== i.magFilter ? i.magFilter : wo,
                    a.minFilter = void 0 !== i.minFilter ? i.minFilter : Eo,
                    a.anisotropy = void 0 !== i.anisotropy ? i.anisotropy : 1,
                    void 0 !== i.format && (a.format = i.format),
                    void 0 !== i.type && (a.type = i.type),
                    void 0 !== i.mipmaps && (a.mipmaps = i.mipmaps),
                    1 === i.mipmapCount && (a.minFilter = wo),
                    a.needsUpdate = !0,
                    e && e(a, i))
                }, i, n),
                a
            }
        }),
        Object.assign(Ui.prototype, {
            load: function(t, e, i, n) {
                void 0 === t && (t = ""),
                void 0 !== this.path && (t = this.path + t);
                var r = this
                  , a = Wh.get(t);
                if (void 0 !== a)
                    return r.manager.itemStart(t),
                    setTimeout(function() {
                        e && e(a),
                        r.manager.itemEnd(t)
                    }, 0),
                    a;
                var o = document.createElementNS("http://www.w3.org/1999/xhtml", "img");
                return o.addEventListener("load", function() {
                    Wh.add(t, this),
                    e && e(this),
                    r.manager.itemEnd(t)
                }, !1),
                o.addEventListener("error", function(e) {
                    n && n(e),
                    r.manager.itemEnd(t),
                    r.manager.itemError(t)
                }, !1),
                "data:" !== t.substr(0, 5) && void 0 !== this.crossOrigin && (o.crossOrigin = this.crossOrigin),
                r.manager.itemStart(t),
                o.src = t,
                o
            },
            setCrossOrigin: function(t) {
                return this.crossOrigin = t,
                this
            },
            setPath: function(t) {
                return this.path = t,
                this
            }
        }),
        Object.assign(Ni.prototype, {
            load: function(t, e, i, n) {
                function r(i) {
                    o.load(t[i], function(t) {
                        a.images[i] = t,
                        s++,
                        6 === s && (a.needsUpdate = !0,
                        e && e(a))
                    }, void 0, n)
                }
                var a = new d
                  , o = new Ui(this.manager);
                o.setCrossOrigin(this.crossOrigin),
                o.setPath(this.path);
                for (var s = 0, c = 0; c < t.length; ++c)
                    r(c);
                return a
            },
            setCrossOrigin: function(t) {
                return this.crossOrigin = t,
                this
            },
            setPath: function(t) {
                return this.path = t,
                this
            }
        }),
        Object.assign(Oi.prototype, {
            load: function(t, e, i, r) {
                var a = new Ui(this.manager);
                a.setCrossOrigin(this.crossOrigin),
                a.setPath(this.path);
                var o = new n;
                return o.image = a.load(t, function() {
                    var i = t.search(/\.(jpg|jpeg)$/) > 0 || 0 === t.search(/^data\:image\/jpeg/);
                    o.format = i ? Bo : zo,
                    o.needsUpdate = !0,
                    void 0 !== e && e(o)
                }, i, r),
                o
            },
            setCrossOrigin: function(t) {
                return this.crossOrigin = t,
                this
            },
            setPath: function(t) {
                return this.path = t,
                this
            }
        }),
        Di.prototype = Object.assign(Object.create(ht.prototype), {
            constructor: Di,
            isLight: !0,
            copy: function(t) {
                return ht.prototype.copy.call(this, t),
                this.color.copy(t.color),
                this.intensity = t.intensity,
                this
            },
            toJSON: function(t) {
                var e = ht.prototype.toJSON.call(this, t);
                return e.object.color = this.color.getHex(),
                e.object.intensity = this.intensity,
                void 0 !== this.groundColor && (e.object.groundColor = this.groundColor.getHex()),
                void 0 !== this.distance && (e.object.distance = this.distance),
                void 0 !== this.angle && (e.object.angle = this.angle),
                void 0 !== this.decay && (e.object.decay = this.decay),
                void 0 !== this.penumbra && (e.object.penumbra = this.penumbra),
                void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()),
                e
            }
        }),
        Fi.prototype = Object.assign(Object.create(Di.prototype), {
            constructor: Fi,
            isHemisphereLight: !0,
            copy: function(t) {
                return Di.prototype.copy.call(this, t),
                this.groundColor.copy(t.groundColor),
                this
            }
        }),
        Object.assign(Bi.prototype, {
            copy: function(t) {
                return this.camera = t.camera.clone(),
                this.bias = t.bias,
                this.radius = t.radius,
                this.mapSize.copy(t.mapSize),
                this
            },
            clone: function() {
                return (new this.constructor).copy(this)
            },
            toJSON: function() {
                var t = {};
                return 0 !== this.bias && (t.bias = this.bias),
                1 !== this.radius && (t.radius = this.radius),
                512 === this.mapSize.x && 512 === this.mapSize.y || (t.mapSize = this.mapSize.toArray()),
                t.camera = this.camera.toJSON(!1).object,
                delete t.camera.matrix,
                t
            }
        }),
        zi.prototype = Object.assign(Object.create(Bi.prototype), {
            constructor: zi,
            isSpotLightShadow: !0,
            update: function(t) {
                var e = this.camera
                  , i = 2 * ws.RAD2DEG * t.angle
                  , n = this.mapSize.width / this.mapSize.height
                  , r = t.distance || e.far;
                i === e.fov && n === e.aspect && r === e.far || (e.fov = i,
                e.aspect = n,
                e.far = r,
                e.updateProjectionMatrix())
            }
        }),
        Gi.prototype = Object.assign(Object.create(Di.prototype), {
            constructor: Gi,
            isSpotLight: !0,
            copy: function(t) {
                return Di.prototype.copy.call(this, t),
                this.distance = t.distance,
                this.angle = t.angle,
                this.penumbra = t.penumbra,
                this.decay = t.decay,
                this.target = t.target.clone(),
                this.shadow = t.shadow.clone(),
                this
            }
        }),
        Hi.prototype = Object.assign(Object.create(Di.prototype), {
            constructor: Hi,
            isPointLight: !0,
            copy: function(t) {
                return Di.prototype.copy.call(this, t),
                this.distance = t.distance,
                this.decay = t.decay,
                this.shadow = t.shadow.clone(),
                this
            }
        }),
        Vi.prototype = Object.assign(Object.create(Bi.prototype), {
            constructor: Vi
        }),
        ki.prototype = Object.assign(Object.create(Di.prototype), {
            constructor: ki,
            isDirectionalLight: !0,
            copy: function(t) {
                return Di.prototype.copy.call(this, t),
                this.target = t.target.clone(),
                this.shadow = t.shadow.clone(),
                this
            }
        }),
        ji.prototype = Object.assign(Object.create(Di.prototype), {
            constructor: ji,
            isAmbientLight: !0
        }),
        Wi.prototype = Object.assign(Object.create(Di.prototype), {
            constructor: Wi,
            isRectAreaLight: !0,
            copy: function(t) {
                return Di.prototype.copy.call(this, t),
                this.width = t.width,
                this.height = t.height,
                this
            },
            toJSON: function(t) {
                var e = Di.prototype.toJSON.call(this, t);
                return e.object.width = this.width,
                e.object.height = this.height,
                e
            }
        });
        var qh = {
            arraySlice: function(t, e, i) {
                return qh.isTypedArray(t) ? new t.constructor(t.subarray(e, void 0 !== i ? i : t.length)) : t.slice(e, i)
            },
            convertArray: function(t, e, i) {
                return !t || !i && t.constructor === e ? t : "number" == typeof e.BYTES_PER_ELEMENT ? new e(t) : Array.prototype.slice.call(t)
            },
            isTypedArray: function(t) {
                return ArrayBuffer.isView(t) && !(t instanceof DataView)
            },
            getKeyframeOrder: function(t) {
                function e(e, i) {
                    return t[e] - t[i]
                }
                for (var i = t.length, n = new Array(i), r = 0; r !== i; ++r)
                    n[r] = r;
                return n.sort(e),
                n
            },
            sortedArray: function(t, e, i) {
                for (var n = t.length, r = new t.constructor(n), a = 0, o = 0; o !== n; ++a)
                    for (var s = i[a] * e, c = 0; c !== e; ++c)
                        r[o++] = t[s + c];
                return r
            },
            flattenJSON: function(t, e, i, n) {
                for (var r = 1, a = t[0]; void 0 !== a && void 0 === a[n]; )
                    a = t[r++];
                if (void 0 !== a) {
                    var o = a[n];
                    if (void 0 !== o)
                        if (Array.isArray(o)) {
                            do
                                o = a[n],
                                void 0 !== o && (e.push(a.time),
                                i.push.apply(i, o)),
                                a = t[r++];
                            while (void 0 !== a)
                        } else if (void 0 !== o.toArray) {
                            do
                                o = a[n],
                                void 0 !== o && (e.push(a.time),
                                o.toArray(i, i.length)),
                                a = t[r++];
                            while (void 0 !== a)
                        } else
                            do
                                o = a[n],
                                void 0 !== o && (e.push(a.time),
                                i.push(o)),
                                a = t[r++];
                            while (void 0 !== a)
                }
            }
        };
        Object.assign(Xi.prototype, {
            evaluate: function(t) {
                var e = this.parameterPositions
                  , i = this._cachedIndex
                  , n = e[i]
                  , r = e[i - 1];
                t: {
                    e: {
                        var a;
                        i: {
                            n: if (!(t < n)) {
                                for (var o = i + 2; ; ) {
                                    if (void 0 === n) {
                                        if (t < r)
                                            break n;
                                        return i = e.length,
                                        this._cachedIndex = i,
                                        this.afterEnd_(i - 1, t, r)
                                    }
                                    if (i === o)
                                        break;
                                    if (r = n,
                                    n = e[++i],
                                    t < n)
                                        break e
                                }
                                a = e.length;
                                break i
                            }
                            {
                                if (t >= r)
                                    break t;
                                var s = e[1];
                                t < s && (i = 2,
                                r = s);
                                for (var o = i - 2; ; ) {
                                    if (void 0 === r)
                                        return this._cachedIndex = 0,
                                        this.beforeStart_(0, t, n);
                                    if (i === o)
                                        break;
                                    if (n = r,
                                    r = e[--i - 1],
                                    t >= r)
                                        break e
                                }
                                a = i,
                                i = 0
                            }
                        }
                        for (; i < a; ) {
                            var c = i + a >>> 1;
                            t < e[c] ? a = c : i = c + 1
                        }
                        if (n = e[i],
                        r = e[i - 1],
                        void 0 === r)
                            return this._cachedIndex = 0,
                            this.beforeStart_(0, t, n);
                        if (void 0 === n)
                            return i = e.length,
                            this._cachedIndex = i,
                            this.afterEnd_(i - 1, r, t)
                    }
                    this._cachedIndex = i,
                    this.intervalChanged_(i, r, n)
                }
                return this.interpolate_(i, r, t, n)
            },
            settings: null ,
            DefaultSettings_: {},
            getSettings_: function() {
                return this.settings || this.DefaultSettings_
            },
            copySampleValue_: function(t) {
                for (var e = this.resultBuffer, i = this.sampleValues, n = this.valueSize, r = t * n, a = 0; a !== n; ++a)
                    e[a] = i[r + a];
                return e
            },
            interpolate_: function(t, e, i, n) {
                throw new Error("call to abstract method")
            },
            intervalChanged_: function(t, e, i) {}
        }),
        //!\ DECLARE ALIAS AFTER assign prototype !
        Object.assign(Xi.prototype, {
            beforeStart_: Xi.prototype.copySampleValue_,
            afterEnd_: Xi.prototype.copySampleValue_
        }),
        qi.prototype = Object.assign(Object.create(Xi.prototype), {
            constructor: qi,
            DefaultSettings_: {
                endingStart: os,
                endingEnd: os
            },
            intervalChanged_: function(t, e, i) {
                var n = this.parameterPositions
                  , r = t - 2
                  , a = t + 1
                  , o = n[r]
                  , s = n[a];
                if (void 0 === o)
                    switch (this.getSettings_().endingStart) {
                    case ss:
                        r = t,
                        o = 2 * e - i;
                        break;
                    case cs:
                        r = n.length - 2,
                        o = e + n[r] - n[r + 1];
                        break;
                    default:
                        r = t,
                        o = i
                    }
                if (void 0 === s)
                    switch (this.getSettings_().endingEnd) {
                    case ss:
                        a = t,
                        s = 2 * i - e;
                        break;
                    case cs:
                        a = 1,
                        s = i + n[1] - n[0];
                        break;
                    default:
                        a = t - 1,
                        s = e
                    }
                var c = .5 * (i - e)
                  , h = this.valueSize;
                this._weightPrev = c / (e - o),
                this._weightNext = c / (s - i),
                this._offsetPrev = r * h,
                this._offsetNext = a * h
            },
            interpolate_: function(t, e, i, n) {
                for (var r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = t * o, c = s - o, h = this._offsetPrev, l = this._offsetNext, u = this._weightPrev, d = this._weightNext, p = (i - e) / (n - e), f = p * p, m = f * p, g = -u * m + 2 * u * f - u * p, v = (1 + u) * m + (-1.5 - 2 * u) * f + (-.5 + u) * p + 1, y = (-1 - d) * m + (1.5 + d) * f + .5 * p, x = d * m - d * f, _ = 0; _ !== o; ++_)
                    r[_] = g * a[h + _] + v * a[c + _] + y * a[s + _] + x * a[l + _];
                return r
            }
        }),
        Yi.prototype = Object.assign(Object.create(Xi.prototype), {
            constructor: Yi,
            interpolate_: function(t, e, i, n) {
                for (var r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = t * o, c = s - o, h = (i - e) / (n - e), l = 1 - h, u = 0; u !== o; ++u)
                    r[u] = a[c + u] * l + a[s + u] * h;
                return r
            }
        }),
        Zi.prototype = Object.assign(Object.create(Xi.prototype), {
            constructor: Zi,
            interpolate_: function(t, e, i, n) {
                return this.copySampleValue_(t - 1)
            }
        });
        var Yh;
        Yh = {
            TimeBufferType: Float32Array,
            ValueBufferType: Float32Array,
            DefaultInterpolation: rs,
            InterpolantFactoryMethodDiscrete: function(t) {
                return new Zi(this.times,this.values,this.getValueSize(),t)
            },
            InterpolantFactoryMethodLinear: function(t) {
                return new Yi(this.times,this.values,this.getValueSize(),t)
            },
            InterpolantFactoryMethodSmooth: function(t) {
                return new qi(this.times,this.values,this.getValueSize(),t)
            },
            setInterpolation: function(t) {
                var e;
                switch (t) {
                case ns:
                    e = this.InterpolantFactoryMethodDiscrete;
                    break;
                case rs:
                    e = this.InterpolantFactoryMethodLinear;
                    break;
                case as:
                    e = this.InterpolantFactoryMethodSmooth
                }
                if (void 0 === e) {
                    var i = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
                    if (void 0 === this.createInterpolant) {
                        if (t === this.DefaultInterpolation)
                            throw new Error(i);
                        this.setInterpolation(this.DefaultInterpolation)
                    }
                    return void console.warn(i)
                }
                this.createInterpolant = e
            },
            getInterpolation: function() {
                switch (this.createInterpolant) {
                case this.InterpolantFactoryMethodDiscrete:
                    return ns;
                case this.InterpolantFactoryMethodLinear:
                    return rs;
                case this.InterpolantFactoryMethodSmooth:
                    return as
                }
            },
            getValueSize: function() {
                return this.values.length / this.times.length
            },
            shift: function(t) {
                if (0 !== t)
                    for (var e = this.times, i = 0, n = e.length; i !== n; ++i)
                        e[i] += t;
                return this
            },
            scale: function(t) {
                if (1 !== t)
                    for (var e = this.times, i = 0, n = e.length; i !== n; ++i)
                        e[i] *= t;
                return this
            },
            trim: function(t, e) {
                for (var i = this.times, n = i.length, r = 0, a = n - 1; r !== n && i[r] < t; )
                    ++r;
                for (; a !== -1 && i[a] > e; )
                    --a;
                if (++a,
                0 !== r || a !== n) {
                    r >= a && (a = Math.max(a, 1),
                    r = a - 1);
                    var o = this.getValueSize();
                    this.times = qh.arraySlice(i, r, a),
                    this.values = qh.arraySlice(this.values, r * o, a * o)
                }
                return this
            },
            validate: function() {
                var t = !0
                  , e = this.getValueSize();
                e - Math.floor(e) !== 0 && (console.error("invalid value size in track", this),
                t = !1);
                var i = this.times
                  , n = this.values
                  , r = i.length;
                0 === r && (console.error("track is empty", this),
                t = !1);
                for (var a = null , o = 0; o !== r; o++) {
                    var s = i[o];
                    if ("number" == typeof s && isNaN(s)) {
                        console.error("time is not a valid number", this, o, s),
                        t = !1;
                        break
                    }
                    if (null !== a && a > s) {
                        console.error("out of order keys", this, o, s, a),
                        t = !1;
                        break
                    }
                    a = s
                }
                if (void 0 !== n && qh.isTypedArray(n))
                    for (var o = 0, c = n.length; o !== c; ++o) {
                        var h = n[o];
                        if (isNaN(h)) {
                            console.error("value is not a valid number", this, o, h),
                            t = !1;
                            break
                        }
                    }
                return t
            },
            optimize: function() {
                for (var t = this.times, e = this.values, i = this.getValueSize(), n = this.getInterpolation() === as, r = 1, a = t.length - 1, o = 1; o < a; ++o) {
                    var s = !1
                      , c = t[o]
                      , h = t[o + 1];
                    if (c !== h && (1 !== o || c !== c[0]))
                        if (n)
                            s = !0;
                        else
                            for (var l = o * i, u = l - i, d = l + i, p = 0; p !== i; ++p) {
                                var f = e[l + p];
                                if (f !== e[u + p] || f !== e[d + p]) {
                                    s = !0;
                                    break
                                }
                            }
                    if (s) {
                        if (o !== r) {
                            t[r] = t[o];
                            for (var m = o * i, g = r * i, p = 0; p !== i; ++p)
                                e[g + p] = e[m + p]
                        }
                        ++r
                    }
                }
                if (a > 0) {
                    t[r] = t[a];
                    for (var m = a * i, g = r * i, p = 0; p !== i; ++p)
                        e[g + p] = e[m + p];
                    ++r
                }
                return r !== t.length && (this.times = qh.arraySlice(t, 0, r),
                this.values = qh.arraySlice(e, 0, r * i)),
                this
            }
        },
        Qi.prototype = Object.assign(Object.create(Yh), {
            constructor: Qi,
            ValueTypeName: "vector"
        }),
        Ki.prototype = Object.assign(Object.create(Xi.prototype), {
            constructor: Ki,
            interpolate_: function(t, e, i, n) {
                for (var r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = t * o, h = (i - e) / (n - e), l = s + o; s !== l; s += 4)
                    c.slerpFlat(r, 0, a, s - o, a, s, h);
                return r
            }
        }),
        $i.prototype = Object.assign(Object.create(Yh), {
            constructor: $i,
            ValueTypeName: "quaternion",
            DefaultInterpolation: rs,
            InterpolantFactoryMethodLinear: function(t) {
                return new Ki(this.times,this.values,this.getValueSize(),t)
            },
            InterpolantFactoryMethodSmooth: void 0
        }),
        tn.prototype = Object.assign(Object.create(Yh), {
            constructor: tn,
            ValueTypeName: "number"
        }),
        en.prototype = Object.assign(Object.create(Yh), {
            constructor: en,
            ValueTypeName: "string",
            ValueBufferType: Array,
            DefaultInterpolation: ns,
            InterpolantFactoryMethodLinear: void 0,
            InterpolantFactoryMethodSmooth: void 0
        }),
        nn.prototype = Object.assign(Object.create(Yh), {
            constructor: nn,
            ValueTypeName: "bool",
            ValueBufferType: Array,
            DefaultInterpolation: ns,
            InterpolantFactoryMethodLinear: void 0,
            InterpolantFactoryMethodSmooth: void 0
        }),
        rn.prototype = Object.assign(Object.create(Yh), {
            constructor: rn,
            ValueTypeName: "color"
        }),
        an.prototype = Yh,
        Yh.constructor = an,
        Object.assign(an, {
            parse: function(t) {
                if (void 0 === t.type)
                    throw new Error("track type undefined, can not parse");
                var e = an._getTrackTypeForValueTypeName(t.type);
                if (void 0 === t.times) {
                    var i = []
                      , n = [];
                    qh.flattenJSON(t.keys, i, n, "value"),
                    t.times = i,
                    t.values = n
                }
                return void 0 !== e.parse ? e.parse(t) : new e(t.name,t.times,t.values,t.interpolation)
            },
            toJSON: function(t) {
                var e, i = t.constructor;
                if (void 0 !== i.toJSON)
                    e = i.toJSON(t);
                else {
                    e = {
                        name: t.name,
                        times: qh.convertArray(t.times, Array),
                        values: qh.convertArray(t.values, Array)
                    };
                    var n = t.getInterpolation();
                    n !== t.DefaultInterpolation && (e.interpolation = n)
                }
                return e.type = t.ValueTypeName,
                e
            },
            _getTrackTypeForValueTypeName: function(t) {
                switch (t.toLowerCase()) {
                case "scalar":
                case "double":
                case "float":
                case "number":
                case "integer":
                    return tn;
                case "vector":
                case "vector2":
                case "vector3":
                case "vector4":
                    return Qi;
                case "color":
                    return rn;
                case "quaternion":
                    return $i;
                case "bool":
                case "boolean":
                    return nn;
                case "string":
                    return en
                }
                throw new Error("Unsupported typeName: " + t)
            }
        }),
        Object.assign(on, {
            parse: function(t) {
                for (var e = [], i = t.tracks, n = 1 / (t.fps || 1), r = 0, a = i.length; r !== a; ++r)
                    e.push(an.parse(i[r]).scale(n));
                return new on(t.name,t.duration,e)
            },
            toJSON: function(t) {
                for (var e = [], i = t.tracks, n = {
                    name: t.name,
                    duration: t.duration,
                    tracks: e
                }, r = 0, a = i.length; r !== a; ++r)
                    e.push(an.toJSON(i[r]));
                return n
            },
            CreateFromMorphTargetSequence: function(t, e, i, n) {
                for (var r = e.length, a = [], o = 0; o < r; o++) {
                    var s = []
                      , c = [];
                    s.push((o + r - 1) % r, o, (o + 1) % r),
                    c.push(0, 1, 0);
                    var h = qh.getKeyframeOrder(s);
                    s = qh.sortedArray(s, 1, h),
                    c = qh.sortedArray(c, 1, h),
                    n || 0 !== s[0] || (s.push(r),
                    c.push(c[0])),
                    a.push(new tn(".morphTargetInfluences[" + e[o].name + "]",s,c).scale(1 / i))
                }
                return new on(t,-1,a)
            },
            findByName: function(t, e) {
                var i = t;
                if (!Array.isArray(t)) {
                    var n = t;
                    i = n.geometry && n.geometry.animations || n.animations
                }
                for (var r = 0; r < i.length; r++)
                    if (i[r].name === e)
                        return i[r];
                return null
            },
            CreateClipsFromMorphTargetSequences: function(t, e, i) {
                for (var n = {}, r = /^([\w-]*?)([\d]+)$/, a = 0, o = t.length; a < o; a++) {
                    var s = t[a]
                      , c = s.name.match(r);
                    if (c && c.length > 1) {
                        var h = c[1]
                          , l = n[h];
                        l || (n[h] = l = []),
                        l.push(s)
                    }
                }
                var u = [];
                for (var h in n)
                    u.push(on.CreateFromMorphTargetSequence(h, n[h], e, i));
                return u
            },
            parseAnimation: function(t, e) {
                if (!t)
                    return console.error("  no animation in JSONLoader data"),
                    null ;
                for (var i = function(t, e, i, n, r) {
                    if (0 !== i.length) {
                        var a = []
                          , o = [];
                        qh.flattenJSON(i, a, o, n),
                        0 !== a.length && r.push(new t(e,a,o))
                    }
                }
                , n = [], r = t.name || "default", a = t.length || -1, o = t.fps || 30, s = t.hierarchy || [], c = 0; c < s.length; c++) {
                    var h = s[c].keys;
                    if (h && 0 !== h.length)
                        if (h[0].morphTargets) {
                            for (var l = {}, u = 0; u < h.length; u++)
                                if (h[u].morphTargets)
                                    for (var d = 0; d < h[u].morphTargets.length; d++)
                                        l[h[u].morphTargets[d]] = -1;
                            for (var p in l) {
                                for (var f = [], m = [], d = 0; d !== h[u].morphTargets.length; ++d) {
                                    var g = h[u];
                                    f.push(g.time),
                                    m.push(g.morphTarget === p ? 1 : 0)
                                }
                                n.push(new tn(".morphTargetInfluence[" + p + "]",f,m))
                            }
                            a = l.length * (o || 1)
                        } else {
                            var v = ".bones[" + e[c].name + "]";
                            i(Qi, v + ".position", h, "pos", n),
                            i($i, v + ".quaternion", h, "rot", n),
                            i(Qi, v + ".scale", h, "scl", n)
                        }
                }
                if (0 === n.length)
                    return null ;
                var y = new on(r,a,n);
                return y
            }
        }),
        Object.assign(on.prototype, {
            resetDuration: function() {
                for (var t = this.tracks, e = 0, i = 0, n = t.length; i !== n; ++i) {
                    var r = this.tracks[i];
                    e = Math.max(e, r.times[r.times.length - 1])
                }
                this.duration = e
            },
            trim: function() {
                for (var t = 0; t < this.tracks.length; t++)
                    this.tracks[t].trim(0, this.duration);
                return this
            },
            optimize: function() {
                for (var t = 0; t < this.tracks.length; t++)
                    this.tracks[t].optimize();
                return this
            }
        }),
        Object.assign(sn.prototype, {
            load: function(t, e, i, n) {
                var r = this
                  , a = new Pi(r.manager);
                a.setResponseType("json"),
                a.load(t, function(t) {
                    e(r.parse(t))
                }, i, n)
            },
            setTextures: function(t) {
                this.textures = t
            },
            parse: function(t) {
                function e(t) {
                    return void 0 === n[t] && console.warn("THREE.MaterialLoader: Undefined texture", t),
                    n[t]
                }
                var n = this.textures
                  , r = new jh[t.type];
                if (void 0 !== t.uuid && (r.uuid = t.uuid),
                void 0 !== t.name && (r.name = t.name),
                void 0 !== t.color && r.color.setHex(t.color),
                void 0 !== t.roughness && (r.roughness = t.roughness),
                void 0 !== t.metalness && (r.metalness = t.metalness),
                void 0 !== t.emissive && r.emissive.setHex(t.emissive),
                void 0 !== t.specular && r.specular.setHex(t.specular),
                void 0 !== t.shininess && (r.shininess = t.shininess),
                void 0 !== t.clearCoat && (r.clearCoat = t.clearCoat),
                void 0 !== t.clearCoatRoughness && (r.clearCoatRoughness = t.clearCoatRoughness),
                void 0 !== t.uniforms && (r.uniforms = t.uniforms),
                void 0 !== t.vertexShader && (r.vertexShader = t.vertexShader),
                void 0 !== t.fragmentShader && (r.fragmentShader = t.fragmentShader),
                void 0 !== t.vertexColors && (r.vertexColors = t.vertexColors),
                void 0 !== t.fog && (r.fog = t.fog),
                void 0 !== t.shading && (r.shading = t.shading),
                void 0 !== t.blending && (r.blending = t.blending),
                void 0 !== t.side && (r.side = t.side),
                void 0 !== t.opacity && (r.opacity = t.opacity),
                void 0 !== t.transparent && (r.transparent = t.transparent),
                void 0 !== t.alphaTest && (r.alphaTest = t.alphaTest),
                void 0 !== t.depthTest && (r.depthTest = t.depthTest),
                void 0 !== t.depthWrite && (r.depthWrite = t.depthWrite),
                void 0 !== t.colorWrite && (r.colorWrite = t.colorWrite),
                void 0 !== t.wireframe && (r.wireframe = t.wireframe),
                void 0 !== t.wireframeLinewidth && (r.wireframeLinewidth = t.wireframeLinewidth),
                void 0 !== t.wireframeLinecap && (r.wireframeLinecap = t.wireframeLinecap),
                void 0 !== t.wireframeLinejoin && (r.wireframeLinejoin = t.wireframeLinejoin),
                void 0 !== t.skinning && (r.skinning = t.skinning),
                void 0 !== t.morphTargets && (r.morphTargets = t.morphTargets),
                void 0 !== t.size && (r.size = t.size),
                void 0 !== t.sizeAttenuation && (r.sizeAttenuation = t.sizeAttenuation),
                void 0 !== t.map && (r.map = e(t.map)),
                void 0 !== t.alphaMap && (r.alphaMap = e(t.alphaMap),
                r.transparent = !0),
                void 0 !== t.bumpMap && (r.bumpMap = e(t.bumpMap)),
                void 0 !== t.bumpScale && (r.bumpScale = t.bumpScale),
                void 0 !== t.normalMap && (r.normalMap = e(t.normalMap)),
                void 0 !== t.normalScale) {
                    var a = t.normalScale;
                    Array.isArray(a) === !1 && (a = [a, a]),
                    r.normalScale = (new i).fromArray(a)
                }
                return void 0 !== t.displacementMap && (r.displacementMap = e(t.displacementMap)),
                void 0 !== t.displacementScale && (r.displacementScale = t.displacementScale),
                void 0 !== t.displacementBias && (r.displacementBias = t.displacementBias),
                void 0 !== t.roughnessMap && (r.roughnessMap = e(t.roughnessMap)),
                void 0 !== t.metalnessMap && (r.metalnessMap = e(t.metalnessMap)),
                void 0 !== t.emissiveMap && (r.emissiveMap = e(t.emissiveMap)),
                void 0 !== t.emissiveIntensity && (r.emissiveIntensity = t.emissiveIntensity),
                void 0 !== t.specularMap && (r.specularMap = e(t.specularMap)),
                void 0 !== t.envMap && (r.envMap = e(t.envMap)),
                void 0 !== t.reflectivity && (r.reflectivity = t.reflectivity),
                void 0 !== t.lightMap && (r.lightMap = e(t.lightMap)),
                void 0 !== t.lightMapIntensity && (r.lightMapIntensity = t.lightMapIntensity),
                void 0 !== t.aoMap && (r.aoMap = e(t.aoMap)),
                void 0 !== t.aoMapIntensity && (r.aoMapIntensity = t.aoMapIntensity),
                void 0 !== t.gradientMap && (r.gradientMap = e(t.gradientMap)),
                r
            }
        }),
        Object.assign(cn.prototype, {
            load: function(t, e, i, n) {
                var r = this
                  , a = new Pi(r.manager);
                a.setResponseType("json"),
                a.load(t, function(t) {
                    e(r.parse(t))
                }, i, n)
            },
            parse: function(t) {
                var e = new Lt
                  , i = t.data.index;
                if (void 0 !== i) {
                    var n = new Zh[i.type](i.array);
                    e.setIndex(new ft(n,1))
                }
                var r = t.data.attributes;
                for (var a in r) {
                    var o = r[a]
                      , n = new Zh[o.type](o.array);
                    e.addAttribute(a, new ft(n,o.itemSize,o.normalized))
                }
                var s = t.data.groups || t.data.drawcalls || t.data.offsets;
                if (void 0 !== s)
                    for (var c = 0, l = s.length; c !== l; ++c) {
                        var u = s[c];
                        e.addGroup(u.start, u.count, u.materialIndex)
                    }
                var d = t.data.boundingSphere;
                if (void 0 !== d) {
                    var p = new h;
                    void 0 !== d.center && p.fromArray(d.center),
                    e.boundingSphere = new et(p,d.radius)
                }
                return e
            }
        });
        var Zh = {
            Int8Array: Int8Array,
            Uint8Array: Uint8Array,
            Uint8ClampedArray: Uint8ClampedArray,
            Int16Array: Int16Array,
            Uint16Array: Uint16Array,
            Int32Array: Int32Array,
            Uint32Array: Uint32Array,
            Float32Array: Float32Array,
            Float64Array: Float64Array
        };
        hn.Handlers = {
            handlers: [],
            add: function(t, e) {
                this.handlers.push(t, e)
            },
            get: function(t) {
                for (var e = this.handlers, i = 0, n = e.length; i < n; i += 2) {
                    var r = e[i]
                      , a = e[i + 1];
                    if (r.test(t))
                        return a
                }
                return null
            }
        },
        Object.assign(hn.prototype, {
            crossOrigin: void 0,
            extractUrlBase: function(t) {
                var e = t.split("/");
                return 1 === e.length ? "./" : (e.pop(),
                e.join("/") + "/")
            },
            initMaterials: function(t, e, i) {
                for (var n = [], r = 0; r < t.length; ++r)
                    n[r] = this.createMaterial(t[r], e, i);
                return n
            },
            createMaterial: function() {
                var t = {
                    NoBlending: Ma,
                    NormalBlending: Ea,
                    AdditiveBlending: Ta,
                    SubtractiveBlending: Sa,
                    MultiplyBlending: Aa,
                    CustomBlending: La
                }
                  , e = new q
                  , i = new Oi
                  , n = new sn;
                return function(r, a, o) {
                    function s(t, e, n, r, s) {
                        var h, l = a + t, u = hn.Handlers.get(l);
                        null !== u ? h = u.load(l) : (i.setCrossOrigin(o),
                        h = i.load(l)),
                        void 0 !== e && (h.repeat.fromArray(e),
                        1 !== e[0] && (h.wrapS = go),
                        1 !== e[1] && (h.wrapT = go)),
                        void 0 !== n && h.offset.fromArray(n),
                        void 0 !== r && ("repeat" === r[0] && (h.wrapS = go),
                        "mirror" === r[0] && (h.wrapS = yo),
                        "repeat" === r[1] && (h.wrapT = go),
                        "mirror" === r[1] && (h.wrapT = yo)),
                        void 0 !== s && (h.anisotropy = s);
                        var d = ws.generateUUID();
                        return c[d] = h,
                        d
                    }
                    var c = {}
                      , h = {
                        uuid: ws.generateUUID(),
                        type: "MeshLambertMaterial"
                    };
                    for (var l in r) {
                        var u = r[l];
                        switch (l) {
                        case "DbgColor":
                        case "DbgIndex":
                        case "opticalDensity":
                        case "illumination":
                            break;
                        case "DbgName":
                            h.name = u;
                            break;
                        case "blending":
                            h.blending = t[u];
                            break;
                        case "colorAmbient":
                        case "mapAmbient":
                            console.warn("THREE.Loader.createMaterial:", l, "is no longer supported.");
                            break;
                        case "colorDiffuse":
                            h.color = e.fromArray(u).getHex();
                            break;
                        case "colorSpecular":
                            h.specular = e.fromArray(u).getHex();
                            break;
                        case "colorEmissive":
                            h.emissive = e.fromArray(u).getHex();
                            break;
                        case "specularCoef":
                            h.shininess = u;
                            break;
                        case "shading":
                            "basic" === u.toLowerCase() && (h.type = "MeshBasicMaterial"),
                            "phong" === u.toLowerCase() && (h.type = "MeshPhongMaterial"),
                            "standard" === u.toLowerCase() && (h.type = "MeshStandardMaterial");
                            break;
                        case "mapDiffuse":
                            h.map = s(u, r.mapDiffuseRepeat, r.mapDiffuseOffset, r.mapDiffuseWrap, r.mapDiffuseAnisotropy);
                            break;
                        case "mapDiffuseRepeat":
                        case "mapDiffuseOffset":
                        case "mapDiffuseWrap":
                        case "mapDiffuseAnisotropy":
                            break;
                        case "mapEmissive":
                            h.emissiveMap = s(u, r.mapEmissiveRepeat, r.mapEmissiveOffset, r.mapEmissiveWrap, r.mapEmissiveAnisotropy);
                            break;
                        case "mapEmissiveRepeat":
                        case "mapEmissiveOffset":
                        case "mapEmissiveWrap":
                        case "mapEmissiveAnisotropy":
                            break;
                        case "mapLight":
                            h.lightMap = s(u, r.mapLightRepeat, r.mapLightOffset, r.mapLightWrap, r.mapLightAnisotropy);
                            break;
                        case "mapLightRepeat":
                        case "mapLightOffset":
                        case "mapLightWrap":
                        case "mapLightAnisotropy":
                            break;
                        case "mapAO":
                            h.aoMap = s(u, r.mapAORepeat, r.mapAOOffset, r.mapAOWrap, r.mapAOAnisotropy);
                            break;
                        case "mapAORepeat":
                        case "mapAOOffset":
                        case "mapAOWrap":
                        case "mapAOAnisotropy":
                            break;
                        case "mapBump":
                            h.bumpMap = s(u, r.mapBumpRepeat, r.mapBumpOffset, r.mapBumpWrap, r.mapBumpAnisotropy);
                            break;
                        case "mapBumpScale":
                            h.bumpScale = u;
                            break;
                        case "mapBumpRepeat":
                        case "mapBumpOffset":
                        case "mapBumpWrap":
                        case "mapBumpAnisotropy":
                            break;
                        case "mapNormal":
                            h.normalMap = s(u, r.mapNormalRepeat, r.mapNormalOffset, r.mapNormalWrap, r.mapNormalAnisotropy);
                            break;
                        case "mapNormalFactor":
                            h.normalScale = [u, u];
                            break;
                        case "mapNormalRepeat":
                        case "mapNormalOffset":
                        case "mapNormalWrap":
                        case "mapNormalAnisotropy":
                            break;
                        case "mapSpecular":
                            h.specularMap = s(u, r.mapSpecularRepeat, r.mapSpecularOffset, r.mapSpecularWrap, r.mapSpecularAnisotropy);
                            break;
                        case "mapSpecularRepeat":
                        case "mapSpecularOffset":
                        case "mapSpecularWrap":
                        case "mapSpecularAnisotropy":
                            break;
                        case "mapMetalness":
                            h.metalnessMap = s(u, r.mapMetalnessRepeat, r.mapMetalnessOffset, r.mapMetalnessWrap, r.mapMetalnessAnisotropy);
                            break;
                        case "mapMetalnessRepeat":
                        case "mapMetalnessOffset":
                        case "mapMetalnessWrap":
                        case "mapMetalnessAnisotropy":
                            break;
                        case "mapRoughness":
                            h.roughnessMap = s(u, r.mapRoughnessRepeat, r.mapRoughnessOffset, r.mapRoughnessWrap, r.mapRoughnessAnisotropy);
                            break;
                        case "mapRoughnessRepeat":
                        case "mapRoughnessOffset":
                        case "mapRoughnessWrap":
                        case "mapRoughnessAnisotropy":
                            break;
                        case "mapAlpha":
                            h.alphaMap = s(u, r.mapAlphaRepeat, r.mapAlphaOffset, r.mapAlphaWrap, r.mapAlphaAnisotropy);
                            break;
                        case "mapAlphaRepeat":
                        case "mapAlphaOffset":
                        case "mapAlphaWrap":
                        case "mapAlphaAnisotropy":
                            break;
                        case "flipSided":
                            h.side = ga;
                            break;
                        case "doubleSided":
                            h.side = va;
                            break;
                        case "transparency":
                            console.warn("THREE.Loader.createMaterial: transparency has been renamed to opacity"),
                            h.opacity = u;
                            break;
                        case "depthTest":
                        case "depthWrite":
                        case "colorWrite":
                        case "opacity":
                        case "reflectivity":
                        case "transparent":
                        case "visible":
                        case "wireframe":
                            h[l] = u;
                            break;
                        case "vertexColors":
                            u === !0 && (h.vertexColors = wa),
                            "face" === u && (h.vertexColors = ba);
                            break;
                        default:
                            console.error("THREE.Loader.createMaterial: Unsupported", l, u)
                        }
                    }
                    return "MeshBasicMaterial" === h.type && delete h.emissive,
                    "MeshPhongMaterial" !== h.type && delete h.specular,
                    h.opacity < 1 && (h.transparent = !0),
                    n.setTextures(c),
                    n.parse(h)
                }
            }()
        }),
        Object.assign(ln.prototype, {
            load: function(t, e, i, n) {
                var r = this
                  , a = this.texturePath && "string" == typeof this.texturePath ? this.texturePath : hn.prototype.extractUrlBase(t)
                  , o = new Pi(this.manager);
                o.setResponseType("json"),
                o.setWithCredentials(this.withCredentials),
                o.load(t, function(i) {
                    var n = i.metadata;
                    if (void 0 !== n) {
                        var o = n.type;
                        if (void 0 !== o) {
                            if ("object" === o.toLowerCase())
                                return void console.error("THREE.JSONLoader: " + t + " should be loaded with THREE.ObjectLoader instead.");
                            if ("scene" === o.toLowerCase())
                                return void console.error("THREE.JSONLoader: " + t + " should be loaded with THREE.SceneLoader instead.")
                        }
                    }
                    var s = r.parse(i, a);
                    e(s.geometry, s.materials)
                }, i, n)
            },
            setTexturePath: function(t) {
                this.texturePath = t
            },
            parse: function() {
                function t(t, e) {
                    function n(t, e) {
                        return t & 1 << e
                    }
                    var r, a, o, s, c, l, u, d, p, f, m, g, v, y, x, _, b, w, M, E, T, S, A, L, R, P, C, I = t.faces, U = t.vertices, N = t.normals, O = t.colors, D = t.scale, F = 0;
                    if (void 0 !== t.uvs) {
                        for (r = 0; r < t.uvs.length; r++)
                            t.uvs[r].length && F++;
                        for (r = 0; r < F; r++)
                            e.faceVertexUvs[r] = []
                    }
                    for (s = 0,
                    c = U.length; s < c; )
                        w = new h,
                        w.x = U[s++] * D,
                        w.y = U[s++] * D,
                        w.z = U[s++] * D,
                        e.vertices.push(w);
                    for (s = 0,
                    c = I.length; s < c; )
                        if (f = I[s++],
                        m = n(f, 0),
                        g = n(f, 1),
                        v = n(f, 3),
                        y = n(f, 4),
                        x = n(f, 5),
                        _ = n(f, 6),
                        b = n(f, 7),
                        m) {
                            if (E = new dt,
                            E.a = I[s],
                            E.b = I[s + 1],
                            E.c = I[s + 3],
                            T = new dt,
                            T.a = I[s + 1],
                            T.b = I[s + 2],
                            T.c = I[s + 3],
                            s += 4,
                            g && (p = I[s++],
                            E.materialIndex = p,
                            T.materialIndex = p),
                            o = e.faces.length,
                            v)
                                for (r = 0; r < F; r++)
                                    for (L = t.uvs[r],
                                    e.faceVertexUvs[r][o] = [],
                                    e.faceVertexUvs[r][o + 1] = [],
                                    a = 0; a < 4; a++)
                                        d = I[s++],
                                        P = L[2 * d],
                                        C = L[2 * d + 1],
                                        R = new i(P,C),
                                        2 !== a && e.faceVertexUvs[r][o].push(R),
                                        0 !== a && e.faceVertexUvs[r][o + 1].push(R);
                            if (y && (u = 3 * I[s++],
                            E.normal.set(N[u++], N[u++], N[u]),
                            T.normal.copy(E.normal)),
                            x)
                                for (r = 0; r < 4; r++)
                                    u = 3 * I[s++],
                                    A = new h(N[u++],N[u++],N[u]),
                                    2 !== r && E.vertexNormals.push(A),
                                    0 !== r && T.vertexNormals.push(A);
                            if (_ && (l = I[s++],
                            S = O[l],
                            E.color.setHex(S),
                            T.color.setHex(S)),
                            b)
                                for (r = 0; r < 4; r++)
                                    l = I[s++],
                                    S = O[l],
                                    2 !== r && E.vertexColors.push(new q(S)),
                                    0 !== r && T.vertexColors.push(new q(S));
                            e.faces.push(E),
                            e.faces.push(T)
                        } else {
                            if (M = new dt,
                            M.a = I[s++],
                            M.b = I[s++],
                            M.c = I[s++],
                            g && (p = I[s++],
                            M.materialIndex = p),
                            o = e.faces.length,
                            v)
                                for (r = 0; r < F; r++)
                                    for (L = t.uvs[r],
                                    e.faceVertexUvs[r][o] = [],
                                    a = 0; a < 3; a++)
                                        d = I[s++],
                                        P = L[2 * d],
                                        C = L[2 * d + 1],
                                        R = new i(P,C),
                                        e.faceVertexUvs[r][o].push(R);
                            if (y && (u = 3 * I[s++],
                            M.normal.set(N[u++], N[u++], N[u])),
                            x)
                                for (r = 0; r < 3; r++)
                                    u = 3 * I[s++],
                                    A = new h(N[u++],N[u++],N[u]),
                                    M.vertexNormals.push(A);
                            if (_ && (l = I[s++],
                            M.color.setHex(O[l])),
                            b)
                                for (r = 0; r < 3; r++)
                                    l = I[s++],
                                    M.vertexColors.push(new q(O[l]));
                            e.faces.push(M)
                        }
                }
                function e(t, e) {
                    var i = void 0 !== t.influencesPerVertex ? t.influencesPerVertex : 2;
                    if (t.skinWeights)
                        for (var n = 0, a = t.skinWeights.length; n < a; n += i) {
                            var o = t.skinWeights[n]
                              , s = i > 1 ? t.skinWeights[n + 1] : 0
                              , c = i > 2 ? t.skinWeights[n + 2] : 0
                              , h = i > 3 ? t.skinWeights[n + 3] : 0;
                            e.skinWeights.push(new r(o,s,c,h))
                        }
                    if (t.skinIndices)
                        for (var n = 0, a = t.skinIndices.length; n < a; n += i) {
                            var l = t.skinIndices[n]
                              , u = i > 1 ? t.skinIndices[n + 1] : 0
                              , d = i > 2 ? t.skinIndices[n + 2] : 0
                              , p = i > 3 ? t.skinIndices[n + 3] : 0;
                            e.skinIndices.push(new r(l,u,d,p))
                        }
                    e.bones = t.bones,
                    e.bones && e.bones.length > 0 && (e.skinWeights.length !== e.skinIndices.length || e.skinIndices.length !== e.vertices.length) && console.warn("When skinning, number of vertices (" + e.vertices.length + "), skinIndices (" + e.skinIndices.length + "), and skinWeights (" + e.skinWeights.length + ") should match.")
                }
                function n(t, e) {
                    var i = t.scale;
                    if (void 0 !== t.morphTargets)
                        for (var n = 0, r = t.morphTargets.length; n < r; n++) {
                            e.morphTargets[n] = {},
                            e.morphTargets[n].name = t.morphTargets[n].name,
                            e.morphTargets[n].vertices = [];
                            for (var a = e.morphTargets[n].vertices, o = t.morphTargets[n].vertices, s = 0, c = o.length; s < c; s += 3) {
                                var l = new h;
                                l.x = o[s] * i,
                                l.y = o[s + 1] * i,
                                l.z = o[s + 2] * i,
                                a.push(l)
                            }
                        }
                    if (void 0 !== t.morphColors && t.morphColors.length > 0) {
                        console.warn('THREE.JSONLoader: "morphColors" no longer supported. Using them as face colors.');
                        for (var u = e.faces, d = t.morphColors[0].colors, n = 0, r = u.length; n < r; n++)
                            u[n].color.fromArray(d, 3 * n)
                    }
                }
                function a(t, e) {
                    var i = []
                      , n = [];
                    void 0 !== t.animation && n.push(t.animation),
                    void 0 !== t.animations && (t.animations.length ? n = n.concat(t.animations) : n.push(t.animations));
                    for (var r = 0; r < n.length; r++) {
                        var a = on.parseAnimation(n[r], e.bones);
                        a && i.push(a)
                    }
                    if (e.morphTargets) {
                        var o = on.CreateClipsFromMorphTargetSequences(e.morphTargets, 10);
                        i = i.concat(o)
                    }
                    i.length > 0 && (e.animations = i)
                }
                return function(i, r) {
                    void 0 !== i.data && (i = i.data),
                    void 0 !== i.scale ? i.scale = 1 / i.scale : i.scale = 1;
                    var o = new At;
                    if (t(i, o),
                    e(i, o),
                    n(i, o),
                    a(i, o),
                    o.computeFaceNormals(),
                    o.computeBoundingSphere(),
                    void 0 === i.materials || 0 === i.materials.length)
                        return {
                            geometry: o
                        };
                    var s = hn.prototype.initMaterials(i.materials, r, this.crossOrigin);
                    return {
                        geometry: o,
                        materials: s
                    }
                }
            }()
        }),
        Object.assign(un.prototype, {
            load: function(t, e, i, n) {
                "" === this.texturePath && (this.texturePath = t.substring(0, t.lastIndexOf("/") + 1));
                var r = this
                  , a = new Pi(r.manager);
                a.load(t, function(i) {
                    var a = null ;
                    try {
                        a = JSON.parse(i)
                    } catch (e) {
                        return void 0 !== n && n(e),
                        void console.error("THREE:ObjectLoader: Can't parse " + t + ".", e.message)
                    }
                    var o = a.metadata;
                    return void 0 === o || void 0 === o.type || "geometry" === o.type.toLowerCase() ? void console.error("THREE.ObjectLoader: Can't load " + t + ". Use THREE.JSONLoader instead.") : void r.parse(a, e)
                }, i, n)
            },
            setTexturePath: function(t) {
                this.texturePath = t
            },
            setCrossOrigin: function(t) {
                this.crossOrigin = t
            },
            parse: function(t, e) {
                var i = this.parseGeometries(t.geometries)
                  , n = this.parseImages(t.images, function() {
                    void 0 !== e && e(o)
                })
                  , r = this.parseTextures(t.textures, n)
                  , a = this.parseMaterials(t.materials, r)
                  , o = this.parseObject(t.object, i, a);
                return t.animations && (o.animations = this.parseAnimations(t.animations)),
                void 0 !== t.images && 0 !== t.images.length || void 0 !== e && e(o),
                o
            },
            parseGeometries: function(t) {
                var e = {};
                if (void 0 !== t)
                    for (var i = new ln, n = new cn, r = 0, a = t.length; r < a; r++) {
                        var o, s = t[r];
                        switch (s.type) {
                        case "PlaneGeometry":
                        case "PlaneBufferGeometry":
                            o = new kh[s.type](s.width,s.height,s.widthSegments,s.heightSegments);
                            break;
                        case "BoxGeometry":
                        case "BoxBufferGeometry":
                        case "CubeGeometry":
                            o = new kh[s.type](s.width,s.height,s.depth,s.widthSegments,s.heightSegments,s.depthSegments);
                            break;
                        case "CircleGeometry":
                        case "CircleBufferGeometry":
                            o = new kh[s.type](s.radius,s.segments,s.thetaStart,s.thetaLength);
                            break;
                        case "CylinderGeometry":
                        case "CylinderBufferGeometry":
                            o = new kh[s.type](s.radiusTop,s.radiusBottom,s.height,s.radialSegments,s.heightSegments,s.openEnded,s.thetaStart,s.thetaLength);
                            break;
                        case "ConeGeometry":
                        case "ConeBufferGeometry":
                            o = new kh[s.type](s.radius,s.height,s.radialSegments,s.heightSegments,s.openEnded,s.thetaStart,s.thetaLength);
                            break;
                        case "SphereGeometry":
                        case "SphereBufferGeometry":
                            o = new kh[s.type](s.radius,s.widthSegments,s.heightSegments,s.phiStart,s.phiLength,s.thetaStart,s.thetaLength);
                            break;
                        case "DodecahedronGeometry":
                        case "IcosahedronGeometry":
                        case "OctahedronGeometry":
                        case "TetrahedronGeometry":
                            o = new kh[s.type](s.radius,s.detail);
                            break;
                        case "RingGeometry":
                        case "RingBufferGeometry":
                            o = new kh[s.type](s.innerRadius,s.outerRadius,s.thetaSegments,s.phiSegments,s.thetaStart,s.thetaLength);
                            break;
                        case "TorusGeometry":
                        case "TorusBufferGeometry":
                            o = new kh[s.type](s.radius,s.tube,s.radialSegments,s.tubularSegments,s.arc);
                            break;
                        case "TorusKnotGeometry":
                        case "TorusKnotBufferGeometry":
                            o = new kh[s.type](s.radius,s.tube,s.tubularSegments,s.radialSegments,s.p,s.q);
                            break;
                        case "LatheGeometry":
                        case "LatheBufferGeometry":
                            o = new kh[s.type](s.points,s.segments,s.phiStart,s.phiLength);
                            break;
                        case "BufferGeometry":
                            o = n.parse(s);
                            break;
                        case "Geometry":
                            o = i.parse(s, this.texturePath).geometry;
                            break;
                        default:
                            console.warn('THREE.ObjectLoader: Unsupported geometry type "' + s.type + '"');
                            continue
                        }
                        o.uuid = s.uuid,
                        void 0 !== s.name && (o.name = s.name),
                        e[s.uuid] = o
                    }
                return e
            },
            parseMaterials: function(t, e) {
                var i = {};
                if (void 0 !== t) {
                    var n = new sn;
                    n.setTextures(e);
                    for (var r = 0, a = t.length; r < a; r++) {
                        var o = t[r];
                        if ("MultiMaterial" === o.type) {
                            for (var s = [], c = 0; c < o.materials.length; c++)
                                s.push(n.parse(o.materials[c]));
                            i[o.uuid] = s
                        } else
                            i[o.uuid] = n.parse(o)
                    }
                }
                return i
            },
            parseAnimations: function(t) {
                for (var e = [], i = 0; i < t.length; i++) {
                    var n = on.parse(t[i]);
                    e.push(n)
                }
                return e
            },
            parseImages: function(t, e) {
                function i(t) {
                    return n.manager.itemStart(t),
                    o.load(t, function() {
                        n.manager.itemEnd(t)
                    }, void 0, function() {
                        n.manager.itemEnd(t),
                        n.manager.itemError(t)
                    })
                }
                var n = this
                  , r = {};
                if (void 0 !== t && t.length > 0) {
                    var a = new Ri(e)
                      , o = new Ui(a);
                    o.setCrossOrigin(this.crossOrigin);
                    for (var s = 0, c = t.length; s < c; s++) {
                        var h = t[s]
                          , l = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(h.url) ? h.url : n.texturePath + h.url;
                        r[h.uuid] = i(l)
                    }
                }
                return r
            },
            parseTextures: function(t, e) {
                function i(t, e) {
                    return "number" == typeof t ? t : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", t),
                    e[t])
                }
                var r = {};
                if (void 0 !== t)
                    for (var a = 0, o = t.length; a < o; a++) {
                        var s = t[a];
                        void 0 === s.image && console.warn('THREE.ObjectLoader: No "image" specified for', s.uuid),
                        void 0 === e[s.image] && console.warn("THREE.ObjectLoader: Undefined image", s.image);
                        var c = new n(e[s.image]);
                        c.needsUpdate = !0,
                        c.uuid = s.uuid,
                        void 0 !== s.name && (c.name = s.name),
                        void 0 !== s.mapping && (c.mapping = i(s.mapping, Jh)),
                        void 0 !== s.offset && c.offset.fromArray(s.offset),
                        void 0 !== s.repeat && c.repeat.fromArray(s.repeat),
                        void 0 !== s.wrap && (c.wrapS = i(s.wrap[0], Qh),
                        c.wrapT = i(s.wrap[1], Qh)),
                        void 0 !== s.minFilter && (c.minFilter = i(s.minFilter, Kh)),
                        void 0 !== s.magFilter && (c.magFilter = i(s.magFilter, Kh)),
                        void 0 !== s.anisotropy && (c.anisotropy = s.anisotropy),
                        void 0 !== s.flipY && (c.flipY = s.flipY),
                        r[s.uuid] = c
                    }
                return r
            },
            parseObject: function() {
                var t = new l;
                return function(e, i, n) {
                    function r(t) {
                        return void 0 === i[t] && console.warn("THREE.ObjectLoader: Undefined geometry", t),
                        i[t]
                    }
                    function a(t) {
                        if (void 0 !== t) {
                            if (Array.isArray(t)) {
                                for (var e = [], i = 0, r = t.length; i < r; i++) {
                                    var a = t[i];
                                    void 0 === n[a] && console.warn("THREE.ObjectLoader: Undefined material", a),
                                    e.push(n[a])
                                }
                                return e
                            }
                            return void 0 === n[t] && console.warn("THREE.ObjectLoader: Undefined material", t),
                            n[t]
                        }
                    }
                    var o;
                    switch (e.type) {
                    case "Scene":
                        o = new ve,
                        void 0 !== e.background && Number.isInteger(e.background) && (o.background = new q(e.background)),
                        void 0 !== e.fog && ("Fog" === e.fog.type ? o.fog = new ge(e.fog.color,e.fog.near,e.fog.far) : "FogExp2" === e.fog.type && (o.fog = new me(e.fog.color,e.fog.density)));
                        break;
                    case "PerspectiveCamera":
                        o = new Ot(e.fov,e.aspect,e.near,e.far),
                        void 0 !== e.focus && (o.focus = e.focus),
                        void 0 !== e.zoom && (o.zoom = e.zoom),
                        void 0 !== e.filmGauge && (o.filmGauge = e.filmGauge),
                        void 0 !== e.filmOffset && (o.filmOffset = e.filmOffset),
                        void 0 !== e.view && (o.view = Object.assign({}, e.view));
                        break;
                    case "OrthographicCamera":
                        o = new Dt(e.left,e.right,e.top,e.bottom,e.near,e.far);
                        break;
                    case "AmbientLight":
                        o = new ji(e.color,e.intensity);
                        break;
                    case "DirectionalLight":
                        o = new ki(e.color,e.intensity);
                        break;
                    case "PointLight":
                        o = new Hi(e.color,e.intensity,e.distance,e.decay);
                        break;
                    case "RectAreaLight":
                        o = new Wi(e.color,e.intensity,e.width,e.height);
                        break;
                    case "SpotLight":
                        o = new Gi(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay);
                        break;
                    case "HemisphereLight":
                        o = new Fi(e.color,e.groundColor,e.intensity);
                        break;
                    case "SkinnedMesh":
                        console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");
                    case "Mesh":
                        var s = r(e.geometry)
                          , c = a(e.material);
                        o = s.bones && s.bones.length > 0 ? new Ee(s,c) : new Rt(s,c);
                        break;
                    case "LOD":
                        o = new be;
                        break;
                    case "Line":
                        o = new Se(r(e.geometry),a(e.material),e.mode);
                        break;
                    case "LineLoop":
                        o = new Le(r(e.geometry),a(e.material));
                        break;
                    case "LineSegments":
                        o = new Ae(r(e.geometry),a(e.material));
                        break;
                    case "PointCloud":
                    case "Points":
                        o = new Pe(r(e.geometry),a(e.material));
                        break;
                    case "Sprite":
                        o = new _e(a(e.material));
                        break;
                    case "Group":
                        o = new Ce;
                        break;
                    default:
                        o = new ht
                    }
                    if (o.uuid = e.uuid,
                    void 0 !== e.name && (o.name = e.name),
                    void 0 !== e.matrix ? (t.fromArray(e.matrix),
                    t.decompose(o.position, o.quaternion, o.scale)) : (void 0 !== e.position && o.position.fromArray(e.position),
                    void 0 !== e.rotation && o.rotation.fromArray(e.rotation),
                    void 0 !== e.quaternion && o.quaternion.fromArray(e.quaternion),
                    void 0 !== e.scale && o.scale.fromArray(e.scale)),
                    void 0 !== e.castShadow && (o.castShadow = e.castShadow),
                    void 0 !== e.receiveShadow && (o.receiveShadow = e.receiveShadow),
                    e.shadow && (void 0 !== e.shadow.bias && (o.shadow.bias = e.shadow.bias),
                    void 0 !== e.shadow.radius && (o.shadow.radius = e.shadow.radius),
                    void 0 !== e.shadow.mapSize && o.shadow.mapSize.fromArray(e.shadow.mapSize),
                    void 0 !== e.shadow.camera && (o.shadow.camera = this.parseObject(e.shadow.camera))),
                    void 0 !== e.visible && (o.visible = e.visible),
                    void 0 !== e.userData && (o.userData = e.userData),
                    void 0 !== e.children)
                        for (var h in e.children)
                            o.add(this.parseObject(e.children[h], i, n));
                    if ("LOD" === e.type)
                        for (var l = e.levels, u = 0; u < l.length; u++) {
                            var d = l[u]
                              , h = o.getObjectByProperty("uuid", d.object);
                            void 0 !== h && o.addLevel(h, d.distance)
                        }
                    return o
                }
            }()
        });
        var Jh = {
            UVMapping: so,
            CubeReflectionMapping: co,
            CubeRefractionMapping: ho,
            EquirectangularReflectionMapping: lo,
            EquirectangularRefractionMapping: uo,
            SphericalReflectionMapping: po,
            CubeUVReflectionMapping: fo,
            CubeUVRefractionMapping: mo
        }
          , Qh = {
            RepeatWrapping: go,
            ClampToEdgeWrapping: vo,
            MirroredRepeatWrapping: yo
        }
          , Kh = {
            NearestFilter: xo,
            NearestMipMapNearestFilter: _o,
            NearestMipMapLinearFilter: bo,
            LinearFilter: wo,
            LinearMipMapNearestFilter: Mo,
            LinearMipMapLinearFilter: Eo
        };
        Object.assign(wn.prototype, {
            getPoint: function() {
                return console.warn("THREE.Curve: .getPoint() not implemented."),
                null
            },
            getPointAt: function(t) {
                var e = this.getUtoTmapping(t);
                return this.getPoint(e)
            },
            getPoints: function(t) {
                void 0 === t && (t = 5);
                for (var e = [], i = 0; i <= t; i++)
                    e.push(this.getPoint(i / t));
                return e
            },
            getSpacedPoints: function(t) {
                void 0 === t && (t = 5);
                for (var e = [], i = 0; i <= t; i++)
                    e.push(this.getPointAt(i / t));
                return e
            },
            getLength: function() {
                var t = this.getLengths();
                return t[t.length - 1]
            },
            getLengths: function(t) {
                if (void 0 === t && (t = this.arcLengthDivisions),
                this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate)
                    return this.cacheArcLengths;
                this.needsUpdate = !1;
                var e, i, n = [], r = this.getPoint(0), a = 0;
                for (n.push(0),
                i = 1; i <= t; i++)
                    e = this.getPoint(i / t),
                    a += e.distanceTo(r),
                    n.push(a),
                    r = e;
                return this.cacheArcLengths = n,
                n
            },
            updateArcLengths: function() {
                this.needsUpdate = !0,
                this.getLengths()
            },
            getUtoTmapping: function(t, e) {
                var i, n = this.getLengths(), r = 0, a = n.length;
                i = e ? e : t * n[a - 1];
                for (var o, s = 0, c = a - 1; s <= c; )
                    if (r = Math.floor(s + (c - s) / 2),
                    o = n[r] - i,
                    o < 0)
                        s = r + 1;
                    else {
                        if (!(o > 0)) {
                            c = r;
                            break
                        }
                        c = r - 1
                    }
                if (r = c,
                n[r] === i)
                    return r / (a - 1);
                var h = n[r]
                  , l = n[r + 1]
                  , u = l - h
                  , d = (i - h) / u
                  , p = (r + d) / (a - 1);
                return p
            },
            getTangent: function(t) {
                var e = 1e-4
                  , i = t - e
                  , n = t + e;
                i < 0 && (i = 0),
                n > 1 && (n = 1);
                var r = this.getPoint(i)
                  , a = this.getPoint(n)
                  , o = a.clone().sub(r);
                return o.normalize()
            },
            getTangentAt: function(t) {
                var e = this.getUtoTmapping(t);
                return this.getTangent(e)
            },
            computeFrenetFrames: function(t, e) {
                var i, n, r, a = new h, o = [], s = [], c = [], u = new h, d = new l;
                for (i = 0; i <= t; i++)
                    n = i / t,
                    o[i] = this.getTangentAt(n),
                    o[i].normalize();
                s[0] = new h,
                c[0] = new h;
                var p = Number.MAX_VALUE
                  , f = Math.abs(o[0].x)
                  , m = Math.abs(o[0].y)
                  , g = Math.abs(o[0].z);
                for (f <= p && (p = f,
                a.set(1, 0, 0)),
                m <= p && (p = m,
                a.set(0, 1, 0)),
                g <= p && a.set(0, 0, 1),
                u.crossVectors(o[0], a).normalize(),
                s[0].crossVectors(o[0], u),
                c[0].crossVectors(o[0], s[0]),
                i = 1; i <= t; i++)
                    s[i] = s[i - 1].clone(),
                    c[i] = c[i - 1].clone(),
                    u.crossVectors(o[i - 1], o[i]),
                    u.length() > Number.EPSILON && (u.normalize(),
                    r = Math.acos(ws.clamp(o[i - 1].dot(o[i]), -1, 1)),
                    s[i].applyMatrix4(d.makeRotationAxis(u, r))),
                    c[i].crossVectors(o[i], s[i]);
                if (e === !0)
                    for (r = Math.acos(ws.clamp(s[0].dot(s[t]), -1, 1)),
                    r /= t,
                    o[0].dot(u.crossVectors(s[0], s[t])) > 0 && (r = -r),
                    i = 1; i <= t; i++)
                        s[i].applyMatrix4(d.makeRotationAxis(o[i], r * i)),
                        c[i].crossVectors(o[i], s[i]);
                return {
                    tangents: o,
                    normals: s,
                    binormals: c
                }
            }
        }),
        Mn.prototype = Object.create(wn.prototype),
        Mn.prototype.constructor = Mn,
        Mn.prototype.isLineCurve = !0,
        Mn.prototype.getPoint = function(t) {
            if (1 === t)
                return this.v2.clone();
            var e = this.v2.clone().sub(this.v1);
            return e.multiplyScalar(t).add(this.v1),
            e
        }
        ,
        Mn.prototype.getPointAt = function(t) {
            return this.getPoint(t)
        }
        ,
        Mn.prototype.getTangent = function(t) {
            var e = this.v2.clone().sub(this.v1);
            return e.normalize()
        }
        ,
        En.prototype = Object.assign(Object.create(wn.prototype), {
            constructor: En,
            add: function(t) {
                this.curves.push(t)
            },
            closePath: function() {
                var t = this.curves[0].getPoint(0)
                  , e = this.curves[this.curves.length - 1].getPoint(1);
                t.equals(e) || this.curves.push(new Mn(e,t))
            },
            getPoint: function(t) {
                for (var e = t * this.getLength(), i = this.getCurveLengths(), n = 0; n < i.length; ) {
                    if (i[n] >= e) {
                        var r = i[n] - e
                          , a = this.curves[n]
                          , o = a.getLength()
                          , s = 0 === o ? 0 : 1 - r / o;
                        return a.getPointAt(s)
                    }
                    n++
                }
                return null
            },
            getLength: function() {
                var t = this.getCurveLengths();
                return t[t.length - 1]
            },
            updateArcLengths: function() {
                this.needsUpdate = !0,
                this.cacheLengths = null ,
                this.getCurveLengths()
            },
            getCurveLengths: function() {
                if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
                    return this.cacheLengths;
                for (var t = [], e = 0, i = 0, n = this.curves.length; i < n; i++)
                    e += this.curves[i].getLength(),
                    t.push(e);
                return this.cacheLengths = t,
                t
            },
            getSpacedPoints: function(t) {
                void 0 === t && (t = 40);
                for (var e = [], i = 0; i <= t; i++)
                    e.push(this.getPoint(i / t));
                return this.autoClose && e.push(e[0]),
                e
            },
            getPoints: function(t) {
                t = t || 12;
                for (var e, i = [], n = 0, r = this.curves; n < r.length; n++)
                    for (var a = r[n], o = a && a.isEllipseCurve ? 2 * t : a && a.isLineCurve ? 1 : a && a.isSplineCurve ? t * a.points.length : t, s = a.getPoints(o), c = 0; c < s.length; c++) {
                        var h = s[c];
                        e && e.equals(h) || (i.push(h),
                        e = h)
                    }
                return this.autoClose && i.length > 1 && !i[i.length - 1].equals(i[0]) && i.push(i[0]),
                i
            },
            createPointsGeometry: function(t) {
                var e = this.getPoints(t);
                return this.createGeometry(e)
            },
            createSpacedPointsGeometry: function(t) {
                var e = this.getSpacedPoints(t);
                return this.createGeometry(e)
            },
            createGeometry: function(t) {
                for (var e = new At, i = 0, n = t.length; i < n; i++) {
                    var r = t[i];
                    e.vertices.push(new h(r.x,r.y,r.z || 0))
                }
                return e
            }
        }),
        Tn.prototype = Object.create(wn.prototype),
        Tn.prototype.constructor = Tn,
        Tn.prototype.isEllipseCurve = !0,
        Tn.prototype.getPoint = function(t) {
            for (var e = 2 * Math.PI, n = this.aEndAngle - this.aStartAngle, r = Math.abs(n) < Number.EPSILON; n < 0; )
                n += e;
            for (; n > e; )
                n -= e;
            n < Number.EPSILON && (n = r ? 0 : e),
            this.aClockwise !== !0 || r || (n === e ? n = -e : n -= e);
            var a = this.aStartAngle + t * n
              , o = this.aX + this.xRadius * Math.cos(a)
              , s = this.aY + this.yRadius * Math.sin(a);
            if (0 !== this.aRotation) {
                var c = Math.cos(this.aRotation)
                  , h = Math.sin(this.aRotation)
                  , l = o - this.aX
                  , u = s - this.aY;
                o = l * c - u * h + this.aX,
                s = l * h + u * c + this.aY
            }
            return new i(o,s)
        }
        ,
        Sn.prototype = Object.create(wn.prototype),
        Sn.prototype.constructor = Sn,
        Sn.prototype.isSplineCurve = !0,
        Sn.prototype.getPoint = function(t) {
            var e = this.points
              , n = (e.length - 1) * t
              , r = Math.floor(n)
              , a = n - r
              , o = e[0 === r ? r : r - 1]
              , s = e[r]
              , c = e[r > e.length - 2 ? e.length - 1 : r + 1]
              , h = e[r > e.length - 3 ? e.length - 1 : r + 2];
            return new i(dn(a, o.x, s.x, c.x, h.x),dn(a, o.y, s.y, c.y, h.y))
        }
        ,
        An.prototype = Object.create(wn.prototype),
        An.prototype.constructor = An,
        An.prototype.getPoint = function(t) {
            var e = this.v0
              , n = this.v1
              , r = this.v2
              , a = this.v3;
            return new i(bn(t, e.x, n.x, r.x, a.x),bn(t, e.y, n.y, r.y, a.y))
        }
        ,
        Ln.prototype = Object.create(wn.prototype),
        Ln.prototype.constructor = Ln,
        Ln.prototype.getPoint = function(t) {
            var e = this.v0
              , n = this.v1
              , r = this.v2;
            return new i(gn(t, e.x, n.x, r.x),gn(t, e.y, n.y, r.y))
        }
        ;
        var $h = Object.assign(Object.create(En.prototype), {
            fromPoints: function(t) {
                this.moveTo(t[0].x, t[0].y);
                for (var e = 1, i = t.length; e < i; e++)
                    this.lineTo(t[e].x, t[e].y)
            },
            moveTo: function(t, e) {
                this.currentPoint.set(t, e)
            },
            lineTo: function(t, e) {
                var n = new Mn(this.currentPoint.clone(),new i(t,e));
                this.curves.push(n),
                this.currentPoint.set(t, e)
            },
            quadraticCurveTo: function(t, e, n, r) {
                var a = new Ln(this.currentPoint.clone(),new i(t,e),new i(n,r));
                this.curves.push(a),
                this.currentPoint.set(n, r)
            },
            bezierCurveTo: function(t, e, n, r, a, o) {
                var s = new An(this.currentPoint.clone(),new i(t,e),new i(n,r),new i(a,o));
                this.curves.push(s),
                this.currentPoint.set(a, o)
            },
            splineThru: function(t) {
                var e = [this.currentPoint.clone()].concat(t)
                  , i = new Sn(e);
                this.curves.push(i),
                this.currentPoint.copy(t[t.length - 1])
            },
            arc: function(t, e, i, n, r, a) {
                var o = this.currentPoint.x
                  , s = this.currentPoint.y;
                this.absarc(t + o, e + s, i, n, r, a)
            },
            absarc: function(t, e, i, n, r, a) {
                this.absellipse(t, e, i, i, n, r, a)
            },
            ellipse: function(t, e, i, n, r, a, o, s) {
                var c = this.currentPoint.x
                  , h = this.currentPoint.y;
                this.absellipse(t + c, e + h, i, n, r, a, o, s)
            },
            absellipse: function(t, e, i, n, r, a, o, s) {
                var c = new Tn(t,e,i,n,r,a,o,s);
                if (this.curves.length > 0) {
                    var h = c.getPoint(0);
                    h.equals(this.currentPoint) || this.lineTo(h.x, h.y)
                }
                this.curves.push(c);
                var l = c.getPoint(1);
                this.currentPoint.copy(l)
            }
        });
        Rn.prototype = $h,
        $h.constructor = Rn,
        Pn.prototype = Object.assign(Object.create($h), {
            constructor: Pn,
            getPointsHoles: function(t) {
                for (var e = [], i = 0, n = this.holes.length; i < n; i++)
                    e[i] = this.holes[i].getPoints(t);
                return e
            },
            extractAllPoints: function(t) {
                return {
                    shape: this.getPoints(t),
                    holes: this.getPointsHoles(t)
                }
            },
            extractPoints: function(t) {
                return this.extractAllPoints(t)
            }
        }),
        Object.assign(Cn.prototype, {
            moveTo: function(t, e) {
                this.currentPath = new Rn,
                this.subPaths.push(this.currentPath),
                this.currentPath.moveTo(t, e)
            },
            lineTo: function(t, e) {
                this.currentPath.lineTo(t, e)
            },
            quadraticCurveTo: function(t, e, i, n) {
                this.currentPath.quadraticCurveTo(t, e, i, n)
            },
            bezierCurveTo: function(t, e, i, n, r, a) {
                this.currentPath.bezierCurveTo(t, e, i, n, r, a)
            },
            splineThru: function(t) {
                this.currentPath.splineThru(t)
            },
            toShapes: function(t, e) {
                function i(t) {
                    for (var e = [], i = 0, n = t.length; i < n; i++) {
                        var r = t[i]
                          , a = new Pn;
                        a.curves = r.curves,
                        e.push(a)
                    }
                    return e
                }
                function n(t, e) {
                    for (var i = e.length, n = !1, r = i - 1, a = 0; a < i; r = a++) {
                        var o = e[r]
                          , s = e[a]
                          , c = s.x - o.x
                          , h = s.y - o.y;
                        if (Math.abs(h) > Number.EPSILON) {
                            if (h < 0 && (o = e[a],
                            c = -c,
                            s = e[r],
                            h = -h),
                            t.y < o.y || t.y > s.y)
                                continue;if (t.y === o.y) {
                                if (t.x === o.x)
                                    return !0
                            } else {
                                var l = h * (t.x - o.x) - c * (t.y - o.y);
                                if (0 === l)
                                    return !0;
                                if (l < 0)
                                    continue;n = !n
                            }
                        } else {
                            if (t.y !== o.y)
                                continue;if (s.x <= t.x && t.x <= o.x || o.x <= t.x && t.x <= s.x)
                                return !0
                        }
                    }
                    return n
                }
                var r = Vh.isClockWise
                  , a = this.subPaths;
                if (0 === a.length)
                    return [];
                if (e === !0)
                    return i(a);
                var o, s, c, h = [];
                if (1 === a.length)
                    return s = a[0],
                    c = new Pn,
                    c.curves = s.curves,
                    h.push(c),
                    h;
                var l = !r(a[0].getPoints());
                l = t ? !l : l;
                var u, d = [], p = [], f = [], m = 0;
                p[m] = void 0,
                f[m] = [];
                for (var g = 0, v = a.length; g < v; g++)
                    s = a[g],
                    u = s.getPoints(),
                    o = r(u),
                    o = t ? !o : o,
                    o ? (!l && p[m] && m++,
                    p[m] = {
                        s: new Pn,
                        p: u
                    },
                    p[m].s.curves = s.curves,
                    l && m++,
                    f[m] = []) : f[m].push({
                        h: s,
                        p: u[0]
                    });
                if (!p[0])
                    return i(a);
                if (p.length > 1) {
                    for (var y = !1, x = [], _ = 0, b = p.length; _ < b; _++)
                        d[_] = [];
                    for (var _ = 0, b = p.length; _ < b; _++)
                        for (var w = f[_], M = 0; M < w.length; M++) {
                            for (var E = w[M], T = !0, S = 0; S < p.length; S++)
                                n(E.p, p[S].p) && (_ !== S && x.push({
                                    froms: _,
                                    tos: S,
                                    hole: M
                                }),
                                T ? (T = !1,
                                d[S].push(E)) : y = !0);
                            T && d[_].push(E)
                        }
                    x.length > 0 && (y || (f = d))
                }
                for (var A, g = 0, L = p.length; g < L; g++) {
                    c = p[g].s,
                    h.push(c),
                    A = f[g];
                    for (var R = 0, P = A.length; R < P; R++)
                        c.holes.push(A[R].h)
                }
                return h
            }
        }),
        Object.assign(In.prototype, {
            isFont: !0,
            generateShapes: function(t, e, i) {
                function n(t) {
                    for (var i = String(t).split(""), n = e / a.resolution, o = (a.boundingBox.yMax - a.boundingBox.yMin + a.underlineThickness) * n, s = 0, c = 0, h = [], l = 0; l < i.length; l++) {
                        var u = i[l];
                        if ("\n" === u)
                            s = 0,
                            c -= o;
                        else {
                            var d = r(u, n, s, c);
                            s += d.offsetX,
                            h.push(d.path)
                        }
                    }
                    return h
                }
                function r(t, e, n, r) {
                    var o = a.glyphs[t] || a.glyphs["?"];
                    if (o) {
                        var s, c, h, l, u, d, p, f, m, g, v, y = new Cn, x = [];
                        if (o.o)
                            for (var _ = o._cachedOutline || (o._cachedOutline = o.o.split(" ")), b = 0, w = _.length; b < w; ) {
                                var M = _[b++];
                                switch (M) {
                                case "m":
                                    s = _[b++] * e + n,
                                    c = _[b++] * e + r,
                                    y.moveTo(s, c);
                                    break;
                                case "l":
                                    s = _[b++] * e + n,
                                    c = _[b++] * e + r,
                                    y.lineTo(s, c);
                                    break;
                                case "q":
                                    if (h = _[b++] * e + n,
                                    l = _[b++] * e + r,
                                    p = _[b++] * e + n,
                                    f = _[b++] * e + r,
                                    y.quadraticCurveTo(p, f, h, l),
                                    v = x[x.length - 1]) {
                                        u = v.x,
                                        d = v.y;
                                        for (var E = 1; E <= i; E++) {
                                            var T = E / i;
                                            gn(T, u, p, h),
                                            gn(T, d, f, l)
                                        }
                                    }
                                    break;
                                case "b":
                                    if (h = _[b++] * e + n,
                                    l = _[b++] * e + r,
                                    p = _[b++] * e + n,
                                    f = _[b++] * e + r,
                                    m = _[b++] * e + n,
                                    g = _[b++] * e + r,
                                    y.bezierCurveTo(p, f, m, g, h, l),
                                    v = x[x.length - 1]) {
                                        u = v.x,
                                        d = v.y;
                                        for (var E = 1; E <= i; E++) {
                                            var T = E / i;
                                            bn(T, u, p, m, h),
                                            bn(T, d, f, g, l)
                                        }
                                    }
                                }
                            }
                        return {
                            offsetX: o.ha * e,
                            path: y
                        }
                    }
                }
                void 0 === e && (e = 100),
                void 0 === i && (i = 4);
                for (var a = this.data, o = n(t), s = [], c = 0, h = o.length; c < h; c++)
                    Array.prototype.push.apply(s, o[c].toShapes());
                return s
            }
        }),
        Object.assign(Un.prototype, {
            load: function(t, e, i, n) {
                var r = this
                  , a = new Pi(this.manager);
                a.load(t, function(t) {
                    var i;
                    try {
                        i = JSON.parse(t)
                    } catch (e) {
                        console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),
                        i = JSON.parse(t.substring(65, t.length - 2))
                    }
                    var n = r.parse(i);
                    e && e(n)
                }, i, n)
            },
            parse: function(t) {
                return new In(t)
            }
        });
        var tl, el = {
            getContext: function() {
                return void 0 === tl && (tl = new (window.AudioContext || window.webkitAudioContext)),
                tl
            },
            setContext: function(t) {
                tl = t
            }
        };
        Object.assign(Nn.prototype, {
            load: function(t, e, i, n) {
                var r = new Pi(this.manager);
                r.setResponseType("arraybuffer"),
                r.load(t, function(t) {
                    var i = el.getContext();
                    i.decodeAudioData(t, function(t) {
                        e(t)
                    })
                }, i, n)
            }
        }),
        Object.assign(On.prototype, {
            update: function() {
                var t, e, i, n, r, a, o, s, c = new l, h = new l;
                return function(l) {
                    var u = t !== this || e !== l.focus || i !== l.fov || n !== l.aspect * this.aspect || r !== l.near || a !== l.far || o !== l.zoom || s !== this.eyeSep;
                    if (u) {
                        t = this,
                        e = l.focus,
                        i = l.fov,
                        n = l.aspect * this.aspect,
                        r = l.near,
                        a = l.far,
                        o = l.zoom;
                        var d = l.projectionMatrix.clone();
                        s = this.eyeSep / 2;
                        var p, f, m = s * r / e, g = r * Math.tan(ws.DEG2RAD * i * .5) / o;
                        h.elements[12] = -s,
                        c.elements[12] = s,
                        p = -g * n + m,
                        f = g * n + m,
                        d.elements[0] = 2 * r / (f - p),
                        d.elements[8] = (f + p) / (f - p),
                        this.cameraL.projectionMatrix.copy(d),
                        p = -g * n - m,
                        f = g * n - m,
                        d.elements[0] = 2 * r / (f - p),
                        d.elements[8] = (f + p) / (f - p),
                        this.cameraR.projectionMatrix.copy(d)
                    }
                    this.cameraL.matrixWorld.copy(l.matrixWorld).multiply(h),
                    this.cameraR.matrixWorld.copy(l.matrixWorld).multiply(c)
                }
            }()
        }),
        Dn.prototype = Object.create(ht.prototype),
        Dn.prototype.constructor = Dn,
        Fn.prototype = Object.assign(Object.create(Ot.prototype), {
            constructor: Fn,
            isArrayCamera: !0
        }),
        Bn.prototype = Object.assign(Object.create(ht.prototype), {
            constructor: Bn,
            getInput: function() {
                return this.gain
            },
            removeFilter: function() {
                null !== this.filter && (this.gain.disconnect(this.filter),
                this.filter.disconnect(this.context.destination),
                this.gain.connect(this.context.destination),
                this.filter = null )
            },
            getFilter: function() {
                return this.filter
            },
            setFilter: function(t) {
                null !== this.filter ? (this.gain.disconnect(this.filter),
                this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination),
                this.filter = t,
                this.gain.connect(this.filter),
                this.filter.connect(this.context.destination)
            },
            getMasterVolume: function() {
                return this.gain.gain.value
            },
            setMasterVolume: function(t) {
                this.gain.gain.value = t
            },
            updateMatrixWorld: function() {
                var t = new h
                  , e = new c
                  , i = new h
                  , n = new h;
                return function(r) {
                    ht.prototype.updateMatrixWorld.call(this, r);
                    var a = this.context.listener
                      , o = this.up;
                    this.matrixWorld.decompose(t, e, i),
                    n.set(0, 0, -1).applyQuaternion(e),
                    a.positionX ? (a.positionX.setValueAtTime(t.x, this.context.currentTime),
                    a.positionY.setValueAtTime(t.y, this.context.currentTime),
                    a.positionZ.setValueAtTime(t.z, this.context.currentTime),
                    a.forwardX.setValueAtTime(n.x, this.context.currentTime),
                    a.forwardY.setValueAtTime(n.y, this.context.currentTime),
                    a.forwardZ.setValueAtTime(n.z, this.context.currentTime),
                    a.upX.setValueAtTime(o.x, this.context.currentTime),
                    a.upY.setValueAtTime(o.y, this.context.currentTime),
                    a.upZ.setValueAtTime(o.z, this.context.currentTime)) : (a.setPosition(t.x, t.y, t.z),
                    a.setOrientation(n.x, n.y, n.z, o.x, o.y, o.z))
                }
            }()
        }),
        zn.prototype = Object.assign(Object.create(ht.prototype), {
            constructor: zn,
            getOutput: function() {
                return this.gain
            },
            setNodeSource: function(t) {
                return this.hasPlaybackControl = !1,
                this.sourceType = "audioNode",
                this.source = t,
                this.connect(),
                this
            },
            setBuffer: function(t) {
                return this.buffer = t,
                this.sourceType = "buffer",
                this.autoplay && this.play(),
                this
            },
            play: function() {
                if (this.isPlaying === !0)
                    return void console.warn("THREE.Audio: Audio is already playing.");
                if (this.hasPlaybackControl === !1)
                    return void console.warn("THREE.Audio: this Audio has no playback control.");
                var t = this.context.createBufferSource();
                return t.buffer = this.buffer,
                t.loop = this.loop,
                t.onended = this.onEnded.bind(this),
                t.playbackRate.setValueAtTime(this.playbackRate, this.startTime),
                t.start(0, this.startTime),
                this.isPlaying = !0,
                this.source = t,
                this.connect()
            },
            pause: function() {
                return this.hasPlaybackControl === !1 ? void console.warn("THREE.Audio: this Audio has no playback control.") : (this.source.stop(),
                this.startTime = this.context.currentTime,
                this.isPlaying = !1,
                this)
            },
            stop: function() {
                return this.hasPlaybackControl === !1 ? void console.warn("THREE.Audio: this Audio has no playback control.") : (this.source.stop(),
                this.startTime = 0,
                this.isPlaying = !1,
                this)
            },
            connect: function() {
                if (this.filters.length > 0) {
                    this.source.connect(this.filters[0]);
                    for (var t = 1, e = this.filters.length; t < e; t++)
                        this.filters[t - 1].connect(this.filters[t]);
                    this.filters[this.filters.length - 1].connect(this.getOutput())
                } else
                    this.source.connect(this.getOutput());
                return this
            },
            disconnect: function() {
                if (this.filters.length > 0) {
                    this.source.disconnect(this.filters[0]);
                    for (var t = 1, e = this.filters.length; t < e; t++)
                        this.filters[t - 1].disconnect(this.filters[t]);
                    this.filters[this.filters.length - 1].disconnect(this.getOutput())
                } else
                    this.source.disconnect(this.getOutput());
                return this
            },
            getFilters: function() {
                return this.filters
            },
            setFilters: function(t) {
                return t || (t = []),
                this.isPlaying === !0 ? (this.disconnect(),
                this.filters = t,
                this.connect()) : this.filters = t,
                this
            },
            getFilter: function() {
                return this.getFilters()[0]
            },
            setFilter: function(t) {
                return this.setFilters(t ? [t] : [])
            },
            setPlaybackRate: function(t) {
                return this.hasPlaybackControl === !1 ? void console.warn("THREE.Audio: this Audio has no playback control.") : (this.playbackRate = t,
                this.isPlaying === !0 && this.source.playbackRate.setValueAtTime(this.playbackRate, this.context.currentTime),
                this)
            },
            getPlaybackRate: function() {
                return this.playbackRate
            },
            onEnded: function() {
                this.isPlaying = !1
            },
            getLoop: function() {
                return this.hasPlaybackControl === !1 ? (console.warn("THREE.Audio: this Audio has no playback control."),
                !1) : this.loop
            },
            setLoop: function(t) {
                return this.hasPlaybackControl === !1 ? void console.warn("THREE.Audio: this Audio has no playback control.") : (this.loop = t,
                this.isPlaying === !0 && (this.source.loop = this.loop),
                this)
            },
            getVolume: function() {
                return this.gain.gain.value
            },
            setVolume: function(t) {
                return this.gain.gain.value = t,
                this
            }
        }),
        Gn.prototype = Object.assign(Object.create(zn.prototype), {
            constructor: Gn,
            getOutput: function() {
                return this.panner
            },
            getRefDistance: function() {
                return this.panner.refDistance
            },
            setRefDistance: function(t) {
                this.panner.refDistance = t
            },
            getRolloffFactor: function() {
                return this.panner.rolloffFactor
            },
            setRolloffFactor: function(t) {
                this.panner.rolloffFactor = t
            },
            getDistanceModel: function() {
                return this.panner.distanceModel
            },
            setDistanceModel: function(t) {
                this.panner.distanceModel = t
            },
            getMaxDistance: function() {
                return this.panner.maxDistance
            },
            setMaxDistance: function(t) {
                this.panner.maxDistance = t
            },
            updateMatrixWorld: function() {
                var t = new h;
                return function(e) {
                    ht.prototype.updateMatrixWorld.call(this, e),
                    t.setFromMatrixPosition(this.matrixWorld),
                    this.panner.setPosition(t.x, t.y, t.z)
                }
            }()
        }),
        Object.assign(Hn.prototype, {
            getFrequencyData: function() {
                return this.analyser.getByteFrequencyData(this.data),
                this.data
            },
            getAverageFrequency: function() {
                for (var t = 0, e = this.getFrequencyData(), i = 0; i < e.length; i++)
                    t += e[i];
                return t / e.length
            }
        }),
        Object.assign(Vn.prototype, {
            accumulate: function(t, e) {
                var i = this.buffer
                  , n = this.valueSize
                  , r = t * n + n
                  , a = this.cumulativeWeight;
                if (0 === a) {
                    for (var o = 0; o !== n; ++o)
                        i[r + o] = i[o];
                    a = e
                } else {
                    a += e;
                    var s = e / a;
                    this._mixBufferRegion(i, r, 0, s, n)
                }
                this.cumulativeWeight = a
            },
            apply: function(t) {
                var e = this.valueSize
                  , i = this.buffer
                  , n = t * e + e
                  , r = this.cumulativeWeight
                  , a = this.binding;
                if (this.cumulativeWeight = 0,
                r < 1) {
                    var o = 3 * e;
                    this._mixBufferRegion(i, n, o, 1 - r, e)
                }
                for (var s = e, c = e + e; s !== c; ++s)
                    if (i[s] !== i[s + e]) {
                        a.setValue(i, n);
                        break
                    }
            },
            saveOriginalState: function() {
                var t = this.binding
                  , e = this.buffer
                  , i = this.valueSize
                  , n = 3 * i;
                t.getValue(e, n);
                for (var r = i, a = n; r !== a; ++r)
                    e[r] = e[n + r % i];
                this.cumulativeWeight = 0
            },
            restoreOriginalState: function() {
                var t = 3 * this.valueSize;
                this.binding.setValue(this.buffer, t)
            },
            _select: function(t, e, i, n, r) {
                if (n >= .5)
                    for (var a = 0; a !== r; ++a)
                        t[e + a] = t[i + a]
            },
            _slerp: function(t, e, i, n) {
                c.slerpFlat(t, e, t, e, t, i, n)
            },
            _lerp: function(t, e, i, n, r) {
                for (var a = 1 - n, o = 0; o !== r; ++o) {
                    var s = e + o;
                    t[s] = t[s] * a + t[i + o] * n
                }
            }
        }),
        Object.assign(kn.prototype, {
            getValue: function(t, e) {
                this.bind();
                var i = this._targetGroup.nCachedObjects_
                  , n = this._bindings[i];
                void 0 !== n && n.getValue(t, e)
            },
            setValue: function(t, e) {
                for (var i = this._bindings, n = this._targetGroup.nCachedObjects_, r = i.length; n !== r; ++n)
                    i[n].setValue(t, e)
            },
            bind: function() {
                for (var t = this._bindings, e = this._targetGroup.nCachedObjects_, i = t.length; e !== i; ++e)
                    t[e].bind()
            },
            unbind: function() {
                for (var t = this._bindings, e = this._targetGroup.nCachedObjects_, i = t.length; e !== i; ++e)
                    t[e].unbind()
            }
        }),
        Object.assign(jn, {
            Composite: kn,
            create: function(t, e, i) {
                return t && t.isAnimationObjectGroup ? new jn.Composite(t,e,i) : new jn(t,e,i)
            },
            parseTrackName: function() {
                var t = /((?:[\w-]+[\/:])*)/
                  , e = /([\w-\.]+)?/
                  , i = /(?:\.([\w-]+)(?:\[(.+)\])?)?/
                  , n = /\.([\w-]+)(?:\[(.+)\])?/
                  , r = new RegExp("^" + t.source + e.source + i.source + n.source + "$")
                  , a = ["material", "materials", "bones"];
                return function(t) {
                    var e = r.exec(t);
                    if (!e)
                        throw new Error("PropertyBinding: Cannot parse trackName: " + t);
                    var i = {
                        nodeName: e[2],
                        objectName: e[3],
                        objectIndex: e[4],
                        propertyName: e[5],
                        propertyIndex: e[6]
                    }
                      , n = i.nodeName && i.nodeName.lastIndexOf(".");
                    if (void 0 !== n && n !== -1) {
                        var o = i.nodeName.substring(n + 1);
                        a.indexOf(o) !== -1 && (i.nodeName = i.nodeName.substring(0, n),
                        i.objectName = o)
                    }
                    if (null === i.propertyName || 0 === i.propertyName.length)
                        throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t);
                    return i
                }
            }(),
            findNode: function(t, e) {
                if (!e || "" === e || "root" === e || "." === e || e === -1 || e === t.name || e === t.uuid)
                    return t;
                if (t.skeleton) {
                    var i = function(t) {
                        for (var i = 0; i < t.bones.length; i++) {
                            var n = t.bones[i];
                            if (n.name === e)
                                return n
                        }
                        return null
                    }
                      , n = i(t.skeleton);
                    if (n)
                        return n
                }
                if (t.children) {
                    var r = function t(i) {
                        for (var n = 0; n < i.length; n++) {
                            var r = i[n];
                            if (r.name === e || r.uuid === e)
                                return r;
                            var a = t(r.children);
                            if (a)
                                return a
                        }
                        return null
                    }
                      , a = r(t.children);
                    if (a)
                        return a
                }
                return null
            }
        }),
        Object.assign(jn.prototype, {
            _getValue_unavailable: function() {},
            _setValue_unavailable: function() {},
            BindingType: {
                Direct: 0,
                EntireArray: 1,
                ArrayElement: 2,
                HasFromToArray: 3
            },
            Versioning: {
                None: 0,
                NeedsUpdate: 1,
                MatrixWorldNeedsUpdate: 2
            },
            GetterByBindingType: [function(t, e) {
                t[e] = this.node[this.propertyName]
            }
            , function(t, e) {
                for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n)
                    t[e++] = i[n]
            }
            , function(t, e) {
                t[e] = this.resolvedProperty[this.propertyIndex]
            }
            , function(t, e) {
                this.resolvedProperty.toArray(t, e)
            }
            ],
            SetterByBindingTypeAndVersioning: [[function(t, e) {
                this.node[this.propertyName] = t[e]
            }
            , function(t, e) {
                this.node[this.propertyName] = t[e],
                this.targetObject.needsUpdate = !0
            }
            , function(t, e) {
                this.node[this.propertyName] = t[e],
                this.targetObject.matrixWorldNeedsUpdate = !0
            }
            ], [function(t, e) {
                for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n)
                    i[n] = t[e++]
            }
            , function(t, e) {
                for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n)
                    i[n] = t[e++];
                this.targetObject.needsUpdate = !0
            }
            , function(t, e) {
                for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n)
                    i[n] = t[e++];
                this.targetObject.matrixWorldNeedsUpdate = !0
            }
            ], [function(t, e) {
                this.resolvedProperty[this.propertyIndex] = t[e]
            }
            , function(t, e) {
                this.resolvedProperty[this.propertyIndex] = t[e],
                this.targetObject.needsUpdate = !0
            }
            , function(t, e) {
                this.resolvedProperty[this.propertyIndex] = t[e],
                this.targetObject.matrixWorldNeedsUpdate = !0
            }
            ], [function(t, e) {
                this.resolvedProperty.fromArray(t, e)
            }
            , function(t, e) {
                this.resolvedProperty.fromArray(t, e),
                this.targetObject.needsUpdate = !0
            }
            , function(t, e) {
                this.resolvedProperty.fromArray(t, e),
                this.targetObject.matrixWorldNeedsUpdate = !0
            }
            ]],
            getValue: function(t, e) {
                this.bind(),
                this.getValue(t, e)
            },
            setValue: function(t, e) {
                this.bind(),
                this.setValue(t, e)
            },
            bind: function() {
                var t = this.node
                  , e = this.parsedPath
                  , i = e.objectName
                  , n = e.propertyName
                  , r = e.propertyIndex;
                if (t || (t = jn.findNode(this.rootNode, e.nodeName) || this.rootNode,
                this.node = t),
                this.getValue = this._getValue_unavailable,
                this.setValue = this._setValue_unavailable,
                !t)
                    return void console.error("  trying to update node for track: " + this.path + " but it wasn't found.");
                if (i) {
                    var a = e.objectIndex;
                    switch (i) {
                    case "materials":
                        if (!t.material)
                            return void console.error("  can not bind to material as node does not have a material", this);
                        if (!t.material.materials)
                            return void console.error("  can not bind to material.materials as node.material does not have a materials array", this);
                        t = t.material.materials;
                        break;
                    case "bones":
                        if (!t.skeleton)
                            return void console.error("  can not bind to bones as node does not have a skeleton", this);
                        t = t.skeleton.bones;
                        for (var o = 0; o < t.length; o++)
                            if (t[o].name === a) {
                                a = o;
                                break
                            }
                        break;
                    default:
                        if (void 0 === t[i])
                            return void console.error("  can not bind to objectName of node, undefined", this);
                        t = t[i]
                    }
                    if (void 0 !== a) {
                        if (void 0 === t[a])
                            return void console.error("  trying to bind to objectIndex of objectName, but is undefined:", this, t);
                        t = t[a]
                    }
                }
                var s = t[n];
                if (void 0 === s) {
                    var c = e.nodeName;
                    return void console.error("  trying to update property for track: " + c + "." + n + " but it wasn't found.", t)
                }
                var h = this.Versioning.None;
                void 0 !== t.needsUpdate ? (h = this.Versioning.NeedsUpdate,
                this.targetObject = t) : void 0 !== t.matrixWorldNeedsUpdate && (h = this.Versioning.MatrixWorldNeedsUpdate,
                this.targetObject = t);
                var l = this.BindingType.Direct;
                if (void 0 !== r) {
                    if ("morphTargetInfluences" === n) {
                        if (!t.geometry)
                            return void console.error("  can not bind to morphTargetInfluences becasuse node does not have a geometry", this);
                        if (!t.geometry.morphTargets)
                            return void console.error("  can not bind to morphTargetInfluences becasuse node does not have a geometry.morphTargets", this);
                        for (var o = 0; o < this.node.geometry.morphTargets.length; o++)
                            if (t.geometry.morphTargets[o].name === r) {
                                r = o;
                                break
                            }
                    }
                    l = this.BindingType.ArrayElement,
                    this.resolvedProperty = s,
                    this.propertyIndex = r
                } else
                    void 0 !== s.fromArray && void 0 !== s.toArray ? (l = this.BindingType.HasFromToArray,
                    this.resolvedProperty = s) : Array.isArray(s) ? (l = this.BindingType.EntireArray,
                    this.resolvedProperty = s) : this.propertyName = n;
                this.getValue = this.GetterByBindingType[l],
                this.setValue = this.SetterByBindingTypeAndVersioning[l][h]
            },
            unbind: function() {
                this.node = null ,
                this.getValue = this._getValue_unbound,
                this.setValue = this._setValue_unbound
            }
        }),
        //!\ DECLARE ALIAS AFTER assign prototype !
        Object.assign(jn.prototype, {
            _getValue_unbound: jn.prototype.getValue,
            _setValue_unbound: jn.prototype.setValue
        }),
        Object.assign(Wn.prototype, {
            isAnimationObjectGroup: !0,
            add: function(t) {
                for (var e = this._objects, i = e.length, n = this.nCachedObjects_, r = this._indicesByUUID, a = this._paths, o = this._parsedPaths, s = this._bindings, c = s.length, h = 0, l = arguments.length; h !== l; ++h) {
                    var u = arguments[h]
                      , d = u.uuid
                      , p = r[d]
                      , f = void 0;
                    if (void 0 === p) {
                        p = i++,
                        r[d] = p,
                        e.push(u);
                        for (var m = 0, g = c; m !== g; ++m)
                            s[m].push(new jn(u,a[m],o[m]))
                    } else if (p < n) {
                        f = e[p];
                        var v = --n
                          , y = e[v];
                        r[y.uuid] = p,
                        e[p] = y,
                        r[d] = v,
                        e[v] = u;
                        for (var m = 0, g = c; m !== g; ++m) {
                            var x = s[m]
                              , _ = x[v]
                              , b = x[p];
                            x[p] = _,
                            void 0 === b && (b = new jn(u,a[m],o[m])),
                            x[v] = b
                        }
                    } else
                        e[p] !== f && console.error("Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes...")
                }
                this.nCachedObjects_ = n
            },
            remove: function(t) {
                for (var e = this._objects, i = this.nCachedObjects_, n = this._indicesByUUID, r = this._bindings, a = r.length, o = 0, s = arguments.length; o !== s; ++o) {
                    var c = arguments[o]
                      , h = c.uuid
                      , l = n[h];
                    if (void 0 !== l && l >= i) {
                        var u = i++
                          , d = e[u];
                        n[d.uuid] = l,
                        e[l] = d,
                        n[h] = u,
                        e[u] = c;
                        for (var p = 0, f = a; p !== f; ++p) {
                            var m = r[p]
                              , g = m[u]
                              , v = m[l];
                            m[l] = g,
                            m[u] = v
                        }
                    }
                }
                this.nCachedObjects_ = i
            },
            uncache: function(t) {
                for (var e = this._objects, i = e.length, n = this.nCachedObjects_, r = this._indicesByUUID, a = this._bindings, o = a.length, s = 0, c = arguments.length; s !== c; ++s) {
                    var h = arguments[s]
                      , l = h.uuid
                      , u = r[l];
                    if (void 0 !== u)
                        if (delete r[l],
                        u < n) {
                            var d = --n
                              , p = e[d]
                              , f = --i
                              , m = e[f];
                            r[p.uuid] = u,
                            e[u] = p,
                            r[m.uuid] = d,
                            e[d] = m,
                            e.pop();
                            for (var g = 0, v = o; g !== v; ++g) {
                                var y = a[g]
                                  , x = y[d]
                                  , _ = y[f];
                                y[u] = x,
                                y[d] = _,
                                y.pop()
                            }
                        } else {
                            var f = --i
                              , m = e[f];
                            r[m.uuid] = u,
                            e[u] = m,
                            e.pop();
                            for (var g = 0, v = o; g !== v; ++g) {
                                var y = a[g];
                                y[u] = y[f],
                                y.pop()
                            }
                        }
                }
                this.nCachedObjects_ = n
            },
            subscribe_: function(t, e) {
                var i = this._bindingsIndicesByPath
                  , n = i[t]
                  , r = this._bindings;
                if (void 0 !== n)
                    return r[n];
                var a = this._paths
                  , o = this._parsedPaths
                  , s = this._objects
                  , c = s.length
                  , h = this.nCachedObjects_
                  , l = new Array(c);
                n = r.length,
                i[t] = n,
                a.push(t),
                o.push(e),
                r.push(l);
                for (var u = h, d = s.length; u !== d; ++u) {
                    var p = s[u];
                    l[u] = new jn(p,t,e)
                }
                return l
            },
            unsubscribe_: function(t) {
                var e = this._bindingsIndicesByPath
                  , i = e[t];
                if (void 0 !== i) {
                    var n = this._paths
                      , r = this._parsedPaths
                      , a = this._bindings
                      , o = a.length - 1
                      , s = a[o]
                      , c = t[o];
                    e[c] = i,
                    a[i] = s,
                    a.pop(),
                    r[i] = r[o],
                    r.pop(),
                    n[i] = n[o],
                    n.pop()
                }
            }
        }),
        Object.assign(Xn.prototype, {
            play: function() {
                return this._mixer._activateAction(this),
                this
            },
            stop: function() {
                return this._mixer._deactivateAction(this),
                this.reset()
            },
            reset: function() {
                return this.paused = !1,
                this.enabled = !0,
                this.time = 0,
                this._loopCount = -1,
                this._startTime = null ,
                this.stopFading().stopWarping()
            },
            isRunning: function() {
                return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this)
            },
            isScheduled: function() {
                return this._mixer._isActiveAction(this)
            },
            startAt: function(t) {
                return this._startTime = t,
                this
            },
            setLoop: function(t, e) {
                return this.loop = t,
                this.repetitions = e,
                this
            },
            setEffectiveWeight: function(t) {
                return this.weight = t,
                this._effectiveWeight = this.enabled ? t : 0,
                this.stopFading()
            },
            getEffectiveWeight: function() {
                return this._effectiveWeight
            },
            fadeIn: function(t) {
                return this._scheduleFading(t, 0, 1)
            },
            fadeOut: function(t) {
                return this._scheduleFading(t, 1, 0)
            },
            crossFadeFrom: function(t, e, i) {
                if (t.fadeOut(e),
                this.fadeIn(e),
                i) {
                    var n = this._clip.duration
                      , r = t._clip.duration
                      , a = r / n
                      , o = n / r;
                    t.warp(1, a, e),
                    this.warp(o, 1, e)
                }
                return this
            },
            crossFadeTo: function(t, e, i) {
                return t.crossFadeFrom(this, e, i)
            },
            stopFading: function() {
                var t = this._weightInterpolant;
                return null !== t && (this._weightInterpolant = null ,
                this._mixer._takeBackControlInterpolant(t)),
                this
            },
            setEffectiveTimeScale: function(t) {
                return this.timeScale = t,
                this._effectiveTimeScale = this.paused ? 0 : t,
                this.stopWarping()
            },
            getEffectiveTimeScale: function() {
                return this._effectiveTimeScale
            },
            setDuration: function(t) {
                return this.timeScale = this._clip.duration / t,
                this.stopWarping()
            },
            syncWith: function(t) {
                return this.time = t.time,
                this.timeScale = t.timeScale,
                this.stopWarping()
            },
            halt: function(t) {
                return this.warp(this._effectiveTimeScale, 0, t)
            },
            warp: function(t, e, i) {
                var n = this._mixer
                  , r = n.time
                  , a = this._timeScaleInterpolant
                  , o = this.timeScale;
                null === a && (a = n._lendControlInterpolant(),
                this._timeScaleInterpolant = a);
                var s = a.parameterPositions
                  , c = a.sampleValues;
                return s[0] = r,
                s[1] = r + i,
                c[0] = t / o,
                c[1] = e / o,
                this
            },
            stopWarping: function() {
                var t = this._timeScaleInterpolant;
                return null !== t && (this._timeScaleInterpolant = null ,
                this._mixer._takeBackControlInterpolant(t)),
                this
            },
            getMixer: function() {
                return this._mixer
            },
            getClip: function() {
                return this._clip
            },
            getRoot: function() {
                return this._localRoot || this._mixer._root
            },
            _update: function(t, e, i, n) {
                if (!this.enabled)
                    return void this._updateWeight(t);
                var r = this._startTime;
                if (null !== r) {
                    var a = (t - r) * i;
                    if (a < 0 || 0 === i)
                        return;
                    this._startTime = null ,
                    e = i * a
                }
                e *= this._updateTimeScale(t);
                var o = this._updateTime(e)
                  , s = this._updateWeight(t);
                if (s > 0)
                    for (var c = this._interpolants, h = this._propertyBindings, l = 0, u = c.length; l !== u; ++l)
                        c[l].evaluate(o),
                        h[l].accumulate(n, s)
            },
            _updateWeight: function(t) {
                var e = 0;
                if (this.enabled) {
                    e = this.weight;
                    var i = this._weightInterpolant;
                    if (null !== i) {
                        var n = i.evaluate(t)[0];
                        e *= n,
                        t > i.parameterPositions[1] && (this.stopFading(),
                        0 === n && (this.enabled = !1))
                    }
                }
                return this._effectiveWeight = e,
                e
            },
            _updateTimeScale: function(t) {
                var e = 0;
                if (!this.paused) {
                    e = this.timeScale;
                    var i = this._timeScaleInterpolant;
                    if (null !== i) {
                        var n = i.evaluate(t)[0];
                        e *= n,
                        t > i.parameterPositions[1] && (this.stopWarping(),
                        0 === e ? this.paused = !0 : this.timeScale = e)
                    }
                }
                return this._effectiveTimeScale = e,
                e
            },
            _updateTime: function(t) {
                var e = this.time + t;
                if (0 === t)
                    return e;
                var i = this._clip.duration
                  , n = this.loop
                  , r = this._loopCount;
                if (n === ts) {
                    r === -1 && (this._loopCount = 0,
                    this._setEndings(!0, !0, !1));
                    t: {
                        if (e >= i)
                            e = i;
                        else {
                            if (!(e < 0))
                                break t;
                            e = 0
                        }
                        this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
                        this._mixer.dispatchEvent({
                            type: "finished",
                            action: this,
                            direction: t < 0 ? -1 : 1
                        })
                    }
                } else {
                    var a = n === is;
                    if (r === -1 && (t >= 0 ? (r = 0,
                    this._setEndings(!0, 0 === this.repetitions, a)) : this._setEndings(0 === this.repetitions, !0, a)),
                    e >= i || e < 0) {
                        var o = Math.floor(e / i);
                        e -= i * o,
                        r += Math.abs(o);
                        var s = this.repetitions - r;
                        if (s < 0)
                            this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
                            e = t > 0 ? i : 0,
                            this._mixer.dispatchEvent({
                                type: "finished",
                                action: this,
                                direction: t > 0 ? 1 : -1
                            });
                        else {
                            if (0 === s) {
                                var c = t < 0;
                                this._setEndings(c, !c, a)
                            } else
                                this._setEndings(!1, !1, a);
                            this._loopCount = r,
                            this._mixer.dispatchEvent({
                                type: "loop",
                                action: this,
                                loopDelta: o
                            })
                        }
                    }
                    if (a && 1 === (1 & r))
                        return this.time = e,
                        i - e
                }
                return this.time = e,
                e
            },
            _setEndings: function(t, e, i) {
                var n = this._interpolantSettings;
                i ? (n.endingStart = ss,
                n.endingEnd = ss) : (t ? n.endingStart = this.zeroSlopeAtStart ? ss : os : n.endingStart = cs,
                e ? n.endingEnd = this.zeroSlopeAtEnd ? ss : os : n.endingEnd = cs)
            },
            _scheduleFading: function(t, e, i) {
                var n = this._mixer
                  , r = n.time
                  , a = this._weightInterpolant;
                null === a && (a = n._lendControlInterpolant(),
                this._weightInterpolant = a);
                var o = a.parameterPositions
                  , s = a.sampleValues;
                return o[0] = r,
                s[0] = e,
                o[1] = r + t,
                s[1] = i,
                this
            }
        }),
        Object.assign(qn.prototype, e.prototype, {
            _bindAction: function(t, e) {
                var i = t._localRoot || this._root
                  , n = t._clip.tracks
                  , r = n.length
                  , a = t._propertyBindings
                  , o = t._interpolants
                  , s = i.uuid
                  , c = this._bindingsByRootAndName
                  , h = c[s];
                void 0 === h && (h = {},
                c[s] = h);
                for (var l = 0; l !== r; ++l) {
                    var u = n[l]
                      , d = u.name
                      , p = h[d];
                    if (void 0 !== p)
                        a[l] = p;
                    else {
                        if (p = a[l],
                        void 0 !== p) {
                            null === p._cacheIndex && (++p.referenceCount,
                            this._addInactiveBinding(p, s, d));
                            continue
                        }
                        var f = e && e._propertyBindings[l].binding.parsedPath;
                        p = new Vn(jn.create(i, d, f),u.ValueTypeName,u.getValueSize()),
                        ++p.referenceCount,
                        this._addInactiveBinding(p, s, d),
                        a[l] = p
                    }
                    o[l].resultBuffer = p.buffer
                }
            },
            _activateAction: function(t) {
                if (!this._isActiveAction(t)) {
                    if (null === t._cacheIndex) {
                        var e = (t._localRoot || this._root).uuid
                          , i = t._clip.uuid
                          , n = this._actionsByClip[i];
                        this._bindAction(t, n && n.knownActions[0]),
                        this._addInactiveAction(t, i, e)
                    }
                    for (var r = t._propertyBindings, a = 0, o = r.length; a !== o; ++a) {
                        var s = r[a];
                        0 === s.useCount++ && (this._lendBinding(s),
                        s.saveOriginalState())
                    }
                    this._lendAction(t)
                }
            },
            _deactivateAction: function(t) {
                if (this._isActiveAction(t)) {
                    for (var e = t._propertyBindings, i = 0, n = e.length; i !== n; ++i) {
                        var r = e[i];
                        0 === --r.useCount && (r.restoreOriginalState(),
                        this._takeBackBinding(r))
                    }
                    this._takeBackAction(t)
                }
            },
            _initMemoryManager: function() {
                this._actions = [],
                this._nActiveActions = 0,
                this._actionsByClip = {},
                this._bindings = [],
                this._nActiveBindings = 0,
                this._bindingsByRootAndName = {},
                this._controlInterpolants = [],
                this._nActiveControlInterpolants = 0;
                var t = this;
                this.stats = {
                    actions: {
                        get total() {
                            return t._actions.length
                        },
                        get inUse() {
                            return t._nActiveActions
                        }
                    },
                    bindings: {
                        get total() {
                            return t._bindings.length
                        },
                        get inUse() {
                            return t._nActiveBindings
                        }
                    },
                    controlInterpolants: {
                        get total() {
                            return t._controlInterpolants.length
                        },
                        get inUse() {
                            return t._nActiveControlInterpolants
                        }
                    }
                }
            },
            _isActiveAction: function(t) {
                var e = t._cacheIndex;
                return null !== e && e < this._nActiveActions
            },
            _addInactiveAction: function(t, e, i) {
                var n = this._actions
                  , r = this._actionsByClip
                  , a = r[e];
                if (void 0 === a)
                    a = {
                        knownActions: [t],
                        actionByRoot: {}
                    },
                    t._byClipCacheIndex = 0,
                    r[e] = a;
                else {
                    var o = a.knownActions;
                    t._byClipCacheIndex = o.length,
                    o.push(t)
                }
                t._cacheIndex = n.length,
                n.push(t),
                a.actionByRoot[i] = t
            },
            _removeInactiveAction: function(t) {
                var e = this._actions
                  , i = e[e.length - 1]
                  , n = t._cacheIndex;
                i._cacheIndex = n,
                e[n] = i,
                e.pop(),
                t._cacheIndex = null ;
                var r = t._clip.uuid
                  , a = this._actionsByClip
                  , o = a[r]
                  , s = o.knownActions
                  , c = s[s.length - 1]
                  , h = t._byClipCacheIndex;
                c._byClipCacheIndex = h,
                s[h] = c,
                s.pop(),
                t._byClipCacheIndex = null ;
                var l = o.actionByRoot
                  , u = (t._localRoot || this._root).uuid;
                delete l[u],
                0 === s.length && delete a[r],
                this._removeInactiveBindingsForAction(t)
            },
            _removeInactiveBindingsForAction: function(t) {
                for (var e = t._propertyBindings, i = 0, n = e.length; i !== n; ++i) {
                    var r = e[i];
                    0 === --r.referenceCount && this._removeInactiveBinding(r)
                }
            },
            _lendAction: function(t) {
                var e = this._actions
                  , i = t._cacheIndex
                  , n = this._nActiveActions++
                  , r = e[n];
                t._cacheIndex = n,
                e[n] = t,
                r._cacheIndex = i,
                e[i] = r
            },
            _takeBackAction: function(t) {
                var e = this._actions
                  , i = t._cacheIndex
                  , n = --this._nActiveActions
                  , r = e[n];
                t._cacheIndex = n,
                e[n] = t,
                r._cacheIndex = i,
                e[i] = r
            },
            _addInactiveBinding: function(t, e, i) {
                var n = this._bindingsByRootAndName
                  , r = n[e]
                  , a = this._bindings;
                void 0 === r && (r = {},
                n[e] = r),
                r[i] = t,
                t._cacheIndex = a.length,
                a.push(t)
            },
            _removeInactiveBinding: function(t) {
                var e = this._bindings
                  , i = t.binding
                  , n = i.rootNode.uuid
                  , r = i.path
                  , a = this._bindingsByRootAndName
                  , o = a[n]
                  , s = e[e.length - 1]
                  , c = t._cacheIndex;
                s._cacheIndex = c,
                e[c] = s,
                e.pop(),
                delete o[r];
                t: {
                    for (var h in o)
                        break t;
                    delete a[n]
                }
            },
            _lendBinding: function(t) {
                var e = this._bindings
                  , i = t._cacheIndex
                  , n = this._nActiveBindings++
                  , r = e[n];
                t._cacheIndex = n,
                e[n] = t,
                r._cacheIndex = i,
                e[i] = r
            },
            _takeBackBinding: function(t) {
                var e = this._bindings
                  , i = t._cacheIndex
                  , n = --this._nActiveBindings
                  , r = e[n];
                t._cacheIndex = n,
                e[n] = t,
                r._cacheIndex = i,
                e[i] = r
            },
            _lendControlInterpolant: function() {
                var t = this._controlInterpolants
                  , e = this._nActiveControlInterpolants++
                  , i = t[e];
                return void 0 === i && (i = new Yi(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),
                i.__cacheIndex = e,
                t[e] = i),
                i
            },
            _takeBackControlInterpolant: function(t) {
                var e = this._controlInterpolants
                  , i = t.__cacheIndex
                  , n = --this._nActiveControlInterpolants
                  , r = e[n];
                t.__cacheIndex = n,
                e[n] = t,
                r.__cacheIndex = i,
                e[i] = r
            },
            _controlInterpolantsResultBuffer: new Float32Array(1),
            clipAction: function(t, e) {
                var i = e || this._root
                  , n = i.uuid
                  , r = "string" == typeof t ? on.findByName(i, t) : t
                  , a = null !== r ? r.uuid : t
                  , o = this._actionsByClip[a]
                  , s = null ;
                if (void 0 !== o) {
                    var c = o.actionByRoot[n];
                    if (void 0 !== c)
                        return c;
                    s = o.knownActions[0],
                    null === r && (r = s._clip)
                }
                if (null === r)
                    return null ;
                var h = new Xn(this,r,e);
                return this._bindAction(h, s),
                this._addInactiveAction(h, a, n),
                h
            },
            existingAction: function(t, e) {
                var i = e || this._root
                  , n = i.uuid
                  , r = "string" == typeof t ? on.findByName(i, t) : t
                  , a = r ? r.uuid : t
                  , o = this._actionsByClip[a];
                return void 0 !== o ? o.actionByRoot[n] || null : null
            },
            stopAllAction: function() {
                var t = this._actions
                  , e = this._nActiveActions
                  , i = this._bindings
                  , n = this._nActiveBindings;
                this._nActiveActions = 0,
                this._nActiveBindings = 0;
                for (var r = 0; r !== e; ++r)
                    t[r].reset();
                for (var r = 0; r !== n; ++r)
                    i[r].useCount = 0;
                return this
            },
            update: function(t) {
                t *= this.timeScale;
                for (var e = this._actions, i = this._nActiveActions, n = this.time += t, r = Math.sign(t), a = this._accuIndex ^= 1, o = 0; o !== i; ++o) {
                    var s = e[o];
                    s._update(n, t, r, a)
                }
                for (var c = this._bindings, h = this._nActiveBindings, o = 0; o !== h; ++o)
                    c[o].apply(a);
                return this
            },
            getRoot: function() {
                return this._root
            },
            uncacheClip: function(t) {
                var e = this._actions
                  , i = t.uuid
                  , n = this._actionsByClip
                  , r = n[i];
                if (void 0 !== r) {
                    for (var a = r.knownActions, o = 0, s = a.length; o !== s; ++o) {
                        var c = a[o];
                        this._deactivateAction(c);
                        var h = c._cacheIndex
                          , l = e[e.length - 1];
                        c._cacheIndex = null ,
                        c._byClipCacheIndex = null ,
                        l._cacheIndex = h,
                        e[h] = l,
                        e.pop(),
                        this._removeInactiveBindingsForAction(c)
                    }
                    delete n[i]
                }
            },
            uncacheRoot: function(t) {
                var e = t.uuid
                  , i = this._actionsByClip;
                for (var n in i) {
                    var r = i[n].actionByRoot
                      , a = r[e];
                    void 0 !== a && (this._deactivateAction(a),
                    this._removeInactiveAction(a))
                }
                var o = this._bindingsByRootAndName
                  , s = o[e];
                if (void 0 !== s)
                    for (var c in s) {
                        var h = s[c];
                        h.restoreOriginalState(),
                        this._removeInactiveBinding(h)
                    }
            },
            uncacheAction: function(t, e) {
                var i = this.existingAction(t, e);
                null !== i && (this._deactivateAction(i),
                this._removeInactiveAction(i))
            }
        }),
        Yn.prototype.clone = function() {
            return new Yn(void 0 === this.value.clone ? this.value : this.value.clone())
        }
        ,
        Zn.prototype = Object.assign(Object.create(Lt.prototype), {
            constructor: Zn,
            isInstancedBufferGeometry: !0,
            addGroup: function(t, e, i) {
                this.groups.push({
                    start: t,
                    count: e,
                    materialIndex: i
                })
            },
            copy: function(t) {
                var e = t.index;
                null !== e && this.setIndex(e.clone());
                var i = t.attributes;
                for (var n in i) {
                    var r = i[n];
                    this.addAttribute(n, r.clone())
                }
                for (var a = t.groups, o = 0, s = a.length; o < s; o++) {
                    var c = a[o];
                    this.addGroup(c.start, c.count, c.materialIndex)
                }
                return this
            }
        }),
        Object.defineProperties(Jn.prototype, {
            count: {
                get: function() {
                    return this.data.count
                }
            },
            array: {
                get: function() {
                    return this.data.array
                }
            }
        }),
        Object.assign(Jn.prototype, {
            isInterleavedBufferAttribute: !0,
            setX: function(t, e) {
                return this.data.array[t * this.data.stride + this.offset] = e,
                this
            },
            setY: function(t, e) {
                return this.data.array[t * this.data.stride + this.offset + 1] = e,
                this
            },
            setZ: function(t, e) {
                return this.data.array[t * this.data.stride + this.offset + 2] = e,
                this
            },
            setW: function(t, e) {
                return this.data.array[t * this.data.stride + this.offset + 3] = e,
                this
            },
            getX: function(t) {
                return this.data.array[t * this.data.stride + this.offset]
            },
            getY: function(t) {
                return this.data.array[t * this.data.stride + this.offset + 1]
            },
            getZ: function(t) {
                return this.data.array[t * this.data.stride + this.offset + 2]
            },
            getW: function(t) {
                return this.data.array[t * this.data.stride + this.offset + 3]
            },
            setXY: function(t, e, i) {
                return t = t * this.data.stride + this.offset,
                this.data.array[t + 0] = e,
                this.data.array[t + 1] = i,
                this
            },
            setXYZ: function(t, e, i, n) {
                return t = t * this.data.stride + this.offset,
                this.data.array[t + 0] = e,
                this.data.array[t + 1] = i,
                this.data.array[t + 2] = n,
                this
            },
            setXYZW: function(t, e, i, n, r) {
                return t = t * this.data.stride + this.offset,
                this.data.array[t + 0] = e,
                this.data.array[t + 1] = i,
                this.data.array[t + 2] = n,
                this.data.array[t + 3] = r,
                this
            }
        }),
        Object.defineProperty(Qn.prototype, "needsUpdate", {
            set: function(t) {
                t === !0 && this.version++
            }
        }),
        Object.assign(Qn.prototype, {
            isInterleavedBuffer: !0,
            setArray: function(t) {
                if (Array.isArray(t))
                    throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
                this.count = void 0 !== t ? t.length / this.stride : 0,
                this.array = t
            },
            setDynamic: function(t) {
                return this.dynamic = t,
                this
            },
            copy: function(t) {
                return this.array = new t.array.constructor(t.array),
                this.count = t.count,
                this.stride = t.stride,
                this.dynamic = t.dynamic,
                this
            },
            copyAt: function(t, e, i) {
                t *= this.stride,
                i *= e.stride;
                for (var n = 0, r = this.stride; n < r; n++)
                    this.array[t + n] = e.array[i + n];
                return this
            },
            set: function(t, e) {
                return void 0 === e && (e = 0),
                this.array.set(t, e),
                this
            },
            clone: function() {
                return (new this.constructor).copy(this)
            },
            onUpload: function(t) {
                return this.onUploadCallback = t,
                this
            }
        }),
        Kn.prototype = Object.assign(Object.create(Qn.prototype), {
            constructor: Kn,
            isInstancedInterleavedBuffer: !0,
            copy: function(t) {
                return Qn.prototype.copy.call(this, t),
                this.meshPerAttribute = t.meshPerAttribute,
                this
            }
        }),
        $n.prototype = Object.assign(Object.create(ft.prototype), {
            constructor: $n,
            isInstancedBufferAttribute: !0,
            copy: function(t) {
                return ft.prototype.copy.call(this, t),
                this.meshPerAttribute = t.meshPerAttribute,
                this
            }
        }),
        Object.assign(tr.prototype, {
            linePrecision: 1,
            set: function(t, e) {
                this.ray.set(t, e)
            },
            setFromCamera: function(t, e) {
                e && e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld),
                this.ray.direction.set(t.x, t.y, .5).unproject(e).sub(this.ray.origin).normalize()) : e && e.isOrthographicCamera ? (this.ray.origin.set(t.x, t.y, (e.near + e.far) / (e.near - e.far)).unproject(e),
                this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld)) : console.error("THREE.Raycaster: Unsupported camera type.")
            },
            intersectObject: function(t, e) {
                var i = [];
                return ir(t, this, i, e),
                i.sort(er),
                i
            },
            intersectObjects: function(t, e) {
                var i = [];
                if (Array.isArray(t) === !1)
                    return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),
                    i;
                for (var n = 0, r = t.length; n < r; n++)
                    ir(t[n], this, i, e);
                return i.sort(er),
                i
            }
        }),
        Object.assign(nr.prototype, {
            start: function() {
                this.startTime = ("undefined" == typeof performance ? Date : performance).now(),
                this.oldTime = this.startTime,
                this.elapsedTime = 0,
                this.running = !0
            },
            stop: function() {
                this.getElapsedTime(),
                this.running = !1
            },
            getElapsedTime: function() {
                return this.getDelta(),
                this.elapsedTime
            },
            getDelta: function() {
                var t = 0;
                if (this.autoStart && !this.running)
                    return this.start(),
                    0;
                if (this.running) {
                    var e = ("undefined" == typeof performance ? Date : performance).now();
                    t = (e - this.oldTime) / 1e3,
                    this.oldTime = e,
                    this.elapsedTime += t
                }
                return t
            }
        }),
        Object.assign(rr.prototype, {
            set: function(t, e, i) {
                return this.radius = t,
                this.phi = e,
                this.theta = i,
                this
            },
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(t) {
                return this.radius = t.radius,
                this.phi = t.phi,
                this.theta = t.theta,
                this
            },
            makeSafe: function() {
                var t = 1e-6;
                return this.phi = Math.max(t, Math.min(Math.PI - t, this.phi)),
                this
            },
            setFromVector3: function(t) {
                return this.radius = t.length(),
                0 === this.radius ? (this.theta = 0,
                this.phi = 0) : (this.theta = Math.atan2(t.x, t.z),
                this.phi = Math.acos(ws.clamp(t.y / this.radius, -1, 1))),
                this
            }
        }),
        Object.assign(ar.prototype, {
            set: function(t, e, i) {
                return this.radius = t,
                this.theta = e,
                this.y = i,
                this
            },
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(t) {
                return this.radius = t.radius,
                this.theta = t.theta,
                this.y = t.y,
                this
            },
            setFromVector3: function(t) {
                return this.radius = Math.sqrt(t.x * t.x + t.z * t.z),
                this.theta = Math.atan2(t.x, t.z),
                this.y = t.y,
                this
            }
        }),
        or.prototype = Object.create(Rt.prototype),
        or.prototype.constructor = or,
        or.prototype.createAnimation = function(t, e, i, n) {
            var r = {
                start: e,
                end: i,
                length: i - e + 1,
                fps: n,
                duration: (i - e) / n,
                lastFrame: 0,
                currentFrame: 0,
                active: !1,
                time: 0,
                direction: 1,
                weight: 1,
                directionBackwards: !1,
                mirroredLoop: !1
            };
            this.animationsMap[t] = r,
            this.animationsList.push(r)
        }
        ,
        or.prototype.autoCreateAnimations = function(t) {
            for (var e, i = /([a-z]+)_?(\d+)/i, n = {}, r = this.geometry, a = 0, o = r.morphTargets.length; a < o; a++) {
                var s = r.morphTargets[a]
                  , c = s.name.match(i);
                if (c && c.length > 1) {
                    var h = c[1];
                    n[h] || (n[h] = {
                        start: 1 / 0,
                        end: -(1 / 0)
                    });
                    var l = n[h];
                    a < l.start && (l.start = a),
                    a > l.end && (l.end = a),
                    e || (e = h)
                }
            }
            for (var h in n) {
                var l = n[h];
                this.createAnimation(h, l.start, l.end, t)
            }
            this.firstAnimation = e
        }
        ,
        or.prototype.setAnimationDirectionForward = function(t) {
            var e = this.animationsMap[t];
            e && (e.direction = 1,
            e.directionBackwards = !1)
        }
        ,
        or.prototype.setAnimationDirectionBackward = function(t) {
            var e = this.animationsMap[t];
            e && (e.direction = -1,
            e.directionBackwards = !0)
        }
        ,
        or.prototype.setAnimationFPS = function(t, e) {
            var i = this.animationsMap[t];
            i && (i.fps = e,
            i.duration = (i.end - i.start) / i.fps)
        }
        ,
        or.prototype.setAnimationDuration = function(t, e) {
            var i = this.animationsMap[t];
            i && (i.duration = e,
            i.fps = (i.end - i.start) / i.duration)
        }
        ,
        or.prototype.setAnimationWeight = function(t, e) {
            var i = this.animationsMap[t];
            i && (i.weight = e)
        }
        ,
        or.prototype.setAnimationTime = function(t, e) {
            var i = this.animationsMap[t];
            i && (i.time = e)
        }
        ,
        or.prototype.getAnimationTime = function(t) {
            var e = 0
              , i = this.animationsMap[t];
            return i && (e = i.time),
            e
        }
        ,
        or.prototype.getAnimationDuration = function(t) {
            var e = -1
              , i = this.animationsMap[t];
            return i && (e = i.duration),
            e
        }
        ,
        or.prototype.playAnimation = function(t) {
            var e = this.animationsMap[t];
            e ? (e.time = 0,
            e.active = !0) : console.warn("THREE.MorphBlendMesh: animation[" + t + "] undefined in .playAnimation()")
        }
        ,
        or.prototype.stopAnimation = function(t) {
            var e = this.animationsMap[t];
            e && (e.active = !1)
        }
        ,
        or.prototype.update = function(t) {
            for (var e = 0, i = this.animationsList.length; e < i; e++) {
                var n = this.animationsList[e];
                if (n.active) {
                    var r = n.duration / n.length;
                    n.time += n.direction * t,
                    n.mirroredLoop ? (n.time > n.duration || n.time < 0) && (n.direction *= -1,
                    n.time > n.duration && (n.time = n.duration,
                    n.directionBackwards = !0),
                    n.time < 0 && (n.time = 0,
                    n.directionBackwards = !1)) : (n.time = n.time % n.duration,
                    n.time < 0 && (n.time += n.duration));
                    var a = n.start + ws.clamp(Math.floor(n.time / r), 0, n.length - 1)
                      , o = n.weight;
                    a !== n.currentFrame && (this.morphTargetInfluences[n.lastFrame] = 0,
                    this.morphTargetInfluences[n.currentFrame] = 1 * o,
                    this.morphTargetInfluences[a] = 0,
                    n.lastFrame = n.currentFrame,
                    n.currentFrame = a);
                    var s = n.time % r / r;
                    n.directionBackwards && (s = 1 - s),
                    n.currentFrame !== n.lastFrame ? (this.morphTargetInfluences[n.currentFrame] = s * o,
                    this.morphTargetInfluences[n.lastFrame] = (1 - s) * o) : this.morphTargetInfluences[n.currentFrame] = o
                }
            }
        }
        ,
        sr.prototype = Object.create(ht.prototype),
        sr.prototype.constructor = sr,
        sr.prototype.isImmediateRenderObject = !0,
        cr.prototype = Object.create(Ae.prototype),
        cr.prototype.constructor = cr,
        cr.prototype.update = function() {
            var t = new h
              , e = new h
              , i = new it;
            return function() {
                var n = ["a", "b", "c"];
                this.object.updateMatrixWorld(!0),
                i.getNormalMatrix(this.object.matrixWorld);
                var r = this.object.matrixWorld
                  , a = this.geometry.attributes.position
                  , o = this.object.geometry;
                if (o && o.isGeometry)
                    for (var s = o.vertices, c = o.faces, h = 0, l = 0, u = c.length; l < u; l++)
                        for (var d = c[l], p = 0, f = d.vertexNormals.length; p < f; p++) {
                            var m = s[d[n[p]]]
                              , g = d.vertexNormals[p];
                            t.copy(m).applyMatrix4(r),
                            e.copy(g).applyMatrix3(i).normalize().multiplyScalar(this.size).add(t),
                            a.setXYZ(h, t.x, t.y, t.z),
                            h += 1,
                            a.setXYZ(h, e.x, e.y, e.z),
                            h += 1
                        }
                else if (o && o.isBufferGeometry)
                    for (var v = o.attributes.position, y = o.attributes.normal, h = 0, p = 0, f = v.count; p < f; p++)
                        t.set(v.getX(p), v.getY(p), v.getZ(p)).applyMatrix4(r),
                        e.set(y.getX(p), y.getY(p), y.getZ(p)),
                        e.applyMatrix3(i).normalize().multiplyScalar(this.size).add(t),
                        a.setXYZ(h, t.x, t.y, t.z),
                        h += 1,
                        a.setXYZ(h, e.x, e.y, e.z),
                        h += 1;
                a.needsUpdate = !0
            }
        }(),
        hr.prototype = Object.create(ht.prototype),
        hr.prototype.constructor = hr,
        hr.prototype.dispose = function() {
            this.cone.geometry.dispose(),
            this.cone.material.dispose()
        }
        ,
        hr.prototype.update = function() {
            var t = new h
              , e = new h;
            return function() {
                var i = this.light.distance ? this.light.distance : 1e3
                  , n = i * Math.tan(this.light.angle);
                this.cone.scale.set(n, n, i),
                t.setFromMatrixPosition(this.light.matrixWorld),
                e.setFromMatrixPosition(this.light.target.matrixWorld),
                this.cone.lookAt(e.sub(t)),
                this.cone.material.color.copy(this.light.color)
            }
        }(),
        lr.prototype = Object.create(Ae.prototype),
        lr.prototype.constructor = lr,
        lr.prototype.getBoneList = function(t) {
            var e = [];
            t && t.isBone && e.push(t);
            for (var i = 0; i < t.children.length; i++)
                e.push.apply(e, this.getBoneList(t.children[i]));
            return e
        }
        ,
        lr.prototype.update = function() {
            var t = new h
              , e = new l
              , i = new l;
            return function() {
                var n = this.geometry
                  , r = n.getAttribute("position");
                i.getInverse(this.root.matrixWorld);
                for (var a = 0, o = 0; a < this.bones.length; a++) {
                    var s = this.bones[a];
                    s.parent && s.parent.isBone && (e.multiplyMatrices(i, s.matrixWorld),
                    t.setFromMatrixPosition(e),
                    r.setXYZ(o, t.x, t.y, t.z),
                    e.multiplyMatrices(i, s.parent.matrixWorld),
                    t.setFromMatrixPosition(e),
                    r.setXYZ(o + 1, t.x, t.y, t.z),
                    o += 2)
                }
                n.getAttribute("position").needsUpdate = !0
            }
        }(),
        ur.prototype = Object.create(Rt.prototype),
        ur.prototype.constructor = ur,
        ur.prototype.dispose = function() {
            this.geometry.dispose(),
            this.material.dispose()
        }
        ,
        ur.prototype.update = function() {
            this.material.color.copy(this.light.color)
        }
        ,
        dr.prototype = Object.create(ht.prototype),
        dr.prototype.constructor = dr,
        dr.prototype.dispose = function() {
            this.children[0].geometry.dispose(),
            this.children[0].material.dispose()
        }
        ,
        dr.prototype.update = function() {
            var t = this.children[0];
            t.material.color.copy(this.light.color);
            var e = .5 * this.light.width
              , i = .5 * this.light.height
              , n = t.geometry.attributes.position
              , r = n.array;
            r[0] = e,
            r[1] = -i,
            r[2] = 0,
            r[3] = e,
            r[4] = i,
            r[5] = 0,
            r[6] = -e,
            r[7] = i,
            r[8] = 0,
            r[9] = -e,
            r[10] = -i,
            r[11] = 0,
            r[12] = e,
            r[13] = -i,
            r[14] = 0,
            n.needsUpdate = !0
        }
        ,
        pr.prototype = Object.create(ht.prototype),
        pr.prototype.constructor = pr,
        pr.prototype.dispose = function() {
            this.children[0].geometry.dispose(),
            this.children[0].material.dispose()
        }
        ,
        pr.prototype.update = function() {
            var t = new h
              , e = new q
              , i = new q;
            return function() {
                var n = this.children[0]
                  , r = n.geometry.getAttribute("color");
                e.copy(this.light.color),
                i.copy(this.light.groundColor);
                for (var a = 0, o = r.count; a < o; a++) {
                    var s = a < o / 2 ? e : i;
                    r.setXYZ(a, s.r, s.g, s.b)
                }
                n.lookAt(t.setFromMatrixPosition(this.light.matrixWorld).negate()),
                r.needsUpdate = !0
            }
        }(),
        fr.prototype = Object.create(Ae.prototype),
        fr.prototype.constructor = fr,
        mr.prototype = Object.create(Ae.prototype),
        mr.prototype.constructor = mr,
        gr.prototype = Object.create(Ae.prototype),
        gr.prototype.constructor = gr,
        gr.prototype.update = function() {
            var t = new h
              , e = new h
              , i = new it;
            return function() {
                this.object.updateMatrixWorld(!0),
                i.getNormalMatrix(this.object.matrixWorld);
                for (var n = this.object.matrixWorld, r = this.geometry.attributes.position, a = this.object.geometry, o = a.vertices, s = a.faces, c = 0, h = 0, l = s.length; h < l; h++) {
                    var u = s[h]
                      , d = u.normal;
                    t.copy(o[u.a]).add(o[u.b]).add(o[u.c]).divideScalar(3).applyMatrix4(n),
                    e.copy(d).applyMatrix3(i).normalize().multiplyScalar(this.size).add(t),
                    r.setXYZ(c, t.x, t.y, t.z),
                    c += 1,
                    r.setXYZ(c, e.x, e.y, e.z),
                    c += 1
                }
                r.needsUpdate = !0
            }
        }(),
        vr.prototype = Object.create(ht.prototype),
        vr.prototype.constructor = vr,
        vr.prototype.dispose = function() {
            var t = this.children[0]
              , e = this.children[1];
            t.geometry.dispose(),
            t.material.dispose(),
            e.geometry.dispose(),
            e.material.dispose()
        }
        ,
        vr.prototype.update = function() {
            var t = new h
              , e = new h
              , i = new h;
            return function() {
                t.setFromMatrixPosition(this.light.matrixWorld),
                e.setFromMatrixPosition(this.light.target.matrixWorld),
                i.subVectors(e, t);
                var n = this.children[0]
                  , r = this.children[1];
                n.lookAt(i),
                n.material.color.copy(this.light.color),
                r.lookAt(i),
                r.scale.z = i.length()
            }
        }(),
        yr.prototype = Object.create(Ae.prototype),
        yr.prototype.constructor = yr,
        yr.prototype.update = function() {
            function t(t, a, o, s) {
                n.set(a, o, s).unproject(r);
                var c = i[t];
                if (void 0 !== c)
                    for (var h = e.getAttribute("position"), l = 0, u = c.length; l < u; l++)
                        h.setXYZ(c[l], n.x, n.y, n.z)
            }
            var e, i, n = new h, r = new Nt;
            return function() {
                e = this.geometry,
                i = this.pointMap;
                var n = 1
                  , a = 1;
                r.projectionMatrix.copy(this.camera.projectionMatrix),
                t("c", 0, 0, -1),
                t("t", 0, 0, 1),
                t("n1", -n, -a, -1),
                t("n2", n, -a, -1),
                t("n3", -n, a, -1),
                t("n4", n, a, -1),
                t("f1", -n, -a, 1),
                t("f2", n, -a, 1),
                t("f3", -n, a, 1),
                t("f4", n, a, 1),
                t("u1", .7 * n, 1.1 * a, -1),
                t("u2", .7 * -n, 1.1 * a, -1),
                t("u3", 0, 2 * a, -1),
                t("cf1", -n, 0, 1),
                t("cf2", n, 0, 1),
                t("cf3", 0, -a, 1),
                t("cf4", 0, a, 1),
                t("cn1", -n, 0, -1),
                t("cn2", n, 0, -1),
                t("cn3", 0, -a, -1),
                t("cn4", 0, a, -1),
                e.getAttribute("position").needsUpdate = !0
            }
        }(),
        xr.prototype = Object.create(Ae.prototype),
        xr.prototype.constructor = xr,
        xr.prototype.update = function() {
            var t = new tt;
            return function(e) {
                if (void 0 !== e && console.warn("THREE.BoxHelper: .update() has no longer arguments."),
                void 0 !== this.object && t.setFromObject(this.object),
                !t.isEmpty()) {
                    var i = t.min
                      , n = t.max
                      , r = this.geometry.attributes.position
                      , a = r.array;
                    a[0] = n.x,
                    a[1] = n.y,
                    a[2] = n.z,
                    a[3] = i.x,
                    a[4] = n.y,
                    a[5] = n.z,
                    a[6] = i.x,
                    a[7] = i.y,
                    a[8] = n.z,
                    a[9] = n.x,
                    a[10] = i.y,
                    a[11] = n.z,
                    a[12] = n.x,
                    a[13] = n.y,
                    a[14] = i.z,
                    a[15] = i.x,
                    a[16] = n.y,
                    a[17] = i.z,
                    a[18] = i.x,
                    a[19] = i.y,
                    a[20] = i.z,
                    a[21] = n.x,
                    a[22] = i.y,
                    a[23] = i.z,
                    r.needsUpdate = !0,
                    this.geometry.computeBoundingSphere()
                }
            }
        }(),
        xr.prototype.setFromObject = function(t) {
            return this.object = t,
            this.update(),
            this
        }
        ;
        var il, nl;
        _r.prototype = Object.create(ht.prototype),
        _r.prototype.constructor = _r,
        _r.prototype.setDirection = function() {
            var t, e = new h;
            return function(i) {
                i.y > .99999 ? this.quaternion.set(0, 0, 0, 1) : i.y < -.99999 ? this.quaternion.set(1, 0, 0, 0) : (e.set(i.z, 0, -i.x).normalize(),
                t = Math.acos(i.y),
                this.quaternion.setFromAxisAngle(e, t))
            }
        }(),
        _r.prototype.setLength = function(t, e, i) {
            void 0 === e && (e = .2 * t),
            void 0 === i && (i = .2 * e),
            this.line.scale.set(1, Math.max(0, t - e), 1),
            this.line.updateMatrix(),
            this.cone.scale.set(i, e, i),
            this.cone.position.y = t,
            this.cone.updateMatrix()
        }
        ,
        _r.prototype.setColor = function(t) {
            this.line.material.color.copy(t),
            this.cone.material.color.copy(t)
        }
        ,
        br.prototype = Object.create(Ae.prototype),
        br.prototype.constructor = br;
        var rl = new h
          , al = new wr
          , ol = new wr
          , sl = new wr;
        Mr.prototype = Object.create(wn.prototype),
        Mr.prototype.constructor = Mr,
        Mr.prototype.getPoint = function(t) {
            var e = this.points
              , i = e.length;
            i < 2 && console.log("duh, you need at least 2 points");
            var n = (i - (this.closed ? 0 : 1)) * t
              , r = Math.floor(n)
              , a = n - r;
            this.closed ? r += r > 0 ? 0 : (Math.floor(Math.abs(r) / e.length) + 1) * e.length : 0 === a && r === i - 1 && (r = i - 2,
            a = 1);
            var o, s, c, l;
            if (this.closed || r > 0 ? o = e[(r - 1) % i] : (rl.subVectors(e[0], e[1]).add(e[0]),
            o = rl),
            s = e[r % i],
            c = e[(r + 1) % i],
            this.closed || r + 2 < i ? l = e[(r + 2) % i] : (rl.subVectors(e[i - 1], e[i - 2]).add(e[i - 1]),
            l = rl),
            void 0 === this.type || "centripetal" === this.type || "chordal" === this.type) {
                var u = "chordal" === this.type ? .5 : .25
                  , d = Math.pow(o.distanceToSquared(s), u)
                  , p = Math.pow(s.distanceToSquared(c), u)
                  , f = Math.pow(c.distanceToSquared(l), u);
                p < 1e-4 && (p = 1),
                d < 1e-4 && (d = p),
                f < 1e-4 && (f = p),
                al.initNonuniformCatmullRom(o.x, s.x, c.x, l.x, d, p, f),
                ol.initNonuniformCatmullRom(o.y, s.y, c.y, l.y, d, p, f),
                sl.initNonuniformCatmullRom(o.z, s.z, c.z, l.z, d, p, f)
            } else if ("catmullrom" === this.type) {
                var m = void 0 !== this.tension ? this.tension : .5;
                al.initCatmullRom(o.x, s.x, c.x, l.x, m),
                ol.initCatmullRom(o.y, s.y, c.y, l.y, m),
                sl.initCatmullRom(o.z, s.z, c.z, l.z, m)
            }
            return new h(al.calc(a),ol.calc(a),sl.calc(a))
        }
        ,
        Er.prototype = Object.create(wn.prototype),
        Er.prototype.constructor = Er,
        Er.prototype.getPoint = function(t) {
            var e = this.v0
              , i = this.v1
              , n = this.v2
              , r = this.v3;
            return new h(bn(t, e.x, i.x, n.x, r.x),bn(t, e.y, i.y, n.y, r.y),bn(t, e.z, i.z, n.z, r.z))
        }
        ,
        Tr.prototype = Object.create(wn.prototype),
        Tr.prototype.constructor = Tr,
        Tr.prototype.getPoint = function(t) {
            var e = this.v0
              , i = this.v1
              , n = this.v2;
            return new h(gn(t, e.x, i.x, n.x),gn(t, e.y, i.y, n.y),gn(t, e.z, i.z, n.z))
        }
        ,
        Sr.prototype = Object.create(wn.prototype),
        Sr.prototype.constructor = Sr,
        Sr.prototype.getPoint = function(t) {
            if (1 === t)
                return this.v2.clone();
            var e = new h;
            return e.subVectors(this.v2, this.v1),
            e.multiplyScalar(t),
            e.add(this.v1),
            e
        }
        ,
        Ar.prototype = Object.create(Tn.prototype),
        Ar.prototype.constructor = Ar;
        var cl = {
            createMultiMaterialObject: function(t, e) {
                for (var i = new Ce, n = 0, r = e.length; n < r; n++)
                    i.add(new Rt(t,e[n]));
                return i
            },
            detach: function(t, e, i) {
                t.applyMatrix(e.matrixWorld),
                e.remove(t),
                i.add(t)
            },
            attach: function(t, e, i) {
                var n = new l;
                n.getInverse(i.matrixWorld),
                t.applyMatrix(n),
                e.remove(t),
                i.add(t)
            }
        }
          , hl = 0
          , ll = 1;
        wn.create = function(t, e) {
            return console.log("THREE.Curve.create() has been deprecated"),
            t.prototype = Object.create(wn.prototype),
            t.prototype.constructor = t,
            t.prototype.getPoint = e,
            t
        }
        ,
        Yr.prototype = Object.create(Mr.prototype),
        Zr.prototype = Object.create(Mr.prototype),
        Jr.prototype = Object.create(Mr.prototype),
        Object.assign(Jr.prototype, {
            initFromArray: function(t) {
                console.error("THREE.Spline: .initFromArray() has been removed.")
            },
            getControlPointsArray: function(t) {
                console.error("THREE.Spline: .getControlPointsArray() has been removed.")
            },
            reparametrizeByArcLength: function(t) {
                console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")
            }
        }),
        fr.prototype.setColors = function() {
            console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")
        }
        ,
        Object.assign(Y.prototype, {
            center: function(t) {
                return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),
                this.getCenter(t)
            },
            empty: function() {
                return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),
                this.isEmpty()
            },
            isIntersectionBox: function(t) {
                return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),
                this.intersectsBox(t)
            },
            size: function(t) {
                return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),
                this.getSize(t)
            }
        }),
        Object.assign(tt.prototype, {
            center: function(t) {
                return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),
                this.getCenter(t)
            },
            empty: function() {
                return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),
                this.isEmpty()
            },
            isIntersectionBox: function(t) {
                return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),
                this.intersectsBox(t)
            },
            isIntersectionSphere: function(t) {
                return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),
                this.intersectsSphere(t)
            },
            size: function(t) {
                return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),
                this.getSize(t)
            }
        }),
        lt.prototype.center = function(t) {
            return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."),
            this.getCenter(t)
        }
        ,
        ws.random16 = function() {
            return console.warn("THREE.Math.random16() has been deprecated. Use Math.random() instead."),
            Math.random()
        }
        ,
        Object.assign(it.prototype, {
            flattenToArrayOffset: function(t, e) {
                return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),
                this.toArray(t, e)
            },
            multiplyVector3: function(t) {
                return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),
                t.applyMatrix3(this)
            },
            multiplyVector3Array: function(t) {
                return console.warn("THREE.Matrix3: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."),
                this.applyToVector3Array(t)
            },
            applyToBuffer: function(t, e, i) {
                return console.warn("THREE.Matrix3: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."),
                this.applyToBufferAttribute(t)
            },
            applyToVector3Array: function(t, e, i) {
                console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")
            }
        }),
        Object.assign(l.prototype, {
            extractPosition: function(t) {
                return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),
                this.copyPosition(t)
            },
            flattenToArrayOffset: function(t, e) {
                return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),
                this.toArray(t, e)
            },
            getPosition: function() {
                var t;
                return function() {
                    return void 0 === t && (t = new h),
                    console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),
                    t.setFromMatrixColumn(this, 3)
                }
            }(),
            setRotationFromQuaternion: function(t) {
                return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),
                this.makeRotationFromQuaternion(t)
            },
            multiplyToArray: function() {
                console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")
            },
            multiplyVector3: function(t) {
                return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),
                t.applyMatrix4(this)
            },
            multiplyVector4: function(t) {
                return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),
                t.applyMatrix4(this)
            },
            multiplyVector3Array: function(t) {
                return console.warn("THREE.Matrix4: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."),
                this.applyToVector3Array(t)
            },
            rotateAxis: function(t) {
                console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),
                t.transformDirection(this)
            },
            crossVector: function(t) {
                return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),
                t.applyMatrix4(this)
            },
            translate: function() {
                console.error("THREE.Matrix4: .translate() has been removed.")
            },
            rotateX: function() {
                console.error("THREE.Matrix4: .rotateX() has been removed.")
            },
            rotateY: function() {
                console.error("THREE.Matrix4: .rotateY() has been removed.")
            },
            rotateZ: function() {
                console.error("THREE.Matrix4: .rotateZ() has been removed.")
            },
            rotateByAxis: function() {
                console.error("THREE.Matrix4: .rotateByAxis() has been removed.")
            },
            applyToBuffer: function(t, e, i) {
                return console.warn("THREE.Matrix4: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."),
                this.applyToBufferAttribute(t)
            },
            applyToVector3Array: function(t, e, i) {
                console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")
            },
            makeFrustum: function(t, e, i, n, r, a) {
                return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),
                this.makePerspective(t, e, n, i, r, a)
            }
        }),
        nt.prototype.isIntersectionLine = function(t) {
            return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),
            this.intersectsLine(t)
        }
        ,
        c.prototype.multiplyVector3 = function(t) {
            return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),
            t.applyQuaternion(this)
        }
        ,
        Object.assign(ot.prototype, {
            isIntersectionBox: function(t) {
                return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),
                this.intersectsBox(t)
            },
            isIntersectionPlane: function(t) {
                return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),
                this.intersectsPlane(t)
            },
            isIntersectionSphere: function(t) {
                return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),
                this.intersectsSphere(t)
            }
        }),
        Object.assign(Pn.prototype, {
            extrude: function(t) {
                return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),
                new ei(this,t)
            },
            makeGeometry: function(t) {
                return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),
                new ui(this,t)
            }
        }),
        Object.assign(i.prototype, {
            fromAttribute: function(t, e, i) {
                return console.error("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),
                this.fromBufferAttribute(t, e, i)
            }
        }),
        Object.assign(h.prototype, {
            setEulerFromRotationMatrix: function() {
                console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
            },
            setEulerFromQuaternion: function() {
                console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
            },
            getPositionFromMatrix: function(t) {
                return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),
                this.setFromMatrixPosition(t)
            },
            getScaleFromMatrix: function(t) {
                return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),
                this.setFromMatrixScale(t)
            },
            getColumnFromMatrix: function(t, e) {
                return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),
                this.setFromMatrixColumn(e, t)
            },
            applyProjection: function(t) {
                return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),
                this.applyMatrix4(t)
            },
            fromAttribute: function(t, e, i) {
                return console.error("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),
                this.fromBufferAttribute(t, e, i)
            }
        }),
        Object.assign(r.prototype, {
            fromAttribute: function(t, e, i) {
                return console.error("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),
                this.fromBufferAttribute(t, e, i)
            }
        }),
        At.prototype.computeTangents = function() {
            console.warn("THREE.Geometry: .computeTangents() has been removed.")
        }
        ,
        Object.assign(ht.prototype, {
            getChildByName: function(t) {
                return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),
                this.getObjectByName(t)
            },
            renderDepth: function() {
                console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")
            },
            translate: function(t, e) {
                return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),
                this.translateOnAxis(e, t)
            }
        }),
        Object.defineProperties(ht.prototype, {
            eulerOrder: {
                get: function() {
                    return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),
                    this.rotation.order
                },
                set: function(t) {
                    console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),
                    this.rotation.order = t
                }
            },
            useQuaternion: {
                get: function() {
                    console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
                },
                set: function() {
                    console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
                }
            }
        }),
        Object.defineProperties(be.prototype, {
            objects: {
                get: function() {
                    return console.warn("THREE.LOD: .objects has been renamed to .levels."),
                    this.levels
                }
            }
        }),
        Object.defineProperty(we.prototype, "useVertexTexture", {
            get: function() {
                console.warn("THREE.Skeleton: useVertexTexture has been removed.")
            },
            set: function() {
                console.warn("THREE.Skeleton: useVertexTexture has been removed.")
            }
        }),
        Object.defineProperty(wn.prototype, "__arcLengthDivisions", {
            get: function() {
                return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),
                this.arcLengthDivisions
            },
            set: function(t) {
                console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),
                this.arcLengthDivisions = t
            }
        }),
        Ot.prototype.setLens = function(t, e) {
            console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),
            void 0 !== e && (this.filmGauge = e),
            this.setFocalLength(t)
        }
        ,
        Object.defineProperties(Di.prototype, {
            onlyShadow: {
                set: function() {
                    console.warn("THREE.Light: .onlyShadow has been removed.")
                }
            },
            shadowCameraFov: {
                set: function(t) {
                    console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),
                    this.shadow.camera.fov = t
                }
            },
            shadowCameraLeft: {
                set: function(t) {
                    console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),
                    this.shadow.camera.left = t
                }
            },
            shadowCameraRight: {
                set: function(t) {
                    console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),
                    this.shadow.camera.right = t
                }
            },
            shadowCameraTop: {
                set: function(t) {
                    console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),
                    this.shadow.camera.top = t
                }
            },
            shadowCameraBottom: {
                set: function(t) {
                    console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),
                    this.shadow.camera.bottom = t
                }
            },
            shadowCameraNear: {
                set: function(t) {
                    console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),
                    this.shadow.camera.near = t
                }
            },
            shadowCameraFar: {
                set: function(t) {
                    console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),
                    this.shadow.camera.far = t
                }
            },
            shadowCameraVisible: {
                set: function() {
                    console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")
                }
            },
            shadowBias: {
                set: function(t) {
                    console.warn("THREE.Light: .shadowBias is now .shadow.bias."),
                    this.shadow.bias = t
                }
            },
            shadowDarkness: {
                set: function() {
                    console.warn("THREE.Light: .shadowDarkness has been removed.")
                }
            },
            shadowMapWidth: {
                set: function(t) {
                    console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),
                    this.shadow.mapSize.width = t
                }
            },
            shadowMapHeight: {
                set: function(t) {
                    console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),
                    this.shadow.mapSize.height = t
                }
            }
        }),
        Object.defineProperties(ft.prototype, {
            length: {
                get: function() {
                    return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),
                    this.array.length
                }
            }
        }),
        Object.assign(Lt.prototype, {
            addIndex: function(t) {
                console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),
                this.setIndex(t)
            },
            addDrawCall: function(t, e, i) {
                void 0 !== i && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),
                console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),
                this.addGroup(t, e)
            },
            clearDrawCalls: function() {
                console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),
                this.clearGroups()
            },
            computeTangents: function() {
                console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")
            },
            computeOffsets: function() {
                console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")
            }
        }),
        Object.defineProperties(Lt.prototype, {
            drawcalls: {
                get: function() {
                    return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),
                    this.groups
                }
            },
            offsets: {
                get: function() {
                    return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),
                    this.groups
                }
            }
        }),
        Object.defineProperties(Yn.prototype, {
            dynamic: {
                set: function() {
                    console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")
                }
            },
            onUpdate: {
                value: function() {
                    return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),
                    this
                }
            }
        }),
        Object.defineProperties(Q.prototype, {
            wrapAround: {
                get: function() {
                    console.warn("THREE.Material: .wrapAround has been removed.")
                },
                set: function() {
                    console.warn("THREE.Material: .wrapAround has been removed.")
                }
            },
            wrapRGB: {
                get: function() {
                    return console.warn("THREE.Material: .wrapRGB has been removed."),
                    new q
                }
            }
        }),
        Object.defineProperties(Ei.prototype, {
            metal: {
                get: function() {
                    return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."),
                    !1
                },
                set: function() {
                    console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")
                }
            }
        }),
        Object.defineProperties(K.prototype, {
            derivatives: {
                get: function() {
                    return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),
                    this.extensions.derivatives
                },
                set: function(t) {
                    console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),
                    this.extensions.derivatives = t
                }
            }
        }),
        Object.assign(fe.prototype, {
            getCurrentRenderTarget: function() {
                return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),
                this.getRenderTarget()
            },
            supportsFloatTextures: function() {
                return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),
                this.extensions.get("OES_texture_float")
            },
            supportsHalfFloatTextures: function() {
                return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),
                this.extensions.get("OES_texture_half_float")
            },
            supportsStandardDerivatives: function() {
                return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),
                this.extensions.get("OES_standard_derivatives")
            },
            supportsCompressedTextureS3TC: function() {
                return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),
                this.extensions.get("WEBGL_compressed_texture_s3tc")
            },
            supportsCompressedTexturePVRTC: function() {
                return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),
                this.extensions.get("WEBGL_compressed_texture_pvrtc")
            },
            supportsBlendMinMax: function() {
                return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),
                this.extensions.get("EXT_blend_minmax")
            },
            supportsVertexTextures: function() {
                return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),
                this.capabilities.vertexTextures
            },
            supportsInstancedArrays: function() {
                return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),
                this.extensions.get("ANGLE_instanced_arrays")
            },
            enableScissorTest: function(t) {
                console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),
                this.setScissorTest(t)
            },
            initMaterial: function() {
                console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
            },
            addPrePlugin: function() {
                console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
            },
            addPostPlugin: function() {
                console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
            },
            updateShadowMap: function() {
                console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
            }
        }),
        Object.defineProperties(fe.prototype, {
            shadowMapEnabled: {
                get: function() {
                    return this.shadowMap.enabled
                },
                set: function(t) {
                    console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),
                    this.shadowMap.enabled = t
                }
            },
            shadowMapType: {
                get: function() {
                    return this.shadowMap.type
                },
                set: function(t) {
                    console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),
                    this.shadowMap.type = t
                }
            },
            shadowMapCullFace: {
                get: function() {
                    return this.shadowMap.cullFace
                },
                set: function(t) {
                    console.warn("THREE.WebGLRenderer: .shadowMapCullFace is now .shadowMap.cullFace."),
                    this.shadowMap.cullFace = t
                }
            }
        }),
        Object.defineProperties(at.prototype, {
            cullFace: {
                get: function() {
                    return this.renderReverseSided ? ca : sa
                },
                set: function(t) {
                    var e = t !== sa;
                    console.warn("WebGLRenderer: .shadowMap.cullFace is deprecated. Set .shadowMap.renderReverseSided to " + e + "."),
                    this.renderReverseSided = e
                }
            }
        }),
        Object.defineProperties(a.prototype, {
            wrapS: {
                get: function() {
                    return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),
                    this.texture.wrapS
                },
                set: function(t) {
                    console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),
                    this.texture.wrapS = t
                }
            },
            wrapT: {
                get: function() {
                    return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),
                    this.texture.wrapT
                },
                set: function(t) {
                    console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),
                    this.texture.wrapT = t
                }
            },
            magFilter: {
                get: function() {
                    return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),
                    this.texture.magFilter
                },
                set: function(t) {
                    console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),
                    this.texture.magFilter = t
                }
            },
            minFilter: {
                get: function() {
                    return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),
                    this.texture.minFilter
                },
                set: function(t) {
                    console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),
                    this.texture.minFilter = t
                }
            },
            anisotropy: {
                get: function() {
                    return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),
                    this.texture.anisotropy
                },
                set: function(t) {
                    console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),
                    this.texture.anisotropy = t
                }
            },
            offset: {
                get: function() {
                    return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),
                    this.texture.offset
                },
                set: function(t) {
                    console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),
                    this.texture.offset = t
                }
            },
            repeat: {
                get: function() {
                    return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),
                    this.texture.repeat
                },
                set: function(t) {
                    console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),
                    this.texture.repeat = t
                }
            },
            format: {
                get: function() {
                    return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),
                    this.texture.format
                },
                set: function(t) {
                    console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),
                    this.texture.format = t
                }
            },
            type: {
                get: function() {
                    return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),
                    this.texture.type
                },
                set: function(t) {
                    console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),
                    this.texture.type = t
                }
            },
            generateMipmaps: {
                get: function() {
                    return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),
                    this.texture.generateMipmaps
                },
                set: function(t) {
                    console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),
                    this.texture.generateMipmaps = t
                }
            }
        }),
        zn.prototype.load = function(t) {
            console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
            var e = this
              , i = new Nn;
            return i.load(t, function(t) {
                e.setBuffer(t)
            }),
            this
        }
        ,
        Hn.prototype.getData = function() {
            return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."),
            this.getFrequencyData()
        }
        ;
        var ul = {
            merge: function(t, e, i) {
                console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");
                var n;
                e.isMesh && (e.matrixAutoUpdate && e.updateMatrix(),
                n = e.matrix,
                e = e.geometry),
                t.merge(e, n, i)
            },
            center: function(t) {
                return console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead."),
                t.center()
            }
        }
          , dl = {
            crossOrigin: void 0,
            loadTexture: function(t, e, i, n) {
                console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
                var r = new Oi;
                r.setCrossOrigin(this.crossOrigin);
                var a = r.load(t, i, void 0, n);
                return e && (a.mapping = e),
                a
            },
            loadTextureCube: function(t, e, i, n) {
                console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
                var r = new Ni;
                r.setCrossOrigin(this.crossOrigin);
                var a = r.load(t, i, void 0, n);
                return e && (a.mapping = e),
                a
            },
            loadCompressedTexture: function() {
                console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
            },
            loadCompressedTextureCube: function() {
                console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
            }
        };
        t.WebGLRenderTargetCube = s,
        t.WebGLRenderTarget = a,
        t.WebGLRenderer = fe,
        t.ShaderLib = Fh,
        t.UniformsLib = Is,
        t.UniformsUtils = Us,
        t.ShaderChunk = Dh,
        t.FogExp2 = me,
        t.Fog = ge,
        t.Scene = ve,
        t.LensFlare = ye,
        t.Sprite = _e,
        t.LOD = be,
        t.SkinnedMesh = Ee,
        t.Skeleton = we,
        t.Bone = Me,
        t.Mesh = Rt,
        t.LineSegments = Ae,
        t.LineLoop = Le,
        t.Line = Se,
        t.Points = Pe,
        t.Group = Ce,
        t.VideoTexture = Ie,
        t.DataTexture = u,
        t.CompressedTexture = Ue,
        t.CubeTexture = d,
        t.CanvasTexture = Ne,
        t.DepthTexture = Oe,
        t.Texture = n,
        t.CompressedTextureLoader = Ci,
        t.DataTextureLoader = Ii,
        t.CubeTextureLoader = Ni,
        t.TextureLoader = Oi,
        t.ObjectLoader = un,
        t.MaterialLoader = sn,
        t.BufferGeometryLoader = cn,
        t.DefaultLoadingManager = Xh,
        t.LoadingManager = Ri,
        t.JSONLoader = ln,
        t.ImageLoader = Ui,
        t.FontLoader = Un,
        t.FileLoader = Pi,
        t.Loader = hn,
        t.Cache = Wh,
        t.AudioLoader = Nn,
        t.SpotLightShadow = zi,
        t.SpotLight = Gi,
        t.PointLight = Hi,
        t.RectAreaLight = Wi,
        t.HemisphereLight = Fi,
        t.DirectionalLightShadow = Vi,
        t.DirectionalLight = ki,
        t.AmbientLight = ji,
        t.LightShadow = Bi,
        t.Light = Di,
        t.StereoCamera = On,
        t.PerspectiveCamera = Ot,
        t.OrthographicCamera = Dt,
        t.CubeCamera = Dn,
        t.ArrayCamera = Fn,
        t.Camera = Nt,
        t.AudioListener = Bn,
        t.PositionalAudio = Gn,
        t.AudioContext = el,
        t.AudioAnalyser = Hn,
        t.Audio = zn,
        t.VectorKeyframeTrack = Qi,
        t.StringKeyframeTrack = en,
        t.QuaternionKeyframeTrack = $i,
        t.NumberKeyframeTrack = tn,
        t.ColorKeyframeTrack = rn,
        t.BooleanKeyframeTrack = nn,
        t.PropertyMixer = Vn,
        t.PropertyBinding = jn,
        t.KeyframeTrack = an,
        t.AnimationUtils = qh,
        t.AnimationObjectGroup = Wn,
        t.AnimationMixer = qn,
        t.AnimationClip = on,
        t.Uniform = Yn,
        t.InstancedBufferGeometry = Zn,
        t.BufferGeometry = Lt,
        t.GeometryIdCount = St,
        t.Geometry = At,
        t.InterleavedBufferAttribute = Jn,
        t.InstancedInterleavedBuffer = Kn,
        t.InterleavedBuffer = Qn,
        t.InstancedBufferAttribute = $n,
        t.Face3 = dt,
        t.Object3D = ht,
        t.Raycaster = tr,
        t.Layers = ct,
        t.EventDispatcher = e,
        t.Clock = nr,
        t.QuaternionLinearInterpolant = Ki,
        t.LinearInterpolant = Yi,
        t.DiscreteInterpolant = Zi,
        t.CubicInterpolant = qi,
        t.Interpolant = Xi,
        t.Triangle = ut,
        t.Math = ws,
        t.Spherical = rr,
        t.Cylindrical = ar,
        t.Plane = nt,
        t.Frustum = rt,
        t.Sphere = et,
        t.Ray = ot,
        t.Matrix4 = l,
        t.Matrix3 = it,
        t.Box3 = tt,
        t.Box2 = Y,
        t.Line3 = lt,
        t.Euler = st,
        t.Vector4 = r,
        t.Vector3 = h,
        t.Vector2 = i,
        t.Quaternion = c,
        t.Color = q,
        t.MorphBlendMesh = or,
        t.ImmediateRenderObject = sr,
        t.VertexNormalsHelper = cr,
        t.SpotLightHelper = hr,
        t.SkeletonHelper = lr,
        t.PointLightHelper = ur,
        t.RectAreaLightHelper = dr,
        t.HemisphereLightHelper = pr,
        t.GridHelper = fr,
        t.PolarGridHelper = mr,
        t.FaceNormalsHelper = gr,
        t.DirectionalLightHelper = vr,
        t.CameraHelper = yr,
        t.BoxHelper = xr,
        t.ArrowHelper = _r,
        t.AxisHelper = br,
        t.CatmullRomCurve3 = Mr,
        t.CubicBezierCurve3 = Er,
        t.QuadraticBezierCurve3 = Tr,
        t.LineCurve3 = Sr,
        t.ArcCurve = Ar,
        t.EllipseCurve = Tn,
        t.SplineCurve = Sn,
        t.CubicBezierCurve = An,
        t.QuadraticBezierCurve = Ln,
        t.LineCurve = Mn,
        t.Shape = Pn,
        t.Path = Rn,
        t.ShapePath = Cn,
        t.Font = In,
        t.CurvePath = En,
        t.Curve = wn,
        t.ShapeUtils = Vh,
        t.SceneUtils = cl,
        t.WireframeGeometry = De,
        t.ParametricGeometry = Fe,
        t.ParametricBufferGeometry = Be,
        t.TetrahedronGeometry = He,
        t.TetrahedronBufferGeometry = Ve,
        t.OctahedronGeometry = ke,
        t.OctahedronBufferGeometry = je,
        t.IcosahedronGeometry = We,
        t.IcosahedronBufferGeometry = Xe,
        t.DodecahedronGeometry = qe,
        t.DodecahedronBufferGeometry = Ye,
        t.PolyhedronGeometry = ze,
        t.PolyhedronBufferGeometry = Ge,
        t.TubeGeometry = Ze,
        t.TubeBufferGeometry = Je,
        t.TorusKnotGeometry = Qe,
        t.TorusKnotBufferGeometry = Ke,
        t.TorusGeometry = $e,
        t.TorusBufferGeometry = ti,
        t.TextGeometry = ni,
        t.TextBufferGeometry = ri,
        t.SphereGeometry = ai,
        t.SphereBufferGeometry = oi,
        t.RingGeometry = si,
        t.RingBufferGeometry = ci,
        t.PlaneGeometry = It,
        t.PlaneBufferGeometry = Ut,
        t.LatheGeometry = hi,
        t.LatheBufferGeometry = li,
        t.ShapeGeometry = ui,
        t.ShapeBufferGeometry = di,
        t.ExtrudeGeometry = ei,
        t.ExtrudeBufferGeometry = ii,
        t.EdgesGeometry = pi,
        t.ConeGeometry = gi,
        t.ConeBufferGeometry = vi,
        t.CylinderGeometry = fi,
        t.CylinderBufferGeometry = mi,
        t.CircleGeometry = yi,
        t.CircleBufferGeometry = xi,
        t.BoxGeometry = Pt,
        t.BoxBufferGeometry = Ct,
        t.ShadowMaterial = _i,
        t.SpriteMaterial = xe,
        t.RawShaderMaterial = bi,
        t.ShaderMaterial = K,
        t.PointsMaterial = Re,
        t.MeshPhysicalMaterial = Mi;
        t.MeshStandardMaterial = wi;
        t.MeshPhongMaterial = Ei,
        t.MeshToonMaterial = Ti,
        t.MeshNormalMaterial = Si,
        t.MeshLambertMaterial = Ai,
        t.MeshDepthMaterial = $,
        t.MeshBasicMaterial = pt,
        t.LineDashedMaterial = Li,
        t.LineBasicMaterial = Te,
        t.Material = Q,
        t.Float64BufferAttribute = Mt,
        t.Float32BufferAttribute = wt,
        t.Uint32BufferAttribute = bt,
        t.Int32BufferAttribute = _t,
        t.Uint16BufferAttribute = xt,
        t.Int16BufferAttribute = yt,
        t.Uint8ClampedBufferAttribute = vt,
        t.Uint8BufferAttribute = gt,
        t.Int8BufferAttribute = mt,
        t.BufferAttribute = ft,
        t.REVISION = ra,
        t.MOUSE = aa,
        t.CullFaceNone = oa,
        t.CullFaceBack = sa,
        t.CullFaceFront = ca,
        t.CullFaceFrontBack = ha,
        t.FrontFaceDirectionCW = la,
        t.FrontFaceDirectionCCW = ua,
        t.BasicShadowMap = da,
        t.PCFShadowMap = pa,
        t.PCFSoftShadowMap = fa,
        t.FrontSide = ma,
        t.BackSide = ga,
        t.DoubleSide = va,
        t.FlatShading = ya,
        t.SmoothShading = xa,
        t.NoColors = _a,
        t.FaceColors = ba,
        t.VertexColors = wa,
        t.NoBlending = Ma,
        t.NormalBlending = Ea,
        t.AdditiveBlending = Ta,
        t.SubtractiveBlending = Sa,
        t.MultiplyBlending = Aa,
        t.CustomBlending = La,
        t.AddEquation = Ra,
        t.SubtractEquation = Pa,
        t.ReverseSubtractEquation = Ca,
        t.MinEquation = Ia,
        t.MaxEquation = Ua,
        t.ZeroFactor = Na,
        t.OneFactor = Oa,
        t.SrcColorFactor = Da,
        t.OneMinusSrcColorFactor = Fa,
        t.SrcAlphaFactor = Ba,
        t.OneMinusSrcAlphaFactor = za,
        t.DstAlphaFactor = Ga,
        t.OneMinusDstAlphaFactor = Ha,
        t.DstColorFactor = Va,
        t.OneMinusDstColorFactor = ka,
        t.SrcAlphaSaturateFactor = ja,
        t.NeverDepth = Wa,
        t.AlwaysDepth = Xa,
        t.LessDepth = qa,
        t.LessEqualDepth = Ya,
        t.EqualDepth = Za,
        t.GreaterEqualDepth = Ja,
        t.GreaterDepth = Qa,
        t.NotEqualDepth = Ka,
        t.MultiplyOperation = $a,
        t.MixOperation = to,
        t.AddOperation = eo,
        t.NoToneMapping = io,
        t.LinearToneMapping = no,
        t.ReinhardToneMapping = ro,
        t.Uncharted2ToneMapping = ao,
        t.CineonToneMapping = oo,
        t.UVMapping = so,
        t.CubeReflectionMapping = co,
        t.CubeRefractionMapping = ho,
        t.EquirectangularReflectionMapping = lo,
        t.EquirectangularRefractionMapping = uo,
        t.SphericalReflectionMapping = po,
        t.CubeUVReflectionMapping = fo,
        t.CubeUVRefractionMapping = mo,
        t.RepeatWrapping = go,
        t.ClampToEdgeWrapping = vo,
        t.MirroredRepeatWrapping = yo,
        t.NearestFilter = xo,
        t.NearestMipMapNearestFilter = _o,
        t.NearestMipMapLinearFilter = bo,
        t.LinearFilter = wo,
        t.LinearMipMapNearestFilter = Mo,
        t.LinearMipMapLinearFilter = Eo,
        t.UnsignedByteType = To,
        t.ByteType = So,
        t.ShortType = Ao,
        t.UnsignedShortType = Lo,
        t.IntType = Ro,
        t.UnsignedIntType = Po,
        t.FloatType = Co,
        t.HalfFloatType = Io,
        t.UnsignedShort4444Type = Uo,
        t.UnsignedShort5551Type = No,
        t.UnsignedShort565Type = Oo,
        t.UnsignedInt248Type = Do,
        t.AlphaFormat = Fo,
        t.RGBFormat = Bo,
        t.RGBAFormat = zo,
        t.LuminanceFormat = Go,
        t.LuminanceAlphaFormat = Ho,
        t.RGBEFormat = Vo,
        t.DepthFormat = ko,
        t.DepthStencilFormat = jo,
        t.RGB_S3TC_DXT1_Format = Wo,
        t.RGBA_S3TC_DXT1_Format = Xo,
        t.RGBA_S3TC_DXT3_Format = qo,
        t.RGBA_S3TC_DXT5_Format = Yo,
        t.RGB_PVRTC_4BPPV1_Format = Zo,
        t.RGB_PVRTC_2BPPV1_Format = Jo,
        t.RGBA_PVRTC_4BPPV1_Format = Qo,
        t.RGBA_PVRTC_2BPPV1_Format = Ko,
        t.RGB_ETC1_Format = $o,
        t.LoopOnce = ts,
        t.LoopRepeat = es,
        t.LoopPingPong = is,
        t.InterpolateDiscrete = ns,
        t.InterpolateLinear = rs,
        t.InterpolateSmooth = as,
        t.ZeroCurvatureEnding = os,
        t.ZeroSlopeEnding = ss,
        t.WrapAroundEnding = cs,
        t.TrianglesDrawMode = hs,
        t.TriangleStripDrawMode = ls,
        t.TriangleFanDrawMode = us,
        t.LinearEncoding = ds,
        t.sRGBEncoding = ps,
        t.GammaEncoding = fs,
        t.RGBEEncoding = ms,
        t.LogLuvEncoding = gs,
        t.RGBM7Encoding = vs,
        t.RGBM16Encoding = ys,
        t.RGBDEncoding = xs,
        t.BasicDepthPacking = _s,
        t.RGBADepthPacking = bs,
        t.CubeGeometry = Pt,
        t.Face4 = Lr,
        t.LineStrip = hl,
        t.LinePieces = ll,
        t.MeshFaceMaterial = Rr,
        t.MultiMaterial = Pr,
        t.PointCloud = Cr,
        t.Particle = Ir,
        t.ParticleSystem = Ur,
        t.PointCloudMaterial = Nr,
        t.ParticleBasicMaterial = Or,
        t.ParticleSystemMaterial = Dr,
        t.Vertex = Fr,
        t.DynamicBufferAttribute = Br,
        t.Int8Attribute = zr,
        t.Uint8Attribute = Gr,
        t.Uint8ClampedAttribute = Hr,
        t.Int16Attribute = Vr,
        t.Uint16Attribute = kr,
        t.Int32Attribute = jr,
        t.Uint32Attribute = Wr,
        t.Float32Attribute = Xr,
        t.Float64Attribute = qr,
        t.ClosedSplineCurve3 = Yr,
        t.SplineCurve3 = Zr,
        t.Spline = Jr,
        t.BoundingBoxHelper = Qr,
        t.EdgesHelper = Kr,
        t.WireframeHelper = $r,
        t.XHRLoader = ta,
        t.BinaryTextureLoader = ea,
        t.GeometryUtils = ul,
        t.ImageUtils = dl,
        t.Projector = ia,
        t.CanvasRenderer = na,
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    })
}
]);
