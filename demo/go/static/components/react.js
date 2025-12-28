function sv(i, f) {
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
function dv(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var or = { exports: {} }, $n = {};
var Lm;
function vy() {
  if (Lm) return $n;
  Lm = 1;
  var i = /* @__PURE__ */ Symbol.for("react.transitional.element"), f = /* @__PURE__ */ Symbol.for("react.fragment");
  function o(r, d, p) {
    var _ = null;
    if (p !== void 0 && (_ = "" + p), d.key !== void 0 && (_ = "" + d.key), "key" in d) {
      p = {};
      for (var S in d)
        S !== "key" && (p[S] = d[S]);
    } else p = d;
    return d = p.ref, {
      $$typeof: i,
      type: r,
      key: _,
      ref: d !== void 0 ? d : null,
      props: p
    };
  }
  return $n.Fragment = f, $n.jsx = o, $n.jsxs = o, $n;
}
var Gm;
function hy() {
  return Gm || (Gm = 1, or.exports = vy()), or.exports;
}
var it = hy(), sr = { exports: {} }, P = {};
var Xm;
function yy() {
  if (Xm) return P;
  Xm = 1;
  var i = /* @__PURE__ */ Symbol.for("react.transitional.element"), f = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), p = /* @__PURE__ */ Symbol.for("react.consumer"), _ = /* @__PURE__ */ Symbol.for("react.context"), S = /* @__PURE__ */ Symbol.for("react.forward_ref"), m = /* @__PURE__ */ Symbol.for("react.suspense"), y = /* @__PURE__ */ Symbol.for("react.memo"), U = /* @__PURE__ */ Symbol.for("react.lazy"), x = /* @__PURE__ */ Symbol.for("react.activity"), B = Symbol.iterator;
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
  }, Q = Object.assign, Z = {};
  function L(h, N, H) {
    this.props = h, this.context = N, this.refs = Z, this.updater = H || j;
  }
  L.prototype.isReactComponent = {}, L.prototype.setState = function(h, N) {
    if (typeof h != "object" && typeof h != "function" && h != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, h, N, "setState");
  }, L.prototype.forceUpdate = function(h) {
    this.updater.enqueueForceUpdate(this, h, "forceUpdate");
  };
  function k() {
  }
  k.prototype = L.prototype;
  function V(h, N, H) {
    this.props = h, this.context = N, this.refs = Z, this.updater = H || j;
  }
  var lt = V.prototype = new k();
  lt.constructor = V, Q(lt, L.prototype), lt.isPureReactComponent = !0;
  var ht = Array.isArray;
  function yt() {
  }
  var $ = { H: null, A: null, T: null, S: null }, Xt = Object.prototype.hasOwnProperty;
  function ee(h, N, H) {
    var G = H.ref;
    return {
      $$typeof: i,
      type: h,
      key: N,
      ref: G !== void 0 ? G : null,
      props: H
    };
  }
  function Ut(h, N) {
    return ee(h.type, N, h.props);
  }
  function Zt(h) {
    return typeof h == "object" && h !== null && h.$$typeof === i;
  }
  function jt(h) {
    var N = { "=": "=0", ":": "=2" };
    return "$" + h.replace(/[=:]/g, function(H) {
      return N[H];
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
        switch (typeof h.status == "string" ? h.then(yt, yt) : (h.status = "pending", h.then(
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
  function M(h, N, H, G, I) {
    var at = typeof h;
    (at === "undefined" || at === "boolean") && (h = null);
    var st = !1;
    if (h === null) st = !0;
    else
      switch (at) {
        case "bigint":
        case "string":
        case "number":
          st = !0;
          break;
        case "object":
          switch (h.$$typeof) {
            case i:
            case f:
              st = !0;
              break;
            case U:
              return st = h._init, M(
                st(h._payload),
                N,
                H,
                G,
                I
              );
          }
      }
    if (st)
      return I = I(h), st = G === "" ? "." + Jt(h, 0) : G, ht(I) ? (H = "", st != null && (H = st.replace(Qt, "$&/") + "/"), M(I, N, H, "", function(tn) {
        return tn;
      })) : I != null && (Zt(I) && (I = Ut(
        I,
        H + (I.key == null || h && h.key === I.key ? "" : ("" + I.key).replace(
          Qt,
          "$&/"
        ) + "/") + st
      )), N.push(I)), 1;
    st = 0;
    var Bt = G === "" ? "." : G + ":";
    if (ht(h))
      for (var Tt = 0; Tt < h.length; Tt++)
        G = h[Tt], at = Bt + Jt(G, Tt), st += M(
          G,
          N,
          H,
          at,
          I
        );
    else if (Tt = q(h), typeof Tt == "function")
      for (h = Tt.call(h), Tt = 0; !(G = h.next()).done; )
        G = G.value, at = Bt + Jt(G, Tt++), st += M(
          G,
          N,
          H,
          at,
          I
        );
    else if (at === "object") {
      if (typeof h.then == "function")
        return M(
          $t(h),
          N,
          H,
          G,
          I
        );
      throw N = String(h), Error(
        "Objects are not valid as a React child (found: " + (N === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : N) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return st;
  }
  function Y(h, N, H) {
    if (h == null) return h;
    var G = [], I = 0;
    return M(h, G, "", "", function(at) {
      return N.call(H, at, I++);
    }), G;
  }
  function K(h) {
    if (h._status === -1) {
      var N = h._result;
      N = N(), N.then(
        function(H) {
          (h._status === 0 || h._status === -1) && (h._status = 1, h._result = H);
        },
        function(H) {
          (h._status === 0 || h._status === -1) && (h._status = 2, h._result = H);
        }
      ), h._status === -1 && (h._status = 0, h._result = N);
    }
    if (h._status === 1) return h._result.default;
    throw h._result;
  }
  var rt = typeof reportError == "function" ? reportError : function(h) {
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
  }, dt = {
    map: Y,
    forEach: function(h, N, H) {
      Y(
        h,
        function() {
          N.apply(this, arguments);
        },
        H
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
      if (!Zt(h))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return h;
    }
  };
  return P.Activity = x, P.Children = dt, P.Component = L, P.Fragment = o, P.Profiler = d, P.PureComponent = V, P.StrictMode = r, P.Suspense = m, P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = $, P.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(h) {
      return $.H.useMemoCache(h);
    }
  }, P.cache = function(h) {
    return function() {
      return h.apply(null, arguments);
    };
  }, P.cacheSignal = function() {
    return null;
  }, P.cloneElement = function(h, N, H) {
    if (h == null)
      throw Error(
        "The argument must be a React element, but you passed " + h + "."
      );
    var G = Q({}, h.props), I = h.key;
    if (N != null)
      for (at in N.key !== void 0 && (I = "" + N.key), N)
        !Xt.call(N, at) || at === "key" || at === "__self" || at === "__source" || at === "ref" && N.ref === void 0 || (G[at] = N[at]);
    var at = arguments.length - 2;
    if (at === 1) G.children = H;
    else if (1 < at) {
      for (var st = Array(at), Bt = 0; Bt < at; Bt++)
        st[Bt] = arguments[Bt + 2];
      G.children = st;
    }
    return ee(h.type, I, G);
  }, P.createContext = function(h) {
    return h = {
      $$typeof: _,
      _currentValue: h,
      _currentValue2: h,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, h.Provider = h, h.Consumer = {
      $$typeof: p,
      _context: h
    }, h;
  }, P.createElement = function(h, N, H) {
    var G, I = {}, at = null;
    if (N != null)
      for (G in N.key !== void 0 && (at = "" + N.key), N)
        Xt.call(N, G) && G !== "key" && G !== "__self" && G !== "__source" && (I[G] = N[G]);
    var st = arguments.length - 2;
    if (st === 1) I.children = H;
    else if (1 < st) {
      for (var Bt = Array(st), Tt = 0; Tt < st; Tt++)
        Bt[Tt] = arguments[Tt + 2];
      I.children = Bt;
    }
    if (h && h.defaultProps)
      for (G in st = h.defaultProps, st)
        I[G] === void 0 && (I[G] = st[G]);
    return ee(h, at, I);
  }, P.createRef = function() {
    return { current: null };
  }, P.forwardRef = function(h) {
    return { $$typeof: S, render: h };
  }, P.isValidElement = Zt, P.lazy = function(h) {
    return {
      $$typeof: U,
      _payload: { _status: -1, _result: h },
      _init: K
    };
  }, P.memo = function(h, N) {
    return {
      $$typeof: y,
      type: h,
      compare: N === void 0 ? null : N
    };
  }, P.startTransition = function(h) {
    var N = $.T, H = {};
    $.T = H;
    try {
      var G = h(), I = $.S;
      I !== null && I(H, G), typeof G == "object" && G !== null && typeof G.then == "function" && G.then(yt, rt);
    } catch (at) {
      rt(at);
    } finally {
      N !== null && H.types !== null && (N.types = H.types), $.T = N;
    }
  }, P.unstable_useCacheRefresh = function() {
    return $.H.useCacheRefresh();
  }, P.use = function(h) {
    return $.H.use(h);
  }, P.useActionState = function(h, N, H) {
    return $.H.useActionState(h, N, H);
  }, P.useCallback = function(h, N) {
    return $.H.useCallback(h, N);
  }, P.useContext = function(h) {
    return $.H.useContext(h);
  }, P.useDebugValue = function() {
  }, P.useDeferredValue = function(h, N) {
    return $.H.useDeferredValue(h, N);
  }, P.useEffect = function(h, N) {
    return $.H.useEffect(h, N);
  }, P.useEffectEvent = function(h) {
    return $.H.useEffectEvent(h);
  }, P.useId = function() {
    return $.H.useId();
  }, P.useImperativeHandle = function(h, N, H) {
    return $.H.useImperativeHandle(h, N, H);
  }, P.useInsertionEffect = function(h, N) {
    return $.H.useInsertionEffect(h, N);
  }, P.useLayoutEffect = function(h, N) {
    return $.H.useLayoutEffect(h, N);
  }, P.useMemo = function(h, N) {
    return $.H.useMemo(h, N);
  }, P.useOptimistic = function(h, N) {
    return $.H.useOptimistic(h, N);
  }, P.useReducer = function(h, N, H) {
    return $.H.useReducer(h, N, H);
  }, P.useRef = function(h) {
    return $.H.useRef(h);
  }, P.useState = function(h) {
    return $.H.useState(h);
  }, P.useSyncExternalStore = function(h, N, H) {
    return $.H.useSyncExternalStore(
      h,
      N,
      H
    );
  }, P.useTransition = function() {
    return $.H.useTransition();
  }, P.version = "19.2.3", P;
}
var Qm;
function xi() {
  return Qm || (Qm = 1, sr.exports = yy()), sr.exports;
}
var O = xi();
const W = /* @__PURE__ */ dv(O), wm = /* @__PURE__ */ sv({
  __proto__: null,
  default: W
}, [O]);
var dr = { exports: {} }, kn = {}, mr = { exports: {} }, vr = {};
var Zm;
function gy() {
  return Zm || (Zm = 1, (function(i) {
    function f(M, Y) {
      var K = M.length;
      M.push(Y);
      t: for (; 0 < K; ) {
        var rt = K - 1 >>> 1, dt = M[rt];
        if (0 < d(dt, Y))
          M[rt] = Y, M[K] = dt, K = rt;
        else break t;
      }
    }
    function o(M) {
      return M.length === 0 ? null : M[0];
    }
    function r(M) {
      if (M.length === 0) return null;
      var Y = M[0], K = M.pop();
      if (K !== Y) {
        M[0] = K;
        t: for (var rt = 0, dt = M.length, h = dt >>> 1; rt < h; ) {
          var N = 2 * (rt + 1) - 1, H = M[N], G = N + 1, I = M[G];
          if (0 > d(H, K))
            G < dt && 0 > d(I, H) ? (M[rt] = I, M[G] = K, rt = G) : (M[rt] = H, M[N] = K, rt = N);
          else if (G < dt && 0 > d(I, K))
            M[rt] = I, M[G] = K, rt = G;
          else break t;
        }
      }
      return Y;
    }
    function d(M, Y) {
      var K = M.sortIndex - Y.sortIndex;
      return K !== 0 ? K : M.id - Y.id;
    }
    if (i.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var p = performance;
      i.unstable_now = function() {
        return p.now();
      };
    } else {
      var _ = Date, S = _.now();
      i.unstable_now = function() {
        return _.now() - S;
      };
    }
    var m = [], y = [], U = 1, x = null, B = 3, q = !1, j = !1, Q = !1, Z = !1, L = typeof setTimeout == "function" ? setTimeout : null, k = typeof clearTimeout == "function" ? clearTimeout : null, V = typeof setImmediate < "u" ? setImmediate : null;
    function lt(M) {
      for (var Y = o(y); Y !== null; ) {
        if (Y.callback === null) r(y);
        else if (Y.startTime <= M)
          r(y), Y.sortIndex = Y.expirationTime, f(m, Y);
        else break;
        Y = o(y);
      }
    }
    function ht(M) {
      if (Q = !1, lt(M), !j)
        if (o(m) !== null)
          j = !0, yt || (yt = !0, jt());
        else {
          var Y = o(y);
          Y !== null && $t(ht, Y.startTime - M);
        }
    }
    var yt = !1, $ = -1, Xt = 5, ee = -1;
    function Ut() {
      return Z ? !0 : !(i.unstable_now() - ee < Xt);
    }
    function Zt() {
      if (Z = !1, yt) {
        var M = i.unstable_now();
        ee = M;
        var Y = !0;
        try {
          t: {
            j = !1, Q && (Q = !1, k($), $ = -1), q = !0;
            var K = B;
            try {
              e: {
                for (lt(M), x = o(m); x !== null && !(x.expirationTime > M && Ut()); ) {
                  var rt = x.callback;
                  if (typeof rt == "function") {
                    x.callback = null, B = x.priorityLevel;
                    var dt = rt(
                      x.expirationTime <= M
                    );
                    if (M = i.unstable_now(), typeof dt == "function") {
                      x.callback = dt, lt(M), Y = !0;
                      break e;
                    }
                    x === o(m) && r(m), lt(M);
                  } else r(m);
                  x = o(m);
                }
                if (x !== null) Y = !0;
                else {
                  var h = o(y);
                  h !== null && $t(
                    ht,
                    h.startTime - M
                  ), Y = !1;
                }
              }
              break t;
            } finally {
              x = null, B = K, q = !1;
            }
            Y = void 0;
          }
        } finally {
          Y ? jt() : yt = !1;
        }
      }
    }
    var jt;
    if (typeof V == "function")
      jt = function() {
        V(Zt);
      };
    else if (typeof MessageChannel < "u") {
      var Qt = new MessageChannel(), Jt = Qt.port2;
      Qt.port1.onmessage = Zt, jt = function() {
        Jt.postMessage(null);
      };
    } else
      jt = function() {
        L(Zt, 0);
      };
    function $t(M, Y) {
      $ = L(function() {
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
      var K = B;
      B = Y;
      try {
        return M();
      } finally {
        B = K;
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
      var K = B;
      B = M;
      try {
        return Y();
      } finally {
        B = K;
      }
    }, i.unstable_scheduleCallback = function(M, Y, K) {
      var rt = i.unstable_now();
      switch (typeof K == "object" && K !== null ? (K = K.delay, K = typeof K == "number" && 0 < K ? rt + K : rt) : K = rt, M) {
        case 1:
          var dt = -1;
          break;
        case 2:
          dt = 250;
          break;
        case 5:
          dt = 1073741823;
          break;
        case 4:
          dt = 1e4;
          break;
        default:
          dt = 5e3;
      }
      return dt = K + dt, M = {
        id: U++,
        callback: Y,
        priorityLevel: M,
        startTime: K,
        expirationTime: dt,
        sortIndex: -1
      }, K > rt ? (M.sortIndex = K, f(y, M), o(m) === null && M === o(y) && (Q ? (k($), $ = -1) : Q = !0, $t(ht, K - rt))) : (M.sortIndex = dt, f(m, M), j || q || (j = !0, yt || (yt = !0, jt()))), M;
    }, i.unstable_shouldYield = Ut, i.unstable_wrapCallback = function(M) {
      var Y = B;
      return function() {
        var K = B;
        B = Y;
        try {
          return M.apply(this, arguments);
        } finally {
          B = K;
        }
      };
    };
  })(vr)), vr;
}
var Vm;
function py() {
  return Vm || (Vm = 1, mr.exports = gy()), mr.exports;
}
var hr = { exports: {} }, te = {};
var Km;
function by() {
  if (Km) return te;
  Km = 1;
  var i = xi();
  function f(m) {
    var y = "https://react.dev/errors/" + m;
    if (1 < arguments.length) {
      y += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var U = 2; U < arguments.length; U++)
        y += "&args[]=" + encodeURIComponent(arguments[U]);
    }
    return "Minified React error #" + m + "; visit " + y + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
  function p(m, y, U) {
    var x = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: d,
      key: x == null ? null : "" + x,
      children: m,
      containerInfo: y,
      implementation: U
    };
  }
  var _ = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function S(m, y) {
    if (m === "font") return "";
    if (typeof y == "string")
      return y === "use-credentials" ? y : "";
  }
  return te.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, te.createPortal = function(m, y) {
    var U = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!y || y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11)
      throw Error(f(299));
    return p(m, y, null, U);
  }, te.flushSync = function(m) {
    var y = _.T, U = r.p;
    try {
      if (_.T = null, r.p = 2, m) return m();
    } finally {
      _.T = y, r.p = U, r.d.f();
    }
  }, te.preconnect = function(m, y) {
    typeof m == "string" && (y ? (y = y.crossOrigin, y = typeof y == "string" ? y === "use-credentials" ? y : "" : void 0) : y = null, r.d.C(m, y));
  }, te.prefetchDNS = function(m) {
    typeof m == "string" && r.d.D(m);
  }, te.preinit = function(m, y) {
    if (typeof m == "string" && y && typeof y.as == "string") {
      var U = y.as, x = S(U, y.crossOrigin), B = typeof y.integrity == "string" ? y.integrity : void 0, q = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
      U === "style" ? r.d.S(
        m,
        typeof y.precedence == "string" ? y.precedence : void 0,
        {
          crossOrigin: x,
          integrity: B,
          fetchPriority: q
        }
      ) : U === "script" && r.d.X(m, {
        crossOrigin: x,
        integrity: B,
        fetchPriority: q,
        nonce: typeof y.nonce == "string" ? y.nonce : void 0
      });
    }
  }, te.preinitModule = function(m, y) {
    if (typeof m == "string")
      if (typeof y == "object" && y !== null) {
        if (y.as == null || y.as === "script") {
          var U = S(
            y.as,
            y.crossOrigin
          );
          r.d.M(m, {
            crossOrigin: U,
            integrity: typeof y.integrity == "string" ? y.integrity : void 0,
            nonce: typeof y.nonce == "string" ? y.nonce : void 0
          });
        }
      } else y == null && r.d.M(m);
  }, te.preload = function(m, y) {
    if (typeof m == "string" && typeof y == "object" && y !== null && typeof y.as == "string") {
      var U = y.as, x = S(U, y.crossOrigin);
      r.d.L(m, U, {
        crossOrigin: x,
        integrity: typeof y.integrity == "string" ? y.integrity : void 0,
        nonce: typeof y.nonce == "string" ? y.nonce : void 0,
        type: typeof y.type == "string" ? y.type : void 0,
        fetchPriority: typeof y.fetchPriority == "string" ? y.fetchPriority : void 0,
        referrerPolicy: typeof y.referrerPolicy == "string" ? y.referrerPolicy : void 0,
        imageSrcSet: typeof y.imageSrcSet == "string" ? y.imageSrcSet : void 0,
        imageSizes: typeof y.imageSizes == "string" ? y.imageSizes : void 0,
        media: typeof y.media == "string" ? y.media : void 0
      });
    }
  }, te.preloadModule = function(m, y) {
    if (typeof m == "string")
      if (y) {
        var U = S(y.as, y.crossOrigin);
        r.d.m(m, {
          as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
          crossOrigin: U,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0
        });
      } else r.d.m(m);
  }, te.requestFormReset = function(m) {
    r.d.r(m);
  }, te.unstable_batchedUpdates = function(m, y) {
    return m(y);
  }, te.useFormState = function(m, y, U) {
    return _.H.useFormState(m, y, U);
  }, te.useFormStatus = function() {
    return _.H.useHostTransitionStatus();
  }, te.version = "19.2.3", te;
}
var Jm;
function mv() {
  if (Jm) return hr.exports;
  Jm = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (f) {
        console.error(f);
      }
  }
  return i(), hr.exports = by(), hr.exports;
}
var $m;
function Sy() {
  if ($m) return kn;
  $m = 1;
  var i = py(), f = xi(), o = mv();
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
  function _(t) {
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
  function m(t) {
    if (p(t) !== t)
      throw Error(r(188));
  }
  function y(t) {
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
          if (u === l) return m(n), t;
          if (u === a) return m(n), e;
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
  function U(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = U(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var x = Object.assign, B = /* @__PURE__ */ Symbol.for("react.element"), q = /* @__PURE__ */ Symbol.for("react.transitional.element"), j = /* @__PURE__ */ Symbol.for("react.portal"), Q = /* @__PURE__ */ Symbol.for("react.fragment"), Z = /* @__PURE__ */ Symbol.for("react.strict_mode"), L = /* @__PURE__ */ Symbol.for("react.profiler"), k = /* @__PURE__ */ Symbol.for("react.consumer"), V = /* @__PURE__ */ Symbol.for("react.context"), lt = /* @__PURE__ */ Symbol.for("react.forward_ref"), ht = /* @__PURE__ */ Symbol.for("react.suspense"), yt = /* @__PURE__ */ Symbol.for("react.suspense_list"), $ = /* @__PURE__ */ Symbol.for("react.memo"), Xt = /* @__PURE__ */ Symbol.for("react.lazy"), ee = /* @__PURE__ */ Symbol.for("react.activity"), Ut = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Zt = Symbol.iterator;
  function jt(t) {
    return t === null || typeof t != "object" ? null : (t = Zt && t[Zt] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var Qt = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Jt(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Qt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case Q:
        return "Fragment";
      case L:
        return "Profiler";
      case Z:
        return "StrictMode";
      case ht:
        return "Suspense";
      case yt:
        return "SuspenseList";
      case ee:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case j:
          return "Portal";
        case V:
          return t.displayName || "Context";
        case k:
          return (t._context.displayName || "Context") + ".Consumer";
        case lt:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case $:
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
  var $t = Array.isArray, M = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Y = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, rt = [], dt = -1;
  function h(t) {
    return { current: t };
  }
  function N(t) {
    0 > dt || (t.current = rt[dt], rt[dt] = null, dt--);
  }
  function H(t, e) {
    dt++, rt[dt] = t.current, t.current = e;
  }
  var G = h(null), I = h(null), at = h(null), st = h(null);
  function Bt(t, e) {
    switch (H(at, e), H(I, t), H(G, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? fm(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = fm(e), t = rm(e, t);
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
    N(G), H(G, t);
  }
  function Tt() {
    N(G), N(I), N(at);
  }
  function tn(t) {
    t.memoizedState !== null && H(st, t);
    var e = G.current, l = rm(e, t.type);
    e !== l && (H(I, t), H(G, l));
  }
  function iu(t) {
    I.current === t && (N(G), N(I)), st.current === t && (N(st), Zn._currentValue = K);
  }
  var Vi, qr;
  function Zl(t) {
    if (Vi === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        Vi = e && e[1] || "", qr = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Vi + t + qr;
  }
  var Ki = !1;
  function Ji(t, e) {
    if (!t || Ki) return "";
    Ki = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var R = function() {
                throw Error();
              };
              if (Object.defineProperty(R.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(R, []);
                } catch (A) {
                  var z = A;
                }
                Reflect.construct(t, [], R);
              } else {
                try {
                  R.call();
                } catch (A) {
                  z = A;
                }
                t.call(R.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (A) {
                z = A;
              }
              (R = t()) && typeof R.catch == "function" && R.catch(function() {
              });
            }
          } catch (A) {
            if (A && z && typeof A.stack == "string")
              return [A.stack, z.stack];
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
        var v = c.split(`
`), T = s.split(`
`);
        for (n = a = 0; a < v.length && !v[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; n < T.length && !T[n].includes(
          "DetermineComponentFrameRoot"
        ); )
          n++;
        if (a === v.length || n === T.length)
          for (a = v.length - 1, n = T.length - 1; 1 <= a && 0 <= n && v[a] !== T[n]; )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (v[a] !== T[n]) {
            if (a !== 1 || n !== 1)
              do
                if (a--, n--, 0 > n || v[a] !== T[n]) {
                  var D = `
` + v[a].replace(" at new ", " at ");
                  return t.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", t.displayName)), D;
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      Ki = !1, Error.prepareStackTrace = l;
    }
    return (l = t ? t.displayName || t.name : "") ? Zl(l) : "";
  }
  function Vv(t, e) {
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
        return Ji(t.type, !1);
      case 11:
        return Ji(t.type.render, !1);
      case 1:
        return Ji(t.type, !0);
      case 31:
        return Zl("Activity");
      default:
        return "";
    }
  }
  function Yr(t) {
    try {
      var e = "", l = null;
      do
        e += Vv(t, l), l = t, t = t.return;
      while (t);
      return e;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var $i = Object.prototype.hasOwnProperty, ki = i.unstable_scheduleCallback, Fi = i.unstable_cancelCallback, Kv = i.unstable_shouldYield, Jv = i.unstable_requestPaint, de = i.unstable_now, $v = i.unstable_getCurrentPriorityLevel, Lr = i.unstable_ImmediatePriority, Gr = i.unstable_UserBlockingPriority, cu = i.unstable_NormalPriority, kv = i.unstable_LowPriority, Xr = i.unstable_IdlePriority, Fv = i.log, Wv = i.unstable_setDisableYieldValue, en = null, me = null;
  function hl(t) {
    if (typeof Fv == "function" && Wv(t), me && typeof me.setStrictMode == "function")
      try {
        me.setStrictMode(en, t);
      } catch {
      }
  }
  var ve = Math.clz32 ? Math.clz32 : t0, Iv = Math.log, Pv = Math.LN2;
  function t0(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Iv(t) / Pv | 0) | 0;
  }
  var fu = 256, ru = 262144, ou = 4194304;
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
  function su(t, e, l) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var n = 0, u = t.suspendedLanes, c = t.pingedLanes;
    t = t.warmLanes;
    var s = a & 134217727;
    return s !== 0 ? (a = s & ~u, a !== 0 ? n = Vl(a) : (c &= s, c !== 0 ? n = Vl(c) : l || (l = s & ~t, l !== 0 && (n = Vl(l))))) : (s = a & ~u, s !== 0 ? n = Vl(s) : c !== 0 ? n = Vl(c) : l || (l = a & ~t, l !== 0 && (n = Vl(l)))), n === 0 ? 0 : e !== 0 && e !== n && (e & u) === 0 && (u = n & -n, l = e & -e, u >= l || u === 32 && (l & 4194048) !== 0) ? e : n;
  }
  function ln(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function e0(t, e) {
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
  function Qr() {
    var t = ou;
    return ou <<= 1, (ou & 62914560) === 0 && (ou = 4194304), t;
  }
  function Wi(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function an(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function l0(t, e, l, a, n, u) {
    var c = t.pendingLanes;
    t.pendingLanes = l, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= l, t.entangledLanes &= l, t.errorRecoveryDisabledLanes &= l, t.shellSuspendCounter = 0;
    var s = t.entanglements, v = t.expirationTimes, T = t.hiddenUpdates;
    for (l = c & ~l; 0 < l; ) {
      var D = 31 - ve(l), R = 1 << D;
      s[D] = 0, v[D] = -1;
      var z = T[D];
      if (z !== null)
        for (T[D] = null, D = 0; D < z.length; D++) {
          var A = z[D];
          A !== null && (A.lane &= -536870913);
        }
      l &= ~R;
    }
    a !== 0 && wr(t, a, 0), u !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(c & ~e));
  }
  function wr(t, e, l) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var a = 31 - ve(e);
    t.entangledLanes |= e, t.entanglements[a] = t.entanglements[a] | 1073741824 | l & 261930;
  }
  function Zr(t, e) {
    var l = t.entangledLanes |= e;
    for (t = t.entanglements; l; ) {
      var a = 31 - ve(l), n = 1 << a;
      n & e | t[a] & e && (t[a] |= e), l &= ~n;
    }
  }
  function Vr(t, e) {
    var l = e & -e;
    return l = (l & 42) !== 0 ? 1 : Ii(l), (l & (t.suspendedLanes | e)) !== 0 ? 0 : l;
  }
  function Ii(t) {
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
  function Pi(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Kr() {
    var t = Y.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Um(t.type));
  }
  function Jr(t, e) {
    var l = Y.p;
    try {
      return Y.p = t, e();
    } finally {
      Y.p = l;
    }
  }
  var yl = Math.random().toString(36).slice(2), kt = "__reactFiber$" + yl, ae = "__reactProps$" + yl, ha = "__reactContainer$" + yl, tc = "__reactEvents$" + yl, a0 = "__reactListeners$" + yl, n0 = "__reactHandles$" + yl, $r = "__reactResources$" + yl, nn = "__reactMarker$" + yl;
  function ec(t) {
    delete t[kt], delete t[ae], delete t[tc], delete t[a0], delete t[n0];
  }
  function ya(t) {
    var e = t[kt];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if (e = l[ha] || l[kt]) {
        if (l = e.alternate, e.child !== null || l !== null && l.child !== null)
          for (t = ym(t); t !== null; ) {
            if (l = t[kt]) return l;
            t = ym(t);
          }
        return e;
      }
      t = l, l = t.parentNode;
    }
    return null;
  }
  function ga(t) {
    if (t = t[kt] || t[ha]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function un(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(r(33));
  }
  function pa(t) {
    var e = t[$r];
    return e || (e = t[$r] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function Vt(t) {
    t[nn] = !0;
  }
  var kr = /* @__PURE__ */ new Set(), Fr = {};
  function Kl(t, e) {
    ba(t, e), ba(t + "Capture", e);
  }
  function ba(t, e) {
    for (Fr[t] = e, t = 0; t < e.length; t++)
      kr.add(e[t]);
  }
  var u0 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Wr = {}, Ir = {};
  function i0(t) {
    return $i.call(Ir, t) ? !0 : $i.call(Wr, t) ? !1 : u0.test(t) ? Ir[t] = !0 : (Wr[t] = !0, !1);
  }
  function du(t, e, l) {
    if (i0(e))
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
  function mu(t, e, l) {
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
  function Pr(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function c0(t, e, l) {
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
  function lc(t) {
    if (!t._valueTracker) {
      var e = Pr(t) ? "checked" : "value";
      t._valueTracker = c0(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function to(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(), a = "";
    return t && (a = Pr(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== l ? (e.setValue(t), !0) : !1;
  }
  function vu(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var f0 = /[\n"\\]/g;
  function ze(t) {
    return t.replace(
      f0,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function ac(t, e, l, a, n, u, c, s) {
    t.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? t.type = c : t.removeAttribute("type"), e != null ? c === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Te(e)) : t.value !== "" + Te(e) && (t.value = "" + Te(e)) : c !== "submit" && c !== "reset" || t.removeAttribute("value"), e != null ? nc(t, c, Te(e)) : l != null ? nc(t, c, Te(l)) : a != null && t.removeAttribute("value"), n == null && u != null && (t.defaultChecked = !!u), n != null && (t.checked = n && typeof n != "function" && typeof n != "symbol"), s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? t.name = "" + Te(s) : t.removeAttribute("name");
  }
  function eo(t, e, l, a, n, u, c, s) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), e != null || l != null) {
      if (!(u !== "submit" && u !== "reset" || e != null)) {
        lc(t);
        return;
      }
      l = l != null ? "" + Te(l) : "", e = e != null ? "" + Te(e) : l, s || e === t.value || (t.value = e), t.defaultValue = e;
    }
    a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = s ? t.checked : !!a, t.defaultChecked = !!a, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (t.name = c), lc(t);
  }
  function nc(t, e, l) {
    e === "number" && vu(t.ownerDocument) === t || t.defaultValue === "" + l || (t.defaultValue = "" + l);
  }
  function Sa(t, e, l, a) {
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
  function lo(t, e, l) {
    if (e != null && (e = "" + Te(e), e !== t.value && (t.value = e), l == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? "" + Te(l) : "";
  }
  function ao(t, e, l, a) {
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
    l = Te(e), t.defaultValue = l, a = t.textContent, a === l && a !== "" && a !== null && (t.value = a), lc(t);
  }
  function _a(t, e) {
    if (e) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var r0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function no(t, e, l) {
    var a = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, l) : typeof l != "number" || l === 0 || r0.has(e) ? e === "float" ? t.cssFloat = l : t[e] = ("" + l).trim() : t[e] = l + "px";
  }
  function uo(t, e, l) {
    if (e != null && typeof e != "object")
      throw Error(r(62));
    if (t = t.style, l != null) {
      for (var a in l)
        !l.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
      for (var n in e)
        a = e[n], e.hasOwnProperty(n) && l[n] !== a && no(t, n, a);
    } else
      for (var u in e)
        e.hasOwnProperty(u) && no(t, u, e[u]);
  }
  function uc(t) {
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
  var o0 = /* @__PURE__ */ new Map([
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
  ]), s0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function hu(t) {
    return s0.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function Je() {
  }
  var ic = null;
  function cc(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Ea = null, Ta = null;
  function io(t) {
    var e = ga(t);
    if (e && (t = e.stateNode)) {
      var l = t[ae] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (ac(
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
              'input[name="' + ze(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < l.length; e++) {
              var a = l[e];
              if (a !== t && a.form === t.form) {
                var n = a[ae] || null;
                if (!n) throw Error(r(90));
                ac(
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
              a = l[e], a.form === t.form && to(a);
          }
          break t;
        case "textarea":
          lo(t, l.value, l.defaultValue);
          break t;
        case "select":
          e = l.value, e != null && Sa(t, !!l.multiple, e, !1);
      }
    }
  }
  var fc = !1;
  function co(t, e, l) {
    if (fc) return t(e, l);
    fc = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (fc = !1, (Ea !== null || Ta !== null) && (li(), Ea && (e = Ea, t = Ta, Ta = Ea = null, io(e), t)))
        for (e = 0; e < t.length; e++) io(t[e]);
    }
  }
  function cn(t, e) {
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
  var $e = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), rc = !1;
  if ($e)
    try {
      var fn = {};
      Object.defineProperty(fn, "passive", {
        get: function() {
          rc = !0;
        }
      }), window.addEventListener("test", fn, fn), window.removeEventListener("test", fn, fn);
    } catch {
      rc = !1;
    }
  var gl = null, oc = null, yu = null;
  function fo() {
    if (yu) return yu;
    var t, e = oc, l = e.length, a, n = "value" in gl ? gl.value : gl.textContent, u = n.length;
    for (t = 0; t < l && e[t] === n[t]; t++) ;
    var c = l - t;
    for (a = 1; a <= c && e[l - a] === n[u - a]; a++) ;
    return yu = n.slice(t, 1 < a ? 1 - a : void 0);
  }
  function gu(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function pu() {
    return !0;
  }
  function ro() {
    return !1;
  }
  function ne(t) {
    function e(l, a, n, u, c) {
      this._reactName = l, this._targetInst = n, this.type = a, this.nativeEvent = u, this.target = c, this.currentTarget = null;
      for (var s in t)
        t.hasOwnProperty(s) && (l = t[s], this[s] = l ? l(u) : u[s]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? pu : ro, this.isPropagationStopped = ro, this;
    }
    return x(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = pu);
      },
      stopPropagation: function() {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = pu);
      },
      persist: function() {
      },
      isPersistent: pu
    }), e;
  }
  var Jl = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, bu = ne(Jl), rn = x({}, Jl, { view: 0, detail: 0 }), d0 = ne(rn), sc, dc, on, Su = x({}, rn, {
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
    getModifierState: vc,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== on && (on && t.type === "mousemove" ? (sc = t.screenX - on.screenX, dc = t.screenY - on.screenY) : dc = sc = 0, on = t), sc);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : dc;
    }
  }), oo = ne(Su), m0 = x({}, Su, { dataTransfer: 0 }), v0 = ne(m0), h0 = x({}, rn, { relatedTarget: 0 }), mc = ne(h0), y0 = x({}, Jl, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), g0 = ne(y0), p0 = x({}, Jl, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), b0 = ne(p0), S0 = x({}, Jl, { data: 0 }), so = ne(S0), _0 = {
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
  }, E0 = {
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
  }, T0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function z0(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = T0[t]) ? !!e[t] : !1;
  }
  function vc() {
    return z0;
  }
  var A0 = x({}, rn, {
    key: function(t) {
      if (t.key) {
        var e = _0[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = gu(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? E0[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: vc,
    charCode: function(t) {
      return t.type === "keypress" ? gu(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? gu(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), O0 = ne(A0), M0 = x({}, Su, {
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
  }), mo = ne(M0), D0 = x({}, rn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: vc
  }), C0 = ne(D0), N0 = x({}, Jl, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), R0 = ne(N0), U0 = x({}, Su, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), x0 = ne(U0), H0 = x({}, Jl, {
    newState: 0,
    oldState: 0
  }), j0 = ne(H0), B0 = [9, 13, 27, 32], hc = $e && "CompositionEvent" in window, sn = null;
  $e && "documentMode" in document && (sn = document.documentMode);
  var q0 = $e && "TextEvent" in window && !sn, vo = $e && (!hc || sn && 8 < sn && 11 >= sn), ho = " ", yo = !1;
  function go(t, e) {
    switch (t) {
      case "keyup":
        return B0.indexOf(e.keyCode) !== -1;
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
  function po(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var za = !1;
  function Y0(t, e) {
    switch (t) {
      case "compositionend":
        return po(e);
      case "keypress":
        return e.which !== 32 ? null : (yo = !0, ho);
      case "textInput":
        return t = e.data, t === ho && yo ? null : t;
      default:
        return null;
    }
  }
  function L0(t, e) {
    if (za)
      return t === "compositionend" || !hc && go(t, e) ? (t = fo(), yu = oc = gl = null, za = !1, t) : null;
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
        return vo && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var G0 = {
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
  function bo(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!G0[t.type] : e === "textarea";
  }
  function So(t, e, l, a) {
    Ea ? Ta ? Ta.push(a) : Ta = [a] : Ea = a, e = ri(e, "onChange"), 0 < e.length && (l = new bu(
      "onChange",
      "change",
      null,
      l,
      a
    ), t.push({ event: l, listeners: e }));
  }
  var dn = null, mn = null;
  function X0(t) {
    lm(t, 0);
  }
  function _u(t) {
    var e = un(t);
    if (to(e)) return t;
  }
  function _o(t, e) {
    if (t === "change") return e;
  }
  var Eo = !1;
  if ($e) {
    var yc;
    if ($e) {
      var gc = "oninput" in document;
      if (!gc) {
        var To = document.createElement("div");
        To.setAttribute("oninput", "return;"), gc = typeof To.oninput == "function";
      }
      yc = gc;
    } else yc = !1;
    Eo = yc && (!document.documentMode || 9 < document.documentMode);
  }
  function zo() {
    dn && (dn.detachEvent("onpropertychange", Ao), mn = dn = null);
  }
  function Ao(t) {
    if (t.propertyName === "value" && _u(mn)) {
      var e = [];
      So(
        e,
        mn,
        t,
        cc(t)
      ), co(X0, e);
    }
  }
  function Q0(t, e, l) {
    t === "focusin" ? (zo(), dn = e, mn = l, dn.attachEvent("onpropertychange", Ao)) : t === "focusout" && zo();
  }
  function w0(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return _u(mn);
  }
  function Z0(t, e) {
    if (t === "click") return _u(e);
  }
  function V0(t, e) {
    if (t === "input" || t === "change")
      return _u(e);
  }
  function K0(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var he = typeof Object.is == "function" ? Object.is : K0;
  function vn(t, e) {
    if (he(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var l = Object.keys(t), a = Object.keys(e);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!$i.call(e, n) || !he(t[n], e[n]))
        return !1;
    }
    return !0;
  }
  function Oo(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Mo(t, e) {
    var l = Oo(t);
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
      l = Oo(l);
    }
  }
  function Do(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Do(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function Co(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = vu(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) t = e.contentWindow;
      else break;
      e = vu(t.document);
    }
    return e;
  }
  function pc(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var J0 = $e && "documentMode" in document && 11 >= document.documentMode, Aa = null, bc = null, hn = null, Sc = !1;
  function No(t, e, l) {
    var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Sc || Aa == null || Aa !== vu(a) || (a = Aa, "selectionStart" in a && pc(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), hn && vn(hn, a) || (hn = a, a = ri(bc, "onSelect"), 0 < a.length && (e = new bu(
      "onSelect",
      "select",
      null,
      e,
      l
    ), t.push({ event: e, listeners: a }), e.target = Aa)));
  }
  function $l(t, e) {
    var l = {};
    return l[t.toLowerCase()] = e.toLowerCase(), l["Webkit" + t] = "webkit" + e, l["Moz" + t] = "moz" + e, l;
  }
  var Oa = {
    animationend: $l("Animation", "AnimationEnd"),
    animationiteration: $l("Animation", "AnimationIteration"),
    animationstart: $l("Animation", "AnimationStart"),
    transitionrun: $l("Transition", "TransitionRun"),
    transitionstart: $l("Transition", "TransitionStart"),
    transitioncancel: $l("Transition", "TransitionCancel"),
    transitionend: $l("Transition", "TransitionEnd")
  }, _c = {}, Ro = {};
  $e && (Ro = document.createElement("div").style, "AnimationEvent" in window || (delete Oa.animationend.animation, delete Oa.animationiteration.animation, delete Oa.animationstart.animation), "TransitionEvent" in window || delete Oa.transitionend.transition);
  function kl(t) {
    if (_c[t]) return _c[t];
    if (!Oa[t]) return t;
    var e = Oa[t], l;
    for (l in e)
      if (e.hasOwnProperty(l) && l in Ro)
        return _c[t] = e[l];
    return t;
  }
  var Uo = kl("animationend"), xo = kl("animationiteration"), Ho = kl("animationstart"), $0 = kl("transitionrun"), k0 = kl("transitionstart"), F0 = kl("transitioncancel"), jo = kl("transitionend"), Bo = /* @__PURE__ */ new Map(), Ec = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Ec.push("scrollEnd");
  function je(t, e) {
    Bo.set(t, e), Kl(e, [t]);
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
  }, Ae = [], Ma = 0, Tc = 0;
  function Tu() {
    for (var t = Ma, e = Tc = Ma = 0; e < t; ) {
      var l = Ae[e];
      Ae[e++] = null;
      var a = Ae[e];
      Ae[e++] = null;
      var n = Ae[e];
      Ae[e++] = null;
      var u = Ae[e];
      if (Ae[e++] = null, a !== null && n !== null) {
        var c = a.pending;
        c === null ? n.next = n : (n.next = c.next, c.next = n), a.pending = n;
      }
      u !== 0 && qo(l, n, u);
    }
  }
  function zu(t, e, l, a) {
    Ae[Ma++] = t, Ae[Ma++] = e, Ae[Ma++] = l, Ae[Ma++] = a, Tc |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
  }
  function zc(t, e, l, a) {
    return zu(t, e, l, a), Au(t);
  }
  function Fl(t, e) {
    return zu(t, null, null, e), Au(t);
  }
  function qo(t, e, l) {
    t.lanes |= l;
    var a = t.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, u = t.return; u !== null; )
      u.childLanes |= l, a = u.alternate, a !== null && (a.childLanes |= l), u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (n = !0)), t = u, u = u.return;
    return t.tag === 3 ? (u = t.stateNode, n && e !== null && (n = 31 - ve(l), t = u.hiddenUpdates, a = t[n], a === null ? t[n] = [e] : a.push(e), e.lane = l | 536870912), u) : null;
  }
  function Au(t) {
    if (50 < qn)
      throw qn = 0, Hf = null, Error(r(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Da = {};
  function W0(t, e, l, a) {
    this.tag = t, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ye(t, e, l, a) {
    return new W0(t, e, l, a);
  }
  function Ac(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function ke(t, e) {
    var l = t.alternate;
    return l === null ? (l = ye(
      t.tag,
      e,
      t.key,
      t.mode
    ), l.elementType = t.elementType, l.type = t.type, l.stateNode = t.stateNode, l.alternate = t, t.alternate = l) : (l.pendingProps = e, l.type = t.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = t.flags & 65011712, l.childLanes = t.childLanes, l.lanes = t.lanes, l.child = t.child, l.memoizedProps = t.memoizedProps, l.memoizedState = t.memoizedState, l.updateQueue = t.updateQueue, e = t.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, l.sibling = t.sibling, l.index = t.index, l.ref = t.ref, l.refCleanup = t.refCleanup, l;
  }
  function Yo(t, e) {
    t.flags &= 65011714;
    var l = t.alternate;
    return l === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = l.childLanes, t.lanes = l.lanes, t.child = l.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = l.memoizedProps, t.memoizedState = l.memoizedState, t.updateQueue = l.updateQueue, t.type = l.type, e = l.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function Ou(t, e, l, a, n, u) {
    var c = 0;
    if (a = t, typeof t == "function") Ac(t) && (c = 1);
    else if (typeof t == "string")
      c = ly(
        t,
        l,
        G.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case ee:
          return t = ye(31, l, e, n), t.elementType = ee, t.lanes = u, t;
        case Q:
          return Wl(l.children, n, u, e);
        case Z:
          c = 8, n |= 24;
          break;
        case L:
          return t = ye(12, l, e, n | 2), t.elementType = L, t.lanes = u, t;
        case ht:
          return t = ye(13, l, e, n), t.elementType = ht, t.lanes = u, t;
        case yt:
          return t = ye(19, l, e, n), t.elementType = yt, t.lanes = u, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case V:
                c = 10;
                break t;
              case k:
                c = 9;
                break t;
              case lt:
                c = 11;
                break t;
              case $:
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
  function Wl(t, e, l, a) {
    return t = ye(7, t, a, e), t.lanes = l, t;
  }
  function Oc(t, e, l) {
    return t = ye(6, t, null, e), t.lanes = l, t;
  }
  function Lo(t) {
    var e = ye(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function Mc(t, e, l) {
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
  var Go = /* @__PURE__ */ new WeakMap();
  function Oe(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = Go.get(t);
      return l !== void 0 ? l : (e = {
        value: t,
        source: e,
        stack: Yr(e)
      }, Go.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: Yr(e)
    };
  }
  var Ca = [], Na = 0, Mu = null, yn = 0, Me = [], De = 0, pl = null, Le = 1, Ge = "";
  function Fe(t, e) {
    Ca[Na++] = yn, Ca[Na++] = Mu, Mu = t, yn = e;
  }
  function Xo(t, e, l) {
    Me[De++] = Le, Me[De++] = Ge, Me[De++] = pl, pl = t;
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
  function Dc(t) {
    t.return !== null && (Fe(t, 1), Xo(t, 1, 0));
  }
  function Cc(t) {
    for (; t === Mu; )
      Mu = Ca[--Na], Ca[Na] = null, yn = Ca[--Na], Ca[Na] = null;
    for (; t === pl; )
      pl = Me[--De], Me[De] = null, Ge = Me[--De], Me[De] = null, Le = Me[--De], Me[De] = null;
  }
  function Qo(t, e) {
    Me[De++] = Le, Me[De++] = Ge, Me[De++] = pl, Le = e.id, Ge = e.overflow, pl = t;
  }
  var Ft = null, Mt = null, ot = !1, bl = null, Ce = !1, Nc = Error(r(519));
  function Sl(t) {
    var e = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw gn(Oe(e, t)), Nc;
  }
  function wo(t) {
    var e = t.stateNode, l = t.type, a = t.memoizedProps;
    switch (e[kt] = t, e[ae] = a, l) {
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
        for (l = 0; l < Ln.length; l++)
          ut(Ln[l], e);
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
        ut("invalid", e), eo(
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
        ut("invalid", e), ao(e, a.value, a.defaultValue, a.children);
    }
    l = a.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || e.textContent === "" + l || a.suppressHydrationWarning === !0 || im(e.textContent, l) ? (a.popover != null && (ut("beforetoggle", e), ut("toggle", e)), a.onScroll != null && ut("scroll", e), a.onScrollEnd != null && ut("scrollend", e), a.onClick != null && (e.onclick = Je), e = !0) : e = !1, e || Sl(t, !0);
  }
  function Zo(t) {
    for (Ft = t.return; Ft; )
      switch (Ft.tag) {
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
          Ft = Ft.return;
      }
  }
  function Ra(t) {
    if (t !== Ft) return !1;
    if (!ot) return Zo(t), ot = !0, !1;
    var e = t.tag, l;
    if ((l = e !== 3 && e !== 27) && ((l = e === 5) && (l = t.type, l = !(l !== "form" && l !== "button") || kf(t.type, t.memoizedProps)), l = !l), l && Mt && Sl(t), Zo(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      Mt = hm(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      Mt = hm(t);
    } else
      e === 27 ? (e = Mt, Hl(t.type) ? (t = tr, tr = null, Mt = t) : Mt = e) : Mt = Ft ? Re(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Il() {
    Mt = Ft = null, ot = !1;
  }
  function Rc() {
    var t = bl;
    return t !== null && (fe === null ? fe = t : fe.push.apply(
      fe,
      t
    ), bl = null), t;
  }
  function gn(t) {
    bl === null ? bl = [t] : bl.push(t);
  }
  var Uc = h(null), Pl = null, We = null;
  function _l(t, e, l) {
    H(Uc, e._currentValue), e._currentValue = l;
  }
  function Ie(t) {
    t._currentValue = Uc.current, N(Uc);
  }
  function xc(t, e, l) {
    for (; t !== null; ) {
      var a = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e), t === l) break;
      t = t.return;
    }
  }
  function Hc(t, e, l, a) {
    var n = t.child;
    for (n !== null && (n.return = t); n !== null; ) {
      var u = n.dependencies;
      if (u !== null) {
        var c = n.child;
        u = u.firstContext;
        t: for (; u !== null; ) {
          var s = u;
          u = n;
          for (var v = 0; v < e.length; v++)
            if (s.context === e[v]) {
              u.lanes |= l, s = u.alternate, s !== null && (s.lanes |= l), xc(
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
        c.lanes |= l, u = c.alternate, u !== null && (u.lanes |= l), xc(c, l, t), c = null;
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
      } else if (n === st.current) {
        if (c = n.alternate, c === null) throw Error(r(387));
        c.memoizedState.memoizedState !== n.memoizedState.memoizedState && (t !== null ? t.push(Zn) : t = [Zn]);
      }
      n = n.return;
    }
    t !== null && Hc(
      e,
      t,
      l,
      a
    ), e.flags |= 262144;
  }
  function Du(t) {
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
  function ta(t) {
    Pl = t, We = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function Wt(t) {
    return Vo(Pl, t);
  }
  function Cu(t, e) {
    return Pl === null && ta(t), Vo(t, e);
  }
  function Vo(t, e) {
    var l = e._currentValue;
    if (e = { context: e, memoizedValue: l, next: null }, We === null) {
      if (t === null) throw Error(r(308));
      We = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else We = We.next = e;
    return l;
  }
  var I0 = typeof AbortController < "u" ? AbortController : function() {
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
  }, P0 = i.unstable_scheduleCallback, th = i.unstable_NormalPriority, qt = {
    $$typeof: V,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function jc() {
    return {
      controller: new I0(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function pn(t) {
    t.refCount--, t.refCount === 0 && P0(th, function() {
      t.controller.abort();
    });
  }
  var bn = null, Bc = 0, xa = 0, Ha = null;
  function eh(t, e) {
    if (bn === null) {
      var l = bn = [];
      Bc = 0, xa = Gf(), Ha = {
        status: "pending",
        value: void 0,
        then: function(a) {
          l.push(a);
        }
      };
    }
    return Bc++, e.then(Ko, Ko), e;
  }
  function Ko() {
    if (--Bc === 0 && bn !== null) {
      Ha !== null && (Ha.status = "fulfilled");
      var t = bn;
      bn = null, xa = 0, Ha = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function lh(t, e) {
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
  var Jo = M.S;
  M.S = function(t, e) {
    Nd = de(), typeof e == "object" && e !== null && typeof e.then == "function" && eh(t, e), Jo !== null && Jo(t, e);
  };
  var ea = h(null);
  function qc() {
    var t = ea.current;
    return t !== null ? t : zt.pooledCache;
  }
  function Nu(t, e) {
    e === null ? H(ea, ea.current) : H(ea, e.pool);
  }
  function $o() {
    var t = qc();
    return t === null ? null : { parent: qt._currentValue, pool: t };
  }
  var ja = Error(r(460)), Yc = Error(r(474)), Ru = Error(r(542)), Uu = { then: function() {
  } };
  function ko(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function Fo(t, e, l) {
    switch (l = t[l], l === void 0 ? t.push(e) : l !== e && (e.then(Je, Je), e = l), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, Io(t), t;
      default:
        if (typeof e.status == "string") e.then(Je, Je);
        else {
          if (t = zt, t !== null && 100 < t.shellSuspendCounter)
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
            throw t = e.reason, Io(t), t;
        }
        throw aa = e, ja;
    }
  }
  function la(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (aa = l, ja) : l;
    }
  }
  var aa = null;
  function Wo() {
    if (aa === null) throw Error(r(459));
    var t = aa;
    return aa = null, t;
  }
  function Io(t) {
    if (t === ja || t === Ru)
      throw Error(r(483));
  }
  var Ba = null, Sn = 0;
  function xu(t) {
    var e = Sn;
    return Sn += 1, Ba === null && (Ba = []), Fo(Ba, t, e);
  }
  function _n(t, e) {
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
  function Po(t) {
    function e(b, g) {
      if (t) {
        var E = b.deletions;
        E === null ? (b.deletions = [g], b.flags |= 16) : E.push(g);
      }
    }
    function l(b, g) {
      if (!t) return null;
      for (; g !== null; )
        e(b, g), g = g.sibling;
      return null;
    }
    function a(b) {
      for (var g = /* @__PURE__ */ new Map(); b !== null; )
        b.key !== null ? g.set(b.key, b) : g.set(b.index, b), b = b.sibling;
      return g;
    }
    function n(b, g) {
      return b = ke(b, g), b.index = 0, b.sibling = null, b;
    }
    function u(b, g, E) {
      return b.index = E, t ? (E = b.alternate, E !== null ? (E = E.index, E < g ? (b.flags |= 67108866, g) : E) : (b.flags |= 67108866, g)) : (b.flags |= 1048576, g);
    }
    function c(b) {
      return t && b.alternate === null && (b.flags |= 67108866), b;
    }
    function s(b, g, E, C) {
      return g === null || g.tag !== 6 ? (g = Oc(E, b.mode, C), g.return = b, g) : (g = n(g, E), g.return = b, g);
    }
    function v(b, g, E, C) {
      var J = E.type;
      return J === Q ? D(
        b,
        g,
        E.props.children,
        C,
        E.key
      ) : g !== null && (g.elementType === J || typeof J == "object" && J !== null && J.$$typeof === Xt && la(J) === g.type) ? (g = n(g, E.props), _n(g, E), g.return = b, g) : (g = Ou(
        E.type,
        E.key,
        E.props,
        null,
        b.mode,
        C
      ), _n(g, E), g.return = b, g);
    }
    function T(b, g, E, C) {
      return g === null || g.tag !== 4 || g.stateNode.containerInfo !== E.containerInfo || g.stateNode.implementation !== E.implementation ? (g = Mc(E, b.mode, C), g.return = b, g) : (g = n(g, E.children || []), g.return = b, g);
    }
    function D(b, g, E, C, J) {
      return g === null || g.tag !== 7 ? (g = Wl(
        E,
        b.mode,
        C,
        J
      ), g.return = b, g) : (g = n(g, E), g.return = b, g);
    }
    function R(b, g, E) {
      if (typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint")
        return g = Oc(
          "" + g,
          b.mode,
          E
        ), g.return = b, g;
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case q:
            return E = Ou(
              g.type,
              g.key,
              g.props,
              null,
              b.mode,
              E
            ), _n(E, g), E.return = b, E;
          case j:
            return g = Mc(
              g,
              b.mode,
              E
            ), g.return = b, g;
          case Xt:
            return g = la(g), R(b, g, E);
        }
        if ($t(g) || jt(g))
          return g = Wl(
            g,
            b.mode,
            E,
            null
          ), g.return = b, g;
        if (typeof g.then == "function")
          return R(b, xu(g), E);
        if (g.$$typeof === V)
          return R(
            b,
            Cu(b, g),
            E
          );
        Hu(b, g);
      }
      return null;
    }
    function z(b, g, E, C) {
      var J = g !== null ? g.key : null;
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return J !== null ? null : s(b, g, "" + E, C);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case q:
            return E.key === J ? v(b, g, E, C) : null;
          case j:
            return E.key === J ? T(b, g, E, C) : null;
          case Xt:
            return E = la(E), z(b, g, E, C);
        }
        if ($t(E) || jt(E))
          return J !== null ? null : D(b, g, E, C, null);
        if (typeof E.then == "function")
          return z(
            b,
            g,
            xu(E),
            C
          );
        if (E.$$typeof === V)
          return z(
            b,
            g,
            Cu(b, E),
            C
          );
        Hu(b, E);
      }
      return null;
    }
    function A(b, g, E, C, J) {
      if (typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint")
        return b = b.get(E) || null, s(g, b, "" + C, J);
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case q:
            return b = b.get(
              C.key === null ? E : C.key
            ) || null, v(g, b, C, J);
          case j:
            return b = b.get(
              C.key === null ? E : C.key
            ) || null, T(g, b, C, J);
          case Xt:
            return C = la(C), A(
              b,
              g,
              E,
              C,
              J
            );
        }
        if ($t(C) || jt(C))
          return b = b.get(E) || null, D(g, b, C, J, null);
        if (typeof C.then == "function")
          return A(
            b,
            g,
            E,
            xu(C),
            J
          );
        if (C.$$typeof === V)
          return A(
            b,
            g,
            E,
            Cu(g, C),
            J
          );
        Hu(g, C);
      }
      return null;
    }
    function X(b, g, E, C) {
      for (var J = null, mt = null, w = g, et = g = 0, ft = null; w !== null && et < E.length; et++) {
        w.index > et ? (ft = w, w = null) : ft = w.sibling;
        var vt = z(
          b,
          w,
          E[et],
          C
        );
        if (vt === null) {
          w === null && (w = ft);
          break;
        }
        t && w && vt.alternate === null && e(b, w), g = u(vt, g, et), mt === null ? J = vt : mt.sibling = vt, mt = vt, w = ft;
      }
      if (et === E.length)
        return l(b, w), ot && Fe(b, et), J;
      if (w === null) {
        for (; et < E.length; et++)
          w = R(b, E[et], C), w !== null && (g = u(
            w,
            g,
            et
          ), mt === null ? J = w : mt.sibling = w, mt = w);
        return ot && Fe(b, et), J;
      }
      for (w = a(w); et < E.length; et++)
        ft = A(
          w,
          b,
          et,
          E[et],
          C
        ), ft !== null && (t && ft.alternate !== null && w.delete(
          ft.key === null ? et : ft.key
        ), g = u(
          ft,
          g,
          et
        ), mt === null ? J = ft : mt.sibling = ft, mt = ft);
      return t && w.forEach(function(Ll) {
        return e(b, Ll);
      }), ot && Fe(b, et), J;
    }
    function F(b, g, E, C) {
      if (E == null) throw Error(r(151));
      for (var J = null, mt = null, w = g, et = g = 0, ft = null, vt = E.next(); w !== null && !vt.done; et++, vt = E.next()) {
        w.index > et ? (ft = w, w = null) : ft = w.sibling;
        var Ll = z(b, w, vt.value, C);
        if (Ll === null) {
          w === null && (w = ft);
          break;
        }
        t && w && Ll.alternate === null && e(b, w), g = u(Ll, g, et), mt === null ? J = Ll : mt.sibling = Ll, mt = Ll, w = ft;
      }
      if (vt.done)
        return l(b, w), ot && Fe(b, et), J;
      if (w === null) {
        for (; !vt.done; et++, vt = E.next())
          vt = R(b, vt.value, C), vt !== null && (g = u(vt, g, et), mt === null ? J = vt : mt.sibling = vt, mt = vt);
        return ot && Fe(b, et), J;
      }
      for (w = a(w); !vt.done; et++, vt = E.next())
        vt = A(w, b, et, vt.value, C), vt !== null && (t && vt.alternate !== null && w.delete(vt.key === null ? et : vt.key), g = u(vt, g, et), mt === null ? J = vt : mt.sibling = vt, mt = vt);
      return t && w.forEach(function(my) {
        return e(b, my);
      }), ot && Fe(b, et), J;
    }
    function Et(b, g, E, C) {
      if (typeof E == "object" && E !== null && E.type === Q && E.key === null && (E = E.props.children), typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case q:
            t: {
              for (var J = E.key; g !== null; ) {
                if (g.key === J) {
                  if (J = E.type, J === Q) {
                    if (g.tag === 7) {
                      l(
                        b,
                        g.sibling
                      ), C = n(
                        g,
                        E.props.children
                      ), C.return = b, b = C;
                      break t;
                    }
                  } else if (g.elementType === J || typeof J == "object" && J !== null && J.$$typeof === Xt && la(J) === g.type) {
                    l(
                      b,
                      g.sibling
                    ), C = n(g, E.props), _n(C, E), C.return = b, b = C;
                    break t;
                  }
                  l(b, g);
                  break;
                } else e(b, g);
                g = g.sibling;
              }
              E.type === Q ? (C = Wl(
                E.props.children,
                b.mode,
                C,
                E.key
              ), C.return = b, b = C) : (C = Ou(
                E.type,
                E.key,
                E.props,
                null,
                b.mode,
                C
              ), _n(C, E), C.return = b, b = C);
            }
            return c(b);
          case j:
            t: {
              for (J = E.key; g !== null; ) {
                if (g.key === J)
                  if (g.tag === 4 && g.stateNode.containerInfo === E.containerInfo && g.stateNode.implementation === E.implementation) {
                    l(
                      b,
                      g.sibling
                    ), C = n(g, E.children || []), C.return = b, b = C;
                    break t;
                  } else {
                    l(b, g);
                    break;
                  }
                else e(b, g);
                g = g.sibling;
              }
              C = Mc(E, b.mode, C), C.return = b, b = C;
            }
            return c(b);
          case Xt:
            return E = la(E), Et(
              b,
              g,
              E,
              C
            );
        }
        if ($t(E))
          return X(
            b,
            g,
            E,
            C
          );
        if (jt(E)) {
          if (J = jt(E), typeof J != "function") throw Error(r(150));
          return E = J.call(E), F(
            b,
            g,
            E,
            C
          );
        }
        if (typeof E.then == "function")
          return Et(
            b,
            g,
            xu(E),
            C
          );
        if (E.$$typeof === V)
          return Et(
            b,
            g,
            Cu(b, E),
            C
          );
        Hu(b, E);
      }
      return typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint" ? (E = "" + E, g !== null && g.tag === 6 ? (l(b, g.sibling), C = n(g, E), C.return = b, b = C) : (l(b, g), C = Oc(E, b.mode, C), C.return = b, b = C), c(b)) : l(b, g);
    }
    return function(b, g, E, C) {
      try {
        Sn = 0;
        var J = Et(
          b,
          g,
          E,
          C
        );
        return Ba = null, J;
      } catch (w) {
        if (w === ja || w === Ru) throw w;
        var mt = ye(29, w, null, b.mode);
        return mt.lanes = C, mt.return = b, mt;
      }
    };
  }
  var na = Po(!0), ts = Po(!1), El = !1;
  function Lc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Gc(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function Tl(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function zl(t, e, l) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (gt & 2) !== 0) {
      var n = a.pending;
      return n === null ? e.next = e : (e.next = n.next, n.next = e), a.pending = e, e = Au(t), qo(t, null, l), e;
    }
    return zu(t, a, e, l), Au(t);
  }
  function En(t, e, l) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (l & 4194048) !== 0)) {
      var a = e.lanes;
      a &= t.pendingLanes, l |= a, e.lanes = l, Zr(t, l);
    }
  }
  function Xc(t, e) {
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
  var Qc = !1;
  function Tn() {
    if (Qc) {
      var t = Ha;
      if (t !== null) throw t;
    }
  }
  function zn(t, e, l, a) {
    Qc = !1;
    var n = t.updateQueue;
    El = !1;
    var u = n.firstBaseUpdate, c = n.lastBaseUpdate, s = n.shared.pending;
    if (s !== null) {
      n.shared.pending = null;
      var v = s, T = v.next;
      v.next = null, c === null ? u = T : c.next = T, c = v;
      var D = t.alternate;
      D !== null && (D = D.updateQueue, s = D.lastBaseUpdate, s !== c && (s === null ? D.firstBaseUpdate = T : s.next = T, D.lastBaseUpdate = v));
    }
    if (u !== null) {
      var R = n.baseState;
      c = 0, D = T = v = null, s = u;
      do {
        var z = s.lane & -536870913, A = z !== s.lane;
        if (A ? (ct & z) === z : (a & z) === z) {
          z !== 0 && z === xa && (Qc = !0), D !== null && (D = D.next = {
            lane: 0,
            tag: s.tag,
            payload: s.payload,
            callback: null,
            next: null
          });
          t: {
            var X = t, F = s;
            z = e;
            var Et = l;
            switch (F.tag) {
              case 1:
                if (X = F.payload, typeof X == "function") {
                  R = X.call(Et, R, z);
                  break t;
                }
                R = X;
                break t;
              case 3:
                X.flags = X.flags & -65537 | 128;
              case 0:
                if (X = F.payload, z = typeof X == "function" ? X.call(Et, R, z) : X, z == null) break t;
                R = x({}, R, z);
                break t;
              case 2:
                El = !0;
            }
          }
          z = s.callback, z !== null && (t.flags |= 64, A && (t.flags |= 8192), A = n.callbacks, A === null ? n.callbacks = [z] : A.push(z));
        } else
          A = {
            lane: z,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null
          }, D === null ? (T = D = A, v = R) : D = D.next = A, c |= z;
        if (s = s.next, s === null) {
          if (s = n.shared.pending, s === null)
            break;
          A = s, s = A.next, A.next = null, n.lastBaseUpdate = A, n.shared.pending = null;
        }
      } while (!0);
      D === null && (v = R), n.baseState = v, n.firstBaseUpdate = T, n.lastBaseUpdate = D, u === null && (n.shared.lanes = 0), Cl |= c, t.lanes = c, t.memoizedState = R;
    }
  }
  function es(t, e) {
    if (typeof t != "function")
      throw Error(r(191, t));
    t.call(e);
  }
  function ls(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++)
        es(l[t], e);
  }
  var qa = h(null), ju = h(0);
  function as(t, e) {
    t = cl, H(ju, t), H(qa, e), cl = t | e.baseLanes;
  }
  function wc() {
    H(ju, cl), H(qa, qa.current);
  }
  function Zc() {
    cl = ju.current, N(qa), N(ju);
  }
  var ge = h(null), Ne = null;
  function Al(t) {
    var e = t.alternate;
    H(xt, xt.current & 1), H(ge, t), Ne === null && (e === null || qa.current !== null || e.memoizedState !== null) && (Ne = t);
  }
  function Vc(t) {
    H(xt, xt.current), H(ge, t), Ne === null && (Ne = t);
  }
  function ns(t) {
    t.tag === 22 ? (H(xt, xt.current), H(ge, t), Ne === null && (Ne = t)) : Ol();
  }
  function Ol() {
    H(xt, xt.current), H(ge, ge.current);
  }
  function pe(t) {
    N(ge), Ne === t && (Ne = null), N(xt);
  }
  var xt = h(0);
  function Bu(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || If(l) || Pf(l)))
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
  var Pe = 0, tt = null, St = null, Yt = null, qu = !1, Ya = !1, ua = !1, Yu = 0, An = 0, La = null, ah = 0;
  function Nt() {
    throw Error(r(321));
  }
  function Kc(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!he(t[l], e[l])) return !1;
    return !0;
  }
  function Jc(t, e, l, a, n, u) {
    return Pe = u, tt = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, M.H = t === null || t.memoizedState === null ? Xs : rf, ua = !1, u = l(a, n), ua = !1, Ya && (u = is(
      e,
      l,
      a,
      n
    )), us(t), u;
  }
  function us(t) {
    M.H = Dn;
    var e = St !== null && St.next !== null;
    if (Pe = 0, Yt = St = tt = null, qu = !1, An = 0, La = null, e) throw Error(r(300));
    t === null || Lt || (t = t.dependencies, t !== null && Du(t) && (Lt = !0));
  }
  function is(t, e, l, a) {
    tt = t;
    var n = 0;
    do {
      if (Ya && (La = null), An = 0, Ya = !1, 25 <= n) throw Error(r(301));
      if (n += 1, Yt = St = null, t.updateQueue != null) {
        var u = t.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      M.H = Qs, u = e(l, a);
    } while (Ya);
    return u;
  }
  function nh() {
    var t = M.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? On(e) : e, t = t.useState()[0], (St !== null ? St.memoizedState : null) !== t && (tt.flags |= 1024), e;
  }
  function $c() {
    var t = Yu !== 0;
    return Yu = 0, t;
  }
  function kc(t, e, l) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~l;
  }
  function Fc(t) {
    if (qu) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      qu = !1;
    }
    Pe = 0, Yt = St = tt = null, Ya = !1, An = Yu = 0, La = null;
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
  function Ht() {
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
  function Lu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function On(t) {
    var e = An;
    return An += 1, La === null && (La = []), t = Fo(La, t, e), e = tt, (Yt === null ? e.memoizedState : Yt.next) === null && (e = e.alternate, M.H = e === null || e.memoizedState === null ? Xs : rf), t;
  }
  function Gu(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return On(t);
      if (t.$$typeof === V) return Wt(t);
    }
    throw Error(r(438, String(t)));
  }
  function Wc(t) {
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
    if (e == null && (e = { data: [], index: 0 }), l === null && (l = Lu(), tt.updateQueue = l), l.memoCache = e, l = e.data[e.index], l === void 0)
      for (l = e.data[e.index] = Array(t), a = 0; a < t; a++)
        l[a] = Ut;
    return e.index++, l;
  }
  function tl(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Xu(t) {
    var e = Ht();
    return Ic(e, St, t);
  }
  function Ic(t, e, l) {
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
      var s = c = null, v = null, T = e, D = !1;
      do {
        var R = T.lane & -536870913;
        if (R !== T.lane ? (ct & R) === R : (Pe & R) === R) {
          var z = T.revertLane;
          if (z === 0)
            v !== null && (v = v.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: T.action,
              hasEagerState: T.hasEagerState,
              eagerState: T.eagerState,
              next: null
            }), R === xa && (D = !0);
          else if ((Pe & z) === z) {
            T = T.next, z === xa && (D = !0);
            continue;
          } else
            R = {
              lane: 0,
              revertLane: T.revertLane,
              gesture: null,
              action: T.action,
              hasEagerState: T.hasEagerState,
              eagerState: T.eagerState,
              next: null
            }, v === null ? (s = v = R, c = u) : v = v.next = R, tt.lanes |= z, Cl |= z;
          R = T.action, ua && l(u, R), u = T.hasEagerState ? T.eagerState : l(u, R);
        } else
          z = {
            lane: R,
            revertLane: T.revertLane,
            gesture: T.gesture,
            action: T.action,
            hasEagerState: T.hasEagerState,
            eagerState: T.eagerState,
            next: null
          }, v === null ? (s = v = z, c = u) : v = v.next = z, tt.lanes |= R, Cl |= R;
        T = T.next;
      } while (T !== null && T !== e);
      if (v === null ? c = u : v.next = s, !he(u, t.memoizedState) && (Lt = !0, D && (l = Ha, l !== null)))
        throw l;
      t.memoizedState = u, t.baseState = c, t.baseQueue = v, a.lastRenderedState = u;
    }
    return n === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function Pc(t) {
    var e = Ht(), l = e.queue;
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
  function cs(t, e, l) {
    var a = tt, n = Ht(), u = ot;
    if (u) {
      if (l === void 0) throw Error(r(407));
      l = l();
    } else l = e();
    var c = !he(
      (St || n).memoizedState,
      l
    );
    if (c && (n.memoizedState = l, Lt = !0), n = n.queue, lf(os.bind(null, a, n, t), [
      t
    ]), n.getSnapshot !== e || c || Yt !== null && Yt.memoizedState.tag & 1) {
      if (a.flags |= 2048, Ga(
        9,
        { destroy: void 0 },
        rs.bind(
          null,
          a,
          n,
          l,
          e
        ),
        null
      ), zt === null) throw Error(r(349));
      u || (Pe & 127) !== 0 || fs(a, e, l);
    }
    return l;
  }
  function fs(t, e, l) {
    t.flags |= 16384, t = { getSnapshot: e, value: l }, e = tt.updateQueue, e === null ? (e = Lu(), tt.updateQueue = e, e.stores = [t]) : (l = e.stores, l === null ? e.stores = [t] : l.push(t));
  }
  function rs(t, e, l, a) {
    e.value = l, e.getSnapshot = a, ss(e) && ds(t);
  }
  function os(t, e, l) {
    return l(function() {
      ss(e) && ds(t);
    });
  }
  function ss(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !he(t, l);
    } catch {
      return !0;
    }
  }
  function ds(t) {
    var e = Fl(t, 2);
    e !== null && re(e, t, 2);
  }
  function tf(t) {
    var e = le();
    if (typeof t == "function") {
      var l = t;
      if (t = l(), ua) {
        hl(!0);
        try {
          l();
        } finally {
          hl(!1);
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
  function ms(t, e, l, a) {
    return t.baseState = l, Ic(
      t,
      St,
      typeof a == "function" ? a : tl
    );
  }
  function uh(t, e, l, a, n) {
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
      M.T !== null ? l(!0) : u.isTransition = !1, a(u), l = e.pending, l === null ? (u.next = e.pending = u, vs(e, u)) : (u.next = l.next, e.pending = l.next = u);
    }
  }
  function vs(t, e) {
    var l = e.action, a = e.payload, n = t.state;
    if (e.isTransition) {
      var u = M.T, c = {};
      M.T = c;
      try {
        var s = l(n, a), v = M.S;
        v !== null && v(c, s), hs(t, e, s);
      } catch (T) {
        ef(t, e, T);
      } finally {
        u !== null && c.types !== null && (u.types = c.types), M.T = u;
      }
    } else
      try {
        u = l(n, a), hs(t, e, u);
      } catch (T) {
        ef(t, e, T);
      }
  }
  function hs(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(a) {
        ys(t, e, a);
      },
      function(a) {
        return ef(t, e, a);
      }
    ) : ys(t, e, l);
  }
  function ys(t, e, l) {
    e.status = "fulfilled", e.value = l, gs(e), t.state = l, e = t.pending, e !== null && (l = e.next, l === e ? t.pending = null : (l = l.next, e.next = l, vs(t, l)));
  }
  function ef(t, e, l) {
    var a = t.pending;
    if (t.pending = null, a !== null) {
      a = a.next;
      do
        e.status = "rejected", e.reason = l, gs(e), e = e.next;
      while (e !== a);
    }
    t.action = null;
  }
  function gs(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function ps(t, e) {
    return e;
  }
  function bs(t, e) {
    if (ot) {
      var l = zt.formState;
      if (l !== null) {
        t: {
          var a = tt;
          if (ot) {
            if (Mt) {
              e: {
                for (var n = Mt, u = Ce; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break e;
                  }
                  if (n = Re(
                    n.nextSibling
                  ), n === null) {
                    n = null;
                    break e;
                  }
                }
                u = n.data, n = u === "F!" || u === "F" ? n : null;
              }
              if (n) {
                Mt = Re(
                  n.nextSibling
                ), a = n.data === "F!";
                break t;
              }
            }
            Sl(a);
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
      lastRenderedReducer: ps,
      lastRenderedState: e
    }, l.queue = a, l = Ys.bind(
      null,
      tt,
      a
    ), a.dispatch = l, a = tf(!1), u = ff.bind(
      null,
      tt,
      !1,
      a.queue
    ), a = le(), n = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, a.queue = n, l = uh.bind(
      null,
      tt,
      n,
      u,
      l
    ), n.dispatch = l, a.memoizedState = t, [e, l, !1];
  }
  function Ss(t) {
    var e = Ht();
    return _s(e, St, t);
  }
  function _s(t, e, l) {
    if (e = Ic(
      t,
      e,
      ps
    )[0], t = Xu(tl)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var a = On(e);
      } catch (c) {
        throw c === ja ? Ru : c;
      }
    else a = e;
    e = Ht();
    var n = e.queue, u = n.dispatch;
    return l !== e.memoizedState && (tt.flags |= 2048, Ga(
      9,
      { destroy: void 0 },
      ih.bind(null, n, l),
      null
    )), [a, u, t];
  }
  function ih(t, e) {
    t.action = e;
  }
  function Es(t) {
    var e = Ht(), l = St;
    if (l !== null)
      return _s(e, l, t);
    Ht(), e = e.memoizedState, l = Ht();
    var a = l.queue.dispatch;
    return l.memoizedState = t, [e, a, !1];
  }
  function Ga(t, e, l, a) {
    return t = { tag: t, create: l, deps: a, inst: e, next: null }, e = tt.updateQueue, e === null && (e = Lu(), tt.updateQueue = e), l = e.lastEffect, l === null ? e.lastEffect = t.next = t : (a = l.next, l.next = t, t.next = a, e.lastEffect = t), t;
  }
  function Ts() {
    return Ht().memoizedState;
  }
  function Qu(t, e, l, a) {
    var n = le();
    tt.flags |= t, n.memoizedState = Ga(
      1 | e,
      { destroy: void 0 },
      l,
      a === void 0 ? null : a
    );
  }
  function wu(t, e, l, a) {
    var n = Ht();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    St !== null && a !== null && Kc(a, St.memoizedState.deps) ? n.memoizedState = Ga(e, u, l, a) : (tt.flags |= t, n.memoizedState = Ga(
      1 | e,
      u,
      l,
      a
    ));
  }
  function zs(t, e) {
    Qu(8390656, 8, t, e);
  }
  function lf(t, e) {
    wu(2048, 8, t, e);
  }
  function ch(t) {
    tt.flags |= 4;
    var e = tt.updateQueue;
    if (e === null)
      e = Lu(), tt.updateQueue = e, e.events = [t];
    else {
      var l = e.events;
      l === null ? e.events = [t] : l.push(t);
    }
  }
  function As(t) {
    var e = Ht().memoizedState;
    return ch({ ref: e, nextImpl: t }), function() {
      if ((gt & 2) !== 0) throw Error(r(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function Os(t, e) {
    return wu(4, 2, t, e);
  }
  function Ms(t, e) {
    return wu(4, 4, t, e);
  }
  function Ds(t, e) {
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
  function Cs(t, e, l) {
    l = l != null ? l.concat([t]) : null, wu(4, 4, Ds.bind(null, e, t), l);
  }
  function af() {
  }
  function Ns(t, e) {
    var l = Ht();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    return e !== null && Kc(e, a[1]) ? a[0] : (l.memoizedState = [t, e], t);
  }
  function Rs(t, e) {
    var l = Ht();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    if (e !== null && Kc(e, a[1]))
      return a[0];
    if (a = t(), ua) {
      hl(!0);
      try {
        t();
      } finally {
        hl(!1);
      }
    }
    return l.memoizedState = [a, e], a;
  }
  function nf(t, e, l) {
    return l === void 0 || (Pe & 1073741824) !== 0 && (ct & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = l, t = Ud(), tt.lanes |= t, Cl |= t, l);
  }
  function Us(t, e, l, a) {
    return he(l, e) ? l : qa.current !== null ? (t = nf(t, l, a), he(t, e) || (Lt = !0), t) : (Pe & 42) === 0 || (Pe & 1073741824) !== 0 && (ct & 261930) === 0 ? (Lt = !0, t.memoizedState = l) : (t = Ud(), tt.lanes |= t, Cl |= t, e);
  }
  function xs(t, e, l, a, n) {
    var u = Y.p;
    Y.p = u !== 0 && 8 > u ? u : 8;
    var c = M.T, s = {};
    M.T = s, ff(t, !1, e, l);
    try {
      var v = n(), T = M.S;
      if (T !== null && T(s, v), v !== null && typeof v == "object" && typeof v.then == "function") {
        var D = lh(
          v,
          a
        );
        Mn(
          t,
          e,
          D,
          _e(t)
        );
      } else
        Mn(
          t,
          e,
          a,
          _e(t)
        );
    } catch (R) {
      Mn(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: R },
        _e()
      );
    } finally {
      Y.p = u, c !== null && s.types !== null && (c.types = s.types), M.T = c;
    }
  }
  function fh() {
  }
  function uf(t, e, l, a) {
    if (t.tag !== 5) throw Error(r(476));
    var n = Hs(t).queue;
    xs(
      t,
      n,
      e,
      K,
      l === null ? fh : function() {
        return js(t), l(a);
      }
    );
  }
  function Hs(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: K,
      baseState: K,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: tl,
        lastRenderedState: K
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
  function js(t) {
    var e = Hs(t);
    e.next === null && (e = t.alternate.memoizedState), Mn(
      t,
      e.next.queue,
      {},
      _e()
    );
  }
  function cf() {
    return Wt(Zn);
  }
  function Bs() {
    return Ht().memoizedState;
  }
  function qs() {
    return Ht().memoizedState;
  }
  function rh(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = _e();
          t = Tl(l);
          var a = zl(e, t, l);
          a !== null && (re(a, e, l), En(a, e, l)), e = { cache: jc() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function oh(t, e, l) {
    var a = _e();
    l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Zu(t) ? Ls(e, l) : (l = zc(t, e, l, a), l !== null && (re(l, t, a), Gs(l, e, a)));
  }
  function Ys(t, e, l) {
    var a = _e();
    Mn(t, e, l, a);
  }
  function Mn(t, e, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Zu(t)) Ls(e, n);
    else {
      var u = t.alternate;
      if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer, u !== null))
        try {
          var c = e.lastRenderedState, s = u(c, l);
          if (n.hasEagerState = !0, n.eagerState = s, he(s, c))
            return zu(t, e, n, 0), zt === null && Tu(), !1;
        } catch {
        }
      if (l = zc(t, e, n, a), l !== null)
        return re(l, t, a), Gs(l, e, a), !0;
    }
    return !1;
  }
  function ff(t, e, l, a) {
    if (a = {
      lane: 2,
      revertLane: Gf(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Zu(t)) {
      if (e) throw Error(r(479));
    } else
      e = zc(
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
  function Ls(t, e) {
    Ya = qu = !0;
    var l = t.pending;
    l === null ? e.next = e : (e.next = l.next, l.next = e), t.pending = e;
  }
  function Gs(t, e, l) {
    if ((l & 4194048) !== 0) {
      var a = e.lanes;
      a &= t.pendingLanes, l |= a, e.lanes = l, Zr(t, l);
    }
  }
  var Dn = {
    readContext: Wt,
    use: Gu,
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
  Dn.useEffectEvent = Nt;
  var Xs = {
    readContext: Wt,
    use: Gu,
    useCallback: function(t, e) {
      return le().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: Wt,
    useEffect: zs,
    useImperativeHandle: function(t, e, l) {
      l = l != null ? l.concat([t]) : null, Qu(
        4194308,
        4,
        Ds.bind(null, e, t),
        l
      );
    },
    useLayoutEffect: function(t, e) {
      return Qu(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      Qu(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var l = le();
      e = e === void 0 ? null : e;
      var a = t();
      if (ua) {
        hl(!0);
        try {
          t();
        } finally {
          hl(!1);
        }
      }
      return l.memoizedState = [a, e], a;
    },
    useReducer: function(t, e, l) {
      var a = le();
      if (l !== void 0) {
        var n = l(e);
        if (ua) {
          hl(!0);
          try {
            l(e);
          } finally {
            hl(!1);
          }
        }
      } else n = e;
      return a.memoizedState = a.baseState = n, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: n
      }, a.queue = t, t = t.dispatch = oh.bind(
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
      t = tf(t);
      var e = t.queue, l = Ys.bind(null, tt, e);
      return e.dispatch = l, [t.memoizedState, l];
    },
    useDebugValue: af,
    useDeferredValue: function(t, e) {
      var l = le();
      return nf(l, t, e);
    },
    useTransition: function() {
      var t = tf(!1);
      return t = xs.bind(
        null,
        tt,
        t.queue,
        !0,
        !1
      ), le().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, l) {
      var a = tt, n = le();
      if (ot) {
        if (l === void 0)
          throw Error(r(407));
        l = l();
      } else {
        if (l = e(), zt === null)
          throw Error(r(349));
        (ct & 127) !== 0 || fs(a, e, l);
      }
      n.memoizedState = l;
      var u = { value: l, getSnapshot: e };
      return n.queue = u, zs(os.bind(null, a, u, t), [
        t
      ]), a.flags |= 2048, Ga(
        9,
        { destroy: void 0 },
        rs.bind(
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
      var t = le(), e = zt.identifierPrefix;
      if (ot) {
        var l = Ge, a = Le;
        l = (a & ~(1 << 32 - ve(a) - 1)).toString(32) + l, e = "_" + e + "R_" + l, l = Yu++, 0 < l && (e += "H" + l.toString(32)), e += "_";
      } else
        l = ah++, e = "_" + e + "r_" + l.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: cf,
    useFormState: bs,
    useActionState: bs,
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
      return e.queue = l, e = ff.bind(
        null,
        tt,
        !0,
        l
      ), l.dispatch = e, [t, e];
    },
    useMemoCache: Wc,
    useCacheRefresh: function() {
      return le().memoizedState = rh.bind(
        null,
        tt
      );
    },
    useEffectEvent: function(t) {
      var e = le(), l = { impl: t };
      return e.memoizedState = l, function() {
        if ((gt & 2) !== 0)
          throw Error(r(440));
        return l.impl.apply(void 0, arguments);
      };
    }
  }, rf = {
    readContext: Wt,
    use: Gu,
    useCallback: Ns,
    useContext: Wt,
    useEffect: lf,
    useImperativeHandle: Cs,
    useInsertionEffect: Os,
    useLayoutEffect: Ms,
    useMemo: Rs,
    useReducer: Xu,
    useRef: Ts,
    useState: function() {
      return Xu(tl);
    },
    useDebugValue: af,
    useDeferredValue: function(t, e) {
      var l = Ht();
      return Us(
        l,
        St.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Xu(tl)[0], e = Ht().memoizedState;
      return [
        typeof t == "boolean" ? t : On(t),
        e
      ];
    },
    useSyncExternalStore: cs,
    useId: Bs,
    useHostTransitionStatus: cf,
    useFormState: Ss,
    useActionState: Ss,
    useOptimistic: function(t, e) {
      var l = Ht();
      return ms(l, St, t, e);
    },
    useMemoCache: Wc,
    useCacheRefresh: qs
  };
  rf.useEffectEvent = As;
  var Qs = {
    readContext: Wt,
    use: Gu,
    useCallback: Ns,
    useContext: Wt,
    useEffect: lf,
    useImperativeHandle: Cs,
    useInsertionEffect: Os,
    useLayoutEffect: Ms,
    useMemo: Rs,
    useReducer: Pc,
    useRef: Ts,
    useState: function() {
      return Pc(tl);
    },
    useDebugValue: af,
    useDeferredValue: function(t, e) {
      var l = Ht();
      return St === null ? nf(l, t, e) : Us(
        l,
        St.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Pc(tl)[0], e = Ht().memoizedState;
      return [
        typeof t == "boolean" ? t : On(t),
        e
      ];
    },
    useSyncExternalStore: cs,
    useId: Bs,
    useHostTransitionStatus: cf,
    useFormState: Es,
    useActionState: Es,
    useOptimistic: function(t, e) {
      var l = Ht();
      return St !== null ? ms(l, St, t, e) : (l.baseState = t, [t, l.queue.dispatch]);
    },
    useMemoCache: Wc,
    useCacheRefresh: qs
  };
  Qs.useEffectEvent = As;
  function of(t, e, l, a) {
    e = t.memoizedState, l = l(a, e), l = l == null ? e : x({}, e, l), t.memoizedState = l, t.lanes === 0 && (t.updateQueue.baseState = l);
  }
  var sf = {
    enqueueSetState: function(t, e, l) {
      t = t._reactInternals;
      var a = _e(), n = Tl(a);
      n.payload = e, l != null && (n.callback = l), e = zl(t, n, a), e !== null && (re(e, t, a), En(e, t, a));
    },
    enqueueReplaceState: function(t, e, l) {
      t = t._reactInternals;
      var a = _e(), n = Tl(a);
      n.tag = 1, n.payload = e, l != null && (n.callback = l), e = zl(t, n, a), e !== null && (re(e, t, a), En(e, t, a));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var l = _e(), a = Tl(l);
      a.tag = 2, e != null && (a.callback = e), e = zl(t, a, l), e !== null && (re(e, t, l), En(e, t, l));
    }
  };
  function ws(t, e, l, a, n, u, c) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, u, c) : e.prototype && e.prototype.isPureReactComponent ? !vn(l, a) || !vn(n, u) : !0;
  }
  function Zs(t, e, l, a) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(l, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(l, a), e.state !== t && sf.enqueueReplaceState(e, e.state, null);
  }
  function ia(t, e) {
    var l = e;
    if ("ref" in e) {
      l = {};
      for (var a in e)
        a !== "ref" && (l[a] = e[a]);
    }
    if (t = t.defaultProps) {
      l === e && (l = x({}, l));
      for (var n in t)
        l[n] === void 0 && (l[n] = t[n]);
    }
    return l;
  }
  function Vs(t) {
    Eu(t);
  }
  function Ks(t) {
    console.error(t);
  }
  function Js(t) {
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
  function $s(t, e, l) {
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
  function df(t, e, l) {
    return l = Tl(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      Vu(t, e);
    }, l;
  }
  function ks(t) {
    return t = Tl(t), t.tag = 3, t;
  }
  function Fs(t, e, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = a.value;
      t.payload = function() {
        return n(u);
      }, t.callback = function() {
        $s(e, l, a);
      };
    }
    var c = l.stateNode;
    c !== null && typeof c.componentDidCatch == "function" && (t.callback = function() {
      $s(e, l, a), typeof n != "function" && (Nl === null ? Nl = /* @__PURE__ */ new Set([this]) : Nl.add(this));
      var s = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: s !== null ? s : ""
      });
    });
  }
  function sh(t, e, l, a, n) {
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
            return Ne === null ? ai() : l.alternate === null && Rt === 0 && (Rt = 3), l.flags &= -257, l.flags |= 65536, l.lanes = n, a === Uu ? l.flags |= 16384 : (e = l.updateQueue, e === null ? l.updateQueue = /* @__PURE__ */ new Set([a]) : e.add(a), qf(t, a, n)), !1;
          case 22:
            return l.flags |= 65536, a === Uu ? l.flags |= 16384 : (e = l.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, l.updateQueue = e) : (l = e.retryQueue, l === null ? e.retryQueue = /* @__PURE__ */ new Set([a]) : l.add(a)), qf(t, a, n)), !1;
        }
        throw Error(r(435, l.tag));
      }
      return qf(t, a, n), ai(), !1;
    }
    if (ot)
      return e = ge.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = n, a !== Nc && (t = Error(r(422), { cause: a }), gn(Oe(t, l)))) : (a !== Nc && (e = Error(r(423), {
        cause: a
      }), gn(
        Oe(e, l)
      )), t = t.current.alternate, t.flags |= 65536, n &= -n, t.lanes |= n, a = Oe(a, l), n = df(
        t.stateNode,
        a,
        n
      ), Xc(t, n), Rt !== 4 && (Rt = 2)), !1;
    var u = Error(r(520), { cause: a });
    if (u = Oe(u, l), Bn === null ? Bn = [u] : Bn.push(u), Rt !== 4 && (Rt = 2), e === null) return !0;
    a = Oe(a, l), l = e;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, t = n & -n, l.lanes |= t, t = df(l.stateNode, a, t), Xc(l, t), !1;
        case 1:
          if (e = l.type, u = l.stateNode, (l.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Nl === null || !Nl.has(u))))
            return l.flags |= 65536, n &= -n, l.lanes |= n, n = ks(n), Fs(
              n,
              t,
              l,
              a
            ), Xc(l, n), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var mf = Error(r(461)), Lt = !1;
  function It(t, e, l, a) {
    e.child = t === null ? ts(e, null, l, a) : na(
      e,
      t.child,
      l,
      a
    );
  }
  function Ws(t, e, l, a, n) {
    l = l.render;
    var u = e.ref;
    if ("ref" in a) {
      var c = {};
      for (var s in a)
        s !== "ref" && (c[s] = a[s]);
    } else c = a;
    return ta(e), a = Jc(
      t,
      e,
      l,
      c,
      u,
      n
    ), s = $c(), t !== null && !Lt ? (kc(t, e, n), el(t, e, n)) : (ot && s && Dc(e), e.flags |= 1, It(t, e, a, n), e.child);
  }
  function Is(t, e, l, a, n) {
    if (t === null) {
      var u = l.type;
      return typeof u == "function" && !Ac(u) && u.defaultProps === void 0 && l.compare === null ? (e.tag = 15, e.type = u, Ps(
        t,
        e,
        u,
        a,
        n
      )) : (t = Ou(
        l.type,
        null,
        a,
        e,
        e.mode,
        n
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (u = t.child, !_f(t, n)) {
      var c = u.memoizedProps;
      if (l = l.compare, l = l !== null ? l : vn, l(c, a) && t.ref === e.ref)
        return el(t, e, n);
    }
    return e.flags |= 1, t = ke(u, a), t.ref = e.ref, t.return = e, e.child = t;
  }
  function Ps(t, e, l, a, n) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (vn(u, a) && t.ref === e.ref)
        if (Lt = !1, e.pendingProps = a = u, _f(t, n))
          (t.flags & 131072) !== 0 && (Lt = !0);
        else
          return e.lanes = t.lanes, el(t, e, n);
    }
    return vf(
      t,
      e,
      l,
      a,
      n
    );
  }
  function td(t, e, l, a) {
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
        return ed(
          t,
          e,
          u,
          l,
          a
        );
      }
      if ((l & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && Nu(
          e,
          u !== null ? u.cachePool : null
        ), u !== null ? as(e, u) : wc(), ns(e);
      else
        return a = e.lanes = 536870912, ed(
          t,
          e,
          u !== null ? u.baseLanes | l : l,
          l,
          a
        );
    } else
      u !== null ? (Nu(e, u.cachePool), as(e, u), Ol(), e.memoizedState = null) : (t !== null && Nu(e, null), wc(), Ol());
    return It(t, e, n, l), e.child;
  }
  function Cn(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function ed(t, e, l, a, n) {
    var u = qc();
    return u = u === null ? null : { parent: qt._currentValue, pool: u }, e.memoizedState = {
      baseLanes: l,
      cachePool: u
    }, t !== null && Nu(e, null), wc(), ns(e), t !== null && Ua(t, e, a, !0), e.childLanes = n, null;
  }
  function Ku(t, e) {
    return e = $u(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function ld(t, e, l) {
    return na(e, t.child, null, l), t = Ku(e, e.pendingProps), t.flags |= 2, pe(e), e.memoizedState = null, t;
  }
  function dh(t, e, l) {
    var a = e.pendingProps, n = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (ot) {
        if (a.mode === "hidden")
          return t = Ku(e, a), e.lanes = 536870912, Cn(null, t);
        if (Vc(e), (t = Mt) ? (t = vm(
          t,
          Ce
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: pl !== null ? { id: Le, overflow: Ge } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Lo(t), l.return = e, e.child = l, Ft = e, Mt = null)) : t = null, t === null) throw Sl(e);
        return e.lanes = 536870912, null;
      }
      return Ku(e, a);
    }
    var u = t.memoizedState;
    if (u !== null) {
      var c = u.dehydrated;
      if (Vc(e), n)
        if (e.flags & 256)
          e.flags &= -257, e = ld(
            t,
            e,
            l
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(r(558));
      else if (Lt || Ua(t, e, l, !1), n = (l & t.childLanes) !== 0, Lt || n) {
        if (a = zt, a !== null && (c = Vr(a, l), c !== 0 && c !== u.retryLane))
          throw u.retryLane = c, Fl(t, c), re(a, t, c), mf;
        ai(), e = ld(
          t,
          e,
          l
        );
      } else
        t = u.treeContext, Mt = Re(c.nextSibling), Ft = e, ot = !0, bl = null, Ce = !1, t !== null && Qo(e, t), e = Ku(e, a), e.flags |= 4096;
      return e;
    }
    return t = ke(t.child, {
      mode: a.mode,
      children: a.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Ju(t, e) {
    var l = e.ref;
    if (l === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object")
        throw Error(r(284));
      (t === null || t.ref !== l) && (e.flags |= 4194816);
    }
  }
  function vf(t, e, l, a, n) {
    return ta(e), l = Jc(
      t,
      e,
      l,
      a,
      void 0,
      n
    ), a = $c(), t !== null && !Lt ? (kc(t, e, n), el(t, e, n)) : (ot && a && Dc(e), e.flags |= 1, It(t, e, l, n), e.child);
  }
  function ad(t, e, l, a, n, u) {
    return ta(e), e.updateQueue = null, l = is(
      e,
      a,
      l,
      n
    ), us(t), a = $c(), t !== null && !Lt ? (kc(t, e, u), el(t, e, u)) : (ot && a && Dc(e), e.flags |= 1, It(t, e, l, u), e.child);
  }
  function nd(t, e, l, a, n) {
    if (ta(e), e.stateNode === null) {
      var u = Da, c = l.contextType;
      typeof c == "object" && c !== null && (u = Wt(c)), u = new l(a, u), e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = sf, e.stateNode = u, u._reactInternals = e, u = e.stateNode, u.props = a, u.state = e.memoizedState, u.refs = {}, Lc(e), c = l.contextType, u.context = typeof c == "object" && c !== null ? Wt(c) : Da, u.state = e.memoizedState, c = l.getDerivedStateFromProps, typeof c == "function" && (of(
        e,
        l,
        c,
        a
      ), u.state = e.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (c = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), c !== u.state && sf.enqueueReplaceState(u, u.state, null), zn(e, a, u, n), Tn(), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = !0;
    } else if (t === null) {
      u = e.stateNode;
      var s = e.memoizedProps, v = ia(l, s);
      u.props = v;
      var T = u.context, D = l.contextType;
      c = Da, typeof D == "object" && D !== null && (c = Wt(D));
      var R = l.getDerivedStateFromProps;
      D = typeof R == "function" || typeof u.getSnapshotBeforeUpdate == "function", s = e.pendingProps !== s, D || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (s || T !== c) && Zs(
        e,
        u,
        a,
        c
      ), El = !1;
      var z = e.memoizedState;
      u.state = z, zn(e, a, u, n), Tn(), T = e.memoizedState, s || z !== T || El ? (typeof R == "function" && (of(
        e,
        l,
        R,
        a
      ), T = e.memoizedState), (v = El || ws(
        e,
        l,
        v,
        a,
        z,
        T,
        c
      )) ? (D || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = T), u.props = a, u.state = T, u.context = c, a = v) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = !1);
    } else {
      u = e.stateNode, Gc(t, e), c = e.memoizedProps, D = ia(l, c), u.props = D, R = e.pendingProps, z = u.context, T = l.contextType, v = Da, typeof T == "object" && T !== null && (v = Wt(T)), s = l.getDerivedStateFromProps, (T = typeof s == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (c !== R || z !== v) && Zs(
        e,
        u,
        a,
        v
      ), El = !1, z = e.memoizedState, u.state = z, zn(e, a, u, n), Tn();
      var A = e.memoizedState;
      c !== R || z !== A || El || t !== null && t.dependencies !== null && Du(t.dependencies) ? (typeof s == "function" && (of(
        e,
        l,
        s,
        a
      ), A = e.memoizedState), (D = El || ws(
        e,
        l,
        D,
        a,
        z,
        A,
        v
      ) || t !== null && t.dependencies !== null && Du(t.dependencies)) ? (T || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, A, v), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        a,
        A,
        v
      )), typeof u.componentDidUpdate == "function" && (e.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || c === t.memoizedProps && z === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || c === t.memoizedProps && z === t.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = A), u.props = a, u.state = A, u.context = v, a = D) : (typeof u.componentDidUpdate != "function" || c === t.memoizedProps && z === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || c === t.memoizedProps && z === t.memoizedState || (e.flags |= 1024), a = !1);
    }
    return u = a, Ju(t, e), a = (e.flags & 128) !== 0, u || a ? (u = e.stateNode, l = a && typeof l.getDerivedStateFromError != "function" ? null : u.render(), e.flags |= 1, t !== null && a ? (e.child = na(
      e,
      t.child,
      null,
      n
    ), e.child = na(
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
  function ud(t, e, l, a) {
    return Il(), e.flags |= 256, It(t, e, l, a), e.child;
  }
  var hf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function yf(t) {
    return { baseLanes: t, cachePool: $o() };
  }
  function gf(t, e, l) {
    return t = t !== null ? t.childLanes & ~l : 0, e && (t |= Se), t;
  }
  function id(t, e, l) {
    var a = e.pendingProps, n = !1, u = (e.flags & 128) !== 0, c;
    if ((c = u) || (c = t !== null && t.memoizedState === null ? !1 : (xt.current & 2) !== 0), c && (n = !0, e.flags &= -129), c = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (ot) {
        if (n ? Al(e) : Ol(), (t = Mt) ? (t = vm(
          t,
          Ce
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: pl !== null ? { id: Le, overflow: Ge } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Lo(t), l.return = e, e.child = l, Ft = e, Mt = null)) : t = null, t === null) throw Sl(e);
        return Pf(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      var s = a.children;
      return a = a.fallback, n ? (Ol(), n = e.mode, s = $u(
        { mode: "hidden", children: s },
        n
      ), a = Wl(
        a,
        n,
        l,
        null
      ), s.return = e, a.return = e, s.sibling = a, e.child = s, a = e.child, a.memoizedState = yf(l), a.childLanes = gf(
        t,
        c,
        l
      ), e.memoizedState = hf, Cn(null, a)) : (Al(e), pf(e, s));
    }
    var v = t.memoizedState;
    if (v !== null && (s = v.dehydrated, s !== null)) {
      if (u)
        e.flags & 256 ? (Al(e), e.flags &= -257, e = bf(
          t,
          e,
          l
        )) : e.memoizedState !== null ? (Ol(), e.child = t.child, e.flags |= 128, e = null) : (Ol(), s = a.fallback, n = e.mode, a = $u(
          { mode: "visible", children: a.children },
          n
        ), s = Wl(
          s,
          n,
          l,
          null
        ), s.flags |= 2, a.return = e, s.return = e, a.sibling = s, e.child = a, na(
          e,
          t.child,
          null,
          l
        ), a = e.child, a.memoizedState = yf(l), a.childLanes = gf(
          t,
          c,
          l
        ), e.memoizedState = hf, e = Cn(null, a));
      else if (Al(e), Pf(s)) {
        if (c = s.nextSibling && s.nextSibling.dataset, c) var T = c.dgst;
        c = T, a = Error(r(419)), a.stack = "", a.digest = c, gn({ value: a, source: null, stack: null }), e = bf(
          t,
          e,
          l
        );
      } else if (Lt || Ua(t, e, l, !1), c = (l & t.childLanes) !== 0, Lt || c) {
        if (c = zt, c !== null && (a = Vr(c, l), a !== 0 && a !== v.retryLane))
          throw v.retryLane = a, Fl(t, a), re(c, t, a), mf;
        If(s) || ai(), e = bf(
          t,
          e,
          l
        );
      } else
        If(s) ? (e.flags |= 192, e.child = t.child, e = null) : (t = v.treeContext, Mt = Re(
          s.nextSibling
        ), Ft = e, ot = !0, bl = null, Ce = !1, t !== null && Qo(e, t), e = pf(
          e,
          a.children
        ), e.flags |= 4096);
      return e;
    }
    return n ? (Ol(), s = a.fallback, n = e.mode, v = t.child, T = v.sibling, a = ke(v, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = v.subtreeFlags & 65011712, T !== null ? s = ke(
      T,
      s
    ) : (s = Wl(
      s,
      n,
      l,
      null
    ), s.flags |= 2), s.return = e, a.return = e, a.sibling = s, e.child = a, Cn(null, a), a = e.child, s = t.child.memoizedState, s === null ? s = yf(l) : (n = s.cachePool, n !== null ? (v = qt._currentValue, n = n.parent !== v ? { parent: v, pool: v } : n) : n = $o(), s = {
      baseLanes: s.baseLanes | l,
      cachePool: n
    }), a.memoizedState = s, a.childLanes = gf(
      t,
      c,
      l
    ), e.memoizedState = hf, Cn(t.child, a)) : (Al(e), l = t.child, t = l.sibling, l = ke(l, {
      mode: "visible",
      children: a.children
    }), l.return = e, l.sibling = null, t !== null && (c = e.deletions, c === null ? (e.deletions = [t], e.flags |= 16) : c.push(t)), e.child = l, e.memoizedState = null, l);
  }
  function pf(t, e) {
    return e = $u(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function $u(t, e) {
    return t = ye(22, t, null, e), t.lanes = 0, t;
  }
  function bf(t, e, l) {
    return na(e, t.child, null, l), t = pf(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function cd(t, e, l) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), xc(t.return, e, l);
  }
  function Sf(t, e, l, a, n, u) {
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
  function fd(t, e, l) {
    var a = e.pendingProps, n = a.revealOrder, u = a.tail;
    a = a.children;
    var c = xt.current, s = (c & 2) !== 0;
    if (s ? (c = c & 1 | 2, e.flags |= 128) : c &= 1, H(xt, c), It(t, e, a, l), a = ot ? yn : 0, !s && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && cd(t, l, e);
        else if (t.tag === 19)
          cd(t, l, e);
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
          t = l.alternate, t !== null && Bu(t) === null && (n = l), l = l.sibling;
        l = n, l === null ? (n = e.child, e.child = null) : (n = l.sibling, l.sibling = null), Sf(
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
          if (t = n.alternate, t !== null && Bu(t) === null) {
            e.child = n;
            break;
          }
          t = n.sibling, n.sibling = l, l = n, n = t;
        }
        Sf(
          e,
          !0,
          l,
          null,
          u,
          a
        );
        break;
      case "together":
        Sf(
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
    if (t !== null && (e.dependencies = t.dependencies), Cl |= e.lanes, (l & e.childLanes) === 0)
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
      for (t = e.child, l = ke(t, t.pendingProps), e.child = l, l.return = e; t.sibling !== null; )
        t = t.sibling, l = l.sibling = ke(t, t.pendingProps), l.return = e;
      l.sibling = null;
    }
    return e.child;
  }
  function _f(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Du(t)));
  }
  function mh(t, e, l) {
    switch (e.tag) {
      case 3:
        Bt(e, e.stateNode.containerInfo), _l(e, qt, t.memoizedState.cache), Il();
        break;
      case 27:
      case 5:
        tn(e);
        break;
      case 4:
        Bt(e, e.stateNode.containerInfo);
        break;
      case 10:
        _l(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, Vc(e), null;
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (Al(e), e.flags |= 128, null) : (l & e.child.childLanes) !== 0 ? id(t, e, l) : (Al(e), t = el(
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
            return fd(
              t,
              e,
              l
            );
          e.flags |= 128;
        }
        if (n = e.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), H(xt, xt.current), a) break;
        return null;
      case 22:
        return e.lanes = 0, td(
          t,
          e,
          l,
          e.pendingProps
        );
      case 24:
        _l(e, qt, t.memoizedState.cache);
    }
    return el(t, e, l);
  }
  function rd(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        Lt = !0;
      else {
        if (!_f(t, l) && (e.flags & 128) === 0)
          return Lt = !1, mh(
            t,
            e,
            l
          );
        Lt = (t.flags & 131072) !== 0;
      }
    else
      Lt = !1, ot && (e.flags & 1048576) !== 0 && Xo(e, yn, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var a = e.pendingProps;
          if (t = la(e.elementType), e.type = t, typeof t == "function")
            Ac(t) ? (a = ia(t, a), e.tag = 1, e = nd(
              null,
              e,
              t,
              a,
              l
            )) : (e.tag = 0, e = vf(
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
                e.tag = 11, e = Ws(
                  null,
                  e,
                  t,
                  a,
                  l
                );
                break t;
              } else if (n === $) {
                e.tag = 14, e = Is(
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
        return vf(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 1:
        return a = e.type, n = ia(
          a,
          e.pendingProps
        ), nd(
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
          n = u.element, Gc(t, e), zn(e, a, null, l);
          var c = e.memoizedState;
          if (a = c.cache, _l(e, qt, a), a !== u.cache && Hc(
            e,
            [qt],
            l,
            !0
          ), Tn(), a = c.element, u.isDehydrated)
            if (u = {
              element: a,
              isDehydrated: !1,
              cache: c.cache
            }, e.updateQueue.baseState = u, e.memoizedState = u, e.flags & 256) {
              e = ud(
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
              ), gn(n), e = ud(
                t,
                e,
                a,
                l
              );
              break t;
            } else
              for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, Mt = Re(t.firstChild), Ft = e, ot = !0, bl = null, Ce = !0, l = ts(
                e,
                null,
                a,
                l
              ), e.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Il(), a === n) {
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
        return Ju(t, e), t === null ? (l = Sm(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = l : ot || (l = e.type, t = e.pendingProps, a = oi(
          at.current
        ).createElement(l), a[kt] = e, a[ae] = t, Pt(a, l, t), Vt(a), e.stateNode = a) : e.memoizedState = Sm(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return tn(e), t === null && ot && (a = e.stateNode = gm(
          e.type,
          e.pendingProps,
          at.current
        ), Ft = e, Ce = !0, n = Mt, Hl(e.type) ? (tr = n, Mt = Re(a.firstChild)) : Mt = n), It(
          t,
          e,
          e.pendingProps.children,
          l
        ), Ju(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && ot && ((n = a = Mt) && (a = wh(
          a,
          e.type,
          e.pendingProps,
          Ce
        ), a !== null ? (e.stateNode = a, Ft = e, Mt = Re(a.firstChild), Ce = !1, n = !0) : n = !1), n || Sl(e)), tn(e), n = e.type, u = e.pendingProps, c = t !== null ? t.memoizedProps : null, a = u.children, kf(n, u) ? a = null : c !== null && kf(n, c) && (e.flags |= 32), e.memoizedState !== null && (n = Jc(
          t,
          e,
          nh,
          null,
          null,
          l
        ), Zn._currentValue = n), Ju(t, e), It(t, e, a, l), e.child;
      case 6:
        return t === null && ot && ((t = l = Mt) && (l = Zh(
          l,
          e.pendingProps,
          Ce
        ), l !== null ? (e.stateNode = l, Ft = e, Mt = null, t = !0) : t = !1), t || Sl(e)), null;
      case 13:
        return id(t, e, l);
      case 4:
        return Bt(
          e,
          e.stateNode.containerInfo
        ), a = e.pendingProps, t === null ? e.child = na(
          e,
          null,
          a,
          l
        ) : It(t, e, a, l), e.child;
      case 11:
        return Ws(
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
        return a = e.pendingProps, _l(e, e.type, a.value), It(t, e, a.children, l), e.child;
      case 9:
        return n = e.type._context, a = e.pendingProps.children, ta(e), n = Wt(n), a = a(n), e.flags |= 1, It(t, e, a, l), e.child;
      case 14:
        return Is(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 15:
        return Ps(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 19:
        return fd(t, e, l);
      case 31:
        return dh(t, e, l);
      case 22:
        return td(
          t,
          e,
          l,
          e.pendingProps
        );
      case 24:
        return ta(e), a = Wt(qt), t === null ? (n = qc(), n === null && (n = zt, u = jc(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= l), n = u), e.memoizedState = { parent: a, cache: n }, Lc(e), _l(e, qt, n)) : ((t.lanes & l) !== 0 && (Gc(t, e), zn(e, null, null, l), Tn()), n = t.memoizedState, u = e.memoizedState, n.parent !== a ? (n = { parent: a, cache: a }, e.memoizedState = n, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = n), _l(e, qt, a)) : (a = u.cache, _l(e, qt, a), a !== n.cache && Hc(
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
  function Ef(t, e, l, a, n) {
    if ((e = (t.mode & 32) !== 0) && (e = !1), e) {
      if (t.flags |= 16777216, (n & 335544128) === n)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Bd()) t.flags |= 8192;
        else
          throw aa = Uu, Yc;
    } else t.flags &= -16777217;
  }
  function od(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !Am(e))
      if (Bd()) t.flags |= 8192;
      else
        throw aa = Uu, Yc;
  }
  function ku(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Qr() : 536870912, t.lanes |= e, Za |= e);
  }
  function Nn(t, e) {
    if (!ot)
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
  function vh(t, e, l) {
    var a = e.pendingProps;
    switch (Cc(e), e.tag) {
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
        return l = e.stateNode, a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), Ie(qt), Tt(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (t === null || t.child === null) && (Ra(e) ? ll(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Rc())), Dt(e), null;
      case 26:
        var n = e.type, u = e.memoizedState;
        return t === null ? (ll(e), u !== null ? (Dt(e), od(e, u)) : (Dt(e), Ef(
          e,
          n,
          null,
          a,
          l
        ))) : u ? u !== t.memoizedState ? (ll(e), Dt(e), od(e, u)) : (Dt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== a && ll(e), Dt(e), Ef(
          e,
          n,
          t,
          a,
          l
        )), null;
      case 27:
        if (iu(e), l = at.current, n = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== a && ll(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(r(166));
            return Dt(e), null;
          }
          t = G.current, Ra(e) ? wo(e) : (t = gm(n, a, l), e.stateNode = t, ll(e));
        }
        return Dt(e), null;
      case 5:
        if (iu(e), n = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== a && ll(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(r(166));
            return Dt(e), null;
          }
          if (u = G.current, Ra(e))
            wo(e);
          else {
            var c = oi(
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
            u[kt] = e, u[ae] = a;
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
        return Dt(e), Ef(
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
          if (t = at.current, Ra(e)) {
            if (t = e.stateNode, l = e.memoizedProps, a = null, n = Ft, n !== null)
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            t[kt] = e, t = !!(t.nodeValue === l || a !== null && a.suppressHydrationWarning === !0 || im(t.nodeValue, l)), t || Sl(e, !0);
          } else
            t = oi(t).createTextNode(
              a
            ), t[kt] = e, e.stateNode = t;
        }
        return Dt(e), null;
      case 31:
        if (l = e.memoizedState, t === null || t.memoizedState !== null) {
          if (a = Ra(e), l !== null) {
            if (t === null) {
              if (!a) throw Error(r(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(557));
              t[kt] = e;
            } else
              Il(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Dt(e), t = !1;
          } else
            l = Rc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = l), t = !0;
          if (!t)
            return e.flags & 256 ? (pe(e), e) : (pe(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(r(558));
        }
        return Dt(e), null;
      case 13:
        if (a = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (n = Ra(e), a !== null && a.dehydrated !== null) {
            if (t === null) {
              if (!n) throw Error(r(318));
              if (n = e.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(r(317));
              n[kt] = e;
            } else
              Il(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Dt(e), n = !1;
          } else
            n = Rc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return e.flags & 256 ? (pe(e), e) : (pe(e), null);
        }
        return pe(e), (e.flags & 128) !== 0 ? (e.lanes = l, e) : (l = a !== null, t = t !== null && t.memoizedState !== null, l && (a = e.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== n && (a.flags |= 2048)), l !== t && l && (e.child.flags |= 8192), ku(e, e.updateQueue), Dt(e), null);
      case 4:
        return Tt(), t === null && Zf(e.stateNode.containerInfo), Dt(e), null;
      case 10:
        return Ie(e.type), Dt(e), null;
      case 19:
        if (N(xt), a = e.memoizedState, a === null) return Dt(e), null;
        if (n = (e.flags & 128) !== 0, u = a.rendering, u === null)
          if (n) Nn(a, !1);
          else {
            if (Rt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (u = Bu(t), u !== null) {
                  for (e.flags |= 128, Nn(a, !1), t = u.updateQueue, e.updateQueue = t, ku(e, t), e.subtreeFlags = 0, t = l, l = e.child; l !== null; )
                    Yo(l, t), l = l.sibling;
                  return H(
                    xt,
                    xt.current & 1 | 2
                  ), ot && Fe(e, a.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            a.tail !== null && de() > ti && (e.flags |= 128, n = !0, Nn(a, !1), e.lanes = 4194304);
          }
        else {
          if (!n)
            if (t = Bu(u), t !== null) {
              if (e.flags |= 128, n = !0, t = t.updateQueue, e.updateQueue = t, ku(e, t), Nn(a, !0), a.tail === null && a.tailMode === "hidden" && !u.alternate && !ot)
                return Dt(e), null;
            } else
              2 * de() - a.renderingStartTime > ti && l !== 536870912 && (e.flags |= 128, n = !0, Nn(a, !1), e.lanes = 4194304);
          a.isBackwards ? (u.sibling = e.child, e.child = u) : (t = a.last, t !== null ? t.sibling = u : e.child = u, a.last = u);
        }
        return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = de(), t.sibling = null, l = xt.current, H(
          xt,
          n ? l & 1 | 2 : l & 1
        ), ot && Fe(e, a.treeForkCount), t) : (Dt(e), null);
      case 22:
      case 23:
        return pe(e), Zc(), a = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? (l & 536870912) !== 0 && (e.flags & 128) === 0 && (Dt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Dt(e), l = e.updateQueue, l !== null && ku(e, l.retryQueue), l = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== l && (e.flags |= 2048), t !== null && N(ea), null;
      case 24:
        return l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), Ie(qt), Dt(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, e.tag));
  }
  function hh(t, e) {
    switch (Cc(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return Ie(qt), Tt(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return iu(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (pe(e), e.alternate === null)
            throw Error(r(340));
          Il();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (pe(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(r(340));
          Il();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return N(xt), null;
      case 4:
        return Tt(), null;
      case 10:
        return Ie(e.type), null;
      case 22:
      case 23:
        return pe(e), Zc(), t !== null && N(ea), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return Ie(qt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function sd(t, e) {
    switch (Cc(e), e.tag) {
      case 3:
        Ie(qt), Tt();
        break;
      case 26:
      case 27:
      case 5:
        iu(e);
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
        N(xt);
        break;
      case 10:
        Ie(e.type);
        break;
      case 22:
      case 23:
        pe(e), Zc(), t !== null && N(ea);
        break;
      case 24:
        Ie(qt);
    }
  }
  function Rn(t, e) {
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
  function Ml(t, e, l) {
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
              var v = l, T = s;
              try {
                T();
              } catch (D) {
                bt(
                  n,
                  v,
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
  function dd(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        ls(e, l);
      } catch (a) {
        bt(t, t.return, a);
      }
    }
  }
  function md(t, e, l) {
    l.props = ia(
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
  function vd(t) {
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
  function Tf(t, e, l) {
    try {
      var a = t.stateNode;
      qh(a, t.type, l, e), a[ae] = e;
    } catch (n) {
      bt(t, t.return, n);
    }
  }
  function hd(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Hl(t.type) || t.tag === 4;
  }
  function zf(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || hd(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Hl(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Af(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, e ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(t, e) : (e = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.appendChild(t), l = l._reactRootContainer, l != null || e.onclick !== null || (e.onclick = Je));
    else if (a !== 4 && (a === 27 && Hl(t.type) && (l = t.stateNode, e = null), t = t.child, t !== null))
      for (Af(t, e, l), t = t.sibling; t !== null; )
        Af(t, e, l), t = t.sibling;
  }
  function Fu(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, e ? l.insertBefore(t, e) : l.appendChild(t);
    else if (a !== 4 && (a === 27 && Hl(t.type) && (l = t.stateNode), t = t.child, t !== null))
      for (Fu(t, e, l), t = t.sibling; t !== null; )
        Fu(t, e, l), t = t.sibling;
  }
  function yd(t) {
    var e = t.stateNode, l = t.memoizedProps;
    try {
      for (var a = t.type, n = e.attributes; n.length; )
        e.removeAttributeNode(n[0]);
      Pt(e, a, l), e[kt] = t, e[ae] = l;
    } catch (u) {
      bt(t, t.return, u);
    }
  }
  var al = !1, Gt = !1, Of = !1, gd = typeof WeakSet == "function" ? WeakSet : Set, Kt = null;
  function yh(t, e) {
    if (t = t.containerInfo, Jf = gi, t = Co(t), pc(t)) {
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
            var c = 0, s = -1, v = -1, T = 0, D = 0, R = t, z = null;
            e: for (; ; ) {
              for (var A; R !== l || n !== 0 && R.nodeType !== 3 || (s = c + n), R !== u || a !== 0 && R.nodeType !== 3 || (v = c + a), R.nodeType === 3 && (c += R.nodeValue.length), (A = R.firstChild) !== null; )
                z = R, R = A;
              for (; ; ) {
                if (R === t) break e;
                if (z === l && ++T === n && (s = c), z === u && ++D === a && (v = c), (A = R.nextSibling) !== null) break;
                R = z, z = R.parentNode;
              }
              R = A;
            }
            l = s === -1 || v === -1 ? null : { start: s, end: v };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for ($f = { focusedElem: t, selectionRange: l }, gi = !1, Kt = e; Kt !== null; )
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
                  var X = ia(
                    l.type,
                    n
                  );
                  t = a.getSnapshotBeforeUpdate(
                    X,
                    u
                  ), a.__reactInternalSnapshotBeforeUpdate = t;
                } catch (F) {
                  bt(
                    l,
                    l.return,
                    F
                  );
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (t = e.stateNode.containerInfo, l = t.nodeType, l === 9)
                  Wf(t);
                else if (l === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Wf(t);
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
  function pd(t, e, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        ul(t, l), a & 4 && Rn(5, l);
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
            var n = ia(
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
        a & 64 && dd(l), a & 512 && Un(l, l.return);
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
            ls(t, e);
          } catch (c) {
            bt(l, l.return, c);
          }
        }
        break;
      case 27:
        e === null && a & 4 && yd(l);
      case 26:
      case 5:
        ul(t, l), e === null && a & 4 && vd(l), a & 512 && Un(l, l.return);
        break;
      case 12:
        ul(t, l);
        break;
      case 31:
        ul(t, l), a & 4 && _d(t, l);
        break;
      case 13:
        ul(t, l), a & 4 && Ed(t, l), a & 64 && (t = l.memoizedState, t !== null && (t = t.dehydrated, t !== null && (l = Ah.bind(
          null,
          l
        ), Vh(t, l))));
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
  function bd(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, bd(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && ec(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Ct = null, ue = !1;
  function nl(t, e, l) {
    for (l = l.child; l !== null; )
      Sd(t, e, l), l = l.sibling;
  }
  function Sd(t, e, l) {
    if (me && typeof me.onCommitFiberUnmount == "function")
      try {
        me.onCommitFiberUnmount(en, l);
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
        ), Xn(l.stateNode), Ct = a, ue = n;
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
        Ct !== null && (ue ? (t = Ct, dm(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          l.stateNode
        ), Ia(t)) : dm(Ct, l.stateNode));
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
        Ml(2, l, e), Gt || Ml(4, l, e), nl(
          t,
          e,
          l
        );
        break;
      case 1:
        Gt || (Xe(l, e), a = l.stateNode, typeof a.componentWillUnmount == "function" && md(
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
  function _d(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        Ia(t);
      } catch (l) {
        bt(e, e.return, l);
      }
    }
  }
  function Ed(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        Ia(t);
      } catch (l) {
        bt(e, e.return, l);
      }
  }
  function gh(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new gd()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new gd()), e;
      default:
        throw Error(r(435, t.tag));
    }
  }
  function Wu(t, e) {
    var l = gh(t);
    e.forEach(function(a) {
      if (!l.has(a)) {
        l.add(a);
        var n = Oh.bind(null, t, a);
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
        Sd(u, c, n), Ct = null, ue = !1, u = n.alternate, u !== null && (u.return = null), n.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        Td(e, t), e = e.sibling;
  }
  var Be = null;
  function Td(t, e) {
    var l = t.alternate, a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ie(e, t), ce(t), a & 4 && (Ml(3, t, t.return), Rn(3, t), Ml(5, t, t.return));
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
                      u = n.getElementsByTagName("title")[0], (!u || u[nn] || u[kt] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(a), n.head.insertBefore(
                        u,
                        n.querySelector("head > title")
                      )), Pt(u, a, l), u[kt] = t, Vt(u), a = u;
                      break t;
                    case "link":
                      var c = Tm(
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
                      if (c = Tm(
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
                  u[kt] = t, Vt(u), a = u;
                }
                t.stateNode = a;
              } else
                zm(
                  n,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = Em(
                n,
                a,
                t.memoizedProps
              );
          else
            u !== a ? (u === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : u.count--, a === null ? zm(
              n,
              t.type,
              t.stateNode
            ) : Em(
              n,
              a,
              t.memoizedProps
            )) : a === null && t.stateNode !== null && Tf(
              t,
              t.memoizedProps,
              l.memoizedProps
            );
        }
        break;
      case 27:
        ie(e, t), ce(t), a & 512 && (Gt || l === null || Xe(l, l.return)), l !== null && a & 4 && Tf(
          t,
          t.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (ie(e, t), ce(t), a & 512 && (Gt || l === null || Xe(l, l.return)), t.flags & 32) {
          n = t.stateNode;
          try {
            _a(n, "");
          } catch (X) {
            bt(t, t.return, X);
          }
        }
        a & 4 && t.stateNode != null && (n = t.memoizedProps, Tf(
          t,
          n,
          l !== null ? l.memoizedProps : n
        )), a & 1024 && (Of = !0);
        break;
      case 6:
        if (ie(e, t), ce(t), a & 4) {
          if (t.stateNode === null)
            throw Error(r(162));
          a = t.memoizedProps, l = t.stateNode;
          try {
            l.nodeValue = a;
          } catch (X) {
            bt(t, t.return, X);
          }
        }
        break;
      case 3:
        if (mi = null, n = Be, Be = si(e.containerInfo), ie(e, t), Be = n, ce(t), a & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Ia(e.containerInfo);
          } catch (X) {
            bt(t, t.return, X);
          }
        Of && (Of = !1, zd(t));
        break;
      case 4:
        a = Be, Be = si(
          t.stateNode.containerInfo
        ), ie(e, t), ce(t), Be = a;
        break;
      case 12:
        ie(e, t), ce(t);
        break;
      case 31:
        ie(e, t), ce(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Wu(t, a)));
        break;
      case 13:
        ie(e, t), ce(t), t.child.flags & 8192 && t.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Pu = de()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Wu(t, a)));
        break;
      case 22:
        n = t.memoizedState !== null;
        var v = l !== null && l.memoizedState !== null, T = al, D = Gt;
        if (al = T || n, Gt = D || v, ie(e, t), Gt = D, al = T, ce(t), a & 8192)
          t: for (e = t.stateNode, e._visibility = n ? e._visibility & -2 : e._visibility | 1, n && (l === null || v || al || Gt || ca(t)), l = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                v = l = e;
                try {
                  if (u = v.stateNode, n)
                    c = u.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                  else {
                    s = v.stateNode;
                    var R = v.memoizedProps.style, z = R != null && R.hasOwnProperty("display") ? R.display : null;
                    s.style.display = z == null || typeof z == "boolean" ? "" : ("" + z).trim();
                  }
                } catch (X) {
                  bt(v, v.return, X);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                v = e;
                try {
                  v.stateNode.nodeValue = n ? "" : v.memoizedProps;
                } catch (X) {
                  bt(v, v.return, X);
                }
              }
            } else if (e.tag === 18) {
              if (l === null) {
                v = e;
                try {
                  var A = v.stateNode;
                  n ? mm(A, !0) : mm(v.stateNode, !1);
                } catch (X) {
                  bt(v, v.return, X);
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
        a & 4 && (a = t.updateQueue, a !== null && (l = a.retryQueue, l !== null && (a.retryQueue = null, Wu(t, l))));
        break;
      case 19:
        ie(e, t), ce(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Wu(t, a)));
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
          if (hd(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(r(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode, u = zf(t);
            Fu(t, u, n);
            break;
          case 5:
            var c = l.stateNode;
            l.flags & 32 && (_a(c, ""), l.flags &= -33);
            var s = zf(t);
            Fu(t, s, c);
            break;
          case 3:
          case 4:
            var v = l.stateNode.containerInfo, T = zf(t);
            Af(
              t,
              T,
              v
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
  function zd(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        zd(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
      }
  }
  function ul(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        pd(t, e.alternate, e), e = e.sibling;
  }
  function ca(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ml(4, e, e.return), ca(e);
          break;
        case 1:
          Xe(e, e.return);
          var l = e.stateNode;
          typeof l.componentWillUnmount == "function" && md(
            e,
            e.return,
            l
          ), ca(e);
          break;
        case 27:
          Xn(e.stateNode);
        case 26:
        case 5:
          Xe(e, e.return), ca(e);
          break;
        case 22:
          e.memoizedState === null && ca(e);
          break;
        case 30:
          ca(e);
          break;
        default:
          ca(e);
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
          ), Rn(4, u);
          break;
        case 1:
          if (il(
            n,
            u,
            l
          ), a = u, n = a.stateNode, typeof n.componentDidMount == "function")
            try {
              n.componentDidMount();
            } catch (T) {
              bt(a, a.return, T);
            }
          if (a = u, n = a.updateQueue, n !== null) {
            var s = a.stateNode;
            try {
              var v = n.shared.hiddenCallbacks;
              if (v !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < v.length; n++)
                  es(v[n], s);
            } catch (T) {
              bt(a, a.return, T);
            }
          }
          l && c & 64 && dd(u), Un(u, u.return);
          break;
        case 27:
          yd(u);
        case 26:
        case 5:
          il(
            n,
            u,
            l
          ), l && a === null && c & 4 && vd(u), Un(u, u.return);
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
          ), l && c & 4 && _d(n, u);
          break;
        case 13:
          il(
            n,
            u,
            l
          ), l && c & 4 && Ed(n, u);
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
  function Mf(t, e) {
    var l = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== l && (t != null && t.refCount++, l != null && pn(l));
  }
  function Df(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && pn(t));
  }
  function qe(t, e, l, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Ad(
          t,
          e,
          l,
          a
        ), e = e.sibling;
  }
  function Ad(t, e, l, a) {
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
        ), n & 2048 && Rn(9, e);
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
        ), n & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && pn(t)));
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
          } catch (v) {
            bt(e, e.return, v);
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
        ) : xn(t, e) : u._visibility & 2 ? qe(
          t,
          e,
          l,
          a
        ) : (u._visibility |= 2, Xa(
          t,
          e,
          l,
          a,
          (e.subtreeFlags & 10256) !== 0 || !1
        )), n & 2048 && Mf(c, e);
        break;
      case 24:
        qe(
          t,
          e,
          l,
          a
        ), n & 2048 && Df(e.alternate, e);
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
  function Xa(t, e, l, a, n) {
    for (n = n && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var u = t, c = e, s = l, v = a, T = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          Xa(
            u,
            c,
            s,
            v,
            n
          ), Rn(8, c);
          break;
        case 23:
          break;
        case 22:
          var D = c.stateNode;
          c.memoizedState !== null ? D._visibility & 2 ? Xa(
            u,
            c,
            s,
            v,
            n
          ) : xn(
            u,
            c
          ) : (D._visibility |= 2, Xa(
            u,
            c,
            s,
            v,
            n
          )), n && T & 2048 && Mf(
            c.alternate,
            c
          );
          break;
        case 24:
          Xa(
            u,
            c,
            s,
            v,
            n
          ), n && T & 2048 && Df(c.alternate, c);
          break;
        default:
          Xa(
            u,
            c,
            s,
            v,
            n
          );
      }
      e = e.sibling;
    }
  }
  function xn(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t, a = e, n = a.flags;
        switch (a.tag) {
          case 22:
            xn(l, a), n & 2048 && Mf(
              a.alternate,
              a
            );
            break;
          case 24:
            xn(l, a), n & 2048 && Df(a.alternate, a);
            break;
          default:
            xn(l, a);
        }
        e = e.sibling;
      }
  }
  var Hn = 8192;
  function Qa(t, e, l) {
    if (t.subtreeFlags & Hn)
      for (t = t.child; t !== null; )
        Od(
          t,
          e,
          l
        ), t = t.sibling;
  }
  function Od(t, e, l) {
    switch (t.tag) {
      case 26:
        Qa(
          t,
          e,
          l
        ), t.flags & Hn && t.memoizedState !== null && ay(
          l,
          Be,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        Qa(
          t,
          e,
          l
        );
        break;
      case 3:
      case 4:
        var a = Be;
        Be = si(t.stateNode.containerInfo), Qa(
          t,
          e,
          l
        ), Be = a;
        break;
      case 22:
        t.memoizedState === null && (a = t.alternate, a !== null && a.memoizedState !== null ? (a = Hn, Hn = 16777216, Qa(
          t,
          e,
          l
        ), Hn = a) : Qa(
          t,
          e,
          l
        ));
        break;
      default:
        Qa(
          t,
          e,
          l
        );
    }
  }
  function Md(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function jn(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          Kt = a, Cd(
            a,
            t
          );
        }
      Md(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Dd(t), t = t.sibling;
  }
  function Dd(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        jn(t), t.flags & 2048 && Ml(9, t, t.return);
        break;
      case 3:
        jn(t);
        break;
      case 12:
        jn(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, Iu(t)) : jn(t);
        break;
      default:
        jn(t);
    }
  }
  function Iu(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          Kt = a, Cd(
            a,
            t
          );
        }
      Md(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          Ml(8, e, e.return), Iu(e);
          break;
        case 22:
          l = e.stateNode, l._visibility & 2 && (l._visibility &= -3, Iu(e));
          break;
        default:
          Iu(e);
      }
      t = t.sibling;
    }
  }
  function Cd(t, e) {
    for (; Kt !== null; ) {
      var l = Kt;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Ml(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          pn(l.memoizedState.cache);
      }
      if (a = l.child, a !== null) a.return = l, Kt = a;
      else
        t: for (l = t; Kt !== null; ) {
          a = Kt;
          var n = a.sibling, u = a.return;
          if (bd(a), a === l) {
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
  var ph = {
    getCacheForType: function(t) {
      var e = Wt(qt), l = e.data.get(t);
      return l === void 0 && (l = t(), e.data.set(t, l)), l;
    },
    cacheSignal: function() {
      return Wt(qt).controller.signal;
    }
  }, bh = typeof WeakMap == "function" ? WeakMap : Map, gt = 0, zt = null, nt = null, ct = 0, pt = 0, be = null, Dl = !1, wa = !1, Cf = !1, cl = 0, Rt = 0, Cl = 0, fa = 0, Nf = 0, Se = 0, Za = 0, Bn = null, fe = null, Rf = !1, Pu = 0, Nd = 0, ti = 1 / 0, ei = null, Nl = null, wt = 0, Rl = null, Va = null, fl = 0, Uf = 0, xf = null, Rd = null, qn = 0, Hf = null;
  function _e() {
    return (gt & 2) !== 0 && ct !== 0 ? ct & -ct : M.T !== null ? Gf() : Kr();
  }
  function Ud() {
    if (Se === 0)
      if ((ct & 536870912) === 0 || ot) {
        var t = ru;
        ru <<= 1, (ru & 3932160) === 0 && (ru = 262144), Se = t;
      } else Se = 536870912;
    return t = ge.current, t !== null && (t.flags |= 32), Se;
  }
  function re(t, e, l) {
    (t === zt && (pt === 2 || pt === 9) || t.cancelPendingCommit !== null) && (Ka(t, 0), Ul(
      t,
      ct,
      Se,
      !1
    )), an(t, l), ((gt & 2) === 0 || t !== zt) && (t === zt && ((gt & 2) === 0 && (fa |= l), Rt === 4 && Ul(
      t,
      ct,
      Se,
      !1
    )), Qe(t));
  }
  function xd(t, e, l) {
    if ((gt & 6) !== 0) throw Error(r(327));
    var a = !l && (e & 127) === 0 && (e & t.expiredLanes) === 0 || ln(t, e), n = a ? Eh(t, e) : Bf(t, e, !0), u = a;
    do {
      if (n === 0) {
        wa && !a && Ul(t, e, 0, !1);
        break;
      } else {
        if (l = t.current.alternate, u && !Sh(l)) {
          n = Bf(t, e, !1), u = !1;
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
              n = Bn;
              var v = s.current.memoizedState.isDehydrated;
              if (v && (Ka(s, c).flags |= 256), c = Bf(
                s,
                c,
                !1
              ), c !== 2) {
                if (Cf && !v) {
                  s.errorRecoveryDisabledLanes |= u, fa |= u, n = 4;
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
          Ka(t, 0), Ul(t, e, 0, !0);
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
                !Dl
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
          if ((e & 62914560) === e && (n = Pu + 300 - de(), 10 < n)) {
            if (Ul(
              a,
              e,
              Se,
              !Dl
            ), su(a, 0, !0) !== 0) break t;
            fl = e, a.timeoutHandle = om(
              Hd.bind(
                null,
                a,
                l,
                fe,
                ei,
                Rf,
                e,
                Se,
                fa,
                Za,
                Dl,
                u,
                "Throttled",
                -0,
                0
              ),
              n
            );
            break t;
          }
          Hd(
            a,
            l,
            fe,
            ei,
            Rf,
            e,
            Se,
            fa,
            Za,
            Dl,
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
  function Hd(t, e, l, a, n, u, c, s, v, T, D, R, z, A) {
    if (t.timeoutHandle = -1, R = e.subtreeFlags, R & 8192 || (R & 16785408) === 16785408) {
      R = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Je
      }, Od(
        e,
        u,
        R
      );
      var X = (u & 62914560) === u ? Pu - de() : (u & 4194048) === u ? Nd - de() : 0;
      if (X = ny(
        R,
        X
      ), X !== null) {
        fl = u, t.cancelPendingCommit = X(
          Qd.bind(
            null,
            t,
            e,
            u,
            l,
            a,
            n,
            c,
            s,
            v,
            D,
            R,
            null,
            z,
            A
          )
        ), Ul(t, u, c, !T);
        return;
      }
    }
    Qd(
      t,
      e,
      u,
      l,
      a,
      n,
      c,
      s,
      v
    );
  }
  function Sh(t) {
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
    e &= ~Nf, e &= ~fa, t.suspendedLanes |= e, t.pingedLanes &= ~e, a && (t.warmLanes |= e), a = t.expirationTimes;
    for (var n = e; 0 < n; ) {
      var u = 31 - ve(n), c = 1 << u;
      a[u] = -1, n &= ~c;
    }
    l !== 0 && wr(t, l, e);
  }
  function li() {
    return (gt & 6) === 0 ? (Yn(0), !1) : !0;
  }
  function jf() {
    if (nt !== null) {
      if (pt === 0)
        var t = nt.return;
      else
        t = nt, We = Pl = null, Fc(t), Ba = null, Sn = 0, t = nt;
      for (; t !== null; )
        sd(t.alternate, t), t = t.return;
      nt = null;
    }
  }
  function Ka(t, e) {
    var l = t.timeoutHandle;
    l !== -1 && (t.timeoutHandle = -1, Gh(l)), l = t.cancelPendingCommit, l !== null && (t.cancelPendingCommit = null, l()), fl = 0, jf(), zt = t, nt = l = ke(t.current, null), ct = e, pt = 0, be = null, Dl = !1, wa = ln(t, e), Cf = !1, Za = Se = Nf = fa = Cl = Rt = 0, fe = Bn = null, Rf = !1, (e & 8) !== 0 && (e |= e & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var n = 31 - ve(a), u = 1 << n;
        e |= t[n], a &= ~u;
      }
    return cl = e, Tu(), l;
  }
  function jd(t, e) {
    tt = null, M.H = Dn, e === ja || e === Ru ? (e = Wo(), pt = 3) : e === Yc ? (e = Wo(), pt = 4) : pt = e === mf ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, be = e, nt === null && (Rt = 1, Vu(
      t,
      Oe(e, t.current)
    ));
  }
  function Bd() {
    var t = ge.current;
    return t === null ? !0 : (ct & 4194048) === ct ? Ne === null : (ct & 62914560) === ct || (ct & 536870912) !== 0 ? t === Ne : !1;
  }
  function qd() {
    var t = M.H;
    return M.H = Dn, t === null ? Dn : t;
  }
  function Yd() {
    var t = M.A;
    return M.A = ph, t;
  }
  function ai() {
    Rt = 4, Dl || (ct & 4194048) !== ct && ge.current !== null || (wa = !0), (Cl & 134217727) === 0 && (fa & 134217727) === 0 || zt === null || Ul(
      zt,
      ct,
      Se,
      !1
    );
  }
  function Bf(t, e, l) {
    var a = gt;
    gt |= 2;
    var n = qd(), u = Yd();
    (zt !== t || ct !== e) && (ei = null, Ka(t, e)), e = !1;
    var c = Rt;
    t: do
      try {
        if (pt !== 0 && nt !== null) {
          var s = nt, v = be;
          switch (pt) {
            case 8:
              jf(), c = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              ge.current === null && (e = !0);
              var T = pt;
              if (pt = 0, be = null, Ja(t, s, v, T), l && wa) {
                c = 0;
                break t;
              }
              break;
            default:
              T = pt, pt = 0, be = null, Ja(t, s, v, T);
          }
        }
        _h(), c = Rt;
        break;
      } catch (D) {
        jd(t, D);
      }
    while (!0);
    return e && t.shellSuspendCounter++, We = Pl = null, gt = a, M.H = n, M.A = u, nt === null && (zt = null, ct = 0, Tu()), c;
  }
  function _h() {
    for (; nt !== null; ) Ld(nt);
  }
  function Eh(t, e) {
    var l = gt;
    gt |= 2;
    var a = qd(), n = Yd();
    zt !== t || ct !== e ? (ei = null, ti = de() + 500, Ka(t, e)) : wa = ln(
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
              pt = 0, be = null, Ja(t, e, u, 1);
              break;
            case 2:
            case 9:
              if (ko(u)) {
                pt = 0, be = null, Gd(e);
                break;
              }
              e = function() {
                pt !== 2 && pt !== 9 || zt !== t || (pt = 7), Qe(t);
              }, u.then(e, e);
              break t;
            case 3:
              pt = 7;
              break t;
            case 4:
              pt = 5;
              break t;
            case 7:
              ko(u) ? (pt = 0, be = null, Gd(e)) : (pt = 0, be = null, Ja(t, e, u, 7));
              break;
            case 5:
              var c = null;
              switch (nt.tag) {
                case 26:
                  c = nt.memoizedState;
                case 5:
                case 27:
                  var s = nt;
                  if (c ? Am(c) : s.stateNode.complete) {
                    pt = 0, be = null;
                    var v = s.sibling;
                    if (v !== null) nt = v;
                    else {
                      var T = s.return;
                      T !== null ? (nt = T, ni(T)) : nt = null;
                    }
                    break e;
                  }
              }
              pt = 0, be = null, Ja(t, e, u, 5);
              break;
            case 6:
              pt = 0, be = null, Ja(t, e, u, 6);
              break;
            case 8:
              jf(), Rt = 6;
              break t;
            default:
              throw Error(r(462));
          }
        }
        Th();
        break;
      } catch (D) {
        jd(t, D);
      }
    while (!0);
    return We = Pl = null, M.H = a, M.A = n, gt = l, nt !== null ? 0 : (zt = null, ct = 0, Tu(), Rt);
  }
  function Th() {
    for (; nt !== null && !Kv(); )
      Ld(nt);
  }
  function Ld(t) {
    var e = rd(t.alternate, t, cl);
    t.memoizedProps = t.pendingProps, e === null ? ni(t) : nt = e;
  }
  function Gd(t) {
    var e = t, l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = ad(
          l,
          e,
          e.pendingProps,
          e.type,
          void 0,
          ct
        );
        break;
      case 11:
        e = ad(
          l,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          ct
        );
        break;
      case 5:
        Fc(e);
      default:
        sd(l, e), e = nt = Yo(e, cl), e = rd(l, e, cl);
    }
    t.memoizedProps = t.pendingProps, e === null ? ni(t) : nt = e;
  }
  function Ja(t, e, l, a) {
    We = Pl = null, Fc(e), Ba = null, Sn = 0;
    var n = e.return;
    try {
      if (sh(
        t,
        n,
        e,
        l,
        ct
      )) {
        Rt = 1, Vu(
          t,
          Oe(l, t.current)
        ), nt = null;
        return;
      }
    } catch (u) {
      if (n !== null) throw nt = n, u;
      Rt = 1, Vu(
        t,
        Oe(l, t.current)
      ), nt = null;
      return;
    }
    e.flags & 32768 ? (ot || a === 1 ? t = !0 : wa || (ct & 536870912) !== 0 ? t = !1 : (Dl = t = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = ge.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Xd(e, t)) : ni(e);
  }
  function ni(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Xd(
          e,
          Dl
        );
        return;
      }
      t = e.return;
      var l = vh(
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
    Rt === 0 && (Rt = 5);
  }
  function Xd(t, e) {
    do {
      var l = hh(t.alternate, t);
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
    Rt = 6, nt = null;
  }
  function Qd(t, e, l, a, n, u, c, s, v) {
    t.cancelPendingCommit = null;
    do
      ui();
    while (wt !== 0);
    if ((gt & 6) !== 0) throw Error(r(327));
    if (e !== null) {
      if (e === t.current) throw Error(r(177));
      if (u = e.lanes | e.childLanes, u |= Tc, l0(
        t,
        l,
        u,
        c,
        s,
        v
      ), t === zt && (nt = zt = null, ct = 0), Va = e, Rl = t, fl = l, Uf = u, xf = n, Rd = a, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, Mh(cu, function() {
        return Jd(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), a = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || a) {
        a = M.T, M.T = null, n = Y.p, Y.p = 2, c = gt, gt |= 4;
        try {
          yh(t, e, l);
        } finally {
          gt = c, Y.p = n, M.T = a;
        }
      }
      wt = 1, wd(), Zd(), Vd();
    }
  }
  function wd() {
    if (wt === 1) {
      wt = 0;
      var t = Rl, e = Va, l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        l = M.T, M.T = null;
        var a = Y.p;
        Y.p = 2;
        var n = gt;
        gt |= 4;
        try {
          Td(e, t);
          var u = $f, c = Co(t.containerInfo), s = u.focusedElem, v = u.selectionRange;
          if (c !== s && s && s.ownerDocument && Do(
            s.ownerDocument.documentElement,
            s
          )) {
            if (v !== null && pc(s)) {
              var T = v.start, D = v.end;
              if (D === void 0 && (D = T), "selectionStart" in s)
                s.selectionStart = T, s.selectionEnd = Math.min(
                  D,
                  s.value.length
                );
              else {
                var R = s.ownerDocument || document, z = R && R.defaultView || window;
                if (z.getSelection) {
                  var A = z.getSelection(), X = s.textContent.length, F = Math.min(v.start, X), Et = v.end === void 0 ? F : Math.min(v.end, X);
                  !A.extend && F > Et && (c = Et, Et = F, F = c);
                  var b = Mo(
                    s,
                    F
                  ), g = Mo(
                    s,
                    Et
                  );
                  if (b && g && (A.rangeCount !== 1 || A.anchorNode !== b.node || A.anchorOffset !== b.offset || A.focusNode !== g.node || A.focusOffset !== g.offset)) {
                    var E = R.createRange();
                    E.setStart(b.node, b.offset), A.removeAllRanges(), F > Et ? (A.addRange(E), A.extend(g.node, g.offset)) : (E.setEnd(g.node, g.offset), A.addRange(E));
                  }
                }
              }
            }
            for (R = [], A = s; A = A.parentNode; )
              A.nodeType === 1 && R.push({
                element: A,
                left: A.scrollLeft,
                top: A.scrollTop
              });
            for (typeof s.focus == "function" && s.focus(), s = 0; s < R.length; s++) {
              var C = R[s];
              C.element.scrollLeft = C.left, C.element.scrollTop = C.top;
            }
          }
          gi = !!Jf, $f = Jf = null;
        } finally {
          gt = n, Y.p = a, M.T = l;
        }
      }
      t.current = e, wt = 2;
    }
  }
  function Zd() {
    if (wt === 2) {
      wt = 0;
      var t = Rl, e = Va, l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        l = M.T, M.T = null;
        var a = Y.p;
        Y.p = 2;
        var n = gt;
        gt |= 4;
        try {
          pd(t, e.alternate, e);
        } finally {
          gt = n, Y.p = a, M.T = l;
        }
      }
      wt = 3;
    }
  }
  function Vd() {
    if (wt === 4 || wt === 3) {
      wt = 0, Jv();
      var t = Rl, e = Va, l = fl, a = Rd;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? wt = 5 : (wt = 0, Va = Rl = null, Kd(t, t.pendingLanes));
      var n = t.pendingLanes;
      if (n === 0 && (Nl = null), Pi(l), e = e.stateNode, me && typeof me.onCommitFiberRoot == "function")
        try {
          me.onCommitFiberRoot(
            en,
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
      (fl & 3) !== 0 && ui(), Qe(t), n = t.pendingLanes, (l & 261930) !== 0 && (n & 42) !== 0 ? t === Hf ? qn++ : (qn = 0, Hf = t) : qn = 0, Yn(0);
    }
  }
  function Kd(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, pn(e)));
  }
  function ui() {
    return wd(), Zd(), Vd(), Jd();
  }
  function Jd() {
    if (wt !== 5) return !1;
    var t = Rl, e = Uf;
    Uf = 0;
    var l = Pi(fl), a = M.T, n = Y.p;
    try {
      Y.p = 32 > l ? 32 : l, M.T = null, l = xf, xf = null;
      var u = Rl, c = fl;
      if (wt = 0, Va = Rl = null, fl = 0, (gt & 6) !== 0) throw Error(r(331));
      var s = gt;
      if (gt |= 4, Dd(u.current), Ad(
        u,
        u.current,
        c,
        l
      ), gt = s, Yn(0, !1), me && typeof me.onPostCommitFiberRoot == "function")
        try {
          me.onPostCommitFiberRoot(en, u);
        } catch {
        }
      return !0;
    } finally {
      Y.p = n, M.T = a, Kd(t, e);
    }
  }
  function $d(t, e, l) {
    e = Oe(l, e), e = df(t.stateNode, e, 2), t = zl(t, e, 2), t !== null && (an(t, 2), Qe(t));
  }
  function bt(t, e, l) {
    if (t.tag === 3)
      $d(t, t, l);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          $d(
            e,
            t,
            l
          );
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Nl === null || !Nl.has(a))) {
            t = Oe(l, t), l = ks(2), a = zl(e, l, 2), a !== null && (Fs(
              l,
              a,
              e,
              t
            ), an(a, 2), Qe(a));
            break;
          }
        }
        e = e.return;
      }
  }
  function qf(t, e, l) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new bh();
      var n = /* @__PURE__ */ new Set();
      a.set(e, n);
    } else
      n = a.get(e), n === void 0 && (n = /* @__PURE__ */ new Set(), a.set(e, n));
    n.has(l) || (Cf = !0, n.add(l), t = zh.bind(null, t, e, l), e.then(t, t));
  }
  function zh(t, e, l) {
    var a = t.pingCache;
    a !== null && a.delete(e), t.pingedLanes |= t.suspendedLanes & l, t.warmLanes &= ~l, zt === t && (ct & l) === l && (Rt === 4 || Rt === 3 && (ct & 62914560) === ct && 300 > de() - Pu ? (gt & 2) === 0 && Ka(t, 0) : Nf |= l, Za === ct && (Za = 0)), Qe(t);
  }
  function kd(t, e) {
    e === 0 && (e = Qr()), t = Fl(t, e), t !== null && (an(t, e), Qe(t));
  }
  function Ah(t) {
    var e = t.memoizedState, l = 0;
    e !== null && (l = e.retryLane), kd(t, l);
  }
  function Oh(t, e) {
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
    a !== null && a.delete(e), kd(t, l);
  }
  function Mh(t, e) {
    return ki(t, e);
  }
  var ii = null, $a = null, Yf = !1, ci = !1, Lf = !1, xl = 0;
  function Qe(t) {
    t !== $a && t.next === null && ($a === null ? ii = $a = t : $a = $a.next = t), ci = !0, Yf || (Yf = !0, Ch());
  }
  function Yn(t, e) {
    if (!Lf && ci) {
      Lf = !0;
      do
        for (var l = !1, a = ii; a !== null; ) {
          if (t !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var c = a.suspendedLanes, s = a.pingedLanes;
              u = (1 << 31 - ve(42 | t) + 1) - 1, u &= n & ~(c & ~s), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (l = !0, Pd(a, u));
          } else
            u = ct, u = su(
              a,
              a === zt ? u : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (u & 3) === 0 || ln(a, u) || (l = !0, Pd(a, u));
          a = a.next;
        }
      while (l);
      Lf = !1;
    }
  }
  function Dh() {
    Fd();
  }
  function Fd() {
    ci = Yf = !1;
    var t = 0;
    xl !== 0 && Lh() && (t = xl);
    for (var e = de(), l = null, a = ii; a !== null; ) {
      var n = a.next, u = Wd(a, e);
      u === 0 ? (a.next = null, l === null ? ii = n : l.next = n, n === null && ($a = l)) : (l = a, (t !== 0 || (u & 3) !== 0) && (ci = !0)), a = n;
    }
    wt !== 0 && wt !== 5 || Yn(t), xl !== 0 && (xl = 0);
  }
  function Wd(t, e) {
    for (var l = t.suspendedLanes, a = t.pingedLanes, n = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
      var c = 31 - ve(u), s = 1 << c, v = n[c];
      v === -1 ? ((s & l) === 0 || (s & a) !== 0) && (n[c] = e0(s, e)) : v <= e && (t.expiredLanes |= s), u &= ~s;
    }
    if (e = zt, l = ct, l = su(
      t,
      t === e ? l : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a = t.callbackNode, l === 0 || t === e && (pt === 2 || pt === 9) || t.cancelPendingCommit !== null)
      return a !== null && a !== null && Fi(a), t.callbackNode = null, t.callbackPriority = 0;
    if ((l & 3) === 0 || ln(t, l)) {
      if (e = l & -l, e === t.callbackPriority) return e;
      switch (a !== null && Fi(a), Pi(l)) {
        case 2:
        case 8:
          l = Gr;
          break;
        case 32:
          l = cu;
          break;
        case 268435456:
          l = Xr;
          break;
        default:
          l = cu;
      }
      return a = Id.bind(null, t), l = ki(l, a), t.callbackPriority = e, t.callbackNode = l, e;
    }
    return a !== null && a !== null && Fi(a), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function Id(t, e) {
    if (wt !== 0 && wt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var l = t.callbackNode;
    if (ui() && t.callbackNode !== l)
      return null;
    var a = ct;
    return a = su(
      t,
      t === zt ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a === 0 ? null : (xd(t, a, e), Wd(t, de()), t.callbackNode != null && t.callbackNode === l ? Id.bind(null, t) : null);
  }
  function Pd(t, e) {
    if (ui()) return null;
    xd(t, e, !0);
  }
  function Ch() {
    Xh(function() {
      (gt & 6) !== 0 ? ki(
        Lr,
        Dh
      ) : Fd();
    });
  }
  function Gf() {
    if (xl === 0) {
      var t = xa;
      t === 0 && (t = fu, fu <<= 1, (fu & 261888) === 0 && (fu = 256)), xl = t;
    }
    return xl;
  }
  function tm(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : hu("" + t);
  }
  function em(t, e) {
    var l = e.ownerDocument.createElement("input");
    return l.name = e.name, l.value = e.value, t.id && l.setAttribute("form", t.id), e.parentNode.insertBefore(l, e), t = new FormData(t), l.parentNode.removeChild(l), t;
  }
  function Nh(t, e, l, a, n) {
    if (e === "submit" && l && l.stateNode === n) {
      var u = tm(
        (n[ae] || null).action
      ), c = a.submitter;
      c && (e = (e = c[ae] || null) ? tm(e.formAction) : c.getAttribute("formAction"), e !== null && (u = e, c = null));
      var s = new bu(
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
                if (xl !== 0) {
                  var v = c ? em(n, c) : new FormData(n);
                  uf(
                    l,
                    {
                      pending: !0,
                      data: v,
                      method: n.method,
                      action: u
                    },
                    null,
                    v
                  );
                }
              } else
                typeof u == "function" && (s.preventDefault(), v = c ? em(n, c) : new FormData(n), uf(
                  l,
                  {
                    pending: !0,
                    data: v,
                    method: n.method,
                    action: u
                  },
                  u,
                  v
                ));
            },
            currentTarget: n
          }
        ]
      });
    }
  }
  for (var Xf = 0; Xf < Ec.length; Xf++) {
    var Qf = Ec[Xf], Rh = Qf.toLowerCase(), Uh = Qf[0].toUpperCase() + Qf.slice(1);
    je(
      Rh,
      "on" + Uh
    );
  }
  je(Uo, "onAnimationEnd"), je(xo, "onAnimationIteration"), je(Ho, "onAnimationStart"), je("dblclick", "onDoubleClick"), je("focusin", "onFocus"), je("focusout", "onBlur"), je($0, "onTransitionRun"), je(k0, "onTransitionStart"), je(F0, "onTransitionCancel"), je(jo, "onTransitionEnd"), ba("onMouseEnter", ["mouseout", "mouseover"]), ba("onMouseLeave", ["mouseout", "mouseover"]), ba("onPointerEnter", ["pointerout", "pointerover"]), ba("onPointerLeave", ["pointerout", "pointerover"]), Kl(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Kl(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Kl("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Kl(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Kl(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Kl(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Ln = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), xh = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ln)
  );
  function lm(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var a = t[l], n = a.event;
      a = a.listeners;
      t: {
        var u = void 0;
        if (e)
          for (var c = a.length - 1; 0 <= c; c--) {
            var s = a[c], v = s.instance, T = s.currentTarget;
            if (s = s.listener, v !== u && n.isPropagationStopped())
              break t;
            u = s, n.currentTarget = T;
            try {
              u(n);
            } catch (D) {
              Eu(D);
            }
            n.currentTarget = null, u = v;
          }
        else
          for (c = 0; c < a.length; c++) {
            if (s = a[c], v = s.instance, T = s.currentTarget, s = s.listener, v !== u && n.isPropagationStopped())
              break t;
            u = s, n.currentTarget = T;
            try {
              u(n);
            } catch (D) {
              Eu(D);
            }
            n.currentTarget = null, u = v;
          }
      }
    }
  }
  function ut(t, e) {
    var l = e[tc];
    l === void 0 && (l = e[tc] = /* @__PURE__ */ new Set());
    var a = t + "__bubble";
    l.has(a) || (am(e, t, 2, !1), l.add(a));
  }
  function wf(t, e, l) {
    var a = 0;
    e && (a |= 4), am(
      l,
      t,
      a,
      e
    );
  }
  var fi = "_reactListening" + Math.random().toString(36).slice(2);
  function Zf(t) {
    if (!t[fi]) {
      t[fi] = !0, kr.forEach(function(l) {
        l !== "selectionchange" && (xh.has(l) || wf(l, !1, t), wf(l, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[fi] || (e[fi] = !0, wf("selectionchange", !1, e));
    }
  }
  function am(t, e, l, a) {
    switch (Um(e)) {
      case 2:
        var n = cy;
        break;
      case 8:
        n = fy;
        break;
      default:
        n = ur;
    }
    l = n.bind(
      null,
      e,
      l,
      t
    ), n = void 0, !rc || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (n = !0), a ? n !== void 0 ? t.addEventListener(e, l, {
      capture: !0,
      passive: n
    }) : t.addEventListener(e, l, !0) : n !== void 0 ? t.addEventListener(e, l, {
      passive: n
    }) : t.addEventListener(e, l, !1);
  }
  function Vf(t, e, l, a, n) {
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
              var v = c.tag;
              if ((v === 3 || v === 4) && c.stateNode.containerInfo === n)
                return;
              c = c.return;
            }
          for (; s !== null; ) {
            if (c = ya(s), c === null) return;
            if (v = c.tag, v === 5 || v === 6 || v === 26 || v === 27) {
              a = u = c;
              continue t;
            }
            s = s.parentNode;
          }
        }
        a = a.return;
      }
    co(function() {
      var T = u, D = cc(l), R = [];
      t: {
        var z = Bo.get(t);
        if (z !== void 0) {
          var A = bu, X = t;
          switch (t) {
            case "keypress":
              if (gu(l) === 0) break t;
            case "keydown":
            case "keyup":
              A = O0;
              break;
            case "focusin":
              X = "focus", A = mc;
              break;
            case "focusout":
              X = "blur", A = mc;
              break;
            case "beforeblur":
            case "afterblur":
              A = mc;
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
              A = oo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              A = v0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              A = C0;
              break;
            case Uo:
            case xo:
            case Ho:
              A = g0;
              break;
            case jo:
              A = R0;
              break;
            case "scroll":
            case "scrollend":
              A = d0;
              break;
            case "wheel":
              A = x0;
              break;
            case "copy":
            case "cut":
            case "paste":
              A = b0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              A = mo;
              break;
            case "toggle":
            case "beforetoggle":
              A = j0;
          }
          var F = (e & 4) !== 0, Et = !F && (t === "scroll" || t === "scrollend"), b = F ? z !== null ? z + "Capture" : null : z;
          F = [];
          for (var g = T, E; g !== null; ) {
            var C = g;
            if (E = C.stateNode, C = C.tag, C !== 5 && C !== 26 && C !== 27 || E === null || b === null || (C = cn(g, b), C != null && F.push(
              Gn(g, C, E)
            )), Et) break;
            g = g.return;
          }
          0 < F.length && (z = new A(
            z,
            X,
            null,
            l,
            D
          ), R.push({ event: z, listeners: F }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (z = t === "mouseover" || t === "pointerover", A = t === "mouseout" || t === "pointerout", z && l !== ic && (X = l.relatedTarget || l.fromElement) && (ya(X) || X[ha]))
            break t;
          if ((A || z) && (z = D.window === D ? D : (z = D.ownerDocument) ? z.defaultView || z.parentWindow : window, A ? (X = l.relatedTarget || l.toElement, A = T, X = X ? ya(X) : null, X !== null && (Et = p(X), F = X.tag, X !== Et || F !== 5 && F !== 27 && F !== 6) && (X = null)) : (A = null, X = T), A !== X)) {
            if (F = oo, C = "onMouseLeave", b = "onMouseEnter", g = "mouse", (t === "pointerout" || t === "pointerover") && (F = mo, C = "onPointerLeave", b = "onPointerEnter", g = "pointer"), Et = A == null ? z : un(A), E = X == null ? z : un(X), z = new F(
              C,
              g + "leave",
              A,
              l,
              D
            ), z.target = Et, z.relatedTarget = E, C = null, ya(D) === T && (F = new F(
              b,
              g + "enter",
              X,
              l,
              D
            ), F.target = E, F.relatedTarget = Et, C = F), Et = C, A && X)
              e: {
                for (F = Hh, b = A, g = X, E = 0, C = b; C; C = F(C))
                  E++;
                C = 0;
                for (var J = g; J; J = F(J))
                  C++;
                for (; 0 < E - C; )
                  b = F(b), E--;
                for (; 0 < C - E; )
                  g = F(g), C--;
                for (; E--; ) {
                  if (b === g || g !== null && b === g.alternate) {
                    F = b;
                    break e;
                  }
                  b = F(b), g = F(g);
                }
                F = null;
              }
            else F = null;
            A !== null && nm(
              R,
              z,
              A,
              F,
              !1
            ), X !== null && Et !== null && nm(
              R,
              Et,
              X,
              F,
              !0
            );
          }
        }
        t: {
          if (z = T ? un(T) : window, A = z.nodeName && z.nodeName.toLowerCase(), A === "select" || A === "input" && z.type === "file")
            var mt = _o;
          else if (bo(z))
            if (Eo)
              mt = V0;
            else {
              mt = w0;
              var w = Q0;
            }
          else
            A = z.nodeName, !A || A.toLowerCase() !== "input" || z.type !== "checkbox" && z.type !== "radio" ? T && uc(T.elementType) && (mt = _o) : mt = Z0;
          if (mt && (mt = mt(t, T))) {
            So(
              R,
              mt,
              l,
              D
            );
            break t;
          }
          w && w(t, z, T), t === "focusout" && T && z.type === "number" && T.memoizedProps.value != null && nc(z, "number", z.value);
        }
        switch (w = T ? un(T) : window, t) {
          case "focusin":
            (bo(w) || w.contentEditable === "true") && (Aa = w, bc = T, hn = null);
            break;
          case "focusout":
            hn = bc = Aa = null;
            break;
          case "mousedown":
            Sc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Sc = !1, No(R, l, D);
            break;
          case "selectionchange":
            if (J0) break;
          case "keydown":
          case "keyup":
            No(R, l, D);
        }
        var et;
        if (hc)
          t: {
            switch (t) {
              case "compositionstart":
                var ft = "onCompositionStart";
                break t;
              case "compositionend":
                ft = "onCompositionEnd";
                break t;
              case "compositionupdate":
                ft = "onCompositionUpdate";
                break t;
            }
            ft = void 0;
          }
        else
          za ? go(t, l) && (ft = "onCompositionEnd") : t === "keydown" && l.keyCode === 229 && (ft = "onCompositionStart");
        ft && (vo && l.locale !== "ko" && (za || ft !== "onCompositionStart" ? ft === "onCompositionEnd" && za && (et = fo()) : (gl = D, oc = "value" in gl ? gl.value : gl.textContent, za = !0)), w = ri(T, ft), 0 < w.length && (ft = new so(
          ft,
          t,
          null,
          l,
          D
        ), R.push({ event: ft, listeners: w }), et ? ft.data = et : (et = po(l), et !== null && (ft.data = et)))), (et = q0 ? Y0(t, l) : L0(t, l)) && (ft = ri(T, "onBeforeInput"), 0 < ft.length && (w = new so(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          D
        ), R.push({
          event: w,
          listeners: ft
        }), w.data = et)), Nh(
          R,
          t,
          T,
          l,
          D
        );
      }
      lm(R, e);
    });
  }
  function Gn(t, e, l) {
    return {
      instance: t,
      listener: e,
      currentTarget: l
    };
  }
  function ri(t, e) {
    for (var l = e + "Capture", a = []; t !== null; ) {
      var n = t, u = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || u === null || (n = cn(t, l), n != null && a.unshift(
        Gn(t, n, u)
      ), n = cn(t, e), n != null && a.push(
        Gn(t, n, u)
      )), t.tag === 3) return a;
      t = t.return;
    }
    return [];
  }
  function Hh(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function nm(t, e, l, a, n) {
    for (var u = e._reactName, c = []; l !== null && l !== a; ) {
      var s = l, v = s.alternate, T = s.stateNode;
      if (s = s.tag, v !== null && v === a) break;
      s !== 5 && s !== 26 && s !== 27 || T === null || (v = T, n ? (T = cn(l, u), T != null && c.unshift(
        Gn(l, T, v)
      )) : n || (T = cn(l, u), T != null && c.push(
        Gn(l, T, v)
      ))), l = l.return;
    }
    c.length !== 0 && t.push({ event: e, listeners: c });
  }
  var jh = /\r\n?/g, Bh = /\u0000|\uFFFD/g;
  function um(t) {
    return (typeof t == "string" ? t : "" + t).replace(jh, `
`).replace(Bh, "");
  }
  function im(t, e) {
    return e = um(e), um(t) === e;
  }
  function _t(t, e, l, a, n, u) {
    switch (l) {
      case "children":
        typeof a == "string" ? e === "body" || e === "textarea" && a === "" || _a(t, a) : (typeof a == "number" || typeof a == "bigint") && e !== "body" && _a(t, "" + a);
        break;
      case "className":
        mu(t, "class", a);
        break;
      case "tabIndex":
        mu(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        mu(t, l, a);
        break;
      case "style":
        uo(t, a, u);
        break;
      case "data":
        if (e !== "object") {
          mu(t, "data", a);
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
        a = hu("" + a), t.setAttribute(l, a);
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
          typeof u == "function" && (l === "formAction" ? (e !== "input" && _t(t, e, "name", n.name, n, null), _t(
            t,
            e,
            "formEncType",
            n.formEncType,
            n,
            null
          ), _t(
            t,
            e,
            "formMethod",
            n.formMethod,
            n,
            null
          ), _t(
            t,
            e,
            "formTarget",
            n.formTarget,
            n,
            null
          )) : (_t(t, e, "encType", n.encType, n, null), _t(t, e, "method", n.method, n, null), _t(t, e, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(l);
          break;
        }
        a = hu("" + a), t.setAttribute(l, a);
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
        l = hu("" + a), t.setAttributeNS(
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
        ut("beforetoggle", t), ut("toggle", t), du(t, "popover", a);
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
        du(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = o0.get(l) || l, du(t, l, a));
    }
  }
  function Kf(t, e, l, a, n, u) {
    switch (l) {
      case "style":
        uo(t, a, u);
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
        typeof a == "string" ? _a(t, a) : (typeof a == "number" || typeof a == "bigint") && _a(t, "" + a);
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
        if (!Fr.hasOwnProperty(l))
          t: {
            if (l[0] === "o" && l[1] === "n" && (n = l.endsWith("Capture"), e = l.slice(2, n ? l.length - 7 : void 0), u = t[ae] || null, u = u != null ? u[l] : null, typeof u == "function" && t.removeEventListener(e, u, n), typeof a == "function")) {
              typeof u != "function" && u !== null && (l in t ? t[l] = null : t.hasAttribute(l) && t.removeAttribute(l)), t.addEventListener(e, a, n);
              break t;
            }
            l in t ? t[l] = a : a === !0 ? t.setAttribute(l, "") : du(t, l, a);
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
                  _t(t, e, u, c, l, null);
              }
          }
        n && _t(t, e, "srcSet", l.srcSet, l, null), a && _t(t, e, "src", l.src, l, null);
        return;
      case "input":
        ut("invalid", t);
        var s = u = c = n = null, v = null, T = null;
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
                  v = D;
                  break;
                case "defaultChecked":
                  T = D;
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
                  _t(t, e, a, D, l, null);
              }
          }
        eo(
          t,
          u,
          s,
          v,
          T,
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
                _t(t, e, n, s, l, null);
            }
        e = u, l = c, t.multiple = !!a, e != null ? Sa(t, !!a, e, !1) : l != null && Sa(t, !!a, l, !0);
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
                _t(t, e, c, s, l, null);
            }
        ao(t, a, n, u);
        return;
      case "option":
        for (v in l)
          l.hasOwnProperty(v) && (a = l[v], a != null) && (v === "selected" ? t.selected = a && typeof a != "function" && typeof a != "symbol" : _t(t, e, v, a, l, null));
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
        for (a = 0; a < Ln.length; a++)
          ut(Ln[a], t);
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
        for (T in l)
          if (l.hasOwnProperty(T) && (a = l[T], a != null))
            switch (T) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, e));
              default:
                _t(t, e, T, a, l, null);
            }
        return;
      default:
        if (uc(e)) {
          for (D in l)
            l.hasOwnProperty(D) && (a = l[D], a !== void 0 && Kf(
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
      l.hasOwnProperty(s) && (a = l[s], a != null && _t(t, e, s, a, l, null));
  }
  function qh(t, e, l, a) {
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
        var n = null, u = null, c = null, s = null, v = null, T = null, D = null;
        for (A in l) {
          var R = l[A];
          if (l.hasOwnProperty(A) && R != null)
            switch (A) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                v = R;
              default:
                a.hasOwnProperty(A) || _t(t, e, A, null, a, R);
            }
        }
        for (var z in a) {
          var A = a[z];
          if (R = l[z], a.hasOwnProperty(z) && (A != null || R != null))
            switch (z) {
              case "type":
                u = A;
                break;
              case "name":
                n = A;
                break;
              case "checked":
                T = A;
                break;
              case "defaultChecked":
                D = A;
                break;
              case "value":
                c = A;
                break;
              case "defaultValue":
                s = A;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (A != null)
                  throw Error(r(137, e));
                break;
              default:
                A !== R && _t(
                  t,
                  e,
                  z,
                  A,
                  a,
                  R
                );
            }
        }
        ac(
          t,
          c,
          s,
          v,
          T,
          D,
          u,
          n
        );
        return;
      case "select":
        A = c = s = z = null;
        for (u in l)
          if (v = l[u], l.hasOwnProperty(u) && v != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                A = v;
              default:
                a.hasOwnProperty(u) || _t(
                  t,
                  e,
                  u,
                  null,
                  a,
                  v
                );
            }
        for (n in a)
          if (u = a[n], v = l[n], a.hasOwnProperty(n) && (u != null || v != null))
            switch (n) {
              case "value":
                z = u;
                break;
              case "defaultValue":
                s = u;
                break;
              case "multiple":
                c = u;
              default:
                u !== v && _t(
                  t,
                  e,
                  n,
                  u,
                  a,
                  v
                );
            }
        e = s, l = c, a = A, z != null ? Sa(t, !!l, z, !1) : !!a != !!l && (e != null ? Sa(t, !!l, e, !0) : Sa(t, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        A = z = null;
        for (s in l)
          if (n = l[s], l.hasOwnProperty(s) && n != null && !a.hasOwnProperty(s))
            switch (s) {
              case "value":
                break;
              case "children":
                break;
              default:
                _t(t, e, s, null, a, n);
            }
        for (c in a)
          if (n = a[c], u = l[c], a.hasOwnProperty(c) && (n != null || u != null))
            switch (c) {
              case "value":
                z = n;
                break;
              case "defaultValue":
                A = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(r(91));
                break;
              default:
                n !== u && _t(t, e, c, n, a, u);
            }
        lo(t, z, A);
        return;
      case "option":
        for (var X in l)
          z = l[X], l.hasOwnProperty(X) && z != null && !a.hasOwnProperty(X) && (X === "selected" ? t.selected = !1 : _t(
            t,
            e,
            X,
            null,
            a,
            z
          ));
        for (v in a)
          z = a[v], A = l[v], a.hasOwnProperty(v) && z !== A && (z != null || A != null) && (v === "selected" ? t.selected = z && typeof z != "function" && typeof z != "symbol" : _t(
            t,
            e,
            v,
            z,
            a,
            A
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
        for (var F in l)
          z = l[F], l.hasOwnProperty(F) && z != null && !a.hasOwnProperty(F) && _t(t, e, F, null, a, z);
        for (T in a)
          if (z = a[T], A = l[T], a.hasOwnProperty(T) && z !== A && (z != null || A != null))
            switch (T) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null)
                  throw Error(r(137, e));
                break;
              default:
                _t(
                  t,
                  e,
                  T,
                  z,
                  a,
                  A
                );
            }
        return;
      default:
        if (uc(e)) {
          for (var Et in l)
            z = l[Et], l.hasOwnProperty(Et) && z !== void 0 && !a.hasOwnProperty(Et) && Kf(
              t,
              e,
              Et,
              void 0,
              a,
              z
            );
          for (D in a)
            z = a[D], A = l[D], !a.hasOwnProperty(D) || z === A || z === void 0 && A === void 0 || Kf(
              t,
              e,
              D,
              z,
              a,
              A
            );
          return;
        }
    }
    for (var b in l)
      z = l[b], l.hasOwnProperty(b) && z != null && !a.hasOwnProperty(b) && _t(t, e, b, null, a, z);
    for (R in a)
      z = a[R], A = l[R], !a.hasOwnProperty(R) || z === A || z == null && A == null || _t(t, e, R, z, a, A);
  }
  function cm(t) {
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
  function Yh() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, l = performance.getEntriesByType("resource"), a = 0; a < l.length; a++) {
        var n = l[a], u = n.transferSize, c = n.initiatorType, s = n.duration;
        if (u && s && cm(c)) {
          for (c = 0, s = n.responseEnd, a += 1; a < l.length; a++) {
            var v = l[a], T = v.startTime;
            if (T > s) break;
            var D = v.transferSize, R = v.initiatorType;
            D && cm(R) && (v = v.responseEnd, c += D * (v < s ? 1 : (s - T) / (v - T)));
          }
          if (--a, e += 8 * (u + c) / (n.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var Jf = null, $f = null;
  function oi(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function fm(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function rm(t, e) {
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
  function kf(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var Ff = null;
  function Lh() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Ff ? !1 : (Ff = t, !0) : (Ff = null, !1);
  }
  var om = typeof setTimeout == "function" ? setTimeout : void 0, Gh = typeof clearTimeout == "function" ? clearTimeout : void 0, sm = typeof Promise == "function" ? Promise : void 0, Xh = typeof queueMicrotask == "function" ? queueMicrotask : typeof sm < "u" ? function(t) {
    return sm.resolve(null).then(t).catch(Qh);
  } : om;
  function Qh(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Hl(t) {
    return t === "head";
  }
  function dm(t, e) {
    var l = e, a = 0;
    do {
      var n = l.nextSibling;
      if (t.removeChild(l), n && n.nodeType === 8)
        if (l = n.data, l === "/$" || l === "/&") {
          if (a === 0) {
            t.removeChild(n), Ia(e);
            return;
          }
          a--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&")
          a++;
        else if (l === "html")
          Xn(t.ownerDocument.documentElement);
        else if (l === "head") {
          l = t.ownerDocument.head, Xn(l);
          for (var u = l.firstChild; u; ) {
            var c = u.nextSibling, s = u.nodeName;
            u[nn] || s === "SCRIPT" || s === "STYLE" || s === "LINK" && u.rel.toLowerCase() === "stylesheet" || l.removeChild(u), u = c;
          }
        } else
          l === "body" && Xn(t.ownerDocument.body);
      l = n;
    } while (l);
    Ia(e);
  }
  function mm(t, e) {
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
  function Wf(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (e = e.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Wf(l), ec(l);
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
  function wh(t, e, l, a) {
    for (; t.nodeType === 1; ) {
      var n = l;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (a) {
        if (!t[nn])
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
      if (t = Re(t.nextSibling), t === null) break;
    }
    return null;
  }
  function Zh(t, e, l) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = Re(t.nextSibling), t === null)) return null;
    return t;
  }
  function vm(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Re(t.nextSibling), t === null)) return null;
    return t;
  }
  function If(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Pf(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function Vh(t, e) {
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
  function Re(t) {
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
  var tr = null;
  function hm(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "/$" || l === "/&") {
          if (e === 0)
            return Re(t.nextSibling);
          e--;
        } else
          l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function ym(t) {
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
  function gm(t, e, l) {
    switch (e = oi(l), t) {
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
  function Xn(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    ec(t);
  }
  var Ue = /* @__PURE__ */ new Map(), pm = /* @__PURE__ */ new Set();
  function si(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var rl = Y.d;
  Y.d = {
    f: Kh,
    r: Jh,
    D: $h,
    C: kh,
    L: Fh,
    m: Wh,
    X: Ph,
    S: Ih,
    M: ty
  };
  function Kh() {
    var t = rl.f(), e = li();
    return t || e;
  }
  function Jh(t) {
    var e = ga(t);
    e !== null && e.tag === 5 && e.type === "form" ? js(e) : rl.r(t);
  }
  var ka = typeof document > "u" ? null : document;
  function bm(t, e, l) {
    var a = ka;
    if (a && typeof e == "string" && e) {
      var n = ze(e);
      n = 'link[rel="' + t + '"][href="' + n + '"]', typeof l == "string" && (n += '[crossorigin="' + l + '"]'), pm.has(n) || (pm.add(n), t = { rel: t, crossOrigin: l, href: e }, a.querySelector(n) === null && (e = a.createElement("link"), Pt(e, "link", t), Vt(e), a.head.appendChild(e)));
    }
  }
  function $h(t) {
    rl.D(t), bm("dns-prefetch", t, null);
  }
  function kh(t, e) {
    rl.C(t, e), bm("preconnect", t, e);
  }
  function Fh(t, e, l) {
    rl.L(t, e, l);
    var a = ka;
    if (a && t && e) {
      var n = 'link[rel="preload"][as="' + ze(e) + '"]';
      e === "image" && l && l.imageSrcSet ? (n += '[imagesrcset="' + ze(
        l.imageSrcSet
      ) + '"]', typeof l.imageSizes == "string" && (n += '[imagesizes="' + ze(
        l.imageSizes
      ) + '"]')) : n += '[href="' + ze(t) + '"]';
      var u = n;
      switch (e) {
        case "style":
          u = Fa(t);
          break;
        case "script":
          u = Wa(t);
      }
      Ue.has(u) || (t = x(
        {
          rel: "preload",
          href: e === "image" && l && l.imageSrcSet ? void 0 : t,
          as: e
        },
        l
      ), Ue.set(u, t), a.querySelector(n) !== null || e === "style" && a.querySelector(Qn(u)) || e === "script" && a.querySelector(wn(u)) || (e = a.createElement("link"), Pt(e, "link", t), Vt(e), a.head.appendChild(e)));
    }
  }
  function Wh(t, e) {
    rl.m(t, e);
    var l = ka;
    if (l && t) {
      var a = e && typeof e.as == "string" ? e.as : "script", n = 'link[rel="modulepreload"][as="' + ze(a) + '"][href="' + ze(t) + '"]', u = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Wa(t);
      }
      if (!Ue.has(u) && (t = x({ rel: "modulepreload", href: t }, e), Ue.set(u, t), l.querySelector(n) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(wn(u)))
              return;
        }
        a = l.createElement("link"), Pt(a, "link", t), Vt(a), l.head.appendChild(a);
      }
    }
  }
  function Ih(t, e, l) {
    rl.S(t, e, l);
    var a = ka;
    if (a && t) {
      var n = pa(a).hoistableStyles, u = Fa(t);
      e = e || "default";
      var c = n.get(u);
      if (!c) {
        var s = { loading: 0, preload: null };
        if (c = a.querySelector(
          Qn(u)
        ))
          s.loading = 5;
        else {
          t = x(
            { rel: "stylesheet", href: t, "data-precedence": e },
            l
          ), (l = Ue.get(u)) && er(t, l);
          var v = c = a.createElement("link");
          Vt(v), Pt(v, "link", t), v._p = new Promise(function(T, D) {
            v.onload = T, v.onerror = D;
          }), v.addEventListener("load", function() {
            s.loading |= 1;
          }), v.addEventListener("error", function() {
            s.loading |= 2;
          }), s.loading |= 4, di(c, e, a);
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
  function Ph(t, e) {
    rl.X(t, e);
    var l = ka;
    if (l && t) {
      var a = pa(l).hoistableScripts, n = Wa(t), u = a.get(n);
      u || (u = l.querySelector(wn(n)), u || (t = x({ src: t, async: !0 }, e), (e = Ue.get(n)) && lr(t, e), u = l.createElement("script"), Vt(u), Pt(u, "link", t), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function ty(t, e) {
    rl.M(t, e);
    var l = ka;
    if (l && t) {
      var a = pa(l).hoistableScripts, n = Wa(t), u = a.get(n);
      u || (u = l.querySelector(wn(n)), u || (t = x({ src: t, async: !0, type: "module" }, e), (e = Ue.get(n)) && lr(t, e), u = l.createElement("script"), Vt(u), Pt(u, "link", t), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function Sm(t, e, l, a) {
    var n = (n = at.current) ? si(n) : null;
    if (!n) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (e = Fa(l.href), l = pa(
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
          var u = pa(
            n
          ).hoistableStyles, c = u.get(t);
          if (c || (n = n.ownerDocument || n, c = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(t, c), (u = n.querySelector(
            Qn(t)
          )) && !u._p && (c.instance = u, c.state.loading = 5), Ue.has(t) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, Ue.set(t, l), u || ey(
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
        return e = l.async, l = l.src, typeof l == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = Wa(l), l = pa(
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
    return 'href="' + ze(t) + '"';
  }
  function Qn(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function _m(t) {
    return x({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function ey(t, e, l, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? a.loading = 1 : (e = t.createElement("link"), a.preload = e, e.addEventListener("load", function() {
      return a.loading |= 1;
    }), e.addEventListener("error", function() {
      return a.loading |= 2;
    }), Pt(e, "link", l), Vt(e), t.head.appendChild(e));
  }
  function Wa(t) {
    return '[src="' + ze(t) + '"]';
  }
  function wn(t) {
    return "script[async]" + t;
  }
  function Em(t, e, l) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var a = t.querySelector(
            'style[data-href~="' + ze(l.href) + '"]'
          );
          if (a)
            return e.instance = a, Vt(a), a;
          var n = x({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return a = (t.ownerDocument || t).createElement(
            "style"
          ), Vt(a), Pt(a, "style", n), di(a, l.precedence, t), e.instance = a;
        case "stylesheet":
          n = Fa(l.href);
          var u = t.querySelector(
            Qn(n)
          );
          if (u)
            return e.state.loading |= 4, e.instance = u, Vt(u), u;
          a = _m(l), (n = Ue.get(n)) && er(a, n), u = (t.ownerDocument || t).createElement("link"), Vt(u);
          var c = u;
          return c._p = new Promise(function(s, v) {
            c.onload = s, c.onerror = v;
          }), Pt(u, "link", a), e.state.loading |= 4, di(u, l.precedence, t), e.instance = u;
        case "script":
          return u = Wa(l.src), (n = t.querySelector(
            wn(u)
          )) ? (e.instance = n, Vt(n), n) : (a = l, (n = Ue.get(u)) && (a = x({}, l), lr(a, n)), t = t.ownerDocument || t, n = t.createElement("script"), Vt(n), Pt(n, "link", a), t.head.appendChild(n), e.instance = n);
        case "void":
          return null;
        default:
          throw Error(r(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (a = e.instance, e.state.loading |= 4, di(a, l.precedence, t));
    return e.instance;
  }
  function di(t, e, l) {
    for (var a = l.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), n = a.length ? a[a.length - 1] : null, u = n, c = 0; c < a.length; c++) {
      var s = a[c];
      if (s.dataset.precedence === e) u = s;
      else if (u !== n) break;
    }
    u ? u.parentNode.insertBefore(t, u.nextSibling) : (e = l.nodeType === 9 ? l.head : l, e.insertBefore(t, e.firstChild));
  }
  function er(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function lr(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var mi = null;
  function Tm(t, e, l) {
    if (mi === null) {
      var a = /* @__PURE__ */ new Map(), n = mi = /* @__PURE__ */ new Map();
      n.set(l, a);
    } else
      n = mi, a = n.get(l), a || (a = /* @__PURE__ */ new Map(), n.set(l, a));
    if (a.has(t)) return a;
    for (a.set(t, null), l = l.getElementsByTagName(t), n = 0; n < l.length; n++) {
      var u = l[n];
      if (!(u[nn] || u[kt] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var c = u.getAttribute(e) || "";
        c = t + c;
        var s = a.get(c);
        s ? s.push(u) : a.set(c, [u]);
      }
    }
    return a;
  }
  function zm(t, e, l) {
    t = t.ownerDocument || t, t.head.insertBefore(
      l,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function ly(t, e, l) {
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
  function Am(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function ay(t, e, l, a) {
    if (l.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var n = Fa(a.href), u = e.querySelector(
          Qn(n)
        );
        if (u) {
          e = u._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = vi.bind(t), e.then(t, t)), l.state.loading |= 4, l.instance = u, Vt(u);
          return;
        }
        u = e.ownerDocument || e, a = _m(a), (n = Ue.get(n)) && er(a, n), u = u.createElement("link"), Vt(u);
        var c = u;
        c._p = new Promise(function(s, v) {
          c.onload = s, c.onerror = v;
        }), Pt(u, "link", a), l.instance = u;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(l, e), (e = l.state.preload) && (l.state.loading & 3) === 0 && (t.count++, l = vi.bind(t), e.addEventListener("load", l), e.addEventListener("error", l));
    }
  }
  var ar = 0;
  function ny(t, e) {
    return t.stylesheets && t.count === 0 && yi(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(l) {
      var a = setTimeout(function() {
        if (t.stylesheets && yi(t, t.stylesheets), t.unsuspend) {
          var u = t.unsuspend;
          t.unsuspend = null, u();
        }
      }, 6e4 + e);
      0 < t.imgBytes && ar === 0 && (ar = 62500 * Yh());
      var n = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && yi(t, t.stylesheets), t.unsuspend)) {
            var u = t.unsuspend;
            t.unsuspend = null, u();
          }
        },
        (t.imgBytes > ar ? 50 : 800) + e
      );
      return t.unsuspend = l, function() {
        t.unsuspend = null, clearTimeout(a), clearTimeout(n);
      };
    } : null;
  }
  function vi() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) yi(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var hi = null;
  function yi(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, hi = /* @__PURE__ */ new Map(), e.forEach(uy, t), hi = null, vi.call(t));
  }
  function uy(t, e) {
    if (!(e.state.loading & 4)) {
      var l = hi.get(t);
      if (l) var a = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), hi.set(t, l);
        for (var n = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < n.length; u++) {
          var c = n[u];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (l.set(c.dataset.precedence, c), a = c);
        }
        a && l.set(null, a);
      }
      n = e.instance, c = n.getAttribute("data-precedence"), u = l.get(c) || a, u === a && l.set(null, n), l.set(c, n), this.count++, a = vi.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), u ? u.parentNode.insertBefore(n, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(n, t.firstChild)), e.state.loading |= 4;
    }
  }
  var Zn = {
    $$typeof: V,
    Provider: null,
    Consumer: null,
    _currentValue: K,
    _currentValue2: K,
    _threadCount: 0
  };
  function iy(t, e, l, a, n, u, c, s, v) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Wi(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Wi(0), this.hiddenUpdates = Wi(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = v, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Om(t, e, l, a, n, u, c, s, v, T, D, R) {
    return t = new iy(
      t,
      e,
      l,
      c,
      v,
      T,
      D,
      R,
      s
    ), e = 1, u === !0 && (e |= 24), u = ye(3, null, null, e), t.current = u, u.stateNode = t, e = jc(), e.refCount++, t.pooledCache = e, e.refCount++, u.memoizedState = {
      element: a,
      isDehydrated: l,
      cache: e
    }, Lc(u), t;
  }
  function Mm(t) {
    return t ? (t = Da, t) : Da;
  }
  function Dm(t, e, l, a, n, u) {
    n = Mm(n), a.context === null ? a.context = n : a.pendingContext = n, a = Tl(e), a.payload = { element: l }, u = u === void 0 ? null : u, u !== null && (a.callback = u), l = zl(t, a, e), l !== null && (re(l, t, e), En(l, t, e));
  }
  function Cm(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function nr(t, e) {
    Cm(t, e), (t = t.alternate) && Cm(t, e);
  }
  function Nm(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Fl(t, 67108864);
      e !== null && re(e, t, 67108864), nr(t, 67108864);
    }
  }
  function Rm(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = _e();
      e = Ii(e);
      var l = Fl(t, e);
      l !== null && re(l, t, e), nr(t, e);
    }
  }
  var gi = !0;
  function cy(t, e, l, a) {
    var n = M.T;
    M.T = null;
    var u = Y.p;
    try {
      Y.p = 2, ur(t, e, l, a);
    } finally {
      Y.p = u, M.T = n;
    }
  }
  function fy(t, e, l, a) {
    var n = M.T;
    M.T = null;
    var u = Y.p;
    try {
      Y.p = 8, ur(t, e, l, a);
    } finally {
      Y.p = u, M.T = n;
    }
  }
  function ur(t, e, l, a) {
    if (gi) {
      var n = ir(a);
      if (n === null)
        Vf(
          t,
          e,
          a,
          pi,
          l
        ), xm(t, a);
      else if (oy(
        n,
        t,
        e,
        l,
        a
      ))
        a.stopPropagation();
      else if (xm(t, a), e & 4 && -1 < ry.indexOf(t)) {
        for (; n !== null; ) {
          var u = ga(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var c = Vl(u.pendingLanes);
                  if (c !== 0) {
                    var s = u;
                    for (s.pendingLanes |= 2, s.entangledLanes |= 2; c; ) {
                      var v = 1 << 31 - ve(c);
                      s.entanglements[1] |= v, c &= ~v;
                    }
                    Qe(u), (gt & 6) === 0 && (ti = de() + 500, Yn(0));
                  }
                }
                break;
              case 31:
              case 13:
                s = Fl(u, 2), s !== null && re(s, u, 2), li(), nr(u, 2);
            }
          if (u = ir(a), u === null && Vf(
            t,
            e,
            a,
            pi,
            l
          ), u === n) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else
        Vf(
          t,
          e,
          a,
          null,
          l
        );
    }
  }
  function ir(t) {
    return t = cc(t), cr(t);
  }
  var pi = null;
  function cr(t) {
    if (pi = null, t = ya(t), t !== null) {
      var e = p(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (t = _(e), t !== null) return t;
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
    return pi = t, null;
  }
  function Um(t) {
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
        switch ($v()) {
          case Lr:
            return 2;
          case Gr:
            return 8;
          case cu:
          case kv:
            return 32;
          case Xr:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var fr = !1, jl = null, Bl = null, ql = null, Vn = /* @__PURE__ */ new Map(), Kn = /* @__PURE__ */ new Map(), Yl = [], ry = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function xm(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        jl = null;
        break;
      case "dragenter":
      case "dragleave":
        Bl = null;
        break;
      case "mouseover":
      case "mouseout":
        ql = null;
        break;
      case "pointerover":
      case "pointerout":
        Vn.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Kn.delete(e.pointerId);
    }
  }
  function Jn(t, e, l, a, n, u) {
    return t === null || t.nativeEvent !== u ? (t = {
      blockedOn: e,
      domEventName: l,
      eventSystemFlags: a,
      nativeEvent: u,
      targetContainers: [n]
    }, e !== null && (e = ga(e), e !== null && Nm(e)), t) : (t.eventSystemFlags |= a, e = t.targetContainers, n !== null && e.indexOf(n) === -1 && e.push(n), t);
  }
  function oy(t, e, l, a, n) {
    switch (e) {
      case "focusin":
        return jl = Jn(
          jl,
          t,
          e,
          l,
          a,
          n
        ), !0;
      case "dragenter":
        return Bl = Jn(
          Bl,
          t,
          e,
          l,
          a,
          n
        ), !0;
      case "mouseover":
        return ql = Jn(
          ql,
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
          Jn(
            Vn.get(u) || null,
            t,
            e,
            l,
            a,
            n
          )
        ), !0;
      case "gotpointercapture":
        return u = n.pointerId, Kn.set(
          u,
          Jn(
            Kn.get(u) || null,
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
  function Hm(t) {
    var e = ya(t.target);
    if (e !== null) {
      var l = p(e);
      if (l !== null) {
        if (e = l.tag, e === 13) {
          if (e = _(l), e !== null) {
            t.blockedOn = e, Jr(t.priority, function() {
              Rm(l);
            });
            return;
          }
        } else if (e === 31) {
          if (e = S(l), e !== null) {
            t.blockedOn = e, Jr(t.priority, function() {
              Rm(l);
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
  function bi(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = ir(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var a = new l.constructor(
          l.type,
          l
        );
        ic = a, l.target.dispatchEvent(a), ic = null;
      } else
        return e = ga(l), e !== null && Nm(e), t.blockedOn = l, !1;
      e.shift();
    }
    return !0;
  }
  function jm(t, e, l) {
    bi(t) && l.delete(e);
  }
  function sy() {
    fr = !1, jl !== null && bi(jl) && (jl = null), Bl !== null && bi(Bl) && (Bl = null), ql !== null && bi(ql) && (ql = null), Vn.forEach(jm), Kn.forEach(jm);
  }
  function Si(t, e) {
    t.blockedOn === e && (t.blockedOn = null, fr || (fr = !0, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      sy
    )));
  }
  var _i = null;
  function Bm(t) {
    _i !== t && (_i = t, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      function() {
        _i === t && (_i = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e], a = t[e + 1], n = t[e + 2];
          if (typeof a != "function") {
            if (cr(a || l) === null)
              continue;
            break;
          }
          var u = ga(l);
          u !== null && (t.splice(e, 3), e -= 3, uf(
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
  function Ia(t) {
    function e(v) {
      return Si(v, t);
    }
    jl !== null && Si(jl, t), Bl !== null && Si(Bl, t), ql !== null && Si(ql, t), Vn.forEach(e), Kn.forEach(e);
    for (var l = 0; l < Yl.length; l++) {
      var a = Yl[l];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < Yl.length && (l = Yl[0], l.blockedOn === null); )
      Hm(l), l.blockedOn === null && Yl.shift();
    if (l = (t.ownerDocument || t).$$reactFormReplay, l != null)
      for (a = 0; a < l.length; a += 3) {
        var n = l[a], u = l[a + 1], c = n[ae] || null;
        if (typeof u == "function")
          c || Bm(l);
        else if (c) {
          var s = null;
          if (u && u.hasAttribute("formAction")) {
            if (n = u, c = u[ae] || null)
              s = c.formAction;
            else if (cr(n) !== null) continue;
          } else s = c.action;
          typeof s == "function" ? l[a + 1] = s : (l.splice(a, 3), a -= 3), Bm(l);
        }
      }
  }
  function qm() {
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
  function rr(t) {
    this._internalRoot = t;
  }
  Ei.prototype.render = rr.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(r(409));
    var l = e.current, a = _e();
    Dm(l, a, t, e, null, null);
  }, Ei.prototype.unmount = rr.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      Dm(t.current, 2, null, t, null, null), li(), e[ha] = null;
    }
  };
  function Ei(t) {
    this._internalRoot = t;
  }
  Ei.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = Kr();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < Yl.length && e !== 0 && e < Yl[l].priority; l++) ;
      Yl.splice(l, 0, t), l === 0 && Hm(t);
    }
  };
  var Ym = f.version;
  if (Ym !== "19.2.3")
    throw Error(
      r(
        527,
        Ym,
        "19.2.3"
      )
    );
  Y.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(r(188)) : (t = Object.keys(t).join(","), Error(r(268, t)));
    return t = y(e), t = t !== null ? U(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var dy = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: M,
    reconcilerVersion: "19.2.3"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ti = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ti.isDisabled && Ti.supportsFiber)
      try {
        en = Ti.inject(
          dy
        ), me = Ti;
      } catch {
      }
  }
  return kn.createRoot = function(t, e) {
    if (!d(t)) throw Error(r(299));
    var l = !1, a = "", n = Vs, u = Ks, c = Js;
    return e != null && (e.unstable_strictMode === !0 && (l = !0), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (u = e.onCaughtError), e.onRecoverableError !== void 0 && (c = e.onRecoverableError)), e = Om(
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
      qm
    ), t[ha] = e.current, Zf(t), new rr(e);
  }, kn.hydrateRoot = function(t, e, l) {
    if (!d(t)) throw Error(r(299));
    var a = !1, n = "", u = Vs, c = Ks, s = Js, v = null;
    return l != null && (l.unstable_strictMode === !0 && (a = !0), l.identifierPrefix !== void 0 && (n = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (c = l.onCaughtError), l.onRecoverableError !== void 0 && (s = l.onRecoverableError), l.formState !== void 0 && (v = l.formState)), e = Om(
      t,
      1,
      !0,
      e,
      l ?? null,
      a,
      n,
      v,
      u,
      c,
      s,
      qm
    ), e.context = Mm(null), l = e.current, a = _e(), a = Ii(a), n = Tl(a), n.callback = null, zl(l, n, a), l = a, e.current.lanes = l, an(e, l), Qe(e), t[ha] = e.current, Zf(t), new Ei(e);
  }, kn.version = "19.2.3", kn;
}
var km;
function _y() {
  if (km) return dr.exports;
  km = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (f) {
        console.error(f);
      }
  }
  return i(), dr.exports = Sy(), dr.exports;
}
var vv = _y();
const Ey = /* @__PURE__ */ dv(vv), Hi = /* @__PURE__ */ sv({
  __proto__: null,
  default: Ey
}, [vv]);
var Ty = Object.defineProperty, zy = (i, f, o) => f in i ? Ty(i, f, { enumerable: !0, configurable: !0, writable: !0, value: o }) : i[f] = o, zi = (i, f, o) => zy(i, typeof f != "symbol" ? f + "" : f, o);
const Ay = {
  stringify: (i) => i ? "true" : "false",
  parse: (i) => /^[ty1-9]/i.test(i)
}, Oy = {
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
}, My = {
  stringify: (i) => JSON.stringify(i),
  parse: (i) => JSON.parse(i)
};
function Dy(i) {
  return i.replace(
    /([a-z0-9])([A-Z])/g,
    (f, o, r) => `${o}-${r.toLowerCase()}`
  );
}
function hv(i) {
  return i.replace(/[-:]([a-z])/g, (f, o) => `${o.toUpperCase()}`);
}
const Cy = {
  stringify: (i) => i.name,
  parse: (i, f, o) => {
    const r = (() => {
      const d = hv(f);
      if (typeof o < "u" && d in o.container)
        return o.container[d];
    })();
    return typeof r == "function" ? r.bind(o) : void 0;
  }
}, Ny = {
  stringify: (i) => `${i}`,
  parse: (i) => parseFloat(i)
}, Ry = {
  stringify: (i) => i,
  parse: (i) => i
}, yr = {
  string: Ry,
  number: Ny,
  boolean: Ay,
  function: Oy,
  method: Cy,
  json: My
}, Fn = /* @__PURE__ */ Symbol.for("r2wc.render"), Ai = /* @__PURE__ */ Symbol.for("r2wc.connected"), ra = /* @__PURE__ */ Symbol.for("r2wc.context"), Ee = /* @__PURE__ */ Symbol.for("r2wc.props");
function Uy(i, f, o) {
  var r, d, p;
  f.props || (f.props = i.propTypes ? Object.keys(i.propTypes) : []), f.events || (f.events = []);
  const _ = Array.isArray(f.props) ? f.props.slice() : Object.keys(f.props), S = Array.isArray(f.events) ? f.events.slice() : Object.keys(f.events), m = {}, y = {}, U = {}, x = {};
  for (const q of _) {
    m[q] = Array.isArray(f.props) ? "string" : f.props[q];
    const j = Dy(q);
    U[q] = j, x[j] = q;
  }
  for (const q of S)
    y[q] = Array.isArray(f.events) ? {} : f.events[q];
  class B extends HTMLElement {
    constructor() {
      super(), zi(this, p, !0), zi(this, d), zi(this, r, {}), zi(this, "container"), f.shadow ? this.container = this.attachShadow({
        mode: f.shadow
      }) : this.container = this, this[Ee].container = this.container;
      for (const j of _) {
        const Q = U[j], Z = this.getAttribute(Q), L = m[j], k = L ? yr[L] : null;
        if (L === "method") {
          const V = hv(Q);
          Object.defineProperty(this[Ee].container, V, {
            enumerable: !0,
            configurable: !0,
            get() {
              return this[Ee][V];
            },
            set(lt) {
              this[Ee][V] = lt, this[Fn]();
            }
          }), this[Ee][j] = k.parse(Z, Q, this);
        }
        k != null && k.parse && Z && (this[Ee][j] = k.parse(Z, Q, this));
      }
      for (const j of S)
        this[Ee][j] = (Q) => {
          const Z = j.replace(/^on/, "").toLowerCase();
          this.dispatchEvent(
            new CustomEvent(Z, { detail: Q, ...y[j] })
          );
        };
    }
    static get observedAttributes() {
      return Object.keys(x);
    }
    connectedCallback() {
      this[Ai] = !0, this[Fn]();
    }
    disconnectedCallback() {
      this[Ai] = !1, this[ra] && o.unmount(this[ra]), delete this[ra];
    }
    attributeChangedCallback(j, Q, Z) {
      const L = x[j], k = m[L], V = k ? yr[k] : null;
      L in m && V != null && V.parse && Z && (this[Ee][L] = V.parse(Z, j, this), this[Fn]());
    }
    [(p = Ai, d = ra, r = Ee, Fn)]() {
      this[Ai] && (this[ra] ? o.update(this[ra], this[Ee]) : this[ra] = o.mount(
        this.container,
        i,
        this[Ee]
      ));
    }
  }
  for (const q of _) {
    const j = U[q], Q = m[q];
    Object.defineProperty(B.prototype, q, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[Ee][q];
      },
      set(Z) {
        this[Ee][q] = Z;
        const L = Q ? yr[Q] : null;
        if (L != null && L.stringify) {
          const k = L.stringify(Z, j, this);
          this.getAttribute(j) !== k && this.setAttribute(j, k);
        } else
          this[Fn]();
      }
    });
  }
  return B;
}
function ji(i, f, o, r = {}) {
  function d(S, m, y) {
    const U = f.createElement(m, y);
    if ("createRoot" in o) {
      const x = o.createRoot(S);
      return x.render(U), {
        container: S,
        root: x,
        ReactComponent: m
      };
    }
    if ("render" in o)
      return o.render(U, S), {
        container: S,
        ReactComponent: m
      };
    throw new Error("Invalid ReactDOM instance provided.");
  }
  function p({ container: S, root: m, ReactComponent: y }, U) {
    const x = f.createElement(y, U);
    if (m) {
      m.render(x);
      return;
    }
    if ("render" in o) {
      o.render(x, S);
      return;
    }
  }
  function _({ container: S, root: m }) {
    if (m) {
      m.unmount();
      return;
    }
    if ("unmountComponentAtNode" in o) {
      o.unmountComponentAtNode(S);
      return;
    }
  }
  return Uy(i, r, { mount: d, unmount: _, update: p });
}
const xy = "_container_3e8r5_1", Hy = "_counter_3e8r5_10", jy = "_button_3e8r5_17", By = "_count_3e8r5_10", qy = "_label_3e8r5_40", Pa = {
  container: xy,
  counter: Hy,
  button: jy,
  count: By,
  label: qy
}, Yy = "._container_3e8r5_1{display:block;padding:20px;border:2px solid #61dafb;border-radius:8px;margin:10px 0;background:#f0f9ff}._counter_3e8r5_10{display:flex;align-items:center;gap:15px;font-size:18px}._button_3e8r5_17{padding:8px 16px;font-size:16px;border:1px solid #61dafb;background:#61dafb;color:#000;border-radius:4px;cursor:pointer;transition:background .2s}._button_3e8r5_17:hover{background:#4fa8c5}._count_3e8r5_10{font-weight:700;min-width:40px;text-align:center;font-size:24px;color:#333}._label_3e8r5_40{color:#666;font-size:14px}";
function Ly({ count: i = 0 }) {
  const [f, o] = O.useState(i);
  return O.useEffect(() => {
    o(i);
  }, [i]), O.useEffect(() => {
    const r = "react-counter-styles";
    if (!document.getElementById(r)) {
      const d = document.createElement("style");
      d.id = r, d.textContent = Yy, document.head.appendChild(d);
    }
  }, []), /* @__PURE__ */ it.jsx("div", { className: Pa.container, children: /* @__PURE__ */ it.jsxs("div", { className: Pa.counter, children: [
    /* @__PURE__ */ it.jsx("div", { className: Pa.label, children: "React Counter:" }),
    /* @__PURE__ */ it.jsx("button", { type: "button", className: Pa.button, onClick: () => o(f - 1), children: "-" }),
    /* @__PURE__ */ it.jsx("span", { className: Pa.count, children: f }),
    /* @__PURE__ */ it.jsx("button", { type: "button", className: Pa.button, onClick: () => o(f + 1), children: "+" })
  ] }) });
}
const Gy = ji(Ly, W, Hi);
customElements.get("react-counter") || customElements.define("react-counter", Gy);
var Xy = mv(), Qy = Object.defineProperty, wy = (i, f, o) => f in i ? Qy(i, f, { enumerable: !0, configurable: !0, writable: !0, value: o }) : i[f] = o, gr = (i, f, o) => (wy(i, typeof f != "symbol" ? f + "" : f, o), o);
let Zy = class {
  constructor() {
    gr(this, "current", this.detect()), gr(this, "handoffState", "pending"), gr(this, "currentId", 0);
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
}, Ze = new Zy();
function au(i) {
  var f;
  return Ze.isServer ? null : i == null ? document : (f = i?.ownerDocument) != null ? f : document;
}
function zr(i) {
  var f, o;
  return Ze.isServer ? null : i == null ? document : (o = (f = i?.getRootNode) == null ? void 0 : f.call(i)) != null ? o : document;
}
function yv(i) {
  var f, o;
  return (o = (f = zr(i)) == null ? void 0 : f.activeElement) != null ? o : null;
}
function Vy(i) {
  return yv(i) === i;
}
function Bi(i) {
  typeof queueMicrotask == "function" ? queueMicrotask(i) : Promise.resolve().then(i).catch((f) => setTimeout(() => {
    throw f;
  }));
}
function vl() {
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
    return Bi(() => {
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
    let r = vl();
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
function qi() {
  let [i] = O.useState(vl);
  return O.useEffect(() => () => i.dispose(), [i]), i;
}
let oe = (i, f) => {
  Ze.isServer ? O.useEffect(i, f) : O.useLayoutEffect(i, f);
};
function va(i) {
  let f = O.useRef(i);
  return oe(() => {
    f.current = i;
  }, [i]), f;
}
let At = function(i) {
  let f = va(i);
  return W.useCallback((...o) => f.current(...o), [f]);
};
function nu(i) {
  return O.useMemo(() => i, Object.values(i));
}
let Ky = O.createContext(void 0);
function Jy() {
  return O.useContext(Ky);
}
function Ar(...i) {
  return Array.from(new Set(i.flatMap((f) => typeof f == "string" ? f.split(" ") : []))).filter(Boolean).join(" ");
}
function ml(i, f, ...o) {
  if (i in f) {
    let d = f[i];
    return typeof d == "function" ? d(...o) : d;
  }
  let r = new Error(`Tried to handle "${i}" but there is no handler defined. Only defined handlers are: ${Object.keys(f).map((d) => `"${d}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(r, ml), r;
}
var Ni = ((i) => (i[i.None = 0] = "None", i[i.RenderStrategy = 1] = "RenderStrategy", i[i.Static = 2] = "Static", i))(Ni || {}), Xl = ((i) => (i[i.Unmount = 0] = "Unmount", i[i.Hidden = 1] = "Hidden", i))(Xl || {});
function He() {
  let i = ky();
  return O.useCallback((f) => $y({ mergeRefs: i, ...f }), [i]);
}
function $y({ ourProps: i, theirProps: f, slot: o, defaultTag: r, features: d, visible: p = !0, name: _, mergeRefs: S }) {
  S = S ?? Fy;
  let m = gv(f, i);
  if (p) return Oi(m, o, r, _, S);
  let y = d ?? 0;
  if (y & 2) {
    let { static: U = !1, ...x } = m;
    if (U) return Oi(x, o, r, _, S);
  }
  if (y & 1) {
    let { unmount: U = !0, ...x } = m;
    return ml(U ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return Oi({ ...x, hidden: !0, style: { display: "none" } }, o, r, _, S);
    } });
  }
  return Oi(m, o, r, _, S);
}
function Oi(i, f = {}, o, r, d) {
  let { as: p = o, children: _, refName: S = "ref", ...m } = pr(i, ["unmount", "static"]), y = i.ref !== void 0 ? { [S]: i.ref } : {}, U = typeof _ == "function" ? _(f) : _;
  "className" in m && m.className && typeof m.className == "function" && (m.className = m.className(f)), m["aria-labelledby"] && m["aria-labelledby"] === m.id && (m["aria-labelledby"] = void 0);
  let x = {};
  if (f) {
    let B = !1, q = [];
    for (let [j, Q] of Object.entries(f)) typeof Q == "boolean" && (B = !0), Q === !0 && q.push(j.replace(/([A-Z])/g, (Z) => `-${Z.toLowerCase()}`));
    if (B) {
      x["data-headlessui-state"] = q.join(" ");
      for (let j of q) x[`data-${j}`] = "";
    }
  }
  if (tu(p) && (Object.keys(oa(m)).length > 0 || Object.keys(oa(x)).length > 0)) if (!O.isValidElement(U) || Array.isArray(U) && U.length > 1 || Iy(U)) {
    if (Object.keys(oa(m)).length > 0) throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(oa(m)).concat(Object.keys(oa(x))).map((B) => `  - ${B}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((B) => `  - ${B}`).join(`
`)].join(`
`));
  } else {
    let B = U.props, q = B?.className, j = typeof q == "function" ? (...L) => Ar(q(...L), m.className) : Ar(q, m.className), Q = j ? { className: j } : {}, Z = gv(U.props, oa(pr(m, ["ref"])));
    for (let L in x) L in Z && delete x[L];
    return O.cloneElement(U, Object.assign({}, Z, x, y, { ref: d(Wy(U), y.ref) }, Q));
  }
  return O.createElement(p, Object.assign({}, pr(m, ["ref"]), !tu(p) && y, !tu(p) && x), U);
}
function ky() {
  let i = O.useRef([]), f = O.useCallback((o) => {
    for (let r of i.current) r != null && (typeof r == "function" ? r(o) : r.current = o);
  }, []);
  return (...o) => {
    if (!o.every((r) => r == null)) return i.current = o, f;
  };
}
function Fy(...i) {
  return i.every((f) => f == null) ? void 0 : (f) => {
    for (let o of i) o != null && (typeof o == "function" ? o(f) : o.current = f);
  };
}
function gv(...i) {
  if (i.length === 0) return {};
  if (i.length === 1) return i[0];
  let f = {}, o = {};
  for (let r of i) for (let d in r) d.startsWith("on") && typeof r[d] == "function" ? (o[d] != null || (o[d] = []), o[d].push(r[d])) : f[d] = r[d];
  if (f.disabled || f["aria-disabled"]) for (let r in o) /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(r) && (o[r] = [(d) => {
    var p;
    return (p = d?.preventDefault) == null ? void 0 : p.call(d);
  }]);
  for (let r in o) Object.assign(f, { [r](d, ...p) {
    let _ = o[r];
    for (let S of _) {
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
function oa(i) {
  let f = Object.assign({}, i);
  for (let o in f) f[o] === void 0 && delete f[o];
  return f;
}
function pr(i, f = []) {
  let o = Object.assign({}, i);
  for (let r of f) r in o && delete o[r];
  return o;
}
function Wy(i) {
  return W.version.split(".")[0] >= "19" ? i.props.ref : i.ref;
}
function tu(i) {
  return i === O.Fragment || i === /* @__PURE__ */ Symbol.for("react.fragment");
}
function Iy(i) {
  return tu(i.type);
}
let Py = "span";
var Ri = ((i) => (i[i.None = 1] = "None", i[i.Focusable = 2] = "Focusable", i[i.Hidden = 4] = "Hidden", i))(Ri || {});
function t1(i, f) {
  var o;
  let { features: r = 1, ...d } = i, p = { ref: f, "aria-hidden": (r & 2) === 2 ? !0 : (o = d["aria-hidden"]) != null ? o : void 0, hidden: (r & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(r & 4) === 4 && (r & 2) !== 2 && { display: "none" } } };
  return He()({ ourProps: p, theirProps: d, slot: {}, defaultTag: Py, name: "Hidden" });
}
let Or = se(t1);
function e1(i) {
  return typeof i != "object" || i === null ? !1 : "nodeType" in i;
}
function wl(i) {
  return e1(i) && "tagName" in i;
}
function ma(i) {
  return wl(i) && "accessKey" in i;
}
function Ql(i) {
  return wl(i) && "tabIndex" in i;
}
function l1(i) {
  return wl(i) && "style" in i;
}
function a1(i) {
  return ma(i) && i.nodeName === "IFRAME";
}
function n1(i) {
  return ma(i) && i.nodeName === "INPUT";
}
let pv = /* @__PURE__ */ Symbol();
function u1(i, f = !0) {
  return Object.assign(i, { [pv]: f });
}
function Ve(...i) {
  let f = O.useRef(i);
  O.useEffect(() => {
    f.current = i;
  }, [i]);
  let o = At((r) => {
    for (let d of f.current) d != null && (typeof d == "function" ? d(r) : d.current = r);
  });
  return i.every((r) => r == null || r?.[pv]) ? void 0 : o;
}
let Rr = O.createContext(null);
Rr.displayName = "DescriptionContext";
function bv() {
  let i = O.useContext(Rr);
  if (i === null) {
    let f = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(f, bv), f;
  }
  return i;
}
function i1() {
  let [i, f] = O.useState([]);
  return [i.length > 0 ? i.join(" ") : void 0, O.useMemo(() => function(o) {
    let r = At((p) => (f((_) => [..._, p]), () => f((_) => {
      let S = _.slice(), m = S.indexOf(p);
      return m !== -1 && S.splice(m, 1), S;
    }))), d = O.useMemo(() => ({ register: r, slot: o.slot, name: o.name, props: o.props, value: o.value }), [r, o.slot, o.name, o.props, o.value]);
    return W.createElement(Rr.Provider, { value: d }, o.children);
  }, [f])];
}
let c1 = "p";
function f1(i, f) {
  let o = O.useId(), r = Jy(), { id: d = `headlessui-description-${o}`, ...p } = i, _ = bv(), S = Ve(f);
  oe(() => _.register(d), [d, _.register]);
  let m = nu({ ..._.slot, disabled: r || !1 }), y = { ref: S, ..._.props, id: d };
  return He()({ ourProps: y, theirProps: p, slot: m, defaultTag: c1, name: _.name || "Description" });
}
let r1 = se(f1), o1 = Object.assign(r1, {});
var Sv = ((i) => (i.Space = " ", i.Enter = "Enter", i.Escape = "Escape", i.Backspace = "Backspace", i.Delete = "Delete", i.ArrowLeft = "ArrowLeft", i.ArrowUp = "ArrowUp", i.ArrowRight = "ArrowRight", i.ArrowDown = "ArrowDown", i.Home = "Home", i.End = "End", i.PageUp = "PageUp", i.PageDown = "PageDown", i.Tab = "Tab", i))(Sv || {});
let s1 = O.createContext(() => {
});
function d1({ value: i, children: f }) {
  return W.createElement(s1.Provider, { value: i }, f);
}
let _v = class extends Map {
  constructor(f) {
    super(), this.factory = f;
  }
  get(f) {
    let o = super.get(f);
    return o === void 0 && (o = this.factory(f), this.set(f, o)), o;
  }
};
var m1 = Object.defineProperty, v1 = (i, f, o) => f in i ? m1(i, f, { enumerable: !0, configurable: !0, writable: !0, value: o }) : i[f] = o, h1 = (i, f, o) => (v1(i, f + "", o), o), Ev = (i, f, o) => {
  if (!f.has(i)) throw TypeError("Cannot " + o);
}, xe = (i, f, o) => (Ev(i, f, "read from private field"), o ? o.call(i) : f.get(i)), br = (i, f, o) => {
  if (f.has(i)) throw TypeError("Cannot add the same private member more than once");
  f instanceof WeakSet ? f.add(i) : f.set(i, o);
}, Fm = (i, f, o, r) => (Ev(i, f, "write to private field"), f.set(i, o), o), we, Wn, In;
let y1 = class {
  constructor(f) {
    br(this, we, {}), br(this, Wn, new _v(() => /* @__PURE__ */ new Set())), br(this, In, /* @__PURE__ */ new Set()), h1(this, "disposables", vl()), Fm(this, we, f), Ze.isServer && this.disposables.microTask(() => {
      this.dispose();
    });
  }
  dispose() {
    this.disposables.dispose();
  }
  get state() {
    return xe(this, we);
  }
  subscribe(f, o) {
    if (Ze.isServer) return () => {
    };
    let r = { selector: f, callback: o, current: f(xe(this, we)) };
    return xe(this, In).add(r), this.disposables.add(() => {
      xe(this, In).delete(r);
    });
  }
  on(f, o) {
    return Ze.isServer ? () => {
    } : (xe(this, Wn).get(f).add(o), this.disposables.add(() => {
      xe(this, Wn).get(f).delete(o);
    }));
  }
  send(f) {
    let o = this.reduce(xe(this, we), f);
    if (o !== xe(this, we)) {
      Fm(this, we, o);
      for (let r of xe(this, In)) {
        let d = r.selector(xe(this, we));
        Tv(r.current, d) || (r.current = d, r.callback(d));
      }
      for (let r of xe(this, Wn).get(f.type)) r(xe(this, we), f);
    }
  }
};
we = /* @__PURE__ */ new WeakMap(), Wn = /* @__PURE__ */ new WeakMap(), In = /* @__PURE__ */ new WeakMap();
function Tv(i, f) {
  return Object.is(i, f) ? !0 : typeof i != "object" || i === null || typeof f != "object" || f === null ? !1 : Array.isArray(i) && Array.isArray(f) ? i.length !== f.length ? !1 : Sr(i[Symbol.iterator](), f[Symbol.iterator]()) : i instanceof Map && f instanceof Map || i instanceof Set && f instanceof Set ? i.size !== f.size ? !1 : Sr(i.entries(), f.entries()) : Wm(i) && Wm(f) ? Sr(Object.entries(i)[Symbol.iterator](), Object.entries(f)[Symbol.iterator]()) : !1;
}
function Sr(i, f) {
  do {
    let o = i.next(), r = f.next();
    if (o.done && r.done) return !0;
    if (o.done || r.done || !Object.is(o.value, r.value)) return !1;
  } while (!0);
}
function Wm(i) {
  if (Object.prototype.toString.call(i) !== "[object Object]") return !1;
  let f = Object.getPrototypeOf(i);
  return f === null || Object.getPrototypeOf(f) === null;
}
var g1 = Object.defineProperty, p1 = (i, f, o) => f in i ? g1(i, f, { enumerable: !0, configurable: !0, writable: !0, value: o }) : i[f] = o, Im = (i, f, o) => (p1(i, typeof f != "symbol" ? f + "" : f, o), o), b1 = ((i) => (i[i.Push = 0] = "Push", i[i.Pop = 1] = "Pop", i))(b1 || {});
let S1 = { 0(i, f) {
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
} }, _1 = class zv extends y1 {
  constructor() {
    super(...arguments), Im(this, "actions", { push: (f) => this.send({ type: 0, id: f }), pop: (f) => this.send({ type: 1, id: f }) }), Im(this, "selectors", { isTop: (f, o) => f.stack[f.stack.length - 1] === o, inStack: (f, o) => f.stack.includes(o) });
  }
  static new() {
    return new zv({ stack: [] });
  }
  reduce(f, o) {
    return ml(o.type, S1, f, o);
  }
};
const Av = new _v(() => _1.new());
var _r = { exports: {} }, Er = {};
var Pm;
function E1() {
  if (Pm) return Er;
  Pm = 1;
  var i = xi();
  function f(m, y) {
    return m === y && (m !== 0 || 1 / m === 1 / y) || m !== m && y !== y;
  }
  var o = typeof Object.is == "function" ? Object.is : f, r = i.useSyncExternalStore, d = i.useRef, p = i.useEffect, _ = i.useMemo, S = i.useDebugValue;
  return Er.useSyncExternalStoreWithSelector = function(m, y, U, x, B) {
    var q = d(null);
    if (q.current === null) {
      var j = { hasValue: !1, value: null };
      q.current = j;
    } else j = q.current;
    q = _(
      function() {
        function Z(ht) {
          if (!L) {
            if (L = !0, k = ht, ht = x(ht), B !== void 0 && j.hasValue) {
              var yt = j.value;
              if (B(yt, ht))
                return V = yt;
            }
            return V = ht;
          }
          if (yt = V, o(k, ht)) return yt;
          var $ = x(ht);
          return B !== void 0 && B(yt, $) ? (k = ht, yt) : (k = ht, V = $);
        }
        var L = !1, k, V, lt = U === void 0 ? null : U;
        return [
          function() {
            return Z(y());
          },
          lt === null ? void 0 : function() {
            return Z(lt());
          }
        ];
      },
      [y, U, x, B]
    );
    var Q = r(m, q[0], q[1]);
    return p(
      function() {
        j.hasValue = !0, j.value = Q;
      },
      [Q]
    ), S(Q), Q;
  }, Er;
}
var tv;
function T1() {
  return tv || (tv = 1, _r.exports = E1()), _r.exports;
}
var z1 = T1();
function Ov(i, f, o = Tv) {
  return z1.useSyncExternalStoreWithSelector(At((r) => i.subscribe(A1, r)), At(() => i.state), At(() => i.state), At(f), o);
}
function A1(i) {
  return i;
}
function uu(i, f) {
  let o = O.useId(), r = Av.get(f), [d, p] = Ov(r, O.useCallback((_) => [r.selectors.isTop(_, o), r.selectors.inStack(_, o)], [r, o]));
  return oe(() => {
    if (i) return r.actions.push(o), () => r.actions.pop(o);
  }, [r, i, o]), i ? p ? d : !0 : !1;
}
let Mr = /* @__PURE__ */ new Map(), eu = /* @__PURE__ */ new Map();
function ev(i) {
  var f;
  let o = (f = eu.get(i)) != null ? f : 0;
  return eu.set(i, o + 1), o !== 0 ? () => lv(i) : (Mr.set(i, { "aria-hidden": i.getAttribute("aria-hidden"), inert: i.inert }), i.setAttribute("aria-hidden", "true"), i.inert = !0, () => lv(i));
}
function lv(i) {
  var f;
  let o = (f = eu.get(i)) != null ? f : 1;
  if (o === 1 ? eu.delete(i) : eu.set(i, o - 1), o !== 1) return;
  let r = Mr.get(i);
  r && (r["aria-hidden"] === null ? i.removeAttribute("aria-hidden") : i.setAttribute("aria-hidden", r["aria-hidden"]), i.inert = r.inert, Mr.delete(i));
}
function O1(i, { allowed: f, disallowed: o } = {}) {
  let r = uu(i, "inert-others");
  oe(() => {
    var d, p;
    if (!r) return;
    let _ = vl();
    for (let m of (d = o?.()) != null ? d : []) m && _.add(ev(m));
    let S = (p = f?.()) != null ? p : [];
    for (let m of S) {
      if (!m) continue;
      let y = au(m);
      if (!y) continue;
      let U = m.parentElement;
      for (; U && U !== y.body; ) {
        for (let x of U.children) S.some((B) => x.contains(B)) || _.add(ev(x));
        U = U.parentElement;
      }
    }
    return _.dispose;
  }, [r, f, o]);
}
function M1(i, f, o) {
  let r = va((d) => {
    let p = d.getBoundingClientRect();
    p.x === 0 && p.y === 0 && p.width === 0 && p.height === 0 && o();
  });
  O.useEffect(() => {
    if (!i) return;
    let d = f === null ? null : ma(f) ? f : f.current;
    if (!d) return;
    let p = vl();
    if (typeof ResizeObserver < "u") {
      let _ = new ResizeObserver(() => r.current(d));
      _.observe(d), p.add(() => _.disconnect());
    }
    if (typeof IntersectionObserver < "u") {
      let _ = new IntersectionObserver(() => r.current(d));
      _.observe(d), p.add(() => _.disconnect());
    }
    return () => p.dispose();
  }, [f, r, i]);
}
let Ui = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "details>summary", "textarea:not([disabled])"].map((i) => `${i}:not([tabindex='-1'])`).join(","), D1 = ["[data-autofocus]"].map((i) => `${i}:not([tabindex='-1'])`).join(",");
var sl = ((i) => (i[i.First = 1] = "First", i[i.Previous = 2] = "Previous", i[i.Next = 4] = "Next", i[i.Last = 8] = "Last", i[i.WrapAround = 16] = "WrapAround", i[i.NoScroll = 32] = "NoScroll", i[i.AutoFocus = 64] = "AutoFocus", i))(sl || {}), Dr = ((i) => (i[i.Error = 0] = "Error", i[i.Overflow = 1] = "Overflow", i[i.Success = 2] = "Success", i[i.Underflow = 3] = "Underflow", i))(Dr || {}), C1 = ((i) => (i[i.Previous = -1] = "Previous", i[i.Next = 1] = "Next", i))(C1 || {});
function N1(i = document.body) {
  return i == null ? [] : Array.from(i.querySelectorAll(Ui)).sort((f, o) => Math.sign((f.tabIndex || Number.MAX_SAFE_INTEGER) - (o.tabIndex || Number.MAX_SAFE_INTEGER)));
}
function R1(i = document.body) {
  return i == null ? [] : Array.from(i.querySelectorAll(D1)).sort((f, o) => Math.sign((f.tabIndex || Number.MAX_SAFE_INTEGER) - (o.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Mv = ((i) => (i[i.Strict = 0] = "Strict", i[i.Loose = 1] = "Loose", i))(Mv || {});
function U1(i, f = 0) {
  var o;
  return i === ((o = au(i)) == null ? void 0 : o.body) ? !1 : ml(f, { 0() {
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
var x1 = ((i) => (i[i.Keyboard = 0] = "Keyboard", i[i.Mouse = 1] = "Mouse", i))(x1 || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (i) => {
  i.metaKey || i.altKey || i.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (i) => {
  i.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : i.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function dl(i) {
  i?.focus({ preventScroll: !0 });
}
let H1 = ["textarea", "input"].join(",");
function j1(i) {
  var f, o;
  return (o = (f = i?.matches) == null ? void 0 : f.call(i, H1)) != null ? o : !1;
}
function B1(i, f = (o) => o) {
  return i.slice().sort((o, r) => {
    let d = f(o), p = f(r);
    if (d === null || p === null) return 0;
    let _ = d.compareDocumentPosition(p);
    return _ & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : _ & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function lu(i, f, { sorted: o = !0, relativeTo: r = null, skipElements: d = [] } = {}) {
  let p = Array.isArray(i) ? i.length > 0 ? zr(i[0]) : document : zr(i), _ = Array.isArray(i) ? o ? B1(i) : i : f & 64 ? R1(i) : N1(i);
  d.length > 0 && _.length > 1 && (_ = _.filter((q) => !d.some((j) => j != null && "current" in j ? j?.current === q : j === q))), r = r ?? p?.activeElement;
  let S = (() => {
    if (f & 5) return 1;
    if (f & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), m = (() => {
    if (f & 1) return 0;
    if (f & 2) return Math.max(0, _.indexOf(r)) - 1;
    if (f & 4) return Math.max(0, _.indexOf(r)) + 1;
    if (f & 8) return _.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), y = f & 32 ? { preventScroll: !0 } : {}, U = 0, x = _.length, B;
  do {
    if (U >= x || U + x <= 0) return 0;
    let q = m + U;
    if (f & 16) q = (q + x) % x;
    else {
      if (q < 0) return 3;
      if (q >= x) return 1;
    }
    B = _[q], B?.focus(y), U += S;
  } while (B !== yv(B));
  return f & 6 && j1(B) && B.select(), 2;
}
function Dv() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function q1() {
  return /Android/gi.test(window.navigator.userAgent);
}
function av() {
  return Dv() || q1();
}
function Mi(i, f, o, r) {
  let d = va(o);
  O.useEffect(() => {
    if (!i) return;
    function p(_) {
      d.current(_);
    }
    return document.addEventListener(f, p, r), () => document.removeEventListener(f, p, r);
  }, [i, f, r]);
}
function Cv(i, f, o, r) {
  let d = va(o);
  O.useEffect(() => {
    if (!i) return;
    function p(_) {
      d.current(_);
    }
    return window.addEventListener(f, p, r), () => window.removeEventListener(f, p, r);
  }, [i, f, r]);
}
const nv = 30;
function Y1(i, f, o) {
  let r = va(o), d = O.useCallback(function(S, m) {
    if (S.defaultPrevented) return;
    let y = m(S);
    if (y === null || !y.getRootNode().contains(y) || !y.isConnected) return;
    let U = (function x(B) {
      return typeof B == "function" ? x(B()) : Array.isArray(B) || B instanceof Set ? B : [B];
    })(f);
    for (let x of U) if (x !== null && (x.contains(y) || S.composed && S.composedPath().includes(x))) return;
    return !U1(y, Mv.Loose) && y.tabIndex !== -1 && S.preventDefault(), r.current(S, y);
  }, [r, f]), p = O.useRef(null);
  Mi(i, "pointerdown", (S) => {
    var m, y;
    av() || (p.current = ((y = (m = S.composedPath) == null ? void 0 : m.call(S)) == null ? void 0 : y[0]) || S.target);
  }, !0), Mi(i, "pointerup", (S) => {
    if (av() || !p.current) return;
    let m = p.current;
    return p.current = null, d(S, () => m);
  }, !0);
  let _ = O.useRef({ x: 0, y: 0 });
  Mi(i, "touchstart", (S) => {
    _.current.x = S.touches[0].clientX, _.current.y = S.touches[0].clientY;
  }, !0), Mi(i, "touchend", (S) => {
    let m = { x: S.changedTouches[0].clientX, y: S.changedTouches[0].clientY };
    if (!(Math.abs(m.x - _.current.x) >= nv || Math.abs(m.y - _.current.y) >= nv)) return d(S, () => Ql(S.target) ? S.target : null);
  }, !0), Cv(i, "blur", (S) => d(S, () => a1(window.document.activeElement) ? window.document.activeElement : null), !0);
}
function Ur(...i) {
  return O.useMemo(() => au(...i), [...i]);
}
function Nv(i, f, o, r) {
  let d = va(o);
  O.useEffect(() => {
    i = i ?? window;
    function p(_) {
      d.current(_);
    }
    return i.addEventListener(f, p, r), () => i.removeEventListener(f, p, r);
  }, [i, f, r]);
}
function L1(i) {
  return O.useSyncExternalStore(i.subscribe, i.getSnapshot, i.getSnapshot);
}
function G1(i, f) {
  let o = i(), r = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return o;
  }, subscribe(d) {
    return r.add(d), () => r.delete(d);
  }, dispatch(d, ...p) {
    let _ = f[d].call(o, ...p);
    _ && (o = _, r.forEach((S) => S()));
  } };
}
function X1() {
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
function Q1() {
  return Dv() ? { before({ doc: i, d: f, meta: o }) {
    function r(d) {
      for (let p of o().containers) for (let _ of p()) if (_.contains(d)) return !0;
      return !1;
    }
    f.microTask(() => {
      var d;
      if (window.getComputedStyle(i.documentElement).scrollBehavior !== "auto") {
        let S = vl();
        S.style(i.documentElement, "scrollBehavior", "auto"), f.add(() => f.microTask(() => S.dispose()));
      }
      let p = (d = window.scrollY) != null ? d : window.pageYOffset, _ = null;
      f.addEventListener(i, "click", (S) => {
        if (Ql(S.target)) try {
          let m = S.target.closest("a");
          if (!m) return;
          let { hash: y } = new URL(m.href), U = i.querySelector(y);
          Ql(U) && !r(U) && (_ = U);
        } catch {
        }
      }, !0), f.group((S) => {
        f.addEventListener(i, "touchstart", (m) => {
          if (S.dispose(), Ql(m.target) && l1(m.target)) if (r(m.target)) {
            let y = m.target;
            for (; y.parentElement && r(y.parentElement); ) y = y.parentElement;
            S.style(y, "overscrollBehavior", "contain");
          } else S.style(m.target, "touchAction", "none");
        });
      }), f.addEventListener(i, "touchmove", (S) => {
        if (Ql(S.target)) {
          if (n1(S.target)) return;
          if (r(S.target)) {
            let m = S.target;
            for (; m.parentElement && m.dataset.headlessuiPortal !== "" && !(m.scrollHeight > m.clientHeight || m.scrollWidth > m.clientWidth); ) m = m.parentElement;
            m.dataset.headlessuiPortal === "" && S.preventDefault();
          } else S.preventDefault();
        }
      }, { passive: !1 }), f.add(() => {
        var S;
        let m = (S = window.scrollY) != null ? S : window.pageYOffset;
        p !== m && window.scrollTo(0, p), _ && _.isConnected && (_.scrollIntoView({ block: "nearest" }), _ = null);
      });
    });
  } } : {};
}
function w1() {
  return { before({ doc: i, d: f }) {
    f.style(i.documentElement, "overflow", "hidden");
  } };
}
function uv(i) {
  let f = {};
  for (let o of i) Object.assign(f, o(f));
  return f;
}
let da = G1(() => /* @__PURE__ */ new Map(), { PUSH(i, f) {
  var o;
  let r = (o = this.get(i)) != null ? o : { doc: i, count: 0, d: vl(), meta: /* @__PURE__ */ new Set(), computedMeta: {} };
  return r.count++, r.meta.add(f), r.computedMeta = uv(r.meta), this.set(i, r), this;
}, POP(i, f) {
  let o = this.get(i);
  return o && (o.count--, o.meta.delete(f), o.computedMeta = uv(o.meta)), this;
}, SCROLL_PREVENT(i) {
  let f = { doc: i.doc, d: i.d, meta() {
    return i.computedMeta;
  } }, o = [Q1(), X1(), w1()];
  o.forEach(({ before: r }) => r?.(f)), o.forEach(({ after: r }) => r?.(f));
}, SCROLL_ALLOW({ d: i }) {
  i.dispose();
}, TEARDOWN({ doc: i }) {
  this.delete(i);
} });
da.subscribe(() => {
  let i = da.getSnapshot(), f = /* @__PURE__ */ new Map();
  for (let [o] of i) f.set(o, o.documentElement.style.overflow);
  for (let o of i.values()) {
    let r = f.get(o.doc) === "hidden", d = o.count !== 0;
    (d && !r || !d && r) && da.dispatch(o.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", o), o.count === 0 && da.dispatch("TEARDOWN", o);
  }
});
function Z1(i, f, o = () => ({ containers: [] })) {
  let r = L1(da), d = f ? r.get(f) : void 0, p = d ? d.count > 0 : !1;
  return oe(() => {
    if (!(!f || !i)) return da.dispatch("PUSH", f, o), () => da.dispatch("POP", f, o);
  }, [i, f]), p;
}
function V1(i, f, o = () => [document.body]) {
  let r = uu(i, "scroll-lock");
  Z1(r, f, (d) => {
    var p;
    return { containers: [...(p = d.containers) != null ? p : [], o] };
  });
}
function K1(i = 0) {
  let [f, o] = O.useState(i), r = O.useCallback((m) => o(m), []), d = O.useCallback((m) => o((y) => y | m), []), p = O.useCallback((m) => (f & m) === m, [f]), _ = O.useCallback((m) => o((y) => y & ~m), []), S = O.useCallback((m) => o((y) => y ^ m), []);
  return { flags: f, setFlag: r, addFlag: d, hasFlag: p, removeFlag: _, toggleFlag: S };
}
var iv, cv;
typeof process < "u" && typeof globalThis < "u" && typeof Element < "u" && ((iv = process == null ? void 0 : process.env) == null ? void 0 : iv.NODE_ENV) === "test" && typeof ((cv = Element?.prototype) == null ? void 0 : cv.getAnimations) > "u" && (Element.prototype.getAnimations = function() {
  return console.warn(["Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.", "Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.", "", "Example usage:", "```js", "import { mockAnimationsApi } from 'jsdom-testing-mocks'", "mockAnimationsApi()", "```"].join(`
`)), [];
});
var J1 = ((i) => (i[i.None = 0] = "None", i[i.Closed = 1] = "Closed", i[i.Enter = 2] = "Enter", i[i.Leave = 4] = "Leave", i))(J1 || {});
function $1(i) {
  let f = {};
  for (let o in i) i[o] === !0 && (f[`data-${o}`] = "");
  return f;
}
function k1(i, f, o, r) {
  let [d, p] = O.useState(o), { hasFlag: _, addFlag: S, removeFlag: m } = K1(i && d ? 3 : 0), y = O.useRef(!1), U = O.useRef(!1), x = qi();
  return oe(() => {
    var B;
    if (i) {
      if (o && p(!0), !f) {
        o && S(3);
        return;
      }
      return (B = r?.start) == null || B.call(r, o), F1(f, { inFlight: y, prepare() {
        U.current ? U.current = !1 : U.current = y.current, y.current = !0, !U.current && (o ? (S(3), m(4)) : (S(4), m(2)));
      }, run() {
        U.current ? o ? (m(3), S(4)) : (m(4), S(3)) : o ? m(1) : S(1);
      }, done() {
        var q;
        U.current && P1(f) || (y.current = !1, m(7), o || p(!1), (q = r?.end) == null || q.call(r, o));
      } });
    }
  }, [i, o, f, x]), i ? [d, { closed: _(1), enter: _(2), leave: _(4), transition: _(2) || _(4) }] : [o, { closed: void 0, enter: void 0, leave: void 0, transition: void 0 }];
}
function F1(i, { prepare: f, run: o, done: r, inFlight: d }) {
  let p = vl();
  return I1(i, { prepare: f, inFlight: d }), p.nextFrame(() => {
    o(), p.requestAnimationFrame(() => {
      p.add(W1(i, r));
    });
  }), p.dispose;
}
function W1(i, f) {
  var o, r;
  let d = vl();
  if (!i) return d.dispose;
  let p = !1;
  d.add(() => {
    p = !0;
  });
  let _ = (r = (o = i.getAnimations) == null ? void 0 : o.call(i).filter((S) => S instanceof CSSTransition)) != null ? r : [];
  return _.length === 0 ? (f(), d.dispose) : (Promise.allSettled(_.map((S) => S.finished)).then(() => {
    p || f();
  }), d.dispose);
}
function I1(i, { inFlight: f, prepare: o }) {
  if (f != null && f.current) {
    o();
    return;
  }
  let r = i.style.transition;
  i.style.transition = "none", o(), i.offsetHeight, i.style.transition = r;
}
function P1(i) {
  var f, o;
  return ((o = (f = i.getAnimations) == null ? void 0 : f.call(i)) != null ? o : []).some((r) => r instanceof CSSTransition && r.playState !== "finished");
}
function xr(i, f) {
  let o = O.useRef([]), r = At(i);
  O.useEffect(() => {
    let d = [...o.current];
    for (let [p, _] of f.entries()) if (o.current[p] !== _) {
      let S = r(f, d);
      return o.current = f, S;
    }
  }, [r, ...f]);
}
let Yi = O.createContext(null);
Yi.displayName = "OpenClosedContext";
var Ye = ((i) => (i[i.Open = 1] = "Open", i[i.Closed = 2] = "Closed", i[i.Closing = 4] = "Closing", i[i.Opening = 8] = "Opening", i))(Ye || {});
function Li() {
  return O.useContext(Yi);
}
function tg({ value: i, children: f }) {
  return W.createElement(Yi.Provider, { value: i }, f);
}
function eg({ children: i }) {
  return W.createElement(Yi.Provider, { value: null }, i);
}
function lg(i) {
  function f() {
    document.readyState !== "loading" && (i(), document.removeEventListener("DOMContentLoaded", f));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", f), f());
}
let Gl = [];
lg(() => {
  function i(f) {
    if (!Ql(f.target) || f.target === document.body || Gl[0] === f.target) return;
    let o = f.target;
    o = o.closest(Ui), Gl.unshift(o ?? f.target), Gl = Gl.filter((r) => r != null && r.isConnected), Gl.splice(10);
  }
  window.addEventListener("click", i, { capture: !0 }), window.addEventListener("mousedown", i, { capture: !0 }), window.addEventListener("focus", i, { capture: !0 }), document.body.addEventListener("click", i, { capture: !0 }), document.body.addEventListener("mousedown", i, { capture: !0 }), document.body.addEventListener("focus", i, { capture: !0 });
});
function Rv(i) {
  let f = At(i), o = O.useRef(!1);
  O.useEffect(() => (o.current = !1, () => {
    o.current = !0, Bi(() => {
      o.current && f();
    });
  }), [f]);
}
let Uv = O.createContext(!1);
function ag() {
  return O.useContext(Uv);
}
function fv(i) {
  return W.createElement(Uv.Provider, { value: i.force }, i.children);
}
function ng(i) {
  let f = ag(), o = O.useContext(Hv), [r, d] = O.useState(() => {
    var p;
    if (!f && o !== null) return (p = o.current) != null ? p : null;
    if (Ze.isServer) return null;
    let _ = i?.getElementById("headlessui-portal-root");
    if (_) return _;
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
let xv = O.Fragment, ug = se(function(i, f) {
  let { ownerDocument: o = null, ...r } = i, d = O.useRef(null), p = Ve(u1((B) => {
    d.current = B;
  }), f), _ = Ur(d.current), S = o ?? _, m = ng(S), y = O.useContext(Cr), U = qi(), x = He();
  return Rv(() => {
    var B;
    m && m.childNodes.length <= 0 && ((B = m.parentElement) == null || B.removeChild(m));
  }), m ? Xy.createPortal(W.createElement("div", { "data-headlessui-portal": "", ref: (B) => {
    U.dispose(), y && B && U.add(y.register(B));
  } }, x({ ourProps: { ref: p }, theirProps: r, slot: {}, defaultTag: xv, name: "Portal" })), m) : null;
});
function ig(i, f) {
  let o = Ve(f), { enabled: r = !0, ownerDocument: d, ...p } = i, _ = He();
  return r ? W.createElement(ug, { ...p, ownerDocument: d, ref: o }) : _({ ourProps: { ref: o }, theirProps: p, slot: {}, defaultTag: xv, name: "Portal" });
}
let cg = O.Fragment, Hv = O.createContext(null);
function fg(i, f) {
  let { target: o, ...r } = i, d = { ref: Ve(f) }, p = He();
  return W.createElement(Hv.Provider, { value: o }, p({ ourProps: d, theirProps: r, defaultTag: cg, name: "Popover.Group" }));
}
let Cr = O.createContext(null);
function rg() {
  let i = O.useContext(Cr), f = O.useRef([]), o = At((p) => (f.current.push(p), i && i.register(p), () => r(p))), r = At((p) => {
    let _ = f.current.indexOf(p);
    _ !== -1 && f.current.splice(_, 1), i && i.unregister(p);
  }), d = O.useMemo(() => ({ register: o, unregister: r, portals: f }), [o, r, f]);
  return [f, O.useMemo(() => function({ children: p }) {
    return W.createElement(Cr.Provider, { value: d }, p);
  }, [d])];
}
let og = se(ig), jv = se(fg), sg = Object.assign(og, { Group: jv });
function dg(i, f = typeof document < "u" ? document.defaultView : null, o) {
  let r = uu(i, "escape");
  Nv(f, "keydown", (d) => {
    r && (d.defaultPrevented || d.key === Sv.Escape && o(d));
  });
}
function mg() {
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
function vg({ defaultContainers: i = [], portals: f, mainTreeNode: o } = {}) {
  let r = At(() => {
    var d, p;
    let _ = au(o), S = [];
    for (let m of i) m !== null && (wl(m) ? S.push(m) : "current" in m && wl(m.current) && S.push(m.current));
    if (f != null && f.current) for (let m of f.current) S.push(m);
    for (let m of (d = _?.querySelectorAll("html > *, body > *")) != null ? d : []) m !== document.body && m !== document.head && wl(m) && m.id !== "headlessui-portal-root" && (o && (m.contains(o) || m.contains((p = o?.getRootNode()) == null ? void 0 : p.host)) || S.some((y) => m.contains(y)) || S.push(m));
    return S;
  });
  return { resolveContainers: r, contains: At((d) => r().some((p) => p.contains(d))) };
}
let Bv = O.createContext(null);
function rv({ children: i, node: f }) {
  let [o, r] = O.useState(null), d = qv(f ?? o);
  return W.createElement(Bv.Provider, { value: d }, i, d === null && W.createElement(Or, { features: Ri.Hidden, ref: (p) => {
    var _, S;
    if (p) {
      for (let m of (S = (_ = au(p)) == null ? void 0 : _.querySelectorAll("html > *, body > *")) != null ? S : []) if (m !== document.body && m !== document.head && wl(m) && m != null && m.contains(p)) {
        r(m);
        break;
      }
    }
  } }));
}
function qv(i = null) {
  var f;
  return (f = O.useContext(Bv)) != null ? f : i;
}
function hg() {
  let i = typeof document > "u";
  return "useSyncExternalStore" in wm ? ((f) => f.useSyncExternalStore)(wm)(() => () => {
  }, () => !1, () => !i) : !1;
}
function Gi() {
  let i = hg(), [f, o] = O.useState(Ze.isHandoffComplete);
  return f && Ze.isHandoffComplete === !1 && o(!1), O.useEffect(() => {
    f !== !0 && o(!0);
  }, [f]), O.useEffect(() => Ze.handoff(), []), i ? !1 : f;
}
function Hr() {
  let i = O.useRef(!1);
  return oe(() => (i.current = !0, () => {
    i.current = !1;
  }), []), i;
}
var Pn = ((i) => (i[i.Forwards = 0] = "Forwards", i[i.Backwards = 1] = "Backwards", i))(Pn || {});
function yg() {
  let i = O.useRef(0);
  return Cv(!0, "keydown", (f) => {
    f.key === "Tab" && (i.current = f.shiftKey ? 1 : 0);
  }, !0), i;
}
function Yv(i) {
  if (!i) return /* @__PURE__ */ new Set();
  if (typeof i == "function") return new Set(i());
  let f = /* @__PURE__ */ new Set();
  for (let o of i.current) wl(o.current) && f.add(o.current);
  return f;
}
let gg = "div";
var sa = ((i) => (i[i.None = 0] = "None", i[i.InitialFocus = 1] = "InitialFocus", i[i.TabLock = 2] = "TabLock", i[i.FocusLock = 4] = "FocusLock", i[i.RestoreFocus = 8] = "RestoreFocus", i[i.AutoFocus = 16] = "AutoFocus", i))(sa || {});
function pg(i, f) {
  let o = O.useRef(null), r = Ve(o, f), { initialFocus: d, initialFocusFallback: p, containers: _, features: S = 15, ...m } = i;
  Gi() || (S = 0);
  let y = Ur(o.current);
  Eg(S, { ownerDocument: y });
  let U = Tg(S, { ownerDocument: y, container: o, initialFocus: d, initialFocusFallback: p });
  zg(S, { ownerDocument: y, container: o, containers: _, previousActiveElement: U });
  let x = yg(), B = At((k) => {
    if (!ma(o.current)) return;
    let V = o.current;
    ((lt) => lt())(() => {
      ml(x.current, { [Pn.Forwards]: () => {
        lu(V, sl.First, { skipElements: [k.relatedTarget, p] });
      }, [Pn.Backwards]: () => {
        lu(V, sl.Last, { skipElements: [k.relatedTarget, p] });
      } });
    });
  }), q = uu(!!(S & 2), "focus-trap#tab-lock"), j = qi(), Q = O.useRef(!1), Z = { ref: r, onKeyDown(k) {
    k.key == "Tab" && (Q.current = !0, j.requestAnimationFrame(() => {
      Q.current = !1;
    }));
  }, onBlur(k) {
    if (!(S & 4)) return;
    let V = Yv(_);
    ma(o.current) && V.add(o.current);
    let lt = k.relatedTarget;
    Ql(lt) && lt.dataset.headlessuiFocusGuard !== "true" && (Lv(V, lt) || (Q.current ? lu(o.current, ml(x.current, { [Pn.Forwards]: () => sl.Next, [Pn.Backwards]: () => sl.Previous }) | sl.WrapAround, { relativeTo: k.target }) : Ql(k.target) && dl(k.target)));
  } }, L = He();
  return W.createElement(W.Fragment, null, q && W.createElement(Or, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: B, features: Ri.Focusable }), L({ ourProps: Z, theirProps: m, defaultTag: gg, name: "FocusTrap" }), q && W.createElement(Or, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: B, features: Ri.Focusable }));
}
let bg = se(pg), Sg = Object.assign(bg, { features: sa });
function _g(i = !0) {
  let f = O.useRef(Gl.slice());
  return xr(([o], [r]) => {
    r === !0 && o === !1 && Bi(() => {
      f.current.splice(0);
    }), r === !1 && o === !0 && (f.current = Gl.slice());
  }, [i, Gl, f]), At(() => {
    var o;
    return (o = f.current.find((r) => r != null && r.isConnected)) != null ? o : null;
  });
}
function Eg(i, { ownerDocument: f }) {
  let o = !!(i & 8), r = _g(o);
  xr(() => {
    o || Vy(f?.body) && dl(r());
  }, [o]), Rv(() => {
    o && dl(r());
  });
}
function Tg(i, { ownerDocument: f, container: o, initialFocus: r, initialFocusFallback: d }) {
  let p = O.useRef(null), _ = uu(!!(i & 1), "focus-trap#initial-focus"), S = Hr();
  return xr(() => {
    if (i === 0) return;
    if (!_) {
      d != null && d.current && dl(d.current);
      return;
    }
    let m = o.current;
    m && Bi(() => {
      if (!S.current) return;
      let y = f?.activeElement;
      if (r != null && r.current) {
        if (r?.current === y) {
          p.current = y;
          return;
        }
      } else if (m.contains(y)) {
        p.current = y;
        return;
      }
      if (r != null && r.current) dl(r.current);
      else {
        if (i & 16) {
          if (lu(m, sl.First | sl.AutoFocus) !== Dr.Error) return;
        } else if (lu(m, sl.First) !== Dr.Error) return;
        if (d != null && d.current && (dl(d.current), f?.activeElement === d.current)) return;
        console.warn("There are no focusable elements inside the <FocusTrap />");
      }
      p.current = f?.activeElement;
    });
  }, [d, _, i]), p;
}
function zg(i, { ownerDocument: f, container: o, containers: r, previousActiveElement: d }) {
  let p = Hr(), _ = !!(i & 4);
  Nv(f?.defaultView, "focus", (S) => {
    if (!_ || !p.current) return;
    let m = Yv(r);
    ma(o.current) && m.add(o.current);
    let y = d.current;
    if (!y) return;
    let U = S.target;
    ma(U) ? Lv(m, U) ? (d.current = U, dl(U)) : (S.preventDefault(), S.stopPropagation(), dl(y)) : dl(d.current);
  }, !0);
}
function Lv(i, f) {
  for (let o of i) if (o.contains(f)) return !0;
  return !1;
}
function Gv(i) {
  var f;
  return !!(i.enter || i.enterFrom || i.enterTo || i.leave || i.leaveFrom || i.leaveTo) || !tu((f = i.as) != null ? f : Qv) || W.Children.count(i.children) === 1;
}
let Xi = O.createContext(null);
Xi.displayName = "TransitionContext";
var Ag = ((i) => (i.Visible = "visible", i.Hidden = "hidden", i))(Ag || {});
function Og() {
  let i = O.useContext(Xi);
  if (i === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return i;
}
function Mg() {
  let i = O.useContext(Qi);
  if (i === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return i;
}
let Qi = O.createContext(null);
Qi.displayName = "NestingContext";
function wi(i) {
  return "children" in i ? wi(i.children) : i.current.filter(({ el: f }) => f.current !== null).filter(({ state: f }) => f === "visible").length > 0;
}
function Xv(i, f) {
  let o = va(i), r = O.useRef([]), d = Hr(), p = qi(), _ = At((q, j = Xl.Hidden) => {
    let Q = r.current.findIndex(({ el: Z }) => Z === q);
    Q !== -1 && (ml(j, { [Xl.Unmount]() {
      r.current.splice(Q, 1);
    }, [Xl.Hidden]() {
      r.current[Q].state = "hidden";
    } }), p.microTask(() => {
      var Z;
      !wi(r) && d.current && ((Z = o.current) == null || Z.call(o));
    }));
  }), S = At((q) => {
    let j = r.current.find(({ el: Q }) => Q === q);
    return j ? j.state !== "visible" && (j.state = "visible") : r.current.push({ el: q, state: "visible" }), () => _(q, Xl.Unmount);
  }), m = O.useRef([]), y = O.useRef(Promise.resolve()), U = O.useRef({ enter: [], leave: [] }), x = At((q, j, Q) => {
    m.current.splice(0), f && (f.chains.current[j] = f.chains.current[j].filter(([Z]) => Z !== q)), f?.chains.current[j].push([q, new Promise((Z) => {
      m.current.push(Z);
    })]), f?.chains.current[j].push([q, new Promise((Z) => {
      Promise.all(U.current[j].map(([L, k]) => k)).then(() => Z());
    })]), j === "enter" ? y.current = y.current.then(() => f?.wait.current).then(() => Q(j)) : Q(j);
  }), B = At((q, j, Q) => {
    Promise.all(U.current[j].splice(0).map(([Z, L]) => L)).then(() => {
      var Z;
      (Z = m.current.shift()) == null || Z();
    }).then(() => Q(j));
  });
  return O.useMemo(() => ({ children: r, register: S, unregister: _, onStart: x, onStop: B, wait: y, chains: U }), [S, _, r, x, B, U, y]);
}
let Qv = O.Fragment, wv = Ni.RenderStrategy;
function Dg(i, f) {
  var o, r;
  let { transition: d = !0, beforeEnter: p, afterEnter: _, beforeLeave: S, afterLeave: m, enter: y, enterFrom: U, enterTo: x, entered: B, leave: q, leaveFrom: j, leaveTo: Q, ...Z } = i, [L, k] = O.useState(null), V = O.useRef(null), lt = Gv(i), ht = Ve(...lt ? [V, f, k] : f === null ? [] : [f]), yt = (o = Z.unmount) == null || o ? Xl.Unmount : Xl.Hidden, { show: $, appear: Xt, initial: ee } = Og(), [Ut, Zt] = O.useState($ ? "visible" : "hidden"), jt = Mg(), { register: Qt, unregister: Jt } = jt;
  oe(() => Qt(V), [Qt, V]), oe(() => {
    if (yt === Xl.Hidden && V.current) {
      if ($ && Ut !== "visible") {
        Zt("visible");
        return;
      }
      return ml(Ut, { hidden: () => Jt(V), visible: () => Qt(V) });
    }
  }, [Ut, V, Qt, Jt, $, yt]);
  let $t = Gi();
  oe(() => {
    if (lt && $t && Ut === "visible" && V.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [V, Ut, $t, lt]);
  let M = ee && !Xt, Y = Xt && $ && ee, K = O.useRef(!1), rt = Xv(() => {
    K.current || (Zt("hidden"), Jt(V));
  }, jt), dt = At((st) => {
    K.current = !0;
    let Bt = st ? "enter" : "leave";
    rt.onStart(V, Bt, (Tt) => {
      Tt === "enter" ? p?.() : Tt === "leave" && S?.();
    });
  }), h = At((st) => {
    let Bt = st ? "enter" : "leave";
    K.current = !1, rt.onStop(V, Bt, (Tt) => {
      Tt === "enter" ? _?.() : Tt === "leave" && m?.();
    }), Bt === "leave" && !wi(rt) && (Zt("hidden"), Jt(V));
  });
  O.useEffect(() => {
    lt && d || (dt($), h($));
  }, [$, lt, d]);
  let N = !(!d || !lt || !$t || M), [, H] = k1(N, L, $, { start: dt, end: h }), G = oa({ ref: ht, className: ((r = Ar(Z.className, Y && y, Y && U, H.enter && y, H.enter && H.closed && U, H.enter && !H.closed && x, H.leave && q, H.leave && !H.closed && j, H.leave && H.closed && Q, !H.transition && $ && B)) == null ? void 0 : r.trim()) || void 0, ...$1(H) }), I = 0;
  Ut === "visible" && (I |= Ye.Open), Ut === "hidden" && (I |= Ye.Closed), $ && Ut === "hidden" && (I |= Ye.Opening), !$ && Ut === "visible" && (I |= Ye.Closing);
  let at = He();
  return W.createElement(Qi.Provider, { value: rt }, W.createElement(tg, { value: I }, at({ ourProps: G, theirProps: Z, defaultTag: Qv, features: wv, visible: Ut === "visible", name: "Transition.Child" })));
}
function Cg(i, f) {
  let { show: o, appear: r = !1, unmount: d = !0, ...p } = i, _ = O.useRef(null), S = Gv(i), m = Ve(...S ? [_, f] : f === null ? [] : [f]);
  Gi();
  let y = Li();
  if (o === void 0 && y !== null && (o = (y & Ye.Open) === Ye.Open), o === void 0) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [U, x] = O.useState(o ? "visible" : "hidden"), B = Xv(() => {
    o || x("hidden");
  }), [q, j] = O.useState(!0), Q = O.useRef([o]);
  oe(() => {
    q !== !1 && Q.current[Q.current.length - 1] !== o && (Q.current.push(o), j(!1));
  }, [Q, o]);
  let Z = O.useMemo(() => ({ show: o, appear: r, initial: q }), [o, r, q]);
  oe(() => {
    o ? x("visible") : !wi(B) && _.current !== null && x("hidden");
  }, [o, B]);
  let L = { unmount: d }, k = At(() => {
    var ht;
    q && j(!1), (ht = i.beforeEnter) == null || ht.call(i);
  }), V = At(() => {
    var ht;
    q && j(!1), (ht = i.beforeLeave) == null || ht.call(i);
  }), lt = He();
  return W.createElement(Qi.Provider, { value: B }, W.createElement(Xi.Provider, { value: Z }, lt({ ourProps: { ...L, as: O.Fragment, children: W.createElement(Zv, { ref: m, ...L, ...p, beforeEnter: k, beforeLeave: V }) }, theirProps: {}, defaultTag: O.Fragment, features: wv, visible: U === "visible", name: "Transition" })));
}
function Ng(i, f) {
  let o = O.useContext(Xi) !== null, r = Li() !== null;
  return W.createElement(W.Fragment, null, !o && r ? W.createElement(Nr, { ref: f, ...i }) : W.createElement(Zv, { ref: f, ...i }));
}
let Nr = se(Cg), Zv = se(Dg), jr = se(Ng), Ci = Object.assign(Nr, { Child: jr, Root: Nr });
var Rg = ((i) => (i[i.Open = 0] = "Open", i[i.Closed = 1] = "Closed", i))(Rg || {}), Ug = ((i) => (i[i.SetTitleId = 0] = "SetTitleId", i))(Ug || {});
let xg = { 0(i, f) {
  return i.titleId === f.id ? i : { ...i, titleId: f.id };
} }, Br = O.createContext(null);
Br.displayName = "DialogContext";
function Zi(i) {
  let f = O.useContext(Br);
  if (f === null) {
    let o = new Error(`<${i} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, Zi), o;
  }
  return f;
}
function Hg(i, f) {
  return ml(f.type, xg, i, f);
}
let ov = se(function(i, f) {
  let o = O.useId(), { id: r = `headlessui-dialog-${o}`, open: d, onClose: p, initialFocus: _, role: S = "dialog", autoFocus: m = !0, __demoMode: y = !1, unmount: U = !1, ...x } = i, B = O.useRef(!1);
  S = (function() {
    return S === "dialog" || S === "alertdialog" ? S : (B.current || (B.current = !0, console.warn(`Invalid role [${S}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog");
  })();
  let q = Li();
  d === void 0 && q !== null && (d = (q & Ye.Open) === Ye.Open);
  let j = O.useRef(null), Q = Ve(j, f), Z = Ur(j.current), L = d ? 0 : 1, [k, V] = O.useReducer(Hg, { titleId: null, descriptionId: null, panelRef: O.createRef() }), lt = At(() => p(!1)), ht = At((H) => V({ type: 0, id: H })), yt = Gi() ? L === 0 : !1, [$, Xt] = rg(), ee = { get current() {
    var H;
    return (H = k.panelRef.current) != null ? H : j.current;
  } }, Ut = qv(), { resolveContainers: Zt } = vg({ mainTreeNode: Ut, portals: $, defaultContainers: [ee] }), jt = q !== null ? (q & Ye.Closing) === Ye.Closing : !1;
  O1(y || jt ? !1 : yt, { allowed: At(() => {
    var H, G;
    return [(G = (H = j.current) == null ? void 0 : H.closest("[data-headlessui-portal]")) != null ? G : null];
  }), disallowed: At(() => {
    var H;
    return [(H = Ut?.closest("body > *:not(#headlessui-portal-root)")) != null ? H : null];
  }) });
  let Qt = Av.get(null);
  oe(() => {
    if (yt) return Qt.actions.push(r), () => Qt.actions.pop(r);
  }, [Qt, r, yt]);
  let Jt = Ov(Qt, O.useCallback((H) => Qt.selectors.isTop(H, r), [Qt, r]));
  Y1(Jt, Zt, (H) => {
    H.preventDefault(), lt();
  }), dg(Jt, Z?.defaultView, (H) => {
    H.preventDefault(), H.stopPropagation(), document.activeElement && "blur" in document.activeElement && typeof document.activeElement.blur == "function" && document.activeElement.blur(), lt();
  }), V1(y || jt ? !1 : yt, Z, Zt), M1(yt, j, lt);
  let [$t, M] = i1(), Y = O.useMemo(() => [{ dialogState: L, close: lt, setTitleId: ht, unmount: U }, k], [L, lt, ht, U, k]), K = nu({ open: L === 0 }), rt = { ref: Q, id: r, role: S, tabIndex: -1, "aria-modal": y ? void 0 : L === 0 ? !0 : void 0, "aria-labelledby": k.titleId, "aria-describedby": $t, unmount: U }, dt = !mg(), h = sa.None;
  yt && !y && (h |= sa.RestoreFocus, h |= sa.TabLock, m && (h |= sa.AutoFocus), dt && (h |= sa.InitialFocus));
  let N = He();
  return W.createElement(eg, null, W.createElement(fv, { force: !0 }, W.createElement(sg, null, W.createElement(Br.Provider, { value: Y }, W.createElement(jv, { target: j }, W.createElement(fv, { force: !1 }, W.createElement(M, { slot: K }, W.createElement(Xt, null, W.createElement(Sg, { initialFocus: _, initialFocusFallback: j, containers: Zt, features: h }, W.createElement(d1, { value: lt }, N({ ourProps: rt, theirProps: x, slot: K, defaultTag: jg, features: Bg, visible: L === 0, name: "Dialog" })))))))))));
}), jg = "div", Bg = Ni.RenderStrategy | Ni.Static;
function qg(i, f) {
  let { transition: o = !1, open: r, ...d } = i, p = Li(), _ = i.hasOwnProperty("open") || p !== null, S = i.hasOwnProperty("onClose");
  if (!_ && !S) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!_) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!S) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (!p && typeof i.open != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${i.open}`);
  if (typeof i.onClose != "function") throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${i.onClose}`);
  return (r !== void 0 || o) && !d.static ? W.createElement(rv, null, W.createElement(Ci, { show: r, transition: o, unmount: d.unmount }, W.createElement(ov, { ref: f, ...d }))) : W.createElement(rv, null, W.createElement(ov, { ref: f, open: r, ...d }));
}
let Yg = "div";
function Lg(i, f) {
  let o = O.useId(), { id: r = `headlessui-dialog-panel-${o}`, transition: d = !1, ...p } = i, [{ dialogState: _, unmount: S }, m] = Zi("Dialog.Panel"), y = Ve(f, m.panelRef), U = nu({ open: _ === 0 }), x = At((Z) => {
    Z.stopPropagation();
  }), B = { ref: y, id: r, onClick: x }, q = d ? jr : O.Fragment, j = d ? { unmount: S } : {}, Q = He();
  return W.createElement(q, { ...j }, Q({ ourProps: B, theirProps: p, slot: U, defaultTag: Yg, name: "Dialog.Panel" }));
}
let Gg = "div";
function Xg(i, f) {
  let { transition: o = !1, ...r } = i, [{ dialogState: d, unmount: p }] = Zi("Dialog.Backdrop"), _ = nu({ open: d === 0 }), S = { ref: f, "aria-hidden": !0 }, m = o ? jr : O.Fragment, y = o ? { unmount: p } : {}, U = He();
  return W.createElement(m, { ...y }, U({ ourProps: S, theirProps: r, slot: _, defaultTag: Gg, name: "Dialog.Backdrop" }));
}
let Qg = "h2";
function wg(i, f) {
  let o = O.useId(), { id: r = `headlessui-dialog-title-${o}`, ...d } = i, [{ dialogState: p, setTitleId: _ }] = Zi("Dialog.Title"), S = Ve(f);
  O.useEffect(() => (_(r), () => _(null)), [r, _]);
  let m = nu({ open: p === 0 }), y = { ref: S, id: r };
  return He()({ ourProps: y, theirProps: d, slot: m, defaultTag: Qg, name: "Dialog.Title" });
}
let Zg = se(qg), Vg = se(Lg);
se(Xg);
let Kg = se(wg), Di = Object.assign(Zg, { Panel: Vg, Title: Kg, Description: o1 });
const Jg = "_container_lfa5t_2", $g = "_openButton_lfa5t_7", kg = "_modalOverlay_lfa5t_29", Fg = "_backdrop_lfa5t_35", Wg = "_backdropEnter_lfa5t_42", Ig = "_backdropEnterFrom_lfa5t_46", Pg = "_backdropEnterTo_lfa5t_50", tp = "_backdropLeave_lfa5t_54", ep = "_backdropLeaveFrom_lfa5t_58", lp = "_backdropLeaveTo_lfa5t_62", ap = "_modalContainer_lfa5t_67", np = "_modalWrapper_lfa5t_73", up = "_modalPanel_lfa5t_83", ip = "_panelEnter_lfa5t_97", cp = "_panelEnterFrom_lfa5t_101", fp = "_panelEnterTo_lfa5t_106", rp = "_panelLeave_lfa5t_111", op = "_panelLeaveFrom_lfa5t_115", sp = "_panelLeaveTo_lfa5t_120", dp = "_modalHeader_lfa5t_126", mp = "_modalTitle_lfa5t_130", vp = "_modalBody_lfa5t_138", hp = "_modalDescription_lfa5t_142", yp = "_modalContent_lfa5t_148", gp = "_modalActions_lfa5t_170", pp = "_closeButton_lfa5t_177", Ot = {
  container: Jg,
  openButton: $g,
  modalOverlay: kg,
  backdrop: Fg,
  backdropEnter: Wg,
  backdropEnterFrom: Ig,
  backdropEnterTo: Pg,
  backdropLeave: tp,
  backdropLeaveFrom: ep,
  backdropLeaveTo: lp,
  modalContainer: ap,
  modalWrapper: np,
  modalPanel: up,
  panelEnter: ip,
  panelEnterFrom: cp,
  panelEnterTo: fp,
  panelLeave: rp,
  panelLeaveFrom: op,
  panelLeaveTo: sp,
  modalHeader: dp,
  modalTitle: mp,
  modalBody: vp,
  modalDescription: hp,
  modalContent: yp,
  modalActions: gp,
  closeButton: pp
}, bp = "._container_lfa5t_2{display:inline-block}._openButton_lfa5t_7{padding:.75rem 1.5rem;background-color:#6366f1;color:#fff;border:none;border-radius:8px;font-size:1rem;font-weight:500;cursor:pointer;transition:background-color .2s}._openButton_lfa5t_7:hover{background-color:#4f46e5}._openButton_lfa5t_7:focus{outline:2px solid #6366f1;outline-offset:2px}._modalOverlay_lfa5t_29{position:relative;z-index:50}._backdrop_lfa5t_35{position:fixed;inset:0;background-color:#00000080}._backdropEnter_lfa5t_42{transition:opacity .3s cubic-bezier(.4,0,.2,1)}._backdropEnterFrom_lfa5t_46{opacity:0}._backdropEnterTo_lfa5t_50{opacity:1}._backdropLeave_lfa5t_54{transition:opacity .2s cubic-bezier(.4,0,.2,1)}._backdropLeaveFrom_lfa5t_58{opacity:1}._backdropLeaveTo_lfa5t_62{opacity:0}._modalContainer_lfa5t_67{position:fixed;inset:0;overflow-y:auto}._modalWrapper_lfa5t_73{display:flex;min-height:100%;align-items:center;justify-content:center;padding:1rem;text-align:center}._modalPanel_lfa5t_83{width:100%;max-width:28rem;transform:scale(1);overflow:hidden;border-radius:12px;background-color:#fff;padding:1.5rem;text-align:left;box-shadow:0 20px 25px -5px #0000001a,0 10px 10px -5px #0000000a;transition:all .3s cubic-bezier(.4,0,.2,1)}._panelEnter_lfa5t_97{transition:all .3s cubic-bezier(.4,0,.2,1)}._panelEnterFrom_lfa5t_101{opacity:0;transform:scale(.95)}._panelEnterTo_lfa5t_106{opacity:1;transform:scale(1)}._panelLeave_lfa5t_111{transition:all .2s cubic-bezier(.4,0,.2,1)}._panelLeaveFrom_lfa5t_115{opacity:1;transform:scale(1)}._panelLeaveTo_lfa5t_120{opacity:0;transform:scale(.95)}._modalHeader_lfa5t_126{margin-bottom:1rem}._modalTitle_lfa5t_130{font-size:1.5rem;font-weight:700;color:#111827;margin:0}._modalBody_lfa5t_138{margin-top:.5rem}._modalDescription_lfa5t_142{font-size:.875rem;color:#6b7280;margin-bottom:1rem}._modalContent_lfa5t_148{margin-top:1rem}._modalContent_lfa5t_148 p{margin:0 0 .75rem;color:#374151;line-height:1.6}._modalContent_lfa5t_148 ul{margin:0;padding-left:1.5rem;color:#374151;line-height:1.8}._modalContent_lfa5t_148 li{margin-bottom:.25rem}._modalActions_lfa5t_170{margin-top:1.5rem;display:flex;gap:.75rem;justify-content:flex-end}._closeButton_lfa5t_177{padding:.625rem 1.25rem;background-color:#6366f1;color:#fff;border:none;border-radius:6px;font-size:.875rem;font-weight:500;cursor:pointer;transition:background-color .2s}._closeButton_lfa5t_177:hover{background-color:#4f46e5}._closeButton_lfa5t_177:focus{outline:2px solid #6366f1;outline-offset:2px}@media(max-width:640px){._modalPanel_lfa5t_83{max-width:90vw;padding:1.25rem}._modalTitle_lfa5t_130{font-size:1.25rem}}";
function Sp({
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
      const m = document.createElement("style");
      m.id = S, m.textContent = bp, document.head.appendChild(m);
    }
  }, []);
  function p() {
    d(!1);
  }
  function _() {
    d(!0);
  }
  return /* @__PURE__ */ it.jsxs("div", { className: Ot.container, children: [
    /* @__PURE__ */ it.jsx(
      "button",
      {
        type: "button",
        onClick: _,
        className: Ot.openButton,
        children: "Open React Modal"
      }
    ),
    /* @__PURE__ */ it.jsx(Ci, { appear: !0, show: r, as: O.Fragment, children: /* @__PURE__ */ it.jsxs(Di, { as: "div", className: Ot.modalOverlay, onClose: p, children: [
      /* @__PURE__ */ it.jsx(
        Ci.Child,
        {
          as: O.Fragment,
          enter: Ot.backdropEnter,
          enterFrom: Ot.backdropEnterFrom,
          enterTo: Ot.backdropEnterTo,
          leave: Ot.backdropLeave,
          leaveFrom: Ot.backdropLeaveFrom,
          leaveTo: Ot.backdropLeaveTo,
          children: /* @__PURE__ */ it.jsx("div", { className: Ot.backdrop, "aria-hidden": "true" })
        }
      ),
      /* @__PURE__ */ it.jsx("div", { className: Ot.modalContainer, children: /* @__PURE__ */ it.jsx("div", { className: Ot.modalWrapper, children: /* @__PURE__ */ it.jsx(
        Ci.Child,
        {
          as: O.Fragment,
          enter: Ot.panelEnter,
          enterFrom: Ot.panelEnterFrom,
          enterTo: Ot.panelEnterTo,
          leave: Ot.panelLeave,
          leaveFrom: Ot.panelLeaveFrom,
          leaveTo: Ot.panelLeaveTo,
          children: /* @__PURE__ */ it.jsxs(Di.Panel, { className: Ot.modalPanel, children: [
            /* @__PURE__ */ it.jsx("div", { className: Ot.modalHeader, children: /* @__PURE__ */ it.jsx(Di.Title, { as: "h3", className: Ot.modalTitle, children: f }) }),
            /* @__PURE__ */ it.jsxs("div", { className: Ot.modalBody, children: [
              /* @__PURE__ */ it.jsx(Di.Description, { className: Ot.modalDescription, children: o }),
              /* @__PURE__ */ it.jsxs("div", { className: Ot.modalContent, children: [
                /* @__PURE__ */ it.jsx("p", { children: "This modal demonstrates Headless UI integration in a React Web Component. It features:" }),
                /* @__PURE__ */ it.jsxs("ul", { children: [
                  /* @__PURE__ */ it.jsx("li", { children: "✅ Automatic accessibility (ARIA attributes)" }),
                  /* @__PURE__ */ it.jsx("li", { children: "✅ Focus trap management" }),
                  /* @__PURE__ */ it.jsx("li", { children: "✅ ESC key to close" }),
                  /* @__PURE__ */ it.jsx("li", { children: "✅ Click outside to close" }),
                  /* @__PURE__ */ it.jsx("li", { children: "✅ Smooth transitions" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ it.jsx("div", { className: Ot.modalActions, children: /* @__PURE__ */ it.jsx(
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
const _p = ji(Sp, W, Hi);
customElements.get("react-modal") || customElements.define("react-modal", _p);
const Ep = "_button_a3w2z_1", Tp = "_primary_a3w2z_29", zp = "_secondary_a3w2z_38", Ap = "_success_a3w2z_47", Op = "_danger_a3w2z_56", Mp = "_small_a3w2z_65", Dp = "_large_a3w2z_70", Tr = {
  button: Ep,
  primary: Tp,
  secondary: zp,
  success: Ap,
  danger: Op,
  small: Mp,
  large: Dp
}, Cp = "._button_a3w2z_1{display:inline-flex;align-items:center;justify-content:center;padding:.5rem 1rem;font-size:1rem;font-weight:500;border:none;border-radius:.375rem;cursor:pointer;transition:all .2s ease-in-out;font-family:inherit}._button_a3w2z_1:disabled{opacity:.5;cursor:not-allowed}._button_a3w2z_1:not(:disabled):hover{transform:translateY(-1px);box-shadow:0 4px 6px #0000001a}._button_a3w2z_1:not(:disabled):active{transform:translateY(0)}._primary_a3w2z_29{background-color:#3b82f6;color:#fff}._primary_a3w2z_29:not(:disabled):hover{background-color:#2563eb}._secondary_a3w2z_38{background-color:#6b7280;color:#fff}._secondary_a3w2z_38:not(:disabled):hover{background-color:#4b5563}._success_a3w2z_47{background-color:#10b981;color:#fff}._success_a3w2z_47:not(:disabled):hover{background-color:#059669}._danger_a3w2z_56{background-color:#ef4444;color:#fff}._danger_a3w2z_56:not(:disabled):hover{background-color:#dc2626}._small_a3w2z_65{padding:.25rem .75rem;font-size:.875rem}._large_a3w2z_70{padding:.75rem 1.5rem;font-size:1.125rem}";
function Np({
  label: i = "Button",
  variant: f = "primary",
  size: o = "medium",
  disabled: r = !1,
  onbuttonclick: d
}) {
  O.useEffect(() => {
    const S = "react-button-styles";
    if (!document.getElementById(S)) {
      const m = document.createElement("style");
      m.id = S, m.textContent = Cp, document.head.appendChild(m);
    }
  }, []);
  const p = () => {
    if (!r && d)
      try {
        new Function(d)();
      } catch (S) {
        console.error("Error executing onbuttonclick:", S);
      }
  }, _ = [
    Tr.button,
    Tr[f],
    o !== "medium" ? Tr[o] : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ it.jsx(
    "button",
    {
      className: _,
      disabled: r,
      onClick: p,
      type: "button",
      children: i
    }
  );
}
const Rp = ji(Np, W, Hi);
customElements.get("react-button") || customElements.define("react-button", Rp);
const Up = "_dropdown_1rheh_1", xp = "_button_1rheh_8", Hp = "_buttonDisabled_1rheh_33", jp = "_arrow_1rheh_38", Bp = "_arrowOpen_1rheh_49", qp = "_menu_1rheh_53", Yp = "_item_1rheh_67", Lp = "_itemSelected_1rheh_77", Gp = "_placeholder_1rheh_83", ol = {
  dropdown: Up,
  button: xp,
  buttonDisabled: Hp,
  arrow: jp,
  arrowOpen: Bp,
  menu: qp,
  item: Yp,
  itemSelected: Lp,
  placeholder: Gp
}, Xp = "._dropdown_1rheh_1{position:relative;display:inline-block;width:100%;max-width:300px}._button_1rheh_8{width:100%;padding:.5rem 2.5rem .5rem 1rem;font-size:1rem;background-color:#fff;border:1px solid #d1d5db;border-radius:.375rem;cursor:pointer;display:flex;align-items:center;justify-content:space-between;transition:all .2s ease-in-out;position:relative}._button_1rheh_8:hover{border-color:#9ca3af}._button_1rheh_8:focus{outline:none;border-color:#3b82f6;box-shadow:0 0 0 3px #3b82f61a}._buttonDisabled_1rheh_33{opacity:.5;cursor:not-allowed}._arrow_1rheh_38{position:absolute;right:1rem;width:0;height:0;border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid #6b7280;transition:transform .2s ease-in-out}._arrowOpen_1rheh_49{transform:rotate(180deg)}._menu_1rheh_53{position:absolute;top:calc(100% + .25rem);left:0;right:0;background-color:#fff;border:1px solid #d1d5db;border-radius:.375rem;box-shadow:0 10px 15px -3px #0000001a;max-height:300px;overflow-y:auto;z-index:10}._item_1rheh_67{padding:.5rem 1rem;cursor:pointer;transition:background-color .2s ease-in-out}._item_1rheh_67:hover{background-color:#f3f4f6}._itemSelected_1rheh_77{background-color:#eff6ff;color:#3b82f6;font-weight:500}._placeholder_1rheh_83{color:#9ca3af}";
function Qp({
  options: i = [],
  selected: f = "",
  placeholder: o = "Select an option",
  disabled: r = !1,
  onChange: d
}) {
  const [p, _] = O.useState(!1), [S, m] = O.useState(f), [y, U] = O.useState([]), x = O.useRef(null);
  O.useEffect(() => {
    const L = "react-dropdown-styles";
    if (!document.getElementById(L)) {
      const k = document.createElement("style");
      k.id = L, k.textContent = Xp, document.head.appendChild(k);
    }
  }, []), O.useEffect(() => {
    if (typeof i == "string")
      try {
        const L = JSON.parse(i);
        U(Array.isArray(L) ? L : []);
      } catch (L) {
        console.error("Failed to parse options JSON:", L), U([]);
      }
    else Array.isArray(i) ? U(i) : U([]);
  }, [i]), O.useEffect(() => {
    m(f);
  }, [f]), O.useEffect(() => {
    if (!p) return;
    const L = (V) => {
      x.current && !x.current.contains(V.target) && _(!1);
    }, k = setTimeout(() => {
      document.addEventListener("click", L);
    }, 0);
    return () => {
      clearTimeout(k), document.removeEventListener("click", L);
    };
  }, [p]);
  const B = () => {
    r || _(!p);
  }, q = (L) => {
    r || (m(L.value), _(!1), d && d(L.value, L));
  }, j = y.find((L) => L.value === S), Q = j ? j.label : o, Z = !j;
  return /* @__PURE__ */ it.jsxs("div", { className: ol.dropdown, ref: x, children: [
    /* @__PURE__ */ it.jsxs(
      "button",
      {
        className: `${ol.button} ${r ? ol.buttonDisabled : ""}`,
        onClick: B,
        disabled: r,
        type: "button",
        children: [
          /* @__PURE__ */ it.jsx("span", { className: Z ? ol.placeholder : "", children: Q }),
          /* @__PURE__ */ it.jsx("span", { className: `${ol.arrow} ${p ? ol.arrowOpen : ""}` })
        ]
      }
    ),
    p && /* @__PURE__ */ it.jsx("div", { className: ol.menu, children: y.map((L) => /* @__PURE__ */ it.jsx(
      "div",
      {
        className: `${ol.item} ${L.value === S ? ol.itemSelected : ""}`,
        onClick: () => q(L),
        children: L.label
      },
      L.value
    )) })
  ] });
}
const wp = ji(Qp, W, Hi);
customElements.get("react-dropdown") || customElements.define("react-dropdown", wp);
export {
  Np as ReactButton,
  Ly as ReactCounter,
  Qp as ReactDropdown,
  Sp as ReactModal
};
