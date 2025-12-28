typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
const Di = 2, Er = "[", Ln = "[!", Sr = "]", ct = {}, U = /* @__PURE__ */ Symbol(), Ci = /* @__PURE__ */ Symbol("filename"), er = globalThis.process?.env?.NODE_ENV, _ = er && !er.toLowerCase().startsWith("prod");
var Mi = Array.isArray, Li = Array.prototype.indexOf, ji = Array.from, Ht = Object.keys, ve = Object.defineProperty, De = Object.getOwnPropertyDescriptor, Bi = Object.getOwnPropertyDescriptors, Ki = Object.prototype, qi = Array.prototype, Tr = Object.getPrototypeOf, tr = Object.isExtensible;
const Ce = () => {
};
function kr(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function xr() {
  var e, t, n = new Promise((r, s) => {
    e = r, t = s;
  });
  return { promise: n, resolve: e, reject: t };
}
const K = 2, jn = 4, Bn = 8, Ui = 1 << 24, Ne = 16, Ie = 32, Be = 64, on = 128, he = 512, V = 1024, Q = 2048, me = 4096, ye = 8192, ke = 16384, an = 32768, ft = 65536, zt = 1 << 17, Ar = 1 << 18, nt = 1 << 19, Vi = 1 << 20, je = 32768, gn = 1 << 21, ln = 1 << 22, Me = 1 << 23, xe = /* @__PURE__ */ Symbol("$state"), Or = /* @__PURE__ */ Symbol("legacy props"), Nr = /* @__PURE__ */ Symbol("proxy path"), at = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), Ir = 3, Ot = 8;
function Rr(e) {
  if (_) {
    const t = new Error(`lifecycle_outside_component
\`${e}(...)\` can only be used during component initialisation
https://svelte.dev/e/lifecycle_outside_component`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Hi() {
  if (_) {
    const e = new Error("async_derived_orphan\nCannot create a `$derived(...)` with an `await` expression outside of an effect tree\nhttps://svelte.dev/e/async_derived_orphan");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function zi() {
  if (_) {
    const e = new Error(`derived_references_self
A derived value cannot reference itself recursively
https://svelte.dev/e/derived_references_self`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/derived_references_self");
}
function Wi(e) {
  if (_) {
    const t = new Error(`effect_in_teardown
\`${e}\` cannot be used inside an effect cleanup function
https://svelte.dev/e/effect_in_teardown`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Yi() {
  if (_) {
    const e = new Error("effect_in_unowned_derived\nEffect cannot be created inside a `$derived` value that was not itself created inside an effect\nhttps://svelte.dev/e/effect_in_unowned_derived");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Gi(e) {
  if (_) {
    const t = new Error(`effect_orphan
\`${e}\` can only be used inside an effect (e.g. during component initialisation)
https://svelte.dev/e/effect_orphan`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/effect_orphan");
}
function Xi() {
  if (_) {
    const e = new Error(`effect_update_depth_exceeded
Maximum update depth exceeded. This typically indicates that an effect reads and writes the same piece of state
https://svelte.dev/e/effect_update_depth_exceeded`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Zi() {
  if (_) {
    const e = new Error(`hydration_failed
Failed to hydrate the application
https://svelte.dev/e/hydration_failed`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/hydration_failed");
}
function Ji(e) {
  if (_) {
    const t = new Error(`props_invalid_value
Cannot do \`bind:${e}={undefined}\` when \`${e}\` has a fallback value
https://svelte.dev/e/props_invalid_value`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Qi(e) {
  if (_) {
    const t = new Error(`rune_outside_svelte
The \`${e}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files
https://svelte.dev/e/rune_outside_svelte`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/rune_outside_svelte");
}
function es() {
  if (_) {
    const e = new Error("state_descriptors_fixed\nProperty descriptors defined on `$state` objects must contain `value` and always be `enumerable`, `configurable` and `writable`.\nhttps://svelte.dev/e/state_descriptors_fixed");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function ts() {
  if (_) {
    const e = new Error("state_prototype_fixed\nCannot set prototype of `$state` object\nhttps://svelte.dev/e/state_prototype_fixed");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function ns() {
  if (_) {
    const e = new Error("state_unsafe_mutation\nUpdating state inside `$derived(...)`, `$inspect(...)` or a template expression is forbidden. If the value should not be reactive, declare it without `$state`\nhttps://svelte.dev/e/state_unsafe_mutation");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function rs() {
  if (_) {
    const e = new Error("svelte_boundary_reset_onerror\nA `<svelte:boundary>` `reset` function cannot be called while an error is still being handled\nhttps://svelte.dev/e/svelte_boundary_reset_onerror");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
var Nt = "font-weight: bold", It = "font-weight: normal";
function un(e) {
  _ ? console.warn(
    `%c[svelte] hydration_mismatch
%cHydration failed because the initial UI does not match what was rendered on the server
https://svelte.dev/e/hydration_mismatch`,
    Nt,
    It
  ) : console.warn("https://svelte.dev/e/hydration_mismatch");
}
function is() {
  _ ? console.warn(`%c[svelte] lifecycle_double_unmount
%cTried to unmount a component that was not mounted
https://svelte.dev/e/lifecycle_double_unmount`, Nt, It) : console.warn("https://svelte.dev/e/lifecycle_double_unmount");
}
function hn(e) {
  _ ? console.warn(`%c[svelte] state_proxy_equality_mismatch
%cReactive \`$state(...)\` proxies and the values they proxy have different identities. Because of this, comparisons with \`${e}\` will produce unexpected results
https://svelte.dev/e/state_proxy_equality_mismatch`, Nt, It) : console.warn("https://svelte.dev/e/state_proxy_equality_mismatch");
}
function ss() {
  _ ? console.warn(`%c[svelte] state_proxy_unmount
%cTried to unmount a state proxy, rather than a component
https://svelte.dev/e/state_proxy_unmount`, Nt, It) : console.warn("https://svelte.dev/e/state_proxy_unmount");
}
function os() {
  _ ? console.warn("%c[svelte] svelte_boundary_reset_noop\n%cA `<svelte:boundary>` `reset` function only resets the boundary the first time it is called\nhttps://svelte.dev/e/svelte_boundary_reset_noop", Nt, It) : console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let L = !1;
function lt(e) {
  L = e;
}
let C;
function ge(e) {
  if (e === null)
    throw un(), ct;
  return C = e;
}
function Kn() {
  return ge(/* @__PURE__ */ Ke(C));
}
function ue(e) {
  if (L) {
    if (/* @__PURE__ */ Ke(C) !== null)
      throw un(), ct;
    C = e;
  }
}
function Pr(e = 1) {
  if (L) {
    for (var t = e, n = C; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Ke(n);
    C = n;
  }
}
function Fr(e = !0) {
  for (var t = 0, n = C; ; ) {
    if (n.nodeType === Ot) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === Sr) {
        if (t === 0) return n;
        t -= 1;
      } else (r === Er || r === Ln) && (t += 1);
    }
    var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ke(n)
    );
    e && n.remove(), n = s;
  }
}
function as(e) {
  if (!e || e.nodeType !== Ot)
    throw un(), ct;
  return (
    /** @type {Comment} */
    e.data
  );
}
function Dr(e) {
  return e === this.v;
}
function qn(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function ls(e) {
  return !qn(e, this.v);
}
let us = !1;
function be(e, t) {
  return e.label = t, Cr(e.v, t), e;
}
function Cr(e, t) {
  return e?.[Nr]?.(t), e;
}
function cs(e) {
  const t = new Error(), n = fs();
  return n.length === 0 ? null : (n.unshift(`
`), ve(t, "stack", {
    value: n.join(`
`)
  }), ve(t, "name", {
    value: e
  }), /** @type {Error & { stack: string }} */
  t);
}
function fs() {
  const e = Error.stackTraceLimit;
  Error.stackTraceLimit = 1 / 0;
  const t = new Error().stack;
  if (Error.stackTraceLimit = e, !t) return [];
  const n = t.split(`
`), r = [];
  for (let s = 0; s < n.length; s++) {
    const i = n[s], o = i.replaceAll("\\", "/");
    if (i.trim() !== "Error") {
      if (i.includes("validate_each_keys"))
        return [];
      o.includes("svelte/src/internal") || o.includes("node_modules/.vite") || r.push(i);
    }
  }
  return r;
}
let H = null;
function dt(e) {
  H = e;
}
let Et = null;
function Wt(e) {
  Et = e;
}
let Rt = null;
function nr(e) {
  Rt = e;
}
function Un(e, t = !1, n) {
  H = {
    p: H,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  }, _ && (H.function = n, Rt = n);
}
function Vn(e) {
  var t = (
    /** @type {ComponentContext} */
    H
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      ei(r);
  }
  return e !== void 0 && (t.x = e), t.i = !0, H = t.p, _ && (Rt = H?.function ?? null), e ?? /** @type {T} */
  {};
}
function Mr() {
  return !0;
}
let Ye = [];
function Lr() {
  var e = Ye;
  Ye = [], kr(e);
}
function Hn(e) {
  if (Ye.length === 0 && !mt) {
    var t = Ye;
    queueMicrotask(() => {
      t === Ye && Lr();
    });
  }
  Ye.push(e);
}
function ds() {
  for (; Ye.length > 0; )
    Lr();
}
const wn = /* @__PURE__ */ new WeakMap();
function jr(e) {
  var t = N;
  if (t === null)
    return O.f |= Me, e;
  if (_ && e instanceof Error && !wn.has(e) && wn.set(e, vs(e, t)), (t.f & an) === 0) {
    if ((t.f & on) === 0)
      throw _ && !t.parent && e instanceof Error && Br(e), e;
    t.b.error(e);
  } else
    vt(e, t);
}
function vt(e, t) {
  for (; t !== null; ) {
    if ((t.f & on) !== 0)
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    t = t.parent;
  }
  throw _ && e instanceof Error && Br(e), e;
}
function vs(e, t) {
  const n = De(e, "message");
  if (!(n && !n.configurable)) {
    for (var r = Yn ? "  " : "	", s = `
${r}in ${t.fn?.name || "<unknown>"}`, i = t.ctx; i !== null; )
      s += `
${r}in ${i.function?.[Ci].split("/").pop()}`, i = i.p;
    return {
      message: e.message + `
${s}
`,
      stack: e.stack?.split(`
`).filter((o) => !o.includes("svelte/src/internal")).join(`
`)
    };
  }
}
function Br(e) {
  const t = wn.get(e);
  t && (ve(e, "message", {
    value: t.message
  }), ve(e, "stack", {
    value: t.stack
  }));
}
const Ct = /* @__PURE__ */ new Set();
let P = null, ae = null, se = [], cn = null, $n = !1, mt = !1;
class fe {
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
    se = [], this.apply();
    var n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: []
    };
    for (const r of t)
      this.#o(r, n);
    this.is_fork || this.#c(), this.is_deferred() ? (this.#a(n.effects), this.#a(n.render_effects)) : (P = null, rr(n.render_effects), rr(n.effects), this.#l?.resolve()), ae = null;
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {EffectTarget} target
   */
  #o(t, n) {
    t.f ^= V;
    for (var r = t.first; r !== null; ) {
      var s = r.f, i = (s & (Ie | Be)) !== 0, o = i && (s & V) !== 0, a = o || (s & ye) !== 0 || this.skipped_effects.has(r);
      if ((r.f & on) !== 0 && r.b?.is_pending() && (n = {
        parent: n,
        effect: r,
        effects: [],
        render_effects: []
      }), !a && r.fn !== null) {
        i ? r.f ^= V : (s & jn) !== 0 ? n.effects.push(r) : Ft(r) && ((r.f & Ne) !== 0 && this.#s.add(r), xt(r));
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
      (n.f & Q) !== 0 ? this.#s.add(n) : (n.f & me) !== 0 && this.#i.add(n), this.#u(n.deps), z(n, V);
  }
  /**
   * @param {Value[] | null} deps
   */
  #u(t) {
    if (t !== null)
      for (const n of t)
        (n.f & K) === 0 || (n.f & je) === 0 || (n.f ^= je, this.#u(
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
    this.previous.has(t) || this.previous.set(t, n), (t.f & Me) === 0 && (this.current.set(t, t.v), ae?.set(t, t.v));
  }
  activate() {
    P = this, this.apply();
  }
  deactivate() {
    P === this && (P = null, ae = null);
  }
  flush() {
    if (this.activate(), se.length > 0) {
      if (Kr(), P !== null && P !== this)
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
    if (Ct.size > 1) {
      this.previous.clear();
      var t = ae, n = !0, r = {
        parent: null,
        effect: null,
        effects: [],
        render_effects: []
      };
      for (const i of Ct) {
        if (i === this) {
          n = !1;
          continue;
        }
        const o = [];
        for (const [l, u] of this.current) {
          if (i.current.has(l))
            if (n && u !== i.current.get(l))
              i.current.set(l, u);
            else
              continue;
          o.push(l);
        }
        if (o.length === 0)
          continue;
        const a = [...i.current.keys()].filter((l) => !this.current.has(l));
        if (a.length > 0) {
          var s = se;
          se = [];
          const l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
          for (const p of o)
            qr(p, a, l, u);
          if (se.length > 0) {
            P = i, i.apply();
            for (const p of se)
              i.#o(p, r);
            i.deactivate();
          }
          se = s;
        }
      }
      P = null, ae = t;
    }
    this.committed = !0, Ct.delete(this);
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
      this.#i.delete(t), z(t, Q), Qe(t);
    for (const t of this.#i)
      z(t, me), Qe(t);
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
    return (this.#l ??= xr()).promise;
  }
  static ensure() {
    if (P === null) {
      const t = P = new fe();
      Ct.add(P), mt || fe.enqueue(() => {
        P === t && t.flush();
      });
    }
    return P;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    Hn(t);
  }
  apply() {
  }
}
function St(e) {
  var t = mt;
  mt = !0;
  try {
    for (var n; ; ) {
      if (ds(), se.length === 0 && (P?.flush(), se.length === 0))
        return cn = null, /** @type {T} */
        n;
      Kr();
    }
  } finally {
    mt = t;
  }
}
function Kr() {
  var e = Ze;
  $n = !0;
  var t = _ ? /* @__PURE__ */ new Set() : null;
  try {
    var n = 0;
    for (Zt(!0); se.length > 0; ) {
      var r = fe.ensure();
      if (n++ > 1e3) {
        if (_) {
          var s = /* @__PURE__ */ new Map();
          for (const o of r.current.keys())
            for (const [a, l] of o.updated ?? []) {
              var i = s.get(a);
              i || (i = { error: l.error, count: 0 }, s.set(a, i)), i.count += l.count;
            }
          for (const o of s.values())
            o.error && console.error(o.error);
        }
        hs();
      }
      if (r.process(se), Le.clear(), _)
        for (const o of r.current.keys())
          t.add(o);
    }
  } finally {
    if ($n = !1, Zt(e), cn = null, _)
      for (
        const o of
        /** @type {Set<Source>} */
        t
      )
        o.updated = null;
  }
}
function hs() {
  try {
    Xi();
  } catch (e) {
    _ && ve(e, "stack", { value: "" }), vt(e, cn);
  }
}
let Ee = null;
function rr(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (ke | ye)) === 0 && Ft(r) && (Ee = /* @__PURE__ */ new Set(), xt(r), r.deps === null && r.first === null && r.nodes === null && (r.teardown === null && r.ac === null ? oi(r) : r.fn = null), Ee?.size > 0)) {
        Le.clear();
        for (const s of Ee) {
          if ((s.f & (ke | ye)) !== 0) continue;
          const i = [s];
          let o = s.parent;
          for (; o !== null; )
            Ee.has(o) && (Ee.delete(o), i.push(o)), o = o.parent;
          for (let a = i.length - 1; a >= 0; a--) {
            const l = i[a];
            (l.f & (ke | ye)) === 0 && xt(l);
          }
        }
        Ee.clear();
      }
    }
    Ee = null;
  }
}
function qr(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const s of e.reactions) {
      const i = s.f;
      (i & K) !== 0 ? qr(
        /** @type {Derived} */
        s,
        t,
        n,
        r
      ) : (i & (ln | Ne)) !== 0 && (i & Q) === 0 && Ur(s, t, r) && (z(s, Q), Qe(
        /** @type {Effect} */
        s
      ));
    }
}
function Ur(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const s of e.deps) {
      if (t.includes(s))
        return !0;
      if ((s.f & K) !== 0 && Ur(
        /** @type {Derived} */
        s,
        t,
        n
      ))
        return n.set(
          /** @type {Derived} */
          s,
          !0
        ), !0;
    }
  return n.set(e, !1), !1;
}
function Qe(e) {
  for (var t = cn = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if ($n && t === N && (n & Ne) !== 0 && (n & Ar) === 0)
      return;
    if ((n & (Be | Ie)) !== 0) {
      if ((n & V) === 0) return;
      t.f ^= V;
    }
  }
  se.push(t);
}
function ps(e) {
  let t = 0, n = Pt(0), r;
  return _ && be(n, "createSubscriber version"), () => {
    Tt() && (B(n), Gn(() => (t === 0 && (r = Dt(() => e(() => gt(n)))), t += 1, () => {
      Hn(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, gt(n));
      });
    })));
  };
}
var bs = ft | nt | on;
function _s(e, t, n) {
  new ys(e, t, n);
}
class ys {
  /** @type {Boundary | null} */
  parent;
  #t = !1;
  /** @type {TemplateNode} */
  #e;
  /** @type {TemplateNode | null} */
  #n = L ? C : null;
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
  #m = ps(() => (this.#d = Pt(this.#f), _ && be(this.#d, "$effect.pending()"), () => {
    this.#d = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, r) {
    this.#e = t, this.#r = n, this.#l = r, this.parent = /** @type {Effect} */
    N.b, this.#t = !!this.#r.pending, this.#s = ri(() => {
      if (N.b = this, L) {
        const i = this.#n;
        Kn(), /** @type {Comment} */
        i.nodeType === Ot && /** @type {Comment} */
        i.data === Ln ? this.#w() : this.#g();
      } else {
        var s = this.#_();
        try {
          this.#i = Se(() => r(s));
        } catch (i) {
          this.error(i);
        }
        this.#v > 0 ? this.#b() : this.#t = !1;
      }
      return () => {
        this.#c?.remove();
      };
    }, bs), L && (this.#e = C);
  }
  #g() {
    try {
      this.#i = Se(() => this.#l(this.#e));
    } catch (t) {
      this.error(t);
    }
    this.#t = !1;
  }
  #w() {
    const t = this.#r.pending;
    t && (this.#o = Se(() => t(this.#e)), fe.enqueue(() => {
      var n = this.#_();
      this.#i = this.#p(() => (fe.ensure(), Se(() => this.#l(n)))), this.#v > 0 ? this.#b() : (wt(
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
    return this.#t && (this.#c = et(), this.#e.before(this.#c), t = this.#c), t;
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
    var n = N, r = O, s = H;
    de(this.#s), Z(this.#s), dt(this.#s.ctx);
    try {
      return t();
    } catch (i) {
      return jr(i), null;
    } finally {
      de(n), Z(r), dt(s);
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
    ), ui(this.#i, this.#u)), this.#o === null && (this.#o = Se(() => t(this.#e)));
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
    this.#v += t, this.#v === 0 && (this.#t = !1, this.#o && wt(this.#o, () => {
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
    this.#y(t), this.#f += t, this.#d && Gt(this.#d, this.#f);
  }
  get_effect_pending() {
    return this.#m(), B(
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
    this.#i && (J(this.#i), this.#i = null), this.#o && (J(this.#o), this.#o = null), this.#a && (J(this.#a), this.#a = null), L && (ge(
      /** @type {TemplateNode} */
      this.#n
    ), Pr(), ge(Fr()));
    var s = !1, i = !1;
    const o = () => {
      if (s) {
        os();
        return;
      }
      s = !0, i && rs(), fe.ensure(), this.#f = 0, this.#a !== null && wt(this.#a, () => {
        this.#a = null;
      }), this.#t = this.has_pending_snippet(), this.#i = this.#p(() => (this.#h = !1, Se(() => this.#l(this.#e)))), this.#v > 0 ? this.#b() : this.#t = !1;
    };
    var a = O;
    try {
      Z(null), i = !0, n?.(t, o), i = !1;
    } catch (l) {
      vt(l, this.#s && this.#s.parent);
    } finally {
      Z(a);
    }
    r && Hn(() => {
      this.#a = this.#p(() => {
        fe.ensure(), this.#h = !0;
        try {
          return Se(() => {
            r(
              this.#e,
              () => t,
              () => o
            );
          });
        } catch (l) {
          return vt(
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
function ms(e, t, n, r) {
  const s = Vr;
  if (n.length === 0 && e.length === 0) {
    r(t.map(s));
    return;
  }
  var i = P, o = (
    /** @type {Effect} */
    N
  ), a = gs();
  function l() {
    Promise.all(n.map((u) => /* @__PURE__ */ $s(u))).then((u) => {
      a();
      try {
        r([...t.map(s), ...u]);
      } catch (p) {
        (o.f & ke) === 0 && vt(p, o);
      }
      i?.deactivate(), Yt();
    }).catch((u) => {
      vt(u, o);
    });
  }
  e.length > 0 ? Promise.all(e).then(() => {
    a();
    try {
      return l();
    } finally {
      i?.deactivate(), Yt();
    }
  }) : l();
}
function gs() {
  var e = N, t = O, n = H, r = P;
  if (_)
    var s = Et;
  return function(o = !0) {
    de(e), Z(t), dt(n), o && r?.activate(), _ && Wt(s);
  };
}
function Yt() {
  de(null), Z(null), dt(null), _ && Wt(null);
}
const ws = /* @__PURE__ */ new Set();
// @__NO_SIDE_EFFECTS__
function Vr(e) {
  var t = K | Q, n = O !== null && (O.f & K) !== 0 ? (
    /** @type {Derived} */
    O
  ) : null;
  return N !== null && (N.f |= nt), {
    ctx: H,
    deps: null,
    effects: null,
    equals: Dr,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      U
    ),
    wv: 0,
    parent: n ?? N,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function $s(e, t) {
  let n = (
    /** @type {Effect | null} */
    N
  );
  n === null && Hi();
  var r = (
    /** @type {Boundary} */
    n.b
  ), s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = Pt(
    /** @type {V} */
    U
  ), o = !O, a = /* @__PURE__ */ new Map();
  return Ds(() => {
    var l = xr();
    s = l.promise;
    try {
      Promise.resolve(e()).then(l.resolve, l.reject).then(() => {
        u === P && u.committed && u.deactivate(), Yt();
      });
    } catch (d) {
      l.reject(d), Yt();
    }
    var u = (
      /** @type {Batch} */
      P
    );
    if (o) {
      var p = !r.is_pending();
      r.update_pending_count(1), u.increment(p), a.get(u)?.reject(at), a.delete(u), a.set(u, l);
    }
    const f = (d, v = void 0) => {
      if (u.activate(), v)
        v !== at && (i.f |= Me, Gt(i, v));
      else {
        (i.f & Me) !== 0 && (i.f ^= Me), Gt(i, d);
        for (const [b, g] of a) {
          if (a.delete(b), b === u) break;
          g.reject(at);
        }
      }
      o && (r.update_pending_count(-1), u.decrement(p));
    };
    l.promise.then(f, (d) => f(null, d || "unknown"));
  }), Jr(() => {
    for (const l of a.values())
      l.reject(at);
  }), _ && (i.f |= ln), new Promise((l) => {
    function u(p) {
      function f() {
        p === s ? l(i) : u(s);
      }
      p.then(f, f);
    }
    u(s);
  });
}
function En(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      J(
        /** @type {Effect} */
        t[n]
      );
  }
}
let pn = [];
function Es(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & K) === 0)
      return (t.f & ke) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
function zn(e) {
  var t, n = N;
  if (de(Es(e)), _) {
    let r = ht;
    ir(/* @__PURE__ */ new Set());
    try {
      pn.includes(e) && zi(), pn.push(e), e.f &= ~je, En(e), t = Tn(e);
    } finally {
      de(n), ir(r), pn.pop();
    }
  } else
    try {
      e.f &= ~je, En(e), t = Tn(e);
    } finally {
      de(n);
    }
  return t;
}
function Hr(e) {
  var t = zn(e);
  if (e.equals(t) || (P?.is_fork || (e.v = t), e.wv = fi()), !rt)
    if (ae !== null)
      (Tt() || P?.is_fork) && ae.set(e, t);
    else {
      var n = (e.f & he) === 0 ? me : V;
      z(e, n);
    }
}
let ht = /* @__PURE__ */ new Set();
const Le = /* @__PURE__ */ new Map();
function ir(e) {
  ht = e;
}
let Wn = !1;
function Ss() {
  Wn = !0;
}
function Pt(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Dr,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function $e(e, t) {
  const n = Pt(e);
  return js(n), n;
}
// @__NO_SIDE_EFFECTS__
function zr(e, t = !1, n = !0) {
  const r = Pt(e);
  return t || (r.equals = ls), r;
}
function oe(e, t, n = !1) {
  O !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!_e || (O.f & zt) !== 0) && Mr() && (O.f & (K | Ne | ln | zt)) !== 0 && !Ae?.includes(e) && ns();
  let r = n ? Ge(t) : t;
  return _ && Cr(
    r,
    /** @type {string} */
    e.label
  ), Gt(e, r);
}
function Gt(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    rt ? Le.set(e, t) : Le.set(e, n), e.v = t;
    var r = fe.ensure();
    if (r.capture(e, n), _) {
      if (N !== null) {
        e.updated ??= /* @__PURE__ */ new Map();
        const s = (e.updated.get("")?.count ?? 0) + 1;
        if (e.updated.set("", { error: (
          /** @type {any} */
          null
        ), count: s }), s > 5) {
          const i = cs("updated at");
          if (i !== null) {
            let o = e.updated.get(i.stack);
            o || (o = { error: i, count: 0 }, e.updated.set(i.stack, o)), o.count++;
          }
        }
      }
      N !== null && (e.set_during_effect = !0);
    }
    (e.f & K) !== 0 && ((e.f & Q) !== 0 && zn(
      /** @type {Derived} */
      e
    ), z(e, (e.f & he) !== 0 ? V : me)), e.wv = fi(), Yr(e, Q), N !== null && (N.f & V) !== 0 && (N.f & (Ie | Be)) === 0 && (ie === null ? Bs([e]) : ie.push(e)), !r.is_fork && ht.size > 0 && !Wn && Wr();
  }
  return t;
}
function Wr() {
  Wn = !1;
  var e = Ze;
  Zt(!0);
  const t = Array.from(ht);
  try {
    for (const n of t)
      (n.f & V) !== 0 && z(n, me), Ft(n) && xt(n);
  } finally {
    Zt(e);
  }
  ht.clear();
}
function sr(e, t = 1) {
  var n = B(e), r = t === 1 ? n++ : n--;
  return oe(e, n), r;
}
function gt(e) {
  oe(e, e.v + 1);
}
function Yr(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = n.length, s = 0; s < r; s++) {
      var i = n[s], o = i.f;
      if (_ && (o & zt) !== 0) {
        ht.add(i);
        continue;
      }
      var a = (o & Q) === 0;
      if (a && z(i, t), (o & K) !== 0) {
        var l = (
          /** @type {Derived} */
          i
        );
        ae?.delete(l), (o & je) === 0 && (o & he && (i.f |= je), Yr(l, me));
      } else a && ((o & Ne) !== 0 && Ee !== null && Ee.add(
        /** @type {Effect} */
        i
      ), Qe(
        /** @type {Effect} */
        i
      ));
    }
}
const Ts = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
function Ge(e) {
  if (typeof e != "object" || e === null || xe in e)
    return e;
  const t = Tr(e);
  if (t !== Ki && t !== qi)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Mi(e), s = /* @__PURE__ */ $e(0), i = Je, o = (p) => {
    if (Je === i)
      return p();
    var f = O, d = Je;
    Z(null), lr(i);
    var v = p();
    return Z(f), lr(d), v;
  };
  r && (n.set("length", /* @__PURE__ */ $e(
    /** @type {any[]} */
    e.length
  )), _ && (e = /** @type {any} */
  xs(
    /** @type {any[]} */
    e
  )));
  var a = "";
  let l = !1;
  function u(p) {
    if (!l) {
      l = !0, a = p, be(s, `${a} version`);
      for (const [f, d] of n)
        be(d, Ue(a, f));
      l = !1;
    }
  }
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(p, f, d) {
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && es();
        var v = n.get(f);
        return v === void 0 ? v = o(() => {
          var b = /* @__PURE__ */ $e(d.value);
          return n.set(f, b), _ && typeof f == "string" && be(b, Ue(a, f)), b;
        }) : oe(v, d.value, !0), !0;
      },
      deleteProperty(p, f) {
        var d = n.get(f);
        if (d === void 0) {
          if (f in p) {
            const v = o(() => /* @__PURE__ */ $e(U));
            n.set(f, v), gt(s), _ && be(v, Ue(a, f));
          }
        } else
          oe(d, U), gt(s);
        return !0;
      },
      get(p, f, d) {
        if (f === xe)
          return e;
        if (_ && f === Nr)
          return u;
        var v = n.get(f), b = f in p;
        if (v === void 0 && (!b || De(p, f)?.writable) && (v = o(() => {
          var E = Ge(b ? p[f] : U), T = /* @__PURE__ */ $e(E);
          return _ && be(T, Ue(a, f)), T;
        }), n.set(f, v)), v !== void 0) {
          var g = B(v);
          return g === U ? void 0 : g;
        }
        return Reflect.get(p, f, d);
      },
      getOwnPropertyDescriptor(p, f) {
        var d = Reflect.getOwnPropertyDescriptor(p, f);
        if (d && "value" in d) {
          var v = n.get(f);
          v && (d.value = B(v));
        } else if (d === void 0) {
          var b = n.get(f), g = b?.v;
          if (b !== void 0 && g !== U)
            return {
              enumerable: !0,
              configurable: !0,
              value: g,
              writable: !0
            };
        }
        return d;
      },
      has(p, f) {
        if (f === xe)
          return !0;
        var d = n.get(f), v = d !== void 0 && d.v !== U || Reflect.has(p, f);
        if (d !== void 0 || N !== null && (!v || De(p, f)?.writable)) {
          d === void 0 && (d = o(() => {
            var g = v ? Ge(p[f]) : U, E = /* @__PURE__ */ $e(g);
            return _ && be(E, Ue(a, f)), E;
          }), n.set(f, d));
          var b = B(d);
          if (b === U)
            return !1;
        }
        return v;
      },
      set(p, f, d, v) {
        var b = n.get(f), g = f in p;
        if (r && f === "length")
          for (var E = d; E < /** @type {Source<number>} */
          b.v; E += 1) {
            var T = n.get(E + "");
            T !== void 0 ? oe(T, U) : E in p && (T = o(() => /* @__PURE__ */ $e(U)), n.set(E + "", T), _ && be(T, Ue(a, E)));
          }
        if (b === void 0)
          (!g || De(p, f)?.writable) && (b = o(() => /* @__PURE__ */ $e(void 0)), _ && be(b, Ue(a, f)), oe(b, Ge(d)), n.set(f, b));
        else {
          g = b.v !== U;
          var D = o(() => Ge(d));
          oe(b, D);
        }
        var M = Reflect.getOwnPropertyDescriptor(p, f);
        if (M?.set && M.set.call(v, d), !g) {
          if (r && typeof f == "string") {
            var Y = (
              /** @type {Source<number>} */
              n.get("length")
            ), G = Number(f);
            Number.isInteger(G) && G >= Y.v && oe(Y, G + 1);
          }
          gt(s);
        }
        return !0;
      },
      ownKeys(p) {
        B(s);
        var f = Reflect.ownKeys(p).filter((b) => {
          var g = n.get(b);
          return g === void 0 || g.v !== U;
        });
        for (var [d, v] of n)
          v.v !== U && !(d in p) && f.push(d);
        return f;
      },
      setPrototypeOf() {
        ts();
      }
    }
  );
}
function Ue(e, t) {
  return typeof t == "symbol" ? `${e}[Symbol(${t.description ?? ""})]` : Ts.test(t) ? `${e}.${t}` : /^\d+$/.test(t) ? `${e}[${t}]` : `${e}['${t}']`;
}
function bn(e) {
  try {
    if (e !== null && typeof e == "object" && xe in e)
      return e[xe];
  } catch {
  }
  return e;
}
const ks = /* @__PURE__ */ new Set([
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
function xs(e) {
  return new Proxy(e, {
    get(t, n, r) {
      var s = Reflect.get(t, n, r);
      return ks.has(
        /** @type {string} */
        n
      ) ? function(...i) {
        Ss();
        var o = s.apply(this, i);
        return Wr(), o;
      } : s;
    }
  });
}
function As() {
  const e = Array.prototype, t = Array.__svelte_cleanup;
  t && t();
  const { indexOf: n, lastIndexOf: r, includes: s } = e;
  e.indexOf = function(i, o) {
    const a = n.call(this, i, o);
    if (a === -1) {
      for (let l = o ?? 0; l < this.length; l += 1)
        if (bn(this[l]) === i) {
          hn("array.indexOf(...)");
          break;
        }
    }
    return a;
  }, e.lastIndexOf = function(i, o) {
    const a = r.call(this, i, o ?? this.length - 1);
    if (a === -1) {
      for (let l = 0; l <= (o ?? this.length - 1); l += 1)
        if (bn(this[l]) === i) {
          hn("array.lastIndexOf(...)");
          break;
        }
    }
    return a;
  }, e.includes = function(i, o) {
    const a = s.call(this, i, o);
    if (!a) {
      for (let l = 0; l < this.length; l += 1)
        if (bn(this[l]) === i) {
          hn("array.includes(...)");
          break;
        }
    }
    return a;
  }, Array.__svelte_cleanup = () => {
    e.indexOf = n, e.lastIndexOf = r, e.includes = s;
  };
}
var or, Yn, Gr, Xr;
function Sn() {
  if (or === void 0) {
    or = window, Yn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Gr = De(t, "firstChild").get, Xr = De(t, "nextSibling").get, tr(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), tr(n) && (n.__t = void 0), _ && (e.__svelte_meta = null, As());
  }
}
function et(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Xt(e) {
  return (
    /** @type {TemplateNode | null} */
    Gr.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Ke(e) {
  return (
    /** @type {TemplateNode | null} */
    Xr.call(e)
  );
}
function ce(e, t) {
  if (!L)
    return /* @__PURE__ */ Xt(e);
  var n = /* @__PURE__ */ Xt(C);
  if (n === null)
    n = C.appendChild(et());
  else if (t && n.nodeType !== Ir) {
    var r = et();
    return n?.before(r), ge(r), r;
  }
  return ge(n), n;
}
function Xe(e, t = 1, n = !1) {
  let r = L ? C : e;
  for (var s; t--; )
    s = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ Ke(r);
  if (!L)
    return r;
  if (n && r?.nodeType !== Ir) {
    var i = et();
    return r === null ? s?.after(i) : r.before(i), ge(i), i;
  }
  return ge(r), r;
}
function Os(e) {
  e.textContent = "";
}
function Ns() {
  return !1;
}
function Zr(e) {
  var t = O, n = N;
  Z(null), de(null);
  try {
    return e();
  } finally {
    Z(t), de(n);
  }
}
function Is(e) {
  N === null && (O === null && Gi(e), Yi()), rt && Wi(e);
}
function Rs(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function we(e, t, n) {
  var r = N;
  if (_)
    for (; r !== null && (r.f & zt) !== 0; )
      r = r.parent;
  r !== null && (r.f & ye) !== 0 && (e |= ye);
  var s = {
    ctx: H,
    deps: null,
    nodes: null,
    f: e | Q | he,
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
  if (_ && (s.component_function = Rt), n)
    try {
      xt(s), s.f |= an;
    } catch (a) {
      throw J(s), a;
    }
  else t !== null && Qe(s);
  var i = s;
  if (n && i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
  (i.f & nt) === 0 && (i = i.first, (e & Ne) !== 0 && (e & ft) !== 0 && i !== null && (i.f |= ft)), i !== null && (i.parent = r, r !== null && Rs(i, r), O !== null && (O.f & K) !== 0 && (e & Be) === 0)) {
    var o = (
      /** @type {Derived} */
      O
    );
    (o.effects ??= []).push(i);
  }
  return s;
}
function Tt() {
  return O !== null && !_e;
}
function Jr(e) {
  const t = we(Bn, null, !1);
  return z(t, V), t.teardown = e, t;
}
function Qr(e) {
  Is("$effect"), _ && ve(e, "name", {
    value: "$effect"
  });
  var t = (
    /** @type {Effect} */
    N.f
  ), n = !O && (t & Ie) !== 0 && (t & an) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      H
    );
    (r.e ??= []).push(e);
  } else
    return ei(e);
}
function ei(e) {
  return we(jn | Vi, e, !1);
}
function Ps(e) {
  fe.ensure();
  const t = we(Be | nt, e, !0);
  return () => {
    J(t);
  };
}
function Fs(e) {
  fe.ensure();
  const t = we(Be | nt, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? wt(t, () => {
      J(t), r(void 0);
    }) : (J(t), r(void 0));
  });
}
function ti(e) {
  return we(jn, e, !1);
}
function Ds(e) {
  return we(ln | nt, e, !0);
}
function Gn(e, t = 0) {
  return we(Bn | t, e, !0);
}
function ni(e, t = [], n = [], r = []) {
  ms(r, t, n, (s) => {
    we(Bn, () => e(...s.map(B)), !0);
  });
}
function ri(e, t = 0) {
  var n = we(Ne | t, e, !0);
  return _ && (n.dev_stack = Et), n;
}
function Se(e) {
  return we(Ie | nt, e, !0);
}
function ii(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = rt, r = O;
    ar(!0), Z(null);
    try {
      t.call(null);
    } finally {
      ar(n), Z(r);
    }
  }
}
function si(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const s = n.ac;
    s !== null && Zr(() => {
      s.abort(at);
    });
    var r = n.next;
    (n.f & Be) !== 0 ? n.parent = null : J(n, t), n = r;
  }
}
function Cs(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Ie) === 0 && J(t), t = n;
  }
}
function J(e, t = !0) {
  var n = !1;
  (t || (e.f & Ar) !== 0) && e.nodes !== null && e.nodes.end !== null && (Ms(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), si(e, t && !n), Jt(e, 0), z(e, ke);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const i of r)
      i.stop();
  ii(e);
  var s = e.parent;
  s !== null && s.first !== null && oi(e), _ && (e.component_function = null), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
function Ms(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ Ke(e);
    e.remove(), e = n;
  }
}
function oi(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function wt(e, t, n = !0) {
  var r = [];
  ai(e, r, !0);
  var s = () => {
    n && J(e), t && t();
  }, i = r.length;
  if (i > 0) {
    var o = () => --i || s();
    for (var a of r)
      a.out(o);
  } else
    s();
}
function ai(e, t, n) {
  if ((e.f & ye) === 0) {
    e.f ^= ye;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const a of r)
        (a.is_global || n) && t.push(a);
    for (var s = e.first; s !== null; ) {
      var i = s.next, o = (s.f & ft) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (s.f & Ie) !== 0 && (e.f & Ne) !== 0;
      ai(s, t, o ? n : !1), s = i;
    }
  }
}
function Ls(e) {
  li(e, !0);
}
function li(e, t) {
  if ((e.f & ye) !== 0) {
    e.f ^= ye, (e.f & V) === 0 && (z(e, Q), Qe(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, s = (n.f & ft) !== 0 || (n.f & Ie) !== 0;
      li(n, s ? t : !1), n = r;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const o of i)
        (o.is_global || t) && o.in();
  }
}
function ui(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var s = n === r ? null : /* @__PURE__ */ Ke(n);
      t.append(n), n = s;
    }
}
let Ze = !1;
function Zt(e) {
  Ze = e;
}
let rt = !1;
function ar(e) {
  rt = e;
}
let O = null, _e = !1;
function Z(e) {
  O = e;
}
let N = null;
function de(e) {
  N = e;
}
let Ae = null;
function js(e) {
  O !== null && (Ae === null ? Ae = [e] : Ae.push(e));
}
let W = null, te = 0, ie = null;
function Bs(e) {
  ie = e;
}
let ci = 1, kt = 0, Je = kt;
function lr(e) {
  Je = e;
}
function fi() {
  return ++ci;
}
function Ft(e) {
  var t = e.f;
  if ((t & Q) !== 0)
    return !0;
  if (t & K && (e.f &= ~je), (t & me) !== 0) {
    var n = e.deps;
    if (n !== null)
      for (var r = n.length, s = 0; s < r; s++) {
        var i = n[s];
        if (Ft(
          /** @type {Derived} */
          i
        ) && Hr(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
      }
    (t & he) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    ae === null && z(e, V);
  }
  return !1;
}
function di(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !Ae?.includes(e))
    for (var s = 0; s < r.length; s++) {
      var i = r[s];
      (i.f & K) !== 0 ? di(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? z(i, Q) : (i.f & V) !== 0 && z(i, me), Qe(
        /** @type {Effect} */
        i
      ));
    }
}
function Tn(e) {
  var t = W, n = te, r = ie, s = O, i = Ae, o = H, a = _e, l = Je, u = e.f;
  W = /** @type {null | Value[]} */
  null, te = 0, ie = null, O = (u & (Ie | Be)) === 0 ? e : null, Ae = null, dt(e.ctx), _e = !1, Je = ++kt, e.ac !== null && (Zr(() => {
    e.ac.abort(at);
  }), e.ac = null);
  try {
    e.f |= gn;
    var p = (
      /** @type {Function} */
      e.fn
    ), f = p(), d = e.deps;
    if (W !== null) {
      var v;
      if (Jt(e, te), d !== null && te > 0)
        for (d.length = te + W.length, v = 0; v < W.length; v++)
          d[te + v] = W[v];
      else
        e.deps = d = W;
      if (Tt() && (e.f & he) !== 0)
        for (v = te; v < d.length; v++)
          (d[v].reactions ??= []).push(e);
    } else d !== null && te < d.length && (Jt(e, te), d.length = te);
    if (Mr() && ie !== null && !_e && d !== null && (e.f & (K | me | Q)) === 0)
      for (v = 0; v < /** @type {Source[]} */
      ie.length; v++)
        di(
          ie[v],
          /** @type {Effect} */
          e
        );
    return s !== null && s !== e && (kt++, ie !== null && (r === null ? r = ie : r.push(.../** @type {Source[]} */
    ie))), (e.f & Me) !== 0 && (e.f ^= Me), f;
  } catch (b) {
    return jr(b);
  } finally {
    e.f ^= gn, W = t, te = n, ie = r, O = s, Ae = i, dt(o), _e = a, Je = l;
  }
}
function Ks(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Li.call(n, e);
    if (r !== -1) {
      var s = n.length - 1;
      s === 0 ? n = t.reactions = null : (n[r] = n[s], n.pop());
    }
  }
  n === null && (t.f & K) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (W === null || !W.includes(t)) && (z(t, me), (t.f & he) !== 0 && (t.f ^= he, t.f &= ~je), En(
    /** @type {Derived} **/
    t
  ), Jt(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Jt(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Ks(e, n[r]);
}
function xt(e) {
  var t = e.f;
  if ((t & ke) === 0) {
    z(e, V);
    var n = N, r = Ze;
    if (N = e, Ze = !0, _) {
      var s = Rt;
      nr(e.component_function);
      var i = (
        /** @type {any} */
        Et
      );
      Wt(e.dev_stack ?? Et);
    }
    try {
      (t & (Ne | Ui)) !== 0 ? Cs(e) : si(e), ii(e);
      var o = Tn(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = ci;
      var a;
      _ && us && (e.f & Q) !== 0 && e.deps;
    } finally {
      Ze = r, N = n, _ && (nr(s), Wt(i));
    }
  }
}
async function vi() {
  await Promise.resolve(), St();
}
function B(e) {
  var t = e.f, n = (t & K) !== 0;
  if (O !== null && !_e) {
    var r = N !== null && (N.f & ke) !== 0;
    if (!r && !Ae?.includes(e)) {
      var s = O.deps;
      if ((O.f & gn) !== 0)
        e.rv < kt && (e.rv = kt, W === null && s !== null && s[te] === e ? te++ : W === null ? W = [e] : W.includes(e) || W.push(e));
      else {
        (O.deps ??= []).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [O] : i.includes(O) || i.push(O);
      }
    }
  }
  if (_ && ws.delete(e), rt) {
    if (Le.has(e))
      return Le.get(e);
    if (n) {
      var o = (
        /** @type {Derived} */
        e
      ), a = o.v;
      return ((o.f & V) === 0 && o.reactions !== null || pi(o)) && (a = zn(o)), Le.set(o, a), a;
    }
  } else n && (!ae?.has(e) || P?.is_fork && !Tt()) && (o = /** @type {Derived} */
  e, Ft(o) && Hr(o), Ze && Tt() && (o.f & he) === 0 && hi(o));
  if (ae?.has(e))
    return ae.get(e);
  if ((e.f & Me) !== 0)
    throw e.v;
  return e.v;
}
function hi(e) {
  if (e.deps !== null) {
    e.f ^= he;
    for (const t of e.deps)
      (t.reactions ??= []).push(e), (t.f & K) !== 0 && (t.f & he) === 0 && hi(
        /** @type {Derived} */
        t
      );
  }
}
function pi(e) {
  if (e.v === U) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Le.has(t) || (t.f & K) !== 0 && pi(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Dt(e) {
  var t = _e;
  try {
    return _e = !0, e();
  } finally {
    _e = t;
  }
}
const qs = -7169;
function z(e, t) {
  e.f = e.f & qs | t;
}
function Us(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (xe in e)
      kn(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && xe in n && kn(n);
      }
  }
}
function kn(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        kn(e[r], t);
      } catch {
      }
    const n = Tr(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Bi(n);
      for (let s in r) {
        const i = r[s].get;
        if (i)
          try {
            i.call(e);
          } catch {
          }
      }
    }
  }
}
const bi = /* @__PURE__ */ new Set(), xn = /* @__PURE__ */ new Set();
function Vs(e) {
  for (var t = 0; t < e.length; t++)
    bi.add(e[t]);
  for (var n of xn)
    n(e);
}
let ur = null;
function Mt(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, s = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    s[0] || e.target
  );
  ur = e;
  var o = 0, a = ur === e && e.__root;
  if (a) {
    var l = s.indexOf(a);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var u = s.indexOf(t);
    if (u === -1)
      return;
    l <= u && (o = l);
  }
  if (i = /** @type {Element} */
  s[o] || e.target, i !== t) {
    ve(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var p = O, f = N;
    Z(null), de(null);
    try {
      for (var d, v = []; i !== null; ) {
        var b = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var g = i["__" + r];
          g != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && g.call(i, e);
        } catch (E) {
          d ? v.push(E) : d = E;
        }
        if (e.cancelBubble || b === t || b === null)
          break;
        i = b;
      }
      if (d) {
        for (let E of v)
          queueMicrotask(() => {
            throw E;
          });
        throw d;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Z(p), de(f);
    }
  }
}
function Hs(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function An(e, t) {
  var n = (
    /** @type {Effect} */
    N
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function Xn(e, t) {
  var n = (t & Di) !== 0, r, s = !e.startsWith("<!>");
  return () => {
    if (L)
      return An(C, null), C;
    r === void 0 && (r = Hs(s ? e : "<!>" + e), r = /** @type {TemplateNode} */
    /* @__PURE__ */ Xt(r));
    var i = (
      /** @type {TemplateNode} */
      n || Yn ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    return An(i, i), i;
  };
}
function Qt(e, t) {
  if (L) {
    var n = (
      /** @type {Effect & { nodes: EffectNodes }} */
      N
    );
    ((n.f & an) === 0 || n.nodes.end === null) && (n.nodes.end = C), Kn();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const zs = ["touchstart", "touchmove"];
function Ws(e) {
  return zs.includes(e);
}
function On(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function _i(e, t) {
  return yi(e, t);
}
function Ys(e, t) {
  Sn(), t.intro = t.intro ?? !1;
  const n = t.target, r = L, s = C;
  try {
    for (var i = /* @__PURE__ */ Xt(n); i && (i.nodeType !== Ot || /** @type {Comment} */
    i.data !== Er); )
      i = /* @__PURE__ */ Ke(i);
    if (!i)
      throw ct;
    lt(!0), ge(
      /** @type {Comment} */
      i
    );
    const o = yi(e, { ...t, anchor: i });
    return lt(!1), /**  @type {Exports} */
    o;
  } catch (o) {
    if (o instanceof Error && o.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/")))
      throw o;
    return o !== ct && console.warn("Failed to hydrate: ", o), t.recover === !1 && Zi(), Sn(), Os(n), lt(!1), _i(e, t);
  } finally {
    lt(r), ge(s);
  }
}
const it = /* @__PURE__ */ new Map();
function yi(e, { target: t, anchor: n, props: r = {}, events: s, context: i, intro: o = !0 }) {
  Sn();
  var a = /* @__PURE__ */ new Set(), l = (f) => {
    for (var d = 0; d < f.length; d++) {
      var v = f[d];
      if (!a.has(v)) {
        a.add(v);
        var b = Ws(v);
        t.addEventListener(v, Mt, { passive: b });
        var g = it.get(v);
        g === void 0 ? (document.addEventListener(v, Mt, { passive: b }), it.set(v, 1)) : it.set(v, g + 1);
      }
    }
  };
  l(ji(bi)), xn.add(l);
  var u = void 0, p = Fs(() => {
    var f = n ?? t.appendChild(et());
    return _s(
      /** @type {TemplateNode} */
      f,
      {
        pending: () => {
        }
      },
      (d) => {
        if (i) {
          Un({});
          var v = (
            /** @type {ComponentContext} */
            H
          );
          v.c = i;
        }
        if (s && (r.$$events = s), L && An(
          /** @type {TemplateNode} */
          d,
          null
        ), u = e(d, r) || {}, L && (N.nodes.end = C, C === null || C.nodeType !== Ot || /** @type {Comment} */
        C.data !== Sr))
          throw un(), ct;
        i && Vn();
      }
    ), () => {
      for (var d of a) {
        t.removeEventListener(d, Mt);
        var v = (
          /** @type {number} */
          it.get(d)
        );
        --v === 0 ? (document.removeEventListener(d, Mt), it.delete(d)) : it.set(d, v);
      }
      xn.delete(l), f !== n && f.parentNode?.removeChild(f);
    };
  });
  return Nn.set(u, p), u;
}
let Nn = /* @__PURE__ */ new WeakMap();
function Gs(e, t) {
  const n = Nn.get(e);
  return n ? (Nn.delete(e), n(t)) : (_ && (xe in e ? ss() : is()), Promise.resolve());
}
class Xs {
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
      P
    );
    if (this.#t.has(t)) {
      var n = (
        /** @type {Key} */
        this.#t.get(t)
      ), r = this.#e.get(n);
      if (r)
        Ls(r), this.#r.delete(n);
      else {
        var s = this.#n.get(n);
        s && (this.#e.set(n, s.effect), this.#n.delete(n), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), r = s.effect);
      }
      for (const [i, o] of this.#t) {
        if (this.#t.delete(i), i === t)
          break;
        const a = this.#n.get(o);
        a && (J(a.effect), this.#n.delete(o));
      }
      for (const [i, o] of this.#e) {
        if (i === n || this.#r.has(i)) continue;
        const a = () => {
          if (Array.from(this.#t.values()).includes(i)) {
            var u = document.createDocumentFragment();
            ui(o, u), u.append(et()), this.#n.set(i, { effect: o, fragment: u });
          } else
            J(o);
          this.#r.delete(i), this.#e.delete(i);
        };
        this.#l || !r ? (this.#r.add(i), wt(o, a, !1)) : a();
      }
    }
  };
  /**
   * @param {Batch} batch
   */
  #i = (t) => {
    this.#t.delete(t);
    const n = Array.from(this.#t.values());
    for (const [r, s] of this.#n)
      n.includes(r) || (J(s.effect), this.#n.delete(r));
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var r = (
      /** @type {Batch} */
      P
    ), s = Ns();
    if (n && !this.#e.has(t) && !this.#n.has(t))
      if (s) {
        var i = document.createDocumentFragment(), o = et();
        i.append(o), this.#n.set(t, {
          effect: Se(() => n(o)),
          fragment: i
        });
      } else
        this.#e.set(
          t,
          Se(() => n(this.anchor))
        );
    if (this.#t.set(r, t), s) {
      for (const [a, l] of this.#e)
        a === t ? r.skipped_effects.delete(l) : r.skipped_effects.add(l);
      for (const [a, l] of this.#n)
        a === t ? r.skipped_effects.delete(l.effect) : r.skipped_effects.add(l.effect);
      r.oncommit(this.#s), r.ondiscard(this.#i);
    } else
      L && (this.anchor = C), this.#s();
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
          Qi(t);
        },
        set: (r) => {
          n = r;
        }
      });
    }
  };
  var Aa = e;
  e("$state"), e("$effect"), e("$derived"), e("$inspect"), e("$props"), e("$bindable");
}
function Zs(e) {
  H === null && Rr("onMount"), Qr(() => {
    const t = Dt(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Js(e) {
  H === null && Rr("onDestroy"), Zs(() => () => Dt(e));
}
var cr = /* @__PURE__ */ new Map();
function Qs(e, t) {
  var n = cr.get(e);
  n || (n = /* @__PURE__ */ new Set(), cr.set(e, n)), n.add(t);
}
function eo(e, t, n = !1) {
  L && Kn();
  var r = new Xs(e), s = n ? ft : 0;
  function i(o, a) {
    if (L) {
      const u = as(e) === Ln;
      if (o === u) {
        var l = Fr();
        ge(l), r.anchor = l, lt(!1), r.ensure(o, a), lt(!0);
        return;
      }
    }
    r.ensure(o, a);
  }
  ri(() => {
    var o = !1;
    t((a, l = !0) => {
      o = !0, i(l, a);
    }), o || i(!1, null);
  }, s);
}
function mi(e, t) {
  ti(() => {
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
      const s = document.createElement("style");
      s.id = t.hash, s.textContent = t.code, r.appendChild(s), _ && Qs(t.hash, s);
    }
  });
}
function Ve(e, t, n) {
  ti(() => {
    var r = Dt(() => t(e, n?.()) || {});
    if (n && r?.update) {
      var s = !1, i = (
        /** @type {any} */
        {}
      );
      Gn(() => {
        var o = n();
        Us(o), s && qn(i, o) && (i = o, r.update(o));
      }), s = !0;
    }
    if (r?.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Zn(e, t, n) {
  if (e == null)
    return t(void 0), n && n(void 0), Ce;
  const r = Dt(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const st = [];
function ut(e, t) {
  return {
    subscribe: fn(e, t).subscribe
  };
}
function fn(e, t = Ce) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function s(a) {
    if (qn(e, a) && (e = a, n)) {
      const l = !st.length;
      for (const u of r)
        u[1](), st.push(u, e);
      if (l) {
        for (let u = 0; u < st.length; u += 2)
          st[u][0](st[u + 1]);
        st.length = 0;
      }
    }
  }
  function i(a) {
    s(a(
      /** @type {T} */
      e
    ));
  }
  function o(a, l = Ce) {
    const u = [a, l];
    return r.add(u), r.size === 1 && (n = t(s, i) || Ce), a(
      /** @type {T} */
      e
    ), () => {
      r.delete(u), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: s, update: i, subscribe: o };
}
function Jn(e, t, n) {
  const r = !Array.isArray(e), s = r ? [e] : e;
  if (!s.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const i = t.length < 2;
  return ut(n, (o, a) => {
    let l = !1;
    const u = [];
    let p = 0, f = Ce;
    const d = () => {
      if (p)
        return;
      f();
      const b = t(r ? u[0] : u, o, a);
      i ? o(b) : f = typeof b == "function" ? b : Ce;
    }, v = s.map(
      (b, g) => Zn(
        b,
        (E) => {
          u[g] = E, p &= ~(1 << g), l && d();
        },
        () => {
          p |= 1 << g;
        }
      )
    );
    return l = !0, d(), function() {
      kr(v), f(), l = !1;
    };
  });
}
function gi(e) {
  let t;
  return Zn(e, (n) => t = n)(), t;
}
let Lt = !1, In = /* @__PURE__ */ Symbol();
function Pe(e, t, n) {
  const r = n[t] ??= {
    store: null,
    source: /* @__PURE__ */ zr(void 0),
    unsubscribe: Ce
  };
  if (_ && (r.source.label = t), r.store !== e && !(In in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = Ce;
    else {
      var s = !0;
      r.unsubscribe = Zn(e, (i) => {
        s ? r.source.v = i : oe(r.source, i);
      }), s = !1;
    }
  return e && In in n ? gi(e) : B(r.source);
}
function to() {
  const e = {};
  function t() {
    Jr(() => {
      for (var n in e)
        e[n].unsubscribe();
      ve(e, In, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function no(e) {
  var t = Lt;
  try {
    return Lt = !1, [e(), Lt];
  } finally {
    Lt = t;
  }
}
function Rn(e, t, n, r) {
  var s = (
    /** @type {V} */
    r
  ), i = !0, o = () => (i && (i = !1, s = /** @type {V} */
  r), s), a;
  {
    var l = xe in e || Or in e;
    a = De(e, t)?.set ?? (l && t in e ? (E) => e[t] = E : void 0);
  }
  var u, p = !1;
  [u, p] = no(() => (
    /** @type {V} */
    e[t]
  )), u === void 0 && r !== void 0 && (u = o(), a && (Ji(t), a(u)));
  var f;
  if (f = () => {
    var E = (
      /** @type {V} */
      e[t]
    );
    return E === void 0 ? o() : (i = !0, E);
  }, a) {
    var d = e.$$legacy;
    return (
      /** @type {() => V} */
      (function(E, T) {
        return arguments.length > 0 ? ((!T || d || p) && a(T ? f() : E), E) : f();
      })
    );
  }
  var v = !1, b = /* @__PURE__ */ Vr(() => (v = !1, f()));
  _ && (b.label = t), B(b);
  var g = (
    /** @type {Effect} */
    N
  );
  return (
    /** @type {() => V} */
    (function(E, T) {
      if (arguments.length > 0) {
        const D = T ? B(b) : Ge(E);
        return oe(b, D), v = !0, s !== void 0 && (s = D), E;
      }
      return rt && v || (g.f & ke) !== 0 ? b.v : B(b);
    })
  );
}
function ro(e) {
  return new io(e);
}
class io {
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
    var n = /* @__PURE__ */ new Map(), r = (i, o) => {
      var a = /* @__PURE__ */ zr(o, !1, !1);
      return n.set(i, a), a;
    };
    const s = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(i, o) {
          return B(n.get(o) ?? r(o, Reflect.get(i, o)));
        },
        has(i, o) {
          return o === Or ? !0 : (B(n.get(o) ?? r(o, Reflect.get(i, o))), Reflect.has(i, o));
        },
        set(i, o, a) {
          return oe(n.get(o) ?? r(o, a), a), Reflect.set(i, o, a);
        }
      }
    );
    this.#e = (t.hydrate ? Ys : _i)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: s,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    }), (!t?.props?.$$host || t.sync === !1) && St(), this.#t = s.$$events;
    for (const i of Object.keys(this.#e))
      i === "$set" || i === "$destroy" || i === "$on" || ve(this, i, {
        get() {
          return this.#e[i];
        },
        /** @param {any} value */
        set(o) {
          this.#e[i] = o;
        },
        enumerable: !0
      });
    this.#e.$set = /** @param {Record<string, any>} next */
    (i) => {
      Object.assign(s, i);
    }, this.#e.$destroy = () => {
      Gs(this.#e);
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
    const r = (...s) => n.call(this, ...s);
    return this.#t[t].push(r), () => {
      this.#t[t] = this.#t[t].filter(
        /** @param {any} fn */
        (s) => s !== r
      );
    };
  }
  $destroy() {
    this.#e.$destroy();
  }
}
let wi;
typeof HTMLElement == "function" && (wi = class extends HTMLElement {
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
      let t = function(s) {
        return (i) => {
          const o = document.createElement("slot");
          s !== "default" && (o.name = s), Qt(i, o);
        };
      };
      var e = t;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, r = so(this);
      for (const s of this.$$s)
        s in r && (s === "default" && !this.$$d.children ? (this.$$d.children = t(s), n.default = !0) : n[s] = t(s));
      for (const s of this.attributes) {
        const i = this.$$g_p(s.name);
        i in this.$$d || (this.$$d[i] = Ut(i, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = ro({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$host: this
        }
      }), this.$$me = Ps(() => {
        Gn(() => {
          this.$$r = !0;
          for (const s of Ht(this.$$c)) {
            if (!this.$$p_d[s]?.reflect) continue;
            this.$$d[s] = this.$$c[s];
            const i = Ut(
              s,
              this.$$d[s],
              this.$$p_d,
              "toAttribute"
            );
            i == null ? this.removeAttribute(this.$$p_d[s].attribute || s) : this.setAttribute(this.$$p_d[s].attribute || s, i);
          }
          this.$$r = !1;
        });
      });
      for (const s in this.$$l)
        for (const i of this.$$l[s]) {
          const o = this.$$c.$on(s, i);
          this.$$l_u.set(i, o);
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = Ut(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
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
    return Ht(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function Ut(e, t, n, r) {
  const s = n[e]?.type;
  if (t = s === "Boolean" && typeof t != "boolean" ? t != null : t, !r || !n[e])
    return t;
  if (r === "toAttribute")
    switch (s) {
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
    switch (s) {
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
function so(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function $i(e, t, n, r, s, i) {
  let o = class extends wi {
    constructor() {
      super(e, n, s), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Ht(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return Ht(t).forEach((a) => {
    ve(o.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        l = Ut(a, l, t), this.$$d[a] = l;
        var u = this.$$c;
        if (u) {
          var p = De(u, a)?.get;
          p ? u[a] = l : u.$set({ [a]: l });
        }
      }
    });
  }), r.forEach((a) => {
    ve(o.prototype, a, {
      get() {
        return this.$$c?.[a];
      }
    });
  }), e.element = /** @type {any} */
  o, o;
}
var oo = /* @__PURE__ */ Xn('<div class="container svelte-htsxo4"><div class="counter svelte-htsxo4"><div class="label svelte-htsxo4">Svelte Counter:</div> <button type="button" class="button svelte-htsxo4">-</button> <span class="count svelte-htsxo4"> </span> <button type="button" class="button svelte-htsxo4">+</button></div></div>');
const ao = {
  hash: "svelte-htsxo4",
  code: ".container.svelte-htsxo4 {display:flex;flex-direction:column;align-items:center;padding:1rem;border:2px solid #ff3e00;border-radius:8px;background-color:#f9f9f9;font-family:system-ui, -apple-system, sans-serif;}.counter.svelte-htsxo4 {display:flex;align-items:center;gap:1rem;}.label.svelte-htsxo4 {font-size:1rem;font-weight:600;color:#333;margin-bottom:0.5rem;}.button.svelte-htsxo4 {width:40px;height:40px;font-size:1.5rem;border:2px solid #ff3e00;background-color:#ff3e00;color:white;border-radius:4px;cursor:pointer;transition:background-color 0.2s;}.button.svelte-htsxo4:hover {background-color:#e63900;}.button.svelte-htsxo4:active {background-color:#cc3300;}.count.svelte-htsxo4 {font-size:2rem;font-weight:bold;color:#ff3e00;min-width:3rem;text-align:center;}"
};
function lo(e, t) {
  Un(t, !0), mi(e, ao);
  let n = Rn(t, "count", 15, 0), r = /* @__PURE__ */ $e(Ge(n()));
  Qr(() => {
    oe(r, n(), !0);
  });
  function s() {
    sr(r), n(B(r));
  }
  function i() {
    sr(r, -1), n(B(r));
  }
  var o = {
    get count() {
      return n();
    },
    set count(v = 0) {
      n(v), St();
    }
  }, a = oo(), l = ce(a), u = Xe(ce(l), 2);
  u.__click = i;
  var p = Xe(u, 2), f = ce(p, !0);
  ue(p);
  var d = Xe(p, 2);
  return d.__click = s, ue(l), ue(a), ni(() => On(f, B(r))), Qt(e, a), Vn(o);
}
Vs(["click"]);
customElements.define("svelte-counter", $i(lo, { count: {} }, [], [], !0));
function Pn(e) {
  return Object.keys(e).reduce((t, n) => e[n] === void 0 ? t : t + `${n}:${e[n]};`, "");
}
Pn({
  position: "absolute",
  opacity: 0,
  "pointer-events": "none",
  margin: 0,
  transform: "translateX(-100%)"
});
function uo(e) {
  if (e !== null)
    return "";
}
function en(...e) {
  return (...t) => {
    for (const n of e)
      typeof n == "function" && n(...t);
  };
}
function F() {
}
function Ei(e, ...t) {
  const n = {};
  for (const r of Object.keys(e))
    t.includes(r) || (n[r] = e[r]);
  return n;
}
function jt(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 && (t[n] = r);
  }
  return t;
}
function fr(e) {
  function t(n) {
    return n(e), () => {
    };
  }
  return { subscribe: t };
}
const Bt = (e) => new Proxy(e, {
  get(t, n, r) {
    return Reflect.get(t, n, r);
  },
  ownKeys(t) {
    return Reflect.ownKeys(t).filter((n) => n !== "action");
  }
}), dr = (e) => typeof e == "function";
Fe("empty");
function Fe(e, t) {
  const { stores: n, action: r, returned: s } = t ?? {}, i = (() => {
    if (n && s)
      return Jn(n, (a) => {
        const l = s(a);
        if (dr(l)) {
          const u = (...p) => Bt(jt({
            ...l(...p),
            [`data-melt-${e}`]: "",
            action: r ?? F
          }));
          return u.action = r ?? F, u;
        }
        return Bt(jt({
          ...l,
          [`data-melt-${e}`]: "",
          action: r ?? F
        }));
      });
    {
      const l = s?.();
      if (dr(l)) {
        const u = (...p) => Bt(jt({
          ...l(...p),
          [`data-melt-${e}`]: "",
          action: r ?? F
        }));
        return u.action = r ?? F, fr(u);
      }
      return fr(Bt(jt({
        ...l,
        [`data-melt-${e}`]: "",
        action: r ?? F
      })));
    }
  })(), o = r ?? (() => {
  });
  return o.subscribe = i.subscribe, o;
}
function co(e) {
  const t = (i) => i ? `${e}-${i}` : e, n = (i) => `data-melt-${e}${i ? `-${i}` : ""}`, r = (i) => `[data-melt-${e}${i ? `-${i}` : ""}]`;
  return {
    name: t,
    attribute: n,
    selector: r,
    getEl: (i) => document.querySelector(r(i))
  };
}
const vr = typeof document < "u", Si = (e) => typeof e == "function";
function fo(e) {
  return e instanceof ShadowRoot;
}
function Qn(e) {
  return e instanceof Element;
}
function Oe(e) {
  return e instanceof HTMLElement;
}
function vo(e) {
  return e !== null && typeof e == "object";
}
function ho(e) {
  return vo(e) && "subscribe" in e;
}
function Fn(e, t, n, r) {
  const s = Array.isArray(t) ? t : [t];
  return s.forEach((i) => e.addEventListener(i, n, r)), () => {
    s.forEach((i) => e.removeEventListener(i, n, r));
  };
}
function Kt(e, t, n, r) {
  const s = Array.isArray(t) ? t : [t];
  if (typeof n == "function") {
    const i = bo((o) => n(o));
    return s.forEach((o) => e.addEventListener(o, i, r)), () => {
      s.forEach((o) => e.removeEventListener(o, i, r));
    };
  }
  return () => void 0;
}
function po(e) {
  const t = e.currentTarget;
  if (!Oe(t))
    return null;
  const n = new CustomEvent(`m-${e.type}`, {
    detail: {
      originalEvent: e
    },
    cancelable: !0
  });
  return t.dispatchEvent(n), n;
}
function bo(e) {
  return (t) => {
    if (!po(t)?.defaultPrevented)
      return e(t);
  };
}
const _o = (e) => {
  try {
    Js(e);
  } catch {
    return e;
  }
};
function pt(e) {
  return {
    ...e,
    get: () => gi(e)
  };
}
pt.writable = function(e) {
  const t = fn(e);
  let n = e;
  return {
    subscribe: t.subscribe,
    set(r) {
      t.set(r), n = r;
    },
    update(r) {
      const s = r(n);
      t.set(s), n = s;
    },
    get() {
      return n;
    }
  };
};
pt.derived = function(e, t) {
  const n = /* @__PURE__ */ new Map(), r = () => {
    const i = Array.isArray(e) ? e.map((o) => o.get()) : e.get();
    return t(i);
  };
  return {
    get: r,
    subscribe: (i) => {
      const o = [];
      return (Array.isArray(e) ? e : [e]).forEach((l) => {
        o.push(l.subscribe(() => {
          i(r());
        }));
      }), i(r()), n.set(i, o), () => {
        const l = n.get(i);
        if (l)
          for (const u of l)
            u();
        n.delete(i);
      };
    }
  };
};
const yo = (e, t) => {
  const n = pt(e), r = (i, o) => {
    n.update((a) => {
      const l = i(a);
      let u = l;
      return t && (u = t({ curr: a, next: l })), o?.(u), u;
    });
  };
  return {
    ...n,
    update: r,
    set: (i) => {
      r(() => i);
    }
  };
};
function mo(e) {
  return new Promise((t) => setTimeout(t, e));
}
let go = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", wo = (e = 21) => {
  let t = "", n = e | 0;
  for (; n--; )
    t += go[Math.random() * 64 | 0];
  return t;
};
function $o() {
  return wo(10);
}
function Eo(e) {
  return e.reduce((t, n) => (t[n] = $o(), t), {});
}
const _t = {
  ENTER: "Enter",
  ESCAPE: "Escape",
  SPACE: " "
};
function _n(e, t = 500) {
  let n;
  const r = (...s) => {
    clearTimeout(n), n = setTimeout(() => e(...s), t);
  };
  return r.destroy = () => clearTimeout(n), r;
}
const Ti = () => typeof window < "u";
function So() {
  return navigator.userAgentData?.platform ?? navigator.platform;
}
const ki = (e) => Ti() && e.test(So().toLowerCase()), To = () => Ti() && !!navigator.maxTouchPoints, ko = () => ki(/^mac/) && !To(), xo = () => ki(/mac|iphone|ipad|ipod/i), Ao = () => xo() && !ko(), yn = "data-melt-scroll-lock";
function hr(e, t) {
  if (!e)
    return;
  const n = e.style.cssText;
  return Object.assign(e.style, t), () => {
    e.style.cssText = n;
  };
}
function Oo(e, t, n) {
  if (!e)
    return;
  const r = e.style.getPropertyValue(t);
  return e.style.setProperty(t, n), () => {
    r ? e.style.setProperty(t, r) : e.style.removeProperty(t);
  };
}
function No(e) {
  const t = e.getBoundingClientRect().left;
  return Math.round(t) + e.scrollLeft ? "paddingLeft" : "paddingRight";
}
function Io(e) {
  const t = document, n = t.defaultView ?? window, { documentElement: r, body: s } = t;
  if (s.hasAttribute(yn))
    return F;
  s.setAttribute(yn, "");
  const o = n.innerWidth - r.clientWidth, a = () => Oo(r, "--scrollbar-width", `${o}px`), l = No(r), u = n.getComputedStyle(s)[l], p = () => hr(s, {
    overflow: "hidden",
    [l]: `calc(${u} + ${o}px)`
  }), f = () => {
    const { scrollX: v, scrollY: b, visualViewport: g } = n, E = g?.offsetLeft ?? 0, T = g?.offsetTop ?? 0, D = hr(s, {
      position: "fixed",
      overflow: "hidden",
      top: `${-(b - Math.floor(T))}px`,
      left: `${-(v - Math.floor(E))}px`,
      right: "0",
      [l]: `calc(${u} + ${o}px)`
    });
    return () => {
      D?.(), n.scrollTo(v, b);
    };
  }, d = [a(), Ao() ? f() : p()];
  return () => {
    d.forEach((v) => v?.()), s.removeAttribute(yn);
  };
}
function yt(e, t, n = {}) {
  const { skipFirstRun: r } = n;
  let s = !0, i;
  const o = Jn(e, (l) => {
    i?.(), s && r ? s = !1 : i = t(l);
  }).subscribe(F), a = () => {
    o(), i?.();
  };
  return _o(a), a;
}
function pr(e) {
  const t = {};
  return Object.keys(e).forEach((n) => {
    const r = n, s = e[r];
    t[r] = pt(fn(s));
  }), t;
}
function Ro(e) {
  let t = e.parentElement;
  for (; Oe(t) && !t.hasAttribute("data-portal"); )
    t = t.parentElement;
  return t || "body";
}
function Po(e, t) {
  return t !== void 0 ? t : Ro(e) === "body" ? document.body : null;
}
function xi(e, t) {
  return e === t || e.contains(t);
}
function Fo(e) {
  return e?.ownerDocument ?? document;
}
async function br(e) {
  const { prop: t, defaultEl: n } = e;
  if (await Promise.all([mo(1), vi]), t === void 0) {
    n?.focus();
    return;
  }
  const r = Si(t) ? t(n) : t;
  if (typeof r == "string") {
    const s = document.querySelector(r);
    if (!Oe(s))
      return;
    s.focus();
  } else Oe(r) && r.focus();
}
ut(!1), ut(!1), ut(void 0), ut(void 0);
const Vt = /* @__PURE__ */ new Map(), Do = ((e, t = {}) => {
  let n = F;
  function r(s = {}) {
    n();
    const i = { behaviorType: "close", ...s }, o = ho(i.behaviorType) ? i.behaviorType : pt(ut(i.behaviorType));
    Vt.set(e, o), n = en(Fn(document, "keydown", (l) => {
      if (l.key !== _t.ESCAPE || !Co(e))
        return;
      const u = l.target;
      Oe(u) && (l.preventDefault(), !Mo(l, i.ignore) && Lo(o.get()) && i.handler?.(l));
    }, { passive: !1 }), yt(o, (l) => {
      l === "close" || l === "defer-otherwise-close" && [...Vt.keys()][0] === e ? e.dataset.escapee = "" : delete e.dataset.escapee;
    }), o.destroy || F);
  }
  return r(t), {
    update: r,
    destroy() {
      Vt.delete(e), delete e.dataset.escapee, n();
    }
  };
}), Co = (e) => {
  const t = [...Vt], n = t.findLast(([s, i]) => {
    const o = i.get();
    return o === "close" || o === "ignore";
  });
  if (n)
    return n[0] === e;
  const [r] = t[0];
  return r === e;
}, Mo = (e, t) => t ? !!(Si(t) && t(e) || Array.isArray(t) && t.some((n) => e.target === n)) : !1, Lo = (e) => e === "close" || e === "defer-otherwise-close";
var Ai = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], tn = /* @__PURE__ */ Ai.join(","), Oi = typeof Element > "u", tt = Oi ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, nn = !Oi && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e?.ownerDocument;
}, At = function(t, n) {
  var r;
  n === void 0 && (n = !0);
  var s = t == null || (r = t.getAttribute) === null || r === void 0 ? void 0 : r.call(t, "inert"), i = s === "" || s === "true", o = i || n && t && At(t.parentNode);
  return o;
}, jo = function(t) {
  var n, r = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return r === "" || r === "true";
}, Ni = function(t, n, r) {
  if (At(t))
    return [];
  var s = Array.prototype.slice.apply(t.querySelectorAll(tn));
  return n && tt.call(t, tn) && s.unshift(t), s = s.filter(r), s;
}, rn = function(t, n, r) {
  for (var s = [], i = Array.from(t); i.length; ) {
    var o = i.shift();
    if (!At(o, !1))
      if (o.tagName === "SLOT") {
        var a = o.assignedElements(), l = a.length ? a : o.children, u = rn(l, !0, r);
        r.flatten ? s.push.apply(s, u) : s.push({
          scopeParent: o,
          candidates: u
        });
      } else {
        var p = tt.call(o, tn);
        p && r.filter(o) && (n || !t.includes(o)) && s.push(o);
        var f = o.shadowRoot || // check for an undisclosed shadow
        typeof r.getShadowRoot == "function" && r.getShadowRoot(o), d = !At(f, !1) && (!r.shadowRootFilter || r.shadowRootFilter(o));
        if (f && d) {
          var v = rn(f === !0 ? o.children : f.children, !0, r);
          r.flatten ? s.push.apply(s, v) : s.push({
            scopeParent: o,
            candidates: v
          });
        } else
          i.unshift.apply(i, o.children);
      }
  }
  return s;
}, Ii = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, We = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || jo(t)) && !Ii(t) ? 0 : t.tabIndex;
}, Bo = function(t, n) {
  var r = We(t);
  return r < 0 && n && !Ii(t) ? 0 : r;
}, Ko = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, Ri = function(t) {
  return t.tagName === "INPUT";
}, qo = function(t) {
  return Ri(t) && t.type === "hidden";
}, Uo = function(t) {
  var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(r) {
    return r.tagName === "SUMMARY";
  });
  return n;
}, Vo = function(t, n) {
  for (var r = 0; r < t.length; r++)
    if (t[r].checked && t[r].form === n)
      return t[r];
}, Ho = function(t) {
  if (!t.name)
    return !0;
  var n = t.form || nn(t), r = function(a) {
    return n.querySelectorAll('input[type="radio"][name="' + a + '"]');
  }, s;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    s = r(window.CSS.escape(t.name));
  else
    try {
      s = r(t.name);
    } catch (o) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", o.message), !1;
    }
  var i = Vo(s, t.form);
  return !i || i === t;
}, zo = function(t) {
  return Ri(t) && t.type === "radio";
}, Wo = function(t) {
  return zo(t) && !Ho(t);
}, Yo = function(t) {
  var n, r = t && nn(t), s = (n = r) === null || n === void 0 ? void 0 : n.host, i = !1;
  if (r && r !== t) {
    var o, a, l;
    for (i = !!((o = s) !== null && o !== void 0 && (a = o.ownerDocument) !== null && a !== void 0 && a.contains(s) || t != null && (l = t.ownerDocument) !== null && l !== void 0 && l.contains(t)); !i && s; ) {
      var u, p, f;
      r = nn(s), s = (u = r) === null || u === void 0 ? void 0 : u.host, i = !!((p = s) !== null && p !== void 0 && (f = p.ownerDocument) !== null && f !== void 0 && f.contains(s));
    }
  }
  return i;
}, _r = function(t) {
  var n = t.getBoundingClientRect(), r = n.width, s = n.height;
  return r === 0 && s === 0;
}, Go = function(t, n) {
  var r = n.displayCheck, s = n.getShadowRoot;
  if (r === "full-native" && "checkVisibility" in t) {
    var i = t.checkVisibility({
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
    return !i;
  }
  if (getComputedStyle(t).visibility === "hidden")
    return !0;
  var o = tt.call(t, "details>summary:first-of-type"), a = o ? t.parentElement : t;
  if (tt.call(a, "details:not([open]) *"))
    return !0;
  if (!r || r === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  r === "full-native" || r === "legacy-full") {
    if (typeof s == "function") {
      for (var l = t; t; ) {
        var u = t.parentElement, p = nn(t);
        if (u && !u.shadowRoot && s(u) === !0)
          return _r(t);
        t.assignedSlot ? t = t.assignedSlot : !u && p !== t.ownerDocument ? t = p.host : t = u;
      }
      t = l;
    }
    if (Yo(t))
      return !t.getClientRects().length;
    if (r !== "legacy-full")
      return !0;
  } else if (r === "non-zero-area")
    return _r(t);
  return !1;
}, Xo = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var n = t.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var r = 0; r < n.children.length; r++) {
          var s = n.children.item(r);
          if (s.tagName === "LEGEND")
            return tt.call(n, "fieldset[disabled] *") ? !0 : !s.contains(t);
        }
        return !0;
      }
      n = n.parentElement;
    }
  return !1;
}, sn = function(t, n) {
  return !(n.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  At(n) || qo(n) || Go(n, t) || // For a details element with a summary, the summary element gets the focus
  Uo(n) || Xo(n));
}, Dn = function(t, n) {
  return !(Wo(n) || We(n) < 0 || !sn(t, n));
}, Zo = function(t) {
  var n = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, Pi = function(t) {
  var n = [], r = [];
  return t.forEach(function(s, i) {
    var o = !!s.scopeParent, a = o ? s.scopeParent : s, l = Bo(a, o), u = o ? Pi(s.candidates) : a;
    l === 0 ? o ? n.push.apply(n, u) : n.push(a) : r.push({
      documentOrder: i,
      tabIndex: l,
      item: s,
      isScope: o,
      content: u
    });
  }), r.sort(Ko).reduce(function(s, i) {
    return i.isScope ? s.push.apply(s, i.content) : s.push(i.content), s;
  }, []).concat(n);
}, Jo = function(t, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = rn([t], n.includeContainer, {
    filter: Dn.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: Zo
  }) : r = Ni(t, n.includeContainer, Dn.bind(null, n)), Pi(r);
}, Qo = function(t, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = rn([t], n.includeContainer, {
    filter: sn.bind(null, n),
    flatten: !0,
    getShadowRoot: n.getShadowRoot
  }) : r = Ni(t, n.includeContainer, sn.bind(null, n)), r;
}, ot = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return tt.call(t, tn) === !1 ? !1 : Dn(n, t);
}, ea = /* @__PURE__ */ Ai.concat("iframe").join(","), mn = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return tt.call(t, ea) === !1 ? !1 : sn(n, t);
};
function Cn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function ta(e) {
  if (Array.isArray(e)) return Cn(e);
}
function yr(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = Fi(e)) || t) {
      n && (e = n);
      var r = 0, s = function() {
      };
      return {
        s,
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
        f: s
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var i, o = !0, a = !1;
  return {
    s: function() {
      n = n.call(e);
    },
    n: function() {
      var l = n.next();
      return o = l.done, l;
    },
    e: function(l) {
      a = !0, i = l;
    },
    f: function() {
      try {
        o || n.return == null || n.return();
      } finally {
        if (a) throw i;
      }
    }
  };
}
function na(e, t, n) {
  return (t = aa(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function ra(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function ia() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function mr(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(e, s).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function gr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? mr(Object(n), !0).forEach(function(r) {
      na(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : mr(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function sa(e) {
  return ta(e) || ra(e) || Fi(e) || ia();
}
function oa(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function aa(e) {
  var t = oa(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Fi(e, t) {
  if (e) {
    if (typeof e == "string") return Cn(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Cn(e, t) : void 0;
  }
}
var Te = {
  // Returns the trap from the top of the stack.
  getActiveTrap: function(t) {
    return t?.length > 0 ? t[t.length - 1] : null;
  },
  // Pauses the currently active trap, then adds a new trap to the stack.
  activateTrap: function(t, n) {
    var r = Te.getActiveTrap(t);
    n !== r && Te.pauseTrap(t);
    var s = t.indexOf(n);
    s === -1 || t.splice(s, 1), t.push(n);
  },
  // Removes the trap from the top of the stack, then unpauses the next trap down.
  deactivateTrap: function(t, n) {
    var r = t.indexOf(n);
    r !== -1 && t.splice(r, 1), Te.unpauseTrap(t);
  },
  // Pauses the trap at the top of the stack.
  pauseTrap: function(t) {
    var n = Te.getActiveTrap(t);
    n?._setPausedState(!0);
  },
  // Unpauses the trap at the top of the stack.
  unpauseTrap: function(t) {
    var n = Te.getActiveTrap(t);
    n && !n._isManuallyPaused() && n._setPausedState(!1);
  }
}, la = function(t) {
  return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
}, ua = function(t) {
  return t?.key === "Escape" || t?.key === "Esc" || t?.keyCode === 27;
}, $t = function(t) {
  return t?.key === "Tab" || t?.keyCode === 9;
}, ca = function(t) {
  return $t(t) && !t.shiftKey;
}, fa = function(t) {
  return $t(t) && t.shiftKey;
}, wr = function(t) {
  return setTimeout(t, 0);
}, bt = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
    r[s - 1] = arguments[s];
  return typeof t == "function" ? t.apply(void 0, r) : t;
}, qt = function(t) {
  return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
}, da = [], va = function(t, n) {
  var r = n?.document || document, s = n?.trapStack || da, i = gr({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    isolateSubtrees: !1,
    isKeyForward: ca,
    isKeyBackward: fa
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
  }, a, l = function(c, h, y) {
    return c && c[h] !== void 0 ? c[h] : i[y || h];
  }, u = function(c, h) {
    var y = typeof h?.composedPath == "function" ? h.composedPath() : void 0;
    return o.containerGroups.findIndex(function(S) {
      var k = S.container, A = S.tabbableNodes;
      return k.contains(c) || y?.includes(k) || A.find(function($) {
        return $ === c;
      });
    });
  }, p = function(c) {
    var h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, y = h.hasFallback, S = y === void 0 ? !1 : y, k = h.params, A = k === void 0 ? [] : k, $ = i[c];
    if (typeof $ == "function" && ($ = $.apply(void 0, sa(A))), $ === !0 && ($ = void 0), !$) {
      if ($ === void 0 || $ === !1)
        return $;
      throw new Error("`".concat(c, "` was specified but was not a node, or did not return a node"));
    }
    var I = $;
    if (typeof $ == "string") {
      try {
        I = r.querySelector($);
      } catch (R) {
        throw new Error("`".concat(c, '` appears to be an invalid selector; error="').concat(R.message, '"'));
      }
      if (!I && !S)
        throw new Error("`".concat(c, "` as selector refers to no known node"));
    }
    return I;
  }, f = function() {
    var c = p("initialFocus", {
      hasFallback: !0
    });
    if (c === !1)
      return !1;
    if (c === void 0 || c && !mn(c, i.tabbableOptions))
      if (u(r.activeElement) >= 0)
        c = r.activeElement;
      else {
        var h = o.tabbableGroups[0], y = h && h.firstTabbableNode;
        c = y || p("fallbackFocus");
      }
    else c === null && (c = p("fallbackFocus"));
    if (!c)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return c;
  }, d = function() {
    if (o.containerGroups = o.containers.map(function(c) {
      var h = Jo(c, i.tabbableOptions), y = Qo(c, i.tabbableOptions), S = h.length > 0 ? h[0] : void 0, k = h.length > 0 ? h[h.length - 1] : void 0, A = y.find(function(R) {
        return ot(R);
      }), $ = y.slice().reverse().find(function(R) {
        return ot(R);
      }), I = !!h.find(function(R) {
        return We(R) > 0;
      });
      return {
        container: c,
        tabbableNodes: h,
        focusableNodes: y,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: I,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: S,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: k,
        // NOTE: DOM order is NOT NECESSARILY "document position" order, but figuring that out
        //  would require more than just https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        //  because that API doesn't work with Shadow DOM as well as it should (@see
        //  https://github.com/whatwg/dom/issues/320) and since this first/last is only needed, so far,
        //  to address an edge case related to positive tabindex support, this seems like a much easier,
        //  "close enough most of the time" alternative for positive tabindexes which should generally
        //  be avoided anyway...
        /** First tabbable node in container, __DOM__ order; `undefined` if none. */
        firstDomTabbableNode: A,
        /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
        lastDomTabbableNode: $,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(ee) {
          var q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, j = h.indexOf(ee);
          return j < 0 ? q ? y.slice(y.indexOf(ee) + 1).find(function(qe) {
            return ot(qe);
          }) : y.slice(0, y.indexOf(ee)).reverse().find(function(qe) {
            return ot(qe);
          }) : h[j + (q ? 1 : -1)];
        }
      };
    }), o.tabbableGroups = o.containerGroups.filter(function(c) {
      return c.tabbableNodes.length > 0;
    }), o.tabbableGroups.length <= 0 && !p("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (o.containerGroups.find(function(c) {
      return c.posTabIndexesFound;
    }) && o.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, v = function(c) {
    var h = c.activeElement;
    if (h)
      return h.shadowRoot && h.shadowRoot.activeElement !== null ? v(h.shadowRoot) : h;
  }, b = function(c) {
    if (c !== !1 && c !== v(document)) {
      if (!c || !c.focus) {
        b(f());
        return;
      }
      c.focus({
        preventScroll: !!i.preventScroll
      }), o.mostRecentlyFocusedNode = c, la(c) && c.select();
    }
  }, g = function(c) {
    var h = p("setReturnFocus", {
      params: [c]
    });
    return h || (h === !1 ? !1 : c);
  }, E = function(c) {
    var h = c.target, y = c.event, S = c.isBackward, k = S === void 0 ? !1 : S;
    h = h || qt(y), d();
    var A = null;
    if (o.tabbableGroups.length > 0) {
      var $ = u(h, y), I = $ >= 0 ? o.containerGroups[$] : void 0;
      if ($ < 0)
        k ? A = o.tabbableGroups[o.tabbableGroups.length - 1].lastTabbableNode : A = o.tabbableGroups[0].firstTabbableNode;
      else if (k) {
        var R = o.tabbableGroups.findIndex(function(dn) {
          var vn = dn.firstTabbableNode;
          return h === vn;
        });
        if (R < 0 && (I.container === h || mn(h, i.tabbableOptions) && !ot(h, i.tabbableOptions) && !I.nextTabbableNode(h, !1)) && (R = $), R >= 0) {
          var ee = R === 0 ? o.tabbableGroups.length - 1 : R - 1, q = o.tabbableGroups[ee];
          A = We(h) >= 0 ? q.lastTabbableNode : q.lastDomTabbableNode;
        } else $t(y) || (A = I.nextTabbableNode(h, !1));
      } else {
        var j = o.tabbableGroups.findIndex(function(dn) {
          var vn = dn.lastTabbableNode;
          return h === vn;
        });
        if (j < 0 && (I.container === h || mn(h, i.tabbableOptions) && !ot(h, i.tabbableOptions) && !I.nextTabbableNode(h)) && (j = $), j >= 0) {
          var qe = j === o.tabbableGroups.length - 1 ? 0 : j + 1, Re = o.tabbableGroups[qe];
          A = We(h) >= 0 ? Re.firstTabbableNode : Re.firstDomTabbableNode;
        } else $t(y) || (A = I.nextTabbableNode(h));
      }
    } else
      A = p("fallbackFocus");
    return A;
  }, T = function(c) {
    var h = qt(c);
    if (!(u(h, c) >= 0)) {
      if (bt(i.clickOutsideDeactivates, c)) {
        a.deactivate({
          // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
          //  which will result in the outside click setting focus to the node
          //  that was clicked (and if not focusable, to "nothing"); by setting
          //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
          //  on activation (or the configured `setReturnFocus` node), whether the
          //  outside click was on a focusable node or not
          returnFocus: i.returnFocusOnDeactivate
        });
        return;
      }
      bt(i.allowOutsideClick, c) || c.preventDefault();
    }
  }, D = function(c) {
    var h = qt(c), y = u(h, c) >= 0;
    if (y || h instanceof Document)
      y && (o.mostRecentlyFocusedNode = h);
    else {
      c.stopImmediatePropagation();
      var S, k = !0;
      if (o.mostRecentlyFocusedNode)
        if (We(o.mostRecentlyFocusedNode) > 0) {
          var A = u(o.mostRecentlyFocusedNode), $ = o.containerGroups[A].tabbableNodes;
          if ($.length > 0) {
            var I = $.findIndex(function(R) {
              return R === o.mostRecentlyFocusedNode;
            });
            I >= 0 && (i.isKeyForward(o.recentNavEvent) ? I + 1 < $.length && (S = $[I + 1], k = !1) : I - 1 >= 0 && (S = $[I - 1], k = !1));
          }
        } else
          o.containerGroups.some(function(R) {
            return R.tabbableNodes.some(function(ee) {
              return We(ee) > 0;
            });
          }) || (k = !1);
      else
        k = !1;
      k && (S = E({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: o.mostRecentlyFocusedNode,
        isBackward: i.isKeyBackward(o.recentNavEvent)
      })), b(S || o.mostRecentlyFocusedNode || f());
    }
    o.recentNavEvent = void 0;
  }, M = function(c) {
    var h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    o.recentNavEvent = c;
    var y = E({
      event: c,
      isBackward: h
    });
    y && ($t(c) && c.preventDefault(), b(y));
  }, Y = function(c) {
    (i.isKeyForward(c) || i.isKeyBackward(c)) && M(c, i.isKeyBackward(c));
  }, G = function(c) {
    ua(c) && bt(i.escapeDeactivates, c) !== !1 && (c.preventDefault(), a.deactivate());
  }, le = function(c) {
    var h = qt(c);
    u(h, c) >= 0 || bt(i.clickOutsideDeactivates, c) || bt(i.allowOutsideClick, c) || (c.preventDefault(), c.stopImmediatePropagation());
  }, X = function() {
    if (o.active)
      return Te.activateTrap(s, a), o.delayInitialFocusTimer = i.delayInitialFocus ? wr(function() {
        b(f());
      }) : b(f()), r.addEventListener("focusin", D, !0), r.addEventListener("mousedown", T, {
        capture: !0,
        passive: !1
      }), r.addEventListener("touchstart", T, {
        capture: !0,
        passive: !1
      }), r.addEventListener("click", le, {
        capture: !0,
        passive: !1
      }), r.addEventListener("keydown", Y, {
        capture: !0,
        passive: !1
      }), r.addEventListener("keydown", G), a;
  }, ne = function(c) {
    o.active && !o.paused && a._setSubtreeIsolation(!1), o.adjacentElements.clear(), o.alreadyInert.clear();
    var h = /* @__PURE__ */ new Set(), y = /* @__PURE__ */ new Set(), S = yr(c), k;
    try {
      for (S.s(); !(k = S.n()).done; ) {
        var A = k.value;
        h.add(A);
        for (var $ = typeof ShadowRoot < "u" && A.getRootNode() instanceof ShadowRoot, I = A; I; ) {
          h.add(I);
          var R = I.parentElement, ee = [];
          R ? ee = R.children : !R && $ && (ee = I.getRootNode().children, R = I.getRootNode().host, $ = typeof ShadowRoot < "u" && R.getRootNode() instanceof ShadowRoot);
          var q = yr(ee), j;
          try {
            for (q.s(); !(j = q.n()).done; ) {
              var qe = j.value;
              y.add(qe);
            }
          } catch (Re) {
            q.e(Re);
          } finally {
            q.f();
          }
          I = R;
        }
      }
    } catch (Re) {
      S.e(Re);
    } finally {
      S.f();
    }
    h.forEach(function(Re) {
      y.delete(Re);
    }), o.adjacentElements = y;
  }, pe = function() {
    if (o.active)
      return r.removeEventListener("focusin", D, !0), r.removeEventListener("mousedown", T, !0), r.removeEventListener("touchstart", T, !0), r.removeEventListener("click", le, !0), r.removeEventListener("keydown", Y, !0), r.removeEventListener("keydown", G), a;
  }, re = function(c) {
    var h = c.some(function(y) {
      var S = Array.from(y.removedNodes);
      return S.some(function(k) {
        return k === o.mostRecentlyFocusedNode;
      });
    });
    h && b(f());
  }, w = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(re) : void 0, x = function() {
    w && (w.disconnect(), o.active && !o.paused && o.containers.map(function(c) {
      w.observe(c, {
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
    activate: function(c) {
      if (o.active)
        return this;
      var h = l(c, "onActivate"), y = l(c, "onPostActivate"), S = l(c, "checkCanFocusTrap"), k = Te.getActiveTrap(s), A = !1;
      k && !k.paused && (k._setSubtreeIsolation(!1), A = !0);
      try {
        S || d(), o.active = !0, o.paused = !1, o.nodeFocusedBeforeActivation = v(r), h?.();
        var $ = function() {
          S && d(), X(), x(), i.isolateSubtrees && a._setSubtreeIsolation(!0), y?.();
        };
        if (S)
          return S(o.containers.concat()).then($, $), this;
        $();
      } catch (I) {
        throw k === Te.getActiveTrap(s) && A && k._setSubtreeIsolation(!0), I;
      }
      return this;
    },
    deactivate: function(c) {
      if (!o.active)
        return this;
      var h = gr({
        onDeactivate: i.onDeactivate,
        onPostDeactivate: i.onPostDeactivate,
        checkCanReturnFocus: i.checkCanReturnFocus
      }, c);
      clearTimeout(o.delayInitialFocusTimer), o.delayInitialFocusTimer = void 0, o.paused || a._setSubtreeIsolation(!1), o.alreadyInert.clear(), pe(), o.active = !1, o.paused = !1, x(), Te.deactivateTrap(s, a);
      var y = l(h, "onDeactivate"), S = l(h, "onPostDeactivate"), k = l(h, "checkCanReturnFocus"), A = l(h, "returnFocus", "returnFocusOnDeactivate");
      y?.();
      var $ = function() {
        wr(function() {
          A && b(g(o.nodeFocusedBeforeActivation)), S?.();
        });
      };
      return A && k ? (k(g(o.nodeFocusedBeforeActivation)).then($, $), this) : ($(), this);
    },
    pause: function(c) {
      return o.active ? (o.manuallyPaused = !0, this._setPausedState(!0, c)) : this;
    },
    unpause: function(c) {
      return o.active ? (o.manuallyPaused = !1, s[s.length - 1] !== this ? this : this._setPausedState(!1, c)) : this;
    },
    updateContainerElements: function(c) {
      var h = [].concat(c).filter(Boolean);
      return o.containers = h.map(function(y) {
        return typeof y == "string" ? r.querySelector(y) : y;
      }), i.isolateSubtrees && ne(o.containers), o.active && (d(), i.isolateSubtrees && !o.paused && a._setSubtreeIsolation(!0)), x(), this;
    }
  }, Object.defineProperties(a, {
    _isManuallyPaused: {
      value: function() {
        return o.manuallyPaused;
      }
    },
    _setPausedState: {
      value: function(c, h) {
        if (o.paused === c)
          return this;
        if (o.paused = c, c) {
          var y = l(h, "onPause"), S = l(h, "onPostPause");
          y?.(), pe(), x(), a._setSubtreeIsolation(!1), S?.();
        } else {
          var k = l(h, "onUnpause"), A = l(h, "onPostUnpause");
          k?.(), a._setSubtreeIsolation(!0), d(), X(), x(), A?.();
        }
        return this;
      }
    },
    _setSubtreeIsolation: {
      value: function(c) {
        i.isolateSubtrees && o.adjacentElements.forEach(function(h) {
          if (c) {
            var y = h.inert || h.hasAttribute("inert");
            y && o.alreadyInert.add(h), h.inert = !0;
          } else
            o.alreadyInert.has(h) || (h.inert = !1);
        });
      }
    }
  }), a.updateContainerElements(t), a;
};
const ha = ((e, t = {}) => {
  let n = F;
  const r = (s) => {
    n();
    const i = va(e, {
      returnFocusOnDeactivate: !1,
      allowOutsideClick: !0,
      escapeDeactivates: !1,
      clickOutsideDeactivates: !1,
      ...s
    });
    n = i.deactivate, i.activate();
  };
  return r(t), { destroy: n, update: r };
});
function He(e, t) {
  throw new Error("[MELTUI ERROR]: The `use:melt` action cannot be used without MeltUI's Preprocessor. See: https://www.melt-ui.com/docs/preprocessor");
}
const pa = ((e, t) => {
  let n = F;
  function r(s) {
    n();
    const { onClose: i, shouldCloseOnInteractOutside: o, closeOnInteractOutside: a } = s;
    function l() {
      i?.();
    }
    function u(f) {
      const d = f.target;
      Qn(d) && f.stopImmediatePropagation();
    }
    function p(f) {
      o?.(f) && (f.stopImmediatePropagation(), l());
    }
    n = _a(e, {
      onInteractOutsideStart: u,
      onInteractOutside: a ? p : void 0,
      enabled: a
    }).destroy;
  }
  return r(t), {
    update: r,
    destroy() {
      n();
    }
  };
}), ba = ((e, t = "body") => {
  let n;
  if (!Oe(t) && typeof t != "string")
    return {
      destroy: F
    };
  async function r(i = "body") {
    if (t = i, typeof t == "string") {
      if (n = document.querySelector(t), n === null && (await vi(), n = document.querySelector(t)), n === null)
        throw new Error(`No element found matching css selector: "${t}"`);
    } else if (t instanceof HTMLElement)
      n = t;
    else
      throw new TypeError(`Unknown portal target type: ${t === null ? "null" : typeof t}. Allowed types: string (CSS selector) or HTMLElement.`);
    e.dataset.portal = "", n.appendChild(e), e.hidden = !1;
  }
  function s() {
    e.remove();
  }
  return r(t), {
    update: r,
    destroy: s
  };
}), Mn = /* @__PURE__ */ new Set(), _a = ((e, t = {}) => {
  let n = F, r = F, s = F, i = F;
  Mn.add(e);
  const o = Fo(e);
  let a = !1, l = !1;
  const u = {
    pointerdown: !1,
    pointerup: !1,
    mousedown: !1,
    mouseup: !1,
    touchstart: !1,
    touchend: !1,
    click: !1
  }, p = () => {
    for (const T in u)
      u[T] = !1;
  }, f = () => {
    for (const T of Object.values(u))
      if (T)
        return !0;
    return !1;
  }, d = (T, D) => Fn(o, T, (M) => {
    u[T] = !0, D?.(M);
  }, !0), v = (T, D) => Fn(o, T, (M) => {
    u[T] = !1;
    const Y = {};
    Oe(M.target) && fo(M.target.shadowRoot) && (Y.shadowTarget = M.composedPath()[0]), D?.(M, Y);
  });
  function b(T) {
    n(), r(), s(), i(), p();
    const { onInteractOutside: D, onInteractOutsideStart: M, enabled: Y } = { enabled: !0, ...T };
    if (!Y)
      return;
    let G = !1;
    const le = _n((re, w) => {
      if (!G || f())
        return;
      D && $r(re, e) && M?.(re);
      const x = w?.shadowTarget ? w.shadowTarget : re.target;
      Qn(x) && xi(e, x) && (l = !0), a = !0;
    }, 10);
    r = le.destroy;
    const X = _n((re) => {
      G && !f() && g(re) && D?.(re), E();
    }, 10);
    s = X.destroy;
    const ne = _n(p, 20);
    i = ne.destroy;
    const pe = () => {
      G = ya(e);
    };
    n = en(
      /** Capture Events For Interaction Start */
      d("pointerdown", pe),
      d("mousedown", pe),
      d("touchstart", pe),
      /**
       * Intercepted events are reset only at the end of an interaction, allowing
       * interception at the start while still capturing the entire interaction.
       * Additionally, intercepted events are reset in the capture phase with `resetInterceptedEventsDebounced`,
       * accommodating events not invoked in the bubbling phase due to user interception.
       */
      d("pointerup", ne),
      d("mouseup", ne),
      d("touchend", ne),
      d("click", ne),
      /** Bubbling Events For Interaction Start */
      v("pointerdown", le),
      v("mousedown", le),
      v("touchstart", le),
      /**
       * To effectively detect an end of an interaction, we must monitor all relevant events,
       * not just `click` events. This is because on touch devices, actions like pressing,
       * moving the finger, and lifting it off the screen may not trigger a `click` event,
       * but should still invoke `onPointerUp` to properly handle the interaction.
       */
      v("pointerup", X),
      v("mouseup", X),
      v("touchend", X),
      v("click", X)
    );
  }
  function g(T) {
    return !!(a && !l && $r(T, e));
  }
  function E() {
    a = !1, l = !1;
  }
  return b(t), {
    update: b,
    destroy() {
      n(), r(), s(), i(), Mn.delete(e);
    }
  };
});
function $r(e, t) {
  if ("button" in e && e.button > 0)
    return !1;
  const n = e.target;
  if (!Qn(n))
    return !1;
  const r = n.ownerDocument;
  return !r || !r.documentElement.contains(n) ? !1 : t && !xi(t, n);
}
function ya(e) {
  return Array.from(Mn).at(-1) === e;
}
const ma = {
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
  ...Ei(ma, "isDateDisabled", "isDateUnavailable", "value", "locale", "disabled", "readonly", "minValue", "maxValue", "weekdayFormat")
});
const { name: ze } = co("dialog"), ga = {
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
}, wa = ["content", "title", "description"];
function $a(e) {
  const t = { ...ga, ...e }, n = pr(Ei(t, "ids")), { preventScroll: r, escapeBehavior: s, closeOnOutsideClick: i, role: o, portal: a, forceVisible: l, openFocus: u, closeFocus: p, onOutsideClick: f } = n, d = pt.writable(null), v = pr({
    ...Eo(wa),
    ...t.ids
  }), b = t.open ?? fn(t.defaultOpen), g = yo(b, t?.onOpenChange), E = Jn([g, l], ([w, x]) => w || x);
  let T = F;
  function D(w) {
    const x = w.currentTarget, m = w.currentTarget;
    !Oe(x) || !Oe(m) || (g.set(!0), d.set(m));
  }
  function M() {
    g.set(!1);
  }
  const Y = Fe(ze("trigger"), {
    stores: [g],
    returned: ([w]) => ({
      "aria-haspopup": "dialog",
      "aria-expanded": w,
      type: "button"
    }),
    action: (w) => ({
      destroy: en(Kt(w, "click", (m) => {
        D(m);
      }), Kt(w, "keydown", (m) => {
        m.key !== _t.ENTER && m.key !== _t.SPACE || (m.preventDefault(), D(m));
      }))
    })
  }), G = Fe(ze("overlay"), {
    stores: [E, g],
    returned: ([w, x]) => ({
      hidden: w ? void 0 : !0,
      tabindex: -1,
      style: w ? void 0 : Pn({ display: "none" }),
      "aria-hidden": !0,
      "data-state": x ? "open" : "closed"
    })
  }), le = Fe(ze("content"), {
    stores: [E, v.content, v.description, v.title, g],
    returned: ([w, x, m, c, h]) => ({
      id: x,
      role: o.get(),
      "aria-describedby": m,
      "aria-labelledby": c,
      "aria-modal": w ? "true" : void 0,
      "data-state": h ? "open" : "closed",
      tabindex: -1,
      hidden: w ? void 0 : !0,
      style: w ? void 0 : Pn({ display: "none" })
    }),
    action: (w) => {
      let x = F, m = F, c = F;
      const h = yt([E, i], ([y, S]) => {
        m(), x(), c(), y && (m = pa(w, {
          closeOnInteractOutside: S,
          onClose: M,
          shouldCloseOnInteractOutside(k) {
            return f.get()?.(k), !k.defaultPrevented;
          }
        }).destroy, x = Do(w, {
          handler: M,
          behaviorType: s
        }).destroy, c = ha(w, { fallbackFocus: w }).destroy);
      });
      return {
        destroy: () => {
          T(), h(), m(), x(), c();
        }
      };
    }
  }), X = Fe(ze("portalled"), {
    stores: a,
    returned: (w) => ({
      "data-portal": uo(w)
    }),
    action: (w) => {
      const x = yt([a], ([m]) => {
        if (m === null)
          return F;
        const c = Po(w, m);
        return c === null ? F : ba(w, c).destroy;
      });
      return {
        destroy() {
          x();
        }
      };
    }
  }), ne = Fe(ze("title"), {
    stores: [v.title],
    returned: ([w]) => ({
      id: w
    })
  }), pe = Fe(ze("description"), {
    stores: [v.description],
    returned: ([w]) => ({
      id: w
    })
  }), re = Fe(ze("close"), {
    returned: () => ({
      type: "button"
    }),
    action: (w) => ({
      destroy: en(Kt(w, "click", () => {
        M();
      }), Kt(w, "keydown", (m) => {
        m.key !== _t.SPACE && m.key !== _t.ENTER || (m.preventDefault(), M());
      }))
    })
  });
  return yt([g, r], ([w, x]) => {
    if (vr) {
      if (x && w && (T = Io()), w) {
        const m = document.getElementById(v.content.get());
        br({ prop: u.get(), defaultEl: m });
      }
      return () => {
        l.get() || T();
      };
    }
  }), yt(g, (w) => {
    !vr || w || br({
      prop: p.get(),
      defaultEl: d.get()
    });
  }, { skipFirstRun: !0 }), {
    ids: v,
    elements: {
      content: le,
      trigger: Y,
      title: ne,
      description: pe,
      overlay: G,
      close: re,
      portalled: X
    },
    states: {
      open: g
    },
    options: n
  };
}
var Ea = /* @__PURE__ */ Xn('<div><div class="overlay svelte-ho3w24"></div> <div class="modal-content svelte-ho3w24"><div class="modal-header svelte-ho3w24"><h3 class="modal-title svelte-ho3w24"> </h3></div> <div class="modal-body svelte-ho3w24"><p class="modal-description svelte-ho3w24"> </p> <div class="feature-list svelte-ho3w24"><p class="svelte-ho3w24">This modal demonstrates Svelte + Melt UI integration:</p> <ul class="svelte-ho3w24"><li class="svelte-ho3w24">✅ Melt UI headless components</li> <li class="svelte-ho3w24">✅ Svelte 5 runes ($bindable, $state)</li> <li class="svelte-ho3w24">✅ Automatic accessibility (ARIA)</li> <li class="svelte-ho3w24">✅ Automatic focus trap</li> <li class="svelte-ho3w24">✅ ESC key to close</li> <li class="svelte-ho3w24">✅ Click outside to close</li> <li class="svelte-ho3w24">✅ Smooth animations</li></ul></div></div> <div class="modal-actions svelte-ho3w24"><button type="button" class="close-button svelte-ho3w24">Close</button></div></div></div>'), Sa = /* @__PURE__ */ Xn('<div class="container svelte-ho3w24"><button type="button" class="open-button svelte-ho3w24">Open Svelte Modal</button> <!></div>');
const Ta = {
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
function ka(e, t) {
  Un(t, !0), mi(e, Ta);
  const n = () => Pe(b, "$trigger", p), r = () => Pe(G, "$open", p), s = () => Pe(Y, "$portalled", p), i = () => Pe(g, "$overlay", p), o = () => Pe(E, "$content", p), a = () => Pe(T, "$titleEl", p), l = () => Pe(D, "$descriptionEl", p), u = () => Pe(M, "$close", p), [p, f] = to();
  let d = Rn(t, "title", 15, "Svelte Modal"), v = Rn(t, "description", 15, "This is a modal dialog built with Svelte and Melt UI.");
  const {
    elements: {
      trigger: b,
      overlay: g,
      content: E,
      title: T,
      description: D,
      close: M,
      portalled: Y
    },
    states: { open: G }
  } = $a({ forceVisible: !0 });
  var le = {
    get title() {
      return d();
    },
    set title(x = "Svelte Modal") {
      d(x), St();
    },
    get description() {
      return v();
    },
    set description(x = "This is a modal dialog built with Svelte and Melt UI.") {
      v(x), St();
    }
  }, X = Sa(), ne = ce(X);
  Ve(ne, (x, m) => He?.(), n);
  var pe = Xe(ne, 2);
  {
    var re = (x) => {
      var m = Ea(), c = ce(m);
      Ve(c, (q, j) => He?.(), i);
      var h = Xe(c, 2), y = ce(h), S = ce(y), k = ce(S, !0);
      ue(S), Ve(S, (q, j) => He?.(), a), ue(y);
      var A = Xe(y, 2), $ = ce(A), I = ce($, !0);
      ue($), Ve($, (q, j) => He?.(), l), Pr(2), ue(A);
      var R = Xe(A, 2), ee = ce(R);
      Ve(ee, (q, j) => He?.(), u), ue(R), ue(h), Ve(h, (q, j) => He?.(), o), ue(m), Ve(m, (q, j) => He?.(), s), ni(() => {
        On(k, d()), On(I, v());
      }), Qt(x, m);
    };
    eo(pe, (x) => {
      r() && x(re);
    });
  }
  ue(X), Qt(e, X);
  var w = Vn(le);
  return f(), w;
}
customElements.define("svelte-modal", $i(ka, { title: {}, description: {} }, [], [], !0));
