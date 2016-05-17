// ┌────────────────────────────────────────────────────────────────────┐ \\
// │ Raphaël 2.1.2 - JavaScript Vector Library                          │ \\
// ├────────────────────────────────────────────────────────────────────┤ \\
// │ Copyright © 2008-2012 Dmitry Baranovskiy (http://raphaeljs.com)    │ \\
// │ Copyright © 2008-2012 Sencha Labs (http://sencha.com)              │ \\
// ├────────────────────────────────────────────────────────────────────┤ \\
// │ Licensed under the MIT (http://raphaeljs.com/license.html) license.│ \\
// └────────────────────────────────────────────────────────────────────┘ \\
!function (a) {
    var b, c, d = "0.4.2", e = "hasOwnProperty", f = /[\.\/]/, g = "*", h = function () {
    }, i = function (a, b) {
        return a - b
    }, j = {n: {}}, k = function (a, d) {
        a = String(a);
        var e, f = c, g = Array.prototype.slice.call(arguments, 2), h = k.listeners(a), j = 0, l = [], m = {}, n = [], o = b;
        b = a, c = 0;
        for (var p = 0, q = h.length; q > p; p++)"zIndex" in h[p] && (l.push(h[p].zIndex), h[p].zIndex < 0 && (m[h[p].zIndex] = h[p]));
        for (l.sort(i); l[j] < 0;)if (e = m[l[j++]], n.push(e.apply(d, g)), c)return c = f, n;
        for (p = 0; q > p; p++)if (e = h[p], "zIndex" in e)if (e.zIndex == l[j]) {
            if (n.push(e.apply(d, g)), c)break;
            do if (j++, e = m[l[j]], e && n.push(e.apply(d, g)), c)break; while (e)
        } else m[e.zIndex] = e; else if (n.push(e.apply(d, g)), c)break;
        return c = f, b = o, n.length ? n : null
    };
    k._events = j, k.listeners = function (a) {
        var b, c, d, e, h, i, k, l, m = a.split(f), n = j, o = [n], p = [];
        for (e = 0, h = m.length; h > e; e++) {
            for (l = [], i = 0, k = o.length; k > i; i++)for (n = o[i].n, c = [n[m[e]], n[g]], d = 2; d--;)b = c[d], b && (l.push(b), p = p.concat(b.f || []));
            o = l
        }
        return p
    }, k.on = function (a, b) {
        if (a = String(a), "function" != typeof b)return function () {
        };
        for (var c = a.split(f), d = j, e = 0, g = c.length; g > e; e++)d = d.n, d = d.hasOwnProperty(c[e]) && d[c[e]] || (d[c[e]] = {n: {}});
        for (d.f = d.f || [], e = 0, g = d.f.length; g > e; e++)if (d.f[e] == b)return h;
        return d.f.push(b), function (a) {
            +a == +a && (b.zIndex = +a)
        }
    }, k.f = function (a) {
        var b = [].slice.call(arguments, 1);
        return function () {
            k.apply(null, [a, null].concat(b).concat([].slice.call(arguments, 0)))
        }
    }, k.stop = function () {
        c = 1
    }, k.nt = function (a) {
        return a ? new RegExp("(?:\\.|\\/|^)" + a + "(?:\\.|\\/|$)").test(b) : b
    }, k.nts = function () {
        return b.split(f)
    }, k.off = k.unbind = function (a, b) {
        if (!a)return void(k._events = j = {n: {}});
        var c, d, h, i, l, m, n, o = a.split(f), p = [j];
        for (i = 0, l = o.length; l > i; i++)for (m = 0; m < p.length; m += h.length - 2) {
            if (h = [m, 1], c = p[m].n, o[i] != g)c[o[i]] && h.push(c[o[i]]); else for (d in c)c[e](d) && h.push(c[d]);
            p.splice.apply(p, h)
        }
        for (i = 0, l = p.length; l > i; i++)for (c = p[i]; c.n;) {
            if (b) {
                if (c.f) {
                    for (m = 0, n = c.f.length; n > m; m++)if (c.f[m] == b) {
                        c.f.splice(m, 1);
                        break
                    }
                    !c.f.length && delete c.f
                }
                for (d in c.n)if (c.n[e](d) && c.n[d].f) {
                    var q = c.n[d].f;
                    for (m = 0, n = q.length; n > m; m++)if (q[m] == b) {
                        q.splice(m, 1);
                        break
                    }
                    !q.length && delete c.n[d].f
                }
            } else {
                delete c.f;
                for (d in c.n)c.n[e](d) && c.n[d].f && delete c.n[d].f
            }
            c = c.n
        }
    }, k.once = function (a, b) {
        var c = function () {
            return k.unbind(a, c), b.apply(this, arguments)
        };
        return k.on(a, c)
    }, k.version = d, k.toString = function () {
        return "You are running Eve " + d
    }, "undefined" != typeof module && module.exports ? module.exports = k : "undefined" != typeof define ? define("eve", [], function () {
        return k
    }) : a.eve = k
}(window || this), function (a, b) {
    "function" == typeof define && define.amd ? define(["eve"], function (c) {
        return b(a, c)
    }) : b(a, a.eve)
}(this, function (a, b) {
    function c(a) {
        if (c.is(a, "function"))return u ? a() : b.on("raphael.DOMload", a);
        if (c.is(a, V))return c._engine.create[D](c, a.splice(0, 3 + c.is(a[0], T))).add(a);
        var d = Array.prototype.slice.call(arguments, 0);
        if (c.is(d[d.length - 1], "function")) {
            var e = d.pop();
            return u ? e.call(c._engine.create[D](c, d)) : b.on("raphael.DOMload", function () {
                e.call(c._engine.create[D](c, d))
            })
        }
        return c._engine.create[D](c, arguments)
    }

    function d(a) {
        if ("function" == typeof a || Object(a) !== a)return a;
        var b = new a.constructor;
        for (var c in a)a[z](c) && (b[c] = d(a[c]));
        return b
    }

    function e(a, b) {
        for (var c = 0, d = a.length; d > c; c++)if (a[c] === b)return a.push(a.splice(c, 1)[0])
    }

    function f(a, b, c) {
        function d() {
            var f = Array.prototype.slice.call(arguments, 0), g = f.join("␀"), h = d.cache = d.cache || {}, i = d.count = d.count || [];
            return h[z](g) ? (e(i, g), c ? c(h[g]) : h[g]) : (i.length >= 1e3 && delete h[i.shift()], i.push(g), h[g] = a[D](b, f), c ? c(h[g]) : h[g])
        }

        return d
    }

    function g() {
        return this.hex
    }

    function h(a, b) {
        for (var c = [], d = 0, e = a.length; e - 2 * !b > d; d += 2) {
            var f = [{x: +a[d - 2], y: +a[d - 1]}, {x: +a[d], y: +a[d + 1]}, {
                x: +a[d + 2],
                y: +a[d + 3]
            }, {x: +a[d + 4], y: +a[d + 5]}];
            b ? d ? e - 4 == d ? f[3] = {x: +a[0], y: +a[1]} : e - 2 == d && (f[2] = {
                x: +a[0],
                y: +a[1]
            }, f[3] = {x: +a[2], y: +a[3]}) : f[0] = {
                x: +a[e - 2],
                y: +a[e - 1]
            } : e - 4 == d ? f[3] = f[2] : d || (f[0] = {
                x: +a[d],
                y: +a[d + 1]
            }), c.push(["C", (-f[0].x + 6 * f[1].x + f[2].x) / 6, (-f[0].y + 6 * f[1].y + f[2].y) / 6, (f[1].x + 6 * f[2].x - f[3].x) / 6, (f[1].y + 6 * f[2].y - f[3].y) / 6, f[2].x, f[2].y])
        }
        return c
    }

    function i(a, b, c, d, e) {
        var f = -3 * b + 9 * c - 9 * d + 3 * e, g = a * f + 6 * b - 12 * c + 6 * d;
        return a * g - 3 * b + 3 * c
    }

    function j(a, b, c, d, e, f, g, h, j) {
        null == j && (j = 1), j = j > 1 ? 1 : 0 > j ? 0 : j;
        for (var k = j / 2, l = 12, m = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], n = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], o = 0, p = 0; l > p; p++) {
            var q = k * m[p] + k, r = i(q, a, c, e, g), s = i(q, b, d, f, h), t = r * r + s * s;
            o += n[p] * N.sqrt(t)
        }
        return k * o
    }

    function k(a, b, c, d, e, f, g, h, i) {
        if (!(0 > i || j(a, b, c, d, e, f, g, h) < i)) {
            var k, l = 1, m = l / 2, n = l - m, o = .01;
            for (k = j(a, b, c, d, e, f, g, h, n); Q(k - i) > o;)m /= 2, n += (i > k ? 1 : -1) * m, k = j(a, b, c, d, e, f, g, h, n);
            return n
        }
    }

    function l(a, b, c, d, e, f, g, h) {
        if (!(O(a, c) < P(e, g) || P(a, c) > O(e, g) || O(b, d) < P(f, h) || P(b, d) > O(f, h))) {
            var i = (a * d - b * c) * (e - g) - (a - c) * (e * h - f * g), j = (a * d - b * c) * (f - h) - (b - d) * (e * h - f * g), k = (a - c) * (f - h) - (b - d) * (e - g);
            if (k) {
                var l = i / k, m = j / k, n = +l.toFixed(2), o = +m.toFixed(2);
                if (!(n < +P(a, c).toFixed(2) || n > +O(a, c).toFixed(2) || n < +P(e, g).toFixed(2) || n > +O(e, g).toFixed(2) || o < +P(b, d).toFixed(2) || o > +O(b, d).toFixed(2) || o < +P(f, h).toFixed(2) || o > +O(f, h).toFixed(2)))return {
                    x: l,
                    y: m
                }
            }
        }
    }

    function m(a, b, d) {
        var e = c.bezierBBox(a), f = c.bezierBBox(b);
        if (!c.isBBoxIntersect(e, f))return d ? 0 : [];
        for (var g = j.apply(0, a), h = j.apply(0, b), i = O(~~(g / 5), 1), k = O(~~(h / 5), 1), m = [], n = [], o = {}, p = d ? 0 : [], q = 0; i + 1 > q; q++) {
            var r = c.findDotsAtSegment.apply(c, a.concat(q / i));
            m.push({x: r.x, y: r.y, t: q / i})
        }
        for (q = 0; k + 1 > q; q++)r = c.findDotsAtSegment.apply(c, b.concat(q / k)), n.push({
            x: r.x,
            y: r.y,
            t: q / k
        });
        for (q = 0; i > q; q++)for (var s = 0; k > s; s++) {
            var t = m[q], u = m[q + 1], v = n[s], w = n[s + 1], x = Q(u.x - t.x) < .001 ? "y" : "x", y = Q(w.x - v.x) < .001 ? "y" : "x", z = l(t.x, t.y, u.x, u.y, v.x, v.y, w.x, w.y);
            if (z) {
                if (o[z.x.toFixed(4)] == z.y.toFixed(4))continue;
                o[z.x.toFixed(4)] = z.y.toFixed(4);
                var A = t.t + Q((z[x] - t[x]) / (u[x] - t[x])) * (u.t - t.t), B = v.t + Q((z[y] - v[y]) / (w[y] - v[y])) * (w.t - v.t);
                A >= 0 && 1.001 >= A && B >= 0 && 1.001 >= B && (d ? p++ : p.push({
                    x: z.x,
                    y: z.y,
                    t1: P(A, 1),
                    t2: P(B, 1)
                }))
            }
        }
        return p
    }

    function n(a, b, d) {
        a = c._path2curve(a), b = c._path2curve(b);
        for (var e, f, g, h, i, j, k, l, n, o, p = d ? 0 : [], q = 0, r = a.length; r > q; q++) {
            var s = a[q];
            if ("M" == s[0])e = i = s[1], f = j = s[2]; else {
                "C" == s[0] ? (n = [e, f].concat(s.slice(1)), e = n[6], f = n[7]) : (n = [e, f, e, f, i, j, i, j], e = i, f = j);
                for (var t = 0, u = b.length; u > t; t++) {
                    var v = b[t];
                    if ("M" == v[0])g = k = v[1], h = l = v[2]; else {
                        "C" == v[0] ? (o = [g, h].concat(v.slice(1)), g = o[6], h = o[7]) : (o = [g, h, g, h, k, l, k, l], g = k, h = l);
                        var w = m(n, o, d);
                        if (d)p += w; else {
                            for (var x = 0, y = w.length; y > x; x++)w[x].segment1 = q, w[x].segment2 = t, w[x].bez1 = n, w[x].bez2 = o;
                            p = p.concat(w)
                        }
                    }
                }
            }
        }
        return p
    }

    function o(a, b, c, d, e, f) {
        null != a ? (this.a = +a, this.b = +b, this.c = +c, this.d = +d, this.e = +e, this.f = +f) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0)
    }

    function p() {
        return this.x + H + this.y + H + this.width + " × " + this.height
    }

    function q(a, b, c, d, e, f) {
        function g(a) {
            return ((l * a + k) * a + j) * a
        }

        function h(a, b) {
            var c = i(a, b);
            return ((o * c + n) * c + m) * c
        }

        function i(a, b) {
            var c, d, e, f, h, i;
            for (e = a, i = 0; 8 > i; i++) {
                if (f = g(e) - a, Q(f) < b)return e;
                if (h = (3 * l * e + 2 * k) * e + j, Q(h) < 1e-6)break;
                e -= f / h
            }
            if (c = 0, d = 1, e = a, c > e)return c;
            if (e > d)return d;
            for (; d > c;) {
                if (f = g(e), Q(f - a) < b)return e;
                a > f ? c = e : d = e, e = (d - c) / 2 + c
            }
            return e
        }

        var j = 3 * b, k = 3 * (d - b) - j, l = 1 - j - k, m = 3 * c, n = 3 * (e - c) - m, o = 1 - m - n;
        return h(a, 1 / (200 * f))
    }

    function r(a, b) {
        var c = [], d = {};
        if (this.ms = b, this.times = 1, a) {
            for (var e in a)a[z](e) && (d[_(e)] = a[e], c.push(_(e)));
            c.sort(lb)
        }
        this.anim = d, this.top = c[c.length - 1], this.percents = c
    }

    function s(a, d, e, f, g, h) {
        e = _(e);
        var i, j, k, l, m, n, p = a.ms, r = {}, s = {}, t = {};
        if (f)for (v = 0, x = ic.length; x > v; v++) {
            var u = ic[v];
            if (u.el.id == d.id && u.anim == a) {
                u.percent != e ? (ic.splice(v, 1), k = 1) : j = u, d.attr(u.totalOrigin);
                break
            }
        } else f = +s;
        for (var v = 0, x = a.percents.length; x > v; v++) {
            if (a.percents[v] == e || a.percents[v] > f * a.top) {
                e = a.percents[v], m = a.percents[v - 1] || 0, p = p / a.top * (e - m), l = a.percents[v + 1], i = a.anim[e];
                break
            }
            f && d.attr(a.anim[a.percents[v]])
        }
        if (i) {
            if (j)j.initstatus = f, j.start = new Date - j.ms * f; else {
                for (var y in i)if (i[z](y) && (db[z](y) || d.paper.customAttributes[z](y)))switch (r[y] = d.attr(y), null == r[y] && (r[y] = cb[y]), s[y] = i[y], db[y]) {
                    case T:
                        t[y] = (s[y] - r[y]) / p;
                        break;
                    case"colour":
                        r[y] = c.getRGB(r[y]);
                        var A = c.getRGB(s[y]);
                        t[y] = {r: (A.r - r[y].r) / p, g: (A.g - r[y].g) / p, b: (A.b - r[y].b) / p};
                        break;
                    case"path":
                        var B = Kb(r[y], s[y]), C = B[1];
                        for (r[y] = B[0], t[y] = [], v = 0, x = r[y].length; x > v; v++) {
                            t[y][v] = [0];
                            for (var D = 1, F = r[y][v].length; F > D; D++)t[y][v][D] = (C[v][D] - r[y][v][D]) / p
                        }
                        break;
                    case"transform":
                        var G = d._, H = Pb(G[y], s[y]);
                        if (H)for (r[y] = H.from, s[y] = H.to, t[y] = [], t[y].real = !0, v = 0, x = r[y].length; x > v; v++)for (t[y][v] = [r[y][v][0]], D = 1, F = r[y][v].length; F > D; D++)t[y][v][D] = (s[y][v][D] - r[y][v][D]) / p; else {
                            var K = d.matrix || new o, L = {
                                _: {transform: G.transform}, getBBox: function () {
                                    return d.getBBox(1)
                                }
                            };
                            r[y] = [K.a, K.b, K.c, K.d, K.e, K.f], Nb(L, s[y]), s[y] = L._.transform, t[y] = [(L.matrix.a - K.a) / p, (L.matrix.b - K.b) / p, (L.matrix.c - K.c) / p, (L.matrix.d - K.d) / p, (L.matrix.e - K.e) / p, (L.matrix.f - K.f) / p]
                        }
                        break;
                    case"csv":
                        var M = I(i[y])[J](w), N = I(r[y])[J](w);
                        if ("clip-rect" == y)for (r[y] = N, t[y] = [], v = N.length; v--;)t[y][v] = (M[v] - r[y][v]) / p;
                        s[y] = M;
                        break;
                    default:
                        for (M = [][E](i[y]), N = [][E](r[y]), t[y] = [], v = d.paper.customAttributes[y].length; v--;)t[y][v] = ((M[v] || 0) - (N[v] || 0)) / p
                }
                var O = i.easing, P = c.easing_formulas[O];
                if (!P)if (P = I(O).match(Z), P && 5 == P.length) {
                    var Q = P;
                    P = function (a) {
                        return q(a, +Q[1], +Q[2], +Q[3], +Q[4], p)
                    }
                } else P = nb;
                if (n = i.start || a.start || +new Date, u = {
                        anim: a,
                        percent: e,
                        timestamp: n,
                        start: n + (a.del || 0),
                        status: 0,
                        initstatus: f || 0,
                        stop: !1,
                        ms: p,
                        easing: P,
                        from: r,
                        diff: t,
                        to: s,
                        el: d,
                        callback: i.callback,
                        prev: m,
                        next: l,
                        repeat: h || a.times,
                        origin: d.attr(),
                        totalOrigin: g
                    }, ic.push(u), f && !j && !k && (u.stop = !0, u.start = new Date - p * f, 1 == ic.length))return kc();
                k && (u.start = new Date - u.ms * f), 1 == ic.length && jc(kc)
            }
            b("raphael.anim.start." + d.id, d, a)
        }
    }

    function t(a) {
        for (var b = 0; b < ic.length; b++)ic[b].el.paper == a && ic.splice(b--, 1)
    }

    c.version = "2.1.2", c.eve = b;
    var u, v, w = /[, ]+/, x = {
        circle: 1,
        rect: 1,
        path: 1,
        ellipse: 1,
        text: 1,
        image: 1
    }, y = /\{(\d+)\}/g, z = "hasOwnProperty", A = {
        doc: document,
        win: a
    }, B = {was: Object.prototype[z].call(A.win, "Raphael"), is: A.win.Raphael}, C = function () {
        this.ca = this.customAttributes = {}
    }, D = "apply", E = "concat", F = "ontouchstart" in A.win || A.win.DocumentTouch && A.doc instanceof DocumentTouch, G = "", H = " ", I = String, J = "split", K = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[J](H), L = {
        mousedown: "touchstart",
        mousemove: "touchmove",
        mouseup: "touchend"
    }, M = I.prototype.toLowerCase, N = Math, O = N.max, P = N.min, Q = N.abs, R = N.pow, S = N.PI, T = "number", U = "string", V = "array", W = Object.prototype.toString, X = (c._ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i, /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i), Y = {
        NaN: 1,
        Infinity: 1,
        "-Infinity": 1
    }, Z = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/, $ = N.round, _ = parseFloat, ab = parseInt, bb = I.prototype.toUpperCase, cb = c._availableAttrs = {
        "arrow-end": "none",
        "arrow-start": "none",
        blur: 0,
        "clip-rect": "0 0 1e9 1e9",
        cursor: "default",
        cx: 0,
        cy: 0,
        fill: "#fff",
        "fill-opacity": 1,
        font: '10px "Arial"',
        "font-family": '"Arial"',
        "font-size": "10",
        "font-style": "normal",
        "font-weight": 400,
        gradient: 0,
        height: 0,
        href: "http://raphaeljs.com/",
        "letter-spacing": 0,
        opacity: 1,
        path: "M0,0",
        r: 0,
        rx: 0,
        ry: 0,
        src: "",
        stroke: "#000",
        "stroke-dasharray": "",
        "stroke-linecap": "butt",
        "stroke-linejoin": "butt",
        "stroke-miterlimit": 0,
        "stroke-opacity": 1,
        "stroke-width": 1,
        target: "_blank",
        "text-anchor": "middle",
        title: "Raphael",
        transform: "",
        width: 0,
        x: 0,
        y: 0
    }, db = c._availableAnimAttrs = {
        blur: T,
        "clip-rect": "csv",
        cx: T,
        cy: T,
        fill: "colour",
        "fill-opacity": T,
        "font-size": T,
        height: T,
        opacity: T,
        path: "path",
        r: T,
        rx: T,
        ry: T,
        stroke: "colour",
        "stroke-opacity": T,
        "stroke-width": T,
        transform: "transform",
        width: T,
        x: T,
        y: T
    }, eb = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/, fb = {
        hs: 1,
        rg: 1
    }, gb = /,?([achlmqrstvxz]),?/gi, hb = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi, ib = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi, jb = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi, kb = (c._radial_gradient = /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/, {}), lb = function (a, b) {
        return _(a) - _(b)
    }, mb = function () {
    }, nb = function (a) {
        return a
    }, ob = c._rectPath = function (a, b, c, d, e) {
        return e ? [["M", a + e, b], ["l", c - 2 * e, 0], ["a", e, e, 0, 0, 1, e, e], ["l", 0, d - 2 * e], ["a", e, e, 0, 0, 1, -e, e], ["l", 2 * e - c, 0], ["a", e, e, 0, 0, 1, -e, -e], ["l", 0, 2 * e - d], ["a", e, e, 0, 0, 1, e, -e], ["z"]] : [["M", a, b], ["l", c, 0], ["l", 0, d], ["l", -c, 0], ["z"]]
    }, pb = function (a, b, c, d) {
        return null == d && (d = c), [["M", a, b], ["m", 0, -d], ["a", c, d, 0, 1, 1, 0, 2 * d], ["a", c, d, 0, 1, 1, 0, -2 * d], ["z"]]
    }, qb = c._getPath = {
        path: function (a) {
            return a.attr("path")
        }, circle: function (a) {
            var b = a.attrs;
            return pb(b.cx, b.cy, b.r)
        }, ellipse: function (a) {
            var b = a.attrs;
            return pb(b.cx, b.cy, b.rx, b.ry)
        }, rect: function (a) {
            var b = a.attrs;
            return ob(b.x, b.y, b.width, b.height, b.r)
        }, image: function (a) {
            var b = a.attrs;
            return ob(b.x, b.y, b.width, b.height)
        }, text: function (a) {
            var b = a._getBBox();
            return ob(b.x, b.y, b.width, b.height)
        }, set: function (a) {
            var b = a._getBBox();
            return ob(b.x, b.y, b.width, b.height)
        }
    }, rb = c.mapPath = function (a, b) {
        if (!b)return a;
        var c, d, e, f, g, h, i;
        for (a = Kb(a), e = 0, g = a.length; g > e; e++)for (i = a[e], f = 1, h = i.length; h > f; f += 2)c = b.x(i[f], i[f + 1]), d = b.y(i[f], i[f + 1]), i[f] = c, i[f + 1] = d;
        return a
    };
    if (c._g = A, c.type = A.win.SVGAngle || A.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML", "VML" == c.type) {
        var sb, tb = A.doc.createElement("div");
        if (tb.innerHTML = '<v:shape adj="1"/>', sb = tb.firstChild, sb.style.behavior = "url(#default#VML)", !sb || "object" != typeof sb.adj)return c.type = G;
        tb = null
    }
    c.svg = !(c.vml = "VML" == c.type), c._Paper = C, c.fn = v = C.prototype = c.prototype, c._id = 0, c._oid = 0, c.is = function (a, b) {
        return b = M.call(b), "finite" == b ? !Y[z](+a) : "array" == b ? a instanceof Array : "null" == b && null === a || b == typeof a && null !== a || "object" == b && a === Object(a) || "array" == b && Array.isArray && Arr