const j = globalThis, Y = j.ShadowRoot && (j.ShadyCSS === void 0 || j.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, F = /* @__PURE__ */ Symbol(), st = /* @__PURE__ */ new WeakMap();
let ut = class {
  constructor(t, e, s) {
    if (this._$cssResult$ = !0, s !== F) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (Y && t === void 0) {
      const s = e !== void 0 && e.length === 1;
      s && (t = st.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), s && st.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const H = (i) => new ut(typeof i == "string" ? i : i + "", void 0, F), I = (i, ...t) => {
  const e = i.length === 1 ? i[0] : t.reduce((s, o, n) => s + ((r) => {
    if (r._$cssResult$ === !0) return r.cssText;
    if (typeof r == "number") return r;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + r + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + i[n + 1], i[0]);
  return new ut(e, i, F);
}, gt = (i, t) => {
  if (Y) i.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const s = document.createElement("style"), o = j.litNonce;
    o !== void 0 && s.setAttribute("nonce", o), s.textContent = e.cssText, i.appendChild(s);
  }
}, ot = Y ? (i) => i : (i) => i instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const s of t.cssRules) e += s.cssText;
  return H(e);
})(i) : i;
const { is: _t, defineProperty: yt, getOwnPropertyDescriptor: vt, getOwnPropertyNames: At, getOwnPropertySymbols: wt, getPrototypeOf: xt } = Object, q = globalThis, it = q.trustedTypes, Et = it ? it.emptyScript : "", St = q.reactiveElementPolyfillSupport, O = (i, t) => i, L = { toAttribute(i, t) {
  switch (t) {
    case Boolean:
      i = i ? Et : null;
      break;
    case Object:
    case Array:
      i = i == null ? i : JSON.stringify(i);
  }
  return i;
}, fromAttribute(i, t) {
  let e = i;
  switch (t) {
    case Boolean:
      e = i !== null;
      break;
    case Number:
      e = i === null ? null : Number(i);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(i);
      } catch {
        e = null;
      }
  }
  return e;
} }, J = (i, t) => !_t(i, t), nt = { attribute: !0, type: String, converter: L, reflect: !1, useDefault: !1, hasChanged: J };
Symbol.metadata ??= /* @__PURE__ */ Symbol("metadata"), q.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
let w = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ??= []).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = nt) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const s = /* @__PURE__ */ Symbol(), o = this.getPropertyDescriptor(t, s, e);
      o !== void 0 && yt(this.prototype, t, o);
    }
  }
  static getPropertyDescriptor(t, e, s) {
    const { get: o, set: n } = vt(this.prototype, t) ?? { get() {
      return this[e];
    }, set(r) {
      this[e] = r;
    } };
    return { get: o, set(r) {
      const l = o?.call(this);
      n?.call(this, r), this.requestUpdate(t, l, s);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? nt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(O("elementProperties"))) return;
    const t = xt(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(O("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(O("properties"))) {
      const e = this.properties, s = [...At(e), ...wt(e)];
      for (const o of s) this.createProperty(o, e[o]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [s, o] of e) this.elementProperties.set(s, o);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, s] of this.elementProperties) {
      const o = this._$Eu(e, s);
      o !== void 0 && this._$Eh.set(o, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const s = new Set(t.flat(1 / 0).reverse());
      for (const o of s) e.unshift(ot(o));
    } else t !== void 0 && e.push(ot(t));
    return e;
  }
  static _$Eu(t, e) {
    const s = e.attribute;
    return s === !1 ? void 0 : typeof s == "string" ? s : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise((t) => this.enableUpdating = t), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t) => t(this));
  }
  addController(t) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(t), this.renderRoot !== void 0 && this.isConnected && t.hostConnected?.();
  }
  removeController(t) {
    this._$EO?.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const s of e.keys()) this.hasOwnProperty(s) && (t.set(s, this[s]), delete this[s]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return gt(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((t) => t.hostConnected?.());
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((t) => t.hostDisconnected?.());
  }
  attributeChangedCallback(t, e, s) {
    this._$AK(t, s);
  }
  _$ET(t, e) {
    const s = this.constructor.elementProperties.get(t), o = this.constructor._$Eu(t, s);
    if (o !== void 0 && s.reflect === !0) {
      const n = (s.converter?.toAttribute !== void 0 ? s.converter : L).toAttribute(e, s.type);
      this._$Em = t, n == null ? this.removeAttribute(o) : this.setAttribute(o, n), this._$Em = null;
    }
  }
  _$AK(t, e) {
    const s = this.constructor, o = s._$Eh.get(t);
    if (o !== void 0 && this._$Em !== o) {
      const n = s.getPropertyOptions(o), r = typeof n.converter == "function" ? { fromAttribute: n.converter } : n.converter?.fromAttribute !== void 0 ? n.converter : L;
      this._$Em = o;
      const l = r.fromAttribute(e, n.type);
      this[o] = l ?? this._$Ej?.get(o) ?? l, this._$Em = null;
    }
  }
  requestUpdate(t, e, s, o = !1, n) {
    if (t !== void 0) {
      const r = this.constructor;
      if (o === !1 && (n = this[t]), s ??= r.getPropertyOptions(t), !((s.hasChanged ?? J)(n, e) || s.useDefault && s.reflect && n === this._$Ej?.get(t) && !this.hasAttribute(r._$Eu(t, s)))) return;
      this.C(t, e, s);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: s, reflect: o, wrapped: n }, r) {
    s && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t) && (this._$Ej.set(t, r ?? e ?? this[t]), n !== !0 || r !== void 0) || (this._$AL.has(t) || (this.hasUpdated || s || (e = void 0), this._$AL.set(t, e)), o === !0 && this._$Em !== t && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [o, n] of this._$Ep) this[o] = n;
        this._$Ep = void 0;
      }
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [o, n] of s) {
        const { wrapped: r } = n, l = this[o];
        r !== !0 || this._$AL.has(o) || l === void 0 || this.C(o, void 0, n, l);
      }
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), this._$EO?.forEach((s) => s.hostUpdate?.()), this.update(e)) : this._$EM();
    } catch (s) {
      throw t = !1, this._$EM(), s;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    this._$EO?.forEach((e) => e.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Eq &&= this._$Eq.forEach((e) => this._$ET(e, this[e])), this._$EM();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
w.elementStyles = [], w.shadowRootOptions = { mode: "open" }, w[O("elementProperties")] = /* @__PURE__ */ new Map(), w[O("finalized")] = /* @__PURE__ */ new Map(), St?.({ ReactiveElement: w }), (q.reactiveElementVersions ??= []).push("2.1.2");
const Z = globalThis, rt = (i) => i, B = Z.trustedTypes, at = B ? B.createPolicy("lit-html", { createHTML: (i) => i }) : void 0, ft = "$lit$", $ = `lit$${Math.random().toFixed(9).slice(2)}$`, bt = "?" + $, Ct = `<${bt}>`, A = document, P = () => A.createComment(""), M = (i) => i === null || typeof i != "object" && typeof i != "function", K = Array.isArray, kt = (i) => K(i) || typeof i?.[Symbol.iterator] == "function", W = `[ 	
\f\r]`, k = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, lt = /-->/g, dt = />/g, y = RegExp(`>|${W}(?:([^\\s"'>=/]+)(${W}*=${W}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), ct = /'/g, ht = /"/g, mt = /^(?:script|style|textarea|title)$/i, Ot = (i) => (t, ...e) => ({ _$litType$: i, strings: t, values: e }), x = Ot(1), E = /* @__PURE__ */ Symbol.for("lit-noChange"), h = /* @__PURE__ */ Symbol.for("lit-nothing"), pt = /* @__PURE__ */ new WeakMap(), v = A.createTreeWalker(A, 129);
function $t(i, t) {
  if (!K(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return at !== void 0 ? at.createHTML(t) : t;
}
const Pt = (i, t) => {
  const e = i.length - 1, s = [];
  let o, n = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", r = k;
  for (let l = 0; l < e; l++) {
    const a = i[l];
    let c, p, d = -1, f = 0;
    for (; f < a.length && (r.lastIndex = f, p = r.exec(a), p !== null); ) f = r.lastIndex, r === k ? p[1] === "!--" ? r = lt : p[1] !== void 0 ? r = dt : p[2] !== void 0 ? (mt.test(p[2]) && (o = RegExp("</" + p[2], "g")), r = y) : p[3] !== void 0 && (r = y) : r === y ? p[0] === ">" ? (r = o ?? k, d = -1) : p[1] === void 0 ? d = -2 : (d = r.lastIndex - p[2].length, c = p[1], r = p[3] === void 0 ? y : p[3] === '"' ? ht : ct) : r === ht || r === ct ? r = y : r === lt || r === dt ? r = k : (r = y, o = void 0);
    const m = r === y && i[l + 1].startsWith("/>") ? " " : "";
    n += r === k ? a + Ct : d >= 0 ? (s.push(c), a.slice(0, d) + ft + a.slice(d) + $ + m) : a + $ + (d === -2 ? l : m);
  }
  return [$t(i, n + (i[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), s];
};
class U {
  constructor({ strings: t, _$litType$: e }, s) {
    let o;
    this.parts = [];
    let n = 0, r = 0;
    const l = t.length - 1, a = this.parts, [c, p] = Pt(t, e);
    if (this.el = U.createElement(c, s), v.currentNode = this.el.content, e === 2 || e === 3) {
      const d = this.el.content.firstChild;
      d.replaceWith(...d.childNodes);
    }
    for (; (o = v.nextNode()) !== null && a.length < l; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const d of o.getAttributeNames()) if (d.endsWith(ft)) {
          const f = p[r++], m = o.getAttribute(d).split($), R = /([.?@])?(.*)/.exec(f);
          a.push({ type: 1, index: n, name: R[2], strings: m, ctor: R[1] === "." ? Ut : R[1] === "?" ? Tt : R[1] === "@" ? Ht : V }), o.removeAttribute(d);
        } else d.startsWith($) && (a.push({ type: 6, index: n }), o.removeAttribute(d));
        if (mt.test(o.tagName)) {
          const d = o.textContent.split($), f = d.length - 1;
          if (f > 0) {
            o.textContent = B ? B.emptyScript : "";
            for (let m = 0; m < f; m++) o.append(d[m], P()), v.nextNode(), a.push({ type: 2, index: ++n });
            o.append(d[f], P());
          }
        }
      } else if (o.nodeType === 8) if (o.data === bt) a.push({ type: 2, index: n });
      else {
        let d = -1;
        for (; (d = o.data.indexOf($, d + 1)) !== -1; ) a.push({ type: 7, index: n }), d += $.length - 1;
      }
      n++;
    }
  }
  static createElement(t, e) {
    const s = A.createElement("template");
    return s.innerHTML = t, s;
  }
}
function S(i, t, e = i, s) {
  if (t === E) return t;
  let o = s !== void 0 ? e._$Co?.[s] : e._$Cl;
  const n = M(t) ? void 0 : t._$litDirective$;
  return o?.constructor !== n && (o?._$AO?.(!1), n === void 0 ? o = void 0 : (o = new n(i), o._$AT(i, e, s)), s !== void 0 ? (e._$Co ??= [])[s] = o : e._$Cl = o), o !== void 0 && (t = S(i, o._$AS(i, t.values), o, s)), t;
}
class Mt {
  constructor(t, e) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: e }, parts: s } = this._$AD, o = (t?.creationScope ?? A).importNode(e, !0);
    v.currentNode = o;
    let n = v.nextNode(), r = 0, l = 0, a = s[0];
    for (; a !== void 0; ) {
      if (r === a.index) {
        let c;
        a.type === 2 ? c = new z(n, n.nextSibling, this, t) : a.type === 1 ? c = new a.ctor(n, a.name, a.strings, this, t) : a.type === 6 && (c = new zt(n, this, t)), this._$AV.push(c), a = s[++l];
      }
      r !== a?.index && (n = v.nextNode(), r++);
    }
    return v.currentNode = A, o;
  }
  p(t) {
    let e = 0;
    for (const s of this._$AV) s !== void 0 && (s.strings !== void 0 ? (s._$AI(t, s, e), e += s.strings.length - 2) : s._$AI(t[e])), e++;
  }
}
class z {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t, e, s, o) {
    this.type = 2, this._$AH = h, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = s, this.options = o, this._$Cv = o?.isConnected ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && t?.nodeType === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = S(this, t, e), M(t) ? t === h || t == null || t === "" ? (this._$AH !== h && this._$AR(), this._$AH = h) : t !== this._$AH && t !== E && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : kt(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== h && M(this._$AH) ? this._$AA.nextSibling.data = t : this.T(A.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    const { values: e, _$litType$: s } = t, o = typeof s == "number" ? this._$AC(t) : (s.el === void 0 && (s.el = U.createElement($t(s.h, s.h[0]), this.options)), s);
    if (this._$AH?._$AD === o) this._$AH.p(e);
    else {
      const n = new Mt(o, this), r = n.u(this.options);
      n.p(e), this.T(r), this._$AH = n;
    }
  }
  _$AC(t) {
    let e = pt.get(t.strings);
    return e === void 0 && pt.set(t.strings, e = new U(t)), e;
  }
  k(t) {
    K(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let s, o = 0;
    for (const n of t) o === e.length ? e.push(s = new z(this.O(P()), this.O(P()), this, this.options)) : s = e[o], s._$AI(n), o++;
    o < e.length && (this._$AR(s && s._$AB.nextSibling, o), e.length = o);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    for (this._$AP?.(!1, !0, e); t !== this._$AB; ) {
      const s = rt(t).nextSibling;
      rt(t).remove(), t = s;
    }
  }
  setConnected(t) {
    this._$AM === void 0 && (this._$Cv = t, this._$AP?.(t));
  }
}
class V {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, s, o, n) {
    this.type = 1, this._$AH = h, this._$AN = void 0, this.element = t, this.name = e, this._$AM = o, this.options = n, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = h;
  }
  _$AI(t, e = this, s, o) {
    const n = this.strings;
    let r = !1;
    if (n === void 0) t = S(this, t, e, 0), r = !M(t) || t !== this._$AH && t !== E, r && (this._$AH = t);
    else {
      const l = t;
      let a, c;
      for (t = n[0], a = 0; a < n.length - 1; a++) c = S(this, l[s + a], e, a), c === E && (c = this._$AH[a]), r ||= !M(c) || c !== this._$AH[a], c === h ? t = h : t !== h && (t += (c ?? "") + n[a + 1]), this._$AH[a] = c;
    }
    r && !o && this.j(t);
  }
  j(t) {
    t === h ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class Ut extends V {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === h ? void 0 : t;
  }
}
class Tt extends V {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== h);
  }
}
class Ht extends V {
  constructor(t, e, s, o, n) {
    super(t, e, s, o, n), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = S(this, t, e, 0) ?? h) === E) return;
    const s = this._$AH, o = t === h && s !== h || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, n = t !== h && (s === h || o);
    o && this.element.removeEventListener(this.name, this, s), n && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class zt {
  constructor(t, e, s) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    S(this, t);
  }
}
const Nt = Z.litHtmlPolyfillSupport;
Nt?.(U, z), (Z.litHtmlVersions ??= []).push("3.3.2");
const Rt = (i, t, e) => {
  const s = e?.renderBefore ?? t;
  let o = s._$litPart$;
  if (o === void 0) {
    const n = e?.renderBefore ?? null;
    s._$litPart$ = o = new z(t.insertBefore(P(), n), n, void 0, e ?? {});
  }
  return o._$AI(i), o;
};
const X = globalThis;
class g extends w {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const t = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= t.firstChild, t;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = Rt(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return E;
  }
}
g._$litElement$ = !0, g.finalized = !0, X.litElementHydrateSupport?.({ LitElement: g });
const jt = X.litElementPolyfillSupport;
jt?.({ LitElement: g });
(X.litElementVersions ??= []).push("4.2.2");
const Lt = (i) => (t, e) => {
  e !== void 0 ? e.addInitializer(() => {
    customElements.define(i, t);
  }) : customElements.define(i, t);
};
const Bt = { attribute: !0, type: String, converter: L, reflect: !1, hasChanged: J }, Dt = (i = Bt, t, e) => {
  const { kind: s, metadata: o } = e;
  let n = globalThis.litPropertyMetadata.get(o);
  if (n === void 0 && globalThis.litPropertyMetadata.set(o, n = /* @__PURE__ */ new Map()), s === "setter" && ((i = Object.create(i)).wrapped = !0), n.set(e.name, i), s === "accessor") {
    const { name: r } = e;
    return { set(l) {
      const a = t.get.call(this);
      t.set.call(this, l), this.requestUpdate(r, a, i, !0, l);
    }, init(l) {
      return l !== void 0 && this.C(r, void 0, i, l), l;
    } };
  }
  if (s === "setter") {
    const { name: r } = e;
    return function(l) {
      const a = this[r];
      t.call(this, l), this.requestUpdate(r, a, i, !0, l);
    };
  }
  throw Error("Unsupported decorator location: " + s);
};
function u(i) {
  return (t, e) => typeof e == "object" ? Dt(i, t, e) : ((s, o, n) => {
    const r = o.hasOwnProperty(n);
    return o.constructor.createProperty(n, s), r ? Object.getOwnPropertyDescriptor(o, n) : void 0;
  })(i, t, e);
}
function It(i) {
  return u({ ...i, state: !0, attribute: !1 });
}
const qt = (i, t, e) => (e.configurable = !0, e.enumerable = !0, Reflect.decorate && typeof t != "object" && Object.defineProperty(i, t, e), e);
function Vt(i, t) {
  return (e, s, o) => {
    const n = (r) => r.renderRoot?.querySelector(i) ?? null;
    return qt(e, s, { get() {
      return n(this);
    } });
  };
}
const Wt = ":host{display:block;padding:20px;border:2px solid #ff6b00;border-radius:8px;margin:10px 0;background:#fff5f0}.counter{display:flex;align-items:center;gap:15px;font-size:18px}button{padding:8px 16px;font-size:16px;border:1px solid #ff6b00;background:#ff6b00;color:#fff;border-radius:4px;cursor:pointer;transition:background .2s}button:hover{background:#e55a00}.count{font-weight:700;min-width:40px;text-align:center;font-size:24px;color:#333}.label{color:#666;font-size:14px}";
var Yt = Object.defineProperty, Ft = (i, t, e, s) => {
  for (var o = void 0, n = i.length - 1, r; n >= 0; n--)
    (r = i[n]) && (o = r(t, e, o) || o);
  return o && Yt(t, e, o), o;
};
const Q = class Q extends g {
  constructor() {
    super(...arguments), this.count = 0;
  }
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
  render() {
    return x`
      <div class="counter">
        <div class="label">Lit Counter:</div>
        <button @click=${this.decrement}>-</button>
        <span class="count">${this.count}</span>
        <button @click=${this.increment}>+</button>
      </div>
    `;
  }
};
Q.styles = I`${H(Wt)}`;
let D = Q;
Ft([
  u({ type: Number })
], D.prototype, "count");
customElements.define("lit-counter", D);
const Jt = ".container{display:inline-block}.open-button{padding:.75rem 1.5rem;background-color:#f59e0b;color:#fff;border:none;border-radius:8px;font-size:1rem;font-weight:500;cursor:pointer;transition:background-color .2s}.open-button:hover{background-color:#d97706}.open-button:focus{outline:2px solid #f59e0b;outline-offset:2px}dialog{border:none;border-radius:12px;padding:0;max-width:28rem;box-shadow:0 20px 25px -5px #0000001a,0 10px 10px -5px #0000000a;animation:slideIn .3s cubic-bezier(.4,0,.2,1)}dialog::backdrop{background-color:#00000080;animation:fadeIn .3s cubic-bezier(.4,0,.2,1)}@keyframes slideIn{0%{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.modal-panel{padding:1.5rem;background-color:#fff}.modal-header{margin-bottom:1rem}.modal-title{font-size:1.5rem;font-weight:700;color:#111827;margin:0}.modal-body{margin-top:.5rem}.modal-description{font-size:.875rem;color:#6b7280;margin-bottom:1rem}.modal-content{margin-top:1rem}.modal-content p{margin:0 0 .75rem;color:#374151;line-height:1.6}.modal-content ul{margin:0;padding-left:1.5rem;color:#374151;line-height:1.8}.modal-content li{margin-bottom:.25rem}.modal-actions{margin-top:1.5rem;display:flex;gap:.75rem;justify-content:flex-end}.close-button{padding:.625rem 1.25rem;background-color:#f59e0b;color:#fff;border:none;border-radius:6px;font-size:.875rem;font-weight:500;cursor:pointer;transition:background-color .2s}.close-button:hover{background-color:#d97706}.close-button:focus{outline:2px solid #f59e0b;outline-offset:2px}@media(max-width:640px){dialog{max-width:90vw}.modal-panel{padding:1.25rem}.modal-title{font-size:1.25rem}}";
var Zt = Object.defineProperty, Kt = Object.getOwnPropertyDescriptor, G = (i, t, e, s) => {
  for (var o = s > 1 ? void 0 : s ? Kt(t, e) : t, n = i.length - 1, r; n >= 0; n--)
    (r = i[n]) && (o = (s ? r(t, e, o) : r(o)) || o);
  return s && o && Zt(t, e, o), o;
};
let T = class extends g {
  constructor() {
    super(...arguments), this.open = !1;
  }
  updated(i) {
    i.has("open") && (this.open ? this.dialog?.showModal() : this.dialog?.close());
  }
  openModal() {
    this.open = !0;
  }
  closeModal() {
    this.open = !1, this.dispatchEvent(new CustomEvent("modal-close"));
  }
  handleClose() {
    this.open = !1, this.dispatchEvent(new CustomEvent("modal-close"));
  }
  handleBackdropClick(i) {
    const e = i.target.getBoundingClientRect();
    (i.clientX < e.left || i.clientX > e.right || i.clientY < e.top || i.clientY > e.bottom) && this.closeModal();
  }
  render() {
    return x`
      <div class="container">
        <button type="button" class="open-button" @click=${this.openModal}>
          Open Lit Modal
        </button>

        <dialog @close=${this.handleClose} @click=${this.handleBackdropClick}>
          <div class="modal-panel">
            <div class="modal-header">
              <h3 class="modal-title">Lit Modal</h3>
            </div>

            <div class="modal-body">
              <slot name="content">
                <!-- デフォルトコンテンツ -->
                <p class="modal-description">
                  This is a modal dialog built with Lit and native HTML &lt;dialog&gt; element.
                </p>

                <div class="modal-content">
                  <p>
                    This modal demonstrates Lit + &lt;dialog&gt; integration:
                  </p>
                  <ul>
                    <li>✅ Lit reactive properties</li>
                    <li>✅ Native &lt;dialog&gt; accessibility</li>
                    <li>✅ Automatic focus trap</li>
                    <li>✅ ESC key to close (native)</li>
                    <li>✅ Click outside to close</li>
                    <li>✅ ::backdrop pseudo-element</li>
                  </ul>
                </div>
              </slot>
            </div>

            <div class="modal-actions">
              <button type="button" class="close-button" @click=${this.closeModal}>
                Close
              </button>
            </div>
          </div>
        </dialog>
      </div>
    `;
  }
};
T.styles = I`${H(Jt)}`;
G([
  u({ type: Boolean })
], T.prototype, "open", 2);
G([
  Vt("dialog")
], T.prototype, "dialog", 2);
T = G([
  Lt("lit-modal")
], T);
const Xt = ".button{display:inline-flex;align-items:center;justify-content:center;padding:.5rem 1rem;font-size:1rem;font-weight:500;border:none;border-radius:.375rem;cursor:pointer;transition:all .2s ease-in-out;font-family:inherit}.button:disabled{opacity:.5;cursor:not-allowed}.button:not(:disabled):hover{transform:translateY(-1px);box-shadow:0 4px 6px #0000001a}.button:not(:disabled):active{transform:translateY(0)}.button--primary{background-color:#3b82f6;color:#fff}.button--primary:not(:disabled):hover{background-color:#2563eb}.button--secondary{background-color:#6b7280;color:#fff}.button--secondary:not(:disabled):hover{background-color:#4b5563}.button--success{background-color:#10b981;color:#fff}.button--success:not(:disabled):hover{background-color:#059669}.button--danger{background-color:#ef4444;color:#fff}.button--danger:not(:disabled):hover{background-color:#dc2626}.button--small{padding:.25rem .75rem;font-size:.875rem}.button--large{padding:.75rem 1.5rem;font-size:1.125rem}";
var Gt = Object.defineProperty, N = (i, t, e, s) => {
  for (var o = void 0, n = i.length - 1, r; n >= 0; n--)
    (r = i[n]) && (o = r(t, e, o) || o);
  return o && Gt(t, e, o), o;
};
const tt = class tt extends g {
  constructor() {
    super(...arguments), this.label = "Button", this.variant = "primary", this.size = "medium", this.disabled = !1, this.onbuttonclick = "";
  }
  handleClick() {
    if (!this.disabled && (this.dispatchEvent(new CustomEvent("button-click", {
      bubbles: !0,
      composed: !0
    })), this.onbuttonclick))
      try {
        new Function(this.onbuttonclick)();
      } catch (t) {
        console.error("Error executing onbuttonclick:", t);
      }
  }
  getButtonClasses() {
    const t = ["button"];
    return t.push(`button--${this.variant}`), this.size !== "medium" && t.push(`button--${this.size}`), t.join(" ");
  }
  render() {
    return x`
      <button
        class="${this.getButtonClasses()}"
        ?disabled="${this.disabled}"
        @click="${this.handleClick}"
      >
        ${this.label}
      </button>
    `;
  }
};
tt.styles = I`${H(Xt)}`;
let _ = tt;
N([
  u({ type: String })
], _.prototype, "label");
N([
  u({ type: String })
], _.prototype, "variant");
N([
  u({ type: String })
], _.prototype, "size");
N([
  u({ type: Boolean })
], _.prototype, "disabled");
N([
  u({ type: String })
], _.prototype, "onbuttonclick");
customElements.define("lit-button", _);
const Qt = ".dropdown{position:relative;display:inline-block;width:100%;max-width:300px}.dropdown__button{width:100%;padding:.5rem 2.5rem .5rem 1rem;font-size:1rem;background-color:#fff;border:1px solid #d1d5db;border-radius:.375rem;cursor:pointer;display:flex;align-items:center;justify-content:space-between;transition:all .2s ease-in-out;position:relative}.dropdown__button:hover{border-color:#9ca3af}.dropdown__button:focus{outline:none;border-color:#3b82f6;box-shadow:0 0 0 3px #3b82f61a}.dropdown__button--disabled{opacity:.5;cursor:not-allowed}.dropdown__arrow{position:absolute;right:1rem;width:0;height:0;border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid #6b7280;transition:transform .2s ease-in-out}.dropdown__arrow--open{transform:rotate(180deg)}.dropdown__menu{position:absolute;top:calc(100% + .25rem);left:0;right:0;background-color:#fff;border:1px solid #d1d5db;border-radius:.375rem;box-shadow:0 10px 15px -3px #0000001a;max-height:300px;overflow-y:auto;z-index:10}.dropdown__item{padding:.5rem 1rem;cursor:pointer;transition:background-color .2s ease-in-out}.dropdown__item:hover{background-color:#f3f4f6}.dropdown__item--selected{background-color:#eff6ff;color:#3b82f6;font-weight:500}.dropdown__placeholder{color:#9ca3af}";
var te = Object.defineProperty, C = (i, t, e, s) => {
  for (var o = void 0, n = i.length - 1, r; n >= 0; n--)
    (r = i[n]) && (o = r(t, e, o) || o);
  return o && te(t, e, o), o;
};
const et = class et extends g {
  constructor() {
    super(...arguments), this.options = "[]", this.selected = "", this.placeholder = "Select an option", this.disabled = !1, this.onvaluechange = "", this.isOpen = !1, this.parsedOptions = [], this.handleClickOutside = (t) => {
      this.contains(t.target) || (this.isOpen = !1);
    };
  }
  connectedCallback() {
    super.connectedCallback(), this.parseOptions(), document.addEventListener("click", this.handleClickOutside);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), document.removeEventListener("click", this.handleClickOutside);
  }
  updated(t) {
    t.has("options") && this.parseOptions();
  }
  parseOptions() {
    try {
      this.parsedOptions = JSON.parse(this.options);
    } catch {
      this.parsedOptions = [];
    }
  }
  handleToggle() {
    this.disabled || (this.isOpen = !this.isOpen);
  }
  handleSelect(t) {
    if (!this.disabled && (this.selected = t.value, this.isOpen = !1, this.dispatchEvent(new CustomEvent("change", {
      detail: { value: t.value, option: t },
      bubbles: !0,
      composed: !0
    })), this.onvaluechange))
      try {
        new Function("value", "option", this.onvaluechange)(t.value, t);
      } catch (e) {
        console.error("Error executing onvaluechange:", e);
      }
  }
  getSelectedLabel() {
    const t = this.parsedOptions.find((e) => e.value === this.selected);
    return t ? t.label : this.placeholder;
  }
  render() {
    const t = this.getSelectedLabel(), e = !this.parsedOptions.find((s) => s.value === this.selected);
    return x`
      <div class="dropdown">
        <button
          class="dropdown__button ${this.disabled ? "dropdown__button--disabled" : ""}"
          @click="${this.handleToggle}"
          ?disabled="${this.disabled}"
        >
          <span class="${e ? "dropdown__placeholder" : ""}">
            ${t}
          </span>
          <span class="dropdown__arrow ${this.isOpen ? "dropdown__arrow--open" : ""}"></span>
        </button>
        ${this.isOpen ? x`
          <div class="dropdown__menu">
            ${this.parsedOptions.map((s) => x`
              <div
                class="dropdown__item ${s.value === this.selected ? "dropdown__item--selected" : ""}"
                @click="${() => this.handleSelect(s)}"
              >
                ${s.label}
              </div>
            `)}
          </div>
        ` : ""}
      </div>
    `;
  }
};
et.styles = I`${H(Qt)}`;
let b = et;
C([
  u({ type: String })
], b.prototype, "options");
C([
  u({ type: String })
], b.prototype, "selected");
C([
  u({ type: String })
], b.prototype, "placeholder");
C([
  u({ type: Boolean })
], b.prototype, "disabled");
C([
  u({ type: String })
], b.prototype, "onvaluechange");
C([
  It()
], b.prototype, "isOpen");
customElements.define("lit-dropdown", b);
export {
  _ as LitButton,
  D as LitCounter,
  b as LitDropdown,
  T as LitModal
};
