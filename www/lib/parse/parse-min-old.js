(function (e) {
    e.Parse = e.Parse || {}, e.Parse.VERSION = "js1.2.0"
})(this), function () {
    function C(e, t, n) {
        if (e === t)return e !== 0 || 1 / e == 1 / t;
        if (e == null || t == null)return e === t;
        e._chain && (e = e._wrapped), t._chain && (t = t._wrapped);
        if (e.isEqual && S.isFunction(e.isEqual))return e.isEqual(t);
        if (t.isEqual && S.isFunction(t.isEqual))return t.isEqual(e);
        var r = a.call(e);
        if (r != a.call(t))return!1;
        switch (r) {
            case"[object String]":
                return e == String(t);
            case"[object Number]":
                return e != +e ? t != +t : e == 0 ? 1 / e == 1 / t : e == +t;
            case"[object Date]":
            case"[object Boolean]":
                return+e == +t;
            case"[object RegExp]":
                return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
        }
        if (typeof e != "object" || typeof t != "object")return!1;
        var i = n.length;
        while (i--)if (n[i] == e)return!0;
        n.push(e);
        var s = 0, o = !0;
        if (r == "[object Array]") {
            s = e.length, o = s == t.length;
            if (o)while (s--)if (!(o = s in e == s in t && C(e[s], t[s], n)))break
        } else {
            if ("constructor"in e != "constructor"in t || e.constructor != t.constructor)return!1;
            for (var u in e)if (S.has(e, u)) {
                s++;
                if (!(o = S.has(t, u) && C(e[u], t[u], n)))break
            }
            if (o) {
                for (u in t)if (S.has(t, u) && !(s--))break;
                o = !s
            }
        }
        return n.pop(), o
    }

    var e = this, t = e._, n = {}, r = Array.prototype, i = Object.prototype, s = Function.prototype, o = r.slice, u = r.unshift, a = i.toString, f = i.hasOwnProperty, l = r.forEach, c = r.map, h = r.reduce, p = r.reduceRight, d = r.filter, v = r.every, m = r.some, g = r.indexOf, y = r.lastIndexOf, b = Array.isArray, w = Object.keys, E = s.bind, S = function (e) {
        return new P(e)
    };
    typeof exports != "undefined" ? (typeof module != "undefined" && module.exports && (exports = module.exports = S), exports._ = S) : e._ = S, S.VERSION = "1.3.3";
    var x = S.each = S.forEach = function (e, t, r) {
        if (e == null)return;
        if (l && e.forEach === l)e.forEach(t, r); else if (e.length === +e.length) {
            for (var i = 0, s = e.length; i < s; i++)if (i in e && t.call(r, e[i], i, e) === n)return
        } else for (var o in e)if (S.has(e, o) && t.call(r, e[o], o, e) === n)return
    };
    S.map = S.collect = function (e, t, n) {
        var r = [];
        return e == null ? r : c && e.map === c ? e.map(t, n) : (x(e, function (e, i, s) {
            r[r.length] = t.call(n, e, i, s)
        }), e.length === +e.length && (r.length = e.length), r)
    }, S.reduce = S.foldl = S.inject = function (e, t, n, r) {
        var i = arguments.length > 2;
        e == null && (e = []);
        if (h && e.reduce === h)return r && (t = S.bind(t, r)), i ? e.reduce(t, n) : e.reduce(t);
        x(e, function (e, s, o) {
            i ? n = t.call(r, n, e, s, o) : (n = e, i = !0)
        });
        if (!i)throw new TypeError("Reduce of empty array with no initial value");
        return n
    }, S.reduceRight = S.foldr = function (e, t, n, r) {
        var i = arguments.length > 2;
        e == null && (e = []);
        if (p && e.reduceRight === p)return r && (t = S.bind(t, r)), i ? e.reduceRight(t, n) : e.reduceRight(t);
        var s = S.toArray(e).reverse();
        return r && !i && (t = S.bind(t, r)), i ? S.reduce(s, t, n, r) : S.reduce(s, t)
    }, S.find = S.detect = function (e, t, n) {
        var r;
        return T(e, function (e, i, s) {
            if (t.call(n, e, i, s))return r = e, !0
        }), r
    }, S.filter = S.select = function (e, t, n) {
        var r = [];
        return e == null ? r : d && e.filter === d ? e.filter(t, n) : (x(e, function (e, i, s) {
            t.call(n, e, i, s) && (r[r.length] = e)
        }), r)
    }, S.reject = function (e, t, n) {
        var r = [];
        return e == null ? r : (x(e, function (e, i, s) {
            t.call(n, e, i, s) || (r[r.length] = e)
        }), r)
    }, S.every = S.all = function (e, t, r) {
        var i = !0;
        return e == null ? i : v && e.every === v ? e.every(t, r) : (x(e, function (e, s, o) {
            if (!(i = i && t.call(r, e, s, o)))return n
        }), !!i)
    };
    var T = S.some = S.any = function (e, t, r) {
        t || (t = S.identity);
        var i = !1;
        return e == null ? i : m && e.some === m ? e.some(t, r) : (x(e, function (e, s, o) {
            if (i || (i = t.call(r, e, s, o)))return n
        }), !!i)
    };
    S.include = S.contains = function (e, t) {
        var n = !1;
        return e == null ? n : g && e.indexOf === g ? e.indexOf(t) != -1 : (n = T(e, function (e) {
            return e === t
        }), n)
    }, S.invoke = function (e, t) {
        var n = o.call(arguments, 2);
        return S.map(e, function (e) {
            return(S.isFunction(t) ? t || e : e[t]).apply(e, n)
        })
    }, S.pluck = function (e, t) {
        return S.map(e, function (e) {
            return e[t]
        })
    }, S.max = function (e, t, n) {
        if (!t && S.isArray(e) && e[0] === +e[0])return Math.max.apply(Math, e);
        if (!t && S.isEmpty(e))return-Infinity;
        var r = {computed:-Infinity};
        return x(e, function (e, i, s) {
            var o = t ? t.call(n, e, i, s) : e;
            o >= r.computed && (r = {value:e, computed:o})
        }), r.value
    }, S.min = function (e, t, n) {
        if (!t && S.isArray(e) && e[0] === +e[0])return Math.min.apply(Math, e);
        if (!t && S.isEmpty(e))return Infinity;
        var r = {computed:Infinity};
        return x(e, function (e, i, s) {
            var o = t ? t.call(n, e, i, s) : e;
            o < r.computed && (r = {value:e, computed:o})
        }), r.value
    }, S.shuffle = function (e) {
        var t = [], n;
        return x(e, function (e, r, i) {
            n = Math.floor(Math.random() * (r + 1)), t[r] = t[n], t[n] = e
        }), t
    }, S.sortBy = function (e, t, n) {
        var r = S.isFunction(t) ? t : function (e) {
            return e[t]
        };
        return S.pluck(S.map(e,function (e, t, i) {
            return{value:e, criteria:r.call(n, e, t, i)}
        }).sort(function (e, t) {
            var n = e.criteria, r = t.criteria;
            return n === void 0 ? 1 : r === void 0 ? -1 : n < r ? -1 : n > r ? 1 : 0
        }), "value")
    }, S.groupBy = function (e, t) {
        var n = {}, r = S.isFunction(t) ? t : function (e) {
            return e[t]
        };
        return x(e, function (e, t) {
            var i = r(e, t);
            (n[i] || (n[i] = [])).push(e)
        }), n
    }, S.sortedIndex = function (e, t, n) {
        n || (n = S.identity);
        var r = 0, i = e.length;
        while (r < i) {
            var s = r + i >> 1;
            n(e[s]) < n(t) ? r = s + 1 : i = s
        }
        return r
    }, S.toArray = function (e) {
        return e ? S.isArray(e) ? o.call(e) : S.isArguments(e) ? o.call(e) : e.toArray && S.isFunction(e.toArray) ? e.toArray() : S.values(e) : []
    }, S.size = function (e) {
        return S.isArray(e) ? e.length : S.keys(e).length
    }, S.first = S.head = S.take = function (e, t, n) {
        return t != null && !n ? o.call(e, 0, t) : e[0]
    }, S.initial = function (e, t, n) {
        return o.call(e, 0, e.length - (t == null || n ? 1 : t))
    }, S.last = function (e, t, n) {
        return t != null && !n ? o.call(e, Math.max(e.length - t, 0)) : e[e.length - 1]
    }, S.rest = S.tail = function (e, t, n) {
        return o.call(e, t == null || n ? 1 : t)
    }, S.compact = function (e) {
        return S.filter(e, function (e) {
            return!!e
        })
    }, S.flatten = function (e, t) {
        return S.reduce(e, function (e, n) {
            return S.isArray(n) ? e.concat(t ? n : S.flatten(n)) : (e[e.length] = n, e)
        }, [])
    }, S.without = function (e) {
        return S.difference(e, o.call(arguments, 1))
    }, S.uniq = S.unique = function (e, t, n) {
        var r = n ? S.map(e, n) : e, i = [];
        return e.length < 3 && (t = !0), S.reduce(r, function (n, r, s) {
            if (t ? S.last(n) !== r || !n.length : !S.include(n, r))n.push(r), i.push(e[s]);
            return n
        }, []), i
    }, S.union = function () {
        return S.uniq(S.flatten(arguments, !0))
    }, S.intersection = S.intersect = function (e) {
        var t = o.call(arguments, 1);
        return S.filter(S.uniq(e), function (e) {
            return S.every(t, function (t) {
                return S.indexOf(t, e) >= 0
            })
        })
    }, S.difference = function (e) {
        var t = S.flatten(o.call(arguments, 1), !0);
        return S.filter(e, function (e) {
            return!S.include(t, e)
        })
    }, S.zip = function () {
        var e = o.call(arguments), t = S.max(S.pluck(e, "length")), n = new Array(t);
        for (var r = 0; r < t; r++)n[r] = S.pluck(e, "" + r);
        return n
    }, S.indexOf = function (e, t, n) {
        if (e == null)return-1;
        var r, i;
        if (n)return r = S.sortedIndex(e, t), e[r] === t ? r : -1;
        if (g && e.indexOf === g)return e.indexOf(t);
        for (r = 0, i = e.length; r < i; r++)if (r in e && e[r] === t)return r;
        return-1
    }, S.lastIndexOf = function (e, t) {
        if (e == null)return-1;
        if (y && e.lastIndexOf === y)return e.lastIndexOf(t);
        var n = e.length;
        while (n--)if (n in e && e[n] === t)return n;
        return-1
    }, S.range = function (e, t, n) {
        arguments.length <= 1 && (t = e || 0, e = 0), n = arguments[2] || 1;
        var r = Math.max(Math.ceil((t - e) / n), 0), i = 0, s = new Array(r);
        while (i < r)s[i++] = e, e += n;
        return s
    };
    var N = function () {
    };
    S.bind = function (t, n) {
        var r, i;
        if (t.bind === E && E)return E.apply(t, o.call(arguments, 1));
        if (!S.isFunction(t))throw new TypeError;
        return i = o.call(arguments, 2), r = function () {
            if (this instanceof r) {
                N.prototype = t.prototype;
                var e = new N, s = t.apply(e, i.concat(o.call(arguments)));
                return Object(s) === s ? s : e
            }
            return t.apply(n, i.concat(o.call(arguments)))
        }
    }, S.bindAll = function (e) {
        var t = o.call(arguments, 1);
        return t.length == 0 && (t = S.functions(e)), x(t, function (t) {
            e[t] = S.bind(e[t], e)
        }), e
    }, S.memoize = function (e, t) {
        var n = {};
        return t || (t = S.identity), function () {
            var r = t.apply(this, arguments);
            return S.has(n, r) ? n[r] : n[r] = e.apply(this, arguments)
        }
    }, S.delay = function (e, t) {
        var n = o.call(arguments, 2);
        return setTimeout(function () {
            return e.apply(null, n)
        }, t)
    }, S.defer = function (e) {
        return S.delay.apply(S, [e, 1].concat(o.call(arguments, 1)))
    }, S.throttle = function (e, t) {
        var n, r, i, s, o, u, a = S.debounce(function () {
            o = s = !1
        }, t);
        return function () {
            n = this, r = arguments;
            var f = function () {
                i = null, o && e.apply(n, r), a()
            };
            return i || (i = setTimeout(f, t)), s ? o = !0 : u = e.apply(n, r), a(), s = !0, u
        }
    }, S.debounce = function (e, t, n) {
        var r;
        return function () {
            var i = this, s = arguments, o = function () {
                r = null, n || e.apply(i, s)
            };
            n && !r && e.apply(i, s), clearTimeout(r), r = setTimeout(o, t)
        }
    }, S.once = function (e) {
        var t = !1, n;
        return function () {
            return t ? n : (t = !0, n = e.apply(this, arguments))
        }
    }, S.wrap = function (e, t) {
        return function () {
            var n = [e].concat(o.call(arguments, 0));
            return t.apply(this, n)
        }
    }, S.compose = function () {
        var e = arguments;
        return function () {
            var t = arguments;
            for (var n = e.length - 1; n >= 0; n--)t = [e[n].apply(this, t)];
            return t[0]
        }
    }, S.after = function (e, t) {
        return e <= 0 ? t() : function () {
            if (--e < 1)return t.apply(this, arguments)
        }
    }, S.keys = w || function (e) {
        if (e !== Object(e))throw new TypeError("Invalid object");
        var t = [];
        for (var n in e)S.has(e, n) && (t[t.length] = n);
        return t
    }, S.values = function (e) {
        return S.map(e, S.identity)
    }, S.functions = S.methods = function (e) {
        var t = [];
        for (var n in e)S.isFunction(e[n]) && t.push(n);
        return t.sort()
    }, S.extend = function (e) {
        return x(o.call(arguments, 1), function (t) {
            for (var n in t)e[n] = t[n]
        }), e
    }, S.pick = function (e) {
        var t = {};
        return x(S.flatten(o.call(arguments, 1)), function (n) {
            n in e && (t[n] = e[n])
        }), t
    }, S.defaults = function (e) {
        return x(o.call(arguments, 1), function (t) {
            for (var n in t)e[n] == null && (e[n] = t[n])
        }), e
    }, S.clone = function (e) {
        return S.isObject(e) ? S.isArray(e) ? e.slice() : S.extend({}, e) : e
    }, S.tap = function (e, t) {
        return t(e), e
    }, S.isEqual = function (e, t) {
        return C(e, t, [])
    }, S.isEmpty = function (e) {
        if (e == null)return!0;
        if (S.isArray(e) || S.isString(e))return e.length === 0;
        for (var t in e)if (S.has(e, t))return!1;
        return!0
    }, S.isElement = function (e) {
        return!!e && e.nodeType == 1
    }, S.isArray = b || function (e) {
        return a.call(e) == "[object Array]"
    }, S.isObject = function (e) {
        return e === Object(e)
    }, S.isArguments = function (e) {
        return a.call(e) == "[object Arguments]"
    }, S.isArguments(arguments) || (S.isArguments = function (e) {
        return!!e && !!S.has(e, "callee")
    }), S.isFunction = function (e) {
        return a.call(e) == "[object Function]"
    }, S.isString = function (e) {
        return a.call(e) == "[object String]"
    }, S.isNumber = function (e) {
        return a.call(e) == "[object Number]"
    }, S.isFinite = function (e) {
        return S.isNumber(e) && isFinite(e)
    }, S.isNaN = function (e) {
        return e !== e
    }, S.isBoolean = function (e) {
        return e === !0 || e === !1 || a.call(e) == "[object Boolean]"
    }, S.isDate = function (e) {
        return a.call(e) == "[object Date]"
    }, S.isRegExp = function (e) {
        return a.call(e) == "[object RegExp]"
    }, S.isNull = function (e) {
        return e === null
    }, S.isUndefined = function (e) {
        return e === void 0
    }, S.has = function (e, t) {
        return f.call(e, t)
    }, S.noConflict = function () {
        return e._ = t, this
    }, S.identity = function (e) {
        return e
    }, S.times = function (e, t, n) {
        for (var r = 0; r < e; r++)t.call(n, r)
    }, S.escape = function (e) {
        return("" + e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;")
    }, S.result = function (e, t) {
        if (e == null)return null;
        var n = e[t];
        return S.isFunction(n) ? n.call(e) : n
    }, S.mixin = function (e) {
        x(S.functions(e), function (t) {
            B(t, S[t] = e[t])
        })
    };
    var k = 0;
    S.uniqueId = function (e) {
        var t = k++;
        return e ? e + t : t
    }, S.templateSettings = {evaluate:/<%([\s\S]+?)%>/g, interpolate:/<%=([\s\S]+?)%>/g, escape:/<%-([\s\S]+?)%>/g};
    var L = /.^/, A = {"\\":"\\", "'":"'", r:"\r", n:"\n", t:"	", u2028:"\u2028", u2029:"\u2029"};
    for (var O in A)A[A[O]] = O;
    var M = /\\|'|\r|\n|\t|\u2028|\u2029/g, _ = /\\(\\|'|r|n|t|u2028|u2029)/g, D = function (e) {
        return e.replace(_, function (e, t) {
            return A[t]
        })
    };
    S.template = function (e, t, n) {
        n = S.defaults(n || {}, S.templateSettings);
        var r = "__p+='" + e.replace(M,function (e) {
            return"\\" + A[e]
        }).replace(n.escape || L,function (e, t) {
            return"'+\n_.escape(" + D(t) + ")+\n'"
        }).replace(n.interpolate || L,function (e, t) {
            return"'+\n(" + D(t) + ")+\n'"
        }).replace(n.evaluate || L, function (e, t) {
            return"';\n" + D(t) + "\n;__p+='"
        }) + "';\n";
        n.variable || (r = "with(obj||{}){\n" + r + "}\n"), r = "var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};\n" + r + "return __p;\n";
        var i = new Function(n.variable || "obj", "_", r);
        if (t)return i(t, S);
        var s = function (e) {
            return i.call(this, e, S)
        };
        return s.source = "function(" + (n.variable || "obj") + "){\n" + r + "}", s
    }, S.chain = function (e) {
        return S(e).chain()
    };
    var P = function (e) {
        this._wrapped = e
    };
    S.prototype = P.prototype;
    var H = function (e, t) {
        return t ? S(e).chain() : e
    }, B = function (e, t) {
        P.prototype[e] = function () {
            var e = o.call(arguments);
            return u.call(e, this._wrapped), H(t.apply(S, e), this._chain)
        }
    };
    S.mixin(S), x(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
        var t = r[e];
        P.prototype[e] = function () {
            var n = this._wrapped;
            t.apply(n, arguments);
            var r = n.length;
            return(e == "shift" || e == "splice") && r === 0 && delete n[0], H(n, this._chain)
        }
    }), x(["concat", "join", "slice"], function (e) {
        var t = r[e];
        P.prototype[e] = function () {
            return H(t.apply(this._wrapped, arguments), this._chain)
        }
    }), P.prototype.chain = function () {
        return this._chain = !0, this
    }, P.prototype.value = function () {
        return this._wrapped
    }
}.call(this), function (e) {
    e.Parse = e.Parse || {};
    var t = e.Parse;
    typeof exports != "undefined" && exports._ ? (t._ = exports._.noConflict(), t.localStorage = require("localStorage"), t.XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest, exports.Parse = t) : (t._ = _.noConflict(), typeof localStorage != "undefined" && (t.localStorage = localStorage), typeof XMLHttpRequest != "undefined" && (t.XMLHttpRequest = XMLHttpRequest)), typeof $ != "undefined" && (t.$ = $);
    var n = function () {
    }, r = function (e, r, i) {
        var s;
        return r && r.hasOwnProperty("constructor") ? s = r.constructor : s = function () {
            e.apply(this, arguments)
        }, t._.extend(s, e), n.prototype = e.prototype, s.prototype = new n, r && t._.extend(s.prototype, r), i && t._.extend(s, i), s.prototype.constructor = s, s.__super__ = e.prototype, s
    };
    t.serverURL = "https://api.parse.com", t.initialize = function (e, n) {
        t._initialize(e, n)
    }, t._initialize = function (e, n, r) {
        t.applicationId = e, t.javaScriptKey = n, t.masterKey = r, t._useMasterKey = !1
    }, t._getParsePath = function (e) {
        if (!t.applicationId)throw"You need to call Parse.initialize before using Parse.";
        e || (e = "");
        if (!t._.isString(e))throw"Tried to get a localStorage path that wasn't a String.";
        return e[0] === "/" && (e = e.substring(1)), "Parse/" + t.applicationId + "/" + e
    }, t._installationId = null, t._getInstallationId = function () {
        if (t._installationId)return t._installationId;
        var e = t._getParsePath("installationId");
        t._installationId = t.localStorage.getItem(e);
        if (!t._installationId || t._installationId === "") {
            var n = function () {
                return Math.floor((1 + Math.random()) * 65536).toString(16).substring(1)
            };
            t._installationId = n() + n() + "-" + n() + "-" + n() + "-" + n() + "-" + n() + n() + n(), t.localStorage.setItem(e, t._installationId)
        }
        return t._installationId
    }, t._parseDate = function (e) {
        var t = new RegExp("^([0-9]{1,4})-([0-9]{1,2})-([0-9]{1,2})T([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2})(.([0-9]+))?Z$"), n = t.exec(e);
        if (!n)return null;
        var r = n[1] || 0, i = (n[2] || 1) - 1, s = n[3] || 0, o = n[4] || 0, u = n[5] || 0, a = n[6] || 0, f = n[8] || 0;
        return new Date(Date.UTC(r, i, s, o, u, a, f))
    }, t._ajaxIE8 = function (e, t, n, r, i) {
        var s = new XDomainRequest;
        s.onload = function () {
            var e;
            try {
                e = JSON.parse(s.responseText)
            } catch (t) {
                i && i(s)
            }
            e && r && r(e, s)
        }, s.onerror = s.ontimeout = function () {
            i(s)
        }, s.onprogress = function () {
        }, s.open(e, t), s.send(n)
    }, t._ajax = function (e, n, r, i, s) {
        if (typeof XDomainRequest != "undefined")return t._ajaxIE8(e, n, r, i, s);
        var o = !1, u = new t.XMLHttpRequest;
        u.onreadystatechange = function () {
            if (u.readyState === 4) {
                if (o)return;
                o = !0;
                if (u.status >= 200 && u.status < 300) {
                    var e;
                    try {
                        e = JSON.parse(u.responseText)
                    } catch (t) {
                        s && s(u)
                    }
                    e && i && i(e, u)
                } else s && s(u)
            }
        }, u.open(e, n, !0), u.setRequestHeader("Content-Type", "text/plain"), u.send(r)
    }, t._extend = function (e, t) {
        var n = r(this, e, t);
        return n.extend = this.extend, n
    }, t._request = function (e, n, r, i, s, o) {
        if (!t.applicationId)throw"You must specify your applicationId using Parse.initialize";
        if (!t.javaScriptKey && !t.masterKey)throw"You must specify a key using Parse.initialize";
        if (e !== "classes" && e !== "push" && e !== "users" && e !== "login" && e !== "functions" && e !== "requestPasswordReset")throw"First argument must be one of classes, users, functions, or login, not '" + e + "'.";
        var u = t.serverURL;
        u.charAt(u.length - 1) !== "/" && (u += "/"), u += "1/" + e, n && (u += "/" + n), r && (u += "/" + r), s = t._.clone(s || {}), i !== "POST" && (s._method = i, i = "POST"), s._ApplicationId = t.applicationId, t._useMasterKey ? s._MasterKey = t.masterKey : s._JavaScriptKey = t.javaScriptKey, s._ClientVersion = t.VERSION, s._InstallationId = t._getInstallationId();
        var a = t.User.current();
        a && a._sessionToken && (s._SessionToken = a._sessionToken);
        var f = JSON.stringify(s);
        t._ajax(i, u, f, o.success, o.error)
    }, t._getValue = function (e, n) {
        return!e || !e[n] ? null : t._.isFunction(e[n]) ? e[n]() : e[n]
    }, t._encode = function (e, n, r) {
        var i = t._;
        if (e instanceof t.Object) {
            if (r)throw"Parse.Objects not allowed here";
            if (!n || i.include(n, e) || !e._hasData)return e._toPointer();
            if (!e.dirty())return n = n.concat(e), t._encode(e._toFullJSON(n), n, r);
            throw"Can't fully embed a dirty object"
        }
        if (e instanceof t.ACL)return e.toJSON();
        if (i.isDate(e))return{__type:"Date", iso:e.toJSON()};
        if (e instanceof t.GeoPoint)return e.toJSON();
        if (i.isArray(e))return i.map(e, function (e) {
            return t._encode(e, n, r)
        });
        if (i.isRegExp(e))return e.source;
        if (e instanceof t.Relation)return e.toJSON();
        if (e instanceof t.Op)return e.toJSON();
        if (e instanceof Object) {
            var s = {};
            return t._each(e, function (e, i) {
                s[i] = t._encode(e, n, r)
            }), s
        }
        return e
    }, t._decode = function (e, n) {
        var r = t._;
        if (!r.isObject(n))return n;
        if (r.isArray(n))return t._each(n, function (e, r) {
            n[r] = t._decode(r, e)
        }), n;
        if (n instanceof t.Object)return n;
        if (n instanceof t.Op)return n;
        if (n.__op)return t.Op._decode(n);
        if (n.__type === "Pointer") {
            var i = t.Object._create(n.className);
            return i._finishFetch({objectId:n.objectId}, !1), i
        }
        if (n.__type === "Object") {
            var s = n.className;
            delete n.__type, delete n.className;
            var o = t.Object._create(s);
            return o._finishFetch(n, !0), o
        }
        if (n.__type === "Date")return t._parseDate(n.iso);
        if (n.__type === "GeoPoint")return new t.GeoPoint({latitude:n.latitude, longitude:n.longitude});
        if (e === "ACL")return n instanceof t.ACL ? n : new t.ACL(n);
        if (n.__type === "Relation") {
            var u = new t.Relation(null, e);
            return u.targetClassName = n.className, u
        }
        return t._each(n, function (e, r) {
            n[r] = t._decode(r, e)
        }), n
    }, t._each = function (e, n) {
        var r = t._;
        r.isObject(e) ? r.each(r.keys(e), function (t) {
            n(e[t], t)
        }) : r.each(e, n)
    }, t._isNullOrUndefined = function (e) {
        return t._.isNull(e) || t._.isUndefined(e)
    }
}(this), function (e) {
    e.Parse = e.Parse || {};
    var t = e.Parse, n = t._;
    t.Error = function (e, t) {
        this.code = e, this.message = t
    }, n.extend(t.Error, {OTHER_CAUSE:-1, INTERNAL_SERVER_ERROR:1, CONNECTION_FAILED:100, OBJECT_NOT_FOUND:101, INVALID_QUERY:102, INVALID_CLASS_NAME:103, MISSING_OBJECT_ID:104, INVALID_KEY_NAME:105, INVALID_POINTER:106, INVALID_JSON:107, COMMAND_UNAVAILABLE:108, NOT_INITIALIZED:109, INCORRECT_TYPE:111, INVALID_CHANNEL_NAME:112, PUSH_MISCONFIGURED:115, OBJECT_TOO_LARGE:116, OPERATION_FORBIDDEN:119, CACHE_MISS:120, INVALID_NESTED_KEY:121, INVALID_FILE_NAME:122, INVALID_ACL:123, TIMEOUT:124, INVALID_EMAIL_ADDRESS:125, MISSING_CONTENT_TYPE:126, MISSING_CONTENT_LENGTH:127, INVALID_CONTENT_LENGTH:128, FILE_TOO_LARGE:129, FILE_SAVE_ERROR:130, FILE_DELETE_ERROR:153, DUPLICATE_VALUE:137, INVALID_ROLE_NAME:139, EXCEEDED_QUOTA:140, SCRIPT_FAILED:141, VALIDATION_ERROR:142, INVALID_IMAGE_DATA:150, UNSAVED_FILE_ERROR:151, INVALID_PUSH_TIME_ERROR:152, USERNAME_MISSING:200, PASSWORD_MISSING:201, USERNAME_TAKEN:202, EMAIL_TAKEN:203, EMAIL_MISSING:204, EMAIL_NOT_FOUND:205, SESSION_MISSING:206, MUST_CREATE_USER_THROUGH_SIGNUP:207, ACCOUNT_ALREADY_LINKED:208, LINKED_ID_MISSING:250, INVALID_LINKED_SESSION:251, UNSUPPORTED_SERVICE:252})
}(this), function () {
    var e = this, t = e.Parse || (e.Parse = {}), n = /\s+/, r = Array.prototype.slice;
    t.Events = {on:function (e, t, r) {
        var i, s, o, u, a;
        if (!t)return this;
        e = e.split(n), i = this._callbacks || (this._callbacks = {}), s = e.shift();
        while (s)a = i[s], o = a ? a.tail : {}, o.next = u = {}, o.context = r, o.callback = t, i[s] = {tail:u, next:a ? a.next : o}, s = e.shift();
        return this
    }, off:function (e, t, r) {
        var i, s, o, u, a, f;
        if (!(s = this._callbacks))return;
        if (!(e || t || r))return delete this._callbacks, this;
        e = e ? e.split(n) : _.keys(s), i = e.shift();
        while (i) {
            o = s[i], delete s[i];
            if (!o || !t && !r)continue;
            u = o.tail, o = o.next;
            while (o !== u)a = o.callback, f = o.context, (t && a !== t || r && f !== r) && this.on(i, a, f), o = o.next;
            i = e.shift()
        }
        return this
    }, trigger:function (e) {
        var t, i, s, o, u, a, f;
        if (!(s = this._callbacks))return this;
        a = s.all, e = e.split(n), f = r.call(arguments, 1), t = e.shift();
        while (t) {
            i = s[t];
            if (i) {
                o = i.tail;
                while ((i = i.next) !== o)i.callback.apply(i.context || this, f)
            }
            i = a;
            if (i) {
                o = i.tail, u = [t].concat(f);
                while ((i = i.next) !== o)i.callback.apply(i.context || this, u)
            }
            t = e.shift()
        }
        return this
    }}, t.Events.bind = t.Events.on, t.Events.unbind = t.Events.off
}.call(this), function (e) {
    e.Parse = e.Parse || {};
    var t = e.Parse, n = t._;
    t.GeoPoint = function (e, r) {
        n.isArray(e) ? (t.GeoPoint._validate(e[0], e[1]), this.latitude = e[0], this.longitude = e[1]) : n.isObject(e) ? (t.GeoPoint._validate(e.latitude, e.longitude), this.latitude = e.latitude, this.longitude = e.longitude) : n.isNumber(e) && n.isNumber(r) ? (t.GeoPoint._validate(e, r), this.latitude = e, this.longitude = r) : (this.latitude = 0, this.longitude = 0);
        var i = this;
        this.__defineGetter__ && this.__defineSetter__ && (this._latitude = this.latitude, this._longitude = this.longitude, this.__defineGetter__("latitude", function () {
            return i._latitude
        }), this.__defineGetter__("longitude", function () {
            return i._longitude
        }), this.__defineSetter__("latitude", function (e) {
            t.GeoPoint._validate(e, i.longitude), i._latitude = e
        }), this.__defineSetter__("longitude", function (e) {
            t.GeoPoint._validate(i.latitude, e), i._longitude = e
        }))
    }, t.GeoPoint._validate = function (e, t) {
        if (e < -90)throw"Parse.GeoPoint latitude " + e + " < -90.0.";
        if (e > 90)throw"Parse.GeoPoint latitude " + e + " > 90.0.";
        if (t < -180)throw"Parse.GeoPoint longitude " + t + " < -180.0.";
        if (t > 180)throw"Parse.GeoPoint longitude " + t + " > 180.0."
    }, t.GeoPoint.current = function (e) {
        var n = function (n) {
            e.success && e.success(new t.GeoPoint({latitude:n.coords.latitude, longitude:n.coords.longitude}))
        }, r = function (t) {
            e.error && e.error(t)
        };
        navigator.geolocation.getCurrentPosition(n, r)
    }, t.GeoPoint.prototype = {toJSON:function () {
        return t.GeoPoint._validate(this.latitude, this.longitude), {__type:"GeoPoint", latitude:this.latitude, longitude:this.longitude}
    }, radiansTo:function (e) {
        var t = Math.PI / 180, n = this.latitude * t, r = this.longitude * t, i = e.latitude * t, s = e.longitude * t, o = n - i, u = r - s, a = Math.sin(o / 2), f = Math.sin(u / 2), l = a * a + Math.cos(n) * Math.cos(i) * f * f;
        return l = Math.min(1, l), 2 * Math.asin(Math.sqrt(l))
    }, kilometersTo:function (e) {
        return this.radiansTo(e) * 6371
    }, milesTo:function (e) {
        return this.radiansTo(e) * 3958.8
    }}
}(this), function (e) {
    e.Parse = e.Parse || {};
    var t = e.Parse, n = t._, r = "*";
    t.ACL = function (e) {
        var r = this;
        r.permissionsById = {};
        if (n.isObject(e))if (e instanceof t.User)r.setReadAccess(e, !0), r.setWriteAccess(e, !0); else {
            if (n.isFunction(e))throw"Parse.ACL() called with a function.  Did you forget ()?";
            t._each(e, function (e, i) {
                if (!n.isString(i))throw"Tried to create an ACL with an invalid userId.";
                r.permissionsById[i] = {}, t._each(e, function (e, t) {
                    if (t !== "read" && t !== "write")throw"Tried to create an ACL with an invalid permission type.";
                    if (!n.isBoolean(e))throw"Tried to create an ACL with an invalid permission value.";
                    r.permissionsById[i][t] = e
                })
            })
        }
    }, t.ACL.prototype.toJSON = function () {
        return n.clone(this.permissionsById)
    }, t.ACL.prototype._setAccess = function (e, r, i) {
        r instanceof t.User ? r = r.id : r instanceof t.Role && (r = "role:" + r.getName());
        if (!n.isString(r))throw"userId must be a string.";
        if (!n.isBoolean(i))throw"allowed must be either true or false.";
        var s = this.permissionsById[r];
        if (!s) {
            if (!i)return;
            s = {}, this.permissionsById[r] = s
        }
        i ? this.permissionsById[r][e] = !0 : (delete s[e], n.isEmpty(s) && delete s[r])
    }, t.ACL.prototype._getAccess = function (e, n) {
        n instanceof t.User ? n = n.id : n instanceof t.Role && (n = "role:" + n.getName());
        var r = this.permissionsById[n];
        return r ? r[e] ? !0 : !1 : !1
    }, t.ACL.prototype.setReadAccess = function (e, t) {
        this._setAccess("read", e, t)
    }, t.ACL.prototype.getReadAccess = function (e) {
        return this._getAccess("read", e)
    }, t.ACL.prototype.setWriteAccess = function (e, t) {
        this._setAccess("write", e, t)
    }, t.ACL.prototype.getWriteAccess = function (e) {
        return this._getAccess("write", e)
    }, t.ACL.prototype.setPublicReadAccess = function (e) {
        this.setReadAccess(r, e)
    }, t.ACL.prototype.getPublicReadAccess = function () {
        return this.getReadAccess(r)
    }, t.ACL.prototype.setPublicWriteAccess = function (e) {
        this.setWriteAccess(r, e)
    }, t.ACL.prototype.getPublicWriteAccess = function () {
        return this.getWriteAccess(r)
    }, t.ACL.prototype.getRoleReadAccess = function (e) {
        e instanceof t.Role && (e = e.getName());
        if (n.isString(e))return this.getReadAccess("role:" + e);
        throw"role must be a Parse.Role or a String"
    }, t.ACL.prototype.getRoleWriteAccess = function (e) {
        e instanceof t.Role && (e = e.getName());
        if (n.isString(e))return this.getWriteAccess("role:" + e);
        throw"role must be a Parse.Role or a String"
    }, t.ACL.prototype.setRoleReadAccess = function (e, r) {
        e instanceof t.Role && (e = e.getName());
        if (n.isString(e)) {
            this.setReadAccess("role:" + e, r);
            return
        }
        throw"role must be a Parse.Role or a String"
    }, t.ACL.prototype.setRoleWriteAccess = function (e, r) {
        e instanceof t.Role && (e = e.getName());
        if (n.isString(e)) {
            this.setWriteAccess("role:" + e, r);
            return
        }
        throw"role must be a Parse.Role or a String"
    }
}(this), function (e) {
    e.Parse = e.Parse || {};
    var t = e.Parse, n = t._;
    t.Op = function () {
        this._initialize.apply(this, arguments)
    }, t.Op.prototype = {_initialize:function () {
    }}, n.extend(t.Op, {_extend:t._extend, _opDecoderMap:{}, _registerDecoder:function (e, n) {
        t.Op._opDecoderMap[e] = n
    }, _decode:function (e) {
        var n = t.Op._opDecoderMap[e.__op];
        return n ? n(e) : undefined
    }}), t.Op._registerDecoder("Batch", function (e) {
        var r = null;
        return n.each(e.ops, function (e) {
            e = t.Op._decode(e), r = e._mergeWithPrevious(r)
        }), r
    }), t.Op.Set = t.Op._extend({_initialize:function (e) {
        this._value = e
    }, value:function () {
        return this._value
    }, toJSON:function () {
        return t._encode(this.value())
    }, _mergeWithPrevious:function (e) {
        return this
    }, _estimate:function (e) {
        return this.value()
    }}), t.Op._UNSET = {}, t.Op.Unset = t.Op._extend({toJSON:function () {
        return{__op:"Delete"}
    }, _mergeWithPrevious:function (e) {
        return this
    }, _estimate:function (e) {
        return t.Op._UNSET
    }}), t.Op._registerDecoder("Delete", function (e) {
        return new t.Op.Unset
    }), t.Op.Increment = t.Op._extend({_initialize:function (e) {
        this._amount = e
    }, amount:function () {
        return this._amount
    }, toJSON:function () {
        return{__op:"Increment", amount:this._amount}
    }, _mergeWithPrevious:function (e) {
        if (!e)return this;
        if (e instanceof t.Op.Unset)return new t.Op.Set(this.amount());
        if (e instanceof t.Op.Set)return new t.Op.Set(e.value() + this.amount());
        if (e instanceof t.Op.Increment)return new t.Op.Increment(this.amount() + e.amount());
        throw"Op is invalid after previous op."
    }, _estimate:function (e) {
        return e ? e + this.amount() : this.amount()
    }}), t.Op._registerDecoder("Increment", function (e) {
        return new t.Op.Increment(e.amount)
    }), t.Op.Add = t.Op._extend({_initialize:function (e) {
        this._objects = e
    }, objects:function () {
        return this._objects
    }, toJSON:function () {
        return{__op:"Add", objects:t._encode(this.objects())}
    }, _mergeWithPrevious:function (e) {
        if (!e)return this;
        if (e instanceof t.Op.Unset)return new t.Op.Set(this.objects());
        if (e instanceof t.Op.Set)return new t.Op.Set(this._estimate(e.value()));
        if (e instanceof t.Op.Add)return new t.Op.Add(e.objects().concat(this.objects()));
        throw"Op is invalid after previous op."
    }, _estimate:function (e) {
        return e ? e.concat(this.objects()) : n.clone(this.objects())
    }}), t.Op._registerDecoder("Add", function (e) {
        return new t.Op.Add(t._decode(undefined, e.objects))
    }), t.Op.AddUnique = t.Op._extend({_initialize:function (e) {
        this._objects = n.uniq(e)
    }, objects:function () {
        return this._objects
    }, toJSON:function () {
        return{__op:"AddUnique", objects:t._encode(this.objects())}
    }, _mergeWithPrevious:function (e) {
        if (!e)return this;
        if (e instanceof t.Op.Unset)return new t.Op.Set(this.objects());
        if (e instanceof t.Op.Set)return new t.Op.Set(this._estimate(e.value()));
        if (e instanceof t.Op.AddUnique)return new t.Op.AddUnique(n.union(e.objects(), this.objects()));
        throw"Op is invalid after previous op."
    }, _estimate:function (e) {
        return e ? e.concat(n.difference(this.objects(), e)) : n.clone(this.objects())
    }}), t.Op._registerDecoder("AddUnique", function (e) {
        return new t.Op.AddUnique(t._decode(undefined, e.objects))
    }), t.Op.Remove = t.Op._extend({_initialize:function (e) {
        this._objects = n.uniq(e)
    }, objects:function () {
        return this._objects
    }, toJSON:function () {
        return{__op:"Remove", objects:t._encode(this.objects())}
    }, _mergeWithPrevious:function (e) {
        if (!e)return this;
        if (e instanceof t.Op.Unset)return e;
        if (e instanceof t.Op.Set)return new t.Op.Set(this._estimate(e.value()));
        if (e instanceof t.Op.Remove)return new t.Op.Remove(n.union(e.objects(), this.objects()));
        throw"Op is invalid after previous op."
    }, _estimate:function (e) {
        if (!e)return[];
        var r = n.difference(e, this.objects());
        return n.each(this.objects(), function (e) {
            e instanceof t.Object && e.id && (r = n.reject(r, function (n) {
                return n instanceof t.Object && n.id === e.id
            }))
        }), r
    }}), t.Op._registerDecoder("Remove", function (e) {
        return new t.Op.Remove(t._decode(undefined, e.objects))
    }), t.Op.Relation = t.Op._extend({_initialize:function (e, r) {
        this._targetClassName = null;
        var i = this, s = function (e) {
            if (e instanceof t.Object) {
                if (!e.id)throw"You can't add an unsaved Parse.Object to a relation.";
                i._targetClassName || (i._targetClassName = e.className);
                if (i._targetClassName !== e.className)throw"Tried to create a Parse.Relation with 2 different types: " + i._targetClassName + " and " + e.className + ".";
                return e.id
            }
            return e
        };
        this.relationsToAdd = n.uniq(n.map(e, s)), this.relationsToRemove = n.uniq(n.map(r, s))
    }, added:function () {
        var e = this;
        return n.map(this.relationsToAdd, function (n) {
            var r = t.Object._create(e._targetClassName);
            return r.id = n, r
        })
    }, removed:function () {
        var e = this;
        return n.map(this.relationsToRemove, function (n) {
            var r = t.Object._create(e._targetClassName);
            return r.id = n, r
        })
    }, toJSON:function () {
        var e = null, t = null, r = this, i = function (e) {
            return{__type:"Pointer", className:r._targetClassName, objectId:e}
        }, s = null;
        return this.relationsToAdd.length > 0 && (s = n.map(this.relationsToAdd, i), e = {__op:"AddRelation", objects:s}), this.relationsToRemove.length > 0 && (s = n.map(this.relationsToRemove, i), t = {__op:"RemoveRelation", objects:s}), e && t ? {__op:"Batch", ops:[e, t]} : e || t || {}
    }, _mergeWithPrevious:function (e) {
        if (!e)return this;
        if (e instanceof t.Op.Unset)throw"You can't modify a relation after deleting it.";
        if (e instanceof t.Op.Relation) {
            if (e._targetClassName && e._targetClassName !== this._targetClassName)throw"Related object must be of class " + e._targetClassName + ", but " + this._targetClassName + " was passed in.";
            var r = n.union(n.difference(e.relationsToAdd, this.relationsToRemove), this.relationsToAdd), i = n.union(n.difference(e.relationsToRemove, this.relationsToAdd), this.relationsToRemove), s = new t.Op.Relation(r, i);
            return s._targetClassName = this._targetClassName, s
        }
        throw"Op is invalid after previous op."
    }, _estimate:function (e, n, r) {
        if (!!e) {
            if (e instanceof t.Relation) {
                if (this._targetClassName)if (e.targetClassName) {
                    if (e.targetClassName !== this._targetClassName)throw"Related object must be a " + e.targetClassName + ", but a " + this._targetClassName + " was passed in."
                } else e.targetClassName = this._targetClassName;
                return e
            }
            throw"Op is invalid after previous op."
        }
        var i = new t.Relation(n, r);
        i.targetClassName = this._targetClassName
    }}), t.Op._registerDecoder("AddRelation", function (e) {
        return new t.Op.Relation(t._decode(undefined, e.objects), [])
    }), t.Op._registerDecoder("RemoveRelation", function (e) {
        return new t.Op.Relation([], t._decode(undefined, e.objects))
    })
}(this), function (e) {
    e.Parse = e.Parse || {};
    var t = e.Parse, n = t._;
    t.Relation = function (e, t) {
        this.parent = e, this.key = t, this.targetClassName = null
    }, t.Relation.prototype = {_ensureParentAndKey:function (e, t) {
        this.parent = this.parent || e, this.key = this.key || t;
        if (this.parent !== e)throw"Internal Error. Relation retrieved from two different Objects.";
        if (this.key !== t)throw"Internal Error. Relation retrieved from two different keys."
    }, add:function (e) {
        n.isArray(e) || (e = [e]);
        var r = new t.Op.Relation(e, []);
        this.parent.set(this.key, r), this.targetClassName = r._targetClassName
    }, remove:function (e) {
        n.isArray(e) || (e = [e]);
        var r = new t.Op.Relation([], e);
        this.parent.set(this.key, r), this.targetClassName = r._targetClassName
    }, toJSON:function () {
        return{__type:"Relation", className:this.targetClassName}
    }, query:function () {
        var e, n;
        return this.targetClassName ? (e = t.Object._getSubclass(this.targetClassName), n = new t.Query(e)) : (e = t.Object._getSubclass(this.parent.className), n = new t.Query(e), n._extraOptions.redirectClassNameForKey = this.key), n._addCondition("$relatedTo", "object", this.parent._toPointer()), n._addCondition("$relatedTo", "key", this.key), n
    }}
}(this), function (e) {
    e.Parse = e.Parse || {};
    var t = e.Parse, n = t._;
    t.Promise = function () {
        this._resolved = !1, this._rejected = !1, this._resolvedCallbacks = [], this._rejectedCallbacks = []
    }, n.extend(t.Promise, {is:function (e) {
        return e && e.then && n.isFunction(e.then)
    }, as:function () {
        var e = new t.Promise;
        return e.resolve.apply(e, arguments), e
    }, error:function () {
        var e = new t.Promise;
        return e.reject.apply(e, arguments), e
    }, when:function (e) {
        var r;
        e && t._isNullOrUndefined(e.length) ? r = arguments : r = e;
        var i = r.length, s = !1, o = [], u = [];
        o.length = r.length, u.length = r.length;
        if (i === 0)return t.Promise.as.apply(this, o);
        var a = new t.Promise, f = function () {
            i -= 1, i === 0 && (s ? a.reject(u) : a.resolve.apply(a, o))
        };
        return n.each(r, function (e, n) {
            t.Promise.is(e) ? e.then(function (e) {
                o[n] = e, f()
            }, function (e) {
                u[n] = e, s = !0, f()
            }) : (o[n] = e, f())
        }), a
    }}), n.extend(t.Promise.prototype, {resolve:function (e) {
        if (this._resolved || this._rejected)throw"A promise was resolved even though it had already been " + (this._resolved ? "resolved" : "rejected") + ".";
        this._resolved = !0, this._result = arguments;
        var t = arguments;
        n.each(this._resolvedCallbacks, function (e) {
            e.apply(this, t)
        })
    }, reject:function (e) {
        if (this._resolved || this._rejected)throw"A promise was rejected even though it had already been " + (this._resolved ? "resolved" : "rejected") + ".";
        this._rejected = !0, this._error = e, n.each(this._rejectedCallbacks, function (t) {
            t(e)
        })
    }, then:function (e, n) {
        var r = new t.Promise, i = function () {
            var n = arguments;
            e && (n = [e.apply(this, n)]), n.length === 1 && t.Promise.is(n[0]) ? n[0].then(function () {
                r.resolve.apply(r, arguments)
            }, function (e) {
                r.reject(e)
            }) : r.resolve.apply(r, n)
        }, s = function (e) {
            var i = [];
            n ? (i = [n(e)], i.length === 1 && t.Promise.is(i[0]) ? i[0].then(function () {
                r.resolve.apply(r, arguments)
            }, function (e) {
                r.reject(e)
            }) : r.reject(i[0])) : r.reject(e)
        };
        return this._resolved ? i.apply(this, this._result) : this._rejected ? s(this._error) : (this._resolvedCallbacks.push(i), this._rejectedCallbacks.push(s)), r
    }})
}(this), function (e) {
    e.Parse = e.Parse || {};
    var t = e.Parse, n = t._;
    t.Object = function (e, r) {
        if (n.isString(e))return t.Object._create.apply(this, arguments);
        e = e || {}, r && r.parse && (e = this.parse(e));
        var i = t._getValue(this, "defaults");
        i && (e = n.extend({}, i, e)), r && r.collection && (this.collection = r.collection), this._serverData = {}, this._opSetQueue = [
            {}
        ], this.attributes = {}, this._hashedJSON = {}, this._escapedAttributes = {}, this.cid = n.uniqueId("c"), this.changed = {}, this._silent = {}, this._pending = {};
        if (!this.set(e, {silent:!0}))throw new Error("Can't create an invalid Parse.Object");
        this.changed = {}, this._silent = {}, this._pending = {}, this._hasData = !0, this._previousAttributes = n.clone(this.attributes), this.initialize.apply(this, arguments)
    };
    var r = function (e, r, i) {
        var s;
        if (n.isFunction(i)) {
            var o = i;
            s = {success:function (e) {
                o(e, null)
            }, error:function (e) {
                o(null, e)
            }}
        } else s = i;
        s = s || {};
        var u = [], a = new t.Promise.as;
        return n.each(e, function (e) {
            a = a.then(function () {
                return r(e)
            }).then(function (e) {
                u.push(e)
            })
        }), a = a.then(function () {
            s.success && s.success(u)
        }, function (e) {
            return s.error && s.error(e), t.Promise.error(e)
        }), a
    };
    t.Object.saveAll = function (e, t) {
        return r(e, function (e, t) {
            return e.save(null, t)
        }, t)
    }, t.Object._signUpAll = function (e, t) {
        return r(e, function (e, t) {
            return e.signUp(null, t)
        }, t)
    }, n.extend(t.Object.prototype, t.Events, {_existed:!1, initialize:function () {
    }, toJSON:function () {
        var e = this._toFullJSON();
        return n.each(["__type", "className"], function (t) {
            delete e[t]
        }), e
    }, _toFullJSON:function (e) {
        var r = n.clone(this.attributes);
        return t._each(r, function (n, i) {
            r[i] = t._encode(n, e)
        }), t._each(this._operations, function (e, t) {
            r[t] = e
        }), n.has(this, "id") && (r.objectId = this.id), n.has(this, "createdAt") && (n.isDate(this.createdAt) ? r.createdAt = this.createdAt.toJSON() : r.createdAt = this.createdAt), n.has(this, "updatedAt") && (n.isDate(this.updatedAt) ? r.updatedAt = this.updatedAt.toJSON() : r.updatedAt = this.updatedAt), r.__type = "Object", r.className = this.className, r
    }, _refreshCache:function () {
        var e = this;
        t._each(this.attributes, function (r, i) {
            r instanceof t.Object ? r._refreshCache() : n.isObject(r) && e._resetCacheForKey(i) && e.set(i, new t.Op.Set(r), {silent:!0})
        })
    }, dirty:function (e) {
        this._refreshCache();
        var t = n.last(this._opSetQueue);
        return e ? t[e] ? !0 : !1 : this.id ? n.keys(t).length > 0 ? !0 : !1 : !0
    }, _toPointer:function () {
        if (!this.id)throw new Error("Can't serialize an unsaved Parse.Object");
        return{__type:"Pointer", className:this.className, objectId:this.id}
    }, get:function (e) {
        return this.attributes[e]
    }, relation:function (e) {
        var n = this.get(e);
        if (n) {
            if (n instanceof t.Relation)return n._ensureParentAndKey(this, e), n;
            throw"Called relation() on non-relation field " + e
        }
        return new t.Relation(this, e)
    }, escape:function (e) {
        var r = this._escapedAttributes[e];
        if (r)return r;
        var i = this.attributes[e], s;
        return t._isNullOrUndefined(i) ? s = "" : s = n.escape(i.toString()), this._escapedAttributes[e] = s, s
    }, has:function (e) {
        return!t._isNullOrUndefined(this.attributes[e])
    }, _mergeMagicFields:function (e) {
        var r = this;
        n.each(["id", "objectId", "createdAt", "updatedAt"], function (i) {
            e[i] && (i === "objectId" ? r.id = e[i] : i !== "createdAt" && i !== "updatedAt" || !!n.isDate(e[i]) ? r[i] = e[i] : r[i] = t._parseDate(e[i]), delete e[i])
        })
    }, _startSave:function () {
        this._opSetQueue.push({})
    }, _processSaveQueue:function () {
        if (this._saveQueue && this._saveQueue.length > 0) {
            var e = n.first(this._saveQueue);
            this._saveQueue = n.rest(this._saveQueue), e()
        } else this._saving = !1
    }, _cancelSave:function () {
        var e = this, r = n.first(this._opSetQueue);
        this._opSetQueue = n.rest(this._opSetQueue);
        var i = n.first(this._opSetQueue);
        t._each(r, function (e, t) {
            var n = r[t], s = i[t];
            n && s ? i[t] = s._mergeWithPrevious(n) : n && (i[t] = n)
        }), this._processSaveQueue()
    }, _finishSave:function (e) {
        var r = n.first(this._opSetQueue);
        this._opSetQueue = n.rest(this._opSetQueue), this._applyOpSet(r, this._serverData), this._mergeMagicFields(e);
        var i = this;
        t._each(e, function (e, n) {
            i._serverData[n] = t._decode(n, e)
        }), this._rebuildAllEstimatedData(), this._processSaveQueue()
    }, _finishFetch:function (e, n) {
        this._opSetQueue = [
            {}
        ], this._mergeMagicFields(e);
        var r = this;
        t._each(e, function (e, n) {
            r._serverData[n] = t._decode(n, e)
        }), this._rebuildAllEstimatedData(), this._refreshCache(), this._opSetQueue = [
            {}
        ], this._hasData = n
    }, _applyOpSet:function (e, n) {
        var r = this;
        t._.each(e, function (e, i) {
            n[i] = e._estimate(n[i], r, i), n[i] === t.Op._UNSET && delete n[i]
        })
    }, _resetCacheForKey:function (e) {
        var r = this.attributes[e];
        if (n.isObject(r) && !(r instanceof t.Object)) {
            r = r.toJSON ? r.toJSON() : r;
            var i = JSON.stringify(r);
            if (this._hashedJSON[e] !== i)return this._hashedJSON[e] = i, !0
        }
        return!1
    }, _rebuildEstimatedDataForKey:function (e) {
        var r = this;
        delete this.attributes[e], this._serverData[e] && (this.attributes[e] = this._serverData[e]), n.each(this._opSetQueue, function (n) {
            var i = n[e];
            i && (r.attributes[e] = i._estimate(r.attributes[e], r, e), r.attributes[e] === t.Op._UNSET ? delete r.attributes[e] : r._resetCacheForKey(e))
        })
    }, _rebuildAllEstimatedData:function () {
        var e = this, t = n.clone(this.attributes);
        this.attributes = n.clone(this._serverData), n.each(this._opSetQueue, function (t) {
            e._applyOpSet(t, e.attributes), n.each(t, function (t, n) {
                e._resetCacheForKey(n)
            })
        }), n.each(t, function (t, n) {
            e.attributes[n] !== t && e.trigger("change:" + n, e, e.attributes[n], {})
        }), n.each(this.attributes, function (r, i) {
            n.has(t, i) || e.trigger("change:" + i, e, r, {})
        })
    }, set:function (e, r, i) {
        var s, o;
        n.isObject(e) || t._isNullOrUndefined(e) ? (s = e, t._each(s, function (e, n) {
            s[n] = t._decode(n, e)
        }), i = r) : (s = {}, s[e] = t._decode(e, r)), i = i || {};
        if (!s)return this;
        s instanceof t.Object && (s = s.attributes), i.unset && t._each(s, function (e, n) {
            s[n] = new t.Op.Unset
        });
        var u = n.clone(s), a = this;
        t._each(u, function (e, n) {
            e instanceof t.Op && (u[n] = e._estimate(a.attributes[n], a, n), u[n] === t.Op._UNSET && delete u[n])
        });
        if (!this._validate(s, i))return!1;
        this._mergeMagicFields(s), i.changes = {};
        var f = this._escapedAttributes, l = this._previousAttributes || {};
        return t._each(n.keys(s), function (e) {
            var r = s[e];
            r instanceof t.Relation && (r.parent = a), r instanceof t.Op || (r = new t.Op.Set(r));
            var o = !0;
            r instanceof t.Op.Set && n.isEqual(a.attributes[e], r.value) && (o = !1), o && (delete f[e], i.silent ? a._silent[e] = !0 : i.changes[e] = !0);
            var u = n.last(a._opSetQueue);
            u[e] = r._mergeWithPrevious(u[e]), a._rebuildEstimatedDataForKey(e), o ? (a.changed[e] = a.attributes[e], i.silent || (a._pending[e] = !0)) : (delete a.changed[e], delete a._pending[e])
        }), i.silent || this.change(i), this
    }, unset:function (e, t) {
        return t = t || {}, t.unset = !0, this.set(e, null, t)
    }, increment:function (e, r) {
        if (n.isUndefined(r) || n.isNull(r))r = 1;
        return this.set(e, new t.Op.Increment(r))
    }, add:function (e, n) {
        return this.set(e, new t.Op.Add([n]))
    }, addUnique:function (e, n) {
        return this.set(e, new t.Op.AddUnique([n]))
    }, remove:function (e, n) {
        return this.set(e, new t.Op.Remove([n]))
    }, op:function (e) {
        return n.last(this._opSetQueue)[e]
    }, clear:function (e) {
        e = e || {}, e.unset = !0;
        var t = n.extend(this.attributes, this._operations);
        return this.set(t, e)
    }, _getSaveJSON:function () {
        var e = n.clone(n.first(this._opSetQueue));
        return t._each(e, function (t, n) {
            e[n] = t.toJSON()
        }), e
    }, fetch:function (e) {
        var r = new t.Promise;
        e = e ? n.clone(e) : {};
        var i = this, s = e.success;
        return e.success = function (e, t, n) {
            i._finishFetch(i.parse(e, t, n), !0), s && s(i, e), r.resolve(i)
        }, e.error = t.Object._wrapError(e.error, i, e, r), t._request("classes", i.className, i.id, "GET", null, e), r
    }, save:function (e, r, i) {
        var s = new t.Promise, o, u, a, f, l;
        n.isObject(e) || t._isNullOrUndefined(e) ? (u = e, f = r) : (u = {}, u[e] = r, f = i);
        if (!f && u) {
            var c = n.reject(u, function (e, t) {
                return n.include(["success", "error", "wait"], t)
            });
            if (c.length === 0) {
                var h = !0;
                n.has(u, "success") && !n.isFunction(u.success) && (h = !1), n.has(u, "error") && !n.isFunction(u.error) && (h = !1);
                if (h)return this.save(null, u)
            }
        }
        f = f ? n.clone(f) : {}, f.wait && (a = n.clone(this.attributes));
        var p = n.clone(f);
        p.wait && (p.silent = !0), p.error = function (e, t) {
            f.error && f.error.apply(this, arguments), s.reject(t)
        };
        if (u && !this.set(u, p))return s;
        var d = f, v = n.clone(f), m = this;
        m._refreshCache();
        var g = t.Object._findUnsavedChildren(m.attributes);
        if (g.length > 0)return t.Object.saveAll(g).then(function () {
            return m.save(null, d)
        }, function (e) {
            return f.error && f.error.apply(this, arguments), t.Promise.error(e)
        });
        v.success = function (e, t, r) {
            var i = m.parse(e, t, r);
            v.wait && (i = n.extend(u || {}, i)), m._finishSave(i), d.success ? d.success(m, e) : m.trigger("sync", m, e, v), s.resolve(m)
        }, v.error = function (e, t) {
            e._cancelSave(), d.error && d.error.apply(this, arguments), s.reject(t)
        }, v.error = t.Object._wrapError(v.error, m, v), this._startSave();
        var y = function () {
            var e = m.id ? "PUT" : "POST", n = m._getSaveJSON(), r = "classes", i = m.className;
            m.className === "_User" && !m.id && (r = "users", i = null), t._request(r, i, m.id, e, n, v), v.wait && m.set(a, p)
        };
        return this._saving ? (this._saveQueue = this._saveQueue || [], this._saveQueue.push(y)) : (this._saving = !0, y()), s
    }, destroy:function (e) {
        var r = new t.Promise;
        e = e ? n.clone(e) : {};
        var i = this, s = e.success, o = function () {
            i.trigger("destroy", i, i.collection, e)
        };
        return this.id ? (e.success = function (t) {
            e.wait && o(), s ? s(i, t) : i.trigger("sync", i, t, e), r.resolve(i)
        }, e.error = t.Object._wrapError(e.error, i, e, r), t._request("classes", this.className, this.id, "DELETE", null, e), e.wait || o(), r) : o()
    }, parse:function (e, r, i) {
        var s = n.clone(e);
        return n(["createdAt", "updatedAt"]).each(function (e) {
            s[e] && (s[e] = t._parseDate(s[e]))
        }), s.updatedAt || (s.updatedAt = s.createdAt), r && (this._existed = r.status !== 201), s
    }, clone:function () {
        return new this.constructor(this.attributes)
    }, isNew:function () {
        return!this.id
    }, change:function (e) {
        e = e || {};
        var r = this._changing;
        this._changing = !0;
        var i = this;
        t._each(this._silent, function (e) {
            i._pending[e] = !0
        });
        var s = n.extend({}, e.changes, this._silent);
        this._silent = {}, t._each(s, function (t, n) {
            i.trigger("change:" + n, i, i.get(n), e)
        });
        if (r)return this;
        var o = function (e, t) {
            !i._pending[t] && !i._silent[t] && delete i.changed[t]
        };
        while (!n.isEmpty(this._pending))this._pending = {}, this.trigger("change", this, e), t._each(this.changed, o), i._previousAttributes = n.clone(this.attributes);
        return this._changing = !1, this
    }, existed:function () {
        return this._existed
    }, hasChanged:function (e) {
        return arguments.length ? this.changed && n.has(this.changed, e) : !n.isEmpty(this.changed)
    }, changedAttributes:function (e) {
        if (!e)return this.hasChanged() ? n.clone(this.changed) : !1;
        var r = {}, i = this._previousAttributes;
        return t._each(e, function (e, t) {
            n.isEqual(i[t], e) || (r[t] = e)
        }), r
    }, previous:function (e) {
        return!arguments.length || !this._previousAttributes ? null : this._previousAttributes[e]
    }, previousAttributes:function () {
        return n.clone(this._previousAttributes)
    }, isValid:function () {
        return!this.validate(this.attributes)
    }, validate:function (e, r) {
        return!n.has(e, "ACL") || e.ACL instanceof t.ACL ? !1 : new t.Error(t.Error.OTHER_CAUSE, "ACL must be a Parse.ACL.")
    }, _validate:function (e, t) {
        if (t.silent || !this.validate)return!0;
        e = n.extend({}, this.attributes, e);
        var r = this.validate(e, t);
        return r ? (t && t.error ? t.error(this, r, t) : this.trigger("error", this, r, t), !1) : !0
    }, getACL:function () {
        return this.get("ACL")
    }, setACL:function (e, t) {
        return this.set("ACL", e, t)
    }}), t.Object._getSubclass = function (e) {
        if (!n.isString(e))throw"Parse.Object._getSubclass requires a string argument.";
        var r = t.Object._classMap[e];
        return r || (r = t.Object.extend(e), t.Object._classMap[e] = r), r
    }, t.Object._create = function (e, n, r) {
        var i = t.Object._getSubclass(e);
        return new i(n, r)
    }, t.Object._classMap = {}, t.Object._extend = t._extend, t.Object.extend = function (e, r, i) {
        if (!n.isString(e)) {
            if (e && n.has(e, "className"))return t.Object.extend(e.className, e, r);
            throw new Error("Parse.Object.extend's first argument should be the className.")
        }
        e === "User" && (e = "_User");
        var s = null;
        if (n.has(t.Object._classMap, e)) {
            var o = t.Object._classMap[e];
            s = o._extend(r, i)
        } else r = r || {}, r.className = e, s = this._extend(r, i);
        return s.extend = function (r) {
            if (n.isString(r) || r && n.has(r, "className"))return t.Object.extend.apply(s, arguments);
            var i = [e].concat(t._.toArray(arguments));
            return t.Object.extend.apply(s, i)
        }, t.Object._classMap[e] = s, s
    }, t.Object._wrapError = function (e, n, r, i) {
        return function (s, o) {
            s !== n && (o = s);
            var u = new t.Error(-1, o.responseText);
            if (o.responseText) {
                var a = JSON.parse(o.responseText);
                a && (u = new t.Error(a.code, a.error))
            }
            e ? e(n, u, r) : n.trigger("error", n, u, r), i && i.reject(u)
        }
    }, t.Object._findUnsavedChildren = function (e) {
        var r = [];
        if (e instanceof t.Object)e._refreshCache(), e.dirty() && (r = [e]), r.push.apply(r, t.Object._findUnsavedChildren(e.attributes)); else if (e instanceof t.Relation)var i = null; else n.isArray(e) ? n.each(e, function (e) {
            r.push.apply(r, t.Object._findUnsavedChildren(e))
        }) : n.isObject(e) && t._each(e, function (e) {
            r.push.apply(r, t.Object._findUnsavedChildren(e))
        });
        return r
    }
}(this), function (e) {
    e.Parse = e.Parse || {};
    var t = e.Parse, n = t._;
    t.Role = t.Object.extend("_Role", {constructor:function (e, r) {
        n.isString(e) && r instanceof t.ACL ? (t.Object.prototype.constructor.call(this, null, null), this.setName(e), this.setACL(r)) : t.Object.prototype.constructor.call(this, e, r)
    }, getName:function () {
        return this.get("name")
    }, setName:function (e, t) {
        return this.set("name", e, t)
    }, getUsers:function () {
        return this.relation("users")
    }, getRoles:function () {
        return this.relation("roles")
    }, validate:function (e, r) {
        if ("name"in e && e.name !== this.getName()) {
            var i = e.name;
            if (this.id && this.id !== e.objectId)return new t.Error(t.Error.OTHER_CAUSE, "A role's name can only be set before it has been saved.");
            if (!n.isString(i))return new t.Error(t.Error.OTHER_CAUSE, "A role's name must be a String.");
            if (!/^[0-9a-zA-Z\-_ ]+$/.test(i))return new t.Error(t.Error.OTHER_CAUSE, "A role's name can only contain alphanumeric characters, _, -, and spaces.")
        }
        return t.Object.prototype.validate ? t.Object.prototype.validate.call(this, e, r) : !1
    }})
}(this), function (e) {
    e.Parse = e.Parse || {};
    var t = e.Parse, n = t._;
    t.Collection = function (e, t) {
        t = t || {}, t.comparator && (this.comparator = t.comparator), t.model && (this.model = t.model), t.query && (this.query = t.query), this._reset(), this.initialize.apply(this, arguments), e && this.reset(e, {silent:!0, parse:t.parse})
    }, n.extend(t.Collection.prototype, t.Events, {model:t.Object, initialize:function () {
    }, toJSON:function () {
        return this.map(function (e) {
            return e.toJSON()
        })
    }, add:function (e, r) {
        var i, s, o, u, a, f, l = {}, c = {};
        r = r || {}, e = n.isArray(e) ? e.slice() : [e];
        for (i = 0, o = e.length; i < o; i++) {
            e[i] = this._prepareModel(e[i], r), u = e[i];
            if (!u)throw new Error("Can't add an invalid model to a collection");
            a = u.cid;
            if (l[a] || this._byCid[a])throw new Error("Duplicate cid: can't add the same model to a collection twice");
            f = u.id;
            if (!t._isNullOrUndefined(f) && (c[f] || this._byId[f]))throw new Error("Duplicate id: can't add the same model to a collection twice");
            c[f] = u, l[a] = u
        }
        for (i = 0; i < o; i++)(u = e[i]).on("all", this._onModelEvent, this), this._byCid[u.cid] = u, u.id && (this._byId[u.id] = u);
        this.length += o, s = t._isNullOrUndefined(r.at) ? this.models.length : r.at, this.models.splice.apply(this.models, [s, 0].concat(e)), this.comparator && this.sort({silent:!0});
        if (r.silent)return this;
        for (i = 0, o = this.models.length; i < o; i++)u = this.models[i], l[u.cid] && (r.index = i, u.trigger("add", u, this, r));
        return this
    }, remove:function (e, t) {
        var r, i, s, o;
        t = t || {}, e = n.isArray(e) ? e.slice() : [e];
        for (r = 0, i = e.length; r < i; r++) {
            o = this.getByCid(e[r]) || this.get(e[r]);
            if (!o)continue;
            delete this._byId[o.id], delete this._byCid[o.cid], s = this.indexOf(o), this.models.splice(s, 1), this.length--, t.silent || (t.index = s, o.trigger("remove", o, this, t)), this._removeReference(o)
        }
        return this
    }, get:function (e) {
        return e && this._byId[e.id || e]
    }, getByCid:function (e) {
        return e && this._byCid[e.cid || e]
    }, at:function (e) {
        return this.models[e]
    }, sort:function (e) {
        e = e || {};
        if (!this.comparator)throw new Error("Cannot sort a set without a comparator");
        var t = n.bind(this.comparator, this);
        return this.comparator.length === 1 ? this.models = this.sortBy(t) : this.models.sort(t), e.silent || this.trigger("reset", this, e), this
    }, pluck:function (e) {
        return n.map(this.models, function (t) {
            return t.get(e)
        })
    }, reset:function (e, t) {
        var r = this;
        return e = e || [], t = t || {}, n.each(this.models, function (e) {
            r._removeReference(e)
        }), this._reset(), this.add(e, {silent:!0, parse:t.parse}), t.silent || this.trigger("reset", this, t), this
    }, fetch:function (e) {
        e = e ? n.clone(e) : {}, e.parse === undefined && (e.parse = !0);
        var r = this, i = e.success;
        e.success = function (t, n) {
            e.add ? r.add(t, e) : r.reset(t, e), i && i(r, n)
        }, e.error = t.Object._wrapError(e.error, r, e);
        var s = this.query || new t.Query(this.model);
        s.find(e)
    }, create:function (e, t) {
        var r = this;
        t = t ? n.clone(t) : {}, e = this._prepareModel(e, t);
        if (!e)return!1;
        t.wait || r.add(e, t);
        var i = t.success;
        return t.success = function (n, s, o) {
            t.wait && r.add(n, t), i ? i(n, s) : n.trigger("sync", e, s, t)
        }, e.save(null, t), e
    }, parse:function (e, t) {
        return e
    }, chain:function () {
        return n(this.models).chain()
    }, _reset:function (e) {
        this.length = 0, this.models = [], this._byId = {}, this._byCid = {}
    }, _prepareModel:function (e, n) {
        if (e instanceof t.Object)e.collection || (e.collection = this); else {
            var r = e;
            n.collection = this, e = new this.model(r, n), e._validate(e.attributes, n) || (e = !1)
        }
        return e
    }, _removeReference:function (e) {
        this === e.collection && delete e.collection, e.off("all", this._onModelEvent, this)
    }, _onModelEvent:function (e, t, n, r) {
        if ((e === "add" || e === "remove") && n !== this)return;
        e === "destroy" && this.remove(t, r), t && e === "change:objectId" && (delete this._byId[t.previous("objectId")], this._byId[t.id] = t), this.trigger.apply(this, arguments)
    }});
    var r = ["forEach", "each", "map", "reduce", "reduceRight", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "sortBy", "sortedIndex", "toArray", "size", "first", "initial", "rest", "last", "without", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "groupBy"];
    n.each(r, function (e) {
        t.Collection.prototype[e] = function () {
            return n[e].apply(n, [this.models].concat(n.toArray(arguments)))
        }
    }), t.Collection.extend = t._extend
}(this), function (e) {
    e.Parse = e.Parse || {};
    var t = e.Parse, n = t._;
    t.View = function (e) {
        this.cid = n.uniqueId("view"), this._configure(e || {}), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
    };
    var r = /^(\S+)\s*(.*)$/, i = ["model", "collection", "el", "id", "attributes", "className", "tagName"];
    n.extend(t.View.prototype, t.Events, {tagName:"div", $:function (e) {
        return this.$el.find(e)
    }, initialize:function () {
    }, render:function () {
        return this
    }, remove:function () {
        return this.$el.remove(), this
    }, make:function (e, n, r) {
        var i = document.createElement(e);
        return n && t.$(i).attr(n), r && t.$(i).html(r), i
    }, setElement:function (e, n) {
        return this.$el = t.$(e), this.el = this.$el[0], n !== !1 && this.delegateEvents(), this
    }, delegateEvents:function (e) {
        e = e || t._getValue(this, "events");
        if (!e)return;
        this.undelegateEvents();
        var i = this;
        t._each(e, function (t, s) {
            n.isFunction(t) || (t = i[e[s]]);
            if (!t)throw new Error('Event "' + e[s] + '" does not exist');
            var o = s.match(r), u = o[1], a = o[2];
            t = n.bind(t, i), u += ".delegateEvents" + i.cid, a === "" ? i.$el.bind(u, t) : i.$el.delegate(a, u, t)
        })
    }, undelegateEvents:function () {
        this.$el.unbind(".delegateEvents" + this.cid)
    }, _configure:function (e) {
        this.options && (e = n.extend({}, this.options, e));
        var t = this;
        n.each(i, function (n) {
            e[n] && (t[n] = e[n])
        }), this.options = e
    }, _ensureElement:function () {
        if (!this.el) {
            var e = t._getValue(this, "attributes") || {};
            this.id && (e.id = this.id), this.className && (e["class"] = this.className), this.setElement(this.make(this.tagName, e), !1)
        } else this.setElement(this.el, !1)
    }}), t.View.extend = t._extend
}(this), function (e) {
    e.Parse = e.Parse || {};
    var t = e.Parse, n = t._;
    t.User = t.Object.extend("_User", {_isCurrentUser:!1, _mergeMagicFields:function (e) {
        e.sessionToken && (this._sessionToken = e.sessionToken, delete e.sessionToken), t.User.__super__._mergeMagicFields.call(this, e)
    }, _cleanupAuthData:function () {
        if (!this.isCurrent())return;
        var e = this.get("authData");
        if (!e)return;
        n.each(this.get("authData"), function (t, n) {
            e[n] || delete e[n]
        })
    }, _synchronizeAllAuthData:function () {
        var e = this.get("authData");
        if (!e)return;
        var t = this;
        n.each(this.get("authData"), function (e, n) {
            t._synchronizeAuthData(n)
        })
    }, _synchronizeAuthData:function (e) {
        if (!this.isCurrent())return;
        var r;
        n.isString(e) ? (r = e, e = t.User._authProviders[r]) : r = e.getAuthType();
        var i = this.get("authData");
        if (!i || !e)return;
        var s = e.restoreAuthentication(i[r]);
        s || this._unlinkFrom(e)
    }, _handleSaveResult:function (e) {
        e && (this._isCurrentUser = !0), this._cleanupAuthData(), this._synchronizeAllAuthData(), delete this._serverData.password, this._rebuildEstimatedDataForKey("password"), this._refreshCache(), (e || this.isCurrent()) && t.User._saveCurrentUser(this)
    }, _linkWith:function (e, r) {
        var i;
        n.isString(e) ? (i = e, e = t.User._authProviders[e]) : i = e.getAuthType();
        if (n.has(r, "authData")) {
            var s = this.get("authData") || {};
            s[i] = r.authData, this.set("authData", s);
            var o = n.clone(r);
            return o.success = function (e) {
                e._handleSaveResult(!0), r.success && r.success.apply(this, arguments)
            }, this.save({authData:s}, o)
        }
        var u = this;
        return e.authenticate({success:function (e, t) {
            u._linkWith(e, {authData:t, success:r.success, error:r.error})
        }, error:function (e, t) {
            r.error && r.error(u, t)
        }})
    }, _unlinkFrom:function (e, r) {
        var i;
        n.isString(e) ? (i = e, e = t.User._authProviders[e]) : i = e.getAuthType();
        var s = n.clone(r), o = this;
        return s.authData = null, s.success = function (t) {
            o._synchronizeAuthData(e), r.success && r.success.apply(this, arguments)
        }, this._linkWith(e, s)
    }, _isLinked:function (e) {
        var t;
        n.isString(e) ? t = e : t = e.getAuthType();
        var r = this.get("authData") || {};
        return!!r[t]
    }, _logOutWithAll:function () {
        var e = this.get("authData");
        if (!e)return;
        var t = this;
        n.each(this.get("authData"), function (e, n) {
            t._logOutWith(n)
        })
    }, _logOutWith:function (e) {
        if (!this.isCurrent())return;
        n.isString(e) && (e = t.User._authProviders[e]), e && e.deauthenticate && e.deauthenticate()
    }, signUp:function (e, r) {
        var i;
        r = r || {};
        var s = e && e.username || this.get("username");
        if (!s || s === "")return i = new t.Error(t.Error.OTHER_CAUSE, "Cannot sign up user with an empty name."), r && r.error && r.error(this, i), t.Promise.error(i);
        var o = e && e.password || this.get("password");
        if (!o || o === "")return i = new t.Error(t.Error.OTHER_CAUSE, "Cannot sign up user with an empty password."), r && r.error && r.error(this, i), t.Promise.error(i);
        var u = n.clone(r);
        return u.success = function (e) {
            e._handleSaveResult(!0), r.success && r.success.apply(this, arguments)
        }, this.save(e, u)
    }, logIn:function (e) {
        var r = new t.Promise, i = this, s = e ? n.clone(e) : {};
        return s.success = function (t, n, o) {
            var u = i.parse(t, n, o);
            i._finishFetch(u), i._handleSaveResult(!0), e && e.success ? e.success(i, t) : i.trigger("sync", i, t, s), r.resolve(i)
        }, s.error = t.Object._wrapError(s.error, i, s, r), t._request("login", null, null, "GET", this.toJSON(), s), r
    }, save:function (e, r, i) {
        var s, o, u, a, f;
        n.isObject(e) || n.isNull(e) || n.isUndefined(e) ? (o = e, a = r) : (o = {}, o[e] = r, a = i), a = a || {};
        var l = n.clone(a);
        return l.success = function (e) {
            e._handleSaveResult(!1), a.success && a.success.apply(this, arguments)
        }, t.Object.prototype.save.call(this, o, l)
    }, fetch:function (e) {
        var r = n.clone(e);
        return r.success = function (t) {
            t._handleSaveResult(!1), e.success && e.success.apply(this, arguments)
        }, t.Object.prototype.fetch.call(this, r)
    }, isCurrent:function () {
        return this._isCurrentUser
    }, getUsername:function () {
        return this.get("username")
    }, setUsername:function (e, t) {
        return this.set("username", e, t)
    }, setPassword:function (e, t) {
        return this.set("password", e, t)
    }, getEmail:function () {
        return this.get("email")
    }, setEmail:function (e, t) {
        return this.set("email", e, t)
    }, authenticated:function () {
        return!!this._sessionToken && t.User.current() && t.User.current().id === this.id
    }}, {_currentUser:null, _currentUserMatchesDisk:!1, _CURRENT_USER_KEY:"currentUser", _authProviders:{}, signUp:function (e, n, r, i) {
        r = r || {}, r.username = e, r.password = n;
        var s = t.Object._create("_User");
        return s.signUp(r, i)
    }, logIn:function (e, n, r) {
        var i = t.Object._create("_User");
        return i._finishFetch({username:e, password:n}), i.logIn(r)
    }, logOut:function () {
        t.User._currentUser !== null && (t.User._currentUser._logOutWithAll(), t.User._currentUser._isCurrentUser = !1), t.User._currentUserMatchesDisk = !0, t.User._currentUser = null, t.localStorage.removeItem(t._getParsePath(t.User._CURRENT_USER_KEY))
    }, requestPasswordReset:function (e, n) {
        var r = {email:e};
        n.error = t.Query._wrapError(n.error, n), t._request("requestPasswordReset", null, null, "POST", r, n)
    }, current:function () {
        if (t.User._currentUser)return t.User._currentUser;
        if (t.User._currentUserMatchesDisk)return t.User._currentUser;
        t.User._currentUserMatchesDisk = !0;
        var e = t.localStorage.getItem(t._getParsePath(t.User._CURRENT_USER_KEY));
        if (!e)return null;
        t.User._currentUser = new t.Object._create("_User"), t.User._currentUser._isCurrentUser = !0;
        var n = JSON.parse(e);
        return t.User._currentUser.id = n._id, delete n._id, t.User._currentUser._sessionToken = n._sessionToken, delete n._sessionToken, t.User._currentUser.set(n), t.User._currentUser._synchronizeAllAuthData(), t.User._currentUser._refreshCache(), t.User._currentUser._opSetQueue = [
            {}
        ], t.User._currentUser
    }, _saveCurrentUser:function (e) {
        t.User._currentUser !== e && t.User.logOut(), e._isCurrentUser = !0, t.User._currentUser = e, t.User._currentUserMatchesDisk = !0;
        var n = e.toJSON();
        n._id = e.id, n._sessionToken = e._sessionToken, t.localStorage.setItem(t._getParsePath(t.User._CURRENT_USER_KEY), JSON.stringify(n))
    }, _registerAuthenticationProvider:function (e) {
        t.User._authProviders[e.getAuthType()] = e, t.User.current() && t.User.current()._synchronizeAuthData(e.getAuthType())
    }, _logInWith:function (e, n) {
        var r = new t.User;
        return r._linkWith(e, n)
    }})
}(this), function (e) {
    e.Parse = e.Parse || {};
    var t = e.Parse, n = t._;
    t.Query = function (e) {
        n.isString(e) && (e = t.Object._getSubclass(e)), this.objectClass = e, this.className = e.prototype.className, this._where = {}, this._include = [], this._limit = -1, this._skip = 0, this._extraOptions = {}
    }, t.Query.or = function () {
        var e = n.toArray(arguments), r = null;
        n.each(e, function (e) {
            n.isNull(r) && (r = e.className);
            if (r !== e.className)throw"All queries must be for the same class"
        });
        var i = new t.Query(r);
        return i._orQuery(e), i
    }, t.Query.prototype = {get:function (e, n) {
        var r = this, i = n.success || function () {
        }, s = n.error || function () {
        }, o = new t.Promise, u = {error:function (e) {
            s(null, e), o.reject(e)
        }, success:function (e) {
            if (e)i(e), o.resolve(e); else {
                var n = new t.Error(t.Error.OBJECT_NOT_FOUND, "Object not found.");
                s(null, n), o.reject(n)
            }
        }};
        return r.equalTo("objectId", e), r.first(u), o
    }, toJSON:function () {
        var e = {where:this._where};
        return this._include.length > 0 && (e.include = this._include.join(",")), this._limit >= 0 && (e.limit = this._limit), this._skip > 0 && (e.skip = this._skip), this._order !== undefined && (e.order = this._order), t._each(this._extraOptions, function (t, n) {
            e[n] = t
        }), e
    }, find:function (e) {
        var r = this;
        e = e || {};
        var i = e.success || function () {
        }, s = new t.Promise, o = {error:e.error, success:function (e) {
            var o = n.map(e.results, function (n) {
                var i;
                return e.className ? i = new t.Object(e.className) : i = new r.objectClass, i._finishFetch(n, !0), i
            });
            i(o), s.resolve(o)
        }}, u = this.toJSON();
        return o.error = t.Query._wrapError(e.error, o, s), t._request("classes", this.className, null, "GET", u, o), s
    }, count:function (e) {
        var n = this;
        e = e || {};
        var r = e.success || function () {
        }, i = new t.Promise, s = {error:e.error, success:function (e) {
            r(e.count), i.resolve(e.count)
        }}, o = this.toJSON();
        return o.limit = 0, o.count = 1, s.error = t.Query._wrapError(e.error, s, i), t._request("classes", this.className, null, "GET", o, s), i
    }, first:function (e) {
        var r = this;
        e = e || {};
        var i = e.success || function () {
        }, s = new t.Promise, o = {error:e.error, success:function (e) {
            var t = n.map(e.results, function (e) {
                var t = new r.objectClass;
                return t._finishFetch(e, !0), t
            })[0];
            i(t), s.resolve(t)
        }}, u = this.toJSON();
        return u.limit = 1, o.error = t.Query._wrapError(e.error, o, s), t._request("classes", this.className, null, "GET", u, o), s
    }, collection:function (e, r) {
        return r = r || {}, new t.Collection(e, n.extend(r, {model:this.objectClass, query:this}))
    }, skip:function (e) {
        return this._skip = e, this
    }, limit:function (e) {
        return this._limit = e, this
    }, equalTo:function (e, n) {
        return this._where[e] = t._encode(n), this
    }, _addCondition:function (e, n, r) {
        return this._where[e] || (this._where[e] = {}), this._where[e][n] = t._encode(r), this
    }, notEqualTo:function (e, t) {
        return this._addCondition(e, "$ne", t), this
    }, lessThan:function (e, t) {
        return this._addCondition(e, "$lt", t), this
    }, greaterThan:function (e, t) {
        return this._addCondition(e, "$gt", t), this
    }, lessThanOrEqualTo:function (e, t) {
        return this._addCondition(e, "$lte", t), this
    }, greaterThanOrEqualTo:function (e, t) {
        return this._addCondition(e, "$gte", t), this
    }, containedIn:function (e, t) {
        return this._addCondition(e, "$in", t), this
    }, notContainedIn:function (e, t) {
        return this._addCondition(e, "$nin", t), this
    }, exists:function (e) {
        return this._addCondition(e, "$exists", !0), this
    }, doesNotExist:function (e) {
        return this._addCondition(e, "$exists", !1), this
    }, matches:function (e, t, n) {
        return this._addCondition(e, "$regex", t), n || (n = ""), t.ignoreCase && (n += "i"), t.multiline && (n += "m"), n && n.length && this._addCondition(e, "$options", n), this
    }, matchesQuery:function (e, t) {
        var n = t.toJSON();
        return n.className = t.className, this._addCondition(e, "$inQuery", n), this
    }, doesNotMatchQuery:function (e, t) {
        var n = t.toJSON();
        return n.className = t.className, this._addCondition(e, "$notInQuery", n), this
    }, matchesKeyInQuery:function (e, t, n) {
        var r = n.toJSON();
        return r.className = n.className, this._addCondition(e, "$select", {key:t, query:r}), this
    }, doesNotMatchKeyInQuery:function (e, t, n) {
        var r = n.toJSON();
        return r.className = n.className, this._addCondition(e, "$dontSelect", {key:t, query:r}), this
    }, _orQuery:function (e) {
        var t = n.map(e, function (e) {
            return e.toJSON().where
        });
        return this._where.$or = t, this
    }, _quote:function (e) {
        return"\\Q" + e.replace("\\E", "\\E\\\\E\\Q") + "\\E"
    }, contains:function (e, t) {
        return this._addCondition(e, "$regex", this._quote(t)), this
    }, startsWith:function (e, t) {
        return this._addCondition(e, "$regex", "^" + this._quote(t)), this
    }, endsWith:function (e, t) {
        return this._addCondition(e, "$regex", this._quote(t) + "$"), this
    }, ascending:function (e) {
        return this._order = e, this
    }, descending:function (e) {
        return this._order = "-" + e, this
    }, near:function (e, n) {
        return n instanceof t.GeoPoint || (n = new t.GeoPoint(n)), this._addCondition(e, "$nearSphere", n), this
    }, withinRadians:function (e, t, n) {
        return this.near(e, t), this._addCondition(e, "$maxDistance", n), this
    }, withinMiles:function (e, t, n) {
        return this.withinRadians(e, t, n / 3958.8)
    }, withinKilometers:function (e, t, n) {
        return this.withinRadians(e, t, n / 6371)
    }, withinGeoBox:function (e, n, r) {
        return n instanceof t.GeoPoint || (n = new t.GeoPoint(n)), r instanceof t.GeoPoint || (r = new t.GeoPoint(r)), this._addCondition(e, "$within", {$box:[n, r]}), this
    }, include:function (e) {
        return n.isArray(e) ? this._include = this._include.concat(e) : this._include.push(e), this
    }}, t.Query._wrapError = function (e, n, r) {
        return function (i) {
            var s;
            if (i.responseText) {
                var o = JSON.parse(i.responseText);
                o && (s = new t.Error(o.code, o.error))
            }
            s = s || new t.Error(-1, i.responseText), e && e(s, n), r && r.reject(s)
        }
    }
}(this), function (e) {
    e.Parse = e.Parse || {};
    var t = e.Parse, n = t._, r = "*", i = !1, s, o, u = {authenticate:function (e) {
        var t = this;
        FB.login(function (n) {
            n.authResponse ? e.success && e.success(t, {id:n.authResponse.userID, access_token:n.authResponse.accessToken, expiration_date:(new Date(n.authResponse.expiresIn * 1e3 + (new Date).getTime())).toJSON()}) : e.error && e.error(t, n)
        }, {scope:s})
    }, restoreAuthentication:function (e) {
        if (e) {
            var r = {userID:e.id, accessToken:e.access_token, expiresIn:(t._parseDate(e.expiration_date).getTime() - (new Date).getTime()) / 1e3}, i = n.clone(o);
            i.authResponse = r, FB.init(i)
        }
        return!0
    }, getAuthType:function () {
        return"facebook"
    }, deauthenticate:function () {
        this.restoreAuthentication(null), FB.logout()
    }};
    t.FacebookUtils = {init:function (e) {
        if (typeof FB == "undefined")throw"The Javascript Facebook SDK must be loaded before calling init.";
        o = n.clone(e), FB.init(o), t.User._registerAuthenticationProvider(u), i = !0
    }, isLinked:function (e) {
        return e._isLinked("facebook")
    }, logIn:function (e, r) {
        if (!e || n.isString(e)) {
            if (!i)throw"You must initialize FacebookUtils before calling logIn.";
            return s = e, t.User._logInWith("facebook", r)
        }
        var o = n.clone(r);
        return o.authData = e, t.User._logInWith("facebook", o)
    }, link:function (e, t, r) {
        if (!t || n.isString(t)) {
            if (!i)throw"You must initialize FacebookUtils before calling link.";
            return s = t, e._linkWith("facebook", r)
        }
        var o = n.clone(r);
        return o.authData = t, e._linkWith("facebook", o)
    }, unlink:function (e, t) {
        if (!i)throw"You must initialize FacebookUtils before calling unlink.";
        return e._unlinkFrom("facebook", t)
    }}
}(this), function (e) {
    e.Parse = e.Parse || {};
    var t = e.Parse, n = t._;
    t.History = function () {
        this.handlers = [], n.bindAll(this, "checkUrl")
    };
    var r = /^[#\/]/, i = /msie [\w.]+/;
    t.History.started = !1, n.extend(t.History.prototype, t.Events, {interval:50, getHash:function (e) {
        var t = e ? e.location : window.location, n = t.href.match(/#(.*)$/);
        return n ? n[1] : ""
    }, getFragment:function (e, n) {
        if (t._isNullOrUndefined(e))if (this._hasPushState || n) {
            e = window.location.pathname;
            var i = window.location.search;
            i && (e += i)
        } else e = this.getHash();
        return e.indexOf(this.options.root) || (e = e.substr(this.options.root.length)), e.replace(r, "")
    }, start:function (e) {
        if (t.History.started)throw new Error("Parse.history has already been started");
        t.History.started = !0, this.options = n.extend({}, {root:"/"}, this.options, e), this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && window.history && window.history.pushState);
        var s = this.getFragment(), o = document.documentMode, u = i.exec(navigator.userAgent.toLowerCase()) && (!o || o <= 7);
        u && (this.iframe = t.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, this.navigate(s)), this._hasPushState ? t.$(window).bind("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange"in window && !u ? t.$(window).bind("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = window.setInterval(this.checkUrl, this.interval)), this.fragment = s;
        var a = window.location, f = a.pathname === this.options.root;
        if (this._wantsHashChange && this._wantsPushState && !this._hasPushState && !f)return this.fragment = this.getFragment(null, !0), window.location.replace(this.options.root + "#" + this.fragment), !0;
        this._wantsPushState && this._hasPushState && f && a.hash && (this.fragment = this.getHash().replace(r, ""), window.history.replaceState({}, document.title, a.protocol + "//" + a.host + this.options.root + this.fragment));
        if (!this.options.silent)return this.loadUrl()
    }, stop:function () {
        t.$(window).unbind("popstate", this.checkUrl).unbind("hashchange", this.checkUrl), window.clearInterval(this._checkUrlInterval), t.History.started = !1
    }, route:function (e, t) {
        this.handlers.unshift({route:e, callback:t})
    }, checkUrl:function (e) {
        var t = this.getFragment();
        t === this.fragment && this.iframe && (t = this.getFragment(this.getHash(this.iframe)));
        if (t === this.fragment)return!1;
        this.iframe && this.navigate(t), this.loadUrl() || this.loadUrl(this.getHash())
    }, loadUrl:function (e) {
        var t = this.fragment = this.getFragment(e), r = n.any(this.handlers, function (e) {
            if (e.route.test(t))return e.callback(t), !0
        });
        return r
    }, navigate:function (e, n) {
        if (!t.History.started)return!1;
        if (!n || n === !0)n = {trigger:n};
        var i = (e || "").replace(r, "");
        if (this.fragment === i)return;
        if (this._hasPushState) {
            i.indexOf(this.options.root) !== 0 && (i = this.options.root + i), this.fragment = i;
            var s = n.replace ? "replaceState" : "pushState";
            window.history[s]({}, document.title, i)
        } else this._wantsHashChange ? (this.fragment = i, this._updateHash(window.location, i, n.replace), this.iframe && i !== this.getFragment(this.getHash(this.iframe)) && (n.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, i, n.replace))) : window.location.assign(this.options.root + e);
        n.trigger && this.loadUrl(e)
    }, _updateHash:function (e, t, n) {
        if (n) {
            var r = e.toString().replace(/(javascript:|#).*$/, "");
            e.replace(r + "#" + t)
        } else e.hash = t
    }})
}(this), function (e) {
    e.Parse = e.Parse || {};
    var t = e.Parse, n = t._;
    t.Router = function (e) {
        e = e || {}, e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
    };
    var r = /:\w+/g, i = /\*\w+/g, s = /[\-\[\]{}()+?.,\\\^\$\|#\s]/g;
    n.extend(t.Router.prototype, t.Events, {initialize:function () {
    }, route:function (e, r, i) {
        return t.history = t.history || new t.History, n.isRegExp(e) || (e = this._routeToRegExp(e)), i || (i = this[r]), t.history.route(e, n.bind(function (n) {
            var s = this._extractParameters(e, n);
            i && i.apply(this, s), this.trigger.apply(this, ["route:" + r].concat(s)), t.history.trigger("route", this, r, s)
        }, this)), this
    }, navigate:function (e, n) {
        t.history.navigate(e, n)
    }, _bindRoutes:function () {
        if (!this.routes)return;
        var e = [];
        for (var t in this.routes)this.routes.hasOwnProperty(t) && e.unshift([t, this.routes[t]]);
        for (var n = 0, r = e.length; n < r; n++)this.route(e[n][0], e[n][1], this[e[n][1]])
    }, _routeToRegExp:function (e) {
        return e = e.replace(s, "\\$&").replace(r, "([^/]+)").replace(i, "(.*?)"), new RegExp("^" + e + "$")
    }, _extractParameters:function (e, t) {
        return e.exec(t).slice(1)
    }}), t.Router.extend = t._extend
}(this), function (e) {
    e.Parse = e.Parse || {};
    var t = e.Parse, n = t._;
    t.Cloud = {run:function (e, r, i) {
        var s = i, o = n.clone(i);
        o.success = function (e) {
            var n = t._decode(null, e);
            s.success && s.success(n.result)
        }, o.error = t.Cloud._wrapError(s.error, i), t._request("functions", e, null, "POST", t._encode(r, null, !0), o)
    }, _wrapError:function (e, n) {
        return function (r) {
            if (e) {
                var i = new t.Error(-1, r.responseText);
                if (r.responseText) {
                    var s = JSON.parse(r.responseText);
                    s && (i = new t.Error(s.code, s.error))
                }
                e(i, n)
            }
        }
    }}
}(this), function (e) {
    e.Parse = e.Parse || {};
    var t = e.Parse;
    t.Installation = t.Object.extend("_Installation"), t.Push = t.Push || {}, t.Push.send = function (e, n) {
        e.where && (e.where = e.where.toJSON().where), e.push_time && (e.push_time = e.push_time.toJSON()), e.expiration_time && (e.expiration_time = e.expiration_time.toJSON());
        if (e.expiration_time && e.expiration_time_interval)throw"Both expiration_time and expiration_time_interval can't be set";
        var r = {error:n.error, success:n.success};
        r.error = t.Query._wrapError(n.error, r), t._request("push", null, null, "POST", e, r)
    }
}(this);