function Yp(l, s) {
  for (var i = 0; i < s.length; i++) {
    const c = s[i];
    if (typeof c != "string" && !Array.isArray(c)) {
      for (const d in c)
        if (d !== "default" && !(d in l)) {
          const v = Object.getOwnPropertyDescriptor(c, d);
          v && Object.defineProperty(l, d, v.get ? v : {
            enumerable: !0,
            get: () => c[d]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(l, Symbol.toStringTag, { value: "Module" }));
}
function Xp(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
}
var Ti = { exports: {} }, Kr = {}, Li = { exports: {} }, oe = {};
var Xc;
function Gp() {
  if (Xc) return oe;
  Xc = 1;
  var l = /* @__PURE__ */ Symbol.for("react.element"), s = /* @__PURE__ */ Symbol.for("react.portal"), i = /* @__PURE__ */ Symbol.for("react.fragment"), c = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), v = /* @__PURE__ */ Symbol.for("react.provider"), _ = /* @__PURE__ */ Symbol.for("react.context"), g = /* @__PURE__ */ Symbol.for("react.forward_ref"), m = /* @__PURE__ */ Symbol.for("react.suspense"), x = /* @__PURE__ */ Symbol.for("react.memo"), T = /* @__PURE__ */ Symbol.for("react.lazy"), $ = Symbol.iterator;
  function L(y) {
    return y === null || typeof y != "object" ? null : (y = $ && y[$] || y["@@iterator"], typeof y == "function" ? y : null);
  }
  var F = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, O = Object.assign, M = {};
  function D(y, C, U) {
    this.props = y, this.context = C, this.refs = M, this.updater = U || F;
  }
  D.prototype.isReactComponent = {}, D.prototype.setState = function(y, C) {
    if (typeof y != "object" && typeof y != "function" && y != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, y, C, "setState");
  }, D.prototype.forceUpdate = function(y) {
    this.updater.enqueueForceUpdate(this, y, "forceUpdate");
  };
  function Z() {
  }
  Z.prototype = D.prototype;
  function q(y, C, U) {
    this.props = y, this.context = C, this.refs = M, this.updater = U || F;
  }
  var J = q.prototype = new Z();
  J.constructor = q, O(J, D.prototype), J.isPureReactComponent = !0;
  var I = Array.isArray, K = Object.prototype.hasOwnProperty, ne = { current: null }, ue = { key: !0, ref: !0, __self: !0, __source: !0 };
  function De(y, C, U) {
    var te, le = {}, ie = null, fe = null;
    if (C != null) for (te in C.ref !== void 0 && (fe = C.ref), C.key !== void 0 && (ie = "" + C.key), C) K.call(C, te) && !ue.hasOwnProperty(te) && (le[te] = C[te]);
    var se = arguments.length - 2;
    if (se === 1) le.children = U;
    else if (1 < se) {
      for (var de = Array(se), rt = 0; rt < se; rt++) de[rt] = arguments[rt + 2];
      le.children = de;
    }
    if (y && y.defaultProps) for (te in se = y.defaultProps, se) le[te] === void 0 && (le[te] = se[te]);
    return { $$typeof: l, type: y, key: ie, ref: fe, props: le, _owner: ne.current };
  }
  function nt(y, C) {
    return { $$typeof: l, type: y.type, key: C, ref: y.ref, props: y.props, _owner: y._owner };
  }
  function ke(y) {
    return typeof y == "object" && y !== null && y.$$typeof === l;
  }
  function Qe(y) {
    var C = { "=": "=0", ":": "=2" };
    return "$" + y.replace(/[=:]/g, function(U) {
      return C[U];
    });
  }
  var Ae = /\/+/g;
  function ge(y, C) {
    return typeof y == "object" && y !== null && y.key != null ? Qe("" + y.key) : C.toString(36);
  }
  function Le(y, C, U, te, le) {
    var ie = typeof y;
    (ie === "undefined" || ie === "boolean") && (y = null);
    var fe = !1;
    if (y === null) fe = !0;
    else switch (ie) {
      case "string":
      case "number":
        fe = !0;
        break;
      case "object":
        switch (y.$$typeof) {
          case l:
          case s:
            fe = !0;
        }
    }
    if (fe) return fe = y, le = le(fe), y = te === "" ? "." + ge(fe, 0) : te, I(le) ? (U = "", y != null && (U = y.replace(Ae, "$&/") + "/"), Le(le, C, U, "", function(rt) {
      return rt;
    })) : le != null && (ke(le) && (le = nt(le, U + (!le.key || fe && fe.key === le.key ? "" : ("" + le.key).replace(Ae, "$&/") + "/") + y)), C.push(le)), 1;
    if (fe = 0, te = te === "" ? "." : te + ":", I(y)) for (var se = 0; se < y.length; se++) {
      ie = y[se];
      var de = te + ge(ie, se);
      fe += Le(ie, C, U, de, le);
    }
    else if (de = L(y), typeof de == "function") for (y = de.call(y), se = 0; !(ie = y.next()).done; ) ie = ie.value, de = te + ge(ie, se++), fe += Le(ie, C, U, de, le);
    else if (ie === "object") throw C = String(y), Error("Objects are not valid as a React child (found: " + (C === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : C) + "). If you meant to render a collection of children, use an array instead.");
    return fe;
  }
  function Ue(y, C, U) {
    if (y == null) return y;
    var te = [], le = 0;
    return Le(y, te, "", "", function(ie) {
      return C.call(U, ie, le++);
    }), te;
  }
  function ze(y) {
    if (y._status === -1) {
      var C = y._result;
      C = C(), C.then(function(U) {
        (y._status === 0 || y._status === -1) && (y._status = 1, y._result = U);
      }, function(U) {
        (y._status === 0 || y._status === -1) && (y._status = 2, y._result = U);
      }), y._status === -1 && (y._status = 0, y._result = C);
    }
    if (y._status === 1) return y._result.default;
    throw y._result;
  }
  var me = { current: null }, j = { transition: null }, Y = { ReactCurrentDispatcher: me, ReactCurrentBatchConfig: j, ReactCurrentOwner: ne };
  function A() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return oe.Children = { map: Ue, forEach: function(y, C, U) {
    Ue(y, function() {
      C.apply(this, arguments);
    }, U);
  }, count: function(y) {
    var C = 0;
    return Ue(y, function() {
      C++;
    }), C;
  }, toArray: function(y) {
    return Ue(y, function(C) {
      return C;
    }) || [];
  }, only: function(y) {
    if (!ke(y)) throw Error("React.Children.only expected to receive a single React element child.");
    return y;
  } }, oe.Component = D, oe.Fragment = i, oe.Profiler = d, oe.PureComponent = q, oe.StrictMode = c, oe.Suspense = m, oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y, oe.act = A, oe.cloneElement = function(y, C, U) {
    if (y == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + y + ".");
    var te = O({}, y.props), le = y.key, ie = y.ref, fe = y._owner;
    if (C != null) {
      if (C.ref !== void 0 && (ie = C.ref, fe = ne.current), C.key !== void 0 && (le = "" + C.key), y.type && y.type.defaultProps) var se = y.type.defaultProps;
      for (de in C) K.call(C, de) && !ue.hasOwnProperty(de) && (te[de] = C[de] === void 0 && se !== void 0 ? se[de] : C[de]);
    }
    var de = arguments.length - 2;
    if (de === 1) te.children = U;
    else if (1 < de) {
      se = Array(de);
      for (var rt = 0; rt < de; rt++) se[rt] = arguments[rt + 2];
      te.children = se;
    }
    return { $$typeof: l, type: y.type, key: le, ref: ie, props: te, _owner: fe };
  }, oe.createContext = function(y) {
    return y = { $$typeof: _, _currentValue: y, _currentValue2: y, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, y.Provider = { $$typeof: v, _context: y }, y.Consumer = y;
  }, oe.createElement = De, oe.createFactory = function(y) {
    var C = De.bind(null, y);
    return C.type = y, C;
  }, oe.createRef = function() {
    return { current: null };
  }, oe.forwardRef = function(y) {
    return { $$typeof: g, render: y };
  }, oe.isValidElement = ke, oe.lazy = function(y) {
    return { $$typeof: T, _payload: { _status: -1, _result: y }, _init: ze };
  }, oe.memo = function(y, C) {
    return { $$typeof: x, type: y, compare: C === void 0 ? null : C };
  }, oe.startTransition = function(y) {
    var C = j.transition;
    j.transition = {};
    try {
      y();
    } finally {
      j.transition = C;
    }
  }, oe.unstable_act = A, oe.useCallback = function(y, C) {
    return me.current.useCallback(y, C);
  }, oe.useContext = function(y) {
    return me.current.useContext(y);
  }, oe.useDebugValue = function() {
  }, oe.useDeferredValue = function(y) {
    return me.current.useDeferredValue(y);
  }, oe.useEffect = function(y, C) {
    return me.current.useEffect(y, C);
  }, oe.useId = function() {
    return me.current.useId();
  }, oe.useImperativeHandle = function(y, C, U) {
    return me.current.useImperativeHandle(y, C, U);
  }, oe.useInsertionEffect = function(y, C) {
    return me.current.useInsertionEffect(y, C);
  }, oe.useLayoutEffect = function(y, C) {
    return me.current.useLayoutEffect(y, C);
  }, oe.useMemo = function(y, C) {
    return me.current.useMemo(y, C);
  }, oe.useReducer = function(y, C, U) {
    return me.current.useReducer(y, C, U);
  }, oe.useRef = function(y) {
    return me.current.useRef(y);
  }, oe.useState = function(y) {
    return me.current.useState(y);
  }, oe.useSyncExternalStore = function(y, C, U) {
    return me.current.useSyncExternalStore(y, C, U);
  }, oe.useTransition = function() {
    return me.current.useTransition();
  }, oe.version = "18.3.1", oe;
}
var Gc;
function xo() {
  return Gc || (Gc = 1, Li.exports = Gp()), Li.exports;
}
var Zc;
function Zp() {
  if (Zc) return Kr;
  Zc = 1;
  var l = xo(), s = /* @__PURE__ */ Symbol.for("react.element"), i = /* @__PURE__ */ Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, d = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, v = { key: !0, ref: !0, __self: !0, __source: !0 };
  function _(g, m, x) {
    var T, $ = {}, L = null, F = null;
    x !== void 0 && (L = "" + x), m.key !== void 0 && (L = "" + m.key), m.ref !== void 0 && (F = m.ref);
    for (T in m) c.call(m, T) && !v.hasOwnProperty(T) && ($[T] = m[T]);
    if (g && g.defaultProps) for (T in m = g.defaultProps, m) $[T] === void 0 && ($[T] = m[T]);
    return { $$typeof: s, type: g, key: L, ref: F, props: $, _owner: d.current };
  }
  return Kr.Fragment = i, Kr.jsx = _, Kr.jsxs = _, Kr;
}
var Jc;
function Jp() {
  return Jc || (Jc = 1, Ti.exports = Zp()), Ti.exports;
}
var re = Jp(), E = xo();
const ee = /* @__PURE__ */ Xp(E), qc = /* @__PURE__ */ Yp({
  __proto__: null,
  default: ee
}, [E]);
var mo = {}, Ri = { exports: {} }, be = {}, Oi = { exports: {} }, zi = {};
var bc;
function qp() {
  return bc || (bc = 1, (function(l) {
    function s(j, Y) {
      var A = j.length;
      j.push(Y);
      e: for (; 0 < A; ) {
        var y = A - 1 >>> 1, C = j[y];
        if (0 < d(C, Y)) j[y] = Y, j[A] = C, A = y;
        else break e;
      }
    }
    function i(j) {
      return j.length === 0 ? null : j[0];
    }
    function c(j) {
      if (j.length === 0) return null;
      var Y = j[0], A = j.pop();
      if (A !== Y) {
        j[0] = A;
        e: for (var y = 0, C = j.length, U = C >>> 1; y < U; ) {
          var te = 2 * (y + 1) - 1, le = j[te], ie = te + 1, fe = j[ie];
          if (0 > d(le, A)) ie < C && 0 > d(fe, le) ? (j[y] = fe, j[ie] = A, y = ie) : (j[y] = le, j[te] = A, y = te);
          else if (ie < C && 0 > d(fe, A)) j[y] = fe, j[ie] = A, y = ie;
          else break e;
        }
      }
      return Y;
    }
    function d(j, Y) {
      var A = j.sortIndex - Y.sortIndex;
      return A !== 0 ? A : j.id - Y.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var v = performance;
      l.unstable_now = function() {
        return v.now();
      };
    } else {
      var _ = Date, g = _.now();
      l.unstable_now = function() {
        return _.now() - g;
      };
    }
    var m = [], x = [], T = 1, $ = null, L = 3, F = !1, O = !1, M = !1, D = typeof setTimeout == "function" ? setTimeout : null, Z = typeof clearTimeout == "function" ? clearTimeout : null, q = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function J(j) {
      for (var Y = i(x); Y !== null; ) {
        if (Y.callback === null) c(x);
        else if (Y.startTime <= j) c(x), Y.sortIndex = Y.expirationTime, s(m, Y);
        else break;
        Y = i(x);
      }
    }
    function I(j) {
      if (M = !1, J(j), !O) if (i(m) !== null) O = !0, ze(K);
      else {
        var Y = i(x);
        Y !== null && me(I, Y.startTime - j);
      }
    }
    function K(j, Y) {
      O = !1, M && (M = !1, Z(De), De = -1), F = !0;
      var A = L;
      try {
        for (J(Y), $ = i(m); $ !== null && (!($.expirationTime > Y) || j && !Qe()); ) {
          var y = $.callback;
          if (typeof y == "function") {
            $.callback = null, L = $.priorityLevel;
            var C = y($.expirationTime <= Y);
            Y = l.unstable_now(), typeof C == "function" ? $.callback = C : $ === i(m) && c(m), J(Y);
          } else c(m);
          $ = i(m);
        }
        if ($ !== null) var U = !0;
        else {
          var te = i(x);
          te !== null && me(I, te.startTime - Y), U = !1;
        }
        return U;
      } finally {
        $ = null, L = A, F = !1;
      }
    }
    var ne = !1, ue = null, De = -1, nt = 5, ke = -1;
    function Qe() {
      return !(l.unstable_now() - ke < nt);
    }
    function Ae() {
      if (ue !== null) {
        var j = l.unstable_now();
        ke = j;
        var Y = !0;
        try {
          Y = ue(!0, j);
        } finally {
          Y ? ge() : (ne = !1, ue = null);
        }
      } else ne = !1;
    }
    var ge;
    if (typeof q == "function") ge = function() {
      q(Ae);
    };
    else if (typeof MessageChannel < "u") {
      var Le = new MessageChannel(), Ue = Le.port2;
      Le.port1.onmessage = Ae, ge = function() {
        Ue.postMessage(null);
      };
    } else ge = function() {
      D(Ae, 0);
    };
    function ze(j) {
      ue = j, ne || (ne = !0, ge());
    }
    function me(j, Y) {
      De = D(function() {
        j(l.unstable_now());
      }, Y);
    }
    l.unstable_IdlePriority = 5, l.unstable_ImmediatePriority = 1, l.unstable_LowPriority = 4, l.unstable_NormalPriority = 3, l.unstable_Profiling = null, l.unstable_UserBlockingPriority = 2, l.unstable_cancelCallback = function(j) {
      j.callback = null;
    }, l.unstable_continueExecution = function() {
      O || F || (O = !0, ze(K));
    }, l.unstable_forceFrameRate = function(j) {
      0 > j || 125 < j ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : nt = 0 < j ? Math.floor(1e3 / j) : 5;
    }, l.unstable_getCurrentPriorityLevel = function() {
      return L;
    }, l.unstable_getFirstCallbackNode = function() {
      return i(m);
    }, l.unstable_next = function(j) {
      switch (L) {
        case 1:
        case 2:
        case 3:
          var Y = 3;
          break;
        default:
          Y = L;
      }
      var A = L;
      L = Y;
      try {
        return j();
      } finally {
        L = A;
      }
    }, l.unstable_pauseExecution = function() {
    }, l.unstable_requestPaint = function() {
    }, l.unstable_runWithPriority = function(j, Y) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          j = 3;
      }
      var A = L;
      L = j;
      try {
        return Y();
      } finally {
        L = A;
      }
    }, l.unstable_scheduleCallback = function(j, Y, A) {
      var y = l.unstable_now();
      switch (typeof A == "object" && A !== null ? (A = A.delay, A = typeof A == "number" && 0 < A ? y + A : y) : A = y, j) {
        case 1:
          var C = -1;
          break;
        case 2:
          C = 250;
          break;
        case 5:
          C = 1073741823;
          break;
        case 4:
          C = 1e4;
          break;
        default:
          C = 5e3;
      }
      return C = A + C, j = { id: T++, callback: Y, priorityLevel: j, startTime: A, expirationTime: C, sortIndex: -1 }, A > y ? (j.sortIndex = A, s(x, j), i(m) === null && j === i(x) && (M ? (Z(De), De = -1) : M = !0, me(I, A - y))) : (j.sortIndex = C, s(m, j), O || F || (O = !0, ze(K))), j;
    }, l.unstable_shouldYield = Qe, l.unstable_wrapCallback = function(j) {
      var Y = L;
      return function() {
        var A = L;
        L = Y;
        try {
          return j.apply(this, arguments);
        } finally {
          L = A;
        }
      };
    };
  })(zi)), zi;
}
var ef;
function bp() {
  return ef || (ef = 1, Oi.exports = qp()), Oi.exports;
}
var tf;
function em() {
  if (tf) return be;
  tf = 1;
  var l = xo(), s = bp();
  function i(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var c = /* @__PURE__ */ new Set(), d = {};
  function v(e, t) {
    _(e, t), _(e + "Capture", t);
  }
  function _(e, t) {
    for (d[e] = t, e = 0; e < t.length; e++) c.add(t[e]);
  }
  var g = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), m = Object.prototype.hasOwnProperty, x = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, T = {}, $ = {};
  function L(e) {
    return m.call($, e) ? !0 : m.call(T, e) ? !1 : x.test(e) ? $[e] = !0 : (T[e] = !0, !1);
  }
  function F(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function O(e, t, n, r) {
    if (t === null || typeof t > "u" || F(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
    return !1;
  }
  function M(e, t, n, r, o, u, a) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = u, this.removeEmptyString = a;
  }
  var D = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    D[e] = new M(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    D[t] = new M(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    D[e] = new M(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    D[e] = new M(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    D[e] = new M(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    D[e] = new M(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    D[e] = new M(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    D[e] = new M(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    D[e] = new M(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var Z = /[\-:]([a-z])/g;
  function q(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      Z,
      q
    );
    D[t] = new M(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Z, q);
    D[t] = new M(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Z, q);
    D[t] = new M(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    D[e] = new M(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), D.xlinkHref = new M("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    D[e] = new M(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function J(e, t, n, r) {
    var o = D.hasOwnProperty(t) ? D[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (O(t, n, o, r) && (n = null), r || o === null ? L(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var I = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, K = /* @__PURE__ */ Symbol.for("react.element"), ne = /* @__PURE__ */ Symbol.for("react.portal"), ue = /* @__PURE__ */ Symbol.for("react.fragment"), De = /* @__PURE__ */ Symbol.for("react.strict_mode"), nt = /* @__PURE__ */ Symbol.for("react.profiler"), ke = /* @__PURE__ */ Symbol.for("react.provider"), Qe = /* @__PURE__ */ Symbol.for("react.context"), Ae = /* @__PURE__ */ Symbol.for("react.forward_ref"), ge = /* @__PURE__ */ Symbol.for("react.suspense"), Le = /* @__PURE__ */ Symbol.for("react.suspense_list"), Ue = /* @__PURE__ */ Symbol.for("react.memo"), ze = /* @__PURE__ */ Symbol.for("react.lazy"), me = /* @__PURE__ */ Symbol.for("react.offscreen"), j = Symbol.iterator;
  function Y(e) {
    return e === null || typeof e != "object" ? null : (e = j && e[j] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var A = Object.assign, y;
  function C(e) {
    if (y === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      y = t && t[1] || "";
    }
    return `
` + y + e;
  }
  var U = !1;
  function te(e, t) {
    if (!e || U) return "";
    U = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t) if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (S) {
          var r = S;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (S) {
          r = S;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (S) {
          r = S;
        }
        e();
      }
    } catch (S) {
      if (S && r && typeof S.stack == "string") {
        for (var o = S.stack.split(`
`), u = r.stack.split(`
`), a = o.length - 1, f = u.length - 1; 1 <= a && 0 <= f && o[a] !== u[f]; ) f--;
        for (; 1 <= a && 0 <= f; a--, f--) if (o[a] !== u[f]) {
          if (a !== 1 || f !== 1)
            do
              if (a--, f--, 0 > f || o[a] !== u[f]) {
                var p = `
` + o[a].replace(" at new ", " at ");
                return e.displayName && p.includes("<anonymous>") && (p = p.replace("<anonymous>", e.displayName)), p;
              }
            while (1 <= a && 0 <= f);
          break;
        }
      }
    } finally {
      U = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? C(e) : "";
  }
  function le(e) {
    switch (e.tag) {
      case 5:
        return C(e.type);
      case 16:
        return C("Lazy");
      case 13:
        return C("Suspense");
      case 19:
        return C("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = te(e.type, !1), e;
      case 11:
        return e = te(e.type.render, !1), e;
      case 1:
        return e = te(e.type, !0), e;
      default:
        return "";
    }
  }
  function ie(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ue:
        return "Fragment";
      case ne:
        return "Portal";
      case nt:
        return "Profiler";
      case De:
        return "StrictMode";
      case ge:
        return "Suspense";
      case Le:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Qe:
        return (e.displayName || "Context") + ".Consumer";
      case ke:
        return (e._context.displayName || "Context") + ".Provider";
      case Ae:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Ue:
        return t = e.displayName || null, t !== null ? t : ie(e.type) || "Memo";
      case ze:
        t = e._payload, e = e._init;
        try {
          return ie(e(t));
        } catch {
        }
    }
    return null;
  }
  function fe(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ie(t);
      case 8:
        return t === De ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function se(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function de(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function rt(e) {
    var t = de(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var o = n.get, u = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return o.call(this);
      }, set: function(a) {
        r = "" + a, u.call(this, a);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(a) {
        r = "" + a;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function rl(e) {
    e._valueTracker || (e._valueTracker = rt(e));
  }
  function es(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = de(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function ll(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function jo(e, t) {
    var n = t.checked;
    return A({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function ts(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = se(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function ns(e, t) {
    t = t.checked, t != null && J(e, "checked", t, !1);
  }
  function Do(e, t) {
    ns(e, t);
    var n = se(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Mo(e, t.type, n) : t.hasOwnProperty("defaultValue") && Mo(e, t.type, se(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function rs(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Mo(e, t, n) {
    (t !== "number" || ll(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var ir = Array.isArray;
  function jn(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
      for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + se(n), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === n) {
          e[o].selected = !0, r && (e[o].defaultSelected = !0);
          return;
        }
        t !== null || e[o].disabled || (t = e[o]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Io(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(i(91));
    return A({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function ls(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(i(92));
        if (ir(n)) {
          if (1 < n.length) throw Error(i(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: se(n) };
  }
  function os(e, t) {
    var n = se(t.value), r = se(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function us(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function is(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Ao(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? is(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var ol, ss = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, o);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (ol = ol || document.createElement("div"), ol.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ol.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function sr(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var ar = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Jf = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ar).forEach(function(e) {
    Jf.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), ar[t] = ar[e];
    });
  });
  function as(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ar.hasOwnProperty(e) && ar[e] ? ("" + t).trim() : t + "px";
  }
  function cs(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, o = as(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    }
  }
  var qf = A({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Uo(e, t) {
    if (t) {
      if (qf[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(i(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(i(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(i(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(i(62));
    }
  }
  function Bo(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Ho = null;
  function Vo(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Wo = null, Dn = null, Mn = null;
  function fs(e) {
    if (e = Or(e)) {
      if (typeof Wo != "function") throw Error(i(280));
      var t = e.stateNode;
      t && (t = Tl(t), Wo(e.stateNode, e.type, t));
    }
  }
  function ds(e) {
    Dn ? Mn ? Mn.push(e) : Mn = [e] : Dn = e;
  }
  function ps() {
    if (Dn) {
      var e = Dn, t = Mn;
      if (Mn = Dn = null, fs(e), t) for (e = 0; e < t.length; e++) fs(t[e]);
    }
  }
  function ms(e, t) {
    return e(t);
  }
  function hs() {
  }
  var Qo = !1;
  function vs(e, t, n) {
    if (Qo) return e(t, n);
    Qo = !0;
    try {
      return ms(e, t, n);
    } finally {
      Qo = !1, (Dn !== null || Mn !== null) && (hs(), ps());
    }
  }
  function cr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Tl(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(i(231, t, typeof n));
    return n;
  }
  var Ko = !1;
  if (g) try {
    var fr = {};
    Object.defineProperty(fr, "passive", { get: function() {
      Ko = !0;
    } }), window.addEventListener("test", fr, fr), window.removeEventListener("test", fr, fr);
  } catch {
    Ko = !1;
  }
  function bf(e, t, n, r, o, u, a, f, p) {
    var S = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, S);
    } catch (N) {
      this.onError(N);
    }
  }
  var dr = !1, ul = null, il = !1, Yo = null, ed = { onError: function(e) {
    dr = !0, ul = e;
  } };
  function td(e, t, n, r, o, u, a, f, p) {
    dr = !1, ul = null, bf.apply(ed, arguments);
  }
  function nd(e, t, n, r, o, u, a, f, p) {
    if (td.apply(this, arguments), dr) {
      if (dr) {
        var S = ul;
        dr = !1, ul = null;
      } else throw Error(i(198));
      il || (il = !0, Yo = S);
    }
  }
  function vn(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function ys(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function gs(e) {
    if (vn(e) !== e) throw Error(i(188));
  }
  function rd(e) {
    var t = e.alternate;
    if (!t) {
      if (t = vn(e), t === null) throw Error(i(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var o = n.return;
      if (o === null) break;
      var u = o.alternate;
      if (u === null) {
        if (r = o.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (o.child === u.child) {
        for (u = o.child; u; ) {
          if (u === n) return gs(o), e;
          if (u === r) return gs(o), t;
          u = u.sibling;
        }
        throw Error(i(188));
      }
      if (n.return !== r.return) n = o, r = u;
      else {
        for (var a = !1, f = o.child; f; ) {
          if (f === n) {
            a = !0, n = o, r = u;
            break;
          }
          if (f === r) {
            a = !0, r = o, n = u;
            break;
          }
          f = f.sibling;
        }
        if (!a) {
          for (f = u.child; f; ) {
            if (f === n) {
              a = !0, n = u, r = o;
              break;
            }
            if (f === r) {
              a = !0, r = u, n = o;
              break;
            }
            f = f.sibling;
          }
          if (!a) throw Error(i(189));
        }
      }
      if (n.alternate !== r) throw Error(i(190));
    }
    if (n.tag !== 3) throw Error(i(188));
    return n.stateNode.current === n ? e : t;
  }
  function ws(e) {
    return e = rd(e), e !== null ? _s(e) : null;
  }
  function _s(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = _s(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var ks = s.unstable_scheduleCallback, Ss = s.unstable_cancelCallback, ld = s.unstable_shouldYield, od = s.unstable_requestPaint, Pe = s.unstable_now, ud = s.unstable_getCurrentPriorityLevel, Xo = s.unstable_ImmediatePriority, Es = s.unstable_UserBlockingPriority, sl = s.unstable_NormalPriority, id = s.unstable_LowPriority, xs = s.unstable_IdlePriority, al = null, Ct = null;
  function sd(e) {
    if (Ct && typeof Ct.onCommitFiberRoot == "function") try {
      Ct.onCommitFiberRoot(al, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var yt = Math.clz32 ? Math.clz32 : fd, ad = Math.log, cd = Math.LN2;
  function fd(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (ad(e) / cd | 0) | 0;
  }
  var cl = 64, fl = 4194304;
  function pr(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function dl(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, o = e.suspendedLanes, u = e.pingedLanes, a = n & 268435455;
    if (a !== 0) {
      var f = a & ~o;
      f !== 0 ? r = pr(f) : (u &= a, u !== 0 && (r = pr(u)));
    } else a = n & ~o, a !== 0 ? r = pr(a) : u !== 0 && (r = pr(u));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & o) === 0 && (o = r & -r, u = t & -t, o >= u || o === 16 && (u & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - yt(t), o = 1 << n, r |= e[n], t &= ~o;
    return r;
  }
  function dd(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function pd(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, u = e.pendingLanes; 0 < u; ) {
      var a = 31 - yt(u), f = 1 << a, p = o[a];
      p === -1 ? ((f & n) === 0 || (f & r) !== 0) && (o[a] = dd(f, t)) : p <= t && (e.expiredLanes |= f), u &= ~f;
    }
  }
  function Go(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Cs() {
    var e = cl;
    return cl <<= 1, (cl & 4194240) === 0 && (cl = 64), e;
  }
  function Zo(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function mr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - yt(t), e[t] = n;
  }
  function md(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var o = 31 - yt(n), u = 1 << o;
      t[o] = 0, r[o] = -1, e[o] = -1, n &= ~u;
    }
  }
  function Jo(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - yt(n), o = 1 << r;
      o & t | e[r] & t && (e[r] |= t), n &= ~o;
    }
  }
  var pe = 0;
  function Ps(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Ns, qo, Ts, Ls, Rs, bo = !1, pl = [], Kt = null, Yt = null, Xt = null, hr = /* @__PURE__ */ new Map(), vr = /* @__PURE__ */ new Map(), Gt = [], hd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Os(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Kt = null;
        break;
      case "dragenter":
      case "dragleave":
        Yt = null;
        break;
      case "mouseover":
      case "mouseout":
        Xt = null;
        break;
      case "pointerover":
      case "pointerout":
        hr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        vr.delete(t.pointerId);
    }
  }
  function yr(e, t, n, r, o, u) {
    return e === null || e.nativeEvent !== u ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: u, targetContainers: [o] }, t !== null && (t = Or(t), t !== null && qo(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
  }
  function vd(e, t, n, r, o) {
    switch (t) {
      case "focusin":
        return Kt = yr(Kt, e, t, n, r, o), !0;
      case "dragenter":
        return Yt = yr(Yt, e, t, n, r, o), !0;
      case "mouseover":
        return Xt = yr(Xt, e, t, n, r, o), !0;
      case "pointerover":
        var u = o.pointerId;
        return hr.set(u, yr(hr.get(u) || null, e, t, n, r, o)), !0;
      case "gotpointercapture":
        return u = o.pointerId, vr.set(u, yr(vr.get(u) || null, e, t, n, r, o)), !0;
    }
    return !1;
  }
  function zs(e) {
    var t = yn(e.target);
    if (t !== null) {
      var n = vn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = ys(n), t !== null) {
            e.blockedOn = t, Rs(e.priority, function() {
              Ts(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function ml(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = tu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Ho = r, n.target.dispatchEvent(r), Ho = null;
      } else return t = Or(n), t !== null && qo(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Fs(e, t, n) {
    ml(e) && n.delete(t);
  }
  function yd() {
    bo = !1, Kt !== null && ml(Kt) && (Kt = null), Yt !== null && ml(Yt) && (Yt = null), Xt !== null && ml(Xt) && (Xt = null), hr.forEach(Fs), vr.forEach(Fs);
  }
  function gr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, bo || (bo = !0, s.unstable_scheduleCallback(s.unstable_NormalPriority, yd)));
  }
  function wr(e) {
    function t(o) {
      return gr(o, e);
    }
    if (0 < pl.length) {
      gr(pl[0], e);
      for (var n = 1; n < pl.length; n++) {
        var r = pl[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (Kt !== null && gr(Kt, e), Yt !== null && gr(Yt, e), Xt !== null && gr(Xt, e), hr.forEach(t), vr.forEach(t), n = 0; n < Gt.length; n++) r = Gt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Gt.length && (n = Gt[0], n.blockedOn === null); ) zs(n), n.blockedOn === null && Gt.shift();
  }
  var In = I.ReactCurrentBatchConfig, hl = !0;
  function gd(e, t, n, r) {
    var o = pe, u = In.transition;
    In.transition = null;
    try {
      pe = 1, eu(e, t, n, r);
    } finally {
      pe = o, In.transition = u;
    }
  }
  function wd(e, t, n, r) {
    var o = pe, u = In.transition;
    In.transition = null;
    try {
      pe = 4, eu(e, t, n, r);
    } finally {
      pe = o, In.transition = u;
    }
  }
  function eu(e, t, n, r) {
    if (hl) {
      var o = tu(e, t, n, r);
      if (o === null) gu(e, t, r, vl, n), Os(e, r);
      else if (vd(o, e, t, n, r)) r.stopPropagation();
      else if (Os(e, r), t & 4 && -1 < hd.indexOf(e)) {
        for (; o !== null; ) {
          var u = Or(o);
          if (u !== null && Ns(u), u = tu(e, t, n, r), u === null && gu(e, t, r, vl, n), u === o) break;
          o = u;
        }
        o !== null && r.stopPropagation();
      } else gu(e, t, r, null, n);
    }
  }
  var vl = null;
  function tu(e, t, n, r) {
    if (vl = null, e = Vo(r), e = yn(e), e !== null) if (t = vn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = ys(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return vl = e, null;
  }
  function $s(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (ud()) {
          case Xo:
            return 1;
          case Es:
            return 4;
          case sl:
          case id:
            return 16;
          case xs:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Zt = null, nu = null, yl = null;
  function js() {
    if (yl) return yl;
    var e, t = nu, n = t.length, r, o = "value" in Zt ? Zt.value : Zt.textContent, u = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++) ;
    var a = n - e;
    for (r = 1; r <= a && t[n - r] === o[u - r]; r++) ;
    return yl = o.slice(e, 1 < r ? 1 - r : void 0);
  }
  function gl(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function wl() {
    return !0;
  }
  function Ds() {
    return !1;
  }
  function lt(e) {
    function t(n, r, o, u, a) {
      this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = u, this.target = a, this.currentTarget = null;
      for (var f in e) e.hasOwnProperty(f) && (n = e[f], this[f] = n ? n(u) : u[f]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? wl : Ds, this.isPropagationStopped = Ds, this;
    }
    return A(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = wl);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = wl);
    }, persist: function() {
    }, isPersistent: wl }), t;
  }
  var An = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, ru = lt(An), _r = A({}, An, { view: 0, detail: 0 }), _d = lt(_r), lu, ou, kr, _l = A({}, _r, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: iu, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== kr && (kr && e.type === "mousemove" ? (lu = e.screenX - kr.screenX, ou = e.screenY - kr.screenY) : ou = lu = 0, kr = e), lu);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : ou;
  } }), Ms = lt(_l), kd = A({}, _l, { dataTransfer: 0 }), Sd = lt(kd), Ed = A({}, _r, { relatedTarget: 0 }), uu = lt(Ed), xd = A({}, An, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Cd = lt(xd), Pd = A({}, An, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Nd = lt(Pd), Td = A({}, An, { data: 0 }), Is = lt(Td), Ld = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Rd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function zd(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Od[e]) ? !!t[e] : !1;
  }
  function iu() {
    return zd;
  }
  var Fd = A({}, _r, { key: function(e) {
    if (e.key) {
      var t = Ld[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = gl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Rd[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: iu, charCode: function(e) {
    return e.type === "keypress" ? gl(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? gl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), $d = lt(Fd), jd = A({}, _l, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), As = lt(jd), Dd = A({}, _r, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: iu }), Md = lt(Dd), Id = A({}, An, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ad = lt(Id), Ud = A({}, _l, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Bd = lt(Ud), Hd = [9, 13, 27, 32], su = g && "CompositionEvent" in window, Sr = null;
  g && "documentMode" in document && (Sr = document.documentMode);
  var Vd = g && "TextEvent" in window && !Sr, Us = g && (!su || Sr && 8 < Sr && 11 >= Sr), Bs = " ", Hs = !1;
  function Vs(e, t) {
    switch (e) {
      case "keyup":
        return Hd.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Ws(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Un = !1;
  function Wd(e, t) {
    switch (e) {
      case "compositionend":
        return Ws(t);
      case "keypress":
        return t.which !== 32 ? null : (Hs = !0, Bs);
      case "textInput":
        return e = t.data, e === Bs && Hs ? null : e;
      default:
        return null;
    }
  }
  function Qd(e, t) {
    if (Un) return e === "compositionend" || !su && Vs(e, t) ? (e = js(), yl = nu = Zt = null, Un = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Us && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Kd = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Qs(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Kd[e.type] : t === "textarea";
  }
  function Ks(e, t, n, r) {
    ds(r), t = Cl(t, "onChange"), 0 < t.length && (n = new ru("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var Er = null, xr = null;
  function Yd(e) {
    ca(e, 0);
  }
  function kl(e) {
    var t = Qn(e);
    if (es(t)) return e;
  }
  function Xd(e, t) {
    if (e === "change") return t;
  }
  var Ys = !1;
  if (g) {
    var au;
    if (g) {
      var cu = "oninput" in document;
      if (!cu) {
        var Xs = document.createElement("div");
        Xs.setAttribute("oninput", "return;"), cu = typeof Xs.oninput == "function";
      }
      au = cu;
    } else au = !1;
    Ys = au && (!document.documentMode || 9 < document.documentMode);
  }
  function Gs() {
    Er && (Er.detachEvent("onpropertychange", Zs), xr = Er = null);
  }
  function Zs(e) {
    if (e.propertyName === "value" && kl(xr)) {
      var t = [];
      Ks(t, xr, e, Vo(e)), vs(Yd, t);
    }
  }
  function Gd(e, t, n) {
    e === "focusin" ? (Gs(), Er = t, xr = n, Er.attachEvent("onpropertychange", Zs)) : e === "focusout" && Gs();
  }
  function Zd(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return kl(xr);
  }
  function Jd(e, t) {
    if (e === "click") return kl(t);
  }
  function qd(e, t) {
    if (e === "input" || e === "change") return kl(t);
  }
  function bd(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var gt = typeof Object.is == "function" ? Object.is : bd;
  function Cr(e, t) {
    if (gt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var o = n[r];
      if (!m.call(t, o) || !gt(e[o], t[o])) return !1;
    }
    return !0;
  }
  function Js(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function qs(e, t) {
    var n = Js(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Js(n);
    }
  }
  function bs(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? bs(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function ea() {
    for (var e = window, t = ll(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = ll(e.document);
    }
    return t;
  }
  function fu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function ep(e) {
    var t = ea(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && bs(n.ownerDocument.documentElement, n)) {
      if (r !== null && fu(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var o = n.textContent.length, u = Math.min(r.start, o);
          r = r.end === void 0 ? u : Math.min(r.end, o), !e.extend && u > r && (o = r, r = u, u = o), o = qs(n, u);
          var a = qs(
            n,
            r
          );
          o && a && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), u > r ? (e.addRange(t), e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var tp = g && "documentMode" in document && 11 >= document.documentMode, Bn = null, du = null, Pr = null, pu = !1;
  function ta(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    pu || Bn == null || Bn !== ll(r) || (r = Bn, "selectionStart" in r && fu(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Pr && Cr(Pr, r) || (Pr = r, r = Cl(du, "onSelect"), 0 < r.length && (t = new ru("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Bn)));
  }
  function Sl(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Hn = { animationend: Sl("Animation", "AnimationEnd"), animationiteration: Sl("Animation", "AnimationIteration"), animationstart: Sl("Animation", "AnimationStart"), transitionend: Sl("Transition", "TransitionEnd") }, mu = {}, na = {};
  g && (na = document.createElement("div").style, "AnimationEvent" in window || (delete Hn.animationend.animation, delete Hn.animationiteration.animation, delete Hn.animationstart.animation), "TransitionEvent" in window || delete Hn.transitionend.transition);
  function El(e) {
    if (mu[e]) return mu[e];
    if (!Hn[e]) return e;
    var t = Hn[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in na) return mu[e] = t[n];
    return e;
  }
  var ra = El("animationend"), la = El("animationiteration"), oa = El("animationstart"), ua = El("transitionend"), ia = /* @__PURE__ */ new Map(), sa = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Jt(e, t) {
    ia.set(e, t), v(t, [e]);
  }
  for (var hu = 0; hu < sa.length; hu++) {
    var vu = sa[hu], np = vu.toLowerCase(), rp = vu[0].toUpperCase() + vu.slice(1);
    Jt(np, "on" + rp);
  }
  Jt(ra, "onAnimationEnd"), Jt(la, "onAnimationIteration"), Jt(oa, "onAnimationStart"), Jt("dblclick", "onDoubleClick"), Jt("focusin", "onFocus"), Jt("focusout", "onBlur"), Jt(ua, "onTransitionEnd"), _("onMouseEnter", ["mouseout", "mouseover"]), _("onMouseLeave", ["mouseout", "mouseover"]), _("onPointerEnter", ["pointerout", "pointerover"]), _("onPointerLeave", ["pointerout", "pointerover"]), v("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), v("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), v("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), v("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), v("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), v("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Nr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), lp = new Set("cancel close invalid load scroll toggle".split(" ").concat(Nr));
  function aa(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, nd(r, t, void 0, e), e.currentTarget = null;
  }
  function ca(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], o = r.event;
      r = r.listeners;
      e: {
        var u = void 0;
        if (t) for (var a = r.length - 1; 0 <= a; a--) {
          var f = r[a], p = f.instance, S = f.currentTarget;
          if (f = f.listener, p !== u && o.isPropagationStopped()) break e;
          aa(o, f, S), u = p;
        }
        else for (a = 0; a < r.length; a++) {
          if (f = r[a], p = f.instance, S = f.currentTarget, f = f.listener, p !== u && o.isPropagationStopped()) break e;
          aa(o, f, S), u = p;
        }
      }
    }
    if (il) throw e = Yo, il = !1, Yo = null, e;
  }
  function we(e, t) {
    var n = t[xu];
    n === void 0 && (n = t[xu] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (fa(t, e, 2, !1), n.add(r));
  }
  function yu(e, t, n) {
    var r = 0;
    t && (r |= 4), fa(n, e, r, t);
  }
  var xl = "_reactListening" + Math.random().toString(36).slice(2);
  function Tr(e) {
    if (!e[xl]) {
      e[xl] = !0, c.forEach(function(n) {
        n !== "selectionchange" && (lp.has(n) || yu(n, !1, e), yu(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[xl] || (t[xl] = !0, yu("selectionchange", !1, t));
    }
  }
  function fa(e, t, n, r) {
    switch ($s(t)) {
      case 1:
        var o = gd;
        break;
      case 4:
        o = wd;
        break;
      default:
        o = eu;
    }
    n = o.bind(null, t, n, e), o = void 0, !Ko || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
  }
  function gu(e, t, n, r, o) {
    var u = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null) e: for (; ; ) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var f = r.stateNode.containerInfo;
        if (f === o || f.nodeType === 8 && f.parentNode === o) break;
        if (a === 4) for (a = r.return; a !== null; ) {
          var p = a.tag;
          if ((p === 3 || p === 4) && (p = a.stateNode.containerInfo, p === o || p.nodeType === 8 && p.parentNode === o)) return;
          a = a.return;
        }
        for (; f !== null; ) {
          if (a = yn(f), a === null) return;
          if (p = a.tag, p === 5 || p === 6) {
            r = u = a;
            continue e;
          }
          f = f.parentNode;
        }
      }
      r = r.return;
    }
    vs(function() {
      var S = u, N = Vo(n), R = [];
      e: {
        var P = ia.get(e);
        if (P !== void 0) {
          var B = ru, V = e;
          switch (e) {
            case "keypress":
              if (gl(n) === 0) break e;
            case "keydown":
            case "keyup":
              B = $d;
              break;
            case "focusin":
              V = "focus", B = uu;
              break;
            case "focusout":
              V = "blur", B = uu;
              break;
            case "beforeblur":
            case "afterblur":
              B = uu;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              B = Ms;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              B = Sd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              B = Md;
              break;
            case ra:
            case la:
            case oa:
              B = Cd;
              break;
            case ua:
              B = Ad;
              break;
            case "scroll":
              B = _d;
              break;
            case "wheel":
              B = Bd;
              break;
            case "copy":
            case "cut":
            case "paste":
              B = Nd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              B = As;
          }
          var W = (t & 4) !== 0, Ne = !W && e === "scroll", w = W ? P !== null ? P + "Capture" : null : P;
          W = [];
          for (var h = S, k; h !== null; ) {
            k = h;
            var z = k.stateNode;
            if (k.tag === 5 && z !== null && (k = z, w !== null && (z = cr(h, w), z != null && W.push(Lr(h, z, k)))), Ne) break;
            h = h.return;
          }
          0 < W.length && (P = new B(P, V, null, n, N), R.push({ event: P, listeners: W }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (P = e === "mouseover" || e === "pointerover", B = e === "mouseout" || e === "pointerout", P && n !== Ho && (V = n.relatedTarget || n.fromElement) && (yn(V) || V[Ft])) break e;
          if ((B || P) && (P = N.window === N ? N : (P = N.ownerDocument) ? P.defaultView || P.parentWindow : window, B ? (V = n.relatedTarget || n.toElement, B = S, V = V ? yn(V) : null, V !== null && (Ne = vn(V), V !== Ne || V.tag !== 5 && V.tag !== 6) && (V = null)) : (B = null, V = S), B !== V)) {
            if (W = Ms, z = "onMouseLeave", w = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (W = As, z = "onPointerLeave", w = "onPointerEnter", h = "pointer"), Ne = B == null ? P : Qn(B), k = V == null ? P : Qn(V), P = new W(z, h + "leave", B, n, N), P.target = Ne, P.relatedTarget = k, z = null, yn(N) === S && (W = new W(w, h + "enter", V, n, N), W.target = k, W.relatedTarget = Ne, z = W), Ne = z, B && V) t: {
              for (W = B, w = V, h = 0, k = W; k; k = Vn(k)) h++;
              for (k = 0, z = w; z; z = Vn(z)) k++;
              for (; 0 < h - k; ) W = Vn(W), h--;
              for (; 0 < k - h; ) w = Vn(w), k--;
              for (; h--; ) {
                if (W === w || w !== null && W === w.alternate) break t;
                W = Vn(W), w = Vn(w);
              }
              W = null;
            }
            else W = null;
            B !== null && da(R, P, B, W, !1), V !== null && Ne !== null && da(R, Ne, V, W, !0);
          }
        }
        e: {
          if (P = S ? Qn(S) : window, B = P.nodeName && P.nodeName.toLowerCase(), B === "select" || B === "input" && P.type === "file") var Q = Xd;
          else if (Qs(P)) if (Ys) Q = qd;
          else {
            Q = Zd;
            var X = Gd;
          }
          else (B = P.nodeName) && B.toLowerCase() === "input" && (P.type === "checkbox" || P.type === "radio") && (Q = Jd);
          if (Q && (Q = Q(e, S))) {
            Ks(R, Q, n, N);
            break e;
          }
          X && X(e, P, S), e === "focusout" && (X = P._wrapperState) && X.controlled && P.type === "number" && Mo(P, "number", P.value);
        }
        switch (X = S ? Qn(S) : window, e) {
          case "focusin":
            (Qs(X) || X.contentEditable === "true") && (Bn = X, du = S, Pr = null);
            break;
          case "focusout":
            Pr = du = Bn = null;
            break;
          case "mousedown":
            pu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            pu = !1, ta(R, n, N);
            break;
          case "selectionchange":
            if (tp) break;
          case "keydown":
          case "keyup":
            ta(R, n, N);
        }
        var G;
        if (su) e: {
          switch (e) {
            case "compositionstart":
              var b = "onCompositionStart";
              break e;
            case "compositionend":
              b = "onCompositionEnd";
              break e;
            case "compositionupdate":
              b = "onCompositionUpdate";
              break e;
          }
          b = void 0;
        }
        else Un ? Vs(e, n) && (b = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (b = "onCompositionStart");
        b && (Us && n.locale !== "ko" && (Un || b !== "onCompositionStart" ? b === "onCompositionEnd" && Un && (G = js()) : (Zt = N, nu = "value" in Zt ? Zt.value : Zt.textContent, Un = !0)), X = Cl(S, b), 0 < X.length && (b = new Is(b, e, null, n, N), R.push({ event: b, listeners: X }), G ? b.data = G : (G = Ws(n), G !== null && (b.data = G)))), (G = Vd ? Wd(e, n) : Qd(e, n)) && (S = Cl(S, "onBeforeInput"), 0 < S.length && (N = new Is("onBeforeInput", "beforeinput", null, n, N), R.push({ event: N, listeners: S }), N.data = G));
      }
      ca(R, t);
    });
  }
  function Lr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Cl(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var o = e, u = o.stateNode;
      o.tag === 5 && u !== null && (o = u, u = cr(e, n), u != null && r.unshift(Lr(e, u, o)), u = cr(e, t), u != null && r.push(Lr(e, u, o))), e = e.return;
    }
    return r;
  }
  function Vn(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function da(e, t, n, r, o) {
    for (var u = t._reactName, a = []; n !== null && n !== r; ) {
      var f = n, p = f.alternate, S = f.stateNode;
      if (p !== null && p === r) break;
      f.tag === 5 && S !== null && (f = S, o ? (p = cr(n, u), p != null && a.unshift(Lr(n, p, f))) : o || (p = cr(n, u), p != null && a.push(Lr(n, p, f)))), n = n.return;
    }
    a.length !== 0 && e.push({ event: t, listeners: a });
  }
  var op = /\r\n?/g, up = /\u0000|\uFFFD/g;
  function pa(e) {
    return (typeof e == "string" ? e : "" + e).replace(op, `
`).replace(up, "");
  }
  function Pl(e, t, n) {
    if (t = pa(t), pa(e) !== t && n) throw Error(i(425));
  }
  function Nl() {
  }
  var wu = null, _u = null;
  function ku(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Su = typeof setTimeout == "function" ? setTimeout : void 0, ip = typeof clearTimeout == "function" ? clearTimeout : void 0, ma = typeof Promise == "function" ? Promise : void 0, sp = typeof queueMicrotask == "function" ? queueMicrotask : typeof ma < "u" ? function(e) {
    return ma.resolve(null).then(e).catch(ap);
  } : Su;
  function ap(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Eu(e, t) {
    var n = t, r = 0;
    do {
      var o = n.nextSibling;
      if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
        if (r === 0) {
          e.removeChild(o), wr(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = o;
    } while (n);
    wr(t);
  }
  function qt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function ha(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Wn = Math.random().toString(36).slice(2), Pt = "__reactFiber$" + Wn, Rr = "__reactProps$" + Wn, Ft = "__reactContainer$" + Wn, xu = "__reactEvents$" + Wn, cp = "__reactListeners$" + Wn, fp = "__reactHandles$" + Wn;
  function yn(e) {
    var t = e[Pt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Ft] || n[Pt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = ha(e); e !== null; ) {
          if (n = e[Pt]) return n;
          e = ha(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Or(e) {
    return e = e[Pt] || e[Ft], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Qn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(i(33));
  }
  function Tl(e) {
    return e[Rr] || null;
  }
  var Cu = [], Kn = -1;
  function bt(e) {
    return { current: e };
  }
  function _e(e) {
    0 > Kn || (e.current = Cu[Kn], Cu[Kn] = null, Kn--);
  }
  function ve(e, t) {
    Kn++, Cu[Kn] = e.current, e.current = t;
  }
  var en = {}, Be = bt(en), Xe = bt(!1), gn = en;
  function Yn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return en;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var o = {}, u;
    for (u in n) o[u] = t[u];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
  }
  function Ge(e) {
    return e = e.childContextTypes, e != null;
  }
  function Ll() {
    _e(Xe), _e(Be);
  }
  function va(e, t, n) {
    if (Be.current !== en) throw Error(i(168));
    ve(Be, t), ve(Xe, n);
  }
  function ya(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var o in r) if (!(o in t)) throw Error(i(108, fe(e) || "Unknown", o));
    return A({}, n, r);
  }
  function Rl(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || en, gn = Be.current, ve(Be, e), ve(Xe, Xe.current), !0;
  }
  function ga(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(i(169));
    n ? (e = ya(e, t, gn), r.__reactInternalMemoizedMergedChildContext = e, _e(Xe), _e(Be), ve(Be, e)) : _e(Xe), ve(Xe, n);
  }
  var $t = null, Ol = !1, Pu = !1;
  function wa(e) {
    $t === null ? $t = [e] : $t.push(e);
  }
  function dp(e) {
    Ol = !0, wa(e);
  }
  function tn() {
    if (!Pu && $t !== null) {
      Pu = !0;
      var e = 0, t = pe;
      try {
        var n = $t;
        for (pe = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        $t = null, Ol = !1;
      } catch (o) {
        throw $t !== null && ($t = $t.slice(e + 1)), ks(Xo, tn), o;
      } finally {
        pe = t, Pu = !1;
      }
    }
    return null;
  }
  var Xn = [], Gn = 0, zl = null, Fl = 0, at = [], ct = 0, wn = null, jt = 1, Dt = "";
  function _n(e, t) {
    Xn[Gn++] = Fl, Xn[Gn++] = zl, zl = e, Fl = t;
  }
  function _a(e, t, n) {
    at[ct++] = jt, at[ct++] = Dt, at[ct++] = wn, wn = e;
    var r = jt;
    e = Dt;
    var o = 32 - yt(r) - 1;
    r &= ~(1 << o), n += 1;
    var u = 32 - yt(t) + o;
    if (30 < u) {
      var a = o - o % 5;
      u = (r & (1 << a) - 1).toString(32), r >>= a, o -= a, jt = 1 << 32 - yt(t) + o | n << o | r, Dt = u + e;
    } else jt = 1 << u | n << o | r, Dt = e;
  }
  function Nu(e) {
    e.return !== null && (_n(e, 1), _a(e, 1, 0));
  }
  function Tu(e) {
    for (; e === zl; ) zl = Xn[--Gn], Xn[Gn] = null, Fl = Xn[--Gn], Xn[Gn] = null;
    for (; e === wn; ) wn = at[--ct], at[ct] = null, Dt = at[--ct], at[ct] = null, jt = at[--ct], at[ct] = null;
  }
  var ot = null, ut = null, Se = !1, wt = null;
  function ka(e, t) {
    var n = mt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function Sa(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ot = e, ut = qt(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ot = e, ut = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = wn !== null ? { id: jt, overflow: Dt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = mt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ot = e, ut = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Lu(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Ru(e) {
    if (Se) {
      var t = ut;
      if (t) {
        var n = t;
        if (!Sa(e, t)) {
          if (Lu(e)) throw Error(i(418));
          t = qt(n.nextSibling);
          var r = ot;
          t && Sa(e, t) ? ka(r, n) : (e.flags = e.flags & -4097 | 2, Se = !1, ot = e);
        }
      } else {
        if (Lu(e)) throw Error(i(418));
        e.flags = e.flags & -4097 | 2, Se = !1, ot = e;
      }
    }
  }
  function Ea(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    ot = e;
  }
  function $l(e) {
    if (e !== ot) return !1;
    if (!Se) return Ea(e), Se = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ku(e.type, e.memoizedProps)), t && (t = ut)) {
      if (Lu(e)) throw xa(), Error(i(418));
      for (; t; ) ka(e, t), t = qt(t.nextSibling);
    }
    if (Ea(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(i(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                ut = qt(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        ut = null;
      }
    } else ut = ot ? qt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function xa() {
    for (var e = ut; e; ) e = qt(e.nextSibling);
  }
  function Zn() {
    ut = ot = null, Se = !1;
  }
  function Ou(e) {
    wt === null ? wt = [e] : wt.push(e);
  }
  var pp = I.ReactCurrentBatchConfig;
  function zr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(i(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(i(147, e));
        var o = r, u = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === u ? t.ref : (t = function(a) {
          var f = o.refs;
          a === null ? delete f[u] : f[u] = a;
        }, t._stringRef = u, t);
      }
      if (typeof e != "string") throw Error(i(284));
      if (!n._owner) throw Error(i(290, e));
    }
    return e;
  }
  function jl(e, t) {
    throw e = Object.prototype.toString.call(t), Error(i(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Ca(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Pa(e) {
    function t(w, h) {
      if (e) {
        var k = w.deletions;
        k === null ? (w.deletions = [h], w.flags |= 16) : k.push(h);
      }
    }
    function n(w, h) {
      if (!e) return null;
      for (; h !== null; ) t(w, h), h = h.sibling;
      return null;
    }
    function r(w, h) {
      for (w = /* @__PURE__ */ new Map(); h !== null; ) h.key !== null ? w.set(h.key, h) : w.set(h.index, h), h = h.sibling;
      return w;
    }
    function o(w, h) {
      return w = cn(w, h), w.index = 0, w.sibling = null, w;
    }
    function u(w, h, k) {
      return w.index = k, e ? (k = w.alternate, k !== null ? (k = k.index, k < h ? (w.flags |= 2, h) : k) : (w.flags |= 2, h)) : (w.flags |= 1048576, h);
    }
    function a(w) {
      return e && w.alternate === null && (w.flags |= 2), w;
    }
    function f(w, h, k, z) {
      return h === null || h.tag !== 6 ? (h = Si(k, w.mode, z), h.return = w, h) : (h = o(h, k), h.return = w, h);
    }
    function p(w, h, k, z) {
      var Q = k.type;
      return Q === ue ? N(w, h, k.props.children, z, k.key) : h !== null && (h.elementType === Q || typeof Q == "object" && Q !== null && Q.$$typeof === ze && Ca(Q) === h.type) ? (z = o(h, k.props), z.ref = zr(w, h, k), z.return = w, z) : (z = oo(k.type, k.key, k.props, null, w.mode, z), z.ref = zr(w, h, k), z.return = w, z);
    }
    function S(w, h, k, z) {
      return h === null || h.tag !== 4 || h.stateNode.containerInfo !== k.containerInfo || h.stateNode.implementation !== k.implementation ? (h = Ei(k, w.mode, z), h.return = w, h) : (h = o(h, k.children || []), h.return = w, h);
    }
    function N(w, h, k, z, Q) {
      return h === null || h.tag !== 7 ? (h = Tn(k, w.mode, z, Q), h.return = w, h) : (h = o(h, k), h.return = w, h);
    }
    function R(w, h, k) {
      if (typeof h == "string" && h !== "" || typeof h == "number") return h = Si("" + h, w.mode, k), h.return = w, h;
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case K:
            return k = oo(h.type, h.key, h.props, null, w.mode, k), k.ref = zr(w, null, h), k.return = w, k;
          case ne:
            return h = Ei(h, w.mode, k), h.return = w, h;
          case ze:
            var z = h._init;
            return R(w, z(h._payload), k);
        }
        if (ir(h) || Y(h)) return h = Tn(h, w.mode, k, null), h.return = w, h;
        jl(w, h);
      }
      return null;
    }
    function P(w, h, k, z) {
      var Q = h !== null ? h.key : null;
      if (typeof k == "string" && k !== "" || typeof k == "number") return Q !== null ? null : f(w, h, "" + k, z);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case K:
            return k.key === Q ? p(w, h, k, z) : null;
          case ne:
            return k.key === Q ? S(w, h, k, z) : null;
          case ze:
            return Q = k._init, P(
              w,
              h,
              Q(k._payload),
              z
            );
        }
        if (ir(k) || Y(k)) return Q !== null ? null : N(w, h, k, z, null);
        jl(w, k);
      }
      return null;
    }
    function B(w, h, k, z, Q) {
      if (typeof z == "string" && z !== "" || typeof z == "number") return w = w.get(k) || null, f(h, w, "" + z, Q);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case K:
            return w = w.get(z.key === null ? k : z.key) || null, p(h, w, z, Q);
          case ne:
            return w = w.get(z.key === null ? k : z.key) || null, S(h, w, z, Q);
          case ze:
            var X = z._init;
            return B(w, h, k, X(z._payload), Q);
        }
        if (ir(z) || Y(z)) return w = w.get(k) || null, N(h, w, z, Q, null);
        jl(h, z);
      }
      return null;
    }
    function V(w, h, k, z) {
      for (var Q = null, X = null, G = h, b = h = 0, je = null; G !== null && b < k.length; b++) {
        G.index > b ? (je = G, G = null) : je = G.sibling;
        var ce = P(w, G, k[b], z);
        if (ce === null) {
          G === null && (G = je);
          break;
        }
        e && G && ce.alternate === null && t(w, G), h = u(ce, h, b), X === null ? Q = ce : X.sibling = ce, X = ce, G = je;
      }
      if (b === k.length) return n(w, G), Se && _n(w, b), Q;
      if (G === null) {
        for (; b < k.length; b++) G = R(w, k[b], z), G !== null && (h = u(G, h, b), X === null ? Q = G : X.sibling = G, X = G);
        return Se && _n(w, b), Q;
      }
      for (G = r(w, G); b < k.length; b++) je = B(G, w, b, k[b], z), je !== null && (e && je.alternate !== null && G.delete(je.key === null ? b : je.key), h = u(je, h, b), X === null ? Q = je : X.sibling = je, X = je);
      return e && G.forEach(function(fn) {
        return t(w, fn);
      }), Se && _n(w, b), Q;
    }
    function W(w, h, k, z) {
      var Q = Y(k);
      if (typeof Q != "function") throw Error(i(150));
      if (k = Q.call(k), k == null) throw Error(i(151));
      for (var X = Q = null, G = h, b = h = 0, je = null, ce = k.next(); G !== null && !ce.done; b++, ce = k.next()) {
        G.index > b ? (je = G, G = null) : je = G.sibling;
        var fn = P(w, G, ce.value, z);
        if (fn === null) {
          G === null && (G = je);
          break;
        }
        e && G && fn.alternate === null && t(w, G), h = u(fn, h, b), X === null ? Q = fn : X.sibling = fn, X = fn, G = je;
      }
      if (ce.done) return n(
        w,
        G
      ), Se && _n(w, b), Q;
      if (G === null) {
        for (; !ce.done; b++, ce = k.next()) ce = R(w, ce.value, z), ce !== null && (h = u(ce, h, b), X === null ? Q = ce : X.sibling = ce, X = ce);
        return Se && _n(w, b), Q;
      }
      for (G = r(w, G); !ce.done; b++, ce = k.next()) ce = B(G, w, b, ce.value, z), ce !== null && (e && ce.alternate !== null && G.delete(ce.key === null ? b : ce.key), h = u(ce, h, b), X === null ? Q = ce : X.sibling = ce, X = ce);
      return e && G.forEach(function(Kp) {
        return t(w, Kp);
      }), Se && _n(w, b), Q;
    }
    function Ne(w, h, k, z) {
      if (typeof k == "object" && k !== null && k.type === ue && k.key === null && (k = k.props.children), typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case K:
            e: {
              for (var Q = k.key, X = h; X !== null; ) {
                if (X.key === Q) {
                  if (Q = k.type, Q === ue) {
                    if (X.tag === 7) {
                      n(w, X.sibling), h = o(X, k.props.children), h.return = w, w = h;
                      break e;
                    }
                  } else if (X.elementType === Q || typeof Q == "object" && Q !== null && Q.$$typeof === ze && Ca(Q) === X.type) {
                    n(w, X.sibling), h = o(X, k.props), h.ref = zr(w, X, k), h.return = w, w = h;
                    break e;
                  }
                  n(w, X);
                  break;
                } else t(w, X);
                X = X.sibling;
              }
              k.type === ue ? (h = Tn(k.props.children, w.mode, z, k.key), h.return = w, w = h) : (z = oo(k.type, k.key, k.props, null, w.mode, z), z.ref = zr(w, h, k), z.return = w, w = z);
            }
            return a(w);
          case ne:
            e: {
              for (X = k.key; h !== null; ) {
                if (h.key === X) if (h.tag === 4 && h.stateNode.containerInfo === k.containerInfo && h.stateNode.implementation === k.implementation) {
                  n(w, h.sibling), h = o(h, k.children || []), h.return = w, w = h;
                  break e;
                } else {
                  n(w, h);
                  break;
                }
                else t(w, h);
                h = h.sibling;
              }
              h = Ei(k, w.mode, z), h.return = w, w = h;
            }
            return a(w);
          case ze:
            return X = k._init, Ne(w, h, X(k._payload), z);
        }
        if (ir(k)) return V(w, h, k, z);
        if (Y(k)) return W(w, h, k, z);
        jl(w, k);
      }
      return typeof k == "string" && k !== "" || typeof k == "number" ? (k = "" + k, h !== null && h.tag === 6 ? (n(w, h.sibling), h = o(h, k), h.return = w, w = h) : (n(w, h), h = Si(k, w.mode, z), h.return = w, w = h), a(w)) : n(w, h);
    }
    return Ne;
  }
  var Jn = Pa(!0), Na = Pa(!1), Dl = bt(null), Ml = null, qn = null, zu = null;
  function Fu() {
    zu = qn = Ml = null;
  }
  function $u(e) {
    var t = Dl.current;
    _e(Dl), e._currentValue = t;
  }
  function ju(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function bn(e, t) {
    Ml = e, zu = qn = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Ze = !0), e.firstContext = null);
  }
  function ft(e) {
    var t = e._currentValue;
    if (zu !== e) if (e = { context: e, memoizedValue: t, next: null }, qn === null) {
      if (Ml === null) throw Error(i(308));
      qn = e, Ml.dependencies = { lanes: 0, firstContext: e };
    } else qn = qn.next = e;
    return t;
  }
  var kn = null;
  function Du(e) {
    kn === null ? kn = [e] : kn.push(e);
  }
  function Ta(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n, Du(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Mt(e, r);
  }
  function Mt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var nn = !1;
  function Mu(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function La(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function It(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function rn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (ae & 2) !== 0) {
      var o = r.pending;
      return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Mt(e, n);
    }
    return o = r.interleaved, o === null ? (t.next = t, Du(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Mt(e, n);
  }
  function Il(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Jo(e, n);
    }
  }
  function Ra(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var o = null, u = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var a = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          u === null ? o = u = a : u = u.next = a, n = n.next;
        } while (n !== null);
        u === null ? o = u = t : u = u.next = t;
      } else o = u = t;
      n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: u, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function Al(e, t, n, r) {
    var o = e.updateQueue;
    nn = !1;
    var u = o.firstBaseUpdate, a = o.lastBaseUpdate, f = o.shared.pending;
    if (f !== null) {
      o.shared.pending = null;
      var p = f, S = p.next;
      p.next = null, a === null ? u = S : a.next = S, a = p;
      var N = e.alternate;
      N !== null && (N = N.updateQueue, f = N.lastBaseUpdate, f !== a && (f === null ? N.firstBaseUpdate = S : f.next = S, N.lastBaseUpdate = p));
    }
    if (u !== null) {
      var R = o.baseState;
      a = 0, N = S = p = null, f = u;
      do {
        var P = f.lane, B = f.eventTime;
        if ((r & P) === P) {
          N !== null && (N = N.next = {
            eventTime: B,
            lane: 0,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null
          });
          e: {
            var V = e, W = f;
            switch (P = t, B = n, W.tag) {
              case 1:
                if (V = W.payload, typeof V == "function") {
                  R = V.call(B, R, P);
                  break e;
                }
                R = V;
                break e;
              case 3:
                V.flags = V.flags & -65537 | 128;
              case 0:
                if (V = W.payload, P = typeof V == "function" ? V.call(B, R, P) : V, P == null) break e;
                R = A({}, R, P);
                break e;
              case 2:
                nn = !0;
            }
          }
          f.callback !== null && f.lane !== 0 && (e.flags |= 64, P = o.effects, P === null ? o.effects = [f] : P.push(f));
        } else B = { eventTime: B, lane: P, tag: f.tag, payload: f.payload, callback: f.callback, next: null }, N === null ? (S = N = B, p = R) : N = N.next = B, a |= P;
        if (f = f.next, f === null) {
          if (f = o.shared.pending, f === null) break;
          P = f, f = P.next, P.next = null, o.lastBaseUpdate = P, o.shared.pending = null;
        }
      } while (!0);
      if (N === null && (p = R), o.baseState = p, o.firstBaseUpdate = S, o.lastBaseUpdate = N, t = o.shared.interleaved, t !== null) {
        o = t;
        do
          a |= o.lane, o = o.next;
        while (o !== t);
      } else u === null && (o.shared.lanes = 0);
      xn |= a, e.lanes = a, e.memoizedState = R;
    }
  }
  function Oa(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], o = r.callback;
      if (o !== null) {
        if (r.callback = null, r = n, typeof o != "function") throw Error(i(191, o));
        o.call(r);
      }
    }
  }
  var Fr = {}, Nt = bt(Fr), $r = bt(Fr), jr = bt(Fr);
  function Sn(e) {
    if (e === Fr) throw Error(i(174));
    return e;
  }
  function Iu(e, t) {
    switch (ve(jr, t), ve($r, e), ve(Nt, Fr), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ao(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ao(t, e);
    }
    _e(Nt), ve(Nt, t);
  }
  function er() {
    _e(Nt), _e($r), _e(jr);
  }
  function za(e) {
    Sn(jr.current);
    var t = Sn(Nt.current), n = Ao(t, e.type);
    t !== n && (ve($r, e), ve(Nt, n));
  }
  function Au(e) {
    $r.current === e && (_e(Nt), _e($r));
  }
  var Ee = bt(0);
  function Ul(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Uu = [];
  function Bu() {
    for (var e = 0; e < Uu.length; e++) Uu[e]._workInProgressVersionPrimary = null;
    Uu.length = 0;
  }
  var Bl = I.ReactCurrentDispatcher, Hu = I.ReactCurrentBatchConfig, En = 0, xe = null, Re = null, Fe = null, Hl = !1, Dr = !1, Mr = 0, mp = 0;
  function He() {
    throw Error(i(321));
  }
  function Vu(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!gt(e[n], t[n])) return !1;
    return !0;
  }
  function Wu(e, t, n, r, o, u) {
    if (En = u, xe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Bl.current = e === null || e.memoizedState === null ? gp : wp, e = n(r, o), Dr) {
      u = 0;
      do {
        if (Dr = !1, Mr = 0, 25 <= u) throw Error(i(301));
        u += 1, Fe = Re = null, t.updateQueue = null, Bl.current = _p, e = n(r, o);
      } while (Dr);
    }
    if (Bl.current = Ql, t = Re !== null && Re.next !== null, En = 0, Fe = Re = xe = null, Hl = !1, t) throw Error(i(300));
    return e;
  }
  function Qu() {
    var e = Mr !== 0;
    return Mr = 0, e;
  }
  function Tt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Fe === null ? xe.memoizedState = Fe = e : Fe = Fe.next = e, Fe;
  }
  function dt() {
    if (Re === null) {
      var e = xe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Re.next;
    var t = Fe === null ? xe.memoizedState : Fe.next;
    if (t !== null) Fe = t, Re = e;
    else {
      if (e === null) throw Error(i(310));
      Re = e, e = { memoizedState: Re.memoizedState, baseState: Re.baseState, baseQueue: Re.baseQueue, queue: Re.queue, next: null }, Fe === null ? xe.memoizedState = Fe = e : Fe = Fe.next = e;
    }
    return Fe;
  }
  function Ir(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ku(e) {
    var t = dt(), n = t.queue;
    if (n === null) throw Error(i(311));
    n.lastRenderedReducer = e;
    var r = Re, o = r.baseQueue, u = n.pending;
    if (u !== null) {
      if (o !== null) {
        var a = o.next;
        o.next = u.next, u.next = a;
      }
      r.baseQueue = o = u, n.pending = null;
    }
    if (o !== null) {
      u = o.next, r = r.baseState;
      var f = a = null, p = null, S = u;
      do {
        var N = S.lane;
        if ((En & N) === N) p !== null && (p = p.next = { lane: 0, action: S.action, hasEagerState: S.hasEagerState, eagerState: S.eagerState, next: null }), r = S.hasEagerState ? S.eagerState : e(r, S.action);
        else {
          var R = {
            lane: N,
            action: S.action,
            hasEagerState: S.hasEagerState,
            eagerState: S.eagerState,
            next: null
          };
          p === null ? (f = p = R, a = r) : p = p.next = R, xe.lanes |= N, xn |= N;
        }
        S = S.next;
      } while (S !== null && S !== u);
      p === null ? a = r : p.next = f, gt(r, t.memoizedState) || (Ze = !0), t.memoizedState = r, t.baseState = a, t.baseQueue = p, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      o = e;
      do
        u = o.lane, xe.lanes |= u, xn |= u, o = o.next;
      while (o !== e);
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Yu(e) {
    var t = dt(), n = t.queue;
    if (n === null) throw Error(i(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, o = n.pending, u = t.memoizedState;
    if (o !== null) {
      n.pending = null;
      var a = o = o.next;
      do
        u = e(u, a.action), a = a.next;
      while (a !== o);
      gt(u, t.memoizedState) || (Ze = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
    }
    return [u, r];
  }
  function Fa() {
  }
  function $a(e, t) {
    var n = xe, r = dt(), o = t(), u = !gt(r.memoizedState, o);
    if (u && (r.memoizedState = o, Ze = !0), r = r.queue, Xu(Ma.bind(null, n, r, e), [e]), r.getSnapshot !== t || u || Fe !== null && Fe.memoizedState.tag & 1) {
      if (n.flags |= 2048, Ar(9, Da.bind(null, n, r, o, t), void 0, null), $e === null) throw Error(i(349));
      (En & 30) !== 0 || ja(n, t, o);
    }
    return o;
  }
  function ja(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = xe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, xe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Da(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Ia(t) && Aa(e);
  }
  function Ma(e, t, n) {
    return n(function() {
      Ia(t) && Aa(e);
    });
  }
  function Ia(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !gt(e, n);
    } catch {
      return !0;
    }
  }
  function Aa(e) {
    var t = Mt(e, 1);
    t !== null && Et(t, e, 1, -1);
  }
  function Ua(e) {
    var t = Tt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ir, lastRenderedState: e }, t.queue = e, e = e.dispatch = yp.bind(null, xe, e), [t.memoizedState, e];
  }
  function Ar(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = xe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, xe.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function Ba() {
    return dt().memoizedState;
  }
  function Vl(e, t, n, r) {
    var o = Tt();
    xe.flags |= e, o.memoizedState = Ar(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function Wl(e, t, n, r) {
    var o = dt();
    r = r === void 0 ? null : r;
    var u = void 0;
    if (Re !== null) {
      var a = Re.memoizedState;
      if (u = a.destroy, r !== null && Vu(r, a.deps)) {
        o.memoizedState = Ar(t, n, u, r);
        return;
      }
    }
    xe.flags |= e, o.memoizedState = Ar(1 | t, n, u, r);
  }
  function Ha(e, t) {
    return Vl(8390656, 8, e, t);
  }
  function Xu(e, t) {
    return Wl(2048, 8, e, t);
  }
  function Va(e, t) {
    return Wl(4, 2, e, t);
  }
  function Wa(e, t) {
    return Wl(4, 4, e, t);
  }
  function Qa(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Ka(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Wl(4, 4, Qa.bind(null, t, e), n);
  }
  function Gu() {
  }
  function Ya(e, t) {
    var n = dt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Vu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function Xa(e, t) {
    var n = dt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Vu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function Ga(e, t, n) {
    return (En & 21) === 0 ? (e.baseState && (e.baseState = !1, Ze = !0), e.memoizedState = n) : (gt(n, t) || (n = Cs(), xe.lanes |= n, xn |= n, e.baseState = !0), t);
  }
  function hp(e, t) {
    var n = pe;
    pe = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Hu.transition;
    Hu.transition = {};
    try {
      e(!1), t();
    } finally {
      pe = n, Hu.transition = r;
    }
  }
  function Za() {
    return dt().memoizedState;
  }
  function vp(e, t, n) {
    var r = sn(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Ja(e)) qa(t, n);
    else if (n = Ta(e, t, n, r), n !== null) {
      var o = Ye();
      Et(n, e, r, o), ba(n, t, r);
    }
  }
  function yp(e, t, n) {
    var r = sn(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Ja(e)) qa(t, o);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
        var a = t.lastRenderedState, f = u(a, n);
        if (o.hasEagerState = !0, o.eagerState = f, gt(f, a)) {
          var p = t.interleaved;
          p === null ? (o.next = o, Du(t)) : (o.next = p.next, p.next = o), t.interleaved = o;
          return;
        }
      } catch {
      }
      n = Ta(e, t, o, r), n !== null && (o = Ye(), Et(n, e, r, o), ba(n, t, r));
    }
  }
  function Ja(e) {
    var t = e.alternate;
    return e === xe || t !== null && t === xe;
  }
  function qa(e, t) {
    Dr = Hl = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function ba(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Jo(e, n);
    }
  }
  var Ql = { readContext: ft, useCallback: He, useContext: He, useEffect: He, useImperativeHandle: He, useInsertionEffect: He, useLayoutEffect: He, useMemo: He, useReducer: He, useRef: He, useState: He, useDebugValue: He, useDeferredValue: He, useTransition: He, useMutableSource: He, useSyncExternalStore: He, useId: He, unstable_isNewReconciler: !1 }, gp = { readContext: ft, useCallback: function(e, t) {
    return Tt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: ft, useEffect: Ha, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Vl(
      4194308,
      4,
      Qa.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return Vl(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Vl(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = Tt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = Tt();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = vp.bind(null, xe, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = Tt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Ua, useDebugValue: Gu, useDeferredValue: function(e) {
    return Tt().memoizedState = e;
  }, useTransition: function() {
    var e = Ua(!1), t = e[0];
    return e = hp.bind(null, e[1]), Tt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = xe, o = Tt();
    if (Se) {
      if (n === void 0) throw Error(i(407));
      n = n();
    } else {
      if (n = t(), $e === null) throw Error(i(349));
      (En & 30) !== 0 || ja(r, t, n);
    }
    o.memoizedState = n;
    var u = { value: n, getSnapshot: t };
    return o.queue = u, Ha(Ma.bind(
      null,
      r,
      u,
      e
    ), [e]), r.flags |= 2048, Ar(9, Da.bind(null, r, u, n, t), void 0, null), n;
  }, useId: function() {
    var e = Tt(), t = $e.identifierPrefix;
    if (Se) {
      var n = Dt, r = jt;
      n = (r & ~(1 << 32 - yt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Mr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = mp++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, wp = {
    readContext: ft,
    useCallback: Ya,
    useContext: ft,
    useEffect: Xu,
    useImperativeHandle: Ka,
    useInsertionEffect: Va,
    useLayoutEffect: Wa,
    useMemo: Xa,
    useReducer: Ku,
    useRef: Ba,
    useState: function() {
      return Ku(Ir);
    },
    useDebugValue: Gu,
    useDeferredValue: function(e) {
      var t = dt();
      return Ga(t, Re.memoizedState, e);
    },
    useTransition: function() {
      var e = Ku(Ir)[0], t = dt().memoizedState;
      return [e, t];
    },
    useMutableSource: Fa,
    useSyncExternalStore: $a,
    useId: Za,
    unstable_isNewReconciler: !1
  }, _p = { readContext: ft, useCallback: Ya, useContext: ft, useEffect: Xu, useImperativeHandle: Ka, useInsertionEffect: Va, useLayoutEffect: Wa, useMemo: Xa, useReducer: Yu, useRef: Ba, useState: function() {
    return Yu(Ir);
  }, useDebugValue: Gu, useDeferredValue: function(e) {
    var t = dt();
    return Re === null ? t.memoizedState = e : Ga(t, Re.memoizedState, e);
  }, useTransition: function() {
    var e = Yu(Ir)[0], t = dt().memoizedState;
    return [e, t];
  }, useMutableSource: Fa, useSyncExternalStore: $a, useId: Za, unstable_isNewReconciler: !1 };
  function _t(e, t) {
    if (e && e.defaultProps) {
      t = A({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Zu(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : A({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Kl = { isMounted: function(e) {
    return (e = e._reactInternals) ? vn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = Ye(), o = sn(e), u = It(r, o);
    u.payload = t, n != null && (u.callback = n), t = rn(e, u, o), t !== null && (Et(t, e, o, r), Il(t, e, o));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = Ye(), o = sn(e), u = It(r, o);
    u.tag = 1, u.payload = t, n != null && (u.callback = n), t = rn(e, u, o), t !== null && (Et(t, e, o, r), Il(t, e, o));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = Ye(), r = sn(e), o = It(n, r);
    o.tag = 2, t != null && (o.callback = t), t = rn(e, o, r), t !== null && (Et(t, e, r, n), Il(t, e, r));
  } };
  function ec(e, t, n, r, o, u, a) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, u, a) : t.prototype && t.prototype.isPureReactComponent ? !Cr(n, r) || !Cr(o, u) : !0;
  }
  function tc(e, t, n) {
    var r = !1, o = en, u = t.contextType;
    return typeof u == "object" && u !== null ? u = ft(u) : (o = Ge(t) ? gn : Be.current, r = t.contextTypes, u = (r = r != null) ? Yn(e, o) : en), t = new t(n, u), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Kl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = u), t;
  }
  function nc(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Kl.enqueueReplaceState(t, t.state, null);
  }
  function Ju(e, t, n, r) {
    var o = e.stateNode;
    o.props = n, o.state = e.memoizedState, o.refs = {}, Mu(e);
    var u = t.contextType;
    typeof u == "object" && u !== null ? o.context = ft(u) : (u = Ge(t) ? gn : Be.current, o.context = Yn(e, u)), o.state = e.memoizedState, u = t.getDerivedStateFromProps, typeof u == "function" && (Zu(e, t, u, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Kl.enqueueReplaceState(o, o.state, null), Al(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function tr(e, t) {
    try {
      var n = "", r = t;
      do
        n += le(r), r = r.return;
      while (r);
      var o = n;
    } catch (u) {
      o = `
Error generating stack: ` + u.message + `
` + u.stack;
    }
    return { value: e, source: t, stack: o, digest: null };
  }
  function qu(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function bu(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var kp = typeof WeakMap == "function" ? WeakMap : Map;
  function rc(e, t, n) {
    n = It(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      bl || (bl = !0, mi = r), bu(e, t);
    }, n;
  }
  function lc(e, t, n) {
    n = It(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var o = t.value;
      n.payload = function() {
        return r(o);
      }, n.callback = function() {
        bu(e, t);
      };
    }
    var u = e.stateNode;
    return u !== null && typeof u.componentDidCatch == "function" && (n.callback = function() {
      bu(e, t), typeof r != "function" && (on === null ? on = /* @__PURE__ */ new Set([this]) : on.add(this));
      var a = t.stack;
      this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" });
    }), n;
  }
  function oc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new kp();
      var o = /* @__PURE__ */ new Set();
      r.set(t, o);
    } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
    o.has(n) || (o.add(n), e = jp.bind(null, e, t, n), t.then(e, e));
  }
  function uc(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function ic(e, t, n, r, o) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = It(-1, 1), t.tag = 2, rn(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = o, e);
  }
  var Sp = I.ReactCurrentOwner, Ze = !1;
  function Ke(e, t, n, r) {
    t.child = e === null ? Na(t, null, n, r) : Jn(t, e.child, n, r);
  }
  function sc(e, t, n, r, o) {
    n = n.render;
    var u = t.ref;
    return bn(t, o), r = Wu(e, t, n, r, u, o), n = Qu(), e !== null && !Ze ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, At(e, t, o)) : (Se && n && Nu(t), t.flags |= 1, Ke(e, t, r, o), t.child);
  }
  function ac(e, t, n, r, o) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !ki(u) && u.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = u, cc(e, t, u, r, o)) : (e = oo(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, (e.lanes & o) === 0) {
      var a = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Cr, n(a, r) && e.ref === t.ref) return At(e, t, o);
    }
    return t.flags |= 1, e = cn(u, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function cc(e, t, n, r, o) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Cr(u, r) && e.ref === t.ref) if (Ze = !1, t.pendingProps = r = u, (e.lanes & o) !== 0) (e.flags & 131072) !== 0 && (Ze = !0);
      else return t.lanes = e.lanes, At(e, t, o);
    }
    return ei(e, t, n, r, o);
  }
  function fc(e, t, n) {
    var r = t.pendingProps, o = r.children, u = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ve(rr, it), it |= n;
    else {
      if ((n & 1073741824) === 0) return e = u !== null ? u.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ve(rr, it), it |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = u !== null ? u.baseLanes : n, ve(rr, it), it |= r;
    }
    else u !== null ? (r = u.baseLanes | n, t.memoizedState = null) : r = n, ve(rr, it), it |= r;
    return Ke(e, t, o, n), t.child;
  }
  function dc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function ei(e, t, n, r, o) {
    var u = Ge(n) ? gn : Be.current;
    return u = Yn(t, u), bn(t, o), n = Wu(e, t, n, r, u, o), r = Qu(), e !== null && !Ze ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, At(e, t, o)) : (Se && r && Nu(t), t.flags |= 1, Ke(e, t, n, o), t.child);
  }
  function pc(e, t, n, r, o) {
    if (Ge(n)) {
      var u = !0;
      Rl(t);
    } else u = !1;
    if (bn(t, o), t.stateNode === null) Xl(e, t), tc(t, n, r), Ju(t, n, r, o), r = !0;
    else if (e === null) {
      var a = t.stateNode, f = t.memoizedProps;
      a.props = f;
      var p = a.context, S = n.contextType;
      typeof S == "object" && S !== null ? S = ft(S) : (S = Ge(n) ? gn : Be.current, S = Yn(t, S));
      var N = n.getDerivedStateFromProps, R = typeof N == "function" || typeof a.getSnapshotBeforeUpdate == "function";
      R || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (f !== r || p !== S) && nc(t, a, r, S), nn = !1;
      var P = t.memoizedState;
      a.state = P, Al(t, r, a, o), p = t.memoizedState, f !== r || P !== p || Xe.current || nn ? (typeof N == "function" && (Zu(t, n, N, r), p = t.memoizedState), (f = nn || ec(t, n, f, r, P, p, S)) ? (R || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = p), a.props = r, a.state = p, a.context = S, r = f) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      a = t.stateNode, La(e, t), f = t.memoizedProps, S = t.type === t.elementType ? f : _t(t.type, f), a.props = S, R = t.pendingProps, P = a.context, p = n.contextType, typeof p == "object" && p !== null ? p = ft(p) : (p = Ge(n) ? gn : Be.current, p = Yn(t, p));
      var B = n.getDerivedStateFromProps;
      (N = typeof B == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (f !== R || P !== p) && nc(t, a, r, p), nn = !1, P = t.memoizedState, a.state = P, Al(t, r, a, o);
      var V = t.memoizedState;
      f !== R || P !== V || Xe.current || nn ? (typeof B == "function" && (Zu(t, n, B, r), V = t.memoizedState), (S = nn || ec(t, n, S, r, P, V, p) || !1) ? (N || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, V, p), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, V, p)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || f === e.memoizedProps && P === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && P === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = V), a.props = r, a.state = V, a.context = p, r = S) : (typeof a.componentDidUpdate != "function" || f === e.memoizedProps && P === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && P === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return ti(e, t, n, r, u, o);
  }
  function ti(e, t, n, r, o, u) {
    dc(e, t);
    var a = (t.flags & 128) !== 0;
    if (!r && !a) return o && ga(t, n, !1), At(e, t, u);
    r = t.stateNode, Sp.current = t;
    var f = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && a ? (t.child = Jn(t, e.child, null, u), t.child = Jn(t, null, f, u)) : Ke(e, t, f, u), t.memoizedState = r.state, o && ga(t, n, !0), t.child;
  }
  function mc(e) {
    var t = e.stateNode;
    t.pendingContext ? va(e, t.pendingContext, t.pendingContext !== t.context) : t.context && va(e, t.context, !1), Iu(e, t.containerInfo);
  }
  function hc(e, t, n, r, o) {
    return Zn(), Ou(o), t.flags |= 256, Ke(e, t, n, r), t.child;
  }
  var ni = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ri(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function vc(e, t, n) {
    var r = t.pendingProps, o = Ee.current, u = !1, a = (t.flags & 128) !== 0, f;
    if ((f = a) || (f = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), f ? (u = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), ve(Ee, o & 1), e === null)
      return Ru(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (a = r.children, e = r.fallback, u ? (r = t.mode, u = t.child, a = { mode: "hidden", children: a }, (r & 1) === 0 && u !== null ? (u.childLanes = 0, u.pendingProps = a) : u = uo(a, r, 0, null), e = Tn(e, r, n, null), u.return = t, e.return = t, u.sibling = e, t.child = u, t.child.memoizedState = ri(n), t.memoizedState = ni, e) : li(t, a));
    if (o = e.memoizedState, o !== null && (f = o.dehydrated, f !== null)) return Ep(e, t, a, r, f, o, n);
    if (u) {
      u = r.fallback, a = t.mode, o = e.child, f = o.sibling;
      var p = { mode: "hidden", children: r.children };
      return (a & 1) === 0 && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = p, t.deletions = null) : (r = cn(o, p), r.subtreeFlags = o.subtreeFlags & 14680064), f !== null ? u = cn(f, u) : (u = Tn(u, a, n, null), u.flags |= 2), u.return = t, r.return = t, r.sibling = u, t.child = r, r = u, u = t.child, a = e.child.memoizedState, a = a === null ? ri(n) : { baseLanes: a.baseLanes | n, cachePool: null, transitions: a.transitions }, u.memoizedState = a, u.childLanes = e.childLanes & ~n, t.memoizedState = ni, r;
    }
    return u = e.child, e = u.sibling, r = cn(u, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function li(e, t) {
    return t = uo({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Yl(e, t, n, r) {
    return r !== null && Ou(r), Jn(t, e.child, null, n), e = li(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Ep(e, t, n, r, o, u, a) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = qu(Error(i(422))), Yl(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (u = r.fallback, o = t.mode, r = uo({ mode: "visible", children: r.children }, o, 0, null), u = Tn(u, o, a, null), u.flags |= 2, r.return = t, u.return = t, r.sibling = u, t.child = r, (t.mode & 1) !== 0 && Jn(t, e.child, null, a), t.child.memoizedState = ri(a), t.memoizedState = ni, u);
    if ((t.mode & 1) === 0) return Yl(e, t, a, null);
    if (o.data === "$!") {
      if (r = o.nextSibling && o.nextSibling.dataset, r) var f = r.dgst;
      return r = f, u = Error(i(419)), r = qu(u, r, void 0), Yl(e, t, a, r);
    }
    if (f = (a & e.childLanes) !== 0, Ze || f) {
      if (r = $e, r !== null) {
        switch (a & -a) {
          case 4:
            o = 2;
            break;
          case 16:
            o = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            o = 32;
            break;
          case 536870912:
            o = 268435456;
            break;
          default:
            o = 0;
        }
        o = (o & (r.suspendedLanes | a)) !== 0 ? 0 : o, o !== 0 && o !== u.retryLane && (u.retryLane = o, Mt(e, o), Et(r, e, o, -1));
      }
      return _i(), r = qu(Error(i(421))), Yl(e, t, a, r);
    }
    return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Dp.bind(null, e), o._reactRetry = t, null) : (e = u.treeContext, ut = qt(o.nextSibling), ot = t, Se = !0, wt = null, e !== null && (at[ct++] = jt, at[ct++] = Dt, at[ct++] = wn, jt = e.id, Dt = e.overflow, wn = t), t = li(t, r.children), t.flags |= 4096, t);
  }
  function yc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), ju(e.return, t, n);
  }
  function oi(e, t, n, r, o) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = r, u.tail = n, u.tailMode = o);
  }
  function gc(e, t, n) {
    var r = t.pendingProps, o = r.revealOrder, u = r.tail;
    if (Ke(e, t, r.children, n), r = Ee.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && yc(e, n, t);
        else if (e.tag === 19) yc(e, n, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      r &= 1;
    }
    if (ve(Ee, r), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && Ul(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), oi(t, !1, o, n, u);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && Ul(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        oi(t, !0, n, null, u);
        break;
      case "together":
        oi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Xl(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function At(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), xn |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(i(153));
    if (t.child !== null) {
      for (e = t.child, n = cn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = cn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function xp(e, t, n) {
    switch (t.tag) {
      case 3:
        mc(t), Zn();
        break;
      case 5:
        za(t);
        break;
      case 1:
        Ge(t.type) && Rl(t);
        break;
      case 4:
        Iu(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, o = t.memoizedProps.value;
        ve(Dl, r._currentValue), r._currentValue = o;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (ve(Ee, Ee.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? vc(e, t, n) : (ve(Ee, Ee.current & 1), e = At(e, t, n), e !== null ? e.sibling : null);
        ve(Ee, Ee.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return gc(e, t, n);
          t.flags |= 128;
        }
        if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), ve(Ee, Ee.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, fc(e, t, n);
    }
    return At(e, t, n);
  }
  var wc, ui, _c, kc;
  wc = function(e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  }, ui = function() {
  }, _c = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
      e = t.stateNode, Sn(Nt.current);
      var u = null;
      switch (n) {
        case "input":
          o = jo(e, o), r = jo(e, r), u = [];
          break;
        case "select":
          o = A({}, o, { value: void 0 }), r = A({}, r, { value: void 0 }), u = [];
          break;
        case "textarea":
          o = Io(e, o), r = Io(e, r), u = [];
          break;
        default:
          typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Nl);
      }
      Uo(n, r);
      var a;
      n = null;
      for (S in o) if (!r.hasOwnProperty(S) && o.hasOwnProperty(S) && o[S] != null) if (S === "style") {
        var f = o[S];
        for (a in f) f.hasOwnProperty(a) && (n || (n = {}), n[a] = "");
      } else S !== "dangerouslySetInnerHTML" && S !== "children" && S !== "suppressContentEditableWarning" && S !== "suppressHydrationWarning" && S !== "autoFocus" && (d.hasOwnProperty(S) ? u || (u = []) : (u = u || []).push(S, null));
      for (S in r) {
        var p = r[S];
        if (f = o?.[S], r.hasOwnProperty(S) && p !== f && (p != null || f != null)) if (S === "style") if (f) {
          for (a in f) !f.hasOwnProperty(a) || p && p.hasOwnProperty(a) || (n || (n = {}), n[a] = "");
          for (a in p) p.hasOwnProperty(a) && f[a] !== p[a] && (n || (n = {}), n[a] = p[a]);
        } else n || (u || (u = []), u.push(
          S,
          n
        )), n = p;
        else S === "dangerouslySetInnerHTML" ? (p = p ? p.__html : void 0, f = f ? f.__html : void 0, p != null && f !== p && (u = u || []).push(S, p)) : S === "children" ? typeof p != "string" && typeof p != "number" || (u = u || []).push(S, "" + p) : S !== "suppressContentEditableWarning" && S !== "suppressHydrationWarning" && (d.hasOwnProperty(S) ? (p != null && S === "onScroll" && we("scroll", e), u || f === p || (u = [])) : (u = u || []).push(S, p));
      }
      n && (u = u || []).push("style", n);
      var S = u;
      (t.updateQueue = S) && (t.flags |= 4);
    }
  }, kc = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function Ur(e, t) {
    if (!Se) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
  }
  function Ve(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
    else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function Cp(e, t, n) {
    var r = t.pendingProps;
    switch (Tu(t), t.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ve(t), null;
      case 1:
        return Ge(t.type) && Ll(), Ve(t), null;
      case 3:
        return r = t.stateNode, er(), _e(Xe), _e(Be), Bu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && ($l(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, wt !== null && (yi(wt), wt = null))), ui(e, t), Ve(t), null;
      case 5:
        Au(t);
        var o = Sn(jr.current);
        if (n = t.type, e !== null && t.stateNode != null) _c(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(i(166));
            return Ve(t), null;
          }
          if (e = Sn(Nt.current), $l(t)) {
            r = t.stateNode, n = t.type;
            var u = t.memoizedProps;
            switch (r[Pt] = t, r[Rr] = u, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                we("cancel", r), we("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                we("load", r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Nr.length; o++) we(Nr[o], r);
                break;
              case "source":
                we("error", r);
                break;
              case "img":
              case "image":
              case "link":
                we(
                  "error",
                  r
                ), we("load", r);
                break;
              case "details":
                we("toggle", r);
                break;
              case "input":
                ts(r, u), we("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!u.multiple }, we("invalid", r);
                break;
              case "textarea":
                ls(r, u), we("invalid", r);
            }
            Uo(n, u), o = null;
            for (var a in u) if (u.hasOwnProperty(a)) {
              var f = u[a];
              a === "children" ? typeof f == "string" ? r.textContent !== f && (u.suppressHydrationWarning !== !0 && Pl(r.textContent, f, e), o = ["children", f]) : typeof f == "number" && r.textContent !== "" + f && (u.suppressHydrationWarning !== !0 && Pl(
                r.textContent,
                f,
                e
              ), o = ["children", "" + f]) : d.hasOwnProperty(a) && f != null && a === "onScroll" && we("scroll", r);
            }
            switch (n) {
              case "input":
                rl(r), rs(r, u, !0);
                break;
              case "textarea":
                rl(r), us(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (r.onclick = Nl);
            }
            r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            a = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = is(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, { is: r.is }) : (e = a.createElement(n), n === "select" && (a = e, r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n), e[Pt] = t, e[Rr] = r, wc(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (a = Bo(n, r), n) {
                case "dialog":
                  we("cancel", e), we("close", e), o = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  we("load", e), o = r;
                  break;
                case "video":
                case "audio":
                  for (o = 0; o < Nr.length; o++) we(Nr[o], e);
                  o = r;
                  break;
                case "source":
                  we("error", e), o = r;
                  break;
                case "img":
                case "image":
                case "link":
                  we(
                    "error",
                    e
                  ), we("load", e), o = r;
                  break;
                case "details":
                  we("toggle", e), o = r;
                  break;
                case "input":
                  ts(e, r), o = jo(e, r), we("invalid", e);
                  break;
                case "option":
                  o = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, o = A({}, r, { value: void 0 }), we("invalid", e);
                  break;
                case "textarea":
                  ls(e, r), o = Io(e, r), we("invalid", e);
                  break;
                default:
                  o = r;
              }
              Uo(n, o), f = o;
              for (u in f) if (f.hasOwnProperty(u)) {
                var p = f[u];
                u === "style" ? cs(e, p) : u === "dangerouslySetInnerHTML" ? (p = p ? p.__html : void 0, p != null && ss(e, p)) : u === "children" ? typeof p == "string" ? (n !== "textarea" || p !== "") && sr(e, p) : typeof p == "number" && sr(e, "" + p) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (d.hasOwnProperty(u) ? p != null && u === "onScroll" && we("scroll", e) : p != null && J(e, u, p, a));
              }
              switch (n) {
                case "input":
                  rl(e), rs(e, r, !1);
                  break;
                case "textarea":
                  rl(e), us(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + se(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, u = r.value, u != null ? jn(e, !!r.multiple, u, !1) : r.defaultValue != null && jn(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof o.onClick == "function" && (e.onclick = Nl);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return Ve(t), null;
      case 6:
        if (e && t.stateNode != null) kc(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(i(166));
          if (n = Sn(jr.current), Sn(Nt.current), $l(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[Pt] = t, (u = r.nodeValue !== n) && (e = ot, e !== null)) switch (e.tag) {
              case 3:
                Pl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Pl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            u && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Pt] = t, t.stateNode = r;
        }
        return Ve(t), null;
      case 13:
        if (_e(Ee), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Se && ut !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) xa(), Zn(), t.flags |= 98560, u = !1;
          else if (u = $l(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(i(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(i(317));
              u[Pt] = t;
            } else Zn(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ve(t), u = !1;
          } else wt !== null && (yi(wt), wt = null), u = !0;
          if (!u) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (Ee.current & 1) !== 0 ? Oe === 0 && (Oe = 3) : _i())), t.updateQueue !== null && (t.flags |= 4), Ve(t), null);
      case 4:
        return er(), ui(e, t), e === null && Tr(t.stateNode.containerInfo), Ve(t), null;
      case 10:
        return $u(t.type._context), Ve(t), null;
      case 17:
        return Ge(t.type) && Ll(), Ve(t), null;
      case 19:
        if (_e(Ee), u = t.memoizedState, u === null) return Ve(t), null;
        if (r = (t.flags & 128) !== 0, a = u.rendering, a === null) if (r) Ur(u, !1);
        else {
          if (Oe !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (a = Ul(e), a !== null) {
              for (t.flags |= 128, Ur(u, !1), r = a.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) u = n, e = r, u.flags &= 14680066, a = u.alternate, a === null ? (u.childLanes = 0, u.lanes = e, u.child = null, u.subtreeFlags = 0, u.memoizedProps = null, u.memoizedState = null, u.updateQueue = null, u.dependencies = null, u.stateNode = null) : (u.childLanes = a.childLanes, u.lanes = a.lanes, u.child = a.child, u.subtreeFlags = 0, u.deletions = null, u.memoizedProps = a.memoizedProps, u.memoizedState = a.memoizedState, u.updateQueue = a.updateQueue, u.type = a.type, e = a.dependencies, u.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return ve(Ee, Ee.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          u.tail !== null && Pe() > lr && (t.flags |= 128, r = !0, Ur(u, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = Ul(a), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Ur(u, !0), u.tail === null && u.tailMode === "hidden" && !a.alternate && !Se) return Ve(t), null;
          } else 2 * Pe() - u.renderingStartTime > lr && n !== 1073741824 && (t.flags |= 128, r = !0, Ur(u, !1), t.lanes = 4194304);
          u.isBackwards ? (a.sibling = t.child, t.child = a) : (n = u.last, n !== null ? n.sibling = a : t.child = a, u.last = a);
        }
        return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = Pe(), t.sibling = null, n = Ee.current, ve(Ee, r ? n & 1 | 2 : n & 1), t) : (Ve(t), null);
      case 22:
      case 23:
        return wi(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (it & 1073741824) !== 0 && (Ve(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ve(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(i(156, t.tag));
  }
  function Pp(e, t) {
    switch (Tu(t), t.tag) {
      case 1:
        return Ge(t.type) && Ll(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return er(), _e(Xe), _e(Be), Bu(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Au(t), null;
      case 13:
        if (_e(Ee), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(i(340));
          Zn();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return _e(Ee), null;
      case 4:
        return er(), null;
      case 10:
        return $u(t.type._context), null;
      case 22:
      case 23:
        return wi(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Gl = !1, We = !1, Np = typeof WeakSet == "function" ? WeakSet : Set, H = null;
  function nr(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      Ce(e, t, r);
    }
    else n.current = null;
  }
  function ii(e, t, n) {
    try {
      n();
    } catch (r) {
      Ce(e, t, r);
    }
  }
  var Sc = !1;
  function Tp(e, t) {
    if (wu = hl, e = ea(), fu(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset, u = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, u.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0, f = -1, p = -1, S = 0, N = 0, R = e, P = null;
          t: for (; ; ) {
            for (var B; R !== n || o !== 0 && R.nodeType !== 3 || (f = a + o), R !== u || r !== 0 && R.nodeType !== 3 || (p = a + r), R.nodeType === 3 && (a += R.nodeValue.length), (B = R.firstChild) !== null; )
              P = R, R = B;
            for (; ; ) {
              if (R === e) break t;
              if (P === n && ++S === o && (f = a), P === u && ++N === r && (p = a), (B = R.nextSibling) !== null) break;
              R = P, P = R.parentNode;
            }
            R = B;
          }
          n = f === -1 || p === -1 ? null : { start: f, end: p };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (_u = { focusedElem: e, selectionRange: n }, hl = !1, H = t; H !== null; ) if (t = H, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, H = e;
    else for (; H !== null; ) {
      t = H;
      try {
        var V = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (V !== null) {
              var W = V.memoizedProps, Ne = V.memoizedState, w = t.stateNode, h = w.getSnapshotBeforeUpdate(t.elementType === t.type ? W : _t(t.type, W), Ne);
              w.__reactInternalSnapshotBeforeUpdate = h;
            }
            break;
          case 3:
            var k = t.stateNode.containerInfo;
            k.nodeType === 1 ? k.textContent = "" : k.nodeType === 9 && k.documentElement && k.removeChild(k.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(i(163));
        }
      } catch (z) {
        Ce(t, t.return, z);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, H = e;
        break;
      }
      H = t.return;
    }
    return V = Sc, Sc = !1, V;
  }
  function Br(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var o = r = r.next;
      do {
        if ((o.tag & e) === e) {
          var u = o.destroy;
          o.destroy = void 0, u !== void 0 && ii(t, n, u);
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function Zl(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var n = t = t.next;
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function si(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      e.tag, e = n, typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function Ec(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Ec(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Pt], delete t[Rr], delete t[xu], delete t[cp], delete t[fp])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function xc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Cc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || xc(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ai(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Nl));
    else if (r !== 4 && (e = e.child, e !== null)) for (ai(e, t, n), e = e.sibling; e !== null; ) ai(e, t, n), e = e.sibling;
  }
  function ci(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (ci(e, t, n), e = e.sibling; e !== null; ) ci(e, t, n), e = e.sibling;
  }
  var Me = null, kt = !1;
  function ln(e, t, n) {
    for (n = n.child; n !== null; ) Pc(e, t, n), n = n.sibling;
  }
  function Pc(e, t, n) {
    if (Ct && typeof Ct.onCommitFiberUnmount == "function") try {
      Ct.onCommitFiberUnmount(al, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        We || nr(n, t);
      case 6:
        var r = Me, o = kt;
        Me = null, ln(e, t, n), Me = r, kt = o, Me !== null && (kt ? (e = Me, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Me.removeChild(n.stateNode));
        break;
      case 18:
        Me !== null && (kt ? (e = Me, n = n.stateNode, e.nodeType === 8 ? Eu(e.parentNode, n) : e.nodeType === 1 && Eu(e, n), wr(e)) : Eu(Me, n.stateNode));
        break;
      case 4:
        r = Me, o = kt, Me = n.stateNode.containerInfo, kt = !0, ln(e, t, n), Me = r, kt = o;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!We && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          o = r = r.next;
          do {
            var u = o, a = u.destroy;
            u = u.tag, a !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && ii(n, t, a), o = o.next;
          } while (o !== r);
        }
        ln(e, t, n);
        break;
      case 1:
        if (!We && (nr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (f) {
          Ce(n, t, f);
        }
        ln(e, t, n);
        break;
      case 21:
        ln(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (We = (r = We) || n.memoizedState !== null, ln(e, t, n), We = r) : ln(e, t, n);
        break;
      default:
        ln(e, t, n);
    }
  }
  function Nc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Np()), t.forEach(function(r) {
        var o = Mp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
    }
  }
  function St(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var u = e, a = t, f = a;
        e: for (; f !== null; ) {
          switch (f.tag) {
            case 5:
              Me = f.stateNode, kt = !1;
              break e;
            case 3:
              Me = f.stateNode.containerInfo, kt = !0;
              break e;
            case 4:
              Me = f.stateNode.containerInfo, kt = !0;
              break e;
          }
          f = f.return;
        }
        if (Me === null) throw Error(i(160));
        Pc(u, a, o), Me = null, kt = !1;
        var p = o.alternate;
        p !== null && (p.return = null), o.return = null;
      } catch (S) {
        Ce(o, t, S);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Tc(t, e), t = t.sibling;
  }
  function Tc(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (St(t, e), Lt(e), r & 4) {
          try {
            Br(3, e, e.return), Zl(3, e);
          } catch (W) {
            Ce(e, e.return, W);
          }
          try {
            Br(5, e, e.return);
          } catch (W) {
            Ce(e, e.return, W);
          }
        }
        break;
      case 1:
        St(t, e), Lt(e), r & 512 && n !== null && nr(n, n.return);
        break;
      case 5:
        if (St(t, e), Lt(e), r & 512 && n !== null && nr(n, n.return), e.flags & 32) {
          var o = e.stateNode;
          try {
            sr(o, "");
          } catch (W) {
            Ce(e, e.return, W);
          }
        }
        if (r & 4 && (o = e.stateNode, o != null)) {
          var u = e.memoizedProps, a = n !== null ? n.memoizedProps : u, f = e.type, p = e.updateQueue;
          if (e.updateQueue = null, p !== null) try {
            f === "input" && u.type === "radio" && u.name != null && ns(o, u), Bo(f, a);
            var S = Bo(f, u);
            for (a = 0; a < p.length; a += 2) {
              var N = p[a], R = p[a + 1];
              N === "style" ? cs(o, R) : N === "dangerouslySetInnerHTML" ? ss(o, R) : N === "children" ? sr(o, R) : J(o, N, R, S);
            }
            switch (f) {
              case "input":
                Do(o, u);
                break;
              case "textarea":
                os(o, u);
                break;
              case "select":
                var P = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!u.multiple;
                var B = u.value;
                B != null ? jn(o, !!u.multiple, B, !1) : P !== !!u.multiple && (u.defaultValue != null ? jn(
                  o,
                  !!u.multiple,
                  u.defaultValue,
                  !0
                ) : jn(o, !!u.multiple, u.multiple ? [] : "", !1));
            }
            o[Rr] = u;
          } catch (W) {
            Ce(e, e.return, W);
          }
        }
        break;
      case 6:
        if (St(t, e), Lt(e), r & 4) {
          if (e.stateNode === null) throw Error(i(162));
          o = e.stateNode, u = e.memoizedProps;
          try {
            o.nodeValue = u;
          } catch (W) {
            Ce(e, e.return, W);
          }
        }
        break;
      case 3:
        if (St(t, e), Lt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          wr(t.containerInfo);
        } catch (W) {
          Ce(e, e.return, W);
        }
        break;
      case 4:
        St(t, e), Lt(e);
        break;
      case 13:
        St(t, e), Lt(e), o = e.child, o.flags & 8192 && (u = o.memoizedState !== null, o.stateNode.isHidden = u, !u || o.alternate !== null && o.alternate.memoizedState !== null || (pi = Pe())), r & 4 && Nc(e);
        break;
      case 22:
        if (N = n !== null && n.memoizedState !== null, e.mode & 1 ? (We = (S = We) || N, St(t, e), We = S) : St(t, e), Lt(e), r & 8192) {
          if (S = e.memoizedState !== null, (e.stateNode.isHidden = S) && !N && (e.mode & 1) !== 0) for (H = e, N = e.child; N !== null; ) {
            for (R = H = N; H !== null; ) {
              switch (P = H, B = P.child, P.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Br(4, P, P.return);
                  break;
                case 1:
                  nr(P, P.return);
                  var V = P.stateNode;
                  if (typeof V.componentWillUnmount == "function") {
                    r = P, n = P.return;
                    try {
                      t = r, V.props = t.memoizedProps, V.state = t.memoizedState, V.componentWillUnmount();
                    } catch (W) {
                      Ce(r, n, W);
                    }
                  }
                  break;
                case 5:
                  nr(P, P.return);
                  break;
                case 22:
                  if (P.memoizedState !== null) {
                    Oc(R);
                    continue;
                  }
              }
              B !== null ? (B.return = P, H = B) : Oc(R);
            }
            N = N.sibling;
          }
          e: for (N = null, R = e; ; ) {
            if (R.tag === 5) {
              if (N === null) {
                N = R;
                try {
                  o = R.stateNode, S ? (u = o.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (f = R.stateNode, p = R.memoizedProps.style, a = p != null && p.hasOwnProperty("display") ? p.display : null, f.style.display = as("display", a));
                } catch (W) {
                  Ce(e, e.return, W);
                }
              }
            } else if (R.tag === 6) {
              if (N === null) try {
                R.stateNode.nodeValue = S ? "" : R.memoizedProps;
              } catch (W) {
                Ce(e, e.return, W);
              }
            } else if ((R.tag !== 22 && R.tag !== 23 || R.memoizedState === null || R === e) && R.child !== null) {
              R.child.return = R, R = R.child;
              continue;
            }
            if (R === e) break e;
            for (; R.sibling === null; ) {
              if (R.return === null || R.return === e) break e;
              N === R && (N = null), R = R.return;
            }
            N === R && (N = null), R.sibling.return = R.return, R = R.sibling;
          }
        }
        break;
      case 19:
        St(t, e), Lt(e), r & 4 && Nc(e);
        break;
      case 21:
        break;
      default:
        St(
          t,
          e
        ), Lt(e);
    }
  }
  function Lt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (xc(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(i(160));
        }
        switch (r.tag) {
          case 5:
            var o = r.stateNode;
            r.flags & 32 && (sr(o, ""), r.flags &= -33);
            var u = Cc(e);
            ci(e, u, o);
            break;
          case 3:
          case 4:
            var a = r.stateNode.containerInfo, f = Cc(e);
            ai(e, f, a);
            break;
          default:
            throw Error(i(161));
        }
      } catch (p) {
        Ce(e, e.return, p);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Lp(e, t, n) {
    H = e, Lc(e);
  }
  function Lc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; H !== null; ) {
      var o = H, u = o.child;
      if (o.tag === 22 && r) {
        var a = o.memoizedState !== null || Gl;
        if (!a) {
          var f = o.alternate, p = f !== null && f.memoizedState !== null || We;
          f = Gl;
          var S = We;
          if (Gl = a, (We = p) && !S) for (H = o; H !== null; ) a = H, p = a.child, a.tag === 22 && a.memoizedState !== null ? zc(o) : p !== null ? (p.return = a, H = p) : zc(o);
          for (; u !== null; ) H = u, Lc(u), u = u.sibling;
          H = o, Gl = f, We = S;
        }
        Rc(e);
      } else (o.subtreeFlags & 8772) !== 0 && u !== null ? (u.return = o, H = u) : Rc(e);
    }
  }
  function Rc(e) {
    for (; H !== null; ) {
      var t = H;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              We || Zl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !We) if (n === null) r.componentDidMount();
              else {
                var o = t.elementType === t.type ? n.memoizedProps : _t(t.type, n.memoizedProps);
                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var u = t.updateQueue;
              u !== null && Oa(t, u, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                Oa(t, a, n);
              }
              break;
            case 5:
              var f = t.stateNode;
              if (n === null && t.flags & 4) {
                n = f;
                var p = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    p.autoFocus && n.focus();
                    break;
                  case "img":
                    p.src && (n.src = p.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var S = t.alternate;
                if (S !== null) {
                  var N = S.memoizedState;
                  if (N !== null) {
                    var R = N.dehydrated;
                    R !== null && wr(R);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(i(163));
          }
          We || t.flags & 512 && si(t);
        } catch (P) {
          Ce(t, t.return, P);
        }
      }
      if (t === e) {
        H = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, H = n;
        break;
      }
      H = t.return;
    }
  }
  function Oc(e) {
    for (; H !== null; ) {
      var t = H;
      if (t === e) {
        H = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, H = n;
        break;
      }
      H = t.return;
    }
  }
  function zc(e) {
    for (; H !== null; ) {
      var t = H;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Zl(4, t);
            } catch (p) {
              Ce(t, n, p);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var o = t.return;
              try {
                r.componentDidMount();
              } catch (p) {
                Ce(t, o, p);
              }
            }
            var u = t.return;
            try {
              si(t);
            } catch (p) {
              Ce(t, u, p);
            }
            break;
          case 5:
            var a = t.return;
            try {
              si(t);
            } catch (p) {
              Ce(t, a, p);
            }
        }
      } catch (p) {
        Ce(t, t.return, p);
      }
      if (t === e) {
        H = null;
        break;
      }
      var f = t.sibling;
      if (f !== null) {
        f.return = t.return, H = f;
        break;
      }
      H = t.return;
    }
  }
  var Rp = Math.ceil, Jl = I.ReactCurrentDispatcher, fi = I.ReactCurrentOwner, pt = I.ReactCurrentBatchConfig, ae = 0, $e = null, Te = null, Ie = 0, it = 0, rr = bt(0), Oe = 0, Hr = null, xn = 0, ql = 0, di = 0, Vr = null, Je = null, pi = 0, lr = 1 / 0, Ut = null, bl = !1, mi = null, on = null, eo = !1, un = null, to = 0, Wr = 0, hi = null, no = -1, ro = 0;
  function Ye() {
    return (ae & 6) !== 0 ? Pe() : no !== -1 ? no : no = Pe();
  }
  function sn(e) {
    return (e.mode & 1) === 0 ? 1 : (ae & 2) !== 0 && Ie !== 0 ? Ie & -Ie : pp.transition !== null ? (ro === 0 && (ro = Cs()), ro) : (e = pe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : $s(e.type)), e);
  }
  function Et(e, t, n, r) {
    if (50 < Wr) throw Wr = 0, hi = null, Error(i(185));
    mr(e, n, r), ((ae & 2) === 0 || e !== $e) && (e === $e && ((ae & 2) === 0 && (ql |= n), Oe === 4 && an(e, Ie)), qe(e, r), n === 1 && ae === 0 && (t.mode & 1) === 0 && (lr = Pe() + 500, Ol && tn()));
  }
  function qe(e, t) {
    var n = e.callbackNode;
    pd(e, t);
    var r = dl(e, e === $e ? Ie : 0);
    if (r === 0) n !== null && Ss(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && Ss(n), t === 1) e.tag === 0 ? dp($c.bind(null, e)) : wa($c.bind(null, e)), sp(function() {
        (ae & 6) === 0 && tn();
      }), n = null;
      else {
        switch (Ps(r)) {
          case 1:
            n = Xo;
            break;
          case 4:
            n = Es;
            break;
          case 16:
            n = sl;
            break;
          case 536870912:
            n = xs;
            break;
          default:
            n = sl;
        }
        n = Hc(n, Fc.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Fc(e, t) {
    if (no = -1, ro = 0, (ae & 6) !== 0) throw Error(i(327));
    var n = e.callbackNode;
    if (or() && e.callbackNode !== n) return null;
    var r = dl(e, e === $e ? Ie : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = lo(e, r);
    else {
      t = r;
      var o = ae;
      ae |= 2;
      var u = Dc();
      ($e !== e || Ie !== t) && (Ut = null, lr = Pe() + 500, Pn(e, t));
      do
        try {
          Fp();
          break;
        } catch (f) {
          jc(e, f);
        }
      while (!0);
      Fu(), Jl.current = u, ae = o, Te !== null ? t = 0 : ($e = null, Ie = 0, t = Oe);
    }
    if (t !== 0) {
      if (t === 2 && (o = Go(e), o !== 0 && (r = o, t = vi(e, o))), t === 1) throw n = Hr, Pn(e, 0), an(e, r), qe(e, Pe()), n;
      if (t === 6) an(e, r);
      else {
        if (o = e.current.alternate, (r & 30) === 0 && !Op(o) && (t = lo(e, r), t === 2 && (u = Go(e), u !== 0 && (r = u, t = vi(e, u))), t === 1)) throw n = Hr, Pn(e, 0), an(e, r), qe(e, Pe()), n;
        switch (e.finishedWork = o, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(i(345));
          case 2:
            Nn(e, Je, Ut);
            break;
          case 3:
            if (an(e, r), (r & 130023424) === r && (t = pi + 500 - Pe(), 10 < t)) {
              if (dl(e, 0) !== 0) break;
              if (o = e.suspendedLanes, (o & r) !== r) {
                Ye(), e.pingedLanes |= e.suspendedLanes & o;
                break;
              }
              e.timeoutHandle = Su(Nn.bind(null, e, Je, Ut), t);
              break;
            }
            Nn(e, Je, Ut);
            break;
          case 4:
            if (an(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, o = -1; 0 < r; ) {
              var a = 31 - yt(r);
              u = 1 << a, a = t[a], a > o && (o = a), r &= ~u;
            }
            if (r = o, r = Pe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Rp(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = Su(Nn.bind(null, e, Je, Ut), r);
              break;
            }
            Nn(e, Je, Ut);
            break;
          case 5:
            Nn(e, Je, Ut);
            break;
          default:
            throw Error(i(329));
        }
      }
    }
    return qe(e, Pe()), e.callbackNode === n ? Fc.bind(null, e) : null;
  }
  function vi(e, t) {
    var n = Vr;
    return e.current.memoizedState.isDehydrated && (Pn(e, t).flags |= 256), e = lo(e, t), e !== 2 && (t = Je, Je = n, t !== null && yi(t)), e;
  }
  function yi(e) {
    Je === null ? Je = e : Je.push.apply(Je, e);
  }
  function Op(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var o = n[r], u = o.getSnapshot;
          o = o.value;
          try {
            if (!gt(u(), o)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function an(e, t) {
    for (t &= ~di, t &= ~ql, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - yt(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function $c(e) {
    if ((ae & 6) !== 0) throw Error(i(327));
    or();
    var t = dl(e, 0);
    if ((t & 1) === 0) return qe(e, Pe()), null;
    var n = lo(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Go(e);
      r !== 0 && (t = r, n = vi(e, r));
    }
    if (n === 1) throw n = Hr, Pn(e, 0), an(e, t), qe(e, Pe()), n;
    if (n === 6) throw Error(i(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Nn(e, Je, Ut), qe(e, Pe()), null;
  }
  function gi(e, t) {
    var n = ae;
    ae |= 1;
    try {
      return e(t);
    } finally {
      ae = n, ae === 0 && (lr = Pe() + 500, Ol && tn());
    }
  }
  function Cn(e) {
    un !== null && un.tag === 0 && (ae & 6) === 0 && or();
    var t = ae;
    ae |= 1;
    var n = pt.transition, r = pe;
    try {
      if (pt.transition = null, pe = 1, e) return e();
    } finally {
      pe = r, pt.transition = n, ae = t, (ae & 6) === 0 && tn();
    }
  }
  function wi() {
    it = rr.current, _e(rr);
  }
  function Pn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, ip(n)), Te !== null) for (n = Te.return; n !== null; ) {
      var r = n;
      switch (Tu(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Ll();
          break;
        case 3:
          er(), _e(Xe), _e(Be), Bu();
          break;
        case 5:
          Au(r);
          break;
        case 4:
          er();
          break;
        case 13:
          _e(Ee);
          break;
        case 19:
          _e(Ee);
          break;
        case 10:
          $u(r.type._context);
          break;
        case 22:
        case 23:
          wi();
      }
      n = n.return;
    }
    if ($e = e, Te = e = cn(e.current, null), Ie = it = t, Oe = 0, Hr = null, di = ql = xn = 0, Je = Vr = null, kn !== null) {
      for (t = 0; t < kn.length; t++) if (n = kn[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var o = r.next, u = n.pending;
        if (u !== null) {
          var a = u.next;
          u.next = o, r.next = a;
        }
        n.pending = r;
      }
      kn = null;
    }
    return e;
  }
  function jc(e, t) {
    do {
      var n = Te;
      try {
        if (Fu(), Bl.current = Ql, Hl) {
          for (var r = xe.memoizedState; r !== null; ) {
            var o = r.queue;
            o !== null && (o.pending = null), r = r.next;
          }
          Hl = !1;
        }
        if (En = 0, Fe = Re = xe = null, Dr = !1, Mr = 0, fi.current = null, n === null || n.return === null) {
          Oe = 1, Hr = t, Te = null;
          break;
        }
        e: {
          var u = e, a = n.return, f = n, p = t;
          if (t = Ie, f.flags |= 32768, p !== null && typeof p == "object" && typeof p.then == "function") {
            var S = p, N = f, R = N.tag;
            if ((N.mode & 1) === 0 && (R === 0 || R === 11 || R === 15)) {
              var P = N.alternate;
              P ? (N.updateQueue = P.updateQueue, N.memoizedState = P.memoizedState, N.lanes = P.lanes) : (N.updateQueue = null, N.memoizedState = null);
            }
            var B = uc(a);
            if (B !== null) {
              B.flags &= -257, ic(B, a, f, u, t), B.mode & 1 && oc(u, S, t), t = B, p = S;
              var V = t.updateQueue;
              if (V === null) {
                var W = /* @__PURE__ */ new Set();
                W.add(p), t.updateQueue = W;
              } else V.add(p);
              break e;
            } else {
              if ((t & 1) === 0) {
                oc(u, S, t), _i();
                break e;
              }
              p = Error(i(426));
            }
          } else if (Se && f.mode & 1) {
            var Ne = uc(a);
            if (Ne !== null) {
              (Ne.flags & 65536) === 0 && (Ne.flags |= 256), ic(Ne, a, f, u, t), Ou(tr(p, f));
              break e;
            }
          }
          u = p = tr(p, f), Oe !== 4 && (Oe = 2), Vr === null ? Vr = [u] : Vr.push(u), u = a;
          do {
            switch (u.tag) {
              case 3:
                u.flags |= 65536, t &= -t, u.lanes |= t;
                var w = rc(u, p, t);
                Ra(u, w);
                break e;
              case 1:
                f = p;
                var h = u.type, k = u.stateNode;
                if ((u.flags & 128) === 0 && (typeof h.getDerivedStateFromError == "function" || k !== null && typeof k.componentDidCatch == "function" && (on === null || !on.has(k)))) {
                  u.flags |= 65536, t &= -t, u.lanes |= t;
                  var z = lc(u, f, t);
                  Ra(u, z);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        Ic(n);
      } catch (Q) {
        t = Q, Te === n && n !== null && (Te = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Dc() {
    var e = Jl.current;
    return Jl.current = Ql, e === null ? Ql : e;
  }
  function _i() {
    (Oe === 0 || Oe === 3 || Oe === 2) && (Oe = 4), $e === null || (xn & 268435455) === 0 && (ql & 268435455) === 0 || an($e, Ie);
  }
  function lo(e, t) {
    var n = ae;
    ae |= 2;
    var r = Dc();
    ($e !== e || Ie !== t) && (Ut = null, Pn(e, t));
    do
      try {
        zp();
        break;
      } catch (o) {
        jc(e, o);
      }
    while (!0);
    if (Fu(), ae = n, Jl.current = r, Te !== null) throw Error(i(261));
    return $e = null, Ie = 0, Oe;
  }
  function zp() {
    for (; Te !== null; ) Mc(Te);
  }
  function Fp() {
    for (; Te !== null && !ld(); ) Mc(Te);
  }
  function Mc(e) {
    var t = Bc(e.alternate, e, it);
    e.memoizedProps = e.pendingProps, t === null ? Ic(e) : Te = t, fi.current = null;
  }
  function Ic(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = Cp(n, t, it), n !== null) {
          Te = n;
          return;
        }
      } else {
        if (n = Pp(n, t), n !== null) {
          n.flags &= 32767, Te = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          Oe = 6, Te = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        Te = t;
        return;
      }
      Te = t = e;
    } while (t !== null);
    Oe === 0 && (Oe = 5);
  }
  function Nn(e, t, n) {
    var r = pe, o = pt.transition;
    try {
      pt.transition = null, pe = 1, $p(e, t, n, r);
    } finally {
      pt.transition = o, pe = r;
    }
    return null;
  }
  function $p(e, t, n, r) {
    do
      or();
    while (un !== null);
    if ((ae & 6) !== 0) throw Error(i(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(i(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var u = n.lanes | n.childLanes;
    if (md(e, u), e === $e && (Te = $e = null, Ie = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || eo || (eo = !0, Hc(sl, function() {
      return or(), null;
    })), u = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || u) {
      u = pt.transition, pt.transition = null;
      var a = pe;
      pe = 1;
      var f = ae;
      ae |= 4, fi.current = null, Tp(e, n), Tc(n, e), ep(_u), hl = !!wu, _u = wu = null, e.current = n, Lp(n), od(), ae = f, pe = a, pt.transition = u;
    } else e.current = n;
    if (eo && (eo = !1, un = e, to = o), u = e.pendingLanes, u === 0 && (on = null), sd(n.stateNode), qe(e, Pe()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
    if (bl) throw bl = !1, e = mi, mi = null, e;
    return (to & 1) !== 0 && e.tag !== 0 && or(), u = e.pendingLanes, (u & 1) !== 0 ? e === hi ? Wr++ : (Wr = 0, hi = e) : Wr = 0, tn(), null;
  }
  function or() {
    if (un !== null) {
      var e = Ps(to), t = pt.transition, n = pe;
      try {
        if (pt.transition = null, pe = 16 > e ? 16 : e, un === null) var r = !1;
        else {
          if (e = un, un = null, to = 0, (ae & 6) !== 0) throw Error(i(331));
          var o = ae;
          for (ae |= 4, H = e.current; H !== null; ) {
            var u = H, a = u.child;
            if ((H.flags & 16) !== 0) {
              var f = u.deletions;
              if (f !== null) {
                for (var p = 0; p < f.length; p++) {
                  var S = f[p];
                  for (H = S; H !== null; ) {
                    var N = H;
                    switch (N.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Br(8, N, u);
                    }
                    var R = N.child;
                    if (R !== null) R.return = N, H = R;
                    else for (; H !== null; ) {
                      N = H;
                      var P = N.sibling, B = N.return;
                      if (Ec(N), N === S) {
                        H = null;
                        break;
                      }
                      if (P !== null) {
                        P.return = B, H = P;
                        break;
                      }
                      H = B;
                    }
                  }
                }
                var V = u.alternate;
                if (V !== null) {
                  var W = V.child;
                  if (W !== null) {
                    V.child = null;
                    do {
                      var Ne = W.sibling;
                      W.sibling = null, W = Ne;
                    } while (W !== null);
                  }
                }
                H = u;
              }
            }
            if ((u.subtreeFlags & 2064) !== 0 && a !== null) a.return = u, H = a;
            else e: for (; H !== null; ) {
              if (u = H, (u.flags & 2048) !== 0) switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  Br(9, u, u.return);
              }
              var w = u.sibling;
              if (w !== null) {
                w.return = u.return, H = w;
                break e;
              }
              H = u.return;
            }
          }
          var h = e.current;
          for (H = h; H !== null; ) {
            a = H;
            var k = a.child;
            if ((a.subtreeFlags & 2064) !== 0 && k !== null) k.return = a, H = k;
            else e: for (a = h; H !== null; ) {
              if (f = H, (f.flags & 2048) !== 0) try {
                switch (f.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Zl(9, f);
                }
              } catch (Q) {
                Ce(f, f.return, Q);
              }
              if (f === a) {
                H = null;
                break e;
              }
              var z = f.sibling;
              if (z !== null) {
                z.return = f.return, H = z;
                break e;
              }
              H = f.return;
            }
          }
          if (ae = o, tn(), Ct && typeof Ct.onPostCommitFiberRoot == "function") try {
            Ct.onPostCommitFiberRoot(al, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        pe = n, pt.transition = t;
      }
    }
    return !1;
  }
  function Ac(e, t, n) {
    t = tr(n, t), t = rc(e, t, 1), e = rn(e, t, 1), t = Ye(), e !== null && (mr(e, 1, t), qe(e, t));
  }
  function Ce(e, t, n) {
    if (e.tag === 3) Ac(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Ac(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (on === null || !on.has(r))) {
          e = tr(n, e), e = lc(t, e, 1), t = rn(t, e, 1), e = Ye(), t !== null && (mr(t, 1, e), qe(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function jp(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Ye(), e.pingedLanes |= e.suspendedLanes & n, $e === e && (Ie & n) === n && (Oe === 4 || Oe === 3 && (Ie & 130023424) === Ie && 500 > Pe() - pi ? Pn(e, 0) : di |= n), qe(e, t);
  }
  function Uc(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = fl, fl <<= 1, (fl & 130023424) === 0 && (fl = 4194304)));
    var n = Ye();
    e = Mt(e, t), e !== null && (mr(e, t, n), qe(e, n));
  }
  function Dp(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Uc(e, n);
  }
  function Mp(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(i(314));
    }
    r !== null && r.delete(t), Uc(e, n);
  }
  var Bc;
  Bc = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Xe.current) Ze = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return Ze = !1, xp(e, t, n);
      Ze = (e.flags & 131072) !== 0;
    }
    else Ze = !1, Se && (t.flags & 1048576) !== 0 && _a(t, Fl, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        Xl(e, t), e = t.pendingProps;
        var o = Yn(t, Be.current);
        bn(t, n), o = Wu(null, t, r, e, o, n);
        var u = Qu();
        return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ge(r) ? (u = !0, Rl(t)) : u = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Mu(t), o.updater = Kl, t.stateNode = o, o._reactInternals = t, Ju(t, r, e, n), t = ti(null, t, r, !0, u, n)) : (t.tag = 0, Se && u && Nu(t), Ke(null, t, o, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (Xl(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = Ap(r), e = _t(r, e), o) {
            case 0:
              t = ei(null, t, r, e, n);
              break e;
            case 1:
              t = pc(null, t, r, e, n);
              break e;
            case 11:
              t = sc(null, t, r, e, n);
              break e;
            case 14:
              t = ac(null, t, r, _t(r.type, e), n);
              break e;
          }
          throw Error(i(
            306,
            r,
            ""
          ));
        }
        return t;
      case 0:
        return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : _t(r, o), ei(e, t, r, o, n);
      case 1:
        return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : _t(r, o), pc(e, t, r, o, n);
      case 3:
        e: {
          if (mc(t), e === null) throw Error(i(387));
          r = t.pendingProps, u = t.memoizedState, o = u.element, La(e, t), Al(t, r, null, n);
          var a = t.memoizedState;
          if (r = a.element, u.isDehydrated) if (u = { element: r, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
            o = tr(Error(i(423)), t), t = hc(e, t, r, n, o);
            break e;
          } else if (r !== o) {
            o = tr(Error(i(424)), t), t = hc(e, t, r, n, o);
            break e;
          } else for (ut = qt(t.stateNode.containerInfo.firstChild), ot = t, Se = !0, wt = null, n = Na(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Zn(), r === o) {
              t = At(e, t, n);
              break e;
            }
            Ke(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return za(t), e === null && Ru(t), r = t.type, o = t.pendingProps, u = e !== null ? e.memoizedProps : null, a = o.children, ku(r, o) ? a = null : u !== null && ku(r, u) && (t.flags |= 32), dc(e, t), Ke(e, t, a, n), t.child;
      case 6:
        return e === null && Ru(t), null;
      case 13:
        return vc(e, t, n);
      case 4:
        return Iu(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Jn(t, null, r, n) : Ke(e, t, r, n), t.child;
      case 11:
        return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : _t(r, o), sc(e, t, r, o, n);
      case 7:
        return Ke(e, t, t.pendingProps, n), t.child;
      case 8:
        return Ke(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Ke(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, o = t.pendingProps, u = t.memoizedProps, a = o.value, ve(Dl, r._currentValue), r._currentValue = a, u !== null) if (gt(u.value, a)) {
            if (u.children === o.children && !Xe.current) {
              t = At(e, t, n);
              break e;
            }
          } else for (u = t.child, u !== null && (u.return = t); u !== null; ) {
            var f = u.dependencies;
            if (f !== null) {
              a = u.child;
              for (var p = f.firstContext; p !== null; ) {
                if (p.context === r) {
                  if (u.tag === 1) {
                    p = It(-1, n & -n), p.tag = 2;
                    var S = u.updateQueue;
                    if (S !== null) {
                      S = S.shared;
                      var N = S.pending;
                      N === null ? p.next = p : (p.next = N.next, N.next = p), S.pending = p;
                    }
                  }
                  u.lanes |= n, p = u.alternate, p !== null && (p.lanes |= n), ju(
                    u.return,
                    n,
                    t
                  ), f.lanes |= n;
                  break;
                }
                p = p.next;
              }
            } else if (u.tag === 10) a = u.type === t.type ? null : u.child;
            else if (u.tag === 18) {
              if (a = u.return, a === null) throw Error(i(341));
              a.lanes |= n, f = a.alternate, f !== null && (f.lanes |= n), ju(a, n, t), a = u.sibling;
            } else a = u.child;
            if (a !== null) a.return = u;
            else for (a = u; a !== null; ) {
              if (a === t) {
                a = null;
                break;
              }
              if (u = a.sibling, u !== null) {
                u.return = a.return, a = u;
                break;
              }
              a = a.return;
            }
            u = a;
          }
          Ke(e, t, o.children, n), t = t.child;
        }
        return t;
      case 9:
        return o = t.type, r = t.pendingProps.children, bn(t, n), o = ft(o), r = r(o), t.flags |= 1, Ke(e, t, r, n), t.child;
      case 14:
        return r = t.type, o = _t(r, t.pendingProps), o = _t(r.type, o), ac(e, t, r, o, n);
      case 15:
        return cc(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : _t(r, o), Xl(e, t), t.tag = 1, Ge(r) ? (e = !0, Rl(t)) : e = !1, bn(t, n), tc(t, r, o), Ju(t, r, o, n), ti(null, t, r, !0, e, n);
      case 19:
        return gc(e, t, n);
      case 22:
        return fc(e, t, n);
    }
    throw Error(i(156, t.tag));
  };
  function Hc(e, t) {
    return ks(e, t);
  }
  function Ip(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function mt(e, t, n, r) {
    return new Ip(e, t, n, r);
  }
  function ki(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Ap(e) {
    if (typeof e == "function") return ki(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Ae) return 11;
      if (e === Ue) return 14;
    }
    return 2;
  }
  function cn(e, t) {
    var n = e.alternate;
    return n === null ? (n = mt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function oo(e, t, n, r, o, u) {
    var a = 2;
    if (r = e, typeof e == "function") ki(e) && (a = 1);
    else if (typeof e == "string") a = 5;
    else e: switch (e) {
      case ue:
        return Tn(n.children, o, u, t);
      case De:
        a = 8, o |= 8;
        break;
      case nt:
        return e = mt(12, n, t, o | 2), e.elementType = nt, e.lanes = u, e;
      case ge:
        return e = mt(13, n, t, o), e.elementType = ge, e.lanes = u, e;
      case Le:
        return e = mt(19, n, t, o), e.elementType = Le, e.lanes = u, e;
      case me:
        return uo(n, o, u, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case ke:
            a = 10;
            break e;
          case Qe:
            a = 9;
            break e;
          case Ae:
            a = 11;
            break e;
          case Ue:
            a = 14;
            break e;
          case ze:
            a = 16, r = null;
            break e;
        }
        throw Error(i(130, e == null ? e : typeof e, ""));
    }
    return t = mt(a, n, t, o), t.elementType = e, t.type = r, t.lanes = u, t;
  }
  function Tn(e, t, n, r) {
    return e = mt(7, e, r, t), e.lanes = n, e;
  }
  function uo(e, t, n, r) {
    return e = mt(22, e, r, t), e.elementType = me, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function Si(e, t, n) {
    return e = mt(6, e, null, t), e.lanes = n, e;
  }
  function Ei(e, t, n) {
    return t = mt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Up(e, t, n, r, o) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Zo(0), this.expirationTimes = Zo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Zo(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
  }
  function xi(e, t, n, r, o, u, a, f, p) {
    return e = new Up(e, t, n, f, p), t === 1 ? (t = 1, u === !0 && (t |= 8)) : t = 0, u = mt(3, null, null, t), e.current = u, u.stateNode = e, u.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Mu(u), e;
  }
  function Bp(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ne, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function Vc(e) {
    if (!e) return en;
    e = e._reactInternals;
    e: {
      if (vn(e) !== e || e.tag !== 1) throw Error(i(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Ge(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(i(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Ge(n)) return ya(e, n, t);
    }
    return t;
  }
  function Wc(e, t, n, r, o, u, a, f, p) {
    return e = xi(n, r, !0, e, o, u, a, f, p), e.context = Vc(null), n = e.current, r = Ye(), o = sn(n), u = It(r, o), u.callback = t ?? null, rn(n, u, o), e.current.lanes = o, mr(e, o, r), qe(e, r), e;
  }
  function io(e, t, n, r) {
    var o = t.current, u = Ye(), a = sn(o);
    return n = Vc(n), t.context === null ? t.context = n : t.pendingContext = n, t = It(u, a), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = rn(o, t, a), e !== null && (Et(e, o, a, u), Il(e, o, a)), a;
  }
  function so(e) {
    return e = e.current, e.child ? (e.child.tag === 5, e.child.stateNode) : null;
  }
  function Qc(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Ci(e, t) {
    Qc(e, t), (e = e.alternate) && Qc(e, t);
  }
  function Hp() {
    return null;
  }
  var Kc = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Pi(e) {
    this._internalRoot = e;
  }
  ao.prototype.render = Pi.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(i(409));
    io(e, t, null, null);
  }, ao.prototype.unmount = Pi.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Cn(function() {
        io(null, e, null, null);
      }), t[Ft] = null;
    }
  };
  function ao(e) {
    this._internalRoot = e;
  }
  ao.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Ls();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Gt.length && t !== 0 && t < Gt[n].priority; n++) ;
      Gt.splice(n, 0, e), n === 0 && zs(e);
    }
  };
  function Ni(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function co(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Yc() {
  }
  function Vp(e, t, n, r, o) {
    if (o) {
      if (typeof r == "function") {
        var u = r;
        r = function() {
          var S = so(a);
          u.call(S);
        };
      }
      var a = Wc(t, r, e, 0, null, !1, !1, "", Yc);
      return e._reactRootContainer = a, e[Ft] = a.current, Tr(e.nodeType === 8 ? e.parentNode : e), Cn(), a;
    }
    for (; o = e.lastChild; ) e.removeChild(o);
    if (typeof r == "function") {
      var f = r;
      r = function() {
        var S = so(p);
        f.call(S);
      };
    }
    var p = xi(e, 0, !1, null, null, !1, !1, "", Yc);
    return e._reactRootContainer = p, e[Ft] = p.current, Tr(e.nodeType === 8 ? e.parentNode : e), Cn(function() {
      io(t, p, n, r);
    }), p;
  }
  function fo(e, t, n, r, o) {
    var u = n._reactRootContainer;
    if (u) {
      var a = u;
      if (typeof o == "function") {
        var f = o;
        o = function() {
          var p = so(a);
          f.call(p);
        };
      }
      io(t, a, e, o);
    } else a = Vp(n, t, e, o, r);
    return so(a);
  }
  Ns = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = pr(t.pendingLanes);
          n !== 0 && (Jo(t, n | 1), qe(t, Pe()), (ae & 6) === 0 && (lr = Pe() + 500, tn()));
        }
        break;
      case 13:
        Cn(function() {
          var r = Mt(e, 1);
          if (r !== null) {
            var o = Ye();
            Et(r, e, 1, o);
          }
        }), Ci(e, 1);
    }
  }, qo = function(e) {
    if (e.tag === 13) {
      var t = Mt(e, 134217728);
      if (t !== null) {
        var n = Ye();
        Et(t, e, 134217728, n);
      }
      Ci(e, 134217728);
    }
  }, Ts = function(e) {
    if (e.tag === 13) {
      var t = sn(e), n = Mt(e, t);
      if (n !== null) {
        var r = Ye();
        Et(n, e, t, r);
      }
      Ci(e, t);
    }
  }, Ls = function() {
    return pe;
  }, Rs = function(e, t) {
    var n = pe;
    try {
      return pe = e, t();
    } finally {
      pe = n;
    }
  }, Wo = function(e, t, n) {
    switch (t) {
      case "input":
        if (Do(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var o = Tl(r);
              if (!o) throw Error(i(90));
              es(r), Do(r, o);
            }
          }
        }
        break;
      case "textarea":
        os(e, n);
        break;
      case "select":
        t = n.value, t != null && jn(e, !!n.multiple, t, !1);
    }
  }, ms = gi, hs = Cn;
  var Wp = { usingClientEntryPoint: !1, Events: [Or, Qn, Tl, ds, ps, gi] }, Qr = { findFiberByHostInstance: yn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Qp = { bundleType: Qr.bundleType, version: Qr.version, rendererPackageName: Qr.rendererPackageName, rendererConfig: Qr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: I.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = ws(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Qr.findFiberByHostInstance || Hp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var po = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!po.isDisabled && po.supportsFiber) try {
      al = po.inject(Qp), Ct = po;
    } catch {
    }
  }
  return be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Wp, be.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ni(t)) throw Error(i(200));
    return Bp(e, t, null, n);
  }, be.createRoot = function(e, t) {
    if (!Ni(e)) throw Error(i(299));
    var n = !1, r = "", o = Kc;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = xi(e, 1, !1, null, null, n, !1, r, o), e[Ft] = t.current, Tr(e.nodeType === 8 ? e.parentNode : e), new Pi(t);
  }, be.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
    return e = ws(t), e = e === null ? null : e.stateNode, e;
  }, be.flushSync = function(e) {
    return Cn(e);
  }, be.hydrate = function(e, t, n) {
    if (!co(t)) throw Error(i(200));
    return fo(null, e, t, !0, n);
  }, be.hydrateRoot = function(e, t, n) {
    if (!Ni(e)) throw Error(i(405));
    var r = n != null && n.hydratedSources || null, o = !1, u = "", a = Kc;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onRecoverableError !== void 0 && (a = n.onRecoverableError)), t = Wc(t, null, e, 1, n ?? null, o, !1, u, a), e[Ft] = t.current, Tr(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
      n,
      o
    );
    return new ao(t);
  }, be.render = function(e, t, n) {
    if (!co(t)) throw Error(i(200));
    return fo(null, e, t, !1, n);
  }, be.unmountComponentAtNode = function(e) {
    if (!co(e)) throw Error(i(40));
    return e._reactRootContainer ? (Cn(function() {
      fo(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Ft] = null;
      });
    }), !0) : !1;
  }, be.unstable_batchedUpdates = gi, be.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!co(n)) throw Error(i(200));
    if (e == null || e._reactInternals === void 0) throw Error(i(38));
    return fo(e, t, n, !1, r);
  }, be.version = "18.3.1-next-f1338f8080-20240426", be;
}
var nf;
function _f() {
  if (nf) return Ri.exports;
  nf = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (s) {
        console.error(s);
      }
  }
  return l(), Ri.exports = em(), Ri.exports;
}
var rf;
function tm() {
  if (rf) return mo;
  rf = 1;
  var l = _f();
  return mo.createRoot = l.createRoot, mo.hydrateRoot = l.hydrateRoot, mo;
}
var nm = tm(), rm = Object.defineProperty, lm = (l, s, i) => s in l ? rm(l, s, { enumerable: !0, configurable: !0, writable: !0, value: i }) : l[s] = i, ho = (l, s, i) => lm(l, typeof s != "symbol" ? s + "" : s, i);
const om = {
  stringify: (l) => l ? "true" : "false",
  parse: (l) => /^[ty1-9]/i.test(l)
}, um = {
  stringify: (l) => l.name,
  parse: (l, s, i) => {
    const c = (() => {
      if (typeof window < "u" && l in window)
        return window[l];
      if (typeof global < "u" && l in global)
        return global[l];
    })();
    return typeof c == "function" ? c.bind(i) : void 0;
  }
}, im = {
  stringify: (l) => JSON.stringify(l),
  parse: (l) => JSON.parse(l)
};
function sm(l) {
  return l.replace(
    /([a-z0-9])([A-Z])/g,
    (s, i, c) => `${i}-${c.toLowerCase()}`
  );
}
function kf(l) {
  return l.replace(/[-:]([a-z])/g, (s, i) => `${i.toUpperCase()}`);
}
const am = {
  stringify: (l) => l.name,
  parse: (l, s, i) => {
    const c = (() => {
      const d = kf(s);
      if (typeof i < "u" && d in i.container)
        return i.container[d];
    })();
    return typeof c == "function" ? c.bind(i) : void 0;
  }
}, cm = {
  stringify: (l) => `${l}`,
  parse: (l) => parseFloat(l)
}, fm = {
  stringify: (l) => l,
  parse: (l) => l
}, Fi = {
  string: fm,
  number: cm,
  boolean: om,
  function: um,
  method: am,
  json: im
}, Yr = /* @__PURE__ */ Symbol.for("r2wc.render"), vo = /* @__PURE__ */ Symbol.for("r2wc.connected"), Ln = /* @__PURE__ */ Symbol.for("r2wc.context"), st = /* @__PURE__ */ Symbol.for("r2wc.props");
function dm(l, s, i) {
  var c, d, v;
  s.props || (s.props = l.propTypes ? Object.keys(l.propTypes) : []), s.events || (s.events = []);
  const _ = Array.isArray(s.props) ? s.props.slice() : Object.keys(s.props), g = Array.isArray(s.events) ? s.events.slice() : Object.keys(s.events), m = {}, x = {}, T = {}, $ = {};
  for (const F of _) {
    m[F] = Array.isArray(s.props) ? "string" : s.props[F];
    const O = sm(F);
    T[F] = O, $[O] = F;
  }
  for (const F of g)
    x[F] = Array.isArray(s.events) ? {} : s.events[F];
  class L extends HTMLElement {
    constructor() {
      super(), ho(this, v, !0), ho(this, d), ho(this, c, {}), ho(this, "container"), s.shadow ? this.container = this.attachShadow({
        mode: s.shadow
      }) : this.container = this, this[st].container = this.container;
      for (const O of _) {
        const M = T[O], D = this.getAttribute(M), Z = m[O], q = Z ? Fi[Z] : null;
        if (Z === "method") {
          const J = kf(M);
          Object.defineProperty(this[st].container, J, {
            enumerable: !0,
            configurable: !0,
            get() {
              return this[st][J];
            },
            set(I) {
              this[st][J] = I, this[Yr]();
            }
          }), this[st][O] = q.parse(D, M, this);
        }
        q != null && q.parse && D && (this[st][O] = q.parse(D, M, this));
      }
      for (const O of g)
        this[st][O] = (M) => {
          const D = O.replace(/^on/, "").toLowerCase();
          this.dispatchEvent(
            new CustomEvent(D, { detail: M, ...x[O] })
          );
        };
    }
    static get observedAttributes() {
      return Object.keys($);
    }
    connectedCallback() {
      this[vo] = !0, this[Yr]();
    }
    disconnectedCallback() {
      this[vo] = !1, this[Ln] && i.unmount(this[Ln]), delete this[Ln];
    }
    attributeChangedCallback(O, M, D) {
      const Z = $[O], q = m[Z], J = q ? Fi[q] : null;
      Z in m && J != null && J.parse && D && (this[st][Z] = J.parse(D, O, this), this[Yr]());
    }
    [(v = vo, d = Ln, c = st, Yr)]() {
      this[vo] && (this[Ln] ? i.update(this[Ln], this[st]) : this[Ln] = i.mount(
        this.container,
        l,
        this[st]
      ));
    }
  }
  for (const F of _) {
    const O = T[F], M = m[F];
    Object.defineProperty(L.prototype, F, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[st][F];
      },
      set(D) {
        this[st][F] = D;
        const Z = M ? Fi[M] : null;
        if (Z != null && Z.stringify) {
          const q = Z.stringify(D, O, this);
          this.getAttribute(O) !== q && this.setAttribute(O, q);
        } else
          this[Yr]();
      }
    });
  }
  return L;
}
function pm(l, s, i) {
  const c = nm.createRoot(l), d = ee.createElement(s, i);
  return c.render(d), {
    root: c,
    ReactComponent: s
  };
}
function mm({ root: l, ReactComponent: s }, i) {
  const c = ee.createElement(s, i);
  l.render(c);
}
function hm({ root: l }) {
  l.unmount();
}
function Co(l, s = {}) {
  return dm(l, s, { mount: pm, update: mm, unmount: hm });
}
const vm = "_container_3e8r5_1", ym = "_counter_3e8r5_10", gm = "_button_3e8r5_17", wm = "_count_3e8r5_10", _m = "_label_3e8r5_40", ur = {
  container: vm,
  counter: ym,
  button: gm,
  count: wm,
  label: _m
}, km = "._container_3e8r5_1{display:block;padding:20px;border:2px solid #61dafb;border-radius:8px;margin:10px 0;background:#f0f9ff}._counter_3e8r5_10{display:flex;align-items:center;gap:15px;font-size:18px}._button_3e8r5_17{padding:8px 16px;font-size:16px;border:1px solid #61dafb;background:#61dafb;color:#000;border-radius:4px;cursor:pointer;transition:background .2s}._button_3e8r5_17:hover{background:#4fa8c5}._count_3e8r5_10{font-weight:700;min-width:40px;text-align:center;font-size:24px;color:#333}._label_3e8r5_40{color:#666;font-size:14px}";
function Sm({ count: l = 0 }) {
  const [s, i] = E.useState(l);
  return E.useEffect(() => {
    i(l);
  }, [l]), E.useEffect(() => {
    const c = "react-counter-styles";
    if (!document.getElementById(c)) {
      const d = document.createElement("style");
      d.id = c, d.textContent = km, document.head.appendChild(d);
    }
  }, []), /* @__PURE__ */ re.jsx("div", { className: ur.container, children: /* @__PURE__ */ re.jsxs("div", { className: ur.counter, children: [
    /* @__PURE__ */ re.jsx("div", { className: ur.label, children: "React Counter:" }),
    /* @__PURE__ */ re.jsx("button", { type: "button", className: ur.button, onClick: () => i(s - 1), children: "-" }),
    /* @__PURE__ */ re.jsx("span", { className: ur.count, children: s }),
    /* @__PURE__ */ re.jsx("button", { type: "button", className: ur.button, onClick: () => i(s + 1), children: "+" })
  ] }) });
}
const Em = Co(Sm, {
  props: {
    count: "number"
  }
});
customElements.get("react-counter") || customElements.define("react-counter", Em);
var xm = _f(), Cm = Object.defineProperty, Pm = (l, s, i) => s in l ? Cm(l, s, { enumerable: !0, configurable: !0, writable: !0, value: i }) : l[s] = i, $i = (l, s, i) => (Pm(l, typeof s != "symbol" ? s + "" : s, i), i);
let Nm = class {
  constructor() {
    $i(this, "current", this.detect()), $i(this, "handoffState", "pending"), $i(this, "currentId", 0);
  }
  set(s) {
    this.current !== s && (this.handoffState = "pending", this.currentId = 0, this.current = s);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
}, Ot = new Nm();
function el(l) {
  var s;
  return Ot.isServer ? null : l == null ? document : (s = l?.ownerDocument) != null ? s : document;
}
function Bi(l) {
  var s, i;
  return Ot.isServer ? null : l == null ? document : (i = (s = l?.getRootNode) == null ? void 0 : s.call(l)) != null ? i : document;
}
function Sf(l) {
  var s, i;
  return (i = (s = Bi(l)) == null ? void 0 : s.activeElement) != null ? i : null;
}
function Tm(l) {
  return Sf(l) === l;
}
function Po(l) {
  typeof queueMicrotask == "function" ? queueMicrotask(l) : Promise.resolve().then(l).catch((s) => setTimeout(() => {
    throw s;
  }));
}
function Qt() {
  let l = [], s = { addEventListener(i, c, d, v) {
    return i.addEventListener(c, d, v), s.add(() => i.removeEventListener(c, d, v));
  }, requestAnimationFrame(...i) {
    let c = requestAnimationFrame(...i);
    return s.add(() => cancelAnimationFrame(c));
  }, nextFrame(...i) {
    return s.requestAnimationFrame(() => s.requestAnimationFrame(...i));
  }, setTimeout(...i) {
    let c = setTimeout(...i);
    return s.add(() => clearTimeout(c));
  }, microTask(...i) {
    let c = { current: !0 };
    return Po(() => {
      c.current && i[0]();
    }), s.add(() => {
      c.current = !1;
    });
  }, style(i, c, d) {
    let v = i.style.getPropertyValue(c);
    return Object.assign(i.style, { [c]: d }), this.add(() => {
      Object.assign(i.style, { [c]: v });
    });
  }, group(i) {
    let c = Qt();
    return i(c), this.add(() => c.dispose());
  }, add(i) {
    return l.includes(i) || l.push(i), () => {
      let c = l.indexOf(i);
      if (c >= 0) for (let d of l.splice(c, 1)) d();
    };
  }, dispose() {
    for (let i of l.splice(0)) i();
  } };
  return s;
}
function No() {
  let [l] = E.useState(Qt);
  return E.useEffect(() => () => l.dispose(), [l]), l;
}
let et = (l, s) => {
  Ot.isServer ? E.useEffect(l, s) : E.useLayoutEffect(l, s);
};
function $n(l) {
  let s = E.useRef(l);
  return et(() => {
    s.current = l;
  }, [l]), s;
}
let he = function(l) {
  let s = $n(l);
  return ee.useCallback((...i) => s.current(...i), [s]);
};
function tl(l) {
  return E.useMemo(() => l, Object.values(l));
}
let Lm = E.createContext(void 0);
function Rm() {
  return E.useContext(Lm);
}
function Hi(...l) {
  return Array.from(new Set(l.flatMap((s) => typeof s == "string" ? s.split(" ") : []))).filter(Boolean).join(" ");
}
function Wt(l, s, ...i) {
  if (l in s) {
    let d = s[l];
    return typeof d == "function" ? d(...i) : d;
  }
  let c = new Error(`Tried to handle "${l}" but there is no handler defined. Only defined handlers are: ${Object.keys(s).map((d) => `"${d}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(c, Wt), c;
}
var ko = ((l) => (l[l.None = 0] = "None", l[l.RenderStrategy = 1] = "RenderStrategy", l[l.Static = 2] = "Static", l))(ko || {}), pn = ((l) => (l[l.Unmount = 0] = "Unmount", l[l.Hidden = 1] = "Hidden", l))(pn || {});
function vt() {
  let l = zm();
  return E.useCallback((s) => Om({ mergeRefs: l, ...s }), [l]);
}
function Om({ ourProps: l, theirProps: s, slot: i, defaultTag: c, features: d, visible: v = !0, name: _, mergeRefs: g }) {
  g = g ?? Fm;
  let m = Ef(s, l);
  if (v) return yo(m, i, c, _, g);
  let x = d ?? 0;
  if (x & 2) {
    let { static: T = !1, ...$ } = m;
    if (T) return yo($, i, c, _, g);
  }
  if (x & 1) {
    let { unmount: T = !0, ...$ } = m;
    return Wt(T ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return yo({ ...$, hidden: !0, style: { display: "none" } }, i, c, _, g);
    } });
  }
  return yo(m, i, c, _, g);
}
function yo(l, s = {}, i, c, d) {
  let { as: v = i, children: _, refName: g = "ref", ...m } = ji(l, ["unmount", "static"]), x = l.ref !== void 0 ? { [g]: l.ref } : {}, T = typeof _ == "function" ? _(s) : _;
  "className" in m && m.className && typeof m.className == "function" && (m.className = m.className(s)), m["aria-labelledby"] && m["aria-labelledby"] === m.id && (m["aria-labelledby"] = void 0);
  let $ = {};
  if (s) {
    let L = !1, F = [];
    for (let [O, M] of Object.entries(s)) typeof M == "boolean" && (L = !0), M === !0 && F.push(O.replace(/([A-Z])/g, (D) => `-${D.toLowerCase()}`));
    if (L) {
      $["data-headlessui-state"] = F.join(" ");
      for (let O of F) $[`data-${O}`] = "";
    }
  }
  if (Jr(v) && (Object.keys(Rn(m)).length > 0 || Object.keys(Rn($)).length > 0)) if (!E.isValidElement(T) || Array.isArray(T) && T.length > 1 || jm(T)) {
    if (Object.keys(Rn(m)).length > 0) throw new Error(['Passing props on "Fragment"!', "", `The current component <${c} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(Rn(m)).concat(Object.keys(Rn($))).map((L) => `  - ${L}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((L) => `  - ${L}`).join(`
`)].join(`
`));
  } else {
    let L = T.props, F = L?.className, O = typeof F == "function" ? (...Z) => Hi(F(...Z), m.className) : Hi(F, m.className), M = O ? { className: O } : {}, D = Ef(T.props, Rn(ji(m, ["ref"])));
    for (let Z in $) Z in D && delete $[Z];
    return E.cloneElement(T, Object.assign({}, D, $, x, { ref: d($m(T), x.ref) }, M));
  }
  return E.createElement(v, Object.assign({}, ji(m, ["ref"]), !Jr(v) && x, !Jr(v) && $), T);
}
function zm() {
  let l = E.useRef([]), s = E.useCallback((i) => {
    for (let c of l.current) c != null && (typeof c == "function" ? c(i) : c.current = i);
  }, []);
  return (...i) => {
    if (!i.every((c) => c == null)) return l.current = i, s;
  };
}
function Fm(...l) {
  return l.every((s) => s == null) ? void 0 : (s) => {
    for (let i of l) i != null && (typeof i == "function" ? i(s) : i.current = s);
  };
}
function Ef(...l) {
  if (l.length === 0) return {};
  if (l.length === 1) return l[0];
  let s = {}, i = {};
  for (let c of l) for (let d in c) d.startsWith("on") && typeof c[d] == "function" ? (i[d] != null || (i[d] = []), i[d].push(c[d])) : s[d] = c[d];
  if (s.disabled || s["aria-disabled"]) for (let c in i) /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(c) && (i[c] = [(d) => {
    var v;
    return (v = d?.preventDefault) == null ? void 0 : v.call(d);
  }]);
  for (let c in i) Object.assign(s, { [c](d, ...v) {
    let _ = i[c];
    for (let g of _) {
      if ((d instanceof Event || d?.nativeEvent instanceof Event) && d.defaultPrevented) return;
      g(d, ...v);
    }
  } });
  return s;
}
function tt(l) {
  var s;
  return Object.assign(E.forwardRef(l), { displayName: (s = l.displayName) != null ? s : l.name });
}
function Rn(l) {
  let s = Object.assign({}, l);
  for (let i in s) s[i] === void 0 && delete s[i];
  return s;
}
function ji(l, s = []) {
  let i = Object.assign({}, l);
  for (let c of s) c in i && delete i[c];
  return i;
}
function $m(l) {
  return ee.version.split(".")[0] >= "19" ? l.props.ref : l.ref;
}
function Jr(l) {
  return l === E.Fragment || l === /* @__PURE__ */ Symbol.for("react.fragment");
}
function jm(l) {
  return Jr(l.type);
}
let Dm = "span";
var So = ((l) => (l[l.None = 1] = "None", l[l.Focusable = 2] = "Focusable", l[l.Hidden = 4] = "Hidden", l))(So || {});
function Mm(l, s) {
  var i;
  let { features: c = 1, ...d } = l, v = { ref: s, "aria-hidden": (c & 2) === 2 ? !0 : (i = d["aria-hidden"]) != null ? i : void 0, hidden: (c & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(c & 4) === 4 && (c & 2) !== 2 && { display: "none" } } };
  return vt()({ ourProps: v, theirProps: d, slot: {}, defaultTag: Dm, name: "Hidden" });
}
let Vi = tt(Mm);
function Im(l) {
  return typeof l != "object" || l === null ? !1 : "nodeType" in l;
}
function hn(l) {
  return Im(l) && "tagName" in l;
}
function Fn(l) {
  return hn(l) && "accessKey" in l;
}
function mn(l) {
  return hn(l) && "tabIndex" in l;
}
function Am(l) {
  return hn(l) && "style" in l;
}
function Um(l) {
  return Fn(l) && l.nodeName === "IFRAME";
}
function Bm(l) {
  return Fn(l) && l.nodeName === "INPUT";
}
let xf = /* @__PURE__ */ Symbol();
function Hm(l, s = !0) {
  return Object.assign(l, { [xf]: s });
}
function zt(...l) {
  let s = E.useRef(l);
  E.useEffect(() => {
    s.current = l;
  }, [l]);
  let i = he((c) => {
    for (let d of s.current) d != null && (typeof d == "function" ? d(c) : d.current = c);
  });
  return l.every((c) => c == null || c?.[xf]) ? void 0 : i;
}
let Xi = E.createContext(null);
Xi.displayName = "DescriptionContext";
function Cf() {
  let l = E.useContext(Xi);
  if (l === null) {
    let s = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(s, Cf), s;
  }
  return l;
}
function Vm() {
  let [l, s] = E.useState([]);
  return [l.length > 0 ? l.join(" ") : void 0, E.useMemo(() => function(i) {
    let c = he((v) => (s((_) => [..._, v]), () => s((_) => {
      let g = _.slice(), m = g.indexOf(v);
      return m !== -1 && g.splice(m, 1), g;
    }))), d = E.useMemo(() => ({ register: c, slot: i.slot, name: i.name, props: i.props, value: i.value }), [c, i.slot, i.name, i.props, i.value]);
    return ee.createElement(Xi.Provider, { value: d }, i.children);
  }, [s])];
}
let Wm = "p";
function Qm(l, s) {
  let i = E.useId(), c = Rm(), { id: d = `headlessui-description-${i}`, ...v } = l, _ = Cf(), g = zt(s);
  et(() => _.register(d), [d, _.register]);
  let m = tl({ ..._.slot, disabled: c || !1 }), x = { ref: g, ..._.props, id: d };
  return vt()({ ourProps: x, theirProps: v, slot: m, defaultTag: Wm, name: _.name || "Description" });
}
let Km = tt(Qm), Ym = Object.assign(Km, {});
var Pf = ((l) => (l.Space = " ", l.Enter = "Enter", l.Escape = "Escape", l.Backspace = "Backspace", l.Delete = "Delete", l.ArrowLeft = "ArrowLeft", l.ArrowUp = "ArrowUp", l.ArrowRight = "ArrowRight", l.ArrowDown = "ArrowDown", l.Home = "Home", l.End = "End", l.PageUp = "PageUp", l.PageDown = "PageDown", l.Tab = "Tab", l))(Pf || {});
let Xm = E.createContext(() => {
});
function Gm({ value: l, children: s }) {
  return ee.createElement(Xm.Provider, { value: l }, s);
}
let Nf = class extends Map {
  constructor(s) {
    super(), this.factory = s;
  }
  get(s) {
    let i = super.get(s);
    return i === void 0 && (i = this.factory(s), this.set(s, i)), i;
  }
};
var Zm = Object.defineProperty, Jm = (l, s, i) => s in l ? Zm(l, s, { enumerable: !0, configurable: !0, writable: !0, value: i }) : l[s] = i, qm = (l, s, i) => (Jm(l, s + "", i), i), Tf = (l, s, i) => {
  if (!s.has(l)) throw TypeError("Cannot " + i);
}, ht = (l, s, i) => (Tf(l, s, "read from private field"), i ? i.call(l) : s.get(l)), Di = (l, s, i) => {
  if (s.has(l)) throw TypeError("Cannot add the same private member more than once");
  s instanceof WeakSet ? s.add(l) : s.set(l, i);
}, lf = (l, s, i, c) => (Tf(l, s, "write to private field"), s.set(l, i), i), Rt, Xr, Gr;
let bm = class {
  constructor(s) {
    Di(this, Rt, {}), Di(this, Xr, new Nf(() => /* @__PURE__ */ new Set())), Di(this, Gr, /* @__PURE__ */ new Set()), qm(this, "disposables", Qt()), lf(this, Rt, s), Ot.isServer && this.disposables.microTask(() => {
      this.dispose();
    });
  }
  dispose() {
    this.disposables.dispose();
  }
  get state() {
    return ht(this, Rt);
  }
  subscribe(s, i) {
    if (Ot.isServer) return () => {
    };
    let c = { selector: s, callback: i, current: s(ht(this, Rt)) };
    return ht(this, Gr).add(c), this.disposables.add(() => {
      ht(this, Gr).delete(c);
    });
  }
  on(s, i) {
    return Ot.isServer ? () => {
    } : (ht(this, Xr).get(s).add(i), this.disposables.add(() => {
      ht(this, Xr).get(s).delete(i);
    }));
  }
  send(s) {
    let i = this.reduce(ht(this, Rt), s);
    if (i !== ht(this, Rt)) {
      lf(this, Rt, i);
      for (let c of ht(this, Gr)) {
        let d = c.selector(ht(this, Rt));
        Lf(c.current, d) || (c.current = d, c.callback(d));
      }
      for (let c of ht(this, Xr).get(s.type)) c(ht(this, Rt), s);
    }
  }
};
Rt = /* @__PURE__ */ new WeakMap(), Xr = /* @__PURE__ */ new WeakMap(), Gr = /* @__PURE__ */ new WeakMap();
function Lf(l, s) {
  return Object.is(l, s) ? !0 : typeof l != "object" || l === null || typeof s != "object" || s === null ? !1 : Array.isArray(l) && Array.isArray(s) ? l.length !== s.length ? !1 : Mi(l[Symbol.iterator](), s[Symbol.iterator]()) : l instanceof Map && s instanceof Map || l instanceof Set && s instanceof Set ? l.size !== s.size ? !1 : Mi(l.entries(), s.entries()) : of(l) && of(s) ? Mi(Object.entries(l)[Symbol.iterator](), Object.entries(s)[Symbol.iterator]()) : !1;
}
function Mi(l, s) {
  do {
    let i = l.next(), c = s.next();
    if (i.done && c.done) return !0;
    if (i.done || c.done || !Object.is(i.value, c.value)) return !1;
  } while (!0);
}
function of(l) {
  if (Object.prototype.toString.call(l) !== "[object Object]") return !1;
  let s = Object.getPrototypeOf(l);
  return s === null || Object.getPrototypeOf(s) === null;
}
var eh = Object.defineProperty, th = (l, s, i) => s in l ? eh(l, s, { enumerable: !0, configurable: !0, writable: !0, value: i }) : l[s] = i, uf = (l, s, i) => (th(l, typeof s != "symbol" ? s + "" : s, i), i), nh = ((l) => (l[l.Push = 0] = "Push", l[l.Pop = 1] = "Pop", l))(nh || {});
let rh = { 0(l, s) {
  let i = s.id, c = l.stack, d = l.stack.indexOf(i);
  if (d !== -1) {
    let v = l.stack.slice();
    return v.splice(d, 1), v.push(i), c = v, { ...l, stack: c };
  }
  return { ...l, stack: [...l.stack, i] };
}, 1(l, s) {
  let i = s.id, c = l.stack.indexOf(i);
  if (c === -1) return l;
  let d = l.stack.slice();
  return d.splice(c, 1), { ...l, stack: d };
} }, lh = class Rf extends bm {
  constructor() {
    super(...arguments), uf(this, "actions", { push: (s) => this.send({ type: 0, id: s }), pop: (s) => this.send({ type: 1, id: s }) }), uf(this, "selectors", { isTop: (s, i) => s.stack[s.stack.length - 1] === i, inStack: (s, i) => s.stack.includes(i) });
  }
  static new() {
    return new Rf({ stack: [] });
  }
  reduce(s, i) {
    return Wt(i.type, rh, s, i);
  }
};
const Of = new Nf(() => lh.new());
var Ii = { exports: {} }, Ai = {};
var sf;
function oh() {
  if (sf) return Ai;
  sf = 1;
  var l = xo();
  function s(m, x) {
    return m === x && (m !== 0 || 1 / m === 1 / x) || m !== m && x !== x;
  }
  var i = typeof Object.is == "function" ? Object.is : s, c = l.useSyncExternalStore, d = l.useRef, v = l.useEffect, _ = l.useMemo, g = l.useDebugValue;
  return Ai.useSyncExternalStoreWithSelector = function(m, x, T, $, L) {
    var F = d(null);
    if (F.current === null) {
      var O = { hasValue: !1, value: null };
      F.current = O;
    } else O = F.current;
    F = _(
      function() {
        function D(K) {
          if (!Z) {
            if (Z = !0, q = K, K = $(K), L !== void 0 && O.hasValue) {
              var ne = O.value;
              if (L(ne, K))
                return J = ne;
            }
            return J = K;
          }
          if (ne = J, i(q, K)) return ne;
          var ue = $(K);
          return L !== void 0 && L(ne, ue) ? (q = K, ne) : (q = K, J = ue);
        }
        var Z = !1, q, J, I = T === void 0 ? null : T;
        return [
          function() {
            return D(x());
          },
          I === null ? void 0 : function() {
            return D(I());
          }
        ];
      },
      [x, T, $, L]
    );
    var M = c(m, F[0], F[1]);
    return v(
      function() {
        O.hasValue = !0, O.value = M;
      },
      [M]
    ), g(M), M;
  }, Ai;
}
var af;
function uh() {
  return af || (af = 1, Ii.exports = oh()), Ii.exports;
}
var ih = uh();
function zf(l, s, i = Lf) {
  return ih.useSyncExternalStoreWithSelector(he((c) => l.subscribe(sh, c)), he(() => l.state), he(() => l.state), he(s), i);
}
function sh(l) {
  return l;
}
function nl(l, s) {
  let i = E.useId(), c = Of.get(s), [d, v] = zf(c, E.useCallback((_) => [c.selectors.isTop(_, i), c.selectors.inStack(_, i)], [c, i]));
  return et(() => {
    if (l) return c.actions.push(i), () => c.actions.pop(i);
  }, [c, l, i]), l ? v ? d : !0 : !1;
}
let Wi = /* @__PURE__ */ new Map(), qr = /* @__PURE__ */ new Map();
function cf(l) {
  var s;
  let i = (s = qr.get(l)) != null ? s : 0;
  return qr.set(l, i + 1), i !== 0 ? () => ff(l) : (Wi.set(l, { "aria-hidden": l.getAttribute("aria-hidden"), inert: l.inert }), l.setAttribute("aria-hidden", "true"), l.inert = !0, () => ff(l));
}
function ff(l) {
  var s;
  let i = (s = qr.get(l)) != null ? s : 1;
  if (i === 1 ? qr.delete(l) : qr.set(l, i - 1), i !== 1) return;
  let c = Wi.get(l);
  c && (c["aria-hidden"] === null ? l.removeAttribute("aria-hidden") : l.setAttribute("aria-hidden", c["aria-hidden"]), l.inert = c.inert, Wi.delete(l));
}
function ah(l, { allowed: s, disallowed: i } = {}) {
  let c = nl(l, "inert-others");
  et(() => {
    var d, v;
    if (!c) return;
    let _ = Qt();
    for (let m of (d = i?.()) != null ? d : []) m && _.add(cf(m));
    let g = (v = s?.()) != null ? v : [];
    for (let m of g) {
      if (!m) continue;
      let x = el(m);
      if (!x) continue;
      let T = m.parentElement;
      for (; T && T !== x.body; ) {
        for (let $ of T.children) g.some((L) => $.contains(L)) || _.add(cf($));
        T = T.parentElement;
      }
    }
    return _.dispose;
  }, [c, s, i]);
}
function ch(l, s, i) {
  let c = $n((d) => {
    let v = d.getBoundingClientRect();
    v.x === 0 && v.y === 0 && v.width === 0 && v.height === 0 && i();
  });
  E.useEffect(() => {
    if (!l) return;
    let d = s === null ? null : Fn(s) ? s : s.current;
    if (!d) return;
    let v = Qt();
    if (typeof ResizeObserver < "u") {
      let _ = new ResizeObserver(() => c.current(d));
      _.observe(d), v.add(() => _.disconnect());
    }
    if (typeof IntersectionObserver < "u") {
      let _ = new IntersectionObserver(() => c.current(d));
      _.observe(d), v.add(() => _.disconnect());
    }
    return () => v.dispose();
  }, [s, c, l]);
}
let Eo = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "details>summary", "textarea:not([disabled])"].map((l) => `${l}:not([tabindex='-1'])`).join(","), fh = ["[data-autofocus]"].map((l) => `${l}:not([tabindex='-1'])`).join(",");
var Ht = ((l) => (l[l.First = 1] = "First", l[l.Previous = 2] = "Previous", l[l.Next = 4] = "Next", l[l.Last = 8] = "Last", l[l.WrapAround = 16] = "WrapAround", l[l.NoScroll = 32] = "NoScroll", l[l.AutoFocus = 64] = "AutoFocus", l))(Ht || {}), Qi = ((l) => (l[l.Error = 0] = "Error", l[l.Overflow = 1] = "Overflow", l[l.Success = 2] = "Success", l[l.Underflow = 3] = "Underflow", l))(Qi || {}), dh = ((l) => (l[l.Previous = -1] = "Previous", l[l.Next = 1] = "Next", l))(dh || {});
function ph(l = document.body) {
  return l == null ? [] : Array.from(l.querySelectorAll(Eo)).sort((s, i) => Math.sign((s.tabIndex || Number.MAX_SAFE_INTEGER) - (i.tabIndex || Number.MAX_SAFE_INTEGER)));
}
function mh(l = document.body) {
  return l == null ? [] : Array.from(l.querySelectorAll(fh)).sort((s, i) => Math.sign((s.tabIndex || Number.MAX_SAFE_INTEGER) - (i.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Ff = ((l) => (l[l.Strict = 0] = "Strict", l[l.Loose = 1] = "Loose", l))(Ff || {});
function hh(l, s = 0) {
  var i;
  return l === ((i = el(l)) == null ? void 0 : i.body) ? !1 : Wt(s, { 0() {
    return l.matches(Eo);
  }, 1() {
    let c = l;
    for (; c !== null; ) {
      if (c.matches(Eo)) return !0;
      c = c.parentElement;
    }
    return !1;
  } });
}
var vh = ((l) => (l[l.Keyboard = 0] = "Keyboard", l[l.Mouse = 1] = "Mouse", l))(vh || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (l) => {
  l.metaKey || l.altKey || l.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (l) => {
  l.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : l.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function Vt(l) {
  l?.focus({ preventScroll: !0 });
}
let yh = ["textarea", "input"].join(",");
function gh(l) {
  var s, i;
  return (i = (s = l?.matches) == null ? void 0 : s.call(l, yh)) != null ? i : !1;
}
function wh(l, s = (i) => i) {
  return l.slice().sort((i, c) => {
    let d = s(i), v = s(c);
    if (d === null || v === null) return 0;
    let _ = d.compareDocumentPosition(v);
    return _ & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : _ & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function br(l, s, { sorted: i = !0, relativeTo: c = null, skipElements: d = [] } = {}) {
  let v = Array.isArray(l) ? l.length > 0 ? Bi(l[0]) : document : Bi(l), _ = Array.isArray(l) ? i ? wh(l) : l : s & 64 ? mh(l) : ph(l);
  d.length > 0 && _.length > 1 && (_ = _.filter((F) => !d.some((O) => O != null && "current" in O ? O?.current === F : O === F))), c = c ?? v?.activeElement;
  let g = (() => {
    if (s & 5) return 1;
    if (s & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), m = (() => {
    if (s & 1) return 0;
    if (s & 2) return Math.max(0, _.indexOf(c)) - 1;
    if (s & 4) return Math.max(0, _.indexOf(c)) + 1;
    if (s & 8) return _.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), x = s & 32 ? { preventScroll: !0 } : {}, T = 0, $ = _.length, L;
  do {
    if (T >= $ || T + $ <= 0) return 0;
    let F = m + T;
    if (s & 16) F = (F + $) % $;
    else {
      if (F < 0) return 3;
      if (F >= $) return 1;
    }
    L = _[F], L?.focus(x), T += g;
  } while (L !== Sf(L));
  return s & 6 && gh(L) && L.select(), 2;
}
function $f() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function _h() {
  return /Android/gi.test(window.navigator.userAgent);
}
function df() {
  return $f() || _h();
}
function go(l, s, i, c) {
  let d = $n(i);
  E.useEffect(() => {
    if (!l) return;
    function v(_) {
      d.current(_);
    }
    return document.addEventListener(s, v, c), () => document.removeEventListener(s, v, c);
  }, [l, s, c]);
}
function jf(l, s, i, c) {
  let d = $n(i);
  E.useEffect(() => {
    if (!l) return;
    function v(_) {
      d.current(_);
    }
    return window.addEventListener(s, v, c), () => window.removeEventListener(s, v, c);
  }, [l, s, c]);
}
const pf = 30;
function kh(l, s, i) {
  let c = $n(i), d = E.useCallback(function(g, m) {
    if (g.defaultPrevented) return;
    let x = m(g);
    if (x === null || !x.getRootNode().contains(x) || !x.isConnected) return;
    let T = (function $(L) {
      return typeof L == "function" ? $(L()) : Array.isArray(L) || L instanceof Set ? L : [L];
    })(s);
    for (let $ of T) if ($ !== null && ($.contains(x) || g.composed && g.composedPath().includes($))) return;
    return !hh(x, Ff.Loose) && x.tabIndex !== -1 && g.preventDefault(), c.current(g, x);
  }, [c, s]), v = E.useRef(null);
  go(l, "pointerdown", (g) => {
    var m, x;
    df() || (v.current = ((x = (m = g.composedPath) == null ? void 0 : m.call(g)) == null ? void 0 : x[0]) || g.target);
  }, !0), go(l, "pointerup", (g) => {
    if (df() || !v.current) return;
    let m = v.current;
    return v.current = null, d(g, () => m);
  }, !0);
  let _ = E.useRef({ x: 0, y: 0 });
  go(l, "touchstart", (g) => {
    _.current.x = g.touches[0].clientX, _.current.y = g.touches[0].clientY;
  }, !0), go(l, "touchend", (g) => {
    let m = { x: g.changedTouches[0].clientX, y: g.changedTouches[0].clientY };
    if (!(Math.abs(m.x - _.current.x) >= pf || Math.abs(m.y - _.current.y) >= pf)) return d(g, () => mn(g.target) ? g.target : null);
  }, !0), jf(l, "blur", (g) => d(g, () => Um(window.document.activeElement) ? window.document.activeElement : null), !0);
}
function Gi(...l) {
  return E.useMemo(() => el(...l), [...l]);
}
function Df(l, s, i, c) {
  let d = $n(i);
  E.useEffect(() => {
    l = l ?? window;
    function v(_) {
      d.current(_);
    }
    return l.addEventListener(s, v, c), () => l.removeEventListener(s, v, c);
  }, [l, s, c]);
}
function Sh(l) {
  return E.useSyncExternalStore(l.subscribe, l.getSnapshot, l.getSnapshot);
}
function Eh(l, s) {
  let i = l(), c = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return i;
  }, subscribe(d) {
    return c.add(d), () => c.delete(d);
  }, dispatch(d, ...v) {
    let _ = s[d].call(i, ...v);
    _ && (i = _, c.forEach((g) => g()));
  } };
}
function xh() {
  let l;
  return { before({ doc: s }) {
    var i;
    let c = s.documentElement, d = (i = s.defaultView) != null ? i : window;
    l = Math.max(0, d.innerWidth - c.clientWidth);
  }, after({ doc: s, d: i }) {
    let c = s.documentElement, d = Math.max(0, c.clientWidth - c.offsetWidth), v = Math.max(0, l - d);
    i.style(c, "paddingRight", `${v}px`);
  } };
}
function Ch() {
  return $f() ? { before({ doc: l, d: s, meta: i }) {
    function c(d) {
      for (let v of i().containers) for (let _ of v()) if (_.contains(d)) return !0;
      return !1;
    }
    s.microTask(() => {
      var d;
      if (window.getComputedStyle(l.documentElement).scrollBehavior !== "auto") {
        let g = Qt();
        g.style(l.documentElement, "scrollBehavior", "auto"), s.add(() => s.microTask(() => g.dispose()));
      }
      let v = (d = window.scrollY) != null ? d : window.pageYOffset, _ = null;
      s.addEventListener(l, "click", (g) => {
        if (mn(g.target)) try {
          let m = g.target.closest("a");
          if (!m) return;
          let { hash: x } = new URL(m.href), T = l.querySelector(x);
          mn(T) && !c(T) && (_ = T);
        } catch {
        }
      }, !0), s.group((g) => {
        s.addEventListener(l, "touchstart", (m) => {
          if (g.dispose(), mn(m.target) && Am(m.target)) if (c(m.target)) {
            let x = m.target;
            for (; x.parentElement && c(x.parentElement); ) x = x.parentElement;
            g.style(x, "overscrollBehavior", "contain");
          } else g.style(m.target, "touchAction", "none");
        });
      }), s.addEventListener(l, "touchmove", (g) => {
        if (mn(g.target)) {
          if (Bm(g.target)) return;
          if (c(g.target)) {
            let m = g.target;
            for (; m.parentElement && m.dataset.headlessuiPortal !== "" && !(m.scrollHeight > m.clientHeight || m.scrollWidth > m.clientWidth); ) m = m.parentElement;
            m.dataset.headlessuiPortal === "" && g.preventDefault();
          } else g.preventDefault();
        }
      }, { passive: !1 }), s.add(() => {
        var g;
        let m = (g = window.scrollY) != null ? g : window.pageYOffset;
        v !== m && window.scrollTo(0, v), _ && _.isConnected && (_.scrollIntoView({ block: "nearest" }), _ = null);
      });
    });
  } } : {};
}
function Ph() {
  return { before({ doc: l, d: s }) {
    s.style(l.documentElement, "overflow", "hidden");
  } };
}
function mf(l) {
  let s = {};
  for (let i of l) Object.assign(s, i(s));
  return s;
}
let zn = Eh(() => /* @__PURE__ */ new Map(), { PUSH(l, s) {
  var i;
  let c = (i = this.get(l)) != null ? i : { doc: l, count: 0, d: Qt(), meta: /* @__PURE__ */ new Set(), computedMeta: {} };
  return c.count++, c.meta.add(s), c.computedMeta = mf(c.meta), this.set(l, c), this;
}, POP(l, s) {
  let i = this.get(l);
  return i && (i.count--, i.meta.delete(s), i.computedMeta = mf(i.meta)), this;
}, SCROLL_PREVENT(l) {
  let s = { doc: l.doc, d: l.d, meta() {
    return l.computedMeta;
  } }, i = [Ch(), xh(), Ph()];
  i.forEach(({ before: c }) => c?.(s)), i.forEach(({ after: c }) => c?.(s));
}, SCROLL_ALLOW({ d: l }) {
  l.dispose();
}, TEARDOWN({ doc: l }) {
  this.delete(l);
} });
zn.subscribe(() => {
  let l = zn.getSnapshot(), s = /* @__PURE__ */ new Map();
  for (let [i] of l) s.set(i, i.documentElement.style.overflow);
  for (let i of l.values()) {
    let c = s.get(i.doc) === "hidden", d = i.count !== 0;
    (d && !c || !d && c) && zn.dispatch(i.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", i), i.count === 0 && zn.dispatch("TEARDOWN", i);
  }
});
function Nh(l, s, i = () => ({ containers: [] })) {
  let c = Sh(zn), d = s ? c.get(s) : void 0, v = d ? d.count > 0 : !1;
  return et(() => {
    if (!(!s || !l)) return zn.dispatch("PUSH", s, i), () => zn.dispatch("POP", s, i);
  }, [l, s]), v;
}
function Th(l, s, i = () => [document.body]) {
  let c = nl(l, "scroll-lock");
  Nh(c, s, (d) => {
    var v;
    return { containers: [...(v = d.containers) != null ? v : [], i] };
  });
}
function Lh(l = 0) {
  let [s, i] = E.useState(l), c = E.useCallback((m) => i(m), []), d = E.useCallback((m) => i((x) => x | m), []), v = E.useCallback((m) => (s & m) === m, [s]), _ = E.useCallback((m) => i((x) => x & ~m), []), g = E.useCallback((m) => i((x) => x ^ m), []);
  return { flags: s, setFlag: c, addFlag: d, hasFlag: v, removeFlag: _, toggleFlag: g };
}
var hf, vf;
typeof process < "u" && typeof globalThis < "u" && typeof Element < "u" && ((hf = process == null ? void 0 : process.env) == null ? void 0 : hf.NODE_ENV) === "test" && typeof ((vf = Element?.prototype) == null ? void 0 : vf.getAnimations) > "u" && (Element.prototype.getAnimations = function() {
  return console.warn(["Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.", "Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.", "", "Example usage:", "```js", "import { mockAnimationsApi } from 'jsdom-testing-mocks'", "mockAnimationsApi()", "```"].join(`
`)), [];
});
var Rh = ((l) => (l[l.None = 0] = "None", l[l.Closed = 1] = "Closed", l[l.Enter = 2] = "Enter", l[l.Leave = 4] = "Leave", l))(Rh || {});
function Oh(l) {
  let s = {};
  for (let i in l) l[i] === !0 && (s[`data-${i}`] = "");
  return s;
}
function zh(l, s, i, c) {
  let [d, v] = E.useState(i), { hasFlag: _, addFlag: g, removeFlag: m } = Lh(l && d ? 3 : 0), x = E.useRef(!1), T = E.useRef(!1), $ = No();
  return et(() => {
    var L;
    if (l) {
      if (i && v(!0), !s) {
        i && g(3);
        return;
      }
      return (L = c?.start) == null || L.call(c, i), Fh(s, { inFlight: x, prepare() {
        T.current ? T.current = !1 : T.current = x.current, x.current = !0, !T.current && (i ? (g(3), m(4)) : (g(4), m(2)));
      }, run() {
        T.current ? i ? (m(3), g(4)) : (m(4), g(3)) : i ? m(1) : g(1);
      }, done() {
        var F;
        T.current && Dh(s) || (x.current = !1, m(7), i || v(!1), (F = c?.end) == null || F.call(c, i));
      } });
    }
  }, [l, i, s, $]), l ? [d, { closed: _(1), enter: _(2), leave: _(4), transition: _(2) || _(4) }] : [i, { closed: void 0, enter: void 0, leave: void 0, transition: void 0 }];
}
function Fh(l, { prepare: s, run: i, done: c, inFlight: d }) {
  let v = Qt();
  return jh(l, { prepare: s, inFlight: d }), v.nextFrame(() => {
    i(), v.requestAnimationFrame(() => {
      v.add($h(l, c));
    });
  }), v.dispose;
}
function $h(l, s) {
  var i, c;
  let d = Qt();
  if (!l) return d.dispose;
  let v = !1;
  d.add(() => {
    v = !0;
  });
  let _ = (c = (i = l.getAnimations) == null ? void 0 : i.call(l).filter((g) => g instanceof CSSTransition)) != null ? c : [];
  return _.length === 0 ? (s(), d.dispose) : (Promise.allSettled(_.map((g) => g.finished)).then(() => {
    v || s();
  }), d.dispose);
}
function jh(l, { inFlight: s, prepare: i }) {
  if (s != null && s.current) {
    i();
    return;
  }
  let c = l.style.transition;
  l.style.transition = "none", i(), l.offsetHeight, l.style.transition = c;
}
function Dh(l) {
  var s, i;
  return ((i = (s = l.getAnimations) == null ? void 0 : s.call(l)) != null ? i : []).some((c) => c instanceof CSSTransition && c.playState !== "finished");
}
function Zi(l, s) {
  let i = E.useRef([]), c = he(l);
  E.useEffect(() => {
    let d = [...i.current];
    for (let [v, _] of s.entries()) if (i.current[v] !== _) {
      let g = c(s, d);
      return i.current = s, g;
    }
  }, [c, ...s]);
}
let To = E.createContext(null);
To.displayName = "OpenClosedContext";
var xt = ((l) => (l[l.Open = 1] = "Open", l[l.Closed = 2] = "Closed", l[l.Closing = 4] = "Closing", l[l.Opening = 8] = "Opening", l))(xt || {});
function Lo() {
  return E.useContext(To);
}
function Mh({ value: l, children: s }) {
  return ee.createElement(To.Provider, { value: l }, s);
}
function Ih({ children: l }) {
  return ee.createElement(To.Provider, { value: null }, l);
}
function Ah(l) {
  function s() {
    document.readyState !== "loading" && (l(), document.removeEventListener("DOMContentLoaded", s));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", s), s());
}
let dn = [];
Ah(() => {
  function l(s) {
    if (!mn(s.target) || s.target === document.body || dn[0] === s.target) return;
    let i = s.target;
    i = i.closest(Eo), dn.unshift(i ?? s.target), dn = dn.filter((c) => c != null && c.isConnected), dn.splice(10);
  }
  window.addEventListener("click", l, { capture: !0 }), window.addEventListener("mousedown", l, { capture: !0 }), window.addEventListener("focus", l, { capture: !0 }), document.body.addEventListener("click", l, { capture: !0 }), document.body.addEventListener("mousedown", l, { capture: !0 }), document.body.addEventListener("focus", l, { capture: !0 });
});
function Mf(l) {
  let s = he(l), i = E.useRef(!1);
  E.useEffect(() => (i.current = !1, () => {
    i.current = !0, Po(() => {
      i.current && s();
    });
  }), [s]);
}
let If = E.createContext(!1);
function Uh() {
  return E.useContext(If);
}
function yf(l) {
  return ee.createElement(If.Provider, { value: l.force }, l.children);
}
function Bh(l) {
  let s = Uh(), i = E.useContext(Uf), [c, d] = E.useState(() => {
    var v;
    if (!s && i !== null) return (v = i.current) != null ? v : null;
    if (Ot.isServer) return null;
    let _ = l?.getElementById("headlessui-portal-root");
    if (_) return _;
    if (l === null) return null;
    let g = l.createElement("div");
    return g.setAttribute("id", "headlessui-portal-root"), l.body.appendChild(g);
  });
  return E.useEffect(() => {
    c !== null && (l != null && l.body.contains(c) || l == null || l.body.appendChild(c));
  }, [c, l]), E.useEffect(() => {
    s || i !== null && d(i.current);
  }, [i, d, s]), c;
}
let Af = E.Fragment, Hh = tt(function(l, s) {
  let { ownerDocument: i = null, ...c } = l, d = E.useRef(null), v = zt(Hm((L) => {
    d.current = L;
  }), s), _ = Gi(d.current), g = i ?? _, m = Bh(g), x = E.useContext(Ki), T = No(), $ = vt();
  return Mf(() => {
    var L;
    m && m.childNodes.length <= 0 && ((L = m.parentElement) == null || L.removeChild(m));
  }), m ? xm.createPortal(ee.createElement("div", { "data-headlessui-portal": "", ref: (L) => {
    T.dispose(), x && L && T.add(x.register(L));
  } }, $({ ourProps: { ref: v }, theirProps: c, slot: {}, defaultTag: Af, name: "Portal" })), m) : null;
});
function Vh(l, s) {
  let i = zt(s), { enabled: c = !0, ownerDocument: d, ...v } = l, _ = vt();
  return c ? ee.createElement(Hh, { ...v, ownerDocument: d, ref: i }) : _({ ourProps: { ref: i }, theirProps: v, slot: {}, defaultTag: Af, name: "Portal" });
}
let Wh = E.Fragment, Uf = E.createContext(null);
function Qh(l, s) {
  let { target: i, ...c } = l, d = { ref: zt(s) }, v = vt();
  return ee.createElement(Uf.Provider, { value: i }, v({ ourProps: d, theirProps: c, defaultTag: Wh, name: "Popover.Group" }));
}
let Ki = E.createContext(null);
function Kh() {
  let l = E.useContext(Ki), s = E.useRef([]), i = he((v) => (s.current.push(v), l && l.register(v), () => c(v))), c = he((v) => {
    let _ = s.current.indexOf(v);
    _ !== -1 && s.current.splice(_, 1), l && l.unregister(v);
  }), d = E.useMemo(() => ({ register: i, unregister: c, portals: s }), [i, c, s]);
  return [s, E.useMemo(() => function({ children: v }) {
    return ee.createElement(Ki.Provider, { value: d }, v);
  }, [d])];
}
let Yh = tt(Vh), Bf = tt(Qh), Xh = Object.assign(Yh, { Group: Bf });
function Gh(l, s = typeof document < "u" ? document.defaultView : null, i) {
  let c = nl(l, "escape");
  Df(s, "keydown", (d) => {
    c && (d.defaultPrevented || d.key === Pf.Escape && i(d));
  });
}
function Zh() {
  var l;
  let [s] = E.useState(() => typeof window < "u" && typeof window.matchMedia == "function" ? window.matchMedia("(pointer: coarse)") : null), [i, c] = E.useState((l = s?.matches) != null ? l : !1);
  return et(() => {
    if (!s) return;
    function d(v) {
      c(v.matches);
    }
    return s.addEventListener("change", d), () => s.removeEventListener("change", d);
  }, [s]), i;
}
function Jh({ defaultContainers: l = [], portals: s, mainTreeNode: i } = {}) {
  let c = he(() => {
    var d, v;
    let _ = el(i), g = [];
    for (let m of l) m !== null && (hn(m) ? g.push(m) : "current" in m && hn(m.current) && g.push(m.current));
    if (s != null && s.current) for (let m of s.current) g.push(m);
    for (let m of (d = _?.querySelectorAll("html > *, body > *")) != null ? d : []) m !== document.body && m !== document.head && hn(m) && m.id !== "headlessui-portal-root" && (i && (m.contains(i) || m.contains((v = i?.getRootNode()) == null ? void 0 : v.host)) || g.some((x) => m.contains(x)) || g.push(m));
    return g;
  });
  return { resolveContainers: c, contains: he((d) => c().some((v) => v.contains(d))) };
}
let Hf = E.createContext(null);
function gf({ children: l, node: s }) {
  let [i, c] = E.useState(null), d = Vf(s ?? i);
  return ee.createElement(Hf.Provider, { value: d }, l, d === null && ee.createElement(Vi, { features: So.Hidden, ref: (v) => {
    var _, g;
    if (v) {
      for (let m of (g = (_ = el(v)) == null ? void 0 : _.querySelectorAll("html > *, body > *")) != null ? g : []) if (m !== document.body && m !== document.head && hn(m) && m != null && m.contains(v)) {
        c(m);
        break;
      }
    }
  } }));
}
function Vf(l = null) {
  var s;
  return (s = E.useContext(Hf)) != null ? s : l;
}
function qh() {
  let l = typeof document > "u";
  return "useSyncExternalStore" in qc ? ((s) => s.useSyncExternalStore)(qc)(() => () => {
  }, () => !1, () => !l) : !1;
}
function Ro() {
  let l = qh(), [s, i] = E.useState(Ot.isHandoffComplete);
  return s && Ot.isHandoffComplete === !1 && i(!1), E.useEffect(() => {
    s !== !0 && i(!0);
  }, [s]), E.useEffect(() => Ot.handoff(), []), l ? !1 : s;
}
function Ji() {
  let l = E.useRef(!1);
  return et(() => (l.current = !0, () => {
    l.current = !1;
  }), []), l;
}
var Zr = ((l) => (l[l.Forwards = 0] = "Forwards", l[l.Backwards = 1] = "Backwards", l))(Zr || {});
function bh() {
  let l = E.useRef(0);
  return jf(!0, "keydown", (s) => {
    s.key === "Tab" && (l.current = s.shiftKey ? 1 : 0);
  }, !0), l;
}
function Wf(l) {
  if (!l) return /* @__PURE__ */ new Set();
  if (typeof l == "function") return new Set(l());
  let s = /* @__PURE__ */ new Set();
  for (let i of l.current) hn(i.current) && s.add(i.current);
  return s;
}
let ev = "div";
var On = ((l) => (l[l.None = 0] = "None", l[l.InitialFocus = 1] = "InitialFocus", l[l.TabLock = 2] = "TabLock", l[l.FocusLock = 4] = "FocusLock", l[l.RestoreFocus = 8] = "RestoreFocus", l[l.AutoFocus = 16] = "AutoFocus", l))(On || {});
function tv(l, s) {
  let i = E.useRef(null), c = zt(i, s), { initialFocus: d, initialFocusFallback: v, containers: _, features: g = 15, ...m } = l;
  Ro() || (g = 0);
  let x = Gi(i.current);
  ov(g, { ownerDocument: x });
  let T = uv(g, { ownerDocument: x, container: i, initialFocus: d, initialFocusFallback: v });
  iv(g, { ownerDocument: x, container: i, containers: _, previousActiveElement: T });
  let $ = bh(), L = he((q) => {
    if (!Fn(i.current)) return;
    let J = i.current;
    ((I) => I())(() => {
      Wt($.current, { [Zr.Forwards]: () => {
        br(J, Ht.First, { skipElements: [q.relatedTarget, v] });
      }, [Zr.Backwards]: () => {
        br(J, Ht.Last, { skipElements: [q.relatedTarget, v] });
      } });
    });
  }), F = nl(!!(g & 2), "focus-trap#tab-lock"), O = No(), M = E.useRef(!1), D = { ref: c, onKeyDown(q) {
    q.key == "Tab" && (M.current = !0, O.requestAnimationFrame(() => {
      M.current = !1;
    }));
  }, onBlur(q) {
    if (!(g & 4)) return;
    let J = Wf(_);
    Fn(i.current) && J.add(i.current);
    let I = q.relatedTarget;
    mn(I) && I.dataset.headlessuiFocusGuard !== "true" && (Qf(J, I) || (M.current ? br(i.current, Wt($.current, { [Zr.Forwards]: () => Ht.Next, [Zr.Backwards]: () => Ht.Previous }) | Ht.WrapAround, { relativeTo: q.target }) : mn(q.target) && Vt(q.target)));
  } }, Z = vt();
  return ee.createElement(ee.Fragment, null, F && ee.createElement(Vi, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: L, features: So.Focusable }), Z({ ourProps: D, theirProps: m, defaultTag: ev, name: "FocusTrap" }), F && ee.createElement(Vi, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: L, features: So.Focusable }));
}
let nv = tt(tv), rv = Object.assign(nv, { features: On });
function lv(l = !0) {
  let s = E.useRef(dn.slice());
  return Zi(([i], [c]) => {
    c === !0 && i === !1 && Po(() => {
      s.current.splice(0);
    }), c === !1 && i === !0 && (s.current = dn.slice());
  }, [l, dn, s]), he(() => {
    var i;
    return (i = s.current.find((c) => c != null && c.isConnected)) != null ? i : null;
  });
}
function ov(l, { ownerDocument: s }) {
  let i = !!(l & 8), c = lv(i);
  Zi(() => {
    i || Tm(s?.body) && Vt(c());
  }, [i]), Mf(() => {
    i && Vt(c());
  });
}
function uv(l, { ownerDocument: s, container: i, initialFocus: c, initialFocusFallback: d }) {
  let v = E.useRef(null), _ = nl(!!(l & 1), "focus-trap#initial-focus"), g = Ji();
  return Zi(() => {
    if (l === 0) return;
    if (!_) {
      d != null && d.current && Vt(d.current);
      return;
    }
    let m = i.current;
    m && Po(() => {
      if (!g.current) return;
      let x = s?.activeElement;
      if (c != null && c.current) {
        if (c?.current === x) {
          v.current = x;
          return;
        }
      } else if (m.contains(x)) {
        v.current = x;
        return;
      }
      if (c != null && c.current) Vt(c.current);
      else {
        if (l & 16) {
          if (br(m, Ht.First | Ht.AutoFocus) !== Qi.Error) return;
        } else if (br(m, Ht.First) !== Qi.Error) return;
        if (d != null && d.current && (Vt(d.current), s?.activeElement === d.current)) return;
        console.warn("There are no focusable elements inside the <FocusTrap />");
      }
      v.current = s?.activeElement;
    });
  }, [d, _, l]), v;
}
function iv(l, { ownerDocument: s, container: i, containers: c, previousActiveElement: d }) {
  let v = Ji(), _ = !!(l & 4);
  Df(s?.defaultView, "focus", (g) => {
    if (!_ || !v.current) return;
    let m = Wf(c);
    Fn(i.current) && m.add(i.current);
    let x = d.current;
    if (!x) return;
    let T = g.target;
    Fn(T) ? Qf(m, T) ? (d.current = T, Vt(T)) : (g.preventDefault(), g.stopPropagation(), Vt(x)) : Vt(d.current);
  }, !0);
}
function Qf(l, s) {
  for (let i of l) if (i.contains(s)) return !0;
  return !1;
}
function Kf(l) {
  var s;
  return !!(l.enter || l.enterFrom || l.enterTo || l.leave || l.leaveFrom || l.leaveTo) || !Jr((s = l.as) != null ? s : Xf) || ee.Children.count(l.children) === 1;
}
let Oo = E.createContext(null);
Oo.displayName = "TransitionContext";
var sv = ((l) => (l.Visible = "visible", l.Hidden = "hidden", l))(sv || {});
function av() {
  let l = E.useContext(Oo);
  if (l === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return l;
}
function cv() {
  let l = E.useContext(zo);
  if (l === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return l;
}
let zo = E.createContext(null);
zo.displayName = "NestingContext";
function Fo(l) {
  return "children" in l ? Fo(l.children) : l.current.filter(({ el: s }) => s.current !== null).filter(({ state: s }) => s === "visible").length > 0;
}
function Yf(l, s) {
  let i = $n(l), c = E.useRef([]), d = Ji(), v = No(), _ = he((F, O = pn.Hidden) => {
    let M = c.current.findIndex(({ el: D }) => D === F);
    M !== -1 && (Wt(O, { [pn.Unmount]() {
      c.current.splice(M, 1);
    }, [pn.Hidden]() {
      c.current[M].state = "hidden";
    } }), v.microTask(() => {
      var D;
      !Fo(c) && d.current && ((D = i.current) == null || D.call(i));
    }));
  }), g = he((F) => {
    let O = c.current.find(({ el: M }) => M === F);
    return O ? O.state !== "visible" && (O.state = "visible") : c.current.push({ el: F, state: "visible" }), () => _(F, pn.Unmount);
  }), m = E.useRef([]), x = E.useRef(Promise.resolve()), T = E.useRef({ enter: [], leave: [] }), $ = he((F, O, M) => {
    m.current.splice(0), s && (s.chains.current[O] = s.chains.current[O].filter(([D]) => D !== F)), s?.chains.current[O].push([F, new Promise((D) => {
      m.current.push(D);
    })]), s?.chains.current[O].push([F, new Promise((D) => {
      Promise.all(T.current[O].map(([Z, q]) => q)).then(() => D());
    })]), O === "enter" ? x.current = x.current.then(() => s?.wait.current).then(() => M(O)) : M(O);
  }), L = he((F, O, M) => {
    Promise.all(T.current[O].splice(0).map(([D, Z]) => Z)).then(() => {
      var D;
      (D = m.current.shift()) == null || D();
    }).then(() => M(O));
  });
  return E.useMemo(() => ({ children: c, register: g, unregister: _, onStart: $, onStop: L, wait: x, chains: T }), [g, _, c, $, L, T, x]);
}
let Xf = E.Fragment, Gf = ko.RenderStrategy;
function fv(l, s) {
  var i, c;
  let { transition: d = !0, beforeEnter: v, afterEnter: _, beforeLeave: g, afterLeave: m, enter: x, enterFrom: T, enterTo: $, entered: L, leave: F, leaveFrom: O, leaveTo: M, ...D } = l, [Z, q] = E.useState(null), J = E.useRef(null), I = Kf(l), K = zt(...I ? [J, s, q] : s === null ? [] : [s]), ne = (i = D.unmount) == null || i ? pn.Unmount : pn.Hidden, { show: ue, appear: De, initial: nt } = av(), [ke, Qe] = E.useState(ue ? "visible" : "hidden"), Ae = cv(), { register: ge, unregister: Le } = Ae;
  et(() => ge(J), [ge, J]), et(() => {
    if (ne === pn.Hidden && J.current) {
      if (ue && ke !== "visible") {
        Qe("visible");
        return;
      }
      return Wt(ke, { hidden: () => Le(J), visible: () => ge(J) });
    }
  }, [ke, J, ge, Le, ue, ne]);
  let Ue = Ro();
  et(() => {
    if (I && Ue && ke === "visible" && J.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [J, ke, Ue, I]);
  let ze = nt && !De, me = De && ue && nt, j = E.useRef(!1), Y = Yf(() => {
    j.current || (Qe("hidden"), Le(J));
  }, Ae), A = he((fe) => {
    j.current = !0;
    let se = fe ? "enter" : "leave";
    Y.onStart(J, se, (de) => {
      de === "enter" ? v?.() : de === "leave" && g?.();
    });
  }), y = he((fe) => {
    let se = fe ? "enter" : "leave";
    j.current = !1, Y.onStop(J, se, (de) => {
      de === "enter" ? _?.() : de === "leave" && m?.();
    }), se === "leave" && !Fo(Y) && (Qe("hidden"), Le(J));
  });
  E.useEffect(() => {
    I && d || (A(ue), y(ue));
  }, [ue, I, d]);
  let C = !(!d || !I || !Ue || ze), [, U] = zh(C, Z, ue, { start: A, end: y }), te = Rn({ ref: K, className: ((c = Hi(D.className, me && x, me && T, U.enter && x, U.enter && U.closed && T, U.enter && !U.closed && $, U.leave && F, U.leave && !U.closed && O, U.leave && U.closed && M, !U.transition && ue && L)) == null ? void 0 : c.trim()) || void 0, ...Oh(U) }), le = 0;
  ke === "visible" && (le |= xt.Open), ke === "hidden" && (le |= xt.Closed), ue && ke === "hidden" && (le |= xt.Opening), !ue && ke === "visible" && (le |= xt.Closing);
  let ie = vt();
  return ee.createElement(zo.Provider, { value: Y }, ee.createElement(Mh, { value: le }, ie({ ourProps: te, theirProps: D, defaultTag: Xf, features: Gf, visible: ke === "visible", name: "Transition.Child" })));
}
function dv(l, s) {
  let { show: i, appear: c = !1, unmount: d = !0, ...v } = l, _ = E.useRef(null), g = Kf(l), m = zt(...g ? [_, s] : s === null ? [] : [s]);
  Ro();
  let x = Lo();
  if (i === void 0 && x !== null && (i = (x & xt.Open) === xt.Open), i === void 0) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [T, $] = E.useState(i ? "visible" : "hidden"), L = Yf(() => {
    i || $("hidden");
  }), [F, O] = E.useState(!0), M = E.useRef([i]);
  et(() => {
    F !== !1 && M.current[M.current.length - 1] !== i && (M.current.push(i), O(!1));
  }, [M, i]);
  let D = E.useMemo(() => ({ show: i, appear: c, initial: F }), [i, c, F]);
  et(() => {
    i ? $("visible") : !Fo(L) && _.current !== null && $("hidden");
  }, [i, L]);
  let Z = { unmount: d }, q = he(() => {
    var K;
    F && O(!1), (K = l.beforeEnter) == null || K.call(l);
  }), J = he(() => {
    var K;
    F && O(!1), (K = l.beforeLeave) == null || K.call(l);
  }), I = vt();
  return ee.createElement(zo.Provider, { value: L }, ee.createElement(Oo.Provider, { value: D }, I({ ourProps: { ...Z, as: E.Fragment, children: ee.createElement(Zf, { ref: m, ...Z, ...v, beforeEnter: q, beforeLeave: J }) }, theirProps: {}, defaultTag: E.Fragment, features: Gf, visible: T === "visible", name: "Transition" })));
}
function pv(l, s) {
  let i = E.useContext(Oo) !== null, c = Lo() !== null;
  return ee.createElement(ee.Fragment, null, !i && c ? ee.createElement(Yi, { ref: s, ...l }) : ee.createElement(Zf, { ref: s, ...l }));
}
let Yi = tt(dv), Zf = tt(fv), qi = tt(pv), _o = Object.assign(Yi, { Child: qi, Root: Yi });
var mv = ((l) => (l[l.Open = 0] = "Open", l[l.Closed = 1] = "Closed", l))(mv || {}), hv = ((l) => (l[l.SetTitleId = 0] = "SetTitleId", l))(hv || {});
let vv = { 0(l, s) {
  return l.titleId === s.id ? l : { ...l, titleId: s.id };
} }, bi = E.createContext(null);
bi.displayName = "DialogContext";
function $o(l) {
  let s = E.useContext(bi);
  if (s === null) {
    let i = new Error(`<${l} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(i, $o), i;
  }
  return s;
}
function yv(l, s) {
  return Wt(s.type, vv, l, s);
}
let wf = tt(function(l, s) {
  let i = E.useId(), { id: c = `headlessui-dialog-${i}`, open: d, onClose: v, initialFocus: _, role: g = "dialog", autoFocus: m = !0, __demoMode: x = !1, unmount: T = !1, ...$ } = l, L = E.useRef(!1);
  g = (function() {
    return g === "dialog" || g === "alertdialog" ? g : (L.current || (L.current = !0, console.warn(`Invalid role [${g}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog");
  })();
  let F = Lo();
  d === void 0 && F !== null && (d = (F & xt.Open) === xt.Open);
  let O = E.useRef(null), M = zt(O, s), D = Gi(O.current), Z = d ? 0 : 1, [q, J] = E.useReducer(yv, { titleId: null, descriptionId: null, panelRef: E.createRef() }), I = he(() => v(!1)), K = he((U) => J({ type: 0, id: U })), ne = Ro() ? Z === 0 : !1, [ue, De] = Kh(), nt = { get current() {
    var U;
    return (U = q.panelRef.current) != null ? U : O.current;
  } }, ke = Vf(), { resolveContainers: Qe } = Jh({ mainTreeNode: ke, portals: ue, defaultContainers: [nt] }), Ae = F !== null ? (F & xt.Closing) === xt.Closing : !1;
  ah(x || Ae ? !1 : ne, { allowed: he(() => {
    var U, te;
    return [(te = (U = O.current) == null ? void 0 : U.closest("[data-headlessui-portal]")) != null ? te : null];
  }), disallowed: he(() => {
    var U;
    return [(U = ke?.closest("body > *:not(#headlessui-portal-root)")) != null ? U : null];
  }) });
  let ge = Of.get(null);
  et(() => {
    if (ne) return ge.actions.push(c), () => ge.actions.pop(c);
  }, [ge, c, ne]);
  let Le = zf(ge, E.useCallback((U) => ge.selectors.isTop(U, c), [ge, c]));
  kh(Le, Qe, (U) => {
    U.preventDefault(), I();
  }), Gh(Le, D?.defaultView, (U) => {
    U.preventDefault(), U.stopPropagation(), document.activeElement && "blur" in document.activeElement && typeof document.activeElement.blur == "function" && document.activeElement.blur(), I();
  }), Th(x || Ae ? !1 : ne, D, Qe), ch(ne, O, I);
  let [Ue, ze] = Vm(), me = E.useMemo(() => [{ dialogState: Z, close: I, setTitleId: K, unmount: T }, q], [Z, I, K, T, q]), j = tl({ open: Z === 0 }), Y = { ref: M, id: c, role: g, tabIndex: -1, "aria-modal": x ? void 0 : Z === 0 ? !0 : void 0, "aria-labelledby": q.titleId, "aria-describedby": Ue, unmount: T }, A = !Zh(), y = On.None;
  ne && !x && (y |= On.RestoreFocus, y |= On.TabLock, m && (y |= On.AutoFocus), A && (y |= On.InitialFocus));
  let C = vt();
  return ee.createElement(Ih, null, ee.createElement(yf, { force: !0 }, ee.createElement(Xh, null, ee.createElement(bi.Provider, { value: me }, ee.createElement(Bf, { target: O }, ee.createElement(yf, { force: !1 }, ee.createElement(ze, { slot: j }, ee.createElement(De, null, ee.createElement(rv, { initialFocus: _, initialFocusFallback: O, containers: Qe, features: y }, ee.createElement(Gm, { value: I }, C({ ourProps: Y, theirProps: $, slot: j, defaultTag: gv, features: wv, visible: Z === 0, name: "Dialog" })))))))))));
}), gv = "div", wv = ko.RenderStrategy | ko.Static;
function _v(l, s) {
  let { transition: i = !1, open: c, ...d } = l, v = Lo(), _ = l.hasOwnProperty("open") || v !== null, g = l.hasOwnProperty("onClose");
  if (!_ && !g) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!_) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!g) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (!v && typeof l.open != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${l.open}`);
  if (typeof l.onClose != "function") throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${l.onClose}`);
  return (c !== void 0 || i) && !d.static ? ee.createElement(gf, null, ee.createElement(_o, { show: c, transition: i, unmount: d.unmount }, ee.createElement(wf, { ref: s, ...d }))) : ee.createElement(gf, null, ee.createElement(wf, { ref: s, open: c, ...d }));
}
let kv = "div";
function Sv(l, s) {
  let i = E.useId(), { id: c = `headlessui-dialog-panel-${i}`, transition: d = !1, ...v } = l, [{ dialogState: _, unmount: g }, m] = $o("Dialog.Panel"), x = zt(s, m.panelRef), T = tl({ open: _ === 0 }), $ = he((D) => {
    D.stopPropagation();
  }), L = { ref: x, id: c, onClick: $ }, F = d ? qi : E.Fragment, O = d ? { unmount: g } : {}, M = vt();
  return ee.createElement(F, { ...O }, M({ ourProps: L, theirProps: v, slot: T, defaultTag: kv, name: "Dialog.Panel" }));
}
let Ev = "div";
function xv(l, s) {
  let { transition: i = !1, ...c } = l, [{ dialogState: d, unmount: v }] = $o("Dialog.Backdrop"), _ = tl({ open: d === 0 }), g = { ref: s, "aria-hidden": !0 }, m = i ? qi : E.Fragment, x = i ? { unmount: v } : {}, T = vt();
  return ee.createElement(m, { ...x }, T({ ourProps: g, theirProps: c, slot: _, defaultTag: Ev, name: "Dialog.Backdrop" }));
}
let Cv = "h2";
function Pv(l, s) {
  let i = E.useId(), { id: c = `headlessui-dialog-title-${i}`, ...d } = l, [{ dialogState: v, setTitleId: _ }] = $o("Dialog.Title"), g = zt(s);
  E.useEffect(() => (_(c), () => _(null)), [c, _]);
  let m = tl({ open: v === 0 }), x = { ref: g, id: c };
  return vt()({ ourProps: x, theirProps: d, slot: m, defaultTag: Cv, name: "Dialog.Title" });
}
let Nv = tt(_v), Tv = tt(Sv);
tt(xv);
let Lv = tt(Pv), wo = Object.assign(Nv, { Panel: Tv, Title: Lv, Description: Ym });
const Rv = "_container_lfa5t_2", Ov = "_openButton_lfa5t_7", zv = "_modalOverlay_lfa5t_29", Fv = "_backdrop_lfa5t_35", $v = "_backdropEnter_lfa5t_42", jv = "_backdropEnterFrom_lfa5t_46", Dv = "_backdropEnterTo_lfa5t_50", Mv = "_backdropLeave_lfa5t_54", Iv = "_backdropLeaveFrom_lfa5t_58", Av = "_backdropLeaveTo_lfa5t_62", Uv = "_modalContainer_lfa5t_67", Bv = "_modalWrapper_lfa5t_73", Hv = "_modalPanel_lfa5t_83", Vv = "_panelEnter_lfa5t_97", Wv = "_panelEnterFrom_lfa5t_101", Qv = "_panelEnterTo_lfa5t_106", Kv = "_panelLeave_lfa5t_111", Yv = "_panelLeaveFrom_lfa5t_115", Xv = "_panelLeaveTo_lfa5t_120", Gv = "_modalHeader_lfa5t_126", Zv = "_modalTitle_lfa5t_130", Jv = "_modalBody_lfa5t_138", qv = "_modalDescription_lfa5t_142", bv = "_modalContent_lfa5t_148", ey = "_modalActions_lfa5t_170", ty = "_closeButton_lfa5t_177", ye = {
  container: Rv,
  openButton: Ov,
  modalOverlay: zv,
  backdrop: Fv,
  backdropEnter: $v,
  backdropEnterFrom: jv,
  backdropEnterTo: Dv,
  backdropLeave: Mv,
  backdropLeaveFrom: Iv,
  backdropLeaveTo: Av,
  modalContainer: Uv,
  modalWrapper: Bv,
  modalPanel: Hv,
  panelEnter: Vv,
  panelEnterFrom: Wv,
  panelEnterTo: Qv,
  panelLeave: Kv,
  panelLeaveFrom: Yv,
  panelLeaveTo: Xv,
  modalHeader: Gv,
  modalTitle: Zv,
  modalBody: Jv,
  modalDescription: qv,
  modalContent: bv,
  modalActions: ey,
  closeButton: ty
}, ny = "._container_lfa5t_2{display:inline-block}._openButton_lfa5t_7{padding:.75rem 1.5rem;background-color:#6366f1;color:#fff;border:none;border-radius:8px;font-size:1rem;font-weight:500;cursor:pointer;transition:background-color .2s}._openButton_lfa5t_7:hover{background-color:#4f46e5}._openButton_lfa5t_7:focus{outline:2px solid #6366f1;outline-offset:2px}._modalOverlay_lfa5t_29{position:relative;z-index:50}._backdrop_lfa5t_35{position:fixed;inset:0;background-color:#00000080}._backdropEnter_lfa5t_42{transition:opacity .3s cubic-bezier(.4,0,.2,1)}._backdropEnterFrom_lfa5t_46{opacity:0}._backdropEnterTo_lfa5t_50{opacity:1}._backdropLeave_lfa5t_54{transition:opacity .2s cubic-bezier(.4,0,.2,1)}._backdropLeaveFrom_lfa5t_58{opacity:1}._backdropLeaveTo_lfa5t_62{opacity:0}._modalContainer_lfa5t_67{position:fixed;inset:0;overflow-y:auto}._modalWrapper_lfa5t_73{display:flex;min-height:100%;align-items:center;justify-content:center;padding:1rem;text-align:center}._modalPanel_lfa5t_83{width:100%;max-width:28rem;transform:scale(1);overflow:hidden;border-radius:12px;background-color:#fff;padding:1.5rem;text-align:left;box-shadow:0 20px 25px -5px #0000001a,0 10px 10px -5px #0000000a;transition:all .3s cubic-bezier(.4,0,.2,1)}._panelEnter_lfa5t_97{transition:all .3s cubic-bezier(.4,0,.2,1)}._panelEnterFrom_lfa5t_101{opacity:0;transform:scale(.95)}._panelEnterTo_lfa5t_106{opacity:1;transform:scale(1)}._panelLeave_lfa5t_111{transition:all .2s cubic-bezier(.4,0,.2,1)}._panelLeaveFrom_lfa5t_115{opacity:1;transform:scale(1)}._panelLeaveTo_lfa5t_120{opacity:0;transform:scale(.95)}._modalHeader_lfa5t_126{margin-bottom:1rem}._modalTitle_lfa5t_130{font-size:1.5rem;font-weight:700;color:#111827;margin:0}._modalBody_lfa5t_138{margin-top:.5rem}._modalDescription_lfa5t_142{font-size:.875rem;color:#6b7280;margin-bottom:1rem}._modalContent_lfa5t_148{margin-top:1rem}._modalContent_lfa5t_148 p{margin:0 0 .75rem;color:#374151;line-height:1.6}._modalContent_lfa5t_148 ul{margin:0;padding-left:1.5rem;color:#374151;line-height:1.8}._modalContent_lfa5t_148 li{margin-bottom:.25rem}._modalActions_lfa5t_170{margin-top:1.5rem;display:flex;gap:.75rem;justify-content:flex-end}._closeButton_lfa5t_177{padding:.625rem 1.25rem;background-color:#6366f1;color:#fff;border:none;border-radius:6px;font-size:.875rem;font-weight:500;cursor:pointer;transition:background-color .2s}._closeButton_lfa5t_177:hover{background-color:#4f46e5}._closeButton_lfa5t_177:focus{outline:2px solid #6366f1;outline-offset:2px}@media(max-width:640px){._modalPanel_lfa5t_83{max-width:90vw;padding:1.25rem}._modalTitle_lfa5t_130{font-size:1.25rem}}";
function ry({
  isOpen: l = !1,
  title: s = "React Modal",
  description: i = "This is a modal dialog built with Headless UI for React."
}) {
  const [c, d] = E.useState(l);
  E.useEffect(() => {
    d(l);
  }, [l]), E.useEffect(() => {
    const g = "react-modal-styles";
    if (!document.getElementById(g)) {
      const m = document.createElement("style");
      m.id = g, m.textContent = ny, document.head.appendChild(m);
    }
  }, []);
  function v() {
    d(!1);
  }
  function _() {
    d(!0);
  }
  return /* @__PURE__ */ re.jsxs("div", { className: ye.container, children: [
    /* @__PURE__ */ re.jsx(
      "button",
      {
        type: "button",
        onClick: _,
        className: ye.openButton,
        children: "Open React Modal"
      }
    ),
    /* @__PURE__ */ re.jsx(_o, { appear: !0, show: c, as: E.Fragment, children: /* @__PURE__ */ re.jsxs(wo, { as: "div", className: ye.modalOverlay, onClose: v, children: [
      /* @__PURE__ */ re.jsx(
        _o.Child,
        {
          as: E.Fragment,
          enter: ye.backdropEnter,
          enterFrom: ye.backdropEnterFrom,
          enterTo: ye.backdropEnterTo,
          leave: ye.backdropLeave,
          leaveFrom: ye.backdropLeaveFrom,
          leaveTo: ye.backdropLeaveTo,
          children: /* @__PURE__ */ re.jsx("div", { className: ye.backdrop, "aria-hidden": "true" })
        }
      ),
      /* @__PURE__ */ re.jsx("div", { className: ye.modalContainer, children: /* @__PURE__ */ re.jsx("div", { className: ye.modalWrapper, children: /* @__PURE__ */ re.jsx(
        _o.Child,
        {
          as: E.Fragment,
          enter: ye.panelEnter,
          enterFrom: ye.panelEnterFrom,
          enterTo: ye.panelEnterTo,
          leave: ye.panelLeave,
          leaveFrom: ye.panelLeaveFrom,
          leaveTo: ye.panelLeaveTo,
          children: /* @__PURE__ */ re.jsxs(wo.Panel, { className: ye.modalPanel, children: [
            /* @__PURE__ */ re.jsx("div", { className: ye.modalHeader, children: /* @__PURE__ */ re.jsx(wo.Title, { as: "h3", className: ye.modalTitle, children: s }) }),
            /* @__PURE__ */ re.jsx("div", { className: ye.modalBody, children: /* @__PURE__ */ re.jsxs("slot", { name: "content", children: [
              /* @__PURE__ */ re.jsx(wo.Description, { className: ye.modalDescription, children: i }),
              /* @__PURE__ */ re.jsxs("div", { className: ye.modalContent, children: [
                /* @__PURE__ */ re.jsx("p", { children: "This modal demonstrates Headless UI integration in a React Web Component. It features:" }),
                /* @__PURE__ */ re.jsxs("ul", { children: [
                  /* @__PURE__ */ re.jsx("li", { children: "✅ Automatic accessibility (ARIA attributes)" }),
                  /* @__PURE__ */ re.jsx("li", { children: "✅ Focus trap management" }),
                  /* @__PURE__ */ re.jsx("li", { children: "✅ ESC key to close" }),
                  /* @__PURE__ */ re.jsx("li", { children: "✅ Click outside to close" }),
                  /* @__PURE__ */ re.jsx("li", { children: "✅ Smooth transitions" })
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ re.jsx("div", { className: ye.modalActions, children: /* @__PURE__ */ re.jsx(
              "button",
              {
                type: "button",
                className: ye.closeButton,
                onClick: v,
                children: "Close"
              }
            ) })
          ] })
        }
      ) }) })
    ] }) })
  ] });
}
const ly = Co(ry, {
  props: {
    isOpen: "boolean",
    title: "string",
    description: "string"
  },
  shadow: "open"
});
customElements.get("react-modal") || customElements.define("react-modal", ly);
const oy = "_button_a3w2z_1", uy = "_primary_a3w2z_29", iy = "_secondary_a3w2z_38", sy = "_success_a3w2z_47", ay = "_danger_a3w2z_56", cy = "_small_a3w2z_65", fy = "_large_a3w2z_70", Ui = {
  button: oy,
  primary: uy,
  secondary: iy,
  success: sy,
  danger: ay,
  small: cy,
  large: fy
}, dy = "._button_a3w2z_1{display:inline-flex;align-items:center;justify-content:center;padding:.5rem 1rem;font-size:1rem;font-weight:500;border:none;border-radius:.375rem;cursor:pointer;transition:all .2s ease-in-out;font-family:inherit}._button_a3w2z_1:disabled{opacity:.5;cursor:not-allowed}._button_a3w2z_1:not(:disabled):hover{transform:translateY(-1px);box-shadow:0 4px 6px #0000001a}._button_a3w2z_1:not(:disabled):active{transform:translateY(0)}._primary_a3w2z_29{background-color:#3b82f6;color:#fff}._primary_a3w2z_29:not(:disabled):hover{background-color:#2563eb}._secondary_a3w2z_38{background-color:#6b7280;color:#fff}._secondary_a3w2z_38:not(:disabled):hover{background-color:#4b5563}._success_a3w2z_47{background-color:#10b981;color:#fff}._success_a3w2z_47:not(:disabled):hover{background-color:#059669}._danger_a3w2z_56{background-color:#ef4444;color:#fff}._danger_a3w2z_56:not(:disabled):hover{background-color:#dc2626}._small_a3w2z_65{padding:.25rem .75rem;font-size:.875rem}._large_a3w2z_70{padding:.75rem 1.5rem;font-size:1.125rem}";
function py({
  label: l = "Button",
  variant: s = "primary",
  size: i = "medium",
  onbuttonclick: c
}) {
  const [d, v] = E.useState(!1), _ = E.useRef(null);
  E.useEffect(() => {
    const x = _.current?.closest("react-button");
    if (!x) return;
    v(x.hasAttribute("disabled"));
    const T = new MutationObserver(($) => {
      $.forEach((L) => {
        L.type === "attributes" && L.attributeName === "disabled" && v(x.hasAttribute("disabled"));
      });
    });
    return T.observe(x, { attributes: !0 }), () => T.disconnect();
  }, []), E.useEffect(() => {
    const x = "react-button-styles";
    if (!document.getElementById(x)) {
      const T = document.createElement("style");
      T.id = x, T.textContent = dy, document.head.appendChild(T);
    }
  }, []);
  const g = () => {
    if (!d && c)
      try {
        new Function(c)();
      } catch (x) {
        console.error("Error executing onbuttonclick:", x);
      }
  }, m = [
    Ui.button,
    Ui[s],
    i !== "medium" ? Ui[i] : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ re.jsx("div", { ref: _, children: /* @__PURE__ */ re.jsx(
    "button",
    {
      className: m,
      disabled: d,
      onClick: g,
      type: "button",
      children: l
    }
  ) });
}
const my = Co(py, {
  props: {
    label: "string",
    variant: "string",
    size: "string",
    disabled: "boolean",
    onbuttonclick: "string"
  }
});
customElements.get("react-button") || customElements.define("react-button", my);
const hy = "_dropdown_1rheh_1", vy = "_button_1rheh_8", yy = "_buttonDisabled_1rheh_33", gy = "_arrow_1rheh_38", wy = "_arrowOpen_1rheh_49", _y = "_menu_1rheh_53", ky = "_item_1rheh_67", Sy = "_itemSelected_1rheh_77", Ey = "_placeholder_1rheh_83", Bt = {
  dropdown: hy,
  button: vy,
  buttonDisabled: yy,
  arrow: gy,
  arrowOpen: wy,
  menu: _y,
  item: ky,
  itemSelected: Sy,
  placeholder: Ey
}, xy = "._dropdown_1rheh_1{position:relative;display:inline-block;width:100%;max-width:300px}._button_1rheh_8{width:100%;padding:.5rem 2.5rem .5rem 1rem;font-size:1rem;background-color:#fff;border:1px solid #d1d5db;border-radius:.375rem;cursor:pointer;display:flex;align-items:center;justify-content:space-between;transition:all .2s ease-in-out;position:relative}._button_1rheh_8:hover{border-color:#9ca3af}._button_1rheh_8:focus{outline:none;border-color:#3b82f6;box-shadow:0 0 0 3px #3b82f61a}._buttonDisabled_1rheh_33{opacity:.5;cursor:not-allowed}._arrow_1rheh_38{position:absolute;right:1rem;width:0;height:0;border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid #6b7280;transition:transform .2s ease-in-out}._arrowOpen_1rheh_49{transform:rotate(180deg)}._menu_1rheh_53{position:absolute;top:calc(100% + .25rem);left:0;right:0;background-color:#fff;border:1px solid #d1d5db;border-radius:.375rem;box-shadow:0 10px 15px -3px #0000001a;max-height:300px;overflow-y:auto;z-index:10}._item_1rheh_67{padding:.5rem 1rem;cursor:pointer;transition:background-color .2s ease-in-out}._item_1rheh_67:hover{background-color:#f3f4f6}._itemSelected_1rheh_77{background-color:#eff6ff;color:#3b82f6;font-weight:500}._placeholder_1rheh_83{color:#9ca3af}";
function Cy({
  options: l = "[]",
  selected: s = "",
  placeholder: i = "Select an option",
  disabled: c = !1,
  onvaluechange: d = "",
  onChange: v
}) {
  const [_, g] = E.useState(!1), [m, x] = E.useState(s), [T, $] = E.useState([]), [L, F] = E.useState(!1), O = E.useRef(null);
  E.useEffect(() => {
    const I = O.current?.closest("react-dropdown");
    if (!I) return;
    F(I.hasAttribute("disabled"));
    const K = new MutationObserver((ne) => {
      ne.forEach((ue) => {
        ue.type === "attributes" && ue.attributeName === "disabled" && F(I.hasAttribute("disabled"));
      });
    });
    return K.observe(I, { attributes: !0 }), () => K.disconnect();
  }, []), E.useEffect(() => {
    console.log("ReactDropdown disabled state:", { disabled: c, isDisabled: L });
  }, [c, L]), E.useEffect(() => {
    const I = "react-dropdown-styles";
    if (!document.getElementById(I)) {
      const K = document.createElement("style");
      K.id = I, K.textContent = xy, document.head.appendChild(K);
    }
  }, []), E.useEffect(() => {
    let I = [];
    try {
      const K = JSON.parse(l);
      I = Array.isArray(K) ? K : [];
    } catch (K) {
      console.error("Failed to parse options JSON:", K), I = [];
    }
    $((K) => JSON.stringify(K) === JSON.stringify(I) ? K : I);
  }, [l]), E.useEffect(() => {
    x(s);
  }, [s]), E.useEffect(() => {
    console.log("disabled prop changed:", { disabled: c, isDisabled: L });
  }, [c, L]), E.useEffect(() => {
    if (!_) return;
    const I = (ne) => {
      O.current && !O.current.contains(ne.target) && g(!1);
    }, K = setTimeout(() => {
      document.addEventListener("click", I);
    }, 0);
    return () => {
      clearTimeout(K), document.removeEventListener("click", I);
    };
  }, [_]);
  const M = (I) => {
    L || (I.stopPropagation(), g(!_));
  }, D = (I, K) => {
    if (!L && (I.stopPropagation(), x(K.value), g(!1), v && v(K.value, K), d))
      try {
        new Function("value", "option", d)(K.value, K);
      } catch (ne) {
        console.error("Error executing onvaluechange:", ne);
      }
  }, Z = T.find((I) => I.value === m), q = Z ? Z.label : i, J = !Z;
  return /* @__PURE__ */ re.jsxs("div", { className: Bt.dropdown, ref: O, children: [
    /* @__PURE__ */ re.jsxs(
      "button",
      {
        className: `${Bt.button} ${L ? Bt.buttonDisabled : ""}`,
        onClick: M,
        disabled: L,
        type: "button",
        children: [
          /* @__PURE__ */ re.jsx("span", { className: J ? Bt.placeholder : "", children: q }),
          /* @__PURE__ */ re.jsx("span", { className: `${Bt.arrow} ${_ ? Bt.arrowOpen : ""}` })
        ]
      }
    ),
    _ && /* @__PURE__ */ re.jsx("div", { className: Bt.menu, children: T.map((I) => /* @__PURE__ */ re.jsx(
      "div",
      {
        className: `${Bt.item} ${I.value === m ? Bt.itemSelected : ""}`,
        onClick: (K) => D(K, I),
        children: I.label
      },
      I.value
    )) })
  ] });
}
const Py = Co(Cy, {
  props: {
    options: "string",
    selected: "string",
    placeholder: "string",
    disabled: "boolean",
    onvaluechange: "string"
  }
});
customElements.get("react-dropdown") || customElements.define("react-dropdown", Py);
export {
  py as ReactButton,
  Sm as ReactCounter,
  Cy as ReactDropdown,
  ry as ReactModal
};
