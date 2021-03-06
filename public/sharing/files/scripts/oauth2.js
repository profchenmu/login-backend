/*
 RequireJS 2.1.4 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 Available via the MIT or new BSD license.
 see: http://github.com/jrburke/requirejs for details
*/

/*!
 * Calcite Web - Calcite Design Components in CSS, JS and HTML
 * @version v1.2.4
 * @license Apache-2.0
 * @copyright 2018 Esri
 * @link https://github.com/Esri/calcite-web
 */

/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */

/**
 * @license text 2.0.15 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, http://github.com/requirejs/text/LICENSE
 */

/**
 * @license RequireJS i18n 2.0.2 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/i18n for details
 */

var requirejs, require, define;
! function (Y) {
    function I(e) {
        return "[object Function]" === L.call(e)
    }

    function J(e) {
        return "[object Array]" === L.call(e)
    }

    function x(e, t) {
        if (e) {
            var n;
            for (n = 0; n < e.length && (!e[n] || !t(e[n], n, e)); n += 1);
        }
    }

    function M(e, t) {
        if (e) {
            var n;
            for (n = e.length - 1; - 1 < n && (!e[n] || !t(e[n], n, e)); n -= 1);
        }
    }

    function r(e, t) {
        return da.call(e, t)
    }

    function i(e, t) {
        return r(e, t) && e[t]
    }

    function E(e, t) {
        for (var n in e)
            if (r(e, n) && t(e[n], n)) break
    }

    function Q(e, t, n, i) {
        return t && E(t, function (t, a) {
            !n && r(e, a) || (i && "string" != typeof t ? (e[a] || (e[a] = {}), Q(e[a], t, n, i)) : e[a] = t)
        }), e
    }

    function t(e, t) {
        return function () {
            return t.apply(e, arguments)
        }
    }

    function Z(e) {
        if (!e) return e;
        var t = Y;
        return x(e.split("."), function (e) {
            t = t[e]
        }), t
    }

    function F(e, t, n, i) {
        return t = Error(t + "\nhttp://requirejs.org/docs/errors.html#" + e), t.requireType = e, t.requireModules = i, n && (t.originalError = n), t
    }

    function ea(e) {
        function n(e, t, n) {
            var a, s, r, o, c, l, u, d = t && t.split("/");
            a = d;
            var f = T.map,
                h = f && f["*"];
            if (e && "." === e.charAt(0))
                if (t) {
                    for (a = i(T.pkgs, t) ? d = [t] : d.slice(0, d.length - 1), t = e = a.concat(e.split("/")), a = 0; t[a]; a += 1)
                        if ("." === (s = t[a])) t.splice(a, 1), a -= 1;
                        else if (".." === s) {
                        if (1 === a && (".." === t[2] || ".." === t[0])) break;
                        0 < a && (t.splice(a - 1, 2), a -= 2)
                    }
                    a = i(T.pkgs, t = e[0]), e = e.join("/"), a && e === t + "/" + a.main && (e = t)
                } else 0 === e.indexOf("./") && (e = e.substring(2));
            if (n && (d || h) && f) {
                for (t = e.split("/"), a = t.length; 0 < a; a -= 1) {
                    if (r = t.slice(0, a).join("/"), d)
                        for (s = d.length; 0 < s; s -= 1)
                            if ((n = i(f, d.slice(0, s).join("/"))) && (n = i(n, r))) {
                                o = n, c = a;
                                break
                            } if (o) break;
                    !l && h && i(h, r) && (l = i(h, r), u = a)
                }!o && l && (o = l, c = u), o && (t.splice(0, c, o), e = t.join("/"))
            }
            return e
        }

        function a(e) {
            z && x(document.getElementsByTagName("script"), function (t) {
                if (t.getAttribute("data-requiremodule") === e && t.getAttribute("data-requirecontext") === k.contextName) return t.parentNode.removeChild(t), !0
            })
        }

        function s(e) {
            var t = i(T.paths, e);
            if (t && J(t) && 1 < t.length) return a(e), t.shift(), k.require.undef(e), k.require([e]), !0
        }

        function o(e) {
            var t, n = e ? e.indexOf("!") : -1;
            return -1 < n && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
        }

        function c(e, t, a, s) {
            var r, c, l = null,
                u = t ? t.name : null,
                d = e,
                f = !0,
                h = "";
            return e || (f = !1, e = "_@r" + (M += 1)), e = o(e), l = e[0], e = e[1], l && (l = n(l, u, s), c = i(L, l)), e && (l ? h = c && c.normalize ? c.normalize(e, function (e) {
                return n(e, u, s)
            }) : n(e, u, s) : (h = n(e, u, s), e = o(h), l = e[0], h = e[1], a = !0, r = k.nameToUrl(h))), a = !l || c || a ? "" : "_unnormalized" + (U += 1), {
                prefix: l,
                name: h,
                parentMap: t,
                unnormalized: !!a,
                url: r,
                originalName: d,
                isDefine: f,
                id: (l ? l + "!" + h : h) + a
            }
        }

        function u(e) {
            var t = e.id,
                n = i(q, t);
            return n || (n = q[t] = new k.Module(e)), n
        }

        function d(e, t, n) {
            var a = e.id,
                s = i(q, a);
            !r(L, a) || s && !s.defineEmitComplete ? u(e).on(t, n) : "defined" === t && n(L[a])
        }

        function f(e, t) {
            var n = e.requireModules,
                a = !1;
            t ? t(e) : (x(n, function (t) {
                (t = i(q, t)) && (t.error = e, t.events.error && (a = !0, t.emit("error", e)))
            }), a || l.onError(e))
        }

        function h() {
            R.length && (fa.apply(S, [S.length - 1, 0].concat(R)), R = [])
        }

        function p(e, t, n) {
            var a = e.map.id;
            e.error ? e.emit("error", e.error) : (t[a] = !0, x(e.depMaps, function (a, s) {
                var r = a.id,
                    o = i(q, r);
                o && !e.depMatched[s] && !n[r] && (i(t, r) ? (e.defineDep(s, L[r]), e.check()) : p(o, t, n))
            }), n[a] = !0)
        }

        function m() {
            var e, t, n, i, r = (n = 1e3 * T.waitSeconds) && k.startTime + n < (new Date).getTime(),
                o = [],
                c = [],
                l = !1,
                u = !0;
            if (!y) {
                if (y = !0, E(q, function (n) {
                        if (e = n.map, t = e.id, n.enabled && (e.isDefine || c.push(n), !n.error))
                            if (!n.inited && r) s(t) ? l = i = !0 : (o.push(t), a(t));
                            else if (!n.inited && n.fetched && e.isDefine && (l = !0, !e.prefix)) return u = !1
                    }), r && o.length) return n = F("timeout", "Load timeout for modules: " + o, null, o), n.contextName = k.contextName, f(n);
                u && x(c, function (e) {
                    p(e, {}, {})
                }), r && !i || !l || !z && !$ || A || (A = setTimeout(function () {
                    A = 0, m()
                }, 50)), y = !1
            }
        }

        function g(e) {
            r(L, e[0]) || u(c(e[0], null, !0)).init(e[1], e[2])
        }

        function v(e) {
            var e = e.currentTarget || e.srcElement,
                t = k.onScriptLoad;
            return e.detachEvent && !V ? e.detachEvent("onreadystatechange", t) : e.removeEventListener("load", t, !1), t = k.onScriptError, (!e.detachEvent || V) && e.removeEventListener("error", t, !1), {
                node: e,
                id: e && e.getAttribute("data-requiremodule")
            }
        }

        function b() {
            var e;
            for (h(); S.length;) {
                if (e = S.shift(), null === e[0]) return f(F("mismatch", "Mismatched anonymous define() module: " + e[e.length - 1]));
                g(e)
            }
        }
        var y, w, k, C, A, T = {
                waitSeconds: 7,
                baseUrl: "./",
                paths: {},
                pkgs: {},
                shim: {},
                map: {},
                config: {}
            },
            q = {},
            j = {},
            S = [],
            L = {},
            _ = {},
            M = 1,
            U = 1;
        return C = {
            require: function (e) {
                return e.require ? e.require : e.require = k.makeRequire(e.map)
            },
            exports: function (e) {
                if (e.usingExports = !0, e.map.isDefine) return e.exports ? e.exports : e.exports = L[e.map.id] = {}
            },
            module: function (e) {
                return e.module ? e.module : e.module = {
                    id: e.map.id,
                    uri: e.map.url,
                    config: function () {
                        return T.config && i(T.config, e.map.id) || {}
                    },
                    exports: L[e.map.id]
                }
            }
        }, w = function (e) {
            this.events = i(j, e.id) || {}, this.map = e, this.shim = i(T.shim, e.id), this.depExports = [], this.depMaps = [], this.depMatched = [], this.pluginMaps = {}, this.depCount = 0
        }, w.prototype = {
            init: function (e, n, i, a) {
                a = a || {}, this.inited || (this.factory = n, i ? this.on("error", i) : this.events.error && (i = t(this, function (e) {
                    this.emit("error", e)
                })), this.depMaps = e && e.slice(0), this.errback = i, this.inited = !0, this.ignore = a.ignore, a.enabled || this.enabled ? this.enable() : this.check())
            },
            defineDep: function (e, t) {
                this.depMatched[e] || (this.depMatched[e] = !0, this.depCount -= 1, this.depExports[e] = t)
            },
            fetch: function () {
                if (!this.fetched) {
                    this.fetched = !0, k.startTime = (new Date).getTime();
                    var e = this.map;
                    if (!this.shim) return e.prefix ? this.callPlugin() : this.load();
                    k.makeRequire(this.map, {
                        enableBuildCallback: !0
                    })(this.shim.deps || [], t(this, function () {
                        return e.prefix ? this.callPlugin() : this.load()
                    }))
                }
            },
            load: function () {
                var e = this.map.url;
                _[e] || (_[e] = !0, k.load(this.map.id, e))
            },
            check: function () {
                if (this.enabled && !this.enabling) {
                    var e, t, n = this.map.id;
                    t = this.depExports;
                    var i = this.exports,
                        a = this.factory;
                    if (this.inited) {
                        if (this.error) this.emit("error", this.error);
                        else if (!this.defining) {
                            if (this.defining = !0, 1 > this.depCount && !this.defined) {
                                if (I(a)) {
                                    if (this.events.error) try {
                                        i = k.execCb(n, a, t, i)
                                    } catch (t) {
                                        e = t
                                    } else i = k.execCb(n, a, t, i);
                                    if (this.map.isDefine && ((t = this.module) && void 0 !== t.exports && t.exports !== this.exports ? i = t.exports : void 0 === i && this.usingExports && (i = this.exports)), e) return e.requireMap = this.map, e.requireModules = [this.map.id], e.requireType = "define", f(this.error = e)
                                } else i = a;
                                this.exports = i, this.map.isDefine && !this.ignore && (L[n] = i, l.onResourceLoad) && l.onResourceLoad(k, this.map, this.depMaps), delete q[n], this.defined = !0
                            }
                            this.defining = !1, this.defined && !this.defineEmitted && (this.defineEmitted = !0, this.emit("defined", this.exports), this.defineEmitComplete = !0)
                        }
                    } else this.fetch()
                }
            },
            callPlugin: function () {
                var e = this.map,
                    a = e.id,
                    s = c(e.prefix);
                this.depMaps.push(s), d(s, "defined", t(this, function (s) {
                    var o, h;
                    h = this.map.name;
                    var p = this.map.parentMap ? this.map.parentMap.name : null,
                        m = k.makeRequire(e.parentMap, {
                            enableBuildCallback: !0
                        });
                    this.map.unnormalized ? (s.normalize && (h = s.normalize(h, function (e) {
                        return n(e, p, !0)
                    }) || ""), s = c(e.prefix + "!" + h, this.map.parentMap), d(s, "defined", t(this, function (e) {
                        this.init([], function () {
                            return e
                        }, null, {
                            enabled: !0,
                            ignore: !0
                        })
                    })), (h = i(q, s.id)) && (this.depMaps.push(s), this.events.error && h.on("error", t(this, function (e) {
                        this.emit("error", e)
                    })), h.enable())) : (o = t(this, function (e) {
                        this.init([], function () {
                            return e
                        }, null, {
                            enabled: !0
                        })
                    }), o.error = t(this, function (e) {
                        this.inited = !0, this.error = e, e.requireModules = [a], E(q, function (e) {
                            0 === e.map.id.indexOf(a + "_unnormalized") && delete q[e.map.id]
                        }), f(e)
                    }), o.fromText = t(this, function (t, n) {
                        var i = e.name,
                            s = c(i),
                            d = O;
                        n && (t = n), d && (O = !1), u(s), r(T.config, a) && (T.config[i] = T.config[a]);
                        try {
                            l.exec(t)
                        } catch (e) {
                            return f(F("fromtexteval", "fromText eval for " + a + " failed: " + e, e, [a]))
                        }
                        d && (O = !0), this.depMaps.push(s), k.completeLoad(i), m([i], o)
                    }), s.load(e.name, m, o, T))
                })), k.enable(s, this), this.pluginMaps[s.id] = s
            },
            enable: function () {
                this.enabling = this.enabled = !0, x(this.depMaps, t(this, function (e, n) {
                    var a, s;
                    if ("string" == typeof e) {
                        if (e = c(e, this.map.isDefine ? this.map : this.map.parentMap, !1, !this.skipMap), this.depMaps[n] = e, a = i(C, e.id)) return void(this.depExports[n] = a(this));
                        this.depCount += 1, d(e, "defined", t(this, function (e) {
                            this.defineDep(n, e), this.check()
                        })), this.errback && d(e, "error", this.errback)
                    }
                    a = e.id, s = q[a], !r(C, a) && s && !s.enabled && k.enable(e, this)
                })), E(this.pluginMaps, t(this, function (e) {
                    var t = i(q, e.id);
                    t && !t.enabled && k.enable(e, this)
                })), this.enabling = !1, this.check()
            },
            on: function (e, t) {
                var n = this.events[e];
                n || (n = this.events[e] = []), n.push(t)
            },
            emit: function (e, t) {
                x(this.events[e], function (e) {
                    e(t)
                }), "error" === e && delete this.events[e]
            }
        }, k = {
            config: T,
            contextName: e,
            registry: q,
            defined: L,
            urlFetched: _,
            defQueue: S,
            Module: w,
            makeModuleMap: c,
            nextTick: l.nextTick,
            configure: function (e) {
                e.baseUrl && "/" !== e.baseUrl.charAt(e.baseUrl.length - 1) && (e.baseUrl += "/");
                var t = T.pkgs,
                    n = T.shim,
                    i = {
                        paths: !0,
                        config: !0,
                        map: !0
                    };
                E(e, function (e, t) {
                    i[t] ? "map" === t ? Q(T[t], e, !0, !0) : Q(T[t], e, !0) : T[t] = e
                }), e.shim && (E(e.shim, function (e, t) {
                    J(e) && (e = {
                        deps: e
                    }), !e.exports && !e.init || e.exportsFn || (e.exportsFn = k.makeShimExports(e)), n[t] = e
                }), T.shim = n), e.packages && (x(e.packages, function (e) {
                    e = "string" == typeof e ? {
                        name: e
                    } : e, t[e.name] = {
                        name: e.name,
                        location: e.location || e.name,
                        main: (e.main || "main").replace(ga, "").replace(aa, "")
                    }
                }), T.pkgs = t), E(q, function (e, t) {
                    !e.inited && !e.map.unnormalized && (e.map = c(t))
                }), (e.deps || e.callback) && k.require(e.deps || [], e.callback)
            },
            makeShimExports: function (e) {
                return function () {
                    var t;
                    return e.init && (t = e.init.apply(Y, arguments)), t || e.exports && Z(e.exports)
                }
            },
            makeRequire: function (t, a) {
                function s(n, i, o) {
                    var d, h;
                    return a.enableBuildCallback && i && I(i) && (i.__requireJsBuild = !0), "string" == typeof n ? I(i) ? f(F("requireargs", "Invalid require call"), o) : t && r(C, n) ? C[n](q[t.id]) : l.get ? l.get(k, n, t) : (d = c(n, t, !1, !0), d = d.id, r(L, d) ? L[d] : f(F("notloaded", 'Module name "' + d + '" has not been loaded yet for context: ' + e + (t ? "" : ". Use require([])")))) : (b(), k.nextTick(function () {
                        b(), h = u(c(null, t)), h.skipMap = a.skipMap, h.init(n, i, o, {
                            enabled: !0
                        }), m()
                    }), s)
                }
                return a = a || {}, Q(s, {
                    isBrowser: z,
                    toUrl: function (e) {
                        var i, a = e.lastIndexOf("."),
                            s = e.split("/")[0];
                        return -1 !== a && ("." !== s && ".." !== s || 1 < a) && (i = e.substring(a, e.length), e = e.substring(0, a)), e = k.nameToUrl(n(e, t && t.id, !0), i || ".fake"), i ? e : e.substring(0, e.length - 5)
                    },
                    defined: function (e) {
                        return r(L, c(e, t, !1, !0).id)
                    },
                    specified: function (e) {
                        return e = c(e, t, !1, !0).id, r(L, e) || r(q, e)
                    }
                }), t || (s.undef = function (e) {
                    h();
                    var n = c(e, t, !0),
                        a = i(q, e);
                    delete L[e], delete _[n.url], delete j[e], a && (a.events.defined && (j[e] = a.events), delete q[e])
                }), s
            },
            enable: function (e) {
                i(q, e.id) && u(e).enable()
            },
            completeLoad: function (e) {
                var t, n, a = i(T.shim, e) || {},
                    o = a.exports;
                for (h(); S.length;) {
                    if (n = S.shift(), null === n[0]) {
                        if (n[0] = e, t) break;
                        t = !0
                    } else n[0] === e && (t = !0);
                    g(n)
                }
                if (n = i(q, e), !t && !r(L, e) && n && !n.inited) {
                    if (T.enforceDefine && (!o || !Z(o))) return s(e) ? void 0 : f(F("nodefine", "No define call for " + e, null, [e]));
                    g([e, a.deps || [], a.exportsFn])
                }
                m()
            },
            nameToUrl: function (e, t) {
                var n, a, s, r, o, c;
                if (l.jsExtRegExp.test(e)) r = e + (t || "");
                else {
                    for (n = T.paths, a = T.pkgs, r = e.split("/"), o = r.length; 0 < o; o -= 1) {
                        if (c = r.slice(0, o).join("/"), s = i(a, c), c = i(n, c)) {
                            J(c) && (c = c[0]), r.splice(0, o, c);
                            break
                        }
                        if (s) {
                            n = e === s.name ? s.location + "/" + s.main : s.location, r.splice(0, o, n);
                            break
                        }
                    }
                    r = r.join("/"), r += t || (/\?/.test(r) ? "" : ".js"), r = ("/" === r.charAt(0) || r.match(/^[\w\+\.\-]+:/) ? "" : T.baseUrl) + r
                }
                return T.urlArgs ? r + (-1 === r.indexOf("?") ? "?" : "&") + T.urlArgs : r
            },
            load: function (e, t) {
                l.load(k, e, t)
            },
            execCb: function (e, t, n, i) {
                return t.apply(i, n)
            },
            onScriptLoad: function (e) {
                ("load" === e.type || ha.test((e.currentTarget || e.srcElement).readyState)) && (P = null, e = v(e), k.completeLoad(e.id))
            },
            onScriptError: function (e) {
                var t = v(e);
                if (!s(t.id)) return f(F("scripterror", "Script error", e, [t.id]))
            }
        }, k.require = k.makeRequire(), k
    }
    var l, w, B, D, s, H, P, K, ba, ca, ia = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,
        ja = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
        aa = /\.js$/,
        ga = /^\.\//;
    w = Object.prototype;
    var L = w.toString,
        da = w.hasOwnProperty,
        fa = Array.prototype.splice,
        z = !("undefined" == typeof window || !navigator || !document),
        $ = !z && "undefined" != typeof importScripts,
        ha = z && "PLAYSTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/,
        V = "undefined" != typeof opera && "[object Opera]" === opera.toString(),
        C = {},
        q = {},
        R = [],
        O = !1;
    if (void 0 === define) {
        if (void 0 !== requirejs) {
            if (I(requirejs)) return;
            q = requirejs, requirejs = void 0
        }
        void 0 !== require && !I(require) && (q = require, require = void 0), l = requirejs = function (e, t, n, a) {
            var s, r = "_";
            return !J(e) && "string" != typeof e && (s = e, J(t) ? (e = t, t = n, n = a) : e = []), s && s.context && (r = s.context), (a = i(C, r)) || (a = C[r] = l.s.newContext(r)), s && a.configure(s), a.require(e, t, n)
        }, l.config = function (e) {
            return l(e)
        }, l.nextTick = "undefined" != typeof setTimeout ? function (e) {
            setTimeout(e, 4)
        } : function (e) {
            e()
        }, require || (require = l), l.version = "2.1.4", l.jsExtRegExp = /^\/|:|\?|\.js$/, l.isBrowser = z, w = l.s = {
            contexts: C,
            newContext: ea
        }, l({}), x(["toUrl", "undef", "defined", "specified"], function (e) {
            l[e] = function () {
                var t = C._;
                return t.require[e].apply(t, arguments)
            }
        }), z && (B = w.head = document.getElementsByTagName("head")[0], D = document.getElementsByTagName("base")[0]) && (B = w.head = D.parentNode), l.onError = function (e) {
            throw e
        }, l.load = function (e, t, n) {
            var i, a = e && e.config || {};
            if (z) return i = a.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script"), i.type = a.scriptType || "text/javascript", i.charset = "utf-8", i.async = !0, i.setAttribute("data-requirecontext", e.contextName), i.setAttribute("data-requiremodule", t), !i.attachEvent || i.attachEvent.toString && 0 > i.attachEvent.toString().indexOf("[native code") || V ? (i.addEventListener("load", e.onScriptLoad, !1), i.addEventListener("error", e.onScriptError, !1)) : (O = !0, i.attachEvent("onreadystatechange", e.onScriptLoad)), i.src = n, K = i, D ? B.insertBefore(i, D) : B.appendChild(i), K = null, i;
            $ && (importScripts(n), e.completeLoad(t))
        }, z && M(document.getElementsByTagName("script"), function (e) {
            if (B || (B = e.parentNode), s = e.getAttribute("data-main")) return q.baseUrl || (H = s.split("/"), ba = H.pop(), ca = H.length ? H.join("/") + "/" : "./", q.baseUrl = ca, s = ba), s = s.replace(aa, ""), q.deps = q.deps ? q.deps.concat(s) : [s], !0
        }), define = function (e, t, n) {
            var i, a;
            "string" != typeof e && (n = t, t = e, e = null), J(t) || (n = t, t = []), !t.length && I(n) && n.length && (n.toString().replace(ia, "").replace(ja, function (e, n) {
                t.push(n)
            }), t = (1 === n.length ? ["require"] : ["require", "exports", "module"]).concat(t)), O && ((i = K) || (P && "interactive" === P.readyState || M(document.getElementsByTagName("script"), function (e) {
                if ("interactive" === e.readyState) return P = e
            }), i = P), i && (e || (e = i.getAttribute("data-requiremodule")), a = C[i.getAttribute("data-requirecontext")])), (a ? a.defQueue : R).push([e, t, n])
        }, define.amd = {
            jQuery: !0
        }, l.exec = function (b) {
            return eval(b)
        }, l(q)
    }
}(this), define("requireLib", function () {}),
    function (e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("calcite-web", t) : e.calcite = t()
    }(this, function () {
        "use strict";

        function e(e, t) {
            var n;
            for (n = t; n; n = n.parentNode) {
                var i = n && n.getAttribute && n.getAttribute("class") || "",
                    a = new RegExp("(\\s|^)" + e + "(\\s|$)").test(i);
                if (1 === n.nodeType && a) break
            }
            return n
        }

        function t(e) {
            return Array.isArray(e) ? e : Array.prototype.slice.call(e)
        }

        function n(e, n) {
            return t((n || document).querySelectorAll(e))
        }

        function i(e, t) {
            return t.filter(function (t) {
                var n = e.toLowerCase();
                return -1 !== t.innerHTML.toLowerCase().indexOf(n)
            })
        }

        function a(e, t) {
            return new RegExp("(\\s|^)" + t + "(\\s|$)").test(e.getAttribute("class"))
        }

        function s(e, t) {
            t.split(" ").forEach(function (t) {
                if (!a(e, t)) {
                    var n = e.getAttribute("class") || "";
                    e.setAttribute("class", n + " " + t)
                }
            })
        }

        function r(e, t) {
            t.split(" ").forEach(function (t) {
                var n = (e.getAttribute("class") || "").replace(new RegExp("(\\s|^)" + t + "(\\s|$)", "g"), "$2");
                a(e, t) && e.setAttribute("class", n)
            })
        }

        function o(e, t) {
            a(e, t) ? r(e, t) : s(e, t)
        }

        function c(e) {
            e = t(e), e.forEach(function (e) {
                r(e, "is-active")
            })
        }

        function l(e) {
            e = t(e), e.forEach(function (e) {
                s(e, "is-active")
            })
        }

        function u(e, t) {
            c(e), s(t, "is-active")
        }

        function d(e) {
            e.forEach(function (e) {
                if (e) {
                    "true" !== e.getAttribute("aria-hidden") ? e.setAttribute("aria-hidden", !0) : e.removeAttribute("aria-hidden")
                }
            })
        }

        function f(e) {
            e.forEach(function (e) {
                e && e.setAttribute("aria-hidden", !0)
            })
        }

        function h(e) {
            e.forEach(function (e) {
                e && e.removeAttribute("aria-hidden")
            })
        }

        function p(e) {
            if (e) {
                e.getAttribute("aria-expanded") ? e.removeAttribute("aria-expanded") : e.setAttribute("aria-expanded", "true")
            }
        }

        function m() {
            return "click"
        }

        function g(e, t, n) {
            return e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent ? e.attachEvent("on" + t, n) : void 0
        }

        function v(e, t, n) {
            return e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent ? e.detachEvent("on" + t, n) : void 0
        }

        function b(e) {
            return e.target || e.srcElement
        }

        function y(e) {
            if (e.preventDefault) return e.preventDefault();
            e.returnValue && (e.returnValue = !1)
        }

        function w(e) {
            if (e = e || window.event, e.stopPropagation) return e.stopPropagation();
            e.cancelBubble && (e.cancelBubble = !0)
        }

        function x(e, t, n) {
            var i, a, s, r;
            return r = function () {
                i = !1, a && (s.apply(n, a), a = !1)
            }, s = function () {
                i ? a = arguments : (e.apply(n, arguments), setTimeout(r, t), i = !0)
            }
        }

        function k() {}

        function C() {
            function e(e) {
                e ? g(e.node, "click", t) : i.forEach(function (e) {
                    g(e, "click", t)
                })
            }

            function t(e) {
                e.preventDefault();
                var t = e.target.getAttribute("data-clipboard-target");
                document.querySelector(t).select(), document.execCommand("copy")
            }
            var i = n(".js-copy-to-clipboard");
            ae.on("clipboard:bind", e), ae.emit("clipboard:bind")
        }

        function A(e) {
            for (var t = "", n = 0; n < e; n++) t += (65536 * (1 + Math.random()) | 0).toString(16).substring(1);
            return t
        }

        function I(e) {
            if (!e) throw new TypeError("Invalid argument `value` has no value.");
            this.value = I.EMPTY, e && e instanceof I ? this.value = e.toString() : e && "[object String]" === Object.prototype.toString.call(e) && I.isGuid(e) && (this.value = e), this.equals = function (e) {
                return I.isGuid(e) && this.value === e
            }, this.isEmpty = function () {
                return this.value === I.EMPTY
            }, this.toString = function () {
                return this.value
            }, this.toJSON = function () {
                return this.value
            }
        }

        function T(t) {
            w(t);
            var n = e("accordion-section", b(t));
            ae.emit("accordion:toggle", {
                node: n
            })
        }

        function E(e) {
            o(e.node, "is-active"), p(e.node.querySelector(".accordion-title"))
        }

        function q(e) {
            13 === e.keyCode && a(b(e), "accordion-title") && T(e)
        }

        function P(e) {
            var t = n(".js-accordion");
            e ? j(e.node) : t.forEach(function (e) {
                j(e)
            })
        }

        function j(e) {
            e.setAttribute("aria-live", "polite"), e.setAttribute("role", "tablist"), t(e.children).forEach(function (e) {
                var t = e.querySelector(".accordion-title"),
                    n = e.querySelector(".accordion-content"),
                    i = n.id || I.raw();
                n.id = i, t.setAttribute("role", "tab"), t.setAttribute("tabindex", "0"), t.setAttribute("aria-controls", i), a(e, "is-active") && t.setAttribute("aria-expanded", "true");
                var s = !1;
                ie.accordions.forEach(function (e) {
                    e.target === t && e.event === m() && e.fn === T && (s = !0)
                }), s || (ie.accordions.push({
                    target: t,
                    event: m(),
                    fn: T
                }), ie.accordions.push({
                    target: e,
                    event: "keyup",
                    fn: q
                }), g(t, m(), T), g(e, "keyup", q))
            })
        }

        function O() {
            ae.on("accordion:bind", P), ae.on("accordion:toggle", E), re = !0
        }

        function S() {
            re || O(), ae.emit("accordion:bind")
        }

        function L(e) {
            v(document.body, m(), L), n(".js-dropdown").forEach(function (e) {
                r(e, "is-active")
            }), n(".js-dropdown-toggle").forEach(function (e) {
                e.setAttribute("aria-expanded", "false")
            }), v(document, "keydown", U), v(document.body, "focusin", _)
        }

        function _(t) {
            t.target && !e("js-dropdown", t.target) && ae.emit("dropdown:close")
        }

        function M(e) {
            if (e) {
                var t = a(e.node, "is-active");
                ae.emit("dropdown:close"), t || (s(e.node, "is-active"), e.target && e.target.setAttribute("aria-expanded", "true"), g(document, "keydown", U)), a(e.node, "is-active") && (g(document.body, m(), L), g(document.body, "focusin", _))
            }
        }

        function U(e) {
            40 === e.keyCode | 38 === e.keyCode && e.preventDefault()
        }

        function z(e) {
            n(".js-dropdown-toggle").forEach(function (e) {
                var t = !1;
                ie.dropdowns.forEach(function (n) {
                    n.target === e && n.event === m() && n.fn === F && (t = !0)
                }), t || (ie.dropdowns.push({
                    target: e,
                    event: m(),
                    fn: F
                }), g(e, m(), F))
            })
        }

        function H() {
            var e = document.querySelector(".js-dropdown.is-active");
            return e || !1
        }

        function N(e) {
            var t = document.activeElement,
                n = e.links.indexOf(t); - 1 === n ? n = e.forward ? 0 : e.links.length - 1 : e.forward ? (n += 1) === e.links.length && (n = 0) : -1 === (n -= 1) && (n = e.links.length - 1), e.links[n].focus()
        }

        function R() {
            var e = H();
            if (e) {
                var t = n(".dropdown-link", e).filter(function (e) {
                    return null !== e.offsetParent
                });
                ae.emit("dropdown:focus", {
                    links: t,
                    forward: !0
                })
            }
        }

        function B() {
            var e = H();
            if (e) {
                var t = n(".dropdown-link", e).filter(function (e) {
                    return null !== e.offsetParent
                });
                ae.emit("dropdown:focus", {
                    links: t,
                    forward: !1
                })
            }
        }

        function F(t) {
            y(t), w(t);
            var n = e("js-dropdown", t.target);
            ae.emit("dropdown:toggle", {
                node: n,
                target: t.target
            })
        }

        function D() {
            ae.on("dropdown:toggle", M), ae.on("dropdown:close", L), ae.on("keyboard:escape", L), ae.on("keyboard:arrow:down", R), ae.on("keyboard:arrow:up", B), ae.on("dropdown:focus", N), oe = !0
        }

        function V() {
            oe || D(), z()
        }

        function Q() {
            function t(e) {
                ae.emit("drawer:close", {
                    fromOpen: !0
                });
                var t = document.querySelector('.js-drawer[data-drawer="' + e.id + '"]');
                t.setAttribute("tabindex", 0), s(t, "is-active"), s(d, "overflow-hidden"), d.offsetHeight > d.clientHeight && s(p, "overflow-scroll"), f([b, w]), g(t, m(), l), g(document, "focusin", o)
            }

            function i(e) {
                if (!e || e.all) k.forEach(function (e) {
                    e.removeAttribute("tabindex"), r(e, "is-active")
                });
                else {
                    var t = document.querySelector('.js-drawer[data-drawer="' + e.id + '"]');
                    t && (t.removeAttribute("tabindex"), r(t, "is-active"))
                }
                h([b, w]), v(document, "focusin", o), r(document.documentElement, "drawer-no-overflow"), e && !e.fromOpen && setTimeout(function () {
                    r(d, "overflow-hidden"), r(p, "overflow-scroll")
                }, 300)
            }

            function o(t) {
                e("js-drawer", t.target) || k.forEach(function (e) {
                    a(e, "is-active") && e.focus()
                })
            }

            function c(e) {
                e ? g(e.node, m(), u) : x.forEach(function (e) {
                    g(e, m(), u)
                })
            }

            function l(e) {
                a(e.target, "js-drawer") && ae.emit("drawer:close", {
                    fromOpen: !1,
                    all: !0
                })
            }

            function u(e) {
                y(e);
                var t = e.target.getAttribute("data-drawer");
                ae.emit("drawer:open", {
                    id: t
                })
            }
            var d = document.documentElement,
                p = document.body,
                b = document.querySelector(".wrapper"),
                w = document.querySelector(".footer"),
                x = n(".js-drawer-toggle"),
                k = n(".js-drawer");
            ae.on("drawer:open", t), ae.on("keyboard:escape", i), ae.on("drawer:close", i), ae.on("drawer:bind", c), ae.emit("drawer:bind")
        }

        function Z() {
            function l() {
                n(".js-filter-dropdown").forEach(function (e) {
                    var n = e.getAttribute("data-filter-dropdown"),
                        a = e.querySelector(".filter-dropdown-input");
                    g(a, "focus", d);
                    for (var o = e.querySelectorAll(".js-filter-dropdown-open"), c = 0; c < o.length; c++) {
                        var l = o[c];
                        l.setAttribute("data-id", n), g(l, m(), h)
                    }
                    for (var u = e.querySelectorAll(".js-filter-dropdown-close"), p = 0; p < u.length; p++) {
                        var v = u[p];
                        v.setAttribute("data-id", n), g(v, m(), h)
                    }
                    for (var b = e.querySelectorAll(".filter-dropdown-link"), y = 0; y < b.length; y++) {
                        var w = b[y];
                        w.setAttribute("data-item-id", y), g(w, m(), f)
                    }
                    g(a, "keyup", function (e) {
                        var n = t(b);
                        n.forEach(function (e) {
                            s(e, "hide")
                        }), i(a.value, n).forEach(function (e) {
                            r(e, "hide")
                        })
                    })
                })
            }

            function u(t) {
                var n = e("js-filter-dropdown", t.target);
                return {
                    parent: n,
                    id: n.getAttribute("data-filter-dropdown"),
                    item: t.target
                }
            }

            function d(e) {
                w(e);
                var t = u(e);
                ae.emit("filterDropdown:input:focus", t)
            }

            function f(e) {
                y(e), w(e);
                var t = u(e);
                ae.emit("filterDropdown:select", t)
            }

            function h(e) {
                e.preventDefault();
                var t = u(e);
                o(e.target, "is-active"), ae.emit("filterDropdown:toggle", t)
            }

            function p(e) {
                a(e.parent.querySelector(".filter-dropdown-list"), "is-active") ? ae.emit("filterDropdown:close", e) : ae.emit("filterDropdown:open", e)
            }

            function v(e) {
                o(e.item, "is-active")
            }

            function b(e) {
                r(e.parent.querySelectorAll(".filter-dropdown-link.is-active")[e.i], "is-active");
                var t = e.parent.querySelectorAll(".filter-dropdown-link.is-active"),
                    n = {
                        parent: e.parent,
                        id: e.id,
                        active: t
                    };
                ae.emit("filterDropdown:active", n)
            }

            function x(e) {
                k(), s(e.parent.querySelector(".filter-dropdown-list"), "is-active");
                var t = n(".js-filter-dropdown-close", e.parent);
                n(".js-filter-dropdown-open", e.parent).forEach(function (e) {
                    return r(e, "is-active")
                }), t.forEach(function (e) {
                    return s(e, "is-active")
                })
            }

            function k(e) {
                c(document.querySelectorAll(".filter-dropdown-list"));
                var t = n(".js-filter-dropdown-open"),
                    i = n(".js-filter-dropdown-close");
                t.forEach(function (e) {
                    return s(e, "is-active")
                }), i.forEach(function (e) {
                    return r(e, "is-active")
                })
            }

            function C(e) {
                var t = e.parent.querySelectorAll(".filter-dropdown-link.is-active"),
                    n = {
                        parent: e.parent,
                        id: e.id,
                        active: t
                    };
                ae.emit("filterDropdown:active", n)
            }

            function A(e) {
                ae.emit("filterDropdown:active:clear", e);
                var t = e.parent.querySelector(".js-filter-dropdown-no-filters");
                e.active.length > 0 ? s(t, "hide") : r(t, "hide");
                for (var n = 0; n < e.active.length; n++) {
                    var i = e.active[n],
                        a = '<span class="filter-dropdown-active">\n        ' + i.innerHTML + '\n        <a class="filter-dropdown-remove" href="#" data-item-id=\'' + n + '\'>\n          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 32 32" class="svg-icon"><path d="M18.404 16l9.9 9.9-2.404 2.404-9.9-9.9-9.9 9.9L3.696 25.9l9.9-9.9-9.9-9.898L6.1 3.698l9.9 9.899 9.9-9.9 2.404 2.406-9.9 9.898z"/></svg>\n        </a>\n      </span>';
                    e.parent.insertAdjacentHTML("beforeend", a);
                    g(e.parent.querySelector('.filter-dropdown-remove[data-item-id="' + n + '"]'), m(), I)
                }
            }

            function I(e) {
                e.preventDefault();
                var t = u(e);
                t.i = e.target.getAttribute("data-item-id"), ae.emit("filterDropdown:select:remove", t)
            }

            function T(e) {
                for (var t = e.parent.querySelectorAll(".filter-dropdown-active"), n = 0; n < t.length; n++) e.parent.removeChild(t[n])
            }
            ae.on("filterDropdown:bind", l), ae.on("filterDropdown:select", v), ae.on("filterDropdown:select", C), ae.on("filterDropdown:select:remove", b), ae.on("filterDropdown:active", A), ae.on("filterDropdown:active:clear", T), ae.on("filterDropdown:toggle", p), ae.on("filterDropdown:open", x), ae.on("filterDropdown:close", k), ae.on("keyboard:escape", k), ae.emit("filterDropdown:bind")
        }

        function G() {
            function e() {
                var e = [];
                return b && e.push(b), y && e.push(y), e
            }

            function t(t) {
                if (ae.emit("modal:close", {
                        fromOpen: !0
                    }), t && t.id) {
                    var i = document.querySelector('.js-modal[data-modal="' + t.id + '"]');
                    i.removeAttribute("tabindex"), g(document, "keydown", o), s(i, "is-active"), s(d, "overflow-hidden"), d.offsetHeight > d.clientHeight && s(p, "overflow-scroll"), f(e());
                    var a = n("button, [href], input, select, textarea, [tabindex]", i).filter(function (e) {
                        return !e.disabled && -1 !== e.tabIndex && e.offsetHeight > 0
                    });
                    l = a.shift(), u = a.pop(), l && l.focus()
                }
            }

            function i(t) {
                if (t && t.id) {
                    var n = document.querySelector('.js-modal[data-modal="' + t.id + '"]');
                    r(n, "is-active"), n.setAttribute("tabindex", 0), v(document, "keydown", o), h(e())
                } else c(x);
                t && t.fromOpen || setTimeout(function () {
                    r(d, "overflow-hidden"), r(p, "overflow-scroll")
                }, 300)
            }

            function a(e) {
                e ? g(e, m(), K) : w.forEach(function (e) {
                    var t = !1;
                    ie.modals.forEach(function (n) {
                        n.target === e && n.event === m() && n.fn === K && (t = !0)
                    }), t || (ie.modals.push({
                        target: e,
                        event: m(),
                        fn: K
                    }), g(e, m(), K))
                })
            }

            function o(e) {
                ("Tab" === e.key || 9 === e.keyCode) && (e.shiftKey ? document.activeElement === l && (u && u.focus(), e.preventDefault()) : document.activeElement === u && (l && l.focus(), e.preventDefault()))
            }
            var l, u, d = document.documentElement,
                p = document.body,
                b = document.querySelector(".wrapper"),
                y = document.querySelector(".footer"),
                w = n(".js-modal-toggle"),
                x = n(".js-modal");
            ae.on("modal:open", t), ae.on("keyboard:escape", i), ae.on("modal:close", i), ae.on("modal:bind", a), ae.emit("modal:bind")
        }

        function K(t) {
            y(t);
            var n = e("js-modal-toggle", t.target),
                i = n.getAttribute("data-modal"),
                s = document.querySelector('.js-modal[data-modal="' + i + '"]');
            s && !a(s, "is-active") ? ae.emit("modal:open", {
                id: i
            }) : ae.emit("modal:close")
        }

        function W() {
            function e(e) {
                e ? g(e, m(), l) : u.forEach(function (e) {
                    g(e, m(), l)
                })
            }

            function i(e) {
                var t = e.querySelector(".js-search-icon"),
                    n = e.querySelector(".js-close-icon");
                o(t, "hide"), o(n, "hide"), o(d, "is-active"), o(document.body, "overflow-hidden"), ae.emit("search:focus")
            }

            function s() {
                document.querySelector(".js-search-input").focus()
            }

            function c() {
                if (d && a(d, "is-active")) {
                    r(d, "is-active"), r(document.body, "overflow-hidden");
                    t(u).forEach(i);
                    var e = document.querySelector(".js-search-input");
                    e && e.blur()
                }
            }

            function l(e) {
                y(e), ae.emit("search:toggle", e.target)
            }
            var u = n(".js-search-toggle"),
                d = n(".js-search")[0];
            ae.on("search:bind", e), ae.on("search:toggle", i), ae.on("keyboard:escape", c), ae.on("search:focus", s), ae.emit("search:bind")
        }

        function Y() {
            function e() {
                i.forEach(function (e) {
                    g(e, "change", t)
                })
            }

            function t(e) {
                window.location.assign(e.currentTarget.value)
            }
            ae.on("selectnav:bind", e);
            var i = n(".js-select-nav");
            ae.emit("selectnav:bind")
        }

        function X() {
            function e(e) {
                var t = I.raw();
                e.setAttribute("data-sticky-id", t);
                var n = e.parentNode,
                    i = e.cloneNode("deep");
                s(i, "js-shim"), r(i, "js-sticky"), i.setAttribute("data-sticky-id", t), i.style.visibility = "hidden", i.style.display = "none", n.insertBefore(i, e)
            }

            function t(e) {
                var t = e.element.getAttribute("data-sticky-id"),
                    n = document.querySelector('.js-shim[data-sticky-id="' + t + '"]');
                t && n && (s(e.element, "is-sticky"), n.style.display = "")
            }

            function i(e) {
                var t = e.element.getAttribute("data-sticky-id"),
                    n = document.querySelector('.js-shim[data-sticky-id="' + t + '"]');
                t && n && (r(e.element, "is-sticky"), n.style.display = "none")
            }

            function o(e) {
                l.forEach(function (t) {
                    var n = t.element;
                    if (a(t.element, "is-sticky")) {
                        var i = t.element.getAttribute("data-sticky-id");
                        n = document.querySelector('.js-shim[data-sticky-id="' + i + '"]')
                    }
                    if (n) {
                        var s = n.getAttribute("data-top") || 0;
                        t.top = n.offsetTop - parseInt(s, 0)
                    }
                    t.top < e ? ae.emit("sticky:stick", t) : ae.emit("sticky:unstick", t)
                })
            }
            ae.on("scrolling:at", o), ae.on("sticky:stick", t), ae.on("sticky:unstick", i);
            var c = n(".js-sticky"),
                l = c.map(function (t) {
                    var n = t.offsetTop,
                        i = t.getAttribute("data-top") || 0;
                    return t.style.top = i + "px", t.getAttribute("data-sticky-id") || e(t), {
                        top: n - parseInt(i, 0),
                        element: t
                    }
                })
        }

        function $() {
            function i() {
                var e = n(".js-tab"),
                    t = n(".js-tab-group"),
                    i = n(".js-tab-section");
                t.forEach(function (e) {
                    e.setAttribute("aria-live", "polite"), s(e), e.children[0].setAttribute("role", "tablist");
                    for (var t = e.querySelectorAll(".js-tab"), n = 100 / t.length, i = 0; i < t.length; i++) t[i].style.maxWidth = n + "%"
                }), e.forEach(function (e) {
                    e.setAttribute("aria-expanded", "false"), e.setAttribute("role", "tab"), e.setAttribute("tabindex", "0"), g(e, m(), c), g(e, "keydown", l)
                }), i.forEach(function (e) {
                    e.setAttribute("role", "tabpanel"), a(e, "is-active") ? e.setAttribute("aria-expanded", !0) : e.setAttribute("aria-expanded", !1)
                })
            }

            function s(e) {
                var t = e.getAttribute("data-tab");
                if (t) return t;
                var n = I.raw();
                return e.setAttribute("data-tab", n), n
            }

            function r(e) {
                var n = e.parent,
                    i = t(n.querySelectorAll(".js-tab")),
                    a = e.active,
                    s = t(n.querySelectorAll(".js-tab-section")),
                    r = i.indexOf(a),
                    o = s[r];
                i.forEach(function (e) {
                    e.setAttribute("aria-expanded", !1)
                }), a.setAttribute("aria-expanded", !0), u(i, a), s.forEach(function (e) {
                    e.setAttribute("aria-expanded", !1)
                }), o.setAttribute("aria-expanded", !0), u(s, o), a.focus()
            }

            function o(t) {
                var n = t.target;
                a(n, "js-tab") || (n = t.currentTarget);
                var i = e("js-tab-group", n);
                return {
                    parent: i,
                    id: s(i),
                    active: n
                }
            }

            function c(e) {
                e.preventDefault();
                var t = o(e);
                ae.emit("tabs:active", t)
            }

            function l(e) {
                var n = o(e);
                if (13 !== e.keyCode && 32 !== e.keyCode || (e.preventDefault(), ae.emit("tabs:active", n)), 39 === e.keyCode || 37 === e.keyCode) {
                    var i = t(n.parent.querySelectorAll(".js-tab")),
                        s = i.indexOf(document.activeElement);
                    if (s > -1 && a(document.activeElement, "js-tab")) {
                        var r = i[s + 1] || i[0],
                            c = i[s - 1] || i[i.length - 1];
                        (39 === e.keyCode ? r : c).focus()
                    }
                }
            }
            ae.on("tabs:bind", i), ae.on("tabs:active", r), ae.emit("tabs:bind")
        }

        function J(e) {
            27 === e.keyCode ? ae.emit("keyboard:escape") : 13 === e.keyCode ? ae.emit("keyboard:return") : 32 === e.keyCode ? ae.emit("keyboard:space") : 38 === e.keyCode ? ae.emit("keyboard:arrow:up") : 40 === e.keyCode ? ae.emit("keyboard:arrow:down") : 37 === e.keyCode ? ae.emit("keyboard:arrow:left") : 39 === e.keyCode && ae.emit("keyboard:arrow:right")
        }

        function ee() {
            ae.emit("scrolling:at", window.pageYOffset)
        }

        function te() {
            ce.forEach(function (e) {
                e()
            })
        }

        function ne(e) {
            "function" != typeof Object.assign && (Object.assign = function (e) {
                var t = arguments;
                if (null == e) throw new TypeError("Cannot convert undefined or null to object");
                e = Object(e);
                for (var n = 1; n < arguments.length; n++) {
                    var i = t[n];
                    if (null != i)
                        for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a])
                }
                return e
            });
            for (var t in e) ce.push(e[t]);
            Object.assign(this, e)
        }
        var ie = {
            dropdowns: [],
            accordions: [],
            modals: []
        };
        k.prototype = {
            on: function (e, t, n) {
                var i = this.e || (this.e = {});
                return (i[e] || (i[e] = [])).push({
                    fn: t,
                    ctx: n
                }), this
            },
            once: function (e, t, n) {
                function i() {
                    a.off(e, i), t.apply(n, arguments)
                }
                var a = this;
                return i._ = t, this.on(e, i, n)
            },
            emit: function (e) {
                var t = [].slice.call(arguments, 1),
                    n = ((this.e || (this.e = {}))[e] || []).slice(),
                    i = 0,
                    a = n.length;
                for (i; i < a; i++) n[i].fn.apply(n[i].ctx, t);
                return this
            },
            off: function (e, t) {
                var n = this.e || (this.e = {}),
                    i = n[e],
                    a = [];
                if (i && t)
                    for (var s = 0, r = i.length; s < r; s++) i[s].fn !== t && i[s].fn._ !== t && a.push(i[s]);
                return a.length ? n[e] = a : delete n[e], this
            }
        };
        var ae = new k,
            se = new RegExp("^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$", "i");
        I.EMPTY = "00000000-0000-0000-0000-000000000000", I.isGuid = function (e) {
            return e && (e instanceof I || se.test(e.toString()))
        }, I.create = function () {
            return new I([A(2), A(1), A(1), A(1), A(3)].join("-"))
        }, I.raw = function () {
            return [A(2), A(1), A(1), A(1), A(3)].join("-")
        };
        var re = !1,
            oe = !1;
        g(document, "keyup", J), g(window, "scroll", x(ee, 100));
        var ce = [S, C, V, Q, Z, G, W, Y, X, $];
        return {
            version: "1.2.4",
            click: m,
            addEvent: g,
            removeEvent: v,
            eventTarget: b,
            preventDefault: y,
            stopPropagation: w,
            throttle: x,
            hasClass: a,
            addClass: s,
            removeClass: r,
            toggleClass: o,
            removeActive: c,
            addActive: l,
            toggleActive: u,
            toggleAriaHidden: d,
            toggleAriaExpanded: p,
            closest: e,
            nodeListToArray: t,
            findElements: n,
            bus: ae,
            accordion: S,
            dropdown: V,
            drawer: Q,
            filterDropdown: Z,
            modal: G,
            search: W,
            selectNav: Y,
            sticky: X,
            tabs: $,
            extend: ne,
            init: te
        }
    }),
    function (e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("helpers", t) : e.helpers = t()
    }(this, function () {
        "use strict";
        return {
            byId: function (e) {
                return document.getElementById(e)
            },
            query: function (e, t) {
                return t = t || document, t.querySelectorAll(e)
            },
            queryOne: function (e, t) {
                return t = t || document, t.querySelector(e)
            },
            findParentNode: function (e, t) {
                for (var n = t.parentNode; n && n.tagName.toLowerCase() !== e.toLowerCase();) n = n.parentNode;
                return n
            },
            createRootElement: function (e) {
                var t = e.parent || document.body,
                    n = document.createElement(e.type || "div");
                return e.className && (n.className = e.className), e.id && (n.id = e.id), t.appendChild(n), n
            },
            checkRTL: function (e) {
                var t = document.getElementsByTagName("body")[0],
                    n = e || (navigator.language ? navigator.language : navigator.userLanguage).toLowerCase(),
                    i = ["ar", "he"],
                    a = !1;
                n = n.split("-")[0], (a = i.indexOf(n) > -1) && (document.documentElement.dir = "rtl", t.dir = "rtl", t.className = "rtl")
            },
            trimString: function (e) {
                var t = "";
                return void 0 !== e && (t = e.replace(/(^\s+|\s+$)/g, "")), t
            },
            setFocus: function (e) {
                "string" == typeof e && (e = this.byId(e) || this.queryOne(e));
                try {
                    e.focus()
                } catch (e) {}
            },
            getCookieItem: function (e) {
                return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null
            },
            sub: function (e, t) {
                return e.replace(/{([^{}]*)}/g, function (e, n) {
                    var i = t[n];
                    return "string" == typeof i || "number" == typeof i ? i : e
                })
            },
            extend: function (e, t) {
                return "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
                    value: function (e, t) {
                        if (null == e) throw new TypeError("Cannot convert undefined or null to object");
                        for (var n = Object(e), i = 1; i < arguments.length; i++) {
                            var a = arguments[i];
                            if (null != a)
                                for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (n[s] = a[s])
                        }
                        return n
                    },
                    writable: !0,
                    configurable: !0
                }), Object.assign.apply(null, arguments)
            },
            getPortalHostname: function (e, t) {
                t = t || window.location.href;
                var n = e && e.contextPath || "/sharing";
                return t.substr(0, t.indexOf(n))
            },
            getPortal: function () {
                return window.location.href.substr(0, window.location.href.indexOf("/sharing/"))
            },
            getQueryObj: function () {
                return window.location.search ? window.location.search.substr(1).split("&").reduce(function (e, t) {
                    var n = t.split("=");
                    return e[n[0]] = n[1], e
                }, {}) : {}
            },
            setTitle: function (e) {
                var t = this.queryOne("title");
                t && e && (t.innerHTML = e)
            },
            setContrastInfo: function () {
                var e = window.getComputedStyle(document.body).backgroundColor,
                    t = "rgb(255, 255, 255)" == e,
                    n = "rgb(0, 0, 0)" == e;
                if (t || n) {
                    var i = "a11y";
                    i += n ? " a11y-black " : " a11y-white ", document.body.className = i + document.body.className
                }
            }
        }
    }),
    function (e, t) {
        "object" == typeof exports && exports && "string" != typeof exports.nodeName ? t(exports) : "function" == typeof define && define.amd ? define("mustache", ["exports"], t) : (e.Mustache = {}, t(e.Mustache))
    }(this, function (e) {
        function t(e) {
            return "function" == typeof e
        }

        function n(e) {
            return m(e) ? "array" : typeof e
        }

        function i(e) {
            return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        }

        function a(e, t) {
            return null != e && "object" == typeof e && t in e
        }

        function s(e, t) {
            return g.call(e, t)
        }

        function r(e) {
            return !s(v, e)
        }

        function o(e) {
            return String(e).replace(/[&<>"'`=\/]/g, function (e) {
                return b[e]
            })
        }

        function c(t, n) {
            function a(e) {
                if ("string" == typeof e && (e = e.split(w, 2)), !m(e) || 2 !== e.length) throw new Error("Invalid tags: " + e);
                s = new RegExp(i(e[0]) + "\\s*"), o = new RegExp("\\s*" + i(e[1])), c = new RegExp("\\s*" + i("}" + e[1]))
            }
            if (!t) return [];
            var s, o, c, f = [],
                h = [],
                p = [],
                g = !1,
                v = !1;
            a(n || e.tags);
            for (var b, A, I, T, E, q, P = new d(t); !P.eos();) {
                if (b = P.pos, I = P.scanUntil(s))
                    for (var j = 0, O = I.length; j < O; ++j) T = I.charAt(j), r(T) ? p.push(h.length) : v = !0, h.push(["text", T, b, b + 1]), b += 1, "\n" === T && function () {
                        if (g && !v)
                            for (; p.length;) delete h[p.pop()];
                        else p = [];
                        g = !1, v = !1
                    }();
                if (!P.scan(s)) break;
                if (g = !0, A = P.scan(C) || "name", P.scan(y), "=" === A ? (I = P.scanUntil(x), P.scan(x), P.scanUntil(o)) : "{" === A ? (I = P.scanUntil(c), P.scan(k), P.scanUntil(o), A = "&") : I = P.scanUntil(o), !P.scan(o)) throw new Error("Unclosed tag at " + P.pos);
                if (E = [A, I, b, P.pos], h.push(E), "#" === A || "^" === A) f.push(E);
                else if ("/" === A) {
                    if (!(q = f.pop())) throw new Error('Unopened section "' + I + '" at ' + b);
                    if (q[1] !== I) throw new Error('Unclosed section "' + q[1] + '" at ' + b)
                } else "name" === A || "{" === A || "&" === A ? v = !0 : "=" === A && a(I)
            }
            if (q = f.pop()) throw new Error('Unclosed section "' + q[1] + '" at ' + P.pos);
            return u(l(h))
        }

        function l(e) {
            for (var t, n, i = [], a = 0, s = e.length; a < s; ++a)(t = e[a]) && ("text" === t[0] && n && "text" === n[0] ? (n[1] += t[1], n[3] = t[3]) : (i.push(t), n = t));
            return i
        }

        function u(e) {
            for (var t, n, i = [], a = i, s = [], r = 0, o = e.length; r < o; ++r) switch (t = e[r], t[0]) {
                case "#":
                case "^":
                    a.push(t), s.push(t), a = t[4] = [];
                    break;
                case "/":
                    n = s.pop(), n[5] = t[2], a = s.length > 0 ? s[s.length - 1][4] : i;
                    break;
                default:
                    a.push(t)
            }
            return i
        }

        function d(e) {
            this.string = e, this.tail = e, this.pos = 0
        }

        function f(e, t) {
            this.view = e, this.cache = {
                ".": this.view
            }, this.parent = t
        }

        function h() {
            this.cache = {}
        }
        var p = Object.prototype.toString,
            m = Array.isArray || function (e) {
                return "[object Array]" === p.call(e)
            },
            g = RegExp.prototype.test,
            v = /\S/,
            b = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;",
                "`": "&#x60;",
                "=": "&#x3D;"
            },
            y = /\s*/,
            w = /\s+/,
            x = /\s*=/,
            k = /\s*\}/,
            C = /#|\^|\/|>|\{|&|=|!/;
        d.prototype.eos = function () {
            return "" === this.tail
        }, d.prototype.scan = function (e) {
            var t = this.tail.match(e);
            if (!t || 0 !== t.index) return "";
            var n = t[0];
            return this.tail = this.tail.substring(n.length), this.pos += n.length, n
        }, d.prototype.scanUntil = function (e) {
            var t, n = this.tail.search(e);
            switch (n) {
                case -1:
                    t = this.tail, this.tail = "";
                    break;
                case 0:
                    t = "";
                    break;
                default:
                    t = this.tail.substring(0, n), this.tail = this.tail.substring(n)
            }
            return this.pos += t.length, t
        }, f.prototype.push = function (e) {
            return new f(e, this)
        }, f.prototype.lookup = function (e) {
            var n, i = this.cache;
            if (i.hasOwnProperty(e)) n = i[e];
            else {
                for (var s, r, o = this, c = !1; o;) {
                    if (e.indexOf(".") > 0)
                        for (n = o.view, s = e.split("."), r = 0; null != n && r < s.length;) r === s.length - 1 && (c = a(n, s[r])), n = n[s[r++]];
                    else n = o.view[e], c = a(o.view, e);
                    if (c) break;
                    o = o.parent
                }
                i[e] = n
            }
            return t(n) && (n = n.call(this.view)), n
        }, h.prototype.clearCache = function () {
            this.cache = {}
        }, h.prototype.parse = function (e, t) {
            var n = this.cache,
                i = n[e];
            return null == i && (i = n[e] = c(e, t)), i
        }, h.prototype.render = function (e, t, n) {
            var i = this.parse(e),
                a = t instanceof f ? t : new f(t);
            return this.renderTokens(i, a, n, e)
        }, h.prototype.renderTokens = function (e, t, n, i) {
            for (var a, s, r, o = "", c = 0, l = e.length; c < l; ++c) r = void 0, a = e[c], s = a[0], "#" === s ? r = this.renderSection(a, t, n, i) : "^" === s ? r = this.renderInverted(a, t, n, i) : ">" === s ? r = this.renderPartial(a, t, n, i) : "&" === s ? r = this.unescapedValue(a, t) : "name" === s ? r = this.escapedValue(a, t) : "text" === s && (r = this.rawValue(a)), void 0 !== r && (o += r);
            return o
        }, h.prototype.renderSection = function (e, n, i, a) {
            function s(e) {
                return r.render(e, n, i)
            }
            var r = this,
                o = "",
                c = n.lookup(e[1]);
            if (c) {
                if (m(c))
                    for (var l = 0, u = c.length; l < u; ++l) o += this.renderTokens(e[4], n.push(c[l]), i, a);
                else if ("object" == typeof c || "string" == typeof c || "number" == typeof c) o += this.renderTokens(e[4], n.push(c), i, a);
                else if (t(c)) {
                    if ("string" != typeof a) throw new Error("Cannot use higher-order sections without the original template");
                    c = c.call(n.view, a.slice(e[3], e[5]), s), null != c && (o += c)
                } else o += this.renderTokens(e[4], n, i, a);
                return o
            }
        }, h.prototype.renderInverted = function (e, t, n, i) {
            var a = t.lookup(e[1]);
            if (!a || m(a) && 0 === a.length) return this.renderTokens(e[4], t, n, i)
        }, h.prototype.renderPartial = function (e, n, i) {
            if (i) {
                var a = t(i) ? i(e[1]) : i[e[1]];
                return null != a ? this.renderTokens(this.parse(a), n, i, a) : void 0
            }
        }, h.prototype.unescapedValue = function (e, t) {
            var n = t.lookup(e[1]);
            if (null != n) return n
        }, h.prototype.escapedValue = function (t, n) {
            var i = n.lookup(t[1]);
            if (null != i) return e.escape(i)
        }, h.prototype.rawValue = function (e) {
            return e[1]
        }, e.name = "mustache.js", e.version = "2.3.2", e.tags = ["{{", "}}"];
        var A = new h;
        return e.clearCache = function () {
            return A.clearCache()
        }, e.parse = function (e, t) {
            return A.parse(e, t)
        }, e.render = function (e, t, i) {
            if ("string" != typeof e) throw new TypeError('Invalid template! Template should be a "string" but "' + n(e) + '" was given as the first argument for mustache#render(template, view, partials)');
            return A.render(e, t, i)
        }, e.to_html = function (n, i, a, s) {
            var r = e.render(n, i, a);
            if (!t(s)) return r;
            s(r)
        }, e.escape = o, e.Scanner = d, e.Context = f, e.Writer = h, e
    }), define("config", [], function () {
        return {
            hideAppInfo: ["arcgisonline", "arcgisWebApps", "mapsForCreativeCloud", "esriapps"]
        }
    }),
    function (e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("icons", t) : e.icons = t()
    }(this, function () {
        "use strict";
        return {
            esri: '<title>Esri</title><g><path d="M77.377.695a2.51615,2.51615,0,0,0-2.5536,2.4884,2.58969,2.58969,0,0,0,5.1756,0A2.512,2.512,0,0,0,77.377.695ZM75.4635,24.12065h3.892V8.5485h-3.892ZM40.615,8.1597c-4.7019,0-8.4646,3.2749-8.4646,8.1744,0,4.89828,3.7627,8.17661,8.4646,8.17661a8.08656,8.08656,0,0,0,5.8516-2.31047L44.0102,19.7439a4.96654,4.96654,0,0,1-3.781,1.65148,4.03745,4.03745,0,0,1-4.1869-3.69818H47.9167V16.6269C47.9167,11.2076,44.9662,8.1597,40.615,8.1597Zm-4.5727,6.6168a3.87339,3.87339,0,0,1,4.023-3.6991c2.4334,0,3.9261,1.4292,3.9603,3.6991Zm17.3044-1.8482c0-1.1689,1.2333-1.655,2.2729-1.655a3.53132,3.53132,0,0,1,3.0376,1.5764l2.476-2.4735a6.83011,6.83011,0,0,0-5.418-2.2165c-3.1469,0-6.2621,1.5555-6.2621,5.0284,0,5.9379,8.4026,3.4059,8.4026,6.6172,0,1.23253-1.4594,1.78384-2.5946,1.78384a4.75239,4.75239,0,0,1-3.6905-1.905l-2.5144,2.5136a7.64753,7.64753,0,0,0,5.9779,2.313c3.1784,0,6.717-1.29823,6.717-4.99731C61.7511,13.4459,53.3467,15.7175,53.3467,12.9283Zm14.151-1.9166h-.0623V8.5485H63.5426V24.12065h3.8928V15.7815a3.91438,3.91438,0,0,1,4.1848-3.9252,7.452,7.452,0,0,1,1.7181.253l.1519-3.7259a5.03109,5.03109,0,0,0-1.3826-.2237A4.96277,4.96277,0,0,0,67.4977,11.0117ZM14.782,2.9606a10.41336,10.41336,0,0,0-2.651.2599.49091.49091,0,0,0-.6431.4729.65358.65358,0,0,0,.2394.5615,20.045,20.045,0,0,1,2.4735,2.1423c-.4694.0517-.9807.1379-1.5039.2462-.5847-1.264-2.4653-.1147-3.71354-.0648-.14639.006-.28684.0252-.43149.035A20.32772,20.32772,0,0,1,8.3415,3.6934a17.20722,17.20722,0,0,1,6.875-1.6255l.3721-.0098c.3124-.0027.3371-.2514.0435-.2915A13.53793,13.53793,0,0,0,8.35348,2.9124,14.41291,14.41291,0,0,0,.89854,10.791c-.44337,1.2475-2.21826,7.1947.935,12.29948a13.20182,13.20182,0,0,0,9.88737,6.6769,14.15347,14.15347,0,0,0,8.7522-1.05577c5.9511-2.64154,10.4956-12.55841,5.9499-19.747C24.6289,5.6461,19.9278,2.7361,14.782,2.9606ZM12.5233,7.6083a17.75423,17.75423,0,0,1,2.3616-.3686,15.74087,15.74087,0,0,1,1.7479,2.5404c-.8053.3896-1.8781.6879-2.3146,1.3123a1.78056,1.78056,0,0,0-.2318.9943,23.589,23.589,0,0,0-3.8774,1.2862c-.45286-1.3319-.85009-2.659-1.12365-3.8421C10.3814,8.2941,11.8985,8.0927,12.5233,7.6083Zm6.6103,15.87993c-.3546.03749-.7071.08277-1.0169.13057a14.62456,14.62456,0,0,0-2.6843.72209,43.94209,43.94209,0,0,1-2.6676-4.43649A15.48586,15.48586,0,0,1,18.54,18.4602a4.61747,4.61747,0,0,0,.6909.9559C19.9871,20.1902,18.7892,21.299,19.1336,23.48823ZM10.5303,14.3485a19.29324,19.29324,0,0,1,3.5604-1.2862,2.03511,2.03511,0,0,1-.1827.903,2.50151,2.50151,0,0,0,.1336,1.7748c.7549,1.0985,2.0083.4882,2.9518.8834a2.15739,2.15739,0,0,1,.9633.8389,16.049,16.049,0,0,0-5.7053,1.4109A41.82526,41.82526,0,0,1,10.5303,14.3485Zm.8321,4.9371c-.0699.0333-.145.0742-.2171.1101-1.1019-.3073-1.78517-.478-3.25617-.7801a3.08944,3.08944,0,0,0-2.15123.1758c-.15959.0461-.3128.0879-.46173.1323-.14893-.3815-.29663-.7768-.44556-1.2018a27.12084,27.12084,0,0,1,4.82187-2.9851C10.1514,16.2283,10.8665,18.2204,11.3624,19.2856Zm.7674,4.52863a9.48665,9.48665,0,0,0,.6047-1.88965c.5692.95763,1.2487,1.9989,1.7744,2.814A17.3346,17.3346,0,0,0,11.837,26.4243,11.23781,11.23781,0,0,1,12.1298,23.81423ZM17.4642,9.1779c-.0102.0145-.0282.0261-.0393.0401a23.04534,23.04534,0,0,0-1.3771-2.1111,21.90906,21.90906,0,0,1,3.3743.1084C18.4082,7.5781,17.9609,8.4687,17.4642,9.1779Zm-9.028,1.0938c.01836-.0256.03837-.0465.05716-.0717.23344,1.1821.51294,2.1606.88552,3.5178a33.49783,33.49783,0,0,0-4.976,2.9723,17.18753,17.18753,0,0,1-.5889-1.9465,1.77168,1.77168,0,0,1,1.47617-1.325C6.51758,13.2957,7.57083,11.4696,8.43624,10.2717ZM3.0267,8.4883A15.96075,15.96075,0,0,1,7.74876,3.9686a26.225,26.225,0,0,0,.21806,2.6928q-.85463.0852-1.69211.2109a12.08231,12.08231,0,0,0-3.11438,4.0878A14.926,14.926,0,0,1,3.0267,8.4883ZM2.16984,9.9256s.06188,1.0601.1131,1.8329a11.90283,11.90283,0,0,0-1.17919,1.5914A9.53467,9.53467,0,0,1,2.16984,9.9256Zm7.664,18.35671A12.62638,12.62638,0,0,1,1.72131,20.029a17.47511,17.47511,0,0,1-.65164-6.473.65293.65293,0,0,0,.38018.0167c.13486-.0922.61581-.4302.95763-.7277.00472.0393.01241.0892.01792.1314a12.04271,12.04271,0,0,0-.40064,2.7099,19.25881,19.25881,0,0,1,1.28616,1.7062c-.31061.2304-.9051.6418-1.04468.7417a.62859.62859,0,0,0-.114,1.0148.56565.56565,0,0,0,.6124-.0103,10.69141,10.69141,0,0,1,1.06609-.769c.151.3926.29182.7468.43052,1.0848a1.34447,1.34447,0,0,0-.34269.79893,2.46079,2.46079,0,0,0,1.91875,2.35994c.035.01022.06057.01363.09388.02307.0499.07508.09517.14674.14761.22357A5.74221,5.74221,0,0,0,5.03032,23.9226c-.13189.17244-.28125.43018-.15959.48139a2.1227,2.1227,0,0,0,.71824-.03408c.46644-.08967.82618-.606,1.14833-.7955a17.99721,17.99721,0,0,0,1.67159,1.87942c.02866.11947.05506.24576.08792.3516a7.47254,7.47254,0,0,0,.495,1.19578A12.16213,12.16213,0,0,0,10.456,27.562,8.34474,8.34474,0,0,0,9.83383,28.28231Zm.98917.31236a4.36881,4.36881,0,0,1,.5054-.6256c.4672.30983.9682.66493,1.3677.89366A9.59947,9.59947,0,0,1,10.823,28.59467Zm3.1128.30983a22.07987,22.07987,0,0,1-2.0088-1.47057,14.04631,14.04631,0,0,1,3.1281-1.88878c.4016.63076,1.7267,2.50678,2.2575,3.11184A17.30216,17.30216,0,0,1,13.9358,28.9045Zm6.7055-1.50806a16.58869,16.58869,0,0,1-2.2045.98742,23.42994,23.42994,0,0,1-2.4402-3.20141,13.9527,13.9527,0,0,1,3.3466-.82111,7.49493,7.49493,0,0,0,.4438,1.09423,2.51925,2.51925,0,0,0,.6486.85345c.0853-.05287.1644-.11519.2484-.16981C20.678,26.55828,20.6665,26.98505,20.6413,27.39644ZM20.3106,5.9188c-.2702-.1719-.6068-.1079-.4669.1933a4.06966,4.06966,0,0,0,.4272.5122,19.53821,19.53821,0,0,0-4.856-.3645,15.62334,15.62334,0,0,0-2.8614-2.7649c4.999-.3111,9.4897,1.7565,11.4737,4.1856a15.42616,15.42616,0,0,0-2.6677-.9628A5.95374,5.95374,0,0,0,20.3106,5.9188Zm1.0946,21.06538c.023-.40711.0402-.92267.0529-1.39637a12.11693,12.11693,0,0,0,1.3695-1.23757,12.42379,12.42379,0,0,1,1.4275.23895A11.02525,11.02525,0,0,1,21.4052,26.98418Zm3.8245-3.72467a4.1318,4.1318,0,0,1-.6328.89444,9.77165,9.77165,0,0,0-1.2722-.37468c.0786-.09387.1635-.18267.2395-.27915.2688-1.7957-.3376-2.371.4211-4.01392.053-.1144.111-.2407.1716-.3713a11.3497,11.3497,0,0,1,1.1526.3858A30.26049,30.26049,0,0,1,25.2297,23.25951Zm-.7079-4.91621c.1959-.4072.4118-.8399.6456-1.2708.0607.5479.1042,1.0813.1307,1.5635C25.0578,18.5302,24.7936,18.4346,24.5218,18.3433Zm2.2178,1.1257-.1937.75629a18.08656,18.08656,0,0,1-.8318,2.22245,25.61647,25.61647,0,0,0,.1481-2.72944.59489.59489,0,0,0,.5586-.3414c.0568-.1946-.5637-.495-.5637-.495a20.74328,20.74328,0,0,0-.1725-2.7001c.1426-.2292.2869-.452.4341-.6551a12.095,12.095,0,0,0-.1852-1.5743,1.21486,1.21486,0,0,0,.323.0747c.2825.0043.2817-.1899.1912-.2978a3.78494,3.78494,0,0,0-.6423-.4195,12.02044,12.02044,0,0,0-2.7811-5.3203,14.9875,14.9875,0,0,1,1.7548.7732,9.39245,9.39245,0,0,1,2.2114,4.9204A12.16755,12.16755,0,0,1,26.7396,19.469Z" /><path d="M80.9857,8.7917V8.5528h1.2188v.2389H81.736V9.9832h-.2835V8.7917Zm1.87-.2389L83.221,9.577l.3679-1.0242h.4062V9.9832h-.262V8.8293l-.396,1.1539h-.2287l-.3995-1.1539V9.9832h-.262V8.5528Z" /></g>',
            esriSvg: '<svg id="gnav-dist-esri-Australia-tm" xmlns="http://www.w3.org/2000/svg" width="84" height="30" viewBox="0 0 84 30" focusable="false"><title>Esri</title><g><path d="M77.377.695a2.51615,2.51615,0,0,0-2.5536,2.4884,2.58969,2.58969,0,0,0,5.1756,0A2.512,2.512,0,0,0,77.377.695ZM75.4635,24.12065h3.892V8.5485h-3.892ZM40.615,8.1597c-4.7019,0-8.4646,3.2749-8.4646,8.1744,0,4.89828,3.7627,8.17661,8.4646,8.17661a8.08656,8.08656,0,0,0,5.8516-2.31047L44.0102,19.7439a4.96654,4.96654,0,0,1-3.781,1.65148,4.03745,4.03745,0,0,1-4.1869-3.69818H47.9167V16.6269C47.9167,11.2076,44.9662,8.1597,40.615,8.1597Zm-4.5727,6.6168a3.87339,3.87339,0,0,1,4.023-3.6991c2.4334,0,3.9261,1.4292,3.9603,3.6991Zm17.3044-1.8482c0-1.1689,1.2333-1.655,2.2729-1.655a3.53132,3.53132,0,0,1,3.0376,1.5764l2.476-2.4735a6.83011,6.83011,0,0,0-5.418-2.2165c-3.1469,0-6.2621,1.5555-6.2621,5.0284,0,5.9379,8.4026,3.4059,8.4026,6.6172,0,1.23253-1.4594,1.78384-2.5946,1.78384a4.75239,4.75239,0,0,1-3.6905-1.905l-2.5144,2.5136a7.64753,7.64753,0,0,0,5.9779,2.313c3.1784,0,6.717-1.29823,6.717-4.99731C61.7511,13.4459,53.3467,15.7175,53.3467,12.9283Zm14.151-1.9166h-.0623V8.5485H63.5426V24.12065h3.8928V15.7815a3.91438,3.91438,0,0,1,4.1848-3.9252,7.452,7.452,0,0,1,1.7181.253l.1519-3.7259a5.03109,5.03109,0,0,0-1.3826-.2237A4.96277,4.96277,0,0,0,67.4977,11.0117ZM14.782,2.9606a10.41336,10.41336,0,0,0-2.651.2599.49091.49091,0,0,0-.6431.4729.65358.65358,0,0,0,.2394.5615,20.045,20.045,0,0,1,2.4735,2.1423c-.4694.0517-.9807.1379-1.5039.2462-.5847-1.264-2.4653-.1147-3.71354-.0648-.14639.006-.28684.0252-.43149.035A20.32772,20.32772,0,0,1,8.3415,3.6934a17.20722,17.20722,0,0,1,6.875-1.6255l.3721-.0098c.3124-.0027.3371-.2514.0435-.2915A13.53793,13.53793,0,0,0,8.35348,2.9124,14.41291,14.41291,0,0,0,.89854,10.791c-.44337,1.2475-2.21826,7.1947.935,12.29948a13.20182,13.20182,0,0,0,9.88737,6.6769,14.15347,14.15347,0,0,0,8.7522-1.05577c5.9511-2.64154,10.4956-12.55841,5.9499-19.747C24.6289,5.6461,19.9278,2.7361,14.782,2.9606ZM12.5233,7.6083a17.75423,17.75423,0,0,1,2.3616-.3686,15.74087,15.74087,0,0,1,1.7479,2.5404c-.8053.3896-1.8781.6879-2.3146,1.3123a1.78056,1.78056,0,0,0-.2318.9943,23.589,23.589,0,0,0-3.8774,1.2862c-.45286-1.3319-.85009-2.659-1.12365-3.8421C10.3814,8.2941,11.8985,8.0927,12.5233,7.6083Zm6.6103,15.87993c-.3546.03749-.7071.08277-1.0169.13057a14.62456,14.62456,0,0,0-2.6843.72209,43.94209,43.94209,0,0,1-2.6676-4.43649A15.48586,15.48586,0,0,1,18.54,18.4602a4.61747,4.61747,0,0,0,.6909.9559C19.9871,20.1902,18.7892,21.299,19.1336,23.48823ZM10.5303,14.3485a19.29324,19.29324,0,0,1,3.5604-1.2862,2.03511,2.03511,0,0,1-.1827.903,2.50151,2.50151,0,0,0,.1336,1.7748c.7549,1.0985,2.0083.4882,2.9518.8834a2.15739,2.15739,0,0,1,.9633.8389,16.049,16.049,0,0,0-5.7053,1.4109A41.82526,41.82526,0,0,1,10.5303,14.3485Zm.8321,4.9371c-.0699.0333-.145.0742-.2171.1101-1.1019-.3073-1.78517-.478-3.25617-.7801a3.08944,3.08944,0,0,0-2.15123.1758c-.15959.0461-.3128.0879-.46173.1323-.14893-.3815-.29663-.7768-.44556-1.2018a27.12084,27.12084,0,0,1,4.82187-2.9851C10.1514,16.2283,10.8665,18.2204,11.3624,19.2856Zm.7674,4.52863a9.48665,9.48665,0,0,0,.6047-1.88965c.5692.95763,1.2487,1.9989,1.7744,2.814A17.3346,17.3346,0,0,0,11.837,26.4243,11.23781,11.23781,0,0,1,12.1298,23.81423ZM17.4642,9.1779c-.0102.0145-.0282.0261-.0393.0401a23.04534,23.04534,0,0,0-1.3771-2.1111,21.90906,21.90906,0,0,1,3.3743.1084C18.4082,7.5781,17.9609,8.4687,17.4642,9.1779Zm-9.028,1.0938c.01836-.0256.03837-.0465.05716-.0717.23344,1.1821.51294,2.1606.88552,3.5178a33.49783,33.49783,0,0,0-4.976,2.9723,17.18753,17.18753,0,0,1-.5889-1.9465,1.77168,1.77168,0,0,1,1.47617-1.325C6.51758,13.2957,7.57083,11.4696,8.43624,10.2717ZM3.0267,8.4883A15.96075,15.96075,0,0,1,7.74876,3.9686a26.225,26.225,0,0,0,.21806,2.6928q-.85463.0852-1.69211.2109a12.08231,12.08231,0,0,0-3.11438,4.0878A14.926,14.926,0,0,1,3.0267,8.4883ZM2.16984,9.9256s.06188,1.0601.1131,1.8329a11.90283,11.90283,0,0,0-1.17919,1.5914A9.53467,9.53467,0,0,1,2.16984,9.9256Zm7.664,18.35671A12.62638,12.62638,0,0,1,1.72131,20.029a17.47511,17.47511,0,0,1-.65164-6.473.65293.65293,0,0,0,.38018.0167c.13486-.0922.61581-.4302.95763-.7277.00472.0393.01241.0892.01792.1314a12.04271,12.04271,0,0,0-.40064,2.7099,19.25881,19.25881,0,0,1,1.28616,1.7062c-.31061.2304-.9051.6418-1.04468.7417a.62859.62859,0,0,0-.114,1.0148.56565.56565,0,0,0,.6124-.0103,10.69141,10.69141,0,0,1,1.06609-.769c.151.3926.29182.7468.43052,1.0848a1.34447,1.34447,0,0,0-.34269.79893,2.46079,2.46079,0,0,0,1.91875,2.35994c.035.01022.06057.01363.09388.02307.0499.07508.09517.14674.14761.22357A5.74221,5.74221,0,0,0,5.03032,23.9226c-.13189.17244-.28125.43018-.15959.48139a2.1227,2.1227,0,0,0,.71824-.03408c.46644-.08967.82618-.606,1.14833-.7955a17.99721,17.99721,0,0,0,1.67159,1.87942c.02866.11947.05506.24576.08792.3516a7.47254,7.47254,0,0,0,.495,1.19578A12.16213,12.16213,0,0,0,10.456,27.562,8.34474,8.34474,0,0,0,9.83383,28.28231Zm.98917.31236a4.36881,4.36881,0,0,1,.5054-.6256c.4672.30983.9682.66493,1.3677.89366A9.59947,9.59947,0,0,1,10.823,28.59467Zm3.1128.30983a22.07987,22.07987,0,0,1-2.0088-1.47057,14.04631,14.04631,0,0,1,3.1281-1.88878c.4016.63076,1.7267,2.50678,2.2575,3.11184A17.30216,17.30216,0,0,1,13.9358,28.9045Zm6.7055-1.50806a16.58869,16.58869,0,0,1-2.2045.98742,23.42994,23.42994,0,0,1-2.4402-3.20141,13.9527,13.9527,0,0,1,3.3466-.82111,7.49493,7.49493,0,0,0,.4438,1.09423,2.51925,2.51925,0,0,0,.6486.85345c.0853-.05287.1644-.11519.2484-.16981C20.678,26.55828,20.6665,26.98505,20.6413,27.39644ZM20.3106,5.9188c-.2702-.1719-.6068-.1079-.4669.1933a4.06966,4.06966,0,0,0,.4272.5122,19.53821,19.53821,0,0,0-4.856-.3645,15.62334,15.62334,0,0,0-2.8614-2.7649c4.999-.3111,9.4897,1.7565,11.4737,4.1856a15.42616,15.42616,0,0,0-2.6677-.9628A5.95374,5.95374,0,0,0,20.3106,5.9188Zm1.0946,21.06538c.023-.40711.0402-.92267.0529-1.39637a12.11693,12.11693,0,0,0,1.3695-1.23757,12.42379,12.42379,0,0,1,1.4275.23895A11.02525,11.02525,0,0,1,21.4052,26.98418Zm3.8245-3.72467a4.1318,4.1318,0,0,1-.6328.89444,9.77165,9.77165,0,0,0-1.2722-.37468c.0786-.09387.1635-.18267.2395-.27915.2688-1.7957-.3376-2.371.4211-4.01392.053-.1144.111-.2407.1716-.3713a11.3497,11.3497,0,0,1,1.1526.3858A30.26049,30.26049,0,0,1,25.2297,23.25951Zm-.7079-4.91621c.1959-.4072.4118-.8399.6456-1.2708.0607.5479.1042,1.0813.1307,1.5635C25.0578,18.5302,24.7936,18.4346,24.5218,18.3433Zm2.2178,1.1257-.1937.75629a18.08656,18.08656,0,0,1-.8318,2.22245,25.61647,25.61647,0,0,0,.1481-2.72944.59489.59489,0,0,0,.5586-.3414c.0568-.1946-.5637-.495-.5637-.495a20.74328,20.74328,0,0,0-.1725-2.7001c.1426-.2292.2869-.452.4341-.6551a12.095,12.095,0,0,0-.1852-1.5743,1.21486,1.21486,0,0,0,.323.0747c.2825.0043.2817-.1899.1912-.2978a3.78494,3.78494,0,0,0-.6423-.4195,12.02044,12.02044,0,0,0-2.7811-5.3203,14.9875,14.9875,0,0,1,1.7548.7732,9.39245,9.39245,0,0,1,2.2114,4.9204A12.16755,12.16755,0,0,1,26.7396,19.469Z" /><path d="M80.9857,8.7917V8.5528h1.2188v.2389H81.736V9.9832h-.2835V8.7917Zm1.87-.2389L83.221,9.577l.3679-1.0242h.4062V9.9832h-.262V8.8293l-.396,1.1539h-.2287l-.3995-1.1539V9.9832h-.262V8.5528Z" /></g></svg>',
            user: '<path d="M11 3a3 3 0 1 0-3 3 3 3 0 0 0 3-3zM8 5a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm3 1H5a2 2 0 0 0-2 2v6a1 1 0 0 0 1 1h1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1h1a1 1 0 0 0 1-1V8a2 2 0 0 0-2-2zm1 3v5h-1V9h-1v6H6V9H5v5H4V8a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z" />',
            help: '<path d="M7.5 0A7.5 7.5 0 1 0 15 7.5 7.509 7.509 0 0 0 7.5 0zm.001 14.1A6.6 6.6 0 1 1 14.1 7.5a6.608 6.608 0 0 1-6.599 6.6zM7.5 10.5a1 1 0 1 1-1 1 1 1 0 0 1 1-1zM8 9H7a3.046 3.046 0 0 1 1.282-2.51c.47-.462.736-.746.732-1.217a1.324 1.324 0 0 0-1.46-1.27 1.418 1.418 0 0 0-1.548 1.394h-1c0-3.09 5.009-3.154 5.008-.128a2.617 2.617 0 0 1-1.032 1.935C8.462 7.715 8 7.995 8 9z" />',
            close: '<path d="M13.207 12.5l7.778 7.778-.707.707-7.778-7.778-7.778 7.778-.707-.707 7.778-7.778-7.778-7.778.707-.707 7.778 7.778 7.778-7.778.707.707z" />',
            chevronUp: '<path d="M11.5,9.71,4,17.21V15.79l7.5-7.5,7.5,7.5v1.42Z"/>',
            lock: '<path d="M13 7V5A5 5 0 0 0 3 5v2a1.003 1.003 0 0 0-1 1v7a1.003 1.003 0 0 0 1 1h10a1.003 1.003 0 0 0 1-1V8a1.003 1.003 0 0 0-1-1zM4 5a4 4 0 0 1 8 0v2h-1V5a3 3 0 0 0-6 0v2H4zm6 2H6V5a2 2 0 0 1 4 0zm3 8H3V8h10zm-5-1H7V9h1v1h1v1H8v1h1v1H8z"/>',
            trash: '<path d="M13.207 12.5l7.778 7.778-.707.707-7.778-7.778-7.778 7.778-.707-.707 7.778-7.778-7.778-7.778.707-.707 7.778 7.778 7.778-7.778.707.707z" />',
            info: '<path d="M7.5 0A7.5 7.5 0 1 0 15 7.5 7.509 7.509 0 0 0 7.5 0zm.001 14.1A6.6 6.6 0 1 1 14.1 7.5a6.608 6.608 0 0 1-6.599 6.6zM7.5 5.5a1 1 0 1 1 1-1 1.002 1.002 0 0 1-1 1zM7 7h1v5H7zm2 5H6v-1h3z"/>',
            google: '<svg version="1.1" id="google_icon" focusable="false" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 533.5 544.3" style="enable-background:new 0 0 533.5 544.3;" xml:space="preserve"><style type="text/css">.st0{fill:#4285F4;}.st1{fill:#34A853;}.st2{fill:#FBBC04;}.st3{fill:#EA4335;}</style><g><path class="st0" d="M533.5,278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1,33.8-25.7,63.7-54.4,82.7v68h87.7 C503.9,431.2,533.5,361.2,533.5,278.4z"/><path class="st1" d="M272.1,544.3c73.4,0,135.3-24.1,180.4-65.7l-87.7-68c-24.4,16.6-55.9,26-92.6,26c-71,0-131.2-47.9-152.8-112.3 H28.9v70.1C75.1,486.3,169.2,544.3,272.1,544.3z"/><path class="st2" d="M119.3,324.3c-11.4-33.8-11.4-70.4,0-104.2V150H28.9c-38.6,76.9-38.6,167.5,0,244.4L119.3,324.3z"/><path class="st3" d="M272.1,107.7c38.8-0.6,76.3,14,104.4,40.8l0,0l77.7-77.7C405,24.6,339.7-0.8,272.1,0C169.2,0,75.1,58,28.9,150 l90.4,70.1C140.8,155.6,201.1,107.7,272.1,107.7z"/></g></svg>',
            facebook: '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1" focusable="false" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 14222 14222" xmlns:xlink="http://www.w3.org/1999/xlink"><style type="text/css">.fil0 {fill:#1977F3;fill-rule:nonzero;}.fil1 {fill:#FEFEFE;fill-rule:nonzero;}</style><g id="Layer_x0020_1"><path class="fil0" d="M14222 7111c0,-3927 -3184,-7111 -7111,-7111 -3927,0 -7111,3184 -7111,7111 0,3549 2600,6491 6000,7025l0 -4969 -1806 0 0 -2056 1806 0 0 -1567c0,-1782 1062,-2767 2686,-2767 778,0 1592,139 1592,139l0 1750 -897 0c-883,0 -1159,548 -1159,1111l0 1334 1972 0 -315 2056 -1657 0 0 4969c3400,-533 6000,-3475 6000,-7025z"/><path class="fil1" d="M9879 9167l315 -2056 -1972 0 0 -1334c0,-562 275,-1111 1159,-1111l897 0 0 -1750c0,0 -814,-139 -1592,-139 -1624,0 -2686,984 -2686,2767l0 1567 -1806 0 0 2056 1806 0 0 4969c362,57 733,86 1111,86 378,0 749,-30 1111,-86l0 -4969 1657 0z"/></g></svg>',
            apple_old: '<svg version="1.1" id="apple_logo" class="svg-icon-black" focusable="false" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22.773 22.773" style="enable-background:new 0 0 22.773 22.773;" xml:space="preserve"><g><path d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573 c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z"/><path d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334 c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0 c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019 c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464 c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648 c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z"/></g></svg>',
            apple: '<svg id="apple_logo" focusable="false" width="56px" height="56px" viewBox="0 0 56 56" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><clipPath id="circleClip"><circle cx="28" cy="28" r="22" /></clipPath></defs><g id="Black-Logo-Square" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" clip-path="url(#circleClip)"><rect id="Rectangle" x="6" y="6" width="44" height="44"></rect><path d="M28.2226562,20.3846154 C29.0546875,20.3846154 30.0976562,19.8048315 30.71875,19.0317864 C31.28125,18.3312142 31.6914062,17.352829 31.6914062,16.3744437 C31.6914062,16.2415766 31.6796875,16.1087095 31.65625,16 C30.7304687,16.0362365 29.6171875,16.640178 28.9492187,17.4494596 C28.421875,18.06548 27.9414062,19.0317864 27.9414062,20.0222505 C27.9414062,20.1671964 27.9648438,20.3121424 27.9765625,20.3604577 C28.0351562,20.3725366 28.1289062,20.3846154 28.2226562,20.3846154 Z M25.2929688,35 C26.4296875,35 26.9335938,34.214876 28.3515625,34.214876 C29.7929688,34.214876 30.109375,34.9758423 31.375,34.9758423 C32.6171875,34.9758423 33.4492188,33.792117 34.234375,32.6325493 C35.1132812,31.3038779 35.4765625,29.9993643 35.5,29.9389701 C35.4179688,29.9148125 33.0390625,28.9122695 33.0390625,26.0979021 C33.0390625,23.6579784 34.9140625,22.5588048 35.0195312,22.474253 C33.7773438,20.6382708 31.890625,20.5899555 31.375,20.5899555 C29.9804688,20.5899555 28.84375,21.4596313 28.1289062,21.4596313 C27.3554688,21.4596313 26.3359375,20.6382708 25.1289062,20.6382708 C22.8320312,20.6382708 20.5,22.5950413 20.5,26.2911634 C20.5,28.5861411 21.3671875,31.013986 22.4335938,32.5842339 C23.3476562,33.9129053 24.1445312,35 25.2929688,35 Z" id="Apple" fill-rule="nonzero"></path></g></svg>',
            github: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" class="octicon octicon-mark-github svg-icon-black" focusable="false" viewBox="0 0 16 16"><g><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></g></svg>'
        }
    }), define("components/Section", ["helpers", "mustache", "icons"], function (e, t, n) {
        var i = function (t) {
            this.parent = t.parent || document.body, this.authInfo = t.info || {}, this.i18n = t.i18n || {}, this.template = t.template || "", this.root = e.createRootElement({
                parent: this.parent,
                className: t.className || this.defaultClass,
                id: t.id,
                type: t.type || "div"
            }), this.startup()
        };
        return i.prototype = {
            defaultClass: null,
            root: null,
            parent: null,
            authinfo: null,
            template: null,
            constructor: i,
            startup: function () {
                this.render(), this.addEventHandlers()
            },
            render: function () {
                var e = this.authInfo;
                this.root.innerHTML = t.render(this.template, {
                    info: e,
                    i18n: this.i18n,
                    icons: n
                })
            },
            addEventHandlers: function () {}
        }, i
    }), define("text", ["module"], function (e) {
        "use strict";

        function t(e, t) {
            return void 0 === e || "" === e ? t : e
        }

        function n(e, n, i, a) {
            if (n === a) return !0;
            if (e === i) {
                if ("http" === e) return t(n, "80") === t(a, "80");
                if ("https" === e) return t(n, "443") === t(a, "443")
            }
            return !1
        }
        var i, a, s, r, o, c = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"],
            l = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,
            u = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,
            d = "undefined" != typeof location && location.href,
            f = d && location.protocol && location.protocol.replace(/\:/, ""),
            h = d && location.hostname,
            p = d && (location.port || void 0),
            m = {},
            g = e.config && e.config() || {};
        return i = {
            version: "2.0.15",
            strip: function (e) {
                if (e) {
                    e = e.replace(l, "");
                    var t = e.match(u);
                    t && (e = t[1])
                } else e = "";
                return e
            },
            jsEscape: function (e) {
                return e.replace(/(['\\])/g, "\\$1").replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r").replace(/[\u2028]/g, "\\u2028").replace(/[\u2029]/g, "\\u2029")
            },
            createXhr: g.createXhr || function () {
                var e, t, n;
                if ("undefined" != typeof XMLHttpRequest) return new XMLHttpRequest;
                if ("undefined" != typeof ActiveXObject)
                    for (t = 0; t < 3; t += 1) {
                        n = c[t];
                        try {
                            e = new ActiveXObject(n)
                        } catch (e) {}
                        if (e) {
                            c = [n];
                            break
                        }
                    }
                return e
            },
            parseName: function (e) {
                var t, n, i, a = !1,
                    s = e.lastIndexOf("."),
                    r = 0 === e.indexOf("./") || 0 === e.indexOf("../");
                return -1 !== s && (!r || s > 1) ? (t = e.substring(0, s), n = e.substring(s + 1)) : t = e, i = n || t, s = i.indexOf("!"), -1 !== s && (a = "strip" === i.substring(s + 1), i = i.substring(0, s), n ? n = i : t = i), {
                    moduleName: t,
                    ext: n,
                    strip: a
                }
            },
            xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,
            useXhr: function (e, t, a, s) {
                var r, o, c, l = i.xdRegExp.exec(e);
                return !l || (r = l[2], o = l[3], o = o.split(":"), c = o[1], o = o[0], (!r || r === t) && (!o || o.toLowerCase() === a.toLowerCase()) && (!c && !o || n(r, c, t, s)))
            },
            finishLoad: function (e, t, n, a) {
                n = t ? i.strip(n) : n, g.isBuild && (m[e] = n), a(n)
            },
            load: function (e, t, n, a) {
                if (a && a.isBuild && !a.inlineText) return void n();
                g.isBuild = a && a.isBuild;
                var s = i.parseName(e),
                    r = s.moduleName + (s.ext ? "." + s.ext : ""),
                    o = t.toUrl(r),
                    c = g.useXhr || i.useXhr;
                if (0 === o.indexOf("empty:")) return void n();
                !d || c(o, f, h, p) ? i.get(o, function (t) {
                    i.finishLoad(e, s.strip, t, n)
                }, function (e) {
                    n.error && n.error(e)
                }) : t([r], function (e) {
                    i.finishLoad(s.moduleName + "." + s.ext, s.strip, e, n)
                })
            },
            write: function (e, t, n, a) {
                if (m.hasOwnProperty(t)) {
                    var s = i.jsEscape(m[t]);
                    n.asModule(e + "!" + t, "define(function () { return '" + s + "';});\n")
                }
            },
            writeFile: function (e, t, n, a, s) {
                var r = i.parseName(t),
                    o = r.ext ? "." + r.ext : "",
                    c = r.moduleName + o,
                    l = n.toUrl(r.moduleName + o) + ".js";
                i.load(c, n, function (t) {
                    var n = function (e) {
                        return a(l, e)
                    };
                    n.asModule = function (e, t) {
                        return a.asModule(e, l, t)
                    }, i.write(e, c, n, s)
                }, s)
            }
        }, "node" === g.env || !g.env && "undefined" != typeof process && process.versions && process.versions.node && !process.versions["node-webkit"] && !process.versions["atom-shell"] ? (a = require.nodeRequire("fs"), i.get = function (e, t, n) {
            try {
                var i = a.readFileSync(e, "utf8");
                "\ufeff" === i[0] && (i = i.substring(1)), t(i)
            } catch (e) {
                n && n(e)
            }
        }) : "xhr" === g.env || !g.env && i.createXhr() ? i.get = function (e, t, n, a) {
            var s, r = i.createXhr();
            if (r.open("GET", e, !0), a)
                for (s in a) a.hasOwnProperty(s) && r.setRequestHeader(s.toLowerCase(), a[s]);
            g.onXhr && g.onXhr(r, e), r.onreadystatechange = function (i) {
                var a, s;
                4 === r.readyState && (a = r.status || 0, a > 399 && a < 600 ? (s = new Error(e + " HTTP status: " + a), s.xhr = r, n && n(s)) : t(r.responseText), g.onXhrComplete && g.onXhrComplete(r, e))
            }, r.send(null)
        } : "rhino" === g.env || !g.env && "undefined" != typeof Packages && "undefined" != typeof java ? i.get = function (e, t) {
            var n, i, a = new java.io.File(e),
                s = java.lang.System.getProperty("line.separator"),
                r = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(a), "utf-8")),
                o = "";
            try {
                for (n = new java.lang.StringBuffer, i = r.readLine(), i && i.length() && 65279 === i.charAt(0) && (i = i.substring(1)), null !== i && n.append(i); null !== (i = r.readLine());) n.append(s), n.append(i);
                o = String(n.toString())
            } finally {
                r.close()
            }
            t(o)
        } : ("xpconnect" === g.env || !g.env && "undefined" != typeof Components && Components.classes && Components.interfaces) && (s = Components.classes, r = Components.interfaces, Components.utils.import("resource://gre/modules/FileUtils.jsm"), o = "@mozilla.org/windows-registry-key;1" in s, i.get = function (e, t) {
            var n, i, a, c = {};
            o && (e = e.replace(/\//g, "\\")), a = new FileUtils.File(e);
            try {
                n = s["@mozilla.org/network/file-input-stream;1"].createInstance(r.nsIFileInputStream), n.init(a, 1, 0, !1), i = s["@mozilla.org/intl/converter-input-stream;1"].createInstance(r.nsIConverterInputStream), i.init(n, "utf-8", n.available(), r.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER), i.readString(n.available(), c), i.close(), n.close(), t(c.value)
            } catch (e) {
                throw new Error((a && a.path || "") + ": " + e)
            }
        }), i
    }), define("text!components/../../contents/privacyLink.html", [], function () {
        return '<div class="font-size--3 text-right">\n  <a href="https://trust.arcgis.com/{{i18n.__meta.locale}}/privacy/privacy-tab-intro.htm" target="_blank">\n      {{i18n.privacy}}\n  </a>\n</div>\n'
    }), define("components/PrivacyLink", ["helpers", "./Section", "text!../../contents/privacyLink.html"], function (e, t, n) {
        function i(e) {
            e.template = n, e.type = "div", t.call(this, e)
        }
        return i.prototype = Object.create(t.prototype), e.extend(i.prototype, {
            defaultClass: "privacy-link",
            constructor: i
        }), i
    }), define("components/ExpandSection", ["calcite-web", "helpers", "./Section"], function (e, t, n) {
        function i(e) {
            this.exclusive = e.exclusive, "expanded" in e && (this.expanded = e.expanded), "collapsible" in e && (this.collapsible = e.collapsible), n.call(this, e)
        }
        return i.prototype = Object.create(n.prototype), t.extend(i.prototype, {
            expanded: !0,
            expander: null,
            constructor: i,
            render: function () {
                if (n.prototype.render.call(this), this.expander = t.queryOne(".accordion-title", this.root), !1 === this.collapsible) {
                    this.expand(!0), this.expander && (this.expander.removeChild(t.queryOne(".accordion-icon", this.expander)), e.removeClass(t.queryOne(".js-accordion", this.root), "js-accordion"), e.nodeListToArray(t.query("[class*='accordion-']")).forEach(function (e) {
                        e.className = e.className.replace(/accordion/g, "flat")
                    }));
                    var i = t.queryOne(".flat-title", this.root);
                    i && (e.addClass(i, "font-size--1 trailer-quarter"), i.setAttribute("role", "heading"), i.setAttribute("aria-level", "4"))
                } else {
                    !1 === this.expanded && this.expand(!1);
                    var a = this.getSavedState();
                    a && this.expand(a.expanded)
                }
            },
            expand: function (n) {
                var i = t.queryOne(".accordion-section", this.root);
                if (i) {
                    var a = t.queryOne(".accordion-title", i);
                    !1 === n ? (e.removeClass(i, "is-active"), a.getAttribute("aria-expanded") && e.toggleAriaExpanded(a)) : (e.addClass(i, "is-active"), !a.getAttribute("aria-expanded") && e.toggleAriaExpanded(a))
                }
            },
            addEventHandlers: function () {
                e.bus.on("accordion:toggle", function (n) {
                    var i = n.node,
                        a = this.expander && i == this.expander.parentElement,
                        s = !e.hasClass(i, "is-active");
                    a && (this.exclusive && s && e.nodeListToArray(t.query(".accordion-section.is-active")).forEach(function (t) {
                        e.bus.emit("accordion:toggle", {
                            node: t
                        })
                    }), this.expanded = !!s, this.saveState(this.expanded))
                }, this)
            },
            getSavedState: function () {
                var e;
                try {
                    e = window.localStorage.getItem(this.defaultClass)
                } catch (e) {
                    return !1
                }
                return JSON.parse(e)
            },
            saveState: function (e) {
                try {
                    window.localStorage.setItem(this.defaultClass, JSON.stringify({
                        expanded: !!e
                    }))
                } catch (e) {
                    return !1
                }
            }
        }), i
    }), define("text!components/../../contents/arcgisLogin.html", [], function () {
        return '<div class="js-accordion accordion">\n    <div class="js-accordion-section accordion-section is-active">\n        <div class="accordion-title" id="loginTitle">\n            <span class="accordion-icon">\n                <svg class="svg-icon" data-name="chevron-up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false">\n                    {{&icons.chevronUp}}\n                </svg>\n            </span>\n            <span>\n                {{i18n.arcgisLogin}}\n            </span>\n        </div>\n        <div class="accordion-content" role="region" aria-labelledby="loginTitle" id="loginPanel">\n            <form class="container" id="oauth" name="f" method="POST" action="{{info.hostname}}{{info.contextPath}}/oauth2/signin"\n                novalidate autocomplete="off">\n                <input type="hidden" id="oauth_state" name="oauth_state">\n                <input type="hidden" id="authorize" name="authorize" value="true">\n                <label class="field-icon">\n                    <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false">\n                        {{&icons.user}}\n                    </svg>\n                    <input type="text" name="username" id="user_username" placeholder="{{i18n.username}}" aria-label="{{i18n.username}}"\n                        class="padding-left-2" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" required>\n                    <div class="input-error-message js-username-error"></div>\n                </label>\n                <label class="field-icon">\n                    <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false">\n                        {{&icons.lock}}\n                    </svg>\n                    <input required type="password" name="password" id="user_password" placeholder="{{i18n.password}}"\n                        aria-label="{{i18n.password}}" class="padding-left-2">\n                    <div class="input-error-message js-password-error"></div>\n                </label>\n                <label id="persistUserLabel" class="hide"><input type="checkbox" name="persist" id="persistUser">{{i18n.keepMeSignedIn}}</label>\n                <div class="flex">\n                    <button id="signIn" type="submit" class="btn btn-small btn-fill">{{i18n.signIn}}</button>\n                    <button id="cancel" type="button" class="btn btn-small btn-fill btn-clear margin-left-half hide">{{i18n.cancel}}</button>\n                </div>\n            </form>\n            <div class="leader-quarter btn-fill font-size--3">\n                {{^info.isPortal}}\n                <a href="{{info.hostname}}{{info.contextPath}}/oauth2/troubleshoot?oauth_state={{info.oauth_state}}&forgotMy=username">{{i18n.needHelpUsername}}</a>\n                &nbsp;{{i18n.or}}&nbsp;\n                <a href="{{info.hostname}}{{info.contextPath}}/oauth2/troubleshoot?oauth_state={{info.oauth_state}}&forgotMy=password">{{i18n.needHelpPassword}}</a>\n                {{/info.isPortal}}\n                {{#info.isPortal}}\n                <a href="{{info.hostname}}{{info.contextPath}}/oauth2/troubleshoot?oauth_state={{info.oauth_state}}&forgotMy=password">{{i18n.needHelpPassword}}</a>\n                {{/info.isPortal}}\n            </div>\n        </div>\n    </div>\n</div>\n'
    }), define("components/ArcgisLogin", ["calcite-web", "helpers", "./ExpandSection", "text!../../contents/arcgisLogin.html"], function (e, t, n, i) {
        function a(e) {
            e.template = i, n.call(this, e)
        }
        return a.prototype = Object.create(n.prototype), t.extend(a.prototype, {
            defaultClass: "arcgis-login",
            constructor: a,
            render: function () {
                if (this.authInfo.isPortal && (this.authInfo.portalhost = t.getPortal()), n.prototype.render.call(this), t.byId("oauth_state").setAttribute("value", this.authInfo.oauth_state), this.authInfo.username && (t.byId("user_username").value = this.authInfo.username), this.authInfo.prePopulatedUsername) {
                    var i = t.byId("user_username");
                    i.value = this.authInfo.prePopulatedUsername, i.setAttribute("readonly", !0)
                }!0 === this.authInfo.persistOption && e.removeClass(t.byId("persistUserLabel"), "hide"), !0 !== this.authInfo.hideCancel && e.removeClass(t.byId("cancel"), "hide")
            },
            addEventHandlers: function () {
                n.prototype.addEventHandlers.call(this), e.addEvent(t.byId("user_password"), "blur", this.verifyInput.bind(this)), e.addEvent(t.byId("user_username"), "blur", this.verifyInput.bind(this)), e.addEvent(t.byId("cancel"), "click", this.cancelForm.bind(this)), e.addEvent(t.byId("oauth"), "submit", this.validateForm.bind(this))
            },
            verifyInput: function (n) {
                var i = n.target,
                    a = t.queryOne(".js-" + i.id.split("user_")[1] + "-error");
                i.value.length > 0 && ("user_username" == i.id && (i.value = i.value.trim()), e.removeClass(i, "input-error"), e.removeClass(a, "is-active"))
            },
            cancelForm: function (e) {
                e.preventDefault();
                var n = t.byId("oauth");
                t.byId("authorize").setAttribute("value", "false"), n.submit()
            },
            validateForm: function (n) {
                n.preventDefault();
                var i = !0;
                if (e.nodeListToArray(t.query("input[required]", this.root)).forEach(function (n) {
                        var a = n.id.indexOf("user_") > -1 ? n.id.split("user_")[1] : n.id,
                            s = t.queryOne(".js-" + a + "-error");
                        0 == n.value.length && (i = !1, s.innerHTML = this.i18n.createAccount.errors["missing_" + a], e.addClass(n, "input-error"), e.addClass(s, "is-active"))
                    }.bind(this)), i) {
                    if (!0 === this.authInfo.persistOption) {
                        var a = t.byId("persistUser");
                        a.value = a.checked
                    }
                    n.target.submit()
                }
            }
        }), a
    }), define("text!components/../../contents/myOrgs.html", [], function () {
        return '<div class="js-accordion accordion">\n    <div class="js-accordion-section accordion-section is-active">\n        <div class="accordion-title" id="myOrgsTitle">\n            <span class="accordion-icon">\n                <svg class="svg-icon" data-name="chevron-up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false">\n                    {{&icons.chevronUp}}\n                </svg>\n            </span>\n            <span>\n                {{i18n.yourOrgUrl}}\n            </span>\n        </div>\n        <div class="accordion-content" role="region" aria-labelledby="myOrgsTitle" id="myOrgsPanel">\n            <div class="js-info-enterprise">\n                {{#info.savedOrgs}}\n                {{#.}}\n                <div class="pointer js-entpanel entpanel btn btn-clear block-el" tabindex="0">\n                    <div class="font-size--3 text-center">\n                        <div tabindex="-1" class="js-entlogin capital inline-block" data-url="{{url}}" href="#">{{key}}</div>\n                        <div class="js-trash-org right" data-index="{{index}}" tabindex="0">\n                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svg-icon svg-icon-blue trash-icon" width="24" height="24" focusable="false">\n                                {{&icons.trash}}\n                            </svg>\n                        </div>\n                    </div>\n                </div>\n                {{/.}}\n                {{/info.savedOrgs}}\n                <a href="#" id="addOrgLink" class="leader-half block-el hide font-size--3">{{i18n.addOrgUrl}}</a>\n            </div>\n            <div class="js-add-enterprise hide">\n                <div id="orgInputWrapper">\n                    <label>\n                        <div class="flex align-center flex-wrap" dir="ltr">\n                            <input type="text" id="orgKey" dir="ltr">\n                            <div class="post-org" dir="ltr">.{{info.orgUrlBase}}</div>\n                        </div>\n                        <div class="input-error-message" id="orgKey-error"></div>\n                    </label>\n                    <label id="remOrgLabel"><input type="checkbox" id="remOrg">{{i18n.rememberUrl}}</label>\n                </div>\n                <p id="maxOrgsNotice" class="font-size--3 hide">{{i18n.maxSavedOrgs}}</p>\n                <div class="flex flex-justify actions-area">\n                    <button class="btn btn-small btn-transparent" id="backLink">{{i18n.forgotPassword.back}}</button>\n                    <button class="btn btn-small" id="orgContinue">{{i18n.continue}}</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n'
    }), define("components/MyOrgs", ["calcite-web", "helpers", "./ExpandSection", "text!../../contents/myOrgs.html"], function (e, t, n, i) {
        function a(e) {
            e.template = i, this.hasStorage = this._checkStorage(), n.call(this, e)
        }
        return a.prototype = Object.create(n.prototype), t.extend(a.prototype, {
            defaultClass: "my-orgs",
            hasStorage: !1,
            constructor: a,
            render: function () {
                var i = this.authInfo;
                this.setRootEnterpriseInfo(i), n.prototype.render.call(this), this.hasStorage || e.addClass(t.byId("remOrgLabel"), "hide"), i.hasOrgs ? (e.removeClass(t.byId("addOrgLink"), "hide"), this.getFilteredKeys().length > 2 && e.removeClass(t.byId("maxOrgsNotice"), "hide")) : (e.removeClass(t.queryOne(".js-add-enterprise"), "hide"), e.addClass(t.byId("backLink"), "invisible"))
            },
            addEventHandlers: function () {
                n.prototype.addEventHandlers.call(this), e.nodeListToArray(t.query(".js-entlogin")).forEach(function (t) {
                    e.addEvent(t, "click", this.doEnterpriseLogin.bind(this))
                }.bind(this)), e.nodeListToArray(t.query(".js-entpanel")).forEach(function (n) {
                    e.addEvent(n, "keyup", this.keyEnterprisePanel.bind(this)), e.addEvent(n, "click", function (n) {
                        e.hasClass(n.currentTarget, "js-trash-org") || t.queryOne(".js-entlogin", n.currentTarget).click()
                    })
                }.bind(this)), e.addEvent(t.byId("orgContinue"), "click", this.submitOrg.bind(this)), e.addEvent(t.byId("addOrgLink"), "click", this.showAddOrg.bind(this)), e.addEvent(t.byId("backLink"), "click", this.hideAddOrg.bind(this)), e.addEvent(t.byId("orgKey"), "keyup", this.keyOrgInput.bind(this)), e.addEvent(t.byId("orgKey"), "blur", function (e) {
                    var t = e.target.value;
                    [/^http[s]*:\/\//i, /\.$/].forEach(function (e) {
                        t = t.replace(e, "")
                    }), e.target.value = t, t.length > 0 && this.validateOrgKey(t)
                }.bind(this)), e.nodeListToArray(t.query(".js-trash-org")).forEach(function (t) {
                    e.addEvent(t, "click", this.removeSavedOrg.bind(this))
                }.bind(this))
            },
            setRootEnterpriseInfo: function (e) {
                this.storedKeys = this.hasStorage && this.readOrgKeys() || [];
                var t = e.orgUrlBase,
                    n = e.contextPath,
                    i = this.storedKeys.map(function (e, i) {
                        var a = e + "." + t;
                        return {
                            index: i + 1,
                            key: e,
                            title: a,
                            url: "https://" + a + n + "/rest/oauth2/authorize"
                        }
                    });
                i.length && (e.hasOrgs = !0, e.savedOrgs = i)
            },
            doEnterpriseLogin: function (e) {
                e.preventDefault();
                var n = e.target,
                    i = n.getAttribute("data-url"),
                    a = t.byId("oauth");
                a.action = i, a.submit()
            },
            overEnterprisePanel: function (t) {
                var n = t.target;
                e.toggleClass(n, "panel-off-white", "panel-white")
            },
            keyEnterprisePanel: function (n) {
                var i = n.keyCode;
                0 != i && 13 != i && 32 != i || (e.hasClass(n.target, "js-trash-org") ? n.target.click() : t.queryOne(".js-entlogin", n.target).click())
            },
            showAddOrg: function () {
                e.removeClass(t.queryOne(".js-add-enterprise"), "hide"), e.addClass(t.queryOne(".js-info-enterprise"), "hide"), e.addClass(t.byId("addOrgLink"), "hide"), this.getFilteredKeys().length >= 3 && e.addClass(t.byId("remOrgLabel"), "hide"), t.byId("orgKey").focus()
            },
            hideAddOrg: function () {
                e.addClass(t.queryOne(".js-add-enterprise"), "hide"), e.removeClass(t.queryOne(".js-info-enterprise"), "hide"), e.removeClass(t.byId("addOrgLink"), "hide")
            },
            keyOrgInput: function (n) {
                var i = n.keyCode,
                    a = n.target,
                    s = t.byId("orgKey-error");
                if ("Enter" == n.key || 13 == i) t.byId("orgContinue", n.target).click();
                else if (a.value.length > 36) {
                    var r = a.value;
                    a.value = r.slice(0, 36), s.innerHTML = this.i18n.tooManyCharacters, e.addClass(a, "input-error"), e.addClass(s, "is-active")
                } else e.removeClass(a, "input-error"), e.removeClass(s, "is-active")
            },
            submitOrg: function (e) {
                e.preventDefault();
                var n = t.byId("orgKey").value,
                    i = t.byId("oauth"),
                    a = t.byId("remOrg");
                if (this.validateOrgKey(n)) {
                    a.checked && this.hasStorage && this.storeOrgKey(n);
                    var s = location.protocol + "//" + n + "." + this.authInfo.orgUrlBase + this.authInfo.contextPath + "/rest/oauth2/authorize";
                    i.action = s, i.submit()
                }
            },
            validateOrgKey: function (n) {
                var i, a = !0,
                    s = t.byId("orgKey-error"),
                    r = t.byId("orgKey");
                return 0 == n.length ? (a = !1, i = this.i18n.orgUrlRequired) : /[^A-Za-z0-9_-]/.test(n) ? (a = !1, i = this.i18n.invalidCharacters) : n.length > 36 && (a = !1, i = this.i18n.tooManyCharacters), a ? (e.removeClass(r, "input-error"), e.removeClass(s, "is-active")) : (s.innerHTML = i, e.addClass(r, "input-error"), e.addClass(s, "is-active")), a
            },
            removeSavedOrg: function (n) {
                n.preventDefault(), n.stopImmediatePropagation();
                var i = n.currentTarget,
                    a = e.closest("entpanel", i),
                    s = i.getAttribute("data-index");
                if (s && this.hasStorage) {
                    var r = "orgKey" + s;
                    localStorage.removeItem(r), this.storedKeys[s - 1] = void 0, e.addClass(a, "hide");
                    var o = this.getFilteredKeys();
                    0 === o.length && (e.removeClass(t.queryOne(".js-add-enterprise"), "hide"), e.addClass(t.byId("addOrgLink"), "hide"), e.addClass(t.byId("backLink"), "invisible")), o.length < 3 && (e.removeClass(t.byId("remOrgLabel"), "hide"), e.addClass(t.byId("maxOrgsNotice"), "hide"))
                }
            },
            storeOrgKey: function (e) {
                for (var t = this.storedKeys, n = 0; n < 3; n++)
                    if (!t[n]) {
                        localStorage.setItem("orgKey" + (n + 1), e), this.storedKeys[n] = e;
                        break
                    }
            },
            readOrgKeys: function () {
                for (var e = [], t = 1, n = null; t < 4; t++)(n = localStorage.getItem("orgKey" + t)) && (e[t - 1] = n);
                return e
            },
            getFilteredKeys: function () {
                return this.storedKeys.filter(function (e) {
                    return e
                })
            },
            _checkStorage: function () {
                var e = !0;
                try {
                    e = window.localStorage && "function" == typeof window.localStorage.getItem, localStorage.setItem("testitem", "true"), e = "true" == localStorage.getItem("testitem"), localStorage.removeItem("testitem")
                } catch (t) {
                    e = !1
                }
                return e
            }
        }), a
    }), define("text!components/../../contents/enterpriseInfo.html", [], function () {
        return '<div class="flat-section padded-section">\n    <div class="flat-content flex flex-columns" aria-level="4" aria-expanded="true">\n        {{#info.enterpriseLogins}}\n        <div class="btn btn-fill pointer js-entpanel entpanel text-left" tabindex="0">\n            <div class="font-size--3 js-entlogin" data-url="{{authorizeUrl}}" href="#">\n                {{name}}{{#info.hubRelated}}<br><span class="avenir-light">{{orgName}}</span>{{/info.hubRelated}}\n            </div>\n        </div>\n        {{/info.enterpriseLogins}}\n        {{^info.canSignInArcGIS}}\n        <form action="" class="hide" id="oauth" method="POST">\n            <input type="hidden" name="oauth_state" id="oauth_state" value="{{info.oauth_state}}">\n        </form>\n        {{/info.canSignInArcGIS}}\n    </div>\n</div>\n'
    }), define("components/EnterpriseInfo", ["calcite-web", "helpers", "./ExpandSection", "text!../../contents/enterpriseInfo.html"], function (e, t, n, i) {
        function a(e) {
            e.template = i, n.call(this, e)
        }
        return a.prototype = Object.create(n.prototype), t.extend(a.prototype, {
            defaultClass: "enterprise-info",
            constructor: a,
            render: function () {
                n.prototype.render.call(this), this.authInfo && (this.authInfo.hubRelated || e.nodeListToArray(t.query(".btn.text-left", this.root)).forEach(function (t) {
                    e.removeClass(t, "text-left")
                }))
            },
            addEventHandlers: function () {
                n.prototype.addEventHandlers.call(this), e.nodeListToArray(t.query(".js-entlogin")).forEach(function (t) {
                    e.addEvent(t, "click", this.doEnterpriseLogin.bind(this))
                }.bind(this)), e.nodeListToArray(t.query(".js-entpanel")).forEach(function (n) {
                    e.addEvent(n, "keyup", this.keyEnterprisePanel.bind(this)), e.addEvent(n, "click", function (e) {
                        t.queryOne(".js-entlogin", e.currentTarget).click()
                    })
                }.bind(this))
            },
            doEnterpriseLogin: function (e) {
                e.preventDefault();
                var n = e.target,
                    i = n.getAttribute("data-url"),
                    a = t.byId("oauth");
                a && (a.action = i, a.submit())
            },
            keyEnterprisePanel: function (e) {
                var n = e.keyCode;
                0 != n && 13 != n && 32 != n || t.queryOne(".js-entlogin", e.target).click()
            }
        }), a
    }),
    function () {
        "use strict";

        function e(e, t, n, i, a, s) {
            t[e] && (n.push(e), !0 !== t[e] && 1 !== t[e] || i.push(a + e + "/" + s))
        }

        function t(e, t, n, i, a) {
            var s = i + t + "/" + a;
            require._fileExists(e.toUrl(s + ".js")) && n.push(s)
        }

        function n(e, t, i) {
            var a;
            for (a in t) !t.hasOwnProperty(a) || e.hasOwnProperty(a) && !i ? "object" == typeof t[a] && n(e[a], t[a], i) : e[a] = t[a]
        }
        var i = /(^.*(^|\/)nls(\/|$))([^\/]*)\/?([^\/]*)/;
        define("i18n", ["module"], function (a) {
            var s = a.config ? a.config() : {};
            return {
                version: "2.0.1+",
                load: function (a, r, o, c) {
                    c = c || {}, c.locale && (s.locale = c.locale);
                    var l, u, d, f = i.exec(a),
                        h = f[1],
                        p = f[4],
                        m = f[5],
                        g = p.split("-"),
                        v = [],
                        b = {},
                        y = "";
                    if (f[5] ? (h = f[1], l = h + m) : (l = a, m = f[4], p = s.locale, p || (p = s.locale = "undefined" == typeof navigator ? "root" : (navigator.language || navigator.userLanguage || "root").toLowerCase()), g = p.split("-")), c.isBuild) {
                        for (v.push(l), t(r, "root", v, h, m), u = 0; u < g.length; u++) d = g[u], y += (y ? "-" : "") + d, t(r, y, v, h, m);
                        r(v, function () {
                            o()
                        })
                    } else r([l], function (t) {
                        var i, a = [];
                        for (e("root", t, a, v, h, m), u = 0; u < g.length; u++) i = g[u], y += (y ? "-" : "") + i, e(y, t, a, v, h, m);
                        r(v, function () {
                            var e, i, s;
                            for (e = a.length - 1; e > -1 && a[e]; e--) s = a[e], i = t[s], !0 !== i && 1 !== i || (i = r(h + s + "/" + m), n(b, {
                                __meta: {
                                    locale: s
                                }
                            })), n(b, i);
                            b.__meta || (b.__meta = {
                                locale: "en"
                            }), o(b)
                        })
                    })
                }
            }
        })
    }(), define("../nls/oauth", {
        root: {
            signInTo: "Sign in to",
            arcgis: "ArcGIS",
            arcgisLogin: "ArcGIS login",
            online: "Online",
            enterprise: "Enterprise",
            enterpriseLogin: "Enterprise login",
            signInUsing: "Using",
            signingIn: "Signing in",
            accessAccountInfo: "wants to access your ArcGIS Online account information",
            accessPortalAccountInfo: "wants to access your {portalName} account information",
            accessEnterpriseInfo: "wants to access your ArcGIS Enterprise account information",
            account: "account",
            username: "Username",
            password: "Password",
            keepMeSignedIn: "Keep me signed in",
            signIn: "Sign In",
            title: "Sign In",
            cancel: "Cancel",
            allow: "Allow",
            recoverUnPwd: "Recover username or password",
            needHelp: "Forgot username or password?",
            needHelpPassword: "Forgot password?",
            needHelpUsername: "Forgot username?",
            or: "or",
            invalidSignin: "Invalid username or password.",
            expiredSession: "Unable to sign in. Make sure you type in your username and password correctly. Your password is case sensitive.",
            sessionTimedOut: "Your session has timed out. Please try again.",
            passwordErrorLines: "Unable to sign in<br>Make sure you type in your username and password correctly.<br>Your password is case sensitive.",
            toManyLogins: "Too many invalid logins. Please try again in approximately 15 minutes.",
            invalidResetLink: "Your Password reset request has expired. Please try again.",
            passwordRequired: "Password is required",
            approve: "Approve",
            deny: "No Thanks",
            signInAs: "Sign in with another account",
            developedBy: "developed by:",
            developedBy2: "Developed by",
            developedByOrg: "Developed by {orgname}",
            googleLogin: "Sign in with Google",
            facebookLogin: "Sign in with Facebook",
            esriLogin: "Sign in with Esri",
            google: "Google",
            facebook: "Facebook",
            github: "GitHub",
            apple: "Apple",
            signInWithSocial: "Sign in with",
            signInWithEnt: "Sign in with",
            signInWithOrg: "Sign in to {orgname} with",
            orgkeylabel: ".maps.arcgis.com",
            continue: "Continue",
            backBtn: "< Back",
            organization: "Organization",
            myorg: "My Organization",
            myorgs: "My Organizations",
            myorgmsg: "Enter your ArcGIS organization's URL below.",
            yourOrgUrl: "Your ArcGIS organization's URL",
            addOrgUrl: "Enter another organization",
            rememberUrl: "Remember this URL",
            addUrl: "Enter another URL",
            approvalTitle: "Request for Permission",
            orgUrlRequired: "A valid organization URL is required",
            invalidCharacters: "Invalid characters in organization URL",
            tooManyCharacters: "Organization URL is too long",
            maxSavedOrgs: "Only 3 URL's can be saved at a time. You can remove a saved URL to remember another.",
            protocol: "https://",
            signOutMsg: "You've been successfully signed out.",
            signOutTitle: "Sign Out",
            resetPasswordSuccessMsg: "You can now sign in using your new password, and can close this browser window.",
            resetPasswordSuccessTitle: "Password successfully changed",
            resetPasswordLinkExpiredOrInvalid: "The Change Password link has expired. Please submit a new request by clicking the Forgot password link on the Sign In page.",
            resetPasswordLinkExpiredOrInvalidTitle: "Expired / Invalid Change Password Link",
            userNotMemberOfOrg: "The username you entered is not a member of this organization.",
            portalUserCantReset: "Please contact your administrator for assistance with resetting of your password.",
            signinArcgis: "<a href={rootLogin}>Sign in on ArcGIS Online.</a>",
            userDisabled: "Your account has been disabled by your organization.",
            userBlocked: "Your account has been blocked from logging in. Please contact <a href='https://www.esri.com/en-us/contact#c=us&t=3'>Customer Service</a> for the status of your account.",
            userExpired: "Your subscription has been cancelled. Please contact <a href='https://www.esri.com/en-us/contact#c=us&t=3'>Customer Service</a> for assistance.",
            userInsufficient: "You do not have sufficient user priveleges to access this application",
            noMsg: "No",
            "or-social": "OR",
            disabledAccount: "Unable to sign you in. Please contact Customer Service for assistance.",
            noAccount: "No account?",
            createPublic: "Create a public account.",
            createHubAcct: "Create a {hubname} account.",
            createPortalAcct: "Create an account",
            notMember: "Not a member of this organization?",
            signInAgol: "Sign in to your account on ArcGIS Online",
            signInOrgAcct: "Sign in to your ArcGIS organizational account.",
            passwordStrength: "Password strength",
            weakPassword: "Password is too weak.",
            learnMore: "Click to learn more.",
            none: "None",
            weak: "Weak",
            fair: "Fair",
            good: "Good",
            secure: "Strong",
            privacy: "Privacy",
            resetPage: {
                passwordsMust: "Passwords must:",
                resetTitle: "Reset Password",
                changeTitle: "Change your password",
                title: "Reset your password",
                resetPasswordMsg: "It's time to change your password.",
                resetPasswordPolicyMsg: "It's time to change your password.",
                showRules: "Follow these rules.",
                policyMsg: "<a href='#'>Follow these rules.</a>",
                changePasswordBtn: "Change Password",
                setNewPassword: "Set a new password",
                oldPasswordLbl: "Old password",
                newPasswordLbl: "New password",
                confirmPasswordLbl: "Confirm new password",
                passwordsMustMatch: "New password and confirm new password values must match.",
                passwordsMustExist: "Passwords may not be blank.",
                minimumStrengthRequirement: "Your new password did not meet the minimum strength requirements. Click the link below to learn more about password rules.",
                minimumStrengthRequirementLink: "Your new password did not meet the minimum strength requirements. <a href='#' class='js-password-link'>Learn more about the password requirements</a>",
                minimumStrengthRequirementEsri: "The new password must be at least 8 characters and have at least one number and one letter.",
                unableToReset: "Unable to reset your password. Please try again.",
                oldPasswordNewPasswordSame: "The new password cannot be same as the old password.",
                invalidOldPassword: "The old password was not correct. Please re-enter your old password.",
                updateOldPassword: "Your password does not meet the ArcGIS Online password requirements. Please update your password.",
                accountDisabled: "This account has been disabled by your organization.",
                accountBlocked: "This account has been blocked from logging in. Please contact Customer Service for the status of this account.",
                incorrectSecurityResponse: "Invalid security response for resetting password.",
                invalidAnswerOrg: "Invalid security question response. Please contact your organization's administrator for help in resetting your password.",
                invalidAnswerPublic: "Invalid security question response. <a href='https://www.esri.com/en-us/contact#c=us&t=0'>Contact Esri Customer Service</a>.",
                noSecurityPortal: "Either you are using an enterprise account which does not support resetting the password, or the security question and answer has not been configured for your account. Without a valid security question and answer, your password cannot be reset at this time. Please contact your portal administrator to reset your password.",
                minLength: "Be at least {minLength} characters long.",
                minUpper: "Contain at least {minUpper} upper case letter(s) (A-Z).",
                minLower: "Contain at least {minLower} lower case letter(s) (a-z).",
                minLetter: "Contain at least {minLetter} letter(s) (A-Z, a-z).",
                minDigit: "Contain at least {minDigit} number(s) (0-9).",
                minOther: "Contain at least {minOther} special (!\"#$%&'()*+,-./\\:;<=>?@[]^_`{|}~) character(s).",
                historySize: "New Password must be different than the last {historySize} password(s).",
                cantMatchUsername: "Not match username.",
                weakPassword: "Be hard to guess and not a common word.",
                backBtn: "< Back"
            },
            mfaEanblePage: {
                title: "Multifactor Authentication",
                step1Message: "Follow these steps to add an extra level of security to your account.  Once you're finished, you'll be asked for additional security information each time you sign in to your account from any computer or device.",
                helpLinkMfa: "Learn more about multifactor authentication",
                step1: '1. Install a <a target="_blank" id="helpAuthApp" href="">supported authenticator app</a> on your phone.',
                step2: "2. Use the app to scan this QR code:",
                step3: "3. Once you've scanned the QR code or entered the verification code, enter the six-digit code the app provides.",
                installApp: "Install a supported authenticator app on your device",
                scanCode: "Use the app to scan this QR code",
                qrCodeAlt: "QR Code for multifactor authentication",
                qrHelpLink: "Can't scan the code?",
                seedMsg: "Enter the following verification code in the appropriate location of the app",
                mfaVerifyMsg: "Use your authentication app to generate a six-digit code in order to complete the sign in process.",
                authCodeLbl: "Enter code:",
                authCodeLbl2: "Enter the code your app provided:",
                enterCode: "Enter the six-digit verification code the app provides",
                sixdigitcode: "6 digit code",
                prevBtn: "Back",
                nextBtn: "Next",
                doneBtn: "Done",
                finishBtn: "Finish",
                verifyBtn: "Verify",
                verifying: "Verifying",
                invalidVerificationCode: "Invalid verification code",
                havingTrouble: "Having trouble signing in with your code?",
                exitMfa: "Exit multifactor setup",
                exitMfaSetup: "If you exit the setup, you will not be asked to enter a verification code when you sign in.",
                cancelMfa: "Yes",
                cancelMfaSetup: "Are you sure you want to proceed without enabling multifactor authentication?",
                continueSetup: "Stay",
                exitSetup: "Leave",
                missingCode: "A valid 6 character code is required"
            },
            forgotPassword: {
                title: "Request for Assistance",
                forgotUsernameMsg: "Please provide the information requested below associated with your login.  We'll send you an email with a way to resolve the issue.",
                forgotUserPass: "Forgot username or password?",
                forgotPass: "Forgot password",
                retrieveUser: "Retrieve username",
                emailLbl: "Email",
                sendBtn: "Send",
                usernameLbl: "Username",
                continueBtn: "Continue",
                passwordLbl: "Password",
                forgotMyLbl: "I forgot my",
                finishedMsg: "Please check your email for a message that will help you resolve this issue.",
                backBtn: "< Back",
                okBtn: "OK",
                back: "Back",
                continue: "Continue",
                provideInformation: "Provide the information requested below associated with your login.",
                provideEmail: "Please provide the email address associated with your ArcGIS account.",
                provideUsername: "Please provide the username associated with your ArcGIS account.",
                missingInformation: "Please provide the information below.",
                invalidEmail: "Email does not appear to be valid.",
                inputError: "Please provide the information requested"
            },
            termsOfUse: {
                approve: "Accept",
                deny: "Do Not Accept",
                termsConditions: "Terms and Conditions",
                decline: "Decline",
                ok: "OK"
            },
            createAccount: {
                title: "Create ArcGIS Account",
                titleJoin: "Create ArcGIS Account",
                windowTitle: "Create Account",
                acceptTermsTitle: "Accept Terms and Conditions",
                createPublic: "Create an ArcGIS Public Account",
                setupPublic: "Set up your ArcGIS Public Account",
                readTermsOfUseMsg: 'Review the <a target="_blank" href="{touHref}">Terms Of Use</a> and <a target="_blank" href="{privacyHref}">Privacy Policy</a>',
                touOtherLanguages: "Review the Terms of Use and Privacy Policy in other select languages",
                acceptTermsOfUse: "I accept and agree to be legally bound by the Esri ArcGIS Online Terms of Use and Privacy Policy.",
                acceptTermsOfUse1: 'I agree to <a target="_blank" href="https://www.esri.com/en-us/legal/terms/full-master-agreement">Esri\'s Terms of Use.</a> <a target="_blank" href="https://www.esri.com/en-us/legal/terms/master-agreement-product">Review the Terms of Use in other select languages.</a>',
                acceptTermsOfUse2: 'I agree to Esri\'s <a target="_blank" href=" https://www.esri.com/en-us/privacy/privacy-statements/privacy-statement">Esri\'s Privacy Statement.</a> <a target="_blank" href="http://www.esri.com/legal/privacy">Learn more about privacy at Esri.</a>',
                acceptLegal: "I accept and agree to be legally bound by",
                arcgisTou: "Esri ArcGIS Online Terms of Use",
                arcgisPrivacy: "Esri ArcGIS Online Privacy Policy",
                hubTou: "{hubname} Terms of Use and Privacy Policy",
                createAccountBtn: "Create Account",
                cancelBtn: "Cancel",
                noAccountMsg: "We just need you to create an ArcGIS Public Account associated with your {provider} credentials.",
                createNewAccountBtn: "Continue",
                createAccountOptions: "You can either:",
                createAccountOption1: "Create a new ArcGIS Public Account that you can sign in to with your {provider} credentials.",
                createAccountOption2: "Sign in to your existing account using the credentials you have already established for it.",
                useOtherCredentialsBtn: "Cancel",
                google: "Google",
                facebook: "Facebook",
                social: "providers",
                signInFailed: "You're Almost Done",
                createNewAccountMsg: "An ArcGIS Public Account is a personal account with limited usage and capabilities and is meant for non-commercial use only.",
                publicAcctLimit: "An ArcGIS public account is a free account designed for personal, non-commercial use.",
                publicAcctCanDo: "With a public account you can",
                publicAcctCan1: "Create, store, and manage maps, scenes, layers, apps, and other geospatial content.",
                publicAcctCan2: "Share content with others.",
                publicAcctCan3: "Access content shared by Esri and GIS users around the world.",
                createHubAcct: "Create a {hubname} account",
                setupHubAcct: "Set up your {hubname} account",
                hubAcctCanDo: "A {hubname} account allows you to",
                hubAcctCan1: "Follow initiatives and events for updates",
                hubAcctCan2: "Sign up to attend events",
                hubAcctCan3: "Create web maps and story maps",
                firstName: "First name",
                lastName: "Last name",
                nameLbl: "Name",
                email: "Email",
                confirmEmail: "Confirm email",
                promptEmailMsg: "Please enter your email address",
                promptUsernameMsg: "We've selected this username for you.  You can change it if you want.",
                promptUsernameTitle: "Here's your username",
                cancelUsernameBtn: "Cancel",
                usernameLbl: "Username",
                passwordLbl: "Password",
                usernameHelpTip: "Usernames must be between 6 and 128 characters in length.",
                usernameTakenError: "The username {username} is not available.  Please select another username.",
                cancelEmailBtn: "Cancel",
                nextBtn: "Next",
                missingEmail: "Please provide an email below.",
                missingUsername: "Please provide a username below.",
                or: "OR",
                createAcctWith: "Create account with",
                usernameMust: "The username must",
                usernameReq1: "Be between 6 and 128 characters in length",
                usernameReq2: "Not include special characters other than . (dot), _ (underscore), @ (at sign), and - (hyphen)",
                usernameReq3: "Not include nonalphanumeric characters",
                usernameReq4: "Not include spaces",
                usernameReq5: "Not include a . (dot), - (hyphen), _ (underscore) or @ (at sign) as the first or last character of the username",
                passwordMust: "The password must",
                passwordReq1: "Not match the username",
                passwordReq2: "Be at least 8 characters in length",
                passwordReq3: "Have at least one letter",
                passwordReq4: "Have at least one number",
                retypePassword: "Retype password",
                confirmPassword: "Confirm password",
                securityQuestion: "Security question",
                selectOne: "Select one",
                answer: "Answer",
                joiningOrg: "By joining {organization}:",
                invalidSignupTitle: "Activation Expired",
                invalidSignup: "Account Activation Expired",
                invalidSignupMsg: "The activation link to create your account has expired. Return to the Sign In page to try again.",
                itemsMsg: "Any items you have in the account you sign in with will become part of the organization's content <strong>and can be modified or deleted by the administrator</strong>.",
                accountManagedMsg: "Your account will be managed by the administrator who may reset your password, change your email address, and determine access to My Esri and Community and Forums.",
                leaveOrganization: "If you leave the organization your username may be removed from ArcGIS Online. Your access to Esri websites may be disabled as well, which can include training classes and support incidents.",
                errors: {
                    missing_firstName: "First name is required",
                    missing_lastName: "Last name is required",
                    missing_email: "Email is required",
                    missing_confirm: "Email is required",
                    missing_username: "A valid username is required",
                    missing_password: "A valid password is required",
                    missing_confirmPass: "A matching password is required",
                    missing_oldPassword: "Must provide a password",
                    missing_answer: "Must provide an answer to security question",
                    missing_question: "A security question is required",
                    missing_terms: "Must agree to Terms of Use",
                    missing_hubterms: "Must agree to Terms of Use",
                    missing_privacy: "Must agree to Privacy Policy",
                    invalid_email: "Email address is not valid",
                    invalid_username: "Must provide a valid username",
                    invalid_password: "Must provide a valid password",
                    invalid_confirmPass: "Passwords must match",
                    invalid_firstName: "Name can not be over 40 characters",
                    invalid_lastName: "Name can not be over 40 characters",
                    unmatched_email: "Emails must match",
                    taken_username: "This username is already taken. Please select another username.",
                    invalid_answer: "Answer is not valid or contains invalid characters",
                    common_password: "Password is too commonly used and easily guessed",
                    weak_password: "Password doesn't meet the minimum strength requirements",
                    long_name: "Name can not be over 40 characters"
                }
            },
            securityQuestion: {
                title: "Change your password",
                windowTitle: "Update security question",
                securityQuestionMsg: "First, please answer your security question.",
                securityQuestionMfaMsg: "Please answer your security question.  If you answer it correctly, your organization's administrator will receive a request to disable your multifactor authentication setting, allowing you to sign in with just your username and password.  You'll receive an email letting you know when you can do so.",
                securityQuestionMfaMsg2: "Answer your security question to request that your administrator disable multifactor authentication for your account. This will enable you to sign in with just your user name and password. You'll receive an email letting you know when you can do so.",
                securityQuestion: "Email:",
                securityQuestionPrompt: "Security answer is not case sensitive.",
                securityQuestionPromptEnt: "Security answer is case sensitive.",
                continueBtn: "Continue",
                backBtn: "< Back",
                answerMustExist: "Security answer may not be blank.",
                answerSecurityQuestion: "To reset your password, first answer your security question. The answer is not case-sensitive.",
                answerSecurityQuestionEnt: "To reset your password, first answer your security question. The answer is case-sensitive.",
                noSecurityQuestionTitle: "No security question",
                noSecurityQuestion: "There is not a security question set for your account.  Please contact your ArcGIS Online Administrator for assistance.",
                setSecurityQuestionTitle: "You must set up a security question and answer to continue signing in. The security question will be used to identify and recover your password if you ever forget it",
                yourAnswer: "Your answer",
                finishedTitle: "Password Changed",
                finishedTitleMfa: "Disable MFA Request Sent",
                finishedMessage: "Your password has been successfully changed.",
                finishedMfaMessage: "Your organization's administrators will receive a request to disable your multifactor authentication setting, allowing you to sign in with just your username and password.  You'll receive an email letting you know when you can do so.",
                okBtn: "OK",
                securityQuestionHelp: "Security answer is not case sensitive.",
                securityQuestionHelpEnt: "Security answer is case sensitive.",
                newPasswordHelp: "Now supply a new password.",
                disableMfa: "Disable multifactor authentication"
            },
            selectUser: {
                windowTitle: "Select Account",
                tutorialPanel: "Please select the account you'd like to use.",
                titleTemplate: "You have multiple accounts that use your {providerName} credentials.",
                altText: "Profile image for {username}",
                signInToOrg: "Sign in to an organization",
                signInToAcct: "Sign in to an account",
                userProfileImg: "User profile image"
            },
            updateProfile: {
                windowTitle: "Select Account",
                tutorialPanel: "Please select the account you'd like to use.",
                titleTemplate: "You have multiple accounts that use your {providerName} credentials.",
                altText: "Profile image for {username}",
                securityQuestionMessage: "A security question has not been set for your account. Setting a security question and answer allows you to reset your password if needed.  Choose a question from the drop down menu below and enter your answer in the input box provided.",
                notRightNow: "Not right now",
                okBtn: "OK",
                answerLbl: "Answer:",
                securityQuestionLbl: "Security Question:",
                securityQuestionTitle: "Security Question and Answer",
                missingAnswer: "Please provide an answer to the selected security question.",
                identityAnswerTooLong: "The answer to your security question may not be more than 60 characters."
            },
            email: {
                title: "Email sent",
                emailSent: "An email has been sent to you.",
                activationSent: "An activation link has been sent to your email.",
                furtherInstructions: "Check the email associated with your account for further instructions.",
                clickLink: "Click the link in the email to complete account activation.",
                returnSignIn: "Return to sign in",
                returnArcgis: "Return to ArcGIS.com"
            },
            securityQuestions: {
                1: "What city were you born in?",
                2: "What was your high school mascot?",
                3: "What is your mother's maiden name?",
                4: "What was the make of your first car?",
                5: "What high school did you go to?",
                6: "What is the last name of your best friend?",
                7: "What is the middle name of your youngest sibling?",
                8: "What is the name of the street on which you grew up?",
                9: "What is the name of your favorite fictional character?",
                10: "What is the name of your favorite pet?",
                11: "What is the name of your favorite restaurant?",
                12: "What is the title of your favorite book?",
                13: "What is your dream job?",
                14: "Where did you go on your first date?"
            }
        },
        ar: 1,
        bs: 1,
        ca: 1,
        cs: 1,
        da: 1,
        de: 1,
        el: 1,
        es: 1,
        et: 1,
        fi: 1,
        fr: 1,
        he: 1,
        hi: 0,
        hr: 1,
        hu: 1,
        id: 1,
        it: 1,
        ja: 1,
        ko: 1,
        lt: 1,
        lv: 1,
        nl: 1,
        nb: 1,
        pl: 1,
        "pt-br": 1,
        "pt-pt": 1,
        ro: 1,
        ru: 1,
        sl: 1,
        sr: 1,
        sv: 1,
        tr: 1,
        th: 1,
        uk: 1,
        vi: 1,
        "zh-cn": 1,
        "zh-hk": 1,
        "zh-tw": 1
    }), define("socialHelper", ["./icons", "i18n!../nls/oauth"], function (e, t) {
        return {
            addSocialInfo: function (n) {
                n.getSocialIcon = function () {
                    return e[this]
                }, n.capitalize = function () {
                    var e = this;
                    return e && e.length && (e = t[e]), e
                }, n.socialProviders && n.socialProviders.length && n.socialProviders.length > 3 && (n.socialIconsOnly = !0)
            }
        }
    }), define("text!components/../../contents/socialLogin.html", [], function () {
        return '<div class="social-wrapper flex flex-justify">\n    {{#info.socialProviders}}\n    {{^info.socialIconsOnly}}\n    <a class="btn btn-small btn-clear padded-section js-provider-{{.}}" href="{{info.hostname}}{{info.contextPath}}/oauth2/social/authorize?socialLoginProviderName={{.}}&oauth_state={{info.oauth_state}}">\n        {{&info.getSocialIcon}}<span>&nbsp;{{info.capitalize}}</span>\n    </a>\n    {{/info.socialIconsOnly}}\n    {{#info.socialIconsOnly}}\n    <a class="btn btn-fill btn-clear padded-section js-provider-{{.}}" href="{{info.hostname}}{{info.contextPath}}/oauth2/social/authorize?socialLoginProviderName={{.}}&oauth_state={{info.oauth_state}}">\n        <div class="tooltip flex-item" aria-label="{{i18n.signInWithSocial}} {{info.capitalize}}">\n            {{&info.getSocialIcon}}\n        </div>\n    </a>\n    {{/info.socialIconsOnly}}\n    {{/info.socialProviders}}\n</div>\n'
    }), define("components/SocialLogin", ["helpers", "../socialHelper", "./Section", "text!../../contents/socialLogin.html"], function (e, t, n, i) {
        function a(e) {
            e.template = i, n.call(this, e)
        }
        return a.prototype = Object.create(n.prototype), e.extend(a.prototype, {
            defaultClass: "social-login",
            constructor: a,
            render: function () {
                t.addSocialInfo(this.authInfo), n.prototype.render.call(this)
            },
            addEventHandlers: function () {
                n.prototype.addEventHandlers.call(this)
            }
        }), a
    }), define("text!components/../../contents/createAcctLink.html", [], function () {
        return '<div class="text-center font-size--3 padded-section">\n    {{i18n.noAccount}}&nbsp;\n    {{^info.isPortal}}\n        {{#info.publicSignup}}\n        <a href="{{info.hostname}}{{info.contextPath}}/oauth2/signup?oauth_state={{info.oauth_state}}" id="createAcctLink">\n            {{#info.hubRelated}}{{i18n.createHubAcct}}{{/info.hubRelated}}\n            {{^info.hubRelated}}{{i18n.createPublic}}{{/info.hubRelated}}\n        </a>\n        {{/info.publicSignup}}\n        {{#info.esriSignup}}\n        <a href="{{info.signupLink}}">{{i18n.createPortalAcct}}</a>\n        {{/info.esriSignup}}\n    {{/info.isPortal}}\n    {{#info.isPortal}}\n    <a href="{{info.portalhost}}/home/signup.html?oauth_state={{info.oauth_state}}" id="createAcctLink">{{i18n.createPortalAcct}}</a>\n    {{/info.isPortal}}\n</div>\n'
    }), define("components/CreateAcctLink", ["calcite-web", "helpers", "./Section", "text!../../contents/createAcctLink.html"], function (e, t, n, i) {
        function a(e) {
            this.hubRelated = e.info && (e.info.hubEnabled || e.info.isCommunity), e.template = i, n.call(this, e)
        }
        return a.prototype = Object.create(n.prototype), t.extend(a.prototype, {
            defaultClass: "create-acct",
            constructor: a,
            render: function () {
                if (this.hubRelated && (this.authInfo.hubRelated = !0, this.setHubInfo()), this.authInfo.isPortal && (this.authInfo.portalhost = t.getPortal()), n.prototype.render.call(this), this.hubRelated) {
                    var e = t.byId("createAcctLink");
                    e && (e.innerHTML = t.sub(e.innerHTML, {
                        hubname: this.authInfo.hubname
                    }))
                }
            },
            addEventHandlers: function () {
                n.prototype.addEventHandlers.call(this)
            },
            setHubInfo: function () {
                var e = this.authInfo,
                    t = e.isCommunity ? e.orgName : e.companionOrganizations && e.companionOrganizations[0] && e.companionOrganizations[0].orgName;
                e.hubname = t
            }
        }), a
    }), define("text!components/../../contents/appInfo.html", [], function () {
        return '<section class="app-banner text-center font-size--3">\n    {{^info.isPortal}}\n    <span class="avenir-demi">{{info.appTitle}}</span>&nbsp;{{i18n.accessAccountInfo}}&nbsp;\n    {{/info.isPortal}}\n    {{#info.isPortal}}\n    <span class="avenir-demi">{{info.appTitle}}</span>&nbsp;{{i18n.accessPortalAccountInfo}}\n    {{/info.isPortal}}\n    {{#info.appOrgInfo}}\n    <a class="js-modal-toggle help-toggle" data-modal="appinfo" tabindex="0">\n        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="svg-icon svg-icon-light-blue svg-icon-live svg-icon-large" focusable="false">\n            {{&icons.help}}\n        </svg>\n    </a>\n    {{/info.appOrgInfo}}\n</section>\n'
    }), define("text!components/../../contents/appInfoModal.html", [], function () {
        return '{{#info.appOrgInfo}}\n<div class="js-modal modal-overlay" data-modal="appinfo">\n    <div class="modal-content" role="dialog" aria-labelledby="modal" role="dialog">\n        <h4>{{info.appTitle}}</h4>\n        <a class="js-modal-toggle right modal-close" aria-label="Close modal" tabindex="0">\n            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svg-icon svg-icon-gray svg-icon-live" width="24" height="24" focusable="false">\n                {{&icons.close}}\n            </svg>\n        </a>\n        <div class="clearfix trailer-half flex flex-justify">\n            {{#info.appOrgInfo.thumbnail}}\n            <img class="left app-logo" src="{{info.hostname}}{{info.contextPath}}/oauth2/apps/{{info.client_id}}/vendorinfo/{{info.appOrgInfo.thumbnail}}">\n            {{/info.appOrgInfo.thumbnail}}\n            <div>\n                <div class="text-dark-gray font-size--2">{{i18n.developedBy2}}</div>\n                <div class="font-size-0">{{info.appOrgInfo.name}}</div>\n            </div>\n        </div>\n        <div>{{&info.appOrgInfo.description}}</div>\n    </div>\n</div>\n{{/info.appOrgInfo}}\n'
    }), define("components/AppInfo", ["helpers", "calcite-web", "./Section", "text!../../contents/appInfo.html", "text!../../contents/appInfoModal.html"], function (e, t, n, i, a) {
        function s(t) {
            t.template = i + a, t.type = "div", t.parent = e.byId("appInfo"), n.call(this, t)
        }
        return s.prototype = Object.create(n.prototype), e.extend(s.prototype, {
            defaultClass: "app-info",
            constructor: s,
            render: function () {
                n.prototype.render.call(this), this.authInfo.isPortal && (this.parent.innerHTML = e.sub(this.parent.innerHTML, {
                    portalName: this.authInfo.orgName
                }))
            },
            addEventHandlers: function () {
                n.prototype.addEventHandlers.call(this), t.nodeListToArray(e.query(".js-modal-toggle")).forEach(function (e) {
                    t.addEvent(e, "keydown", function (e) {
                        "Tab" !== e.key && 9 !== e.keyCode && (e.preventDefault(), "Space" != e.key && "Enter" != e.key && 0 != e.keyCode && 13 != e.keyCode && 32 != e.keyCode || e.target.click())
                    })
                })
            }
        }), s
    }), define("text!components/../../contents/arcgisLinkback.html", [], function () {
        return '<div class="text-center font-size--3 padded-section">\n  {{i18n.notMember}}<br>\n  <a href="{{info.linkbackUrl}}" id="wwwLinkback">\n      {{i18n.signInAgol}}\n  </a>\n</div>\n'
    }), define("components/ArcgisLinkback", ["calcite-web", "helpers", "./Section", "text!../../contents/arcgisLinkback.html"], function (e, t, n, i) {
        function a(e) {
            e.template = i, n.call(this, e)
        }
        return a.prototype = Object.create(n.prototype), t.extend(a.prototype, {
            defaultClass: "agol-linkback",
            constructor: a,
            render: function () {
                this.authInfo.linkbackUrl = this._getAgolLink(), n.prototype.render.call(this)
            },
            addEventHandlers: function () {
                n.prototype.addEventHandlers.call(this)
            },
            _getAgolLink: function () {
                var e = this.authInfo,
                    t = this.authInfo.refUrl && "function" == typeof URL && new URL(this.authInfo.refUrl) || window.location,
                    n = e.orgUrlBase.split("."),
                    i = n.shift();
                i = i.replace("maps", ""), 0 === i.length ? i = "www" : "qa" == i && (i = "qaext"), n.unshift(i);
                var a = t.protocol + "//" + n.join(".") + this.authInfo.contextPath + "/rest/oauth2/authorize";
                if (t.search.length) {
                    var s = window.opener ? t.search : this._replaceOrgKey(t.search, n.join("."));
                    s = this._stripResourceItem(s), a += s + t.hash
                } else a += "?oauth_state=" + this.authInfo.oauth_state;
                return a
            },
            _replaceOrgKey: function (e, t) {
                var n = "%2F([A-Za-z0-9_\\-]+\\." + this.authInfo.orgUrlBase.split(".").join("\\.") + ")",
                    i = e.match(new RegExp(n));
                if (i && i[1]) {
                    var a = new RegExp(i[1], "g");
                    e = e.replace(a, t)
                }
                return e
            },
            _stripResourceItem: function (e) {
                return e = e.slice(1), "?" + e.split("&").filter(function (e) {
                    return -1 == e.indexOf("resourceItemId")
                }).join("&")
            }
        }), a
    }), define("text!../contents/signin.html", [], function () {
        return '<div>\n    <div id="appInfo"></div>\n    <div class="content">\n        <div class="content-wrap">\n            <div class="js-header header-bar flex flex-justify">\n                <div class="font-size-1 page-title width-full">\n                    {{^info.orgName}}{{i18n.signInWithEnt}}{{/info.orgName}}\n                    {{#info.orgName}}<span class="js-orgname">{{i18n.signInWithOrg}}</span>{{/info.orgName}}\n                </div>\n                {{^info.signinThumbnail}}{{&icons.esriSvg}}{{/info.signinThumbnail}}\n                {{#info.signinThumbnail}}\n                <div class="custom-logo">\n                    <img src="{{info.hostname}}{{info.contextPath}}/rest/oauth2/orgInfo/{{info.signinThumbnail}}" alt="" />\n                </div>\n                {{/info.signinThumbnail}}\n            </div>\n            <div id="loginComponents">\n                <div tabindex="0" class="alert alert-red js-message" id="errMessage"></div>\n            </div>\n        </div>\n    </div>\n</div>\n'
    }), define("signIn", ["calcite-web", "helpers", "mustache", "config", "components/PrivacyLink", "components/ArcgisLogin", "components/MyOrgs", "components/EnterpriseInfo", "components/SocialLogin", "components/CreateAcctLink", "components/AppInfo", "components/ArcgisLinkback", "icons", "i18n!../nls/oauth", "text!../contents/signin.html"], function (e, t, n, i, a, s, r, o, c, l, u, d, f, h, p) {
        return {
            hubRelated: !1,
            startup: function (n) {
                this.authInfo = n, document.documentElement.lang = n.locale, t.setTitle(h.title || h.windowTitle), t.checkRTL(n.locale), this.compose(n), e.init(), t.setContrastInfo()
            },
            compose: function (m) {
                var g = t.queryOne(".content-container"),
                    v = [];
                m.hostname = t.getPortalHostname(m, m.refUrl), m.hideAppInfo = m.hideAppInfo || i.hideAppInfo.indexOf(m.client_id) > -1, this.hubRelated = m.hubRelated = m.hubEnabled || m.isCommunity, this.setEnterpriseInfo(m), g.innerHTML = n.render(p, {
                    info: m,
                    i18n: h,
                    icons: f
                }), m.hideAppInfo || v.push(u), this.hubRelated ? (m.socialProviders && m.showSocialLogins && !1 !== m.canSignInSocial && (!m.join || m.hideEnterpriseLogins) && v.push(c), m.join ? m.hideEnterpriseLogins ? v.push({
                    type: s,
                    config: {
                        expanded: !0,
                        collapsible: !1
                    }
                }) : (m.idpOnly = !0, m.canSignInArcGIS = !1, v.push({
                    type: o,
                    config: {
                        expanded: !0,
                        collapsible: !1
                    }
                })) : (m.hasEnterprise && v.push({
                    type: o,
                    config: {
                        expanded: !0,
                        collapsible: !1
                    }
                }), !1 !== m.canSignInArcGIS && v.push({
                    type: s,
                    config: {
                        expanded: !m.expandEnterprise
                    }
                })), (m.isEnableArcGISAutoSignups || m.isAccountSocialAutoJoins) && (m.publicSignup = !0, v.push(l)), !0 !== m.hideCrossOrgSigninLink && v.push(d)) : (m.join ? m.hideEnterpriseLogins ? v.push({
                    type: s,
                    config: {
                        expanded: !0,
                        collapsible: !1
                    }
                }) : (m.idpOnly = !0, m.canSignInArcGIS = !1, v.push({
                    type: o,
                    config: {
                        expanded: !0,
                        collapsible: !1
                    }
                })) : (m.hasEnterprise && v.push({
                    type: o,
                    config: {
                        expanded: m.expandEnterprise
                    }
                }), !1 !== m.canSignInArcGIS && v.push({
                    type: s,
                    config: {
                        expanded: !m.expandEnterprise
                    }
                })), m.orgName || !0 === m.hideEnterpriseLogins || v.push(r), m.socialProviders && m.showSocialLogins && !1 !== m.canSignInSocial && (!m.join || m.hideEnterpriseLogins) && v.push(c), (m.showSignupOption || m.isPortal && !1 === m.isPortalSignupDisabled && "arcgisonline" == m.client_id) && (m.showSignupOption && ("esri" == m.signupType || "developers" == m.signupType ? m.esriSignup = !0 : m.publicSignup = !0), v.push(l)), m.join || m.isPortal || !m.orgName || !0 === m.hideCrossOrgSigninLink || v.push(d));
                var b = v.filter(function (e) {
                    return "expander" in ("function" == typeof e ? e : e.type).prototype
                });
                1 === b.length && b[0].config && (b[0].config.collapsible = !1), m.isPortal || v.push(a);
                var y = {
                    parent: t.byId("loginComponents"),
                    info: m,
                    i18n: h,
                    type: "section",
                    exclusive: !0,
                    expanded: !1
                };
                this.components = this.buildComponents(v, y), this.displayMessage(m), m.orgName && e.nodeListToArray(t.query(".js-orgname")).forEach(function (e) {
                    e.innerHTML = t.sub(e.innerHTML, {
                        orgname: m.orgName
                    })
                });
                var w, x;
                if (w = m.messageCode || m.messages && m.messages.length ? "errMessage" : m.username ? "user_password" : "user_username", x = t.byId(w), x && x.focus(), e.addEvent(window, "beforeunload", this._clearFields), m.resourceAccountUrlKey && !m.join) {
                    t.query("a[href]").forEach(function (e) {
                        e.href.indexOf("oauth2") >= 0 && -1 == e.href.indexOf("authorize") && (e.href = this.swizzleUrl(e.href, m.resourceAccountUrlKey))
                    }.bind(this));
                    var k = t.queryOne("form");
                    k.action = this.swizzleUrl(k.action, m.resourceAccountUrlKey)
                }
            },
            displayMessage: function (n) {
                var i = "",
                    a = t.queryOne(".js-message");
                n.messages && n.messages[0] && (n.messages[0].indexOf("Invalid username or password") > -1 ? i = h.invalidSignin : "OAUTH_0012" === n.messageCode ? i = h.sessionTimedOut : n.messages[0].indexOf("Your login session has been reset") > -1 ? i = h.expiredSession : "OAUTH_0007" === n.messageCode ? i = h.toManyLogins : n.messages[0].indexOf("User is not a member of this account") > -1 ? (i = h.userNotMemberOfOrg, n.linkbackUrl && (i += " " + t.sub(h.signinArcgis, {
                    rootLogin: n.linkbackUrl
                }))) : i = n.messages[0].indexOf("Your account has been disabled by your organization") > -1 ? h.userDisabled : "SB_0009" === n.messageCode ? h.userBlocked : "SB_0010" === n.messageCode ? h.disabledAccount : "SB_0002" === n.messageCode ? h.userExpired : "OAUTH_0057" === n.messageCode ? h.portalUserCantReset : "OAUTH_0023" === n.messageCode || "OAUTH_0021" === n.messageCode ? h.userInsufficient : n.messages[0].indexOf("Your password reset request") > -1 ? h.invalidResetLink : n.messages[0], a.innerHTML = i || n.messages[0], e.addClass(a, "is-active"))
            },
            setEnterpriseInfo: function (e) {
                var n, i = [];
                e.isCommunity ? (e.oidcFederationInfo && !1 !== e.canSignInOIDC && e.oidcFederationInfo.forEach(function (n) {
                    n.name = n.oidcName, n.authorizeUrl = n.oidcAuthorizeUrl, i.push(t.extend({
                        orgName: e.orgName,
                        type: "community"
                    }, n))
                }), e.federationInfo && !1 !== e.canSignInIDP && (e.federationInfo.name = e.federationInfo.idpName, e.federationInfo.authorizeUrl = e.federationInfo.idpAuthorizeUrl, i.push(t.extend({
                    orgName: e.orgName,
                    type: "community"
                }, e.federationInfo))), n = e.companionOrganizations && e.companionOrganizations[0] || !1, n.oidcFederationInfo && !1 !== n.canSignInOIDC && n.oidcFederationInfo.forEach(function (e) {
                    e.name = e.oidcName, e.authorizeUrl = e.oidcAuthorizeUrl, i.push(t.extend({
                        orgName: n.orgName,
                        type: n.type
                    }, e))
                }), n.federationInfo && !1 !== n.canSignInIDP && (n.federationInfo.name = n.federationInfo.idpName, n.federationInfo.authorizeUrl = n.federationInfo.idpAuthorizeUrl, i.push(t.extend({
                    orgName: n.orgName,
                    type: n.type
                }, n.federationInfo)))) : (n = e.companionOrganizations && e.companionOrganizations[0] || !1, n.oidcFederationInfo && !1 !== n.canSignInOIDC && n.oidcFederationInfo.forEach(function (e) {
                    e.name = e.oidcName, e.authorizeUrl = e.oidcAuthorizeUrl, i.push(t.extend({
                        orgName: n.orgName,
                        type: n.type
                    }, e))
                }), n.federationInfo && !1 !== n.canSignInIDP && (n.federationInfo.name = n.federationInfo.idpName, n.federationInfo.authorizeUrl = n.federationInfo.idpAuthorizeUrl, i.push(t.extend({
                    orgName: n.orgName,
                    type: n.type
                }, n.federationInfo))), e.oidcFederationInfo && !1 !== e.canSignInOIDC && e.oidcFederationInfo.forEach(function (n) {
                    n.name = n.oidcName, n.authorizeUrl = n.oidcAuthorizeUrl, i.push(t.extend({
                        orgName: e.orgName,
                        type: "hub"
                    }, n))
                }), e.federationInfo && !1 !== e.canSignInIDP && (e.federationInfo.name = e.federationInfo.idpName, e.federationInfo.authorizeUrl = e.federationInfo.idpAuthorizeUrl, i.push(t.extend({
                    orgName: e.orgName,
                    type: "hub"
                }, e.federationInfo)))), i.length && (e.hasEnterprise = !0, e.enterpriseLogins = i, e.expandEnterprise = !0)
            },
            buildComponents: function (e, n) {
                var i = this.components || [];
                return e.forEach(function (e) {
                    "function" == typeof e ? i.push(new e(t.extend({}, n))) : "object" == typeof e && e.type && i.push(new e.type(t.extend({}, n, e.config)))
                }), i
            },
            _clearFields: function () {
                var e = t.byId("user_username"),
                    n = t.byId("user_password");
                e && (e.value = ""), n && (n.value = "")
            },
            swizzleUrl: function (e, t) {
                var n = e.split("."),
                    i = n.shift().split("//"),
                    a = i.pop();
                switch (i[1] = t, a) {
                    case "devext":
                        a = "maps" + a;
                        break;
                    case "qaext":
                        a = "mapsqa";
                        break;
                    case "www":
                        a = "maps"
                }
                return n.unshift(i.join("//"), a), n.join(".")
            }
        }
    }), define("text!../contents/troubleshoot.html", [], function () {
        return '<div>\n    <div class="js-header header-bar flex flex-justify">\n        <div class="font-size-1 page-title width-full" id="pageTitle">{{forgotPass}}</div>\n        {{^info.signinThumbnail}}{{&icons.esriSvg}}{{/info.signinThumbnail}}\n        {{#info.signinThumbnail}}\n        <div class="custom-logo">\n        <img src="{{info.hostname}}{{info.contextPath}}/rest/oauth2/orgInfo/{{info.signinThumbnail}}" alt=""/>\n        </div>\n        {{/info.signinThumbnail}}\n    </div>\n    <div tabindex="0" class="alert alert-red js-message trailer-half"></div>\n    <section class="panel-white js-action-pane padded-section">\n        <form action="{{info.hostname}}{{info.contextPath}}/oauth2/troubleshoot" id="oauth" name="f" method="POST" novalidate autocomplete="off">\n            <div class="trailer-quarter" id="provideInfo">{{provideUsername}}</div>\n            <input id="oauth_state" type="hidden" name="oauth_state" value="{{info.oauth_state}}">\n            <input id="forgotMy" type="hidden" name="forgotMy" value="password">\n            <label><span class="js-input-label">{{usernameLbl}}</span>\n                <input type="text" aria-label="{{usernameLbl}}" name="user" id="user" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">\n                <div class="input-error-message js-input-error"></div>\n            </label>\n            <div class="flex">\n                <button type="button" data-state="password" class="btn btn-fill btn-small btn-clear margin-right-1 js-back">{{back}}</button>\n                <button type="button" class="btn btn-fill btn-small margin-left-1 js-next">{{continue}}</button>\n            </div>\n        </form>\n    </section>\n    <div class="js-email-pane hide">\n        <div class="flex trailer-half">\n            <img class="flex-item" src="{{info.contextPath}}/files/img/oauth-email-sent.svg" alt="Email sent">\n        </div>\n        <div class="text-center">\n            <h4 id="primary" class="trailer-half">{{emailSent}}</h4>\n            <div class="trailer-quarter" id="secondary">{{furtherInstructions}}</div>\n            <a id="returnLink" href="{{info.hostname}}{{info.contextPath}}/oauth2/authorize?oauth_state={{info.oauth_state}}" class="font-size--1">{{returnSignIn}}</a>\n        </div>\n    </div>\n    <div class="js-mfa-pane hide">\n        <section class="panel-white trailer-half padded-section">\n            {{finishedMfaMessage}}\n        </section>\n    </div>\n</div>\n'
    }), define("forgot", ["calcite-web", "helpers", "mustache", "icons", "i18n!../nls/oauth", "text!../contents/troubleshoot.html"], function (e, t, n, i, a, s) {
        return {
            startup: function (n) {
                this.authInfo = n, document.documentElement.lang = n.locale, this.checkForRedirect(n), t.setTitle(a.forgotPassword.title || a.forgotPassword.windowTitle), this.render(n), e.init(), this.addEventHandlers(), t.setContrastInfo()
            },
            render: function (e) {
                t.checkRTL(e.locale);
                var r = t.queryOne(".content");
                e.hostname = t.getPortalHostname(e, e.refUrl), r.innerHTML = n.render(s, t.extend({
                    info: e,
                    icons: i
                }, a.forgotPassword, a.email, a.securityQuestion)), e.troubleshootComplete ? "mfa" == e.forgotMy ? this.showMfaMsg() : this.showEmailMsg() : "username" == e.forgotMy && this.swapForgot("username");
                var o = t.byId("user");
                o && o.focus(), this.displayMessage(e)
            },
            addEventHandlers: function () {
                e.addEvent(t.queryOne(".js-next"), "click", this.onContinue.bind(this)), e.addEvent(t.queryOne(".js-back"), "click", this.onBackBtn.bind(this))
            },
            checkForRedirect: function (e) {
                if (e.isPortal && e.troubleshootComplete && !e.isPortalEmailSupported) {
                    var t = e.contextPath + "/rest/oauth2/authorize?oauth_state=" + e.oauth_state;
                    window.location.href = t
                }
            },
            swapForgot: function (n) {
                e.removeClass(t.queryOne(".js-message"), "is-active"), e.removeClass(t.queryOne(".js-input-error"), "is-active"), e.removeClass(t.byId("user"), "input-error"), t.byId("user").value = "", "username" == n ? (t.byId("pageTitle").innerHTML = a.forgotPassword.retrieveUser, t.byId("provideInfo").innerHTML = a.forgotPassword.provideEmail, t.byId("user").setAttribute("aria-label", a.forgotPassword.emailLbl), t.queryOne(".js-input-label").innerHTML = a.forgotPassword.emailLbl, t.byId("forgotMy").value = "username", t.queryOne(".js-back").setAttribute("data-state", "username")) : "password" == n && (t.byId("pageTitle").innerHTML = a.forgotPassword.forgotPass, t.byId("provideInfo").innerHTML = a.forgotPassword.provideUsername, t.byId("user").setAttribute("aria-label", a.forgotPassword.usernameLbl), t.queryOne(".js-input-label").innerHTML = a.forgotPassword.usernameLbl, t.byId("forgotMy").value = "password", t.queryOne(".js-back").setAttribute("data-state", "password"))
            },
            showEmailMsg: function () {
                e.addClass(t.queryOne(".js-action-pane"), "hide"),
                    t.byId("pageTitle").innerHTML = "", e.removeClass(t.queryOne(".js-email-pane"), "hide")
            },
            showMfaMsg: function () {
                e.addClass(t.queryOne(".js-action-pane"), "hide"), t.byId("pageTitle").innerHTML = a.securityQuestion.finishedTitleMfa, e.removeClass(t.queryOne(".js-mfa-pane"), "hide")
            },
            onBackBtn: function () {
                window.location = this.authInfo.hostname + this.authInfo.contextPath + "/oauth2/authorize?oauth_state=" + this.authInfo.oauth_state
            },
            onContinue: function () {
                var n = t.byId("oauth"),
                    i = t.byId("user"),
                    s = t.queryOne(".js-input-error"),
                    r = t.byId("forgotMy").value,
                    o = i.value && i.value.trim();
                o.length ? "username" != r || /@/.test(o) ? n.submit() : (e.addClass(i, "input-error"), s.innerHTML = a.forgotPassword.invalidEmail, e.addClass(s, "is-active")) : (e.addClass(i, "input-error"), s.innerHTML = a.forgotPassword.inputError, e.addClass(s, "is-active"))
            },
            displayMessage: function (n) {
                var i = "",
                    s = t.queryOne(".js-message");
                n.messages && n.messages[0] && (i = n.messages[0].toLowerCase().indexOf("unable to reset your password") > -1 ? a.resetPage.unableToReset : n.messages[0].toLowerCase().indexOf("your login session has been reset") > -1 ? a.expiredSession : n.messages[0], s.innerHTML = i || n.messages[0], e.addClass(s, "is-active"), s.focus())
            }
        }
    }),
    function (e) {
        if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
        else if ("function" == typeof define && define.amd) define("qwest", [], e);
        else {
            var t;
            t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.qwest = e()
        }
    }(function () {
        var e;
        return function e(t, n, i) {
            function a(r, o) {
                if (!n[r]) {
                    if (!t[r]) {
                        var c = "function" == typeof require && require;
                        if (!o && c) return c(r, !0);
                        if (s) return s(r, !0);
                        var l = new Error("Cannot find module '" + r + "'");
                        throw l.code = "MODULE_NOT_FOUND", l
                    }
                    var u = n[r] = {
                        exports: {}
                    };
                    t[r][0].call(u.exports, function (e) {
                        var n = t[r][1][e];
                        return a(n || e)
                    }, u, u.exports, e, t, n, i)
                }
                return n[r].exports
            }
            for (var s = "function" == typeof require && require, r = 0; r < i.length; r++) a(i[r]);
            return a
        }({
            1: [function (t, n, i) {
                ! function (t) {
                    "use strict";
                    var i = function (e) {
                        var t = function (e, t, n) {
                                n = "function" == typeof n ? n() : null === n ? "" : void 0 === n ? "" : n, e[e.length] = encodeURIComponent(t) + "=" + encodeURIComponent(n)
                            },
                            n = function (e, i, a) {
                                var s, r, o;
                                if ("[object Array]" === Object.prototype.toString.call(i))
                                    for (s = 0, r = i.length; s < r; s++) n(e + "[" + ("object" == typeof i[s] ? s : "") + "]", i[s], a);
                                else if (i && "[object Object]" === i.toString())
                                    for (o in i) i.hasOwnProperty(o) && (e ? n(e + "[" + o + "]", i[o], a, t) : n(o, i[o], a, t));
                                else if (e) t(a, e, i);
                                else
                                    for (o in i) t(a, o, i[o]);
                                return a
                            };
                        return n("", e, []).join("&").replace(/%20/g, "+")
                    };
                    "object" == typeof n && "object" == typeof n.exports ? n.exports = i : "function" == typeof e && e.amd ? e([], function () {
                        return i
                    }) : t.param = i
                }(this)
            }, {}],
            2: [function (e, t, n) {
                ! function (e) {
                    function t(e) {
                        return "function" == typeof e
                    }

                    function n(e) {
                        return "object" == typeof e
                    }

                    function i(e) {
                        "undefined" != typeof setImmediate ? setImmediate(e) : "undefined" != typeof process && process.nextTick ? process.nextTick(e) : setTimeout(e, 0)
                    }
                    var a;
                    e[0][e[1]] = function e(s) {
                        var r, o = [],
                            c = [],
                            l = function (e, t) {
                                return null == r && null != e && (r = e, o = t, c.length && i(function () {
                                    for (var e = 0; e < c.length; e++) c[e]()
                                })), r
                            };
                        return l.then = function (l, u) {
                            var d = e(s),
                                f = function () {
                                    function e(i) {
                                        var s, r = 0;
                                        try {
                                            if (i && (n(i) || t(i)) && t(s = i.then)) {
                                                if (i === d) throw new TypeError;
                                                s.call(i, function () {
                                                    r++ || e.apply(a, arguments)
                                                }, function (e) {
                                                    r++ || d(!1, [e])
                                                })
                                            } else d(!0, arguments)
                                        } catch (e) {
                                            r++ || d(!1, [e])
                                        }
                                    }
                                    try {
                                        var i = r ? l : u;
                                        t(i) ? e(i.apply(a, o || [])) : d(r, o)
                                    } catch (e) {
                                        d(!1, [e])
                                    }
                                };
                            return null != r ? i(f) : c.push(f), d
                        }, s && (l = s(l)), l
                    }
                }(void 0 === t ? [window, "pinkySwear"] : [t, "exports"])
            }, {}],
            qwest: [function (e, t, n) {
                t.exports = function () {
                    var t = "undefined" != typeof window ? window : self,
                        n = e("pinkyswear"),
                        i = e("jquery-param"),
                        a = {},
                        s = "json",
                        r = "post",
                        o = null,
                        c = 0,
                        l = [],
                        u = t.XMLHttpRequest ? function () {
                            return new t.XMLHttpRequest
                        } : function () {
                            return new ActiveXObject("Microsoft.XMLHTTP")
                        },
                        d = "" === u().responseType,
                        f = function (e, f, h, p, m) {
                            e = e.toUpperCase(), h = void 0 === h ? null : h, p = p || {};
                            for (var g in a)
                                if (!(g in p))
                                    if ("object" == typeof a[g] && "object" == typeof p[g])
                                        for (var v in a[g]) p[g][v] = a[g][v];
                                    else p[g] = a[g];
                            var b, y, w, x, k, C = !1,
                                A = !1,
                                I = !1,
                                T = 0,
                                E = {},
                                q = {
                                    text: "*/*",
                                    xml: "text/xml",
                                    json: "application/json",
                                    post: "application/x-www-form-urlencoded",
                                    document: "text/html"
                                },
                                P = {
                                    text: "*/*",
                                    xml: "application/xml; q=1.0, text/xml; q=0.8, */*; q=0.1",
                                    json: "application/json; q=1.0, text/*; q=0.8, */*; q=0.1"
                                },
                                j = !1,
                                O = n(function (n) {
                                    return n.abort = function () {
                                        I || (y && 4 != y.readyState && y.abort(), j && (--c, j = !1), I = !0)
                                    }, n.send = function () {
                                        if (!j) {
                                            if (c == o) return void l.push(n);
                                            if (I) return void(l.length && l.shift().send());
                                            if (++c, j = !0, y = u(), b && ("withCredentials" in y || !t.XDomainRequest || (y = new XDomainRequest, A = !0, "GET" != e && "POST" != e && (e = "POST"))), A ? y.open(e, f) : (y.open(e, f, p.async, p.user, p.password), d && p.async && (y.withCredentials = p.withCredentials)), !A)
                                                for (var i in E) E[i] && y.setRequestHeader(i, E[i]);
                                            if (d && "auto" != p.responseType) try {
                                                y.responseType = p.responseType, C = y.responseType == p.responseType
                                            } catch (e) {}
                                            d || A ? (y.onload = S, y.onerror = L, A && (y.onprogress = function () {})) : y.onreadystatechange = function () {
                                                4 == y.readyState && S()
                                            }, p.async ? "timeout" in y ? (y.timeout = p.timeout, y.ontimeout = _) : w = setTimeout(_, p.timeout) : A && (y.ontimeout = function () {}), "auto" != p.responseType && "overrideMimeType" in y && y.overrideMimeType(q[p.responseType]), m && m(y), A ? setTimeout(function () {
                                                y.send("GET" != e ? h : null)
                                            }, 0) : y.send("GET" != e ? h : null)
                                        }
                                    }, n
                                }),
                                S = function () {
                                    var e;
                                    if (j = !1, clearTimeout(w), l.length && l.shift().send(), !I) {
                                        --c;
                                        try {
                                            if (C) {
                                                if ("response" in y && null === y.response) throw "The request response is empty";
                                                k = y.response
                                            } else {
                                                if ("auto" == (e = p.responseType))
                                                    if (A) e = s;
                                                    else {
                                                        var n = y.getResponseHeader("Content-Type") || "";
                                                        e = n.indexOf(q.json) > -1 ? "json" : n.indexOf(q.xml) > -1 ? "xml" : "text"
                                                    } switch (e) {
                                                    case "json":
                                                        if (y.responseText.length) try {
                                                            k = "JSON" in t ? JSON.parse(y.responseText) : new Function("return (" + y.responseText + ")")()
                                                        } catch (e) {
                                                            throw "Error while parsing JSON body : " + e
                                                        }
                                                        break;
                                                    case "xml":
                                                        try {
                                                            t.DOMParser ? k = (new DOMParser).parseFromString(y.responseText, "text/xml") : (k = new ActiveXObject("Microsoft.XMLDOM"), k.async = "false", k.loadXML(y.responseText))
                                                        } catch (e) {
                                                            k = void 0
                                                        }
                                                        if (!k || !k.documentElement || k.getElementsByTagName("parsererror").length) throw "Invalid XML";
                                                        break;
                                                    default:
                                                        k = y.responseText
                                                }
                                            }
                                            if ("status" in y && !/^2|1223/.test(y.status)) throw y.status + " (" + y.statusText + ")";
                                            O(!0, [y, k])
                                        } catch (e) {
                                            O(!1, [e, y, k])
                                        }
                                    }
                                },
                                L = function (e) {
                                    I || (e = "string" == typeof e ? e : "Connection aborted", O.abort(), O(!1, [new Error(e), y, null]))
                                },
                                _ = function () {
                                    I || (p.attempts && ++T == p.attempts ? L("Timeout (" + f + ")") : (y.abort(), j = !1, O.send()))
                                };
                            if (p.async = !("async" in p && !p.async), p.cache = "cache" in p && !!p.cache, p.dataType = "dataType" in p ? p.dataType.toLowerCase() : r, p.responseType = "responseType" in p ? p.responseType.toLowerCase() : "auto", p.user = p.user || "", p.password = p.password || "", p.withCredentials = !!p.withCredentials, p.timeout = "timeout" in p ? parseInt(p.timeout, 10) : 3e4, p.attempts = "attempts" in p ? parseInt(p.attempts, 10) : 1, x = f.match(/\/\/(.+?)\//), b = x && !!x[1] && x[1] != location.host, "ArrayBuffer" in t && h instanceof ArrayBuffer ? p.dataType = "arraybuffer" : "Blob" in t && h instanceof Blob ? p.dataType = "blob" : "Document" in t && h instanceof Document ? p.dataType = "document" : "FormData" in t && h instanceof FormData && (p.dataType = "formdata"), null !== h) switch (p.dataType) {
                                case "json":
                                    h = JSON.stringify(h);
                                    break;
                                case "post":
                                case "queryString":
                                    h = i(h)
                            }
                            if (p.headers) {
                                var M = function (e, t, n) {
                                    return t + n.toUpperCase()
                                };
                                for (x in p.headers) E[x.replace(/(^|-)([^-])/g, M)] = p.headers[x]
                            }
                            return "Content-Type" in E || "GET" == e || p.dataType in q && q[p.dataType] && (E["Content-Type"] = q[p.dataType]), E.Accept || (E.Accept = p.responseType in P ? P[p.responseType] : "*/*"), b || "X-Requested-With" in E || (E["X-Requested-With"] = "XMLHttpRequest"), p.cache || "Cache-Control" in E || (E["Cache-Control"] = "no-cache"), "GET" != e && "queryString" != p.dataType || !h || "string" != typeof h || (f += (/\?/.test(f) ? "&" : "?") + h), p.async && O.send(), O
                        },
                        h = function (e) {
                            var t = [],
                                i = 0,
                                a = [];
                            return n(function (n) {
                                var s = -1,
                                    r = function (e) {
                                        return function (r, o, c, l) {
                                            var u = ++s;
                                            return ++i, t.push(f(e, n.base + r, o, c, l).then(function (e, t) {
                                                a[u] = arguments, --i || n(!0, 1 == a.length ? a[0] : [a])
                                            }, function () {
                                                n(!1, arguments)
                                            })), n
                                        }
                                    };
                                n.get = r("GET"), n.post = r("POST"), n.put = r("PUT"), n.delete = r("DELETE"), n.catch = function (e) {
                                    return n.then(null, e)
                                }, n.complete = function (e) {
                                    var t = function () {
                                        e()
                                    };
                                    return n.then(t, t)
                                }, n.map = function (e, t, n, i, a) {
                                    return r(e.toUpperCase()).call(this, t, n, i, a)
                                };
                                for (var o in e) o in n || (n[o] = e[o]);
                                return n.send = function () {
                                    for (var e = 0, i = t.length; e < i; ++e) t[e].send();
                                    return n
                                }, n.abort = function () {
                                    for (var e = 0, i = t.length; e < i; ++e) t[e].abort();
                                    return n
                                }, n
                            })
                        },
                        p = {
                            base: "",
                            get: function () {
                                return h(p).get.apply(this, arguments)
                            },
                            post: function () {
                                return h(p).post.apply(this, arguments)
                            },
                            put: function () {
                                return h(p).put.apply(this, arguments)
                            },
                            delete: function () {
                                return h(p).delete.apply(this, arguments)
                            },
                            map: function () {
                                return h(p).map.apply(this, arguments)
                            },
                            xhr2: d,
                            limit: function (e) {
                                return o = e, p
                            },
                            setDefaultOptions: function (e) {
                                return a = e, p
                            },
                            setDefaultXdrResponseType: function (e) {
                                return s = e.toLowerCase(), p
                            },
                            setDefaultDataType: function (e) {
                                return r = e.toLowerCase(), p
                            },
                            getOpenRequests: function () {
                                return c
                            }
                        };
                    return p
                }()
            }, {
                "jquery-param": 1,
                pinkyswear: 2
            }]
        }, {}, [1, 2])("qwest")
    }), define("text!../contents/passwordMeter.html", [], function () {
        return '<div class="password-meter">\n    <div class="password-bar-container">\n        <div data-strength="none" class="password-bar none"></div>\n    </div>\n    <div class="password-report">\n        {{i18n.passwordStrength}}: <span class="password-strength avenir-bold none">{{i18n.none}}</span>&nbsp;\n        <span class="password-help hide">\n            <a href="{{info.helpBase}}reference/troubleshoot-account.htm#WEAK_PW" target="_blank" class="js-password-link tooltip tooltip-multiline" aria-label="{{i18n.weakPassword}}&nbsp;{{i18n.learnMore}}">\n                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="svg-icon svg-icon-light-blue svg-icon-live svg-icon-large" focusable="false">\n                    {{&icons.help}}\n                </svg>\n            </a>\n        </span>\n    </div>\n</div>\n'
    }), define("PasswordMeter", ["helpers", "calcite-web", "mustache", "qwest", "icons", "i18n!../nls/oauth", "text!../contents/passwordMeter.html"], function (e, t, n, i, a, s, r) {
        function o(e) {
            this.input = e.input, this.attach = e.attach, this.authInfo = e.authInfo
        }
        return o.prototype = {
            active: !0,
            strength: 0,
            wait: !0,
            handle: null,
            constructor: o,
            startup: function () {
                this.render(), this.addEventHandlers()
            },
            render: function () {
                this.attach.innerHTML = n.render(r, {
                    i18n: s,
                    info: this.authInfo,
                    icons: a
                })
            },
            addEventHandlers: function () {
                t.addEvent(this.input, "keyup", function () {
                    this.active && this.input.value.length > 0 ? (this.handle && clearTimeout(this.handle), this.handle = setTimeout(function () {
                        i.post(this.authInfo.hostname + this.authInfo.contextPath + "/rest/portals/checkPasswordStrength", {
                            f: "json",
                            password: this.input.value
                        }, {
                            responseType: "json",
                            cache: !0
                        }).then(this._updateMeter.bind(this)), this.handle = null
                    }.bind(this), 350)) : this._updateMeter(null, {
                        strength: 0
                    })
                }.bind(this))
            },
            _updateMeter: function (n, i) {
                var a, r = this.input,
                    o = e.queryOne(".password-bar", this.attach),
                    c = e.queryOne(".password-strength", this.attach),
                    l = e.queryOne(".password-help", this.attach),
                    u = o.getAttribute("data-strength");
                if (r.value.length > 0) {
                    switch (i.strength) {
                        case 2:
                            a = "fair";
                            break;
                        case 3:
                            a = "good";
                            break;
                        case 4:
                            a = "secure";
                            break;
                        default:
                            a = "weak"
                    }
                    this.strength = i.strength
                } else a = "none", this.strength = 0;
                u != a && (t.removeClass(o, u), t.addClass(o, a), o.setAttribute("data-strength", a), c.innerHTML = s[a], t.removeClass(c, u), t.addClass(c, a), "weak" == a ? t.removeClass(l, "hide") : t.addClass(l, "hide")), t.bus.emit("meter:update", {
                    strength: this.strength
                })
            }
        }, o
    }), define("text!../contents/reset-question.html", [], function () {
        return '<div>\n    <div class="js-header header-bar flex flex-justify">\n        <div class="font-size-1 page-title width-full">{{title}}</div>\n        {{^info.signinThumbnail}}{{&icons.esriSvg}}{{/info.signinThumbnail}}\n        {{#info.signinThumbnail}}\n        <div class="custom-logo">\n        <img src="{{info.hostname}}{{info.contextPath}}/rest/oauth2/orgInfo/{{info.signinThumbnail}}" alt=""/>\n        </div>\n        {{/info.signinThumbnail}}\n    </div>\n    <div tabindex="0" class="alert alert-red js-message"></div>\n    <div class="panel panel-white trailer-half">\n        <form action="{{info.hostname}}{{info.contextPath}}/oauth2/reset" name="f" id="oauth" method="POST" autocomplete="off" novalidate>\n            <input type="hidden" id="oauth_state" name="oauth_state">\n            <div class="trailer-half">\n                {{#info.isPortal}}{{answerSecurityQuestionEnt}}{{/info.isPortal}}\n                {{^info.isPortal}}{{answerSecurityQuestion}}{{/info.isPortal}}\n            </div>\n            <label><span id="questionLabel">{{info.securityQuestion}}</span>\n                <input type="text" id="answer" required name="securityAnswer" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">\n                <div class="input-error-message js-answer-error"></div>\n            </label>\n            <hr class="trailer-half leader-half">\n            <label class="leader-half">{{newPasswordLbl}}\n                <input type="password" name="newPassword" aria-label="{{newPasswordLbl}}" id="password" required aria-describedby="passwordError passwordReqs">\n                <div class="input-error-message js-password-error" id="passwordError"></div>\n            </label>\n            <div class="font-size--3 alert alert-clear trailer-half js-password-alert" id="passwordReqs">\n                <div class="js-password-meter trailer-half"></div>\n                {{passwordMust}}:\n                <ul class="js-password-reqs font-size--3">\n                    {{#rules}}\n                    <li>{{label}}</li>\n                    {{/rules}}\n                </ul>\n            </div>\n            <label>{{confirmPasswordLbl}}\n                <input type="password" id="confirmPass" aria-label="{{confirmPassword}}" name="newPassword2" required>\n                <div class="input-error-message js-confirmPass-error"></div>\n            </label>\n            <button type="submit" id="submitBtn" class="btn btn-fill btn-small">{{changePasswordBtn}}</button>\n        </form>\n    </div>\n</div>\n'
    }), define("text!../contents/reset-password.html", [], function () {
        return '<div>\n    <div class="js-header header-bar flex flex-justify">\n        <div class="font-size-1 page-title width-full">{{changeTitle}}</div>\n        {{^info.signinThumbnail}}{{&icons.esriSvg}}{{/info.signinThumbnail}}\n        {{#info.signinThumbnail}}\n        <div class="custom-logo">\n        <img src="{{info.hostname}}{{info.contextPath}}/rest/oauth2/orgInfo/{{info.signinThumbnail}}" alt=""/>\n        </div>\n        {{/info.signinThumbnail}}\n    </div>\n    <div tabindex="0" class="alert alert-red js-message"></div>\n    <div class="panel panel-white trailer-half">\n        <form action="{{info.hostname}}{{info.contextPath}}/oauth2/resetPassword" name="f" id="oauth" method="POST" autocomplete="off" novalidate>\n            <input type="hidden" id="oauth_state" name="oauth_state">\n            <label>{{oldPasswordLbl}}\n                <input type="password" name="password" id="oldPassword" required>\n                <div class="input-error-message js-oldPassword-error"></div>\n            </label>\n            <label>{{newPasswordLbl}}\n                <input type="password" name="newPassword" id="password" required aria-describedby="passwordError passwordReqs">\n                <div class="input-error-message js-password-error" id="passwordError"></div>\n            </label>\n            <div class="font-size--2 alert alert-clear trailer-half js-password-alert" id="passwordReqs">\n                <div class="js-password-meter trailer-half"></div>\n                {{passwordMust}}:\n                <ul class="js-password-reqs">\n                    {{#rules}}\n                    <li>{{label}}</li>\n                    {{/rules}}\n                </ul>\n            </div>\n            <label>{{confirmPassword}}\n                <input type="password" name="newPassword2" id="confirmPass" required>\n                <div class="input-error-message js-confirmPass-error"></div>\n            </label>\n            <button type="submit" id="submitBtn" class="btn btn-fill btn-small">{{changePasswordBtn}}</button>\n        </form>\n    </div>\n</div>\n'
    }), define("text!../contents/reset-mfa.html", [], function () {
        return '<div>\n    <div class="js-header header-bar flex flex-justify">\n        <div class="font-size-1 page-title width-full">{{disableMfa}}</div>\n        {{^info.signinThumbnail}}{{&icons.esriSvg}}{{/info.signinThumbnail}}\n        {{#info.signinThumbnail}}\n        <div class="custom-logo">\n        <img src="{{info.hostname}}{{info.contextPath}}/rest/oauth2/orgInfo/{{info.signinThumbnail}}" alt=""/>\n        </div>\n        {{/info.signinThumbnail}}\n    </div>\n    <div tabindex="0" class="alert alert-red js-message"></div>\n    <section class="padded-section">\n        <form action="{{info.hostname}}{{info.contextPath}}/oauth2/disableMfaRequest" name="f" id="oauth" method="POST" autocomplete="off" novalidate>\n            <input type="hidden" id="oauth_state" name="oauth_state">\n            <p>{{securityQuestionMfaMsg2}}</p>\n            <label><span id="questionLabel">{{info.securityQuestion}}</span>\n                <input type="text" id="answer" required name="securityAnswer" autocomplete="off" autocorrect="off"\n                    autocapitalize="off" spellcheck="false" autofocus="true">\n                <div class="input-error-message js-answer-error"></div>\n            </label>\n            <div class="flex flex-justify">\n                <button type="button" class="btn btn-small btn-transparent" id="backLink">{{cancelEmailBtn}}</button>\n                <button type="submit" class="btn btn-small" id="submitBtn">{{continueBtn}}</button>\n            </div>\n        </form>\n    </section>\n</div>\n'
    }), define("reset-new", ["calcite-web", "helpers", "mustache", "qwest", "PasswordMeter", "icons", "i18n!../nls/oauth", "text!../contents/reset-question.html", "text!../contents/reset-password.html", "text!../contents/reset-mfa.html"], function (e, t, n, i, a, s, r, o, c, l) {
        return {
            options: null,
            rules: null,
            meter: null,
            valid_password: !1,
            valid_confirmPass: !1,
            forgotChange: !1,
            startup: function (n) {
                this.authInfo = n, document.documentElement.lang = n.locale, this.options = this._setOptions(n), t.setTitle(this.options.title), t.checkRTL(n.locale), this.render(n), e.init(), this.addEventHandlers(), t.setContrastInfo()
            },
            render: function (o) {
                e.addClass(document.body, "top-align"), o.hostname = t.getPortalHostname(o, o.refUrl), o.securityQuestion = r.securityQuestions[o.securityQuestionIdx], this._setRules(o);
                var c = this.options.template;
                t.queryOne(".content").innerHTML = n.render(c, t.extend({
                    info: o,
                    rules: this.rules,
                    icons: s
                }, r.createAccount, r.securityQuestion, r.resetPage)), t.byId("oauth_state").setAttribute("value", o.oauth_state), "mfa" == o.forgotMy ? this.valid_password = this.valid_confirmPass = !0 : (this.meter = new a({
                    attach: t.queryOne(".js-password-meter"),
                    input: t.byId("password"),
                    authInfo: o
                }), this.meter.startup());
                var l = t.queryOne("input[autofocus]");
                l && l.focus(), i.get(this.authInfo.hostname + this.authInfo.contextPath + "/rest/portals/helpMap", {
                    f: "json"
                }, {
                    responseType: "json",
                    cache: !0
                }).then(function (n) {
                    var i = n.response,
                        a = this.authInfo.isPortal ? "120001688" : "120001811",
                        s = i.helpMap.m[a],
                        r = this.authInfo.helpBase + s;
                    e.nodeListToArray(t.query(".js-password-link")).forEach(function (e) {
                        e.setAttribute("href", r)
                    })
                }.bind(this)), this.displayMessage(o)
            },
            addEventHandlers: function () {
                var n = t.byId("password"),
                    i = t.byId("confirmPass"),
                    a = t.byId("backLink"),
                    s = this.options.elementId && t.byId(this.options.elementId);
                n && (e.addEvent(n, "focus", function () {
                    e.addClass(t.queryOne(".js-password-alert"), "is-active")
                }), e.addEvent(n, "input", this._validateInput.bind(this)), e.addEvent(n, "blur", function (e) {
                    n.value.length && i && i.value.length && this._checkConfirmMatch({
                        target: i
                    }), this._validateInput(e), this._checkFieldValid(e)
                }.bind(this))), i && e.addEvent(t.byId("confirmPass"), "blur", this._checkConfirmMatch.bind(this)), s && e.addEvent(s, "blur", function (e) {
                    var t = e.target;
                    t.value.length > 0 && this._checkRequiredField(t)
                }.bind(this)), a && e.addEvent(a, "click", function () {
                    window.location = this.authInfo.hostname + this.authInfo.contextPath + "/oauth2/mfa?oauth_state=" + this.authInfo.oauth_state
                }.bind(this)), e.addEvent(t.byId("oauth"), "submit", function (e) {
                    e.preventDefault(), 0 == this._checkRequired(e) && 1 == this.valid_confirmPass && (!0 !== this.valid_password && this.meter && (this.valid_password = this.meter.strength >= 2), this.valid_password && e.target.submit())
                }.bind(this))
            },
            _setOptions: function (e) {
                var t = {
                    template: null,
                    title: "",
                    elementId: ""
                };
                return e.securityQuestionIdx ? "mfa" == e.forgotMy ? (t.template = l, t.title = r.securityQuestion.disableMfa) : (t.template = o, t.title = r.resetPage.resetTitle, t.elementId = "answer") : (t.template = c, t.title = r.resetPage.changeTitle, t.elementId = "oldPassword"), t
            },
            _setRules: function (e) {
                var n = [{
                    label: r.resetPage.cantMatchUsername,
                    rule: function (e) {
                        return e != (this.authInfo.troubleshootUsername || this.authInfo.username)
                    }.bind(this)
                }];
                this.authInfo.forgotMy || n.push({
                    label: r.resetPage.oldPasswordNewPasswordSame,
                    rule: function (e) {
                        return e != t.byId("oldPassword").value
                    }
                });
                var i = e.passwordPolicy;
                i && i.type && (i.minLength > 0 && n.push({
                    label: t.sub(r.resetPage.minLength, i),
                    rule: function (e) {
                        return e.length >= this.authInfo.passwordPolicy.minLength
                    }.bind(this)
                }), i.minUpper > 0 && n.push({
                    label: t.sub(r.resetPage.minUpper, i),
                    rule: function (e) {
                        var t = e.match(/([A-Z])/g);
                        return t && t.length >= this.authInfo.passwordPolicy.minUpper
                    }.bind(this)
                }), i.minLower > 0 && n.push({
                    label: t.sub(r.resetPage.minLower, i),
                    rule: function (e) {
                        var t = e.match(/([a-z])/g);
                        return t && t.length >= this.authInfo.passwordPolicy.minLower
                    }.bind(this)
                }), i.minLetter > 0 && n.push({
                    label: t.sub(r.resetPage.minLetter, i),
                    rule: function (e) {
                        var t = e.match(/([A-Za-z])/g);
                        return t && t.length >= this.authInfo.passwordPolicy.minLetter
                    }.bind(this)
                }), i.minDigit > 0 && n.push({
                    label: t.sub(r.resetPage.minDigit, i),
                    rule: function (e) {
                        var t = e.match(/([0-9])/g);
                        return t && t.length >= this.authInfo.passwordPolicy.minDigit
                    }.bind(this)
                }), i.minOther > 0 && n.push({
                    label: t.sub(r.resetPage.minOther, i),
                    rule: function (e) {
                        var t = e.match(/([!"#$%&'()*+,-.\/:;<=>?@[\]^_`{|}~])/g);
                        return t && t.length >= this.authInfo.passwordPolicy.minOther
                    }.bind(this)
                }), i.historySize > 0 && n.push({
                    label: t.sub(r.resetPage.historySize, i),
                    rule: function () {
                        return !0
                    }
                })), this.rules = n
            },
            _validateInput: function (n) {
                var i = n.target,
                    a = this.rules,
                    s = t.queryOne(".js-password-reqs"),
                    r = 0;
                a.forEach(function (t, n) {
                    var a = s.children[n];
                    i.value && t.rule(i.value) ? (r++, e.removeClass(a, "icon-ui-red icon-ui-notice-round"), e.addClass(a, "icon-ui-green icon-ui-check-mark")) : (r--, e.removeClass(a, "icon-ui-green icon-ui-check-mark"), 0 === i.value.length && e.removeClass(a, "icon-ui-red icon-ui-notice-round"))
                });
                var o = r == a.length;
                this.meter && this.meter.strength < 2 && o && (o = !1), this.valid_password = o, 0 === i.value.length && (e.removeClass(t.findParentNode("label", i), "field-suffix icon-ui-check-mark icon-ui-green"), e.removeClass(i, "input-error"), e.removeClass(t.byId("passwordError"), "is-active"))
            },
            _checkConfirmMatch: function (n) {
                var i = n.target.value,
                    a = t.byId("password").value,
                    s = t.findParentNode("label", n.target);
                this.valid_confirmPass = (i.length > 0 || a.length > 0) && i == a, i.length > 0 ? this._checkFieldValid(n) : e.removeClass(s, "icon-ui-green icon-ui-check-mark")
            },
            _checkFieldValid: function (n) {
                var i = n.target,
                    a = i.id,
                    s = t.queryOne(".js-" + a + "-error");
                !this["valid_" + a] && i.value.length > 0 ? (s.innerHTML = r.createAccount.errors["invalid_" + a], e.addClass(i, "input-error"), !t.queryOne(".input-error-message.is-active") && e.addClass(s, "is-active"), e.removeClass(t.findParentNode("label", i), "field-suffix icon-ui-check-mark icon-ui-green"), "password" == a && this.rules && this.rules.length && this.rules.forEach(function (n, s) {
                    var r = t.queryOne(".js-" + a + "-reqs").children[s];
                    n.rule(i.value) ? (e.removeClass(r, "icon-ui-red icon-ui-notice-round"), e.addClass(r, "icon-ui-green icon-ui-check-mark")) : (e.removeClass(r, "icon-ui-green icon-ui-check-mark"), e.addClass(r, "icon-ui-red icon-ui-notice-round"))
                })) : (e.removeClass(i, "input-error"), e.removeClass(s, "is-active"), i.value.length > 0 && this._markFieldValid(i))
            },
            _markFieldValid: function (n) {
                var i = n.id,
                    a = t.queryOne(".js-" + i + "-alert"),
                    s = t.findParentNode("label", n);
                a && e.removeClass(a, "is-active"), e.addClass(s, "field-suffix icon-ui-check-mark icon-ui-green")
            },
            _checkRequiredField: function (n) {
                var i = n.tagName.toLowerCase(),
                    a = t.queryOne(".js-" + n.id + "-error"),
                    s = !1;
                return "input" == i && "checkbox" != n.type && "radio" != n.type ? s = n.value.length > 0 : "checkbox" == n.type ? s = n.checked : "select" == i && (s = n.selectedIndex > 0), s && !("valid_" + n.id in this) || s && this["valid_" + n.id] ? (e.removeClass(n, "input-error"), e.removeClass(a, "is-active")) : e.hasClass(a, "is-active") || (a.innerHTML = r.createAccount.errors["missing_" + n.id], e.addClass(n, "input-error"), !t.queryOne(".input-error-message.is-active") && e.addClass(a, "is-active")), s || n.focus(), s
            },
            _checkRequired: function (n) {
                n.preventDefault();
                var i = n.target,
                    a = 0;
                return e.nodeListToArray(t.query("input[required], .required", i)).forEach(function (e) {
                    this._checkRequiredField(e) || (a++, e.focus())
                }.bind(this)), a
            },
            displayMessage: function (n) {
                var i = "",
                    a = n.passwordPolicy && n.passwordPolicy.type,
                    s = t.queryOne(".js-message");
                n.messages && n.messages[0] && (i = n.messages[0], i.toLowerCase().indexOf("minimum strength requirement") > -1 ? i = a ? r.resetPage.minimumStrengthRequirementLink : r.resetPage.minimumStrengthRequirementEsri : i.toLowerCase().indexOf("must not be similiar to the ") > -1 ? i = t.sub(r.resetPage.historySize, n.passwordPolicy) : i.toLowerCase().indexOf("unable to reset your password") > -1 ? i = r.resetPage.unableToReset : i.toLowerCase().indexOf("new password cannot be same") > -1 ? i = r.resetPage.oldPasswordNewPasswordSame : i.toLowerCase().indexOf("new passwords don't match") > -1 ? i = r.resetPage.passwordsMustMatch : i.toLowerCase().indexOf("your login session has been reset") > -1 ? i = r.expiredSession : i.toLowerCase().indexOf("invalid credentials for reset user") > -1 ? i = "mfa" == n.forgotMy ? r.forgotPassword.inputError : r.resetPage.incorrectSecurityResponse : i.toLowerCase().indexOf("your password does not meet the arcgis online password requirements. please update your password.") > -1 && (i = r.resetPage.updateOldPassword), s.innerHTML = i || n.messages[0], e.addClass(s, "is-active"), s.focus())
            }
        }
    }), define("text!../contents/selectUser.html", [], function () {
        return '<div>\n    <div class="js-header header-bar flex flex-justify">\n        <div class="font-size-1 page-title width-full">{{i18n.selectUser.signInToAcct}}</div>\n        {{^info.signinThumbnail}}{{&icons.esriSvg}}{{/info.signinThumbnail}}\n        {{#info.signinThumbnail}}\n        <div class="custom-logo">\n        <img src="{{info.hostname}}{{info.contextPath}}/rest/oauth2/orgInfo/{{info.signinThumbnail}}" alt=""/>\n        </div>\n        {{/info.signinThumbnail}}\n    </div>\n    <section class="trailer-1 padded-section">\n        <p id="titleText">{{i18n.selectUser.titleTemplate}}<br><br>{{i18n.selectUser.tutorialPanel}}</p>\n        {{#info.linkedUsers}}{{^disabled}}\n        <div class="panel panel-white panel-narrow trailer-half pointer flex js-account" data-username="{{username}}"\n            tabindex="0">\n            <div class="profile-circle-container">\n                <img class="profile-circle" alt="{{userProfileImg}}" {{#thumbnail}} src="{{thumbnail}}" {{/thumbnail}}\n                    {{^thumbnail}} src="{{info.contextPath}}/files/no-user-thumb.jpg" {{/thumbnail}}>\n                <div class="profile-circle-badge">{{&info.providerIcon}}</div>\n            </div>\n            <div class="padding-left-1 shift-up-quarter">{{username}}<br><span class="text-dark-gray">{{orgName}}</span></div>\n        </div>\n        {{/disabled}}{{/info.linkedUsers}}\n    </section>\n    <form class="hide" action="{{info.hostname}}{{info.contextPath}}/oauth2/selectUser" method="POST" id="oauth"\n        name="f">\n        <input type="hidden" name="oauth_state" id="oauth_state" value="{{info.oauth_state}}">\n        <input type="hidden" id="selectedUser" name="selectedUser" value="">\n    </form>\n</div>\n'
    }), define("selectUser-new", ["calcite-web", "helpers", "mustache", "icons", "i18n!../nls/oauth", "text!../contents/selectUser.html"], function (e, t, n, i, a, s) {
        return {
            startup: function (n) {
                this.authInfo = n, document.documentElement.lang = n.locale, t.setTitle(a.selectUser.title || a.selectUser.windowTitle), t.checkRTL(n.locale), this.render(n), e.init(), this.addEventHandlers(), t.setContrastInfo()
            },
            render: function (e) {
                t.checkRTL(e.locale);
                var r = t.queryOne(".content");
                e.hostname = t.getPortalHostname(e, e.refUrl), e.providerIcon = i[e.socialLoginProviderName], r.innerHTML = n.render(s, {
                    info: e,
                    i18n: a,
                    icons: i
                });
                var o = t.byId("titleText"),
                    c = a[e.socialLoginProviderName];
                o.innerHTML = t.sub(o.innerHTML, {
                    providerName: c
                })
            },
            addEventHandlers: function () {
                e.nodeListToArray(t.query(".js-account")).forEach(function (t) {
                    e.addEvent(t, "click", this.onAcctClick.bind(this)), e.addEvent(t, "keyup", this.onPanelKey.bind(this))
                }.bind(this))
            },
            onAcctClick: function (e) {
                var n = e.currentTarget,
                    i = t.byId("oauth"),
                    a = n.getAttribute("data-username");
                t.byId("selectedUser").value = a, i.submit()
            },
            onPanelKey: function (e) {
                0 != e.keyCode && 13 != e.keyCode && 32 != e.keyCode || this.onAcctClick(e)
            }
        }
    }), define("text!../contents/setupSocial.html", [], function () {
        return '<div>\n    <div class="js-header header-bar flex flex-justify">\n        <div class="font-size-1 page-title width-full">{{i18n.createAccount.title}}</div>\n        {{^info.signinThumbnail}}{{&icons.esriSvg}}{{/info.signinThumbnail}}\n        {{#info.signinThumbnail}}\n        <div class="custom-logo">\n        <img src="{{info.hostname}}{{info.contextPath}}/rest/oauth2/orgInfo/{{info.signinThumbnail}}" alt=""/>\n        </div>\n        {{/info.signinThumbnail}}\n    </div>\n    <div tabindex="0" class="alert alert-red js-message"></div>\n    <section class="panel-white trailer-half padded-section" id="setupSocial">\n        <form method="POST" name="f" id="oauth" action="{{info.hostname}}{{info.contextPath}}/oauth2/acceptTermsAndConditions" novalidate autocomplete="off">\n            <input type="hidden" id="oauth_state" name="oauth_state">\n            <input id="accept" name="acceptTermsAndConditions" type="hidden" value="false">\n            {{#info.promptSocialUserFirstLastNames}}\n            <label>{{i18n.createAccount.firstName}} <input type="text" name="socialUserFirstName" id="firstName" required>\n                <div class="input-error-message js-firstName-error"></div>\n            </label>\n            <label>{{i18n.createAccount.lastName}} <input type="text" name="socialUserLastName" id="lastName" required>\n                <div class="input-error-message js-lastName-error"></div>\n            </label>\n            {{/info.promptSocialUserFirstLastNames}}\n            <label>{{i18n.createAccount.usernameLbl}}\n                <input type="text" name="socialUsername" aria-label="{{i18n.createAccount.usernameLbl}}" id="username" required autocomplete="off" autocorrect="off"\n                    autocapitalize="off" spellcheck="false" aria-describedby="usernameError usernameReqs">\n                <div class="input-error-message js-username-error" id="usernameError"></div>\n                {{#info.suggestedSocialUsername}}\n                <div>{{i18n.createAccount.promptUsernameMsg}}</div>\n                {{/info.suggestedSocialUsername}}\n            </label>\n            <div class="font-size--2 alert alert-clear trailer-half js-username-alert" id="usernameReqs">\n                {{i18n.createAccount.usernameMust}}:\n                <ul class="js-username-reqs">\n                    <li>{{i18n.createAccount.usernameReq1}}</li>\n                    <li>{{i18n.createAccount.usernameReq2}}</li>\n                    <li>{{i18n.createAccount.usernameReq5}}</li>\n                    <li>{{i18n.createAccount.usernameReq4}}</li>\n                </ul>\n            </div>\n            <hr class="trailer-half leader-half">\n            <div class="font-size--2">\n                <div id="readTou" class="trailer-quarter">{{&i18n.createAccount.readTermsOfUseMsg}}</div>\n                <div class="trailer-quarter"><a target="_blank" href="https://www.esri.com/en-us/legal/terms/master-agreement-product">{{i18n.createAccount.touOtherLanguages}}</a></div>\n                <div>{{i18n.createAccount.acceptLegal}}\n                    {{#info.termsAndConditions}}\n                    <label class="trailer-quarter">\n                        <input type="checkbox" name="hubterms" id="hubterms" required><span class="js-orgname">{{i18n.createAccount.hubTou}}</span>\n                        <a class="js-modal-toggle" data-modal="toumodal" tabindex="0">\n                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="svg-icon svg-icon-light-blue svg-icon-live svg-icon-large" focusable="false">\n                                {{&icons.info}}\n                            </svg>\n                        </a>\n                        <div class="input-error-message js-hubterms-error"></div>\n                    </label>\n                    {{/info.termsAndConditions}}\n                    <label class="trailer-quarter">\n                        <input type="checkbox" name="terms" id="terms" required>{{i18n.createAccount.arcgisTou}}\n                        <div class="input-error-message js-terms-error"></div>\n                    </label>\n                    <label>\n                        <input type="checkbox" name="privacy" id="privacy" required>{{i18n.createAccount.arcgisPrivacy}}\n                        <div class="input-error-message js-privacy-error"></div>\n                    </label>\n                    <div class="flex flex-justify">\n                        <button id="cancelBtn" type="button" class="btn btn-small btn-clear">{{i18n.createAccount.cancelBtn}}</button>\n                        <button id="createUserBtn" type="submit" class="btn btn-small">{{i18n.createAccount.createAccountBtn}}</button>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </section>\n    <section class="panel-white trailer-half padded-section hide" id="warnPublic">\n        <p class="font-size-1">{{i18n.createAccount.signInFailed}}</p>\n        <p class="font-size--2" id="acctFromSocial">{{i18n.createAccount.noAccountMsg}}</p>\n        <p class="font-size--2">{{i18n.createAccount.createNewAccountMsg}}</p>\n        <div class="flex flex-justify">\n            <button id="cancelWarnBtn" type="button" class="btn btn-small btn-clear">{{i18n.createAccount.cancelBtn}}</button>\n            <button id="continueBtn" type="button" class="btn btn-small">{{i18n.createAccount.createNewAccountBtn}}</button>\n        </div>\n    </section>\n    {{#info.termsAndConditions}}\n    <div class="js-modal modal-overlay" data-modal="toumodal">\n        <div class="modal-content" role="dialog" aria-labelledby="hubterms" role="dialog">\n            <h4 class="js-orgname">{{i18n.createAccount.hubTou}}</h4>\n            <a class="js-modal-toggle right modal-close" aria-label="Close modal" tabindex="0">\n                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svg-icon svg-icon-gray svg-icon-live" width="24" height="24" focusable="false">\n                    {{&icons.close}}\n                </svg>\n            </a>\n            <div>{{&info.termsAndConditions}}</div>\n            <button id="modalOk" class="btn btn-small right leader-half js-modal-toggle">{{i18n.securityQuestion.okBtn}}</button>\n        </div>\n    </div>\n    {{/info.termsAndConditions}}\n</div>\n'
    }), define("setupSocial", ["calcite-web", "helpers", "mustache", "qwest", "icons", "i18n!../nls/oauth", "text!../contents/setupSocial.html"], function (e, t, n, i, a, s, r) {
        return {
            social: !1,
            rules: null,
            valid_username: !1,
            valid_email: !0,
            valid_terms: !1,
            valid_privacy: !1,
            valid_hubterms: !0,
            startup: function (n) {
                this.authInfo = n, document.documentElement.lang = n.locale, t.setTitle(s.createAccount.title || s.createAccount.windowTitle), n.hostname = t.getPortalHostname(n, n.refUrl), this.render(n), e.init(), this.rules = this._setRules(), this.addEventHandlers(), t.setContrastInfo()
            },
            render: function (i) {
                if (t.checkRTL(i.locale), e.addClass(document.body, "top-align"), t.queryOne(".content").innerHTML = n.render(r, {
                        info: i,
                        icons: a,
                        i18n: s
                    }), t.byId("oauth_state").setAttribute("value", i.oauth_state), 1 != i.autoAccountCreateForSocial && !i.socialUserAccountId) {
                    e.addClass(t.byId("setupSocial"), "hide"), e.removeClass(t.byId("warnPublic"), "hide");
                    var o = t.byId("acctFromSocial");
                    o.innerHTML = t.sub(o.innerHTML, {
                        provider: this._capitalize(i.socialLoginProviderName)
                    })
                }
                i.suggestedSocialUsername ? (t.byId("username").value = i.suggestedSocialUsername, this.valid_username = !0) : e.addClass(t.queryOne(".js-username-alert"), "is-active");
                var c = !!i.activationCode,
                    l = i.hostname + "/home/" + (c ? "termsofusecommunityorg.html" : "termsofuse.html"),
                    u = t.byId("readTou");
                u.innerHTML = t.sub(u.innerHTML, {
                    touHref: l,
                    privacyHref: "https://www.esri.com/legal/privacy"
                }), e.nodeListToArray(t.query(".js-orgname")).forEach(function (e) {
                    e.innerHTML = t.sub(e.innerHTML, {
                        hubname: i.orgName
                    })
                })
            },
            addEventHandlers: function () {
                var n = t.byId("username"),
                    i = t.queryOne(".js-username-alert"),
                    a = t.byId("lastName"),
                    s = t.byId("firstName");
                if (e.addEvent(n, "input", function (t) {
                        e.hasClass(i, "is-active") || e.addClass(i, "is-active"), this.valid_username = !1, this._validateInput(t)
                    }.bind(this)), e.addEvent(n, "blur", this._checkFieldValid.bind(this)), a && s) {
                    this.valid_lastName = this.valid_firstName = !1;
                    var r = function (e) {
                        var t = e.target;
                        this["valid_" + t.id] = t.value.length <= 40, t.value.length && this._checkFieldValid(e)
                    }.bind(this);
                    [a, s].forEach(function (t) {
                        e.addEvent(t, "blur", r)
                    })
                }
                this.authInfo.termsAndConditions && (this.valid_hubterms = !1), e.nodeListToArray(t.query("#privacy, #terms, #hubterms")).forEach(function (t) {
                    e.addEvent(t, "change", function (e) {
                        var t = e.target;
                        this["valid_" + t.id] = t.checked
                    }.bind(this))
                }.bind(this)), e.addEvent(t.byId("continueBtn"), "click", function () {
                    e.addClass(t.byId("warnPublic"), "hide"), e.removeClass(t.byId("setupSocial"), "hide")
                }), e.addEvent(t.byId("oauth"), "submit", this._checkRequired.bind(this)), e.nodeListToArray(t.query("#cancelBtn, #cancelWarnBtn")).forEach(function (n) {
                    e.addEvent(n, "click", function () {
                        t.byId("accept").value = "false", t.byId("oauth").submit()
                    })
                }), e.nodeListToArray(t.query(".js-modal-toggle")).forEach(function (t) {
                    e.addEvent(t, "keydown", function (e) {
                        "Tab" !== e.key && 9 !== e.keyCode && (e.preventDefault(), "Space" != e.key && "Enter" != e.key && 0 != e.keyCode && 13 != e.keyCode && 32 != e.keyCode || e.target.click())
                    })
                })
            },
            _setRules: function () {
                return {
                    password: [function (e) {
                        return e != t.byId("username").value
                    }, function (e) {
                        return e.length >= 8
                    }, function (e) {
                        return /[A-Za-z]/.test(e)
                    }, function (e) {
                        return /[0-9]/.test(e)
                    }],
                    username: [function (e) {
                        return e.length > 5 && e.length < 129
                    }, function (e) {
                        return !/[^\w\.@\-\s]/.test(e)
                    }, function (e) {
                        return !/[_\.@\-]/.test(e.slice(0, 1)) && !/[_\.@\-]/.test(e.slice(-1))
                    }, function (e) {
                        return !/\s/.test(e)
                    }]
                }
            },
            _validateInput: function (n) {
                var i = n.target,
                    a = i.id,
                    s = this.rules[a],
                    r = 0;
                s.forEach(function (n, s) {
                    var o = t.queryOne(".js-" + a + "-reqs").children[s];
                    i.value && n(i.value) ? (r++, e.removeClass(o, "icon-ui-red icon-ui-notice-round"), e.addClass(o, "icon-ui-green icon-ui-check-mark")) : (r--, e.removeClass(o, "icon-ui-green icon-ui-check-mark"), 0 === i.value.length && e.removeClass(o, "icon-ui-red icon-ui-notice-round"))
                }), this["valid_" + a] = r == s.length
            },
            _checkFieldValid: function (n) {
                var i = n.target,
                    a = i.id,
                    r = t.queryOne(".js-" + a + "-error");
                this["valid_" + a] ? (e.removeClass(i, "input-error"), e.removeClass(r, "is-active"), "username" == a ? this._checkUsernameExist(i) : this._markFieldValid(i)) : (r.innerHTML = s.createAccount.errors["invalid_" + a], e.addClass(i, "input-error"), !t.queryOne(".input-error-message.is-active") && e.addClass(r, "is-active"), e.removeClass(t.findParentNode("label", i), "field-suffix icon-ui-check-mark icon-ui-green"), this.rules[a] && this.rules[a].forEach(function (n, s) {
                    var r = t.queryOne(".js-" + a + "-reqs").children[s];
                    n(i.value) ? (e.removeClass(r, "icon-ui-red icon-ui-notice-round"), e.addClass(r, "icon-ui-green icon-ui-check-mark")) : (e.removeClass(r, "icon-ui-green icon-ui-check-mark"), e.addClass(r, "icon-ui-red icon-ui-notice-round"))
                }))
            },
            _checkUsernameExist: function (n) {
                var a = n.value,
                    r = t.findParentNode("label", n),
                    o = t.queryOne(".js-" + n.id + "-error"),
                    c = this.authInfo.hostname + this.authInfo.contextPath + "/rest/community/checkUsernames";
                e.addClass(r, "field-suffix icon-ui-loading-indicator icon-ui-blue"), i.post(c, {
                    usernames: a,
                    f: "json"
                }, {
                    cache: !0,
                    responseType: "json"
                }).then(function (i, a) {
                    if (e.removeClass(r, "icon-ui-loading-indicator icon-ui-blue"), a && a.usernames) {
                        var c = a.usernames[0];
                        c && c.requested == c.suggested ? this._markFieldValid(n) : (this.valid_username = !1, o.innerHTML = s.createAccount.errors.taken_username, e.removeClass(r, "icon-ui-check-mark icon-ui-green"), e.addClass(n, "input-error"), !t.queryOne(".input-error-message.is-active") && e.addClass(o, "is-active"))
                    }
                }.bind(this))
            },
            _markFieldValid: function (n) {
                var i = n.id,
                    a = t.queryOne(".js-" + i + "-alert"),
                    s = t.findParentNode("label", n);
                a && "username" != i && e.removeClass(a, "is-active"), e.addClass(s, "field-suffix icon-ui-check-mark icon-ui-green")
            },
            _checkRequired: function (n) {
                n.preventDefault();
                var i = n.target,
                    a = 0;
                e.nodeListToArray(t.query("input[required], .required", i)).forEach(function (n) {
                    var i = n.tagName.toLowerCase(),
                        r = t.queryOne(".js-" + n.id + "-error"),
                        o = !1;
                    "input" == i && "checkbox" != n.type && "radio" != n.type ? n.value.length > 0 && !1 !== this["valid_" + n.id] ? o = !0 : 0 == n.value.length && (o = !1) : "checkbox" == n.type ? o = n.checked : "select" == i && (o = n.selectedIndex > 0), o ? (e.removeClass(n, "input-error"), e.removeClass(r, "is-active")) : e.hasClass(r, "is-active") || (r.innerHTML = s.createAccount.errors["missing_" + n.id], e.addClass(n, "input-error"), !t.queryOne(".input-error-message.is-active") && e.addClass(r, "is-active"), a++)
                }.bind(this)), 0 == a && 1 == this.valid_username && 1 == this.valid_terms && 1 == this.valid_privacy && 1 == this.valid_hubterms && (t.byId("accept").value = "true", i.submit())
            },
            _capitalize: function (e) {
                var t = [e.slice(0, 1), e.slice(1)];
                return t[0].toUpperCase() + t[1]
            }
        }
    }), define("text!../contents/acceptTerms.html", [], function () {
        return '<div class="terms-container panel-white hide" aria-labelledby="termsTitle" role="dialog">\n  <div class="terms-inner-container">\n    <h4 id="termsTitle" class="terms-title padding-trailer-half">{{info.orgAuthenticatedUserAccessNotice.title}}</h4>\n    <div class="terms-content">{{& info.orgAuthenticatedUserAccessNotice.text}}</div>\n    <div class="terms-action actions-area">\n      <div class="button-wrapper">\n        {{#info.orgAuthenticatedUserAccessNotice.okOnly}}\n        <button autofocus data-accept="yes" type="button" class="js-terms-submit btn">{{i18n.termsOfUse.ok}}</button>\n        {{/info.orgAuthenticatedUserAccessNotice.okOnly}}\n        {{^info.orgAuthenticatedUserAccessNotice.okOnly}}\n        <button autofocus data-accept="yes" type="button" class="js-terms-submit btn right margin-left-1">{{i18n.termsOfUse.approve}}</button>\n        <button data-accept="no" type="button" class="js-terms-submit btn btn-clear right">{{i18n.termsOfUse.decline}}</button>\n        {{/info.orgAuthenticatedUserAccessNotice.okOnly}}\n      </div>\n    </div>\n  </div>\n  <form method="POST" name="f" id="oauth" action="{{info.hostname}}{{info.contextPath}}/oauth2/acceptTermsAndConditions" novalidate autocomplete="off">\n    <input type="hidden" id="oauth_state" name="oauth_state" value="{{info.oauth_state}}">\n    <input type="hidden" id="accept" name="acceptTermsAndConditions" value="false">\n  </form>\n</div>\n'
    }), define("acceptTerms", ["calcite-web", "helpers", "mustache", "icons", "i18n!../nls/oauth", "text!../contents/acceptTerms.html"], function (e, t, n, i, a, s) {
        return {
            startup: function (e) {
                this.authInfo = e, document.documentElement.lang = e.locale, t.setTitle(a.createAccount.acceptTermsTitle), t.checkRTL(e.locale), this.render(e), this.addEventHandlers(), t.setContrastInfo()
            },
            render: function (r) {
                r.orgAuthenticatedUserAccessNotice && "okOnly" == r.orgAuthenticatedUserAccessNotice.buttons && (r.orgAuthenticatedUserAccessNotice.okOnly = !0), r.orgAuthenticatedUserAccessNotice && r.orgAuthenticatedUserAccessNotice.text && (r.orgAuthenticatedUserAccessNotice.text = r.orgAuthenticatedUserAccessNotice.text.replace(/\n/g, "<br>")), t.checkRTL(r.locale);
                var o = t.queryOne("body");
                if (r.hostname = t.getPortalHostname(r, r.refUrl), o.innerHTML = n.render(s, {
                        info: r,
                        i18n: a,
                        icons: i
                    }), r.orgAuthenticatedUserAccessNotice && !1 !== r.orgAuthenticatedUserAccessNotice.enabled) e.removeClass(t.queryOne(".terms-container"), "hide");
                else {
                    var c = t.byId("oauth");
                    t.byId("accept").value = "true", c.submit()
                }
                t.queryOne("button[autofocus]").focus()
            },
            addEventHandlers: function () {
                e.nodeListToArray(t.query(".js-terms-submit")).forEach(function (t) {
                    e.addEvent(t, "click", this._handleSubmitBtn)
                }.bind(this))
            },
            _handleSubmitBtn: function (e) {
                e.preventDefault();
                var n = t.byId("oauth"),
                    i = t.byId("accept");
                "yes" == e.target.getAttribute("data-accept") && (i.value = "true"), n.submit()
            }
        }
    }), define("termsConditions", ["setupSocial", "acceptTerms"], function (e, t) {
        return {
            startup: function (n) {
                n.isAcceptOrgAccessNotice ? t.startup(n) : e.startup(n)
            }
        }
    }), define("text!../contents/createAccount.html", [], function () {
        return '<div>\n    <div class="js-header header-bar flex flex-justify">\n        <div class="font-size-1 page-title width-full js-hubname">\n            {{#info.isHubRelated}}{{i18n.createHubAcct}}{{/info.isHubRelated}}\n            {{^info.isHubRelated}}{{i18n.createPublic}}{{/info.isHubRelated}}\n        </div>\n        {{^info.signinThumbnail}}{{&icons.esriSvg}}{{/info.signinThumbnail}}\n        {{#info.signinThumbnail}}\n        <div class="custom-logo">\n        <img src="{{info.hostname}}{{info.contextPath}}/rest/oauth2/orgInfo/{{info.signinThumbnail}}" alt=""/>\n        </div>\n        {{/info.signinThumbnail}}\n    </div>\n    {{#info.isHubRelated}}\n    <section class="trailer-half font-size--2 padded-section">\n        <span class="js-hubname">{{i18n.hubAcctCanDo}}:</span><br>\n        <ul class="font-size--2">\n            <li>{{i18n.hubAcctCan1}}</li>\n            <li>{{i18n.hubAcctCan2}}</li>\n            <li>{{i18n.hubAcctCan3}}</li>\n        </ul>\n    </section>\n    {{/info.isHubRelated}}\n    {{^info.isHubRelated}}\n    <section class="trailer-half font-size--2 padded-section">\n        <span>{{i18n.publicAcctLimit}}</span><br>\n        <span>{{i18n.publicAcctCanDo}}:</span><br>\n        <ul class="font-size--2">\n            <li>{{i18n.publicAcctCan1}}</li>\n            <li>{{i18n.publicAcctCan2}}</li>\n            <li>{{i18n.publicAcctCan3}}</li>\n        </ul>\n    </section>\n    {{/info.isHubRelated}}\n    {{#info.showEmail}}\n    <section class="trailer-half padded-section">\n        <form action="{{info.hostname}}{{info.contextPath}}/oauth2/signup" name="f" id="create" novalidate method="POST" autocomplete="off">\n            <label>{{i18n.firstName}} <input type="text" name="firstName" id="firstName" required>\n                <div class="input-error-message js-firstName-error"></div>\n            </label>\n            <label>{{i18n.lastName}} <input type="text" name="lastName" id="lastName" required>\n                <div class="input-error-message js-lastName-error"></div>\n            </label>\n            <label>{{i18n.email}} <input type="email" name="email" id="email" required>\n                <div class="input-error-message js-email-error"></div>\n            </label>\n            <label>{{i18n.confirmEmail}} <input type="email" id="confirm" required>\n                <div class="input-error-message js-confirm-error"></div>\n            </label>\n            <input type="hidden" id="oauth_state" name="oauth_state" value="{{info.oauth_state}}">\n            <input id="accept" name="acceptTermsAndConditions" type="hidden" value="false">\n            <hr class="trailer-half leader-half">\n            <div>\n                <div id="readTou" class="trailer-quarter">{{&i18n.readTermsOfUseMsg}}</div>\n                <div class="trailer-quarter"><a target="_blank" href="https://www.esri.com/en-us/legal/terms/master-agreement-product">{{i18n.touOtherLanguages}}</a></div>\n                <div>{{i18n.acceptLegal}}\n                    {{#info.termsAndConditions}}\n                    <label class="trailer-quarter">\n                        <input type="checkbox" name="hubterms" id="hubterms" required><span class="js-hubname">{{i18n.hubTou}}</span>\n                        <a class="js-modal-toggle" data-modal="toumodal" tabindex="0">\n                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="svg-icon svg-icon-light-blue svg-icon-live svg-icon-large" focusable="false">\n                                {{&icons.info}}\n                            </svg>\n                        </a>\n                        <div class="input-error-message js-hubterms-error"></div>\n                    </label>\n                    {{/info.termsAndConditions}}\n                    <label class="trailer-quarter">\n                        <input type="checkbox" name="terms" id="terms" required>{{i18n.arcgisTou}}\n                        <div class="input-error-message js-terms-error"></div>\n                    </label>\n                    <label>\n                        <input type="checkbox" name="privacy" id="privacy" required>{{i18n.arcgisPrivacy}}\n                        <div class="input-error-message js-privacy-error"></div>\n                    </label>\n                    <button id="nextBtn" type="submit" class="btn btn-fill btn-small">{{i18n.nextBtn}}</button>\n                </div>\n            </div>\n        </form>\n    </section>\n    {{/info.showEmail}}\n    {{#info.showSocial}}\n    <section class="social-wrapper flex flex-justify padded-section">\n        {{#info.socialProviders}}\n            {{^info.socialIconsOnly}}\n            <a class="btn btn-small btn-clear padded-section js-provider-{{.}}" href="{{info.hostname}}{{info.contextPath}}/oauth2/social/authorize?socialLoginProviderName={{.}}&createNewSocialUser=true&autoAccountCreateForSocial=true&oauth_state={{info.oauth_state}}">\n                {{&info.getSocialIcon}}<span>&nbsp;{{info.capitalize}}</span>\n            </a>\n            {{/info.socialIconsOnly}}\n            {{#info.socialIconsOnly}}\n            <a class="btn btn-fill btn-clear padded-section js-provider-{{.}}" href="{{info.hostname}}{{info.contextPath}}/oauth2/social/authorize?socialLoginProviderName={{.}}&createNewSocialUser=true&autoAccountCreateForSocial=true&oauth_state={{info.oauth_state}}">\n                <div class="tooltip flex-item" aria-label="{{i18n.signInWithSocial}} {{info.capitalize}}">\n                    {{&info.getSocialIcon}}\n                </div>\n            </a>\n            {{/info.socialIconsOnly}}\n        {{/info.socialProviders}}\n    </section>\n    {{/info.showSocial}}\n</div>\n{{#info.termsAndConditions}}\n<div class="js-modal modal-overlay" data-modal="toumodal">\n    <div class="modal-content" role="dialog" aria-labelledby="hubterms" role="dialog">\n        <h4 class="js-hubname">{{i18n.hubTou}}</h4>\n        <a class="js-modal-toggle right modal-close" aria-label="Close modal" tabindex="0">\n            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svg-icon svg-icon-gray svg-icon-live" width="24" height="24" focusable="false">\n                {{&icons.close}}\n            </svg>\n        </a>\n        <div>{{&info.termsAndConditions}}</div>\n        <button id="modalOk" class="btn btn-small right leader-half js-modal-toggle">{{i18n.ok}}</button>\n    </div>\n</div>\n{{/info.termsAndConditions}}\n'
    }), define("createAccount", ["calcite-web", "helpers", "mustache", "icons", "socialHelper", "i18n!../nls/oauth", "text!../contents/createAccount.html"], function (e, t, n, i, a, s, r) {
        return {
            emailRe: /@/,
            errors: null,
            startup: function (n) {
                this.authInfo = n, this.errors = {
                    terms: !0,
                    privacy: !0,
                    hubterms: !1
                }, document.documentElement.lang = n.locale, t.setTitle(s.createAccount.title || s.createAccount.windowTitle), t.checkRTL(n.locale), this.render(n), e.init(), this.addEventHandlers(), t.setContrastInfo()
            },
            render: function (o) {
                t.checkRTL(o.locale), e.addClass(document.body, "top-align");
                var c = o.hubEnabled || o.isCommunity;
                if (o.isHubRelated = c, o.hostname = t.getPortalHostname(o, o.refUrl), o.showBoth = !c || o.isAccountSocialAutoJoins && o.isEnableArcGISAutoSignups, o.showEmail = !c || o.isEnableArcGISAutoSignups, o.showSocial = !c || o.isAccountSocialAutoJoins, (o.showBoth || o.showSocial) && a.addSocialInfo(o), t.queryOne(".content").innerHTML = n.render(r, {
                        info: o,
                        i18n: t.extend({
                            ok: s.securityQuestion.okBtn
                        }, s.createAccount),
                        icons: i
                    }), c) {
                    var l = o.isCommunity ? o.orgName : o.companionOrganizations && o.companionOrganizations[0] && o.companionOrganizations[0].orgName;
                    e.nodeListToArray(t.query(".js-hubname")).forEach(function (e) {
                        e.innerHTML = t.sub(e.innerHTML, {
                            hubname: l
                        })
                    })
                }
                if (!c || o.showEmail) {
                    var u = !!o.activationCode,
                        d = o.hostname + "/home/" + (u ? "termsofusecommunityorg.html" : "termsofuse.html"),
                        f = t.byId("readTou");
                    f.innerHTML = t.sub(f.innerHTML, {
                        touHref: d,
                        privacyHref: "https://www.esri.com/legal/privacy"
                    })
                }
            },
            addEventHandlers: function () {
                this.authInfo.showEmail && (e.addEvent(t.byId("email"), "blur", this._checkValidEmail.bind(this)), e.addEvent(t.byId("confirm"), "blur", this._checkMatchEmail.bind(this)), e.addEvent(t.byId("firstName"), "blur", this._checkName.bind(this)), e.addEvent(t.byId("lastName"), "blur", this._checkName.bind(this)), this.authInfo.termsAndConditions && (this.errors.hubterms = !0), e.nodeListToArray(t.query("#privacy, #terms, #hubterms")).forEach(function (t) {
                    e.addEvent(t, "change", function (e) {
                        var t = e.target;
                        this.errors[t.id] = !t.checked
                    }.bind(this))
                }.bind(this)), e.addEvent(t.byId("create"), "submit", function (n) {
                    n.preventDefault(), e.nodeListToArray(t.query("input[required]")).forEach(function (e) {
                        this._checkEmpty({
                            target: e
                        })
                    }.bind(this)), 0 == Object.keys(this.errors).reduce(function (e, t) {
                        return !0 === this.errors[t] ? e + 1 : e
                    }.bind(this), 0) && (this.authInfo.showEmail && (t.byId("accept").value = !0), n.target.submit())
                }.bind(this)), e.nodeListToArray(t.query(".js-modal-toggle")).forEach(function (t) {
                    e.addEvent(t, "keydown", function (e) {
                        "Tab" !== e.key && 9 !== e.keyCode && (e.preventDefault(), "Space" != e.key && "Enter" != e.key && 0 != e.keyCode && 13 != e.keyCode && 32 != e.keyCode || e.target.click())
                    })
                }))
            },
            _checkEmpty: function (e) {
                var n = e.target,
                    i = t.queryOne(".js-" + n.id + "-error"),
                    a = 0 == n.value.length || "checkbox" == n.type.toLowerCase() && !0 !== n.checked;
                !this.errors[n.name] && this._reportError({
                    el: n,
                    errEl: i,
                    valid: !a,
                    msg: s.createAccount.errors["missing_" + n.id]
                })
            },
            _checkName: function (e) {
                var n = e.target,
                    i = t.queryOne(".js-" + n.id + "-error"),
                    a = n.value.length > 0;
                n.value.length > 40 ? this._reportError({
                    el: n,
                    errEl: i,
                    valid: !1,
                    msg: s.createAccount.errors.long_name
                }) : a && this._reportError({
                    el: n,
                    errEl: i,
                    valid: !0,
                    msg: ""
                })
            },
            _checkValidEmail: function (e) {
                var n = e.target,
                    i = n.value,
                    a = t.queryOne(".js-" + n.id + "-error"),
                    r = this.emailRe.test(i);
                i.length > 0 && this._reportError({
                    el: n,
                    errEl: a,
                    valid: r,
                    msg: s.createAccount.errors.invalid_email
                })
            },
            _checkMatchEmail: function (e) {
                var n = e.target,
                    i = n.value,
                    a = t.byId("email").value,
                    r = t.queryOne(".js-confirm-error"),
                    o = i != a;
                i.length > 0 && a.length > 0 && this._reportError({
                    valid: !o,
                    el: n,
                    errEl: r,
                    msg: s.createAccount.errors.unmatched_email
                })
            },
            _reportError: function (n) {
                var i = "";
                if (n.valid || e.hasClass(n.errEl, "is-active") ? n.valid && (i = "removeClass", this.errors[n.el.id] = !1) : (i = "addClass", n.errEl.innerHTML = n.msg, this.errors[n.el.id] = !0, n.el.focus()), i) {
                    e[i](n.el, "input-error");
                    var a = t.query(".input-error-message.is-active");
                    if ("addClass" == i && a.length > 0) return;
                    e[i](n.errEl, "is-active")
                }
            }
        }
    }), define("text!../contents/setupAccount.html", [], function () {
        return '<div>\n    <div class="js-header header-bar flex flex-justify">\n        <div class="font-size-1 page-title width-full">\n            {{^info.isCommunity}}{{i18n.createAccount.setupPublic}}{{/info.isCommunity}}\n            {{#info.isCommunity}}<span class="js-hubname">{{i18n.createAccount.setupHubAcct}}</span>{{/info.isCommunity}}\n        </div>\n        {{^info.signinThumbnail}}{{&icons.esriSvg}}{{/info.signinThumbnail}}\n        {{#info.signinThumbnail}}\n        <div class="custom-logo">\n        <img src="{{info.hostname}}{{info.contextPath}}/rest/oauth2/orgInfo/{{info.signinThumbnail}}" alt=""/>\n        </div>\n        {{/info.signinThumbnail}}\n    </div>\n    <div tabindex="0" class="alert alert-red js-message"></div>\n    <section class="panel-white trailer-half padded-section">\n        <form method="POST" name="f" id="oauth" action="{{info.hostname}}{{info.contextPath}}/oauth2/createUser" novalidate autocomplete="off">\n            <input type="hidden" id="oauth_state" name="oauth_state">\n            <label>{{i18n.createAccount.usernameLbl}}\n                <input type="text" name="username" aria-label="{{i18n.createAccount.usernameLbl}}" id="username" required autofocus autocomplete="off" autocorrect="off"\n                    autocapitalize="off" spellcheck="false" aria-describedby="usernameError usernameReqs">\n                <div class="input-error-message js-username-error" id="usernameError"></div>\n            </label>\n            <div class="alert alert-clear trailer-half js-username-alert" id="usernameReqs">\n                {{i18n.createAccount.usernameMust}}:\n                <ul class="js-username-reqs">\n                    <li>{{i18n.createAccount.usernameReq1}}</li>\n                    <li>{{i18n.createAccount.usernameReq2}}</li>\n                    <li>{{i18n.createAccount.usernameReq5}}</li>\n                    <li>{{i18n.createAccount.usernameReq4}}</li>\n                </ul>\n            </div>\n            <label>{{i18n.createAccount.passwordLbl}}\n                <input type="password" name="password" aria-label="{{i18n.createAccount.passwordLbl}}" id="password" required aria-describedby="passwordError passwordReqs">\n                <div class="input-error-message js-password-error" id= "passwordError"></div>\n            </label>\n            <div class="alert alert-clear trailer-half js-password-alert" id="passwordReqs">\n                <div class="js-password-meter trailer-half"></div>\n                {{i18n.createAccount.passwordMust}}:\n                <ul class="js-password-reqs">\n                    <li>{{i18n.createAccount.passwordReq1}}</li>\n                    <li>{{i18n.createAccount.passwordReq2}}</li>\n                    <li>{{i18n.createAccount.passwordReq3}}</li>\n                    <li>{{i18n.createAccount.passwordReq4}}</li>\n                </ul>\n            </div>\n            <label>{{i18n.createAccount.retypePassword}}\n                <input type="password" id="confirmPass" aria-label="{{i18n.createAccount.confirmPassword}}" required>\n                <div class="input-error-message js-confirmPass-error"></div>\n            </label>\n            <hr class="trailer-half leader-half">\n            <label>{{i18n.createAccount.securityQuestion}}\n                <select name="securityQuestionIdx" id="question" class="select-full required">\n                    <option value="-1">{{i18n.createAccount.selectOne}}</option>\n                </select>\n                <div class="input-error-message js-question-error"></div>\n            </label>\n            <label>{{i18n.createAccount.answer}}\n                <input type="text" name="securityAnswer" id="answer" required>\n                <div class="input-error-message js-answer-error"></div>\n            </label>\n            <button id="createUserBtn" type="submit" class="btn btn-fill btn-small">{{i18n.createAccount.createAccountBtn}}</button>\n        </form>\n    </section>\n</div>\n'
    }), define("setupAccount", ["calcite-web", "helpers", "mustache", "qwest", "PasswordMeter", "icons", "i18n!../nls/oauth", "text!../contents/setupAccount.html"], function (e, t, n, i, a, s, r, o) {
        return {
            social: !1,
            rules: null,
            meter: null,
            valid_username: !1,
            valid_password: !1,
            valid_confirmPass: !1,
            startup: function (n) {
                this.authInfo = n, document.documentElement.lang = n.locale, t.setTitle(r.createAccount.title || r.createAccount.windowTitle), t.checkRTL(n.locale), n.hostname = t.getPortalHostname(n, n.refUrl), this.render(n), e.init(), this.rules = this._setRules(), this.addEventHandlers(), t.setContrastInfo()
            },
            render: function (c) {
                if (t.checkRTL(c.locale), e.addClass(document.body, "top-align"), t.queryOne(".content").innerHTML = n.render(o, {
                        info: c,
                        i18n: r,
                        icons: s
                    }), t.byId("oauth_state").setAttribute("value", c.oauth_state), this._buildQuestions(), c.isCommunity || c.hubEnabled) {
                    var l = c.isCommunity ? c.orgName : c.companionOganizations && c.companionOganizations[0] && c.companionOganizations[0].orgName;
                    e.nodeListToArray(t.query(".js-hubname")).forEach(function (e) {
                        e.innerHTML = t.sub(e.innerHTML, {
                            hubname: l
                        })
                    })
                }
                this.meter = new a({
                    attach: t.queryOne(".js-password-meter"),
                    input: t.byId("password"),
                    authInfo: c
                }), this.meter.startup(), i.get(this.authInfo.hostname + this.authInfo.contextPath + "/rest/portals/helpMap", {
                    f: "json"
                }, {
                    responseType: "json",
                    cache: !0
                }).then(function (n) {
                    var i = n.response,
                        a = this.authInfo.isPortal ? "120001688" : "120001811",
                        s = i.helpMap.m[a],
                        r = this.authInfo.helpBase + s;
                    e.nodeListToArray(t.query(".js-password-link")).forEach(function (e) {
                        e.setAttribute("href", r)
                    })
                }.bind(this))
            },
            addEventHandlers: function () {
                if (this.social) {
                    var n = t.byId("username"),
                        i = t.queryOne(".js-username-alert");
                    e.addEvent(n, "input", function (t) {
                        e.hasClass(i, "is-active") || e.addClass(i, "is-active"),
                            this.valid_username = !1, this._validateInput(t)
                    }.bind(this)), e.addEvent(n, "blur", this._checkFieldValid.bind(this))
                } else e.addEvent(t.byId("password"), "focus", function () {
                    e.addClass(t.queryOne(".js-password-alert"), "is-active")
                }), e.addEvent(t.byId("username"), "focus", function () {
                    e.addClass(t.queryOne(".js-username-alert"), "is-active")
                }), e.nodeListToArray(t.query("#password, #username")).forEach(function (t) {
                    e.addEvent(t, "input", this._validateInput.bind(this)), e.addEvent(t, "blur", this._checkFieldValid.bind(this))
                }.bind(this)), e.addEvent(t.byId("password"), "blur", function (e) {
                    var n = t.byId("password"),
                        i = t.byId("confirmPass");
                    n.value.length && i && i.value.length && (this.valid_confirmPass = i.value == n.value, this._checkFieldValid({
                        target: i
                    })), this._validateInput(e) && this._checkFieldValid(e)
                }.bind(this)), e.addEvent(t.byId("confirmPass"), "blur", function (e) {
                    var n = e.target,
                        i = n.value,
                        a = t.byId("password").value;
                    this.valid_confirmPass = i == a, i.length > 0 && this._checkFieldValid(e)
                }.bind(this));
                e.addEvent(t.byId("oauth"), "submit", this._checkRequired.bind(this))
            },
            _buildQuestions: function () {
                var e = t.byId("question"),
                    n = [];
                Object.keys(r.securityQuestions).forEach(function (e) {
                    n[~~e - 1] = r.securityQuestions[e]
                }), n.forEach(function (t, n) {
                    var i = document.createElement("option");
                    i.innerHTML = t, i.setAttribute("value", n + 1), e.appendChild(i)
                })
            },
            _setRules: function () {
                return {
                    password: [function (e) {
                        return e != t.byId("username").value
                    }, function (e) {
                        return e.length >= 8
                    }, function (e) {
                        return /[A-Za-z]/.test(e)
                    }, function (e) {
                        return /[0-9]/.test(e)
                    }],
                    username: [function (e) {
                        return e.length > 5 && e.length < 129
                    }, function (e) {
                        return !/[^\w\.@\-\s]/.test(e)
                    }, function (e) {
                        return !/[_\.@\-]/.test(e.slice(0, 1)) && !/[_\.@\-]/.test(e.slice(-1))
                    }, function (e) {
                        return !/\s/.test(e)
                    }]
                }
            },
            _validateInput: function (n) {
                var i = n.target,
                    a = i.id,
                    s = this.rules[a],
                    r = 0;
                s.forEach(function (n, s) {
                    var o = t.queryOne(".js-" + a + "-reqs").children[s];
                    i.value.length && n(i.value) ? (r++, e.removeClass(o, "svg-icon-red icon-ui-notice-round"), e.addClass(o, "svg-icon-green icon-ui-check-mark")) : (r--, e.removeClass(o, "svg-icon-green icon-ui-check-mark"), 0 === i.value.length && e.removeClass(o, "icon-ui-red icon-ui-notice-round"))
                });
                var o = r == s.length;
                return "password" == a && this.meter && this.meter.strength < 2 && o && (o = !1), this["valid_" + a] = o, o
            },
            _checkFieldValid: function (n) {
                var i = n.target,
                    a = i.id,
                    s = t.queryOne(".js-" + a + "-error");
                !this["valid_" + a] && i.value.length > 0 ? (s.innerHTML = r.createAccount.errors["invalid_" + a], e.addClass(i, "input-error"), !t.queryOne(".input-error-message.is-active") && e.addClass(s, "is-active"), e.removeClass(t.findParentNode("label", i), "field-suffix icon-ui-check-mark svg-icon-green"), this.rules[a] && this.rules[a].forEach(function (n, s) {
                    var r = t.queryOne(".js-" + a + "-reqs").children[s];
                    n(i.value) ? (e.removeClass(r, "svg-icon-red icon-ui-notice-round"), e.addClass(r, "svg-icon-green icon-ui-check-mark")) : (e.removeClass(r, "svg-icon-green icon-ui-check-mark"), e.addClass(r, "svg-icon-red icon-ui-notice-round"))
                })) : (e.removeClass(i, "input-error"), e.removeClass(s, "is-active"), "username" == a && i.value.length > 0 ? this._checkUsernameExist(i) : this._markFieldValid(i))
            },
            _checkUsernameExist: function (n) {
                var a = n.value,
                    s = t.findParentNode("label", n),
                    o = t.queryOne(".js-" + n.id + "-error"),
                    c = this.authInfo.hostname + this.authInfo.contextPath + "/rest/community/checkUsernames";
                e.addClass(s, "field-suffix icon-ui-loading-indicator svg-icon-blue"), i.post(c, {
                    usernames: a,
                    f: "json"
                }, {
                    cache: !0,
                    responseType: "json"
                }).then(function (i, a) {
                    if (e.removeClass(s, "icon-ui-loading-indicator svg-icon-blue"), a && a.usernames) {
                        var c = a.usernames[0];
                        c && c.requested == c.suggested ? this._markFieldValid(n) : (this.valid_username = !1, o.innerHTML = r.createAccount.errors.taken_username, e.removeClass(s, "icon-ui-check-mark svg-icon-green"), e.addClass(n, "input-error"), !t.queryOne(".input-error-message.is-active") && e.addClass(o, "is-active"))
                    }
                }.bind(this))
            },
            _markFieldValid: function (n) {
                var i = n.id,
                    a = t.queryOne(".js-" + i + "-alert"),
                    s = t.findParentNode("label", n);
                a && e.removeClass(a, "is-active"), n.value.length > 0 && e.addClass(s, "field-suffix icon-ui-check-mark svg-icon-green")
            },
            _checkRequired: function (n) {
                n.preventDefault();
                var i = n.target,
                    a = 0;
                if (e.nodeListToArray(t.query("input[required], .required", i)).forEach(function (n) {
                        var i = n.tagName.toLowerCase(),
                            s = t.queryOne(".js-" + n.id + "-error"),
                            o = !1;
                        "input" == i && "checkbox" != n.type && "radio" != n.type ? n.value.length > 0 && !1 !== this["valid_" + n.id] ? o = !0 : 0 == n.value.length && (o = !1) : "checkbox" == n.type ? o = n.checked : "select" == i && (o = n.selectedIndex > 0), o ? (e.removeClass(n, "input-error"), e.removeClass(s, "is-active")) : e.hasClass(s, "is-active") || (s.innerHTML = r.createAccount.errors["missing_" + n.id], e.addClass(n, "input-error"), !t.queryOne(".input-error-message.is-active") && e.addClass(s, "is-active"), a++)
                    }.bind(this)), 0 == a && 1 == this.valid_username && 1 == this.valid_confirmPass) !0 !== this.valid_password ? this.meter && this.meter.state >= 2 ? (this.valid_password = !0, i.submit()) : t.byId("password").focus() : i.submit();
                else {
                    var s = t.queryOne(".input-error");
                    s && s.focus()
                }
            }
        }
    }), define("text!../contents/emailSent.html", [], function () {
        return '<div>\n    <div class="js-header header-bar flex flex-justify">\n        <div class="spacer"></div>\n        {{^info.signinThumbnail}}{{&icons.esriSvg}}{{/info.signinThumbnail}}\n        {{#info.signinThumbnail}}\n        <div class="custom-logo">\n        <img src="{{info.hostname}}{{info.contextPath}}/rest/oauth2/orgInfo/{{info.signinThumbnail}}" alt=""/>\n        </div>\n        {{/info.signinThumbnail}}\n    </div>\n    <div class="js-email-pane">\n        <div class="flex trailer-half">\n            <img class="flex-item" src="{{info.contextPath}}/files/img/oauth-email-sent.svg" alt="Email sent">\n        </div>\n        <div class="text-center">\n            <div id="primary" class="trailer-half font-size-1">{{i18n.emailSent}}</h4>\n                <div class="trailer-quarter font-size--1" id="secondary">{{i18n.clickLink}}</div>\n            </div>\n        </div>\n    </div>\n'
    }), define("emailSent", ["helpers", "mustache", "icons", "i18n!../nls/oauth", "text!../contents/emailSent.html"], function (e, t, n, i, a) {
        return {
            startup: function (t) {
                this.authInfo = t, document.documentElement.lang = t.locale, e.setTitle(i.email.title || i.email.windowTitle), e.checkRTL(t.locale), this.render(t), e.setContrastInfo()
            },
            render: function (s) {
                e.checkRTL(s.locale);
                var r = e.queryOne(".content");
                s.hostname = e.getPortalHostname(s, s.refUrl), r.innerHTML = t.render(a, {
                    info: s,
                    i18n: i.email,
                    icons: n
                })
            }
        }
    }), define("text!../contents/invalidSignup.html", [], function () {
        return '<div>\n    <div class="js-header header-bar flex flex-justify">\n        <div class="font-size-1 page-title width-full">{{i18n.invalidSignup}}</div>\n        {{^info.signinThumbnail}}{{&icons.esriSvg}}{{/info.signinThumbnail}}\n        {{#info.signinThumbnail}}\n        <div class="custom-logo">\n        <img src="{{info.hostname}}{{info.contextPath}}/rest/oauth2/orgInfo/{{info.signinThumbnail}}" alt=""/>\n        </div>\n        {{/info.signinThumbnail}}\n    </div>\n    <section class="panel-white trailer-half padded-section">\n        {{i18n.invalidSignupMsg}}\n    </section>\n</div>\n'
    }), define("invalidSignup", ["helpers", "mustache", "icons", "i18n!../nls/oauth", "text!../contents/invalidSignup.html"], function (e, t, n, i, a) {
        return {
            startup: function (t) {
                this.authInfo = t, document.documentElement.lang = t.locale, e.setTitle(i.createAccount.invalidLinkTitle), e.checkRTL(t.locale), this.render(t), e.setContrastInfo()
            },
            render: function (s) {
                e.checkRTL(s.locale);
                var r = e.queryOne(".content");
                s.hostname = e.getPortalHostname(s, s.refUrl), r.innerHTML = t.render(a, {
                    info: s,
                    i18n: i.createAccount,
                    icons: n
                })
            }
        }
    }), define("signUp", ["createAccount", "setupAccount", "emailSent", "invalidSignup"], function (e, t, n, i) {
        return {
            startup: function (a) {
                a.signupLinkExpiredOrInvalid ? i.startup(a) : a.newUserEmailValidated ? t.startup(a) : a.newUserSignupEmailSent ? n.startup(a) : e.startup(a)
            }
        }
    }), define("text!../contents/signout.html", [], function () {
        return '<div>\n    <div class="js-header header-bar flex flex-justify">\n        <div class="font-size-1 page-title width-full">{{i18n.signOutTitle}}</div>\n        {{^info.signinThumbnail}}{{&icons.esriSvg}}{{/info.signinThumbnail}}\n        {{#info.signinThumbnail}}\n        <div class="custom-logo">\n        <img src="{{info.hostname}}{{info.contextPath}}/rest/oauth2/orgInfo/{{info.signinThumbnail}}" alt=""/>\n        </div>\n        {{/info.signinThumbnail}}\n    </div>\n    <section class="panel-white trailer-half padded-section">\n        {{i18n.signOutMsg}}\n    </section>\n</div>\n'
    }), define("signout-new", ["helpers", "mustache", "icons", "i18n!../nls/oauth", "text!../contents/signout.html"], function (e, t, n, i, a) {
        return {
            startup: function (t) {
                this.authInfo = t, document.documentElement.lang = t.locale, e.setTitle(i.signOutTitle), this.render(t), e.setContrastInfo()
            },
            render: function (s) {
                e.checkRTL(s.locale);
                var r = e.queryOne(".content");
                s.hostname = e.getPortalHostname(s, s.refUrl), r.innerHTML = t.render(a, {
                    info: s,
                    i18n: i,
                    icons: n
                })
            }
        }
    }), define("text!../contents/approve.html", [], function () {
        return '<div>\n  <div class="js-header header-bar flex flex-justify">\n    <div class="font-size-1 page-title width-full">{{i18n.approvalTitle}}</div>\n    {{^info.signinThumbnail}}{{&icons.esriSvg}}{{/info.signinThumbnail}}\n    {{#info.signinThumbnail}}\n    <div class="custom-logo">\n      <img src="{{info.hostname}}{{info.contextPath}}/rest/oauth2/orgInfo/{{info.signinThumbnail}}" alt=""/>\n    </div>\n    {{/info.signinThumbnail}}\n  </div>\n  <div>\n    <form action="{{info.hostname}}{{info.contextPath}}/oauth2/approve" method="post">\n      <input type="hidden" name="oauth_state" id="oauth_state" value="{{info.oauth_state}}">\n      <section class="leader-1 trailer-1 padded-section">\n        <div id="userPanel">\n          <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false">\n            {{&icons.user}}\n          </svg>{{info.username}}\n        </div>\n        <div class="leader-half"><a href="#" id="anotherLink">{{i18n.signInAs}}</a></div>\n      </section>\n      <section class="leader-1 trailer-1 padded-section">\n        <div class="flex flex-around align-center">\n          <p class="empty margin-right-1 js-org-info"><span class="avenir-demi">{{info.appTitle}}</span>\n            {{#info.appOrgInfo}}(<span id="devBy">{{i18n.developedByOrg}}</span>){{/info.appOrgInfo}}\n            {{^info.isPortal}}{{i18n.accessAccountInfo}}{{/info.isPortal}}\n            {{#info.isPortal}}{{i18n.accessEnterpriseInfo}}{{/info.isPortal}}\n          </p>\n          {{#info.appOrgInfo}}\n            <a class="js-modal-toggle help-toggle" data-modal="appinfo" tabindex="0">\n            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"\n              class="svg-icon svg-icon-light-blue svg-icon-live svg-icon-large" focusable="false">\n              {{&icons.help}}\n            </svg>\n          </a>\n          {{/info.appOrgInfo}}\n        </div>\n      </section>\n      <div class="flex">\n        <button type="submit" name="approve" value="false"\n          class="btn btn-small btn-fill btn-clear margin-right-1">{{i18n.cancel}}</button>\n        <button type="submit" name="approve" value="true"\n          class="btn btn-small btn-fill margin-left-1">{{i18n.allow}}</button>\n      </div>\n    </form>\n  </div>\n</div>\n'
    }), define("text!../contents/appInfoModal.html", [], function () {
        return '{{#info.appOrgInfo}}\n<div class="js-modal modal-overlay" data-modal="appinfo">\n    <div class="modal-content" role="dialog" aria-labelledby="modal" role="dialog">\n        <h4>{{info.appTitle}}</h4>\n        <a class="js-modal-toggle right modal-close" aria-label="Close modal" tabindex="0">\n            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svg-icon svg-icon-gray svg-icon-live" width="24" height="24" focusable="false">\n                {{&icons.close}}\n            </svg>\n        </a>\n        <div class="clearfix trailer-half flex flex-justify">\n            {{#info.appOrgInfo.thumbnail}}\n            <img class="left app-logo" src="{{info.hostname}}{{info.contextPath}}/oauth2/apps/{{info.client_id}}/vendorinfo/{{info.appOrgInfo.thumbnail}}">\n            {{/info.appOrgInfo.thumbnail}}\n            <div>\n                <div class="text-dark-gray font-size--2">{{i18n.developedBy2}}</div>\n                <div class="font-size-0">{{info.appOrgInfo.name}}</div>\n            </div>\n        </div>\n        <div>{{&info.appOrgInfo.description}}</div>\n    </div>\n</div>\n{{/info.appOrgInfo}}\n'
    }), define("approve", ["calcite-web", "helpers", "mustache", "icons", "i18n!../nls/oauth", "text!../contents/approve.html", "text!../contents/appInfoModal.html"], function (e, t, n, i, a, s, r) {
        return {
            startup: function (n) {
                this.authInfo = n, document.documentElement.lang = n.locale, t.setTitle(a.approvalTitle), t.checkRTL(n.locale), this.render(n), e.init(), this.addEventHandlers(), t.setContrastInfo()
            },
            render: function (e) {
                t.checkRTL(e.locale);
                var o = t.queryOne(".content");
                e.hostname = t.getPortalHostname(e, e.refUrl), o.innerHTML = n.render(s + r, {
                    info: e,
                    i18n: a,
                    icons: i
                }), t.byId("anotherLink").href = window.location.href.replace("approve", "authorize") + (e.redirect_uri ? "&redirect_uri=" : "");
                var c = t.queryOne(".js-org-info");
                c && (c.innerHTML = t.sub(c.innerHTML, {
                    orgname: e.appOrgInfo ? e.appOrgInfo.name : "",
                    portalName: e.orgName
                }))
            },
            addEventHandlers: function () {
                e.nodeListToArray(t.query(".js-modal-toggle")).forEach(function (t) {
                    e.addEvent(t, "keydown", function (e) {
                        "Tab" !== e.key && 9 !== e.keyCode && (e.preventDefault(), "Space" != e.key && "Enter" != e.key && 0 != e.keyCode && 13 != e.keyCode && 32 != e.keyCode || e.target.click())
                    })
                })
            }
        }
    }), define("text!../contents/mfa.html", [], function () {
        return '<div>\n    <form method="post" name="f" id="oauth" action="{{info.hostname}}{{info.contextPath}}/oauth2/enableMfa">\n        <div class="js-header header-bar flex flex-justify">\n            <div class="font-size-1 page-title width-full">{{i18n.mfaEanblePage.title}}</div>\n            {{^info.signinThumbnail}}{{&icons.esriSvg}}{{/info.signinThumbnail}}\n            {{#info.signinThumbnail}}\n            <div class="custom-logo">\n            <img src="{{info.hostname}}{{info.contextPath}}/rest/oauth2/orgInfo/{{info.signinThumbnail}}" alt=""/>\n            </div>\n            {{/info.signinThumbnail}}\n        </div>\n        <div tabindex="0" class="alert alert-red js-message"></div>\n        <section class="tab-contents padded-section js-tab-group mfa-container">\n            <input type="hidden" name="oauth_state" id="oauth_state" value="{{info.oauth_state}}">\n            <article class="tab-section js-tab-section js-step-0 is-active">\n                <p class="font-size--3">{{i18n.mfaEanblePage.step1Message}}</p>\n                <div class="progress-bar-container">\n                    <div class="progress-bar progress-1"></div>\n                </div>\n                <p class="font-size--3 trailer-half leader-half">{{i18n.mfaEanblePage.installApp}}</p>\n                <div class="app-list trailer-1">\n                    <div class="app-item">\n                        <h3 class="text-darker-gray font-size--2 trailer-0">Google</h3>\n                        <a class="font-size--1"\n                            href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2"\n                            target="_blank">\n                            Google Authenticator\n                        </a>\n                    </div>\n                    <div class="app-item">\n                        <h3 class="text-darker-gray font-size--2 trailer-0">iOS</h3>\n                        <a class="font-size--1" href="https://itunes.apple.com/us/app/google-authenticator/id388497605"\n                            target="_blank">\n                            Google Authenticator\n                        </a>\n                    </div>\n                    <div class="app-item">\n                        <h3 class="text-darker-gray font-size--2 trailer-0">Windows</h3>\n                        <a class="font-size--1"\n                            href="https://www.microsoft.com/en-us/p/microsoft-authenticator/9nblgggzmcj6?activetab=pivot%3aoverviewtab"\n                            target="_blank">\n                            Authenticator\n                        </a>\n                    </div>\n                </div>\n                <div class="flex flex-justify">\n                    <button type="button" class="btn btn-small btn-transparent js-btn-cancel">{{i18n.cancel}}</button>\n                    <button type="button" class="btn btn-small js-btn-next">{{i18n.mfaEanblePage.nextBtn}}</button>\n                </div>\n            </article>\n            <article class="tab-section js-tab-section js-step-1">\n                <div class="progress-bar-container">\n                    <div class="progress-bar progress-2"></div>\n                </div>\n                <div class="js-qr-scan">\n                    <p class="font-size--3 leader-1">{{i18n.mfaEanblePage.scanCode}}</p>\n                    <div class="text-center qr-code trailer-1">\n                        <img src="{{info.mfaQrCode}}" alt="{{i18n.mfaEanblePage.qrCodeAlt}}"\n                            class="trailer-quarter"><br>\n                        <a href="#" class="js-no-scan-link pointer">{{i18n.mfaEanblePage.qrHelpLink}}</a>\n                    </div>\n                </div>\n                <div class="js-verify-code padding-left-2 padding-right-2 hide">\n                    <p class="font-size--3 leader-1">{{i18n.mfaEanblePage.seedMsg}}</p>\n                    <div class="flex flex-justify">\n                        {{#info.mfaSecretKey}}\n                        <div class="v-block">{{.}}</div>\n                        {{/info.mfaSecretKey}}\n                    </div>\n                </div>\n                <div class="flex flex-justify leader-1">\n                    <button type="button" class="btn btn-small btn-transparent js-btn-cancel">{{i18n.cancel}}</button>\n                    <div class="action-container">\n                        <button type="button" class="btn btn-small btn-clear js-btn-back">{{i18n.mfaEanblePage.prevBtn}}</button>\n                        <button type="button" class="btn btn-small js-btn-next">{{i18n.mfaEanblePage.nextBtn}}</button>\n                    </div>\n                </div>\n            </article>\n            <article class="tab-section js-tab-section js-step-2">\n                <div class="progress-bar-container">\n                    <div class="progress-bar progress-3"></div>\n                </div>\n                <div class="">\n                    <label><span class="block-el leader-1 trailer-1">{{i18n.mfaEanblePage.enterCode}}</span>\n                        <input id="mfa_code" autocomplete="off" autocorrect="off" autocapitalize="off"\n                            spellcheck="false" type="text" name="mfa_code" placeholder="{{i18n.mfaEanblePage.sixdigitcode}}" />\n                        <div class="input-error-message js-mfa_code-error"></div>\n                    </label>\n                </div>\n                <div class="flex flex-justify leader-1">\n                    <button type="button" class="btn btn-small btn-transparent js-btn-cancel">{{i18n.cancel}}</button>\n                    <div class="action-container">\n                        <button type="button" class="btn btn-small btn-clear js-btn-back">{{i18n.mfaEanblePage.prevBtn}}</button>\n                        <button type="submit"\n                            class="btn btn-small js-btn-finish">{{i18n.mfaEanblePage.finishBtn}}</button>\n                    </div>\n                </div>\n            </article>\n        </section>\n        <section class="js-exit padded-section hide">\n            <div class="flex vert-center min-height-300">\n                <div class="font-size-2 trailer-half">{{i18n.mfaEanblePage.exitMfa}}</div>\n                <p class="leader-half">{{i18n.mfaEanblePage.exitMfaSetup}}</p>\n            </div>\n            <div class="right">\n                <button type="button" class="btn btn-small margin-right-half js-btn-return">{{i18n.mfaEanblePage.continueSetup}}</button>\n                <button type="submit" name="cancelMfa" value="true" class="btn btn-small btn-clear js-btn-exit">{{i18n.mfaEanblePage.exitSetup}}</button>\n            </div>\n        </section>\n    </form>\n</div>\n'
    }), define("mfa", ["calcite-web", "helpers", "mustache", "icons", "i18n!../nls/oauth", "text!../contents/mfa.html"], function (e, t, n, i, a, s) {
        return {
            currentTab: 0,
            startup: function (n) {
                this.authInfo = n, document.documentElement.lang = n.locale, t.setTitle(a.mfaEanblePage.title || a.mfaEanblePage.windowTitle), t.checkRTL(n.locale), n.hostname = t.getPortalHostname(n, n.refUrl), n.mfaSecretKey = n.mfaSecretKey && n.mfaSecretKey.match(/.{1,4}/g), this.render(n), e.init(), this.addEventHandlers(), t.setContrastInfo()
            },
            render: function (e) {
                t.checkRTL(e.locale), t.queryOne(".content").innerHTML = n.render(s, {
                    info: e,
                    i18n: a,
                    icons: i
                });
                var r = t.queryOne("input[autofocus]");
                r && r.focus(), this._displayMessage(e), "OAUTH_0018" == this.authInfo.messageCode && (this._stepWizard({
                    target: {
                        className: "next"
                    }
                }), this._stepWizard({
                    target: {
                        className: "next"
                    }
                }))
            },
            addEventHandlers: function () {
                e.nodeListToArray(t.query(".js-btn-cancel, .js-btn-return")).forEach(function (t) {
                    e.addEvent(t, "click", this._toggleWizard.bind(this))
                }.bind(this)), e.nodeListToArray(t.query(".js-btn-next, .js-btn-back")).forEach(function (t) {
                    e.addEvent(t, "click", this._stepWizard.bind(this))
                }.bind(this)), e.addEvent(t.queryOne(".js-no-scan-link"), "click", this._showVerCode.bind(this)), e.addEvent(t.queryOne(".js-btn-finish"), "click", this._validateForm.bind(this)), e.addEvent(t.byId("mfa_code"), "blur", this._blurMfaCode.bind(this)), e.addEvent(t.byId("mfa_code"), "keyup", this._keyupMfaCode.bind(this))
            },
            _toggleWizard: function () {
                this._toggleList(t.query(".js-tab-group, .js-exit"), "hide")
            },
            _showVerCode: function () {
                e.removeClass(t.queryOne(".js-verify-code"), "hide")
            },
            _stepWizard: function (n) {
                e.removeClass(t.queryOne(".js-message"), "is-active");
                var i = n.target,
                    a = i.className.indexOf("next") > -1,
                    s = a ? 1 : -1,
                    r = this.currentTab + s,
                    o = ".js-step-" + this.currentTab + ", .js-step-" + r;
                if (e.nodeListToArray(t.query(o)).forEach(function (t) {
                        e.toggleClass(t, "is-active")
                    }), this.currentTab = r, 2 == this.currentTab) "OAUTH_0018" == this.authInfo.messageCode && (this._displayMessage(this.authInfo), this.authInfo.messageCode = ""), t.byId("mfa_code").focus();
                else {
                    var c = t.byId("mfa_code"),
                        l = t.queryOne(".js-mfa_code-error");
                    l && e.removeClass(l, "is-active"), c && e.removeClass(c, "input-error"), c.value = ""
                }
            },
            _validateForm: function (n) {
                n.preventDefault();
                var i = t.byId("mfa_code"),
                    s = t.queryOne(".js-mfa_code-error");
                6 != i.value.length ? (s.innerHTML = a.mfaEanblePage.missingCode, e.addClass(s, "is-active"), e.addClass(i, "input-error")) : t.byId("oauth").submit()
            },
            _blurMfaCode: function (n) {
                var i = n.target,
                    a = t.queryOne(".js-mfa_code-error");
                6 == i.value.length && e.hasClass(a, "is-active") && (e.removeClass(a, "is-active"), e.removeClass(i, "input-error"))
            },
            _keyupMfaCode: function (e) {
                ("Enter" == e.key || 32 == e.keyCode) && t.queryOne(".js-btn-finish").click()
            },
            _toggleList: function (t, n) {
                t = e.nodeListToArray(t), t.forEach(function (t) {
                    e.toggleClass(t, n)
                })
            },
            _displayMessage: function (n) {
                var i = n.messages && n.messages.length && n.messages[0];
                if (i) {
                    var s = i;
                    i.toLowerCase().indexOf("your login session has been reset") > -1 ? s = a.expiredSession : i.toLowerCase().indexOf("invalid credentials for reset user") > -1 ? s = a.resetPage.invalidOldPassword : i.toLowerCase().indexOf("invalid verification code") > -1 && (s = a.mfaEanblePage.invalidVerificationCode);
                    var r = t.queryOne(".js-message");
                    r.innerHTML = s, e.addClass(r, "is-active"), r.focus()
                }
            }
        }
    }), define("text!../contents/mfaCheck.html", [], function () {
        return '<div>\n    <div class="js-header header-bar flex flex-justify">\n        <div class="font-size-1 page-title width-full">\n            {{#info.orgName}}{{i18n.signInTo}}&nbsp;{{info.orgName}}{{/info.orgName}}\n            {{^info.orgName}}{{i18n.signIn}}{{/info.orgName}}\n        </div>\n        {{^info.signinThumbnail}}{{&icons.esriSvg}}{{/info.signinThumbnail}}\n        {{#info.signinThumbnail}}\n        <div class="custom-logo">\n        <img src="{{info.hostname}}{{info.contextPath}}/rest/oauth2/orgInfo/{{info.signinThumbnail}}" alt=""/>\n        </div>\n        {{/info.signinThumbnail}}\n    </div>\n    <div tabindex="0" class="alert alert-red js-message"></div>\n    <div class="font-size-1 shift-up-half">{{i18n.mfaEanblePage.title}}</div>\n    <form action="{{info.hostname}}{{info.contextPath}}/oauth2/mfa" name="f" id="oauth" method="POST" autocomplete="off"\n        novalidate>\n        <input type="hidden" id="oauth_state" name="oauth_state" value="{{info.oauth_state}}">\n        <section class="padded-section">\n            <p class="font-size--3 trailer-half leader-half">{{i18n.mfaEanblePage.mfaVerifyMsg}}</p>\n        </section>\n        <section class="padded-section">\n            <label class="leader-half">{{i18n.mfaEanblePage.authCodeLbl2}}\n                <input id="mfa_code" autofocus="true" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" type="text" name="mfa_code" />\n                <div class="input-error-message js-mfa_code-error"></div>\n            </label>\n            <button type="submit" class="btn btn-fill btn-small js-btn-verify trailer-half">{{i18n.mfaEanblePage.verifyBtn}}</button>\n        </section>\n        <section class="padded-section">\n            <p class="font-size--3 trailer-half leader-half text-center">\n                <a href="{{info.hostname}}{{info.contextPath}}/oauth2/troubleshoot?forgotMy=mfa&oauth_state={{info.oauth_state}}">\n                    {{i18n.mfaEanblePage.havingTrouble}}\n                </a>\n            </p>\n        </section>\n    </form>\n</div>\n'
    }), define("mfaCheck", ["calcite-web", "helpers", "mustache", "icons", "i18n!../nls/oauth", "text!../contents/mfaCheck.html"], function (e, t, n, i, a, s) {
        return {
            startup: function (n) {
                this.authInfo = n, document.documentElement.lang = n.locale, t.setTitle(a.signIn), t.checkRTL(n.locale), n.hostname = t.getPortalHostname(n, n.refUrl), this.render(n), e.init(), this.addEventHandlers(), t.setContrastInfo();
                var i = t.queryOne("input[autofocus]");
                i && i.focus()
            },
            render: function (e) {
                t.checkRTL(e.locale), t.queryOne(".content").innerHTML = n.render(s, {
                    info: e,
                    i18n: a,
                    icons: i
                }), this._displayMessage(e)
            },
            addEventHandlers: function () {
                e.addEvent(t.queryOne(".js-btn-verify"), "click", this._validateForm.bind(this)), e.addEvent(t.byId("mfa_code"), "blur", this._blurMfaCode.bind(this)), e.addEvent(t.byId("mfa_code"), "keyup", this._keyupMfaCode.bind(this))
            },
            _validateForm: function (n) {
                n.preventDefault();
                var i = t.byId("mfa_code"),
                    s = t.queryOne(".js-mfa_code-error");
                6 != i.value.length ? (s.innerHTML = a.mfaEanblePage.missingCode, e.addClass(s, "is-active"), e.addClass(i, "input-error"), i.focus()) : t.byId("oauth").submit()
            },
            _blurMfaCode: function (n) {
                var i = n.target,
                    a = t.queryOne(".js-mfa_code-error");
                6 == i.value.length && e.hasClass(a, "is-active") && (e.removeClass(a, "is-active"), e.removeClass(i, "input-error"))
            },
            _keyupMfaCode: function (e) {
                ("Enter" == e.key || 32 == e.keyCode) && t.queryOne(".js-btn-verify").click()
            },
            _displayMessage: function (n) {
                var i = n.messages && n.messages.length && n.messages[0];
                if (i) {
                    var s = i;
                    i.toLowerCase().indexOf("your login session has been reset") > -1 ? s = a.expiredSession : i.toLowerCase().indexOf("invalid credentials for reset user") > -1 ? s = a.resetPage.invalidOldPassword : i.toLowerCase().indexOf("invalid verification code") > -1 && (s = a.mfaEanblePage.invalidVerificationCode);
                    var r = t.queryOne(".js-message");
                    r.innerHTML = s, e.addClass(r, "is-active")
                }
            }
        }
    }), define("text!../contents/updateSecurity.html", [], function () {
        return '<div>\n    <div class="js-header header-bar flex flex-justify">\n        <div class="font-size-1 page-title width-full">{{i18n.updateProfile.securityQuestionTitle}}</div>\n        {{^info.signinThumbnail}}{{&icons.esriSvg}}{{/info.signinThumbnail}}\n        {{#info.signinThumbnail}}\n        <div class="custom-logo">\n        <img src="{{info.hostname}}{{info.contextPath}}/rest/oauth2/orgInfo/{{info.signinThumbnail}}" alt=""/>\n        </div>\n        {{/info.signinThumbnail}}\n    </div>\n    <div tabindex="0" class="alert alert-red js-message"></div>\n    <div class="panel panel-white trailer-half">\n        <form action="{{info.hostname}}{{info.contextPath}}/oauth2/updateUserProfile" name="f" id="oauth" method="POST" autocomplete="off" novalidate>\n            <input type="hidden" id="oauth_state" name="oauth_state" value="{{info.oauth_state}}">\n            <div class="trailer-half">{{i18n.updateProfile.securityQuestionMessage}}</div>\n            <label>{{i18n.updateProfile.securityQuestionLbl}}\n              <select name="securityQuestionIdx" id="question" class="select-full required">\n                  <option value="-1">{{i18n.createAccount.selectOne}}</option>\n              </select>\n              <div class="input-error-message js-question-error"></div>\n            </label>\n            <label><span id="questionLabel">{{i18n.updateProfile.answerLbl}}</span>\n                <input type="text" id="answer" class="required" name="securityAnswer" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">\n                <div class="input-error-message js-answer-error"></div>\n            </label>\n            <div class="flex leader-1">\n                <button type="submit" id="submitBtn" class="btn btn-fill btn-small margin-left-1" value="true">{{i18n.updateProfile.okBtn}}</button>\n            </div>\n        </form>\n    </div>\n</div>\n'
    }), define("updateSecurity", ["calcite-web", "helpers", "mustache", "icons", "i18n!../nls/oauth", "text!../contents/updateSecurity.html"], function (e, t, n, i, a, s) {
        return {
            startup: function (n) {
                this.authInfo = n, document.documentElement.lang = n.locale, t.setTitle(a.updateProfile.securityQuestionTitle), this.render(n), e.init(), this.addEventHandlers(), t.setContrastInfo()
            },
            render: function (e) {
                t.checkRTL(e.locale);
                var r = t.queryOne(".content");
                e.hostname = t.getPortalHostname(e, e.refUrl), r.innerHTML = n.render(s, {
                    info: e,
                    i18n: a,
                    icons: i
                }), this._buildQuestionList(), this.displayMessage(e)
            },
            addEventHandlers: function () {
                e.addEvent(t.byId("question"), "change", this._validateQuestion.bind(this)), e.addEvent(t.byId("answer"), "blur", this._validateAnswer.bind(this)), e.addEvent(t.byId("oauth"), "submit", this._validateForm.bind(this))
            },
            displayMessage: function (n) {
                var i = n.messages && n.messages[0] || "";
                if (i) {
                    var s = i.toLowerCase() || "",
                        r = i,
                        o = t.queryOne(".js-message");
                    s.indexOf("your login session has been reset") > -1 ? r = a.expiredSession : s.indexOf("unable to update user's profile") > -1 && (r = a.updateProfile.identityAnswerTooLong), o.innerHTML = r, e.addClass(o, "is-active"), o.focus()
                }
            },
            _buildQuestionList: function () {
                var e = t.byId("question"),
                    n = [];
                Object.keys(a.securityQuestions).forEach(function (e) {
                    n[~~e - 1] = a.securityQuestions[e]
                }), n.forEach(function (t, n) {
                    var i = document.createElement("option");
                    i.innerHTML = t, i.setAttribute("value", n + 1), e.appendChild(i)
                })
            },
            _validateQuestion: function (n) {
                var i = n.target;
                if (e.hasClass(i, "input-error") && -1 != i.value) {
                    var a = t.queryOne(".js-question-error");
                    e.removeClass(a, "is-active"), e.removeClass(i, "input-error")
                }
            },
            _validateAnswer: function (n) {
                var i = n.target,
                    s = i.value,
                    r = t.queryOne(".js-answer-error");
                s.length > 60 ? (r.innerHTML = a.updateProfile.identityAnswerTooLong, !t.queryOne(".input-error-message.is-active") && e.addClass(r, "is-active"), e.addClass(i, "input-error")) : e.hasClass(i, "input-error") && (e.removeClass(r, "is-active"), e.removeClass(i, "input-error"))
            },
            _validateForm: function (n) {
                n.preventDefault();
                var i = t.byId("question"),
                    s = t.byId("answer"),
                    r = !0;
                if (-1 == i.value) {
                    var o = t.queryOne(".js-question-error");
                    r = !1, o.innerHTML = a.createAccount.errors.missing_question, !t.queryOne(".input-error-message.is-active") && e.addClass(o, "is-active"), e.addClass(i, "input-error")
                }
                if (0 === s.value.length) {
                    var c = t.queryOne(".js-answer-error");
                    r = !1, c.innerHTML = a.updateProfile.missingAnswer, !t.queryOne(".input-error-message.is-active") && e.addClass(c, "is-active"), e.addClass(s, "input-error")
                }
                r && n.target.submit()
            }
        }
    });