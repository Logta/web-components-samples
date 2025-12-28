typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
const rs = 2, Dr = "[", Wn = "[!", Lr = "]", dt = {}, Y = /* @__PURE__ */ Symbol(), is = /* @__PURE__ */ Symbol("filename"), ss = "http://www.w3.org/1999/xhtml", os = "@attach", ar = globalThis.process?.env?.NODE_ENV, _ = ar && !ar.toLowerCase().startsWith("prod");
var Mr = Array.isArray, as = Array.prototype.indexOf, ls = Array.from, Gt = Object.keys, pe = Object.defineProperty, Fe = Object.getOwnPropertyDescriptor, us = Object.getOwnPropertyDescriptors, cs = Object.prototype, fs = Array.prototype, jr = Object.getPrototypeOf, lr = Object.isExtensible;
const De = () => {
};
function Br(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Vr() {
  var e, t, n = new Promise((r, i) => {
    e = r, t = i;
  });
  return { promise: n, resolve: e, reject: t };
}
const G = 2, Yn = 4, zn = 8, Ur = 1 << 24, Oe = 16, xe = 32, Be = 64, fn = 128, be = 512, X = 1024, ne = 2048, we = 4096, me = 8192, ke = 16384, dn = 32768, vt = 65536, Xt = 1 << 17, Kr = 1 << 18, rt = 1 << 19, ds = 1 << 20, je = 32768, An = 1 << 21, vn = 1 << 22, Le = 1 << 23, Ze = /* @__PURE__ */ Symbol("$state"), qr = /* @__PURE__ */ Symbol("legacy props"), vs = /* @__PURE__ */ Symbol(""), Hr = /* @__PURE__ */ Symbol("proxy path"), ct = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), Wr = 3, Ft = 8;
function Yr(e) {
  if (_) {
    const t = new Error(`lifecycle_outside_component
\`${e}(...)\` can only be used during component initialisation
https://svelte.dev/e/lifecycle_outside_component`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function hs() {
  if (_) {
    const e = new Error("async_derived_orphan\nCannot create a `$derived(...)` with an `await` expression outside of an effect tree\nhttps://svelte.dev/e/async_derived_orphan");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function ps() {
  if (_) {
    const e = new Error(`derived_references_self
A derived value cannot reference itself recursively
https://svelte.dev/e/derived_references_self`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/derived_references_self");
}
function bs(e) {
  if (_) {
    const t = new Error(`effect_in_teardown
\`${e}\` cannot be used inside an effect cleanup function
https://svelte.dev/e/effect_in_teardown`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function _s() {
  if (_) {
    const e = new Error("effect_in_unowned_derived\nEffect cannot be created inside a `$derived` value that was not itself created inside an effect\nhttps://svelte.dev/e/effect_in_unowned_derived");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function ys(e) {
  if (_) {
    const t = new Error(`effect_orphan
\`${e}\` can only be used inside an effect (e.g. during component initialisation)
https://svelte.dev/e/effect_orphan`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/effect_orphan");
}
function gs() {
  if (_) {
    const e = new Error(`effect_update_depth_exceeded
Maximum update depth exceeded. This typically indicates that an effect reads and writes the same piece of state
https://svelte.dev/e/effect_update_depth_exceeded`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ms() {
  if (_) {
    const e = new Error(`hydration_failed
Failed to hydrate the application
https://svelte.dev/e/hydration_failed`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/hydration_failed");
}
function ws(e) {
  if (_) {
    const t = new Error(`props_invalid_value
Cannot do \`bind:${e}={undefined}\` when \`${e}\` has a fallback value
https://svelte.dev/e/props_invalid_value`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Es(e) {
  if (_) {
    const t = new Error(`rune_outside_svelte
The \`${e}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files
https://svelte.dev/e/rune_outside_svelte`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/rune_outside_svelte");
}
function $s() {
  if (_) {
    const e = new Error("state_descriptors_fixed\nProperty descriptors defined on `$state` objects must contain `value` and always be `enumerable`, `configurable` and `writable`.\nhttps://svelte.dev/e/state_descriptors_fixed");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ts() {
  if (_) {
    const e = new Error("state_prototype_fixed\nCannot set prototype of `$state` object\nhttps://svelte.dev/e/state_prototype_fixed");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ss() {
  if (_) {
    const e = new Error("state_unsafe_mutation\nUpdating state inside `$derived(...)`, `$inspect(...)` or a template expression is forbidden. If the value should not be reactive, declare it without `$state`\nhttps://svelte.dev/e/state_unsafe_mutation");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function ks() {
  if (_) {
    const e = new Error("svelte_boundary_reset_onerror\nA `<svelte:boundary>` `reset` function cannot be called while an error is still being handled\nhttps://svelte.dev/e/svelte_boundary_reset_onerror");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
var it = "font-weight: bold", st = "font-weight: normal";
function As(e, t, n) {
  _ ? console.warn(`%c[svelte] hydration_attribute_changed
%cThe \`${e}\` attribute on \`${t}\` changed its value between server and client renders. The client value, \`${n}\`, will be ignored in favour of the server value
https://svelte.dev/e/hydration_attribute_changed`, it, st) : console.warn("https://svelte.dev/e/hydration_attribute_changed");
}
function hn(e) {
  _ ? console.warn(
    `%c[svelte] hydration_mismatch
%cHydration failed because the initial UI does not match what was rendered on the server
https://svelte.dev/e/hydration_mismatch`,
    it,
    st
  ) : console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Ns() {
  _ ? console.warn(`%c[svelte] lifecycle_double_unmount
%cTried to unmount a component that was not mounted
https://svelte.dev/e/lifecycle_double_unmount`, it, st) : console.warn("https://svelte.dev/e/lifecycle_double_unmount");
}
function Os() {
  _ ? console.warn("%c[svelte] select_multiple_invalid_value\n%cThe `value` property of a `<select multiple>` element should be an array, but it received a non-array value. The selection will be kept as is.\nhttps://svelte.dev/e/select_multiple_invalid_value", it, st) : console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function mn(e) {
  _ ? console.warn(`%c[svelte] state_proxy_equality_mismatch
%cReactive \`$state(...)\` proxies and the values they proxy have different identities. Because of this, comparisons with \`${e}\` will produce unexpected results
https://svelte.dev/e/state_proxy_equality_mismatch`, it, st) : console.warn("https://svelte.dev/e/state_proxy_equality_mismatch");
}
function xs() {
  _ ? console.warn(`%c[svelte] state_proxy_unmount
%cTried to unmount a state proxy, rather than a component
https://svelte.dev/e/state_proxy_unmount`, it, st) : console.warn("https://svelte.dev/e/state_proxy_unmount");
}
function Is() {
  _ ? console.warn("%c[svelte] svelte_boundary_reset_noop\n%cA `<svelte:boundary>` `reset` function only resets the boundary the first time it is called\nhttps://svelte.dev/e/svelte_boundary_reset_noop", it, st) : console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let D = !1;
function Ce(e) {
  D = e;
}
let K;
function Ee(e) {
  if (e === null)
    throw hn(), dt;
  return K = e;
}
function Gn() {
  return Ee(/* @__PURE__ */ Ve(K));
}
function ce(e) {
  if (D) {
    if (/* @__PURE__ */ Ve(K) !== null)
      throw hn(), dt;
    K = e;
  }
}
function zr(e = 1) {
  if (D) {
    for (var t = e, n = K; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Ve(n);
    K = n;
  }
}
function Gr(e = !0) {
  for (var t = 0, n = K; ; ) {
    if (n.nodeType === Ft) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === Lr) {
        if (t === 0) return n;
        t -= 1;
      } else (r === Dr || r === Wn) && (t += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ve(n)
    );
    e && n.remove(), n = i;
  }
}
function Ps(e) {
  if (!e || e.nodeType !== Ft)
    throw hn(), dt;
  return (
    /** @type {Comment} */
    e.data
  );
}
function Xr(e) {
  return e === this.v;
}
function Zr(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Rs(e) {
  return !Zr(e, this.v);
}
let Cs = !1;
function ye(e, t) {
  return e.label = t, Jr(e.v, t), e;
}
function Jr(e, t) {
  return e?.[Hr]?.(t), e;
}
function Fs(e) {
  const t = new Error(), n = Ds();
  return n.length === 0 ? null : (n.unshift(`
`), pe(t, "stack", {
    value: n.join(`
`)
  }), pe(t, "name", {
    value: e
  }), /** @type {Error & { stack: string }} */
  t);
}
function Ds() {
  const e = Error.stackTraceLimit;
  Error.stackTraceLimit = 1 / 0;
  const t = new Error().stack;
  if (Error.stackTraceLimit = e, !t) return [];
  const n = t.split(`
`), r = [];
  for (let i = 0; i < n.length; i++) {
    const s = n[i], o = s.replaceAll("\\", "/");
    if (s.trim() !== "Error") {
      if (s.includes("validate_each_keys"))
        return [];
      o.includes("svelte/src/internal") || o.includes("node_modules/.vite") || r.push(s);
    }
  }
  return r;
}
let Z = null;
function ht(e) {
  Z = e;
}
let pt = null;
function Zt(e) {
  pt = e;
}
let Dt = null;
function ur(e) {
  Dt = e;
}
function Xn(e, t = !1, n) {
  Z = {
    p: Z,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  }, _ && (Z.function = n, Dt = n);
}
function Zn(e) {
  var t = (
    /** @type {ComponentContext} */
    Z
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      pi(r);
  }
  return e !== void 0 && (t.x = e), t.i = !0, Z = t.p, _ && (Dt = Z?.function ?? null), e ?? /** @type {T} */
  {};
}
function Qr() {
  return !0;
}
let ze = [];
function ei() {
  var e = ze;
  ze = [], Br(e);
}
function yt(e) {
  if (ze.length === 0 && !St) {
    var t = ze;
    queueMicrotask(() => {
      t === ze && ei();
    });
  }
  ze.push(e);
}
function Ls() {
  for (; ze.length > 0; )
    ei();
}
const Nn = /* @__PURE__ */ new WeakMap();
function ti(e) {
  var t = P;
  if (t === null)
    return I.f |= Le, e;
  if (_ && e instanceof Error && !Nn.has(e) && Nn.set(e, Ms(e, t)), (t.f & dn) === 0) {
    if ((t.f & fn) === 0)
      throw _ && !t.parent && e instanceof Error && ni(e), e;
    t.b.error(e);
  } else
    bt(e, t);
}
function bt(e, t) {
  for (; t !== null; ) {
    if ((t.f & fn) !== 0)
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    t = t.parent;
  }
  throw _ && e instanceof Error && ni(e), e;
}
function Ms(e, t) {
  const n = Fe(e, "message");
  if (!(n && !n.configurable)) {
    for (var r = er ? "  " : "	", i = `
${r}in ${t.fn?.name || "<unknown>"}`, s = t.ctx; s !== null; )
      i += `
${r}in ${s.function?.[is].split("/").pop()}`, s = s.p;
    return {
      message: e.message + `
${i}
`,
      stack: e.stack?.split(`
`).filter((o) => !o.includes("svelte/src/internal")).join(`
`)
    };
  }
}
function ni(e) {
  const t = Nn.get(e);
  t && (pe(e, "message", {
    value: t.message
  }), pe(e, "stack", {
    value: t.stack
  }));
}
const Bt = /* @__PURE__ */ new Set();
let B = null, le = null, oe = [], pn = null, On = !1, St = !1;
class ve {
  committed = !1;
  /**
   * The current values of any sources that are updated in this batch
   * They keys of this map are identical to `this.#previous`
   * @type {Map<Source, any>}
   */
  current = /* @__PURE__ */ new Map();
  /**
   * The values of any sources that are updated in this batch _before_ those updates took place.
   * They keys of this map are identical to `this.#current`
   * @type {Map<Source, any>}
   */
  previous = /* @__PURE__ */ new Map();
  /**
   * When the batch is committed (and the DOM is updated), we need to remove old branches
   * and append new ones by calling the functions added inside (if/each/key/etc) blocks
   * @type {Set<() => void>}
   */
  #t = /* @__PURE__ */ new Set();
  /**
   * If a fork is discarded, we need to destroy any effects that are no longer needed
   * @type {Set<(batch: Batch) => void>}
   */
  #e = /* @__PURE__ */ new Set();
  /**
   * The number of async effects that are currently in flight
   */
  #n = 0;
  /**
   * The number of async effects that are currently in flight, _not_ inside a pending boundary
   */
  #r = 0;
  /**
   * A deferred that resolves when the batch is committed, used with `settled()`
   * TODO replace with Promise.withResolvers once supported widely enough
   * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
   */
  #l = null;
  /**
   * Deferred effects (which run after async work has completed) that are DIRTY
   * @type {Set<Effect>}
   */
  #s = /* @__PURE__ */ new Set();
  /**
   * Deferred effects that are MAYBE_DIRTY
   * @type {Set<Effect>}
   */
  #i = /* @__PURE__ */ new Set();
  /**
   * A set of branches that still exist, but will be destroyed when this batch
   * is committed — we skip over these during `process`
   * @type {Set<Effect>}
   */
  skipped_effects = /* @__PURE__ */ new Set();
  is_fork = !1;
  is_deferred() {
    return this.is_fork || this.#r > 0;
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    oe = [], this.apply();
    var n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: []
    };
    for (const r of t)
      this.#o(r, n);
    this.is_fork || this.#c(), this.is_deferred() ? (this.#a(n.effects), this.#a(n.render_effects)) : (B = null, cr(n.render_effects), cr(n.effects), this.#l?.resolve()), le = null;
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {EffectTarget} target
   */
  #o(t, n) {
    t.f ^= X;
    for (var r = t.first; r !== null; ) {
      var i = r.f, s = (i & (xe | Be)) !== 0, o = s && (i & X) !== 0, a = o || (i & me) !== 0 || this.skipped_effects.has(r);
      if ((r.f & fn) !== 0 && r.b?.is_pending() && (n = {
        parent: n,
        effect: r,
        effects: [],
        render_effects: []
      }), !a && r.fn !== null) {
        s ? r.f ^= X : (i & Yn) !== 0 ? n.effects.push(r) : Mt(r) && ((r.f & Oe) !== 0 && this.#s.add(r), Rt(r));
        var l = r.first;
        if (l !== null) {
          r = l;
          continue;
        }
      }
      var u = r.parent;
      for (r = r.next; r === null && u !== null; )
        u === n.effect && (this.#a(n.effects), this.#a(n.render_effects), n = /** @type {EffectTarget} */
        n.parent), r = u.next, u = u.parent;
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #a(t) {
    for (const n of t)
      (n.f & ne) !== 0 ? this.#s.add(n) : (n.f & we) !== 0 && this.#i.add(n), this.#u(n.deps), J(n, X);
  }
  /**
   * @param {Value[] | null} deps
   */
  #u(t) {
    if (t !== null)
      for (const n of t)
        (n.f & G) === 0 || (n.f & je) === 0 || (n.f ^= je, this.#u(
          /** @type {Derived} */
          n.deps
        ));
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, n) {
    this.previous.has(t) || this.previous.set(t, n), (t.f & Le) === 0 && (this.current.set(t, t.v), le?.set(t, t.v));
  }
  activate() {
    B = this, this.apply();
  }
  deactivate() {
    B === this && (B = null, le = null);
  }
  flush() {
    if (this.activate(), oe.length > 0) {
      if (ri(), B !== null && B !== this)
        return;
    } else this.#n === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const t of this.#e) t(this);
    this.#e.clear();
  }
  #c() {
    if (this.#r === 0) {
      for (const t of this.#t) t();
      this.#t.clear();
    }
    this.#n === 0 && this.#f();
  }
  #f() {
    if (Bt.size > 1) {
      this.previous.clear();
      var t = le, n = !0, r = {
        parent: null,
        effect: null,
        effects: [],
        render_effects: []
      };
      for (const s of Bt) {
        if (s === this) {
          n = !1;
          continue;
        }
        const o = [];
        for (const [l, u] of this.current) {
          if (s.current.has(l))
            if (n && u !== s.current.get(l))
              s.current.set(l, u);
            else
              continue;
          o.push(l);
        }
        if (o.length === 0)
          continue;
        const a = [...s.current.keys()].filter((l) => !this.current.has(l));
        if (a.length > 0) {
          var i = oe;
          oe = [];
          const l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
          for (const v of o)
            ii(v, a, l, u);
          if (oe.length > 0) {
            B = s, s.apply();
            for (const v of oe)
              s.#o(v, r);
            s.deactivate();
          }
          oe = i;
        }
      }
      B = null, le = t;
    }
    this.committed = !0, Bt.delete(this);
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    this.#n += 1, t && (this.#r += 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(t) {
    this.#n -= 1, t && (this.#r -= 1), this.revive();
  }
  revive() {
    for (const t of this.#s)
      this.#i.delete(t), J(t, ne), et(t);
    for (const t of this.#i)
      J(t, we), et(t);
    this.flush();
  }
  /** @param {() => void} fn */
  oncommit(t) {
    this.#t.add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    this.#e.add(t);
  }
  settled() {
    return (this.#l ??= Vr()).promise;
  }
  static ensure() {
    if (B === null) {
      const t = B = new ve();
      Bt.add(B), St || ve.enqueue(() => {
        B === t && t.flush();
      });
    }
    return B;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    yt(t);
  }
  apply() {
  }
}
function xt(e) {
  var t = St;
  St = !0;
  try {
    for (var n; ; ) {
      if (Ls(), oe.length === 0 && (B?.flush(), oe.length === 0))
        return pn = null, /** @type {T} */
        n;
      ri();
    }
  } finally {
    St = t;
  }
}
function ri() {
  var e = Je;
  On = !0;
  var t = _ ? /* @__PURE__ */ new Set() : null;
  try {
    var n = 0;
    for (tn(!0); oe.length > 0; ) {
      var r = ve.ensure();
      if (n++ > 1e3) {
        if (_) {
          var i = /* @__PURE__ */ new Map();
          for (const o of r.current.keys())
            for (const [a, l] of o.updated ?? []) {
              var s = i.get(a);
              s || (s = { error: l.error, count: 0 }, i.set(a, s)), s.count += l.count;
            }
          for (const o of i.values())
            o.error && console.error(o.error);
        }
        js();
      }
      if (r.process(oe), Me.clear(), _)
        for (const o of r.current.keys())
          t.add(o);
    }
  } finally {
    if (On = !1, tn(e), pn = null, _)
      for (
        const o of
        /** @type {Set<Source>} */
        t
      )
        o.updated = null;
  }
}
function js() {
  try {
    gs();
  } catch (e) {
    _ && pe(e, "stack", { value: "" }), bt(e, pn);
  }
}
let Te = null;
function cr(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (ke | me)) === 0 && Mt(r) && (Te = /* @__PURE__ */ new Set(), Rt(r), r.deps === null && r.first === null && r.nodes === null && (r.teardown === null && r.ac === null ? Ei(r) : r.fn = null), Te?.size > 0)) {
        Me.clear();
        for (const i of Te) {
          if ((i.f & (ke | me)) !== 0) continue;
          const s = [i];
          let o = i.parent;
          for (; o !== null; )
            Te.has(o) && (Te.delete(o), s.push(o)), o = o.parent;
          for (let a = s.length - 1; a >= 0; a--) {
            const l = s[a];
            (l.f & (ke | me)) === 0 && Rt(l);
          }
        }
        Te.clear();
      }
    }
    Te = null;
  }
}
function ii(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const s = i.f;
      (s & G) !== 0 ? ii(
        /** @type {Derived} */
        i,
        t,
        n,
        r
      ) : (s & (vn | Oe)) !== 0 && (s & ne) === 0 && si(i, t, r) && (J(i, ne), et(
        /** @type {Effect} */
        i
      ));
    }
}
function si(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (t.includes(i))
        return !0;
      if ((i.f & G) !== 0 && si(
        /** @type {Derived} */
        i,
        t,
        n
      ))
        return n.set(
          /** @type {Derived} */
          i,
          !0
        ), !0;
    }
  return n.set(e, !1), !1;
}
function et(e) {
  for (var t = pn = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (On && t === P && (n & Oe) !== 0 && (n & Kr) === 0)
      return;
    if ((n & (Be | xe)) !== 0) {
      if ((n & X) === 0) return;
      t.f ^= X;
    }
  }
  oe.push(t);
}
function Bs(e) {
  let t = 0, n = Lt(0), r;
  return _ && ye(n, "createSubscriber version"), () => {
    It() && (H(n), bi(() => (t === 0 && (r = jt(() => e(() => kt(n)))), t += 1, () => {
      yt(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, kt(n));
      });
    })));
  };
}
var Vs = vt | rt | fn;
function Us(e, t, n) {
  new Ks(e, t, n);
}
class Ks {
  /** @type {Boundary | null} */
  parent;
  #t = !1;
  /** @type {TemplateNode} */
  #e;
  /** @type {TemplateNode | null} */
  #n = D ? K : null;
  /** @type {BoundaryProps} */
  #r;
  /** @type {((anchor: Node) => void)} */
  #l;
  /** @type {Effect} */
  #s;
  /** @type {Effect | null} */
  #i = null;
  /** @type {Effect | null} */
  #o = null;
  /** @type {Effect | null} */
  #a = null;
  /** @type {DocumentFragment | null} */
  #u = null;
  /** @type {TemplateNode | null} */
  #c = null;
  #f = 0;
  #v = 0;
  #h = !1;
  /**
   * A source containing the number of pending async deriveds/expressions.
   * Only created if `$effect.pending()` is used inside the boundary,
   * otherwise updating the source results in needless `Batch.ensure()`
   * calls followed by no-op flushes
   * @type {Source<number> | null}
   */
  #d = null;
  #g = Bs(() => (this.#d = Lt(this.#f), _ && ye(this.#d, "$effect.pending()"), () => {
    this.#d = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, r) {
    this.#e = t, this.#r = n, this.#l = r, this.parent = /** @type {Effect} */
    P.b, this.#t = !!this.#r.pending, this.#s = yi(() => {
      if (P.b = this, D) {
        const s = this.#n;
        Gn(), /** @type {Comment} */
        s.nodeType === Ft && /** @type {Comment} */
        s.data === Wn ? this.#w() : this.#m();
      } else {
        var i = this.#_();
        try {
          this.#i = de(() => r(i));
        } catch (s) {
          this.error(s);
        }
        this.#v > 0 ? this.#b() : this.#t = !1;
      }
      return () => {
        this.#c?.remove();
      };
    }, Vs), D && (this.#e = K);
  }
  #m() {
    try {
      this.#i = de(() => this.#l(this.#e));
    } catch (t) {
      this.error(t);
    }
    this.#t = !1;
  }
  #w() {
    const t = this.#r.pending;
    t && (this.#o = de(() => t(this.#e)), ve.enqueue(() => {
      var n = this.#_();
      this.#i = this.#p(() => (ve.ensure(), de(() => this.#l(n)))), this.#v > 0 ? this.#b() : (Nt(
        /** @type {Effect} */
        this.#o,
        () => {
          this.#o = null;
        }
      ), this.#t = !1);
    }));
  }
  #_() {
    var t = this.#e;
    return this.#t && (this.#c = tt(), this.#e.before(this.#c), t = this.#c), t;
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return this.#t || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!this.#r.pending;
  }
  /**
   * @param {() => Effect | null} fn
   */
  #p(t) {
    var n = P, r = I, i = Z;
    he(this.#s), te(this.#s), ht(this.#s.ctx);
    try {
      return t();
    } catch (s) {
      return ti(s), null;
    } finally {
      he(n), te(r), ht(i);
    }
  }
  #b() {
    const t = (
      /** @type {(anchor: Node) => void} */
      this.#r.pending
    );
    this.#i !== null && (this.#u = document.createDocumentFragment(), this.#u.append(
      /** @type {TemplateNode} */
      this.#c
    ), Si(this.#i, this.#u)), this.#o === null && (this.#o = de(() => t(this.#e)));
  }
  /**
   * Updates the pending count associated with the currently visible pending snippet,
   * if any, such that we can replace the snippet with content once work is done
   * @param {1 | -1} d
   */
  #y(t) {
    if (!this.has_pending_snippet()) {
      this.parent && this.parent.#y(t);
      return;
    }
    this.#v += t, this.#v === 0 && (this.#t = !1, this.#o && Nt(this.#o, () => {
      this.#o = null;
    }), this.#u && (this.#e.before(this.#u), this.#u = null));
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(t) {
    this.#y(t), this.#f += t, this.#d && Qt(this.#d, this.#f);
  }
  get_effect_pending() {
    return this.#g(), H(
      /** @type {Source<number>} */
      this.#d
    );
  }
  /** @param {unknown} error */
  error(t) {
    var n = this.#r.onerror;
    let r = this.#r.failed;
    if (this.#h || !n && !r)
      throw t;
    this.#i && (z(this.#i), this.#i = null), this.#o && (z(this.#o), this.#o = null), this.#a && (z(this.#a), this.#a = null), D && (Ee(
      /** @type {TemplateNode} */
      this.#n
    ), zr(), Ee(Gr()));
    var i = !1, s = !1;
    const o = () => {
      if (i) {
        Is();
        return;
      }
      i = !0, s && ks(), ve.ensure(), this.#f = 0, this.#a !== null && Nt(this.#a, () => {
        this.#a = null;
      }), this.#t = this.has_pending_snippet(), this.#i = this.#p(() => (this.#h = !1, de(() => this.#l(this.#e)))), this.#v > 0 ? this.#b() : this.#t = !1;
    };
    var a = I;
    try {
      te(null), s = !0, n?.(t, o), s = !1;
    } catch (l) {
      bt(l, this.#s && this.#s.parent);
    } finally {
      te(a);
    }
    r && yt(() => {
      this.#a = this.#p(() => {
        ve.ensure(), this.#h = !0;
        try {
          return de(() => {
            r(
              this.#e,
              () => t,
              () => o
            );
          });
        } catch (l) {
          return bt(
            l,
            /** @type {Effect} */
            this.#s.parent
          ), null;
        } finally {
          this.#h = !1;
        }
      });
    });
  }
}
function oi(e, t, n, r) {
  const i = ai;
  if (n.length === 0 && e.length === 0) {
    r(t.map(i));
    return;
  }
  var s = B, o = (
    /** @type {Effect} */
    P
  ), a = qs();
  function l() {
    Promise.all(n.map((u) => /* @__PURE__ */ Ws(u))).then((u) => {
      a();
      try {
        r([...t.map(i), ...u]);
      } catch (v) {
        (o.f & ke) === 0 && bt(v, o);
      }
      s?.deactivate(), Jt();
    }).catch((u) => {
      bt(u, o);
    });
  }
  e.length > 0 ? Promise.all(e).then(() => {
    a();
    try {
      return l();
    } finally {
      s?.deactivate(), Jt();
    }
  }) : l();
}
function qs() {
  var e = P, t = I, n = Z, r = B;
  if (_)
    var i = pt;
  return function(o = !0) {
    he(e), te(t), ht(n), o && r?.activate(), _ && Zt(i);
  };
}
function Jt() {
  he(null), te(null), ht(null), _ && Zt(null);
}
const Hs = /* @__PURE__ */ new Set();
// @__NO_SIDE_EFFECTS__
function ai(e) {
  var t = G | ne, n = I !== null && (I.f & G) !== 0 ? (
    /** @type {Derived} */
    I
  ) : null;
  return P !== null && (P.f |= rt), {
    ctx: Z,
    deps: null,
    effects: null,
    equals: Xr,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Y
    ),
    wv: 0,
    parent: n ?? P,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Ws(e, t) {
  let n = (
    /** @type {Effect | null} */
    P
  );
  n === null && hs();
  var r = (
    /** @type {Boundary} */
    n.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = Lt(
    /** @type {V} */
    Y
  ), o = !I, a = /* @__PURE__ */ new Map();
  return lo(() => {
    var l = Vr();
    i = l.promise;
    try {
      Promise.resolve(e()).then(l.resolve, l.reject).then(() => {
        u === B && u.committed && u.deactivate(), Jt();
      });
    } catch (c) {
      l.reject(c), Jt();
    }
    var u = (
      /** @type {Batch} */
      B
    );
    if (o) {
      var v = !r.is_pending();
      r.update_pending_count(1), u.increment(v), a.get(u)?.reject(ct), a.delete(u), a.set(u, l);
    }
    const f = (c, h = void 0) => {
      if (u.activate(), h)
        h !== ct && (s.f |= Le, Qt(s, h));
      else {
        (s.f & Le) !== 0 && (s.f ^= Le), Qt(s, c);
        for (const [b, w] of a) {
          if (a.delete(b), b === u) break;
          w.reject(ct);
        }
      }
      o && (r.update_pending_count(-1), u.decrement(v));
    };
    l.promise.then(f, (c) => f(null, c || "unknown"));
  }), nr(() => {
    for (const l of a.values())
      l.reject(ct);
  }), _ && (s.f |= vn), new Promise((l) => {
    function u(v) {
      function f() {
        v === i ? l(s) : u(i);
      }
      v.then(f, f);
    }
    u(i);
  });
}
function xn(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      z(
        /** @type {Effect} */
        t[n]
      );
  }
}
let wn = [];
function Ys(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & G) === 0)
      return (t.f & ke) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
function Jn(e) {
  var t, n = P;
  if (he(Ys(e)), _) {
    let r = _t;
    fr(/* @__PURE__ */ new Set());
    try {
      wn.includes(e) && ps(), wn.push(e), e.f &= ~je, xn(e), t = Pn(e);
    } finally {
      he(n), fr(r), wn.pop();
    }
  } else
    try {
      e.f &= ~je, xn(e), t = Pn(e);
    } finally {
      he(n);
    }
  return t;
}
function li(e) {
  var t = Jn(e);
  if (e.equals(t) || (B?.is_fork || (e.v = t), e.wv = Ai()), !ot)
    if (le !== null)
      (It() || B?.is_fork) && le.set(e, t);
    else {
      var n = (e.f & be) === 0 ? we : X;
      J(e, n);
    }
}
let _t = /* @__PURE__ */ new Set();
const Me = /* @__PURE__ */ new Map();
function fr(e) {
  _t = e;
}
let Qn = !1;
function zs() {
  Qn = !0;
}
function Lt(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Xr,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function $e(e, t) {
  const n = Lt(e);
  return vo(n), n;
}
// @__NO_SIDE_EFFECTS__
function ui(e, t = !1, n = !0) {
  const r = Lt(e);
  return t || (r.equals = Rs), r;
}
function ae(e, t, n = !1) {
  I !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!ge || (I.f & Xt) !== 0) && Qr() && (I.f & (G | Oe | vn | Xt)) !== 0 && !Ae?.includes(e) && Ss();
  let r = n ? Ge(t) : t;
  return _ && Jr(
    r,
    /** @type {string} */
    e.label
  ), Qt(e, r);
}
function Qt(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    ot ? Me.set(e, t) : Me.set(e, n), e.v = t;
    var r = ve.ensure();
    if (r.capture(e, n), _) {
      if (P !== null) {
        e.updated ??= /* @__PURE__ */ new Map();
        const i = (e.updated.get("")?.count ?? 0) + 1;
        if (e.updated.set("", { error: (
          /** @type {any} */
          null
        ), count: i }), i > 5) {
          const s = Fs("updated at");
          if (s !== null) {
            let o = e.updated.get(s.stack);
            o || (o = { error: s, count: 0 }, e.updated.set(s.stack, o)), o.count++;
          }
        }
      }
      P !== null && (e.set_during_effect = !0);
    }
    (e.f & G) !== 0 && ((e.f & ne) !== 0 && Jn(
      /** @type {Derived} */
      e
    ), J(e, (e.f & be) !== 0 ? X : we)), e.wv = Ai(), fi(e, ne), P !== null && (P.f & X) !== 0 && (P.f & (xe | Be)) === 0 && (se === null ? ho([e]) : se.push(e)), !r.is_fork && _t.size > 0 && !Qn && ci();
  }
  return t;
}
function ci() {
  Qn = !1;
  var e = Je;
  tn(!0);
  const t = Array.from(_t);
  try {
    for (const n of t)
      (n.f & X) !== 0 && J(n, we), Mt(n) && Rt(n);
  } finally {
    tn(e);
  }
  _t.clear();
}
function dr(e, t = 1) {
  var n = H(e), r = t === 1 ? n++ : n--;
  return ae(e, n), r;
}
function kt(e) {
  ae(e, e.v + 1);
}
function fi(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = n.length, i = 0; i < r; i++) {
      var s = n[i], o = s.f;
      if (_ && (o & Xt) !== 0) {
        _t.add(s);
        continue;
      }
      var a = (o & ne) === 0;
      if (a && J(s, t), (o & G) !== 0) {
        var l = (
          /** @type {Derived} */
          s
        );
        le?.delete(l), (o & je) === 0 && (o & be && (s.f |= je), fi(l, we));
      } else a && ((o & Oe) !== 0 && Te !== null && Te.add(
        /** @type {Effect} */
        s
      ), et(
        /** @type {Effect} */
        s
      ));
    }
}
const Gs = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
function Ge(e) {
  if (typeof e != "object" || e === null || Ze in e)
    return e;
  const t = jr(e);
  if (t !== cs && t !== fs)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Mr(e), i = /* @__PURE__ */ $e(0), s = Qe, o = (v) => {
    if (Qe === s)
      return v();
    var f = I, c = Qe;
    te(null), br(s);
    var h = v();
    return te(f), br(c), h;
  };
  r && (n.set("length", /* @__PURE__ */ $e(
    /** @type {any[]} */
    e.length
  )), _ && (e = /** @type {any} */
  Js(
    /** @type {any[]} */
    e
  )));
  var a = "";
  let l = !1;
  function u(v) {
    if (!l) {
      l = !0, a = v, ye(i, `${a} version`);
      for (const [f, c] of n)
        ye(c, Ke(a, f));
      l = !1;
    }
  }
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(v, f, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && $s();
        var h = n.get(f);
        return h === void 0 ? h = o(() => {
          var b = /* @__PURE__ */ $e(c.value);
          return n.set(f, b), _ && typeof f == "string" && ye(b, Ke(a, f)), b;
        }) : ae(h, c.value, !0), !0;
      },
      deleteProperty(v, f) {
        var c = n.get(f);
        if (c === void 0) {
          if (f in v) {
            const h = o(() => /* @__PURE__ */ $e(Y));
            n.set(f, h), kt(i), _ && ye(h, Ke(a, f));
          }
        } else
          ae(c, Y), kt(i);
        return !0;
      },
      get(v, f, c) {
        if (f === Ze)
          return e;
        if (_ && f === Hr)
          return u;
        var h = n.get(f), b = f in v;
        if (h === void 0 && (!b || Fe(v, f)?.writable) && (h = o(() => {
          var $ = Ge(b ? v[f] : Y), E = /* @__PURE__ */ $e($);
          return _ && ye(E, Ke(a, f)), E;
        }), n.set(f, h)), h !== void 0) {
          var w = H(h);
          return w === Y ? void 0 : w;
        }
        return Reflect.get(v, f, c);
      },
      getOwnPropertyDescriptor(v, f) {
        var c = Reflect.getOwnPropertyDescriptor(v, f);
        if (c && "value" in c) {
          var h = n.get(f);
          h && (c.value = H(h));
        } else if (c === void 0) {
          var b = n.get(f), w = b?.v;
          if (b !== void 0 && w !== Y)
            return {
              enumerable: !0,
              configurable: !0,
              value: w,
              writable: !0
            };
        }
        return c;
      },
      has(v, f) {
        if (f === Ze)
          return !0;
        var c = n.get(f), h = c !== void 0 && c.v !== Y || Reflect.has(v, f);
        if (c !== void 0 || P !== null && (!h || Fe(v, f)?.writable)) {
          c === void 0 && (c = o(() => {
            var w = h ? Ge(v[f]) : Y, $ = /* @__PURE__ */ $e(w);
            return _ && ye($, Ke(a, f)), $;
          }), n.set(f, c));
          var b = H(c);
          if (b === Y)
            return !1;
        }
        return h;
      },
      set(v, f, c, h) {
        var b = n.get(f), w = f in v;
        if (r && f === "length")
          for (var $ = c; $ < /** @type {Source<number>} */
          b.v; $ += 1) {
            var E = n.get($ + "");
            E !== void 0 ? ae(E, Y) : $ in v && (E = o(() => /* @__PURE__ */ $e(Y)), n.set($ + "", E), _ && ye(E, Ke(a, $)));
          }
        if (b === void 0)
          (!w || Fe(v, f)?.writable) && (b = o(() => /* @__PURE__ */ $e(void 0)), _ && ye(b, Ke(a, f)), ae(b, Ge(c)), n.set(f, b));
        else {
          w = b.v !== Y;
          var L = o(() => Ge(c));
          ae(b, L);
        }
        var M = Reflect.getOwnPropertyDescriptor(v, f);
        if (M?.set && M.set.call(h, c), !w) {
          if (r && typeof f == "string") {
            var C = (
              /** @type {Source<number>} */
              n.get("length")
            ), W = Number(f);
            Number.isInteger(W) && W >= C.v && ae(C, W + 1);
          }
          kt(i);
        }
        return !0;
      },
      ownKeys(v) {
        H(i);
        var f = Reflect.ownKeys(v).filter((b) => {
          var w = n.get(b);
          return w === void 0 || w.v !== Y;
        });
        for (var [c, h] of n)
          h.v !== Y && !(c in v) && f.push(c);
        return f;
      },
      setPrototypeOf() {
        Ts();
      }
    }
  );
}
function Ke(e, t) {
  return typeof t == "symbol" ? `${e}[Symbol(${t.description ?? ""})]` : Gs.test(t) ? `${e}.${t}` : /^\d+$/.test(t) ? `${e}[${t}]` : `${e}['${t}']`;
}
function At(e) {
  try {
    if (e !== null && typeof e == "object" && Ze in e)
      return e[Ze];
  } catch {
  }
  return e;
}
function Xs(e, t) {
  return Object.is(At(e), At(t));
}
const Zs = /* @__PURE__ */ new Set([
  "copyWithin",
  "fill",
  "pop",
  "push",
  "reverse",
  "shift",
  "sort",
  "splice",
  "unshift"
]);
function Js(e) {
  return new Proxy(e, {
    get(t, n, r) {
      var i = Reflect.get(t, n, r);
      return Zs.has(
        /** @type {string} */
        n
      ) ? function(...s) {
        zs();
        var o = i.apply(this, s);
        return ci(), o;
      } : i;
    }
  });
}
function Qs() {
  const e = Array.prototype, t = Array.__svelte_cleanup;
  t && t();
  const { indexOf: n, lastIndexOf: r, includes: i } = e;
  e.indexOf = function(s, o) {
    const a = n.call(this, s, o);
    if (a === -1) {
      for (let l = o ?? 0; l < this.length; l += 1)
        if (At(this[l]) === s) {
          mn("array.indexOf(...)");
          break;
        }
    }
    return a;
  }, e.lastIndexOf = function(s, o) {
    const a = r.call(this, s, o ?? this.length - 1);
    if (a === -1) {
      for (let l = 0; l <= (o ?? this.length - 1); l += 1)
        if (At(this[l]) === s) {
          mn("array.lastIndexOf(...)");
          break;
        }
    }
    return a;
  }, e.includes = function(s, o) {
    const a = i.call(this, s, o);
    if (!a) {
      for (let l = 0; l < this.length; l += 1)
        if (At(this[l]) === s) {
          mn("array.includes(...)");
          break;
        }
    }
    return a;
  }, Array.__svelte_cleanup = () => {
    e.indexOf = n, e.lastIndexOf = r, e.includes = i;
  };
}
var vr, er, di, vi;
function In() {
  if (vr === void 0) {
    vr = window, er = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    di = Fe(t, "firstChild").get, vi = Fe(t, "nextSibling").get, lr(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), lr(n) && (n.__t = void 0), _ && (e.__svelte_meta = null, Qs());
  }
}
function tt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function en(e) {
  return (
    /** @type {TemplateNode | null} */
    di.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Ve(e) {
  return (
    /** @type {TemplateNode | null} */
    vi.call(e)
  );
}
function fe(e, t) {
  if (!D)
    return /* @__PURE__ */ en(e);
  var n = /* @__PURE__ */ en(K);
  if (n === null)
    n = K.appendChild(tt());
  else if (t && n.nodeType !== Wr) {
    var r = tt();
    return n?.before(r), Ee(r), r;
  }
  return Ee(n), n;
}
function Xe(e, t = 1, n = !1) {
  let r = D ? K : e;
  for (var i; t--; )
    i = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ Ve(r);
  if (!D)
    return r;
  if (n && r?.nodeType !== Wr) {
    var s = tt();
    return r === null ? i?.after(s) : r.before(s), Ee(s), s;
  }
  return Ee(r), r;
}
function eo(e) {
  e.textContent = "";
}
function to() {
  return !1;
}
function no(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, yt(() => {
      document.activeElement === n && e.focus();
    });
  }
}
let hr = !1;
function ro() {
  hr || (hr = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        if (!e.defaultPrevented)
          for (
            const t of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            t.__on_r?.();
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
    { capture: !0 }
  ));
}
function tr(e) {
  var t = I, n = P;
  te(null), he(null);
  try {
    return e();
  } finally {
    te(t), he(n);
  }
}
function io(e) {
  P === null && (I === null && ys(e), _s()), ot && bs(e);
}
function so(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function _e(e, t, n) {
  var r = P;
  if (_)
    for (; r !== null && (r.f & Xt) !== 0; )
      r = r.parent;
  r !== null && (r.f & me) !== 0 && (e |= me);
  var i = {
    ctx: Z,
    deps: null,
    nodes: null,
    f: e | ne | be,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: r,
    b: r && r.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  if (_ && (i.component_function = Dt), n)
    try {
      Rt(i), i.f |= dn;
    } catch (a) {
      throw z(i), a;
    }
  else t !== null && et(i);
  var s = i;
  if (n && s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
  (s.f & rt) === 0 && (s = s.first, (e & Oe) !== 0 && (e & vt) !== 0 && s !== null && (s.f |= vt)), s !== null && (s.parent = r, r !== null && so(s, r), I !== null && (I.f & G) !== 0 && (e & Be) === 0)) {
    var o = (
      /** @type {Derived} */
      I
    );
    (o.effects ??= []).push(s);
  }
  return i;
}
function It() {
  return I !== null && !ge;
}
function nr(e) {
  const t = _e(zn, null, !1);
  return J(t, X), t.teardown = e, t;
}
function hi(e) {
  io("$effect"), _ && pe(e, "name", {
    value: "$effect"
  });
  var t = (
    /** @type {Effect} */
    P.f
  ), n = !I && (t & xe) !== 0 && (t & dn) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      Z
    );
    (r.e ??= []).push(e);
  } else
    return pi(e);
}
function pi(e) {
  return _e(Yn | ds, e, !1);
}
function oo(e) {
  ve.ensure();
  const t = _e(Be | rt, e, !0);
  return () => {
    z(t);
  };
}
function ao(e) {
  ve.ensure();
  const t = _e(Be | rt, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Nt(t, () => {
      z(t), r(void 0);
    }) : (z(t), r(void 0));
  });
}
function bn(e) {
  return _e(Yn, e, !1);
}
function lo(e) {
  return _e(vn | rt, e, !0);
}
function bi(e, t = 0) {
  return _e(zn | t, e, !0);
}
function _i(e, t = [], n = [], r = []) {
  oi(r, t, n, (i) => {
    _e(zn, () => e(...i.map(H)), !0);
  });
}
function yi(e, t = 0) {
  var n = _e(Oe | t, e, !0);
  return _ && (n.dev_stack = pt), n;
}
function gi(e, t = 0) {
  var n = _e(Ur | t, e, !0);
  return _ && (n.dev_stack = pt), n;
}
function de(e) {
  return _e(xe | rt, e, !0);
}
function mi(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = ot, r = I;
    pr(!0), te(null);
    try {
      t.call(null);
    } finally {
      pr(n), te(r);
    }
  }
}
function wi(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && tr(() => {
      i.abort(ct);
    });
    var r = n.next;
    (n.f & Be) !== 0 ? n.parent = null : z(n, t), n = r;
  }
}
function uo(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & xe) === 0 && z(t), t = n;
  }
}
function z(e, t = !0) {
  var n = !1;
  (t || (e.f & Kr) !== 0) && e.nodes !== null && e.nodes.end !== null && (co(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), wi(e, t && !n), nn(e, 0), J(e, ke);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const s of r)
      s.stop();
  mi(e);
  var i = e.parent;
  i !== null && i.first !== null && Ei(e), _ && (e.component_function = null), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
function co(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ Ve(e);
    e.remove(), e = n;
  }
}
function Ei(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Nt(e, t, n = !0) {
  var r = [];
  $i(e, r, !0);
  var i = () => {
    n && z(e), t && t();
  }, s = r.length;
  if (s > 0) {
    var o = () => --s || i();
    for (var a of r)
      a.out(o);
  } else
    i();
}
function $i(e, t, n) {
  if ((e.f & me) === 0) {
    e.f ^= me;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const a of r)
        (a.is_global || n) && t.push(a);
    for (var i = e.first; i !== null; ) {
      var s = i.next, o = (i.f & vt) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (i.f & xe) !== 0 && (e.f & Oe) !== 0;
      $i(i, t, o ? n : !1), i = s;
    }
  }
}
function fo(e) {
  Ti(e, !0);
}
function Ti(e, t) {
  if ((e.f & me) !== 0) {
    e.f ^= me, (e.f & X) === 0 && (J(e, ne), et(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, i = (n.f & vt) !== 0 || (n.f & xe) !== 0;
      Ti(n, i ? t : !1), n = r;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const o of s)
        (o.is_global || t) && o.in();
  }
}
function Si(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var i = n === r ? null : /* @__PURE__ */ Ve(n);
      t.append(n), n = i;
    }
}
let Je = !1;
function tn(e) {
  Je = e;
}
let ot = !1;
function pr(e) {
  ot = e;
}
let I = null, ge = !1;
function te(e) {
  I = e;
}
let P = null;
function he(e) {
  P = e;
}
let Ae = null;
function vo(e) {
  I !== null && (Ae === null ? Ae = [e] : Ae.push(e));
}
let Q = null, re = 0, se = null;
function ho(e) {
  se = e;
}
let ki = 1, Pt = 0, Qe = Pt;
function br(e) {
  Qe = e;
}
function Ai() {
  return ++ki;
}
function Mt(e) {
  var t = e.f;
  if ((t & ne) !== 0)
    return !0;
  if (t & G && (e.f &= ~je), (t & we) !== 0) {
    var n = e.deps;
    if (n !== null)
      for (var r = n.length, i = 0; i < r; i++) {
        var s = n[i];
        if (Mt(
          /** @type {Derived} */
          s
        ) && li(
          /** @type {Derived} */
          s
        ), s.wv > e.wv)
          return !0;
      }
    (t & be) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    le === null && J(e, X);
  }
  return !1;
}
function Ni(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !Ae?.includes(e))
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      (s.f & G) !== 0 ? Ni(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (n ? J(s, ne) : (s.f & X) !== 0 && J(s, we), et(
        /** @type {Effect} */
        s
      ));
    }
}
function Pn(e) {
  var t = Q, n = re, r = se, i = I, s = Ae, o = Z, a = ge, l = Qe, u = e.f;
  Q = /** @type {null | Value[]} */
  null, re = 0, se = null, I = (u & (xe | Be)) === 0 ? e : null, Ae = null, ht(e.ctx), ge = !1, Qe = ++Pt, e.ac !== null && (tr(() => {
    e.ac.abort(ct);
  }), e.ac = null);
  try {
    e.f |= An;
    var v = (
      /** @type {Function} */
      e.fn
    ), f = v(), c = e.deps;
    if (Q !== null) {
      var h;
      if (nn(e, re), c !== null && re > 0)
        for (c.length = re + Q.length, h = 0; h < Q.length; h++)
          c[re + h] = Q[h];
      else
        e.deps = c = Q;
      if (It() && (e.f & be) !== 0)
        for (h = re; h < c.length; h++)
          (c[h].reactions ??= []).push(e);
    } else c !== null && re < c.length && (nn(e, re), c.length = re);
    if (Qr() && se !== null && !ge && c !== null && (e.f & (G | we | ne)) === 0)
      for (h = 0; h < /** @type {Source[]} */
      se.length; h++)
        Ni(
          se[h],
          /** @type {Effect} */
          e
        );
    return i !== null && i !== e && (Pt++, se !== null && (r === null ? r = se : r.push(.../** @type {Source[]} */
    se))), (e.f & Le) !== 0 && (e.f ^= Le), f;
  } catch (b) {
    return ti(b);
  } finally {
    e.f ^= An, Q = t, re = n, se = r, I = i, Ae = s, ht(o), ge = a, Qe = l;
  }
}
function po(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = as.call(n, e);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  n === null && (t.f & G) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Q === null || !Q.includes(t)) && (J(t, we), (t.f & be) !== 0 && (t.f ^= be, t.f &= ~je), xn(
    /** @type {Derived} **/
    t
  ), nn(
    /** @type {Derived} **/
    t,
    0
  ));
}
function nn(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      po(e, n[r]);
}
function Rt(e) {
  var t = e.f;
  if ((t & ke) === 0) {
    J(e, X);
    var n = P, r = Je;
    if (P = e, Je = !0, _) {
      var i = Dt;
      ur(e.component_function);
      var s = (
        /** @type {any} */
        pt
      );
      Zt(e.dev_stack ?? pt);
    }
    try {
      (t & (Oe | Ur)) !== 0 ? uo(e) : wi(e), mi(e);
      var o = Pn(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = ki;
      var a;
      _ && Cs && (e.f & ne) !== 0 && e.deps;
    } finally {
      Je = r, P = n, _ && (ur(i), Zt(s));
    }
  }
}
async function Oi() {
  await Promise.resolve(), xt();
}
function H(e) {
  var t = e.f, n = (t & G) !== 0;
  if (I !== null && !ge) {
    var r = P !== null && (P.f & ke) !== 0;
    if (!r && !Ae?.includes(e)) {
      var i = I.deps;
      if ((I.f & An) !== 0)
        e.rv < Pt && (e.rv = Pt, Q === null && i !== null && i[re] === e ? re++ : Q === null ? Q = [e] : Q.includes(e) || Q.push(e));
      else {
        (I.deps ??= []).push(e);
        var s = e.reactions;
        s === null ? e.reactions = [I] : s.includes(I) || s.push(I);
      }
    }
  }
  if (_ && Hs.delete(e), ot) {
    if (Me.has(e))
      return Me.get(e);
    if (n) {
      var o = (
        /** @type {Derived} */
        e
      ), a = o.v;
      return ((o.f & X) === 0 && o.reactions !== null || Ii(o)) && (a = Jn(o)), Me.set(o, a), a;
    }
  } else n && (!le?.has(e) || B?.is_fork && !It()) && (o = /** @type {Derived} */
  e, Mt(o) && li(o), Je && It() && (o.f & be) === 0 && xi(o));
  if (le?.has(e))
    return le.get(e);
  if ((e.f & Le) !== 0)
    throw e.v;
  return e.v;
}
function xi(e) {
  if (e.deps !== null) {
    e.f ^= be;
    for (const t of e.deps)
      (t.reactions ??= []).push(e), (t.f & G) !== 0 && (t.f & be) === 0 && xi(
        /** @type {Derived} */
        t
      );
  }
}
function Ii(e) {
  if (e.v === Y) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Me.has(t) || (t.f & G) !== 0 && Ii(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function jt(e) {
  var t = ge;
  try {
    return ge = !0, e();
  } finally {
    ge = t;
  }
}
const bo = -7169;
function J(e, t) {
  e.f = e.f & bo | t;
}
const Pi = /* @__PURE__ */ new Set(), Rn = /* @__PURE__ */ new Set();
function _o(e, t, n, r = {}) {
  function i(s) {
    if (r.capture || Et.call(t, s), !s.cancelBubble)
      return tr(() => n?.call(this, s));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? yt(() => {
    t.addEventListener(e, i, r);
  }) : t.addEventListener(e, i, r), i;
}
function Ri(e) {
  for (var t = 0; t < e.length; t++)
    Pi.add(e[t]);
  for (var n of Rn)
    n(e);
}
let _r = null;
function Et(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, i = e.composedPath?.() || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  _r = e;
  var o = 0, a = _r === e && e.__root;
  if (a) {
    var l = i.indexOf(a);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var u = i.indexOf(t);
    if (u === -1)
      return;
    l <= u && (o = l);
  }
  if (s = /** @type {Element} */
  i[o] || e.target, s !== t) {
    pe(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var v = I, f = P;
    te(null), he(null);
    try {
      for (var c, h = []; s !== null; ) {
        var b = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var w = s["__" + r];
          w != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && w.call(s, e);
        } catch ($) {
          c ? h.push($) : c = $;
        }
        if (e.cancelBubble || b === t || b === null)
          break;
        s = b;
      }
      if (c) {
        for (let $ of h)
          queueMicrotask(() => {
            throw $;
          });
        throw c;
      }
    } finally {
      e.__root = t, delete e.currentTarget, te(v), he(f);
    }
  }
}
function yo(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function Cn(e, t) {
  var n = (
    /** @type {Effect} */
    P
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function rr(e, t) {
  var n = (t & rs) !== 0, r, i = !e.startsWith("<!>");
  return () => {
    if (D)
      return Cn(K, null), K;
    r === void 0 && (r = yo(i ? e : "<!>" + e), r = /** @type {TemplateNode} */
    /* @__PURE__ */ en(r));
    var s = (
      /** @type {TemplateNode} */
      n || er ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    return Cn(s, s), s;
  };
}
function rn(e, t) {
  if (D) {
    var n = (
      /** @type {Effect & { nodes: EffectNodes }} */
      P
    );
    ((n.f & dn) === 0 || n.nodes.end === null) && (n.nodes.end = K), Gn();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function go(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const mo = [
  "beforeinput",
  "click",
  "change",
  "dblclick",
  "contextmenu",
  "focusin",
  "focusout",
  "input",
  "keydown",
  "keyup",
  "mousedown",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "pointerdown",
  "pointermove",
  "pointerout",
  "pointerover",
  "pointerup",
  "touchend",
  "touchmove",
  "touchstart"
];
function wo(e) {
  return mo.includes(e);
}
const Eo = {
  // no `class: 'className'` because we handle that separately
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly",
  defaultvalue: "defaultValue",
  defaultchecked: "defaultChecked",
  srcobject: "srcObject",
  novalidate: "noValidate",
  allowfullscreen: "allowFullscreen",
  disablepictureinpicture: "disablePictureInPicture",
  disableremoteplayback: "disableRemotePlayback"
};
function $o(e) {
  return e = e.toLowerCase(), Eo[e] ?? e;
}
const To = ["touchstart", "touchmove"];
function So(e) {
  return To.includes(e);
}
function Fn(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function Ci(e, t) {
  return Fi(e, t);
}
function ko(e, t) {
  In(), t.intro = t.intro ?? !1;
  const n = t.target, r = D, i = K;
  try {
    for (var s = /* @__PURE__ */ en(n); s && (s.nodeType !== Ft || /** @type {Comment} */
    s.data !== Dr); )
      s = /* @__PURE__ */ Ve(s);
    if (!s)
      throw dt;
    Ce(!0), Ee(
      /** @type {Comment} */
      s
    );
    const o = Fi(e, { ...t, anchor: s });
    return Ce(!1), /**  @type {Exports} */
    o;
  } catch (o) {
    if (o instanceof Error && o.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/")))
      throw o;
    return o !== dt && console.warn("Failed to hydrate: ", o), t.recover === !1 && ms(), In(), eo(n), Ce(!1), Ci(e, t);
  } finally {
    Ce(r), Ee(i);
  }
}
const at = /* @__PURE__ */ new Map();
function Fi(e, { target: t, anchor: n, props: r = {}, events: i, context: s, intro: o = !0 }) {
  In();
  var a = /* @__PURE__ */ new Set(), l = (f) => {
    for (var c = 0; c < f.length; c++) {
      var h = f[c];
      if (!a.has(h)) {
        a.add(h);
        var b = So(h);
        t.addEventListener(h, Et, { passive: b });
        var w = at.get(h);
        w === void 0 ? (document.addEventListener(h, Et, { passive: b }), at.set(h, 1)) : at.set(h, w + 1);
      }
    }
  };
  l(ls(Pi)), Rn.add(l);
  var u = void 0, v = ao(() => {
    var f = n ?? t.appendChild(tt());
    return Us(
      /** @type {TemplateNode} */
      f,
      {
        pending: () => {
        }
      },
      (c) => {
        if (s) {
          Xn({});
          var h = (
            /** @type {ComponentContext} */
            Z
          );
          h.c = s;
        }
        if (i && (r.$$events = i), D && Cn(
          /** @type {TemplateNode} */
          c,
          null
        ), u = e(c, r) || {}, D && (P.nodes.end = K, K === null || K.nodeType !== Ft || /** @type {Comment} */
        K.data !== Lr))
          throw hn(), dt;
        s && Zn();
      }
    ), () => {
      for (var c of a) {
        t.removeEventListener(c, Et);
        var h = (
          /** @type {number} */
          at.get(c)
        );
        --h === 0 ? (document.removeEventListener(c, Et), at.delete(c)) : at.set(c, h);
      }
      Rn.delete(l), f !== n && f.parentNode?.removeChild(f);
    };
  });
  return Dn.set(u, v), u;
}
let Dn = /* @__PURE__ */ new WeakMap();
function Ao(e, t) {
  const n = Dn.get(e);
  return n ? (Dn.delete(e), n(t)) : (_ && (Ze in e ? xs() : Ns()), Promise.resolve());
}
class No {
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
  #e = /* @__PURE__ */ new Map();
  /**
   * Similar to #onscreen with respect to the keys, but contains branches that are not yet
   * in the DOM, because their insertion is deferred.
   * @type {Map<Key, Branch>}
   */
  #n = /* @__PURE__ */ new Map();
  /**
   * Keys of effects that are currently outroing
   * @type {Set<Key>}
   */
  #r = /* @__PURE__ */ new Set();
  /**
   * Whether to pause (i.e. outro) on change, or destroy immediately.
   * This is necessary for `<svelte:element>`
   */
  #l = !0;
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    this.anchor = t, this.#l = n;
  }
  #s = () => {
    var t = (
      /** @type {Batch} */
      B
    );
    if (this.#t.has(t)) {
      var n = (
        /** @type {Key} */
        this.#t.get(t)
      ), r = this.#e.get(n);
      if (r)
        fo(r), this.#r.delete(n);
      else {
        var i = this.#n.get(n);
        i && (this.#e.set(n, i.effect), this.#n.delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
      }
      for (const [s, o] of this.#t) {
        if (this.#t.delete(s), s === t)
          break;
        const a = this.#n.get(o);
        a && (z(a.effect), this.#n.delete(o));
      }
      for (const [s, o] of this.#e) {
        if (s === n || this.#r.has(s)) continue;
        const a = () => {
          if (Array.from(this.#t.values()).includes(s)) {
            var u = document.createDocumentFragment();
            Si(o, u), u.append(tt()), this.#n.set(s, { effect: o, fragment: u });
          } else
            z(o);
          this.#r.delete(s), this.#e.delete(s);
        };
        this.#l || !r ? (this.#r.add(s), Nt(o, a, !1)) : a();
      }
    }
  };
  /**
   * @param {Batch} batch
   */
  #i = (t) => {
    this.#t.delete(t);
    const n = Array.from(this.#t.values());
    for (const [r, i] of this.#n)
      n.includes(r) || (z(i.effect), this.#n.delete(r));
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var r = (
      /** @type {Batch} */
      B
    ), i = to();
    if (n && !this.#e.has(t) && !this.#n.has(t))
      if (i) {
        var s = document.createDocumentFragment(), o = tt();
        s.append(o), this.#n.set(t, {
          effect: de(() => n(o)),
          fragment: s
        });
      } else
        this.#e.set(
          t,
          de(() => n(this.anchor))
        );
    if (this.#t.set(r, t), i) {
      for (const [a, l] of this.#e)
        a === t ? r.skipped_effects.delete(l) : r.skipped_effects.add(l);
      for (const [a, l] of this.#n)
        a === t ? r.skipped_effects.delete(l.effect) : r.skipped_effects.add(l.effect);
      r.oncommit(this.#s), r.ondiscard(this.#i);
    } else
      D && (this.anchor = K), this.#s();
  }
}
if (_) {
  let e = function(t) {
    if (!(t in globalThis)) {
      let n;
      Object.defineProperty(globalThis, t, {
        configurable: !0,
        // eslint-disable-next-line getter-return
        get: () => {
          if (n !== void 0)
            return n;
          Es(t);
        },
        set: (r) => {
          n = r;
        }
      });
    }
  };
  var yl = e;
  e("$state"), e("$effect"), e("$derived"), e("$inspect"), e("$props"), e("$bindable");
}
function Oo(e) {
  Z === null && Yr("onMount"), hi(() => {
    const t = jt(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function xo(e) {
  Z === null && Yr("onDestroy"), Oo(() => () => jt(e));
}
var yr = /* @__PURE__ */ new Map();
function Io(e, t) {
  var n = yr.get(e);
  n || (n = /* @__PURE__ */ new Set(), yr.set(e, n)), n.add(t);
}
function Po(e, t, n = !1) {
  D && Gn();
  var r = new No(e), i = n ? vt : 0;
  function s(o, a) {
    if (D) {
      const u = Ps(e) === Wn;
      if (o === u) {
        var l = Gr();
        Ee(l), r.anchor = l, Ce(!1), r.ensure(o, a), Ce(!0);
        return;
      }
    }
    r.ensure(o, a);
  }
  yi(() => {
    var o = !1;
    t((a, l = !0) => {
      o = !0, s(l, a);
    }), o || s(!1, null);
  }, i);
}
function Di(e, t) {
  bn(() => {
    var n = e.getRootNode(), r = (
      /** @type {ShadowRoot} */
      n.host ? (
        /** @type {ShadowRoot} */
        n
      ) : (
        /** @type {Document} */
        n.head ?? /** @type {Document} */
        n.ownerDocument.head
      )
    );
    if (!r.querySelector("#" + t.hash)) {
      const i = document.createElement("style");
      i.id = t.hash, i.textContent = t.code, r.appendChild(i), _ && Io(t.hash, i);
    }
  });
}
function qe(e, t, n) {
  bn(() => {
    var r = jt(() => t(e, n?.()) || {});
    if (r?.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Ro(e, t) {
  var n = void 0, r;
  gi(() => {
    n !== (n = t()) && (r && (z(r), r = null), n && (r = de(() => {
      bn(() => (
        /** @type {(node: Element) => void} */
        n(e)
      ));
    })));
  });
}
function Li(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (n = Li(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Co() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = Li(e)) && (r && (r += " "), r += t);
  return r;
}
function Fo(e) {
  return typeof e == "object" ? Co(e) : e ?? "";
}
const gr = [...` 	
\r\f \v\uFEFF`];
function Do(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (r = r ? r + " " + t : t, n) {
    for (var i in n)
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var s = i.length, o = 0; (o = r.indexOf(i, o)) >= 0; ) {
          var a = o + s;
          (o === 0 || gr.includes(r[o - 1])) && (a === r.length || gr.includes(r[a])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(a + 1) : o = a;
        }
  }
  return r === "" ? null : r;
}
function mr(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var i in e) {
    var s = e[i];
    s != null && s !== "" && (r += " " + i + ": " + s + n);
  }
  return r;
}
function En(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function Lo(e, t) {
  if (t) {
    var n = "", r, i;
    if (Array.isArray(t) ? (r = t[0], i = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var s = !1, o = 0, a = !1, l = [];
      r && l.push(...Object.keys(r).map(En)), i && l.push(...Object.keys(i).map(En));
      var u = 0, v = -1;
      const w = e.length;
      for (var f = 0; f < w; f++) {
        var c = e[f];
        if (a ? c === "/" && e[f - 1] === "*" && (a = !1) : s ? s === c && (s = !1) : c === "/" && e[f + 1] === "*" ? a = !0 : c === '"' || c === "'" ? s = c : c === "(" ? o++ : c === ")" && o--, !a && s === !1 && o === 0) {
          if (c === ":" && v === -1)
            v = f;
          else if (c === ";" || f === w - 1) {
            if (v !== -1) {
              var h = En(e.substring(u, v).trim());
              if (!l.includes(h)) {
                c !== ";" && f++;
                var b = e.substring(u, f).trim();
                n += " " + b + ";";
              }
            }
            u = f + 1, v = -1;
          }
        }
      }
    }
    return r && (n += mr(r)), i && (n += mr(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function Mo(e, t, n, r, i, s) {
  var o = e.__className;
  if (D || o !== n || o === void 0) {
    var a = Do(n, r, s);
    (!D || a !== e.getAttribute("class")) && (a == null ? e.removeAttribute("class") : t ? e.className = a : e.setAttribute("class", a)), e.__className = n;
  } else if (s && i !== s)
    for (var l in s) {
      var u = !!s[l];
      (i == null || u !== !!i[l]) && e.classList.toggle(l, u);
    }
  return s;
}
function $n(e, t = {}, n, r) {
  for (var i in n) {
    var s = n[i];
    t[i] !== s && (n[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, s, r));
  }
}
function jo(e, t, n, r) {
  var i = e.__style;
  if (D || i !== t) {
    var s = Lo(t, r);
    (!D || s !== e.getAttribute("style")) && (s == null ? e.removeAttribute("style") : e.style.cssText = s), e.__style = t;
  } else r && (Array.isArray(r) ? ($n(e, n?.[0], r[0]), $n(e, n?.[1], r[1], "important")) : $n(e, n, r));
  return r;
}
function Ln(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!Mr(t))
      return Os();
    for (var r of e.options)
      r.selected = t.includes(wr(r));
    return;
  }
  for (r of e.options) {
    var i = wr(r);
    if (Xs(i, t)) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function Bo(e) {
  var t = new MutationObserver(() => {
    Ln(e, e.__value);
  });
  t.observe(e, {
    // Listen to option element changes
    childList: !0,
    subtree: !0,
    // because of <optgroup>
    // Listen to option element value attribute changes
    // (doesn't get notified of select value changes,
    // because that property is not reflected as an attribute)
    attributes: !0,
    attributeFilter: ["value"]
  }), nr(() => {
    t.disconnect();
  });
}
function wr(e) {
  return "__value" in e ? e.__value : e.value;
}
const Vt = /* @__PURE__ */ Symbol("class"), mt = /* @__PURE__ */ Symbol("style"), Mi = /* @__PURE__ */ Symbol("is custom element"), ji = /* @__PURE__ */ Symbol("is html");
function Vo(e) {
  if (D) {
    var t = !1, n = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var r = e.value;
          sn(e, "value", null), e.value = r;
        }
        if (e.hasAttribute("checked")) {
          var i = e.checked;
          sn(e, "checked", null), e.checked = i;
        }
      }
    };
    e.__on_r = n, yt(n), ro();
  }
}
function Uo(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function sn(e, t, n, r) {
  var i = Bi(e);
  if (D && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK")) {
    r || qo(e, t, n ?? "");
    return;
  }
  i[t] !== (i[t] = n) && (t === "loading" && (e[vs] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Vi(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Ko(e, t, n, r, i = !1, s = !1) {
  if (D && i && e.tagName === "INPUT") {
    var o = (
      /** @type {HTMLInputElement} */
      e
    ), a = o.type === "checkbox" ? "defaultChecked" : "defaultValue";
    a in n || Vo(o);
  }
  var l = Bi(e), u = l[Mi], v = !l[ji];
  let f = D && u;
  f && Ce(!1);
  var c = t || {}, h = e.tagName === "OPTION";
  for (var b in t)
    b in n || (n[b] = null);
  n.class ? n.class = Fo(n.class) : n.class = null, n[mt] && (n.style ??= null);
  var w = Vi(e);
  for (const k in n) {
    let O = n[k];
    if (h && k === "value" && O == null) {
      e.value = e.__value = "", c[k] = O;
      continue;
    }
    if (k === "class") {
      var $ = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Mo(e, $, O, r, t?.[Vt], n[Vt]), c[k] = O, c[Vt] = n[Vt];
      continue;
    }
    if (k === "style") {
      jo(e, O, t?.[mt], n[mt]), c[k] = O, c[mt] = n[mt];
      continue;
    }
    var E = c[k];
    if (!(O === E && !(O === void 0 && e.hasAttribute(k)))) {
      c[k] = O;
      var L = k[0] + k[1];
      if (L !== "$$")
        if (L === "on") {
          const j = {}, q = "$$" + k;
          let y = k.slice(2);
          var M = wo(y);
          if (go(y) && (y = y.slice(0, -7), j.capture = !0), !M && E) {
            if (O != null) continue;
            e.removeEventListener(y, c[q], j), c[q] = null;
          }
          if (O != null)
            if (M)
              e[`__${y}`] = O, Ri([y]);
            else {
              let A = function(g) {
                c[k].call(this, g);
              };
              var ie = A;
              c[q] = _o(y, e, A, j);
            }
          else M && (e[`__${y}`] = void 0);
        } else if (k === "style")
          sn(e, k, O);
        else if (k === "autofocus")
          no(
            /** @type {HTMLElement} */
            e,
            !!O
          );
        else if (!u && (k === "__value" || k === "value" && O != null))
          e.value = e.__value = O;
        else if (k === "selected" && h)
          Uo(
            /** @type {HTMLOptionElement} */
            e,
            O
          );
        else {
          var C = k;
          v || (C = $o(C));
          var W = C === "defaultValue" || C === "defaultChecked";
          if (O == null && !u && !W)
            if (l[k] = null, C === "value" || C === "checked") {
              let j = (
                /** @type {HTMLInputElement} */
                e
              );
              const q = t === void 0;
              if (C === "value") {
                let y = j.defaultValue;
                j.removeAttribute(C), j.defaultValue = y, j.value = j.__value = q ? y : null;
              } else {
                let y = j.defaultChecked;
                j.removeAttribute(C), j.defaultChecked = y, j.checked = q ? y : !1;
              }
            } else
              e.removeAttribute(k);
          else W || w.includes(C) && (u || typeof O != "string") ? (e[C] = O, C in l && (l[C] = Y)) : typeof O != "function" && sn(e, C, O, s);
        }
    }
  }
  return f && Ce(!0), c;
}
function He(e, t, n = [], r = [], i = [], s, o = !1, a = !1) {
  oi(i, n, r, (l) => {
    var u = void 0, v = {}, f = e.nodeName === "SELECT", c = !1;
    if (gi(() => {
      var b = t(...l.map(H)), w = Ko(
        e,
        u,
        b,
        s,
        o,
        a
      );
      c && f && "value" in b && Ln(
        /** @type {HTMLSelectElement} */
        e,
        b.value
      );
      for (let E of Object.getOwnPropertySymbols(v))
        b[E] || z(v[E]);
      for (let E of Object.getOwnPropertySymbols(b)) {
        var $ = b[E];
        E.description === os && (!u || $ !== u[E]) && (v[E] && z(v[E]), v[E] = de(() => Ro(e, () => $))), w[E] = $;
      }
      u = w;
    }), f) {
      var h = (
        /** @type {HTMLSelectElement} */
        e
      );
      bn(() => {
        Ln(
          h,
          /** @type {Record<string | symbol, any>} */
          u.value,
          !0
        ), Bo(h);
      });
    }
    c = !0;
  });
}
function Bi(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [Mi]: e.nodeName.includes("-"),
      [ji]: e.namespaceURI === ss
    }
  );
}
var Er = /* @__PURE__ */ new Map();
function Vi(e) {
  var t = e.getAttribute("is") || e.nodeName, n = Er.get(t);
  if (n) return n;
  Er.set(t, n = []);
  for (var r, i = e, s = Element.prototype; s !== i; ) {
    r = us(i);
    for (var o in r)
      r[o].set && n.push(o);
    i = jr(i);
  }
  return n;
}
function qo(e, t, n) {
  _ && (t === "srcset" && Ho(e, n) || Mn(e.getAttribute(t) ?? "", n) || As(
    t,
    e.outerHTML.replace(e.innerHTML, e.innerHTML && "..."),
    String(n)
  ));
}
function Mn(e, t) {
  return e === t ? !0 : new URL(e, document.baseURI).href === new URL(t, document.baseURI).href;
}
function $r(e) {
  return e.split(",").map((t) => t.trim().split(" ").filter(Boolean));
}
function Ho(e, t) {
  var n = $r(e.srcset), r = $r(t);
  return r.length === n.length && r.every(
    ([i, s], o) => s === n[o][1] && // We need to test both ways because Vite will create an a full URL with
    // `new URL(asset, import.meta.url).href` for the client when `base: './'`, and the
    // relative URLs inside srcset are not automatically resolved to absolute URLs by
    // browsers (in contrast to img.src). This means both SSR and DOM code could
    // contain relative or absolute URLs.
    (Mn(n[o][0], i) || Mn(i, n[o][0]))
  );
}
function ir(e, t, n) {
  if (e == null)
    return t(void 0), n && n(void 0), De;
  const r = jt(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const lt = [];
function ft(e, t) {
  return {
    subscribe: _n(e, t).subscribe
  };
}
function _n(e, t = De) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function i(a) {
    if (Zr(e, a) && (e = a, n)) {
      const l = !lt.length;
      for (const u of r)
        u[1](), lt.push(u, e);
      if (l) {
        for (let u = 0; u < lt.length; u += 2)
          lt[u][0](lt[u + 1]);
        lt.length = 0;
      }
    }
  }
  function s(a) {
    i(a(
      /** @type {T} */
      e
    ));
  }
  function o(a, l = De) {
    const u = [a, l];
    return r.add(u), r.size === 1 && (n = t(i, s) || De), a(
      /** @type {T} */
      e
    ), () => {
      r.delete(u), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: s, subscribe: o };
}
function sr(e, t, n) {
  const r = !Array.isArray(e), i = r ? [e] : e;
  if (!i.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const s = t.length < 2;
  return ft(n, (o, a) => {
    let l = !1;
    const u = [];
    let v = 0, f = De;
    const c = () => {
      if (v)
        return;
      f();
      const b = t(r ? u[0] : u, o, a);
      s ? o(b) : f = typeof b == "function" ? b : De;
    }, h = i.map(
      (b, w) => ir(
        b,
        ($) => {
          u[w] = $, v &= ~(1 << w), l && c();
        },
        () => {
          v |= 1 << w;
        }
      )
    );
    return l = !0, c(), function() {
      Br(h), f(), l = !1;
    };
  });
}
function Ui(e) {
  let t;
  return ir(e, (n) => t = n)(), t;
}
let Ut = !1, jn = /* @__PURE__ */ Symbol();
function Pe(e, t, n) {
  const r = n[t] ??= {
    store: null,
    source: /* @__PURE__ */ ui(void 0),
    unsubscribe: De
  };
  if (_ && (r.source.label = t), r.store !== e && !(jn in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = De;
    else {
      var i = !0;
      r.unsubscribe = ir(e, (s) => {
        i ? r.source.v = s : ae(r.source, s);
      }), i = !1;
    }
  return e && jn in n ? Ui(e) : H(r.source);
}
function Wo() {
  const e = {};
  function t() {
    nr(() => {
      for (var n in e)
        e[n].unsubscribe();
      pe(e, jn, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function Yo(e) {
  var t = Ut;
  try {
    return Ut = !1, [e(), Ut];
  } finally {
    Ut = t;
  }
}
function Bn(e, t, n, r) {
  var i = (
    /** @type {V} */
    r
  ), s = !0, o = () => (s && (s = !1, i = /** @type {V} */
  r), i), a;
  {
    var l = Ze in e || qr in e;
    a = Fe(e, t)?.set ?? (l && t in e ? ($) => e[t] = $ : void 0);
  }
  var u, v = !1;
  [u, v] = Yo(() => (
    /** @type {V} */
    e[t]
  )), u === void 0 && r !== void 0 && (u = o(), a && (ws(t), a(u)));
  var f;
  if (f = () => {
    var $ = (
      /** @type {V} */
      e[t]
    );
    return $ === void 0 ? o() : (s = !0, $);
  }, a) {
    var c = e.$$legacy;
    return (
      /** @type {() => V} */
      (function($, E) {
        return arguments.length > 0 ? ((!E || c || v) && a(E ? f() : $), $) : f();
      })
    );
  }
  var h = !1, b = /* @__PURE__ */ ai(() => (h = !1, f()));
  _ && (b.label = t), H(b);
  var w = (
    /** @type {Effect} */
    P
  );
  return (
    /** @type {() => V} */
    (function($, E) {
      if (arguments.length > 0) {
        const L = E ? H(b) : Ge($);
        return ae(b, L), h = !0, i !== void 0 && (i = L), $;
      }
      return ot && h || (w.f & ke) !== 0 ? b.v : H(b);
    })
  );
}
function zo(e) {
  return new Go(e);
}
class Go {
  /** @type {any} */
  #t;
  /** @type {Record<string, any>} */
  #e;
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    var n = /* @__PURE__ */ new Map(), r = (s, o) => {
      var a = /* @__PURE__ */ ui(o, !1, !1);
      return n.set(s, a), a;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, o) {
          return H(n.get(o) ?? r(o, Reflect.get(s, o)));
        },
        has(s, o) {
          return o === qr ? !0 : (H(n.get(o) ?? r(o, Reflect.get(s, o))), Reflect.has(s, o));
        },
        set(s, o, a) {
          return ae(n.get(o) ?? r(o, a), a), Reflect.set(s, o, a);
        }
      }
    );
    this.#e = (t.hydrate ? ko : Ci)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    }), (!t?.props?.$$host || t.sync === !1) && xt(), this.#t = i.$$events;
    for (const s of Object.keys(this.#e))
      s === "$set" || s === "$destroy" || s === "$on" || pe(this, s, {
        get() {
          return this.#e[s];
        },
        /** @param {any} value */
        set(o) {
          this.#e[s] = o;
        },
        enumerable: !0
      });
    this.#e.$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(i, s);
    }, this.#e.$destroy = () => {
      Ao(this.#e);
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    this.#e.$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    this.#t[t] = this.#t[t] || [];
    const r = (...i) => n.call(this, ...i);
    return this.#t[t].push(r), () => {
      this.#t[t] = this.#t[t].filter(
        /** @param {any} fn */
        (i) => i !== r
      );
    };
  }
  $destroy() {
    this.#e.$destroy();
  }
}
let Ki;
typeof HTMLElement == "function" && (Ki = class extends HTMLElement {
  /** The Svelte component constructor */
  $$ctor;
  /** Slots */
  $$s;
  /** @type {any} The Svelte component instance */
  $$c;
  /** Whether or not the custom element is connected */
  $$cn = !1;
  /** @type {Record<string, any>} Component props data */
  $$d = {};
  /** `true` if currently in the process of reflecting component props back to attributes */
  $$r = !1;
  /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
  $$p_d = {};
  /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
  $$l = {};
  /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
  $$l_u = /* @__PURE__ */ new Map();
  /** @type {any} The managed render effect for reflecting attributes */
  $$me;
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, t, n) {
    super(), this.$$ctor = e, this.$$s = t, n && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(e, t, n) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
      const r = this.$$c.$on(e, t);
      this.$$l_u.set(t, r);
    }
    super.addEventListener(e, t, n);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(e, t, n) {
    if (super.removeEventListener(e, t, n), this.$$c) {
      const r = this.$$l_u.get(t);
      r && (r(), this.$$l_u.delete(t));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(i) {
        return (s) => {
          const o = document.createElement("slot");
          i !== "default" && (o.name = i), rn(s, o);
        };
      };
      var e = t;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, r = Xo(this);
      for (const i of this.$$s)
        i in r && (i === "default" && !this.$$d.children ? (this.$$d.children = t(i), n.default = !0) : n[i] = t(i));
      for (const i of this.attributes) {
        const s = this.$$g_p(i.name);
        s in this.$$d || (this.$$d[s] = Yt(s, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = zo({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$host: this
        }
      }), this.$$me = oo(() => {
        bi(() => {
          this.$$r = !0;
          for (const i of Gt(this.$$c)) {
            if (!this.$$p_d[i]?.reflect) continue;
            this.$$d[i] = this.$$c[i];
            const s = Yt(
              i,
              this.$$d[i],
              this.$$p_d,
              "toAttribute"
            );
            s == null ? this.removeAttribute(this.$$p_d[i].attribute || i) : this.setAttribute(this.$$p_d[i].attribute || i, s);
          }
          this.$$r = !1;
        });
      });
      for (const i in this.$$l)
        for (const s of this.$$l[i]) {
          const o = this.$$c.$on(i, s);
          this.$$l_u.set(s, o);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  /**
   * @param {string} attr
   * @param {string} _oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(e, t, n) {
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = Yt(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(e) {
    return Gt(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function Yt(e, t, n, r) {
  const i = n[e]?.type;
  if (t = i === "Boolean" && typeof t != "boolean" ? t != null : t, !r || !n[e])
    return t;
  if (r === "toAttribute")
    switch (i) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (i) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      // conversion already handled above
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function Xo(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function qi(e, t, n, r, i, s) {
  let o = class extends Ki {
    constructor() {
      super(e, n, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Gt(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return Gt(t).forEach((a) => {
    pe(o.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        l = Yt(a, l, t), this.$$d[a] = l;
        var u = this.$$c;
        if (u) {
          var v = Fe(u, a)?.get;
          v ? u[a] = l : u.$set({ [a]: l });
        }
      }
    });
  }), r.forEach((a) => {
    pe(o.prototype, a, {
      get() {
        return this.$$c?.[a];
      }
    });
  }), e.element = /** @type {any} */
  o, o;
}
var Zo = /* @__PURE__ */ rr('<div class="container svelte-htsxo4"><div class="counter svelte-htsxo4"><div class="label svelte-htsxo4">Svelte Counter:</div> <button type="button" class="button svelte-htsxo4">-</button> <span class="count svelte-htsxo4"> </span> <button type="button" class="button svelte-htsxo4">+</button></div></div>');
const Jo = {
  hash: "svelte-htsxo4",
  code: ".container.svelte-htsxo4 {display:flex;flex-direction:column;align-items:center;padding:1rem;border:2px solid #ff3e00;border-radius:8px;background-color:#f9f9f9;font-family:system-ui, -apple-system, sans-serif;}.counter.svelte-htsxo4 {display:flex;align-items:center;gap:1rem;}.label.svelte-htsxo4 {font-size:1rem;font-weight:600;color:#333;margin-bottom:0.5rem;}.button.svelte-htsxo4 {width:40px;height:40px;font-size:1.5rem;border:2px solid #ff3e00;background-color:#ff3e00;color:white;border-radius:4px;cursor:pointer;transition:background-color 0.2s;}.button.svelte-htsxo4:hover {background-color:#e63900;}.button.svelte-htsxo4:active {background-color:#cc3300;}.count.svelte-htsxo4 {font-size:2rem;font-weight:bold;color:#ff3e00;min-width:3rem;text-align:center;}"
};
function Qo(e, t) {
  Xn(t, !0), Di(e, Jo);
  let n = Bn(t, "count", 15, 0), r = /* @__PURE__ */ $e(Ge(n()));
  hi(() => {
    ae(r, n(), !0);
  });
  function i() {
    dr(r), n(H(r));
  }
  function s() {
    dr(r, -1), n(H(r));
  }
  var o = {
    get count() {
      return n();
    },
    set count(h = 0) {
      n(h), xt();
    }
  }, a = Zo(), l = fe(a), u = Xe(fe(l), 2);
  u.__click = s;
  var v = Xe(u, 2), f = fe(v, !0);
  ce(v);
  var c = Xe(v, 2);
  return c.__click = i, ce(l), ce(a), _i(() => Fn(f, H(r))), rn(e, a), Zn(o);
}
Ri(["click"]);
customElements.define("svelte-counter", qi(Qo, { count: {} }, [], [], !0));
function Vn(e) {
  return Object.keys(e).reduce((t, n) => e[n] === void 0 ? t : t + `${n}:${e[n]};`, "");
}
Vn({
  position: "absolute",
  opacity: 0,
  "pointer-events": "none",
  margin: 0,
  transform: "translateX(-100%)"
});
function ea(e) {
  if (e !== null)
    return "";
}
function on(...e) {
  return (...t) => {
    for (const n of e)
      typeof n == "function" && n(...t);
  };
}
function V() {
}
function Hi(e, ...t) {
  const n = {};
  for (const r of Object.keys(e))
    t.includes(r) || (n[r] = e[r]);
  return n;
}
function Kt(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 && (t[n] = r);
  }
  return t;
}
function Tr(e) {
  function t(n) {
    return n(e), () => {
    };
  }
  return { subscribe: t };
}
const qt = (e) => new Proxy(e, {
  get(t, n, r) {
    return Reflect.get(t, n, r);
  },
  ownKeys(t) {
    return Reflect.ownKeys(t).filter((n) => n !== "action");
  }
}), Sr = (e) => typeof e == "function";
Re("empty");
function Re(e, t) {
  const { stores: n, action: r, returned: i } = t ?? {}, s = (() => {
    if (n && i)
      return sr(n, (a) => {
        const l = i(a);
        if (Sr(l)) {
          const u = (...v) => qt(Kt({
            ...l(...v),
            [`data-melt-${e}`]: "",
            action: r ?? V
          }));
          return u.action = r ?? V, u;
        }
        return qt(Kt({
          ...l,
          [`data-melt-${e}`]: "",
          action: r ?? V
        }));
      });
    {
      const l = i?.();
      if (Sr(l)) {
        const u = (...v) => qt(Kt({
          ...l(...v),
          [`data-melt-${e}`]: "",
          action: r ?? V
        }));
        return u.action = r ?? V, Tr(u);
      }
      return Tr(qt(Kt({
        ...l,
        [`data-melt-${e}`]: "",
        action: r ?? V
      })));
    }
  })(), o = r ?? (() => {
  });
  return o.subscribe = s.subscribe, o;
}
function ta(e) {
  const t = (s) => s ? `${e}-${s}` : e, n = (s) => `data-melt-${e}${s ? `-${s}` : ""}`, r = (s) => `[data-melt-${e}${s ? `-${s}` : ""}]`;
  return {
    name: t,
    attribute: n,
    selector: r,
    getEl: (s) => document.querySelector(r(s))
  };
}
const kr = typeof document < "u", Wi = (e) => typeof e == "function";
function na(e) {
  return e instanceof ShadowRoot;
}
function or(e) {
  return e instanceof Element;
}
function Ne(e) {
  return e instanceof HTMLElement;
}
function ra(e) {
  return e !== null && typeof e == "object";
}
function ia(e) {
  return ra(e) && "subscribe" in e;
}
function Un(e, t, n, r) {
  const i = Array.isArray(t) ? t : [t];
  return i.forEach((s) => e.addEventListener(s, n, r)), () => {
    i.forEach((s) => e.removeEventListener(s, n, r));
  };
}
function Ht(e, t, n, r) {
  const i = Array.isArray(t) ? t : [t];
  if (typeof n == "function") {
    const s = oa((o) => n(o));
    return i.forEach((o) => e.addEventListener(o, s, r)), () => {
      i.forEach((o) => e.removeEventListener(o, s, r));
    };
  }
  return () => void 0;
}
function sa(e) {
  const t = e.currentTarget;
  if (!Ne(t))
    return null;
  const n = new CustomEvent(`m-${e.type}`, {
    detail: {
      originalEvent: e
    },
    cancelable: !0
  });
  return t.dispatchEvent(n), n;
}
function oa(e) {
  return (t) => {
    if (!sa(t)?.defaultPrevented)
      return e(t);
  };
}
const aa = (e) => {
  try {
    xo(e);
  } catch {
    return e;
  }
};
function gt(e) {
  return {
    ...e,
    get: () => Ui(e)
  };
}
gt.writable = function(e) {
  const t = _n(e);
  let n = e;
  return {
    subscribe: t.subscribe,
    set(r) {
      t.set(r), n = r;
    },
    update(r) {
      const i = r(n);
      t.set(i), n = i;
    },
    get() {
      return n;
    }
  };
};
gt.derived = function(e, t) {
  const n = /* @__PURE__ */ new Map(), r = () => {
    const s = Array.isArray(e) ? e.map((o) => o.get()) : e.get();
    return t(s);
  };
  return {
    get: r,
    subscribe: (s) => {
      const o = [];
      return (Array.isArray(e) ? e : [e]).forEach((l) => {
        o.push(l.subscribe(() => {
          s(r());
        }));
      }), s(r()), n.set(s, o), () => {
        const l = n.get(s);
        if (l)
          for (const u of l)
            u();
        n.delete(s);
      };
    }
  };
};
const la = (e, t) => {
  const n = gt(e), r = (s, o) => {
    n.update((a) => {
      const l = s(a);
      let u = l;
      return t && (u = t({ curr: a, next: l })), o?.(u), u;
    });
  };
  return {
    ...n,
    update: r,
    set: (s) => {
      r(() => s);
    }
  };
};
function ua(e) {
  return new Promise((t) => setTimeout(t, e));
}
let ca = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", fa = (e = 21) => {
  let t = "", n = e | 0;
  for (; n--; )
    t += ca[Math.random() * 64 | 0];
  return t;
};
function da() {
  return fa(10);
}
function va(e) {
  return e.reduce((t, n) => (t[n] = da(), t), {});
}
const $t = {
  ENTER: "Enter",
  ESCAPE: "Escape",
  SPACE: " "
};
function Tn(e, t = 500) {
  let n;
  const r = (...i) => {
    clearTimeout(n), n = setTimeout(() => e(...i), t);
  };
  return r.destroy = () => clearTimeout(n), r;
}
const Yi = () => typeof window < "u";
function ha() {
  return navigator.userAgentData?.platform ?? navigator.platform;
}
const zi = (e) => Yi() && e.test(ha().toLowerCase()), pa = () => Yi() && !!navigator.maxTouchPoints, ba = () => zi(/^mac/) && !pa(), _a = () => zi(/mac|iphone|ipad|ipod/i), ya = () => _a() && !ba(), Sn = "data-melt-scroll-lock";
function Ar(e, t) {
  if (!e)
    return;
  const n = e.style.cssText;
  return Object.assign(e.style, t), () => {
    e.style.cssText = n;
  };
}
function ga(e, t, n) {
  if (!e)
    return;
  const r = e.style.getPropertyValue(t);
  return e.style.setProperty(t, n), () => {
    r ? e.style.setProperty(t, r) : e.style.removeProperty(t);
  };
}
function ma(e) {
  const t = e.getBoundingClientRect().left;
  return Math.round(t) + e.scrollLeft ? "paddingLeft" : "paddingRight";
}
function wa(e) {
  const t = document, n = t.defaultView ?? window, { documentElement: r, body: i } = t;
  if (i.hasAttribute(Sn))
    return V;
  i.setAttribute(Sn, "");
  const o = n.innerWidth - r.clientWidth, a = () => ga(r, "--scrollbar-width", `${o}px`), l = ma(r), u = n.getComputedStyle(i)[l], v = () => Ar(i, {
    overflow: "hidden",
    [l]: `calc(${u} + ${o}px)`
  }), f = () => {
    const { scrollX: h, scrollY: b, visualViewport: w } = n, $ = w?.offsetLeft ?? 0, E = w?.offsetTop ?? 0, L = Ar(i, {
      position: "fixed",
      overflow: "hidden",
      top: `${-(b - Math.floor(E))}px`,
      left: `${-(h - Math.floor($))}px`,
      right: "0",
      [l]: `calc(${u} + ${o}px)`
    });
    return () => {
      L?.(), n.scrollTo(h, b);
    };
  }, c = [a(), ya() ? f() : v()];
  return () => {
    c.forEach((h) => h?.()), i.removeAttribute(Sn);
  };
}
function Tt(e, t, n = {}) {
  const { skipFirstRun: r } = n;
  let i = !0, s;
  const o = sr(e, (l) => {
    s?.(), i && r ? i = !1 : s = t(l);
  }).subscribe(V), a = () => {
    o(), s?.();
  };
  return aa(a), a;
}
function Nr(e) {
  const t = {};
  return Object.keys(e).forEach((n) => {
    const r = n, i = e[r];
    t[r] = gt(_n(i));
  }), t;
}
function Ea(e) {
  let t = e.parentElement;
  for (; Ne(t) && !t.hasAttribute("data-portal"); )
    t = t.parentElement;
  return t || "body";
}
function $a(e, t) {
  return t !== void 0 ? t : Ea(e) === "body" ? document.body : null;
}
function Gi(e, t) {
  return e === t || e.contains(t);
}
function Ta(e) {
  return e?.ownerDocument ?? document;
}
async function Or(e) {
  const { prop: t, defaultEl: n } = e;
  if (await Promise.all([ua(1), Oi]), t === void 0) {
    n?.focus();
    return;
  }
  const r = Wi(t) ? t(n) : t;
  if (typeof r == "string") {
    const i = document.querySelector(r);
    if (!Ne(i))
      return;
    i.focus();
  } else Ne(r) && r.focus();
}
ft(!1), ft(!1), ft(void 0), ft(void 0);
const zt = /* @__PURE__ */ new Map(), Sa = ((e, t = {}) => {
  let n = V;
  function r(i = {}) {
    n();
    const s = { behaviorType: "close", ...i }, o = ia(s.behaviorType) ? s.behaviorType : gt(ft(s.behaviorType));
    zt.set(e, o), n = on(Un(document, "keydown", (l) => {
      if (l.key !== $t.ESCAPE || !ka(e))
        return;
      const u = l.target;
      Ne(u) && (l.preventDefault(), !Aa(l, s.ignore) && Na(o.get()) && s.handler?.(l));
    }, { passive: !1 }), Tt(o, (l) => {
      l === "close" || l === "defer-otherwise-close" && [...zt.keys()][0] === e ? e.dataset.escapee = "" : delete e.dataset.escapee;
    }), o.destroy || V);
  }
  return r(t), {
    update: r,
    destroy() {
      zt.delete(e), delete e.dataset.escapee, n();
    }
  };
}), ka = (e) => {
  const t = [...zt], n = t.findLast(([i, s]) => {
    const o = s.get();
    return o === "close" || o === "ignore";
  });
  if (n)
    return n[0] === e;
  const [r] = t[0];
  return r === e;
}, Aa = (e, t) => t ? !!(Wi(t) && t(e) || Array.isArray(t) && t.some((n) => e.target === n)) : !1, Na = (e) => e === "close" || e === "defer-otherwise-close";
var Xi = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], an = /* @__PURE__ */ Xi.join(","), Zi = typeof Element > "u", nt = Zi ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, ln = !Zi && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e?.ownerDocument;
}, Ct = function(t, n) {
  var r;
  n === void 0 && (n = !0);
  var i = t == null || (r = t.getAttribute) === null || r === void 0 ? void 0 : r.call(t, "inert"), s = i === "" || i === "true", o = s || n && t && Ct(t.parentNode);
  return o;
}, Oa = function(t) {
  var n, r = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return r === "" || r === "true";
}, Ji = function(t, n, r) {
  if (Ct(t))
    return [];
  var i = Array.prototype.slice.apply(t.querySelectorAll(an));
  return n && nt.call(t, an) && i.unshift(t), i = i.filter(r), i;
}, un = function(t, n, r) {
  for (var i = [], s = Array.from(t); s.length; ) {
    var o = s.shift();
    if (!Ct(o, !1))
      if (o.tagName === "SLOT") {
        var a = o.assignedElements(), l = a.length ? a : o.children, u = un(l, !0, r);
        r.flatten ? i.push.apply(i, u) : i.push({
          scopeParent: o,
          candidates: u
        });
      } else {
        var v = nt.call(o, an);
        v && r.filter(o) && (n || !t.includes(o)) && i.push(o);
        var f = o.shadowRoot || // check for an undisclosed shadow
        typeof r.getShadowRoot == "function" && r.getShadowRoot(o), c = !Ct(f, !1) && (!r.shadowRootFilter || r.shadowRootFilter(o));
        if (f && c) {
          var h = un(f === !0 ? o.children : f.children, !0, r);
          r.flatten ? i.push.apply(i, h) : i.push({
            scopeParent: o,
            candidates: h
          });
        } else
          s.unshift.apply(s, o.children);
      }
  }
  return i;
}, Qi = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, Ye = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || Oa(t)) && !Qi(t) ? 0 : t.tabIndex;
}, xa = function(t, n) {
  var r = Ye(t);
  return r < 0 && n && !Qi(t) ? 0 : r;
}, Ia = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, es = function(t) {
  return t.tagName === "INPUT";
}, Pa = function(t) {
  return es(t) && t.type === "hidden";
}, Ra = function(t) {
  var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(r) {
    return r.tagName === "SUMMARY";
  });
  return n;
}, Ca = function(t, n) {
  for (var r = 0; r < t.length; r++)
    if (t[r].checked && t[r].form === n)
      return t[r];
}, Fa = function(t) {
  if (!t.name)
    return !0;
  var n = t.form || ln(t), r = function(a) {
    return n.querySelectorAll('input[type="radio"][name="' + a + '"]');
  }, i;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    i = r(window.CSS.escape(t.name));
  else
    try {
      i = r(t.name);
    } catch (o) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", o.message), !1;
    }
  var s = Ca(i, t.form);
  return !s || s === t;
}, Da = function(t) {
  return es(t) && t.type === "radio";
}, La = function(t) {
  return Da(t) && !Fa(t);
}, Ma = function(t) {
  var n, r = t && ln(t), i = (n = r) === null || n === void 0 ? void 0 : n.host, s = !1;
  if (r && r !== t) {
    var o, a, l;
    for (s = !!((o = i) !== null && o !== void 0 && (a = o.ownerDocument) !== null && a !== void 0 && a.contains(i) || t != null && (l = t.ownerDocument) !== null && l !== void 0 && l.contains(t)); !s && i; ) {
      var u, v, f;
      r = ln(i), i = (u = r) === null || u === void 0 ? void 0 : u.host, s = !!((v = i) !== null && v !== void 0 && (f = v.ownerDocument) !== null && f !== void 0 && f.contains(i));
    }
  }
  return s;
}, xr = function(t) {
  var n = t.getBoundingClientRect(), r = n.width, i = n.height;
  return r === 0 && i === 0;
}, ja = function(t, n) {
  var r = n.displayCheck, i = n.getShadowRoot;
  if (r === "full-native" && "checkVisibility" in t) {
    var s = t.checkVisibility({
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
    return !s;
  }
  if (getComputedStyle(t).visibility === "hidden")
    return !0;
  var o = nt.call(t, "details>summary:first-of-type"), a = o ? t.parentElement : t;
  if (nt.call(a, "details:not([open]) *"))
    return !0;
  if (!r || r === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  r === "full-native" || r === "legacy-full") {
    if (typeof i == "function") {
      for (var l = t; t; ) {
        var u = t.parentElement, v = ln(t);
        if (u && !u.shadowRoot && i(u) === !0)
          return xr(t);
        t.assignedSlot ? t = t.assignedSlot : !u && v !== t.ownerDocument ? t = v.host : t = u;
      }
      t = l;
    }
    if (Ma(t))
      return !t.getClientRects().length;
    if (r !== "legacy-full")
      return !0;
  } else if (r === "non-zero-area")
    return xr(t);
  return !1;
}, Ba = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var n = t.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var r = 0; r < n.children.length; r++) {
          var i = n.children.item(r);
          if (i.tagName === "LEGEND")
            return nt.call(n, "fieldset[disabled] *") ? !0 : !i.contains(t);
        }
        return !0;
      }
      n = n.parentElement;
    }
  return !1;
}, cn = function(t, n) {
  return !(n.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  Ct(n) || Pa(n) || ja(n, t) || // For a details element with a summary, the summary element gets the focus
  Ra(n) || Ba(n));
}, Kn = function(t, n) {
  return !(La(n) || Ye(n) < 0 || !cn(t, n));
}, Va = function(t) {
  var n = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, ts = function(t) {
  var n = [], r = [];
  return t.forEach(function(i, s) {
    var o = !!i.scopeParent, a = o ? i.scopeParent : i, l = xa(a, o), u = o ? ts(i.candidates) : a;
    l === 0 ? o ? n.push.apply(n, u) : n.push(a) : r.push({
      documentOrder: s,
      tabIndex: l,
      item: i,
      isScope: o,
      content: u
    });
  }), r.sort(Ia).reduce(function(i, s) {
    return s.isScope ? i.push.apply(i, s.content) : i.push(s.content), i;
  }, []).concat(n);
}, Ua = function(t, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = un([t], n.includeContainer, {
    filter: Kn.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: Va
  }) : r = Ji(t, n.includeContainer, Kn.bind(null, n)), ts(r);
}, Ka = function(t, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = un([t], n.includeContainer, {
    filter: cn.bind(null, n),
    flatten: !0,
    getShadowRoot: n.getShadowRoot
  }) : r = Ji(t, n.includeContainer, cn.bind(null, n)), r;
}, ut = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return nt.call(t, an) === !1 ? !1 : Kn(n, t);
}, qa = /* @__PURE__ */ Xi.concat("iframe").join(","), kn = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return nt.call(t, qa) === !1 ? !1 : cn(n, t);
};
function qn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Ha(e) {
  if (Array.isArray(e)) return qn(e);
}
function Ir(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = ns(e)) || t) {
      n && (e = n);
      var r = 0, i = function() {
      };
      return {
        s: i,
        n: function() {
          return r >= e.length ? {
            done: !0
          } : {
            done: !1,
            value: e[r++]
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
  var s, o = !0, a = !1;
  return {
    s: function() {
      n = n.call(e);
    },
    n: function() {
      var l = n.next();
      return o = l.done, l;
    },
    e: function(l) {
      a = !0, s = l;
    },
    f: function() {
      try {
        o || n.return == null || n.return();
      } finally {
        if (a) throw s;
      }
    }
  };
}
function Wa(e, t, n) {
  return (t = Za(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Ya(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function za() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Pr(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Rr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pr(Object(n), !0).forEach(function(r) {
      Wa(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Pr(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Ga(e) {
  return Ha(e) || Ya(e) || ns(e) || za();
}
function Xa(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Za(e) {
  var t = Xa(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function ns(e, t) {
  if (e) {
    if (typeof e == "string") return qn(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? qn(e, t) : void 0;
  }
}
var Se = {
  // Returns the trap from the top of the stack.
  getActiveTrap: function(t) {
    return t?.length > 0 ? t[t.length - 1] : null;
  },
  // Pauses the currently active trap, then adds a new trap to the stack.
  activateTrap: function(t, n) {
    var r = Se.getActiveTrap(t);
    n !== r && Se.pauseTrap(t);
    var i = t.indexOf(n);
    i === -1 || t.splice(i, 1), t.push(n);
  },
  // Removes the trap from the top of the stack, then unpauses the next trap down.
  deactivateTrap: function(t, n) {
    var r = t.indexOf(n);
    r !== -1 && t.splice(r, 1), Se.unpauseTrap(t);
  },
  // Pauses the trap at the top of the stack.
  pauseTrap: function(t) {
    var n = Se.getActiveTrap(t);
    n?._setPausedState(!0);
  },
  // Unpauses the trap at the top of the stack.
  unpauseTrap: function(t) {
    var n = Se.getActiveTrap(t);
    n && !n._isManuallyPaused() && n._setPausedState(!1);
  }
}, Ja = function(t) {
  return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
}, Qa = function(t) {
  return t?.key === "Escape" || t?.key === "Esc" || t?.keyCode === 27;
}, Ot = function(t) {
  return t?.key === "Tab" || t?.keyCode === 9;
}, el = function(t) {
  return Ot(t) && !t.shiftKey;
}, tl = function(t) {
  return Ot(t) && t.shiftKey;
}, Cr = function(t) {
  return setTimeout(t, 0);
}, wt = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
    r[i - 1] = arguments[i];
  return typeof t == "function" ? t.apply(void 0, r) : t;
}, Wt = function(t) {
  return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
}, nl = [], rl = function(t, n) {
  var r = n?.document || document, i = n?.trapStack || nl, s = Rr({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    isolateSubtrees: !1,
    isKeyForward: el,
    isKeyBackward: tl
  }, n), o = {
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
  }, a, l = function(d, p, m) {
    return d && d[p] !== void 0 ? d[p] : s[m || p];
  }, u = function(d, p) {
    var m = typeof p?.composedPath == "function" ? p.composedPath() : void 0;
    return o.containerGroups.findIndex(function(S) {
      var N = S.container, x = S.tabbableNodes;
      return N.contains(d) || m?.includes(N) || x.find(function(T) {
        return T === d;
      });
    });
  }, v = function(d) {
    var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, m = p.hasFallback, S = m === void 0 ? !1 : m, N = p.params, x = N === void 0 ? [] : N, T = s[d];
    if (typeof T == "function" && (T = T.apply(void 0, Ga(x))), T === !0 && (T = void 0), !T) {
      if (T === void 0 || T === !1)
        return T;
      throw new Error("`".concat(d, "` was specified but was not a node, or did not return a node"));
    }
    var R = T;
    if (typeof T == "string") {
      try {
        R = r.querySelector(T);
      } catch (F) {
        throw new Error("`".concat(d, '` appears to be an invalid selector; error="').concat(F.message, '"'));
      }
      if (!R && !S)
        throw new Error("`".concat(d, "` as selector refers to no known node"));
    }
    return R;
  }, f = function() {
    var d = v("initialFocus", {
      hasFallback: !0
    });
    if (d === !1)
      return !1;
    if (d === void 0 || d && !kn(d, s.tabbableOptions))
      if (u(r.activeElement) >= 0)
        d = r.activeElement;
      else {
        var p = o.tabbableGroups[0], m = p && p.firstTabbableNode;
        d = m || v("fallbackFocus");
      }
    else d === null && (d = v("fallbackFocus"));
    if (!d)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return d;
  }, c = function() {
    if (o.containerGroups = o.containers.map(function(d) {
      var p = Ua(d, s.tabbableOptions), m = Ka(d, s.tabbableOptions), S = p.length > 0 ? p[0] : void 0, N = p.length > 0 ? p[p.length - 1] : void 0, x = m.find(function(F) {
        return ut(F);
      }), T = m.slice().reverse().find(function(F) {
        return ut(F);
      }), R = !!p.find(function(F) {
        return Ye(F) > 0;
      });
      return {
        container: d,
        tabbableNodes: p,
        focusableNodes: m,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: R,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: S,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: N,
        // NOTE: DOM order is NOT NECESSARILY "document position" order, but figuring that out
        //  would require more than just https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        //  because that API doesn't work with Shadow DOM as well as it should (@see
        //  https://github.com/whatwg/dom/issues/320) and since this first/last is only needed, so far,
        //  to address an edge case related to positive tabindex support, this seems like a much easier,
        //  "close enough most of the time" alternative for positive tabindexes which should generally
        //  be avoided anyway...
        /** First tabbable node in container, __DOM__ order; `undefined` if none. */
        firstDomTabbableNode: x,
        /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
        lastDomTabbableNode: T,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(ee) {
          var U = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, ue = p.indexOf(ee);
          return ue < 0 ? U ? m.slice(m.indexOf(ee) + 1).find(function(Ue) {
            return ut(Ue);
          }) : m.slice(0, m.indexOf(ee)).reverse().find(function(Ue) {
            return ut(Ue);
          }) : p[ue + (U ? 1 : -1)];
        }
      };
    }), o.tabbableGroups = o.containerGroups.filter(function(d) {
      return d.tabbableNodes.length > 0;
    }), o.tabbableGroups.length <= 0 && !v("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (o.containerGroups.find(function(d) {
      return d.posTabIndexesFound;
    }) && o.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, h = function(d) {
    var p = d.activeElement;
    if (p)
      return p.shadowRoot && p.shadowRoot.activeElement !== null ? h(p.shadowRoot) : p;
  }, b = function(d) {
    if (d !== !1 && d !== h(document)) {
      if (!d || !d.focus) {
        b(f());
        return;
      }
      d.focus({
        preventScroll: !!s.preventScroll
      }), o.mostRecentlyFocusedNode = d, Ja(d) && d.select();
    }
  }, w = function(d) {
    var p = v("setReturnFocus", {
      params: [d]
    });
    return p || (p === !1 ? !1 : d);
  }, $ = function(d) {
    var p = d.target, m = d.event, S = d.isBackward, N = S === void 0 ? !1 : S;
    p = p || Wt(m), c();
    var x = null;
    if (o.tabbableGroups.length > 0) {
      var T = u(p, m), R = T >= 0 ? o.containerGroups[T] : void 0;
      if (T < 0)
        N ? x = o.tabbableGroups[o.tabbableGroups.length - 1].lastTabbableNode : x = o.tabbableGroups[0].firstTabbableNode;
      else if (N) {
        var F = o.tabbableGroups.findIndex(function(yn) {
          var gn = yn.firstTabbableNode;
          return p === gn;
        });
        if (F < 0 && (R.container === p || kn(p, s.tabbableOptions) && !ut(p, s.tabbableOptions) && !R.nextTabbableNode(p, !1)) && (F = T), F >= 0) {
          var ee = F === 0 ? o.tabbableGroups.length - 1 : F - 1, U = o.tabbableGroups[ee];
          x = Ye(p) >= 0 ? U.lastTabbableNode : U.lastDomTabbableNode;
        } else Ot(m) || (x = R.nextTabbableNode(p, !1));
      } else {
        var ue = o.tabbableGroups.findIndex(function(yn) {
          var gn = yn.lastTabbableNode;
          return p === gn;
        });
        if (ue < 0 && (R.container === p || kn(p, s.tabbableOptions) && !ut(p, s.tabbableOptions) && !R.nextTabbableNode(p)) && (ue = T), ue >= 0) {
          var Ue = ue === o.tabbableGroups.length - 1 ? 0 : ue + 1, Ie = o.tabbableGroups[Ue];
          x = Ye(p) >= 0 ? Ie.firstTabbableNode : Ie.firstDomTabbableNode;
        } else Ot(m) || (x = R.nextTabbableNode(p));
      }
    } else
      x = v("fallbackFocus");
    return x;
  }, E = function(d) {
    var p = Wt(d);
    if (!(u(p, d) >= 0)) {
      if (wt(s.clickOutsideDeactivates, d)) {
        a.deactivate({
          // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
          //  which will result in the outside click setting focus to the node
          //  that was clicked (and if not focusable, to "nothing"); by setting
          //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
          //  on activation (or the configured `setReturnFocus` node), whether the
          //  outside click was on a focusable node or not
          returnFocus: s.returnFocusOnDeactivate
        });
        return;
      }
      wt(s.allowOutsideClick, d) || d.preventDefault();
    }
  }, L = function(d) {
    var p = Wt(d), m = u(p, d) >= 0;
    if (m || p instanceof Document)
      m && (o.mostRecentlyFocusedNode = p);
    else {
      d.stopImmediatePropagation();
      var S, N = !0;
      if (o.mostRecentlyFocusedNode)
        if (Ye(o.mostRecentlyFocusedNode) > 0) {
          var x = u(o.mostRecentlyFocusedNode), T = o.containerGroups[x].tabbableNodes;
          if (T.length > 0) {
            var R = T.findIndex(function(F) {
              return F === o.mostRecentlyFocusedNode;
            });
            R >= 0 && (s.isKeyForward(o.recentNavEvent) ? R + 1 < T.length && (S = T[R + 1], N = !1) : R - 1 >= 0 && (S = T[R - 1], N = !1));
          }
        } else
          o.containerGroups.some(function(F) {
            return F.tabbableNodes.some(function(ee) {
              return Ye(ee) > 0;
            });
          }) || (N = !1);
      else
        N = !1;
      N && (S = $({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: o.mostRecentlyFocusedNode,
        isBackward: s.isKeyBackward(o.recentNavEvent)
      })), b(S || o.mostRecentlyFocusedNode || f());
    }
    o.recentNavEvent = void 0;
  }, M = function(d) {
    var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    o.recentNavEvent = d;
    var m = $({
      event: d,
      isBackward: p
    });
    m && (Ot(d) && d.preventDefault(), b(m));
  }, C = function(d) {
    (s.isKeyForward(d) || s.isKeyBackward(d)) && M(d, s.isKeyBackward(d));
  }, W = function(d) {
    Qa(d) && wt(s.escapeDeactivates, d) !== !1 && (d.preventDefault(), a.deactivate());
  }, ie = function(d) {
    var p = Wt(d);
    u(p, d) >= 0 || wt(s.clickOutsideDeactivates, d) || wt(s.allowOutsideClick, d) || (d.preventDefault(), d.stopImmediatePropagation());
  }, k = function() {
    if (o.active)
      return Se.activateTrap(i, a), o.delayInitialFocusTimer = s.delayInitialFocus ? Cr(function() {
        b(f());
      }) : b(f()), r.addEventListener("focusin", L, !0), r.addEventListener("mousedown", E, {
        capture: !0,
        passive: !1
      }), r.addEventListener("touchstart", E, {
        capture: !0,
        passive: !1
      }), r.addEventListener("click", ie, {
        capture: !0,
        passive: !1
      }), r.addEventListener("keydown", C, {
        capture: !0,
        passive: !1
      }), r.addEventListener("keydown", W), a;
  }, O = function(d) {
    o.active && !o.paused && a._setSubtreeIsolation(!1), o.adjacentElements.clear(), o.alreadyInert.clear();
    var p = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Set(), S = Ir(d), N;
    try {
      for (S.s(); !(N = S.n()).done; ) {
        var x = N.value;
        p.add(x);
        for (var T = typeof ShadowRoot < "u" && x.getRootNode() instanceof ShadowRoot, R = x; R; ) {
          p.add(R);
          var F = R.parentElement, ee = [];
          F ? ee = F.children : !F && T && (ee = R.getRootNode().children, F = R.getRootNode().host, T = typeof ShadowRoot < "u" && F.getRootNode() instanceof ShadowRoot);
          var U = Ir(ee), ue;
          try {
            for (U.s(); !(ue = U.n()).done; ) {
              var Ue = ue.value;
              m.add(Ue);
            }
          } catch (Ie) {
            U.e(Ie);
          } finally {
            U.f();
          }
          R = F;
        }
      }
    } catch (Ie) {
      S.e(Ie);
    } finally {
      S.f();
    }
    p.forEach(function(Ie) {
      m.delete(Ie);
    }), o.adjacentElements = m;
  }, j = function() {
    if (o.active)
      return r.removeEventListener("focusin", L, !0), r.removeEventListener("mousedown", E, !0), r.removeEventListener("touchstart", E, !0), r.removeEventListener("click", ie, !0), r.removeEventListener("keydown", C, !0), r.removeEventListener("keydown", W), a;
  }, q = function(d) {
    var p = d.some(function(m) {
      var S = Array.from(m.removedNodes);
      return S.some(function(N) {
        return N === o.mostRecentlyFocusedNode;
      });
    });
    p && b(f());
  }, y = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(q) : void 0, A = function() {
    y && (y.disconnect(), o.active && !o.paused && o.containers.map(function(d) {
      y.observe(d, {
        subtree: !0,
        childList: !0
      });
    }));
  };
  return a = {
    get active() {
      return o.active;
    },
    get paused() {
      return o.paused;
    },
    activate: function(d) {
      if (o.active)
        return this;
      var p = l(d, "onActivate"), m = l(d, "onPostActivate"), S = l(d, "checkCanFocusTrap"), N = Se.getActiveTrap(i), x = !1;
      N && !N.paused && (N._setSubtreeIsolation(!1), x = !0);
      try {
        S || c(), o.active = !0, o.paused = !1, o.nodeFocusedBeforeActivation = h(r), p?.();
        var T = function() {
          S && c(), k(), A(), s.isolateSubtrees && a._setSubtreeIsolation(!0), m?.();
        };
        if (S)
          return S(o.containers.concat()).then(T, T), this;
        T();
      } catch (R) {
        throw N === Se.getActiveTrap(i) && x && N._setSubtreeIsolation(!0), R;
      }
      return this;
    },
    deactivate: function(d) {
      if (!o.active)
        return this;
      var p = Rr({
        onDeactivate: s.onDeactivate,
        onPostDeactivate: s.onPostDeactivate,
        checkCanReturnFocus: s.checkCanReturnFocus
      }, d);
      clearTimeout(o.delayInitialFocusTimer), o.delayInitialFocusTimer = void 0, o.paused || a._setSubtreeIsolation(!1), o.alreadyInert.clear(), j(), o.active = !1, o.paused = !1, A(), Se.deactivateTrap(i, a);
      var m = l(p, "onDeactivate"), S = l(p, "onPostDeactivate"), N = l(p, "checkCanReturnFocus"), x = l(p, "returnFocus", "returnFocusOnDeactivate");
      m?.();
      var T = function() {
        Cr(function() {
          x && b(w(o.nodeFocusedBeforeActivation)), S?.();
        });
      };
      return x && N ? (N(w(o.nodeFocusedBeforeActivation)).then(T, T), this) : (T(), this);
    },
    pause: function(d) {
      return o.active ? (o.manuallyPaused = !0, this._setPausedState(!0, d)) : this;
    },
    unpause: function(d) {
      return o.active ? (o.manuallyPaused = !1, i[i.length - 1] !== this ? this : this._setPausedState(!1, d)) : this;
    },
    updateContainerElements: function(d) {
      var p = [].concat(d).filter(Boolean);
      return o.containers = p.map(function(m) {
        return typeof m == "string" ? r.querySelector(m) : m;
      }), s.isolateSubtrees && O(o.containers), o.active && (c(), s.isolateSubtrees && !o.paused && a._setSubtreeIsolation(!0)), A(), this;
    }
  }, Object.defineProperties(a, {
    _isManuallyPaused: {
      value: function() {
        return o.manuallyPaused;
      }
    },
    _setPausedState: {
      value: function(d, p) {
        if (o.paused === d)
          return this;
        if (o.paused = d, d) {
          var m = l(p, "onPause"), S = l(p, "onPostPause");
          m?.(), j(), A(), a._setSubtreeIsolation(!1), S?.();
        } else {
          var N = l(p, "onUnpause"), x = l(p, "onPostUnpause");
          N?.(), a._setSubtreeIsolation(!0), c(), k(), A(), x?.();
        }
        return this;
      }
    },
    _setSubtreeIsolation: {
      value: function(d) {
        s.isolateSubtrees && o.adjacentElements.forEach(function(p) {
          if (d) {
            var m = p.inert || p.hasAttribute("inert");
            m && o.alreadyInert.add(p), p.inert = !0;
          } else
            o.alreadyInert.has(p) || (p.inert = !1);
        });
      }
    }
  }), a.updateContainerElements(t), a;
};
const il = ((e, t = {}) => {
  let n = V;
  const r = (i) => {
    n();
    const s = rl(e, {
      returnFocusOnDeactivate: !1,
      allowOutsideClick: !0,
      escapeDeactivates: !1,
      clickOutsideDeactivates: !1,
      ...i
    });
    n = s.deactivate, s.activate();
  };
  return r(t), { destroy: n, update: r };
}), sl = ((e, t) => {
  let n = V;
  function r(i) {
    n();
    const { onClose: s, shouldCloseOnInteractOutside: o, closeOnInteractOutside: a } = i;
    function l() {
      s?.();
    }
    function u(f) {
      const c = f.target;
      or(c) && f.stopImmediatePropagation();
    }
    function v(f) {
      o?.(f) && (f.stopImmediatePropagation(), l());
    }
    n = al(e, {
      onInteractOutsideStart: u,
      onInteractOutside: a ? v : void 0,
      enabled: a
    }).destroy;
  }
  return r(t), {
    update: r,
    destroy() {
      n();
    }
  };
}), ol = ((e, t = "body") => {
  let n;
  if (!Ne(t) && typeof t != "string")
    return {
      destroy: V
    };
  async function r(s = "body") {
    if (t = s, typeof t == "string") {
      if (n = document.querySelector(t), n === null && (await Oi(), n = document.querySelector(t)), n === null)
        throw new Error(`No element found matching css selector: "${t}"`);
    } else if (t instanceof HTMLElement)
      n = t;
    else
      throw new TypeError(`Unknown portal target type: ${t === null ? "null" : typeof t}. Allowed types: string (CSS selector) or HTMLElement.`);
    e.dataset.portal = "", n.appendChild(e), e.hidden = !1;
  }
  function i() {
    e.remove();
  }
  return r(t), {
    update: r,
    destroy: i
  };
}), Hn = /* @__PURE__ */ new Set(), al = ((e, t = {}) => {
  let n = V, r = V, i = V, s = V;
  Hn.add(e);
  const o = Ta(e);
  let a = !1, l = !1;
  const u = {
    pointerdown: !1,
    pointerup: !1,
    mousedown: !1,
    mouseup: !1,
    touchstart: !1,
    touchend: !1,
    click: !1
  }, v = () => {
    for (const E in u)
      u[E] = !1;
  }, f = () => {
    for (const E of Object.values(u))
      if (E)
        return !0;
    return !1;
  }, c = (E, L) => Un(o, E, (M) => {
    u[E] = !0, L?.(M);
  }, !0), h = (E, L) => Un(o, E, (M) => {
    u[E] = !1;
    const C = {};
    Ne(M.target) && na(M.target.shadowRoot) && (C.shadowTarget = M.composedPath()[0]), L?.(M, C);
  });
  function b(E) {
    n(), r(), i(), s(), v();
    const { onInteractOutside: L, onInteractOutsideStart: M, enabled: C } = { enabled: !0, ...E };
    if (!C)
      return;
    let W = !1;
    const ie = Tn((q, y) => {
      if (!W || f())
        return;
      L && Fr(q, e) && M?.(q);
      const A = y?.shadowTarget ? y.shadowTarget : q.target;
      or(A) && Gi(e, A) && (l = !0), a = !0;
    }, 10);
    r = ie.destroy;
    const k = Tn((q) => {
      W && !f() && w(q) && L?.(q), $();
    }, 10);
    i = k.destroy;
    const O = Tn(v, 20);
    s = O.destroy;
    const j = () => {
      W = ll(e);
    };
    n = on(
      /** Capture Events For Interaction Start */
      c("pointerdown", j),
      c("mousedown", j),
      c("touchstart", j),
      /**
       * Intercepted events are reset only at the end of an interaction, allowing
       * interception at the start while still capturing the entire interaction.
       * Additionally, intercepted events are reset in the capture phase with `resetInterceptedEventsDebounced`,
       * accommodating events not invoked in the bubbling phase due to user interception.
       */
      c("pointerup", O),
      c("mouseup", O),
      c("touchend", O),
      c("click", O),
      /** Bubbling Events For Interaction Start */
      h("pointerdown", ie),
      h("mousedown", ie),
      h("touchstart", ie),
      /**
       * To effectively detect an end of an interaction, we must monitor all relevant events,
       * not just `click` events. This is because on touch devices, actions like pressing,
       * moving the finger, and lifting it off the screen may not trigger a `click` event,
       * but should still invoke `onPointerUp` to properly handle the interaction.
       */
      h("pointerup", k),
      h("mouseup", k),
      h("touchend", k),
      h("click", k)
    );
  }
  function w(E) {
    return !!(a && !l && Fr(E, e));
  }
  function $() {
    a = !1, l = !1;
  }
  return b(t), {
    update: b,
    destroy() {
      n(), r(), i(), s(), Hn.delete(e);
    }
  };
});
function Fr(e, t) {
  if ("button" in e && e.button > 0)
    return !1;
  const n = e.target;
  if (!or(n))
    return !1;
  const r = n.ownerDocument;
  return !r || !r.documentElement.contains(n) ? !1 : t && !Gi(t, n);
}
function ll(e) {
  return Array.from(Hn).at(-1) === e;
}
const ul = {
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
  ...Hi(ul, "isDateDisabled", "isDateUnavailable", "value", "locale", "disabled", "readonly", "minValue", "maxValue", "weekdayFormat")
});
const { name: We } = ta("dialog"), cl = {
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
}, fl = ["content", "title", "description"];
function dl(e) {
  const t = { ...cl, ...e }, n = Nr(Hi(t, "ids")), { preventScroll: r, escapeBehavior: i, closeOnOutsideClick: s, role: o, portal: a, forceVisible: l, openFocus: u, closeFocus: v, onOutsideClick: f } = n, c = gt.writable(null), h = Nr({
    ...va(fl),
    ...t.ids
  }), b = t.open ?? _n(t.defaultOpen), w = la(b, t?.onOpenChange), $ = sr([w, l], ([y, A]) => y || A);
  let E = V;
  function L(y) {
    const A = y.currentTarget, g = y.currentTarget;
    !Ne(A) || !Ne(g) || (w.set(!0), c.set(g));
  }
  function M() {
    w.set(!1);
  }
  const C = Re(We("trigger"), {
    stores: [w],
    returned: ([y]) => ({
      "aria-haspopup": "dialog",
      "aria-expanded": y,
      type: "button"
    }),
    action: (y) => ({
      destroy: on(Ht(y, "click", (g) => {
        L(g);
      }), Ht(y, "keydown", (g) => {
        g.key !== $t.ENTER && g.key !== $t.SPACE || (g.preventDefault(), L(g));
      }))
    })
  }), W = Re(We("overlay"), {
    stores: [$, w],
    returned: ([y, A]) => ({
      hidden: y ? void 0 : !0,
      tabindex: -1,
      style: y ? void 0 : Vn({ display: "none" }),
      "aria-hidden": !0,
      "data-state": A ? "open" : "closed"
    })
  }), ie = Re(We("content"), {
    stores: [$, h.content, h.description, h.title, w],
    returned: ([y, A, g, d, p]) => ({
      id: A,
      role: o.get(),
      "aria-describedby": g,
      "aria-labelledby": d,
      "aria-modal": y ? "true" : void 0,
      "data-state": p ? "open" : "closed",
      tabindex: -1,
      hidden: y ? void 0 : !0,
      style: y ? void 0 : Vn({ display: "none" })
    }),
    action: (y) => {
      let A = V, g = V, d = V;
      const p = Tt([$, s], ([m, S]) => {
        g(), A(), d(), m && (g = sl(y, {
          closeOnInteractOutside: S,
          onClose: M,
          shouldCloseOnInteractOutside(N) {
            return f.get()?.(N), !N.defaultPrevented;
          }
        }).destroy, A = Sa(y, {
          handler: M,
          behaviorType: i
        }).destroy, d = il(y, { fallbackFocus: y }).destroy);
      });
      return {
        destroy: () => {
          E(), p(), g(), A(), d();
        }
      };
    }
  }), k = Re(We("portalled"), {
    stores: a,
    returned: (y) => ({
      "data-portal": ea(y)
    }),
    action: (y) => {
      const A = Tt([a], ([g]) => {
        if (g === null)
          return V;
        const d = $a(y, g);
        return d === null ? V : ol(y, d).destroy;
      });
      return {
        destroy() {
          A();
        }
      };
    }
  }), O = Re(We("title"), {
    stores: [h.title],
    returned: ([y]) => ({
      id: y
    })
  }), j = Re(We("description"), {
    stores: [h.description],
    returned: ([y]) => ({
      id: y
    })
  }), q = Re(We("close"), {
    returned: () => ({
      type: "button"
    }),
    action: (y) => ({
      destroy: on(Ht(y, "click", () => {
        M();
      }), Ht(y, "keydown", (g) => {
        g.key !== $t.SPACE && g.key !== $t.ENTER || (g.preventDefault(), M());
      }))
    })
  });
  return Tt([w, r], ([y, A]) => {
    if (kr) {
      if (A && y && (E = wa()), y) {
        const g = document.getElementById(h.content.get());
        Or({ prop: u.get(), defaultEl: g });
      }
      return () => {
        l.get() || E();
      };
    }
  }), Tt(w, (y) => {
    !kr || y || Or({
      prop: v.get(),
      defaultEl: c.get()
    });
  }, { skipFirstRun: !0 }), {
    ids: h,
    elements: {
      content: ie,
      trigger: C,
      title: O,
      description: j,
      overlay: W,
      close: q,
      portalled: k
    },
    states: {
      open: w
    },
    options: n
  };
}
var vl = /* @__PURE__ */ rr('<div><div></div> <div><div class="modal-header svelte-ho3w24"><h3> </h3></div> <div class="modal-body svelte-ho3w24"><p> </p> <div class="feature-list svelte-ho3w24"><p class="svelte-ho3w24">This modal demonstrates Svelte + Melt UI integration:</p> <ul class="svelte-ho3w24"><li class="svelte-ho3w24">✅ Melt UI headless components</li> <li class="svelte-ho3w24">✅ Svelte 5 runes ($bindable, $state)</li> <li class="svelte-ho3w24">✅ Automatic accessibility (ARIA)</li> <li class="svelte-ho3w24">✅ Automatic focus trap</li> <li class="svelte-ho3w24">✅ ESC key to close</li> <li class="svelte-ho3w24">✅ Click outside to close</li> <li class="svelte-ho3w24">✅ Smooth animations</li></ul></div></div> <div class="modal-actions svelte-ho3w24"><button>Close</button></div></div></div>'), hl = /* @__PURE__ */ rr('<div class="container svelte-ho3w24"><button>Open Svelte Modal</button> <!></div>');
const pl = {
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
function bl(e, t) {
  Xn(t, !0), Di(e, pl);
  const n = () => Pe(b, "$trigger", v), r = () => Pe(C, "$portalled", v), i = () => Pe(w, "$overlay", v), s = () => Pe($, "$content", v), o = () => Pe(E, "$titleEl", v), a = () => Pe(L, "$descriptionEl", v), l = () => Pe(M, "$close", v), u = () => Pe(W, "$open", v), [v, f] = Wo();
  let c = Bn(t, "title", 15, "Svelte Modal"), h = Bn(t, "description", 15, "This is a modal dialog built with Svelte and Melt UI.");
  const {
    elements: {
      trigger: b,
      overlay: w,
      content: $,
      title: E,
      description: L,
      close: M,
      portalled: C
    },
    states: { open: W }
  } = dl({ forceVisible: !0 });
  var ie = {
    get title() {
      return c();
    },
    set title(A = "Svelte Modal") {
      c(A), xt();
    },
    get description() {
      return h();
    },
    set description(A = "This is a modal dialog built with Svelte and Melt UI.") {
      h(A), xt();
    }
  }, k = hl(), O = fe(k);
  He(O, () => ({ type: "button", class: "open-button", ...n() }), void 0, void 0, void 0, "svelte-ho3w24"), qe(O, (A) => n().action?.(A));
  var j = Xe(O, 2);
  {
    var q = (A) => {
      var g = vl();
      He(g, () => ({ ...r() }), void 0, void 0, void 0, "svelte-ho3w24");
      var d = fe(g);
      He(d, () => ({ ...i(), class: "overlay" }), void 0, void 0, void 0, "svelte-ho3w24"), qe(d, (U) => i().action?.(U));
      var p = Xe(d, 2);
      He(p, () => ({ ...s(), class: "modal-content" }), void 0, void 0, void 0, "svelte-ho3w24");
      var m = fe(p), S = fe(m);
      He(S, () => ({ ...o(), class: "modal-title" }), void 0, void 0, void 0, "svelte-ho3w24");
      var N = fe(S, !0);
      ce(S), qe(S, (U) => o().action?.(U)), ce(m);
      var x = Xe(m, 2), T = fe(x);
      He(T, () => ({ ...a(), class: "modal-description" }), void 0, void 0, void 0, "svelte-ho3w24");
      var R = fe(T, !0);
      ce(T), qe(T, (U) => a().action?.(U)), zr(2), ce(x);
      var F = Xe(x, 2), ee = fe(F);
      He(ee, () => ({ type: "button", class: "close-button", ...l() }), void 0, void 0, void 0, "svelte-ho3w24"), qe(ee, (U) => l().action?.(U)), ce(F), ce(p), qe(p, (U) => s().action?.(U)), ce(g), qe(g, (U) => r().action?.(U)), _i(() => {
        Fn(N, c()), Fn(R, h());
      }), rn(A, g);
    };
    Po(j, (A) => {
      u() && A(q);
    });
  }
  ce(k), rn(e, k);
  var y = Zn(ie);
  return f(), y;
}
customElements.define("svelte-modal", qi(bl, { title: {}, description: {} }, [], [], !0));
