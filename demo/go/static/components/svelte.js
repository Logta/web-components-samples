typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
const On = 2, Ft = "[", Lt = "[!", qt = "]", xe = {}, E = /* @__PURE__ */ Symbol(), Rn = /* @__PURE__ */ Symbol("filename"), Tt = globalThis.process?.env?.NODE_ENV, d = Tt && !Tt.toLowerCase().startsWith("prod");
var Cn = Array.isArray, Nn = Array.prototype.indexOf, Pn = Array.from, Be = Object.keys, U = Object.defineProperty, Q = Object.getOwnPropertyDescriptor, jn = Object.prototype, Dn = Array.prototype, Mn = Object.getPrototypeOf, At = Object.isExtensible;
function In(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Yt() {
  var e, t, n = new Promise((r, i) => {
    e = r, t = i;
  });
  return { promise: n, resolve: e, reject: t };
}
const b = 2, mt = 4, yt = 8, Fn = 1 << 24, X = 16, se = 32, ie = 64, Je = 128, Y = 512, S = 1024, P = 2048, V = 4096, ee = 8192, K = 16384, Xe = 32768, He = 65536, Ue = 1 << 17, Bt = 1 << 18, _e = 1 << 19, Ln = 1 << 20, re = 32768, at = 1 << 21, Qe = 1 << 22, te = 1 << 23, ce = /* @__PURE__ */ Symbol("$state"), Ht = /* @__PURE__ */ Symbol("legacy props"), Ut = /* @__PURE__ */ Symbol("proxy path"), we = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), Vt = 3, et = 8;
function qn() {
  if (d) {
    const e = new Error("async_derived_orphan\nCannot create a `$derived(...)` with an `await` expression outside of an effect tree\nhttps://svelte.dev/e/async_derived_orphan");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Yn() {
  if (d) {
    const e = new Error(`derived_references_self
A derived value cannot reference itself recursively
https://svelte.dev/e/derived_references_self`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/derived_references_self");
}
function Bn(e) {
  if (d) {
    const t = new Error(`effect_in_teardown
\`${e}\` cannot be used inside an effect cleanup function
https://svelte.dev/e/effect_in_teardown`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Hn() {
  if (d) {
    const e = new Error("effect_in_unowned_derived\nEffect cannot be created inside a `$derived` value that was not itself created inside an effect\nhttps://svelte.dev/e/effect_in_unowned_derived");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Un(e) {
  if (d) {
    const t = new Error(`effect_orphan
\`${e}\` can only be used inside an effect (e.g. during component initialisation)
https://svelte.dev/e/effect_orphan`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/effect_orphan");
}
function Vn() {
  if (d) {
    const e = new Error(`effect_update_depth_exceeded
Maximum update depth exceeded. This typically indicates that an effect reads and writes the same piece of state
https://svelte.dev/e/effect_update_depth_exceeded`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function zn() {
  if (d) {
    const e = new Error(`hydration_failed
Failed to hydrate the application
https://svelte.dev/e/hydration_failed`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/hydration_failed");
}
function Wn(e) {
  if (d) {
    const t = new Error(`props_invalid_value
Cannot do \`bind:${e}={undefined}\` when \`${e}\` has a fallback value
https://svelte.dev/e/props_invalid_value`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Gn(e) {
  if (d) {
    const t = new Error(`rune_outside_svelte
The \`${e}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files
https://svelte.dev/e/rune_outside_svelte`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/rune_outside_svelte");
}
function Kn() {
  if (d) {
    const e = new Error("state_descriptors_fixed\nProperty descriptors defined on `$state` objects must contain `value` and always be `enumerable`, `configurable` and `writable`.\nhttps://svelte.dev/e/state_descriptors_fixed");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Zn() {
  if (d) {
    const e = new Error("state_prototype_fixed\nCannot set prototype of `$state` object\nhttps://svelte.dev/e/state_prototype_fixed");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Jn() {
  if (d) {
    const e = new Error("state_unsafe_mutation\nUpdating state inside `$derived(...)`, `$inspect(...)` or a template expression is forbidden. If the value should not be reactive, declare it without `$state`\nhttps://svelte.dev/e/state_unsafe_mutation");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Xn() {
  if (d) {
    const e = new Error("svelte_boundary_reset_onerror\nA `<svelte:boundary>` `reset` function cannot be called while an error is still being handled\nhttps://svelte.dev/e/svelte_boundary_reset_onerror");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
var Re = "font-weight: bold", Ce = "font-weight: normal";
function gt(e) {
  d ? console.warn(
    `%c[svelte] hydration_mismatch
%cHydration failed because the initial UI does not match what was rendered on the server
https://svelte.dev/e/hydration_mismatch`,
    Re,
    Ce
  ) : console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Qn() {
  d ? console.warn(`%c[svelte] lifecycle_double_unmount
%cTried to unmount a component that was not mounted
https://svelte.dev/e/lifecycle_double_unmount`, Re, Ce) : console.warn("https://svelte.dev/e/lifecycle_double_unmount");
}
function rt(e) {
  d ? console.warn(`%c[svelte] state_proxy_equality_mismatch
%cReactive \`$state(...)\` proxies and the values they proxy have different identities. Because of this, comparisons with \`${e}\` will produce unexpected results
https://svelte.dev/e/state_proxy_equality_mismatch`, Re, Ce) : console.warn("https://svelte.dev/e/state_proxy_equality_mismatch");
}
function er() {
  d ? console.warn(`%c[svelte] state_proxy_unmount
%cTried to unmount a state proxy, rather than a component
https://svelte.dev/e/state_proxy_unmount`, Re, Ce) : console.warn("https://svelte.dev/e/state_proxy_unmount");
}
function tr() {
  d ? console.warn("%c[svelte] svelte_boundary_reset_noop\n%cA `<svelte:boundary>` `reset` function only resets the boundary the first time it is called\nhttps://svelte.dev/e/svelte_boundary_reset_noop", Re, Ce) : console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let T = !1;
function Me(e) {
  T = e;
}
let $;
function J(e) {
  if (e === null)
    throw gt(), xe;
  return $ = e;
}
function zt() {
  return J(/* @__PURE__ */ le($));
}
function st(e) {
  if (T) {
    if (/* @__PURE__ */ le($) !== null)
      throw gt(), xe;
    $ = e;
  }
}
function nr(e = 1) {
  if (T) {
    for (var t = e, n = $; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ le(n);
    $ = n;
  }
}
function rr(e = !0) {
  for (var t = 0, n = $; ; ) {
    if (n.nodeType === et) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === qt) {
        if (t === 0) return n;
        t -= 1;
      } else (r === Ft || r === Lt) && (t += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ le(n)
    );
    e && n.remove(), n = i;
  }
}
function Wt(e) {
  return e === this.v;
}
function sr(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function ir(e) {
  return !sr(e, this.v);
}
let lr = !1;
function B(e, t) {
  return e.label = t, Gt(e.v, t), e;
}
function Gt(e, t) {
  return e?.[Ut]?.(t), e;
}
function fr(e) {
  const t = new Error(), n = or();
  return n.length === 0 ? null : (n.unshift(`
`), U(t, "stack", {
    value: n.join(`
`)
  }), U(t, "name", {
    value: e
  }), /** @type {Error & { stack: string }} */
  t);
}
function or() {
  const e = Error.stackTraceLimit;
  Error.stackTraceLimit = 1 / 0;
  const t = new Error().stack;
  if (Error.stackTraceLimit = e, !t) return [];
  const n = t.split(`
`), r = [];
  for (let i = 0; i < n.length; i++) {
    const s = n[i], l = s.replaceAll("\\", "/");
    if (s.trim() !== "Error") {
      if (s.includes("validate_each_keys"))
        return [];
      l.includes("svelte/src/internal") || l.includes("node_modules/.vite") || r.push(s);
    }
  }
  return r;
}
let R = null;
function me(e) {
  R = e;
}
let ke = null;
function Ve(e) {
  ke = e;
}
let Ne = null;
function Ot(e) {
  Ne = e;
}
function Kt(e, t = !1, n) {
  R = {
    p: R,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  }, d && (R.function = n, Ne = n);
}
function Zt(e) {
  var t = (
    /** @type {ComponentContext} */
    R
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      hn(r);
  }
  return e !== void 0 && (t.x = e), t.i = !0, R = t.p, d && (Ne = R?.function ?? null), e ?? /** @type {T} */
  {};
}
function Jt() {
  return !0;
}
let ae = [];
function Xt() {
  var e = ae;
  ae = [], In(e);
}
function $t(e) {
  if (ae.length === 0 && !be) {
    var t = ae;
    queueMicrotask(() => {
      t === ae && Xt();
    });
  }
  ae.push(e);
}
function ar() {
  for (; ae.length > 0; )
    Xt();
}
const ut = /* @__PURE__ */ new WeakMap();
function Qt(e) {
  var t = w;
  if (t === null)
    return p.f |= te, e;
  if (d && e instanceof Error && !ut.has(e) && ut.set(e, ur(e, t)), (t.f & Xe) === 0) {
    if ((t.f & Je) === 0)
      throw d && !t.parent && e instanceof Error && en(e), e;
    t.b.error(e);
  } else
    ye(e, t);
}
function ye(e, t) {
  for (; t !== null; ) {
    if ((t.f & Je) !== 0)
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    t = t.parent;
  }
  throw d && e instanceof Error && en(e), e;
}
function ur(e, t) {
  const n = Q(e, "message");
  if (!(n && !n.configurable)) {
    for (var r = xt ? "  " : "	", i = `
${r}in ${t.fn?.name || "<unknown>"}`, s = t.ctx; s !== null; )
      i += `
${r}in ${s.function?.[Rn].split("/").pop()}`, s = s.p;
    return {
      message: e.message + `
${i}
`,
      stack: e.stack?.split(`
`).filter((l) => !l.includes("svelte/src/internal")).join(`
`)
    };
  }
}
function en(e) {
  const t = ut.get(e);
  t && (U(e, "message", {
    value: t.message
  }), U(e, "stack", {
    value: t.stack
  }));
}
const Ie = /* @__PURE__ */ new Set();
let g = null, M = null, D = [], tt = null, ct = !1, be = !1;
class F {
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
  #o = 0;
  /**
   * The number of async effects that are currently in flight, _not_ inside a pending boundary
   */
  #s = 0;
  /**
   * A deferred that resolves when the batch is committed, used with `settled()`
   * TODO replace with Promise.withResolvers once supported widely enough
   * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
   */
  #a = null;
  /**
   * Deferred effects (which run after async work has completed) that are DIRTY
   * @type {Set<Effect>}
   */
  #l = /* @__PURE__ */ new Set();
  /**
   * Deferred effects that are MAYBE_DIRTY
   * @type {Set<Effect>}
   */
  #r = /* @__PURE__ */ new Set();
  /**
   * A set of branches that still exist, but will be destroyed when this batch
   * is committed — we skip over these during `process`
   * @type {Set<Effect>}
   */
  skipped_effects = /* @__PURE__ */ new Set();
  is_fork = !1;
  is_deferred() {
    return this.is_fork || this.#s > 0;
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    D = [], this.apply();
    var n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: []
    };
    for (const r of t)
      this.#n(r, n);
    this.is_fork || this.#u(), this.is_deferred() ? (this.#i(n.effects), this.#i(n.render_effects)) : (g = null, Rt(n.render_effects), Rt(n.effects), this.#a?.resolve()), M = null;
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {EffectTarget} target
   */
  #n(t, n) {
    t.f ^= S;
    for (var r = t.first; r !== null; ) {
      var i = r.f, s = (i & (se | ie)) !== 0, l = s && (i & S) !== 0, f = l || (i & ee) !== 0 || this.skipped_effects.has(r);
      if ((r.f & Je) !== 0 && r.b?.is_pending() && (n = {
        parent: n,
        effect: r,
        effects: [],
        render_effects: []
      }), !f && r.fn !== null) {
        s ? r.f ^= S : (i & mt) !== 0 ? n.effects.push(r) : je(r) && ((r.f & X) !== 0 && this.#l.add(r), Oe(r));
        var a = r.first;
        if (a !== null) {
          r = a;
          continue;
        }
      }
      var h = r.parent;
      for (r = r.next; r === null && h !== null; )
        h === n.effect && (this.#i(n.effects), this.#i(n.render_effects), n = /** @type {EffectTarget} */
        n.parent), r = h.next, h = h.parent;
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #i(t) {
    for (const n of t)
      (n.f & P) !== 0 ? this.#l.add(n) : (n.f & V) !== 0 && this.#r.add(n), this.#f(n.deps), A(n, S);
  }
  /**
   * @param {Value[] | null} deps
   */
  #f(t) {
    if (t !== null)
      for (const n of t)
        (n.f & b) === 0 || (n.f & re) === 0 || (n.f ^= re, this.#f(
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
    this.previous.has(t) || this.previous.set(t, n), (t.f & te) === 0 && (this.current.set(t, t.v), M?.set(t, t.v));
  }
  activate() {
    g = this, this.apply();
  }
  deactivate() {
    g === this && (g = null, M = null);
  }
  flush() {
    if (this.activate(), D.length > 0) {
      if (nn(), g !== null && g !== this)
        return;
    } else this.#o === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const t of this.#e) t(this);
    this.#e.clear();
  }
  #u() {
    if (this.#s === 0) {
      for (const t of this.#t) t();
      this.#t.clear();
    }
    this.#o === 0 && this.#c();
  }
  #c() {
    if (Ie.size > 1) {
      this.previous.clear();
      var t = M, n = !0, r = {
        parent: null,
        effect: null,
        effects: [],
        render_effects: []
      };
      for (const s of Ie) {
        if (s === this) {
          n = !1;
          continue;
        }
        const l = [];
        for (const [a, h] of this.current) {
          if (s.current.has(a))
            if (n && h !== s.current.get(a))
              s.current.set(a, h);
            else
              continue;
          l.push(a);
        }
        if (l.length === 0)
          continue;
        const f = [...s.current.keys()].filter((a) => !this.current.has(a));
        if (f.length > 0) {
          var i = D;
          D = [];
          const a = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Map();
          for (const _ of l)
            rn(_, f, a, h);
          if (D.length > 0) {
            g = s, s.apply();
            for (const _ of D)
              s.#n(_, r);
            s.deactivate();
          }
          D = i;
        }
      }
      g = null, M = t;
    }
    this.committed = !0, Ie.delete(this);
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    this.#o += 1, t && (this.#s += 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(t) {
    this.#o -= 1, t && (this.#s -= 1), this.revive();
  }
  revive() {
    for (const t of this.#l)
      this.#r.delete(t), A(t, P), ge(t);
    for (const t of this.#r)
      A(t, V), ge(t);
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
    return (this.#a ??= Yt()).promise;
  }
  static ensure() {
    if (g === null) {
      const t = g = new F();
      Ie.add(g), be || F.enqueue(() => {
        g === t && t.flush();
      });
    }
    return g;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    $t(t);
  }
  apply() {
  }
}
function tn(e) {
  var t = be;
  be = !0;
  try {
    for (var n; ; ) {
      if (ar(), D.length === 0 && (g?.flush(), D.length === 0))
        return tt = null, /** @type {T} */
        n;
      nn();
    }
  } finally {
    be = t;
  }
}
function nn() {
  var e = de;
  ct = !0;
  var t = d ? /* @__PURE__ */ new Set() : null;
  try {
    var n = 0;
    for (Ke(!0); D.length > 0; ) {
      var r = F.ensure();
      if (n++ > 1e3) {
        if (d) {
          var i = /* @__PURE__ */ new Map();
          for (const l of r.current.keys())
            for (const [f, a] of l.updated ?? []) {
              var s = i.get(f);
              s || (s = { error: a.error, count: 0 }, i.set(f, s)), s.count += a.count;
            }
          for (const l of i.values())
            l.error && console.error(l.error);
        }
        cr();
      }
      if (r.process(D), ne.clear(), d)
        for (const l of r.current.keys())
          t.add(l);
    }
  } finally {
    if (ct = !1, Ke(e), tt = null, d)
      for (
        const l of
        /** @type {Set<Source>} */
        t
      )
        l.updated = null;
  }
}
function cr() {
  try {
    Vn();
  } catch (e) {
    d && U(e, "stack", { value: "" }), ye(e, tt);
  }
}
let G = null;
function Rt(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (K | ee)) === 0 && je(r) && (G = /* @__PURE__ */ new Set(), Oe(r), r.deps === null && r.first === null && r.nodes === null && (r.teardown === null && r.ac === null ? wn(r) : r.fn = null), G?.size > 0)) {
        ne.clear();
        for (const i of G) {
          if ((i.f & (K | ee)) !== 0) continue;
          const s = [i];
          let l = i.parent;
          for (; l !== null; )
            G.has(l) && (G.delete(l), s.push(l)), l = l.parent;
          for (let f = s.length - 1; f >= 0; f--) {
            const a = s[f];
            (a.f & (K | ee)) === 0 && Oe(a);
          }
        }
        G.clear();
      }
    }
    G = null;
  }
}
function rn(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const s = i.f;
      (s & b) !== 0 ? rn(
        /** @type {Derived} */
        i,
        t,
        n,
        r
      ) : (s & (Qe | X)) !== 0 && (s & P) === 0 && sn(i, t, r) && (A(i, P), ge(
        /** @type {Effect} */
        i
      ));
    }
}
function sn(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (t.includes(i))
        return !0;
      if ((i.f & b) !== 0 && sn(
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
function ge(e) {
  for (var t = tt = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (ct && t === w && (n & X) !== 0 && (n & Bt) === 0)
      return;
    if ((n & (ie | se)) !== 0) {
      if ((n & S) === 0) return;
      t.f ^= S;
    }
  }
  D.push(t);
}
function dr(e) {
  let t = 0, n = Pe(0), r;
  return d && B(n, "createSubscriber version"), () => {
    Te() && (x(n), _n(() => (t === 0 && (r = Ur(() => e(() => Ee(n)))), t += 1, () => {
      $t(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, Ee(n));
      });
    })));
  };
}
var hr = He | _e | Je;
function _r(e, t, n) {
  new vr(e, t, n);
}
class vr {
  /** @type {Boundary | null} */
  parent;
  #t = !1;
  /** @type {TemplateNode} */
  #e;
  /** @type {TemplateNode | null} */
  #o = T ? $ : null;
  /** @type {BoundaryProps} */
  #s;
  /** @type {((anchor: Node) => void)} */
  #a;
  /** @type {Effect} */
  #l;
  /** @type {Effect | null} */
  #r = null;
  /** @type {Effect | null} */
  #n = null;
  /** @type {Effect | null} */
  #i = null;
  /** @type {DocumentFragment | null} */
  #f = null;
  /** @type {TemplateNode | null} */
  #u = null;
  #c = 0;
  #h = 0;
  #_ = !1;
  /**
   * A source containing the number of pending async deriveds/expressions.
   * Only created if `$effect.pending()` is used inside the boundary,
   * otherwise updating the source results in needless `Batch.ensure()`
   * calls followed by no-op flushes
   * @type {Source<number> | null}
   */
  #d = null;
  #y = dr(() => (this.#d = Pe(this.#c), d && B(this.#d, "$effect.pending()"), () => {
    this.#d = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, r) {
    this.#e = t, this.#s = n, this.#a = r, this.parent = /** @type {Effect} */
    w.b, this.#t = !!this.#s.pending, this.#l = Ir(() => {
      if (w.b = this, T) {
        const s = this.#o;
        zt(), /** @type {Comment} */
        s.nodeType === et && /** @type {Comment} */
        s.data === Lt ? this.#$() : this.#g();
      } else {
        var i = this.#w();
        try {
          this.#r = oe(() => r(i));
        } catch (s) {
          this.error(s);
        }
        this.#h > 0 ? this.#p() : this.#t = !1;
      }
      return () => {
        this.#u?.remove();
      };
    }, hr), T && (this.#e = $);
  }
  #g() {
    try {
      this.#r = oe(() => this.#a(this.#e));
    } catch (t) {
      this.error(t);
    }
    this.#t = !1;
  }
  #$() {
    const t = this.#s.pending;
    t && (this.#n = oe(() => t(this.#e)), F.enqueue(() => {
      var n = this.#w();
      this.#r = this.#v(() => (F.ensure(), oe(() => this.#a(n)))), this.#h > 0 ? this.#p() : (qe(
        /** @type {Effect} */
        this.#n,
        () => {
          this.#n = null;
        }
      ), this.#t = !1);
    }));
  }
  #w() {
    var t = this.#e;
    return this.#t && (this.#u = Se(), this.#e.before(this.#u), t = this.#u), t;
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return this.#t || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!this.#s.pending;
  }
  /**
   * @param {() => Effect | null} fn
   */
  #v(t) {
    var n = w, r = p, i = R;
    q(this.#l), O(this.#l), me(this.#l.ctx);
    try {
      return t();
    } catch (s) {
      return Qt(s), null;
    } finally {
      q(n), O(r), me(i);
    }
  }
  #p() {
    const t = (
      /** @type {(anchor: Node) => void} */
      this.#s.pending
    );
    this.#r !== null && (this.#f = document.createDocumentFragment(), this.#f.append(
      /** @type {TemplateNode} */
      this.#u
    ), qr(this.#r, this.#f)), this.#n === null && (this.#n = oe(() => t(this.#e)));
  }
  /**
   * Updates the pending count associated with the currently visible pending snippet,
   * if any, such that we can replace the snippet with content once work is done
   * @param {1 | -1} d
   */
  #m(t) {
    if (!this.has_pending_snippet()) {
      this.parent && this.parent.#m(t);
      return;
    }
    this.#h += t, this.#h === 0 && (this.#t = !1, this.#n && qe(this.#n, () => {
      this.#n = null;
    }), this.#f && (this.#e.before(this.#f), this.#f = null));
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(t) {
    this.#m(t), this.#c += t, this.#d && We(this.#d, this.#c);
  }
  get_effect_pending() {
    return this.#y(), x(
      /** @type {Source<number>} */
      this.#d
    );
  }
  /** @param {unknown} error */
  error(t) {
    var n = this.#s.onerror;
    let r = this.#s.failed;
    if (this.#_ || !n && !r)
      throw t;
    this.#r && (L(this.#r), this.#r = null), this.#n && (L(this.#n), this.#n = null), this.#i && (L(this.#i), this.#i = null), T && (J(
      /** @type {TemplateNode} */
      this.#o
    ), nr(), J(rr()));
    var i = !1, s = !1;
    const l = () => {
      if (i) {
        tr();
        return;
      }
      i = !0, s && Xn(), F.ensure(), this.#c = 0, this.#i !== null && qe(this.#i, () => {
        this.#i = null;
      }), this.#t = this.has_pending_snippet(), this.#r = this.#v(() => (this.#_ = !1, oe(() => this.#a(this.#e)))), this.#h > 0 ? this.#p() : this.#t = !1;
    };
    var f = p;
    try {
      O(null), s = !0, n?.(t, l), s = !1;
    } catch (a) {
      ye(a, this.#l && this.#l.parent);
    } finally {
      O(f);
    }
    r && $t(() => {
      this.#i = this.#v(() => {
        F.ensure(), this.#_ = !0;
        try {
          return oe(() => {
            r(
              this.#e,
              () => t,
              () => l
            );
          });
        } catch (a) {
          return ye(
            a,
            /** @type {Effect} */
            this.#l.parent
          ), null;
        } finally {
          this.#_ = !1;
        }
      });
    });
  }
}
function pr(e, t, n, r) {
  const i = ln;
  if (n.length === 0 && e.length === 0) {
    r(t.map(i));
    return;
  }
  var s = g, l = (
    /** @type {Effect} */
    w
  ), f = wr();
  function a() {
    Promise.all(n.map((h) => /* @__PURE__ */ yr(h))).then((h) => {
      f();
      try {
        r([...t.map(i), ...h]);
      } catch (_) {
        (l.f & K) === 0 && ye(_, l);
      }
      s?.deactivate(), ze();
    }).catch((h) => {
      ye(h, l);
    });
  }
  e.length > 0 ? Promise.all(e).then(() => {
    f();
    try {
      return a();
    } finally {
      s?.deactivate(), ze();
    }
  }) : a();
}
function wr() {
  var e = w, t = p, n = R, r = g;
  if (d)
    var i = ke;
  return function(l = !0) {
    q(e), O(t), me(n), l && r?.activate(), d && Ve(i);
  };
}
function ze() {
  q(null), O(null), me(null), d && Ve(null);
}
const mr = /* @__PURE__ */ new Set();
// @__NO_SIDE_EFFECTS__
function ln(e) {
  var t = b | P, n = p !== null && (p.f & b) !== 0 ? (
    /** @type {Derived} */
    p
  ) : null;
  return w !== null && (w.f |= _e), {
    ctx: R,
    deps: null,
    effects: null,
    equals: Wt,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      E
    ),
    wv: 0,
    parent: n ?? w,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function yr(e, t) {
  let n = (
    /** @type {Effect | null} */
    w
  );
  n === null && qn();
  var r = (
    /** @type {Boundary} */
    n.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = Pe(
    /** @type {V} */
    E
  ), l = !p, f = /* @__PURE__ */ new Map();
  return Dr(() => {
    var a = Yt();
    i = a.promise;
    try {
      Promise.resolve(e()).then(a.resolve, a.reject).then(() => {
        h === g && h.committed && h.deactivate(), ze();
      });
    } catch (o) {
      a.reject(o), ze();
    }
    var h = (
      /** @type {Batch} */
      g
    );
    if (l) {
      var _ = !r.is_pending();
      r.update_pending_count(1), h.increment(_), f.get(h)?.reject(we), f.delete(h), f.set(h, a);
    }
    const u = (o, c = void 0) => {
      if (h.activate(), c)
        c !== we && (s.f |= te, We(s, c));
      else {
        (s.f & te) !== 0 && (s.f ^= te), We(s, o);
        for (const [v, y] of f) {
          if (f.delete(v), v === h) break;
          y.reject(we);
        }
      }
      l && (r.update_pending_count(-1), h.decrement(_));
    };
    a.promise.then(u, (o) => u(null, o || "unknown"));
  }), Rr(() => {
    for (const a of f.values())
      a.reject(we);
  }), d && (s.f |= Qe), new Promise((a) => {
    function h(_) {
      function u() {
        _ === i ? a(s) : h(i);
      }
      _.then(u, u);
    }
    h(i);
  });
}
function dt(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      L(
        /** @type {Effect} */
        t[n]
      );
  }
}
let it = [];
function gr(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & b) === 0)
      return (t.f & K) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
function bt(e) {
  var t, n = w;
  if (q(gr(e)), d) {
    let r = $e;
    Ct(/* @__PURE__ */ new Set());
    try {
      it.includes(e) && Yn(), it.push(e), e.f &= ~re, dt(e), t = _t(e);
    } finally {
      q(n), Ct(r), it.pop();
    }
  } else
    try {
      e.f &= ~re, dt(e), t = _t(e);
    } finally {
      q(n);
    }
  return t;
}
function fn(e) {
  var t = bt(e);
  if (e.equals(t) || (g?.is_fork || (e.v = t), e.wv = gn()), !ve)
    if (M !== null)
      (Te() || g?.is_fork) && M.set(e, t);
    else {
      var n = (e.f & Y) === 0 ? V : S;
      A(e, n);
    }
}
let $e = /* @__PURE__ */ new Set();
const ne = /* @__PURE__ */ new Map();
function Ct(e) {
  $e = e;
}
let Et = !1;
function $r() {
  Et = !0;
}
function Pe(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Wt,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function W(e, t) {
  const n = Pe(e);
  return Yr(n), n;
}
// @__NO_SIDE_EFFECTS__
function br(e, t = !1, n = !0) {
  const r = Pe(e);
  return t || (r.equals = ir), r;
}
function I(e, t, n = !1) {
  p !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!H || (p.f & Ue) !== 0) && Jt() && (p.f & (b | X | Qe | Ue)) !== 0 && !Z?.includes(e) && Jn();
  let r = n ? ue(t) : t;
  return d && Gt(
    r,
    /** @type {string} */
    e.label
  ), We(e, r);
}
function We(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    ve ? ne.set(e, t) : ne.set(e, n), e.v = t;
    var r = F.ensure();
    if (r.capture(e, n), d) {
      if (w !== null) {
        e.updated ??= /* @__PURE__ */ new Map();
        const i = (e.updated.get("")?.count ?? 0) + 1;
        if (e.updated.set("", { error: (
          /** @type {any} */
          null
        ), count: i }), i > 5) {
          const s = fr("updated at");
          if (s !== null) {
            let l = e.updated.get(s.stack);
            l || (l = { error: s, count: 0 }, e.updated.set(s.stack, l)), l.count++;
          }
        }
      }
      w !== null && (e.set_during_effect = !0);
    }
    (e.f & b) !== 0 && ((e.f & P) !== 0 && bt(
      /** @type {Derived} */
      e
    ), A(e, (e.f & Y) !== 0 ? S : V)), e.wv = gn(), an(e, P), w !== null && (w.f & S) !== 0 && (w.f & (se | ie)) === 0 && (j === null ? Br([e]) : j.push(e)), !r.is_fork && $e.size > 0 && !Et && on();
  }
  return t;
}
function on() {
  Et = !1;
  var e = de;
  Ke(!0);
  const t = Array.from($e);
  try {
    for (const n of t)
      (n.f & S) !== 0 && A(n, V), je(n) && Oe(n);
  } finally {
    Ke(e);
  }
  $e.clear();
}
function Nt(e, t = 1) {
  var n = x(e), r = t === 1 ? n++ : n--;
  return I(e, n), r;
}
function Ee(e) {
  I(e, e.v + 1);
}
function an(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = n.length, i = 0; i < r; i++) {
      var s = n[i], l = s.f;
      if (d && (l & Ue) !== 0) {
        $e.add(s);
        continue;
      }
      var f = (l & P) === 0;
      if (f && A(s, t), (l & b) !== 0) {
        var a = (
          /** @type {Derived} */
          s
        );
        M?.delete(a), (l & re) === 0 && (l & Y && (s.f |= re), an(a, V));
      } else f && ((l & X) !== 0 && G !== null && G.add(
        /** @type {Effect} */
        s
      ), ge(
        /** @type {Effect} */
        s
      ));
    }
}
const Er = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
function ue(e) {
  if (typeof e != "object" || e === null || ce in e)
    return e;
  const t = Mn(e);
  if (t !== jn && t !== Dn)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Cn(e), i = /* @__PURE__ */ W(0), s = he, l = (_) => {
    if (he === s)
      return _();
    var u = p, o = he;
    O(null), Dt(s);
    var c = _();
    return O(u), Dt(o), c;
  };
  r && (n.set("length", /* @__PURE__ */ W(
    /** @type {any[]} */
    e.length
  )), d && (e = /** @type {any} */
  kr(
    /** @type {any[]} */
    e
  )));
  var f = "";
  let a = !1;
  function h(_) {
    if (!a) {
      a = !0, f = _, B(i, `${f} version`);
      for (const [u, o] of n)
        B(o, fe(f, u));
      a = !1;
    }
  }
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(_, u, o) {
        (!("value" in o) || o.configurable === !1 || o.enumerable === !1 || o.writable === !1) && Kn();
        var c = n.get(u);
        return c === void 0 ? c = l(() => {
          var v = /* @__PURE__ */ W(o.value);
          return n.set(u, v), d && typeof u == "string" && B(v, fe(f, u)), v;
        }) : I(c, o.value, !0), !0;
      },
      deleteProperty(_, u) {
        var o = n.get(u);
        if (o === void 0) {
          if (u in _) {
            const c = l(() => /* @__PURE__ */ W(E));
            n.set(u, c), Ee(i), d && B(c, fe(f, u));
          }
        } else
          I(o, E), Ee(i);
        return !0;
      },
      get(_, u, o) {
        if (u === ce)
          return e;
        if (d && u === Ut)
          return h;
        var c = n.get(u), v = u in _;
        if (c === void 0 && (!v || Q(_, u)?.writable) && (c = l(() => {
          var m = ue(v ? _[u] : E), C = /* @__PURE__ */ W(m);
          return d && B(C, fe(f, u)), C;
        }), n.set(u, c)), c !== void 0) {
          var y = x(c);
          return y === E ? void 0 : y;
        }
        return Reflect.get(_, u, o);
      },
      getOwnPropertyDescriptor(_, u) {
        var o = Reflect.getOwnPropertyDescriptor(_, u);
        if (o && "value" in o) {
          var c = n.get(u);
          c && (o.value = x(c));
        } else if (o === void 0) {
          var v = n.get(u), y = v?.v;
          if (v !== void 0 && y !== E)
            return {
              enumerable: !0,
              configurable: !0,
              value: y,
              writable: !0
            };
        }
        return o;
      },
      has(_, u) {
        if (u === ce)
          return !0;
        var o = n.get(u), c = o !== void 0 && o.v !== E || Reflect.has(_, u);
        if (o !== void 0 || w !== null && (!c || Q(_, u)?.writable)) {
          o === void 0 && (o = l(() => {
            var y = c ? ue(_[u]) : E, m = /* @__PURE__ */ W(y);
            return d && B(m, fe(f, u)), m;
          }), n.set(u, o));
          var v = x(o);
          if (v === E)
            return !1;
        }
        return c;
      },
      set(_, u, o, c) {
        var v = n.get(u), y = u in _;
        if (r && u === "length")
          for (var m = o; m < /** @type {Source<number>} */
          v.v; m += 1) {
            var C = n.get(m + "");
            C !== void 0 ? I(C, E) : m in _ && (C = l(() => /* @__PURE__ */ W(E)), n.set(m + "", C), d && B(C, fe(f, m)));
          }
        if (v === void 0)
          (!y || Q(_, u)?.writable) && (v = l(() => /* @__PURE__ */ W(void 0)), d && B(v, fe(f, u)), I(v, ue(o)), n.set(u, v));
        else {
          y = v.v !== E;
          var De = l(() => ue(o));
          I(v, De);
        }
        var kt = Reflect.getOwnPropertyDescriptor(_, u);
        if (kt?.set && kt.set.call(c, o), !y) {
          if (r && typeof u == "string") {
            var St = (
              /** @type {Source<number>} */
              n.get("length")
            ), nt = Number(u);
            Number.isInteger(nt) && nt >= St.v && I(St, nt + 1);
          }
          Ee(i);
        }
        return !0;
      },
      ownKeys(_) {
        x(i);
        var u = Reflect.ownKeys(_).filter((v) => {
          var y = n.get(v);
          return y === void 0 || y.v !== E;
        });
        for (var [o, c] of n)
          c.v !== E && !(o in _) && u.push(o);
        return u;
      },
      setPrototypeOf() {
        Zn();
      }
    }
  );
}
function fe(e, t) {
  return typeof t == "symbol" ? `${e}[Symbol(${t.description ?? ""})]` : Er.test(t) ? `${e}.${t}` : /^\d+$/.test(t) ? `${e}[${t}]` : `${e}['${t}']`;
}
function lt(e) {
  try {
    if (e !== null && typeof e == "object" && ce in e)
      return e[ce];
  } catch {
  }
  return e;
}
const xr = /* @__PURE__ */ new Set([
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
function kr(e) {
  return new Proxy(e, {
    get(t, n, r) {
      var i = Reflect.get(t, n, r);
      return xr.has(
        /** @type {string} */
        n
      ) ? function(...s) {
        $r();
        var l = i.apply(this, s);
        return on(), l;
      } : i;
    }
  });
}
function Sr() {
  const e = Array.prototype, t = Array.__svelte_cleanup;
  t && t();
  const { indexOf: n, lastIndexOf: r, includes: i } = e;
  e.indexOf = function(s, l) {
    const f = n.call(this, s, l);
    if (f === -1) {
      for (let a = l ?? 0; a < this.length; a += 1)
        if (lt(this[a]) === s) {
          rt("array.indexOf(...)");
          break;
        }
    }
    return f;
  }, e.lastIndexOf = function(s, l) {
    const f = r.call(this, s, l ?? this.length - 1);
    if (f === -1) {
      for (let a = 0; a <= (l ?? this.length - 1); a += 1)
        if (lt(this[a]) === s) {
          rt("array.lastIndexOf(...)");
          break;
        }
    }
    return f;
  }, e.includes = function(s, l) {
    const f = i.call(this, s, l);
    if (!f) {
      for (let a = 0; a < this.length; a += 1)
        if (lt(this[a]) === s) {
          rt("array.includes(...)");
          break;
        }
    }
    return f;
  }, Array.__svelte_cleanup = () => {
    e.indexOf = n, e.lastIndexOf = r, e.includes = i;
  };
}
var Pt, xt, un, cn;
function ht() {
  if (Pt === void 0) {
    Pt = window, xt = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    un = Q(t, "firstChild").get, cn = Q(t, "nextSibling").get, At(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), At(n) && (n.__t = void 0), d && (e.__svelte_meta = null, Sr());
  }
}
function Se(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Ge(e) {
  return (
    /** @type {TemplateNode | null} */
    un.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function le(e) {
  return (
    /** @type {TemplateNode | null} */
    cn.call(e)
  );
}
function ft(e, t) {
  if (!T)
    return /* @__PURE__ */ Ge(e);
  var n = /* @__PURE__ */ Ge($);
  if (n === null)
    n = $.appendChild(Se());
  else if (t && n.nodeType !== Vt) {
    var r = Se();
    return n?.before(r), J(r), r;
  }
  return J(n), n;
}
function ot(e, t = 1, n = !1) {
  let r = T ? $ : e;
  for (var i; t--; )
    i = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ le(r);
  if (!T)
    return r;
  if (n && r?.nodeType !== Vt) {
    var s = Se();
    return r === null ? i?.after(s) : r.before(s), J(s), s;
  }
  return J(r), r;
}
function Tr(e) {
  e.textContent = "";
}
function dn(e) {
  var t = p, n = w;
  O(null), q(null);
  try {
    return e();
  } finally {
    O(t), q(n);
  }
}
function Ar(e) {
  w === null && (p === null && Un(e), Hn()), ve && Bn(e);
}
function Or(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function z(e, t, n) {
  var r = w;
  if (d)
    for (; r !== null && (r.f & Ue) !== 0; )
      r = r.parent;
  r !== null && (r.f & ee) !== 0 && (e |= ee);
  var i = {
    ctx: R,
    deps: null,
    nodes: null,
    f: e | P | Y,
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
  if (d && (i.component_function = Ne), n)
    try {
      Oe(i), i.f |= Xe;
    } catch (f) {
      throw L(i), f;
    }
  else t !== null && ge(i);
  var s = i;
  if (n && s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
  (s.f & _e) === 0 && (s = s.first, (e & X) !== 0 && (e & He) !== 0 && s !== null && (s.f |= He)), s !== null && (s.parent = r, r !== null && Or(s, r), p !== null && (p.f & b) !== 0 && (e & ie) === 0)) {
    var l = (
      /** @type {Derived} */
      p
    );
    (l.effects ??= []).push(s);
  }
  return i;
}
function Te() {
  return p !== null && !H;
}
function Rr(e) {
  const t = z(yt, null, !1);
  return A(t, S), t.teardown = e, t;
}
function Cr(e) {
  Ar("$effect"), d && U(e, "name", {
    value: "$effect"
  });
  var t = (
    /** @type {Effect} */
    w.f
  ), n = !p && (t & se) !== 0 && (t & Xe) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      R
    );
    (r.e ??= []).push(e);
  } else
    return hn(e);
}
function hn(e) {
  return z(mt | Ln, e, !1);
}
function Nr(e) {
  F.ensure();
  const t = z(ie | _e, e, !0);
  return () => {
    L(t);
  };
}
function Pr(e) {
  F.ensure();
  const t = z(ie | _e, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? qe(t, () => {
      L(t), r(void 0);
    }) : (L(t), r(void 0));
  });
}
function jr(e) {
  return z(mt, e, !1);
}
function Dr(e) {
  return z(Qe | _e, e, !0);
}
function _n(e, t = 0) {
  return z(yt | t, e, !0);
}
function Mr(e, t = [], n = [], r = []) {
  pr(r, t, n, (i) => {
    z(yt, () => e(...i.map(x)), !0);
  });
}
function Ir(e, t = 0) {
  var n = z(X | t, e, !0);
  return d && (n.dev_stack = ke), n;
}
function oe(e) {
  return z(se | _e, e, !0);
}
function vn(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = ve, r = p;
    jt(!0), O(null);
    try {
      t.call(null);
    } finally {
      jt(n), O(r);
    }
  }
}
function pn(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && dn(() => {
      i.abort(we);
    });
    var r = n.next;
    (n.f & ie) !== 0 ? n.parent = null : L(n, t), n = r;
  }
}
function Fr(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & se) === 0 && L(t), t = n;
  }
}
function L(e, t = !0) {
  var n = !1;
  (t || (e.f & Bt) !== 0) && e.nodes !== null && e.nodes.end !== null && (Lr(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), pn(e, t && !n), Ze(e, 0), A(e, K);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const s of r)
      s.stop();
  vn(e);
  var i = e.parent;
  i !== null && i.first !== null && wn(e), d && (e.component_function = null), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
function Lr(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ le(e);
    e.remove(), e = n;
  }
}
function wn(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function qe(e, t, n = !0) {
  var r = [];
  mn(e, r, !0);
  var i = () => {
    n && L(e), t && t();
  }, s = r.length;
  if (s > 0) {
    var l = () => --s || i();
    for (var f of r)
      f.out(l);
  } else
    i();
}
function mn(e, t, n) {
  if ((e.f & ee) === 0) {
    e.f ^= ee;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const f of r)
        (f.is_global || n) && t.push(f);
    for (var i = e.first; i !== null; ) {
      var s = i.next, l = (i.f & He) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (i.f & se) !== 0 && (e.f & X) !== 0;
      mn(i, t, l ? n : !1), i = s;
    }
  }
}
function qr(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var i = n === r ? null : /* @__PURE__ */ le(n);
      t.append(n), n = i;
    }
}
let de = !1;
function Ke(e) {
  de = e;
}
let ve = !1;
function jt(e) {
  ve = e;
}
let p = null, H = !1;
function O(e) {
  p = e;
}
let w = null;
function q(e) {
  w = e;
}
let Z = null;
function Yr(e) {
  p !== null && (Z === null ? Z = [e] : Z.push(e));
}
let k = null, N = 0, j = null;
function Br(e) {
  j = e;
}
let yn = 1, Ae = 0, he = Ae;
function Dt(e) {
  he = e;
}
function gn() {
  return ++yn;
}
function je(e) {
  var t = e.f;
  if ((t & P) !== 0)
    return !0;
  if (t & b && (e.f &= ~re), (t & V) !== 0) {
    var n = e.deps;
    if (n !== null)
      for (var r = n.length, i = 0; i < r; i++) {
        var s = n[i];
        if (je(
          /** @type {Derived} */
          s
        ) && fn(
          /** @type {Derived} */
          s
        ), s.wv > e.wv)
          return !0;
      }
    (t & Y) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    M === null && A(e, S);
  }
  return !1;
}
function $n(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !Z?.includes(e))
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      (s.f & b) !== 0 ? $n(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (n ? A(s, P) : (s.f & S) !== 0 && A(s, V), ge(
        /** @type {Effect} */
        s
      ));
    }
}
function _t(e) {
  var t = k, n = N, r = j, i = p, s = Z, l = R, f = H, a = he, h = e.f;
  k = /** @type {null | Value[]} */
  null, N = 0, j = null, p = (h & (se | ie)) === 0 ? e : null, Z = null, me(e.ctx), H = !1, he = ++Ae, e.ac !== null && (dn(() => {
    e.ac.abort(we);
  }), e.ac = null);
  try {
    e.f |= at;
    var _ = (
      /** @type {Function} */
      e.fn
    ), u = _(), o = e.deps;
    if (k !== null) {
      var c;
      if (Ze(e, N), o !== null && N > 0)
        for (o.length = N + k.length, c = 0; c < k.length; c++)
          o[N + c] = k[c];
      else
        e.deps = o = k;
      if (Te() && (e.f & Y) !== 0)
        for (c = N; c < o.length; c++)
          (o[c].reactions ??= []).push(e);
    } else o !== null && N < o.length && (Ze(e, N), o.length = N);
    if (Jt() && j !== null && !H && o !== null && (e.f & (b | V | P)) === 0)
      for (c = 0; c < /** @type {Source[]} */
      j.length; c++)
        $n(
          j[c],
          /** @type {Effect} */
          e
        );
    return i !== null && i !== e && (Ae++, j !== null && (r === null ? r = j : r.push(.../** @type {Source[]} */
    j))), (e.f & te) !== 0 && (e.f ^= te), u;
  } catch (v) {
    return Qt(v);
  } finally {
    e.f ^= at, k = t, N = n, j = r, p = i, Z = s, me(l), H = f, he = a;
  }
}
function Hr(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Nn.call(n, e);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  n === null && (t.f & b) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (k === null || !k.includes(t)) && (A(t, V), (t.f & Y) !== 0 && (t.f ^= Y, t.f &= ~re), dt(
    /** @type {Derived} **/
    t
  ), Ze(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Ze(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Hr(e, n[r]);
}
function Oe(e) {
  var t = e.f;
  if ((t & K) === 0) {
    A(e, S);
    var n = w, r = de;
    if (w = e, de = !0, d) {
      var i = Ne;
      Ot(e.component_function);
      var s = (
        /** @type {any} */
        ke
      );
      Ve(e.dev_stack ?? ke);
    }
    try {
      (t & (X | Fn)) !== 0 ? Fr(e) : pn(e), vn(e);
      var l = _t(e);
      e.teardown = typeof l == "function" ? l : null, e.wv = yn;
      var f;
      d && lr && (e.f & P) !== 0 && e.deps;
    } finally {
      de = r, w = n, d && (Ot(i), Ve(s));
    }
  }
}
function x(e) {
  var t = e.f, n = (t & b) !== 0;
  if (p !== null && !H) {
    var r = w !== null && (w.f & K) !== 0;
    if (!r && !Z?.includes(e)) {
      var i = p.deps;
      if ((p.f & at) !== 0)
        e.rv < Ae && (e.rv = Ae, k === null && i !== null && i[N] === e ? N++ : k === null ? k = [e] : k.includes(e) || k.push(e));
      else {
        (p.deps ??= []).push(e);
        var s = e.reactions;
        s === null ? e.reactions = [p] : s.includes(p) || s.push(p);
      }
    }
  }
  if (d && mr.delete(e), ve) {
    if (ne.has(e))
      return ne.get(e);
    if (n) {
      var l = (
        /** @type {Derived} */
        e
      ), f = l.v;
      return ((l.f & S) === 0 && l.reactions !== null || En(l)) && (f = bt(l)), ne.set(l, f), f;
    }
  } else n && (!M?.has(e) || g?.is_fork && !Te()) && (l = /** @type {Derived} */
  e, je(l) && fn(l), de && Te() && (l.f & Y) === 0 && bn(l));
  if (M?.has(e))
    return M.get(e);
  if ((e.f & te) !== 0)
    throw e.v;
  return e.v;
}
function bn(e) {
  if (e.deps !== null) {
    e.f ^= Y;
    for (const t of e.deps)
      (t.reactions ??= []).push(e), (t.f & b) !== 0 && (t.f & Y) === 0 && bn(
        /** @type {Derived} */
        t
      );
  }
}
function En(e) {
  if (e.v === E) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (ne.has(t) || (t.f & b) !== 0 && En(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Ur(e) {
  var t = H;
  try {
    return H = !0, e();
  } finally {
    H = t;
  }
}
const Vr = -7169;
function A(e, t) {
  e.f = e.f & Vr | t;
}
const xn = /* @__PURE__ */ new Set(), vt = /* @__PURE__ */ new Set();
function zr(e) {
  for (var t = 0; t < e.length; t++)
    xn.add(e[t]);
  for (var n of vt)
    n(e);
}
let Mt = null;
function Fe(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, i = e.composedPath?.() || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  Mt = e;
  var l = 0, f = Mt === e && e.__root;
  if (f) {
    var a = i.indexOf(f);
    if (a !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var h = i.indexOf(t);
    if (h === -1)
      return;
    a <= h && (l = a);
  }
  if (s = /** @type {Element} */
  i[l] || e.target, s !== t) {
    U(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var _ = p, u = w;
    O(null), q(null);
    try {
      for (var o, c = []; s !== null; ) {
        var v = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var y = s["__" + r];
          y != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && y.call(s, e);
        } catch (m) {
          o ? c.push(m) : o = m;
        }
        if (e.cancelBubble || v === t || v === null)
          break;
        s = v;
      }
      if (o) {
        for (let m of c)
          queueMicrotask(() => {
            throw m;
          });
        throw o;
      }
    } finally {
      e.__root = t, delete e.currentTarget, O(_), q(u);
    }
  }
}
function Wr(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function pt(e, t) {
  var n = (
    /** @type {Effect} */
    w
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function Gr(e, t) {
  var n = (t & On) !== 0, r, i = !e.startsWith("<!>");
  return () => {
    if (T)
      return pt($, null), $;
    r === void 0 && (r = Wr(i ? e : "<!>" + e), r = /** @type {TemplateNode} */
    /* @__PURE__ */ Ge(r));
    var s = (
      /** @type {TemplateNode} */
      n || xt ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    return pt(s, s), s;
  };
}
function kn(e, t) {
  if (T) {
    var n = (
      /** @type {Effect & { nodes: EffectNodes }} */
      w
    );
    ((n.f & Xe) === 0 || n.nodes.end === null) && (n.nodes.end = $), zt();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const Kr = ["touchstart", "touchmove"];
function Zr(e) {
  return Kr.includes(e);
}
function Jr(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function Sn(e, t) {
  return Tn(e, t);
}
function Xr(e, t) {
  ht(), t.intro = t.intro ?? !1;
  const n = t.target, r = T, i = $;
  try {
    for (var s = /* @__PURE__ */ Ge(n); s && (s.nodeType !== et || /** @type {Comment} */
    s.data !== Ft); )
      s = /* @__PURE__ */ le(s);
    if (!s)
      throw xe;
    Me(!0), J(
      /** @type {Comment} */
      s
    );
    const l = Tn(e, { ...t, anchor: s });
    return Me(!1), /**  @type {Exports} */
    l;
  } catch (l) {
    if (l instanceof Error && l.message.split(`
`).some((f) => f.startsWith("https://svelte.dev/e/")))
      throw l;
    return l !== xe && console.warn("Failed to hydrate: ", l), t.recover === !1 && zn(), ht(), Tr(n), Me(!1), Sn(e, t);
  } finally {
    Me(r), J(i);
  }
}
const pe = /* @__PURE__ */ new Map();
function Tn(e, { target: t, anchor: n, props: r = {}, events: i, context: s, intro: l = !0 }) {
  ht();
  var f = /* @__PURE__ */ new Set(), a = (u) => {
    for (var o = 0; o < u.length; o++) {
      var c = u[o];
      if (!f.has(c)) {
        f.add(c);
        var v = Zr(c);
        t.addEventListener(c, Fe, { passive: v });
        var y = pe.get(c);
        y === void 0 ? (document.addEventListener(c, Fe, { passive: v }), pe.set(c, 1)) : pe.set(c, y + 1);
      }
    }
  };
  a(Pn(xn)), vt.add(a);
  var h = void 0, _ = Pr(() => {
    var u = n ?? t.appendChild(Se());
    return _r(
      /** @type {TemplateNode} */
      u,
      {
        pending: () => {
        }
      },
      (o) => {
        if (s) {
          Kt({});
          var c = (
            /** @type {ComponentContext} */
            R
          );
          c.c = s;
        }
        if (i && (r.$$events = i), T && pt(
          /** @type {TemplateNode} */
          o,
          null
        ), h = e(o, r) || {}, T && (w.nodes.end = $, $ === null || $.nodeType !== et || /** @type {Comment} */
        $.data !== qt))
          throw gt(), xe;
        s && Zt();
      }
    ), () => {
      for (var o of f) {
        t.removeEventListener(o, Fe);
        var c = (
          /** @type {number} */
          pe.get(o)
        );
        --c === 0 ? (document.removeEventListener(o, Fe), pe.delete(o)) : pe.set(o, c);
      }
      vt.delete(a), u !== n && u.parentNode?.removeChild(u);
    };
  });
  return wt.set(h, _), h;
}
let wt = /* @__PURE__ */ new WeakMap();
function Qr(e, t) {
  const n = wt.get(e);
  return n ? (wt.delete(e), n(t)) : (d && (ce in e ? er() : Qn()), Promise.resolve());
}
if (d) {
  let e = function(t) {
    if (!(t in globalThis)) {
      let n;
      Object.defineProperty(globalThis, t, {
        configurable: !0,
        // eslint-disable-next-line getter-return
        get: () => {
          if (n !== void 0)
            return n;
          Gn(t);
        },
        set: (r) => {
          n = r;
        }
      });
    }
  };
  e("$state"), e("$effect"), e("$derived"), e("$inspect"), e("$props"), e("$bindable");
}
var It = /* @__PURE__ */ new Map();
function es(e, t) {
  var n = It.get(e);
  n || (n = /* @__PURE__ */ new Set(), It.set(e, n)), n.add(t);
}
function ts(e, t) {
  jr(() => {
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
      i.id = t.hash, i.textContent = t.code, r.appendChild(i), d && es(t.hash, i);
    }
  });
}
let Le = !1;
function ns(e) {
  var t = Le;
  try {
    return Le = !1, [e(), Le];
  } finally {
    Le = t;
  }
}
function rs(e, t, n, r) {
  var i = (
    /** @type {V} */
    r
  ), s = !0, l = () => (s && (s = !1, i = /** @type {V} */
  r), i), f;
  {
    var a = ce in e || Ht in e;
    f = Q(e, t)?.set ?? (a && t in e ? (m) => e[t] = m : void 0);
  }
  var h, _ = !1;
  [h, _] = ns(() => (
    /** @type {V} */
    e[t]
  )), h === void 0 && r !== void 0 && (h = l(), f && (Wn(t), f(h)));
  var u;
  if (u = () => {
    var m = (
      /** @type {V} */
      e[t]
    );
    return m === void 0 ? l() : (s = !0, m);
  }, f) {
    var o = e.$$legacy;
    return (
      /** @type {() => V} */
      (function(m, C) {
        return arguments.length > 0 ? ((!C || o || _) && f(C ? u() : m), m) : u();
      })
    );
  }
  var c = !1, v = /* @__PURE__ */ ln(() => (c = !1, u()));
  d && (v.label = t), x(v);
  var y = (
    /** @type {Effect} */
    w
  );
  return (
    /** @type {() => V} */
    (function(m, C) {
      if (arguments.length > 0) {
        const De = C ? x(v) : ue(m);
        return I(v, De), c = !0, i !== void 0 && (i = De), m;
      }
      return ve && c || (y.f & K) !== 0 ? v.v : x(v);
    })
  );
}
function ss(e) {
  return new is(e);
}
class is {
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
    var n = /* @__PURE__ */ new Map(), r = (s, l) => {
      var f = /* @__PURE__ */ br(l, !1, !1);
      return n.set(s, f), f;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, l) {
          return x(n.get(l) ?? r(l, Reflect.get(s, l)));
        },
        has(s, l) {
          return l === Ht ? !0 : (x(n.get(l) ?? r(l, Reflect.get(s, l))), Reflect.has(s, l));
        },
        set(s, l, f) {
          return I(n.get(l) ?? r(l, f), f), Reflect.set(s, l, f);
        }
      }
    );
    this.#e = (t.hydrate ? Xr : Sn)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    }), (!t?.props?.$$host || t.sync === !1) && tn(), this.#t = i.$$events;
    for (const s of Object.keys(this.#e))
      s === "$set" || s === "$destroy" || s === "$on" || U(this, s, {
        get() {
          return this.#e[s];
        },
        /** @param {any} value */
        set(l) {
          this.#e[s] = l;
        },
        enumerable: !0
      });
    this.#e.$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(i, s);
    }, this.#e.$destroy = () => {
      Qr(this.#e);
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
let An;
typeof HTMLElement == "function" && (An = class extends HTMLElement {
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
      let e = function(r) {
        return (i) => {
          const s = document.createElement("slot");
          r !== "default" && (s.name = r), kn(i, s);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, n = ls(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const i = this.$$g_p(r.name);
        i in this.$$d || (this.$$d[i] = Ye(i, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = ss({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = Nr(() => {
        _n(() => {
          this.$$r = !0;
          for (const r of Be(this.$$c)) {
            if (!this.$$p_d[r]?.reflect) continue;
            this.$$d[r] = this.$$c[r];
            const i = Ye(
              r,
              this.$$d[r],
              this.$$p_d,
              "toAttribute"
            );
            i == null ? this.removeAttribute(this.$$p_d[r].attribute || r) : this.setAttribute(this.$$p_d[r].attribute || r, i);
          }
          this.$$r = !1;
        });
      });
      for (const r in this.$$l)
        for (const i of this.$$l[r]) {
          const s = this.$$c.$on(r, i);
          this.$$l_u.set(i, s);
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = Ye(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
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
    return Be(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function Ye(e, t, n, r) {
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
function ls(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function fs(e, t, n, r, i, s) {
  let l = class extends An {
    constructor() {
      super(e, n, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Be(t).map(
        (f) => (t[f].attribute || f).toLowerCase()
      );
    }
  };
  return Be(t).forEach((f) => {
    U(l.prototype, f, {
      get() {
        return this.$$c && f in this.$$c ? this.$$c[f] : this.$$d[f];
      },
      set(a) {
        a = Ye(f, a, t), this.$$d[f] = a;
        var h = this.$$c;
        if (h) {
          var _ = Q(h, f)?.get;
          _ ? h[f] = a : h.$set({ [f]: a });
        }
      }
    });
  }), r.forEach((f) => {
    U(l.prototype, f, {
      get() {
        return this.$$c?.[f];
      }
    });
  }), e.element = /** @type {any} */
  l, l;
}
var os = /* @__PURE__ */ Gr('<div class="container svelte-htsxo4"><div class="counter svelte-htsxo4"><div class="label svelte-htsxo4">Svelte Counter:</div> <button type="button" class="button svelte-htsxo4">-</button> <span class="count svelte-htsxo4"> </span> <button type="button" class="button svelte-htsxo4">+</button></div></div>');
const as = {
  hash: "svelte-htsxo4",
  code: ".container.svelte-htsxo4 {display:flex;flex-direction:column;align-items:center;padding:1rem;border:2px solid #ff3e00;border-radius:8px;background-color:#f9f9f9;font-family:system-ui, -apple-system, sans-serif;}.counter.svelte-htsxo4 {display:flex;align-items:center;gap:1rem;}.label.svelte-htsxo4 {font-size:1rem;font-weight:600;color:#333;margin-bottom:0.5rem;}.button.svelte-htsxo4 {width:40px;height:40px;font-size:1.5rem;border:2px solid #ff3e00;background-color:#ff3e00;color:white;border-radius:4px;cursor:pointer;transition:background-color 0.2s;}.button.svelte-htsxo4:hover {background-color:#e63900;}.button.svelte-htsxo4:active {background-color:#cc3300;}.count.svelte-htsxo4 {font-size:2rem;font-weight:bold;color:#ff3e00;min-width:3rem;text-align:center;}"
};
function us(e, t) {
  Kt(t, !0), ts(e, as);
  let n = rs(t, "count", 15, 0), r = /* @__PURE__ */ W(ue(n()));
  Cr(() => {
    I(r, n(), !0);
  });
  function i() {
    Nt(r), n(x(r));
  }
  function s() {
    Nt(r, -1), n(x(r));
  }
  var l = {
    get count() {
      return n();
    },
    set count(c = 0) {
      n(c), tn();
    }
  }, f = os(), a = ft(f), h = ot(ft(a), 2);
  h.__click = s;
  var _ = ot(h, 2), u = ft(_, !0);
  st(_);
  var o = ot(_, 2);
  return o.__click = i, st(a), st(f), Mr(() => Jr(u, x(r))), kn(e, f), Zt(l);
}
zr(["click"]);
customElements.define("svelte-counter", fs(us, { count: {} }, [], [], !0));
export {
  us as default
};
