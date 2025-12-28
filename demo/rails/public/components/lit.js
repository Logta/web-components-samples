const U = globalThis, j = U.ShadowRoot && (U.ShadyCSS === void 0 || U.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, L = /* @__PURE__ */ Symbol(), J = /* @__PURE__ */ new WeakMap();
let ot = class {
  constructor(t, e, s) {
    if (this._$cssResult$ = !0, s !== L) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (j && t === void 0) {
      const s = e !== void 0 && e.length === 1;
      s && (t = J.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), s && J.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const D = (o) => new ot(typeof o == "string" ? o : o + "", void 0, L), rt = (o, ...t) => {
  const e = o.length === 1 ? o[0] : t.reduce((s, i, r) => s + ((n) => {
    if (n._$cssResult$ === !0) return n.cssText;
    if (typeof n == "number") return n;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + n + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + o[r + 1], o[0]);
  return new ot(e, o, L);
}, pt = (o, t) => {
  if (j) o.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const s = document.createElement("style"), i = U.litNonce;
    i !== void 0 && s.setAttribute("nonce", i), s.textContent = e.cssText, o.appendChild(s);
  }
}, K = j ? (o) => o : (o) => o instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const s of t.cssRules) e += s.cssText;
  return D(e);
})(o) : o;
const { is: ut, defineProperty: ft, getOwnPropertyDescriptor: $t, getOwnPropertyNames: mt, getOwnPropertySymbols: gt, getPrototypeOf: _t } = Object, N = globalThis, X = N.trustedTypes, bt = X ? X.emptyScript : "", yt = N.reactiveElementPolyfillSupport, x = (o, t) => o, k = { toAttribute(o, t) {
  switch (t) {
    case Boolean:
      o = o ? bt : null;
      break;
    case Object:
    case Array:
      o = o == null ? o : JSON.stringify(o);
  }
  return o;
}, fromAttribute(o, t) {
  let e = o;
  switch (t) {
    case Boolean:
      e = o !== null;
      break;
    case Number:
      e = o === null ? null : Number(o);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(o);
      } catch {
        e = null;
      }
  }
  return e;
} }, I = (o, t) => !ut(o, t), Y = { attribute: !0, type: String, converter: k, reflect: !1, useDefault: !1, hasChanged: I };
Symbol.metadata ??= /* @__PURE__ */ Symbol("metadata"), N.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
let b = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ??= []).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = Y) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const s = /* @__PURE__ */ Symbol(), i = this.getPropertyDescriptor(t, s, e);
      i !== void 0 && ft(this.prototype, t, i);
    }
  }
  static getPropertyDescriptor(t, e, s) {
    const { get: i, set: r } = $t(this.prototype, t) ?? { get() {
      return this[e];
    }, set(n) {
      this[e] = n;
    } };
    return { get: i, set(n) {
      const l = i?.call(this);
      r?.call(this, n), this.requestUpdate(t, l, s);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Y;
  }
  static _$Ei() {
    if (this.hasOwnProperty(x("elementProperties"))) return;
    const t = _t(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(x("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(x("properties"))) {
      const e = this.properties, s = [...mt(e), ...gt(e)];
      for (const i of s) this.createProperty(i, e[i]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [s, i] of e) this.elementProperties.set(s, i);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, s] of this.elementProperties) {
      const i = this._$Eu(e, s);
      i !== void 0 && this._$Eh.set(i, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const s = new Set(t.flat(1 / 0).reverse());
      for (const i of s) e.unshift(K(i));
    } else t !== void 0 && e.push(K(t));
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
    return pt(t, this.constructor.elementStyles), t;
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
    const s = this.constructor.elementProperties.get(t), i = this.constructor._$Eu(t, s);
    if (i !== void 0 && s.reflect === !0) {
      const r = (s.converter?.toAttribute !== void 0 ? s.converter : k).toAttribute(e, s.type);
      this._$Em = t, r == null ? this.removeAttribute(i) : this.setAttribute(i, r), this._$Em = null;
    }
  }
  _$AK(t, e) {
    const s = this.constructor, i = s._$Eh.get(t);
    if (i !== void 0 && this._$Em !== i) {
      const r = s.getPropertyOptions(i), n = typeof r.converter == "function" ? { fromAttribute: r.converter } : r.converter?.fromAttribute !== void 0 ? r.converter : k;
      this._$Em = i;
      const l = n.fromAttribute(e, r.type);
      this[i] = l ?? this._$Ej?.get(i) ?? l, this._$Em = null;
    }
  }
  requestUpdate(t, e, s, i = !1, r) {
    if (t !== void 0) {
      const n = this.constructor;
      if (i === !1 && (r = this[t]), s ??= n.getPropertyOptions(t), !((s.hasChanged ?? I)(r, e) || s.useDefault && s.reflect && r === this._$Ej?.get(t) && !this.hasAttribute(n._$Eu(t, s)))) return;
      this.C(t, e, s);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: s, reflect: i, wrapped: r }, n) {
    s && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t) && (this._$Ej.set(t, n ?? e ?? this[t]), r !== !0 || n !== void 0) || (this._$AL.has(t) || (this.hasUpdated || s || (e = void 0), this._$AL.set(t, e)), i === !0 && this._$Em !== t && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t));
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
        for (const [i, r] of this._$Ep) this[i] = r;
        this._$Ep = void 0;
      }
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [i, r] of s) {
        const { wrapped: n } = r, l = this[i];
        n !== !0 || this._$AL.has(i) || l === void 0 || this.C(i, void 0, r, l);
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
b.elementStyles = [], b.shadowRootOptions = { mode: "open" }, b[x("elementProperties")] = /* @__PURE__ */ new Map(), b[x("finalized")] = /* @__PURE__ */ new Map(), yt?.({ ReactiveElement: b }), (N.reactiveElementVersions ??= []).push("2.1.2");
const B = globalThis, F = (o) => o, T = B.trustedTypes, G = T ? T.createPolicy("lit-html", { createHTML: (o) => o }) : void 0, nt = "$lit$", $ = `lit$${Math.random().toFixed(9).slice(2)}$`, at = "?" + $, vt = `<${at}>`, _ = document, S = () => _.createComment(""), w = (o) => o === null || typeof o != "object" && typeof o != "function", q = Array.isArray, At = (o) => q(o) || typeof o?.[Symbol.iterator] == "function", z = `[ 	
\f\r]`, E = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Q = /-->/g, tt = />/g, m = RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), et = /'/g, st = /"/g, lt = /^(?:script|style|textarea|title)$/i, Et = (o) => (t, ...e) => ({ _$litType$: o, strings: t, values: e }), ht = Et(1), v = /* @__PURE__ */ Symbol.for("lit-noChange"), d = /* @__PURE__ */ Symbol.for("lit-nothing"), it = /* @__PURE__ */ new WeakMap(), g = _.createTreeWalker(_, 129);
function ct(o, t) {
  if (!q(o) || !o.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return G !== void 0 ? G.createHTML(t) : t;
}
const xt = (o, t) => {
  const e = o.length - 1, s = [];
  let i, r = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", n = E;
  for (let l = 0; l < e; l++) {
    const a = o[l];
    let c, p, h = -1, u = 0;
    for (; u < a.length && (n.lastIndex = u, p = n.exec(a), p !== null); ) u = n.lastIndex, n === E ? p[1] === "!--" ? n = Q : p[1] !== void 0 ? n = tt : p[2] !== void 0 ? (lt.test(p[2]) && (i = RegExp("</" + p[2], "g")), n = m) : p[3] !== void 0 && (n = m) : n === m ? p[0] === ">" ? (n = i ?? E, h = -1) : p[1] === void 0 ? h = -2 : (h = n.lastIndex - p[2].length, c = p[1], n = p[3] === void 0 ? m : p[3] === '"' ? st : et) : n === st || n === et ? n = m : n === Q || n === tt ? n = E : (n = m, i = void 0);
    const f = n === m && o[l + 1].startsWith("/>") ? " " : "";
    r += n === E ? a + vt : h >= 0 ? (s.push(c), a.slice(0, h) + nt + a.slice(h) + $ + f) : a + $ + (h === -2 ? l : f);
  }
  return [ct(o, r + (o[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), s];
};
class C {
  constructor({ strings: t, _$litType$: e }, s) {
    let i;
    this.parts = [];
    let r = 0, n = 0;
    const l = t.length - 1, a = this.parts, [c, p] = xt(t, e);
    if (this.el = C.createElement(c, s), g.currentNode = this.el.content, e === 2 || e === 3) {
      const h = this.el.content.firstChild;
      h.replaceWith(...h.childNodes);
    }
    for (; (i = g.nextNode()) !== null && a.length < l; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) for (const h of i.getAttributeNames()) if (h.endsWith(nt)) {
          const u = p[n++], f = i.getAttribute(h).split($), M = /([.?@])?(.*)/.exec(u);
          a.push({ type: 1, index: r, name: M[2], strings: f, ctor: M[1] === "." ? wt : M[1] === "?" ? Ct : M[1] === "@" ? Pt : R }), i.removeAttribute(h);
        } else h.startsWith($) && (a.push({ type: 6, index: r }), i.removeAttribute(h));
        if (lt.test(i.tagName)) {
          const h = i.textContent.split($), u = h.length - 1;
          if (u > 0) {
            i.textContent = T ? T.emptyScript : "";
            for (let f = 0; f < u; f++) i.append(h[f], S()), g.nextNode(), a.push({ type: 2, index: ++r });
            i.append(h[u], S());
          }
        }
      } else if (i.nodeType === 8) if (i.data === at) a.push({ type: 2, index: r });
      else {
        let h = -1;
        for (; (h = i.data.indexOf($, h + 1)) !== -1; ) a.push({ type: 7, index: r }), h += $.length - 1;
      }
      r++;
    }
  }
  static createElement(t, e) {
    const s = _.createElement("template");
    return s.innerHTML = t, s;
  }
}
function A(o, t, e = o, s) {
  if (t === v) return t;
  let i = s !== void 0 ? e._$Co?.[s] : e._$Cl;
  const r = w(t) ? void 0 : t._$litDirective$;
  return i?.constructor !== r && (i?._$AO?.(!1), r === void 0 ? i = void 0 : (i = new r(o), i._$AT(o, e, s)), s !== void 0 ? (e._$Co ??= [])[s] = i : e._$Cl = i), i !== void 0 && (t = A(o, i._$AS(o, t.values), i, s)), t;
}
class St {
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
    const { el: { content: e }, parts: s } = this._$AD, i = (t?.creationScope ?? _).importNode(e, !0);
    g.currentNode = i;
    let r = g.nextNode(), n = 0, l = 0, a = s[0];
    for (; a !== void 0; ) {
      if (n === a.index) {
        let c;
        a.type === 2 ? c = new O(r, r.nextSibling, this, t) : a.type === 1 ? c = new a.ctor(r, a.name, a.strings, this, t) : a.type === 6 && (c = new Ot(r, this, t)), this._$AV.push(c), a = s[++l];
      }
      n !== a?.index && (r = g.nextNode(), n++);
    }
    return g.currentNode = _, i;
  }
  p(t) {
    let e = 0;
    for (const s of this._$AV) s !== void 0 && (s.strings !== void 0 ? (s._$AI(t, s, e), e += s.strings.length - 2) : s._$AI(t[e])), e++;
  }
}
class O {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t, e, s, i) {
    this.type = 2, this._$AH = d, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = s, this.options = i, this._$Cv = i?.isConnected ?? !0;
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
    t = A(this, t, e), w(t) ? t === d || t == null || t === "" ? (this._$AH !== d && this._$AR(), this._$AH = d) : t !== this._$AH && t !== v && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : At(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== d && w(this._$AH) ? this._$AA.nextSibling.data = t : this.T(_.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    const { values: e, _$litType$: s } = t, i = typeof s == "number" ? this._$AC(t) : (s.el === void 0 && (s.el = C.createElement(ct(s.h, s.h[0]), this.options)), s);
    if (this._$AH?._$AD === i) this._$AH.p(e);
    else {
      const r = new St(i, this), n = r.u(this.options);
      r.p(e), this.T(n), this._$AH = r;
    }
  }
  _$AC(t) {
    let e = it.get(t.strings);
    return e === void 0 && it.set(t.strings, e = new C(t)), e;
  }
  k(t) {
    q(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let s, i = 0;
    for (const r of t) i === e.length ? e.push(s = new O(this.O(S()), this.O(S()), this, this.options)) : s = e[i], s._$AI(r), i++;
    i < e.length && (this._$AR(s && s._$AB.nextSibling, i), e.length = i);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    for (this._$AP?.(!1, !0, e); t !== this._$AB; ) {
      const s = F(t).nextSibling;
      F(t).remove(), t = s;
    }
  }
  setConnected(t) {
    this._$AM === void 0 && (this._$Cv = t, this._$AP?.(t));
  }
}
class R {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, s, i, r) {
    this.type = 1, this._$AH = d, this._$AN = void 0, this.element = t, this.name = e, this._$AM = i, this.options = r, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = d;
  }
  _$AI(t, e = this, s, i) {
    const r = this.strings;
    let n = !1;
    if (r === void 0) t = A(this, t, e, 0), n = !w(t) || t !== this._$AH && t !== v, n && (this._$AH = t);
    else {
      const l = t;
      let a, c;
      for (t = r[0], a = 0; a < r.length - 1; a++) c = A(this, l[s + a], e, a), c === v && (c = this._$AH[a]), n ||= !w(c) || c !== this._$AH[a], c === d ? t = d : t !== d && (t += (c ?? "") + r[a + 1]), this._$AH[a] = c;
    }
    n && !i && this.j(t);
  }
  j(t) {
    t === d ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class wt extends R {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === d ? void 0 : t;
  }
}
class Ct extends R {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== d);
  }
}
class Pt extends R {
  constructor(t, e, s, i, r) {
    super(t, e, s, i, r), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = A(this, t, e, 0) ?? d) === v) return;
    const s = this._$AH, i = t === d && s !== d || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, r = t !== d && (s === d || i);
    i && this.element.removeEventListener(this.name, this, s), r && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class Ot {
  constructor(t, e, s) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    A(this, t);
  }
}
const Mt = B.litHtmlPolyfillSupport;
Mt?.(C, O), (B.litHtmlVersions ??= []).push("3.3.2");
const Ut = (o, t, e) => {
  const s = e?.renderBefore ?? t;
  let i = s._$litPart$;
  if (i === void 0) {
    const r = e?.renderBefore ?? null;
    s._$litPart$ = i = new O(t.insertBefore(S(), r), r, void 0, e ?? {});
  }
  return i._$AI(o), i;
};
const V = globalThis;
class y extends b {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const t = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= t.firstChild, t;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = Ut(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return v;
  }
}
y._$litElement$ = !0, y.finalized = !0, V.litElementHydrateSupport?.({ LitElement: y });
const kt = V.litElementPolyfillSupport;
kt?.({ LitElement: y });
(V.litElementVersions ??= []).push("4.2.2");
const Tt = (o) => (t, e) => {
  e !== void 0 ? e.addInitializer(() => {
    customElements.define(o, t);
  }) : customElements.define(o, t);
};
const Ht = { attribute: !0, type: String, converter: k, reflect: !1, hasChanged: I }, Nt = (o = Ht, t, e) => {
  const { kind: s, metadata: i } = e;
  let r = globalThis.litPropertyMetadata.get(i);
  if (r === void 0 && globalThis.litPropertyMetadata.set(i, r = /* @__PURE__ */ new Map()), s === "setter" && ((o = Object.create(o)).wrapped = !0), r.set(e.name, o), s === "accessor") {
    const { name: n } = e;
    return { set(l) {
      const a = t.get.call(this);
      t.set.call(this, l), this.requestUpdate(n, a, o, !0, l);
    }, init(l) {
      return l !== void 0 && this.C(n, void 0, o, l), l;
    } };
  }
  if (s === "setter") {
    const { name: n } = e;
    return function(l) {
      const a = this[n];
      t.call(this, l), this.requestUpdate(n, a, o, !0, l);
    };
  }
  throw Error("Unsupported decorator location: " + s);
};
function dt(o) {
  return (t, e) => typeof e == "object" ? Nt(o, t, e) : ((s, i, r) => {
    const n = i.hasOwnProperty(r);
    return i.constructor.createProperty(r, s), n ? Object.getOwnPropertyDescriptor(i, r) : void 0;
  })(o, t, e);
}
const Rt = (o, t, e) => (e.configurable = !0, e.enumerable = !0, Reflect.decorate && typeof t != "object" && Object.defineProperty(o, t, e), e);
function zt(o, t) {
  return (e, s, i) => {
    const r = (n) => n.renderRoot?.querySelector(o) ?? null;
    return Rt(e, s, { get() {
      return r(this);
    } });
  };
}
const jt = ":host{display:block;padding:20px;border:2px solid #ff6b00;border-radius:8px;margin:10px 0;background:#fff5f0}.counter{display:flex;align-items:center;gap:15px;font-size:18px}button{padding:8px 16px;font-size:16px;border:1px solid #ff6b00;background:#ff6b00;color:#fff;border-radius:4px;cursor:pointer;transition:background .2s}button:hover{background:#e55a00}.count{font-weight:700;min-width:40px;text-align:center;font-size:24px;color:#333}.label{color:#666;font-size:14px}";
var Lt = Object.defineProperty, Dt = (o, t, e, s) => {
  for (var i = void 0, r = o.length - 1, n; r >= 0; r--)
    (n = o[r]) && (i = n(t, e, i) || i);
  return i && Lt(t, e, i), i;
};
const Z = class Z extends y {
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
    return ht`
      <div class="counter">
        <div class="label">Lit Counter:</div>
        <button @click=${this.decrement}>-</button>
        <span class="count">${this.count}</span>
        <button @click=${this.increment}>+</button>
      </div>
    `;
  }
};
Z.styles = rt`${D(jt)}`;
let H = Z;
Dt([
  dt({ type: Number })
], H.prototype, "count");
customElements.define("lit-counter", H);
const It = ".container{display:inline-block}.open-button{padding:.75rem 1.5rem;background-color:#f59e0b;color:#fff;border:none;border-radius:8px;font-size:1rem;font-weight:500;cursor:pointer;transition:background-color .2s}.open-button:hover{background-color:#d97706}.open-button:focus{outline:2px solid #f59e0b;outline-offset:2px}dialog{border:none;border-radius:12px;padding:0;max-width:28rem;box-shadow:0 20px 25px -5px #0000001a,0 10px 10px -5px #0000000a;animation:slideIn .3s cubic-bezier(.4,0,.2,1)}dialog::backdrop{background-color:#00000080;animation:fadeIn .3s cubic-bezier(.4,0,.2,1)}@keyframes slideIn{0%{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.modal-panel{padding:1.5rem;background-color:#fff}.modal-header{margin-bottom:1rem}.modal-title{font-size:1.5rem;font-weight:700;color:#111827;margin:0}.modal-body{margin-top:.5rem}.modal-description{font-size:.875rem;color:#6b7280;margin-bottom:1rem}.modal-content{margin-top:1rem}.modal-content p{margin:0 0 .75rem;color:#374151;line-height:1.6}.modal-content ul{margin:0;padding-left:1.5rem;color:#374151;line-height:1.8}.modal-content li{margin-bottom:.25rem}.modal-actions{margin-top:1.5rem;display:flex;gap:.75rem;justify-content:flex-end}.close-button{padding:.625rem 1.25rem;background-color:#f59e0b;color:#fff;border:none;border-radius:6px;font-size:.875rem;font-weight:500;cursor:pointer;transition:background-color .2s}.close-button:hover{background-color:#d97706}.close-button:focus{outline:2px solid #f59e0b;outline-offset:2px}@media(max-width:640px){dialog{max-width:90vw}.modal-panel{padding:1.25rem}.modal-title{font-size:1.25rem}}";
var Bt = Object.defineProperty, qt = Object.getOwnPropertyDescriptor, W = (o, t, e, s) => {
  for (var i = s > 1 ? void 0 : s ? qt(t, e) : t, r = o.length - 1, n; r >= 0; r--)
    (n = o[r]) && (i = (s ? n(t, e, i) : n(i)) || i);
  return s && i && Bt(t, e, i), i;
};
let P = class extends y {
  constructor() {
    super(...arguments), this.open = !1;
  }
  updated(o) {
    o.has("open") && (this.open ? this.dialog?.showModal() : this.dialog?.close());
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
  handleBackdropClick(o) {
    const e = o.target.getBoundingClientRect();
    (o.clientX < e.left || o.clientX > e.right || o.clientY < e.top || o.clientY > e.bottom) && this.closeModal();
  }
  render() {
    return ht`
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
P.styles = rt`${D(It)}`;
W([
  dt({ type: Boolean })
], P.prototype, "open", 2);
W([
  zt("dialog")
], P.prototype, "dialog", 2);
P = W([
  Tt("lit-modal")
], P);
export {
  H as LitCounter,
  P as LitModal
};
