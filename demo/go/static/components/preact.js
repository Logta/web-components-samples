var j, v, Ne, S, fe, Ee, Pe, ze, le, ne, re, I = {}, Se = [], Ve = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Q = Array.isArray;
function $(e, t) {
  for (var o in t) e[o] = t[o];
  return e;
}
function ae(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function B(e, t, o) {
  var r, _, n, l = {};
  for (n in t) n == "key" ? r = t[n] : n == "ref" ? _ = t[n] : l[n] = t[n];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? j.call(arguments, 2) : o), typeof e == "function" && e.defaultProps != null) for (n in e.defaultProps) l[n] === void 0 && (l[n] = e.defaultProps[n]);
  return L(e, l, r, _, null);
}
function L(e, t, o, r, _) {
  var n = { type: e, props: t, key: o, ref: r, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: _ ?? ++Ne, __i: -1, __u: 0 };
  return _ == null && v.vnode != null && v.vnode(n), n;
}
function A(e) {
  return e.children;
}
function Y(e, t) {
  this.props = e, this.context = t;
}
function O(e, t) {
  if (t == null) return e.__ ? O(e.__, e.__i + 1) : null;
  for (var o; t < e.__k.length; t++) if ((o = e.__k[t]) != null && o.__e != null) return o.__e;
  return typeof e.type == "function" ? O(e) : null;
}
function Te(e) {
  var t, o;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++) if ((o = e.__k[t]) != null && o.__e != null) {
      e.__e = e.__c.base = o.__e;
      break;
    }
    return Te(e);
  }
}
function pe(e) {
  (!e.__d && (e.__d = !0) && S.push(e) && !X.__r++ || fe != v.debounceRendering) && ((fe = v.debounceRendering) || Ee)(X);
}
function X() {
  for (var e, t, o, r, _, n, l, a = 1; S.length; ) S.length > a && S.sort(Pe), e = S.shift(), a = S.length, e.__d && (o = void 0, r = void 0, _ = (r = (t = e).__v).__e, n = [], l = [], t.__P && ((o = $({}, r)).__v = r.__v + 1, v.vnode && v.vnode(o), ce(t.__P, o, r, t.__n, t.__P.namespaceURI, 32 & r.__u ? [_] : null, n, _ ?? O(r), !!(32 & r.__u), l), o.__v = r.__v, o.__.__k[o.__i] = o, Oe(n, o, l), r.__e = r.__ = null, o.__e != _ && Te(o)));
  X.__r = 0;
}
function He(e, t, o, r, _, n, l, a, s, c, f) {
  var i, p, u, b, k, w, d, h = r && r.__k || Se, P = t.length;
  for (s = Ye(o, t, h, s, P), i = 0; i < P; i++) (u = o.__k[i]) != null && (p = u.__i == -1 ? I : h[u.__i] || I, u.__i = i, w = ce(e, u, p, _, n, l, a, s, c, f), b = u.__e, u.ref && p.ref != u.ref && (p.ref && se(p.ref, null, u), f.push(u.ref, u.__c || b, u)), k == null && b != null && (k = b), (d = !!(4 & u.__u)) || p.__k === u.__k ? s = Be(u, s, e, d) : typeof u.type == "function" && w !== void 0 ? s = w : b && (s = b.nextSibling), u.__u &= -7);
  return o.__e = k, s;
}
function Ye(e, t, o, r, _) {
  var n, l, a, s, c, f = o.length, i = f, p = 0;
  for (e.__k = new Array(_), n = 0; n < _; n++) (l = t[n]) != null && typeof l != "boolean" && typeof l != "function" ? (typeof l == "string" || typeof l == "number" || typeof l == "bigint" || l.constructor == String ? l = e.__k[n] = L(null, l, null, null, null) : Q(l) ? l = e.__k[n] = L(A, { children: l }, null, null, null) : l.constructor == null && l.__b > 0 ? l = e.__k[n] = L(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : e.__k[n] = l, s = n + p, l.__ = e, l.__b = e.__b + 1, a = null, (c = l.__i = Ke(l, o, s, i)) != -1 && (i--, (a = o[c]) && (a.__u |= 2)), a == null || a.__v == null ? (c == -1 && (_ > f ? p-- : _ < f && p++), typeof l.type != "function" && (l.__u |= 4)) : c != s && (c == s - 1 ? p-- : c == s + 1 ? p++ : (c > s ? p-- : p++, l.__u |= 4))) : e.__k[n] = null;
  if (i) for (n = 0; n < f; n++) (a = o[n]) != null && (2 & a.__u) == 0 && (a.__e == r && (r = O(a)), De(a, a));
  return r;
}
function Be(e, t, o, r) {
  var _, n;
  if (typeof e.type == "function") {
    for (_ = e.__k, n = 0; _ && n < _.length; n++) _[n] && (_[n].__ = e, t = Be(_[n], t, o, r));
    return t;
  }
  e.__e != t && (r && (t && e.type && !t.parentNode && (t = O(e)), o.insertBefore(e.__e, t || null)), t = e.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function Ke(e, t, o, r) {
  var _, n, l, a = e.key, s = e.type, c = t[o], f = c != null && (2 & c.__u) == 0;
  if (c === null && a == null || f && a == c.key && s == c.type) return o;
  if (r > (f ? 1 : 0)) {
    for (_ = o - 1, n = o + 1; _ >= 0 || n < t.length; ) if ((c = t[l = _ >= 0 ? _-- : n++]) != null && (2 & c.__u) == 0 && a == c.key && s == c.type) return l;
  }
  return -1;
}
function he(e, t, o) {
  t[0] == "-" ? e.setProperty(t, o ?? "") : e[t] = o == null ? "" : typeof o != "number" || Ve.test(t) ? o : o + "px";
}
function q(e, t, o, r, _) {
  var n, l;
  e: if (t == "style") if (typeof o == "string") e.style.cssText = o;
  else {
    if (typeof r == "string" && (e.style.cssText = r = ""), r) for (t in r) o && t in o || he(e.style, t, "");
    if (o) for (t in o) r && o[t] == r[t] || he(e.style, t, o[t]);
  }
  else if (t[0] == "o" && t[1] == "n") n = t != (t = t.replace(ze, "$1")), l = t.toLowerCase(), t = l in e || t == "onFocusOut" || t == "onFocusIn" ? l.slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + n] = o, o ? r ? o.u = r.u : (o.u = le, e.addEventListener(t, n ? re : ne, n)) : e.removeEventListener(t, n ? re : ne, n);
  else {
    if (_ == "http://www.w3.org/2000/svg") t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e) try {
      e[t] = o ?? "";
      break e;
    } catch {
    }
    typeof o == "function" || (o == null || o === !1 && t[4] != "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && o == 1 ? "" : o));
  }
}
function me(e) {
  return function(t) {
    if (this.l) {
      var o = this.l[t.type + e];
      if (t.t == null) t.t = le++;
      else if (t.t < o.u) return;
      return o(v.event ? v.event(t) : t);
    }
  };
}
function ce(e, t, o, r, _, n, l, a, s, c) {
  var f, i, p, u, b, k, w, d, h, P, z, R, D, de, W, M, te, C = t.type;
  if (t.constructor != null) return null;
  128 & o.__u && (s = !!(32 & o.__u), n = [a = t.__e = o.__e]), (f = v.__b) && f(t);
  e: if (typeof C == "function") try {
    if (d = t.props, h = "prototype" in C && C.prototype.render, P = (f = C.contextType) && r[f.__c], z = f ? P ? P.props.value : f.__ : r, o.__c ? w = (i = t.__c = o.__c).__ = i.__E : (h ? t.__c = i = new C(d, z) : (t.__c = i = new Y(d, z), i.constructor = C, i.render = Ge), P && P.sub(i), i.state || (i.state = {}), i.__n = r, p = i.__d = !0, i.__h = [], i._sb = []), h && i.__s == null && (i.__s = i.state), h && C.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = $({}, i.__s)), $(i.__s, C.getDerivedStateFromProps(d, i.__s))), u = i.props, b = i.state, i.__v = t, p) h && C.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), h && i.componentDidMount != null && i.__h.push(i.componentDidMount);
    else {
      if (h && C.getDerivedStateFromProps == null && d !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(d, z), t.__v == o.__v || !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(d, i.__s, z) === !1) {
        for (t.__v != o.__v && (i.props = d, i.state = i.__s, i.__d = !1), t.__e = o.__e, t.__k = o.__k, t.__k.some(function(T) {
          T && (T.__ = t);
        }), R = 0; R < i._sb.length; R++) i.__h.push(i._sb[R]);
        i._sb = [], i.__h.length && l.push(i);
        break e;
      }
      i.componentWillUpdate != null && i.componentWillUpdate(d, i.__s, z), h && i.componentDidUpdate != null && i.__h.push(function() {
        i.componentDidUpdate(u, b, k);
      });
    }
    if (i.context = z, i.props = d, i.__P = e, i.__e = !1, D = v.__r, de = 0, h) {
      for (i.state = i.__s, i.__d = !1, D && D(t), f = i.render(i.props, i.state, i.context), W = 0; W < i._sb.length; W++) i.__h.push(i._sb[W]);
      i._sb = [];
    } else do
      i.__d = !1, D && D(t), f = i.render(i.props, i.state, i.context), i.state = i.__s;
    while (i.__d && ++de < 25);
    i.state = i.__s, i.getChildContext != null && (r = $($({}, r), i.getChildContext())), h && !p && i.getSnapshotBeforeUpdate != null && (k = i.getSnapshotBeforeUpdate(u, b)), M = f, f != null && f.type === A && f.key == null && (M = Ae(f.props.children)), a = He(e, Q(M) ? M : [M], t, o, r, _, n, l, a, s, c), i.base = t.__e, t.__u &= -161, i.__h.length && l.push(i), w && (i.__E = i.__ = null);
  } catch (T) {
    if (t.__v = null, s || n != null) if (T.then) {
      for (t.__u |= s ? 160 : 128; a && a.nodeType == 8 && a.nextSibling; ) a = a.nextSibling;
      n[n.indexOf(a)] = null, t.__e = a;
    } else {
      for (te = n.length; te--; ) ae(n[te]);
      _e(t);
    }
    else t.__e = o.__e, t.__k = o.__k, T.then || _e(t);
    v.__e(T, t, o);
  }
  else n == null && t.__v == o.__v ? (t.__k = o.__k, t.__e = o.__e) : a = t.__e = Xe(o.__e, t, o, r, _, n, l, s, c);
  return (f = v.diffed) && f(t), 128 & t.__u ? void 0 : a;
}
function _e(e) {
  e && e.__c && (e.__c.__e = !0), e && e.__k && e.__k.forEach(_e);
}
function Oe(e, t, o) {
  for (var r = 0; r < o.length; r++) se(o[r], o[++r], o[++r]);
  v.__c && v.__c(t, e), e.some(function(_) {
    try {
      e = _.__h, _.__h = [], e.some(function(n) {
        n.call(_);
      });
    } catch (n) {
      v.__e(n, _.__v);
    }
  });
}
function Ae(e) {
  return typeof e != "object" || e == null || e.__b && e.__b > 0 ? e : Q(e) ? e.map(Ae) : $({}, e);
}
function Xe(e, t, o, r, _, n, l, a, s) {
  var c, f, i, p, u, b, k, w = o.props || I, d = t.props, h = t.type;
  if (h == "svg" ? _ = "http://www.w3.org/2000/svg" : h == "math" ? _ = "http://www.w3.org/1998/Math/MathML" : _ || (_ = "http://www.w3.org/1999/xhtml"), n != null) {
    for (c = 0; c < n.length; c++) if ((u = n[c]) && "setAttribute" in u == !!h && (h ? u.localName == h : u.nodeType == 3)) {
      e = u, n[c] = null;
      break;
    }
  }
  if (e == null) {
    if (h == null) return document.createTextNode(d);
    e = document.createElementNS(_, h, d.is && d), a && (v.__m && v.__m(t, n), a = !1), n = null;
  }
  if (h == null) w === d || a && e.data == d || (e.data = d);
  else {
    if (n = n && j.call(e.childNodes), !a && n != null) for (w = {}, c = 0; c < e.attributes.length; c++) w[(u = e.attributes[c]).name] = u.value;
    for (c in w) if (u = w[c], c != "children") {
      if (c == "dangerouslySetInnerHTML") i = u;
      else if (!(c in d)) {
        if (c == "value" && "defaultValue" in d || c == "checked" && "defaultChecked" in d) continue;
        q(e, c, null, u, _);
      }
    }
    for (c in d) u = d[c], c == "children" ? p = u : c == "dangerouslySetInnerHTML" ? f = u : c == "value" ? b = u : c == "checked" ? k = u : a && typeof u != "function" || w[c] === u || q(e, c, u, w[c], _);
    if (f) a || i && (f.__html == i.__html || f.__html == e.innerHTML) || (e.innerHTML = f.__html), t.__k = [];
    else if (i && (e.innerHTML = ""), He(t.type == "template" ? e.content : e, Q(p) ? p : [p], t, o, r, h == "foreignObject" ? "http://www.w3.org/1999/xhtml" : _, n, l, n ? n[0] : o.__k && O(o, 0), a, s), n != null) for (c = n.length; c--; ) ae(n[c]);
    a || (c = "value", h == "progress" && b == null ? e.removeAttribute("value") : b != null && (b !== e[c] || h == "progress" && !b || h == "option" && b != w[c]) && q(e, c, b, w[c], _), c = "checked", k != null && k != e[c] && q(e, c, k, w[c], _));
  }
  return e;
}
function se(e, t, o) {
  try {
    if (typeof e == "function") {
      var r = typeof e.__u == "function";
      r && e.__u(), r && t == null || (e.__u = e(t));
    } else e.current = t;
  } catch (_) {
    v.__e(_, o);
  }
}
function De(e, t, o) {
  var r, _;
  if (v.unmount && v.unmount(e), (r = e.ref) && (r.current && r.current != e.__e || se(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount) try {
      r.componentWillUnmount();
    } catch (n) {
      v.__e(n, t);
    }
    r.base = r.__P = null;
  }
  if (r = e.__k) for (_ = 0; _ < r.length; _++) r[_] && De(r[_], t, o || typeof e.type != "function");
  o || ae(e.__e), e.__c = e.__ = e.__e = void 0;
}
function Ge(e, t, o) {
  return this.constructor(e, o);
}
function Z(e, t, o) {
  var r, _, n, l;
  t == document && (t = document.documentElement), v.__ && v.__(e, t), _ = (r = typeof o == "function") ? null : o && o.__k || t.__k, n = [], l = [], ce(t, e = (!r && o || t).__k = B(A, null, [e]), _ || I, I, t.namespaceURI, !r && o ? [o] : _ ? null : t.firstChild ? j.call(t.childNodes) : null, n, !r && o ? o : _ ? _.__e : t.firstChild, r, l), Oe(n, e, l);
}
function Me(e, t) {
  Z(e, t, Me);
}
function Le(e, t, o) {
  var r, _, n, l, a = $({}, e.props);
  for (n in e.type && e.type.defaultProps && (l = e.type.defaultProps), t) n == "key" ? r = t[n] : n == "ref" ? _ = t[n] : a[n] = t[n] === void 0 && l != null ? l[n] : t[n];
  return arguments.length > 2 && (a.children = arguments.length > 3 ? j.call(arguments, 2) : o), L(e.type, a, r || e.key, _ || e.ref, null);
}
j = Se.slice, v = { __e: function(e, t, o, r) {
  for (var _, n, l; t = t.__; ) if ((_ = t.__c) && !_.__) try {
    if ((n = _.constructor) && n.getDerivedStateFromError != null && (_.setState(n.getDerivedStateFromError(e)), l = _.__d), _.componentDidCatch != null && (_.componentDidCatch(e, r || {}), l = _.__d), l) return _.__E = _;
  } catch (a) {
    e = a;
  }
  throw e;
} }, Ne = 0, Y.prototype.setState = function(e, t) {
  var o;
  o = this.__s != null && this.__s != this.state ? this.__s : this.__s = $({}, this.state), typeof e == "function" && (e = e($({}, o), this.props)), e && $(o, e), e != null && this.__v && (t && this._sb.push(t), pe(this));
}, Y.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), pe(this));
}, Y.prototype.render = A, S = [], Ee = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Pe = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, X.__r = 0, ze = /(PointerCapture)$|Capture$/i, le = 0, ne = me(!1), re = me(!0);
var Je = 0;
function m(e, t, o, r, _, n) {
  t || (t = {});
  var l, a, s = t;
  if ("ref" in s) for (a in s = {}, t) a == "ref" ? l = t[a] : s[a] = t[a];
  var c = { type: e, props: s, key: o, ref: l, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Je, __i: -1, __u: 0, __source: _, __self: n };
  if (typeof e == "function" && (l = e.defaultProps)) for (a in l) s[a] === void 0 && (s[a] = l[a]);
  return v.vnode && v.vnode(c), c;
}
var U, g, oe, ve, G = 0, Fe = [], y = v, be = y.__b, ge = y.__r, ye = y.diffed, we = y.__c, ke = y.unmount, xe = y.__;
function ue(e, t) {
  y.__h && y.__h(g, e, G || t), G = 0;
  var o = g.__H || (g.__H = { __: [], __h: [] });
  return e >= o.__.length && o.__.push({}), o.__[e];
}
function F(e) {
  return G = 1, Qe(je, e);
}
function Qe(e, t, o) {
  var r = ue(U++, 2);
  if (r.t = e, !r.__c && (r.__ = [je(void 0, t), function(a) {
    var s = r.__N ? r.__N[0] : r.__[0], c = r.t(s, a);
    s !== c && (r.__N = [c, r.__[1]], r.__c.setState({}));
  }], r.__c = g, !g.__f)) {
    var _ = function(a, s, c) {
      if (!r.__c.__H) return !0;
      var f = r.__c.__H.__.filter(function(p) {
        return !!p.__c;
      });
      if (f.every(function(p) {
        return !p.__N;
      })) return !n || n.call(this, a, s, c);
      var i = r.__c.props !== a;
      return f.forEach(function(p) {
        if (p.__N) {
          var u = p.__[0];
          p.__ = p.__N, p.__N = void 0, u !== p.__[0] && (i = !0);
        }
      }), n && n.call(this, a, s, c) || i;
    };
    g.__f = !0;
    var n = g.shouldComponentUpdate, l = g.componentWillUpdate;
    g.componentWillUpdate = function(a, s, c) {
      if (this.__e) {
        var f = n;
        n = void 0, _(a, s, c), n = f;
      }
      l && l.call(this, a, s, c);
    }, g.shouldComponentUpdate = _;
  }
  return r.__N || r.__;
}
function N(e, t) {
  var o = ue(U++, 3);
  !y.__s && Ue(o.__H, t) && (o.__ = e, o.u = t, g.__H.__h.push(o));
}
function Ie(e) {
  return G = 5, Ze(function() {
    return { current: e };
  }, []);
}
function Ze(e, t) {
  var o = ue(U++, 7);
  return Ue(o.__H, t) && (o.__ = e(), o.__H = t, o.__h = e), o.__;
}
function et() {
  for (var e; e = Fe.shift(); ) if (e.__P && e.__H) try {
    e.__H.__h.forEach(K), e.__H.__h.forEach(ie), e.__H.__h = [];
  } catch (t) {
    e.__H.__h = [], y.__e(t, e.__v);
  }
}
y.__b = function(e) {
  g = null, be && be(e);
}, y.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), xe && xe(e, t);
}, y.__r = function(e) {
  ge && ge(e), U = 0;
  var t = (g = e.__c).__H;
  t && (oe === g ? (t.__h = [], g.__h = [], t.__.forEach(function(o) {
    o.__N && (o.__ = o.__N), o.u = o.__N = void 0;
  })) : (t.__h.forEach(K), t.__h.forEach(ie), t.__h = [], U = 0)), oe = g;
}, y.diffed = function(e) {
  ye && ye(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (Fe.push(t) !== 1 && ve === y.requestAnimationFrame || ((ve = y.requestAnimationFrame) || tt)(et)), t.__H.__.forEach(function(o) {
    o.u && (o.__H = o.u), o.u = void 0;
  })), oe = g = null;
}, y.__c = function(e, t) {
  t.some(function(o) {
    try {
      o.__h.forEach(K), o.__h = o.__h.filter(function(r) {
        return !r.__ || ie(r);
      });
    } catch (r) {
      t.some(function(_) {
        _.__h && (_.__h = []);
      }), t = [], y.__e(r, o.__v);
    }
  }), we && we(e, t);
}, y.unmount = function(e) {
  ke && ke(e);
  var t, o = e.__c;
  o && o.__H && (o.__H.__.forEach(function(r) {
    try {
      K(r);
    } catch (_) {
      t = _;
    }
  }), o.__H = void 0, t && y.__e(t, o.__v));
};
var Ce = typeof requestAnimationFrame == "function";
function tt(e) {
  var t, o = function() {
    clearTimeout(r), Ce && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(o, 35);
  Ce && (t = requestAnimationFrame(o));
}
function K(e) {
  var t = g, o = e.__c;
  typeof o == "function" && (e.__c = void 0, o()), g = t;
}
function ie(e) {
  var t = g;
  e.__c = e.__(), g = t;
}
function Ue(e, t) {
  return !e || e.length !== t.length || t.some(function(o, r) {
    return o !== e[r];
  });
}
function je(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function J() {
  return J = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var o = arguments[t];
      for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
    }
    return e;
  }, J.apply(this, arguments);
}
function Re(e, t) {
  if (e == null) return {};
  var o, r, _ = {}, n = Object.keys(e);
  for (r = 0; r < n.length; r++) t.indexOf(o = n[r]) >= 0 || (_[o] = e[o]);
  return _;
}
var ot = ["context", "children"], nt = ["useFragment"];
function ee(e, t, o, r) {
  function _() {
    var n, l = Reflect.construct(HTMLElement, [], _);
    return l._vdomComponent = e, r && r.shadow ? (l._root = l.attachShadow({ mode: r.mode || "open", serializable: (n = r.serializable) != null && n }), r.adoptedStyleSheets && (l._root.adoptedStyleSheets = r.adoptedStyleSheets)) : l._root = l, l;
  }
  return (_.prototype = Object.create(HTMLElement.prototype)).constructor = _, _.prototype.connectedCallback = function() {
    _t.call(this, r);
  }, _.prototype.attributeChangedCallback = it, _.prototype.disconnectedCallback = lt, o = o || e.observedAttributes || Object.keys(e.propTypes || {}), _.observedAttributes = o, e.formAssociated && (_.formAssociated = !0), o.forEach(function(n) {
    Object.defineProperty(_.prototype, n, { get: function() {
      return this._vdom ? this._vdom.props[n] : this._props[n];
    }, set: function(l) {
      this._vdom ? this.attributeChangedCallback(n, null, l) : (this._props || (this._props = {}), this._props[n] = l);
      var a = typeof l;
      l != null && a !== "string" && a !== "boolean" && a !== "number" || this.setAttribute(n, l);
    } });
  }), customElements.define(t || e.tagName || e.displayName || e.name, _), _;
}
function rt(e) {
  this.getChildContext = function() {
    return e.context;
  };
  var t = e.children, o = Re(e, ot);
  return Le(t, o);
}
function _t(e) {
  var t = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
  this.dispatchEvent(t), this._vdom = B(rt, J({}, this._props, { context: t.detail.context }), qe(this, this._vdomComponent, e)), (this.hasAttribute("hydrate") ? Me : Z)(this._vdom, this._root);
}
function We(e) {
  return e.replace(/-(\w)/g, function(t, o) {
    return o ? o.toUpperCase() : "";
  });
}
function it(e, t, o) {
  if (this._vdom) {
    var r = {};
    r[e] = o = o ?? void 0, r[We(e)] = o, this._vdom = Le(this._vdom, r), Z(this._vdom, this._root);
  }
}
function lt() {
  Z(this._vdom = null, this._root);
}
function $e(e, t) {
  var o = this, r = e.useFragment, _ = Re(e, nt);
  return B(r ? A : "slot", J({}, _, { ref: function(n) {
    n ? (o.ref = n, o._listener || (o._listener = function(l) {
      l.stopPropagation(), l.detail.context = t;
    }, n.addEventListener("_preact", o._listener))) : o.ref.removeEventListener("_preact", o._listener);
  } }));
}
function qe(e, t, o) {
  if (e.nodeType === 3) return e.data;
  if (e.nodeType !== 1) return null;
  var r = [], _ = {}, n = 0, l = e.attributes, a = e.childNodes;
  for (n = l.length; n--; ) l[n].name !== "slot" && (_[l[n].name] = l[n].value, _[We(l[n].name)] = l[n].value);
  for (n = a.length; n--; ) {
    var s = qe(a[n], null, o), c = a[n].slot;
    c ? _[c] = B($e, { name: c }, s) : r[n] = s;
  }
  var f = !(!o || !o.shadow), i = t ? B($e, { useFragment: !f }, r) : r;
  return !f && t && (e.innerHTML = ""), B(t || e.nodeName.toLowerCase(), _, i);
}
const at = "_container_1ci1x_1", ct = "_counter_1ci1x_12", st = "_label_1ci1x_18", ut = "_button_1ci1x_25", dt = "_count_1ci1x_12", H = {
  container: at,
  counter: ct,
  label: st,
  button: ut,
  count: dt
}, ft = "._container_1ci1x_1{display:flex;flex-direction:column;align-items:center;padding:1rem;border:2px solid #673ab8;border-radius:8px;background-color:#f9f9f9;font-family:system-ui,-apple-system,sans-serif}._counter_1ci1x_12{display:flex;align-items:center;gap:1rem}._label_1ci1x_18{font-size:1rem;font-weight:600;color:#333;margin-bottom:.5rem}._button_1ci1x_25{width:40px;height:40px;font-size:1.5rem;border:2px solid #673ab8;background-color:#673ab8;color:#fff;border-radius:4px;cursor:pointer;transition:background-color .2s}._button_1ci1x_25:hover{background-color:#5829a0}._button_1ci1x_25:active{background-color:#4a1f88}._count_1ci1x_12{font-size:2rem;font-weight:700;color:#673ab8;min-width:3rem;text-align:center}";
function pt({ count: e = 0 }) {
  const [t, o] = F(Number(e));
  return N(() => {
    o(Number(e));
  }, [e]), N(() => {
    const r = "preact-counter-styles";
    if (!document.getElementById(r)) {
      const _ = document.createElement("style");
      _.id = r, _.textContent = ft, document.head.appendChild(_);
    }
  }, []), /* @__PURE__ */ m("div", { className: H.container, children: /* @__PURE__ */ m("div", { className: H.counter, children: [
    /* @__PURE__ */ m("div", { className: H.label, children: "Preact Counter:" }),
    /* @__PURE__ */ m("button", { type: "button", className: H.button, onClick: () => o(t - 1), children: "-" }),
    /* @__PURE__ */ m("span", { className: H.count, children: t }),
    /* @__PURE__ */ m("button", { type: "button", className: H.button, onClick: () => o(t + 1), children: "+" })
  ] }) });
}
ee(pt, "preact-counter", ["count"], { shadow: !1 });
const ht = "_container_1uv2i_2", mt = "_openButton_1uv2i_7", vt = "_dialog_1uv2i_29", bt = "_modalPanel_1uv2i_65", gt = "_modalHeader_1uv2i_71", yt = "_modalTitle_1uv2i_75", wt = "_modalBody_1uv2i_83", kt = "_modalDescription_1uv2i_87", xt = "_modalContent_1uv2i_93", Ct = "_modalActions_1uv2i_115", $t = "_closeButton_1uv2i_122", x = {
  container: ht,
  openButton: mt,
  dialog: vt,
  modalPanel: bt,
  modalHeader: gt,
  modalTitle: yt,
  modalBody: wt,
  modalDescription: kt,
  modalContent: xt,
  modalActions: Ct,
  closeButton: $t
}, Nt = "._container_1uv2i_2{display:inline-block}._openButton_1uv2i_7{padding:.75rem 1.5rem;background-color:#8b5cf6;color:#fff;border:none;border-radius:8px;font-size:1rem;font-weight:500;cursor:pointer;transition:background-color .2s}._openButton_1uv2i_7:hover{background-color:#7c3aed}._openButton_1uv2i_7:focus{outline:2px solid #8b5cf6;outline-offset:2px}._dialog_1uv2i_29{border:none;border-radius:12px;padding:0;max-width:28rem;box-shadow:0 20px 25px -5px #0000001a,0 10px 10px -5px #0000000a;animation:_slideIn_1uv2i_1 .3s cubic-bezier(.4,0,.2,1)}._dialog_1uv2i_29::backdrop{background-color:#00000080;animation:_fadeIn_1uv2i_1 .3s cubic-bezier(.4,0,.2,1)}@keyframes _slideIn_1uv2i_1{0%{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}@keyframes _fadeIn_1uv2i_1{0%{opacity:0}to{opacity:1}}._modalPanel_1uv2i_65{padding:1.5rem;background-color:#fff}._modalHeader_1uv2i_71{margin-bottom:1rem}._modalTitle_1uv2i_75{font-size:1.5rem;font-weight:700;color:#111827;margin:0}._modalBody_1uv2i_83{margin-top:.5rem}._modalDescription_1uv2i_87{font-size:.875rem;color:#6b7280;margin-bottom:1rem}._modalContent_1uv2i_93{margin-top:1rem}._modalContent_1uv2i_93 p{margin:0 0 .75rem;color:#374151;line-height:1.6}._modalContent_1uv2i_93 ul{margin:0;padding-left:1.5rem;color:#374151;line-height:1.8}._modalContent_1uv2i_93 li{margin-bottom:.25rem}._modalActions_1uv2i_115{margin-top:1.5rem;display:flex;gap:.75rem;justify-content:flex-end}._closeButton_1uv2i_122{padding:.625rem 1.25rem;background-color:#8b5cf6;color:#fff;border:none;border-radius:6px;font-size:.875rem;font-weight:500;cursor:pointer;transition:background-color .2s}._closeButton_1uv2i_122:hover{background-color:#7c3aed}._closeButton_1uv2i_122:focus{outline:2px solid #8b5cf6;outline-offset:2px}@media(max-width:640px){._dialog_1uv2i_29{max-width:90vw}._modalPanel_1uv2i_65{padding:1.25rem}._modalTitle_1uv2i_75{font-size:1.25rem}}";
function Et({
  isOpen: e = !1,
  title: t = "Preact Modal",
  description: o = "This is a modal dialog built with Preact and native HTML <dialog> element.",
  onbuttonclick: r,
  children: _
}) {
  const [n, l] = F(e), a = Ie(null);
  N(() => {
    l(e);
  }, [e]), N(() => {
    const i = "preact-modal-styles";
    if (!document.getElementById(i)) {
      const p = document.createElement("style");
      p.id = i, p.textContent = Nt, document.head.appendChild(p);
    }
  }, []), N(() => {
    a.current && (n ? a.current.showModal() : a.current.close());
  }, [n]);
  function s() {
    if (l(!0), r)
      try {
        new Function(r)();
      } catch (i) {
        console.error("Error executing onbuttonclick:", i);
      }
  }
  function c() {
    l(!1);
  }
  function f(i) {
    const u = i.target.getBoundingClientRect();
    (i.clientX < u.left || i.clientX > u.right || i.clientY < u.top || i.clientY > u.bottom) && c();
  }
  return /* @__PURE__ */ m("div", { className: x.container, children: [
    /* @__PURE__ */ m(
      "button",
      {
        type: "button",
        onClick: s,
        className: x.openButton,
        children: "Open Preact Modal"
      }
    ),
    /* @__PURE__ */ m(
      "dialog",
      {
        ref: a,
        onClose: c,
        onClick: f,
        className: x.dialog,
        children: /* @__PURE__ */ m("div", { className: x.modalPanel, children: [
          /* @__PURE__ */ m("div", { className: x.modalHeader, children: /* @__PURE__ */ m("h3", { className: x.modalTitle, children: t }) }),
          /* @__PURE__ */ m("div", { className: x.modalBody, children: _ || /* @__PURE__ */ m(A, { children: [
            /* @__PURE__ */ m("p", { className: x.modalDescription, children: o }),
            /* @__PURE__ */ m("div", { className: x.modalContent, children: [
              /* @__PURE__ */ m("p", { children: "This modal demonstrates Preact + native <dialog> integration:" }),
              /* @__PURE__ */ m("ul", { children: [
                /* @__PURE__ */ m("li", { children: "✅ Preact lightweight (3KB)" }),
                /* @__PURE__ */ m("li", { children: "✅ Native <dialog> accessibility" }),
                /* @__PURE__ */ m("li", { children: "✅ Automatic focus trap" }),
                /* @__PURE__ */ m("li", { children: "✅ ESC key to close (native)" }),
                /* @__PURE__ */ m("li", { children: "✅ Click outside to close" }),
                /* @__PURE__ */ m("li", { children: "✅ ::backdrop pseudo-element" })
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ m("div", { className: x.modalActions, children: /* @__PURE__ */ m(
            "button",
            {
              type: "button",
              className: x.closeButton,
              onClick: c,
              children: "Close"
            }
          ) })
        ] })
      }
    )
  ] });
}
ee(Et, "preact-modal", ["isOpen", "title", "description", "onbuttonclick"], { shadow: !1 });
const Pt = "_button_a3w2z_1", zt = "_primary_a3w2z_29", St = "_secondary_a3w2z_38", Tt = "_success_a3w2z_47", Ht = "_danger_a3w2z_56", Bt = "_small_a3w2z_65", Ot = "_large_a3w2z_70", V = {
  button: Pt,
  primary: zt,
  secondary: St,
  success: Tt,
  danger: Ht,
  small: Bt,
  large: Ot
}, At = "._button_a3w2z_1{display:inline-flex;align-items:center;justify-content:center;padding:.5rem 1rem;font-size:1rem;font-weight:500;border:none;border-radius:.375rem;cursor:pointer;transition:all .2s ease-in-out;font-family:inherit}._button_a3w2z_1:disabled{opacity:.5;cursor:not-allowed}._button_a3w2z_1:not(:disabled):hover{transform:translateY(-1px);box-shadow:0 4px 6px #0000001a}._button_a3w2z_1:not(:disabled):active{transform:translateY(0)}._primary_a3w2z_29{background-color:#3b82f6;color:#fff}._primary_a3w2z_29:not(:disabled):hover{background-color:#2563eb}._secondary_a3w2z_38{background-color:#6b7280;color:#fff}._secondary_a3w2z_38:not(:disabled):hover{background-color:#4b5563}._success_a3w2z_47{background-color:#10b981;color:#fff}._success_a3w2z_47:not(:disabled):hover{background-color:#059669}._danger_a3w2z_56{background-color:#ef4444;color:#fff}._danger_a3w2z_56:not(:disabled):hover{background-color:#dc2626}._small_a3w2z_65{padding:.25rem .75rem;font-size:.875rem}._large_a3w2z_70{padding:.75rem 1.5rem;font-size:1.125rem}";
function Dt({
  label: e = "Button",
  variant: t = "primary",
  size: o = "medium",
  disabled: r = !1,
  onbuttonclick: _
}) {
  N(() => {
    const a = "preact-button-styles";
    if (!document.getElementById(a)) {
      const s = document.createElement("style");
      s.id = a, s.textContent = At, document.head.appendChild(s);
    }
  }, []);
  const n = () => {
    if (!r && _)
      try {
        new Function(_)();
      } catch (a) {
        console.error("Error executing onbuttonclick:", a);
      }
  }, l = [
    V.button,
    V[t] || V.primary,
    o !== "medium" ? V[o] : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ m(
    "button",
    {
      className: l,
      disabled: r,
      type: "button",
      onClick: n,
      children: e
    }
  );
}
ee(Dt, "preact-button", ["label", "variant", "size", "disabled", "onbuttonclick"], { shadow: !1 });
const Mt = "_dropdown_1rheh_1", Lt = "_button_1rheh_8", Ft = "_buttonDisabled_1rheh_33", It = "_arrow_1rheh_38", Ut = "_arrowOpen_1rheh_49", jt = "_menu_1rheh_53", Rt = "_item_1rheh_67", Wt = "_itemSelected_1rheh_77", qt = "_placeholder_1rheh_83", E = {
  dropdown: Mt,
  button: Lt,
  buttonDisabled: Ft,
  arrow: It,
  arrowOpen: Ut,
  menu: jt,
  item: Rt,
  itemSelected: Wt,
  placeholder: qt
}, Vt = "._dropdown_1rheh_1{position:relative;display:inline-block;width:100%;max-width:300px}._button_1rheh_8{width:100%;padding:.5rem 2.5rem .5rem 1rem;font-size:1rem;background-color:#fff;border:1px solid #d1d5db;border-radius:.375rem;cursor:pointer;display:flex;align-items:center;justify-content:space-between;transition:all .2s ease-in-out;position:relative}._button_1rheh_8:hover{border-color:#9ca3af}._button_1rheh_8:focus{outline:none;border-color:#3b82f6;box-shadow:0 0 0 3px #3b82f61a}._buttonDisabled_1rheh_33{opacity:.5;cursor:not-allowed}._arrow_1rheh_38{position:absolute;right:1rem;width:0;height:0;border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid #6b7280;transition:transform .2s ease-in-out}._arrowOpen_1rheh_49{transform:rotate(180deg)}._menu_1rheh_53{position:absolute;top:calc(100% + .25rem);left:0;right:0;background-color:#fff;border:1px solid #d1d5db;border-radius:.375rem;box-shadow:0 10px 15px -3px #0000001a;max-height:300px;overflow-y:auto;z-index:10}._item_1rheh_67{padding:.5rem 1rem;cursor:pointer;transition:background-color .2s ease-in-out}._item_1rheh_67:hover{background-color:#f3f4f6}._itemSelected_1rheh_77{background-color:#eff6ff;color:#3b82f6;font-weight:500}._placeholder_1rheh_83{color:#9ca3af}";
function Yt({
  options: e = "[]",
  selected: t = "",
  placeholder: o = "Select an option",
  disabled: r = !1,
  onvaluechange: _ = ""
}) {
  const [n, l] = F(!1), [a, s] = F(t), [c, f] = F([]), i = Ie(null);
  N(() => {
    const d = "preact-dropdown-styles";
    if (!document.getElementById(d)) {
      const h = document.createElement("style");
      h.id = d, h.textContent = Vt, document.head.appendChild(h);
    }
  }, []), N(() => {
    try {
      const d = typeof e == "string" ? JSON.parse(e) : e;
      f(d);
    } catch (d) {
      console.error("Invalid options JSON:", d), f([]);
    }
  }, [e]), N(() => {
    s(t);
  }, [t]), N(() => {
    const d = (h) => {
      i.current && !i.current.contains(h.target) && l(!1);
    };
    return n && document.addEventListener("click", d), () => {
      document.removeEventListener("click", d);
    };
  }, [n]);
  const p = () => {
    r || l(!n);
  }, u = (d) => {
    if (!r && (s(d.value), l(!1), _))
      try {
        new Function("value", "option", _)(d.value, d);
      } catch (h) {
        console.error("Error executing onvaluechange:", h);
      }
  }, b = c.find((d) => d.value === a), k = b ? b.label : o, w = !b;
  return /* @__PURE__ */ m("div", { className: E.dropdown, ref: i, children: [
    /* @__PURE__ */ m(
      "button",
      {
        className: `${E.button} ${r ? E.buttonDisabled : ""}`,
        onClick: p,
        disabled: r,
        type: "button",
        children: [
          /* @__PURE__ */ m("span", { className: w ? E.placeholder : "", children: k }),
          /* @__PURE__ */ m("span", { className: `${E.arrow} ${n ? E.arrowOpen : ""}` })
        ]
      }
    ),
    n && /* @__PURE__ */ m("div", { className: E.menu, children: c.map((d) => /* @__PURE__ */ m(
      "div",
      {
        className: `${E.item} ${d.value === a ? E.itemSelected : ""}`,
        onClick: () => u(d),
        children: d.label
      },
      d.value
    )) })
  ] });
}
ee(Yt, "preact-dropdown", ["options", "selected", "placeholder", "disabled", "onvaluechange"], { shadow: !1 });
export {
  Dt as PreactButton,
  pt as PreactCounter,
  Yt as PreactDropdown,
  Et as PreactModal
};
