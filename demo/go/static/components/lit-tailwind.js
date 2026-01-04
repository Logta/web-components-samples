const se = globalThis, De = se.ShadowRoot && (se.ShadyCSS === void 0 || se.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Me = /* @__PURE__ */ Symbol(), un = /* @__PURE__ */ new WeakMap();
let Xn = class {
  constructor(e, n, r) {
    if (this._$cssResult$ = !0, r !== Me) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = n;
  }
  get styleSheet() {
    let e = this.o;
    const n = this.t;
    if (De && e === void 0) {
      const r = n !== void 0 && n.length === 1;
      r && (e = un.get(n)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), r && un.set(n, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Zn = (t) => new Xn(typeof t == "string" ? t : t + "", void 0, Me), Nt = (t, ...e) => {
  const n = t.length === 1 ? t[0] : e.reduce((r, o, i) => r + ((s) => {
    if (s._$cssResult$ === !0) return s.cssText;
    if (typeof s == "number") return s;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + s + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + t[i + 1], t[0]);
  return new Xn(n, t, Me);
}, Mr = (t, e) => {
  if (De) t.adoptedStyleSheets = e.map((n) => n instanceof CSSStyleSheet ? n : n.styleSheet);
  else for (const n of e) {
    const r = document.createElement("style"), o = se.litNonce;
    o !== void 0 && r.setAttribute("nonce", o), r.textContent = n.cssText, t.appendChild(r);
  }
}, hn = De ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((e) => {
  let n = "";
  for (const r of e.cssRules) n += r.cssText;
  return Zn(n);
})(t) : t;
const { is: Fr, defineProperty: Br, getOwnPropertyDescriptor: Hr, getOwnPropertyNames: Vr, getOwnPropertySymbols: Ur, getPrototypeOf: jr } = Object, he = globalThis, fn = he.trustedTypes, Wr = fn ? fn.emptyScript : "", zr = he.reactiveElementPolyfillSupport, Vt = (t, e) => t, ae = { toAttribute(t, e) {
  switch (e) {
    case Boolean:
      t = t ? Wr : null;
      break;
    case Object:
    case Array:
      t = t == null ? t : JSON.stringify(t);
  }
  return t;
}, fromAttribute(t, e) {
  let n = t;
  switch (e) {
    case Boolean:
      n = t !== null;
      break;
    case Number:
      n = t === null ? null : Number(t);
      break;
    case Object:
    case Array:
      try {
        n = JSON.parse(t);
      } catch {
        n = null;
      }
  }
  return n;
} }, Fe = (t, e) => !Fr(t, e), pn = { attribute: !0, type: String, converter: ae, reflect: !1, useDefault: !1, hasChanged: Fe };
Symbol.metadata ??= /* @__PURE__ */ Symbol("metadata"), he.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
let Et = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ??= []).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, n = pn) {
    if (n.state && (n.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((n = Object.create(n)).wrapped = !0), this.elementProperties.set(e, n), !n.noAccessor) {
      const r = /* @__PURE__ */ Symbol(), o = this.getPropertyDescriptor(e, r, n);
      o !== void 0 && Br(this.prototype, e, o);
    }
  }
  static getPropertyDescriptor(e, n, r) {
    const { get: o, set: i } = Hr(this.prototype, e) ?? { get() {
      return this[n];
    }, set(s) {
      this[n] = s;
    } };
    return { get: o, set(s) {
      const a = o?.call(this);
      i?.call(this, s), this.requestUpdate(e, a, r);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? pn;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Vt("elementProperties"))) return;
    const e = jr(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Vt("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Vt("properties"))) {
      const n = this.properties, r = [...Vr(n), ...Ur(n)];
      for (const o of r) this.createProperty(o, n[o]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const n = litPropertyMetadata.get(e);
      if (n !== void 0) for (const [r, o] of n) this.elementProperties.set(r, o);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [n, r] of this.elementProperties) {
      const o = this._$Eu(n, r);
      o !== void 0 && this._$Eh.set(o, n);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const n = [];
    if (Array.isArray(e)) {
      const r = new Set(e.flat(1 / 0).reverse());
      for (const o of r) n.unshift(hn(o));
    } else e !== void 0 && n.push(hn(e));
    return n;
  }
  static _$Eu(e, n) {
    const r = n.attribute;
    return r === !1 ? void 0 : typeof r == "string" ? r : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((e) => e(this));
  }
  addController(e) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(e), this.renderRoot !== void 0 && this.isConnected && e.hostConnected?.();
  }
  removeController(e) {
    this._$EO?.delete(e);
  }
  _$E_() {
    const e = /* @__PURE__ */ new Map(), n = this.constructor.elementProperties;
    for (const r of n.keys()) this.hasOwnProperty(r) && (e.set(r, this[r]), delete this[r]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Mr(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((e) => e.hostConnected?.());
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((e) => e.hostDisconnected?.());
  }
  attributeChangedCallback(e, n, r) {
    this._$AK(e, r);
  }
  _$ET(e, n) {
    const r = this.constructor.elementProperties.get(e), o = this.constructor._$Eu(e, r);
    if (o !== void 0 && r.reflect === !0) {
      const i = (r.converter?.toAttribute !== void 0 ? r.converter : ae).toAttribute(n, r.type);
      this._$Em = e, i == null ? this.removeAttribute(o) : this.setAttribute(o, i), this._$Em = null;
    }
  }
  _$AK(e, n) {
    const r = this.constructor, o = r._$Eh.get(e);
    if (o !== void 0 && this._$Em !== o) {
      const i = r.getPropertyOptions(o), s = typeof i.converter == "function" ? { fromAttribute: i.converter } : i.converter?.fromAttribute !== void 0 ? i.converter : ae;
      this._$Em = o;
      const a = s.fromAttribute(n, i.type);
      this[o] = a ?? this._$Ej?.get(o) ?? a, this._$Em = null;
    }
  }
  requestUpdate(e, n, r, o = !1, i) {
    if (e !== void 0) {
      const s = this.constructor;
      if (o === !1 && (i = this[e]), r ??= s.getPropertyOptions(e), !((r.hasChanged ?? Fe)(i, n) || r.useDefault && r.reflect && i === this._$Ej?.get(e) && !this.hasAttribute(s._$Eu(e, r)))) return;
      this.C(e, n, r);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, n, { useDefault: r, reflect: o, wrapped: i }, s) {
    r && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(e) && (this._$Ej.set(e, s ?? n ?? this[e]), i !== !0 || s !== void 0) || (this._$AL.has(e) || (this.hasUpdated || r || (n = void 0), this._$AL.set(e, n)), o === !0 && this._$Em !== e && (this._$Eq ??= /* @__PURE__ */ new Set()).add(e));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (n) {
      Promise.reject(n);
    }
    const e = this.scheduleUpdate();
    return e != null && await e, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [o, i] of this._$Ep) this[o] = i;
        this._$Ep = void 0;
      }
      const r = this.constructor.elementProperties;
      if (r.size > 0) for (const [o, i] of r) {
        const { wrapped: s } = i, a = this[o];
        s !== !0 || this._$AL.has(o) || a === void 0 || this.C(o, void 0, i, a);
      }
    }
    let e = !1;
    const n = this._$AL;
    try {
      e = this.shouldUpdate(n), e ? (this.willUpdate(n), this._$EO?.forEach((r) => r.hostUpdate?.()), this.update(n)) : this._$EM();
    } catch (r) {
      throw e = !1, this._$EM(), r;
    }
    e && this._$AE(n);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    this._$EO?.forEach((n) => n.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
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
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    this._$Eq &&= this._$Eq.forEach((n) => this._$ET(n, this[n])), this._$EM();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
};
Et.elementStyles = [], Et.shadowRootOptions = { mode: "open" }, Et[Vt("elementProperties")] = /* @__PURE__ */ new Map(), Et[Vt("finalized")] = /* @__PURE__ */ new Map(), zr?.({ ReactiveElement: Et }), (he.reactiveElementVersions ??= []).push("2.1.2");
const Be = globalThis, gn = (t) => t, le = Be.trustedTypes, mn = le ? le.createPolicy("lit-html", { createHTML: (t) => t }) : void 0, Jn = "$lit$", ot = `lit$${Math.random().toFixed(9).slice(2)}$`, Qn = "?" + ot, Gr = `<${Qn}>`, vt = document, jt = () => vt.createComment(""), Wt = (t) => t === null || typeof t != "object" && typeof t != "function", He = Array.isArray, qr = (t) => He(t) || typeof t?.[Symbol.iterator] == "function", xe = `[ 	
\f\r]`, Dt = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, vn = /-->/g, bn = />/g, dt = RegExp(`>|${xe}(?:([^\\s"'>=/]+)(${xe}*=${xe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), yn = /'/g, wn = /"/g, tr = /^(?:script|style|textarea|title)$/i, Kr = (t) => (e, ...n) => ({ _$litType$: t, strings: e, values: n }), Pt = Kr(1), $t = /* @__PURE__ */ Symbol.for("lit-noChange"), A = /* @__PURE__ */ Symbol.for("lit-nothing"), xn = /* @__PURE__ */ new WeakMap(), ht = vt.createTreeWalker(vt, 129);
function er(t, e) {
  if (!He(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return mn !== void 0 ? mn.createHTML(e) : e;
}
const Yr = (t, e) => {
  const n = t.length - 1, r = [];
  let o, i = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", s = Dt;
  for (let a = 0; a < n; a++) {
    const l = t[a];
    let c, d, h = -1, f = 0;
    for (; f < l.length && (s.lastIndex = f, d = s.exec(l), d !== null); ) f = s.lastIndex, s === Dt ? d[1] === "!--" ? s = vn : d[1] !== void 0 ? s = bn : d[2] !== void 0 ? (tr.test(d[2]) && (o = RegExp("</" + d[2], "g")), s = dt) : d[3] !== void 0 && (s = dt) : s === dt ? d[0] === ">" ? (s = o ?? Dt, h = -1) : d[1] === void 0 ? h = -2 : (h = s.lastIndex - d[2].length, c = d[1], s = d[3] === void 0 ? dt : d[3] === '"' ? wn : yn) : s === wn || s === yn ? s = dt : s === vn || s === bn ? s = Dt : (s = dt, o = void 0);
    const u = s === dt && t[a + 1].startsWith("/>") ? " " : "";
    i += s === Dt ? l + Gr : h >= 0 ? (r.push(c), l.slice(0, h) + Jn + l.slice(h) + ot + u) : l + ot + (h === -2 ? a : u);
  }
  return [er(t, i + (t[n] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), r];
};
class zt {
  constructor({ strings: e, _$litType$: n }, r) {
    let o;
    this.parts = [];
    let i = 0, s = 0;
    const a = e.length - 1, l = this.parts, [c, d] = Yr(e, n);
    if (this.el = zt.createElement(c, r), ht.currentNode = this.el.content, n === 2 || n === 3) {
      const h = this.el.content.firstChild;
      h.replaceWith(...h.childNodes);
    }
    for (; (o = ht.nextNode()) !== null && l.length < a; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const h of o.getAttributeNames()) if (h.endsWith(Jn)) {
          const f = d[s++], u = o.getAttribute(h).split(ot), p = /([.?@])?(.*)/.exec(f);
          l.push({ type: 1, index: i, name: p[2], strings: u, ctor: p[1] === "." ? Zr : p[1] === "?" ? Jr : p[1] === "@" ? Qr : fe }), o.removeAttribute(h);
        } else h.startsWith(ot) && (l.push({ type: 6, index: i }), o.removeAttribute(h));
        if (tr.test(o.tagName)) {
          const h = o.textContent.split(ot), f = h.length - 1;
          if (f > 0) {
            o.textContent = le ? le.emptyScript : "";
            for (let u = 0; u < f; u++) o.append(h[u], jt()), ht.nextNode(), l.push({ type: 2, index: ++i });
            o.append(h[f], jt());
          }
        }
      } else if (o.nodeType === 8) if (o.data === Qn) l.push({ type: 2, index: i });
      else {
        let h = -1;
        for (; (h = o.data.indexOf(ot, h + 1)) !== -1; ) l.push({ type: 7, index: i }), h += ot.length - 1;
      }
      i++;
    }
  }
  static createElement(e, n) {
    const r = vt.createElement("template");
    return r.innerHTML = e, r;
  }
}
function St(t, e, n = t, r) {
  if (e === $t) return e;
  let o = r !== void 0 ? n._$Co?.[r] : n._$Cl;
  const i = Wt(e) ? void 0 : e._$litDirective$;
  return o?.constructor !== i && (o?._$AO?.(!1), i === void 0 ? o = void 0 : (o = new i(t), o._$AT(t, n, r)), r !== void 0 ? (n._$Co ??= [])[r] = o : n._$Cl = o), o !== void 0 && (e = St(t, o._$AS(t, e.values), o, r)), e;
}
class Xr {
  constructor(e, n) {
    this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = n;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(e) {
    const { el: { content: n }, parts: r } = this._$AD, o = (e?.creationScope ?? vt).importNode(n, !0);
    ht.currentNode = o;
    let i = ht.nextNode(), s = 0, a = 0, l = r[0];
    for (; l !== void 0; ) {
      if (s === l.index) {
        let c;
        l.type === 2 ? c = new Yt(i, i.nextSibling, this, e) : l.type === 1 ? c = new l.ctor(i, l.name, l.strings, this, e) : l.type === 6 && (c = new to(i, this, e)), this._$AV.push(c), l = r[++a];
      }
      s !== l?.index && (i = ht.nextNode(), s++);
    }
    return ht.currentNode = vt, o;
  }
  p(e) {
    let n = 0;
    for (const r of this._$AV) r !== void 0 && (r.strings !== void 0 ? (r._$AI(e, r, n), n += r.strings.length - 2) : r._$AI(e[n])), n++;
  }
}
class Yt {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(e, n, r, o) {
    this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = e, this._$AB = n, this._$AM = r, this.options = o, this._$Cv = o?.isConnected ?? !0;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const n = this._$AM;
    return n !== void 0 && e?.nodeType === 11 && (e = n.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, n = this) {
    e = St(this, e, n), Wt(e) ? e === A || e == null || e === "" ? (this._$AH !== A && this._$AR(), this._$AH = A) : e !== this._$AH && e !== $t && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : qr(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== A && Wt(this._$AH) ? this._$AA.nextSibling.data = e : this.T(vt.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    const { values: n, _$litType$: r } = e, o = typeof r == "number" ? this._$AC(e) : (r.el === void 0 && (r.el = zt.createElement(er(r.h, r.h[0]), this.options)), r);
    if (this._$AH?._$AD === o) this._$AH.p(n);
    else {
      const i = new Xr(o, this), s = i.u(this.options);
      i.p(n), this.T(s), this._$AH = i;
    }
  }
  _$AC(e) {
    let n = xn.get(e.strings);
    return n === void 0 && xn.set(e.strings, n = new zt(e)), n;
  }
  k(e) {
    He(this._$AH) || (this._$AH = [], this._$AR());
    const n = this._$AH;
    let r, o = 0;
    for (const i of e) o === n.length ? n.push(r = new Yt(this.O(jt()), this.O(jt()), this, this.options)) : r = n[o], r._$AI(i), o++;
    o < n.length && (this._$AR(r && r._$AB.nextSibling, o), n.length = o);
  }
  _$AR(e = this._$AA.nextSibling, n) {
    for (this._$AP?.(!1, !0, n); e !== this._$AB; ) {
      const r = gn(e).nextSibling;
      gn(e).remove(), e = r;
    }
  }
  setConnected(e) {
    this._$AM === void 0 && (this._$Cv = e, this._$AP?.(e));
  }
}
class fe {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, n, r, o, i) {
    this.type = 1, this._$AH = A, this._$AN = void 0, this.element = e, this.name = n, this._$AM = o, this.options = i, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = A;
  }
  _$AI(e, n = this, r, o) {
    const i = this.strings;
    let s = !1;
    if (i === void 0) e = St(this, e, n, 0), s = !Wt(e) || e !== this._$AH && e !== $t, s && (this._$AH = e);
    else {
      const a = e;
      let l, c;
      for (e = i[0], l = 0; l < i.length - 1; l++) c = St(this, a[r + l], n, l), c === $t && (c = this._$AH[l]), s ||= !Wt(c) || c !== this._$AH[l], c === A ? e = A : e !== A && (e += (c ?? "") + i[l + 1]), this._$AH[l] = c;
    }
    s && !o && this.j(e);
  }
  j(e) {
    e === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class Zr extends fe {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === A ? void 0 : e;
  }
}
class Jr extends fe {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== A);
  }
}
class Qr extends fe {
  constructor(e, n, r, o, i) {
    super(e, n, r, o, i), this.type = 5;
  }
  _$AI(e, n = this) {
    if ((e = St(this, e, n, 0) ?? A) === $t) return;
    const r = this._$AH, o = e === A && r !== A || e.capture !== r.capture || e.once !== r.once || e.passive !== r.passive, i = e !== A && (r === A || o);
    o && this.element.removeEventListener(this.name, this, r), i && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class to {
  constructor(e, n, r) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = n, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    St(this, e);
  }
}
const eo = Be.litHtmlPolyfillSupport;
eo?.(zt, Yt), (Be.litHtmlVersions ??= []).push("3.3.2");
const no = (t, e, n) => {
  const r = n?.renderBefore ?? e;
  let o = r._$litPart$;
  if (o === void 0) {
    const i = n?.renderBefore ?? null;
    r._$litPart$ = o = new Yt(e.insertBefore(jt(), i), i, void 0, n ?? {});
  }
  return o._$AI(t), o;
};
const Ve = globalThis;
class Ut extends Et {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const e = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= e.firstChild, e;
  }
  update(e) {
    const n = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = no(n, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return $t;
  }
}
Ut._$litElement$ = !0, Ut.finalized = !0, Ve.litElementHydrateSupport?.({ LitElement: Ut });
const ro = Ve.litElementPolyfillSupport;
ro?.({ LitElement: Ut });
(Ve.litElementVersions ??= []).push("4.2.2");
const Xt = (t) => (e, n) => {
  n !== void 0 ? n.addInitializer(() => {
    customElements.define(t, e);
  }) : customElements.define(t, e);
};
const oo = { attribute: !0, type: String, converter: ae, reflect: !1, hasChanged: Fe }, io = (t = oo, e, n) => {
  const { kind: r, metadata: o } = n;
  let i = globalThis.litPropertyMetadata.get(o);
  if (i === void 0 && globalThis.litPropertyMetadata.set(o, i = /* @__PURE__ */ new Map()), r === "setter" && ((t = Object.create(t)).wrapped = !0), i.set(n.name, t), r === "accessor") {
    const { name: s } = n;
    return { set(a) {
      const l = e.get.call(this);
      e.set.call(this, a), this.requestUpdate(s, l, t, !0, a);
    }, init(a) {
      return a !== void 0 && this.C(s, void 0, t, a), a;
    } };
  }
  if (r === "setter") {
    const { name: s } = n;
    return function(a) {
      const l = this[s];
      e.call(this, a), this.requestUpdate(s, l, t, !0, a);
    };
  }
  throw Error("Unsupported decorator location: " + r);
};
function D(t) {
  return (e, n) => typeof n == "object" ? io(t, e, n) : ((r, o, i) => {
    const s = o.hasOwnProperty(i);
    return o.constructor.createProperty(i, r), s ? Object.getOwnPropertyDescriptor(o, i) : void 0;
  })(t, e, n);
}
const so = (t, e, n) => (n.configurable = !0, n.enumerable = !0, Reflect.decorate && typeof e != "object" && Object.defineProperty(t, e, n), n);
function ao(t, e) {
  return (n, r, o) => {
    const i = (s) => s.renderRoot?.querySelector(t) ?? null;
    return so(n, r, { get() {
      return i(this);
    } });
  };
}
const lo = '@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-red-300:oklch(80.8% .114 19.571);--color-red-500:oklch(63.7% .237 25.331);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-800:oklch(44.4% .177 26.899);--color-green-300:oklch(87.1% .15 154.449);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-800:oklch(42.4% .199 265.638);--color-blue-900:oklch(37.9% .146 265.522);--color-purple-50:oklch(97.7% .014 308.299);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-sm:24rem;--container-2xl:42rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5/2.25);--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wider:.05em;--radius-lg:.5rem;--radius-xl:.75rem;--radius-2xl:1rem;--animate-pulse:pulse 2s cubic-bezier(.4,0,.6,1)infinite;--blur-sm:8px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.inset-0{inset:calc(var(--spacing)*0)}.top-1\\/2{top:50%}.left-1\\/2{left:50%}.z-10{z-index:10}.z-40{z-index:40}.z-50{z-index:50}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.mx-auto{margin-inline:auto}.mt-1{margin-top:calc(var(--spacing)*1)}.mr-2{margin-right:calc(var(--spacing)*2)}.mb-1{margin-bottom:calc(var(--spacing)*1)}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.mb-8{margin-bottom:calc(var(--spacing)*8)}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.h-2{height:calc(var(--spacing)*2)}.h-5{height:calc(var(--spacing)*5)}.h-14{height:calc(var(--spacing)*14)}.max-h-60{max-height:calc(var(--spacing)*60)}.w-2{width:calc(var(--spacing)*2)}.w-5{width:calc(var(--spacing)*5)}.w-14{width:calc(var(--spacing)*14)}.w-full{width:100%}.max-w-2xl{max-width:var(--container-2xl)}.max-w-sm{max-width:var(--container-sm)}.min-w-\\[200px\\]{min-width:200px}.-translate-x-1\\/2{--tw-translate-x: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.rotate-180{rotate:180deg}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.transform-none{transform:none}.animate-pulse{animation:var(--animate-pulse)}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.resize{resize:both}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.gap-2{gap:calc(var(--spacing)*2)}.gap-3{gap:calc(var(--spacing)*3)}.gap-6{gap:calc(var(--spacing)*6)}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.rounded-2xl{border-radius:var(--radius-2xl)}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-xl{border-radius:var(--radius-xl)}.border{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-blue-200{border-color:var(--color-blue-200)}.border-blue-800{border-color:var(--color-blue-800)}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-300{border-color:var(--color-gray-300)}.border-green-300{border-color:var(--color-green-300)}.border-red-300{border-color:var(--color-red-300)}.bg-black\\/50{background-color:#00000080}@supports (color:color-mix(in lab,red,red)){.bg-black\\/50{background-color:color-mix(in oklab,var(--color-black)50%,transparent)}}.bg-blue-50{background-color:var(--color-blue-50)}.bg-blue-100{background-color:var(--color-blue-100)}.bg-blue-600{background-color:var(--color-blue-600)}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-500{background-color:var(--color-gray-500)}.bg-green-500{background-color:var(--color-green-500)}.bg-green-600{background-color:var(--color-green-600)}.bg-red-500{background-color:var(--color-red-500)}.bg-red-600{background-color:var(--color-red-600)}.bg-white{background-color:var(--color-white)}.bg-gradient-to-r{--tw-gradient-position:to right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.from-blue-50{--tw-gradient-from:var(--color-blue-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.from-blue-600{--tw-gradient-from:var(--color-blue-600);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.to-blue-700{--tw-gradient-to:var(--color-blue-700);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.to-purple-50{--tw-gradient-to:var(--color-purple-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.p-0{padding:calc(var(--spacing)*0)}.p-4{padding:calc(var(--spacing)*4)}.p-6{padding:calc(var(--spacing)*6)}.p-8{padding:calc(var(--spacing)*8)}.px-4{padding-inline:calc(var(--spacing)*4)}.px-6{padding-inline:calc(var(--spacing)*6)}.px-8{padding-inline:calc(var(--spacing)*8)}.py-2{padding-block:calc(var(--spacing)*2)}.py-3{padding-block:calc(var(--spacing)*3)}.py-4{padding-block:calc(var(--spacing)*4)}.py-6{padding-block:calc(var(--spacing)*6)}.text-center{text-align:center}.text-left{text-align:left}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.leading-none{--tw-leading:1;line-height:1}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-wider{--tw-tracking:var(--tracking-wider);letter-spacing:var(--tracking-wider)}.text-blue-600{color:var(--color-blue-600)}.text-blue-900{color:var(--color-blue-900)}.text-gray-400{color:var(--color-gray-400)}.text-gray-500{color:var(--color-gray-500)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-gray-800{color:var(--color-gray-800)}.text-gray-900{color:var(--color-gray-900)}.text-white{color:var(--color-white)}.uppercase{text-transform:uppercase}.tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.opacity-50{opacity:.5}.shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-2{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-blue-300{--tw-ring-color:var(--color-blue-300)}.backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-150{--tw-duration:.15s;transition-duration:.15s}.duration-200{--tw-duration:.2s;transition-duration:.2s}.backdrop\\:bg-transparent::backdrop{background-color:#0000}@media(hover:hover){.hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x)var(--tw-scale-y)}.hover\\:border-blue-400:hover{border-color:var(--color-blue-400)}.hover\\:bg-blue-50:hover{background-color:var(--color-blue-50)}.hover\\:bg-blue-700:hover{background-color:var(--color-blue-700)}.hover\\:bg-gray-600:hover{background-color:var(--color-gray-600)}.hover\\:bg-green-600:hover{background-color:var(--color-green-600)}.hover\\:bg-green-700:hover{background-color:var(--color-green-700)}.hover\\:bg-red-600:hover{background-color:var(--color-red-600)}.hover\\:bg-red-700:hover{background-color:var(--color-red-700)}.hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.hover\\:shadow-xl:hover{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a),0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}.focus\\:border-blue-500:focus{border-color:var(--color-blue-500)}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.active\\:scale-95:active{--tw-scale-x:95%;--tw-scale-y:95%;--tw-scale-z:95%;scale:var(--tw-scale-x)var(--tw-scale-y)}.active\\:bg-blue-800:active{background-color:var(--color-blue-800)}.active\\:bg-gray-700:active{background-color:var(--color-gray-700)}.active\\:bg-green-700:active{background-color:var(--color-green-700)}.active\\:bg-green-800:active{background-color:var(--color-green-800)}.active\\:bg-red-700:active{background-color:var(--color-red-700)}.active\\:bg-red-800:active{background-color:var(--color-red-800)}}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-ordinal{syntax:"*";inherits:false}@property --tw-slashed-zero{syntax:"*";inherits:false}@property --tw-numeric-figure{syntax:"*";inherits:false}@property --tw-numeric-spacing{syntax:"*";inherits:false}@property --tw-numeric-fraction{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@keyframes pulse{50%{opacity:.5}}', co = Nt`${Zn(lo)}`, dn = class dn extends Ut {
};
dn.styles = [co];
let Gt = dn;
var uo = Object.defineProperty, ho = Object.getOwnPropertyDescriptor, fo = Object.getPrototypeOf, po = Reflect.get, Zt = (t, e, n, r) => {
  for (var o = r > 1 ? void 0 : r ? ho(e, n) : e, i = t.length - 1, s; i >= 0; i--)
    (s = t[i]) && (o = (r ? s(e, n, o) : s(o)) || o);
  return r && o && uo(e, n, o), o;
}, go = (t, e, n) => po(fo(t), n, e);
let Y = class extends Gt {
  constructor() {
    super(...arguments), this.label = "Button", this.variant = "primary", this.size = "medium", this.disabled = !1;
  }
  handleClick(t) {
    this.disabled || this.dispatchEvent(new CustomEvent("button-click", {
      detail: { originalEvent: t },
      bubbles: !0,
      composed: !0
    }));
  }
  getButtonClasses() {
    const t = "font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95", e = {
      primary: "bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white",
      secondary: "bg-gray-500 hover:bg-gray-600 active:bg-gray-700 text-white",
      success: "bg-green-600 hover:bg-green-700 active:bg-green-800 text-white",
      danger: "bg-red-600 hover:bg-red-700 active:bg-red-800 text-white"
    }, n = {
      small: "px-4 py-2 text-sm",
      medium: "px-6 py-3 text-base",
      large: "px-8 py-4 text-lg"
    }, r = this.disabled ? "opacity-50 cursor-not-allowed transform-none" : "cursor-pointer";
    return `${t} ${e[this.variant]} ${n[this.size]} ${r}`;
  }
  render() {
    return Pt`
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
Y.styles = [
  ...go(Y, Y, "styles"),
  Nt`
      :host {
        display: inline-block;
      }
    `
];
Zt([
  D({ type: String })
], Y.prototype, "label", 2);
Zt([
  D({ type: String })
], Y.prototype, "variant", 2);
Zt([
  D({ type: String })
], Y.prototype, "size", 2);
Zt([
  D({ type: Boolean })
], Y.prototype, "disabled", 2);
Y = Zt([
  Xt("lit-tailwind-button")
], Y);
var mo = Object.defineProperty, vo = Object.getOwnPropertyDescriptor, bo = Object.getPrototypeOf, yo = Reflect.get, nr = (t, e, n, r) => {
  for (var o = r > 1 ? void 0 : r ? vo(e, n) : e, i = t.length - 1, s; i >= 0; i--)
    (s = t[i]) && (o = (r ? s(e, n, o) : s(o)) || o);
  return r && o && mo(e, n, o), o;
}, wo = (t, e, n) => yo(bo(t), n, e);
let At = class extends Gt {
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
    return Pt`
      <div class="p-8 bg-white border border-gray-200 rounded-2xl shadow-2xl max-w-sm mx-auto">
        <div class="text-center mb-8">
          <h2 class="text-2xl font-bold mb-3 text-gray-800">Lit + Tailwind Counter</h2>
          <p class="text-gray-600 text-sm bg-blue-50 border border-blue-200 rounded-full px-4 py-2 inline-block">
            Shadow DOM + Constructable Stylesheets
          </p>
        </div>
        
        <div class="flex items-center justify-center gap-6 bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
          <button
            type="button"
            @click=${this.decrement}
            class="w-14 h-14 rounded-xl flex items-center justify-center text-white text-3xl font-bold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 bg-red-500 hover:bg-red-600 active:bg-red-700 border-2 border-red-300"
          >
            <span class="leading-none">−</span>
          </button>
          
          <div class="text-center px-4">
            <div class="text-4xl font-bold text-blue-600 mb-1 tabular-nums">${this.count}</div>
            <div class="text-xs text-gray-500 uppercase tracking-wider font-medium">current value</div>
          </div>
          
          <button
            type="button"
            @click=${this.increment}
            class="w-14 h-14 rounded-xl flex items-center justify-center text-white text-3xl font-bold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 bg-green-500 hover:bg-green-600 active:bg-green-700 border-2 border-green-300"
          >
            <span class="leading-none">+</span>
          </button>
        </div>
        
        <div class="text-center">
          <div class="text-xs text-gray-600 bg-gradient-to-r from-blue-50 to-purple-50 border border-gray-200 rounded-full px-4 py-2 inline-flex items-center gap-2">
            <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Powered by Tailwind CSS v4
          </div>
        </div>
      </div>
    `;
  }
};
At.styles = [
  ...wo(At, At, "styles"),
  Nt`:host { display: block; }`
];
nr([
  D({ type: Number })
], At.prototype, "count", 2);
At = nr([
  Xt("lit-tailwind-counter")
], At);
var Ct = (t, e = []) => ({
  parts: (...n) => {
    if (xo(e))
      return Ct(t, n);
    throw new Error("createAnatomy().parts(...) should only be called once. Did you mean to use .extendWith(...) ?");
  },
  extendWith: (...n) => Ct(t, [...e, ...n]),
  omit: (...n) => Ct(t, e.filter((r) => !n.includes(r))),
  rename: (n) => Ct(n, e),
  keys: () => e,
  build: () => [...new Set(e)].reduce(
    (n, r) => Object.assign(n, {
      [r]: {
        selector: [
          `&[data-scope="${yt(t)}"][data-part="${yt(r)}"]`,
          `& [data-scope="${yt(t)}"][data-part="${yt(r)}"]`
        ].join(", "),
        attrs: { "data-scope": yt(t), "data-part": yt(r) }
      }
    }),
    {}
  )
}), yt = (t) => t.replace(/([A-Z])([A-Z])/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[\s_]+/g, "-").toLowerCase(), xo = (t) => t.length === 0, Oo = (t) => t[0], Eo = (t) => t[t.length - 1];
function rr(t, e, n = {}) {
  const { step: r = 1, loop: o = !0 } = n, i = e + r, s = t.length, a = s - 1;
  return e === -1 ? r > 0 ? 0 : a : i < 0 ? o ? a : 0 : i >= s ? o ? 0 : e > s ? s : e : i;
}
function Co(t, e, n = {}) {
  return t[rr(t, e, n)];
}
function Ao(t, e, n = {}) {
  const { step: r = 1, loop: o = !0 } = n;
  return rr(t, e, { step: -r, loop: o });
}
function ko(t, e, n = {}) {
  return t[Ao(t, e, n)];
}
var On = (t) => t?.constructor.name === "Array", Po = (t, e) => {
  if (t.length !== e.length) return !1;
  for (let n = 0; n < t.length; n++)
    if (!Ue(t[n], e[n])) return !1;
  return !0;
}, Ue = (t, e) => {
  if (Object.is(t, e)) return !0;
  if (t == null && e != null || t != null && e == null) return !1;
  if (typeof t?.isEqual == "function" && typeof e?.isEqual == "function")
    return t.isEqual(e);
  if (typeof t == "function" && typeof e == "function")
    return t.toString() === e.toString();
  if (On(t) && On(e))
    return Po(Array.from(t), Array.from(e));
  if (typeof t != "object" || typeof e != "object") return !1;
  const n = Object.keys(e ?? /* @__PURE__ */ Object.create(null)), r = n.length;
  for (let o = 0; o < r; o++)
    if (!Reflect.has(t, n[o])) return !1;
  for (let o = 0; o < r; o++) {
    const i = n[o];
    if (!Ue(t[i], e[i])) return !1;
  }
  return !0;
}, $o = (t) => t != null && typeof t == "object", So = (t) => typeof t == "function", To = (t) => t == null, _o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), No = (t) => Object.prototype.toString.call(t), or = Function.prototype.toString, Io = or.call(Object), Ro = (t) => {
  if (!$o(t) || No(t) != "[object Object]" || Mo(t)) return !1;
  const e = Object.getPrototypeOf(t);
  if (e === null) return !0;
  const n = _o(e, "constructor") && e.constructor;
  return typeof n == "function" && n instanceof n && or.call(n) == Io;
}, Lo = (t) => typeof t == "object" && t !== null && "$$typeof" in t && "props" in t, Do = (t) => typeof t == "object" && t !== null && "__v_isVNode" in t, Mo = (t) => Lo(t) || Do(t), Fo = () => {
}, En = (...t) => (...e) => {
  t.forEach(function(n) {
    n?.(...e);
  });
};
function ir(t) {
  if (!Ro(t) || t === void 0) return t;
  const e = Reflect.ownKeys(t).filter((r) => typeof r == "string"), n = {};
  for (const r of e) {
    const o = t[r];
    o !== void 0 && (n[r] = ir(o));
  }
  return n;
}
function Bo(...t) {
  const e = t.length === 1 ? t[0] : t[1];
  (t.length !== 2 || t[0]) && process.env.NODE_ENV !== "production" && console.warn(e);
}
var Ho = Object.defineProperty, Vo = (t, e, n) => e in t ? Ho(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, Oe = (t, e, n) => Vo(t, typeof e != "symbol" ? e + "" : e, n), Uo = (t, e) => t.map((n, r) => t[(Math.max(e, 0) + r) % t.length]), sr = () => {
}, pe = (t) => typeof t == "object" && t !== null, jo = 1, Wo = 9, zo = 11, k = (t) => pe(t) && t.nodeType === jo && typeof t.nodeName == "string", ge = (t) => pe(t) && t.nodeType === Wo, Go = (t) => pe(t) && t === t.window, ar = (t) => k(t) ? t.localName || "" : "#document";
function qo(t) {
  return ["html", "body", "#document"].includes(ar(t));
}
var Ko = (t) => pe(t) && t.nodeType !== void 0, Tt = (t) => Ko(t) && t.nodeType === zo && "host" in t, Yo = (t) => k(t) && t.localName === "input", Xo = (t) => !!t?.matches("a[href]"), Zo = (t) => k(t) ? t.offsetWidth > 0 || t.offsetHeight > 0 || t.getClientRects().length > 0 : !1, Jo = /(textarea|select)/;
function lr(t) {
  if (t == null || !k(t)) return !1;
  try {
    return Yo(t) && t.selectionStart != null || Jo.test(t.localName) || t.isContentEditable || t.getAttribute("contenteditable") === "true" || t.getAttribute("contenteditable") === "";
  } catch {
    return !1;
  }
}
function pt(t, e) {
  if (!t || !e || !k(t) || !k(e)) return !1;
  const n = e.getRootNode?.();
  if (t === e || t.contains(e)) return !0;
  if (n && Tt(n)) {
    let r = e;
    for (; r; ) {
      if (t === r) return !0;
      r = r.parentNode || r.host;
    }
  }
  return !1;
}
function at(t) {
  return ge(t) ? t : Go(t) ? t.document : t?.ownerDocument ?? document;
}
function Qo(t) {
  return at(t).documentElement;
}
function lt(t) {
  return Tt(t) ? lt(t.host) : ge(t) ? t.defaultView ?? window : k(t) ? t.ownerDocument?.defaultView ?? window : window;
}
function Ee(t) {
  let e = t.activeElement;
  for (; e?.shadowRoot; ) {
    const n = e.shadowRoot.activeElement;
    if (!n || n === e) break;
    e = n;
  }
  return e;
}
function ti(t) {
  if (ar(t) === "html") return t;
  const e = t.assignedSlot || t.parentNode || Tt(t) && t.host || Qo(t);
  return Tt(e) ? e.host : e;
}
function je(t) {
  let e;
  try {
    if (e = t.getRootNode({ composed: !0 }), ge(e) || Tt(e)) return e;
  } catch {
  }
  return t.ownerDocument ?? document;
}
var Ce = /* @__PURE__ */ new WeakMap();
function We(t) {
  return Ce.has(t) || Ce.set(t, lt(t).getComputedStyle(t)), Ce.get(t);
}
var ze = /* @__PURE__ */ new Set(["menu", "listbox", "dialog", "grid", "tree", "region"]), ei = (t) => ze.has(t), cr = (t) => t.getAttribute("aria-controls")?.split(" ") || [];
function dr(t, e) {
  const n = /* @__PURE__ */ new Set(), r = je(t), o = (i) => {
    const s = i.querySelectorAll("[aria-controls]");
    for (const a of s) {
      if (a.getAttribute("aria-expanded") !== "true") continue;
      const l = cr(a);
      for (const c of l) {
        if (!c || n.has(c)) continue;
        n.add(c);
        const d = r.getElementById(c);
        if (d) {
          const h = d.getAttribute("role"), f = d.getAttribute("aria-modal") === "true";
          if (h && ei(h) && !f && (d === e || d.contains(e) || o(d)))
            return !0;
        }
      }
    }
    return !1;
  };
  return o(t);
}
function ur(t, e) {
  const n = je(t), r = /* @__PURE__ */ new Set(), o = (i) => {
    const s = i.querySelectorAll("[aria-controls]");
    for (const a of s) {
      if (a.getAttribute("aria-expanded") !== "true") continue;
      const l = cr(a);
      for (const c of l) {
        if (!c || r.has(c)) continue;
        r.add(c);
        const d = n.getElementById(c);
        if (d) {
          const h = d.getAttribute("role"), f = d.getAttribute("aria-modal") === "true";
          h && ze.has(h) && !f && (e(d), o(d));
        }
      }
    }
  };
  o(t);
}
function ni(t) {
  const e = /* @__PURE__ */ new Set();
  return ur(t, (n) => {
    t.contains(n) || e.add(n);
  }), Array.from(e);
}
function ri(t) {
  const e = t.getAttribute("role");
  return !!(e && ze.has(e));
}
function oi(t) {
  return t.hasAttribute("aria-controls") && t.getAttribute("aria-expanded") === "true";
}
function ii(t) {
  return oi(t) ? !0 : !!t.querySelector?.('[aria-controls][aria-expanded="true"]');
}
function si(t) {
  if (!t.id) return !1;
  const e = je(t), n = CSS.escape(t.id), r = `[aria-controls~="${n}"][aria-expanded="true"], [aria-controls="${n}"][aria-expanded="true"]`;
  return !!(e.querySelector(r) && ri(t));
}
var Ge = () => typeof document < "u";
function ai() {
  return navigator.userAgentData?.platform ?? navigator.platform;
}
function li() {
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? t.brands.map(({ brand: e, version: n }) => `${e}/${n}`).join(" ") : navigator.userAgent;
}
var qe = (t) => Ge() && t.test(ai()), ci = (t) => Ge() && t.test(li()), Cn = () => Ge() && !!navigator.maxTouchPoints, di = () => qe(/^iPhone/i), ui = () => qe(/^iPad/i) || hr() && navigator.maxTouchPoints > 1, hi = () => di() || ui(), hr = () => qe(/^Mac/i), fi = () => ci(/Firefox/i);
function pi(t) {
  return t.composedPath?.() ?? t.nativeEvent?.composedPath?.();
}
function j(t) {
  return pi(t)?.[0] ?? t.target;
}
var gi = (t) => t.button === 2 || hr() && t.ctrlKey && t.button === 0, B = (t, e, n, r) => {
  const o = typeof t == "function" ? t() : t;
  return o?.addEventListener(e, n, r), () => {
    o?.removeEventListener(e, n, r);
  };
}, fr = (t) => k(t) && t.tagName === "IFRAME", mi = /^(audio|video|details)$/;
function pr(t) {
  const e = t.getAttribute("tabindex");
  return e ? parseInt(e, 10) : NaN;
}
var vi = (t) => !Number.isNaN(pr(t)), bi = (t) => pr(t) < 0;
function yi(t, e) {
  if (!e) return null;
  if (e === !0)
    return t.shadowRoot || null;
  const n = e(t);
  return (n === !0 ? t.shadowRoot : n) || null;
}
function gr(t, e, n) {
  const r = [...t], o = [...t], i = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Map();
  t.forEach((l, c) => s.set(l, c));
  let a = 0;
  for (; a < o.length; ) {
    const l = o[a++];
    if (!l || i.has(l)) continue;
    i.add(l);
    const c = yi(l, e);
    if (c) {
      const d = Array.from(c.querySelectorAll(me)).filter(n), h = s.get(l);
      if (h !== void 0) {
        const f = h + 1;
        r.splice(f, 0, ...d), d.forEach((u, p) => {
          s.set(u, f + p);
        });
        for (let u = f + d.length; u < r.length; u++)
          s.set(r[u], u);
      } else {
        const f = r.length;
        r.push(...d), d.forEach((u, p) => {
          s.set(u, f + p);
        });
      }
      o.push(...d);
    }
  }
  return r;
}
var me = "input:not([type='hidden']):not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], button:not([disabled]), [tabindex], iframe, object, embed, area[href], audio[controls], video[controls], [contenteditable]:not([contenteditable='false']), details > summary:first-of-type", mr = (t, e = {}) => {
  if (!t) return [];
  const { includeContainer: n = !1, getShadowRoot: r } = e, o = Array.from(t.querySelectorAll(me));
  (n == !0 || n == "if-empty" && o.length === 0) && k(t) && X(t) && o.unshift(t);
  const s = [];
  for (const a of o)
    if (X(a)) {
      if (fr(a) && a.contentDocument) {
        const l = a.contentDocument.body;
        s.push(...mr(l, { getShadowRoot: r }));
        continue;
      }
      s.push(a);
    }
  return r ? gr(s, r, X) : s;
};
function X(t) {
  return !k(t) || t.closest("[inert]") ? !1 : t.matches(me) && Zo(t);
}
function Ke(t, e = {}) {
  if (!t) return [];
  const { includeContainer: n, getShadowRoot: r } = e, o = Array.from(t.querySelectorAll(me));
  n && ft(t) && o.unshift(t);
  const i = [];
  for (const s of o)
    if (ft(s)) {
      if (fr(s) && s.contentDocument) {
        const a = s.contentDocument.body;
        i.push(...Ke(a, { getShadowRoot: r }));
        continue;
      }
      i.push(s);
    }
  if (r) {
    const s = gr(i, r, ft);
    return !s.length && n ? o : s;
  }
  return !i.length && n ? o : i;
}
function ft(t) {
  return k(t) && t.tabIndex > 0 ? !0 : X(t) && !bi(t);
}
function Mt(t) {
  return t.tabIndex < 0 && (mi.test(t.localName) || lr(t)) && !vi(t) ? 0 : t.tabIndex;
}
function wi(t) {
  const { root: e, getInitialEl: n, filter: r, enabled: o = !0 } = t;
  if (!o) return;
  let i = null;
  if (i || (i = typeof n == "function" ? n() : n), i || (i = e?.querySelector("[data-autofocus],[autofocus]")), !i) {
    const s = Ke(e);
    i = r ? s.filter(r)[0] : s[0];
  }
  return i || e || void 0;
}
var xi = class vr {
  constructor() {
    Oe(this, "id", null), Oe(this, "fn_cleanup"), Oe(this, "cleanup", () => {
      this.cancel();
    });
  }
  static create() {
    return new vr();
  }
  request(e) {
    this.cancel(), this.id = globalThis.requestAnimationFrame(() => {
      this.id = null, this.fn_cleanup = e?.();
    });
  }
  cancel() {
    this.id !== null && (globalThis.cancelAnimationFrame(this.id), this.id = null), this.fn_cleanup?.(), this.fn_cleanup = void 0;
  }
  isActive() {
    return this.id !== null;
  }
};
function _(t) {
  const e = xi.create();
  return e.request(t), e.cleanup;
}
function Oi(t, e, n) {
  const r = _(() => {
    t.removeEventListener(e, o, !0), n();
  }), o = () => {
    r(), n();
  };
  return t.addEventListener(e, o, { once: !0, capture: !0 }), r;
}
function Ei(t, e) {
  if (!t) return;
  const { attributes: n, callback: r } = e, o = t.ownerDocument.defaultView || window, i = new o.MutationObserver((s) => {
    for (const a of s)
      a.type === "attributes" && a.attributeName && n.includes(a.attributeName) && r(a);
  });
  return i.observe(t, { attributes: !0, attributeFilter: n }), () => i.disconnect();
}
function Ci(t, e) {
  const n = _, r = [];
  return r.push(
    n(() => {
      const o = typeof t == "function" ? t() : t;
      r.push(Ei(o, e));
    })
  ), () => {
    r.forEach((o) => o?.());
  };
}
function Ai(t) {
  const e = () => {
    const n = lt(t);
    t.dispatchEvent(new n.MouseEvent("click"));
  };
  fi() ? Oi(t, "keyup", e) : queueMicrotask(e);
}
function Te(t) {
  const e = ti(t);
  return qo(e) ? at(e).body : k(e) && br(e) ? e : Te(e);
}
var ki = /auto|scroll|overlay|hidden|clip/, Pi = /* @__PURE__ */ new Set(["inline", "contents"]);
function br(t) {
  const e = lt(t), { overflow: n, overflowX: r, overflowY: o, display: i } = e.getComputedStyle(t);
  return ki.test(n + o + r) && !Pi.has(i);
}
function $i(t) {
  return t.scrollHeight > t.clientHeight || t.scrollWidth > t.clientWidth;
}
function Si(t, e) {
  const { rootEl: n, ...r } = e || {};
  !t || !n || !br(n) || !$i(n) || t.scrollIntoView(r);
}
function Ti(t, e) {
  return Array.from(t?.querySelectorAll(e) ?? []);
}
var Ye = (t) => t.id;
function _i(t, e, n = Ye) {
  return t.find((r) => n(r) === e);
}
function Ni(t, e, n = Ye) {
  const r = _i(t, e, n);
  return r ? t.indexOf(r) : -1;
}
var Ii = (t) => t.split("").map((e) => {
  const n = e.charCodeAt(0);
  return n > 0 && n < 128 ? e : n >= 128 && n <= 255 ? `/x${n.toString(16)}`.replace("/", "\\") : "";
}).join("").trim(), Ri = (t) => Ii(t.dataset?.valuetext ?? t.textContent ?? ""), Li = (t, e) => t.trim().toLowerCase().startsWith(e.toLowerCase());
function Di(t, e, n, r = Ye) {
  const o = n ? Ni(t, n, r) : -1;
  let i = n ? Uo(t, o) : t;
  return e.length === 1 && (i = i.filter((a) => r(a) !== n)), i.find((a) => Li(Ri(a), e));
}
function _e(t, e) {
  if (!t) return sr;
  const n = Object.keys(e).reduce((r, o) => (r[o] = t.style.getPropertyValue(o), r), {});
  return Object.assign(t.style, e), () => {
    Object.assign(t.style, n), t.style.length === 0 && t.removeAttribute("style");
  };
}
function Mi(t, e, n) {
  if (!t) return sr;
  const r = t.style.getPropertyValue(e);
  return t.style.setProperty(e, n), () => {
    t.style.setProperty(e, r), t.style.length === 0 && t.removeAttribute("style");
  };
}
function Fi(t, e) {
  const { state: n, activeId: r, key: o, timeout: i = 350, itemToId: s } = e, a = n.keysSoFar + o, c = a.length > 1 && Array.from(a).every((p) => p === a[0]) ? a[0] : a;
  let d = t.slice();
  const h = Di(d, c, r, s);
  function f() {
    clearTimeout(n.timer), n.timer = -1;
  }
  function u(p) {
    n.keysSoFar = p, f(), p !== "" && (n.timer = +setTimeout(() => {
      u(""), f();
    }, i));
  }
  return u(a), h;
}
var yr = /* @__PURE__ */ Object.assign(Fi, {
  defaultOptions: { keysSoFar: "", timer: -1 },
  isValidEvent: Bi
});
function Bi(t) {
  return t.key.length === 1 && !t.ctrlKey && !t.metaKey;
}
function Hi(t, e, n) {
  const { signal: r } = e;
  return [new Promise((s, a) => {
    const l = setTimeout(() => {
      a(new Error(`Timeout of ${n}ms exceeded`));
    }, n);
    r.addEventListener("abort", () => {
      clearTimeout(l), a(new Error("Promise aborted"));
    }), t.then((c) => {
      r.aborted || (clearTimeout(l), s(c));
    }).catch((c) => {
      r.aborted || (clearTimeout(l), a(c));
    });
  }), () => e.abort()];
}
function Vi(t, e) {
  const { timeout: n, rootNode: r } = e, o = lt(r), i = at(r), s = new o.AbortController();
  return Hi(
    new Promise((a) => {
      const l = t();
      if (l) {
        a(l);
        return;
      }
      const c = new o.MutationObserver(() => {
        const d = t();
        d && d.isConnected && (c.disconnect(), a(d));
      });
      c.observe(i.body, {
        childList: !0,
        subtree: !0
      });
    }),
    s,
    n
  );
}
function Ui() {
  return {
    and: (...t) => function(n) {
      return t.every((r) => n.guard(r));
    },
    or: (...t) => function(n) {
      return t.some((r) => n.guard(r));
    },
    not: (t) => function(n) {
      return !n.guard(t);
    }
  };
}
const ji = ["top", "right", "bottom", "left"], it = Math.min, N = Math.max, ce = Math.round, ee = Math.floor, z = (t) => ({
  x: t,
  y: t
}), Wi = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, zi = {
  start: "end",
  end: "start"
};
function Ne(t, e, n) {
  return N(t, it(e, n));
}
function J(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Q(t) {
  return t.split("-")[0];
}
function It(t) {
  return t.split("-")[1];
}
function Xe(t) {
  return t === "x" ? "y" : "x";
}
function Ze(t) {
  return t === "y" ? "height" : "width";
}
const Gi = /* @__PURE__ */ new Set(["top", "bottom"]);
function W(t) {
  return Gi.has(Q(t)) ? "y" : "x";
}
function Je(t) {
  return Xe(W(t));
}
function qi(t, e, n) {
  n === void 0 && (n = !1);
  const r = It(t), o = Je(t), i = Ze(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return e.reference[i] > e.floating[i] && (s = de(s)), [s, de(s)];
}
function Ki(t) {
  const e = de(t);
  return [Ie(t), e, Ie(e)];
}
function Ie(t) {
  return t.replace(/start|end/g, (e) => zi[e]);
}
const An = ["left", "right"], kn = ["right", "left"], Yi = ["top", "bottom"], Xi = ["bottom", "top"];
function Zi(t, e, n) {
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? kn : An : e ? An : kn;
    case "left":
    case "right":
      return e ? Yi : Xi;
    default:
      return [];
  }
}
function Ji(t, e, n, r) {
  const o = It(t);
  let i = Zi(Q(t), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), e && (i = i.concat(i.map(Ie)))), i;
}
function de(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Wi[e]);
}
function Qi(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function wr(t) {
  return typeof t != "number" ? Qi(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function ue(t) {
  const {
    x: e,
    y: n,
    width: r,
    height: o
  } = t;
  return {
    width: r,
    height: o,
    top: n,
    left: e,
    right: e + r,
    bottom: n + o,
    x: e,
    y: n
  };
}
function Pn(t, e, n) {
  let {
    reference: r,
    floating: o
  } = t;
  const i = W(e), s = Je(e), a = Ze(s), l = Q(e), c = i === "y", d = r.x + r.width / 2 - o.width / 2, h = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
  let u;
  switch (l) {
    case "top":
      u = {
        x: d,
        y: r.y - o.height
      };
      break;
    case "bottom":
      u = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      u = {
        x: r.x + r.width,
        y: h
      };
      break;
    case "left":
      u = {
        x: r.x - o.width,
        y: h
      };
      break;
    default:
      u = {
        x: r.x,
        y: r.y
      };
  }
  switch (It(e)) {
    case "start":
      u[s] -= f * (n && c ? -1 : 1);
      break;
    case "end":
      u[s] += f * (n && c ? -1 : 1);
      break;
  }
  return u;
}
const ts = async (t, e, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: s
  } = n, a = i.filter(Boolean), l = await (s.isRTL == null ? void 0 : s.isRTL(e));
  let c = await s.getElementRects({
    reference: t,
    floating: e,
    strategy: o
  }), {
    x: d,
    y: h
  } = Pn(c, r, l), f = r, u = {}, p = 0;
  for (let g = 0; g < a.length; g++) {
    const {
      name: m,
      fn: b
    } = a[g], {
      x: y,
      y: v,
      data: w,
      reset: x
    } = await b({
      x: d,
      y: h,
      initialPlacement: r,
      placement: f,
      strategy: o,
      middlewareData: u,
      rects: c,
      platform: s,
      elements: {
        reference: t,
        floating: e
      }
    });
    d = y ?? d, h = v ?? h, u = {
      ...u,
      [m]: {
        ...u[m],
        ...w
      }
    }, x && p <= 50 && (p++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (c = x.rects === !0 ? await s.getElementRects({
      reference: t,
      floating: e,
      strategy: o
    }) : x.rects), {
      x: d,
      y: h
    } = Pn(c, f, l)), g = -1);
  }
  return {
    x: d,
    y: h,
    placement: f,
    strategy: o,
    middlewareData: u
  };
};
async function qt(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: s,
    elements: a,
    strategy: l
  } = t, {
    boundary: c = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: h = "floating",
    altBoundary: f = !1,
    padding: u = 0
  } = J(e, t), p = wr(u), m = a[f ? h === "floating" ? "reference" : "floating" : h], b = ue(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(m))) == null || n ? m : m.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: l
  })), y = h === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, v = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), w = await (i.isElement == null ? void 0 : i.isElement(v)) ? await (i.getScale == null ? void 0 : i.getScale(v)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, x = ue(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: y,
    offsetParent: v,
    strategy: l
  }) : y);
  return {
    top: (b.top - x.top + p.top) / w.y,
    bottom: (x.bottom - b.bottom + p.bottom) / w.y,
    left: (b.left - x.left + p.left) / w.x,
    right: (x.right - b.right + p.right) / w.x
  };
}
const es = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: i,
      platform: s,
      elements: a,
      middlewareData: l
    } = e, {
      element: c,
      padding: d = 0
    } = J(t, e) || {};
    if (c == null)
      return {};
    const h = wr(d), f = {
      x: n,
      y: r
    }, u = Je(o), p = Ze(u), g = await s.getDimensions(c), m = u === "y", b = m ? "top" : "left", y = m ? "bottom" : "right", v = m ? "clientHeight" : "clientWidth", w = i.reference[p] + i.reference[u] - f[u] - i.floating[p], x = f[u] - i.reference[u], E = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let O = E ? E[v] : 0;
    (!O || !await (s.isElement == null ? void 0 : s.isElement(E))) && (O = a.floating[v] || i.floating[p]);
    const P = w / 2 - x / 2, $ = O / 2 - g[p] / 2 - 1, T = it(h[b], $), tt = it(h[y], $), U = T, et = O - g[p] - tt, S = O / 2 - g[p] / 2 + P, ct = Ne(U, S, et), K = !l.arrow && It(o) != null && S !== ct && i.reference[p] / 2 - (S < U ? T : tt) - g[p] / 2 < 0, M = K ? S < U ? S - U : S - et : 0;
    return {
      [u]: f[u] + M,
      data: {
        [u]: ct,
        centerOffset: S - ct - M,
        ...K && {
          alignmentOffset: M
        }
      },
      reset: K
    };
  }
}), ns = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var n, r;
      const {
        placement: o,
        middlewareData: i,
        rects: s,
        initialPlacement: a,
        platform: l,
        elements: c
      } = e, {
        mainAxis: d = !0,
        crossAxis: h = !0,
        fallbackPlacements: f,
        fallbackStrategy: u = "bestFit",
        fallbackAxisSideDirection: p = "none",
        flipAlignment: g = !0,
        ...m
      } = J(t, e);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const b = Q(o), y = W(a), v = Q(a) === a, w = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), x = f || (v || !g ? [de(a)] : Ki(a)), E = p !== "none";
      !f && E && x.push(...Ji(a, g, p, w));
      const O = [a, ...x], P = await qt(e, m), $ = [];
      let T = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && $.push(P[b]), h) {
        const S = qi(o, s, w);
        $.push(P[S[0]], P[S[1]]);
      }
      if (T = [...T, {
        placement: o,
        overflows: $
      }], !$.every((S) => S <= 0)) {
        var tt, U;
        const S = (((tt = i.flip) == null ? void 0 : tt.index) || 0) + 1, ct = O[S];
        if (ct && (!(h === "alignment" ? y !== W(ct) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        T.every((F) => W(F.placement) === y ? F.overflows[0] > 0 : !0)))
          return {
            data: {
              index: S,
              overflows: T
            },
            reset: {
              placement: ct
            }
          };
        let K = (U = T.filter((M) => M.overflows[0] <= 0).sort((M, F) => M.overflows[1] - F.overflows[1])[0]) == null ? void 0 : U.placement;
        if (!K)
          switch (u) {
            case "bestFit": {
              var et;
              const M = (et = T.filter((F) => {
                if (E) {
                  const nt = W(F.placement);
                  return nt === y || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  nt === "y";
                }
                return !0;
              }).map((F) => [F.placement, F.overflows.filter((nt) => nt > 0).reduce((nt, Dr) => nt + Dr, 0)]).sort((F, nt) => F[1] - nt[1])[0]) == null ? void 0 : et[0];
              M && (K = M);
              break;
            }
            case "initialPlacement":
              K = a;
              break;
          }
        if (o !== K)
          return {
            reset: {
              placement: K
            }
          };
      }
      return {};
    }
  };
};
function $n(t, e) {
  return {
    top: t.top - e.height,
    right: t.right - e.width,
    bottom: t.bottom - e.height,
    left: t.left - e.width
  };
}
function Sn(t) {
  return ji.some((e) => t[e] >= 0);
}
const rs = function(t) {
  return t === void 0 && (t = {}), {
    name: "hide",
    options: t,
    async fn(e) {
      const {
        rects: n
      } = e, {
        strategy: r = "referenceHidden",
        ...o
      } = J(t, e);
      switch (r) {
        case "referenceHidden": {
          const i = await qt(e, {
            ...o,
            elementContext: "reference"
          }), s = $n(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Sn(s)
            }
          };
        }
        case "escaped": {
          const i = await qt(e, {
            ...o,
            altBoundary: !0
          }), s = $n(i, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Sn(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, xr = /* @__PURE__ */ new Set(["left", "top"]);
async function os(t, e) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = t, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Q(n), a = It(n), l = W(n) === "y", c = xr.has(s) ? -1 : 1, d = i && l ? -1 : 1, h = J(e, t);
  let {
    mainAxis: f,
    crossAxis: u,
    alignmentAxis: p
  } = typeof h == "number" ? {
    mainAxis: h,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: h.mainAxis || 0,
    crossAxis: h.crossAxis || 0,
    alignmentAxis: h.alignmentAxis
  };
  return a && typeof p == "number" && (u = a === "end" ? p * -1 : p), l ? {
    x: u * d,
    y: f * c
  } : {
    x: f * c,
    y: u * d
  };
}
const is = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      var n, r;
      const {
        x: o,
        y: i,
        placement: s,
        middlewareData: a
      } = e, l = await os(e, t);
      return s === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
        x: o + l.x,
        y: i + l.y,
        data: {
          ...l,
          placement: s
        }
      };
    }
  };
}, ss = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: r,
        placement: o
      } = e, {
        mainAxis: i = !0,
        crossAxis: s = !1,
        limiter: a = {
          fn: (m) => {
            let {
              x: b,
              y
            } = m;
            return {
              x: b,
              y
            };
          }
        },
        ...l
      } = J(t, e), c = {
        x: n,
        y: r
      }, d = await qt(e, l), h = W(Q(o)), f = Xe(h);
      let u = c[f], p = c[h];
      if (i) {
        const m = f === "y" ? "top" : "left", b = f === "y" ? "bottom" : "right", y = u + d[m], v = u - d[b];
        u = Ne(y, u, v);
      }
      if (s) {
        const m = h === "y" ? "top" : "left", b = h === "y" ? "bottom" : "right", y = p + d[m], v = p - d[b];
        p = Ne(y, p, v);
      }
      const g = a.fn({
        ...e,
        [f]: u,
        [h]: p
      });
      return {
        ...g,
        data: {
          x: g.x - n,
          y: g.y - r,
          enabled: {
            [f]: i,
            [h]: s
          }
        }
      };
    }
  };
}, as = function(t) {
  return t === void 0 && (t = {}), {
    options: t,
    fn(e) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: i,
        middlewareData: s
      } = e, {
        offset: a = 0,
        mainAxis: l = !0,
        crossAxis: c = !0
      } = J(t, e), d = {
        x: n,
        y: r
      }, h = W(o), f = Xe(h);
      let u = d[f], p = d[h];
      const g = J(a, e), m = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (l) {
        const v = f === "y" ? "height" : "width", w = i.reference[f] - i.floating[v] + m.mainAxis, x = i.reference[f] + i.reference[v] - m.mainAxis;
        u < w ? u = w : u > x && (u = x);
      }
      if (c) {
        var b, y;
        const v = f === "y" ? "width" : "height", w = xr.has(Q(o)), x = i.reference[h] - i.floating[v] + (w && ((b = s.offset) == null ? void 0 : b[h]) || 0) + (w ? 0 : m.crossAxis), E = i.reference[h] + i.reference[v] + (w ? 0 : ((y = s.offset) == null ? void 0 : y[h]) || 0) - (w ? m.crossAxis : 0);
        p < x ? p = x : p > E && (p = E);
      }
      return {
        [f]: u,
        [h]: p
      };
    }
  };
}, ls = function(t) {
  return t === void 0 && (t = {}), {
    name: "size",
    options: t,
    async fn(e) {
      var n, r;
      const {
        placement: o,
        rects: i,
        platform: s,
        elements: a
      } = e, {
        apply: l = () => {
        },
        ...c
      } = J(t, e), d = await qt(e, c), h = Q(o), f = It(o), u = W(o) === "y", {
        width: p,
        height: g
      } = i.floating;
      let m, b;
      h === "top" || h === "bottom" ? (m = h, b = f === (await (s.isRTL == null ? void 0 : s.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (b = h, m = f === "end" ? "top" : "bottom");
      const y = g - d.top - d.bottom, v = p - d.left - d.right, w = it(g - d[m], y), x = it(p - d[b], v), E = !e.middlewareData.shift;
      let O = w, P = x;
      if ((n = e.middlewareData.shift) != null && n.enabled.x && (P = v), (r = e.middlewareData.shift) != null && r.enabled.y && (O = y), E && !f) {
        const T = N(d.left, 0), tt = N(d.right, 0), U = N(d.top, 0), et = N(d.bottom, 0);
        u ? P = p - 2 * (T !== 0 || tt !== 0 ? T + tt : N(d.left, d.right)) : O = g - 2 * (U !== 0 || et !== 0 ? U + et : N(d.top, d.bottom));
      }
      await l({
        ...e,
        availableWidth: P,
        availableHeight: O
      });
      const $ = await s.getDimensions(a.floating);
      return p !== $.width || g !== $.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function ve() {
  return typeof window < "u";
}
function Rt(t) {
  return Or(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function I(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function q(t) {
  var e;
  return (e = (Or(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function Or(t) {
  return ve() ? t instanceof Node || t instanceof I(t).Node : !1;
}
function H(t) {
  return ve() ? t instanceof Element || t instanceof I(t).Element : !1;
}
function G(t) {
  return ve() ? t instanceof HTMLElement || t instanceof I(t).HTMLElement : !1;
}
function Tn(t) {
  return !ve() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof I(t).ShadowRoot;
}
const cs = /* @__PURE__ */ new Set(["inline", "contents"]);
function Jt(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: r,
    display: o
  } = V(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + r + n) && !cs.has(o);
}
const ds = /* @__PURE__ */ new Set(["table", "td", "th"]);
function us(t) {
  return ds.has(Rt(t));
}
const hs = [":popover-open", ":modal"];
function be(t) {
  return hs.some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
const fs = ["transform", "translate", "scale", "rotate", "perspective"], ps = ["transform", "translate", "scale", "rotate", "perspective", "filter"], gs = ["paint", "layout", "strict", "content"];
function Qe(t) {
  const e = tn(), n = H(t) ? V(t) : t;
  return fs.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || ps.some((r) => (n.willChange || "").includes(r)) || gs.some((r) => (n.contain || "").includes(r));
}
function ms(t) {
  let e = st(t);
  for (; G(e) && !_t(e); ) {
    if (Qe(e))
      return e;
    if (be(e))
      return null;
    e = st(e);
  }
  return null;
}
function tn() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const vs = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function _t(t) {
  return vs.has(Rt(t));
}
function V(t) {
  return I(t).getComputedStyle(t);
}
function ye(t) {
  return H(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.scrollX,
    scrollTop: t.scrollY
  };
}
function st(t) {
  if (Rt(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    Tn(t) && t.host || // Fallback.
    q(t)
  );
  return Tn(e) ? e.host : e;
}
function Er(t) {
  const e = st(t);
  return _t(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : G(e) && Jt(e) ? e : Er(e);
}
function Kt(t, e, n) {
  var r;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const o = Er(t), i = o === ((r = t.ownerDocument) == null ? void 0 : r.body), s = I(o);
  if (i) {
    const a = Re(s);
    return e.concat(s, s.visualViewport || [], Jt(o) ? o : [], a && n ? Kt(a) : []);
  }
  return e.concat(o, Kt(o, [], n));
}
function Re(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function Cr(t) {
  const e = V(t);
  let n = parseFloat(e.width) || 0, r = parseFloat(e.height) || 0;
  const o = G(t), i = o ? t.offsetWidth : n, s = o ? t.offsetHeight : r, a = ce(n) !== i || ce(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function en(t) {
  return H(t) ? t : t.contextElement;
}
function kt(t) {
  const e = en(t);
  if (!G(e))
    return z(1);
  const n = e.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Cr(e);
  let s = (i ? ce(n.width) : n.width) / r, a = (i ? ce(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const bs = /* @__PURE__ */ z(0);
function Ar(t) {
  const e = I(t);
  return !tn() || !e.visualViewport ? bs : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function ys(t, e, n) {
  return e === void 0 && (e = !1), !n || e && n !== I(t) ? !1 : e;
}
function bt(t, e, n, r) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const o = t.getBoundingClientRect(), i = en(t);
  let s = z(1);
  e && (r ? H(r) && (s = kt(r)) : s = kt(t));
  const a = ys(i, n, r) ? Ar(i) : z(0);
  let l = (o.left + a.x) / s.x, c = (o.top + a.y) / s.y, d = o.width / s.x, h = o.height / s.y;
  if (i) {
    const f = I(i), u = r && H(r) ? I(r) : r;
    let p = f, g = Re(p);
    for (; g && r && u !== p; ) {
      const m = kt(g), b = g.getBoundingClientRect(), y = V(g), v = b.left + (g.clientLeft + parseFloat(y.paddingLeft)) * m.x, w = b.top + (g.clientTop + parseFloat(y.paddingTop)) * m.y;
      l *= m.x, c *= m.y, d *= m.x, h *= m.y, l += v, c += w, p = I(g), g = Re(p);
    }
  }
  return ue({
    width: d,
    height: h,
    x: l,
    y: c
  });
}
function we(t, e) {
  const n = ye(t).scrollLeft;
  return e ? e.left + n : bt(q(t)).left + n;
}
function kr(t, e) {
  const n = t.getBoundingClientRect(), r = n.left + e.scrollLeft - we(t, n), o = n.top + e.scrollTop;
  return {
    x: r,
    y: o
  };
}
function ws(t) {
  let {
    elements: e,
    rect: n,
    offsetParent: r,
    strategy: o
  } = t;
  const i = o === "fixed", s = q(r), a = e ? be(e.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = z(1);
  const d = z(0), h = G(r);
  if ((h || !h && !i) && ((Rt(r) !== "body" || Jt(s)) && (l = ye(r)), G(r))) {
    const u = bt(r);
    c = kt(r), d.x = u.x + r.clientLeft, d.y = u.y + r.clientTop;
  }
  const f = s && !h && !i ? kr(s, l) : z(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + d.x + f.x,
    y: n.y * c.y - l.scrollTop * c.y + d.y + f.y
  };
}
function xs(t) {
  return Array.from(t.getClientRects());
}
function Os(t) {
  const e = q(t), n = ye(t), r = t.ownerDocument.body, o = N(e.scrollWidth, e.clientWidth, r.scrollWidth, r.clientWidth), i = N(e.scrollHeight, e.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + we(t);
  const a = -n.scrollTop;
  return V(r).direction === "rtl" && (s += N(e.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
const _n = 25;
function Es(t, e) {
  const n = I(t), r = q(t), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const d = tn();
    (!d || d && e === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  const c = we(r);
  if (c <= 0) {
    const d = r.ownerDocument, h = d.body, f = getComputedStyle(h), u = d.compatMode === "CSS1Compat" && parseFloat(f.marginLeft) + parseFloat(f.marginRight) || 0, p = Math.abs(r.clientWidth - h.clientWidth - u);
    p <= _n && (i -= p);
  } else c <= _n && (i += c);
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
const Cs = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function As(t, e) {
  const n = bt(t, !0, e === "fixed"), r = n.top + t.clientTop, o = n.left + t.clientLeft, i = G(t) ? kt(t) : z(1), s = t.clientWidth * i.x, a = t.clientHeight * i.y, l = o * i.x, c = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: c
  };
}
function Nn(t, e, n) {
  let r;
  if (e === "viewport")
    r = Es(t, n);
  else if (e === "document")
    r = Os(q(t));
  else if (H(e))
    r = As(e, n);
  else {
    const o = Ar(t);
    r = {
      x: e.x - o.x,
      y: e.y - o.y,
      width: e.width,
      height: e.height
    };
  }
  return ue(r);
}
function Pr(t, e) {
  const n = st(t);
  return n === e || !H(n) || _t(n) ? !1 : V(n).position === "fixed" || Pr(n, e);
}
function ks(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let r = Kt(t, [], !1).filter((a) => H(a) && Rt(a) !== "body"), o = null;
  const i = V(t).position === "fixed";
  let s = i ? st(t) : t;
  for (; H(s) && !_t(s); ) {
    const a = V(s), l = Qe(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && !!o && Cs.has(o.position) || Jt(s) && !l && Pr(t, s)) ? r = r.filter((d) => d !== s) : o = a, s = st(s);
  }
  return e.set(t, r), r;
}
function Ps(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = t;
  const s = [...n === "clippingAncestors" ? be(e) ? [] : ks(e, this._c) : [].concat(n), r], a = s[0], l = s.reduce((c, d) => {
    const h = Nn(e, d, o);
    return c.top = N(h.top, c.top), c.right = it(h.right, c.right), c.bottom = it(h.bottom, c.bottom), c.left = N(h.left, c.left), c;
  }, Nn(e, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function $s(t) {
  const {
    width: e,
    height: n
  } = Cr(t);
  return {
    width: e,
    height: n
  };
}
function Ss(t, e, n) {
  const r = G(e), o = q(e), i = n === "fixed", s = bt(t, !0, i, e);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = z(0);
  function c() {
    l.x = we(o);
  }
  if (r || !r && !i)
    if ((Rt(e) !== "body" || Jt(o)) && (a = ye(e)), r) {
      const u = bt(e, !0, i, e);
      l.x = u.x + e.clientLeft, l.y = u.y + e.clientTop;
    } else o && c();
  i && !r && o && c();
  const d = o && !r && !i ? kr(o, a) : z(0), h = s.left + a.scrollLeft - l.x - d.x, f = s.top + a.scrollTop - l.y - d.y;
  return {
    x: h,
    y: f,
    width: s.width,
    height: s.height
  };
}
function Ae(t) {
  return V(t).position === "static";
}
function In(t, e) {
  if (!G(t) || V(t).position === "fixed")
    return null;
  if (e)
    return e(t);
  let n = t.offsetParent;
  return q(t) === n && (n = n.ownerDocument.body), n;
}
function $r(t, e) {
  const n = I(t);
  if (be(t))
    return n;
  if (!G(t)) {
    let o = st(t);
    for (; o && !_t(o); ) {
      if (H(o) && !Ae(o))
        return o;
      o = st(o);
    }
    return n;
  }
  let r = In(t, e);
  for (; r && us(r) && Ae(r); )
    r = In(r, e);
  return r && _t(r) && Ae(r) && !Qe(r) ? n : r || ms(t) || n;
}
const Ts = async function(t) {
  const e = this.getOffsetParent || $r, n = this.getDimensions, r = await n(t.floating);
  return {
    reference: Ss(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function _s(t) {
  return V(t).direction === "rtl";
}
const Ns = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ws,
  getDocumentElement: q,
  getClippingRect: Ps,
  getOffsetParent: $r,
  getElementRects: Ts,
  getClientRects: xs,
  getDimensions: $s,
  getScale: kt,
  isElement: H,
  isRTL: _s
};
function Sr(t, e) {
  return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height;
}
function Is(t, e) {
  let n = null, r;
  const o = q(t);
  function i() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), n = null;
  }
  function s(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), i();
    const c = t.getBoundingClientRect(), {
      left: d,
      top: h,
      width: f,
      height: u
    } = c;
    if (a || e(), !f || !u)
      return;
    const p = ee(h), g = ee(o.clientWidth - (d + f)), m = ee(o.clientHeight - (h + u)), b = ee(d), v = {
      rootMargin: -p + "px " + -g + "px " + -m + "px " + -b + "px",
      threshold: N(0, it(1, l)) || 1
    };
    let w = !0;
    function x(E) {
      const O = E[0].intersectionRatio;
      if (O !== l) {
        if (!w)
          return s();
        O ? s(!1, O) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      O === 1 && !Sr(c, t.getBoundingClientRect()) && s(), w = !1;
    }
    try {
      n = new IntersectionObserver(x, {
        ...v,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(x, v);
    }
    n.observe(t);
  }
  return s(!0), i;
}
function Rs(t, e, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, c = en(t), d = o || i ? [...c ? Kt(c) : [], ...Kt(e)] : [];
  d.forEach((b) => {
    o && b.addEventListener("scroll", n, {
      passive: !0
    }), i && b.addEventListener("resize", n);
  });
  const h = c && a ? Is(c, n) : null;
  let f = -1, u = null;
  s && (u = new ResizeObserver((b) => {
    let [y] = b;
    y && y.target === c && u && (u.unobserve(e), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var v;
      (v = u) == null || v.observe(e);
    })), n();
  }), c && !l && u.observe(c), u.observe(e));
  let p, g = l ? bt(t) : null;
  l && m();
  function m() {
    const b = bt(t);
    g && !Sr(g, b) && n(), g = b, p = requestAnimationFrame(m);
  }
  return n(), () => {
    var b;
    d.forEach((y) => {
      o && y.removeEventListener("scroll", n), i && y.removeEventListener("resize", n);
    }), h?.(), (b = u) == null || b.disconnect(), u = null, l && cancelAnimationFrame(p);
  };
}
const Ls = is, Ds = ss, Ms = ns, Fs = ls, Bs = rs, Hs = es, Vs = as, Us = (t, e, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Ns,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return ts(t, e, {
    ...o,
    platform: i
  });
};
function Rn(t = 0, e = 0, n = 0, r = 0) {
  if (typeof DOMRect == "function")
    return new DOMRect(t, e, n, r);
  const o = {
    x: t,
    y: e,
    width: n,
    height: r,
    top: e,
    right: t + n,
    bottom: e + r,
    left: t
  };
  return { ...o, toJSON: () => o };
}
function js(t) {
  if (!t) return Rn();
  const { x: e, y: n, width: r, height: o } = t;
  return Rn(e, n, r, o);
}
function Ws(t, e) {
  return {
    contextElement: k(t) ? t : t?.contextElement,
    getBoundingClientRect: () => {
      const n = t, r = e?.(n);
      return r || !n ? js(r) : n.getBoundingClientRect();
    }
  };
}
var Ln = (t) => ({ variable: t, reference: `var(${t})` }), Tr = {
  transformOrigin: Ln("--transform-origin"),
  arrowOffset: Ln("--arrow-offset")
}, zs = (t) => t === "top" || t === "bottom" ? "y" : "x";
function Gs(t, e) {
  return {
    name: "transformOrigin",
    fn(n) {
      const { elements: r, middlewareData: o, placement: i, rects: s, y: a } = n, l = i.split("-")[0], c = zs(l), d = o.arrow?.x || 0, h = o.arrow?.y || 0, f = e?.clientWidth || 0, u = e?.clientHeight || 0, p = d + f / 2, g = h + u / 2, m = Math.abs(o.shift?.y || 0), b = s.reference.height / 2, y = u / 2, v = t.offset?.mainAxis ?? t.gutter, w = typeof v == "number" ? v + y : v ?? y, x = m > w, E = {
        top: `${p}px calc(100% + ${w}px)`,
        bottom: `${p}px ${-w}px`,
        left: `calc(100% + ${w}px) ${g}px`,
        right: `${-w}px ${g}px`
      }[l], O = `${p}px ${s.reference.y + b - a}px`, P = !!t.overlap && c === "y" && x;
      return r.floating.style.setProperty(
        Tr.transformOrigin.variable,
        P ? O : E
      ), {
        data: {
          transformOrigin: P ? O : E
        }
      };
    }
  };
}
var qs = {
  name: "rects",
  fn({ rects: t }) {
    return {
      data: t
    };
  }
}, Ks = (t) => {
  if (t)
    return {
      name: "shiftArrow",
      fn({ placement: e, middlewareData: n }) {
        if (!n.arrow) return {};
        const { x: r, y: o } = n.arrow, i = e.split("-")[0];
        return Object.assign(t.style, {
          left: r != null ? `${r}px` : "",
          top: o != null ? `${o}px` : "",
          [i]: `calc(100% + ${Tr.arrowOffset.reference})`
        }), {};
      }
    };
};
function Ys(t) {
  const [e, n] = t.split("-");
  return { side: e, align: n, hasAlign: n != null };
}
function Xs(t) {
  return t.split("-")[0];
}
var Zs = {
  strategy: "absolute",
  placement: "bottom",
  listeners: !0,
  gutter: 8,
  flip: !0,
  slide: !0,
  overlap: !1,
  sameWidth: !1,
  fitViewport: !1,
  overflowPadding: 8,
  arrowPadding: 4
};
function Dn(t, e) {
  const n = t.devicePixelRatio || 1;
  return Math.round(e * n) / n;
}
function nn(t) {
  return typeof t == "function" ? t() : t === "clipping-ancestors" ? "clippingAncestors" : t;
}
function Js(t, e, n) {
  const r = t || e.createElement("div");
  return Hs({ element: r, padding: n.arrowPadding });
}
function Qs(t, e) {
  if (!To(e.offset ?? e.gutter))
    return Ls(({ placement: n }) => {
      const r = (t?.clientHeight || 0) / 2, o = e.offset?.mainAxis ?? e.gutter, i = typeof o == "number" ? o + r : o ?? r, { hasAlign: s } = Ys(n), a = s ? void 0 : e.shift, l = e.offset?.crossAxis ?? a;
      return ir({
        crossAxis: l,
        mainAxis: i,
        alignmentAxis: e.shift
      });
    });
}
function ta(t) {
  if (!t.flip) return;
  const e = nn(t.boundary);
  return Ms({
    ...e ? { boundary: e } : void 0,
    padding: t.overflowPadding,
    fallbackPlacements: t.flip === !0 ? void 0 : t.flip
  });
}
function ea(t) {
  if (!t.slide && !t.overlap) return;
  const e = nn(t.boundary);
  return Ds({
    ...e ? { boundary: e } : void 0,
    mainAxis: t.slide,
    crossAxis: t.overlap,
    padding: t.overflowPadding,
    limiter: Vs()
  });
}
function na(t) {
  return Fs({
    padding: t.overflowPadding,
    apply({ elements: e, rects: n, availableHeight: r, availableWidth: o }) {
      const i = e.floating, s = Math.round(n.reference.width), a = Math.round(n.reference.height);
      o = Math.floor(o), r = Math.floor(r), i.style.setProperty("--reference-width", `${s}px`), i.style.setProperty("--reference-height", `${a}px`), i.style.setProperty("--available-width", `${o}px`), i.style.setProperty("--available-height", `${r}px`);
    }
  });
}
function ra(t) {
  if (t.hideWhenDetached)
    return Bs({ strategy: "referenceHidden", boundary: nn(t.boundary) ?? "clippingAncestors" });
}
function oa(t) {
  return t ? t === !0 ? { ancestorResize: !0, ancestorScroll: !0, elementResize: !0, layoutShift: !0 } : t : {};
}
function ia(t, e, n = {}) {
  const r = n.getAnchorElement?.() ?? t, o = Ws(r, n.getAnchorRect);
  if (!e || !o) return;
  const i = Object.assign({}, Zs, n), s = e.querySelector("[data-part=arrow]"), a = [
    Qs(s, i),
    ta(i),
    ea(i),
    Js(s, e.ownerDocument, i),
    Ks(s),
    Gs(
      { gutter: i.gutter, offset: i.offset, overlap: i.overlap },
      s
    ),
    na(i),
    ra(i),
    qs
  ], { placement: l, strategy: c, onComplete: d, onPositioned: h } = i, f = async () => {
    if (!o || !e) return;
    const m = await Us(o, e, {
      placement: l,
      middleware: a,
      strategy: c
    });
    d?.(m), h?.({ placed: !0 });
    const b = lt(e), y = Dn(b, m.x), v = Dn(b, m.y);
    e.style.setProperty("--x", `${y}px`), e.style.setProperty("--y", `${v}px`), i.hideWhenDetached && (m.middlewareData.hide?.referenceHidden ? (e.style.setProperty("visibility", "hidden"), e.style.setProperty("pointer-events", "none")) : (e.style.removeProperty("visibility"), e.style.removeProperty("pointer-events")));
    const w = e.firstElementChild;
    if (w) {
      const x = We(w);
      e.style.setProperty("--z-index", x.zIndex);
    }
  }, u = async () => {
    n.updatePosition ? (await n.updatePosition({ updatePosition: f, floatingElement: e }), h?.({ placed: !0 })) : await f();
  }, p = oa(i.listeners), g = i.listeners ? Rs(o, e, u, p) : Fo;
  return u(), () => {
    g?.(), h?.({ placed: !1 });
  };
}
function Mn(t, e, n = {}) {
  const { defer: r, ...o } = n, i = r ? _ : (a) => a(), s = [];
  return s.push(
    i(() => {
      const a = typeof t == "function" ? t() : t, l = typeof e == "function" ? e() : e;
      s.push(ia(a, l, o));
    })
  ), () => {
    s.forEach((a) => a?.());
  };
}
function sa(t) {
  const e = {
    each(n) {
      for (let r = 0; r < t.frames?.length; r += 1) {
        const o = t.frames[r];
        o && n(o);
      }
    },
    addEventListener(n, r, o) {
      return e.each((i) => {
        try {
          i.document.addEventListener(n, r, o);
        } catch {
        }
      }), () => {
        try {
          e.removeEventListener(n, r, o);
        } catch {
        }
      };
    },
    removeEventListener(n, r, o) {
      e.each((i) => {
        try {
          i.document.removeEventListener(n, r, o);
        } catch {
        }
      });
    }
  };
  return e;
}
function aa(t) {
  const e = t.frameElement != null ? t.parent : null;
  return {
    addEventListener: (n, r, o) => {
      try {
        e?.addEventListener(n, r, o);
      } catch {
      }
      return () => {
        try {
          e?.removeEventListener(n, r, o);
        } catch {
        }
      };
    },
    removeEventListener: (n, r, o) => {
      try {
        e?.removeEventListener(n, r, o);
      } catch {
      }
    }
  };
}
var Fn = "pointerdown.outside", Bn = "focus.outside";
function la(t) {
  for (const e of t)
    if (k(e) && X(e)) return !0;
  return !1;
}
var _r = (t) => "clientY" in t;
function ca(t, e) {
  if (!_r(e) || !t) return !1;
  const n = t.getBoundingClientRect();
  return n.width === 0 || n.height === 0 ? !1 : n.top <= e.clientY && e.clientY <= n.top + n.height && n.left <= e.clientX && e.clientX <= n.left + n.width;
}
function da(t, e) {
  return t.y <= e.y && e.y <= t.y + t.height && t.x <= e.x && e.x <= t.x + t.width;
}
function Hn(t, e) {
  if (!e || !_r(t)) return !1;
  const n = e.scrollHeight > e.clientHeight, r = n && t.clientX > e.offsetLeft + e.clientWidth, o = e.scrollWidth > e.clientWidth, i = o && t.clientY > e.offsetTop + e.clientHeight, s = {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: e.clientWidth + (n ? 16 : 0),
    height: e.clientHeight + (o ? 16 : 0)
  }, a = {
    x: t.clientX,
    y: t.clientY
  };
  return da(s, a) ? r || i : !1;
}
function ua(t, e) {
  const {
    exclude: n,
    onFocusOutside: r,
    onPointerDownOutside: o,
    onInteractOutside: i,
    defer: s,
    followControlledElements: a = !0
  } = e;
  if (!t) return;
  const l = at(t), c = lt(t), d = sa(c), h = aa(c);
  function f(v, w) {
    if (!k(w) || !w.isConnected || pt(t, w) || ca(t, v) || a && dr(t, w)) return !1;
    const x = l.querySelector(`[aria-controls="${t.id}"]`);
    if (x) {
      const O = Te(x);
      if (Hn(v, O)) return !1;
    }
    const E = Te(t);
    return Hn(v, E) ? !1 : !n?.(w);
  }
  const u = /* @__PURE__ */ new Set(), p = Tt(t?.getRootNode());
  function g(v) {
    function w(x) {
      const E = s && !Cn() ? _ : ($) => $(), O = x ?? v, P = O?.composedPath?.() ?? [O?.target];
      E(() => {
        const $ = p ? P[0] : j(v);
        if (!(!t || !f(v, $))) {
          if (o || i) {
            const T = En(o, i);
            t.addEventListener(Fn, T, { once: !0 });
          }
          Vn(t, Fn, {
            bubbles: !1,
            cancelable: !0,
            detail: {
              originalEvent: O,
              contextmenu: gi(O),
              focusable: la(P),
              target: $
            }
          });
        }
      });
    }
    v.pointerType === "touch" ? (u.forEach((x) => x()), u.add(B(l, "click", w, { once: !0 })), u.add(h.addEventListener("click", w, { once: !0 })), u.add(d.addEventListener("click", w, { once: !0 }))) : w();
  }
  const m = /* @__PURE__ */ new Set(), b = setTimeout(() => {
    m.add(B(l, "pointerdown", g, !0)), m.add(h.addEventListener("pointerdown", g, !0)), m.add(d.addEventListener("pointerdown", g, !0));
  }, 0);
  function y(v) {
    (s ? _ : (x) => x())(() => {
      const x = v?.composedPath?.() ?? [v?.target], E = p ? x[0] : j(v);
      if (!(!t || !f(v, E))) {
        if (r || i) {
          const O = En(r, i);
          t.addEventListener(Bn, O, { once: !0 });
        }
        Vn(t, Bn, {
          bubbles: !1,
          cancelable: !0,
          detail: {
            originalEvent: v,
            contextmenu: !1,
            focusable: X(E),
            target: E
          }
        });
      }
    });
  }
  return Cn() || (m.add(B(l, "focusin", y, !0)), m.add(h.addEventListener("focusin", y, !0)), m.add(d.addEventListener("focusin", y, !0))), () => {
    clearTimeout(b), u.forEach((v) => v()), m.forEach((v) => v());
  };
}
function ha(t, e) {
  const { defer: n } = e, r = n ? _ : (i) => i(), o = [];
  return o.push(
    r(() => {
      const i = typeof t == "function" ? t() : t;
      o.push(ua(i, e));
    })
  ), () => {
    o.forEach((i) => i?.());
  };
}
function Vn(t, e, n) {
  const r = t.ownerDocument.defaultView || window, o = new r.CustomEvent(e, n);
  return t.dispatchEvent(o);
}
function fa(t, e) {
  const n = (r) => {
    r.key === "Escape" && (r.isComposing || e?.(r));
  };
  return B(at(t), "keydown", n, { capture: !0 });
}
var Un = "layer:request-dismiss", L = {
  layers: [],
  branches: [],
  count() {
    return this.layers.length;
  },
  pointerBlockingLayers() {
    return this.layers.filter((t) => t.pointerBlocking);
  },
  topMostPointerBlockingLayer() {
    return [...this.pointerBlockingLayers()].slice(-1)[0];
  },
  hasPointerBlockingLayer() {
    return this.pointerBlockingLayers().length > 0;
  },
  isBelowPointerBlockingLayer(t) {
    const e = this.indexOf(t), n = this.topMostPointerBlockingLayer() ? this.indexOf(this.topMostPointerBlockingLayer()?.node) : -1;
    return e < n;
  },
  isTopMost(t) {
    return this.layers[this.count() - 1]?.node === t;
  },
  getNestedLayers(t) {
    return Array.from(this.layers).slice(this.indexOf(t) + 1);
  },
  getLayersByType(t) {
    return this.layers.filter((e) => e.type === t);
  },
  getNestedLayersByType(t, e) {
    const n = this.indexOf(t);
    return n === -1 ? [] : this.layers.slice(n + 1).filter((r) => r.type === e);
  },
  getParentLayerOfType(t, e) {
    const n = this.indexOf(t);
    if (!(n <= 0))
      return this.layers.slice(0, n).reverse().find((r) => r.type === e);
  },
  countNestedLayersOfType(t, e) {
    return this.getNestedLayersByType(t, e).length;
  },
  isInNestedLayer(t, e) {
    return this.getNestedLayers(t).some((n) => pt(n.node, e));
  },
  isInBranch(t) {
    return Array.from(this.branches).some((e) => pt(e, t));
  },
  add(t) {
    this.layers.push(t), this.syncLayers();
  },
  addBranch(t) {
    this.branches.push(t);
  },
  remove(t) {
    const e = this.indexOf(t);
    e < 0 || (e < this.count() - 1 && this.getNestedLayers(t).forEach((r) => L.dismiss(r.node, t)), this.layers.splice(e, 1), this.syncLayers());
  },
  removeBranch(t) {
    const e = this.branches.indexOf(t);
    e >= 0 && this.branches.splice(e, 1);
  },
  syncLayers() {
    this.layers.forEach((t, e) => {
      t.node.style.setProperty("--layer-index", `${e}`), t.node.removeAttribute("data-nested"), t.node.removeAttribute("data-has-nested"), this.getParentLayerOfType(t.node, t.type) && t.node.setAttribute("data-nested", t.type);
      const r = this.countNestedLayersOfType(t.node, t.type);
      r > 0 && t.node.setAttribute("data-has-nested", t.type), t.node.style.setProperty("--nested-layer-count", `${r}`);
    });
  },
  indexOf(t) {
    return this.layers.findIndex((e) => e.node === t);
  },
  dismiss(t, e) {
    const n = this.indexOf(t);
    if (n === -1) return;
    const r = this.layers[n];
    ga(t, Un, (o) => {
      r.requestDismiss?.(o), o.defaultPrevented || r?.dismiss();
    }), pa(t, Un, {
      originalLayer: t,
      targetLayer: e,
      originalIndex: n,
      targetIndex: e ? this.indexOf(e) : -1
    }), this.syncLayers();
  },
  clear() {
    this.remove(this.layers[0].node);
  }
};
function pa(t, e, n) {
  const r = t.ownerDocument.defaultView || window, o = new r.CustomEvent(e, { cancelable: !0, bubbles: !0, detail: n });
  return t.dispatchEvent(o);
}
function ga(t, e, n) {
  t.addEventListener(e, n, { once: !0 });
}
var jn;
function Wn() {
  L.layers.forEach(({ node: t }) => {
    t.style.pointerEvents = L.isBelowPointerBlockingLayer(t) ? "none" : "auto";
  });
}
function ma(t) {
  t.style.pointerEvents = "";
}
function va(t, e) {
  const n = at(t), r = [];
  return L.hasPointerBlockingLayer() && !n.body.hasAttribute("data-inert") && (jn = document.body.style.pointerEvents, queueMicrotask(() => {
    n.body.style.pointerEvents = "none", n.body.setAttribute("data-inert", "");
  })), e?.forEach((o) => {
    const [i, s] = Vi(
      () => {
        const a = o();
        return k(a) ? a : null;
      },
      { timeout: 1e3 }
    );
    i.then((a) => r.push(_e(a, { pointerEvents: "auto" }))), r.push(s);
  }), () => {
    L.hasPointerBlockingLayer() || (queueMicrotask(() => {
      n.body.style.pointerEvents = jn, n.body.removeAttribute("data-inert"), n.body.style.length === 0 && n.body.removeAttribute("style");
    }), r.forEach((o) => o()));
  };
}
function ba(t, e) {
  const { warnOnMissingNode: n = !0 } = e;
  if (n && !t) {
    Bo("[@zag-js/dismissable] node is `null` or `undefined`");
    return;
  }
  if (!t)
    return;
  const { onDismiss: r, onRequestDismiss: o, pointerBlocking: i, exclude: s, debug: a, type: l = "dialog" } = e, c = { dismiss: r, node: t, type: l, pointerBlocking: i, requestDismiss: o };
  L.add(c), Wn();
  function d(g) {
    const m = j(g.detail.originalEvent);
    L.isBelowPointerBlockingLayer(t) || L.isInBranch(m) || (e.onPointerDownOutside?.(g), e.onInteractOutside?.(g), !g.defaultPrevented && (a && console.log("onPointerDownOutside:", g.detail.originalEvent), r?.()));
  }
  function h(g) {
    const m = j(g.detail.originalEvent);
    L.isInBranch(m) || (e.onFocusOutside?.(g), e.onInteractOutside?.(g), !g.defaultPrevented && (a && console.log("onFocusOutside:", g.detail.originalEvent), r?.()));
  }
  function f(g) {
    L.isTopMost(t) && (e.onEscapeKeyDown?.(g), !g.defaultPrevented && r && (g.preventDefault(), r()));
  }
  function u(g) {
    if (!t) return !1;
    const m = typeof s == "function" ? s() : s, b = Array.isArray(m) ? m : [m], y = e.persistentElements?.map((v) => v()).filter(k);
    return y && b.push(...y), b.some((v) => pt(v, g)) || L.isInNestedLayer(t, g);
  }
  const p = [
    i ? va(t, e.persistentElements) : void 0,
    fa(t, f),
    ha(t, { exclude: u, onFocusOutside: h, onPointerDownOutside: d, defer: e.defer })
  ];
  return () => {
    L.remove(t), Wn(), ma(t), p.forEach((g) => g?.());
  };
}
function Nr(t, e) {
  const { defer: n } = e, r = n ? _ : (i) => i(), o = [];
  return o.push(
    r(() => {
      const i = So(t) ? t() : t;
      o.push(ba(i, e));
    })
  ), () => {
    o.forEach((i) => i?.());
  };
}
var Bt = (t, e) => ({ x: t, y: e });
function ya(t) {
  const { x: e, y: n, width: r, height: o } = t, i = e + r / 2, s = n + o / 2;
  return {
    x: e,
    y: n,
    width: r,
    height: o,
    minX: e,
    minY: n,
    maxX: e + r,
    maxY: n + o,
    midX: i,
    midY: s,
    center: Bt(i, s)
  };
}
function wa(t) {
  const e = Bt(t.minX, t.minY), n = Bt(t.maxX, t.minY), r = Bt(t.maxX, t.maxY), o = Bt(t.minX, t.maxY);
  return { top: e, right: n, bottom: r, left: o };
}
function xa(t, e) {
  const n = ya(t), { top: r, right: o, left: i, bottom: s } = wa(n), [a] = e.split("-");
  return {
    top: [i, r, o, s],
    right: [r, o, s, i],
    bottom: [r, i, s, o],
    left: [o, r, i, s]
  }[a];
}
function Oa(t, e) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const a = t[i].x, l = t[i].y, c = t[s].x, d = t[s].y;
    l > r != d > r && n < (c - a) * (r - l) / (d - l) + a && (o = !o);
  }
  return o;
}
var Lt = () => (t) => Array.from(new Set(t)), Ea = Ct("menu").parts(
  "arrow",
  "arrowTip",
  "content",
  "contextTrigger",
  "indicator",
  "item",
  "itemGroup",
  "itemGroupLabel",
  "itemIndicator",
  "itemText",
  "positioner",
  "separator",
  "trigger",
  "triggerItem"
);
Ea.build();
var Ir = (t) => t.ids?.trigger ?? `menu:${t.id}:trigger`, Ca = (t) => t.ids?.contextTrigger ?? `menu:${t.id}:ctx-trigger`, Rr = (t) => t.ids?.content ?? `menu:${t.id}:content`, Aa = (t) => t.ids?.positioner ?? `menu:${t.id}:popper`, Le = (t, e) => `${t.id}/${e}`, ut = (t) => t?.dataset.value ?? null, rt = (t) => t.getById(Rr(t)), zn = (t) => t.getById(Aa(t)), ne = (t) => t.getById(Ir(t)), ka = (t, e) => e ? t.getById(Le(t, e)) : null, ke = (t) => t.getById(Ca(t)), Qt = (t) => {
  const n = `[role^="menuitem"][data-ownedby=${CSS.escape(Rr(t))}]:not([data-disabled])`;
  return Ti(rt(t), n);
}, Pa = (t) => Oo(Qt(t)), $a = (t) => Eo(Qt(t)), rn = (t, e) => e ? t.id === e || t.dataset.value === e : !1, Sa = (t, e) => {
  const n = Qt(t), r = n.findIndex((o) => rn(o, e.value));
  return Co(n, r, { loop: e.loop ?? e.loopFocus });
}, Ta = (t, e) => {
  const n = Qt(t), r = n.findIndex((o) => rn(o, e.value));
  return ko(n, r, { loop: e.loop ?? e.loopFocus });
}, _a = (t, e) => {
  const n = Qt(t), r = n.find((o) => rn(o, e.value));
  return yr(n, { state: e.typeaheadState, key: e.key, activeId: r?.id ?? null });
}, Na = (t) => !!t?.getAttribute("role")?.startsWith("menuitem") && !!t?.hasAttribute("data-controls"), Ia = "menu:select";
function Ra(t, e) {
  if (!t) return;
  const n = lt(t), r = new n.CustomEvent(Ia, { detail: { value: e } });
  t.dispatchEvent(r);
}
var { not: R, and: wt, or: La } = Ui(), Da = {
  props({ props: t }) {
    return {
      closeOnSelect: !0,
      typeahead: !0,
      composite: !0,
      loopFocus: !1,
      navigate(e) {
        Ai(e.node);
      },
      ...t,
      positioning: {
        placement: "bottom-start",
        gutter: 8,
        ...t.positioning
      }
    };
  },
  initialState({ prop: t }) {
    return t("open") || t("defaultOpen") ? "open" : "idle";
  },
  context({ bindable: t, prop: e }) {
    return {
      suspendPointer: t(() => ({
        defaultValue: !1
      })),
      highlightedValue: t(() => ({
        defaultValue: e("defaultHighlightedValue") || null,
        value: e("highlightedValue"),
        onChange(n) {
          e("onHighlightChange")?.({ highlightedValue: n });
        }
      })),
      lastHighlightedValue: t(() => ({
        defaultValue: null
      })),
      currentPlacement: t(() => ({
        defaultValue: void 0
      })),
      intentPolygon: t(() => ({
        defaultValue: null
      })),
      anchorPoint: t(() => ({
        defaultValue: null,
        hash(n) {
          return `x: ${n?.x}, y: ${n?.y}`;
        }
      })),
      isSubmenu: t(() => ({
        defaultValue: !1
      }))
    };
  },
  refs() {
    return {
      parent: null,
      children: {},
      typeaheadState: { ...yr.defaultOptions },
      positioningOverride: {}
    };
  },
  computed: {
    isRtl: ({ prop: t }) => t("dir") === "rtl",
    isTypingAhead: ({ refs: t }) => t.get("typeaheadState").keysSoFar !== "",
    highlightedId: ({ context: t, scope: e, refs: n }) => Fa(n.get("children"), t.get("highlightedValue"), e)
  },
  watch({ track: t, action: e, context: n, prop: r }) {
    t([() => n.get("isSubmenu")], () => {
      e(["setSubmenuPlacement"]);
    }), t([() => n.hash("anchorPoint")], () => {
      n.get("anchorPoint") && e(["reposition"]);
    }), t([() => r("open")], () => {
      e(["toggleVisibility"]);
    });
  },
  on: {
    "PARENT.SET": {
      actions: ["setParentMenu"]
    },
    "CHILD.SET": {
      actions: ["setChildMenu"]
    },
    OPEN: [
      {
        guard: "isOpenControlled",
        actions: ["invokeOnOpen"]
      },
      {
        target: "open",
        actions: ["invokeOnOpen"]
      }
    ],
    OPEN_AUTOFOCUS: [
      {
        guard: "isOpenControlled",
        actions: ["invokeOnOpen"]
      },
      {
        // internal: true,
        target: "open",
        actions: ["highlightFirstItem", "invokeOnOpen"]
      }
    ],
    CLOSE: [
      {
        guard: "isOpenControlled",
        actions: ["invokeOnClose"]
      },
      {
        target: "closed",
        actions: ["invokeOnClose"]
      }
    ],
    "HIGHLIGHTED.RESTORE": {
      actions: ["restoreHighlightedItem"]
    },
    "HIGHLIGHTED.SET": {
      actions: ["setHighlightedItem"]
    }
  },
  states: {
    idle: {
      tags: ["closed"],
      on: {
        "CONTROLLED.OPEN": {
          target: "open"
        },
        "CONTROLLED.CLOSE": {
          target: "closed"
        },
        CONTEXT_MENU_START: {
          target: "opening:contextmenu",
          actions: ["setAnchorPoint"]
        },
        CONTEXT_MENU: [
          {
            guard: "isOpenControlled",
            actions: ["setAnchorPoint", "invokeOnOpen"]
          },
          {
            target: "open",
            actions: ["setAnchorPoint", "invokeOnOpen"]
          }
        ],
        TRIGGER_CLICK: [
          {
            guard: "isOpenControlled",
            actions: ["invokeOnOpen"]
          },
          {
            target: "open",
            actions: ["invokeOnOpen"]
          }
        ],
        TRIGGER_FOCUS: {
          guard: R("isSubmenu"),
          target: "closed"
        },
        TRIGGER_POINTERMOVE: {
          guard: "isSubmenu",
          target: "opening"
        }
      }
    },
    "opening:contextmenu": {
      tags: ["closed"],
      effects: ["waitForLongPress"],
      on: {
        "CONTROLLED.OPEN": { target: "open" },
        "CONTROLLED.CLOSE": { target: "closed" },
        CONTEXT_MENU_CANCEL: [
          {
            guard: "isOpenControlled",
            actions: ["invokeOnClose"]
          },
          {
            target: "closed",
            actions: ["invokeOnClose"]
          }
        ],
        "LONG_PRESS.OPEN": [
          {
            guard: "isOpenControlled",
            actions: ["invokeOnOpen"]
          },
          {
            target: "open",
            actions: ["invokeOnOpen"]
          }
        ]
      }
    },
    opening: {
      tags: ["closed"],
      effects: ["waitForOpenDelay"],
      on: {
        "CONTROLLED.OPEN": {
          target: "open"
        },
        "CONTROLLED.CLOSE": {
          target: "closed"
        },
        BLUR: [
          {
            guard: "isOpenControlled",
            actions: ["invokeOnClose"]
          },
          {
            target: "closed",
            actions: ["invokeOnClose"]
          }
        ],
        TRIGGER_POINTERLEAVE: [
          {
            guard: "isOpenControlled",
            actions: ["invokeOnClose"]
          },
          {
            target: "closed",
            actions: ["invokeOnClose"]
          }
        ],
        "DELAY.OPEN": [
          {
            guard: "isOpenControlled",
            actions: ["invokeOnOpen"]
          },
          {
            target: "open",
            actions: ["invokeOnOpen"]
          }
        ]
      }
    },
    closing: {
      tags: ["open"],
      effects: ["trackPointerMove", "trackInteractOutside", "waitForCloseDelay"],
      on: {
        "CONTROLLED.OPEN": {
          target: "open"
        },
        "CONTROLLED.CLOSE": {
          target: "closed",
          actions: ["focusParentMenu", "restoreParentHighlightedItem"]
        },
        // don't invoke on open here since the menu is still open (we're only keeping it open)
        MENU_POINTERENTER: {
          target: "open",
          actions: ["clearIntentPolygon"]
        },
        POINTER_MOVED_AWAY_FROM_SUBMENU: [
          {
            guard: "isOpenControlled",
            actions: ["invokeOnClose"]
          },
          {
            target: "closed",
            actions: ["focusParentMenu", "restoreParentHighlightedItem"]
          }
        ],
        "DELAY.CLOSE": [
          {
            guard: "isOpenControlled",
            actions: ["invokeOnClose"]
          },
          {
            target: "closed",
            actions: ["focusParentMenu", "restoreParentHighlightedItem", "invokeOnClose"]
          }
        ]
      }
    },
    closed: {
      tags: ["closed"],
      entry: ["clearHighlightedItem", "focusTrigger", "resumePointer", "clearAnchorPoint"],
      on: {
        "CONTROLLED.OPEN": [
          {
            guard: La("isOpenAutoFocusEvent", "isArrowDownEvent"),
            target: "open",
            actions: ["highlightFirstItem"]
          },
          {
            guard: "isArrowUpEvent",
            target: "open",
            actions: ["highlightLastItem"]
          },
          {
            target: "open"
          }
        ],
        CONTEXT_MENU_START: {
          target: "opening:contextmenu",
          actions: ["setAnchorPoint"]
        },
        CONTEXT_MENU: [
          {
            guard: "isOpenControlled",
            actions: ["setAnchorPoint", "invokeOnOpen"]
          },
          {
            target: "open",
            actions: ["setAnchorPoint", "invokeOnOpen"]
          }
        ],
        TRIGGER_CLICK: [
          {
            guard: "isOpenControlled",
            actions: ["invokeOnOpen"]
          },
          {
            target: "open",
            actions: ["invokeOnOpen"]
          }
        ],
        TRIGGER_POINTERMOVE: {
          guard: "isTriggerItem",
          target: "opening"
        },
        TRIGGER_BLUR: { target: "idle" },
        ARROW_DOWN: [
          {
            guard: "isOpenControlled",
            actions: ["invokeOnOpen"]
          },
          {
            target: "open",
            actions: ["highlightFirstItem", "invokeOnOpen"]
          }
        ],
        ARROW_UP: [
          {
            guard: "isOpenControlled",
            actions: ["invokeOnOpen"]
          },
          {
            target: "open",
            actions: ["highlightLastItem", "invokeOnOpen"]
          }
        ]
      }
    },
    open: {
      tags: ["open"],
      effects: ["trackInteractOutside", "trackPositioning", "scrollToHighlightedItem"],
      entry: ["focusMenu", "resumePointer"],
      on: {
        "CONTROLLED.CLOSE": [
          {
            target: "closed",
            guard: "isArrowLeftEvent",
            actions: ["focusParentMenu"]
          },
          {
            target: "closed"
          }
        ],
        TRIGGER_CLICK: [
          {
            guard: wt(R("isTriggerItem"), "isOpenControlled"),
            actions: ["invokeOnClose"]
          },
          {
            guard: R("isTriggerItem"),
            target: "closed",
            actions: ["invokeOnClose"]
          }
        ],
        CONTEXT_MENU: {
          actions: ["setAnchorPoint", "focusMenu"]
        },
        ARROW_UP: {
          actions: ["highlightPrevItem", "focusMenu"]
        },
        ARROW_DOWN: {
          actions: ["highlightNextItem", "focusMenu"]
        },
        ARROW_LEFT: [
          {
            guard: wt("isSubmenu", "isOpenControlled"),
            actions: ["invokeOnClose"]
          },
          {
            guard: "isSubmenu",
            target: "closed",
            actions: ["focusParentMenu", "invokeOnClose"]
          }
        ],
        HOME: {
          actions: ["highlightFirstItem", "focusMenu"]
        },
        END: {
          actions: ["highlightLastItem", "focusMenu"]
        },
        ARROW_RIGHT: {
          guard: "isTriggerItemHighlighted",
          actions: ["openSubmenu"]
        },
        ENTER: [
          {
            guard: "isTriggerItemHighlighted",
            actions: ["openSubmenu"]
          },
          {
            actions: ["clickHighlightedItem"]
          }
        ],
        ITEM_POINTERMOVE: [
          {
            guard: R("isPointerSuspended"),
            actions: ["setHighlightedItem", "focusMenu"]
          },
          {
            actions: ["setLastHighlightedItem"]
          }
        ],
        ITEM_POINTERLEAVE: {
          guard: wt(R("isPointerSuspended"), R("isTriggerItem")),
          actions: ["clearHighlightedItem"]
        },
        ITEM_CLICK: [
          // == grouped ==
          {
            guard: wt(
              R("isTriggerItemHighlighted"),
              R("isHighlightedItemEditable"),
              "closeOnSelect",
              "isOpenControlled"
            ),
            actions: ["invokeOnSelect", "setOptionState", "closeRootMenu", "invokeOnClose"]
          },
          {
            guard: wt(R("isTriggerItemHighlighted"), R("isHighlightedItemEditable"), "closeOnSelect"),
            target: "closed",
            actions: ["invokeOnSelect", "setOptionState", "closeRootMenu", "invokeOnClose"]
          },
          //
          {
            guard: wt(R("isTriggerItemHighlighted"), R("isHighlightedItemEditable")),
            actions: ["invokeOnSelect", "setOptionState"]
          },
          { actions: ["setHighlightedItem"] }
        ],
        TRIGGER_POINTERMOVE: {
          guard: "isTriggerItem",
          actions: ["setIntentPolygon"]
        },
        TRIGGER_POINTERLEAVE: {
          target: "closing"
        },
        ITEM_POINTERDOWN: {
          actions: ["setHighlightedItem"]
        },
        TYPEAHEAD: {
          actions: ["highlightMatchedItem"]
        },
        FOCUS_MENU: {
          actions: ["focusMenu"]
        },
        "POSITIONING.SET": {
          actions: ["reposition"]
        }
      }
    }
  },
  implementations: {
    guards: {
      closeOnSelect: ({ prop: t, event: e }) => !!(e?.closeOnSelect ?? t("closeOnSelect")),
      // whether the trigger is also a menu item
      isTriggerItem: ({ event: t }) => Na(t.target),
      // whether the trigger item is the active item
      isTriggerItemHighlighted: ({ event: t, scope: e, computed: n }) => !!(t.target ?? e.getById(n("highlightedId")))?.hasAttribute("data-controls"),
      isSubmenu: ({ context: t }) => t.get("isSubmenu"),
      isPointerSuspended: ({ context: t }) => t.get("suspendPointer"),
      isHighlightedItemEditable: ({ scope: t, computed: e }) => lr(t.getById(e("highlightedId"))),
      // guard assertions (for controlled mode)
      isOpenControlled: ({ prop: t }) => t("open") !== void 0,
      isArrowLeftEvent: ({ event: t }) => t.previousEvent?.type === "ARROW_LEFT",
      isArrowUpEvent: ({ event: t }) => t.previousEvent?.type === "ARROW_UP",
      isArrowDownEvent: ({ event: t }) => t.previousEvent?.type === "ARROW_DOWN",
      isOpenAutoFocusEvent: ({ event: t }) => t.previousEvent?.type === "OPEN_AUTOFOCUS"
    },
    effects: {
      waitForOpenDelay({ send: t }) {
        const e = setTimeout(() => {
          t({ type: "DELAY.OPEN" });
        }, 100);
        return () => clearTimeout(e);
      },
      waitForCloseDelay({ send: t }) {
        const e = setTimeout(() => {
          t({ type: "DELAY.CLOSE" });
        }, 300);
        return () => clearTimeout(e);
      },
      waitForLongPress({ send: t }) {
        const e = setTimeout(() => {
          t({ type: "LONG_PRESS.OPEN" });
        }, 700);
        return () => clearTimeout(e);
      },
      trackPositioning({ context: t, prop: e, scope: n, refs: r }) {
        if (ke(n)) return;
        const o = {
          ...e("positioning"),
          ...r.get("positioningOverride")
        };
        t.set("currentPlacement", o.placement);
        const i = () => zn(n);
        return Mn(ne(n), i, {
          ...o,
          defer: !0,
          onComplete(s) {
            t.set("currentPlacement", s.placement);
          }
        });
      },
      trackInteractOutside({ refs: t, scope: e, prop: n, context: r, send: o }) {
        const i = () => rt(e);
        let s = !0;
        return Nr(i, {
          type: "menu",
          defer: !0,
          exclude: [ne(e)],
          onInteractOutside: n("onInteractOutside"),
          onRequestDismiss: n("onRequestDismiss"),
          onFocusOutside(a) {
            n("onFocusOutside")?.(a);
            const l = j(a.detail.originalEvent);
            if (pt(ke(e), l)) {
              a.preventDefault();
              return;
            }
          },
          onEscapeKeyDown(a) {
            n("onEscapeKeyDown")?.(a), r.get("isSubmenu") && a.preventDefault(), Gn({ parent: t.get("parent") });
          },
          onPointerDownOutside(a) {
            n("onPointerDownOutside")?.(a);
            const l = j(a.detail.originalEvent);
            if (pt(ke(e), l) && a.detail.contextmenu) {
              a.preventDefault();
              return;
            }
            s = !a.detail.focusable;
          },
          onDismiss() {
            o({ type: "CLOSE", src: "interact-outside", restoreFocus: s });
          }
        });
      },
      trackPointerMove({ context: t, scope: e, send: n, refs: r, flush: o }) {
        const i = r.get("parent");
        o(() => {
          i.context.set("suspendPointer", !0);
        });
        const s = e.getDoc();
        return B(s, "pointermove", (a) => {
          Ma(t.get("intentPolygon"), {
            x: a.clientX,
            y: a.clientY
          }) || (n({ type: "POINTER_MOVED_AWAY_FROM_SUBMENU" }), i.context.set("suspendPointer", !1));
        });
      },
      scrollToHighlightedItem({ event: t, scope: e, computed: n }) {
        const r = () => {
          if (t.current().type.startsWith("ITEM_POINTER")) return;
          const i = e.getById(n("highlightedId")), s = rt(e);
          Si(i, { rootEl: s, block: "nearest" });
        };
        return _(() => r()), Ci(() => rt(e), {
          attributes: ["aria-activedescendant"],
          callback: r
        });
      }
    },
    actions: {
      setAnchorPoint({ context: t, event: e }) {
        t.set("anchorPoint", (n) => Ue(n, e.point) ? n : e.point);
      },
      setSubmenuPlacement({ context: t, computed: e, refs: n }) {
        if (!t.get("isSubmenu")) return;
        const r = e("isRtl") ? "left-start" : "right-start";
        n.set("positioningOverride", { placement: r, gutter: 0 });
      },
      reposition({ context: t, scope: e, prop: n, event: r, refs: o }) {
        const i = () => zn(e), s = t.get("anchorPoint"), a = s ? () => ({ width: 0, height: 0, ...s }) : void 0, l = {
          ...n("positioning"),
          ...o.get("positioningOverride")
        };
        Mn(ne(e), i, {
          ...l,
          defer: !0,
          getAnchorRect: a,
          ...r.options ?? {},
          listeners: !1,
          onComplete(c) {
            t.set("currentPlacement", c.placement);
          }
        });
      },
      setOptionState({ event: t }) {
        if (!t.option) return;
        const { checked: e, onCheckedChange: n, type: r } = t.option;
        r === "radio" ? n?.(!0) : r === "checkbox" && n?.(!e);
      },
      clickHighlightedItem({ scope: t, computed: e, prop: n, context: r }) {
        const o = t.getById(e("highlightedId"));
        if (!o || o.dataset.disabled) return;
        const i = r.get("highlightedValue");
        Xo(o) ? n("navigate")?.({ value: i, node: o, href: o.href }) : queueMicrotask(() => o.click());
      },
      setIntentPolygon({ context: t, scope: e, event: n }) {
        const r = rt(e), o = t.get("currentPlacement");
        if (!r || !o) return;
        const i = r.getBoundingClientRect(), s = xa(i, o);
        if (!s) return;
        const l = Xs(o) === "right" ? -5 : 5;
        t.set("intentPolygon", [{ ...n.point, x: n.point.x + l }, ...s]);
      },
      clearIntentPolygon({ context: t }) {
        t.set("intentPolygon", null);
      },
      clearAnchorPoint({ context: t }) {
        t.set("anchorPoint", null);
      },
      resumePointer({ refs: t, flush: e }) {
        const n = t.get("parent");
        n && e(() => {
          n.context.set("suspendPointer", !1);
        });
      },
      setHighlightedItem({ context: t, event: e }) {
        const n = e.value || ut(e.target);
        t.set("highlightedValue", n);
      },
      clearHighlightedItem({ context: t }) {
        t.set("highlightedValue", null);
      },
      focusMenu({ scope: t }) {
        _(() => {
          const e = rt(t);
          wi({
            root: e,
            enabled: !pt(e, t.getActiveElement()),
            filter(r) {
              return !r.role?.startsWith("menuitem");
            }
          })?.focus({ preventScroll: !0 });
        });
      },
      highlightFirstItem({ context: t, scope: e }) {
        (rt(e) ? queueMicrotask : _)(() => {
          const r = Pa(e);
          r && t.set("highlightedValue", ut(r));
        });
      },
      highlightLastItem({ context: t, scope: e }) {
        (rt(e) ? queueMicrotask : _)(() => {
          const r = $a(e);
          r && t.set("highlightedValue", ut(r));
        });
      },
      highlightNextItem({ context: t, scope: e, event: n, prop: r }) {
        const o = Sa(e, {
          loop: n.loop,
          value: t.get("highlightedValue"),
          loopFocus: r("loopFocus")
        });
        t.set("highlightedValue", ut(o));
      },
      highlightPrevItem({ context: t, scope: e, event: n, prop: r }) {
        const o = Ta(e, {
          loop: n.loop,
          value: t.get("highlightedValue"),
          loopFocus: r("loopFocus")
        });
        t.set("highlightedValue", ut(o));
      },
      invokeOnSelect({ context: t, prop: e, scope: n }) {
        const r = t.get("highlightedValue");
        if (r == null) return;
        const o = ka(n, r);
        Ra(o, r), e("onSelect")?.({ value: r });
      },
      focusTrigger({ scope: t, context: e, event: n }) {
        e.get("isSubmenu") || e.get("anchorPoint") || n.restoreFocus === !1 || queueMicrotask(() => ne(t)?.focus({ preventScroll: !0 }));
      },
      highlightMatchedItem({ scope: t, context: e, event: n, refs: r }) {
        const o = _a(t, {
          key: n.key,
          value: e.get("highlightedValue"),
          typeaheadState: r.get("typeaheadState")
        });
        o && e.set("highlightedValue", ut(o));
      },
      setParentMenu({ refs: t, event: e, context: n }) {
        t.set("parent", e.value), n.set("isSubmenu", !0);
      },
      setChildMenu({ refs: t, event: e }) {
        const n = t.get("children");
        n[e.id] = e.value, t.set("children", n);
      },
      closeRootMenu({ refs: t }) {
        Gn({ parent: t.get("parent") });
      },
      openSubmenu({ refs: t, scope: e, computed: n }) {
        const o = e.getById(n("highlightedId"))?.getAttribute("data-uid"), i = t.get("children");
        (o ? i[o] : null)?.send({ type: "OPEN_AUTOFOCUS" });
      },
      focusParentMenu({ refs: t }) {
        t.get("parent")?.send({ type: "FOCUS_MENU" });
      },
      setLastHighlightedItem({ context: t, event: e }) {
        t.set("lastHighlightedValue", ut(e.target));
      },
      restoreHighlightedItem({ context: t }) {
        t.get("lastHighlightedValue") && (t.set("highlightedValue", t.get("lastHighlightedValue")), t.set("lastHighlightedValue", null));
      },
      restoreParentHighlightedItem({ refs: t }) {
        t.get("parent")?.send({ type: "HIGHLIGHTED.RESTORE" });
      },
      invokeOnOpen({ prop: t }) {
        t("onOpenChange")?.({ open: !0 });
      },
      invokeOnClose({ prop: t }) {
        t("onOpenChange")?.({ open: !1 });
      },
      toggleVisibility({ prop: t, event: e, send: n }) {
        n({
          type: t("open") ? "CONTROLLED.OPEN" : "CONTROLLED.CLOSE",
          previousEvent: e
        });
      }
    }
  }
};
function Gn(t) {
  let e = t.parent;
  for (; e && e.context.get("isSubmenu"); )
    e = e.refs.get("parent");
  e?.send({ type: "CLOSE" });
}
function Ma(t, e) {
  return t ? Oa(t, e) : !1;
}
function Fa(t, e, n) {
  const r = Object.keys(t).length > 0;
  if (!e) return null;
  if (!r)
    return Le(n, e);
  for (const o in t) {
    const i = t[o], s = Ir(i.scope);
    if (s === e)
      return s;
  }
  return Le(n, e);
}
Lt()([
  "anchorPoint",
  "aria-label",
  "closeOnSelect",
  "composite",
  "defaultHighlightedValue",
  "defaultOpen",
  "dir",
  "getRootNode",
  "highlightedValue",
  "id",
  "ids",
  "loopFocus",
  "navigate",
  "onEscapeKeyDown",
  "onFocusOutside",
  "onHighlightChange",
  "onInteractOutside",
  "onOpenChange",
  "onPointerDownOutside",
  "onRequestDismiss",
  "onSelect",
  "open",
  "positioning",
  "typeahead"
]);
Lt()(["closeOnSelect", "disabled", "value", "valueText"]);
Lt()(["htmlFor"]);
Lt()(["id"]);
Lt()([
  "checked",
  "closeOnSelect",
  "disabled",
  "onCheckedChange",
  "type",
  "value",
  "valueText"
]);
class on extends Gt {
  /**
   * プロパティ変更時にサービスのコンテキストを更新
   *
   * サブクラスで必要に応じてオーバーライド
   */
  updateContext(e) {
  }
  connectedCallback() {
    super.connectedCallback(), this.service = this.createService(), this.api = this.connectApi(this.service);
  }
  updated(e) {
    super.updated(e), this.updateContext(e), this.api = this.connectApi(this.service);
  }
  /**
   * render()内で呼び出してAPIを更新
   */
  updateApi() {
    this.api = this.connectApi(this.service);
  }
}
class Ba {
  constructor(e) {
    this.map = /* @__PURE__ */ new Map(), e && Object.entries(e).forEach(([n, r]) => {
      this.map.set(n, r);
    });
  }
  get(e) {
    const n = this.map.get(e);
    return n !== void 0 ? n : void 0;
  }
  set(e, n) {
    this.map.set(e, n);
  }
}
function sn(t, e = {}) {
  return {
    context: new Ba(e.context),
    send: (r) => {
    }
  };
}
var Ha = Object.defineProperty, Va = Object.getOwnPropertyDescriptor, Ua = Object.getPrototypeOf, ja = Reflect.get, te = (t, e, n, r) => {
  for (var o = r > 1 ? void 0 : r ? Va(e, n) : e, i = t.length - 1, s; i >= 0; i--)
    (s = t[i]) && (o = (r ? s(e, n, o) : s(o)) || o);
  return r && o && Ha(e, n, o), o;
}, Wa = (t, e, n) => ja(Ua(t), n, e);
let Z = class extends on {
  constructor() {
    super(...arguments), this.options = [], this.selected = "", this.placeholder = "Select an option", this.disabled = !1, this.handleClickOutside = (t) => {
      this.contains(t.target) || (this.service.context.set("open", !1), this.requestUpdate());
    };
  }
  connectedCallback() {
    super.connectedCallback(), document.addEventListener("click", this.handleClickOutside);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), document.removeEventListener("click", this.handleClickOutside);
  }
  createService() {
    const t = sn(Da, {
      context: {
        id: this.id || "dropdown",
        open: !1,
        onOpenChange: (e) => {
          t.context.set("open", e), this.requestUpdate();
        },
        getRootNode: () => this.getRootNode()
      }
    });
    return t;
  }
  connectApi(t) {
    const e = () => {
      const o = t.context.get("open");
      return typeof o == "boolean" ? o : !1;
    }, n = () => t.context.get("onOpenChange"), r = () => {
      const o = t.context.get("id");
      return typeof o == "string" ? o : "dropdown";
    };
    return {
      get open() {
        return e();
      },
      getTriggerProps: () => ({
        type: "button",
        "aria-haspopup": "menu",
        "aria-expanded": e(),
        "aria-controls": `${r()}-menu`,
        onClick: () => {
          if (!this.disabled) {
            const o = e(), i = n();
            i && i(!o);
          }
        }
      }),
      getContentProps: () => ({
        id: `${r()}-menu`,
        role: "menu",
        hidden: !e()
      }),
      getItemProps: (o) => ({
        role: "menuitem",
        onClick: () => {
          if (!this.disabled) {
            this.selected = o.value;
            const i = n();
            i && i(!1), this.dispatchEvent(new CustomEvent("change", {
              detail: { value: o.value, option: o },
              bubbles: !0,
              composed: !0
            }));
          }
        }
      })
    };
  }
  updateContext(t) {
    t.has("disabled") && this.service.context.set("disabled", this.disabled);
  }
  getSelectedLabel() {
    const t = this.options.find((e) => e.value === this.selected);
    return t ? t.label : this.placeholder;
  }
  render() {
    this.updateApi();
    const t = this.getSelectedLabel(), e = !this.options.find((o) => o.value === this.selected), n = this.api.getTriggerProps(), r = this.api.getContentProps();
    return Pt`
      <div class="relative inline-block w-full min-w-[200px]">
        <button
          type="${n.type}"
          aria-haspopup="${n["aria-haspopup"]}"
          aria-expanded="${n["aria-expanded"]}"
          aria-controls="${n["aria-controls"]}"
          @click="${n.onClick}"
          ?disabled="${this.disabled}"
          class="
            w-full px-4 py-2 text-left
            bg-white border-2 border-gray-300 rounded-lg
            hover:border-blue-400 focus:border-blue-500 focus:outline-none
            transition-colors duration-200
            ${this.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
          "
        >
          <div class="flex justify-between items-center">
            <span class="${e ? "text-gray-400" : "text-gray-900"}">
              ${t}
            </span>
            <svg
              class="w-5 h-5 transition-transform duration-200 ${this.api.open ? "rotate-180" : ""}"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>

        <div
          id="${r.id}"
          role="${r.role}"
          ?hidden="${r.hidden}"
          class="
            absolute z-10 w-full mt-1
            bg-white border-2 border-gray-300 rounded-lg shadow-lg
            max-h-60 overflow-y-auto
          "
        >
          ${this.options.map((o) => {
      const i = this.api.getItemProps(o);
      return Pt`
              <div
                role="${i.role}"
                @click="${i.onClick}"
                class="
                  px-4 py-2 cursor-pointer
                  hover:bg-blue-50
                  ${o.value === this.selected ? "bg-blue-100 text-blue-900 font-semibold" : "text-gray-900"}
                  transition-colors duration-150
                "
              >
                ${o.label}
              </div>
            `;
    })}
        </div>
      </div>
    `;
  }
};
Z.styles = [
  ...Wa(Z, Z, "styles"),
  Nt`
      :host {
        display: inline-block;
        position: relative;
      }
    `
];
te([
  D({ type: Array })
], Z.prototype, "options", 2);
te([
  D({ type: String })
], Z.prototype, "selected", 2);
te([
  D({ type: String })
], Z.prototype, "placeholder", 2);
te([
  D({ type: Boolean })
], Z.prototype, "disabled", 2);
Z = te([
  Xt("lit-tailwind-dropdown")
], Z);
var xt = /* @__PURE__ */ new WeakMap(), re = /* @__PURE__ */ new WeakMap(), oe = {}, Pe = 0, Lr = (t) => t && (t.host || Lr(t.parentNode)), za = (t, e) => e.map((n) => {
  if (t.contains(n)) return n;
  const r = Lr(n);
  return r && t.contains(r) ? r : (console.error("[zag-js > ariaHidden] target", n, "in not contained inside", t, ". Doing nothing"), null);
}).filter((n) => !!n), Ga = /* @__PURE__ */ new Set(["script", "output", "status", "next-route-announcer"]), qa = (t) => Ga.has(t.localName) || t.role === "status" || t.hasAttribute("aria-live") ? !0 : t.matches("[data-live-announcer]"), Ka = (t, e) => {
  const { parentNode: n, markerName: r, controlAttribute: o, followControlledElements: i = !0 } = e, s = za(n, Array.isArray(t) ? t : [t]);
  oe[r] || (oe[r] = /* @__PURE__ */ new WeakMap());
  const a = oe[r], l = [], c = /* @__PURE__ */ new Set(), d = new Set(s), h = (u) => {
    !u || c.has(u) || (c.add(u), h(u.parentNode));
  };
  s.forEach((u) => {
    h(u), i && k(u) && ur(u, (p) => {
      h(p);
    });
  });
  const f = (u) => {
    !u || d.has(u) || Array.prototype.forEach.call(u.children, (p) => {
      if (c.has(p))
        f(p);
      else
        try {
          if (qa(p)) return;
          const m = p.getAttribute(o) === "true", b = (xt.get(p) || 0) + 1, y = (a.get(p) || 0) + 1;
          xt.set(p, b), a.set(p, y), l.push(p), b === 1 && m && re.set(p, !0), y === 1 && p.setAttribute(r, ""), m || p.setAttribute(o, "true");
        } catch (g) {
          console.error("[zag-js > ariaHidden] cannot operate on ", p, g);
        }
    });
  };
  return f(n), c.clear(), Pe++, () => {
    l.forEach((u) => {
      const p = xt.get(u) - 1, g = a.get(u) - 1;
      xt.set(u, p), a.set(u, g), p || (re.has(u) || u.removeAttribute(o), re.delete(u)), g || u.removeAttribute(r);
    }), Pe--, Pe || (xt = /* @__PURE__ */ new WeakMap(), xt = /* @__PURE__ */ new WeakMap(), re = /* @__PURE__ */ new WeakMap(), oe = {});
  };
}, Ya = (t) => (Array.isArray(t) ? t[0] : t).ownerDocument.body, Xa = (t, e = Ya(t), n = "data-aria-hidden", r = !0) => {
  if (e)
    return Ka(t, {
      parentNode: e,
      markerName: n,
      controlAttribute: "aria-hidden",
      followControlledElements: r
    });
}, Za = (t) => {
  const e = requestAnimationFrame(() => t());
  return () => cancelAnimationFrame(e);
};
function Ja(t, e = {}) {
  const { defer: n = !0 } = e, r = n ? Za : (i) => i(), o = [];
  return o.push(
    r(() => {
      const s = (typeof t == "function" ? t() : t).filter(Boolean);
      s.length !== 0 && o.push(Xa(s));
    })
  ), () => {
    o.forEach((i) => i?.());
  };
}
var Qa = Object.defineProperty, tl = (t, e, n) => e in t ? Qa(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, C = (t, e, n) => tl(t, typeof e != "symbol" ? e + "" : e, n), qn = {
  activateTrap(t, e) {
    if (t.length > 0) {
      const r = t[t.length - 1];
      r !== e && r.pause();
    }
    const n = t.indexOf(e);
    n === -1 || t.splice(n, 1), t.push(e);
  },
  deactivateTrap(t, e) {
    const n = t.indexOf(e);
    n !== -1 && t.splice(n, 1), t.length > 0 && t[t.length - 1].unpause();
  }
}, el = [], nl = class {
  constructor(t, e) {
    C(this, "trapStack"), C(this, "config"), C(this, "doc"), C(this, "state", {
      containers: [],
      containerGroups: [],
      tabbableGroups: [],
      nodeFocusedBeforeActivation: null,
      mostRecentlyFocusedNode: null,
      active: !1,
      paused: !1,
      delayInitialFocusTimer: void 0,
      recentNavEvent: void 0
    }), C(this, "portalContainers", /* @__PURE__ */ new Set()), C(this, "listenerCleanups", []), C(this, "handleFocus", (r) => {
      const o = j(r), i = this.findContainerIndex(o, r) >= 0;
      if (i || ge(o))
        i && (this.state.mostRecentlyFocusedNode = o);
      else {
        r.stopImmediatePropagation();
        let s, a = !0;
        if (this.state.mostRecentlyFocusedNode)
          if (Mt(this.state.mostRecentlyFocusedNode) > 0) {
            const l = this.findContainerIndex(this.state.mostRecentlyFocusedNode), { tabbableNodes: c } = this.state.containerGroups[l];
            if (c.length > 0) {
              const d = c.findIndex((h) => h === this.state.mostRecentlyFocusedNode);
              d >= 0 && (this.config.isKeyForward(this.state.recentNavEvent) ? d + 1 < c.length && (s = c[d + 1], a = !1) : d - 1 >= 0 && (s = c[d - 1], a = !1));
            }
          } else
            this.state.containerGroups.some((l) => l.tabbableNodes.some((c) => Mt(c) > 0)) || (a = !1);
        else
          a = !1;
        a && (s = this.findNextNavNode({
          // move FROM the MRU node, not event-related node (which will be the node that is
          //  outside the trap causing the focus escape we're trying to fix)
          target: this.state.mostRecentlyFocusedNode,
          isBackward: this.config.isKeyBackward(this.state.recentNavEvent)
        })), s ? this.tryFocus(s) : this.tryFocus(this.state.mostRecentlyFocusedNode || this.getInitialFocusNode());
      }
      this.state.recentNavEvent = void 0;
    }), C(this, "handlePointerDown", (r) => {
      const o = j(r);
      if (!(this.findContainerIndex(o, r) >= 0)) {
        if (Ft(this.config.clickOutsideDeactivates, r)) {
          this.deactivate({ returnFocus: this.config.returnFocusOnDeactivate });
          return;
        }
        Ft(this.config.allowOutsideClick, r) || r.preventDefault();
      }
    }), C(this, "handleClick", (r) => {
      const o = j(r);
      this.findContainerIndex(o, r) >= 0 || Ft(this.config.clickOutsideDeactivates, r) || Ft(this.config.allowOutsideClick, r) || (r.preventDefault(), r.stopImmediatePropagation());
    }), C(this, "handleTabKey", (r) => {
      if (this.config.isKeyForward(r) || this.config.isKeyBackward(r)) {
        this.state.recentNavEvent = r;
        const o = this.config.isKeyBackward(r), i = this.findNextNavNode({ event: r, isBackward: o });
        if (!i) return;
        $e(r) && r.preventDefault(), this.tryFocus(i);
      }
    }), C(this, "handleEscapeKey", (r) => {
      il(r) && Ft(this.config.escapeDeactivates, r) !== !1 && (r.preventDefault(), this.deactivate());
    }), C(this, "_mutationObserver"), C(this, "setupMutationObserver", () => {
      const r = this.doc.defaultView || window;
      this._mutationObserver = new r.MutationObserver((o) => {
        o.some((a) => Array.from(a.removedNodes).some((c) => c === this.state.mostRecentlyFocusedNode)) && this.tryFocus(this.getInitialFocusNode()), o.some((a) => a.type === "attributes" && (a.attributeName === "aria-controls" || a.attributeName === "aria-expanded") ? !0 : a.type === "childList" && a.addedNodes.length > 0 ? Array.from(a.addedNodes).some((l) => {
          if (l.nodeType !== Node.ELEMENT_NODE) return !1;
          const c = l;
          return ii(c) ? !0 : c.id && !this.state.containers.some((d) => d.contains(c)) ? si(c) : !1;
        }) : !1) && this.state.active && !this.state.paused && (this.updateTabbableNodes(), this.updatePortalContainers());
      });
    }), C(this, "updateObservedNodes", () => {
      this._mutationObserver?.disconnect(), this.state.active && !this.state.paused && (this.state.containers.map((r) => {
        this._mutationObserver?.observe(r, {
          subtree: !0,
          childList: !0,
          attributes: !0,
          attributeFilter: ["aria-controls", "aria-expanded"]
        });
      }), this.portalContainers.forEach((r) => {
        this.observePortalContainer(r);
      }));
    }), C(this, "getInitialFocusNode", () => {
      let r = this.getNodeForOption("initialFocus", { hasFallback: !0 });
      if (r === !1)
        return !1;
      if (r === void 0 || r && !X(r)) {
        const o = Ee(this.doc);
        if (o && this.findContainerIndex(o) >= 0)
          r = o;
        else {
          const i = this.state.tabbableGroups[0];
          r = i && i.firstTabbableNode || this.getNodeForOption("fallbackFocus");
        }
      } else r === null && (r = this.getNodeForOption("fallbackFocus"));
      if (!r)
        throw new Error("Your focus-trap needs to have at least one focusable element");
      return r.isConnected || (r = this.getNodeForOption("fallbackFocus")), r;
    }), C(this, "tryFocus", (r) => {
      if (r !== !1 && r !== Ee(this.doc)) {
        if (!r || !r.focus) {
          this.tryFocus(this.getInitialFocusNode());
          return;
        }
        r.focus({ preventScroll: !!this.config.preventScroll }), this.state.mostRecentlyFocusedNode = r, sl(r) && r.select();
      }
    }), C(this, "deactivate", (r) => {
      if (!this.state.active) return this;
      const o = {
        onDeactivate: this.config.onDeactivate,
        onPostDeactivate: this.config.onPostDeactivate,
        checkCanReturnFocus: this.config.checkCanReturnFocus,
        ...r
      };
      clearTimeout(this.state.delayInitialFocusTimer), this.state.delayInitialFocusTimer = void 0, this.removeListeners(), this.state.active = !1, this.state.paused = !1, this.updateObservedNodes(), qn.deactivateTrap(this.trapStack, this), this.portalContainers.clear();
      const i = this.getOption(o, "onDeactivate"), s = this.getOption(o, "onPostDeactivate"), a = this.getOption(o, "checkCanReturnFocus"), l = this.getOption(o, "returnFocus", "returnFocusOnDeactivate");
      i?.();
      const c = () => {
        Kn(() => {
          if (l) {
            const d = this.getReturnFocusNode(this.state.nodeFocusedBeforeActivation);
            this.tryFocus(d);
          }
          s?.();
        });
      };
      if (l && a) {
        const d = this.getReturnFocusNode(this.state.nodeFocusedBeforeActivation);
        return a(d).then(c, c), this;
      }
      return c(), this;
    }), C(this, "pause", (r) => {
      if (this.state.paused || !this.state.active)
        return this;
      const o = this.getOption(r, "onPause"), i = this.getOption(r, "onPostPause");
      return this.state.paused = !0, o?.(), this.removeListeners(), this.updateObservedNodes(), i?.(), this;
    }), C(this, "unpause", (r) => {
      if (!this.state.paused || !this.state.active)
        return this;
      const o = this.getOption(r, "onUnpause"), i = this.getOption(r, "onPostUnpause");
      return this.state.paused = !1, o?.(), this.updateTabbableNodes(), this.addListeners(), this.updateObservedNodes(), i?.(), this;
    }), C(this, "updateContainerElements", (r) => (this.state.containers = Array.isArray(r) ? r.filter(Boolean) : [r].filter(Boolean), this.state.active && this.updateTabbableNodes(), this.updateObservedNodes(), this)), C(this, "getReturnFocusNode", (r) => {
      const o = this.getNodeForOption("setReturnFocus", {
        params: [r]
      });
      return o || (o === !1 ? !1 : r);
    }), C(this, "getOption", (r, o, i) => r && r[o] !== void 0 ? r[o] : (
      // @ts-expect-error
      this.config[i || o]
    )), C(this, "getNodeForOption", (r, { hasFallback: o = !1, params: i = [] } = {}) => {
      let s = this.config[r];
      if (typeof s == "function" && (s = s(...i)), s === !0 && (s = void 0), !s) {
        if (s === void 0 || s === !1)
          return s;
        throw new Error(`\`${r}\` was specified but was not a node, or did not return a node`);
      }
      let a = s;
      if (typeof s == "string") {
        try {
          a = this.doc.querySelector(s);
        } catch (l) {
          throw new Error(`\`${r}\` appears to be an invalid selector; error="${l.message}"`);
        }
        if (!a && !o)
          throw new Error(`\`${r}\` as selector refers to no known node`);
      }
      return a;
    }), C(this, "findNextNavNode", (r) => {
      const { event: o, isBackward: i = !1 } = r, s = r.target || j(o);
      this.updateTabbableNodes();
      let a = null;
      if (this.state.tabbableGroups.length > 0) {
        const l = this.findContainerIndex(s, o), c = l >= 0 ? this.state.containerGroups[l] : void 0;
        if (l < 0)
          i ? a = this.state.tabbableGroups[this.state.tabbableGroups.length - 1].lastTabbableNode : a = this.state.tabbableGroups[0].firstTabbableNode;
        else if (i) {
          let d = this.state.tabbableGroups.findIndex(
            ({ firstTabbableNode: h }) => s === h
          );
          if (d < 0 && (c?.container === s || X(s) && !ft(s) && !c?.nextTabbableNode(s, !1)) && (d = l), d >= 0) {
            const h = d === 0 ? this.state.tabbableGroups.length - 1 : d - 1, f = this.state.tabbableGroups[h];
            a = Mt(s) >= 0 ? f.lastTabbableNode : f.lastDomTabbableNode;
          } else $e(o) || (a = c?.nextTabbableNode(s, !1));
        } else {
          let d = this.state.tabbableGroups.findIndex(
            ({ lastTabbableNode: h }) => s === h
          );
          if (d < 0 && (c?.container === s || X(s) && !ft(s) && !c?.nextTabbableNode(s)) && (d = l), d >= 0) {
            const h = d === this.state.tabbableGroups.length - 1 ? 0 : d + 1, f = this.state.tabbableGroups[h];
            a = Mt(s) >= 0 ? f.firstTabbableNode : f.firstDomTabbableNode;
          } else $e(o) || (a = c?.nextTabbableNode(s));
        }
      } else
        a = this.getNodeForOption("fallbackFocus");
      return a;
    }), this.trapStack = e.trapStack || el;
    const n = {
      returnFocusOnDeactivate: !0,
      escapeDeactivates: !0,
      delayInitialFocus: !0,
      followControlledElements: !0,
      isKeyForward: rl,
      isKeyBackward: ol,
      ...e
    };
    this.doc = n.document || at(Array.isArray(t) ? t[0] : t), this.config = n, this.updateContainerElements(t), this.setupMutationObserver();
  }
  addPortalContainer(t) {
    const e = t.parentElement;
    e && !this.portalContainers.has(e) && (this.portalContainers.add(e), this.state.active && !this.state.paused && this.observePortalContainer(e));
  }
  observePortalContainer(t) {
    this._mutationObserver?.observe(t, {
      subtree: !0,
      childList: !0,
      attributes: !0,
      attributeFilter: ["aria-controls", "aria-expanded"]
    });
  }
  updatePortalContainers() {
    this.config.followControlledElements && this.state.containers.forEach((t) => {
      ni(t).forEach((n) => {
        this.addPortalContainer(n);
      });
    });
  }
  get active() {
    return this.state.active;
  }
  get paused() {
    return this.state.paused;
  }
  findContainerIndex(t, e) {
    const n = typeof e?.composedPath == "function" ? e.composedPath() : void 0;
    return this.state.containerGroups.findIndex(
      ({ container: r, tabbableNodes: o }) => r.contains(t) || n?.includes(r) || o.find((i) => i === t) || this.isControlledElement(r, t)
    );
  }
  isControlledElement(t, e) {
    return this.config.followControlledElements ? dr(t, e) : !1;
  }
  updateTabbableNodes() {
    if (this.state.containerGroups = this.state.containers.map((t) => {
      const e = Ke(t, { getShadowRoot: this.config.getShadowRoot }), n = mr(t, { getShadowRoot: this.config.getShadowRoot }), r = e[0], o = e[e.length - 1], i = r, s = o;
      let a = !1;
      for (let c = 0; c < e.length; c++)
        if (Mt(e[c]) > 0) {
          a = !0;
          break;
        }
      function l(c, d = !0) {
        const h = e.indexOf(c);
        if (h >= 0)
          return e[h + (d ? 1 : -1)];
        const f = n.indexOf(c);
        if (!(f < 0)) {
          if (d) {
            for (let u = f + 1; u < n.length; u++)
              if (ft(n[u])) return n[u];
          } else
            for (let u = f - 1; u >= 0; u--)
              if (ft(n[u])) return n[u];
        }
      }
      return {
        container: t,
        tabbableNodes: e,
        focusableNodes: n,
        posTabIndexesFound: a,
        firstTabbableNode: r,
        lastTabbableNode: o,
        firstDomTabbableNode: i,
        lastDomTabbableNode: s,
        nextTabbableNode: l
      };
    }), this.state.tabbableGroups = this.state.containerGroups.filter((t) => t.tabbableNodes.length > 0), this.state.tabbableGroups.length <= 0 && !this.getNodeForOption("fallbackFocus"))
      throw new Error(
        "Your focus-trap must have at least one container with at least one tabbable node in it at all times"
      );
    if (this.state.containerGroups.find((t) => t.posTabIndexesFound) && this.state.containerGroups.length > 1)
      throw new Error(
        "At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps."
      );
  }
  addListeners() {
    if (this.state.active)
      return qn.activateTrap(this.trapStack, this), this.state.delayInitialFocusTimer = this.config.delayInitialFocus ? Kn(() => {
        this.tryFocus(this.getInitialFocusNode());
      }) : this.tryFocus(this.getInitialFocusNode()), this.listenerCleanups.push(
        B(this.doc, "focusin", this.handleFocus, !0),
        B(this.doc, "mousedown", this.handlePointerDown, { capture: !0, passive: !1 }),
        B(this.doc, "touchstart", this.handlePointerDown, { capture: !0, passive: !1 }),
        B(this.doc, "click", this.handleClick, { capture: !0, passive: !1 }),
        B(this.doc, "keydown", this.handleTabKey, { capture: !0, passive: !1 }),
        B(this.doc, "keydown", this.handleEscapeKey)
      ), this;
  }
  removeListeners() {
    if (this.state.active)
      return this.listenerCleanups.forEach((t) => t()), this.listenerCleanups = [], this;
  }
  activate(t) {
    if (this.state.active)
      return this;
    const e = this.getOption(t, "onActivate"), n = this.getOption(t, "onPostActivate"), r = this.getOption(t, "checkCanFocusTrap");
    r || this.updateTabbableNodes(), this.state.active = !0, this.state.paused = !1, this.state.nodeFocusedBeforeActivation = Ee(this.doc), e?.();
    const o = () => {
      r && this.updateTabbableNodes(), this.addListeners(), this.updateObservedNodes(), n?.();
    };
    return r ? (r(this.state.containers.concat()).then(o, o), this) : (o(), this);
  }
}, an = (t) => t.type === "keydown", $e = (t) => an(t) && t?.key === "Tab", rl = (t) => an(t) && t.key === "Tab" && !t?.shiftKey, ol = (t) => an(t) && t.key === "Tab" && t?.shiftKey, Ft = (t, ...e) => typeof t == "function" ? t(...e) : t, il = (t) => !t.isComposing && t.key === "Escape", Kn = (t) => setTimeout(t, 0), sl = (t) => t.localName === "input" && "select" in t && typeof t.select == "function";
function al(t, e = {}) {
  let n;
  const r = _(() => {
    const i = (Array.isArray(t) ? t : [t]).map((a) => typeof a == "function" ? a() : a).filter((a) => a != null);
    if (i.length === 0) return;
    const s = i[0];
    n = new nl(i, {
      escapeDeactivates: !1,
      allowOutsideClick: !0,
      preventScroll: !0,
      returnFocusOnDeactivate: !0,
      delayInitialFocus: !1,
      fallbackFocus: s,
      ...e,
      document: at(s)
    });
    try {
      n.activate();
    } catch {
    }
  });
  return function() {
    n?.deactivate(), r();
  };
}
var Se = "data-scroll-lock";
function ll(t) {
  const e = t.getBoundingClientRect().left;
  return Math.round(e) + t.scrollLeft ? "paddingLeft" : "paddingRight";
}
function Yn(t) {
  const n = We(t)?.scrollbarGutter;
  return n === "stable" || n?.startsWith("stable ") === !0;
}
function cl(t) {
  const e = t ?? document, n = e.defaultView ?? window, { documentElement: r, body: o } = e;
  if (o.hasAttribute(Se)) return;
  const s = Yn(r) || Yn(o), a = n.innerWidth - r.clientWidth;
  o.setAttribute(Se, "");
  const l = () => Mi(r, "--scrollbar-width", `${a}px`), c = ll(r), d = () => {
    const u = {
      overflow: "hidden"
    };
    return !s && a > 0 && (u[c] = `${a}px`), _e(o, u);
  }, h = () => {
    const { scrollX: u, scrollY: p, visualViewport: g } = n, m = g?.offsetLeft ?? 0, b = g?.offsetTop ?? 0, y = {
      position: "fixed",
      overflow: "hidden",
      top: `${-(p - Math.floor(b))}px`,
      left: `${-(u - Math.floor(m))}px`,
      right: "0"
    };
    !s && a > 0 && (y[c] = `${a}px`);
    const v = _e(o, y);
    return () => {
      v?.(), n.scrollTo({ left: u, top: p, behavior: "instant" });
    };
  }, f = [l(), hi() ? h() : d()];
  return () => {
    f.forEach((u) => u?.()), o.removeAttribute(Se);
  };
}
var dl = Ct("dialog").parts(
  "trigger",
  "backdrop",
  "positioner",
  "content",
  "title",
  "description",
  "closeTrigger"
);
dl.build();
var ul = (t) => t.ids?.positioner ?? `dialog:${t.id}:positioner`, hl = (t) => t.ids?.backdrop ?? `dialog:${t.id}:backdrop`, fl = (t) => t.ids?.content ?? `dialog:${t.id}:content`, pl = (t) => t.ids?.trigger ?? `dialog:${t.id}:trigger`, gl = (t) => t.ids?.title ?? `dialog:${t.id}:title`, ml = (t) => t.ids?.description ?? `dialog:${t.id}:description`, vl = (t) => t.ids?.closeTrigger ?? `dialog:${t.id}:close`, ie = (t) => t.getById(fl(t)), bl = (t) => t.getById(ul(t)), yl = (t) => t.getById(hl(t)), wl = (t) => t.getById(pl(t)), xl = (t) => t.getById(gl(t)), Ol = (t) => t.getById(ml(t)), El = (t) => t.getById(vl(t)), Cl = {
  props({ props: t, scope: e }) {
    const n = t.role === "alertdialog", r = n ? () => El(e) : void 0, o = typeof t.modal == "boolean" ? t.modal : !0;
    return {
      role: "dialog",
      modal: o,
      trapFocus: o,
      preventScroll: o,
      closeOnInteractOutside: !n,
      closeOnEscape: !0,
      restoreFocus: !0,
      initialFocusEl: r,
      ...t
    };
  },
  initialState({ prop: t }) {
    return t("open") || t("defaultOpen") ? "open" : "closed";
  },
  context({ bindable: t }) {
    return {
      rendered: t(() => ({
        defaultValue: { title: !0, description: !0 }
      }))
    };
  },
  watch({ track: t, action: e, prop: n }) {
    t([() => n("open")], () => {
      e(["toggleVisibility"]);
    });
  },
  states: {
    open: {
      entry: ["checkRenderedElements", "syncZIndex"],
      effects: ["trackDismissableElement", "trapFocus", "preventScroll", "hideContentBelow"],
      on: {
        "CONTROLLED.CLOSE": {
          target: "closed"
        },
        CLOSE: [
          {
            guard: "isOpenControlled",
            actions: ["invokeOnClose"]
          },
          {
            target: "closed",
            actions: ["invokeOnClose"]
          }
        ],
        TOGGLE: [
          {
            guard: "isOpenControlled",
            actions: ["invokeOnClose"]
          },
          {
            target: "closed",
            actions: ["invokeOnClose"]
          }
        ]
      }
    },
    closed: {
      on: {
        "CONTROLLED.OPEN": {
          target: "open"
        },
        OPEN: [
          {
            guard: "isOpenControlled",
            actions: ["invokeOnOpen"]
          },
          {
            target: "open",
            actions: ["invokeOnOpen"]
          }
        ],
        TOGGLE: [
          {
            guard: "isOpenControlled",
            actions: ["invokeOnOpen"]
          },
          {
            target: "open",
            actions: ["invokeOnOpen"]
          }
        ]
      }
    }
  },
  implementations: {
    guards: {
      isOpenControlled: ({ prop: t }) => t("open") != null
    },
    effects: {
      trackDismissableElement({ scope: t, send: e, prop: n }) {
        return Nr(() => ie(t), {
          type: "dialog",
          defer: !0,
          pointerBlocking: n("modal"),
          exclude: [wl(t)],
          onInteractOutside(o) {
            n("onInteractOutside")?.(o), n("closeOnInteractOutside") || o.preventDefault();
          },
          persistentElements: n("persistentElements"),
          onFocusOutside: n("onFocusOutside"),
          onPointerDownOutside: n("onPointerDownOutside"),
          onRequestDismiss: n("onRequestDismiss"),
          onEscapeKeyDown(o) {
            n("onEscapeKeyDown")?.(o), n("closeOnEscape") || o.preventDefault();
          },
          onDismiss() {
            e({ type: "CLOSE", src: "interact-outside" });
          }
        });
      },
      preventScroll({ scope: t, prop: e }) {
        if (e("preventScroll"))
          return cl(t.getDoc());
      },
      trapFocus({ scope: t, prop: e }) {
        return e("trapFocus") ? al(() => ie(t), {
          preventScroll: !0,
          returnFocusOnDeactivate: !!e("restoreFocus"),
          initialFocus: e("initialFocusEl"),
          setReturnFocus: (r) => e("finalFocusEl")?.() ?? r,
          getShadowRoot: !0
        }) : void 0;
      },
      hideContentBelow({ scope: t, prop: e }) {
        return e("modal") ? Ja(() => [ie(t)], { defer: !0 }) : void 0;
      }
    },
    actions: {
      checkRenderedElements({ context: t, scope: e }) {
        _(() => {
          t.set("rendered", {
            title: !!xl(e),
            description: !!Ol(e)
          });
        });
      },
      syncZIndex({ scope: t }) {
        _(() => {
          const e = ie(t);
          if (!e) return;
          const n = We(e);
          [bl(t), yl(t)].forEach((o) => {
            o?.style.setProperty("--z-index", n.zIndex), o?.style.setProperty("--layer-index", n.getPropertyValue("--layer-index"));
          });
        });
      },
      invokeOnClose({ prop: t }) {
        t("onOpenChange")?.({ open: !1 });
      },
      invokeOnOpen({ prop: t }) {
        t("onOpenChange")?.({ open: !0 });
      },
      toggleVisibility({ prop: t, send: e, event: n }) {
        e({
          type: t("open") ? "CONTROLLED.OPEN" : "CONTROLLED.CLOSE",
          previousEvent: n
        });
      }
    }
  }
};
Lt()([
  "aria-label",
  "closeOnEscape",
  "closeOnInteractOutside",
  "dir",
  "finalFocusEl",
  "getRootNode",
  "getRootNode",
  "id",
  "id",
  "ids",
  "initialFocusEl",
  "modal",
  "onEscapeKeyDown",
  "onFocusOutside",
  "onInteractOutside",
  "onOpenChange",
  "onPointerDownOutside",
  "onRequestDismiss",
  "defaultOpen",
  "open",
  "persistentElements",
  "preventScroll",
  "restoreFocus",
  "role",
  "trapFocus"
]);
var Al = Object.defineProperty, kl = Object.getOwnPropertyDescriptor, Pl = Object.getPrototypeOf, $l = Reflect.get, ln = (t, e, n, r) => {
  for (var o = r > 1 ? void 0 : r ? kl(e, n) : e, i = t.length - 1, s; i >= 0; i--)
    (s = t[i]) && (o = (r ? s(e, n, o) : s(o)) || o);
  return r && o && Al(e, n, o), o;
}, Sl = (t, e, n) => $l(Pl(t), n, e);
let gt = class extends on {
  constructor() {
    super(...arguments), this.open = !1;
  }
  createService() {
    const t = sn(Cl, {
      context: {
        id: this.id || "modal",
        open: this.open,
        onOpenChange: (e) => {
          this.open = e, t.context.set("open", e), e ? this.nativeDialog?.showModal() : this.nativeDialog?.close(), e || this.dispatchEvent(new CustomEvent("modal-close", {
            bubbles: !0,
            composed: !0
          }));
        },
        getRootNode: () => this.getRootNode()
      }
    });
    return t;
  }
  connectApi(t) {
    const e = () => {
      const r = t.context.get("open");
      return typeof r == "boolean" ? r : this.open;
    }, n = () => t.context.get("onOpenChange");
    return {
      get open() {
        return e();
      },
      getTriggerProps: () => ({
        type: "button",
        "aria-haspopup": "dialog",
        onClick: () => {
          const r = n();
          r && r(!0);
        }
      }),
      getBackdropProps: () => ({
        hidden: !e(),
        onClick: () => {
          const r = n();
          r && r(!1);
        }
      }),
      getContentProps: () => ({
        role: "dialog",
        "aria-modal": !0,
        hidden: !e()
      }),
      getCloseTriggerProps: () => ({
        type: "button",
        "aria-label": "Close dialog",
        onClick: () => {
          const r = n();
          r && r(!1);
        }
      })
    };
  }
  updateContext(t) {
    if (t.has("open")) {
      this.service.context.set("open", this.open);
      const e = this.service.context.get("onOpenChange");
      e && e(this.open);
    }
  }
  handleDialogClose() {
    this.open = !1;
    const t = this.service.context.get("onOpenChange");
    t && t(!1);
  }
  render() {
    this.updateApi();
    const t = this.api.getTriggerProps(), e = this.api.getBackdropProps(), n = this.api.getContentProps(), r = this.api.getCloseTriggerProps();
    return Pt`
      <div class="container mx-auto p-4">
        <button
          type="${t.type}"
          aria-haspopup="${t["aria-haspopup"]}"
          @click="${t.onClick}"
          class="
            px-6 py-3 rounded-lg font-semibold text-white
            bg-blue-600 hover:bg-blue-700 active:bg-blue-800
            transition-all duration-200
            shadow-md hover:shadow-lg
            transform hover:scale-105 active:scale-95
            cursor-pointer
          "
        >
          Open Modal
        </button>

        <!-- Backdrop -->
        <div
          ?hidden="${e.hidden}"
          @click="${e.onClick}"
          class="
            fixed inset-0 z-40
            bg-black/50 backdrop-blur-sm
          "
        ></div>

        <!-- Dialog -->
        <dialog
          role="${n.role}"
          aria-modal="${n["aria-modal"]}"
          ?hidden="${n.hidden}"
          @close="${() => this.handleDialogClose()}"
          class="
            fixed top-1/2 left-1/2 z-50
            -translate-x-1/2 -translate-y-1/2
            rounded-2xl shadow-2xl border-2 border-gray-200
            p-0 max-w-2xl w-full
            backdrop:bg-transparent
          "
        >
          <div class="bg-white rounded-2xl overflow-hidden">
            <!-- Header -->
            <div class="
              px-6 py-4
              bg-gradient-to-r from-blue-600 to-blue-700
              border-b border-blue-800
            ">
              <h3 class="text-2xl font-bold text-white">
                Tailwind Modal
              </h3>
            </div>

            <!-- Body -->
            <div class="px-6 py-6">
              <slot name="content">
                <!-- デフォルトコンテンツ -->
                <p class="text-gray-700 mb-4">
                  This is a modal dialog built with Lit + Tailwind CSS + Zag.js and native HTML &lt;dialog&gt; element.
                </p>

                <div class="bg-gray-50 rounded-lg p-4">
                  <p class="font-semibold text-gray-900 mb-2">
                    This modal demonstrates:
                  </p>
                  <ul class="space-y-2 text-gray-700">
                    <li class="flex items-start">
                      <span class="mr-2">✅</span>
                      <span>Zag.js Dialog state machine</span>
                    </li>
                    <li class="flex items-start">
                      <span class="mr-2">✅</span>
                      <span>Lit reactive properties</span>
                    </li>
                    <li class="flex items-start">
                      <span class="mr-2">✅</span>
                      <span>Native &lt;dialog&gt; accessibility</span>
                    </li>
                    <li class="flex items-start">
                      <span class="mr-2">✅</span>
                      <span>Automatic focus trap</span>
                    </li>
                    <li class="flex items-start">
                      <span class="mr-2">✅</span>
                      <span>ESC key to close (native)</span>
                    </li>
                    <li class="flex items-start">
                      <span class="mr-2">✅</span>
                      <span>Click backdrop to close</span>
                    </li>
                  </ul>
                </div>
              </slot>
            </div>

            <!-- Actions -->
            <div class="
              px-6 py-4
              bg-gray-50 border-t border-gray-200
              flex justify-end gap-3
            ">
              <button
                type="${r.type}"
                aria-label="${r["aria-label"]}"
                @click="${r.onClick}"
                class="
                  px-6 py-2 rounded-lg font-semibold
                  bg-gray-500 hover:bg-gray-600 active:bg-gray-700 text-white
                  transition-all duration-200
                  shadow-md hover:shadow-lg
                  transform hover:scale-105 active:scale-95
                  cursor-pointer
                "
              >
                Close
              </button>
            </div>
          </div>
        </dialog>
      </div>
    `;
  }
};
gt.styles = [
  ...Sl(gt, gt, "styles"),
  Nt`
      :host {
        display: block;
      }
    `
];
ln([
  D({ type: Boolean })
], gt.prototype, "open", 2);
ln([
  ao("dialog")
], gt.prototype, "nativeDialog", 2);
gt = ln([
  Xt("lit-tailwind-modal")
], gt);
var Ht = (t, e = []) => ({
  parts: (...n) => {
    if (Tl(e))
      return Ht(t, n);
    throw new Error("createAnatomy().parts(...) should only be called once. Did you mean to use .extendWith(...) ?");
  },
  extendWith: (...n) => Ht(t, [...e, ...n]),
  omit: (...n) => Ht(t, e.filter((r) => !n.includes(r))),
  rename: (n) => Ht(n, e),
  keys: () => e,
  build: () => [...new Set(e)].reduce(
    (n, r) => Object.assign(n, {
      [r]: {
        selector: [
          `&[data-scope="${Ot(t)}"][data-part="${Ot(r)}"]`,
          `& [data-scope="${Ot(t)}"][data-part="${Ot(r)}"]`
        ].join(", "),
        attrs: { "data-scope": Ot(t), "data-part": Ot(r) }
      }
    }),
    {}
  )
}), Ot = (t) => t.replace(/([A-Z])([A-Z])/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[\s_]+/g, "-").toLowerCase(), Tl = (t) => t.length === 0;
var _l = () => (t) => Array.from(new Set(t)), Nl = Ht("toggle", ["root", "indicator"]);
Nl.build();
var Il = {
  props({ props: t }) {
    return {
      defaultPressed: !1,
      ...t
    };
  },
  context({ prop: t, bindable: e }) {
    return {
      pressed: e(() => ({
        value: t("pressed"),
        defaultValue: t("defaultPressed"),
        onChange(n) {
          t("onPressedChange")?.(n);
        }
      }))
    };
  },
  initialState() {
    return "idle";
  },
  on: {
    "PRESS.TOGGLE": {
      actions: ["togglePressed"]
    },
    "PRESS.SET": {
      actions: ["setPressed"]
    }
  },
  states: {
    idle: {}
  },
  implementations: {
    actions: {
      togglePressed({ context: t }) {
        t.set("pressed", !t.get("pressed"));
      },
      setPressed({ context: t, event: e }) {
        t.set("pressed", e.value);
      }
    }
  }
};
_l()(["defaultPressed", "pressed", "onPressedChange", "disabled"]);
var Rl = Object.defineProperty, Ll = Object.getOwnPropertyDescriptor, Dl = Object.getPrototypeOf, Ml = Reflect.get, cn = (t, e, n, r) => {
  for (var o = r > 1 ? void 0 : r ? Ll(e, n) : e, i = t.length - 1, s; i >= 0; i--)
    (s = t[i]) && (o = (r ? s(e, n, o) : s(o)) || o);
  return r && o && Rl(e, n, o), o;
}, Fl = (t, e, n) => Ml(Dl(t), n, e);
let mt = class extends on {
  constructor() {
    super(...arguments), this.disabled = !1, this.pressed = !1;
  }
  createService() {
    const t = sn(Il, {
      context: {
        id: this.id || "toggle",
        disabled: this.disabled,
        pressed: this.pressed,
        onPressedChange: (e) => {
          this.pressed = e, t.context.set("pressed", e), this.dispatchEvent(new CustomEvent("pressed-change", {
            detail: { pressed: e },
            bubbles: !0,
            composed: !0
          }));
        },
        getRootNode: () => this.getRootNode()
      }
    });
    return t;
  }
  connectApi(t) {
    const e = () => {
      const o = t.context.get("pressed");
      return typeof o == "boolean" ? o : this.pressed;
    }, n = () => {
      const o = t.context.get("disabled");
      return typeof o == "boolean" ? o : this.disabled;
    }, r = () => t.context.get("onPressedChange");
    return {
      get pressed() {
        return e();
      },
      get disabled() {
        return n();
      },
      getRootProps: () => ({
        type: "button",
        role: "button",
        "aria-pressed": e(),
        disabled: n(),
        onClick: () => {
          const o = n(), i = e(), s = r();
          !o && s && s(!i);
        }
      })
    };
  }
  updateContext(t) {
    t.has("disabled") && this.service.context.set("disabled", this.disabled), t.has("pressed") && this.service.context.set("pressed", this.pressed);
  }
  render() {
    return this.updateApi(), Pt`
      <button
        type="${this.api.getRootProps().type}"
        role="${this.api.getRootProps().role}"
        aria-pressed="${this.api.getRootProps()["aria-pressed"]}"
        ?disabled="${this.api.getRootProps().disabled}"
        @click="${this.api.getRootProps().onClick}"
        class="
          px-6 py-3 rounded-lg font-semibold text-white
          transition-all duration-200
          shadow-md hover:shadow-lg
          transform hover:scale-105 active:scale-95
          ${this.api.pressed ? "bg-blue-600 hover:bg-blue-700 active:bg-blue-800 ring-2 ring-blue-300" : "bg-gray-500 hover:bg-gray-600 active:bg-gray-700"}
          ${this.api.disabled ? "opacity-50 cursor-not-allowed transform-none" : "cursor-pointer"}
        "
      >
        <slot></slot>
      </button>
    `;
  }
};
mt.styles = [
  ...Fl(mt, mt, "styles"),
  Nt`
      :host {
        display: inline-block;
      }
    `
];
cn([
  D({ type: Boolean })
], mt.prototype, "disabled", 2);
cn([
  D({ type: Boolean })
], mt.prototype, "pressed", 2);
mt = cn([
  Xt("lit-tailwind-toggle")
], mt);
