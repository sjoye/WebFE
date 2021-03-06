"use strict";
var THREE = {
    REVISION: "75"
};
"function" == typeof define && define.amd ? define("three", THREE) : "undefined" != typeof exports && "undefined" != typeof module && (module.exports = THREE),
void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52)),
void 0 === Math.sign && (Math.sign = function(a) {
    return 0 > a ? -1 : a > 0 ? 1 : +a
}
),
void 0 === Function.prototype.name && void 0 !== Object.defineProperty && Object.defineProperty(Function.prototype, "name", {
    get: function() {
        return this.toString().match(/^\s*function\s*(\S*)\s*\(/)[1]
    }
}),
void 0 === Object.assign && Object.defineProperty(Object, "assign", {
    writable: !0,
    configurable: !0,
    value: function(a) {
        if (void 0 === a || null === a)
            throw new TypeError("Cannot convert first argument to object");
        for (var b = Object(a), c = 1, d = arguments.length; c !== d; ++c) {
            var e = arguments[c];
            if (void 0 !== e && null !== e)
                for (var e = Object(e), f = Object.keys(e), g = 0, h = f.length; g !== h; ++g) {
                    var i = f[g]
                      , j = Object.getOwnPropertyDescriptor(e, i);
                    void 0 !== j && j.enumerable && (b[i] = e[i])
                }
        }
        return b
    }
}),
THREE.MOUSE = {
    LEFT: 0,
    MIDDLE: 1,
    RIGHT: 2
},
THREE.CullFaceNone = 0,
THREE.CullFaceBack = 1,
THREE.CullFaceFront = 2,
THREE.CullFaceFrontBack = 3,
THREE.FrontFaceDirectionCW = 0,
THREE.FrontFaceDirectionCCW = 1,
THREE.BasicShadowMap = 0,
THREE.PCFShadowMap = 1,
THREE.PCFSoftShadowMap = 2,
THREE.FrontSide = 0,
THREE.BackSide = 1,
THREE.DoubleSide = 2,
THREE.FlatShading = 1,
THREE.SmoothShading = 2,
THREE.NoColors = 0,
THREE.FaceColors = 1,
THREE.VertexColors = 2,
THREE.NoBlending = 0,
THREE.NormalBlending = 1,
THREE.AdditiveBlending = 2,
THREE.SubtractiveBlending = 3,
THREE.MultiplyBlending = 4,
THREE.CustomBlending = 5,
THREE.AddEquation = 100,
THREE.SubtractEquation = 101,
THREE.ReverseSubtractEquation = 102,
THREE.MinEquation = 103,
THREE.MaxEquation = 104,
THREE.ZeroFactor = 200,
THREE.OneFactor = 201,
THREE.SrcColorFactor = 202,
THREE.OneMinusSrcColorFactor = 203,
THREE.SrcAlphaFactor = 204,
THREE.OneMinusSrcAlphaFactor = 205,
THREE.DstAlphaFactor = 206,
THREE.OneMinusDstAlphaFactor = 207,
THREE.DstColorFactor = 208,
THREE.OneMinusDstColorFactor = 209,
THREE.SrcAlphaSaturateFactor = 210,
THREE.NeverDepth = 0,
THREE.AlwaysDepth = 1,
THREE.LessDepth = 2,
THREE.LessEqualDepth = 3,
THREE.EqualDepth = 4,
THREE.GreaterEqualDepth = 5,
THREE.GreaterDepth = 6,
THREE.NotEqualDepth = 7,
THREE.MultiplyOperation = 0,
THREE.MixOperation = 1,
THREE.AddOperation = 2,
THREE.NoToneMapping = 0,
THREE.LinearToneMapping = 1,
THREE.ReinhardToneMapping = 2,
THREE.Uncharted2ToneMapping = 3,
THREE.CineonToneMapping = 4,
THREE.UVMapping = 300,
THREE.CubeReflectionMapping = 301,
THREE.CubeRefractionMapping = 302,
THREE.EquirectangularReflectionMapping = 303,
THREE.EquirectangularRefractionMapping = 304,
THREE.SphericalReflectionMapping = 305,
THREE.CubeUVReflectionMapping = 306,
THREE.CubeUVRefractionMapping = 307,
THREE.RepeatWrapping = 1e3,
THREE.ClampToEdgeWrapping = 1001,
THREE.MirroredRepeatWrapping = 1002,
THREE.NearestFilter = 1003,
THREE.NearestMipMapNearestFilter = 1004,
THREE.NearestMipMapLinearFilter = 1005,
THREE.LinearFilter = 1006,
THREE.LinearMipMapNearestFilter = 1007,
THREE.LinearMipMapLinearFilter = 1008,
THREE.UnsignedByteType = 1009,
THREE.ByteType = 1010,
THREE.ShortType = 1011,
THREE.UnsignedShortType = 1012,
THREE.IntType = 1013,
THREE.UnsignedIntType = 1014,
THREE.FloatType = 1015,
THREE.HalfFloatType = 1025,
THREE.UnsignedShort4444Type = 1016,
THREE.UnsignedShort5551Type = 1017,
THREE.UnsignedShort565Type = 1018,
THREE.AlphaFormat = 1019,
THREE.RGBFormat = 1020,
THREE.RGBAFormat = 1021,
THREE.LuminanceFormat = 1022,
THREE.LuminanceAlphaFormat = 1023,
THREE.RGBEFormat = THREE.RGBAFormat,
THREE.RGB_S3TC_DXT1_Format = 2001,
THREE.RGBA_S3TC_DXT1_Format = 2002,
THREE.RGBA_S3TC_DXT3_Format = 2003,
THREE.RGBA_S3TC_DXT5_Format = 2004,
THREE.RGB_PVRTC_4BPPV1_Format = 2100,
THREE.RGB_PVRTC_2BPPV1_Format = 2101,
THREE.RGBA_PVRTC_4BPPV1_Format = 2102,
THREE.RGBA_PVRTC_2BPPV1_Format = 2103,
THREE.RGB_ETC1_Format = 2151,
THREE.LoopOnce = 2200,
THREE.LoopRepeat = 2201,
THREE.LoopPingPong = 2202,
THREE.InterpolateDiscrete = 2300,
THREE.InterpolateLinear = 2301,
THREE.InterpolateSmooth = 2302,
THREE.ZeroCurvatureEnding = 2400,
THREE.ZeroSlopeEnding = 2401,
THREE.WrapAroundEnding = 2402,
THREE.TrianglesDrawMode = 0,
THREE.TriangleStripDrawMode = 1,
THREE.TriangleFanDrawMode = 2,
THREE.LinearEncoding = 3e3,
THREE.sRGBEncoding = 3001,
THREE.GammaEncoding = 3007,
THREE.RGBEEncoding = 3002,
THREE.LogLuvEncoding = 3003,
THREE.RGBM7Encoding = 3004,
THREE.RGBM16Encoding = 3005,
THREE.RGBDEncoding = 3006,
THREE.Color = function(a) {
    return 3 === arguments.length ? this.fromArray(arguments) : this.set(a)
}
,
THREE.Color.prototype = {
    constructor: THREE.Color,
    r: 1,
    g: 1,
    b: 1,
    set: function(a) {
        return a instanceof THREE.Color ? this.copy(a) : "number" == typeof a ? this.setHex(a) : "string" == typeof a && this.setStyle(a),
        this
    },
    setScalar: function(a) {
        this.b = this.g = this.r = a
    },
    setHex: function(a) {
        return a = Math.floor(a),
        this.r = (a >> 16 & 255) / 255,
        this.g = (a >> 8 & 255) / 255,
        this.b = (255 & a) / 255,
        this
    },
    setRGB: function(a, b, c) {
        return this.r = a,
        this.g = b,
        this.b = c,
        this
    },
    setHSL: function() {
        function a(a, b, c) {
            return 0 > c && (c += 1),
            c > 1 && (c -= 1),
            1 / 6 > c ? a + 6 * (b - a) * c : .5 > c ? b : 2 / 3 > c ? a + 6 * (b - a) * (2 / 3 - c) : a
        }
        return function(b, c, d) {
            return b = THREE.Math.euclideanModulo(b, 1),
            c = THREE.Math.clamp(c, 0, 1),
            d = THREE.Math.clamp(d, 0, 1),
            0 === c ? this.r = this.g = this.b = d : (c = .5 >= d ? d * (1 + c) : d + c - d * c,
            d = 2 * d - c,
            this.r = a(d, c, b + 1 / 3),
            this.g = a(d, c, b),
            this.b = a(d, c, b - 1 / 3)),
            this
        }
    }(),
    setStyle: function(a) {
        function b(b) {
            void 0 !== b && 1 > parseFloat(b) && console.warn("THREE.Color: Alpha component of " + a + " will be ignored.")
        }
        var c;
        if (c = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(a)) {
            var d = c[2];
            switch (c[1]) {
            case "rgb":
            case "rgba":
                if (c = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d))
                    return this.r = Math.min(255, parseInt(c[1], 10)) / 255,
                    this.g = Math.min(255, parseInt(c[2], 10)) / 255,
                    this.b = Math.min(255, parseInt(c[3], 10)) / 255,
                    b(c[5]),
                    this;
                if (c = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d))
                    return this.r = Math.min(100, parseInt(c[1], 10)) / 100,
                    this.g = Math.min(100, parseInt(c[2], 10)) / 100,
                    this.b = Math.min(100, parseInt(c[3], 10)) / 100,
                    b(c[5]),
                    this;
                break;
            case "hsl":
            case "hsla":
                if (c = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d)) {
                    var d = parseFloat(c[1]) / 360
                      , e = parseInt(c[2], 10) / 100
                      , f = parseInt(c[3], 10) / 100;
                    return b(c[5]),
                    this.setHSL(d, e, f)
                }
            }
        } else if (c = /^\#([A-Fa-f0-9]+)$/.exec(a)) {
            if (c = c[1],
            d = c.length,
            3 === d)
                return this.r = parseInt(c.charAt(0) + c.charAt(0), 16) / 255,
                this.g = parseInt(c.charAt(1) + c.charAt(1), 16) / 255,
                this.b = parseInt(c.charAt(2) + c.charAt(2), 16) / 255,
                this;
            if (6 === d)
                return this.r = parseInt(c.charAt(0) + c.charAt(1), 16) / 255,
                this.g = parseInt(c.charAt(2) + c.charAt(3), 16) / 255,
                this.b = parseInt(c.charAt(4) + c.charAt(5), 16) / 255,
                this
        }
        return a && 0 < a.length && (c = THREE.ColorKeywords[a],
        void 0 !== c ? this.setHex(c) : console.warn("THREE.Color: Unknown color " + a)),
        this
    },
    clone: function() {
        return new this.constructor(this.r,this.g,this.b)
    },
    copy: function(a) {
        return this.r = a.r,
        this.g = a.g,
        this.b = a.b,
        this
    },
    copyGammaToLinear: function(a, b) {
        return void 0 === b && (b = 2),
        this.r = Math.pow(a.r, b),
        this.g = Math.pow(a.g, b),
        this.b = Math.pow(a.b, b),
        this
    },
    copyLinearToGamma: function(a, b) {
        void 0 === b && (b = 2);
        var c = b > 0 ? 1 / b : 1;
        return this.r = Math.pow(a.r, c),
        this.g = Math.pow(a.g, c),
        this.b = Math.pow(a.b, c),
        this
    },
    convertGammaToLinear: function() {
        var a = this.r
          , b = this.g
          , c = this.b;
        return this.r = a * a,
        this.g = b * b,
        this.b = c * c,
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
    getHSL: function(a) {
        a = a || {
            h: 0,
            s: 0,
            l: 0
        };
        var b, c = this.r, d = this.g, e = this.b, f = Math.max(c, d, e), g = Math.min(c, d, e), h = (g + f) / 2;
        if (g === f)
            g = b = 0;
        else {
            var i = f - g
              , g = .5 >= h ? i / (f + g) : i / (2 - f - g);
            switch (f) {
            case c:
                b = (d - e) / i + (e > d ? 6 : 0);
                break;
            case d:
                b = (e - c) / i + 2;
                break;
            case e:
                b = (c - d) / i + 4
            }
            b /= 6
        }
        return a.h = b,
        a.s = g,
        a.l = h,
        a
    },
    getStyle: function() {
        return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
    },
    offsetHSL: function(a, b, c) {
        var d = this.getHSL();
        return d.h += a,
        d.s += b,
        d.l += c,
        this.setHSL(d.h, d.s, d.l),
        this
    },
    add: function(a) {
        return this.r += a.r,
        this.g += a.g,
        this.b += a.b,
        this
    },
    addColors: function(a, b) {
        return this.r = a.r + b.r,
        this.g = a.g + b.g,
        this.b = a.b + b.b,
        this
    },
    addScalar: function(a) {
        return this.r += a,
        this.g += a,
        this.b += a,
        this
    },
    multiply: function(a) {
        return this.r *= a.r,
        this.g *= a.g,
        this.b *= a.b,
        this
    },
    multiplyScalar: function(a) {
        return this.r *= a,
        this.g *= a,
        this.b *= a,
        this
    },
    lerp: function(a, b) {
        return this.r += (a.r - this.r) * b,
        this.g += (a.g - this.g) * b,
        this.b += (a.b - this.b) * b,
        this
    },
    equals: function(a) {
        return a.r === this.r && a.g === this.g && a.b === this.b
    },
    fromArray: function(a, b) {
        return void 0 === b && (b = 0),
        this.r = a[b],
        this.g = a[b + 1],
        this.b = a[b + 2],
        this
    },
    toArray: function(a, b) {
        return void 0 === a && (a = []),
        void 0 === b && (b = 0),
        a[b] = this.r,
        a[b + 1] = this.g,
        a[b + 2] = this.b,
        a
    }
},
THREE.ColorKeywords = {
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
},
THREE.Quaternion = function(a, b, c, d) {
    this._x = a || 0,
    this._y = b || 0,
    this._z = c || 0,
    this._w = void 0 !== d ? d : 1
}
,
THREE.Quaternion.prototype = {
    constructor: THREE.Quaternion,
    get x() {
        return this._x
    },
    set x(a) {
        this._x = a,
        this.onChangeCallback()
    },
    get y() {
        return this._y
    },
    set y(a) {
        this._y = a,
        this.onChangeCallback()
    },
    get z() {
        return this._z
    },
    set z(a) {
        this._z = a,
        this.onChangeCallback()
    },
    get w() {
        return this._w
    },
    set w(a) {
        this._w = a,
        this.onChangeCallback()
    },
    set: function(a, b, c, d) {
        return this._x = a,
        this._y = b,
        this._z = c,
        this._w = d,
        this.onChangeCallback(),
        this
    },
    clone: function() {
        return new this.constructor(this._x,this._y,this._z,this._w)
    },
    copy: function(a) {
        return this._x = a.x,
        this._y = a.y,
        this._z = a.z,
        this._w = a.w,
        this.onChangeCallback(),
        this
    },
    setFromEuler: function(a, b) {
        if (!1 == a instanceof THREE.Euler)
            throw Error("THREE.Quaternion: .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
        var c = Math.cos(a._x / 2)
          , d = Math.cos(a._y / 2)
          , e = Math.cos(a._z / 2)
          , f = Math.sin(a._x / 2)
          , g = Math.sin(a._y / 2)
          , h = Math.sin(a._z / 2)
          , i = a.order;
        return "XYZ" === i ? (this._x = f * d * e + c * g * h,
        this._y = c * g * e - f * d * h,
        this._z = c * d * h + f * g * e,
        this._w = c * d * e - f * g * h) : "YXZ" === i ? (this._x = f * d * e + c * g * h,
        this._y = c * g * e - f * d * h,
        this._z = c * d * h - f * g * e,
        this._w = c * d * e + f * g * h) : "ZXY" === i ? (this._x = f * d * e - c * g * h,
        this._y = c * g * e + f * d * h,
        this._z = c * d * h + f * g * e,
        this._w = c * d * e - f * g * h) : "ZYX" === i ? (this._x = f * d * e - c * g * h,
        this._y = c * g * e + f * d * h,
        this._z = c * d * h - f * g * e,
        this._w = c * d * e + f * g * h) : "YZX" === i ? (this._x = f * d * e + c * g * h,
        this._y = c * g * e + f * d * h,
        this._z = c * d * h - f * g * e,
        this._w = c * d * e - f * g * h) : "XZY" === i && (this._x = f * d * e - c * g * h,
        this._y = c * g * e - f * d * h,
        this._z = c * d * h + f * g * e,
        this._w = c * d * e + f * g * h),
        !1 !== b && this.onChangeCallback(),
        this
    },
    setFromAxisAngle: function(a, b) {
        var c = b / 2
          , d = Math.sin(c);
        return this._x = a.x * d,
        this._y = a.y * d,
        this._z = a.z * d,
        this._w = Math.cos(c),
        this.onChangeCallback(),
        this
    },
    setFromRotationMatrix: function(a) {
        var b = a.elements
          , c = b[0];
        a = b[4];
        var d = b[8]
          , e = b[1]
          , f = b[5]
          , g = b[9]
          , h = b[2]
          , i = b[6]
          , b = b[10]
          , j = c + f + b;
        return j > 0 ? (c = .5 / Math.sqrt(j + 1),
        this._w = .25 / c,
        this._x = (i - g) * c,
        this._y = (d - h) * c,
        this._z = (e - a) * c) : c > f && c > b ? (c = 2 * Math.sqrt(1 + c - f - b),
        this._w = (i - g) / c,
        this._x = .25 * c,
        this._y = (a + e) / c,
        this._z = (d + h) / c) : f > b ? (c = 2 * Math.sqrt(1 + f - c - b),
        this._w = (d - h) / c,
        this._x = (a + e) / c,
        this._y = .25 * c,
        this._z = (g + i) / c) : (c = 2 * Math.sqrt(1 + b - c - f),
        this._w = (e - a) / c,
        this._x = (d + h) / c,
        this._y = (g + i) / c,
        this._z = .25 * c),
        this.onChangeCallback(),
        this
    },
    setFromUnitVectors: function() {
        var a, b;
        return function(c, d) {
            return void 0 === a && (a = new THREE.Vector3),
            b = c.dot(d) + 1,
            1e-6 > b ? (b = 0,
            Math.abs(c.x) > Math.abs(c.z) ? a.set(-c.y, c.x, 0) : a.set(0, -c.z, c.y)) : a.crossVectors(c, d),
            this._x = a.x,
            this._y = a.y,
            this._z = a.z,
            this._w = b,
            this.normalize(),
            this
        }
    }(),
    inverse: function() {
        return this.conjugate().normalize(),
        this
    },
    conjugate: function() {
        return this._x *= -1,
        this._y *= -1,
        this._z *= -1,
        this.onChangeCallback(),
        this
    },
    dot: function(a) {
        return this._x * a._x + this._y * a._y + this._z * a._z + this._w * a._w
    },
    lengthSq: function() {
        return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
    },
    length: function() {
        return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
    },
    normalize: function() {
        var a = this.length();
        return 0 === a ? (this._z = this._y = this._x = 0,
        this._w = 1) : (a = 1 / a,
        this._x *= a,
        this._y *= a,
        this._z *= a,
        this._w *= a),
        this.onChangeCallback(),
        this
    },
    multiply: function(a, b) {
        return void 0 !== b ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),
        this.multiplyQuaternions(a, b)) : this.multiplyQuaternions(this, a)
    },
    multiplyQuaternions: function(a, b) {
        var c = a._x
          , d = a._y
          , e = a._z
          , f = a._w
          , g = b._x
          , h = b._y
          , i = b._z
          , j = b._w;
        return this._x = c * j + f * g + d * i - e * h,
        this._y = d * j + f * h + e * g - c * i,
        this._z = e * j + f * i + c * h - d * g,
        this._w = f * j - c * g - d * h - e * i,
        this.onChangeCallback(),
        this
    },
    slerp: function(a, b) {
        if (0 === b)
            return this;
        if (1 === b)
            return this.copy(a);
        var c = this._x
          , d = this._y
          , e = this._z
          , f = this._w
          , g = f * a._w + c * a._x + d * a._y + e * a._z;
        if (0 > g ? (this._w = -a._w,
        this._x = -a._x,
        this._y = -a._y,
        this._z = -a._z,
        g = -g) : this.copy(a),
        g >= 1)
            return this._w = f,
            this._x = c,
            this._y = d,
            this._z = e,
            this;
        var h = Math.sqrt(1 - g * g);
        if (.001 > Math.abs(h))
            return this._w = .5 * (f + this._w),
            this._x = .5 * (c + this._x),
            this._y = .5 * (d + this._y),
            this._z = .5 * (e + this._z),
            this;
        var i = Math.atan2(h, g)
          , g = Math.sin((1 - b) * i) / h
          , h = Math.sin(b * i) / h;
        return this._w = f * g + this._w * h,
        this._x = c * g + this._x * h,
        this._y = d * g + this._y * h,
        this._z = e * g + this._z * h,
        this.onChangeCallback(),
        this
    },
    equals: function(a) {
        return a._x === this._x && a._y === this._y && a._z === this._z && a._w === this._w
    },
    fromArray: function(a, b) {
        return void 0 === b && (b = 0),
        this._x = a[b],
        this._y = a[b + 1],
        this._z = a[b + 2],
        this._w = a[b + 3],
        this.onChangeCallback(),
        this
    },
    toArray: function(a, b) {
        return void 0 === a && (a = []),
        void 0 === b && (b = 0),
        a[b] = this._x,
        a[b + 1] = this._y,
        a[b + 2] = this._z,
        a[b + 3] = this._w,
        a
    },
    onChange: function(a) {
        return this.onChangeCallback = a,
        this
    },
    onChangeCallback: function() {}
},
Object.assign(THREE.Quaternion, {
    slerp: function(a, b, c, d) {
        return c.copy(a).slerp(b, d)
    },
    slerpFlat: function(a, b, c, d, e, f, g) {
        var h = c[d + 0]
          , i = c[d + 1]
          , j = c[d + 2];
        c = c[d + 3],
        d = e[f + 0];
        var k = e[f + 1]
          , l = e[f + 2];
        if (e = e[f + 3],
        c !== e || h !== d || i !== k || j !== l) {
            f = 1 - g;
            var m = h * d + i * k + j * l + c * e
              , n = m >= 0 ? 1 : -1
              , o = 1 - m * m;
            o > Number.EPSILON && (o = Math.sqrt(o),
            m = Math.atan2(o, m * n),
            f = Math.sin(f * m) / o,
            g = Math.sin(g * m) / o),
            n *= g,
            h = h * f + d * n,
            i = i * f + k * n,
            j = j * f + l * n,
            c = c * f + e * n,
            f === 1 - g && (g = 1 / Math.sqrt(h * h + i * i + j * j + c * c),
            h *= g,
            i *= g,
            j *= g,
            c *= g)
        }
        a[b] = h,
        a[b + 1] = i,
        a[b + 2] = j,
        a[b + 3] = c
    }
}),
THREE.Vector2 = function(a, b) {
    this.x = a || 0,
    this.y = b || 0
}
,
THREE.Vector2.prototype = {
    constructor: THREE.Vector2,
    get width() {
        return this.x
    },
    set width(a) {
        this.x = a
    },
    get height() {
        return this.y
    },
    set height(a) {
        this.y = a
    },
    set: function(a, b) {
        return this.x = a,
        this.y = b,
        this
    },
    setScalar: function(a) {
        return this.y = this.x = a,
        this
    },
    setX: function(a) {
        return this.x = a,
        this
    },
    setY: function(a) {
        return this.y = a,
        this
    },
    setComponent: function(a, b) {
        switch (a) {
        case 0:
            this.x = b;
            break;
        case 1:
            this.y = b;
            break;
        default:
            throw Error("index is out of range: " + a)
        }
    },
    getComponent: function(a) {
        switch (a) {
        case 0:
            return this.x;
        case 1:
            return this.y;
        default:
            throw Error("index is out of range: " + a)
        }
    },
    clone: function() {
        return new this.constructor(this.x,this.y)
    },
    copy: function(a) {
        return this.x = a.x,
        this.y = a.y,
        this
    },
    add: function(a, b) {
        return void 0 !== b ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
        this.addVectors(a, b)) : (this.x += a.x,
        this.y += a.y,
        this)
    },
    addScalar: function(a) {
        return this.x += a,
        this.y += a,
        this
    },
    addVectors: function(a, b) {
        return this.x = a.x + b.x,
        this.y = a.y + b.y,
        this
    },
    addScaledVector: function(a, b) {
        return this.x += a.x * b,
        this.y += a.y * b,
        this
    },
    sub: function(a, b) {
        return void 0 !== b ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
        this.subVectors(a, b)) : (this.x -= a.x,
        this.y -= a.y,
        this)
    },
    subScalar: function(a) {
        return this.x -= a,
        this.y -= a,
        this
    },
    subVectors: function(a, b) {
        return this.x = a.x - b.x,
        this.y = a.y - b.y,
        this
    },
    multiply: function(a) {
        return this.x *= a.x,
        this.y *= a.y,
        this
    },
    multiplyScalar: function(a) {
        return isFinite(a) ? (this.x *= a,
        this.y *= a) : this.y = this.x = 0,
        this
    },
    divide: function(a) {
        return this.x /= a.x,
        this.y /= a.y,
        this
    },
    divideScalar: function(a) {
        return this.multiplyScalar(1 / a)
    },
    min: function(a) {
        return this.x = Math.min(this.x, a.x),
        this.y = Math.min(this.y, a.y),
        this
    },
    max: function(a) {
        return this.x = Math.max(this.x, a.x),
        this.y = Math.max(this.y, a.y),
        this
    },
    clamp: function(a, b) {
        return this.x = Math.max(a.x, Math.min(b.x, this.x)),
        this.y = Math.max(a.y, Math.min(b.y, this.y)),
        this
    },
    clampScalar: function() {
        var a, b;
        return function(c, d) {
            return void 0 === a && (a = new THREE.Vector2,
            b = new THREE.Vector2),
            a.set(c, c),
            b.set(d, d),
            this.clamp(a, b)
        }
    }(),
    clampLength: function(a, b) {
        var c = this.length();
        return this.multiplyScalar(Math.max(a, Math.min(b, c)) / c),
        this
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
        return this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x),
        this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y),
        this
    },
    negate: function() {
        return this.x = -this.x,
        this.y = -this.y,
        this
    },
    dot: function(a) {
        return this.x * a.x + this.y * a.y
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
    angle: function() {
        var a = Math.atan2(this.y, this.x);
        return 0 > a && (a += 2 * Math.PI),
        a
    },
    distanceTo: function(a) {
        return Math.sqrt(this.distanceToSquared(a))
    },
    distanceToSquared: function(a) {
        var b = this.x - a.x;
        return a = this.y - a.y,
        b * b + a * a
    },
    setLength: function(a) {
        return this.multiplyScalar(a / this.length())
    },
    lerp: function(a, b) {
        return this.x += (a.x - this.x) * b,
        this.y += (a.y - this.y) * b,
        this
    },
    lerpVectors: function(a, b, c) {
        return this.subVectors(b, a).multiplyScalar(c).add(a),
        this
    },
    equals: function(a) {
        return a.x === this.x && a.y === this.y
    },
    fromArray: function(a, b) {
        return void 0 === b && (b = 0),
        this.x = a[b],
        this.y = a[b + 1],
        this
    },
    toArray: function(a, b) {
        return void 0 === a && (a = []),
        void 0 === b && (b = 0),
        a[b] = this.x,
        a[b + 1] = this.y,
        a
    },
    fromAttribute: function(a, b, c) {
        return void 0 === c && (c = 0),
        b = b * a.itemSize + c,
        this.x = a.array[b],
        this.y = a.array[b + 1],
        this
    },
    rotateAround: function(a, b) {
        var c = Math.cos(b)
          , d = Math.sin(b)
          , e = this.x - a.x
          , f = this.y - a.y;
        return this.x = e * c - f * d + a.x,
        this.y = e * d + f * c + a.y,
        this
    }
},
THREE.Vector3 = function(a, b, c) {
    this.x = a || 0,
    this.y = b || 0,
    this.z = c || 0
}
,
THREE.Vector3.prototype = {
    constructor: THREE.Vector3,
    set: function(a, b, c) {
        return this.x = a,
        this.y = b,
        this.z = c,
        this
    },
    setScalar: function(a) {
        return this.z = this.y = this.x = a,
        this
    },
    setX: function(a) {
        return this.x = a,
        this
    },
    setY: function(a) {
        return this.y = a,
        this
    },
    setZ: function(a) {
        return this.z = a,
        this
    },
    setComponent: function(a, b) {
        switch (a) {
        case 0:
            this.x = b;
            break;
        case 1:
            this.y = b;
            break;
        case 2:
            this.z = b;
            break;
        default:
            throw Error("index is out of range: " + a)
        }
    },
    getComponent: function(a) {
        switch (a) {
        case 0:
            return this.x;
        case 1:
            return this.y;
        case 2:
            return this.z;
        default:
            throw Error("index is out of range: " + a)
        }
    },
    clone: function() {
        return new this.constructor(this.x,this.y,this.z)
    },
    copy: function(a) {
        return this.x = a.x,
        this.y = a.y,
        this.z = a.z,
        this
    },
    add: function(a, b) {
        return void 0 !== b ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
        this.addVectors(a, b)) : (this.x += a.x,
        this.y += a.y,
        this.z += a.z,
        this)
    },
    addScalar: function(a) {
        return this.x += a,
        this.y += a,
        this.z += a,
        this
    },
    addVectors: function(a, b) {
        return this.x = a.x + b.x,
        this.y = a.y + b.y,
        this.z = a.z + b.z,
        this
    },
    addScaledVector: function(a, b) {
        return this.x += a.x * b,
        this.y += a.y * b,
        this.z += a.z * b,
        this
    },
    sub: function(a, b) {
        return void 0 !== b ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
        this.subVectors(a, b)) : (this.x -= a.x,
        this.y -= a.y,
        this.z -= a.z,
        this)
    },
    subScalar: function(a) {
        return this.x -= a,
        this.y -= a,
        this.z -= a,
        this
    },
    subVectors: function(a, b) {
        return this.x = a.x - b.x,
        this.y = a.y - b.y,
        this.z = a.z - b.z,
        this
    },
    multiply: function(a, b) {
        return void 0 !== b ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),
        this.multiplyVectors(a, b)) : (this.x *= a.x,
        this.y *= a.y,
        this.z *= a.z,
        this)
    },
    multiplyScalar: function(a) {
        return isFinite(a) ? (this.x *= a,
        this.y *= a,
        this.z *= a) : this.z = this.y = this.x = 0,
        this
    },
    multiplyVectors: function(a, b) {
        return this.x = a.x * b.x,
        this.y = a.y * b.y,
        this.z = a.z * b.z,
        this
    },
    applyEuler: function() {
        var a;
        return function(b) {
            return !1 == b instanceof THREE.Euler && console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),
            void 0 === a && (a = new THREE.Quaternion),
            this.applyQuaternion(a.setFromEuler(b)),
            this
        }
    }(),
    applyAxisAngle: function() {
        var a;
        return function(b, c) {
            return void 0 === a && (a = new THREE.Quaternion),
            this.applyQuaternion(a.setFromAxisAngle(b, c)),
            this
        }
    }(),
    applyMatrix3: function(a) {
        var b = this.x
          , c = this.y
          , d = this.z;
        return a = a.elements,
        this.x = a[0] * b + a[3] * c + a[6] * d,
        this.y = a[1] * b + a[4] * c + a[7] * d,
        this.z = a[2] * b + a[5] * c + a[8] * d,
        this
    },
    applyMatrix4: function(a) {
        var b = this.x
          , c = this.y
          , d = this.z;
        return a = a.elements,
        this.x = a[0] * b + a[4] * c + a[8] * d + a[12],
        this.y = a[1] * b + a[5] * c + a[9] * d + a[13],
        this.z = a[2] * b + a[6] * c + a[10] * d + a[14],
        this
    },
    applyProjection: function(a) {
        var b = this.x
          , c = this.y
          , d = this.z;
        a = a.elements;
        var e = 1 / (a[3] * b + a[7] * c + a[11] * d + a[15]);
        return this.x = (a[0] * b + a[4] * c + a[8] * d + a[12]) * e,
        this.y = (a[1] * b + a[5] * c + a[9] * d + a[13]) * e,
        this.z = (a[2] * b + a[6] * c + a[10] * d + a[14]) * e,
        this
    },
    applyQuaternion: function(a) {
        var b = this.x
          , c = this.y
          , d = this.z
          , e = a.x
          , f = a.y
          , g = a.z;
        a = a.w;
        var h = a * b + f * d - g * c
          , i = a * c + g * b - e * d
          , j = a * d + e * c - f * b
          , b = -e * b - f * c - g * d;
        return this.x = h * a + b * -e + i * -g - j * -f,
        this.y = i * a + b * -f + j * -e - h * -g,
        this.z = j * a + b * -g + h * -f - i * -e,
        this
    },
    project: function() {
        var a;
        return function(b) {
            return void 0 === a && (a = new THREE.Matrix4),
            a.multiplyMatrices(b.projectionMatrix, a.getInverse(b.matrixWorld)),
            this.applyProjection(a)
        }
    }(),
    unproject: function() {
        var a;
        return function(b) {
            return void 0 === a && (a = new THREE.Matrix4),
            a.multiplyMatrices(b.matrixWorld, a.getInverse(b.projectionMatrix)),
            this.applyProjection(a)
        }
    }(),
    transformDirection: function(a) {
        var b = this.x
          , c = this.y
          , d = this.z;
        return a = a.elements,
        this.x = a[0] * b + a[4] * c + a[8] * d,
        this.y = a[1] * b + a[5] * c + a[9] * d,
        this.z = a[2] * b + a[6] * c + a[10] * d,
        this.normalize(),
        this
    },
    divide: function(a) {
        return this.x /= a.x,
        this.y /= a.y,
        this.z /= a.z,
        this
    },
    divideScalar: function(a) {
        return this.multiplyScalar(1 / a)
    },
    min: function(a) {
        return this.x = Math.min(this.x, a.x),
        this.y = Math.min(this.y, a.y),
        this.z = Math.min(this.z, a.z),
        this
    },
    max: function(a) {
        return this.x = Math.max(this.x, a.x),
        this.y = Math.max(this.y, a.y),
        this.z = Math.max(this.z, a.z),
        this
    },
    clamp: function(a, b) {
        return this.x = Math.max(a.x, Math.min(b.x, this.x)),
        this.y = Math.max(a.y, Math.min(b.y, this.y)),
        this.z = Math.max(a.z, Math.min(b.z, this.z)),
        this
    },
    clampScalar: function() {
        var a, b;
        return function(c, d) {
            return void 0 === a && (a = new THREE.Vector3,
            b = new THREE.Vector3),
            a.set(c, c, c),
            b.set(d, d, d),
            this.clamp(a, b)
        }
    }(),
    clampLength: function(a, b) {
        var c = this.length();
        return this.multiplyScalar(Math.max(a, Math.min(b, c)) / c),
        this
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
        return this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x),
        this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y),
        this.z = 0 > this.z ? Math.ceil(this.z) : Math.floor(this.z),
        this
    },
    negate: function() {
        return this.x = -this.x,
        this.y = -this.y,
        this.z = -this.z,
        this
    },
    dot: function(a) {
        return this.x * a.x + this.y * a.y + this.z * a.z
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
    setLength: function(a) {
        return this.multiplyScalar(a / this.length())
    },
    lerp: function(a, b) {
        return this.x += (a.x - this.x) * b,
        this.y += (a.y - this.y) * b,
        this.z += (a.z - this.z) * b,
        this
    },
    lerpVectors: function(a, b, c) {
        return this.subVectors(b, a).multiplyScalar(c).add(a),
        this
    },
    cross: function(a, b) {
        if (void 0 !== b)
            return console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),
            this.crossVectors(a, b);
        var c = this.x
          , d = this.y
          , e = this.z;
        return this.x = d * a.z - e * a.y,
        this.y = e * a.x - c * a.z,
        this.z = c * a.y - d * a.x,
        this
    },
    crossVectors: function(a, b) {
        var c = a.x
          , d = a.y
          , e = a.z
          , f = b.x
          , g = b.y
          , h = b.z;
        return this.x = d * h - e * g,
        this.y = e * f - c * h,
        this.z = c * g - d * f,
        this
    },
    projectOnVector: function() {
        var a, b;
        return function(c) {
            return void 0 === a && (a = new THREE.Vector3),
            a.copy(c).normalize(),
            b = this.dot(a),
            this.copy(a).multiplyScalar(b)
        }
    }(),
    projectOnPlane: function() {
        var a;
        return function(b) {
            return void 0 === a && (a = new THREE.Vector3),
            a.copy(this).projectOnVector(b),
            this.sub(a)
        }
    }(),
    reflect: function() {
        var a;
        return function(b) {
            return void 0 === a && (a = new THREE.Vector3),
            this.sub(a.copy(b).multiplyScalar(2 * this.dot(b)))
        }
    }(),
    angleTo: function(a) {
        return a = this.dot(a) / Math.sqrt(this.lengthSq() * a.lengthSq()),
        Math.acos(THREE.Math.clamp(a, -1, 1))
    },
    distanceTo: function(a) {
        return Math.sqrt(this.distanceToSquared(a))
    },
    distanceToSquared: function(a) {
        var b = this.x - a.x
          , c = this.y - a.y;
        return a = this.z - a.z,
        b * b + c * c + a * a
    },
    setFromSpherical: function(a) {
        var b = Math.sin(a.phi) * a.radius;
        return this.x = b * Math.sin(a.theta),
        this.y = Math.cos(a.phi) * a.radius,
        this.z = b * Math.cos(a.theta),
        this
    },
    setFromMatrixPosition: function(a) {
        return this.setFromMatrixColumn(a, 3)
    },
    setFromMatrixScale: function(a) {
        var b = this.setFromMatrixColumn(a, 0).length()
          , c = this.setFromMatrixColumn(a, 1).length();
        return a = this.setFromMatrixColumn(a, 2).length(),
        this.x = b,
        this.y = c,
        this.z = a,
        this
    },
    setFromMatrixColumn: function(a, b) {
        return "number" == typeof a && (console.warn("THREE.Vector3: setFromMatrixColumn now expects ( matrix, index )."),
        b = a = b),
        this.fromArray(a.elements, 4 * b)
    },
    equals: function(a) {
        return a.x === this.x && a.y === this.y && a.z === this.z
    },
    fromArray: function(a, b) {
        return void 0 === b && (b = 0),
        this.x = a[b],
        this.y = a[b + 1],
        this.z = a[b + 2],
        this
    },
    toArray: function(a, b) {
        return void 0 === a && (a = []),
        void 0 === b && (b = 0),
        a[b] = this.x,
        a[b + 1] = this.y,
        a[b + 2] = this.z,
        a
    },
    fromAttribute: function(a, b, c) {
        return void 0 === c && (c = 0),
        b = b * a.itemSize + c,
        this.x = a.array[b],
        this.y = a.array[b + 1],
        this.z = a.array[b + 2],
        this
    }
},
THREE.Vector4 = function(a, b, c, d) {
    this.x = a || 0,
    this.y = b || 0,
    this.z = c || 0,
    this.w = void 0 !== d ? d : 1
}
,
THREE.Vector4.prototype = {
    constructor: THREE.Vector4,
    set: function(a, b, c, d) {
        return this.x = a,
        this.y = b,
        this.z = c,
        this.w = d,
        this
    },
    setScalar: function(a) {
        return this.w = this.z = this.y = this.x = a,
        this
    },
    setX: function(a) {
        return this.x = a,
        this
    },
    setY: function(a) {
        return this.y = a,
        this
    },
    setZ: function(a) {
        return this.z = a,
        this
    },
    setW: function(a) {
        return this.w = a,
        this
    },
    setComponent: function(a, b) {
        switch (a) {
        case 0:
            this.x = b;
            break;
        case 1:
            this.y = b;
            break;
        case 2:
            this.z = b;
            break;
        case 3:
            this.w = b;
            break;
        default:
            throw Error("index is out of range: " + a)
        }
    },
    getComponent: function(a) {
        switch (a) {
        case 0:
            return this.x;
        case 1:
            return this.y;
        case 2:
            return this.z;
        case 3:
            return this.w;
        default:
            throw Error("index is out of range: " + a)
        }
    },
    clone: function() {
        return new this.constructor(this.x,this.y,this.z,this.w)
    },
    copy: function(a) {
        return this.x = a.x,
        this.y = a.y,
        this.z = a.z,
        this.w = void 0 !== a.w ? a.w : 1,
        this
    },
    add: function(a, b) {
        return void 0 !== b ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
        this.addVectors(a, b)) : (this.x += a.x,
        this.y += a.y,
        this.z += a.z,
        this.w += a.w,
        this)
    },
    addScalar: function(a) {
        return this.x += a,
        this.y += a,
        this.z += a,
        this.w += a,
        this
    },
    addVectors: function(a, b) {
        return this.x = a.x + b.x,
        this.y = a.y + b.y,
        this.z = a.z + b.z,
        this.w = a.w + b.w,
        this
    },
    addScaledVector: function(a, b) {
        return this.x += a.x * b,
        this.y += a.y * b,
        this.z += a.z * b,
        this.w += a.w * b,
        this
    },
    sub: function(a, b) {
        return void 0 !== b ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
        this.subVectors(a, b)) : (this.x -= a.x,
        this.y -= a.y,
        this.z -= a.z,
        this.w -= a.w,
        this)
    },
    subScalar: function(a) {
        return this.x -= a,
        this.y -= a,
        this.z -= a,
        this.w -= a,
        this
    },
    subVectors: function(a, b) {
        return this.x = a.x - b.x,
        this.y = a.y - b.y,
        this.z = a.z - b.z,
        this.w = a.w - b.w,
        this
    },
    multiplyScalar: function(a) {
        return isFinite(a) ? (this.x *= a,
        this.y *= a,
        this.z *= a,
        this.w *= a) : this.w = this.z = this.y = this.x = 0,
        this
    },
    applyMatrix4: function(a) {
        var b = this.x
          , c = this.y
          , d = this.z
          , e = this.w;
        return a = a.elements,
        this.x = a[0] * b + a[4] * c + a[8] * d + a[12] * e,
        this.y = a[1] * b + a[5] * c + a[9] * d + a[13] * e,
        this.z = a[2] * b + a[6] * c + a[10] * d + a[14] * e,
        this.w = a[3] * b + a[7] * c + a[11] * d + a[15] * e,
        this
    },
    divideScalar: function(a) {
        return this.multiplyScalar(1 / a)
    },
    setAxisAngleFromQuaternion: function(a) {
        this.w = 2 * Math.acos(a.w);
        var b = Math.sqrt(1 - a.w * a.w);
        return 1e-4 > b ? (this.x = 1,
        this.z = this.y = 0) : (this.x = a.x / b,
        this.y = a.y / b,
        this.z = a.z / b),
        this
    },
    setAxisAngleFromRotationMatrix: function(a) {
        var b, c, d;
        a = a.elements;
        var e = a[0];
        d = a[4];
        var f = a[8]
          , g = a[1]
          , h = a[5]
          , i = a[9];
        c = a[2],
        b = a[6];
        var j = a[10];
        return .01 > Math.abs(d - g) && .01 > Math.abs(f - c) && .01 > Math.abs(i - b) ? .1 > Math.abs(d + g) && .1 > Math.abs(f + c) && .1 > Math.abs(i + b) && .1 > Math.abs(e + h + j - 3) ? (this.set(1, 0, 0, 0),
        this) : (a = Math.PI,
        e = (e + 1) / 2,
        h = (h + 1) / 2,
        j = (j + 1) / 2,
        d = (d + g) / 4,
        f = (f + c) / 4,
        i = (i + b) / 4,
        e > h && e > j ? .01 > e ? (b = 0,
        d = c = .707106781) : (b = Math.sqrt(e),
        c = d / b,
        d = f / b) : h > j ? .01 > h ? (b = .707106781,
        c = 0,
        d = .707106781) : (c = Math.sqrt(h),
        b = d / c,
        d = i / c) : .01 > j ? (c = b = .707106781,
        d = 0) : (d = Math.sqrt(j),
        b = f / d,
        c = i / d),
        this.set(b, c, d, a),
        this) : (a = Math.sqrt((b - i) * (b - i) + (f - c) * (f - c) + (g - d) * (g - d)),
        .001 > Math.abs(a) && (a = 1),
        this.x = (b - i) / a,
        this.y = (f - c) / a,
        this.z = (g - d) / a,
        this.w = Math.acos((e + h + j - 1) / 2),
        this)
    },
    min: function(a) {
        return this.x = Math.min(this.x, a.x),
        this.y = Math.min(this.y, a.y),
        this.z = Math.min(this.z, a.z),
        this.w = Math.min(this.w, a.w),
        this
    },
    max: function(a) {
        return this.x = Math.max(this.x, a.x),
        this.y = Math.max(this.y, a.y),
        this.z = Math.max(this.z, a.z),
        this.w = Math.max(this.w, a.w),
        this
    },
    clamp: function(a, b) {
        return this.x = Math.max(a.x, Math.min(b.x, this.x)),
        this.y = Math.max(a.y, Math.min(b.y, this.y)),
        this.z = Math.max(a.z, Math.min(b.z, this.z)),
        this.w = Math.max(a.w, Math.min(b.w, this.w)),
        this
    },
    clampScalar: function() {
        var a, b;
        return function(c, d) {
            return void 0 === a && (a = new THREE.Vector4,
            b = new THREE.Vector4),
            a.set(c, c, c, c),
            b.set(d, d, d, d),
            this.clamp(a, b)
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
        return this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x),
        this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y),
        this.z = 0 > this.z ? Math.ceil(this.z) : Math.floor(this.z),
        this.w = 0 > this.w ? Math.ceil(this.w) : Math.floor(this.w),
        this
    },
    negate: function() {
        return this.x = -this.x,
        this.y = -this.y,
        this.z = -this.z,
        this.w = -this.w,
        this
    },
    dot: function(a) {
        return this.x * a.x + this.y * a.y + this.z * a.z + this.w * a.w
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
    setLength: function(a) {
        return this.multiplyScalar(a / this.length())
    },
    lerp: function(a, b) {
        return this.x += (a.x - this.x) * b,
        this.y += (a.y - this.y) * b,
        this.z += (a.z - this.z) * b,
        this.w += (a.w - this.w) * b,
        this
    },
    lerpVectors: function(a, b, c) {
        return this.subVectors(b, a).multiplyScalar(c).add(a),
        this
    },
    equals: function(a) {
        return a.x === this.x && a.y === this.y && a.z === this.z && a.w === this.w
    },
    fromArray: function(a, b) {
        return void 0 === b && (b = 0),
        this.x = a[b],
        this.y = a[b + 1],
        this.z = a[b + 2],
        this.w = a[b + 3],
        this
    },
    toArray: function(a, b) {
        return void 0 === a && (a = []),
        void 0 === b && (b = 0),
        a[b] = this.x,
        a[b + 1] = this.y,
        a[b + 2] = this.z,
        a[b + 3] = this.w,
        a
    },
    fromAttribute: function(a, b, c) {
        return void 0 === c && (c = 0),
        b = b * a.itemSize + c,
        this.x = a.array[b],
        this.y = a.array[b + 1],
        this.z = a.array[b + 2],
        this.w = a.array[b + 3],
        this
    }
},
THREE.Euler = function(a, b, c, d) {
    this._x = a || 0,
    this._y = b || 0,
    this._z = c || 0,
    this._order = d || THREE.Euler.DefaultOrder
}
,
THREE.Euler.RotationOrders = "XYZ YZX ZXY XZY YXZ ZYX".split(" "),
THREE.Euler.DefaultOrder = "XYZ",
THREE.Euler.prototype = {
    constructor: THREE.Euler,
    get x() {
        return this._x
    },
    set x(a) {
        this._x = a,
        this.onChangeCallback()
    },
    get y() {
        return this._y
    },
    set y(a) {
        this._y = a,
        this.onChangeCallback()
    },
    get z() {
        return this._z
    },
    set z(a) {
        this._z = a,
        this.onChangeCallback()
    },
    get order() {
        return this._order
    },
    set order(a) {
        this._order = a,
        this.onChangeCallback()
    },
    set: function(a, b, c, d) {
        return this._x = a,
        this._y = b,
        this._z = c,
        this._order = d || this._order,
        this.onChangeCallback(),
        this
    },
    clone: function() {
        return new this.constructor(this._x,this._y,this._z,this._order)
    },
    copy: function(a) {
        return this._x = a._x,
        this._y = a._y,
        this._z = a._z,
        this._order = a._order,
        this.onChangeCallback(),
        this
    },
    setFromRotationMatrix: function(a, b, c) {
        var d = THREE.Math.clamp
          , e = a.elements;
        a = e[0];
        var f = e[4]
          , g = e[8]
          , h = e[1]
          , i = e[5]
          , j = e[9]
          , k = e[2]
          , l = e[6]
          , e = e[10];
        return b = b || this._order,
        "XYZ" === b ? (this._y = Math.asin(d(g, -1, 1)),
        .99999 > Math.abs(g) ? (this._x = Math.atan2(-j, e),
        this._z = Math.atan2(-f, a)) : (this._x = Math.atan2(l, i),
        this._z = 0)) : "YXZ" === b ? (this._x = Math.asin(-d(j, -1, 1)),
        .99999 > Math.abs(j) ? (this._y = Math.atan2(g, e),
        this._z = Math.atan2(h, i)) : (this._y = Math.atan2(-k, a),
        this._z = 0)) : "ZXY" === b ? (this._x = Math.asin(d(l, -1, 1)),
        .99999 > Math.abs(l) ? (this._y = Math.atan2(-k, e),
        this._z = Math.atan2(-f, i)) : (this._y = 0,
        this._z = Math.atan2(h, a))) : "ZYX" === b ? (this._y = Math.asin(-d(k, -1, 1)),
        .99999 > Math.abs(k) ? (this._x = Math.atan2(l, e),
        this._z = Math.atan2(h, a)) : (this._x = 0,
        this._z = Math.atan2(-f, i))) : "YZX" === b ? (this._z = Math.asin(d(h, -1, 1)),
        .99999 > Math.abs(h) ? (this._x = Math.atan2(-j, i),
        this._y = Math.atan2(-k, a)) : (this._x = 0,
        this._y = Math.atan2(g, e))) : "XZY" === b ? (this._z = Math.asin(-d(f, -1, 1)),
        .99999 > Math.abs(f) ? (this._x = Math.atan2(l, i),
        this._y = Math.atan2(g, a)) : (this._x = Math.atan2(-j, e),
        this._y = 0)) : console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + b),
        this._order = b,
        !1 !== c && this.onChangeCallback(),
        this
    },
    setFromQuaternion: function() {
        var a;
        return function(b, c, d) {
            return void 0 === a && (a = new THREE.Matrix4),
            a.makeRotationFromQuaternion(b),
            this.setFromRotationMatrix(a, c, d),
            this
        }
    }(),
    setFromVector3: function(a, b) {
        return this.set(a.x, a.y, a.z, b || this._order)
    },
    reorder: function() {
        var a = new THREE.Quaternion;
        return function(b) {
            a.setFromEuler(this),
            this.setFromQuaternion(a, b)
        }
    }(),
    equals: function(a) {
        return a._x === this._x && a._y === this._y && a._z === this._z && a._order === this._order
    },
    fromArray: function(a) {
        return this._x = a[0],
        this._y = a[1],
        this._z = a[2],
        void 0 !== a[3] && (this._order = a[3]),
        this.onChangeCallback(),
        this
    },
    toArray: function(a, b) {
        return void 0 === a && (a = []),
        void 0 === b && (b = 0),
        a[b] = this._x,
        a[b + 1] = this._y,
        a[b + 2] = this._z,
        a[b + 3] = this._order,
        a
    },
    toVector3: function(a) {
        return a ? a.set(this._x, this._y, this._z) : new THREE.Vector3(this._x,this._y,this._z)
    },
    onChange: function(a) {
        return this.onChangeCallback = a,
        this
    },
    onChangeCallback: function() {}
},
THREE.Line3 = function(a, b) {
    this.start = void 0 !== a ? a : new THREE.Vector3,
    this.end = void 0 !== b ? b : new THREE.Vector3
}
,
THREE.Line3.prototype = {
    constructor: THREE.Line3,
    set: function(a, b) {
        return this.start.copy(a),
        this.end.copy(b),
        this
    },
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(a) {
        return this.start.copy(a.start),
        this.end.copy(a.end),
        this
    },
    center: function(a) {
        return (a || new THREE.Vector3).addVectors(this.start, this.end).multiplyScalar(.5)
    },
    delta: function(a) {
        return (a || new THREE.Vector3).subVectors(this.end, this.start)
    },
    distanceSq: function() {
        return this.start.distanceToSquared(this.end)
    },
    distance: function() {
        return this.start.distanceTo(this.end)
    },
    at: function(a, b) {
        var c = b || new THREE.Vector3;
        return this.delta(c).multiplyScalar(a).add(this.start)
    },
    closestPointToPointParameter: function() {
        var a = new THREE.Vector3
          , b = new THREE.Vector3;
        return function(c, d) {
            a.subVectors(c, this.start),
            b.subVectors(this.end, this.start);
            var e = b.dot(b)
              , e = b.dot(a) / e;
            return d && (e = THREE.Math.clamp(e, 0, 1)),
            e
        }
    }(),
    closestPointToPoint: function(a, b, c) {
        return a = this.closestPointToPointParameter(a, b),
        c = c || new THREE.Vector3,
        this.delta(c).multiplyScalar(a).add(this.start)
    },
    applyMatrix4: function(a) {
        return this.start.applyMatrix4(a),
        this.end.applyMatrix4(a),
        this
    },
    equals: function(a) {
        return a.start.equals(this.start) && a.end.equals(this.end)
    }
},
THREE.Box2 = function(a, b) {
    this.min = void 0 !== a ? a : new THREE.Vector2(1 / 0,1 / 0),
    this.max = void 0 !== b ? b : new THREE.Vector2(-(1 / 0),-(1 / 0))
}
,
THREE.Box2.prototype = {
    constructor: THREE.Box2,
    set: function(a, b) {
        return this.min.copy(a),
        this.max.copy(b),
        this
    },
    setFromPoints: function(a) {
        this.makeEmpty();
        for (var b = 0, c = a.length; c > b; b++)
            this.expandByPoint(a[b]);
        return this
    },
    setFromCenterAndSize: function() {
        var a = new THREE.Vector2;
        return function(b, c) {
            var d = a.copy(c).multiplyScalar(.5);
            return this.min.copy(b).sub(d),
            this.max.copy(b).add(d),
            this
        }
    }(),
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(a) {
        return this.min.copy(a.min),
        this.max.copy(a.max),
        this
    },
    makeEmpty: function() {
        return this.min.x = this.min.y = 1 / 0,
        this.max.x = this.max.y = -(1 / 0),
        this
    },
    isEmpty: function() {
        return this.max.x < this.min.x || this.max.y < this.min.y
    },
    center: function(a) {
        return (a || new THREE.Vector2).addVectors(this.min, this.max).multiplyScalar(.5)
    },
    size: function(a) {
        return (a || new THREE.Vector2).subVectors(this.max, this.min)
    },
    expandByPoint: function(a) {
        return this.min.min(a),
        this.max.max(a),
        this
    },
    expandByVector: function(a) {
        return this.min.sub(a),
        this.max.add(a),
        this
    },
    expandByScalar: function(a) {
        return this.min.addScalar(-a),
        this.max.addScalar(a),
        this
    },
    containsPoint: function(a) {
        return a.x < this.min.x || a.x > this.max.x || a.y < this.min.y || a.y > this.max.y ? !1 : !0
    },
    containsBox: function(a) {
        return this.min.x <= a.min.x && a.max.x <= this.max.x && this.min.y <= a.min.y && a.max.y <= this.max.y ? !0 : !1
    },
    getParameter: function(a, b) {
        return (b || new THREE.Vector2).set((a.x - this.min.x) / (this.max.x - this.min.x), (a.y - this.min.y) / (this.max.y - this.min.y))
    },
    intersectsBox: function(a) {
        return a.max.x < this.min.x || a.min.x > this.max.x || a.max.y < this.min.y || a.min.y > this.max.y ? !1 : !0
    },
    clampPoint: function(a, b) {
        return (b || new THREE.Vector2).copy(a).clamp(this.min, this.max)
    },
    distanceToPoint: function() {
        var a = new THREE.Vector2;
        return function(b) {
            return a.copy(b).clamp(this.min, this.max).sub(b).length()
        }
    }(),
    intersect: function(a) {
        return this.min.max(a.min),
        this.max.min(a.max),
        this
    },
    union: function(a) {
        return this.min.min(a.min),
        this.max.max(a.max),
        this
    },
    translate: function(a) {
        return this.min.add(a),
        this.max.add(a),
        this
    },
    equals: function(a) {
        return a.min.equals(this.min) && a.max.equals(this.max)
    }
},
THREE.Box3 = function(a, b) {
    this.min = void 0 !== a ? a : new THREE.Vector3(1 / 0,1 / 0,1 / 0),
    this.max = void 0 !== b ? b : new THREE.Vector3(-(1 / 0),-(1 / 0),-(1 / 0))
}
,
THREE.Box3.prototype = {
    constructor: THREE.Box3,
    set: function(a, b) {
        return this.min.copy(a),
        this.max.copy(b),
        this
    },
    setFromArray: function(a) {
        this.makeEmpty();
        for (var b = 1 / 0, c = 1 / 0, d = 1 / 0, e = -(1 / 0), f = -(1 / 0), g = -(1 / 0), h = 0, i = a.length; i > h; h += 3) {
            var j = a[h]
              , k = a[h + 1]
              , l = a[h + 2];
            b > j && (b = j),
            c > k && (c = k),
            d > l && (d = l),
            j > e && (e = j),
            k > f && (f = k),
            l > g && (g = l)
        }
        this.min.set(b, c, d),
        this.max.set(e, f, g)
    },
    setFromPoints: function(a) {
        this.makeEmpty();
        for (var b = 0, c = a.length; c > b; b++)
            this.expandByPoint(a[b]);
        return this
    },
    setFromCenterAndSize: function() {
        var a = new THREE.Vector3;
        return function(b, c) {
            var d = a.copy(c).multiplyScalar(.5);
            return this.min.copy(b).sub(d),
            this.max.copy(b).add(d),
            this
        }
    }(),
    setFromObject: function() {
        var a;
        return function(b) {
            void 0 === a && (a = new THREE.Box3);
            var c = this;
            return this.makeEmpty(),
            b.updateMatrixWorld(!0),
            b.traverse(function(b) {
                var d = b.geometry;
                void 0 !== d && (null === d.boundingBox && d.computeBoundingBox(),
                !1 === d.boundingBox.isEmpty() && (a.copy(d.boundingBox),
                a.applyMatrix4(b.matrixWorld),
                c.union(a)))
            }),
            this
        }
    }(),
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(a) {
        return this.min.copy(a.min),
        this.max.copy(a.max),
        this
    },
    makeEmpty: function() {
        return this.min.x = this.min.y = this.min.z = 1 / 0,
        this.max.x = this.max.y = this.max.z = -(1 / 0),
        this
    },
    isEmpty: function() {
        return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
    },
    center: function(a) {
        return (a || new THREE.Vector3).addVectors(this.min, this.max).multiplyScalar(.5)
    },
    size: function(a) {
        return (a || new THREE.Vector3).subVectors(this.max, this.min)
    },
    expandByPoint: function(a) {
        return this.min.min(a),
        this.max.max(a),
        this
    },
    expandByVector: function(a) {
        return this.min.sub(a),
        this.max.add(a),
        this
    },
    expandByScalar: function(a) {
        return this.min.addScalar(-a),
        this.max.addScalar(a),
        this
    },
    containsPoint: function(a) {
        return a.x < this.min.x || a.x > this.max.x || a.y < this.min.y || a.y > this.max.y || a.z < this.min.z || a.z > this.max.z ? !1 : !0
    },
    containsBox: function(a) {
        return this.min.x <= a.min.x && a.max.x <= this.max.x && this.min.y <= a.min.y && a.max.y <= this.max.y && this.min.z <= a.min.z && a.max.z <= this.max.z ? !0 : !1
    },
    getParameter: function(a, b) {
        return (b || new THREE.Vector3).set((a.x - this.min.x) / (this.max.x - this.min.x), (a.y - this.min.y) / (this.max.y - this.min.y), (a.z - this.min.z) / (this.max.z - this.min.z))
    },
    intersectsBox: function(a) {
        return a.max.x < this.min.x || a.min.x > this.max.x || a.max.y < this.min.y || a.min.y > this.max.y || a.max.z < this.min.z || a.min.z > this.max.z ? !1 : !0
    },
    intersectsSphere: function() {
        var a;
        return function(b) {
            return void 0 === a && (a = new THREE.Vector3),
            this.clampPoint(b.center, a),
            a.distanceToSquared(b.center) <= b.radius * b.radius
        }
    }(),
    intersectsPlane: function(a) {
        var b, c;
        return 0 < a.normal.x ? (b = a.normal.x * this.min.x,
        c = a.normal.x * this.max.x) : (b = a.normal.x * this.max.x,
        c = a.normal.x * this.min.x),
        0 < a.normal.y ? (b += a.normal.y * this.min.y,
        c += a.normal.y * this.max.y) : (b += a.normal.y * this.max.y,
        c += a.normal.y * this.min.y),
        0 < a.normal.z ? (b += a.normal.z * this.min.z,
        c += a.normal.z * this.max.z) : (b += a.normal.z * this.max.z,
        c += a.normal.z * this.min.z),
        b <= a.constant && c >= a.constant
    },
    clampPoint: function(a, b) {
        return (b || new THREE.Vector3).copy(a).clamp(this.min, this.max)
    },
    distanceToPoint: function() {
        var a = new THREE.Vector3;
        return function(b) {
            return a.copy(b).clamp(this.min, this.max).sub(b).length()
        }
    }(),
    getBoundingSphere: function() {
        var a = new THREE.Vector3;
        return function(b) {
            return b = b || new THREE.Sphere,
            b.center = this.center(),
            b.radius = .5 * this.size(a).length(),
            b
        }
    }(),
    intersect: function(a) {
        return this.min.max(a.min),
        this.max.min(a.max),
        this
    },
    union: function(a) {
        return this.min.min(a.min),
        this.max.max(a.max),
        this
    },
    applyMatrix4: function() {
        var a = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3];
        return function(b) {
            return a[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(b),
            a[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(b),
            a[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(b),
            a[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(b),
            a[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(b),
            a[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(b),
            a[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(b),
            a[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(b),
            this.makeEmpty(),
            this.setFromPoints(a),
            this
        }
    }(),
    translate: function(a) {
        return this.min.add(a),
        this.max.add(a),
        this
    },
    equals: function(a) {
        return a.min.equals(this.min) && a.max.equals(this.max)
    }
},
THREE.Matrix3 = function() {
    this.elements = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]),
    0 < arguments.length && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
}
,
THREE.Matrix3.prototype = {
    constructor: THREE.Matrix3,
    set: function(a, b, c, d, e, f, g, h, i) {
        var j = this.elements;
        return j[0] = a,
        j[1] = d,
        j[2] = g,
        j[3] = b,
        j[4] = e,
        j[5] = h,
        j[6] = c,
        j[7] = f,
        j[8] = i,
        this
    },
    identity: function() {
        return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1),
        this
    },
    clone: function() {
        return (new this.constructor).fromArray(this.elements)
    },
    copy: function(a) {
        return a = a.elements,
        this.set(a[0], a[3], a[6], a[1], a[4], a[7], a[2], a[5], a[8]),
        this
    },
    setFromMatrix4: function(a) {
        return a = a.elements,
        this.set(a[0], a[4], a[8], a[1], a[5], a[9], a[2], a[6], a[10]),
        this
    },
    applyToVector3Array: function() {
        var a;
        return function(b, c, d) {
            void 0 === a && (a = new THREE.Vector3),
            void 0 === c && (c = 0),
            void 0 === d && (d = b.length);
            for (var e = 0; d > e; e += 3,
            c += 3)
                a.fromArray(b, c),
                a.applyMatrix3(this),
                a.toArray(b, c);
            return b
        }
    }(),
    applyToBuffer: function() {
        var a;
        return function(b, c, d) {
            void 0 === a && (a = new THREE.Vector3),
            void 0 === c && (c = 0),
            void 0 === d && (d = b.length / b.itemSize);
            for (var e = 0; d > e; e++,
            c++)
                a.x = b.getX(c),
                a.y = b.getY(c),
                a.z = b.getZ(c),
                a.applyMatrix3(this),
                b.setXYZ(a.x, a.y, a.z);
            return b
        }
    }(),
    multiplyScalar: function(a) {
        var b = this.elements;
        return b[0] *= a,
        b[3] *= a,
        b[6] *= a,
        b[1] *= a,
        b[4] *= a,
        b[7] *= a,
        b[2] *= a,
        b[5] *= a,
        b[8] *= a,
        this
    },
    determinant: function() {
        var a = this.elements
          , b = a[0]
          , c = a[1]
          , d = a[2]
          , e = a[3]
          , f = a[4]
          , g = a[5]
          , h = a[6]
          , i = a[7]
          , a = a[8];
        return b * f * a - b * g * i - c * e * a + c * g * h + d * e * i - d * f * h
    },
    getInverse: function(a, b) {
        a instanceof THREE.Matrix4 && console.warn("THREE.Matrix3.getInverse no longer takes a Matrix4 argument.");
        var c = a.elements
          , d = this.elements
          , e = c[0]
          , f = c[1]
          , g = c[2]
          , h = c[3]
          , i = c[4]
          , j = c[5]
          , k = c[6]
          , l = c[7]
          , c = c[8]
          , m = c * i - j * l
          , n = j * k - c * h
          , o = l * h - i * k
          , p = e * m + f * n + g * o;
        if (0 === p) {
            if (b)
                throw Error("THREE.Matrix3.getInverse(): can't invert matrix, determinant is 0");
            return console.warn("THREE.Matrix3.getInverse(): can't invert matrix, determinant is 0"),
            this.identity()
        }
        return d[0] = m,
        d[1] = g * l - c * f,
        d[2] = j * f - g * i,
        d[3] = n,
        d[4] = c * e - g * k,
        d[5] = g * h - j * e,
        d[6] = o,
        d[7] = f * k - l * e,
        d[8] = i * e - f * h,
        this.multiplyScalar(1 / p)
    },
    transpose: function() {
        var a, b = this.elements;
        return a = b[1],
        b[1] = b[3],
        b[3] = a,
        a = b[2],
        b[2] = b[6],
        b[6] = a,
        a = b[5],
        b[5] = b[7],
        b[7] = a,
        this
    },
    flattenToArrayOffset: function(a, b) {
        var c = this.elements;
        return a[b] = c[0],
        a[b + 1] = c[1],
        a[b + 2] = c[2],
        a[b + 3] = c[3],
        a[b + 4] = c[4],
        a[b + 5] = c[5],
        a[b + 6] = c[6],
        a[b + 7] = c[7],
        a[b + 8] = c[8],
        a
    },
    getNormalMatrix: function(a) {
        return this.setFromMatrix4(a).getInverse(this).transpose()
    },
    transposeIntoArray: function(a) {
        var b = this.elements;
        return a[0] = b[0],
        a[1] = b[3],
        a[2] = b[6],
        a[3] = b[1],
        a[4] = b[4],
        a[5] = b[7],
        a[6] = b[2],
        a[7] = b[5],
        a[8] = b[8],
        this
    },
    fromArray: function(a) {
        return this.elements.set(a),
        this
    },
    toArray: function() {
        var a = this.elements;
        return [a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8]]
    }
},
THREE.Matrix4 = function() {
    this.elements = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
    0 < arguments.length && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
}
,
THREE.Matrix4.prototype = {
    constructor: THREE.Matrix4,
    set: function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
        var q = this.elements;
        return q[0] = a,
        q[4] = b,
        q[8] = c,
        q[12] = d,
        q[1] = e,
        q[5] = f,
        q[9] = g,
        q[13] = h,
        q[2] = i,
        q[6] = j,
        q[10] = k,
        q[14] = l,
        q[3] = m,
        q[7] = n,
        q[11] = o,
        q[15] = p,
        this
    },
    identity: function() {
        return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
        this
    },
    clone: function() {
        return (new THREE.Matrix4).fromArray(this.elements)
    },
    copy: function(a) {
        return this.elements.set(a.elements),
        this
    },
    copyPosition: function(a) {
        var b = this.elements;
        return a = a.elements,
        b[12] = a[12],
        b[13] = a[13],
        b[14] = a[14],
        this
    },
    extractBasis: function(a, b, c) {
        return a.setFromMatrixColumn(this, 0),
        b.setFromMatrixColumn(this, 1),
        c.setFromMatrixColumn(this, 2),
        this
    },
    makeBasis: function(a, b, c) {
        return this.set(a.x, b.x, c.x, 0, a.y, b.y, c.y, 0, a.z, b.z, c.z, 0, 0, 0, 0, 1),
        this
    },
    extractRotation: function() {
        var a;
        return function(b) {
            void 0 === a && (a = new THREE.Vector3);
            var c = this.elements
              , d = b.elements
              , e = 1 / a.setFromMatrixColumn(b, 0).length()
              , f = 1 / a.setFromMatrixColumn(b, 1).length();
            return b = 1 / a.setFromMatrixColumn(b, 2).length(),
            c[0] = d[0] * e,
            c[1] = d[1] * e,
            c[2] = d[2] * e,
            c[4] = d[4] * f,
            c[5] = d[5] * f,
            c[6] = d[6] * f,
            c[8] = d[8] * b,
            c[9] = d[9] * b,
            c[10] = d[10] * b,
            this
        }
    }(),
    makeRotationFromEuler: function(a) {
        !1 == a instanceof THREE.Euler && console.error("THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
        var b = this.elements
          , c = a.x
          , d = a.y
          , e = a.z
          , f = Math.cos(c)
          , c = Math.sin(c)
          , g = Math.cos(d)
          , d = Math.sin(d)
          , h = Math.cos(e)
          , e = Math.sin(e);
        if ("XYZ" === a.order) {
            a = f * h;
            var i = f * e
              , j = c * h
              , k = c * e;
            b[0] = g * h,
            b[4] = -g * e,
            b[8] = d,
            b[1] = i + j * d,
            b[5] = a - k * d,
            b[9] = -c * g,
            b[2] = k - a * d,
            b[6] = j + i * d,
            b[10] = f * g
        } else
            "YXZ" === a.order ? (a = g * h,
            i = g * e,
            j = d * h,
            k = d * e,
            b[0] = a + k * c,
            b[4] = j * c - i,
            b[8] = f * d,
            b[1] = f * e,
            b[5] = f * h,
            b[9] = -c,
            b[2] = i * c - j,
            b[6] = k + a * c,
            b[10] = f * g) : "ZXY" === a.order ? (a = g * h,
            i = g * e,
            j = d * h,
            k = d * e,
            b[0] = a - k * c,
            b[4] = -f * e,
            b[8] = j + i * c,
            b[1] = i + j * c,
            b[5] = f * h,
            b[9] = k - a * c,
            b[2] = -f * d,
            b[6] = c,
            b[10] = f * g) : "ZYX" === a.order ? (a = f * h,
            i = f * e,
            j = c * h,
            k = c * e,
            b[0] = g * h,
            b[4] = j * d - i,
            b[8] = a * d + k,
            b[1] = g * e,
            b[5] = k * d + a,
            b[9] = i * d - j,
            b[2] = -d,
            b[6] = c * g,
            b[10] = f * g) : "YZX" === a.order ? (a = f * g,
            i = f * d,
            j = c * g,
            k = c * d,
            b[0] = g * h,
            b[4] = k - a * e,
            b[8] = j * e + i,
            b[1] = e,
            b[5] = f * h,
            b[9] = -c * h,
            b[2] = -d * h,
            b[6] = i * e + j,
            b[10] = a - k * e) : "XZY" === a.order && (a = f * g,
            i = f * d,
            j = c * g,
            k = c * d,
            b[0] = g * h,
            b[4] = -e,
            b[8] = d * h,
            b[1] = a * e + k,
            b[5] = f * h,
            b[9] = i * e - j,
            b[2] = j * e - i,
            b[6] = c * h,
            b[10] = k * e + a);
        return b[3] = 0,
        b[7] = 0,
        b[11] = 0,
        b[12] = 0,
        b[13] = 0,
        b[14] = 0,
        b[15] = 1,
        this
    },
    makeRotationFromQuaternion: function(a) {
        var b = this.elements
          , c = a.x
          , d = a.y
          , e = a.z
          , f = a.w
          , g = c + c
          , h = d + d
          , i = e + e;
        a = c * g;
        var j = c * h
          , c = c * i
          , k = d * h
          , d = d * i
          , e = e * i
          , g = f * g
          , h = f * h
          , f = f * i;
        return b[0] = 1 - (k + e),
        b[4] = j - f,
        b[8] = c + h,
        b[1] = j + f,
        b[5] = 1 - (a + e),
        b[9] = d - g,
        b[2] = c - h,
        b[6] = d + g,
        b[10] = 1 - (a + k),
        b[3] = 0,
        b[7] = 0,
        b[11] = 0,
        b[12] = 0,
        b[13] = 0,
        b[14] = 0,
        b[15] = 1,
        this
    },
    lookAt: function() {
        var a, b, c;
        return function(d, e, f) {
            void 0 === a && (a = new THREE.Vector3),
            void 0 === b && (b = new THREE.Vector3),
            void 0 === c && (c = new THREE.Vector3);
            var g = this.elements;
            return c.subVectors(d, e).normalize(),
            0 === c.lengthSq() && (c.z = 1),
            a.crossVectors(f, c).normalize(),
            0 === a.lengthSq() && (c.x += 1e-4,
            a.crossVectors(f, c).normalize()),
            b.crossVectors(c, a),
            g[0] = a.x,
            g[4] = b.x,
            g[8] = c.x,
            g[1] = a.y,
            g[5] = b.y,
            g[9] = c.y,
            g[2] = a.z,
            g[6] = b.z,
            g[10] = c.z,
            this
        }
    }(),
    multiply: function(a, b) {
        return void 0 !== b ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),
        this.multiplyMatrices(a, b)) : this.multiplyMatrices(this, a)
    },
    multiplyMatrices: function(a, b) {
        var c = a.elements
          , d = b.elements
          , e = this.elements
          , f = c[0]
          , g = c[4]
          , h = c[8]
          , i = c[12]
          , j = c[1]
          , k = c[5]
          , l = c[9]
          , m = c[13]
          , n = c[2]
          , o = c[6]
          , p = c[10]
          , q = c[14]
          , r = c[3]
          , s = c[7]
          , t = c[11]
          , c = c[15]
          , u = d[0]
          , v = d[4]
          , w = d[8]
          , x = d[12]
          , y = d[1]
          , z = d[5]
          , A = d[9]
          , B = d[13]
          , C = d[2]
          , D = d[6]
          , E = d[10]
          , F = d[14]
          , G = d[3]
          , H = d[7]
          , I = d[11]
          , d = d[15];
        return e[0] = f * u + g * y + h * C + i * G,
        e[4] = f * v + g * z + h * D + i * H,
        e[8] = f * w + g * A + h * E + i * I,
        e[12] = f * x + g * B + h * F + i * d,
        e[1] = j * u + k * y + l * C + m * G,
        e[5] = j * v + k * z + l * D + m * H,
        e[9] = j * w + k * A + l * E + m * I,
        e[13] = j * x + k * B + l * F + m * d,
        e[2] = n * u + o * y + p * C + q * G,
        e[6] = n * v + o * z + p * D + q * H,
        e[10] = n * w + o * A + p * E + q * I,
        e[14] = n * x + o * B + p * F + q * d,
        e[3] = r * u + s * y + t * C + c * G,
        e[7] = r * v + s * z + t * D + c * H,
        e[11] = r * w + s * A + t * E + c * I,
        e[15] = r * x + s * B + t * F + c * d,
        this
    },
    multiplyToArray: function(a, b, c) {
        var d = this.elements;
        return this.multiplyMatrices(a, b),
        c[0] = d[0],
        c[1] = d[1],
        c[2] = d[2],
        c[3] = d[3],
        c[4] = d[4],
        c[5] = d[5],
        c[6] = d[6],
        c[7] = d[7],
        c[8] = d[8],
        c[9] = d[9],
        c[10] = d[10],
        c[11] = d[11],
        c[12] = d[12],
        c[13] = d[13],
        c[14] = d[14],
        c[15] = d[15],
        this
    },
    multiplyScalar: function(a) {
        var b = this.elements;
        return b[0] *= a,
        b[4] *= a,
        b[8] *= a,
        b[12] *= a,
        b[1] *= a,
        b[5] *= a,
        b[9] *= a,
        b[13] *= a,
        b[2] *= a,
        b[6] *= a,
        b[10] *= a,
        b[14] *= a,
        b[3] *= a,
        b[7] *= a,
        b[11] *= a,
        b[15] *= a,
        this
    },
    applyToVector3Array: function() {
        var a;
        return function(b, c, d) {
            void 0 === a && (a = new THREE.Vector3),
            void 0 === c && (c = 0),
            void 0 === d && (d = b.length);
            for (var e = 0; d > e; e += 3,
            c += 3)
                a.fromArray(b, c),
                a.applyMatrix4(this),
                a.toArray(b, c);
            return b
        }
    }(),
    applyToBuffer: function() {
        var a;
        return function(b, c, d) {
            void 0 === a && (a = new THREE.Vector3),
            void 0 === c && (c = 0),
            void 0 === d && (d = b.length / b.itemSize);
            for (var e = 0; d > e; e++,
            c++)
                a.x = b.getX(c),
                a.y = b.getY(c),
                a.z = b.getZ(c),
                a.applyMatrix4(this),
                b.setXYZ(a.x, a.y, a.z);
            return b
        }
    }(),
    determinant: function() {
        var a = this.elements
          , b = a[0]
          , c = a[4]
          , d = a[8]
          , e = a[12]
          , f = a[1]
          , g = a[5]
          , h = a[9]
          , i = a[13]
          , j = a[2]
          , k = a[6]
          , l = a[10]
          , m = a[14];
        return a[3] * (+e * h * k - d * i * k - e * g * l + c * i * l + d * g * m - c * h * m) + a[7] * (+b * h * m - b * i * l + e * f * l - d * f * m + d * i * j - e * h * j) + a[11] * (+b * i * k - b * g * m - e * f * k + c * f * m + e * g * j - c * i * j) + a[15] * (-d * g * j - b * h * k + b * g * l + d * f * k - c * f * l + c * h * j)
    },
    transpose: function() {
        var a, b = this.elements;
        return a = b[1],
        b[1] = b[4],
        b[4] = a,
        a = b[2],
        b[2] = b[8],
        b[8] = a,
        a = b[6],
        b[6] = b[9],
        b[9] = a,
        a = b[3],
        b[3] = b[12],
        b[12] = a,
        a = b[7],
        b[7] = b[13],
        b[13] = a,
        a = b[11],
        b[11] = b[14],
        b[14] = a,
        this
    },
    flattenToArrayOffset: function(a, b) {
        var c = this.elements;
        return a[b] = c[0],
        a[b + 1] = c[1],
        a[b + 2] = c[2],
        a[b + 3] = c[3],
        a[b + 4] = c[4],
        a[b + 5] = c[5],
        a[b + 6] = c[6],
        a[b + 7] = c[7],
        a[b + 8] = c[8],
        a[b + 9] = c[9],
        a[b + 10] = c[10],
        a[b + 11] = c[11],
        a[b + 12] = c[12],
        a[b + 13] = c[13],
        a[b + 14] = c[14],
        a[b + 15] = c[15],
        a
    },
    getPosition: function() {
        var a;
        return function() {
            return void 0 === a && (a = new THREE.Vector3),
            console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),
            a.setFromMatrixColumn(this, 3)
        }
    }(),
    setPosition: function(a) {
        var b = this.elements;
        return b[12] = a.x,
        b[13] = a.y,
        b[14] = a.z,
        this
    },
    getInverse: function(a, b) {
        var c = this.elements
          , d = a.elements
          , e = d[0]
          , f = d[1]
          , g = d[2]
          , h = d[3]
          , i = d[4]
          , j = d[5]
          , k = d[6]
          , l = d[7]
          , m = d[8]
          , n = d[9]
          , o = d[10]
          , p = d[11]
          , q = d[12]
          , r = d[13]
          , s = d[14]
          , d = d[15]
          , t = n * s * l - r * o * l + r * k * p - j * s * p - n * k * d + j * o * d
          , u = q * o * l - m * s * l - q * k * p + i * s * p + m * k * d - i * o * d
          , v = m * r * l - q * n * l + q * j * p - i * r * p - m * j * d + i * n * d
          , w = q * n * k - m * r * k - q * j * o + i * r * o + m * j * s - i * n * s
          , x = e * t + f * u + g * v + h * w;
        if (0 === x) {
            if (b)
                throw Error("THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0");
            return console.warn("THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0"),
            this.identity()
        }
        return c[0] = t,
        c[1] = r * o * h - n * s * h - r * g * p + f * s * p + n * g * d - f * o * d,
        c[2] = j * s * h - r * k * h + r * g * l - f * s * l - j * g * d + f * k * d,
        c[3] = n * k * h - j * o * h - n * g * l + f * o * l + j * g * p - f * k * p,
        c[4] = u,
        c[5] = m * s * h - q * o * h + q * g * p - e * s * p - m * g * d + e * o * d,
        c[6] = q * k * h - i * s * h - q * g * l + e * s * l + i * g * d - e * k * d,
        c[7] = i * o * h - m * k * h + m * g * l - e * o * l - i * g * p + e * k * p,
        c[8] = v,
        c[9] = q * n * h - m * r * h - q * f * p + e * r * p + m * f * d - e * n * d,
        c[10] = i * r * h - q * j * h + q * f * l - e * r * l - i * f * d + e * j * d,
        c[11] = m * j * h - i * n * h - m * f * l + e * n * l + i * f * p - e * j * p,
        c[12] = w,
        c[13] = m * r * g - q * n * g + q * f * o - e * r * o - m * f * s + e * n * s,
        c[14] = q * j * g - i * r * g - q * f * k + e * r * k + i * f * s - e * j * s,
        c[15] = i * n * g - m * j * g + m * f * k - e * n * k - i * f * o + e * j * o,
        this.multiplyScalar(1 / x)
    },
    scale: function(a) {
        var b = this.elements
          , c = a.x
          , d = a.y;
        return a = a.z,
        b[0] *= c,
        b[4] *= d,
        b[8] *= a,
        b[1] *= c,
        b[5] *= d,
        b[9] *= a,
        b[2] *= c,
        b[6] *= d,
        b[10] *= a,
        b[3] *= c,
        b[7] *= d,
        b[11] *= a,
        this
    },
    getMaxScaleOnAxis: function() {
        var a = this.elements;
        return Math.sqrt(Math.max(a[0] * a[0] + a[1] * a[1] + a[2] * a[2], a[4] * a[4] + a[5] * a[5] + a[6] * a[6], a[8] * a[8] + a[9] * a[9] + a[10] * a[10]))
    },
    makeTranslation: function(a, b, c) {
        return this.set(1, 0, 0, a, 0, 1, 0, b, 0, 0, 1, c, 0, 0, 0, 1),
        this
    },
    makeRotationX: function(a) {
        var b = Math.cos(a);
        return a = Math.sin(a),
        this.set(1, 0, 0, 0, 0, b, -a, 0, 0, a, b, 0, 0, 0, 0, 1),
        this
    },
    makeRotationY: function(a) {
        var b = Math.cos(a);
        return a = Math.sin(a),
        this.set(b, 0, a, 0, 0, 1, 0, 0, -a, 0, b, 0, 0, 0, 0, 1),
        this
    },
    makeRotationZ: function(a) {
        var b = Math.cos(a);
        return a = Math.sin(a),
        this.set(b, -a, 0, 0, a, b, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
        this
    },
    makeRotationAxis: function(a, b) {
        var c = Math.cos(b)
          , d = Math.sin(b)
          , e = 1 - c
          , f = a.x
          , g = a.y
          , h = a.z
          , i = e * f
          , j = e * g;
        return this.set(i * f + c, i * g - d * h, i * h + d * g, 0, i * g + d * h, j * g + c, j * h - d * f, 0, i * h - d * g, j * h + d * f, e * h * h + c, 0, 0, 0, 0, 1),
        this
    },
    makeScale: function(a, b, c) {
        return this.set(a, 0, 0, 0, 0, b, 0, 0, 0, 0, c, 0, 0, 0, 0, 1),
        this
    },
    compose: function(a, b, c) {
        return this.makeRotationFromQuaternion(b),
        this.scale(c),
        this.setPosition(a),
        this
    },
    decompose: function() {
        var a, b;
        return function(c, d, e) {
            void 0 === a && (a = new THREE.Vector3),
            void 0 === b && (b = new THREE.Matrix4);
            var f = this.elements
              , g = a.set(f[0], f[1], f[2]).length()
              , h = a.set(f[4], f[5], f[6]).length()
              , i = a.set(f[8], f[9], f[10]).length();
            0 > this.determinant() && (g = -g),
            c.x = f[12],
            c.y = f[13],
            c.z = f[14],
            b.elements.set(this.elements),
            c = 1 / g;
            var f = 1 / h
              , j = 1 / i;
            return b.elements[0] *= c,
            b.elements[1] *= c,
            b.elements[2] *= c,
            b.elements[4] *= f,
            b.elements[5] *= f,
            b.elements[6] *= f,
            b.elements[8] *= j,
            b.elements[9] *= j,
            b.elements[10] *= j,
            d.setFromRotationMatrix(b),
            e.x = g,
            e.y = h,
            e.z = i,
            this
        }
    }(),
    makeFrustum: function(a, b, c, d, e, f) {
        var g = this.elements;
        return g[0] = 2 * e / (b - a),
        g[4] = 0,
        g[8] = (b + a) / (b - a),
        g[12] = 0,
        g[1] = 0,
        g[5] = 2 * e / (d - c),
        g[9] = (d + c) / (d - c),
        g[13] = 0,
        g[2] = 0,
        g[6] = 0,
        g[10] = -(f + e) / (f - e),
        g[14] = -2 * f * e / (f - e),
        g[3] = 0,
        g[7] = 0,
        g[11] = -1,
        g[15] = 0,
        this
    },
    makePerspective: function(a, b, c, d) {
        a = c * Math.tan(THREE.Math.degToRad(.5 * a));
        var e = -a;
        return this.makeFrustum(e * b, a * b, e, a, c, d)
    },
    makeOrthographic: function(a, b, c, d, e, f) {
        var g = this.elements
          , h = 1 / (b - a)
          , i = 1 / (c - d)
          , j = 1 / (f - e);
        return g[0] = 2 * h,
        g[4] = 0,
        g[8] = 0,
        g[12] = -((b + a) * h),
        g[1] = 0,
        g[5] = 2 * i,
        g[9] = 0,
        g[13] = -((c + d) * i),
        g[2] = 0,
        g[6] = 0,
        g[10] = -2 * j,
        g[14] = -((f + e) * j),
        g[3] = 0,
        g[7] = 0,
        g[11] = 0,
        g[15] = 1,
        this
    },
    equals: function(a) {
        var b = this.elements;
        a = a.elements;
        for (var c = 0; 16 > c; c++)
            if (b[c] !== a[c])
                return !1;
        return !0
    },
    fromArray: function(a) {
        return this.elements.set(a),
        this
    },
    toArray: function() {
        var a = this.elements;
        return [a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]]
    }
},
THREE.Ray = function(a, b) {
    this.origin = void 0 !== a ? a : new THREE.Vector3,
    this.direction = void 0 !== b ? b : new THREE.Vector3
}
,
THREE.Ray.prototype = {
    constructor: THREE.Ray,
    set: function(a, b) {
        return this.origin.copy(a),
        this.direction.copy(b),
        this
    },
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(a) {
        return this.origin.copy(a.origin),
        this.direction.copy(a.direction),
        this
    },
    at: function(a, b) {
        return (b || new THREE.Vector3).copy(this.direction).multiplyScalar(a).add(this.origin)
    },
    lookAt: function(a) {
        this.direction.copy(a).sub(this.origin).normalize()
    },
    recast: function() {
        var a = new THREE.Vector3;
        return function(b) {
            return this.origin.copy(this.at(b, a)),
            this
        }
    }(),
    closestPointToPoint: function(a, b) {
        var c = b || new THREE.Vector3;
        c.subVectors(a, this.origin);
        var d = c.dot(this.direction);
        return 0 > d ? c.copy(this.origin) : c.copy(this.direction).multiplyScalar(d).add(this.origin)
    },
    distanceToPoint: function(a) {
        return Math.sqrt(this.distanceSqToPoint(a))
    },
    distanceSqToPoint: function() {
        var a = new THREE.Vector3;
        return function(b) {
            var c = a.subVectors(b, this.origin).dot(this.direction);
            return 0 > c ? this.origin.distanceToSquared(b) : (a.copy(this.direction).multiplyScalar(c).add(this.origin),
            a.distanceToSquared(b))
        }
    }(),
    distanceSqToSegment: function() {
        var a = new THREE.Vector3
          , b = new THREE.Vector3
          , c = new THREE.Vector3;
        return function(d, e, f, g) {
            a.copy(d).add(e).multiplyScalar(.5),
            b.copy(e).sub(d).normalize(),
            c.copy(this.origin).sub(a);
            var h, i = .5 * d.distanceTo(e), j = -this.direction.dot(b), k = c.dot(this.direction), l = -c.dot(b), m = c.lengthSq(), n = Math.abs(1 - j * j);
            return n > 0 ? (d = j * l - k,
            e = j * k - l,
            h = i * n,
            d >= 0 ? e >= -h ? h >= e ? (i = 1 / n,
            d *= i,
            e *= i,
            j = d * (d + j * e + 2 * k) + e * (j * d + e + 2 * l) + m) : (e = i,
            d = Math.max(0, -(j * e + k)),
            j = -d * d + e * (e + 2 * l) + m) : (e = -i,
            d = Math.max(0, -(j * e + k)),
            j = -d * d + e * (e + 2 * l) + m) : -h >= e ? (d = Math.max(0, -(-j * i + k)),
            e = d > 0 ? -i : Math.min(Math.max(-i, -l), i),
            j = -d * d + e * (e + 2 * l) + m) : h >= e ? (d = 0,
            e = Math.min(Math.max(-i, -l), i),
            j = e * (e + 2 * l) + m) : (d = Math.max(0, -(j * i + k)),
            e = d > 0 ? i : Math.min(Math.max(-i, -l), i),
            j = -d * d + e * (e + 2 * l) + m)) : (e = j > 0 ? -i : i,
            d = Math.max(0, -(j * e + k)),
            j = -d * d + e * (e + 2 * l) + m),
            f && f.copy(this.direction).multiplyScalar(d).add(this.origin),
            g && g.copy(b).multiplyScalar(e).add(a),
            j
        }
    }(),
    intersectSphere: function() {
        var a = new THREE.Vector3;
        return function(b, c) {
            a.subVectors(b.center, this.origin);
            var d = a.dot(this.direction)
              , e = a.dot(a) - d * d
              , f = b.radius * b.radius;
            return e > f ? null : (f = Math.sqrt(f - e),
            e = d - f,
            d += f,
            0 > e && 0 > d ? null : 0 > e ? this.at(d, c) : this.at(e, c))
        }
    }(),
    intersectsSphere: function(a) {
        return this.distanceToPoint(a.center) <= a.radius
    },
    distanceToPlane: function(a) {
        var b = a.normal.dot(this.direction);
        return 0 === b ? 0 === a.distanceToPoint(this.origin) ? 0 : null : (a = -(this.origin.dot(a.normal) + a.constant) / b,
        a >= 0 ? a : null )
    },
    intersectPlane: function(a, b) {
        var c = this.distanceToPlane(a);
        return null === c ? null : this.at(c, b)
    },
    intersectsPlane: function(a) {
        var b = a.distanceToPoint(this.origin);
        return 0 === b || 0 > a.normal.dot(this.direction) * b ? !0 : !1
    },
    intersectBox: function(a, b) {
        var c, d, e, f, g;
        d = 1 / this.direction.x,
        f = 1 / this.direction.y,
        g = 1 / this.direction.z;
        var h = this.origin;
        return d >= 0 ? (c = (a.min.x - h.x) * d,
        d *= a.max.x - h.x) : (c = (a.max.x - h.x) * d,
        d *= a.min.x - h.x),
        f >= 0 ? (e = (a.min.y - h.y) * f,
        f *= a.max.y - h.y) : (e = (a.max.y - h.y) * f,
        f *= a.min.y - h.y),
        c > f || e > d ? null : ((e > c || c !== c) && (c = e),
        (d > f || d !== d) && (d = f),
        g >= 0 ? (e = (a.min.z - h.z) * g,
        g *= a.max.z - h.z) : (e = (a.max.z - h.z) * g,
        g *= a.min.z - h.z),
        c > g || e > d ? null : ((e > c || c !== c) && (c = e),
        (d > g || d !== d) && (d = g),
        0 > d ? null : this.at(c >= 0 ? c : d, b)))
    },
    intersectsBox: function() {
        var a = new THREE.Vector3;
        return function(b) {
            return null !== this.intersectBox(b, a)
        }
    }(),
    intersectTriangle: function() {
        var a = new THREE.Vector3
          , b = new THREE.Vector3
          , c = new THREE.Vector3
          , d = new THREE.Vector3;
        return function(e, f, g, h, i) {
            if (b.subVectors(f, e),
            c.subVectors(g, e),
            d.crossVectors(b, c),
            f = this.direction.dot(d),
            f > 0) {
                if (h)
                    return null ;
                h = 1
            } else {
                if (!(0 > f))
                    return null ;
                h = -1,
                f = -f
            }
            return a.subVectors(this.origin, e),
            e = h * this.direction.dot(c.crossVectors(a, c)),
            0 > e ? null : (g = h * this.direction.dot(b.cross(a)),
            0 > g || e + g > f ? null : (e = -h * a.dot(d),
            0 > e ? null : this.at(e / f, i)))
        }
    }(),
    applyMatrix4: function(a) {
        return this.direction.add(this.origin).applyMatrix4(a),
        this.origin.applyMatrix4(a),
        this.direction.sub(this.origin),
        this.direction.normalize(),
        this
    },
    equals: function(a) {
        return a.origin.equals(this.origin) && a.direction.equals(this.direction)
    }
},
THREE.Sphere = function(a, b) {
    this.center = void 0 !== a ? a : new THREE.Vector3,
    this.radius = void 0 !== b ? b : 0
}
,
THREE.Sphere.prototype = {
    constructor: THREE.Sphere,
    set: function(a, b) {
        return this.center.copy(a),
        this.radius = b,
        this
    },
    setFromPoints: function() {
        var a = new THREE.Box3;
        return function(b, c) {
            var d = this.center;
            void 0 !== c ? d.copy(c) : a.setFromPoints(b).center(d);
            for (var e = 0, f = 0, g = b.length; g > f; f++)
                e = Math.max(e, d.distanceToSquared(b[f]));
            return this.radius = Math.sqrt(e),
            this
        }
    }(),
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(a) {
        return this.center.copy(a.center),
        this.radius = a.radius,
        this
    },
    empty: function() {
        return 0 >= this.radius
    },
    containsPoint: function(a) {
        return a.distanceToSquared(this.center) <= this.radius * this.radius
    },
    distanceToPoint: function(a) {
        return a.distanceTo(this.center) - this.radius
    },
    intersectsSphere: function(a) {
        var b = this.radius + a.radius;
        return a.center.distanceToSquared(this.center) <= b * b
    },
    intersectsBox: function(a) {
        return a.intersectsSphere(this)
    },
    intersectsPlane: function(a) {
        return Math.abs(this.center.dot(a.normal) - a.constant) <= this.radius
    },
    clampPoint: function(a, b) {
        var c = this.center.distanceToSquared(a)
          , d = b || new THREE.Vector3;
        return d.copy(a),
        c > this.radius * this.radius && (d.sub(this.center).normalize(),
        d.multiplyScalar(this.radius).add(this.center)),
        d
    },
    getBoundingBox: function(a) {
        return a = a || new THREE.Box3,
        a.set(this.center, this.center),
        a.expandByScalar(this.radius),
        a
    },
    applyMatrix4: function(a) {
        return this.center.applyMatrix4(a),
        this.radius *= a.getMaxScaleOnAxis(),
        this
    },
    translate: function(a) {
        return this.center.add(a),
        this
    },
    equals: function(a) {
        return a.center.equals(this.center) && a.radius === this.radius
    }
},
THREE.Frustum = function(a, b, c, d, e, f) {
    this.planes = [void 0 !== a ? a : new THREE.Plane, void 0 !== b ? b : new THREE.Plane, void 0 !== c ? c : new THREE.Plane, void 0 !== d ? d : new THREE.Plane, void 0 !== e ? e : new THREE.Plane, void 0 !== f ? f : new THREE.Plane]
}
,
THREE.Frustum.prototype = {
    constructor: THREE.Frustum,
    set: function(a, b, c, d, e, f) {
        var g = this.planes;
        return g[0].copy(a),
        g[1].copy(b),
        g[2].copy(c),
        g[3].copy(d),
        g[4].copy(e),
        g[5].copy(f),
        this
    },
    clone: function() {
        return (new this.constructor).copy(this);
    },
    copy: function(a) {
        for (var b = this.planes, c = 0; 6 > c; c++)
            b[c].copy(a.planes[c]);
        return this
    },
    setFromMatrix: function(a) {
        var b = this.planes
          , c = a.elements;
        a = c[0];
        var d = c[1]
          , e = c[2]
          , f = c[3]
          , g = c[4]
          , h = c[5]
          , i = c[6]
          , j = c[7]
          , k = c[8]
          , l = c[9]
          , m = c[10]
          , n = c[11]
          , o = c[12]
          , p = c[13]
          , q = c[14]
          , c = c[15];
        return b[0].setComponents(f - a, j - g, n - k, c - o).normalize(),
        b[1].setComponents(f + a, j + g, n + k, c + o).normalize(),
        b[2].setComponents(f + d, j + h, n + l, c + p).normalize(),
        b[3].setComponents(f - d, j - h, n - l, c - p).normalize(),
        b[4].setComponents(f - e, j - i, n - m, c - q).normalize(),
        b[5].setComponents(f + e, j + i, n + m, c + q).normalize(),
        this
    },
    intersectsObject: function() {
        var a = new THREE.Sphere;
        return function(b) {
            var c = b.geometry;
            return null === c.boundingSphere && c.computeBoundingSphere(),
            a.copy(c.boundingSphere),
            a.applyMatrix4(b.matrixWorld),
            this.intersectsSphere(a)
        }
    }(),
    intersectsSphere: function(a) {
        var b = this.planes
          , c = a.center;
        a = -a.radius;
        for (var d = 0; 6 > d; d++)
            if (b[d].distanceToPoint(c) < a)
                return !1;
        return !0
    },
    intersectsBox: function() {
        var a = new THREE.Vector3
          , b = new THREE.Vector3;
        return function(c) {
            for (var d = this.planes, e = 0; 6 > e; e++) {
                var f = d[e];
                a.x = 0 < f.normal.x ? c.min.x : c.max.x,
                b.x = 0 < f.normal.x ? c.max.x : c.min.x,
                a.y = 0 < f.normal.y ? c.min.y : c.max.y,
                b.y = 0 < f.normal.y ? c.max.y : c.min.y,
                a.z = 0 < f.normal.z ? c.min.z : c.max.z,
                b.z = 0 < f.normal.z ? c.max.z : c.min.z;
                var g = f.distanceToPoint(a)
                  , f = f.distanceToPoint(b);
                if (0 > g && 0 > f)
                    return !1
            }
            return !0
        }
    }(),
    containsPoint: function(a) {
        for (var b = this.planes, c = 0; 6 > c; c++)
            if (0 > b[c].distanceToPoint(a))
                return !1;
        return !0
    }
},
THREE.Plane = function(a, b) {
    this.normal = void 0 !== a ? a : new THREE.Vector3(1,0,0),
    this.constant = void 0 !== b ? b : 0
}
,
THREE.Plane.prototype = {
    constructor: THREE.Plane,
    set: function(a, b) {
        return this.normal.copy(a),
        this.constant = b,
        this
    },
    setComponents: function(a, b, c, d) {
        return this.normal.set(a, b, c),
        this.constant = d,
        this
    },
    setFromNormalAndCoplanarPoint: function(a, b) {
        return this.normal.copy(a),
        this.constant = -b.dot(this.normal),
        this
    },
    setFromCoplanarPoints: function() {
        var a = new THREE.Vector3
          , b = new THREE.Vector3;
        return function(c, d, e) {
            return d = a.subVectors(e, d).cross(b.subVectors(c, d)).normalize(),
            this.setFromNormalAndCoplanarPoint(d, c),
            this
        }
    }(),
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(a) {
        return this.normal.copy(a.normal),
        this.constant = a.constant,
        this
    },
    normalize: function() {
        var a = 1 / this.normal.length();
        return this.normal.multiplyScalar(a),
        this.constant *= a,
        this
    },
    negate: function() {
        return this.constant *= -1,
        this.normal.negate(),
        this
    },
    distanceToPoint: function(a) {
        return this.normal.dot(a) + this.constant
    },
    distanceToSphere: function(a) {
        return this.distanceToPoint(a.center) - a.radius
    },
    projectPoint: function(a, b) {
        return this.orthoPoint(a, b).sub(a).negate()
    },
    orthoPoint: function(a, b) {
        var c = this.distanceToPoint(a);
        return (b || new THREE.Vector3).copy(this.normal).multiplyScalar(c)
    },
    intersectLine: function() {
        var a = new THREE.Vector3;
        return function(b, c) {
            var d = c || new THREE.Vector3
              , e = b.delta(a)
              , f = this.normal.dot(e);
            return 0 !== f ? (f = -(b.start.dot(this.normal) + this.constant) / f,
            0 > f || f > 1 ? void 0 : d.copy(e).multiplyScalar(f).add(b.start)) : 0 === this.distanceToPoint(b.start) ? d.copy(b.start) : void 0
        }
    }(),
    intersectsLine: function(a) {
        var b = this.distanceToPoint(a.start);
        return a = this.distanceToPoint(a.end),
        0 > b && a > 0 || 0 > a && b > 0
    },
    intersectsBox: function(a) {
        return a.intersectsPlane(this)
    },
    intersectsSphere: function(a) {
        return a.intersectsPlane(this)
    },
    coplanarPoint: function(a) {
        return (a || new THREE.Vector3).copy(this.normal).multiplyScalar(-this.constant)
    },
    applyMatrix4: function() {
        var a = new THREE.Vector3
          , b = new THREE.Vector3
          , c = new THREE.Matrix3;
        return function(d, e) {
            var f = e || c.getNormalMatrix(d)
              , f = a.copy(this.normal).applyMatrix3(f)
              , g = this.coplanarPoint(b);
            return g.applyMatrix4(d),
            this.setFromNormalAndCoplanarPoint(f, g),
            this
        }
    }(),
    translate: function(a) {
        return this.constant -= a.dot(this.normal),
        this
    },
    equals: function(a) {
        return a.normal.equals(this.normal) && a.constant === this.constant
    }
},
THREE.Spherical = function(a, b, c) {
    return this.radius = void 0 !== a ? a : 1,
    this.phi = void 0 !== b ? b : 0,
    this.theta = void 0 !== c ? c : 0,
    this
}
,
THREE.Spherical.prototype = {
    constructor: THREE.Spherical,
    set: function(a, b, c) {
        this.radius = a,
        this.phi = b,
        this.theta = c
    },
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(a) {
        return this.radius.copy(a.radius),
        this.phi.copy(a.phi),
        this.theta.copy(a.theta),
        this
    },
    makeSafe: function() {
        this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi))
    },
    setFromVector3: function(a) {
        return this.radius = a.length(),
        0 === this.radius ? this.phi = this.theta = 0 : (this.theta = Math.atan2(a.x, a.z),
        this.phi = Math.acos(THREE.Math.clamp(a.y / this.radius, -1, 1))),
        this
    }
},
THREE.Math = {
    generateUUID: function() {
        var a, b = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), c = Array(36), d = 0;
        return function() {
            for (var e = 0; 36 > e; e++)
                8 === e || 13 === e || 18 === e || 23 === e ? c[e] = "-" : 14 === e ? c[e] = "4" : (2 >= d && (d = 33554432 + 16777216 * Math.random() | 0),
                a = 15 & d,
                d >>= 4,
                c[e] = b[19 === e ? 3 & a | 8 : a]);
            return c.join("")
        }
    }(),
    clamp: function(a, b, c) {
        return Math.max(b, Math.min(c, a))
    },
    euclideanModulo: function(a, b) {
        return (a % b + b) % b
    },
    mapLinear: function(a, b, c, d, e) {
        return d + (a - b) * (e - d) / (c - b)
    },
    smoothstep: function(a, b, c) {
        return b >= a ? 0 : a >= c ? 1 : (a = (a - b) / (c - b),
        a * a * (3 - 2 * a))
    },
    smootherstep: function(a, b, c) {
        return b >= a ? 0 : a >= c ? 1 : (a = (a - b) / (c - b),
        a * a * a * (a * (6 * a - 15) + 10))
    },
    random16: function() {
        return console.warn("THREE.Math.random16() has been deprecated. Use Math.random() instead."),
        Math.random()
    },
    randInt: function(a, b) {
        return a + Math.floor(Math.random() * (b - a + 1))
    },
    randFloat: function(a, b) {
        return a + Math.random() * (b - a)
    },
    randFloatSpread: function(a) {
        return a * (.5 - Math.random())
    },
    degToRad: function() {
        var a = Math.PI / 180;
        return function(b) {
            return b * a
        }
    }(),
    radToDeg: function() {
        var a = 180 / Math.PI;
        return function(b) {
            return b * a
        }
    }(),
    isPowerOfTwo: function(a) {
        return 0 === (a & a - 1) && 0 !== a
    },
    nearestPowerOfTwo: function(a) {
        return Math.pow(2, Math.round(Math.log(a) / Math.LN2))
    },
    nextPowerOfTwo: function(a) {
        return a--,
        a |= a >> 1,
        a |= a >> 2,
        a |= a >> 4,
        a |= a >> 8,
        a |= a >> 16,
        a++,
        a
    }
},
THREE.Spline = function(a) {
    function b(a, b, c, d, e, f, g) {
        return a = .5 * (c - a),
        d = .5 * (d - b),
        (2 * (b - c) + a + d) * g + (-3 * (b - c) - 2 * a - d) * f + a * e + b
    }
    this.points = a;
    var c, d, e, f, g, h, i, j, k, l = [], m = {
        x: 0,
        y: 0,
        z: 0
    };
    this.initFromArray = function(a) {
        this.points = [];
        for (var b = 0; b < a.length; b++)
            this.points[b] = {
                x: a[b][0],
                y: a[b][1],
                z: a[b][2]
            }
    }
    ,
    this.getPoint = function(a) {
        return c = (this.points.length - 1) * a,
        d = Math.floor(c),
        e = c - d,
        l[0] = 0 === d ? d : d - 1,
        l[1] = d,
        l[2] = d > this.points.length - 2 ? this.points.length - 1 : d + 1,
        l[3] = d > this.points.length - 3 ? this.points.length - 1 : d + 2,
        h = this.points[l[0]],
        i = this.points[l[1]],
        j = this.points[l[2]],
        k = this.points[l[3]],
        f = e * e,
        g = e * f,
        m.x = b(h.x, i.x, j.x, k.x, e, f, g),
        m.y = b(h.y, i.y, j.y, k.y, e, f, g),
        m.z = b(h.z, i.z, j.z, k.z, e, f, g),
        m
    }
    ,
    this.getControlPointsArray = function() {
        var a, b, c = this.points.length, d = [];
        for (a = 0; c > a; a++)
            b = this.points[a],
            d[a] = [b.x, b.y, b.z];
        return d
    }
    ,
    this.getLength = function(a) {
        var b, c, d, e = b = b = 0, f = new THREE.Vector3, g = new THREE.Vector3, h = [], i = 0;
        for (h[0] = 0,
        a || (a = 100),
        c = this.points.length * a,
        f.copy(this.points[0]),
        a = 1; c > a; a++)
            b = a / c,
            d = this.getPoint(b),
            g.copy(d),
            i += g.distanceTo(f),
            f.copy(d),
            b *= this.points.length - 1,
            b = Math.floor(b),
            b !== e && (h[b] = i,
            e = b);
        return h[h.length] = i,
        {
            chunks: h,
            total: i
        }
    }
    ,
    this.reparametrizeByArcLength = function(a) {
        var b, c, d, e, f, g, h = [], i = new THREE.Vector3, j = this.getLength();
        for (h.push(i.copy(this.points[0]).clone()),
        b = 1; b < this.points.length; b++) {
            for (c = j.chunks[b] - j.chunks[b - 1],
            g = Math.ceil(a * c / j.total),
            e = (b - 1) / (this.points.length - 1),
            f = b / (this.points.length - 1),
            c = 1; g - 1 > c; c++)
                d = e + 1 / g * c * (f - e),
                d = this.getPoint(d),
                h.push(i.copy(d).clone());
            h.push(i.copy(this.points[b]).clone())
        }
        this.points = h
    }
}
,
THREE.Triangle = function(a, b, c) {
    this.a = void 0 !== a ? a : new THREE.Vector3,
    this.b = void 0 !== b ? b : new THREE.Vector3,
    this.c = void 0 !== c ? c : new THREE.Vector3
}
,
THREE.Triangle.normal = function() {
    var a = new THREE.Vector3;
    return function(b, c, d, e) {
        return e = e || new THREE.Vector3,
        e.subVectors(d, c),
        a.subVectors(b, c),
        e.cross(a),
        b = e.lengthSq(),
        b > 0 ? e.multiplyScalar(1 / Math.sqrt(b)) : e.set(0, 0, 0)
    }
}(),
THREE.Triangle.barycoordFromPoint = function() {
    var a = new THREE.Vector3
      , b = new THREE.Vector3
      , c = new THREE.Vector3;
    return function(d, e, f, g, h) {
        a.subVectors(g, e),
        b.subVectors(f, e),
        c.subVectors(d, e),
        d = a.dot(a),
        e = a.dot(b),
        f = a.dot(c);
        var i = b.dot(b);
        g = b.dot(c);
        var j = d * i - e * e;
        return h = h || new THREE.Vector3,
        0 === j ? h.set(-2, -1, -1) : (j = 1 / j,
        i = (i * f - e * g) * j,
        d = (d * g - e * f) * j,
        h.set(1 - i - d, d, i))
    }
}(),
THREE.Triangle.containsPoint = function() {
    var a = new THREE.Vector3;
    return function(b, c, d, e) {
        return b = THREE.Triangle.barycoordFromPoint(b, c, d, e, a),
        0 <= b.x && 0 <= b.y && 1 >= b.x + b.y
    }
}(),
THREE.Triangle.prototype = {
    constructor: THREE.Triangle,
    set: function(a, b, c) {
        return this.a.copy(a),
        this.b.copy(b),
        this.c.copy(c),
        this
    },
    setFromPointsAndIndices: function(a, b, c, d) {
        return this.a.copy(a[b]),
        this.b.copy(a[c]),
        this.c.copy(a[d]),
        this
    },
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(a) {
        return this.a.copy(a.a),
        this.b.copy(a.b),
        this.c.copy(a.c),
        this
    },
    area: function() {
        var a = new THREE.Vector3
          , b = new THREE.Vector3;
        return function() {
            return a.subVectors(this.c, this.b),
            b.subVectors(this.a, this.b),
            .5 * a.cross(b).length()
        }
    }(),
    midpoint: function(a) {
        return (a || new THREE.Vector3).addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
    },
    normal: function(a) {
        return THREE.Triangle.normal(this.a, this.b, this.c, a)
    },
    plane: function(a) {
        return (a || new THREE.Plane).setFromCoplanarPoints(this.a, this.b, this.c)
    },
    barycoordFromPoint: function(a, b) {
        return THREE.Triangle.barycoordFromPoint(a, this.a, this.b, this.c, b)
    },
    containsPoint: function(a) {
        return THREE.Triangle.containsPoint(a, this.a, this.b, this.c)
    },
    equals: function(a) {
        return a.a.equals(this.a) && a.b.equals(this.b) && a.c.equals(this.c)
    }
},
THREE.Interpolant = function(a, b, c, d) {
    this.parameterPositions = a,
    this._cachedIndex = 0,
    this.resultBuffer = void 0 !== d ? d : new b.constructor(c),
    this.sampleValues = b,
    this.valueSize = c
}
,
THREE.Interpolant.prototype = {
    constructor: THREE.Interpolant,
    evaluate: function(a) {
        var b = this.parameterPositions
          , c = this._cachedIndex
          , d = b[c]
          , e = b[c - 1];
        a: {
            b: {
                c: {
                    d: if (!(d > a)) {
                        for (var f = c + 2; ; ) {
                            if (void 0 === d) {
                                if (e > a)
                                    break d;
                                return this._cachedIndex = c = b.length,
                                this.afterEnd_(c - 1, a, e)
                            }
                            if (c === f)
                                break;
                            if (e = d,
                            d = b[++c],
                            d > a)
                                break b
                        }
                        d = b.length;
                        break c
                    }
                    if (a >= e)
                        break a;
                    for (f = b[1],
                    f > a && (c = 2,
                    e = f),
                    f = c - 2; ; ) {
                        if (void 0 === e)
                            return this._cachedIndex = 0,
                            this.beforeStart_(0, a, d);
                        if (c === f)
                            break;
                        if (d = e,
                        e = b[--c - 1],
                        a >= e)
                            break b
                    }
                    d = c,
                    c = 0
                }
                for (; d > c; )
                    e = c + d >>> 1,
                    a < b[e] ? d = e : c = e + 1;
                if (d = b[c],
                e = b[c - 1],
                void 0 === e)
                    return this._cachedIndex = 0,
                    this.beforeStart_(0, a, d);
                if (void 0 === d)
                    return this._cachedIndex = c = b.length,
                    this.afterEnd_(c - 1, e, a)
            }
            this._cachedIndex = c,
            this.intervalChanged_(c, e, d)
        }
        return this.interpolate_(c, e, a, d)
    },
    settings: null ,
    DefaultSettings_: {},
    getSettings_: function() {
        return this.settings || this.DefaultSettings_
    },
    copySampleValue_: function(a) {
        var b = this.resultBuffer
          , c = this.sampleValues
          , d = this.valueSize;
        a *= d;
        for (var e = 0; e !== d; ++e)
            b[e] = c[a + e];
        return b
    },
    interpolate_: function(a, b, c, d) {
        throw Error("call to abstract method")
    },
    intervalChanged_: function(a, b, c) {}
},
Object.assign(THREE.Interpolant.prototype, {
    beforeStart_: THREE.Interpolant.prototype.copySampleValue_,
    afterEnd_: THREE.Interpolant.prototype.copySampleValue_
}),
THREE.CubicInterpolant = function(a, b, c, d) {
    THREE.Interpolant.call(this, a, b, c, d),
    this._offsetNext = this._weightNext = this._offsetPrev = this._weightPrev = -0
}
,
THREE.CubicInterpolant.prototype = Object.assign(Object.create(THREE.Interpolant.prototype), {
    constructor: THREE.CubicInterpolant,
    DefaultSettings_: {
        endingStart: THREE.ZeroCurvatureEnding,
        endingEnd: THREE.ZeroCurvatureEnding
    },
    intervalChanged_: function(a, b, c) {
        var d = this.parameterPositions
          , e = a - 2
          , f = a + 1
          , g = d[e]
          , h = d[f];
        if (void 0 === g)
            switch (this.getSettings_().endingStart) {
            case THREE.ZeroSlopeEnding:
                e = a,
                g = 2 * b - c;
                break;
            case THREE.WrapAroundEnding:
                e = d.length - 2,
                g = b + d[e] - d[e + 1];
                break;
            default:
                e = a,
                g = c
            }
        if (void 0 === h)
            switch (this.getSettings_().endingEnd) {
            case THREE.ZeroSlopeEnding:
                f = a,
                h = 2 * c - b;
                break;
            case THREE.WrapAroundEnding:
                f = 1,
                h = c + d[1] - d[0];
                break;
            default:
                f = a - 1,
                h = b
            }
        a = .5 * (c - b),
        d = this.valueSize,
        this._weightPrev = a / (b - g),
        this._weightNext = a / (h - c),
        this._offsetPrev = e * d,
        this._offsetNext = f * d
    },
    interpolate_: function(a, b, c, d) {
        var e = this.resultBuffer
          , f = this.sampleValues
          , g = this.valueSize;
        a *= g;
        var h = a - g
          , i = this._offsetPrev
          , j = this._offsetNext
          , k = this._weightPrev
          , l = this._weightNext
          , m = (c - b) / (d - b);
        for (c = m * m,
        d = c * m,
        b = -k * d + 2 * k * c - k * m,
        k = (1 + k) * d + (-1.5 - 2 * k) * c + (-.5 + k) * m + 1,
        m = (-1 - l) * d + (1.5 + l) * c + .5 * m,
        l = l * d - l * c,
        c = 0; c !== g; ++c)
            e[c] = b * f[i + c] + k * f[h + c] + m * f[a + c] + l * f[j + c];
        return e
    }
}),
THREE.DiscreteInterpolant = function(a, b, c, d) {
    THREE.Interpolant.call(this, a, b, c, d)
}
,
THREE.DiscreteInterpolant.prototype = Object.assign(Object.create(THREE.Interpolant.prototype), {
    constructor: THREE.DiscreteInterpolant,
    interpolate_: function(a, b, c, d) {
        return this.copySampleValue_(a - 1)
    }
}),
THREE.LinearInterpolant = function(a, b, c, d) {
    THREE.Interpolant.call(this, a, b, c, d)
}
,
THREE.LinearInterpolant.prototype = Object.assign(Object.create(THREE.Interpolant.prototype), {
    constructor: THREE.LinearInterpolant,
    interpolate_: function(a, b, c, d) {
        var e = this.resultBuffer
          , f = this.sampleValues
          , g = this.valueSize;
        a *= g;
        var h = a - g;
        for (b = (c - b) / (d - b),
        c = 1 - b,
        d = 0; d !== g; ++d)
            e[d] = f[h + d] * c + f[a + d] * b;
        return e
    }
}),
THREE.QuaternionLinearInterpolant = function(a, b, c, d) {
    THREE.Interpolant.call(this, a, b, c, d)
}
,
THREE.QuaternionLinearInterpolant.prototype = Object.assign(Object.create(THREE.Interpolant.prototype), {
    constructor: THREE.QuaternionLinearInterpolant,
    interpolate_: function(a, b, c, d) {
        var e = this.resultBuffer
          , f = this.sampleValues
          , g = this.valueSize;
        for (a *= g,
        b = (c - b) / (d - b),
        c = a + g; a !== c; a += 4)
            THREE.Quaternion.slerpFlat(e, 0, f, a - g, f, a, b);
        return e
    }
}),
THREE.Clock = function(a) {
    this.autoStart = void 0 !== a ? a : !0,
    this.elapsedTime = this.oldTime = this.startTime = 0,
    this.running = !1
}
,
THREE.Clock.prototype = {
    constructor: THREE.Clock,
    start: function() {
        this.oldTime = this.startTime = performance.now(),
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
        var a = 0;
        if (this.autoStart && !this.running && this.start(),
        this.running) {
            var b = performance.now()
              , a = .001 * (b - this.oldTime);
            this.oldTime = b,
            this.elapsedTime += a
        }
        return a
    }
},
THREE.EventDispatcher = function() {}
,
THREE.EventDispatcher.prototype = {
    constructor: THREE.EventDispatcher,
    apply: function(a) {
        a.addEventListener = THREE.EventDispatcher.prototype.addEventListener,
        a.hasEventListener = THREE.EventDispatcher.prototype.hasEventListener,
        a.removeEventListener = THREE.EventDispatcher.prototype.removeEventListener,
        a.dispatchEvent = THREE.EventDispatcher.prototype.dispatchEvent
    },
    addEventListener: function(a, b) {
        void 0 === this._listeners && (this._listeners = {});
        var c = this._listeners;
        void 0 === c[a] && (c[a] = []),
        -1 === c[a].indexOf(b) && c[a].push(b)
    },
    hasEventListener: function(a, b) {
        if (void 0 === this._listeners)
            return !1;
        var c = this._listeners;
        return void 0 !== c[a] && -1 !== c[a].indexOf(b) ? !0 : !1
    },
    removeEventListener: function(a, b) {
        if (void 0 !== this._listeners) {
            var c = this._listeners[a];
            if (void 0 !== c) {
                var d = c.indexOf(b);
                -1 !== d && c.splice(d, 1)
            }
        }
    },
    dispatchEvent: function(a) {
        if (void 0 !== this._listeners) {
            var b = this._listeners[a.type];
            if (void 0 !== b) {
                a.target = this;
                for (var c = [], d = b.length, e = 0; d > e; e++)
                    c[e] = b[e];
                for (e = 0; d > e; e++)
                    c[e].call(this, a)
            }
        }
    }
},
THREE.Layers = function() {
    this.mask = 1
}
,
THREE.Layers.prototype = {
    constructor: THREE.Layers,
    set: function(a) {
        this.mask = 1 << a
    },
    enable: function(a) {
        this.mask |= 1 << a
    },
    toggle: function(a) {
        this.mask ^= 1 << a
    },
    disable: function(a) {
        this.mask &= ~(1 << a)
    },
    test: function(a) {
        return 0 !== (this.mask & a.mask)
    }
},
function(a) {
    function b(a, b) {
        return a.distance - b.distance
    }
    function c(a, b, d, e) {
        if (!1 !== a.visible && (a.raycast(b, d),
        !0 === e)) {
            a = a.children,
            e = 0;
            for (var f = a.length; f > e; e++)
                c(a[e], b, d, !0)
        }
    }
    a.Raycaster = function(b, c, d, e) {
        this.ray = new a.Ray(b,c),
        this.near = d || 0,
        this.far = e || 1 / 0,
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
    ,
    a.Raycaster.prototype = {
        constructor: a.Raycaster,
        linePrecision: 1,
        set: function(a, b) {
            this.ray.set(a, b)
        },
        setFromCamera: function(b, c) {
            c instanceof a.PerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(c.matrixWorld),
            this.ray.direction.set(b.x, b.y, .5).unproject(c).sub(this.ray.origin).normalize()) : c instanceof a.OrthographicCamera ? (this.ray.origin.set(b.x, b.y, -1).unproject(c),
            this.ray.direction.set(0, 0, -1).transformDirection(c.matrixWorld)) : console.error("THREE.Raycaster: Unsupported camera type.")
        },
        intersectObject: function(a, d) {
            var e = [];
            return c(a, this, e, d),
            e.sort(b),
            e
        },
        intersectObjects: function(a, d) {
            var e = [];
            if (!1 === Array.isArray(a))
                return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),
                e;
            for (var f = 0, g = a.length; g > f; f++)
                c(a[f], this, e, d);
            return e.sort(b),
            e
        }
    }
}(THREE),
THREE.Object3D = function() {
    Object.defineProperty(this, "id", {
        value: THREE.Object3DIdCount++
    }),
    this.uuid = THREE.Math.generateUUID(),
    this.name = "",
    this.type = "Object3D",
    this.parent = null ,
    this.children = [],
    this.up = THREE.Object3D.DefaultUp.clone();
    var a = new THREE.Vector3
      , b = new THREE.Euler
      , c = new THREE.Quaternion
      , d = new THREE.Vector3(1,1,1);
    b.onChange(function() {
        c.setFromEuler(b, !1)
    }),
    c.onChange(function() {
        b.setFromQuaternion(c, void 0, !1)
    }),
    Object.defineProperties(this, {
        position: {
            enumerable: !0,
            value: a
        },
        rotation: {
            enumerable: !0,
            value: b
        },
        quaternion: {
            enumerable: !0,
            value: c
        },
        scale: {
            enumerable: !0,
            value: d
        },
        modelViewMatrix: {
            value: new THREE.Matrix4
        },
        normalMatrix: {
            value: new THREE.Matrix3
        }
    }),
    this.rotationAutoUpdate = !0,
    this.matrix = new THREE.Matrix4,
    this.matrixWorld = new THREE.Matrix4,
    this.matrixAutoUpdate = THREE.Object3D.DefaultMatrixAutoUpdate,
    this.matrixWorldNeedsUpdate = !1,
    this.layers = new THREE.Layers,
    this.visible = !0,
    this.receiveShadow = this.castShadow = !1,
    this.frustumCulled = !0,
    this.renderOrder = 0,
    this.userData = {}
}
,
THREE.Object3D.DefaultUp = new THREE.Vector3(0,1,0),
THREE.Object3D.DefaultMatrixAutoUpdate = !0,
THREE.Object3D.prototype = {
    constructor: THREE.Object3D,
    applyMatrix: function(a) {
        this.matrix.multiplyMatrices(a, this.matrix),
        this.matrix.decompose(this.position, this.quaternion, this.scale)
    },
    setRotationFromAxisAngle: function(a, b) {
        this.quaternion.setFromAxisAngle(a, b)
    },
    setRotationFromEuler: function(a) {
        this.quaternion.setFromEuler(a, !0)
    },
    setRotationFromMatrix: function(a) {
        this.quaternion.setFromRotationMatrix(a)
    },
    setRotationFromQuaternion: function(a) {
        this.quaternion.copy(a)
    },
    rotateOnAxis: function() {
        var a = new THREE.Quaternion;
        return function(b, c) {
            return a.setFromAxisAngle(b, c),
            this.quaternion.multiply(a),
            this
        }
    }(),
    rotateX: function() {
        var a = new THREE.Vector3(1,0,0);
        return function(b) {
            return this.rotateOnAxis(a, b)
        }
    }(),
    rotateY: function() {
        var a = new THREE.Vector3(0,1,0);
        return function(b) {
            return this.rotateOnAxis(a, b)
        }
    }(),
    rotateZ: function() {
        var a = new THREE.Vector3(0,0,1);
        return function(b) {
            return this.rotateOnAxis(a, b)
        }
    }(),
    translateOnAxis: function() {
        var a = new THREE.Vector3;
        return function(b, c) {
            return a.copy(b).applyQuaternion(this.quaternion),
            this.position.add(a.multiplyScalar(c)),
            this
        }
    }(),
    translateX: function() {
        var a = new THREE.Vector3(1,0,0);
        return function(b) {
            return this.translateOnAxis(a, b)
        }
    }(),
    translateY: function() {
        var a = new THREE.Vector3(0,1,0);
        return function(b) {
            return this.translateOnAxis(a, b)
        }
    }(),
    translateZ: function() {
        var a = new THREE.Vector3(0,0,1);
        return function(b) {
            return this.translateOnAxis(a, b)
        }
    }(),
    localToWorld: function(a) {
        return a.applyMatrix4(this.matrixWorld)
    },
    worldToLocal: function() {
        var a = new THREE.Matrix4;
        return function(b) {
            return b.applyMatrix4(a.getInverse(this.matrixWorld))
        }
    }(),
    lookAt: function() {
        var a = new THREE.Matrix4;
        return function(b) {
            a.lookAt(b, this.position, this.up),
            this.quaternion.setFromRotationMatrix(a)
        }
    }(),
    add: function(a) {
        if (1 < arguments.length) {
            for (var b = 0; b < arguments.length; b++)
                this.add(arguments[b]);
            return this
        }
        return a === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", a),
        this) : (a instanceof THREE.Object3D ? (null !== a.parent && a.parent.remove(a),
        a.parent = this,
        a.dispatchEvent({
            type: "added"
        }),
        this.children.push(a)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", a),
        this)
    },
    remove: function(a) {
        if (1 < arguments.length)
            for (var b = 0; b < arguments.length; b++)
                this.remove(arguments[b]);
        b = this.children.indexOf(a),
        -1 !== b && (a.parent = null ,
        a.dispatchEvent({
            type: "removed"
        }),
        this.children.splice(b, 1))
    },
    getObjectById: function(a) {
        return this.getObjectByProperty("id", a)
    },
    getObjectByName: function(a) {
        return this.getObjectByProperty("name", a)
    },
    getObjectByProperty: function(a, b) {
        if (this[a] === b)
            return this;
        for (var c = 0, d = this.children.length; d > c; c++) {
            var e = this.children[c].getObjectByProperty(a, b);
            if (void 0 !== e)
                return e
        }
    },
    getWorldPosition: function(a) {
        return a = a || new THREE.Vector3,
        this.updateMatrixWorld(!0),
        a.setFromMatrixPosition(this.matrixWorld)
    },
    getWorldQuaternion: function() {
        var a = new THREE.Vector3
          , b = new THREE.Vector3;
        return function(c) {
            return c = c || new THREE.Quaternion,
            this.updateMatrixWorld(!0),
            this.matrixWorld.decompose(a, c, b),
            c
        }
    }(),
    getWorldRotation: function() {
        var a = new THREE.Quaternion;
        return function(b) {
            return b = b || new THREE.Euler,
            this.getWorldQuaternion(a),
            b.setFromQuaternion(a, this.rotation.order, !1)
        }
    }(),
    getWorldScale: function() {
        var a = new THREE.Vector3
          , b = new THREE.Quaternion;
        return function(c) {
            return c = c || new THREE.Vector3,
            this.updateMatrixWorld(!0),
            this.matrixWorld.decompose(a, b, c),
            c
        }
    }(),
    getWorldDirection: function() {
        var a = new THREE.Quaternion;
        return function(b) {
            return b = b || new THREE.Vector3,
            this.getWorldQuaternion(a),
            b.set(0, 0, 1).applyQuaternion(a)
        }
    }(),
    raycast: function() {},
    traverse: function(a) {
        a(this);
        for (var b = this.children, c = 0, d = b.length; d > c; c++)
            b[c].traverse(a)
    },
    traverseVisible: function(a) {
        if (!1 !== this.visible) {
            a(this);
            for (var b = this.children, c = 0, d = b.length; d > c; c++)
                b[c].traverseVisible(a)
        }
    },
    traverseAncestors: function(a) {
        var b = this.parent;
        null !== b && (a(b),
        b.traverseAncestors(a))
    },
    updateMatrix: function() {
        this.matrix.compose(this.position, this.quaternion, this.scale),
        this.matrixWorldNeedsUpdate = !0
    },
    updateMatrixWorld: function(a) {
        !0 === this.matrixAutoUpdate && this.updateMatrix(),
        (!0 === this.matrixWorldNeedsUpdate || !0 === a) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
        this.matrixWorldNeedsUpdate = !1,
        a = !0);
        for (var b = 0, c = this.children.length; c > b; b++)
            this.children[b].updateMatrixWorld(a)
    },
    toJSON: function(a) {
        function b(a) {
            var b, c = [];
            for (b in a) {
                var d = a[b];
                delete d.metadata,
                c.push(d)
            }
            return c
        }
        var c = void 0 === a
          , d = {};
        c && (a = {
            geometries: {},
            materials: {},
            textures: {},
            images: {}
        },
        d.metadata = {
            version: 4.4,
            type: "Object",
            generator: "Object3D.toJSON"
        });
        var e = {};
        if (e.uuid = this.uuid,
        e.type = this.type,
        "" !== this.name && (e.name = this.name),
        "{}" !== JSON.stringify(this.userData) && (e.userData = this.userData),
        !0 === this.castShadow && (e.castShadow = !0),
        !0 === this.receiveShadow && (e.receiveShadow = !0),
        !1 === this.visible && (e.visible = !1),
        e.matrix = this.matrix.toArray(),
        void 0 !== this.geometry && (void 0 === a.geometries[this.geometry.uuid] && (a.geometries[this.geometry.uuid] = this.geometry.toJSON(a)),
        e.geometry = this.geometry.uuid),
        void 0 !== this.material && (void 0 === a.materials[this.material.uuid] && (a.materials[this.material.uuid] = this.material.toJSON(a)),
        e.material = this.material.uuid),
        0 < this.children.length) {
            e.children = [];
            for (var f = 0; f < this.children.length; f++)
                e.children.push(this.children[f].toJSON(a).object)
        }
        if (c) {
            var c = b(a.geometries)
              , f = b(a.materials)
              , g = b(a.textures);
            a = b(a.images),
            0 < c.length && (d.geometries = c),
            0 < f.length && (d.materials = f),
            0 < g.length && (d.textures = g),
            0 < a.length && (d.images = a)
        }
        return d.object = e,
        d
    },
    clone: function(a) {
        return (new this.constructor).copy(this, a)
    },
    copy: function(a, b) {
        if (void 0 === b && (b = !0),
        this.name = a.name,
        this.up.copy(a.up),
        this.position.copy(a.position),
        this.quaternion.copy(a.quaternion),
        this.scale.copy(a.scale),
        this.rotationAutoUpdate = a.rotationAutoUpdate,
        this.matrix.copy(a.matrix),
        this.matrixWorld.copy(a.matrixWorld),
        this.matrixAutoUpdate = a.matrixAutoUpdate,
        this.matrixWorldNeedsUpdate = a.matrixWorldNeedsUpdate,
        this.visible = a.visible,
        this.castShadow = a.castShadow,
        this.receiveShadow = a.receiveShadow,
        this.frustumCulled = a.frustumCulled,
        this.renderOrder = a.renderOrder,
        this.userData = JSON.parse(JSON.stringify(a.userData)),
        !0 === b)
            for (var c = 0; c < a.children.length; c++)
                this.add(a.children[c].clone());
        return this
    }
},
THREE.EventDispatcher.prototype.apply(THREE.Object3D.prototype),
THREE.Object3DIdCount = 0,
THREE.Face3 = function(a, b, c, d, e, f) {
    this.a = a,
    this.b = b,
    this.c = c,
    this.normal = d instanceof THREE.Vector3 ? d : new THREE.Vector3,
    this.vertexNormals = Array.isArray(d) ? d : [],
    this.color = e instanceof THREE.Color ? e : new THREE.Color,
    this.vertexColors = Array.isArray(e) ? e : [],
    this.materialIndex = void 0 !== f ? f : 0
}
,
THREE.Face3.prototype = {
    constructor: THREE.Face3,
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(a) {
        this.a = a.a,
        this.b = a.b,
        this.c = a.c,
        this.normal.copy(a.normal),
        this.color.copy(a.color),
        this.materialIndex = a.materialIndex;
        for (var b = 0, c = a.vertexNormals.length; c > b; b++)
            this.vertexNormals[b] = a.vertexNormals[b].clone();
        for (b = 0,
        c = a.vertexColors.length; c > b; b++)
            this.vertexColors[b] = a.vertexColors[b].clone();
        return this
    }
},
THREE.BufferAttribute = function(a, b) {
    this.uuid = THREE.Math.generateUUID(),
    this.array = a,
    this.itemSize = b,
    this.dynamic = !1,
    this.updateRange = {
        offset: 0,
        count: -1
    },
    this.version = 0
}
,
THREE.BufferAttribute.prototype = {
    constructor: THREE.BufferAttribute,
    get count() {
        return this.array.length / this.itemSize
    },
    set needsUpdate(a) {
        !0 === a && this.version++
    },
    setDynamic: function(a) {
        return this.dynamic = a,
        this
    },
    copy: function(a) {
        return this.array = new a.array.constructor(a.array),
        this.itemSize = a.itemSize,
        this.dynamic = a.dynamic,
        this
    },
    copyAt: function(a, b, c) {
        a *= this.itemSize,
        c *= b.itemSize;
        for (var d = 0, e = this.itemSize; e > d; d++)
            this.array[a + d] = b.array[c + d];
        return this
    },
    copyArray: function(a) {
        return this.array.set(a),
        this
    },
    copyColorsArray: function(a) {
        for (var b = this.array, c = 0, d = 0, e = a.length; e > d; d++) {
            var f = a[d];
            void 0 === f && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", d),
            f = new THREE.Color),
            b[c++] = f.r,
            b[c++] = f.g,
            b[c++] = f.b
        }
        return this
    },
    copyIndicesArray: function(a) {
        for (var b = this.array, c = 0, d = 0, e = a.length; e > d; d++) {
            var f = a[d];
            b[c++] = f.a,
            b[c++] = f.b,
            b[c++] = f.c
        }
        return this
    },
    copyVector2sArray: function(a) {
        for (var b = this.array, c = 0, d = 0, e = a.length; e > d; d++) {
            var f = a[d];
            void 0 === f && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", d),
            f = new THREE.Vector2),
            b[c++] = f.x,
            b[c++] = f.y
        }
        return this
    },
    copyVector3sArray: function(a) {
        for (var b = this.array, c = 0, d = 0, e = a.length; e > d; d++) {
            var f = a[d];
            void 0 === f && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", d),
            f = new THREE.Vector3),
            b[c++] = f.x,
            b[c++] = f.y,
            b[c++] = f.z
        }
        return this
    },
    copyVector4sArray: function(a) {
        for (var b = this.array, c = 0, d = 0, e = a.length; e > d; d++) {
            var f = a[d];
            void 0 === f && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", d),
            f = new THREE.Vector4),
            b[c++] = f.x,
            b[c++] = f.y,
            b[c++] = f.z,
            b[c++] = f.w
        }
        return this
    },
    set: function(a, b) {
        return void 0 === b && (b = 0),
        this.array.set(a, b),
        this
    },
    getX: function(a) {
        return this.array[a * this.itemSize]
    },
    setX: function(a, b) {
        return this.array[a * this.itemSize] = b,
        this
    },
    getY: function(a) {
        return this.array[a * this.itemSize + 1]
    },
    setY: function(a, b) {
        return this.array[a * this.itemSize + 1] = b,
        this
    },
    getZ: function(a) {
        return this.array[a * this.itemSize + 2]
    },
    setZ: function(a, b) {
        return this.array[a * this.itemSize + 2] = b,
        this
    },
    getW: function(a) {
        return this.array[a * this.itemSize + 3]
    },
    setW: function(a, b) {
        return this.array[a * this.itemSize + 3] = b,
        this
    },
    setXY: function(a, b, c) {
        return a *= this.itemSize,
        this.array[a + 0] = b,
        this.array[a + 1] = c,
        this
    },
    setXYZ: function(a, b, c, d) {
        return a *= this.itemSize,
        this.array[a + 0] = b,
        this.array[a + 1] = c,
        this.array[a + 2] = d,
        this
    },
    setXYZW: function(a, b, c, d, e) {
        return a *= this.itemSize,
        this.array[a + 0] = b,
        this.array[a + 1] = c,
        this.array[a + 2] = d,
        this.array[a + 3] = e,
        this
    },
    clone: function() {
        return (new this.constructor).copy(this)
    }
},
THREE.Int8Attribute = function(a, b) {
    return new THREE.BufferAttribute(new Int8Array(a),b)
}
,
THREE.Uint8Attribute = function(a, b) {
    return new THREE.BufferAttribute(new Uint8Array(a),b)
}
,
THREE.Uint8ClampedAttribute = function(a, b) {
    return new THREE.BufferAttribute(new Uint8ClampedArray(a),b)
}
,
THREE.Int16Attribute = function(a, b) {
    return new THREE.BufferAttribute(new Int16Array(a),b)
}
,
THREE.Uint16Attribute = function(a, b) {
    return new THREE.BufferAttribute(new Uint16Array(a),b)
}
,
THREE.Int32Attribute = function(a, b) {
    return new THREE.BufferAttribute(new Int32Array(a),b)
}
,
THREE.Uint32Attribute = function(a, b) {
    return new THREE.BufferAttribute(new Uint32Array(a),b)
}
,
THREE.Float32Attribute = function(a, b) {
    return new THREE.BufferAttribute(new Float32Array(a),b)
}
,
THREE.Float64Attribute = function(a, b) {
    return new THREE.BufferAttribute(new Float64Array(a),b)
}
,
THREE.DynamicBufferAttribute = function(a, b) {
    return console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead."),
    new THREE.BufferAttribute(a,b).setDynamic(!0)
}
,
THREE.InstancedBufferAttribute = function(a, b, c) {
    THREE.BufferAttribute.call(this, a, b),
    this.meshPerAttribute = c || 1
}
,
THREE.InstancedBufferAttribute.prototype = Object.create(THREE.BufferAttribute.prototype),
THREE.InstancedBufferAttribute.prototype.constructor = THREE.InstancedBufferAttribute,
THREE.InstancedBufferAttribute.prototype.copy = function(a) {
    return THREE.BufferAttribute.prototype.copy.call(this, a),
    this.meshPerAttribute = a.meshPerAttribute,
    this
}
,
THREE.InterleavedBuffer = function(a, b) {
    this.uuid = THREE.Math.generateUUID(),
    this.array = a,
    this.stride = b,
    this.dynamic = !1,
    this.updateRange = {
        offset: 0,
        count: -1
    },
    this.version = 0
}
,
THREE.InterleavedBuffer.prototype = {
    constructor: THREE.InterleavedBuffer,
    get length() {
        return this.array.length
    },
    get count() {
        return this.array.length / this.stride
    },
    set needsUpdate(a) {
        !0 === a && this.version++
    },
    setDynamic: function(a) {
        return this.dynamic = a,
        this
    },
    copy: function(a) {
        return this.array = new a.array.constructor(a.array),
        this.stride = a.stride,
        this.dynamic = a.dynamic,
        this
    },
    copyAt: function(a, b, c) {
        a *= this.stride,
        c *= b.stride;
        for (var d = 0, e = this.stride; e > d; d++)
            this.array[a + d] = b.array[c + d];
        return this
    },
    set: function(a, b) {
        return void 0 === b && (b = 0),
        this.array.set(a, b),
        this
    },
    clone: function() {
        return (new this.constructor).copy(this)
    }
},
THREE.InstancedInterleavedBuffer = function(a, b, c) {
    THREE.InterleavedBuffer.call(this, a, b),
    this.meshPerAttribute = c || 1
}
,
THREE.InstancedInterleavedBuffer.prototype = Object.create(THREE.InterleavedBuffer.prototype),
THREE.InstancedInterleavedBuffer.prototype.constructor = THREE.InstancedInterleavedBuffer,
THREE.InstancedInterleavedBuffer.prototype.copy = function(a) {
    return THREE.InterleavedBuffer.prototype.copy.call(this, a),
    this.meshPerAttribute = a.meshPerAttribute,
    this
}
,
THREE.InterleavedBufferAttribute = function(a, b, c) {
    this.uuid = THREE.Math.generateUUID(),
    this.data = a,
    this.itemSize = b,
    this.offset = c
}
,
THREE.InterleavedBufferAttribute.prototype = {
    constructor: THREE.InterleavedBufferAttribute,
    get length() {
        return console.warn("THREE.BufferAttribute: .length has been deprecated. Please use .count."),
        this.array.length
    },
    get count() {
        return this.data.count
    },
    setX: function(a, b) {
        return this.data.array[a * this.data.stride + this.offset] = b,
        this
    },
    setY: function(a, b) {
        return this.data.array[a * this.data.stride + this.offset + 1] = b,
        this
    },
    setZ: function(a, b) {
        return this.data.array[a * this.data.stride + this.offset + 2] = b,
        this
    },
    setW: function(a, b) {
        return this.data.array[a * this.data.stride + this.offset + 3] = b,
        this
    },
    getX: function(a) {
        return this.data.array[a * this.data.stride + this.offset]
    },
    getY: function(a) {
        return this.data.array[a * this.data.stride + this.offset + 1]
    },
    getZ: function(a) {
        return this.data.array[a * this.data.stride + this.offset + 2]
    },
    getW: function(a) {
        return this.data.array[a * this.data.stride + this.offset + 3]
    },
    setXY: function(a, b, c) {
        return a = a * this.data.stride + this.offset,
        this.data.array[a + 0] = b,
        this.data.array[a + 1] = c,
        this
    },
    setXYZ: function(a, b, c, d) {
        return a = a * this.data.stride + this.offset,
        this.data.array[a + 0] = b,
        this.data.array[a + 1] = c,
        this.data.array[a + 2] = d,
        this
    },
    setXYZW: function(a, b, c, d, e) {
        return a = a * this.data.stride + this.offset,
        this.data.array[a + 0] = b,
        this.data.array[a + 1] = c,
        this.data.array[a + 2] = d,
        this.data.array[a + 3] = e,
        this
    }
},
THREE.Geometry = function() {
    Object.defineProperty(this, "id", {
        value: THREE.GeometryIdCount++
    }),
    this.uuid = THREE.Math.generateUUID(),
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
    this.boundingSphere = this.boundingBox = null ,
    this.groupsNeedUpdate = this.lineDistancesNeedUpdate = this.colorsNeedUpdate = this.normalsNeedUpdate = this.uvsNeedUpdate = this.elementsNeedUpdate = this.verticesNeedUpdate = !1;
}
,
THREE.Geometry.prototype = {
    constructor: THREE.Geometry,
    applyMatrix: function(a) {
        for (var b = (new THREE.Matrix3).getNormalMatrix(a), c = 0, d = this.vertices.length; d > c; c++)
            this.vertices[c].applyMatrix4(a);
        for (c = 0,
        d = this.faces.length; d > c; c++) {
            a = this.faces[c],
            a.normal.applyMatrix3(b).normalize();
            for (var e = 0, f = a.vertexNormals.length; f > e; e++)
                a.vertexNormals[e].applyMatrix3(b).normalize()
        }
        return null !== this.boundingBox && this.computeBoundingBox(),
        null !== this.boundingSphere && this.computeBoundingSphere(),
        this.normalsNeedUpdate = this.verticesNeedUpdate = !0,
        this
    },
    rotateX: function() {
        var a;
        return function(b) {
            return void 0 === a && (a = new THREE.Matrix4),
            a.makeRotationX(b),
            this.applyMatrix(a),
            this
        }
    }(),
    rotateY: function() {
        var a;
        return function(b) {
            return void 0 === a && (a = new THREE.Matrix4),
            a.makeRotationY(b),
            this.applyMatrix(a),
            this
        }
    }(),
    rotateZ: function() {
        var a;
        return function(b) {
            return void 0 === a && (a = new THREE.Matrix4),
            a.makeRotationZ(b),
            this.applyMatrix(a),
            this
        }
    }(),
    translate: function() {
        var a;
        return function(b, c, d) {
            return void 0 === a && (a = new THREE.Matrix4),
            a.makeTranslation(b, c, d),
            this.applyMatrix(a),
            this
        }
    }(),
    scale: function() {
        var a;
        return function(b, c, d) {
            return void 0 === a && (a = new THREE.Matrix4),
            a.makeScale(b, c, d),
            this.applyMatrix(a),
            this
        }
    }(),
    lookAt: function() {
        var a;
        return function(b) {
            void 0 === a && (a = new THREE.Object3D),
            a.lookAt(b),
            a.updateMatrix(),
            this.applyMatrix(a.matrix)
        }
    }(),
    fromBufferGeometry: function(a) {
        function b(a, b, d, e) {
            var f = void 0 !== g ? [k[a].clone(), k[b].clone(), k[d].clone()] : []
              , n = void 0 !== h ? [c.colors[a].clone(), c.colors[b].clone(), c.colors[d].clone()] : [];
            e = new THREE.Face3(a,b,d,f,n,e),
            c.faces.push(e),
            void 0 !== i && c.faceVertexUvs[0].push([l[a].clone(), l[b].clone(), l[d].clone()]),
            void 0 !== j && c.faceVertexUvs[1].push([m[a].clone(), m[b].clone(), m[d].clone()])
        }
        var c = this
          , d = null !== a.index ? a.index.array : void 0
          , e = a.attributes
          , f = e.position.array
          , g = void 0 !== e.normal ? e.normal.array : void 0
          , h = void 0 !== e.color ? e.color.array : void 0
          , i = void 0 !== e.uv ? e.uv.array : void 0
          , j = void 0 !== e.uv2 ? e.uv2.array : void 0;
        void 0 !== j && (this.faceVertexUvs[1] = []);
        for (var k = [], l = [], m = [], n = e = 0; e < f.length; e += 3,
        n += 2)
            c.vertices.push(new THREE.Vector3(f[e],f[e + 1],f[e + 2])),
            void 0 !== g && k.push(new THREE.Vector3(g[e],g[e + 1],g[e + 2])),
            void 0 !== h && c.colors.push(new THREE.Color(h[e],h[e + 1],h[e + 2])),
            void 0 !== i && l.push(new THREE.Vector2(i[n],i[n + 1])),
            void 0 !== j && m.push(new THREE.Vector2(j[n],j[n + 1]));
        if (void 0 !== d)
            if (f = a.groups,
            0 < f.length)
                for (e = 0; e < f.length; e++)
                    for (var o = f[e], p = o.start, q = o.count, n = p, p = p + q; p > n; n += 3)
                        b(d[n], d[n + 1], d[n + 2], o.materialIndex);
            else
                for (e = 0; e < d.length; e += 3)
                    b(d[e], d[e + 1], d[e + 2]);
        else
            for (e = 0; e < f.length / 3; e += 3)
                b(e, e + 1, e + 2);
        return this.computeFaceNormals(),
        null !== a.boundingBox && (this.boundingBox = a.boundingBox.clone()),
        null !== a.boundingSphere && (this.boundingSphere = a.boundingSphere.clone()),
        this
    },
    center: function() {
        this.computeBoundingBox();
        var a = this.boundingBox.center().negate();
        return this.translate(a.x, a.y, a.z),
        a
    },
    normalize: function() {
        this.computeBoundingSphere();
        var a = this.boundingSphere.center
          , b = this.boundingSphere.radius
          , b = 0 === b ? 1 : 1 / b
          , c = new THREE.Matrix4;
        return c.set(b, 0, 0, -b * a.x, 0, b, 0, -b * a.y, 0, 0, b, -b * a.z, 0, 0, 0, 1),
        this.applyMatrix(c),
        this
    },
    computeFaceNormals: function() {
        for (var a = new THREE.Vector3, b = new THREE.Vector3, c = 0, d = this.faces.length; d > c; c++) {
            var e = this.faces[c]
              , f = this.vertices[e.a]
              , g = this.vertices[e.b];
            a.subVectors(this.vertices[e.c], g),
            b.subVectors(f, g),
            a.cross(b),
            a.normalize(),
            e.normal.copy(a)
        }
    },
    computeVertexNormals: function(a) {
        void 0 === a && (a = !0);
        var b, c, d;
        for (d = Array(this.vertices.length),
        b = 0,
        c = this.vertices.length; c > b; b++)
            d[b] = new THREE.Vector3;
        if (a) {
            var e, f, g, h = new THREE.Vector3, i = new THREE.Vector3;
            for (a = 0,
            b = this.faces.length; b > a; a++)
                c = this.faces[a],
                e = this.vertices[c.a],
                f = this.vertices[c.b],
                g = this.vertices[c.c],
                h.subVectors(g, f),
                i.subVectors(e, f),
                h.cross(i),
                d[c.a].add(h),
                d[c.b].add(h),
                d[c.c].add(h)
        } else
            for (a = 0,
            b = this.faces.length; b > a; a++)
                c = this.faces[a],
                d[c.a].add(c.normal),
                d[c.b].add(c.normal),
                d[c.c].add(c.normal);
        for (b = 0,
        c = this.vertices.length; c > b; b++)
            d[b].normalize();
        for (a = 0,
        b = this.faces.length; b > a; a++)
            c = this.faces[a],
            e = c.vertexNormals,
            3 === e.length ? (e[0].copy(d[c.a]),
            e[1].copy(d[c.b]),
            e[2].copy(d[c.c])) : (e[0] = d[c.a].clone(),
            e[1] = d[c.b].clone(),
            e[2] = d[c.c].clone());
        0 < this.faces.length && (this.normalsNeedUpdate = !0)
    },
    computeMorphNormals: function() {
        var a, b, c, d, e;
        for (c = 0,
        d = this.faces.length; d > c; c++)
            for (e = this.faces[c],
            e.__originalFaceNormal ? e.__originalFaceNormal.copy(e.normal) : e.__originalFaceNormal = e.normal.clone(),
            e.__originalVertexNormals || (e.__originalVertexNormals = []),
            a = 0,
            b = e.vertexNormals.length; b > a; a++)
                e.__originalVertexNormals[a] ? e.__originalVertexNormals[a].copy(e.vertexNormals[a]) : e.__originalVertexNormals[a] = e.vertexNormals[a].clone();
        var f = new THREE.Geometry;
        for (f.faces = this.faces,
        a = 0,
        b = this.morphTargets.length; b > a; a++) {
            if (!this.morphNormals[a]) {
                this.morphNormals[a] = {},
                this.morphNormals[a].faceNormals = [],
                this.morphNormals[a].vertexNormals = [],
                e = this.morphNormals[a].faceNormals;
                var g, h, i = this.morphNormals[a].vertexNormals;
                for (c = 0,
                d = this.faces.length; d > c; c++)
                    g = new THREE.Vector3,
                    h = {
                        a: new THREE.Vector3,
                        b: new THREE.Vector3,
                        c: new THREE.Vector3
                    },
                    e.push(g),
                    i.push(h)
            }
            for (i = this.morphNormals[a],
            f.vertices = this.morphTargets[a].vertices,
            f.computeFaceNormals(),
            f.computeVertexNormals(),
            c = 0,
            d = this.faces.length; d > c; c++)
                e = this.faces[c],
                g = i.faceNormals[c],
                h = i.vertexNormals[c],
                g.copy(e.normal),
                h.a.copy(e.vertexNormals[0]),
                h.b.copy(e.vertexNormals[1]),
                h.c.copy(e.vertexNormals[2])
        }
        for (c = 0,
        d = this.faces.length; d > c; c++)
            e = this.faces[c],
            e.normal = e.__originalFaceNormal,
            e.vertexNormals = e.__originalVertexNormals
    },
    computeTangents: function() {
        console.warn("THREE.Geometry: .computeTangents() has been removed.")
    },
    computeLineDistances: function() {
        for (var a = 0, b = this.vertices, c = 0, d = b.length; d > c; c++)
            c > 0 && (a += b[c].distanceTo(b[c - 1])),
            this.lineDistances[c] = a
    },
    computeBoundingBox: function() {
        null === this.boundingBox && (this.boundingBox = new THREE.Box3),
        this.boundingBox.setFromPoints(this.vertices)
    },
    computeBoundingSphere: function() {
        null === this.boundingSphere && (this.boundingSphere = new THREE.Sphere),
        this.boundingSphere.setFromPoints(this.vertices)
    },
    merge: function(a, b, c) {
        if (!1 == a instanceof THREE.Geometry)
            console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", a);
        else {
            var d, e = this.vertices.length, f = this.vertices, g = a.vertices, h = this.faces, i = a.faces, j = this.faceVertexUvs[0];
            a = a.faceVertexUvs[0],
            void 0 === c && (c = 0),
            void 0 !== b && (d = (new THREE.Matrix3).getNormalMatrix(b));
            for (var k = 0, l = g.length; l > k; k++) {
                var m = g[k].clone();
                void 0 !== b && m.applyMatrix4(b),
                f.push(m)
            }
            for (k = 0,
            l = i.length; l > k; k++) {
                var n, g = i[k], o = g.vertexNormals, p = g.vertexColors, m = new THREE.Face3(g.a + e,g.b + e,g.c + e);
                for (m.normal.copy(g.normal),
                void 0 !== d && m.normal.applyMatrix3(d).normalize(),
                b = 0,
                f = o.length; f > b; b++)
                    n = o[b].clone(),
                    void 0 !== d && n.applyMatrix3(d).normalize(),
                    m.vertexNormals.push(n);
                for (m.color.copy(g.color),
                b = 0,
                f = p.length; f > b; b++)
                    n = p[b],
                    m.vertexColors.push(n.clone());
                m.materialIndex = g.materialIndex + c,
                h.push(m)
            }
            for (k = 0,
            l = a.length; l > k; k++)
                if (c = a[k],
                d = [],
                void 0 !== c) {
                    for (b = 0,
                    f = c.length; f > b; b++)
                        d.push(c[b].clone());
                    j.push(d)
                }
        }
    },
    mergeMesh: function(a) {
        !1 == a instanceof THREE.Mesh ? console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", a) : (a.matrixAutoUpdate && a.updateMatrix(),
        this.merge(a.geometry, a.matrix))
    },
    mergeVertices: function() {
        var a, b, c, d = {}, e = [], f = [], g = Math.pow(10, 4);
        for (b = 0,
        c = this.vertices.length; c > b; b++)
            a = this.vertices[b],
            a = Math.round(a.x * g) + "_" + Math.round(a.y * g) + "_" + Math.round(a.z * g),
            void 0 === d[a] ? (d[a] = b,
            e.push(this.vertices[b]),
            f[b] = e.length - 1) : f[b] = f[d[a]];
        for (d = [],
        b = 0,
        c = this.faces.length; c > b; b++)
            for (g = this.faces[b],
            g.a = f[g.a],
            g.b = f[g.b],
            g.c = f[g.c],
            g = [g.a, g.b, g.c],
            a = 0; 3 > a; a++)
                if (g[a] === g[(a + 1) % 3]) {
                    d.push(b);
                    break
                }
        for (b = d.length - 1; b >= 0; b--)
            for (g = d[b],
            this.faces.splice(g, 1),
            f = 0,
            c = this.faceVertexUvs.length; c > f; f++)
                this.faceVertexUvs[f].splice(g, 1);
        return b = this.vertices.length - e.length,
        this.vertices = e,
        b
    },
    sortFacesByMaterialIndex: function() {
        for (var a = this.faces, b = a.length, c = 0; b > c; c++)
            a[c]._id = c;
        a.sort(function(a, b) {
            return a.materialIndex - b.materialIndex
        });
        var d, e, f = this.faceVertexUvs[0], g = this.faceVertexUvs[1];
        for (f && f.length === b && (d = []),
        g && g.length === b && (e = []),
        c = 0; b > c; c++) {
            var h = a[c]._id;
            d && d.push(f[h]),
            e && e.push(g[h])
        }
        d && (this.faceVertexUvs[0] = d),
        e && (this.faceVertexUvs[1] = e)
    },
    toJSON: function() {
        function a(a, b, c) {
            return c ? a | 1 << b : a & ~(1 << b)
        }
        function b(a) {
            var b = a.x.toString() + a.y.toString() + a.z.toString();
            return void 0 !== j[b] ? j[b] : (j[b] = i.length / 3,
            i.push(a.x, a.y, a.z),
            j[b])
        }
        function c(a) {
            var b = a.r.toString() + a.g.toString() + a.b.toString();
            return void 0 !== l[b] ? l[b] : (l[b] = k.length,
            k.push(a.getHex()),
            l[b])
        }
        function d(a) {
            var b = a.x.toString() + a.y.toString();
            return void 0 !== n[b] ? n[b] : (n[b] = m.length / 2,
            m.push(a.x, a.y),
            n[b])
        }
        var e = {
            metadata: {
                version: 4.4,
                type: "Geometry",
                generator: "Geometry.toJSON"
            }
        };
        if (e.uuid = this.uuid,
        e.type = this.type,
        "" !== this.name && (e.name = this.name),
        void 0 !== this.parameters) {
            var f, g = this.parameters;
            for (f in g)
                void 0 !== g[f] && (e[f] = g[f]);
            return e
        }
        for (g = [],
        f = 0; f < this.vertices.length; f++) {
            var h = this.vertices[f];
            g.push(h.x, h.y, h.z)
        }
        var h = []
          , i = []
          , j = {}
          , k = []
          , l = {}
          , m = []
          , n = {};
        for (f = 0; f < this.faces.length; f++) {
            var o = this.faces[f]
              , p = void 0 !== this.faceVertexUvs[0][f]
              , q = 0 < o.normal.length()
              , r = 0 < o.vertexNormals.length
              , s = 1 !== o.color.r || 1 !== o.color.g || 1 !== o.color.b
              , t = 0 < o.vertexColors.length
              , u = 0
              , u = a(u, 0, 0)
              , u = a(u, 1, !0)
              , u = a(u, 2, !1)
              , u = a(u, 3, p)
              , u = a(u, 4, q)
              , u = a(u, 5, r)
              , u = a(u, 6, s)
              , u = a(u, 7, t);
            h.push(u),
            h.push(o.a, o.b, o.c),
            h.push(o.materialIndex),
            p && (p = this.faceVertexUvs[0][f],
            h.push(d(p[0]), d(p[1]), d(p[2]))),
            q && h.push(b(o.normal)),
            r && (q = o.vertexNormals,
            h.push(b(q[0]), b(q[1]), b(q[2]))),
            s && h.push(c(o.color)),
            t && (o = o.vertexColors,
            h.push(c(o[0]), c(o[1]), c(o[2])))
        }
        return e.data = {},
        e.data.vertices = g,
        e.data.normals = i,
        0 < k.length && (e.data.colors = k),
        0 < m.length && (e.data.uvs = [m]),
        e.data.faces = h,
        e
    },
    clone: function() {
        return (new THREE.Geometry).copy(this)
    },
    copy: function(a) {
        this.vertices = [],
        this.faces = [],
        this.faceVertexUvs = [[]];
        for (var b = a.vertices, c = 0, d = b.length; d > c; c++)
            this.vertices.push(b[c].clone());
        for (b = a.faces,
        c = 0,
        d = b.length; d > c; c++)
            this.faces.push(b[c].clone());
        for (c = 0,
        d = a.faceVertexUvs.length; d > c; c++) {
            b = a.faceVertexUvs[c],
            void 0 === this.faceVertexUvs[c] && (this.faceVertexUvs[c] = []);
            for (var e = 0, f = b.length; f > e; e++) {
                for (var g = b[e], h = [], i = 0, j = g.length; j > i; i++)
                    h.push(g[i].clone());
                this.faceVertexUvs[c].push(h)
            }
        }
        return this
    },
    dispose: function() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
},
THREE.EventDispatcher.prototype.apply(THREE.Geometry.prototype),
THREE.GeometryIdCount = 0,
THREE.DirectGeometry = function() {
    Object.defineProperty(this, "id", {
        value: THREE.GeometryIdCount++
    }),
    this.uuid = THREE.Math.generateUUID(),
    this.name = "",
    this.type = "DirectGeometry",
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
    this.boundingSphere = this.boundingBox = null ,
    this.groupsNeedUpdate = this.uvsNeedUpdate = this.colorsNeedUpdate = this.normalsNeedUpdate = this.verticesNeedUpdate = !1
}
,
THREE.DirectGeometry.prototype = {
    constructor: THREE.DirectGeometry,
    computeBoundingBox: THREE.Geometry.prototype.computeBoundingBox,
    computeBoundingSphere: THREE.Geometry.prototype.computeBoundingSphere,
    computeFaceNormals: function() {
        console.warn("THREE.DirectGeometry: computeFaceNormals() is not a method of this type of geometry.")
    },
    computeVertexNormals: function() {
        console.warn("THREE.DirectGeometry: computeVertexNormals() is not a method of this type of geometry.")
    },
    computeGroups: function(a) {
        var b, c, d = [];
        a = a.faces;
        for (var e = 0; e < a.length; e++) {
            var f = a[e];
            f.materialIndex !== c && (c = f.materialIndex,
            void 0 !== b && (b.count = 3 * e - b.start,
            d.push(b)),
            b = {
                start: 3 * e,
                materialIndex: c
            })
        }
        void 0 !== b && (b.count = 3 * e - b.start,
        d.push(b)),
        this.groups = d
    },
    fromGeometry: function(a) {
        var b, c = a.faces, d = a.vertices, e = a.faceVertexUvs, f = e[0] && 0 < e[0].length, g = e[1] && 0 < e[1].length, h = a.morphTargets, i = h.length;
        if (i > 0) {
            b = [];
            for (var j = 0; i > j; j++)
                b[j] = [];
            this.morphTargets.position = b
        }
        var k, l = a.morphNormals, m = l.length;
        if (m > 0) {
            for (k = [],
            j = 0; m > j; j++)
                k[j] = [];
            this.morphTargets.normal = k
        }
        for (var n = a.skinIndices, o = a.skinWeights, p = n.length === d.length, q = o.length === d.length, j = 0; j < c.length; j++) {
            var r = c[j];
            this.vertices.push(d[r.a], d[r.b], d[r.c]);
            var s = r.vertexNormals;
            for (3 === s.length ? this.normals.push(s[0], s[1], s[2]) : (s = r.normal,
            this.normals.push(s, s, s)),
            s = r.vertexColors,
            3 === s.length ? this.colors.push(s[0], s[1], s[2]) : (s = r.color,
            this.colors.push(s, s, s)),
            !0 === f && (s = e[0][j],
            void 0 !== s ? this.uvs.push(s[0], s[1], s[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", j),
            this.uvs.push(new THREE.Vector2, new THREE.Vector2, new THREE.Vector2))),
            !0 === g && (s = e[1][j],
            void 0 !== s ? this.uvs2.push(s[0], s[1], s[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", j),
            this.uvs2.push(new THREE.Vector2, new THREE.Vector2, new THREE.Vector2))),
            s = 0; i > s; s++) {
                var t = h[s].vertices;
                b[s].push(t[r.a], t[r.b], t[r.c])
            }
            for (s = 0; m > s; s++)
                t = l[s].vertexNormals[j],
                k[s].push(t.a, t.b, t.c);
            p && this.skinIndices.push(n[r.a], n[r.b], n[r.c]),
            q && this.skinWeights.push(o[r.a], o[r.b], o[r.c])
        }
        return this.computeGroups(a),
        this.verticesNeedUpdate = a.verticesNeedUpdate,
        this.normalsNeedUpdate = a.normalsNeedUpdate,
        this.colorsNeedUpdate = a.colorsNeedUpdate,
        this.uvsNeedUpdate = a.uvsNeedUpdate,
        this.groupsNeedUpdate = a.groupsNeedUpdate,
        this
    },
    dispose: function() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
},
THREE.EventDispatcher.prototype.apply(THREE.DirectGeometry.prototype),
THREE.BufferGeometry = function() {
    Object.defineProperty(this, "id", {
        value: THREE.GeometryIdCount++
    }),
    this.uuid = THREE.Math.generateUUID(),
    this.name = "",
    this.type = "BufferGeometry",
    this.index = null ,
    this.attributes = {},
    this.morphAttributes = {},
    this.groups = [],
    this.boundingSphere = this.boundingBox = null ,
    this.drawRange = {
        start: 0,
        count: 1 / 0
    }
}
,
THREE.BufferGeometry.prototype = {
    constructor: THREE.BufferGeometry,
    getIndex: function() {
        return this.index
    },
    setIndex: function(a) {
        this.index = a
    },
    addAttribute: function(a, b, c) {
        if (!1 == b instanceof THREE.BufferAttribute && !1 == b instanceof THREE.InterleavedBufferAttribute)
            console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),
            this.addAttribute(a, new THREE.BufferAttribute(b,c));
        else {
            if ("index" !== a)
                return this.attributes[a] = b,
                this;
            console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),
            this.setIndex(b)
        }
    },
    getAttribute: function(a) {
        return this.attributes[a]
    },
    removeAttribute: function(a) {
        return delete this.attributes[a],
        this
    },
    addGroup: function(a, b, c) {
        this.groups.push({
            start: a,
            count: b,
            materialIndex: void 0 !== c ? c : 0
        })
    },
    clearGroups: function() {
        this.groups = []
    },
    setDrawRange: function(a, b) {
        this.drawRange.start = a,
        this.drawRange.count = b
    },
    applyMatrix: function(a) {
        var b = this.attributes.position;
        return void 0 !== b && (a.applyToVector3Array(b.array),
        b.needsUpdate = !0),
        b = this.attributes.normal,
        void 0 !== b && ((new THREE.Matrix3).getNormalMatrix(a).applyToVector3Array(b.array),
        b.needsUpdate = !0),
        null !== this.boundingBox && this.computeBoundingBox(),
        null !== this.boundingSphere && this.computeBoundingSphere(),
        this
    },
    rotateX: function() {
        var a;
        return function(b) {
            return void 0 === a && (a = new THREE.Matrix4),
            a.makeRotationX(b),
            this.applyMatrix(a),
            this
        }
    }(),
    rotateY: function() {
        var a;
        return function(b) {
            return void 0 === a && (a = new THREE.Matrix4),
            a.makeRotationY(b),
            this.applyMatrix(a),
            this
        }
    }(),
    rotateZ: function() {
        var a;
        return function(b) {
            return void 0 === a && (a = new THREE.Matrix4),
            a.makeRotationZ(b),
            this.applyMatrix(a),
            this
        }
    }(),
    translate: function() {
        var a;
        return function(b, c, d) {
            return void 0 === a && (a = new THREE.Matrix4),
            a.makeTranslation(b, c, d),
            this.applyMatrix(a),
            this
        }
    }(),
    scale: function() {
        var a;
        return function(b, c, d) {
            return void 0 === a && (a = new THREE.Matrix4),
            a.makeScale(b, c, d),
            this.applyMatrix(a),
            this
        }
    }(),
    lookAt: function() {
        var a;
        return function(b) {
            void 0 === a && (a = new THREE.Object3D),
            a.lookAt(b),
            a.updateMatrix(),
            this.applyMatrix(a.matrix)
        }
    }(),
    center: function() {
        this.computeBoundingBox();
        var a = this.boundingBox.center().negate();
        return this.translate(a.x, a.y, a.z),
        a
    },
    setFromObject: function(a) {
        var b = a.geometry;
        if (a instanceof THREE.Points || a instanceof THREE.Line) {
            a = new THREE.Float32Attribute(3 * b.vertices.length,3);
            var c = new THREE.Float32Attribute(3 * b.colors.length,3);
            this.addAttribute("position", a.copyVector3sArray(b.vertices)),
            this.addAttribute("color", c.copyColorsArray(b.colors)),
            b.lineDistances && b.lineDistances.length === b.vertices.length && (a = new THREE.Float32Attribute(b.lineDistances.length,1),
            this.addAttribute("lineDistance", a.copyArray(b.lineDistances))),
            null !== b.boundingSphere && (this.boundingSphere = b.boundingSphere.clone()),
            null !== b.boundingBox && (this.boundingBox = b.boundingBox.clone())
        } else
            a instanceof THREE.Mesh && b instanceof THREE.Geometry && this.fromGeometry(b);
        return this
    },
    updateFromObject: function(a) {
        var b = a.geometry;
        if (a instanceof THREE.Mesh) {
            var c = b.__directGeometry;
            if (void 0 === c)
                return this.fromGeometry(b);
            c.verticesNeedUpdate = b.verticesNeedUpdate,
            c.normalsNeedUpdate = b.normalsNeedUpdate,
            c.colorsNeedUpdate = b.colorsNeedUpdate,
            c.uvsNeedUpdate = b.uvsNeedUpdate,
            c.groupsNeedUpdate = b.groupsNeedUpdate,
            b.verticesNeedUpdate = !1,
            b.normalsNeedUpdate = !1,
            b.colorsNeedUpdate = !1,
            b.uvsNeedUpdate = !1,
            b.groupsNeedUpdate = !1,
            b = c
        }
        return !0 === b.verticesNeedUpdate && (c = this.attributes.position,
        void 0 !== c && (c.copyVector3sArray(b.vertices),
        c.needsUpdate = !0),
        b.verticesNeedUpdate = !1),
        !0 === b.normalsNeedUpdate && (c = this.attributes.normal,
        void 0 !== c && (c.copyVector3sArray(b.normals),
        c.needsUpdate = !0),
        b.normalsNeedUpdate = !1),
        !0 === b.colorsNeedUpdate && (c = this.attributes.color,
        void 0 !== c && (c.copyColorsArray(b.colors),
        c.needsUpdate = !0),
        b.colorsNeedUpdate = !1),
        b.uvsNeedUpdate && (c = this.attributes.uv,
        void 0 !== c && (c.copyVector2sArray(b.uvs),
        c.needsUpdate = !0),
        b.uvsNeedUpdate = !1),
        b.lineDistancesNeedUpdate && (c = this.attributes.lineDistance,
        void 0 !== c && (c.copyArray(b.lineDistances),
        c.needsUpdate = !0),
        b.lineDistancesNeedUpdate = !1),
        b.groupsNeedUpdate && (b.computeGroups(a.geometry),
        this.groups = b.groups,
        b.groupsNeedUpdate = !1),
        this
    },
    fromGeometry: function(a) {
        return a.__directGeometry = (new THREE.DirectGeometry).fromGeometry(a),
        this.fromDirectGeometry(a.__directGeometry)
    },
    fromDirectGeometry: function(a) {
        var b = new Float32Array(3 * a.vertices.length);
        this.addAttribute("position", new THREE.BufferAttribute(b,3).copyVector3sArray(a.vertices)),
        0 < a.normals.length && (b = new Float32Array(3 * a.normals.length),
        this.addAttribute("normal", new THREE.BufferAttribute(b,3).copyVector3sArray(a.normals))),
        0 < a.colors.length && (b = new Float32Array(3 * a.colors.length),
        this.addAttribute("color", new THREE.BufferAttribute(b,3).copyColorsArray(a.colors))),
        0 < a.uvs.length && (b = new Float32Array(2 * a.uvs.length),
        this.addAttribute("uv", new THREE.BufferAttribute(b,2).copyVector2sArray(a.uvs))),
        0 < a.uvs2.length && (b = new Float32Array(2 * a.uvs2.length),
        this.addAttribute("uv2", new THREE.BufferAttribute(b,2).copyVector2sArray(a.uvs2))),
        0 < a.indices.length && (b = new (65535 < a.vertices.length ? Uint32Array : Uint16Array)(3 * a.indices.length),
        this.setIndex(new THREE.BufferAttribute(b,1).copyIndicesArray(a.indices))),
        this.groups = a.groups;
        for (var c in a.morphTargets) {
            for (var b = [], d = a.morphTargets[c], e = 0, f = d.length; f > e; e++) {
                var g = d[e]
                  , h = new THREE.Float32Attribute(3 * g.length,3);
                b.push(h.copyVector3sArray(g))
            }
            this.morphAttributes[c] = b
        }
        return 0 < a.skinIndices.length && (c = new THREE.Float32Attribute(4 * a.skinIndices.length,4),
        this.addAttribute("skinIndex", c.copyVector4sArray(a.skinIndices))),
        0 < a.skinWeights.length && (c = new THREE.Float32Attribute(4 * a.skinWeights.length,4),
        this.addAttribute("skinWeight", c.copyVector4sArray(a.skinWeights))),
        null !== a.boundingSphere && (this.boundingSphere = a.boundingSphere.clone()),
        null !== a.boundingBox && (this.boundingBox = a.boundingBox.clone()),
        this
    },
    computeBoundingBox: function() {
        return new THREE.Vector3,
        function() {
            null === this.boundingBox && (this.boundingBox = new THREE.Box3);
            var a = this.attributes.position.array;
            a && this.boundingBox.setFromArray(a),
            (void 0 === a || 0 === a.length) && (this.boundingBox.min.set(0, 0, 0),
            this.boundingBox.max.set(0, 0, 0)),
            (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
        }
    }(),
    computeBoundingSphere: function() {
        var a = new THREE.Box3
          , b = new THREE.Vector3;
        return function() {
            null === this.boundingSphere && (this.boundingSphere = new THREE.Sphere);
            var c = this.attributes.position.array;
            if (c) {
                var d = this.boundingSphere.center;
                a.setFromArray(c),
                a.center(d);
                for (var e = 0, f = 0, g = c.length; g > f; f += 3)
                    b.fromArray(c, f),
                    e = Math.max(e, d.distanceToSquared(b));
                this.boundingSphere.radius = Math.sqrt(e),
                isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
            }
        }
    }(),
    computeFaceNormals: function() {},
    computeVertexNormals: function() {
        var a = this.index
          , b = this.attributes
          , c = this.groups;
        if (b.position) {
            var d = b.position.array;
            if (void 0 === b.normal)
                this.addAttribute("normal", new THREE.BufferAttribute(new Float32Array(d.length),3));
            else
                for (var e = b.normal.array, f = 0, g = e.length; g > f; f++)
                    e[f] = 0;
            var h, i, j, e = b.normal.array, k = new THREE.Vector3, l = new THREE.Vector3, m = new THREE.Vector3, n = new THREE.Vector3, o = new THREE.Vector3;
            if (a) {
                a = a.array,
                0 === c.length && this.addGroup(0, a.length);
                for (var p = 0, q = c.length; q > p; ++p)
                    for (f = c[p],
                    g = f.start,
                    h = f.count,
                    f = g,
                    g += h; g > f; f += 3)
                        h = 3 * a[f + 0],
                        i = 3 * a[f + 1],
                        j = 3 * a[f + 2],
                        k.fromArray(d, h),
                        l.fromArray(d, i),
                        m.fromArray(d, j),
                        n.subVectors(m, l),
                        o.subVectors(k, l),
                        n.cross(o),
                        e[h] += n.x,
                        e[h + 1] += n.y,
                        e[h + 2] += n.z,
                        e[i] += n.x,
                        e[i + 1] += n.y,
                        e[i + 2] += n.z,
                        e[j] += n.x,
                        e[j + 1] += n.y,
                        e[j + 2] += n.z
            } else
                for (f = 0,
                g = d.length; g > f; f += 9)
                    k.fromArray(d, f),
                    l.fromArray(d, f + 3),
                    m.fromArray(d, f + 6),
                    n.subVectors(m, l),
                    o.subVectors(k, l),
                    n.cross(o),
                    e[f] = n.x,
                    e[f + 1] = n.y,
                    e[f + 2] = n.z,
                    e[f + 3] = n.x,
                    e[f + 4] = n.y,
                    e[f + 5] = n.z,
                    e[f + 6] = n.x,
                    e[f + 7] = n.y,
                    e[f + 8] = n.z;
            this.normalizeNormals(),
            b.normal.needsUpdate = !0
        }
    },
    merge: function(a, b) {
        if (!1 != a instanceof THREE.BufferGeometry) {
            void 0 === b && (b = 0);
            var c, d = this.attributes;
            for (c in d)
                if (void 0 !== a.attributes[c])
                    for (var e = d[c].array, f = a.attributes[c], g = f.array, h = 0, f = f.itemSize * b; h < g.length; h++,
                    f++)
                        e[f] = g[h];
            return this
        }
        console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", a)
    },
    normalizeNormals: function() {
        for (var a, b, c, d = this.attributes.normal.array, e = 0, f = d.length; f > e; e += 3)
            a = d[e],
            b = d[e + 1],
            c = d[e + 2],
            a = 1 / Math.sqrt(a * a + b * b + c * c),
            d[e] *= a,
            d[e + 1] *= a,
            d[e + 2] *= a
    },
    toNonIndexed: function() {
        if (null === this.index)
            return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."),
            this;
        var a, b = new THREE.BufferGeometry, c = this.index.array, d = this.attributes;
        for (a in d) {
            for (var e = d[a], f = e.array, e = e.itemSize, g = new f.constructor(c.length * e), h = 0, i = 0, j = 0, k = c.length; k > j; j++)
                for (var h = c[j] * e, l = 0; e > l; l++)
                    g[i++] = f[h++];
            b.addAttribute(a, new THREE.BufferAttribute(g,e))
        }
        return b
    },
    toJSON: function() {
        var a = {
            metadata: {
                version: 4.4,
                type: "BufferGeometry",
                generator: "BufferGeometry.toJSON"
            }
        };
        if (a.uuid = this.uuid,
        a.type = this.type,
        "" !== this.name && (a.name = this.name),
        void 0 !== this.parameters) {
            var b, c = this.parameters;
            for (b in c)
                void 0 !== c[b] && (a[b] = c[b]);
            return a
        }
        a.data = {
            attributes: {}
        };
        var d = this.index;
        null !== d && (c = Array.prototype.slice.call(d.array),
        a.data.index = {
            type: d.array.constructor.name,
            array: c
        }),
        d = this.attributes;
        for (b in d) {
            var e = d[b]
              , c = Array.prototype.slice.call(e.array);
            a.data.attributes[b] = {
                itemSize: e.itemSize,
                type: e.array.constructor.name,
                array: c
            }
        }
        return b = this.groups,
        0 < b.length && (a.data.groups = JSON.parse(JSON.stringify(b))),
        b = this.boundingSphere,
        null !== b && (a.data.boundingSphere = {
            center: b.center.toArray(),
            radius: b.radius
        }),
        a
    },
    clone: function() {
        return (new THREE.BufferGeometry).copy(this)
    },
    copy: function(a) {
        var b = a.index;
        null !== b && this.setIndex(b.clone());
        var c, b = a.attributes;
        for (c in b)
            this.addAttribute(c, b[c].clone());
        for (a = a.groups,
        c = 0,
        b = a.length; b > c; c++) {
            var d = a[c];
            this.addGroup(d.start, d.count)
        }
        return this
    },
    dispose: function() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
},
THREE.EventDispatcher.prototype.apply(THREE.BufferGeometry.prototype),
THREE.BufferGeometry.MaxIndex = 65535,
THREE.InstancedBufferGeometry = function() {
    THREE.BufferGeometry.call(this),
    this.type = "InstancedBufferGeometry",
    this.maxInstancedCount = void 0
}
,
THREE.InstancedBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype),
THREE.InstancedBufferGeometry.prototype.constructor = THREE.InstancedBufferGeometry,
THREE.InstancedBufferGeometry.prototype.addGroup = function(a, b, c) {
    this.groups.push({
        start: a,
        count: b,
        instances: c
    })
}
,
THREE.InstancedBufferGeometry.prototype.copy = function(a) {
    var b = a.index;
    null !== b && this.setIndex(b.clone());
    var c, b = a.attributes;
    for (c in b)
        this.addAttribute(c, b[c].clone());
    for (a = a.groups,
    c = 0,
    b = a.length; b > c; c++) {
        var d = a[c];
        this.addGroup(d.start, d.count, d.instances)
    }
    return this
}
,
THREE.EventDispatcher.prototype.apply(THREE.InstancedBufferGeometry.prototype),
THREE.Uniform = function(a, b) {
    this.type = a,
    this.value = b,
    this.dynamic = !1
}
,
THREE.Uniform.prototype = {
    constructor: THREE.Uniform,
    onUpdate: function(a) {
        return this.dynamic = !0,
        this.onUpdateCallback = a,
        this
    }
},
THREE.AnimationClip = function(a, b, c) {
    this.name = a || THREE.Math.generateUUID(),
    this.tracks = c,
    this.duration = void 0 !== b ? b : -1,
    0 > this.duration && this.resetDuration(),
    this.trim(),
    this.optimize()
}
,
THREE.AnimationClip.prototype = {
    constructor: THREE.AnimationClip,
    resetDuration: function() {
        for (var a = 0, b = 0, c = this.tracks.length; b !== c; ++b)
            var d = this.tracks[b]
              , a = Math.max(a, d.times[d.times.length - 1]);
        this.duration = a
    },
    trim: function() {
        for (var a = 0; a < this.tracks.length; a++)
            this.tracks[a].trim(0, this.duration);
        return this
    },
    optimize: function() {
        for (var a = 0; a < this.tracks.length; a++)
            this.tracks[a].optimize();
        return this
    }
},
Object.assign(THREE.AnimationClip, {
    parse: function(a) {
        for (var b = [], c = a.tracks, d = 1 / (a.fps || 1), e = 0, f = c.length; e !== f; ++e)
            b.push(THREE.KeyframeTrack.parse(c[e]).scale(d));
        return new THREE.AnimationClip(a.name,a.duration,b)
    },
    toJSON: function(a) {
        var b = []
          , c = a.tracks;
        a = {
            name: a.name,
            duration: a.duration,
            tracks: b
        };
        for (var d = 0, e = c.length; d !== e; ++d)
            b.push(THREE.KeyframeTrack.toJSON(c[d]));
        return a
    },
    CreateFromMorphTargetSequence: function(a, b, c) {
        for (var d = b.length, e = [], f = 0; d > f; f++) {
            var g = []
              , h = [];
            g.push((f + d - 1) % d, f, (f + 1) % d),
            h.push(0, 1, 0);
            var i = THREE.AnimationUtils.getKeyframeOrder(g)
              , g = THREE.AnimationUtils.sortedArray(g, 1, i)
              , h = THREE.AnimationUtils.sortedArray(h, 1, i);
            0 === g[0] && (g.push(d),
            h.push(h[0])),
            e.push(new THREE.NumberKeyframeTrack(".morphTargetInfluences[" + b[f].name + "]",g,h).scale(1 / c))
        }
        return new THREE.AnimationClip(a,-1,e)
    },
    findByName: function(a, b) {
        for (var c = 0; c < a.length; c++)
            if (a[c].name === b)
                return a[c];
        return null
    },
    CreateClipsFromMorphTargetSequences: function(a, b) {
        for (var c = {}, d = /^([\w-]*?)([\d]+)$/, e = 0, f = a.length; f > e; e++) {
            var g = a[e]
              , h = g.name.match(d);
            if (h && 1 < h.length) {
                var i = h[1];
                (h = c[i]) || (c[i] = h = []),
                h.push(g)
            }
        }
        d = [];
        for (i in c)
            d.push(THREE.AnimationClip.CreateFromMorphTargetSequence(i, c[i], b));
        return d
    },
    parseAnimation: function(a, b, c) {
        if (!a)
            return console.error("  no animation in JSONLoader data"),
            null ;
        c = function(a, b, c, d, e) {
            if (0 !== c.length) {
                var f = []
                  , g = [];
                THREE.AnimationUtils.flattenJSON(c, f, g, d),
                0 !== f.length && e.push(new a(b,f,g))
            }
        }
        ;
        var d = []
          , e = a.name || "default"
          , f = a.length || -1
          , g = a.fps || 30;
        a = a.hierarchy || [];
        for (var h = 0; h < a.length; h++) {
            var i = a[h].keys;
            if (i && 0 != i.length)
                if (i[0].morphTargets) {
                    for (var f = {}, j = 0; j < i.length; j++)
                        if (i[j].morphTargets)
                            for (var k = 0; k < i[j].morphTargets.length; k++)
                                f[i[j].morphTargets[k]] = -1;
                    for (var l in f) {
                        for (var m = [], n = [], k = 0; k !== i[j].morphTargets.length; ++k) {
                            var o = i[j];
                            m.push(o.time),
                            n.push(o.morphTarget === l ? 1 : 0)
                        }
                        d.push(new THREE.NumberKeyframeTrack(".morphTargetInfluence[" + l + "]",m,n))
                    }
                    f = f.length * (g || 1)
                } else
                    j = ".bones[" + b[h].name + "]",
                    c(THREE.VectorKeyframeTrack, j + ".position", i, "pos", d),
                    c(THREE.QuaternionKeyframeTrack, j + ".quaternion", i, "rot", d),
                    c(THREE.VectorKeyframeTrack, j + ".scale", i, "scl", d)
        }
        return 0 === d.length ? null : new THREE.AnimationClip(e,f,d)
    }
}),
THREE.AnimationMixer = function(a) {
    this._root = a,
    this._initMemoryManager(),
    this.time = this._accuIndex = 0,
    this.timeScale = 1
}
,
THREE.AnimationMixer.prototype = {
    constructor: THREE.AnimationMixer,
    clipAction: function(a, b) {
        var c, d = (b || this._root).uuid, e = "string" == typeof a ? a : a.name, f = a !== e ? a : null , g = this._actionsByClip[e];
        if (void 0 !== g) {
            if (c = g.actionByRoot[d],
            void 0 !== c)
                return c;
            if (c = g.knownActions[0],
            f = c._clip,
            a !== e && a !== f)
                throw Error("Different clips with the same name detected!")
        }
        return null === f ? null : (g = new THREE.AnimationMixer._Action(this,f,b),
        this._bindAction(g, c),
        this._addInactiveAction(g, e, d),
        g)
    },
    existingAction: function(a, b) {
        var c = (b || this._root).uuid
          , d = this._actionsByClip["string" == typeof a ? a : a.name];
        return void 0 !== d ? d.actionByRoot[c] || null : null
    },
    stopAllAction: function() {
        for (var a = this._actions, b = this._nActiveActions, c = this._bindings, d = this._nActiveBindings, e = this._nActiveBindings = this._nActiveActions = 0; e !== b; ++e)
            a[e].reset();
        for (e = 0; e !== d; ++e)
            c[e].useCount = 0;
        return this
    },
    update: function(a) {
        a *= this.timeScale;
        for (var b = this._actions, c = this._nActiveActions, d = this.time += a, e = Math.sign(a), f = this._accuIndex ^= 1, g = 0; g !== c; ++g) {
            var h = b[g];
            h.enabled && h._update(d, a, e, f)
        }
        for (a = this._bindings,
        b = this._nActiveBindings,
        g = 0; g !== b; ++g)
            a[g].apply(f);
        return this
    },
    getRoot: function() {
        return this._root
    },
    uncacheClip: function(a) {
        var b = this._actions;
        a = a.name;
        var c = this._actionsByClip
          , d = c[a];
        if (void 0 !== d) {
            for (var d = d.knownActions, e = 0, f = d.length; e !== f; ++e) {
                var g = d[e];
                this._deactivateAction(g);
                var h = g._cacheIndex
                  , i = b[b.length - 1];
                g._cacheIndex = null ,
                g._byClipCacheIndex = null ,
                i._cacheIndex = h,
                b[h] = i,
                b.pop(),
                this._removeInactiveBindingsForAction(g)
            }
            delete c[a]
        }
    },
    uncacheRoot: function(a) {
        a = a.uuid;
        var b, c = this._actionsByClip;
        for (b in c) {
            var d = c[b].actionByRoot[a];
            void 0 !== d && (this._deactivateAction(d),
            this._removeInactiveAction(d))
        }
        if (b = this._bindingsByRootAndName[a],
        void 0 !== b)
            for (var e in b)
                a = b[e],
                a.restoreOriginalState(),
                this._removeInactiveBinding(a)
    },
    uncacheAction: function(a, b) {
        var c = this.existingAction(a, b);
        null !== c && (this._deactivateAction(c),
        this._removeInactiveAction(c))
    }
},
THREE.EventDispatcher.prototype.apply(THREE.AnimationMixer.prototype),
THREE.AnimationMixer._Action = function(a, b, c) {
    this._mixer = a,
    this._clip = b,
    this._localRoot = c || null ,
    a = b.tracks,
    b = a.length,
    c = Array(b);
    for (var d = {
        endingStart: THREE.ZeroCurvatureEnding,
        endingEnd: THREE.ZeroCurvatureEnding
    }, e = 0; e !== b; ++e) {
        var f = a[e].createInterpolant(null );
        c[e] = f,
        f.settings = d
    }
    this._interpolantSettings = d,
    this._interpolants = c,
    this._propertyBindings = Array(b),
    this._weightInterpolant = this._timeScaleInterpolant = this._byClipCacheIndex = this._cacheIndex = null ,
    this.loop = THREE.LoopRepeat,
    this._loopCount = -1,
    this._startTime = null ,
    this.time = 0,
    this._effectiveWeight = this.weight = this._effectiveTimeScale = this.timeScale = 1,
    this.repetitions = 1 / 0,
    this.paused = !1,
    this.enabled = !0,
    this.clampWhenFinished = !1,
    this.zeroSlopeAtEnd = this.zeroSlopeAtStart = !0
}
,
THREE.AnimationMixer._Action.prototype = {
    constructor: THREE.AnimationMixer._Action,
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
    startAt: function(a) {
        return this._startTime = a,
        this
    },
    setLoop: function(a, b) {
        return this.loop = a,
        this.repetitions = b,
        this
    },
    setEffectiveWeight: function(a) {
        return this.weight = a,
        this._effectiveWeight = this.enabled ? a : 0,
        this.stopFading()
    },
    getEffectiveWeight: function() {
        return this._effectiveWeight
    },
    fadeIn: function(a) {
        return this._scheduleFading(a, 0, 1)
    },
    fadeOut: function(a) {
        return this._scheduleFading(a, 1, 0)
    },
    crossFadeFrom: function(a, b, c) {
        if (a.fadeOut(b),
        this.fadeIn(b),
        c) {
            c = this._clip.duration;
            var d = a._clip.duration
              , e = c / d;
            a.warp(1, d / c, b),
            this.warp(e, 1, b)
        }
        return this
    },
    crossFadeTo: function(a, b, c) {
        return a.crossFadeFrom(this, b, c)
    },
    stopFading: function() {
        var a = this._weightInterpolant;
        return null !== a && (this._weightInterpolant = null ,
        this._mixer._takeBackControlInterpolant(a)),
        this
    },
    setEffectiveTimeScale: function(a) {
        return this.timeScale = a,
        this._effectiveTimeScale = this.paused ? 0 : a,
        this.stopWarping()
    },
    getEffectiveTimeScale: function() {
        return this._effectiveTimeScale
    },
    setDuration: function(a) {
        return this.timeScale = this._clip.duration / a,
        this.stopWarping()
    },
    syncWith: function(a) {
        return this.time = a.time,
        this.timeScale = a.timeScale,
        this.stopWarping()
    },
    halt: function(a) {
        return this.warp(this._currentTimeScale, 0, a)
    },
    warp: function(a, b, c) {
        var d = this._mixer
          , e = d.time
          , f = this._timeScaleInterpolant
          , g = this.timeScale;
        return null === f && (this._timeScaleInterpolant = f = d._lendControlInterpolant()),
        d = f.parameterPositions,
        f = f.sampleValues,
        d[0] = e,
        d[1] = e + c,
        f[0] = a / g,
        f[1] = b / g,
        this
    },
    stopWarping: function() {
        var a = this._timeScaleInterpolant;
        return null !== a && (this._timeScaleInterpolant = null ,
        this._mixer._takeBackControlInterpolant(a)),
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
    _update: function(a, b, c, d) {
        var e = this._startTime;
        if (null !== e) {
            if (b = (a - e) * c,
            0 > b || 0 === c)
                return;
            this._startTime = null ,
            b *= c
        }
        if (b *= this._updateTimeScale(a),
        c = this._updateTime(b),
        a = this._updateWeight(a),
        a > 0) {
            b = this._interpolants;
            for (var e = this._propertyBindings, f = 0, g = b.length; f !== g; ++f)
                b[f].evaluate(c),
                e[f].accumulate(d, a)
        }
    },
    _updateWeight: function(a) {
        var b = 0;
        if (this.enabled) {
            var b = this.weight
              , c = this._weightInterpolant;
            if (null !== c) {
                var d = c.evaluate(a)[0]
                  , b = b * d;
                a > c.parameterPositions[1] && (this.stopFading(),
                0 === d && (this.enabled = !1))
            }
        }
        return this._effectiveWeight = b
    },
    _updateTimeScale: function(a) {
        var b = 0;
        if (!this.paused) {
            var b = this.timeScale
              , c = this._timeScaleInterpolant;
            if (null !== c) {
                var d = c.evaluate(a)[0]
                  , b = b * d;
                a > c.parameterPositions[1] && (this.stopWarping(),
                0 === b ? this.pause = !0 : this.timeScale = b)
            }
        }
        return this._effectiveTimeScale = b
    },
    _updateTime: function(a) {
        var b = this.time + a;
        if (0 === a)
            return b;
        var c = this._clip.duration
          , d = this.loop
          , e = this._loopCount
          , f = !1;
        switch (d) {
        case THREE.LoopOnce:
            if (-1 === e && (this.loopCount = 0,
            this._setEndings(!0, !0, !1)),
            b >= c)
                b = c;
            else {
                if (!(0 > b))
                    break;
                b = 0
            }
            this.clampWhenFinished ? this.pause = !0 : this.enabled = !1,
            this._mixer.dispatchEvent({
                type: "finished",
                action: this,
                direction: 0 > a ? -1 : 1
            });
            break;
        case THREE.LoopPingPong:
            f = !0;
        case THREE.LoopRepeat:
            if (-1 === e && (a > 0 ? (e = 0,
            this._setEndings(!0, 0 === this.repetitions, f)) : this._setEndings(0 === this.repetitions, !0, f)),
            b >= c || 0 > b) {
                var g = Math.floor(b / c)
                  , b = b - c * g
                  , e = e + Math.abs(g)
                  , h = this.repetitions - e;
                if (0 > h) {
                    this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
                    b = a > 0 ? c : 0,
                    this._mixer.dispatchEvent({
                        type: "finished",
                        action: this,
                        direction: a > 0 ? 1 : -1
                    });
                    break
                }
                0 === h ? (a = 0 > a,
                this._setEndings(a, !a, f)) : this._setEndings(!1, !1, f),
                this._loopCount = e,
                this._mixer.dispatchEvent({
                    type: "loop",
                    action: this,
                    loopDelta: g
                })
            }
            if (d === THREE.LoopPingPong && 1 === (1 & e))
                return this.time = b,
                c - b
        }
        return this.time = b
    },
    _setEndings: function(a, b, c) {
        var d = this._interpolantSettings;
        c ? (d.endingStart = THREE.ZeroSlopeEnding,
        d.endingEnd = THREE.ZeroSlopeEnding) : (d.endingStart = a ? this.zeroSlopeAtStart ? THREE.ZeroSlopeEnding : THREE.ZeroCurvatureEnding : THREE.WrapAroundEnding,
        d.endingEnd = b ? this.zeroSlopeAtEnd ? THREE.ZeroSlopeEnding : THREE.ZeroCurvatureEnding : THREE.WrapAroundEnding)
    },
    _scheduleFading: function(a, b, c) {
        var d = this._mixer
          , e = d.time
          , f = this._weightInterpolant;
        return null === f && (this._weightInterpolant = f = d._lendControlInterpolant()),
        d = f.parameterPositions,
        f = f.sampleValues,
        d[0] = e,
        f[0] = b,
        d[1] = e + a,
        f[1] = c,
        this
    }
},
Object.assign(THREE.AnimationMixer.prototype, {
    _bindAction: function(a, b) {
        var c = a._localRoot || this._root
          , d = a._clip.tracks
          , e = d.length
          , f = a._propertyBindings
          , g = a._interpolants
          , h = c.uuid
          , i = this._bindingsByRootAndName
          , j = i[h];
        for (void 0 === j && (j = {},
        i[h] = j),
        i = 0; i !== e; ++i) {
            var k = d[i]
              , l = k.name
              , m = j[l];
            if (void 0 === m) {
                if (m = f[i],
                void 0 !== m) {
                    null === m._cacheIndex && (++m.referenceCount,
                    this._addInactiveBinding(m, h, l));
                    continue
                }
                m = new THREE.PropertyMixer(THREE.PropertyBinding.create(c, l, b && b._propertyBindings[i].binding.parsedPath),k.ValueTypeName,k.getValueSize()),
                ++m.referenceCount,
                this._addInactiveBinding(m, h, l)
            }
            f[i] = m,
            g[i].resultBuffer = m.buffer
        }
    },
    _activateAction: function(a) {
        if (!this._isActiveAction(a)) {
            if (null === a._cacheIndex) {
                var b = (a._localRoot || this._root).uuid
                  , c = a._clip.name
                  , d = this._actionsByClip[c];
                this._bindAction(a, d && d.knownActions[0]),
                this._addInactiveAction(a, c, b)
            }
            for (b = a._propertyBindings,
            c = 0,
            d = b.length; c !== d; ++c) {
                var e = b[c];
                0 === e.useCount++ && (this._lendBinding(e),
                e.saveOriginalState())
            }
            this._lendAction(a)
        }
    },
    _deactivateAction: function(a) {
        if (this._isActiveAction(a)) {
            for (var b = a._propertyBindings, c = 0, d = b.length; c !== d; ++c) {
                var e = b[c];
                0 === --e.useCount && (e.restoreOriginalState(),
                this._takeBackBinding(e))
            }
            this._takeBackAction(a)
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
        var a = this;
        this.stats = {
            actions: {
                get total() {
                    return a._actions.length
                },
                get inUse() {
                    return a._nActiveActions
                }
            },
            bindings: {
                get total() {
                    return a._bindings.length
                },
                get inUse() {
                    return a._nActiveBindings
                }
            },
            controlInterpolants: {
                get total() {
                    return a._controlInterpolants.length
                },
                get inUse() {
                    return a._nActiveControlInterpolants
                }
            }
        }
    },
    _isActiveAction: function(a) {
        return a = a._cacheIndex,
        null !== a && a < this._nActiveActions
    },
    _addInactiveAction: function(a, b, c) {
        var d = this._actions
          , e = this._actionsByClip
          , f = e[b];
        void 0 === f ? (f = {
            knownActions: [a],
            actionByRoot: {}
        },
        a._byClipCacheIndex = 0,
        e[b] = f) : (b = f.knownActions,
        a._byClipCacheIndex = b.length,
        b.push(a)),
        a._cacheIndex = d.length,
        d.push(a),
        f.actionByRoot[c] = a
    },
    _removeInactiveAction: function(a) {
        var b = this._actions
          , c = b[b.length - 1]
          , d = a._cacheIndex;
        c._cacheIndex = d,
        b[d] = c,
        b.pop(),
        a._cacheIndex = null ;
        var c = a._clip.name
          , d = this._actionsByClip
          , e = d[c]
          , f = e.knownActions
          , g = f[f.length - 1]
          , h = a._byClipCacheIndex;
        g._byClipCacheIndex = h,
        f[h] = g,
        f.pop(),
        a._byClipCacheIndex = null ,
        delete e.actionByRoot[(b._localRoot || this._root).uuid],
        0 === f.length && delete d[c],
        this._removeInactiveBindingsForAction(a)
    },
    _removeInactiveBindingsForAction: function(a) {
        a = a._propertyBindings;
        for (var b = 0, c = a.length; b !== c; ++b) {
            var d = a[b];
            0 === --d.referenceCount && this._removeInactiveBinding(d)
        }
    },
    _lendAction: function(a) {
        var b = this._actions
          , c = a._cacheIndex
          , d = this._nActiveActions++
          , e = b[d];
        a._cacheIndex = d,
        b[d] = a,
        e._cacheIndex = c,
        b[c] = e
    },
    _takeBackAction: function(a) {
        var b = this._actions
          , c = a._cacheIndex
          , d = --this._nActiveActions
          , e = b[d];
        a._cacheIndex = d,
        b[d] = a,
        e._cacheIndex = c,
        b[c] = e
    },
    _addInactiveBinding: function(a, b, c) {
        var d = this._bindingsByRootAndName
          , e = d[b]
          , f = this._bindings;
        void 0 === e && (e = {},
        d[b] = e),
        e[c] = a,
        a._cacheIndex = f.length,
        f.push(a)
    },
    _removeInactiveBinding: function(a) {
        var b = this._bindings
          , c = a.binding
          , d = c.rootNode.uuid
          , c = c.path
          , e = this._bindingsByRootAndName
          , f = e[d]
          , g = b[b.length - 1];
        a = a._cacheIndex,
        g._cacheIndex = a,
        b[a] = g,
        b.pop(),
        delete f[c];
        a: {
            for (var h in f)
                break a;
            delete e[d]
        }
    },
    _lendBinding: function(a) {
        var b = this._bindings
          , c = a._cacheIndex
          , d = this._nActiveBindings++
          , e = b[d];
        a._cacheIndex = d,
        b[d] = a,
        e._cacheIndex = c,
        b[c] = e
    },
    _takeBackBinding: function(a) {
        var b = this._bindings
          , c = a._cacheIndex
          , d = --this._nActiveBindings
          , e = b[d];
        a._cacheIndex = d,
        b[d] = a,
        e._cacheIndex = c,
        b[c] = e
    },
    _lendControlInterpolant: function() {
        var a = this._controlInterpolants
          , b = this._nActiveControlInterpolants++
          , c = a[b];
        return void 0 === c && (c = new THREE.LinearInterpolant(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),
        c.__cacheIndex = b,
        a[b] = c),
        c
    },
    _takeBackControlInterpolant: function(a) {
        var b = this._controlInterpolants
          , c = a.__cacheIndex
          , d = --this._nActiveControlInterpolants
          , e = b[d];
        a.__cacheIndex = d,
        b[d] = a,
        e.__cacheIndex = c,
        b[c] = e
    },
    _controlInterpolantsResultBuffer: new Float32Array(1)
}),
THREE.AnimationObjectGroup = function(a) {
    this.uuid = THREE.Math.generateUUID(),
    this._objects = Array.prototype.slice.call(arguments),
    this.nCachedObjects_ = 0;
    var b = {};
    this._indicesByUUID = b;
    for (var c = 0, d = arguments.length; c !== d; ++c)
        b[arguments[c].uuid] = c;
    this._paths = [],
    this._parsedPaths = [],
    this._bindings = [],
    this._bindingsIndicesByPath = {};
    var e = this;
    this.stats = {
        objects: {
            get total() {
                return e._objects.length
            },
            get inUse() {
                return this.total - e.nCachedObjects_
            }
        },
        get bindingsPerObject() {
            return e._bindings.length
        }
    }
}
,
THREE.AnimationObjectGroup.prototype = {
    constructor: THREE.AnimationObjectGroup,
    add: function(a) {
        for (var b = this._objects, c = b.length, d = this.nCachedObjects_, e = this._indicesByUUID, f = this._paths, g = this._parsedPaths, h = this._bindings, i = h.length, j = 0, k = arguments.length; j !== k; ++j) {
            var l = arguments[j]
              , m = l.uuid
              , n = e[m];
            if (void 0 === n) {
                n = c++,
                e[m] = n,
                b.push(l);
                for (var m = 0, o = i; m !== o; ++m)
                    h[m].push(new THREE.PropertyBinding(l,f[m],g[m]))
            } else if (d > n) {
                var p = b[n]
                  , q = --d
                  , o = b[q];
                for (e[o.uuid] = n,
                b[n] = o,
                e[m] = q,
                b[q] = l,
                m = 0,
                o = i; m !== o; ++m) {
                    var r = h[m]
                      , s = r[n];
                    r[n] = r[q],
                    void 0 === s && (s = new THREE.PropertyBinding(l,f[m],g[m])),
                    r[q] = s
                }
            } else
                b[n] !== p && console.error("Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes...")
        }
        this.nCachedObjects_ = d
    },
    remove: function(a) {
        for (var b = this._objects, c = this.nCachedObjects_, d = this._indicesByUUID, e = this._bindings, f = e.length, g = 0, h = arguments.length; g !== h; ++g) {
            var i = arguments[g]
              , j = i.uuid
              , k = d[j];
            if (void 0 !== k && k >= c) {
                var l = c++
                  , m = b[l];
                for (d[m.uuid] = k,
                b[k] = m,
                d[j] = l,
                b[l] = i,
                i = 0,
                j = f; i !== j; ++i) {
                    var m = e[i]
                      , n = m[k];
                    m[k] = m[l],
                    m[l] = n
                }
            }
        }
        this.nCachedObjects_ = c
    },
    uncache: function(a) {
        for (var b = this._objects, c = b.length, d = this.nCachedObjects_, e = this._indicesByUUID, f = this._bindings, g = f.length, h = 0, i = arguments.length; h !== i; ++h) {
            var j = arguments[h].uuid
              , k = e[j];
            if (void 0 !== k)
                if (delete e[j],
                d > k) {
                    var j = --d
                      , l = b[j]
                      , m = --c
                      , n = b[m];
                    for (e[l.uuid] = k,
                    b[k] = l,
                    e[n.uuid] = j,
                    b[j] = n,
                    b.pop(),
                    l = 0,
                    n = g; l !== n; ++l) {
                        var o = f[l]
                          , p = o[m];
                        o[k] = o[j],
                        o[j] = p,
                        o.pop()
                    }
                } else
                    for (m = --c,
                    n = b[m],
                    e[n.uuid] = k,
                    b[k] = n,
                    b.pop(),
                    l = 0,
                    n = g; l !== n; ++l)
                        o = f[l],
                        o[k] = o[m],
                        o.pop()
        }
        this.nCachedObjects_ = d
    },
    subscribe_: function(a, b) {
        var c = this._bindingsIndicesByPath
          , d = c[a]
          , e = this._bindings;
        if (void 0 !== d)
            return e[d];
        var f = this._paths
          , g = this._parsedPaths
          , h = this._objects
          , i = this.nCachedObjects_
          , j = Array(h.length)
          , d = e.length;
        for (c[a] = d,
        f.push(a),
        g.push(b),
        e.push(j),
        c = i,
        d = h.length; c !== d; ++c)
            j[c] = new THREE.PropertyBinding(h[c],a,b);
        return j
    },
    unsubscribe_: function(a) {
        var b = this._bindingsIndicesByPath
          , c = b[a];
        if (void 0 !== c) {
            var d = this._paths
              , e = this._parsedPaths
              , f = this._bindings
              , g = f.length - 1
              , h = f[g];
            b[a[g]] = c,
            f[c] = h,
            f.pop(),
            e[c] = e[g],
            e.pop(),
            d[c] = d[g],
            d.pop()
        }
    }
},
THREE.AnimationUtils = {
    arraySlice: function(a, b, c) {
        return THREE.AnimationUtils.isTypedArray(a) ? new a.constructor(a.subarray(b, c)) : a.slice(b, c)
    },
    convertArray: function(a, b, c) {
        return !a || !c && a.constructor === b ? a : "number" == typeof b.BYTES_PER_ELEMENT ? new b(a) : Array.prototype.slice.call(a)
    },
    isTypedArray: function(a) {
        return ArrayBuffer.isView(a) && !(a instanceof DataView)
    },
    getKeyframeOrder: function(a) {
        for (var b = a.length, c = Array(b), d = 0; d !== b; ++d)
            c[d] = d;
        return c.sort(function(b, c) {
            return a[b] - a[c]
        }),
        c
    },
    sortedArray: function(a, b, c) {
        for (var d = a.length, e = new a.constructor(d), f = 0, g = 0; g !== d; ++f)
            for (var h = c[f] * b, i = 0; i !== b; ++i)
                e[g++] = a[h + i];
        return e
    },
    flattenJSON: function(a, b, c, d) {
        for (var e = 1, f = a[0]; void 0 !== f && void 0 === f[d]; )
            f = a[e++];
        if (void 0 !== f) {
            var g = f[d];
            if (void 0 !== g)
                if (Array.isArray(g)) {
                    do
                        g = f[d],
                        void 0 !== g && (b.push(f.time),
                        c.push.apply(c, g)),
                        f = a[e++];
                    while (void 0 !== f)
                } else if (void 0 !== g.toArray) {
                    do
                        g = f[d],
                        void 0 !== g && (b.push(f.time),
                        g.toArray(c, c.length)),
                        f = a[e++];
                    while (void 0 !== f)
                } else
                    do
                        g = f[d],
                        void 0 !== g && (b.push(f.time),
                        c.push(g)),
                        f = a[e++];
                    while (void 0 !== f)
        }
    }
},
THREE.KeyframeTrack = function(a, b, c, d) {
    if (void 0 === a)
        throw Error("track name is undefined");
    if (void 0 === b || 0 === b.length)
        throw Error("no keyframes in track named " + a);
    this.name = a,
    this.times = THREE.AnimationUtils.convertArray(b, this.TimeBufferType),
    this.values = THREE.AnimationUtils.convertArray(c, this.ValueBufferType),
    this.setInterpolation(d || this.DefaultInterpolation),
    this.validate(),
    this.optimize()
}
,
THREE.KeyframeTrack.prototype = {
    constructor: THREE.KeyframeTrack,
    TimeBufferType: Float32Array,
    ValueBufferType: Float32Array,
    DefaultInterpolation: THREE.InterpolateLinear,
    InterpolantFactoryMethodDiscrete: function(a) {
        return new THREE.DiscreteInterpolant(this.times,this.values,this.getValueSize(),a)
    },
    InterpolantFactoryMethodLinear: function(a) {
        return new THREE.LinearInterpolant(this.times,this.values,this.getValueSize(),a)
    },
    InterpolantFactoryMethodSmooth: function(a) {
        return new THREE.CubicInterpolant(this.times,this.values,this.getValueSize(),a)
    },
    setInterpolation: function(a) {
        var b = void 0;
        switch (a) {
        case THREE.InterpolateDiscrete:
            b = this.InterpolantFactoryMethodDiscrete;
            break;
        case THREE.InterpolateLinear:
            b = this.InterpolantFactoryMethodLinear;
            break;
        case THREE.InterpolateSmooth:
            b = this.InterpolantFactoryMethodSmooth
        }
        if (void 0 === b) {
            if (b = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name,
            void 0 === this.createInterpolant) {
                if (a === this.DefaultInterpolation)
                    throw Error(b);
                this.setInterpolation(this.DefaultInterpolation)
            }
            console.warn(b)
        } else
            this.createInterpolant = b
    },
    getInterpolation: function() {
        switch (this.createInterpolant) {
        case this.InterpolantFactoryMethodDiscrete:
            return THREE.InterpolateDiscrete;
        case this.InterpolantFactoryMethodLinear:
            return THREE.InterpolateLinear;
        case this.InterpolantFactoryMethodSmooth:
            return THREE.InterpolateSmooth
        }
    },
    getValueSize: function() {
        return this.values.length / this.times.length
    },
    shift: function(a) {
        if (0 !== a)
            for (var b = this.times, c = 0, d = b.length; c !== d; ++c)
                b[c] += a;
        return this
    },
    scale: function(a) {
        if (1 !== a)
            for (var b = this.times, c = 0, d = b.length; c !== d; ++c)
                b[c] *= a;
        return this
    },
    trim: function(a, b) {
        for (var c = this.times, d = c.length, e = 0, f = d - 1; e !== d && c[e] < a; )
            ++e;
        for (; -1 !== f && c[f] > b; )
            --f;
        return ++f,
        (0 !== e || f !== d) && (e >= f && (f = Math.max(f, 1),
        e = f - 1),
        d = this.getValueSize(),
        this.times = THREE.AnimationUtils.arraySlice(c, e, f),
        this.values = THREE.AnimationUtils.arraySlice(this.values, e * d, f * d)),
        this
    },
    validate: function() {
        var a = !0
          , b = this.getValueSize();
        0 !== b - Math.floor(b) && (console.error("invalid value size in track", this),
        a = !1);
        var c = this.times
          , b = this.values
          , d = c.length;
        0 === d && (console.error("track is empty", this),
        a = !1);
        for (var e = null , f = 0; f !== d; f++) {
            var g = c[f];
            if ("number" == typeof g && isNaN(g)) {
                console.error("time is not a valid number", this, f, g),
                a = !1;
                break
            }
            if (null !== e && e > g) {
                console.error("out of order keys", this, f, g, e),
                a = !1;
                break
            }
            e = g
        }
        if (void 0 !== b && THREE.AnimationUtils.isTypedArray(b))
            for (f = 0,
            c = b.length; f !== c; ++f)
                if (d = b[f],
                isNaN(d)) {
                    console.error("value is not a valid number", this, f, d),
                    a = !1;
                    break
                }
        return a
    },
    optimize: function() {
        for (var a = this.times, b = this.values, c = this.getValueSize(), d = 1, e = 1, f = a.length - 1; f >= e; ++e) {
            var g = !1
              , h = a[e];
            if (h !== a[e + 1] && (1 !== e || h !== h[0]))
                for (var i = e * c, j = i - c, k = i + c, h = 0; h !== c; ++h) {
                    var l = b[i + h];
                    if (l !== b[j + h] || l !== b[k + h]) {
                        g = !0;
                        break
                    }
                }
            if (g) {
                if (e !== d)
                    for (a[d] = a[e],
                    g = e * c,
                    i = d * c,
                    h = 0; h !== c; ++h)
                        b[i + h] = b[g + h];
                ++d
            }
        }
        return d !== a.length && (this.times = THREE.AnimationUtils.arraySlice(a, 0, d),
        this.values = THREE.AnimationUtils.arraySlice(b, 0, d * c)),
        this
    }
},
Object.assign(THREE.KeyframeTrack, {
    parse: function(a) {
        if (void 0 === a.type)
            throw Error("track type undefined, can not parse");
        var b = THREE.KeyframeTrack._getTrackTypeForValueTypeName(a.type);
        if (void 0 === a.times) {
            console.warn("legacy JSON format detected, converting");
            var c = []
              , d = [];
            THREE.AnimationUtils.flattenJSON(a.keys, c, d, "value"),
            a.times = c,
            a.values = d
        }
        return void 0 !== b.parse ? b.parse(a) : new b(a.name,a.times,a.values,a.interpolation)
    },
    toJSON: function(a) {
        var b = a.constructor;
        if (void 0 !== b.toJSON)
            b = b.toJSON(a);
        else {
            var b = {
                name: a.name,
                times: THREE.AnimationUtils.convertArray(a.times, Array),
                values: THREE.AnimationUtils.convertArray(a.values, Array)
            }
              , c = a.getInterpolation();
            c !== a.DefaultInterpolation && (b.interpolation = c)
        }
        return b.type = a.ValueTypeName,
        b
    },
    _getTrackTypeForValueTypeName: function(a) {
        switch (a.toLowerCase()) {
        case "scalar":
        case "double":
        case "float":
        case "number":
        case "integer":
            return THREE.NumberKeyframeTrack;
        case "vector":
        case "vector2":
        case "vector3":
        case "vector4":
            return THREE.VectorKeyframeTrack;
        case "color":
            return THREE.ColorKeyframeTrack;
        case "quaternion":
            return THREE.QuaternionKeyframeTrack;
        case "bool":
        case "boolean":
            return THREE.BooleanKeyframeTrack;
        case "string":
            return THREE.StringKeyframeTrack
        }
        throw Error("Unsupported typeName: " + a)
    }
}),
THREE.PropertyBinding = function(a, b, c) {
    this.path = b,
    this.parsedPath = c || THREE.PropertyBinding.parseTrackName(b),
    this.node = THREE.PropertyBinding.findNode(a, this.parsedPath.nodeName) || a,
    this.rootNode = a
}
,
THREE.PropertyBinding.prototype = {
    constructor: THREE.PropertyBinding,
    getValue: function(a, b) {
        this.bind(),
        this.getValue(a, b)
    },
    setValue: function(a, b) {
        this.bind(),
        this.setValue(a, b)
    },
    bind: function() {
        var a = this.node
          , b = this.parsedPath
          , c = b.objectName
          , d = b.propertyName
          , e = b.propertyIndex;
        if (a || (this.node = a = THREE.PropertyBinding.findNode(this.rootNode, b.nodeName) || this.rootNode),
        this.getValue = this._getValue_unavailable,
        this.setValue = this._setValue_unavailable,
        a) {
            if (c) {
                var f = b.objectIndex;
                switch (c) {
                case "materials":
                    if (!a.material)
                        return void console.error("  can not bind to material as node does not have a material", this);
                    if (!a.material.materials)
                        return void console.error("  can not bind to material.materials as node.material does not have a materials array", this);
                    a = a.material.materials;
                    break;
                case "bones":
                    if (!a.skeleton)
                        return void console.error("  can not bind to bones as node does not have a skeleton", this);
                    for (a = a.skeleton.bones,
                    c = 0; c < a.length; c++)
                        if (a[c].name === f) {
                            f = c;
                            break
                        }
                    break;
                default:
                    if (void 0 === a[c])
                        return void console.error("  can not bind to objectName of node, undefined", this);
                    a = a[c]
                }
                if (void 0 !== f) {
                    if (void 0 === a[f])
                        return void console.error("  trying to bind to objectIndex of objectName, but is undefined:", this, a);
                    a = a[f]
                }
            }
            if (f = a[d]) {
                if (b = this.Versioning.None,
                void 0 !== a.needsUpdate ? (b = this.Versioning.NeedsUpdate,
                this.targetObject = a) : void 0 !== a.matrixWorldNeedsUpdate && (b = this.Versioning.MatrixWorldNeedsUpdate,
                this.targetObject = a),
                c = this.BindingType.Direct,
                void 0 !== e) {
                    if ("morphTargetInfluences" === d) {
                        if (!a.geometry)
                            return void console.error("  can not bind to morphTargetInfluences becasuse node does not have a geometry", this);
                        if (!a.geometry.morphTargets)
                            return void console.error("  can not bind to morphTargetInfluences becasuse node does not have a geometry.morphTargets", this);
                        for (c = 0; c < this.node.geometry.morphTargets.length; c++)
                            if (a.geometry.morphTargets[c].name === e) {
                                e = c;
                                break
                            }
                    }
                    c = this.BindingType.ArrayElement,
                    this.resolvedProperty = f,
                    this.propertyIndex = e
                } else
                    void 0 !== f.fromArray && void 0 !== f.toArray ? (c = this.BindingType.HasFromToArray,
                    this.resolvedProperty = f) : void 0 !== f.length ? (c = this.BindingType.EntireArray,
                    this.resolvedProperty = f) : this.propertyName = d;
                this.getValue = this.GetterByBindingType[c],
                this.setValue = this.SetterByBindingTypeAndVersioning[c][b]
            } else
                console.error("  trying to update property for track: " + b.nodeName + "." + d + " but it wasn't found.", a)
        } else
            console.error("  trying to update node for track: " + this.path + " but it wasn't found.")
    },
    unbind: function() {
        this.node = null ,
        this.getValue = this._getValue_unbound,
        this.setValue = this._setValue_unbound
    }
},
Object.assign(THREE.PropertyBinding.prototype, {
    _getValue_unavailable: function() {},
    _setValue_unavailable: function() {},
    _getValue_unbound: THREE.PropertyBinding.prototype.getValue,
    _setValue_unbound: THREE.PropertyBinding.prototype.setValue,
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
    GetterByBindingType: [function(a, b) {
        a[b] = this.node[this.propertyName]
    }
    , function(a, b) {
        for (var c = this.resolvedProperty, d = 0, e = c.length; d !== e; ++d)
            a[b++] = c[d]
    }
    , function(a, b) {
        a[b] = this.resolvedProperty[this.propertyIndex]
    }
    , function(a, b) {
        this.resolvedProperty.toArray(a, b)
    }
    ],
    SetterByBindingTypeAndVersioning: [[function(a, b) {
        this.node[this.propertyName] = a[b]
    }
    , function(a, b) {
        this.node[this.propertyName] = a[b],
        this.targetObject.needsUpdate = !0
    }
    , function(a, b) {
        this.node[this.propertyName] = a[b],
        this.targetObject.matrixWorldNeedsUpdate = !0
    }
    ], [function(a, b) {
        for (var c = this.resolvedProperty, d = 0, e = c.length; d !== e; ++d)
            c[d] = a[b++]
    }
    , function(a, b) {
        for (var c = this.resolvedProperty, d = 0, e = c.length; d !== e; ++d)
            c[d] = a[b++];
        this.targetObject.needsUpdate = !0
    }
    , function(a, b) {
        for (var c = this.resolvedProperty, d = 0, e = c.length; d !== e; ++d)
            c[d] = a[b++];
        this.targetObject.matrixWorldNeedsUpdate = !0
    }
    ], [function(a, b) {
        this.resolvedProperty[this.propertyIndex] = a[b]
    }
    , function(a, b) {
        this.resolvedProperty[this.propertyIndex] = a[b],
        this.targetObject.needsUpdate = !0
    }
    , function(a, b) {
        this.resolvedProperty[this.propertyIndex] = a[b],
        this.targetObject.matrixWorldNeedsUpdate = !0
    }
    ], [function(a, b) {
        this.resolvedProperty.fromArray(a, b)
    }
    , function(a, b) {
        this.resolvedProperty.fromArray(a, b),
        this.targetObject.needsUpdate = !0
    }
    , function(a, b) {
        this.resolvedProperty.fromArray(a, b),
        this.targetObject.matrixWorldNeedsUpdate = !0
    }
    ]]
}),
THREE.PropertyBinding.Composite = function(a, b, c) {
    c = c || THREE.PropertyBinding.parseTrackName(b),
    this._targetGroup = a,
    this._bindings = a.subscribe_(b, c)
}
,
THREE.PropertyBinding.Composite.prototype = {
    constructor: THREE.PropertyBinding.Composite,
    getValue: function(a, b) {
        this.bind();
        var c = this._bindings[this._targetGroup.nCachedObjects_];
        void 0 !== c && c.getValue(a, b)
    },
    setValue: function(a, b) {
        for (var c = this._bindings, d = this._targetGroup.nCachedObjects_, e = c.length; d !== e; ++d)
            c[d].setValue(a, b)
    },
    bind: function() {
        for (var a = this._bindings, b = this._targetGroup.nCachedObjects_, c = a.length; b !== c; ++b)
            a[b].bind()
    },
    unbind: function() {
        for (var a = this._bindings, b = this._targetGroup.nCachedObjects_, c = a.length; b !== c; ++b)
            a[b].unbind()
    }
},
THREE.PropertyBinding.create = function(a, b, c) {
    return a instanceof THREE.AnimationObjectGroup ? new THREE.PropertyBinding.Composite(a,b,c) : new THREE.PropertyBinding(a,b,c)
}
,
THREE.PropertyBinding.parseTrackName = function(a) {
    var b = /^(([\w]+\/)*)([\w-\d]+)?(\.([\w]+)(\[([\w\d\[\]\_.:\- ]+)\])?)?(\.([\w.]+)(\[([\w\d\[\]\_. ]+)\])?)$/
      , c = b.exec(a);
    if (!c)
        throw Error("cannot parse trackName at all: " + a);
    if (c.index === b.lastIndex && b.lastIndex++,
    b = {
        nodeName: c[3],
        objectName: c[5],
        objectIndex: c[7],
        propertyName: c[9],
        propertyIndex: c[11]
    },
    null === b.propertyName || 0 === b.propertyName.length)
        throw Error("can not parse propertyName from trackName: " + a);
    return b
}
,
THREE.PropertyBinding.findNode = function(a, b) {
    if (!b || "" === b || "root" === b || "." === b || -1 === b || b === a.name || b === a.uuid)
        return a;
    if (a.skeleton) {
        var c = function(a) {
            for (var c = 0; c < a.bones.length; c++) {
                var d = a.bones[c];
                if (d.name === b)
                    return d
            }
            return null
        }(a.skeleton);
        if (c)
            return c
    }
    if (a.children) {
        var d = function(a) {
            for (var c = 0; c < a.length; c++) {
                var e = a[c];
                if (e.name === b || e.uuid === b || (e = d(e.children)))
                    return e
            }
            return null
        }
        ;
        if (c = d(a.children))
            return c
    }
    return null
}
,
THREE.PropertyMixer = function(a, b, c) {
    switch (this.binding = a,
    this.valueSize = c,
    a = Float64Array,
    b) {
    case "quaternion":
        b = this._slerp;
        break;
    case "string":
    case "bool":
        a = Array,
        b = this._select;
        break;
    default:
        b = this._lerp
    }
    this.buffer = new a(4 * c),
    this._mixBufferRegion = b,
    this.referenceCount = this.useCount = this.cumulativeWeight = 0
}
,
THREE.PropertyMixer.prototype = {
    constructor: THREE.PropertyMixer,
    accumulate: function(a, b) {
        var c = this.buffer
          , d = this.valueSize
          , e = a * d + d
          , f = this.cumulativeWeight;
        if (0 === f) {
            for (f = 0; f !== d; ++f)
                c[e + f] = c[f];
            f = b
        } else
            f += b,
            this._mixBufferRegion(c, e, 0, b / f, d);
        this.cumulativeWeight = f
    },
    apply: function(a) {
        var b = this.valueSize
          , c = this.buffer;
        a = a * b + b;
        var d = this.cumulativeWeight
          , e = this.binding;
        this.cumulativeWeight = 0,
        1 > d && this._mixBufferRegion(c, a, 3 * b, 1 - d, b);
        for (var d = b, f = b + b; d !== f; ++d)
            if (c[d] !== c[d + b]) {
                e.setValue(c, a);
                break
            }
    },
    saveOriginalState: function() {
        var a = this.buffer
          , b = this.valueSize
          , c = 3 * b;
        this.binding.getValue(a, c);
        for (var d = b; d !== c; ++d)
            a[d] = a[c + d % b];
        this.cumulativeWeight = 0
    },
    restoreOriginalState: function() {
        this.binding.setValue(this.buffer, 3 * this.valueSize)
    },
    _select: function(a, b, c, d, e) {
        if (d >= .5)
            for (d = 0; d !== e; ++d)
                a[b + d] = a[c + d]
    },
    _slerp: function(a, b, c, d, e) {
        THREE.Quaternion.slerpFlat(a, b, a, b, a, c, d)
    },
    _lerp: function(a, b, c, d, e) {
        for (var f = 1 - d, g = 0; g !== e; ++g) {
            var h = b + g;
            a[h] = a[h] * f + a[c + g] * d
        }
    }
},
THREE.BooleanKeyframeTrack = function(a, b, c) {
    THREE.KeyframeTrack.call(this, a, b, c)
}
,
THREE.BooleanKeyframeTrack.prototype = Object.assign(Object.create(THREE.KeyframeTrack.prototype), {
    constructor: THREE.BooleanKeyframeTrack,
    ValueTypeName: "bool",
    ValueBufferType: Array,
    DefaultInterpolation: THREE.IntepolateDiscrete,
    InterpolantFactoryMethodLinear: void 0,
    InterpolantFactoryMethodSmooth: void 0
}),
THREE.NumberKeyframeTrack = function(a, b, c, d) {
    THREE.KeyframeTrack.call(this, a, b, c, d)
}
,
THREE.NumberKeyframeTrack.prototype = Object.assign(Object.create(THREE.KeyframeTrack.prototype), {
    constructor: THREE.NumberKeyframeTrack,
    ValueTypeName: "number"
}),
THREE.QuaternionKeyframeTrack = function(a, b, c, d) {
    THREE.KeyframeTrack.call(this, a, b, c, d)
}
,
THREE.QuaternionKeyframeTrack.prototype = Object.assign(Object.create(THREE.KeyframeTrack.prototype), {
    constructor: THREE.QuaternionKeyframeTrack,
    ValueTypeName: "quaternion",
    DefaultInterpolation: THREE.InterpolateLinear,
    InterpolantFactoryMethodLinear: function(a) {
        return new THREE.QuaternionLinearInterpolant(this.times,this.values,this.getValueSize(),a)
    },
    InterpolantFactoryMethodSmooth: void 0
}),
THREE.StringKeyframeTrack = function(a, b, c, d) {
    THREE.KeyframeTrack.call(this, a, b, c, d)
}
,
THREE.StringKeyframeTrack.prototype = Object.assign(Object.create(THREE.KeyframeTrack.prototype), {
    constructor: THREE.StringKeyframeTrack,
    ValueTypeName: "string",
    ValueBufferType: Array,
    DefaultInterpolation: THREE.IntepolateDiscrete,
    InterpolantFactoryMethodLinear: void 0,
    InterpolantFactoryMethodSmooth: void 0
}),
THREE.VectorKeyframeTrack = function(a, b, c, d) {
    THREE.KeyframeTrack.call(this, a, b, c, d)
}
,
THREE.VectorKeyframeTrack.prototype = Object.assign(Object.create(THREE.KeyframeTrack.prototype), {
    constructor: THREE.VectorKeyframeTrack,
    ValueTypeName: "vector"
}),
THREE.Audio = function(a) {
    THREE.Object3D.call(this),
    this.type = "Audio",
    this.context = a.context,
    this.source = this.context.createBufferSource(),
    this.source.onended = this.onEnded.bind(this),
    this.gain = this.context.createGain(),
    this.gain.connect(a.getInput()),
    this.autoplay = !1,
    this.startTime = 0,
    this.playbackRate = 1,
    this.isPlaying = !1,
    this.hasPlaybackControl = !0,
    this.sourceType = "empty",
    this.filter = null
}
,
THREE.Audio.prototype = Object.create(THREE.Object3D.prototype),
THREE.Audio.prototype.constructor = THREE.Audio,
THREE.Audio.prototype.getOutput = function() {
    return this.gain
}
,
THREE.Audio.prototype.load = function(a) {
    var b = new THREE.AudioBuffer(this.context);
    return b.load(a),
    this.setBuffer(b),
    this
}
,
THREE.Audio.prototype.setNodeSource = function(a) {
    return this.hasPlaybackControl = !1,
    this.sourceType = "audioNode",
    this.source = a,
    this.connect(),
    this
}
,
THREE.Audio.prototype.setBuffer = function(a) {
    var b = this;
    return a.onReady(function(a) {
        b.source.buffer = a,
        b.sourceType = "buffer",
        b.autoplay && b.play()
    }),
    this
}
,
THREE.Audio.prototype.play = function() {
    if (!0 === this.isPlaying)
        console.warn("THREE.Audio: Audio is already playing.");
    else if (!1 === this.hasPlaybackControl)
        console.warn("THREE.Audio: this Audio has no playback control.");
    else {
        var a = this.context.createBufferSource();
        a.buffer = this.source.buffer,
        a.loop = this.source.loop,
        a.onended = this.source.onended,
        a.start(0, this.startTime),
        a.playbackRate.value = this.playbackRate,
        this.isPlaying = !0,
        this.source = a,
        this.connect()
    }
}
,
THREE.Audio.prototype.pause = function() {
    !1 === this.hasPlaybackControl ? console.warn("THREE.Audio: this Audio has no playback control.") : (this.source.stop(),
    this.startTime = this.context.currentTime)
}
,
THREE.Audio.prototype.stop = function() {
    !1 === this.hasPlaybackControl ? console.warn("THREE.Audio: this Audio has no playback control.") : (this.source.stop(),
    this.startTime = 0)
}
,
THREE.Audio.prototype.connect = function() {
    null !== this.filter ? (this.source.connect(this.filter),
    this.filter.connect(this.getOutput())) : this.source.connect(this.getOutput())
}
,
THREE.Audio.prototype.disconnect = function() {
    null !== this.filter ? (this.source.disconnect(this.filter),
    this.filter.disconnect(this.getOutput())) : this.source.disconnect(this.getOutput())
}
,
THREE.Audio.prototype.getFilter = function() {
    return this.filter
}
,
THREE.Audio.prototype.setFilter = function(a) {
    void 0 === a && (a = null ),
    !0 === this.isPlaying ? (this.disconnect(),
    this.filter = a,
    this.connect()) : this.filter = a
}
,
THREE.Audio.prototype.setPlaybackRate = function(a) {
    !1 === this.hasPlaybackControl ? console.warn("THREE.Audio: this Audio has no playback control.") : (this.playbackRate = a,
    !0 === this.isPlaying && (this.source.playbackRate.value = this.playbackRate))
}
,
THREE.Audio.prototype.getPlaybackRate = function() {
    return this.playbackRate
}
,
THREE.Audio.prototype.onEnded = function() {
    this.isPlaying = !1
}
,
THREE.Audio.prototype.setLoop = function(a) {
    !1 === this.hasPlaybackControl ? console.warn("THREE.Audio: this Audio has no playback control.") : this.source.loop = a
}
,
THREE.Audio.prototype.getLoop = function() {
    return !1 === this.hasPlaybackControl ? (console.warn("THREE.Audio: this Audio has no playback control."),
    !1) : this.source.loop
}
,
THREE.Audio.prototype.setVolume = function(a) {
    this.gain.gain.value = a
}
,
THREE.Audio.prototype.getVolume = function() {
    return this.gain.gain.value
}
,
THREE.AudioAnalyser = function(a, b) {
    this.analyser = a.context.createAnalyser(),
    this.analyser.fftSize = void 0 !== b ? b : 2048,
    this.data = new Uint8Array(this.analyser.frequencyBinCount),
    a.getOutput().connect(this.analyser)
}
,
THREE.AudioAnalyser.prototype = {
    constructor: THREE.AudioAnalyser,
    getData: function() {
        return this.analyser.getByteFrequencyData(this.data),
        this.data
    }
},
THREE.AudioBuffer = function(a) {
    this.context = a,
    this.ready = !1,
    this.readyCallbacks = []
}
,
THREE.AudioBuffer.prototype.load = function(a) {
    var b = this
      , c = new XMLHttpRequest;
    return c.open("GET", a, !0),
    c.responseType = "arraybuffer",
    c.onload = function(a) {
        b.context.decodeAudioData(this.response, function(a) {
            for (b.buffer = a,
            b.ready = !0,
            a = 0; a < b.readyCallbacks.length; a++)
                b.readyCallbacks[a](b.buffer);
            b.readyCallbacks = []
        })
    }
    ,
    c.send(),
    this
}
,
THREE.AudioBuffer.prototype.onReady = function(a) {
    this.ready ? a(this.buffer) : this.readyCallbacks.push(a)
}
,
THREE.PositionalAudio = function(a) {
    THREE.Audio.call(this, a),
    this.panner = this.context.createPanner(),
    this.panner.connect(this.gain)
}
,
THREE.PositionalAudio.prototype = Object.create(THREE.Audio.prototype),
THREE.PositionalAudio.prototype.constructor = THREE.PositionalAudio,
THREE.PositionalAudio.prototype.getOutput = function() {
    return this.panner
}
,
THREE.PositionalAudio.prototype.setRefDistance = function(a) {
    this.panner.refDistance = a
}
,
THREE.PositionalAudio.prototype.getRefDistance = function() {
    return this.panner.refDistance
}
,
THREE.PositionalAudio.prototype.setRolloffFactor = function(a) {
    this.panner.rolloffFactor = a
}
,
THREE.PositionalAudio.prototype.getRolloffFactor = function() {
    return this.panner.rolloffFactor
}
,
THREE.PositionalAudio.prototype.setDistanceModel = function(a) {
    this.panner.distanceModel = a
}
,
THREE.PositionalAudio.prototype.getDistanceModel = function() {
    return this.panner.distanceModel
}
,
THREE.PositionalAudio.prototype.setMaxDistance = function(a) {
    this.panner.maxDistance = a
}
,
THREE.PositionalAudio.prototype.getMaxDistance = function() {
    return this.panner.maxDistance
}
,
THREE.PositionalAudio.prototype.updateMatrixWorld = function() {
    var a = new THREE.Vector3;
    return function(b) {
        THREE.Object3D.prototype.updateMatrixWorld.call(this, b),
        a.setFromMatrixPosition(this.matrixWorld),
        this.panner.setPosition(a.x, a.y, a.z)
    }
}(),
THREE.AudioListener = function() {
    THREE.Object3D.call(this),
    this.type = "AudioListener",
    this.context = new (window.AudioContext || window.webkitAudioContext),
    this.gain = this.context.createGain(),
    this.gain.connect(this.context.destination),
    this.filter = null
}
,
THREE.AudioListener.prototype = Object.create(THREE.Object3D.prototype),
THREE.AudioListener.prototype.constructor = THREE.AudioListener,
THREE.AudioListener.prototype.getInput = function() {
    return this.gain
}
,
THREE.AudioListener.prototype.removeFilter = function() {
    null !== this.filter && (this.gain.disconnect(this.filter),
    this.filter.disconnect(this.context.destination),
    this.gain.connect(this.context.destination),
    this.filter = null )
}
,
THREE.AudioListener.prototype.setFilter = function(a) {
    null !== this.filter ? (this.gain.disconnect(this.filter),
    this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination),
    this.filter = a,
    this.gain.connect(this.filter),
    this.filter.connect(this.context.destination)
}
,
THREE.AudioListener.prototype.getFilter = function() {
    return this.filter
}
,
THREE.AudioListener.prototype.setMasterVolume = function(a) {
    this.gain.gain.value = a
}
,
THREE.AudioListener.prototype.getMasterVolume = function() {
    return this.gain.gain.value
}
,
THREE.AudioListener.prototype.updateMatrixWorld = function() {
    var a = new THREE.Vector3
      , b = new THREE.Quaternion
      , c = new THREE.Vector3
      , d = new THREE.Vector3;
    return function(e) {
        THREE.Object3D.prototype.updateMatrixWorld.call(this, e),
        e = this.context.listener;
        var f = this.up;
        this.matrixWorld.decompose(a, b, c),
        d.set(0, 0, -1).applyQuaternion(b),
        e.setPosition(a.x, a.y, a.z),
        e.setOrientation(d.x, d.y, d.z, f.x, f.y, f.z)
    }
}(),
THREE.Camera = function() {
    THREE.Object3D.call(this),
    this.type = "Camera",
    this.matrixWorldInverse = new THREE.Matrix4,
    this.projectionMatrix = new THREE.Matrix4
}
,
THREE.Camera.prototype = Object.create(THREE.Object3D.prototype),
THREE.Camera.prototype.constructor = THREE.Camera,
THREE.Camera.prototype.getWorldDirection = function() {
    var a = new THREE.Quaternion;
    return function(b) {
        return b = b || new THREE.Vector3,
        this.getWorldQuaternion(a),
        b.set(0, 0, -1).applyQuaternion(a)
    }
}(),
THREE.Camera.prototype.lookAt = function() {
    var a = new THREE.Matrix4;
    return function(b) {
        a.lookAt(this.position, b, this.up),
        this.quaternion.setFromRotationMatrix(a)
    }
}(),
THREE.Camera.prototype.clone = function() {
    return (new this.constructor).copy(this)
}
,
THREE.Camera.prototype.copy = function(a) {
    return THREE.Object3D.prototype.copy.call(this, a),
    this.matrixWorldInverse.copy(a.matrixWorldInverse),
    this.projectionMatrix.copy(a.projectionMatrix),
    this
}
,
THREE.CubeCamera = function(a, b, c) {
    THREE.Object3D.call(this),
    this.type = "CubeCamera";
    var d = new THREE.PerspectiveCamera(90,1,a,b);
    d.up.set(0, -1, 0),
    d.lookAt(new THREE.Vector3(1,0,0)),
    this.add(d);
    var e = new THREE.PerspectiveCamera(90,1,a,b);
    e.up.set(0, -1, 0),
    e.lookAt(new THREE.Vector3(-1,0,0)),
    this.add(e);
    var f = new THREE.PerspectiveCamera(90,1,a,b);
    f.up.set(0, 0, 1),
    f.lookAt(new THREE.Vector3(0,1,0)),
    this.add(f);
    var g = new THREE.PerspectiveCamera(90,1,a,b);
    g.up.set(0, 0, -1),
    g.lookAt(new THREE.Vector3(0,-1,0)),
    this.add(g);
    var h = new THREE.PerspectiveCamera(90,1,a,b);
    h.up.set(0, -1, 0),
    h.lookAt(new THREE.Vector3(0,0,1)),
    this.add(h);
    var i = new THREE.PerspectiveCamera(90,1,a,b);
    i.up.set(0, -1, 0),
    i.lookAt(new THREE.Vector3(0,0,-1)),
    this.add(i),
    this.renderTarget = new THREE.WebGLRenderTargetCube(c,c,{
        format: THREE.RGBFormat,
        magFilter: THREE.LinearFilter,
        minFilter: THREE.LinearFilter
    }),
    this.updateCubeMap = function(a, b) {
        null === this.parent && this.updateMatrixWorld();
        var c = this.renderTarget
          , j = c.texture.generateMipmaps;
        c.texture.generateMipmaps = !1,
        c.activeCubeFace = 0,
        a.render(b, d, c),
        c.activeCubeFace = 1,
        a.render(b, e, c),
        c.activeCubeFace = 2,
        a.render(b, f, c),
        c.activeCubeFace = 3,
        a.render(b, g, c),
        c.activeCubeFace = 4,
        a.render(b, h, c),
        c.texture.generateMipmaps = j,
        c.activeCubeFace = 5,
        a.render(b, i, c),
        a.setRenderTarget(null )
    }
}
,
THREE.CubeCamera.prototype = Object.create(THREE.Object3D.prototype),
THREE.CubeCamera.prototype.constructor = THREE.CubeCamera,
THREE.OrthographicCamera = function(a, b, c, d, e, f) {
    THREE.Camera.call(this),
    this.type = "OrthographicCamera",
    this.zoom = 1,
    this.left = a,
    this.right = b,
    this.top = c,
    this.bottom = d,
    this.near = void 0 !== e ? e : .1,
    this.far = void 0 !== f ? f : 2e3,
    this.updateProjectionMatrix()
}
,
THREE.OrthographicCamera.prototype = Object.create(THREE.Camera.prototype),
THREE.OrthographicCamera.prototype.constructor = THREE.OrthographicCamera,
THREE.OrthographicCamera.prototype.updateProjectionMatrix = function() {
    var a = (this.right - this.left) / (2 * this.zoom)
      , b = (this.top - this.bottom) / (2 * this.zoom)
      , c = (this.right + this.left) / 2
      , d = (this.top + this.bottom) / 2;
    this.projectionMatrix.makeOrthographic(c - a, c + a, d + b, d - b, this.near, this.far)
}
,
THREE.OrthographicCamera.prototype.copy = function(a) {
    return THREE.Camera.prototype.copy.call(this, a),
    this.left = a.left,
    this.right = a.right,
    this.top = a.top,
    this.bottom = a.bottom,
    this.near = a.near,
    this.far = a.far,
    this.zoom = a.zoom,
    this
}
,
THREE.OrthographicCamera.prototype.toJSON = function(a) {
    return a = THREE.Object3D.prototype.toJSON.call(this, a),
    a.object.zoom = this.zoom,
    a.object.left = this.left,
    a.object.right = this.right,
    a.object.top = this.top,
    a.object.bottom = this.bottom,
    a.object.near = this.near,
    a.object.far = this.far,
    a
}
,
THREE.PerspectiveCamera = function(a, b, c, d) {
    THREE.Camera.call(this),
    this.type = "PerspectiveCamera",
    this.focalLength = 10,
    this.zoom = 1,
    this.fov = void 0 !== a ? a : 50,
    this.aspect = void 0 !== b ? b : 1,
    this.near = void 0 !== c ? c : .1,
    this.far = void 0 !== d ? d : 2e3,
    this.updateProjectionMatrix()
}
,
THREE.PerspectiveCamera.prototype = Object.create(THREE.Camera.prototype),
THREE.PerspectiveCamera.prototype.constructor = THREE.PerspectiveCamera,
THREE.PerspectiveCamera.prototype.setLens = function(a, b) {
    void 0 === b && (b = 24),
    this.fov = 2 * THREE.Math.radToDeg(Math.atan(b / (2 * a))),
    this.updateProjectionMatrix()
}
,
THREE.PerspectiveCamera.prototype.setViewOffset = function(a, b, c, d, e, f) {
    this.fullWidth = a,
    this.fullHeight = b,
    this.x = c,
    this.y = d,
    this.width = e,
    this.height = f,
    this.updateProjectionMatrix()
}
,
THREE.PerspectiveCamera.prototype.updateProjectionMatrix = function() {
    var a = THREE.Math.radToDeg(2 * Math.atan(Math.tan(.5 * THREE.Math.degToRad(this.fov)) / this.zoom));
    if (this.fullWidth) {
        var b = this.fullWidth / this.fullHeight
          , a = Math.tan(THREE.Math.degToRad(.5 * a)) * this.near
          , c = -a
          , d = b * c
          , b = Math.abs(b * a - d)
          , c = Math.abs(a - c);
        this.projectionMatrix.makeFrustum(d + this.x * b / this.fullWidth, d + (this.x + this.width) * b / this.fullWidth, a - (this.y + this.height) * c / this.fullHeight, a - this.y * c / this.fullHeight, this.near, this.far)
    } else
        this.projectionMatrix.makePerspective(a, this.aspect, this.near, this.far)
}
,
THREE.PerspectiveCamera.prototype.copy = function(a) {
    return THREE.Camera.prototype.copy.call(this, a),
    this.focalLength = a.focalLength,
    this.zoom = a.zoom,
    this.fov = a.fov,
    this.aspect = a.aspect,
    this.near = a.near,
    this.far = a.far,
    this
}
,
THREE.PerspectiveCamera.prototype.toJSON = function(a) {
    return a = THREE.Object3D.prototype.toJSON.call(this, a),
    a.object.focalLength = this.focalLength,
    a.object.zoom = this.zoom,
    a.object.fov = this.fov,
    a.object.aspect = this.aspect,
    a.object.near = this.near,
    a.object.far = this.far,
    a
}
,
THREE.StereoCamera = function() {
    this.type = "StereoCamera",
    this.aspect = 1,
    this.cameraL = new THREE.PerspectiveCamera,
    this.cameraL.layers.enable(1),
    this.cameraL.matrixAutoUpdate = !1,
    this.cameraR = new THREE.PerspectiveCamera,
    this.cameraR.layers.enable(2),
    this.cameraR.matrixAutoUpdate = !1
}
,
THREE.StereoCamera.prototype = {
    constructor: THREE.StereoCamera,
    update: function() {
        var a, b, c, d, e, f = new THREE.Matrix4, g = new THREE.Matrix4;
        return function(h) {
            if (a !== h.focalLength || b !== h.fov || c !== h.aspect * this.aspect || d !== h.near || e !== h.far) {
                a = h.focalLength,
                b = h.fov,
                c = h.aspect * this.aspect,
                d = h.near,
                e = h.far;
                var i, j, k = h.projectionMatrix.clone(), l = .032 * d / a, m = d * Math.tan(THREE.Math.degToRad(.5 * b));
                g.elements[12] = -.032,
                f.elements[12] = .032,
                i = -m * c + l,
                j = m * c + l,
                k.elements[0] = 2 * d / (j - i),
                k.elements[8] = (j + i) / (j - i),
                this.cameraL.projectionMatrix.copy(k),
                i = -m * c - l,
                j = m * c - l,
                k.elements[0] = 2 * d / (j - i),
                k.elements[8] = (j + i) / (j - i),
                this.cameraR.projectionMatrix.copy(k)
            }
            this.cameraL.matrixWorld.copy(h.matrixWorld).multiply(g),
            this.cameraR.matrixWorld.copy(h.matrixWorld).multiply(f)
        }
    }()
},
THREE.Light = function(a, b) {
    THREE.Object3D.call(this),
    this.type = "Light",
    this.color = new THREE.Color(a),
    this.intensity = void 0 !== b ? b : 1,
    this.receiveShadow = void 0
}
,
THREE.Light.prototype = Object.create(THREE.Object3D.prototype),
THREE.Light.prototype.constructor = THREE.Light,
THREE.Light.prototype.copy = function(a) {
    return THREE.Object3D.prototype.copy.call(this, a),
    this.color.copy(a.color),
    this.intensity = a.intensity,
    this
}
,
THREE.Light.prototype.toJSON = function(a) {
    return a = THREE.Object3D.prototype.toJSON.call(this, a),
    a.object.color = this.color.getHex(),
    a.object.intensity = this.intensity,
    void 0 !== this.groundColor && (a.object.groundColor = this.groundColor.getHex()),
    void 0 !== this.distance && (a.object.distance = this.distance),
    void 0 !== this.angle && (a.object.angle = this.angle),
    void 0 !== this.decay && (a.object.decay = this.decay),
    void 0 !== this.penumbra && (a.object.penumbra = this.penumbra),
    a
}
,
THREE.LightShadow = function(a) {
    this.camera = a,
    this.bias = 0,
    this.radius = 1,
    this.mapSize = new THREE.Vector2(512,512),
    this.map = null ,
    this.matrix = new THREE.Matrix4
}
,
THREE.LightShadow.prototype = {
    constructor: THREE.LightShadow,
    copy: function(a) {
        return this.camera = a.camera.clone(),
        this.bias = a.bias,
        this.radius = a.radius,
        this.mapSize.copy(a.mapSize),
        this
    },
    clone: function() {
        return (new this.constructor).copy(this)
    }
},
THREE.AmbientLight = function(a, b) {
    THREE.Light.call(this, a, b),
    this.type = "AmbientLight",
    this.castShadow = void 0
}
,
THREE.AmbientLight.prototype = Object.create(THREE.Light.prototype),
THREE.AmbientLight.prototype.constructor = THREE.AmbientLight,
THREE.DirectionalLight = function(a, b) {
    THREE.Light.call(this, a, b),
    this.type = "DirectionalLight",
    this.position.set(0, 1, 0),
    this.updateMatrix(),
    this.target = new THREE.Object3D,
    this.shadow = new THREE.LightShadow(new THREE.OrthographicCamera(-5,5,5,-5,.5,500))
}
,
THREE.DirectionalLight.prototype = Object.create(THREE.Light.prototype),
THREE.DirectionalLight.prototype.constructor = THREE.DirectionalLight,
THREE.DirectionalLight.prototype.copy = function(a) {
    return THREE.Light.prototype.copy.call(this, a),
    this.target = a.target.clone(),
    this.shadow = a.shadow.clone(),
    this
}
,
THREE.HemisphereLight = function(a, b, c) {
    THREE.Light.call(this, a, c),
    this.type = "HemisphereLight",
    this.castShadow = void 0,
    this.position.set(0, 1, 0),
    this.updateMatrix(),
    this.groundColor = new THREE.Color(b)
}
,
THREE.HemisphereLight.prototype = Object.create(THREE.Light.prototype),
THREE.HemisphereLight.prototype.constructor = THREE.HemisphereLight,
THREE.HemisphereLight.prototype.copy = function(a) {
    return THREE.Light.prototype.copy.call(this, a),
    this.groundColor.copy(a.groundColor),
    this
}
,
THREE.PointLight = function(a, b, c, d) {
    THREE.Light.call(this, a, b),
    this.type = "PointLight",
    this.distance = void 0 !== c ? c : 0,
    this.decay = void 0 !== d ? d : 1,
    this.shadow = new THREE.LightShadow(new THREE.PerspectiveCamera(90,1,.5,500))
}
,
THREE.PointLight.prototype = Object.create(THREE.Light.prototype),
THREE.PointLight.prototype.constructor = THREE.PointLight,
Object.defineProperty(THREE.PointLight.prototype, "power", {
    get: function() {
        return 4 * this.intensity * Math.PI
    },
    set: function(a) {
        this.intensity = a / (4 * Math.PI)
    }
}),
THREE.PointLight.prototype.copy = function(a) {
    return THREE.Light.prototype.copy.call(this, a),
    this.distance = a.distance,
    this.decay = a.decay,
    this.shadow = a.shadow.clone(),
    this
}
,
THREE.SpotLight = function(a, b, c, d, e, f) {
    THREE.Light.call(this, a, b),
    this.type = "SpotLight",
    this.position.set(0, 1, 0),
    this.updateMatrix(),
    this.target = new THREE.Object3D,
    this.distance = void 0 !== c ? c : 0,
    this.angle = void 0 !== d ? d : Math.PI / 3,
    this.penumbra = void 0 !== e ? e : 0,
    this.decay = void 0 !== f ? f : 1,
    this.shadow = new THREE.LightShadow(new THREE.PerspectiveCamera(50,1,.5,500))
}
,
THREE.SpotLight.prototype = Object.create(THREE.Light.prototype),
THREE.SpotLight.prototype.constructor = THREE.SpotLight,
Object.defineProperty(THREE.SpotLight.prototype, "power", {
    get: function() {
        return this.intensity * Math.PI
    },
    set: function(a) {
        this.intensity = a / Math.PI
    }
}),
THREE.SpotLight.prototype.copy = function(a) {
    return THREE.Light.prototype.copy.call(this, a),
    this.distance = a.distance,
    this.angle = a.angle,
    this.penumbra = a.penumbra,
    this.decay = a.decay,
    this.target = a.target.clone(),
    this.shadow = a.shadow.clone(),
    this
}
,
THREE.Cache = {
    enabled: !1,
    files: {},
    add: function(a, b) {
        !1 !== this.enabled && (this.files[a] = b)
    },
    get: function(a) {
        return !1 !== this.enabled ? this.files[a] : void 0
    },
    remove: function(a) {
        delete this.files[a]
    },
    clear: function() {
        this.files = {}
    }
},
THREE.Loader = function() {
    this.onLoadStart = function() {}
    ,
    this.onLoadProgress = function() {}
    ,
    this.onLoadComplete = function() {}
}
,
THREE.Loader.prototype = {
    constructor: THREE.Loader,
    crossOrigin: void 0,
    extractUrlBase: function(a) {
        return a = a.split("/"),
        1 === a.length ? "./" : (a.pop(),
        a.join("/") + "/")
    },
    initMaterials: function(a, b, c) {
        for (var d = [], e = 0; e < a.length; ++e)
            d[e] = this.createMaterial(a[e], b, c);
        return d
    },
    createMaterial: function() {
        var a, b, c;
        return function(d, e, f) {
            function g(a, c, d, g, h) {
                a = e + a;
                var j = THREE.Loader.Handlers.get(a);
                return null !== j ? a = j.load(a) : (b.setCrossOrigin(f),
                a = b.load(a)),
                void 0 !== c && (a.repeat.fromArray(c),
                1 !== c[0] && (a.wrapS = THREE.RepeatWrapping),
                1 !== c[1] && (a.wrapT = THREE.RepeatWrapping)),
                void 0 !== d && a.offset.fromArray(d),
                void 0 !== g && ("repeat" === g[0] && (a.wrapS = THREE.RepeatWrapping),
                "mirror" === g[0] && (a.wrapS = THREE.MirroredRepeatWrapping),
                "repeat" === g[1] && (a.wrapT = THREE.RepeatWrapping),
                "mirror" === g[1] && (a.wrapT = THREE.MirroredRepeatWrapping)),
                void 0 !== h && (a.anisotropy = h),
                c = THREE.Math.generateUUID(),
                i[c] = a,
                c
            }
            void 0 === a && (a = new THREE.Color),
            void 0 === b && (b = new THREE.TextureLoader),
            void 0 === c && (c = new THREE.MaterialLoader);
            var h, i = {}, j = {
                uuid: THREE.Math.generateUUID(),
                type: "MeshLambertMaterial"
            };
            for (h in d) {
                var k = d[h];
                switch (h) {
                case "DbgColor":
                case "DbgIndex":
                case "opticalDensity":
                case "illumination":
                    break;
                case "DbgName":
                    j.name = k;
                    break;
                case "blending":
                    j.blending = THREE[k];
                    break;
                case "colorAmbient":
                case "mapAmbient":
                    console.warn("THREE.Loader.createMaterial:", h, "is no longer supported.");
                    break;
                case "colorDiffuse":
                    j.color = a.fromArray(k).getHex();
                    break;
                case "colorSpecular":
                    j.specular = a.fromArray(k).getHex();
                    break;
                case "colorEmissive":
                    j.emissive = a.fromArray(k).getHex();
                    break;
                case "specularCoef":
                    j.shininess = k;
                    break;
                case "shading":
                    "basic" === k.toLowerCase() && (j.type = "MeshBasicMaterial"),
                    "phong" === k.toLowerCase() && (j.type = "MeshPhongMaterial");
                    break;
                case "mapDiffuse":
                    j.map = g(k, d.mapDiffuseRepeat, d.mapDiffuseOffset, d.mapDiffuseWrap, d.mapDiffuseAnisotropy);
                    break;
                case "mapDiffuseRepeat":
                case "mapDiffuseOffset":
                case "mapDiffuseWrap":
                case "mapDiffuseAnisotropy":
                    break;
                case "mapLight":
                    j.lightMap = g(k, d.mapLightRepeat, d.mapLightOffset, d.mapLightWrap, d.mapLightAnisotropy);
                    break;
                case "mapLightRepeat":
                case "mapLightOffset":
                case "mapLightWrap":
                case "mapLightAnisotropy":
                    break;
                case "mapAO":
                    j.aoMap = g(k, d.mapAORepeat, d.mapAOOffset, d.mapAOWrap, d.mapAOAnisotropy);
                    break;
                case "mapAORepeat":
                case "mapAOOffset":
                case "mapAOWrap":
                case "mapAOAnisotropy":
                    break;
                case "mapBump":
                    j.bumpMap = g(k, d.mapBumpRepeat, d.mapBumpOffset, d.mapBumpWrap, d.mapBumpAnisotropy);
                    break;
                case "mapBumpScale":
                    j.bumpScale = k;
                    break;
                case "mapBumpRepeat":
                case "mapBumpOffset":
                case "mapBumpWrap":
                case "mapBumpAnisotropy":
                    break;
                case "mapNormal":
                    j.normalMap = g(k, d.mapNormalRepeat, d.mapNormalOffset, d.mapNormalWrap, d.mapNormalAnisotropy);
                    break;
                case "mapNormalFactor":
                    j.normalScale = [k, k];
                    break;
                case "mapNormalRepeat":
                case "mapNormalOffset":
                case "mapNormalWrap":
                case "mapNormalAnisotropy":
                    break;
                case "mapSpecular":
                    j.specularMap = g(k, d.mapSpecularRepeat, d.mapSpecularOffset, d.mapSpecularWrap, d.mapSpecularAnisotropy);
                    break;
                case "mapSpecularRepeat":
                case "mapSpecularOffset":
                case "mapSpecularWrap":
                case "mapSpecularAnisotropy":
                    break;
                case "mapAlpha":
                    j.alphaMap = g(k, d.mapAlphaRepeat, d.mapAlphaOffset, d.mapAlphaWrap, d.mapAlphaAnisotropy);
                    break;
                case "mapAlphaRepeat":
                case "mapAlphaOffset":
                case "mapAlphaWrap":
                case "mapAlphaAnisotropy":
                    break;
                case "flipSided":
                    j.side = THREE.BackSide;
                    break;
                case "doubleSided":
                    j.side = THREE.DoubleSide;
                    break;
                case "transparency":
                    console.warn("THREE.Loader.createMaterial: transparency has been renamed to opacity"),
                    j.opacity = k;
                    break;
                case "depthTest":
                case "depthWrite":
                case "colorWrite":
                case "opacity":
                case "reflectivity":
                case "transparent":
                case "visible":
                case "wireframe":
                    j[h] = k;
                    break;
                case "vertexColors":
                    !0 === k && (j.vertexColors = THREE.VertexColors),
                    "face" === k && (j.vertexColors = THREE.FaceColors);
                    break;
                default:
                    console.error("THREE.Loader.createMaterial: Unsupported", h, k)
                }
            }
            return "MeshBasicMaterial" === j.type && delete j.emissive,
            "MeshPhongMaterial" !== j.type && delete j.specular,
            1 > j.opacity && (j.transparent = !0),
            c.setTextures(i),
            c.parse(j)
        }
    }()
},
THREE.Loader.Handlers = {
    handlers: [],
    add: function(a, b) {
        this.handlers.push(a, b)
    },
    get: function(a) {
        for (var b = this.handlers, c = 0, d = b.length; d > c; c += 2) {
            var e = b[c + 1];
            if (b[c].test(a))
                return e
        }
        return null
    }
},
THREE.XHRLoader = function(a) {
    this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager
}
,
THREE.XHRLoader.prototype = {
    constructor: THREE.XHRLoader,
    load: function(a, b, c, d) {
        void 0 !== this.path && (a = this.path + a);
        var e = this
          , f = THREE.Cache.get(a);
        if (void 0 !== f)
            return b && setTimeout(function() {
                b(f)
            }, 0),
            f;
        var g = new XMLHttpRequest;
        return g.overrideMimeType("text/plain"),
        g.open("GET", a, !0),
        g.addEventListener("load", function(c) {
            var f = c.target.response;
            THREE.Cache.add(a, f),
            200 === this.status ? (b && b(f),
            e.manager.itemEnd(a)) : 0 === this.status ? (console.warn("THREE.XHRLoader: HTTP Status 0 received."),
            b && b(f),
            e.manager.itemEnd(a)) : (d && d(c),
            e.manager.itemError(a))
        }, !1),
        void 0 !== c && g.addEventListener("progress", function(a) {
            c(a)
        }, !1),
        g.addEventListener("error", function(b) {
            d && d(b),
            e.manager.itemError(a)
        }, !1),
        void 0 !== this.responseType && (g.responseType = this.responseType),
        void 0 !== this.withCredentials && (g.withCredentials = this.withCredentials),
        g.send(null ),
        e.manager.itemStart(a),
        g
    },
    setPath: function(a) {
        this.path = a
    },
    setResponseType: function(a) {
        this.responseType = a
    },
    setWithCredentials: function(a) {
        this.withCredentials = a
    }
},
THREE.FontLoader = function(a) {
    this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager
}
,
THREE.FontLoader.prototype = {
    constructor: THREE.FontLoader,
    load: function(a, b, c, d) {
        new THREE.XHRLoader(this.manager).load(a, function(a) {
            b(new THREE.Font(JSON.parse(a.substring(65, a.length - 2))))
        }, c, d)
    }
},
THREE.ImageLoader = function(a) {
    this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager
}
,
THREE.ImageLoader.prototype = {
    constructor: THREE.ImageLoader,
    load: function(a, b, c, d) {
        void 0 !== this.path && (a = this.path + a);
        var e = this
          , f = THREE.Cache.get(a);
        if (void 0 !== f)
            return e.manager.itemStart(a),
            b ? setTimeout(function() {
                b(f),
                e.manager.itemEnd(a)
            }, 0) : e.manager.itemEnd(a),
            f;
        var g = document.createElement("img");
        return g.addEventListener("load", function(c) {
            THREE.Cache.add(a, this),
            b && b(this),
            e.manager.itemEnd(a)
        }, !1),
        void 0 !== c && g.addEventListener("progress", function(a) {
            c(a)
        }, !1),
        g.addEventListener("error", function(b) {
            d && d(b),
            e.manager.itemError(a)
        }, !1),
        void 0 !== this.crossOrigin && (g.crossOrigin = this.crossOrigin),
        e.manager.itemStart(a),
        g.src = a,
        g
    },
    setCrossOrigin: function(a) {
        this.crossOrigin = a
    },
    setPath: function(a) {
        this.path = a
    }
},
THREE.JSONLoader = function(a) {
    "boolean" == typeof a && (console.warn("THREE.JSONLoader: showStatus parameter has been removed from constructor."),
    a = void 0),
    this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager,
    this.withCredentials = !1
}
,
THREE.JSONLoader.prototype = {
    constructor: THREE.JSONLoader,
    get statusDomElement() {
        return void 0 === this._statusDomElement && (this._statusDomElement = document.createElement("div")),
        console.warn("THREE.JSONLoader: .statusDomElement has been removed."),
        this._statusDomElement
    },
    load: function(a, b, c, d) {
        var e = this
          , f = this.texturePath && "string" == typeof this.texturePath ? this.texturePath : THREE.Loader.prototype.extractUrlBase(a)
          , g = new THREE.XHRLoader(this.manager);
        g.setWithCredentials(this.withCredentials),
        g.load(a, function(c) {
            c = JSON.parse(c);
            var d = c.metadata;
            if (void 0 !== d && (d = d.type,
            void 0 !== d)) {
                if ("object" === d.toLowerCase())
                    return void console.error("THREE.JSONLoader: " + a + " should be loaded with THREE.ObjectLoader instead.");
                if ("scene" === d.toLowerCase())
                    return void console.error("THREE.JSONLoader: " + a + " should be loaded with THREE.SceneLoader instead.")
            }
            c = e.parse(c, f),
            b(c.geometry, c.materials)
        }, c, d)
    },
    setTexturePath: function(a) {
        this.texturePath = a
    },
    parse: function(a, b) {
        var c = new THREE.Geometry
          , d = void 0 !== a.scale ? 1 / a.scale : 1;
        return function(b) {
            var d, e, f, g, h, i, j, k, l, m, n, o, p, q = a.faces;
            i = a.vertices;
            var r = a.normals
              , s = a.colors
              , t = 0;
            if (void 0 !== a.uvs) {
                for (d = 0; d < a.uvs.length; d++)
                    a.uvs[d].length && t++;
                for (d = 0; t > d; d++)
                    c.faceVertexUvs[d] = []
            }
            for (g = 0,
            h = i.length; h > g; )
                d = new THREE.Vector3,
                d.x = i[g++] * b,
                d.y = i[g++] * b,
                d.z = i[g++] * b,
                c.vertices.push(d);
            for (g = 0,
            h = q.length; h > g; )
                if (b = q[g++],
                l = 1 & b,
                f = 2 & b,
                d = 8 & b,
                j = 16 & b,
                m = 32 & b,
                i = 64 & b,
                b &= 128,
                l) {
                    if (l = new THREE.Face3,
                    l.a = q[g],
                    l.b = q[g + 1],
                    l.c = q[g + 3],
                    n = new THREE.Face3,
                    n.a = q[g + 1],
                    n.b = q[g + 2],
                    n.c = q[g + 3],
                    g += 4,
                    f && (f = q[g++],
                    l.materialIndex = f,
                    n.materialIndex = f),
                    f = c.faces.length,
                    d)
                        for (d = 0; t > d; d++)
                            for (o = a.uvs[d],
                            c.faceVertexUvs[d][f] = [],
                            c.faceVertexUvs[d][f + 1] = [],
                            e = 0; 4 > e; e++)
                                k = q[g++],
                                p = o[2 * k],
                                k = o[2 * k + 1],
                                p = new THREE.Vector2(p,k),
                                2 !== e && c.faceVertexUvs[d][f].push(p),
                                0 !== e && c.faceVertexUvs[d][f + 1].push(p);
                    if (j && (j = 3 * q[g++],
                    l.normal.set(r[j++], r[j++], r[j]),
                    n.normal.copy(l.normal)),
                    m)
                        for (d = 0; 4 > d; d++)
                            j = 3 * q[g++],
                            m = new THREE.Vector3(r[j++],r[j++],r[j]),
                            2 !== d && l.vertexNormals.push(m),
                            0 !== d && n.vertexNormals.push(m);
                    if (i && (i = q[g++],
                    i = s[i],
                    l.color.setHex(i),
                    n.color.setHex(i)),
                    b)
                        for (d = 0; 4 > d; d++)
                            i = q[g++],
                            i = s[i],
                            2 !== d && l.vertexColors.push(new THREE.Color(i)),
                            0 !== d && n.vertexColors.push(new THREE.Color(i));
                    c.faces.push(l),
                    c.faces.push(n)
                } else {
                    if (l = new THREE.Face3,
                    l.a = q[g++],
                    l.b = q[g++],
                    l.c = q[g++],
                    f && (f = q[g++],
                    l.materialIndex = f),
                    f = c.faces.length,
                    d)
                        for (d = 0; t > d; d++)
                            for (o = a.uvs[d],
                            c.faceVertexUvs[d][f] = [],
                            e = 0; 3 > e; e++)
                                k = q[g++],
                                p = o[2 * k],
                                k = o[2 * k + 1],
                                p = new THREE.Vector2(p,k),
                                c.faceVertexUvs[d][f].push(p);
                    if (j && (j = 3 * q[g++],
                    l.normal.set(r[j++], r[j++], r[j])),
                    m)
                        for (d = 0; 3 > d; d++)
                            j = 3 * q[g++],
                            m = new THREE.Vector3(r[j++],r[j++],r[j]),
                            l.vertexNormals.push(m);
                    if (i && (i = q[g++],
                    l.color.setHex(s[i])),
                    b)
                        for (d = 0; 3 > d; d++)
                            i = q[g++],
                            l.vertexColors.push(new THREE.Color(s[i]));
                    c.faces.push(l)
                }
        }(d),
        function() {
            var b = void 0 !== a.influencesPerVertex ? a.influencesPerVertex : 2;
            if (a.skinWeights)
                for (var d = 0, e = a.skinWeights.length; e > d; d += b)
                    c.skinWeights.push(new THREE.Vector4(a.skinWeights[d],b > 1 ? a.skinWeights[d + 1] : 0,b > 2 ? a.skinWeights[d + 2] : 0,b > 3 ? a.skinWeights[d + 3] : 0));
            if (a.skinIndices)
                for (d = 0,
                e = a.skinIndices.length; e > d; d += b)
                    c.skinIndices.push(new THREE.Vector4(a.skinIndices[d],b > 1 ? a.skinIndices[d + 1] : 0,b > 2 ? a.skinIndices[d + 2] : 0,b > 3 ? a.skinIndices[d + 3] : 0));
            c.bones = a.bones,
            c.bones && 0 < c.bones.length && (c.skinWeights.length !== c.skinIndices.length || c.skinIndices.length !== c.vertices.length) && console.warn("When skinning, number of vertices (" + c.vertices.length + "), skinIndices (" + c.skinIndices.length + "), and skinWeights (" + c.skinWeights.length + ") should match.")
        }(),
        function(b) {
            if (void 0 !== a.morphTargets)
                for (var d = 0, e = a.morphTargets.length; e > d; d++) {
                    c.morphTargets[d] = {},
                    c.morphTargets[d].name = a.morphTargets[d].name,
                    c.morphTargets[d].vertices = [];
                    for (var f = c.morphTargets[d].vertices, g = a.morphTargets[d].vertices, h = 0, i = g.length; i > h; h += 3) {
                        var j = new THREE.Vector3;
                        j.x = g[h] * b,
                        j.y = g[h + 1] * b,
                        j.z = g[h + 2] * b,
                        f.push(j)
                    }
                }
            if (void 0 !== a.morphColors && 0 < a.morphColors.length)
                for (console.warn('THREE.JSONLoader: "morphColors" no longer supported. Using them as face colors.'),
                b = c.faces,
                f = a.morphColors[0].colors,
                d = 0,
                e = b.length; e > d; d++)
                    b[d].color.fromArray(f, 3 * d)
        }(d),
        function() {
            var b = []
              , d = [];
            void 0 !== a.animation && d.push(a.animation),
            void 0 !== a.animations && (a.animations.length ? d = d.concat(a.animations) : d.push(a.animations));
            for (var e = 0; e < d.length; e++) {
                var f = THREE.AnimationClip.parseAnimation(d[e], c.bones);
                f && b.push(f)
            }
            c.morphTargets && (d = THREE.AnimationClip.CreateClipsFromMorphTargetSequences(c.morphTargets, 10),
            b = b.concat(d)),
            0 < b.length && (c.animations = b)
        }(),
        c.computeFaceNormals(),
        c.computeBoundingSphere(),
        void 0 === a.materials || 0 === a.materials.length ? {
            geometry: c
        } : (d = THREE.Loader.prototype.initMaterials(a.materials, b, this.crossOrigin),
        {
            geometry: c,
            materials: d
        })
    }
},
THREE.LoadingManager = function(a, b, c) {
    var d = this
      , e = !1
      , f = 0
      , g = 0;
    this.onStart = void 0,
    this.onLoad = a,
    this.onProgress = b,
    this.onError = c,
    this.itemStart = function(a) {
        g++,
        !1 === e && void 0 !== d.onStart && d.onStart(a, f, g),
        e = !0
    }
    ,
    this.itemEnd = function(a) {
        f++,
        void 0 !== d.onProgress && d.onProgress(a, f, g),
        f === g && (e = !1,
        void 0 !== d.onLoad) && d.onLoad()
    }
    ,
    this.itemError = function(a) {
        void 0 !== d.onError && d.onError(a)
    }
}
,
THREE.DefaultLoadingManager = new THREE.LoadingManager,
THREE.BufferGeometryLoader = function(a) {
    this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager
}
,
THREE.BufferGeometryLoader.prototype = {
    constructor: THREE.BufferGeometryLoader,
    load: function(a, b, c, d) {
        var e = this;
        new THREE.XHRLoader(e.manager).load(a, function(a) {
            b(e.parse(JSON.parse(a)))
        }, c, d)
    },
    parse: function(a) {
        var b = new THREE.BufferGeometry
          , c = a.data.index
          , d = {
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
        void 0 !== c && (c = new d[c.type](c.array),
        b.setIndex(new THREE.BufferAttribute(c,1)));
        var e, f = a.data.attributes;
        for (e in f) {
            var g = f[e]
              , c = new d[g.type](g.array);
            b.addAttribute(e, new THREE.BufferAttribute(c,g.itemSize))
        }
        if (d = a.data.groups || a.data.drawcalls || a.data.offsets,
        void 0 !== d)
            for (e = 0,
            c = d.length; e !== c; ++e)
                f = d[e],
                b.addGroup(f.start, f.count, f.materialIndex);
        return a = a.data.boundingSphere,
        void 0 !== a && (d = new THREE.Vector3,
        void 0 !== a.center && d.fromArray(a.center),
        b.boundingSphere = new THREE.Sphere(d,a.radius)),
        b
    }
},
THREE.MaterialLoader = function(a) {
    this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager,
    this.textures = {}
}
,
THREE.MaterialLoader.prototype = {
    constructor: THREE.MaterialLoader,
    load: function(a, b, c, d) {
        var e = this;
        new THREE.XHRLoader(e.manager).load(a, function(a) {
            b(e.parse(JSON.parse(a)))
        }, c, d)
    },
    setTextures: function(a) {
        this.textures = a
    },
    getTexture: function(a) {
        var b = this.textures;
        return void 0 === b[a] && console.warn("THREE.MaterialLoader: Undefined texture", a),
        b[a]
    },
    parse: function(a) {
        var b = new THREE[a.type];
        if (void 0 !== a.uuid && (b.uuid = a.uuid),
        void 0 !== a.name && (b.name = a.name),
        void 0 !== a.color && b.color.setHex(a.color),
        void 0 !== a.roughness && (b.roughness = a.roughness),
        void 0 !== a.metalness && (b.metalness = a.metalness),
        void 0 !== a.emissive && b.emissive.setHex(a.emissive),
        void 0 !== a.specular && b.specular.setHex(a.specular),
        void 0 !== a.shininess && (b.shininess = a.shininess),
        void 0 !== a.uniforms && (b.uniforms = a.uniforms),
        void 0 !== a.vertexShader && (b.vertexShader = a.vertexShader),
        void 0 !== a.fragmentShader && (b.fragmentShader = a.fragmentShader),
        void 0 !== a.vertexColors && (b.vertexColors = a.vertexColors),
        void 0 !== a.shading && (b.shading = a.shading),
        void 0 !== a.blending && (b.blending = a.blending),
        void 0 !== a.side && (b.side = a.side),
        void 0 !== a.opacity && (b.opacity = a.opacity),
        void 0 !== a.transparent && (b.transparent = a.transparent),
        void 0 !== a.alphaTest && (b.alphaTest = a.alphaTest),
        void 0 !== a.depthTest && (b.depthTest = a.depthTest),
        void 0 !== a.depthWrite && (b.depthWrite = a.depthWrite),
        void 0 !== a.colorWrite && (b.colorWrite = a.colorWrite),
        void 0 !== a.wireframe && (b.wireframe = a.wireframe),
        void 0 !== a.wireframeLinewidth && (b.wireframeLinewidth = a.wireframeLinewidth),
        void 0 !== a.size && (b.size = a.size),
        void 0 !== a.sizeAttenuation && (b.sizeAttenuation = a.sizeAttenuation),
        void 0 !== a.map && (b.map = this.getTexture(a.map)),
        void 0 !== a.alphaMap && (b.alphaMap = this.getTexture(a.alphaMap),
        b.transparent = !0),
        void 0 !== a.bumpMap && (b.bumpMap = this.getTexture(a.bumpMap)),
        void 0 !== a.bumpScale && (b.bumpScale = a.bumpScale),
        void 0 !== a.normalMap && (b.normalMap = this.getTexture(a.normalMap)),
        void 0 !== a.normalScale) {
            var c = a.normalScale;
            !1 === Array.isArray(c) && (c = [c, c]),
            b.normalScale = (new THREE.Vector2).fromArray(c)
        }
        if (void 0 !== a.displacementMap && (b.displacementMap = this.getTexture(a.displacementMap)),
        void 0 !== a.displacementScale && (b.displacementScale = a.displacementScale),
        void 0 !== a.displacementBias && (b.displacementBias = a.displacementBias),
        void 0 !== a.roughnessMap && (b.roughnessMap = this.getTexture(a.roughnessMap)),
        void 0 !== a.metalnessMap && (b.metalnessMap = this.getTexture(a.metalnessMap)),
        void 0 !== a.emissiveMap && (b.emissiveMap = this.getTexture(a.emissiveMap)),
        void 0 !== a.emissiveIntensity && (b.emissiveIntensity = a.emissiveIntensity),
        void 0 !== a.specularMap && (b.specularMap = this.getTexture(a.specularMap)),
        void 0 !== a.envMap && (b.envMap = this.getTexture(a.envMap),
        b.combine = THREE.MultiplyOperation),
        a.reflectivity && (b.reflectivity = a.reflectivity),
        void 0 !== a.lightMap && (b.lightMap = this.getTexture(a.lightMap)),
        void 0 !== a.lightMapIntensity && (b.lightMapIntensity = a.lightMapIntensity),
        void 0 !== a.aoMap && (b.aoMap = this.getTexture(a.aoMap)),
        void 0 !== a.aoMapIntensity && (b.aoMapIntensity = a.aoMapIntensity),
        void 0 !== a.materials)
            for (var c = 0, d = a.materials.length; d > c; c++)
                b.materials.push(this.parse(a.materials[c]));
        return b
    }
},
THREE.ObjectLoader = function(a) {
    this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager,
    this.texturePath = ""
}
,
THREE.ObjectLoader.prototype = {
    constructor: THREE.ObjectLoader,
    load: function(a, b, c, d) {
        "" === this.texturePath && (this.texturePath = a.substring(0, a.lastIndexOf("/") + 1));
        var e = this;
        new THREE.XHRLoader(e.manager).load(a, function(a) {
            e.parse(JSON.parse(a), b)
        }, c, d)
    },
    setTexturePath: function(a) {
        this.texturePath = a
    },
    setCrossOrigin: function(a) {
        this.crossOrigin = a
    },
    parse: function(a, b) {
        var c = this.parseGeometries(a.geometries)
          , d = this.parseImages(a.images, function() {
            void 0 !== b && b(e)
        })
          , d = this.parseTextures(a.textures, d)
          , d = this.parseMaterials(a.materials, d)
          , e = this.parseObject(a.object, c, d);
        return a.animations && (e.animations = this.parseAnimations(a.animations)),
        void 0 !== a.images && 0 !== a.images.length || void 0 === b || b(e),
        e
    },
    parseGeometries: function(a) {
        var b = {};
        if (void 0 !== a)
            for (var c = new THREE.JSONLoader, d = new THREE.BufferGeometryLoader, e = 0, f = a.length; f > e; e++) {
                var g, h = a[e];
                switch (h.type) {
                case "PlaneGeometry":
                case "PlaneBufferGeometry":
                    g = new THREE[h.type](h.width,h.height,h.widthSegments,h.heightSegments);
                    break;
                case "BoxGeometry":
                case "BoxBufferGeometry":
                case "CubeGeometry":
                    g = new THREE[h.type](h.width,h.height,h.depth,h.widthSegments,h.heightSegments,h.depthSegments);
                    break;
                case "CircleGeometry":
                case "CircleBufferGeometry":
                    g = new THREE[h.type](h.radius,h.segments,h.thetaStart,h.thetaLength);
                    break;
                case "CylinderGeometry":
                case "CylinderBufferGeometry":
                    g = new THREE[h.type](h.radiusTop,h.radiusBottom,h.height,h.radialSegments,h.heightSegments,h.openEnded,h.thetaStart,h.thetaLength);
                    break;
                case "SphereGeometry":
                case "SphereBufferGeometry":
                    g = new THREE[h.type](h.radius,h.widthSegments,h.heightSegments,h.phiStart,h.phiLength,h.thetaStart,h.thetaLength);
                    break;
                case "DodecahedronGeometry":
                    g = new THREE.DodecahedronGeometry(h.radius,h.detail);
                    break;
                case "IcosahedronGeometry":
                    g = new THREE.IcosahedronGeometry(h.radius,h.detail);
                    break;
                case "OctahedronGeometry":
                    g = new THREE.OctahedronGeometry(h.radius,h.detail);
                    break;
                case "TetrahedronGeometry":
                    g = new THREE.TetrahedronGeometry(h.radius,h.detail);
                    break;
                case "RingGeometry":
                case "RingBufferGeometry":
                    g = new THREE[h.type](h.innerRadius,h.outerRadius,h.thetaSegments,h.phiSegments,h.thetaStart,h.thetaLength);
                    break;
                case "TorusGeometry":
                case "TorusBufferGeometry":
                    g = new THREE[h.type](h.radius,h.tube,h.radialSegments,h.tubularSegments,h.arc);
                    break;
                case "TorusKnotGeometry":
                case "TorusKnotBufferGeometry":
                    g = new THREE[h.type](h.radius,h.tube,h.tubularSegments,h.radialSegments,h.p,h.q);
                    break;
                case "LatheGeometry":
                    g = new THREE.LatheGeometry(h.points,h.segments,h.phiStart,h.phiLength);
                    break;
                case "BufferGeometry":
                    g = d.parse(h);
                    break;
                case "Geometry":
                    g = c.parse(h.data, this.texturePath).geometry;
                    break;
                default:
                    console.warn('THREE.ObjectLoader: Unsupported geometry type "' + h.type + '"');
                    continue
                }
                g.uuid = h.uuid,
                void 0 !== h.name && (g.name = h.name),
                b[h.uuid] = g
            }
        return b
    },
    parseMaterials: function(a, b) {
        var c = {};
        if (void 0 !== a) {
            var d = new THREE.MaterialLoader;
            d.setTextures(b);
            for (var e = 0, f = a.length; f > e; e++) {
                var g = d.parse(a[e]);
                c[g.uuid] = g
            }
        }
        return c
    },
    parseAnimations: function(a) {
        for (var b = [], c = 0; c < a.length; c++) {
            var d = THREE.AnimationClip.parse(a[c]);
            b.push(d)
        }
        return b
    },
    parseImages: function(a, b) {
        function c(a) {
            return d.manager.itemStart(a),
            g.load(a, function() {
                d.manager.itemEnd(a)
            })
        }
        var d = this
          , e = {};
        if (void 0 !== a && 0 < a.length) {
            var f = new THREE.LoadingManager(b)
              , g = new THREE.ImageLoader(f);
            g.setCrossOrigin(this.crossOrigin);
            for (var f = 0, h = a.length; h > f; f++) {
                var i = a[f]
                  , j = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(i.url) ? i.url : d.texturePath + i.url;
                e[i.uuid] = c(j)
            }
        }
        return e
    },
    parseTextures: function(a, b) {
        function c(a) {
            return "number" == typeof a ? a : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", a),
            THREE[a])
        }
        var d = {};
        if (void 0 !== a)
            for (var e = 0, f = a.length; f > e; e++) {
                var g = a[e];
                void 0 === g.image && console.warn('THREE.ObjectLoader: No "image" specified for', g.uuid),
                void 0 === b[g.image] && console.warn("THREE.ObjectLoader: Undefined image", g.image);
                var h = new THREE.Texture(b[g.image]);
                h.needsUpdate = !0,
                h.uuid = g.uuid,
                void 0 !== g.name && (h.name = g.name),
                void 0 !== g.mapping && (h.mapping = c(g.mapping)),
                void 0 !== g.offset && (h.offset = new THREE.Vector2(g.offset[0],g.offset[1])),
                void 0 !== g.repeat && (h.repeat = new THREE.Vector2(g.repeat[0],g.repeat[1])),
                void 0 !== g.minFilter && (h.minFilter = c(g.minFilter)),
                void 0 !== g.magFilter && (h.magFilter = c(g.magFilter)),
                void 0 !== g.anisotropy && (h.anisotropy = g.anisotropy),
                Array.isArray(g.wrap) && (h.wrapS = c(g.wrap[0]),
                h.wrapT = c(g.wrap[1])),
                d[g.uuid] = h
            }
        return d
    },
    parseObject: function() {
        var a = new THREE.Matrix4;
        return function(b, c, d) {
            function e(a) {
                return void 0 === c[a] && console.warn("THREE.ObjectLoader: Undefined geometry", a),
                c[a]
            }
            function f(a) {
                return void 0 !== a ? (void 0 === d[a] && console.warn("THREE.ObjectLoader: Undefined material", a),
                d[a]) : void 0
            }
            var g;
            switch (b.type) {
            case "Scene":
                g = new THREE.Scene;
                break;
            case "PerspectiveCamera":
                g = new THREE.PerspectiveCamera(b.fov,b.aspect,b.near,b.far);
                break;
            case "OrthographicCamera":
                g = new THREE.OrthographicCamera(b.left,b.right,b.top,b.bottom,b.near,b.far);
                break;
            case "AmbientLight":
                g = new THREE.AmbientLight(b.color,b.intensity);
                break;
            case "DirectionalLight":
                g = new THREE.DirectionalLight(b.color,b.intensity);
                break;
            case "PointLight":
                g = new THREE.PointLight(b.color,b.intensity,b.distance,b.decay);
                break;
            case "SpotLight":
                g = new THREE.SpotLight(b.color,b.intensity,b.distance,b.angle,b.penumbra,b.decay);
                break;
            case "HemisphereLight":
                g = new THREE.HemisphereLight(b.color,b.groundColor,b.intensity);
                break;
            case "Mesh":
                g = e(b.geometry);
                var h = f(b.material);
                g = g.bones && 0 < g.bones.length ? new THREE.SkinnedMesh(g,h) : new THREE.Mesh(g,h);
                break;
            case "LOD":
                g = new THREE.LOD;
                break;
            case "Line":
                g = new THREE.Line(e(b.geometry),f(b.material),b.mode);
                break;
            case "PointCloud":
            case "Points":
                g = new THREE.Points(e(b.geometry),f(b.material));
                break;
            case "Sprite":
                g = new THREE.Sprite(f(b.material));
                break;
            case "Group":
                g = new THREE.Group;
                break;
            default:
                g = new THREE.Object3D
            }
            if (g.uuid = b.uuid,
            void 0 !== b.name && (g.name = b.name),
            void 0 !== b.matrix ? (a.fromArray(b.matrix),
            a.decompose(g.position, g.quaternion, g.scale)) : (void 0 !== b.position && g.position.fromArray(b.position),
            void 0 !== b.rotation && g.rotation.fromArray(b.rotation),
            void 0 !== b.scale && g.scale.fromArray(b.scale)),
            void 0 !== b.castShadow && (g.castShadow = b.castShadow),
            void 0 !== b.receiveShadow && (g.receiveShadow = b.receiveShadow),
            void 0 !== b.visible && (g.visible = b.visible),
            void 0 !== b.userData && (g.userData = b.userData),
            void 0 !== b.children)
                for (var i in b.children)
                    g.add(this.parseObject(b.children[i], c, d));
            if ("LOD" === b.type)
                for (b = b.levels,
                h = 0; h < b.length; h++) {
                    var j = b[h];
                    i = g.getObjectByProperty("uuid", j.object),
                    void 0 !== i && g.addLevel(i, j.distance)
                }
            return g
        }
    }()
},
THREE.TextureLoader = function(a) {
    this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager
}
,
THREE.TextureLoader.prototype = {
    constructor: THREE.TextureLoader,
    load: function(a, b, c, d) {
        var e = new THREE.Texture
          , f = new THREE.ImageLoader(this.manager);
        return f.setCrossOrigin(this.crossOrigin),
        f.setPath(this.path),
        f.load(a, function(a) {
            e.image = a,
            e.needsUpdate = !0,
            void 0 !== b && b(e)
        }, c, d),
        e
    },
    setCrossOrigin: function(a) {
        this.crossOrigin = a
    },
    setPath: function(a) {
        this.path = a
    }
},
THREE.CubeTextureLoader = function(a) {
    this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager
}
,
THREE.CubeTextureLoader.prototype = {
    constructor: THREE.CubeTextureLoader,
    load: function(a, b, c, d) {
        function e(c) {
            g.load(a[c], function(a) {
                f.images[c] = a,
                h++,
                6 === h && (f.needsUpdate = !0,
                b && b(f))
            }, void 0, d)
        }
        var f = new THREE.CubeTexture
          , g = new THREE.ImageLoader(this.manager);
        g.setCrossOrigin(this.crossOrigin),
        g.setPath(this.path);
        var h = 0;
        for (c = 0; c < a.length; ++c)
            e(c);
        return f
    },
    setCrossOrigin: function(a) {
        this.crossOrigin = a
    },
    setPath: function(a) {
        this.path = a
    }
},
THREE.DataTextureLoader = THREE.BinaryTextureLoader = function(a) {
    this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager,
    this._parser = null
}
,
THREE.BinaryTextureLoader.prototype = {
    constructor: THREE.BinaryTextureLoader,
    load: function(a, b, c, d) {
        var e = this
          , f = new THREE.DataTexture
          , g = new THREE.XHRLoader(this.manager);
        return g.setResponseType("arraybuffer"),
        g.load(a, function(a) {
            (a = e._parser(a)) && (void 0 !== a.image ? f.image = a.image : void 0 !== a.data && (f.image.width = a.width,
            f.image.height = a.height,
            f.image.data = a.data),
            f.wrapS = void 0 !== a.wrapS ? a.wrapS : THREE.ClampToEdgeWrapping,
            f.wrapT = void 0 !== a.wrapT ? a.wrapT : THREE.ClampToEdgeWrapping,
            f.magFilter = void 0 !== a.magFilter ? a.magFilter : THREE.LinearFilter,
            f.minFilter = void 0 !== a.minFilter ? a.minFilter : THREE.LinearMipMapLinearFilter,
            f.anisotropy = void 0 !== a.anisotropy ? a.anisotropy : 1,
            void 0 !== a.format && (f.format = a.format),
            void 0 !== a.type && (f.type = a.type),
            void 0 !== a.mipmaps && (f.mipmaps = a.mipmaps),
            1 === a.mipmapCount && (f.minFilter = THREE.LinearFilter),
            f.needsUpdate = !0,
            b && b(f, a))
        }, c, d),
        f
    }
},
THREE.CompressedTextureLoader = function(a) {
    this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager,
    this._parser = null
}
,
THREE.CompressedTextureLoader.prototype = {
    constructor: THREE.CompressedTextureLoader,
    load: function(a, b, c, d) {
        function e(e) {
            i.load(a[e], function(a) {
                a = f._parser(a, !0),
                g[e] = {
                    width: a.width,
                    height: a.height,
                    format: a.format,
                    mipmaps: a.mipmaps
                },
                j += 1,
                6 === j && (1 === a.mipmapCount && (h.minFilter = THREE.LinearFilter),
                h.format = a.format,
                h.needsUpdate = !0,
                b && b(h))
            }, c, d)
        }
        var f = this
          , g = []
          , h = new THREE.CompressedTexture;
        h.image = g;
        var i = new THREE.XHRLoader(this.manager);
        if (i.setPath(this.path),
        i.setResponseType("arraybuffer"),
        Array.isArray(a))
            for (var j = 0, k = 0, l = a.length; l > k; ++k)
                e(k);
        else
            i.load(a, function(a) {
                if (a = f._parser(a, !0),
                a.isCubemap)
                    for (var c = a.mipmaps.length / a.mipmapCount, d = 0; c > d; d++) {
                        g[d] = {
                            mipmaps: []
                        };
                        for (var e = 0; e < a.mipmapCount; e++)
                            g[d].mipmaps.push(a.mipmaps[d * a.mipmapCount + e]),
                            g[d].format = a.format,
                            g[d].width = a.width,
                            g[d].height = a.height
                    }
                else
                    h.image.width = a.width,
                    h.image.height = a.height,
                    h.mipmaps = a.mipmaps;
                1 === a.mipmapCount && (h.minFilter = THREE.LinearFilter),
                h.format = a.format,
                h.needsUpdate = !0,
                b && b(h)
            }, c, d);
        return h
    },
    setPath: function(a) {
        this.path = a
    }
},
THREE.Material = function() {
    Object.defineProperty(this, "id", {
        value: THREE.MaterialIdCount++
    }),
    this.uuid = THREE.Math.generateUUID(),
    this.name = "",
    this.type = "Material",
    this.side = THREE.FrontSide,
    this.opacity = 1,
    this.transparent = !1,
    this.blending = THREE.NormalBlending,
    this.blendSrc = THREE.SrcAlphaFactor,
    this.blendDst = THREE.OneMinusSrcAlphaFactor,
    this.blendEquation = THREE.AddEquation,
    this.blendEquationAlpha = this.blendDstAlpha = this.blendSrcAlpha = null ,
    this.depthFunc = THREE.LessEqualDepth,
    this.colorWrite = this.depthWrite = this.depthTest = !0,
    this.precision = null ,
    this.polygonOffset = !1,
    this.alphaTest = this.polygonOffsetUnits = this.polygonOffsetFactor = 0,
    this.premultipliedAlpha = !1,
    this.overdraw = 0,
    this._needsUpdate = this.visible = !0
}
,
THREE.Material.prototype = {
    constructor: THREE.Material,
    get needsUpdate() {
        return this._needsUpdate
    },
    set needsUpdate(a) {
        !0 === a && this.update(),
        this._needsUpdate = a
    },
    setValues: function(a) {
        if (void 0 !== a)
            for (var b in a) {
                var c = a[b];
                if (void 0 === c)
                    console.warn("THREE.Material: '" + b + "' parameter is undefined.");
                else {
                    var d = this[b];
                    void 0 === d ? console.warn("THREE." + this.type + ": '" + b + "' is not a property of this material.") : d instanceof THREE.Color ? d.set(c) : d instanceof THREE.Vector3 && c instanceof THREE.Vector3 ? d.copy(c) : this[b] = "overdraw" === b ? Number(c) : c
                }
            }
    },
    toJSON: function(a) {
        function b(a) {
            var b, c = [];
            for (b in a) {
                var d = a[b];
                delete d.metadata,
                c.push(d)
            }
            return c
        }
        var c = void 0 === a;
        c && (a = {
            textures: {},
            images: {}
        });
        var d = {
            metadata: {
                version: 4.4,
                type: "Material",
                generator: "Material.toJSON"
            }
        };
        return d.uuid = this.uuid,
        d.type = this.type,
        "" !== this.name && (d.name = this.name),
        this.color instanceof THREE.Color && (d.color = this.color.getHex()),
        .5 !== this.roughness && (d.roughness = this.roughness),
        .5 !== this.metalness && (d.metalness = this.metalness),
        this.emissive instanceof THREE.Color && (d.emissive = this.emissive.getHex()),
        this.specular instanceof THREE.Color && (d.specular = this.specular.getHex()),
        void 0 !== this.shininess && (d.shininess = this.shininess),
        this.map instanceof THREE.Texture && (d.map = this.map.toJSON(a).uuid),
        this.alphaMap instanceof THREE.Texture && (d.alphaMap = this.alphaMap.toJSON(a).uuid),
        this.lightMap instanceof THREE.Texture && (d.lightMap = this.lightMap.toJSON(a).uuid),
        this.bumpMap instanceof THREE.Texture && (d.bumpMap = this.bumpMap.toJSON(a).uuid,
        d.bumpScale = this.bumpScale),
        this.normalMap instanceof THREE.Texture && (d.normalMap = this.normalMap.toJSON(a).uuid,
        d.normalScale = this.normalScale.toArray()),
        this.displacementMap instanceof THREE.Texture && (d.displacementMap = this.displacementMap.toJSON(a).uuid,
        d.displacementScale = this.displacementScale,
        d.displacementBias = this.displacementBias),
        this.roughnessMap instanceof THREE.Texture && (d.roughnessMap = this.roughnessMap.toJSON(a).uuid),
        this.metalnessMap instanceof THREE.Texture && (d.metalnessMap = this.metalnessMap.toJSON(a).uuid),
        this.emissiveMap instanceof THREE.Texture && (d.emissiveMap = this.emissiveMap.toJSON(a).uuid),
        this.specularMap instanceof THREE.Texture && (d.specularMap = this.specularMap.toJSON(a).uuid),
        this.envMap instanceof THREE.Texture && (d.envMap = this.envMap.toJSON(a).uuid,
        d.reflectivity = this.reflectivity),
        void 0 !== this.size && (d.size = this.size),
        void 0 !== this.sizeAttenuation && (d.sizeAttenuation = this.sizeAttenuation),
        void 0 !== this.vertexColors && this.vertexColors !== THREE.NoColors && (d.vertexColors = this.vertexColors),
        void 0 !== this.shading && this.shading !== THREE.SmoothShading && (d.shading = this.shading),
        void 0 !== this.blending && this.blending !== THREE.NormalBlending && (d.blending = this.blending),
        void 0 !== this.side && this.side !== THREE.FrontSide && (d.side = this.side),
        1 > this.opacity && (d.opacity = this.opacity),
        !0 === this.transparent && (d.transparent = this.transparent),
        0 < this.alphaTest && (d.alphaTest = this.alphaTest),
        !0 === this.premultipliedAlpha && (d.premultipliedAlpha = this.premultipliedAlpha),
        !0 === this.wireframe && (d.wireframe = this.wireframe),
        1 < this.wireframeLinewidth && (d.wireframeLinewidth = this.wireframeLinewidth),
        c && (c = b(a.textures),
        a = b(a.images),
        0 < c.length && (d.textures = c),
        0 < a.length && (d.images = a)),
        d
    },
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(a) {
        return this.name = a.name,
        this.side = a.side,
        this.opacity = a.opacity,
        this.transparent = a.transparent,
        this.blending = a.blending,
        this.blendSrc = a.blendSrc,
        this.blendDst = a.blendDst,
        this.blendEquation = a.blendEquation,
        this.blendSrcAlpha = a.blendSrcAlpha,
        this.blendDstAlpha = a.blendDstAlpha,
        this.blendEquationAlpha = a.blendEquationAlpha,
        this.depthFunc = a.depthFunc,
        this.depthTest = a.depthTest,
        this.depthWrite = a.depthWrite,
        this.colorWrite = a.colorWrite,
        this.precision = a.precision,
        this.polygonOffset = a.polygonOffset,
        this.polygonOffsetFactor = a.polygonOffsetFactor,
        this.polygonOffsetUnits = a.polygonOffsetUnits,
        this.alphaTest = a.alphaTest,
        this.premultipliedAlpha = a.premultipliedAlpha,
        this.overdraw = a.overdraw,
        this.visible = a.visible,
        this
    },
    update: function() {
        this.dispatchEvent({
            type: "update"
        })
    },
    dispose: function() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
},
THREE.EventDispatcher.prototype.apply(THREE.Material.prototype),
THREE.MaterialIdCount = 0,
THREE.LineBasicMaterial = function(a) {
    THREE.Material.call(this),
    this.type = "LineBasicMaterial",
    this.color = new THREE.Color(16777215),
    this.linewidth = 1,
    this.linejoin = this.linecap = "round",
    this.blending = THREE.NormalBlending,
    this.vertexColors = THREE.NoColors,
    this.fog = !0,
    this.setValues(a)
}
,
THREE.LineBasicMaterial.prototype = Object.create(THREE.Material.prototype),
THREE.LineBasicMaterial.prototype.constructor = THREE.LineBasicMaterial,
THREE.LineBasicMaterial.prototype.copy = function(a) {
    return THREE.Material.prototype.copy.call(this, a),
    this.color.copy(a.color),
    this.linewidth = a.linewidth,
    this.linecap = a.linecap,
    this.linejoin = a.linejoin,
    this.vertexColors = a.vertexColors,
    this.fog = a.fog,
    this
}
,
THREE.LineDashedMaterial = function(a) {
    THREE.Material.call(this),
    this.type = "LineDashedMaterial",
    this.color = new THREE.Color(16777215),
    this.scale = this.linewidth = 1,
    this.dashSize = 3,
    this.gapSize = 1,
    this.blending = THREE.NormalBlending,
    this.vertexColors = THREE.NoColors,
    this.fog = !0,
    this.setValues(a)
}
,
THREE.LineDashedMaterial.prototype = Object.create(THREE.Material.prototype),
THREE.LineDashedMaterial.prototype.constructor = THREE.LineDashedMaterial,
THREE.LineDashedMaterial.prototype.copy = function(a) {
    return THREE.Material.prototype.copy.call(this, a),
    this.color.copy(a.color),
    this.linewidth = a.linewidth,
    this.scale = a.scale,
    this.dashSize = a.dashSize,
    this.gapSize = a.gapSize,
    this.vertexColors = a.vertexColors,
    this.fog = a.fog,
    this
}
,
THREE.MeshBasicMaterial = function(a) {
    THREE.Material.call(this),
    this.type = "MeshBasicMaterial",
    this.color = new THREE.Color(16777215),
    this.aoMap = this.map = null ,
    this.aoMapIntensity = 1,
    this.envMap = this.alphaMap = this.specularMap = null ,
    this.combine = THREE.MultiplyOperation,
    this.reflectivity = 1,
    this.refractionRatio = .98,
    this.fog = !0,
    this.shading = THREE.SmoothShading,
    this.blending = THREE.NormalBlending,
    this.wireframe = !1,
    this.wireframeLinewidth = 1,
    this.wireframeLinejoin = this.wireframeLinecap = "round",
    this.vertexColors = THREE.NoColors,
    this.morphTargets = this.skinning = !1,
    this.setValues(a)
}
,
THREE.MeshBasicMaterial.prototype = Object.create(THREE.Material.prototype),
THREE.MeshBasicMaterial.prototype.constructor = THREE.MeshBasicMaterial,
THREE.MeshBasicMaterial.prototype.copy = function(a) {
    return THREE.Material.prototype.copy.call(this, a),
    this.color.copy(a.color),
    this.map = a.map,
    this.aoMap = a.aoMap,
    this.aoMapIntensity = a.aoMapIntensity,
    this.specularMap = a.specularMap,
    this.alphaMap = a.alphaMap,
    this.envMap = a.envMap,
    this.combine = a.combine,
    this.reflectivity = a.reflectivity,
    this.refractionRatio = a.refractionRatio,
    this.fog = a.fog,
    this.shading = a.shading,
    this.wireframe = a.wireframe,
    this.wireframeLinewidth = a.wireframeLinewidth,
    this.wireframeLinecap = a.wireframeLinecap,
    this.wireframeLinejoin = a.wireframeLinejoin,
    this.vertexColors = a.vertexColors,
    this.skinning = a.skinning,
    this.morphTargets = a.morphTargets,
    this
}
,
THREE.MeshLambertMaterial = function(a) {
    THREE.Material.call(this),
    this.type = "MeshLambertMaterial",
    this.color = new THREE.Color(16777215),
    this.lightMap = this.map = null ,
    this.lightMapIntensity = 1,
    this.aoMap = null ,
    this.aoMapIntensity = 1,
    this.emissive = new THREE.Color(0),
    this.emissiveIntensity = 1,
    this.envMap = this.alphaMap = this.specularMap = this.emissiveMap = null ,
    this.combine = THREE.MultiplyOperation,
    this.reflectivity = 1,
    this.refractionRatio = .98,
    this.fog = !0,
    this.blending = THREE.NormalBlending,
    this.wireframe = !1,
    this.wireframeLinewidth = 1,
    this.wireframeLinejoin = this.wireframeLinecap = "round",
    this.vertexColors = THREE.NoColors,
    this.morphNormals = this.morphTargets = this.skinning = !1,
    this.setValues(a)
}
,
THREE.MeshLambertMaterial.prototype = Object.create(THREE.Material.prototype),
THREE.MeshLambertMaterial.prototype.constructor = THREE.MeshLambertMaterial,
THREE.MeshLambertMaterial.prototype.copy = function(a) {
    return THREE.Material.prototype.copy.call(this, a),
    this.color.copy(a.color),
    this.map = a.map,
    this.lightMap = a.lightMap,
    this.lightMapIntensity = a.lightMapIntensity,
    this.aoMap = a.aoMap,
    this.aoMapIntensity = a.aoMapIntensity,
    this.emissive.copy(a.emissive),
    this.emissiveMap = a.emissiveMap,
    this.emissiveIntensity = a.emissiveIntensity,
    this.specularMap = a.specularMap,
    this.alphaMap = a.alphaMap,
    this.envMap = a.envMap,
    this.combine = a.combine,
    this.reflectivity = a.reflectivity,
    this.refractionRatio = a.refractionRatio,
    this.fog = a.fog,
    this.wireframe = a.wireframe,
    this.wireframeLinewidth = a.wireframeLinewidth,
    this.wireframeLinecap = a.wireframeLinecap,
    this.wireframeLinejoin = a.wireframeLinejoin,
    this.vertexColors = a.vertexColors,
    this.skinning = a.skinning,
    this.morphTargets = a.morphTargets,
    this.morphNormals = a.morphNormals,
    this
}
,
THREE.MeshPhongMaterial = function(a) {
    THREE.Material.call(this),
    this.type = "MeshPhongMaterial",
    this.color = new THREE.Color(16777215),
    this.specular = new THREE.Color(1118481),
    this.shininess = 30,
    this.lightMap = this.map = null ,
    this.lightMapIntensity = 1,
    this.aoMap = null ,
    this.aoMapIntensity = 1,
    this.emissive = new THREE.Color(0),
    this.emissiveIntensity = 1,
    this.bumpMap = this.emissiveMap = null ,
    this.bumpScale = 1,
    this.normalMap = null ,
    this.normalScale = new THREE.Vector2(1,1),
    this.displacementMap = null ,
    this.displacementScale = 1,
    this.displacementBias = 0,
    this.envMap = this.alphaMap = this.specularMap = null ,
    this.combine = THREE.MultiplyOperation,
    this.reflectivity = 1,
    this.refractionRatio = .98,
    this.fog = !0,
    this.shading = THREE.SmoothShading,
    this.blending = THREE.NormalBlending,
    this.wireframe = !1,
    this.wireframeLinewidth = 1,
    this.wireframeLinejoin = this.wireframeLinecap = "round",
    this.vertexColors = THREE.NoColors,
    this.morphNormals = this.morphTargets = this.skinning = !1,
    this.setValues(a)
}
,
THREE.MeshPhongMaterial.prototype = Object.create(THREE.Material.prototype),
THREE.MeshPhongMaterial.prototype.constructor = THREE.MeshPhongMaterial,
THREE.MeshPhongMaterial.prototype.copy = function(a) {
    return THREE.Material.prototype.copy.call(this, a),
    this.color.copy(a.color),
    this.specular.copy(a.specular),
    this.shininess = a.shininess,
    this.map = a.map,
    this.lightMap = a.lightMap,
    this.lightMapIntensity = a.lightMapIntensity,
    this.aoMap = a.aoMap,
    this.aoMapIntensity = a.aoMapIntensity,
    this.emissive.copy(a.emissive),
    this.emissiveMap = a.emissiveMap,
    this.emissiveIntensity = a.emissiveIntensity,
    this.bumpMap = a.bumpMap,
    this.bumpScale = a.bumpScale,
    this.normalMap = a.normalMap,
    this.normalScale.copy(a.normalScale),
    this.displacementMap = a.displacementMap,
    this.displacementScale = a.displacementScale,
    this.displacementBias = a.displacementBias,
    this.specularMap = a.specularMap,
    this.alphaMap = a.alphaMap,
    this.envMap = a.envMap,
    this.combine = a.combine,
    this.reflectivity = a.reflectivity,
    this.refractionRatio = a.refractionRatio,
    this.fog = a.fog,
    this.shading = a.shading,
    this.wireframe = a.wireframe,
    this.wireframeLinewidth = a.wireframeLinewidth,
    this.wireframeLinecap = a.wireframeLinecap,
    this.wireframeLinejoin = a.wireframeLinejoin,
    this.vertexColors = a.vertexColors,
    this.skinning = a.skinning,
    this.morphTargets = a.morphTargets,
    this.morphNormals = a.morphNormals,
    this
}
,
THREE.MeshStandardMaterial = function(a) {
    THREE.Material.call(this),
    this.type = "MeshStandardMaterial",
    this.color = new THREE.Color(16777215),
    this.metalness = this.roughness = .5,
    this.lightMap = this.map = null ,
    this.lightMapIntensity = 1,
    this.aoMap = null ,
    this.aoMapIntensity = 1,
    this.emissive = new THREE.Color(0),
    this.emissiveIntensity = 1,
    this.bumpMap = this.emissiveMap = null ,
    this.bumpScale = 1,
    this.normalMap = null ,
    this.normalScale = new THREE.Vector2(1,1),
    this.displacementMap = null ,
    this.displacementScale = 1,
    this.displacementBias = 0,
    this.envMap = this.alphaMap = this.metalnessMap = this.roughnessMap = null ,
    this.envMapIntensity = 1,
    this.refractionRatio = .98,
    this.fog = !0,
    this.shading = THREE.SmoothShading,
    this.blending = THREE.NormalBlending,
    this.wireframe = !1,
    this.wireframeLinewidth = 1,
    this.wireframeLinejoin = this.wireframeLinecap = "round",
    this.vertexColors = THREE.NoColors,
    this.morphNormals = this.morphTargets = this.skinning = !1,
    this.setValues(a)
}
,
THREE.MeshStandardMaterial.prototype = Object.create(THREE.Material.prototype),
THREE.MeshStandardMaterial.prototype.constructor = THREE.MeshStandardMaterial,
THREE.MeshStandardMaterial.prototype.copy = function(a) {
    return THREE.Material.prototype.copy.call(this, a),
    this.color.copy(a.color),
    this.roughness = a.roughness,
    this.metalness = a.metalness,
    this.map = a.map,
    this.lightMap = a.lightMap,
    this.lightMapIntensity = a.lightMapIntensity,
    this.aoMap = a.aoMap,
    this.aoMapIntensity = a.aoMapIntensity,
    this.emissive.copy(a.emissive),
    this.emissiveMap = a.emissiveMap,
    this.emissiveIntensity = a.emissiveIntensity,
    this.bumpMap = a.bumpMap,
    this.bumpScale = a.bumpScale,
    this.normalMap = a.normalMap,
    this.normalScale.copy(a.normalScale),
    this.displacementMap = a.displacementMap,
    this.displacementScale = a.displacementScale,
    this.displacementBias = a.displacementBias,
    this.roughnessMap = a.roughnessMap,
    this.metalnessMap = a.metalnessMap,
    this.alphaMap = a.alphaMap,
    this.envMap = a.envMap,
    this.envMapIntensity = a.envMapIntensity,
    this.refractionRatio = a.refractionRatio,
    this.fog = a.fog,
    this.shading = a.shading,
    this.wireframe = a.wireframe,
    this.wireframeLinewidth = a.wireframeLinewidth,
    this.wireframeLinecap = a.wireframeLinecap,
    this.wireframeLinejoin = a.wireframeLinejoin,
    this.vertexColors = a.vertexColors,
    this.skinning = a.skinning,
    this.morphTargets = a.morphTargets,
    this.morphNormals = a.morphNormals,
    this
}
,
THREE.MeshDepthMaterial = function(a) {
    THREE.Material.call(this),
    this.type = "MeshDepthMaterial",
    this.wireframe = this.morphTargets = !1,
    this.wireframeLinewidth = 1,
    this.setValues(a)
}
,
THREE.MeshDepthMaterial.prototype = Object.create(THREE.Material.prototype),
THREE.MeshDepthMaterial.prototype.constructor = THREE.MeshDepthMaterial,
THREE.MeshDepthMaterial.prototype.copy = function(a) {
    return THREE.Material.prototype.copy.call(this, a),
    this.wireframe = a.wireframe,
    this.wireframeLinewidth = a.wireframeLinewidth,
    this
}
,
THREE.MeshNormalMaterial = function(a) {
    THREE.Material.call(this, a),
    this.type = "MeshNormalMaterial",
    this.wireframe = !1,
    this.wireframeLinewidth = 1,
    this.morphTargets = !1,
    this.setValues(a)
}
,
THREE.MeshNormalMaterial.prototype = Object.create(THREE.Material.prototype),
THREE.MeshNormalMaterial.prototype.constructor = THREE.MeshNormalMaterial,
THREE.MeshNormalMaterial.prototype.copy = function(a) {
    return THREE.Material.prototype.copy.call(this, a),
    this.wireframe = a.wireframe,
    this.wireframeLinewidth = a.wireframeLinewidth,
    this
}
,
THREE.MultiMaterial = function(a) {
    this.uuid = THREE.Math.generateUUID(),
    this.type = "MultiMaterial",
    this.materials = a instanceof Array ? a : [],
    this.visible = !0
}
,
THREE.MultiMaterial.prototype = {
    constructor: THREE.MultiMaterial,
    toJSON: function(a) {
        for (var b = {
            metadata: {
                version: 4.2,
                type: "material",
                generator: "MaterialExporter"
            },
            uuid: this.uuid,
            type: this.type,
            materials: []
        }, c = this.materials, d = 0, e = c.length; e > d; d++) {
            var f = c[d].toJSON(a);
            delete f.metadata,
            b.materials.push(f)
        }
        return b.visible = this.visible,
        b
    },
    clone: function() {
        for (var a = new this.constructor, b = 0; b < this.materials.length; b++)
            a.materials.push(this.materials[b].clone());
        return a.visible = this.visible,
        a
    }
},
THREE.PointsMaterial = function(a) {
    THREE.Material.call(this),
    this.type = "PointsMaterial",
    this.color = new THREE.Color(16777215),
    this.map = null ,
    this.size = 1,
    this.sizeAttenuation = !0,
    this.blending = THREE.NormalBlending,
    this.vertexColors = THREE.NoColors,
    this.fog = !0,
    this.setValues(a)
}
,
THREE.PointsMaterial.prototype = Object.create(THREE.Material.prototype),
THREE.PointsMaterial.prototype.constructor = THREE.PointsMaterial,
THREE.PointsMaterial.prototype.copy = function(a) {
    return THREE.Material.prototype.copy.call(this, a),
    this.color.copy(a.color),
    this.map = a.map,
    this.size = a.size,
    this.sizeAttenuation = a.sizeAttenuation,
    this.vertexColors = a.vertexColors,
    this.fog = a.fog,
    this
}
,
THREE.ShaderMaterial = function(a) {
    THREE.Material.call(this),
    this.type = "ShaderMaterial",
    this.defines = {},
    this.uniforms = {},
    this.vertexShader = "void main() {\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
    this.fragmentShader = "void main() {\n	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}",
    this.shading = THREE.SmoothShading,
    this.linewidth = 1,
    this.wireframe = !1,
    this.wireframeLinewidth = 1,
    this.lights = this.fog = !1,
    this.vertexColors = THREE.NoColors,
    this.morphNormals = this.morphTargets = this.skinning = !1,
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
    void 0 !== a && (void 0 !== a.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),
    this.setValues(a))
}
,
THREE.ShaderMaterial.prototype = Object.create(THREE.Material.prototype),
THREE.ShaderMaterial.prototype.constructor = THREE.ShaderMaterial,
THREE.ShaderMaterial.prototype.copy = function(a) {
    return THREE.Material.prototype.copy.call(this, a),
    this.fragmentShader = a.fragmentShader,
    this.vertexShader = a.vertexShader,
    this.uniforms = THREE.UniformsUtils.clone(a.uniforms),
    this.defines = a.defines,
    this.shading = a.shading,
    this.wireframe = a.wireframe,
    this.wireframeLinewidth = a.wireframeLinewidth,
    this.fog = a.fog,
    this.lights = a.lights,
    this.vertexColors = a.vertexColors,
    this.skinning = a.skinning,
    this.morphTargets = a.morphTargets,
    this.morphNormals = a.morphNormals,
    this.extensions = a.extensions,
    this
}
,
THREE.ShaderMaterial.prototype.toJSON = function(a) {
    return a = THREE.Material.prototype.toJSON.call(this, a),
    a.uniforms = this.uniforms,
    a.vertexShader = this.vertexShader,
    a.fragmentShader = this.fragmentShader,
    a
}
,
THREE.RawShaderMaterial = function(a) {
    THREE.ShaderMaterial.call(this, a),
    this.type = "RawShaderMaterial"
}
,
THREE.RawShaderMaterial.prototype = Object.create(THREE.ShaderMaterial.prototype),
THREE.RawShaderMaterial.prototype.constructor = THREE.RawShaderMaterial,
THREE.SpriteMaterial = function(a) {
    THREE.Material.call(this),
    this.type = "SpriteMaterial",
    this.color = new THREE.Color(16777215),
    this.map = null ,
    this.rotation = 0,
    this.fog = !1,
    this.setValues(a)
}
,
THREE.SpriteMaterial.prototype = Object.create(THREE.Material.prototype),
THREE.SpriteMaterial.prototype.constructor = THREE.SpriteMaterial,
THREE.SpriteMaterial.prototype.copy = function(a) {
    return THREE.Material.prototype.copy.call(this, a),
    this.color.copy(a.color),
    this.map = a.map,
    this.rotation = a.rotation,
    this.fog = a.fog,
    this
}
,
THREE.Texture = function(a, b, c, d, e, f, g, h, i) {
    Object.defineProperty(this, "id", {
        value: THREE.TextureIdCount++
    }),
    this.uuid = THREE.Math.generateUUID(),
    this.sourceFile = this.name = "",
    this.image = void 0 !== a ? a : THREE.Texture.DEFAULT_IMAGE,
    this.mipmaps = [],
    this.mapping = void 0 !== b ? b : THREE.Texture.DEFAULT_MAPPING,
    this.wrapS = void 0 !== c ? c : THREE.ClampToEdgeWrapping,
    this.wrapT = void 0 !== d ? d : THREE.ClampToEdgeWrapping,
    this.magFilter = void 0 !== e ? e : THREE.LinearFilter,
    this.minFilter = void 0 !== f ? f : THREE.LinearMipMapLinearFilter,
    this.anisotropy = void 0 !== i ? i : 1,
    this.format = void 0 !== g ? g : THREE.RGBAFormat,
    this.type = void 0 !== h ? h : THREE.UnsignedByteType,
    this.offset = new THREE.Vector2(0,0),
    this.repeat = new THREE.Vector2(1,1),
    this.generateMipmaps = !0,
    this.premultiplyAlpha = !1,
    this.flipY = !0,
    this.unpackAlignment = 4,
    this.encoding = THREE.LinearEncoding,
    this.version = 0,
    this.onUpdate = null
}
,
THREE.Texture.DEFAULT_IMAGE = void 0,
THREE.Texture.DEFAULT_MAPPING = THREE.UVMapping,
THREE.Texture.prototype = {
    constructor: THREE.Texture,
    set needsUpdate(a) {
        !0 === a && this.version++
    },
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(a) {
        return this.image = a.image,
        this.mipmaps = a.mipmaps.slice(0),
        this.mapping = a.mapping,
        this.wrapS = a.wrapS,
        this.wrapT = a.wrapT,
        this.magFilter = a.magFilter,
        this.minFilter = a.minFilter,
        this.anisotropy = a.anisotropy,
        this.format = a.format,
        this.type = a.type,
        this.offset.copy(a.offset),
        this.repeat.copy(a.repeat),
        this.generateMipmaps = a.generateMipmaps,
        this.premultiplyAlpha = a.premultiplyAlpha,
        this.flipY = a.flipY,
        this.unpackAlignment = a.unpackAlignment,
        this.encoding = a.encoding,
        this
    },
    toJSON: function(a) {
        if (void 0 !== a.textures[this.uuid])
            return a.textures[this.uuid];
        var b = {
            metadata: {
                version: 4.4,
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
            anisotropy: this.anisotropy
        };
        if (void 0 !== this.image) {
            var c = this.image;
            if (void 0 === c.uuid && (c.uuid = THREE.Math.generateUUID()),
            void 0 === a.images[c.uuid]) {
                var d, e = a.images, f = c.uuid, g = c.uuid;
                void 0 !== c.toDataURL ? d = c : (d = document.createElement("canvas"),
                d.width = c.width,
                d.height = c.height,
                d.getContext("2d").drawImage(c, 0, 0, c.width, c.height)),
                d = 2048 < d.width || 2048 < d.height ? d.toDataURL("image/jpeg", .6) : d.toDataURL("image/png"),
                e[f] = {
                    uuid: g,
                    url: d
                }
            }
            b.image = c.uuid
        }
        return a.textures[this.uuid] = b
    },
    dispose: function() {
        this.dispatchEvent({
            type: "dispose"
        })
    },
    transformUv: function(a) {
        if (this.mapping === THREE.UVMapping) {
            if (a.multiply(this.repeat),
            a.add(this.offset),
            0 > a.x || 1 < a.x)
                switch (this.wrapS) {
                case THREE.RepeatWrapping:
                    a.x -= Math.floor(a.x);
                    break;
                case THREE.ClampToEdgeWrapping:
                    a.x = 0 > a.x ? 0 : 1;
                    break;
                case THREE.MirroredRepeatWrapping:
                    1 === Math.abs(Math.floor(a.x) % 2) ? a.x = Math.ceil(a.x) - a.x : a.x -= Math.floor(a.x)
                }
            if (0 > a.y || 1 < a.y)
                switch (this.wrapT) {
                case THREE.RepeatWrapping:
                    a.y -= Math.floor(a.y);
                    break;
                case THREE.ClampToEdgeWrapping:
                    a.y = 0 > a.y ? 0 : 1;
                    break;
                case THREE.MirroredRepeatWrapping:
                    1 === Math.abs(Math.floor(a.y) % 2) ? a.y = Math.ceil(a.y) - a.y : a.y -= Math.floor(a.y)
                }
            this.flipY && (a.y = 1 - a.y)
        }
    }
},
THREE.EventDispatcher.prototype.apply(THREE.Texture.prototype),
THREE.TextureIdCount = 0,
THREE.CanvasTexture = function(a, b, c, d, e, f, g, h, i) {
    THREE.Texture.call(this, a, b, c, d, e, f, g, h, i),
    this.needsUpdate = !0
}
,
THREE.CanvasTexture.prototype = Object.create(THREE.Texture.prototype),
THREE.CanvasTexture.prototype.constructor = THREE.CanvasTexture,
THREE.CubeTexture = function(a, b, c, d, e, f, g, h, i) {
    a = void 0 !== a ? a : [],
    b = void 0 !== b ? b : THREE.CubeReflectionMapping,
    THREE.Texture.call(this, a, b, c, d, e, f, g, h, i),
    this.flipY = !1
}
,
THREE.CubeTexture.prototype = Object.create(THREE.Texture.prototype),
THREE.CubeTexture.prototype.constructor = THREE.CubeTexture,
Object.defineProperty(THREE.CubeTexture.prototype, "images", {
    get: function() {
        return this.image
    },
    set: function(a) {
        this.image = a
    }
}),
THREE.CompressedTexture = function(a, b, c, d, e, f, g, h, i, j, k) {
    THREE.Texture.call(this, null , f, g, h, i, j, d, e, k),
    this.image = {
        width: b,
        height: c
    },
    this.mipmaps = a,
    this.generateMipmaps = this.flipY = !1
}
,
THREE.CompressedTexture.prototype = Object.create(THREE.Texture.prototype),
THREE.CompressedTexture.prototype.constructor = THREE.CompressedTexture,
THREE.DataTexture = function(a, b, c, d, e, f, g, h, i, j, k) {
    THREE.Texture.call(this, null , f, g, h, i, j, d, e, k),
    this.image = {
        data: a,
        width: b,
        height: c
    },
    this.magFilter = void 0 !== i ? i : THREE.NearestFilter,
    this.minFilter = void 0 !== j ? j : THREE.NearestFilter,
    this.generateMipmaps = this.flipY = !1
}
,
THREE.DataTexture.prototype = Object.create(THREE.Texture.prototype),
THREE.DataTexture.prototype.constructor = THREE.DataTexture,
THREE.VideoTexture = function(a, b, c, d, e, f, g, h, i) {
    function j() {
        requestAnimationFrame(j),
        a.readyState === a.HAVE_ENOUGH_DATA && (k.needsUpdate = !0)
    }
    THREE.Texture.call(this, a, b, c, d, e, f, g, h, i),
    this.generateMipmaps = !1;
    var k = this;
    j()
}
,
THREE.VideoTexture.prototype = Object.create(THREE.Texture.prototype),
THREE.VideoTexture.prototype.constructor = THREE.VideoTexture,
THREE.Group = function() {
    THREE.Object3D.call(this),
    this.type = "Group"
}
,
THREE.Group.prototype = Object.create(THREE.Object3D.prototype),
THREE.Group.prototype.constructor = THREE.Group,
THREE.Points = function(a, b) {
    THREE.Object3D.call(this),
    this.type = "Points",
    this.geometry = void 0 !== a ? a : new THREE.Geometry,
    this.material = void 0 !== b ? b : new THREE.PointsMaterial({
        color: 16777215 * Math.random()
    })
}
,
THREE.Points.prototype = Object.create(THREE.Object3D.prototype),
THREE.Points.prototype.constructor = THREE.Points,
THREE.Points.prototype.raycast = function() {
    var a = new THREE.Matrix4
      , b = new THREE.Ray
      , c = new THREE.Sphere;
    return function(d, e) {
        function f(a, c) {
            var f = b.distanceSqToPoint(a);
            if (k > f) {
                var h = b.closestPointToPoint(a);
                h.applyMatrix4(i);
                var j = d.ray.origin.distanceTo(h);
                j < d.near || j > d.far || e.push({
                    distance: j,
                    distanceToRay: Math.sqrt(f),
                    point: h.clone(),
                    index: c,
                    face: null ,
                    object: g
                })
            }
        }
        var g = this
          , h = this.geometry
          , i = this.matrixWorld
          , j = d.params.Points.threshold;
        if (null === h.boundingSphere && h.computeBoundingSphere(),
        c.copy(h.boundingSphere),
        c.applyMatrix4(i),
        !1 !== d.ray.intersectsSphere(c)) {
            a.getInverse(i),
            b.copy(d.ray).applyMatrix4(a);
            var j = j / ((this.scale.x + this.scale.y + this.scale.z) / 3)
              , k = j * j
              , j = new THREE.Vector3;
            if (h instanceof THREE.BufferGeometry) {
                var l = h.index
                  , h = h.attributes.position.array;
                if (null !== l)
                    for (var m = l.array, l = 0, n = m.length; n > l; l++) {
                        var o = m[l];
                        j.fromArray(h, 3 * o),
                        f(j, o)
                    }
                else
                    for (l = 0,
                    m = h.length / 3; m > l; l++)
                        j.fromArray(h, 3 * l),
                        f(j, l)
            } else
                for (j = h.vertices,
                l = 0,
                m = j.length; m > l; l++)
                    f(j[l], l)
        }
    }
}(),
THREE.Points.prototype.clone = function() {
    return new this.constructor(this.geometry,this.material).copy(this)
}
,
THREE.Line = function(a, b, c) {
    return 1 === c ? (console.warn("THREE.Line: parameter THREE.LinePieces no longer supported. Created THREE.LineSegments instead."),
    new THREE.LineSegments(a,b)) : (THREE.Object3D.call(this),
    this.type = "Line",
    this.geometry = void 0 !== a ? a : new THREE.Geometry,
    void (this.material = void 0 !== b ? b : new THREE.LineBasicMaterial({
        color: 16777215 * Math.random()
    })))
}
,
THREE.Line.prototype = Object.create(THREE.Object3D.prototype),
THREE.Line.prototype.constructor = THREE.Line,
THREE.Line.prototype.raycast = function() {
    var a = new THREE.Matrix4
      , b = new THREE.Ray
      , c = new THREE.Sphere;
    return function(d, e) {
        var f = d.linePrecision
          , f = f * f
          , g = this.geometry
          , h = this.matrixWorld;
        if (null === g.boundingSphere && g.computeBoundingSphere(),
        c.copy(g.boundingSphere),
        c.applyMatrix4(h),
        !1 !== d.ray.intersectsSphere(c)) {
            a.getInverse(h),
            b.copy(d.ray).applyMatrix4(a);
            var i = new THREE.Vector3
              , j = new THREE.Vector3
              , h = new THREE.Vector3
              , k = new THREE.Vector3
              , l = this instanceof THREE.LineSegments ? 2 : 1;
            if (g instanceof THREE.BufferGeometry) {
                var m = g.index
                  , n = g.attributes.position.array;
                if (null !== m)
                    for (var m = m.array, g = 0, o = m.length - 1; o > g; g += l) {
                        var p = m[g + 1];
                        i.fromArray(n, 3 * m[g]),
                        j.fromArray(n, 3 * p),
                        p = b.distanceSqToSegment(i, j, k, h),
                        p > f || (k.applyMatrix4(this.matrixWorld),
                        p = d.ray.origin.distanceTo(k),
                        p < d.near || p > d.far || e.push({
                            distance: p,
                            point: h.clone().applyMatrix4(this.matrixWorld),
                            index: g,
                            face: null ,
                            faceIndex: null ,
                            object: this
                        }))
                    }
                else
                    for (g = 0,
                    o = n.length / 3 - 1; o > g; g += l)
                        i.fromArray(n, 3 * g),
                        j.fromArray(n, 3 * g + 3),
                        p = b.distanceSqToSegment(i, j, k, h),
                        p > f || (k.applyMatrix4(this.matrixWorld),
                        p = d.ray.origin.distanceTo(k),
                        p < d.near || p > d.far || e.push({
                            distance: p,
                            point: h.clone().applyMatrix4(this.matrixWorld),
                            index: g,
                            face: null ,
                            faceIndex: null ,
                            object: this
                        }))
            } else if (g instanceof THREE.Geometry)
                for (i = g.vertices,
                j = i.length,
                g = 0; j - 1 > g; g += l)
                    p = b.distanceSqToSegment(i[g], i[g + 1], k, h),
                    p > f || (k.applyMatrix4(this.matrixWorld),
                    p = d.ray.origin.distanceTo(k),
                    p < d.near || p > d.far || e.push({
                        distance: p,
                        point: h.clone().applyMatrix4(this.matrixWorld),
                        index: g,
                        face: null ,
                        faceIndex: null ,
                        object: this
                    }))
        }
    }
}(),
THREE.Line.prototype.clone = function() {
    return new this.constructor(this.geometry,this.material).copy(this)
}
,
THREE.LineStrip = 0,
THREE.LinePieces = 1,
THREE.LineSegments = function(a, b) {
    THREE.Line.call(this, a, b),
    this.type = "LineSegments"
}
,
THREE.LineSegments.prototype = Object.create(THREE.Line.prototype),
THREE.LineSegments.prototype.constructor = THREE.LineSegments,
THREE.Mesh = function(a, b) {
    THREE.Object3D.call(this),
    this.type = "Mesh",
    this.geometry = void 0 !== a ? a : new THREE.Geometry,
    this.material = void 0 !== b ? b : new THREE.MeshBasicMaterial({
        color: 16777215 * Math.random()
    }),
    this.drawMode = THREE.TrianglesDrawMode,
    this.updateMorphTargets()
}
,
THREE.Mesh.prototype = Object.create(THREE.Object3D.prototype),
THREE.Mesh.prototype.constructor = THREE.Mesh,
THREE.Mesh.prototype.setDrawMode = function(a) {
    this.drawMode = a
}
,
THREE.Mesh.prototype.updateMorphTargets = function() {
    if (void 0 !== this.geometry.morphTargets && 0 < this.geometry.morphTargets.length) {
        this.morphTargetBase = -1,
        this.morphTargetInfluences = [],
        this.morphTargetDictionary = {};
        for (var a = 0, b = this.geometry.morphTargets.length; b > a; a++)
            this.morphTargetInfluences.push(0),
            this.morphTargetDictionary[this.geometry.morphTargets[a].name] = a
    }
}
,
THREE.Mesh.prototype.getMorphTargetIndexByName = function(a) {
    return void 0 !== this.morphTargetDictionary[a] ? this.morphTargetDictionary[a] : (console.warn("THREE.Mesh.getMorphTargetIndexByName: morph target " + a + " does not exist. Returning 0."),
    0)
}
,
THREE.Mesh.prototype.raycast = function() {
    function a(a, b, c, d, e, f, g) {
        return THREE.Triangle.barycoordFromPoint(a, b, c, d, p),
        e.multiplyScalar(p.x),
        f.multiplyScalar(p.y),
        g.multiplyScalar(p.z),
        e.add(f).add(g),
        e.clone()
    }
    function b(a, b, c, d, e, f, g) {
        var h = a.material;
        return null === (h.side === THREE.BackSide ? c.intersectTriangle(f, e, d, !0, g) : c.intersectTriangle(d, e, f, h.side !== THREE.DoubleSide, g)) ? null : (r.copy(g),
        r.applyMatrix4(a.matrixWorld),
        c = b.ray.origin.distanceTo(r),
        c < b.near || c > b.far ? null : {
            distance: c,
            point: r.clone(),
            object: a
        })
    }
    function c(c, d, e, f, j, k, l, p) {
        return g.fromArray(f, 3 * k),
        h.fromArray(f, 3 * l),
        i.fromArray(f, 3 * p),
        (c = b(c, d, e, g, h, i, q)) && (j && (m.fromArray(j, 2 * k),
        n.fromArray(j, 2 * l),
        o.fromArray(j, 2 * p),
        c.uv = a(q, g, h, i, m, n, o)),
        c.face = new THREE.Face3(k,l,p,THREE.Triangle.normal(g, h, i)),
        c.faceIndex = k),
        c
    }
    var d = new THREE.Matrix4
      , e = new THREE.Ray
      , f = new THREE.Sphere
      , g = new THREE.Vector3
      , h = new THREE.Vector3
      , i = new THREE.Vector3
      , j = new THREE.Vector3
      , k = new THREE.Vector3
      , l = new THREE.Vector3
      , m = new THREE.Vector2
      , n = new THREE.Vector2
      , o = new THREE.Vector2
      , p = new THREE.Vector3
      , q = new THREE.Vector3
      , r = new THREE.Vector3;
    return function(p, r) {
        var s = this.geometry
          , t = this.material
          , u = this.matrixWorld;
        if (void 0 !== t && (null === s.boundingSphere && s.computeBoundingSphere(),
        f.copy(s.boundingSphere),
        f.applyMatrix4(u),
        !1 !== p.ray.intersectsSphere(f) && (d.getInverse(u),
        e.copy(p.ray).applyMatrix4(d),
        null === s.boundingBox || !1 !== e.intersectsBox(s.boundingBox)))) {
            var v, w;
            if (s instanceof THREE.BufferGeometry) {
                var x, y, t = s.index, u = s.attributes, s = u.position.array;
                if (void 0 !== u.uv && (v = u.uv.array),
                null !== t)
                    for (var u = t.array, z = 0, A = u.length; A > z; z += 3)
                        t = u[z],
                        x = u[z + 1],
                        y = u[z + 2],
                        (w = c(this, p, e, s, v, t, x, y)) && (w.faceIndex = Math.floor(z / 3),
                        r.push(w));
                else
                    for (z = 0,
                    A = s.length; A > z; z += 9)
                        t = z / 3,
                        x = t + 1,
                        y = t + 2,
                        (w = c(this, p, e, s, v, t, x, y)) && (w.index = t,
                        r.push(w))
            } else if (s instanceof THREE.Geometry) {
                var B, C, u = t instanceof THREE.MultiMaterial, z = !0 === u ? t.materials : null , A = s.vertices;
                x = s.faces,
                y = s.faceVertexUvs[0],
                0 < y.length && (v = y);
                for (var D = 0, E = x.length; E > D; D++) {
                    var F = x[D];
                    if (w = !0 === u ? z[F.materialIndex] : t,
                    void 0 !== w) {
                        if (y = A[F.a],
                        B = A[F.b],
                        C = A[F.c],
                        !0 === w.morphTargets) {
                            w = s.morphTargets;
                            var G = this.morphTargetInfluences;
                            g.set(0, 0, 0),
                            h.set(0, 0, 0),
                            i.set(0, 0, 0);
                            for (var H = 0, I = w.length; I > H; H++) {
                                var J = G[H];
                                if (0 !== J) {
                                    var K = w[H].vertices;
                                    g.addScaledVector(j.subVectors(K[F.a], y), J),
                                    h.addScaledVector(k.subVectors(K[F.b], B), J),
                                    i.addScaledVector(l.subVectors(K[F.c], C), J)
                                }
                            }
                            g.add(y),
                            h.add(B),
                            i.add(C),
                            y = g,
                            B = h,
                            C = i
                        }
                        (w = b(this, p, e, y, B, C, q)) && (v && (G = v[D],
                        m.copy(G[0]),
                        n.copy(G[1]),
                        o.copy(G[2]),
                        w.uv = a(q, y, B, C, m, n, o)),
                        w.face = F,
                        w.faceIndex = D,
                        r.push(w))
                    }
                }
            }
        }
    }
}(),
THREE.Mesh.prototype.clone = function() {
    return new this.constructor(this.geometry,this.material).copy(this)
}
,
THREE.Bone = function(a) {
    THREE.Object3D.call(this),
    this.type = "Bone",
    this.skin = a
}
,
THREE.Bone.prototype = Object.create(THREE.Object3D.prototype),
THREE.Bone.prototype.constructor = THREE.Bone,
THREE.Bone.prototype.copy = function(a) {
    return THREE.Object3D.prototype.copy.call(this, a),
    this.skin = a.skin,
    this
}
,
THREE.Skeleton = function(a, b, c) {
    if (this.useVertexTexture = void 0 !== c ? c : !0,
    this.identityMatrix = new THREE.Matrix4,
    a = a || [],
    this.bones = a.slice(0),
    this.useVertexTexture ? (a = Math.sqrt(4 * this.bones.length),
    a = THREE.Math.nextPowerOfTwo(Math.ceil(a)),
    this.boneTextureHeight = this.boneTextureWidth = a = Math.max(a, 4),
    this.boneMatrices = new Float32Array(this.boneTextureWidth * this.boneTextureHeight * 4),
    this.boneTexture = new THREE.DataTexture(this.boneMatrices,this.boneTextureWidth,this.boneTextureHeight,THREE.RGBAFormat,THREE.FloatType)) : this.boneMatrices = new Float32Array(16 * this.bones.length),
    void 0 === b)
        this.calculateInverses();
    else if (this.bones.length === b.length)
        this.boneInverses = b.slice(0);
    else
        for (console.warn("THREE.Skeleton bonInverses is the wrong length."),
        this.boneInverses = [],
        b = 0,
        a = this.bones.length; a > b; b++)
            this.boneInverses.push(new THREE.Matrix4)
}
,
THREE.Skeleton.prototype.calculateInverses = function() {
    this.boneInverses = [];
    for (var a = 0, b = this.bones.length; b > a; a++) {
        var c = new THREE.Matrix4;
        this.bones[a] && c.getInverse(this.bones[a].matrixWorld),
        this.boneInverses.push(c)
    }
}
,
THREE.Skeleton.prototype.pose = function() {
    for (var a, b = 0, c = this.bones.length; c > b; b++)
        (a = this.bones[b]) && a.matrixWorld.getInverse(this.boneInverses[b]);
    for (b = 0,
    c = this.bones.length; c > b; b++)
        (a = this.bones[b]) && (a.parent ? (a.matrix.getInverse(a.parent.matrixWorld),
        a.matrix.multiply(a.matrixWorld)) : a.matrix.copy(a.matrixWorld),
        a.matrix.decompose(a.position, a.quaternion, a.scale))
}
,
THREE.Skeleton.prototype.update = function() {
    var a = new THREE.Matrix4;
    return function() {
        for (var b = 0, c = this.bones.length; c > b; b++)
            a.multiplyMatrices(this.bones[b] ? this.bones[b].matrixWorld : this.identityMatrix, this.boneInverses[b]),
            a.flattenToArrayOffset(this.boneMatrices, 16 * b);
        this.useVertexTexture && (this.boneTexture.needsUpdate = !0)
    }
}(),
THREE.Skeleton.prototype.clone = function() {
    return new THREE.Skeleton(this.bones,this.boneInverses,this.useVertexTexture)
}
,
THREE.SkinnedMesh = function(a, b, c) {
    if (THREE.Mesh.call(this, a, b),
    this.type = "SkinnedMesh",
    this.bindMode = "attached",
    this.bindMatrix = new THREE.Matrix4,
    this.bindMatrixInverse = new THREE.Matrix4,
    a = [],
    this.geometry && void 0 !== this.geometry.bones) {
        for (var d, e = 0, f = this.geometry.bones.length; f > e; ++e)
            d = this.geometry.bones[e],
            b = new THREE.Bone(this),
            a.push(b),
            b.name = d.name,
            b.position.fromArray(d.pos),
            b.quaternion.fromArray(d.rotq),
            void 0 !== d.scl && b.scale.fromArray(d.scl);
        for (e = 0,
        f = this.geometry.bones.length; f > e; ++e)
            d = this.geometry.bones[e],
            -1 !== d.parent && null !== d.parent ? a[d.parent].add(a[e]) : this.add(a[e])
    }
    this.normalizeSkinWeights(),
    this.updateMatrixWorld(!0),
    this.bind(new THREE.Skeleton(a,void 0,c), this.matrixWorld)
}
,
THREE.SkinnedMesh.prototype = Object.create(THREE.Mesh.prototype),
THREE.SkinnedMesh.prototype.constructor = THREE.SkinnedMesh,
THREE.SkinnedMesh.prototype.bind = function(a, b) {
    this.skeleton = a,
    void 0 === b && (this.updateMatrixWorld(!0),
    this.skeleton.calculateInverses(),
    b = this.matrixWorld),
    this.bindMatrix.copy(b),
    this.bindMatrixInverse.getInverse(b)
}
,
THREE.SkinnedMesh.prototype.pose = function() {
    this.skeleton.pose()
}
,
THREE.SkinnedMesh.prototype.normalizeSkinWeights = function() {
    if (this.geometry instanceof THREE.Geometry)
        for (var a = 0; a < this.geometry.skinWeights.length; a++) {
            var b = this.geometry.skinWeights[a]
              , c = 1 / b.lengthManhattan();
            1 / 0 !== c ? b.multiplyScalar(c) : b.set(1, 0, 0, 0)
        }
    else if (this.geometry instanceof THREE.BufferGeometry)
        for (var b = new THREE.Vector4, d = this.geometry.attributes.skinWeight, a = 0; a < d.count; a++)
            b.x = d.getX(a),
            b.y = d.getY(a),
            b.z = d.getZ(a),
            b.w = d.getW(a),
            c = 1 / b.lengthManhattan(),
            1 / 0 !== c ? b.multiplyScalar(c) : b.set(1, 0, 0, 0),
            d.setXYZW(a, b.x, b.y, b.z, b.w)
}
,
THREE.SkinnedMesh.prototype.updateMatrixWorld = function(a) {
    THREE.Mesh.prototype.updateMatrixWorld.call(this, !0),
    "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn("THREE.SkinnedMesh unrecognized bindMode: " + this.bindMode)
}
,
THREE.SkinnedMesh.prototype.clone = function() {
    return new this.constructor(this.geometry,this.material,this.useVertexTexture).copy(this)
}
,
THREE.LOD = function() {
    THREE.Object3D.call(this),
    this.type = "LOD",
    Object.defineProperties(this, {
        levels: {
            enumerable: !0,
            value: []
        },
        objects: {
            get: function() {
                return console.warn("THREE.LOD: .objects has been renamed to .levels."),
                this.levels
            }
        }
    })
}
,
THREE.LOD.prototype = Object.create(THREE.Object3D.prototype),
THREE.LOD.prototype.constructor = THREE.LOD,
THREE.LOD.prototype.addLevel = function(a, b) {
    void 0 === b && (b = 0),
    b = Math.abs(b);
    for (var c = this.levels, d = 0; d < c.length && !(b < c[d].distance); d++)
        ;
    c.splice(d, 0, {
        distance: b,
        object: a
    }),
    this.add(a)
}
,
THREE.LOD.prototype.getObjectForDistance = function(a) {
    for (var b = this.levels, c = 1, d = b.length; d > c && !(a < b[c].distance); c++)
        ;
    return b[c - 1].object
}
,
THREE.LOD.prototype.raycast = function() {
    var a = new THREE.Vector3;
    return function(b, c) {
        a.setFromMatrixPosition(this.matrixWorld);
        var d = b.ray.origin.distanceTo(a);
        this.getObjectForDistance(d).raycast(b, c)
    }
}(),
THREE.LOD.prototype.update = function() {
    var a = new THREE.Vector3
      , b = new THREE.Vector3;
    return function(c) {
        var d = this.levels;
        if (1 < d.length) {
            a.setFromMatrixPosition(c.matrixWorld),
            b.setFromMatrixPosition(this.matrixWorld),
            c = a.distanceTo(b),
            d[0].object.visible = !0;
            for (var e = 1, f = d.length; f > e && c >= d[e].distance; e++)
                d[e - 1].object.visible = !1,
                d[e].object.visible = !0;
            for (; f > e; e++)
                d[e].object.visible = !1
        }
    }
}(),
THREE.LOD.prototype.copy = function(a) {
    THREE.Object3D.prototype.copy.call(this, a, !1),
    a = a.levels;
    for (var b = 0, c = a.length; c > b; b++) {
        var d = a[b];
        this.addLevel(d.object.clone(), d.distance)
    }
    return this
}
,
THREE.LOD.prototype.toJSON = function(a) {
    a = THREE.Object3D.prototype.toJSON.call(this, a),
    a.object.levels = [];
    for (var b = this.levels, c = 0, d = b.length; d > c; c++) {
        var e = b[c];
        a.object.levels.push({
            object: e.object.uuid,
            distance: e.distance
        })
    }
    return a
}
,
THREE.Sprite = function() {
    var a = new Uint16Array([0, 1, 2, 0, 2, 3])
      , b = new Float32Array([-.5, -.5, 0, .5, -.5, 0, .5, .5, 0, -.5, .5, 0])
      , c = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1])
      , d = new THREE.BufferGeometry;
    return d.setIndex(new THREE.BufferAttribute(a,1)),
    d.addAttribute("position", new THREE.BufferAttribute(b,3)),
    d.addAttribute("uv", new THREE.BufferAttribute(c,2)),
    function(a) {
        THREE.Object3D.call(this),
        this.type = "Sprite",
        this.geometry = d,
        this.material = void 0 !== a ? a : new THREE.SpriteMaterial
    }
}(),
THREE.Sprite.prototype = Object.create(THREE.Object3D.prototype),
THREE.Sprite.prototype.constructor = THREE.Sprite,
THREE.Sprite.prototype.raycast = function() {
    var a = new THREE.Vector3;
    return function(b, c) {
        a.setFromMatrixPosition(this.matrixWorld);
        var d = b.ray.distanceSqToPoint(a);
        d > this.scale.x * this.scale.y || c.push({
            distance: Math.sqrt(d),
            point: this.position,
            face: null ,
            object: this
        })
    }
}(),
THREE.Sprite.prototype.clone = function() {
    return new this.constructor(this.material).copy(this)
}
,
THREE.Particle = THREE.Sprite,
THREE.LensFlare = function(a, b, c, d, e) {
    THREE.Object3D.call(this),
    this.lensFlares = [],
    this.positionScreen = new THREE.Vector3,
    this.customUpdateCallback = void 0,
    void 0 !== a && this.add(a, b, c, d, e)
}
,
THREE.LensFlare.prototype = Object.create(THREE.Object3D.prototype),
THREE.LensFlare.prototype.constructor = THREE.LensFlare,
THREE.LensFlare.prototype.add = function(a, b, c, d, e, f) {
    void 0 === b && (b = -1),
    void 0 === c && (c = 0),
    void 0 === f && (f = 1),
    void 0 === e && (e = new THREE.Color(16777215)),
    void 0 === d && (d = THREE.NormalBlending),
    c = Math.min(c, Math.max(0, c)),
    this.lensFlares.push({
        texture: a,
        size: b,
        distance: c,
        x: 0,
        y: 0,
        z: 0,
        scale: 1,
        rotation: 0,
        opacity: f,
        color: e,
        blending: d
    })
}
,
THREE.LensFlare.prototype.updateLensFlares = function() {
    var a, b, c = this.lensFlares.length, d = 2 * -this.positionScreen.x, e = 2 * -this.positionScreen.y;
    for (a = 0; c > a; a++)
        b = this.lensFlares[a],
        b.x = this.positionScreen.x + d * b.distance,
        b.y = this.positionScreen.y + e * b.distance,
        b.wantedRotation = b.x * Math.PI * .25,
        b.rotation += .25 * (b.wantedRotation - b.rotation)
}
,
THREE.LensFlare.prototype.copy = function(a) {
    THREE.Object3D.prototype.copy.call(this, a),
    this.positionScreen.copy(a.positionScreen),
    this.customUpdateCallback = a.customUpdateCallback;
    for (var b = 0, c = a.lensFlares.length; c > b; b++)
        this.lensFlares.push(a.lensFlares[b]);
    return this
}
,
THREE.Scene = function() {
    THREE.Object3D.call(this),
    this.type = "Scene",
    this.overrideMaterial = this.fog = null ,
    this.autoUpdate = !0
}
,
THREE.Scene.prototype = Object.create(THREE.Object3D.prototype),
THREE.Scene.prototype.constructor = THREE.Scene,
THREE.Scene.prototype.copy = function(a, b) {
    return THREE.Object3D.prototype.copy.call(this, a, b),
    null !== a.fog && (this.fog = a.fog.clone()),
    null !== a.overrideMaterial && (this.overrideMaterial = a.overrideMaterial.clone()),
    this.autoUpdate = a.autoUpdate,
    this.matrixAutoUpdate = a.matrixAutoUpdate,
    this
}
,
THREE.Fog = function(a, b, c) {
    this.name = "",
    this.color = new THREE.Color(a),
    this.near = void 0 !== b ? b : 1,
    this.far = void 0 !== c ? c : 1e3
}
,
THREE.Fog.prototype.clone = function() {
    return new THREE.Fog(this.color.getHex(),this.near,this.far)
}
,
THREE.FogExp2 = function(a, b) {
    this.name = "",
    this.color = new THREE.Color(a),
    this.density = void 0 !== b ? b : 25e-5
}
,
THREE.FogExp2.prototype.clone = function() {
    return new THREE.FogExp2(this.color.getHex(),this.density)
}
,
THREE.ShaderChunk = {},
THREE.ShaderChunk.alphamap_fragment = "#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif\n",
THREE.ShaderChunk.alphamap_pars_fragment = "#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif\n",
THREE.ShaderChunk.alphatest_fragment = "#ifdef ALPHATEST\n	if ( diffuseColor.a < ALPHATEST ) discard;\n#endif\n",
THREE.ShaderChunk.aomap_fragment = "#ifdef USE_AOMAP\n	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n	reflectedLight.indirectDiffuse *= ambientOcclusion;\n	#if defined( USE_ENVMAP ) && defined( STANDARD )\n		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n	#endif\n#endif\n",
THREE.ShaderChunk.aomap_pars_fragment = "#ifdef USE_AOMAP\n	uniform sampler2D aoMap;\n	uniform float aoMapIntensity;\n#endif",
THREE.ShaderChunk.begin_vertex = "\nvec3 transformed = vec3( position );\n",
THREE.ShaderChunk.beginnormal_vertex = "\nvec3 objectNormal = vec3( normal );\n",
THREE.ShaderChunk.bsdfs = "bool testLightInRange( const in float lightDistance, const in float cutoffDistance ) {\n	return any( bvec2( cutoffDistance == 0.0, lightDistance < cutoffDistance ) );\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n		if( decayExponent > 0.0 ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n			float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n			float maxDistanceCutoffFactor = pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n			return distanceFalloff * maxDistanceCutoffFactor;\n#else\n			return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n#endif\n		}\n		return 1.0;\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n	return RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n	return ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	return 1.0 / ( gl * gv );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n	float a2 = pow2( alpha );\n	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n	return RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n	float alpha = pow2( roughness );\n	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n	float dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n	float dotNH = saturate( dot( geometry.normal, halfDir ) );\n	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n	vec3 F = F_Schlick( specularColor, dotLH );\n	float G = G_GGX_Smith( alpha, dotNL, dotNV );\n	float D = D_GGX( alpha, dotNH );\n	return F * ( G * D );\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n	vec4 r = roughness * c0 + c1;\n	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n	vec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n	return specularColor * AB.x + AB.y;\n}\nfloat G_BlinnPhong_Implicit( ) {\n	return 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n	float dotNH = saturate( dot( geometry.normal, halfDir ) );\n	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n	vec3 F = F_Schlick( specularColor, dotLH );\n	float G = G_BlinnPhong_Implicit( );\n	float D = D_BlinnPhong( shininess, dotNH );\n	return F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n",
THREE.ShaderChunk.bumpmap_pars_fragment = "#ifdef USE_BUMPMAP\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n	vec2 dHdxy_fwd() {\n		vec2 dSTdx = dFdx( vUv );\n		vec2 dSTdy = dFdy( vUv );\n		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n		return vec2( dBx, dBy );\n	}\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n		vec3 vSigmaX = dFdx( surf_pos );\n		vec3 vSigmaY = dFdy( surf_pos );\n		vec3 vN = surf_norm;\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n		float fDet = dot( vSigmaX, R1 );\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n	}\n#endif\n",
THREE.ShaderChunk.color_fragment = "#ifdef USE_COLOR\n	diffuseColor.rgb *= vColor;\n#endif",
THREE.ShaderChunk.color_pars_fragment = "#ifdef USE_COLOR\n	varying vec3 vColor;\n#endif\n",
THREE.ShaderChunk.color_pars_vertex = "#ifdef USE_COLOR\n	varying vec3 vColor;\n#endif",
THREE.ShaderChunk.color_vertex = "#ifdef USE_COLOR\n	vColor.xyz = color.xyz;\n#endif",
THREE.ShaderChunk.common = "#define PI 3.14159\n#define PI2 6.28318\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nstruct IncidentLight {\n	vec3 color;\n	vec3 direction;\n	bool visible;\n};\nstruct ReflectedLight {\n	vec3 directDiffuse;\n	vec3 directSpecular;\n	vec3 indirectDiffuse;\n	vec3 indirectSpecular;\n};\nstruct GeometricContext {\n	vec3 position;\n	vec3 normal;\n	vec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n	float distance = dot( planeNormal, point - pointOnPlane );\n	return - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n	return sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\n",
THREE.ShaderChunk.cube_uv_reflection_fragment = "#ifdef ENVMAP_TYPE_CUBE_UV\nconst float cubeUV_textureSize = 1024.0;\nint getFaceFromDirection(vec3 direction) {\n    vec3 absDirection = abs(direction);\n    int face = -1;\n    if( absDirection.x > absDirection.z ) {\n        if(absDirection.x > absDirection.y )\n            face = direction.x > 0.0 ? 0 : 3;\n        else\n            face = direction.y > 0.0 ? 1 : 4;\n    }\n    else {\n        if(absDirection.z > absDirection.y )\n            face = direction.z > 0.0 ? 2 : 5;\n        else\n            face = direction.y > 0.0 ? 1 : 4;\n    }\n    return face;\n}\nconst float cubeUV_maxLods1 = log2(cubeUV_textureSize*0.25) - 1.0;\nconst float cubeUV_rangeClamp = exp2((6.0 - 1.0) * 2.0);\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n    float scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n    float dxRoughness = dFdx(roughness);\n    float dyRoughness = dFdy(roughness);\n    vec3 dx = dFdx( vec * scale * dxRoughness );\n    vec3 dy = dFdy( vec * scale * dyRoughness );\n    float d = max( dot( dx, dx ), dot( dy, dy ) );\n    d = clamp(d, 1.0, cubeUV_rangeClamp);\n    float mipLevel = 0.5 * log2(d);\n    return vec2(floor(mipLevel), fract(mipLevel));\n}\nconst float cubeUV_maxLods2 = log2(cubeUV_textureSize*0.25) - 2.0;\nconst float cubeUV_rcpTextureSize = 1.0 / cubeUV_textureSize;\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n    mipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n    float a = 16.0 * cubeUV_rcpTextureSize;\n    vec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n    vec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n    float powScale = exp2_packed.x * exp2_packed.y;\n    float scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n    float mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n    bool bRes = mipLevel == 0.0;\n    scale =  bRes && (scale < a) ? a : scale;\n    vec3 r;\n    vec2 offset;\n    int face = getFaceFromDirection(direction);\n    float rcpPowScale = 1.0 / powScale;\n    if( face == 0) {\n        r = vec3(direction.x, -direction.z, direction.y);\n        offset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n        offset.y = bRes && (offset.y < 2.0*a) ?  a : offset.y;\n    }\n    else if( face == 1) {\n        r = vec3(direction.y, direction.x, direction.z);\n        offset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n        offset.y = bRes && (offset.y < 2.0*a) ?  a : offset.y;\n    }\n    else if( face == 2) {\n        r = vec3(direction.z, direction.x, direction.y);\n        offset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n        offset.y = bRes && (offset.y < 2.0*a) ?  a : offset.y;\n    }\n    else if( face == 3) {\n        r = vec3(direction.x, direction.z, direction.y);\n        offset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n        offset.y = bRes && (offset.y < 2.0*a) ?  0.0 : offset.y;\n    }\n    else if( face == 4) {\n        r = vec3(direction.y, direction.x, -direction.z);\n        offset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n        offset.y = bRes && (offset.y < 2.0*a) ?  0.0 : offset.y;\n    }\n    else {\n        r = vec3(direction.z, -direction.x, direction.y);\n        offset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n        offset.y = bRes && (offset.y < 2.0*a) ?  0.0 : offset.y;\n    }\n    r = normalize(r);\n    float texelOffset = 0.5 * cubeUV_rcpTextureSize;\n    vec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n    vec2 base = offset + vec2( texelOffset );\n    return base + s * ( scale - 2.0 * texelOffset );\n}\nconst float cubeUV_maxLods3 = log2(cubeUV_textureSize*0.25) - 3.0;\nvec4 textureCubeUV(vec3 reflectedDirection, float roughness ) {\n    float roughnessVal = roughness* cubeUV_maxLods3;\n    float r1 = floor(roughnessVal);\n    float r2 = r1 + 1.0;\n    float t = fract(roughnessVal);\n    vec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n    float s = mipInfo.y;\n    float level0 = mipInfo.x;\n    float level1 = level0 + 1.0;\n    level1 = level1 > 5.0 ? 5.0 : level1;\n    level0 += min( floor( s + 0.5 ), 5.0 );\n    vec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n    vec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n    vec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n    vec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n    vec4 result = mix(color10, color20, t);\n    return vec4(result.rgb, 1.0);\n}\n#endif\n",
THREE.ShaderChunk.defaultnormal_vertex = "#ifdef FLIP_SIDED\n	objectNormal = -objectNormal;\n#endif\nvec3 transformedNormal = normalMatrix * objectNormal;\n",
THREE.ShaderChunk.displacementmap_vertex = "#ifdef USE_DISPLACEMENTMAP\n	transformed += normal * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif\n",
THREE.ShaderChunk.displacementmap_pars_vertex = "#ifdef USE_DISPLACEMENTMAP\n	uniform sampler2D displacementMap;\n	uniform float displacementScale;\n	uniform float displacementBias;\n#endif\n",
THREE.ShaderChunk.emissivemap_fragment = "#ifdef USE_EMISSIVEMAP\n	vec4 emissiveColor = texture2D( emissiveMap, vUv );\n	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n	totalEmissiveRadiance *= emissiveColor.rgb;\n#endif\n",
THREE.ShaderChunk.emissivemap_pars_fragment = "#ifdef USE_EMISSIVEMAP\n	uniform sampler2D emissiveMap;\n#endif\n",
THREE.ShaderChunk.encodings_pars_fragment = "\nvec4 LinearToLinear( in vec4 value ) {\n  return value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n  return vec4( pow( value.xyz, vec3( gammaFactor ) ), value.w );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n  return vec4( pow( value.xyz, vec3( 1.0 / gammaFactor ) ), value.w );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n  return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n  return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n  return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n  float maxComponent = max( max( value.r, value.g ), value.b );\n  float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n  return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n  return vec4( value.xyz * value.w * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n  float maxRGB = max( value.x, max( value.g, value.b ) );\n  float M      = clamp( maxRGB / maxRange, 0.0, 1.0 );\n  M            = ceil( M * 255.0 ) / 255.0;\n  return vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n    return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n    float maxRGB = max( value.x, max( value.g, value.b ) );\n    float D      = max( maxRange / maxRGB, 1.0 );\n    D            = min( floor( D ) / 255.0, 1.0 );\n    return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n  vec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\n  Xp_Y_XYZp = max(Xp_Y_XYZp, vec3(1e-6, 1e-6, 1e-6));\n  vec4 vResult;\n  vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n  float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n  vResult.w = fract(Le);\n  vResult.z = (Le - (floor(vResult.w*255.0))/255.0)/255.0;\n  return vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n  float Le = value.z * 255.0 + value.w;\n  vec3 Xp_Y_XYZp;\n  Xp_Y_XYZp.y = exp2((Le - 127.0) / 2.0);\n  Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n  Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n  vec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\n  return vec4( max(vRGB, 0.0), 1.0 );\n}\n",
THREE.ShaderChunk.encodings_fragment = "  gl_FragColor = linearToOutputTexel( gl_FragColor );\n",
THREE.ShaderChunk.envmap_fragment = "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n		vec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( cameraToVertex, worldNormal );\n		#else\n			vec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n		#endif\n	#else\n		vec3 reflectVec = vReflect;\n	#endif\n	#ifdef DOUBLE_SIDED\n		float flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n	#else\n		float flipNormal = 1.0;\n	#endif\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 envColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n	#elif defined( ENVMAP_TYPE_EQUIREC )\n		vec2 sampleUV;\n		sampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n		sampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n		vec4 envColor = texture2D( envMap, sampleUV );\n	#elif defined( ENVMAP_TYPE_SPHERE )\n		vec3 reflectView = flipNormal * normalize((viewMatrix * vec4( reflectVec, 0.0 )).xyz + vec3(0.0,0.0,1.0));\n		vec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n	#endif\n	envColor = envMapTexelToLinear( envColor );\n	#ifdef ENVMAP_BLENDING_MULTIPLY\n		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_MIX )\n		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_ADD )\n		outgoingLight += envColor.xyz * specularStrength * reflectivity;\n	#endif\n#endif\n",
THREE.ShaderChunk.envmap_pars_fragment = "#if defined( USE_ENVMAP ) || defined( STANDARD )\n	uniform float reflectivity;\n	uniform float envMapIntenstiy;\n#endif\n#ifdef USE_ENVMAP\n	#ifdef ENVMAP_TYPE_CUBE\n		uniform samplerCube envMap;\n	#else\n		uniform sampler2D envMap;\n	#endif\n	uniform float flipEnvMap;\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( STANDARD )\n		uniform float refractionRatio;\n	#else\n		varying vec3 vReflect;\n	#endif\n#endif\n",
THREE.ShaderChunk.envmap_pars_vertex = "#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP ) && ! defined( PHONG ) && ! defined( STANDARD )\n	varying vec3 vReflect;\n	uniform float refractionRatio;\n#endif\n",
THREE.ShaderChunk.envmap_vertex = "#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP ) && ! defined( PHONG ) && ! defined( STANDARD )\n	vec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n	vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n	#ifdef ENVMAP_MODE_REFLECTION\n		vReflect = reflect( cameraToVertex, worldNormal );\n	#else\n		vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n	#endif\n#endif\n",
THREE.ShaderChunk.fog_fragment = "#ifdef USE_FOG\n	#ifdef USE_LOGDEPTHBUF_EXT\n		float depth = gl_FragDepthEXT / gl_FragCoord.w;\n	#else\n		float depth = gl_FragCoord.z / gl_FragCoord.w;\n	#endif\n	#ifdef FOG_EXP2\n		float fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * depth * depth * LOG2 ) );\n	#else\n		float fogFactor = smoothstep( fogNear, fogFar, depth );\n	#endif\n	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif\n",
THREE.ShaderChunk.fog_pars_fragment = "#ifdef USE_FOG\n	uniform vec3 fogColor;\n	#ifdef FOG_EXP2\n		uniform float fogDensity;\n	#else\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n#endif",
THREE.ShaderChunk.lightmap_fragment = "#ifdef USE_LIGHTMAP\n	reflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif\n",
THREE.ShaderChunk.lightmap_pars_fragment = "#ifdef USE_LIGHTMAP\n	uniform sampler2D lightMap;\n	uniform float lightMapIntensity;\n#endif",
THREE.ShaderChunk.lights_lambert_vertex = "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n	vLightBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		directLight = getPointDirectLightIrradiance( pointLights[ i ], geometry );\n		dotNL = dot( geometry.normal, directLight.direction );\n		directLightColor_Diffuse = PI * directLight.color;\n		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n		#ifdef DOUBLE_SIDED\n			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n		#endif\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		directLight = getSpotDirectLightIrradiance( spotLights[ i ], geometry );\n		dotNL = dot( geometry.normal, directLight.direction );\n		directLightColor_Diffuse = PI * directLight.color;\n		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n		#ifdef DOUBLE_SIDED\n			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n		#endif\n	}\n#endif\n#if NUM_DIR_LIGHTS > 0\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directLight = getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry );\n		dotNL = dot( geometry.normal, directLight.direction );\n		directLightColor_Diffuse = PI * directLight.color;\n		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n		#ifdef DOUBLE_SIDED\n			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n		#endif\n	}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n		vLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n		#ifdef DOUBLE_SIDED\n			vLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n		#endif\n	}\n#endif\n",
THREE.ShaderChunk.lights_pars = "uniform vec3 ambientLightColor;\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n	vec3 irradiance = ambientLightColor;\n	#ifndef PHYSICALLY_CORRECT_LIGHTS\n		irradiance *= PI;\n	#endif\n	return irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n	struct DirectionalLight {\n		vec3 direction;\n		vec3 color;\n		int shadow;\n		float shadowBias;\n		float shadowRadius;\n		vec2 shadowMapSize;\n	};\n	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n	IncidentLight getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry ) {\n		IncidentLight directLight;\n		directLight.color = directionalLight.color;\n		directLight.direction = directionalLight.direction;\n		directLight.visible = true;\n		return directLight;\n	}\n#endif\n#if NUM_POINT_LIGHTS > 0\n	struct PointLight {\n		vec3 position;\n		vec3 color;\n		float distance;\n		float decay;\n		int shadow;\n		float shadowBias;\n		float shadowRadius;\n		vec2 shadowMapSize;\n	};\n	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n	IncidentLight getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry ) {\n		IncidentLight directLight;\n		vec3 lVector = pointLight.position - geometry.position;\n		directLight.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		if ( testLightInRange( lightDistance, pointLight.distance ) ) {\n			directLight.color = pointLight.color;\n			directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n			directLight.visible = true;\n		} else {\n			directLight.color = vec3( 0.0 );\n			directLight.visible = false;\n		}\n		return directLight;\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	struct SpotLight {\n		vec3 position;\n		vec3 direction;\n		vec3 color;\n		float distance;\n		float decay;\n		float coneCos;\n		float penumbraCos;\n		int shadow;\n		float shadowBias;\n		float shadowRadius;\n		vec2 shadowMapSize;\n	};\n	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n	IncidentLight getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry ) {\n		IncidentLight directLight;\n		vec3 lVector = spotLight.position - geometry.position;\n		directLight.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		float angleCos = dot( directLight.direction, spotLight.direction );\n		if ( all( bvec2( angleCos > spotLight.coneCos, testLightInRange( lightDistance, spotLight.distance ) ) ) ) {\n			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n			directLight.color = spotLight.color;\n			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n			directLight.visible = true;\n		} else {\n			directLight.color = vec3( 0.0 );\n			directLight.visible = false;\n		}\n		return directLight;\n	}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	struct HemisphereLight {\n		vec3 direction;\n		vec3 skyColor;\n		vec3 groundColor;\n	};\n	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n		float dotNL = dot( geometry.normal, hemiLight.direction );\n		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n		#ifndef PHYSICALLY_CORRECT_LIGHTS\n			irradiance *= PI;\n		#endif\n		return irradiance;\n	}\n#endif\n#if defined( USE_ENVMAP ) && defined( STANDARD )\n	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n		#ifdef DOUBLE_SIDED\n			float flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n		#else\n			float flipNormal = 1.0;\n		#endif\n		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n		#ifdef ENVMAP_TYPE_CUBE\n			vec3 queryVec = flipNormal * vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n			#ifdef TEXTURE_LOD_EXT\n				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n			#else\n				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n			#endif\n		#elif defined( ENVMAP_TYPE_CUBE_UV )\n			vec3 queryVec = flipNormal * vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n			vec4 envMapColor = textureCubeUV( queryVec, 1.0 );\n		#else\n			vec4 envMapColor = vec4( 0.0 );\n		#endif\n		envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n		return PI * envMapColor.rgb * envMapIntensity;\n	}\n	float getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n		float maxMIPLevelScalar = float( maxMIPLevel );\n		float desiredMIPLevel = maxMIPLevelScalar - 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n	}\n	vec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n		#else\n			vec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n		#endif\n		#ifdef DOUBLE_SIDED\n			float flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n		#else\n			float flipNormal = 1.0;\n		#endif\n		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n		float specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n		#ifdef ENVMAP_TYPE_CUBE\n			vec3 queryReflectVec = flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n			#ifdef TEXTURE_LOD_EXT\n				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n			#else\n				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n			#endif\n		#elif defined( ENVMAP_TYPE_CUBE_UV )\n			vec3 queryReflectVec = flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n			vec4 envMapColor = textureCubeUV(queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent));\n		#elif defined( ENVMAP_TYPE_EQUIREC )\n			vec2 sampleUV;\n			sampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n			sampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n			#ifdef TEXTURE_LOD_EXT\n				vec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n			#else\n				vec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n			#endif\n		#elif defined( ENVMAP_TYPE_SPHERE )\n			vec3 reflectView = flipNormal * normalize((viewMatrix * vec4( reflectVec, 0.0 )).xyz + vec3(0.0,0.0,1.0));\n			#ifdef TEXTURE_LOD_EXT\n				vec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n			#else\n				vec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n			#endif\n		#endif\n		envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n		return envMapColor.rgb * envMapIntensity;\n	}\n#endif\n",
THREE.ShaderChunk.lights_phong_fragment = "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n",
THREE.ShaderChunk.lights_phong_pars_fragment = "#ifdef USE_ENVMAP\n	varying vec3 vWorldPosition;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n	vec3	diffuseColor;\n	vec3	specularColor;\n	float	specularShininess;\n	float	specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	#ifndef PHYSICALLY_CORRECT_LIGHTS\n		irradiance *= PI;\n	#endif\n	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_BlinnPhong\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )	(0)\n",
THREE.ShaderChunk.lights_phong_pars_vertex = "#ifdef USE_ENVMAP\n	varying vec3 vWorldPosition;\n#endif\n",
THREE.ShaderChunk.lights_phong_vertex = "#ifdef USE_ENVMAP\n	vWorldPosition = worldPosition.xyz;\n#endif\n",
THREE.ShaderChunk.lights_standard_fragment = "StandardMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\nmaterial.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n",
THREE.ShaderChunk.lights_standard_pars_fragment = "struct StandardMaterial {\n	vec3	diffuseColor;\n	float	specularRoughness;\n	vec3	specularColor;\n};\nvoid RE_Direct_Standard( const in IncidentLight directLight, const in GeometricContext geometry, const in StandardMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	#ifndef PHYSICALLY_CORRECT_LIGHTS\n		irradiance *= PI;\n	#endif\n	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n	reflectedLight.directSpecular += irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n}\nvoid RE_IndirectDiffuse_Standard( const in vec3 irradiance, const in GeometricContext geometry, const in StandardMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Standard( const in vec3 radiance, const in GeometricContext geometry, const in StandardMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectSpecular += radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n}\n#define RE_Direct				RE_Direct_Standard\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Standard\n#define RE_IndirectSpecular		RE_IndirectSpecular_Standard\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}\n",
THREE.ShaderChunk.lights_template = "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n	PointLight pointLight;\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		pointLight = pointLights[ i ];\n		directLight = getPointDirectLightIrradiance( pointLight, geometry );\n		#ifdef USE_SHADOWMAP\n		directLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n	SpotLight spotLight;\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		spotLight = spotLights[ i ];\n		directLight = getSpotDirectLightIrradiance( spotLight, geometry );\n		#ifdef USE_SHADOWMAP\n		directLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n	DirectionalLight directionalLight;\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		directLight = getDirectionalDirectLightIrradiance( directionalLight, geometry );\n		#ifdef USE_SHADOWMAP\n		directLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n#endif\n#if defined( RE_IndirectDiffuse )\n	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n	#ifdef USE_LIGHTMAP\n		vec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n		#ifndef PHYSICALLY_CORRECT_LIGHTS\n			lightMapIrradiance *= PI;\n		#endif\n		irradiance += lightMapIrradiance;\n	#endif\n	#if ( NUM_HEMI_LIGHTS > 0 )\n		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n		}\n	#endif\n	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n	 	irradiance += getLightProbeIndirectIrradiance( geometry, 8 );\n	#endif\n	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n	vec3 radiance = getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), 8 );\n	RE_IndirectSpecular( radiance, geometry, material, reflectedLight );\n#endif\n",
THREE.ShaderChunk.logdepthbuf_fragment = "#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n	gl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n#endif",
THREE.ShaderChunk.logdepthbuf_pars_fragment = "#ifdef USE_LOGDEPTHBUF\n	uniform float logDepthBufFC;\n	#ifdef USE_LOGDEPTHBUF_EXT\n		varying float vFragDepth;\n	#endif\n#endif\n",
THREE.ShaderChunk.logdepthbuf_pars_vertex = "#ifdef USE_LOGDEPTHBUF\n	#ifdef USE_LOGDEPTHBUF_EXT\n		varying float vFragDepth;\n	#endif\n	uniform float logDepthBufFC;\n#endif",
THREE.ShaderChunk.logdepthbuf_vertex = "#ifdef USE_LOGDEPTHBUF\n	gl_Position.z = log2(max( EPSILON, gl_Position.w + 1.0 )) * logDepthBufFC;\n	#ifdef USE_LOGDEPTHBUF_EXT\n		vFragDepth = 1.0 + gl_Position.w;\n	#else\n		gl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n	#endif\n#endif\n",
THREE.ShaderChunk.map_fragment = "#ifdef USE_MAP\n	vec4 texelColor = texture2D( map, vUv );\n	texelColor = mapTexelToLinear( texelColor );\n	diffuseColor *= texelColor;\n#endif\n",
THREE.ShaderChunk.map_pars_fragment = "#ifdef USE_MAP\n	uniform sampler2D map;\n#endif\n",
THREE.ShaderChunk.map_particle_fragment = "#ifdef USE_MAP\n	vec4 mapTexel = texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) * offsetRepeat.zw + offsetRepeat.xy );\n	diffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n",
THREE.ShaderChunk.map_particle_pars_fragment = "#ifdef USE_MAP\n	uniform vec4 offsetRepeat;\n	uniform sampler2D map;\n#endif\n",
THREE.ShaderChunk.metalnessmap_fragment = "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n	vec4 texelMetalness = texture2D( metalnessMap, vUv );\n	metalnessFactor *= texelMetalness.r;\n#endif\n",
THREE.ShaderChunk.metalnessmap_pars_fragment = "#ifdef USE_METALNESSMAP\n	uniform sampler2D metalnessMap;\n#endif",
THREE.ShaderChunk.morphnormal_vertex = "#ifdef USE_MORPHNORMALS\n	objectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n	objectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n	objectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n	objectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif\n",
THREE.ShaderChunk.morphtarget_pars_vertex = "#ifdef USE_MORPHTARGETS\n	#ifndef USE_MORPHNORMALS\n	uniform float morphTargetInfluences[ 8 ];\n	#else\n	uniform float morphTargetInfluences[ 4 ];\n	#endif\n#endif",
THREE.ShaderChunk.morphtarget_vertex = "#ifdef USE_MORPHTARGETS\n	transformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n	transformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n	transformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n	transformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n	#ifndef USE_MORPHNORMALS\n	transformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n	transformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n	transformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n	transformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n	#endif\n#endif\n",
THREE.ShaderChunk.normal_fragment = "#ifdef FLAT_SHADED\n	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n#else\n	vec3 normal = normalize( vNormal );\n	#ifdef DOUBLE_SIDED\n		normal = normal * ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n	#endif\n#endif\n#ifdef USE_NORMALMAP\n	normal = perturbNormal2Arb( -vViewPosition, normal );\n#elif defined( USE_BUMPMAP )\n	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n",
THREE.ShaderChunk.normalmap_pars_fragment = "#ifdef USE_NORMALMAP\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n		vec3 q0 = dFdx( eye_pos.xyz );\n		vec3 q1 = dFdy( eye_pos.xyz );\n		vec2 st0 = dFdx( vUv.st );\n		vec2 st1 = dFdy( vUv.st );\n		vec3 S = normalize( q0 * st1.t - q1 * st0.t );\n		vec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n		vec3 N = normalize( surf_norm );\n		vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n		mapN.xy = normalScale * mapN.xy;\n		mat3 tsn = mat3( S, T, N );\n		return normalize( tsn * mapN );\n	}\n#endif\n",
THREE.ShaderChunk.premultiplied_alpha_fragment = "#ifdef PREMULTIPLIED_ALPHA\n	gl_FragColor.rgb *= gl_FragColor.a;\n#endif\n",
THREE.ShaderChunk.project_vertex = "#ifdef USE_SKINNING\n	vec4 mvPosition = modelViewMatrix * skinned;\n#else\n	vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\n#endif\ngl_Position = projectionMatrix * mvPosition;\n",
THREE.ShaderChunk.roughnessmap_fragment = "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n	vec4 texelRoughness = texture2D( roughnessMap, vUv );\n	roughnessFactor *= texelRoughness.r;\n#endif\n",
THREE.ShaderChunk.roughnessmap_pars_fragment = "#ifdef USE_ROUGHNESSMAP\n	uniform sampler2D roughnessMap;\n#endif",
THREE.ShaderChunk.shadowmap_pars_fragment = "#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHTS > 0\n		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n	#endif\n	#if NUM_SPOT_LIGHTS > 0\n		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n	#endif\n	#if NUM_POINT_LIGHTS > 0\n		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n	#endif\n	float unpackDepth( const in vec4 rgba_depth ) {\n		const vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\n		return dot( rgba_depth, bit_shift );\n	}\n	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n		return step( compare, unpackDepth( texture2D( depths, uv ) ) );\n	}\n	float texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n		const vec2 offset = vec2( 0.0, 1.0 );\n		vec2 texelSize = vec2( 1.0 ) / size;\n		vec2 centroidUV = floor( uv * size + 0.5 ) / size;\n		float lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n		float lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n		float rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n		float rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n		vec2 f = fract( uv * size + 0.5 );\n		float a = mix( lb, lt, f.y );\n		float b = mix( rb, rt, f.y );\n		float c = mix( a, b, f.x );\n		return c;\n	}\n	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n		shadowCoord.xyz /= shadowCoord.w;\n		shadowCoord.z += shadowBias;\n		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n		bool inFrustum = all( inFrustumVec );\n		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n		bool frustumTest = all( frustumTestVec );\n		if ( frustumTest ) {\n		#if defined( SHADOWMAP_TYPE_PCF )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx0 = - texelSize.x * shadowRadius;\n			float dy0 = - texelSize.y * shadowRadius;\n			float dx1 = + texelSize.x * shadowRadius;\n			float dy1 = + texelSize.y * shadowRadius;\n			return (\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n			) * ( 1.0 / 9.0 );\n		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx0 = - texelSize.x * shadowRadius;\n			float dy0 = - texelSize.y * shadowRadius;\n			float dx1 = + texelSize.x * shadowRadius;\n			float dy1 = + texelSize.y * shadowRadius;\n			return (\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n			) * ( 1.0 / 9.0 );\n		#else\n			return texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#endif\n		}\n		return 1.0;\n	}\n	vec2 cubeToUV( vec3 v, float texelSizeY ) {\n		vec3 absV = abs( v );\n		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n		absV *= scaleToCube;\n		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n		vec2 planar = v.xy;\n		float almostATexel = 1.5 * texelSizeY;\n		float almostOne = 1.0 - almostATexel;\n		if ( absV.z >= almostOne ) {\n			if ( v.z > 0.0 )\n				planar.x = 4.0 - v.x;\n		} else if ( absV.x >= almostOne ) {\n			float signX = sign( v.x );\n			planar.x = v.z * signX + 2.0 * signX;\n		} else if ( absV.y >= almostOne ) {\n			float signY = sign( v.y );\n			planar.x = v.x + 2.0 * signY + 2.0;\n			planar.y = v.z * signY - 2.0;\n		}\n		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n	}\n	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n		vec3 lightToPosition = shadowCoord.xyz;\n		vec3 bd3D = normalize( lightToPosition );\n		float dp = ( length( lightToPosition ) - shadowBias ) / 1000.0;\n		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n			return (\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n			) * ( 1.0 / 9.0 );\n		#else\n			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n		#endif\n	}\n#endif\n",
THREE.ShaderChunk.shadowmap_pars_vertex = "#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHTS > 0\n		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n	#endif\n	#if NUM_SPOT_LIGHTS > 0\n		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n	#endif\n	#if NUM_POINT_LIGHTS > 0\n		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n	#endif\n#endif\n",
THREE.ShaderChunk.shadowmap_vertex = "#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHTS > 0\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n	}\n	#endif\n	#if NUM_SPOT_LIGHTS > 0\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n	}\n	#endif\n	#if NUM_POINT_LIGHTS > 0\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n	}\n	#endif\n#endif\n",
THREE.ShaderChunk.shadowmask_pars_fragment = "float getShadowMask() {\n	float shadow = 1.0;\n	#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHTS > 0\n	DirectionalLight directionalLight;\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		shadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n	}\n	#endif\n	#if NUM_SPOT_LIGHTS > 0\n	SpotLight spotLight;\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		spotLight = spotLights[ i ];\n		shadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n	}\n	#endif\n	#if NUM_POINT_LIGHTS > 0\n	PointLight pointLight;\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		pointLight = pointLights[ i ];\n		shadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n	}\n	#endif\n	#endif\n	return shadow;\n}\n",
THREE.ShaderChunk.skinbase_vertex = "#ifdef USE_SKINNING\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
THREE.ShaderChunk.skinning_pars_vertex = "#ifdef USE_SKINNING\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n	#ifdef BONE_TEXTURE\n		uniform sampler2D boneTexture;\n		uniform int boneTextureWidth;\n		uniform int boneTextureHeight;\n		mat4 getBoneMatrix( const in float i ) {\n			float j = i * 4.0;\n			float x = mod( j, float( boneTextureWidth ) );\n			float y = floor( j / float( boneTextureWidth ) );\n			float dx = 1.0 / float( boneTextureWidth );\n			float dy = 1.0 / float( boneTextureHeight );\n			y = dy * ( y + 0.5 );\n			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n			mat4 bone = mat4( v1, v2, v3, v4 );\n			return bone;\n		}\n	#else\n		uniform mat4 boneGlobalMatrices[ MAX_BONES ];\n		mat4 getBoneMatrix( const in float i ) {\n			mat4 bone = boneGlobalMatrices[ int(i) ];\n			return bone;\n		}\n	#endif\n#endif\n",
THREE.ShaderChunk.skinning_vertex = "#ifdef USE_SKINNING\n	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	skinned  = bindMatrixInverse * skinned;\n#endif\n",
THREE.ShaderChunk.skinnormal_vertex = "#ifdef USE_SKINNING\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n#endif\n",
THREE.ShaderChunk.specularmap_fragment = "float specularStrength;\n#ifdef USE_SPECULARMAP\n	vec4 texelSpecular = texture2D( specularMap, vUv );\n	specularStrength = texelSpecular.r;\n#else\n	specularStrength = 1.0;\n#endif",
THREE.ShaderChunk.specularmap_pars_fragment = "#ifdef USE_SPECULARMAP\n	uniform sampler2D specularMap;\n#endif",
THREE.ShaderChunk.tonemapping_fragment = "#if defined( TONE_MAPPING )\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif\n",
THREE.ShaderChunk.tonemapping_pars_fragment = "#define saturate(a) clamp( a, 0.0, 1.0 )\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n  return toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n  color *= toneMappingExposure;\n  return saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n  color *= toneMappingExposure;\n  return saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n  color *= toneMappingExposure;\n  color = max( vec3( 0.0 ), color - 0.004 );\n  return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\n",
THREE.ShaderChunk.uv2_pars_fragment = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	varying vec2 vUv2;\n#endif",
THREE.ShaderChunk.uv2_pars_vertex = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	attribute vec2 uv2;\n	varying vec2 vUv2;\n#endif",
THREE.ShaderChunk.uv2_vertex = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	vUv2 = uv2;\n#endif",
THREE.ShaderChunk.uv_pars_fragment = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n	varying vec2 vUv;\n#endif",
THREE.ShaderChunk.uv_pars_vertex = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n	varying vec2 vUv;\n	uniform vec4 offsetRepeat;\n#endif\n",
THREE.ShaderChunk.uv_vertex = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n	vUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n#endif",
THREE.ShaderChunk.worldpos_vertex = "#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( STANDARD ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n	#ifdef USE_SKINNING\n		vec4 worldPosition = modelMatrix * skinned;\n	#else\n		vec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n	#endif\n#endif\n",
THREE.UniformsUtils = {
    merge: function(a) {
        for (var b = {}, c = 0; c < a.length; c++) {
            var d, e = this.clone(a[c]);
            for (d in e)
                b[d] = e[d]
        }
        return b
    },
    clone: function(a) {
        var b, c = {};
        for (b in a) {
            c[b] = {};
            for (var d in a[b]) {
                var e = a[b][d];
                e instanceof THREE.Color || e instanceof THREE.Vector2 || e instanceof THREE.Vector3 || e instanceof THREE.Vector4 || e instanceof THREE.Matrix3 || e instanceof THREE.Matrix4 || e instanceof THREE.Texture ? c[b][d] = e.clone() : Array.isArray(e) ? c[b][d] = e.slice() : c[b][d] = e
            }
        }
        return c
    }
},
THREE.UniformsLib = {
    common: {
        diffuse: {
            type: "c",
            value: new THREE.Color(15658734)
        },
        opacity: {
            type: "f",
            value: 1
        },
        map: {
            type: "t",
            value: null
        },
        offsetRepeat: {
            type: "v4",
            value: new THREE.Vector4(0,0,1,1)
        },
        specularMap: {
            type: "t",
            value: null
        },
        alphaMap: {
            type: "t",
            value: null
        },
        envMap: {
            type: "t",
            value: null
        },
        flipEnvMap: {
            type: "f",
            value: -1
        },
        reflectivity: {
            type: "f",
            value: 1
        },
        refractionRatio: {
            type: "f",
            value: .98
        }
    },
    aomap: {
        aoMap: {
            type: "t",
            value: null
        },
        aoMapIntensity: {
            type: "f",
            value: 1
        }
    },
    lightmap: {
        lightMap: {
            type: "t",
            value: null
        },
        lightMapIntensity: {
            type: "f",
            value: 1
        }
    },
    emissivemap: {
        emissiveMap: {
            type: "t",
            value: null
        }
    },
    bumpmap: {
        bumpMap: {
            type: "t",
            value: null
        },
        bumpScale: {
            type: "f",
            value: 1
        }
    },
    normalmap: {
        normalMap: {
            type: "t",
            value: null
        },
        normalScale: {
            type: "v2",
            value: new THREE.Vector2(1,1)
        }
    },
    displacementmap: {
        displacementMap: {
            type: "t",
            value: null
        },
        displacementScale: {
            type: "f",
            value: 1
        },
        displacementBias: {
            type: "f",
            value: 0
        }
    },
    roughnessmap: {
        roughnessMap: {
            type: "t",
            value: null
        }
    },
    metalnessmap: {
        metalnessMap: {
            type: "t",
            value: null
        }
    },
    fog: {
        fogDensity: {
            type: "f",
            value: 25e-5
        },
        fogNear: {
            type: "f",
            value: 1
        },
        fogFar: {
            type: "f",
            value: 2e3
        },
        fogColor: {
            type: "c",
            value: new THREE.Color(16777215)
        }
    },
    lights: {
        ambientLightColor: {
            type: "fv",
            value: []
        },
        directionalLights: {
            type: "sa",
            value: [],
            properties: {
                direction: {
                    type: "v3"
                },
                color: {
                    type: "c"
                },
                shadow: {
                    type: "i"
                },
                shadowBias: {
                    type: "f"
                },
                shadowRadius: {
                    type: "f"
                },
                shadowMapSize: {
                    type: "v2"
                }
            }
        },
        directionalShadowMap: {
            type: "tv",
            value: []
        },
        directionalShadowMatrix: {
            type: "m4v",
            value: []
        },
        spotLights: {
            type: "sa",
            value: [],
            properties: {
                color: {
                    type: "c"
                },
                position: {
                    type: "v3"
                },
                direction: {
                    type: "v3"
                },
                distance: {
                    type: "f"
                },
                coneCos: {
                    type: "f"
                },
                penumbraCos: {
                    type: "f"
                },
                decay: {
                    type: "f"
                },
                shadow: {
                    type: "i"
                },
                shadowBias: {
                    type: "f"
                },
                shadowRadius: {
                    type: "f"
                },
                shadowMapSize: {
                    type: "v2"
                }
            }
        },
        spotShadowMap: {
            type: "tv",
            value: []
        },
        spotShadowMatrix: {
            type: "m4v",
            value: []
        },
        pointLights: {
            type: "sa",
            value: [],
            properties: {
                color: {
                    type: "c"
                },
                position: {
                    type: "v3"
                },
                decay: {
                    type: "f"
                },
                distance: {
                    type: "f"
                },
                shadow: {
                    type: "i"
                },
                shadowBias: {
                    type: "f"
                },
                shadowRadius: {
                    type: "f"
                },
                shadowMapSize: {
                    type: "v2"
                }
            }
        },
        pointShadowMap: {
            type: "tv",
            value: []
        },
        pointShadowMatrix: {
            type: "m4v",
            value: []
        },
        hemisphereLights: {
            type: "sa",
            value: [],
            properties: {
                direction: {
                    type: "v3"
                },
                skyColor: {
                    type: "c"
                },
                groundColor: {
                    type: "c"
                }
            }
        }
    },
    points: {
        diffuse: {
            type: "c",
            value: new THREE.Color(15658734)
        },
        opacity: {
            type: "f",
            value: 1
        },
        size: {
            type: "f",
            value: 1
        },
        scale: {
            type: "f",
            value: 1
        },
        map: {
            type: "t",
            value: null
        },
        offsetRepeat: {
            type: "v4",
            value: new THREE.Vector4(0,0,1,1)
        }
    }
},
THREE.ShaderChunk.cube_frag = "uniform samplerCube tCube;\nuniform float tFlip;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n	gl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n	#include <logdepthbuf_fragment>\n}\n",
THREE.ShaderChunk.cube_vert = "varying vec3 vWorldPosition;\n#include <common>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n	vWorldPosition = transformDirection( position, modelMatrix );\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n	#include <logdepthbuf_vertex>\n}\n",
THREE.ShaderChunk.depth_frag = "uniform float mNear;\nuniform float mFar;\nuniform float opacity;\n#include <common>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n	#include <logdepthbuf_fragment>\n	#ifdef USE_LOGDEPTHBUF_EXT\n		float depth = gl_FragDepthEXT / gl_FragCoord.w;\n	#else\n		float depth = gl_FragCoord.z / gl_FragCoord.w;\n	#endif\n	float color = 1.0 - smoothstep( mNear, mFar, depth );\n	gl_FragColor = vec4( vec3( color ), opacity );\n}\n",
THREE.ShaderChunk.depth_vert = "#include <common>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n}\n",
THREE.ShaderChunk.depthRGBA_frag = "#include <common>\n#include <logdepthbuf_pars_fragment>\nvec4 pack_depth( const in float depth ) {\n	const vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );\n	const vec4 bit_mask = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );\n	vec4 res = mod( depth * bit_shift * vec4( 255 ), vec4( 256 ) ) / vec4( 255 );\n	res -= res.xxyz * bit_mask;\n	return res;\n}\nvoid main() {\n	#include <logdepthbuf_fragment>\n	#ifdef USE_LOGDEPTHBUF_EXT\n		gl_FragData[ 0 ] = pack_depth( gl_FragDepthEXT );\n	#else\n		gl_FragData[ 0 ] = pack_depth( gl_FragCoord.z );\n	#endif\n}\n",
THREE.ShaderChunk.depthRGBA_vert = "#include <common>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n	#include <skinbase_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n}\n",
THREE.ShaderChunk.distanceRGBA_frag = "uniform vec3 lightPos;\nvarying vec4 vWorldPosition;\n#include <common>\nvec4 pack1K ( float depth ) {\n	depth /= 1000.0;\n	const vec4 bitSh = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );\n	const vec4 bitMsk = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );\n	vec4 res = mod( depth * bitSh * vec4( 255 ), vec4( 256 ) ) / vec4( 255 );\n	res -= res.xxyz * bitMsk;\n	return res;\n}\nfloat unpack1K ( vec4 color ) {\n	const vec4 bitSh = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\n	return dot( color, bitSh ) * 1000.0;\n}\nvoid main () {\n	gl_FragColor = pack1K( length( vWorldPosition.xyz - lightPos.xyz ) );\n}\n",
THREE.ShaderChunk.distanceRGBA_vert = "varying vec4 vWorldPosition;\n#include <common>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\nvoid main() {\n	#include <skinbase_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	vWorldPosition = worldPosition;\n}\n",
THREE.ShaderChunk.equirect_frag = "uniform sampler2D tEquirect;\nuniform float tFlip;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n	vec3 direction = normalize( vWorldPosition );\n	vec2 sampleUV;\n	sampleUV.y = saturate( tFlip * direction.y * -0.5 + 0.5 );\n	sampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n	gl_FragColor = texture2D( tEquirect, sampleUV );\n	#include <logdepthbuf_fragment>\n}\n",
THREE.ShaderChunk.equirect_vert = "varying vec3 vWorldPosition;\n#include <common>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n	vWorldPosition = transformDirection( position, modelMatrix );\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n	#include <logdepthbuf_vertex>\n}\n",
THREE.ShaderChunk.linedashed_frag = "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n	if ( mod( vLineDistance, totalSize ) > dashSize ) {\n		discard;\n	}\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <color_fragment>\n	outgoingLight = diffuseColor.rgb;\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <premultiplied_alpha_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}\n",
THREE.ShaderChunk.linedashed_vert = "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n	#include <color_vertex>\n	vLineDistance = scale * lineDistance;\n	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n	gl_Position = projectionMatrix * mvPosition;\n	#include <logdepthbuf_vertex>\n}\n",
THREE.ShaderChunk.meshbasic_frag = "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	ReflectedLight reflectedLight;\n	reflectedLight.directDiffuse = vec3( 0.0 );\n	reflectedLight.directSpecular = vec3( 0.0 );\n	reflectedLight.indirectDiffuse = diffuseColor.rgb;\n	reflectedLight.indirectSpecular = vec3( 0.0 );\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.indirectDiffuse;\n	#include <envmap_fragment>\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <premultiplied_alpha_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}\n",
THREE.ShaderChunk.meshbasic_vert = "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <skinbase_vertex>\n	#ifdef USE_ENVMAP\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n}\n",
THREE.ShaderChunk.meshlambert_frag = "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n	varying vec3 vLightBack;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	#include <emissivemap_fragment>\n	reflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n	#include <lightmap_fragment>\n	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n	#ifdef DOUBLE_SIDED\n		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n	#else\n		reflectedLight.directDiffuse = vLightFront;\n	#endif\n	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <premultiplied_alpha_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}\n",
THREE.ShaderChunk.meshlambert_vert = "#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n	varying vec3 vLightBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <lights_lambert_vertex>\n	#include <shadowmap_vertex>\n}\n",
THREE.ShaderChunk.meshphong_frag = "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment>\n	#include <emissivemap_fragment>\n	#include <lights_phong_fragment>\n	#include <lights_template>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <premultiplied_alpha_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}\n",
THREE.ShaderChunk.meshphong_vert = "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <lights_phong_pars_vertex>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n#endif\n	#include <begin_vertex>\n	#include <displacementmap_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <lights_phong_vertex>\n	#include <shadowmap_vertex>\n}\n",
THREE.ShaderChunk.meshstandard_frag = "#define STANDARD\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\nuniform float envMapIntensity;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <lights_pars>\n#include <lights_standard_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	#include <roughnessmap_fragment>\n	#include <metalnessmap_fragment>\n	#include <normal_fragment>\n	#include <emissivemap_fragment>\n	#include <lights_standard_fragment>\n	#include <lights_template>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <premultiplied_alpha_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}\n",
THREE.ShaderChunk.meshstandard_vert = "#define STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n#endif\n	#include <begin_vertex>\n	#include <displacementmap_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n}\n",
THREE.ShaderChunk.normal_frag = "uniform float opacity;\nvarying vec3 vNormal;\n#include <common>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n	gl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );\n	#include <logdepthbuf_fragment>\n}\n",
THREE.ShaderChunk.normal_vert = "varying vec3 vNormal;\n#include <common>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n	vNormal = normalize( normalMatrix * normal );\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n}\n",
THREE.ShaderChunk.points_frag = "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_particle_fragment>\n	#include <color_fragment>\n	#include <alphatest_fragment>\n	outgoingLight = diffuseColor.rgb;\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <premultiplied_alpha_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}\n",
THREE.ShaderChunk.points_vert = "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n	#include <color_vertex>\n	#include <begin_vertex>\n	#include <project_vertex>\n	#ifdef USE_SIZEATTENUATION\n		gl_PointSize = size * ( scale / - mvPosition.z );\n	#else\n		gl_PointSize = size;\n	#endif\n	#include <logdepthbuf_vertex>\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n}\n",
THREE.ShaderLib = {
    basic: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.aomap, THREE.UniformsLib.fog]),
        vertexShader: THREE.ShaderChunk.meshbasic_vert,
        fragmentShader: THREE.ShaderChunk.meshbasic_frag
    },
    lambert: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.aomap, THREE.UniformsLib.lightmap, THREE.UniformsLib.emissivemap, THREE.UniformsLib.fog, THREE.UniformsLib.lights, {
            emissive: {
                type: "c",
                value: new THREE.Color(0)
            }
        }]),
        vertexShader: THREE.ShaderChunk.meshlambert_vert,
        fragmentShader: THREE.ShaderChunk.meshlambert_frag
    },
    phong: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.aomap, THREE.UniformsLib.lightmap, THREE.UniformsLib.emissivemap, THREE.UniformsLib.bumpmap, THREE.UniformsLib.normalmap, THREE.UniformsLib.displacementmap, THREE.UniformsLib.fog, THREE.UniformsLib.lights, {
            emissive: {
                type: "c",
                value: new THREE.Color(0)
            },
            specular: {
                type: "c",
                value: new THREE.Color(1118481)
            },
            shininess: {
                type: "f",
                value: 30
            }
        }]),
        vertexShader: THREE.ShaderChunk.meshphong_vert,
        fragmentShader: THREE.ShaderChunk.meshphong_frag
    },
    standard: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.aomap, THREE.UniformsLib.lightmap, THREE.UniformsLib.emissivemap, THREE.UniformsLib.bumpmap, THREE.UniformsLib.normalmap, THREE.UniformsLib.displacementmap, THREE.UniformsLib.roughnessmap, THREE.UniformsLib.metalnessmap, THREE.UniformsLib.fog, THREE.UniformsLib.lights, {
            emissive: {
                type: "c",
                value: new THREE.Color(0)
            },
            roughness: {
                type: "f",
                value: .5
            },
            metalness: {
                type: "f",
                value: 0
            },
            envMapIntensity: {
                type: "f",
                value: 1
            }
        }]),
        vertexShader: THREE.ShaderChunk.meshstandard_vert,
        fragmentShader: THREE.ShaderChunk.meshstandard_frag
    },
    points: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.points, THREE.UniformsLib.fog]),
        vertexShader: THREE.ShaderChunk.points_vert,
        fragmentShader: THREE.ShaderChunk.points_frag
    },
    dashed: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.fog, {
            scale: {
                type: "f",
                value: 1
            },
            dashSize: {
                type: "f",
                value: 1
            },
            totalSize: {
                type: "f",
                value: 2
            }
        }]),
        vertexShader: THREE.ShaderChunk.linedashed_vert,
        fragmentShader: THREE.ShaderChunk.linedashed_frag
    },
    depth: {
        uniforms: {
            mNear: {
                type: "f",
                value: 1
            },
            mFar: {
                type: "f",
                value: 2e3
            },
            opacity: {
                type: "f",
                value: 1
            }
        },
        vertexShader: THREE.ShaderChunk.depth_vert,
        fragmentShader: THREE.ShaderChunk.depth_frag
    },
    normal: {
        uniforms: {
            opacity: {
                type: "f",
                value: 1
            }
        },
        vertexShader: THREE.ShaderChunk.normal_vert,
        fragmentShader: THREE.ShaderChunk.normal_frag
    },
    cube: {
        uniforms: {
            tCube: {
                type: "t",
                value: null
            },
            tFlip: {
                type: "f",
                value: -1
            }
        },
        vertexShader: THREE.ShaderChunk.cube_vert,
        fragmentShader: THREE.ShaderChunk.cube_frag
    },
    equirect: {
        uniforms: {
            tEquirect: {
                type: "t",
                value: null
            },
            tFlip: {
                type: "f",
                value: -1
            }
        },
        vertexShader: THREE.ShaderChunk.equirect_vert,
        fragmentShader: THREE.ShaderChunk.equirect_frag
    },
    depthRGBA: {
        uniforms: {},
        vertexShader: THREE.ShaderChunk.depthRGBA_vert,
        fragmentShader: THREE.ShaderChunk.depthRGBA_frag
    },
    distanceRGBA: {
        uniforms: {
            lightPos: {
                type: "v3",
                value: new THREE.Vector3(0,0,0)
            }
        },
        vertexShader: THREE.ShaderChunk.distanceRGBA_vert,
        fragmentShader: THREE.ShaderChunk.distanceRGBA_frag
    }
},
THREE.WebGLRenderer = function(a) {
    function b(a, b, c, d) {
        !0 === J && (a *= d,
        b *= d,
        c *= d),
        ua.clearColor(a, b, c, d)
    }
    function c() {
        ua.init(),
        ua.scissor($.copy(ha).multiplyScalar(ga)),
        ua.viewport(aa.copy(ja).multiplyScalar(ga)),
        b(ca.r, ca.g, ca.b, da)
    }
    function d() {
        Z = U = null ,
        Y = "",
        X = -1,
        ua.reset()
    }
    function e(a) {
        a.preventDefault(),
        d(),
        c(),
        va.clear()
    }
    function f(a) {
        a = a.target,
        a.removeEventListener("dispose", f);
        a: {
            var b = va.get(a);
            if (a.image && b.__image__webglTextureCube)
                qa.deleteTexture(b.__image__webglTextureCube);
            else {
                if (void 0 === b.__webglInit)
                    break a;
                qa.deleteTexture(b.__webglTexture)
            }
            va["delete"](a)
        }
        oa.textures--
    }
    function g(a) {
        a = a.target,
        a.removeEventListener("dispose", g);
        var b = va.get(a)
          , c = va.get(a.texture);
        if (a && void 0 !== c.__webglTexture) {
            if (qa.deleteTexture(c.__webglTexture),
            a instanceof THREE.WebGLRenderTargetCube)
                for (c = 0; 6 > c; c++)
                    qa.deleteFramebuffer(b.__webglFramebuffer[c]),
                    qa.deleteRenderbuffer(b.__webglDepthbuffer[c]);
            else
                qa.deleteFramebuffer(b.__webglFramebuffer),
                qa.deleteRenderbuffer(b.__webglDepthbuffer);
            va["delete"](a.texture),
            va["delete"](a)
        }
        oa.textures--
    }
    function h(a) {
        a = a.target,
        a.removeEventListener("dispose", h),
        i(a),
        va["delete"](a)
    }
    function i(a) {
        var b = va.get(a).program;
        a.program = void 0,
        void 0 !== b && xa.releaseProgram(b)
    }
    function j(a, b) {
        return Math.abs(b[0]) - Math.abs(a[0])
    }
    function k(a, b) {
        return a.object.renderOrder !== b.object.renderOrder ? a.object.renderOrder - b.object.renderOrder : a.material.id !== b.material.id ? a.material.id - b.material.id : a.z !== b.z ? a.z - b.z : a.id - b.id
    }
    function l(a, b) {
        return a.object.renderOrder !== b.object.renderOrder ? a.object.renderOrder - b.object.renderOrder : a.z !== b.z ? b.z - a.z : a.id - b.id
    }
    function m(a, b, c, d, e) {
        var f;
        c.transparent ? (d = O,
        f = ++P) : (d = M,
        f = ++N),
        f = d[f],
        void 0 !== f ? (f.id = a.id,
        f.object = a,
        f.geometry = b,
        f.material = c,
        f.z = ma.z,
        f.group = e) : (f = {
            id: a.id,
            object: a,
            geometry: b,
            material: c,
            z: ma.z,
            group: e
        },
        d.push(f))
    }
    function n(a, b) {
        if (!1 !== a.visible) {
            if (a.layers.test(b.layers))
                if (a instanceof THREE.Light)
                    L.push(a);
                else if (a instanceof THREE.Sprite)
                    !1 !== a.frustumCulled && !0 !== ka.intersectsObject(a) || R.push(a);
                else if (a instanceof THREE.LensFlare)
                    S.push(a);
                else if (a instanceof THREE.ImmediateRenderObject)
                    !0 === T.sortObjects && (ma.setFromMatrixPosition(a.matrixWorld),
                    ma.applyProjection(la)),
                    m(a, null , a.material, ma.z, null );
                else if ((a instanceof THREE.Mesh || a instanceof THREE.Line || a instanceof THREE.Points) && (a instanceof THREE.SkinnedMesh && a.skeleton.update(),
                !1 === a.frustumCulled || !0 === ka.intersectsObject(a))) {
                    var c = a.material;
                    if (!0 === c.visible) {
                        !0 === T.sortObjects && (ma.setFromMatrixPosition(a.matrixWorld),
                        ma.applyProjection(la));
                        var d = wa.update(a);
                        if (c instanceof THREE.MultiMaterial)
                            for (var e = d.groups, f = c.materials, c = 0, g = e.length; g > c; c++) {
                                var h = e[c]
                                  , i = f[h.materialIndex];
                                !0 === i.visible && m(a, d, i, ma.z, h)
                            }
                        else
                            m(a, d, c, ma.z, null )
                    }
                }
            for (d = a.children,
            c = 0,
            g = d.length; g > c; c++)
                n(d[c], b)
        }
    }
    function o(a, b, c, d) {
        for (var e = 0, f = a.length; f > e; e++) {
            var g = a[e]
              , h = g.object
              , i = g.geometry
              , j = void 0 === d ? g.material : d
              , g = g.group;
            if (h.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse, h.matrixWorld),
            h.normalMatrix.getNormalMatrix(h.modelViewMatrix),
            h instanceof THREE.ImmediateRenderObject) {
                p(j);
                var k = q(b, c, j, h);
                Y = "",
                h.render(function(a) {
                    T.renderBufferImmediate(a, k, j)
                })
            } else
                T.renderBufferDirect(b, c, i, j, h, g)
        }
    }
    function p(a) {
        a.side !== THREE.DoubleSide ? ua.enable(qa.CULL_FACE) : ua.disable(qa.CULL_FACE),
        ua.setFlipSided(a.side === THREE.BackSide),
        !0 === a.transparent ? ua.setBlending(a.blending, a.blendEquation, a.blendSrc, a.blendDst, a.blendEquationAlpha, a.blendSrcAlpha, a.blendDstAlpha, a.premultipliedAlpha) : ua.setBlending(THREE.NoBlending),
        ua.setDepthFunc(a.depthFunc),
        ua.setDepthTest(a.depthTest),
        ua.setDepthWrite(a.depthWrite),
        ua.setColorWrite(a.colorWrite),
        ua.setPolygonOffset(a.polygonOffset, a.polygonOffsetFactor, a.polygonOffsetUnits)
    }
    function q(a, b, c, d) {
        ba = 0;
        var e = va.get(c);
        if (void 0 === e.program && (c.needsUpdate = !0),
        void 0 !== e.lightsHash && e.lightsHash !== na.hash && (c.needsUpdate = !0),
        c.needsUpdate) {
            a: {
                var f = va.get(c)
                  , g = xa.getParameters(c, na, b, d)
                  , j = xa.getProgramCode(c, g)
                  , k = f.program
                  , l = !0;
                if (void 0 === k)
                    c.addEventListener("dispose", h);
                else if (k.code !== j)
                    i(c);
                else {
                    if (void 0 !== g.shaderID)
                        break a;
                    l = !1
                }
                if (l && (g.shaderID ? (k = THREE.ShaderLib[g.shaderID],
                f.__webglShader = {
                    name: c.type,
                    uniforms: THREE.UniformsUtils.clone(k.uniforms),
                    vertexShader: k.vertexShader,
                    fragmentShader: k.fragmentShader
                }) : f.__webglShader = {
                    name: c.type,
                    uniforms: c.uniforms,
                    vertexShader: c.vertexShader,
                    fragmentShader: c.fragmentShader
                },
                c.__webglShader = f.__webglShader,
                k = xa.acquireProgram(c, g, j),
                f.program = k,
                c.program = k),
                g = k.getAttributes(),
                c.morphTargets)
                    for (j = c.numSupportedMorphTargets = 0; j < T.maxMorphTargets; j++)
                        0 <= g["morphTarget" + j] && c.numSupportedMorphTargets++;
                if (c.morphNormals)
                    for (j = c.numSupportedMorphNormals = 0; j < T.maxMorphNormals; j++)
                        0 <= g["morphNormal" + j] && c.numSupportedMorphNormals++;
                f.uniformsList = [];
                var m, g = f.__webglShader.uniforms, j = f.program.getUniforms();
                for (m in g)
                    (k = j[m]) && f.uniformsList.push([f.__webglShader.uniforms[m], k]);
                for ((c instanceof THREE.MeshPhongMaterial || c instanceof THREE.MeshLambertMaterial || c instanceof THREE.MeshStandardMaterial || c.lights) && (f.lightsHash = na.hash,
                g.ambientLightColor.value = na.ambient,
                g.directionalLights.value = na.directional,
                g.spotLights.value = na.spot,
                g.pointLights.value = na.point,
                g.hemisphereLights.value = na.hemi,
                g.directionalShadowMap.value = na.directionalShadowMap,
                g.directionalShadowMatrix.value = na.directionalShadowMatrix,
                g.spotShadowMap.value = na.spotShadowMap,
                g.spotShadowMatrix.value = na.spotShadowMatrix,
                g.pointShadowMap.value = na.pointShadowMap,
                g.pointShadowMatrix.value = na.pointShadowMatrix),
                f.hasDynamicUniforms = !1,
                m = 0,
                g = f.uniformsList.length; g > m; m++)
                    if (!0 === f.uniformsList[m][0].dynamic) {
                        f.hasDynamicUniforms = !0;
                        break
                    }
            }
            c.needsUpdate = !1
        }
        if (k = j = l = !1,
        f = e.program,
        m = f.getUniforms(),
        g = e.__webglShader.uniforms,
        f.id !== U && (qa.useProgram(f.program),
        U = f.id,
        k = j = l = !0),
        c.id !== X && (X = c.id,
        j = !0),
        (l || a !== Z) && (qa.uniformMatrix4fv(m.projectionMatrix, !1, a.projectionMatrix.elements),
        ta.logarithmicDepthBuffer && qa.uniform1f(m.logDepthBufFC, 2 / (Math.log(a.far + 1) / Math.LN2)),
        a !== Z && (Z = a,
        k = j = !0),
        (c instanceof THREE.ShaderMaterial || c instanceof THREE.MeshPhongMaterial || c instanceof THREE.MeshStandardMaterial || c.envMap) && void 0 !== m.cameraPosition && (ma.setFromMatrixPosition(a.matrixWorld),
        qa.uniform3f(m.cameraPosition, ma.x, ma.y, ma.z)),
        (c instanceof THREE.MeshPhongMaterial || c instanceof THREE.MeshLambertMaterial || c instanceof THREE.MeshBasicMaterial || c instanceof THREE.MeshStandardMaterial || c instanceof THREE.ShaderMaterial || c.skinning) && void 0 !== m.viewMatrix && qa.uniformMatrix4fv(m.viewMatrix, !1, a.matrixWorldInverse.elements),
        void 0 !== m.toneMappingExposure && qa.uniform1f(m.toneMappingExposure, T.toneMappingExposure),
        void 0 !== m.toneMappingWhitePoint && qa.uniform1f(m.toneMappingWhitePoint, T.toneMappingWhitePoint)),
        c.skinning && (d.bindMatrix && void 0 !== m.bindMatrix && qa.uniformMatrix4fv(m.bindMatrix, !1, d.bindMatrix.elements),
        d.bindMatrixInverse && void 0 !== m.bindMatrixInverse && qa.uniformMatrix4fv(m.bindMatrixInverse, !1, d.bindMatrixInverse.elements),
        ta.floatVertexTextures && d.skeleton && d.skeleton.useVertexTexture ? (void 0 !== m.boneTexture && (l = r(),
        qa.uniform1i(m.boneTexture, l),
        T.setTexture(d.skeleton.boneTexture, l)),
        void 0 !== m.boneTextureWidth && qa.uniform1i(m.boneTextureWidth, d.skeleton.boneTextureWidth),
        void 0 !== m.boneTextureHeight && qa.uniform1i(m.boneTextureHeight, d.skeleton.boneTextureHeight)) : d.skeleton && d.skeleton.boneMatrices && void 0 !== m.boneGlobalMatrices && qa.uniformMatrix4fv(m.boneGlobalMatrices, !1, d.skeleton.boneMatrices)),
        j) {
            if ((c instanceof THREE.MeshPhongMaterial || c instanceof THREE.MeshLambertMaterial || c instanceof THREE.MeshStandardMaterial || c.lights) && (j = k,
            g.ambientLightColor.needsUpdate = j,
            g.directionalLights.needsUpdate = j,
            g.pointLights.needsUpdate = j,
            g.spotLights.needsUpdate = j,
            g.hemisphereLights.needsUpdate = j),
            b && c.fog && (g.fogColor.value = b.color,
            b instanceof THREE.Fog ? (g.fogNear.value = b.near,
            g.fogFar.value = b.far) : b instanceof THREE.FogExp2 && (g.fogDensity.value = b.density)),
            c instanceof THREE.MeshBasicMaterial || c instanceof THREE.MeshLambertMaterial || c instanceof THREE.MeshPhongMaterial || c instanceof THREE.MeshStandardMaterial) {
                g.opacity.value = c.opacity,
                g.diffuse.value = c.color,
                c.emissive && g.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),
                g.map.value = c.map,
                g.specularMap.value = c.specularMap,
                g.alphaMap.value = c.alphaMap,
                c.aoMap && (g.aoMap.value = c.aoMap,
                g.aoMapIntensity.value = c.aoMapIntensity);
                var n;
                c.map ? n = c.map : c.specularMap ? n = c.specularMap : c.displacementMap ? n = c.displacementMap : c.normalMap ? n = c.normalMap : c.bumpMap ? n = c.bumpMap : c.roughnessMap ? n = c.roughnessMap : c.metalnessMap ? n = c.metalnessMap : c.alphaMap ? n = c.alphaMap : c.emissiveMap && (n = c.emissiveMap),
                void 0 !== n && (n instanceof THREE.WebGLRenderTarget && (n = n.texture),
                b = n.offset,
                n = n.repeat,
                g.offsetRepeat.value.set(b.x, b.y, n.x, n.y)),
                g.envMap.value = c.envMap,
                g.flipEnvMap.value = c.envMap instanceof THREE.WebGLRenderTargetCube ? 1 : -1,
                g.reflectivity.value = c.reflectivity,
                g.refractionRatio.value = c.refractionRatio
            }
            c instanceof THREE.LineBasicMaterial ? (g.diffuse.value = c.color,
            g.opacity.value = c.opacity) : c instanceof THREE.LineDashedMaterial ? (g.diffuse.value = c.color,
            g.opacity.value = c.opacity,
            g.dashSize.value = c.dashSize,
            g.totalSize.value = c.dashSize + c.gapSize,
            g.scale.value = c.scale) : c instanceof THREE.PointsMaterial ? (g.diffuse.value = c.color,
            g.opacity.value = c.opacity,
            g.size.value = c.size * ga,
            g.scale.value = D.clientHeight / 2,
            g.map.value = c.map,
            null !== c.map && (n = c.map.offset,
            c = c.map.repeat,
            g.offsetRepeat.value.set(n.x, n.y, c.x, c.y))) : c instanceof THREE.MeshLambertMaterial ? (c.lightMap && (g.lightMap.value = c.lightMap,
            g.lightMapIntensity.value = c.lightMapIntensity),
            c.emissiveMap && (g.emissiveMap.value = c.emissiveMap)) : c instanceof THREE.MeshPhongMaterial ? (g.specular.value = c.specular,
            g.shininess.value = Math.max(c.shininess, 1e-4),
            c.lightMap && (g.lightMap.value = c.lightMap,
            g.lightMapIntensity.value = c.lightMapIntensity),
            c.emissiveMap && (g.emissiveMap.value = c.emissiveMap),
            c.bumpMap && (g.bumpMap.value = c.bumpMap,
            g.bumpScale.value = c.bumpScale),
            c.normalMap && (g.normalMap.value = c.normalMap,
            g.normalScale.value.copy(c.normalScale)),
            c.displacementMap && (g.displacementMap.value = c.displacementMap,
            g.displacementScale.value = c.displacementScale,
            g.displacementBias.value = c.displacementBias)) : c instanceof THREE.MeshStandardMaterial ? (g.roughness.value = c.roughness,
            g.metalness.value = c.metalness,
            c.roughnessMap && (g.roughnessMap.value = c.roughnessMap),
            c.metalnessMap && (g.metalnessMap.value = c.metalnessMap),
            c.lightMap && (g.lightMap.value = c.lightMap,
            g.lightMapIntensity.value = c.lightMapIntensity),
            c.emissiveMap && (g.emissiveMap.value = c.emissiveMap),
            c.bumpMap && (g.bumpMap.value = c.bumpMap,
            g.bumpScale.value = c.bumpScale),
            c.normalMap && (g.normalMap.value = c.normalMap,
            g.normalScale.value.copy(c.normalScale)),
            c.displacementMap && (g.displacementMap.value = c.displacementMap,
            g.displacementScale.value = c.displacementScale,
            g.displacementBias.value = c.displacementBias),
            c.envMap && (g.envMapIntensity.value = c.envMapIntensity)) : c instanceof THREE.MeshDepthMaterial ? (g.mNear.value = a.near,
            g.mFar.value = a.far,
            g.opacity.value = c.opacity) : c instanceof THREE.MeshNormalMaterial && (g.opacity.value = c.opacity),
            t(e.uniformsList)
        }
        if (qa.uniformMatrix4fv(m.modelViewMatrix, !1, d.modelViewMatrix.elements),
        m.normalMatrix && qa.uniformMatrix3fv(m.normalMatrix, !1, d.normalMatrix.elements),
        void 0 !== m.modelMatrix && qa.uniformMatrix4fv(m.modelMatrix, !1, d.matrixWorld.elements),
        !0 === e.hasDynamicUniforms) {
            for (e = e.uniformsList,
            c = [],
            n = 0,
            b = e.length; b > n; n++)
                m = e[n][0],
                g = m.onUpdateCallback,
                void 0 !== g && (g.bind(m)(d, a),
                c.push(e[n]));
            t(c)
        }
        return f
    }
    function r() {
        var a = ba;
        return a >= ta.maxTextures && console.warn("WebGLRenderer: trying to use " + a + " texture units while this GPU supports only " + ta.maxTextures),
        ba += 1,
        a
    }
    function s(a, b, c, d) {
        var e;
        if ("1i" === b)
            qa.uniform1i(c, d);
        else if ("1f" === b)
            qa.uniform1f(c, d);
        else if ("2f" === b)
            qa.uniform2f(c, d[0], d[1]);
        else if ("3f" === b)
            qa.uniform3f(c, d[0], d[1], d[2]);
        else if ("4f" === b)
            qa.uniform4f(c, d[0], d[1], d[2], d[3]);
        else if ("1iv" === b)
            qa.uniform1iv(c, d);
        else if ("3iv" === b)
            qa.uniform3iv(c, d);
        else if ("1fv" === b)
            qa.uniform1fv(c, d);
        else if ("2fv" === b)
            qa.uniform2fv(c, d);
        else if ("3fv" === b)
            qa.uniform3fv(c, d);
        else if ("4fv" === b)
            qa.uniform4fv(c, d);
        else if ("Matrix2fv" === b)
            qa.uniformMatrix2fv(c, !1, d);
        else if ("Matrix3fv" === b)
            qa.uniformMatrix3fv(c, !1, d);
        else if ("Matrix4fv" === b)
            qa.uniformMatrix4fv(c, !1, d);
        else if ("i" === b)
            qa.uniform1i(c, d);
        else if ("f" === b)
            qa.uniform1f(c, d);
        else if ("v2" === b)
            qa.uniform2f(c, d.x, d.y);
        else if ("v3" === b)
            qa.uniform3f(c, d.x, d.y, d.z);
        else if ("v4" === b)
            qa.uniform4f(c, d.x, d.y, d.z, d.w);
        else if ("c" === b)
            qa.uniform3f(c, d.r, d.g, d.b);
        else if ("s" === b) {
            a = a.properties;
            for (var f in a) {
                e = a[f];
                var g = c[f]
                  , h = d[f];
                s(e, e.type, g, h)
            }
        } else if ("sa" === b) {
            a = a.properties,
            b = 0;
            for (var i = d.length; i > b; b++)
                for (f in a)
                    e = a[f],
                    g = c[b][f],
                    h = d[b][f],
                    s(e, e.type, g, h)
        } else if ("iv1" === b)
            qa.uniform1iv(c, d);
        else if ("iv" === b)
            qa.uniform3iv(c, d);
        else if ("fv1" === b)
            qa.uniform1fv(c, d);
        else if ("fv" === b)
            qa.uniform3fv(c, d);
        else if ("v2v" === b) {
            for (void 0 === a._array && (a._array = new Float32Array(2 * d.length)),
            e = b = 0,
            f = d.length; f > b; b++,
            e += 2)
                a._array[e + 0] = d[b].x,
                a._array[e + 1] = d[b].y;
            qa.uniform2fv(c, a._array)
        } else if ("v3v" === b) {
            for (void 0 === a._array && (a._array = new Float32Array(3 * d.length)),
            e = b = 0,
            f = d.length; f > b; b++,
            e += 3)
                a._array[e + 0] = d[b].x,
                a._array[e + 1] = d[b].y,
                a._array[e + 2] = d[b].z;
            qa.uniform3fv(c, a._array)
        } else if ("v4v" === b) {
            for (void 0 === a._array && (a._array = new Float32Array(4 * d.length)),
            e = b = 0,
            f = d.length; f > b; b++,
            e += 4)
                a._array[e + 0] = d[b].x,
                a._array[e + 1] = d[b].y,
                a._array[e + 2] = d[b].z,
                a._array[e + 3] = d[b].w;
            qa.uniform4fv(c, a._array)
        } else if ("m2" === b)
            qa.uniformMatrix2fv(c, !1, d.elements);
        else if ("m3" === b)
            qa.uniformMatrix3fv(c, !1, d.elements);
        else if ("m3v" === b) {
            for (void 0 === a._array && (a._array = new Float32Array(9 * d.length)),
            b = 0,
            f = d.length; f > b; b++)
                d[b].flattenToArrayOffset(a._array, 9 * b);
            qa.uniformMatrix3fv(c, !1, a._array)
        } else if ("m4" === b)
            qa.uniformMatrix4fv(c, !1, d.elements);
        else if ("m4v" === b) {
            for (void 0 === a._array && (a._array = new Float32Array(16 * d.length)),
            b = 0,
            f = d.length; f > b; b++)
                d[b].flattenToArrayOffset(a._array, 16 * b);
            qa.uniformMatrix4fv(c, !1, a._array)
        } else if ("t" === b)
            e = r(),
            qa.uniform1i(c, e),
            d && (d instanceof THREE.CubeTexture || Array.isArray(d.image) && 6 === d.image.length ? x(d, e) : d instanceof THREE.WebGLRenderTargetCube ? y(d.texture, e) : d instanceof THREE.WebGLRenderTarget ? T.setTexture(d.texture, e) : T.setTexture(d, e));
        else if ("tv" === b) {
            for (void 0 === a._array && (a._array = []),
            b = 0,
            f = a.value.length; f > b; b++)
                a._array[b] = r();
            for (qa.uniform1iv(c, a._array),
            b = 0,
            f = a.value.length; f > b; b++)
                d = a.value[b],
                e = a._array[b],
                d && (d instanceof THREE.CubeTexture || d.image instanceof Array && 6 === d.image.length ? x(d, e) : d instanceof THREE.WebGLRenderTarget ? T.setTexture(d.texture, e) : d instanceof THREE.WebGLRenderTargetCube ? y(d.texture, e) : T.setTexture(d, e))
        } else
            console.warn("THREE.WebGLRenderer: Unknown uniform type: " + b)
    }
    function t(a) {
        for (var b = 0, c = a.length; c > b; b++) {
            var d = a[b][0];
            !1 !== d.needsUpdate && s(d, d.type, a[b][1], d.value)
        }
    }
    function u(a, b, c) {
        c ? (qa.texParameteri(a, qa.TEXTURE_WRAP_S, C(b.wrapS)),
        qa.texParameteri(a, qa.TEXTURE_WRAP_T, C(b.wrapT)),
        qa.texParameteri(a, qa.TEXTURE_MAG_FILTER, C(b.magFilter)),
        qa.texParameteri(a, qa.TEXTURE_MIN_FILTER, C(b.minFilter))) : (qa.texParameteri(a, qa.TEXTURE_WRAP_S, qa.CLAMP_TO_EDGE),
        qa.texParameteri(a, qa.TEXTURE_WRAP_T, qa.CLAMP_TO_EDGE),
        b.wrapS === THREE.ClampToEdgeWrapping && b.wrapT === THREE.ClampToEdgeWrapping || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.", b),
        qa.texParameteri(a, qa.TEXTURE_MAG_FILTER, B(b.magFilter)),
        qa.texParameteri(a, qa.TEXTURE_MIN_FILTER, B(b.minFilter)),
        b.minFilter !== THREE.NearestFilter && b.minFilter !== THREE.LinearFilter && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.", b)),
        !(c = sa.get("EXT_texture_filter_anisotropic")) || b.type === THREE.FloatType && null === sa.get("OES_texture_float_linear") || b.type === THREE.HalfFloatType && null === sa.get("OES_texture_half_float_linear") || !(1 < b.anisotropy || va.get(b).__currentAnisotropy) || (qa.texParameterf(a, c.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(b.anisotropy, T.getMaxAnisotropy())),
        va.get(b).__currentAnisotropy = b.anisotropy)
    }
    function v(a, b) {
        if (a.width > b || a.height > b) {
            var c = b / Math.max(a.width, a.height)
              , d = document.createElement("canvas");
            return d.width = Math.floor(a.width * c),
            d.height = Math.floor(a.height * c),
            d.getContext("2d").drawImage(a, 0, 0, a.width, a.height, 0, 0, d.width, d.height),
            console.warn("THREE.WebGLRenderer: image is too big (" + a.width + "x" + a.height + "). Resized to " + d.width + "x" + d.height, a),
            d
        }
        return a
    }
    function w(a) {
        return THREE.Math.isPowerOfTwo(a.width) && THREE.Math.isPowerOfTwo(a.height)
    }
    function x(a, b) {
        var c = va.get(a);
        if (6 === a.image.length)
            if (0 < a.version && c.__version !== a.version) {
                c.__image__webglTextureCube || (a.addEventListener("dispose", f),
                c.__image__webglTextureCube = qa.createTexture(),
                oa.textures++),
                ua.activeTexture(qa.TEXTURE0 + b),
                ua.bindTexture(qa.TEXTURE_CUBE_MAP, c.__image__webglTextureCube),
                qa.pixelStorei(qa.UNPACK_FLIP_Y_WEBGL, a.flipY);
                for (var d = a instanceof THREE.CompressedTexture, e = a.image[0]instanceof THREE.DataTexture, g = [], h = 0; 6 > h; h++)
                    g[h] = !T.autoScaleCubemaps || d || e ? e ? a.image[h].image : a.image[h] : v(a.image[h], ta.maxCubemapSize);
                var i = w(g[0])
                  , j = C(a.format)
                  , k = C(a.type);
                for (u(qa.TEXTURE_CUBE_MAP, a, i),
                h = 0; 6 > h; h++)
                    if (d)
                        for (var l, m = g[h].mipmaps, n = 0, o = m.length; o > n; n++)
                            l = m[n],
                            a.format !== THREE.RGBAFormat && a.format !== THREE.RGBFormat ? -1 < ua.getCompressedTextureFormats().indexOf(j) ? ua.compressedTexImage2D(qa.TEXTURE_CUBE_MAP_POSITIVE_X + h, n, j, l.width, l.height, 0, l.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setCubeTexture()") : ua.texImage2D(qa.TEXTURE_CUBE_MAP_POSITIVE_X + h, n, j, l.width, l.height, 0, j, k, l.data);
                    else
                        e ? ua.texImage2D(qa.TEXTURE_CUBE_MAP_POSITIVE_X + h, 0, j, g[h].width, g[h].height, 0, j, k, g[h].data) : ua.texImage2D(qa.TEXTURE_CUBE_MAP_POSITIVE_X + h, 0, j, j, k, g[h]);
                a.generateMipmaps && i && qa.generateMipmap(qa.TEXTURE_CUBE_MAP),
                c.__version = a.version,
                a.onUpdate && a.onUpdate(a)
            } else
                ua.activeTexture(qa.TEXTURE0 + b),
                ua.bindTexture(qa.TEXTURE_CUBE_MAP, c.__image__webglTextureCube)
    }
    function y(a, b) {
        ua.activeTexture(qa.TEXTURE0 + b),
        ua.bindTexture(qa.TEXTURE_CUBE_MAP, va.get(a).__webglTexture)
    }
    function z(a, b, c, d) {
        var e = C(b.texture.format)
          , f = C(b.texture.type);
        ua.texImage2D(d, 0, e, b.width, b.height, 0, e, f, null ),
        qa.bindFramebuffer(qa.FRAMEBUFFER, a),
        qa.framebufferTexture2D(qa.FRAMEBUFFER, c, d, va.get(b.texture).__webglTexture, 0),
        qa.bindFramebuffer(qa.FRAMEBUFFER, null )
    }
    function A(a, b) {
        qa.bindRenderbuffer(qa.RENDERBUFFER, a),
        b.depthBuffer && !b.stencilBuffer ? (qa.renderbufferStorage(qa.RENDERBUFFER, qa.DEPTH_COMPONENT16, b.width, b.height),
        qa.framebufferRenderbuffer(qa.FRAMEBUFFER, qa.DEPTH_ATTACHMENT, qa.RENDERBUFFER, a)) : b.depthBuffer && b.stencilBuffer ? (qa.renderbufferStorage(qa.RENDERBUFFER, qa.DEPTH_STENCIL, b.width, b.height),
        qa.framebufferRenderbuffer(qa.FRAMEBUFFER, qa.DEPTH_STENCIL_ATTACHMENT, qa.RENDERBUFFER, a)) : qa.renderbufferStorage(qa.RENDERBUFFER, qa.RGBA4, b.width, b.height),
        qa.bindRenderbuffer(qa.RENDERBUFFER, null )
    }
    function B(a) {
        return a === THREE.NearestFilter || a === THREE.NearestMipMapNearestFilter || a === THREE.NearestMipMapLinearFilter ? qa.NEAREST : qa.LINEAR
    }
    function C(a) {
        var b;
        if (a === THREE.RepeatWrapping)
            return qa.REPEAT;
        if (a === THREE.ClampToEdgeWrapping)
            return qa.CLAMP_TO_EDGE;
        if (a === THREE.MirroredRepeatWrapping)
            return qa.MIRRORED_REPEAT;
        if (a === THREE.NearestFilter)
            return qa.NEAREST;
        if (a === THREE.NearestMipMapNearestFilter)
            return qa.NEAREST_MIPMAP_NEAREST;
        if (a === THREE.NearestMipMapLinearFilter)
            return qa.NEAREST_MIPMAP_LINEAR;
        if (a === THREE.LinearFilter)
            return qa.LINEAR;
        if (a === THREE.LinearMipMapNearestFilter)
            return qa.LINEAR_MIPMAP_NEAREST;
        if (a === THREE.LinearMipMapLinearFilter)
            return qa.LINEAR_MIPMAP_LINEAR;
        if (a === THREE.UnsignedByteType)
            return qa.UNSIGNED_BYTE;
        if (a === THREE.UnsignedShort4444Type)
            return qa.UNSIGNED_SHORT_4_4_4_4;
        if (a === THREE.UnsignedShort5551Type)
            return qa.UNSIGNED_SHORT_5_5_5_1;
        if (a === THREE.UnsignedShort565Type)
            return qa.UNSIGNED_SHORT_5_6_5;
        if (a === THREE.ByteType)
            return qa.BYTE;
        if (a === THREE.ShortType)
            return qa.SHORT;
        if (a === THREE.UnsignedShortType)
            return qa.UNSIGNED_SHORT;
        if (a === THREE.IntType)
            return qa.INT;
        if (a === THREE.UnsignedIntType)
            return qa.UNSIGNED_INT;
        if (a === THREE.FloatType)
            return qa.FLOAT;
        if (b = sa.get("OES_texture_half_float"),
        null !== b && a === THREE.HalfFloatType)
            return b.HALF_FLOAT_OES;
        if (a === THREE.AlphaFormat)
            return qa.ALPHA;
        if (a === THREE.RGBFormat)
            return qa.RGB;
        if (a === THREE.RGBAFormat)
            return qa.RGBA;
        if (a === THREE.LuminanceFormat)
            return qa.LUMINANCE;
        if (a === THREE.LuminanceAlphaFormat)
            return qa.LUMINANCE_ALPHA;
        if (a === THREE.AddEquation)
            return qa.FUNC_ADD;
        if (a === THREE.SubtractEquation)
            return qa.FUNC_SUBTRACT;
        if (a === THREE.ReverseSubtractEquation)
            return qa.FUNC_REVERSE_SUBTRACT;
        if (a === THREE.ZeroFactor)
            return qa.ZERO;
        if (a === THREE.OneFactor)
            return qa.ONE;
        if (a === THREE.SrcColorFactor)
            return qa.SRC_COLOR;
        if (a === THREE.OneMinusSrcColorFactor)
            return qa.ONE_MINUS_SRC_COLOR;
        if (a === THREE.SrcAlphaFactor)
            return qa.SRC_ALPHA;
        if (a === THREE.OneMinusSrcAlphaFactor)
            return qa.ONE_MINUS_SRC_ALPHA;
        if (a === THREE.DstAlphaFactor)
            return qa.DST_ALPHA;
        if (a === THREE.OneMinusDstAlphaFactor)
            return qa.ONE_MINUS_DST_ALPHA;
        if (a === THREE.DstColorFactor)
            return qa.DST_COLOR;
        if (a === THREE.OneMinusDstColorFactor)
            return qa.ONE_MINUS_DST_COLOR;
        if (a === THREE.SrcAlphaSaturateFactor)
            return qa.SRC_ALPHA_SATURATE;
        if (b = sa.get("WEBGL_compressed_texture_s3tc"),
        null !== b) {
            if (a === THREE.RGB_S3TC_DXT1_Format)
                return b.COMPRESSED_RGB_S3TC_DXT1_EXT;
            if (a === THREE.RGBA_S3TC_DXT1_Format)
                return b.COMPRESSED_RGBA_S3TC_DXT1_EXT;
            if (a === THREE.RGBA_S3TC_DXT3_Format)
                return b.COMPRESSED_RGBA_S3TC_DXT3_EXT;
            if (a === THREE.RGBA_S3TC_DXT5_Format)
                return b.COMPRESSED_RGBA_S3TC_DXT5_EXT
        }
        if (b = sa.get("WEBGL_compressed_texture_pvrtc"),
        null !== b) {
            if (a === THREE.RGB_PVRTC_4BPPV1_Format)
                return b.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
            if (a === THREE.RGB_PVRTC_2BPPV1_Format)
                return b.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
            if (a === THREE.RGBA_PVRTC_4BPPV1_Format)
                return b.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
            if (a === THREE.RGBA_PVRTC_2BPPV1_Format)
                return b.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
        }
        if (b = sa.get("WEBGL_compressed_texture_etc1"),
        null !== b && a === THREE.RGB_ETC1_Format)
            return b.COMPRESSED_RGB_ETC1_WEBGL;
        if (b = sa.get("EXT_blend_minmax"),
        null !== b) {
            if (a === THREE.MinEquation)
                return b.MIN_EXT;
            if (a === THREE.MaxEquation)
                return b.MAX_EXT
        }
        return 0
    }
    console.log("THREE.WebGLRenderer", THREE.REVISION),
    a = a || {};
    var D = void 0 !== a.canvas ? a.canvas : document.createElement("canvas")
      , E = void 0 !== a.context ? a.context : null
      , F = void 0 !== a.alpha ? a.alpha : !1
      , G = void 0 !== a.depth ? a.depth : !0
      , H = void 0 !== a.stencil ? a.stencil : !0
      , I = void 0 !== a.antialias ? a.antialias : !1
      , J = void 0 !== a.premultipliedAlpha ? a.premultipliedAlpha : !0
      , K = void 0 !== a.preserveDrawingBuffer ? a.preserveDrawingBuffer : !1
      , L = []
      , M = []
      , N = -1
      , O = []
      , P = -1
      , Q = new Float32Array(8)
      , R = []
      , S = [];
    this.domElement = D,
    this.context = null ,
    this.sortObjects = this.autoClearStencil = this.autoClearDepth = this.autoClearColor = this.autoClear = !0,
    this.gammaFactor = 2,
    this.physicallyCorrectLights = this.gammaOutput = this.gammaInput = !1,
    this.toneMapping = THREE.LinearToneMapping,
    this.toneMappingWhitePoint = this.toneMappingExposure = 1,
    this.maxMorphTargets = 8,
    this.maxMorphNormals = 4,
    this.autoScaleCubemaps = !0;
    var T = this
      , U = null
      , V = null
      , W = null
      , X = -1
      , Y = ""
      , Z = null
      , $ = new THREE.Vector4
      , _ = null
      , aa = new THREE.Vector4
      , ba = 0
      , ca = new THREE.Color(0)
      , da = 0
      , ea = D.width
      , fa = D.height
      , ga = 1
      , ha = new THREE.Vector4(0,0,ea,fa)
      , ia = !1
      , ja = new THREE.Vector4(0,0,ea,fa)
      , ka = new THREE.Frustum
      , la = new THREE.Matrix4
      , ma = new THREE.Vector3
      , na = {
        hash: "",
        ambient: [0, 0, 0],
        directional: [],
        directionalShadowMap: [],
        directionalShadowMatrix: [],
        spot: [],
        spotShadowMap: [],
        spotShadowMatrix: [],
        point: [],
        pointShadowMap: [],
        pointShadowMatrix: [],
        hemi: [],
        shadows: [],
        shadowsPointLight: 0
    }
      , oa = {
        geometries: 0,
        textures: 0
    }
      , pa = {
        calls: 0,
        vertices: 0,
        faces: 0,
        points: 0
    };
    this.info = {
        render: pa,
        memory: oa,
        programs: null
    };
    var qa;
    try {
        if (F = {
            alpha: F,
            depth: G,
            stencil: H,
            antialias: I,
            premultipliedAlpha: J,
            preserveDrawingBuffer: K
        },
        qa = E || D.getContext("webgl", F) || D.getContext("experimental-webgl", F),
        null === qa) {
            if (null !== D.getContext("webgl"))
                throw "Error creating WebGL context with your selected attributes.";
            throw "Error creating WebGL context."
        }
        void 0 === qa.getShaderPrecisionFormat && (qa.getShaderPrecisionFormat = function() {
            return {
                rangeMin: 1,
                rangeMax: 1,
                precision: 1
            }
        }
        ),
        D.addEventListener("webglcontextlost", e, !1)
    } catch (ra) {
        console.error("THREE.WebGLRenderer: " + ra)
    }
    var sa = new THREE.WebGLExtensions(qa);
    sa.get("OES_texture_float"),
    sa.get("OES_texture_float_linear"),
    sa.get("OES_texture_half_float"),
    sa.get("OES_texture_half_float_linear"),
    sa.get("OES_standard_derivatives"),
    sa.get("ANGLE_instanced_arrays"),
    sa.get("OES_element_index_uint") && (THREE.BufferGeometry.MaxIndex = 4294967296);
    var ta = new THREE.WebGLCapabilities(qa,sa,a)
      , ua = new THREE.WebGLState(qa,sa,C)
      , va = new THREE.WebGLProperties
      , wa = new THREE.WebGLObjects(qa,va,this.info)
      , xa = new THREE.WebGLPrograms(this,ta)
      , ya = new THREE.WebGLLights;
    this.info.programs = xa.programs;
    var za = new THREE.WebGLBufferRenderer(qa,sa,pa)
      , Aa = new THREE.WebGLIndexedBufferRenderer(qa,sa,pa);
    c(),
    this.context = qa,
    this.capabilities = ta,
    this.extensions = sa,
    this.properties = va,
    this.state = ua;
    var Ba = new THREE.WebGLShadowMap(this,na,wa);
    this.shadowMap = Ba;
    var Ca = new THREE.SpritePlugin(this,R)
      , Da = new THREE.LensFlarePlugin(this,S);
    this.getContext = function() {
        return qa
    }
    ,
    this.getContextAttributes = function() {
        return qa.getContextAttributes()
    }
    ,
    this.forceContextLoss = function() {
        sa.get("WEBGL_lose_context").loseContext()
    }
    ,
    this.getMaxAnisotropy = function() {
        var a;
        return function() {
            if (void 0 !== a)
                return a;
            var b = sa.get("EXT_texture_filter_anisotropic");
            return a = null !== b ? qa.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
        }
    }(),
    this.getPrecision = function() {
        return ta.precision
    }
    ,
    this.getPixelRatio = function() {
        return ga
    }
    ,
    this.setPixelRatio = function(a) {
        void 0 !== a && (ga = a,
        this.setSize(ja.z, ja.w, !1))
    }
    ,
    this.getSize = function() {
        return {
            width: ea,
            height: fa
        }
    }
    ,
    this.setSize = function(a, b, c) {
        ea = a,
        fa = b,
        D.width = a * ga,
        D.height = b * ga,
        !1 !== c && (D.style.width = a + "px",
        D.style.height = b + "px"),
        this.setViewport(0, 0, a, b)
    }
    ,
    this.setViewport = function(a, b, c, d) {
        ua.viewport(ja.set(a, b, c, d))
    }
    ,
    this.setScissor = function(a, b, c, d) {
        ua.scissor(ha.set(a, b, c, d))
    }
    ,
    this.setScissorTest = function(a) {
        ua.setScissorTest(ia = a)
    }
    ,
    this.getClearColor = function() {
        return ca
    }
    ,
    this.setClearColor = function(a, c) {
        ca.set(a),
        da = void 0 !== c ? c : 1,
        b(ca.r, ca.g, ca.b, da)
    }
    ,
    this.getClearAlpha = function() {
        return da
    }
    ,
    this.setClearAlpha = function(a) {
        da = a,
        b(ca.r, ca.g, ca.b, da)
    }
    ,
    this.clear = function(a, b, c) {
        var d = 0;
        (void 0 === a || a) && (d |= qa.COLOR_BUFFER_BIT),
        (void 0 === b || b) && (d |= qa.DEPTH_BUFFER_BIT),
        (void 0 === c || c) && (d |= qa.STENCIL_BUFFER_BIT),
        qa.clear(d)
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
    this.clearTarget = function(a, b, c, d) {
        this.setRenderTarget(a),
        this.clear(b, c, d)
    }
    ,
    this.resetGLState = d,
    this.dispose = function() {
        D.removeEventListener("webglcontextlost", e, !1)
    }
    ,
    this.renderBufferImmediate = function(a, b, c) {
        ua.initAttributes();
        var d = va.get(a);
        if (a.hasPositions && !d.position && (d.position = qa.createBuffer()),
        a.hasNormals && !d.normal && (d.normal = qa.createBuffer()),
        a.hasUvs && !d.uv && (d.uv = qa.createBuffer()),
        a.hasColors && !d.color && (d.color = qa.createBuffer()),
        b = b.getAttributes(),
        a.hasPositions && (qa.bindBuffer(qa.ARRAY_BUFFER, d.position),
        qa.bufferData(qa.ARRAY_BUFFER, a.positionArray, qa.DYNAMIC_DRAW),
        ua.enableAttribute(b.position),
        qa.vertexAttribPointer(b.position, 3, qa.FLOAT, !1, 0, 0)),
        a.hasNormals) {
            if (qa.bindBuffer(qa.ARRAY_BUFFER, d.normal),
            "MeshPhongMaterial" !== c.type && "MeshStandardMaterial" !== c.type && c.shading === THREE.FlatShading)
                for (var e = 0, f = 3 * a.count; f > e; e += 9) {
                    var g = a.normalArray
                      , h = (g[e + 0] + g[e + 3] + g[e + 6]) / 3
                      , i = (g[e + 1] + g[e + 4] + g[e + 7]) / 3
                      , j = (g[e + 2] + g[e + 5] + g[e + 8]) / 3;
                    g[e + 0] = h,
                    g[e + 1] = i,
                    g[e + 2] = j,
                    g[e + 3] = h,
                    g[e + 4] = i,
                    g[e + 5] = j,
                    g[e + 6] = h,
                    g[e + 7] = i,
                    g[e + 8] = j
                }
            qa.bufferData(qa.ARRAY_BUFFER, a.normalArray, qa.DYNAMIC_DRAW),
            ua.enableAttribute(b.normal),
            qa.vertexAttribPointer(b.normal, 3, qa.FLOAT, !1, 0, 0)
        }
        a.hasUvs && c.map && (qa.bindBuffer(qa.ARRAY_BUFFER, d.uv),
        qa.bufferData(qa.ARRAY_BUFFER, a.uvArray, qa.DYNAMIC_DRAW),
        ua.enableAttribute(b.uv),
        qa.vertexAttribPointer(b.uv, 2, qa.FLOAT, !1, 0, 0)),
        a.hasColors && c.vertexColors !== THREE.NoColors && (qa.bindBuffer(qa.ARRAY_BUFFER, d.color),
        qa.bufferData(qa.ARRAY_BUFFER, a.colorArray, qa.DYNAMIC_DRAW),
        ua.enableAttribute(b.color),
        qa.vertexAttribPointer(b.color, 3, qa.FLOAT, !1, 0, 0)),
        ua.disableUnusedAttributes(),
        qa.drawArrays(qa.TRIANGLES, 0, a.count),
        a.count = 0
    }
    ,
    this.renderBufferDirect = function(a, b, c, d, e, f) {
        p(d);
        var g = q(a, b, d, e)
          , h = !1;
        if (a = c.id + "_" + g.id + "_" + d.wireframe,
        a !== Y && (Y = a,
        h = !0),
        b = e.morphTargetInfluences,
        void 0 !== b) {
            a = [];
            for (var i = 0, h = b.length; h > i; i++) {
                var k = b[i];
                a.push([k, i])
            }
            a.sort(j),
            8 < a.length && (a.length = 8);
            for (var l = c.morphAttributes, i = 0, h = a.length; h > i; i++)
                k = a[i],
                Q[i] = k[0],
                0 !== k[0] ? (b = k[1],
                !0 === d.morphTargets && l.position && c.addAttribute("morphTarget" + i, l.position[b]),
                !0 === d.morphNormals && l.normal && c.addAttribute("morphNormal" + i, l.normal[b])) : (!0 === d.morphTargets && c.removeAttribute("morphTarget" + i),
                !0 === d.morphNormals && c.removeAttribute("morphNormal" + i));
            a = g.getUniforms(),
            null !== a.morphTargetInfluences && qa.uniform1fv(a.morphTargetInfluences, Q),
            h = !0
        }
        if (b = c.index,
        i = c.attributes.position,
        !0 === d.wireframe && (b = wa.getWireframeAttribute(c)),
        null !== b ? (a = Aa,
        a.setIndex(b)) : a = za,
        h) {
            var m, h = void 0;
            if (c instanceof THREE.InstancedBufferGeometry && (m = sa.get("ANGLE_instanced_arrays"),
            null === m))
                console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            else {
                void 0 === h && (h = 0),
                ua.initAttributes();
                var n, k = c.attributes, g = g.getAttributes(), l = d.defaultAttributeValues;
                for (n in g) {
                    var o = g[n];
                    if (o >= 0) {
                        var r = k[n];
                        if (void 0 !== r) {
                            var s = r.itemSize
                              , t = wa.getAttributeBuffer(r);
                            if (r instanceof THREE.InterleavedBufferAttribute) {
                                var u = r.data
                                  , v = u.stride
                                  , r = r.offset;
                                u instanceof THREE.InstancedInterleavedBuffer ? (ua.enableAttributeAndDivisor(o, u.meshPerAttribute, m),
                                void 0 === c.maxInstancedCount && (c.maxInstancedCount = u.meshPerAttribute * u.count)) : ua.enableAttribute(o),
                                qa.bindBuffer(qa.ARRAY_BUFFER, t),
                                qa.vertexAttribPointer(o, s, qa.FLOAT, !1, v * u.array.BYTES_PER_ELEMENT, (h * v + r) * u.array.BYTES_PER_ELEMENT)
                            } else
                                r instanceof THREE.InstancedBufferAttribute ? (ua.enableAttributeAndDivisor(o, r.meshPerAttribute, m),
                                void 0 === c.maxInstancedCount && (c.maxInstancedCount = r.meshPerAttribute * r.count)) : ua.enableAttribute(o),
                                qa.bindBuffer(qa.ARRAY_BUFFER, t),
                                qa.vertexAttribPointer(o, s, qa.FLOAT, !1, 0, h * s * 4)
                        } else if (void 0 !== l && (s = l[n],
                        void 0 !== s))
                            switch (s.length) {
                            case 2:
                                qa.vertexAttrib2fv(o, s);
                                break;
                            case 3:
                                qa.vertexAttrib3fv(o, s);
                                break;
                            case 4:
                                qa.vertexAttrib4fv(o, s);
                                break;
                            default:
                                qa.vertexAttrib1fv(o, s)
                            }
                    }
                }
                ua.disableUnusedAttributes()
            }
            null !== b && qa.bindBuffer(qa.ELEMENT_ARRAY_BUFFER, wa.getAttributeBuffer(b))
        }
        if (m = 1 / 0,
        null !== b ? m = b.count : void 0 !== i && (m = i.count),
        n = c.drawRange.start,
        b = c.drawRange.count,
        i = null !== f ? f.start : 0,
        h = null !== f ? f.count : 1 / 0,
        f = Math.max(0, n, i),
        m = Math.min(0 + m, n + b, i + h) - 1,
        m = Math.max(0, m - f + 1),
        e instanceof THREE.Mesh)
            if (!0 === d.wireframe)
                ua.setLineWidth(d.wireframeLinewidth * (null === V ? ga : 1)),
                a.setMode(qa.LINES);
            else
                switch (e.drawMode) {
                case THREE.TrianglesDrawMode:
                    a.setMode(qa.TRIANGLES);
                    break;
                case THREE.TriangleStripDrawMode:
                    a.setMode(qa.TRIANGLE_STRIP);
                    break;
                case THREE.TriangleFanDrawMode:
                    a.setMode(qa.TRIANGLE_FAN)
                }
        else
            e instanceof THREE.Line ? (d = d.linewidth,
            void 0 === d && (d = 1),
            ua.setLineWidth(d * (null === V ? ga : 1)),
            e instanceof THREE.LineSegments ? a.setMode(qa.LINES) : a.setMode(qa.LINE_STRIP)) : e instanceof THREE.Points && a.setMode(qa.POINTS);
        c instanceof THREE.InstancedBufferGeometry ? 0 < c.maxInstancedCount && a.renderInstances(c, f, m) : a.render(f, m)
    }
    ,
    this.render = function(a, b, c, d) {
        if (!1 == b instanceof THREE.Camera)
            console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        else {
            var e = a.fog;
            Y = "",
            X = -1,
            Z = null ,
            !0 === a.autoUpdate && a.updateMatrixWorld(),
            null === b.parent && b.updateMatrixWorld(),
            b.matrixWorldInverse.getInverse(b.matrixWorld),
            la.multiplyMatrices(b.projectionMatrix, b.matrixWorldInverse),
            ka.setFromMatrix(la),
            L.length = 0,
            P = N = -1,
            R.length = 0,
            S.length = 0,
            n(a, b),
            M.length = N + 1,
            O.length = P + 1,
            !0 === T.sortObjects && (M.sort(k),
            O.sort(l));
            var f, g, h, i, j, m, p = L, q = 0, r = 0, s = 0, t = b.matrixWorldInverse, u = 0, v = 0, x = 0, y = 0, z = 0;
            for (f = na.shadowsPointLight = 0,
            g = p.length; g > f; f++)
                if (h = p[f],
                i = h.color,
                j = h.intensity,
                m = h.distance,
                h instanceof THREE.AmbientLight)
                    q += i.r * j,
                    r += i.g * j,
                    s += i.b * j;
                else if (h instanceof THREE.DirectionalLight) {
                    var A = ya.get(h);
                    A.color.copy(h.color).multiplyScalar(h.intensity),
                    A.direction.setFromMatrixPosition(h.matrixWorld),
                    ma.setFromMatrixPosition(h.target.matrixWorld),
                    A.direction.sub(ma),
                    A.direction.transformDirection(t),
                    (A.shadow = h.castShadow) && (A.shadowBias = h.shadow.bias,
                    A.shadowRadius = h.shadow.radius,
                    A.shadowMapSize = h.shadow.mapSize,
                    na.shadows[z++] = h),
                    na.directionalShadowMap[u] = h.shadow.map,
                    na.directionalShadowMatrix[u] = h.shadow.matrix,
                    na.directional[u++] = A
                } else
                    h instanceof THREE.SpotLight ? (A = ya.get(h),
                    A.position.setFromMatrixPosition(h.matrixWorld),
                    A.position.applyMatrix4(t),
                    A.color.copy(i).multiplyScalar(j),
                    A.distance = m,
                    A.direction.setFromMatrixPosition(h.matrixWorld),
                    ma.setFromMatrixPosition(h.target.matrixWorld),
                    A.direction.sub(ma),
                    A.direction.transformDirection(t),
                    A.coneCos = Math.cos(h.angle),
                    A.penumbraCos = Math.cos(h.angle * (1 - h.penumbra)),
                    A.decay = 0 === h.distance ? 0 : h.decay,
                    (A.shadow = h.castShadow) && (A.shadowBias = h.shadow.bias,
                    A.shadowRadius = h.shadow.radius,
                    A.shadowMapSize = h.shadow.mapSize,
                    na.shadows[z++] = h),
                    na.spotShadowMap[x] = h.shadow.map,
                    na.spotShadowMatrix[x] = h.shadow.matrix,
                    na.spot[x++] = A) : h instanceof THREE.PointLight ? (A = ya.get(h),
                    A.position.setFromMatrixPosition(h.matrixWorld),
                    A.position.applyMatrix4(t),
                    A.color.copy(h.color).multiplyScalar(h.intensity),
                    A.distance = h.distance,
                    A.decay = 0 === h.distance ? 0 : h.decay,
                    (A.shadow = h.castShadow) && (A.shadowBias = h.shadow.bias,
                    A.shadowRadius = h.shadow.radius,
                    A.shadowMapSize = h.shadow.mapSize,
                    na.shadows[z++] = h),
                    na.pointShadowMap[v] = h.shadow.map,
                    void 0 === na.pointShadowMatrix[v] && (na.pointShadowMatrix[v] = new THREE.Matrix4),
                    ma.setFromMatrixPosition(h.matrixWorld).negate(),
                    na.pointShadowMatrix[v].identity().setPosition(ma),
                    na.point[v++] = A) : h instanceof THREE.HemisphereLight && (A = ya.get(h),
                    A.direction.setFromMatrixPosition(h.matrixWorld),
                    A.direction.transformDirection(t),
                    A.direction.normalize(),
                    A.skyColor.copy(h.color).multiplyScalar(j),
                    A.groundColor.copy(h.groundColor).multiplyScalar(j),
                    na.hemi[y++] = A);
            na.ambient[0] = q,
            na.ambient[1] = r,
            na.ambient[2] = s,
            na.directional.length = u,
            na.spot.length = x,
            na.point.length = v,
            na.hemi.length = y,
            na.shadows.length = z,
            na.hash = u + "," + v + "," + x + "," + y + "," + z,
            Ba.render(a, b),
            pa.calls = 0,
            pa.vertices = 0,
            pa.faces = 0,
            pa.points = 0,
            void 0 === c && (c = null ),
            this.setRenderTarget(c),
            (this.autoClear || d) && this.clear(this.autoClearColor, this.autoClearDepth, this.autoClearStencil),
            a.overrideMaterial ? (d = a.overrideMaterial,
            o(M, b, e, d),
            o(O, b, e, d)) : (ua.setBlending(THREE.NoBlending),
            o(M, b, e),
            o(O, b, e)),
            Ca.render(a, b),
            Da.render(a, b, aa),
            c && (a = c.texture,
            a.generateMipmaps && w(c) && a.minFilter !== THREE.NearestFilter && a.minFilter !== THREE.LinearFilter && (a = c instanceof THREE.WebGLRenderTargetCube ? qa.TEXTURE_CUBE_MAP : qa.TEXTURE_2D,
            c = va.get(c.texture).__webglTexture,
            ua.bindTexture(a, c),
            qa.generateMipmap(a),
            ua.bindTexture(a, null ))),
            ua.setDepthTest(!0),
            ua.setDepthWrite(!0),
            ua.setColorWrite(!0)
        }
    }
    ,
    this.setFaceCulling = function(a, b) {
        a === THREE.CullFaceNone ? ua.disable(qa.CULL_FACE) : (b === THREE.FrontFaceDirectionCW ? qa.frontFace(qa.CW) : qa.frontFace(qa.CCW),
        a === THREE.CullFaceBack ? qa.cullFace(qa.BACK) : a === THREE.CullFaceFront ? qa.cullFace(qa.FRONT) : qa.cullFace(qa.FRONT_AND_BACK),
        ua.enable(qa.CULL_FACE))
    }
    ,
    this.setTexture = function(a, b) {
        var c = va.get(a);
        if (0 < a.version && c.__version !== a.version) {
            var d = a.image;
            if (void 0 === d)
                console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined", a);
            else if (!1 === d.complete)
                console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete", a);
            else {
                void 0 === c.__webglInit && (c.__webglInit = !0,
                a.addEventListener("dispose", f),
                c.__webglTexture = qa.createTexture(),
                oa.textures++),
                ua.activeTexture(qa.TEXTURE0 + b),
                ua.bindTexture(qa.TEXTURE_2D, c.__webglTexture),
                qa.pixelStorei(qa.UNPACK_FLIP_Y_WEBGL, a.flipY),
                qa.pixelStorei(qa.UNPACK_PREMULTIPLY_ALPHA_WEBGL, a.premultiplyAlpha),
                qa.pixelStorei(qa.UNPACK_ALIGNMENT, a.unpackAlignment);
                var e = v(a.image, ta.maxTextureSize);
                if ((a.wrapS !== THREE.ClampToEdgeWrapping || a.wrapT !== THREE.ClampToEdgeWrapping || a.minFilter !== THREE.NearestFilter && a.minFilter !== THREE.LinearFilter) && !1 === w(e))
                    if (d = e,
                    d instanceof HTMLImageElement || d instanceof HTMLCanvasElement) {
                        var g = document.createElement("canvas");
                        g.width = THREE.Math.nearestPowerOfTwo(d.width),
                        g.height = THREE.Math.nearestPowerOfTwo(d.height),
                        g.getContext("2d").drawImage(d, 0, 0, g.width, g.height),
                        console.warn("THREE.WebGLRenderer: image is not power of two (" + d.width + "x" + d.height + "). Resized to " + g.width + "x" + g.height, d),
                        e = g
                    } else
                        e = d;
                var d = w(e)
                  , g = C(a.format)
                  , h = C(a.type);
                u(qa.TEXTURE_2D, a, d);
                var i = a.mipmaps;
                if (a instanceof THREE.DataTexture)
                    if (0 < i.length && d) {
                        for (var j = 0, k = i.length; k > j; j++)
                            e = i[j],
                            ua.texImage2D(qa.TEXTURE_2D, j, g, e.width, e.height, 0, g, h, e.data);
                        a.generateMipmaps = !1
                    } else
                        ua.texImage2D(qa.TEXTURE_2D, 0, g, e.width, e.height, 0, g, h, e.data);
                else if (a instanceof THREE.CompressedTexture)
                    for (j = 0,
                    k = i.length; k > j; j++)
                        e = i[j],
                        a.format !== THREE.RGBAFormat && a.format !== THREE.RGBFormat ? -1 < ua.getCompressedTextureFormats().indexOf(g) ? ua.compressedTexImage2D(qa.TEXTURE_2D, j, g, e.width, e.height, 0, e.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : ua.texImage2D(qa.TEXTURE_2D, j, g, e.width, e.height, 0, g, h, e.data);
                else if (0 < i.length && d) {
                    for (j = 0,
                    k = i.length; k > j; j++)
                        e = i[j],
                        ua.texImage2D(qa.TEXTURE_2D, j, g, g, h, e);
                    a.generateMipmaps = !1
                } else
                    ua.texImage2D(qa.TEXTURE_2D, 0, g, g, h, e);
                a.generateMipmaps && d && qa.generateMipmap(qa.TEXTURE_2D),
                c.__version = a.version,
                a.onUpdate && a.onUpdate(a)
            }
        } else
            ua.activeTexture(qa.TEXTURE0 + b),
            ua.bindTexture(qa.TEXTURE_2D, c.__webglTexture)
    }
    ,
    this.getCurrentRenderTarget = function() {
        return V
    }
    ,
    this.setRenderTarget = function(a) {
        if ((V = a) && void 0 === va.get(a).__webglFramebuffer) {
            var b = va.get(a)
              , c = va.get(a.texture);
            a.addEventListener("dispose", g),
            c.__webglTexture = qa.createTexture(),
            oa.textures++;
            var d = a instanceof THREE.WebGLRenderTargetCube
              , e = THREE.Math.isPowerOfTwo(a.width) && THREE.Math.isPowerOfTwo(a.height);
            if (d) {
                b.__webglFramebuffer = [];
                for (var f = 0; 6 > f; f++)
                    b.__webglFramebuffer[f] = qa.createFramebuffer()
            } else
                b.__webglFramebuffer = qa.createFramebuffer();
            if (d) {
                for (ua.bindTexture(qa.TEXTURE_CUBE_MAP, c.__webglTexture),
                u(qa.TEXTURE_CUBE_MAP, a.texture, e),
                f = 0; 6 > f; f++)
                    z(b.__webglFramebuffer[f], a, qa.COLOR_ATTACHMENT0, qa.TEXTURE_CUBE_MAP_POSITIVE_X + f);
                a.texture.generateMipmaps && e && qa.generateMipmap(qa.TEXTURE_CUBE_MAP),
                ua.bindTexture(qa.TEXTURE_CUBE_MAP, null )
            } else
                ua.bindTexture(qa.TEXTURE_2D, c.__webglTexture),
                u(qa.TEXTURE_2D, a.texture, e),
                z(b.__webglFramebuffer, a, qa.COLOR_ATTACHMENT0, qa.TEXTURE_2D),
                a.texture.generateMipmaps && e && qa.generateMipmap(qa.TEXTURE_2D),
                ua.bindTexture(qa.TEXTURE_2D, null );
            if (a.depthBuffer) {
                if (b = va.get(a),
                a instanceof THREE.WebGLRenderTargetCube)
                    for (b.__webglDepthbuffer = [],
                    c = 0; 6 > c; c++)
                        qa.bindFramebuffer(qa.FRAMEBUFFER, b.__webglFramebuffer[c]),
                        b.__webglDepthbuffer[c] = qa.createRenderbuffer(),
                        A(b.__webglDepthbuffer[c], a);
                else
                    qa.bindFramebuffer(qa.FRAMEBUFFER, b.__webglFramebuffer),
                    b.__webglDepthbuffer = qa.createRenderbuffer(),
                    A(b.__webglDepthbuffer, a);
                qa.bindFramebuffer(qa.FRAMEBUFFER, null )
            }
        }
        b = a instanceof THREE.WebGLRenderTargetCube,
        a ? (c = va.get(a),
        c = b ? c.__webglFramebuffer[a.activeCubeFace] : c.__webglFramebuffer,
        $.copy(a.scissor),
        _ = a.scissorTest,
        aa.copy(a.viewport)) : (c = null ,
        $.copy(ha).multiplyScalar(ga),
        _ = ia,
        aa.copy(ja).multiplyScalar(ga)),
        W !== c && (qa.bindFramebuffer(qa.FRAMEBUFFER, c),
        W = c),
        ua.scissor($),
        ua.setScissorTest(_),
        ua.viewport(aa),
        b && (b = va.get(a.texture),
        qa.framebufferTexture2D(qa.FRAMEBUFFER, qa.COLOR_ATTACHMENT0, qa.TEXTURE_CUBE_MAP_POSITIVE_X + a.activeCubeFace, b.__webglTexture, a.activeMipMapLevel))
    }
    ,
    this.readRenderTargetPixels = function(a, b, c, d, e, f) {
        if (!1 == a instanceof THREE.WebGLRenderTarget)
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        else {
            var g = va.get(a).__webglFramebuffer;
            if (g) {
                var h = !1;
                g !== W && (qa.bindFramebuffer(qa.FRAMEBUFFER, g),
                h = !0);
                try {
                    var i = a.texture;
                    i.format !== THREE.RGBAFormat && C(i.format) !== qa.getParameter(qa.IMPLEMENTATION_COLOR_READ_FORMAT) ? console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.") : i.type === THREE.UnsignedByteType || C(i.type) === qa.getParameter(qa.IMPLEMENTATION_COLOR_READ_TYPE) || i.type === THREE.FloatType && sa.get("WEBGL_color_buffer_float") || i.type === THREE.HalfFloatType && sa.get("EXT_color_buffer_half_float") ? qa.checkFramebufferStatus(qa.FRAMEBUFFER) === qa.FRAMEBUFFER_COMPLETE ? qa.readPixels(b, c, d, e, C(i.format), C(i.type), f) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.") : console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.")
                } finally {
                    h && qa.bindFramebuffer(qa.FRAMEBUFFER, W)
                }
            }
        }
    }
}
,
THREE.WebGLRenderTarget = function(a, b, c) {
    this.uuid = THREE.Math.generateUUID(),
    this.width = a,
    this.height = b,
    this.scissor = new THREE.Vector4(0,0,a,b),
    this.scissorTest = !1,
    this.viewport = new THREE.Vector4(0,0,a,b),
    c = c || {},
    void 0 === c.minFilter && (c.minFilter = THREE.LinearFilter),
    this.texture = new THREE.Texture(void 0,void 0,c.wrapS,c.wrapT,c.magFilter,c.minFilter,c.format,c.type,c.anisotropy),
    this.depthBuffer = void 0 !== c.depthBuffer ? c.depthBuffer : !0,
    this.stencilBuffer = void 0 !== c.stencilBuffer ? c.stencilBuffer : !0
}
,
THREE.WebGLRenderTarget.prototype = {
    constructor: THREE.WebGLRenderTarget,
    setSize: function(a, b) {
        (this.width !== a || this.height !== b) && (this.width = a,
        this.height = b,
        this.dispose()),
        this.viewport.set(0, 0, a, b),
        this.scissor.set(0, 0, a, b)
    },
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(a) {
        return this.width = a.width,
        this.height = a.height,
        this.viewport.copy(a.viewport),
        this.texture = a.texture.clone(),
        this.depthBuffer = a.depthBuffer,
        this.stencilBuffer = a.stencilBuffer,
        this
    },
    dispose: function() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
},
THREE.EventDispatcher.prototype.apply(THREE.WebGLRenderTarget.prototype),
THREE.WebGLRenderTargetCube = function(a, b, c) {
    THREE.WebGLRenderTarget.call(this, a, b, c),
    this.activeMipMapLevel = this.activeCubeFace = 0
}
,
THREE.WebGLRenderTargetCube.prototype = Object.create(THREE.WebGLRenderTarget.prototype),
THREE.WebGLRenderTargetCube.prototype.constructor = THREE.WebGLRenderTargetCube,
THREE.WebGLBufferRenderer = function(a, b, c) {
    var d;
    this.setMode = function(a) {
        d = a
    }
    ,
    this.render = function(b, e) {
        a.drawArrays(d, b, e),
        c.calls++,
        c.vertices += e,
        d === a.TRIANGLES && (c.faces += e / 3)
    }
    ,
    this.renderInstances = function(e) {
        var f = b.get("ANGLE_instanced_arrays");
        if (null === f)
            console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
        else {
            var g = e.attributes.position
              , h = 0
              , h = g instanceof THREE.InterleavedBufferAttribute ? g.data.count : g.count;
            f.drawArraysInstancedANGLE(d, 0, h, e.maxInstancedCount),
            c.calls++,
            c.vertices += h * e.maxInstancedCount,
            d === a.TRIANGLES && (c.faces += e.maxInstancedCount * h / 3)
        }
    }
}
,
THREE.WebGLIndexedBufferRenderer = function(a, b, c) {
    var d, e, f;
    this.setMode = function(a) {
        d = a
    }
    ,
    this.setIndex = function(c) {
        c.array instanceof Uint32Array && b.get("OES_element_index_uint") ? (e = a.UNSIGNED_INT,
        f = 4) : (e = a.UNSIGNED_SHORT,
        f = 2)
    }
    ,
    this.render = function(b, g) {
        a.drawElements(d, g, e, b * f),
        c.calls++,
        c.vertices += g,
        d === a.TRIANGLES && (c.faces += g / 3)
    }
    ,
    this.renderInstances = function(g, h, i) {
        var j = b.get("ANGLE_instanced_arrays");
        null === j ? console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.") : (j.drawElementsInstancedANGLE(d, i, e, h * f, g.maxInstancedCount),
        c.calls++,
        c.vertices += i * g.maxInstancedCount,
        d === a.TRIANGLES && (c.faces += g.maxInstancedCount * i / 3))
    }
}
,
THREE.WebGLExtensions = function(a) {
    var b = {};
    this.get = function(c) {
        if (void 0 !== b[c])
            return b[c];
        var d;
        switch (c) {
        case "EXT_texture_filter_anisotropic":
            d = a.getExtension("EXT_texture_filter_anisotropic") || a.getExtension("MOZ_EXT_texture_filter_anisotropic") || a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
            break;
        case "WEBGL_compressed_texture_s3tc":
            d = a.getExtension("WEBGL_compressed_texture_s3tc") || a.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
            break;
        case "WEBGL_compressed_texture_pvrtc":
            d = a.getExtension("WEBGL_compressed_texture_pvrtc") || a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
            break;
        case "WEBGL_compressed_texture_etc1":
            d = a.getExtension("WEBGL_compressed_texture_etc1");
            break;
        default:
            d = a.getExtension(c)
        }
        return null === d && console.warn("THREE.WebGLRenderer: " + c + " extension not supported."),
        b[c] = d
    }
}
,
THREE.WebGLCapabilities = function(a, b, c) {
    function d(b) {
        if ("highp" === b) {
            if (0 < a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT).precision && 0 < a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT).precision)
                return "highp";
            b = "mediump"
        }
        return "mediump" === b && 0 < a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT).precision && 0 < a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT).precision ? "mediump" : "lowp"
    }
    this.getMaxPrecision = d,
    this.precision = void 0 !== c.precision ? c.precision : "highp",
    this.logarithmicDepthBuffer = void 0 !== c.logarithmicDepthBuffer ? c.logarithmicDepthBuffer : !1,
    this.maxTextures = a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),
    this.maxVertexTextures = a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
    this.maxTextureSize = a.getParameter(a.MAX_TEXTURE_SIZE),
    this.maxCubemapSize = a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),
    this.maxAttributes = a.getParameter(a.MAX_VERTEX_ATTRIBS),
    this.maxVertexUniforms = a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),
    this.maxVaryings = a.getParameter(a.MAX_VARYING_VECTORS),
    this.maxFragmentUniforms = a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),
    this.vertexTextures = 0 < this.maxVertexTextures,
    this.floatFragmentTextures = !!b.get("OES_texture_float"),
    this.floatVertexTextures = this.vertexTextures && this.floatFragmentTextures,
    c = d(this.precision),
    c !== this.precision && (console.warn("THREE.WebGLRenderer:", this.precision, "not supported, using", c, "instead."),
    this.precision = c),
    this.logarithmicDepthBuffer && (this.logarithmicDepthBuffer = !!b.get("EXT_frag_depth"))
}
,
THREE.WebGLGeometries = function(a, b, c) {
    function d(a) {
        var g = a.target;
        a = f[g.id],
        null !== a.index && e(a.index);
        var h, i = a.attributes;
        for (h in i)
            e(i[h]);
        g.removeEventListener("dispose", d),
        delete f[g.id],
        h = b.get(g),
        h.wireframe && e(h.wireframe),
        b["delete"](g),
        g = b.get(a),
        g.wireframe && e(g.wireframe),
        b["delete"](a),
        c.memory.geometries--
    }
    function e(c) {
        var d;
        d = c instanceof THREE.InterleavedBufferAttribute ? b.get(c.data).__webglBuffer : b.get(c).__webglBuffer,
        void 0 !== d && (a.deleteBuffer(d),
        c instanceof THREE.InterleavedBufferAttribute ? b["delete"](c.data) : b["delete"](c))
    }
    var f = {};
    this.get = function(a) {
        var b = a.geometry;
        if (void 0 !== f[b.id])
            return f[b.id];
        b.addEventListener("dispose", d);
        var e;
        return b instanceof THREE.BufferGeometry ? e = b : b instanceof THREE.Geometry && (void 0 === b._bufferGeometry && (b._bufferGeometry = (new THREE.BufferGeometry).setFromObject(a)),
        e = b._bufferGeometry),
        f[b.id] = e,
        c.memory.geometries++,
        e
    }
}
,
THREE.WebGLLights = function() {
    var a = {};
    this.get = function(b) {
        if (void 0 !== a[b.id])
            return a[b.id];
        var c;
        switch (b.type) {
        case "DirectionalLight":
            c = {
                direction: new THREE.Vector3,
                color: new THREE.Color,
                shadow: !1,
                shadowBias: 0,
                shadowRadius: 1,
                shadowMapSize: new THREE.Vector2
            };
            break;
        case "SpotLight":
            c = {
                position: new THREE.Vector3,
                direction: new THREE.Vector3,
                color: new THREE.Color,
                distance: 0,
                coneCos: 0,
                penumbraCos: 0,
                decay: 0,
                shadow: !1,
                shadowBias: 0,
                shadowRadius: 1,
                shadowMapSize: new THREE.Vector2
            };
            break;
        case "PointLight":
            c = {
                position: new THREE.Vector3,
                color: new THREE.Color,
                distance: 0,
                decay: 0,
                shadow: !1,
                shadowBias: 0,
                shadowRadius: 1,
                shadowMapSize: new THREE.Vector2
            };
            break;
        case "HemisphereLight":
            c = {
                direction: new THREE.Vector3,
                skyColor: new THREE.Color,
                groundColor: new THREE.Color
            }
        }
        return a[b.id] = c
    }
}
,
THREE.WebGLObjects = function(a, b, c) {
    function d(c, d) {
        var e = c instanceof THREE.InterleavedBufferAttribute ? c.data : c
          , f = b.get(e);
        void 0 === f.__webglBuffer ? (f.__webglBuffer = a.createBuffer(),
        a.bindBuffer(d, f.__webglBuffer),
        a.bufferData(d, e.array, e.dynamic ? a.DYNAMIC_DRAW : a.STATIC_DRAW),
        f.version = e.version) : f.version !== e.version && (a.bindBuffer(d, f.__webglBuffer),
        !1 === e.dynamic || -1 === e.updateRange.count ? a.bufferSubData(d, 0, e.array) : 0 === e.updateRange.count ? console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually.") : (a.bufferSubData(d, e.updateRange.offset * e.array.BYTES_PER_ELEMENT, e.array.subarray(e.updateRange.offset, e.updateRange.offset + e.updateRange.count)),
        e.updateRange.count = 0),
        f.version = e.version)
    }
    function e(a, b, c) {
        if (b > c) {
            var d = b;
            b = c,
            c = d
        }
        return d = a[b],
        void 0 === d ? (a[b] = [c],
        !0) : -1 === d.indexOf(c) ? (d.push(c),
        !0) : !1
    }
    var f = new THREE.WebGLGeometries(a,b,c);
    this.getAttributeBuffer = function(a) {
        return a instanceof THREE.InterleavedBufferAttribute ? b.get(a.data).__webglBuffer : b.get(a).__webglBuffer
    }
    ,
    this.getWireframeAttribute = function(c) {
        var f = b.get(c);
        if (void 0 !== f.wireframe)
            return f.wireframe;
        var g = []
          , h = c.index
          , i = c.attributes;
        if (c = i.position,
        null !== h)
            for (var i = {}, h = h.array, j = 0, k = h.length; k > j; j += 3) {
                var l = h[j + 0]
                  , m = h[j + 1]
                  , n = h[j + 2];
                e(i, l, m) && g.push(l, m),
                e(i, m, n) && g.push(m, n),
                e(i, n, l) && g.push(n, l)
            }
        else
            for (h = i.position.array,
            j = 0,
            k = h.length / 3 - 1; k > j; j += 3)
                l = j + 0,
                m = j + 1,
                n = j + 2,
                g.push(l, m, m, n, n, l);
        return g = new THREE.BufferAttribute(new (65535 < c.count ? Uint32Array : Uint16Array)(g),1),
        d(g, a.ELEMENT_ARRAY_BUFFER),
        f.wireframe = g
    }
    ,
    this.update = function(b) {
        var c = f.get(b);
        b.geometry instanceof THREE.Geometry && c.updateFromObject(b),
        b = c.index;
        var e = c.attributes;
        null !== b && d(b, a.ELEMENT_ARRAY_BUFFER);
        for (var g in e)
            d(e[g], a.ARRAY_BUFFER);
        b = c.morphAttributes;
        for (g in b)
            for (var e = b[g], h = 0, i = e.length; i > h; h++)
                d(e[h], a.ARRAY_BUFFER);
        return c
    }
}
,
THREE.WebGLProgram = function() {
    function a(a) {
        switch (a) {
        case THREE.LinearEncoding:
            return ["Linear", "( value )"];
        case THREE.sRGBEncoding:
            return ["sRGB", "( value )"];
        case THREE.RGBEEncoding:
            return ["RGBE", "( value )"];
        case THREE.RGBM7Encoding:
            return ["RGBM", "( value, 7.0 )"];
        case THREE.RGBM16Encoding:
            return ["RGBM", "( value, 16.0 )"];
        case THREE.RGBDEncoding:
            return ["RGBD", "( value, 256.0 )"];
        case THREE.GammaEncoding:
            return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
        default:
            throw Error("unsupported encoding: " + a)
        }
    }
    function b(b, c) {
        var d = a(c);
        return "vec4 " + b + "( vec4 value ) { return " + d[0] + "ToLinear" + d[1] + "; }"
    }
    function c(b, c) {
        var d = a(c);
        return "vec4 " + b + "( vec4 value ) { return LinearTo" + d[0] + d[1] + "; }"
    }
    function d(a, b) {
        var c;
        switch (b) {
        case THREE.LinearToneMapping:
            c = "Linear";
            break;
        case THREE.ReinhardToneMapping:
            c = "Reinhard";
            break;
        case THREE.Uncharted2ToneMapping:
            c = "Uncharted2";
            break;
        case THREE.CineonToneMapping:
            c = "OptimizedCineon";
            break;
        default:
            throw Error("unsupported toneMapping: " + b)
        }
        return "vec3 " + a + "( vec3 color ) { return " + c + "ToneMapping( color ); }"
    }
    function e(a, b, c) {
        return a = a || {},
        [a.derivatives || b.envMapCubeUV || b.bumpMap || b.normalMap || b.flatShading ? "#extension GL_OES_standard_derivatives : enable" : "", (a.fragDepth || b.logarithmicDepthBuffer) && c.get("EXT_frag_depth") ? "#extension GL_EXT_frag_depth : enable" : "", a.drawBuffers && c.get("WEBGL_draw_buffers") ? "#extension GL_EXT_draw_buffers : require" : "", (a.shaderTextureLOD || b.envMap) && c.get("EXT_shader_texture_lod") ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(g).join("\n")
    }
    function f(a) {
        var b, c = [];
        for (b in a) {
            var d = a[b];
            !1 !== d && c.push("#define " + b + " " + d)
        }
        return c.join("\n")
    }
    function g(a) {
        return "" !== a
    }
    function h(a, b) {
        return a.replace(/NUM_DIR_LIGHTS/g, b.numDirLights).replace(/NUM_SPOT_LIGHTS/g, b.numSpotLights).replace(/NUM_POINT_LIGHTS/g, b.numPointLights).replace(/NUM_HEMI_LIGHTS/g, b.numHemiLights)
    }
    function i(a) {
        return a.replace(/#include +<([\w\d.]+)>/g, function(a, b) {
            var c = THREE.ShaderChunk[b];
            if (void 0 === c)
                throw Error("Can not resolve #include <" + b + ">");
            return i(c)
        })
    }
    function j(a) {
        return a.replace(/for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g, function(a, b, c, d) {
            for (a = "",
            b = parseInt(b); b < parseInt(c); b++)
                a += d.replace(/\[ i \]/g, "[ " + b + " ]");
            return a
        })
    }
    var k = 0
      , l = /^([\w\d_]+)\.([\w\d_]+)$/
      , m = /^([\w\d_]+)\[(\d+)\]\.([\w\d_]+)$/
      , n = /^([\w\d_]+)\[0\]$/;
    return function(a, o, p, q) {
        var r = a.context
          , s = p.extensions
          , t = p.defines
          , u = p.__webglShader.vertexShader
          , v = p.__webglShader.fragmentShader
          , w = "SHADOWMAP_TYPE_BASIC";
        q.shadowMapType === THREE.PCFShadowMap ? w = "SHADOWMAP_TYPE_PCF" : q.shadowMapType === THREE.PCFSoftShadowMap && (w = "SHADOWMAP_TYPE_PCF_SOFT");
        var x = "ENVMAP_TYPE_CUBE"
          , y = "ENVMAP_MODE_REFLECTION"
          , z = "ENVMAP_BLENDING_MULTIPLY";
        if (q.envMap) {
            switch (p.envMap.mapping) {
            case THREE.CubeReflectionMapping:
            case THREE.CubeRefractionMapping:
                x = "ENVMAP_TYPE_CUBE";
                break;
            case THREE.CubeUVReflectionMapping:
            case THREE.CubeUVRefractionMapping:
                x = "ENVMAP_TYPE_CUBE_UV";
                break;
            case THREE.EquirectangularReflectionMapping:
            case THREE.EquirectangularRefractionMapping:
                x = "ENVMAP_TYPE_EQUIREC";
                break;
            case THREE.SphericalReflectionMapping:
                x = "ENVMAP_TYPE_SPHERE"
            }
            switch (p.envMap.mapping) {
            case THREE.CubeRefractionMapping:
            case THREE.EquirectangularRefractionMapping:
                y = "ENVMAP_MODE_REFRACTION"
            }
            switch (p.combine) {
            case THREE.MultiplyOperation:
                z = "ENVMAP_BLENDING_MULTIPLY";
                break;
            case THREE.MixOperation:
                z = "ENVMAP_BLENDING_MIX";
                break;
            case THREE.AddOperation:
                z = "ENVMAP_BLENDING_ADD"
            }
        }
        var A = 0 < a.gammaFactor ? a.gammaFactor : 1
          , s = e(s, q, a.extensions)
          , B = f(t)
          , C = r.createProgram();
        p instanceof THREE.RawShaderMaterial ? a = t = "" : (t = ["precision " + q.precision + " float;", "precision " + q.precision + " int;", "#define SHADER_NAME " + p.__webglShader.name, B, q.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + A, "#define MAX_BONES " + q.maxBones, q.map ? "#define USE_MAP" : "", q.envMap ? "#define USE_ENVMAP" : "", q.envMap ? "#define " + y : "", q.lightMap ? "#define USE_LIGHTMAP" : "", q.aoMap ? "#define USE_AOMAP" : "", q.emissiveMap ? "#define USE_EMISSIVEMAP" : "", q.bumpMap ? "#define USE_BUMPMAP" : "", q.normalMap ? "#define USE_NORMALMAP" : "", q.displacementMap && q.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", q.specularMap ? "#define USE_SPECULARMAP" : "", q.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", q.metalnessMap ? "#define USE_METALNESSMAP" : "", q.alphaMap ? "#define USE_ALPHAMAP" : "", q.vertexColors ? "#define USE_COLOR" : "", q.flatShading ? "#define FLAT_SHADED" : "", q.skinning ? "#define USE_SKINNING" : "", q.useVertexTexture ? "#define BONE_TEXTURE" : "", q.morphTargets ? "#define USE_MORPHTARGETS" : "", q.morphNormals && !1 === q.flatShading ? "#define USE_MORPHNORMALS" : "", q.doubleSided ? "#define DOUBLE_SIDED" : "", q.flipSided ? "#define FLIP_SIDED" : "", q.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", q.shadowMapEnabled ? "#define " + w : "", 0 < q.pointLightShadows ? "#define POINT_LIGHT_SHADOWS" : "", q.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", q.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", q.logarithmicDepthBuffer && a.extensions.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_COLOR", "	attribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "	attribute vec3 morphTarget0;", "	attribute vec3 morphTarget1;", "	attribute vec3 morphTarget2;", "	attribute vec3 morphTarget3;", "	#ifdef USE_MORPHNORMALS", "		attribute vec3 morphNormal0;", "		attribute vec3 morphNormal1;", "		attribute vec3 morphNormal2;", "		attribute vec3 morphNormal3;", "	#else", "		attribute vec3 morphTarget4;", "		attribute vec3 morphTarget5;", "		attribute vec3 morphTarget6;", "		attribute vec3 morphTarget7;", "	#endif", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", "\n"].filter(g).join("\n"),
        a = [s, "precision " + q.precision + " float;", "precision " + q.precision + " int;", "#define SHADER_NAME " + p.__webglShader.name, B, q.alphaTest ? "#define ALPHATEST " + q.alphaTest : "", "#define GAMMA_FACTOR " + A, q.useFog && q.fog ? "#define USE_FOG" : "", q.useFog && q.fogExp ? "#define FOG_EXP2" : "", q.map ? "#define USE_MAP" : "", q.envMap ? "#define USE_ENVMAP" : "", q.envMap ? "#define " + x : "", q.envMap ? "#define " + y : "", q.envMap ? "#define " + z : "", q.lightMap ? "#define USE_LIGHTMAP" : "", q.aoMap ? "#define USE_AOMAP" : "", q.emissiveMap ? "#define USE_EMISSIVEMAP" : "", q.bumpMap ? "#define USE_BUMPMAP" : "", q.normalMap ? "#define USE_NORMALMAP" : "", q.specularMap ? "#define USE_SPECULARMAP" : "", q.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", q.metalnessMap ? "#define USE_METALNESSMAP" : "", q.alphaMap ? "#define USE_ALPHAMAP" : "", q.vertexColors ? "#define USE_COLOR" : "", q.flatShading ? "#define FLAT_SHADED" : "", q.doubleSided ? "#define DOUBLE_SIDED" : "", q.flipSided ? "#define FLIP_SIDED" : "", q.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", q.shadowMapEnabled ? "#define " + w : "", 0 < q.pointLightShadows ? "#define POINT_LIGHT_SHADOWS" : "", q.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", q.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", q.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", q.logarithmicDepthBuffer && a.extensions.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", q.envMap && a.extensions.get("EXT_shader_texture_lod") ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", q.toneMapping !== THREE.NoToneMapping ? "#define TONE_MAPPING" : "", q.toneMapping !== THREE.NoToneMapping ? THREE.ShaderChunk.tonemapping_pars_fragment : "", q.toneMapping !== THREE.NoToneMapping ? d("toneMapping", q.toneMapping) : "", q.outputEncoding || q.mapEncoding || q.envMapEncoding || q.emissiveMapEncoding ? THREE.ShaderChunk.encodings_pars_fragment : "", q.mapEncoding ? b("mapTexelToLinear", q.mapEncoding) : "", q.envMapEncoding ? b("envMapTexelToLinear", q.envMapEncoding) : "", q.emissiveMapEncoding ? b("emissiveMapTexelToLinear", q.emissiveMapEncoding) : "", q.outputEncoding ? c("linearToOutputTexel", q.outputEncoding) : "", "\n"].filter(g).join("\n")),
        u = i(u, q),
        u = h(u, q),
        v = i(v, q),
        v = h(v, q),
        !1 == p instanceof THREE.ShaderMaterial && (u = j(u),
        v = j(v)),
        v = a + v,
        u = THREE.WebGLShader(r, r.VERTEX_SHADER, t + u),
        v = THREE.WebGLShader(r, r.FRAGMENT_SHADER, v),
        r.attachShader(C, u),
        r.attachShader(C, v),
        void 0 !== p.index0AttributeName ? r.bindAttribLocation(C, 0, p.index0AttributeName) : !0 === q.morphTargets && r.bindAttribLocation(C, 0, "position"),
        r.linkProgram(C),
        q = r.getProgramInfoLog(C),
        w = r.getShaderInfoLog(u),
        x = r.getShaderInfoLog(v),
        z = y = !0,
        !1 === r.getProgramParameter(C, r.LINK_STATUS) ? (y = !1,
        console.error("THREE.WebGLProgram: shader error: ", r.getError(), "gl.VALIDATE_STATUS", r.getProgramParameter(C, r.VALIDATE_STATUS), "gl.getProgramInfoLog", q, w, x)) : "" !== q ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", q) : ("" === w || "" === x) && (z = !1),
        z && (this.diagnostics = {
            runnable: y,
            material: p,
            programLog: q,
            vertexShader: {
                log: w,
                prefix: t
            },
            fragmentShader: {
                log: x,
                prefix: a
            }
        }),
        r.deleteShader(u),
        r.deleteShader(v);
        var D;
        this.getUniforms = function() {
            if (void 0 === D) {
                for (var a = {}, b = r.getProgramParameter(C, r.ACTIVE_UNIFORMS), c = 0; b > c; c++) {
                    var d = r.getActiveUniform(C, c).name
                      , e = r.getUniformLocation(C, d)
                      , f = l.exec(d);
                    if (f) {
                        var d = f[1]
                          , f = f[2]
                          , g = a[d];
                        g || (g = a[d] = {}),
                        g[f] = e
                    } else if (f = m.exec(d)) {
                        var g = f[1]
                          , d = f[2]
                          , f = f[3]
                          , h = a[g];
                        h || (h = a[g] = []),
                        (g = h[d]) || (g = h[d] = {}),
                        g[f] = e
                    } else
                        (f = n.exec(d)) ? (g = f[1],
                        a[g] = e) : a[d] = e
                }
                D = a
            }
            return D
        }
        ;
        var E;
        return this.getAttributes = function() {
            if (void 0 === E) {
                for (var a = {}, b = r.getProgramParameter(C, r.ACTIVE_ATTRIBUTES), c = 0; b > c; c++) {
                    var d = r.getActiveAttrib(C, c).name;
                    a[d] = r.getAttribLocation(C, d)
                }
                E = a
            }
            return E
        }
        ,
        this.destroy = function() {
            r.deleteProgram(C),
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
        this.id = k++,
        this.code = o,
        this.usedTimes = 1,
        this.program = C,
        this.vertexShader = u,
        this.fragmentShader = v,
        this
    }
}(),
THREE.WebGLPrograms = function(a, b) {
    function c(a, b) {
        var c;
        return a ? a instanceof THREE.Texture ? c = a.encoding : a instanceof THREE.WebGLRenderTarget && (c = a.texture.encoding) : c = THREE.LinearEncoding,
        c === THREE.LinearEncoding && b && (c = THREE.GammaEncoding),
        c
    }
    var d = []
      , e = {
        MeshDepthMaterial: "depth",
        MeshNormalMaterial: "normal",
        MeshBasicMaterial: "basic",
        MeshLambertMaterial: "lambert",
        MeshPhongMaterial: "phong",
        MeshStandardMaterial: "standard",
        LineBasicMaterial: "basic",
        LineDashedMaterial: "dashed",
        PointsMaterial: "points"
    }
      , f = "precision supportsVertexTextures map mapEncoding envMap envMapMode envMapEncoding lightMap aoMap emissiveMap emissiveMapEncoding bumpMap normalMap displacementMap specularMap roughnessMap metalnessMap alphaMap combine vertexColors fog useFog fogExp flatShading sizeAttenuation logarithmicDepthBuffer skinning maxBones useVertexTexture morphTargets morphNormals maxMorphTargets maxMorphNormals premultipliedAlpha numDirLights numPointLights numSpotLights numHemiLights shadowMapEnabled pointLightShadows toneMapping physicallyCorrectLights shadowMapType alphaTest doubleSided flipSided".split(" ");
    this.getParameters = function(d, f, g, h) {
        var i, j = e[d.type];
        b.floatVertexTextures && h && h.skeleton && h.skeleton.useVertexTexture ? i = 1024 : (i = Math.floor((b.maxVertexUniforms - 20) / 4),
        void 0 !== h && h instanceof THREE.SkinnedMesh && (i = Math.min(h.skeleton.bones.length, i),
        i < h.skeleton.bones.length && console.warn("WebGLRenderer: too many bones - " + h.skeleton.bones.length + ", this GPU supports just " + i + " (try OpenGL instead of ANGLE)")));
        var k = a.getPrecision();
        return null !== d.precision && (k = b.getMaxPrecision(d.precision),
        k !== d.precision && console.warn("THREE.WebGLProgram.getParameters:", d.precision, "not supported, using", k, "instead.")),
        {
            shaderID: j,
            precision: k,
            supportsVertexTextures: b.vertexTextures,
            outputEncoding: c(a.getCurrentRenderTarget(), a.gammaOutput),
            map: !!d.map,
            mapEncoding: c(d.map, a.gammaInput),
            envMap: !!d.envMap,
            envMapMode: d.envMap && d.envMap.mapping,
            envMapEncoding: c(d.envMap, a.gammaInput),
            envMapCubeUV: !!d.envMap && (d.envMap.mapping === THREE.CubeUVReflectionMapping || d.envMap.mapping === THREE.CubeUVRefractionMapping),
            lightMap: !!d.lightMap,
            aoMap: !!d.aoMap,
            emissiveMap: !!d.emissiveMap,
            emissiveMapEncoding: c(d.emissiveMap, a.gammaInput),
            bumpMap: !!d.bumpMap,
            normalMap: !!d.normalMap,
            displacementMap: !!d.displacementMap,
            roughnessMap: !!d.roughnessMap,
            metalnessMap: !!d.metalnessMap,
            specularMap: !!d.specularMap,
            alphaMap: !!d.alphaMap,
            combine: d.combine,
            vertexColors: d.vertexColors,
            fog: g,
            useFog: d.fog,
            fogExp: g instanceof THREE.FogExp2,
            flatShading: d.shading === THREE.FlatShading,
            sizeAttenuation: d.sizeAttenuation,
            logarithmicDepthBuffer: b.logarithmicDepthBuffer,
            skinning: d.skinning,
            maxBones: i,
            useVertexTexture: b.floatVertexTextures && h && h.skeleton && h.skeleton.useVertexTexture,
            morphTargets: d.morphTargets,
            morphNormals: d.morphNormals,
            maxMorphTargets: a.maxMorphTargets,
            maxMorphNormals: a.maxMorphNormals,
            numDirLights: f.directional.length,
            numPointLights: f.point.length,
            numSpotLights: f.spot.length,
            numHemiLights: f.hemi.length,
            pointLightShadows: f.shadowsPointLight,
            shadowMapEnabled: a.shadowMap.enabled && h.receiveShadow && 0 < f.shadows.length,
            shadowMapType: a.shadowMap.type,
            toneMapping: a.toneMapping,
            physicallyCorrectLights: a.physicallyCorrectLights,
            premultipliedAlpha: d.premultipliedAlpha,
            alphaTest: d.alphaTest,
            doubleSided: d.side === THREE.DoubleSide,
            flipSided: d.side === THREE.BackSide
        }
    }
    ,
    this.getProgramCode = function(a, b) {
        var c = [];
        if (b.shaderID ? c.push(b.shaderID) : (c.push(a.fragmentShader),
        c.push(a.vertexShader)),
        void 0 !== a.defines)
            for (var d in a.defines)
                c.push(d),
                c.push(a.defines[d]);
        for (d = 0; d < f.length; d++) {
            var e = f[d];
            c.push(e),
            c.push(b[e])
        }
        return c.join()
    }
    ,
    this.acquireProgram = function(b, c, e) {
        for (var f, g = 0, h = d.length; h > g; g++) {
            var i = d[g];
            if (i.code === e) {
                f = i,
                ++f.usedTimes;
                break
            }
        }
        return void 0 === f && (f = new THREE.WebGLProgram(a,e,b,c),
        d.push(f)),
        f
    }
    ,
    this.releaseProgram = function(a) {
        if (0 === --a.usedTimes) {
            var b = d.indexOf(a);
            d[b] = d[d.length - 1],
            d.pop(),
            a.destroy()
        }
    }
    ,
    this.programs = d
}
,
THREE.WebGLProperties = function() {
    var a = {};
    this.get = function(b) {
        b = b.uuid;
        var c = a[b];
        return void 0 === c && (c = {},
        a[b] = c),
        c
    }
    ,
    this["delete"] = function(b) {
        delete a[b.uuid]
    }
    ,
    this.clear = function() {
        a = {}
    }
}
,
THREE.WebGLShader = function() {
    function a(a) {
        a = a.split("\n");
        for (var b = 0; b < a.length; b++)
            a[b] = b + 1 + ": " + a[b];
        return a.join("\n")
    }
    return function(b, c, d) {
        var e = b.createShader(c);
        return b.shaderSource(e, d),
        b.compileShader(e),
        !1 === b.getShaderParameter(e, b.COMPILE_STATUS) && console.error("THREE.WebGLShader: Shader couldn't compile."),
        "" !== b.getShaderInfoLog(e) && console.warn("THREE.WebGLShader: gl.getShaderInfoLog()", c === b.VERTEX_SHADER ? "vertex" : "fragment", b.getShaderInfoLog(e), a(d)),
        e
    }
}(),
THREE.WebGLShadowMap = function(a, b, c) {
    function d(a, b, c, d) {
        var e = a.geometry
          , f = null
          , f = n
          , g = a.customDepthMaterial;
        return c && (f = o,
        g = a.customDistanceMaterial),
        g ? f = g : (a = a instanceof THREE.SkinnedMesh && b.skinning,
        g = 0,
        void 0 !== e.morphTargets && 0 < e.morphTargets.length && b.morphTargets && (g |= 1),
        a && (g |= 2),
        f = f[g]),
        f.visible = b.visible,
        f.wireframe = b.wireframe,
        f.wireframeLinewidth = b.wireframeLinewidth,
        c && void 0 !== f.uniforms.lightPos && f.uniforms.lightPos.value.copy(d),
        f
    }
    function e(a, b, c) {
        if (!1 !== a.visible) {
            a.layers.test(b.layers) && (a instanceof THREE.Mesh || a instanceof THREE.Line || a instanceof THREE.Points) && a.castShadow && (!1 === a.frustumCulled || !0 === h.intersectsObject(a)) && !0 === a.material.visible && (a.modelViewMatrix.multiplyMatrices(c.matrixWorldInverse, a.matrixWorld),
            m.push(a)),
            a = a.children;
            for (var d = 0, f = a.length; f > d; d++)
                e(a[d], b, c)
        }
    }
    for (var f = a.context, g = a.state, h = new THREE.Frustum, i = new THREE.Matrix4, j = new THREE.Vector2, k = new THREE.Vector3, l = new THREE.Vector3, m = [], n = Array(4), o = Array(4), p = [new THREE.Vector3(1,0,0), new THREE.Vector3(-1,0,0), new THREE.Vector3(0,0,1), new THREE.Vector3(0,0,-1), new THREE.Vector3(0,1,0), new THREE.Vector3(0,-1,0)], q = [new THREE.Vector3(0,1,0), new THREE.Vector3(0,1,0), new THREE.Vector3(0,1,0), new THREE.Vector3(0,1,0), new THREE.Vector3(0,0,1), new THREE.Vector3(0,0,-1)], r = [new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4], s = THREE.ShaderLib.depthRGBA, t = THREE.UniformsUtils.clone(s.uniforms), u = THREE.ShaderLib.distanceRGBA, v = THREE.UniformsUtils.clone(u.uniforms), w = 0; 4 !== w; ++w) {
        var x = 0 !== (1 & w)
          , y = 0 !== (2 & w)
          , z = new THREE.ShaderMaterial({
            uniforms: t,
            vertexShader: s.vertexShader,
            fragmentShader: s.fragmentShader,
            morphTargets: x,
            skinning: y
        });
        n[w] = z,
        x = new THREE.ShaderMaterial({
            defines: {
                USE_SHADOWMAP: ""
            },
            uniforms: v,
            vertexShader: u.vertexShader,
            fragmentShader: u.fragmentShader,
            morphTargets: x,
            skinning: y
        }),
        o[w] = x
    }
    var A = this;
    this.enabled = !1,
    this.autoUpdate = !0,
    this.needsUpdate = !1,
    this.type = THREE.PCFShadowMap,
    this.cullFace = THREE.CullFaceFront,
    this.render = function(n, o) {
        var s, t, u = b.shadows;
        if (0 !== u.length && !1 !== A.enabled && (!1 !== A.autoUpdate || !1 !== A.needsUpdate)) {
            g.clearColor(1, 1, 1, 1),
            g.disable(f.BLEND),
            g.enable(f.CULL_FACE),
            f.frontFace(f.CCW),
            f.cullFace(A.cullFace === THREE.CullFaceFront ? f.FRONT : f.BACK),
            g.setDepthTest(!0),
            g.setScissorTest(!1);
            for (var v = 0, w = u.length; w > v; v++) {
                var x = u[v]
                  , y = x.shadow
                  , z = y.camera;
                if (j.copy(y.mapSize),
                x instanceof THREE.PointLight) {
                    s = 6,
                    t = !0;
                    var B = j.x
                      , C = j.y;
                    r[0].set(2 * B, C, B, C),
                    r[1].set(0, C, B, C),
                    r[2].set(3 * B, C, B, C),
                    r[3].set(B, C, B, C),
                    r[4].set(3 * B, 0, B, C),
                    r[5].set(B, 0, B, C),
                    j.x *= 4,
                    j.y *= 2
                } else
                    s = 1,
                    t = !1;
                for (null === y.map && (y.map = new THREE.WebGLRenderTarget(j.x,j.y,{
                    minFilter: THREE.NearestFilter,
                    magFilter: THREE.NearestFilter,
                    format: THREE.RGBAFormat
                }),
                x instanceof THREE.SpotLight && (z.aspect = j.x / j.y),
                z.updateProjectionMatrix()),
                B = y.map,
                y = y.matrix,
                l.setFromMatrixPosition(x.matrixWorld),
                z.position.copy(l),
                a.setRenderTarget(B),
                a.clear(),
                B = 0; s > B; B++) {
                    t ? (k.copy(z.position),
                    k.add(p[B]),
                    z.up.copy(q[B]),
                    z.lookAt(k),
                    g.viewport(r[B])) : (k.setFromMatrixPosition(x.target.matrixWorld),
                    z.lookAt(k)),
                    z.updateMatrixWorld(),
                    z.matrixWorldInverse.getInverse(z.matrixWorld),
                    y.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1),
                    y.multiply(z.projectionMatrix),
                    y.multiply(z.matrixWorldInverse),
                    i.multiplyMatrices(z.projectionMatrix, z.matrixWorldInverse),
                    h.setFromMatrix(i),
                    m.length = 0,
                    e(n, o, z);
                    for (var C = 0, D = m.length; D > C; C++) {
                        var E = m[C]
                          , F = c.update(E)
                          , G = E.material;
                        if (G instanceof THREE.MultiMaterial)
                            for (var H = F.groups, G = G.materials, I = 0, J = H.length; J > I; I++) {
                                var K = H[I]
                                  , L = G[K.materialIndex];
                                !0 === L.visible && (L = d(E, L, t, l),
                                a.renderBufferDirect(z, null , F, L, E, K))
                            }
                        else
                            L = d(E, G, t, l),
                            a.renderBufferDirect(z, null , F, L, E, null )
                    }
                }
            }
            s = a.getClearColor(),
            t = a.getClearAlpha(),
            a.setClearColor(s, t),
            g.enable(f.BLEND),
            A.cullFace === THREE.CullFaceFront && f.cullFace(f.BACK),
            A.needsUpdate = !1
        }
    }
}
,
THREE.WebGLState = function(a, b, c) {
    var d = this
      , e = new THREE.Vector4
      , f = new Uint8Array(16)
      , g = new Uint8Array(16)
      , h = new Uint8Array(16)
      , i = {}
      , j = null
      , k = null
      , l = null
      , m = null
      , n = null
      , o = null
      , p = null
      , q = null
      , r = !1
      , s = null
      , t = null
      , u = null
      , v = null
      , w = null
      , x = null
      , y = null
      , z = null
      , A = null
      , B = null
      , C = null
      , D = null
      , E = null
      , F = null
      , G = null
      , H = a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS)
      , I = void 0
      , J = {}
      , K = new THREE.Vector4
      , L = null
      , M = null
      , N = new THREE.Vector4
      , O = new THREE.Vector4
      , P = a.createTexture();
    a.bindTexture(a.TEXTURE_2D, P),
    a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR),
    a.texImage2D(a.TEXTURE_2D, 0, a.RGB, 1, 1, 0, a.RGB, a.UNSIGNED_BYTE, new Uint8Array(3)),
    this.init = function() {
        this.clearColor(0, 0, 0, 1),
        this.clearDepth(1),
        this.clearStencil(0),
        this.enable(a.DEPTH_TEST),
        a.depthFunc(a.LEQUAL),
        a.frontFace(a.CCW),
        a.cullFace(a.BACK),
        this.enable(a.CULL_FACE),
        this.enable(a.BLEND),
        a.blendEquation(a.FUNC_ADD),
        a.blendFunc(a.SRC_ALPHA, a.ONE_MINUS_SRC_ALPHA)
    }
    ,
    this.initAttributes = function() {
        for (var a = 0, b = f.length; b > a; a++)
            f[a] = 0
    }
    ,
    this.enableAttribute = function(c) {
        f[c] = 1,
        0 === g[c] && (a.enableVertexAttribArray(c),
        g[c] = 1),
        0 !== h[c] && (b.get("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(c, 0),
        h[c] = 0)
    }
    ,
    this.enableAttributeAndDivisor = function(b, c, d) {
        f[b] = 1,
        0 === g[b] && (a.enableVertexAttribArray(b),
        g[b] = 1),
        h[b] !== c && (d.vertexAttribDivisorANGLE(b, c),
        h[b] = c)
    }
    ,
    this.disableUnusedAttributes = function() {
        for (var b = 0, c = g.length; c > b; b++)
            g[b] !== f[b] && (a.disableVertexAttribArray(b),
            g[b] = 0)
    }
    ,
    this.enable = function(b) {
        !0 !== i[b] && (a.enable(b),
        i[b] = !0)
    }
    ,
    this.disable = function(b) {
        !1 !== i[b] && (a.disable(b),
        i[b] = !1)
    }
    ,
    this.getCompressedTextureFormats = function() {
        if (null === j && (j = [],
        b.get("WEBGL_compressed_texture_pvrtc") || b.get("WEBGL_compressed_texture_s3tc") || b.get("WEBGL_compressed_texture_etc1")))
            for (var c = a.getParameter(a.COMPRESSED_TEXTURE_FORMATS), d = 0; d < c.length; d++)
                j.push(c[d]);
        return j
    }
    ,
    this.setBlending = function(b, d, e, f, g, h, i, j) {
        b === THREE.NoBlending ? this.disable(a.BLEND) : this.enable(a.BLEND),
        (b !== k || j !== r) && (b === THREE.AdditiveBlending ? j ? (a.blendEquationSeparate(a.FUNC_ADD, a.FUNC_ADD),
        a.blendFuncSeparate(a.ONE, a.ONE, a.ONE, a.ONE)) : (a.blendEquation(a.FUNC_ADD),
        a.blendFunc(a.SRC_ALPHA, a.ONE)) : b === THREE.SubtractiveBlending ? j ? (a.blendEquationSeparate(a.FUNC_ADD, a.FUNC_ADD),
        a.blendFuncSeparate(a.ZERO, a.ZERO, a.ONE_MINUS_SRC_COLOR, a.ONE_MINUS_SRC_ALPHA)) : (a.blendEquation(a.FUNC_ADD),
        a.blendFunc(a.ZERO, a.ONE_MINUS_SRC_COLOR)) : b === THREE.MultiplyBlending ? j ? (a.blendEquationSeparate(a.FUNC_ADD, a.FUNC_ADD),
        a.blendFuncSeparate(a.ZERO, a.ZERO, a.SRC_COLOR, a.SRC_ALPHA)) : (a.blendEquation(a.FUNC_ADD),
        a.blendFunc(a.ZERO, a.SRC_COLOR)) : j ? (a.blendEquationSeparate(a.FUNC_ADD, a.FUNC_ADD),
        a.blendFuncSeparate(a.ONE, a.ONE_MINUS_SRC_ALPHA, a.ONE, a.ONE_MINUS_SRC_ALPHA)) : (a.blendEquationSeparate(a.FUNC_ADD, a.FUNC_ADD),
        a.blendFuncSeparate(a.SRC_ALPHA, a.ONE_MINUS_SRC_ALPHA, a.ONE, a.ONE_MINUS_SRC_ALPHA)),
        k = b,
        r = j),
        b === THREE.CustomBlending ? (g = g || d,
        h = h || e,
        i = i || f,
        (d !== l || g !== o) && (a.blendEquationSeparate(c(d), c(g)),
        l = d,
        o = g),
        (e !== m || f !== n || h !== p || i !== q) && (a.blendFuncSeparate(c(e), c(f), c(h), c(i)),
        m = e,
        n = f,
        p = h,
        q = i)) : q = p = o = n = m = l = null
    }
    ,
    this.setDepthFunc = function(b) {
        if (s !== b) {
            if (b)
                switch (b) {
                case THREE.NeverDepth:
                    a.depthFunc(a.NEVER);
                    break;
                case THREE.AlwaysDepth:
                    a.depthFunc(a.ALWAYS);
                    break;
                case THREE.LessDepth:
                    a.depthFunc(a.LESS);
                    break;
                case THREE.LessEqualDepth:
                    a.depthFunc(a.LEQUAL);
                    break;
                case THREE.EqualDepth:
                    a.depthFunc(a.EQUAL);
                    break;
                case THREE.GreaterEqualDepth:
                    a.depthFunc(a.GEQUAL);
                    break;
                case THREE.GreaterDepth:
                    a.depthFunc(a.GREATER);
                    break;
                case THREE.NotEqualDepth:
                    a.depthFunc(a.NOTEQUAL);
                    break;
                default:
                    a.depthFunc(a.LEQUAL)
                }
            else
                a.depthFunc(a.LEQUAL);
            s = b
        }
    }
    ,
    this.setDepthTest = function(b) {
        b ? this.enable(a.DEPTH_TEST) : this.disable(a.DEPTH_TEST)
    }
    ,
    this.setDepthWrite = function(b) {
        t !== b && (a.depthMask(b),
        t = b)
    }
    ,
    this.setColorWrite = function(b) {
        u !== b && (a.colorMask(b, b, b, b),
        u = b)
    }
    ,
    this.setStencilFunc = function(b, c, d) {
        (w !== b || x !== c || y !== d) && (a.stencilFunc(b, c, d),
        w = b,
        x = c,
        y = d)
    }
    ,
    this.setStencilOp = function(b, c, d) {
        (z !== b || A !== c || B !== d) && (a.stencilOp(b, c, d),
        z = b,
        A = c,
        B = d)
    }
    ,
    this.setStencilTest = function(b) {
        b ? this.enable(a.STENCIL_TEST) : this.disable(a.STENCIL_TEST)
    }
    ,
    this.setStencilWrite = function(b) {
        v !== b && (a.stencilMask(b),
        v = b)
    }
    ,
    this.setFlipSided = function(b) {
        C !== b && (b ? a.frontFace(a.CW) : a.frontFace(a.CCW),
        C = b)
    }
    ,
    this.setLineWidth = function(b) {
        b !== D && (a.lineWidth(b),
        D = b)
    }
    ,
    this.setPolygonOffset = function(b, c, d) {
        b ? this.enable(a.POLYGON_OFFSET_FILL) : this.disable(a.POLYGON_OFFSET_FILL),
        !b || E === c && F === d || (a.polygonOffset(c, d),
        E = c,
        F = d)
    }
    ,
    this.getScissorTest = function() {
        return G
    }
    ,
    this.setScissorTest = function(b) {
        (G = b) ? this.enable(a.SCISSOR_TEST) : this.disable(a.SCISSOR_TEST)
    }
    ,
    this.activeTexture = function(b) {
        void 0 === b && (b = a.TEXTURE0 + H - 1),
        I !== b && (a.activeTexture(b),
        I = b)
    }
    ,
    this.bindTexture = function(b, c) {
        void 0 === I && d.activeTexture();
        var e = J[I];
        void 0 === e && (e = {
            type: void 0,
            texture: void 0
        },
        J[I] = e),
        (e.type !== b || e.texture !== c) && (a.bindTexture(b, c || P),
        e.type = b,
        e.texture = c)
    }
    ,
    this.compressedTexImage2D = function() {
        try {
            a.compressedTexImage2D.apply(a, arguments)
        } catch (b) {
            console.error(b)
        }
    }
    ,
    this.texImage2D = function() {
        try {
            a.texImage2D.apply(a, arguments)
        } catch (b) {
            console.error(b)
        }
    }
    ,
    this.clearColor = function(b, c, d, f) {
        e.set(b, c, d, f),
        !1 === K.equals(e) && (a.clearColor(b, c, d, f),
        K.copy(e))
    }
    ,
    this.clearDepth = function(b) {
        L !== b && (a.clearDepth(b),
        L = b)
    }
    ,
    this.clearStencil = function(b) {
        M !== b && (a.clearStencil(b),
        M = b)
    }
    ,
    this.scissor = function(b) {
        !1 === N.equals(b) && (a.scissor(b.x, b.y, b.z, b.w),
        N.copy(b))
    }
    ,
    this.viewport = function(b) {
        !1 === O.equals(b) && (a.viewport(b.x, b.y, b.z, b.w),
        O.copy(b))
    }
    ,
    this.reset = function() {
        for (var b = 0; b < g.length; b++)
            1 === g[b] && (a.disableVertexAttribArray(b),
            g[b] = 0);
        i = {},
        j = null ,
        I = void 0,
        J = {},
        C = v = t = u = k = null
    }
}
,
THREE.LensFlarePlugin = function(a, b) {
    var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s = a.context, t = a.state;
    this.render = function(u, v, w) {
        if (0 !== b.length) {
            u = new THREE.Vector3;
            var x = w.w / w.z
              , y = .5 * w.z
              , z = .5 * w.w
              , A = 16 / w.w
              , B = new THREE.Vector2(A * x,A)
              , C = new THREE.Vector3(1,1,0)
              , D = new THREE.Vector2(1,1);
            if (void 0 === o) {
                var A = new Float32Array([-1, -1, 0, 0, 1, -1, 1, 0, 1, 1, 1, 1, -1, 1, 0, 1])
                  , E = new Uint16Array([0, 1, 2, 0, 2, 3]);
                m = s.createBuffer(),
                n = s.createBuffer(),
                s.bindBuffer(s.ARRAY_BUFFER, m),
                s.bufferData(s.ARRAY_BUFFER, A, s.STATIC_DRAW),
                s.bindBuffer(s.ELEMENT_ARRAY_BUFFER, n),
                s.bufferData(s.ELEMENT_ARRAY_BUFFER, E, s.STATIC_DRAW),
                q = s.createTexture(),
                r = s.createTexture(),
                t.bindTexture(s.TEXTURE_2D, q),
                s.texImage2D(s.TEXTURE_2D, 0, s.RGB, 16, 16, 0, s.RGB, s.UNSIGNED_BYTE, null ),
                s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_S, s.CLAMP_TO_EDGE),
                s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_T, s.CLAMP_TO_EDGE),
                s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MAG_FILTER, s.NEAREST),
                s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MIN_FILTER, s.NEAREST),
                t.bindTexture(s.TEXTURE_2D, r),
                s.texImage2D(s.TEXTURE_2D, 0, s.RGBA, 16, 16, 0, s.RGBA, s.UNSIGNED_BYTE, null ),
                s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_S, s.CLAMP_TO_EDGE),
                s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_T, s.CLAMP_TO_EDGE),
                s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MAG_FILTER, s.NEAREST),
                s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MIN_FILTER, s.NEAREST);
                var A = (p = 0 < s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS)) ? {
                    vertexShader: "uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nuniform sampler2D occlusionMap;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif ( renderType == 2 ) {\nvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );\nvVisibility =        visibility.r / 9.0;\nvVisibility *= 1.0 - visibility.g / 9.0;\nvVisibility *=       visibility.b / 9.0;\nvVisibility *= 1.0 - visibility.a / 9.0;\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
                    fragmentShader: "uniform lowp int renderType;\nuniform sampler2D map;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nif ( renderType == 0 ) {\ngl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );\n} else if ( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * vVisibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"
                } : {
                    vertexShader: "uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif ( renderType == 2 ) {\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
                    fragmentShader: "precision mediump float;\nuniform lowp int renderType;\nuniform sampler2D map;\nuniform sampler2D occlusionMap;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvoid main() {\nif ( renderType == 0 ) {\ngl_FragColor = vec4( texture2D( map, vUV ).rgb, 0.0 );\n} else if ( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nfloat visibility = texture2D( occlusionMap, vec2( 0.5, 0.1 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) ).a;\nvisibility = ( 1.0 - visibility / 4.0 );\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * visibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"
                }
                  , E = s.createProgram()
                  , F = s.createShader(s.FRAGMENT_SHADER)
                  , G = s.createShader(s.VERTEX_SHADER)
                  , H = "precision " + a.getPrecision() + " float;\n";
                s.shaderSource(F, H + A.fragmentShader),
                s.shaderSource(G, H + A.vertexShader),
                s.compileShader(F),
                s.compileShader(G),
                s.attachShader(E, F),
                s.attachShader(E, G),
                s.linkProgram(E),
                o = E,
                k = s.getAttribLocation(o, "position"),
                l = s.getAttribLocation(o, "uv"),
                c = s.getUniformLocation(o, "renderType"),
                d = s.getUniformLocation(o, "map"),
                e = s.getUniformLocation(o, "occlusionMap"),
                f = s.getUniformLocation(o, "opacity"),
                g = s.getUniformLocation(o, "color"),
                h = s.getUniformLocation(o, "scale"),
                i = s.getUniformLocation(o, "rotation"),
                j = s.getUniformLocation(o, "screenPosition")
            }
            for (s.useProgram(o),
            t.initAttributes(),
            t.enableAttribute(k),
            t.enableAttribute(l),
            t.disableUnusedAttributes(),
            s.uniform1i(e, 0),
            s.uniform1i(d, 1),
            s.bindBuffer(s.ARRAY_BUFFER, m),
            s.vertexAttribPointer(k, 2, s.FLOAT, !1, 16, 0),
            s.vertexAttribPointer(l, 2, s.FLOAT, !1, 16, 8),
            s.bindBuffer(s.ELEMENT_ARRAY_BUFFER, n),
            t.disable(s.CULL_FACE),
            t.setDepthWrite(!1),
            E = 0,
            F = b.length; F > E; E++)
                if (A = 16 / w.w,
                B.set(A * x, A),
                G = b[E],
                u.set(G.matrixWorld.elements[12], G.matrixWorld.elements[13], G.matrixWorld.elements[14]),
                u.applyMatrix4(v.matrixWorldInverse),
                u.applyProjection(v.projectionMatrix),
                C.copy(u),
                D.x = C.x * y + y,
                D.y = C.y * z + z,
                p || 0 < D.x && D.x < w.z && 0 < D.y && D.y < w.w) {
                    t.activeTexture(s.TEXTURE0),
                    t.bindTexture(s.TEXTURE_2D, null ),
                    t.activeTexture(s.TEXTURE1),
                    t.bindTexture(s.TEXTURE_2D, q),
                    s.copyTexImage2D(s.TEXTURE_2D, 0, s.RGB, w.x + D.x - 8, w.y + D.y - 8, 16, 16, 0),
                    s.uniform1i(c, 0),
                    s.uniform2f(h, B.x, B.y),
                    s.uniform3f(j, C.x, C.y, C.z),
                    t.disable(s.BLEND),
                    t.enable(s.DEPTH_TEST),
                    s.drawElements(s.TRIANGLES, 6, s.UNSIGNED_SHORT, 0),
                    t.activeTexture(s.TEXTURE0),
                    t.bindTexture(s.TEXTURE_2D, r),
                    s.copyTexImage2D(s.TEXTURE_2D, 0, s.RGBA, w.x + D.x - 8, w.y + D.y - 8, 16, 16, 0),
                    s.uniform1i(c, 1),
                    t.disable(s.DEPTH_TEST),
                    t.activeTexture(s.TEXTURE1),
                    t.bindTexture(s.TEXTURE_2D, q),
                    s.drawElements(s.TRIANGLES, 6, s.UNSIGNED_SHORT, 0),
                    G.positionScreen.copy(C),
                    G.customUpdateCallback ? G.customUpdateCallback(G) : G.updateLensFlares(),
                    s.uniform1i(c, 2),
                    t.enable(s.BLEND);
                    for (var H = 0, I = G.lensFlares.length; I > H; H++) {
                        var J = G.lensFlares[H];
                        .001 < J.opacity && .001 < J.scale && (C.x = J.x,
                        C.y = J.y,
                        C.z = J.z,
                        A = J.size * J.scale / w.w,
                        B.x = A * x,
                        B.y = A,
                        s.uniform3f(j, C.x, C.y, C.z),
                        s.uniform2f(h, B.x, B.y),
                        s.uniform1f(i, J.rotation),
                        s.uniform1f(f, J.opacity),
                        s.uniform3f(g, J.color.r, J.color.g, J.color.b),
                        t.setBlending(J.blending, J.blendEquation, J.blendSrc, J.blendDst),
                        a.setTexture(J.texture, 1),
                        s.drawElements(s.TRIANGLES, 6, s.UNSIGNED_SHORT, 0))
                    }
                }
            t.enable(s.CULL_FACE),
            t.enable(s.DEPTH_TEST),
            t.setDepthWrite(!0),
            a.resetGLState()
        }
    }
}
,
THREE.SpritePlugin = function(a, b) {
    function c(a, b) {
        return a.renderOrder !== b.renderOrder ? a.renderOrder - b.renderOrder : a.z !== b.z ? b.z - a.z : b.id - a.id
    }
    var d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y = a.context, z = a.state, A = new THREE.Vector3, B = new THREE.Quaternion, C = new THREE.Vector3;
    this.render = function(D, E) {
        if (0 !== b.length) {
            if (void 0 === w) {
                var F = new Float32Array([-.5, -.5, 0, 0, .5, -.5, 1, 0, .5, .5, 1, 1, -.5, .5, 0, 1])
                  , G = new Uint16Array([0, 1, 2, 0, 2, 3]);
                u = y.createBuffer(),
                v = y.createBuffer(),
                y.bindBuffer(y.ARRAY_BUFFER, u),
                y.bufferData(y.ARRAY_BUFFER, F, y.STATIC_DRAW),
                y.bindBuffer(y.ELEMENT_ARRAY_BUFFER, v),
                y.bufferData(y.ELEMENT_ARRAY_BUFFER, G, y.STATIC_DRAW);
                var F = y.createProgram()
                  , G = y.createShader(y.VERTEX_SHADER)
                  , H = y.createShader(y.FRAGMENT_SHADER);
                y.shaderSource(G, ["precision " + a.getPrecision() + " float;", "uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float rotation;\nuniform vec2 scale;\nuniform vec2 uvOffset;\nuniform vec2 uvScale;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uvOffset + uv * uvScale;\nvec2 alignedPosition = position * scale;\nvec2 rotatedPosition;\nrotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\nrotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\nvec4 finalPosition;\nfinalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\nfinalPosition.xy += rotatedPosition;\nfinalPosition = projectionMatrix * finalPosition;\ngl_Position = finalPosition;\n}"].join("\n")),
                y.shaderSource(H, ["precision " + a.getPrecision() + " float;", "uniform vec3 color;\nuniform sampler2D map;\nuniform float opacity;\nuniform int fogType;\nuniform vec3 fogColor;\nuniform float fogDensity;\nuniform float fogNear;\nuniform float fogFar;\nuniform float alphaTest;\nvarying vec2 vUV;\nvoid main() {\nvec4 texture = texture2D( map, vUV );\nif ( texture.a < alphaTest ) discard;\ngl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\nif ( fogType > 0 ) {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat fogFactor = 0.0;\nif ( fogType == 1 ) {\nfogFactor = smoothstep( fogNear, fogFar, depth );\n} else {\nconst float LOG2 = 1.442695;\nfogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n}\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}\n}"].join("\n")),
                y.compileShader(G),
                y.compileShader(H),
                y.attachShader(F, G),
                y.attachShader(F, H),
                y.linkProgram(F),
                w = F,
                s = y.getAttribLocation(w, "position"),
                t = y.getAttribLocation(w, "uv"),
                d = y.getUniformLocation(w, "uvOffset"),
                e = y.getUniformLocation(w, "uvScale"),
                f = y.getUniformLocation(w, "rotation"),
                g = y.getUniformLocation(w, "scale"),
                h = y.getUniformLocation(w, "color"),
                i = y.getUniformLocation(w, "map"),
                j = y.getUniformLocation(w, "opacity"),
                k = y.getUniformLocation(w, "modelViewMatrix"),
                l = y.getUniformLocation(w, "projectionMatrix"),
                m = y.getUniformLocation(w, "fogType"),
                n = y.getUniformLocation(w, "fogDensity"),
                o = y.getUniformLocation(w, "fogNear"),
                p = y.getUniformLocation(w, "fogFar"),
                q = y.getUniformLocation(w, "fogColor"),
                r = y.getUniformLocation(w, "alphaTest"),
                F = document.createElement("canvas"),
                F.width = 8,
                F.height = 8,
                G = F.getContext("2d"),
                G.fillStyle = "white",
                G.fillRect(0, 0, 8, 8),
                x = new THREE.Texture(F),
                x.needsUpdate = !0
            }
            y.useProgram(w),
            z.initAttributes(),
            z.enableAttribute(s),
            z.enableAttribute(t),
            z.disableUnusedAttributes(),
            z.disable(y.CULL_FACE),
            z.enable(y.BLEND),
            y.bindBuffer(y.ARRAY_BUFFER, u),
            y.vertexAttribPointer(s, 2, y.FLOAT, !1, 16, 0),
            y.vertexAttribPointer(t, 2, y.FLOAT, !1, 16, 8),
            y.bindBuffer(y.ELEMENT_ARRAY_BUFFER, v),
            y.uniformMatrix4fv(l, !1, E.projectionMatrix.elements),
            z.activeTexture(y.TEXTURE0),
            y.uniform1i(i, 0),
            G = F = 0,
            (H = D.fog) ? (y.uniform3f(q, H.color.r, H.color.g, H.color.b),
            H instanceof THREE.Fog ? (y.uniform1f(o, H.near),
            y.uniform1f(p, H.far),
            y.uniform1i(m, 1),
            G = F = 1) : H instanceof THREE.FogExp2 && (y.uniform1f(n, H.density),
            y.uniform1i(m, 2),
            G = F = 2)) : (y.uniform1i(m, 0),
            G = F = 0);
            for (var H = 0, I = b.length; I > H; H++) {
                var J = b[H];
                J.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse, J.matrixWorld),
                J.z = -J.modelViewMatrix.elements[14]
            }
            b.sort(c);
            for (var K = [], H = 0, I = b.length; I > H; H++) {
                var J = b[H]
                  , L = J.material;
                y.uniform1f(r, L.alphaTest),
                y.uniformMatrix4fv(k, !1, J.modelViewMatrix.elements),
                J.matrixWorld.decompose(A, B, C),
                K[0] = C.x,
                K[1] = C.y,
                J = 0,
                D.fog && L.fog && (J = G),
                F !== J && (y.uniform1i(m, J),
                F = J),
                null !== L.map ? (y.uniform2f(d, L.map.offset.x, L.map.offset.y),
                y.uniform2f(e, L.map.repeat.x, L.map.repeat.y)) : (y.uniform2f(d, 0, 0),
                y.uniform2f(e, 1, 1)),
                y.uniform1f(j, L.opacity),
                y.uniform3f(h, L.color.r, L.color.g, L.color.b),
                y.uniform1f(f, L.rotation),
                y.uniform2fv(g, K),
                z.setBlending(L.blending, L.blendEquation, L.blendSrc, L.blendDst),
                z.setDepthTest(L.depthTest),
                z.setDepthWrite(L.depthWrite),
                L.map && L.map.image && L.map.image.width ? a.setTexture(L.map, 0) : a.setTexture(x, 0),
                y.drawElements(y.TRIANGLES, 6, y.UNSIGNED_SHORT, 0)
            }
            z.enable(y.CULL_FACE),
            a.resetGLState()
        }
    }
}
,
Object.defineProperties(THREE.Box2.prototype, {
    empty: {
        value: function() {
            return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),
            this.isEmpty()
        }
    },
    isIntersectionBox: {
        value: function(a) {
            return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),
            this.intersectsBox(a)
        }
    }
}),
Object.defineProperties(THREE.Box3.prototype, {
    empty: {
        value: function() {
            return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),
            this.isEmpty()
        }
    },
    isIntersectionBox: {
        value: function(a) {
            return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),
            this.intersectsBox(a)
        }
    },
    isIntersectionSphere: {
        value: function(a) {
            return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),
            this.intersectsSphere(a)
        }
    }
}),
Object.defineProperties(THREE.Matrix3.prototype, {
    multiplyVector3: {
        value: function(a) {
            return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),
            a.applyMatrix3(this)
        }
    },
    multiplyVector3Array: {
        value: function(a) {
            return console.warn("THREE.Matrix3: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."),
            this.applyToVector3Array(a)
        }
    }
}),
Object.defineProperties(THREE.Matrix4.prototype, {
    extractPosition: {
        value: function(a) {
            return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),
            this.copyPosition(a)
        }
    },
    setRotationFromQuaternion: {
        value: function(a) {
            return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),
            this.makeRotationFromQuaternion(a)
        }
    },
    multiplyVector3: {
        value: function(a) {
            return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead."),
            a.applyProjection(this)
        }
    },
    multiplyVector4: {
        value: function(a) {
            return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),
            a.applyMatrix4(this)
        }
    },
    multiplyVector3Array: {
        value: function(a) {
            return console.warn("THREE.Matrix4: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."),
            this.applyToVector3Array(a)
        }
    },
    rotateAxis: {
        value: function(a) {
            console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),
            a.transformDirection(this)
        }
    },
    crossVector: {
        value: function(a) {
            return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),
            a.applyMatrix4(this)
        }
    },
    translate: {
        value: function(a) {
            console.error("THREE.Matrix4: .translate() has been removed.")
        }
    },
    rotateX: {
        value: function(a) {
            console.error("THREE.Matrix4: .rotateX() has been removed.")
        }
    },
    rotateY: {
        value: function(a) {
            console.error("THREE.Matrix4: .rotateY() has been removed.")
        }
    },
    rotateZ: {
        value: function(a) {
            console.error("THREE.Matrix4: .rotateZ() has been removed.")
        }
    },
    rotateByAxis: {
        value: function(a, b) {
            console.error("THREE.Matrix4: .rotateByAxis() has been removed.")
        }
    }
}),
Object.defineProperties(THREE.Plane.prototype, {
    isIntersectionLine: {
        value: function(a) {
            return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),
            this.intersectsLine(a)
        }
    }
}),
Object.defineProperties(THREE.Quaternion.prototype, {
    multiplyVector3: {
        value: function(a) {
            return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),
            a.applyQuaternion(this)
        }
    }
}),
Object.defineProperties(THREE.Ray.prototype, {
    isIntersectionBox: {
        value: function(a) {
            return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),
            this.intersectsBox(a)
        }
    },
    isIntersectionPlane: {
        value: function(a) {
            return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),
            this.intersectsPlane(a)
        }
    },
    isIntersectionSphere: {
        value: function(a) {
            return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),
            this.intersectsSphere(a)
        }
    }
}),
Object.defineProperties(THREE.Vector3.prototype, {
    setEulerFromRotationMatrix: {
        value: function() {
            console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
        }
    },
    setEulerFromQuaternion: {
        value: function() {
            console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
        }
    },
    getPositionFromMatrix: {
        value: function(a) {
            return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),
            this.setFromMatrixPosition(a)
        }
    },
    getScaleFromMatrix: {
        value: function(a) {
            return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),
            this.setFromMatrixScale(a)
        }
    },
    getColumnFromMatrix: {
        value: function(a, b) {
            return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),
            this.setFromMatrixColumn(a, b)
        }
    }
}),
THREE.Face4 = function(a, b, c, d, e, f, g) {
    return console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead."),
    new THREE.Face3(a,b,c,e,f,g)
}
,
THREE.Vertex = function(a, b, c) {
    return console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead."),
    new THREE.Vector3(a,b,c)
}
,
Object.defineProperties(THREE.Object3D.prototype, {
    eulerOrder: {
        get: function() {
            return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),
            this.rotation.order
        },
        set: function(a) {
            console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),
            this.rotation.order = a
        }
    },
    getChildByName: {
        value: function(a) {
            return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),
            this.getObjectByName(a)
        }
    },
    renderDepth: {
        set: function(a) {
            console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")
        }
    },
    translate: {
        value: function(a, b) {
            return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),
            this.translateOnAxis(b, a)
        }
    },
    useQuaternion: {
        get: function() {
            console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
        },
        set: function(a) {
            console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
        }
    }
}),
Object.defineProperties(THREE, {
    PointCloud: {
        value: function(a, b) {
            return console.warn("THREE.PointCloud has been renamed to THREE.Points."),
            new THREE.Points(a,b)
        }
    },
    ParticleSystem: {
        value: function(a, b) {
            return console.warn("THREE.ParticleSystem has been renamed to THREE.Points."),
            new THREE.Points(a,b)
        }
    }
}),
Object.defineProperties(THREE.Light.prototype, {
    onlyShadow: {
        set: function(a) {
            console.warn("THREE.Light: .onlyShadow has been removed.")
        }
    },
    shadowCameraFov: {
        set: function(a) {
            console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),
            this.shadow.camera.fov = a
        }
    },
    shadowCameraLeft: {
        set: function(a) {
            console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),
            this.shadow.camera.left = a
        }
    },
    shadowCameraRight: {
        set: function(a) {
            console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),
            this.shadow.camera.right = a
        }
    },
    shadowCameraTop: {
        set: function(a) {
            console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),
            this.shadow.camera.top = a
        }
    },
    shadowCameraBottom: {
        set: function(a) {
            console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),
            this.shadow.camera.bottom = a
        }
    },
    shadowCameraNear: {
        set: function(a) {
            console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),
            this.shadow.camera.near = a
        }
    },
    shadowCameraFar: {
        set: function(a) {
            console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),
            this.shadow.camera.far = a
        }
    },
    shadowCameraVisible: {
        set: function(a) {
            console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")
        }
    },
    shadowBias: {
        set: function(a) {
            console.warn("THREE.Light: .shadowBias is now .shadow.bias."),
            this.shadow.bias = a
        }
    },
    shadowDarkness: {
        set: function(a) {
            console.warn("THREE.Light: .shadowDarkness has been removed.")
        }
    },
    shadowMapWidth: {
        set: function(a) {
            console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),
            this.shadow.mapSize.width = a
        }
    },
    shadowMapHeight: {
        set: function(a) {
            console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),
            this.shadow.mapSize.height = a
        }
    }
}),
Object.defineProperties(THREE.BufferAttribute.prototype, {
    length: {
        get: function() {
            return console.warn("THREE.BufferAttribute: .length has been deprecated. Please use .count."),
            this.array.length
        }
    }
}),
Object.defineProperties(THREE.BufferGeometry.prototype, {
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
    },
    addIndex: {
        value: function(a) {
            console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),
            this.setIndex(a)
        }
    },
    addDrawCall: {
        value: function(a, b, c) {
            void 0 !== c && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),
            console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),
            this.addGroup(a, b)
        }
    },
    clearDrawCalls: {
        value: function() {
            console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),
            this.clearGroups()
        }
    },
    computeTangents: {
        value: function() {
            console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")
        }
    },
    computeOffsets: {
        value: function() {
            console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")
        }
    }
}),
Object.defineProperties(THREE.Material.prototype, {
    wrapAround: {
        get: function() {
            console.warn("THREE." + this.type + ": .wrapAround has been removed.")
        },
        set: function(a) {
            console.warn("THREE." + this.type + ": .wrapAround has been removed.")
        }
    },
    wrapRGB: {
        get: function() {
            return console.warn("THREE." + this.type + ": .wrapRGB has been removed."),
            new THREE.Color
        }
    }
}),
Object.defineProperties(THREE, {
    PointCloudMaterial: {
        value: function(a) {
            return console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."),
            new THREE.PointsMaterial(a)
        }
    },
    ParticleBasicMaterial: {
        value: function(a) {
            return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."),
            new THREE.PointsMaterial(a)
        }
    },
    ParticleSystemMaterial: {
        value: function(a) {
            return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."),
            new THREE.PointsMaterial(a)
        }
    }
}),
Object.defineProperties(THREE.MeshPhongMaterial.prototype, {
    metal: {
        get: function() {
            return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."),
            !1
        },
        set: function(a) {
            console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")
        }
    }
}),
Object.defineProperties(THREE.ShaderMaterial.prototype, {
    derivatives: {
        get: function() {
            return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),
            this.extensions.derivatives
        },
        set: function(a) {
            console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),
            this.extensions.derivatives = a
        }
    }
}),
Object.defineProperties(THREE.WebGLRenderer.prototype, {
    supportsFloatTextures: {
        value: function() {
            return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),
            this.extensions.get("OES_texture_float")
        }
    },
    supportsHalfFloatTextures: {
        value: function() {
            return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),
            this.extensions.get("OES_texture_half_float")
        }
    },
    supportsStandardDerivatives: {
        value: function() {
            return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),
            this.extensions.get("OES_standard_derivatives")
        }
    },
    supportsCompressedTextureS3TC: {
        value: function() {
            return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),
            this.extensions.get("WEBGL_compressed_texture_s3tc")
        }
    },
    supportsCompressedTexturePVRTC: {
        value: function() {
            return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),
            this.extensions.get("WEBGL_compressed_texture_pvrtc")
        }
    },
    supportsBlendMinMax: {
        value: function() {
            return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),
            this.extensions.get("EXT_blend_minmax")
        }
    },
    supportsVertexTextures: {
        value: function() {
            return this.capabilities.vertexTextures
        }
    },
    supportsInstancedArrays: {
        value: function() {
            return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),
            this.extensions.get("ANGLE_instanced_arrays")
        }
    },
    enableScissorTest: {
        value: function(a) {
            console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),
            this.setScissorTest(a)
        }
    },
    initMaterial: {
        value: function() {
            console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
        }
    },
    addPrePlugin: {
        value: function() {
            console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
        }
    },
    addPostPlugin: {
        value: function() {
            console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
        }
    },
    updateShadowMap: {
        value: function() {
            console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
        }
    },
    shadowMapEnabled: {
        get: function() {
            return this.shadowMap.enabled
        },
        set: function(a) {
            console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),
            this.shadowMap.enabled = a
        }
    },
    shadowMapType: {
        get: function() {
            return this.shadowMap.type
        },
        set: function(a) {
            console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),
            this.shadowMap.type = a
        }
    },
    shadowMapCullFace: {
        get: function() {
            return this.shadowMap.cullFace
        },
        set: function(a) {
            console.warn("THREE.WebGLRenderer: .shadowMapCullFace is now .shadowMap.cullFace."),
            this.shadowMap.cullFace = a
        }
    }
}),
Object.defineProperties(THREE.WebGLRenderTarget.prototype, {
    wrapS: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),
            this.texture.wrapS
        },
        set: function(a) {
            console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),
            this.texture.wrapS = a
        }
    },
    wrapT: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),
            this.texture.wrapT
        },
        set: function(a) {
            console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),
            this.texture.wrapT = a
        }
    },
    magFilter: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),
            this.texture.magFilter
        },
        set: function(a) {
            console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),
            this.texture.magFilter = a
        }
    },
    minFilter: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),
            this.texture.minFilter
        },
        set: function(a) {
            console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),
            this.texture.minFilter = a
        }
    },
    anisotropy: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),
            this.texture.anisotropy
        },
        set: function(a) {
            console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),
            this.texture.anisotropy = a
        }
    },
    offset: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),
            this.texture.offset
        },
        set: function(a) {
            console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),
            this.texture.offset = a
        }
    },
    repeat: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),
            this.texture.repeat
        },
        set: function(a) {
            console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),
            this.texture.repeat = a
        }
    },
    format: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),
            this.texture.format
        },
        set: function(a) {
            console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),
            this.texture.format = a
        }
    },
    type: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),
            this.texture.type
        },
        set: function(a) {
            console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),
            this.texture.type = a
        }
    },
    generateMipmaps: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),
            this.texture.generateMipmaps
        },
        set: function(a) {
            console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),
            this.texture.generateMipmaps = a
        }
    }
}),
THREE.GeometryUtils = {
    merge: function(a, b, c) {
        console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");
        var d;
        b instanceof THREE.Mesh && (b.matrixAutoUpdate && b.updateMatrix(),
        d = b.matrix,
        b = b.geometry),
        a.merge(b, d, c)
    },
    center: function(a) {
        return console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead."),
        a.center()
    }
},
THREE.ImageUtils = {
    crossOrigin: void 0,
    loadTexture: function(a, b, c, d) {
        console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
        var e = new THREE.TextureLoader;
        return e.setCrossOrigin(this.crossOrigin),
        a = e.load(a, c, void 0, d),
        b && (a.mapping = b),
        a
    },
    loadTextureCube: function(a, b, c, d) {
        console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
        var e = new THREE.CubeTextureLoader;
        return e.setCrossOrigin(this.crossOrigin),
        a = e.load(a, c, void 0, d),
        b && (a.mapping = b),
        a
    },
    loadCompressedTexture: function() {
        console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
    },
    loadCompressedTextureCube: function() {
        console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
    }
},
THREE.Projector = function() {
    console.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js."),
    this.projectVector = function(a, b) {
        console.warn("THREE.Projector: .projectVector() is now vector.project()."),
        a.project(b)
    }
    ,
    this.unprojectVector = function(a, b) {
        console.warn("THREE.Projector: .unprojectVector() is now vector.unproject()."),
        a.unproject(b)
    }
    ,
    this.pickingRay = function(a, b) {
        console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")
    }
}
,
THREE.CanvasRenderer = function() {
    console.error("THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js"),
    this.domElement = document.createElement("canvas"),
    this.clear = function() {}
    ,
    this.render = function() {}
    ,
    this.setClearColor = function() {}
    ,
    this.setSize = function() {}
}
,
THREE.MeshFaceMaterial = THREE.MultiMaterial,
THREE.CurveUtils = {
    tangentQuadraticBezier: function(a, b, c, d) {
        return 2 * (1 - a) * (c - b) + 2 * a * (d - c)
    },
    tangentCubicBezier: function(a, b, c, d, e) {
        return -3 * b * (1 - a) * (1 - a) + 3 * c * (1 - a) * (1 - a) - 6 * a * c * (1 - a) + 6 * a * d * (1 - a) - 3 * a * a * d + 3 * a * a * e
    },
    tangentSpline: function(a, b, c, d, e) {
        return 6 * a * a - 6 * a + (3 * a * a - 4 * a + 1) + (-6 * a * a + 6 * a) + (3 * a * a - 2 * a)
    },
    interpolate: function(a, b, c, d, e) {
        a = .5 * (c - a),
        d = .5 * (d - b);
        var f = e * e;
        return (2 * b - 2 * c + a + d) * e * f + (-3 * b + 3 * c - 2 * a - d) * f + a * e + b
    }
},
THREE.SceneUtils = {
    createMultiMaterialObject: function(a, b) {
        for (var c = new THREE.Group, d = 0, e = b.length; e > d; d++)
            c.add(new THREE.Mesh(a,b[d]));
        return c
    },
    detach: function(a, b, c) {
        a.applyMatrix(b.matrixWorld),
        b.remove(a),
        c.add(a)
    },
    attach: function(a, b, c) {
        var d = new THREE.Matrix4;
        d.getInverse(c.matrixWorld),
        a.applyMatrix(d),
        b.remove(a),
        c.add(a)
    }
},
THREE.ShapeUtils = {
    area: function(a) {
        for (var b = a.length, c = 0, d = b - 1, e = 0; b > e; d = e++)
            c += a[d].x * a[e].y - a[e].x * a[d].y;
        return .5 * c
    },
    triangulate: function() {
        return function(a, b) {
            var c = a.length;
            if (3 > c)
                return null ;
            var d, e, f, g = [], h = [], i = [];
            if (0 < THREE.ShapeUtils.area(a))
                for (e = 0; c > e; e++)
                    h[e] = e;
            else
                for (e = 0; c > e; e++)
                    h[e] = c - 1 - e;
            var j = 2 * c;
            for (e = c - 1; c > 2; ) {
                if (0 >= j--) {
                    console.warn("THREE.ShapeUtils: Unable to triangulate polygon! in triangulate()");
                    break
                }
                d = e,
                d >= c && (d = 0),
                e = d + 1,
                e >= c && (e = 0),
                f = e + 1,
                f >= c && (f = 0);
                var k;
                a: {
                    var l = k = void 0
                      , m = void 0
                      , n = void 0
                      , o = void 0
                      , p = void 0
                      , q = void 0
                      , r = void 0
                      , s = void 0
                      , l = a[h[d]].x
                      , m = a[h[d]].y
                      , n = a[h[e]].x
                      , o = a[h[e]].y
                      , p = a[h[f]].x
                      , q = a[h[f]].y;
                    if (Number.EPSILON > (n - l) * (q - m) - (o - m) * (p - l))
                        k = !1;
                    else {
                        var t = void 0
                          , u = void 0
                          , v = void 0
                          , w = void 0
                          , x = void 0
                          , y = void 0
                          , z = void 0
                          , A = void 0
                          , B = void 0
                          , C = void 0
                          , B = A = z = s = r = void 0
                          , t = p - n
                          , u = q - o
                          , v = l - p
                          , w = m - q
                          , x = n - l
                          , y = o - m;
                        for (k = 0; c > k; k++)
                            if (r = a[h[k]].x,
                            s = a[h[k]].y,
                            !(r === l && s === m || r === n && s === o || r === p && s === q) && (z = r - l,
                            A = s - m,
                            B = r - n,
                            C = s - o,
                            r -= p,
                            s -= q,
                            B = t * C - u * B,
                            z = x * A - y * z,
                            A = v * s - w * r,
                            B >= -Number.EPSILON && A >= -Number.EPSILON && z >= -Number.EPSILON)) {
                                k = !1;
                                break a
                            }
                        k = !0
                    }
                }
                if (k) {
                    for (g.push([a[h[d]], a[h[e]], a[h[f]]]),
                    i.push([h[d], h[e], h[f]]),
                    d = e,
                    f = e + 1; c > f; d++,
                    f++)
                        h[d] = h[f];
                    c--,
                    j = 2 * c
                }
            }
            return b ? i : g
        }
    }(),
    triangulateShape: function(a, b) {
        function c(a, b, c) {
            return a.x !== b.x ? a.x < b.x ? a.x <= c.x && c.x <= b.x : b.x <= c.x && c.x <= a.x : a.y < b.y ? a.y <= c.y && c.y <= b.y : b.y <= c.y && c.y <= a.y
        }
        function d(a, b, d, e, f) {
            var g = b.x - a.x
              , h = b.y - a.y
              , i = e.x - d.x
              , j = e.y - d.y
              , k = a.x - d.x
              , l = a.y - d.y
              , m = h * i - g * j
              , n = h * k - g * l;
            if (Math.abs(m) > Number.EPSILON) {
                if (m > 0) {
                    if (0 > n || n > m)
                        return [];
                    if (i = j * k - i * l,
                    0 > i || i > m)
                        return []
                } else {
                    if (n > 0 || m > n)
                        return [];
                    if (i = j * k - i * l,
                    i > 0 || m > i)
                        return []
                }
                return 0 === i ? !f || 0 !== n && n !== m ? [a] : [] : i === m ? !f || 0 !== n && n !== m ? [b] : [] : 0 === n ? [d] : n === m ? [e] : (f = i / m,
                [{
                    x: a.x + f * g,
                    y: a.y + f * h
                }])
            }
            return 0 !== n || j * k !== i * l ? [] : (h = 0 === g && 0 === h,
            i = 0 === i && 0 === j,
            h && i ? a.x !== d.x || a.y !== d.y ? [] : [a] : h ? c(d, e, a) ? [a] : [] : i ? c(a, b, d) ? [d] : [] : (0 !== g ? (a.x < b.x ? (g = a,
            i = a.x,
            h = b,
            a = b.x) : (g = b,
            i = b.x,
            h = a,
            a = a.x),
            d.x < e.x ? (b = d,
            m = d.x,
            j = e,
            d = e.x) : (b = e,
            m = e.x,
            j = d,
            d = d.x)) : (a.y < b.y ? (g = a,
            i = a.y,
            h = b,
            a = b.y) : (g = b,
            i = b.y,
            h = a,
            a = a.y),
            d.y < e.y ? (b = d,
            m = d.y,
            j = e,
            d = e.y) : (b = e,
            m = e.y,
            j = d,
            d = d.y)),
            m >= i ? m > a ? [] : a === m ? f ? [] : [b] : d >= a ? [b, h] : [b, j] : i > d ? [] : i === d ? f ? [] : [g] : d >= a ? [g, h] : [g, j]))
        }
        function e(a, b, c, d) {
            var e = b.x - a.x
              , f = b.y - a.y;
            b = c.x - a.x,
            c = c.y - a.y;
            var g = d.x - a.x;
            return d = d.y - a.y,
            a = e * c - f * b,
            e = e * d - f * g,
            Math.abs(a) > Number.EPSILON ? (b = g * c - d * b,
            a > 0 ? e >= 0 && b >= 0 : e >= 0 || b >= 0) : e > 0
        }
        var f, g, h, i, j, k = {};
        for (h = a.concat(),
        f = 0,
        g = b.length; g > f; f++)
            Array.prototype.push.apply(h, b[f]);
        for (f = 0,
        g = h.length; g > f; f++)
            j = h[f].x + ":" + h[f].y,
            void 0 !== k[j] && console.warn("THREE.Shape: Duplicate point", j),
            k[j] = f;
        f = function(a, b) {
            function c(a, b) {
                var c = q.length - 1
                  , d = a - 1;
                0 > d && (d = c);
                var f = a + 1;
                return f > c && (f = 0),
                (c = e(q[a], q[d], q[f], h[b])) ? (c = h.length - 1,
                d = b - 1,
                0 > d && (d = c),
                f = b + 1,
                f > c && (f = 0),
                (c = e(h[b], h[d], h[f], q[a])) ? !0 : !1) : !1
            }
            function f(a, b) {
                var c, e;
                for (c = 0; c < q.length; c++)
                    if (e = c + 1,
                    e %= q.length,
                    e = d(a, b, q[c], q[e], !0),
                    0 < e.length)
                        return !0;
                return !1
            }
            function g(a, c) {
                var e, f, g, h;
                for (e = 0; e < r.length; e++)
                    for (f = b[r[e]],
                    g = 0; g < f.length; g++)
                        if (h = g + 1,
                        h %= f.length,
                        h = d(a, c, f[g], f[h], !0),
                        0 < h.length)
                            return !0;
                return !1
            }
            var h, i, j, k, l, m, n, o, p, q = a.concat(), r = [], s = [], t = 0;
            for (i = b.length; i > t; t++)
                r.push(t);
            n = 0;
            for (var u = 2 * r.length; 0 < r.length; ) {
                if (u--,
                0 > u) {
                    console.log("Infinite Loop! Holes left:" + r.length + ", Probably Hole outside Shape!");
                    break
                }
                for (j = n; j < q.length; j++) {
                    for (k = q[j],
                    i = -1,
                    t = 0; t < r.length; t++)
                        if (l = r[t],
                        m = k.x + ":" + k.y + ":" + l,
                        void 0 === s[m]) {
                            for (h = b[l],
                            o = 0; o < h.length; o++)
                                if (l = h[o],
                                c(j, o) && !f(k, l) && !g(k, l)) {
                                    i = o,
                                    r.splice(t, 1),
                                    n = q.slice(0, j + 1),
                                    l = q.slice(j),
                                    o = h.slice(i),
                                    p = h.slice(0, i + 1),
                                    q = n.concat(o).concat(p).concat(l),
                                    n = j;
                                    break
                                }
                            if (i >= 0)
                                break;
                            s[m] = !0
                        }
                    if (i >= 0)
                        break
                }
            }
            return q
        }(a, b);
        var l = THREE.ShapeUtils.triangulate(f, !1);
        for (f = 0,
        g = l.length; g > f; f++)
            for (i = l[f],
            h = 0; 3 > h; h++)
                j = i[h].x + ":" + i[h].y,
                j = k[j],
                void 0 !== j && (i[h] = j);
        return l.concat()
    },
    isClockWise: function(a) {
        return 0 > THREE.ShapeUtils.area(a)
    },
    b2: function() {
        return function(a, b, c, d) {
            var e = 1 - a;
            return e * e * b + 2 * (1 - a) * a * c + a * a * d
        }
    }(),
    b3: function() {
        return function(a, b, c, d, e) {
            var f = 1 - a
              , g = 1 - a;
            return f * f * f * b + 3 * g * g * a * c + 3 * (1 - a) * a * a * d + a * a * a * e
        }
    }()
},
THREE.Curve = function() {}
,
THREE.Curve.prototype = {
    constructor: THREE.Curve,
    getPoint: function(a) {
        return console.warn("THREE.Curve: Warning, getPoint() not implemented!"),
        null
    },
    getPointAt: function(a) {
        return a = this.getUtoTmapping(a),
        this.getPoint(a)
    },
    getPoints: function(a) {
        a || (a = 5);
        var b, c = [];
        for (b = 0; a >= b; b++)
            c.push(this.getPoint(b / a));
        return c
    },
    getSpacedPoints: function(a) {
        a || (a = 5);
        var b, c = [];
        for (b = 0; a >= b; b++)
            c.push(this.getPointAt(b / a));
        return c
    },
    getLength: function() {
        var a = this.getLengths();
        return a[a.length - 1]
    },
    getLengths: function(a) {
        if (a || (a = this.__arcLengthDivisions ? this.__arcLengthDivisions : 200),
        this.cacheArcLengths && this.cacheArcLengths.length === a + 1 && !this.needsUpdate)
            return this.cacheArcLengths;
        this.needsUpdate = !1;
        var b, c, d = [], e = this.getPoint(0), f = 0;
        for (d.push(0),
        c = 1; a >= c; c++)
            b = this.getPoint(c / a),
            f += b.distanceTo(e),
            d.push(f),
            e = b;
        return this.cacheArcLengths = d
    },
    updateArcLengths: function() {
        this.needsUpdate = !0,
        this.getLengths()
    },
    getUtoTmapping: function(a, b) {
        var c, d = this.getLengths(), e = 0, f = d.length;
        c = b ? b : a * d[f - 1];
        for (var g, h = 0, i = f - 1; i >= h; )
            if (e = Math.floor(h + (i - h) / 2),
            g = d[e] - c,
            0 > g)
                h = e + 1;
            else {
                if (!(g > 0)) {
                    i = e;
                    break
                }
                i = e - 1
            }
        return e = i,
        d[e] === c ? e / (f - 1) : (h = d[e],
        d = (e + (c - h) / (d[e + 1] - h)) / (f - 1))
    },
    getTangent: function(a) {
        var b = a - 1e-4;
        return a += 1e-4,
        0 > b && (b = 0),
        a > 1 && (a = 1),
        b = this.getPoint(b),
        this.getPoint(a).clone().sub(b).normalize()
    },
    getTangentAt: function(a) {
        return a = this.getUtoTmapping(a),
        this.getTangent(a)
    }
},
THREE.Curve.create = function(a, b) {
    return a.prototype = Object.create(THREE.Curve.prototype),
    a.prototype.constructor = a,
    a.prototype.getPoint = b,
    a
}
,
THREE.CurvePath = function() {
    this.curves = [],
    this.autoClose = !1
}
,
THREE.CurvePath.prototype = Object.create(THREE.Curve.prototype),
THREE.CurvePath.prototype.constructor = THREE.CurvePath,
THREE.CurvePath.prototype.add = function(a) {
    this.curves.push(a)
}
,
THREE.CurvePath.prototype.closePath = function() {
    var a = this.curves[0].getPoint(0)
      , b = this.curves[this.curves.length - 1].getPoint(1);
    a.equals(b) || this.curves.push(new THREE.LineCurve(b,a))
}
,
THREE.CurvePath.prototype.getPoint = function(a) {
    for (var b = a * this.getLength(), c = this.getCurveLengths(), d = 0; d < c.length; ) {
        if (c[d] >= b)
            return a = this.curves[d],
            b = 1 - (c[d] - b) / a.getLength(),
            a.getPointAt(b);
        d++
    }
    return null
}
,
THREE.CurvePath.prototype.getLength = function() {
    var a = this.getCurveLengths();
    return a[a.length - 1]
}
,
THREE.CurvePath.prototype.getCurveLengths = function() {
    if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
        return this.cacheLengths;
    for (var a = [], b = 0, c = 0, d = this.curves.length; d > c; c++)
        b += this.curves[c].getLength(),
        a.push(b);
    return this.cacheLengths = a
}
,
THREE.CurvePath.prototype.createPointsGeometry = function(a) {
    return a = this.getPoints(a),
    this.createGeometry(a)
}
,
THREE.CurvePath.prototype.createSpacedPointsGeometry = function(a) {
    return a = this.getSpacedPoints(a),
    this.createGeometry(a)
}
,
THREE.CurvePath.prototype.createGeometry = function(a) {
    for (var b = new THREE.Geometry, c = 0, d = a.length; d > c; c++) {
        var e = a[c];
        b.vertices.push(new THREE.Vector3(e.x,e.y,e.z || 0))
    }
    return b
}
,
THREE.Font = function(a) {
    this.data = a
}
,
THREE.Font.prototype = {
    constructor: THREE.Font,
    generateShapes: function(a, b, c) {
        void 0 === b && (b = 100),
        void 0 === c && (c = 4);
        var d = this.data;
        a = String(a).split("");
        var e = b / d.resolution
          , f = 0;
        b = [];
        for (var g = 0; g < a.length; g++) {
            var h;
            h = e;
            var i = f
              , j = d.glyphs[a[g]] || d.glyphs["?"];
            if (j) {
                var k = new THREE.Path
                  , l = []
                  , m = THREE.ShapeUtils.b2
                  , n = THREE.ShapeUtils.b3
                  , o = void 0
                  , p = void 0
                  , q = p = o = void 0
                  , r = void 0
                  , s = void 0
                  , t = void 0
                  , u = void 0
                  , v = void 0
                  , r = void 0;
                if (j.o)
                    for (var w = j._cachedOutline || (j._cachedOutline = j.o.split(" ")), x = 0, y = w.length; y > x; )
                        switch (w[x++]) {
                        case "m":
                            o = w[x++] * h + i,
                            p = w[x++] * h,
                            k.moveTo(o, p);
                            break;
                        case "l":
                            o = w[x++] * h + i,
                            p = w[x++] * h,
                            k.lineTo(o, p);
                            break;
                        case "q":
                            if (o = w[x++] * h + i,
                            p = w[x++] * h,
                            s = w[x++] * h + i,
                            t = w[x++] * h,
                            k.quadraticCurveTo(s, t, o, p),
                            r = l[l.length - 1])
                                for (var q = r.x, r = r.y, z = 1; c >= z; z++) {
                                    var A = z / c;
                                    m(A, q, s, o),
                                    m(A, r, t, p)
                                }
                            break;
                        case "b":
                            if (o = w[x++] * h + i,
                            p = w[x++] * h,
                            s = w[x++] * h + i,
                            t = w[x++] * h,
                            u = w[x++] * h + i,
                            v = w[x++] * h,
                            k.bezierCurveTo(s, t, u, v, o, p),
                            r = l[l.length - 1])
                                for (q = r.x,
                                r = r.y,
                                z = 1; c >= z; z++)
                                    A = z / c,
                                    n(A, q, s, u, o),
                                    n(A, r, t, v, p)
                        }
                h = {
                    offset: j.ha * h,
                    path: k
                }
            } else
                h = void 0;
            f += h.offset,
            b.push(h.path)
        }
        for (c = [],
        d = 0,
        a = b.length; a > d; d++)
            Array.prototype.push.apply(c, b[d].toShapes());
        return c
    }
},
THREE.Path = function(a) {
    THREE.CurvePath.call(this),
    this.actions = [],
    a && this.fromPoints(a)
}
,
THREE.Path.prototype = Object.create(THREE.CurvePath.prototype),
THREE.Path.prototype.constructor = THREE.Path,
THREE.Path.prototype.fromPoints = function(a) {
    this.moveTo(a[0].x, a[0].y);
    for (var b = 1, c = a.length; c > b; b++)
        this.lineTo(a[b].x, a[b].y)
}
,
THREE.Path.prototype.moveTo = function(a, b) {
    this.actions.push({
        action: "moveTo",
        args: [a, b]
    })
}
,
THREE.Path.prototype.lineTo = function(a, b) {
    var c = this.actions[this.actions.length - 1].args
      , c = new THREE.LineCurve(new THREE.Vector2(c[c.length - 2],c[c.length - 1]),new THREE.Vector2(a,b));
    this.curves.push(c),
    this.actions.push({
        action: "lineTo",
        args: [a, b]
    })
}
,
THREE.Path.prototype.quadraticCurveTo = function(a, b, c, d) {
    var e = this.actions[this.actions.length - 1].args
      , e = new THREE.QuadraticBezierCurve(new THREE.Vector2(e[e.length - 2],e[e.length - 1]),new THREE.Vector2(a,b),new THREE.Vector2(c,d));
    this.curves.push(e),
    this.actions.push({
        action: "quadraticCurveTo",
        args: [a, b, c, d]
    })
}
,
THREE.Path.prototype.bezierCurveTo = function(a, b, c, d, e, f) {
    var g = this.actions[this.actions.length - 1].args
      , g = new THREE.CubicBezierCurve(new THREE.Vector2(g[g.length - 2],g[g.length - 1]),new THREE.Vector2(a,b),new THREE.Vector2(c,d),new THREE.Vector2(e,f));
    this.curves.push(g),
    this.actions.push({
        action: "bezierCurveTo",
        args: [a, b, c, d, e, f]
    })
}
,
THREE.Path.prototype.splineThru = function(a) {
    var b = Array.prototype.slice.call(arguments)
      , c = this.actions[this.actions.length - 1].args
      , c = [new THREE.Vector2(c[c.length - 2],c[c.length - 1])];
    Array.prototype.push.apply(c, a),
    c = new THREE.SplineCurve(c),
    this.curves.push(c),
    this.actions.push({
        action: "splineThru",
        args: b
    })
}
,
THREE.Path.prototype.arc = function(a, b, c, d, e, f) {
    var g = this.actions[this.actions.length - 1].args;
    this.absarc(a + g[g.length - 2], b + g[g.length - 1], c, d, e, f)
}
,
THREE.Path.prototype.absarc = function(a, b, c, d, e, f) {
    this.absellipse(a, b, c, c, d, e, f)
}
,
THREE.Path.prototype.ellipse = function(a, b, c, d, e, f, g, h) {
    var i = this.actions[this.actions.length - 1].args;
    this.absellipse(a + i[i.length - 2], b + i[i.length - 1], c, d, e, f, g, h)
}
,
THREE.Path.prototype.absellipse = function(a, b, c, d, e, f, g, h) {
    var i = [a, b, c, d, e, f, g, h || 0];
    a = new THREE.EllipseCurve(a,b,c,d,e,f,g,h),
    this.curves.push(a),
    a = a.getPoint(1),
    i.push(a.x),
    i.push(a.y),
    this.actions.push({
        action: "ellipse",
        args: i
    })
}
,
THREE.Path.prototype.getSpacedPoints = function(a) {
    a || (a = 40);
    for (var b = [], c = 0; a > c; c++)
        b.push(this.getPoint(c / a));
    return this.autoClose && b.push(b[0]),
    b
}
,
THREE.Path.prototype.getPoints = function(a) {
    a = a || 12;
    for (var b, c, d, e, f, g, h, i, j, k, l = THREE.ShapeUtils.b2, m = THREE.ShapeUtils.b3, n = [], o = 0, p = this.actions.length; p > o; o++) {
        j = this.actions[o];
        var q = j.args;
        switch (j.action) {
        case "moveTo":
            n.push(new THREE.Vector2(q[0],q[1]));
            break;
        case "lineTo":
            n.push(new THREE.Vector2(q[0],q[1]));
            break;
        case "quadraticCurveTo":
            for (b = q[2],
            c = q[3],
            f = q[0],
            g = q[1],
            0 < n.length ? (j = n[n.length - 1],
            h = j.x,
            i = j.y) : (j = this.actions[o - 1].args,
            h = j[j.length - 2],
            i = j[j.length - 1]),
            q = 1; a >= q; q++)
                k = q / a,
                j = l(k, h, f, b),
                k = l(k, i, g, c),
                n.push(new THREE.Vector2(j,k));
            break;
        case "bezierCurveTo":
            for (b = q[4],
            c = q[5],
            f = q[0],
            g = q[1],
            d = q[2],
            e = q[3],
            0 < n.length ? (j = n[n.length - 1],
            h = j.x,
            i = j.y) : (j = this.actions[o - 1].args,
            h = j[j.length - 2],
            i = j[j.length - 1]),
            q = 1; a >= q; q++)
                k = q / a,
                j = m(k, h, f, d, b),
                k = m(k, i, g, e, c),
                n.push(new THREE.Vector2(j,k));
            break;
        case "splineThru":
            for (j = this.actions[o - 1].args,
            k = [new THREE.Vector2(j[j.length - 2],j[j.length - 1])],
            j = a * q[0].length,
            k = k.concat(q[0]),
            k = new THREE.SplineCurve(k),
            q = 1; j >= q; q++)
                n.push(k.getPointAt(q / j));
            break;
        case "arc":
            for (b = q[0],
            c = q[1],
            g = q[2],
            d = q[3],
            j = q[4],
            f = !!q[5],
            h = j - d,
            i = 2 * a,
            q = 1; i >= q; q++)
                k = q / i,
                f || (k = 1 - k),
                k = d + k * h,
                j = b + g * Math.cos(k),
                k = c + g * Math.sin(k),
                n.push(new THREE.Vector2(j,k));
            break;
        case "ellipse":
            b = q[0],
            c = q[1],
            g = q[2],
            e = q[3],
            d = q[4],
            j = q[5],
            f = !!q[6];
            var r = q[7];
            h = j - d,
            i = 2 * a;
            var s, t;
            for (0 !== r && (s = Math.cos(r),
            t = Math.sin(r)),
            q = 1; i >= q; q++) {
                if (k = q / i,
                f || (k = 1 - k),
                k = d + k * h,
                j = b + g * Math.cos(k),
                k = c + e * Math.sin(k),
                0 !== r) {
                    var u = j;
                    j = (u - b) * s - (k - c) * t + b,
                    k = (u - b) * t + (k - c) * s + c
                }
                n.push(new THREE.Vector2(j,k))
            }
        }
    }
    return a = n[n.length - 1],
    Math.abs(a.x - n[0].x) < Number.EPSILON && Math.abs(a.y - n[0].y) < Number.EPSILON && n.splice(n.length - 1, 1),
    this.autoClose && n.push(n[0]),
    n
}
,
THREE.Path.prototype.toShapes = function(a, b) {
    function c(a) {
        for (var b = [], c = 0, d = a.length; d > c; c++) {
            var e = a[c]
              , f = new THREE.Shape;
            f.actions = e.actions,
            f.curves = e.curves,
            b.push(f)
        }
        return b
    }
    function d(a, b) {
        for (var c = b.length, d = !1, e = c - 1, f = 0; c > f; e = f++) {
            var g = b[e]
              , h = b[f]
              , i = h.x - g.x
              , j = h.y - g.y;
            if (Math.abs(j) > Number.EPSILON) {
                if (0 > j && (g = b[f],
                i = -i,
                h = b[e],
                j = -j),
                !(a.y < g.y || a.y > h.y))
                    if (a.y === g.y) {
                        if (a.x === g.x)
                            return !0
                    } else {
                        if (e = j * (a.x - g.x) - i * (a.y - g.y),
                        0 === e)
                            return !0;
                        0 > e || (d = !d)
                    }
            } else if (a.y === g.y && (h.x <= a.x && a.x <= g.x || g.x <= a.x && a.x <= h.x))
                return !0
        }
        return d
    }
    var e = THREE.ShapeUtils.isClockWise
      , f = function(a) {
        for (var b = [], c = new THREE.Path, d = 0, e = a.length; e > d; d++) {
            var f = a[d]
              , g = f.args
              , f = f.action;
            "moveTo" === f && 0 !== c.actions.length && (b.push(c),
            c = new THREE.Path),
            c[f].apply(c, g)
        }
        return 0 !== c.actions.length && b.push(c),
        b
    }(this.actions);
    if (0 === f.length)
        return [];
    if (!0 === b)
        return c(f);
    var g, h, i, j = [];
    if (1 === f.length)
        return h = f[0],
        i = new THREE.Shape,
        i.actions = h.actions,
        i.curves = h.curves,
        j.push(i),
        j;
    var k = !e(f[0].getPoints())
      , k = a ? !k : k;
    i = [];
    var l, m = [], n = [], o = 0;
    m[o] = void 0,
    n[o] = [];
    for (var p = 0, q = f.length; q > p; p++)
        h = f[p],
        l = h.getPoints(),
        g = e(l),
        (g = a ? !g : g) ? (!k && m[o] && o++,
        m[o] = {
            s: new THREE.Shape,
            p: l
        },
        m[o].s.actions = h.actions,
        m[o].s.curves = h.curves,
        k && o++,
        n[o] = []) : n[o].push({
            h: h,
            p: l[0]
        });
    if (!m[0])
        return c(f);
    if (1 < m.length) {
        for (p = !1,
        h = [],
        e = 0,
        f = m.length; f > e; e++)
            i[e] = [];
        for (e = 0,
        f = m.length; f > e; e++)
            for (g = n[e],
            k = 0; k < g.length; k++) {
                for (o = g[k],
                l = !0,
                q = 0; q < m.length; q++)
                    d(o.p, m[q].p) && (e !== q && h.push({
                        froms: e,
                        tos: q,
                        hole: k
                    }),
                    l ? (l = !1,
                    i[q].push(o)) : p = !0);
                l && i[e].push(o)
            }
        0 < h.length && (p || (n = i))
    }
    for (p = 0,
    e = m.length; e > p; p++)
        for (i = m[p].s,
        j.push(i),
        h = n[p],
        f = 0,
        g = h.length; g > f; f++)
            i.holes.push(h[f].h);
    return j
}
,
THREE.Shape = function() {
    THREE.Path.apply(this, arguments),
    this.holes = []
}
,
THREE.Shape.prototype = Object.create(THREE.Path.prototype),
THREE.Shape.prototype.constructor = THREE.Shape,
THREE.Shape.prototype.extrude = function(a) {
    return new THREE.ExtrudeGeometry(this,a)
}
,
THREE.Shape.prototype.makeGeometry = function(a) {
    return new THREE.ShapeGeometry(this,a)
}
,
THREE.Shape.prototype.getPointsHoles = function(a) {
    for (var b = [], c = 0, d = this.holes.length; d > c; c++)
        b[c] = this.holes[c].getPoints(a);
    return b
}
,
THREE.Shape.prototype.extractAllPoints = function(a) {
    return {
        shape: this.getPoints(a),
        holes: this.getPointsHoles(a)
    }
}
,
THREE.Shape.prototype.extractPoints = function(a) {
    return this.extractAllPoints(a)
}
,
THREE.LineCurve = function(a, b) {
    this.v1 = a,
    this.v2 = b
}
,
THREE.LineCurve.prototype = Object.create(THREE.Curve.prototype),
THREE.LineCurve.prototype.constructor = THREE.LineCurve,
THREE.LineCurve.prototype.getPoint = function(a) {
    var b = this.v2.clone().sub(this.v1);
    return b.multiplyScalar(a).add(this.v1),
    b
}
,
THREE.LineCurve.prototype.getPointAt = function(a) {
    return this.getPoint(a)
}
,
THREE.LineCurve.prototype.getTangent = function(a) {
    return this.v2.clone().sub(this.v1).normalize()
}
,
THREE.QuadraticBezierCurve = function(a, b, c) {
    this.v0 = a,
    this.v1 = b,
    this.v2 = c
}
,
THREE.QuadraticBezierCurve.prototype = Object.create(THREE.Curve.prototype),
THREE.QuadraticBezierCurve.prototype.constructor = THREE.QuadraticBezierCurve,
THREE.QuadraticBezierCurve.prototype.getPoint = function(a) {
    var b = THREE.ShapeUtils.b2;
    return new THREE.Vector2(b(a, this.v0.x, this.v1.x, this.v2.x),b(a, this.v0.y, this.v1.y, this.v2.y))
}
,
THREE.QuadraticBezierCurve.prototype.getTangent = function(a) {
    var b = THREE.CurveUtils.tangentQuadraticBezier;
    return new THREE.Vector2(b(a, this.v0.x, this.v1.x, this.v2.x),b(a, this.v0.y, this.v1.y, this.v2.y)).normalize()
}
,
THREE.CubicBezierCurve = function(a, b, c, d) {
    this.v0 = a,
    this.v1 = b,
    this.v2 = c,
    this.v3 = d
}
,
THREE.CubicBezierCurve.prototype = Object.create(THREE.Curve.prototype),
THREE.CubicBezierCurve.prototype.constructor = THREE.CubicBezierCurve,
THREE.CubicBezierCurve.prototype.getPoint = function(a) {
    var b = THREE.ShapeUtils.b3;
    return new THREE.Vector2(b(a, this.v0.x, this.v1.x, this.v2.x, this.v3.x),b(a, this.v0.y, this.v1.y, this.v2.y, this.v3.y))
}
,
THREE.CubicBezierCurve.prototype.getTangent = function(a) {
    var b = THREE.CurveUtils.tangentCubicBezier;
    return new THREE.Vector2(b(a, this.v0.x, this.v1.x, this.v2.x, this.v3.x),b(a, this.v0.y, this.v1.y, this.v2.y, this.v3.y)).normalize()
}
,
THREE.SplineCurve = function(a) {
    this.points = void 0 == a ? [] : a
}
,
THREE.SplineCurve.prototype = Object.create(THREE.Curve.prototype),
THREE.SplineCurve.prototype.constructor = THREE.SplineCurve,
THREE.SplineCurve.prototype.getPoint = function(a) {
    var b = this.points;
    a *= b.length - 1;
    var c = Math.floor(a);
    a -= c;
    var d = b[0 === c ? c : c - 1]
      , e = b[c]
      , f = b[c > b.length - 2 ? b.length - 1 : c + 1]
      , b = b[c > b.length - 3 ? b.length - 1 : c + 2]
      , c = THREE.CurveUtils.interpolate;
    return new THREE.Vector2(c(d.x, e.x, f.x, b.x, a),c(d.y, e.y, f.y, b.y, a))
}
,
THREE.EllipseCurve = function(a, b, c, d, e, f, g, h) {
    this.aX = a,
    this.aY = b,
    this.xRadius = c,
    this.yRadius = d,
    this.aStartAngle = e,
    this.aEndAngle = f,
    this.aClockwise = g,
    this.aRotation = h || 0
}
,
THREE.EllipseCurve.prototype = Object.create(THREE.Curve.prototype),
THREE.EllipseCurve.prototype.constructor = THREE.EllipseCurve,
THREE.EllipseCurve.prototype.getPoint = function(a) {
    var b = this.aEndAngle - this.aStartAngle;
    0 > b && (b += 2 * Math.PI),
    b > 2 * Math.PI && (b -= 2 * Math.PI),
    b = !0 === this.aClockwise ? this.aEndAngle + (1 - a) * (2 * Math.PI - b) : this.aStartAngle + a * b,
    a = this.aX + this.xRadius * Math.cos(b);
    var c = this.aY + this.yRadius * Math.sin(b);
    if (0 !== this.aRotation) {
        var b = Math.cos(this.aRotation)
          , d = Math.sin(this.aRotation)
          , e = a;
        a = (e - this.aX) * b - (c - this.aY) * d + this.aX,
        c = (e - this.aX) * d + (c - this.aY) * b + this.aY
    }
    return new THREE.Vector2(a,c)
}
,
THREE.ArcCurve = function(a, b, c, d, e, f) {
    THREE.EllipseCurve.call(this, a, b, c, c, d, e, f)
}
,
THREE.ArcCurve.prototype = Object.create(THREE.EllipseCurve.prototype),
THREE.ArcCurve.prototype.constructor = THREE.ArcCurve,
THREE.LineCurve3 = THREE.Curve.create(function(a, b) {
    this.v1 = a,
    this.v2 = b
}, function(a) {
    var b = new THREE.Vector3;
    return b.subVectors(this.v2, this.v1),
    b.multiplyScalar(a),
    b.add(this.v1),
    b
}),
THREE.QuadraticBezierCurve3 = THREE.Curve.create(function(a, b, c) {
    this.v0 = a,
    this.v1 = b,
    this.v2 = c
}, function(a) {
    var b = THREE.ShapeUtils.b2;
    return new THREE.Vector3(b(a, this.v0.x, this.v1.x, this.v2.x),b(a, this.v0.y, this.v1.y, this.v2.y),b(a, this.v0.z, this.v1.z, this.v2.z))
}),
THREE.CubicBezierCurve3 = THREE.Curve.create(function(a, b, c, d) {
    this.v0 = a,
    this.v1 = b,
    this.v2 = c,
    this.v3 = d
}, function(a) {
    var b = THREE.ShapeUtils.b3;
    return new THREE.Vector3(b(a, this.v0.x, this.v1.x, this.v2.x, this.v3.x),b(a, this.v0.y, this.v1.y, this.v2.y, this.v3.y),b(a, this.v0.z, this.v1.z, this.v2.z, this.v3.z))
}),
THREE.SplineCurve3 = THREE.Curve.create(function(a) {
    console.warn("THREE.SplineCurve3 will be deprecated. Please use THREE.CatmullRomCurve3"),
    this.points = void 0 == a ? [] : a
}, function(a) {
    var b = this.points;
    a *= b.length - 1;
    var c = Math.floor(a);
    a -= c;
    var d = b[0 == c ? c : c - 1]
      , e = b[c]
      , f = b[c > b.length - 2 ? b.length - 1 : c + 1]
      , b = b[c > b.length - 3 ? b.length - 1 : c + 2]
      , c = THREE.CurveUtils.interpolate;
    return new THREE.Vector3(c(d.x, e.x, f.x, b.x, a),c(d.y, e.y, f.y, b.y, a),c(d.z, e.z, f.z, b.z, a))
}),
THREE.CatmullRomCurve3 = function() {
    function a() {}
    var b = new THREE.Vector3
      , c = new a
      , d = new a
      , e = new a;
    return a.prototype.init = function(a, b, c, d) {
        this.c0 = a,
        this.c1 = c,
        this.c2 = -3 * a + 3 * b - 2 * c - d,
        this.c3 = 2 * a - 2 * b + c + d
    }
    ,
    a.prototype.initNonuniformCatmullRom = function(a, b, c, d, e, f, g) {
        a = ((b - a) / e - (c - a) / (e + f) + (c - b) / f) * f,
        d = ((c - b) / f - (d - b) / (f + g) + (d - c) / g) * f,
        this.init(b, c, a, d)
    }
    ,
    a.prototype.initCatmullRom = function(a, b, c, d, e) {
        this.init(b, c, e * (c - a), e * (d - b))
    }
    ,
    a.prototype.calc = function(a) {
        var b = a * a;
        return this.c0 + this.c1 * a + this.c2 * b + this.c3 * b * a
    }
    ,
    THREE.Curve.create(function(a) {
        this.points = a || [],
        this.closed = !1
    }, function(a) {
        var f, g, h = this.points;
        g = h.length,
        2 > g && console.log("duh, you need at least 2 points"),
        a *= g - (this.closed ? 0 : 1),
        f = Math.floor(a),
        a -= f,
        this.closed ? f += f > 0 ? 0 : (Math.floor(Math.abs(f) / h.length) + 1) * h.length : 0 === a && f === g - 1 && (f = g - 2,
        a = 1);
        var i, j, k;
        if (this.closed || f > 0 ? i = h[(f - 1) % g] : (b.subVectors(h[0], h[1]).add(h[0]),
        i = b),
        j = h[f % g],
        k = h[(f + 1) % g],
        this.closed || g > f + 2 ? h = h[(f + 2) % g] : (b.subVectors(h[g - 1], h[g - 2]).add(h[g - 1]),
        h = b),
        void 0 === this.type || "centripetal" === this.type || "chordal" === this.type) {
            var l = "chordal" === this.type ? .5 : .25;
            g = Math.pow(i.distanceToSquared(j), l),
            f = Math.pow(j.distanceToSquared(k), l),
            l = Math.pow(k.distanceToSquared(h), l),
            1e-4 > f && (f = 1),
            1e-4 > g && (g = f),
            1e-4 > l && (l = f),
            c.initNonuniformCatmullRom(i.x, j.x, k.x, h.x, g, f, l),
            d.initNonuniformCatmullRom(i.y, j.y, k.y, h.y, g, f, l),
            e.initNonuniformCatmullRom(i.z, j.z, k.z, h.z, g, f, l)
        } else
            "catmullrom" === this.type && (g = void 0 !== this.tension ? this.tension : .5,
            c.initCatmullRom(i.x, j.x, k.x, h.x, g),
            d.initCatmullRom(i.y, j.y, k.y, h.y, g),
            e.initCatmullRom(i.z, j.z, k.z, h.z, g));
        return new THREE.Vector3(c.calc(a),d.calc(a),e.calc(a))
    })
}(),
THREE.ClosedSplineCurve3 = function(a) {
    console.warn("THREE.ClosedSplineCurve3 has been deprecated. Please use THREE.CatmullRomCurve3."),
    THREE.CatmullRomCurve3.call(this, a),
    this.type = "catmullrom",
    this.closed = !0
}
,
THREE.ClosedSplineCurve3.prototype = Object.create(THREE.CatmullRomCurve3.prototype),
THREE.BoxGeometry = function(a, b, c, d, e, f) {
    THREE.Geometry.call(this),
    this.type = "BoxGeometry",
    this.parameters = {
        width: a,
        height: b,
        depth: c,
        widthSegments: d,
        heightSegments: e,
        depthSegments: f
    },
    this.fromBufferGeometry(new THREE.BoxBufferGeometry(a,b,c,d,e,f)),
    this.mergeVertices()
}
,
THREE.BoxGeometry.prototype = Object.create(THREE.Geometry.prototype),
THREE.BoxGeometry.prototype.constructor = THREE.BoxGeometry,
THREE.CubeGeometry = THREE.BoxGeometry,
THREE.BoxBufferGeometry = function(a, b, c, d, e, f) {
    function g(a, b, c, d, e, f, g, i, j, t, u) {
        var v = f / j
          , w = g / t
          , x = f / 2
          , y = g / 2
          , z = i / 2;
        g = j + 1;
        for (var A = t + 1, B = f = 0, C = new THREE.Vector3, D = 0; A > D; D++)
            for (var E = D * w - y, F = 0; g > F; F++)
                C[a] = (F * v - x) * d,
                C[b] = E * e,
                C[c] = z,
                l[o] = C.x,
                l[o + 1] = C.y,
                l[o + 2] = C.z,
                C[a] = 0,
                C[b] = 0,
                C[c] = i > 0 ? 1 : -1,
                m[o] = C.x,
                m[o + 1] = C.y,
                m[o + 2] = C.z,
                n[p] = F / j,
                n[p + 1] = 1 - D / t,
                o += 3,
                p += 2,
                f += 1;
        for (D = 0; t > D; D++)
            for (F = 0; j > F; F++)
                a = r + F + g * (D + 1),
                b = r + (F + 1) + g * (D + 1),
                c = r + (F + 1) + g * D,
                k[q] = r + F + g * D,
                k[q + 1] = a,
                k[q + 2] = c,
                k[q + 3] = a,
                k[q + 4] = b,
                k[q + 5] = c,
                q += 6,
                B += 6;
        h.addGroup(s, B, u),
        s += B,
        r += f
    }
    THREE.BufferGeometry.call(this),
    this.type = "BoxBufferGeometry",
    this.parameters = {
        width: a,
        height: b,
        depth: c,
        widthSegments: d,
        heightSegments: e,
        depthSegments: f
    };
    var h = this;
    d = Math.floor(d) || 1,
    e = Math.floor(e) || 1,
    f = Math.floor(f) || 1;
    var i = function(a, b, c) {
        return a = 0 + a * b * 2 + a * c * 2,
        a += c * b * 2,
        4 * a
    }(d, e, f)
      , j = i / 4 * 6
      , k = new (j > 65535 ? Uint32Array : Uint16Array)(j)
      , l = new Float32Array(3 * i)
      , m = new Float32Array(3 * i)
      , n = new Float32Array(2 * i)
      , o = 0
      , p = 0
      , q = 0
      , r = 0
      , s = 0;
    g("z", "y", "x", -1, -1, c, b, a, f, e, 0),
    g("z", "y", "x", 1, -1, c, b, -a, f, e, 1),
    g("x", "z", "y", 1, 1, a, c, b, d, f, 2),
    g("x", "z", "y", 1, -1, a, c, -b, d, f, 3),
    g("x", "y", "z", 1, -1, a, b, c, d, e, 4),
    g("x", "y", "z", -1, -1, a, b, -c, d, e, 5),
    this.setIndex(new THREE.BufferAttribute(k,1)),
    this.addAttribute("position", new THREE.BufferAttribute(l,3)),
    this.addAttribute("normal", new THREE.BufferAttribute(m,3)),
    this.addAttribute("uv", new THREE.BufferAttribute(n,2))
}
,
THREE.BoxBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype),
THREE.BoxBufferGeometry.prototype.constructor = THREE.BoxBufferGeometry,
THREE.CircleGeometry = function(a, b, c, d) {
    THREE.Geometry.call(this),
    this.type = "CircleGeometry",
    this.parameters = {
        radius: a,
        segments: b,
        thetaStart: c,
        thetaLength: d
    },
    this.fromBufferGeometry(new THREE.CircleBufferGeometry(a,b,c,d))
}
,
THREE.CircleGeometry.prototype = Object.create(THREE.Geometry.prototype),
THREE.CircleGeometry.prototype.constructor = THREE.CircleGeometry,
THREE.CircleBufferGeometry = function(a, b, c, d) {
    THREE.BufferGeometry.call(this),
    this.type = "CircleBufferGeometry",
    this.parameters = {
        radius: a,
        segments: b,
        thetaStart: c,
        thetaLength: d
    },
    a = a || 50,
    b = void 0 !== b ? Math.max(3, b) : 8,
    c = void 0 !== c ? c : 0,
    d = void 0 !== d ? d : 2 * Math.PI;
    var e = b + 2
      , f = new Float32Array(3 * e)
      , g = new Float32Array(3 * e)
      , e = new Float32Array(2 * e);
    g[2] = 1,
    e[0] = .5,
    e[1] = .5;
    for (var h = 0, i = 3, j = 2; b >= h; h++,
    i += 3,
    j += 2) {
        var k = c + h / b * d;
        f[i] = a * Math.cos(k),
        f[i + 1] = a * Math.sin(k),
        g[i + 2] = 1,
        e[j] = (f[i] / a + 1) / 2,
        e[j + 1] = (f[i + 1] / a + 1) / 2
    }
    for (c = [],
    i = 1; b >= i; i++)
        c.push(i, i + 1, 0);
    this.setIndex(new THREE.BufferAttribute(new Uint16Array(c),1)),
    this.addAttribute("position", new THREE.BufferAttribute(f,3)),
    this.addAttribute("normal", new THREE.BufferAttribute(g,3)),
    this.addAttribute("uv", new THREE.BufferAttribute(e,2)),
    this.boundingSphere = new THREE.Sphere(new THREE.Vector3,a)
}
,
THREE.CircleBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype),
THREE.CircleBufferGeometry.prototype.constructor = THREE.CircleBufferGeometry,
THREE.CylinderBufferGeometry = function(a, b, c, d, e, f, g, h) {
    function i(c) {
        var e, f, i;
        i = new THREE.Vector2;
        var j = new THREE.Vector3
          , k = !0 === c ? a : b
          , r = !0 === c ? 1 : -1;
        for (f = p,
        e = 1; d >= e; e++)
            m.setXYZ(p, 0, s * r, 0),
            n.setXYZ(p, 0, r, 0),
            !0 === c ? (i.x = e / d,
            i.y = 0) : (i.x = (e - 1) / d,
            i.y = 1),
            o.setXY(p, i.x, i.y),
            p++;
        for (i = p,
        e = 0; d >= e; e++) {
            var t = e / d;
            j.x = k * Math.sin(t * h + g),
            j.y = s * r,
            j.z = k * Math.cos(t * h + g),
            m.setXYZ(p, j.x, j.y, j.z),
            n.setXYZ(p, 0, r, 0),
            o.setXY(p, t, !0 === c ? 1 : 0),
            p++
        }
        for (e = 0; d > e; e++)
            j = f + e,
            k = i + e,
            !0 === c ? (l.setX(q, k),
            q++,
            l.setX(q, k + 1)) : (l.setX(q, k + 1),
            q++,
            l.setX(q, k)),
            q++,
            l.setX(q, j),
            q++
    }
    THREE.BufferGeometry.call(this),
    this.type = "CylinderBufferGeometry",
    this.parameters = {
        radiusTop: a,
        radiusBottom: b,
        height: c,
        radialSegments: d,
        heightSegments: e,
        openEnded: f,
        thetaStart: g,
        thetaLength: h
    },
    a = void 0 !== a ? a : 20,
    b = void 0 !== b ? b : 20,
    c = void 0 !== c ? c : 100,
    d = Math.floor(d) || 8,
    e = Math.floor(e) || 1,
    f = void 0 !== f ? f : !1,
    g = void 0 !== g ? g : 0,
    h = void 0 !== h ? h : 2 * Math.PI;
    var j = function() {
        var a = (d + 1) * (e + 1);
        return !1 === f && (a += 2 * (d + 1) + 2 * d),
        a
    }()
      , k = function() {
        var a = d * e * 6;
        return !1 === f && (a += 6 * d),
        a
    }()
      , l = new THREE.BufferAttribute(new (k > 65535 ? Uint32Array : Uint16Array)(k),1)
      , m = new THREE.BufferAttribute(new Float32Array(3 * j),3)
      , n = new THREE.BufferAttribute(new Float32Array(3 * j),3)
      , o = new THREE.BufferAttribute(new Float32Array(2 * j),2)
      , p = 0
      , q = 0
      , r = []
      , s = c / 2;
    !function() {
        var f, i, j = new THREE.Vector3, k = new THREE.Vector3, t = (b - a) / c;
        for (i = 0; e >= i; i++) {
            var u = []
              , v = i / e
              , w = v * (b - a) + a;
            for (f = 0; d >= f; f++) {
                var x = f / d;
                k.x = w * Math.sin(x * h + g),
                k.y = -v * c + s,
                k.z = w * Math.cos(x * h + g),
                m.setXYZ(p, k.x, k.y, k.z),
                j.copy(k),
                (0 === a && 0 === i || 0 === b && i === e) && (j.x = Math.sin(x * h + g),
                j.z = Math.cos(x * h + g)),
                j.setY(Math.sqrt(j.x * j.x + j.z * j.z) * t).normalize(),
                n.setXYZ(p, j.x, j.y, j.z),
                o.setXY(p, x, 1 - v),
                u.push(p),
                p++
            }
            r.push(u)
        }
        for (f = 0; d > f; f++)
            for (i = 0; e > i; i++)
                j = r[i + 1][f],
                k = r[i + 1][f + 1],
                t = r[i][f + 1],
                l.setX(q, r[i][f]),
                q++,
                l.setX(q, j),
                q++,
                l.setX(q, t),
                q++,
                l.setX(q, j),
                q++,
                l.setX(q, k),
                q++,
                l.setX(q, t),
                q++
    }(),
    !1 === f && (a > 0 && i(!0),
    b > 0 && i(!1)),
    this.setIndex(l),
    this.addAttribute("position", m),
    this.addAttribute("normal", n),
    this.addAttribute("uv", o)
}
,
THREE.CylinderBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype),
THREE.CylinderBufferGeometry.prototype.constructor = THREE.CylinderBufferGeometry,
THREE.CylinderGeometry = function(a, b, c, d, e, f, g, h) {
    THREE.Geometry.call(this),
    this.type = "CylinderGeometry",
    this.parameters = {
        radiusTop: a,
        radiusBottom: b,
        height: c,
        radialSegments: d,
        heightSegments: e,
        openEnded: f,
        thetaStart: g,
        thetaLength: h
    },
    this.fromBufferGeometry(new THREE.CylinderBufferGeometry(a,b,c,d,e,f,g,h)),
    this.mergeVertices()
}
,
THREE.CylinderGeometry.prototype = Object.create(THREE.Geometry.prototype),
THREE.CylinderGeometry.prototype.constructor = THREE.CylinderGeometry,
THREE.EdgesGeometry = function(a, b) {
    function c(a, b) {
        return a - b
    }
    THREE.BufferGeometry.call(this);
    var d, e = Math.cos(THREE.Math.degToRad(void 0 !== b ? b : 1)), f = [0, 0], g = {}, h = ["a", "b", "c"];
    a instanceof THREE.BufferGeometry ? (d = new THREE.Geometry,
    d.fromBufferGeometry(a)) : d = a.clone(),
    d.mergeVertices(),
    d.computeFaceNormals();
    var i = d.vertices;
    d = d.faces;
    for (var j = 0, k = d.length; k > j; j++)
        for (var l = d[j], m = 0; 3 > m; m++) {
            f[0] = l[h[m]],
            f[1] = l[h[(m + 1) % 3]],
            f.sort(c);
            var n = f.toString();
            void 0 === g[n] ? g[n] = {
                vert1: f[0],
                vert2: f[1],
                face1: j,
                face2: void 0
            } : g[n].face2 = j
        }
    f = [];
    for (n in g)
        h = g[n],
        (void 0 === h.face2 || d[h.face1].normal.dot(d[h.face2].normal) <= e) && (j = i[h.vert1],
        f.push(j.x),
        f.push(j.y),
        f.push(j.z),
        j = i[h.vert2],
        f.push(j.x),
        f.push(j.y),
        f.push(j.z));
    this.addAttribute("position", new THREE.BufferAttribute(new Float32Array(f),3))
}
,
THREE.EdgesGeometry.prototype = Object.create(THREE.BufferGeometry.prototype),
THREE.EdgesGeometry.prototype.constructor = THREE.EdgesGeometry,
THREE.ExtrudeGeometry = function(a, b) {
    "undefined" != typeof a && (THREE.Geometry.call(this),
    this.type = "ExtrudeGeometry",
    a = Array.isArray(a) ? a : [a],
    this.addShapeList(a, b),
    this.computeFaceNormals())
}
,
THREE.ExtrudeGeometry.prototype = Object.create(THREE.Geometry.prototype),
THREE.ExtrudeGeometry.prototype.constructor = THREE.ExtrudeGeometry,
THREE.ExtrudeGeometry.prototype.addShapeList = function(a, b) {
    for (var c = a.length, d = 0; c > d; d++)
        this.addShape(a[d], b)
}
,
THREE.ExtrudeGeometry.prototype.addShape = function(a, b) {
    function c(a, b, c) {
        return b || console.error("THREE.ExtrudeGeometry: vec does not exist"),
        b.clone().multiplyScalar(c).add(a)
    }
    function d(a, b, c) {
        var d = 1
          , d = a.x - b.x
          , e = a.y - b.y
          , f = c.x - a.x
          , g = c.y - a.y
          , h = d * d + e * e;
        if (Math.abs(d * g - e * f) > Number.EPSILON) {
            var i = Math.sqrt(h)
              , j = Math.sqrt(f * f + g * g)
              , h = b.x - e / i;
            if (b = b.y + d / i,
            f = ((c.x - g / j - h) * g - (c.y + f / j - b) * f) / (d * g - e * f),
            c = h + d * f - a.x,
            a = b + e * f - a.y,
            d = c * c + a * a,
            2 >= d)
                return new THREE.Vector2(c,a);
            d = Math.sqrt(d / 2)
        } else
            a = !1,
            d > Number.EPSILON ? f > Number.EPSILON && (a = !0) : d < -Number.EPSILON ? f < -Number.EPSILON && (a = !0) : Math.sign(e) === Math.sign(g) && (a = !0),
            a ? (c = -e,
            a = d,
            d = Math.sqrt(h)) : (c = d,
            a = e,
            d = Math.sqrt(h / 2));
        return new THREE.Vector2(c / d,a / d)
    }
    function e(a, b) {
        var c, d;
        for (M = a.length; 0 <= --M; ) {
            c = M,
            d = M - 1,
            0 > d && (d = a.length - 1);
            for (var e = 0, f = s + 2 * p, e = 0; f > e; e++) {
                var g = K * e
                  , h = K * (e + 1)
                  , i = b + c + g
                  , g = b + d + g
                  , j = b + d + h
                  , h = b + c + h
                  , i = i + A
                  , g = g + A
                  , j = j + A
                  , h = h + A;
                z.faces.push(new THREE.Face3(i,g,h,null ,null ,1)),
                z.faces.push(new THREE.Face3(g,j,h,null ,null ,1)),
                i = v.generateSideWallUV(z, i, g, j, h),
                z.faceVertexUvs[0].push([i[0], i[1], i[3]]),
                z.faceVertexUvs[0].push([i[1], i[2], i[3]])
            }
        }
    }
    function f(a, b, c) {
        z.vertices.push(new THREE.Vector3(a,b,c))
    }
    function g(a, b, c) {
        a += A,
        b += A,
        c += A,
        z.faces.push(new THREE.Face3(a,b,c,null ,null ,0)),
        a = v.generateTopUV(z, a, b, c),
        z.faceVertexUvs[0].push(a)
    }
    var h, i, j, k, l, m = void 0 !== b.amount ? b.amount : 100, n = void 0 !== b.bevelThickness ? b.bevelThickness : 6, o = void 0 !== b.bevelSize ? b.bevelSize : n - 2, p = void 0 !== b.bevelSegments ? b.bevelSegments : 3, q = void 0 !== b.bevelEnabled ? b.bevelEnabled : !0, r = void 0 !== b.curveSegments ? b.curveSegments : 12, s = void 0 !== b.steps ? b.steps : 1, t = b.extrudePath, u = !1, v = void 0 !== b.UVGenerator ? b.UVGenerator : THREE.ExtrudeGeometry.WorldUVGenerator;
    t && (h = t.getSpacedPoints(s),
    u = !0,
    q = !1,
    i = void 0 !== b.frames ? b.frames : new THREE.TubeGeometry.FrenetFrames(t,s,!1),
    j = new THREE.Vector3,
    k = new THREE.Vector3,
    l = new THREE.Vector3),
    q || (o = n = p = 0);
    var w, x, y, z = this, A = this.vertices.length, t = a.extractPoints(r), r = t.shape, B = t.holes;
    if (t = !THREE.ShapeUtils.isClockWise(r)) {
        for (r = r.reverse(),
        x = 0,
        y = B.length; y > x; x++)
            w = B[x],
            THREE.ShapeUtils.isClockWise(w) && (B[x] = w.reverse());
        t = !1
    }
    var C = THREE.ShapeUtils.triangulateShape(r, B)
      , D = r;
    for (x = 0,
    y = B.length; y > x; x++)
        w = B[x],
        r = r.concat(w);
    var E, F, G, H, I, J, K = r.length, L = C.length, t = [], M = 0;
    for (G = D.length,
    E = G - 1,
    F = M + 1; G > M; M++,
    E++,
    F++)
        E === G && (E = 0),
        F === G && (F = 0),
        t[M] = d(D[M], D[E], D[F]);
    var N, O = [], P = t.concat();
    for (x = 0,
    y = B.length; y > x; x++) {
        for (w = B[x],
        N = [],
        M = 0,
        G = w.length,
        E = G - 1,
        F = M + 1; G > M; M++,
        E++,
        F++)
            E === G && (E = 0),
            F === G && (F = 0),
            N[M] = d(w[M], w[E], w[F]);
        O.push(N),
        P = P.concat(N)
    }
    for (E = 0; p > E; E++) {
        for (G = E / p,
        H = n * (1 - G),
        F = o * Math.sin(G * Math.PI / 2),
        M = 0,
        G = D.length; G > M; M++)
            I = c(D[M], t[M], F),
            f(I.x, I.y, -H);
        for (x = 0,
        y = B.length; y > x; x++)
            for (w = B[x],
            N = O[x],
            M = 0,
            G = w.length; G > M; M++)
                I = c(w[M], N[M], F),
                f(I.x, I.y, -H)
    }
    for (F = o,
    M = 0; K > M; M++)
        I = q ? c(r[M], P[M], F) : r[M],
        u ? (k.copy(i.normals[0]).multiplyScalar(I.x),
        j.copy(i.binormals[0]).multiplyScalar(I.y),
        l.copy(h[0]).add(k).add(j),
        f(l.x, l.y, l.z)) : f(I.x, I.y, 0);
    for (G = 1; s >= G; G++)
        for (M = 0; K > M; M++)
            I = q ? c(r[M], P[M], F) : r[M],
            u ? (k.copy(i.normals[G]).multiplyScalar(I.x),
            j.copy(i.binormals[G]).multiplyScalar(I.y),
            l.copy(h[G]).add(k).add(j),
            f(l.x, l.y, l.z)) : f(I.x, I.y, m / s * G);
    for (E = p - 1; E >= 0; E--) {
        for (G = E / p,
        H = n * (1 - G),
        F = o * Math.sin(G * Math.PI / 2),
        M = 0,
        G = D.length; G > M; M++)
            I = c(D[M], t[M], F),
            f(I.x, I.y, m + H);
        for (x = 0,
        y = B.length; y > x; x++)
            for (w = B[x],
            N = O[x],
            M = 0,
            G = w.length; G > M; M++)
                I = c(w[M], N[M], F),
                u ? f(I.x, I.y + h[s - 1].y, h[s - 1].x + H) : f(I.x, I.y, m + H)
    }
    !function() {
        if (q) {
            var a;
            for (a = 0 * K,
            M = 0; L > M; M++)
                J = C[M],
                g(J[2] + a, J[1] + a, J[0] + a);
            for (a = s + 2 * p,
            a *= K,
            M = 0; L > M; M++)
                J = C[M],
                g(J[0] + a, J[1] + a, J[2] + a)
        } else {
            for (M = 0; L > M; M++)
                J = C[M],
                g(J[2], J[1], J[0]);
            for (M = 0; L > M; M++)
                J = C[M],
                g(J[0] + K * s, J[1] + K * s, J[2] + K * s)
        }
    }(),
    function() {
        var a = 0;
        for (e(D, a),
        a += D.length,
        x = 0,
        y = B.length; y > x; x++)
            w = B[x],
            e(w, a),
            a += w.length
    }()
}
,
THREE.ExtrudeGeometry.WorldUVGenerator = {
    generateTopUV: function(a, b, c, d) {
        return a = a.vertices,
        b = a[b],
        c = a[c],
        d = a[d],
        [new THREE.Vector2(b.x,b.y), new THREE.Vector2(c.x,c.y), new THREE.Vector2(d.x,d.y)]
    },
    generateSideWallUV: function(a, b, c, d, e) {
        return a = a.vertices,
        b = a[b],
        c = a[c],
        d = a[d],
        e = a[e],
        .01 > Math.abs(b.y - c.y) ? [new THREE.Vector2(b.x,1 - b.z), new THREE.Vector2(c.x,1 - c.z), new THREE.Vector2(d.x,1 - d.z), new THREE.Vector2(e.x,1 - e.z)] : [new THREE.Vector2(b.y,1 - b.z), new THREE.Vector2(c.y,1 - c.z), new THREE.Vector2(d.y,1 - d.z), new THREE.Vector2(e.y,1 - e.z)]
    }
},
THREE.ShapeGeometry = function(a, b) {
    THREE.Geometry.call(this),
    this.type = "ShapeGeometry",
    !1 === Array.isArray(a) && (a = [a]),
    this.addShapeList(a, b),
    this.computeFaceNormals()
}
,
THREE.ShapeGeometry.prototype = Object.create(THREE.Geometry.prototype),
THREE.ShapeGeometry.prototype.constructor = THREE.ShapeGeometry,
THREE.ShapeGeometry.prototype.addShapeList = function(a, b) {
    for (var c = 0, d = a.length; d > c; c++)
        this.addShape(a[c], b);
    return this
}
,
THREE.ShapeGeometry.prototype.addShape = function(a, b) {
    void 0 === b && (b = {});
    var c, d, e, f = b.material, g = void 0 === b.UVGenerator ? THREE.ExtrudeGeometry.WorldUVGenerator : b.UVGenerator, h = this.vertices.length;
    c = a.extractPoints(void 0 !== b.curveSegments ? b.curveSegments : 12);
    var i = c.shape
      , j = c.holes;
    if (!THREE.ShapeUtils.isClockWise(i))
        for (i = i.reverse(),
        c = 0,
        d = j.length; d > c; c++)
            e = j[c],
            THREE.ShapeUtils.isClockWise(e) && (j[c] = e.reverse());
    var k = THREE.ShapeUtils.triangulateShape(i, j);
    for (c = 0,
    d = j.length; d > c; c++)
        e = j[c],
        i = i.concat(e);
    for (j = i.length,
    d = k.length,
    c = 0; j > c; c++)
        e = i[c],
        this.vertices.push(new THREE.Vector3(e.x,e.y,0));
    for (c = 0; d > c; c++)
        j = k[c],
        i = j[0] + h,
        e = j[1] + h,
        j = j[2] + h,
        this.faces.push(new THREE.Face3(i,e,j,null ,null ,f)),
        this.faceVertexUvs[0].push(g.generateTopUV(this, i, e, j))
}
,
THREE.LatheBufferGeometry = function(a, b, c, d) {
    THREE.BufferGeometry.call(this),
    this.type = "LatheBufferGeometry",
    this.parameters = {
        points: a,
        segments: b,
        phiStart: c,
        phiLength: d
    },
    b = Math.floor(b) || 12,
    c = c || 0,
    d = d || 2 * Math.PI,
    d = THREE.Math.clamp(d, 0, 2 * Math.PI);
    for (var e = (b + 1) * a.length, f = b * a.length * 6, g = new THREE.BufferAttribute(new (f > 65535 ? Uint32Array : Uint16Array)(f),1), h = new THREE.BufferAttribute(new Float32Array(3 * e),3), i = new THREE.BufferAttribute(new Float32Array(2 * e),2), j = 0, k = 0, l = 1 / b, m = new THREE.Vector3, n = new THREE.Vector2, e = 0; b >= e; e++)
        for (var f = c + e * l * d, o = Math.sin(f), p = Math.cos(f), f = 0; f <= a.length - 1; f++)
            m.x = a[f].x * o,
            m.y = a[f].y,
            m.z = a[f].x * p,
            h.setXYZ(j, m.x, m.y, m.z),
            n.x = e / b,
            n.y = f / (a.length - 1),
            i.setXY(j, n.x, n.y),
            j++;
    for (e = 0; b > e; e++)
        for (f = 0; f < a.length - 1; f++)
            c = f + e * a.length,
            j = c + a.length,
            l = c + a.length + 1,
            m = c + 1,
            g.setX(k, c),
            k++,
            g.setX(k, j),
            k++,
            g.setX(k, m),
            k++,
            g.setX(k, j),
            k++,
            g.setX(k, l),
            k++,
            g.setX(k, m),
            k++;
    if (this.setIndex(g),
    this.addAttribute("position", h),
    this.addAttribute("uv", i),
    this.computeVertexNormals(),
    d === 2 * Math.PI)
        for (d = this.attributes.normal.array,
        g = new THREE.Vector3,
        h = new THREE.Vector3,
        i = new THREE.Vector3,
        c = b * a.length * 3,
        f = e = 0; e < a.length; e++,
        f += 3)
            g.x = d[f + 0],
            g.y = d[f + 1],
            g.z = d[f + 2],
            h.x = d[c + f + 0],
            h.y = d[c + f + 1],
            h.z = d[c + f + 2],
            i.addVectors(g, h).normalize(),
            d[f + 0] = d[c + f + 0] = i.x,
            d[f + 1] = d[c + f + 1] = i.y,
            d[f + 2] = d[c + f + 2] = i.z
}
,
THREE.LatheBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype),
THREE.LatheBufferGeometry.prototype.constructor = THREE.LatheBufferGeometry,
THREE.LatheGeometry = function(a, b, c, d) {
    THREE.Geometry.call(this),
    this.type = "LatheGeometry",
    this.parameters = {
        points: a,
        segments: b,
        phiStart: c,
        phiLength: d
    },
    this.fromBufferGeometry(new THREE.LatheBufferGeometry(a,b,c,d)),
    this.mergeVertices()
}
,
THREE.LatheGeometry.prototype = Object.create(THREE.Geometry.prototype),
THREE.LatheGeometry.prototype.constructor = THREE.LatheGeometry,
THREE.PlaneGeometry = function(a, b, c, d) {
    THREE.Geometry.call(this),
    this.type = "PlaneGeometry",
    this.parameters = {
        width: a,
        height: b,
        widthSegments: c,
        heightSegments: d
    },
    this.fromBufferGeometry(new THREE.PlaneBufferGeometry(a,b,c,d))
}
,
THREE.PlaneGeometry.prototype = Object.create(THREE.Geometry.prototype),
THREE.PlaneGeometry.prototype.constructor = THREE.PlaneGeometry,
THREE.PlaneBufferGeometry = function(a, b, c, d) {
    THREE.BufferGeometry.call(this),
    this.type = "PlaneBufferGeometry",
    this.parameters = {
        width: a,
        height: b,
        widthSegments: c,
        heightSegments: d
    };
    var e = a / 2
      , f = b / 2;
    c = Math.floor(c) || 1,
    d = Math.floor(d) || 1;
    var g = c + 1
      , h = d + 1
      , i = a / c
      , j = b / d;
    b = new Float32Array(g * h * 3),
    a = new Float32Array(g * h * 3);
    for (var k = new Float32Array(g * h * 2), l = 0, m = 0, n = 0; h > n; n++)
        for (var o = n * j - f, p = 0; g > p; p++)
            b[l] = p * i - e,
            b[l + 1] = -o,
            a[l + 2] = 1,
            k[m] = p / c,
            k[m + 1] = 1 - n / d,
            l += 3,
            m += 2;
    for (l = 0,
    e = new (65535 < b.length / 3 ? Uint32Array : Uint16Array)(c * d * 6),
    n = 0; d > n; n++)
        for (p = 0; c > p; p++)
            f = p + g * (n + 1),
            h = p + 1 + g * (n + 1),
            i = p + 1 + g * n,
            e[l] = p + g * n,
            e[l + 1] = f,
            e[l + 2] = i,
            e[l + 3] = f,
            e[l + 4] = h,
            e[l + 5] = i,
            l += 6;
    this.setIndex(new THREE.BufferAttribute(e,1)),
    this.addAttribute("position", new THREE.BufferAttribute(b,3)),
    this.addAttribute("normal", new THREE.BufferAttribute(a,3)),
    this.addAttribute("uv", new THREE.BufferAttribute(k,2))
}
,
THREE.PlaneBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype),
THREE.PlaneBufferGeometry.prototype.constructor = THREE.PlaneBufferGeometry,
THREE.RingBufferGeometry = function(a, b, c, d, e, f) {
    THREE.BufferGeometry.call(this),
    this.type = "RingBufferGeometry",
    this.parameters = {
        innerRadius: a,
        outerRadius: b,
        thetaSegments: c,
        phiSegments: d,
        thetaStart: e,
        thetaLength: f
    },
    a = a || 20,
    b = b || 50,
    e = void 0 !== e ? e : 0,
    f = void 0 !== f ? f : 2 * Math.PI,
    c = void 0 !== c ? Math.max(3, c) : 8,
    d = void 0 !== d ? Math.max(1, d) : 1;
    var g, h, i = (c + 1) * (d + 1), j = c * d * 6, j = new THREE.BufferAttribute(new (j > 65535 ? Uint32Array : Uint16Array)(j),1), k = new THREE.BufferAttribute(new Float32Array(3 * i),3), l = new THREE.BufferAttribute(new Float32Array(3 * i),3), i = new THREE.BufferAttribute(new Float32Array(2 * i),2), m = 0, n = 0, o = a, p = (b - a) / d, q = new THREE.Vector3, r = new THREE.Vector2;
    for (a = 0; d >= a; a++) {
        for (h = 0; c >= h; h++)
            g = e + h / c * f,
            q.x = o * Math.cos(g),
            q.y = o * Math.sin(g),
            k.setXYZ(m, q.x, q.y, q.z),
            l.setXYZ(m, 0, 0, 1),
            r.x = (q.x / b + 1) / 2,
            r.y = (q.y / b + 1) / 2,
            i.setXY(m, r.x, r.y),
            m++;
        o += p
    }
    for (a = 0; d > a; a++)
        for (b = a * (c + 1),
        h = 0; c > h; h++)
            e = g = h + b,
            f = g + c + 1,
            m = g + c + 2,
            g += 1,
            j.setX(n, e),
            n++,
            j.setX(n, f),
            n++,
            j.setX(n, m),
            n++,
            j.setX(n, e),
            n++,
            j.setX(n, m),
            n++,
            j.setX(n, g),
            n++;
    this.setIndex(j),
    this.addAttribute("position", k),
    this.addAttribute("normal", l),
    this.addAttribute("uv", i)
}
,
THREE.RingBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype),
THREE.RingBufferGeometry.prototype.constructor = THREE.RingBufferGeometry,
THREE.RingGeometry = function(a, b, c, d, e, f) {
    THREE.Geometry.call(this),
    this.type = "RingGeometry",
    this.parameters = {
        innerRadius: a,
        outerRadius: b,
        thetaSegments: c,
        phiSegments: d,
        thetaStart: e,
        thetaLength: f
    },
    this.fromBufferGeometry(new THREE.RingBufferGeometry(a,b,c,d,e,f))
}
,
THREE.RingGeometry.prototype = Object.create(THREE.Geometry.prototype),
THREE.RingGeometry.prototype.constructor = THREE.RingGeometry,
THREE.SphereGeometry = function(a, b, c, d, e, f, g) {
    THREE.Geometry.call(this),
    this.type = "SphereGeometry",
    this.parameters = {
        radius: a,
        widthSegments: b,
        heightSegments: c,
        phiStart: d,
        phiLength: e,
        thetaStart: f,
        thetaLength: g
    },
    this.fromBufferGeometry(new THREE.SphereBufferGeometry(a,b,c,d,e,f,g))
}
,
THREE.SphereGeometry.prototype = Object.create(THREE.Geometry.prototype),
THREE.SphereGeometry.prototype.constructor = THREE.SphereGeometry,
THREE.SphereBufferGeometry = function(a, b, c, d, e, f, g) {
    THREE.BufferGeometry.call(this),
    this.type = "SphereBufferGeometry",
    this.parameters = {
        radius: a,
        widthSegments: b,
        heightSegments: c,
        phiStart: d,
        phiLength: e,
        thetaStart: f,
        thetaLength: g
    },
    a = a || 50,
    b = Math.max(3, Math.floor(b) || 8),
    c = Math.max(2, Math.floor(c) || 6),
    d = void 0 !== d ? d : 0,
    e = void 0 !== e ? e : 2 * Math.PI,
    f = void 0 !== f ? f : 0,
    g = void 0 !== g ? g : Math.PI;
    for (var h = f + g, i = (b + 1) * (c + 1), j = new THREE.BufferAttribute(new Float32Array(3 * i),3), k = new THREE.BufferAttribute(new Float32Array(3 * i),3), i = new THREE.BufferAttribute(new Float32Array(2 * i),2), l = 0, m = [], n = new THREE.Vector3, o = 0; c >= o; o++) {
        for (var p = [], q = o / c, r = 0; b >= r; r++) {
            var s = r / b
              , t = -a * Math.cos(d + s * e) * Math.sin(f + q * g)
              , u = a * Math.cos(f + q * g)
              , v = a * Math.sin(d + s * e) * Math.sin(f + q * g);
            n.set(t, u, v).normalize(),
            j.setXYZ(l, t, u, v),
            k.setXYZ(l, n.x, n.y, n.z),
            i.setXY(l, s, 1 - q),
            p.push(l),
            l++
        }
        m.push(p)
    }
    for (d = [],
    o = 0; c > o; o++)
        for (r = 0; b > r; r++)
            e = m[o][r + 1],
            g = m[o][r],
            l = m[o + 1][r],
            n = m[o + 1][r + 1],
            (0 !== o || f > 0) && d.push(e, g, n),
            (o !== c - 1 || h < Math.PI) && d.push(g, l, n);
    this.setIndex(new (65535 < j.count ? THREE.Uint32Attribute : THREE.Uint16Attribute)(d,1)),
    this.addAttribute("position", j),
    this.addAttribute("normal", k),
    this.addAttribute("uv", i),
    this.boundingSphere = new THREE.Sphere(new THREE.Vector3,a)
}
,
THREE.SphereBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype),
THREE.SphereBufferGeometry.prototype.constructor = THREE.SphereBufferGeometry,
THREE.TextGeometry = function(a, b) {
    b = b || {};
    var c = b.font;
    return !1 == c instanceof THREE.Font ? (console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),
    new THREE.Geometry) : (c = c.generateShapes(a, b.size, b.curveSegments),
    b.amount = void 0 !== b.height ? b.height : 50,
    void 0 === b.bevelThickness && (b.bevelThickness = 10),
    void 0 === b.bevelSize && (b.bevelSize = 8),
    void 0 === b.bevelEnabled && (b.bevelEnabled = !1),
    THREE.ExtrudeGeometry.call(this, c, b),
    void (this.type = "TextGeometry"))
}
,
THREE.TextGeometry.prototype = Object.create(THREE.ExtrudeGeometry.prototype),
THREE.TextGeometry.prototype.constructor = THREE.TextGeometry,
THREE.TorusBufferGeometry = function(a, b, c, d, e) {
    THREE.BufferGeometry.call(this),
    this.type = "TorusBufferGeometry",
    this.parameters = {
        radius: a,
        tube: b,
        radialSegments: c,
        tubularSegments: d,
        arc: e
    },
    a = a || 100,
    b = b || 40,
    c = Math.floor(c) || 8,
    d = Math.floor(d) || 6,
    e = e || 2 * Math.PI;
    var f, g, h = (c + 1) * (d + 1), i = c * d * 6, i = new (i > 65535 ? Uint32Array : Uint16Array)(i), j = new Float32Array(3 * h), k = new Float32Array(3 * h), h = new Float32Array(2 * h), l = 0, m = 0, n = 0, o = new THREE.Vector3, p = new THREE.Vector3, q = new THREE.Vector3;
    for (f = 0; c >= f; f++)
        for (g = 0; d >= g; g++) {
            var r = g / d * e
              , s = f / c * Math.PI * 2;
            p.x = (a + b * Math.cos(s)) * Math.cos(r),
            p.y = (a + b * Math.cos(s)) * Math.sin(r),
            p.z = b * Math.sin(s),
            j[l] = p.x,
            j[l + 1] = p.y,
            j[l + 2] = p.z,
            o.x = a * Math.cos(r),
            o.y = a * Math.sin(r),
            q.subVectors(p, o).normalize(),
            k[l] = q.x,
            k[l + 1] = q.y,
            k[l + 2] = q.z,
            h[m] = g / d,
            h[m + 1] = f / c,
            l += 3,
            m += 2
        }
    for (f = 1; c >= f; f++)
        for (g = 1; d >= g; g++)
            a = (d + 1) * (f - 1) + g - 1,
            b = (d + 1) * (f - 1) + g,
            e = (d + 1) * f + g,
            i[n] = (d + 1) * f + g - 1,
            i[n + 1] = a,
            i[n + 2] = e,
            i[n + 3] = a,
            i[n + 4] = b,
            i[n + 5] = e,
            n += 6;
    this.setIndex(new THREE.BufferAttribute(i,1)),
    this.addAttribute("position", new THREE.BufferAttribute(j,3)),
    this.addAttribute("normal", new THREE.BufferAttribute(k,3)),
    this.addAttribute("uv", new THREE.BufferAttribute(h,2))
}
,
THREE.TorusBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype),
THREE.TorusBufferGeometry.prototype.constructor = THREE.TorusBufferGeometry,
THREE.TorusGeometry = function(a, b, c, d, e) {
    THREE.Geometry.call(this),
    this.type = "TorusGeometry",
    this.parameters = {
        radius: a,
        tube: b,
        radialSegments: c,
        tubularSegments: d,
        arc: e
    },
    this.fromBufferGeometry(new THREE.TorusBufferGeometry(a,b,c,d,e))
}
,
THREE.TorusGeometry.prototype = Object.create(THREE.Geometry.prototype),
THREE.TorusGeometry.prototype.constructor = THREE.TorusGeometry,
THREE.TorusKnotBufferGeometry = function(a, b, c, d, e, f) {
    function g(a, b, c, d, e) {
        var f = Math.cos(a)
          , g = Math.sin(a);
        a *= c / b,
        b = Math.cos(a),
        e.x = d * (2 + b) * .5 * f,
        e.y = d * (2 + b) * g * .5,
        e.z = d * Math.sin(a) * .5
    }
    THREE.BufferGeometry.call(this),
    this.type = "TorusKnotBufferGeometry",
    this.parameters = {
        radius: a,
        tube: b,
        tubularSegments: c,
        radialSegments: d,
        p: e,
        q: f
    },
    a = a || 100,
    b = b || 40,
    c = Math.floor(c) || 64,
    d = Math.floor(d) || 8,
    e = e || 2,
    f = f || 3;
    var h, i, j = (d + 1) * (c + 1), k = d * c * 6, k = new THREE.BufferAttribute(new (k > 65535 ? Uint32Array : Uint16Array)(k),1), l = new THREE.BufferAttribute(new Float32Array(3 * j),3), m = new THREE.BufferAttribute(new Float32Array(3 * j),3), j = new THREE.BufferAttribute(new Float32Array(2 * j),2), n = 0, o = 0, p = new THREE.Vector3, q = new THREE.Vector3, r = new THREE.Vector2, s = new THREE.Vector3, t = new THREE.Vector3, u = new THREE.Vector3, v = new THREE.Vector3, w = new THREE.Vector3;
    for (h = 0; c >= h; ++h)
        for (i = h / c * e * Math.PI * 2,
        g(i, e, f, a, s),
        g(i + .01, e, f, a, t),
        v.subVectors(t, s),
        w.addVectors(t, s),
        u.crossVectors(v, w),
        w.crossVectors(u, v),
        u.normalize(),
        w.normalize(),
        i = 0; d >= i; ++i) {
            var x = i / d * Math.PI * 2
              , y = -b * Math.cos(x)
              , x = b * Math.sin(x);
            p.x = s.x + (y * w.x + x * u.x),
            p.y = s.y + (y * w.y + x * u.y),
            p.z = s.z + (y * w.z + x * u.z),
            l.setXYZ(n, p.x, p.y, p.z),
            q.subVectors(p, s).normalize(),
            m.setXYZ(n, q.x, q.y, q.z),
            r.x = h / c,
            r.y = i / d,
            j.setXY(n, r.x, r.y),
            n++
        }
    for (i = 1; c >= i; i++)
        for (h = 1; d >= h; h++)
            a = (d + 1) * i + (h - 1),
            b = (d + 1) * i + h,
            e = (d + 1) * (i - 1) + h,
            k.setX(o, (d + 1) * (i - 1) + (h - 1)),
            o++,
            k.setX(o, a),
            o++,
            k.setX(o, e),
            o++,
            k.setX(o, a),
            o++,
            k.setX(o, b),
            o++,
            k.setX(o, e),
            o++;
    this.setIndex(k),
    this.addAttribute("position", l),
    this.addAttribute("normal", m),
    this.addAttribute("uv", j)
}
,
THREE.TorusKnotBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype),
THREE.TorusKnotBufferGeometry.prototype.constructor = THREE.TorusKnotBufferGeometry,
THREE.TorusKnotGeometry = function(a, b, c, d, e, f, g) {
    THREE.Geometry.call(this),
    this.type = "TorusKnotGeometry",
    this.parameters = {
        radius: a,
        tube: b,
        tubularSegments: c,
        radialSegments: d,
        p: e,
        q: f
    },
    void 0 !== g && console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."),
    this.fromBufferGeometry(new THREE.TorusKnotBufferGeometry(a,b,c,d,e,f)),
    this.mergeVertices()
}
,
THREE.TorusKnotGeometry.prototype = Object.create(THREE.Geometry.prototype),
THREE.TorusKnotGeometry.prototype.constructor = THREE.TorusKnotGeometry,
THREE.TubeGeometry = function(a, b, c, d, e, f) {
    THREE.Geometry.call(this),
    this.type = "TubeGeometry",
    this.parameters = {
        path: a,
        segments: b,
        radius: c,
        radialSegments: d,
        closed: e,
        taper: f
    },
    b = b || 64,
    c = c || 1,
    d = d || 8,
    e = e || !1,
    f = f || THREE.TubeGeometry.NoTaper;
    var g, h, i, j, k, l, m, n, o, p, q = [], r = b + 1, s = new THREE.Vector3;
    for (n = new THREE.TubeGeometry.FrenetFrames(a,b,e),
    o = n.normals,
    p = n.binormals,
    this.tangents = n.tangents,
    this.normals = o,
    this.binormals = p,
    n = 0; r > n; n++)
        for (q[n] = [],
        i = n / (r - 1),
        m = a.getPointAt(i),
        g = o[n],
        h = p[n],
        k = c * f(i),
        i = 0; d > i; i++)
            j = i / d * 2 * Math.PI,
            l = -k * Math.cos(j),
            j = k * Math.sin(j),
            s.copy(m),
            s.x += l * g.x + j * h.x,
            s.y += l * g.y + j * h.y,
            s.z += l * g.z + j * h.z,
            q[n][i] = this.vertices.push(new THREE.Vector3(s.x,s.y,s.z)) - 1;
    for (n = 0; b > n; n++)
        for (i = 0; d > i; i++)
            f = e ? (n + 1) % b : n + 1,
            r = (i + 1) % d,
            a = q[n][i],
            c = q[f][i],
            f = q[f][r],
            r = q[n][r],
            s = new THREE.Vector2(n / b,i / d),
            o = new THREE.Vector2((n + 1) / b,i / d),
            p = new THREE.Vector2((n + 1) / b,(i + 1) / d),
            g = new THREE.Vector2(n / b,(i + 1) / d),
            this.faces.push(new THREE.Face3(a,c,r)),
            this.faceVertexUvs[0].push([s, o, g]),
            this.faces.push(new THREE.Face3(c,f,r)),
            this.faceVertexUvs[0].push([o.clone(), p, g.clone()]);
    this.computeFaceNormals(),
    this.computeVertexNormals()
}
,
THREE.TubeGeometry.prototype = Object.create(THREE.Geometry.prototype),
THREE.TubeGeometry.prototype.constructor = THREE.TubeGeometry,
THREE.TubeGeometry.NoTaper = function(a) {
    return 1
}
,
THREE.TubeGeometry.SinusoidalTaper = function(a) {
    return Math.sin(Math.PI * a)
}
,
THREE.TubeGeometry.FrenetFrames = function(a, b, c) {
    var d = new THREE.Vector3
      , e = []
      , f = []
      , g = []
      , h = new THREE.Vector3
      , i = new THREE.Matrix4;
    b += 1;
    var j, k, l;
    for (this.tangents = e,
    this.normals = f,
    this.binormals = g,
    j = 0; b > j; j++)
        k = j / (b - 1),
        e[j] = a.getTangentAt(k),
        e[j].normalize();
    for (f[0] = new THREE.Vector3,
    g[0] = new THREE.Vector3,
    a = Number.MAX_VALUE,
    j = Math.abs(e[0].x),
    k = Math.abs(e[0].y),
    l = Math.abs(e[0].z),
    a >= j && (a = j,
    d.set(1, 0, 0)),
    a >= k && (a = k,
    d.set(0, 1, 0)),
    a >= l && d.set(0, 0, 1),
    h.crossVectors(e[0], d).normalize(),
    f[0].crossVectors(e[0], h),
    g[0].crossVectors(e[0], f[0]),
    j = 1; b > j; j++)
        f[j] = f[j - 1].clone(),
        g[j] = g[j - 1].clone(),
        h.crossVectors(e[j - 1], e[j]),
        h.length() > Number.EPSILON && (h.normalize(),
        d = Math.acos(THREE.Math.clamp(e[j - 1].dot(e[j]), -1, 1)),
        f[j].applyMatrix4(i.makeRotationAxis(h, d))),
        g[j].crossVectors(e[j], f[j]);
    if (c)
        for (d = Math.acos(THREE.Math.clamp(f[0].dot(f[b - 1]), -1, 1)),
        d /= b - 1,
        0 < e[0].dot(h.crossVectors(f[0], f[b - 1])) && (d = -d),
        j = 1; b > j; j++)
            f[j].applyMatrix4(i.makeRotationAxis(e[j], d * j)),
            g[j].crossVectors(e[j], f[j])
}
,
THREE.PolyhedronGeometry = function(a, b, c, d) {
    function e(a) {
        var b = a.normalize().clone();
        b.index = i.vertices.push(b) - 1;
        var c = Math.atan2(a.z, -a.x) / 2 / Math.PI + .5;
        return a = Math.atan2(-a.y, Math.sqrt(a.x * a.x + a.z * a.z)) / Math.PI + .5,
        b.uv = new THREE.Vector2(c,1 - a),
        b
    }
    function f(a, b, c, d) {
        d = new THREE.Face3(a.index,b.index,c.index,[a.clone(), b.clone(), c.clone()],void 0,d),
        i.faces.push(d),
        q.copy(a).add(b).add(c).divideScalar(3),
        d = Math.atan2(q.z, -q.x),
        i.faceVertexUvs[0].push([h(a.uv, a, d), h(b.uv, b, d), h(c.uv, c, d)])
    }
    function g(a, b) {
        for (var c = Math.pow(2, b), d = e(i.vertices[a.a]), g = e(i.vertices[a.b]), h = e(i.vertices[a.c]), j = [], k = a.materialIndex, l = 0; c >= l; l++) {
            j[l] = [];
            for (var m = e(d.clone().lerp(h, l / c)), n = e(g.clone().lerp(h, l / c)), o = c - l, p = 0; o >= p; p++)
                j[l][p] = 0 === p && l === c ? m : e(m.clone().lerp(n, p / o))
        }
        for (l = 0; c > l; l++)
            for (p = 0; 2 * (c - l) - 1 > p; p++)
                d = Math.floor(p / 2),
                0 === p % 2 ? f(j[l][d + 1], j[l + 1][d], j[l][d], k) : f(j[l][d + 1], j[l + 1][d + 1], j[l + 1][d], k)
    }
    function h(a, b, c) {
        return 0 > c && 1 === a.x && (a = new THREE.Vector2(a.x - 1,a.y)),
        0 === b.x && 0 === b.z && (a = new THREE.Vector2(c / 2 / Math.PI + .5,a.y)),
        a.clone()
    }
    THREE.Geometry.call(this),
    this.type = "PolyhedronGeometry",
    this.parameters = {
        vertices: a,
        indices: b,
        radius: c,
        detail: d
    },
    c = c || 1,
    d = d || 0;
    for (var i = this, j = 0, k = a.length; k > j; j += 3)
        e(new THREE.Vector3(a[j],a[j + 1],a[j + 2]));
    a = this.vertices;
    for (var l = [], m = j = 0, k = b.length; k > j; j += 3,
    m++) {
        var n = a[b[j]]
          , o = a[b[j + 1]]
          , p = a[b[j + 2]];
        l[m] = new THREE.Face3(n.index,o.index,p.index,[n.clone(), o.clone(), p.clone()],void 0,m)
    }
    for (var q = new THREE.Vector3, j = 0, k = l.length; k > j; j++)
        g(l[j], d);
    for (j = 0,
    k = this.faceVertexUvs[0].length; k > j; j++)
        b = this.faceVertexUvs[0][j],
        d = b[0].x,
        a = b[1].x,
        l = b[2].x,
        m = Math.max(d, a, l),
        n = Math.min(d, a, l),
        m > .9 && .1 > n && (.2 > d && (b[0].x += 1),
        .2 > a && (b[1].x += 1),
        .2 > l && (b[2].x += 1));
    for (j = 0,
    k = this.vertices.length; k > j; j++)
        this.vertices[j].multiplyScalar(c);
    this.mergeVertices(),
    this.computeFaceNormals(),
    this.boundingSphere = new THREE.Sphere(new THREE.Vector3,c)
}
,
THREE.PolyhedronGeometry.prototype = Object.create(THREE.Geometry.prototype),
THREE.PolyhedronGeometry.prototype.constructor = THREE.PolyhedronGeometry,
THREE.DodecahedronGeometry = function(a, b) {
    var c = (1 + Math.sqrt(5)) / 2
      , d = 1 / c;
    THREE.PolyhedronGeometry.call(this, [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -d, -c, 0, -d, c, 0, d, -c, 0, d, c, -d, -c, 0, -d, c, 0, d, -c, 0, d, c, 0, -c, 0, -d, c, 0, -d, -c, 0, d, c, 0, d], [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], a, b),
    this.type = "DodecahedronGeometry",
    this.parameters = {
        radius: a,
        detail: b
    }
}
,
THREE.DodecahedronGeometry.prototype = Object.create(THREE.PolyhedronGeometry.prototype),
THREE.DodecahedronGeometry.prototype.constructor = THREE.DodecahedronGeometry,
THREE.IcosahedronGeometry = function(a, b) {
    var c = (1 + Math.sqrt(5)) / 2;
    THREE.PolyhedronGeometry.call(this, [-1, c, 0, 1, c, 0, -1, -c, 0, 1, -c, 0, 0, -1, c, 0, 1, c, 0, -1, -c, 0, 1, -c, c, 0, -1, c, 0, 1, -c, 0, -1, -c, 0, 1], [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], a, b),
    this.type = "IcosahedronGeometry",
    this.parameters = {
        radius: a,
        detail: b
    }
}
,
THREE.IcosahedronGeometry.prototype = Object.create(THREE.PolyhedronGeometry.prototype),
THREE.IcosahedronGeometry.prototype.constructor = THREE.IcosahedronGeometry,
THREE.OctahedronGeometry = function(a, b) {
    THREE.PolyhedronGeometry.call(this, [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], a, b),
    this.type = "OctahedronGeometry",
    this.parameters = {
        radius: a,
        detail: b
    }
}
,
THREE.OctahedronGeometry.prototype = Object.create(THREE.PolyhedronGeometry.prototype),
THREE.OctahedronGeometry.prototype.constructor = THREE.OctahedronGeometry,
THREE.TetrahedronGeometry = function(a, b) {
    THREE.PolyhedronGeometry.call(this, [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], a, b),
    this.type = "TetrahedronGeometry",
    this.parameters = {
        radius: a,
        detail: b
    }
}
,
THREE.TetrahedronGeometry.prototype = Object.create(THREE.PolyhedronGeometry.prototype),
THREE.TetrahedronGeometry.prototype.constructor = THREE.TetrahedronGeometry,
THREE.ParametricGeometry = function(a, b, c) {
    THREE.Geometry.call(this),
    this.type = "ParametricGeometry",
    this.parameters = {
        func: a,
        slices: b,
        stacks: c
    };
    var d, e, f, g, h = this.vertices, i = this.faces, j = this.faceVertexUvs[0], k = b + 1;
    for (d = 0; c >= d; d++)
        for (g = d / c,
        e = 0; b >= e; e++)
            f = e / b,
            f = a(f, g),
            h.push(f);
    var l, m, n, o;
    for (d = 0; c > d; d++)
        for (e = 0; b > e; e++)
            a = d * k + e,
            h = d * k + e + 1,
            g = (d + 1) * k + e + 1,
            f = (d + 1) * k + e,
            l = new THREE.Vector2(e / b,d / c),
            m = new THREE.Vector2((e + 1) / b,d / c),
            n = new THREE.Vector2((e + 1) / b,(d + 1) / c),
            o = new THREE.Vector2(e / b,(d + 1) / c),
            i.push(new THREE.Face3(a,h,f)),
            j.push([l, m, o]),
            i.push(new THREE.Face3(h,g,f)),
            j.push([m.clone(), n, o.clone()]);
    this.computeFaceNormals(),
    this.computeVertexNormals()
}
,
THREE.ParametricGeometry.prototype = Object.create(THREE.Geometry.prototype),
THREE.ParametricGeometry.prototype.constructor = THREE.ParametricGeometry,
THREE.WireframeGeometry = function(a) {
    function b(a, b) {
        return a - b
    }
    THREE.BufferGeometry.call(this);
    var c = [0, 0]
      , d = {}
      , e = ["a", "b", "c"];
    if (a instanceof THREE.Geometry) {
        var f = a.vertices
          , g = a.faces
          , h = 0
          , i = new Uint32Array(6 * g.length);
        a = 0;
        for (var j = g.length; j > a; a++)
            for (var k = g[a], l = 0; 3 > l; l++) {
                c[0] = k[e[l]],
                c[1] = k[e[(l + 1) % 3]],
                c.sort(b);
                var m = c.toString();
                void 0 === d[m] && (i[2 * h] = c[0],
                i[2 * h + 1] = c[1],
                d[m] = !0,
                h++)
            }
        for (c = new Float32Array(6 * h),
        a = 0,
        j = h; j > a; a++)
            for (l = 0; 2 > l; l++)
                d = f[i[2 * a + l]],
                h = 6 * a + 3 * l,
                c[h + 0] = d.x,
                c[h + 1] = d.y,
                c[h + 2] = d.z;
        this.addAttribute("position", new THREE.BufferAttribute(c,3))
    } else if (a instanceof THREE.BufferGeometry) {
        if (null !== a.index) {
            for (j = a.index.array,
            f = a.attributes.position,
            e = a.groups,
            h = 0,
            0 === e.length && a.addGroup(0, j.length),
            i = new Uint32Array(2 * j.length),
            g = 0,
            k = e.length; k > g; ++g) {
                a = e[g],
                l = a.start,
                m = a.count,
                a = l;
                for (var n = l + m; n > a; a += 3)
                    for (l = 0; 3 > l; l++)
                        c[0] = j[a + l],
                        c[1] = j[a + (l + 1) % 3],
                        c.sort(b),
                        m = c.toString(),
                        void 0 === d[m] && (i[2 * h] = c[0],
                        i[2 * h + 1] = c[1],
                        d[m] = !0,
                        h++)
            }
            for (c = new Float32Array(6 * h),
            a = 0,
            j = h; j > a; a++)
                for (l = 0; 2 > l; l++)
                    h = 6 * a + 3 * l,
                    d = i[2 * a + l],
                    c[h + 0] = f.getX(d),
                    c[h + 1] = f.getY(d),
                    c[h + 2] = f.getZ(d)
        } else
            for (f = a.attributes.position.array,
            h = f.length / 3,
            i = h / 3,
            c = new Float32Array(6 * h),
            a = 0,
            j = i; j > a; a++)
                for (l = 0; 3 > l; l++)
                    h = 18 * a + 6 * l,
                    i = 9 * a + 3 * l,
                    c[h + 0] = f[i],
                    c[h + 1] = f[i + 1],
                    c[h + 2] = f[i + 2],
                    d = 9 * a + (l + 1) % 3 * 3,
                    c[h + 3] = f[d],
                    c[h + 4] = f[d + 1],
                    c[h + 5] = f[d + 2];
        this.addAttribute("position", new THREE.BufferAttribute(c,3))
    }
}
,
THREE.WireframeGeometry.prototype = Object.create(THREE.BufferGeometry.prototype),
THREE.WireframeGeometry.prototype.constructor = THREE.WireframeGeometry,
THREE.AxisHelper = function(a) {
    a = a || 1;
    var b = new Float32Array([0, 0, 0, a, 0, 0, 0, 0, 0, 0, a, 0, 0, 0, 0, 0, 0, a])
      , c = new Float32Array([1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1]);
    a = new THREE.BufferGeometry,
    a.addAttribute("position", new THREE.BufferAttribute(b,3)),
    a.addAttribute("color", new THREE.BufferAttribute(c,3)),
    b = new THREE.LineBasicMaterial({
        vertexColors: THREE.VertexColors
    }),
    THREE.LineSegments.call(this, a, b)
}
,
THREE.AxisHelper.prototype = Object.create(THREE.LineSegments.prototype),
THREE.AxisHelper.prototype.constructor = THREE.AxisHelper,
THREE.ArrowHelper = function() {
    var a = new THREE.Geometry;
    a.vertices.push(new THREE.Vector3(0,0,0), new THREE.Vector3(0,1,0));
    var b = new THREE.CylinderGeometry(0,.5,1,5,1);
    return b.translate(0, -.5, 0),
    function(c, d, e, f, g, h) {
        THREE.Object3D.call(this),
        void 0 === f && (f = 16776960),
        void 0 === e && (e = 1),
        void 0 === g && (g = .2 * e),
        void 0 === h && (h = .2 * g),
        this.position.copy(d),
        this.line = new THREE.Line(a,new THREE.LineBasicMaterial({
            color: f
        })),
        this.line.matrixAutoUpdate = !1,
        this.add(this.line),
        this.cone = new THREE.Mesh(b,new THREE.MeshBasicMaterial({
            color: f
        })),
        this.cone.matrixAutoUpdate = !1,
        this.add(this.cone),
        this.setDirection(c),
        this.setLength(e, g, h)
    }
}(),
THREE.ArrowHelper.prototype = Object.create(THREE.Object3D.prototype),
THREE.ArrowHelper.prototype.constructor = THREE.ArrowHelper,
THREE.ArrowHelper.prototype.setDirection = function() {
    var a, b = new THREE.Vector3;
    return function(c) {
        .99999 < c.y ? this.quaternion.set(0, 0, 0, 1) : -.99999 > c.y ? this.quaternion.set(1, 0, 0, 0) : (b.set(c.z, 0, -c.x).normalize(),
        a = Math.acos(c.y),
        this.quaternion.setFromAxisAngle(b, a))
    }
}(),
THREE.ArrowHelper.prototype.setLength = function(a, b, c) {
    void 0 === b && (b = .2 * a),
    void 0 === c && (c = .2 * b),
    this.line.scale.set(1, Math.max(0, a - b), 1),
    this.line.updateMatrix(),
    this.cone.scale.set(c, b, c),
    this.cone.position.y = a,
    this.cone.updateMatrix()
}
,
THREE.ArrowHelper.prototype.setColor = function(a) {
    this.line.material.color.set(a),
    this.cone.material.color.set(a)
}
,
THREE.BoxHelper = function(a) {
    var b = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7])
      , c = new Float32Array(24)
      , d = new THREE.BufferGeometry;
    d.setIndex(new THREE.BufferAttribute(b,1)),
    d.addAttribute("position", new THREE.BufferAttribute(c,3)),
    THREE.LineSegments.call(this, d, new THREE.LineBasicMaterial({
        color: 16776960
    })),
    void 0 !== a && this.update(a)
}
,
THREE.BoxHelper.prototype = Object.create(THREE.LineSegments.prototype),
THREE.BoxHelper.prototype.constructor = THREE.BoxHelper,
THREE.BoxHelper.prototype.update = function() {
    var a = new THREE.Box3;
    return function(b) {
        if (a.setFromObject(b),
        !a.isEmpty()) {
            b = a.min;
            var c = a.max
              , d = this.geometry.attributes.position
              , e = d.array;
            e[0] = c.x,
            e[1] = c.y,
            e[2] = c.z,
            e[3] = b.x,
            e[4] = c.y,
            e[5] = c.z,
            e[6] = b.x,
            e[7] = b.y,
            e[8] = c.z,
            e[9] = c.x,
            e[10] = b.y,
            e[11] = c.z,
            e[12] = c.x,
            e[13] = c.y,
            e[14] = b.z,
            e[15] = b.x,
            e[16] = c.y,
            e[17] = b.z,
            e[18] = b.x,
            e[19] = b.y,
            e[20] = b.z,
            e[21] = c.x,
            e[22] = b.y,
            e[23] = b.z,
            d.needsUpdate = !0,
            this.geometry.computeBoundingSphere()
        }
    }
}(),
THREE.BoundingBoxHelper = function(a, b) {
    var c = void 0 !== b ? b : 8947848;
    this.object = a,
    this.box = new THREE.Box3,
    THREE.Mesh.call(this, new THREE.BoxGeometry(1,1,1), new THREE.MeshBasicMaterial({
        color: c,
        wireframe: !0
    }))
}
,
THREE.BoundingBoxHelper.prototype = Object.create(THREE.Mesh.prototype),
THREE.BoundingBoxHelper.prototype.constructor = THREE.BoundingBoxHelper,
THREE.BoundingBoxHelper.prototype.update = function() {
    this.box.setFromObject(this.object),
    this.box.size(this.scale),
    this.box.center(this.position)
}
,
THREE.CameraHelper = function(a) {
    function b(a, b, d) {
        c(a, d),
        c(b, d)
    }
    function c(a, b) {
        d.vertices.push(new THREE.Vector3),
        d.colors.push(new THREE.Color(b)),
        void 0 === f[a] && (f[a] = []),
        f[a].push(d.vertices.length - 1)
    }
    var d = new THREE.Geometry
      , e = new THREE.LineBasicMaterial({
        color: 16777215,
        vertexColors: THREE.FaceColors
    })
      , f = {};
    b("n1", "n2", 16755200),
    b("n2", "n4", 16755200),
    b("n4", "n3", 16755200),
    b("n3", "n1", 16755200),
    b("f1", "f2", 16755200),
    b("f2", "f4", 16755200),
    b("f4", "f3", 16755200),
    b("f3", "f1", 16755200),
    b("n1", "f1", 16755200),
    b("n2", "f2", 16755200),
    b("n3", "f3", 16755200),
    b("n4", "f4", 16755200),
    b("p", "n1", 16711680),
    b("p", "n2", 16711680),
    b("p", "n3", 16711680),
    b("p", "n4", 16711680),
    b("u1", "u2", 43775),
    b("u2", "u3", 43775),
    b("u3", "u1", 43775),
    b("c", "t", 16777215),
    b("p", "c", 3355443),
    b("cn1", "cn2", 3355443),
    b("cn3", "cn4", 3355443),
    b("cf1", "cf2", 3355443),
    b("cf3", "cf4", 3355443),
    THREE.LineSegments.call(this, d, e),
    this.camera = a,
    this.camera.updateProjectionMatrix(),
    this.matrix = a.matrixWorld,
    this.matrixAutoUpdate = !1,
    this.pointMap = f,
    this.update()
}
,
THREE.CameraHelper.prototype = Object.create(THREE.LineSegments.prototype),
THREE.CameraHelper.prototype.constructor = THREE.CameraHelper,
THREE.CameraHelper.prototype.update = function() {
    function a(a, f, g, h) {
        if (d.set(f, g, h).unproject(e),
        a = c[a],
        void 0 !== a)
            for (f = 0,
            g = a.length; g > f; f++)
                b.vertices[a[f]].copy(d)
    }
    var b, c, d = new THREE.Vector3, e = new THREE.Camera;
    return function() {
        b = this.geometry,
        c = this.pointMap,
        e.projectionMatrix.copy(this.camera.projectionMatrix),
        a("c", 0, 0, -1),
        a("t", 0, 0, 1),
        a("n1", -1, -1, -1),
        a("n2", 1, -1, -1),
        a("n3", -1, 1, -1),
        a("n4", 1, 1, -1),
        a("f1", -1, -1, 1),
        a("f2", 1, -1, 1),
        a("f3", -1, 1, 1),
        a("f4", 1, 1, 1),
        a("u1", .7, 1.1, -1),
        a("u2", -.7, 1.1, -1),
        a("u3", 0, 2, -1),
        a("cf1", -1, 0, 1),
        a("cf2", 1, 0, 1),
        a("cf3", 0, -1, 1),
        a("cf4", 0, 1, 1),
        a("cn1", -1, 0, -1),
        a("cn2", 1, 0, -1),
        a("cn3", 0, -1, -1),
        a("cn4", 0, 1, -1),
        b.verticesNeedUpdate = !0
    }
}(),
THREE.DirectionalLightHelper = function(a, b) {
    THREE.Object3D.call(this),
    this.light = a,
    this.light.updateMatrixWorld(),
    this.matrix = a.matrixWorld,
    this.matrixAutoUpdate = !1,
    b = b || 1;
    var c = new THREE.Geometry;
    c.vertices.push(new THREE.Vector3(-b,b,0), new THREE.Vector3(b,b,0), new THREE.Vector3(b,-b,0), new THREE.Vector3(-b,-b,0), new THREE.Vector3(-b,b,0));
    var d = new THREE.LineBasicMaterial({
        fog: !1
    });
    d.color.copy(this.light.color).multiplyScalar(this.light.intensity),
    this.lightPlane = new THREE.Line(c,d),
    this.add(this.lightPlane),
    c = new THREE.Geometry,
    c.vertices.push(new THREE.Vector3, new THREE.Vector3),
    d = new THREE.LineBasicMaterial({
        fog: !1
    }),
    d.color.copy(this.light.color).multiplyScalar(this.light.intensity),
    this.targetLine = new THREE.Line(c,d),
    this.add(this.targetLine),
    this.update()
}
,
THREE.DirectionalLightHelper.prototype = Object.create(THREE.Object3D.prototype),
THREE.DirectionalLightHelper.prototype.constructor = THREE.DirectionalLightHelper,
THREE.DirectionalLightHelper.prototype.dispose = function() {
    this.lightPlane.geometry.dispose(),
    this.lightPlane.material.dispose(),
    this.targetLine.geometry.dispose(),
    this.targetLine.material.dispose()
}
,
THREE.DirectionalLightHelper.prototype.update = function() {
    var a = new THREE.Vector3
      , b = new THREE.Vector3
      , c = new THREE.Vector3;
    return function() {
        a.setFromMatrixPosition(this.light.matrixWorld),
        b.setFromMatrixPosition(this.light.target.matrixWorld),
        c.subVectors(b, a),
        this.lightPlane.lookAt(c),
        this.lightPlane.material.color.copy(this.light.color).multiplyScalar(this.light.intensity),
        this.targetLine.geometry.vertices[1].copy(c),
        this.targetLine.geometry.verticesNeedUpdate = !0,
        this.targetLine.material.color.copy(this.lightPlane.material.color)
    }
}(),
THREE.EdgesHelper = function(a, b, c) {
    b = void 0 !== b ? b : 16777215,
    THREE.LineSegments.call(this, new THREE.EdgesGeometry(a.geometry,c), new THREE.LineBasicMaterial({
        color: b
    })),
    this.matrix = a.matrixWorld,
    this.matrixAutoUpdate = !1
}
,
THREE.EdgesHelper.prototype = Object.create(THREE.LineSegments.prototype),
THREE.EdgesHelper.prototype.constructor = THREE.EdgesHelper,
THREE.FaceNormalsHelper = function(a, b, c, d) {
    this.object = a,
    this.size = void 0 !== b ? b : 1,
    a = void 0 !== c ? c : 16776960,
    d = void 0 !== d ? d : 1,
    b = 0,
    c = this.object.geometry,
    c instanceof THREE.Geometry ? b = c.faces.length : console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead."),
    c = new THREE.BufferGeometry,
    b = new THREE.Float32Attribute(6 * b,3),
    c.addAttribute("position", b),
    THREE.LineSegments.call(this, c, new THREE.LineBasicMaterial({
        color: a,
        linewidth: d
    })),
    this.matrixAutoUpdate = !1,
    this.update()
}
,
THREE.FaceNormalsHelper.prototype = Object.create(THREE.LineSegments.prototype),
THREE.FaceNormalsHelper.prototype.constructor = THREE.FaceNormalsHelper,
THREE.FaceNormalsHelper.prototype.update = function() {
    var a = new THREE.Vector3
      , b = new THREE.Vector3
      , c = new THREE.Matrix3;
    return function() {
        this.object.updateMatrixWorld(!0),
        c.getNormalMatrix(this.object.matrixWorld);
        for (var d = this.object.matrixWorld, e = this.geometry.attributes.position, f = this.object.geometry, g = f.vertices, f = f.faces, h = 0, i = 0, j = f.length; j > i; i++) {
            var k = f[i]
              , l = k.normal;
            a.copy(g[k.a]).add(g[k.b]).add(g[k.c]).divideScalar(3).applyMatrix4(d),
            b.copy(l).applyMatrix3(c).normalize().multiplyScalar(this.size).add(a),
            e.setXYZ(h, a.x, a.y, a.z),
            h += 1,
            e.setXYZ(h, b.x, b.y, b.z),
            h += 1
        }
        return e.needsUpdate = !0,
        this
    }
}(),
THREE.GridHelper = function(a, b) {
    var c = new THREE.Geometry
      , d = new THREE.LineBasicMaterial({
        vertexColors: THREE.VertexColors
    });
    this.color1 = new THREE.Color(4473924),
    this.color2 = new THREE.Color(8947848);
    for (var e = -a; a >= e; e += b) {
        c.vertices.push(new THREE.Vector3(-a,0,e), new THREE.Vector3(a,0,e), new THREE.Vector3(e,0,-a), new THREE.Vector3(e,0,a));
        var f = 0 === e ? this.color1 : this.color2;
        c.colors.push(f, f, f, f)
    }
    THREE.LineSegments.call(this, c, d)
}
,
THREE.GridHelper.prototype = Object.create(THREE.LineSegments.prototype),
THREE.GridHelper.prototype.constructor = THREE.GridHelper,
THREE.GridHelper.prototype.setColors = function(a, b) {
    this.color1.set(a),
    this.color2.set(b),
    this.geometry.colorsNeedUpdate = !0
}
,
THREE.HemisphereLightHelper = function(a, b) {
    THREE.Object3D.call(this),
    this.light = a,
    this.light.updateMatrixWorld(),
    this.matrix = a.matrixWorld,
    this.matrixAutoUpdate = !1,
    this.colors = [new THREE.Color, new THREE.Color];
    var c = new THREE.SphereGeometry(b,4,2);
    c.rotateX(-Math.PI / 2);
    for (var d = 0; 8 > d; d++)
        c.faces[d].color = this.colors[4 > d ? 0 : 1];
    d = new THREE.MeshBasicMaterial({
        vertexColors: THREE.FaceColors,
        wireframe: !0
    }),
    this.lightSphere = new THREE.Mesh(c,d),
    this.add(this.lightSphere),
    this.update()
}
,
THREE.HemisphereLightHelper.prototype = Object.create(THREE.Object3D.prototype),
THREE.HemisphereLightHelper.prototype.constructor = THREE.HemisphereLightHelper,
THREE.HemisphereLightHelper.prototype.dispose = function() {
    this.lightSphere.geometry.dispose(),
    this.lightSphere.material.dispose()
}
,
THREE.HemisphereLightHelper.prototype.update = function() {
    var a = new THREE.Vector3;
    return function() {
        this.colors[0].copy(this.light.color).multiplyScalar(this.light.intensity),
        this.colors[1].copy(this.light.groundColor).multiplyScalar(this.light.intensity),
        this.lightSphere.lookAt(a.setFromMatrixPosition(this.light.matrixWorld).negate()),
        this.lightSphere.geometry.colorsNeedUpdate = !0
    }
}(),
THREE.PointLightHelper = function(a, b) {
    this.light = a,
    this.light.updateMatrixWorld();
    var c = new THREE.SphereGeometry(b,4,2)
      , d = new THREE.MeshBasicMaterial({
        wireframe: !0,
        fog: !1
    });
    d.color.copy(this.light.color).multiplyScalar(this.light.intensity),
    THREE.Mesh.call(this, c, d),
    this.matrix = this.light.matrixWorld,
    this.matrixAutoUpdate = !1
}
,
THREE.PointLightHelper.prototype = Object.create(THREE.Mesh.prototype),
THREE.PointLightHelper.prototype.constructor = THREE.PointLightHelper,
THREE.PointLightHelper.prototype.dispose = function() {
    this.geometry.dispose(),
    this.material.dispose()
}
,
THREE.PointLightHelper.prototype.update = function() {
    this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
}
,
THREE.SkeletonHelper = function(a) {
    this.bones = this.getBoneList(a);
    for (var b = new THREE.Geometry, c = 0; c < this.bones.length; c++)
        this.bones[c].parent instanceof THREE.Bone && (b.vertices.push(new THREE.Vector3),
        b.vertices.push(new THREE.Vector3),
        b.colors.push(new THREE.Color(0,0,1)),
        b.colors.push(new THREE.Color(0,1,0)));
    b.dynamic = !0,
    c = new THREE.LineBasicMaterial({
        vertexColors: THREE.VertexColors,
        depthTest: !1,
        depthWrite: !1,
        transparent: !0
    }),
    THREE.LineSegments.call(this, b, c),
    this.root = a,
    this.matrix = a.matrixWorld,
    this.matrixAutoUpdate = !1,
    this.update()
}
,
THREE.SkeletonHelper.prototype = Object.create(THREE.LineSegments.prototype),
THREE.SkeletonHelper.prototype.constructor = THREE.SkeletonHelper,
THREE.SkeletonHelper.prototype.getBoneList = function(a) {
    var b = [];
    a instanceof THREE.Bone && b.push(a);
    for (var c = 0; c < a.children.length; c++)
        b.push.apply(b, this.getBoneList(a.children[c]));
    return b
}
,
THREE.SkeletonHelper.prototype.update = function() {
    for (var a = this.geometry, b = (new THREE.Matrix4).getInverse(this.root.matrixWorld), c = new THREE.Matrix4, d = 0, e = 0; e < this.bones.length; e++) {
        var f = this.bones[e];
        f.parent instanceof THREE.Bone && (c.multiplyMatrices(b, f.matrixWorld),
        a.vertices[d].setFromMatrixPosition(c),
        c.multiplyMatrices(b, f.parent.matrixWorld),
        a.vertices[d + 1].setFromMatrixPosition(c),
        d += 2)
    }
    a.verticesNeedUpdate = !0,
    a.computeBoundingSphere()
}
,
THREE.SpotLightHelper = function(a) {
    THREE.Object3D.call(this),
    this.light = a,
    this.light.updateMatrixWorld(),
    this.matrix = a.matrixWorld,
    this.matrixAutoUpdate = !1,
    a = new THREE.CylinderGeometry(0,1,1,8,1,!0),
    a.translate(0, -.5, 0),
    a.rotateX(-Math.PI / 2);
    var b = new THREE.MeshBasicMaterial({
        wireframe: !0,
        fog: !1
    });
    this.cone = new THREE.Mesh(a,b),
    this.add(this.cone),
    this.update()
}
,
THREE.SpotLightHelper.prototype = Object.create(THREE.Object3D.prototype),
THREE.SpotLightHelper.prototype.constructor = THREE.SpotLightHelper,
THREE.SpotLightHelper.prototype.dispose = function() {
    this.cone.geometry.dispose(),
    this.cone.material.dispose()
}
,
THREE.SpotLightHelper.prototype.update = function() {
    var a = new THREE.Vector3
      , b = new THREE.Vector3;
    return function() {
        var c = this.light.distance ? this.light.distance : 1e4
          , d = c * Math.tan(this.light.angle);
        this.cone.scale.set(d, d, c),
        a.setFromMatrixPosition(this.light.matrixWorld),
        b.setFromMatrixPosition(this.light.target.matrixWorld),
        this.cone.lookAt(b.sub(a)),
        this.cone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
    }
}(),
THREE.VertexNormalsHelper = function(a, b, c, d) {
    this.object = a,
    this.size = void 0 !== b ? b : 1,
    a = void 0 !== c ? c : 16711680,
    d = void 0 !== d ? d : 1,
    b = 0,
    c = this.object.geometry,
    c instanceof THREE.Geometry ? b = 3 * c.faces.length : c instanceof THREE.BufferGeometry && (b = c.attributes.normal.count),
    c = new THREE.BufferGeometry,
    b = new THREE.Float32Attribute(6 * b,3),
    c.addAttribute("position", b),
    THREE.LineSegments.call(this, c, new THREE.LineBasicMaterial({
        color: a,
        linewidth: d
    })),
    this.matrixAutoUpdate = !1,
    this.update()
}
,
THREE.VertexNormalsHelper.prototype = Object.create(THREE.LineSegments.prototype),
THREE.VertexNormalsHelper.prototype.constructor = THREE.VertexNormalsHelper,
THREE.VertexNormalsHelper.prototype.update = function() {
    var a = new THREE.Vector3
      , b = new THREE.Vector3
      , c = new THREE.Matrix3;
    return function() {
        var d = ["a", "b", "c"];
        this.object.updateMatrixWorld(!0),
        c.getNormalMatrix(this.object.matrixWorld);
        var e = this.object.matrixWorld
          , f = this.geometry.attributes.position
          , g = this.object.geometry;
        if (g instanceof THREE.Geometry)
            for (var h = g.vertices, i = g.faces, j = g = 0, k = i.length; k > j; j++)
                for (var l = i[j], m = 0, n = l.vertexNormals.length; n > m; m++) {
                    var o = l.vertexNormals[m];
                    a.copy(h[l[d[m]]]).applyMatrix4(e),
                    b.copy(o).applyMatrix3(c).normalize().multiplyScalar(this.size).add(a),
                    f.setXYZ(g, a.x, a.y, a.z),
                    g += 1,
                    f.setXYZ(g, b.x, b.y, b.z),
                    g += 1
                }
        else if (g instanceof THREE.BufferGeometry)
            for (d = g.attributes.position,
            h = g.attributes.normal,
            m = g = 0,
            n = d.count; n > m; m++)
                a.set(d.getX(m), d.getY(m), d.getZ(m)).applyMatrix4(e),
                b.set(h.getX(m), h.getY(m), h.getZ(m)),
                b.applyMatrix3(c).normalize().multiplyScalar(this.size).add(a),
                f.setXYZ(g, a.x, a.y, a.z),
                g += 1,
                f.setXYZ(g, b.x, b.y, b.z),
                g += 1;
        return f.needsUpdate = !0,
        this
    }
}(),
THREE.WireframeHelper = function(a, b) {
    var c = void 0 !== b ? b : 16777215;
    THREE.LineSegments.call(this, new THREE.WireframeGeometry(a.geometry), new THREE.LineBasicMaterial({
        color: c
    })),
    this.matrix = a.matrixWorld,
    this.matrixAutoUpdate = !1
}
,
THREE.WireframeHelper.prototype = Object.create(THREE.LineSegments.prototype),
THREE.WireframeHelper.prototype.constructor = THREE.WireframeHelper,
THREE.ImmediateRenderObject = function(a) {
    THREE.Object3D.call(this),
    this.material = a,
    this.render = function(a) {}
}
,
THREE.ImmediateRenderObject.prototype = Object.create(THREE.Object3D.prototype),
THREE.ImmediateRenderObject.prototype.constructor = THREE.ImmediateRenderObject,
THREE.MorphBlendMesh = function(a, b) {
    THREE.Mesh.call(this, a, b),
    this.animationsMap = {},
    this.animationsList = [];
    var c = this.geometry.morphTargets.length;
    this.createAnimation("__default", 0, c - 1, c / 1),
    this.setAnimationWeight("__default", 1)
}
,
THREE.MorphBlendMesh.prototype = Object.create(THREE.Mesh.prototype),
THREE.MorphBlendMesh.prototype.constructor = THREE.MorphBlendMesh,
THREE.MorphBlendMesh.prototype.createAnimation = function(a, b, c, d) {
    b = {
        start: b,
        end: c,
        length: c - b + 1,
        fps: d,
        duration: (c - b) / d,
        lastFrame: 0,
        currentFrame: 0,
        active: !1,
        time: 0,
        direction: 1,
        weight: 1,
        directionBackwards: !1,
        mirroredLoop: !1
    },
    this.animationsMap[a] = b,
    this.animationsList.push(b)
}
,
THREE.MorphBlendMesh.prototype.autoCreateAnimations = function(a) {
    for (var b, c = /([a-z]+)_?(\d+)/i, d = {}, e = this.geometry, f = 0, g = e.morphTargets.length; g > f; f++) {
        var h = e.morphTargets[f].name.match(c);
        if (h && 1 < h.length) {
            var i = h[1];
            d[i] || (d[i] = {
                start: 1 / 0,
                end: -(1 / 0)
            }),
            h = d[i],
            f < h.start && (h.start = f),
            f > h.end && (h.end = f),
            b || (b = i)
        }
    }
    for (i in d)
        h = d[i],
        this.createAnimation(i, h.start, h.end, a);
    this.firstAnimation = b
}
,
THREE.MorphBlendMesh.prototype.setAnimationDirectionForward = function(a) {
    (a = this.animationsMap[a]) && (a.direction = 1,
    a.directionBackwards = !1)
}
,
THREE.MorphBlendMesh.prototype.setAnimationDirectionBackward = function(a) {
    (a = this.animationsMap[a]) && (a.direction = -1,
    a.directionBackwards = !0)
}
,
THREE.MorphBlendMesh.prototype.setAnimationFPS = function(a, b) {
    var c = this.animationsMap[a];
    c && (c.fps = b,
    c.duration = (c.end - c.start) / c.fps)
}
,
THREE.MorphBlendMesh.prototype.setAnimationDuration = function(a, b) {
    var c = this.animationsMap[a];
    c && (c.duration = b,
    c.fps = (c.end - c.start) / c.duration)
}
,
THREE.MorphBlendMesh.prototype.setAnimationWeight = function(a, b) {
    var c = this.animationsMap[a];
    c && (c.weight = b)
}
,
THREE.MorphBlendMesh.prototype.setAnimationTime = function(a, b) {
    var c = this.animationsMap[a];
    c && (c.time = b)
}
,
THREE.MorphBlendMesh.prototype.getAnimationTime = function(a) {
    var b = 0;
    return (a = this.animationsMap[a]) && (b = a.time),
    b
}
,
THREE.MorphBlendMesh.prototype.getAnimationDuration = function(a) {
    var b = -1;
    return (a = this.animationsMap[a]) && (b = a.duration),
    b
}
,
THREE.MorphBlendMesh.prototype.playAnimation = function(a) {
    var b = this.animationsMap[a];
    b ? (b.time = 0,
    b.active = !0) : console.warn("THREE.MorphBlendMesh: animation[" + a + "] undefined in .playAnimation()")
}
,
THREE.MorphBlendMesh.prototype.stopAnimation = function(a) {
    (a = this.animationsMap[a]) && (a.active = !1)
}
,
THREE.MorphBlendMesh.prototype.update = function(a) {
    for (var b = 0, c = this.animationsList.length; c > b; b++) {
        var d = this.animationsList[b];
        if (d.active) {
            var e = d.duration / d.length;
            d.time += d.direction * a,
            d.mirroredLoop ? (d.time > d.duration || 0 > d.time) && (d.direction *= -1,
            d.time > d.duration && (d.time = d.duration,
            d.directionBackwards = !0),
            0 > d.time && (d.time = 0,
            d.directionBackwards = !1)) : (d.time %= d.duration,
            0 > d.time && (d.time += d.duration));
            var f = d.start + THREE.Math.clamp(Math.floor(d.time / e), 0, d.length - 1)
              , g = d.weight;
            f !== d.currentFrame && (this.morphTargetInfluences[d.lastFrame] = 0,
            this.morphTargetInfluences[d.currentFrame] = 1 * g,
            this.morphTargetInfluences[f] = 0,
            d.lastFrame = d.currentFrame,
            d.currentFrame = f),
            e = d.time % e / e,
            d.directionBackwards && (e = 1 - e),
            d.currentFrame !== d.lastFrame ? (this.morphTargetInfluences[d.currentFrame] = e * g,
            this.morphTargetInfluences[d.lastFrame] = (1 - e) * g) : this.morphTargetInfluences[d.currentFrame] = g
        }
    }
}
;
