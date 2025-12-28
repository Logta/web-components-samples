import { q as $e, v as ht, w as Se, x as yt, y as Le, z as Me, A as mt, B as gt, C as Ne, D as wt, E as Et, F as Tt, G as St, H as kt, I as It, J as At, K as Nt, L as je, M as Ft, N as Ot, O as Pt, P as Dt, Q as Rt, R as xe, S as xt, T as Ct, U as Ce, V as rt, W as oe, c as _t, p as $t, a as Lt, b as Be, g as nt, i as Ke, j as Mt, X as jt, m as Ve, h as ce, n as W, Y as z, r as G, Z as Bt, t as Kt, o as Ue } from "./custom-element-I89mP688.js";
class Vt {
  /** @type {TemplateNode} */
  anchor;
  /** @type {Map<Batch, Key>} */
  #t = /* @__PURE__ */ new Map();
  /**
   * Map of keys to effects that are currently rendered in the DOM.
   * These effects are visible and actively part of the document tree.
   * Example:
   * ```
   * {#if condition}
   * 	foo
   * {:else}
   * 	bar
   * {/if}
   * ```
   * Can result in the entries `true->Effect` and `false->Effect`
   * @type {Map<Key, Effect>}
   */
  #r = /* @__PURE__ */ new Map();
  /**
   * Similar to #onscreen with respect to the keys, but contains branches that are not yet
   * in the DOM, because their insertion is deferred.
   * @type {Map<Key, Branch>}
   */
  #e = /* @__PURE__ */ new Map();
  /**
   * Keys of effects that are currently outroing
   * @type {Set<Key>}
   */
  #n = /* @__PURE__ */ new Set();
  /**
   * Whether to pause (i.e. outro) on change, or destroy immediately.
   * This is necessary for `<svelte:element>`
   */
  #a = !0;
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(e, t = !0) {
    this.anchor = e, this.#a = t;
  }
  #o = () => {
    var e = (
      /** @type {Batch} */
      $e
    );
    if (this.#t.has(e)) {
      var t = (
        /** @type {Key} */
        this.#t.get(e)
      ), n = this.#r.get(t);
      if (n)
        ht(n), this.#n.delete(t);
      else {
        var i = this.#e.get(t);
        i && (this.#r.set(t, i.effect), this.#e.delete(t), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
      }
      for (const [o, a] of this.#t) {
        if (this.#t.delete(o), o === e)
          break;
        const c = this.#e.get(a);
        c && (Se(c.effect), this.#e.delete(a));
      }
      for (const [o, a] of this.#r) {
        if (o === t || this.#n.has(o)) continue;
        const c = () => {
          if (Array.from(this.#t.values()).includes(o)) {
            var v = document.createDocumentFragment();
            mt(a, v), v.append(Le()), this.#e.set(o, { effect: a, fragment: v });
          } else
            Se(a);
          this.#n.delete(o), this.#r.delete(o);
        };
        this.#a || !n ? (this.#n.add(o), yt(a, c, !1)) : c();
      }
    }
  };
  /**
   * @param {Batch} batch
   */
  #i = (e) => {
    this.#t.delete(e);
    const t = Array.from(this.#t.values());
    for (const [n, i] of this.#e)
      t.includes(n) || (Se(i.effect), this.#e.delete(n));
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, t) {
    var n = (
      /** @type {Batch} */
      $e
    ), i = gt();
    if (t && !this.#r.has(e) && !this.#e.has(e))
      if (i) {
        var o = document.createDocumentFragment(), a = Le();
        o.append(a), this.#e.set(e, {
          effect: Me(() => t(a)),
          fragment: o
        });
      } else
        this.#r.set(
          e,
          Me(() => t(this.anchor))
        );
    if (this.#t.set(n, e), i) {
      for (const [c, l] of this.#r)
        c === e ? n.skipped_effects.delete(l) : n.skipped_effects.add(l);
      for (const [c, l] of this.#e)
        c === e ? n.skipped_effects.delete(l.effect) : n.skipped_effects.add(l.effect);
      n.oncommit(this.#o), n.ondiscard(this.#i);
    } else
      Ne && (this.anchor = wt), this.#o();
  }
}
function Ut(r, e, t = !1) {
  Ne && St();
  var n = new Vt(r), i = t ? Tt : 0;
  function o(a, c) {
    if (Ne) {
      const v = kt(r) === It;
      if (a === v) {
        var l = At();
        Nt(l), n.anchor = l, je(!1), n.ensure(a, c), je(!0);
        return;
      }
    }
    n.ensure(a, c);
  }
  Et(() => {
    var a = !1;
    e((c, l = !0) => {
      a = !0, o(l, c);
    }), a || o(!1, null);
  }, i);
}
function Z(r, e, t) {
  Ft(() => {
    var n = Ot(() => e(r, t?.()) || {});
    if (t && n?.update) {
      var i = !1, o = (
        /** @type {any} */
        {}
      );
      Pt(() => {
        var a = t();
        Dt(a), i && Rt(o, a) && (o = a, n.update(a));
      }), i = !0;
    }
    if (n?.destroy)
      return () => (
        /** @type {Function} */
        n.destroy()
      );
  });
}
function Fe(r) {
  return Object.keys(r).reduce((e, t) => r[t] === void 0 ? e : e + `${t}:${r[t]};`, "");
}
Fe({
  position: "absolute",
  opacity: 0,
  "pointer-events": "none",
  margin: 0,
  transform: "translateX(-100%)"
});
function qt(r) {
  if (r !== null)
    return "";
}
function he(...r) {
  return (...e) => {
    for (const t of r)
      typeof t == "function" && t(...e);
  };
}
function N() {
}
function at(r, ...e) {
  const t = {};
  for (const n of Object.keys(r))
    e.includes(n) || (t[n] = r[n]);
  return t;
}
function de(r) {
  const e = {};
  for (const t in r) {
    const n = r[t];
    n !== void 0 && (e[t] = n);
  }
  return e;
}
function qe(r) {
  function e(t) {
    return t(r), () => {
    };
  }
  return { subscribe: e };
}
const fe = (r) => new Proxy(r, {
  get(e, t, n) {
    return Reflect.get(e, t, n);
  },
  ownKeys(e) {
    return Reflect.ownKeys(e).filter((t) => t !== "action");
  }
}), He = (r) => typeof r == "function";
X("empty");
function X(r, e) {
  const { stores: t, action: n, returned: i } = e ?? {}, o = (() => {
    if (t && i)
      return xe(t, (c) => {
        const l = i(c);
        if (He(l)) {
          const v = (...m) => fe(de({
            ...l(...m),
            [`data-melt-${r}`]: "",
            action: n ?? N
          }));
          return v.action = n ?? N, v;
        }
        return fe(de({
          ...l,
          [`data-melt-${r}`]: "",
          action: n ?? N
        }));
      });
    {
      const l = i?.();
      if (He(l)) {
        const v = (...m) => fe(de({
          ...l(...m),
          [`data-melt-${r}`]: "",
          action: n ?? N
        }));
        return v.action = n ?? N, qe(v);
      }
      return qe(fe(de({
        ...l,
        [`data-melt-${r}`]: "",
        action: n ?? N
      })));
    }
  })(), a = n ?? (() => {
  });
  return a.subscribe = o.subscribe, a;
}
function Ht(r) {
  const e = (o) => o ? `${r}-${o}` : r, t = (o) => `data-melt-${r}${o ? `-${o}` : ""}`, n = (o) => `[data-melt-${r}${o ? `-${o}` : ""}]`;
  return {
    name: e,
    attribute: t,
    selector: n,
    getEl: (o) => document.querySelector(n(o))
  };
}
const We = typeof document < "u", ot = (r) => typeof r == "function";
function Wt(r) {
  return r instanceof ShadowRoot;
}
function _e(r) {
  return r instanceof Element;
}
function q(r) {
  return r instanceof HTMLElement;
}
function zt(r) {
  return r !== null && typeof r == "object";
}
function Gt(r) {
  return zt(r) && "subscribe" in r;
}
function Oe(r, e, t, n) {
  const i = Array.isArray(e) ? e : [e];
  return i.forEach((o) => r.addEventListener(o, t, n)), () => {
    i.forEach((o) => r.removeEventListener(o, t, n));
  };
}
function ve(r, e, t, n) {
  const i = Array.isArray(e) ? e : [e];
  if (typeof t == "function") {
    const o = Yt((a) => t(a));
    return i.forEach((a) => r.addEventListener(a, o, n)), () => {
      i.forEach((a) => r.removeEventListener(a, o, n));
    };
  }
  return () => void 0;
}
function Xt(r) {
  const e = r.currentTarget;
  if (!q(e))
    return null;
  const t = new CustomEvent(`m-${r.type}`, {
    detail: {
      originalEvent: r
    },
    cancelable: !0
  });
  return e.dispatchEvent(t), t;
}
function Yt(r) {
  return (e) => {
    if (!Xt(e)?.defaultPrevented)
      return r(e);
  };
}
const Zt = (r) => {
  try {
    xt(r);
  } catch {
    return r;
  }
};
function ne(r) {
  return {
    ...r,
    get: () => Ct(r)
  };
}
ne.writable = function(r) {
  const e = Ce(r);
  let t = r;
  return {
    subscribe: e.subscribe,
    set(n) {
      e.set(n), t = n;
    },
    update(n) {
      const i = n(t);
      e.set(i), t = i;
    },
    get() {
      return t;
    }
  };
};
ne.derived = function(r, e) {
  const t = /* @__PURE__ */ new Map(), n = () => {
    const o = Array.isArray(r) ? r.map((a) => a.get()) : r.get();
    return e(o);
  };
  return {
    get: n,
    subscribe: (o) => {
      const a = [];
      return (Array.isArray(r) ? r : [r]).forEach((l) => {
        a.push(l.subscribe(() => {
          o(n());
        }));
      }), o(n()), t.set(o, a), () => {
        const l = t.get(o);
        if (l)
          for (const v of l)
            v();
        t.delete(o);
      };
    }
  };
};
const Jt = (r, e) => {
  const t = ne(r), n = (o, a) => {
    t.update((c) => {
      const l = o(c);
      let v = l;
      return e && (v = e({ curr: c, next: l })), a?.(v), v;
    });
  };
  return {
    ...t,
    update: n,
    set: (o) => {
      n(() => o);
    }
  };
};
function Qt(r) {
  return new Promise((e) => setTimeout(e, r));
}
let er = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", tr = (r = 21) => {
  let e = "", t = r | 0;
  for (; t--; )
    e += er[Math.random() * 64 | 0];
  return e;
};
function rr() {
  return tr(10);
}
function nr(r) {
  return r.reduce((e, t) => (e[t] = rr(), e), {});
}
const ie = {
  ENTER: "Enter",
  ESCAPE: "Escape",
  SPACE: " "
};
function ke(r, e = 500) {
  let t;
  const n = (...i) => {
    clearTimeout(t), t = setTimeout(() => r(...i), e);
  };
  return n.destroy = () => clearTimeout(t), n;
}
const it = () => typeof window < "u";
function ar() {
  return navigator.userAgentData?.platform ?? navigator.platform;
}
const st = (r) => it() && r.test(ar().toLowerCase()), or = () => it() && !!navigator.maxTouchPoints, ir = () => st(/^mac/) && !or(), sr = () => st(/mac|iphone|ipad|ipod/i), ur = () => sr() && !ir(), Ie = "data-melt-scroll-lock";
function ze(r, e) {
  if (!r)
    return;
  const t = r.style.cssText;
  return Object.assign(r.style, e), () => {
    r.style.cssText = t;
  };
}
function lr(r, e, t) {
  if (!r)
    return;
  const n = r.style.getPropertyValue(e);
  return r.style.setProperty(e, t), () => {
    n ? r.style.setProperty(e, n) : r.style.removeProperty(e);
  };
}
function cr(r) {
  const e = r.getBoundingClientRect().left;
  return Math.round(e) + r.scrollLeft ? "paddingLeft" : "paddingRight";
}
function dr(r) {
  const e = document, t = e.defaultView ?? window, { documentElement: n, body: i } = e;
  if (i.hasAttribute(Ie))
    return N;
  i.setAttribute(Ie, "");
  const a = t.innerWidth - n.clientWidth, c = () => lr(n, "--scrollbar-width", `${a}px`), l = cr(n), v = t.getComputedStyle(i)[l], m = () => ze(i, {
    overflow: "hidden",
    [l]: `calc(${v} + ${a}px)`
  }), S = () => {
    const { scrollX: E, scrollY: O, visualViewport: F } = t, $ = F?.offsetLeft ?? 0, A = F?.offsetTop ?? 0, R = ze(i, {
      position: "fixed",
      overflow: "hidden",
      top: `${-(O - Math.floor(A))}px`,
      left: `${-(E - Math.floor($))}px`,
      right: "0",
      [l]: `calc(${v} + ${a}px)`
    });
    return () => {
      R?.(), t.scrollTo(E, O);
    };
  }, I = [c(), ur() ? S() : m()];
  return () => {
    I.forEach((E) => E?.()), i.removeAttribute(Ie);
  };
}
function se(r, e, t = {}) {
  const { skipFirstRun: n } = t;
  let i = !0, o;
  const a = xe(r, (l) => {
    o?.(), i && n ? i = !1 : o = e(l);
  }).subscribe(N), c = () => {
    a(), o?.();
  };
  return Zt(c), c;
}
function Ge(r) {
  const e = {};
  return Object.keys(r).forEach((t) => {
    const n = t, i = r[n];
    e[n] = ne(Ce(i));
  }), e;
}
function fr(r) {
  let e = r.parentElement;
  for (; q(e) && !e.hasAttribute("data-portal"); )
    e = e.parentElement;
  return e || "body";
}
function vr(r, e) {
  return e !== void 0 ? e : fr(r) === "body" ? document.body : null;
}
function ut(r, e) {
  return r === e || r.contains(e);
}
function br(r) {
  return r?.ownerDocument ?? document;
}
async function Xe(r) {
  const { prop: e, defaultEl: t } = r;
  if (await Promise.all([Qt(1), rt]), e === void 0) {
    t?.focus();
    return;
  }
  const n = ot(e) ? e(t) : e;
  if (typeof n == "string") {
    const i = document.querySelector(n);
    if (!q(i))
      return;
    i.focus();
  } else q(n) && n.focus();
}
oe(!1), oe(!1), oe(void 0), oe(void 0);
const pe = /* @__PURE__ */ new Map(), pr = ((r, e = {}) => {
  let t = N;
  function n(i = {}) {
    t();
    const o = { behaviorType: "close", ...i }, a = Gt(o.behaviorType) ? o.behaviorType : ne(oe(o.behaviorType));
    pe.set(r, a), t = he(Oe(document, "keydown", (l) => {
      if (l.key !== ie.ESCAPE || !hr(r))
        return;
      const v = l.target;
      q(v) && (l.preventDefault(), !yr(l, o.ignore) && mr(a.get()) && o.handler?.(l));
    }, { passive: !1 }), se(a, (l) => {
      l === "close" || l === "defer-otherwise-close" && [...pe.keys()][0] === r ? r.dataset.escapee = "" : delete r.dataset.escapee;
    }), a.destroy || N);
  }
  return n(e), {
    update: n,
    destroy() {
      pe.delete(r), delete r.dataset.escapee, t();
    }
  };
}), hr = (r) => {
  const e = [...pe], t = e.findLast(([i, o]) => {
    const a = o.get();
    return a === "close" || a === "ignore";
  });
  if (t)
    return t[0] === r;
  const [n] = e[0];
  return n === r;
}, yr = (r, e) => e ? !!(ot(e) && e(r) || Array.isArray(e) && e.some((t) => r.target === t)) : !1, mr = (r) => r === "close" || r === "defer-otherwise-close";
var lt = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], ye = /* @__PURE__ */ lt.join(","), ct = typeof Element > "u", te = ct ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, me = !ct && Element.prototype.getRootNode ? function(r) {
  var e;
  return r == null || (e = r.getRootNode) === null || e === void 0 ? void 0 : e.call(r);
} : function(r) {
  return r?.ownerDocument;
}, le = function(e, t) {
  var n;
  t === void 0 && (t = !0);
  var i = e == null || (n = e.getAttribute) === null || n === void 0 ? void 0 : n.call(e, "inert"), o = i === "" || i === "true", a = o || t && e && le(e.parentNode);
  return a;
}, gr = function(e) {
  var t, n = e == null || (t = e.getAttribute) === null || t === void 0 ? void 0 : t.call(e, "contenteditable");
  return n === "" || n === "true";
}, dt = function(e, t, n) {
  if (le(e))
    return [];
  var i = Array.prototype.slice.apply(e.querySelectorAll(ye));
  return t && te.call(e, ye) && i.unshift(e), i = i.filter(n), i;
}, ge = function(e, t, n) {
  for (var i = [], o = Array.from(e); o.length; ) {
    var a = o.shift();
    if (!le(a, !1))
      if (a.tagName === "SLOT") {
        var c = a.assignedElements(), l = c.length ? c : a.children, v = ge(l, !0, n);
        n.flatten ? i.push.apply(i, v) : i.push({
          scopeParent: a,
          candidates: v
        });
      } else {
        var m = te.call(a, ye);
        m && n.filter(a) && (t || !e.includes(a)) && i.push(a);
        var S = a.shadowRoot || // check for an undisclosed shadow
        typeof n.getShadowRoot == "function" && n.getShadowRoot(a), I = !le(S, !1) && (!n.shadowRootFilter || n.shadowRootFilter(a));
        if (S && I) {
          var E = ge(S === !0 ? a.children : S.children, !0, n);
          n.flatten ? i.push.apply(i, E) : i.push({
            scopeParent: a,
            candidates: E
          });
        } else
          o.unshift.apply(o, a.children);
      }
  }
  return i;
}, ft = function(e) {
  return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
}, ee = function(e) {
  if (!e)
    throw new Error("No node provided");
  return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || gr(e)) && !ft(e) ? 0 : e.tabIndex;
}, wr = function(e, t) {
  var n = ee(e);
  return n < 0 && t && !ft(e) ? 0 : n;
}, Er = function(e, t) {
  return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex;
}, vt = function(e) {
  return e.tagName === "INPUT";
}, Tr = function(e) {
  return vt(e) && e.type === "hidden";
}, Sr = function(e) {
  var t = e.tagName === "DETAILS" && Array.prototype.slice.apply(e.children).some(function(n) {
    return n.tagName === "SUMMARY";
  });
  return t;
}, kr = function(e, t) {
  for (var n = 0; n < e.length; n++)
    if (e[n].checked && e[n].form === t)
      return e[n];
}, Ir = function(e) {
  if (!e.name)
    return !0;
  var t = e.form || me(e), n = function(c) {
    return t.querySelectorAll('input[type="radio"][name="' + c + '"]');
  }, i;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    i = n(window.CSS.escape(e.name));
  else
    try {
      i = n(e.name);
    } catch (a) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", a.message), !1;
    }
  var o = kr(i, e.form);
  return !o || o === e;
}, Ar = function(e) {
  return vt(e) && e.type === "radio";
}, Nr = function(e) {
  return Ar(e) && !Ir(e);
}, Fr = function(e) {
  var t, n = e && me(e), i = (t = n) === null || t === void 0 ? void 0 : t.host, o = !1;
  if (n && n !== e) {
    var a, c, l;
    for (o = !!((a = i) !== null && a !== void 0 && (c = a.ownerDocument) !== null && c !== void 0 && c.contains(i) || e != null && (l = e.ownerDocument) !== null && l !== void 0 && l.contains(e)); !o && i; ) {
      var v, m, S;
      n = me(i), i = (v = n) === null || v === void 0 ? void 0 : v.host, o = !!((m = i) !== null && m !== void 0 && (S = m.ownerDocument) !== null && S !== void 0 && S.contains(i));
    }
  }
  return o;
}, Ye = function(e) {
  var t = e.getBoundingClientRect(), n = t.width, i = t.height;
  return n === 0 && i === 0;
}, Or = function(e, t) {
  var n = t.displayCheck, i = t.getShadowRoot;
  if (n === "full-native" && "checkVisibility" in e) {
    var o = e.checkVisibility({
      // Checking opacity might be desirable for some use cases, but natively,
      // opacity zero elements _are_ focusable and tabbable.
      checkOpacity: !1,
      opacityProperty: !1,
      contentVisibilityAuto: !0,
      visibilityProperty: !0,
      // This is an alias for `visibilityProperty`. Contemporary browsers
      // support both. However, this alias has wider browser support (Chrome
      // >= 105 and Firefox >= 106, vs. Chrome >= 121 and Firefox >= 122), so
      // we include it anyway.
      checkVisibilityCSS: !0
    });
    return !o;
  }
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  var a = te.call(e, "details>summary:first-of-type"), c = a ? e.parentElement : e;
  if (te.call(c, "details:not([open]) *"))
    return !0;
  if (!n || n === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  n === "full-native" || n === "legacy-full") {
    if (typeof i == "function") {
      for (var l = e; e; ) {
        var v = e.parentElement, m = me(e);
        if (v && !v.shadowRoot && i(v) === !0)
          return Ye(e);
        e.assignedSlot ? e = e.assignedSlot : !v && m !== e.ownerDocument ? e = m.host : e = v;
      }
      e = l;
    }
    if (Fr(e))
      return !e.getClientRects().length;
    if (n !== "legacy-full")
      return !0;
  } else if (n === "non-zero-area")
    return Ye(e);
  return !1;
}, Pr = function(e) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
    for (var t = e.parentElement; t; ) {
      if (t.tagName === "FIELDSET" && t.disabled) {
        for (var n = 0; n < t.children.length; n++) {
          var i = t.children.item(n);
          if (i.tagName === "LEGEND")
            return te.call(t, "fieldset[disabled] *") ? !0 : !i.contains(e);
        }
        return !0;
      }
      t = t.parentElement;
    }
  return !1;
}, we = function(e, t) {
  return !(t.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  le(t) || Tr(t) || Or(t, e) || // For a details element with a summary, the summary element gets the focus
  Sr(t) || Pr(t));
}, Pe = function(e, t) {
  return !(Nr(t) || ee(t) < 0 || !we(e, t));
}, Dr = function(e) {
  var t = parseInt(e.getAttribute("tabindex"), 10);
  return !!(isNaN(t) || t >= 0);
}, bt = function(e) {
  var t = [], n = [];
  return e.forEach(function(i, o) {
    var a = !!i.scopeParent, c = a ? i.scopeParent : i, l = wr(c, a), v = a ? bt(i.candidates) : c;
    l === 0 ? a ? t.push.apply(t, v) : t.push(c) : n.push({
      documentOrder: o,
      tabIndex: l,
      item: i,
      isScope: a,
      content: v
    });
  }), n.sort(Er).reduce(function(i, o) {
    return o.isScope ? i.push.apply(i, o.content) : i.push(o.content), i;
  }, []).concat(t);
}, Rr = function(e, t) {
  t = t || {};
  var n;
  return t.getShadowRoot ? n = ge([e], t.includeContainer, {
    filter: Pe.bind(null, t),
    flatten: !1,
    getShadowRoot: t.getShadowRoot,
    shadowRootFilter: Dr
  }) : n = dt(e, t.includeContainer, Pe.bind(null, t)), bt(n);
}, xr = function(e, t) {
  t = t || {};
  var n;
  return t.getShadowRoot ? n = ge([e], t.includeContainer, {
    filter: we.bind(null, t),
    flatten: !0,
    getShadowRoot: t.getShadowRoot
  }) : n = dt(e, t.includeContainer, we.bind(null, t)), n;
}, re = function(e, t) {
  if (t = t || {}, !e)
    throw new Error("No node provided");
  return te.call(e, ye) === !1 ? !1 : Pe(t, e);
}, Cr = /* @__PURE__ */ lt.concat("iframe").join(","), Ae = function(e, t) {
  if (t = t || {}, !e)
    throw new Error("No node provided");
  return te.call(e, Cr) === !1 ? !1 : we(t, e);
};
function De(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var t = 0, n = Array(e); t < e; t++) n[t] = r[t];
  return n;
}
function _r(r) {
  if (Array.isArray(r)) return De(r);
}
function Ze(r, e) {
  var t = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = pt(r)) || e) {
      t && (r = t);
      var n = 0, i = function() {
      };
      return {
        s: i,
        n: function() {
          return n >= r.length ? {
            done: !0
          } : {
            done: !1,
            value: r[n++]
          };
        },
        e: function(l) {
          throw l;
        },
        f: i
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o, a = !0, c = !1;
  return {
    s: function() {
      t = t.call(r);
    },
    n: function() {
      var l = t.next();
      return a = l.done, l;
    },
    e: function(l) {
      c = !0, o = l;
    },
    f: function() {
      try {
        a || t.return == null || t.return();
      } finally {
        if (c) throw o;
      }
    }
  };
}
function $r(r, e, t) {
  return (e = Kr(e)) in r ? Object.defineProperty(r, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[e] = t, r;
}
function Lr(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
}
function Mr() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Je(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(r, i).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function Qe(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Je(Object(t), !0).forEach(function(n) {
      $r(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : Je(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
function jr(r) {
  return _r(r) || Lr(r) || pt(r) || Mr();
}
function Br(r, e) {
  if (typeof r != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(r, e);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(r);
}
function Kr(r) {
  var e = Br(r, "string");
  return typeof e == "symbol" ? e : e + "";
}
function pt(r, e) {
  if (r) {
    if (typeof r == "string") return De(r, e);
    var t = {}.toString.call(r).slice(8, -1);
    return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? De(r, e) : void 0;
  }
}
var U = {
  // Returns the trap from the top of the stack.
  getActiveTrap: function(e) {
    return e?.length > 0 ? e[e.length - 1] : null;
  },
  // Pauses the currently active trap, then adds a new trap to the stack.
  activateTrap: function(e, t) {
    var n = U.getActiveTrap(e);
    t !== n && U.pauseTrap(e);
    var i = e.indexOf(t);
    i === -1 || e.splice(i, 1), e.push(t);
  },
  // Removes the trap from the top of the stack, then unpauses the next trap down.
  deactivateTrap: function(e, t) {
    var n = e.indexOf(t);
    n !== -1 && e.splice(n, 1), U.unpauseTrap(e);
  },
  // Pauses the trap at the top of the stack.
  pauseTrap: function(e) {
    var t = U.getActiveTrap(e);
    t?._setPausedState(!0);
  },
  // Unpauses the trap at the top of the stack.
  unpauseTrap: function(e) {
    var t = U.getActiveTrap(e);
    t && !t._isManuallyPaused() && t._setPausedState(!1);
  }
}, Vr = function(e) {
  return e.tagName && e.tagName.toLowerCase() === "input" && typeof e.select == "function";
}, Ur = function(e) {
  return e?.key === "Escape" || e?.key === "Esc" || e?.keyCode === 27;
}, ue = function(e) {
  return e?.key === "Tab" || e?.keyCode === 9;
}, qr = function(e) {
  return ue(e) && !e.shiftKey;
}, Hr = function(e) {
  return ue(e) && e.shiftKey;
}, et = function(e) {
  return setTimeout(e, 0);
}, ae = function(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
    n[i - 1] = arguments[i];
  return typeof e == "function" ? e.apply(void 0, n) : e;
}, be = function(e) {
  return e.target.shadowRoot && typeof e.composedPath == "function" ? e.composedPath()[0] : e.target;
}, Wr = [], zr = function(e, t) {
  var n = t?.document || document, i = t?.trapStack || Wr, o = Qe({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    isolateSubtrees: !1,
    isKeyForward: qr,
    isKeyBackward: Hr
  }, t), a = {
    // containers given to createFocusTrap()
    /** @type {Array<HTMLElement>} */
    containers: [],
    // list of objects identifying tabbable nodes in `containers` in the trap
    // NOTE: it's possible that a group has no tabbable nodes if nodes get removed while the trap
    //  is active, but the trap should never get to a state where there isn't at least one group
    //  with at least one tabbable node in it (that would lead to an error condition that would
    //  result in an error being thrown)
    /** @type {Array<{
     *    container: HTMLElement,
     *    tabbableNodes: Array<HTMLElement>, // empty if none
     *    focusableNodes: Array<HTMLElement>, // empty if none
     *    posTabIndexesFound: boolean,
     *    firstTabbableNode: HTMLElement|undefined,
     *    lastTabbableNode: HTMLElement|undefined,
     *    firstDomTabbableNode: HTMLElement|undefined,
     *    lastDomTabbableNode: HTMLElement|undefined,
     *    nextTabbableNode: (node: HTMLElement, forward: boolean) => HTMLElement|undefined
     *  }>}
     */
    containerGroups: [],
    // same order/length as `containers` list
    // references to objects in `containerGroups`, but only those that actually have
    //  tabbable nodes in them
    // NOTE: same order as `containers` and `containerGroups`, but __not necessarily__
    //  the same length
    tabbableGroups: [],
    // references to nodes that are siblings to the ancestors of this trap's containers.
    /** @type {Set<HTMLElement>} */
    adjacentElements: /* @__PURE__ */ new Set(),
    // references to nodes that were inert before the trap was activated.
    /** @type {Set<HTMLElement>} */
    alreadyInert: /* @__PURE__ */ new Set(),
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: !1,
    paused: !1,
    manuallyPaused: !1,
    // timer ID for when delayInitialFocus is true and initial focus in this trap
    //  has been delayed during activation
    delayInitialFocusTimer: void 0,
    // the most recent KeyboardEvent for the configured nav key (typically [SHIFT+]TAB), if any
    recentNavEvent: void 0
  }, c, l = function(s, u, d) {
    return s && s[u] !== void 0 ? s[u] : o[d || u];
  }, v = function(s, u) {
    var d = typeof u?.composedPath == "function" ? u.composedPath() : void 0;
    return a.containerGroups.findIndex(function(h) {
      var y = h.container, w = h.tabbableNodes;
      return y.contains(s) || d?.includes(y) || w.find(function(p) {
        return p === s;
      });
    });
  }, m = function(s) {
    var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, d = u.hasFallback, h = d === void 0 ? !1 : d, y = u.params, w = y === void 0 ? [] : y, p = o[s];
    if (typeof p == "function" && (p = p.apply(void 0, jr(w))), p === !0 && (p = void 0), !p) {
      if (p === void 0 || p === !1)
        return p;
      throw new Error("`".concat(s, "` was specified but was not a node, or did not return a node"));
    }
    var T = p;
    if (typeof p == "string") {
      try {
        T = n.querySelector(p);
      } catch (k) {
        throw new Error("`".concat(s, '` appears to be an invalid selector; error="').concat(k.message, '"'));
      }
      if (!T && !h)
        throw new Error("`".concat(s, "` as selector refers to no known node"));
    }
    return T;
  }, S = function() {
    var s = m("initialFocus", {
      hasFallback: !0
    });
    if (s === !1)
      return !1;
    if (s === void 0 || s && !Ae(s, o.tabbableOptions))
      if (v(n.activeElement) >= 0)
        s = n.activeElement;
      else {
        var u = a.tabbableGroups[0], d = u && u.firstTabbableNode;
        s = d || m("fallbackFocus");
      }
    else s === null && (s = m("fallbackFocus"));
    if (!s)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return s;
  }, I = function() {
    if (a.containerGroups = a.containers.map(function(s) {
      var u = Rr(s, o.tabbableOptions), d = xr(s, o.tabbableOptions), h = u.length > 0 ? u[0] : void 0, y = u.length > 0 ? u[u.length - 1] : void 0, w = d.find(function(k) {
        return re(k);
      }), p = d.slice().reverse().find(function(k) {
        return re(k);
      }), T = !!u.find(function(k) {
        return ee(k) > 0;
      });
      return {
        container: s,
        tabbableNodes: u,
        focusableNodes: d,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: T,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: h,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: y,
        // NOTE: DOM order is NOT NECESSARILY "document position" order, but figuring that out
        //  would require more than just https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        //  because that API doesn't work with Shadow DOM as well as it should (@see
        //  https://github.com/whatwg/dom/issues/320) and since this first/last is only needed, so far,
        //  to address an edge case related to positive tabindex support, this seems like a much easier,
        //  "close enough most of the time" alternative for positive tabindexes which should generally
        //  be avoided anyway...
        /** First tabbable node in container, __DOM__ order; `undefined` if none. */
        firstDomTabbableNode: w,
        /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
        lastDomTabbableNode: p,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(_) {
          var x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, D = u.indexOf(_);
          return D < 0 ? x ? d.slice(d.indexOf(_) + 1).find(function(Y) {
            return re(Y);
          }) : d.slice(0, d.indexOf(_)).reverse().find(function(Y) {
            return re(Y);
          }) : u[D + (x ? 1 : -1)];
        }
      };
    }), a.tabbableGroups = a.containerGroups.filter(function(s) {
      return s.tabbableNodes.length > 0;
    }), a.tabbableGroups.length <= 0 && !m("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (a.containerGroups.find(function(s) {
      return s.posTabIndexesFound;
    }) && a.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, E = function(s) {
    var u = s.activeElement;
    if (u)
      return u.shadowRoot && u.shadowRoot.activeElement !== null ? E(u.shadowRoot) : u;
  }, O = function(s) {
    if (s !== !1 && s !== E(document)) {
      if (!s || !s.focus) {
        O(S());
        return;
      }
      s.focus({
        preventScroll: !!o.preventScroll
      }), a.mostRecentlyFocusedNode = s, Vr(s) && s.select();
    }
  }, F = function(s) {
    var u = m("setReturnFocus", {
      params: [s]
    });
    return u || (u === !1 ? !1 : s);
  }, $ = function(s) {
    var u = s.target, d = s.event, h = s.isBackward, y = h === void 0 ? !1 : h;
    u = u || be(d), I();
    var w = null;
    if (a.tabbableGroups.length > 0) {
      var p = v(u, d), T = p >= 0 ? a.containerGroups[p] : void 0;
      if (p < 0)
        y ? w = a.tabbableGroups[a.tabbableGroups.length - 1].lastTabbableNode : w = a.tabbableGroups[0].firstTabbableNode;
      else if (y) {
        var k = a.tabbableGroups.findIndex(function(Ee) {
          var Te = Ee.firstTabbableNode;
          return u === Te;
        });
        if (k < 0 && (T.container === u || Ae(u, o.tabbableOptions) && !re(u, o.tabbableOptions) && !T.nextTabbableNode(u, !1)) && (k = p), k >= 0) {
          var _ = k === 0 ? a.tabbableGroups.length - 1 : k - 1, x = a.tabbableGroups[_];
          w = ee(u) >= 0 ? x.lastTabbableNode : x.lastDomTabbableNode;
        } else ue(d) || (w = T.nextTabbableNode(u, !1));
      } else {
        var D = a.tabbableGroups.findIndex(function(Ee) {
          var Te = Ee.lastTabbableNode;
          return u === Te;
        });
        if (D < 0 && (T.container === u || Ae(u, o.tabbableOptions) && !re(u, o.tabbableOptions) && !T.nextTabbableNode(u)) && (D = p), D >= 0) {
          var Y = D === a.tabbableGroups.length - 1 ? 0 : D + 1, H = a.tabbableGroups[Y];
          w = ee(u) >= 0 ? H.firstTabbableNode : H.firstDomTabbableNode;
        } else ue(d) || (w = T.nextTabbableNode(u));
      }
    } else
      w = m("fallbackFocus");
    return w;
  }, A = function(s) {
    var u = be(s);
    if (!(v(u, s) >= 0)) {
      if (ae(o.clickOutsideDeactivates, s)) {
        c.deactivate({
          // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
          //  which will result in the outside click setting focus to the node
          //  that was clicked (and if not focusable, to "nothing"); by setting
          //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
          //  on activation (or the configured `setReturnFocus` node), whether the
          //  outside click was on a focusable node or not
          returnFocus: o.returnFocusOnDeactivate
        });
        return;
      }
      ae(o.allowOutsideClick, s) || s.preventDefault();
    }
  }, R = function(s) {
    var u = be(s), d = v(u, s) >= 0;
    if (d || u instanceof Document)
      d && (a.mostRecentlyFocusedNode = u);
    else {
      s.stopImmediatePropagation();
      var h, y = !0;
      if (a.mostRecentlyFocusedNode)
        if (ee(a.mostRecentlyFocusedNode) > 0) {
          var w = v(a.mostRecentlyFocusedNode), p = a.containerGroups[w].tabbableNodes;
          if (p.length > 0) {
            var T = p.findIndex(function(k) {
              return k === a.mostRecentlyFocusedNode;
            });
            T >= 0 && (o.isKeyForward(a.recentNavEvent) ? T + 1 < p.length && (h = p[T + 1], y = !1) : T - 1 >= 0 && (h = p[T - 1], y = !1));
          }
        } else
          a.containerGroups.some(function(k) {
            return k.tabbableNodes.some(function(_) {
              return ee(_) > 0;
            });
          }) || (y = !1);
      else
        y = !1;
      y && (h = $({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: a.mostRecentlyFocusedNode,
        isBackward: o.isKeyBackward(a.recentNavEvent)
      })), O(h || a.mostRecentlyFocusedNode || S());
    }
    a.recentNavEvent = void 0;
  }, P = function(s) {
    var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    a.recentNavEvent = s;
    var d = $({
      event: s,
      isBackward: u
    });
    d && (ue(s) && s.preventDefault(), O(d));
  }, j = function(s) {
    (o.isKeyForward(s) || o.isKeyBackward(s)) && P(s, o.isKeyBackward(s));
  }, K = function(s) {
    Ur(s) && ae(o.escapeDeactivates, s) !== !1 && (s.preventDefault(), c.deactivate());
  }, B = function(s) {
    var u = be(s);
    v(u, s) >= 0 || ae(o.clickOutsideDeactivates, s) || ae(o.allowOutsideClick, s) || (s.preventDefault(), s.stopImmediatePropagation());
  }, C = function() {
    if (a.active)
      return U.activateTrap(i, c), a.delayInitialFocusTimer = o.delayInitialFocus ? et(function() {
        O(S());
      }) : O(S()), n.addEventListener("focusin", R, !0), n.addEventListener("mousedown", A, {
        capture: !0,
        passive: !1
      }), n.addEventListener("touchstart", A, {
        capture: !0,
        passive: !1
      }), n.addEventListener("click", B, {
        capture: !0,
        passive: !1
      }), n.addEventListener("keydown", j, {
        capture: !0,
        passive: !1
      }), n.addEventListener("keydown", K), c;
  }, L = function(s) {
    a.active && !a.paused && c._setSubtreeIsolation(!1), a.adjacentElements.clear(), a.alreadyInert.clear();
    var u = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set(), h = Ze(s), y;
    try {
      for (h.s(); !(y = h.n()).done; ) {
        var w = y.value;
        u.add(w);
        for (var p = typeof ShadowRoot < "u" && w.getRootNode() instanceof ShadowRoot, T = w; T; ) {
          u.add(T);
          var k = T.parentElement, _ = [];
          k ? _ = k.children : !k && p && (_ = T.getRootNode().children, k = T.getRootNode().host, p = typeof ShadowRoot < "u" && k.getRootNode() instanceof ShadowRoot);
          var x = Ze(_), D;
          try {
            for (x.s(); !(D = x.n()).done; ) {
              var Y = D.value;
              d.add(Y);
            }
          } catch (H) {
            x.e(H);
          } finally {
            x.f();
          }
          T = k;
        }
      }
    } catch (H) {
      h.e(H);
    } finally {
      h.f();
    }
    u.forEach(function(H) {
      d.delete(H);
    }), a.adjacentElements = d;
  }, V = function() {
    if (a.active)
      return n.removeEventListener("focusin", R, !0), n.removeEventListener("mousedown", A, !0), n.removeEventListener("touchstart", A, !0), n.removeEventListener("click", B, !0), n.removeEventListener("keydown", j, !0), n.removeEventListener("keydown", K), c;
  }, M = function(s) {
    var u = s.some(function(d) {
      var h = Array.from(d.removedNodes);
      return h.some(function(y) {
        return y === a.mostRecentlyFocusedNode;
      });
    });
    u && O(S());
  }, b = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(M) : void 0, g = function() {
    b && (b.disconnect(), a.active && !a.paused && a.containers.map(function(s) {
      b.observe(s, {
        subtree: !0,
        childList: !0
      });
    }));
  };
  return c = {
    get active() {
      return a.active;
    },
    get paused() {
      return a.paused;
    },
    activate: function(s) {
      if (a.active)
        return this;
      var u = l(s, "onActivate"), d = l(s, "onPostActivate"), h = l(s, "checkCanFocusTrap"), y = U.getActiveTrap(i), w = !1;
      y && !y.paused && (y._setSubtreeIsolation(!1), w = !0);
      try {
        h || I(), a.active = !0, a.paused = !1, a.nodeFocusedBeforeActivation = E(n), u?.();
        var p = function() {
          h && I(), C(), g(), o.isolateSubtrees && c._setSubtreeIsolation(!0), d?.();
        };
        if (h)
          return h(a.containers.concat()).then(p, p), this;
        p();
      } catch (T) {
        throw y === U.getActiveTrap(i) && w && y._setSubtreeIsolation(!0), T;
      }
      return this;
    },
    deactivate: function(s) {
      if (!a.active)
        return this;
      var u = Qe({
        onDeactivate: o.onDeactivate,
        onPostDeactivate: o.onPostDeactivate,
        checkCanReturnFocus: o.checkCanReturnFocus
      }, s);
      clearTimeout(a.delayInitialFocusTimer), a.delayInitialFocusTimer = void 0, a.paused || c._setSubtreeIsolation(!1), a.alreadyInert.clear(), V(), a.active = !1, a.paused = !1, g(), U.deactivateTrap(i, c);
      var d = l(u, "onDeactivate"), h = l(u, "onPostDeactivate"), y = l(u, "checkCanReturnFocus"), w = l(u, "returnFocus", "returnFocusOnDeactivate");
      d?.();
      var p = function() {
        et(function() {
          w && O(F(a.nodeFocusedBeforeActivation)), h?.();
        });
      };
      return w && y ? (y(F(a.nodeFocusedBeforeActivation)).then(p, p), this) : (p(), this);
    },
    pause: function(s) {
      return a.active ? (a.manuallyPaused = !0, this._setPausedState(!0, s)) : this;
    },
    unpause: function(s) {
      return a.active ? (a.manuallyPaused = !1, i[i.length - 1] !== this ? this : this._setPausedState(!1, s)) : this;
    },
    updateContainerElements: function(s) {
      var u = [].concat(s).filter(Boolean);
      return a.containers = u.map(function(d) {
        return typeof d == "string" ? n.querySelector(d) : d;
      }), o.isolateSubtrees && L(a.containers), a.active && (I(), o.isolateSubtrees && !a.paused && c._setSubtreeIsolation(!0)), g(), this;
    }
  }, Object.defineProperties(c, {
    _isManuallyPaused: {
      value: function() {
        return a.manuallyPaused;
      }
    },
    _setPausedState: {
      value: function(s, u) {
        if (a.paused === s)
          return this;
        if (a.paused = s, s) {
          var d = l(u, "onPause"), h = l(u, "onPostPause");
          d?.(), V(), g(), c._setSubtreeIsolation(!1), h?.();
        } else {
          var y = l(u, "onUnpause"), w = l(u, "onPostUnpause");
          y?.(), c._setSubtreeIsolation(!0), I(), C(), g(), w?.();
        }
        return this;
      }
    },
    _setSubtreeIsolation: {
      value: function(s) {
        o.isolateSubtrees && a.adjacentElements.forEach(function(u) {
          if (s) {
            var d = u.inert || u.hasAttribute("inert");
            d && a.alreadyInert.add(u), u.inert = !0;
          } else
            a.alreadyInert.has(u) || (u.inert = !1);
        });
      }
    }
  }), c.updateContainerElements(e), c;
};
const Gr = ((r, e = {}) => {
  let t = N;
  const n = (i) => {
    t();
    const o = zr(r, {
      returnFocusOnDeactivate: !1,
      allowOutsideClick: !0,
      escapeDeactivates: !1,
      clickOutsideDeactivates: !1,
      ...i
    });
    t = o.deactivate, o.activate();
  };
  return n(e), { destroy: t, update: n };
});
function J(r, e) {
  throw new Error("[MELTUI ERROR]: The `use:melt` action cannot be used without MeltUI's Preprocessor. See: https://www.melt-ui.com/docs/preprocessor");
}
const Xr = ((r, e) => {
  let t = N;
  function n(i) {
    t();
    const { onClose: o, shouldCloseOnInteractOutside: a, closeOnInteractOutside: c } = i;
    function l() {
      o?.();
    }
    function v(S) {
      const I = S.target;
      _e(I) && S.stopImmediatePropagation();
    }
    function m(S) {
      a?.(S) && (S.stopImmediatePropagation(), l());
    }
    t = Zr(r, {
      onInteractOutsideStart: v,
      onInteractOutside: c ? m : void 0,
      enabled: c
    }).destroy;
  }
  return n(e), {
    update: n,
    destroy() {
      t();
    }
  };
}), Yr = ((r, e = "body") => {
  let t;
  if (!q(e) && typeof e != "string")
    return {
      destroy: N
    };
  async function n(o = "body") {
    if (e = o, typeof e == "string") {
      if (t = document.querySelector(e), t === null && (await rt(), t = document.querySelector(e)), t === null)
        throw new Error(`No element found matching css selector: "${e}"`);
    } else if (e instanceof HTMLElement)
      t = e;
    else
      throw new TypeError(`Unknown portal target type: ${e === null ? "null" : typeof e}. Allowed types: string (CSS selector) or HTMLElement.`);
    r.dataset.portal = "", t.appendChild(r), r.hidden = !1;
  }
  function i() {
    r.remove();
  }
  return n(e), {
    update: n,
    destroy: i
  };
}), Re = /* @__PURE__ */ new Set(), Zr = ((r, e = {}) => {
  let t = N, n = N, i = N, o = N;
  Re.add(r);
  const a = br(r);
  let c = !1, l = !1;
  const v = {
    pointerdown: !1,
    pointerup: !1,
    mousedown: !1,
    mouseup: !1,
    touchstart: !1,
    touchend: !1,
    click: !1
  }, m = () => {
    for (const A in v)
      v[A] = !1;
  }, S = () => {
    for (const A of Object.values(v))
      if (A)
        return !0;
    return !1;
  }, I = (A, R) => Oe(a, A, (P) => {
    v[A] = !0, R?.(P);
  }, !0), E = (A, R) => Oe(a, A, (P) => {
    v[A] = !1;
    const j = {};
    q(P.target) && Wt(P.target.shadowRoot) && (j.shadowTarget = P.composedPath()[0]), R?.(P, j);
  });
  function O(A) {
    t(), n(), i(), o(), m();
    const { onInteractOutside: R, onInteractOutsideStart: P, enabled: j } = { enabled: !0, ...A };
    if (!j)
      return;
    let K = !1;
    const B = ke((M, b) => {
      if (!K || S())
        return;
      R && tt(M, r) && P?.(M);
      const g = b?.shadowTarget ? b.shadowTarget : M.target;
      _e(g) && ut(r, g) && (l = !0), c = !0;
    }, 10);
    n = B.destroy;
    const C = ke((M) => {
      K && !S() && F(M) && R?.(M), $();
    }, 10);
    i = C.destroy;
    const L = ke(m, 20);
    o = L.destroy;
    const V = () => {
      K = Jr(r);
    };
    t = he(
      /** Capture Events For Interaction Start */
      I("pointerdown", V),
      I("mousedown", V),
      I("touchstart", V),
      /**
       * Intercepted events are reset only at the end of an interaction, allowing
       * interception at the start while still capturing the entire interaction.
       * Additionally, intercepted events are reset in the capture phase with `resetInterceptedEventsDebounced`,
       * accommodating events not invoked in the bubbling phase due to user interception.
       */
      I("pointerup", L),
      I("mouseup", L),
      I("touchend", L),
      I("click", L),
      /** Bubbling Events For Interaction Start */
      E("pointerdown", B),
      E("mousedown", B),
      E("touchstart", B),
      /**
       * To effectively detect an end of an interaction, we must monitor all relevant events,
       * not just `click` events. This is because on touch devices, actions like pressing,
       * moving the finger, and lifting it off the screen may not trigger a `click` event,
       * but should still invoke `onPointerUp` to properly handle the interaction.
       */
      E("pointerup", C),
      E("mouseup", C),
      E("touchend", C),
      E("click", C)
    );
  }
  function F(A) {
    return !!(c && !l && tt(A, r));
  }
  function $() {
    c = !1, l = !1;
  }
  return O(e), {
    update: O,
    destroy() {
      t(), n(), i(), o(), Re.delete(r);
    }
  };
});
function tt(r, e) {
  if ("button" in r && r.button > 0)
    return !1;
  const t = r.target;
  if (!_e(t))
    return !1;
  const n = t.ownerDocument;
  return !n || !n.documentElement.contains(t) ? !1 : e && !ut(e, t);
}
function Jr(r) {
  return Array.from(Re).at(-1) === r;
}
const Qr = {
  isDateDisabled: void 0,
  isDateUnavailable: void 0,
  value: void 0,
  preventDeselect: !1,
  numberOfMonths: 1,
  pagedNavigation: !1,
  weekStartsOn: 0,
  fixedWeeks: !1,
  calendarLabel: "Event Date",
  locale: "en",
  minValue: void 0,
  maxValue: void 0,
  disabled: !1,
  readonly: !1,
  weekdayFormat: "narrow"
};
({
  ...at(Qr, "isDateDisabled", "isDateUnavailable", "value", "locale", "disabled", "readonly", "minValue", "maxValue", "weekdayFormat")
});
const { name: Q } = Ht("dialog"), en = {
  preventScroll: !0,
  escapeBehavior: "close",
  closeOnOutsideClick: !0,
  role: "dialog",
  defaultOpen: !1,
  portal: "body",
  forceVisible: !1,
  openFocus: void 0,
  closeFocus: void 0,
  onOutsideClick: void 0
}, tn = ["content", "title", "description"];
function rn(r) {
  const e = { ...en, ...r }, t = Ge(at(e, "ids")), { preventScroll: n, escapeBehavior: i, closeOnOutsideClick: o, role: a, portal: c, forceVisible: l, openFocus: v, closeFocus: m, onOutsideClick: S } = t, I = ne.writable(null), E = Ge({
    ...nr(tn),
    ...e.ids
  }), O = e.open ?? Ce(e.defaultOpen), F = Jt(O, e?.onOpenChange), $ = xe([F, l], ([b, g]) => b || g);
  let A = N;
  function R(b) {
    const g = b.currentTarget, f = b.currentTarget;
    !q(g) || !q(f) || (F.set(!0), I.set(f));
  }
  function P() {
    F.set(!1);
  }
  const j = X(Q("trigger"), {
    stores: [F],
    returned: ([b]) => ({
      "aria-haspopup": "dialog",
      "aria-expanded": b,
      type: "button"
    }),
    action: (b) => ({
      destroy: he(ve(b, "click", (f) => {
        R(f);
      }), ve(b, "keydown", (f) => {
        f.key !== ie.ENTER && f.key !== ie.SPACE || (f.preventDefault(), R(f));
      }))
    })
  }), K = X(Q("overlay"), {
    stores: [$, F],
    returned: ([b, g]) => ({
      hidden: b ? void 0 : !0,
      tabindex: -1,
      style: b ? void 0 : Fe({ display: "none" }),
      "aria-hidden": !0,
      "data-state": g ? "open" : "closed"
    })
  }), B = X(Q("content"), {
    stores: [$, E.content, E.description, E.title, F],
    returned: ([b, g, f, s, u]) => ({
      id: g,
      role: a.get(),
      "aria-describedby": f,
      "aria-labelledby": s,
      "aria-modal": b ? "true" : void 0,
      "data-state": u ? "open" : "closed",
      tabindex: -1,
      hidden: b ? void 0 : !0,
      style: b ? void 0 : Fe({ display: "none" })
    }),
    action: (b) => {
      let g = N, f = N, s = N;
      const u = se([$, o], ([d, h]) => {
        f(), g(), s(), d && (f = Xr(b, {
          closeOnInteractOutside: h,
          onClose: P,
          shouldCloseOnInteractOutside(y) {
            return S.get()?.(y), !y.defaultPrevented;
          }
        }).destroy, g = pr(b, {
          handler: P,
          behaviorType: i
        }).destroy, s = Gr(b, { fallbackFocus: b }).destroy);
      });
      return {
        destroy: () => {
          A(), u(), f(), g(), s();
        }
      };
    }
  }), C = X(Q("portalled"), {
    stores: c,
    returned: (b) => ({
      "data-portal": qt(b)
    }),
    action: (b) => {
      const g = se([c], ([f]) => {
        if (f === null)
          return N;
        const s = vr(b, f);
        return s === null ? N : Yr(b, s).destroy;
      });
      return {
        destroy() {
          g();
        }
      };
    }
  }), L = X(Q("title"), {
    stores: [E.title],
    returned: ([b]) => ({
      id: b
    })
  }), V = X(Q("description"), {
    stores: [E.description],
    returned: ([b]) => ({
      id: b
    })
  }), M = X(Q("close"), {
    returned: () => ({
      type: "button"
    }),
    action: (b) => ({
      destroy: he(ve(b, "click", () => {
        P();
      }), ve(b, "keydown", (f) => {
        f.key !== ie.SPACE && f.key !== ie.ENTER || (f.preventDefault(), P());
      }))
    })
  });
  return se([F, n], ([b, g]) => {
    if (We) {
      if (g && b && (A = dr()), b) {
        const f = document.getElementById(E.content.get());
        Xe({ prop: v.get(), defaultEl: f });
      }
      return () => {
        l.get() || A();
      };
    }
  }), se(F, (b) => {
    !We || b || Xe({
      prop: m.get(),
      defaultEl: I.get()
    });
  }, { skipFirstRun: !0 }), {
    ids: E,
    elements: {
      content: B,
      trigger: j,
      title: L,
      description: V,
      overlay: K,
      close: M,
      portalled: C
    },
    states: {
      open: F
    },
    options: t
  };
}
var nn = nt('<div><div class="overlay svelte-ho3w24"></div> <div class="modal-content svelte-ho3w24"><div class="modal-header svelte-ho3w24"><h3 class="modal-title svelte-ho3w24"> </h3></div> <div class="modal-body svelte-ho3w24"><p class="modal-description svelte-ho3w24"> </p> <div class="feature-list svelte-ho3w24"><p class="svelte-ho3w24">This modal demonstrates Svelte + Melt UI integration:</p> <ul class="svelte-ho3w24"><li class="svelte-ho3w24">✅ Melt UI headless components</li> <li class="svelte-ho3w24">✅ Svelte 5 runes ($bindable, $state)</li> <li class="svelte-ho3w24">✅ Automatic accessibility (ARIA)</li> <li class="svelte-ho3w24">✅ Automatic focus trap</li> <li class="svelte-ho3w24">✅ ESC key to close</li> <li class="svelte-ho3w24">✅ Click outside to close</li> <li class="svelte-ho3w24">✅ Smooth animations</li></ul></div></div> <div class="modal-actions svelte-ho3w24"><button type="button" class="close-button svelte-ho3w24">Close</button></div></div></div>'), an = nt('<div class="container svelte-ho3w24"><button type="button" class="open-button svelte-ho3w24">Open Svelte Modal</button> <!></div>');
const on = {
  hash: "svelte-ho3w24",
  code: `
  /* Container */.container.svelte-ho3w24 {display:inline-block;}

  /* Open Button */.open-button.svelte-ho3w24 {padding:0.75rem 1.5rem;background-color:#ef4444;color:white;border:none;border-radius:8px;font-size:1rem;font-weight:500;cursor:pointer;transition:background-color 0.2s;}.open-button.svelte-ho3w24:hover {background-color:#dc2626;}.open-button.svelte-ho3w24:focus {outline:2px solid #ef4444;outline-offset:2px;}

  /* Overlay */.overlay.svelte-ho3w24 {position:fixed;inset:0;z-index:50;background-color:rgba(0, 0, 0, 0.5);
    animation: svelte-ho3w24-fadeIn 0.2s ease-out;}

  /* Modal Content */.modal-content.svelte-ho3w24 {position:fixed;left:50%;top:50%;z-index:50;transform:translate(-50%, -50%);max-width:28rem;width:90%;max-height:85vh;overflow-y:auto;border-radius:12px;background-color:white;padding:1.5rem;box-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    animation: svelte-ho3w24-slideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);}

  /* Animations */
  @keyframes svelte-ho3w24-slideIn {
    from {
      opacity: 0;
      transform: translate(-50%, -48%) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }

  @keyframes svelte-ho3w24-fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Modal Header */.modal-header.svelte-ho3w24 {margin-bottom:1rem;}.modal-title.svelte-ho3w24 {font-size:1.5rem;font-weight:700;color:#111827;margin:0;}

  /* Modal Body */.modal-body.svelte-ho3w24 {margin-top:0.5rem;}.modal-description.svelte-ho3w24 {font-size:0.875rem;color:#6b7280;margin:0 0 1rem 0;}.feature-list.svelte-ho3w24 {margin-top:1rem;}.feature-list.svelte-ho3w24 p:where(.svelte-ho3w24) {margin:0 0 0.75rem 0;color:#374151;line-height:1.6;}.feature-list.svelte-ho3w24 ul:where(.svelte-ho3w24) {margin:0;padding-left:1.5rem;color:#374151;line-height:1.8;}.feature-list.svelte-ho3w24 li:where(.svelte-ho3w24) {margin-bottom:0.25rem;}

  /* Modal Actions */.modal-actions.svelte-ho3w24 {margin-top:1.5rem;display:flex;gap:0.75rem;justify-content:flex-end;}.close-button.svelte-ho3w24 {padding:0.625rem 1.25rem;background-color:#ef4444;color:white;border:none;border-radius:6px;font-size:0.875rem;font-weight:500;cursor:pointer;transition:background-color 0.2s;}.close-button.svelte-ho3w24:hover {background-color:#dc2626;}.close-button.svelte-ho3w24:focus {outline:2px solid #ef4444;outline-offset:2px;}

  /* Responsive */
  @media (max-width: 640px) {.modal-content.svelte-ho3w24 {max-width:90vw;padding:1.25rem;}.modal-title.svelte-ho3w24 {font-size:1.25rem;}
  }`
};
function sn(r, e) {
  $t(e, !0), Lt(r, on);
  const t = () => z(O, "$trigger", m), n = () => z(K, "$open", m), i = () => z(j, "$portalled", m), o = () => z(F, "$overlay", m), a = () => z($, "$content", m), c = () => z(A, "$titleEl", m), l = () => z(R, "$descriptionEl", m), v = () => z(P, "$close", m), [m, S] = jt();
  let I = Be(e, "title", 15, "Svelte Modal"), E = Be(e, "description", 15, "This is a modal dialog built with Svelte and Melt UI.");
  const {
    elements: {
      trigger: O,
      overlay: F,
      content: $,
      title: A,
      description: R,
      close: P,
      portalled: j
    },
    states: { open: K }
  } = rn({ forceVisible: !0 });
  var B = {
    get title() {
      return I();
    },
    set title(g = "Svelte Modal") {
      I(g), Ve();
    },
    get description() {
      return E();
    },
    set description(g = "This is a modal dialog built with Svelte and Melt UI.") {
      E(g), Ve();
    }
  }, C = an(), L = W(C);
  Z(L, (g, f) => J?.(), t);
  var V = ce(L, 2);
  {
    var M = (g) => {
      var f = nn(), s = W(f);
      Z(s, (x, D) => J?.(), o);
      var u = ce(s, 2), d = W(u), h = W(d), y = W(h, !0);
      G(h), Z(h, (x, D) => J?.(), c), G(d);
      var w = ce(d, 2), p = W(w), T = W(p, !0);
      G(p), Z(p, (x, D) => J?.(), l), Bt(2), G(w);
      var k = ce(w, 2), _ = W(k);
      Z(_, (x, D) => J?.(), v), G(k), G(u), Z(u, (x, D) => J?.(), a), G(f), Z(f, (x, D) => J?.(), i), Kt(() => {
        Ue(y, I()), Ue(T, E());
      }), Ke(g, f);
    };
    Ut(V, (g) => {
      n() && g(M);
    });
  }
  G(C), Ke(r, C);
  var b = Mt(B);
  return S(), b;
}
customElements.define("svelte-modal", _t(sn, { title: {}, description: {} }, [], [], !0));
export {
  sn as default
};
