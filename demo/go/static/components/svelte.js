typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
const ms = 1, gs = 2, ws = 16, Es = 1, $s = 4, ks = 8, Ss = 16, Ts = 2, ri = "[", kn = "[!", ur = "]", $t = {}, X = /* @__PURE__ */ Symbol(), As = /* @__PURE__ */ Symbol("filename"), xs = "http://www.w3.org/1999/xhtml", Os = "@attach", Tr = globalThis.process?.env?.NODE_ENV, g = Tr && !Tr.toLowerCase().startsWith("prod");
var cr = Array.isArray, Ns = Array.prototype.indexOf, Sn = Array.from, cn = Object.keys, we = Object.defineProperty, Ue = Object.getOwnPropertyDescriptor, Is = Object.getOwnPropertyDescriptors, Ps = Object.prototype, Cs = Array.prototype, ii = Object.getPrototypeOf, Ar = Object.isExtensible;
const Ve = () => {
};
function si(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function oi() {
  var e, t, n = new Promise((r, s) => {
    e = r, t = s;
  });
  return { promise: n, resolve: e, reject: t };
}
const J = 2, fr = 4, dr = 8, ai = 1 << 24, Fe = 16, De = 32, Xe = 64, Tn = 128, Ee = 512, ee = 1024, le = 2048, Ae = 4096, de = 8192, Pe = 16384, An = 32768, kt = 65536, fn = 1 << 17, li = 1 << 18, ct = 1 << 19, Rs = 1 << 20, ze = 1 << 25, Ge = 32768, Kn = 1 << 21, xn = 1 << 22, Ke = 1 << 23, He = /* @__PURE__ */ Symbol("$state"), ui = /* @__PURE__ */ Symbol("legacy props"), Fs = /* @__PURE__ */ Symbol(""), ci = /* @__PURE__ */ Symbol("proxy path"), gt = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), fi = 3, It = 8;
function di(e) {
  if (g) {
    const t = new Error(`lifecycle_outside_component
\`${e}(...)\` can only be used during component initialisation
https://svelte.dev/e/lifecycle_outside_component`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Ds() {
  if (g) {
    const e = new Error("async_derived_orphan\nCannot create a `$derived(...)` with an `await` expression outside of an effect tree\nhttps://svelte.dev/e/async_derived_orphan");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Ls() {
  if (g) {
    const e = new Error(`derived_references_self
A derived value cannot reference itself recursively
https://svelte.dev/e/derived_references_self`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/derived_references_self");
}
function Ms(e) {
  if (g) {
    const t = new Error(`effect_in_teardown
\`${e}\` cannot be used inside an effect cleanup function
https://svelte.dev/e/effect_in_teardown`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function js() {
  if (g) {
    const e = new Error("effect_in_unowned_derived\nEffect cannot be created inside a `$derived` value that was not itself created inside an effect\nhttps://svelte.dev/e/effect_in_unowned_derived");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function qs(e) {
  if (g) {
    const t = new Error(`effect_orphan
\`${e}\` can only be used inside an effect (e.g. during component initialisation)
https://svelte.dev/e/effect_orphan`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/effect_orphan");
}
function Bs() {
  if (g) {
    const e = new Error(`effect_update_depth_exceeded
Maximum update depth exceeded. This typically indicates that an effect reads and writes the same piece of state
https://svelte.dev/e/effect_update_depth_exceeded`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function zs() {
  if (g) {
    const e = new Error(`hydration_failed
Failed to hydrate the application
https://svelte.dev/e/hydration_failed`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/hydration_failed");
}
function Us(e) {
  if (g) {
    const t = new Error(`props_invalid_value
Cannot do \`bind:${e}={undefined}\` when \`${e}\` has a fallback value
https://svelte.dev/e/props_invalid_value`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Vs(e) {
  if (g) {
    const t = new Error(`rune_outside_svelte
The \`${e}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files
https://svelte.dev/e/rune_outside_svelte`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/rune_outside_svelte");
}
function Ks() {
  if (g) {
    const e = new Error("state_descriptors_fixed\nProperty descriptors defined on `$state` objects must contain `value` and always be `enumerable`, `configurable` and `writable`.\nhttps://svelte.dev/e/state_descriptors_fixed");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Hs() {
  if (g) {
    const e = new Error("state_prototype_fixed\nCannot set prototype of `$state` object\nhttps://svelte.dev/e/state_prototype_fixed");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ys() {
  if (g) {
    const e = new Error("state_unsafe_mutation\nUpdating state inside `$derived(...)`, `$inspect(...)` or a template expression is forbidden. If the value should not be reactive, declare it without `$state`\nhttps://svelte.dev/e/state_unsafe_mutation");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Ws() {
  if (g) {
    const e = new Error("svelte_boundary_reset_onerror\nA `<svelte:boundary>` `reset` function cannot be called while an error is still being handled\nhttps://svelte.dev/e/svelte_boundary_reset_onerror");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
var ft = "font-weight: bold", dt = "font-weight: normal";
function Gs(e, t, n) {
  g ? console.warn(`%c[svelte] hydration_attribute_changed
%cThe \`${e}\` attribute on \`${t}\` changed its value between server and client renders. The client value, \`${n}\`, will be ignored in favour of the server value
https://svelte.dev/e/hydration_attribute_changed`, ft, dt) : console.warn("https://svelte.dev/e/hydration_attribute_changed");
}
function On(e) {
  g ? console.warn(
    `%c[svelte] hydration_mismatch
%cHydration failed because the initial UI does not match what was rendered on the server
https://svelte.dev/e/hydration_mismatch`,
    ft,
    dt
  ) : console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Xs() {
  g ? console.warn(`%c[svelte] lifecycle_double_unmount
%cTried to unmount a component that was not mounted
https://svelte.dev/e/lifecycle_double_unmount`, ft, dt) : console.warn("https://svelte.dev/e/lifecycle_double_unmount");
}
function Zs() {
  g ? console.warn("%c[svelte] select_multiple_invalid_value\n%cThe `value` property of a `<select multiple>` element should be an array, but it received a non-array value. The selection will be kept as is.\nhttps://svelte.dev/e/select_multiple_invalid_value", ft, dt) : console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Mn(e) {
  g ? console.warn(`%c[svelte] state_proxy_equality_mismatch
%cReactive \`$state(...)\` proxies and the values they proxy have different identities. Because of this, comparisons with \`${e}\` will produce unexpected results
https://svelte.dev/e/state_proxy_equality_mismatch`, ft, dt) : console.warn("https://svelte.dev/e/state_proxy_equality_mismatch");
}
function Js() {
  g ? console.warn(`%c[svelte] state_proxy_unmount
%cTried to unmount a state proxy, rather than a component
https://svelte.dev/e/state_proxy_unmount`, ft, dt) : console.warn("https://svelte.dev/e/state_proxy_unmount");
}
function Qs() {
  g ? console.warn("%c[svelte] svelte_boundary_reset_noop\n%cA `<svelte:boundary>` `reset` function only resets the boundary the first time it is called\nhttps://svelte.dev/e/svelte_boundary_reset_noop", ft, dt) : console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let M = !1;
function ye(e) {
  M = e;
}
let z;
function ve(e) {
  if (e === null)
    throw On(), $t;
  return z = e;
}
function Nn() {
  return ve(/* @__PURE__ */ Le(z));
}
function Z(e) {
  if (M) {
    if (/* @__PURE__ */ Le(z) !== null)
      throw On(), $t;
    z = e;
  }
}
function vi(e = 1) {
  if (M) {
    for (var t = e, n = z; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Le(n);
    z = n;
  }
}
function dn(e = !0) {
  for (var t = 0, n = z; ; ) {
    if (n.nodeType === It) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === ur) {
        if (t === 0) return n;
        t -= 1;
      } else (r === ri || r === kn) && (t += 1);
    }
    var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Le(n)
    );
    e && n.remove(), n = s;
  }
}
function hi(e) {
  if (!e || e.nodeType !== It)
    throw On(), $t;
  return (
    /** @type {Comment} */
    e.data
  );
}
function pi(e) {
  return e === this.v;
}
function bi(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function _i(e) {
  return !bi(e, this.v);
}
let eo = !1;
function ke(e, t) {
  return e.label = t, yi(e.v, t), e;
}
function yi(e, t) {
  return e?.[ci]?.(t), e;
}
function to(e) {
  const t = new Error(), n = no();
  return n.length === 0 ? null : (n.unshift(`
`), we(t, "stack", {
    value: n.join(`
`)
  }), we(t, "name", {
    value: e
  }), /** @type {Error & { stack: string }} */
  t);
}
function no() {
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
let te = null;
function St(e) {
  te = e;
}
let Tt = null;
function vn(e) {
  Tt = e;
}
let Gt = null;
function xr(e) {
  Gt = e;
}
function Xt(e, t = !1, n) {
  te = {
    p: te,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  }, g && (te.function = n, Gt = n);
}
function Zt(e) {
  var t = (
    /** @type {ComponentContext} */
    te
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      Fi(r);
  }
  return e !== void 0 && (t.x = e), t.i = !0, te = t.p, g && (Gt = te?.function ?? null), e ?? /** @type {T} */
  {};
}
function mi() {
  return !0;
}
let rt = [];
function gi() {
  var e = rt;
  rt = [], si(e);
}
function vt(e) {
  if (rt.length === 0 && !jt) {
    var t = rt;
    queueMicrotask(() => {
      t === rt && gi();
    });
  }
  rt.push(e);
}
function ro() {
  for (; rt.length > 0; )
    gi();
}
const Hn = /* @__PURE__ */ new WeakMap();
function wi(e) {
  var t = D;
  if (t === null)
    return F.f |= Ke, e;
  if (g && e instanceof Error && !Hn.has(e) && Hn.set(e, io(e, t)), (t.f & An) === 0) {
    if ((t.f & Tn) === 0)
      throw g && !t.parent && e instanceof Error && Ei(e), e;
    t.b.error(e);
  } else
    At(e, t);
}
function At(e, t) {
  for (; t !== null; ) {
    if ((t.f & Tn) !== 0)
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    t = t.parent;
  }
  throw g && e instanceof Error && Ei(e), e;
}
function io(e, t) {
  const n = Ue(e, "message");
  if (!(n && !n.configurable)) {
    for (var r = _r ? "  " : "	", s = `
${r}in ${t.fn?.name || "<unknown>"}`, i = t.ctx; i !== null; )
      s += `
${r}in ${i.function?.[As].split("/").pop()}`, i = i.p;
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
function Ei(e) {
  const t = Hn.get(e);
  t && (we(e, "message", {
    value: t.message
  }), we(e, "stack", {
    value: t.stack
  }));
}
const en = /* @__PURE__ */ new Set();
let U = null, be = null, pe = [], In = null, Yn = !1, jt = !1;
class me {
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
    pe = [], this.apply();
    var n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: []
    };
    for (const r of t)
      this.#o(r, n);
    this.is_fork || this.#c(), this.is_deferred() ? (this.#a(n.effects), this.#a(n.render_effects)) : (U = null, Or(n.render_effects), Or(n.effects), this.#l?.resolve()), be = null;
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {EffectTarget} target
   */
  #o(t, n) {
    t.f ^= ee;
    for (var r = t.first; r !== null; ) {
      var s = r.f, i = (s & (De | Xe)) !== 0, o = i && (s & ee) !== 0, a = o || (s & de) !== 0 || this.skipped_effects.has(r);
      if ((r.f & Tn) !== 0 && r.b?.is_pending() && (n = {
        parent: n,
        effect: r,
        effects: [],
        render_effects: []
      }), !a && r.fn !== null) {
        i ? r.f ^= ee : (s & fr) !== 0 ? n.effects.push(r) : Qt(r) && ((r.f & Fe) !== 0 && this.#s.add(r), Yt(r));
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
      (n.f & le) !== 0 ? this.#s.add(n) : (n.f & Ae) !== 0 && this.#i.add(n), this.#u(n.deps), ne(n, ee);
  }
  /**
   * @param {Value[] | null} deps
   */
  #u(t) {
    if (t !== null)
      for (const n of t)
        (n.f & J) === 0 || (n.f & Ge) === 0 || (n.f ^= Ge, this.#u(
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
    this.previous.has(t) || this.previous.set(t, n), (t.f & Ke) === 0 && (this.current.set(t, t.v), be?.set(t, t.v));
  }
  activate() {
    U = this, this.apply();
  }
  deactivate() {
    U === this && (U = null, be = null);
  }
  flush() {
    if (this.activate(), pe.length > 0) {
      if ($i(), U !== null && U !== this)
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
    if (en.size > 1) {
      this.previous.clear();
      var t = be, n = !0, r = {
        parent: null,
        effect: null,
        effects: [],
        render_effects: []
      };
      for (const i of en) {
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
          var s = pe;
          pe = [];
          const l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
          for (const d of o)
            ki(d, a, l, u);
          if (pe.length > 0) {
            U = i, i.apply();
            for (const d of pe)
              i.#o(d, r);
            i.deactivate();
          }
          pe = s;
        }
      }
      U = null, be = t;
    }
    this.committed = !0, en.delete(this);
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
      this.#i.delete(t), ne(t, le), at(t);
    for (const t of this.#i)
      ne(t, Ae), at(t);
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
    return (this.#l ??= oi()).promise;
  }
  static ensure() {
    if (U === null) {
      const t = U = new me();
      en.add(U), jt || me.enqueue(() => {
        U === t && t.flush();
      });
    }
    return U;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    vt(t);
  }
  apply() {
  }
}
function ie(e) {
  var t = jt;
  jt = !0;
  try {
    for (var n; ; ) {
      if (ro(), pe.length === 0 && (U?.flush(), pe.length === 0))
        return In = null, /** @type {T} */
        n;
      $i();
    }
  } finally {
    jt = t;
  }
}
function $i() {
  var e = st;
  Yn = !0;
  var t = g ? /* @__PURE__ */ new Set() : null;
  try {
    var n = 0;
    for (bn(!0); pe.length > 0; ) {
      var r = me.ensure();
      if (n++ > 1e3) {
        if (g) {
          var s = /* @__PURE__ */ new Map();
          for (const o of r.current.keys())
            for (const [a, l] of o.updated ?? []) {
              var i = s.get(a);
              i || (i = { error: l.error, count: 0 }, s.set(a, i)), i.count += l.count;
            }
          for (const o of s.values())
            o.error && console.error(o.error);
        }
        so();
      }
      if (r.process(pe), Ye.clear(), g)
        for (const o of r.current.keys())
          t.add(o);
    }
  } finally {
    if (Yn = !1, bn(e), In = null, g)
      for (
        const o of
        /** @type {Set<Source>} */
        t
      )
        o.updated = null;
  }
}
function so() {
  try {
    Bs();
  } catch (e) {
    g && we(e, "stack", { value: "" }), At(e, In);
  }
}
let xe = null;
function Or(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (Pe | de)) === 0 && Qt(r) && (xe = /* @__PURE__ */ new Set(), Yt(r), r.deps === null && r.first === null && r.nodes === null && (r.teardown === null && r.ac === null ? ji(r) : r.fn = null), xe?.size > 0)) {
        Ye.clear();
        for (const s of xe) {
          if ((s.f & (Pe | de)) !== 0) continue;
          const i = [s];
          let o = s.parent;
          for (; o !== null; )
            xe.has(o) && (xe.delete(o), i.push(o)), o = o.parent;
          for (let a = i.length - 1; a >= 0; a--) {
            const l = i[a];
            (l.f & (Pe | de)) === 0 && Yt(l);
          }
        }
        xe.clear();
      }
    }
    xe = null;
  }
}
function ki(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const s of e.reactions) {
      const i = s.f;
      (i & J) !== 0 ? ki(
        /** @type {Derived} */
        s,
        t,
        n,
        r
      ) : (i & (xn | Fe)) !== 0 && (i & le) === 0 && Si(s, t, r) && (ne(s, le), at(
        /** @type {Effect} */
        s
      ));
    }
}
function Si(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const s of e.deps) {
      if (t.includes(s))
        return !0;
      if ((s.f & J) !== 0 && Si(
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
function at(e) {
  for (var t = In = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (Yn && t === D && (n & Fe) !== 0 && (n & li) === 0)
      return;
    if ((n & (Xe | De)) !== 0) {
      if ((n & ee) === 0) return;
      t.f ^= ee;
    }
  }
  pe.push(t);
}
function oo(e) {
  let t = 0, n = lt(0), r;
  return g && ke(n, "createSubscriber version"), () => {
    Vt() && (q(n), gr(() => (t === 0 && (r = pt(() => e(() => qt(n)))), t += 1, () => {
      vt(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, qt(n));
      });
    })));
  };
}
var ao = kt | ct | Tn;
function lo(e, t, n) {
  new uo(e, t, n);
}
class uo {
  /** @type {Boundary | null} */
  parent;
  #t = !1;
  /** @type {TemplateNode} */
  #e;
  /** @type {TemplateNode | null} */
  #n = M ? z : null;
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
  #m = oo(() => (this.#d = lt(this.#f), g && ke(this.#d, "$effect.pending()"), () => {
    this.#d = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, r) {
    this.#e = t, this.#r = n, this.#l = r, this.parent = /** @type {Effect} */
    D.b, this.#t = !!this.#r.pending, this.#s = wr(() => {
      if (D.b = this, M) {
        const i = this.#n;
        Nn(), /** @type {Comment} */
        i.nodeType === It && /** @type {Comment} */
        i.data === kn ? this.#w() : this.#g();
      } else {
        var s = this.#_();
        try {
          this.#i = oe(() => r(s));
        } catch (i) {
          this.error(i);
        }
        this.#v > 0 ? this.#b() : this.#t = !1;
      }
      return () => {
        this.#c?.remove();
      };
    }, ao), M && (this.#e = z);
  }
  #g() {
    try {
      this.#i = oe(() => this.#l(this.#e));
    } catch (t) {
      this.error(t);
    }
    this.#t = !1;
  }
  #w() {
    const t = this.#r.pending;
    t && (this.#o = oe(() => t(this.#e)), me.enqueue(() => {
      var n = this.#_();
      this.#i = this.#p(() => (me.ensure(), oe(() => this.#l(n)))), this.#v > 0 ? this.#b() : (it(
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
    return this.#t && (this.#c = Te(), this.#e.before(this.#c), t = this.#c), t;
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
    var n = D, r = F, s = te;
    ge(this.#s), ae(this.#s), St(this.#s.ctx);
    try {
      return t();
    } catch (i) {
      return wi(i), null;
    } finally {
      ge(n), ae(r), St(s);
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
    ), zi(this.#i, this.#u)), this.#o === null && (this.#o = oe(() => t(this.#e)));
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
    this.#v += t, this.#v === 0 && (this.#t = !1, this.#o && it(this.#o, () => {
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
    this.#y(t), this.#f += t, this.#d && Ot(this.#d, this.#f);
  }
  get_effect_pending() {
    return this.#m(), q(
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
    this.#i && (G(this.#i), this.#i = null), this.#o && (G(this.#o), this.#o = null), this.#a && (G(this.#a), this.#a = null), M && (ve(
      /** @type {TemplateNode} */
      this.#n
    ), vi(), ve(dn()));
    var s = !1, i = !1;
    const o = () => {
      if (s) {
        Qs();
        return;
      }
      s = !0, i && Ws(), me.ensure(), this.#f = 0, this.#a !== null && it(this.#a, () => {
        this.#a = null;
      }), this.#t = this.has_pending_snippet(), this.#i = this.#p(() => (this.#h = !1, oe(() => this.#l(this.#e)))), this.#v > 0 ? this.#b() : this.#t = !1;
    };
    var a = F;
    try {
      ae(null), i = !0, n?.(t, o), i = !1;
    } catch (l) {
      At(l, this.#s && this.#s.parent);
    } finally {
      ae(a);
    }
    r && vt(() => {
      this.#a = this.#p(() => {
        me.ensure(), this.#h = !0;
        try {
          return oe(() => {
            r(
              this.#e,
              () => t,
              () => o
            );
          });
        } catch (l) {
          return At(
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
function Ti(e, t, n, r) {
  const s = vr;
  if (n.length === 0 && e.length === 0) {
    r(t.map(s));
    return;
  }
  var i = U, o = (
    /** @type {Effect} */
    D
  ), a = co();
  function l() {
    Promise.all(n.map((u) => /* @__PURE__ */ vo(u))).then((u) => {
      a();
      try {
        r([...t.map(s), ...u]);
      } catch (d) {
        (o.f & Pe) === 0 && At(d, o);
      }
      i?.deactivate(), hn();
    }).catch((u) => {
      At(u, o);
    });
  }
  e.length > 0 ? Promise.all(e).then(() => {
    a();
    try {
      return l();
    } finally {
      i?.deactivate(), hn();
    }
  }) : l();
}
function co() {
  var e = D, t = F, n = te, r = U;
  if (g)
    var s = Tt;
  return function(o = !0) {
    ge(e), ae(t), St(n), o && r?.activate(), g && vn(s);
  };
}
function hn() {
  ge(null), ae(null), St(null), g && vn(null);
}
const fo = /* @__PURE__ */ new Set();
// @__NO_SIDE_EFFECTS__
function vr(e) {
  var t = J | le, n = F !== null && (F.f & J) !== 0 ? (
    /** @type {Derived} */
    F
  ) : null;
  return D !== null && (D.f |= ct), {
    ctx: te,
    deps: null,
    effects: null,
    equals: pi,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      X
    ),
    wv: 0,
    parent: n ?? D,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function vo(e, t) {
  let n = (
    /** @type {Effect | null} */
    D
  );
  n === null && Ds();
  var r = (
    /** @type {Boundary} */
    n.b
  ), s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = lt(
    /** @type {V} */
    X
  ), o = !F, a = /* @__PURE__ */ new Map();
  return Ao(() => {
    var l = oi();
    s = l.promise;
    try {
      Promise.resolve(e()).then(l.resolve, l.reject).then(() => {
        u === U && u.committed && u.deactivate(), hn();
      });
    } catch (c) {
      l.reject(c), hn();
    }
    var u = (
      /** @type {Batch} */
      U
    );
    if (o) {
      var d = !r.is_pending();
      r.update_pending_count(1), u.increment(d), a.get(u)?.reject(gt), a.delete(u), a.set(u, l);
    }
    const f = (c, h = void 0) => {
      if (u.activate(), h)
        h !== gt && (i.f |= Ke, Ot(i, h));
      else {
        (i.f & Ke) !== 0 && (i.f ^= Ke), Ot(i, c);
        for (const [v, _] of a) {
          if (a.delete(v), v === u) break;
          _.reject(gt);
        }
      }
      o && (r.update_pending_count(-1), u.decrement(d));
    };
    l.promise.then(f, (c) => f(null, c || "unknown"));
  }), mr(() => {
    for (const l of a.values())
      l.reject(gt);
  }), g && (i.f |= xn), new Promise((l) => {
    function u(d) {
      function f() {
        d === s ? l(i) : u(s);
      }
      d.then(f, f);
    }
    u(s);
  });
}
// @__NO_SIDE_EFFECTS__
function Ai(e) {
  const t = /* @__PURE__ */ vr(e);
  return t.equals = _i, t;
}
function Wn(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      G(
        /** @type {Effect} */
        t[n]
      );
  }
}
let jn = [];
function ho(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & J) === 0)
      return (t.f & Pe) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
function hr(e) {
  var t, n = D;
  if (ge(ho(e)), g) {
    let r = xt;
    Nr(/* @__PURE__ */ new Set());
    try {
      jn.includes(e) && Ls(), jn.push(e), e.f &= ~Ge, Wn(e), t = Xn(e);
    } finally {
      ge(n), Nr(r), jn.pop();
    }
  } else
    try {
      e.f &= ~Ge, Wn(e), t = Xn(e);
    } finally {
      ge(n);
    }
  return t;
}
function xi(e) {
  var t = hr(e);
  if (e.equals(t) || (U?.is_fork || (e.v = t), e.wv = Vi()), !ht)
    if (be !== null)
      (Vt() || U?.is_fork) && be.set(e, t);
    else {
      var n = (e.f & Ee) === 0 ? Ae : ee;
      ne(e, n);
    }
}
let xt = /* @__PURE__ */ new Set();
const Ye = /* @__PURE__ */ new Map();
function Nr(e) {
  xt = e;
}
let pr = !1;
function po() {
  pr = !0;
}
function lt(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: pi,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function _e(e, t) {
  const n = lt(e);
  return No(n), n;
}
// @__NO_SIDE_EFFECTS__
function br(e, t = !1, n = !0) {
  const r = lt(e);
  return t || (r.equals = _i), r;
}
function W(e, t, n = !1) {
  F !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Se || (F.f & fn) !== 0) && mi() && (F.f & (J | Fe | xn | fn)) !== 0 && !Ce?.includes(e) && Ys();
  let r = n ? Ne(t) : t;
  return g && yi(
    r,
    /** @type {string} */
    e.label
  ), Ot(e, r);
}
function Ot(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    ht ? Ye.set(e, t) : Ye.set(e, n), e.v = t;
    var r = me.ensure();
    if (r.capture(e, n), g) {
      if (D !== null) {
        e.updated ??= /* @__PURE__ */ new Map();
        const s = (e.updated.get("")?.count ?? 0) + 1;
        if (e.updated.set("", { error: (
          /** @type {any} */
          null
        ), count: s }), s > 5) {
          const i = to("updated at");
          if (i !== null) {
            let o = e.updated.get(i.stack);
            o || (o = { error: i, count: 0 }, e.updated.set(i.stack, o)), o.count++;
          }
        }
      }
      D !== null && (e.set_during_effect = !0);
    }
    (e.f & J) !== 0 && ((e.f & le) !== 0 && hr(
      /** @type {Derived} */
      e
    ), ne(e, (e.f & Ee) !== 0 ? ee : Ae)), e.wv = Vi(), Ni(e, le), D !== null && (D.f & ee) !== 0 && (D.f & (De | Xe)) === 0 && (he === null ? Io([e]) : he.push(e)), !r.is_fork && xt.size > 0 && !pr && Oi();
  }
  return t;
}
function Oi() {
  pr = !1;
  var e = st;
  bn(!0);
  const t = Array.from(xt);
  try {
    for (const n of t)
      (n.f & ee) !== 0 && ne(n, Ae), Qt(n) && Yt(n);
  } finally {
    bn(e);
  }
  xt.clear();
}
function Ir(e, t = 1) {
  var n = q(e), r = t === 1 ? n++ : n--;
  return W(e, n), r;
}
function qt(e) {
  W(e, e.v + 1);
}
function Ni(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = n.length, s = 0; s < r; s++) {
      var i = n[s], o = i.f;
      if (g && (o & fn) !== 0) {
        xt.add(i);
        continue;
      }
      var a = (o & le) === 0;
      if (a && ne(i, t), (o & J) !== 0) {
        var l = (
          /** @type {Derived} */
          i
        );
        be?.delete(l), (o & Ge) === 0 && (o & Ee && (i.f |= Ge), Ni(l, Ae));
      } else a && ((o & Fe) !== 0 && xe !== null && xe.add(
        /** @type {Effect} */
        i
      ), at(
        /** @type {Effect} */
        i
      ));
    }
}
const bo = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
function Ne(e) {
  if (typeof e != "object" || e === null || He in e)
    return e;
  const t = ii(e);
  if (t !== Ps && t !== Cs)
    return e;
  var n = /* @__PURE__ */ new Map(), r = cr(e), s = /* @__PURE__ */ _e(0), i = ot, o = (d) => {
    if (ot === i)
      return d();
    var f = F, c = ot;
    ae(null), Fr(i);
    var h = d();
    return ae(f), Fr(c), h;
  };
  r && (n.set("length", /* @__PURE__ */ _e(
    /** @type {any[]} */
    e.length
  )), g && (e = /** @type {any} */
  mo(
    /** @type {any[]} */
    e
  )));
  var a = "";
  let l = !1;
  function u(d) {
    if (!l) {
      l = !0, a = d, ke(s, `${a} version`);
      for (const [f, c] of n)
        ke(c, Je(a, f));
      l = !1;
    }
  }
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(d, f, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Ks();
        var h = n.get(f);
        return h === void 0 ? h = o(() => {
          var v = /* @__PURE__ */ _e(c.value);
          return n.set(f, v), g && typeof f == "string" && ke(v, Je(a, f)), v;
        }) : W(h, c.value, !0), !0;
      },
      deleteProperty(d, f) {
        var c = n.get(f);
        if (c === void 0) {
          if (f in d) {
            const h = o(() => /* @__PURE__ */ _e(X));
            n.set(f, h), qt(s), g && ke(h, Je(a, f));
          }
        } else
          W(c, X), qt(s);
        return !0;
      },
      get(d, f, c) {
        if (f === He)
          return e;
        if (g && f === ci)
          return u;
        var h = n.get(f), v = f in d;
        if (h === void 0 && (!v || Ue(d, f)?.writable) && (h = o(() => {
          var k = Ne(v ? d[f] : X), E = /* @__PURE__ */ _e(k);
          return g && ke(E, Je(a, f)), E;
        }), n.set(f, h)), h !== void 0) {
          var _ = q(h);
          return _ === X ? void 0 : _;
        }
        return Reflect.get(d, f, c);
      },
      getOwnPropertyDescriptor(d, f) {
        var c = Reflect.getOwnPropertyDescriptor(d, f);
        if (c && "value" in c) {
          var h = n.get(f);
          h && (c.value = q(h));
        } else if (c === void 0) {
          var v = n.get(f), _ = v?.v;
          if (v !== void 0 && _ !== X)
            return {
              enumerable: !0,
              configurable: !0,
              value: _,
              writable: !0
            };
        }
        return c;
      },
      has(d, f) {
        if (f === He)
          return !0;
        var c = n.get(f), h = c !== void 0 && c.v !== X || Reflect.has(d, f);
        if (c !== void 0 || D !== null && (!h || Ue(d, f)?.writable)) {
          c === void 0 && (c = o(() => {
            var _ = h ? Ne(d[f]) : X, k = /* @__PURE__ */ _e(_);
            return g && ke(k, Je(a, f)), k;
          }), n.set(f, c));
          var v = q(c);
          if (v === X)
            return !1;
        }
        return h;
      },
      set(d, f, c, h) {
        var v = n.get(f), _ = f in d;
        if (r && f === "length")
          for (var k = c; k < /** @type {Source<number>} */
          v.v; k += 1) {
            var E = n.get(k + "");
            E !== void 0 ? W(E, X) : k in d && (E = o(() => /* @__PURE__ */ _e(X)), n.set(k + "", E), g && ke(E, Je(a, k)));
          }
        if (v === void 0)
          (!_ || Ue(d, f)?.writable) && (v = o(() => /* @__PURE__ */ _e(void 0)), g && ke(v, Je(a, f)), W(v, Ne(c)), n.set(f, v));
        else {
          _ = v.v !== X;
          var A = o(() => Ne(c));
          W(v, A);
        }
        var P = Reflect.getOwnPropertyDescriptor(d, f);
        if (P?.set && P.set.call(h, c), !_) {
          if (r && typeof f == "string") {
            var y = (
              /** @type {Source<number>} */
              n.get("length")
            ), C = Number(f);
            Number.isInteger(C) && C >= y.v && W(y, C + 1);
          }
          qt(s);
        }
        return !0;
      },
      ownKeys(d) {
        q(s);
        var f = Reflect.ownKeys(d).filter((v) => {
          var _ = n.get(v);
          return _ === void 0 || _.v !== X;
        });
        for (var [c, h] of n)
          h.v !== X && !(c in d) && f.push(c);
        return f;
      },
      setPrototypeOf() {
        Hs();
      }
    }
  );
}
function Je(e, t) {
  return typeof t == "symbol" ? `${e}[Symbol(${t.description ?? ""})]` : bo.test(t) ? `${e}.${t}` : /^\d+$/.test(t) ? `${e}[${t}]` : `${e}['${t}']`;
}
function Bt(e) {
  try {
    if (e !== null && typeof e == "object" && He in e)
      return e[He];
  } catch {
  }
  return e;
}
function _o(e, t) {
  return Object.is(Bt(e), Bt(t));
}
const yo = /* @__PURE__ */ new Set([
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
function mo(e) {
  return new Proxy(e, {
    get(t, n, r) {
      var s = Reflect.get(t, n, r);
      return yo.has(
        /** @type {string} */
        n
      ) ? function(...i) {
        po();
        var o = s.apply(this, i);
        return Oi(), o;
      } : s;
    }
  });
}
function go() {
  const e = Array.prototype, t = Array.__svelte_cleanup;
  t && t();
  const { indexOf: n, lastIndexOf: r, includes: s } = e;
  e.indexOf = function(i, o) {
    const a = n.call(this, i, o);
    if (a === -1) {
      for (let l = o ?? 0; l < this.length; l += 1)
        if (Bt(this[l]) === i) {
          Mn("array.indexOf(...)");
          break;
        }
    }
    return a;
  }, e.lastIndexOf = function(i, o) {
    const a = r.call(this, i, o ?? this.length - 1);
    if (a === -1) {
      for (let l = 0; l <= (o ?? this.length - 1); l += 1)
        if (Bt(this[l]) === i) {
          Mn("array.lastIndexOf(...)");
          break;
        }
    }
    return a;
  }, e.includes = function(i, o) {
    const a = s.call(this, i, o);
    if (!a) {
      for (let l = 0; l < this.length; l += 1)
        if (Bt(this[l]) === i) {
          Mn("array.includes(...)");
          break;
        }
    }
    return a;
  }, Array.__svelte_cleanup = () => {
    e.indexOf = n, e.lastIndexOf = r, e.includes = s;
  };
}
var Pr, _r, Ii, Pi;
function Gn() {
  if (Pr === void 0) {
    Pr = window, _r = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Ii = Ue(t, "firstChild").get, Pi = Ue(t, "nextSibling").get, Ar(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Ar(n) && (n.__t = void 0), g && (e.__svelte_meta = null, go());
  }
}
function Te(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Ut(e) {
  return (
    /** @type {TemplateNode | null} */
    Ii.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Le(e) {
  return (
    /** @type {TemplateNode | null} */
    Pi.call(e)
  );
}
function Q(e, t) {
  if (!M)
    return /* @__PURE__ */ Ut(e);
  var n = /* @__PURE__ */ Ut(z);
  if (n === null)
    n = z.appendChild(Te());
  else if (t && n.nodeType !== fi) {
    var r = Te();
    return n?.before(r), ve(r), r;
  }
  return ve(n), n;
}
function Ie(e, t = 1, n = !1) {
  let r = M ? z : e;
  for (var s; t--; )
    s = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ Le(r);
  if (!M)
    return r;
  if (n && r?.nodeType !== fi) {
    var i = Te();
    return r === null ? s?.after(i) : r.before(i), ve(i), i;
  }
  return ve(r), r;
}
function Ci(e) {
  e.textContent = "";
}
function Ri() {
  return !1;
}
function wo(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, vt(() => {
      document.activeElement === n && e.focus();
    });
  }
}
let Cr = !1;
function Eo() {
  Cr || (Cr = !0, document.addEventListener(
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
function yr(e) {
  var t = F, n = D;
  ae(null), ge(null);
  try {
    return e();
  } finally {
    ae(t), ge(n);
  }
}
function $o(e) {
  D === null && (F === null && qs(e), js()), ht && Ms(e);
}
function ko(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function $e(e, t, n) {
  var r = D;
  if (g)
    for (; r !== null && (r.f & fn) !== 0; )
      r = r.parent;
  r !== null && (r.f & de) !== 0 && (e |= de);
  var s = {
    ctx: te,
    deps: null,
    nodes: null,
    f: e | le | Ee,
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
  if (g && (s.component_function = Gt), n)
    try {
      Yt(s), s.f |= An;
    } catch (a) {
      throw G(s), a;
    }
  else t !== null && at(s);
  var i = s;
  if (n && i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
  (i.f & ct) === 0 && (i = i.first, (e & Fe) !== 0 && (e & kt) !== 0 && i !== null && (i.f |= kt)), i !== null && (i.parent = r, r !== null && ko(i, r), F !== null && (F.f & J) !== 0 && (e & Xe) === 0)) {
    var o = (
      /** @type {Derived} */
      F
    );
    (o.effects ??= []).push(i);
  }
  return s;
}
function Vt() {
  return F !== null && !Se;
}
function mr(e) {
  const t = $e(dr, null, !1);
  return ne(t, ee), t.teardown = e, t;
}
function pn(e) {
  $o("$effect"), g && we(e, "name", {
    value: "$effect"
  });
  var t = (
    /** @type {Effect} */
    D.f
  ), n = !F && (t & De) !== 0 && (t & An) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      te
    );
    (r.e ??= []).push(e);
  } else
    return Fi(e);
}
function Fi(e) {
  return $e(fr | Rs, e, !1);
}
function So(e) {
  me.ensure();
  const t = $e(Xe | ct, e, !0);
  return () => {
    G(t);
  };
}
function To(e) {
  me.ensure();
  const t = $e(Xe | ct, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? it(t, () => {
      G(t), r(void 0);
    }) : (G(t), r(void 0));
  });
}
function Jt(e) {
  return $e(fr, e, !1);
}
function Ao(e) {
  return $e(xn | ct, e, !0);
}
function gr(e, t = 0) {
  return $e(dr | t, e, !0);
}
function Kt(e, t = [], n = [], r = []) {
  Ti(r, t, n, (s) => {
    $e(dr, () => e(...s.map(q)), !0);
  });
}
function wr(e, t = 0) {
  var n = $e(Fe | t, e, !0);
  return g && (n.dev_stack = Tt), n;
}
function Di(e, t = 0) {
  var n = $e(ai | t, e, !0);
  return g && (n.dev_stack = Tt), n;
}
function oe(e) {
  return $e(De | ct, e, !0);
}
function Li(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = ht, r = F;
    Rr(!0), ae(null);
    try {
      t.call(null);
    } finally {
      Rr(n), ae(r);
    }
  }
}
function Mi(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const s = n.ac;
    s !== null && yr(() => {
      s.abort(gt);
    });
    var r = n.next;
    (n.f & Xe) !== 0 ? n.parent = null : G(n, t), n = r;
  }
}
function xo(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & De) === 0 && G(t), t = n;
  }
}
function G(e, t = !0) {
  var n = !1;
  (t || (e.f & li) !== 0) && e.nodes !== null && e.nodes.end !== null && (Oo(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), Mi(e, t && !n), _n(e, 0), ne(e, Pe);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const i of r)
      i.stop();
  Li(e);
  var s = e.parent;
  s !== null && s.first !== null && ji(e), g && (e.component_function = null), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
function Oo(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ Le(e);
    e.remove(), e = n;
  }
}
function ji(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function it(e, t, n = !0) {
  var r = [];
  qi(e, r, !0);
  var s = () => {
    n && G(e), t && t();
  }, i = r.length;
  if (i > 0) {
    var o = () => --i || s();
    for (var a of r)
      a.out(o);
  } else
    s();
}
function qi(e, t, n) {
  if ((e.f & de) === 0) {
    e.f ^= de;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const a of r)
        (a.is_global || n) && t.push(a);
    for (var s = e.first; s !== null; ) {
      var i = s.next, o = (s.f & kt) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (s.f & De) !== 0 && (e.f & Fe) !== 0;
      qi(s, t, o ? n : !1), s = i;
    }
  }
}
function Er(e) {
  Bi(e, !0);
}
function Bi(e, t) {
  if ((e.f & de) !== 0) {
    e.f ^= de, (e.f & ee) === 0 && (ne(e, le), at(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, s = (n.f & kt) !== 0 || (n.f & De) !== 0;
      Bi(n, s ? t : !1), n = r;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const o of i)
        (o.is_global || t) && o.in();
  }
}
function zi(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var s = n === r ? null : /* @__PURE__ */ Le(n);
      t.append(n), n = s;
    }
}
let st = !1;
function bn(e) {
  st = e;
}
let ht = !1;
function Rr(e) {
  ht = e;
}
let F = null, Se = !1;
function ae(e) {
  F = e;
}
let D = null;
function ge(e) {
  D = e;
}
let Ce = null;
function No(e) {
  F !== null && (Ce === null ? Ce = [e] : Ce.push(e));
}
let re = null, ce = 0, he = null;
function Io(e) {
  he = e;
}
let Ui = 1, Ht = 0, ot = Ht;
function Fr(e) {
  ot = e;
}
function Vi() {
  return ++Ui;
}
function Qt(e) {
  var t = e.f;
  if ((t & le) !== 0)
    return !0;
  if (t & J && (e.f &= ~Ge), (t & Ae) !== 0) {
    var n = e.deps;
    if (n !== null)
      for (var r = n.length, s = 0; s < r; s++) {
        var i = n[s];
        if (Qt(
          /** @type {Derived} */
          i
        ) && xi(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
      }
    (t & Ee) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    be === null && ne(e, ee);
  }
  return !1;
}
function Ki(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !Ce?.includes(e))
    for (var s = 0; s < r.length; s++) {
      var i = r[s];
      (i.f & J) !== 0 ? Ki(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? ne(i, le) : (i.f & ee) !== 0 && ne(i, Ae), at(
        /** @type {Effect} */
        i
      ));
    }
}
function Xn(e) {
  var t = re, n = ce, r = he, s = F, i = Ce, o = te, a = Se, l = ot, u = e.f;
  re = /** @type {null | Value[]} */
  null, ce = 0, he = null, F = (u & (De | Xe)) === 0 ? e : null, Ce = null, St(e.ctx), Se = !1, ot = ++Ht, e.ac !== null && (yr(() => {
    e.ac.abort(gt);
  }), e.ac = null);
  try {
    e.f |= Kn;
    var d = (
      /** @type {Function} */
      e.fn
    ), f = d(), c = e.deps;
    if (re !== null) {
      var h;
      if (_n(e, ce), c !== null && ce > 0)
        for (c.length = ce + re.length, h = 0; h < re.length; h++)
          c[ce + h] = re[h];
      else
        e.deps = c = re;
      if (Vt() && (e.f & Ee) !== 0)
        for (h = ce; h < c.length; h++)
          (c[h].reactions ??= []).push(e);
    } else c !== null && ce < c.length && (_n(e, ce), c.length = ce);
    if (mi() && he !== null && !Se && c !== null && (e.f & (J | Ae | le)) === 0)
      for (h = 0; h < /** @type {Source[]} */
      he.length; h++)
        Ki(
          he[h],
          /** @type {Effect} */
          e
        );
    return s !== null && s !== e && (Ht++, he !== null && (r === null ? r = he : r.push(.../** @type {Source[]} */
    he))), (e.f & Ke) !== 0 && (e.f ^= Ke), f;
  } catch (v) {
    return wi(v);
  } finally {
    e.f ^= Kn, re = t, ce = n, he = r, F = s, Ce = i, St(o), Se = a, ot = l;
  }
}
function Po(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Ns.call(n, e);
    if (r !== -1) {
      var s = n.length - 1;
      s === 0 ? n = t.reactions = null : (n[r] = n[s], n.pop());
    }
  }
  n === null && (t.f & J) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (re === null || !re.includes(t)) && (ne(t, Ae), (t.f & Ee) !== 0 && (t.f ^= Ee, t.f &= ~Ge), Wn(
    /** @type {Derived} **/
    t
  ), _n(
    /** @type {Derived} **/
    t,
    0
  ));
}
function _n(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Po(e, n[r]);
}
function Yt(e) {
  var t = e.f;
  if ((t & Pe) === 0) {
    ne(e, ee);
    var n = D, r = st;
    if (D = e, st = !0, g) {
      var s = Gt;
      xr(e.component_function);
      var i = (
        /** @type {any} */
        Tt
      );
      vn(e.dev_stack ?? Tt);
    }
    try {
      (t & (Fe | ai)) !== 0 ? xo(e) : Mi(e), Li(e);
      var o = Xn(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = Ui;
      var a;
      g && eo && (e.f & le) !== 0 && e.deps;
    } finally {
      st = r, D = n, g && (xr(s), vn(i));
    }
  }
}
async function Hi() {
  await Promise.resolve(), ie();
}
function q(e) {
  var t = e.f, n = (t & J) !== 0;
  if (F !== null && !Se) {
    var r = D !== null && (D.f & Pe) !== 0;
    if (!r && !Ce?.includes(e)) {
      var s = F.deps;
      if ((F.f & Kn) !== 0)
        e.rv < Ht && (e.rv = Ht, re === null && s !== null && s[ce] === e ? ce++ : re === null ? re = [e] : re.includes(e) || re.push(e));
      else {
        (F.deps ??= []).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [F] : i.includes(F) || i.push(F);
      }
    }
  }
  if (g && fo.delete(e), ht) {
    if (Ye.has(e))
      return Ye.get(e);
    if (n) {
      var o = (
        /** @type {Derived} */
        e
      ), a = o.v;
      return ((o.f & ee) === 0 && o.reactions !== null || Wi(o)) && (a = hr(o)), Ye.set(o, a), a;
    }
  } else n && (!be?.has(e) || U?.is_fork && !Vt()) && (o = /** @type {Derived} */
  e, Qt(o) && xi(o), st && Vt() && (o.f & Ee) === 0 && Yi(o));
  if (be?.has(e))
    return be.get(e);
  if ((e.f & Ke) !== 0)
    throw e.v;
  return e.v;
}
function Yi(e) {
  if (e.deps !== null) {
    e.f ^= Ee;
    for (const t of e.deps)
      (t.reactions ??= []).push(e), (t.f & J) !== 0 && (t.f & Ee) === 0 && Yi(
        /** @type {Derived} */
        t
      );
  }
}
function Wi(e) {
  if (e.v === X) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Ye.has(t) || (t.f & J) !== 0 && Wi(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function pt(e) {
  var t = Se;
  try {
    return Se = !0, e();
  } finally {
    Se = t;
  }
}
const Co = -7169;
function ne(e, t) {
  e.f = e.f & Co | t;
}
const Gi = /* @__PURE__ */ new Set(), Zn = /* @__PURE__ */ new Set();
function Ro(e, t, n, r = {}) {
  function s(i) {
    if (r.capture || Ft.call(t, i), !i.cancelBubble)
      return yr(() => n?.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? vt(() => {
    t.addEventListener(e, s, r);
  }) : t.addEventListener(e, s, r), s;
}
function Pn(e) {
  for (var t = 0; t < e.length; t++)
    Gi.add(e[t]);
  for (var n of Zn)
    n(e);
}
let Dr = null;
function Ft(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, s = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    s[0] || e.target
  );
  Dr = e;
  var o = 0, a = Dr === e && e.__root;
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
    we(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var d = F, f = D;
    ae(null), ge(null);
    try {
      for (var c, h = []; i !== null; ) {
        var v = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var _ = i["__" + r];
          _ != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && _.call(i, e);
        } catch (k) {
          c ? h.push(k) : c = k;
        }
        if (e.cancelBubble || v === t || v === null)
          break;
        i = v;
      }
      if (c) {
        for (let k of h)
          queueMicrotask(() => {
            throw k;
          });
        throw c;
      }
    } finally {
      e.__root = t, delete e.currentTarget, ae(d), ge(f);
    }
  }
}
function Fo(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function Jn(e, t) {
  var n = (
    /** @type {Effect} */
    D
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function bt(e, t) {
  var n = (t & Ts) !== 0, r, s = !e.startsWith("<!>");
  return () => {
    if (M)
      return Jn(z, null), z;
    r === void 0 && (r = Fo(s ? e : "<!>" + e), r = /** @type {TemplateNode} */
    /* @__PURE__ */ Ut(r));
    var i = (
      /** @type {TemplateNode} */
      n || _r ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    return Jn(i, i), i;
  };
}
function We(e, t) {
  if (M) {
    var n = (
      /** @type {Effect & { nodes: EffectNodes }} */
      D
    );
    ((n.f & An) === 0 || n.nodes.end === null) && (n.nodes.end = z), Nn();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Do(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const Lo = [
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
function Mo(e) {
  return Lo.includes(e);
}
const jo = {
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
function qo(e) {
  return e = e.toLowerCase(), jo[e] ?? e;
}
const Bo = ["touchstart", "touchmove"];
function zo(e) {
  return Bo.includes(e);
}
function Nt(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function Xi(e, t) {
  return Zi(e, t);
}
function Uo(e, t) {
  Gn(), t.intro = t.intro ?? !1;
  const n = t.target, r = M, s = z;
  try {
    for (var i = /* @__PURE__ */ Ut(n); i && (i.nodeType !== It || /** @type {Comment} */
    i.data !== ri); )
      i = /* @__PURE__ */ Le(i);
    if (!i)
      throw $t;
    ye(!0), ve(
      /** @type {Comment} */
      i
    );
    const o = Zi(e, { ...t, anchor: i });
    return ye(!1), /**  @type {Exports} */
    o;
  } catch (o) {
    if (o instanceof Error && o.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/")))
      throw o;
    return o !== $t && console.warn("Failed to hydrate: ", o), t.recover === !1 && zs(), Gn(), Ci(n), ye(!1), Xi(e, t);
  } finally {
    ye(r), ve(s);
  }
}
const _t = /* @__PURE__ */ new Map();
function Zi(e, { target: t, anchor: n, props: r = {}, events: s, context: i, intro: o = !0 }) {
  Gn();
  var a = /* @__PURE__ */ new Set(), l = (f) => {
    for (var c = 0; c < f.length; c++) {
      var h = f[c];
      if (!a.has(h)) {
        a.add(h);
        var v = zo(h);
        t.addEventListener(h, Ft, { passive: v });
        var _ = _t.get(h);
        _ === void 0 ? (document.addEventListener(h, Ft, { passive: v }), _t.set(h, 1)) : _t.set(h, _ + 1);
      }
    }
  };
  l(Sn(Gi)), Zn.add(l);
  var u = void 0, d = To(() => {
    var f = n ?? t.appendChild(Te());
    return lo(
      /** @type {TemplateNode} */
      f,
      {
        pending: () => {
        }
      },
      (c) => {
        if (i) {
          Xt({});
          var h = (
            /** @type {ComponentContext} */
            te
          );
          h.c = i;
        }
        if (s && (r.$$events = s), M && Jn(
          /** @type {TemplateNode} */
          c,
          null
        ), u = e(c, r) || {}, M && (D.nodes.end = z, z === null || z.nodeType !== It || /** @type {Comment} */
        z.data !== ur))
          throw On(), $t;
        i && Zt();
      }
    ), () => {
      for (var c of a) {
        t.removeEventListener(c, Ft);
        var h = (
          /** @type {number} */
          _t.get(c)
        );
        --h === 0 ? (document.removeEventListener(c, Ft), _t.delete(c)) : _t.set(c, h);
      }
      Zn.delete(l), f !== n && f.parentNode?.removeChild(f);
    };
  });
  return Qn.set(u, d), u;
}
let Qn = /* @__PURE__ */ new WeakMap();
function Vo(e, t) {
  const n = Qn.get(e);
  return n ? (Qn.delete(e), n(t)) : (g && (He in e ? Js() : Xs()), Promise.resolve());
}
class Ko {
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
      U
    );
    if (this.#t.has(t)) {
      var n = (
        /** @type {Key} */
        this.#t.get(t)
      ), r = this.#e.get(n);
      if (r)
        Er(r), this.#r.delete(n);
      else {
        var s = this.#n.get(n);
        s && (this.#e.set(n, s.effect), this.#n.delete(n), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), r = s.effect);
      }
      for (const [i, o] of this.#t) {
        if (this.#t.delete(i), i === t)
          break;
        const a = this.#n.get(o);
        a && (G(a.effect), this.#n.delete(o));
      }
      for (const [i, o] of this.#e) {
        if (i === n || this.#r.has(i)) continue;
        const a = () => {
          if (Array.from(this.#t.values()).includes(i)) {
            var u = document.createDocumentFragment();
            zi(o, u), u.append(Te()), this.#n.set(i, { effect: o, fragment: u });
          } else
            G(o);
          this.#r.delete(i), this.#e.delete(i);
        };
        this.#l || !r ? (this.#r.add(i), it(o, a, !1)) : a();
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
      n.includes(r) || (G(s.effect), this.#n.delete(r));
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var r = (
      /** @type {Batch} */
      U
    ), s = Ri();
    if (n && !this.#e.has(t) && !this.#n.has(t))
      if (s) {
        var i = document.createDocumentFragment(), o = Te();
        i.append(o), this.#n.set(t, {
          effect: oe(() => n(o)),
          fragment: i
        });
      } else
        this.#e.set(
          t,
          oe(() => n(this.anchor))
        );
    if (this.#t.set(r, t), s) {
      for (const [a, l] of this.#e)
        a === t ? r.skipped_effects.delete(l) : r.skipped_effects.add(l);
      for (const [a, l] of this.#n)
        a === t ? r.skipped_effects.delete(l.effect) : r.skipped_effects.add(l.effect);
      r.oncommit(this.#s), r.ondiscard(this.#i);
    } else
      M && (this.anchor = z), this.#s();
  }
}
if (g) {
  let e = function(t) {
    if (!(t in globalThis)) {
      let n;
      Object.defineProperty(globalThis, t, {
        configurable: !0,
        // eslint-disable-next-line getter-return
        get: () => {
          if (n !== void 0)
            return n;
          Vs(t);
        },
        set: (r) => {
          n = r;
        }
      });
    }
  };
  var Hl = e;
  e("$state"), e("$effect"), e("$derived"), e("$inspect"), e("$props"), e("$bindable");
}
function Ho(e) {
  te === null && di("onMount"), pn(() => {
    const t = pt(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Yo(e) {
  te === null && di("onDestroy"), Ho(() => () => pt(e));
}
var Lr = /* @__PURE__ */ new Map();
function Wo(e, t) {
  var n = Lr.get(e);
  n || (n = /* @__PURE__ */ new Set(), Lr.set(e, n)), n.add(t);
}
function Ji(e, t, n = !1) {
  M && Nn();
  var r = new Ko(e), s = n ? kt : 0;
  function i(o, a) {
    if (M) {
      const u = hi(e) === kn;
      if (o === u) {
        var l = dn();
        ve(l), r.anchor = l, ye(!1), r.ensure(o, a), ye(!0);
        return;
      }
    }
    r.ensure(o, a);
  }
  wr(() => {
    var o = !1;
    t((a, l = !0) => {
      o = !0, i(l, a);
    }), o || i(!1, null);
  }, s);
}
function Go(e, t) {
  return t;
}
function Xo(e, t, n) {
  for (var r = [], s = t.length, i, o = t.length, a = 0; a < s; a++) {
    let f = t[a];
    it(
      f,
      () => {
        if (i) {
          if (i.pending.delete(f), i.done.add(f), i.pending.size === 0) {
            var c = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            er(Sn(i.done)), c.delete(i), c.size === 0 && (e.outrogroups = null);
          }
        } else
          o -= 1;
      },
      !1
    );
  }
  if (o === 0) {
    var l = r.length === 0 && n !== null;
    if (l) {
      var u = (
        /** @type {Element} */
        n
      ), d = (
        /** @type {Element} */
        u.parentNode
      );
      Ci(d), d.append(u), e.items.clear();
    }
    er(t, !l);
  } else
    i = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(i);
}
function er(e, t = !0) {
  for (var n = 0; n < e.length; n++)
    G(e[n], t);
}
var Mr;
function Zo(e, t, n, r, s, i = null) {
  var o = e, a = /* @__PURE__ */ new Map();
  {
    var l = (
      /** @type {Element} */
      e
    );
    o = M ? ve(/* @__PURE__ */ Ut(l)) : l.appendChild(Te());
  }
  M && Nn();
  var u = null, d = /* @__PURE__ */ Ai(() => {
    var k = n();
    return cr(k) ? k : k == null ? [] : Sn(k);
  }), f, c = !0;
  function h() {
    _.fallback = u, Jo(_, f, o, t, r), u !== null && (f.length === 0 ? (u.f & ze) === 0 ? Er(u) : (u.f ^= ze, Dt(u, null, o)) : it(u, () => {
      u = null;
    }));
  }
  var v = wr(() => {
    f = /** @type {V[]} */
    q(d);
    var k = f.length;
    let E = !1;
    if (M) {
      var A = hi(o) === kn;
      A !== (k === 0) && (o = dn(), ve(o), ye(!1), E = !0);
    }
    for (var P = /* @__PURE__ */ new Set(), y = (
      /** @type {Batch} */
      U
    ), C = Ri(), V = 0; V < k; V += 1) {
      M && z.nodeType === It && /** @type {Comment} */
      z.data === ur && (o = /** @type {Comment} */
      z, E = !0, ye(!1));
      var T = f[V], S = r(T, V), I = c ? null : a.get(S);
      I ? (I.v && Ot(I.v, T), I.i && Ot(I.i, V), C && y.skipped_effects.delete(I.e)) : (I = Qo(
        a,
        c ? o : Mr ??= Te(),
        T,
        S,
        V,
        s,
        t,
        n
      ), c || (I.e.f |= ze), a.set(S, I)), P.add(S);
    }
    if (k === 0 && i && !u && (c ? u = oe(() => i(o)) : (u = oe(() => i(Mr ??= Te())), u.f |= ze)), M && k > 0 && ve(dn()), !c)
      if (C) {
        for (const [Y, w] of a)
          P.has(Y) || y.skipped_effects.add(w.e);
        y.oncommit(h), y.ondiscard(() => {
        });
      } else
        h();
    E && ye(!0), q(d);
  }), _ = { effect: v, items: a, outrogroups: null, fallback: u };
  c = !1, M && (o = z);
}
function Jo(e, t, n, r, s) {
  var i = t.length, o = e.items, a = e.effect.first, l, u = null, d = [], f = [], c, h, v, _;
  for (_ = 0; _ < i; _ += 1) {
    if (c = t[_], h = s(c, _), v = /** @type {EachItem} */
    o.get(h).e, e.outrogroups !== null)
      for (const S of e.outrogroups)
        S.pending.delete(v), S.done.delete(v);
    if ((v.f & ze) !== 0)
      if (v.f ^= ze, v === a)
        Dt(v, null, n);
      else {
        var k = u ? u.next : a;
        v === e.effect.last && (e.effect.last = v.prev), v.prev && (v.prev.next = v.next), v.next && (v.next.prev = v.prev), je(e, u, v), je(e, v, k), Dt(v, k, n), u = v, d = [], f = [], a = u.next;
        continue;
      }
    if ((v.f & de) !== 0 && Er(v), v !== a) {
      if (l !== void 0 && l.has(v)) {
        if (d.length < f.length) {
          var E = f[0], A;
          u = E.prev;
          var P = d[0], y = d[d.length - 1];
          for (A = 0; A < d.length; A += 1)
            Dt(d[A], E, n);
          for (A = 0; A < f.length; A += 1)
            l.delete(f[A]);
          je(e, P.prev, y.next), je(e, u, P), je(e, y, E), a = E, u = y, _ -= 1, d = [], f = [];
        } else
          l.delete(v), Dt(v, a, n), je(e, v.prev, v.next), je(e, v, u === null ? e.effect.first : u.next), je(e, u, v), u = v;
        continue;
      }
      for (d = [], f = []; a !== null && a !== v; )
        (l ??= /* @__PURE__ */ new Set()).add(a), f.push(a), a = a.next;
      if (a === null)
        continue;
    }
    (v.f & ze) === 0 && d.push(v), u = v, a = v.next;
  }
  if (e.outrogroups !== null) {
    for (const S of e.outrogroups)
      S.pending.size === 0 && (er(Sn(S.done)), e.outrogroups?.delete(S));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (a !== null || l !== void 0) {
    var C = [];
    if (l !== void 0)
      for (v of l)
        (v.f & de) === 0 && C.push(v);
    for (; a !== null; )
      (a.f & de) === 0 && a !== e.fallback && C.push(a), a = a.next;
    var V = C.length;
    if (V > 0) {
      var T = i === 0 ? n : null;
      Xo(e, C, T);
    }
  }
}
function Qo(e, t, n, r, s, i, o, a) {
  var l = (o & ms) !== 0 ? (o & ws) === 0 ? /* @__PURE__ */ br(n, !1, !1) : lt(n) : null, u = (o & gs) !== 0 ? lt(s) : null;
  return g && l && (l.trace = () => {
    a()[u?.v ?? s];
  }), {
    v: l,
    i: u,
    e: oe(() => (i(t, l ?? n, u ?? s, a), () => {
      e.delete(r);
    }))
  };
}
function Dt(e, t, n) {
  if (e.nodes)
    for (var r = e.nodes.start, s = e.nodes.end, i = t && (t.f & ze) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; r !== null; ) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Le(r)
      );
      if (i.before(r), r === s)
        return;
      r = o;
    }
}
function je(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function Cn(e, t) {
  Jt(() => {
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
      s.id = t.hash, s.textContent = t.code, r.appendChild(s), g && Wo(t.hash, s);
    }
  });
}
function Qe(e, t, n) {
  Jt(() => {
    var r = pt(() => t(e, n?.()) || {});
    if (r?.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function ea(e, t) {
  var n = void 0, r;
  Di(() => {
    n !== (n = t()) && (r && (G(r), r = null), n && (r = oe(() => {
      Jt(() => (
        /** @type {(node: Element) => void} */
        n(e)
      ));
    })));
  });
}
function Qi(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (t = 0; t < s; t++) e[t] && (n = Qi(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function ta() {
  for (var e, t, n = 0, r = "", s = arguments.length; n < s; n++) (e = arguments[n]) && (t = Qi(e)) && (r && (r += " "), r += t);
  return r;
}
function es(e) {
  return typeof e == "object" ? ta(e) : e ?? "";
}
const jr = [...` 	
\r\f \v\uFEFF`];
function na(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var s in n)
      if (n[s])
        r = r ? r + " " + s : s;
      else if (r.length)
        for (var i = s.length, o = 0; (o = r.indexOf(s, o)) >= 0; ) {
          var a = o + i;
          (o === 0 || jr.includes(r[o - 1])) && (a === r.length || jr.includes(r[a])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(a + 1) : o = a;
        }
  }
  return r === "" ? null : r;
}
function qr(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var s in e) {
    var i = e[s];
    i != null && i !== "" && (r += " " + s + ": " + i + n);
  }
  return r;
}
function qn(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function ra(e, t) {
  if (t) {
    var n = "", r, s;
    if (Array.isArray(t) ? (r = t[0], s = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, o = 0, a = !1, l = [];
      r && l.push(...Object.keys(r).map(qn)), s && l.push(...Object.keys(s).map(qn));
      var u = 0, d = -1;
      const _ = e.length;
      for (var f = 0; f < _; f++) {
        var c = e[f];
        if (a ? c === "/" && e[f - 1] === "*" && (a = !1) : i ? i === c && (i = !1) : c === "/" && e[f + 1] === "*" ? a = !0 : c === '"' || c === "'" ? i = c : c === "(" ? o++ : c === ")" && o--, !a && i === !1 && o === 0) {
          if (c === ":" && d === -1)
            d = f;
          else if (c === ";" || f === _ - 1) {
            if (d !== -1) {
              var h = qn(e.substring(u, d).trim());
              if (!l.includes(h)) {
                c !== ";" && f++;
                var v = e.substring(u, f).trim();
                n += " " + v + ";";
              }
            }
            u = f + 1, d = -1;
          }
        }
      }
    }
    return r && (n += qr(r)), s && (n += qr(s, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function wt(e, t, n, r, s, i) {
  var o = e.__className;
  if (M || o !== n || o === void 0) {
    var a = na(n, r, i);
    (!M || a !== e.getAttribute("class")) && (a == null ? e.removeAttribute("class") : t ? e.className = a : e.setAttribute("class", a)), e.__className = n;
  } else if (i && s !== i)
    for (var l in i) {
      var u = !!i[l];
      (s == null || u !== !!s[l]) && e.classList.toggle(l, u);
    }
  return i;
}
function Bn(e, t = {}, n, r) {
  for (var s in n) {
    var i = n[s];
    t[s] !== i && (n[s] == null ? e.style.removeProperty(s) : e.style.setProperty(s, i, r));
  }
}
function ia(e, t, n, r) {
  var s = e.__style;
  if (M || s !== t) {
    var i = ra(t, r);
    (!M || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (Bn(e, n?.[0], r[0]), Bn(e, n?.[1], r[1], "important")) : Bn(e, n, r));
  return r;
}
function tr(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!cr(t))
      return Zs();
    for (var r of e.options)
      r.selected = t.includes(Br(r));
    return;
  }
  for (r of e.options) {
    var s = Br(r);
    if (_o(s, t)) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function sa(e) {
  var t = new MutationObserver(() => {
    tr(e, e.__value);
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
  }), mr(() => {
    t.disconnect();
  });
}
function Br(e) {
  return "__value" in e ? e.__value : e.value;
}
const tn = /* @__PURE__ */ Symbol("class"), Ct = /* @__PURE__ */ Symbol("style"), ts = /* @__PURE__ */ Symbol("is custom element"), ns = /* @__PURE__ */ Symbol("is html");
function oa(e) {
  if (M) {
    var t = !1, n = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var r = e.value;
          yn(e, "value", null), e.value = r;
        }
        if (e.hasAttribute("checked")) {
          var s = e.checked;
          yn(e, "checked", null), e.checked = s;
        }
      }
    };
    e.__on_r = n, vt(n), Eo();
  }
}
function aa(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function yn(e, t, n, r) {
  var s = rs(e);
  if (M && (s[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK")) {
    r || ua(e, t, n ?? "");
    return;
  }
  s[t] !== (s[t] = n) && (t === "loading" && (e[Fs] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && is(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function la(e, t, n, r, s = !1, i = !1) {
  if (M && s && e.tagName === "INPUT") {
    var o = (
      /** @type {HTMLInputElement} */
      e
    ), a = o.type === "checkbox" ? "defaultChecked" : "defaultValue";
    a in n || oa(o);
  }
  var l = rs(e), u = l[ts], d = !l[ns];
  let f = M && u;
  f && ye(!1);
  var c = t || {}, h = e.tagName === "OPTION";
  for (var v in t)
    v in n || (n[v] = null);
  n.class ? n.class = es(n.class) : n.class = null, n[Ct] && (n.style ??= null);
  var _ = is(e);
  for (const T in n) {
    let S = n[T];
    if (h && T === "value" && S == null) {
      e.value = e.__value = "", c[T] = S;
      continue;
    }
    if (T === "class") {
      var k = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      wt(e, k, S, r, t?.[tn], n[tn]), c[T] = S, c[tn] = n[tn];
      continue;
    }
    if (T === "style") {
      ia(e, S, t?.[Ct], n[Ct]), c[T] = S, c[Ct] = n[Ct];
      continue;
    }
    var E = c[T];
    if (!(S === E && !(S === void 0 && e.hasAttribute(T)))) {
      c[T] = S;
      var A = T[0] + T[1];
      if (A !== "$$")
        if (A === "on") {
          const I = {}, Y = "$$" + T;
          let w = T.slice(2);
          var P = Mo(w);
          if (Do(w) && (w = w.slice(0, -7), I.capture = !0), !P && E) {
            if (S != null) continue;
            e.removeEventListener(w, c[Y], I), c[Y] = null;
          }
          if (S != null)
            if (P)
              e[`__${w}`] = S, Pn([w]);
            else {
              let j = function(m) {
                c[T].call(this, m);
              };
              var V = j;
              c[Y] = Ro(w, e, j, I);
            }
          else P && (e[`__${w}`] = void 0);
        } else if (T === "style")
          yn(e, T, S);
        else if (T === "autofocus")
          wo(
            /** @type {HTMLElement} */
            e,
            !!S
          );
        else if (!u && (T === "__value" || T === "value" && S != null))
          e.value = e.__value = S;
        else if (T === "selected" && h)
          aa(
            /** @type {HTMLOptionElement} */
            e,
            S
          );
        else {
          var y = T;
          d || (y = qo(y));
          var C = y === "defaultValue" || y === "defaultChecked";
          if (S == null && !u && !C)
            if (l[T] = null, y === "value" || y === "checked") {
              let I = (
                /** @type {HTMLInputElement} */
                e
              );
              const Y = t === void 0;
              if (y === "value") {
                let w = I.defaultValue;
                I.removeAttribute(y), I.defaultValue = w, I.value = I.__value = Y ? w : null;
              } else {
                let w = I.defaultChecked;
                I.removeAttribute(y), I.defaultChecked = w, I.checked = Y ? w : !1;
              }
            } else
              e.removeAttribute(T);
          else C || _.includes(y) && (u || typeof S != "string") ? (e[y] = S, y in l && (l[y] = X)) : typeof S != "function" && yn(e, y, S, i);
        }
    }
  }
  return f && ye(!0), c;
}
function et(e, t, n = [], r = [], s = [], i, o = !1, a = !1) {
  Ti(s, n, r, (l) => {
    var u = void 0, d = {}, f = e.nodeName === "SELECT", c = !1;
    if (Di(() => {
      var v = t(...l.map(q)), _ = la(
        e,
        u,
        v,
        i,
        o,
        a
      );
      c && f && "value" in v && tr(
        /** @type {HTMLSelectElement} */
        e,
        v.value
      );
      for (let E of Object.getOwnPropertySymbols(d))
        v[E] || G(d[E]);
      for (let E of Object.getOwnPropertySymbols(v)) {
        var k = v[E];
        E.description === Os && (!u || k !== u[E]) && (d[E] && G(d[E]), d[E] = oe(() => ea(e, () => k))), _[E] = k;
      }
      u = _;
    }), f) {
      var h = (
        /** @type {HTMLSelectElement} */
        e
      );
      Jt(() => {
        tr(
          h,
          /** @type {Record<string | symbol, any>} */
          u.value,
          !0
        ), sa(h);
      });
    }
    c = !0;
  });
}
function rs(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [ts]: e.nodeName.includes("-"),
      [ns]: e.namespaceURI === xs
    }
  );
}
var zr = /* @__PURE__ */ new Map();
function is(e) {
  var t = e.getAttribute("is") || e.nodeName, n = zr.get(t);
  if (n) return n;
  zr.set(t, n = []);
  for (var r, s = e, i = Element.prototype; i !== s; ) {
    r = Is(s);
    for (var o in r)
      r[o].set && n.push(o);
    s = ii(s);
  }
  return n;
}
function ua(e, t, n) {
  g && (t === "srcset" && ca(e, n) || nr(e.getAttribute(t) ?? "", n) || Gs(
    t,
    e.outerHTML.replace(e.innerHTML, e.innerHTML && "..."),
    String(n)
  ));
}
function nr(e, t) {
  return e === t ? !0 : new URL(e, document.baseURI).href === new URL(t, document.baseURI).href;
}
function Ur(e) {
  return e.split(",").map((t) => t.trim().split(" ").filter(Boolean));
}
function ca(e, t) {
  var n = Ur(e.srcset), r = Ur(t);
  return r.length === n.length && r.every(
    ([s, i], o) => i === n[o][1] && // We need to test both ways because Vite will create an a full URL with
    // `new URL(asset, import.meta.url).href` for the client when `base: './'`, and the
    // relative URLs inside srcset are not automatically resolved to absolute URLs by
    // browsers (in contrast to img.src). This means both SSR and DOM code could
    // contain relative or absolute URLs.
    (nr(n[o][0], s) || nr(s, n[o][0]))
  );
}
function Vr(e, t) {
  return e === t || e?.[He] === t;
}
function fa(e = {}, t, n, r) {
  return Jt(() => {
    var s, i;
    return gr(() => {
      s = i, i = [], pt(() => {
        e !== n(...i) && (t(e, ...i), s && Vr(n(...s), e) && t(null, ...s));
      });
    }), () => {
      vt(() => {
        i && Vr(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function $r(e, t, n) {
  if (e == null)
    return t(void 0), n && n(void 0), Ve;
  const r = pt(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const yt = [];
function Et(e, t) {
  return {
    subscribe: Rn(e, t).subscribe
  };
}
function Rn(e, t = Ve) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function s(a) {
    if (bi(e, a) && (e = a, n)) {
      const l = !yt.length;
      for (const u of r)
        u[1](), yt.push(u, e);
      if (l) {
        for (let u = 0; u < yt.length; u += 2)
          yt[u][0](yt[u + 1]);
        yt.length = 0;
      }
    }
  }
  function i(a) {
    s(a(
      /** @type {T} */
      e
    ));
  }
  function o(a, l = Ve) {
    const u = [a, l];
    return r.add(u), r.size === 1 && (n = t(s, i) || Ve), a(
      /** @type {T} */
      e
    ), () => {
      r.delete(u), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: s, update: i, subscribe: o };
}
function kr(e, t, n) {
  const r = !Array.isArray(e), s = r ? [e] : e;
  if (!s.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const i = t.length < 2;
  return Et(n, (o, a) => {
    let l = !1;
    const u = [];
    let d = 0, f = Ve;
    const c = () => {
      if (d)
        return;
      f();
      const v = t(r ? u[0] : u, o, a);
      i ? o(v) : f = typeof v == "function" ? v : Ve;
    }, h = s.map(
      (v, _) => $r(
        v,
        (k) => {
          u[_] = k, d &= ~(1 << _), l && c();
        },
        () => {
          d |= 1 << _;
        }
      )
    );
    return l = !0, c(), function() {
      si(h), f(), l = !1;
    };
  });
}
function ss(e) {
  let t;
  return $r(e, (n) => t = n)(), t;
}
let nn = !1, rr = /* @__PURE__ */ Symbol();
function qe(e, t, n) {
  const r = n[t] ??= {
    store: null,
    source: /* @__PURE__ */ br(void 0),
    unsubscribe: Ve
  };
  if (g && (r.source.label = t), r.store !== e && !(rr in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = Ve;
    else {
      var s = !0;
      r.unsubscribe = $r(e, (i) => {
        s ? r.source.v = i : W(r.source, i);
      }), s = !1;
    }
  return e && rr in n ? ss(e) : q(r.source);
}
function da() {
  const e = {};
  function t() {
    mr(() => {
      for (var n in e)
        e[n].unsubscribe();
      we(e, rr, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function va(e) {
  var t = nn;
  try {
    return nn = !1, [e(), nn];
  } finally {
    nn = t;
  }
}
function fe(e, t, n, r) {
  var s = (n & ks) !== 0, i = (n & Ss) !== 0, o = (
    /** @type {V} */
    r
  ), a = !0, l = () => (a && (a = !1, o = i ? pt(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), o), u;
  if (s) {
    var d = He in e || ui in e;
    u = Ue(e, t)?.set ?? (d && t in e ? (A) => e[t] = A : void 0);
  }
  var f, c = !1;
  s ? [f, c] = va(() => (
    /** @type {V} */
    e[t]
  )) : f = /** @type {V} */
  e[t], f === void 0 && r !== void 0 && (f = l(), u && (Us(t), u(f)));
  var h;
  if (h = () => {
    var A = (
      /** @type {V} */
      e[t]
    );
    return A === void 0 ? l() : (a = !0, A);
  }, (n & $s) === 0)
    return h;
  if (u) {
    var v = e.$$legacy;
    return (
      /** @type {() => V} */
      (function(A, P) {
        return arguments.length > 0 ? ((!P || v || c) && u(P ? h() : A), A) : h();
      })
    );
  }
  var _ = !1, k = ((n & Es) !== 0 ? vr : Ai)(() => (_ = !1, h()));
  g && (k.label = t), s && q(k);
  var E = (
    /** @type {Effect} */
    D
  );
  return (
    /** @type {() => V} */
    (function(A, P) {
      if (arguments.length > 0) {
        const y = P ? q(k) : s ? Ne(A) : A;
        return W(k, y), _ = !0, o !== void 0 && (o = y), A;
      }
      return ht && _ || (E.f & Pe) !== 0 ? k.v : q(k);
    })
  );
}
function ha(e) {
  return new pa(e);
}
class pa {
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
      var a = /* @__PURE__ */ br(o, !1, !1);
      return n.set(i, a), a;
    };
    const s = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(i, o) {
          return q(n.get(o) ?? r(o, Reflect.get(i, o)));
        },
        has(i, o) {
          return o === ui ? !0 : (q(n.get(o) ?? r(o, Reflect.get(i, o))), Reflect.has(i, o));
        },
        set(i, o, a) {
          return W(n.get(o) ?? r(o, a), a), Reflect.set(i, o, a);
        }
      }
    );
    this.#e = (t.hydrate ? Uo : Xi)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: s,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    }), (!t?.props?.$$host || t.sync === !1) && ie(), this.#t = s.$$events;
    for (const i of Object.keys(this.#e))
      i === "$set" || i === "$destroy" || i === "$on" || we(this, i, {
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
      Vo(this.#e);
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
let os;
typeof HTMLElement == "function" && (os = class extends HTMLElement {
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
          s !== "default" && (o.name = s), We(i, o);
        };
      };
      var e = t;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, r = ba(this);
      for (const s of this.$$s)
        s in r && (s === "default" && !this.$$d.children ? (this.$$d.children = t(s), n.default = !0) : n[s] = t(s));
      for (const s of this.attributes) {
        const i = this.$$g_p(s.name);
        i in this.$$d || (this.$$d[i] = ln(i, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = ha({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$host: this
        }
      }), this.$$me = So(() => {
        gr(() => {
          this.$$r = !0;
          for (const s of cn(this.$$c)) {
            if (!this.$$p_d[s]?.reflect) continue;
            this.$$d[s] = this.$$c[s];
            const i = ln(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = ln(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
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
    return cn(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function ln(e, t, n, r) {
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
function ba(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function Fn(e, t, n, r, s, i) {
  let o = class extends os {
    constructor() {
      super(e, n, s), this.$$p_d = t;
    }
    static get observedAttributes() {
      return cn(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return cn(t).forEach((a) => {
    we(o.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        l = ln(a, l, t), this.$$d[a] = l;
        var u = this.$$c;
        if (u) {
          var d = Ue(u, a)?.get;
          d ? u[a] = l : u.$set({ [a]: l });
        }
      }
    });
  }), r.forEach((a) => {
    we(o.prototype, a, {
      get() {
        return this.$$c?.[a];
      }
    });
  }), e.element = /** @type {any} */
  o, o;
}
var _a = /* @__PURE__ */ bt('<div class="container svelte-1xn5zvu"><div class="counter svelte-1xn5zvu"><div class="label svelte-1xn5zvu">Svelte Counter:</div> <button type="button" class="button svelte-1xn5zvu">-</button> <span class="count svelte-1xn5zvu"> </span> <button type="button" class="button svelte-1xn5zvu">+</button></div></div>');
const ya = {
  hash: "svelte-1xn5zvu",
  code: ".container.svelte-1xn5zvu {display:flex;flex-direction:column;align-items:center;padding:1rem;border:2px solid #ff3e00;border-radius:8px;background-color:#f9f9f9;font-family:system-ui, -apple-system, sans-serif;}.counter.svelte-1xn5zvu {display:flex;align-items:center;gap:1rem;}.label.svelte-1xn5zvu {font-size:1rem;font-weight:600;color:#333;margin-bottom:0.5rem;}.button.svelte-1xn5zvu {width:40px;height:40px;font-size:1.5rem;border:2px solid #ff3e00;background-color:#ff3e00;color:white;border-radius:4px;cursor:pointer;transition:background-color 0.2s;}.button.svelte-1xn5zvu:hover {background-color:#e63900;}.button.svelte-1xn5zvu:active {background-color:#cc3300;}.count.svelte-1xn5zvu {font-size:2rem;font-weight:bold;color:#ff3e00;min-width:3rem;text-align:center;}"
};
function ma(e, t) {
  Xt(t, !0), Cn(e, ya);
  let n = fe(t, "count", 15, 0), r = /* @__PURE__ */ _e(Ne(n()));
  pn(() => {
    W(r, n(), !0);
  });
  function s() {
    Ir(r), n(q(r));
  }
  function i() {
    Ir(r, -1), n(q(r));
  }
  var o = {
    get count() {
      return n();
    },
    set count(h = 0) {
      n(h), ie();
    }
  }, a = _a(), l = Q(a), u = Ie(Q(l), 2);
  u.__click = i;
  var d = Ie(u, 2), f = Q(d, !0);
  Z(d);
  var c = Ie(d, 2);
  return c.__click = s, Z(l), Z(a), Kt(() => Nt(f, q(r))), We(e, a), Zt(o);
}
Pn(["click"]);
customElements.define("svelte-counter", Fn(ma, { count: {} }, [], [], !0));
function ir(e) {
  return Object.keys(e).reduce((t, n) => e[n] === void 0 ? t : t + `${n}:${e[n]};`, "");
}
ir({
  position: "absolute",
  opacity: 0,
  "pointer-events": "none",
  margin: 0,
  transform: "translateX(-100%)"
});
function ga(e) {
  if (e !== null)
    return "";
}
function mn(...e) {
  return (...t) => {
    for (const n of e)
      typeof n == "function" && n(...t);
  };
}
function H() {
}
function as(e, ...t) {
  const n = {};
  for (const r of Object.keys(e))
    t.includes(r) || (n[r] = e[r]);
  return n;
}
function rn(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 && (t[n] = r);
  }
  return t;
}
function Kr(e) {
  function t(n) {
    return n(e), () => {
    };
  }
  return { subscribe: t };
}
const sn = (e) => new Proxy(e, {
  get(t, n, r) {
    return Reflect.get(t, n, r);
  },
  ownKeys(t) {
    return Reflect.ownKeys(t).filter((n) => n !== "action");
  }
}), Hr = (e) => typeof e == "function";
Be("empty");
function Be(e, t) {
  const { stores: n, action: r, returned: s } = t ?? {}, i = (() => {
    if (n && s)
      return kr(n, (a) => {
        const l = s(a);
        if (Hr(l)) {
          const u = (...d) => sn(rn({
            ...l(...d),
            [`data-melt-${e}`]: "",
            action: r ?? H
          }));
          return u.action = r ?? H, u;
        }
        return sn(rn({
          ...l,
          [`data-melt-${e}`]: "",
          action: r ?? H
        }));
      });
    {
      const l = s?.();
      if (Hr(l)) {
        const u = (...d) => sn(rn({
          ...l(...d),
          [`data-melt-${e}`]: "",
          action: r ?? H
        }));
        return u.action = r ?? H, Kr(u);
      }
      return Kr(sn(rn({
        ...l,
        [`data-melt-${e}`]: "",
        action: r ?? H
      })));
    }
  })(), o = r ?? (() => {
  });
  return o.subscribe = i.subscribe, o;
}
function wa(e) {
  const t = (i) => i ? `${e}-${i}` : e, n = (i) => `data-melt-${e}${i ? `-${i}` : ""}`, r = (i) => `[data-melt-${e}${i ? `-${i}` : ""}]`;
  return {
    name: t,
    attribute: n,
    selector: r,
    getEl: (i) => document.querySelector(r(i))
  };
}
const Yr = typeof document < "u", ls = (e) => typeof e == "function";
function Ea(e) {
  return e instanceof ShadowRoot;
}
function Sr(e) {
  return e instanceof Element;
}
function Re(e) {
  return e instanceof HTMLElement;
}
function $a(e) {
  return e !== null && typeof e == "object";
}
function ka(e) {
  return $a(e) && "subscribe" in e;
}
function sr(e, t, n, r) {
  const s = Array.isArray(t) ? t : [t];
  return s.forEach((i) => e.addEventListener(i, n, r)), () => {
    s.forEach((i) => e.removeEventListener(i, n, r));
  };
}
function on(e, t, n, r) {
  const s = Array.isArray(t) ? t : [t];
  if (typeof n == "function") {
    const i = Ta((o) => n(o));
    return s.forEach((o) => e.addEventListener(o, i, r)), () => {
      s.forEach((o) => e.removeEventListener(o, i, r));
    };
  }
  return () => void 0;
}
function Sa(e) {
  const t = e.currentTarget;
  if (!Re(t))
    return null;
  const n = new CustomEvent(`m-${e.type}`, {
    detail: {
      originalEvent: e
    },
    cancelable: !0
  });
  return t.dispatchEvent(n), n;
}
function Ta(e) {
  return (t) => {
    if (!Sa(t)?.defaultPrevented)
      return e(t);
  };
}
const Aa = (e) => {
  try {
    Yo(e);
  } catch {
    return e;
  }
};
function Pt(e) {
  return {
    ...e,
    get: () => ss(e)
  };
}
Pt.writable = function(e) {
  const t = Rn(e);
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
Pt.derived = function(e, t) {
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
const xa = (e, t) => {
  const n = Pt(e), r = (i, o) => {
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
function Oa(e) {
  return new Promise((t) => setTimeout(t, e));
}
let Na = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", Ia = (e = 21) => {
  let t = "", n = e | 0;
  for (; n--; )
    t += Na[Math.random() * 64 | 0];
  return t;
};
function Pa() {
  return Ia(10);
}
function Ca(e) {
  return e.reduce((t, n) => (t[n] = Pa(), t), {});
}
const Lt = {
  ENTER: "Enter",
  ESCAPE: "Escape",
  SPACE: " "
};
function zn(e, t = 500) {
  let n;
  const r = (...s) => {
    clearTimeout(n), n = setTimeout(() => e(...s), t);
  };
  return r.destroy = () => clearTimeout(n), r;
}
const us = () => typeof window < "u";
function Ra() {
  return navigator.userAgentData?.platform ?? navigator.platform;
}
const cs = (e) => us() && e.test(Ra().toLowerCase()), Fa = () => us() && !!navigator.maxTouchPoints, Da = () => cs(/^mac/) && !Fa(), La = () => cs(/mac|iphone|ipad|ipod/i), Ma = () => La() && !Da(), Un = "data-melt-scroll-lock";
function Wr(e, t) {
  if (!e)
    return;
  const n = e.style.cssText;
  return Object.assign(e.style, t), () => {
    e.style.cssText = n;
  };
}
function ja(e, t, n) {
  if (!e)
    return;
  const r = e.style.getPropertyValue(t);
  return e.style.setProperty(t, n), () => {
    r ? e.style.setProperty(t, r) : e.style.removeProperty(t);
  };
}
function qa(e) {
  const t = e.getBoundingClientRect().left;
  return Math.round(t) + e.scrollLeft ? "paddingLeft" : "paddingRight";
}
function Ba(e) {
  const t = document, n = t.defaultView ?? window, { documentElement: r, body: s } = t;
  if (s.hasAttribute(Un))
    return H;
  s.setAttribute(Un, "");
  const o = n.innerWidth - r.clientWidth, a = () => ja(r, "--scrollbar-width", `${o}px`), l = qa(r), u = n.getComputedStyle(s)[l], d = () => Wr(s, {
    overflow: "hidden",
    [l]: `calc(${u} + ${o}px)`
  }), f = () => {
    const { scrollX: h, scrollY: v, visualViewport: _ } = n, k = _?.offsetLeft ?? 0, E = _?.offsetTop ?? 0, A = Wr(s, {
      position: "fixed",
      overflow: "hidden",
      top: `${-(v - Math.floor(E))}px`,
      left: `${-(h - Math.floor(k))}px`,
      right: "0",
      [l]: `calc(${u} + ${o}px)`
    });
    return () => {
      A?.(), n.scrollTo(h, v);
    };
  }, c = [a(), Ma() ? f() : d()];
  return () => {
    c.forEach((h) => h?.()), s.removeAttribute(Un);
  };
}
function Mt(e, t, n = {}) {
  const { skipFirstRun: r } = n;
  let s = !0, i;
  const o = kr(e, (l) => {
    i?.(), s && r ? s = !1 : i = t(l);
  }).subscribe(H), a = () => {
    o(), i?.();
  };
  return Aa(a), a;
}
function Gr(e) {
  const t = {};
  return Object.keys(e).forEach((n) => {
    const r = n, s = e[r];
    t[r] = Pt(Rn(s));
  }), t;
}
function za(e) {
  let t = e.parentElement;
  for (; Re(t) && !t.hasAttribute("data-portal"); )
    t = t.parentElement;
  return t || "body";
}
function Ua(e, t) {
  return t !== void 0 ? t : za(e) === "body" ? document.body : null;
}
function fs(e, t) {
  return e === t || e.contains(t);
}
function Va(e) {
  return e?.ownerDocument ?? document;
}
async function Xr(e) {
  const { prop: t, defaultEl: n } = e;
  if (await Promise.all([Oa(1), Hi]), t === void 0) {
    n?.focus();
    return;
  }
  const r = ls(t) ? t(n) : t;
  if (typeof r == "string") {
    const s = document.querySelector(r);
    if (!Re(s))
      return;
    s.focus();
  } else Re(r) && r.focus();
}
Et(!1), Et(!1), Et(void 0), Et(void 0);
const un = /* @__PURE__ */ new Map(), Ka = ((e, t = {}) => {
  let n = H;
  function r(s = {}) {
    n();
    const i = { behaviorType: "close", ...s }, o = ka(i.behaviorType) ? i.behaviorType : Pt(Et(i.behaviorType));
    un.set(e, o), n = mn(sr(document, "keydown", (l) => {
      if (l.key !== Lt.ESCAPE || !Ha(e))
        return;
      const u = l.target;
      Re(u) && (l.preventDefault(), !Ya(l, i.ignore) && Wa(o.get()) && i.handler?.(l));
    }, { passive: !1 }), Mt(o, (l) => {
      l === "close" || l === "defer-otherwise-close" && [...un.keys()][0] === e ? e.dataset.escapee = "" : delete e.dataset.escapee;
    }), o.destroy || H);
  }
  return r(t), {
    update: r,
    destroy() {
      un.delete(e), delete e.dataset.escapee, n();
    }
  };
}), Ha = (e) => {
  const t = [...un], n = t.findLast(([s, i]) => {
    const o = i.get();
    return o === "close" || o === "ignore";
  });
  if (n)
    return n[0] === e;
  const [r] = t[0];
  return r === e;
}, Ya = (e, t) => t ? !!(ls(t) && t(e) || Array.isArray(t) && t.some((n) => e.target === n)) : !1, Wa = (e) => e === "close" || e === "defer-otherwise-close";
var ds = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], gn = /* @__PURE__ */ ds.join(","), vs = typeof Element > "u", ut = vs ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, wn = !vs && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e?.ownerDocument;
}, Wt = function(t, n) {
  var r;
  n === void 0 && (n = !0);
  var s = t == null || (r = t.getAttribute) === null || r === void 0 ? void 0 : r.call(t, "inert"), i = s === "" || s === "true", o = i || n && t && Wt(t.parentNode);
  return o;
}, Ga = function(t) {
  var n, r = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return r === "" || r === "true";
}, hs = function(t, n, r) {
  if (Wt(t))
    return [];
  var s = Array.prototype.slice.apply(t.querySelectorAll(gn));
  return n && ut.call(t, gn) && s.unshift(t), s = s.filter(r), s;
}, En = function(t, n, r) {
  for (var s = [], i = Array.from(t); i.length; ) {
    var o = i.shift();
    if (!Wt(o, !1))
      if (o.tagName === "SLOT") {
        var a = o.assignedElements(), l = a.length ? a : o.children, u = En(l, !0, r);
        r.flatten ? s.push.apply(s, u) : s.push({
          scopeParent: o,
          candidates: u
        });
      } else {
        var d = ut.call(o, gn);
        d && r.filter(o) && (n || !t.includes(o)) && s.push(o);
        var f = o.shadowRoot || // check for an undisclosed shadow
        typeof r.getShadowRoot == "function" && r.getShadowRoot(o), c = !Wt(f, !1) && (!r.shadowRootFilter || r.shadowRootFilter(o));
        if (f && c) {
          var h = En(f === !0 ? o.children : f.children, !0, r);
          r.flatten ? s.push.apply(s, h) : s.push({
            scopeParent: o,
            candidates: h
          });
        } else
          i.unshift.apply(i, o.children);
      }
  }
  return s;
}, ps = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, nt = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || Ga(t)) && !ps(t) ? 0 : t.tabIndex;
}, Xa = function(t, n) {
  var r = nt(t);
  return r < 0 && n && !ps(t) ? 0 : r;
}, Za = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, bs = function(t) {
  return t.tagName === "INPUT";
}, Ja = function(t) {
  return bs(t) && t.type === "hidden";
}, Qa = function(t) {
  var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(r) {
    return r.tagName === "SUMMARY";
  });
  return n;
}, el = function(t, n) {
  for (var r = 0; r < t.length; r++)
    if (t[r].checked && t[r].form === n)
      return t[r];
}, tl = function(t) {
  if (!t.name)
    return !0;
  var n = t.form || wn(t), r = function(a) {
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
  var i = el(s, t.form);
  return !i || i === t;
}, nl = function(t) {
  return bs(t) && t.type === "radio";
}, rl = function(t) {
  return nl(t) && !tl(t);
}, il = function(t) {
  var n, r = t && wn(t), s = (n = r) === null || n === void 0 ? void 0 : n.host, i = !1;
  if (r && r !== t) {
    var o, a, l;
    for (i = !!((o = s) !== null && o !== void 0 && (a = o.ownerDocument) !== null && a !== void 0 && a.contains(s) || t != null && (l = t.ownerDocument) !== null && l !== void 0 && l.contains(t)); !i && s; ) {
      var u, d, f;
      r = wn(s), s = (u = r) === null || u === void 0 ? void 0 : u.host, i = !!((d = s) !== null && d !== void 0 && (f = d.ownerDocument) !== null && f !== void 0 && f.contains(s));
    }
  }
  return i;
}, Zr = function(t) {
  var n = t.getBoundingClientRect(), r = n.width, s = n.height;
  return r === 0 && s === 0;
}, sl = function(t, n) {
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
  var o = ut.call(t, "details>summary:first-of-type"), a = o ? t.parentElement : t;
  if (ut.call(a, "details:not([open]) *"))
    return !0;
  if (!r || r === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  r === "full-native" || r === "legacy-full") {
    if (typeof s == "function") {
      for (var l = t; t; ) {
        var u = t.parentElement, d = wn(t);
        if (u && !u.shadowRoot && s(u) === !0)
          return Zr(t);
        t.assignedSlot ? t = t.assignedSlot : !u && d !== t.ownerDocument ? t = d.host : t = u;
      }
      t = l;
    }
    if (il(t))
      return !t.getClientRects().length;
    if (r !== "legacy-full")
      return !0;
  } else if (r === "non-zero-area")
    return Zr(t);
  return !1;
}, ol = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var n = t.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var r = 0; r < n.children.length; r++) {
          var s = n.children.item(r);
          if (s.tagName === "LEGEND")
            return ut.call(n, "fieldset[disabled] *") ? !0 : !s.contains(t);
        }
        return !0;
      }
      n = n.parentElement;
    }
  return !1;
}, $n = function(t, n) {
  return !(n.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  Wt(n) || Ja(n) || sl(n, t) || // For a details element with a summary, the summary element gets the focus
  Qa(n) || ol(n));
}, or = function(t, n) {
  return !(rl(n) || nt(n) < 0 || !$n(t, n));
}, al = function(t) {
  var n = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, _s = function(t) {
  var n = [], r = [];
  return t.forEach(function(s, i) {
    var o = !!s.scopeParent, a = o ? s.scopeParent : s, l = Xa(a, o), u = o ? _s(s.candidates) : a;
    l === 0 ? o ? n.push.apply(n, u) : n.push(a) : r.push({
      documentOrder: i,
      tabIndex: l,
      item: s,
      isScope: o,
      content: u
    });
  }), r.sort(Za).reduce(function(s, i) {
    return i.isScope ? s.push.apply(s, i.content) : s.push(i.content), s;
  }, []).concat(n);
}, ll = function(t, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = En([t], n.includeContainer, {
    filter: or.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: al
  }) : r = hs(t, n.includeContainer, or.bind(null, n)), _s(r);
}, ul = function(t, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = En([t], n.includeContainer, {
    filter: $n.bind(null, n),
    flatten: !0,
    getShadowRoot: n.getShadowRoot
  }) : r = hs(t, n.includeContainer, $n.bind(null, n)), r;
}, mt = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return ut.call(t, gn) === !1 ? !1 : or(n, t);
}, cl = /* @__PURE__ */ ds.concat("iframe").join(","), Vn = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return ut.call(t, cl) === !1 ? !1 : $n(n, t);
};
function ar(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function fl(e) {
  if (Array.isArray(e)) return ar(e);
}
function Jr(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = ys(e)) || t) {
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
function dl(e, t, n) {
  return (t = _l(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function vl(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function hl() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Qr(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(e, s).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ei(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Qr(Object(n), !0).forEach(function(r) {
      dl(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Qr(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function pl(e) {
  return fl(e) || vl(e) || ys(e) || hl();
}
function bl(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function _l(e) {
  var t = bl(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function ys(e, t) {
  if (e) {
    if (typeof e == "string") return ar(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ar(e, t) : void 0;
  }
}
var Oe = {
  // Returns the trap from the top of the stack.
  getActiveTrap: function(t) {
    return t?.length > 0 ? t[t.length - 1] : null;
  },
  // Pauses the currently active trap, then adds a new trap to the stack.
  activateTrap: function(t, n) {
    var r = Oe.getActiveTrap(t);
    n !== r && Oe.pauseTrap(t);
    var s = t.indexOf(n);
    s === -1 || t.splice(s, 1), t.push(n);
  },
  // Removes the trap from the top of the stack, then unpauses the next trap down.
  deactivateTrap: function(t, n) {
    var r = t.indexOf(n);
    r !== -1 && t.splice(r, 1), Oe.unpauseTrap(t);
  },
  // Pauses the trap at the top of the stack.
  pauseTrap: function(t) {
    var n = Oe.getActiveTrap(t);
    n?._setPausedState(!0);
  },
  // Unpauses the trap at the top of the stack.
  unpauseTrap: function(t) {
    var n = Oe.getActiveTrap(t);
    n && !n._isManuallyPaused() && n._setPausedState(!1);
  }
}, yl = function(t) {
  return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
}, ml = function(t) {
  return t?.key === "Escape" || t?.key === "Esc" || t?.keyCode === 27;
}, zt = function(t) {
  return t?.key === "Tab" || t?.keyCode === 9;
}, gl = function(t) {
  return zt(t) && !t.shiftKey;
}, wl = function(t) {
  return zt(t) && t.shiftKey;
}, ti = function(t) {
  return setTimeout(t, 0);
}, Rt = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
    r[s - 1] = arguments[s];
  return typeof t == "function" ? t.apply(void 0, r) : t;
}, an = function(t) {
  return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
}, El = [], $l = function(t, n) {
  var r = n?.document || document, s = n?.trapStack || El, i = ei({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    isolateSubtrees: !1,
    isKeyForward: gl,
    isKeyBackward: wl
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
  }, a, l = function(p, b, $) {
    return p && p[b] !== void 0 ? p[b] : i[$ || b];
  }, u = function(p, b) {
    var $ = typeof b?.composedPath == "function" ? b.composedPath() : void 0;
    return o.containerGroups.findIndex(function(N) {
      var O = N.container, L = N.tabbableNodes;
      return O.contains(p) || $?.includes(O) || L.find(function(x) {
        return x === p;
      });
    });
  }, d = function(p) {
    var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, $ = b.hasFallback, N = $ === void 0 ? !1 : $, O = b.params, L = O === void 0 ? [] : O, x = i[p];
    if (typeof x == "function" && (x = x.apply(void 0, pl(L))), x === !0 && (x = void 0), !x) {
      if (x === void 0 || x === !1)
        return x;
      throw new Error("`".concat(p, "` was specified but was not a node, or did not return a node"));
    }
    var R = x;
    if (typeof x == "string") {
      try {
        R = r.querySelector(x);
      } catch (B) {
        throw new Error("`".concat(p, '` appears to be an invalid selector; error="').concat(B.message, '"'));
      }
      if (!R && !N)
        throw new Error("`".concat(p, "` as selector refers to no known node"));
    }
    return R;
  }, f = function() {
    var p = d("initialFocus", {
      hasFallback: !0
    });
    if (p === !1)
      return !1;
    if (p === void 0 || p && !Vn(p, i.tabbableOptions))
      if (u(r.activeElement) >= 0)
        p = r.activeElement;
      else {
        var b = o.tabbableGroups[0], $ = b && b.firstTabbableNode;
        p = $ || d("fallbackFocus");
      }
    else p === null && (p = d("fallbackFocus"));
    if (!p)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return p;
  }, c = function() {
    if (o.containerGroups = o.containers.map(function(p) {
      var b = ll(p, i.tabbableOptions), $ = ul(p, i.tabbableOptions), N = b.length > 0 ? b[0] : void 0, O = b.length > 0 ? b[b.length - 1] : void 0, L = $.find(function(B) {
        return mt(B);
      }), x = $.slice().reverse().find(function(B) {
        return mt(B);
      }), R = !!b.find(function(B) {
        return nt(B) > 0;
      });
      return {
        container: p,
        tabbableNodes: b,
        focusableNodes: $,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: R,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: N,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: O,
        // NOTE: DOM order is NOT NECESSARILY "document position" order, but figuring that out
        //  would require more than just https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        //  because that API doesn't work with Shadow DOM as well as it should (@see
        //  https://github.com/whatwg/dom/issues/320) and since this first/last is only needed, so far,
        //  to address an edge case related to positive tabindex support, this seems like a much easier,
        //  "close enough most of the time" alternative for positive tabindexes which should generally
        //  be avoided anyway...
        /** First tabbable node in container, __DOM__ order; `undefined` if none. */
        firstDomTabbableNode: L,
        /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
        lastDomTabbableNode: x,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(se) {
          var ue = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, K = b.indexOf(se);
          return K < 0 ? ue ? $.slice($.indexOf(se) + 1).find(function(Ze) {
            return mt(Ze);
          }) : $.slice(0, $.indexOf(se)).reverse().find(function(Ze) {
            return mt(Ze);
          }) : b[K + (ue ? 1 : -1)];
        }
      };
    }), o.tabbableGroups = o.containerGroups.filter(function(p) {
      return p.tabbableNodes.length > 0;
    }), o.tabbableGroups.length <= 0 && !d("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (o.containerGroups.find(function(p) {
      return p.posTabIndexesFound;
    }) && o.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, h = function(p) {
    var b = p.activeElement;
    if (b)
      return b.shadowRoot && b.shadowRoot.activeElement !== null ? h(b.shadowRoot) : b;
  }, v = function(p) {
    if (p !== !1 && p !== h(document)) {
      if (!p || !p.focus) {
        v(f());
        return;
      }
      p.focus({
        preventScroll: !!i.preventScroll
      }), o.mostRecentlyFocusedNode = p, yl(p) && p.select();
    }
  }, _ = function(p) {
    var b = d("setReturnFocus", {
      params: [p]
    });
    return b || (b === !1 ? !1 : p);
  }, k = function(p) {
    var b = p.target, $ = p.event, N = p.isBackward, O = N === void 0 ? !1 : N;
    b = b || an($), c();
    var L = null;
    if (o.tabbableGroups.length > 0) {
      var x = u(b, $), R = x >= 0 ? o.containerGroups[x] : void 0;
      if (x < 0)
        O ? L = o.tabbableGroups[o.tabbableGroups.length - 1].lastTabbableNode : L = o.tabbableGroups[0].firstTabbableNode;
      else if (O) {
        var B = o.tabbableGroups.findIndex(function(Dn) {
          var Ln = Dn.firstTabbableNode;
          return b === Ln;
        });
        if (B < 0 && (R.container === b || Vn(b, i.tabbableOptions) && !mt(b, i.tabbableOptions) && !R.nextTabbableNode(b, !1)) && (B = x), B >= 0) {
          var se = B === 0 ? o.tabbableGroups.length - 1 : B - 1, ue = o.tabbableGroups[se];
          L = nt(b) >= 0 ? ue.lastTabbableNode : ue.lastDomTabbableNode;
        } else zt($) || (L = R.nextTabbableNode(b, !1));
      } else {
        var K = o.tabbableGroups.findIndex(function(Dn) {
          var Ln = Dn.lastTabbableNode;
          return b === Ln;
        });
        if (K < 0 && (R.container === b || Vn(b, i.tabbableOptions) && !mt(b, i.tabbableOptions) && !R.nextTabbableNode(b)) && (K = x), K >= 0) {
          var Ze = K === o.tabbableGroups.length - 1 ? 0 : K + 1, Me = o.tabbableGroups[Ze];
          L = nt(b) >= 0 ? Me.firstTabbableNode : Me.firstDomTabbableNode;
        } else zt($) || (L = R.nextTabbableNode(b));
      }
    } else
      L = d("fallbackFocus");
    return L;
  }, E = function(p) {
    var b = an(p);
    if (!(u(b, p) >= 0)) {
      if (Rt(i.clickOutsideDeactivates, p)) {
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
      Rt(i.allowOutsideClick, p) || p.preventDefault();
    }
  }, A = function(p) {
    var b = an(p), $ = u(b, p) >= 0;
    if ($ || b instanceof Document)
      $ && (o.mostRecentlyFocusedNode = b);
    else {
      p.stopImmediatePropagation();
      var N, O = !0;
      if (o.mostRecentlyFocusedNode)
        if (nt(o.mostRecentlyFocusedNode) > 0) {
          var L = u(o.mostRecentlyFocusedNode), x = o.containerGroups[L].tabbableNodes;
          if (x.length > 0) {
            var R = x.findIndex(function(B) {
              return B === o.mostRecentlyFocusedNode;
            });
            R >= 0 && (i.isKeyForward(o.recentNavEvent) ? R + 1 < x.length && (N = x[R + 1], O = !1) : R - 1 >= 0 && (N = x[R - 1], O = !1));
          }
        } else
          o.containerGroups.some(function(B) {
            return B.tabbableNodes.some(function(se) {
              return nt(se) > 0;
            });
          }) || (O = !1);
      else
        O = !1;
      O && (N = k({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: o.mostRecentlyFocusedNode,
        isBackward: i.isKeyBackward(o.recentNavEvent)
      })), v(N || o.mostRecentlyFocusedNode || f());
    }
    o.recentNavEvent = void 0;
  }, P = function(p) {
    var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    o.recentNavEvent = p;
    var $ = k({
      event: p,
      isBackward: b
    });
    $ && (zt(p) && p.preventDefault(), v($));
  }, y = function(p) {
    (i.isKeyForward(p) || i.isKeyBackward(p)) && P(p, i.isKeyBackward(p));
  }, C = function(p) {
    ml(p) && Rt(i.escapeDeactivates, p) !== !1 && (p.preventDefault(), a.deactivate());
  }, V = function(p) {
    var b = an(p);
    u(b, p) >= 0 || Rt(i.clickOutsideDeactivates, p) || Rt(i.allowOutsideClick, p) || (p.preventDefault(), p.stopImmediatePropagation());
  }, T = function() {
    if (o.active)
      return Oe.activateTrap(s, a), o.delayInitialFocusTimer = i.delayInitialFocus ? ti(function() {
        v(f());
      }) : v(f()), r.addEventListener("focusin", A, !0), r.addEventListener("mousedown", E, {
        capture: !0,
        passive: !1
      }), r.addEventListener("touchstart", E, {
        capture: !0,
        passive: !1
      }), r.addEventListener("click", V, {
        capture: !0,
        passive: !1
      }), r.addEventListener("keydown", y, {
        capture: !0,
        passive: !1
      }), r.addEventListener("keydown", C), a;
  }, S = function(p) {
    o.active && !o.paused && a._setSubtreeIsolation(!1), o.adjacentElements.clear(), o.alreadyInert.clear();
    var b = /* @__PURE__ */ new Set(), $ = /* @__PURE__ */ new Set(), N = Jr(p), O;
    try {
      for (N.s(); !(O = N.n()).done; ) {
        var L = O.value;
        b.add(L);
        for (var x = typeof ShadowRoot < "u" && L.getRootNode() instanceof ShadowRoot, R = L; R; ) {
          b.add(R);
          var B = R.parentElement, se = [];
          B ? se = B.children : !B && x && (se = R.getRootNode().children, B = R.getRootNode().host, x = typeof ShadowRoot < "u" && B.getRootNode() instanceof ShadowRoot);
          var ue = Jr(se), K;
          try {
            for (ue.s(); !(K = ue.n()).done; ) {
              var Ze = K.value;
              $.add(Ze);
            }
          } catch (Me) {
            ue.e(Me);
          } finally {
            ue.f();
          }
          R = B;
        }
      }
    } catch (Me) {
      N.e(Me);
    } finally {
      N.f();
    }
    b.forEach(function(Me) {
      $.delete(Me);
    }), o.adjacentElements = $;
  }, I = function() {
    if (o.active)
      return r.removeEventListener("focusin", A, !0), r.removeEventListener("mousedown", E, !0), r.removeEventListener("touchstart", E, !0), r.removeEventListener("click", V, !0), r.removeEventListener("keydown", y, !0), r.removeEventListener("keydown", C), a;
  }, Y = function(p) {
    var b = p.some(function($) {
      var N = Array.from($.removedNodes);
      return N.some(function(O) {
        return O === o.mostRecentlyFocusedNode;
      });
    });
    b && v(f());
  }, w = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(Y) : void 0, j = function() {
    w && (w.disconnect(), o.active && !o.paused && o.containers.map(function(p) {
      w.observe(p, {
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
    activate: function(p) {
      if (o.active)
        return this;
      var b = l(p, "onActivate"), $ = l(p, "onPostActivate"), N = l(p, "checkCanFocusTrap"), O = Oe.getActiveTrap(s), L = !1;
      O && !O.paused && (O._setSubtreeIsolation(!1), L = !0);
      try {
        N || c(), o.active = !0, o.paused = !1, o.nodeFocusedBeforeActivation = h(r), b?.();
        var x = function() {
          N && c(), T(), j(), i.isolateSubtrees && a._setSubtreeIsolation(!0), $?.();
        };
        if (N)
          return N(o.containers.concat()).then(x, x), this;
        x();
      } catch (R) {
        throw O === Oe.getActiveTrap(s) && L && O._setSubtreeIsolation(!0), R;
      }
      return this;
    },
    deactivate: function(p) {
      if (!o.active)
        return this;
      var b = ei({
        onDeactivate: i.onDeactivate,
        onPostDeactivate: i.onPostDeactivate,
        checkCanReturnFocus: i.checkCanReturnFocus
      }, p);
      clearTimeout(o.delayInitialFocusTimer), o.delayInitialFocusTimer = void 0, o.paused || a._setSubtreeIsolation(!1), o.alreadyInert.clear(), I(), o.active = !1, o.paused = !1, j(), Oe.deactivateTrap(s, a);
      var $ = l(b, "onDeactivate"), N = l(b, "onPostDeactivate"), O = l(b, "checkCanReturnFocus"), L = l(b, "returnFocus", "returnFocusOnDeactivate");
      $?.();
      var x = function() {
        ti(function() {
          L && v(_(o.nodeFocusedBeforeActivation)), N?.();
        });
      };
      return L && O ? (O(_(o.nodeFocusedBeforeActivation)).then(x, x), this) : (x(), this);
    },
    pause: function(p) {
      return o.active ? (o.manuallyPaused = !0, this._setPausedState(!0, p)) : this;
    },
    unpause: function(p) {
      return o.active ? (o.manuallyPaused = !1, s[s.length - 1] !== this ? this : this._setPausedState(!1, p)) : this;
    },
    updateContainerElements: function(p) {
      var b = [].concat(p).filter(Boolean);
      return o.containers = b.map(function($) {
        return typeof $ == "string" ? r.querySelector($) : $;
      }), i.isolateSubtrees && S(o.containers), o.active && (c(), i.isolateSubtrees && !o.paused && a._setSubtreeIsolation(!0)), j(), this;
    }
  }, Object.defineProperties(a, {
    _isManuallyPaused: {
      value: function() {
        return o.manuallyPaused;
      }
    },
    _setPausedState: {
      value: function(p, b) {
        if (o.paused === p)
          return this;
        if (o.paused = p, p) {
          var $ = l(b, "onPause"), N = l(b, "onPostPause");
          $?.(), I(), j(), a._setSubtreeIsolation(!1), N?.();
        } else {
          var O = l(b, "onUnpause"), L = l(b, "onPostUnpause");
          O?.(), a._setSubtreeIsolation(!0), c(), T(), j(), L?.();
        }
        return this;
      }
    },
    _setSubtreeIsolation: {
      value: function(p) {
        i.isolateSubtrees && o.adjacentElements.forEach(function(b) {
          if (p) {
            var $ = b.inert || b.hasAttribute("inert");
            $ && o.alreadyInert.add(b), b.inert = !0;
          } else
            o.alreadyInert.has(b) || (b.inert = !1);
        });
      }
    }
  }), a.updateContainerElements(t), a;
};
const kl = ((e, t = {}) => {
  let n = H;
  const r = (s) => {
    n();
    const i = $l(e, {
      returnFocusOnDeactivate: !1,
      allowOutsideClick: !0,
      escapeDeactivates: !1,
      clickOutsideDeactivates: !1,
      ...s
    });
    n = i.deactivate, i.activate();
  };
  return r(t), { destroy: n, update: r };
}), Sl = ((e, t) => {
  let n = H;
  function r(s) {
    n();
    const { onClose: i, shouldCloseOnInteractOutside: o, closeOnInteractOutside: a } = s;
    function l() {
      i?.();
    }
    function u(f) {
      const c = f.target;
      Sr(c) && f.stopImmediatePropagation();
    }
    function d(f) {
      o?.(f) && (f.stopImmediatePropagation(), l());
    }
    n = Al(e, {
      onInteractOutsideStart: u,
      onInteractOutside: a ? d : void 0,
      enabled: a
    }).destroy;
  }
  return r(t), {
    update: r,
    destroy() {
      n();
    }
  };
}), Tl = ((e, t = "body") => {
  let n;
  if (!Re(t) && typeof t != "string")
    return {
      destroy: H
    };
  async function r(i = "body") {
    if (t = i, typeof t == "string") {
      if (n = document.querySelector(t), n === null && (await Hi(), n = document.querySelector(t)), n === null)
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
}), lr = /* @__PURE__ */ new Set(), Al = ((e, t = {}) => {
  let n = H, r = H, s = H, i = H;
  lr.add(e);
  const o = Va(e);
  let a = !1, l = !1;
  const u = {
    pointerdown: !1,
    pointerup: !1,
    mousedown: !1,
    mouseup: !1,
    touchstart: !1,
    touchend: !1,
    click: !1
  }, d = () => {
    for (const E in u)
      u[E] = !1;
  }, f = () => {
    for (const E of Object.values(u))
      if (E)
        return !0;
    return !1;
  }, c = (E, A) => sr(o, E, (P) => {
    u[E] = !0, A?.(P);
  }, !0), h = (E, A) => sr(o, E, (P) => {
    u[E] = !1;
    const y = {};
    Re(P.target) && Ea(P.target.shadowRoot) && (y.shadowTarget = P.composedPath()[0]), A?.(P, y);
  });
  function v(E) {
    n(), r(), s(), i(), d();
    const { onInteractOutside: A, onInteractOutsideStart: P, enabled: y } = { enabled: !0, ...E };
    if (!y)
      return;
    let C = !1;
    const V = zn((Y, w) => {
      if (!C || f())
        return;
      A && ni(Y, e) && P?.(Y);
      const j = w?.shadowTarget ? w.shadowTarget : Y.target;
      Sr(j) && fs(e, j) && (l = !0), a = !0;
    }, 10);
    r = V.destroy;
    const T = zn((Y) => {
      C && !f() && _(Y) && A?.(Y), k();
    }, 10);
    s = T.destroy;
    const S = zn(d, 20);
    i = S.destroy;
    const I = () => {
      C = xl(e);
    };
    n = mn(
      /** Capture Events For Interaction Start */
      c("pointerdown", I),
      c("mousedown", I),
      c("touchstart", I),
      /**
       * Intercepted events are reset only at the end of an interaction, allowing
       * interception at the start while still capturing the entire interaction.
       * Additionally, intercepted events are reset in the capture phase with `resetInterceptedEventsDebounced`,
       * accommodating events not invoked in the bubbling phase due to user interception.
       */
      c("pointerup", S),
      c("mouseup", S),
      c("touchend", S),
      c("click", S),
      /** Bubbling Events For Interaction Start */
      h("pointerdown", V),
      h("mousedown", V),
      h("touchstart", V),
      /**
       * To effectively detect an end of an interaction, we must monitor all relevant events,
       * not just `click` events. This is because on touch devices, actions like pressing,
       * moving the finger, and lifting it off the screen may not trigger a `click` event,
       * but should still invoke `onPointerUp` to properly handle the interaction.
       */
      h("pointerup", T),
      h("mouseup", T),
      h("touchend", T),
      h("click", T)
    );
  }
  function _(E) {
    return !!(a && !l && ni(E, e));
  }
  function k() {
    a = !1, l = !1;
  }
  return v(t), {
    update: v,
    destroy() {
      n(), r(), s(), i(), lr.delete(e);
    }
  };
});
function ni(e, t) {
  if ("button" in e && e.button > 0)
    return !1;
  const n = e.target;
  if (!Sr(n))
    return !1;
  const r = n.ownerDocument;
  return !r || !r.documentElement.contains(n) ? !1 : t && !fs(t, n);
}
function xl(e) {
  return Array.from(lr).at(-1) === e;
}
const Ol = {
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
  ...as(Ol, "isDateDisabled", "isDateUnavailable", "value", "locale", "disabled", "readonly", "minValue", "maxValue", "weekdayFormat")
});
const { name: tt } = wa("dialog"), Nl = {
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
}, Il = ["content", "title", "description"];
function Pl(e) {
  const t = { ...Nl, ...e }, n = Gr(as(t, "ids")), { preventScroll: r, escapeBehavior: s, closeOnOutsideClick: i, role: o, portal: a, forceVisible: l, openFocus: u, closeFocus: d, onOutsideClick: f } = n, c = Pt.writable(null), h = Gr({
    ...Ca(Il),
    ...t.ids
  }), v = t.open ?? Rn(t.defaultOpen), _ = xa(v, t?.onOpenChange), k = kr([_, l], ([w, j]) => w || j);
  let E = H;
  function A(w) {
    const j = w.currentTarget, m = w.currentTarget;
    !Re(j) || !Re(m) || (_.set(!0), c.set(m));
  }
  function P() {
    _.set(!1);
  }
  const y = Be(tt("trigger"), {
    stores: [_],
    returned: ([w]) => ({
      "aria-haspopup": "dialog",
      "aria-expanded": w,
      type: "button"
    }),
    action: (w) => ({
      destroy: mn(on(w, "click", (m) => {
        A(m);
      }), on(w, "keydown", (m) => {
        m.key !== Lt.ENTER && m.key !== Lt.SPACE || (m.preventDefault(), A(m));
      }))
    })
  }), C = Be(tt("overlay"), {
    stores: [k, _],
    returned: ([w, j]) => ({
      hidden: w ? void 0 : !0,
      tabindex: -1,
      style: w ? void 0 : ir({ display: "none" }),
      "aria-hidden": !0,
      "data-state": j ? "open" : "closed"
    })
  }), V = Be(tt("content"), {
    stores: [k, h.content, h.description, h.title, _],
    returned: ([w, j, m, p, b]) => ({
      id: j,
      role: o.get(),
      "aria-describedby": m,
      "aria-labelledby": p,
      "aria-modal": w ? "true" : void 0,
      "data-state": b ? "open" : "closed",
      tabindex: -1,
      hidden: w ? void 0 : !0,
      style: w ? void 0 : ir({ display: "none" })
    }),
    action: (w) => {
      let j = H, m = H, p = H;
      const b = Mt([k, i], ([$, N]) => {
        m(), j(), p(), $ && (m = Sl(w, {
          closeOnInteractOutside: N,
          onClose: P,
          shouldCloseOnInteractOutside(O) {
            return f.get()?.(O), !O.defaultPrevented;
          }
        }).destroy, j = Ka(w, {
          handler: P,
          behaviorType: s
        }).destroy, p = kl(w, { fallbackFocus: w }).destroy);
      });
      return {
        destroy: () => {
          E(), b(), m(), j(), p();
        }
      };
    }
  }), T = Be(tt("portalled"), {
    stores: a,
    returned: (w) => ({
      "data-portal": ga(w)
    }),
    action: (w) => {
      const j = Mt([a], ([m]) => {
        if (m === null)
          return H;
        const p = Ua(w, m);
        return p === null ? H : Tl(w, p).destroy;
      });
      return {
        destroy() {
          j();
        }
      };
    }
  }), S = Be(tt("title"), {
    stores: [h.title],
    returned: ([w]) => ({
      id: w
    })
  }), I = Be(tt("description"), {
    stores: [h.description],
    returned: ([w]) => ({
      id: w
    })
  }), Y = Be(tt("close"), {
    returned: () => ({
      type: "button"
    }),
    action: (w) => ({
      destroy: mn(on(w, "click", () => {
        P();
      }), on(w, "keydown", (m) => {
        m.key !== Lt.SPACE && m.key !== Lt.ENTER || (m.preventDefault(), P());
      }))
    })
  });
  return Mt([_, r], ([w, j]) => {
    if (Yr) {
      if (j && w && (E = Ba()), w) {
        const m = document.getElementById(h.content.get());
        Xr({ prop: u.get(), defaultEl: m });
      }
      return () => {
        l.get() || E();
      };
    }
  }), Mt(_, (w) => {
    !Yr || w || Xr({
      prop: d.get(),
      defaultEl: c.get()
    });
  }, { skipFirstRun: !0 }), {
    ids: h,
    elements: {
      content: V,
      trigger: y,
      title: S,
      description: I,
      overlay: C,
      close: Y,
      portalled: T
    },
    states: {
      open: _
    },
    options: n
  };
}
var Cl = /* @__PURE__ */ bt('<div><div></div> <div><div class="modal-header svelte-1nq4m1y"><h3> </h3></div> <div class="modal-body svelte-1nq4m1y"><p> </p> <div class="feature-list svelte-1nq4m1y"><p class="svelte-1nq4m1y">This modal demonstrates Svelte + Melt UI integration:</p> <ul class="svelte-1nq4m1y"><li class="svelte-1nq4m1y">✅ Melt UI headless components</li> <li class="svelte-1nq4m1y">✅ Svelte 5 runes ($bindable, $state)</li> <li class="svelte-1nq4m1y">✅ Automatic accessibility (ARIA)</li> <li class="svelte-1nq4m1y">✅ Automatic focus trap</li> <li class="svelte-1nq4m1y">✅ ESC key to close</li> <li class="svelte-1nq4m1y">✅ Click outside to close</li> <li class="svelte-1nq4m1y">✅ Smooth animations</li></ul></div></div> <div class="modal-actions svelte-1nq4m1y"><button>Close</button></div></div></div>'), Rl = /* @__PURE__ */ bt('<div class="container svelte-1nq4m1y"><button>Open Svelte Modal</button> <!></div>');
const Fl = {
  hash: "svelte-1nq4m1y",
  code: `
  /* Container */.container.svelte-1nq4m1y {display:inline-block;}

  /* Open Button */.open-button.svelte-1nq4m1y {padding:0.75rem 1.5rem;background-color:#ef4444;color:white;border:none;border-radius:8px;font-size:1rem;font-weight:500;cursor:pointer;transition:background-color 0.2s;}.open-button.svelte-1nq4m1y:hover {background-color:#dc2626;}.open-button.svelte-1nq4m1y:focus {outline:2px solid #ef4444;outline-offset:2px;}

  /* Overlay */.overlay.svelte-1nq4m1y {position:fixed;inset:0;z-index:50;background-color:rgba(0, 0, 0, 0.5);
    animation: svelte-1nq4m1y-fadeIn 0.2s ease-out;}

  /* Modal Content */.modal-content.svelte-1nq4m1y {position:fixed;left:50%;top:50%;z-index:50;transform:translate(-50%, -50%);max-width:28rem;width:90%;max-height:85vh;overflow-y:auto;border-radius:12px;background-color:white;padding:1.5rem;box-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    animation: svelte-1nq4m1y-slideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);}

  /* Animations */
  @keyframes svelte-1nq4m1y-slideIn {
    from {
      opacity: 0;
      transform: translate(-50%, -48%) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }

  @keyframes svelte-1nq4m1y-fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Modal Header */.modal-header.svelte-1nq4m1y {margin-bottom:1rem;}.modal-title.svelte-1nq4m1y {font-size:1.5rem;font-weight:700;color:#111827;margin:0;}

  /* Modal Body */.modal-body.svelte-1nq4m1y {margin-top:0.5rem;}.modal-description.svelte-1nq4m1y {font-size:0.875rem;color:#6b7280;margin:0 0 1rem 0;}.feature-list.svelte-1nq4m1y {margin-top:1rem;}.feature-list.svelte-1nq4m1y p:where(.svelte-1nq4m1y) {margin:0 0 0.75rem 0;color:#374151;line-height:1.6;}.feature-list.svelte-1nq4m1y ul:where(.svelte-1nq4m1y) {margin:0;padding-left:1.5rem;color:#374151;line-height:1.8;}.feature-list.svelte-1nq4m1y li:where(.svelte-1nq4m1y) {margin-bottom:0.25rem;}

  /* Modal Actions */.modal-actions.svelte-1nq4m1y {margin-top:1.5rem;display:flex;gap:0.75rem;justify-content:flex-end;}.close-button.svelte-1nq4m1y {padding:0.625rem 1.25rem;background-color:#ef4444;color:white;border:none;border-radius:6px;font-size:0.875rem;font-weight:500;cursor:pointer;transition:background-color 0.2s;}.close-button.svelte-1nq4m1y:hover {background-color:#dc2626;}.close-button.svelte-1nq4m1y:focus {outline:2px solid #ef4444;outline-offset:2px;}

  /* Responsive */
  @media (max-width: 640px) {.modal-content.svelte-1nq4m1y {max-width:90vw;padding:1.25rem;}.modal-title.svelte-1nq4m1y {font-size:1.25rem;}
  }`
};
function Dl(e, t) {
  Xt(t, !0), Cn(e, Fl);
  const n = () => qe(_, "$trigger", d), r = () => qe(C, "$portalled", d), s = () => qe(k, "$overlay", d), i = () => qe(E, "$content", d), o = () => qe(A, "$titleEl", d), a = () => qe(P, "$descriptionEl", d), l = () => qe(y, "$close", d), u = () => qe(V, "$open", d), [d, f] = da();
  let c = fe(t, "title", 15, "Svelte Modal"), h = fe(t, "description", 15, "This is a modal dialog built with Svelte and Melt UI."), v = fe(t, "onbuttonclick", 15, "");
  const {
    elements: {
      trigger: _,
      overlay: k,
      content: E,
      title: A,
      description: P,
      close: y,
      portalled: C
    },
    states: { open: V }
  } = Pl({
    forceVisible: !0,
    onOpenChange: ({ next: m }) => {
      if (m && v())
        try {
          new Function(v())();
        } catch (p) {
          console.error("Error executing onbuttonclick:", p);
        }
      return m;
    }
  });
  var T = {
    get title() {
      return c();
    },
    set title(m = "Svelte Modal") {
      c(m), ie();
    },
    get description() {
      return h();
    },
    set description(m = "This is a modal dialog built with Svelte and Melt UI.") {
      h(m), ie();
    },
    get onbuttonclick() {
      return v();
    },
    set onbuttonclick(m = "") {
      v(m), ie();
    }
  }, S = Rl(), I = Q(S);
  et(I, () => ({ type: "button", class: "open-button", ...n() }), void 0, void 0, void 0, "svelte-1nq4m1y"), Qe(I, (m) => n().action?.(m));
  var Y = Ie(I, 2);
  {
    var w = (m) => {
      var p = Cl();
      et(p, () => ({ ...r() }), void 0, void 0, void 0, "svelte-1nq4m1y");
      var b = Q(p);
      et(b, () => ({ ...s(), class: "overlay" }), void 0, void 0, void 0, "svelte-1nq4m1y"), Qe(b, (K) => s().action?.(K));
      var $ = Ie(b, 2);
      et($, () => ({ ...i(), class: "modal-content" }), void 0, void 0, void 0, "svelte-1nq4m1y");
      var N = Q($), O = Q(N);
      et(O, () => ({ ...o(), class: "modal-title" }), void 0, void 0, void 0, "svelte-1nq4m1y");
      var L = Q(O, !0);
      Z(O), Qe(O, (K) => o().action?.(K)), Z(N);
      var x = Ie(N, 2), R = Q(x);
      et(R, () => ({ ...a(), class: "modal-description" }), void 0, void 0, void 0, "svelte-1nq4m1y");
      var B = Q(R, !0);
      Z(R), Qe(R, (K) => a().action?.(K)), vi(2), Z(x);
      var se = Ie(x, 2), ue = Q(se);
      et(ue, () => ({ type: "button", class: "close-button", ...l() }), void 0, void 0, void 0, "svelte-1nq4m1y"), Qe(ue, (K) => l().action?.(K)), Z(se), Z($), Qe($, (K) => i().action?.(K)), Z(p), Qe(p, (K) => r().action?.(K)), Kt(() => {
        Nt(L, c()), Nt(B, h());
      }), We(m, p);
    };
    Ji(Y, (m) => {
      u() && m(w);
    });
  }
  Z(S), We(e, S);
  var j = Zt(T);
  return f(), j;
}
customElements.define("svelte-modal", Fn(Dl, { title: {}, description: {}, onbuttonclick: {} }, [], [], !0));
var Ll = /* @__PURE__ */ bt('<button type="button"> </button>');
const Ml = {
  hash: "svelte-js2n8k",
  code: ".button.svelte-js2n8k {display:inline-flex;align-items:center;justify-content:center;padding:0.5rem 1rem;font-size:1rem;font-weight:500;border:none;border-radius:0.375rem;cursor:pointer;transition:all 0.2s ease-in-out;font-family:inherit;}.button.svelte-js2n8k:disabled {opacity:0.5;cursor:not-allowed;}.button.svelte-js2n8k:not(:disabled):hover {transform:translateY(-1px);box-shadow:0 4px 6px rgba(0, 0, 0, 0.1);}.button.svelte-js2n8k:not(:disabled):active {transform:translateY(0);}.button--primary.svelte-js2n8k {background-color:#3b82f6;color:white;}.button--primary.svelte-js2n8k:not(:disabled):hover {background-color:#2563eb;}.button--secondary.svelte-js2n8k {background-color:#6b7280;color:white;}.button--secondary.svelte-js2n8k:not(:disabled):hover {background-color:#4b5563;}.button--success.svelte-js2n8k {background-color:#10b981;color:white;}.button--success.svelte-js2n8k:not(:disabled):hover {background-color:#059669;}.button--danger.svelte-js2n8k {background-color:#ef4444;color:white;}.button--danger.svelte-js2n8k:not(:disabled):hover {background-color:#dc2626;}.button--small.svelte-js2n8k {padding:0.25rem 0.75rem;font-size:0.875rem;}.button--large.svelte-js2n8k {padding:0.75rem 1.5rem;font-size:1.125rem;}"
};
function jl(e, t) {
  Xt(t, !0), Cn(e, Ml);
  let n = fe(t, "label", 15, "Button"), r = fe(t, "variant", 15, "primary"), s = fe(t, "size", 15, "medium"), i = fe(t, "disabled", 15, !1), o = fe(t, "onbuttonclick", 15, "");
  function a() {
    const c = ["button"];
    return c.push(`button--${r()}`), s() !== "medium" && c.push(`button--${s()}`), c.join(" ");
  }
  function l() {
    if (!i() && o())
      try {
        new Function(o())();
      } catch (c) {
        console.error("Error executing onbuttonclick:", c);
      }
  }
  var u = {
    get label() {
      return n();
    },
    set label(c = "Button") {
      n(c), ie();
    },
    get variant() {
      return r();
    },
    set variant(c = "primary") {
      r(c), ie();
    },
    get size() {
      return s();
    },
    set size(c = "medium") {
      s(c), ie();
    },
    get disabled() {
      return i();
    },
    set disabled(c = !1) {
      i(c), ie();
    },
    get onbuttonclick() {
      return o();
    },
    set onbuttonclick(c = "") {
      o(c), ie();
    }
  }, d = Ll();
  d.__click = l;
  var f = Q(d, !0);
  return Z(d), Kt(
    (c) => {
      wt(d, 1, c, "svelte-js2n8k"), d.disabled = i(), Nt(f, n());
    },
    [() => es(a())]
  ), We(e, d), Zt(u);
}
Pn(["click"]);
customElements.define("svelte-button", Fn(
  jl,
  {
    label: {},
    variant: {},
    size: {},
    disabled: {},
    onbuttonclick: {}
  },
  [],
  [],
  !0
));
var ql = /* @__PURE__ */ bt("<div> </div>"), Bl = /* @__PURE__ */ bt('<div class="dropdown__menu svelte-wpr3yy"></div>'), zl = /* @__PURE__ */ bt('<div class="dropdown svelte-wpr3yy"><button type="button"><span> </span> <span></span></button> <!></div>');
const Ul = {
  hash: "svelte-wpr3yy",
  code: ".dropdown.svelte-wpr3yy {position:relative;display:inline-block;width:100%;max-width:300px;}.dropdown__button.svelte-wpr3yy {width:100%;padding:0.5rem 2.5rem 0.5rem 1rem;font-size:1rem;background-color:white;border:1px solid #d1d5db;border-radius:0.375rem;cursor:pointer;display:flex;align-items:center;justify-content:space-between;transition:all 0.2s ease-in-out;position:relative;}.dropdown__button.svelte-wpr3yy:hover {border-color:#9ca3af;}.dropdown__button.svelte-wpr3yy:focus {outline:none;border-color:#3b82f6;box-shadow:0 0 0 3px rgba(59, 130, 246, 0.1);}.dropdown__button--disabled.svelte-wpr3yy {opacity:0.5;cursor:not-allowed;}.dropdown__arrow.svelte-wpr3yy {position:absolute;right:1rem;width:0;height:0;border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid #6b7280;transition:transform 0.2s ease-in-out;}.dropdown__arrow--open.svelte-wpr3yy {transform:rotate(180deg);}.dropdown__menu.svelte-wpr3yy {position:absolute;top:calc(100% + 0.25rem);left:0;right:0;background-color:white;border:1px solid #d1d5db;border-radius:0.375rem;box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1);max-height:300px;overflow-y:auto;z-index:10;}.dropdown__item.svelte-wpr3yy {padding:0.5rem 1rem;cursor:pointer;transition:background-color 0.2s ease-in-out;}.dropdown__item.svelte-wpr3yy:hover {background-color:#f3f4f6;}.dropdown__item--selected.svelte-wpr3yy {background-color:#eff6ff;color:#3b82f6;font-weight:500;}.dropdown__placeholder.svelte-wpr3yy {color:#9ca3af;}"
};
function Vl(e, t) {
  Xt(t, !0), Cn(e, Ul);
  let n = fe(t, "options", 31, () => Ne([])), r = fe(t, "selected", 15, ""), s = fe(t, "placeholder", 15, "Select an option"), i = fe(t, "disabled", 15, !1), o = /* @__PURE__ */ _e(!1), a = /* @__PURE__ */ _e(Ne([]));
  pn(() => {
    if (typeof n() == "string")
      try {
        const y = JSON.parse(n());
        W(a, Array.isArray(y) ? y : [], !0);
      } catch (y) {
        console.error("Failed to parse options JSON:", y), W(a, [], !0);
      }
    else Array.isArray(n()) ? W(a, n(), !0) : W(a, [], !0);
  });
  function l() {
    i() || W(o, !q(o));
  }
  function u(y) {
    i() || (r(y.value), W(o, !1));
  }
  function d() {
    const y = q(a).find((C) => C.value === r());
    return y ? y.label : s();
  }
  let f;
  pn(() => {
    if (q(o)) {
      const y = (C) => {
        f && !f.contains(C.target) && W(o, !1);
      };
      return document.addEventListener("click", y), () => {
        document.removeEventListener("click", y);
      };
    }
  });
  var c = {
    get options() {
      return n();
    },
    set options(y = []) {
      n(y), ie();
    },
    get selected() {
      return r();
    },
    set selected(y = "") {
      r(y), ie();
    },
    get placeholder() {
      return s();
    },
    set placeholder(y = "Select an option") {
      s(y), ie();
    },
    get disabled() {
      return i();
    },
    set disabled(y = !1) {
      i(y), ie();
    }
  }, h = zl(), v = Q(h);
  v.__click = l;
  var _ = Q(v), k = Q(_, !0);
  Z(_);
  var E = Ie(_, 2);
  Z(v);
  var A = Ie(v, 2);
  {
    var P = (y) => {
      var C = Bl();
      Zo(C, 21, () => q(a), Go, (V, T) => {
        var S = ql();
        S.__click = () => u(q(T));
        var I = Q(S, !0);
        Z(S), Kt(() => {
          wt(S, 1, `dropdown__item ${q(T).value === r() ? "dropdown__item--selected" : ""}`, "svelte-wpr3yy"), Nt(I, q(T).label);
        }), We(V, S);
      }), Z(C), We(y, C);
    };
    Ji(A, (y) => {
      q(o) && y(P);
    });
  }
  return Z(h), fa(h, (y) => f = y, () => f), Kt(
    (y, C) => {
      wt(v, 1, `dropdown__button ${i() ? "dropdown__button--disabled" : ""}`, "svelte-wpr3yy"), v.disabled = i(), wt(_, 1, y, "svelte-wpr3yy"), Nt(k, C), wt(E, 1, `dropdown__arrow ${q(o) ? "dropdown__arrow--open" : ""}`, "svelte-wpr3yy");
    },
    [
      () => q(a).find((y) => y.value === r()) ? "" : "dropdown__placeholder",
      d
    ]
  ), We(e, h), Zt(c);
}
Pn(["click"]);
customElements.define("svelte-dropdown", Fn(Vl, { options: {}, selected: {}, placeholder: {}, disabled: {} }, [], [], !0));
