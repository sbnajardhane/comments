/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-ambientlight-applicationcache-audio-batteryapi-blobconstructor-canvas-canvastext-contenteditable-contextmenu-cookies-cors-cryptography-customelements-customevent-customprotocolhandler-dart-dataview-emoji-eventlistener-exiforientation-flash-forcetouch-fullscreen-gamepads-geolocation-hashchange-hiddenscroll-history-htmlimports-ie8compat-setclasses-cssclassprefix:ABC_project !*/
! function(e, t, n) {
    function o(e, t) {
        return typeof e === t
    }

    function i() {
        var e, t, n, i, r, a, s;
        for (var l in y)
            if (y.hasOwnProperty(l)) {
                if (e = [], t = y[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                    for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                for (i = o(t.fn, "function") ? t.fn() : t.fn, r = 0; r < e.length; r++) a = e[r], s = a.split("."), 1 === s.length ? Modernizr[s[0]] = i : (!Modernizr[s[0]] || Modernizr[s[0]] instanceof Boolean || (Modernizr[s[0]] = new Boolean(Modernizr[s[0]])), Modernizr[s[0]][s[1]] = i), m.push((i ? "" : "no-") + s.join("-"))
            }
    }

    function r(e) {
        var t = Q.className,
            n = Modernizr._config.classPrefix || "";
        if (T && (t = t.baseVal), Modernizr._config.enableJSClass) {
            var o = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(o, "$1" + n + "js$2")
        }
        Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), T ? Q.className.baseVal = t : Q.className = t)
    }

    function a() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : T ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
    }

    function s() {
        var e = t.body;
        return e || (e = a(T ? "svg" : "body"), e.fake = !0), e
    }

    function l(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
            return t + n.toUpperCase()
        }).replace(/^-/, "")
    }

    function c(e, t) {
        if ("object" == typeof e)
            for (var n in e) x(e, n) && c(n, e[n]);
        else {
            e = e.toLowerCase();
            var o = e.split("."),
                i = Modernizr[o[0]];
            if (2 == o.length && (i = i[o[1]]), "undefined" != typeof i) return Modernizr;
            t = "function" == typeof t ? t() : t, 1 == o.length ? Modernizr[o[0]] = t : (!Modernizr[o[0]] || Modernizr[o[0]] instanceof Boolean || (Modernizr[o[0]] = new Boolean(Modernizr[o[0]])), Modernizr[o[0]][o[1]] = t), r([(t && 0 != t ? "" : "no-") + o.join("-")]), Modernizr._trigger(e, t)
        }
        return Modernizr
    }

    function d(e, n, o, i) {
        var r, l, c, d, u = "modernizr",
            f = a("div"),
            p = s();
        if (parseInt(o, 10))
            for (; o--;) c = a("div"), c.id = i ? i[o] : u + (o + 1), f.appendChild(c);
        return r = a("style"), r.type = "text/css", r.id = "s" + u, (p.fake ? p : f).appendChild(r), p.appendChild(f), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(t.createTextNode(e)), f.id = u, p.fake && (p.style.background = "", p.style.overflow = "hidden", d = Q.style.overflow, Q.style.overflow = "hidden", Q.appendChild(p)), l = n(f, e), p.fake ? (p.parentNode.removeChild(p), Q.style.overflow = d, Q.offsetHeight) : f.parentNode.removeChild(f), !!l
    }

    function u(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function f(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }

    function p(e, t, n) {
        var i;
        for (var r in e)
            if (e[r] in t) return n === !1 ? e[r] : (i = t[e[r]], o(i, "function") ? f(i, n || t) : i);
        return !1
    }

    function A(e) {
        return e.replace(/([A-Z])/g, function(e, t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function h(t, n, o) {
        var i;
        if ("getComputedStyle" in e) {
            i = getComputedStyle.call(e, t, n);
            var r = e.console;
            if (null !== i) o && (i = i.getPropertyValue(o));
            else if (r) {
                var a = r.error ? "error" : "log";
                r[a].call(r, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
            }
        } else i = !n && t.currentStyle && t.currentStyle[o];
        return i
    }

    function v(t, o) {
        var i = t.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; i--;)
                if (e.CSS.supports(A(t[i]), o)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in e) {
            for (var r = []; i--;) r.push("(" + A(t[i]) + ":" + o + ")");
            return r = r.join(" or "), d("@supports (" + r + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == h(e, null, "position")
            })
        }
        return n
    }

    function E(e, t, i, r) {
        function s() { d && (delete R.style, delete R.modElem) }
        if (r = o(r, "undefined") ? !1 : r, !o(i, "undefined")) {
            var c = v(e, i);
            if (!o(c, "undefined")) return c
        }
        for (var d, f, p, A, h, E = ["modernizr", "tspan", "samp"]; !R.style && E.length;) d = !0, R.modElem = a(E.shift()), R.style = R.modElem.style;
        for (p = e.length, f = 0; p > f; f++)
            if (A = e[f], h = R.style[A], u(A, "-") && (A = l(A)), R.style[A] !== n) {
                if (r || o(i, "undefined")) return s(), "pfx" == t ? A : !0;
                try { R.style[A] = i } catch (g) {}
                if (R.style[A] != h) return s(), "pfx" == t ? A : !0
            }
        return s(), !1
    }

    function g(e, t, n, i, r) {
        var a = e.charAt(0).toUpperCase() + e.slice(1),
            s = (e + " " + S.join(a + " ") + a).split(" ");
        return o(t, "string") || o(t, "undefined") ? E(s, t, i, r) : (s = (e + " " + k.join(a + " ") + a).split(" "), p(s, t, n))
    }
    var m = [],
        y = [],
        B = {
            _version: "3.5.0",
            _config: { enableClasses: !0, enableJSClass: !0, usePrefixes: !0 },
            _q: [],
            on: function(e, t) {
                var n = this;
                setTimeout(function() { t(n[e]) }, 0)
            },
            addTest: function(e, t, n) { y.push({ name: e, fn: t, options: n }) },
            addAsyncTest: function(e) { y.push({ name: null, fn: e }) }
        },
        Modernizr = function() {};
    Modernizr.prototype = B, Modernizr = new Modernizr, Modernizr.addTest("applicationcache", "applicationCache" in e), Modernizr.addTest("blobconstructor", function() {
        try {
            return !!new Blob
        } catch (e) {
            return !1
        }
    }, { aliases: ["blob-constructor"] }), Modernizr.addTest("cookies", function() {
        try {
            t.cookie = "cookietest=1";
            var e = -1 != t.cookie.indexOf("cookietest=");
            return t.cookie = "cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT", e
        } catch (n) {
            return !1
        }
    }), Modernizr.addTest("cors", "XMLHttpRequest" in e && "withCredentials" in new XMLHttpRequest), Modernizr.addTest("customelements", "customElements" in e), Modernizr.addTest("customprotocolhandler", function() {
        if (!navigator.registerProtocolHandler) return !1;
        try { navigator.registerProtocolHandler("thisShouldFail") } catch (e) {
            return e instanceof TypeError
        }
        return !1
    }), Modernizr.addTest("customevent", "CustomEvent" in e && "function" == typeof e.CustomEvent), Modernizr.addTest("dataview", "undefined" != typeof DataView && "getFloat64" in DataView.prototype), Modernizr.addTest("eventlistener", "addEventListener" in e), Modernizr.addTest("geolocation", "geolocation" in navigator), Modernizr.addTest("history", function() {
        var t = navigator.userAgent;
        return -1 === t.indexOf("Android 2.") && -1 === t.indexOf("Android 4.0") || -1 === t.indexOf("Mobile Safari") || -1 !== t.indexOf("Chrome") || -1 !== t.indexOf("Windows Phone") || "file:" === location.protocol ? e.history && "pushState" in e.history : !1
    }), Modernizr.addTest("ie8compat", !e.addEventListener && !!t.documentMode && 7 === t.documentMode);
    var Q = t.documentElement;
    Modernizr.addTest("contextmenu", "contextMenu" in Q && "HTMLMenuItemElement" in e);
    var T = "svg" === Q.nodeName.toLowerCase();
    Modernizr.addTest("audio", function() {
        var e = a("audio"),
            t = !1;
        try { t = !!e.canPlayType, t && (t = new Boolean(t), t.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), t.mp3 = e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/, ""), t.opus = e.canPlayType('audio/ogg; codecs="opus"') || e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/, ""), t.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), t.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, "")) } catch (n) {}
        return t
    }), Modernizr.addTest("canvas", function() {
        var e = a("canvas");
        return !(!e.getContext || !e.getContext("2d"))
    }), Modernizr.addTest("canvastext", function() {
        return Modernizr.canvas === !1 ? !1 : "function" == typeof a("canvas").getContext("2d").fillText
    }), Modernizr.addTest("contenteditable", function() {
        if ("contentEditable" in Q) {
            var e = a("div");
            return e.contentEditable = !0, "true" === e.contentEditable
        }
    }), Modernizr.addTest("emoji", function() {
        if (!Modernizr.canvastext) return !1;
        var t = e.devicePixelRatio || 1,
            n = 12 * t,
            o = a("canvas"),
            i = o.getContext("2d");
        return i.fillStyle = "#f00", i.textBaseline = "top", i.font = "32px Arial", i.fillText("🐨", 0, 0), 0 !== i.getImageData(n, n, 1, 1).data[0]
    });
    var w = function() {
        function e(e, t) {
            var i;
            return e ? (t && "string" != typeof t || (t = a(t || "div")), e = "on" + e, i = e in t, !i && o && (t.setAttribute || (t = a("div")), t.setAttribute(e, ""), i = "function" == typeof t[e], t[e] !== n && (t[e] = n), t.removeAttribute(e)), i) : !1
        }
        var o = !("onblur" in t.documentElement);
        return e
    }();
    B.hasEvent = w, Modernizr.addTest("ambientlight", w("devicelight", e)), Modernizr.addTest("hashchange", function() {
        return w("hashchange", e) === !1 ? !1 : t.documentMode === n || t.documentMode > 7
    });
    var x;
    ! function() {
        var e = {}.hasOwnProperty;
        x = o(e, "undefined") || o(e.call, "undefined") ? function(e, t) {
            return t in e && o(e.constructor.prototype[t], "undefined")
        } : function(t, n) {
            return e.call(t, n)
        }
    }(), B._l = {}, B.on = function(e, t) { this._l[e] || (this._l[e] = []), this._l[e].push(t), Modernizr.hasOwnProperty(e) && setTimeout(function() { Modernizr._trigger(e, Modernizr[e]) }, 0) }, B._trigger = function(e, t) {
        if (this._l[e]) {
            var n = this._l[e];
            setTimeout(function() {
                var e, o;
                for (e = 0; e < n.length; e++)(o = n[e])(t)
            }, 0), delete this._l[e]
        }
    }, Modernizr._q.push(function() { B.addTest = c }), Modernizr.addAsyncTest(function() {
        var e = new Image;
        e.onerror = function() { c("exiforientation", !1, { aliases: ["exif-orientation"] }) }, e.onload = function() { c("exiforientation", 2 !== e.width, { aliases: ["exif-orientation"] }) }, e.src = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QAiRXhpZgAASUkqAAgAAAABABIBAwABAAAABgASAAAAAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAABAAIDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+/iiiigD/2Q=="
    }), Modernizr.addAsyncTest(function() {
        var n, o, i = function(e) { Q.contains(e) || Q.appendChild(e) },
            r = function(e) { e.fake && e.parentNode && e.parentNode.removeChild(e) },
            l = function(e, t) {
                var n = !!e;
                if (n && (n = new Boolean(n), n.blocked = "blocked" === e), c("flash", function() {
                        return n
                    }), t && A.contains(t)) {
                    for (; t.parentNode !== A;) t = t.parentNode;
                    A.removeChild(t)
                }
            };
        try { o = "ActiveXObject" in e && "Pan" in new e.ActiveXObject("ShockwaveFlash.ShockwaveFlash") } catch (d) {}
        if (n = !("plugins" in navigator && "Shockwave Flash" in navigator.plugins || o), n || T) l(!1);
        else {
            var u, f, p = a("embed"),
                A = s();
            if (p.type = "application/x-shockwave-flash", A.appendChild(p), !("Pan" in p || o)) return i(A), l("blocked", p), void r(A);
            u = function() {
                return i(A), Q.contains(A) ? (Q.contains(p) ? (f = p.style.cssText, "" !== f ? l("blocked", p) : l(!0, p)) : l("blocked"), void r(A)) : (A = t.body || A, p = a("embed"), p.type = "application/x-shockwave-flash", A.appendChild(p), setTimeout(u, 1e3))
            }, setTimeout(u, 10)
        }
    }), c("htmlimports", "import" in a("link"));
    var C = B.testStyles = d;
    Modernizr.addTest("hiddenscroll", function() {
        return C("#modernizr {width:100px;height:100px;overflow:scroll}", function(e) {
            return e.offsetWidth === e.clientWidth
        })
    });
    var b = "Moz O ms Webkit",
        S = B._config.usePrefixes ? b.split(" ") : [];
    B._cssomPrefixes = S;
    var _ = function(t) {
        var o, i = prefixes.length,
            r = e.CSSRule;
        if ("undefined" == typeof r) return n;
        if (!t) return !1;
        if (t = t.replace(/^@/, ""), o = t.replace(/-/g, "_").toUpperCase() + "_RULE", o in r) return "@" + t;
        for (var a = 0; i > a; a++) {
            var s = prefixes[a],
                l = s.toUpperCase() + "_" + o;
            if (l in r) return "@-" + s.toLowerCase() + "-" + t
        }
        return !1
    };
    B.atRule = _;
    var k = B._config.usePrefixes ? b.toLowerCase().split(" ") : [];
    B._domPrefixes = k;
    var P = { elem: a("modernizr") };
    Modernizr._q.push(function() { delete P.elem });
    var R = { style: P.elem.style };
    Modernizr._q.unshift(function() { delete R.style }), B.testAllProps = g;
    var O = B.prefixed = function(e, t, n) {
        return 0 === e.indexOf("@") ? _(e) : (-1 != e.indexOf("-") && (e = l(e)), t ? g(e, t, n) : g(e, "pfx"))
    };
    Modernizr.addTest("batteryapi", !!O("battery", navigator), { aliases: ["battery-api"] });
    var M = O("crypto", e);
    Modernizr.addTest("crypto", !!O("subtle", M)), Modernizr.addTest("dart", !!O("startDart", navigator)), Modernizr.addTest("forcetouch", function() {
        return w(O("mouseforcewillbegin", e, !1), e) ? MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN && MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN : !1
    }), Modernizr.addTest("fullscreen", !(!O("exitFullscreen", t, !1) && !O("cancelFullScreen", t, !1))), Modernizr.addTest("gamepads", !!O("getGamepads", navigator)), i(), r(m), delete B.addTest, delete B.addAsyncTest;
    for (var N = 0; N < Modernizr._q.length; N++) Modernizr._q[N]();
    e.Modernizr = Modernizr
}(window, document);
