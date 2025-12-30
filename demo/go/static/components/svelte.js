typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
const ws = 1, Es = 2, $s = 16, ks = 1, Ss = 4, Ts = 8, As = 16, xs = 1, Os = 2, si = "[", Tn = "[!", cr = "]", kt = {}, W = /* @__PURE__ */ Symbol(), Ns = /* @__PURE__ */ Symbol("filename"), Is = "http://www.w3.org/1999/xhtml", Ps = "@attach", Ar = globalThis.process?.env?.NODE_ENV, g = Ar && !Ar.toLowerCase().startsWith("prod");
var fr = Array.isArray, Cs = Array.prototype.indexOf, An = Array.from, dn = Object.keys, Ee = Object.defineProperty, Ve = Object.getOwnPropertyDescriptor, Rs = Object.getOwnPropertyDescriptors, Fs = Object.prototype, Ds = Array.prototype, oi = Object.getPrototypeOf, xr = Object.isExtensible;
const Ke = () => {
};
function ai(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function li() {
  var e, t, n = new Promise((r, i) => {
    e = r, t = i;
  });
  return { promise: n, resolve: e, reject: t };
}
const G = 2, dr = 4, vr = 8, ui = 1 << 24, Me = 16, je = 32, Xe = 64, xn = 128, $e = 512, Q = 1024, ce = 2048, Ae = 4096, ve = 8192, Re = 16384, On = 32768, St = 65536, vn = 1 << 17, ci = 1 << 18, ct = 1 << 19, Ls = 1 << 20, Ue = 1 << 25, Ge = 32768, Yn = 1 << 21, Nn = 1 << 22, He = 1 << 23, Ye = /* @__PURE__ */ Symbol("$state"), fi = /* @__PURE__ */ Symbol("legacy props"), Ms = /* @__PURE__ */ Symbol(""), di = /* @__PURE__ */ Symbol("proxy path"), wt = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), hr = 3, Ct = 8;
function vi(e) {
  if (g) {
    const t = new Error(`lifecycle_outside_component
\`${e}(...)\` can only be used during component initialisation
https://svelte.dev/e/lifecycle_outside_component`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function js() {
  if (g) {
    const e = new Error("async_derived_orphan\nCannot create a `$derived(...)` with an `await` expression outside of an effect tree\nhttps://svelte.dev/e/async_derived_orphan");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function qs() {
  if (g) {
    const e = new Error(`derived_references_self
A derived value cannot reference itself recursively
https://svelte.dev/e/derived_references_self`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/derived_references_self");
}
function Bs(e) {
  if (g) {
    const t = new Error(`effect_in_teardown
\`${e}\` cannot be used inside an effect cleanup function
https://svelte.dev/e/effect_in_teardown`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function zs() {
  if (g) {
    const e = new Error("effect_in_unowned_derived\nEffect cannot be created inside a `$derived` value that was not itself created inside an effect\nhttps://svelte.dev/e/effect_in_unowned_derived");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Us(e) {
  if (g) {
    const t = new Error(`effect_orphan
\`${e}\` can only be used inside an effect (e.g. during component initialisation)
https://svelte.dev/e/effect_orphan`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/effect_orphan");
}
function Vs() {
  if (g) {
    const e = new Error(`effect_update_depth_exceeded
Maximum update depth exceeded. This typically indicates that an effect reads and writes the same piece of state
https://svelte.dev/e/effect_update_depth_exceeded`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ks() {
  if (g) {
    const e = new Error(`hydration_failed
Failed to hydrate the application
https://svelte.dev/e/hydration_failed`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/hydration_failed");
}
function Hs(e) {
  if (g) {
    const t = new Error(`props_invalid_value
Cannot do \`bind:${e}={undefined}\` when \`${e}\` has a fallback value
https://svelte.dev/e/props_invalid_value`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Ys(e) {
  if (g) {
    const t = new Error(`rune_outside_svelte
The \`${e}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files
https://svelte.dev/e/rune_outside_svelte`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/rune_outside_svelte");
}
function Ws() {
  if (g) {
    const e = new Error("state_descriptors_fixed\nProperty descriptors defined on `$state` objects must contain `value` and always be `enumerable`, `configurable` and `writable`.\nhttps://svelte.dev/e/state_descriptors_fixed");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Gs() {
  if (g) {
    const e = new Error("state_prototype_fixed\nCannot set prototype of `$state` object\nhttps://svelte.dev/e/state_prototype_fixed");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Xs() {
  if (g) {
    const e = new Error("state_unsafe_mutation\nUpdating state inside `$derived(...)`, `$inspect(...)` or a template expression is forbidden. If the value should not be reactive, declare it without `$state`\nhttps://svelte.dev/e/state_unsafe_mutation");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Js() {
  if (g) {
    const e = new Error("svelte_boundary_reset_onerror\nA `<svelte:boundary>` `reset` function cannot be called while an error is still being handled\nhttps://svelte.dev/e/svelte_boundary_reset_onerror");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
var ft = "font-weight: bold", dt = "font-weight: normal";
function Zs(e, t, n) {
  g ? console.warn(`%c[svelte] hydration_attribute_changed
%cThe \`${e}\` attribute on \`${t}\` changed its value between server and client renders. The client value, \`${n}\`, will be ignored in favour of the server value
https://svelte.dev/e/hydration_attribute_changed`, ft, dt) : console.warn("https://svelte.dev/e/hydration_attribute_changed");
}
function In(e) {
  g ? console.warn(
    `%c[svelte] hydration_mismatch
%cHydration failed because the initial UI does not match what was rendered on the server
https://svelte.dev/e/hydration_mismatch`,
    ft,
    dt
  ) : console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Qs() {
  g ? console.warn(`%c[svelte] lifecycle_double_unmount
%cTried to unmount a component that was not mounted
https://svelte.dev/e/lifecycle_double_unmount`, ft, dt) : console.warn("https://svelte.dev/e/lifecycle_double_unmount");
}
function eo() {
  g ? console.warn("%c[svelte] select_multiple_invalid_value\n%cThe `value` property of a `<select multiple>` element should be an array, but it received a non-array value. The selection will be kept as is.\nhttps://svelte.dev/e/select_multiple_invalid_value", ft, dt) : console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function qn(e) {
  g ? console.warn(`%c[svelte] state_proxy_equality_mismatch
%cReactive \`$state(...)\` proxies and the values they proxy have different identities. Because of this, comparisons with \`${e}\` will produce unexpected results
https://svelte.dev/e/state_proxy_equality_mismatch`, ft, dt) : console.warn("https://svelte.dev/e/state_proxy_equality_mismatch");
}
function to() {
  g ? console.warn(`%c[svelte] state_proxy_unmount
%cTried to unmount a state proxy, rather than a component
https://svelte.dev/e/state_proxy_unmount`, ft, dt) : console.warn("https://svelte.dev/e/state_proxy_unmount");
}
function no() {
  g ? console.warn("%c[svelte] svelte_boundary_reset_noop\n%cA `<svelte:boundary>` `reset` function only resets the boundary the first time it is called\nhttps://svelte.dev/e/svelte_boundary_reset_noop", ft, dt) : console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let L = !1;
function ye(e) {
  L = e;
}
let z;
function ue(e) {
  if (e === null)
    throw In(), kt;
  return z = e;
}
function Gt() {
  return ue(/* @__PURE__ */ xe(z));
}
function X(e) {
  if (L) {
    if (/* @__PURE__ */ xe(z) !== null)
      throw In(), kt;
    z = e;
  }
}
function hi(e = 1) {
  if (L) {
    for (var t = e, n = z; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ xe(n);
    z = n;
  }
}
function hn(e = !0) {
  for (var t = 0, n = z; ; ) {
    if (n.nodeType === Ct) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === cr) {
        if (t === 0) return n;
        t -= 1;
      } else (r === si || r === Tn) && (t += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ xe(n)
    );
    e && n.remove(), n = i;
  }
}
function pi(e) {
  if (!e || e.nodeType !== Ct)
    throw In(), kt;
  return (
    /** @type {Comment} */
    e.data
  );
}
function bi(e) {
  return e === this.v;
}
function _i(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function yi(e) {
  return !_i(e, this.v);
}
let ro = !1;
function Se(e, t) {
  return e.label = t, gi(e.v, t), e;
}
function gi(e, t) {
  return e?.[di]?.(t), e;
}
function io(e) {
  const t = new Error(), n = so();
  return n.length === 0 ? null : (n.unshift(`
`), Ee(t, "stack", {
    value: n.join(`
`)
  }), Ee(t, "name", {
    value: e
  }), /** @type {Error & { stack: string }} */
  t);
}
function so() {
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
let ee = null;
function Tt(e) {
  ee = e;
}
let At = null;
function pn(e) {
  At = e;
}
let Xt = null;
function Or(e) {
  Xt = e;
}
function Jt(e, t = !1, n) {
  ee = {
    p: ee,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  }, g && (ee.function = n, Xt = n);
}
function Zt(e) {
  var t = (
    /** @type {ComponentContext} */
    ee
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      Di(r);
  }
  return e !== void 0 && (t.x = e), t.i = !0, ee = t.p, g && (Xt = ee?.function ?? null), e ?? /** @type {T} */
  {};
}
function mi() {
  return !0;
}
let nt = [];
function wi() {
  var e = nt;
  nt = [], ai(e);
}
function vt(e) {
  if (nt.length === 0 && !Bt) {
    var t = nt;
    queueMicrotask(() => {
      t === nt && wi();
    });
  }
  nt.push(e);
}
function oo() {
  for (; nt.length > 0; )
    wi();
}
const Wn = /* @__PURE__ */ new WeakMap();
function Ei(e) {
  var t = j;
  if (t === null)
    return M.f |= He, e;
  if (g && e instanceof Error && !Wn.has(e) && Wn.set(e, ao(e, t)), (t.f & On) === 0) {
    if ((t.f & xn) === 0)
      throw g && !t.parent && e instanceof Error && $i(e), e;
    t.b.error(e);
  } else
    xt(e, t);
}
function xt(e, t) {
  for (; t !== null; ) {
    if ((t.f & xn) !== 0)
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    t = t.parent;
  }
  throw g && e instanceof Error && $i(e), e;
}
function ao(e, t) {
  const n = Ve(e, "message");
  if (!(n && !n.configurable)) {
    for (var r = yr ? "  " : "	", i = `
${r}in ${t.fn?.name || "<unknown>"}`, s = t.ctx; s !== null; )
      i += `
${r}in ${s.function?.[Ns].split("/").pop()}`, s = s.p;
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
function $i(e) {
  const t = Wn.get(e);
  t && (Ee(e, "message", {
    value: t.message
  }), Ee(e, "stack", {
    value: t.stack
  }));
}
const tn = /* @__PURE__ */ new Set();
let K = null, be = null, pe = [], Pn = null, Gn = !1, Bt = !1;
class ge {
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
    this.is_fork || this.#c(), this.is_deferred() ? (this.#a(n.effects), this.#a(n.render_effects)) : (K = null, Nr(n.render_effects), Nr(n.effects), this.#l?.resolve()), be = null;
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {EffectTarget} target
   */
  #o(t, n) {
    t.f ^= Q;
    for (var r = t.first; r !== null; ) {
      var i = r.f, s = (i & (je | Xe)) !== 0, o = s && (i & Q) !== 0, a = o || (i & ve) !== 0 || this.skipped_effects.has(r);
      if ((r.f & xn) !== 0 && r.b?.is_pending() && (n = {
        parent: n,
        effect: r,
        effects: [],
        render_effects: []
      }), !a && r.fn !== null) {
        s ? r.f ^= Q : (i & dr) !== 0 ? n.effects.push(r) : en(r) && ((r.f & Me) !== 0 && this.#s.add(r), Yt(r));
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
      (n.f & ce) !== 0 ? this.#s.add(n) : (n.f & Ae) !== 0 && this.#i.add(n), this.#u(n.deps), te(n, Q);
  }
  /**
   * @param {Value[] | null} deps
   */
  #u(t) {
    if (t !== null)
      for (const n of t)
        (n.f & G) === 0 || (n.f & Ge) === 0 || (n.f ^= Ge, this.#u(
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
    this.previous.has(t) || this.previous.set(t, n), (t.f & He) === 0 && (this.current.set(t, t.v), be?.set(t, t.v));
  }
  activate() {
    K = this, this.apply();
  }
  deactivate() {
    K === this && (K = null, be = null);
  }
  flush() {
    if (this.activate(), pe.length > 0) {
      if (ki(), K !== null && K !== this)
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
    if (tn.size > 1) {
      this.previous.clear();
      var t = be, n = !0, r = {
        parent: null,
        effect: null,
        effects: [],
        render_effects: []
      };
      for (const s of tn) {
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
          var i = pe;
          pe = [];
          const l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
          for (const d of o)
            Si(d, a, l, u);
          if (pe.length > 0) {
            K = s, s.apply();
            for (const d of pe)
              s.#o(d, r);
            s.deactivate();
          }
          pe = i;
        }
      }
      K = null, be = t;
    }
    this.committed = !0, tn.delete(this);
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
      this.#i.delete(t), te(t, ce), ot(t);
    for (const t of this.#i)
      te(t, Ae), ot(t);
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
    return (this.#l ??= li()).promise;
  }
  static ensure() {
    if (K === null) {
      const t = K = new ge();
      tn.add(K), Bt || ge.enqueue(() => {
        K === t && t.flush();
      });
    }
    return K;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    vt(t);
  }
  apply() {
  }
}
function Z(e) {
  var t = Bt;
  Bt = !0;
  try {
    for (var n; ; ) {
      if (oo(), pe.length === 0 && (K?.flush(), pe.length === 0))
        return Pn = null, /** @type {T} */
        n;
      ki();
    }
  } finally {
    Bt = t;
  }
}
function ki() {
  var e = it;
  Gn = !0;
  var t = g ? /* @__PURE__ */ new Set() : null;
  try {
    var n = 0;
    for (yn(!0); pe.length > 0; ) {
      var r = ge.ensure();
      if (n++ > 1e3) {
        if (g) {
          var i = /* @__PURE__ */ new Map();
          for (const o of r.current.keys())
            for (const [a, l] of o.updated ?? []) {
              var s = i.get(a);
              s || (s = { error: l.error, count: 0 }, i.set(a, s)), s.count += l.count;
            }
          for (const o of i.values())
            o.error && console.error(o.error);
        }
        lo();
      }
      if (r.process(pe), We.clear(), g)
        for (const o of r.current.keys())
          t.add(o);
    }
  } finally {
    if (Gn = !1, yn(e), Pn = null, g)
      for (
        const o of
        /** @type {Set<Source>} */
        t
      )
        o.updated = null;
  }
}
function lo() {
  try {
    Vs();
  } catch (e) {
    g && Ee(e, "stack", { value: "" }), xt(e, Pn);
  }
}
let Ne = null;
function Nr(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (Re | ve)) === 0 && en(r) && (Ne = /* @__PURE__ */ new Set(), Yt(r), r.deps === null && r.first === null && r.nodes === null && (r.teardown === null && r.ac === null ? qi(r) : r.fn = null), Ne?.size > 0)) {
        We.clear();
        for (const i of Ne) {
          if ((i.f & (Re | ve)) !== 0) continue;
          const s = [i];
          let o = i.parent;
          for (; o !== null; )
            Ne.has(o) && (Ne.delete(o), s.push(o)), o = o.parent;
          for (let a = s.length - 1; a >= 0; a--) {
            const l = s[a];
            (l.f & (Re | ve)) === 0 && Yt(l);
          }
        }
        Ne.clear();
      }
    }
    Ne = null;
  }
}
function Si(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const s = i.f;
      (s & G) !== 0 ? Si(
        /** @type {Derived} */
        i,
        t,
        n,
        r
      ) : (s & (Nn | Me)) !== 0 && (s & ce) === 0 && Ti(i, t, r) && (te(i, ce), ot(
        /** @type {Effect} */
        i
      ));
    }
}
function Ti(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (t.includes(i))
        return !0;
      if ((i.f & G) !== 0 && Ti(
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
function ot(e) {
  for (var t = Pn = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (Gn && t === j && (n & Me) !== 0 && (n & ci) === 0)
      return;
    if ((n & (Xe | je)) !== 0) {
      if ((n & Q) === 0) return;
      t.f ^= Q;
    }
  }
  pe.push(t);
}
function uo(e) {
  let t = 0, n = at(0), r;
  return g && Se(n, "createSubscriber version"), () => {
    Kt() && (D(n), wr(() => (t === 0 && (r = pt(() => e(() => zt(n)))), t += 1, () => {
      vt(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, zt(n));
      });
    })));
  };
}
var co = St | ct | xn;
function fo(e, t, n) {
  new vo(e, t, n);
}
class vo {
  /** @type {Boundary | null} */
  parent;
  #t = !1;
  /** @type {TemplateNode} */
  #e;
  /** @type {TemplateNode | null} */
  #n = L ? z : null;
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
  #g = uo(() => (this.#d = at(this.#f), g && Se(this.#d, "$effect.pending()"), () => {
    this.#d = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, r) {
    this.#e = t, this.#r = n, this.#l = r, this.parent = /** @type {Effect} */
    j.b, this.#t = !!this.#r.pending, this.#s = Er(() => {
      if (j.b = this, L) {
        const s = this.#n;
        Gt(), /** @type {Comment} */
        s.nodeType === Ct && /** @type {Comment} */
        s.data === Tn ? this.#w() : this.#m();
      } else {
        var i = this.#_();
        try {
          this.#i = oe(() => r(i));
        } catch (s) {
          this.error(s);
        }
        this.#v > 0 ? this.#b() : this.#t = !1;
      }
      return () => {
        this.#c?.remove();
      };
    }, co), L && (this.#e = z);
  }
  #m() {
    try {
      this.#i = oe(() => this.#l(this.#e));
    } catch (t) {
      this.error(t);
    }
    this.#t = !1;
  }
  #w() {
    const t = this.#r.pending;
    t && (this.#o = oe(() => t(this.#e)), ge.enqueue(() => {
      var n = this.#_();
      this.#i = this.#p(() => (ge.ensure(), oe(() => this.#l(n)))), this.#v > 0 ? this.#b() : (rt(
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
    return this.#t && (this.#c = me(), this.#e.before(this.#c), t = this.#c), t;
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
    var n = j, r = M, i = ee;
    we(this.#s), le(this.#s), Tt(this.#s.ctx);
    try {
      return t();
    } catch (s) {
      return Ei(s), null;
    } finally {
      we(n), le(r), Tt(i);
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
    ), Ui(this.#i, this.#u)), this.#o === null && (this.#o = oe(() => t(this.#e)));
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
    this.#v += t, this.#v === 0 && (this.#t = !1, this.#o && rt(this.#o, () => {
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
    this.#y(t), this.#f += t, this.#d && Nt(this.#d, this.#f);
  }
  get_effect_pending() {
    return this.#g(), D(
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
    this.#i && (Y(this.#i), this.#i = null), this.#o && (Y(this.#o), this.#o = null), this.#a && (Y(this.#a), this.#a = null), L && (ue(
      /** @type {TemplateNode} */
      this.#n
    ), hi(), ue(hn()));
    var i = !1, s = !1;
    const o = () => {
      if (i) {
        no();
        return;
      }
      i = !0, s && Js(), ge.ensure(), this.#f = 0, this.#a !== null && rt(this.#a, () => {
        this.#a = null;
      }), this.#t = this.has_pending_snippet(), this.#i = this.#p(() => (this.#h = !1, oe(() => this.#l(this.#e)))), this.#v > 0 ? this.#b() : this.#t = !1;
    };
    var a = M;
    try {
      le(null), s = !0, n?.(t, o), s = !1;
    } catch (l) {
      xt(l, this.#s && this.#s.parent);
    } finally {
      le(a);
    }
    r && vt(() => {
      this.#a = this.#p(() => {
        ge.ensure(), this.#h = !0;
        try {
          return oe(() => {
            r(
              this.#e,
              () => t,
              () => o
            );
          });
        } catch (l) {
          return xt(
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
function Ai(e, t, n, r) {
  const i = Cn;
  if (n.length === 0 && e.length === 0) {
    r(t.map(i));
    return;
  }
  var s = K, o = (
    /** @type {Effect} */
    j
  ), a = ho();
  function l() {
    Promise.all(n.map((u) => /* @__PURE__ */ bo(u))).then((u) => {
      a();
      try {
        r([...t.map(i), ...u]);
      } catch (d) {
        (o.f & Re) === 0 && xt(d, o);
      }
      s?.deactivate(), bn();
    }).catch((u) => {
      xt(u, o);
    });
  }
  e.length > 0 ? Promise.all(e).then(() => {
    a();
    try {
      return l();
    } finally {
      s?.deactivate(), bn();
    }
  }) : l();
}
function ho() {
  var e = j, t = M, n = ee, r = K;
  if (g)
    var i = At;
  return function(o = !0) {
    we(e), le(t), Tt(n), o && r?.activate(), g && pn(i);
  };
}
function bn() {
  we(null), le(null), Tt(null), g && pn(null);
}
const po = /* @__PURE__ */ new Set();
// @__NO_SIDE_EFFECTS__
function Cn(e) {
  var t = G | ce, n = M !== null && (M.f & G) !== 0 ? (
    /** @type {Derived} */
    M
  ) : null;
  return j !== null && (j.f |= ct), {
    ctx: ee,
    deps: null,
    effects: null,
    equals: bi,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      W
    ),
    wv: 0,
    parent: n ?? j,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function bo(e, t) {
  let n = (
    /** @type {Effect | null} */
    j
  );
  n === null && js();
  var r = (
    /** @type {Boundary} */
    n.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = at(
    /** @type {V} */
    W
  ), o = !M, a = /* @__PURE__ */ new Map();
  return Io(() => {
    var l = li();
    i = l.promise;
    try {
      Promise.resolve(e()).then(l.resolve, l.reject).then(() => {
        u === K && u.committed && u.deactivate(), bn();
      });
    } catch (c) {
      l.reject(c), bn();
    }
    var u = (
      /** @type {Batch} */
      K
    );
    if (o) {
      var d = !r.is_pending();
      r.update_pending_count(1), u.increment(d), a.get(u)?.reject(wt), a.delete(u), a.set(u, l);
    }
    const f = (c, v = void 0) => {
      if (u.activate(), v)
        v !== wt && (s.f |= He, Nt(s, v));
      else {
        (s.f & He) !== 0 && (s.f ^= He), Nt(s, c);
        for (const [h, y] of a) {
          if (a.delete(h), h === u) break;
          y.reject(wt);
        }
      }
      o && (r.update_pending_count(-1), u.decrement(d));
    };
    l.promise.then(f, (c) => f(null, c || "unknown"));
  }), mr(() => {
    for (const l of a.values())
      l.reject(wt);
  }), g && (s.f |= Nn), new Promise((l) => {
    function u(d) {
      function f() {
        d === i ? l(s) : u(i);
      }
      d.then(f, f);
    }
    u(i);
  });
}
// @__NO_SIDE_EFFECTS__
function _o(e) {
  const t = /* @__PURE__ */ Cn(e);
  return Vi(t), t;
}
// @__NO_SIDE_EFFECTS__
function xi(e) {
  const t = /* @__PURE__ */ Cn(e);
  return t.equals = yi, t;
}
function Xn(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      Y(
        /** @type {Effect} */
        t[n]
      );
  }
}
let Bn = [];
function yo(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & G) === 0)
      return (t.f & Re) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
function pr(e) {
  var t, n = j;
  if (we(yo(e)), g) {
    let r = Ot;
    Ir(/* @__PURE__ */ new Set());
    try {
      Bn.includes(e) && qs(), Bn.push(e), e.f &= ~Ge, Xn(e), t = Zn(e);
    } finally {
      we(n), Ir(r), Bn.pop();
    }
  } else
    try {
      e.f &= ~Ge, Xn(e), t = Zn(e);
    } finally {
      we(n);
    }
  return t;
}
function Oi(e) {
  var t = pr(e);
  if (e.equals(t) || (K?.is_fork || (e.v = t), e.wv = Hi()), !ht)
    if (be !== null)
      (Kt() || K?.is_fork) && be.set(e, t);
    else {
      var n = (e.f & $e) === 0 ? Ae : Q;
      te(e, n);
    }
}
let Ot = /* @__PURE__ */ new Set();
const We = /* @__PURE__ */ new Map();
function Ir(e) {
  Ot = e;
}
let br = !1;
function go() {
  br = !0;
}
function at(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: bi,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function _e(e, t) {
  const n = at(e);
  return Vi(n), n;
}
// @__NO_SIDE_EFFECTS__
function _r(e, t = !1, n = !0) {
  const r = at(e);
  return t || (r.equals = yi), r;
}
function J(e, t, n = !1) {
  M !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Te || (M.f & vn) !== 0) && mi() && (M.f & (G | Me | Nn | vn)) !== 0 && !Fe?.includes(e) && Xs();
  let r = n ? Pe(t) : t;
  return g && gi(
    r,
    /** @type {string} */
    e.label
  ), Nt(e, r);
}
function Nt(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    ht ? We.set(e, t) : We.set(e, n), e.v = t;
    var r = ge.ensure();
    if (r.capture(e, n), g) {
      if (j !== null) {
        e.updated ??= /* @__PURE__ */ new Map();
        const i = (e.updated.get("")?.count ?? 0) + 1;
        if (e.updated.set("", { error: (
          /** @type {any} */
          null
        ), count: i }), i > 5) {
          const s = io("updated at");
          if (s !== null) {
            let o = e.updated.get(s.stack);
            o || (o = { error: s, count: 0 }, e.updated.set(s.stack, o)), o.count++;
          }
        }
      }
      j !== null && (e.set_during_effect = !0);
    }
    (e.f & G) !== 0 && ((e.f & ce) !== 0 && pr(
      /** @type {Derived} */
      e
    ), te(e, (e.f & $e) !== 0 ? Q : Ae)), e.wv = Hi(), Ii(e, ce), j !== null && (j.f & Q) !== 0 && (j.f & (je | Xe)) === 0 && (he === null ? Ro([e]) : he.push(e)), !r.is_fork && Ot.size > 0 && !br && Ni();
  }
  return t;
}
function Ni() {
  br = !1;
  var e = it;
  yn(!0);
  const t = Array.from(Ot);
  try {
    for (const n of t)
      (n.f & Q) !== 0 && te(n, Ae), en(n) && Yt(n);
  } finally {
    yn(e);
  }
  Ot.clear();
}
function Pr(e, t = 1) {
  var n = D(e), r = t === 1 ? n++ : n--;
  return J(e, n), r;
}
function zt(e) {
  J(e, e.v + 1);
}
function Ii(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = n.length, i = 0; i < r; i++) {
      var s = n[i], o = s.f;
      if (g && (o & vn) !== 0) {
        Ot.add(s);
        continue;
      }
      var a = (o & ce) === 0;
      if (a && te(s, t), (o & G) !== 0) {
        var l = (
          /** @type {Derived} */
          s
        );
        be?.delete(l), (o & Ge) === 0 && (o & $e && (s.f |= Ge), Ii(l, Ae));
      } else a && ((o & Me) !== 0 && Ne !== null && Ne.add(
        /** @type {Effect} */
        s
      ), ot(
        /** @type {Effect} */
        s
      ));
    }
}
const mo = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
function Pe(e) {
  if (typeof e != "object" || e === null || Ye in e)
    return e;
  const t = oi(e);
  if (t !== Fs && t !== Ds)
    return e;
  var n = /* @__PURE__ */ new Map(), r = fr(e), i = /* @__PURE__ */ _e(0), s = st, o = (d) => {
    if (st === s)
      return d();
    var f = M, c = st;
    le(null), Lr(s);
    var v = d();
    return le(f), Lr(c), v;
  };
  r && (n.set("length", /* @__PURE__ */ _e(
    /** @type {any[]} */
    e.length
  )), g && (e = /** @type {any} */
  $o(
    /** @type {any[]} */
    e
  )));
  var a = "";
  let l = !1;
  function u(d) {
    if (!l) {
      l = !0, a = d, Se(i, `${a} version`);
      for (const [f, c] of n)
        Se(c, Ze(a, f));
      l = !1;
    }
  }
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(d, f, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Ws();
        var v = n.get(f);
        return v === void 0 ? v = o(() => {
          var h = /* @__PURE__ */ _e(c.value);
          return n.set(f, h), g && typeof f == "string" && Se(h, Ze(a, f)), h;
        }) : J(v, c.value, !0), !0;
      },
      deleteProperty(d, f) {
        var c = n.get(f);
        if (c === void 0) {
          if (f in d) {
            const v = o(() => /* @__PURE__ */ _e(W));
            n.set(f, v), zt(i), g && Se(v, Ze(a, f));
          }
        } else
          J(c, W), zt(i);
        return !0;
      },
      get(d, f, c) {
        if (f === Ye)
          return e;
        if (g && f === di)
          return u;
        var v = n.get(f), h = f in d;
        if (v === void 0 && (!h || Ve(d, f)?.writable) && (v = o(() => {
          var w = Pe(h ? d[f] : W), m = /* @__PURE__ */ _e(w);
          return g && Se(m, Ze(a, f)), m;
        }), n.set(f, v)), v !== void 0) {
          var y = D(v);
          return y === W ? void 0 : y;
        }
        return Reflect.get(d, f, c);
      },
      getOwnPropertyDescriptor(d, f) {
        var c = Reflect.getOwnPropertyDescriptor(d, f);
        if (c && "value" in c) {
          var v = n.get(f);
          v && (c.value = D(v));
        } else if (c === void 0) {
          var h = n.get(f), y = h?.v;
          if (h !== void 0 && y !== W)
            return {
              enumerable: !0,
              configurable: !0,
              value: y,
              writable: !0
            };
        }
        return c;
      },
      has(d, f) {
        if (f === Ye)
          return !0;
        var c = n.get(f), v = c !== void 0 && c.v !== W || Reflect.has(d, f);
        if (c !== void 0 || j !== null && (!v || Ve(d, f)?.writable)) {
          c === void 0 && (c = o(() => {
            var y = v ? Pe(d[f]) : W, w = /* @__PURE__ */ _e(y);
            return g && Se(w, Ze(a, f)), w;
          }), n.set(f, c));
          var h = D(c);
          if (h === W)
            return !1;
        }
        return v;
      },
      set(d, f, c, v) {
        var h = n.get(f), y = f in d;
        if (r && f === "length")
          for (var w = c; w < /** @type {Source<number>} */
          h.v; w += 1) {
            var m = n.get(w + "");
            m !== void 0 ? J(m, W) : w in d && (m = o(() => /* @__PURE__ */ _e(W)), n.set(w + "", m), g && Se(m, Ze(a, w)));
          }
        if (h === void 0)
          (!y || Ve(d, f)?.writable) && (h = o(() => /* @__PURE__ */ _e(void 0)), g && Se(h, Ze(a, f)), J(h, Pe(c)), n.set(f, h));
        else {
          y = h.v !== W;
          var A = o(() => Pe(c));
          J(h, A);
        }
        var C = Reflect.getOwnPropertyDescriptor(d, f);
        if (C?.set && C.set.call(v, c), !y) {
          if (r && typeof f == "string") {
            var x = (
              /** @type {Source<number>} */
              n.get("length")
            ), U = Number(f);
            Number.isInteger(U) && U >= x.v && J(x, U + 1);
          }
          zt(i);
        }
        return !0;
      },
      ownKeys(d) {
        D(i);
        var f = Reflect.ownKeys(d).filter((h) => {
          var y = n.get(h);
          return y === void 0 || y.v !== W;
        });
        for (var [c, v] of n)
          v.v !== W && !(c in d) && f.push(c);
        return f;
      },
      setPrototypeOf() {
        Gs();
      }
    }
  );
}
function Ze(e, t) {
  return typeof t == "symbol" ? `${e}[Symbol(${t.description ?? ""})]` : mo.test(t) ? `${e}.${t}` : /^\d+$/.test(t) ? `${e}[${t}]` : `${e}['${t}']`;
}
function Ut(e) {
  try {
    if (e !== null && typeof e == "object" && Ye in e)
      return e[Ye];
  } catch {
  }
  return e;
}
function wo(e, t) {
  return Object.is(Ut(e), Ut(t));
}
const Eo = /* @__PURE__ */ new Set([
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
function $o(e) {
  return new Proxy(e, {
    get(t, n, r) {
      var i = Reflect.get(t, n, r);
      return Eo.has(
        /** @type {string} */
        n
      ) ? function(...s) {
        go();
        var o = i.apply(this, s);
        return Ni(), o;
      } : i;
    }
  });
}
function ko() {
  const e = Array.prototype, t = Array.__svelte_cleanup;
  t && t();
  const { indexOf: n, lastIndexOf: r, includes: i } = e;
  e.indexOf = function(s, o) {
    const a = n.call(this, s, o);
    if (a === -1) {
      for (let l = o ?? 0; l < this.length; l += 1)
        if (Ut(this[l]) === s) {
          qn("array.indexOf(...)");
          break;
        }
    }
    return a;
  }, e.lastIndexOf = function(s, o) {
    const a = r.call(this, s, o ?? this.length - 1);
    if (a === -1) {
      for (let l = 0; l <= (o ?? this.length - 1); l += 1)
        if (Ut(this[l]) === s) {
          qn("array.lastIndexOf(...)");
          break;
        }
    }
    return a;
  }, e.includes = function(s, o) {
    const a = i.call(this, s, o);
    if (!a) {
      for (let l = 0; l < this.length; l += 1)
        if (Ut(this[l]) === s) {
          qn("array.includes(...)");
          break;
        }
    }
    return a;
  }, Array.__svelte_cleanup = () => {
    e.indexOf = n, e.lastIndexOf = r, e.includes = i;
  };
}
var Cr, yr, Pi, Ci;
function Jn() {
  if (Cr === void 0) {
    Cr = window, yr = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Pi = Ve(t, "firstChild").get, Ci = Ve(t, "nextSibling").get, xr(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), xr(n) && (n.__t = void 0), g && (e.__svelte_meta = null, ko());
  }
}
function me(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function lt(e) {
  return (
    /** @type {TemplateNode | null} */
    Pi.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function xe(e) {
  return (
    /** @type {TemplateNode | null} */
    Ci.call(e)
  );
}
function ie(e, t) {
  if (!L)
    return /* @__PURE__ */ lt(e);
  var n = /* @__PURE__ */ lt(z);
  if (n === null)
    n = z.appendChild(me());
  else if (t && n.nodeType !== hr) {
    var r = me();
    return n?.before(r), ue(r), r;
  }
  return ue(n), n;
}
function Rr(e, t = !1) {
  if (!L) {
    var n = /* @__PURE__ */ lt(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ xe(n) : n;
  }
  if (t && z?.nodeType !== hr) {
    var r = me();
    return z?.before(r), ue(r), r;
  }
  return z;
}
function Ce(e, t = 1, n = !1) {
  let r = L ? z : e;
  for (var i; t--; )
    i = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ xe(r);
  if (!L)
    return r;
  if (n && r?.nodeType !== hr) {
    var s = me();
    return r === null ? i?.after(s) : r.before(s), ue(s), s;
  }
  return ue(r), r;
}
function Ri(e) {
  e.textContent = "";
}
function Fi() {
  return !1;
}
function So(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, vt(() => {
      document.activeElement === n && e.focus();
    });
  }
}
let Fr = !1;
function To() {
  Fr || (Fr = !0, document.addEventListener(
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
function gr(e) {
  var t = M, n = j;
  le(null), we(null);
  try {
    return e();
  } finally {
    le(t), we(n);
  }
}
function Ao(e) {
  j === null && (M === null && Us(e), zs()), ht && Bs(e);
}
function xo(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function ke(e, t, n) {
  var r = j;
  if (g)
    for (; r !== null && (r.f & vn) !== 0; )
      r = r.parent;
  r !== null && (r.f & ve) !== 0 && (e |= ve);
  var i = {
    ctx: ee,
    deps: null,
    nodes: null,
    f: e | ce | $e,
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
  if (g && (i.component_function = Xt), n)
    try {
      Yt(i), i.f |= On;
    } catch (a) {
      throw Y(i), a;
    }
  else t !== null && ot(i);
  var s = i;
  if (n && s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
  (s.f & ct) === 0 && (s = s.first, (e & Me) !== 0 && (e & St) !== 0 && s !== null && (s.f |= St)), s !== null && (s.parent = r, r !== null && xo(s, r), M !== null && (M.f & G) !== 0 && (e & Xe) === 0)) {
    var o = (
      /** @type {Derived} */
      M
    );
    (o.effects ??= []).push(s);
  }
  return i;
}
function Kt() {
  return M !== null && !Te;
}
function mr(e) {
  const t = ke(vr, null, !1);
  return te(t, Q), t.teardown = e, t;
}
function _n(e) {
  Ao("$effect"), g && Ee(e, "name", {
    value: "$effect"
  });
  var t = (
    /** @type {Effect} */
    j.f
  ), n = !M && (t & je) !== 0 && (t & On) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      ee
    );
    (r.e ??= []).push(e);
  } else
    return Di(e);
}
function Di(e) {
  return ke(dr | Ls, e, !1);
}
function Oo(e) {
  ge.ensure();
  const t = ke(Xe | ct, e, !0);
  return () => {
    Y(t);
  };
}
function No(e) {
  ge.ensure();
  const t = ke(Xe | ct, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? rt(t, () => {
      Y(t), r(void 0);
    }) : (Y(t), r(void 0));
  });
}
function Qt(e) {
  return ke(dr, e, !1);
}
function Io(e) {
  return ke(Nn | ct, e, !0);
}
function wr(e, t = 0) {
  return ke(vr | t, e, !0);
}
function It(e, t = [], n = [], r = []) {
  Ai(r, t, n, (i) => {
    ke(vr, () => e(...i.map(D)), !0);
  });
}
function Er(e, t = 0) {
  var n = ke(Me | t, e, !0);
  return g && (n.dev_stack = At), n;
}
function Li(e, t = 0) {
  var n = ke(ui | t, e, !0);
  return g && (n.dev_stack = At), n;
}
function oe(e) {
  return ke(je | ct, e, !0);
}
function Mi(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = ht, r = M;
    Dr(!0), le(null);
    try {
      t.call(null);
    } finally {
      Dr(n), le(r);
    }
  }
}
function ji(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && gr(() => {
      i.abort(wt);
    });
    var r = n.next;
    (n.f & Xe) !== 0 ? n.parent = null : Y(n, t), n = r;
  }
}
function Po(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & je) === 0 && Y(t), t = n;
  }
}
function Y(e, t = !0) {
  var n = !1;
  (t || (e.f & ci) !== 0) && e.nodes !== null && e.nodes.end !== null && (Co(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), ji(e, t && !n), gn(e, 0), te(e, Re);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const s of r)
      s.stop();
  Mi(e);
  var i = e.parent;
  i !== null && i.first !== null && qi(e), g && (e.component_function = null), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
function Co(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ xe(e);
    e.remove(), e = n;
  }
}
function qi(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function rt(e, t, n = !0) {
  var r = [];
  Bi(e, r, !0);
  var i = () => {
    n && Y(e), t && t();
  }, s = r.length;
  if (s > 0) {
    var o = () => --s || i();
    for (var a of r)
      a.out(o);
  } else
    i();
}
function Bi(e, t, n) {
  if ((e.f & ve) === 0) {
    e.f ^= ve;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const a of r)
        (a.is_global || n) && t.push(a);
    for (var i = e.first; i !== null; ) {
      var s = i.next, o = (i.f & St) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (i.f & je) !== 0 && (e.f & Me) !== 0;
      Bi(i, t, o ? n : !1), i = s;
    }
  }
}
function $r(e) {
  zi(e, !0);
}
function zi(e, t) {
  if ((e.f & ve) !== 0) {
    e.f ^= ve, (e.f & Q) === 0 && (te(e, ce), ot(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, i = (n.f & St) !== 0 || (n.f & je) !== 0;
      zi(n, i ? t : !1), n = r;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const o of s)
        (o.is_global || t) && o.in();
  }
}
function Ui(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var i = n === r ? null : /* @__PURE__ */ xe(n);
      t.append(n), n = i;
    }
}
let it = !1;
function yn(e) {
  it = e;
}
let ht = !1;
function Dr(e) {
  ht = e;
}
let M = null, Te = !1;
function le(e) {
  M = e;
}
let j = null;
function we(e) {
  j = e;
}
let Fe = null;
function Vi(e) {
  M !== null && (Fe === null ? Fe = [e] : Fe.push(e));
}
let re = null, de = 0, he = null;
function Ro(e) {
  he = e;
}
let Ki = 1, Ht = 0, st = Ht;
function Lr(e) {
  st = e;
}
function Hi() {
  return ++Ki;
}
function en(e) {
  var t = e.f;
  if ((t & ce) !== 0)
    return !0;
  if (t & G && (e.f &= ~Ge), (t & Ae) !== 0) {
    var n = e.deps;
    if (n !== null)
      for (var r = n.length, i = 0; i < r; i++) {
        var s = n[i];
        if (en(
          /** @type {Derived} */
          s
        ) && Oi(
          /** @type {Derived} */
          s
        ), s.wv > e.wv)
          return !0;
      }
    (t & $e) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    be === null && te(e, Q);
  }
  return !1;
}
function Yi(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !Fe?.includes(e))
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      (s.f & G) !== 0 ? Yi(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (n ? te(s, ce) : (s.f & Q) !== 0 && te(s, Ae), ot(
        /** @type {Effect} */
        s
      ));
    }
}
function Zn(e) {
  var t = re, n = de, r = he, i = M, s = Fe, o = ee, a = Te, l = st, u = e.f;
  re = /** @type {null | Value[]} */
  null, de = 0, he = null, M = (u & (je | Xe)) === 0 ? e : null, Fe = null, Tt(e.ctx), Te = !1, st = ++Ht, e.ac !== null && (gr(() => {
    e.ac.abort(wt);
  }), e.ac = null);
  try {
    e.f |= Yn;
    var d = (
      /** @type {Function} */
      e.fn
    ), f = d(), c = e.deps;
    if (re !== null) {
      var v;
      if (gn(e, de), c !== null && de > 0)
        for (c.length = de + re.length, v = 0; v < re.length; v++)
          c[de + v] = re[v];
      else
        e.deps = c = re;
      if (Kt() && (e.f & $e) !== 0)
        for (v = de; v < c.length; v++)
          (c[v].reactions ??= []).push(e);
    } else c !== null && de < c.length && (gn(e, de), c.length = de);
    if (mi() && he !== null && !Te && c !== null && (e.f & (G | Ae | ce)) === 0)
      for (v = 0; v < /** @type {Source[]} */
      he.length; v++)
        Yi(
          he[v],
          /** @type {Effect} */
          e
        );
    return i !== null && i !== e && (Ht++, he !== null && (r === null ? r = he : r.push(.../** @type {Source[]} */
    he))), (e.f & He) !== 0 && (e.f ^= He), f;
  } catch (h) {
    return Ei(h);
  } finally {
    e.f ^= Yn, re = t, de = n, he = r, M = i, Fe = s, Tt(o), Te = a, st = l;
  }
}
function Fo(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Cs.call(n, e);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  n === null && (t.f & G) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (re === null || !re.includes(t)) && (te(t, Ae), (t.f & $e) !== 0 && (t.f ^= $e, t.f &= ~Ge), Xn(
    /** @type {Derived} **/
    t
  ), gn(
    /** @type {Derived} **/
    t,
    0
  ));
}
function gn(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Fo(e, n[r]);
}
function Yt(e) {
  var t = e.f;
  if ((t & Re) === 0) {
    te(e, Q);
    var n = j, r = it;
    if (j = e, it = !0, g) {
      var i = Xt;
      Or(e.component_function);
      var s = (
        /** @type {any} */
        At
      );
      pn(e.dev_stack ?? At);
    }
    try {
      (t & (Me | ui)) !== 0 ? Po(e) : ji(e), Mi(e);
      var o = Zn(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = Ki;
      var a;
      g && ro && (e.f & ce) !== 0 && e.deps;
    } finally {
      it = r, j = n, g && (Or(i), pn(s));
    }
  }
}
async function Wi() {
  await Promise.resolve(), Z();
}
function D(e) {
  var t = e.f, n = (t & G) !== 0;
  if (M !== null && !Te) {
    var r = j !== null && (j.f & Re) !== 0;
    if (!r && !Fe?.includes(e)) {
      var i = M.deps;
      if ((M.f & Yn) !== 0)
        e.rv < Ht && (e.rv = Ht, re === null && i !== null && i[de] === e ? de++ : re === null ? re = [e] : re.includes(e) || re.push(e));
      else {
        (M.deps ??= []).push(e);
        var s = e.reactions;
        s === null ? e.reactions = [M] : s.includes(M) || s.push(M);
      }
    }
  }
  if (g && po.delete(e), ht) {
    if (We.has(e))
      return We.get(e);
    if (n) {
      var o = (
        /** @type {Derived} */
        e
      ), a = o.v;
      return ((o.f & Q) === 0 && o.reactions !== null || Xi(o)) && (a = pr(o)), We.set(o, a), a;
    }
  } else n && (!be?.has(e) || K?.is_fork && !Kt()) && (o = /** @type {Derived} */
  e, en(o) && Oi(o), it && Kt() && (o.f & $e) === 0 && Gi(o));
  if (be?.has(e))
    return be.get(e);
  if ((e.f & He) !== 0)
    throw e.v;
  return e.v;
}
function Gi(e) {
  if (e.deps !== null) {
    e.f ^= $e;
    for (const t of e.deps)
      (t.reactions ??= []).push(e), (t.f & G) !== 0 && (t.f & $e) === 0 && Gi(
        /** @type {Derived} */
        t
      );
  }
}
function Xi(e) {
  if (e.v === W) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (We.has(t) || (t.f & G) !== 0 && Xi(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function pt(e) {
  var t = Te;
  try {
    return Te = !0, e();
  } finally {
    Te = t;
  }
}
const Do = -7169;
function te(e, t) {
  e.f = e.f & Do | t;
}
const Ji = /* @__PURE__ */ new Set(), Qn = /* @__PURE__ */ new Set();
function Lo(e, t, n, r = {}) {
  function i(s) {
    if (r.capture || Lt.call(t, s), !s.cancelBubble)
      return gr(() => n?.call(this, s));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? vt(() => {
    t.addEventListener(e, i, r);
  }) : t.addEventListener(e, i, r), i;
}
function Rn(e) {
  for (var t = 0; t < e.length; t++)
    Ji.add(e[t]);
  for (var n of Qn)
    n(e);
}
let Mr = null;
function Lt(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, i = e.composedPath?.() || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  Mr = e;
  var o = 0, a = Mr === e && e.__root;
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
    Ee(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var d = M, f = j;
    le(null), we(null);
    try {
      for (var c, v = []; s !== null; ) {
        var h = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var y = s["__" + r];
          y != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && y.call(s, e);
        } catch (w) {
          c ? v.push(w) : c = w;
        }
        if (e.cancelBubble || h === t || h === null)
          break;
        s = h;
      }
      if (c) {
        for (let w of v)
          queueMicrotask(() => {
            throw w;
          });
        throw c;
      }
    } finally {
      e.__root = t, delete e.currentTarget, le(d), we(f);
    }
  }
}
function Mo(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function un(e, t) {
  var n = (
    /** @type {Effect} */
    j
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function Je(e, t) {
  var n = (t & xs) !== 0, r = (t & Os) !== 0, i, s = !e.startsWith("<!>");
  return () => {
    if (L)
      return un(z, null), z;
    i === void 0 && (i = Mo(s ? e : "<!>" + e), n || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ lt(i)));
    var o = (
      /** @type {TemplateNode} */
      r || yr ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ lt(o)
      ), l = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      un(a, l);
    } else
      un(o, o);
    return o;
  };
}
function De(e, t) {
  if (L) {
    var n = (
      /** @type {Effect & { nodes: EffectNodes }} */
      j
    );
    ((n.f & On) === 0 || n.nodes.end === null) && (n.nodes.end = z), Gt();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function jo(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const qo = [
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
function Bo(e) {
  return qo.includes(e);
}
const zo = {
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
function Uo(e) {
  return e = e.toLowerCase(), zo[e] ?? e;
}
const Vo = ["touchstart", "touchmove"];
function Ko(e) {
  return Vo.includes(e);
}
function Pt(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function Zi(e, t) {
  return Qi(e, t);
}
function Ho(e, t) {
  Jn(), t.intro = t.intro ?? !1;
  const n = t.target, r = L, i = z;
  try {
    for (var s = /* @__PURE__ */ lt(n); s && (s.nodeType !== Ct || /** @type {Comment} */
    s.data !== si); )
      s = /* @__PURE__ */ xe(s);
    if (!s)
      throw kt;
    ye(!0), ue(
      /** @type {Comment} */
      s
    );
    const o = Qi(e, { ...t, anchor: s });
    return ye(!1), /**  @type {Exports} */
    o;
  } catch (o) {
    if (o instanceof Error && o.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/")))
      throw o;
    return o !== kt && console.warn("Failed to hydrate: ", o), t.recover === !1 && Ks(), Jn(), Ri(n), ye(!1), Zi(e, t);
  } finally {
    ye(r), ue(i);
  }
}
const bt = /* @__PURE__ */ new Map();
function Qi(e, { target: t, anchor: n, props: r = {}, events: i, context: s, intro: o = !0 }) {
  Jn();
  var a = /* @__PURE__ */ new Set(), l = (f) => {
    for (var c = 0; c < f.length; c++) {
      var v = f[c];
      if (!a.has(v)) {
        a.add(v);
        var h = Ko(v);
        t.addEventListener(v, Lt, { passive: h });
        var y = bt.get(v);
        y === void 0 ? (document.addEventListener(v, Lt, { passive: h }), bt.set(v, 1)) : bt.set(v, y + 1);
      }
    }
  };
  l(An(Ji)), Qn.add(l);
  var u = void 0, d = No(() => {
    var f = n ?? t.appendChild(me());
    return fo(
      /** @type {TemplateNode} */
      f,
      {
        pending: () => {
        }
      },
      (c) => {
        if (s) {
          Jt({});
          var v = (
            /** @type {ComponentContext} */
            ee
          );
          v.c = s;
        }
        if (i && (r.$$events = i), L && un(
          /** @type {TemplateNode} */
          c,
          null
        ), u = e(c, r) || {}, L && (j.nodes.end = z, z === null || z.nodeType !== Ct || /** @type {Comment} */
        z.data !== cr))
          throw In(), kt;
        s && Zt();
      }
    ), () => {
      for (var c of a) {
        t.removeEventListener(c, Lt);
        var v = (
          /** @type {number} */
          bt.get(c)
        );
        --v === 0 ? (document.removeEventListener(c, Lt), bt.delete(c)) : bt.set(c, v);
      }
      Qn.delete(l), f !== n && f.parentNode?.removeChild(f);
    };
  });
  return er.set(u, d), u;
}
let er = /* @__PURE__ */ new WeakMap();
function Yo(e, t) {
  const n = er.get(e);
  return n ? (er.delete(e), n(t)) : (g && (Ye in e ? to() : Qs()), Promise.resolve());
}
class Wo {
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
      K
    );
    if (this.#t.has(t)) {
      var n = (
        /** @type {Key} */
        this.#t.get(t)
      ), r = this.#e.get(n);
      if (r)
        $r(r), this.#r.delete(n);
      else {
        var i = this.#n.get(n);
        i && (this.#e.set(n, i.effect), this.#n.delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
      }
      for (const [s, o] of this.#t) {
        if (this.#t.delete(s), s === t)
          break;
        const a = this.#n.get(o);
        a && (Y(a.effect), this.#n.delete(o));
      }
      for (const [s, o] of this.#e) {
        if (s === n || this.#r.has(s)) continue;
        const a = () => {
          if (Array.from(this.#t.values()).includes(s)) {
            var u = document.createDocumentFragment();
            Ui(o, u), u.append(me()), this.#n.set(s, { effect: o, fragment: u });
          } else
            Y(o);
          this.#r.delete(s), this.#e.delete(s);
        };
        this.#l || !r ? (this.#r.add(s), rt(o, a, !1)) : a();
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
      n.includes(r) || (Y(i.effect), this.#n.delete(r));
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var r = (
      /** @type {Batch} */
      K
    ), i = Fi();
    if (n && !this.#e.has(t) && !this.#n.has(t))
      if (i) {
        var s = document.createDocumentFragment(), o = me();
        s.append(o), this.#n.set(t, {
          effect: oe(() => n(o)),
          fragment: s
        });
      } else
        this.#e.set(
          t,
          oe(() => n(this.anchor))
        );
    if (this.#t.set(r, t), i) {
      for (const [a, l] of this.#e)
        a === t ? r.skipped_effects.delete(l) : r.skipped_effects.add(l);
      for (const [a, l] of this.#n)
        a === t ? r.skipped_effects.delete(l.effect) : r.skipped_effects.add(l.effect);
      r.oncommit(this.#s), r.ondiscard(this.#i);
    } else
      L && (this.anchor = z), this.#s();
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
          Ys(t);
        },
        set: (r) => {
          n = r;
        }
      });
    }
  };
  var Jl = e;
  e("$state"), e("$effect"), e("$derived"), e("$inspect"), e("$props"), e("$bindable");
}
function Go(e) {
  ee === null && vi("onMount"), _n(() => {
    const t = pt(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Xo(e) {
  ee === null && vi("onDestroy"), Go(() => () => pt(e));
}
var jr = /* @__PURE__ */ new Map();
function Jo(e, t) {
  var n = jr.get(e);
  n || (n = /* @__PURE__ */ new Set(), jr.set(e, n)), n.add(t);
}
function es(e, t, n = !1) {
  L && Gt();
  var r = new Wo(e), i = n ? St : 0;
  function s(o, a) {
    if (L) {
      const u = pi(e) === Tn;
      if (o === u) {
        var l = hn();
        ue(l), r.anchor = l, ye(!1), r.ensure(o, a), ye(!0);
        return;
      }
    }
    r.ensure(o, a);
  }
  Er(() => {
    var o = !1;
    t((a, l = !0) => {
      o = !0, s(l, a);
    }), o || s(!1, null);
  }, i);
}
function Zo(e, t) {
  return t;
}
function Qo(e, t, n) {
  for (var r = [], i = t.length, s, o = t.length, a = 0; a < i; a++) {
    let f = t[a];
    rt(
      f,
      () => {
        if (s) {
          if (s.pending.delete(f), s.done.add(f), s.pending.size === 0) {
            var c = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            tr(An(s.done)), c.delete(s), c.size === 0 && (e.outrogroups = null);
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
      Ri(d), d.append(u), e.items.clear();
    }
    tr(t, !l);
  } else
    s = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(s);
}
function tr(e, t = !0) {
  for (var n = 0; n < e.length; n++)
    Y(e[n], t);
}
var qr;
function ea(e, t, n, r, i, s = null) {
  var o = e, a = /* @__PURE__ */ new Map();
  {
    var l = (
      /** @type {Element} */
      e
    );
    o = L ? ue(/* @__PURE__ */ lt(l)) : l.appendChild(me());
  }
  L && Gt();
  var u = null, d = /* @__PURE__ */ xi(() => {
    var w = n();
    return fr(w) ? w : w == null ? [] : An(w);
  }), f, c = !0;
  function v() {
    y.fallback = u, ta(y, f, o, t, r), u !== null && (f.length === 0 ? (u.f & Ue) === 0 ? $r(u) : (u.f ^= Ue, Mt(u, null, o)) : rt(u, () => {
      u = null;
    }));
  }
  var h = Er(() => {
    f = /** @type {V[]} */
    D(d);
    var w = f.length;
    let m = !1;
    if (L) {
      var A = pi(o) === Tn;
      A !== (w === 0) && (o = hn(), ue(o), ye(!1), m = !0);
    }
    for (var C = /* @__PURE__ */ new Set(), x = (
      /** @type {Batch} */
      K
    ), U = Fi(), k = 0; k < w; k += 1) {
      L && z.nodeType === Ct && /** @type {Comment} */
      z.data === cr && (o = /** @type {Comment} */
      z, m = !0, ye(!1));
      var E = f[k], T = r(E, k), P = c ? null : a.get(T);
      P ? (P.v && Nt(P.v, E), P.i && Nt(P.i, k), U && x.skipped_effects.delete(P.e)) : (P = na(
        a,
        c ? o : qr ??= me(),
        E,
        T,
        k,
        i,
        t,
        n
      ), c || (P.e.f |= Ue), a.set(T, P)), C.add(T);
    }
    if (w === 0 && s && !u && (c ? u = oe(() => s(o)) : (u = oe(() => s(qr ??= me())), u.f |= Ue)), L && w > 0 && ue(hn()), !c)
      if (U) {
        for (const [V, _] of a)
          C.has(V) || x.skipped_effects.add(_.e);
        x.oncommit(v), x.ondiscard(() => {
        });
      } else
        v();
    m && ye(!0), D(d);
  }), y = { effect: h, items: a, outrogroups: null, fallback: u };
  c = !1, L && (o = z);
}
function ta(e, t, n, r, i) {
  var s = t.length, o = e.items, a = e.effect.first, l, u = null, d = [], f = [], c, v, h, y;
  for (y = 0; y < s; y += 1) {
    if (c = t[y], v = i(c, y), h = /** @type {EachItem} */
    o.get(v).e, e.outrogroups !== null)
      for (const T of e.outrogroups)
        T.pending.delete(h), T.done.delete(h);
    if ((h.f & Ue) !== 0)
      if (h.f ^= Ue, h === a)
        Mt(h, null, n);
      else {
        var w = u ? u.next : a;
        h === e.effect.last && (e.effect.last = h.prev), h.prev && (h.prev.next = h.next), h.next && (h.next.prev = h.prev), Be(e, u, h), Be(e, h, w), Mt(h, w, n), u = h, d = [], f = [], a = u.next;
        continue;
      }
    if ((h.f & ve) !== 0 && $r(h), h !== a) {
      if (l !== void 0 && l.has(h)) {
        if (d.length < f.length) {
          var m = f[0], A;
          u = m.prev;
          var C = d[0], x = d[d.length - 1];
          for (A = 0; A < d.length; A += 1)
            Mt(d[A], m, n);
          for (A = 0; A < f.length; A += 1)
            l.delete(f[A]);
          Be(e, C.prev, x.next), Be(e, u, C), Be(e, x, m), a = m, u = x, y -= 1, d = [], f = [];
        } else
          l.delete(h), Mt(h, a, n), Be(e, h.prev, h.next), Be(e, h, u === null ? e.effect.first : u.next), Be(e, u, h), u = h;
        continue;
      }
      for (d = [], f = []; a !== null && a !== h; )
        (l ??= /* @__PURE__ */ new Set()).add(a), f.push(a), a = a.next;
      if (a === null)
        continue;
    }
    (h.f & Ue) === 0 && d.push(h), u = h, a = h.next;
  }
  if (e.outrogroups !== null) {
    for (const T of e.outrogroups)
      T.pending.size === 0 && (tr(An(T.done)), e.outrogroups?.delete(T));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (a !== null || l !== void 0) {
    var U = [];
    if (l !== void 0)
      for (h of l)
        (h.f & ve) === 0 && U.push(h);
    for (; a !== null; )
      (a.f & ve) === 0 && a !== e.fallback && U.push(a), a = a.next;
    var k = U.length;
    if (k > 0) {
      var E = s === 0 ? n : null;
      Qo(e, U, E);
    }
  }
}
function na(e, t, n, r, i, s, o, a) {
  var l = (o & ws) !== 0 ? (o & $s) === 0 ? /* @__PURE__ */ _r(n, !1, !1) : at(n) : null, u = (o & Es) !== 0 ? at(i) : null;
  return g && l && (l.trace = () => {
    a()[u?.v ?? i];
  }), {
    v: l,
    i: u,
    e: oe(() => (s(t, l ?? n, u ?? i, a), () => {
      e.delete(r);
    }))
  };
}
function Mt(e, t, n) {
  if (e.nodes)
    for (var r = e.nodes.start, i = e.nodes.end, s = t && (t.f & Ue) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; r !== null; ) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ xe(r)
      );
      if (s.before(r), r === i)
        return;
      r = o;
    }
}
function Be(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function ra(e, t, n, r, i) {
  L && Gt();
  var s = t.$$slots?.[n], o = !1;
  s === !0 && (s = t[n], o = !0), s === void 0 ? i !== null && i(e) : s(e, o ? () => r : r);
}
function Fn(e, t) {
  Qt(() => {
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
      i.id = t.hash, i.textContent = t.code, r.appendChild(i), g && Jo(t.hash, i);
    }
  });
}
function _t(e, t, n) {
  Qt(() => {
    var r = pt(() => t(e, n?.()) || {});
    if (r?.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function ia(e, t) {
  var n = void 0, r;
  Li(() => {
    n !== (n = t()) && (r && (Y(r), r = null), n && (r = oe(() => {
      Qt(() => (
        /** @type {(node: Element) => void} */
        n(e)
      ));
    })));
  });
}
function ts(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (n = ts(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function sa() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = ts(e)) && (r && (r += " "), r += t);
  return r;
}
function ns(e) {
  return typeof e == "object" ? sa(e) : e ?? "";
}
const Br = [...` 	
\r\f \v\uFEFF`];
function oa(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var i in n)
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var s = i.length, o = 0; (o = r.indexOf(i, o)) >= 0; ) {
          var a = o + s;
          (o === 0 || Br.includes(r[o - 1])) && (a === r.length || Br.includes(r[a])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(a + 1) : o = a;
        }
  }
  return r === "" ? null : r;
}
function zr(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var i in e) {
    var s = e[i];
    s != null && s !== "" && (r += " " + i + ": " + s + n);
  }
  return r;
}
function zn(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function aa(e, t) {
  if (t) {
    var n = "", r, i;
    if (Array.isArray(t) ? (r = t[0], i = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var s = !1, o = 0, a = !1, l = [];
      r && l.push(...Object.keys(r).map(zn)), i && l.push(...Object.keys(i).map(zn));
      var u = 0, d = -1;
      const y = e.length;
      for (var f = 0; f < y; f++) {
        var c = e[f];
        if (a ? c === "/" && e[f - 1] === "*" && (a = !1) : s ? s === c && (s = !1) : c === "/" && e[f + 1] === "*" ? a = !0 : c === '"' || c === "'" ? s = c : c === "(" ? o++ : c === ")" && o--, !a && s === !1 && o === 0) {
          if (c === ":" && d === -1)
            d = f;
          else if (c === ";" || f === y - 1) {
            if (d !== -1) {
              var v = zn(e.substring(u, d).trim());
              if (!l.includes(v)) {
                c !== ";" && f++;
                var h = e.substring(u, f).trim();
                n += " " + h + ";";
              }
            }
            u = f + 1, d = -1;
          }
        }
      }
    }
    return r && (n += zr(r)), i && (n += zr(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function Et(e, t, n, r, i, s) {
  var o = e.__className;
  if (L || o !== n || o === void 0) {
    var a = oa(n, r, s);
    (!L || a !== e.getAttribute("class")) && (a == null ? e.removeAttribute("class") : t ? e.className = a : e.setAttribute("class", a)), e.__className = n;
  } else if (s && i !== s)
    for (var l in s) {
      var u = !!s[l];
      (i == null || u !== !!i[l]) && e.classList.toggle(l, u);
    }
  return s;
}
function Un(e, t = {}, n, r) {
  for (var i in n) {
    var s = n[i];
    t[i] !== s && (n[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, s, r));
  }
}
function la(e, t, n, r) {
  var i = e.__style;
  if (L || i !== t) {
    var s = aa(t, r);
    (!L || s !== e.getAttribute("style")) && (s == null ? e.removeAttribute("style") : e.style.cssText = s), e.__style = t;
  } else r && (Array.isArray(r) ? (Un(e, n?.[0], r[0]), Un(e, n?.[1], r[1], "important")) : Un(e, n, r));
  return r;
}
function nr(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!fr(t))
      return eo();
    for (var r of e.options)
      r.selected = t.includes(Ur(r));
    return;
  }
  for (r of e.options) {
    var i = Ur(r);
    if (wo(i, t)) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function ua(e) {
  var t = new MutationObserver(() => {
    nr(e, e.__value);
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
function Ur(e) {
  return "__value" in e ? e.__value : e.value;
}
const nn = /* @__PURE__ */ Symbol("class"), Ft = /* @__PURE__ */ Symbol("style"), rs = /* @__PURE__ */ Symbol("is custom element"), is = /* @__PURE__ */ Symbol("is html");
function ca(e) {
  if (L) {
    var t = !1, n = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var r = e.value;
          mn(e, "value", null), e.value = r;
        }
        if (e.hasAttribute("checked")) {
          var i = e.checked;
          mn(e, "checked", null), e.checked = i;
        }
      }
    };
    e.__on_r = n, vt(n), To();
  }
}
function fa(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function mn(e, t, n, r) {
  var i = ss(e);
  if (L && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK")) {
    r || va(e, t, n ?? "");
    return;
  }
  i[t] !== (i[t] = n) && (t === "loading" && (e[Ms] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && os(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function da(e, t, n, r, i = !1, s = !1) {
  if (L && i && e.tagName === "INPUT") {
    var o = (
      /** @type {HTMLInputElement} */
      e
    ), a = o.type === "checkbox" ? "defaultChecked" : "defaultValue";
    a in n || ca(o);
  }
  var l = ss(e), u = l[rs], d = !l[is];
  let f = L && u;
  f && ye(!1);
  var c = t || {}, v = e.tagName === "OPTION";
  for (var h in t)
    h in n || (n[h] = null);
  n.class ? n.class = ns(n.class) : n.class = null, n[Ft] && (n.style ??= null);
  var y = os(e);
  for (const E in n) {
    let T = n[E];
    if (v && E === "value" && T == null) {
      e.value = e.__value = "", c[E] = T;
      continue;
    }
    if (E === "class") {
      var w = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Et(e, w, T, r, t?.[nn], n[nn]), c[E] = T, c[nn] = n[nn];
      continue;
    }
    if (E === "style") {
      la(e, T, t?.[Ft], n[Ft]), c[E] = T, c[Ft] = n[Ft];
      continue;
    }
    var m = c[E];
    if (!(T === m && !(T === void 0 && e.hasAttribute(E)))) {
      c[E] = T;
      var A = E[0] + E[1];
      if (A !== "$$")
        if (A === "on") {
          const P = {}, V = "$$" + E;
          let _ = E.slice(2);
          var C = Bo(_);
          if (jo(_) && (_ = _.slice(0, -7), P.capture = !0), !C && m) {
            if (T != null) continue;
            e.removeEventListener(_, c[V], P), c[V] = null;
          }
          if (T != null)
            if (C)
              e[`__${_}`] = T, Rn([_]);
            else {
              let R = function(S) {
                c[E].call(this, S);
              };
              var k = R;
              c[V] = Lo(_, e, R, P);
            }
          else C && (e[`__${_}`] = void 0);
        } else if (E === "style")
          mn(e, E, T);
        else if (E === "autofocus")
          So(
            /** @type {HTMLElement} */
            e,
            !!T
          );
        else if (!u && (E === "__value" || E === "value" && T != null))
          e.value = e.__value = T;
        else if (E === "selected" && v)
          fa(
            /** @type {HTMLOptionElement} */
            e,
            T
          );
        else {
          var x = E;
          d || (x = Uo(x));
          var U = x === "defaultValue" || x === "defaultChecked";
          if (T == null && !u && !U)
            if (l[E] = null, x === "value" || x === "checked") {
              let P = (
                /** @type {HTMLInputElement} */
                e
              );
              const V = t === void 0;
              if (x === "value") {
                let _ = P.defaultValue;
                P.removeAttribute(x), P.defaultValue = _, P.value = P.__value = V ? _ : null;
              } else {
                let _ = P.defaultChecked;
                P.removeAttribute(x), P.defaultChecked = _, P.checked = V ? _ : !1;
              }
            } else
              e.removeAttribute(E);
          else U || y.includes(x) && (u || typeof T != "string") ? (e[x] = T, x in l && (l[x] = W)) : typeof T != "function" && mn(e, x, T, s);
        }
    }
  }
  return f && ye(!0), c;
}
function yt(e, t, n = [], r = [], i = [], s, o = !1, a = !1) {
  Ai(i, n, r, (l) => {
    var u = void 0, d = {}, f = e.nodeName === "SELECT", c = !1;
    if (Li(() => {
      var h = t(...l.map(D)), y = da(
        e,
        u,
        h,
        s,
        o,
        a
      );
      c && f && "value" in h && nr(
        /** @type {HTMLSelectElement} */
        e,
        h.value
      );
      for (let m of Object.getOwnPropertySymbols(d))
        h[m] || Y(d[m]);
      for (let m of Object.getOwnPropertySymbols(h)) {
        var w = h[m];
        m.description === Ps && (!u || w !== u[m]) && (d[m] && Y(d[m]), d[m] = oe(() => ia(e, () => w))), y[m] = w;
      }
      u = y;
    }), f) {
      var v = (
        /** @type {HTMLSelectElement} */
        e
      );
      Qt(() => {
        nr(
          v,
          /** @type {Record<string | symbol, any>} */
          u.value,
          !0
        ), ua(v);
      });
    }
    c = !0;
  });
}
function ss(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [rs]: e.nodeName.includes("-"),
      [is]: e.namespaceURI === Is
    }
  );
}
var Vr = /* @__PURE__ */ new Map();
function os(e) {
  var t = e.getAttribute("is") || e.nodeName, n = Vr.get(t);
  if (n) return n;
  Vr.set(t, n = []);
  for (var r, i = e, s = Element.prototype; s !== i; ) {
    r = Rs(i);
    for (var o in r)
      r[o].set && n.push(o);
    i = oi(i);
  }
  return n;
}
function va(e, t, n) {
  g && (t === "srcset" && ha(e, n) || rr(e.getAttribute(t) ?? "", n) || Zs(
    t,
    e.outerHTML.replace(e.innerHTML, e.innerHTML && "..."),
    String(n)
  ));
}
function rr(e, t) {
  return e === t ? !0 : new URL(e, document.baseURI).href === new URL(t, document.baseURI).href;
}
function Kr(e) {
  return e.split(",").map((t) => t.trim().split(" ").filter(Boolean));
}
function ha(e, t) {
  var n = Kr(e.srcset), r = Kr(t);
  return r.length === n.length && r.every(
    ([i, s], o) => s === n[o][1] && // We need to test both ways because Vite will create an a full URL with
    // `new URL(asset, import.meta.url).href` for the client when `base: './'`, and the
    // relative URLs inside srcset are not automatically resolved to absolute URLs by
    // browsers (in contrast to img.src). This means both SSR and DOM code could
    // contain relative or absolute URLs.
    (rr(n[o][0], i) || rr(i, n[o][0]))
  );
}
function Hr(e, t) {
  return e === t || e?.[Ye] === t;
}
function pa(e = {}, t, n, r) {
  return Qt(() => {
    var i, s;
    return wr(() => {
      i = s, s = [], pt(() => {
        e !== n(...s) && (t(e, ...s), i && Hr(n(...i), e) && t(null, ...i));
      });
    }), () => {
      vt(() => {
        s && Hr(n(...s), e) && t(null, ...s);
      });
    };
  }), e;
}
function kr(e, t, n) {
  if (e == null)
    return t(void 0), n && n(void 0), Ke;
  const r = pt(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const gt = [];
function $t(e, t) {
  return {
    subscribe: Dn(e, t).subscribe
  };
}
function Dn(e, t = Ke) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function i(a) {
    if (_i(e, a) && (e = a, n)) {
      const l = !gt.length;
      for (const u of r)
        u[1](), gt.push(u, e);
      if (l) {
        for (let u = 0; u < gt.length; u += 2)
          gt[u][0](gt[u + 1]);
        gt.length = 0;
      }
    }
  }
  function s(a) {
    i(a(
      /** @type {T} */
      e
    ));
  }
  function o(a, l = Ke) {
    const u = [a, l];
    return r.add(u), r.size === 1 && (n = t(i, s) || Ke), a(
      /** @type {T} */
      e
    ), () => {
      r.delete(u), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: s, subscribe: o };
}
function Sr(e, t, n) {
  const r = !Array.isArray(e), i = r ? [e] : e;
  if (!i.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const s = t.length < 2;
  return $t(n, (o, a) => {
    let l = !1;
    const u = [];
    let d = 0, f = Ke;
    const c = () => {
      if (d)
        return;
      f();
      const h = t(r ? u[0] : u, o, a);
      s ? o(h) : f = typeof h == "function" ? h : Ke;
    }, v = i.map(
      (h, y) => kr(
        h,
        (w) => {
          u[y] = w, d &= ~(1 << y), l && c();
        },
        () => {
          d |= 1 << y;
        }
      )
    );
    return l = !0, c(), function() {
      ai(v), f(), l = !1;
    };
  });
}
function as(e) {
  let t;
  return kr(e, (n) => t = n)(), t;
}
let rn = !1, ir = /* @__PURE__ */ Symbol();
function Qe(e, t, n) {
  const r = n[t] ??= {
    store: null,
    source: /* @__PURE__ */ _r(void 0),
    unsubscribe: Ke
  };
  if (g && (r.source.label = t), r.store !== e && !(ir in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = Ke;
    else {
      var i = !0;
      r.unsubscribe = kr(e, (s) => {
        i ? r.source.v = s : J(r.source, s);
      }), i = !1;
    }
  return e && ir in n ? as(e) : D(r.source);
}
function ba() {
  const e = {};
  function t() {
    mr(() => {
      for (var n in e)
        e[n].unsubscribe();
      Ee(e, ir, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function _a(e) {
  var t = rn;
  try {
    return rn = !1, [e(), rn];
  } finally {
    rn = t;
  }
}
function ae(e, t, n, r) {
  var i = (n & Ts) !== 0, s = (n & As) !== 0, o = (
    /** @type {V} */
    r
  ), a = !0, l = () => (a && (a = !1, o = s ? pt(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), o), u;
  if (i) {
    var d = Ye in e || fi in e;
    u = Ve(e, t)?.set ?? (d && t in e ? (A) => e[t] = A : void 0);
  }
  var f, c = !1;
  i ? [f, c] = _a(() => (
    /** @type {V} */
    e[t]
  )) : f = /** @type {V} */
  e[t], f === void 0 && r !== void 0 && (f = l(), u && (Hs(t), u(f)));
  var v;
  if (v = () => {
    var A = (
      /** @type {V} */
      e[t]
    );
    return A === void 0 ? l() : (a = !0, A);
  }, (n & Ss) === 0)
    return v;
  if (u) {
    var h = e.$$legacy;
    return (
      /** @type {() => V} */
      (function(A, C) {
        return arguments.length > 0 ? ((!C || h || c) && u(C ? v() : A), A) : v();
      })
    );
  }
  var y = !1, w = ((n & ks) !== 0 ? Cn : xi)(() => (y = !1, v()));
  g && (w.label = t), i && D(w);
  var m = (
    /** @type {Effect} */
    j
  );
  return (
    /** @type {() => V} */
    (function(A, C) {
      if (arguments.length > 0) {
        const x = C ? D(w) : i ? Pe(A) : A;
        return J(w, x), y = !0, o !== void 0 && (o = x), A;
      }
      return ht && y || (m.f & Re) !== 0 ? w.v : D(w);
    })
  );
}
function ya(e) {
  return new ga(e);
}
class ga {
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
      var a = /* @__PURE__ */ _r(o, !1, !1);
      return n.set(s, a), a;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, o) {
          return D(n.get(o) ?? r(o, Reflect.get(s, o)));
        },
        has(s, o) {
          return o === fi ? !0 : (D(n.get(o) ?? r(o, Reflect.get(s, o))), Reflect.has(s, o));
        },
        set(s, o, a) {
          return J(n.get(o) ?? r(o, a), a), Reflect.set(s, o, a);
        }
      }
    );
    this.#e = (t.hydrate ? Ho : Zi)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    }), (!t?.props?.$$host || t.sync === !1) && Z(), this.#t = i.$$events;
    for (const s of Object.keys(this.#e))
      s === "$set" || s === "$destroy" || s === "$on" || Ee(this, s, {
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
      Yo(this.#e);
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
let ls;
typeof HTMLElement == "function" && (ls = class extends HTMLElement {
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
          i !== "default" && (o.name = i), De(s, o);
        };
      };
      var e = t;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, r = ma(this);
      for (const i of this.$$s)
        i in r && (i === "default" && !this.$$d.children ? (this.$$d.children = t(i), n.default = !0) : n[i] = t(i));
      for (const i of this.attributes) {
        const s = this.$$g_p(i.name);
        s in this.$$d || (this.$$d[s] = cn(s, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = ya({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$host: this
        }
      }), this.$$me = Oo(() => {
        wr(() => {
          this.$$r = !0;
          for (const i of dn(this.$$c)) {
            if (!this.$$p_d[i]?.reflect) continue;
            this.$$d[i] = this.$$c[i];
            const s = cn(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = cn(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
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
    return dn(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function cn(e, t, n, r) {
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
function ma(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function Ln(e, t, n, r, i, s) {
  let o = class extends ls {
    constructor() {
      super(e, n, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return dn(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return dn(t).forEach((a) => {
    Ee(o.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        l = cn(a, l, t), this.$$d[a] = l;
        var u = this.$$c;
        if (u) {
          var d = Ve(u, a)?.get;
          d ? u[a] = l : u.$set({ [a]: l });
        }
      }
    });
  }), r.forEach((a) => {
    Ee(o.prototype, a, {
      get() {
        return this.$$c?.[a];
      }
    });
  }), e.element = /** @type {any} */
  o, o;
}
var wa = /* @__PURE__ */ Je('<div class="container svelte-1xn5zvu"><div class="counter svelte-1xn5zvu"><div class="label svelte-1xn5zvu">Svelte Counter:</div> <button type="button" class="button svelte-1xn5zvu">-</button> <span class="count svelte-1xn5zvu"> </span> <button type="button" class="button svelte-1xn5zvu">+</button></div></div>');
const Ea = {
  hash: "svelte-1xn5zvu",
  code: ".container.svelte-1xn5zvu {display:flex;flex-direction:column;align-items:center;padding:1rem;border:2px solid #ff3e00;border-radius:8px;background-color:#f9f9f9;font-family:system-ui, -apple-system, sans-serif;}.counter.svelte-1xn5zvu {display:flex;align-items:center;gap:1rem;}.label.svelte-1xn5zvu {font-size:1rem;font-weight:600;color:#333;margin-bottom:0.5rem;}.button.svelte-1xn5zvu {width:40px;height:40px;font-size:1.5rem;border:2px solid #ff3e00;background-color:#ff3e00;color:white;border-radius:4px;cursor:pointer;transition:background-color 0.2s;}.button.svelte-1xn5zvu:hover {background-color:#e63900;}.button.svelte-1xn5zvu:active {background-color:#cc3300;}.count.svelte-1xn5zvu {font-size:2rem;font-weight:bold;color:#ff3e00;min-width:3rem;text-align:center;}"
};
function $a(e, t) {
  Jt(t, !0), Fn(e, Ea);
  let n = ae(t, "count", 15, 0), r = /* @__PURE__ */ _e(Pe(n()));
  _n(() => {
    J(r, n(), !0);
  });
  function i() {
    Pr(r), n(D(r));
  }
  function s() {
    Pr(r, -1), n(D(r));
  }
  var o = {
    get count() {
      return n();
    },
    set count(v = 0) {
      n(v), Z();
    }
  }, a = wa(), l = ie(a), u = Ce(ie(l), 2);
  u.__click = s;
  var d = Ce(u, 2), f = ie(d, !0);
  X(d);
  var c = Ce(d, 2);
  return c.__click = i, X(l), X(a), It(() => Pt(f, D(r))), De(e, a), Zt(o);
}
Rn(["click"]);
customElements.define("svelte-counter", Ln($a, { count: {} }, [], [], !0));
function sr(e) {
  return Object.keys(e).reduce((t, n) => e[n] === void 0 ? t : t + `${n}:${e[n]};`, "");
}
sr({
  position: "absolute",
  opacity: 0,
  "pointer-events": "none",
  margin: 0,
  transform: "translateX(-100%)"
});
function ka(e) {
  if (e !== null)
    return "";
}
function wn(...e) {
  return (...t) => {
    for (const n of e)
      typeof n == "function" && n(...t);
  };
}
function H() {
}
function us(e, ...t) {
  const n = {};
  for (const r of Object.keys(e))
    t.includes(r) || (n[r] = e[r]);
  return n;
}
function sn(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 && (t[n] = r);
  }
  return t;
}
function Yr(e) {
  function t(n) {
    return n(e), () => {
    };
  }
  return { subscribe: t };
}
const on = (e) => new Proxy(e, {
  get(t, n, r) {
    return Reflect.get(t, n, r);
  },
  ownKeys(t) {
    return Reflect.ownKeys(t).filter((n) => n !== "action");
  }
}), Wr = (e) => typeof e == "function";
ze("empty");
function ze(e, t) {
  const { stores: n, action: r, returned: i } = t ?? {}, s = (() => {
    if (n && i)
      return Sr(n, (a) => {
        const l = i(a);
        if (Wr(l)) {
          const u = (...d) => on(sn({
            ...l(...d),
            [`data-melt-${e}`]: "",
            action: r ?? H
          }));
          return u.action = r ?? H, u;
        }
        return on(sn({
          ...l,
          [`data-melt-${e}`]: "",
          action: r ?? H
        }));
      });
    {
      const l = i?.();
      if (Wr(l)) {
        const u = (...d) => on(sn({
          ...l(...d),
          [`data-melt-${e}`]: "",
          action: r ?? H
        }));
        return u.action = r ?? H, Yr(u);
      }
      return Yr(on(sn({
        ...l,
        [`data-melt-${e}`]: "",
        action: r ?? H
      })));
    }
  })(), o = r ?? (() => {
  });
  return o.subscribe = s.subscribe, o;
}
function Sa(e) {
  const t = (s) => s ? `${e}-${s}` : e, n = (s) => `data-melt-${e}${s ? `-${s}` : ""}`, r = (s) => `[data-melt-${e}${s ? `-${s}` : ""}]`;
  return {
    name: t,
    attribute: n,
    selector: r,
    getEl: (s) => document.querySelector(r(s))
  };
}
const Gr = typeof document < "u", cs = (e) => typeof e == "function";
function Ta(e) {
  return e instanceof ShadowRoot;
}
function Tr(e) {
  return e instanceof Element;
}
function Le(e) {
  return e instanceof HTMLElement;
}
function Aa(e) {
  return e !== null && typeof e == "object";
}
function xa(e) {
  return Aa(e) && "subscribe" in e;
}
function or(e, t, n, r) {
  const i = Array.isArray(t) ? t : [t];
  return i.forEach((s) => e.addEventListener(s, n, r)), () => {
    i.forEach((s) => e.removeEventListener(s, n, r));
  };
}
function an(e, t, n, r) {
  const i = Array.isArray(t) ? t : [t];
  if (typeof n == "function") {
    const s = Na((o) => n(o));
    return i.forEach((o) => e.addEventListener(o, s, r)), () => {
      i.forEach((o) => e.removeEventListener(o, s, r));
    };
  }
  return () => void 0;
}
function Oa(e) {
  const t = e.currentTarget;
  if (!Le(t))
    return null;
  const n = new CustomEvent(`m-${e.type}`, {
    detail: {
      originalEvent: e
    },
    cancelable: !0
  });
  return t.dispatchEvent(n), n;
}
function Na(e) {
  return (t) => {
    if (!Oa(t)?.defaultPrevented)
      return e(t);
  };
}
const Ia = (e) => {
  try {
    Xo(e);
  } catch {
    return e;
  }
};
function Rt(e) {
  return {
    ...e,
    get: () => as(e)
  };
}
Rt.writable = function(e) {
  const t = Dn(e);
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
Rt.derived = function(e, t) {
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
const Pa = (e, t) => {
  const n = Rt(e), r = (s, o) => {
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
function Ca(e) {
  return new Promise((t) => setTimeout(t, e));
}
let Ra = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", Fa = (e = 21) => {
  let t = "", n = e | 0;
  for (; n--; )
    t += Ra[Math.random() * 64 | 0];
  return t;
};
function Da() {
  return Fa(10);
}
function La(e) {
  return e.reduce((t, n) => (t[n] = Da(), t), {});
}
const jt = {
  ENTER: "Enter",
  ESCAPE: "Escape",
  SPACE: " "
};
function Vn(e, t = 500) {
  let n;
  const r = (...i) => {
    clearTimeout(n), n = setTimeout(() => e(...i), t);
  };
  return r.destroy = () => clearTimeout(n), r;
}
const fs = () => typeof window < "u";
function Ma() {
  return navigator.userAgentData?.platform ?? navigator.platform;
}
const ds = (e) => fs() && e.test(Ma().toLowerCase()), ja = () => fs() && !!navigator.maxTouchPoints, qa = () => ds(/^mac/) && !ja(), Ba = () => ds(/mac|iphone|ipad|ipod/i), za = () => Ba() && !qa(), Kn = "data-melt-scroll-lock";
function Xr(e, t) {
  if (!e)
    return;
  const n = e.style.cssText;
  return Object.assign(e.style, t), () => {
    e.style.cssText = n;
  };
}
function Ua(e, t, n) {
  if (!e)
    return;
  const r = e.style.getPropertyValue(t);
  return e.style.setProperty(t, n), () => {
    r ? e.style.setProperty(t, r) : e.style.removeProperty(t);
  };
}
function Va(e) {
  const t = e.getBoundingClientRect().left;
  return Math.round(t) + e.scrollLeft ? "paddingLeft" : "paddingRight";
}
function Ka(e) {
  const t = document, n = t.defaultView ?? window, { documentElement: r, body: i } = t;
  if (i.hasAttribute(Kn))
    return H;
  i.setAttribute(Kn, "");
  const o = n.innerWidth - r.clientWidth, a = () => Ua(r, "--scrollbar-width", `${o}px`), l = Va(r), u = n.getComputedStyle(i)[l], d = () => Xr(i, {
    overflow: "hidden",
    [l]: `calc(${u} + ${o}px)`
  }), f = () => {
    const { scrollX: v, scrollY: h, visualViewport: y } = n, w = y?.offsetLeft ?? 0, m = y?.offsetTop ?? 0, A = Xr(i, {
      position: "fixed",
      overflow: "hidden",
      top: `${-(h - Math.floor(m))}px`,
      left: `${-(v - Math.floor(w))}px`,
      right: "0",
      [l]: `calc(${u} + ${o}px)`
    });
    return () => {
      A?.(), n.scrollTo(v, h);
    };
  }, c = [a(), za() ? f() : d()];
  return () => {
    c.forEach((v) => v?.()), i.removeAttribute(Kn);
  };
}
function qt(e, t, n = {}) {
  const { skipFirstRun: r } = n;
  let i = !0, s;
  const o = Sr(e, (l) => {
    s?.(), i && r ? i = !1 : s = t(l);
  }).subscribe(H), a = () => {
    o(), s?.();
  };
  return Ia(a), a;
}
function Jr(e) {
  const t = {};
  return Object.keys(e).forEach((n) => {
    const r = n, i = e[r];
    t[r] = Rt(Dn(i));
  }), t;
}
function Ha(e) {
  let t = e.parentElement;
  for (; Le(t) && !t.hasAttribute("data-portal"); )
    t = t.parentElement;
  return t || "body";
}
function Ya(e, t) {
  return t !== void 0 ? t : Ha(e) === "body" ? document.body : null;
}
function vs(e, t) {
  return e === t || e.contains(t);
}
function Wa(e) {
  return e?.ownerDocument ?? document;
}
async function Zr(e) {
  const { prop: t, defaultEl: n } = e;
  if (await Promise.all([Ca(1), Wi]), t === void 0) {
    n?.focus();
    return;
  }
  const r = cs(t) ? t(n) : t;
  if (typeof r == "string") {
    const i = document.querySelector(r);
    if (!Le(i))
      return;
    i.focus();
  } else Le(r) && r.focus();
}
$t(!1), $t(!1), $t(void 0), $t(void 0);
const fn = /* @__PURE__ */ new Map(), Ga = ((e, t = {}) => {
  let n = H;
  function r(i = {}) {
    n();
    const s = { behaviorType: "close", ...i }, o = xa(s.behaviorType) ? s.behaviorType : Rt($t(s.behaviorType));
    fn.set(e, o), n = wn(or(document, "keydown", (l) => {
      if (l.key !== jt.ESCAPE || !Xa(e))
        return;
      const u = l.target;
      Le(u) && (l.preventDefault(), !Ja(l, s.ignore) && Za(o.get()) && s.handler?.(l));
    }, { passive: !1 }), qt(o, (l) => {
      l === "close" || l === "defer-otherwise-close" && [...fn.keys()][0] === e ? e.dataset.escapee = "" : delete e.dataset.escapee;
    }), o.destroy || H);
  }
  return r(t), {
    update: r,
    destroy() {
      fn.delete(e), delete e.dataset.escapee, n();
    }
  };
}), Xa = (e) => {
  const t = [...fn], n = t.findLast(([i, s]) => {
    const o = s.get();
    return o === "close" || o === "ignore";
  });
  if (n)
    return n[0] === e;
  const [r] = t[0];
  return r === e;
}, Ja = (e, t) => t ? !!(cs(t) && t(e) || Array.isArray(t) && t.some((n) => e.target === n)) : !1, Za = (e) => e === "close" || e === "defer-otherwise-close";
var hs = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], En = /* @__PURE__ */ hs.join(","), ps = typeof Element > "u", ut = ps ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, $n = !ps && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e?.ownerDocument;
}, Wt = function(t, n) {
  var r;
  n === void 0 && (n = !0);
  var i = t == null || (r = t.getAttribute) === null || r === void 0 ? void 0 : r.call(t, "inert"), s = i === "" || i === "true", o = s || n && t && Wt(t.parentNode);
  return o;
}, Qa = function(t) {
  var n, r = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return r === "" || r === "true";
}, bs = function(t, n, r) {
  if (Wt(t))
    return [];
  var i = Array.prototype.slice.apply(t.querySelectorAll(En));
  return n && ut.call(t, En) && i.unshift(t), i = i.filter(r), i;
}, kn = function(t, n, r) {
  for (var i = [], s = Array.from(t); s.length; ) {
    var o = s.shift();
    if (!Wt(o, !1))
      if (o.tagName === "SLOT") {
        var a = o.assignedElements(), l = a.length ? a : o.children, u = kn(l, !0, r);
        r.flatten ? i.push.apply(i, u) : i.push({
          scopeParent: o,
          candidates: u
        });
      } else {
        var d = ut.call(o, En);
        d && r.filter(o) && (n || !t.includes(o)) && i.push(o);
        var f = o.shadowRoot || // check for an undisclosed shadow
        typeof r.getShadowRoot == "function" && r.getShadowRoot(o), c = !Wt(f, !1) && (!r.shadowRootFilter || r.shadowRootFilter(o));
        if (f && c) {
          var v = kn(f === !0 ? o.children : f.children, !0, r);
          r.flatten ? i.push.apply(i, v) : i.push({
            scopeParent: o,
            candidates: v
          });
        } else
          s.unshift.apply(s, o.children);
      }
  }
  return i;
}, _s = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, tt = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || Qa(t)) && !_s(t) ? 0 : t.tabIndex;
}, el = function(t, n) {
  var r = tt(t);
  return r < 0 && n && !_s(t) ? 0 : r;
}, tl = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, ys = function(t) {
  return t.tagName === "INPUT";
}, nl = function(t) {
  return ys(t) && t.type === "hidden";
}, rl = function(t) {
  var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(r) {
    return r.tagName === "SUMMARY";
  });
  return n;
}, il = function(t, n) {
  for (var r = 0; r < t.length; r++)
    if (t[r].checked && t[r].form === n)
      return t[r];
}, sl = function(t) {
  if (!t.name)
    return !0;
  var n = t.form || $n(t), r = function(a) {
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
  var s = il(i, t.form);
  return !s || s === t;
}, ol = function(t) {
  return ys(t) && t.type === "radio";
}, al = function(t) {
  return ol(t) && !sl(t);
}, ll = function(t) {
  var n, r = t && $n(t), i = (n = r) === null || n === void 0 ? void 0 : n.host, s = !1;
  if (r && r !== t) {
    var o, a, l;
    for (s = !!((o = i) !== null && o !== void 0 && (a = o.ownerDocument) !== null && a !== void 0 && a.contains(i) || t != null && (l = t.ownerDocument) !== null && l !== void 0 && l.contains(t)); !s && i; ) {
      var u, d, f;
      r = $n(i), i = (u = r) === null || u === void 0 ? void 0 : u.host, s = !!((d = i) !== null && d !== void 0 && (f = d.ownerDocument) !== null && f !== void 0 && f.contains(i));
    }
  }
  return s;
}, Qr = function(t) {
  var n = t.getBoundingClientRect(), r = n.width, i = n.height;
  return r === 0 && i === 0;
}, ul = function(t, n) {
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
  var o = ut.call(t, "details>summary:first-of-type"), a = o ? t.parentElement : t;
  if (ut.call(a, "details:not([open]) *"))
    return !0;
  if (!r || r === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  r === "full-native" || r === "legacy-full") {
    if (typeof i == "function") {
      for (var l = t; t; ) {
        var u = t.parentElement, d = $n(t);
        if (u && !u.shadowRoot && i(u) === !0)
          return Qr(t);
        t.assignedSlot ? t = t.assignedSlot : !u && d !== t.ownerDocument ? t = d.host : t = u;
      }
      t = l;
    }
    if (ll(t))
      return !t.getClientRects().length;
    if (r !== "legacy-full")
      return !0;
  } else if (r === "non-zero-area")
    return Qr(t);
  return !1;
}, cl = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var n = t.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var r = 0; r < n.children.length; r++) {
          var i = n.children.item(r);
          if (i.tagName === "LEGEND")
            return ut.call(n, "fieldset[disabled] *") ? !0 : !i.contains(t);
        }
        return !0;
      }
      n = n.parentElement;
    }
  return !1;
}, Sn = function(t, n) {
  return !(n.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  Wt(n) || nl(n) || ul(n, t) || // For a details element with a summary, the summary element gets the focus
  rl(n) || cl(n));
}, ar = function(t, n) {
  return !(al(n) || tt(n) < 0 || !Sn(t, n));
}, fl = function(t) {
  var n = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, gs = function(t) {
  var n = [], r = [];
  return t.forEach(function(i, s) {
    var o = !!i.scopeParent, a = o ? i.scopeParent : i, l = el(a, o), u = o ? gs(i.candidates) : a;
    l === 0 ? o ? n.push.apply(n, u) : n.push(a) : r.push({
      documentOrder: s,
      tabIndex: l,
      item: i,
      isScope: o,
      content: u
    });
  }), r.sort(tl).reduce(function(i, s) {
    return s.isScope ? i.push.apply(i, s.content) : i.push(s.content), i;
  }, []).concat(n);
}, dl = function(t, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = kn([t], n.includeContainer, {
    filter: ar.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: fl
  }) : r = bs(t, n.includeContainer, ar.bind(null, n)), gs(r);
}, vl = function(t, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = kn([t], n.includeContainer, {
    filter: Sn.bind(null, n),
    flatten: !0,
    getShadowRoot: n.getShadowRoot
  }) : r = bs(t, n.includeContainer, Sn.bind(null, n)), r;
}, mt = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return ut.call(t, En) === !1 ? !1 : ar(n, t);
}, hl = /* @__PURE__ */ hs.concat("iframe").join(","), Hn = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return ut.call(t, hl) === !1 ? !1 : Sn(n, t);
};
function lr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function pl(e) {
  if (Array.isArray(e)) return lr(e);
}
function ei(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = ms(e)) || t) {
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
function bl(e, t, n) {
  return (t = wl(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function _l(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function yl() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ti(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ni(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ti(Object(n), !0).forEach(function(r) {
      bl(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ti(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function gl(e) {
  return pl(e) || _l(e) || ms(e) || yl();
}
function ml(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function wl(e) {
  var t = ml(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function ms(e, t) {
  if (e) {
    if (typeof e == "string") return lr(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? lr(e, t) : void 0;
  }
}
var Ie = {
  // Returns the trap from the top of the stack.
  getActiveTrap: function(t) {
    return t?.length > 0 ? t[t.length - 1] : null;
  },
  // Pauses the currently active trap, then adds a new trap to the stack.
  activateTrap: function(t, n) {
    var r = Ie.getActiveTrap(t);
    n !== r && Ie.pauseTrap(t);
    var i = t.indexOf(n);
    i === -1 || t.splice(i, 1), t.push(n);
  },
  // Removes the trap from the top of the stack, then unpauses the next trap down.
  deactivateTrap: function(t, n) {
    var r = t.indexOf(n);
    r !== -1 && t.splice(r, 1), Ie.unpauseTrap(t);
  },
  // Pauses the trap at the top of the stack.
  pauseTrap: function(t) {
    var n = Ie.getActiveTrap(t);
    n?._setPausedState(!0);
  },
  // Unpauses the trap at the top of the stack.
  unpauseTrap: function(t) {
    var n = Ie.getActiveTrap(t);
    n && !n._isManuallyPaused() && n._setPausedState(!1);
  }
}, El = function(t) {
  return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
}, $l = function(t) {
  return t?.key === "Escape" || t?.key === "Esc" || t?.keyCode === 27;
}, Vt = function(t) {
  return t?.key === "Tab" || t?.keyCode === 9;
}, kl = function(t) {
  return Vt(t) && !t.shiftKey;
}, Sl = function(t) {
  return Vt(t) && t.shiftKey;
}, ri = function(t) {
  return setTimeout(t, 0);
}, Dt = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
    r[i - 1] = arguments[i];
  return typeof t == "function" ? t.apply(void 0, r) : t;
}, ln = function(t) {
  return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
}, Tl = [], Al = function(t, n) {
  var r = n?.document || document, i = n?.trapStack || Tl, s = ni({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    isolateSubtrees: !1,
    isKeyForward: kl,
    isKeyBackward: Sl
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
    return p && p[b] !== void 0 ? p[b] : s[$ || b];
  }, u = function(p, b) {
    var $ = typeof b?.composedPath == "function" ? b.composedPath() : void 0;
    return o.containerGroups.findIndex(function(I) {
      var N = I.container, q = I.tabbableNodes;
      return N.contains(p) || $?.includes(N) || q.find(function(O) {
        return O === p;
      });
    });
  }, d = function(p) {
    var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, $ = b.hasFallback, I = $ === void 0 ? !1 : $, N = b.params, q = N === void 0 ? [] : N, O = s[p];
    if (typeof O == "function" && (O = O.apply(void 0, gl(q))), O === !0 && (O = void 0), !O) {
      if (O === void 0 || O === !1)
        return O;
      throw new Error("`".concat(p, "` was specified but was not a node, or did not return a node"));
    }
    var B = O;
    if (typeof O == "string") {
      try {
        B = r.querySelector(O);
      } catch (F) {
        throw new Error("`".concat(p, '` appears to be an invalid selector; error="').concat(F.message, '"'));
      }
      if (!B && !I)
        throw new Error("`".concat(p, "` as selector refers to no known node"));
    }
    return B;
  }, f = function() {
    var p = d("initialFocus", {
      hasFallback: !0
    });
    if (p === !1)
      return !1;
    if (p === void 0 || p && !Hn(p, s.tabbableOptions))
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
      var b = dl(p, s.tabbableOptions), $ = vl(p, s.tabbableOptions), I = b.length > 0 ? b[0] : void 0, N = b.length > 0 ? b[b.length - 1] : void 0, q = $.find(function(F) {
        return mt(F);
      }), O = $.slice().reverse().find(function(F) {
        return mt(F);
      }), B = !!b.find(function(F) {
        return tt(F) > 0;
      });
      return {
        container: p,
        tabbableNodes: b,
        focusableNodes: $,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: B,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: I,
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
        firstDomTabbableNode: q,
        /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
        lastDomTabbableNode: O,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(se) {
          var ne = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, fe = b.indexOf(se);
          return fe < 0 ? ne ? $.slice($.indexOf(se) + 1).find(function(Oe) {
            return mt(Oe);
          }) : $.slice(0, $.indexOf(se)).reverse().find(function(Oe) {
            return mt(Oe);
          }) : b[fe + (ne ? 1 : -1)];
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
  }, v = function(p) {
    var b = p.activeElement;
    if (b)
      return b.shadowRoot && b.shadowRoot.activeElement !== null ? v(b.shadowRoot) : b;
  }, h = function(p) {
    if (p !== !1 && p !== v(document)) {
      if (!p || !p.focus) {
        h(f());
        return;
      }
      p.focus({
        preventScroll: !!s.preventScroll
      }), o.mostRecentlyFocusedNode = p, El(p) && p.select();
    }
  }, y = function(p) {
    var b = d("setReturnFocus", {
      params: [p]
    });
    return b || (b === !1 ? !1 : p);
  }, w = function(p) {
    var b = p.target, $ = p.event, I = p.isBackward, N = I === void 0 ? !1 : I;
    b = b || ln($), c();
    var q = null;
    if (o.tabbableGroups.length > 0) {
      var O = u(b, $), B = O >= 0 ? o.containerGroups[O] : void 0;
      if (O < 0)
        N ? q = o.tabbableGroups[o.tabbableGroups.length - 1].lastTabbableNode : q = o.tabbableGroups[0].firstTabbableNode;
      else if (N) {
        var F = o.tabbableGroups.findIndex(function(Mn) {
          var jn = Mn.firstTabbableNode;
          return b === jn;
        });
        if (F < 0 && (B.container === b || Hn(b, s.tabbableOptions) && !mt(b, s.tabbableOptions) && !B.nextTabbableNode(b, !1)) && (F = O), F >= 0) {
          var se = F === 0 ? o.tabbableGroups.length - 1 : F - 1, ne = o.tabbableGroups[se];
          q = tt(b) >= 0 ? ne.lastTabbableNode : ne.lastDomTabbableNode;
        } else Vt($) || (q = B.nextTabbableNode(b, !1));
      } else {
        var fe = o.tabbableGroups.findIndex(function(Mn) {
          var jn = Mn.lastTabbableNode;
          return b === jn;
        });
        if (fe < 0 && (B.container === b || Hn(b, s.tabbableOptions) && !mt(b, s.tabbableOptions) && !B.nextTabbableNode(b)) && (fe = O), fe >= 0) {
          var Oe = fe === o.tabbableGroups.length - 1 ? 0 : fe + 1, qe = o.tabbableGroups[Oe];
          q = tt(b) >= 0 ? qe.firstTabbableNode : qe.firstDomTabbableNode;
        } else Vt($) || (q = B.nextTabbableNode(b));
      }
    } else
      q = d("fallbackFocus");
    return q;
  }, m = function(p) {
    var b = ln(p);
    if (!(u(b, p) >= 0)) {
      if (Dt(s.clickOutsideDeactivates, p)) {
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
      Dt(s.allowOutsideClick, p) || p.preventDefault();
    }
  }, A = function(p) {
    var b = ln(p), $ = u(b, p) >= 0;
    if ($ || b instanceof Document)
      $ && (o.mostRecentlyFocusedNode = b);
    else {
      p.stopImmediatePropagation();
      var I, N = !0;
      if (o.mostRecentlyFocusedNode)
        if (tt(o.mostRecentlyFocusedNode) > 0) {
          var q = u(o.mostRecentlyFocusedNode), O = o.containerGroups[q].tabbableNodes;
          if (O.length > 0) {
            var B = O.findIndex(function(F) {
              return F === o.mostRecentlyFocusedNode;
            });
            B >= 0 && (s.isKeyForward(o.recentNavEvent) ? B + 1 < O.length && (I = O[B + 1], N = !1) : B - 1 >= 0 && (I = O[B - 1], N = !1));
          }
        } else
          o.containerGroups.some(function(F) {
            return F.tabbableNodes.some(function(se) {
              return tt(se) > 0;
            });
          }) || (N = !1);
      else
        N = !1;
      N && (I = w({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: o.mostRecentlyFocusedNode,
        isBackward: s.isKeyBackward(o.recentNavEvent)
      })), h(I || o.mostRecentlyFocusedNode || f());
    }
    o.recentNavEvent = void 0;
  }, C = function(p) {
    var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    o.recentNavEvent = p;
    var $ = w({
      event: p,
      isBackward: b
    });
    $ && (Vt(p) && p.preventDefault(), h($));
  }, x = function(p) {
    (s.isKeyForward(p) || s.isKeyBackward(p)) && C(p, s.isKeyBackward(p));
  }, U = function(p) {
    $l(p) && Dt(s.escapeDeactivates, p) !== !1 && (p.preventDefault(), a.deactivate());
  }, k = function(p) {
    var b = ln(p);
    u(b, p) >= 0 || Dt(s.clickOutsideDeactivates, p) || Dt(s.allowOutsideClick, p) || (p.preventDefault(), p.stopImmediatePropagation());
  }, E = function() {
    if (o.active)
      return Ie.activateTrap(i, a), o.delayInitialFocusTimer = s.delayInitialFocus ? ri(function() {
        h(f());
      }) : h(f()), r.addEventListener("focusin", A, !0), r.addEventListener("mousedown", m, {
        capture: !0,
        passive: !1
      }), r.addEventListener("touchstart", m, {
        capture: !0,
        passive: !1
      }), r.addEventListener("click", k, {
        capture: !0,
        passive: !1
      }), r.addEventListener("keydown", x, {
        capture: !0,
        passive: !1
      }), r.addEventListener("keydown", U), a;
  }, T = function(p) {
    o.active && !o.paused && a._setSubtreeIsolation(!1), o.adjacentElements.clear(), o.alreadyInert.clear();
    var b = /* @__PURE__ */ new Set(), $ = /* @__PURE__ */ new Set(), I = ei(p), N;
    try {
      for (I.s(); !(N = I.n()).done; ) {
        var q = N.value;
        b.add(q);
        for (var O = typeof ShadowRoot < "u" && q.getRootNode() instanceof ShadowRoot, B = q; B; ) {
          b.add(B);
          var F = B.parentElement, se = [];
          F ? se = F.children : !F && O && (se = B.getRootNode().children, F = B.getRootNode().host, O = typeof ShadowRoot < "u" && F.getRootNode() instanceof ShadowRoot);
          var ne = ei(se), fe;
          try {
            for (ne.s(); !(fe = ne.n()).done; ) {
              var Oe = fe.value;
              $.add(Oe);
            }
          } catch (qe) {
            ne.e(qe);
          } finally {
            ne.f();
          }
          B = F;
        }
      }
    } catch (qe) {
      I.e(qe);
    } finally {
      I.f();
    }
    b.forEach(function(qe) {
      $.delete(qe);
    }), o.adjacentElements = $;
  }, P = function() {
    if (o.active)
      return r.removeEventListener("focusin", A, !0), r.removeEventListener("mousedown", m, !0), r.removeEventListener("touchstart", m, !0), r.removeEventListener("click", k, !0), r.removeEventListener("keydown", x, !0), r.removeEventListener("keydown", U), a;
  }, V = function(p) {
    var b = p.some(function($) {
      var I = Array.from($.removedNodes);
      return I.some(function(N) {
        return N === o.mostRecentlyFocusedNode;
      });
    });
    b && h(f());
  }, _ = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(V) : void 0, R = function() {
    _ && (_.disconnect(), o.active && !o.paused && o.containers.map(function(p) {
      _.observe(p, {
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
      var b = l(p, "onActivate"), $ = l(p, "onPostActivate"), I = l(p, "checkCanFocusTrap"), N = Ie.getActiveTrap(i), q = !1;
      N && !N.paused && (N._setSubtreeIsolation(!1), q = !0);
      try {
        I || c(), o.active = !0, o.paused = !1, o.nodeFocusedBeforeActivation = v(r), b?.();
        var O = function() {
          I && c(), E(), R(), s.isolateSubtrees && a._setSubtreeIsolation(!0), $?.();
        };
        if (I)
          return I(o.containers.concat()).then(O, O), this;
        O();
      } catch (B) {
        throw N === Ie.getActiveTrap(i) && q && N._setSubtreeIsolation(!0), B;
      }
      return this;
    },
    deactivate: function(p) {
      if (!o.active)
        return this;
      var b = ni({
        onDeactivate: s.onDeactivate,
        onPostDeactivate: s.onPostDeactivate,
        checkCanReturnFocus: s.checkCanReturnFocus
      }, p);
      clearTimeout(o.delayInitialFocusTimer), o.delayInitialFocusTimer = void 0, o.paused || a._setSubtreeIsolation(!1), o.alreadyInert.clear(), P(), o.active = !1, o.paused = !1, R(), Ie.deactivateTrap(i, a);
      var $ = l(b, "onDeactivate"), I = l(b, "onPostDeactivate"), N = l(b, "checkCanReturnFocus"), q = l(b, "returnFocus", "returnFocusOnDeactivate");
      $?.();
      var O = function() {
        ri(function() {
          q && h(y(o.nodeFocusedBeforeActivation)), I?.();
        });
      };
      return q && N ? (N(y(o.nodeFocusedBeforeActivation)).then(O, O), this) : (O(), this);
    },
    pause: function(p) {
      return o.active ? (o.manuallyPaused = !0, this._setPausedState(!0, p)) : this;
    },
    unpause: function(p) {
      return o.active ? (o.manuallyPaused = !1, i[i.length - 1] !== this ? this : this._setPausedState(!1, p)) : this;
    },
    updateContainerElements: function(p) {
      var b = [].concat(p).filter(Boolean);
      return o.containers = b.map(function($) {
        return typeof $ == "string" ? r.querySelector($) : $;
      }), s.isolateSubtrees && T(o.containers), o.active && (c(), s.isolateSubtrees && !o.paused && a._setSubtreeIsolation(!0)), R(), this;
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
          var $ = l(b, "onPause"), I = l(b, "onPostPause");
          $?.(), P(), R(), a._setSubtreeIsolation(!1), I?.();
        } else {
          var N = l(b, "onUnpause"), q = l(b, "onPostUnpause");
          N?.(), a._setSubtreeIsolation(!0), c(), E(), R(), q?.();
        }
        return this;
      }
    },
    _setSubtreeIsolation: {
      value: function(p) {
        s.isolateSubtrees && o.adjacentElements.forEach(function(b) {
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
const xl = ((e, t = {}) => {
  let n = H;
  const r = (i) => {
    n();
    const s = Al(e, {
      returnFocusOnDeactivate: !1,
      allowOutsideClick: !0,
      escapeDeactivates: !1,
      clickOutsideDeactivates: !1,
      ...i
    });
    n = s.deactivate, s.activate();
  };
  return r(t), { destroy: n, update: r };
}), Ol = ((e, t) => {
  let n = H;
  function r(i) {
    n();
    const { onClose: s, shouldCloseOnInteractOutside: o, closeOnInteractOutside: a } = i;
    function l() {
      s?.();
    }
    function u(f) {
      const c = f.target;
      Tr(c) && f.stopImmediatePropagation();
    }
    function d(f) {
      o?.(f) && (f.stopImmediatePropagation(), l());
    }
    n = Il(e, {
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
}), Nl = ((e, t = "body") => {
  let n;
  if (!Le(t) && typeof t != "string")
    return {
      destroy: H
    };
  async function r(s = "body") {
    if (t = s, typeof t == "string") {
      if (n = document.querySelector(t), n === null && (await Wi(), n = document.querySelector(t)), n === null)
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
}), ur = /* @__PURE__ */ new Set(), Il = ((e, t = {}) => {
  let n = H, r = H, i = H, s = H;
  ur.add(e);
  const o = Wa(e);
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
    for (const m in u)
      u[m] = !1;
  }, f = () => {
    for (const m of Object.values(u))
      if (m)
        return !0;
    return !1;
  }, c = (m, A) => or(o, m, (C) => {
    u[m] = !0, A?.(C);
  }, !0), v = (m, A) => or(o, m, (C) => {
    u[m] = !1;
    const x = {};
    Le(C.target) && Ta(C.target.shadowRoot) && (x.shadowTarget = C.composedPath()[0]), A?.(C, x);
  });
  function h(m) {
    n(), r(), i(), s(), d();
    const { onInteractOutside: A, onInteractOutsideStart: C, enabled: x } = { enabled: !0, ...m };
    if (!x)
      return;
    let U = !1;
    const k = Vn((V, _) => {
      if (!U || f())
        return;
      A && ii(V, e) && C?.(V);
      const R = _?.shadowTarget ? _.shadowTarget : V.target;
      Tr(R) && vs(e, R) && (l = !0), a = !0;
    }, 10);
    r = k.destroy;
    const E = Vn((V) => {
      U && !f() && y(V) && A?.(V), w();
    }, 10);
    i = E.destroy;
    const T = Vn(d, 20);
    s = T.destroy;
    const P = () => {
      U = Pl(e);
    };
    n = wn(
      /** Capture Events For Interaction Start */
      c("pointerdown", P),
      c("mousedown", P),
      c("touchstart", P),
      /**
       * Intercepted events are reset only at the end of an interaction, allowing
       * interception at the start while still capturing the entire interaction.
       * Additionally, intercepted events are reset in the capture phase with `resetInterceptedEventsDebounced`,
       * accommodating events not invoked in the bubbling phase due to user interception.
       */
      c("pointerup", T),
      c("mouseup", T),
      c("touchend", T),
      c("click", T),
      /** Bubbling Events For Interaction Start */
      v("pointerdown", k),
      v("mousedown", k),
      v("touchstart", k),
      /**
       * To effectively detect an end of an interaction, we must monitor all relevant events,
       * not just `click` events. This is because on touch devices, actions like pressing,
       * moving the finger, and lifting it off the screen may not trigger a `click` event,
       * but should still invoke `onPointerUp` to properly handle the interaction.
       */
      v("pointerup", E),
      v("mouseup", E),
      v("touchend", E),
      v("click", E)
    );
  }
  function y(m) {
    return !!(a && !l && ii(m, e));
  }
  function w() {
    a = !1, l = !1;
  }
  return h(t), {
    update: h,
    destroy() {
      n(), r(), i(), s(), ur.delete(e);
    }
  };
});
function ii(e, t) {
  if ("button" in e && e.button > 0)
    return !1;
  const n = e.target;
  if (!Tr(n))
    return !1;
  const r = n.ownerDocument;
  return !r || !r.documentElement.contains(n) ? !1 : t && !vs(t, n);
}
function Pl(e) {
  return Array.from(ur).at(-1) === e;
}
const Cl = {
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
  ...us(Cl, "isDateDisabled", "isDateUnavailable", "value", "locale", "disabled", "readonly", "minValue", "maxValue", "weekdayFormat")
});
const { name: et } = Sa("dialog"), Rl = {
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
}, Fl = ["content", "title", "description"];
function Dl(e) {
  const t = { ...Rl, ...e }, n = Jr(us(t, "ids")), { preventScroll: r, escapeBehavior: i, closeOnOutsideClick: s, role: o, portal: a, forceVisible: l, openFocus: u, closeFocus: d, onOutsideClick: f } = n, c = Rt.writable(null), v = Jr({
    ...La(Fl),
    ...t.ids
  }), h = t.open ?? Dn(t.defaultOpen), y = Pa(h, t?.onOpenChange), w = Sr([y, l], ([_, R]) => _ || R);
  let m = H;
  function A(_) {
    const R = _.currentTarget, S = _.currentTarget;
    !Le(R) || !Le(S) || (y.set(!0), c.set(S));
  }
  function C() {
    y.set(!1);
  }
  const x = ze(et("trigger"), {
    stores: [y],
    returned: ([_]) => ({
      "aria-haspopup": "dialog",
      "aria-expanded": _,
      type: "button"
    }),
    action: (_) => ({
      destroy: wn(an(_, "click", (S) => {
        A(S);
      }), an(_, "keydown", (S) => {
        S.key !== jt.ENTER && S.key !== jt.SPACE || (S.preventDefault(), A(S));
      }))
    })
  }), U = ze(et("overlay"), {
    stores: [w, y],
    returned: ([_, R]) => ({
      hidden: _ ? void 0 : !0,
      tabindex: -1,
      style: _ ? void 0 : sr({ display: "none" }),
      "aria-hidden": !0,
      "data-state": R ? "open" : "closed"
    })
  }), k = ze(et("content"), {
    stores: [w, v.content, v.description, v.title, y],
    returned: ([_, R, S, p, b]) => ({
      id: R,
      role: o.get(),
      "aria-describedby": S,
      "aria-labelledby": p,
      "aria-modal": _ ? "true" : void 0,
      "data-state": b ? "open" : "closed",
      tabindex: -1,
      hidden: _ ? void 0 : !0,
      style: _ ? void 0 : sr({ display: "none" })
    }),
    action: (_) => {
      let R = H, S = H, p = H;
      const b = qt([w, s], ([$, I]) => {
        S(), R(), p(), $ && (S = Ol(_, {
          closeOnInteractOutside: I,
          onClose: C,
          shouldCloseOnInteractOutside(N) {
            return f.get()?.(N), !N.defaultPrevented;
          }
        }).destroy, R = Ga(_, {
          handler: C,
          behaviorType: i
        }).destroy, p = xl(_, { fallbackFocus: _ }).destroy);
      });
      return {
        destroy: () => {
          m(), b(), S(), R(), p();
        }
      };
    }
  }), E = ze(et("portalled"), {
    stores: a,
    returned: (_) => ({
      "data-portal": ka(_)
    }),
    action: (_) => {
      const R = qt([a], ([S]) => {
        if (S === null)
          return H;
        const p = Ya(_, S);
        return p === null ? H : Nl(_, p).destroy;
      });
      return {
        destroy() {
          R();
        }
      };
    }
  }), T = ze(et("title"), {
    stores: [v.title],
    returned: ([_]) => ({
      id: _
    })
  }), P = ze(et("description"), {
    stores: [v.description],
    returned: ([_]) => ({
      id: _
    })
  }), V = ze(et("close"), {
    returned: () => ({
      type: "button"
    }),
    action: (_) => ({
      destroy: wn(an(_, "click", () => {
        C();
      }), an(_, "keydown", (S) => {
        S.key !== jt.SPACE && S.key !== jt.ENTER || (S.preventDefault(), C());
      }))
    })
  });
  return qt([y, r], ([_, R]) => {
    if (Gr) {
      if (R && _ && (m = Ka()), _) {
        const S = document.getElementById(v.content.get());
        Zr({ prop: u.get(), defaultEl: S });
      }
      return () => {
        l.get() || m();
      };
    }
  }), qt(y, (_) => {
    !Gr || _ || Zr({
      prop: d.get(),
      defaultEl: c.get()
    });
  }, { skipFirstRun: !0 }), {
    ids: v,
    elements: {
      content: k,
      trigger: x,
      title: T,
      description: P,
      overlay: U,
      close: V,
      portalled: E
    },
    states: {
      open: y
    },
    options: n
  };
}
var Ll = /* @__PURE__ */ Je('<p> </p> <div class="feature-list svelte-1nq4m1y"><p class="svelte-1nq4m1y">This modal demonstrates Svelte + Melt UI integration:</p> <ul class="svelte-1nq4m1y"><li class="svelte-1nq4m1y">✅ Melt UI headless components</li> <li class="svelte-1nq4m1y">✅ Svelte 5 runes ($bindable, $state)</li> <li class="svelte-1nq4m1y">✅ Automatic accessibility (ARIA)</li> <li class="svelte-1nq4m1y">✅ Automatic focus trap</li> <li class="svelte-1nq4m1y">✅ ESC key to close</li> <li class="svelte-1nq4m1y">✅ Click outside to close</li> <li class="svelte-1nq4m1y">✅ Smooth animations</li></ul></div>', 1), Ml = /* @__PURE__ */ Je('<div></div> <div><div class="modal-header svelte-1nq4m1y"><h3> </h3></div> <div class="modal-body svelte-1nq4m1y"><!></div> <div class="modal-actions svelte-1nq4m1y"><button>Close</button></div></div>', 1), jl = /* @__PURE__ */ Je('<div class="container svelte-1nq4m1y"><button>Open Svelte Modal</button> <!></div>');
const ql = {
  hash: "svelte-1nq4m1y",
  code: `
  /* Container */.container.svelte-1nq4m1y {display:inline-block;}

  /* Open Button */.open-button.svelte-1nq4m1y {padding:0.75rem 1.5rem;background-color:#ef4444;color:white;border:none;border-radius:8px;font-size:1rem;font-weight:500;cursor:pointer;transition:background-color 0.2s;}.open-button.svelte-1nq4m1y:hover {background-color:#dc2626;}.open-button.svelte-1nq4m1y:focus {outline:2px solid #ef4444;outline-offset:2px;}

  /* Overlay */.overlay.svelte-1nq4m1y {position:fixed;inset:0;z-index:50;background-color:rgba(0, 0, 0, 0.5);
    animation: svelte-1nq4m1y-fadeIn 0.2s ease-out;}

  /* Modal Content */.modal-content.svelte-1nq4m1y {position:fixed;left:50%;top:50%;z-index:51;transform:translate(-50%, -50%);max-width:28rem;width:90%;max-height:85vh;overflow-y:auto;border-radius:12px;background-color:white;padding:1.5rem;box-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
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
function Bl(e, t) {
  Jt(t, !0), Fn(e, ql);
  const n = () => Qe(h, "$trigger", u), r = () => Qe(y, "$overlay", u), i = () => Qe(w, "$content", u), s = () => Qe(m, "$titleEl", u), o = () => Qe(A, "$descriptionEl", u), a = () => Qe(C, "$close", u), l = () => Qe(x, "$open", u), [u, d] = ba();
  let f = ae(t, "title", 15, "Svelte Modal"), c = ae(t, "description", 15, "This is a modal dialog built with Svelte and Melt UI."), v = ae(t, "onbuttonclick", 15, "");
  const {
    elements: {
      trigger: h,
      overlay: y,
      content: w,
      title: m,
      description: A,
      close: C
    },
    states: { open: x }
  } = Dl({
    forceVisible: !0,
    portal: null,
    // Shadow DOM内に留める
    onOpenChange: ({ next: _ }) => {
      if (_ && v())
        try {
          new Function(v())();
        } catch (R) {
          console.error("Error executing onbuttonclick:", R);
        }
      return _;
    }
  });
  var U = {
    get title() {
      return f();
    },
    set title(_ = "Svelte Modal") {
      f(_), Z();
    },
    get description() {
      return c();
    },
    set description(_ = "This is a modal dialog built with Svelte and Melt UI.") {
      c(_), Z();
    },
    get onbuttonclick() {
      return v();
    },
    set onbuttonclick(_ = "") {
      v(_), Z();
    }
  }, k = jl(), E = ie(k);
  yt(E, () => ({ type: "button", class: "open-button", ...n() }), void 0, void 0, void 0, "svelte-1nq4m1y"), _t(E, (_) => n().action?.(_));
  var T = Ce(E, 2);
  {
    var P = (_) => {
      var R = Ml(), S = Rr(R);
      yt(S, () => ({ ...r(), class: "overlay" }), void 0, void 0, void 0, "svelte-1nq4m1y"), _t(S, (F) => r().action?.(F));
      var p = Ce(S, 2);
      yt(p, () => ({ ...i(), class: "modal-content" }), void 0, void 0, void 0, "svelte-1nq4m1y");
      var b = ie(p), $ = ie(b);
      yt($, () => ({ ...s(), class: "modal-title" }), void 0, void 0, void 0, "svelte-1nq4m1y");
      var I = ie($, !0);
      X($), _t($, (F) => s().action?.(F)), X(b);
      var N = Ce(b, 2), q = ie(N);
      ra(q, t, "content", {}, (F) => {
        var se = Ll(), ne = Rr(se);
        yt(ne, () => ({ ...o(), class: "modal-description" }), void 0, void 0, void 0, "svelte-1nq4m1y");
        var fe = ie(ne, !0);
        X(ne), _t(ne, (Oe) => o().action?.(Oe)), hi(2), It(() => Pt(fe, c())), De(F, se);
      }), X(N);
      var O = Ce(N, 2), B = ie(O);
      yt(B, () => ({ type: "button", class: "close-button", ...a() }), void 0, void 0, void 0, "svelte-1nq4m1y"), _t(B, (F) => a().action?.(F)), X(O), X(p), _t(p, (F) => i().action?.(F)), It(() => Pt(I, f())), De(_, R);
    };
    es(T, (_) => {
      l() && _(P);
    });
  }
  X(k), De(e, k);
  var V = Zt(U);
  return d(), V;
}
customElements.define("svelte-modal", Ln(Bl, { title: {}, description: {}, onbuttonclick: {} }, ["content"], [], !0));
var zl = /* @__PURE__ */ Je('<button type="button"> </button>');
const Ul = {
  hash: "svelte-js2n8k",
  code: ".button.svelte-js2n8k {display:inline-flex;align-items:center;justify-content:center;padding:0.5rem 1rem;font-size:1rem;font-weight:500;border:none;border-radius:0.375rem;cursor:pointer;transition:all 0.2s ease-in-out;font-family:inherit;}.button.svelte-js2n8k:disabled {opacity:0.5;cursor:not-allowed;}.button.svelte-js2n8k:not(:disabled):hover {transform:translateY(-1px);box-shadow:0 4px 6px rgba(0, 0, 0, 0.1);}.button.svelte-js2n8k:not(:disabled):active {transform:translateY(0);}.button--primary.svelte-js2n8k {background-color:#3b82f6;color:white;}.button--primary.svelte-js2n8k:not(:disabled):hover {background-color:#2563eb;}.button--secondary.svelte-js2n8k {background-color:#6b7280;color:white;}.button--secondary.svelte-js2n8k:not(:disabled):hover {background-color:#4b5563;}.button--success.svelte-js2n8k {background-color:#10b981;color:white;}.button--success.svelte-js2n8k:not(:disabled):hover {background-color:#059669;}.button--danger.svelte-js2n8k {background-color:#ef4444;color:white;}.button--danger.svelte-js2n8k:not(:disabled):hover {background-color:#dc2626;}.button--small.svelte-js2n8k {padding:0.25rem 0.75rem;font-size:0.875rem;}.button--large.svelte-js2n8k {padding:0.75rem 1.5rem;font-size:1.125rem;}"
};
function Vl(e, t) {
  Jt(t, !0), Fn(e, Ul);
  let n = ae(t, "label", 15, "Button"), r = ae(t, "variant", 15, "primary"), i = ae(t, "size", 15, "medium"), s = ae(t, "disabled", 15, !1), o = ae(t, "onbuttonclick", 15, "");
  function a() {
    const c = ["button"];
    return c.push(`button--${r()}`), i() !== "medium" && c.push(`button--${i()}`), c.join(" ");
  }
  function l() {
    if (!s() && o())
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
      n(c), Z();
    },
    get variant() {
      return r();
    },
    set variant(c = "primary") {
      r(c), Z();
    },
    get size() {
      return i();
    },
    set size(c = "medium") {
      i(c), Z();
    },
    get disabled() {
      return s();
    },
    set disabled(c = !1) {
      s(c), Z();
    },
    get onbuttonclick() {
      return o();
    },
    set onbuttonclick(c = "") {
      o(c), Z();
    }
  }, d = zl();
  d.__click = l;
  var f = ie(d, !0);
  return X(d), It(
    (c) => {
      Et(d, 1, c, "svelte-js2n8k"), d.disabled = s(), Pt(f, n());
    },
    [() => ns(a())]
  ), De(e, d), Zt(u);
}
Rn(["click"]);
customElements.define("svelte-button", Ln(
  Vl,
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
var Kl = /* @__PURE__ */ Je("<div> </div>"), Hl = /* @__PURE__ */ Je('<div class="dropdown__menu svelte-wpr3yy"></div>'), Yl = /* @__PURE__ */ Je('<div class="dropdown svelte-wpr3yy"><button type="button"><span> </span> <span></span></button> <!></div>');
const Wl = {
  hash: "svelte-wpr3yy",
  code: ".dropdown.svelte-wpr3yy {position:relative;display:inline-block;width:100%;max-width:300px;}.dropdown__button.svelte-wpr3yy {width:100%;padding:0.5rem 2.5rem 0.5rem 1rem;font-size:1rem;background-color:white;border:1px solid #d1d5db;border-radius:0.375rem;cursor:pointer;display:flex;align-items:center;justify-content:space-between;transition:all 0.2s ease-in-out;position:relative;}.dropdown__button.svelte-wpr3yy:hover {border-color:#9ca3af;}.dropdown__button.svelte-wpr3yy:focus {outline:none;border-color:#3b82f6;box-shadow:0 0 0 3px rgba(59, 130, 246, 0.1);}.dropdown__button--disabled.svelte-wpr3yy {opacity:0.5;cursor:not-allowed;}.dropdown__arrow.svelte-wpr3yy {position:absolute;right:1rem;width:0;height:0;border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid #6b7280;transition:transform 0.2s ease-in-out;}.dropdown__arrow--open.svelte-wpr3yy {transform:rotate(180deg);}.dropdown__menu.svelte-wpr3yy {position:absolute;top:calc(100% + 0.25rem);left:0;right:0;background-color:white;border:1px solid #d1d5db;border-radius:0.375rem;box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1);max-height:300px;overflow-y:auto;z-index:10;}.dropdown__item.svelte-wpr3yy {padding:0.5rem 1rem;cursor:pointer;transition:background-color 0.2s ease-in-out;}.dropdown__item.svelte-wpr3yy:hover {background-color:#f3f4f6;}.dropdown__item--selected.svelte-wpr3yy {background-color:#eff6ff;color:#3b82f6;font-weight:500;}.dropdown__placeholder.svelte-wpr3yy {color:#9ca3af;}"
};
function Gl(e, t) {
  Jt(t, !0), Fn(e, Wl);
  let n = ae(t, "options", 31, () => Pe([])), r = ae(t, "selected", 15, ""), i = ae(t, "placeholder", 15, "Select an option"), s = ae(t, "disabled", 15, !1), o = ae(t, "onvaluechange", 15, ""), a = /* @__PURE__ */ _o(() => typeof s() == "boolean" ? s() : s() === "true" || s() === ""), l = /* @__PURE__ */ _e(!1), u = /* @__PURE__ */ _e(Pe([]));
  _n(() => {
    let k = [];
    if (typeof n() == "string")
      try {
        const E = JSON.parse(n());
        k = Array.isArray(E) ? E : [];
      } catch (E) {
        console.error("Failed to parse options JSON:", E), k = [];
      }
    else Array.isArray(n()) && (k = n());
    JSON.stringify(D(u)) !== JSON.stringify(k) && J(u, k, !0);
  });
  function d(k) {
    D(a) || (k.stopPropagation(), J(l, !D(l)));
  }
  function f(k, E) {
    if (!D(a) && (k.stopPropagation(), r(E.value), J(l, !1), o()))
      try {
        new Function("value", "option", o())(E.value, E);
      } catch (T) {
        console.error("Error executing onvaluechange:", T);
      }
  }
  function c() {
    const k = D(u).find((E) => E.value === r());
    return k ? k.label : i();
  }
  let v;
  _n(() => {
    if (D(l)) {
      const k = (E) => {
        v && !v.contains(E.target) && J(l, !1);
      };
      return document.addEventListener("click", k), () => {
        document.removeEventListener("click", k);
      };
    }
  });
  var h = {
    get options() {
      return n();
    },
    set options(k = []) {
      n(k), Z();
    },
    get selected() {
      return r();
    },
    set selected(k = "") {
      r(k), Z();
    },
    get placeholder() {
      return i();
    },
    set placeholder(k = "Select an option") {
      i(k), Z();
    },
    get disabled() {
      return s();
    },
    set disabled(k = !1) {
      s(k), Z();
    },
    get onvaluechange() {
      return o();
    },
    set onvaluechange(k = "") {
      o(k), Z();
    }
  }, y = Yl(), w = ie(y);
  w.__click = d;
  var m = ie(w), A = ie(m, !0);
  X(m);
  var C = Ce(m, 2);
  X(w);
  var x = Ce(w, 2);
  {
    var U = (k) => {
      var E = Hl();
      ea(E, 21, () => D(u), Zo, (T, P) => {
        var V = Kl();
        V.__click = (R) => f(R, D(P));
        var _ = ie(V, !0);
        X(V), It(() => {
          Et(V, 1, `dropdown__item ${D(P).value === r() ? "dropdown__item--selected" : ""}`, "svelte-wpr3yy"), Pt(_, D(P).label);
        }), De(T, V);
      }), X(E), De(k, E);
    };
    es(x, (k) => {
      D(l) && k(U);
    });
  }
  return X(y), pa(y, (k) => v = k, () => v), It(
    (k, E) => {
      Et(w, 1, `dropdown__button ${D(a) ? "dropdown__button--disabled" : ""}`, "svelte-wpr3yy"), w.disabled = D(a), Et(m, 1, k, "svelte-wpr3yy"), Pt(A, E), Et(C, 1, `dropdown__arrow ${D(l) ? "dropdown__arrow--open" : ""}`, "svelte-wpr3yy");
    },
    [
      () => D(u).find((k) => k.value === r()) ? "" : "dropdown__placeholder",
      c
    ]
  ), De(e, y), Zt(h);
}
Rn(["click"]);
customElements.define("svelte-dropdown", Ln(
  Gl,
  {
    options: {},
    selected: {},
    placeholder: {},
    disabled: {},
    onvaluechange: {}
  },
  [],
  [],
  !0
));
