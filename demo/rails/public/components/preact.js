var O, p, xe, H, ae, we, Ce, $e, _e, Z, ee, U = {}, Ne = [], We = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Y = Array.isArray;
function $(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function oe(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function S(e, t, n) {
  var o, r, _, l = {};
  for (_ in t) _ == "key" ? o = t[_] : _ == "ref" ? r = t[_] : l[_] = t[_];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? O.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null) for (_ in e.defaultProps) l[_] === void 0 && (l[_] = e.defaultProps[_]);
  return D(e, l, o, r, null);
}
function D(e, t, n, o, r) {
  var _ = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: r ?? ++xe, __i: -1, __u: 0 };
  return r == null && p.vnode != null && p.vnode(_), _;
}
function z(e) {
  return e.children;
}
function R(e, t) {
  this.props = e, this.context = t;
}
function B(e, t) {
  if (t == null) return e.__ ? B(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
  return typeof e.type == "function" ? B(e) : null;
}
function Pe(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) {
      e.__e = e.__c.base = n.__e;
      break;
    }
    return Pe(e);
  }
}
function se(e) {
  (!e.__d && (e.__d = !0) && H.push(e) && !K.__r++ || ae != p.debounceRendering) && ((ae = p.debounceRendering) || we)(K);
}
function K() {
  for (var e, t, n, o, r, _, l, a = 1; H.length; ) H.length > a && H.sort(Ce), e = H.shift(), a = H.length, e.__d && (n = void 0, o = void 0, r = (o = (t = e).__v).__e, _ = [], l = [], t.__P && ((n = $({}, o)).__v = o.__v + 1, p.vnode && p.vnode(n), re(t.__P, n, o, t.__n, t.__P.namespaceURI, 32 & o.__u ? [r] : null, _, r ?? B(o), !!(32 & o.__u), l), n.__v = o.__v, n.__.__k[n.__i] = n, Ee(_, n, l), o.__e = o.__ = null, n.__e != r && Pe(n)));
  K.__r = 0;
}
function He(e, t, n, o, r, _, l, a, s, c, u) {
  var i, f, d, b, x, k, m, h = o && o.__k || Ne, N = t.length;
  for (s = Re(n, t, h, s, N), i = 0; i < N; i++) (d = n.__k[i]) != null && (f = d.__i == -1 ? U : h[d.__i] || U, d.__i = i, k = re(e, d, f, r, _, l, a, s, c, u), b = d.__e, d.ref && f.ref != d.ref && (f.ref && ie(f.ref, null, d), u.push(d.ref, d.__c || b, d)), x == null && b != null && (x = b), (m = !!(4 & d.__u)) || f.__k === d.__k ? s = Te(d, s, e, m) : typeof d.type == "function" && k !== void 0 ? s = k : b && (s = b.nextSibling), d.__u &= -7);
  return n.__e = x, s;
}
function Re(e, t, n, o, r) {
  var _, l, a, s, c, u = n.length, i = u, f = 0;
  for (e.__k = new Array(r), _ = 0; _ < r; _++) (l = t[_]) != null && typeof l != "boolean" && typeof l != "function" ? (typeof l == "string" || typeof l == "number" || typeof l == "bigint" || l.constructor == String ? l = e.__k[_] = D(null, l, null, null, null) : Y(l) ? l = e.__k[_] = D(z, { children: l }, null, null, null) : l.constructor == null && l.__b > 0 ? l = e.__k[_] = D(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : e.__k[_] = l, s = _ + f, l.__ = e, l.__b = e.__b + 1, a = null, (c = l.__i = qe(l, n, s, i)) != -1 && (i--, (a = n[c]) && (a.__u |= 2)), a == null || a.__v == null ? (c == -1 && (r > u ? f-- : r < u && f++), typeof l.type != "function" && (l.__u |= 4)) : c != s && (c == s - 1 ? f-- : c == s + 1 ? f++ : (c > s ? f-- : f++, l.__u |= 4))) : e.__k[_] = null;
  if (i) for (_ = 0; _ < u; _++) (a = n[_]) != null && (2 & a.__u) == 0 && (a.__e == o && (o = B(a)), Be(a, a));
  return o;
}
function Te(e, t, n, o) {
  var r, _;
  if (typeof e.type == "function") {
    for (r = e.__k, _ = 0; r && _ < r.length; _++) r[_] && (r[_].__ = e, t = Te(r[_], t, n, o));
    return t;
  }
  e.__e != t && (o && (t && e.type && !t.parentNode && (t = B(e)), n.insertBefore(e.__e, t || null)), t = e.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function qe(e, t, n, o) {
  var r, _, l, a = e.key, s = e.type, c = t[n], u = c != null && (2 & c.__u) == 0;
  if (c === null && a == null || u && a == c.key && s == c.type) return n;
  if (o > (u ? 1 : 0)) {
    for (r = n - 1, _ = n + 1; r >= 0 || _ < t.length; ) if ((c = t[l = r >= 0 ? r-- : _++]) != null && (2 & c.__u) == 0 && a == c.key && s == c.type) return l;
  }
  return -1;
}
function ue(e, t, n) {
  t[0] == "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || We.test(t) ? n : n + "px";
}
function W(e, t, n, o, r) {
  var _, l;
  e: if (t == "style") if (typeof n == "string") e.style.cssText = n;
  else {
    if (typeof o == "string" && (e.style.cssText = o = ""), o) for (t in o) n && t in n || ue(e.style, t, "");
    if (n) for (t in n) o && n[t] == o[t] || ue(e.style, t, n[t]);
  }
  else if (t[0] == "o" && t[1] == "n") _ = t != (t = t.replace($e, "$1")), l = t.toLowerCase(), t = l in e || t == "onFocusOut" || t == "onFocusIn" ? l.slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + _] = n, n ? o ? n.u = o.u : (n.u = _e, e.addEventListener(t, _ ? ee : Z, _)) : e.removeEventListener(t, _ ? ee : Z, _);
  else {
    if (r == "http://www.w3.org/2000/svg") t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e) try {
      e[t] = n ?? "";
      break e;
    } catch {
    }
    typeof n == "function" || (n == null || n === !1 && t[4] != "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && n == 1 ? "" : n));
  }
}
function de(e) {
  return function(t) {
    if (this.l) {
      var n = this.l[t.type + e];
      if (t.t == null) t.t = _e++;
      else if (t.t < n.u) return;
      return n(p.event ? p.event(t) : t);
    }
  };
}
function re(e, t, n, o, r, _, l, a, s, c) {
  var u, i, f, d, b, x, k, m, h, N, P, I, A, ce, j, M, J, C = t.type;
  if (t.constructor != null) return null;
  128 & n.__u && (s = !!(32 & n.__u), _ = [a = t.__e = n.__e]), (u = p.__b) && u(t);
  e: if (typeof C == "function") try {
    if (m = t.props, h = "prototype" in C && C.prototype.render, N = (u = C.contextType) && o[u.__c], P = u ? N ? N.props.value : u.__ : o, n.__c ? k = (i = t.__c = n.__c).__ = i.__E : (h ? t.__c = i = new C(m, P) : (t.__c = i = new R(m, P), i.constructor = C, i.render = Ve), N && N.sub(i), i.state || (i.state = {}), i.__n = o, f = i.__d = !0, i.__h = [], i._sb = []), h && i.__s == null && (i.__s = i.state), h && C.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = $({}, i.__s)), $(i.__s, C.getDerivedStateFromProps(m, i.__s))), d = i.props, b = i.state, i.__v = t, f) h && C.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), h && i.componentDidMount != null && i.__h.push(i.componentDidMount);
    else {
      if (h && C.getDerivedStateFromProps == null && m !== d && i.componentWillReceiveProps != null && i.componentWillReceiveProps(m, P), t.__v == n.__v || !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(m, i.__s, P) === !1) {
        for (t.__v != n.__v && (i.props = m, i.state = i.__s, i.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.some(function(T) {
          T && (T.__ = t);
        }), I = 0; I < i._sb.length; I++) i.__h.push(i._sb[I]);
        i._sb = [], i.__h.length && l.push(i);
        break e;
      }
      i.componentWillUpdate != null && i.componentWillUpdate(m, i.__s, P), h && i.componentDidUpdate != null && i.__h.push(function() {
        i.componentDidUpdate(d, b, x);
      });
    }
    if (i.context = P, i.props = m, i.__P = e, i.__e = !1, A = p.__r, ce = 0, h) {
      for (i.state = i.__s, i.__d = !1, A && A(t), u = i.render(i.props, i.state, i.context), j = 0; j < i._sb.length; j++) i.__h.push(i._sb[j]);
      i._sb = [];
    } else do
      i.__d = !1, A && A(t), u = i.render(i.props, i.state, i.context), i.state = i.__s;
    while (i.__d && ++ce < 25);
    i.state = i.__s, i.getChildContext != null && (o = $($({}, o), i.getChildContext())), h && !f && i.getSnapshotBeforeUpdate != null && (x = i.getSnapshotBeforeUpdate(d, b)), M = u, u != null && u.type === z && u.key == null && (M = Se(u.props.children)), a = He(e, Y(M) ? M : [M], t, n, o, r, _, l, a, s, c), i.base = t.__e, t.__u &= -161, i.__h.length && l.push(i), k && (i.__E = i.__ = null);
  } catch (T) {
    if (t.__v = null, s || _ != null) if (T.then) {
      for (t.__u |= s ? 160 : 128; a && a.nodeType == 8 && a.nextSibling; ) a = a.nextSibling;
      _[_.indexOf(a)] = null, t.__e = a;
    } else {
      for (J = _.length; J--; ) oe(_[J]);
      te(t);
    }
    else t.__e = n.__e, t.__k = n.__k, T.then || te(t);
    p.__e(T, t, n);
  }
  else _ == null && t.__v == n.__v ? (t.__k = n.__k, t.__e = n.__e) : a = t.__e = Ke(n.__e, t, n, o, r, _, l, s, c);
  return (u = p.diffed) && u(t), 128 & t.__u ? void 0 : a;
}
function te(e) {
  e && e.__c && (e.__c.__e = !0), e && e.__k && e.__k.forEach(te);
}
function Ee(e, t, n) {
  for (var o = 0; o < n.length; o++) ie(n[o], n[++o], n[++o]);
  p.__c && p.__c(t, e), e.some(function(r) {
    try {
      e = r.__h, r.__h = [], e.some(function(_) {
        _.call(r);
      });
    } catch (_) {
      p.__e(_, r.__v);
    }
  });
}
function Se(e) {
  return typeof e != "object" || e == null || e.__b && e.__b > 0 ? e : Y(e) ? e.map(Se) : $({}, e);
}
function Ke(e, t, n, o, r, _, l, a, s) {
  var c, u, i, f, d, b, x, k = n.props || U, m = t.props, h = t.type;
  if (h == "svg" ? r = "http://www.w3.org/2000/svg" : h == "math" ? r = "http://www.w3.org/1998/Math/MathML" : r || (r = "http://www.w3.org/1999/xhtml"), _ != null) {
    for (c = 0; c < _.length; c++) if ((d = _[c]) && "setAttribute" in d == !!h && (h ? d.localName == h : d.nodeType == 3)) {
      e = d, _[c] = null;
      break;
    }
  }
  if (e == null) {
    if (h == null) return document.createTextNode(m);
    e = document.createElementNS(r, h, m.is && m), a && (p.__m && p.__m(t, _), a = !1), _ = null;
  }
  if (h == null) k === m || a && e.data == m || (e.data = m);
  else {
    if (_ = _ && O.call(e.childNodes), !a && _ != null) for (k = {}, c = 0; c < e.attributes.length; c++) k[(d = e.attributes[c]).name] = d.value;
    for (c in k) if (d = k[c], c != "children") {
      if (c == "dangerouslySetInnerHTML") i = d;
      else if (!(c in m)) {
        if (c == "value" && "defaultValue" in m || c == "checked" && "defaultChecked" in m) continue;
        W(e, c, null, d, r);
      }
    }
    for (c in m) d = m[c], c == "children" ? f = d : c == "dangerouslySetInnerHTML" ? u = d : c == "value" ? b = d : c == "checked" ? x = d : a && typeof d != "function" || k[c] === d || W(e, c, d, k[c], r);
    if (u) a || i && (u.__html == i.__html || u.__html == e.innerHTML) || (e.innerHTML = u.__html), t.__k = [];
    else if (i && (e.innerHTML = ""), He(t.type == "template" ? e.content : e, Y(f) ? f : [f], t, n, o, h == "foreignObject" ? "http://www.w3.org/1999/xhtml" : r, _, l, _ ? _[0] : n.__k && B(n, 0), a, s), _ != null) for (c = _.length; c--; ) oe(_[c]);
    a || (c = "value", h == "progress" && b == null ? e.removeAttribute("value") : b != null && (b !== e[c] || h == "progress" && !b || h == "option" && b != k[c]) && W(e, c, b, k[c], r), c = "checked", x != null && x != e[c] && W(e, c, x, k[c], r));
  }
  return e;
}
function ie(e, t, n) {
  try {
    if (typeof e == "function") {
      var o = typeof e.__u == "function";
      o && e.__u(), o && t == null || (e.__u = e(t));
    } else e.current = t;
  } catch (r) {
    p.__e(r, n);
  }
}
function Be(e, t, n) {
  var o, r;
  if (p.unmount && p.unmount(e), (o = e.ref) && (o.current && o.current != e.__e || ie(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount) try {
      o.componentWillUnmount();
    } catch (_) {
      p.__e(_, t);
    }
    o.base = o.__P = null;
  }
  if (o = e.__k) for (r = 0; r < o.length; r++) o[r] && Be(o[r], t, n || typeof e.type != "function");
  n || oe(e.__e), e.__c = e.__ = e.__e = void 0;
}
function Ve(e, t, n) {
  return this.constructor(e, n);
}
function G(e, t, n) {
  var o, r, _, l;
  t == document && (t = document.documentElement), p.__ && p.__(e, t), r = (o = typeof n == "function") ? null : n && n.__k || t.__k, _ = [], l = [], re(t, e = (!o && n || t).__k = S(z, null, [e]), r || U, U, t.namespaceURI, !o && n ? [n] : r ? null : t.firstChild ? O.call(t.childNodes) : null, _, !o && n ? n : r ? r.__e : t.firstChild, o, l), Ee(_, e, l);
}
function Ae(e, t) {
  G(e, t, Ae);
}
function Me(e, t, n) {
  var o, r, _, l, a = $({}, e.props);
  for (_ in e.type && e.type.defaultProps && (l = e.type.defaultProps), t) _ == "key" ? o = t[_] : _ == "ref" ? r = t[_] : a[_] = t[_] === void 0 && l != null ? l[_] : t[_];
  return arguments.length > 2 && (a.children = arguments.length > 3 ? O.call(arguments, 2) : n), D(e.type, a, o || e.key, r || e.ref, null);
}
O = Ne.slice, p = { __e: function(e, t, n, o) {
  for (var r, _, l; t = t.__; ) if ((r = t.__c) && !r.__) try {
    if ((_ = r.constructor) && _.getDerivedStateFromError != null && (r.setState(_.getDerivedStateFromError(e)), l = r.__d), r.componentDidCatch != null && (r.componentDidCatch(e, o || {}), l = r.__d), l) return r.__E = r;
  } catch (a) {
    e = a;
  }
  throw e;
} }, xe = 0, R.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s != this.state ? this.__s : this.__s = $({}, this.state), typeof e == "function" && (e = e($({}, n), this.props)), e && $(n, e), e != null && this.__v && (t && this._sb.push(t), se(this));
}, R.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), se(this));
}, R.prototype.render = z, H = [], we = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Ce = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, K.__r = 0, $e = /(PointerCapture)$|Capture$/i, _e = 0, Z = de(!1), ee = de(!0);
var Xe = 0;
function v(e, t, n, o, r, _) {
  t || (t = {});
  var l, a, s = t;
  if ("ref" in s) for (a in s = {}, t) a == "ref" ? l = t[a] : s[a] = t[a];
  var c = { type: e, props: s, key: n, ref: l, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Xe, __i: -1, __u: 0, __source: r, __self: _ };
  if (typeof e == "function" && (l = e.defaultProps)) for (a in l) s[a] === void 0 && (s[a] = l[a]);
  return p.vnode && p.vnode(c), c;
}
var F, g, Q, fe, V = 0, De = [], y = p, pe = y.__b, he = y.__r, me = y.diffed, ve = y.__c, ge = y.unmount, ye = y.__;
function le(e, t) {
  y.__h && y.__h(g, e, V || t), V = 0;
  var n = g.__H || (g.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function Le(e) {
  return V = 1, Ye(Fe, e);
}
function Ye(e, t, n) {
  var o = le(F++, 2);
  if (o.t = e, !o.__c && (o.__ = [Fe(void 0, t), function(a) {
    var s = o.__N ? o.__N[0] : o.__[0], c = o.t(s, a);
    s !== c && (o.__N = [c, o.__[1]], o.__c.setState({}));
  }], o.__c = g, !g.__f)) {
    var r = function(a, s, c) {
      if (!o.__c.__H) return !0;
      var u = o.__c.__H.__.filter(function(f) {
        return !!f.__c;
      });
      if (u.every(function(f) {
        return !f.__N;
      })) return !_ || _.call(this, a, s, c);
      var i = o.__c.props !== a;
      return u.forEach(function(f) {
        if (f.__N) {
          var d = f.__[0];
          f.__ = f.__N, f.__N = void 0, d !== f.__[0] && (i = !0);
        }
      }), _ && _.call(this, a, s, c) || i;
    };
    g.__f = !0;
    var _ = g.shouldComponentUpdate, l = g.componentWillUpdate;
    g.componentWillUpdate = function(a, s, c) {
      if (this.__e) {
        var u = _;
        _ = void 0, r(a, s, c), _ = u;
      }
      l && l.call(this, a, s, c);
    }, g.shouldComponentUpdate = r;
  }
  return o.__N || o.__;
}
function L(e, t) {
  var n = le(F++, 3);
  !y.__s && Ue(n.__H, t) && (n.__ = e, n.u = t, g.__H.__h.push(n));
}
function Ge(e) {
  return V = 5, Je(function() {
    return { current: e };
  }, []);
}
function Je(e, t) {
  var n = le(F++, 7);
  return Ue(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function Qe() {
  for (var e; e = De.shift(); ) if (e.__P && e.__H) try {
    e.__H.__h.forEach(q), e.__H.__h.forEach(ne), e.__H.__h = [];
  } catch (t) {
    e.__H.__h = [], y.__e(t, e.__v);
  }
}
y.__b = function(e) {
  g = null, pe && pe(e);
}, y.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), ye && ye(e, t);
}, y.__r = function(e) {
  he && he(e), F = 0;
  var t = (g = e.__c).__H;
  t && (Q === g ? (t.__h = [], g.__h = [], t.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
  })) : (t.__h.forEach(q), t.__h.forEach(ne), t.__h = [], F = 0)), Q = g;
}, y.diffed = function(e) {
  me && me(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (De.push(t) !== 1 && fe === y.requestAnimationFrame || ((fe = y.requestAnimationFrame) || Ze)(Qe)), t.__H.__.forEach(function(n) {
    n.u && (n.__H = n.u), n.u = void 0;
  })), Q = g = null;
}, y.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(q), n.__h = n.__h.filter(function(o) {
        return !o.__ || ne(o);
      });
    } catch (o) {
      t.some(function(r) {
        r.__h && (r.__h = []);
      }), t = [], y.__e(o, n.__v);
    }
  }), ve && ve(e, t);
}, y.unmount = function(e) {
  ge && ge(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(o) {
    try {
      q(o);
    } catch (r) {
      t = r;
    }
  }), n.__H = void 0, t && y.__e(t, n.__v));
};
var be = typeof requestAnimationFrame == "function";
function Ze(e) {
  var t, n = function() {
    clearTimeout(o), be && cancelAnimationFrame(t), setTimeout(e);
  }, o = setTimeout(n, 35);
  be && (t = requestAnimationFrame(n));
}
function q(e) {
  var t = g, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), g = t;
}
function ne(e) {
  var t = g;
  e.__c = e.__(), g = t;
}
function Ue(e, t) {
  return !e || e.length !== t.length || t.some(function(n, o) {
    return n !== e[o];
  });
}
function Fe(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function X() {
  return X = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, X.apply(this, arguments);
}
function Oe(e, t) {
  if (e == null) return {};
  var n, o, r = {}, _ = Object.keys(e);
  for (o = 0; o < _.length; o++) t.indexOf(n = _[o]) >= 0 || (r[n] = e[n]);
  return r;
}
var et = ["context", "children"], tt = ["useFragment"];
function ze(e, t, n, o) {
  function r() {
    var _, l = Reflect.construct(HTMLElement, [], r);
    return l._vdomComponent = e, o && o.shadow ? (l._root = l.attachShadow({ mode: o.mode || "open", serializable: (_ = o.serializable) != null && _ }), o.adoptedStyleSheets && (l._root.adoptedStyleSheets = o.adoptedStyleSheets)) : l._root = l, l;
  }
  return (r.prototype = Object.create(HTMLElement.prototype)).constructor = r, r.prototype.connectedCallback = function() {
    _t.call(this, o);
  }, r.prototype.attributeChangedCallback = ot, r.prototype.disconnectedCallback = rt, n = n || e.observedAttributes || Object.keys(e.propTypes || {}), r.observedAttributes = n, e.formAssociated && (r.formAssociated = !0), n.forEach(function(_) {
    Object.defineProperty(r.prototype, _, { get: function() {
      return this._vdom ? this._vdom.props[_] : this._props[_];
    }, set: function(l) {
      this._vdom ? this.attributeChangedCallback(_, null, l) : (this._props || (this._props = {}), this._props[_] = l);
      var a = typeof l;
      l != null && a !== "string" && a !== "boolean" && a !== "number" || this.setAttribute(_, l);
    } });
  }), customElements.define(t || e.tagName || e.displayName || e.name, r), r;
}
function nt(e) {
  this.getChildContext = function() {
    return e.context;
  };
  var t = e.children, n = Oe(e, et);
  return Me(t, n);
}
function _t(e) {
  var t = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
  this.dispatchEvent(t), this._vdom = S(nt, X({}, this._props, { context: t.detail.context }), je(this, this._vdomComponent, e)), (this.hasAttribute("hydrate") ? Ae : G)(this._vdom, this._root);
}
function Ie(e) {
  return e.replace(/-(\w)/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  });
}
function ot(e, t, n) {
  if (this._vdom) {
    var o = {};
    o[e] = n = n ?? void 0, o[Ie(e)] = n, this._vdom = Me(this._vdom, o), G(this._vdom, this._root);
  }
}
function rt() {
  G(this._vdom = null, this._root);
}
function ke(e, t) {
  var n = this, o = e.useFragment, r = Oe(e, tt);
  return S(o ? z : "slot", X({}, r, { ref: function(_) {
    _ ? (n.ref = _, n._listener || (n._listener = function(l) {
      l.stopPropagation(), l.detail.context = t;
    }, _.addEventListener("_preact", n._listener))) : n.ref.removeEventListener("_preact", n._listener);
  } }));
}
function je(e, t, n) {
  if (e.nodeType === 3) return e.data;
  if (e.nodeType !== 1) return null;
  var o = [], r = {}, _ = 0, l = e.attributes, a = e.childNodes;
  for (_ = l.length; _--; ) l[_].name !== "slot" && (r[l[_].name] = l[_].value, r[Ie(l[_].name)] = l[_].value);
  for (_ = a.length; _--; ) {
    var s = je(a[_], null, n), c = a[_].slot;
    c ? r[c] = S(ke, { name: c }, s) : o[_] = s;
  }
  var u = !(!n || !n.shadow), i = t ? S(ke, { useFragment: !u }, o) : o;
  return !u && t && (e.innerHTML = ""), S(t || e.nodeName.toLowerCase(), r, i);
}
const it = "_container_1ci1x_1", lt = "_counter_1ci1x_12", ct = "_label_1ci1x_18", at = "_button_1ci1x_25", st = "_count_1ci1x_12", E = {
  container: it,
  counter: lt,
  label: ct,
  button: at,
  count: st
}, ut = "._container_1ci1x_1{display:flex;flex-direction:column;align-items:center;padding:1rem;border:2px solid #673ab8;border-radius:8px;background-color:#f9f9f9;font-family:system-ui,-apple-system,sans-serif}._counter_1ci1x_12{display:flex;align-items:center;gap:1rem}._label_1ci1x_18{font-size:1rem;font-weight:600;color:#333;margin-bottom:.5rem}._button_1ci1x_25{width:40px;height:40px;font-size:1.5rem;border:2px solid #673ab8;background-color:#673ab8;color:#fff;border-radius:4px;cursor:pointer;transition:background-color .2s}._button_1ci1x_25:hover{background-color:#5829a0}._button_1ci1x_25:active{background-color:#4a1f88}._count_1ci1x_12{font-size:2rem;font-weight:700;color:#673ab8;min-width:3rem;text-align:center}";
function dt({ count: e = 0 }) {
  const [t, n] = Le(Number(e));
  return L(() => {
    n(Number(e));
  }, [e]), L(() => {
    const o = "preact-counter-styles";
    if (!document.getElementById(o)) {
      const r = document.createElement("style");
      r.id = o, r.textContent = ut, document.head.appendChild(r);
    }
  }, []), /* @__PURE__ */ v("div", { className: E.container, children: /* @__PURE__ */ v("div", { className: E.counter, children: [
    /* @__PURE__ */ v("div", { className: E.label, children: "Preact Counter:" }),
    /* @__PURE__ */ v("button", { type: "button", className: E.button, onClick: () => n(t - 1), children: "-" }),
    /* @__PURE__ */ v("span", { className: E.count, children: t }),
    /* @__PURE__ */ v("button", { type: "button", className: E.button, onClick: () => n(t + 1), children: "+" })
  ] }) });
}
ze(dt, "preact-counter", ["count"], { shadow: !1 });
const ft = "_container_1uv2i_2", pt = "_openButton_1uv2i_7", ht = "_dialog_1uv2i_29", mt = "_modalPanel_1uv2i_65", vt = "_modalHeader_1uv2i_71", gt = "_modalTitle_1uv2i_75", yt = "_modalBody_1uv2i_83", bt = "_modalDescription_1uv2i_87", kt = "_modalContent_1uv2i_93", xt = "_modalActions_1uv2i_115", wt = "_closeButton_1uv2i_122", w = {
  container: ft,
  openButton: pt,
  dialog: ht,
  modalPanel: mt,
  modalHeader: vt,
  modalTitle: gt,
  modalBody: yt,
  modalDescription: bt,
  modalContent: kt,
  modalActions: xt,
  closeButton: wt
}, Ct = "._container_1uv2i_2{display:inline-block}._openButton_1uv2i_7{padding:.75rem 1.5rem;background-color:#8b5cf6;color:#fff;border:none;border-radius:8px;font-size:1rem;font-weight:500;cursor:pointer;transition:background-color .2s}._openButton_1uv2i_7:hover{background-color:#7c3aed}._openButton_1uv2i_7:focus{outline:2px solid #8b5cf6;outline-offset:2px}._dialog_1uv2i_29{border:none;border-radius:12px;padding:0;max-width:28rem;box-shadow:0 20px 25px -5px #0000001a,0 10px 10px -5px #0000000a;animation:_slideIn_1uv2i_1 .3s cubic-bezier(.4,0,.2,1)}._dialog_1uv2i_29::backdrop{background-color:#00000080;animation:_fadeIn_1uv2i_1 .3s cubic-bezier(.4,0,.2,1)}@keyframes _slideIn_1uv2i_1{0%{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}@keyframes _fadeIn_1uv2i_1{0%{opacity:0}to{opacity:1}}._modalPanel_1uv2i_65{padding:1.5rem;background-color:#fff}._modalHeader_1uv2i_71{margin-bottom:1rem}._modalTitle_1uv2i_75{font-size:1.5rem;font-weight:700;color:#111827;margin:0}._modalBody_1uv2i_83{margin-top:.5rem}._modalDescription_1uv2i_87{font-size:.875rem;color:#6b7280;margin-bottom:1rem}._modalContent_1uv2i_93{margin-top:1rem}._modalContent_1uv2i_93 p{margin:0 0 .75rem;color:#374151;line-height:1.6}._modalContent_1uv2i_93 ul{margin:0;padding-left:1.5rem;color:#374151;line-height:1.8}._modalContent_1uv2i_93 li{margin-bottom:.25rem}._modalActions_1uv2i_115{margin-top:1.5rem;display:flex;gap:.75rem;justify-content:flex-end}._closeButton_1uv2i_122{padding:.625rem 1.25rem;background-color:#8b5cf6;color:#fff;border:none;border-radius:6px;font-size:.875rem;font-weight:500;cursor:pointer;transition:background-color .2s}._closeButton_1uv2i_122:hover{background-color:#7c3aed}._closeButton_1uv2i_122:focus{outline:2px solid #8b5cf6;outline-offset:2px}@media(max-width:640px){._dialog_1uv2i_29{max-width:90vw}._modalPanel_1uv2i_65{padding:1.25rem}._modalTitle_1uv2i_75{font-size:1.25rem}}";
function $t({
  isOpen: e = !1,
  title: t = "Preact Modal",
  description: n = "This is a modal dialog built with Preact and native HTML <dialog> element."
}) {
  const [o, r] = Le(e), _ = Ge(null);
  L(() => {
    r(e);
  }, [e]), L(() => {
    const c = "preact-modal-styles";
    if (!document.getElementById(c)) {
      const u = document.createElement("style");
      u.id = c, u.textContent = Ct, document.head.appendChild(u);
    }
  }, []), L(() => {
    _.current && (o ? _.current.showModal() : _.current.close());
  }, [o]);
  function l() {
    r(!0);
  }
  function a() {
    r(!1);
  }
  function s(c) {
    const i = c.target.getBoundingClientRect();
    (c.clientX < i.left || c.clientX > i.right || c.clientY < i.top || c.clientY > i.bottom) && a();
  }
  return /* @__PURE__ */ v("div", { className: w.container, children: [
    /* @__PURE__ */ v(
      "button",
      {
        type: "button",
        onClick: l,
        className: w.openButton,
        children: "Open Preact Modal"
      }
    ),
    /* @__PURE__ */ v(
      "dialog",
      {
        ref: _,
        onClose: a,
        onClick: s,
        className: w.dialog,
        children: /* @__PURE__ */ v("div", { className: w.modalPanel, children: [
          /* @__PURE__ */ v("div", { className: w.modalHeader, children: /* @__PURE__ */ v("h3", { className: w.modalTitle, children: t }) }),
          /* @__PURE__ */ v("div", { className: w.modalBody, children: [
            /* @__PURE__ */ v("p", { className: w.modalDescription, children: n }),
            /* @__PURE__ */ v("div", { className: w.modalContent, children: [
              /* @__PURE__ */ v("p", { children: "This modal demonstrates Preact + native <dialog> integration:" }),
              /* @__PURE__ */ v("ul", { children: [
                /* @__PURE__ */ v("li", { children: "✅ Preact lightweight (3KB)" }),
                /* @__PURE__ */ v("li", { children: "✅ Native <dialog> accessibility" }),
                /* @__PURE__ */ v("li", { children: "✅ Automatic focus trap" }),
                /* @__PURE__ */ v("li", { children: "✅ ESC key to close (native)" }),
                /* @__PURE__ */ v("li", { children: "✅ Click outside to close" }),
                /* @__PURE__ */ v("li", { children: "✅ ::backdrop pseudo-element" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ v("div", { className: w.modalActions, children: /* @__PURE__ */ v(
            "button",
            {
              type: "button",
              className: w.closeButton,
              onClick: a,
              children: "Close"
            }
          ) })
        ] })
      }
    )
  ] });
}
ze($t, "preact-modal", ["isOpen", "title", "description"], { shadow: !1 });
export {
  dt as PreactCounter,
  $t as PreactModal
};
