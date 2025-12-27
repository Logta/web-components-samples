var M, h, ge, E, ie, ke, xe, we, te, Q, X, L = {}, $e = [], je = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, V = Array.isArray;
function w(e, t) {
  for (var _ in t) e[_] = t[_];
  return e;
}
function _e(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function H(e, t, _) {
  var r, o, n, l = {};
  for (n in t) n == "key" ? r = t[n] : n == "ref" ? o = t[n] : l[n] = t[n];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? M.call(arguments, 2) : _), typeof e == "function" && e.defaultProps != null) for (n in e.defaultProps) l[n] === void 0 && (l[n] = e.defaultProps[n]);
  return F(e, l, r, o, null);
}
function F(e, t, _, r, o) {
  var n = { type: e, props: t, key: _, ref: r, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++ge, __i: -1, __u: 0 };
  return o == null && h.vnode != null && h.vnode(n), n;
}
function D(e) {
  return e.children;
}
function I(e, t) {
  this.props = e, this.context = t;
}
function T(e, t) {
  if (t == null) return e.__ ? T(e.__, e.__i + 1) : null;
  for (var _; t < e.__k.length; t++) if ((_ = e.__k[t]) != null && _.__e != null) return _.__e;
  return typeof e.type == "function" ? T(e) : null;
}
function Ce(e) {
  var t, _;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++) if ((_ = e.__k[t]) != null && _.__e != null) {
      e.__e = e.__c.base = _.__e;
      break;
    }
    return Ce(e);
  }
}
function le(e) {
  (!e.__d && (e.__d = !0) && E.push(e) && !R.__r++ || ie != h.debounceRendering) && ((ie = h.debounceRendering) || ke)(R);
}
function R() {
  for (var e, t, _, r, o, n, l, u = 1; E.length; ) E.length > u && E.sort(xe), e = E.shift(), u = E.length, e.__d && (_ = void 0, r = void 0, o = (r = (t = e).__v).__e, n = [], l = [], t.__P && ((_ = w({}, r)).__v = r.__v + 1, h.vnode && h.vnode(_), ne(t.__P, _, r, t.__n, t.__P.namespaceURI, 32 & r.__u ? [o] : null, n, o ?? T(r), !!(32 & r.__u), l), _.__v = r.__v, _.__.__k[_.__i] = _, Pe(n, _, l), r.__e = r.__ = null, _.__e != o && Ce(_)));
  R.__r = 0;
}
function Ee(e, t, _, r, o, n, l, u, s, c, f) {
  var i, p, a, b, k, g, m, d = r && r.__k || $e, $ = t.length;
  for (s = We(_, t, d, s, $), i = 0; i < $; i++) (a = _.__k[i]) != null && (p = a.__i == -1 ? L : d[a.__i] || L, a.__i = i, g = ne(e, a, p, o, n, l, u, s, c, f), b = a.__e, a.ref && p.ref != a.ref && (p.ref && re(p.ref, null, a), f.push(a.ref, a.__c || b, a)), k == null && b != null && (k = b), (m = !!(4 & a.__u)) || p.__k === a.__k ? s = Ne(a, s, e, m) : typeof a.type == "function" && g !== void 0 ? s = g : b && (s = b.nextSibling), a.__u &= -7);
  return _.__e = k, s;
}
function We(e, t, _, r, o) {
  var n, l, u, s, c, f = _.length, i = f, p = 0;
  for (e.__k = new Array(o), n = 0; n < o; n++) (l = t[n]) != null && typeof l != "boolean" && typeof l != "function" ? (typeof l == "string" || typeof l == "number" || typeof l == "bigint" || l.constructor == String ? l = e.__k[n] = F(null, l, null, null, null) : V(l) ? l = e.__k[n] = F(D, { children: l }, null, null, null) : l.constructor == null && l.__b > 0 ? l = e.__k[n] = F(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : e.__k[n] = l, s = n + p, l.__ = e, l.__b = e.__b + 1, u = null, (c = l.__i = Ie(l, _, s, i)) != -1 && (i--, (u = _[c]) && (u.__u |= 2)), u == null || u.__v == null ? (c == -1 && (o > f ? p-- : o < f && p++), typeof l.type != "function" && (l.__u |= 4)) : c != s && (c == s - 1 ? p-- : c == s + 1 ? p++ : (c > s ? p-- : p++, l.__u |= 4))) : e.__k[n] = null;
  if (i) for (n = 0; n < f; n++) (u = _[n]) != null && (2 & u.__u) == 0 && (u.__e == r && (r = T(u)), He(u, u));
  return r;
}
function Ne(e, t, _, r) {
  var o, n;
  if (typeof e.type == "function") {
    for (o = e.__k, n = 0; o && n < o.length; n++) o[n] && (o[n].__ = e, t = Ne(o[n], t, _, r));
    return t;
  }
  e.__e != t && (r && (t && e.type && !t.parentNode && (t = T(e)), _.insertBefore(e.__e, t || null)), t = e.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function Ie(e, t, _, r) {
  var o, n, l, u = e.key, s = e.type, c = t[_], f = c != null && (2 & c.__u) == 0;
  if (c === null && u == null || f && u == c.key && s == c.type) return _;
  if (r > (f ? 1 : 0)) {
    for (o = _ - 1, n = _ + 1; o >= 0 || n < t.length; ) if ((c = t[l = o >= 0 ? o-- : n++]) != null && (2 & c.__u) == 0 && u == c.key && s == c.type) return l;
  }
  return -1;
}
function ce(e, t, _) {
  t[0] == "-" ? e.setProperty(t, _ ?? "") : e[t] = _ == null ? "" : typeof _ != "number" || je.test(t) ? _ : _ + "px";
}
function W(e, t, _, r, o) {
  var n, l;
  e: if (t == "style") if (typeof _ == "string") e.style.cssText = _;
  else {
    if (typeof r == "string" && (e.style.cssText = r = ""), r) for (t in r) _ && t in _ || ce(e.style, t, "");
    if (_) for (t in _) r && _[t] == r[t] || ce(e.style, t, _[t]);
  }
  else if (t[0] == "o" && t[1] == "n") n = t != (t = t.replace(we, "$1")), l = t.toLowerCase(), t = l in e || t == "onFocusOut" || t == "onFocusIn" ? l.slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + n] = _, _ ? r ? _.u = r.u : (_.u = te, e.addEventListener(t, n ? X : Q, n)) : e.removeEventListener(t, n ? X : Q, n);
  else {
    if (o == "http://www.w3.org/2000/svg") t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e) try {
      e[t] = _ ?? "";
      break e;
    } catch {
    }
    typeof _ == "function" || (_ == null || _ === !1 && t[4] != "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && _ == 1 ? "" : _));
  }
}
function ue(e) {
  return function(t) {
    if (this.l) {
      var _ = this.l[t.type + e];
      if (t.t == null) t.t = te++;
      else if (t.t < _.u) return;
      return _(h.event ? h.event(t) : t);
    }
  };
}
function ne(e, t, _, r, o, n, l, u, s, c) {
  var f, i, p, a, b, k, g, m, d, $, C, O, A, oe, j, U, J, x = t.type;
  if (t.constructor != null) return null;
  128 & _.__u && (s = !!(32 & _.__u), n = [u = t.__e = _.__e]), (f = h.__b) && f(t);
  e: if (typeof x == "function") try {
    if (m = t.props, d = "prototype" in x && x.prototype.render, $ = (f = x.contextType) && r[f.__c], C = f ? $ ? $.props.value : f.__ : r, _.__c ? g = (i = t.__c = _.__c).__ = i.__E : (d ? t.__c = i = new x(m, C) : (t.__c = i = new I(m, C), i.constructor = x, i.render = Re), $ && $.sub(i), i.state || (i.state = {}), i.__n = r, p = i.__d = !0, i.__h = [], i._sb = []), d && i.__s == null && (i.__s = i.state), d && x.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = w({}, i.__s)), w(i.__s, x.getDerivedStateFromProps(m, i.__s))), a = i.props, b = i.state, i.__v = t, p) d && x.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), d && i.componentDidMount != null && i.__h.push(i.componentDidMount);
    else {
      if (d && x.getDerivedStateFromProps == null && m !== a && i.componentWillReceiveProps != null && i.componentWillReceiveProps(m, C), t.__v == _.__v || !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(m, i.__s, C) === !1) {
        for (t.__v != _.__v && (i.props = m, i.state = i.__s, i.__d = !1), t.__e = _.__e, t.__k = _.__k, t.__k.some(function(N) {
          N && (N.__ = t);
        }), O = 0; O < i._sb.length; O++) i.__h.push(i._sb[O]);
        i._sb = [], i.__h.length && l.push(i);
        break e;
      }
      i.componentWillUpdate != null && i.componentWillUpdate(m, i.__s, C), d && i.componentDidUpdate != null && i.__h.push(function() {
        i.componentDidUpdate(a, b, k);
      });
    }
    if (i.context = C, i.props = m, i.__P = e, i.__e = !1, A = h.__r, oe = 0, d) {
      for (i.state = i.__s, i.__d = !1, A && A(t), f = i.render(i.props, i.state, i.context), j = 0; j < i._sb.length; j++) i.__h.push(i._sb[j]);
      i._sb = [];
    } else do
      i.__d = !1, A && A(t), f = i.render(i.props, i.state, i.context), i.state = i.__s;
    while (i.__d && ++oe < 25);
    i.state = i.__s, i.getChildContext != null && (r = w(w({}, r), i.getChildContext())), d && !p && i.getSnapshotBeforeUpdate != null && (k = i.getSnapshotBeforeUpdate(a, b)), U = f, f != null && f.type === D && f.key == null && (U = Se(f.props.children)), u = Ee(e, V(U) ? U : [U], t, _, r, o, n, l, u, s, c), i.base = t.__e, t.__u &= -161, i.__h.length && l.push(i), g && (i.__E = i.__ = null);
  } catch (N) {
    if (t.__v = null, s || n != null) if (N.then) {
      for (t.__u |= s ? 160 : 128; u && u.nodeType == 8 && u.nextSibling; ) u = u.nextSibling;
      n[n.indexOf(u)] = null, t.__e = u;
    } else {
      for (J = n.length; J--; ) _e(n[J]);
      Y(t);
    }
    else t.__e = _.__e, t.__k = _.__k, N.then || Y(t);
    h.__e(N, t, _);
  }
  else n == null && t.__v == _.__v ? (t.__k = _.__k, t.__e = _.__e) : u = t.__e = ze(_.__e, t, _, r, o, n, l, s, c);
  return (f = h.diffed) && f(t), 128 & t.__u ? void 0 : u;
}
function Y(e) {
  e && e.__c && (e.__c.__e = !0), e && e.__k && e.__k.forEach(Y);
}
function Pe(e, t, _) {
  for (var r = 0; r < _.length; r++) re(_[r], _[++r], _[++r]);
  h.__c && h.__c(t, e), e.some(function(o) {
    try {
      e = o.__h, o.__h = [], e.some(function(n) {
        n.call(o);
      });
    } catch (n) {
      h.__e(n, o.__v);
    }
  });
}
function Se(e) {
  return typeof e != "object" || e == null || e.__b && e.__b > 0 ? e : V(e) ? e.map(Se) : w({}, e);
}
function ze(e, t, _, r, o, n, l, u, s) {
  var c, f, i, p, a, b, k, g = _.props || L, m = t.props, d = t.type;
  if (d == "svg" ? o = "http://www.w3.org/2000/svg" : d == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), n != null) {
    for (c = 0; c < n.length; c++) if ((a = n[c]) && "setAttribute" in a == !!d && (d ? a.localName == d : a.nodeType == 3)) {
      e = a, n[c] = null;
      break;
    }
  }
  if (e == null) {
    if (d == null) return document.createTextNode(m);
    e = document.createElementNS(o, d, m.is && m), u && (h.__m && h.__m(t, n), u = !1), n = null;
  }
  if (d == null) g === m || u && e.data == m || (e.data = m);
  else {
    if (n = n && M.call(e.childNodes), !u && n != null) for (g = {}, c = 0; c < e.attributes.length; c++) g[(a = e.attributes[c]).name] = a.value;
    for (c in g) if (a = g[c], c != "children") {
      if (c == "dangerouslySetInnerHTML") i = a;
      else if (!(c in m)) {
        if (c == "value" && "defaultValue" in m || c == "checked" && "defaultChecked" in m) continue;
        W(e, c, null, a, o);
      }
    }
    for (c in m) a = m[c], c == "children" ? p = a : c == "dangerouslySetInnerHTML" ? f = a : c == "value" ? b = a : c == "checked" ? k = a : u && typeof a != "function" || g[c] === a || W(e, c, a, g[c], o);
    if (f) u || i && (f.__html == i.__html || f.__html == e.innerHTML) || (e.innerHTML = f.__html), t.__k = [];
    else if (i && (e.innerHTML = ""), Ee(t.type == "template" ? e.content : e, V(p) ? p : [p], t, _, r, d == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, n, l, n ? n[0] : _.__k && T(_, 0), u, s), n != null) for (c = n.length; c--; ) _e(n[c]);
    u || (c = "value", d == "progress" && b == null ? e.removeAttribute("value") : b != null && (b !== e[c] || d == "progress" && !b || d == "option" && b != g[c]) && W(e, c, b, g[c], o), c = "checked", k != null && k != e[c] && W(e, c, k, g[c], o));
  }
  return e;
}
function re(e, t, _) {
  try {
    if (typeof e == "function") {
      var r = typeof e.__u == "function";
      r && e.__u(), r && t == null || (e.__u = e(t));
    } else e.current = t;
  } catch (o) {
    h.__e(o, _);
  }
}
function He(e, t, _) {
  var r, o;
  if (h.unmount && h.unmount(e), (r = e.ref) && (r.current && r.current != e.__e || re(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount) try {
      r.componentWillUnmount();
    } catch (n) {
      h.__e(n, t);
    }
    r.base = r.__P = null;
  }
  if (r = e.__k) for (o = 0; o < r.length; o++) r[o] && He(r[o], t, _ || typeof e.type != "function");
  _ || _e(e.__e), e.__c = e.__ = e.__e = void 0;
}
function Re(e, t, _) {
  return this.constructor(e, _);
}
function G(e, t, _) {
  var r, o, n, l;
  t == document && (t = document.documentElement), h.__ && h.__(e, t), o = (r = typeof _ == "function") ? null : _ && _.__k || t.__k, n = [], l = [], ne(t, e = (!r && _ || t).__k = H(D, null, [e]), o || L, L, t.namespaceURI, !r && _ ? [_] : o ? null : t.firstChild ? M.call(t.childNodes) : null, n, !r && _ ? _ : o ? o.__e : t.firstChild, r, l), Pe(n, e, l);
}
function Te(e, t) {
  G(e, t, Te);
}
function Ae(e, t, _) {
  var r, o, n, l, u = w({}, e.props);
  for (n in e.type && e.type.defaultProps && (l = e.type.defaultProps), t) n == "key" ? r = t[n] : n == "ref" ? o = t[n] : u[n] = t[n] === void 0 && l != null ? l[n] : t[n];
  return arguments.length > 2 && (u.children = arguments.length > 3 ? M.call(arguments, 2) : _), F(e.type, u, r || e.key, o || e.ref, null);
}
M = $e.slice, h = { __e: function(e, t, _, r) {
  for (var o, n, l; t = t.__; ) if ((o = t.__c) && !o.__) try {
    if ((n = o.constructor) && n.getDerivedStateFromError != null && (o.setState(n.getDerivedStateFromError(e)), l = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, r || {}), l = o.__d), l) return o.__E = o;
  } catch (u) {
    e = u;
  }
  throw e;
} }, ge = 0, I.prototype.setState = function(e, t) {
  var _;
  _ = this.__s != null && this.__s != this.state ? this.__s : this.__s = w({}, this.state), typeof e == "function" && (e = e(w({}, _), this.props)), e && w(_, e), e != null && this.__v && (t && this._sb.push(t), le(this));
}, I.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), le(this));
}, I.prototype.render = D, E = [], ke = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, xe = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, R.__r = 0, we = /(PointerCapture)$|Capture$/i, te = 0, Q = ue(!1), X = ue(!0);
var Be = 0;
function P(e, t, _, r, o, n) {
  t || (t = {});
  var l, u, s = t;
  if ("ref" in s) for (u in s = {}, t) u == "ref" ? l = t[u] : s[u] = t[u];
  var c = { type: e, props: s, key: _, ref: l, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Be, __i: -1, __u: 0, __source: o, __self: n };
  if (typeof e == "function" && (l = e.defaultProps)) for (u in l) s[u] === void 0 && (s[u] = l[u]);
  return h.vnode && h.vnode(c), c;
}
var B, v, K, se, Z = 0, Ue = [], y = h, ae = y.__b, fe = y.__r, pe = y.diffed, he = y.__c, de = y.unmount, me = y.__;
function Fe(e, t) {
  y.__h && y.__h(v, e, Z || t), Z = 0;
  var _ = v.__H || (v.__H = { __: [], __h: [] });
  return e >= _.__.length && _.__.push({}), _.__[e];
}
function qe(e) {
  return Z = 1, Ve(Le, e);
}
function Ve(e, t, _) {
  var r = Fe(B++, 2);
  if (r.t = e, !r.__c && (r.__ = [Le(void 0, t), function(u) {
    var s = r.__N ? r.__N[0] : r.__[0], c = r.t(s, u);
    s !== c && (r.__N = [c, r.__[1]], r.__c.setState({}));
  }], r.__c = v, !v.__f)) {
    var o = function(u, s, c) {
      if (!r.__c.__H) return !0;
      var f = r.__c.__H.__.filter(function(p) {
        return !!p.__c;
      });
      if (f.every(function(p) {
        return !p.__N;
      })) return !n || n.call(this, u, s, c);
      var i = r.__c.props !== u;
      return f.forEach(function(p) {
        if (p.__N) {
          var a = p.__[0];
          p.__ = p.__N, p.__N = void 0, a !== p.__[0] && (i = !0);
        }
      }), n && n.call(this, u, s, c) || i;
    };
    v.__f = !0;
    var n = v.shouldComponentUpdate, l = v.componentWillUpdate;
    v.componentWillUpdate = function(u, s, c) {
      if (this.__e) {
        var f = n;
        n = void 0, o(u, s, c), n = f;
      }
      l && l.call(this, u, s, c);
    }, v.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function ve(e, t) {
  var _ = Fe(B++, 3);
  !y.__s && Ke(_.__H, t) && (_.__ = e, _.u = t, v.__H.__h.push(_));
}
function Ge() {
  for (var e; e = Ue.shift(); ) if (e.__P && e.__H) try {
    e.__H.__h.forEach(z), e.__H.__h.forEach(ee), e.__H.__h = [];
  } catch (t) {
    e.__H.__h = [], y.__e(t, e.__v);
  }
}
y.__b = function(e) {
  v = null, ae && ae(e);
}, y.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), me && me(e, t);
}, y.__r = function(e) {
  fe && fe(e), B = 0;
  var t = (v = e.__c).__H;
  t && (K === v ? (t.__h = [], v.__h = [], t.__.forEach(function(_) {
    _.__N && (_.__ = _.__N), _.u = _.__N = void 0;
  })) : (t.__h.forEach(z), t.__h.forEach(ee), t.__h = [], B = 0)), K = v;
}, y.diffed = function(e) {
  pe && pe(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (Ue.push(t) !== 1 && se === y.requestAnimationFrame || ((se = y.requestAnimationFrame) || Je)(Ge)), t.__H.__.forEach(function(_) {
    _.u && (_.__H = _.u), _.u = void 0;
  })), K = v = null;
}, y.__c = function(e, t) {
  t.some(function(_) {
    try {
      _.__h.forEach(z), _.__h = _.__h.filter(function(r) {
        return !r.__ || ee(r);
      });
    } catch (r) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], y.__e(r, _.__v);
    }
  }), he && he(e, t);
}, y.unmount = function(e) {
  de && de(e);
  var t, _ = e.__c;
  _ && _.__H && (_.__H.__.forEach(function(r) {
    try {
      z(r);
    } catch (o) {
      t = o;
    }
  }), _.__H = void 0, t && y.__e(t, _.__v));
};
var ye = typeof requestAnimationFrame == "function";
function Je(e) {
  var t, _ = function() {
    clearTimeout(r), ye && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(_, 35);
  ye && (t = requestAnimationFrame(_));
}
function z(e) {
  var t = v, _ = e.__c;
  typeof _ == "function" && (e.__c = void 0, _()), v = t;
}
function ee(e) {
  var t = v;
  e.__c = e.__(), v = t;
}
function Ke(e, t) {
  return !e || e.length !== t.length || t.some(function(_, r) {
    return _ !== e[r];
  });
}
function Le(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function q() {
  return q = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var _ = arguments[t];
      for (var r in _) Object.prototype.hasOwnProperty.call(_, r) && (e[r] = _[r]);
    }
    return e;
  }, q.apply(this, arguments);
}
function Me(e, t) {
  if (e == null) return {};
  var _, r, o = {}, n = Object.keys(e);
  for (r = 0; r < n.length; r++) t.indexOf(_ = n[r]) >= 0 || (o[_] = e[_]);
  return o;
}
var Qe = ["context", "children"], Xe = ["useFragment"];
function Ye(e, t, _, r) {
  function o() {
    var n, l = Reflect.construct(HTMLElement, [], o);
    return l._vdomComponent = e, r && r.shadow ? (l._root = l.attachShadow({ mode: r.mode || "open", serializable: (n = r.serializable) != null && n }), r.adoptedStyleSheets && (l._root.adoptedStyleSheets = r.adoptedStyleSheets)) : l._root = l, l;
  }
  return (o.prototype = Object.create(HTMLElement.prototype)).constructor = o, o.prototype.connectedCallback = function() {
    et.call(this, r);
  }, o.prototype.attributeChangedCallback = tt, o.prototype.disconnectedCallback = _t, _ = _ || e.observedAttributes || Object.keys(e.propTypes || {}), o.observedAttributes = _, e.formAssociated && (o.formAssociated = !0), _.forEach(function(n) {
    Object.defineProperty(o.prototype, n, { get: function() {
      return this._vdom ? this._vdom.props[n] : this._props[n];
    }, set: function(l) {
      this._vdom ? this.attributeChangedCallback(n, null, l) : (this._props || (this._props = {}), this._props[n] = l);
      var u = typeof l;
      l != null && u !== "string" && u !== "boolean" && u !== "number" || this.setAttribute(n, l);
    } });
  }), customElements.define(t, o), o;
}
function Ze(e) {
  this.getChildContext = function() {
    return e.context;
  };
  var t = e.children, _ = Me(e, Qe);
  return Ae(t, _);
}
function et(e) {
  var t = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
  this.dispatchEvent(t), this._vdom = H(Ze, q({}, this._props, { context: t.detail.context }), Oe(this, this._vdomComponent, e)), (this.hasAttribute("hydrate") ? Te : G)(this._vdom, this._root);
}
function De(e) {
  return e.replace(/-(\w)/g, function(t, _) {
    return _ ? _.toUpperCase() : "";
  });
}
function tt(e, t, _) {
  if (this._vdom) {
    var r = {};
    r[e] = _ = _ ?? void 0, r[De(e)] = _, this._vdom = Ae(this._vdom, r), G(this._vdom, this._root);
  }
}
function _t() {
  G(this._vdom = null, this._root);
}
function be(e, t) {
  var _ = this, r = e.useFragment, o = Me(e, Xe);
  return H(r ? D : "slot", q({}, o, { ref: function(n) {
    n ? (_.ref = n, _._listener || (_._listener = function(l) {
      l.stopPropagation(), l.detail.context = t;
    }, n.addEventListener("_preact", _._listener))) : _.ref.removeEventListener("_preact", _._listener);
  } }));
}
function Oe(e, t, _) {
  if (e.nodeType === 3) return e.data;
  if (e.nodeType !== 1) return null;
  var r = [], o = {}, n = 0, l = e.attributes, u = e.childNodes;
  for (n = l.length; n--; ) l[n].name !== "slot" && (o[l[n].name] = l[n].value, o[De(l[n].name)] = l[n].value);
  for (n = u.length; n--; ) {
    var s = Oe(u[n], null, _), c = u[n].slot;
    c ? o[c] = H(be, { name: c }, s) : r[n] = s;
  }
  var f = !(!_ || !_.shadow), i = t ? H(be, { useFragment: !f }, r) : r;
  return !f && t && (e.innerHTML = ""), H(t || e.nodeName.toLowerCase(), o, i);
}
const nt = "_container_1ci1x_1", rt = "_counter_1ci1x_12", ot = "_label_1ci1x_18", it = "_button_1ci1x_25", lt = "_count_1ci1x_12", S = {
  container: nt,
  counter: rt,
  label: ot,
  button: it,
  count: lt
}, ct = "._container_1ci1x_1{display:flex;flex-direction:column;align-items:center;padding:1rem;border:2px solid #673ab8;border-radius:8px;background-color:#f9f9f9;font-family:system-ui,-apple-system,sans-serif}._counter_1ci1x_12{display:flex;align-items:center;gap:1rem}._label_1ci1x_18{font-size:1rem;font-weight:600;color:#333;margin-bottom:.5rem}._button_1ci1x_25{width:40px;height:40px;font-size:1.5rem;border:2px solid #673ab8;background-color:#673ab8;color:#fff;border-radius:4px;cursor:pointer;transition:background-color .2s}._button_1ci1x_25:hover{background-color:#5829a0}._button_1ci1x_25:active{background-color:#4a1f88}._count_1ci1x_12{font-size:2rem;font-weight:700;color:#673ab8;min-width:3rem;text-align:center}";
function ut({ count: e = 0 }) {
  const [t, _] = qe(Number(e));
  return ve(() => {
    _(Number(e));
  }, [e]), ve(() => {
    const r = "preact-counter-styles";
    if (!document.getElementById(r)) {
      const o = document.createElement("style");
      o.id = r, o.textContent = ct, document.head.appendChild(o);
    }
  }, []), /* @__PURE__ */ P("div", { className: S.container, children: /* @__PURE__ */ P("div", { className: S.counter, children: [
    /* @__PURE__ */ P("div", { className: S.label, children: "Preact Counter:" }),
    /* @__PURE__ */ P("button", { type: "button", className: S.button, onClick: () => _(t - 1), children: "-" }),
    /* @__PURE__ */ P("span", { className: S.count, children: t }),
    /* @__PURE__ */ P("button", { type: "button", className: S.button, onClick: () => _(t + 1), children: "+" })
  ] }) });
}
Ye(ut, "preact-counter", ["count"], { shadow: !1 });
export {
  ut as default
};
