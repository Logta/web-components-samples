function cv(i, f) {
  for (var o = 0; o < f.length; o++) {
    const r = f[o];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const d in r)
        if (d !== "default" && !(d in i)) {
          const p = Object.getOwnPropertyDescriptor(r, d);
          p && Object.defineProperty(i, d, p.get ? p : {
            enumerable: !0,
            get: () => r[d]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }));
}
function fv(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var cr = { exports: {} }, Jn = {};
var jm;
function dy() {
  if (jm) return Jn;
  jm = 1;
  var i = /* @__PURE__ */ Symbol.for("react.transitional.element"), f = /* @__PURE__ */ Symbol.for("react.fragment");
  function o(r, d, p) {
    var T = null;
    if (p !== void 0 && (T = "" + p), d.key !== void 0 && (T = "" + d.key), "key" in d) {
      p = {};
      for (var S in d)
        S !== "key" && (p[S] = d[S]);
    } else p = d;
    return d = p.ref, {
      $$typeof: i,
      type: r,
      key: T,
      ref: d !== void 0 ? d : null,
      props: p
    };
  }
  return Jn.Fragment = f, Jn.jsx = o, Jn.jsxs = o, Jn;
}
var Bm;
function my() {
  return Bm || (Bm = 1, cr.exports = dy()), cr.exports;
}
var gt = my(), fr = { exports: {} }, P = {};
var qm;
function vy() {
  if (qm) return P;
  qm = 1;
  var i = /* @__PURE__ */ Symbol.for("react.transitional.element"), f = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), p = /* @__PURE__ */ Symbol.for("react.consumer"), T = /* @__PURE__ */ Symbol.for("react.context"), S = /* @__PURE__ */ Symbol.for("react.forward_ref"), v = /* @__PURE__ */ Symbol.for("react.suspense"), g = /* @__PURE__ */ Symbol.for("react.memo"), H = /* @__PURE__ */ Symbol.for("react.lazy"), R = /* @__PURE__ */ Symbol.for("react.activity"), B = Symbol.iterator;
  function q(h) {
    return h === null || typeof h != "object" ? null : (h = B && h[B] || h["@@iterator"], typeof h == "function" ? h : null);
  }
  var j = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, X = Object.assign, Z = {};
  function F(h, N, x) {
    this.props = h, this.context = N, this.refs = Z, this.updater = x || j;
  }
  F.prototype.isReactComponent = {}, F.prototype.setState = function(h, N) {
    if (typeof h != "object" && typeof h != "function" && h != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, h, N, "setState");
  }, F.prototype.forceUpdate = function(h) {
    this.updater.enqueueForceUpdate(this, h, "forceUpdate");
  };
  function I() {
  }
  I.prototype = F.prototype;
  function K(h, N, x) {
    this.props = h, this.context = N, this.refs = Z, this.updater = x || j;
  }
  var lt = K.prototype = new I();
  lt.constructor = K, X(lt, F.prototype), lt.isPureReactComponent = !0;
  var vt = Array.isArray;
  function ht() {
  }
  var J = { H: null, A: null, T: null, S: null }, Xt = Object.prototype.hasOwnProperty;
  function ee(h, N, x) {
    var L = x.ref;
    return {
      $$typeof: i,
      type: h,
      key: N,
      ref: L !== void 0 ? L : null,
      props: x
    };
  }
  function Rt(h, N) {
    return ee(h.type, N, h.props);
  }
  function Vt(h) {
    return typeof h == "object" && h !== null && h.$$typeof === i;
  }
  function jt(h) {
    var N = { "=": "=0", ":": "=2" };
    return "$" + h.replace(/[=:]/g, function(x) {
      return N[x];
    });
  }
  var Qt = /\/+/g;
  function Jt(h, N) {
    return typeof h == "object" && h !== null && h.key != null ? jt("" + h.key) : N.toString(36);
  }
  function $t(h) {
    switch (h.status) {
      case "fulfilled":
        return h.value;
      case "rejected":
        throw h.reason;
      default:
        switch (typeof h.status == "string" ? h.then(ht, ht) : (h.status = "pending", h.then(
          function(N) {
            h.status === "pending" && (h.status = "fulfilled", h.value = N);
          },
          function(N) {
            h.status === "pending" && (h.status = "rejected", h.reason = N);
          }
        )), h.status) {
          case "fulfilled":
            return h.value;
          case "rejected":
            throw h.reason;
        }
    }
    throw h;
  }
  function M(h, N, x, L, k) {
    var at = typeof h;
    (at === "undefined" || at === "boolean") && (h = null);
    var ot = !1;
    if (h === null) ot = !0;
    else
      switch (at) {
        case "bigint":
        case "string":
        case "number":
          ot = !0;
          break;
        case "object":
          switch (h.$$typeof) {
            case i:
            case f:
              ot = !0;
              break;
            case H:
              return ot = h._init, M(
                ot(h._payload),
                N,
                x,
                L,
                k
              );
          }
      }
    if (ot)
      return k = k(h), ot = L === "" ? "." + Jt(h, 0) : L, vt(k) ? (x = "", ot != null && (x = ot.replace(Qt, "$&/") + "/"), M(k, N, x, "", function(Pa) {
        return Pa;
      })) : k != null && (Vt(k) && (k = Rt(
        k,
        x + (k.key == null || h && h.key === k.key ? "" : ("" + k.key).replace(
          Qt,
          "$&/"
        ) + "/") + ot
      )), N.push(k)), 1;
    ot = 0;
    var Bt = L === "" ? "." : L + ":";
    if (vt(h))
      for (var Tt = 0; Tt < h.length; Tt++)
        L = h[Tt], at = Bt + Jt(L, Tt), ot += M(
          L,
          N,
          x,
          at,
          k
        );
    else if (Tt = q(h), typeof Tt == "function")
      for (h = Tt.call(h), Tt = 0; !(L = h.next()).done; )
        L = L.value, at = Bt + Jt(L, Tt++), ot += M(
          L,
          N,
          x,
          at,
          k
        );
    else if (at === "object") {
      if (typeof h.then == "function")
        return M(
          $t(h),
          N,
          x,
          L,
          k
        );
      throw N = String(h), Error(
        "Objects are not valid as a React child (found: " + (N === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : N) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ot;
  }
  function Y(h, N, x) {
    if (h == null) return h;
    var L = [], k = 0;
    return M(h, L, "", "", function(at) {
      return N.call(x, at, k++);
    }), L;
  }
  function V(h) {
    if (h._status === -1) {
      var N = h._result;
      N = N(), N.then(
        function(x) {
          (h._status === 0 || h._status === -1) && (h._status = 1, h._result = x);
        },
        function(x) {
          (h._status === 0 || h._status === -1) && (h._status = 2, h._result = x);
        }
      ), h._status === -1 && (h._status = 0, h._result = N);
    }
    if (h._status === 1) return h._result.default;
    throw h._result;
  }
  var ft = typeof reportError == "function" ? reportError : function(h) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var N = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h),
        error: h
      });
      if (!window.dispatchEvent(N)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", h);
      return;
    }
    console.error(h);
  }, st = {
    map: Y,
    forEach: function(h, N, x) {
      Y(
        h,
        function() {
          N.apply(this, arguments);
        },
        x
      );
    },
    count: function(h) {
      var N = 0;
      return Y(h, function() {
        N++;
      }), N;
    },
    toArray: function(h) {
      return Y(h, function(N) {
        return N;
      }) || [];
    },
    only: function(h) {
      if (!Vt(h))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return h;
    }
  };
  return P.Activity = R, P.Children = st, P.Component = F, P.Fragment = o, P.Profiler = d, P.PureComponent = K, P.StrictMode = r, P.Suspense = v, P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = J, P.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(h) {
      return J.H.useMemoCache(h);
    }
  }, P.cache = function(h) {
    return function() {
      return h.apply(null, arguments);
    };
  }, P.cacheSignal = function() {
    return null;
  }, P.cloneElement = function(h, N, x) {
    if (h == null)
      throw Error(
        "The argument must be a React element, but you passed " + h + "."
      );
    var L = X({}, h.props), k = h.key;
    if (N != null)
      for (at in N.key !== void 0 && (k = "" + N.key), N)
        !Xt.call(N, at) || at === "key" || at === "__self" || at === "__source" || at === "ref" && N.ref === void 0 || (L[at] = N[at]);
    var at = arguments.length - 2;
    if (at === 1) L.children = x;
    else if (1 < at) {
      for (var ot = Array(at), Bt = 0; Bt < at; Bt++)
        ot[Bt] = arguments[Bt + 2];
      L.children = ot;
    }
    return ee(h.type, k, L);
  }, P.createContext = function(h) {
    return h = {
      $$typeof: T,
      _currentValue: h,
      _currentValue2: h,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, h.Provider = h, h.Consumer = {
      $$typeof: p,
      _context: h
    }, h;
  }, P.createElement = function(h, N, x) {
    var L, k = {}, at = null;
    if (N != null)
      for (L in N.key !== void 0 && (at = "" + N.key), N)
        Xt.call(N, L) && L !== "key" && L !== "__self" && L !== "__source" && (k[L] = N[L]);
    var ot = arguments.length - 2;
    if (ot === 1) k.children = x;
    else if (1 < ot) {
      for (var Bt = Array(ot), Tt = 0; Tt < ot; Tt++)
        Bt[Tt] = arguments[Tt + 2];
      k.children = Bt;
    }
    if (h && h.defaultProps)
      for (L in ot = h.defaultProps, ot)
        k[L] === void 0 && (k[L] = ot[L]);
    return ee(h, at, k);
  }, P.createRef = function() {
    return { current: null };
  }, P.forwardRef = function(h) {
    return { $$typeof: S, render: h };
  }, P.isValidElement = Vt, P.lazy = function(h) {
    return {
      $$typeof: H,
      _payload: { _status: -1, _result: h },
      _init: V
    };
  }, P.memo = function(h, N) {
    return {
      $$typeof: g,
      type: h,
      compare: N === void 0 ? null : N
    };
  }, P.startTransition = function(h) {
    var N = J.T, x = {};
    J.T = x;
    try {
      var L = h(), k = J.S;
      k !== null && k(x, L), typeof L == "object" && L !== null && typeof L.then == "function" && L.then(ht, ft);
    } catch (at) {
      ft(at);
    } finally {
      N !== null && x.types !== null && (N.types = x.types), J.T = N;
    }
  }, P.unstable_useCacheRefresh = function() {
    return J.H.useCacheRefresh();
  }, P.use = function(h) {
    return J.H.use(h);
  }, P.useActionState = function(h, N, x) {
    return J.H.useActionState(h, N, x);
  }, P.useCallback = function(h, N) {
    return J.H.useCallback(h, N);
  }, P.useContext = function(h) {
    return J.H.useContext(h);
  }, P.useDebugValue = function() {
  }, P.useDeferredValue = function(h, N) {
    return J.H.useDeferredValue(h, N);
  }, P.useEffect = function(h, N) {
    return J.H.useEffect(h, N);
  }, P.useEffectEvent = function(h) {
    return J.H.useEffectEvent(h);
  }, P.useId = function() {
    return J.H.useId();
  }, P.useImperativeHandle = function(h, N, x) {
    return J.H.useImperativeHandle(h, N, x);
  }, P.useInsertionEffect = function(h, N) {
    return J.H.useInsertionEffect(h, N);
  }, P.useLayoutEffect = function(h, N) {
    return J.H.useLayoutEffect(h, N);
  }, P.useMemo = function(h, N) {
    return J.H.useMemo(h, N);
  }, P.useOptimistic = function(h, N) {
    return J.H.useOptimistic(h, N);
  }, P.useReducer = function(h, N, x) {
    return J.H.useReducer(h, N, x);
  }, P.useRef = function(h) {
    return J.H.useRef(h);
  }, P.useState = function(h) {
    return J.H.useState(h);
  }, P.useSyncExternalStore = function(h, N, x) {
    return J.H.useSyncExternalStore(
      h,
      N,
      x
    );
  }, P.useTransition = function() {
    return J.H.useTransition();
  }, P.version = "19.2.3", P;
}
var Ym;
function Ri() {
  return Ym || (Ym = 1, fr.exports = vy()), fr.exports;
}
var O = Ri();
const W = /* @__PURE__ */ fv(O), Lm = /* @__PURE__ */ cv({
  __proto__: null,
  default: W
}, [O]);
var rr = { exports: {} }, $n = {}, or = { exports: {} }, sr = {};
var Gm;
function hy() {
  return Gm || (Gm = 1, (function(i) {
    function f(M, Y) {
      var V = M.length;
      M.push(Y);
      t: for (; 0 < V; ) {
        var ft = V - 1 >>> 1, st = M[ft];
        if (0 < d(st, Y))
          M[ft] = Y, M[V] = st, V = ft;
        else break t;
      }
    }
    function o(M) {
      return M.length === 0 ? null : M[0];
    }
    function r(M) {
      if (M.length === 0) return null;
      var Y = M[0], V = M.pop();
      if (V !== Y) {
        M[0] = V;
        t: for (var ft = 0, st = M.length, h = st >>> 1; ft < h; ) {
          var N = 2 * (ft + 1) - 1, x = M[N], L = N + 1, k = M[L];
          if (0 > d(x, V))
            L < st && 0 > d(k, x) ? (M[ft] = k, M[L] = V, ft = L) : (M[ft] = x, M[N] = V, ft = N);
          else if (L < st && 0 > d(k, V))
            M[ft] = k, M[L] = V, ft = L;
          else break t;
        }
      }
      return Y;
    }
    function d(M, Y) {
      var V = M.sortIndex - Y.sortIndex;
      return V !== 0 ? V : M.id - Y.id;
    }
    if (i.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var p = performance;
      i.unstable_now = function() {
        return p.now();
      };
    } else {
      var T = Date, S = T.now();
      i.unstable_now = function() {
        return T.now() - S;
      };
    }
    var v = [], g = [], H = 1, R = null, B = 3, q = !1, j = !1, X = !1, Z = !1, F = typeof setTimeout == "function" ? setTimeout : null, I = typeof clearTimeout == "function" ? clearTimeout : null, K = typeof setImmediate < "u" ? setImmediate : null;
    function lt(M) {
      for (var Y = o(g); Y !== null; ) {
        if (Y.callback === null) r(g);
        else if (Y.startTime <= M)
          r(g), Y.sortIndex = Y.expirationTime, f(v, Y);
        else break;
        Y = o(g);
      }
    }
    function vt(M) {
      if (X = !1, lt(M), !j)
        if (o(v) !== null)
          j = !0, ht || (ht = !0, jt());
        else {
          var Y = o(g);
          Y !== null && $t(vt, Y.startTime - M);
        }
    }
    var ht = !1, J = -1, Xt = 5, ee = -1;
    function Rt() {
      return Z ? !0 : !(i.unstable_now() - ee < Xt);
    }
    function Vt() {
      if (Z = !1, ht) {
        var M = i.unstable_now();
        ee = M;
        var Y = !0;
        try {
          t: {
            j = !1, X && (X = !1, I(J), J = -1), q = !0;
            var V = B;
            try {
              e: {
                for (lt(M), R = o(v); R !== null && !(R.expirationTime > M && Rt()); ) {
                  var ft = R.callback;
                  if (typeof ft == "function") {
                    R.callback = null, B = R.priorityLevel;
                    var st = ft(
                      R.expirationTime <= M
                    );
                    if (M = i.unstable_now(), typeof st == "function") {
                      R.callback = st, lt(M), Y = !0;
                      break e;
                    }
                    R === o(v) && r(v), lt(M);
                  } else r(v);
                  R = o(v);
                }
                if (R !== null) Y = !0;
                else {
                  var h = o(g);
                  h !== null && $t(
                    vt,
                    h.startTime - M
                  ), Y = !1;
                }
              }
              break t;
            } finally {
              R = null, B = V, q = !1;
            }
            Y = void 0;
          }
        } finally {
          Y ? jt() : ht = !1;
        }
      }
    }
    var jt;
    if (typeof K == "function")
      jt = function() {
        K(Vt);
      };
    else if (typeof MessageChannel < "u") {
      var Qt = new MessageChannel(), Jt = Qt.port2;
      Qt.port1.onmessage = Vt, jt = function() {
        Jt.postMessage(null);
      };
    } else
      jt = function() {
        F(Vt, 0);
      };
    function $t(M, Y) {
      J = F(function() {
        M(i.unstable_now());
      }, Y);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(M) {
      M.callback = null;
    }, i.unstable_forceFrameRate = function(M) {
      0 > M || 125 < M ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Xt = 0 < M ? Math.floor(1e3 / M) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return B;
    }, i.unstable_next = function(M) {
      switch (B) {
        case 1:
        case 2:
        case 3:
          var Y = 3;
          break;
        default:
          Y = B;
      }
      var V = B;
      B = Y;
      try {
        return M();
      } finally {
        B = V;
      }
    }, i.unstable_requestPaint = function() {
      Z = !0;
    }, i.unstable_runWithPriority = function(M, Y) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var V = B;
      B = M;
      try {
        return Y();
      } finally {
        B = V;
      }
    }, i.unstable_scheduleCallback = function(M, Y, V) {
      var ft = i.unstable_now();
      switch (typeof V == "object" && V !== null ? (V = V.delay, V = typeof V == "number" && 0 < V ? ft + V : ft) : V = ft, M) {
        case 1:
          var st = -1;
          break;
        case 2:
          st = 250;
          break;
        case 5:
          st = 1073741823;
          break;
        case 4:
          st = 1e4;
          break;
        default:
          st = 5e3;
      }
      return st = V + st, M = {
        id: H++,
        callback: Y,
        priorityLevel: M,
        startTime: V,
        expirationTime: st,
        sortIndex: -1
      }, V > ft ? (M.sortIndex = V, f(g, M), o(v) === null && M === o(g) && (X ? (I(J), J = -1) : X = !0, $t(vt, V - ft))) : (M.sortIndex = st, f(v, M), j || q || (j = !0, ht || (ht = !0, jt()))), M;
    }, i.unstable_shouldYield = Rt, i.unstable_wrapCallback = function(M) {
      var Y = B;
      return function() {
        var V = B;
        B = Y;
        try {
          return M.apply(this, arguments);
        } finally {
          B = V;
        }
      };
    };
  })(sr)), sr;
}
var Xm;
function yy() {
  return Xm || (Xm = 1, or.exports = hy()), or.exports;
}
var dr = { exports: {} }, te = {};
var Qm;
function gy() {
  if (Qm) return te;
  Qm = 1;
  var i = Ri();
  function f(v) {
    var g = "https://react.dev/errors/" + v;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var H = 2; H < arguments.length; H++)
        g += "&args[]=" + encodeURIComponent(arguments[H]);
    }
    return "Minified React error #" + v + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function o() {
  }
  var r = {
    d: {
      f: o,
      r: function() {
        throw Error(f(522));
      },
      D: o,
      C: o,
      L: o,
      m: o,
      X: o,
      S: o,
      M: o
    },
    p: 0,
    findDOMNode: null
  }, d = /* @__PURE__ */ Symbol.for("react.portal");
  function p(v, g, H) {
    var R = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: d,
      key: R == null ? null : "" + R,
      children: v,
      containerInfo: g,
      implementation: H
    };
  }
  var T = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function S(v, g) {
    if (v === "font") return "";
    if (typeof g == "string")
      return g === "use-credentials" ? g : "";
  }
  return te.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, te.createPortal = function(v, g) {
    var H = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)
      throw Error(f(299));
    return p(v, g, null, H);
  }, te.flushSync = function(v) {
    var g = T.T, H = r.p;
    try {
      if (T.T = null, r.p = 2, v) return v();
    } finally {
      T.T = g, r.p = H, r.d.f();
    }
  }, te.preconnect = function(v, g) {
    typeof v == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, r.d.C(v, g));
  }, te.prefetchDNS = function(v) {
    typeof v == "string" && r.d.D(v);
  }, te.preinit = function(v, g) {
    if (typeof v == "string" && g && typeof g.as == "string") {
      var H = g.as, R = S(H, g.crossOrigin), B = typeof g.integrity == "string" ? g.integrity : void 0, q = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
      H === "style" ? r.d.S(
        v,
        typeof g.precedence == "string" ? g.precedence : void 0,
        {
          crossOrigin: R,
          integrity: B,
          fetchPriority: q
        }
      ) : H === "script" && r.d.X(v, {
        crossOrigin: R,
        integrity: B,
        fetchPriority: q,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0
      });
    }
  }, te.preinitModule = function(v, g) {
    if (typeof v == "string")
      if (typeof g == "object" && g !== null) {
        if (g.as == null || g.as === "script") {
          var H = S(
            g.as,
            g.crossOrigin
          );
          r.d.M(v, {
            crossOrigin: H,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
            nonce: typeof g.nonce == "string" ? g.nonce : void 0
          });
        }
      } else g == null && r.d.M(v);
  }, te.preload = function(v, g) {
    if (typeof v == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
      var H = g.as, R = S(H, g.crossOrigin);
      r.d.L(v, H, {
        crossOrigin: R,
        integrity: typeof g.integrity == "string" ? g.integrity : void 0,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0,
        type: typeof g.type == "string" ? g.type : void 0,
        fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
        referrerPolicy: typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
        imageSrcSet: typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
        imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
        media: typeof g.media == "string" ? g.media : void 0
      });
    }
  }, te.preloadModule = function(v, g) {
    if (typeof v == "string")
      if (g) {
        var H = S(g.as, g.crossOrigin);
        r.d.m(v, {
          as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
          crossOrigin: H,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0
        });
      } else r.d.m(v);
  }, te.requestFormReset = function(v) {
    r.d.r(v);
  }, te.unstable_batchedUpdates = function(v, g) {
    return v(g);
  }, te.useFormState = function(v, g, H) {
    return T.H.useFormState(v, g, H);
  }, te.useFormStatus = function() {
    return T.H.useHostTransitionStatus();
  }, te.version = "19.2.3", te;
}
var Zm;
function rv() {
  if (Zm) return dr.exports;
  Zm = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (f) {
        console.error(f);
      }
  }
  return i(), dr.exports = gy(), dr.exports;
}
var Vm;
function py() {
  if (Vm) return $n;
  Vm = 1;
  var i = yy(), f = Ri(), o = rv();
  function r(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        e += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function d(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function p(t) {
    var e = t, l = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do
        e = t, (e.flags & 4098) !== 0 && (l = e.return), t = e.return;
      while (t);
    }
    return e.tag === 3 ? l : null;
  }
  function T(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function S(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function v(t) {
    if (p(t) !== t)
      throw Error(r(188));
  }
  function g(t) {
    var e = t.alternate;
    if (!e) {
      if (e = p(t), e === null) throw Error(r(188));
      return e !== t ? null : t;
    }
    for (var l = t, a = e; ; ) {
      var n = l.return;
      if (n === null) break;
      var u = n.alternate;
      if (u === null) {
        if (a = n.return, a !== null) {
          l = a;
          continue;
        }
        break;
      }
      if (n.child === u.child) {
        for (u = n.child; u; ) {
          if (u === l) return v(n), t;
          if (u === a) return v(n), e;
          u = u.sibling;
        }
        throw Error(r(188));
      }
      if (l.return !== a.return) l = n, a = u;
      else {
        for (var c = !1, s = n.child; s; ) {
          if (s === l) {
            c = !0, l = n, a = u;
            break;
          }
          if (s === a) {
            c = !0, a = n, l = u;
            break;
          }
          s = s.sibling;
        }
        if (!c) {
          for (s = u.child; s; ) {
            if (s === l) {
              c = !0, l = u, a = n;
              break;
            }
            if (s === a) {
              c = !0, a = u, l = n;
              break;
            }
            s = s.sibling;
          }
          if (!c) throw Error(r(189));
        }
      }
      if (l.alternate !== a) throw Error(r(190));
    }
    if (l.tag !== 3) throw Error(r(188));
    return l.stateNode.current === l ? t : e;
  }
  function H(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = H(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var R = Object.assign, B = /* @__PURE__ */ Symbol.for("react.element"), q = /* @__PURE__ */ Symbol.for("react.transitional.element"), j = /* @__PURE__ */ Symbol.for("react.portal"), X = /* @__PURE__ */ Symbol.for("react.fragment"), Z = /* @__PURE__ */ Symbol.for("react.strict_mode"), F = /* @__PURE__ */ Symbol.for("react.profiler"), I = /* @__PURE__ */ Symbol.for("react.consumer"), K = /* @__PURE__ */ Symbol.for("react.context"), lt = /* @__PURE__ */ Symbol.for("react.forward_ref"), vt = /* @__PURE__ */ Symbol.for("react.suspense"), ht = /* @__PURE__ */ Symbol.for("react.suspense_list"), J = /* @__PURE__ */ Symbol.for("react.memo"), Xt = /* @__PURE__ */ Symbol.for("react.lazy"), ee = /* @__PURE__ */ Symbol.for("react.activity"), Rt = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Vt = Symbol.iterator;
  function jt(t) {
    return t === null || typeof t != "object" ? null : (t = Vt && t[Vt] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var Qt = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Jt(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Qt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case X:
        return "Fragment";
      case F:
        return "Profiler";
      case Z:
        return "StrictMode";
      case vt:
        return "Suspense";
      case ht:
        return "SuspenseList";
      case ee:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case j:
          return "Portal";
        case K:
          return t.displayName || "Context";
        case I:
          return (t._context.displayName || "Context") + ".Consumer";
        case lt:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case J:
          return e = t.displayName || null, e !== null ? e : Jt(t.type) || "Memo";
        case Xt:
          e = t._payload, t = t._init;
          try {
            return Jt(t(e));
          } catch {
          }
      }
    return null;
  }
  var $t = Array.isArray, M = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Y = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ft = [], st = -1;
  function h(t) {
    return { current: t };
  }
  function N(t) {
    0 > st || (t.current = ft[st], ft[st] = null, st--);
  }
  function x(t, e) {
    st++, ft[st] = t.current, t.current = e;
  }
  var L = h(null), k = h(null), at = h(null), ot = h(null);
  function Bt(t, e) {
    switch (x(at, e), x(k, t), x(L, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? nm(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = nm(e), t = um(e, t);
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    N(L), x(L, t);
  }
  function Tt() {
    N(L), N(k), N(at);
  }
  function Pa(t) {
    t.memoizedState !== null && x(ot, t);
    var e = L.current, l = um(e, t.type);
    e !== l && (x(k, t), x(L, l));
  }
  function uu(t) {
    k.current === t && (N(L), N(k)), ot.current === t && (N(ot), Zn._currentValue = V);
  }
  var Qi, Hr;
  function Zl(t) {
    if (Qi === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        Qi = e && e[1] || "", Hr = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Qi + t + Hr;
  }
  var Zi = !1;
  function Vi(t, e) {
    if (!t || Zi) return "";
    Zi = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var U = function() {
                throw Error();
              };
              if (Object.defineProperty(U.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(U, []);
                } catch (z) {
                  var A = z;
                }
                Reflect.construct(t, [], U);
              } else {
                try {
                  U.call();
                } catch (z) {
                  A = z;
                }
                t.call(U.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (z) {
                A = z;
              }
              (U = t()) && typeof U.catch == "function" && U.catch(function() {
              });
            }
          } catch (z) {
            if (z && A && typeof z.stack == "string")
              return [z.stack, A.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      n && n.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var u = a.DetermineComponentFrameRoot(), c = u[0], s = u[1];
      if (c && s) {
        var m = c.split(`
`), _ = s.split(`
`);
        for (n = a = 0; a < m.length && !m[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; n < _.length && !_[n].includes(
          "DetermineComponentFrameRoot"
        ); )
          n++;
        if (a === m.length || n === _.length)
          for (a = m.length - 1, n = _.length - 1; 1 <= a && 0 <= n && m[a] !== _[n]; )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (m[a] !== _[n]) {
            if (a !== 1 || n !== 1)
              do
                if (a--, n--, 0 > n || m[a] !== _[n]) {
                  var D = `
` + m[a].replace(" at new ", " at ");
                  return t.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", t.displayName)), D;
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      Zi = !1, Error.prepareStackTrace = l;
    }
    return (l = t ? t.displayName || t.name : "") ? Zl(l) : "";
  }
  function Zv(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Zl(t.type);
      case 16:
        return Zl("Lazy");
      case 13:
        return t.child !== e && e !== null ? Zl("Suspense Fallback") : Zl("Suspense");
      case 19:
        return Zl("SuspenseList");
      case 0:
      case 15:
        return Vi(t.type, !1);
      case 11:
        return Vi(t.type.render, !1);
      case 1:
        return Vi(t.type, !0);
      case 31:
        return Zl("Activity");
      default:
        return "";
    }
  }
  function xr(t) {
    try {
      var e = "", l = null;
      do
        e += Zv(t, l), l = t, t = t.return;
      while (t);
      return e;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var wi = Object.prototype.hasOwnProperty, Ki = i.unstable_scheduleCallback, Ji = i.unstable_cancelCallback, Vv = i.unstable_shouldYield, wv = i.unstable_requestPaint, de = i.unstable_now, Kv = i.unstable_getCurrentPriorityLevel, jr = i.unstable_ImmediatePriority, Br = i.unstable_UserBlockingPriority, iu = i.unstable_NormalPriority, Jv = i.unstable_LowPriority, qr = i.unstable_IdlePriority, $v = i.log, Fv = i.unstable_setDisableYieldValue, tn = null, me = null;
  function vl(t) {
    if (typeof $v == "function" && Fv(t), me && typeof me.setStrictMode == "function")
      try {
        me.setStrictMode(tn, t);
      } catch {
      }
  }
  var ve = Math.clz32 ? Math.clz32 : Iv, kv = Math.log, Wv = Math.LN2;
  function Iv(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (kv(t) / Wv | 0) | 0;
  }
  var cu = 256, fu = 262144, ru = 4194304;
  function Vl(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
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
        return 64;
      case 128:
        return 128;
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
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function ou(t, e, l) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var n = 0, u = t.suspendedLanes, c = t.pingedLanes;
    t = t.warmLanes;
    var s = a & 134217727;
    return s !== 0 ? (a = s & ~u, a !== 0 ? n = Vl(a) : (c &= s, c !== 0 ? n = Vl(c) : l || (l = s & ~t, l !== 0 && (n = Vl(l))))) : (s = a & ~u, s !== 0 ? n = Vl(s) : c !== 0 ? n = Vl(c) : l || (l = a & ~t, l !== 0 && (n = Vl(l)))), n === 0 ? 0 : e !== 0 && e !== n && (e & u) === 0 && (u = n & -n, l = e & -e, u >= l || u === 32 && (l & 4194048) !== 0) ? e : n;
  }
  function en(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Pv(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
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
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Yr() {
    var t = ru;
    return ru <<= 1, (ru & 62914560) === 0 && (ru = 4194304), t;
  }
  function $i(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function ln(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function t0(t, e, l, a, n, u) {
    var c = t.pendingLanes;
    t.pendingLanes = l, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= l, t.entangledLanes &= l, t.errorRecoveryDisabledLanes &= l, t.shellSuspendCounter = 0;
    var s = t.entanglements, m = t.expirationTimes, _ = t.hiddenUpdates;
    for (l = c & ~l; 0 < l; ) {
      var D = 31 - ve(l), U = 1 << D;
      s[D] = 0, m[D] = -1;
      var A = _[D];
      if (A !== null)
        for (_[D] = null, D = 0; D < A.length; D++) {
          var z = A[D];
          z !== null && (z.lane &= -536870913);
        }
      l &= ~U;
    }
    a !== 0 && Lr(t, a, 0), u !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(c & ~e));
  }
  function Lr(t, e, l) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var a = 31 - ve(e);
    t.entangledLanes |= e, t.entanglements[a] = t.entanglements[a] | 1073741824 | l & 261930;
  }
  function Gr(t, e) {
    var l = t.entangledLanes |= e;
    for (t = t.entanglements; l; ) {
      var a = 31 - ve(l), n = 1 << a;
      n & e | t[a] & e && (t[a] |= e), l &= ~n;
    }
  }
  function Xr(t, e) {
    var l = e & -e;
    return l = (l & 42) !== 0 ? 1 : Fi(l), (l & (t.suspendedLanes | e)) !== 0 ? 0 : l;
  }
  function Fi(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
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
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function ki(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Qr() {
    var t = Y.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Dm(t.type));
  }
  function Zr(t, e) {
    var l = Y.p;
    try {
      return Y.p = t, e();
    } finally {
      Y.p = l;
    }
  }
  var hl = Math.random().toString(36).slice(2), Ft = "__reactFiber$" + hl, ae = "__reactProps$" + hl, va = "__reactContainer$" + hl, Wi = "__reactEvents$" + hl, e0 = "__reactListeners$" + hl, l0 = "__reactHandles$" + hl, Vr = "__reactResources$" + hl, an = "__reactMarker$" + hl;
  function Ii(t) {
    delete t[Ft], delete t[ae], delete t[Wi], delete t[e0], delete t[l0];
  }
  function ha(t) {
    var e = t[Ft];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if (e = l[va] || l[Ft]) {
        if (l = e.alternate, e.child !== null || l !== null && l.child !== null)
          for (t = dm(t); t !== null; ) {
            if (l = t[Ft]) return l;
            t = dm(t);
          }
        return e;
      }
      t = l, l = t.parentNode;
    }
    return null;
  }
  function ya(t) {
    if (t = t[Ft] || t[va]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function nn(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(r(33));
  }
  function ga(t) {
    var e = t[Vr];
    return e || (e = t[Vr] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function wt(t) {
    t[an] = !0;
  }
  var wr = /* @__PURE__ */ new Set(), Kr = {};
  function wl(t, e) {
    pa(t, e), pa(t + "Capture", e);
  }
  function pa(t, e) {
    for (Kr[t] = e, t = 0; t < e.length; t++)
      wr.add(e[t]);
  }
  var a0 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Jr = {}, $r = {};
  function n0(t) {
    return wi.call($r, t) ? !0 : wi.call(Jr, t) ? !1 : a0.test(t) ? $r[t] = !0 : (Jr[t] = !0, !1);
  }
  function su(t, e, l) {
    if (n0(e))
      if (l === null) t.removeAttribute(e);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + l);
      }
  }
  function du(t, e, l) {
    if (l === null) t.removeAttribute(e);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + l);
    }
  }
  function Ke(t, e, l, a) {
    if (a === null) t.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttributeNS(e, l, "" + a);
    }
  }
  function Te(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Fr(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function u0(t, e, l) {
    var a = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      e
    );
    if (!t.hasOwnProperty(e) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var n = a.get, u = a.set;
      return Object.defineProperty(t, e, {
        configurable: !0,
        get: function() {
          return n.call(this);
        },
        set: function(c) {
          l = "" + c, u.call(this, c);
        }
      }), Object.defineProperty(t, e, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return l;
        },
        setValue: function(c) {
          l = "" + c;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[e];
        }
      };
    }
  }
  function Pi(t) {
    if (!t._valueTracker) {
      var e = Fr(t) ? "checked" : "value";
      t._valueTracker = u0(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function kr(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(), a = "";
    return t && (a = Fr(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== l ? (e.setValue(t), !0) : !1;
  }
  function mu(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var i0 = /[\n"\\]/g;
  function Ae(t) {
    return t.replace(
      i0,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function tc(t, e, l, a, n, u, c, s) {
    t.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? t.type = c : t.removeAttribute("type"), e != null ? c === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Te(e)) : t.value !== "" + Te(e) && (t.value = "" + Te(e)) : c !== "submit" && c !== "reset" || t.removeAttribute("value"), e != null ? ec(t, c, Te(e)) : l != null ? ec(t, c, Te(l)) : a != null && t.removeAttribute("value"), n == null && u != null && (t.defaultChecked = !!u), n != null && (t.checked = n && typeof n != "function" && typeof n != "symbol"), s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? t.name = "" + Te(s) : t.removeAttribute("name");
  }
  function Wr(t, e, l, a, n, u, c, s) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), e != null || l != null) {
      if (!(u !== "submit" && u !== "reset" || e != null)) {
        Pi(t);
        return;
      }
      l = l != null ? "" + Te(l) : "", e = e != null ? "" + Te(e) : l, s || e === t.value || (t.value = e), t.defaultValue = e;
    }
    a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = s ? t.checked : !!a, t.defaultChecked = !!a, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (t.name = c), Pi(t);
  }
  function ec(t, e, l) {
    e === "number" && mu(t.ownerDocument) === t || t.defaultValue === "" + l || (t.defaultValue = "" + l);
  }
  function ba(t, e, l, a) {
    if (t = t.options, e) {
      e = {};
      for (var n = 0; n < l.length; n++)
        e["$" + l[n]] = !0;
      for (l = 0; l < t.length; l++)
        n = e.hasOwnProperty("$" + t[l].value), t[l].selected !== n && (t[l].selected = n), n && a && (t[l].defaultSelected = !0);
    } else {
      for (l = "" + Te(l), e = null, n = 0; n < t.length; n++) {
        if (t[n].value === l) {
          t[n].selected = !0, a && (t[n].defaultSelected = !0);
          return;
        }
        e !== null || t[n].disabled || (e = t[n]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Ir(t, e, l) {
    if (e != null && (e = "" + Te(e), e !== t.value && (t.value = e), l == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? "" + Te(l) : "";
  }
  function Pr(t, e, l, a) {
    if (e == null) {
      if (a != null) {
        if (l != null) throw Error(r(92));
        if ($t(a)) {
          if (1 < a.length) throw Error(r(93));
          a = a[0];
        }
        l = a;
      }
      l == null && (l = ""), e = l;
    }
    l = Te(e), t.defaultValue = l, a = t.textContent, a === l && a !== "" && a !== null && (t.value = a), Pi(t);
  }
  function Sa(t, e) {
    if (e) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var c0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function to(t, e, l) {
    var a = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, l) : typeof l != "number" || l === 0 || c0.has(e) ? e === "float" ? t.cssFloat = l : t[e] = ("" + l).trim() : t[e] = l + "px";
  }
  function eo(t, e, l) {
    if (e != null && typeof e != "object")
      throw Error(r(62));
    if (t = t.style, l != null) {
      for (var a in l)
        !l.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
      for (var n in e)
        a = e[n], e.hasOwnProperty(n) && l[n] !== a && to(t, n, a);
    } else
      for (var u in e)
        e.hasOwnProperty(u) && to(t, u, e[u]);
  }
  function lc(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
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
  var f0 = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), r0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function vu(t) {
    return r0.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function Je() {
  }
  var ac = null;
  function nc(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Ea = null, _a = null;
  function lo(t) {
    var e = ya(t);
    if (e && (t = e.stateNode)) {
      var l = t[ae] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (tc(
            t,
            l.value,
            l.defaultValue,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name
          ), e = l.name, l.type === "radio" && e != null) {
            for (l = t; l.parentNode; ) l = l.parentNode;
            for (l = l.querySelectorAll(
              'input[name="' + Ae(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < l.length; e++) {
              var a = l[e];
              if (a !== t && a.form === t.form) {
                var n = a[ae] || null;
                if (!n) throw Error(r(90));
                tc(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name
                );
              }
            }
            for (e = 0; e < l.length; e++)
              a = l[e], a.form === t.form && kr(a);
          }
          break t;
        case "textarea":
          Ir(t, l.value, l.defaultValue);
          break t;
        case "select":
          e = l.value, e != null && ba(t, !!l.multiple, e, !1);
      }
    }
  }
  var uc = !1;
  function ao(t, e, l) {
    if (uc) return t(e, l);
    uc = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (uc = !1, (Ea !== null || _a !== null) && (ei(), Ea && (e = Ea, t = _a, _a = Ea = null, lo(e), t)))
        for (e = 0; e < t.length; e++) lo(t[e]);
    }
  }
  function un(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var a = l[ae] || null;
    if (a === null) return null;
    l = a[e];
    t: switch (e) {
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
        (a = !a.disabled) || (t = t.type, a = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !a;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (l && typeof l != "function")
      throw Error(
        r(231, e, typeof l)
      );
    return l;
  }
  var $e = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ic = !1;
  if ($e)
    try {
      var cn = {};
      Object.defineProperty(cn, "passive", {
        get: function() {
          ic = !0;
        }
      }), window.addEventListener("test", cn, cn), window.removeEventListener("test", cn, cn);
    } catch {
      ic = !1;
    }
  var yl = null, cc = null, hu = null;
  function no() {
    if (hu) return hu;
    var t, e = cc, l = e.length, a, n = "value" in yl ? yl.value : yl.textContent, u = n.length;
    for (t = 0; t < l && e[t] === n[t]; t++) ;
    var c = l - t;
    for (a = 1; a <= c && e[l - a] === n[u - a]; a++) ;
    return hu = n.slice(t, 1 < a ? 1 - a : void 0);
  }
  function yu(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function gu() {
    return !0;
  }
  function uo() {
    return !1;
  }
  function ne(t) {
    function e(l, a, n, u, c) {
      this._reactName = l, this._targetInst = n, this.type = a, this.nativeEvent = u, this.target = c, this.currentTarget = null;
      for (var s in t)
        t.hasOwnProperty(s) && (l = t[s], this[s] = l ? l(u) : u[s]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? gu : uo, this.isPropagationStopped = uo, this;
    }
    return R(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = gu);
      },
      stopPropagation: function() {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = gu);
      },
      persist: function() {
      },
      isPersistent: gu
    }), e;
  }
  var Kl = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, pu = ne(Kl), fn = R({}, Kl, { view: 0, detail: 0 }), o0 = ne(fn), fc, rc, rn, bu = R({}, fn, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: sc,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== rn && (rn && t.type === "mousemove" ? (fc = t.screenX - rn.screenX, rc = t.screenY - rn.screenY) : rc = fc = 0, rn = t), fc);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : rc;
    }
  }), io = ne(bu), s0 = R({}, bu, { dataTransfer: 0 }), d0 = ne(s0), m0 = R({}, fn, { relatedTarget: 0 }), oc = ne(m0), v0 = R({}, Kl, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), h0 = ne(v0), y0 = R({}, Kl, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), g0 = ne(y0), p0 = R({}, Kl, { data: 0 }), co = ne(p0), b0 = {
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
  }, S0 = {
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
  }, E0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function _0(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = E0[t]) ? !!e[t] : !1;
  }
  function sc() {
    return _0;
  }
  var T0 = R({}, fn, {
    key: function(t) {
      if (t.key) {
        var e = b0[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = yu(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? S0[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: sc,
    charCode: function(t) {
      return t.type === "keypress" ? yu(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? yu(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), A0 = ne(T0), z0 = R({}, bu, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), fo = ne(z0), O0 = R({}, fn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: sc
  }), M0 = ne(O0), D0 = R({}, Kl, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), C0 = ne(D0), N0 = R({}, bu, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), U0 = ne(N0), R0 = R({}, Kl, {
    newState: 0,
    oldState: 0
  }), H0 = ne(R0), x0 = [9, 13, 27, 32], dc = $e && "CompositionEvent" in window, on = null;
  $e && "documentMode" in document && (on = document.documentMode);
  var j0 = $e && "TextEvent" in window && !on, ro = $e && (!dc || on && 8 < on && 11 >= on), oo = " ", so = !1;
  function mo(t, e) {
    switch (t) {
      case "keyup":
        return x0.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function vo(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var Ta = !1;
  function B0(t, e) {
    switch (t) {
      case "compositionend":
        return vo(e);
      case "keypress":
        return e.which !== 32 ? null : (so = !0, oo);
      case "textInput":
        return t = e.data, t === oo && so ? null : t;
      default:
        return null;
    }
  }
  function q0(t, e) {
    if (Ta)
      return t === "compositionend" || !dc && mo(t, e) ? (t = no(), hu = cc = yl = null, Ta = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
          if (e.char && 1 < e.char.length)
            return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return ro && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var Y0 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function ho(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Y0[t.type] : e === "textarea";
  }
  function yo(t, e, l, a) {
    Ea ? _a ? _a.push(a) : _a = [a] : Ea = a, e = fi(e, "onChange"), 0 < e.length && (l = new pu(
      "onChange",
      "change",
      null,
      l,
      a
    ), t.push({ event: l, listeners: e }));
  }
  var sn = null, dn = null;
  function L0(t) {
    Id(t, 0);
  }
  function Su(t) {
    var e = nn(t);
    if (kr(e)) return t;
  }
  function go(t, e) {
    if (t === "change") return e;
  }
  var po = !1;
  if ($e) {
    var mc;
    if ($e) {
      var vc = "oninput" in document;
      if (!vc) {
        var bo = document.createElement("div");
        bo.setAttribute("oninput", "return;"), vc = typeof bo.oninput == "function";
      }
      mc = vc;
    } else mc = !1;
    po = mc && (!document.documentMode || 9 < document.documentMode);
  }
  function So() {
    sn && (sn.detachEvent("onpropertychange", Eo), dn = sn = null);
  }
  function Eo(t) {
    if (t.propertyName === "value" && Su(dn)) {
      var e = [];
      yo(
        e,
        dn,
        t,
        nc(t)
      ), ao(L0, e);
    }
  }
  function G0(t, e, l) {
    t === "focusin" ? (So(), sn = e, dn = l, sn.attachEvent("onpropertychange", Eo)) : t === "focusout" && So();
  }
  function X0(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Su(dn);
  }
  function Q0(t, e) {
    if (t === "click") return Su(e);
  }
  function Z0(t, e) {
    if (t === "input" || t === "change")
      return Su(e);
  }
  function V0(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var he = typeof Object.is == "function" ? Object.is : V0;
  function mn(t, e) {
    if (he(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var l = Object.keys(t), a = Object.keys(e);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!wi.call(e, n) || !he(t[n], e[n]))
        return !1;
    }
    return !0;
  }
  function _o(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function To(t, e) {
    var l = _o(t);
    t = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (a = t + l.textContent.length, t <= e && a >= e)
          return { node: l, offset: e - t };
        t = a;
      }
      t: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break t;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = _o(l);
    }
  }
  function Ao(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Ao(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function zo(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = mu(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) t = e.contentWindow;
      else break;
      e = mu(t.document);
    }
    return e;
  }
  function hc(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var w0 = $e && "documentMode" in document && 11 >= document.documentMode, Aa = null, yc = null, vn = null, gc = !1;
  function Oo(t, e, l) {
    var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    gc || Aa == null || Aa !== mu(a) || (a = Aa, "selectionStart" in a && hc(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), vn && mn(vn, a) || (vn = a, a = fi(yc, "onSelect"), 0 < a.length && (e = new pu(
      "onSelect",
      "select",
      null,
      e,
      l
    ), t.push({ event: e, listeners: a }), e.target = Aa)));
  }
  function Jl(t, e) {
    var l = {};
    return l[t.toLowerCase()] = e.toLowerCase(), l["Webkit" + t] = "webkit" + e, l["Moz" + t] = "moz" + e, l;
  }
  var za = {
    animationend: Jl("Animation", "AnimationEnd"),
    animationiteration: Jl("Animation", "AnimationIteration"),
    animationstart: Jl("Animation", "AnimationStart"),
    transitionrun: Jl("Transition", "TransitionRun"),
    transitionstart: Jl("Transition", "TransitionStart"),
    transitioncancel: Jl("Transition", "TransitionCancel"),
    transitionend: Jl("Transition", "TransitionEnd")
  }, pc = {}, Mo = {};
  $e && (Mo = document.createElement("div").style, "AnimationEvent" in window || (delete za.animationend.animation, delete za.animationiteration.animation, delete za.animationstart.animation), "TransitionEvent" in window || delete za.transitionend.transition);
  function $l(t) {
    if (pc[t]) return pc[t];
    if (!za[t]) return t;
    var e = za[t], l;
    for (l in e)
      if (e.hasOwnProperty(l) && l in Mo)
        return pc[t] = e[l];
    return t;
  }
  var Do = $l("animationend"), Co = $l("animationiteration"), No = $l("animationstart"), K0 = $l("transitionrun"), J0 = $l("transitionstart"), $0 = $l("transitioncancel"), Uo = $l("transitionend"), Ro = /* @__PURE__ */ new Map(), bc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  bc.push("scrollEnd");
  function je(t, e) {
    Ro.set(t, e), wl(e, [t]);
  }
  var Eu = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, ze = [], Oa = 0, Sc = 0;
  function _u() {
    for (var t = Oa, e = Sc = Oa = 0; e < t; ) {
      var l = ze[e];
      ze[e++] = null;
      var a = ze[e];
      ze[e++] = null;
      var n = ze[e];
      ze[e++] = null;
      var u = ze[e];
      if (ze[e++] = null, a !== null && n !== null) {
        var c = a.pending;
        c === null ? n.next = n : (n.next = c.next, c.next = n), a.pending = n;
      }
      u !== 0 && Ho(l, n, u);
    }
  }
  function Tu(t, e, l, a) {
    ze[Oa++] = t, ze[Oa++] = e, ze[Oa++] = l, ze[Oa++] = a, Sc |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
  }
  function Ec(t, e, l, a) {
    return Tu(t, e, l, a), Au(t);
  }
  function Fl(t, e) {
    return Tu(t, null, null, e), Au(t);
  }
  function Ho(t, e, l) {
    t.lanes |= l;
    var a = t.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, u = t.return; u !== null; )
      u.childLanes |= l, a = u.alternate, a !== null && (a.childLanes |= l), u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (n = !0)), t = u, u = u.return;
    return t.tag === 3 ? (u = t.stateNode, n && e !== null && (n = 31 - ve(l), t = u.hiddenUpdates, a = t[n], a === null ? t[n] = [e] : a.push(e), e.lane = l | 536870912), u) : null;
  }
  function Au(t) {
    if (50 < Bn)
      throw Bn = 0, Uf = null, Error(r(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Ma = {};
  function F0(t, e, l, a) {
    this.tag = t, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ye(t, e, l, a) {
    return new F0(t, e, l, a);
  }
  function _c(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Fe(t, e) {
    var l = t.alternate;
    return l === null ? (l = ye(
      t.tag,
      e,
      t.key,
      t.mode
    ), l.elementType = t.elementType, l.type = t.type, l.stateNode = t.stateNode, l.alternate = t, t.alternate = l) : (l.pendingProps = e, l.type = t.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = t.flags & 65011712, l.childLanes = t.childLanes, l.lanes = t.lanes, l.child = t.child, l.memoizedProps = t.memoizedProps, l.memoizedState = t.memoizedState, l.updateQueue = t.updateQueue, e = t.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, l.sibling = t.sibling, l.index = t.index, l.ref = t.ref, l.refCleanup = t.refCleanup, l;
  }
  function xo(t, e) {
    t.flags &= 65011714;
    var l = t.alternate;
    return l === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = l.childLanes, t.lanes = l.lanes, t.child = l.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = l.memoizedProps, t.memoizedState = l.memoizedState, t.updateQueue = l.updateQueue, t.type = l.type, e = l.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function zu(t, e, l, a, n, u) {
    var c = 0;
    if (a = t, typeof t == "function") _c(t) && (c = 1);
    else if (typeof t == "string")
      c = ty(
        t,
        l,
        L.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case ee:
          return t = ye(31, l, e, n), t.elementType = ee, t.lanes = u, t;
        case X:
          return kl(l.children, n, u, e);
        case Z:
          c = 8, n |= 24;
          break;
        case F:
          return t = ye(12, l, e, n | 2), t.elementType = F, t.lanes = u, t;
        case vt:
          return t = ye(13, l, e, n), t.elementType = vt, t.lanes = u, t;
        case ht:
          return t = ye(19, l, e, n), t.elementType = ht, t.lanes = u, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case K:
                c = 10;
                break t;
              case I:
                c = 9;
                break t;
              case lt:
                c = 11;
                break t;
              case J:
                c = 14;
                break t;
              case Xt:
                c = 16, a = null;
                break t;
            }
          c = 29, l = Error(
            r(130, t === null ? "null" : typeof t, "")
          ), a = null;
      }
    return e = ye(c, l, e, n), e.elementType = t, e.type = a, e.lanes = u, e;
  }
  function kl(t, e, l, a) {
    return t = ye(7, t, a, e), t.lanes = l, t;
  }
  function Tc(t, e, l) {
    return t = ye(6, t, null, e), t.lanes = l, t;
  }
  function jo(t) {
    var e = ye(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function Ac(t, e, l) {
    return e = ye(
      4,
      t.children !== null ? t.children : [],
      t.key,
      e
    ), e.lanes = l, e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, e;
  }
  var Bo = /* @__PURE__ */ new WeakMap();
  function Oe(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = Bo.get(t);
      return l !== void 0 ? l : (e = {
        value: t,
        source: e,
        stack: xr(e)
      }, Bo.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: xr(e)
    };
  }
  var Da = [], Ca = 0, Ou = null, hn = 0, Me = [], De = 0, gl = null, Le = 1, Ge = "";
  function ke(t, e) {
    Da[Ca++] = hn, Da[Ca++] = Ou, Ou = t, hn = e;
  }
  function qo(t, e, l) {
    Me[De++] = Le, Me[De++] = Ge, Me[De++] = gl, gl = t;
    var a = Le;
    t = Ge;
    var n = 32 - ve(a) - 1;
    a &= ~(1 << n), l += 1;
    var u = 32 - ve(e) + n;
    if (30 < u) {
      var c = n - n % 5;
      u = (a & (1 << c) - 1).toString(32), a >>= c, n -= c, Le = 1 << 32 - ve(e) + n | l << n | a, Ge = u + t;
    } else
      Le = 1 << u | l << n | a, Ge = t;
  }
  function zc(t) {
    t.return !== null && (ke(t, 1), qo(t, 1, 0));
  }
  function Oc(t) {
    for (; t === Ou; )
      Ou = Da[--Ca], Da[Ca] = null, hn = Da[--Ca], Da[Ca] = null;
    for (; t === gl; )
      gl = Me[--De], Me[De] = null, Ge = Me[--De], Me[De] = null, Le = Me[--De], Me[De] = null;
  }
  function Yo(t, e) {
    Me[De++] = Le, Me[De++] = Ge, Me[De++] = gl, Le = e.id, Ge = e.overflow, gl = t;
  }
  var kt = null, Mt = null, rt = !1, pl = null, Ce = !1, Mc = Error(r(519));
  function bl(t) {
    var e = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw yn(Oe(e, t)), Mc;
  }
  function Lo(t) {
    var e = t.stateNode, l = t.type, a = t.memoizedProps;
    switch (e[Ft] = t, e[ae] = a, l) {
      case "dialog":
        ut("cancel", e), ut("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        ut("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Yn.length; l++)
          ut(Yn[l], e);
        break;
      case "source":
        ut("error", e);
        break;
      case "img":
      case "image":
      case "link":
        ut("error", e), ut("load", e);
        break;
      case "details":
        ut("toggle", e);
        break;
      case "input":
        ut("invalid", e), Wr(
          e,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        );
        break;
      case "select":
        ut("invalid", e);
        break;
      case "textarea":
        ut("invalid", e), Pr(e, a.value, a.defaultValue, a.children);
    }
    l = a.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || e.textContent === "" + l || a.suppressHydrationWarning === !0 || lm(e.textContent, l) ? (a.popover != null && (ut("beforetoggle", e), ut("toggle", e)), a.onScroll != null && ut("scroll", e), a.onScrollEnd != null && ut("scrollend", e), a.onClick != null && (e.onclick = Je), e = !0) : e = !1, e || bl(t, !0);
  }
  function Go(t) {
    for (kt = t.return; kt; )
      switch (kt.tag) {
        case 5:
        case 31:
        case 13:
          Ce = !1;
          return;
        case 27:
        case 3:
          Ce = !0;
          return;
        default:
          kt = kt.return;
      }
  }
  function Na(t) {
    if (t !== kt) return !1;
    if (!rt) return Go(t), rt = !0, !1;
    var e = t.tag, l;
    if ((l = e !== 3 && e !== 27) && ((l = e === 5) && (l = t.type, l = !(l !== "form" && l !== "button") || Kf(t.type, t.memoizedProps)), l = !l), l && Mt && bl(t), Go(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      Mt = sm(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      Mt = sm(t);
    } else
      e === 27 ? (e = Mt, Hl(t.type) ? (t = Wf, Wf = null, Mt = t) : Mt = e) : Mt = kt ? Ue(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Wl() {
    Mt = kt = null, rt = !1;
  }
  function Dc() {
    var t = pl;
    return t !== null && (fe === null ? fe = t : fe.push.apply(
      fe,
      t
    ), pl = null), t;
  }
  function yn(t) {
    pl === null ? pl = [t] : pl.push(t);
  }
  var Cc = h(null), Il = null, We = null;
  function Sl(t, e, l) {
    x(Cc, e._currentValue), e._currentValue = l;
  }
  function Ie(t) {
    t._currentValue = Cc.current, N(Cc);
  }
  function Nc(t, e, l) {
    for (; t !== null; ) {
      var a = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e), t === l) break;
      t = t.return;
    }
  }
  function Uc(t, e, l, a) {
    var n = t.child;
    for (n !== null && (n.return = t); n !== null; ) {
      var u = n.dependencies;
      if (u !== null) {
        var c = n.child;
        u = u.firstContext;
        t: for (; u !== null; ) {
          var s = u;
          u = n;
          for (var m = 0; m < e.length; m++)
            if (s.context === e[m]) {
              u.lanes |= l, s = u.alternate, s !== null && (s.lanes |= l), Nc(
                u.return,
                l,
                t
              ), a || (c = null);
              break t;
            }
          u = s.next;
        }
      } else if (n.tag === 18) {
        if (c = n.return, c === null) throw Error(r(341));
        c.lanes |= l, u = c.alternate, u !== null && (u.lanes |= l), Nc(c, l, t), c = null;
      } else c = n.child;
      if (c !== null) c.return = n;
      else
        for (c = n; c !== null; ) {
          if (c === t) {
            c = null;
            break;
          }
          if (n = c.sibling, n !== null) {
            n.return = c.return, c = n;
            break;
          }
          c = c.return;
        }
      n = c;
    }
  }
  function Ua(t, e, l, a) {
    t = null;
    for (var n = e, u = !1; n !== null; ) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var c = n.alternate;
        if (c === null) throw Error(r(387));
        if (c = c.memoizedProps, c !== null) {
          var s = n.type;
          he(n.pendingProps.value, c.value) || (t !== null ? t.push(s) : t = [s]);
        }
      } else if (n === ot.current) {
        if (c = n.alternate, c === null) throw Error(r(387));
        c.memoizedState.memoizedState !== n.memoizedState.memoizedState && (t !== null ? t.push(Zn) : t = [Zn]);
      }
      n = n.return;
    }
    t !== null && Uc(
      e,
      t,
      l,
      a
    ), e.flags |= 262144;
  }
  function Mu(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!he(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function Pl(t) {
    Il = t, We = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function Wt(t) {
    return Xo(Il, t);
  }
  function Du(t, e) {
    return Il === null && Pl(t), Xo(t, e);
  }
  function Xo(t, e) {
    var l = e._currentValue;
    if (e = { context: e, memoizedValue: l, next: null }, We === null) {
      if (t === null) throw Error(r(308));
      We = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else We = We.next = e;
    return l;
  }
  var k0 = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = {
      aborted: !1,
      addEventListener: function(l, a) {
        t.push(a);
      }
    };
    this.abort = function() {
      e.aborted = !0, t.forEach(function(l) {
        return l();
      });
    };
  }, W0 = i.unstable_scheduleCallback, I0 = i.unstable_NormalPriority, qt = {
    $$typeof: K,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Rc() {
    return {
      controller: new k0(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function gn(t) {
    t.refCount--, t.refCount === 0 && W0(I0, function() {
      t.controller.abort();
    });
  }
  var pn = null, Hc = 0, Ra = 0, Ha = null;
  function P0(t, e) {
    if (pn === null) {
      var l = pn = [];
      Hc = 0, Ra = qf(), Ha = {
        status: "pending",
        value: void 0,
        then: function(a) {
          l.push(a);
        }
      };
    }
    return Hc++, e.then(Qo, Qo), e;
  }
  function Qo() {
    if (--Hc === 0 && pn !== null) {
      Ha !== null && (Ha.status = "fulfilled");
      var t = pn;
      pn = null, Ra = 0, Ha = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function th(t, e) {
    var l = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(n) {
        l.push(n);
      }
    };
    return t.then(
      function() {
        a.status = "fulfilled", a.value = e;
        for (var n = 0; n < l.length; n++) (0, l[n])(e);
      },
      function(n) {
        for (a.status = "rejected", a.reason = n, n = 0; n < l.length; n++)
          (0, l[n])(void 0);
      }
    ), a;
  }
  var Zo = M.S;
  M.S = function(t, e) {
    Od = de(), typeof e == "object" && e !== null && typeof e.then == "function" && P0(t, e), Zo !== null && Zo(t, e);
  };
  var ta = h(null);
  function xc() {
    var t = ta.current;
    return t !== null ? t : At.pooledCache;
  }
  function Cu(t, e) {
    e === null ? x(ta, ta.current) : x(ta, e.pool);
  }
  function Vo() {
    var t = xc();
    return t === null ? null : { parent: qt._currentValue, pool: t };
  }
  var xa = Error(r(460)), jc = Error(r(474)), Nu = Error(r(542)), Uu = { then: function() {
  } };
  function wo(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function Ko(t, e, l) {
    switch (l = t[l], l === void 0 ? t.push(e) : l !== e && (e.then(Je, Je), e = l), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, $o(t), t;
      default:
        if (typeof e.status == "string") e.then(Je, Je);
        else {
          if (t = At, t !== null && 100 < t.shellSuspendCounter)
            throw Error(r(482));
          t = e, t.status = "pending", t.then(
            function(a) {
              if (e.status === "pending") {
                var n = e;
                n.status = "fulfilled", n.value = a;
              }
            },
            function(a) {
              if (e.status === "pending") {
                var n = e;
                n.status = "rejected", n.reason = a;
              }
            }
          );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, $o(t), t;
        }
        throw la = e, xa;
    }
  }
  function ea(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (la = l, xa) : l;
    }
  }
  var la = null;
  function Jo() {
    if (la === null) throw Error(r(459));
    var t = la;
    return la = null, t;
  }
  function $o(t) {
    if (t === xa || t === Nu)
      throw Error(r(483));
  }
  var ja = null, bn = 0;
  function Ru(t) {
    var e = bn;
    return bn += 1, ja === null && (ja = []), Ko(ja, t, e);
  }
  function Sn(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function Hu(t, e) {
    throw e.$$typeof === B ? Error(r(525)) : (t = Object.prototype.toString.call(e), Error(
      r(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function Fo(t) {
    function e(b, y) {
      if (t) {
        var E = b.deletions;
        E === null ? (b.deletions = [y], b.flags |= 16) : E.push(y);
      }
    }
    function l(b, y) {
      if (!t) return null;
      for (; y !== null; )
        e(b, y), y = y.sibling;
      return null;
    }
    function a(b) {
      for (var y = /* @__PURE__ */ new Map(); b !== null; )
        b.key !== null ? y.set(b.key, b) : y.set(b.index, b), b = b.sibling;
      return y;
    }
    function n(b, y) {
      return b = Fe(b, y), b.index = 0, b.sibling = null, b;
    }
    function u(b, y, E) {
      return b.index = E, t ? (E = b.alternate, E !== null ? (E = E.index, E < y ? (b.flags |= 67108866, y) : E) : (b.flags |= 67108866, y)) : (b.flags |= 1048576, y);
    }
    function c(b) {
      return t && b.alternate === null && (b.flags |= 67108866), b;
    }
    function s(b, y, E, C) {
      return y === null || y.tag !== 6 ? (y = Tc(E, b.mode, C), y.return = b, y) : (y = n(y, E), y.return = b, y);
    }
    function m(b, y, E, C) {
      var w = E.type;
      return w === X ? D(
        b,
        y,
        E.props.children,
        C,
        E.key
      ) : y !== null && (y.elementType === w || typeof w == "object" && w !== null && w.$$typeof === Xt && ea(w) === y.type) ? (y = n(y, E.props), Sn(y, E), y.return = b, y) : (y = zu(
        E.type,
        E.key,
        E.props,
        null,
        b.mode,
        C
      ), Sn(y, E), y.return = b, y);
    }
    function _(b, y, E, C) {
      return y === null || y.tag !== 4 || y.stateNode.containerInfo !== E.containerInfo || y.stateNode.implementation !== E.implementation ? (y = Ac(E, b.mode, C), y.return = b, y) : (y = n(y, E.children || []), y.return = b, y);
    }
    function D(b, y, E, C, w) {
      return y === null || y.tag !== 7 ? (y = kl(
        E,
        b.mode,
        C,
        w
      ), y.return = b, y) : (y = n(y, E), y.return = b, y);
    }
    function U(b, y, E) {
      if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint")
        return y = Tc(
          "" + y,
          b.mode,
          E
        ), y.return = b, y;
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case q:
            return E = zu(
              y.type,
              y.key,
              y.props,
              null,
              b.mode,
              E
            ), Sn(E, y), E.return = b, E;
          case j:
            return y = Ac(
              y,
              b.mode,
              E
            ), y.return = b, y;
          case Xt:
            return y = ea(y), U(b, y, E);
        }
        if ($t(y) || jt(y))
          return y = kl(
            y,
            b.mode,
            E,
            null
          ), y.return = b, y;
        if (typeof y.then == "function")
          return U(b, Ru(y), E);
        if (y.$$typeof === K)
          return U(
            b,
            Du(b, y),
            E
          );
        Hu(b, y);
      }
      return null;
    }
    function A(b, y, E, C) {
      var w = y !== null ? y.key : null;
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return w !== null ? null : s(b, y, "" + E, C);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case q:
            return E.key === w ? m(b, y, E, C) : null;
          case j:
            return E.key === w ? _(b, y, E, C) : null;
          case Xt:
            return E = ea(E), A(b, y, E, C);
        }
        if ($t(E) || jt(E))
          return w !== null ? null : D(b, y, E, C, null);
        if (typeof E.then == "function")
          return A(
            b,
            y,
            Ru(E),
            C
          );
        if (E.$$typeof === K)
          return A(
            b,
            y,
            Du(b, E),
            C
          );
        Hu(b, E);
      }
      return null;
    }
    function z(b, y, E, C, w) {
      if (typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint")
        return b = b.get(E) || null, s(y, b, "" + C, w);
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case q:
            return b = b.get(
              C.key === null ? E : C.key
            ) || null, m(y, b, C, w);
          case j:
            return b = b.get(
              C.key === null ? E : C.key
            ) || null, _(y, b, C, w);
          case Xt:
            return C = ea(C), z(
              b,
              y,
              E,
              C,
              w
            );
        }
        if ($t(C) || jt(C))
          return b = b.get(E) || null, D(y, b, C, w, null);
        if (typeof C.then == "function")
          return z(
            b,
            y,
            E,
            Ru(C),
            w
          );
        if (C.$$typeof === K)
          return z(
            b,
            y,
            E,
            Du(y, C),
            w
          );
        Hu(y, C);
      }
      return null;
    }
    function G(b, y, E, C) {
      for (var w = null, dt = null, Q = y, et = y = 0, ct = null; Q !== null && et < E.length; et++) {
        Q.index > et ? (ct = Q, Q = null) : ct = Q.sibling;
        var mt = A(
          b,
          Q,
          E[et],
          C
        );
        if (mt === null) {
          Q === null && (Q = ct);
          break;
        }
        t && Q && mt.alternate === null && e(b, Q), y = u(mt, y, et), dt === null ? w = mt : dt.sibling = mt, dt = mt, Q = ct;
      }
      if (et === E.length)
        return l(b, Q), rt && ke(b, et), w;
      if (Q === null) {
        for (; et < E.length; et++)
          Q = U(b, E[et], C), Q !== null && (y = u(
            Q,
            y,
            et
          ), dt === null ? w = Q : dt.sibling = Q, dt = Q);
        return rt && ke(b, et), w;
      }
      for (Q = a(Q); et < E.length; et++)
        ct = z(
          Q,
          b,
          et,
          E[et],
          C
        ), ct !== null && (t && ct.alternate !== null && Q.delete(
          ct.key === null ? et : ct.key
        ), y = u(
          ct,
          y,
          et
        ), dt === null ? w = ct : dt.sibling = ct, dt = ct);
      return t && Q.forEach(function(Yl) {
        return e(b, Yl);
      }), rt && ke(b, et), w;
    }
    function $(b, y, E, C) {
      if (E == null) throw Error(r(151));
      for (var w = null, dt = null, Q = y, et = y = 0, ct = null, mt = E.next(); Q !== null && !mt.done; et++, mt = E.next()) {
        Q.index > et ? (ct = Q, Q = null) : ct = Q.sibling;
        var Yl = A(b, Q, mt.value, C);
        if (Yl === null) {
          Q === null && (Q = ct);
          break;
        }
        t && Q && Yl.alternate === null && e(b, Q), y = u(Yl, y, et), dt === null ? w = Yl : dt.sibling = Yl, dt = Yl, Q = ct;
      }
      if (mt.done)
        return l(b, Q), rt && ke(b, et), w;
      if (Q === null) {
        for (; !mt.done; et++, mt = E.next())
          mt = U(b, mt.value, C), mt !== null && (y = u(mt, y, et), dt === null ? w = mt : dt.sibling = mt, dt = mt);
        return rt && ke(b, et), w;
      }
      for (Q = a(Q); !mt.done; et++, mt = E.next())
        mt = z(Q, b, et, mt.value, C), mt !== null && (t && mt.alternate !== null && Q.delete(mt.key === null ? et : mt.key), y = u(mt, y, et), dt === null ? w = mt : dt.sibling = mt, dt = mt);
      return t && Q.forEach(function(sy) {
        return e(b, sy);
      }), rt && ke(b, et), w;
    }
    function _t(b, y, E, C) {
      if (typeof E == "object" && E !== null && E.type === X && E.key === null && (E = E.props.children), typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case q:
            t: {
              for (var w = E.key; y !== null; ) {
                if (y.key === w) {
                  if (w = E.type, w === X) {
                    if (y.tag === 7) {
                      l(
                        b,
                        y.sibling
                      ), C = n(
                        y,
                        E.props.children
                      ), C.return = b, b = C;
                      break t;
                    }
                  } else if (y.elementType === w || typeof w == "object" && w !== null && w.$$typeof === Xt && ea(w) === y.type) {
                    l(
                      b,
                      y.sibling
                    ), C = n(y, E.props), Sn(C, E), C.return = b, b = C;
                    break t;
                  }
                  l(b, y);
                  break;
                } else e(b, y);
                y = y.sibling;
              }
              E.type === X ? (C = kl(
                E.props.children,
                b.mode,
                C,
                E.key
              ), C.return = b, b = C) : (C = zu(
                E.type,
                E.key,
                E.props,
                null,
                b.mode,
                C
              ), Sn(C, E), C.return = b, b = C);
            }
            return c(b);
          case j:
            t: {
              for (w = E.key; y !== null; ) {
                if (y.key === w)
                  if (y.tag === 4 && y.stateNode.containerInfo === E.containerInfo && y.stateNode.implementation === E.implementation) {
                    l(
                      b,
                      y.sibling
                    ), C = n(y, E.children || []), C.return = b, b = C;
                    break t;
                  } else {
                    l(b, y);
                    break;
                  }
                else e(b, y);
                y = y.sibling;
              }
              C = Ac(E, b.mode, C), C.return = b, b = C;
            }
            return c(b);
          case Xt:
            return E = ea(E), _t(
              b,
              y,
              E,
              C
            );
        }
        if ($t(E))
          return G(
            b,
            y,
            E,
            C
          );
        if (jt(E)) {
          if (w = jt(E), typeof w != "function") throw Error(r(150));
          return E = w.call(E), $(
            b,
            y,
            E,
            C
          );
        }
        if (typeof E.then == "function")
          return _t(
            b,
            y,
            Ru(E),
            C
          );
        if (E.$$typeof === K)
          return _t(
            b,
            y,
            Du(b, E),
            C
          );
        Hu(b, E);
      }
      return typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint" ? (E = "" + E, y !== null && y.tag === 6 ? (l(b, y.sibling), C = n(y, E), C.return = b, b = C) : (l(b, y), C = Tc(E, b.mode, C), C.return = b, b = C), c(b)) : l(b, y);
    }
    return function(b, y, E, C) {
      try {
        bn = 0;
        var w = _t(
          b,
          y,
          E,
          C
        );
        return ja = null, w;
      } catch (Q) {
        if (Q === xa || Q === Nu) throw Q;
        var dt = ye(29, Q, null, b.mode);
        return dt.lanes = C, dt.return = b, dt;
      }
    };
  }
  var aa = Fo(!0), ko = Fo(!1), El = !1;
  function Bc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function qc(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function _l(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Tl(t, e, l) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (yt & 2) !== 0) {
      var n = a.pending;
      return n === null ? e.next = e : (e.next = n.next, n.next = e), a.pending = e, e = Au(t), Ho(t, null, l), e;
    }
    return Tu(t, a, e, l), Au(t);
  }
  function En(t, e, l) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (l & 4194048) !== 0)) {
      var a = e.lanes;
      a &= t.pendingLanes, l |= a, e.lanes = l, Gr(t, l);
    }
  }
  function Yc(t, e) {
    var l = t.updateQueue, a = t.alternate;
    if (a !== null && (a = a.updateQueue, l === a)) {
      var n = null, u = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var c = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null
          };
          u === null ? n = u = c : u = u.next = c, l = l.next;
        } while (l !== null);
        u === null ? n = u = e : u = u.next = e;
      } else n = u = e;
      l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks
      }, t.updateQueue = l;
      return;
    }
    t = l.lastBaseUpdate, t === null ? l.firstBaseUpdate = e : t.next = e, l.lastBaseUpdate = e;
  }
  var Lc = !1;
  function _n() {
    if (Lc) {
      var t = Ha;
      if (t !== null) throw t;
    }
  }
  function Tn(t, e, l, a) {
    Lc = !1;
    var n = t.updateQueue;
    El = !1;
    var u = n.firstBaseUpdate, c = n.lastBaseUpdate, s = n.shared.pending;
    if (s !== null) {
      n.shared.pending = null;
      var m = s, _ = m.next;
      m.next = null, c === null ? u = _ : c.next = _, c = m;
      var D = t.alternate;
      D !== null && (D = D.updateQueue, s = D.lastBaseUpdate, s !== c && (s === null ? D.firstBaseUpdate = _ : s.next = _, D.lastBaseUpdate = m));
    }
    if (u !== null) {
      var U = n.baseState;
      c = 0, D = _ = m = null, s = u;
      do {
        var A = s.lane & -536870913, z = A !== s.lane;
        if (z ? (it & A) === A : (a & A) === A) {
          A !== 0 && A === Ra && (Lc = !0), D !== null && (D = D.next = {
            lane: 0,
            tag: s.tag,
            payload: s.payload,
            callback: null,
            next: null
          });
          t: {
            var G = t, $ = s;
            A = e;
            var _t = l;
            switch ($.tag) {
              case 1:
                if (G = $.payload, typeof G == "function") {
                  U = G.call(_t, U, A);
                  break t;
                }
                U = G;
                break t;
              case 3:
                G.flags = G.flags & -65537 | 128;
              case 0:
                if (G = $.payload, A = typeof G == "function" ? G.call(_t, U, A) : G, A == null) break t;
                U = R({}, U, A);
                break t;
              case 2:
                El = !0;
            }
          }
          A = s.callback, A !== null && (t.flags |= 64, z && (t.flags |= 8192), z = n.callbacks, z === null ? n.callbacks = [A] : z.push(A));
        } else
          z = {
            lane: A,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null
          }, D === null ? (_ = D = z, m = U) : D = D.next = z, c |= A;
        if (s = s.next, s === null) {
          if (s = n.shared.pending, s === null)
            break;
          z = s, s = z.next, z.next = null, n.lastBaseUpdate = z, n.shared.pending = null;
        }
      } while (!0);
      D === null && (m = U), n.baseState = m, n.firstBaseUpdate = _, n.lastBaseUpdate = D, u === null && (n.shared.lanes = 0), Dl |= c, t.lanes = c, t.memoizedState = U;
    }
  }
  function Wo(t, e) {
    if (typeof t != "function")
      throw Error(r(191, t));
    t.call(e);
  }
  function Io(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++)
        Wo(l[t], e);
  }
  var Ba = h(null), xu = h(0);
  function Po(t, e) {
    t = cl, x(xu, t), x(Ba, e), cl = t | e.baseLanes;
  }
  function Gc() {
    x(xu, cl), x(Ba, Ba.current);
  }
  function Xc() {
    cl = xu.current, N(Ba), N(xu);
  }
  var ge = h(null), Ne = null;
  function Al(t) {
    var e = t.alternate;
    x(Ht, Ht.current & 1), x(ge, t), Ne === null && (e === null || Ba.current !== null || e.memoizedState !== null) && (Ne = t);
  }
  function Qc(t) {
    x(Ht, Ht.current), x(ge, t), Ne === null && (Ne = t);
  }
  function ts(t) {
    t.tag === 22 ? (x(Ht, Ht.current), x(ge, t), Ne === null && (Ne = t)) : zl();
  }
  function zl() {
    x(Ht, Ht.current), x(ge, ge.current);
  }
  function pe(t) {
    N(ge), Ne === t && (Ne = null), N(Ht);
  }
  var Ht = h(0);
  function ju(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || Ff(l) || kf(l)))
          return e;
      } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    return null;
  }
  var Pe = 0, tt = null, St = null, Yt = null, Bu = !1, qa = !1, na = !1, qu = 0, An = 0, Ya = null, eh = 0;
  function Nt() {
    throw Error(r(321));
  }
  function Zc(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!he(t[l], e[l])) return !1;
    return !0;
  }
  function Vc(t, e, l, a, n, u) {
    return Pe = u, tt = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, M.H = t === null || t.memoizedState === null ? qs : uf, na = !1, u = l(a, n), na = !1, qa && (u = ls(
      e,
      l,
      a,
      n
    )), es(t), u;
  }
  function es(t) {
    M.H = Mn;
    var e = St !== null && St.next !== null;
    if (Pe = 0, Yt = St = tt = null, Bu = !1, An = 0, Ya = null, e) throw Error(r(300));
    t === null || Lt || (t = t.dependencies, t !== null && Mu(t) && (Lt = !0));
  }
  function ls(t, e, l, a) {
    tt = t;
    var n = 0;
    do {
      if (qa && (Ya = null), An = 0, qa = !1, 25 <= n) throw Error(r(301));
      if (n += 1, Yt = St = null, t.updateQueue != null) {
        var u = t.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      M.H = Ys, u = e(l, a);
    } while (qa);
    return u;
  }
  function lh() {
    var t = M.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? zn(e) : e, t = t.useState()[0], (St !== null ? St.memoizedState : null) !== t && (tt.flags |= 1024), e;
  }
  function wc() {
    var t = qu !== 0;
    return qu = 0, t;
  }
  function Kc(t, e, l) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~l;
  }
  function Jc(t) {
    if (Bu) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      Bu = !1;
    }
    Pe = 0, Yt = St = tt = null, qa = !1, An = qu = 0, Ya = null;
  }
  function le() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Yt === null ? tt.memoizedState = Yt = t : Yt = Yt.next = t, Yt;
  }
  function xt() {
    if (St === null) {
      var t = tt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = St.next;
    var e = Yt === null ? tt.memoizedState : Yt.next;
    if (e !== null)
      Yt = e, St = t;
    else {
      if (t === null)
        throw tt.alternate === null ? Error(r(467)) : Error(r(310));
      St = t, t = {
        memoizedState: St.memoizedState,
        baseState: St.baseState,
        baseQueue: St.baseQueue,
        queue: St.queue,
        next: null
      }, Yt === null ? tt.memoizedState = Yt = t : Yt = Yt.next = t;
    }
    return Yt;
  }
  function Yu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function zn(t) {
    var e = An;
    return An += 1, Ya === null && (Ya = []), t = Ko(Ya, t, e), e = tt, (Yt === null ? e.memoizedState : Yt.next) === null && (e = e.alternate, M.H = e === null || e.memoizedState === null ? qs : uf), t;
  }
  function Lu(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return zn(t);
      if (t.$$typeof === K) return Wt(t);
    }
    throw Error(r(438, String(t)));
  }
  function $c(t) {
    var e = null, l = tt.updateQueue;
    if (l !== null && (e = l.memoCache), e == null) {
      var a = tt.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (e = {
        data: a.data.map(function(n) {
          return n.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), l === null && (l = Yu(), tt.updateQueue = l), l.memoCache = e, l = e.data[e.index], l === void 0)
      for (l = e.data[e.index] = Array(t), a = 0; a < t; a++)
        l[a] = Rt;
    return e.index++, l;
  }
  function tl(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Gu(t) {
    var e = xt();
    return Fc(e, St, t);
  }
  function Fc(t, e, l) {
    var a = t.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = l;
    var n = t.baseQueue, u = a.pending;
    if (u !== null) {
      if (n !== null) {
        var c = n.next;
        n.next = u.next, u.next = c;
      }
      e.baseQueue = n = u, a.pending = null;
    }
    if (u = t.baseState, n === null) t.memoizedState = u;
    else {
      e = n.next;
      var s = c = null, m = null, _ = e, D = !1;
      do {
        var U = _.lane & -536870913;
        if (U !== _.lane ? (it & U) === U : (Pe & U) === U) {
          var A = _.revertLane;
          if (A === 0)
            m !== null && (m = m.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: _.action,
              hasEagerState: _.hasEagerState,
              eagerState: _.eagerState,
              next: null
            }), U === Ra && (D = !0);
          else if ((Pe & A) === A) {
            _ = _.next, A === Ra && (D = !0);
            continue;
          } else
            U = {
              lane: 0,
              revertLane: _.revertLane,
              gesture: null,
              action: _.action,
              hasEagerState: _.hasEagerState,
              eagerState: _.eagerState,
              next: null
            }, m === null ? (s = m = U, c = u) : m = m.next = U, tt.lanes |= A, Dl |= A;
          U = _.action, na && l(u, U), u = _.hasEagerState ? _.eagerState : l(u, U);
        } else
          A = {
            lane: U,
            revertLane: _.revertLane,
            gesture: _.gesture,
            action: _.action,
            hasEagerState: _.hasEagerState,
            eagerState: _.eagerState,
            next: null
          }, m === null ? (s = m = A, c = u) : m = m.next = A, tt.lanes |= U, Dl |= U;
        _ = _.next;
      } while (_ !== null && _ !== e);
      if (m === null ? c = u : m.next = s, !he(u, t.memoizedState) && (Lt = !0, D && (l = Ha, l !== null)))
        throw l;
      t.memoizedState = u, t.baseState = c, t.baseQueue = m, a.lastRenderedState = u;
    }
    return n === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function kc(t) {
    var e = xt(), l = e.queue;
    if (l === null) throw Error(r(311));
    l.lastRenderedReducer = t;
    var a = l.dispatch, n = l.pending, u = e.memoizedState;
    if (n !== null) {
      l.pending = null;
      var c = n = n.next;
      do
        u = t(u, c.action), c = c.next;
      while (c !== n);
      he(u, e.memoizedState) || (Lt = !0), e.memoizedState = u, e.baseQueue === null && (e.baseState = u), l.lastRenderedState = u;
    }
    return [u, a];
  }
  function as(t, e, l) {
    var a = tt, n = xt(), u = rt;
    if (u) {
      if (l === void 0) throw Error(r(407));
      l = l();
    } else l = e();
    var c = !he(
      (St || n).memoizedState,
      l
    );
    if (c && (n.memoizedState = l, Lt = !0), n = n.queue, Pc(is.bind(null, a, n, t), [
      t
    ]), n.getSnapshot !== e || c || Yt !== null && Yt.memoizedState.tag & 1) {
      if (a.flags |= 2048, La(
        9,
        { destroy: void 0 },
        us.bind(
          null,
          a,
          n,
          l,
          e
        ),
        null
      ), At === null) throw Error(r(349));
      u || (Pe & 127) !== 0 || ns(a, e, l);
    }
    return l;
  }
  function ns(t, e, l) {
    t.flags |= 16384, t = { getSnapshot: e, value: l }, e = tt.updateQueue, e === null ? (e = Yu(), tt.updateQueue = e, e.stores = [t]) : (l = e.stores, l === null ? e.stores = [t] : l.push(t));
  }
  function us(t, e, l, a) {
    e.value = l, e.getSnapshot = a, cs(e) && fs(t);
  }
  function is(t, e, l) {
    return l(function() {
      cs(e) && fs(t);
    });
  }
  function cs(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !he(t, l);
    } catch {
      return !0;
    }
  }
  function fs(t) {
    var e = Fl(t, 2);
    e !== null && re(e, t, 2);
  }
  function Wc(t) {
    var e = le();
    if (typeof t == "function") {
      var l = t;
      if (t = l(), na) {
        vl(!0);
        try {
          l();
        } finally {
          vl(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: tl,
      lastRenderedState: t
    }, e;
  }
  function rs(t, e, l, a) {
    return t.baseState = l, Fc(
      t,
      St,
      typeof a == "function" ? a : tl
    );
  }
  function ah(t, e, l, a, n) {
    if (Zu(t)) throw Error(r(485));
    if (t = e.action, t !== null) {
      var u = {
        payload: n,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(c) {
          u.listeners.push(c);
        }
      };
      M.T !== null ? l(!0) : u.isTransition = !1, a(u), l = e.pending, l === null ? (u.next = e.pending = u, os(e, u)) : (u.next = l.next, e.pending = l.next = u);
    }
  }
  function os(t, e) {
    var l = e.action, a = e.payload, n = t.state;
    if (e.isTransition) {
      var u = M.T, c = {};
      M.T = c;
      try {
        var s = l(n, a), m = M.S;
        m !== null && m(c, s), ss(t, e, s);
      } catch (_) {
        Ic(t, e, _);
      } finally {
        u !== null && c.types !== null && (u.types = c.types), M.T = u;
      }
    } else
      try {
        u = l(n, a), ss(t, e, u);
      } catch (_) {
        Ic(t, e, _);
      }
  }
  function ss(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(a) {
        ds(t, e, a);
      },
      function(a) {
        return Ic(t, e, a);
      }
    ) : ds(t, e, l);
  }
  function ds(t, e, l) {
    e.status = "fulfilled", e.value = l, ms(e), t.state = l, e = t.pending, e !== null && (l = e.next, l === e ? t.pending = null : (l = l.next, e.next = l, os(t, l)));
  }
  function Ic(t, e, l) {
    var a = t.pending;
    if (t.pending = null, a !== null) {
      a = a.next;
      do
        e.status = "rejected", e.reason = l, ms(e), e = e.next;
      while (e !== a);
    }
    t.action = null;
  }
  function ms(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function vs(t, e) {
    return e;
  }
  function hs(t, e) {
    if (rt) {
      var l = At.formState;
      if (l !== null) {
        t: {
          var a = tt;
          if (rt) {
            if (Mt) {
              e: {
                for (var n = Mt, u = Ce; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break e;
                  }
                  if (n = Ue(
                    n.nextSibling
                  ), n === null) {
                    n = null;
                    break e;
                  }
                }
                u = n.data, n = u === "F!" || u === "F" ? n : null;
              }
              if (n) {
                Mt = Ue(
                  n.nextSibling
                ), a = n.data === "F!";
                break t;
              }
            }
            bl(a);
          }
          a = !1;
        }
        a && (e = l[0]);
      }
    }
    return l = le(), l.memoizedState = l.baseState = e, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: vs,
      lastRenderedState: e
    }, l.queue = a, l = xs.bind(
      null,
      tt,
      a
    ), a.dispatch = l, a = Wc(!1), u = nf.bind(
      null,
      tt,
      !1,
      a.queue
    ), a = le(), n = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, a.queue = n, l = ah.bind(
      null,
      tt,
      n,
      u,
      l
    ), n.dispatch = l, a.memoizedState = t, [e, l, !1];
  }
  function ys(t) {
    var e = xt();
    return gs(e, St, t);
  }
  function gs(t, e, l) {
    if (e = Fc(
      t,
      e,
      vs
    )[0], t = Gu(tl)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var a = zn(e);
      } catch (c) {
        throw c === xa ? Nu : c;
      }
    else a = e;
    e = xt();
    var n = e.queue, u = n.dispatch;
    return l !== e.memoizedState && (tt.flags |= 2048, La(
      9,
      { destroy: void 0 },
      nh.bind(null, n, l),
      null
    )), [a, u, t];
  }
  function nh(t, e) {
    t.action = e;
  }
  function ps(t) {
    var e = xt(), l = St;
    if (l !== null)
      return gs(e, l, t);
    xt(), e = e.memoizedState, l = xt();
    var a = l.queue.dispatch;
    return l.memoizedState = t, [e, a, !1];
  }
  function La(t, e, l, a) {
    return t = { tag: t, create: l, deps: a, inst: e, next: null }, e = tt.updateQueue, e === null && (e = Yu(), tt.updateQueue = e), l = e.lastEffect, l === null ? e.lastEffect = t.next = t : (a = l.next, l.next = t, t.next = a, e.lastEffect = t), t;
  }
  function bs() {
    return xt().memoizedState;
  }
  function Xu(t, e, l, a) {
    var n = le();
    tt.flags |= t, n.memoizedState = La(
      1 | e,
      { destroy: void 0 },
      l,
      a === void 0 ? null : a
    );
  }
  function Qu(t, e, l, a) {
    var n = xt();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    St !== null && a !== null && Zc(a, St.memoizedState.deps) ? n.memoizedState = La(e, u, l, a) : (tt.flags |= t, n.memoizedState = La(
      1 | e,
      u,
      l,
      a
    ));
  }
  function Ss(t, e) {
    Xu(8390656, 8, t, e);
  }
  function Pc(t, e) {
    Qu(2048, 8, t, e);
  }
  function uh(t) {
    tt.flags |= 4;
    var e = tt.updateQueue;
    if (e === null)
      e = Yu(), tt.updateQueue = e, e.events = [t];
    else {
      var l = e.events;
      l === null ? e.events = [t] : l.push(t);
    }
  }
  function Es(t) {
    var e = xt().memoizedState;
    return uh({ ref: e, nextImpl: t }), function() {
      if ((yt & 2) !== 0) throw Error(r(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function _s(t, e) {
    return Qu(4, 2, t, e);
  }
  function Ts(t, e) {
    return Qu(4, 4, t, e);
  }
  function As(t, e) {
    if (typeof e == "function") {
      t = t();
      var l = e(t);
      return function() {
        typeof l == "function" ? l() : e(null);
      };
    }
    if (e != null)
      return t = t(), e.current = t, function() {
        e.current = null;
      };
  }
  function zs(t, e, l) {
    l = l != null ? l.concat([t]) : null, Qu(4, 4, As.bind(null, e, t), l);
  }
  function tf() {
  }
  function Os(t, e) {
    var l = xt();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    return e !== null && Zc(e, a[1]) ? a[0] : (l.memoizedState = [t, e], t);
  }
  function Ms(t, e) {
    var l = xt();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    if (e !== null && Zc(e, a[1]))
      return a[0];
    if (a = t(), na) {
      vl(!0);
      try {
        t();
      } finally {
        vl(!1);
      }
    }
    return l.memoizedState = [a, e], a;
  }
  function ef(t, e, l) {
    return l === void 0 || (Pe & 1073741824) !== 0 && (it & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = l, t = Dd(), tt.lanes |= t, Dl |= t, l);
  }
  function Ds(t, e, l, a) {
    return he(l, e) ? l : Ba.current !== null ? (t = ef(t, l, a), he(t, e) || (Lt = !0), t) : (Pe & 42) === 0 || (Pe & 1073741824) !== 0 && (it & 261930) === 0 ? (Lt = !0, t.memoizedState = l) : (t = Dd(), tt.lanes |= t, Dl |= t, e);
  }
  function Cs(t, e, l, a, n) {
    var u = Y.p;
    Y.p = u !== 0 && 8 > u ? u : 8;
    var c = M.T, s = {};
    M.T = s, nf(t, !1, e, l);
    try {
      var m = n(), _ = M.S;
      if (_ !== null && _(s, m), m !== null && typeof m == "object" && typeof m.then == "function") {
        var D = th(
          m,
          a
        );
        On(
          t,
          e,
          D,
          Ee(t)
        );
      } else
        On(
          t,
          e,
          a,
          Ee(t)
        );
    } catch (U) {
      On(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: U },
        Ee()
      );
    } finally {
      Y.p = u, c !== null && s.types !== null && (c.types = s.types), M.T = c;
    }
  }
  function ih() {
  }
  function lf(t, e, l, a) {
    if (t.tag !== 5) throw Error(r(476));
    var n = Ns(t).queue;
    Cs(
      t,
      n,
      e,
      V,
      l === null ? ih : function() {
        return Us(t), l(a);
      }
    );
  }
  function Ns(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: V,
      baseState: V,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: tl,
        lastRenderedState: V
      },
      next: null
    };
    var l = {};
    return e.next = {
      memoizedState: l,
      baseState: l,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: tl,
        lastRenderedState: l
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function Us(t) {
    var e = Ns(t);
    e.next === null && (e = t.alternate.memoizedState), On(
      t,
      e.next.queue,
      {},
      Ee()
    );
  }
  function af() {
    return Wt(Zn);
  }
  function Rs() {
    return xt().memoizedState;
  }
  function Hs() {
    return xt().memoizedState;
  }
  function ch(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = Ee();
          t = _l(l);
          var a = Tl(e, t, l);
          a !== null && (re(a, e, l), En(a, e, l)), e = { cache: Rc() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function fh(t, e, l) {
    var a = Ee();
    l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Zu(t) ? js(e, l) : (l = Ec(t, e, l, a), l !== null && (re(l, t, a), Bs(l, e, a)));
  }
  function xs(t, e, l) {
    var a = Ee();
    On(t, e, l, a);
  }
  function On(t, e, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Zu(t)) js(e, n);
    else {
      var u = t.alternate;
      if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer, u !== null))
        try {
          var c = e.lastRenderedState, s = u(c, l);
          if (n.hasEagerState = !0, n.eagerState = s, he(s, c))
            return Tu(t, e, n, 0), At === null && _u(), !1;
        } catch {
        }
      if (l = Ec(t, e, n, a), l !== null)
        return re(l, t, a), Bs(l, e, a), !0;
    }
    return !1;
  }
  function nf(t, e, l, a) {
    if (a = {
      lane: 2,
      revertLane: qf(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Zu(t)) {
      if (e) throw Error(r(479));
    } else
      e = Ec(
        t,
        l,
        a,
        2
      ), e !== null && re(e, t, 2);
  }
  function Zu(t) {
    var e = t.alternate;
    return t === tt || e !== null && e === tt;
  }
  function js(t, e) {
    qa = Bu = !0;
    var l = t.pending;
    l === null ? e.next = e : (e.next = l.next, l.next = e), t.pending = e;
  }
  function Bs(t, e, l) {
    if ((l & 4194048) !== 0) {
      var a = e.lanes;
      a &= t.pendingLanes, l |= a, e.lanes = l, Gr(t, l);
    }
  }
  var Mn = {
    readContext: Wt,
    use: Lu,
    useCallback: Nt,
    useContext: Nt,
    useEffect: Nt,
    useImperativeHandle: Nt,
    useLayoutEffect: Nt,
    useInsertionEffect: Nt,
    useMemo: Nt,
    useReducer: Nt,
    useRef: Nt,
    useState: Nt,
    useDebugValue: Nt,
    useDeferredValue: Nt,
    useTransition: Nt,
    useSyncExternalStore: Nt,
    useId: Nt,
    useHostTransitionStatus: Nt,
    useFormState: Nt,
    useActionState: Nt,
    useOptimistic: Nt,
    useMemoCache: Nt,
    useCacheRefresh: Nt
  };
  Mn.useEffectEvent = Nt;
  var qs = {
    readContext: Wt,
    use: Lu,
    useCallback: function(t, e) {
      return le().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: Wt,
    useEffect: Ss,
    useImperativeHandle: function(t, e, l) {
      l = l != null ? l.concat([t]) : null, Xu(
        4194308,
        4,
        As.bind(null, e, t),
        l
      );
    },
    useLayoutEffect: function(t, e) {
      return Xu(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      Xu(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var l = le();
      e = e === void 0 ? null : e;
      var a = t();
      if (na) {
        vl(!0);
        try {
          t();
        } finally {
          vl(!1);
        }
      }
      return l.memoizedState = [a, e], a;
    },
    useReducer: function(t, e, l) {
      var a = le();
      if (l !== void 0) {
        var n = l(e);
        if (na) {
          vl(!0);
          try {
            l(e);
          } finally {
            vl(!1);
          }
        }
      } else n = e;
      return a.memoizedState = a.baseState = n, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: n
      }, a.queue = t, t = t.dispatch = fh.bind(
        null,
        tt,
        t
      ), [a.memoizedState, t];
    },
    useRef: function(t) {
      var e = le();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = Wc(t);
      var e = t.queue, l = xs.bind(null, tt, e);
      return e.dispatch = l, [t.memoizedState, l];
    },
    useDebugValue: tf,
    useDeferredValue: function(t, e) {
      var l = le();
      return ef(l, t, e);
    },
    useTransition: function() {
      var t = Wc(!1);
      return t = Cs.bind(
        null,
        tt,
        t.queue,
        !0,
        !1
      ), le().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, l) {
      var a = tt, n = le();
      if (rt) {
        if (l === void 0)
          throw Error(r(407));
        l = l();
      } else {
        if (l = e(), At === null)
          throw Error(r(349));
        (it & 127) !== 0 || ns(a, e, l);
      }
      n.memoizedState = l;
      var u = { value: l, getSnapshot: e };
      return n.queue = u, Ss(is.bind(null, a, u, t), [
        t
      ]), a.flags |= 2048, La(
        9,
        { destroy: void 0 },
        us.bind(
          null,
          a,
          u,
          l,
          e
        ),
        null
      ), l;
    },
    useId: function() {
      var t = le(), e = At.identifierPrefix;
      if (rt) {
        var l = Ge, a = Le;
        l = (a & ~(1 << 32 - ve(a) - 1)).toString(32) + l, e = "_" + e + "R_" + l, l = qu++, 0 < l && (e += "H" + l.toString(32)), e += "_";
      } else
        l = eh++, e = "_" + e + "r_" + l.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: af,
    useFormState: hs,
    useActionState: hs,
    useOptimistic: function(t) {
      var e = le();
      e.memoizedState = e.baseState = t;
      var l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = l, e = nf.bind(
        null,
        tt,
        !0,
        l
      ), l.dispatch = e, [t, e];
    },
    useMemoCache: $c,
    useCacheRefresh: function() {
      return le().memoizedState = ch.bind(
        null,
        tt
      );
    },
    useEffectEvent: function(t) {
      var e = le(), l = { impl: t };
      return e.memoizedState = l, function() {
        if ((yt & 2) !== 0)
          throw Error(r(440));
        return l.impl.apply(void 0, arguments);
      };
    }
  }, uf = {
    readContext: Wt,
    use: Lu,
    useCallback: Os,
    useContext: Wt,
    useEffect: Pc,
    useImperativeHandle: zs,
    useInsertionEffect: _s,
    useLayoutEffect: Ts,
    useMemo: Ms,
    useReducer: Gu,
    useRef: bs,
    useState: function() {
      return Gu(tl);
    },
    useDebugValue: tf,
    useDeferredValue: function(t, e) {
      var l = xt();
      return Ds(
        l,
        St.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Gu(tl)[0], e = xt().memoizedState;
      return [
        typeof t == "boolean" ? t : zn(t),
        e
      ];
    },
    useSyncExternalStore: as,
    useId: Rs,
    useHostTransitionStatus: af,
    useFormState: ys,
    useActionState: ys,
    useOptimistic: function(t, e) {
      var l = xt();
      return rs(l, St, t, e);
    },
    useMemoCache: $c,
    useCacheRefresh: Hs
  };
  uf.useEffectEvent = Es;
  var Ys = {
    readContext: Wt,
    use: Lu,
    useCallback: Os,
    useContext: Wt,
    useEffect: Pc,
    useImperativeHandle: zs,
    useInsertionEffect: _s,
    useLayoutEffect: Ts,
    useMemo: Ms,
    useReducer: kc,
    useRef: bs,
    useState: function() {
      return kc(tl);
    },
    useDebugValue: tf,
    useDeferredValue: function(t, e) {
      var l = xt();
      return St === null ? ef(l, t, e) : Ds(
        l,
        St.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = kc(tl)[0], e = xt().memoizedState;
      return [
        typeof t == "boolean" ? t : zn(t),
        e
      ];
    },
    useSyncExternalStore: as,
    useId: Rs,
    useHostTransitionStatus: af,
    useFormState: ps,
    useActionState: ps,
    useOptimistic: function(t, e) {
      var l = xt();
      return St !== null ? rs(l, St, t, e) : (l.baseState = t, [t, l.queue.dispatch]);
    },
    useMemoCache: $c,
    useCacheRefresh: Hs
  };
  Ys.useEffectEvent = Es;
  function cf(t, e, l, a) {
    e = t.memoizedState, l = l(a, e), l = l == null ? e : R({}, e, l), t.memoizedState = l, t.lanes === 0 && (t.updateQueue.baseState = l);
  }
  var ff = {
    enqueueSetState: function(t, e, l) {
      t = t._reactInternals;
      var a = Ee(), n = _l(a);
      n.payload = e, l != null && (n.callback = l), e = Tl(t, n, a), e !== null && (re(e, t, a), En(e, t, a));
    },
    enqueueReplaceState: function(t, e, l) {
      t = t._reactInternals;
      var a = Ee(), n = _l(a);
      n.tag = 1, n.payload = e, l != null && (n.callback = l), e = Tl(t, n, a), e !== null && (re(e, t, a), En(e, t, a));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var l = Ee(), a = _l(l);
      a.tag = 2, e != null && (a.callback = e), e = Tl(t, a, l), e !== null && (re(e, t, l), En(e, t, l));
    }
  };
  function Ls(t, e, l, a, n, u, c) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, u, c) : e.prototype && e.prototype.isPureReactComponent ? !mn(l, a) || !mn(n, u) : !0;
  }
  function Gs(t, e, l, a) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(l, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(l, a), e.state !== t && ff.enqueueReplaceState(e, e.state, null);
  }
  function ua(t, e) {
    var l = e;
    if ("ref" in e) {
      l = {};
      for (var a in e)
        a !== "ref" && (l[a] = e[a]);
    }
    if (t = t.defaultProps) {
      l === e && (l = R({}, l));
      for (var n in t)
        l[n] === void 0 && (l[n] = t[n]);
    }
    return l;
  }
  function Xs(t) {
    Eu(t);
  }
  function Qs(t) {
    console.error(t);
  }
  function Zs(t) {
    Eu(t);
  }
  function Vu(t, e) {
    try {
      var l = t.onUncaughtError;
      l(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Vs(t, e, l) {
    try {
      var a = t.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function rf(t, e, l) {
    return l = _l(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      Vu(t, e);
    }, l;
  }
  function ws(t) {
    return t = _l(t), t.tag = 3, t;
  }
  function Ks(t, e, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = a.value;
      t.payload = function() {
        return n(u);
      }, t.callback = function() {
        Vs(e, l, a);
      };
    }
    var c = l.stateNode;
    c !== null && typeof c.componentDidCatch == "function" && (t.callback = function() {
      Vs(e, l, a), typeof n != "function" && (Cl === null ? Cl = /* @__PURE__ */ new Set([this]) : Cl.add(this));
      var s = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: s !== null ? s : ""
      });
    });
  }
  function rh(t, e, l, a, n) {
    if (l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (e = l.alternate, e !== null && Ua(
        e,
        l,
        n,
        !0
      ), l = ge.current, l !== null) {
        switch (l.tag) {
          case 31:
          case 13:
            return Ne === null ? li() : l.alternate === null && Ut === 0 && (Ut = 3), l.flags &= -257, l.flags |= 65536, l.lanes = n, a === Uu ? l.flags |= 16384 : (e = l.updateQueue, e === null ? l.updateQueue = /* @__PURE__ */ new Set([a]) : e.add(a), xf(t, a, n)), !1;
          case 22:
            return l.flags |= 65536, a === Uu ? l.flags |= 16384 : (e = l.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, l.updateQueue = e) : (l = e.retryQueue, l === null ? e.retryQueue = /* @__PURE__ */ new Set([a]) : l.add(a)), xf(t, a, n)), !1;
        }
        throw Error(r(435, l.tag));
      }
      return xf(t, a, n), li(), !1;
    }
    if (rt)
      return e = ge.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = n, a !== Mc && (t = Error(r(422), { cause: a }), yn(Oe(t, l)))) : (a !== Mc && (e = Error(r(423), {
        cause: a
      }), yn(
        Oe(e, l)
      )), t = t.current.alternate, t.flags |= 65536, n &= -n, t.lanes |= n, a = Oe(a, l), n = rf(
        t.stateNode,
        a,
        n
      ), Yc(t, n), Ut !== 4 && (Ut = 2)), !1;
    var u = Error(r(520), { cause: a });
    if (u = Oe(u, l), jn === null ? jn = [u] : jn.push(u), Ut !== 4 && (Ut = 2), e === null) return !0;
    a = Oe(a, l), l = e;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, t = n & -n, l.lanes |= t, t = rf(l.stateNode, a, t), Yc(l, t), !1;
        case 1:
          if (e = l.type, u = l.stateNode, (l.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Cl === null || !Cl.has(u))))
            return l.flags |= 65536, n &= -n, l.lanes |= n, n = ws(n), Ks(
              n,
              t,
              l,
              a
            ), Yc(l, n), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var of = Error(r(461)), Lt = !1;
  function It(t, e, l, a) {
    e.child = t === null ? ko(e, null, l, a) : aa(
      e,
      t.child,
      l,
      a
    );
  }
  function Js(t, e, l, a, n) {
    l = l.render;
    var u = e.ref;
    if ("ref" in a) {
      var c = {};
      for (var s in a)
        s !== "ref" && (c[s] = a[s]);
    } else c = a;
    return Pl(e), a = Vc(
      t,
      e,
      l,
      c,
      u,
      n
    ), s = wc(), t !== null && !Lt ? (Kc(t, e, n), el(t, e, n)) : (rt && s && zc(e), e.flags |= 1, It(t, e, a, n), e.child);
  }
  function $s(t, e, l, a, n) {
    if (t === null) {
      var u = l.type;
      return typeof u == "function" && !_c(u) && u.defaultProps === void 0 && l.compare === null ? (e.tag = 15, e.type = u, Fs(
        t,
        e,
        u,
        a,
        n
      )) : (t = zu(
        l.type,
        null,
        a,
        e,
        e.mode,
        n
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (u = t.child, !pf(t, n)) {
      var c = u.memoizedProps;
      if (l = l.compare, l = l !== null ? l : mn, l(c, a) && t.ref === e.ref)
        return el(t, e, n);
    }
    return e.flags |= 1, t = Fe(u, a), t.ref = e.ref, t.return = e, e.child = t;
  }
  function Fs(t, e, l, a, n) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (mn(u, a) && t.ref === e.ref)
        if (Lt = !1, e.pendingProps = a = u, pf(t, n))
          (t.flags & 131072) !== 0 && (Lt = !0);
        else
          return e.lanes = t.lanes, el(t, e, n);
    }
    return sf(
      t,
      e,
      l,
      a,
      n
    );
  }
  function ks(t, e, l, a) {
    var n = a.children, u = t !== null ? t.memoizedState : null;
    if (t === null && e.stateNode === null && (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (u = u !== null ? u.baseLanes | l : l, t !== null) {
          for (a = e.child = t.child, n = 0; a !== null; )
            n = n | a.lanes | a.childLanes, a = a.sibling;
          a = n & ~u;
        } else a = 0, e.child = null;
        return Ws(
          t,
          e,
          u,
          l,
          a
        );
      }
      if ((l & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && Cu(
          e,
          u !== null ? u.cachePool : null
        ), u !== null ? Po(e, u) : Gc(), ts(e);
      else
        return a = e.lanes = 536870912, Ws(
          t,
          e,
          u !== null ? u.baseLanes | l : l,
          l,
          a
        );
    } else
      u !== null ? (Cu(e, u.cachePool), Po(e, u), zl(), e.memoizedState = null) : (t !== null && Cu(e, null), Gc(), zl());
    return It(t, e, n, l), e.child;
  }
  function Dn(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function Ws(t, e, l, a, n) {
    var u = xc();
    return u = u === null ? null : { parent: qt._currentValue, pool: u }, e.memoizedState = {
      baseLanes: l,
      cachePool: u
    }, t !== null && Cu(e, null), Gc(), ts(e), t !== null && Ua(t, e, a, !0), e.childLanes = n, null;
  }
  function wu(t, e) {
    return e = Ju(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Is(t, e, l) {
    return aa(e, t.child, null, l), t = wu(e, e.pendingProps), t.flags |= 2, pe(e), e.memoizedState = null, t;
  }
  function oh(t, e, l) {
    var a = e.pendingProps, n = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (rt) {
        if (a.mode === "hidden")
          return t = wu(e, a), e.lanes = 536870912, Dn(null, t);
        if (Qc(e), (t = Mt) ? (t = om(
          t,
          Ce
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: gl !== null ? { id: Le, overflow: Ge } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = jo(t), l.return = e, e.child = l, kt = e, Mt = null)) : t = null, t === null) throw bl(e);
        return e.lanes = 536870912, null;
      }
      return wu(e, a);
    }
    var u = t.memoizedState;
    if (u !== null) {
      var c = u.dehydrated;
      if (Qc(e), n)
        if (e.flags & 256)
          e.flags &= -257, e = Is(
            t,
            e,
            l
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(r(558));
      else if (Lt || Ua(t, e, l, !1), n = (l & t.childLanes) !== 0, Lt || n) {
        if (a = At, a !== null && (c = Xr(a, l), c !== 0 && c !== u.retryLane))
          throw u.retryLane = c, Fl(t, c), re(a, t, c), of;
        li(), e = Is(
          t,
          e,
          l
        );
      } else
        t = u.treeContext, Mt = Ue(c.nextSibling), kt = e, rt = !0, pl = null, Ce = !1, t !== null && Yo(e, t), e = wu(e, a), e.flags |= 4096;
      return e;
    }
    return t = Fe(t.child, {
      mode: a.mode,
      children: a.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Ku(t, e) {
    var l = e.ref;
    if (l === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object")
        throw Error(r(284));
      (t === null || t.ref !== l) && (e.flags |= 4194816);
    }
  }
  function sf(t, e, l, a, n) {
    return Pl(e), l = Vc(
      t,
      e,
      l,
      a,
      void 0,
      n
    ), a = wc(), t !== null && !Lt ? (Kc(t, e, n), el(t, e, n)) : (rt && a && zc(e), e.flags |= 1, It(t, e, l, n), e.child);
  }
  function Ps(t, e, l, a, n, u) {
    return Pl(e), e.updateQueue = null, l = ls(
      e,
      a,
      l,
      n
    ), es(t), a = wc(), t !== null && !Lt ? (Kc(t, e, u), el(t, e, u)) : (rt && a && zc(e), e.flags |= 1, It(t, e, l, u), e.child);
  }
  function td(t, e, l, a, n) {
    if (Pl(e), e.stateNode === null) {
      var u = Ma, c = l.contextType;
      typeof c == "object" && c !== null && (u = Wt(c)), u = new l(a, u), e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = ff, e.stateNode = u, u._reactInternals = e, u = e.stateNode, u.props = a, u.state = e.memoizedState, u.refs = {}, Bc(e), c = l.contextType, u.context = typeof c == "object" && c !== null ? Wt(c) : Ma, u.state = e.memoizedState, c = l.getDerivedStateFromProps, typeof c == "function" && (cf(
        e,
        l,
        c,
        a
      ), u.state = e.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (c = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), c !== u.state && ff.enqueueReplaceState(u, u.state, null), Tn(e, a, u, n), _n(), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = !0;
    } else if (t === null) {
      u = e.stateNode;
      var s = e.memoizedProps, m = ua(l, s);
      u.props = m;
      var _ = u.context, D = l.contextType;
      c = Ma, typeof D == "object" && D !== null && (c = Wt(D));
      var U = l.getDerivedStateFromProps;
      D = typeof U == "function" || typeof u.getSnapshotBeforeUpdate == "function", s = e.pendingProps !== s, D || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (s || _ !== c) && Gs(
        e,
        u,
        a,
        c
      ), El = !1;
      var A = e.memoizedState;
      u.state = A, Tn(e, a, u, n), _n(), _ = e.memoizedState, s || A !== _ || El ? (typeof U == "function" && (cf(
        e,
        l,
        U,
        a
      ), _ = e.memoizedState), (m = El || Ls(
        e,
        l,
        m,
        a,
        A,
        _,
        c
      )) ? (D || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = _), u.props = a, u.state = _, u.context = c, a = m) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = !1);
    } else {
      u = e.stateNode, qc(t, e), c = e.memoizedProps, D = ua(l, c), u.props = D, U = e.pendingProps, A = u.context, _ = l.contextType, m = Ma, typeof _ == "object" && _ !== null && (m = Wt(_)), s = l.getDerivedStateFromProps, (_ = typeof s == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (c !== U || A !== m) && Gs(
        e,
        u,
        a,
        m
      ), El = !1, A = e.memoizedState, u.state = A, Tn(e, a, u, n), _n();
      var z = e.memoizedState;
      c !== U || A !== z || El || t !== null && t.dependencies !== null && Mu(t.dependencies) ? (typeof s == "function" && (cf(
        e,
        l,
        s,
        a
      ), z = e.memoizedState), (D = El || Ls(
        e,
        l,
        D,
        a,
        A,
        z,
        m
      ) || t !== null && t.dependencies !== null && Mu(t.dependencies)) ? (_ || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, z, m), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        a,
        z,
        m
      )), typeof u.componentDidUpdate == "function" && (e.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || c === t.memoizedProps && A === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || c === t.memoizedProps && A === t.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = z), u.props = a, u.state = z, u.context = m, a = D) : (typeof u.componentDidUpdate != "function" || c === t.memoizedProps && A === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || c === t.memoizedProps && A === t.memoizedState || (e.flags |= 1024), a = !1);
    }
    return u = a, Ku(t, e), a = (e.flags & 128) !== 0, u || a ? (u = e.stateNode, l = a && typeof l.getDerivedStateFromError != "function" ? null : u.render(), e.flags |= 1, t !== null && a ? (e.child = aa(
      e,
      t.child,
      null,
      n
    ), e.child = aa(
      e,
      null,
      l,
      n
    )) : It(t, e, l, n), e.memoizedState = u.state, t = e.child) : t = el(
      t,
      e,
      n
    ), t;
  }
  function ed(t, e, l, a) {
    return Wl(), e.flags |= 256, It(t, e, l, a), e.child;
  }
  var df = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function mf(t) {
    return { baseLanes: t, cachePool: Vo() };
  }
  function vf(t, e, l) {
    return t = t !== null ? t.childLanes & ~l : 0, e && (t |= Se), t;
  }
  function ld(t, e, l) {
    var a = e.pendingProps, n = !1, u = (e.flags & 128) !== 0, c;
    if ((c = u) || (c = t !== null && t.memoizedState === null ? !1 : (Ht.current & 2) !== 0), c && (n = !0, e.flags &= -129), c = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (rt) {
        if (n ? Al(e) : zl(), (t = Mt) ? (t = om(
          t,
          Ce
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: gl !== null ? { id: Le, overflow: Ge } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = jo(t), l.return = e, e.child = l, kt = e, Mt = null)) : t = null, t === null) throw bl(e);
        return kf(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      var s = a.children;
      return a = a.fallback, n ? (zl(), n = e.mode, s = Ju(
        { mode: "hidden", children: s },
        n
      ), a = kl(
        a,
        n,
        l,
        null
      ), s.return = e, a.return = e, s.sibling = a, e.child = s, a = e.child, a.memoizedState = mf(l), a.childLanes = vf(
        t,
        c,
        l
      ), e.memoizedState = df, Dn(null, a)) : (Al(e), hf(e, s));
    }
    var m = t.memoizedState;
    if (m !== null && (s = m.dehydrated, s !== null)) {
      if (u)
        e.flags & 256 ? (Al(e), e.flags &= -257, e = yf(
          t,
          e,
          l
        )) : e.memoizedState !== null ? (zl(), e.child = t.child, e.flags |= 128, e = null) : (zl(), s = a.fallback, n = e.mode, a = Ju(
          { mode: "visible", children: a.children },
          n
        ), s = kl(
          s,
          n,
          l,
          null
        ), s.flags |= 2, a.return = e, s.return = e, a.sibling = s, e.child = a, aa(
          e,
          t.child,
          null,
          l
        ), a = e.child, a.memoizedState = mf(l), a.childLanes = vf(
          t,
          c,
          l
        ), e.memoizedState = df, e = Dn(null, a));
      else if (Al(e), kf(s)) {
        if (c = s.nextSibling && s.nextSibling.dataset, c) var _ = c.dgst;
        c = _, a = Error(r(419)), a.stack = "", a.digest = c, yn({ value: a, source: null, stack: null }), e = yf(
          t,
          e,
          l
        );
      } else if (Lt || Ua(t, e, l, !1), c = (l & t.childLanes) !== 0, Lt || c) {
        if (c = At, c !== null && (a = Xr(c, l), a !== 0 && a !== m.retryLane))
          throw m.retryLane = a, Fl(t, a), re(c, t, a), of;
        Ff(s) || li(), e = yf(
          t,
          e,
          l
        );
      } else
        Ff(s) ? (e.flags |= 192, e.child = t.child, e = null) : (t = m.treeContext, Mt = Ue(
          s.nextSibling
        ), kt = e, rt = !0, pl = null, Ce = !1, t !== null && Yo(e, t), e = hf(
          e,
          a.children
        ), e.flags |= 4096);
      return e;
    }
    return n ? (zl(), s = a.fallback, n = e.mode, m = t.child, _ = m.sibling, a = Fe(m, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = m.subtreeFlags & 65011712, _ !== null ? s = Fe(
      _,
      s
    ) : (s = kl(
      s,
      n,
      l,
      null
    ), s.flags |= 2), s.return = e, a.return = e, a.sibling = s, e.child = a, Dn(null, a), a = e.child, s = t.child.memoizedState, s === null ? s = mf(l) : (n = s.cachePool, n !== null ? (m = qt._currentValue, n = n.parent !== m ? { parent: m, pool: m } : n) : n = Vo(), s = {
      baseLanes: s.baseLanes | l,
      cachePool: n
    }), a.memoizedState = s, a.childLanes = vf(
      t,
      c,
      l
    ), e.memoizedState = df, Dn(t.child, a)) : (Al(e), l = t.child, t = l.sibling, l = Fe(l, {
      mode: "visible",
      children: a.children
    }), l.return = e, l.sibling = null, t !== null && (c = e.deletions, c === null ? (e.deletions = [t], e.flags |= 16) : c.push(t)), e.child = l, e.memoizedState = null, l);
  }
  function hf(t, e) {
    return e = Ju(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function Ju(t, e) {
    return t = ye(22, t, null, e), t.lanes = 0, t;
  }
  function yf(t, e, l) {
    return aa(e, t.child, null, l), t = hf(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function ad(t, e, l) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), Nc(t.return, e, l);
  }
  function gf(t, e, l, a, n, u) {
    var c = t.memoizedState;
    c === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: l,
      tailMode: n,
      treeForkCount: u
    } : (c.isBackwards = e, c.rendering = null, c.renderingStartTime = 0, c.last = a, c.tail = l, c.tailMode = n, c.treeForkCount = u);
  }
  function nd(t, e, l) {
    var a = e.pendingProps, n = a.revealOrder, u = a.tail;
    a = a.children;
    var c = Ht.current, s = (c & 2) !== 0;
    if (s ? (c = c & 1 | 2, e.flags |= 128) : c &= 1, x(Ht, c), It(t, e, a, l), a = rt ? hn : 0, !s && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && ad(t, l, e);
        else if (t.tag === 19)
          ad(t, l, e);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            break t;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    switch (n) {
      case "forwards":
        for (l = e.child, n = null; l !== null; )
          t = l.alternate, t !== null && ju(t) === null && (n = l), l = l.sibling;
        l = n, l === null ? (n = e.child, e.child = null) : (n = l.sibling, l.sibling = null), gf(
          e,
          !1,
          n,
          l,
          u,
          a
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, n = e.child, e.child = null; n !== null; ) {
          if (t = n.alternate, t !== null && ju(t) === null) {
            e.child = n;
            break;
          }
          t = n.sibling, n.sibling = l, l = n, n = t;
        }
        gf(
          e,
          !0,
          l,
          null,
          u,
          a
        );
        break;
      case "together":
        gf(
          e,
          !1,
          null,
          null,
          void 0,
          a
        );
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function el(t, e, l) {
    if (t !== null && (e.dependencies = t.dependencies), Dl |= e.lanes, (l & e.childLanes) === 0)
      if (t !== null) {
        if (Ua(
          t,
          e,
          l,
          !1
        ), (l & e.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && e.child !== t.child)
      throw Error(r(153));
    if (e.child !== null) {
      for (t = e.child, l = Fe(t, t.pendingProps), e.child = l, l.return = e; t.sibling !== null; )
        t = t.sibling, l = l.sibling = Fe(t, t.pendingProps), l.return = e;
      l.sibling = null;
    }
    return e.child;
  }
  function pf(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Mu(t)));
  }
  function sh(t, e, l) {
    switch (e.tag) {
      case 3:
        Bt(e, e.stateNode.containerInfo), Sl(e, qt, t.memoizedState.cache), Wl();
        break;
      case 27:
      case 5:
        Pa(e);
        break;
      case 4:
        Bt(e, e.stateNode.containerInfo);
        break;
      case 10:
        Sl(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, Qc(e), null;
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (Al(e), e.flags |= 128, null) : (l & e.child.childLanes) !== 0 ? ld(t, e, l) : (Al(e), t = el(
            t,
            e,
            l
          ), t !== null ? t.sibling : null);
        Al(e);
        break;
      case 19:
        var n = (t.flags & 128) !== 0;
        if (a = (l & e.childLanes) !== 0, a || (Ua(
          t,
          e,
          l,
          !1
        ), a = (l & e.childLanes) !== 0), n) {
          if (a)
            return nd(
              t,
              e,
              l
            );
          e.flags |= 128;
        }
        if (n = e.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), x(Ht, Ht.current), a) break;
        return null;
      case 22:
        return e.lanes = 0, ks(
          t,
          e,
          l,
          e.pendingProps
        );
      case 24:
        Sl(e, qt, t.memoizedState.cache);
    }
    return el(t, e, l);
  }
  function ud(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        Lt = !0;
      else {
        if (!pf(t, l) && (e.flags & 128) === 0)
          return Lt = !1, sh(
            t,
            e,
            l
          );
        Lt = (t.flags & 131072) !== 0;
      }
    else
      Lt = !1, rt && (e.flags & 1048576) !== 0 && qo(e, hn, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var a = e.pendingProps;
          if (t = ea(e.elementType), e.type = t, typeof t == "function")
            _c(t) ? (a = ua(t, a), e.tag = 1, e = td(
              null,
              e,
              t,
              a,
              l
            )) : (e.tag = 0, e = sf(
              null,
              e,
              t,
              a,
              l
            ));
          else {
            if (t != null) {
              var n = t.$$typeof;
              if (n === lt) {
                e.tag = 11, e = Js(
                  null,
                  e,
                  t,
                  a,
                  l
                );
                break t;
              } else if (n === J) {
                e.tag = 14, e = $s(
                  null,
                  e,
                  t,
                  a,
                  l
                );
                break t;
              }
            }
            throw e = Jt(t) || t, Error(r(306, e, ""));
          }
        }
        return e;
      case 0:
        return sf(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 1:
        return a = e.type, n = ua(
          a,
          e.pendingProps
        ), td(
          t,
          e,
          a,
          n,
          l
        );
      case 3:
        t: {
          if (Bt(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(r(387));
          a = e.pendingProps;
          var u = e.memoizedState;
          n = u.element, qc(t, e), Tn(e, a, null, l);
          var c = e.memoizedState;
          if (a = c.cache, Sl(e, qt, a), a !== u.cache && Uc(
            e,
            [qt],
            l,
            !0
          ), _n(), a = c.element, u.isDehydrated)
            if (u = {
              element: a,
              isDehydrated: !1,
              cache: c.cache
            }, e.updateQueue.baseState = u, e.memoizedState = u, e.flags & 256) {
              e = ed(
                t,
                e,
                a,
                l
              );
              break t;
            } else if (a !== n) {
              n = Oe(
                Error(r(424)),
                e
              ), yn(n), e = ed(
                t,
                e,
                a,
                l
              );
              break t;
            } else
              for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, Mt = Ue(t.firstChild), kt = e, rt = !0, pl = null, Ce = !0, l = ko(
                e,
                null,
                a,
                l
              ), e.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Wl(), a === n) {
              e = el(
                t,
                e,
                l
              );
              break t;
            }
            It(t, e, a, l);
          }
          e = e.child;
        }
        return e;
      case 26:
        return Ku(t, e), t === null ? (l = ym(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = l : rt || (l = e.type, t = e.pendingProps, a = ri(
          at.current
        ).createElement(l), a[Ft] = e, a[ae] = t, Pt(a, l, t), wt(a), e.stateNode = a) : e.memoizedState = ym(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return Pa(e), t === null && rt && (a = e.stateNode = mm(
          e.type,
          e.pendingProps,
          at.current
        ), kt = e, Ce = !0, n = Mt, Hl(e.type) ? (Wf = n, Mt = Ue(a.firstChild)) : Mt = n), It(
          t,
          e,
          e.pendingProps.children,
          l
        ), Ku(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && rt && ((n = a = Mt) && (a = Xh(
          a,
          e.type,
          e.pendingProps,
          Ce
        ), a !== null ? (e.stateNode = a, kt = e, Mt = Ue(a.firstChild), Ce = !1, n = !0) : n = !1), n || bl(e)), Pa(e), n = e.type, u = e.pendingProps, c = t !== null ? t.memoizedProps : null, a = u.children, Kf(n, u) ? a = null : c !== null && Kf(n, c) && (e.flags |= 32), e.memoizedState !== null && (n = Vc(
          t,
          e,
          lh,
          null,
          null,
          l
        ), Zn._currentValue = n), Ku(t, e), It(t, e, a, l), e.child;
      case 6:
        return t === null && rt && ((t = l = Mt) && (l = Qh(
          l,
          e.pendingProps,
          Ce
        ), l !== null ? (e.stateNode = l, kt = e, Mt = null, t = !0) : t = !1), t || bl(e)), null;
      case 13:
        return ld(t, e, l);
      case 4:
        return Bt(
          e,
          e.stateNode.containerInfo
        ), a = e.pendingProps, t === null ? e.child = aa(
          e,
          null,
          a,
          l
        ) : It(t, e, a, l), e.child;
      case 11:
        return Js(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 7:
        return It(
          t,
          e,
          e.pendingProps,
          l
        ), e.child;
      case 8:
        return It(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 12:
        return It(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 10:
        return a = e.pendingProps, Sl(e, e.type, a.value), It(t, e, a.children, l), e.child;
      case 9:
        return n = e.type._context, a = e.pendingProps.children, Pl(e), n = Wt(n), a = a(n), e.flags |= 1, It(t, e, a, l), e.child;
      case 14:
        return $s(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 15:
        return Fs(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 19:
        return nd(t, e, l);
      case 31:
        return oh(t, e, l);
      case 22:
        return ks(
          t,
          e,
          l,
          e.pendingProps
        );
      case 24:
        return Pl(e), a = Wt(qt), t === null ? (n = xc(), n === null && (n = At, u = Rc(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= l), n = u), e.memoizedState = { parent: a, cache: n }, Bc(e), Sl(e, qt, n)) : ((t.lanes & l) !== 0 && (qc(t, e), Tn(e, null, null, l), _n()), n = t.memoizedState, u = e.memoizedState, n.parent !== a ? (n = { parent: a, cache: a }, e.memoizedState = n, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = n), Sl(e, qt, a)) : (a = u.cache, Sl(e, qt, a), a !== n.cache && Uc(
          e,
          [qt],
          l,
          !0
        ))), It(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(r(156, e.tag));
  }
  function ll(t) {
    t.flags |= 4;
  }
  function bf(t, e, l, a, n) {
    if ((e = (t.mode & 32) !== 0) && (e = !1), e) {
      if (t.flags |= 16777216, (n & 335544128) === n)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Rd()) t.flags |= 8192;
        else
          throw la = Uu, jc;
    } else t.flags &= -16777217;
  }
  function id(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !Em(e))
      if (Rd()) t.flags |= 8192;
      else
        throw la = Uu, jc;
  }
  function $u(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Yr() : 536870912, t.lanes |= e, Za |= e);
  }
  function Cn(t, e) {
    if (!rt)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var l = null; e !== null; )
            e.alternate !== null && (l = e), e = e.sibling;
          l === null ? t.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = t.tail;
          for (var a = null; l !== null; )
            l.alternate !== null && (a = l), l = l.sibling;
          a === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null;
      }
  }
  function Dt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, l = 0, a = 0;
    if (e)
      for (var n = t.child; n !== null; )
        l |= n.lanes | n.childLanes, a |= n.subtreeFlags & 65011712, a |= n.flags & 65011712, n.return = t, n = n.sibling;
    else
      for (n = t.child; n !== null; )
        l |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = t, n = n.sibling;
    return t.subtreeFlags |= a, t.childLanes = l, e;
  }
  function dh(t, e, l) {
    var a = e.pendingProps;
    switch (Oc(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Dt(e), null;
      case 1:
        return Dt(e), null;
      case 3:
        return l = e.stateNode, a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), Ie(qt), Tt(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (t === null || t.child === null) && (Na(e) ? ll(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Dc())), Dt(e), null;
      case 26:
        var n = e.type, u = e.memoizedState;
        return t === null ? (ll(e), u !== null ? (Dt(e), id(e, u)) : (Dt(e), bf(
          e,
          n,
          null,
          a,
          l
        ))) : u ? u !== t.memoizedState ? (ll(e), Dt(e), id(e, u)) : (Dt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== a && ll(e), Dt(e), bf(
          e,
          n,
          t,
          a,
          l
        )), null;
      case 27:
        if (uu(e), l = at.current, n = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== a && ll(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(r(166));
            return Dt(e), null;
          }
          t = L.current, Na(e) ? Lo(e) : (t = mm(n, a, l), e.stateNode = t, ll(e));
        }
        return Dt(e), null;
      case 5:
        if (uu(e), n = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== a && ll(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(r(166));
            return Dt(e), null;
          }
          if (u = L.current, Na(e))
            Lo(e);
          else {
            var c = ri(
              at.current
            );
            switch (u) {
              case 1:
                u = c.createElementNS(
                  "http://www.w3.org/2000/svg",
                  n
                );
                break;
              case 2:
                u = c.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  n
                );
                break;
              default:
                switch (n) {
                  case "svg":
                    u = c.createElementNS(
                      "http://www.w3.org/2000/svg",
                      n
                    );
                    break;
                  case "math":
                    u = c.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    u = c.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(
                      u.firstChild
                    );
                    break;
                  case "select":
                    u = typeof a.is == "string" ? c.createElement("select", {
                      is: a.is
                    }) : c.createElement("select"), a.multiple ? u.multiple = !0 : a.size && (u.size = a.size);
                    break;
                  default:
                    u = typeof a.is == "string" ? c.createElement(n, { is: a.is }) : c.createElement(n);
                }
            }
            u[Ft] = e, u[ae] = a;
            t: for (c = e.child; c !== null; ) {
              if (c.tag === 5 || c.tag === 6)
                u.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                c.child.return = c, c = c.child;
                continue;
              }
              if (c === e) break t;
              for (; c.sibling === null; ) {
                if (c.return === null || c.return === e)
                  break t;
                c = c.return;
              }
              c.sibling.return = c.return, c = c.sibling;
            }
            e.stateNode = u;
            t: switch (Pt(u, n, a), n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break t;
              case "img":
                a = !0;
                break t;
              default:
                a = !1;
            }
            a && ll(e);
          }
        }
        return Dt(e), bf(
          e,
          e.type,
          t === null ? null : t.memoizedProps,
          e.pendingProps,
          l
        ), null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== a && ll(e);
        else {
          if (typeof a != "string" && e.stateNode === null)
            throw Error(r(166));
          if (t = at.current, Na(e)) {
            if (t = e.stateNode, l = e.memoizedProps, a = null, n = kt, n !== null)
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            t[Ft] = e, t = !!(t.nodeValue === l || a !== null && a.suppressHydrationWarning === !0 || lm(t.nodeValue, l)), t || bl(e, !0);
          } else
            t = ri(t).createTextNode(
              a
            ), t[Ft] = e, e.stateNode = t;
        }
        return Dt(e), null;
      case 31:
        if (l = e.memoizedState, t === null || t.memoizedState !== null) {
          if (a = Na(e), l !== null) {
            if (t === null) {
              if (!a) throw Error(r(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(557));
              t[Ft] = e;
            } else
              Wl(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Dt(e), t = !1;
          } else
            l = Dc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = l), t = !0;
          if (!t)
            return e.flags & 256 ? (pe(e), e) : (pe(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(r(558));
        }
        return Dt(e), null;
      case 13:
        if (a = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (n = Na(e), a !== null && a.dehydrated !== null) {
            if (t === null) {
              if (!n) throw Error(r(318));
              if (n = e.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(r(317));
              n[Ft] = e;
            } else
              Wl(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Dt(e), n = !1;
          } else
            n = Dc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return e.flags & 256 ? (pe(e), e) : (pe(e), null);
        }
        return pe(e), (e.flags & 128) !== 0 ? (e.lanes = l, e) : (l = a !== null, t = t !== null && t.memoizedState !== null, l && (a = e.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== n && (a.flags |= 2048)), l !== t && l && (e.child.flags |= 8192), $u(e, e.updateQueue), Dt(e), null);
      case 4:
        return Tt(), t === null && Xf(e.stateNode.containerInfo), Dt(e), null;
      case 10:
        return Ie(e.type), Dt(e), null;
      case 19:
        if (N(Ht), a = e.memoizedState, a === null) return Dt(e), null;
        if (n = (e.flags & 128) !== 0, u = a.rendering, u === null)
          if (n) Cn(a, !1);
          else {
            if (Ut !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (u = ju(t), u !== null) {
                  for (e.flags |= 128, Cn(a, !1), t = u.updateQueue, e.updateQueue = t, $u(e, t), e.subtreeFlags = 0, t = l, l = e.child; l !== null; )
                    xo(l, t), l = l.sibling;
                  return x(
                    Ht,
                    Ht.current & 1 | 2
                  ), rt && ke(e, a.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            a.tail !== null && de() > Pu && (e.flags |= 128, n = !0, Cn(a, !1), e.lanes = 4194304);
          }
        else {
          if (!n)
            if (t = ju(u), t !== null) {
              if (e.flags |= 128, n = !0, t = t.updateQueue, e.updateQueue = t, $u(e, t), Cn(a, !0), a.tail === null && a.tailMode === "hidden" && !u.alternate && !rt)
                return Dt(e), null;
            } else
              2 * de() - a.renderingStartTime > Pu && l !== 536870912 && (e.flags |= 128, n = !0, Cn(a, !1), e.lanes = 4194304);
          a.isBackwards ? (u.sibling = e.child, e.child = u) : (t = a.last, t !== null ? t.sibling = u : e.child = u, a.last = u);
        }
        return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = de(), t.sibling = null, l = Ht.current, x(
          Ht,
          n ? l & 1 | 2 : l & 1
        ), rt && ke(e, a.treeForkCount), t) : (Dt(e), null);
      case 22:
      case 23:
        return pe(e), Xc(), a = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? (l & 536870912) !== 0 && (e.flags & 128) === 0 && (Dt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Dt(e), l = e.updateQueue, l !== null && $u(e, l.retryQueue), l = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== l && (e.flags |= 2048), t !== null && N(ta), null;
      case 24:
        return l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), Ie(qt), Dt(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, e.tag));
  }
  function mh(t, e) {
    switch (Oc(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return Ie(qt), Tt(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return uu(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (pe(e), e.alternate === null)
            throw Error(r(340));
          Wl();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (pe(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(r(340));
          Wl();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return N(Ht), null;
      case 4:
        return Tt(), null;
      case 10:
        return Ie(e.type), null;
      case 22:
      case 23:
        return pe(e), Xc(), t !== null && N(ta), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return Ie(qt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function cd(t, e) {
    switch (Oc(e), e.tag) {
      case 3:
        Ie(qt), Tt();
        break;
      case 26:
      case 27:
      case 5:
        uu(e);
        break;
      case 4:
        Tt();
        break;
      case 31:
        e.memoizedState !== null && pe(e);
        break;
      case 13:
        pe(e);
        break;
      case 19:
        N(Ht);
        break;
      case 10:
        Ie(e.type);
        break;
      case 22:
      case 23:
        pe(e), Xc(), t !== null && N(ta);
        break;
      case 24:
        Ie(qt);
    }
  }
  function Nn(t, e) {
    try {
      var l = e.updateQueue, a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        l = n;
        do {
          if ((l.tag & t) === t) {
            a = void 0;
            var u = l.create, c = l.inst;
            a = u(), c.destroy = a;
          }
          l = l.next;
        } while (l !== n);
      }
    } catch (s) {
      bt(e, e.return, s);
    }
  }
  function Ol(t, e, l) {
    try {
      var a = e.updateQueue, n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        a = u;
        do {
          if ((a.tag & t) === t) {
            var c = a.inst, s = c.destroy;
            if (s !== void 0) {
              c.destroy = void 0, n = e;
              var m = l, _ = s;
              try {
                _();
              } catch (D) {
                bt(
                  n,
                  m,
                  D
                );
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (D) {
      bt(e, e.return, D);
    }
  }
  function fd(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        Io(e, l);
      } catch (a) {
        bt(t, t.return, a);
      }
    }
  }
  function rd(t, e, l) {
    l.props = ua(
      t.type,
      t.memoizedProps
    ), l.state = t.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (a) {
      bt(t, e, a);
    }
  }
  function Un(t, e) {
    try {
      var l = t.ref;
      if (l !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof l == "function" ? t.refCleanup = l(a) : l.current = a;
      }
    } catch (n) {
      bt(t, e, n);
    }
  }
  function Xe(t, e) {
    var l = t.ref, a = t.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          bt(t, e, n);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (n) {
          bt(t, e, n);
        }
      else l.current = null;
  }
  function od(t) {
    var e = t.type, l = t.memoizedProps, a = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break t;
        case "img":
          l.src ? a.src = l.src : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (n) {
      bt(t, t.return, n);
    }
  }
  function Sf(t, e, l) {
    try {
      var a = t.stateNode;
      jh(a, t.type, l, e), a[ae] = e;
    } catch (n) {
      bt(t, t.return, n);
    }
  }
  function sd(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Hl(t.type) || t.tag === 4;
  }
  function Ef(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || sd(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Hl(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function _f(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, e ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(t, e) : (e = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.appendChild(t), l = l._reactRootContainer, l != null || e.onclick !== null || (e.onclick = Je));
    else if (a !== 4 && (a === 27 && Hl(t.type) && (l = t.stateNode, e = null), t = t.child, t !== null))
      for (_f(t, e, l), t = t.sibling; t !== null; )
        _f(t, e, l), t = t.sibling;
  }
  function Fu(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, e ? l.insertBefore(t, e) : l.appendChild(t);
    else if (a !== 4 && (a === 27 && Hl(t.type) && (l = t.stateNode), t = t.child, t !== null))
      for (Fu(t, e, l), t = t.sibling; t !== null; )
        Fu(t, e, l), t = t.sibling;
  }
  function dd(t) {
    var e = t.stateNode, l = t.memoizedProps;
    try {
      for (var a = t.type, n = e.attributes; n.length; )
        e.removeAttributeNode(n[0]);
      Pt(e, a, l), e[Ft] = t, e[ae] = l;
    } catch (u) {
      bt(t, t.return, u);
    }
  }
  var al = !1, Gt = !1, Tf = !1, md = typeof WeakSet == "function" ? WeakSet : Set, Kt = null;
  function vh(t, e) {
    if (t = t.containerInfo, Vf = yi, t = zo(t), hc(t)) {
      if ("selectionStart" in t)
        var l = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          l = (l = t.ownerDocument) && l.defaultView || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var n = a.anchorOffset, u = a.focusNode;
            a = a.focusOffset;
            try {
              l.nodeType, u.nodeType;
            } catch {
              l = null;
              break t;
            }
            var c = 0, s = -1, m = -1, _ = 0, D = 0, U = t, A = null;
            e: for (; ; ) {
              for (var z; U !== l || n !== 0 && U.nodeType !== 3 || (s = c + n), U !== u || a !== 0 && U.nodeType !== 3 || (m = c + a), U.nodeType === 3 && (c += U.nodeValue.length), (z = U.firstChild) !== null; )
                A = U, U = z;
              for (; ; ) {
                if (U === t) break e;
                if (A === l && ++_ === n && (s = c), A === u && ++D === a && (m = c), (z = U.nextSibling) !== null) break;
                U = A, A = U.parentNode;
              }
              U = z;
            }
            l = s === -1 || m === -1 ? null : { start: s, end: m };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (wf = { focusedElem: t, selectionRange: l }, yi = !1, Kt = e; Kt !== null; )
      if (e = Kt, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null)
        t.return = e, Kt = t;
      else
        for (; Kt !== null; ) {
          switch (e = Kt, u = e.alternate, t = e.flags, e.tag) {
            case 0:
              if ((t & 4) !== 0 && (t = e.updateQueue, t = t !== null ? t.events : null, t !== null))
                for (l = 0; l < t.length; l++)
                  n = t[l], n.ref.impl = n.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && u !== null) {
                t = void 0, l = e, n = u.memoizedProps, u = u.memoizedState, a = l.stateNode;
                try {
                  var G = ua(
                    l.type,
                    n
                  );
                  t = a.getSnapshotBeforeUpdate(
                    G,
                    u
                  ), a.__reactInternalSnapshotBeforeUpdate = t;
                } catch ($) {
                  bt(
                    l,
                    l.return,
                    $
                  );
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (t = e.stateNode.containerInfo, l = t.nodeType, l === 9)
                  $f(t);
                else if (l === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      $f(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(r(163));
          }
          if (t = e.sibling, t !== null) {
            t.return = e.return, Kt = t;
            break;
          }
          Kt = e.return;
        }
  }
  function vd(t, e, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        ul(t, l), a & 4 && Nn(5, l);
        break;
      case 1:
        if (ul(t, l), a & 4)
          if (t = l.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (c) {
              bt(l, l.return, c);
            }
          else {
            var n = ua(
              l.type,
              e.memoizedProps
            );
            e = e.memoizedState;
            try {
              t.componentDidUpdate(
                n,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (c) {
              bt(
                l,
                l.return,
                c
              );
            }
          }
        a & 64 && fd(l), a & 512 && Un(l, l.return);
        break;
      case 3:
        if (ul(t, l), a & 64 && (t = l.updateQueue, t !== null)) {
          if (e = null, l.child !== null)
            switch (l.child.tag) {
              case 27:
              case 5:
                e = l.child.stateNode;
                break;
              case 1:
                e = l.child.stateNode;
            }
          try {
            Io(t, e);
          } catch (c) {
            bt(l, l.return, c);
          }
        }
        break;
      case 27:
        e === null && a & 4 && dd(l);
      case 26:
      case 5:
        ul(t, l), e === null && a & 4 && od(l), a & 512 && Un(l, l.return);
        break;
      case 12:
        ul(t, l);
        break;
      case 31:
        ul(t, l), a & 4 && gd(t, l);
        break;
      case 13:
        ul(t, l), a & 4 && pd(t, l), a & 64 && (t = l.memoizedState, t !== null && (t = t.dehydrated, t !== null && (l = Th.bind(
          null,
          l
        ), Zh(t, l))));
        break;
      case 22:
        if (a = l.memoizedState !== null || al, !a) {
          e = e !== null && e.memoizedState !== null || Gt, n = al;
          var u = Gt;
          al = a, (Gt = e) && !u ? il(
            t,
            l,
            (l.subtreeFlags & 8772) !== 0
          ) : ul(t, l), al = n, Gt = u;
        }
        break;
      case 30:
        break;
      default:
        ul(t, l);
    }
  }
  function hd(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, hd(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && Ii(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Ct = null, ue = !1;
  function nl(t, e, l) {
    for (l = l.child; l !== null; )
      yd(t, e, l), l = l.sibling;
  }
  function yd(t, e, l) {
    if (me && typeof me.onCommitFiberUnmount == "function")
      try {
        me.onCommitFiberUnmount(tn, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        Gt || Xe(l, e), nl(
          t,
          e,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        Gt || Xe(l, e);
        var a = Ct, n = ue;
        Hl(l.type) && (Ct = l.stateNode, ue = !1), nl(
          t,
          e,
          l
        ), Gn(l.stateNode), Ct = a, ue = n;
        break;
      case 5:
        Gt || Xe(l, e);
      case 6:
        if (a = Ct, n = ue, Ct = null, nl(
          t,
          e,
          l
        ), Ct = a, ue = n, Ct !== null)
          if (ue)
            try {
              (Ct.nodeType === 9 ? Ct.body : Ct.nodeName === "HTML" ? Ct.ownerDocument.body : Ct).removeChild(l.stateNode);
            } catch (u) {
              bt(
                l,
                e,
                u
              );
            }
          else
            try {
              Ct.removeChild(l.stateNode);
            } catch (u) {
              bt(
                l,
                e,
                u
              );
            }
        break;
      case 18:
        Ct !== null && (ue ? (t = Ct, fm(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          l.stateNode
        ), Wa(t)) : fm(Ct, l.stateNode));
        break;
      case 4:
        a = Ct, n = ue, Ct = l.stateNode.containerInfo, ue = !0, nl(
          t,
          e,
          l
        ), Ct = a, ue = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Ol(2, l, e), Gt || Ol(4, l, e), nl(
          t,
          e,
          l
        );
        break;
      case 1:
        Gt || (Xe(l, e), a = l.stateNode, typeof a.componentWillUnmount == "function" && rd(
          l,
          e,
          a
        )), nl(
          t,
          e,
          l
        );
        break;
      case 21:
        nl(
          t,
          e,
          l
        );
        break;
      case 22:
        Gt = (a = Gt) || l.memoizedState !== null, nl(
          t,
          e,
          l
        ), Gt = a;
        break;
      default:
        nl(
          t,
          e,
          l
        );
    }
  }
  function gd(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        Wa(t);
      } catch (l) {
        bt(e, e.return, l);
      }
    }
  }
  function pd(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        Wa(t);
      } catch (l) {
        bt(e, e.return, l);
      }
  }
  function hh(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new md()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new md()), e;
      default:
        throw Error(r(435, t.tag));
    }
  }
  function ku(t, e) {
    var l = hh(t);
    e.forEach(function(a) {
      if (!l.has(a)) {
        l.add(a);
        var n = Ah.bind(null, t, a);
        a.then(n, n);
      }
    });
  }
  function ie(t, e) {
    var l = e.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a], u = t, c = e, s = c;
        t: for (; s !== null; ) {
          switch (s.tag) {
            case 27:
              if (Hl(s.type)) {
                Ct = s.stateNode, ue = !1;
                break t;
              }
              break;
            case 5:
              Ct = s.stateNode, ue = !1;
              break t;
            case 3:
            case 4:
              Ct = s.stateNode.containerInfo, ue = !0;
              break t;
          }
          s = s.return;
        }
        if (Ct === null) throw Error(r(160));
        yd(u, c, n), Ct = null, ue = !1, u = n.alternate, u !== null && (u.return = null), n.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        bd(e, t), e = e.sibling;
  }
  var Be = null;
  function bd(t, e) {
    var l = t.alternate, a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ie(e, t), ce(t), a & 4 && (Ol(3, t, t.return), Nn(3, t), Ol(5, t, t.return));
        break;
      case 1:
        ie(e, t), ce(t), a & 512 && (Gt || l === null || Xe(l, l.return)), a & 64 && al && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (l = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
        break;
      case 26:
        var n = Be;
        if (ie(e, t), ce(t), a & 512 && (Gt || l === null || Xe(l, l.return)), a & 4) {
          var u = l !== null ? l.memoizedState : null;
          if (a = t.memoizedState, l === null)
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  a = t.type, l = t.memoizedProps, n = n.ownerDocument || n;
                  e: switch (a) {
                    case "title":
                      u = n.getElementsByTagName("title")[0], (!u || u[an] || u[Ft] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(a), n.head.insertBefore(
                        u,
                        n.querySelector("head > title")
                      )), Pt(u, a, l), u[Ft] = t, wt(u), a = u;
                      break t;
                    case "link":
                      var c = bm(
                        "link",
                        "href",
                        n
                      ).get(a + (l.href || ""));
                      if (c) {
                        for (var s = 0; s < c.length; s++)
                          if (u = c[s], u.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && u.getAttribute("rel") === (l.rel == null ? null : l.rel) && u.getAttribute("title") === (l.title == null ? null : l.title) && u.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                            c.splice(s, 1);
                            break e;
                          }
                      }
                      u = n.createElement(a), Pt(u, a, l), n.head.appendChild(u);
                      break;
                    case "meta":
                      if (c = bm(
                        "meta",
                        "content",
                        n
                      ).get(a + (l.content || ""))) {
                        for (s = 0; s < c.length; s++)
                          if (u = c[s], u.getAttribute("content") === (l.content == null ? null : "" + l.content) && u.getAttribute("name") === (l.name == null ? null : l.name) && u.getAttribute("property") === (l.property == null ? null : l.property) && u.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && u.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                            c.splice(s, 1);
                            break e;
                          }
                      }
                      u = n.createElement(a), Pt(u, a, l), n.head.appendChild(u);
                      break;
                    default:
                      throw Error(r(468, a));
                  }
                  u[Ft] = t, wt(u), a = u;
                }
                t.stateNode = a;
              } else
                Sm(
                  n,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = pm(
                n,
                a,
                t.memoizedProps
              );
          else
            u !== a ? (u === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : u.count--, a === null ? Sm(
              n,
              t.type,
              t.stateNode
            ) : pm(
              n,
              a,
              t.memoizedProps
            )) : a === null && t.stateNode !== null && Sf(
              t,
              t.memoizedProps,
              l.memoizedProps
            );
        }
        break;
      case 27:
        ie(e, t), ce(t), a & 512 && (Gt || l === null || Xe(l, l.return)), l !== null && a & 4 && Sf(
          t,
          t.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (ie(e, t), ce(t), a & 512 && (Gt || l === null || Xe(l, l.return)), t.flags & 32) {
          n = t.stateNode;
          try {
            Sa(n, "");
          } catch (G) {
            bt(t, t.return, G);
          }
        }
        a & 4 && t.stateNode != null && (n = t.memoizedProps, Sf(
          t,
          n,
          l !== null ? l.memoizedProps : n
        )), a & 1024 && (Tf = !0);
        break;
      case 6:
        if (ie(e, t), ce(t), a & 4) {
          if (t.stateNode === null)
            throw Error(r(162));
          a = t.memoizedProps, l = t.stateNode;
          try {
            l.nodeValue = a;
          } catch (G) {
            bt(t, t.return, G);
          }
        }
        break;
      case 3:
        if (di = null, n = Be, Be = oi(e.containerInfo), ie(e, t), Be = n, ce(t), a & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Wa(e.containerInfo);
          } catch (G) {
            bt(t, t.return, G);
          }
        Tf && (Tf = !1, Sd(t));
        break;
      case 4:
        a = Be, Be = oi(
          t.stateNode.containerInfo
        ), ie(e, t), ce(t), Be = a;
        break;
      case 12:
        ie(e, t), ce(t);
        break;
      case 31:
        ie(e, t), ce(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, ku(t, a)));
        break;
      case 13:
        ie(e, t), ce(t), t.child.flags & 8192 && t.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Iu = de()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, ku(t, a)));
        break;
      case 22:
        n = t.memoizedState !== null;
        var m = l !== null && l.memoizedState !== null, _ = al, D = Gt;
        if (al = _ || n, Gt = D || m, ie(e, t), Gt = D, al = _, ce(t), a & 8192)
          t: for (e = t.stateNode, e._visibility = n ? e._visibility & -2 : e._visibility | 1, n && (l === null || m || al || Gt || ia(t)), l = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                m = l = e;
                try {
                  if (u = m.stateNode, n)
                    c = u.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                  else {
                    s = m.stateNode;
                    var U = m.memoizedProps.style, A = U != null && U.hasOwnProperty("display") ? U.display : null;
                    s.style.display = A == null || typeof A == "boolean" ? "" : ("" + A).trim();
                  }
                } catch (G) {
                  bt(m, m.return, G);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                m = e;
                try {
                  m.stateNode.nodeValue = n ? "" : m.memoizedProps;
                } catch (G) {
                  bt(m, m.return, G);
                }
              }
            } else if (e.tag === 18) {
              if (l === null) {
                m = e;
                try {
                  var z = m.stateNode;
                  n ? rm(z, !0) : rm(m.stateNode, !1);
                } catch (G) {
                  bt(m, m.return, G);
                }
              }
            } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              l === e && (l = null), e = e.return;
            }
            l === e && (l = null), e.sibling.return = e.return, e = e.sibling;
          }
        a & 4 && (a = t.updateQueue, a !== null && (l = a.retryQueue, l !== null && (a.retryQueue = null, ku(t, l))));
        break;
      case 19:
        ie(e, t), ce(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, ku(t, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ie(e, t), ce(t);
    }
  }
  function ce(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var l, a = t.return; a !== null; ) {
          if (sd(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(r(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode, u = Ef(t);
            Fu(t, u, n);
            break;
          case 5:
            var c = l.stateNode;
            l.flags & 32 && (Sa(c, ""), l.flags &= -33);
            var s = Ef(t);
            Fu(t, s, c);
            break;
          case 3:
          case 4:
            var m = l.stateNode.containerInfo, _ = Ef(t);
            _f(
              t,
              _,
              m
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (D) {
        bt(t, t.return, D);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Sd(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        Sd(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
      }
  }
  function ul(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        vd(t, e.alternate, e), e = e.sibling;
  }
  function ia(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ol(4, e, e.return), ia(e);
          break;
        case 1:
          Xe(e, e.return);
          var l = e.stateNode;
          typeof l.componentWillUnmount == "function" && rd(
            e,
            e.return,
            l
          ), ia(e);
          break;
        case 27:
          Gn(e.stateNode);
        case 26:
        case 5:
          Xe(e, e.return), ia(e);
          break;
        case 22:
          e.memoizedState === null && ia(e);
          break;
        case 30:
          ia(e);
          break;
        default:
          ia(e);
      }
      t = t.sibling;
    }
  }
  function il(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate, n = t, u = e, c = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          il(
            n,
            u,
            l
          ), Nn(4, u);
          break;
        case 1:
          if (il(
            n,
            u,
            l
          ), a = u, n = a.stateNode, typeof n.componentDidMount == "function")
            try {
              n.componentDidMount();
            } catch (_) {
              bt(a, a.return, _);
            }
          if (a = u, n = a.updateQueue, n !== null) {
            var s = a.stateNode;
            try {
              var m = n.shared.hiddenCallbacks;
              if (m !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < m.length; n++)
                  Wo(m[n], s);
            } catch (_) {
              bt(a, a.return, _);
            }
          }
          l && c & 64 && fd(u), Un(u, u.return);
          break;
        case 27:
          dd(u);
        case 26:
        case 5:
          il(
            n,
            u,
            l
          ), l && a === null && c & 4 && od(u), Un(u, u.return);
          break;
        case 12:
          il(
            n,
            u,
            l
          );
          break;
        case 31:
          il(
            n,
            u,
            l
          ), l && c & 4 && gd(n, u);
          break;
        case 13:
          il(
            n,
            u,
            l
          ), l && c & 4 && pd(n, u);
          break;
        case 22:
          u.memoizedState === null && il(
            n,
            u,
            l
          ), Un(u, u.return);
          break;
        case 30:
          break;
        default:
          il(
            n,
            u,
            l
          );
      }
      e = e.sibling;
    }
  }
  function Af(t, e) {
    var l = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== l && (t != null && t.refCount++, l != null && gn(l));
  }
  function zf(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && gn(t));
  }
  function qe(t, e, l, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Ed(
          t,
          e,
          l,
          a
        ), e = e.sibling;
  }
  function Ed(t, e, l, a) {
    var n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        qe(
          t,
          e,
          l,
          a
        ), n & 2048 && Nn(9, e);
        break;
      case 1:
        qe(
          t,
          e,
          l,
          a
        );
        break;
      case 3:
        qe(
          t,
          e,
          l,
          a
        ), n & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && gn(t)));
        break;
      case 12:
        if (n & 2048) {
          qe(
            t,
            e,
            l,
            a
          ), t = e.stateNode;
          try {
            var u = e.memoizedProps, c = u.id, s = u.onPostCommit;
            typeof s == "function" && s(
              c,
              e.alternate === null ? "mount" : "update",
              t.passiveEffectDuration,
              -0
            );
          } catch (m) {
            bt(e, e.return, m);
          }
        } else
          qe(
            t,
            e,
            l,
            a
          );
        break;
      case 31:
        qe(
          t,
          e,
          l,
          a
        );
        break;
      case 13:
        qe(
          t,
          e,
          l,
          a
        );
        break;
      case 23:
        break;
      case 22:
        u = e.stateNode, c = e.alternate, e.memoizedState !== null ? u._visibility & 2 ? qe(
          t,
          e,
          l,
          a
        ) : Rn(t, e) : u._visibility & 2 ? qe(
          t,
          e,
          l,
          a
        ) : (u._visibility |= 2, Ga(
          t,
          e,
          l,
          a,
          (e.subtreeFlags & 10256) !== 0 || !1
        )), n & 2048 && Af(c, e);
        break;
      case 24:
        qe(
          t,
          e,
          l,
          a
        ), n & 2048 && zf(e.alternate, e);
        break;
      default:
        qe(
          t,
          e,
          l,
          a
        );
    }
  }
  function Ga(t, e, l, a, n) {
    for (n = n && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var u = t, c = e, s = l, m = a, _ = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          Ga(
            u,
            c,
            s,
            m,
            n
          ), Nn(8, c);
          break;
        case 23:
          break;
        case 22:
          var D = c.stateNode;
          c.memoizedState !== null ? D._visibility & 2 ? Ga(
            u,
            c,
            s,
            m,
            n
          ) : Rn(
            u,
            c
          ) : (D._visibility |= 2, Ga(
            u,
            c,
            s,
            m,
            n
          )), n && _ & 2048 && Af(
            c.alternate,
            c
          );
          break;
        case 24:
          Ga(
            u,
            c,
            s,
            m,
            n
          ), n && _ & 2048 && zf(c.alternate, c);
          break;
        default:
          Ga(
            u,
            c,
            s,
            m,
            n
          );
      }
      e = e.sibling;
    }
  }
  function Rn(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t, a = e, n = a.flags;
        switch (a.tag) {
          case 22:
            Rn(l, a), n & 2048 && Af(
              a.alternate,
              a
            );
            break;
          case 24:
            Rn(l, a), n & 2048 && zf(a.alternate, a);
            break;
          default:
            Rn(l, a);
        }
        e = e.sibling;
      }
  }
  var Hn = 8192;
  function Xa(t, e, l) {
    if (t.subtreeFlags & Hn)
      for (t = t.child; t !== null; )
        _d(
          t,
          e,
          l
        ), t = t.sibling;
  }
  function _d(t, e, l) {
    switch (t.tag) {
      case 26:
        Xa(
          t,
          e,
          l
        ), t.flags & Hn && t.memoizedState !== null && ey(
          l,
          Be,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        Xa(
          t,
          e,
          l
        );
        break;
      case 3:
      case 4:
        var a = Be;
        Be = oi(t.stateNode.containerInfo), Xa(
          t,
          e,
          l
        ), Be = a;
        break;
      case 22:
        t.memoizedState === null && (a = t.alternate, a !== null && a.memoizedState !== null ? (a = Hn, Hn = 16777216, Xa(
          t,
          e,
          l
        ), Hn = a) : Xa(
          t,
          e,
          l
        ));
        break;
      default:
        Xa(
          t,
          e,
          l
        );
    }
  }
  function Td(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function xn(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          Kt = a, zd(
            a,
            t
          );
        }
      Td(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Ad(t), t = t.sibling;
  }
  function Ad(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        xn(t), t.flags & 2048 && Ol(9, t, t.return);
        break;
      case 3:
        xn(t);
        break;
      case 12:
        xn(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, Wu(t)) : xn(t);
        break;
      default:
        xn(t);
    }
  }
  function Wu(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          Kt = a, zd(
            a,
            t
          );
        }
      Td(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          Ol(8, e, e.return), Wu(e);
          break;
        case 22:
          l = e.stateNode, l._visibility & 2 && (l._visibility &= -3, Wu(e));
          break;
        default:
          Wu(e);
      }
      t = t.sibling;
    }
  }
  function zd(t, e) {
    for (; Kt !== null; ) {
      var l = Kt;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Ol(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          gn(l.memoizedState.cache);
      }
      if (a = l.child, a !== null) a.return = l, Kt = a;
      else
        t: for (l = t; Kt !== null; ) {
          a = Kt;
          var n = a.sibling, u = a.return;
          if (hd(a), a === l) {
            Kt = null;
            break t;
          }
          if (n !== null) {
            n.return = u, Kt = n;
            break t;
          }
          Kt = u;
        }
    }
  }
  var yh = {
    getCacheForType: function(t) {
      var e = Wt(qt), l = e.data.get(t);
      return l === void 0 && (l = t(), e.data.set(t, l)), l;
    },
    cacheSignal: function() {
      return Wt(qt).controller.signal;
    }
  }, gh = typeof WeakMap == "function" ? WeakMap : Map, yt = 0, At = null, nt = null, it = 0, pt = 0, be = null, Ml = !1, Qa = !1, Of = !1, cl = 0, Ut = 0, Dl = 0, ca = 0, Mf = 0, Se = 0, Za = 0, jn = null, fe = null, Df = !1, Iu = 0, Od = 0, Pu = 1 / 0, ti = null, Cl = null, Zt = 0, Nl = null, Va = null, fl = 0, Cf = 0, Nf = null, Md = null, Bn = 0, Uf = null;
  function Ee() {
    return (yt & 2) !== 0 && it !== 0 ? it & -it : M.T !== null ? qf() : Qr();
  }
  function Dd() {
    if (Se === 0)
      if ((it & 536870912) === 0 || rt) {
        var t = fu;
        fu <<= 1, (fu & 3932160) === 0 && (fu = 262144), Se = t;
      } else Se = 536870912;
    return t = ge.current, t !== null && (t.flags |= 32), Se;
  }
  function re(t, e, l) {
    (t === At && (pt === 2 || pt === 9) || t.cancelPendingCommit !== null) && (wa(t, 0), Ul(
      t,
      it,
      Se,
      !1
    )), ln(t, l), ((yt & 2) === 0 || t !== At) && (t === At && ((yt & 2) === 0 && (ca |= l), Ut === 4 && Ul(
      t,
      it,
      Se,
      !1
    )), Qe(t));
  }
  function Cd(t, e, l) {
    if ((yt & 6) !== 0) throw Error(r(327));
    var a = !l && (e & 127) === 0 && (e & t.expiredLanes) === 0 || en(t, e), n = a ? Sh(t, e) : Hf(t, e, !0), u = a;
    do {
      if (n === 0) {
        Qa && !a && Ul(t, e, 0, !1);
        break;
      } else {
        if (l = t.current.alternate, u && !ph(l)) {
          n = Hf(t, e, !1), u = !1;
          continue;
        }
        if (n === 2) {
          if (u = e, t.errorRecoveryDisabledLanes & u)
            var c = 0;
          else
            c = t.pendingLanes & -536870913, c = c !== 0 ? c : c & 536870912 ? 536870912 : 0;
          if (c !== 0) {
            e = c;
            t: {
              var s = t;
              n = jn;
              var m = s.current.memoizedState.isDehydrated;
              if (m && (wa(s, c).flags |= 256), c = Hf(
                s,
                c,
                !1
              ), c !== 2) {
                if (Of && !m) {
                  s.errorRecoveryDisabledLanes |= u, ca |= u, n = 4;
                  break t;
                }
                u = fe, fe = n, u !== null && (fe === null ? fe = u : fe.push.apply(
                  fe,
                  u
                ));
              }
              n = c;
            }
            if (u = !1, n !== 2) continue;
          }
        }
        if (n === 1) {
          wa(t, 0), Ul(t, e, 0, !0);
          break;
        }
        t: {
          switch (a = t, u = n, u) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              Ul(
                a,
                e,
                Se,
                !Ml
              );
              break t;
            case 2:
              fe = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((e & 62914560) === e && (n = Iu + 300 - de(), 10 < n)) {
            if (Ul(
              a,
              e,
              Se,
              !Ml
            ), ou(a, 0, !0) !== 0) break t;
            fl = e, a.timeoutHandle = im(
              Nd.bind(
                null,
                a,
                l,
                fe,
                ti,
                Df,
                e,
                Se,
                ca,
                Za,
                Ml,
                u,
                "Throttled",
                -0,
                0
              ),
              n
            );
            break t;
          }
          Nd(
            a,
            l,
            fe,
            ti,
            Df,
            e,
            Se,
            ca,
            Za,
            Ml,
            u,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Qe(t);
  }
  function Nd(t, e, l, a, n, u, c, s, m, _, D, U, A, z) {
    if (t.timeoutHandle = -1, U = e.subtreeFlags, U & 8192 || (U & 16785408) === 16785408) {
      U = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Je
      }, _d(
        e,
        u,
        U
      );
      var G = (u & 62914560) === u ? Iu - de() : (u & 4194048) === u ? Od - de() : 0;
      if (G = ly(
        U,
        G
      ), G !== null) {
        fl = u, t.cancelPendingCommit = G(
          Yd.bind(
            null,
            t,
            e,
            u,
            l,
            a,
            n,
            c,
            s,
            m,
            D,
            U,
            null,
            A,
            z
          )
        ), Ul(t, u, c, !_);
        return;
      }
    }
    Yd(
      t,
      e,
      u,
      l,
      a,
      n,
      c,
      s,
      m
    );
  }
  function ph(t) {
    for (var e = t; ; ) {
      var l = e.tag;
      if ((l === 0 || l === 11 || l === 15) && e.flags & 16384 && (l = e.updateQueue, l !== null && (l = l.stores, l !== null)))
        for (var a = 0; a < l.length; a++) {
          var n = l[a], u = n.getSnapshot;
          n = n.value;
          try {
            if (!he(u(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (l = e.child, e.subtreeFlags & 16384 && l !== null)
        l.return = e, e = l;
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    }
    return !0;
  }
  function Ul(t, e, l, a) {
    e &= ~Mf, e &= ~ca, t.suspendedLanes |= e, t.pingedLanes &= ~e, a && (t.warmLanes |= e), a = t.expirationTimes;
    for (var n = e; 0 < n; ) {
      var u = 31 - ve(n), c = 1 << u;
      a[u] = -1, n &= ~c;
    }
    l !== 0 && Lr(t, l, e);
  }
  function ei() {
    return (yt & 6) === 0 ? (qn(0), !1) : !0;
  }
  function Rf() {
    if (nt !== null) {
      if (pt === 0)
        var t = nt.return;
      else
        t = nt, We = Il = null, Jc(t), ja = null, bn = 0, t = nt;
      for (; t !== null; )
        cd(t.alternate, t), t = t.return;
      nt = null;
    }
  }
  function wa(t, e) {
    var l = t.timeoutHandle;
    l !== -1 && (t.timeoutHandle = -1, Yh(l)), l = t.cancelPendingCommit, l !== null && (t.cancelPendingCommit = null, l()), fl = 0, Rf(), At = t, nt = l = Fe(t.current, null), it = e, pt = 0, be = null, Ml = !1, Qa = en(t, e), Of = !1, Za = Se = Mf = ca = Dl = Ut = 0, fe = jn = null, Df = !1, (e & 8) !== 0 && (e |= e & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var n = 31 - ve(a), u = 1 << n;
        e |= t[n], a &= ~u;
      }
    return cl = e, _u(), l;
  }
  function Ud(t, e) {
    tt = null, M.H = Mn, e === xa || e === Nu ? (e = Jo(), pt = 3) : e === jc ? (e = Jo(), pt = 4) : pt = e === of ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, be = e, nt === null && (Ut = 1, Vu(
      t,
      Oe(e, t.current)
    ));
  }
  function Rd() {
    var t = ge.current;
    return t === null ? !0 : (it & 4194048) === it ? Ne === null : (it & 62914560) === it || (it & 536870912) !== 0 ? t === Ne : !1;
  }
  function Hd() {
    var t = M.H;
    return M.H = Mn, t === null ? Mn : t;
  }
  function xd() {
    var t = M.A;
    return M.A = yh, t;
  }
  function li() {
    Ut = 4, Ml || (it & 4194048) !== it && ge.current !== null || (Qa = !0), (Dl & 134217727) === 0 && (ca & 134217727) === 0 || At === null || Ul(
      At,
      it,
      Se,
      !1
    );
  }
  function Hf(t, e, l) {
    var a = yt;
    yt |= 2;
    var n = Hd(), u = xd();
    (At !== t || it !== e) && (ti = null, wa(t, e)), e = !1;
    var c = Ut;
    t: do
      try {
        if (pt !== 0 && nt !== null) {
          var s = nt, m = be;
          switch (pt) {
            case 8:
              Rf(), c = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              ge.current === null && (e = !0);
              var _ = pt;
              if (pt = 0, be = null, Ka(t, s, m, _), l && Qa) {
                c = 0;
                break t;
              }
              break;
            default:
              _ = pt, pt = 0, be = null, Ka(t, s, m, _);
          }
        }
        bh(), c = Ut;
        break;
      } catch (D) {
        Ud(t, D);
      }
    while (!0);
    return e && t.shellSuspendCounter++, We = Il = null, yt = a, M.H = n, M.A = u, nt === null && (At = null, it = 0, _u()), c;
  }
  function bh() {
    for (; nt !== null; ) jd(nt);
  }
  function Sh(t, e) {
    var l = yt;
    yt |= 2;
    var a = Hd(), n = xd();
    At !== t || it !== e ? (ti = null, Pu = de() + 500, wa(t, e)) : Qa = en(
      t,
      e
    );
    t: do
      try {
        if (pt !== 0 && nt !== null) {
          e = nt;
          var u = be;
          e: switch (pt) {
            case 1:
              pt = 0, be = null, Ka(t, e, u, 1);
              break;
            case 2:
            case 9:
              if (wo(u)) {
                pt = 0, be = null, Bd(e);
                break;
              }
              e = function() {
                pt !== 2 && pt !== 9 || At !== t || (pt = 7), Qe(t);
              }, u.then(e, e);
              break t;
            case 3:
              pt = 7;
              break t;
            case 4:
              pt = 5;
              break t;
            case 7:
              wo(u) ? (pt = 0, be = null, Bd(e)) : (pt = 0, be = null, Ka(t, e, u, 7));
              break;
            case 5:
              var c = null;
              switch (nt.tag) {
                case 26:
                  c = nt.memoizedState;
                case 5:
                case 27:
                  var s = nt;
                  if (c ? Em(c) : s.stateNode.complete) {
                    pt = 0, be = null;
                    var m = s.sibling;
                    if (m !== null) nt = m;
                    else {
                      var _ = s.return;
                      _ !== null ? (nt = _, ai(_)) : nt = null;
                    }
                    break e;
                  }
              }
              pt = 0, be = null, Ka(t, e, u, 5);
              break;
            case 6:
              pt = 0, be = null, Ka(t, e, u, 6);
              break;
            case 8:
              Rf(), Ut = 6;
              break t;
            default:
              throw Error(r(462));
          }
        }
        Eh();
        break;
      } catch (D) {
        Ud(t, D);
      }
    while (!0);
    return We = Il = null, M.H = a, M.A = n, yt = l, nt !== null ? 0 : (At = null, it = 0, _u(), Ut);
  }
  function Eh() {
    for (; nt !== null && !Vv(); )
      jd(nt);
  }
  function jd(t) {
    var e = ud(t.alternate, t, cl);
    t.memoizedProps = t.pendingProps, e === null ? ai(t) : nt = e;
  }
  function Bd(t) {
    var e = t, l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Ps(
          l,
          e,
          e.pendingProps,
          e.type,
          void 0,
          it
        );
        break;
      case 11:
        e = Ps(
          l,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          it
        );
        break;
      case 5:
        Jc(e);
      default:
        cd(l, e), e = nt = xo(e, cl), e = ud(l, e, cl);
    }
    t.memoizedProps = t.pendingProps, e === null ? ai(t) : nt = e;
  }
  function Ka(t, e, l, a) {
    We = Il = null, Jc(e), ja = null, bn = 0;
    var n = e.return;
    try {
      if (rh(
        t,
        n,
        e,
        l,
        it
      )) {
        Ut = 1, Vu(
          t,
          Oe(l, t.current)
        ), nt = null;
        return;
      }
    } catch (u) {
      if (n !== null) throw nt = n, u;
      Ut = 1, Vu(
        t,
        Oe(l, t.current)
      ), nt = null;
      return;
    }
    e.flags & 32768 ? (rt || a === 1 ? t = !0 : Qa || (it & 536870912) !== 0 ? t = !1 : (Ml = t = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = ge.current, a !== null && a.tag === 13 && (a.flags |= 16384))), qd(e, t)) : ai(e);
  }
  function ai(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        qd(
          e,
          Ml
        );
        return;
      }
      t = e.return;
      var l = dh(
        e.alternate,
        e,
        cl
      );
      if (l !== null) {
        nt = l;
        return;
      }
      if (e = e.sibling, e !== null) {
        nt = e;
        return;
      }
      nt = e = t;
    } while (e !== null);
    Ut === 0 && (Ut = 5);
  }
  function qd(t, e) {
    do {
      var l = mh(t.alternate, t);
      if (l !== null) {
        l.flags &= 32767, nt = l;
        return;
      }
      if (l = t.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !e && (t = t.sibling, t !== null)) {
        nt = t;
        return;
      }
      nt = t = l;
    } while (t !== null);
    Ut = 6, nt = null;
  }
  function Yd(t, e, l, a, n, u, c, s, m) {
    t.cancelPendingCommit = null;
    do
      ni();
    while (Zt !== 0);
    if ((yt & 6) !== 0) throw Error(r(327));
    if (e !== null) {
      if (e === t.current) throw Error(r(177));
      if (u = e.lanes | e.childLanes, u |= Sc, t0(
        t,
        l,
        u,
        c,
        s,
        m
      ), t === At && (nt = At = null, it = 0), Va = e, Nl = t, fl = l, Cf = u, Nf = n, Md = a, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, zh(iu, function() {
        return Zd(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), a = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || a) {
        a = M.T, M.T = null, n = Y.p, Y.p = 2, c = yt, yt |= 4;
        try {
          vh(t, e, l);
        } finally {
          yt = c, Y.p = n, M.T = a;
        }
      }
      Zt = 1, Ld(), Gd(), Xd();
    }
  }
  function Ld() {
    if (Zt === 1) {
      Zt = 0;
      var t = Nl, e = Va, l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        l = M.T, M.T = null;
        var a = Y.p;
        Y.p = 2;
        var n = yt;
        yt |= 4;
        try {
          bd(e, t);
          var u = wf, c = zo(t.containerInfo), s = u.focusedElem, m = u.selectionRange;
          if (c !== s && s && s.ownerDocument && Ao(
            s.ownerDocument.documentElement,
            s
          )) {
            if (m !== null && hc(s)) {
              var _ = m.start, D = m.end;
              if (D === void 0 && (D = _), "selectionStart" in s)
                s.selectionStart = _, s.selectionEnd = Math.min(
                  D,
                  s.value.length
                );
              else {
                var U = s.ownerDocument || document, A = U && U.defaultView || window;
                if (A.getSelection) {
                  var z = A.getSelection(), G = s.textContent.length, $ = Math.min(m.start, G), _t = m.end === void 0 ? $ : Math.min(m.end, G);
                  !z.extend && $ > _t && (c = _t, _t = $, $ = c);
                  var b = To(
                    s,
                    $
                  ), y = To(
                    s,
                    _t
                  );
                  if (b && y && (z.rangeCount !== 1 || z.anchorNode !== b.node || z.anchorOffset !== b.offset || z.focusNode !== y.node || z.focusOffset !== y.offset)) {
                    var E = U.createRange();
                    E.setStart(b.node, b.offset), z.removeAllRanges(), $ > _t ? (z.addRange(E), z.extend(y.node, y.offset)) : (E.setEnd(y.node, y.offset), z.addRange(E));
                  }
                }
              }
            }
            for (U = [], z = s; z = z.parentNode; )
              z.nodeType === 1 && U.push({
                element: z,
                left: z.scrollLeft,
                top: z.scrollTop
              });
            for (typeof s.focus == "function" && s.focus(), s = 0; s < U.length; s++) {
              var C = U[s];
              C.element.scrollLeft = C.left, C.element.scrollTop = C.top;
            }
          }
          yi = !!Vf, wf = Vf = null;
        } finally {
          yt = n, Y.p = a, M.T = l;
        }
      }
      t.current = e, Zt = 2;
    }
  }
  function Gd() {
    if (Zt === 2) {
      Zt = 0;
      var t = Nl, e = Va, l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        l = M.T, M.T = null;
        var a = Y.p;
        Y.p = 2;
        var n = yt;
        yt |= 4;
        try {
          vd(t, e.alternate, e);
        } finally {
          yt = n, Y.p = a, M.T = l;
        }
      }
      Zt = 3;
    }
  }
  function Xd() {
    if (Zt === 4 || Zt === 3) {
      Zt = 0, wv();
      var t = Nl, e = Va, l = fl, a = Md;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? Zt = 5 : (Zt = 0, Va = Nl = null, Qd(t, t.pendingLanes));
      var n = t.pendingLanes;
      if (n === 0 && (Cl = null), ki(l), e = e.stateNode, me && typeof me.onCommitFiberRoot == "function")
        try {
          me.onCommitFiberRoot(
            tn,
            e,
            void 0,
            (e.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        e = M.T, n = Y.p, Y.p = 2, M.T = null;
        try {
          for (var u = t.onRecoverableError, c = 0; c < a.length; c++) {
            var s = a[c];
            u(s.value, {
              componentStack: s.stack
            });
          }
        } finally {
          M.T = e, Y.p = n;
        }
      }
      (fl & 3) !== 0 && ni(), Qe(t), n = t.pendingLanes, (l & 261930) !== 0 && (n & 42) !== 0 ? t === Uf ? Bn++ : (Bn = 0, Uf = t) : Bn = 0, qn(0);
    }
  }
  function Qd(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, gn(e)));
  }
  function ni() {
    return Ld(), Gd(), Xd(), Zd();
  }
  function Zd() {
    if (Zt !== 5) return !1;
    var t = Nl, e = Cf;
    Cf = 0;
    var l = ki(fl), a = M.T, n = Y.p;
    try {
      Y.p = 32 > l ? 32 : l, M.T = null, l = Nf, Nf = null;
      var u = Nl, c = fl;
      if (Zt = 0, Va = Nl = null, fl = 0, (yt & 6) !== 0) throw Error(r(331));
      var s = yt;
      if (yt |= 4, Ad(u.current), Ed(
        u,
        u.current,
        c,
        l
      ), yt = s, qn(0, !1), me && typeof me.onPostCommitFiberRoot == "function")
        try {
          me.onPostCommitFiberRoot(tn, u);
        } catch {
        }
      return !0;
    } finally {
      Y.p = n, M.T = a, Qd(t, e);
    }
  }
  function Vd(t, e, l) {
    e = Oe(l, e), e = rf(t.stateNode, e, 2), t = Tl(t, e, 2), t !== null && (ln(t, 2), Qe(t));
  }
  function bt(t, e, l) {
    if (t.tag === 3)
      Vd(t, t, l);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          Vd(
            e,
            t,
            l
          );
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Cl === null || !Cl.has(a))) {
            t = Oe(l, t), l = ws(2), a = Tl(e, l, 2), a !== null && (Ks(
              l,
              a,
              e,
              t
            ), ln(a, 2), Qe(a));
            break;
          }
        }
        e = e.return;
      }
  }
  function xf(t, e, l) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new gh();
      var n = /* @__PURE__ */ new Set();
      a.set(e, n);
    } else
      n = a.get(e), n === void 0 && (n = /* @__PURE__ */ new Set(), a.set(e, n));
    n.has(l) || (Of = !0, n.add(l), t = _h.bind(null, t, e, l), e.then(t, t));
  }
  function _h(t, e, l) {
    var a = t.pingCache;
    a !== null && a.delete(e), t.pingedLanes |= t.suspendedLanes & l, t.warmLanes &= ~l, At === t && (it & l) === l && (Ut === 4 || Ut === 3 && (it & 62914560) === it && 300 > de() - Iu ? (yt & 2) === 0 && wa(t, 0) : Mf |= l, Za === it && (Za = 0)), Qe(t);
  }
  function wd(t, e) {
    e === 0 && (e = Yr()), t = Fl(t, e), t !== null && (ln(t, e), Qe(t));
  }
  function Th(t) {
    var e = t.memoizedState, l = 0;
    e !== null && (l = e.retryLane), wd(t, l);
  }
  function Ah(t, e) {
    var l = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var a = t.stateNode, n = t.memoizedState;
        n !== null && (l = n.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    a !== null && a.delete(e), wd(t, l);
  }
  function zh(t, e) {
    return Ki(t, e);
  }
  var ui = null, Ja = null, jf = !1, ii = !1, Bf = !1, Rl = 0;
  function Qe(t) {
    t !== Ja && t.next === null && (Ja === null ? ui = Ja = t : Ja = Ja.next = t), ii = !0, jf || (jf = !0, Mh());
  }
  function qn(t, e) {
    if (!Bf && ii) {
      Bf = !0;
      do
        for (var l = !1, a = ui; a !== null; ) {
          if (t !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var c = a.suspendedLanes, s = a.pingedLanes;
              u = (1 << 31 - ve(42 | t) + 1) - 1, u &= n & ~(c & ~s), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (l = !0, Fd(a, u));
          } else
            u = it, u = ou(
              a,
              a === At ? u : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (u & 3) === 0 || en(a, u) || (l = !0, Fd(a, u));
          a = a.next;
        }
      while (l);
      Bf = !1;
    }
  }
  function Oh() {
    Kd();
  }
  function Kd() {
    ii = jf = !1;
    var t = 0;
    Rl !== 0 && qh() && (t = Rl);
    for (var e = de(), l = null, a = ui; a !== null; ) {
      var n = a.next, u = Jd(a, e);
      u === 0 ? (a.next = null, l === null ? ui = n : l.next = n, n === null && (Ja = l)) : (l = a, (t !== 0 || (u & 3) !== 0) && (ii = !0)), a = n;
    }
    Zt !== 0 && Zt !== 5 || qn(t), Rl !== 0 && (Rl = 0);
  }
  function Jd(t, e) {
    for (var l = t.suspendedLanes, a = t.pingedLanes, n = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
      var c = 31 - ve(u), s = 1 << c, m = n[c];
      m === -1 ? ((s & l) === 0 || (s & a) !== 0) && (n[c] = Pv(s, e)) : m <= e && (t.expiredLanes |= s), u &= ~s;
    }
    if (e = At, l = it, l = ou(
      t,
      t === e ? l : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a = t.callbackNode, l === 0 || t === e && (pt === 2 || pt === 9) || t.cancelPendingCommit !== null)
      return a !== null && a !== null && Ji(a), t.callbackNode = null, t.callbackPriority = 0;
    if ((l & 3) === 0 || en(t, l)) {
      if (e = l & -l, e === t.callbackPriority) return e;
      switch (a !== null && Ji(a), ki(l)) {
        case 2:
        case 8:
          l = Br;
          break;
        case 32:
          l = iu;
          break;
        case 268435456:
          l = qr;
          break;
        default:
          l = iu;
      }
      return a = $d.bind(null, t), l = Ki(l, a), t.callbackPriority = e, t.callbackNode = l, e;
    }
    return a !== null && a !== null && Ji(a), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function $d(t, e) {
    if (Zt !== 0 && Zt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var l = t.callbackNode;
    if (ni() && t.callbackNode !== l)
      return null;
    var a = it;
    return a = ou(
      t,
      t === At ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a === 0 ? null : (Cd(t, a, e), Jd(t, de()), t.callbackNode != null && t.callbackNode === l ? $d.bind(null, t) : null);
  }
  function Fd(t, e) {
    if (ni()) return null;
    Cd(t, e, !0);
  }
  function Mh() {
    Lh(function() {
      (yt & 6) !== 0 ? Ki(
        jr,
        Oh
      ) : Kd();
    });
  }
  function qf() {
    if (Rl === 0) {
      var t = Ra;
      t === 0 && (t = cu, cu <<= 1, (cu & 261888) === 0 && (cu = 256)), Rl = t;
    }
    return Rl;
  }
  function kd(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : vu("" + t);
  }
  function Wd(t, e) {
    var l = e.ownerDocument.createElement("input");
    return l.name = e.name, l.value = e.value, t.id && l.setAttribute("form", t.id), e.parentNode.insertBefore(l, e), t = new FormData(t), l.parentNode.removeChild(l), t;
  }
  function Dh(t, e, l, a, n) {
    if (e === "submit" && l && l.stateNode === n) {
      var u = kd(
        (n[ae] || null).action
      ), c = a.submitter;
      c && (e = (e = c[ae] || null) ? kd(e.formAction) : c.getAttribute("formAction"), e !== null && (u = e, c = null));
      var s = new pu(
        "action",
        "action",
        null,
        a,
        n
      );
      t.push({
        event: s,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (Rl !== 0) {
                  var m = c ? Wd(n, c) : new FormData(n);
                  lf(
                    l,
                    {
                      pending: !0,
                      data: m,
                      method: n.method,
                      action: u
                    },
                    null,
                    m
                  );
                }
              } else
                typeof u == "function" && (s.preventDefault(), m = c ? Wd(n, c) : new FormData(n), lf(
                  l,
                  {
                    pending: !0,
                    data: m,
                    method: n.method,
                    action: u
                  },
                  u,
                  m
                ));
            },
            currentTarget: n
          }
        ]
      });
    }
  }
  for (var Yf = 0; Yf < bc.length; Yf++) {
    var Lf = bc[Yf], Ch = Lf.toLowerCase(), Nh = Lf[0].toUpperCase() + Lf.slice(1);
    je(
      Ch,
      "on" + Nh
    );
  }
  je(Do, "onAnimationEnd"), je(Co, "onAnimationIteration"), je(No, "onAnimationStart"), je("dblclick", "onDoubleClick"), je("focusin", "onFocus"), je("focusout", "onBlur"), je(K0, "onTransitionRun"), je(J0, "onTransitionStart"), je($0, "onTransitionCancel"), je(Uo, "onTransitionEnd"), pa("onMouseEnter", ["mouseout", "mouseover"]), pa("onMouseLeave", ["mouseout", "mouseover"]), pa("onPointerEnter", ["pointerout", "pointerover"]), pa("onPointerLeave", ["pointerout", "pointerover"]), wl(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), wl(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), wl("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), wl(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), wl(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), wl(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Yn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Uh = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Yn)
  );
  function Id(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var a = t[l], n = a.event;
      a = a.listeners;
      t: {
        var u = void 0;
        if (e)
          for (var c = a.length - 1; 0 <= c; c--) {
            var s = a[c], m = s.instance, _ = s.currentTarget;
            if (s = s.listener, m !== u && n.isPropagationStopped())
              break t;
            u = s, n.currentTarget = _;
            try {
              u(n);
            } catch (D) {
              Eu(D);
            }
            n.currentTarget = null, u = m;
          }
        else
          for (c = 0; c < a.length; c++) {
            if (s = a[c], m = s.instance, _ = s.currentTarget, s = s.listener, m !== u && n.isPropagationStopped())
              break t;
            u = s, n.currentTarget = _;
            try {
              u(n);
            } catch (D) {
              Eu(D);
            }
            n.currentTarget = null, u = m;
          }
      }
    }
  }
  function ut(t, e) {
    var l = e[Wi];
    l === void 0 && (l = e[Wi] = /* @__PURE__ */ new Set());
    var a = t + "__bubble";
    l.has(a) || (Pd(e, t, 2, !1), l.add(a));
  }
  function Gf(t, e, l) {
    var a = 0;
    e && (a |= 4), Pd(
      l,
      t,
      a,
      e
    );
  }
  var ci = "_reactListening" + Math.random().toString(36).slice(2);
  function Xf(t) {
    if (!t[ci]) {
      t[ci] = !0, wr.forEach(function(l) {
        l !== "selectionchange" && (Uh.has(l) || Gf(l, !1, t), Gf(l, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[ci] || (e[ci] = !0, Gf("selectionchange", !1, e));
    }
  }
  function Pd(t, e, l, a) {
    switch (Dm(e)) {
      case 2:
        var n = uy;
        break;
      case 8:
        n = iy;
        break;
      default:
        n = lr;
    }
    l = n.bind(
      null,
      e,
      l,
      t
    ), n = void 0, !ic || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (n = !0), a ? n !== void 0 ? t.addEventListener(e, l, {
      capture: !0,
      passive: n
    }) : t.addEventListener(e, l, !0) : n !== void 0 ? t.addEventListener(e, l, {
      passive: n
    }) : t.addEventListener(e, l, !1);
  }
  function Qf(t, e, l, a, n) {
    var u = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (; ; ) {
        if (a === null) return;
        var c = a.tag;
        if (c === 3 || c === 4) {
          var s = a.stateNode.containerInfo;
          if (s === n) break;
          if (c === 4)
            for (c = a.return; c !== null; ) {
              var m = c.tag;
              if ((m === 3 || m === 4) && c.stateNode.containerInfo === n)
                return;
              c = c.return;
            }
          for (; s !== null; ) {
            if (c = ha(s), c === null) return;
            if (m = c.tag, m === 5 || m === 6 || m === 26 || m === 27) {
              a = u = c;
              continue t;
            }
            s = s.parentNode;
          }
        }
        a = a.return;
      }
    ao(function() {
      var _ = u, D = nc(l), U = [];
      t: {
        var A = Ro.get(t);
        if (A !== void 0) {
          var z = pu, G = t;
          switch (t) {
            case "keypress":
              if (yu(l) === 0) break t;
            case "keydown":
            case "keyup":
              z = A0;
              break;
            case "focusin":
              G = "focus", z = oc;
              break;
            case "focusout":
              G = "blur", z = oc;
              break;
            case "beforeblur":
            case "afterblur":
              z = oc;
              break;
            case "click":
              if (l.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              z = io;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              z = d0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              z = M0;
              break;
            case Do:
            case Co:
            case No:
              z = h0;
              break;
            case Uo:
              z = C0;
              break;
            case "scroll":
            case "scrollend":
              z = o0;
              break;
            case "wheel":
              z = U0;
              break;
            case "copy":
            case "cut":
            case "paste":
              z = g0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              z = fo;
              break;
            case "toggle":
            case "beforetoggle":
              z = H0;
          }
          var $ = (e & 4) !== 0, _t = !$ && (t === "scroll" || t === "scrollend"), b = $ ? A !== null ? A + "Capture" : null : A;
          $ = [];
          for (var y = _, E; y !== null; ) {
            var C = y;
            if (E = C.stateNode, C = C.tag, C !== 5 && C !== 26 && C !== 27 || E === null || b === null || (C = un(y, b), C != null && $.push(
              Ln(y, C, E)
            )), _t) break;
            y = y.return;
          }
          0 < $.length && (A = new z(
            A,
            G,
            null,
            l,
            D
          ), U.push({ event: A, listeners: $ }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (A = t === "mouseover" || t === "pointerover", z = t === "mouseout" || t === "pointerout", A && l !== ac && (G = l.relatedTarget || l.fromElement) && (ha(G) || G[va]))
            break t;
          if ((z || A) && (A = D.window === D ? D : (A = D.ownerDocument) ? A.defaultView || A.parentWindow : window, z ? (G = l.relatedTarget || l.toElement, z = _, G = G ? ha(G) : null, G !== null && (_t = p(G), $ = G.tag, G !== _t || $ !== 5 && $ !== 27 && $ !== 6) && (G = null)) : (z = null, G = _), z !== G)) {
            if ($ = io, C = "onMouseLeave", b = "onMouseEnter", y = "mouse", (t === "pointerout" || t === "pointerover") && ($ = fo, C = "onPointerLeave", b = "onPointerEnter", y = "pointer"), _t = z == null ? A : nn(z), E = G == null ? A : nn(G), A = new $(
              C,
              y + "leave",
              z,
              l,
              D
            ), A.target = _t, A.relatedTarget = E, C = null, ha(D) === _ && ($ = new $(
              b,
              y + "enter",
              G,
              l,
              D
            ), $.target = E, $.relatedTarget = _t, C = $), _t = C, z && G)
              e: {
                for ($ = Rh, b = z, y = G, E = 0, C = b; C; C = $(C))
                  E++;
                C = 0;
                for (var w = y; w; w = $(w))
                  C++;
                for (; 0 < E - C; )
                  b = $(b), E--;
                for (; 0 < C - E; )
                  y = $(y), C--;
                for (; E--; ) {
                  if (b === y || y !== null && b === y.alternate) {
                    $ = b;
                    break e;
                  }
                  b = $(b), y = $(y);
                }
                $ = null;
              }
            else $ = null;
            z !== null && tm(
              U,
              A,
              z,
              $,
              !1
            ), G !== null && _t !== null && tm(
              U,
              _t,
              G,
              $,
              !0
            );
          }
        }
        t: {
          if (A = _ ? nn(_) : window, z = A.nodeName && A.nodeName.toLowerCase(), z === "select" || z === "input" && A.type === "file")
            var dt = go;
          else if (ho(A))
            if (po)
              dt = Z0;
            else {
              dt = X0;
              var Q = G0;
            }
          else
            z = A.nodeName, !z || z.toLowerCase() !== "input" || A.type !== "checkbox" && A.type !== "radio" ? _ && lc(_.elementType) && (dt = go) : dt = Q0;
          if (dt && (dt = dt(t, _))) {
            yo(
              U,
              dt,
              l,
              D
            );
            break t;
          }
          Q && Q(t, A, _), t === "focusout" && _ && A.type === "number" && _.memoizedProps.value != null && ec(A, "number", A.value);
        }
        switch (Q = _ ? nn(_) : window, t) {
          case "focusin":
            (ho(Q) || Q.contentEditable === "true") && (Aa = Q, yc = _, vn = null);
            break;
          case "focusout":
            vn = yc = Aa = null;
            break;
          case "mousedown":
            gc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            gc = !1, Oo(U, l, D);
            break;
          case "selectionchange":
            if (w0) break;
          case "keydown":
          case "keyup":
            Oo(U, l, D);
        }
        var et;
        if (dc)
          t: {
            switch (t) {
              case "compositionstart":
                var ct = "onCompositionStart";
                break t;
              case "compositionend":
                ct = "onCompositionEnd";
                break t;
              case "compositionupdate":
                ct = "onCompositionUpdate";
                break t;
            }
            ct = void 0;
          }
        else
          Ta ? mo(t, l) && (ct = "onCompositionEnd") : t === "keydown" && l.keyCode === 229 && (ct = "onCompositionStart");
        ct && (ro && l.locale !== "ko" && (Ta || ct !== "onCompositionStart" ? ct === "onCompositionEnd" && Ta && (et = no()) : (yl = D, cc = "value" in yl ? yl.value : yl.textContent, Ta = !0)), Q = fi(_, ct), 0 < Q.length && (ct = new co(
          ct,
          t,
          null,
          l,
          D
        ), U.push({ event: ct, listeners: Q }), et ? ct.data = et : (et = vo(l), et !== null && (ct.data = et)))), (et = j0 ? B0(t, l) : q0(t, l)) && (ct = fi(_, "onBeforeInput"), 0 < ct.length && (Q = new co(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          D
        ), U.push({
          event: Q,
          listeners: ct
        }), Q.data = et)), Dh(
          U,
          t,
          _,
          l,
          D
        );
      }
      Id(U, e);
    });
  }
  function Ln(t, e, l) {
    return {
      instance: t,
      listener: e,
      currentTarget: l
    };
  }
  function fi(t, e) {
    for (var l = e + "Capture", a = []; t !== null; ) {
      var n = t, u = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || u === null || (n = un(t, l), n != null && a.unshift(
        Ln(t, n, u)
      ), n = un(t, e), n != null && a.push(
        Ln(t, n, u)
      )), t.tag === 3) return a;
      t = t.return;
    }
    return [];
  }
  function Rh(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function tm(t, e, l, a, n) {
    for (var u = e._reactName, c = []; l !== null && l !== a; ) {
      var s = l, m = s.alternate, _ = s.stateNode;
      if (s = s.tag, m !== null && m === a) break;
      s !== 5 && s !== 26 && s !== 27 || _ === null || (m = _, n ? (_ = un(l, u), _ != null && c.unshift(
        Ln(l, _, m)
      )) : n || (_ = un(l, u), _ != null && c.push(
        Ln(l, _, m)
      ))), l = l.return;
    }
    c.length !== 0 && t.push({ event: e, listeners: c });
  }
  var Hh = /\r\n?/g, xh = /\u0000|\uFFFD/g;
  function em(t) {
    return (typeof t == "string" ? t : "" + t).replace(Hh, `
`).replace(xh, "");
  }
  function lm(t, e) {
    return e = em(e), em(t) === e;
  }
  function Et(t, e, l, a, n, u) {
    switch (l) {
      case "children":
        typeof a == "string" ? e === "body" || e === "textarea" && a === "" || Sa(t, a) : (typeof a == "number" || typeof a == "bigint") && e !== "body" && Sa(t, "" + a);
        break;
      case "className":
        du(t, "class", a);
        break;
      case "tabIndex":
        du(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        du(t, l, a);
        break;
      case "style":
        eo(t, a, u);
        break;
      case "data":
        if (e !== "object") {
          du(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || l !== "href")) {
          t.removeAttribute(l);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(l);
          break;
        }
        a = vu("" + a), t.setAttribute(l, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" && (l === "formAction" ? (e !== "input" && Et(t, e, "name", n.name, n, null), Et(
            t,
            e,
            "formEncType",
            n.formEncType,
            n,
            null
          ), Et(
            t,
            e,
            "formMethod",
            n.formMethod,
            n,
            null
          ), Et(
            t,
            e,
            "formTarget",
            n.formTarget,
            n,
            null
          )) : (Et(t, e, "encType", n.encType, n, null), Et(t, e, "method", n.method, n, null), Et(t, e, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(l);
          break;
        }
        a = vu("" + a), t.setAttribute(l, a);
        break;
      case "onClick":
        a != null && (t.onclick = Je);
        break;
      case "onScroll":
        a != null && ut("scroll", t);
        break;
      case "onScrollEnd":
        a != null && ut("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(r(61));
          if (l = a.__html, l != null) {
            if (n.children != null) throw Error(r(60));
            t.innerHTML = l;
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        l = vu("" + a), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          l
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, "" + a) : t.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, "") : t.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === !0 ? t.setAttribute(l, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, a) : t.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(l, a) : t.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(l) : t.setAttribute(l, a);
        break;
      case "popover":
        ut("beforetoggle", t), ut("toggle", t), su(t, "popover", a);
        break;
      case "xlinkActuate":
        Ke(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        Ke(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        Ke(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        Ke(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        Ke(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        Ke(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        Ke(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        Ke(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        Ke(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        su(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = f0.get(l) || l, su(t, l, a));
    }
  }
  function Zf(t, e, l, a, n, u) {
    switch (l) {
      case "style":
        eo(t, a, u);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(r(61));
          if (l = a.__html, l != null) {
            if (n.children != null) throw Error(r(60));
            t.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof a == "string" ? Sa(t, a) : (typeof a == "number" || typeof a == "bigint") && Sa(t, "" + a);
        break;
      case "onScroll":
        a != null && ut("scroll", t);
        break;
      case "onScrollEnd":
        a != null && ut("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = Je);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Kr.hasOwnProperty(l))
          t: {
            if (l[0] === "o" && l[1] === "n" && (n = l.endsWith("Capture"), e = l.slice(2, n ? l.length - 7 : void 0), u = t[ae] || null, u = u != null ? u[l] : null, typeof u == "function" && t.removeEventListener(e, u, n), typeof a == "function")) {
              typeof u != "function" && u !== null && (l in t ? t[l] = null : t.hasAttribute(l) && t.removeAttribute(l)), t.addEventListener(e, a, n);
              break t;
            }
            l in t ? t[l] = a : a === !0 ? t.setAttribute(l, "") : su(t, l, a);
          }
    }
  }
  function Pt(t, e, l) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        ut("error", t), ut("load", t);
        var a = !1, n = !1, u;
        for (u in l)
          if (l.hasOwnProperty(u)) {
            var c = l[u];
            if (c != null)
              switch (u) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, e));
                default:
                  Et(t, e, u, c, l, null);
              }
          }
        n && Et(t, e, "srcSet", l.srcSet, l, null), a && Et(t, e, "src", l.src, l, null);
        return;
      case "input":
        ut("invalid", t);
        var s = u = c = n = null, m = null, _ = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var D = l[a];
            if (D != null)
              switch (a) {
                case "name":
                  n = D;
                  break;
                case "type":
                  c = D;
                  break;
                case "checked":
                  m = D;
                  break;
                case "defaultChecked":
                  _ = D;
                  break;
                case "value":
                  u = D;
                  break;
                case "defaultValue":
                  s = D;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (D != null)
                    throw Error(r(137, e));
                  break;
                default:
                  Et(t, e, a, D, l, null);
              }
          }
        Wr(
          t,
          u,
          s,
          m,
          _,
          c,
          n,
          !1
        );
        return;
      case "select":
        ut("invalid", t), a = c = u = null;
        for (n in l)
          if (l.hasOwnProperty(n) && (s = l[n], s != null))
            switch (n) {
              case "value":
                u = s;
                break;
              case "defaultValue":
                c = s;
                break;
              case "multiple":
                a = s;
              default:
                Et(t, e, n, s, l, null);
            }
        e = u, l = c, t.multiple = !!a, e != null ? ba(t, !!a, e, !1) : l != null && ba(t, !!a, l, !0);
        return;
      case "textarea":
        ut("invalid", t), u = n = a = null;
        for (c in l)
          if (l.hasOwnProperty(c) && (s = l[c], s != null))
            switch (c) {
              case "value":
                a = s;
                break;
              case "defaultValue":
                n = s;
                break;
              case "children":
                u = s;
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(r(91));
                break;
              default:
                Et(t, e, c, s, l, null);
            }
        Pr(t, a, n, u);
        return;
      case "option":
        for (m in l)
          l.hasOwnProperty(m) && (a = l[m], a != null) && (m === "selected" ? t.selected = a && typeof a != "function" && typeof a != "symbol" : Et(t, e, m, a, l, null));
        return;
      case "dialog":
        ut("beforetoggle", t), ut("toggle", t), ut("cancel", t), ut("close", t);
        break;
      case "iframe":
      case "object":
        ut("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Yn.length; a++)
          ut(Yn[a], t);
        break;
      case "image":
        ut("error", t), ut("load", t);
        break;
      case "details":
        ut("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        ut("error", t), ut("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (_ in l)
          if (l.hasOwnProperty(_) && (a = l[_], a != null))
            switch (_) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, e));
              default:
                Et(t, e, _, a, l, null);
            }
        return;
      default:
        if (lc(e)) {
          for (D in l)
            l.hasOwnProperty(D) && (a = l[D], a !== void 0 && Zf(
              t,
              e,
              D,
              a,
              l,
              void 0
            ));
          return;
        }
    }
    for (s in l)
      l.hasOwnProperty(s) && (a = l[s], a != null && Et(t, e, s, a, l, null));
  }
  function jh(t, e, l, a) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null, u = null, c = null, s = null, m = null, _ = null, D = null;
        for (z in l) {
          var U = l[z];
          if (l.hasOwnProperty(z) && U != null)
            switch (z) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                m = U;
              default:
                a.hasOwnProperty(z) || Et(t, e, z, null, a, U);
            }
        }
        for (var A in a) {
          var z = a[A];
          if (U = l[A], a.hasOwnProperty(A) && (z != null || U != null))
            switch (A) {
              case "type":
                u = z;
                break;
              case "name":
                n = z;
                break;
              case "checked":
                _ = z;
                break;
              case "defaultChecked":
                D = z;
                break;
              case "value":
                c = z;
                break;
              case "defaultValue":
                s = z;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null)
                  throw Error(r(137, e));
                break;
              default:
                z !== U && Et(
                  t,
                  e,
                  A,
                  z,
                  a,
                  U
                );
            }
        }
        tc(
          t,
          c,
          s,
          m,
          _,
          D,
          u,
          n
        );
        return;
      case "select":
        z = c = s = A = null;
        for (u in l)
          if (m = l[u], l.hasOwnProperty(u) && m != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                z = m;
              default:
                a.hasOwnProperty(u) || Et(
                  t,
                  e,
                  u,
                  null,
                  a,
                  m
                );
            }
        for (n in a)
          if (u = a[n], m = l[n], a.hasOwnProperty(n) && (u != null || m != null))
            switch (n) {
              case "value":
                A = u;
                break;
              case "defaultValue":
                s = u;
                break;
              case "multiple":
                c = u;
              default:
                u !== m && Et(
                  t,
                  e,
                  n,
                  u,
                  a,
                  m
                );
            }
        e = s, l = c, a = z, A != null ? ba(t, !!l, A, !1) : !!a != !!l && (e != null ? ba(t, !!l, e, !0) : ba(t, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        z = A = null;
        for (s in l)
          if (n = l[s], l.hasOwnProperty(s) && n != null && !a.hasOwnProperty(s))
            switch (s) {
              case "value":
                break;
              case "children":
                break;
              default:
                Et(t, e, s, null, a, n);
            }
        for (c in a)
          if (n = a[c], u = l[c], a.hasOwnProperty(c) && (n != null || u != null))
            switch (c) {
              case "value":
                A = n;
                break;
              case "defaultValue":
                z = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(r(91));
                break;
              default:
                n !== u && Et(t, e, c, n, a, u);
            }
        Ir(t, A, z);
        return;
      case "option":
        for (var G in l)
          A = l[G], l.hasOwnProperty(G) && A != null && !a.hasOwnProperty(G) && (G === "selected" ? t.selected = !1 : Et(
            t,
            e,
            G,
            null,
            a,
            A
          ));
        for (m in a)
          A = a[m], z = l[m], a.hasOwnProperty(m) && A !== z && (A != null || z != null) && (m === "selected" ? t.selected = A && typeof A != "function" && typeof A != "symbol" : Et(
            t,
            e,
            m,
            A,
            a,
            z
          ));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var $ in l)
          A = l[$], l.hasOwnProperty($) && A != null && !a.hasOwnProperty($) && Et(t, e, $, null, a, A);
        for (_ in a)
          if (A = a[_], z = l[_], a.hasOwnProperty(_) && A !== z && (A != null || z != null))
            switch (_) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (A != null)
                  throw Error(r(137, e));
                break;
              default:
                Et(
                  t,
                  e,
                  _,
                  A,
                  a,
                  z
                );
            }
        return;
      default:
        if (lc(e)) {
          for (var _t in l)
            A = l[_t], l.hasOwnProperty(_t) && A !== void 0 && !a.hasOwnProperty(_t) && Zf(
              t,
              e,
              _t,
              void 0,
              a,
              A
            );
          for (D in a)
            A = a[D], z = l[D], !a.hasOwnProperty(D) || A === z || A === void 0 && z === void 0 || Zf(
              t,
              e,
              D,
              A,
              a,
              z
            );
          return;
        }
    }
    for (var b in l)
      A = l[b], l.hasOwnProperty(b) && A != null && !a.hasOwnProperty(b) && Et(t, e, b, null, a, A);
    for (U in a)
      A = a[U], z = l[U], !a.hasOwnProperty(U) || A === z || A == null && z == null || Et(t, e, U, A, a, z);
  }
  function am(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Bh() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, l = performance.getEntriesByType("resource"), a = 0; a < l.length; a++) {
        var n = l[a], u = n.transferSize, c = n.initiatorType, s = n.duration;
        if (u && s && am(c)) {
          for (c = 0, s = n.responseEnd, a += 1; a < l.length; a++) {
            var m = l[a], _ = m.startTime;
            if (_ > s) break;
            var D = m.transferSize, U = m.initiatorType;
            D && am(U) && (m = m.responseEnd, c += D * (m < s ? 1 : (s - _) / (m - _)));
          }
          if (--a, e += 8 * (u + c) / (n.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var Vf = null, wf = null;
  function ri(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function nm(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function um(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function Kf(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var Jf = null;
  function qh() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Jf ? !1 : (Jf = t, !0) : (Jf = null, !1);
  }
  var im = typeof setTimeout == "function" ? setTimeout : void 0, Yh = typeof clearTimeout == "function" ? clearTimeout : void 0, cm = typeof Promise == "function" ? Promise : void 0, Lh = typeof queueMicrotask == "function" ? queueMicrotask : typeof cm < "u" ? function(t) {
    return cm.resolve(null).then(t).catch(Gh);
  } : im;
  function Gh(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Hl(t) {
    return t === "head";
  }
  function fm(t, e) {
    var l = e, a = 0;
    do {
      var n = l.nextSibling;
      if (t.removeChild(l), n && n.nodeType === 8)
        if (l = n.data, l === "/$" || l === "/&") {
          if (a === 0) {
            t.removeChild(n), Wa(e);
            return;
          }
          a--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&")
          a++;
        else if (l === "html")
          Gn(t.ownerDocument.documentElement);
        else if (l === "head") {
          l = t.ownerDocument.head, Gn(l);
          for (var u = l.firstChild; u; ) {
            var c = u.nextSibling, s = u.nodeName;
            u[an] || s === "SCRIPT" || s === "STYLE" || s === "LINK" && u.rel.toLowerCase() === "stylesheet" || l.removeChild(u), u = c;
          }
        } else
          l === "body" && Gn(t.ownerDocument.body);
      l = n;
    } while (l);
    Wa(e);
  }
  function rm(t, e) {
    var l = t;
    t = 0;
    do {
      var a = l.nextSibling;
      if (l.nodeType === 1 ? e ? (l._stashedDisplay = l.style.display, l.style.display = "none") : (l.style.display = l._stashedDisplay || "", l.getAttribute("style") === "" && l.removeAttribute("style")) : l.nodeType === 3 && (e ? (l._stashedText = l.nodeValue, l.nodeValue = "") : l.nodeValue = l._stashedText || ""), a && a.nodeType === 8)
        if (l = a.data, l === "/$") {
          if (t === 0) break;
          t--;
        } else
          l !== "$" && l !== "$?" && l !== "$~" && l !== "$!" || t++;
      l = a;
    } while (l);
  }
  function $f(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (e = e.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          $f(l), Ii(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(l);
    }
  }
  function Xh(t, e, l, a) {
    for (; t.nodeType === 1; ) {
      var n = l;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (a) {
        if (!t[an])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (u = t.getAttribute("rel"), u === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (u !== n.rel || t.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || t.getAttribute("title") !== (n.title == null ? null : n.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (u = t.getAttribute("src"), (u !== (n.src == null ? null : n.src) || t.getAttribute("type") !== (n.type == null ? null : n.type) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && u && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var u = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && t.getAttribute("name") === u)
          return t;
      } else return t;
      if (t = Ue(t.nextSibling), t === null) break;
    }
    return null;
  }
  function Qh(t, e, l) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = Ue(t.nextSibling), t === null)) return null;
    return t;
  }
  function om(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Ue(t.nextSibling), t === null)) return null;
    return t;
  }
  function Ff(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function kf(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function Zh(t, e) {
    var l = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || l.readyState !== "loading")
      e();
    else {
      var a = function() {
        e(), l.removeEventListener("DOMContentLoaded", a);
      };
      l.addEventListener("DOMContentLoaded", a), t._reactRetry = a;
    }
  }
  function Ue(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F")
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var Wf = null;
  function sm(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "/$" || l === "/&") {
          if (e === 0)
            return Ue(t.nextSibling);
          e--;
        } else
          l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function dm(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (e === 0) return t;
          e--;
        } else l !== "/$" && l !== "/&" || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function mm(t, e, l) {
    switch (e = ri(l), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(r(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(r(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(r(454));
        return t;
      default:
        throw Error(r(451));
    }
  }
  function Gn(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    Ii(t);
  }
  var Re = /* @__PURE__ */ new Map(), vm = /* @__PURE__ */ new Set();
  function oi(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var rl = Y.d;
  Y.d = {
    f: Vh,
    r: wh,
    D: Kh,
    C: Jh,
    L: $h,
    m: Fh,
    X: Wh,
    S: kh,
    M: Ih
  };
  function Vh() {
    var t = rl.f(), e = ei();
    return t || e;
  }
  function wh(t) {
    var e = ya(t);
    e !== null && e.tag === 5 && e.type === "form" ? Us(e) : rl.r(t);
  }
  var $a = typeof document > "u" ? null : document;
  function hm(t, e, l) {
    var a = $a;
    if (a && typeof e == "string" && e) {
      var n = Ae(e);
      n = 'link[rel="' + t + '"][href="' + n + '"]', typeof l == "string" && (n += '[crossorigin="' + l + '"]'), vm.has(n) || (vm.add(n), t = { rel: t, crossOrigin: l, href: e }, a.querySelector(n) === null && (e = a.createElement("link"), Pt(e, "link", t), wt(e), a.head.appendChild(e)));
    }
  }
  function Kh(t) {
    rl.D(t), hm("dns-prefetch", t, null);
  }
  function Jh(t, e) {
    rl.C(t, e), hm("preconnect", t, e);
  }
  function $h(t, e, l) {
    rl.L(t, e, l);
    var a = $a;
    if (a && t && e) {
      var n = 'link[rel="preload"][as="' + Ae(e) + '"]';
      e === "image" && l && l.imageSrcSet ? (n += '[imagesrcset="' + Ae(
        l.imageSrcSet
      ) + '"]', typeof l.imageSizes == "string" && (n += '[imagesizes="' + Ae(
        l.imageSizes
      ) + '"]')) : n += '[href="' + Ae(t) + '"]';
      var u = n;
      switch (e) {
        case "style":
          u = Fa(t);
          break;
        case "script":
          u = ka(t);
      }
      Re.has(u) || (t = R(
        {
          rel: "preload",
          href: e === "image" && l && l.imageSrcSet ? void 0 : t,
          as: e
        },
        l
      ), Re.set(u, t), a.querySelector(n) !== null || e === "style" && a.querySelector(Xn(u)) || e === "script" && a.querySelector(Qn(u)) || (e = a.createElement("link"), Pt(e, "link", t), wt(e), a.head.appendChild(e)));
    }
  }
  function Fh(t, e) {
    rl.m(t, e);
    var l = $a;
    if (l && t) {
      var a = e && typeof e.as == "string" ? e.as : "script", n = 'link[rel="modulepreload"][as="' + Ae(a) + '"][href="' + Ae(t) + '"]', u = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = ka(t);
      }
      if (!Re.has(u) && (t = R({ rel: "modulepreload", href: t }, e), Re.set(u, t), l.querySelector(n) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(Qn(u)))
              return;
        }
        a = l.createElement("link"), Pt(a, "link", t), wt(a), l.head.appendChild(a);
      }
    }
  }
  function kh(t, e, l) {
    rl.S(t, e, l);
    var a = $a;
    if (a && t) {
      var n = ga(a).hoistableStyles, u = Fa(t);
      e = e || "default";
      var c = n.get(u);
      if (!c) {
        var s = { loading: 0, preload: null };
        if (c = a.querySelector(
          Xn(u)
        ))
          s.loading = 5;
        else {
          t = R(
            { rel: "stylesheet", href: t, "data-precedence": e },
            l
          ), (l = Re.get(u)) && If(t, l);
          var m = c = a.createElement("link");
          wt(m), Pt(m, "link", t), m._p = new Promise(function(_, D) {
            m.onload = _, m.onerror = D;
          }), m.addEventListener("load", function() {
            s.loading |= 1;
          }), m.addEventListener("error", function() {
            s.loading |= 2;
          }), s.loading |= 4, si(c, e, a);
        }
        c = {
          type: "stylesheet",
          instance: c,
          count: 1,
          state: s
        }, n.set(u, c);
      }
    }
  }
  function Wh(t, e) {
    rl.X(t, e);
    var l = $a;
    if (l && t) {
      var a = ga(l).hoistableScripts, n = ka(t), u = a.get(n);
      u || (u = l.querySelector(Qn(n)), u || (t = R({ src: t, async: !0 }, e), (e = Re.get(n)) && Pf(t, e), u = l.createElement("script"), wt(u), Pt(u, "link", t), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function Ih(t, e) {
    rl.M(t, e);
    var l = $a;
    if (l && t) {
      var a = ga(l).hoistableScripts, n = ka(t), u = a.get(n);
      u || (u = l.querySelector(Qn(n)), u || (t = R({ src: t, async: !0, type: "module" }, e), (e = Re.get(n)) && Pf(t, e), u = l.createElement("script"), wt(u), Pt(u, "link", t), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function ym(t, e, l, a) {
    var n = (n = at.current) ? oi(n) : null;
    if (!n) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (e = Fa(l.href), l = ga(
          n
        ).hoistableStyles, a = l.get(e), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          t = Fa(l.href);
          var u = ga(
            n
          ).hoistableStyles, c = u.get(t);
          if (c || (n = n.ownerDocument || n, c = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(t, c), (u = n.querySelector(
            Xn(t)
          )) && !u._p && (c.instance = u, c.state.loading = 5), Re.has(t) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, Re.set(t, l), u || Ph(
            n,
            t,
            l,
            c.state
          ))), e && a === null)
            throw Error(r(528, ""));
          return c;
        }
        if (e && a !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return e = l.async, l = l.src, typeof l == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = ka(l), l = ga(
          n
        ).hoistableScripts, a = l.get(e), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(r(444, t));
    }
  }
  function Fa(t) {
    return 'href="' + Ae(t) + '"';
  }
  function Xn(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function gm(t) {
    return R({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function Ph(t, e, l, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? a.loading = 1 : (e = t.createElement("link"), a.preload = e, e.addEventListener("load", function() {
      return a.loading |= 1;
    }), e.addEventListener("error", function() {
      return a.loading |= 2;
    }), Pt(e, "link", l), wt(e), t.head.appendChild(e));
  }
  function ka(t) {
    return '[src="' + Ae(t) + '"]';
  }
  function Qn(t) {
    return "script[async]" + t;
  }
  function pm(t, e, l) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var a = t.querySelector(
            'style[data-href~="' + Ae(l.href) + '"]'
          );
          if (a)
            return e.instance = a, wt(a), a;
          var n = R({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return a = (t.ownerDocument || t).createElement(
            "style"
          ), wt(a), Pt(a, "style", n), si(a, l.precedence, t), e.instance = a;
        case "stylesheet":
          n = Fa(l.href);
          var u = t.querySelector(
            Xn(n)
          );
          if (u)
            return e.state.loading |= 4, e.instance = u, wt(u), u;
          a = gm(l), (n = Re.get(n)) && If(a, n), u = (t.ownerDocument || t).createElement("link"), wt(u);
          var c = u;
          return c._p = new Promise(function(s, m) {
            c.onload = s, c.onerror = m;
          }), Pt(u, "link", a), e.state.loading |= 4, si(u, l.precedence, t), e.instance = u;
        case "script":
          return u = ka(l.src), (n = t.querySelector(
            Qn(u)
          )) ? (e.instance = n, wt(n), n) : (a = l, (n = Re.get(u)) && (a = R({}, l), Pf(a, n)), t = t.ownerDocument || t, n = t.createElement("script"), wt(n), Pt(n, "link", a), t.head.appendChild(n), e.instance = n);
        case "void":
          return null;
        default:
          throw Error(r(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (a = e.instance, e.state.loading |= 4, si(a, l.precedence, t));
    return e.instance;
  }
  function si(t, e, l) {
    for (var a = l.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), n = a.length ? a[a.length - 1] : null, u = n, c = 0; c < a.length; c++) {
      var s = a[c];
      if (s.dataset.precedence === e) u = s;
      else if (u !== n) break;
    }
    u ? u.parentNode.insertBefore(t, u.nextSibling) : (e = l.nodeType === 9 ? l.head : l, e.insertBefore(t, e.firstChild));
  }
  function If(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function Pf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var di = null;
  function bm(t, e, l) {
    if (di === null) {
      var a = /* @__PURE__ */ new Map(), n = di = /* @__PURE__ */ new Map();
      n.set(l, a);
    } else
      n = di, a = n.get(l), a || (a = /* @__PURE__ */ new Map(), n.set(l, a));
    if (a.has(t)) return a;
    for (a.set(t, null), l = l.getElementsByTagName(t), n = 0; n < l.length; n++) {
      var u = l[n];
      if (!(u[an] || u[Ft] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var c = u.getAttribute(e) || "";
        c = t + c;
        var s = a.get(c);
        s ? s.push(u) : a.set(c, [u]);
      }
    }
    return a;
  }
  function Sm(t, e, l) {
    t = t.ownerDocument || t, t.head.insertBefore(
      l,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function ty(t, e, l) {
    if (l === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
          break;
        return !0;
      case "link":
        if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
          break;
        return e.rel === "stylesheet" ? (t = e.disabled, typeof e.precedence == "string" && t == null) : !0;
      case "script":
        if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
          return !0;
    }
    return !1;
  }
  function Em(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function ey(t, e, l, a) {
    if (l.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var n = Fa(a.href), u = e.querySelector(
          Xn(n)
        );
        if (u) {
          e = u._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = mi.bind(t), e.then(t, t)), l.state.loading |= 4, l.instance = u, wt(u);
          return;
        }
        u = e.ownerDocument || e, a = gm(a), (n = Re.get(n)) && If(a, n), u = u.createElement("link"), wt(u);
        var c = u;
        c._p = new Promise(function(s, m) {
          c.onload = s, c.onerror = m;
        }), Pt(u, "link", a), l.instance = u;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(l, e), (e = l.state.preload) && (l.state.loading & 3) === 0 && (t.count++, l = mi.bind(t), e.addEventListener("load", l), e.addEventListener("error", l));
    }
  }
  var tr = 0;
  function ly(t, e) {
    return t.stylesheets && t.count === 0 && hi(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(l) {
      var a = setTimeout(function() {
        if (t.stylesheets && hi(t, t.stylesheets), t.unsuspend) {
          var u = t.unsuspend;
          t.unsuspend = null, u();
        }
      }, 6e4 + e);
      0 < t.imgBytes && tr === 0 && (tr = 62500 * Bh());
      var n = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && hi(t, t.stylesheets), t.unsuspend)) {
            var u = t.unsuspend;
            t.unsuspend = null, u();
          }
        },
        (t.imgBytes > tr ? 50 : 800) + e
      );
      return t.unsuspend = l, function() {
        t.unsuspend = null, clearTimeout(a), clearTimeout(n);
      };
    } : null;
  }
  function mi() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) hi(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var vi = null;
  function hi(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, vi = /* @__PURE__ */ new Map(), e.forEach(ay, t), vi = null, mi.call(t));
  }
  function ay(t, e) {
    if (!(e.state.loading & 4)) {
      var l = vi.get(t);
      if (l) var a = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), vi.set(t, l);
        for (var n = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < n.length; u++) {
          var c = n[u];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (l.set(c.dataset.precedence, c), a = c);
        }
        a && l.set(null, a);
      }
      n = e.instance, c = n.getAttribute("data-precedence"), u = l.get(c) || a, u === a && l.set(null, n), l.set(c, n), this.count++, a = mi.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), u ? u.parentNode.insertBefore(n, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(n, t.firstChild)), e.state.loading |= 4;
    }
  }
  var Zn = {
    $$typeof: K,
    Provider: null,
    Consumer: null,
    _currentValue: V,
    _currentValue2: V,
    _threadCount: 0
  };
  function ny(t, e, l, a, n, u, c, s, m) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = $i(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = $i(0), this.hiddenUpdates = $i(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = m, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function _m(t, e, l, a, n, u, c, s, m, _, D, U) {
    return t = new ny(
      t,
      e,
      l,
      c,
      m,
      _,
      D,
      U,
      s
    ), e = 1, u === !0 && (e |= 24), u = ye(3, null, null, e), t.current = u, u.stateNode = t, e = Rc(), e.refCount++, t.pooledCache = e, e.refCount++, u.memoizedState = {
      element: a,
      isDehydrated: l,
      cache: e
    }, Bc(u), t;
  }
  function Tm(t) {
    return t ? (t = Ma, t) : Ma;
  }
  function Am(t, e, l, a, n, u) {
    n = Tm(n), a.context === null ? a.context = n : a.pendingContext = n, a = _l(e), a.payload = { element: l }, u = u === void 0 ? null : u, u !== null && (a.callback = u), l = Tl(t, a, e), l !== null && (re(l, t, e), En(l, t, e));
  }
  function zm(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function er(t, e) {
    zm(t, e), (t = t.alternate) && zm(t, e);
  }
  function Om(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Fl(t, 67108864);
      e !== null && re(e, t, 67108864), er(t, 67108864);
    }
  }
  function Mm(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Ee();
      e = Fi(e);
      var l = Fl(t, e);
      l !== null && re(l, t, e), er(t, e);
    }
  }
  var yi = !0;
  function uy(t, e, l, a) {
    var n = M.T;
    M.T = null;
    var u = Y.p;
    try {
      Y.p = 2, lr(t, e, l, a);
    } finally {
      Y.p = u, M.T = n;
    }
  }
  function iy(t, e, l, a) {
    var n = M.T;
    M.T = null;
    var u = Y.p;
    try {
      Y.p = 8, lr(t, e, l, a);
    } finally {
      Y.p = u, M.T = n;
    }
  }
  function lr(t, e, l, a) {
    if (yi) {
      var n = ar(a);
      if (n === null)
        Qf(
          t,
          e,
          a,
          gi,
          l
        ), Cm(t, a);
      else if (fy(
        n,
        t,
        e,
        l,
        a
      ))
        a.stopPropagation();
      else if (Cm(t, a), e & 4 && -1 < cy.indexOf(t)) {
        for (; n !== null; ) {
          var u = ya(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var c = Vl(u.pendingLanes);
                  if (c !== 0) {
                    var s = u;
                    for (s.pendingLanes |= 2, s.entangledLanes |= 2; c; ) {
                      var m = 1 << 31 - ve(c);
                      s.entanglements[1] |= m, c &= ~m;
                    }
                    Qe(u), (yt & 6) === 0 && (Pu = de() + 500, qn(0));
                  }
                }
                break;
              case 31:
              case 13:
                s = Fl(u, 2), s !== null && re(s, u, 2), ei(), er(u, 2);
            }
          if (u = ar(a), u === null && Qf(
            t,
            e,
            a,
            gi,
            l
          ), u === n) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else
        Qf(
          t,
          e,
          a,
          null,
          l
        );
    }
  }
  function ar(t) {
    return t = nc(t), nr(t);
  }
  var gi = null;
  function nr(t) {
    if (gi = null, t = ha(t), t !== null) {
      var e = p(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (t = T(e), t !== null) return t;
          t = null;
        } else if (l === 31) {
          if (t = S(e), t !== null) return t;
          t = null;
        } else if (l === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return gi = t, null;
  }
  function Dm(t) {
    switch (t) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Kv()) {
          case jr:
            return 2;
          case Br:
            return 8;
          case iu:
          case Jv:
            return 32;
          case qr:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ur = !1, xl = null, jl = null, Bl = null, Vn = /* @__PURE__ */ new Map(), wn = /* @__PURE__ */ new Map(), ql = [], cy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Cm(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        xl = null;
        break;
      case "dragenter":
      case "dragleave":
        jl = null;
        break;
      case "mouseover":
      case "mouseout":
        Bl = null;
        break;
      case "pointerover":
      case "pointerout":
        Vn.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        wn.delete(e.pointerId);
    }
  }
  function Kn(t, e, l, a, n, u) {
    return t === null || t.nativeEvent !== u ? (t = {
      blockedOn: e,
      domEventName: l,
      eventSystemFlags: a,
      nativeEvent: u,
      targetContainers: [n]
    }, e !== null && (e = ya(e), e !== null && Om(e)), t) : (t.eventSystemFlags |= a, e = t.targetContainers, n !== null && e.indexOf(n) === -1 && e.push(n), t);
  }
  function fy(t, e, l, a, n) {
    switch (e) {
      case "focusin":
        return xl = Kn(
          xl,
          t,
          e,
          l,
          a,
          n
        ), !0;
      case "dragenter":
        return jl = Kn(
          jl,
          t,
          e,
          l,
          a,
          n
        ), !0;
      case "mouseover":
        return Bl = Kn(
          Bl,
          t,
          e,
          l,
          a,
          n
        ), !0;
      case "pointerover":
        var u = n.pointerId;
        return Vn.set(
          u,
          Kn(
            Vn.get(u) || null,
            t,
            e,
            l,
            a,
            n
          )
        ), !0;
      case "gotpointercapture":
        return u = n.pointerId, wn.set(
          u,
          Kn(
            wn.get(u) || null,
            t,
            e,
            l,
            a,
            n
          )
        ), !0;
    }
    return !1;
  }
  function Nm(t) {
    var e = ha(t.target);
    if (e !== null) {
      var l = p(e);
      if (l !== null) {
        if (e = l.tag, e === 13) {
          if (e = T(l), e !== null) {
            t.blockedOn = e, Zr(t.priority, function() {
              Mm(l);
            });
            return;
          }
        } else if (e === 31) {
          if (e = S(l), e !== null) {
            t.blockedOn = e, Zr(t.priority, function() {
              Mm(l);
            });
            return;
          }
        } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function pi(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = ar(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var a = new l.constructor(
          l.type,
          l
        );
        ac = a, l.target.dispatchEvent(a), ac = null;
      } else
        return e = ya(l), e !== null && Om(e), t.blockedOn = l, !1;
      e.shift();
    }
    return !0;
  }
  function Um(t, e, l) {
    pi(t) && l.delete(e);
  }
  function ry() {
    ur = !1, xl !== null && pi(xl) && (xl = null), jl !== null && pi(jl) && (jl = null), Bl !== null && pi(Bl) && (Bl = null), Vn.forEach(Um), wn.forEach(Um);
  }
  function bi(t, e) {
    t.blockedOn === e && (t.blockedOn = null, ur || (ur = !0, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      ry
    )));
  }
  var Si = null;
  function Rm(t) {
    Si !== t && (Si = t, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      function() {
        Si === t && (Si = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e], a = t[e + 1], n = t[e + 2];
          if (typeof a != "function") {
            if (nr(a || l) === null)
              continue;
            break;
          }
          var u = ya(l);
          u !== null && (t.splice(e, 3), e -= 3, lf(
            u,
            {
              pending: !0,
              data: n,
              method: l.method,
              action: a
            },
            a,
            n
          ));
        }
      }
    ));
  }
  function Wa(t) {
    function e(m) {
      return bi(m, t);
    }
    xl !== null && bi(xl, t), jl !== null && bi(jl, t), Bl !== null && bi(Bl, t), Vn.forEach(e), wn.forEach(e);
    for (var l = 0; l < ql.length; l++) {
      var a = ql[l];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < ql.length && (l = ql[0], l.blockedOn === null); )
      Nm(l), l.blockedOn === null && ql.shift();
    if (l = (t.ownerDocument || t).$$reactFormReplay, l != null)
      for (a = 0; a < l.length; a += 3) {
        var n = l[a], u = l[a + 1], c = n[ae] || null;
        if (typeof u == "function")
          c || Rm(l);
        else if (c) {
          var s = null;
          if (u && u.hasAttribute("formAction")) {
            if (n = u, c = u[ae] || null)
              s = c.formAction;
            else if (nr(n) !== null) continue;
          } else s = c.action;
          typeof s == "function" ? l[a + 1] = s : (l.splice(a, 3), a -= 3), Rm(l);
        }
      }
  }
  function Hm() {
    function t(u) {
      u.canIntercept && u.info === "react-transition" && u.intercept({
        handler: function() {
          return new Promise(function(c) {
            return n = c;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function e() {
      n !== null && (n(), n = null), a || setTimeout(l, 20);
    }
    function l() {
      if (!a && !navigation.transition) {
        var u = navigation.currentEntry;
        u && u.url != null && navigation.navigate(u.url, {
          state: u.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var a = !1, n = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(l, 100), function() {
        a = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), n !== null && (n(), n = null);
      };
    }
  }
  function ir(t) {
    this._internalRoot = t;
  }
  Ei.prototype.render = ir.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(r(409));
    var l = e.current, a = Ee();
    Am(l, a, t, e, null, null);
  }, Ei.prototype.unmount = ir.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      Am(t.current, 2, null, t, null, null), ei(), e[va] = null;
    }
  };
  function Ei(t) {
    this._internalRoot = t;
  }
  Ei.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = Qr();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < ql.length && e !== 0 && e < ql[l].priority; l++) ;
      ql.splice(l, 0, t), l === 0 && Nm(t);
    }
  };
  var xm = f.version;
  if (xm !== "19.2.3")
    throw Error(
      r(
        527,
        xm,
        "19.2.3"
      )
    );
  Y.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(r(188)) : (t = Object.keys(t).join(","), Error(r(268, t)));
    return t = g(e), t = t !== null ? H(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var oy = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: M,
    reconcilerVersion: "19.2.3"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var _i = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!_i.isDisabled && _i.supportsFiber)
      try {
        tn = _i.inject(
          oy
        ), me = _i;
      } catch {
      }
  }
  return $n.createRoot = function(t, e) {
    if (!d(t)) throw Error(r(299));
    var l = !1, a = "", n = Xs, u = Qs, c = Zs;
    return e != null && (e.unstable_strictMode === !0 && (l = !0), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (u = e.onCaughtError), e.onRecoverableError !== void 0 && (c = e.onRecoverableError)), e = _m(
      t,
      1,
      !1,
      null,
      null,
      l,
      a,
      null,
      n,
      u,
      c,
      Hm
    ), t[va] = e.current, Xf(t), new ir(e);
  }, $n.hydrateRoot = function(t, e, l) {
    if (!d(t)) throw Error(r(299));
    var a = !1, n = "", u = Xs, c = Qs, s = Zs, m = null;
    return l != null && (l.unstable_strictMode === !0 && (a = !0), l.identifierPrefix !== void 0 && (n = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (c = l.onCaughtError), l.onRecoverableError !== void 0 && (s = l.onRecoverableError), l.formState !== void 0 && (m = l.formState)), e = _m(
      t,
      1,
      !0,
      e,
      l ?? null,
      a,
      n,
      m,
      u,
      c,
      s,
      Hm
    ), e.context = Tm(null), l = e.current, a = Ee(), a = Fi(a), n = _l(a), n.callback = null, Tl(l, n, a), l = a, e.current.lanes = l, ln(e, l), Qe(e), t[va] = e.current, Xf(t), new Ei(e);
  }, $n.version = "19.2.3", $n;
}
var wm;
function by() {
  if (wm) return rr.exports;
  wm = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (f) {
        console.error(f);
      }
  }
  return i(), rr.exports = py(), rr.exports;
}
var ov = by();
const Sy = /* @__PURE__ */ fv(ov), sv = /* @__PURE__ */ cv({
  __proto__: null,
  default: Sy
}, [ov]);
var Ey = Object.defineProperty, _y = (i, f, o) => f in i ? Ey(i, f, { enumerable: !0, configurable: !0, writable: !0, value: o }) : i[f] = o, Ti = (i, f, o) => _y(i, typeof f != "symbol" ? f + "" : f, o);
const Ty = {
  stringify: (i) => i ? "true" : "false",
  parse: (i) => /^[ty1-9]/i.test(i)
}, Ay = {
  stringify: (i) => i.name,
  parse: (i, f, o) => {
    const r = (() => {
      if (typeof window < "u" && i in window)
        return window[i];
      if (typeof global < "u" && i in global)
        return global[i];
    })();
    return typeof r == "function" ? r.bind(o) : void 0;
  }
}, zy = {
  stringify: (i) => JSON.stringify(i),
  parse: (i) => JSON.parse(i)
};
function Oy(i) {
  return i.replace(
    /([a-z0-9])([A-Z])/g,
    (f, o, r) => `${o}-${r.toLowerCase()}`
  );
}
function dv(i) {
  return i.replace(/[-:]([a-z])/g, (f, o) => `${o.toUpperCase()}`);
}
const My = {
  stringify: (i) => i.name,
  parse: (i, f, o) => {
    const r = (() => {
      const d = dv(f);
      if (typeof o < "u" && d in o.container)
        return o.container[d];
    })();
    return typeof r == "function" ? r.bind(o) : void 0;
  }
}, Dy = {
  stringify: (i) => `${i}`,
  parse: (i) => parseFloat(i)
}, Cy = {
  stringify: (i) => i,
  parse: (i) => i
}, mr = {
  string: Cy,
  number: Dy,
  boolean: Ty,
  function: Ay,
  method: My,
  json: zy
}, Fn = /* @__PURE__ */ Symbol.for("r2wc.render"), Ai = /* @__PURE__ */ Symbol.for("r2wc.connected"), fa = /* @__PURE__ */ Symbol.for("r2wc.context"), _e = /* @__PURE__ */ Symbol.for("r2wc.props");
function Ny(i, f, o) {
  var r, d, p;
  f.props || (f.props = i.propTypes ? Object.keys(i.propTypes) : []), f.events || (f.events = []);
  const T = Array.isArray(f.props) ? f.props.slice() : Object.keys(f.props), S = Array.isArray(f.events) ? f.events.slice() : Object.keys(f.events), v = {}, g = {}, H = {}, R = {};
  for (const q of T) {
    v[q] = Array.isArray(f.props) ? "string" : f.props[q];
    const j = Oy(q);
    H[q] = j, R[j] = q;
  }
  for (const q of S)
    g[q] = Array.isArray(f.events) ? {} : f.events[q];
  class B extends HTMLElement {
    constructor() {
      super(), Ti(this, p, !0), Ti(this, d), Ti(this, r, {}), Ti(this, "container"), f.shadow ? this.container = this.attachShadow({
        mode: f.shadow
      }) : this.container = this, this[_e].container = this.container;
      for (const j of T) {
        const X = H[j], Z = this.getAttribute(X), F = v[j], I = F ? mr[F] : null;
        if (F === "method") {
          const K = dv(X);
          Object.defineProperty(this[_e].container, K, {
            enumerable: !0,
            configurable: !0,
            get() {
              return this[_e][K];
            },
            set(lt) {
              this[_e][K] = lt, this[Fn]();
            }
          }), this[_e][j] = I.parse(Z, X, this);
        }
        I != null && I.parse && Z && (this[_e][j] = I.parse(Z, X, this));
      }
      for (const j of S)
        this[_e][j] = (X) => {
          const Z = j.replace(/^on/, "").toLowerCase();
          this.dispatchEvent(
            new CustomEvent(Z, { detail: X, ...g[j] })
          );
        };
    }
    static get observedAttributes() {
      return Object.keys(R);
    }
    connectedCallback() {
      this[Ai] = !0, this[Fn]();
    }
    disconnectedCallback() {
      this[Ai] = !1, this[fa] && o.unmount(this[fa]), delete this[fa];
    }
    attributeChangedCallback(j, X, Z) {
      const F = R[j], I = v[F], K = I ? mr[I] : null;
      F in v && K != null && K.parse && Z && (this[_e][F] = K.parse(Z, j, this), this[Fn]());
    }
    [(p = Ai, d = fa, r = _e, Fn)]() {
      this[Ai] && (this[fa] ? o.update(this[fa], this[_e]) : this[fa] = o.mount(
        this.container,
        i,
        this[_e]
      ));
    }
  }
  for (const q of T) {
    const j = H[q], X = v[q];
    Object.defineProperty(B.prototype, q, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[_e][q];
      },
      set(Z) {
        this[_e][q] = Z;
        const F = X ? mr[X] : null;
        if (F != null && F.stringify) {
          const I = F.stringify(Z, j, this);
          this.getAttribute(j) !== I && this.setAttribute(j, I);
        } else
          this[Fn]();
      }
    });
  }
  return B;
}
function mv(i, f, o, r = {}) {
  function d(S, v, g) {
    const H = f.createElement(v, g);
    if ("createRoot" in o) {
      const R = o.createRoot(S);
      return R.render(H), {
        container: S,
        root: R,
        ReactComponent: v
      };
    }
    if ("render" in o)
      return o.render(H, S), {
        container: S,
        ReactComponent: v
      };
    throw new Error("Invalid ReactDOM instance provided.");
  }
  function p({ container: S, root: v, ReactComponent: g }, H) {
    const R = f.createElement(g, H);
    if (v) {
      v.render(R);
      return;
    }
    if ("render" in o) {
      o.render(R, S);
      return;
    }
  }
  function T({ container: S, root: v }) {
    if (v) {
      v.unmount();
      return;
    }
    if ("unmountComponentAtNode" in o) {
      o.unmountComponentAtNode(S);
      return;
    }
  }
  return Ny(i, r, { mount: d, unmount: T, update: p });
}
const Uy = "_container_3e8r5_1", Ry = "_counter_3e8r5_10", Hy = "_button_3e8r5_17", xy = "_count_3e8r5_10", jy = "_label_3e8r5_40", Ia = {
  container: Uy,
  counter: Ry,
  button: Hy,
  count: xy,
  label: jy
}, By = "._container_3e8r5_1{display:block;padding:20px;border:2px solid #61dafb;border-radius:8px;margin:10px 0;background:#f0f9ff}._counter_3e8r5_10{display:flex;align-items:center;gap:15px;font-size:18px}._button_3e8r5_17{padding:8px 16px;font-size:16px;border:1px solid #61dafb;background:#61dafb;color:#000;border-radius:4px;cursor:pointer;transition:background .2s}._button_3e8r5_17:hover{background:#4fa8c5}._count_3e8r5_10{font-weight:700;min-width:40px;text-align:center;font-size:24px;color:#333}._label_3e8r5_40{color:#666;font-size:14px}";
function qy({ count: i = 0 }) {
  const [f, o] = O.useState(i);
  return O.useEffect(() => {
    o(i);
  }, [i]), O.useEffect(() => {
    const r = "react-counter-styles";
    if (!document.getElementById(r)) {
      const d = document.createElement("style");
      d.id = r, d.textContent = By, document.head.appendChild(d);
    }
  }, []), /* @__PURE__ */ gt.jsx("div", { className: Ia.container, children: /* @__PURE__ */ gt.jsxs("div", { className: Ia.counter, children: [
    /* @__PURE__ */ gt.jsx("div", { className: Ia.label, children: "React Counter:" }),
    /* @__PURE__ */ gt.jsx("button", { type: "button", className: Ia.button, onClick: () => o(f - 1), children: "-" }),
    /* @__PURE__ */ gt.jsx("span", { className: Ia.count, children: f }),
    /* @__PURE__ */ gt.jsx("button", { type: "button", className: Ia.button, onClick: () => o(f + 1), children: "+" })
  ] }) });
}
const Yy = mv(qy, W, sv);
customElements.get("react-counter") || customElements.define("react-counter", Yy);
var Ly = rv(), Gy = Object.defineProperty, Xy = (i, f, o) => f in i ? Gy(i, f, { enumerable: !0, configurable: !0, writable: !0, value: o }) : i[f] = o, vr = (i, f, o) => (Xy(i, typeof f != "symbol" ? f + "" : f, o), o);
let Qy = class {
  constructor() {
    vr(this, "current", this.detect()), vr(this, "handoffState", "pending"), vr(this, "currentId", 0);
  }
  set(f) {
    this.current !== f && (this.handoffState = "pending", this.currentId = 0, this.current = f);
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
}, Ve = new Qy();
function lu(i) {
  var f;
  return Ve.isServer ? null : i == null ? document : (f = i?.ownerDocument) != null ? f : document;
}
function Sr(i) {
  var f, o;
  return Ve.isServer ? null : i == null ? document : (o = (f = i?.getRootNode) == null ? void 0 : f.call(i)) != null ? o : document;
}
function vv(i) {
  var f, o;
  return (o = (f = Sr(i)) == null ? void 0 : f.activeElement) != null ? o : null;
}
function Zy(i) {
  return vv(i) === i;
}
function Hi(i) {
  typeof queueMicrotask == "function" ? queueMicrotask(i) : Promise.resolve().then(i).catch((f) => setTimeout(() => {
    throw f;
  }));
}
function ml() {
  let i = [], f = { addEventListener(o, r, d, p) {
    return o.addEventListener(r, d, p), f.add(() => o.removeEventListener(r, d, p));
  }, requestAnimationFrame(...o) {
    let r = requestAnimationFrame(...o);
    return f.add(() => cancelAnimationFrame(r));
  }, nextFrame(...o) {
    return f.requestAnimationFrame(() => f.requestAnimationFrame(...o));
  }, setTimeout(...o) {
    let r = setTimeout(...o);
    return f.add(() => clearTimeout(r));
  }, microTask(...o) {
    let r = { current: !0 };
    return Hi(() => {
      r.current && o[0]();
    }), f.add(() => {
      r.current = !1;
    });
  }, style(o, r, d) {
    let p = o.style.getPropertyValue(r);
    return Object.assign(o.style, { [r]: d }), this.add(() => {
      Object.assign(o.style, { [r]: p });
    });
  }, group(o) {
    let r = ml();
    return o(r), this.add(() => r.dispose());
  }, add(o) {
    return i.includes(o) || i.push(o), () => {
      let r = i.indexOf(o);
      if (r >= 0) for (let d of i.splice(r, 1)) d();
    };
  }, dispose() {
    for (let o of i.splice(0)) o();
  } };
  return f;
}
function xi() {
  let [i] = O.useState(ml);
  return O.useEffect(() => () => i.dispose(), [i]), i;
}
let oe = (i, f) => {
  Ve.isServer ? O.useEffect(i, f) : O.useLayoutEffect(i, f);
};
function ma(i) {
  let f = O.useRef(i);
  return oe(() => {
    f.current = i;
  }, [i]), f;
}
let zt = function(i) {
  let f = ma(i);
  return W.useCallback((...o) => f.current(...o), [f]);
};
function au(i) {
  return O.useMemo(() => i, Object.values(i));
}
let Vy = O.createContext(void 0);
function wy() {
  return O.useContext(Vy);
}
function Er(...i) {
  return Array.from(new Set(i.flatMap((f) => typeof f == "string" ? f.split(" ") : []))).filter(Boolean).join(" ");
}
function dl(i, f, ...o) {
  if (i in f) {
    let d = f[i];
    return typeof d == "function" ? d(...o) : d;
  }
  let r = new Error(`Tried to handle "${i}" but there is no handler defined. Only defined handlers are: ${Object.keys(f).map((d) => `"${d}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(r, dl), r;
}
var Ci = ((i) => (i[i.None = 0] = "None", i[i.RenderStrategy = 1] = "RenderStrategy", i[i.Static = 2] = "Static", i))(Ci || {}), Gl = ((i) => (i[i.Unmount = 0] = "Unmount", i[i.Hidden = 1] = "Hidden", i))(Gl || {});
function xe() {
  let i = Jy();
  return O.useCallback((f) => Ky({ mergeRefs: i, ...f }), [i]);
}
function Ky({ ourProps: i, theirProps: f, slot: o, defaultTag: r, features: d, visible: p = !0, name: T, mergeRefs: S }) {
  S = S ?? $y;
  let v = hv(f, i);
  if (p) return zi(v, o, r, T, S);
  let g = d ?? 0;
  if (g & 2) {
    let { static: H = !1, ...R } = v;
    if (H) return zi(R, o, r, T, S);
  }
  if (g & 1) {
    let { unmount: H = !0, ...R } = v;
    return dl(H ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return zi({ ...R, hidden: !0, style: { display: "none" } }, o, r, T, S);
    } });
  }
  return zi(v, o, r, T, S);
}
function zi(i, f = {}, o, r, d) {
  let { as: p = o, children: T, refName: S = "ref", ...v } = hr(i, ["unmount", "static"]), g = i.ref !== void 0 ? { [S]: i.ref } : {}, H = typeof T == "function" ? T(f) : T;
  "className" in v && v.className && typeof v.className == "function" && (v.className = v.className(f)), v["aria-labelledby"] && v["aria-labelledby"] === v.id && (v["aria-labelledby"] = void 0);
  let R = {};
  if (f) {
    let B = !1, q = [];
    for (let [j, X] of Object.entries(f)) typeof X == "boolean" && (B = !0), X === !0 && q.push(j.replace(/([A-Z])/g, (Z) => `-${Z.toLowerCase()}`));
    if (B) {
      R["data-headlessui-state"] = q.join(" ");
      for (let j of q) R[`data-${j}`] = "";
    }
  }
  if (Pn(p) && (Object.keys(ra(v)).length > 0 || Object.keys(ra(R)).length > 0)) if (!O.isValidElement(H) || Array.isArray(H) && H.length > 1 || ky(H)) {
    if (Object.keys(ra(v)).length > 0) throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(ra(v)).concat(Object.keys(ra(R))).map((B) => `  - ${B}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((B) => `  - ${B}`).join(`
`)].join(`
`));
  } else {
    let B = H.props, q = B?.className, j = typeof q == "function" ? (...F) => Er(q(...F), v.className) : Er(q, v.className), X = j ? { className: j } : {}, Z = hv(H.props, ra(hr(v, ["ref"])));
    for (let F in R) F in Z && delete R[F];
    return O.cloneElement(H, Object.assign({}, Z, R, g, { ref: d(Fy(H), g.ref) }, X));
  }
  return O.createElement(p, Object.assign({}, hr(v, ["ref"]), !Pn(p) && g, !Pn(p) && R), H);
}
function Jy() {
  let i = O.useRef([]), f = O.useCallback((o) => {
    for (let r of i.current) r != null && (typeof r == "function" ? r(o) : r.current = o);
  }, []);
  return (...o) => {
    if (!o.every((r) => r == null)) return i.current = o, f;
  };
}
function $y(...i) {
  return i.every((f) => f == null) ? void 0 : (f) => {
    for (let o of i) o != null && (typeof o == "function" ? o(f) : o.current = f);
  };
}
function hv(...i) {
  if (i.length === 0) return {};
  if (i.length === 1) return i[0];
  let f = {}, o = {};
  for (let r of i) for (let d in r) d.startsWith("on") && typeof r[d] == "function" ? (o[d] != null || (o[d] = []), o[d].push(r[d])) : f[d] = r[d];
  if (f.disabled || f["aria-disabled"]) for (let r in o) /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(r) && (o[r] = [(d) => {
    var p;
    return (p = d?.preventDefault) == null ? void 0 : p.call(d);
  }]);
  for (let r in o) Object.assign(f, { [r](d, ...p) {
    let T = o[r];
    for (let S of T) {
      if ((d instanceof Event || d?.nativeEvent instanceof Event) && d.defaultPrevented) return;
      S(d, ...p);
    }
  } });
  return f;
}
function se(i) {
  var f;
  return Object.assign(O.forwardRef(i), { displayName: (f = i.displayName) != null ? f : i.name });
}
function ra(i) {
  let f = Object.assign({}, i);
  for (let o in f) f[o] === void 0 && delete f[o];
  return f;
}
function hr(i, f = []) {
  let o = Object.assign({}, i);
  for (let r of f) r in o && delete o[r];
  return o;
}
function Fy(i) {
  return W.version.split(".")[0] >= "19" ? i.props.ref : i.ref;
}
function Pn(i) {
  return i === O.Fragment || i === /* @__PURE__ */ Symbol.for("react.fragment");
}
function ky(i) {
  return Pn(i.type);
}
let Wy = "span";
var Ni = ((i) => (i[i.None = 1] = "None", i[i.Focusable = 2] = "Focusable", i[i.Hidden = 4] = "Hidden", i))(Ni || {});
function Iy(i, f) {
  var o;
  let { features: r = 1, ...d } = i, p = { ref: f, "aria-hidden": (r & 2) === 2 ? !0 : (o = d["aria-hidden"]) != null ? o : void 0, hidden: (r & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(r & 4) === 4 && (r & 2) !== 2 && { display: "none" } } };
  return xe()({ ourProps: p, theirProps: d, slot: {}, defaultTag: Wy, name: "Hidden" });
}
let _r = se(Iy);
function Py(i) {
  return typeof i != "object" || i === null ? !1 : "nodeType" in i;
}
function Ql(i) {
  return Py(i) && "tagName" in i;
}
function da(i) {
  return Ql(i) && "accessKey" in i;
}
function Xl(i) {
  return Ql(i) && "tabIndex" in i;
}
function t1(i) {
  return Ql(i) && "style" in i;
}
function e1(i) {
  return da(i) && i.nodeName === "IFRAME";
}
function l1(i) {
  return da(i) && i.nodeName === "INPUT";
}
let yv = /* @__PURE__ */ Symbol();
function a1(i, f = !0) {
  return Object.assign(i, { [yv]: f });
}
function we(...i) {
  let f = O.useRef(i);
  O.useEffect(() => {
    f.current = i;
  }, [i]);
  let o = zt((r) => {
    for (let d of f.current) d != null && (typeof d == "function" ? d(r) : d.current = r);
  });
  return i.every((r) => r == null || r?.[yv]) ? void 0 : o;
}
let Mr = O.createContext(null);
Mr.displayName = "DescriptionContext";
function gv() {
  let i = O.useContext(Mr);
  if (i === null) {
    let f = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(f, gv), f;
  }
  return i;
}
function n1() {
  let [i, f] = O.useState([]);
  return [i.length > 0 ? i.join(" ") : void 0, O.useMemo(() => function(o) {
    let r = zt((p) => (f((T) => [...T, p]), () => f((T) => {
      let S = T.slice(), v = S.indexOf(p);
      return v !== -1 && S.splice(v, 1), S;
    }))), d = O.useMemo(() => ({ register: r, slot: o.slot, name: o.name, props: o.props, value: o.value }), [r, o.slot, o.name, o.props, o.value]);
    return W.createElement(Mr.Provider, { value: d }, o.children);
  }, [f])];
}
let u1 = "p";
function i1(i, f) {
  let o = O.useId(), r = wy(), { id: d = `headlessui-description-${o}`, ...p } = i, T = gv(), S = we(f);
  oe(() => T.register(d), [d, T.register]);
  let v = au({ ...T.slot, disabled: r || !1 }), g = { ref: S, ...T.props, id: d };
  return xe()({ ourProps: g, theirProps: p, slot: v, defaultTag: u1, name: T.name || "Description" });
}
let c1 = se(i1), f1 = Object.assign(c1, {});
var pv = ((i) => (i.Space = " ", i.Enter = "Enter", i.Escape = "Escape", i.Backspace = "Backspace", i.Delete = "Delete", i.ArrowLeft = "ArrowLeft", i.ArrowUp = "ArrowUp", i.ArrowRight = "ArrowRight", i.ArrowDown = "ArrowDown", i.Home = "Home", i.End = "End", i.PageUp = "PageUp", i.PageDown = "PageDown", i.Tab = "Tab", i))(pv || {});
let r1 = O.createContext(() => {
});
function o1({ value: i, children: f }) {
  return W.createElement(r1.Provider, { value: i }, f);
}
let bv = class extends Map {
  constructor(f) {
    super(), this.factory = f;
  }
  get(f) {
    let o = super.get(f);
    return o === void 0 && (o = this.factory(f), this.set(f, o)), o;
  }
};
var s1 = Object.defineProperty, d1 = (i, f, o) => f in i ? s1(i, f, { enumerable: !0, configurable: !0, writable: !0, value: o }) : i[f] = o, m1 = (i, f, o) => (d1(i, f + "", o), o), Sv = (i, f, o) => {
  if (!f.has(i)) throw TypeError("Cannot " + o);
}, He = (i, f, o) => (Sv(i, f, "read from private field"), o ? o.call(i) : f.get(i)), yr = (i, f, o) => {
  if (f.has(i)) throw TypeError("Cannot add the same private member more than once");
  f instanceof WeakSet ? f.add(i) : f.set(i, o);
}, Km = (i, f, o, r) => (Sv(i, f, "write to private field"), f.set(i, o), o), Ze, kn, Wn;
let v1 = class {
  constructor(f) {
    yr(this, Ze, {}), yr(this, kn, new bv(() => /* @__PURE__ */ new Set())), yr(this, Wn, /* @__PURE__ */ new Set()), m1(this, "disposables", ml()), Km(this, Ze, f), Ve.isServer && this.disposables.microTask(() => {
      this.dispose();
    });
  }
  dispose() {
    this.disposables.dispose();
  }
  get state() {
    return He(this, Ze);
  }
  subscribe(f, o) {
    if (Ve.isServer) return () => {
    };
    let r = { selector: f, callback: o, current: f(He(this, Ze)) };
    return He(this, Wn).add(r), this.disposables.add(() => {
      He(this, Wn).delete(r);
    });
  }
  on(f, o) {
    return Ve.isServer ? () => {
    } : (He(this, kn).get(f).add(o), this.disposables.add(() => {
      He(this, kn).get(f).delete(o);
    }));
  }
  send(f) {
    let o = this.reduce(He(this, Ze), f);
    if (o !== He(this, Ze)) {
      Km(this, Ze, o);
      for (let r of He(this, Wn)) {
        let d = r.selector(He(this, Ze));
        Ev(r.current, d) || (r.current = d, r.callback(d));
      }
      for (let r of He(this, kn).get(f.type)) r(He(this, Ze), f);
    }
  }
};
Ze = /* @__PURE__ */ new WeakMap(), kn = /* @__PURE__ */ new WeakMap(), Wn = /* @__PURE__ */ new WeakMap();
function Ev(i, f) {
  return Object.is(i, f) ? !0 : typeof i != "object" || i === null || typeof f != "object" || f === null ? !1 : Array.isArray(i) && Array.isArray(f) ? i.length !== f.length ? !1 : gr(i[Symbol.iterator](), f[Symbol.iterator]()) : i instanceof Map && f instanceof Map || i instanceof Set && f instanceof Set ? i.size !== f.size ? !1 : gr(i.entries(), f.entries()) : Jm(i) && Jm(f) ? gr(Object.entries(i)[Symbol.iterator](), Object.entries(f)[Symbol.iterator]()) : !1;
}
function gr(i, f) {
  do {
    let o = i.next(), r = f.next();
    if (o.done && r.done) return !0;
    if (o.done || r.done || !Object.is(o.value, r.value)) return !1;
  } while (!0);
}
function Jm(i) {
  if (Object.prototype.toString.call(i) !== "[object Object]") return !1;
  let f = Object.getPrototypeOf(i);
  return f === null || Object.getPrototypeOf(f) === null;
}
var h1 = Object.defineProperty, y1 = (i, f, o) => f in i ? h1(i, f, { enumerable: !0, configurable: !0, writable: !0, value: o }) : i[f] = o, $m = (i, f, o) => (y1(i, typeof f != "symbol" ? f + "" : f, o), o), g1 = ((i) => (i[i.Push = 0] = "Push", i[i.Pop = 1] = "Pop", i))(g1 || {});
let p1 = { 0(i, f) {
  let o = f.id, r = i.stack, d = i.stack.indexOf(o);
  if (d !== -1) {
    let p = i.stack.slice();
    return p.splice(d, 1), p.push(o), r = p, { ...i, stack: r };
  }
  return { ...i, stack: [...i.stack, o] };
}, 1(i, f) {
  let o = f.id, r = i.stack.indexOf(o);
  if (r === -1) return i;
  let d = i.stack.slice();
  return d.splice(r, 1), { ...i, stack: d };
} }, b1 = class _v extends v1 {
  constructor() {
    super(...arguments), $m(this, "actions", { push: (f) => this.send({ type: 0, id: f }), pop: (f) => this.send({ type: 1, id: f }) }), $m(this, "selectors", { isTop: (f, o) => f.stack[f.stack.length - 1] === o, inStack: (f, o) => f.stack.includes(o) });
  }
  static new() {
    return new _v({ stack: [] });
  }
  reduce(f, o) {
    return dl(o.type, p1, f, o);
  }
};
const Tv = new bv(() => b1.new());
var pr = { exports: {} }, br = {};
var Fm;
function S1() {
  if (Fm) return br;
  Fm = 1;
  var i = Ri();
  function f(v, g) {
    return v === g && (v !== 0 || 1 / v === 1 / g) || v !== v && g !== g;
  }
  var o = typeof Object.is == "function" ? Object.is : f, r = i.useSyncExternalStore, d = i.useRef, p = i.useEffect, T = i.useMemo, S = i.useDebugValue;
  return br.useSyncExternalStoreWithSelector = function(v, g, H, R, B) {
    var q = d(null);
    if (q.current === null) {
      var j = { hasValue: !1, value: null };
      q.current = j;
    } else j = q.current;
    q = T(
      function() {
        function Z(vt) {
          if (!F) {
            if (F = !0, I = vt, vt = R(vt), B !== void 0 && j.hasValue) {
              var ht = j.value;
              if (B(ht, vt))
                return K = ht;
            }
            return K = vt;
          }
          if (ht = K, o(I, vt)) return ht;
          var J = R(vt);
          return B !== void 0 && B(ht, J) ? (I = vt, ht) : (I = vt, K = J);
        }
        var F = !1, I, K, lt = H === void 0 ? null : H;
        return [
          function() {
            return Z(g());
          },
          lt === null ? void 0 : function() {
            return Z(lt());
          }
        ];
      },
      [g, H, R, B]
    );
    var X = r(v, q[0], q[1]);
    return p(
      function() {
        j.hasValue = !0, j.value = X;
      },
      [X]
    ), S(X), X;
  }, br;
}
var km;
function E1() {
  return km || (km = 1, pr.exports = S1()), pr.exports;
}
var _1 = E1();
function Av(i, f, o = Ev) {
  return _1.useSyncExternalStoreWithSelector(zt((r) => i.subscribe(T1, r)), zt(() => i.state), zt(() => i.state), zt(f), o);
}
function T1(i) {
  return i;
}
function nu(i, f) {
  let o = O.useId(), r = Tv.get(f), [d, p] = Av(r, O.useCallback((T) => [r.selectors.isTop(T, o), r.selectors.inStack(T, o)], [r, o]));
  return oe(() => {
    if (i) return r.actions.push(o), () => r.actions.pop(o);
  }, [r, i, o]), i ? p ? d : !0 : !1;
}
let Tr = /* @__PURE__ */ new Map(), tu = /* @__PURE__ */ new Map();
function Wm(i) {
  var f;
  let o = (f = tu.get(i)) != null ? f : 0;
  return tu.set(i, o + 1), o !== 0 ? () => Im(i) : (Tr.set(i, { "aria-hidden": i.getAttribute("aria-hidden"), inert: i.inert }), i.setAttribute("aria-hidden", "true"), i.inert = !0, () => Im(i));
}
function Im(i) {
  var f;
  let o = (f = tu.get(i)) != null ? f : 1;
  if (o === 1 ? tu.delete(i) : tu.set(i, o - 1), o !== 1) return;
  let r = Tr.get(i);
  r && (r["aria-hidden"] === null ? i.removeAttribute("aria-hidden") : i.setAttribute("aria-hidden", r["aria-hidden"]), i.inert = r.inert, Tr.delete(i));
}
function A1(i, { allowed: f, disallowed: o } = {}) {
  let r = nu(i, "inert-others");
  oe(() => {
    var d, p;
    if (!r) return;
    let T = ml();
    for (let v of (d = o?.()) != null ? d : []) v && T.add(Wm(v));
    let S = (p = f?.()) != null ? p : [];
    for (let v of S) {
      if (!v) continue;
      let g = lu(v);
      if (!g) continue;
      let H = v.parentElement;
      for (; H && H !== g.body; ) {
        for (let R of H.children) S.some((B) => R.contains(B)) || T.add(Wm(R));
        H = H.parentElement;
      }
    }
    return T.dispose;
  }, [r, f, o]);
}
function z1(i, f, o) {
  let r = ma((d) => {
    let p = d.getBoundingClientRect();
    p.x === 0 && p.y === 0 && p.width === 0 && p.height === 0 && o();
  });
  O.useEffect(() => {
    if (!i) return;
    let d = f === null ? null : da(f) ? f : f.current;
    if (!d) return;
    let p = ml();
    if (typeof ResizeObserver < "u") {
      let T = new ResizeObserver(() => r.current(d));
      T.observe(d), p.add(() => T.disconnect());
    }
    if (typeof IntersectionObserver < "u") {
      let T = new IntersectionObserver(() => r.current(d));
      T.observe(d), p.add(() => T.disconnect());
    }
    return () => p.dispose();
  }, [f, r, i]);
}
let Ui = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "details>summary", "textarea:not([disabled])"].map((i) => `${i}:not([tabindex='-1'])`).join(","), O1 = ["[data-autofocus]"].map((i) => `${i}:not([tabindex='-1'])`).join(",");
var ol = ((i) => (i[i.First = 1] = "First", i[i.Previous = 2] = "Previous", i[i.Next = 4] = "Next", i[i.Last = 8] = "Last", i[i.WrapAround = 16] = "WrapAround", i[i.NoScroll = 32] = "NoScroll", i[i.AutoFocus = 64] = "AutoFocus", i))(ol || {}), Ar = ((i) => (i[i.Error = 0] = "Error", i[i.Overflow = 1] = "Overflow", i[i.Success = 2] = "Success", i[i.Underflow = 3] = "Underflow", i))(Ar || {}), M1 = ((i) => (i[i.Previous = -1] = "Previous", i[i.Next = 1] = "Next", i))(M1 || {});
function D1(i = document.body) {
  return i == null ? [] : Array.from(i.querySelectorAll(Ui)).sort((f, o) => Math.sign((f.tabIndex || Number.MAX_SAFE_INTEGER) - (o.tabIndex || Number.MAX_SAFE_INTEGER)));
}
function C1(i = document.body) {
  return i == null ? [] : Array.from(i.querySelectorAll(O1)).sort((f, o) => Math.sign((f.tabIndex || Number.MAX_SAFE_INTEGER) - (o.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var zv = ((i) => (i[i.Strict = 0] = "Strict", i[i.Loose = 1] = "Loose", i))(zv || {});
function N1(i, f = 0) {
  var o;
  return i === ((o = lu(i)) == null ? void 0 : o.body) ? !1 : dl(f, { 0() {
    return i.matches(Ui);
  }, 1() {
    let r = i;
    for (; r !== null; ) {
      if (r.matches(Ui)) return !0;
      r = r.parentElement;
    }
    return !1;
  } });
}
var U1 = ((i) => (i[i.Keyboard = 0] = "Keyboard", i[i.Mouse = 1] = "Mouse", i))(U1 || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (i) => {
  i.metaKey || i.altKey || i.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (i) => {
  i.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : i.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function sl(i) {
  i?.focus({ preventScroll: !0 });
}
let R1 = ["textarea", "input"].join(",");
function H1(i) {
  var f, o;
  return (o = (f = i?.matches) == null ? void 0 : f.call(i, R1)) != null ? o : !1;
}
function x1(i, f = (o) => o) {
  return i.slice().sort((o, r) => {
    let d = f(o), p = f(r);
    if (d === null || p === null) return 0;
    let T = d.compareDocumentPosition(p);
    return T & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : T & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function eu(i, f, { sorted: o = !0, relativeTo: r = null, skipElements: d = [] } = {}) {
  let p = Array.isArray(i) ? i.length > 0 ? Sr(i[0]) : document : Sr(i), T = Array.isArray(i) ? o ? x1(i) : i : f & 64 ? C1(i) : D1(i);
  d.length > 0 && T.length > 1 && (T = T.filter((q) => !d.some((j) => j != null && "current" in j ? j?.current === q : j === q))), r = r ?? p?.activeElement;
  let S = (() => {
    if (f & 5) return 1;
    if (f & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), v = (() => {
    if (f & 1) return 0;
    if (f & 2) return Math.max(0, T.indexOf(r)) - 1;
    if (f & 4) return Math.max(0, T.indexOf(r)) + 1;
    if (f & 8) return T.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), g = f & 32 ? { preventScroll: !0 } : {}, H = 0, R = T.length, B;
  do {
    if (H >= R || H + R <= 0) return 0;
    let q = v + H;
    if (f & 16) q = (q + R) % R;
    else {
      if (q < 0) return 3;
      if (q >= R) return 1;
    }
    B = T[q], B?.focus(g), H += S;
  } while (B !== vv(B));
  return f & 6 && H1(B) && B.select(), 2;
}
function Ov() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function j1() {
  return /Android/gi.test(window.navigator.userAgent);
}
function Pm() {
  return Ov() || j1();
}
function Oi(i, f, o, r) {
  let d = ma(o);
  O.useEffect(() => {
    if (!i) return;
    function p(T) {
      d.current(T);
    }
    return document.addEventListener(f, p, r), () => document.removeEventListener(f, p, r);
  }, [i, f, r]);
}
function Mv(i, f, o, r) {
  let d = ma(o);
  O.useEffect(() => {
    if (!i) return;
    function p(T) {
      d.current(T);
    }
    return window.addEventListener(f, p, r), () => window.removeEventListener(f, p, r);
  }, [i, f, r]);
}
const tv = 30;
function B1(i, f, o) {
  let r = ma(o), d = O.useCallback(function(S, v) {
    if (S.defaultPrevented) return;
    let g = v(S);
    if (g === null || !g.getRootNode().contains(g) || !g.isConnected) return;
    let H = (function R(B) {
      return typeof B == "function" ? R(B()) : Array.isArray(B) || B instanceof Set ? B : [B];
    })(f);
    for (let R of H) if (R !== null && (R.contains(g) || S.composed && S.composedPath().includes(R))) return;
    return !N1(g, zv.Loose) && g.tabIndex !== -1 && S.preventDefault(), r.current(S, g);
  }, [r, f]), p = O.useRef(null);
  Oi(i, "pointerdown", (S) => {
    var v, g;
    Pm() || (p.current = ((g = (v = S.composedPath) == null ? void 0 : v.call(S)) == null ? void 0 : g[0]) || S.target);
  }, !0), Oi(i, "pointerup", (S) => {
    if (Pm() || !p.current) return;
    let v = p.current;
    return p.current = null, d(S, () => v);
  }, !0);
  let T = O.useRef({ x: 0, y: 0 });
  Oi(i, "touchstart", (S) => {
    T.current.x = S.touches[0].clientX, T.current.y = S.touches[0].clientY;
  }, !0), Oi(i, "touchend", (S) => {
    let v = { x: S.changedTouches[0].clientX, y: S.changedTouches[0].clientY };
    if (!(Math.abs(v.x - T.current.x) >= tv || Math.abs(v.y - T.current.y) >= tv)) return d(S, () => Xl(S.target) ? S.target : null);
  }, !0), Mv(i, "blur", (S) => d(S, () => e1(window.document.activeElement) ? window.document.activeElement : null), !0);
}
function Dr(...i) {
  return O.useMemo(() => lu(...i), [...i]);
}
function Dv(i, f, o, r) {
  let d = ma(o);
  O.useEffect(() => {
    i = i ?? window;
    function p(T) {
      d.current(T);
    }
    return i.addEventListener(f, p, r), () => i.removeEventListener(f, p, r);
  }, [i, f, r]);
}
function q1(i) {
  return O.useSyncExternalStore(i.subscribe, i.getSnapshot, i.getSnapshot);
}
function Y1(i, f) {
  let o = i(), r = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return o;
  }, subscribe(d) {
    return r.add(d), () => r.delete(d);
  }, dispatch(d, ...p) {
    let T = f[d].call(o, ...p);
    T && (o = T, r.forEach((S) => S()));
  } };
}
function L1() {
  let i;
  return { before({ doc: f }) {
    var o;
    let r = f.documentElement, d = (o = f.defaultView) != null ? o : window;
    i = Math.max(0, d.innerWidth - r.clientWidth);
  }, after({ doc: f, d: o }) {
    let r = f.documentElement, d = Math.max(0, r.clientWidth - r.offsetWidth), p = Math.max(0, i - d);
    o.style(r, "paddingRight", `${p}px`);
  } };
}
function G1() {
  return Ov() ? { before({ doc: i, d: f, meta: o }) {
    function r(d) {
      for (let p of o().containers) for (let T of p()) if (T.contains(d)) return !0;
      return !1;
    }
    f.microTask(() => {
      var d;
      if (window.getComputedStyle(i.documentElement).scrollBehavior !== "auto") {
        let S = ml();
        S.style(i.documentElement, "scrollBehavior", "auto"), f.add(() => f.microTask(() => S.dispose()));
      }
      let p = (d = window.scrollY) != null ? d : window.pageYOffset, T = null;
      f.addEventListener(i, "click", (S) => {
        if (Xl(S.target)) try {
          let v = S.target.closest("a");
          if (!v) return;
          let { hash: g } = new URL(v.href), H = i.querySelector(g);
          Xl(H) && !r(H) && (T = H);
        } catch {
        }
      }, !0), f.group((S) => {
        f.addEventListener(i, "touchstart", (v) => {
          if (S.dispose(), Xl(v.target) && t1(v.target)) if (r(v.target)) {
            let g = v.target;
            for (; g.parentElement && r(g.parentElement); ) g = g.parentElement;
            S.style(g, "overscrollBehavior", "contain");
          } else S.style(v.target, "touchAction", "none");
        });
      }), f.addEventListener(i, "touchmove", (S) => {
        if (Xl(S.target)) {
          if (l1(S.target)) return;
          if (r(S.target)) {
            let v = S.target;
            for (; v.parentElement && v.dataset.headlessuiPortal !== "" && !(v.scrollHeight > v.clientHeight || v.scrollWidth > v.clientWidth); ) v = v.parentElement;
            v.dataset.headlessuiPortal === "" && S.preventDefault();
          } else S.preventDefault();
        }
      }, { passive: !1 }), f.add(() => {
        var S;
        let v = (S = window.scrollY) != null ? S : window.pageYOffset;
        p !== v && window.scrollTo(0, p), T && T.isConnected && (T.scrollIntoView({ block: "nearest" }), T = null);
      });
    });
  } } : {};
}
function X1() {
  return { before({ doc: i, d: f }) {
    f.style(i.documentElement, "overflow", "hidden");
  } };
}
function ev(i) {
  let f = {};
  for (let o of i) Object.assign(f, o(f));
  return f;
}
let sa = Y1(() => /* @__PURE__ */ new Map(), { PUSH(i, f) {
  var o;
  let r = (o = this.get(i)) != null ? o : { doc: i, count: 0, d: ml(), meta: /* @__PURE__ */ new Set(), computedMeta: {} };
  return r.count++, r.meta.add(f), r.computedMeta = ev(r.meta), this.set(i, r), this;
}, POP(i, f) {
  let o = this.get(i);
  return o && (o.count--, o.meta.delete(f), o.computedMeta = ev(o.meta)), this;
}, SCROLL_PREVENT(i) {
  let f = { doc: i.doc, d: i.d, meta() {
    return i.computedMeta;
  } }, o = [G1(), L1(), X1()];
  o.forEach(({ before: r }) => r?.(f)), o.forEach(({ after: r }) => r?.(f));
}, SCROLL_ALLOW({ d: i }) {
  i.dispose();
}, TEARDOWN({ doc: i }) {
  this.delete(i);
} });
sa.subscribe(() => {
  let i = sa.getSnapshot(), f = /* @__PURE__ */ new Map();
  for (let [o] of i) f.set(o, o.documentElement.style.overflow);
  for (let o of i.values()) {
    let r = f.get(o.doc) === "hidden", d = o.count !== 0;
    (d && !r || !d && r) && sa.dispatch(o.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", o), o.count === 0 && sa.dispatch("TEARDOWN", o);
  }
});
function Q1(i, f, o = () => ({ containers: [] })) {
  let r = q1(sa), d = f ? r.get(f) : void 0, p = d ? d.count > 0 : !1;
  return oe(() => {
    if (!(!f || !i)) return sa.dispatch("PUSH", f, o), () => sa.dispatch("POP", f, o);
  }, [i, f]), p;
}
function Z1(i, f, o = () => [document.body]) {
  let r = nu(i, "scroll-lock");
  Q1(r, f, (d) => {
    var p;
    return { containers: [...(p = d.containers) != null ? p : [], o] };
  });
}
function V1(i = 0) {
  let [f, o] = O.useState(i), r = O.useCallback((v) => o(v), []), d = O.useCallback((v) => o((g) => g | v), []), p = O.useCallback((v) => (f & v) === v, [f]), T = O.useCallback((v) => o((g) => g & ~v), []), S = O.useCallback((v) => o((g) => g ^ v), []);
  return { flags: f, setFlag: r, addFlag: d, hasFlag: p, removeFlag: T, toggleFlag: S };
}
var lv, av;
typeof process < "u" && typeof globalThis < "u" && typeof Element < "u" && ((lv = process == null ? void 0 : process.env) == null ? void 0 : lv.NODE_ENV) === "test" && typeof ((av = Element?.prototype) == null ? void 0 : av.getAnimations) > "u" && (Element.prototype.getAnimations = function() {
  return console.warn(["Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.", "Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.", "", "Example usage:", "```js", "import { mockAnimationsApi } from 'jsdom-testing-mocks'", "mockAnimationsApi()", "```"].join(`
`)), [];
});
var w1 = ((i) => (i[i.None = 0] = "None", i[i.Closed = 1] = "Closed", i[i.Enter = 2] = "Enter", i[i.Leave = 4] = "Leave", i))(w1 || {});
function K1(i) {
  let f = {};
  for (let o in i) i[o] === !0 && (f[`data-${o}`] = "");
  return f;
}
function J1(i, f, o, r) {
  let [d, p] = O.useState(o), { hasFlag: T, addFlag: S, removeFlag: v } = V1(i && d ? 3 : 0), g = O.useRef(!1), H = O.useRef(!1), R = xi();
  return oe(() => {
    var B;
    if (i) {
      if (o && p(!0), !f) {
        o && S(3);
        return;
      }
      return (B = r?.start) == null || B.call(r, o), $1(f, { inFlight: g, prepare() {
        H.current ? H.current = !1 : H.current = g.current, g.current = !0, !H.current && (o ? (S(3), v(4)) : (S(4), v(2)));
      }, run() {
        H.current ? o ? (v(3), S(4)) : (v(4), S(3)) : o ? v(1) : S(1);
      }, done() {
        var q;
        H.current && W1(f) || (g.current = !1, v(7), o || p(!1), (q = r?.end) == null || q.call(r, o));
      } });
    }
  }, [i, o, f, R]), i ? [d, { closed: T(1), enter: T(2), leave: T(4), transition: T(2) || T(4) }] : [o, { closed: void 0, enter: void 0, leave: void 0, transition: void 0 }];
}
function $1(i, { prepare: f, run: o, done: r, inFlight: d }) {
  let p = ml();
  return k1(i, { prepare: f, inFlight: d }), p.nextFrame(() => {
    o(), p.requestAnimationFrame(() => {
      p.add(F1(i, r));
    });
  }), p.dispose;
}
function F1(i, f) {
  var o, r;
  let d = ml();
  if (!i) return d.dispose;
  let p = !1;
  d.add(() => {
    p = !0;
  });
  let T = (r = (o = i.getAnimations) == null ? void 0 : o.call(i).filter((S) => S instanceof CSSTransition)) != null ? r : [];
  return T.length === 0 ? (f(), d.dispose) : (Promise.allSettled(T.map((S) => S.finished)).then(() => {
    p || f();
  }), d.dispose);
}
function k1(i, { inFlight: f, prepare: o }) {
  if (f != null && f.current) {
    o();
    return;
  }
  let r = i.style.transition;
  i.style.transition = "none", o(), i.offsetHeight, i.style.transition = r;
}
function W1(i) {
  var f, o;
  return ((o = (f = i.getAnimations) == null ? void 0 : f.call(i)) != null ? o : []).some((r) => r instanceof CSSTransition && r.playState !== "finished");
}
function Cr(i, f) {
  let o = O.useRef([]), r = zt(i);
  O.useEffect(() => {
    let d = [...o.current];
    for (let [p, T] of f.entries()) if (o.current[p] !== T) {
      let S = r(f, d);
      return o.current = f, S;
    }
  }, [r, ...f]);
}
let ji = O.createContext(null);
ji.displayName = "OpenClosedContext";
var Ye = ((i) => (i[i.Open = 1] = "Open", i[i.Closed = 2] = "Closed", i[i.Closing = 4] = "Closing", i[i.Opening = 8] = "Opening", i))(Ye || {});
function Bi() {
  return O.useContext(ji);
}
function I1({ value: i, children: f }) {
  return W.createElement(ji.Provider, { value: i }, f);
}
function P1({ children: i }) {
  return W.createElement(ji.Provider, { value: null }, i);
}
function tg(i) {
  function f() {
    document.readyState !== "loading" && (i(), document.removeEventListener("DOMContentLoaded", f));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", f), f());
}
let Ll = [];
tg(() => {
  function i(f) {
    if (!Xl(f.target) || f.target === document.body || Ll[0] === f.target) return;
    let o = f.target;
    o = o.closest(Ui), Ll.unshift(o ?? f.target), Ll = Ll.filter((r) => r != null && r.isConnected), Ll.splice(10);
  }
  window.addEventListener("click", i, { capture: !0 }), window.addEventListener("mousedown", i, { capture: !0 }), window.addEventListener("focus", i, { capture: !0 }), document.body.addEventListener("click", i, { capture: !0 }), document.body.addEventListener("mousedown", i, { capture: !0 }), document.body.addEventListener("focus", i, { capture: !0 });
});
function Cv(i) {
  let f = zt(i), o = O.useRef(!1);
  O.useEffect(() => (o.current = !1, () => {
    o.current = !0, Hi(() => {
      o.current && f();
    });
  }), [f]);
}
let Nv = O.createContext(!1);
function eg() {
  return O.useContext(Nv);
}
function nv(i) {
  return W.createElement(Nv.Provider, { value: i.force }, i.children);
}
function lg(i) {
  let f = eg(), o = O.useContext(Rv), [r, d] = O.useState(() => {
    var p;
    if (!f && o !== null) return (p = o.current) != null ? p : null;
    if (Ve.isServer) return null;
    let T = i?.getElementById("headlessui-portal-root");
    if (T) return T;
    if (i === null) return null;
    let S = i.createElement("div");
    return S.setAttribute("id", "headlessui-portal-root"), i.body.appendChild(S);
  });
  return O.useEffect(() => {
    r !== null && (i != null && i.body.contains(r) || i == null || i.body.appendChild(r));
  }, [r, i]), O.useEffect(() => {
    f || o !== null && d(o.current);
  }, [o, d, f]), r;
}
let Uv = O.Fragment, ag = se(function(i, f) {
  let { ownerDocument: o = null, ...r } = i, d = O.useRef(null), p = we(a1((B) => {
    d.current = B;
  }), f), T = Dr(d.current), S = o ?? T, v = lg(S), g = O.useContext(zr), H = xi(), R = xe();
  return Cv(() => {
    var B;
    v && v.childNodes.length <= 0 && ((B = v.parentElement) == null || B.removeChild(v));
  }), v ? Ly.createPortal(W.createElement("div", { "data-headlessui-portal": "", ref: (B) => {
    H.dispose(), g && B && H.add(g.register(B));
  } }, R({ ourProps: { ref: p }, theirProps: r, slot: {}, defaultTag: Uv, name: "Portal" })), v) : null;
});
function ng(i, f) {
  let o = we(f), { enabled: r = !0, ownerDocument: d, ...p } = i, T = xe();
  return r ? W.createElement(ag, { ...p, ownerDocument: d, ref: o }) : T({ ourProps: { ref: o }, theirProps: p, slot: {}, defaultTag: Uv, name: "Portal" });
}
let ug = O.Fragment, Rv = O.createContext(null);
function ig(i, f) {
  let { target: o, ...r } = i, d = { ref: we(f) }, p = xe();
  return W.createElement(Rv.Provider, { value: o }, p({ ourProps: d, theirProps: r, defaultTag: ug, name: "Popover.Group" }));
}
let zr = O.createContext(null);
function cg() {
  let i = O.useContext(zr), f = O.useRef([]), o = zt((p) => (f.current.push(p), i && i.register(p), () => r(p))), r = zt((p) => {
    let T = f.current.indexOf(p);
    T !== -1 && f.current.splice(T, 1), i && i.unregister(p);
  }), d = O.useMemo(() => ({ register: o, unregister: r, portals: f }), [o, r, f]);
  return [f, O.useMemo(() => function({ children: p }) {
    return W.createElement(zr.Provider, { value: d }, p);
  }, [d])];
}
let fg = se(ng), Hv = se(ig), rg = Object.assign(fg, { Group: Hv });
function og(i, f = typeof document < "u" ? document.defaultView : null, o) {
  let r = nu(i, "escape");
  Dv(f, "keydown", (d) => {
    r && (d.defaultPrevented || d.key === pv.Escape && o(d));
  });
}
function sg() {
  var i;
  let [f] = O.useState(() => typeof window < "u" && typeof window.matchMedia == "function" ? window.matchMedia("(pointer: coarse)") : null), [o, r] = O.useState((i = f?.matches) != null ? i : !1);
  return oe(() => {
    if (!f) return;
    function d(p) {
      r(p.matches);
    }
    return f.addEventListener("change", d), () => f.removeEventListener("change", d);
  }, [f]), o;
}
function dg({ defaultContainers: i = [], portals: f, mainTreeNode: o } = {}) {
  let r = zt(() => {
    var d, p;
    let T = lu(o), S = [];
    for (let v of i) v !== null && (Ql(v) ? S.push(v) : "current" in v && Ql(v.current) && S.push(v.current));
    if (f != null && f.current) for (let v of f.current) S.push(v);
    for (let v of (d = T?.querySelectorAll("html > *, body > *")) != null ? d : []) v !== document.body && v !== document.head && Ql(v) && v.id !== "headlessui-portal-root" && (o && (v.contains(o) || v.contains((p = o?.getRootNode()) == null ? void 0 : p.host)) || S.some((g) => v.contains(g)) || S.push(v));
    return S;
  });
  return { resolveContainers: r, contains: zt((d) => r().some((p) => p.contains(d))) };
}
let xv = O.createContext(null);
function uv({ children: i, node: f }) {
  let [o, r] = O.useState(null), d = jv(f ?? o);
  return W.createElement(xv.Provider, { value: d }, i, d === null && W.createElement(_r, { features: Ni.Hidden, ref: (p) => {
    var T, S;
    if (p) {
      for (let v of (S = (T = lu(p)) == null ? void 0 : T.querySelectorAll("html > *, body > *")) != null ? S : []) if (v !== document.body && v !== document.head && Ql(v) && v != null && v.contains(p)) {
        r(v);
        break;
      }
    }
  } }));
}
function jv(i = null) {
  var f;
  return (f = O.useContext(xv)) != null ? f : i;
}
function mg() {
  let i = typeof document > "u";
  return "useSyncExternalStore" in Lm ? ((f) => f.useSyncExternalStore)(Lm)(() => () => {
  }, () => !1, () => !i) : !1;
}
function qi() {
  let i = mg(), [f, o] = O.useState(Ve.isHandoffComplete);
  return f && Ve.isHandoffComplete === !1 && o(!1), O.useEffect(() => {
    f !== !0 && o(!0);
  }, [f]), O.useEffect(() => Ve.handoff(), []), i ? !1 : f;
}
function Nr() {
  let i = O.useRef(!1);
  return oe(() => (i.current = !0, () => {
    i.current = !1;
  }), []), i;
}
var In = ((i) => (i[i.Forwards = 0] = "Forwards", i[i.Backwards = 1] = "Backwards", i))(In || {});
function vg() {
  let i = O.useRef(0);
  return Mv(!0, "keydown", (f) => {
    f.key === "Tab" && (i.current = f.shiftKey ? 1 : 0);
  }, !0), i;
}
function Bv(i) {
  if (!i) return /* @__PURE__ */ new Set();
  if (typeof i == "function") return new Set(i());
  let f = /* @__PURE__ */ new Set();
  for (let o of i.current) Ql(o.current) && f.add(o.current);
  return f;
}
let hg = "div";
var oa = ((i) => (i[i.None = 0] = "None", i[i.InitialFocus = 1] = "InitialFocus", i[i.TabLock = 2] = "TabLock", i[i.FocusLock = 4] = "FocusLock", i[i.RestoreFocus = 8] = "RestoreFocus", i[i.AutoFocus = 16] = "AutoFocus", i))(oa || {});
function yg(i, f) {
  let o = O.useRef(null), r = we(o, f), { initialFocus: d, initialFocusFallback: p, containers: T, features: S = 15, ...v } = i;
  qi() || (S = 0);
  let g = Dr(o.current);
  Sg(S, { ownerDocument: g });
  let H = Eg(S, { ownerDocument: g, container: o, initialFocus: d, initialFocusFallback: p });
  _g(S, { ownerDocument: g, container: o, containers: T, previousActiveElement: H });
  let R = vg(), B = zt((I) => {
    if (!da(o.current)) return;
    let K = o.current;
    ((lt) => lt())(() => {
      dl(R.current, { [In.Forwards]: () => {
        eu(K, ol.First, { skipElements: [I.relatedTarget, p] });
      }, [In.Backwards]: () => {
        eu(K, ol.Last, { skipElements: [I.relatedTarget, p] });
      } });
    });
  }), q = nu(!!(S & 2), "focus-trap#tab-lock"), j = xi(), X = O.useRef(!1), Z = { ref: r, onKeyDown(I) {
    I.key == "Tab" && (X.current = !0, j.requestAnimationFrame(() => {
      X.current = !1;
    }));
  }, onBlur(I) {
    if (!(S & 4)) return;
    let K = Bv(T);
    da(o.current) && K.add(o.current);
    let lt = I.relatedTarget;
    Xl(lt) && lt.dataset.headlessuiFocusGuard !== "true" && (qv(K, lt) || (X.current ? eu(o.current, dl(R.current, { [In.Forwards]: () => ol.Next, [In.Backwards]: () => ol.Previous }) | ol.WrapAround, { relativeTo: I.target }) : Xl(I.target) && sl(I.target)));
  } }, F = xe();
  return W.createElement(W.Fragment, null, q && W.createElement(_r, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: B, features: Ni.Focusable }), F({ ourProps: Z, theirProps: v, defaultTag: hg, name: "FocusTrap" }), q && W.createElement(_r, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: B, features: Ni.Focusable }));
}
let gg = se(yg), pg = Object.assign(gg, { features: oa });
function bg(i = !0) {
  let f = O.useRef(Ll.slice());
  return Cr(([o], [r]) => {
    r === !0 && o === !1 && Hi(() => {
      f.current.splice(0);
    }), r === !1 && o === !0 && (f.current = Ll.slice());
  }, [i, Ll, f]), zt(() => {
    var o;
    return (o = f.current.find((r) => r != null && r.isConnected)) != null ? o : null;
  });
}
function Sg(i, { ownerDocument: f }) {
  let o = !!(i & 8), r = bg(o);
  Cr(() => {
    o || Zy(f?.body) && sl(r());
  }, [o]), Cv(() => {
    o && sl(r());
  });
}
function Eg(i, { ownerDocument: f, container: o, initialFocus: r, initialFocusFallback: d }) {
  let p = O.useRef(null), T = nu(!!(i & 1), "focus-trap#initial-focus"), S = Nr();
  return Cr(() => {
    if (i === 0) return;
    if (!T) {
      d != null && d.current && sl(d.current);
      return;
    }
    let v = o.current;
    v && Hi(() => {
      if (!S.current) return;
      let g = f?.activeElement;
      if (r != null && r.current) {
        if (r?.current === g) {
          p.current = g;
          return;
        }
      } else if (v.contains(g)) {
        p.current = g;
        return;
      }
      if (r != null && r.current) sl(r.current);
      else {
        if (i & 16) {
          if (eu(v, ol.First | ol.AutoFocus) !== Ar.Error) return;
        } else if (eu(v, ol.First) !== Ar.Error) return;
        if (d != null && d.current && (sl(d.current), f?.activeElement === d.current)) return;
        console.warn("There are no focusable elements inside the <FocusTrap />");
      }
      p.current = f?.activeElement;
    });
  }, [d, T, i]), p;
}
function _g(i, { ownerDocument: f, container: o, containers: r, previousActiveElement: d }) {
  let p = Nr(), T = !!(i & 4);
  Dv(f?.defaultView, "focus", (S) => {
    if (!T || !p.current) return;
    let v = Bv(r);
    da(o.current) && v.add(o.current);
    let g = d.current;
    if (!g) return;
    let H = S.target;
    da(H) ? qv(v, H) ? (d.current = H, sl(H)) : (S.preventDefault(), S.stopPropagation(), sl(g)) : sl(d.current);
  }, !0);
}
function qv(i, f) {
  for (let o of i) if (o.contains(f)) return !0;
  return !1;
}
function Yv(i) {
  var f;
  return !!(i.enter || i.enterFrom || i.enterTo || i.leave || i.leaveFrom || i.leaveTo) || !Pn((f = i.as) != null ? f : Gv) || W.Children.count(i.children) === 1;
}
let Yi = O.createContext(null);
Yi.displayName = "TransitionContext";
var Tg = ((i) => (i.Visible = "visible", i.Hidden = "hidden", i))(Tg || {});
function Ag() {
  let i = O.useContext(Yi);
  if (i === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return i;
}
function zg() {
  let i = O.useContext(Li);
  if (i === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return i;
}
let Li = O.createContext(null);
Li.displayName = "NestingContext";
function Gi(i) {
  return "children" in i ? Gi(i.children) : i.current.filter(({ el: f }) => f.current !== null).filter(({ state: f }) => f === "visible").length > 0;
}
function Lv(i, f) {
  let o = ma(i), r = O.useRef([]), d = Nr(), p = xi(), T = zt((q, j = Gl.Hidden) => {
    let X = r.current.findIndex(({ el: Z }) => Z === q);
    X !== -1 && (dl(j, { [Gl.Unmount]() {
      r.current.splice(X, 1);
    }, [Gl.Hidden]() {
      r.current[X].state = "hidden";
    } }), p.microTask(() => {
      var Z;
      !Gi(r) && d.current && ((Z = o.current) == null || Z.call(o));
    }));
  }), S = zt((q) => {
    let j = r.current.find(({ el: X }) => X === q);
    return j ? j.state !== "visible" && (j.state = "visible") : r.current.push({ el: q, state: "visible" }), () => T(q, Gl.Unmount);
  }), v = O.useRef([]), g = O.useRef(Promise.resolve()), H = O.useRef({ enter: [], leave: [] }), R = zt((q, j, X) => {
    v.current.splice(0), f && (f.chains.current[j] = f.chains.current[j].filter(([Z]) => Z !== q)), f?.chains.current[j].push([q, new Promise((Z) => {
      v.current.push(Z);
    })]), f?.chains.current[j].push([q, new Promise((Z) => {
      Promise.all(H.current[j].map(([F, I]) => I)).then(() => Z());
    })]), j === "enter" ? g.current = g.current.then(() => f?.wait.current).then(() => X(j)) : X(j);
  }), B = zt((q, j, X) => {
    Promise.all(H.current[j].splice(0).map(([Z, F]) => F)).then(() => {
      var Z;
      (Z = v.current.shift()) == null || Z();
    }).then(() => X(j));
  });
  return O.useMemo(() => ({ children: r, register: S, unregister: T, onStart: R, onStop: B, wait: g, chains: H }), [S, T, r, R, B, H, g]);
}
let Gv = O.Fragment, Xv = Ci.RenderStrategy;
function Og(i, f) {
  var o, r;
  let { transition: d = !0, beforeEnter: p, afterEnter: T, beforeLeave: S, afterLeave: v, enter: g, enterFrom: H, enterTo: R, entered: B, leave: q, leaveFrom: j, leaveTo: X, ...Z } = i, [F, I] = O.useState(null), K = O.useRef(null), lt = Yv(i), vt = we(...lt ? [K, f, I] : f === null ? [] : [f]), ht = (o = Z.unmount) == null || o ? Gl.Unmount : Gl.Hidden, { show: J, appear: Xt, initial: ee } = Ag(), [Rt, Vt] = O.useState(J ? "visible" : "hidden"), jt = zg(), { register: Qt, unregister: Jt } = jt;
  oe(() => Qt(K), [Qt, K]), oe(() => {
    if (ht === Gl.Hidden && K.current) {
      if (J && Rt !== "visible") {
        Vt("visible");
        return;
      }
      return dl(Rt, { hidden: () => Jt(K), visible: () => Qt(K) });
    }
  }, [Rt, K, Qt, Jt, J, ht]);
  let $t = qi();
  oe(() => {
    if (lt && $t && Rt === "visible" && K.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [K, Rt, $t, lt]);
  let M = ee && !Xt, Y = Xt && J && ee, V = O.useRef(!1), ft = Lv(() => {
    V.current || (Vt("hidden"), Jt(K));
  }, jt), st = zt((ot) => {
    V.current = !0;
    let Bt = ot ? "enter" : "leave";
    ft.onStart(K, Bt, (Tt) => {
      Tt === "enter" ? p?.() : Tt === "leave" && S?.();
    });
  }), h = zt((ot) => {
    let Bt = ot ? "enter" : "leave";
    V.current = !1, ft.onStop(K, Bt, (Tt) => {
      Tt === "enter" ? T?.() : Tt === "leave" && v?.();
    }), Bt === "leave" && !Gi(ft) && (Vt("hidden"), Jt(K));
  });
  O.useEffect(() => {
    lt && d || (st(J), h(J));
  }, [J, lt, d]);
  let N = !(!d || !lt || !$t || M), [, x] = J1(N, F, J, { start: st, end: h }), L = ra({ ref: vt, className: ((r = Er(Z.className, Y && g, Y && H, x.enter && g, x.enter && x.closed && H, x.enter && !x.closed && R, x.leave && q, x.leave && !x.closed && j, x.leave && x.closed && X, !x.transition && J && B)) == null ? void 0 : r.trim()) || void 0, ...K1(x) }), k = 0;
  Rt === "visible" && (k |= Ye.Open), Rt === "hidden" && (k |= Ye.Closed), J && Rt === "hidden" && (k |= Ye.Opening), !J && Rt === "visible" && (k |= Ye.Closing);
  let at = xe();
  return W.createElement(Li.Provider, { value: ft }, W.createElement(I1, { value: k }, at({ ourProps: L, theirProps: Z, defaultTag: Gv, features: Xv, visible: Rt === "visible", name: "Transition.Child" })));
}
function Mg(i, f) {
  let { show: o, appear: r = !1, unmount: d = !0, ...p } = i, T = O.useRef(null), S = Yv(i), v = we(...S ? [T, f] : f === null ? [] : [f]);
  qi();
  let g = Bi();
  if (o === void 0 && g !== null && (o = (g & Ye.Open) === Ye.Open), o === void 0) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [H, R] = O.useState(o ? "visible" : "hidden"), B = Lv(() => {
    o || R("hidden");
  }), [q, j] = O.useState(!0), X = O.useRef([o]);
  oe(() => {
    q !== !1 && X.current[X.current.length - 1] !== o && (X.current.push(o), j(!1));
  }, [X, o]);
  let Z = O.useMemo(() => ({ show: o, appear: r, initial: q }), [o, r, q]);
  oe(() => {
    o ? R("visible") : !Gi(B) && T.current !== null && R("hidden");
  }, [o, B]);
  let F = { unmount: d }, I = zt(() => {
    var vt;
    q && j(!1), (vt = i.beforeEnter) == null || vt.call(i);
  }), K = zt(() => {
    var vt;
    q && j(!1), (vt = i.beforeLeave) == null || vt.call(i);
  }), lt = xe();
  return W.createElement(Li.Provider, { value: B }, W.createElement(Yi.Provider, { value: Z }, lt({ ourProps: { ...F, as: O.Fragment, children: W.createElement(Qv, { ref: v, ...F, ...p, beforeEnter: I, beforeLeave: K }) }, theirProps: {}, defaultTag: O.Fragment, features: Xv, visible: H === "visible", name: "Transition" })));
}
function Dg(i, f) {
  let o = O.useContext(Yi) !== null, r = Bi() !== null;
  return W.createElement(W.Fragment, null, !o && r ? W.createElement(Or, { ref: f, ...i }) : W.createElement(Qv, { ref: f, ...i }));
}
let Or = se(Mg), Qv = se(Og), Ur = se(Dg), Di = Object.assign(Or, { Child: Ur, Root: Or });
var Cg = ((i) => (i[i.Open = 0] = "Open", i[i.Closed = 1] = "Closed", i))(Cg || {}), Ng = ((i) => (i[i.SetTitleId = 0] = "SetTitleId", i))(Ng || {});
let Ug = { 0(i, f) {
  return i.titleId === f.id ? i : { ...i, titleId: f.id };
} }, Rr = O.createContext(null);
Rr.displayName = "DialogContext";
function Xi(i) {
  let f = O.useContext(Rr);
  if (f === null) {
    let o = new Error(`<${i} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, Xi), o;
  }
  return f;
}
function Rg(i, f) {
  return dl(f.type, Ug, i, f);
}
let iv = se(function(i, f) {
  let o = O.useId(), { id: r = `headlessui-dialog-${o}`, open: d, onClose: p, initialFocus: T, role: S = "dialog", autoFocus: v = !0, __demoMode: g = !1, unmount: H = !1, ...R } = i, B = O.useRef(!1);
  S = (function() {
    return S === "dialog" || S === "alertdialog" ? S : (B.current || (B.current = !0, console.warn(`Invalid role [${S}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog");
  })();
  let q = Bi();
  d === void 0 && q !== null && (d = (q & Ye.Open) === Ye.Open);
  let j = O.useRef(null), X = we(j, f), Z = Dr(j.current), F = d ? 0 : 1, [I, K] = O.useReducer(Rg, { titleId: null, descriptionId: null, panelRef: O.createRef() }), lt = zt(() => p(!1)), vt = zt((x) => K({ type: 0, id: x })), ht = qi() ? F === 0 : !1, [J, Xt] = cg(), ee = { get current() {
    var x;
    return (x = I.panelRef.current) != null ? x : j.current;
  } }, Rt = jv(), { resolveContainers: Vt } = dg({ mainTreeNode: Rt, portals: J, defaultContainers: [ee] }), jt = q !== null ? (q & Ye.Closing) === Ye.Closing : !1;
  A1(g || jt ? !1 : ht, { allowed: zt(() => {
    var x, L;
    return [(L = (x = j.current) == null ? void 0 : x.closest("[data-headlessui-portal]")) != null ? L : null];
  }), disallowed: zt(() => {
    var x;
    return [(x = Rt?.closest("body > *:not(#headlessui-portal-root)")) != null ? x : null];
  }) });
  let Qt = Tv.get(null);
  oe(() => {
    if (ht) return Qt.actions.push(r), () => Qt.actions.pop(r);
  }, [Qt, r, ht]);
  let Jt = Av(Qt, O.useCallback((x) => Qt.selectors.isTop(x, r), [Qt, r]));
  B1(Jt, Vt, (x) => {
    x.preventDefault(), lt();
  }), og(Jt, Z?.defaultView, (x) => {
    x.preventDefault(), x.stopPropagation(), document.activeElement && "blur" in document.activeElement && typeof document.activeElement.blur == "function" && document.activeElement.blur(), lt();
  }), Z1(g || jt ? !1 : ht, Z, Vt), z1(ht, j, lt);
  let [$t, M] = n1(), Y = O.useMemo(() => [{ dialogState: F, close: lt, setTitleId: vt, unmount: H }, I], [F, lt, vt, H, I]), V = au({ open: F === 0 }), ft = { ref: X, id: r, role: S, tabIndex: -1, "aria-modal": g ? void 0 : F === 0 ? !0 : void 0, "aria-labelledby": I.titleId, "aria-describedby": $t, unmount: H }, st = !sg(), h = oa.None;
  ht && !g && (h |= oa.RestoreFocus, h |= oa.TabLock, v && (h |= oa.AutoFocus), st && (h |= oa.InitialFocus));
  let N = xe();
  return W.createElement(P1, null, W.createElement(nv, { force: !0 }, W.createElement(rg, null, W.createElement(Rr.Provider, { value: Y }, W.createElement(Hv, { target: j }, W.createElement(nv, { force: !1 }, W.createElement(M, { slot: V }, W.createElement(Xt, null, W.createElement(pg, { initialFocus: T, initialFocusFallback: j, containers: Vt, features: h }, W.createElement(o1, { value: lt }, N({ ourProps: ft, theirProps: R, slot: V, defaultTag: Hg, features: xg, visible: F === 0, name: "Dialog" })))))))))));
}), Hg = "div", xg = Ci.RenderStrategy | Ci.Static;
function jg(i, f) {
  let { transition: o = !1, open: r, ...d } = i, p = Bi(), T = i.hasOwnProperty("open") || p !== null, S = i.hasOwnProperty("onClose");
  if (!T && !S) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!T) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!S) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (!p && typeof i.open != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${i.open}`);
  if (typeof i.onClose != "function") throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${i.onClose}`);
  return (r !== void 0 || o) && !d.static ? W.createElement(uv, null, W.createElement(Di, { show: r, transition: o, unmount: d.unmount }, W.createElement(iv, { ref: f, ...d }))) : W.createElement(uv, null, W.createElement(iv, { ref: f, open: r, ...d }));
}
let Bg = "div";
function qg(i, f) {
  let o = O.useId(), { id: r = `headlessui-dialog-panel-${o}`, transition: d = !1, ...p } = i, [{ dialogState: T, unmount: S }, v] = Xi("Dialog.Panel"), g = we(f, v.panelRef), H = au({ open: T === 0 }), R = zt((Z) => {
    Z.stopPropagation();
  }), B = { ref: g, id: r, onClick: R }, q = d ? Ur : O.Fragment, j = d ? { unmount: S } : {}, X = xe();
  return W.createElement(q, { ...j }, X({ ourProps: B, theirProps: p, slot: H, defaultTag: Bg, name: "Dialog.Panel" }));
}
let Yg = "div";
function Lg(i, f) {
  let { transition: o = !1, ...r } = i, [{ dialogState: d, unmount: p }] = Xi("Dialog.Backdrop"), T = au({ open: d === 0 }), S = { ref: f, "aria-hidden": !0 }, v = o ? Ur : O.Fragment, g = o ? { unmount: p } : {}, H = xe();
  return W.createElement(v, { ...g }, H({ ourProps: S, theirProps: r, slot: T, defaultTag: Yg, name: "Dialog.Backdrop" }));
}
let Gg = "h2";
function Xg(i, f) {
  let o = O.useId(), { id: r = `headlessui-dialog-title-${o}`, ...d } = i, [{ dialogState: p, setTitleId: T }] = Xi("Dialog.Title"), S = we(f);
  O.useEffect(() => (T(r), () => T(null)), [r, T]);
  let v = au({ open: p === 0 }), g = { ref: S, id: r };
  return xe()({ ourProps: g, theirProps: d, slot: v, defaultTag: Gg, name: "Dialog.Title" });
}
let Qg = se(jg), Zg = se(qg);
se(Lg);
let Vg = se(Xg), Mi = Object.assign(Qg, { Panel: Zg, Title: Vg, Description: f1 });
const wg = "_container_lfa5t_2", Kg = "_openButton_lfa5t_7", Jg = "_modalOverlay_lfa5t_29", $g = "_backdrop_lfa5t_35", Fg = "_backdropEnter_lfa5t_42", kg = "_backdropEnterFrom_lfa5t_46", Wg = "_backdropEnterTo_lfa5t_50", Ig = "_backdropLeave_lfa5t_54", Pg = "_backdropLeaveFrom_lfa5t_58", tp = "_backdropLeaveTo_lfa5t_62", ep = "_modalContainer_lfa5t_67", lp = "_modalWrapper_lfa5t_73", ap = "_modalPanel_lfa5t_83", np = "_panelEnter_lfa5t_97", up = "_panelEnterFrom_lfa5t_101", ip = "_panelEnterTo_lfa5t_106", cp = "_panelLeave_lfa5t_111", fp = "_panelLeaveFrom_lfa5t_115", rp = "_panelLeaveTo_lfa5t_120", op = "_modalHeader_lfa5t_126", sp = "_modalTitle_lfa5t_130", dp = "_modalBody_lfa5t_138", mp = "_modalDescription_lfa5t_142", vp = "_modalContent_lfa5t_148", hp = "_modalActions_lfa5t_170", yp = "_closeButton_lfa5t_177", Ot = {
  container: wg,
  openButton: Kg,
  modalOverlay: Jg,
  backdrop: $g,
  backdropEnter: Fg,
  backdropEnterFrom: kg,
  backdropEnterTo: Wg,
  backdropLeave: Ig,
  backdropLeaveFrom: Pg,
  backdropLeaveTo: tp,
  modalContainer: ep,
  modalWrapper: lp,
  modalPanel: ap,
  panelEnter: np,
  panelEnterFrom: up,
  panelEnterTo: ip,
  panelLeave: cp,
  panelLeaveFrom: fp,
  panelLeaveTo: rp,
  modalHeader: op,
  modalTitle: sp,
  modalBody: dp,
  modalDescription: mp,
  modalContent: vp,
  modalActions: hp,
  closeButton: yp
}, gp = "._container_lfa5t_2{display:inline-block}._openButton_lfa5t_7{padding:.75rem 1.5rem;background-color:#6366f1;color:#fff;border:none;border-radius:8px;font-size:1rem;font-weight:500;cursor:pointer;transition:background-color .2s}._openButton_lfa5t_7:hover{background-color:#4f46e5}._openButton_lfa5t_7:focus{outline:2px solid #6366f1;outline-offset:2px}._modalOverlay_lfa5t_29{position:relative;z-index:50}._backdrop_lfa5t_35{position:fixed;inset:0;background-color:#00000080}._backdropEnter_lfa5t_42{transition:opacity .3s cubic-bezier(.4,0,.2,1)}._backdropEnterFrom_lfa5t_46{opacity:0}._backdropEnterTo_lfa5t_50{opacity:1}._backdropLeave_lfa5t_54{transition:opacity .2s cubic-bezier(.4,0,.2,1)}._backdropLeaveFrom_lfa5t_58{opacity:1}._backdropLeaveTo_lfa5t_62{opacity:0}._modalContainer_lfa5t_67{position:fixed;inset:0;overflow-y:auto}._modalWrapper_lfa5t_73{display:flex;min-height:100%;align-items:center;justify-content:center;padding:1rem;text-align:center}._modalPanel_lfa5t_83{width:100%;max-width:28rem;transform:scale(1);overflow:hidden;border-radius:12px;background-color:#fff;padding:1.5rem;text-align:left;box-shadow:0 20px 25px -5px #0000001a,0 10px 10px -5px #0000000a;transition:all .3s cubic-bezier(.4,0,.2,1)}._panelEnter_lfa5t_97{transition:all .3s cubic-bezier(.4,0,.2,1)}._panelEnterFrom_lfa5t_101{opacity:0;transform:scale(.95)}._panelEnterTo_lfa5t_106{opacity:1;transform:scale(1)}._panelLeave_lfa5t_111{transition:all .2s cubic-bezier(.4,0,.2,1)}._panelLeaveFrom_lfa5t_115{opacity:1;transform:scale(1)}._panelLeaveTo_lfa5t_120{opacity:0;transform:scale(.95)}._modalHeader_lfa5t_126{margin-bottom:1rem}._modalTitle_lfa5t_130{font-size:1.5rem;font-weight:700;color:#111827;margin:0}._modalBody_lfa5t_138{margin-top:.5rem}._modalDescription_lfa5t_142{font-size:.875rem;color:#6b7280;margin-bottom:1rem}._modalContent_lfa5t_148{margin-top:1rem}._modalContent_lfa5t_148 p{margin:0 0 .75rem;color:#374151;line-height:1.6}._modalContent_lfa5t_148 ul{margin:0;padding-left:1.5rem;color:#374151;line-height:1.8}._modalContent_lfa5t_148 li{margin-bottom:.25rem}._modalActions_lfa5t_170{margin-top:1.5rem;display:flex;gap:.75rem;justify-content:flex-end}._closeButton_lfa5t_177{padding:.625rem 1.25rem;background-color:#6366f1;color:#fff;border:none;border-radius:6px;font-size:.875rem;font-weight:500;cursor:pointer;transition:background-color .2s}._closeButton_lfa5t_177:hover{background-color:#4f46e5}._closeButton_lfa5t_177:focus{outline:2px solid #6366f1;outline-offset:2px}@media(max-width:640px){._modalPanel_lfa5t_83{max-width:90vw;padding:1.25rem}._modalTitle_lfa5t_130{font-size:1.25rem}}";
function pp({
  isOpen: i = !1,
  title: f = "React Modal",
  description: o = "This is a modal dialog built with Headless UI for React."
}) {
  const [r, d] = O.useState(i);
  O.useEffect(() => {
    d(i);
  }, [i]), O.useEffect(() => {
    const S = "react-modal-styles";
    if (!document.getElementById(S)) {
      const v = document.createElement("style");
      v.id = S, v.textContent = gp, document.head.appendChild(v);
    }
  }, []);
  function p() {
    d(!1);
  }
  function T() {
    d(!0);
  }
  return /* @__PURE__ */ gt.jsxs("div", { className: Ot.container, children: [
    /* @__PURE__ */ gt.jsx(
      "button",
      {
        type: "button",
        onClick: T,
        className: Ot.openButton,
        children: "Open React Modal"
      }
    ),
    /* @__PURE__ */ gt.jsx(Di, { appear: !0, show: r, as: O.Fragment, children: /* @__PURE__ */ gt.jsxs(Mi, { as: "div", className: Ot.modalOverlay, onClose: p, children: [
      /* @__PURE__ */ gt.jsx(
        Di.Child,
        {
          as: O.Fragment,
          enter: Ot.backdropEnter,
          enterFrom: Ot.backdropEnterFrom,
          enterTo: Ot.backdropEnterTo,
          leave: Ot.backdropLeave,
          leaveFrom: Ot.backdropLeaveFrom,
          leaveTo: Ot.backdropLeaveTo,
          children: /* @__PURE__ */ gt.jsx("div", { className: Ot.backdrop, "aria-hidden": "true" })
        }
      ),
      /* @__PURE__ */ gt.jsx("div", { className: Ot.modalContainer, children: /* @__PURE__ */ gt.jsx("div", { className: Ot.modalWrapper, children: /* @__PURE__ */ gt.jsx(
        Di.Child,
        {
          as: O.Fragment,
          enter: Ot.panelEnter,
          enterFrom: Ot.panelEnterFrom,
          enterTo: Ot.panelEnterTo,
          leave: Ot.panelLeave,
          leaveFrom: Ot.panelLeaveFrom,
          leaveTo: Ot.panelLeaveTo,
          children: /* @__PURE__ */ gt.jsxs(Mi.Panel, { className: Ot.modalPanel, children: [
            /* @__PURE__ */ gt.jsx("div", { className: Ot.modalHeader, children: /* @__PURE__ */ gt.jsx(Mi.Title, { as: "h3", className: Ot.modalTitle, children: f }) }),
            /* @__PURE__ */ gt.jsxs("div", { className: Ot.modalBody, children: [
              /* @__PURE__ */ gt.jsx(Mi.Description, { className: Ot.modalDescription, children: o }),
              /* @__PURE__ */ gt.jsxs("div", { className: Ot.modalContent, children: [
                /* @__PURE__ */ gt.jsx("p", { children: "This modal demonstrates Headless UI integration in a React Web Component. It features:" }),
                /* @__PURE__ */ gt.jsxs("ul", { children: [
                  /* @__PURE__ */ gt.jsx("li", { children: "✅ Automatic accessibility (ARIA attributes)" }),
                  /* @__PURE__ */ gt.jsx("li", { children: "✅ Focus trap management" }),
                  /* @__PURE__ */ gt.jsx("li", { children: "✅ ESC key to close" }),
                  /* @__PURE__ */ gt.jsx("li", { children: "✅ Click outside to close" }),
                  /* @__PURE__ */ gt.jsx("li", { children: "✅ Smooth transitions" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ gt.jsx("div", { className: Ot.modalActions, children: /* @__PURE__ */ gt.jsx(
              "button",
              {
                type: "button",
                className: Ot.closeButton,
                onClick: p,
                children: "Close"
              }
            ) })
          ] })
        }
      ) }) })
    ] }) })
  ] });
}
const bp = mv(pp, W, sv);
customElements.get("react-modal") || customElements.define("react-modal", bp);
export {
  qy as ReactCounter,
  pp as ReactModal
};
