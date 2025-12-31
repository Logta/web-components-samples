function oy(i, f) {
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
function sy(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var rr = { exports: {} }, $n = {};
var Ym;
function dy() {
  if (Ym) return $n;
  Ym = 1;
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
var Lm;
function my() {
  return Lm || (Lm = 1, rr.exports = dy()), rr.exports;
}
var ut = my(), or = { exports: {} }, et = {};
var Gm;
function vy() {
  if (Gm) return et;
  Gm = 1;
  var i = /* @__PURE__ */ Symbol.for("react.transitional.element"), f = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), p = /* @__PURE__ */ Symbol.for("react.consumer"), _ = /* @__PURE__ */ Symbol.for("react.context"), S = /* @__PURE__ */ Symbol.for("react.forward_ref"), v = /* @__PURE__ */ Symbol.for("react.suspense"), h = /* @__PURE__ */ Symbol.for("react.memo"), R = /* @__PURE__ */ Symbol.for("react.lazy"), x = /* @__PURE__ */ Symbol.for("react.activity"), j = Symbol.iterator;
  function q(y) {
    return y === null || typeof y != "object" ? null : (y = j && y[j] || y["@@iterator"], typeof y == "function" ? y : null);
  }
  var B = {
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
  function F(y, N, H) {
    this.props = y, this.context = N, this.refs = Z, this.updater = H || B;
  }
  F.prototype.isReactComponent = {}, F.prototype.setState = function(y, N) {
    if (typeof y != "object" && typeof y != "function" && y != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, y, N, "setState");
  }, F.prototype.forceUpdate = function(y) {
    this.updater.enqueueForceUpdate(this, y, "forceUpdate");
  };
  function P() {
  }
  P.prototype = F.prototype;
  function K(y, N, H) {
    this.props = y, this.context = N, this.refs = Z, this.updater = H || B;
  }
  var G = K.prototype = new P();
  G.constructor = K, Q(G, F.prototype), G.isPureReactComponent = !0;
  var V = Array.isArray;
  function it() {
  }
  var J = { H: null, A: null, T: null, S: null }, Xt = Object.prototype.hasOwnProperty;
  function ee(y, N, H) {
    var L = H.ref;
    return {
      $$typeof: i,
      type: y,
      key: N,
      ref: L !== void 0 ? L : null,
      props: H
    };
  }
  function Rt(y, N) {
    return ee(y.type, N, y.props);
  }
  function Zt(y) {
    return typeof y == "object" && y !== null && y.$$typeof === i;
  }
  function jt(y) {
    var N = { "=": "=0", ":": "=2" };
    return "$" + y.replace(/[=:]/g, function(H) {
      return N[H];
    });
  }
  var Qt = /\/+/g;
  function Jt(y, N) {
    return typeof y == "object" && y !== null && y.key != null ? jt("" + y.key) : N.toString(36);
  }
  function $t(y) {
    switch (y.status) {
      case "fulfilled":
        return y.value;
      case "rejected":
        throw y.reason;
      default:
        switch (typeof y.status == "string" ? y.then(it, it) : (y.status = "pending", y.then(
          function(N) {
            y.status === "pending" && (y.status = "fulfilled", y.value = N);
          },
          function(N) {
            y.status === "pending" && (y.status = "rejected", y.reason = N);
          }
        )), y.status) {
          case "fulfilled":
            return y.value;
          case "rejected":
            throw y.reason;
        }
    }
    throw y;
  }
  function M(y, N, H, L, I) {
    var nt = typeof y;
    (nt === "undefined" || nt === "boolean") && (y = null);
    var mt = !1;
    if (y === null) mt = !0;
    else
      switch (nt) {
        case "bigint":
        case "string":
        case "number":
          mt = !0;
          break;
        case "object":
          switch (y.$$typeof) {
            case i:
            case f:
              mt = !0;
              break;
            case R:
              return mt = y._init, M(
                mt(y._payload),
                N,
                H,
                L,
                I
              );
          }
      }
    if (mt)
      return I = I(y), mt = L === "" ? "." + Jt(y, 0) : L, V(I) ? (H = "", mt != null && (H = mt.replace(Qt, "$&/") + "/"), M(I, N, H, "", function(tn) {
        return tn;
      })) : I != null && (Zt(I) && (I = Rt(
        I,
        H + (I.key == null || y && y.key === I.key ? "" : ("" + I.key).replace(
          Qt,
          "$&/"
        ) + "/") + mt
      )), N.push(I)), 1;
    mt = 0;
    var Bt = L === "" ? "." : L + ":";
    if (V(y))
      for (var Tt = 0; Tt < y.length; Tt++)
        L = y[Tt], nt = Bt + Jt(L, Tt), mt += M(
          L,
          N,
          H,
          nt,
          I
        );
    else if (Tt = q(y), typeof Tt == "function")
      for (y = Tt.call(y), Tt = 0; !(L = y.next()).done; )
        L = L.value, nt = Bt + Jt(L, Tt++), mt += M(
          L,
          N,
          H,
          nt,
          I
        );
    else if (nt === "object") {
      if (typeof y.then == "function")
        return M(
          $t(y),
          N,
          H,
          L,
          I
        );
      throw N = String(y), Error(
        "Objects are not valid as a React child (found: " + (N === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : N) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return mt;
  }
  function Y(y, N, H) {
    if (y == null) return y;
    var L = [], I = 0;
    return M(y, L, "", "", function(nt) {
      return N.call(H, nt, I++);
    }), L;
  }
  function $(y) {
    if (y._status === -1) {
      var N = y._result;
      N = N(), N.then(
        function(H) {
          (y._status === 0 || y._status === -1) && (y._status = 1, y._result = H);
        },
        function(H) {
          (y._status === 0 || y._status === -1) && (y._status = 2, y._result = H);
        }
      ), y._status === -1 && (y._status = 0, y._result = N);
    }
    if (y._status === 1) return y._result.default;
    throw y._result;
  }
  var st = typeof reportError == "function" ? reportError : function(y) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var N = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y),
        error: y
      });
      if (!window.dispatchEvent(N)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", y);
      return;
    }
    console.error(y);
  }, vt = {
    map: Y,
    forEach: function(y, N, H) {
      Y(
        y,
        function() {
          N.apply(this, arguments);
        },
        H
      );
    },
    count: function(y) {
      var N = 0;
      return Y(y, function() {
        N++;
      }), N;
    },
    toArray: function(y) {
      return Y(y, function(N) {
        return N;
      }) || [];
    },
    only: function(y) {
      if (!Zt(y))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return y;
    }
  };
  return et.Activity = x, et.Children = vt, et.Component = F, et.Fragment = o, et.Profiler = d, et.PureComponent = K, et.StrictMode = r, et.Suspense = v, et.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = J, et.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(y) {
      return J.H.useMemoCache(y);
    }
  }, et.cache = function(y) {
    return function() {
      return y.apply(null, arguments);
    };
  }, et.cacheSignal = function() {
    return null;
  }, et.cloneElement = function(y, N, H) {
    if (y == null)
      throw Error(
        "The argument must be a React element, but you passed " + y + "."
      );
    var L = Q({}, y.props), I = y.key;
    if (N != null)
      for (nt in N.key !== void 0 && (I = "" + N.key), N)
        !Xt.call(N, nt) || nt === "key" || nt === "__self" || nt === "__source" || nt === "ref" && N.ref === void 0 || (L[nt] = N[nt]);
    var nt = arguments.length - 2;
    if (nt === 1) L.children = H;
    else if (1 < nt) {
      for (var mt = Array(nt), Bt = 0; Bt < nt; Bt++)
        mt[Bt] = arguments[Bt + 2];
      L.children = mt;
    }
    return ee(y.type, I, L);
  }, et.createContext = function(y) {
    return y = {
      $$typeof: _,
      _currentValue: y,
      _currentValue2: y,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, y.Provider = y, y.Consumer = {
      $$typeof: p,
      _context: y
    }, y;
  }, et.createElement = function(y, N, H) {
    var L, I = {}, nt = null;
    if (N != null)
      for (L in N.key !== void 0 && (nt = "" + N.key), N)
        Xt.call(N, L) && L !== "key" && L !== "__self" && L !== "__source" && (I[L] = N[L]);
    var mt = arguments.length - 2;
    if (mt === 1) I.children = H;
    else if (1 < mt) {
      for (var Bt = Array(mt), Tt = 0; Tt < mt; Tt++)
        Bt[Tt] = arguments[Tt + 2];
      I.children = Bt;
    }
    if (y && y.defaultProps)
      for (L in mt = y.defaultProps, mt)
        I[L] === void 0 && (I[L] = mt[L]);
    return ee(y, nt, I);
  }, et.createRef = function() {
    return { current: null };
  }, et.forwardRef = function(y) {
    return { $$typeof: S, render: y };
  }, et.isValidElement = Zt, et.lazy = function(y) {
    return {
      $$typeof: R,
      _payload: { _status: -1, _result: y },
      _init: $
    };
  }, et.memo = function(y, N) {
    return {
      $$typeof: h,
      type: y,
      compare: N === void 0 ? null : N
    };
  }, et.startTransition = function(y) {
    var N = J.T, H = {};
    J.T = H;
    try {
      var L = y(), I = J.S;
      I !== null && I(H, L), typeof L == "object" && L !== null && typeof L.then == "function" && L.then(it, st);
    } catch (nt) {
      st(nt);
    } finally {
      N !== null && H.types !== null && (N.types = H.types), J.T = N;
    }
  }, et.unstable_useCacheRefresh = function() {
    return J.H.useCacheRefresh();
  }, et.use = function(y) {
    return J.H.use(y);
  }, et.useActionState = function(y, N, H) {
    return J.H.useActionState(y, N, H);
  }, et.useCallback = function(y, N) {
    return J.H.useCallback(y, N);
  }, et.useContext = function(y) {
    return J.H.useContext(y);
  }, et.useDebugValue = function() {
  }, et.useDeferredValue = function(y, N) {
    return J.H.useDeferredValue(y, N);
  }, et.useEffect = function(y, N) {
    return J.H.useEffect(y, N);
  }, et.useEffectEvent = function(y) {
    return J.H.useEffectEvent(y);
  }, et.useId = function() {
    return J.H.useId();
  }, et.useImperativeHandle = function(y, N, H) {
    return J.H.useImperativeHandle(y, N, H);
  }, et.useInsertionEffect = function(y, N) {
    return J.H.useInsertionEffect(y, N);
  }, et.useLayoutEffect = function(y, N) {
    return J.H.useLayoutEffect(y, N);
  }, et.useMemo = function(y, N) {
    return J.H.useMemo(y, N);
  }, et.useOptimistic = function(y, N) {
    return J.H.useOptimistic(y, N);
  }, et.useReducer = function(y, N, H) {
    return J.H.useReducer(y, N, H);
  }, et.useRef = function(y) {
    return J.H.useRef(y);
  }, et.useState = function(y) {
    return J.H.useState(y);
  }, et.useSyncExternalStore = function(y, N, H) {
    return J.H.useSyncExternalStore(
      y,
      N,
      H
    );
  }, et.useTransition = function() {
    return J.H.useTransition();
  }, et.version = "19.2.3", et;
}
var Xm;
function xi() {
  return Xm || (Xm = 1, or.exports = vy()), or.exports;
}
var A = xi();
const tt = /* @__PURE__ */ sy(A), Qm = /* @__PURE__ */ oy({
  __proto__: null,
  default: tt
}, [A]);
var sr = { exports: {} }, kn = {}, dr = { exports: {} }, mr = {};
var wm;
function hy() {
  return wm || (wm = 1, (function(i) {
    function f(M, Y) {
      var $ = M.length;
      M.push(Y);
      t: for (; 0 < $; ) {
        var st = $ - 1 >>> 1, vt = M[st];
        if (0 < d(vt, Y))
          M[st] = Y, M[$] = vt, $ = st;
        else break t;
      }
    }
    function o(M) {
      return M.length === 0 ? null : M[0];
    }
    function r(M) {
      if (M.length === 0) return null;
      var Y = M[0], $ = M.pop();
      if ($ !== Y) {
        M[0] = $;
        t: for (var st = 0, vt = M.length, y = vt >>> 1; st < y; ) {
          var N = 2 * (st + 1) - 1, H = M[N], L = N + 1, I = M[L];
          if (0 > d(H, $))
            L < vt && 0 > d(I, H) ? (M[st] = I, M[L] = $, st = L) : (M[st] = H, M[N] = $, st = N);
          else if (L < vt && 0 > d(I, $))
            M[st] = I, M[L] = $, st = L;
          else break t;
        }
      }
      return Y;
    }
    function d(M, Y) {
      var $ = M.sortIndex - Y.sortIndex;
      return $ !== 0 ? $ : M.id - Y.id;
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
    var v = [], h = [], R = 1, x = null, j = 3, q = !1, B = !1, Q = !1, Z = !1, F = typeof setTimeout == "function" ? setTimeout : null, P = typeof clearTimeout == "function" ? clearTimeout : null, K = typeof setImmediate < "u" ? setImmediate : null;
    function G(M) {
      for (var Y = o(h); Y !== null; ) {
        if (Y.callback === null) r(h);
        else if (Y.startTime <= M)
          r(h), Y.sortIndex = Y.expirationTime, f(v, Y);
        else break;
        Y = o(h);
      }
    }
    function V(M) {
      if (Q = !1, G(M), !B)
        if (o(v) !== null)
          B = !0, it || (it = !0, jt());
        else {
          var Y = o(h);
          Y !== null && $t(V, Y.startTime - M);
        }
    }
    var it = !1, J = -1, Xt = 5, ee = -1;
    function Rt() {
      return Z ? !0 : !(i.unstable_now() - ee < Xt);
    }
    function Zt() {
      if (Z = !1, it) {
        var M = i.unstable_now();
        ee = M;
        var Y = !0;
        try {
          t: {
            B = !1, Q && (Q = !1, P(J), J = -1), q = !0;
            var $ = j;
            try {
              e: {
                for (G(M), x = o(v); x !== null && !(x.expirationTime > M && Rt()); ) {
                  var st = x.callback;
                  if (typeof st == "function") {
                    x.callback = null, j = x.priorityLevel;
                    var vt = st(
                      x.expirationTime <= M
                    );
                    if (M = i.unstable_now(), typeof vt == "function") {
                      x.callback = vt, G(M), Y = !0;
                      break e;
                    }
                    x === o(v) && r(v), G(M);
                  } else r(v);
                  x = o(v);
                }
                if (x !== null) Y = !0;
                else {
                  var y = o(h);
                  y !== null && $t(
                    V,
                    y.startTime - M
                  ), Y = !1;
                }
              }
              break t;
            } finally {
              x = null, j = $, q = !1;
            }
            Y = void 0;
          }
        } finally {
          Y ? jt() : it = !1;
        }
      }
    }
    var jt;
    if (typeof K == "function")
      jt = function() {
        K(Zt);
      };
    else if (typeof MessageChannel < "u") {
      var Qt = new MessageChannel(), Jt = Qt.port2;
      Qt.port1.onmessage = Zt, jt = function() {
        Jt.postMessage(null);
      };
    } else
      jt = function() {
        F(Zt, 0);
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
      return j;
    }, i.unstable_next = function(M) {
      switch (j) {
        case 1:
        case 2:
        case 3:
          var Y = 3;
          break;
        default:
          Y = j;
      }
      var $ = j;
      j = Y;
      try {
        return M();
      } finally {
        j = $;
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
      var $ = j;
      j = M;
      try {
        return Y();
      } finally {
        j = $;
      }
    }, i.unstable_scheduleCallback = function(M, Y, $) {
      var st = i.unstable_now();
      switch (typeof $ == "object" && $ !== null ? ($ = $.delay, $ = typeof $ == "number" && 0 < $ ? st + $ : st) : $ = st, M) {
        case 1:
          var vt = -1;
          break;
        case 2:
          vt = 250;
          break;
        case 5:
          vt = 1073741823;
          break;
        case 4:
          vt = 1e4;
          break;
        default:
          vt = 5e3;
      }
      return vt = $ + vt, M = {
        id: R++,
        callback: Y,
        priorityLevel: M,
        startTime: $,
        expirationTime: vt,
        sortIndex: -1
      }, $ > st ? (M.sortIndex = $, f(h, M), o(v) === null && M === o(h) && (Q ? (P(J), J = -1) : Q = !0, $t(V, $ - st))) : (M.sortIndex = vt, f(v, M), B || q || (B = !0, it || (it = !0, jt()))), M;
    }, i.unstable_shouldYield = Rt, i.unstable_wrapCallback = function(M) {
      var Y = j;
      return function() {
        var $ = j;
        j = Y;
        try {
          return M.apply(this, arguments);
        } finally {
          j = $;
        }
      };
    };
  })(mr)), mr;
}
var Zm;
function yy() {
  return Zm || (Zm = 1, dr.exports = hy()), dr.exports;
}
var vr = { exports: {} }, te = {};
var Vm;
function gy() {
  if (Vm) return te;
  Vm = 1;
  var i = xi();
  function f(v) {
    var h = "https://react.dev/errors/" + v;
    if (1 < arguments.length) {
      h += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var R = 2; R < arguments.length; R++)
        h += "&args[]=" + encodeURIComponent(arguments[R]);
    }
    return "Minified React error #" + v + "; visit " + h + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
  function p(v, h, R) {
    var x = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: d,
      key: x == null ? null : "" + x,
      children: v,
      containerInfo: h,
      implementation: R
    };
  }
  var _ = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function S(v, h) {
    if (v === "font") return "";
    if (typeof h == "string")
      return h === "use-credentials" ? h : "";
  }
  return te.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, te.createPortal = function(v, h) {
    var R = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!h || h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11)
      throw Error(f(299));
    return p(v, h, null, R);
  }, te.flushSync = function(v) {
    var h = _.T, R = r.p;
    try {
      if (_.T = null, r.p = 2, v) return v();
    } finally {
      _.T = h, r.p = R, r.d.f();
    }
  }, te.preconnect = function(v, h) {
    typeof v == "string" && (h ? (h = h.crossOrigin, h = typeof h == "string" ? h === "use-credentials" ? h : "" : void 0) : h = null, r.d.C(v, h));
  }, te.prefetchDNS = function(v) {
    typeof v == "string" && r.d.D(v);
  }, te.preinit = function(v, h) {
    if (typeof v == "string" && h && typeof h.as == "string") {
      var R = h.as, x = S(R, h.crossOrigin), j = typeof h.integrity == "string" ? h.integrity : void 0, q = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
      R === "style" ? r.d.S(
        v,
        typeof h.precedence == "string" ? h.precedence : void 0,
        {
          crossOrigin: x,
          integrity: j,
          fetchPriority: q
        }
      ) : R === "script" && r.d.X(v, {
        crossOrigin: x,
        integrity: j,
        fetchPriority: q,
        nonce: typeof h.nonce == "string" ? h.nonce : void 0
      });
    }
  }, te.preinitModule = function(v, h) {
    if (typeof v == "string")
      if (typeof h == "object" && h !== null) {
        if (h.as == null || h.as === "script") {
          var R = S(
            h.as,
            h.crossOrigin
          );
          r.d.M(v, {
            crossOrigin: R,
            integrity: typeof h.integrity == "string" ? h.integrity : void 0,
            nonce: typeof h.nonce == "string" ? h.nonce : void 0
          });
        }
      } else h == null && r.d.M(v);
  }, te.preload = function(v, h) {
    if (typeof v == "string" && typeof h == "object" && h !== null && typeof h.as == "string") {
      var R = h.as, x = S(R, h.crossOrigin);
      r.d.L(v, R, {
        crossOrigin: x,
        integrity: typeof h.integrity == "string" ? h.integrity : void 0,
        nonce: typeof h.nonce == "string" ? h.nonce : void 0,
        type: typeof h.type == "string" ? h.type : void 0,
        fetchPriority: typeof h.fetchPriority == "string" ? h.fetchPriority : void 0,
        referrerPolicy: typeof h.referrerPolicy == "string" ? h.referrerPolicy : void 0,
        imageSrcSet: typeof h.imageSrcSet == "string" ? h.imageSrcSet : void 0,
        imageSizes: typeof h.imageSizes == "string" ? h.imageSizes : void 0,
        media: typeof h.media == "string" ? h.media : void 0
      });
    }
  }, te.preloadModule = function(v, h) {
    if (typeof v == "string")
      if (h) {
        var R = S(h.as, h.crossOrigin);
        r.d.m(v, {
          as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
          crossOrigin: R,
          integrity: typeof h.integrity == "string" ? h.integrity : void 0
        });
      } else r.d.m(v);
  }, te.requestFormReset = function(v) {
    r.d.r(v);
  }, te.unstable_batchedUpdates = function(v, h) {
    return v(h);
  }, te.useFormState = function(v, h, R) {
    return _.H.useFormState(v, h, R);
  }, te.useFormStatus = function() {
    return _.H.useHostTransitionStatus();
  }, te.version = "19.2.3", te;
}
var Km;
function ov() {
  if (Km) return vr.exports;
  Km = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (f) {
        console.error(f);
      }
  }
  return i(), vr.exports = gy(), vr.exports;
}
var Jm;
function py() {
  if (Jm) return kn;
  Jm = 1;
  var i = yy(), f = xi(), o = ov();
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
  function v(t) {
    if (p(t) !== t)
      throw Error(r(188));
  }
  function h(t) {
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
  function R(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = R(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var x = Object.assign, j = /* @__PURE__ */ Symbol.for("react.element"), q = /* @__PURE__ */ Symbol.for("react.transitional.element"), B = /* @__PURE__ */ Symbol.for("react.portal"), Q = /* @__PURE__ */ Symbol.for("react.fragment"), Z = /* @__PURE__ */ Symbol.for("react.strict_mode"), F = /* @__PURE__ */ Symbol.for("react.profiler"), P = /* @__PURE__ */ Symbol.for("react.consumer"), K = /* @__PURE__ */ Symbol.for("react.context"), G = /* @__PURE__ */ Symbol.for("react.forward_ref"), V = /* @__PURE__ */ Symbol.for("react.suspense"), it = /* @__PURE__ */ Symbol.for("react.suspense_list"), J = /* @__PURE__ */ Symbol.for("react.memo"), Xt = /* @__PURE__ */ Symbol.for("react.lazy"), ee = /* @__PURE__ */ Symbol.for("react.activity"), Rt = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Zt = Symbol.iterator;
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
      case F:
        return "Profiler";
      case Z:
        return "StrictMode";
      case V:
        return "Suspense";
      case it:
        return "SuspenseList";
      case ee:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case B:
          return "Portal";
        case K:
          return t.displayName || "Context";
        case P:
          return (t._context.displayName || "Context") + ".Consumer";
        case G:
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
  var $t = Array.isArray, M = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Y = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $ = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, st = [], vt = -1;
  function y(t) {
    return { current: t };
  }
  function N(t) {
    0 > vt || (t.current = st[vt], st[vt] = null, vt--);
  }
  function H(t, e) {
    vt++, st[vt] = t.current, t.current = e;
  }
  var L = y(null), I = y(null), nt = y(null), mt = y(null);
  function Bt(t, e) {
    switch (H(nt, e), H(I, t), H(L, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? cm(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = cm(e), t = fm(e, t);
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
    N(L), H(L, t);
  }
  function Tt() {
    N(L), N(I), N(nt);
  }
  function tn(t) {
    t.memoizedState !== null && H(mt, t);
    var e = L.current, l = fm(e, t.type);
    e !== l && (H(I, t), H(L, l));
  }
  function iu(t) {
    I.current === t && (N(L), N(I)), mt.current === t && (N(mt), Zn._currentValue = $);
  }
  var Zi, Br;
  function Zl(t) {
    if (Zi === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        Zi = e && e[1] || "", Br = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Zi + t + Br;
  }
  var Vi = !1;
  function Ki(t, e) {
    if (!t || Vi) return "";
    Vi = !0;
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
                } catch (O) {
                  var z = O;
                }
                Reflect.construct(t, [], U);
              } else {
                try {
                  U.call();
                } catch (O) {
                  z = O;
                }
                t.call(U.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (O) {
                z = O;
              }
              (U = t()) && typeof U.catch == "function" && U.catch(function() {
              });
            }
          } catch (O) {
            if (O && z && typeof O.stack == "string")
              return [O.stack, z.stack];
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
`), T = s.split(`
`);
        for (n = a = 0; a < m.length && !m[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; n < T.length && !T[n].includes(
          "DetermineComponentFrameRoot"
        ); )
          n++;
        if (a === m.length || n === T.length)
          for (a = m.length - 1, n = T.length - 1; 1 <= a && 0 <= n && m[a] !== T[n]; )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (m[a] !== T[n]) {
            if (a !== 1 || n !== 1)
              do
                if (a--, n--, 0 > n || m[a] !== T[n]) {
                  var D = `
` + m[a].replace(" at new ", " at ");
                  return t.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", t.displayName)), D;
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      Vi = !1, Error.prepareStackTrace = l;
    }
    return (l = t ? t.displayName || t.name : "") ? Zl(l) : "";
  }
  function Xv(t, e) {
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
        return Ki(t.type, !1);
      case 11:
        return Ki(t.type.render, !1);
      case 1:
        return Ki(t.type, !0);
      case 31:
        return Zl("Activity");
      default:
        return "";
    }
  }
  function qr(t) {
    try {
      var e = "", l = null;
      do
        e += Xv(t, l), l = t, t = t.return;
      while (t);
      return e;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var Ji = Object.prototype.hasOwnProperty, $i = i.unstable_scheduleCallback, ki = i.unstable_cancelCallback, Qv = i.unstable_shouldYield, wv = i.unstable_requestPaint, de = i.unstable_now, Zv = i.unstable_getCurrentPriorityLevel, Yr = i.unstable_ImmediatePriority, Lr = i.unstable_UserBlockingPriority, cu = i.unstable_NormalPriority, Vv = i.unstable_LowPriority, Gr = i.unstable_IdlePriority, Kv = i.log, Jv = i.unstable_setDisableYieldValue, en = null, me = null;
  function hl(t) {
    if (typeof Kv == "function" && Jv(t), me && typeof me.setStrictMode == "function")
      try {
        me.setStrictMode(en, t);
      } catch {
      }
  }
  var ve = Math.clz32 ? Math.clz32 : Fv, $v = Math.log, kv = Math.LN2;
  function Fv(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - ($v(t) / kv | 0) | 0;
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
  function Wv(t, e) {
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
  function Xr() {
    var t = ou;
    return ou <<= 1, (ou & 62914560) === 0 && (ou = 4194304), t;
  }
  function Fi(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function an(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function Iv(t, e, l, a, n, u) {
    var c = t.pendingLanes;
    t.pendingLanes = l, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= l, t.entangledLanes &= l, t.errorRecoveryDisabledLanes &= l, t.shellSuspendCounter = 0;
    var s = t.entanglements, m = t.expirationTimes, T = t.hiddenUpdates;
    for (l = c & ~l; 0 < l; ) {
      var D = 31 - ve(l), U = 1 << D;
      s[D] = 0, m[D] = -1;
      var z = T[D];
      if (z !== null)
        for (T[D] = null, D = 0; D < z.length; D++) {
          var O = z[D];
          O !== null && (O.lane &= -536870913);
        }
      l &= ~U;
    }
    a !== 0 && Qr(t, a, 0), u !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(c & ~e));
  }
  function Qr(t, e, l) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var a = 31 - ve(e);
    t.entangledLanes |= e, t.entanglements[a] = t.entanglements[a] | 1073741824 | l & 261930;
  }
  function wr(t, e) {
    var l = t.entangledLanes |= e;
    for (t = t.entanglements; l; ) {
      var a = 31 - ve(l), n = 1 << a;
      n & e | t[a] & e && (t[a] |= e), l &= ~n;
    }
  }
  function Zr(t, e) {
    var l = e & -e;
    return l = (l & 42) !== 0 ? 1 : Wi(l), (l & (t.suspendedLanes | e)) !== 0 ? 0 : l;
  }
  function Wi(t) {
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
  function Ii(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Vr() {
    var t = Y.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Um(t.type));
  }
  function Kr(t, e) {
    var l = Y.p;
    try {
      return Y.p = t, e();
    } finally {
      Y.p = l;
    }
  }
  var yl = Math.random().toString(36).slice(2), kt = "__reactFiber$" + yl, ae = "__reactProps$" + yl, ha = "__reactContainer$" + yl, Pi = "__reactEvents$" + yl, Pv = "__reactListeners$" + yl, t0 = "__reactHandles$" + yl, Jr = "__reactResources$" + yl, nn = "__reactMarker$" + yl;
  function tc(t) {
    delete t[kt], delete t[ae], delete t[Pi], delete t[Pv], delete t[t0];
  }
  function ya(t) {
    var e = t[kt];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if (e = l[ha] || l[kt]) {
        if (l = e.alternate, e.child !== null || l !== null && l.child !== null)
          for (t = hm(t); t !== null; ) {
            if (l = t[kt]) return l;
            t = hm(t);
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
    var e = t[Jr];
    return e || (e = t[Jr] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function Vt(t) {
    t[nn] = !0;
  }
  var $r = /* @__PURE__ */ new Set(), kr = {};
  function Kl(t, e) {
    ba(t, e), ba(t + "Capture", e);
  }
  function ba(t, e) {
    for (kr[t] = e, t = 0; t < e.length; t++)
      $r.add(e[t]);
  }
  var e0 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Fr = {}, Wr = {};
  function l0(t) {
    return Ji.call(Wr, t) ? !0 : Ji.call(Fr, t) ? !1 : e0.test(t) ? Wr[t] = !0 : (Fr[t] = !0, !1);
  }
  function du(t, e, l) {
    if (l0(e))
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
  function Ir(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function a0(t, e, l) {
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
  function ec(t) {
    if (!t._valueTracker) {
      var e = Ir(t) ? "checked" : "value";
      t._valueTracker = a0(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function Pr(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(), a = "";
    return t && (a = Ir(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== l ? (e.setValue(t), !0) : !1;
  }
  function vu(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var n0 = /[\n"\\]/g;
  function ze(t) {
    return t.replace(
      n0,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function lc(t, e, l, a, n, u, c, s) {
    t.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? t.type = c : t.removeAttribute("type"), e != null ? c === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Te(e)) : t.value !== "" + Te(e) && (t.value = "" + Te(e)) : c !== "submit" && c !== "reset" || t.removeAttribute("value"), e != null ? ac(t, c, Te(e)) : l != null ? ac(t, c, Te(l)) : a != null && t.removeAttribute("value"), n == null && u != null && (t.defaultChecked = !!u), n != null && (t.checked = n && typeof n != "function" && typeof n != "symbol"), s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? t.name = "" + Te(s) : t.removeAttribute("name");
  }
  function to(t, e, l, a, n, u, c, s) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), e != null || l != null) {
      if (!(u !== "submit" && u !== "reset" || e != null)) {
        ec(t);
        return;
      }
      l = l != null ? "" + Te(l) : "", e = e != null ? "" + Te(e) : l, s || e === t.value || (t.value = e), t.defaultValue = e;
    }
    a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = s ? t.checked : !!a, t.defaultChecked = !!a, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (t.name = c), ec(t);
  }
  function ac(t, e, l) {
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
  function eo(t, e, l) {
    if (e != null && (e = "" + Te(e), e !== t.value && (t.value = e), l == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? "" + Te(l) : "";
  }
  function lo(t, e, l, a) {
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
    l = Te(e), t.defaultValue = l, a = t.textContent, a === l && a !== "" && a !== null && (t.value = a), ec(t);
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
  var u0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function ao(t, e, l) {
    var a = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, l) : typeof l != "number" || l === 0 || u0.has(e) ? e === "float" ? t.cssFloat = l : t[e] = ("" + l).trim() : t[e] = l + "px";
  }
  function no(t, e, l) {
    if (e != null && typeof e != "object")
      throw Error(r(62));
    if (t = t.style, l != null) {
      for (var a in l)
        !l.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
      for (var n in e)
        a = e[n], e.hasOwnProperty(n) && l[n] !== a && ao(t, n, a);
    } else
      for (var u in e)
        e.hasOwnProperty(u) && ao(t, u, e[u]);
  }
  function nc(t) {
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
  var i0 = /* @__PURE__ */ new Map([
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
  ]), c0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function hu(t) {
    return c0.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function Je() {
  }
  var uc = null;
  function ic(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Ea = null, Ta = null;
  function uo(t) {
    var e = ga(t);
    if (e && (t = e.stateNode)) {
      var l = t[ae] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (lc(
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
                lc(
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
              a = l[e], a.form === t.form && Pr(a);
          }
          break t;
        case "textarea":
          eo(t, l.value, l.defaultValue);
          break t;
        case "select":
          e = l.value, e != null && Sa(t, !!l.multiple, e, !1);
      }
    }
  }
  var cc = !1;
  function io(t, e, l) {
    if (cc) return t(e, l);
    cc = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (cc = !1, (Ea !== null || Ta !== null) && (li(), Ea && (e = Ea, t = Ta, Ta = Ea = null, uo(e), t)))
        for (e = 0; e < t.length; e++) uo(t[e]);
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
  var $e = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), fc = !1;
  if ($e)
    try {
      var fn = {};
      Object.defineProperty(fn, "passive", {
        get: function() {
          fc = !0;
        }
      }), window.addEventListener("test", fn, fn), window.removeEventListener("test", fn, fn);
    } catch {
      fc = !1;
    }
  var gl = null, rc = null, yu = null;
  function co() {
    if (yu) return yu;
    var t, e = rc, l = e.length, a, n = "value" in gl ? gl.value : gl.textContent, u = n.length;
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
  function fo() {
    return !1;
  }
  function ne(t) {
    function e(l, a, n, u, c) {
      this._reactName = l, this._targetInst = n, this.type = a, this.nativeEvent = u, this.target = c, this.currentTarget = null;
      for (var s in t)
        t.hasOwnProperty(s) && (l = t[s], this[s] = l ? l(u) : u[s]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? pu : fo, this.isPropagationStopped = fo, this;
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
  }, bu = ne(Jl), rn = x({}, Jl, { view: 0, detail: 0 }), f0 = ne(rn), oc, sc, on, Su = x({}, rn, {
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
    getModifierState: mc,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== on && (on && t.type === "mousemove" ? (oc = t.screenX - on.screenX, sc = t.screenY - on.screenY) : sc = oc = 0, on = t), oc);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : sc;
    }
  }), ro = ne(Su), r0 = x({}, Su, { dataTransfer: 0 }), o0 = ne(r0), s0 = x({}, rn, { relatedTarget: 0 }), dc = ne(s0), d0 = x({}, Jl, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), m0 = ne(d0), v0 = x({}, Jl, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), h0 = ne(v0), y0 = x({}, Jl, { data: 0 }), oo = ne(y0), g0 = {
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
  }, p0 = {
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
  }, b0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function S0(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = b0[t]) ? !!e[t] : !1;
  }
  function mc() {
    return S0;
  }
  var _0 = x({}, rn, {
    key: function(t) {
      if (t.key) {
        var e = g0[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = gu(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? p0[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: mc,
    charCode: function(t) {
      return t.type === "keypress" ? gu(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? gu(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), E0 = ne(_0), T0 = x({}, Su, {
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
  }), so = ne(T0), z0 = x({}, rn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: mc
  }), A0 = ne(z0), O0 = x({}, Jl, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), M0 = ne(O0), D0 = x({}, Su, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), C0 = ne(D0), N0 = x({}, Jl, {
    newState: 0,
    oldState: 0
  }), U0 = ne(N0), R0 = [9, 13, 27, 32], vc = $e && "CompositionEvent" in window, sn = null;
  $e && "documentMode" in document && (sn = document.documentMode);
  var x0 = $e && "TextEvent" in window && !sn, mo = $e && (!vc || sn && 8 < sn && 11 >= sn), vo = " ", ho = !1;
  function yo(t, e) {
    switch (t) {
      case "keyup":
        return R0.indexOf(e.keyCode) !== -1;
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
  function go(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var za = !1;
  function H0(t, e) {
    switch (t) {
      case "compositionend":
        return go(e);
      case "keypress":
        return e.which !== 32 ? null : (ho = !0, vo);
      case "textInput":
        return t = e.data, t === vo && ho ? null : t;
      default:
        return null;
    }
  }
  function j0(t, e) {
    if (za)
      return t === "compositionend" || !vc && yo(t, e) ? (t = co(), yu = rc = gl = null, za = !1, t) : null;
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
        return mo && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var B0 = {
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
  function po(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!B0[t.type] : e === "textarea";
  }
  function bo(t, e, l, a) {
    Ea ? Ta ? Ta.push(a) : Ta = [a] : Ea = a, e = ri(e, "onChange"), 0 < e.length && (l = new bu(
      "onChange",
      "change",
      null,
      l,
      a
    ), t.push({ event: l, listeners: e }));
  }
  var dn = null, mn = null;
  function q0(t) {
    em(t, 0);
  }
  function _u(t) {
    var e = un(t);
    if (Pr(e)) return t;
  }
  function So(t, e) {
    if (t === "change") return e;
  }
  var _o = !1;
  if ($e) {
    var hc;
    if ($e) {
      var yc = "oninput" in document;
      if (!yc) {
        var Eo = document.createElement("div");
        Eo.setAttribute("oninput", "return;"), yc = typeof Eo.oninput == "function";
      }
      hc = yc;
    } else hc = !1;
    _o = hc && (!document.documentMode || 9 < document.documentMode);
  }
  function To() {
    dn && (dn.detachEvent("onpropertychange", zo), mn = dn = null);
  }
  function zo(t) {
    if (t.propertyName === "value" && _u(mn)) {
      var e = [];
      bo(
        e,
        mn,
        t,
        ic(t)
      ), io(q0, e);
    }
  }
  function Y0(t, e, l) {
    t === "focusin" ? (To(), dn = e, mn = l, dn.attachEvent("onpropertychange", zo)) : t === "focusout" && To();
  }
  function L0(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return _u(mn);
  }
  function G0(t, e) {
    if (t === "click") return _u(e);
  }
  function X0(t, e) {
    if (t === "input" || t === "change")
      return _u(e);
  }
  function Q0(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var he = typeof Object.is == "function" ? Object.is : Q0;
  function vn(t, e) {
    if (he(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var l = Object.keys(t), a = Object.keys(e);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!Ji.call(e, n) || !he(t[n], e[n]))
        return !1;
    }
    return !0;
  }
  function Ao(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Oo(t, e) {
    var l = Ao(t);
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
      l = Ao(l);
    }
  }
  function Mo(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Mo(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function Do(t) {
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
  function gc(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var w0 = $e && "documentMode" in document && 11 >= document.documentMode, Aa = null, pc = null, hn = null, bc = !1;
  function Co(t, e, l) {
    var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    bc || Aa == null || Aa !== vu(a) || (a = Aa, "selectionStart" in a && gc(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), hn && vn(hn, a) || (hn = a, a = ri(pc, "onSelect"), 0 < a.length && (e = new bu(
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
  }, Sc = {}, No = {};
  $e && (No = document.createElement("div").style, "AnimationEvent" in window || (delete Oa.animationend.animation, delete Oa.animationiteration.animation, delete Oa.animationstart.animation), "TransitionEvent" in window || delete Oa.transitionend.transition);
  function kl(t) {
    if (Sc[t]) return Sc[t];
    if (!Oa[t]) return t;
    var e = Oa[t], l;
    for (l in e)
      if (e.hasOwnProperty(l) && l in No)
        return Sc[t] = e[l];
    return t;
  }
  var Uo = kl("animationend"), Ro = kl("animationiteration"), xo = kl("animationstart"), Z0 = kl("transitionrun"), V0 = kl("transitionstart"), K0 = kl("transitioncancel"), Ho = kl("transitionend"), jo = /* @__PURE__ */ new Map(), _c = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  _c.push("scrollEnd");
  function je(t, e) {
    jo.set(t, e), Kl(e, [t]);
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
  }, Ae = [], Ma = 0, Ec = 0;
  function Tu() {
    for (var t = Ma, e = Ec = Ma = 0; e < t; ) {
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
      u !== 0 && Bo(l, n, u);
    }
  }
  function zu(t, e, l, a) {
    Ae[Ma++] = t, Ae[Ma++] = e, Ae[Ma++] = l, Ae[Ma++] = a, Ec |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
  }
  function Tc(t, e, l, a) {
    return zu(t, e, l, a), Au(t);
  }
  function Fl(t, e) {
    return zu(t, null, null, e), Au(t);
  }
  function Bo(t, e, l) {
    t.lanes |= l;
    var a = t.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, u = t.return; u !== null; )
      u.childLanes |= l, a = u.alternate, a !== null && (a.childLanes |= l), u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (n = !0)), t = u, u = u.return;
    return t.tag === 3 ? (u = t.stateNode, n && e !== null && (n = 31 - ve(l), t = u.hiddenUpdates, a = t[n], a === null ? t[n] = [e] : a.push(e), e.lane = l | 536870912), u) : null;
  }
  function Au(t) {
    if (50 < qn)
      throw qn = 0, xf = null, Error(r(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Da = {};
  function J0(t, e, l, a) {
    this.tag = t, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ye(t, e, l, a) {
    return new J0(t, e, l, a);
  }
  function zc(t) {
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
  function qo(t, e) {
    t.flags &= 65011714;
    var l = t.alternate;
    return l === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = l.childLanes, t.lanes = l.lanes, t.child = l.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = l.memoizedProps, t.memoizedState = l.memoizedState, t.updateQueue = l.updateQueue, t.type = l.type, e = l.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function Ou(t, e, l, a, n, u) {
    var c = 0;
    if (a = t, typeof t == "function") zc(t) && (c = 1);
    else if (typeof t == "string")
      c = Ih(
        t,
        l,
        L.current
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
        case F:
          return t = ye(12, l, e, n | 2), t.elementType = F, t.lanes = u, t;
        case V:
          return t = ye(13, l, e, n), t.elementType = V, t.lanes = u, t;
        case it:
          return t = ye(19, l, e, n), t.elementType = it, t.lanes = u, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case K:
                c = 10;
                break t;
              case P:
                c = 9;
                break t;
              case G:
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
  function Wl(t, e, l, a) {
    return t = ye(7, t, a, e), t.lanes = l, t;
  }
  function Ac(t, e, l) {
    return t = ye(6, t, null, e), t.lanes = l, t;
  }
  function Yo(t) {
    var e = ye(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function Oc(t, e, l) {
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
  var Lo = /* @__PURE__ */ new WeakMap();
  function Oe(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = Lo.get(t);
      return l !== void 0 ? l : (e = {
        value: t,
        source: e,
        stack: qr(e)
      }, Lo.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: qr(e)
    };
  }
  var Ca = [], Na = 0, Mu = null, yn = 0, Me = [], De = 0, pl = null, Le = 1, Ge = "";
  function Fe(t, e) {
    Ca[Na++] = yn, Ca[Na++] = Mu, Mu = t, yn = e;
  }
  function Go(t, e, l) {
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
  function Mc(t) {
    t.return !== null && (Fe(t, 1), Go(t, 1, 0));
  }
  function Dc(t) {
    for (; t === Mu; )
      Mu = Ca[--Na], Ca[Na] = null, yn = Ca[--Na], Ca[Na] = null;
    for (; t === pl; )
      pl = Me[--De], Me[De] = null, Ge = Me[--De], Me[De] = null, Le = Me[--De], Me[De] = null;
  }
  function Xo(t, e) {
    Me[De++] = Le, Me[De++] = Ge, Me[De++] = pl, Le = e.id, Ge = e.overflow, pl = t;
  }
  var Ft = null, Mt = null, dt = !1, bl = null, Ce = !1, Cc = Error(r(519));
  function Sl(t) {
    var e = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw gn(Oe(e, t)), Cc;
  }
  function Qo(t) {
    var e = t.stateNode, l = t.type, a = t.memoizedProps;
    switch (e[kt] = t, e[ae] = a, l) {
      case "dialog":
        ft("cancel", e), ft("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        ft("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Ln.length; l++)
          ft(Ln[l], e);
        break;
      case "source":
        ft("error", e);
        break;
      case "img":
      case "image":
      case "link":
        ft("error", e), ft("load", e);
        break;
      case "details":
        ft("toggle", e);
        break;
      case "input":
        ft("invalid", e), to(
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
        ft("invalid", e);
        break;
      case "textarea":
        ft("invalid", e), lo(e, a.value, a.defaultValue, a.children);
    }
    l = a.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || e.textContent === "" + l || a.suppressHydrationWarning === !0 || um(e.textContent, l) ? (a.popover != null && (ft("beforetoggle", e), ft("toggle", e)), a.onScroll != null && ft("scroll", e), a.onScrollEnd != null && ft("scrollend", e), a.onClick != null && (e.onclick = Je), e = !0) : e = !1, e || Sl(t, !0);
  }
  function wo(t) {
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
  function Ua(t) {
    if (t !== Ft) return !1;
    if (!dt) return wo(t), dt = !0, !1;
    var e = t.tag, l;
    if ((l = e !== 3 && e !== 27) && ((l = e === 5) && (l = t.type, l = !(l !== "form" && l !== "button") || $f(t.type, t.memoizedProps)), l = !l), l && Mt && Sl(t), wo(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      Mt = vm(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      Mt = vm(t);
    } else
      e === 27 ? (e = Mt, Hl(t.type) ? (t = Pf, Pf = null, Mt = t) : Mt = e) : Mt = Ft ? Ue(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Il() {
    Mt = Ft = null, dt = !1;
  }
  function Nc() {
    var t = bl;
    return t !== null && (fe === null ? fe = t : fe.push.apply(
      fe,
      t
    ), bl = null), t;
  }
  function gn(t) {
    bl === null ? bl = [t] : bl.push(t);
  }
  var Uc = y(null), Pl = null, We = null;
  function _l(t, e, l) {
    H(Uc, e._currentValue), e._currentValue = l;
  }
  function Ie(t) {
    t._currentValue = Uc.current, N(Uc);
  }
  function Rc(t, e, l) {
    for (; t !== null; ) {
      var a = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e), t === l) break;
      t = t.return;
    }
  }
  function xc(t, e, l, a) {
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
              u.lanes |= l, s = u.alternate, s !== null && (s.lanes |= l), Rc(
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
        c.lanes |= l, u = c.alternate, u !== null && (u.lanes |= l), Rc(c, l, t), c = null;
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
  function Ra(t, e, l, a) {
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
      } else if (n === mt.current) {
        if (c = n.alternate, c === null) throw Error(r(387));
        c.memoizedState.memoizedState !== n.memoizedState.memoizedState && (t !== null ? t.push(Zn) : t = [Zn]);
      }
      n = n.return;
    }
    t !== null && xc(
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
    return Zo(Pl, t);
  }
  function Cu(t, e) {
    return Pl === null && ta(t), Zo(t, e);
  }
  function Zo(t, e) {
    var l = e._currentValue;
    if (e = { context: e, memoizedValue: l, next: null }, We === null) {
      if (t === null) throw Error(r(308));
      We = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else We = We.next = e;
    return l;
  }
  var $0 = typeof AbortController < "u" ? AbortController : function() {
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
  }, k0 = i.unstable_scheduleCallback, F0 = i.unstable_NormalPriority, qt = {
    $$typeof: K,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Hc() {
    return {
      controller: new $0(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function pn(t) {
    t.refCount--, t.refCount === 0 && k0(F0, function() {
      t.controller.abort();
    });
  }
  var bn = null, jc = 0, xa = 0, Ha = null;
  function W0(t, e) {
    if (bn === null) {
      var l = bn = [];
      jc = 0, xa = Lf(), Ha = {
        status: "pending",
        value: void 0,
        then: function(a) {
          l.push(a);
        }
      };
    }
    return jc++, e.then(Vo, Vo), e;
  }
  function Vo() {
    if (--jc === 0 && bn !== null) {
      Ha !== null && (Ha.status = "fulfilled");
      var t = bn;
      bn = null, xa = 0, Ha = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function I0(t, e) {
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
  var Ko = M.S;
  M.S = function(t, e) {
    Cd = de(), typeof e == "object" && e !== null && typeof e.then == "function" && W0(t, e), Ko !== null && Ko(t, e);
  };
  var ea = y(null);
  function Bc() {
    var t = ea.current;
    return t !== null ? t : zt.pooledCache;
  }
  function Nu(t, e) {
    e === null ? H(ea, ea.current) : H(ea, e.pool);
  }
  function Jo() {
    var t = Bc();
    return t === null ? null : { parent: qt._currentValue, pool: t };
  }
  var ja = Error(r(460)), qc = Error(r(474)), Uu = Error(r(542)), Ru = { then: function() {
  } };
  function $o(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function ko(t, e, l) {
    switch (l = t[l], l === void 0 ? t.push(e) : l !== e && (e.then(Je, Je), e = l), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, Wo(t), t;
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
            throw t = e.reason, Wo(t), t;
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
  function Fo() {
    if (aa === null) throw Error(r(459));
    var t = aa;
    return aa = null, t;
  }
  function Wo(t) {
    if (t === ja || t === Uu)
      throw Error(r(483));
  }
  var Ba = null, Sn = 0;
  function xu(t) {
    var e = Sn;
    return Sn += 1, Ba === null && (Ba = []), ko(Ba, t, e);
  }
  function _n(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function Hu(t, e) {
    throw e.$$typeof === j ? Error(r(525)) : (t = Object.prototype.toString.call(e), Error(
      r(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function Io(t) {
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
      return g === null || g.tag !== 6 ? (g = Ac(E, b.mode, C), g.return = b, g) : (g = n(g, E), g.return = b, g);
    }
    function m(b, g, E, C) {
      var k = E.type;
      return k === Q ? D(
        b,
        g,
        E.props.children,
        C,
        E.key
      ) : g !== null && (g.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Xt && la(k) === g.type) ? (g = n(g, E.props), _n(g, E), g.return = b, g) : (g = Ou(
        E.type,
        E.key,
        E.props,
        null,
        b.mode,
        C
      ), _n(g, E), g.return = b, g);
    }
    function T(b, g, E, C) {
      return g === null || g.tag !== 4 || g.stateNode.containerInfo !== E.containerInfo || g.stateNode.implementation !== E.implementation ? (g = Oc(E, b.mode, C), g.return = b, g) : (g = n(g, E.children || []), g.return = b, g);
    }
    function D(b, g, E, C, k) {
      return g === null || g.tag !== 7 ? (g = Wl(
        E,
        b.mode,
        C,
        k
      ), g.return = b, g) : (g = n(g, E), g.return = b, g);
    }
    function U(b, g, E) {
      if (typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint")
        return g = Ac(
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
          case B:
            return g = Oc(
              g,
              b.mode,
              E
            ), g.return = b, g;
          case Xt:
            return g = la(g), U(b, g, E);
        }
        if ($t(g) || jt(g))
          return g = Wl(
            g,
            b.mode,
            E,
            null
          ), g.return = b, g;
        if (typeof g.then == "function")
          return U(b, xu(g), E);
        if (g.$$typeof === K)
          return U(
            b,
            Cu(b, g),
            E
          );
        Hu(b, g);
      }
      return null;
    }
    function z(b, g, E, C) {
      var k = g !== null ? g.key : null;
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return k !== null ? null : s(b, g, "" + E, C);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case q:
            return E.key === k ? m(b, g, E, C) : null;
          case B:
            return E.key === k ? T(b, g, E, C) : null;
          case Xt:
            return E = la(E), z(b, g, E, C);
        }
        if ($t(E) || jt(E))
          return k !== null ? null : D(b, g, E, C, null);
        if (typeof E.then == "function")
          return z(
            b,
            g,
            xu(E),
            C
          );
        if (E.$$typeof === K)
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
    function O(b, g, E, C, k) {
      if (typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint")
        return b = b.get(E) || null, s(g, b, "" + C, k);
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case q:
            return b = b.get(
              C.key === null ? E : C.key
            ) || null, m(g, b, C, k);
          case B:
            return b = b.get(
              C.key === null ? E : C.key
            ) || null, T(g, b, C, k);
          case Xt:
            return C = la(C), O(
              b,
              g,
              E,
              C,
              k
            );
        }
        if ($t(C) || jt(C))
          return b = b.get(E) || null, D(g, b, C, k, null);
        if (typeof C.then == "function")
          return O(
            b,
            g,
            E,
            xu(C),
            k
          );
        if (C.$$typeof === K)
          return O(
            b,
            g,
            E,
            Cu(g, C),
            k
          );
        Hu(g, C);
      }
      return null;
    }
    function X(b, g, E, C) {
      for (var k = null, ht = null, w = g, at = g = 0, ot = null; w !== null && at < E.length; at++) {
        w.index > at ? (ot = w, w = null) : ot = w.sibling;
        var yt = z(
          b,
          w,
          E[at],
          C
        );
        if (yt === null) {
          w === null && (w = ot);
          break;
        }
        t && w && yt.alternate === null && e(b, w), g = u(yt, g, at), ht === null ? k = yt : ht.sibling = yt, ht = yt, w = ot;
      }
      if (at === E.length)
        return l(b, w), dt && Fe(b, at), k;
      if (w === null) {
        for (; at < E.length; at++)
          w = U(b, E[at], C), w !== null && (g = u(
            w,
            g,
            at
          ), ht === null ? k = w : ht.sibling = w, ht = w);
        return dt && Fe(b, at), k;
      }
      for (w = a(w); at < E.length; at++)
        ot = O(
          w,
          b,
          at,
          E[at],
          C
        ), ot !== null && (t && ot.alternate !== null && w.delete(
          ot.key === null ? at : ot.key
        ), g = u(
          ot,
          g,
          at
        ), ht === null ? k = ot : ht.sibling = ot, ht = ot);
      return t && w.forEach(function(Ll) {
        return e(b, Ll);
      }), dt && Fe(b, at), k;
    }
    function W(b, g, E, C) {
      if (E == null) throw Error(r(151));
      for (var k = null, ht = null, w = g, at = g = 0, ot = null, yt = E.next(); w !== null && !yt.done; at++, yt = E.next()) {
        w.index > at ? (ot = w, w = null) : ot = w.sibling;
        var Ll = z(b, w, yt.value, C);
        if (Ll === null) {
          w === null && (w = ot);
          break;
        }
        t && w && Ll.alternate === null && e(b, w), g = u(Ll, g, at), ht === null ? k = Ll : ht.sibling = Ll, ht = Ll, w = ot;
      }
      if (yt.done)
        return l(b, w), dt && Fe(b, at), k;
      if (w === null) {
        for (; !yt.done; at++, yt = E.next())
          yt = U(b, yt.value, C), yt !== null && (g = u(yt, g, at), ht === null ? k = yt : ht.sibling = yt, ht = yt);
        return dt && Fe(b, at), k;
      }
      for (w = a(w); !yt.done; at++, yt = E.next())
        yt = O(w, b, at, yt.value, C), yt !== null && (t && yt.alternate !== null && w.delete(yt.key === null ? at : yt.key), g = u(yt, g, at), ht === null ? k = yt : ht.sibling = yt, ht = yt);
      return t && w.forEach(function(ry) {
        return e(b, ry);
      }), dt && Fe(b, at), k;
    }
    function Et(b, g, E, C) {
      if (typeof E == "object" && E !== null && E.type === Q && E.key === null && (E = E.props.children), typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case q:
            t: {
              for (var k = E.key; g !== null; ) {
                if (g.key === k) {
                  if (k = E.type, k === Q) {
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
                  } else if (g.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Xt && la(k) === g.type) {
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
          case B:
            t: {
              for (k = E.key; g !== null; ) {
                if (g.key === k)
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
              C = Oc(E, b.mode, C), C.return = b, b = C;
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
          if (k = jt(E), typeof k != "function") throw Error(r(150));
          return E = k.call(E), W(
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
        if (E.$$typeof === K)
          return Et(
            b,
            g,
            Cu(b, E),
            C
          );
        Hu(b, E);
      }
      return typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint" ? (E = "" + E, g !== null && g.tag === 6 ? (l(b, g.sibling), C = n(g, E), C.return = b, b = C) : (l(b, g), C = Ac(E, b.mode, C), C.return = b, b = C), c(b)) : l(b, g);
    }
    return function(b, g, E, C) {
      try {
        Sn = 0;
        var k = Et(
          b,
          g,
          E,
          C
        );
        return Ba = null, k;
      } catch (w) {
        if (w === ja || w === Uu) throw w;
        var ht = ye(29, w, null, b.mode);
        return ht.lanes = C, ht.return = b, ht;
      }
    };
  }
  var na = Io(!0), Po = Io(!1), El = !1;
  function Yc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Lc(t, e) {
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
      return n === null ? e.next = e : (e.next = n.next, n.next = e), a.pending = e, e = Au(t), Bo(t, null, l), e;
    }
    return zu(t, a, e, l), Au(t);
  }
  function En(t, e, l) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (l & 4194048) !== 0)) {
      var a = e.lanes;
      a &= t.pendingLanes, l |= a, e.lanes = l, wr(t, l);
    }
  }
  function Gc(t, e) {
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
  var Xc = !1;
  function Tn() {
    if (Xc) {
      var t = Ha;
      if (t !== null) throw t;
    }
  }
  function zn(t, e, l, a) {
    Xc = !1;
    var n = t.updateQueue;
    El = !1;
    var u = n.firstBaseUpdate, c = n.lastBaseUpdate, s = n.shared.pending;
    if (s !== null) {
      n.shared.pending = null;
      var m = s, T = m.next;
      m.next = null, c === null ? u = T : c.next = T, c = m;
      var D = t.alternate;
      D !== null && (D = D.updateQueue, s = D.lastBaseUpdate, s !== c && (s === null ? D.firstBaseUpdate = T : s.next = T, D.lastBaseUpdate = m));
    }
    if (u !== null) {
      var U = n.baseState;
      c = 0, D = T = m = null, s = u;
      do {
        var z = s.lane & -536870913, O = z !== s.lane;
        if (O ? (rt & z) === z : (a & z) === z) {
          z !== 0 && z === xa && (Xc = !0), D !== null && (D = D.next = {
            lane: 0,
            tag: s.tag,
            payload: s.payload,
            callback: null,
            next: null
          });
          t: {
            var X = t, W = s;
            z = e;
            var Et = l;
            switch (W.tag) {
              case 1:
                if (X = W.payload, typeof X == "function") {
                  U = X.call(Et, U, z);
                  break t;
                }
                U = X;
                break t;
              case 3:
                X.flags = X.flags & -65537 | 128;
              case 0:
                if (X = W.payload, z = typeof X == "function" ? X.call(Et, U, z) : X, z == null) break t;
                U = x({}, U, z);
                break t;
              case 2:
                El = !0;
            }
          }
          z = s.callback, z !== null && (t.flags |= 64, O && (t.flags |= 8192), O = n.callbacks, O === null ? n.callbacks = [z] : O.push(z));
        } else
          O = {
            lane: z,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null
          }, D === null ? (T = D = O, m = U) : D = D.next = O, c |= z;
        if (s = s.next, s === null) {
          if (s = n.shared.pending, s === null)
            break;
          O = s, s = O.next, O.next = null, n.lastBaseUpdate = O, n.shared.pending = null;
        }
      } while (!0);
      D === null && (m = U), n.baseState = m, n.firstBaseUpdate = T, n.lastBaseUpdate = D, u === null && (n.shared.lanes = 0), Cl |= c, t.lanes = c, t.memoizedState = U;
    }
  }
  function ts(t, e) {
    if (typeof t != "function")
      throw Error(r(191, t));
    t.call(e);
  }
  function es(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++)
        ts(l[t], e);
  }
  var qa = y(null), ju = y(0);
  function ls(t, e) {
    t = cl, H(ju, t), H(qa, e), cl = t | e.baseLanes;
  }
  function Qc() {
    H(ju, cl), H(qa, qa.current);
  }
  function wc() {
    cl = ju.current, N(qa), N(ju);
  }
  var ge = y(null), Ne = null;
  function Al(t) {
    var e = t.alternate;
    H(xt, xt.current & 1), H(ge, t), Ne === null && (e === null || qa.current !== null || e.memoizedState !== null) && (Ne = t);
  }
  function Zc(t) {
    H(xt, xt.current), H(ge, t), Ne === null && (Ne = t);
  }
  function as(t) {
    t.tag === 22 ? (H(xt, xt.current), H(ge, t), Ne === null && (Ne = t)) : Ol();
  }
  function Ol() {
    H(xt, xt.current), H(ge, ge.current);
  }
  function pe(t) {
    N(ge), Ne === t && (Ne = null), N(xt);
  }
  var xt = y(0);
  function Bu(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || Wf(l) || If(l)))
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
  var Pe = 0, lt = null, St = null, Yt = null, qu = !1, Ya = !1, ua = !1, Yu = 0, An = 0, La = null, P0 = 0;
  function Nt() {
    throw Error(r(321));
  }
  function Vc(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!he(t[l], e[l])) return !1;
    return !0;
  }
  function Kc(t, e, l, a, n, u) {
    return Pe = u, lt = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, M.H = t === null || t.memoizedState === null ? Gs : ff, ua = !1, u = l(a, n), ua = !1, Ya && (u = us(
      e,
      l,
      a,
      n
    )), ns(t), u;
  }
  function ns(t) {
    M.H = Dn;
    var e = St !== null && St.next !== null;
    if (Pe = 0, Yt = St = lt = null, qu = !1, An = 0, La = null, e) throw Error(r(300));
    t === null || Lt || (t = t.dependencies, t !== null && Du(t) && (Lt = !0));
  }
  function us(t, e, l, a) {
    lt = t;
    var n = 0;
    do {
      if (Ya && (La = null), An = 0, Ya = !1, 25 <= n) throw Error(r(301));
      if (n += 1, Yt = St = null, t.updateQueue != null) {
        var u = t.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      M.H = Xs, u = e(l, a);
    } while (Ya);
    return u;
  }
  function th() {
    var t = M.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? On(e) : e, t = t.useState()[0], (St !== null ? St.memoizedState : null) !== t && (lt.flags |= 1024), e;
  }
  function Jc() {
    var t = Yu !== 0;
    return Yu = 0, t;
  }
  function $c(t, e, l) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~l;
  }
  function kc(t) {
    if (qu) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      qu = !1;
    }
    Pe = 0, Yt = St = lt = null, Ya = !1, An = Yu = 0, La = null;
  }
  function le() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Yt === null ? lt.memoizedState = Yt = t : Yt = Yt.next = t, Yt;
  }
  function Ht() {
    if (St === null) {
      var t = lt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = St.next;
    var e = Yt === null ? lt.memoizedState : Yt.next;
    if (e !== null)
      Yt = e, St = t;
    else {
      if (t === null)
        throw lt.alternate === null ? Error(r(467)) : Error(r(310));
      St = t, t = {
        memoizedState: St.memoizedState,
        baseState: St.baseState,
        baseQueue: St.baseQueue,
        queue: St.queue,
        next: null
      }, Yt === null ? lt.memoizedState = Yt = t : Yt = Yt.next = t;
    }
    return Yt;
  }
  function Lu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function On(t) {
    var e = An;
    return An += 1, La === null && (La = []), t = ko(La, t, e), e = lt, (Yt === null ? e.memoizedState : Yt.next) === null && (e = e.alternate, M.H = e === null || e.memoizedState === null ? Gs : ff), t;
  }
  function Gu(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return On(t);
      if (t.$$typeof === K) return Wt(t);
    }
    throw Error(r(438, String(t)));
  }
  function Fc(t) {
    var e = null, l = lt.updateQueue;
    if (l !== null && (e = l.memoCache), e == null) {
      var a = lt.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (e = {
        data: a.data.map(function(n) {
          return n.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), l === null && (l = Lu(), lt.updateQueue = l), l.memoCache = e, l = e.data[e.index], l === void 0)
      for (l = e.data[e.index] = Array(t), a = 0; a < t; a++)
        l[a] = Rt;
    return e.index++, l;
  }
  function tl(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Xu(t) {
    var e = Ht();
    return Wc(e, St, t);
  }
  function Wc(t, e, l) {
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
      var s = c = null, m = null, T = e, D = !1;
      do {
        var U = T.lane & -536870913;
        if (U !== T.lane ? (rt & U) === U : (Pe & U) === U) {
          var z = T.revertLane;
          if (z === 0)
            m !== null && (m = m.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: T.action,
              hasEagerState: T.hasEagerState,
              eagerState: T.eagerState,
              next: null
            }), U === xa && (D = !0);
          else if ((Pe & z) === z) {
            T = T.next, z === xa && (D = !0);
            continue;
          } else
            U = {
              lane: 0,
              revertLane: T.revertLane,
              gesture: null,
              action: T.action,
              hasEagerState: T.hasEagerState,
              eagerState: T.eagerState,
              next: null
            }, m === null ? (s = m = U, c = u) : m = m.next = U, lt.lanes |= z, Cl |= z;
          U = T.action, ua && l(u, U), u = T.hasEagerState ? T.eagerState : l(u, U);
        } else
          z = {
            lane: U,
            revertLane: T.revertLane,
            gesture: T.gesture,
            action: T.action,
            hasEagerState: T.hasEagerState,
            eagerState: T.eagerState,
            next: null
          }, m === null ? (s = m = z, c = u) : m = m.next = z, lt.lanes |= U, Cl |= U;
        T = T.next;
      } while (T !== null && T !== e);
      if (m === null ? c = u : m.next = s, !he(u, t.memoizedState) && (Lt = !0, D && (l = Ha, l !== null)))
        throw l;
      t.memoizedState = u, t.baseState = c, t.baseQueue = m, a.lastRenderedState = u;
    }
    return n === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function Ic(t) {
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
  function is(t, e, l) {
    var a = lt, n = Ht(), u = dt;
    if (u) {
      if (l === void 0) throw Error(r(407));
      l = l();
    } else l = e();
    var c = !he(
      (St || n).memoizedState,
      l
    );
    if (c && (n.memoizedState = l, Lt = !0), n = n.queue, ef(rs.bind(null, a, n, t), [
      t
    ]), n.getSnapshot !== e || c || Yt !== null && Yt.memoizedState.tag & 1) {
      if (a.flags |= 2048, Ga(
        9,
        { destroy: void 0 },
        fs.bind(
          null,
          a,
          n,
          l,
          e
        ),
        null
      ), zt === null) throw Error(r(349));
      u || (Pe & 127) !== 0 || cs(a, e, l);
    }
    return l;
  }
  function cs(t, e, l) {
    t.flags |= 16384, t = { getSnapshot: e, value: l }, e = lt.updateQueue, e === null ? (e = Lu(), lt.updateQueue = e, e.stores = [t]) : (l = e.stores, l === null ? e.stores = [t] : l.push(t));
  }
  function fs(t, e, l, a) {
    e.value = l, e.getSnapshot = a, os(e) && ss(t);
  }
  function rs(t, e, l) {
    return l(function() {
      os(e) && ss(t);
    });
  }
  function os(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !he(t, l);
    } catch {
      return !0;
    }
  }
  function ss(t) {
    var e = Fl(t, 2);
    e !== null && re(e, t, 2);
  }
  function Pc(t) {
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
  function ds(t, e, l, a) {
    return t.baseState = l, Wc(
      t,
      St,
      typeof a == "function" ? a : tl
    );
  }
  function eh(t, e, l, a, n) {
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
      M.T !== null ? l(!0) : u.isTransition = !1, a(u), l = e.pending, l === null ? (u.next = e.pending = u, ms(e, u)) : (u.next = l.next, e.pending = l.next = u);
    }
  }
  function ms(t, e) {
    var l = e.action, a = e.payload, n = t.state;
    if (e.isTransition) {
      var u = M.T, c = {};
      M.T = c;
      try {
        var s = l(n, a), m = M.S;
        m !== null && m(c, s), vs(t, e, s);
      } catch (T) {
        tf(t, e, T);
      } finally {
        u !== null && c.types !== null && (u.types = c.types), M.T = u;
      }
    } else
      try {
        u = l(n, a), vs(t, e, u);
      } catch (T) {
        tf(t, e, T);
      }
  }
  function vs(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(a) {
        hs(t, e, a);
      },
      function(a) {
        return tf(t, e, a);
      }
    ) : hs(t, e, l);
  }
  function hs(t, e, l) {
    e.status = "fulfilled", e.value = l, ys(e), t.state = l, e = t.pending, e !== null && (l = e.next, l === e ? t.pending = null : (l = l.next, e.next = l, ms(t, l)));
  }
  function tf(t, e, l) {
    var a = t.pending;
    if (t.pending = null, a !== null) {
      a = a.next;
      do
        e.status = "rejected", e.reason = l, ys(e), e = e.next;
      while (e !== a);
    }
    t.action = null;
  }
  function ys(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function gs(t, e) {
    return e;
  }
  function ps(t, e) {
    if (dt) {
      var l = zt.formState;
      if (l !== null) {
        t: {
          var a = lt;
          if (dt) {
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
      lastRenderedReducer: gs,
      lastRenderedState: e
    }, l.queue = a, l = qs.bind(
      null,
      lt,
      a
    ), a.dispatch = l, a = Pc(!1), u = cf.bind(
      null,
      lt,
      !1,
      a.queue
    ), a = le(), n = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, a.queue = n, l = eh.bind(
      null,
      lt,
      n,
      u,
      l
    ), n.dispatch = l, a.memoizedState = t, [e, l, !1];
  }
  function bs(t) {
    var e = Ht();
    return Ss(e, St, t);
  }
  function Ss(t, e, l) {
    if (e = Wc(
      t,
      e,
      gs
    )[0], t = Xu(tl)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var a = On(e);
      } catch (c) {
        throw c === ja ? Uu : c;
      }
    else a = e;
    e = Ht();
    var n = e.queue, u = n.dispatch;
    return l !== e.memoizedState && (lt.flags |= 2048, Ga(
      9,
      { destroy: void 0 },
      lh.bind(null, n, l),
      null
    )), [a, u, t];
  }
  function lh(t, e) {
    t.action = e;
  }
  function _s(t) {
    var e = Ht(), l = St;
    if (l !== null)
      return Ss(e, l, t);
    Ht(), e = e.memoizedState, l = Ht();
    var a = l.queue.dispatch;
    return l.memoizedState = t, [e, a, !1];
  }
  function Ga(t, e, l, a) {
    return t = { tag: t, create: l, deps: a, inst: e, next: null }, e = lt.updateQueue, e === null && (e = Lu(), lt.updateQueue = e), l = e.lastEffect, l === null ? e.lastEffect = t.next = t : (a = l.next, l.next = t, t.next = a, e.lastEffect = t), t;
  }
  function Es() {
    return Ht().memoizedState;
  }
  function Qu(t, e, l, a) {
    var n = le();
    lt.flags |= t, n.memoizedState = Ga(
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
    St !== null && a !== null && Vc(a, St.memoizedState.deps) ? n.memoizedState = Ga(e, u, l, a) : (lt.flags |= t, n.memoizedState = Ga(
      1 | e,
      u,
      l,
      a
    ));
  }
  function Ts(t, e) {
    Qu(8390656, 8, t, e);
  }
  function ef(t, e) {
    wu(2048, 8, t, e);
  }
  function ah(t) {
    lt.flags |= 4;
    var e = lt.updateQueue;
    if (e === null)
      e = Lu(), lt.updateQueue = e, e.events = [t];
    else {
      var l = e.events;
      l === null ? e.events = [t] : l.push(t);
    }
  }
  function zs(t) {
    var e = Ht().memoizedState;
    return ah({ ref: e, nextImpl: t }), function() {
      if ((gt & 2) !== 0) throw Error(r(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function As(t, e) {
    return wu(4, 2, t, e);
  }
  function Os(t, e) {
    return wu(4, 4, t, e);
  }
  function Ms(t, e) {
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
  function Ds(t, e, l) {
    l = l != null ? l.concat([t]) : null, wu(4, 4, Ms.bind(null, e, t), l);
  }
  function lf() {
  }
  function Cs(t, e) {
    var l = Ht();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    return e !== null && Vc(e, a[1]) ? a[0] : (l.memoizedState = [t, e], t);
  }
  function Ns(t, e) {
    var l = Ht();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    if (e !== null && Vc(e, a[1]))
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
  function af(t, e, l) {
    return l === void 0 || (Pe & 1073741824) !== 0 && (rt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = l, t = Ud(), lt.lanes |= t, Cl |= t, l);
  }
  function Us(t, e, l, a) {
    return he(l, e) ? l : qa.current !== null ? (t = af(t, l, a), he(t, e) || (Lt = !0), t) : (Pe & 42) === 0 || (Pe & 1073741824) !== 0 && (rt & 261930) === 0 ? (Lt = !0, t.memoizedState = l) : (t = Ud(), lt.lanes |= t, Cl |= t, e);
  }
  function Rs(t, e, l, a, n) {
    var u = Y.p;
    Y.p = u !== 0 && 8 > u ? u : 8;
    var c = M.T, s = {};
    M.T = s, cf(t, !1, e, l);
    try {
      var m = n(), T = M.S;
      if (T !== null && T(s, m), m !== null && typeof m == "object" && typeof m.then == "function") {
        var D = I0(
          m,
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
    } catch (U) {
      Mn(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: U },
        _e()
      );
    } finally {
      Y.p = u, c !== null && s.types !== null && (c.types = s.types), M.T = c;
    }
  }
  function nh() {
  }
  function nf(t, e, l, a) {
    if (t.tag !== 5) throw Error(r(476));
    var n = xs(t).queue;
    Rs(
      t,
      n,
      e,
      $,
      l === null ? nh : function() {
        return Hs(t), l(a);
      }
    );
  }
  function xs(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: $,
      baseState: $,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: tl,
        lastRenderedState: $
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
  function Hs(t) {
    var e = xs(t);
    e.next === null && (e = t.alternate.memoizedState), Mn(
      t,
      e.next.queue,
      {},
      _e()
    );
  }
  function uf() {
    return Wt(Zn);
  }
  function js() {
    return Ht().memoizedState;
  }
  function Bs() {
    return Ht().memoizedState;
  }
  function uh(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = _e();
          t = Tl(l);
          var a = zl(e, t, l);
          a !== null && (re(a, e, l), En(a, e, l)), e = { cache: Hc() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function ih(t, e, l) {
    var a = _e();
    l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Zu(t) ? Ys(e, l) : (l = Tc(t, e, l, a), l !== null && (re(l, t, a), Ls(l, e, a)));
  }
  function qs(t, e, l) {
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
    if (Zu(t)) Ys(e, n);
    else {
      var u = t.alternate;
      if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer, u !== null))
        try {
          var c = e.lastRenderedState, s = u(c, l);
          if (n.hasEagerState = !0, n.eagerState = s, he(s, c))
            return zu(t, e, n, 0), zt === null && Tu(), !1;
        } catch {
        }
      if (l = Tc(t, e, n, a), l !== null)
        return re(l, t, a), Ls(l, e, a), !0;
    }
    return !1;
  }
  function cf(t, e, l, a) {
    if (a = {
      lane: 2,
      revertLane: Lf(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Zu(t)) {
      if (e) throw Error(r(479));
    } else
      e = Tc(
        t,
        l,
        a,
        2
      ), e !== null && re(e, t, 2);
  }
  function Zu(t) {
    var e = t.alternate;
    return t === lt || e !== null && e === lt;
  }
  function Ys(t, e) {
    Ya = qu = !0;
    var l = t.pending;
    l === null ? e.next = e : (e.next = l.next, l.next = e), t.pending = e;
  }
  function Ls(t, e, l) {
    if ((l & 4194048) !== 0) {
      var a = e.lanes;
      a &= t.pendingLanes, l |= a, e.lanes = l, wr(t, l);
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
  var Gs = {
    readContext: Wt,
    use: Gu,
    useCallback: function(t, e) {
      return le().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: Wt,
    useEffect: Ts,
    useImperativeHandle: function(t, e, l) {
      l = l != null ? l.concat([t]) : null, Qu(
        4194308,
        4,
        Ms.bind(null, e, t),
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
      }, a.queue = t, t = t.dispatch = ih.bind(
        null,
        lt,
        t
      ), [a.memoizedState, t];
    },
    useRef: function(t) {
      var e = le();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = Pc(t);
      var e = t.queue, l = qs.bind(null, lt, e);
      return e.dispatch = l, [t.memoizedState, l];
    },
    useDebugValue: lf,
    useDeferredValue: function(t, e) {
      var l = le();
      return af(l, t, e);
    },
    useTransition: function() {
      var t = Pc(!1);
      return t = Rs.bind(
        null,
        lt,
        t.queue,
        !0,
        !1
      ), le().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, l) {
      var a = lt, n = le();
      if (dt) {
        if (l === void 0)
          throw Error(r(407));
        l = l();
      } else {
        if (l = e(), zt === null)
          throw Error(r(349));
        (rt & 127) !== 0 || cs(a, e, l);
      }
      n.memoizedState = l;
      var u = { value: l, getSnapshot: e };
      return n.queue = u, Ts(rs.bind(null, a, u, t), [
        t
      ]), a.flags |= 2048, Ga(
        9,
        { destroy: void 0 },
        fs.bind(
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
      if (dt) {
        var l = Ge, a = Le;
        l = (a & ~(1 << 32 - ve(a) - 1)).toString(32) + l, e = "_" + e + "R_" + l, l = Yu++, 0 < l && (e += "H" + l.toString(32)), e += "_";
      } else
        l = P0++, e = "_" + e + "r_" + l.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: uf,
    useFormState: ps,
    useActionState: ps,
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
      return e.queue = l, e = cf.bind(
        null,
        lt,
        !0,
        l
      ), l.dispatch = e, [t, e];
    },
    useMemoCache: Fc,
    useCacheRefresh: function() {
      return le().memoizedState = uh.bind(
        null,
        lt
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
  }, ff = {
    readContext: Wt,
    use: Gu,
    useCallback: Cs,
    useContext: Wt,
    useEffect: ef,
    useImperativeHandle: Ds,
    useInsertionEffect: As,
    useLayoutEffect: Os,
    useMemo: Ns,
    useReducer: Xu,
    useRef: Es,
    useState: function() {
      return Xu(tl);
    },
    useDebugValue: lf,
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
    useSyncExternalStore: is,
    useId: js,
    useHostTransitionStatus: uf,
    useFormState: bs,
    useActionState: bs,
    useOptimistic: function(t, e) {
      var l = Ht();
      return ds(l, St, t, e);
    },
    useMemoCache: Fc,
    useCacheRefresh: Bs
  };
  ff.useEffectEvent = zs;
  var Xs = {
    readContext: Wt,
    use: Gu,
    useCallback: Cs,
    useContext: Wt,
    useEffect: ef,
    useImperativeHandle: Ds,
    useInsertionEffect: As,
    useLayoutEffect: Os,
    useMemo: Ns,
    useReducer: Ic,
    useRef: Es,
    useState: function() {
      return Ic(tl);
    },
    useDebugValue: lf,
    useDeferredValue: function(t, e) {
      var l = Ht();
      return St === null ? af(l, t, e) : Us(
        l,
        St.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Ic(tl)[0], e = Ht().memoizedState;
      return [
        typeof t == "boolean" ? t : On(t),
        e
      ];
    },
    useSyncExternalStore: is,
    useId: js,
    useHostTransitionStatus: uf,
    useFormState: _s,
    useActionState: _s,
    useOptimistic: function(t, e) {
      var l = Ht();
      return St !== null ? ds(l, St, t, e) : (l.baseState = t, [t, l.queue.dispatch]);
    },
    useMemoCache: Fc,
    useCacheRefresh: Bs
  };
  Xs.useEffectEvent = zs;
  function rf(t, e, l, a) {
    e = t.memoizedState, l = l(a, e), l = l == null ? e : x({}, e, l), t.memoizedState = l, t.lanes === 0 && (t.updateQueue.baseState = l);
  }
  var of = {
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
  function Qs(t, e, l, a, n, u, c) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, u, c) : e.prototype && e.prototype.isPureReactComponent ? !vn(l, a) || !vn(n, u) : !0;
  }
  function ws(t, e, l, a) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(l, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(l, a), e.state !== t && of.enqueueReplaceState(e, e.state, null);
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
  function Zs(t) {
    Eu(t);
  }
  function Vs(t) {
    console.error(t);
  }
  function Ks(t) {
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
  function Js(t, e, l) {
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
  function sf(t, e, l) {
    return l = Tl(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      Vu(t, e);
    }, l;
  }
  function $s(t) {
    return t = Tl(t), t.tag = 3, t;
  }
  function ks(t, e, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = a.value;
      t.payload = function() {
        return n(u);
      }, t.callback = function() {
        Js(e, l, a);
      };
    }
    var c = l.stateNode;
    c !== null && typeof c.componentDidCatch == "function" && (t.callback = function() {
      Js(e, l, a), typeof n != "function" && (Nl === null ? Nl = /* @__PURE__ */ new Set([this]) : Nl.add(this));
      var s = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: s !== null ? s : ""
      });
    });
  }
  function ch(t, e, l, a, n) {
    if (l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (e = l.alternate, e !== null && Ra(
        e,
        l,
        n,
        !0
      ), l = ge.current, l !== null) {
        switch (l.tag) {
          case 31:
          case 13:
            return Ne === null ? ai() : l.alternate === null && Ut === 0 && (Ut = 3), l.flags &= -257, l.flags |= 65536, l.lanes = n, a === Ru ? l.flags |= 16384 : (e = l.updateQueue, e === null ? l.updateQueue = /* @__PURE__ */ new Set([a]) : e.add(a), Bf(t, a, n)), !1;
          case 22:
            return l.flags |= 65536, a === Ru ? l.flags |= 16384 : (e = l.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, l.updateQueue = e) : (l = e.retryQueue, l === null ? e.retryQueue = /* @__PURE__ */ new Set([a]) : l.add(a)), Bf(t, a, n)), !1;
        }
        throw Error(r(435, l.tag));
      }
      return Bf(t, a, n), ai(), !1;
    }
    if (dt)
      return e = ge.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = n, a !== Cc && (t = Error(r(422), { cause: a }), gn(Oe(t, l)))) : (a !== Cc && (e = Error(r(423), {
        cause: a
      }), gn(
        Oe(e, l)
      )), t = t.current.alternate, t.flags |= 65536, n &= -n, t.lanes |= n, a = Oe(a, l), n = sf(
        t.stateNode,
        a,
        n
      ), Gc(t, n), Ut !== 4 && (Ut = 2)), !1;
    var u = Error(r(520), { cause: a });
    if (u = Oe(u, l), Bn === null ? Bn = [u] : Bn.push(u), Ut !== 4 && (Ut = 2), e === null) return !0;
    a = Oe(a, l), l = e;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, t = n & -n, l.lanes |= t, t = sf(l.stateNode, a, t), Gc(l, t), !1;
        case 1:
          if (e = l.type, u = l.stateNode, (l.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Nl === null || !Nl.has(u))))
            return l.flags |= 65536, n &= -n, l.lanes |= n, n = $s(n), ks(
              n,
              t,
              l,
              a
            ), Gc(l, n), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var df = Error(r(461)), Lt = !1;
  function It(t, e, l, a) {
    e.child = t === null ? Po(e, null, l, a) : na(
      e,
      t.child,
      l,
      a
    );
  }
  function Fs(t, e, l, a, n) {
    l = l.render;
    var u = e.ref;
    if ("ref" in a) {
      var c = {};
      for (var s in a)
        s !== "ref" && (c[s] = a[s]);
    } else c = a;
    return ta(e), a = Kc(
      t,
      e,
      l,
      c,
      u,
      n
    ), s = Jc(), t !== null && !Lt ? ($c(t, e, n), el(t, e, n)) : (dt && s && Mc(e), e.flags |= 1, It(t, e, a, n), e.child);
  }
  function Ws(t, e, l, a, n) {
    if (t === null) {
      var u = l.type;
      return typeof u == "function" && !zc(u) && u.defaultProps === void 0 && l.compare === null ? (e.tag = 15, e.type = u, Is(
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
    if (u = t.child, !Sf(t, n)) {
      var c = u.memoizedProps;
      if (l = l.compare, l = l !== null ? l : vn, l(c, a) && t.ref === e.ref)
        return el(t, e, n);
    }
    return e.flags |= 1, t = ke(u, a), t.ref = e.ref, t.return = e, e.child = t;
  }
  function Is(t, e, l, a, n) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (vn(u, a) && t.ref === e.ref)
        if (Lt = !1, e.pendingProps = a = u, Sf(t, n))
          (t.flags & 131072) !== 0 && (Lt = !0);
        else
          return e.lanes = t.lanes, el(t, e, n);
    }
    return mf(
      t,
      e,
      l,
      a,
      n
    );
  }
  function Ps(t, e, l, a) {
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
        return td(
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
        ), u !== null ? ls(e, u) : Qc(), as(e);
      else
        return a = e.lanes = 536870912, td(
          t,
          e,
          u !== null ? u.baseLanes | l : l,
          l,
          a
        );
    } else
      u !== null ? (Nu(e, u.cachePool), ls(e, u), Ol(), e.memoizedState = null) : (t !== null && Nu(e, null), Qc(), Ol());
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
  function td(t, e, l, a, n) {
    var u = Bc();
    return u = u === null ? null : { parent: qt._currentValue, pool: u }, e.memoizedState = {
      baseLanes: l,
      cachePool: u
    }, t !== null && Nu(e, null), Qc(), as(e), t !== null && Ra(t, e, a, !0), e.childLanes = n, null;
  }
  function Ku(t, e) {
    return e = $u(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function ed(t, e, l) {
    return na(e, t.child, null, l), t = Ku(e, e.pendingProps), t.flags |= 2, pe(e), e.memoizedState = null, t;
  }
  function fh(t, e, l) {
    var a = e.pendingProps, n = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (dt) {
        if (a.mode === "hidden")
          return t = Ku(e, a), e.lanes = 536870912, Cn(null, t);
        if (Zc(e), (t = Mt) ? (t = mm(
          t,
          Ce
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: pl !== null ? { id: Le, overflow: Ge } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Yo(t), l.return = e, e.child = l, Ft = e, Mt = null)) : t = null, t === null) throw Sl(e);
        return e.lanes = 536870912, null;
      }
      return Ku(e, a);
    }
    var u = t.memoizedState;
    if (u !== null) {
      var c = u.dehydrated;
      if (Zc(e), n)
        if (e.flags & 256)
          e.flags &= -257, e = ed(
            t,
            e,
            l
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(r(558));
      else if (Lt || Ra(t, e, l, !1), n = (l & t.childLanes) !== 0, Lt || n) {
        if (a = zt, a !== null && (c = Zr(a, l), c !== 0 && c !== u.retryLane))
          throw u.retryLane = c, Fl(t, c), re(a, t, c), df;
        ai(), e = ed(
          t,
          e,
          l
        );
      } else
        t = u.treeContext, Mt = Ue(c.nextSibling), Ft = e, dt = !0, bl = null, Ce = !1, t !== null && Xo(e, t), e = Ku(e, a), e.flags |= 4096;
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
  function mf(t, e, l, a, n) {
    return ta(e), l = Kc(
      t,
      e,
      l,
      a,
      void 0,
      n
    ), a = Jc(), t !== null && !Lt ? ($c(t, e, n), el(t, e, n)) : (dt && a && Mc(e), e.flags |= 1, It(t, e, l, n), e.child);
  }
  function ld(t, e, l, a, n, u) {
    return ta(e), e.updateQueue = null, l = us(
      e,
      a,
      l,
      n
    ), ns(t), a = Jc(), t !== null && !Lt ? ($c(t, e, u), el(t, e, u)) : (dt && a && Mc(e), e.flags |= 1, It(t, e, l, u), e.child);
  }
  function ad(t, e, l, a, n) {
    if (ta(e), e.stateNode === null) {
      var u = Da, c = l.contextType;
      typeof c == "object" && c !== null && (u = Wt(c)), u = new l(a, u), e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = of, e.stateNode = u, u._reactInternals = e, u = e.stateNode, u.props = a, u.state = e.memoizedState, u.refs = {}, Yc(e), c = l.contextType, u.context = typeof c == "object" && c !== null ? Wt(c) : Da, u.state = e.memoizedState, c = l.getDerivedStateFromProps, typeof c == "function" && (rf(
        e,
        l,
        c,
        a
      ), u.state = e.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (c = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), c !== u.state && of.enqueueReplaceState(u, u.state, null), zn(e, a, u, n), Tn(), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = !0;
    } else if (t === null) {
      u = e.stateNode;
      var s = e.memoizedProps, m = ia(l, s);
      u.props = m;
      var T = u.context, D = l.contextType;
      c = Da, typeof D == "object" && D !== null && (c = Wt(D));
      var U = l.getDerivedStateFromProps;
      D = typeof U == "function" || typeof u.getSnapshotBeforeUpdate == "function", s = e.pendingProps !== s, D || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (s || T !== c) && ws(
        e,
        u,
        a,
        c
      ), El = !1;
      var z = e.memoizedState;
      u.state = z, zn(e, a, u, n), Tn(), T = e.memoizedState, s || z !== T || El ? (typeof U == "function" && (rf(
        e,
        l,
        U,
        a
      ), T = e.memoizedState), (m = El || Qs(
        e,
        l,
        m,
        a,
        z,
        T,
        c
      )) ? (D || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = T), u.props = a, u.state = T, u.context = c, a = m) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = !1);
    } else {
      u = e.stateNode, Lc(t, e), c = e.memoizedProps, D = ia(l, c), u.props = D, U = e.pendingProps, z = u.context, T = l.contextType, m = Da, typeof T == "object" && T !== null && (m = Wt(T)), s = l.getDerivedStateFromProps, (T = typeof s == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (c !== U || z !== m) && ws(
        e,
        u,
        a,
        m
      ), El = !1, z = e.memoizedState, u.state = z, zn(e, a, u, n), Tn();
      var O = e.memoizedState;
      c !== U || z !== O || El || t !== null && t.dependencies !== null && Du(t.dependencies) ? (typeof s == "function" && (rf(
        e,
        l,
        s,
        a
      ), O = e.memoizedState), (D = El || Qs(
        e,
        l,
        D,
        a,
        z,
        O,
        m
      ) || t !== null && t.dependencies !== null && Du(t.dependencies)) ? (T || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, O, m), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        a,
        O,
        m
      )), typeof u.componentDidUpdate == "function" && (e.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || c === t.memoizedProps && z === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || c === t.memoizedProps && z === t.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = O), u.props = a, u.state = O, u.context = m, a = D) : (typeof u.componentDidUpdate != "function" || c === t.memoizedProps && z === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || c === t.memoizedProps && z === t.memoizedState || (e.flags |= 1024), a = !1);
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
  function nd(t, e, l, a) {
    return Il(), e.flags |= 256, It(t, e, l, a), e.child;
  }
  var vf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function hf(t) {
    return { baseLanes: t, cachePool: Jo() };
  }
  function yf(t, e, l) {
    return t = t !== null ? t.childLanes & ~l : 0, e && (t |= Se), t;
  }
  function ud(t, e, l) {
    var a = e.pendingProps, n = !1, u = (e.flags & 128) !== 0, c;
    if ((c = u) || (c = t !== null && t.memoizedState === null ? !1 : (xt.current & 2) !== 0), c && (n = !0, e.flags &= -129), c = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (dt) {
        if (n ? Al(e) : Ol(), (t = Mt) ? (t = mm(
          t,
          Ce
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: pl !== null ? { id: Le, overflow: Ge } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Yo(t), l.return = e, e.child = l, Ft = e, Mt = null)) : t = null, t === null) throw Sl(e);
        return If(t) ? e.lanes = 32 : e.lanes = 536870912, null;
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
      ), s.return = e, a.return = e, s.sibling = a, e.child = s, a = e.child, a.memoizedState = hf(l), a.childLanes = yf(
        t,
        c,
        l
      ), e.memoizedState = vf, Cn(null, a)) : (Al(e), gf(e, s));
    }
    var m = t.memoizedState;
    if (m !== null && (s = m.dehydrated, s !== null)) {
      if (u)
        e.flags & 256 ? (Al(e), e.flags &= -257, e = pf(
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
        ), a = e.child, a.memoizedState = hf(l), a.childLanes = yf(
          t,
          c,
          l
        ), e.memoizedState = vf, e = Cn(null, a));
      else if (Al(e), If(s)) {
        if (c = s.nextSibling && s.nextSibling.dataset, c) var T = c.dgst;
        c = T, a = Error(r(419)), a.stack = "", a.digest = c, gn({ value: a, source: null, stack: null }), e = pf(
          t,
          e,
          l
        );
      } else if (Lt || Ra(t, e, l, !1), c = (l & t.childLanes) !== 0, Lt || c) {
        if (c = zt, c !== null && (a = Zr(c, l), a !== 0 && a !== m.retryLane))
          throw m.retryLane = a, Fl(t, a), re(c, t, a), df;
        Wf(s) || ai(), e = pf(
          t,
          e,
          l
        );
      } else
        Wf(s) ? (e.flags |= 192, e.child = t.child, e = null) : (t = m.treeContext, Mt = Ue(
          s.nextSibling
        ), Ft = e, dt = !0, bl = null, Ce = !1, t !== null && Xo(e, t), e = gf(
          e,
          a.children
        ), e.flags |= 4096);
      return e;
    }
    return n ? (Ol(), s = a.fallback, n = e.mode, m = t.child, T = m.sibling, a = ke(m, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = m.subtreeFlags & 65011712, T !== null ? s = ke(
      T,
      s
    ) : (s = Wl(
      s,
      n,
      l,
      null
    ), s.flags |= 2), s.return = e, a.return = e, a.sibling = s, e.child = a, Cn(null, a), a = e.child, s = t.child.memoizedState, s === null ? s = hf(l) : (n = s.cachePool, n !== null ? (m = qt._currentValue, n = n.parent !== m ? { parent: m, pool: m } : n) : n = Jo(), s = {
      baseLanes: s.baseLanes | l,
      cachePool: n
    }), a.memoizedState = s, a.childLanes = yf(
      t,
      c,
      l
    ), e.memoizedState = vf, Cn(t.child, a)) : (Al(e), l = t.child, t = l.sibling, l = ke(l, {
      mode: "visible",
      children: a.children
    }), l.return = e, l.sibling = null, t !== null && (c = e.deletions, c === null ? (e.deletions = [t], e.flags |= 16) : c.push(t)), e.child = l, e.memoizedState = null, l);
  }
  function gf(t, e) {
    return e = $u(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function $u(t, e) {
    return t = ye(22, t, null, e), t.lanes = 0, t;
  }
  function pf(t, e, l) {
    return na(e, t.child, null, l), t = gf(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function id(t, e, l) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), Rc(t.return, e, l);
  }
  function bf(t, e, l, a, n, u) {
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
  function cd(t, e, l) {
    var a = e.pendingProps, n = a.revealOrder, u = a.tail;
    a = a.children;
    var c = xt.current, s = (c & 2) !== 0;
    if (s ? (c = c & 1 | 2, e.flags |= 128) : c &= 1, H(xt, c), It(t, e, a, l), a = dt ? yn : 0, !s && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && id(t, l, e);
        else if (t.tag === 19)
          id(t, l, e);
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
        l = n, l === null ? (n = e.child, e.child = null) : (n = l.sibling, l.sibling = null), bf(
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
        bf(
          e,
          !0,
          l,
          null,
          u,
          a
        );
        break;
      case "together":
        bf(
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
        if (Ra(
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
  function Sf(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Du(t)));
  }
  function rh(t, e, l) {
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
          return e.flags |= 128, Zc(e), null;
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (Al(e), e.flags |= 128, null) : (l & e.child.childLanes) !== 0 ? ud(t, e, l) : (Al(e), t = el(
            t,
            e,
            l
          ), t !== null ? t.sibling : null);
        Al(e);
        break;
      case 19:
        var n = (t.flags & 128) !== 0;
        if (a = (l & e.childLanes) !== 0, a || (Ra(
          t,
          e,
          l,
          !1
        ), a = (l & e.childLanes) !== 0), n) {
          if (a)
            return cd(
              t,
              e,
              l
            );
          e.flags |= 128;
        }
        if (n = e.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), H(xt, xt.current), a) break;
        return null;
      case 22:
        return e.lanes = 0, Ps(
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
  function fd(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        Lt = !0;
      else {
        if (!Sf(t, l) && (e.flags & 128) === 0)
          return Lt = !1, rh(
            t,
            e,
            l
          );
        Lt = (t.flags & 131072) !== 0;
      }
    else
      Lt = !1, dt && (e.flags & 1048576) !== 0 && Go(e, yn, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var a = e.pendingProps;
          if (t = la(e.elementType), e.type = t, typeof t == "function")
            zc(t) ? (a = ia(t, a), e.tag = 1, e = ad(
              null,
              e,
              t,
              a,
              l
            )) : (e.tag = 0, e = mf(
              null,
              e,
              t,
              a,
              l
            ));
          else {
            if (t != null) {
              var n = t.$$typeof;
              if (n === G) {
                e.tag = 11, e = Fs(
                  null,
                  e,
                  t,
                  a,
                  l
                );
                break t;
              } else if (n === J) {
                e.tag = 14, e = Ws(
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
        return mf(
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
        ), ad(
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
          n = u.element, Lc(t, e), zn(e, a, null, l);
          var c = e.memoizedState;
          if (a = c.cache, _l(e, qt, a), a !== u.cache && xc(
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
              e = nd(
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
              ), gn(n), e = nd(
                t,
                e,
                a,
                l
              );
              break t;
            } else
              for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, Mt = Ue(t.firstChild), Ft = e, dt = !0, bl = null, Ce = !0, l = Po(
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
        return Ju(t, e), t === null ? (l = bm(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = l : dt || (l = e.type, t = e.pendingProps, a = oi(
          nt.current
        ).createElement(l), a[kt] = e, a[ae] = t, Pt(a, l, t), Vt(a), e.stateNode = a) : e.memoizedState = bm(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return tn(e), t === null && dt && (a = e.stateNode = ym(
          e.type,
          e.pendingProps,
          nt.current
        ), Ft = e, Ce = !0, n = Mt, Hl(e.type) ? (Pf = n, Mt = Ue(a.firstChild)) : Mt = n), It(
          t,
          e,
          e.pendingProps.children,
          l
        ), Ju(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && dt && ((n = a = Mt) && (a = Lh(
          a,
          e.type,
          e.pendingProps,
          Ce
        ), a !== null ? (e.stateNode = a, Ft = e, Mt = Ue(a.firstChild), Ce = !1, n = !0) : n = !1), n || Sl(e)), tn(e), n = e.type, u = e.pendingProps, c = t !== null ? t.memoizedProps : null, a = u.children, $f(n, u) ? a = null : c !== null && $f(n, c) && (e.flags |= 32), e.memoizedState !== null && (n = Kc(
          t,
          e,
          th,
          null,
          null,
          l
        ), Zn._currentValue = n), Ju(t, e), It(t, e, a, l), e.child;
      case 6:
        return t === null && dt && ((t = l = Mt) && (l = Gh(
          l,
          e.pendingProps,
          Ce
        ), l !== null ? (e.stateNode = l, Ft = e, Mt = null, t = !0) : t = !1), t || Sl(e)), null;
      case 13:
        return ud(t, e, l);
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
        return Fs(
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
        return Ws(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 15:
        return Is(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 19:
        return cd(t, e, l);
      case 31:
        return fh(t, e, l);
      case 22:
        return Ps(
          t,
          e,
          l,
          e.pendingProps
        );
      case 24:
        return ta(e), a = Wt(qt), t === null ? (n = Bc(), n === null && (n = zt, u = Hc(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= l), n = u), e.memoizedState = { parent: a, cache: n }, Yc(e), _l(e, qt, n)) : ((t.lanes & l) !== 0 && (Lc(t, e), zn(e, null, null, l), Tn()), n = t.memoizedState, u = e.memoizedState, n.parent !== a ? (n = { parent: a, cache: a }, e.memoizedState = n, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = n), _l(e, qt, a)) : (a = u.cache, _l(e, qt, a), a !== n.cache && xc(
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
  function _f(t, e, l, a, n) {
    if ((e = (t.mode & 32) !== 0) && (e = !1), e) {
      if (t.flags |= 16777216, (n & 335544128) === n)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (jd()) t.flags |= 8192;
        else
          throw aa = Ru, qc;
    } else t.flags &= -16777217;
  }
  function rd(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !zm(e))
      if (jd()) t.flags |= 8192;
      else
        throw aa = Ru, qc;
  }
  function ku(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Xr() : 536870912, t.lanes |= e, Za |= e);
  }
  function Nn(t, e) {
    if (!dt)
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
  function oh(t, e, l) {
    var a = e.pendingProps;
    switch (Dc(e), e.tag) {
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
        return l = e.stateNode, a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), Ie(qt), Tt(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (t === null || t.child === null) && (Ua(e) ? ll(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Nc())), Dt(e), null;
      case 26:
        var n = e.type, u = e.memoizedState;
        return t === null ? (ll(e), u !== null ? (Dt(e), rd(e, u)) : (Dt(e), _f(
          e,
          n,
          null,
          a,
          l
        ))) : u ? u !== t.memoizedState ? (ll(e), Dt(e), rd(e, u)) : (Dt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== a && ll(e), Dt(e), _f(
          e,
          n,
          t,
          a,
          l
        )), null;
      case 27:
        if (iu(e), l = nt.current, n = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== a && ll(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(r(166));
            return Dt(e), null;
          }
          t = L.current, Ua(e) ? Qo(e) : (t = ym(n, a, l), e.stateNode = t, ll(e));
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
          if (u = L.current, Ua(e))
            Qo(e);
          else {
            var c = oi(
              nt.current
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
        return Dt(e), _f(
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
          if (t = nt.current, Ua(e)) {
            if (t = e.stateNode, l = e.memoizedProps, a = null, n = Ft, n !== null)
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            t[kt] = e, t = !!(t.nodeValue === l || a !== null && a.suppressHydrationWarning === !0 || um(t.nodeValue, l)), t || Sl(e, !0);
          } else
            t = oi(t).createTextNode(
              a
            ), t[kt] = e, e.stateNode = t;
        }
        return Dt(e), null;
      case 31:
        if (l = e.memoizedState, t === null || t.memoizedState !== null) {
          if (a = Ua(e), l !== null) {
            if (t === null) {
              if (!a) throw Error(r(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(557));
              t[kt] = e;
            } else
              Il(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Dt(e), t = !1;
          } else
            l = Nc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = l), t = !0;
          if (!t)
            return e.flags & 256 ? (pe(e), e) : (pe(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(r(558));
        }
        return Dt(e), null;
      case 13:
        if (a = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (n = Ua(e), a !== null && a.dehydrated !== null) {
            if (t === null) {
              if (!n) throw Error(r(318));
              if (n = e.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(r(317));
              n[kt] = e;
            } else
              Il(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Dt(e), n = !1;
          } else
            n = Nc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return e.flags & 256 ? (pe(e), e) : (pe(e), null);
        }
        return pe(e), (e.flags & 128) !== 0 ? (e.lanes = l, e) : (l = a !== null, t = t !== null && t.memoizedState !== null, l && (a = e.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== n && (a.flags |= 2048)), l !== t && l && (e.child.flags |= 8192), ku(e, e.updateQueue), Dt(e), null);
      case 4:
        return Tt(), t === null && wf(e.stateNode.containerInfo), Dt(e), null;
      case 10:
        return Ie(e.type), Dt(e), null;
      case 19:
        if (N(xt), a = e.memoizedState, a === null) return Dt(e), null;
        if (n = (e.flags & 128) !== 0, u = a.rendering, u === null)
          if (n) Nn(a, !1);
          else {
            if (Ut !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (u = Bu(t), u !== null) {
                  for (e.flags |= 128, Nn(a, !1), t = u.updateQueue, e.updateQueue = t, ku(e, t), e.subtreeFlags = 0, t = l, l = e.child; l !== null; )
                    qo(l, t), l = l.sibling;
                  return H(
                    xt,
                    xt.current & 1 | 2
                  ), dt && Fe(e, a.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            a.tail !== null && de() > ti && (e.flags |= 128, n = !0, Nn(a, !1), e.lanes = 4194304);
          }
        else {
          if (!n)
            if (t = Bu(u), t !== null) {
              if (e.flags |= 128, n = !0, t = t.updateQueue, e.updateQueue = t, ku(e, t), Nn(a, !0), a.tail === null && a.tailMode === "hidden" && !u.alternate && !dt)
                return Dt(e), null;
            } else
              2 * de() - a.renderingStartTime > ti && l !== 536870912 && (e.flags |= 128, n = !0, Nn(a, !1), e.lanes = 4194304);
          a.isBackwards ? (u.sibling = e.child, e.child = u) : (t = a.last, t !== null ? t.sibling = u : e.child = u, a.last = u);
        }
        return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = de(), t.sibling = null, l = xt.current, H(
          xt,
          n ? l & 1 | 2 : l & 1
        ), dt && Fe(e, a.treeForkCount), t) : (Dt(e), null);
      case 22:
      case 23:
        return pe(e), wc(), a = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? (l & 536870912) !== 0 && (e.flags & 128) === 0 && (Dt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Dt(e), l = e.updateQueue, l !== null && ku(e, l.retryQueue), l = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== l && (e.flags |= 2048), t !== null && N(ea), null;
      case 24:
        return l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), Ie(qt), Dt(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, e.tag));
  }
  function sh(t, e) {
    switch (Dc(e), e.tag) {
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
        return pe(e), wc(), t !== null && N(ea), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return Ie(qt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function od(t, e) {
    switch (Dc(e), e.tag) {
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
        pe(e), wc(), t !== null && N(ea);
        break;
      case 24:
        Ie(qt);
    }
  }
  function Un(t, e) {
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
              var m = l, T = s;
              try {
                T();
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
  function sd(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        es(e, l);
      } catch (a) {
        bt(t, t.return, a);
      }
    }
  }
  function dd(t, e, l) {
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
  function Rn(t, e) {
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
  function md(t) {
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
  function Ef(t, e, l) {
    try {
      var a = t.stateNode;
      xh(a, t.type, l, e), a[ae] = e;
    } catch (n) {
      bt(t, t.return, n);
    }
  }
  function vd(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Hl(t.type) || t.tag === 4;
  }
  function Tf(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || vd(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Hl(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function zf(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, e ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(t, e) : (e = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.appendChild(t), l = l._reactRootContainer, l != null || e.onclick !== null || (e.onclick = Je));
    else if (a !== 4 && (a === 27 && Hl(t.type) && (l = t.stateNode, e = null), t = t.child, t !== null))
      for (zf(t, e, l), t = t.sibling; t !== null; )
        zf(t, e, l), t = t.sibling;
  }
  function Fu(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, e ? l.insertBefore(t, e) : l.appendChild(t);
    else if (a !== 4 && (a === 27 && Hl(t.type) && (l = t.stateNode), t = t.child, t !== null))
      for (Fu(t, e, l), t = t.sibling; t !== null; )
        Fu(t, e, l), t = t.sibling;
  }
  function hd(t) {
    var e = t.stateNode, l = t.memoizedProps;
    try {
      for (var a = t.type, n = e.attributes; n.length; )
        e.removeAttributeNode(n[0]);
      Pt(e, a, l), e[kt] = t, e[ae] = l;
    } catch (u) {
      bt(t, t.return, u);
    }
  }
  var al = !1, Gt = !1, Af = !1, yd = typeof WeakSet == "function" ? WeakSet : Set, Kt = null;
  function dh(t, e) {
    if (t = t.containerInfo, Kf = gi, t = Do(t), gc(t)) {
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
            var c = 0, s = -1, m = -1, T = 0, D = 0, U = t, z = null;
            e: for (; ; ) {
              for (var O; U !== l || n !== 0 && U.nodeType !== 3 || (s = c + n), U !== u || a !== 0 && U.nodeType !== 3 || (m = c + a), U.nodeType === 3 && (c += U.nodeValue.length), (O = U.firstChild) !== null; )
                z = U, U = O;
              for (; ; ) {
                if (U === t) break e;
                if (z === l && ++T === n && (s = c), z === u && ++D === a && (m = c), (O = U.nextSibling) !== null) break;
                U = z, z = U.parentNode;
              }
              U = O;
            }
            l = s === -1 || m === -1 ? null : { start: s, end: m };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (Jf = { focusedElem: t, selectionRange: l }, gi = !1, Kt = e; Kt !== null; )
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
                } catch (W) {
                  bt(
                    l,
                    l.return,
                    W
                  );
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (t = e.stateNode.containerInfo, l = t.nodeType, l === 9)
                  Ff(t);
                else if (l === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Ff(t);
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
  function gd(t, e, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        ul(t, l), a & 4 && Un(5, l);
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
        a & 64 && sd(l), a & 512 && Rn(l, l.return);
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
            es(t, e);
          } catch (c) {
            bt(l, l.return, c);
          }
        }
        break;
      case 27:
        e === null && a & 4 && hd(l);
      case 26:
      case 5:
        ul(t, l), e === null && a & 4 && md(l), a & 512 && Rn(l, l.return);
        break;
      case 12:
        ul(t, l);
        break;
      case 31:
        ul(t, l), a & 4 && Sd(t, l);
        break;
      case 13:
        ul(t, l), a & 4 && _d(t, l), a & 64 && (t = l.memoizedState, t !== null && (t = t.dehydrated, t !== null && (l = _h.bind(
          null,
          l
        ), Xh(t, l))));
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
  function pd(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, pd(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && tc(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Ct = null, ue = !1;
  function nl(t, e, l) {
    for (l = l.child; l !== null; )
      bd(t, e, l), l = l.sibling;
  }
  function bd(t, e, l) {
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
        Ct !== null && (ue ? (t = Ct, sm(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          l.stateNode
        ), Ia(t)) : sm(Ct, l.stateNode));
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
        Gt || (Xe(l, e), a = l.stateNode, typeof a.componentWillUnmount == "function" && dd(
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
  function Sd(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        Ia(t);
      } catch (l) {
        bt(e, e.return, l);
      }
    }
  }
  function _d(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        Ia(t);
      } catch (l) {
        bt(e, e.return, l);
      }
  }
  function mh(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new yd()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new yd()), e;
      default:
        throw Error(r(435, t.tag));
    }
  }
  function Wu(t, e) {
    var l = mh(t);
    e.forEach(function(a) {
      if (!l.has(a)) {
        l.add(a);
        var n = Eh.bind(null, t, a);
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
        bd(u, c, n), Ct = null, ue = !1, u = n.alternate, u !== null && (u.return = null), n.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        Ed(e, t), e = e.sibling;
  }
  var Be = null;
  function Ed(t, e) {
    var l = t.alternate, a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ie(e, t), ce(t), a & 4 && (Ml(3, t, t.return), Un(3, t), Ml(5, t, t.return));
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
                      var c = Em(
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
                      if (c = Em(
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
                Tm(
                  n,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = _m(
                n,
                a,
                t.memoizedProps
              );
          else
            u !== a ? (u === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : u.count--, a === null ? Tm(
              n,
              t.type,
              t.stateNode
            ) : _m(
              n,
              a,
              t.memoizedProps
            )) : a === null && t.stateNode !== null && Ef(
              t,
              t.memoizedProps,
              l.memoizedProps
            );
        }
        break;
      case 27:
        ie(e, t), ce(t), a & 512 && (Gt || l === null || Xe(l, l.return)), l !== null && a & 4 && Ef(
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
        a & 4 && t.stateNode != null && (n = t.memoizedProps, Ef(
          t,
          n,
          l !== null ? l.memoizedProps : n
        )), a & 1024 && (Af = !0);
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
        Af && (Af = !1, Td(t));
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
        var m = l !== null && l.memoizedState !== null, T = al, D = Gt;
        if (al = T || n, Gt = D || m, ie(e, t), Gt = D, al = T, ce(t), a & 8192)
          t: for (e = t.stateNode, e._visibility = n ? e._visibility & -2 : e._visibility | 1, n && (l === null || m || al || Gt || ca(t)), l = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                m = l = e;
                try {
                  if (u = m.stateNode, n)
                    c = u.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                  else {
                    s = m.stateNode;
                    var U = m.memoizedProps.style, z = U != null && U.hasOwnProperty("display") ? U.display : null;
                    s.style.display = z == null || typeof z == "boolean" ? "" : ("" + z).trim();
                  }
                } catch (X) {
                  bt(m, m.return, X);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                m = e;
                try {
                  m.stateNode.nodeValue = n ? "" : m.memoizedProps;
                } catch (X) {
                  bt(m, m.return, X);
                }
              }
            } else if (e.tag === 18) {
              if (l === null) {
                m = e;
                try {
                  var O = m.stateNode;
                  n ? dm(O, !0) : dm(m.stateNode, !1);
                } catch (X) {
                  bt(m, m.return, X);
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
          if (vd(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(r(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode, u = Tf(t);
            Fu(t, u, n);
            break;
          case 5:
            var c = l.stateNode;
            l.flags & 32 && (_a(c, ""), l.flags &= -33);
            var s = Tf(t);
            Fu(t, s, c);
            break;
          case 3:
          case 4:
            var m = l.stateNode.containerInfo, T = Tf(t);
            zf(
              t,
              T,
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
  function Td(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        Td(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
      }
  }
  function ul(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        gd(t, e.alternate, e), e = e.sibling;
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
          typeof l.componentWillUnmount == "function" && dd(
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
          ), Un(4, u);
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
              var m = n.shared.hiddenCallbacks;
              if (m !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < m.length; n++)
                  ts(m[n], s);
            } catch (T) {
              bt(a, a.return, T);
            }
          }
          l && c & 64 && sd(u), Rn(u, u.return);
          break;
        case 27:
          hd(u);
        case 26:
        case 5:
          il(
            n,
            u,
            l
          ), l && a === null && c & 4 && md(u), Rn(u, u.return);
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
          ), l && c & 4 && Sd(n, u);
          break;
        case 13:
          il(
            n,
            u,
            l
          ), l && c & 4 && _d(n, u);
          break;
        case 22:
          u.memoizedState === null && il(
            n,
            u,
            l
          ), Rn(u, u.return);
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
  function Of(t, e) {
    var l = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== l && (t != null && t.refCount++, l != null && pn(l));
  }
  function Mf(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && pn(t));
  }
  function qe(t, e, l, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        zd(
          t,
          e,
          l,
          a
        ), e = e.sibling;
  }
  function zd(t, e, l, a) {
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
        ), n & 2048 && Un(9, e);
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
        )), n & 2048 && Of(c, e);
        break;
      case 24:
        qe(
          t,
          e,
          l,
          a
        ), n & 2048 && Mf(e.alternate, e);
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
      var u = t, c = e, s = l, m = a, T = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          Xa(
            u,
            c,
            s,
            m,
            n
          ), Un(8, c);
          break;
        case 23:
          break;
        case 22:
          var D = c.stateNode;
          c.memoizedState !== null ? D._visibility & 2 ? Xa(
            u,
            c,
            s,
            m,
            n
          ) : xn(
            u,
            c
          ) : (D._visibility |= 2, Xa(
            u,
            c,
            s,
            m,
            n
          )), n && T & 2048 && Of(
            c.alternate,
            c
          );
          break;
        case 24:
          Xa(
            u,
            c,
            s,
            m,
            n
          ), n && T & 2048 && Mf(c.alternate, c);
          break;
        default:
          Xa(
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
  function xn(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t, a = e, n = a.flags;
        switch (a.tag) {
          case 22:
            xn(l, a), n & 2048 && Of(
              a.alternate,
              a
            );
            break;
          case 24:
            xn(l, a), n & 2048 && Mf(a.alternate, a);
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
        Ad(
          t,
          e,
          l
        ), t = t.sibling;
  }
  function Ad(t, e, l) {
    switch (t.tag) {
      case 26:
        Qa(
          t,
          e,
          l
        ), t.flags & Hn && t.memoizedState !== null && Ph(
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
  function Od(t) {
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
          Kt = a, Dd(
            a,
            t
          );
        }
      Od(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Md(t), t = t.sibling;
  }
  function Md(t) {
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
          Kt = a, Dd(
            a,
            t
          );
        }
      Od(t);
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
  function Dd(t, e) {
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
          if (pd(a), a === l) {
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
  var vh = {
    getCacheForType: function(t) {
      var e = Wt(qt), l = e.data.get(t);
      return l === void 0 && (l = t(), e.data.set(t, l)), l;
    },
    cacheSignal: function() {
      return Wt(qt).controller.signal;
    }
  }, hh = typeof WeakMap == "function" ? WeakMap : Map, gt = 0, zt = null, ct = null, rt = 0, pt = 0, be = null, Dl = !1, wa = !1, Df = !1, cl = 0, Ut = 0, Cl = 0, fa = 0, Cf = 0, Se = 0, Za = 0, Bn = null, fe = null, Nf = !1, Pu = 0, Cd = 0, ti = 1 / 0, ei = null, Nl = null, wt = 0, Ul = null, Va = null, fl = 0, Uf = 0, Rf = null, Nd = null, qn = 0, xf = null;
  function _e() {
    return (gt & 2) !== 0 && rt !== 0 ? rt & -rt : M.T !== null ? Lf() : Vr();
  }
  function Ud() {
    if (Se === 0)
      if ((rt & 536870912) === 0 || dt) {
        var t = ru;
        ru <<= 1, (ru & 3932160) === 0 && (ru = 262144), Se = t;
      } else Se = 536870912;
    return t = ge.current, t !== null && (t.flags |= 32), Se;
  }
  function re(t, e, l) {
    (t === zt && (pt === 2 || pt === 9) || t.cancelPendingCommit !== null) && (Ka(t, 0), Rl(
      t,
      rt,
      Se,
      !1
    )), an(t, l), ((gt & 2) === 0 || t !== zt) && (t === zt && ((gt & 2) === 0 && (fa |= l), Ut === 4 && Rl(
      t,
      rt,
      Se,
      !1
    )), Qe(t));
  }
  function Rd(t, e, l) {
    if ((gt & 6) !== 0) throw Error(r(327));
    var a = !l && (e & 127) === 0 && (e & t.expiredLanes) === 0 || ln(t, e), n = a ? ph(t, e) : jf(t, e, !0), u = a;
    do {
      if (n === 0) {
        wa && !a && Rl(t, e, 0, !1);
        break;
      } else {
        if (l = t.current.alternate, u && !yh(l)) {
          n = jf(t, e, !1), u = !1;
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
              var m = s.current.memoizedState.isDehydrated;
              if (m && (Ka(s, c).flags |= 256), c = jf(
                s,
                c,
                !1
              ), c !== 2) {
                if (Df && !m) {
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
          Ka(t, 0), Rl(t, e, 0, !0);
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
              Rl(
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
            if (Rl(
              a,
              e,
              Se,
              !Dl
            ), su(a, 0, !0) !== 0) break t;
            fl = e, a.timeoutHandle = rm(
              xd.bind(
                null,
                a,
                l,
                fe,
                ei,
                Nf,
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
          xd(
            a,
            l,
            fe,
            ei,
            Nf,
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
  function xd(t, e, l, a, n, u, c, s, m, T, D, U, z, O) {
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
      }, Ad(
        e,
        u,
        U
      );
      var X = (u & 62914560) === u ? Pu - de() : (u & 4194048) === u ? Cd - de() : 0;
      if (X = ty(
        U,
        X
      ), X !== null) {
        fl = u, t.cancelPendingCommit = X(
          Xd.bind(
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
            z,
            O
          )
        ), Rl(t, u, c, !T);
        return;
      }
    }
    Xd(
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
  function yh(t) {
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
  function Rl(t, e, l, a) {
    e &= ~Cf, e &= ~fa, t.suspendedLanes |= e, t.pingedLanes &= ~e, a && (t.warmLanes |= e), a = t.expirationTimes;
    for (var n = e; 0 < n; ) {
      var u = 31 - ve(n), c = 1 << u;
      a[u] = -1, n &= ~c;
    }
    l !== 0 && Qr(t, l, e);
  }
  function li() {
    return (gt & 6) === 0 ? (Yn(0), !1) : !0;
  }
  function Hf() {
    if (ct !== null) {
      if (pt === 0)
        var t = ct.return;
      else
        t = ct, We = Pl = null, kc(t), Ba = null, Sn = 0, t = ct;
      for (; t !== null; )
        od(t.alternate, t), t = t.return;
      ct = null;
    }
  }
  function Ka(t, e) {
    var l = t.timeoutHandle;
    l !== -1 && (t.timeoutHandle = -1, Bh(l)), l = t.cancelPendingCommit, l !== null && (t.cancelPendingCommit = null, l()), fl = 0, Hf(), zt = t, ct = l = ke(t.current, null), rt = e, pt = 0, be = null, Dl = !1, wa = ln(t, e), Df = !1, Za = Se = Cf = fa = Cl = Ut = 0, fe = Bn = null, Nf = !1, (e & 8) !== 0 && (e |= e & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var n = 31 - ve(a), u = 1 << n;
        e |= t[n], a &= ~u;
      }
    return cl = e, Tu(), l;
  }
  function Hd(t, e) {
    lt = null, M.H = Dn, e === ja || e === Uu ? (e = Fo(), pt = 3) : e === qc ? (e = Fo(), pt = 4) : pt = e === df ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, be = e, ct === null && (Ut = 1, Vu(
      t,
      Oe(e, t.current)
    ));
  }
  function jd() {
    var t = ge.current;
    return t === null ? !0 : (rt & 4194048) === rt ? Ne === null : (rt & 62914560) === rt || (rt & 536870912) !== 0 ? t === Ne : !1;
  }
  function Bd() {
    var t = M.H;
    return M.H = Dn, t === null ? Dn : t;
  }
  function qd() {
    var t = M.A;
    return M.A = vh, t;
  }
  function ai() {
    Ut = 4, Dl || (rt & 4194048) !== rt && ge.current !== null || (wa = !0), (Cl & 134217727) === 0 && (fa & 134217727) === 0 || zt === null || Rl(
      zt,
      rt,
      Se,
      !1
    );
  }
  function jf(t, e, l) {
    var a = gt;
    gt |= 2;
    var n = Bd(), u = qd();
    (zt !== t || rt !== e) && (ei = null, Ka(t, e)), e = !1;
    var c = Ut;
    t: do
      try {
        if (pt !== 0 && ct !== null) {
          var s = ct, m = be;
          switch (pt) {
            case 8:
              Hf(), c = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              ge.current === null && (e = !0);
              var T = pt;
              if (pt = 0, be = null, Ja(t, s, m, T), l && wa) {
                c = 0;
                break t;
              }
              break;
            default:
              T = pt, pt = 0, be = null, Ja(t, s, m, T);
          }
        }
        gh(), c = Ut;
        break;
      } catch (D) {
        Hd(t, D);
      }
    while (!0);
    return e && t.shellSuspendCounter++, We = Pl = null, gt = a, M.H = n, M.A = u, ct === null && (zt = null, rt = 0, Tu()), c;
  }
  function gh() {
    for (; ct !== null; ) Yd(ct);
  }
  function ph(t, e) {
    var l = gt;
    gt |= 2;
    var a = Bd(), n = qd();
    zt !== t || rt !== e ? (ei = null, ti = de() + 500, Ka(t, e)) : wa = ln(
      t,
      e
    );
    t: do
      try {
        if (pt !== 0 && ct !== null) {
          e = ct;
          var u = be;
          e: switch (pt) {
            case 1:
              pt = 0, be = null, Ja(t, e, u, 1);
              break;
            case 2:
            case 9:
              if ($o(u)) {
                pt = 0, be = null, Ld(e);
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
              $o(u) ? (pt = 0, be = null, Ld(e)) : (pt = 0, be = null, Ja(t, e, u, 7));
              break;
            case 5:
              var c = null;
              switch (ct.tag) {
                case 26:
                  c = ct.memoizedState;
                case 5:
                case 27:
                  var s = ct;
                  if (c ? zm(c) : s.stateNode.complete) {
                    pt = 0, be = null;
                    var m = s.sibling;
                    if (m !== null) ct = m;
                    else {
                      var T = s.return;
                      T !== null ? (ct = T, ni(T)) : ct = null;
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
              Hf(), Ut = 6;
              break t;
            default:
              throw Error(r(462));
          }
        }
        bh();
        break;
      } catch (D) {
        Hd(t, D);
      }
    while (!0);
    return We = Pl = null, M.H = a, M.A = n, gt = l, ct !== null ? 0 : (zt = null, rt = 0, Tu(), Ut);
  }
  function bh() {
    for (; ct !== null && !Qv(); )
      Yd(ct);
  }
  function Yd(t) {
    var e = fd(t.alternate, t, cl);
    t.memoizedProps = t.pendingProps, e === null ? ni(t) : ct = e;
  }
  function Ld(t) {
    var e = t, l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = ld(
          l,
          e,
          e.pendingProps,
          e.type,
          void 0,
          rt
        );
        break;
      case 11:
        e = ld(
          l,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          rt
        );
        break;
      case 5:
        kc(e);
      default:
        od(l, e), e = ct = qo(e, cl), e = fd(l, e, cl);
    }
    t.memoizedProps = t.pendingProps, e === null ? ni(t) : ct = e;
  }
  function Ja(t, e, l, a) {
    We = Pl = null, kc(e), Ba = null, Sn = 0;
    var n = e.return;
    try {
      if (ch(
        t,
        n,
        e,
        l,
        rt
      )) {
        Ut = 1, Vu(
          t,
          Oe(l, t.current)
        ), ct = null;
        return;
      }
    } catch (u) {
      if (n !== null) throw ct = n, u;
      Ut = 1, Vu(
        t,
        Oe(l, t.current)
      ), ct = null;
      return;
    }
    e.flags & 32768 ? (dt || a === 1 ? t = !0 : wa || (rt & 536870912) !== 0 ? t = !1 : (Dl = t = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = ge.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Gd(e, t)) : ni(e);
  }
  function ni(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Gd(
          e,
          Dl
        );
        return;
      }
      t = e.return;
      var l = oh(
        e.alternate,
        e,
        cl
      );
      if (l !== null) {
        ct = l;
        return;
      }
      if (e = e.sibling, e !== null) {
        ct = e;
        return;
      }
      ct = e = t;
    } while (e !== null);
    Ut === 0 && (Ut = 5);
  }
  function Gd(t, e) {
    do {
      var l = sh(t.alternate, t);
      if (l !== null) {
        l.flags &= 32767, ct = l;
        return;
      }
      if (l = t.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !e && (t = t.sibling, t !== null)) {
        ct = t;
        return;
      }
      ct = t = l;
    } while (t !== null);
    Ut = 6, ct = null;
  }
  function Xd(t, e, l, a, n, u, c, s, m) {
    t.cancelPendingCommit = null;
    do
      ui();
    while (wt !== 0);
    if ((gt & 6) !== 0) throw Error(r(327));
    if (e !== null) {
      if (e === t.current) throw Error(r(177));
      if (u = e.lanes | e.childLanes, u |= Ec, Iv(
        t,
        l,
        u,
        c,
        s,
        m
      ), t === zt && (ct = zt = null, rt = 0), Va = e, Ul = t, fl = l, Uf = u, Rf = n, Nd = a, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, Th(cu, function() {
        return Kd(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), a = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || a) {
        a = M.T, M.T = null, n = Y.p, Y.p = 2, c = gt, gt |= 4;
        try {
          dh(t, e, l);
        } finally {
          gt = c, Y.p = n, M.T = a;
        }
      }
      wt = 1, Qd(), wd(), Zd();
    }
  }
  function Qd() {
    if (wt === 1) {
      wt = 0;
      var t = Ul, e = Va, l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        l = M.T, M.T = null;
        var a = Y.p;
        Y.p = 2;
        var n = gt;
        gt |= 4;
        try {
          Ed(e, t);
          var u = Jf, c = Do(t.containerInfo), s = u.focusedElem, m = u.selectionRange;
          if (c !== s && s && s.ownerDocument && Mo(
            s.ownerDocument.documentElement,
            s
          )) {
            if (m !== null && gc(s)) {
              var T = m.start, D = m.end;
              if (D === void 0 && (D = T), "selectionStart" in s)
                s.selectionStart = T, s.selectionEnd = Math.min(
                  D,
                  s.value.length
                );
              else {
                var U = s.ownerDocument || document, z = U && U.defaultView || window;
                if (z.getSelection) {
                  var O = z.getSelection(), X = s.textContent.length, W = Math.min(m.start, X), Et = m.end === void 0 ? W : Math.min(m.end, X);
                  !O.extend && W > Et && (c = Et, Et = W, W = c);
                  var b = Oo(
                    s,
                    W
                  ), g = Oo(
                    s,
                    Et
                  );
                  if (b && g && (O.rangeCount !== 1 || O.anchorNode !== b.node || O.anchorOffset !== b.offset || O.focusNode !== g.node || O.focusOffset !== g.offset)) {
                    var E = U.createRange();
                    E.setStart(b.node, b.offset), O.removeAllRanges(), W > Et ? (O.addRange(E), O.extend(g.node, g.offset)) : (E.setEnd(g.node, g.offset), O.addRange(E));
                  }
                }
              }
            }
            for (U = [], O = s; O = O.parentNode; )
              O.nodeType === 1 && U.push({
                element: O,
                left: O.scrollLeft,
                top: O.scrollTop
              });
            for (typeof s.focus == "function" && s.focus(), s = 0; s < U.length; s++) {
              var C = U[s];
              C.element.scrollLeft = C.left, C.element.scrollTop = C.top;
            }
          }
          gi = !!Kf, Jf = Kf = null;
        } finally {
          gt = n, Y.p = a, M.T = l;
        }
      }
      t.current = e, wt = 2;
    }
  }
  function wd() {
    if (wt === 2) {
      wt = 0;
      var t = Ul, e = Va, l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        l = M.T, M.T = null;
        var a = Y.p;
        Y.p = 2;
        var n = gt;
        gt |= 4;
        try {
          gd(t, e.alternate, e);
        } finally {
          gt = n, Y.p = a, M.T = l;
        }
      }
      wt = 3;
    }
  }
  function Zd() {
    if (wt === 4 || wt === 3) {
      wt = 0, wv();
      var t = Ul, e = Va, l = fl, a = Nd;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? wt = 5 : (wt = 0, Va = Ul = null, Vd(t, t.pendingLanes));
      var n = t.pendingLanes;
      if (n === 0 && (Nl = null), Ii(l), e = e.stateNode, me && typeof me.onCommitFiberRoot == "function")
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
      (fl & 3) !== 0 && ui(), Qe(t), n = t.pendingLanes, (l & 261930) !== 0 && (n & 42) !== 0 ? t === xf ? qn++ : (qn = 0, xf = t) : qn = 0, Yn(0);
    }
  }
  function Vd(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, pn(e)));
  }
  function ui() {
    return Qd(), wd(), Zd(), Kd();
  }
  function Kd() {
    if (wt !== 5) return !1;
    var t = Ul, e = Uf;
    Uf = 0;
    var l = Ii(fl), a = M.T, n = Y.p;
    try {
      Y.p = 32 > l ? 32 : l, M.T = null, l = Rf, Rf = null;
      var u = Ul, c = fl;
      if (wt = 0, Va = Ul = null, fl = 0, (gt & 6) !== 0) throw Error(r(331));
      var s = gt;
      if (gt |= 4, Md(u.current), zd(
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
      Y.p = n, M.T = a, Vd(t, e);
    }
  }
  function Jd(t, e, l) {
    e = Oe(l, e), e = sf(t.stateNode, e, 2), t = zl(t, e, 2), t !== null && (an(t, 2), Qe(t));
  }
  function bt(t, e, l) {
    if (t.tag === 3)
      Jd(t, t, l);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          Jd(
            e,
            t,
            l
          );
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Nl === null || !Nl.has(a))) {
            t = Oe(l, t), l = $s(2), a = zl(e, l, 2), a !== null && (ks(
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
  function Bf(t, e, l) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new hh();
      var n = /* @__PURE__ */ new Set();
      a.set(e, n);
    } else
      n = a.get(e), n === void 0 && (n = /* @__PURE__ */ new Set(), a.set(e, n));
    n.has(l) || (Df = !0, n.add(l), t = Sh.bind(null, t, e, l), e.then(t, t));
  }
  function Sh(t, e, l) {
    var a = t.pingCache;
    a !== null && a.delete(e), t.pingedLanes |= t.suspendedLanes & l, t.warmLanes &= ~l, zt === t && (rt & l) === l && (Ut === 4 || Ut === 3 && (rt & 62914560) === rt && 300 > de() - Pu ? (gt & 2) === 0 && Ka(t, 0) : Cf |= l, Za === rt && (Za = 0)), Qe(t);
  }
  function $d(t, e) {
    e === 0 && (e = Xr()), t = Fl(t, e), t !== null && (an(t, e), Qe(t));
  }
  function _h(t) {
    var e = t.memoizedState, l = 0;
    e !== null && (l = e.retryLane), $d(t, l);
  }
  function Eh(t, e) {
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
    a !== null && a.delete(e), $d(t, l);
  }
  function Th(t, e) {
    return $i(t, e);
  }
  var ii = null, $a = null, qf = !1, ci = !1, Yf = !1, xl = 0;
  function Qe(t) {
    t !== $a && t.next === null && ($a === null ? ii = $a = t : $a = $a.next = t), ci = !0, qf || (qf = !0, Ah());
  }
  function Yn(t, e) {
    if (!Yf && ci) {
      Yf = !0;
      do
        for (var l = !1, a = ii; a !== null; ) {
          if (t !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var c = a.suspendedLanes, s = a.pingedLanes;
              u = (1 << 31 - ve(42 | t) + 1) - 1, u &= n & ~(c & ~s), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (l = !0, Id(a, u));
          } else
            u = rt, u = su(
              a,
              a === zt ? u : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (u & 3) === 0 || ln(a, u) || (l = !0, Id(a, u));
          a = a.next;
        }
      while (l);
      Yf = !1;
    }
  }
  function zh() {
    kd();
  }
  function kd() {
    ci = qf = !1;
    var t = 0;
    xl !== 0 && jh() && (t = xl);
    for (var e = de(), l = null, a = ii; a !== null; ) {
      var n = a.next, u = Fd(a, e);
      u === 0 ? (a.next = null, l === null ? ii = n : l.next = n, n === null && ($a = l)) : (l = a, (t !== 0 || (u & 3) !== 0) && (ci = !0)), a = n;
    }
    wt !== 0 && wt !== 5 || Yn(t), xl !== 0 && (xl = 0);
  }
  function Fd(t, e) {
    for (var l = t.suspendedLanes, a = t.pingedLanes, n = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
      var c = 31 - ve(u), s = 1 << c, m = n[c];
      m === -1 ? ((s & l) === 0 || (s & a) !== 0) && (n[c] = Wv(s, e)) : m <= e && (t.expiredLanes |= s), u &= ~s;
    }
    if (e = zt, l = rt, l = su(
      t,
      t === e ? l : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a = t.callbackNode, l === 0 || t === e && (pt === 2 || pt === 9) || t.cancelPendingCommit !== null)
      return a !== null && a !== null && ki(a), t.callbackNode = null, t.callbackPriority = 0;
    if ((l & 3) === 0 || ln(t, l)) {
      if (e = l & -l, e === t.callbackPriority) return e;
      switch (a !== null && ki(a), Ii(l)) {
        case 2:
        case 8:
          l = Lr;
          break;
        case 32:
          l = cu;
          break;
        case 268435456:
          l = Gr;
          break;
        default:
          l = cu;
      }
      return a = Wd.bind(null, t), l = $i(l, a), t.callbackPriority = e, t.callbackNode = l, e;
    }
    return a !== null && a !== null && ki(a), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function Wd(t, e) {
    if (wt !== 0 && wt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var l = t.callbackNode;
    if (ui() && t.callbackNode !== l)
      return null;
    var a = rt;
    return a = su(
      t,
      t === zt ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a === 0 ? null : (Rd(t, a, e), Fd(t, de()), t.callbackNode != null && t.callbackNode === l ? Wd.bind(null, t) : null);
  }
  function Id(t, e) {
    if (ui()) return null;
    Rd(t, e, !0);
  }
  function Ah() {
    qh(function() {
      (gt & 6) !== 0 ? $i(
        Yr,
        zh
      ) : kd();
    });
  }
  function Lf() {
    if (xl === 0) {
      var t = xa;
      t === 0 && (t = fu, fu <<= 1, (fu & 261888) === 0 && (fu = 256)), xl = t;
    }
    return xl;
  }
  function Pd(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : hu("" + t);
  }
  function tm(t, e) {
    var l = e.ownerDocument.createElement("input");
    return l.name = e.name, l.value = e.value, t.id && l.setAttribute("form", t.id), e.parentNode.insertBefore(l, e), t = new FormData(t), l.parentNode.removeChild(l), t;
  }
  function Oh(t, e, l, a, n) {
    if (e === "submit" && l && l.stateNode === n) {
      var u = Pd(
        (n[ae] || null).action
      ), c = a.submitter;
      c && (e = (e = c[ae] || null) ? Pd(e.formAction) : c.getAttribute("formAction"), e !== null && (u = e, c = null));
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
                  var m = c ? tm(n, c) : new FormData(n);
                  nf(
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
                typeof u == "function" && (s.preventDefault(), m = c ? tm(n, c) : new FormData(n), nf(
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
  for (var Gf = 0; Gf < _c.length; Gf++) {
    var Xf = _c[Gf], Mh = Xf.toLowerCase(), Dh = Xf[0].toUpperCase() + Xf.slice(1);
    je(
      Mh,
      "on" + Dh
    );
  }
  je(Uo, "onAnimationEnd"), je(Ro, "onAnimationIteration"), je(xo, "onAnimationStart"), je("dblclick", "onDoubleClick"), je("focusin", "onFocus"), je("focusout", "onBlur"), je(Z0, "onTransitionRun"), je(V0, "onTransitionStart"), je(K0, "onTransitionCancel"), je(Ho, "onTransitionEnd"), ba("onMouseEnter", ["mouseout", "mouseover"]), ba("onMouseLeave", ["mouseout", "mouseover"]), ba("onPointerEnter", ["pointerout", "pointerover"]), ba("onPointerLeave", ["pointerout", "pointerover"]), Kl(
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
  ), Ch = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ln)
  );
  function em(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var a = t[l], n = a.event;
      a = a.listeners;
      t: {
        var u = void 0;
        if (e)
          for (var c = a.length - 1; 0 <= c; c--) {
            var s = a[c], m = s.instance, T = s.currentTarget;
            if (s = s.listener, m !== u && n.isPropagationStopped())
              break t;
            u = s, n.currentTarget = T;
            try {
              u(n);
            } catch (D) {
              Eu(D);
            }
            n.currentTarget = null, u = m;
          }
        else
          for (c = 0; c < a.length; c++) {
            if (s = a[c], m = s.instance, T = s.currentTarget, s = s.listener, m !== u && n.isPropagationStopped())
              break t;
            u = s, n.currentTarget = T;
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
  function ft(t, e) {
    var l = e[Pi];
    l === void 0 && (l = e[Pi] = /* @__PURE__ */ new Set());
    var a = t + "__bubble";
    l.has(a) || (lm(e, t, 2, !1), l.add(a));
  }
  function Qf(t, e, l) {
    var a = 0;
    e && (a |= 4), lm(
      l,
      t,
      a,
      e
    );
  }
  var fi = "_reactListening" + Math.random().toString(36).slice(2);
  function wf(t) {
    if (!t[fi]) {
      t[fi] = !0, $r.forEach(function(l) {
        l !== "selectionchange" && (Ch.has(l) || Qf(l, !1, t), Qf(l, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[fi] || (e[fi] = !0, Qf("selectionchange", !1, e));
    }
  }
  function lm(t, e, l, a) {
    switch (Um(e)) {
      case 2:
        var n = ay;
        break;
      case 8:
        n = ny;
        break;
      default:
        n = nr;
    }
    l = n.bind(
      null,
      e,
      l,
      t
    ), n = void 0, !fc || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (n = !0), a ? n !== void 0 ? t.addEventListener(e, l, {
      capture: !0,
      passive: n
    }) : t.addEventListener(e, l, !0) : n !== void 0 ? t.addEventListener(e, l, {
      passive: n
    }) : t.addEventListener(e, l, !1);
  }
  function Zf(t, e, l, a, n) {
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
            if (c = ya(s), c === null) return;
            if (m = c.tag, m === 5 || m === 6 || m === 26 || m === 27) {
              a = u = c;
              continue t;
            }
            s = s.parentNode;
          }
        }
        a = a.return;
      }
    io(function() {
      var T = u, D = ic(l), U = [];
      t: {
        var z = jo.get(t);
        if (z !== void 0) {
          var O = bu, X = t;
          switch (t) {
            case "keypress":
              if (gu(l) === 0) break t;
            case "keydown":
            case "keyup":
              O = E0;
              break;
            case "focusin":
              X = "focus", O = dc;
              break;
            case "focusout":
              X = "blur", O = dc;
              break;
            case "beforeblur":
            case "afterblur":
              O = dc;
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
              O = ro;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              O = o0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              O = A0;
              break;
            case Uo:
            case Ro:
            case xo:
              O = m0;
              break;
            case Ho:
              O = M0;
              break;
            case "scroll":
            case "scrollend":
              O = f0;
              break;
            case "wheel":
              O = C0;
              break;
            case "copy":
            case "cut":
            case "paste":
              O = h0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              O = so;
              break;
            case "toggle":
            case "beforetoggle":
              O = U0;
          }
          var W = (e & 4) !== 0, Et = !W && (t === "scroll" || t === "scrollend"), b = W ? z !== null ? z + "Capture" : null : z;
          W = [];
          for (var g = T, E; g !== null; ) {
            var C = g;
            if (E = C.stateNode, C = C.tag, C !== 5 && C !== 26 && C !== 27 || E === null || b === null || (C = cn(g, b), C != null && W.push(
              Gn(g, C, E)
            )), Et) break;
            g = g.return;
          }
          0 < W.length && (z = new O(
            z,
            X,
            null,
            l,
            D
          ), U.push({ event: z, listeners: W }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (z = t === "mouseover" || t === "pointerover", O = t === "mouseout" || t === "pointerout", z && l !== uc && (X = l.relatedTarget || l.fromElement) && (ya(X) || X[ha]))
            break t;
          if ((O || z) && (z = D.window === D ? D : (z = D.ownerDocument) ? z.defaultView || z.parentWindow : window, O ? (X = l.relatedTarget || l.toElement, O = T, X = X ? ya(X) : null, X !== null && (Et = p(X), W = X.tag, X !== Et || W !== 5 && W !== 27 && W !== 6) && (X = null)) : (O = null, X = T), O !== X)) {
            if (W = ro, C = "onMouseLeave", b = "onMouseEnter", g = "mouse", (t === "pointerout" || t === "pointerover") && (W = so, C = "onPointerLeave", b = "onPointerEnter", g = "pointer"), Et = O == null ? z : un(O), E = X == null ? z : un(X), z = new W(
              C,
              g + "leave",
              O,
              l,
              D
            ), z.target = Et, z.relatedTarget = E, C = null, ya(D) === T && (W = new W(
              b,
              g + "enter",
              X,
              l,
              D
            ), W.target = E, W.relatedTarget = Et, C = W), Et = C, O && X)
              e: {
                for (W = Nh, b = O, g = X, E = 0, C = b; C; C = W(C))
                  E++;
                C = 0;
                for (var k = g; k; k = W(k))
                  C++;
                for (; 0 < E - C; )
                  b = W(b), E--;
                for (; 0 < C - E; )
                  g = W(g), C--;
                for (; E--; ) {
                  if (b === g || g !== null && b === g.alternate) {
                    W = b;
                    break e;
                  }
                  b = W(b), g = W(g);
                }
                W = null;
              }
            else W = null;
            O !== null && am(
              U,
              z,
              O,
              W,
              !1
            ), X !== null && Et !== null && am(
              U,
              Et,
              X,
              W,
              !0
            );
          }
        }
        t: {
          if (z = T ? un(T) : window, O = z.nodeName && z.nodeName.toLowerCase(), O === "select" || O === "input" && z.type === "file")
            var ht = So;
          else if (po(z))
            if (_o)
              ht = X0;
            else {
              ht = L0;
              var w = Y0;
            }
          else
            O = z.nodeName, !O || O.toLowerCase() !== "input" || z.type !== "checkbox" && z.type !== "radio" ? T && nc(T.elementType) && (ht = So) : ht = G0;
          if (ht && (ht = ht(t, T))) {
            bo(
              U,
              ht,
              l,
              D
            );
            break t;
          }
          w && w(t, z, T), t === "focusout" && T && z.type === "number" && T.memoizedProps.value != null && ac(z, "number", z.value);
        }
        switch (w = T ? un(T) : window, t) {
          case "focusin":
            (po(w) || w.contentEditable === "true") && (Aa = w, pc = T, hn = null);
            break;
          case "focusout":
            hn = pc = Aa = null;
            break;
          case "mousedown":
            bc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            bc = !1, Co(U, l, D);
            break;
          case "selectionchange":
            if (w0) break;
          case "keydown":
          case "keyup":
            Co(U, l, D);
        }
        var at;
        if (vc)
          t: {
            switch (t) {
              case "compositionstart":
                var ot = "onCompositionStart";
                break t;
              case "compositionend":
                ot = "onCompositionEnd";
                break t;
              case "compositionupdate":
                ot = "onCompositionUpdate";
                break t;
            }
            ot = void 0;
          }
        else
          za ? yo(t, l) && (ot = "onCompositionEnd") : t === "keydown" && l.keyCode === 229 && (ot = "onCompositionStart");
        ot && (mo && l.locale !== "ko" && (za || ot !== "onCompositionStart" ? ot === "onCompositionEnd" && za && (at = co()) : (gl = D, rc = "value" in gl ? gl.value : gl.textContent, za = !0)), w = ri(T, ot), 0 < w.length && (ot = new oo(
          ot,
          t,
          null,
          l,
          D
        ), U.push({ event: ot, listeners: w }), at ? ot.data = at : (at = go(l), at !== null && (ot.data = at)))), (at = x0 ? H0(t, l) : j0(t, l)) && (ot = ri(T, "onBeforeInput"), 0 < ot.length && (w = new oo(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          D
        ), U.push({
          event: w,
          listeners: ot
        }), w.data = at)), Oh(
          U,
          t,
          T,
          l,
          D
        );
      }
      em(U, e);
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
  function Nh(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function am(t, e, l, a, n) {
    for (var u = e._reactName, c = []; l !== null && l !== a; ) {
      var s = l, m = s.alternate, T = s.stateNode;
      if (s = s.tag, m !== null && m === a) break;
      s !== 5 && s !== 26 && s !== 27 || T === null || (m = T, n ? (T = cn(l, u), T != null && c.unshift(
        Gn(l, T, m)
      )) : n || (T = cn(l, u), T != null && c.push(
        Gn(l, T, m)
      ))), l = l.return;
    }
    c.length !== 0 && t.push({ event: e, listeners: c });
  }
  var Uh = /\r\n?/g, Rh = /\u0000|\uFFFD/g;
  function nm(t) {
    return (typeof t == "string" ? t : "" + t).replace(Uh, `
`).replace(Rh, "");
  }
  function um(t, e) {
    return e = nm(e), nm(t) === e;
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
        no(t, a, u);
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
        a != null && ft("scroll", t);
        break;
      case "onScrollEnd":
        a != null && ft("scrollend", t);
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
        ft("beforetoggle", t), ft("toggle", t), du(t, "popover", a);
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
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = i0.get(l) || l, du(t, l, a));
    }
  }
  function Vf(t, e, l, a, n, u) {
    switch (l) {
      case "style":
        no(t, a, u);
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
        a != null && ft("scroll", t);
        break;
      case "onScrollEnd":
        a != null && ft("scrollend", t);
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
        if (!kr.hasOwnProperty(l))
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
        ft("error", t), ft("load", t);
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
        ft("invalid", t);
        var s = u = c = n = null, m = null, T = null;
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
        to(
          t,
          u,
          s,
          m,
          T,
          c,
          n,
          !1
        );
        return;
      case "select":
        ft("invalid", t), a = c = u = null;
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
        ft("invalid", t), u = n = a = null;
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
        lo(t, a, n, u);
        return;
      case "option":
        for (m in l)
          l.hasOwnProperty(m) && (a = l[m], a != null) && (m === "selected" ? t.selected = a && typeof a != "function" && typeof a != "symbol" : _t(t, e, m, a, l, null));
        return;
      case "dialog":
        ft("beforetoggle", t), ft("toggle", t), ft("cancel", t), ft("close", t);
        break;
      case "iframe":
      case "object":
        ft("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Ln.length; a++)
          ft(Ln[a], t);
        break;
      case "image":
        ft("error", t), ft("load", t);
        break;
      case "details":
        ft("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        ft("error", t), ft("load", t);
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
        if (nc(e)) {
          for (D in l)
            l.hasOwnProperty(D) && (a = l[D], a !== void 0 && Vf(
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
  function xh(t, e, l, a) {
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
        var n = null, u = null, c = null, s = null, m = null, T = null, D = null;
        for (O in l) {
          var U = l[O];
          if (l.hasOwnProperty(O) && U != null)
            switch (O) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                m = U;
              default:
                a.hasOwnProperty(O) || _t(t, e, O, null, a, U);
            }
        }
        for (var z in a) {
          var O = a[z];
          if (U = l[z], a.hasOwnProperty(z) && (O != null || U != null))
            switch (z) {
              case "type":
                u = O;
                break;
              case "name":
                n = O;
                break;
              case "checked":
                T = O;
                break;
              case "defaultChecked":
                D = O;
                break;
              case "value":
                c = O;
                break;
              case "defaultValue":
                s = O;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (O != null)
                  throw Error(r(137, e));
                break;
              default:
                O !== U && _t(
                  t,
                  e,
                  z,
                  O,
                  a,
                  U
                );
            }
        }
        lc(
          t,
          c,
          s,
          m,
          T,
          D,
          u,
          n
        );
        return;
      case "select":
        O = c = s = z = null;
        for (u in l)
          if (m = l[u], l.hasOwnProperty(u) && m != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                O = m;
              default:
                a.hasOwnProperty(u) || _t(
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
                z = u;
                break;
              case "defaultValue":
                s = u;
                break;
              case "multiple":
                c = u;
              default:
                u !== m && _t(
                  t,
                  e,
                  n,
                  u,
                  a,
                  m
                );
            }
        e = s, l = c, a = O, z != null ? Sa(t, !!l, z, !1) : !!a != !!l && (e != null ? Sa(t, !!l, e, !0) : Sa(t, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        O = z = null;
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
                O = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(r(91));
                break;
              default:
                n !== u && _t(t, e, c, n, a, u);
            }
        eo(t, z, O);
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
        for (m in a)
          z = a[m], O = l[m], a.hasOwnProperty(m) && z !== O && (z != null || O != null) && (m === "selected" ? t.selected = z && typeof z != "function" && typeof z != "symbol" : _t(
            t,
            e,
            m,
            z,
            a,
            O
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
        for (var W in l)
          z = l[W], l.hasOwnProperty(W) && z != null && !a.hasOwnProperty(W) && _t(t, e, W, null, a, z);
        for (T in a)
          if (z = a[T], O = l[T], a.hasOwnProperty(T) && z !== O && (z != null || O != null))
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
                  O
                );
            }
        return;
      default:
        if (nc(e)) {
          for (var Et in l)
            z = l[Et], l.hasOwnProperty(Et) && z !== void 0 && !a.hasOwnProperty(Et) && Vf(
              t,
              e,
              Et,
              void 0,
              a,
              z
            );
          for (D in a)
            z = a[D], O = l[D], !a.hasOwnProperty(D) || z === O || z === void 0 && O === void 0 || Vf(
              t,
              e,
              D,
              z,
              a,
              O
            );
          return;
        }
    }
    for (var b in l)
      z = l[b], l.hasOwnProperty(b) && z != null && !a.hasOwnProperty(b) && _t(t, e, b, null, a, z);
    for (U in a)
      z = a[U], O = l[U], !a.hasOwnProperty(U) || z === O || z == null && O == null || _t(t, e, U, z, a, O);
  }
  function im(t) {
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
  function Hh() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, l = performance.getEntriesByType("resource"), a = 0; a < l.length; a++) {
        var n = l[a], u = n.transferSize, c = n.initiatorType, s = n.duration;
        if (u && s && im(c)) {
          for (c = 0, s = n.responseEnd, a += 1; a < l.length; a++) {
            var m = l[a], T = m.startTime;
            if (T > s) break;
            var D = m.transferSize, U = m.initiatorType;
            D && im(U) && (m = m.responseEnd, c += D * (m < s ? 1 : (s - T) / (m - T)));
          }
          if (--a, e += 8 * (u + c) / (n.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var Kf = null, Jf = null;
  function oi(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function cm(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function fm(t, e) {
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
  function $f(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var kf = null;
  function jh() {
    var t = window.event;
    return t && t.type === "popstate" ? t === kf ? !1 : (kf = t, !0) : (kf = null, !1);
  }
  var rm = typeof setTimeout == "function" ? setTimeout : void 0, Bh = typeof clearTimeout == "function" ? clearTimeout : void 0, om = typeof Promise == "function" ? Promise : void 0, qh = typeof queueMicrotask == "function" ? queueMicrotask : typeof om < "u" ? function(t) {
    return om.resolve(null).then(t).catch(Yh);
  } : rm;
  function Yh(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Hl(t) {
    return t === "head";
  }
  function sm(t, e) {
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
  function dm(t, e) {
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
  function Ff(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (e = e.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Ff(l), tc(l);
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
  function Lh(t, e, l, a) {
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
      if (t = Ue(t.nextSibling), t === null) break;
    }
    return null;
  }
  function Gh(t, e, l) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = Ue(t.nextSibling), t === null)) return null;
    return t;
  }
  function mm(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Ue(t.nextSibling), t === null)) return null;
    return t;
  }
  function Wf(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function If(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function Xh(t, e) {
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
  var Pf = null;
  function vm(t) {
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
  function hm(t) {
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
  function ym(t, e, l) {
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
    tc(t);
  }
  var Re = /* @__PURE__ */ new Map(), gm = /* @__PURE__ */ new Set();
  function si(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var rl = Y.d;
  Y.d = {
    f: Qh,
    r: wh,
    D: Zh,
    C: Vh,
    L: Kh,
    m: Jh,
    X: kh,
    S: $h,
    M: Fh
  };
  function Qh() {
    var t = rl.f(), e = li();
    return t || e;
  }
  function wh(t) {
    var e = ga(t);
    e !== null && e.tag === 5 && e.type === "form" ? Hs(e) : rl.r(t);
  }
  var ka = typeof document > "u" ? null : document;
  function pm(t, e, l) {
    var a = ka;
    if (a && typeof e == "string" && e) {
      var n = ze(e);
      n = 'link[rel="' + t + '"][href="' + n + '"]', typeof l == "string" && (n += '[crossorigin="' + l + '"]'), gm.has(n) || (gm.add(n), t = { rel: t, crossOrigin: l, href: e }, a.querySelector(n) === null && (e = a.createElement("link"), Pt(e, "link", t), Vt(e), a.head.appendChild(e)));
    }
  }
  function Zh(t) {
    rl.D(t), pm("dns-prefetch", t, null);
  }
  function Vh(t, e) {
    rl.C(t, e), pm("preconnect", t, e);
  }
  function Kh(t, e, l) {
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
      Re.has(u) || (t = x(
        {
          rel: "preload",
          href: e === "image" && l && l.imageSrcSet ? void 0 : t,
          as: e
        },
        l
      ), Re.set(u, t), a.querySelector(n) !== null || e === "style" && a.querySelector(Qn(u)) || e === "script" && a.querySelector(wn(u)) || (e = a.createElement("link"), Pt(e, "link", t), Vt(e), a.head.appendChild(e)));
    }
  }
  function Jh(t, e) {
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
      if (!Re.has(u) && (t = x({ rel: "modulepreload", href: t }, e), Re.set(u, t), l.querySelector(n) === null)) {
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
  function $h(t, e, l) {
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
          ), (l = Re.get(u)) && tr(t, l);
          var m = c = a.createElement("link");
          Vt(m), Pt(m, "link", t), m._p = new Promise(function(T, D) {
            m.onload = T, m.onerror = D;
          }), m.addEventListener("load", function() {
            s.loading |= 1;
          }), m.addEventListener("error", function() {
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
  function kh(t, e) {
    rl.X(t, e);
    var l = ka;
    if (l && t) {
      var a = pa(l).hoistableScripts, n = Wa(t), u = a.get(n);
      u || (u = l.querySelector(wn(n)), u || (t = x({ src: t, async: !0 }, e), (e = Re.get(n)) && er(t, e), u = l.createElement("script"), Vt(u), Pt(u, "link", t), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function Fh(t, e) {
    rl.M(t, e);
    var l = ka;
    if (l && t) {
      var a = pa(l).hoistableScripts, n = Wa(t), u = a.get(n);
      u || (u = l.querySelector(wn(n)), u || (t = x({ src: t, async: !0, type: "module" }, e), (e = Re.get(n)) && er(t, e), u = l.createElement("script"), Vt(u), Pt(u, "link", t), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function bm(t, e, l, a) {
    var n = (n = nt.current) ? si(n) : null;
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
          )) && !u._p && (c.instance = u, c.state.loading = 5), Re.has(t) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, Re.set(t, l), u || Wh(
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
  function Sm(t) {
    return x({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function Wh(t, e, l, a) {
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
  function _m(t, e, l) {
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
          a = Sm(l), (n = Re.get(n)) && tr(a, n), u = (t.ownerDocument || t).createElement("link"), Vt(u);
          var c = u;
          return c._p = new Promise(function(s, m) {
            c.onload = s, c.onerror = m;
          }), Pt(u, "link", a), e.state.loading |= 4, di(u, l.precedence, t), e.instance = u;
        case "script":
          return u = Wa(l.src), (n = t.querySelector(
            wn(u)
          )) ? (e.instance = n, Vt(n), n) : (a = l, (n = Re.get(u)) && (a = x({}, l), er(a, n)), t = t.ownerDocument || t, n = t.createElement("script"), Vt(n), Pt(n, "link", a), t.head.appendChild(n), e.instance = n);
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
  function tr(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function er(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var mi = null;
  function Em(t, e, l) {
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
  function Tm(t, e, l) {
    t = t.ownerDocument || t, t.head.insertBefore(
      l,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function Ih(t, e, l) {
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
  function zm(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function Ph(t, e, l, a) {
    if (l.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var n = Fa(a.href), u = e.querySelector(
          Qn(n)
        );
        if (u) {
          e = u._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = vi.bind(t), e.then(t, t)), l.state.loading |= 4, l.instance = u, Vt(u);
          return;
        }
        u = e.ownerDocument || e, a = Sm(a), (n = Re.get(n)) && tr(a, n), u = u.createElement("link"), Vt(u);
        var c = u;
        c._p = new Promise(function(s, m) {
          c.onload = s, c.onerror = m;
        }), Pt(u, "link", a), l.instance = u;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(l, e), (e = l.state.preload) && (l.state.loading & 3) === 0 && (t.count++, l = vi.bind(t), e.addEventListener("load", l), e.addEventListener("error", l));
    }
  }
  var lr = 0;
  function ty(t, e) {
    return t.stylesheets && t.count === 0 && yi(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(l) {
      var a = setTimeout(function() {
        if (t.stylesheets && yi(t, t.stylesheets), t.unsuspend) {
          var u = t.unsuspend;
          t.unsuspend = null, u();
        }
      }, 6e4 + e);
      0 < t.imgBytes && lr === 0 && (lr = 62500 * Hh());
      var n = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && yi(t, t.stylesheets), t.unsuspend)) {
            var u = t.unsuspend;
            t.unsuspend = null, u();
          }
        },
        (t.imgBytes > lr ? 50 : 800) + e
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
    t.stylesheets = null, t.unsuspend !== null && (t.count++, hi = /* @__PURE__ */ new Map(), e.forEach(ey, t), hi = null, vi.call(t));
  }
  function ey(t, e) {
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
    $$typeof: K,
    Provider: null,
    Consumer: null,
    _currentValue: $,
    _currentValue2: $,
    _threadCount: 0
  };
  function ly(t, e, l, a, n, u, c, s, m) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Fi(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Fi(0), this.hiddenUpdates = Fi(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = m, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Am(t, e, l, a, n, u, c, s, m, T, D, U) {
    return t = new ly(
      t,
      e,
      l,
      c,
      m,
      T,
      D,
      U,
      s
    ), e = 1, u === !0 && (e |= 24), u = ye(3, null, null, e), t.current = u, u.stateNode = t, e = Hc(), e.refCount++, t.pooledCache = e, e.refCount++, u.memoizedState = {
      element: a,
      isDehydrated: l,
      cache: e
    }, Yc(u), t;
  }
  function Om(t) {
    return t ? (t = Da, t) : Da;
  }
  function Mm(t, e, l, a, n, u) {
    n = Om(n), a.context === null ? a.context = n : a.pendingContext = n, a = Tl(e), a.payload = { element: l }, u = u === void 0 ? null : u, u !== null && (a.callback = u), l = zl(t, a, e), l !== null && (re(l, t, e), En(l, t, e));
  }
  function Dm(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function ar(t, e) {
    Dm(t, e), (t = t.alternate) && Dm(t, e);
  }
  function Cm(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Fl(t, 67108864);
      e !== null && re(e, t, 67108864), ar(t, 67108864);
    }
  }
  function Nm(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = _e();
      e = Wi(e);
      var l = Fl(t, e);
      l !== null && re(l, t, e), ar(t, e);
    }
  }
  var gi = !0;
  function ay(t, e, l, a) {
    var n = M.T;
    M.T = null;
    var u = Y.p;
    try {
      Y.p = 2, nr(t, e, l, a);
    } finally {
      Y.p = u, M.T = n;
    }
  }
  function ny(t, e, l, a) {
    var n = M.T;
    M.T = null;
    var u = Y.p;
    try {
      Y.p = 8, nr(t, e, l, a);
    } finally {
      Y.p = u, M.T = n;
    }
  }
  function nr(t, e, l, a) {
    if (gi) {
      var n = ur(a);
      if (n === null)
        Zf(
          t,
          e,
          a,
          pi,
          l
        ), Rm(t, a);
      else if (iy(
        n,
        t,
        e,
        l,
        a
      ))
        a.stopPropagation();
      else if (Rm(t, a), e & 4 && -1 < uy.indexOf(t)) {
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
                      var m = 1 << 31 - ve(c);
                      s.entanglements[1] |= m, c &= ~m;
                    }
                    Qe(u), (gt & 6) === 0 && (ti = de() + 500, Yn(0));
                  }
                }
                break;
              case 31:
              case 13:
                s = Fl(u, 2), s !== null && re(s, u, 2), li(), ar(u, 2);
            }
          if (u = ur(a), u === null && Zf(
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
        Zf(
          t,
          e,
          a,
          null,
          l
        );
    }
  }
  function ur(t) {
    return t = ic(t), ir(t);
  }
  var pi = null;
  function ir(t) {
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
        switch (Zv()) {
          case Yr:
            return 2;
          case Lr:
            return 8;
          case cu:
          case Vv:
            return 32;
          case Gr:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var cr = !1, jl = null, Bl = null, ql = null, Vn = /* @__PURE__ */ new Map(), Kn = /* @__PURE__ */ new Map(), Yl = [], uy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Rm(t, e) {
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
    }, e !== null && (e = ga(e), e !== null && Cm(e)), t) : (t.eventSystemFlags |= a, e = t.targetContainers, n !== null && e.indexOf(n) === -1 && e.push(n), t);
  }
  function iy(t, e, l, a, n) {
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
  function xm(t) {
    var e = ya(t.target);
    if (e !== null) {
      var l = p(e);
      if (l !== null) {
        if (e = l.tag, e === 13) {
          if (e = _(l), e !== null) {
            t.blockedOn = e, Kr(t.priority, function() {
              Nm(l);
            });
            return;
          }
        } else if (e === 31) {
          if (e = S(l), e !== null) {
            t.blockedOn = e, Kr(t.priority, function() {
              Nm(l);
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
      var l = ur(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var a = new l.constructor(
          l.type,
          l
        );
        uc = a, l.target.dispatchEvent(a), uc = null;
      } else
        return e = ga(l), e !== null && Cm(e), t.blockedOn = l, !1;
      e.shift();
    }
    return !0;
  }
  function Hm(t, e, l) {
    bi(t) && l.delete(e);
  }
  function cy() {
    cr = !1, jl !== null && bi(jl) && (jl = null), Bl !== null && bi(Bl) && (Bl = null), ql !== null && bi(ql) && (ql = null), Vn.forEach(Hm), Kn.forEach(Hm);
  }
  function Si(t, e) {
    t.blockedOn === e && (t.blockedOn = null, cr || (cr = !0, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      cy
    )));
  }
  var _i = null;
  function jm(t) {
    _i !== t && (_i = t, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      function() {
        _i === t && (_i = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e], a = t[e + 1], n = t[e + 2];
          if (typeof a != "function") {
            if (ir(a || l) === null)
              continue;
            break;
          }
          var u = ga(l);
          u !== null && (t.splice(e, 3), e -= 3, nf(
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
    function e(m) {
      return Si(m, t);
    }
    jl !== null && Si(jl, t), Bl !== null && Si(Bl, t), ql !== null && Si(ql, t), Vn.forEach(e), Kn.forEach(e);
    for (var l = 0; l < Yl.length; l++) {
      var a = Yl[l];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < Yl.length && (l = Yl[0], l.blockedOn === null); )
      xm(l), l.blockedOn === null && Yl.shift();
    if (l = (t.ownerDocument || t).$$reactFormReplay, l != null)
      for (a = 0; a < l.length; a += 3) {
        var n = l[a], u = l[a + 1], c = n[ae] || null;
        if (typeof u == "function")
          c || jm(l);
        else if (c) {
          var s = null;
          if (u && u.hasAttribute("formAction")) {
            if (n = u, c = u[ae] || null)
              s = c.formAction;
            else if (ir(n) !== null) continue;
          } else s = c.action;
          typeof s == "function" ? l[a + 1] = s : (l.splice(a, 3), a -= 3), jm(l);
        }
      }
  }
  function Bm() {
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
  function fr(t) {
    this._internalRoot = t;
  }
  Ei.prototype.render = fr.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(r(409));
    var l = e.current, a = _e();
    Mm(l, a, t, e, null, null);
  }, Ei.prototype.unmount = fr.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      Mm(t.current, 2, null, t, null, null), li(), e[ha] = null;
    }
  };
  function Ei(t) {
    this._internalRoot = t;
  }
  Ei.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = Vr();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < Yl.length && e !== 0 && e < Yl[l].priority; l++) ;
      Yl.splice(l, 0, t), l === 0 && xm(t);
    }
  };
  var qm = f.version;
  if (qm !== "19.2.3")
    throw Error(
      r(
        527,
        qm,
        "19.2.3"
      )
    );
  Y.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(r(188)) : (t = Object.keys(t).join(","), Error(r(268, t)));
    return t = h(e), t = t !== null ? R(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var fy = {
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
          fy
        ), me = Ti;
      } catch {
      }
  }
  return kn.createRoot = function(t, e) {
    if (!d(t)) throw Error(r(299));
    var l = !1, a = "", n = Zs, u = Vs, c = Ks;
    return e != null && (e.unstable_strictMode === !0 && (l = !0), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (u = e.onCaughtError), e.onRecoverableError !== void 0 && (c = e.onRecoverableError)), e = Am(
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
      Bm
    ), t[ha] = e.current, wf(t), new fr(e);
  }, kn.hydrateRoot = function(t, e, l) {
    if (!d(t)) throw Error(r(299));
    var a = !1, n = "", u = Zs, c = Vs, s = Ks, m = null;
    return l != null && (l.unstable_strictMode === !0 && (a = !0), l.identifierPrefix !== void 0 && (n = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (c = l.onCaughtError), l.onRecoverableError !== void 0 && (s = l.onRecoverableError), l.formState !== void 0 && (m = l.formState)), e = Am(
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
      Bm
    ), e.context = Om(null), l = e.current, a = _e(), a = Wi(a), n = Tl(a), n.callback = null, zl(l, n, a), l = a, e.current.lanes = l, an(e, l), Qe(e), t[ha] = e.current, wf(t), new Ei(e);
  }, kn.version = "19.2.3", kn;
}
var $m;
function by() {
  if ($m) return sr.exports;
  $m = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (f) {
        console.error(f);
      }
  }
  return i(), sr.exports = py(), sr.exports;
}
var Sy = by(), _y = Object.defineProperty, Ey = (i, f, o) => f in i ? _y(i, f, { enumerable: !0, configurable: !0, writable: !0, value: o }) : i[f] = o, zi = (i, f, o) => Ey(i, typeof f != "symbol" ? f + "" : f, o);
const Ty = {
  stringify: (i) => i ? "true" : "false",
  parse: (i) => /^[ty1-9]/i.test(i)
}, zy = {
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
}, Ay = {
  stringify: (i) => JSON.stringify(i),
  parse: (i) => JSON.parse(i)
};
function Oy(i) {
  return i.replace(
    /([a-z0-9])([A-Z])/g,
    (f, o, r) => `${o}-${r.toLowerCase()}`
  );
}
function sv(i) {
  return i.replace(/[-:]([a-z])/g, (f, o) => `${o.toUpperCase()}`);
}
const My = {
  stringify: (i) => i.name,
  parse: (i, f, o) => {
    const r = (() => {
      const d = sv(f);
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
}, hr = {
  string: Cy,
  number: Dy,
  boolean: Ty,
  function: zy,
  method: My,
  json: Ay
}, Fn = /* @__PURE__ */ Symbol.for("r2wc.render"), Ai = /* @__PURE__ */ Symbol.for("r2wc.connected"), ra = /* @__PURE__ */ Symbol.for("r2wc.context"), Ee = /* @__PURE__ */ Symbol.for("r2wc.props");
function Ny(i, f, o) {
  var r, d, p;
  f.props || (f.props = i.propTypes ? Object.keys(i.propTypes) : []), f.events || (f.events = []);
  const _ = Array.isArray(f.props) ? f.props.slice() : Object.keys(f.props), S = Array.isArray(f.events) ? f.events.slice() : Object.keys(f.events), v = {}, h = {}, R = {}, x = {};
  for (const q of _) {
    v[q] = Array.isArray(f.props) ? "string" : f.props[q];
    const B = Oy(q);
    R[q] = B, x[B] = q;
  }
  for (const q of S)
    h[q] = Array.isArray(f.events) ? {} : f.events[q];
  class j extends HTMLElement {
    constructor() {
      super(), zi(this, p, !0), zi(this, d), zi(this, r, {}), zi(this, "container"), f.shadow ? this.container = this.attachShadow({
        mode: f.shadow
      }) : this.container = this, this[Ee].container = this.container;
      for (const B of _) {
        const Q = R[B], Z = this.getAttribute(Q), F = v[B], P = F ? hr[F] : null;
        if (F === "method") {
          const K = sv(Q);
          Object.defineProperty(this[Ee].container, K, {
            enumerable: !0,
            configurable: !0,
            get() {
              return this[Ee][K];
            },
            set(G) {
              this[Ee][K] = G, this[Fn]();
            }
          }), this[Ee][B] = P.parse(Z, Q, this);
        }
        P != null && P.parse && Z && (this[Ee][B] = P.parse(Z, Q, this));
      }
      for (const B of S)
        this[Ee][B] = (Q) => {
          const Z = B.replace(/^on/, "").toLowerCase();
          this.dispatchEvent(
            new CustomEvent(Z, { detail: Q, ...h[B] })
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
    attributeChangedCallback(B, Q, Z) {
      const F = x[B], P = v[F], K = P ? hr[P] : null;
      F in v && K != null && K.parse && Z && (this[Ee][F] = K.parse(Z, B, this), this[Fn]());
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
    const B = R[q], Q = v[q];
    Object.defineProperty(j.prototype, q, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[Ee][q];
      },
      set(Z) {
        this[Ee][q] = Z;
        const F = Q ? hr[Q] : null;
        if (F != null && F.stringify) {
          const P = F.stringify(Z, B, this);
          this.getAttribute(B) !== P && this.setAttribute(B, P);
        } else
          this[Fn]();
      }
    });
  }
  return j;
}
function Uy(i, f, o) {
  const r = Sy.createRoot(i), d = tt.createElement(f, o);
  return r.render(d), {
    root: r,
    ReactComponent: f
  };
}
function Ry({ root: i, ReactComponent: f }, o) {
  const r = tt.createElement(f, o);
  i.render(r);
}
function xy({ root: i }) {
  i.unmount();
}
function Hi(i, f = {}) {
  return Ny(i, f, { mount: Uy, update: Ry, unmount: xy });
}
const Hy = "_container_3e8r5_1", jy = "_counter_3e8r5_10", By = "_button_3e8r5_17", qy = "_count_3e8r5_10", Yy = "_label_3e8r5_40", Pa = {
  container: Hy,
  counter: jy,
  button: By,
  count: qy,
  label: Yy
}, Ly = "._container_3e8r5_1{display:block;padding:20px;border:2px solid #61dafb;border-radius:8px;margin:10px 0;background:#f0f9ff}._counter_3e8r5_10{display:flex;align-items:center;gap:15px;font-size:18px}._button_3e8r5_17{padding:8px 16px;font-size:16px;border:1px solid #61dafb;background:#61dafb;color:#000;border-radius:4px;cursor:pointer;transition:background .2s}._button_3e8r5_17:hover{background:#4fa8c5}._count_3e8r5_10{font-weight:700;min-width:40px;text-align:center;font-size:24px;color:#333}._label_3e8r5_40{color:#666;font-size:14px}";
function Gy({ count: i = 0 }) {
  const [f, o] = A.useState(i);
  return A.useEffect(() => {
    o(i);
  }, [i]), A.useEffect(() => {
    const r = "react-counter-styles";
    if (!document.getElementById(r)) {
      const d = document.createElement("style");
      d.id = r, d.textContent = Ly, document.head.appendChild(d);
    }
  }, []), /* @__PURE__ */ ut.jsx("div", { className: Pa.container, children: /* @__PURE__ */ ut.jsxs("div", { className: Pa.counter, children: [
    /* @__PURE__ */ ut.jsx("div", { className: Pa.label, children: "React Counter:" }),
    /* @__PURE__ */ ut.jsx("button", { type: "button", className: Pa.button, onClick: () => o(f - 1), children: "-" }),
    /* @__PURE__ */ ut.jsx("span", { className: Pa.count, children: f }),
    /* @__PURE__ */ ut.jsx("button", { type: "button", className: Pa.button, onClick: () => o(f + 1), children: "+" })
  ] }) });
}
const Xy = Hi(Gy, {
  props: {
    count: "number"
  }
});
customElements.get("react-counter") || customElements.define("react-counter", Xy);
var Qy = ov(), wy = Object.defineProperty, Zy = (i, f, o) => f in i ? wy(i, f, { enumerable: !0, configurable: !0, writable: !0, value: o }) : i[f] = o, yr = (i, f, o) => (Zy(i, typeof f != "symbol" ? f + "" : f, o), o);
let Vy = class {
  constructor() {
    yr(this, "current", this.detect()), yr(this, "handoffState", "pending"), yr(this, "currentId", 0);
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
}, Ze = new Vy();
function au(i) {
  var f;
  return Ze.isServer ? null : i == null ? document : (f = i?.ownerDocument) != null ? f : document;
}
function Tr(i) {
  var f, o;
  return Ze.isServer ? null : i == null ? document : (o = (f = i?.getRootNode) == null ? void 0 : f.call(i)) != null ? o : document;
}
function dv(i) {
  var f, o;
  return (o = (f = Tr(i)) == null ? void 0 : f.activeElement) != null ? o : null;
}
function Ky(i) {
  return dv(i) === i;
}
function ji(i) {
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
    return ji(() => {
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
function Bi() {
  let [i] = A.useState(vl);
  return A.useEffect(() => () => i.dispose(), [i]), i;
}
let oe = (i, f) => {
  Ze.isServer ? A.useEffect(i, f) : A.useLayoutEffect(i, f);
};
function va(i) {
  let f = A.useRef(i);
  return oe(() => {
    f.current = i;
  }, [i]), f;
}
let At = function(i) {
  let f = va(i);
  return tt.useCallback((...o) => f.current(...o), [f]);
};
function nu(i) {
  return A.useMemo(() => i, Object.values(i));
}
let Jy = A.createContext(void 0);
function $y() {
  return A.useContext(Jy);
}
function zr(...i) {
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
  let i = Fy();
  return A.useCallback((f) => ky({ mergeRefs: i, ...f }), [i]);
}
function ky({ ourProps: i, theirProps: f, slot: o, defaultTag: r, features: d, visible: p = !0, name: _, mergeRefs: S }) {
  S = S ?? Wy;
  let v = mv(f, i);
  if (p) return Oi(v, o, r, _, S);
  let h = d ?? 0;
  if (h & 2) {
    let { static: R = !1, ...x } = v;
    if (R) return Oi(x, o, r, _, S);
  }
  if (h & 1) {
    let { unmount: R = !0, ...x } = v;
    return ml(R ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return Oi({ ...x, hidden: !0, style: { display: "none" } }, o, r, _, S);
    } });
  }
  return Oi(v, o, r, _, S);
}
function Oi(i, f = {}, o, r, d) {
  let { as: p = o, children: _, refName: S = "ref", ...v } = gr(i, ["unmount", "static"]), h = i.ref !== void 0 ? { [S]: i.ref } : {}, R = typeof _ == "function" ? _(f) : _;
  "className" in v && v.className && typeof v.className == "function" && (v.className = v.className(f)), v["aria-labelledby"] && v["aria-labelledby"] === v.id && (v["aria-labelledby"] = void 0);
  let x = {};
  if (f) {
    let j = !1, q = [];
    for (let [B, Q] of Object.entries(f)) typeof Q == "boolean" && (j = !0), Q === !0 && q.push(B.replace(/([A-Z])/g, (Z) => `-${Z.toLowerCase()}`));
    if (j) {
      x["data-headlessui-state"] = q.join(" ");
      for (let B of q) x[`data-${B}`] = "";
    }
  }
  if (tu(p) && (Object.keys(oa(v)).length > 0 || Object.keys(oa(x)).length > 0)) if (!A.isValidElement(R) || Array.isArray(R) && R.length > 1 || Py(R)) {
    if (Object.keys(oa(v)).length > 0) throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(oa(v)).concat(Object.keys(oa(x))).map((j) => `  - ${j}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((j) => `  - ${j}`).join(`
`)].join(`
`));
  } else {
    let j = R.props, q = j?.className, B = typeof q == "function" ? (...F) => zr(q(...F), v.className) : zr(q, v.className), Q = B ? { className: B } : {}, Z = mv(R.props, oa(gr(v, ["ref"])));
    for (let F in x) F in Z && delete x[F];
    return A.cloneElement(R, Object.assign({}, Z, x, h, { ref: d(Iy(R), h.ref) }, Q));
  }
  return A.createElement(p, Object.assign({}, gr(v, ["ref"]), !tu(p) && h, !tu(p) && x), R);
}
function Fy() {
  let i = A.useRef([]), f = A.useCallback((o) => {
    for (let r of i.current) r != null && (typeof r == "function" ? r(o) : r.current = o);
  }, []);
  return (...o) => {
    if (!o.every((r) => r == null)) return i.current = o, f;
  };
}
function Wy(...i) {
  return i.every((f) => f == null) ? void 0 : (f) => {
    for (let o of i) o != null && (typeof o == "function" ? o(f) : o.current = f);
  };
}
function mv(...i) {
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
  return Object.assign(A.forwardRef(i), { displayName: (f = i.displayName) != null ? f : i.name });
}
function oa(i) {
  let f = Object.assign({}, i);
  for (let o in f) f[o] === void 0 && delete f[o];
  return f;
}
function gr(i, f = []) {
  let o = Object.assign({}, i);
  for (let r of f) r in o && delete o[r];
  return o;
}
function Iy(i) {
  return tt.version.split(".")[0] >= "19" ? i.props.ref : i.ref;
}
function tu(i) {
  return i === A.Fragment || i === /* @__PURE__ */ Symbol.for("react.fragment");
}
function Py(i) {
  return tu(i.type);
}
let t1 = "span";
var Ui = ((i) => (i[i.None = 1] = "None", i[i.Focusable = 2] = "Focusable", i[i.Hidden = 4] = "Hidden", i))(Ui || {});
function e1(i, f) {
  var o;
  let { features: r = 1, ...d } = i, p = { ref: f, "aria-hidden": (r & 2) === 2 ? !0 : (o = d["aria-hidden"]) != null ? o : void 0, hidden: (r & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(r & 4) === 4 && (r & 2) !== 2 && { display: "none" } } };
  return He()({ ourProps: p, theirProps: d, slot: {}, defaultTag: t1, name: "Hidden" });
}
let Ar = se(e1);
function l1(i) {
  return typeof i != "object" || i === null ? !1 : "nodeType" in i;
}
function wl(i) {
  return l1(i) && "tagName" in i;
}
function ma(i) {
  return wl(i) && "accessKey" in i;
}
function Ql(i) {
  return wl(i) && "tabIndex" in i;
}
function a1(i) {
  return wl(i) && "style" in i;
}
function n1(i) {
  return ma(i) && i.nodeName === "IFRAME";
}
function u1(i) {
  return ma(i) && i.nodeName === "INPUT";
}
let vv = /* @__PURE__ */ Symbol();
function i1(i, f = !0) {
  return Object.assign(i, { [vv]: f });
}
function Ve(...i) {
  let f = A.useRef(i);
  A.useEffect(() => {
    f.current = i;
  }, [i]);
  let o = At((r) => {
    for (let d of f.current) d != null && (typeof d == "function" ? d(r) : d.current = r);
  });
  return i.every((r) => r == null || r?.[vv]) ? void 0 : o;
}
let Nr = A.createContext(null);
Nr.displayName = "DescriptionContext";
function hv() {
  let i = A.useContext(Nr);
  if (i === null) {
    let f = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(f, hv), f;
  }
  return i;
}
function c1() {
  let [i, f] = A.useState([]);
  return [i.length > 0 ? i.join(" ") : void 0, A.useMemo(() => function(o) {
    let r = At((p) => (f((_) => [..._, p]), () => f((_) => {
      let S = _.slice(), v = S.indexOf(p);
      return v !== -1 && S.splice(v, 1), S;
    }))), d = A.useMemo(() => ({ register: r, slot: o.slot, name: o.name, props: o.props, value: o.value }), [r, o.slot, o.name, o.props, o.value]);
    return tt.createElement(Nr.Provider, { value: d }, o.children);
  }, [f])];
}
let f1 = "p";
function r1(i, f) {
  let o = A.useId(), r = $y(), { id: d = `headlessui-description-${o}`, ...p } = i, _ = hv(), S = Ve(f);
  oe(() => _.register(d), [d, _.register]);
  let v = nu({ ..._.slot, disabled: r || !1 }), h = { ref: S, ..._.props, id: d };
  return He()({ ourProps: h, theirProps: p, slot: v, defaultTag: f1, name: _.name || "Description" });
}
let o1 = se(r1), s1 = Object.assign(o1, {});
var yv = ((i) => (i.Space = " ", i.Enter = "Enter", i.Escape = "Escape", i.Backspace = "Backspace", i.Delete = "Delete", i.ArrowLeft = "ArrowLeft", i.ArrowUp = "ArrowUp", i.ArrowRight = "ArrowRight", i.ArrowDown = "ArrowDown", i.Home = "Home", i.End = "End", i.PageUp = "PageUp", i.PageDown = "PageDown", i.Tab = "Tab", i))(yv || {});
let d1 = A.createContext(() => {
});
function m1({ value: i, children: f }) {
  return tt.createElement(d1.Provider, { value: i }, f);
}
let gv = class extends Map {
  constructor(f) {
    super(), this.factory = f;
  }
  get(f) {
    let o = super.get(f);
    return o === void 0 && (o = this.factory(f), this.set(f, o)), o;
  }
};
var v1 = Object.defineProperty, h1 = (i, f, o) => f in i ? v1(i, f, { enumerable: !0, configurable: !0, writable: !0, value: o }) : i[f] = o, y1 = (i, f, o) => (h1(i, f + "", o), o), pv = (i, f, o) => {
  if (!f.has(i)) throw TypeError("Cannot " + o);
}, xe = (i, f, o) => (pv(i, f, "read from private field"), o ? o.call(i) : f.get(i)), pr = (i, f, o) => {
  if (f.has(i)) throw TypeError("Cannot add the same private member more than once");
  f instanceof WeakSet ? f.add(i) : f.set(i, o);
}, km = (i, f, o, r) => (pv(i, f, "write to private field"), f.set(i, o), o), we, Wn, In;
let g1 = class {
  constructor(f) {
    pr(this, we, {}), pr(this, Wn, new gv(() => /* @__PURE__ */ new Set())), pr(this, In, /* @__PURE__ */ new Set()), y1(this, "disposables", vl()), km(this, we, f), Ze.isServer && this.disposables.microTask(() => {
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
      km(this, we, o);
      for (let r of xe(this, In)) {
        let d = r.selector(xe(this, we));
        bv(r.current, d) || (r.current = d, r.callback(d));
      }
      for (let r of xe(this, Wn).get(f.type)) r(xe(this, we), f);
    }
  }
};
we = /* @__PURE__ */ new WeakMap(), Wn = /* @__PURE__ */ new WeakMap(), In = /* @__PURE__ */ new WeakMap();
function bv(i, f) {
  return Object.is(i, f) ? !0 : typeof i != "object" || i === null || typeof f != "object" || f === null ? !1 : Array.isArray(i) && Array.isArray(f) ? i.length !== f.length ? !1 : br(i[Symbol.iterator](), f[Symbol.iterator]()) : i instanceof Map && f instanceof Map || i instanceof Set && f instanceof Set ? i.size !== f.size ? !1 : br(i.entries(), f.entries()) : Fm(i) && Fm(f) ? br(Object.entries(i)[Symbol.iterator](), Object.entries(f)[Symbol.iterator]()) : !1;
}
function br(i, f) {
  do {
    let o = i.next(), r = f.next();
    if (o.done && r.done) return !0;
    if (o.done || r.done || !Object.is(o.value, r.value)) return !1;
  } while (!0);
}
function Fm(i) {
  if (Object.prototype.toString.call(i) !== "[object Object]") return !1;
  let f = Object.getPrototypeOf(i);
  return f === null || Object.getPrototypeOf(f) === null;
}
var p1 = Object.defineProperty, b1 = (i, f, o) => f in i ? p1(i, f, { enumerable: !0, configurable: !0, writable: !0, value: o }) : i[f] = o, Wm = (i, f, o) => (b1(i, typeof f != "symbol" ? f + "" : f, o), o), S1 = ((i) => (i[i.Push = 0] = "Push", i[i.Pop = 1] = "Pop", i))(S1 || {});
let _1 = { 0(i, f) {
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
} }, E1 = class Sv extends g1 {
  constructor() {
    super(...arguments), Wm(this, "actions", { push: (f) => this.send({ type: 0, id: f }), pop: (f) => this.send({ type: 1, id: f }) }), Wm(this, "selectors", { isTop: (f, o) => f.stack[f.stack.length - 1] === o, inStack: (f, o) => f.stack.includes(o) });
  }
  static new() {
    return new Sv({ stack: [] });
  }
  reduce(f, o) {
    return ml(o.type, _1, f, o);
  }
};
const _v = new gv(() => E1.new());
var Sr = { exports: {} }, _r = {};
var Im;
function T1() {
  if (Im) return _r;
  Im = 1;
  var i = xi();
  function f(v, h) {
    return v === h && (v !== 0 || 1 / v === 1 / h) || v !== v && h !== h;
  }
  var o = typeof Object.is == "function" ? Object.is : f, r = i.useSyncExternalStore, d = i.useRef, p = i.useEffect, _ = i.useMemo, S = i.useDebugValue;
  return _r.useSyncExternalStoreWithSelector = function(v, h, R, x, j) {
    var q = d(null);
    if (q.current === null) {
      var B = { hasValue: !1, value: null };
      q.current = B;
    } else B = q.current;
    q = _(
      function() {
        function Z(V) {
          if (!F) {
            if (F = !0, P = V, V = x(V), j !== void 0 && B.hasValue) {
              var it = B.value;
              if (j(it, V))
                return K = it;
            }
            return K = V;
          }
          if (it = K, o(P, V)) return it;
          var J = x(V);
          return j !== void 0 && j(it, J) ? (P = V, it) : (P = V, K = J);
        }
        var F = !1, P, K, G = R === void 0 ? null : R;
        return [
          function() {
            return Z(h());
          },
          G === null ? void 0 : function() {
            return Z(G());
          }
        ];
      },
      [h, R, x, j]
    );
    var Q = r(v, q[0], q[1]);
    return p(
      function() {
        B.hasValue = !0, B.value = Q;
      },
      [Q]
    ), S(Q), Q;
  }, _r;
}
var Pm;
function z1() {
  return Pm || (Pm = 1, Sr.exports = T1()), Sr.exports;
}
var A1 = z1();
function Ev(i, f, o = bv) {
  return A1.useSyncExternalStoreWithSelector(At((r) => i.subscribe(O1, r)), At(() => i.state), At(() => i.state), At(f), o);
}
function O1(i) {
  return i;
}
function uu(i, f) {
  let o = A.useId(), r = _v.get(f), [d, p] = Ev(r, A.useCallback((_) => [r.selectors.isTop(_, o), r.selectors.inStack(_, o)], [r, o]));
  return oe(() => {
    if (i) return r.actions.push(o), () => r.actions.pop(o);
  }, [r, i, o]), i ? p ? d : !0 : !1;
}
let Or = /* @__PURE__ */ new Map(), eu = /* @__PURE__ */ new Map();
function tv(i) {
  var f;
  let o = (f = eu.get(i)) != null ? f : 0;
  return eu.set(i, o + 1), o !== 0 ? () => ev(i) : (Or.set(i, { "aria-hidden": i.getAttribute("aria-hidden"), inert: i.inert }), i.setAttribute("aria-hidden", "true"), i.inert = !0, () => ev(i));
}
function ev(i) {
  var f;
  let o = (f = eu.get(i)) != null ? f : 1;
  if (o === 1 ? eu.delete(i) : eu.set(i, o - 1), o !== 1) return;
  let r = Or.get(i);
  r && (r["aria-hidden"] === null ? i.removeAttribute("aria-hidden") : i.setAttribute("aria-hidden", r["aria-hidden"]), i.inert = r.inert, Or.delete(i));
}
function M1(i, { allowed: f, disallowed: o } = {}) {
  let r = uu(i, "inert-others");
  oe(() => {
    var d, p;
    if (!r) return;
    let _ = vl();
    for (let v of (d = o?.()) != null ? d : []) v && _.add(tv(v));
    let S = (p = f?.()) != null ? p : [];
    for (let v of S) {
      if (!v) continue;
      let h = au(v);
      if (!h) continue;
      let R = v.parentElement;
      for (; R && R !== h.body; ) {
        for (let x of R.children) S.some((j) => x.contains(j)) || _.add(tv(x));
        R = R.parentElement;
      }
    }
    return _.dispose;
  }, [r, f, o]);
}
function D1(i, f, o) {
  let r = va((d) => {
    let p = d.getBoundingClientRect();
    p.x === 0 && p.y === 0 && p.width === 0 && p.height === 0 && o();
  });
  A.useEffect(() => {
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
let Ri = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "details>summary", "textarea:not([disabled])"].map((i) => `${i}:not([tabindex='-1'])`).join(","), C1 = ["[data-autofocus]"].map((i) => `${i}:not([tabindex='-1'])`).join(",");
var sl = ((i) => (i[i.First = 1] = "First", i[i.Previous = 2] = "Previous", i[i.Next = 4] = "Next", i[i.Last = 8] = "Last", i[i.WrapAround = 16] = "WrapAround", i[i.NoScroll = 32] = "NoScroll", i[i.AutoFocus = 64] = "AutoFocus", i))(sl || {}), Mr = ((i) => (i[i.Error = 0] = "Error", i[i.Overflow = 1] = "Overflow", i[i.Success = 2] = "Success", i[i.Underflow = 3] = "Underflow", i))(Mr || {}), N1 = ((i) => (i[i.Previous = -1] = "Previous", i[i.Next = 1] = "Next", i))(N1 || {});
function U1(i = document.body) {
  return i == null ? [] : Array.from(i.querySelectorAll(Ri)).sort((f, o) => Math.sign((f.tabIndex || Number.MAX_SAFE_INTEGER) - (o.tabIndex || Number.MAX_SAFE_INTEGER)));
}
function R1(i = document.body) {
  return i == null ? [] : Array.from(i.querySelectorAll(C1)).sort((f, o) => Math.sign((f.tabIndex || Number.MAX_SAFE_INTEGER) - (o.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Tv = ((i) => (i[i.Strict = 0] = "Strict", i[i.Loose = 1] = "Loose", i))(Tv || {});
function x1(i, f = 0) {
  var o;
  return i === ((o = au(i)) == null ? void 0 : o.body) ? !1 : ml(f, { 0() {
    return i.matches(Ri);
  }, 1() {
    let r = i;
    for (; r !== null; ) {
      if (r.matches(Ri)) return !0;
      r = r.parentElement;
    }
    return !1;
  } });
}
var H1 = ((i) => (i[i.Keyboard = 0] = "Keyboard", i[i.Mouse = 1] = "Mouse", i))(H1 || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (i) => {
  i.metaKey || i.altKey || i.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (i) => {
  i.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : i.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function dl(i) {
  i?.focus({ preventScroll: !0 });
}
let j1 = ["textarea", "input"].join(",");
function B1(i) {
  var f, o;
  return (o = (f = i?.matches) == null ? void 0 : f.call(i, j1)) != null ? o : !1;
}
function q1(i, f = (o) => o) {
  return i.slice().sort((o, r) => {
    let d = f(o), p = f(r);
    if (d === null || p === null) return 0;
    let _ = d.compareDocumentPosition(p);
    return _ & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : _ & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function lu(i, f, { sorted: o = !0, relativeTo: r = null, skipElements: d = [] } = {}) {
  let p = Array.isArray(i) ? i.length > 0 ? Tr(i[0]) : document : Tr(i), _ = Array.isArray(i) ? o ? q1(i) : i : f & 64 ? R1(i) : U1(i);
  d.length > 0 && _.length > 1 && (_ = _.filter((q) => !d.some((B) => B != null && "current" in B ? B?.current === q : B === q))), r = r ?? p?.activeElement;
  let S = (() => {
    if (f & 5) return 1;
    if (f & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), v = (() => {
    if (f & 1) return 0;
    if (f & 2) return Math.max(0, _.indexOf(r)) - 1;
    if (f & 4) return Math.max(0, _.indexOf(r)) + 1;
    if (f & 8) return _.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), h = f & 32 ? { preventScroll: !0 } : {}, R = 0, x = _.length, j;
  do {
    if (R >= x || R + x <= 0) return 0;
    let q = v + R;
    if (f & 16) q = (q + x) % x;
    else {
      if (q < 0) return 3;
      if (q >= x) return 1;
    }
    j = _[q], j?.focus(h), R += S;
  } while (j !== dv(j));
  return f & 6 && B1(j) && j.select(), 2;
}
function zv() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function Y1() {
  return /Android/gi.test(window.navigator.userAgent);
}
function lv() {
  return zv() || Y1();
}
function Mi(i, f, o, r) {
  let d = va(o);
  A.useEffect(() => {
    if (!i) return;
    function p(_) {
      d.current(_);
    }
    return document.addEventListener(f, p, r), () => document.removeEventListener(f, p, r);
  }, [i, f, r]);
}
function Av(i, f, o, r) {
  let d = va(o);
  A.useEffect(() => {
    if (!i) return;
    function p(_) {
      d.current(_);
    }
    return window.addEventListener(f, p, r), () => window.removeEventListener(f, p, r);
  }, [i, f, r]);
}
const av = 30;
function L1(i, f, o) {
  let r = va(o), d = A.useCallback(function(S, v) {
    if (S.defaultPrevented) return;
    let h = v(S);
    if (h === null || !h.getRootNode().contains(h) || !h.isConnected) return;
    let R = (function x(j) {
      return typeof j == "function" ? x(j()) : Array.isArray(j) || j instanceof Set ? j : [j];
    })(f);
    for (let x of R) if (x !== null && (x.contains(h) || S.composed && S.composedPath().includes(x))) return;
    return !x1(h, Tv.Loose) && h.tabIndex !== -1 && S.preventDefault(), r.current(S, h);
  }, [r, f]), p = A.useRef(null);
  Mi(i, "pointerdown", (S) => {
    var v, h;
    lv() || (p.current = ((h = (v = S.composedPath) == null ? void 0 : v.call(S)) == null ? void 0 : h[0]) || S.target);
  }, !0), Mi(i, "pointerup", (S) => {
    if (lv() || !p.current) return;
    let v = p.current;
    return p.current = null, d(S, () => v);
  }, !0);
  let _ = A.useRef({ x: 0, y: 0 });
  Mi(i, "touchstart", (S) => {
    _.current.x = S.touches[0].clientX, _.current.y = S.touches[0].clientY;
  }, !0), Mi(i, "touchend", (S) => {
    let v = { x: S.changedTouches[0].clientX, y: S.changedTouches[0].clientY };
    if (!(Math.abs(v.x - _.current.x) >= av || Math.abs(v.y - _.current.y) >= av)) return d(S, () => Ql(S.target) ? S.target : null);
  }, !0), Av(i, "blur", (S) => d(S, () => n1(window.document.activeElement) ? window.document.activeElement : null), !0);
}
function Ur(...i) {
  return A.useMemo(() => au(...i), [...i]);
}
function Ov(i, f, o, r) {
  let d = va(o);
  A.useEffect(() => {
    i = i ?? window;
    function p(_) {
      d.current(_);
    }
    return i.addEventListener(f, p, r), () => i.removeEventListener(f, p, r);
  }, [i, f, r]);
}
function G1(i) {
  return A.useSyncExternalStore(i.subscribe, i.getSnapshot, i.getSnapshot);
}
function X1(i, f) {
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
function Q1() {
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
function w1() {
  return zv() ? { before({ doc: i, d: f, meta: o }) {
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
          let v = S.target.closest("a");
          if (!v) return;
          let { hash: h } = new URL(v.href), R = i.querySelector(h);
          Ql(R) && !r(R) && (_ = R);
        } catch {
        }
      }, !0), f.group((S) => {
        f.addEventListener(i, "touchstart", (v) => {
          if (S.dispose(), Ql(v.target) && a1(v.target)) if (r(v.target)) {
            let h = v.target;
            for (; h.parentElement && r(h.parentElement); ) h = h.parentElement;
            S.style(h, "overscrollBehavior", "contain");
          } else S.style(v.target, "touchAction", "none");
        });
      }), f.addEventListener(i, "touchmove", (S) => {
        if (Ql(S.target)) {
          if (u1(S.target)) return;
          if (r(S.target)) {
            let v = S.target;
            for (; v.parentElement && v.dataset.headlessuiPortal !== "" && !(v.scrollHeight > v.clientHeight || v.scrollWidth > v.clientWidth); ) v = v.parentElement;
            v.dataset.headlessuiPortal === "" && S.preventDefault();
          } else S.preventDefault();
        }
      }, { passive: !1 }), f.add(() => {
        var S;
        let v = (S = window.scrollY) != null ? S : window.pageYOffset;
        p !== v && window.scrollTo(0, p), _ && _.isConnected && (_.scrollIntoView({ block: "nearest" }), _ = null);
      });
    });
  } } : {};
}
function Z1() {
  return { before({ doc: i, d: f }) {
    f.style(i.documentElement, "overflow", "hidden");
  } };
}
function nv(i) {
  let f = {};
  for (let o of i) Object.assign(f, o(f));
  return f;
}
let da = X1(() => /* @__PURE__ */ new Map(), { PUSH(i, f) {
  var o;
  let r = (o = this.get(i)) != null ? o : { doc: i, count: 0, d: vl(), meta: /* @__PURE__ */ new Set(), computedMeta: {} };
  return r.count++, r.meta.add(f), r.computedMeta = nv(r.meta), this.set(i, r), this;
}, POP(i, f) {
  let o = this.get(i);
  return o && (o.count--, o.meta.delete(f), o.computedMeta = nv(o.meta)), this;
}, SCROLL_PREVENT(i) {
  let f = { doc: i.doc, d: i.d, meta() {
    return i.computedMeta;
  } }, o = [w1(), Q1(), Z1()];
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
function V1(i, f, o = () => ({ containers: [] })) {
  let r = G1(da), d = f ? r.get(f) : void 0, p = d ? d.count > 0 : !1;
  return oe(() => {
    if (!(!f || !i)) return da.dispatch("PUSH", f, o), () => da.dispatch("POP", f, o);
  }, [i, f]), p;
}
function K1(i, f, o = () => [document.body]) {
  let r = uu(i, "scroll-lock");
  V1(r, f, (d) => {
    var p;
    return { containers: [...(p = d.containers) != null ? p : [], o] };
  });
}
function J1(i = 0) {
  let [f, o] = A.useState(i), r = A.useCallback((v) => o(v), []), d = A.useCallback((v) => o((h) => h | v), []), p = A.useCallback((v) => (f & v) === v, [f]), _ = A.useCallback((v) => o((h) => h & ~v), []), S = A.useCallback((v) => o((h) => h ^ v), []);
  return { flags: f, setFlag: r, addFlag: d, hasFlag: p, removeFlag: _, toggleFlag: S };
}
var uv, iv;
typeof process < "u" && typeof globalThis < "u" && typeof Element < "u" && ((uv = process == null ? void 0 : process.env) == null ? void 0 : uv.NODE_ENV) === "test" && typeof ((iv = Element?.prototype) == null ? void 0 : iv.getAnimations) > "u" && (Element.prototype.getAnimations = function() {
  return console.warn(["Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.", "Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.", "", "Example usage:", "```js", "import { mockAnimationsApi } from 'jsdom-testing-mocks'", "mockAnimationsApi()", "```"].join(`
`)), [];
});
var $1 = ((i) => (i[i.None = 0] = "None", i[i.Closed = 1] = "Closed", i[i.Enter = 2] = "Enter", i[i.Leave = 4] = "Leave", i))($1 || {});
function k1(i) {
  let f = {};
  for (let o in i) i[o] === !0 && (f[`data-${o}`] = "");
  return f;
}
function F1(i, f, o, r) {
  let [d, p] = A.useState(o), { hasFlag: _, addFlag: S, removeFlag: v } = J1(i && d ? 3 : 0), h = A.useRef(!1), R = A.useRef(!1), x = Bi();
  return oe(() => {
    var j;
    if (i) {
      if (o && p(!0), !f) {
        o && S(3);
        return;
      }
      return (j = r?.start) == null || j.call(r, o), W1(f, { inFlight: h, prepare() {
        R.current ? R.current = !1 : R.current = h.current, h.current = !0, !R.current && (o ? (S(3), v(4)) : (S(4), v(2)));
      }, run() {
        R.current ? o ? (v(3), S(4)) : (v(4), S(3)) : o ? v(1) : S(1);
      }, done() {
        var q;
        R.current && tg(f) || (h.current = !1, v(7), o || p(!1), (q = r?.end) == null || q.call(r, o));
      } });
    }
  }, [i, o, f, x]), i ? [d, { closed: _(1), enter: _(2), leave: _(4), transition: _(2) || _(4) }] : [o, { closed: void 0, enter: void 0, leave: void 0, transition: void 0 }];
}
function W1(i, { prepare: f, run: o, done: r, inFlight: d }) {
  let p = vl();
  return P1(i, { prepare: f, inFlight: d }), p.nextFrame(() => {
    o(), p.requestAnimationFrame(() => {
      p.add(I1(i, r));
    });
  }), p.dispose;
}
function I1(i, f) {
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
function P1(i, { inFlight: f, prepare: o }) {
  if (f != null && f.current) {
    o();
    return;
  }
  let r = i.style.transition;
  i.style.transition = "none", o(), i.offsetHeight, i.style.transition = r;
}
function tg(i) {
  var f, o;
  return ((o = (f = i.getAnimations) == null ? void 0 : f.call(i)) != null ? o : []).some((r) => r instanceof CSSTransition && r.playState !== "finished");
}
function Rr(i, f) {
  let o = A.useRef([]), r = At(i);
  A.useEffect(() => {
    let d = [...o.current];
    for (let [p, _] of f.entries()) if (o.current[p] !== _) {
      let S = r(f, d);
      return o.current = f, S;
    }
  }, [r, ...f]);
}
let qi = A.createContext(null);
qi.displayName = "OpenClosedContext";
var Ye = ((i) => (i[i.Open = 1] = "Open", i[i.Closed = 2] = "Closed", i[i.Closing = 4] = "Closing", i[i.Opening = 8] = "Opening", i))(Ye || {});
function Yi() {
  return A.useContext(qi);
}
function eg({ value: i, children: f }) {
  return tt.createElement(qi.Provider, { value: i }, f);
}
function lg({ children: i }) {
  return tt.createElement(qi.Provider, { value: null }, i);
}
function ag(i) {
  function f() {
    document.readyState !== "loading" && (i(), document.removeEventListener("DOMContentLoaded", f));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", f), f());
}
let Gl = [];
ag(() => {
  function i(f) {
    if (!Ql(f.target) || f.target === document.body || Gl[0] === f.target) return;
    let o = f.target;
    o = o.closest(Ri), Gl.unshift(o ?? f.target), Gl = Gl.filter((r) => r != null && r.isConnected), Gl.splice(10);
  }
  window.addEventListener("click", i, { capture: !0 }), window.addEventListener("mousedown", i, { capture: !0 }), window.addEventListener("focus", i, { capture: !0 }), document.body.addEventListener("click", i, { capture: !0 }), document.body.addEventListener("mousedown", i, { capture: !0 }), document.body.addEventListener("focus", i, { capture: !0 });
});
function Mv(i) {
  let f = At(i), o = A.useRef(!1);
  A.useEffect(() => (o.current = !1, () => {
    o.current = !0, ji(() => {
      o.current && f();
    });
  }), [f]);
}
let Dv = A.createContext(!1);
function ng() {
  return A.useContext(Dv);
}
function cv(i) {
  return tt.createElement(Dv.Provider, { value: i.force }, i.children);
}
function ug(i) {
  let f = ng(), o = A.useContext(Nv), [r, d] = A.useState(() => {
    var p;
    if (!f && o !== null) return (p = o.current) != null ? p : null;
    if (Ze.isServer) return null;
    let _ = i?.getElementById("headlessui-portal-root");
    if (_) return _;
    if (i === null) return null;
    let S = i.createElement("div");
    return S.setAttribute("id", "headlessui-portal-root"), i.body.appendChild(S);
  });
  return A.useEffect(() => {
    r !== null && (i != null && i.body.contains(r) || i == null || i.body.appendChild(r));
  }, [r, i]), A.useEffect(() => {
    f || o !== null && d(o.current);
  }, [o, d, f]), r;
}
let Cv = A.Fragment, ig = se(function(i, f) {
  let { ownerDocument: o = null, ...r } = i, d = A.useRef(null), p = Ve(i1((j) => {
    d.current = j;
  }), f), _ = Ur(d.current), S = o ?? _, v = ug(S), h = A.useContext(Dr), R = Bi(), x = He();
  return Mv(() => {
    var j;
    v && v.childNodes.length <= 0 && ((j = v.parentElement) == null || j.removeChild(v));
  }), v ? Qy.createPortal(tt.createElement("div", { "data-headlessui-portal": "", ref: (j) => {
    R.dispose(), h && j && R.add(h.register(j));
  } }, x({ ourProps: { ref: p }, theirProps: r, slot: {}, defaultTag: Cv, name: "Portal" })), v) : null;
});
function cg(i, f) {
  let o = Ve(f), { enabled: r = !0, ownerDocument: d, ...p } = i, _ = He();
  return r ? tt.createElement(ig, { ...p, ownerDocument: d, ref: o }) : _({ ourProps: { ref: o }, theirProps: p, slot: {}, defaultTag: Cv, name: "Portal" });
}
let fg = A.Fragment, Nv = A.createContext(null);
function rg(i, f) {
  let { target: o, ...r } = i, d = { ref: Ve(f) }, p = He();
  return tt.createElement(Nv.Provider, { value: o }, p({ ourProps: d, theirProps: r, defaultTag: fg, name: "Popover.Group" }));
}
let Dr = A.createContext(null);
function og() {
  let i = A.useContext(Dr), f = A.useRef([]), o = At((p) => (f.current.push(p), i && i.register(p), () => r(p))), r = At((p) => {
    let _ = f.current.indexOf(p);
    _ !== -1 && f.current.splice(_, 1), i && i.unregister(p);
  }), d = A.useMemo(() => ({ register: o, unregister: r, portals: f }), [o, r, f]);
  return [f, A.useMemo(() => function({ children: p }) {
    return tt.createElement(Dr.Provider, { value: d }, p);
  }, [d])];
}
let sg = se(cg), Uv = se(rg), dg = Object.assign(sg, { Group: Uv });
function mg(i, f = typeof document < "u" ? document.defaultView : null, o) {
  let r = uu(i, "escape");
  Ov(f, "keydown", (d) => {
    r && (d.defaultPrevented || d.key === yv.Escape && o(d));
  });
}
function vg() {
  var i;
  let [f] = A.useState(() => typeof window < "u" && typeof window.matchMedia == "function" ? window.matchMedia("(pointer: coarse)") : null), [o, r] = A.useState((i = f?.matches) != null ? i : !1);
  return oe(() => {
    if (!f) return;
    function d(p) {
      r(p.matches);
    }
    return f.addEventListener("change", d), () => f.removeEventListener("change", d);
  }, [f]), o;
}
function hg({ defaultContainers: i = [], portals: f, mainTreeNode: o } = {}) {
  let r = At(() => {
    var d, p;
    let _ = au(o), S = [];
    for (let v of i) v !== null && (wl(v) ? S.push(v) : "current" in v && wl(v.current) && S.push(v.current));
    if (f != null && f.current) for (let v of f.current) S.push(v);
    for (let v of (d = _?.querySelectorAll("html > *, body > *")) != null ? d : []) v !== document.body && v !== document.head && wl(v) && v.id !== "headlessui-portal-root" && (o && (v.contains(o) || v.contains((p = o?.getRootNode()) == null ? void 0 : p.host)) || S.some((h) => v.contains(h)) || S.push(v));
    return S;
  });
  return { resolveContainers: r, contains: At((d) => r().some((p) => p.contains(d))) };
}
let Rv = A.createContext(null);
function fv({ children: i, node: f }) {
  let [o, r] = A.useState(null), d = xv(f ?? o);
  return tt.createElement(Rv.Provider, { value: d }, i, d === null && tt.createElement(Ar, { features: Ui.Hidden, ref: (p) => {
    var _, S;
    if (p) {
      for (let v of (S = (_ = au(p)) == null ? void 0 : _.querySelectorAll("html > *, body > *")) != null ? S : []) if (v !== document.body && v !== document.head && wl(v) && v != null && v.contains(p)) {
        r(v);
        break;
      }
    }
  } }));
}
function xv(i = null) {
  var f;
  return (f = A.useContext(Rv)) != null ? f : i;
}
function yg() {
  let i = typeof document > "u";
  return "useSyncExternalStore" in Qm ? ((f) => f.useSyncExternalStore)(Qm)(() => () => {
  }, () => !1, () => !i) : !1;
}
function Li() {
  let i = yg(), [f, o] = A.useState(Ze.isHandoffComplete);
  return f && Ze.isHandoffComplete === !1 && o(!1), A.useEffect(() => {
    f !== !0 && o(!0);
  }, [f]), A.useEffect(() => Ze.handoff(), []), i ? !1 : f;
}
function xr() {
  let i = A.useRef(!1);
  return oe(() => (i.current = !0, () => {
    i.current = !1;
  }), []), i;
}
var Pn = ((i) => (i[i.Forwards = 0] = "Forwards", i[i.Backwards = 1] = "Backwards", i))(Pn || {});
function gg() {
  let i = A.useRef(0);
  return Av(!0, "keydown", (f) => {
    f.key === "Tab" && (i.current = f.shiftKey ? 1 : 0);
  }, !0), i;
}
function Hv(i) {
  if (!i) return /* @__PURE__ */ new Set();
  if (typeof i == "function") return new Set(i());
  let f = /* @__PURE__ */ new Set();
  for (let o of i.current) wl(o.current) && f.add(o.current);
  return f;
}
let pg = "div";
var sa = ((i) => (i[i.None = 0] = "None", i[i.InitialFocus = 1] = "InitialFocus", i[i.TabLock = 2] = "TabLock", i[i.FocusLock = 4] = "FocusLock", i[i.RestoreFocus = 8] = "RestoreFocus", i[i.AutoFocus = 16] = "AutoFocus", i))(sa || {});
function bg(i, f) {
  let o = A.useRef(null), r = Ve(o, f), { initialFocus: d, initialFocusFallback: p, containers: _, features: S = 15, ...v } = i;
  Li() || (S = 0);
  let h = Ur(o.current);
  Tg(S, { ownerDocument: h });
  let R = zg(S, { ownerDocument: h, container: o, initialFocus: d, initialFocusFallback: p });
  Ag(S, { ownerDocument: h, container: o, containers: _, previousActiveElement: R });
  let x = gg(), j = At((P) => {
    if (!ma(o.current)) return;
    let K = o.current;
    ((G) => G())(() => {
      ml(x.current, { [Pn.Forwards]: () => {
        lu(K, sl.First, { skipElements: [P.relatedTarget, p] });
      }, [Pn.Backwards]: () => {
        lu(K, sl.Last, { skipElements: [P.relatedTarget, p] });
      } });
    });
  }), q = uu(!!(S & 2), "focus-trap#tab-lock"), B = Bi(), Q = A.useRef(!1), Z = { ref: r, onKeyDown(P) {
    P.key == "Tab" && (Q.current = !0, B.requestAnimationFrame(() => {
      Q.current = !1;
    }));
  }, onBlur(P) {
    if (!(S & 4)) return;
    let K = Hv(_);
    ma(o.current) && K.add(o.current);
    let G = P.relatedTarget;
    Ql(G) && G.dataset.headlessuiFocusGuard !== "true" && (jv(K, G) || (Q.current ? lu(o.current, ml(x.current, { [Pn.Forwards]: () => sl.Next, [Pn.Backwards]: () => sl.Previous }) | sl.WrapAround, { relativeTo: P.target }) : Ql(P.target) && dl(P.target)));
  } }, F = He();
  return tt.createElement(tt.Fragment, null, q && tt.createElement(Ar, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: j, features: Ui.Focusable }), F({ ourProps: Z, theirProps: v, defaultTag: pg, name: "FocusTrap" }), q && tt.createElement(Ar, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: j, features: Ui.Focusable }));
}
let Sg = se(bg), _g = Object.assign(Sg, { features: sa });
function Eg(i = !0) {
  let f = A.useRef(Gl.slice());
  return Rr(([o], [r]) => {
    r === !0 && o === !1 && ji(() => {
      f.current.splice(0);
    }), r === !1 && o === !0 && (f.current = Gl.slice());
  }, [i, Gl, f]), At(() => {
    var o;
    return (o = f.current.find((r) => r != null && r.isConnected)) != null ? o : null;
  });
}
function Tg(i, { ownerDocument: f }) {
  let o = !!(i & 8), r = Eg(o);
  Rr(() => {
    o || Ky(f?.body) && dl(r());
  }, [o]), Mv(() => {
    o && dl(r());
  });
}
function zg(i, { ownerDocument: f, container: o, initialFocus: r, initialFocusFallback: d }) {
  let p = A.useRef(null), _ = uu(!!(i & 1), "focus-trap#initial-focus"), S = xr();
  return Rr(() => {
    if (i === 0) return;
    if (!_) {
      d != null && d.current && dl(d.current);
      return;
    }
    let v = o.current;
    v && ji(() => {
      if (!S.current) return;
      let h = f?.activeElement;
      if (r != null && r.current) {
        if (r?.current === h) {
          p.current = h;
          return;
        }
      } else if (v.contains(h)) {
        p.current = h;
        return;
      }
      if (r != null && r.current) dl(r.current);
      else {
        if (i & 16) {
          if (lu(v, sl.First | sl.AutoFocus) !== Mr.Error) return;
        } else if (lu(v, sl.First) !== Mr.Error) return;
        if (d != null && d.current && (dl(d.current), f?.activeElement === d.current)) return;
        console.warn("There are no focusable elements inside the <FocusTrap />");
      }
      p.current = f?.activeElement;
    });
  }, [d, _, i]), p;
}
function Ag(i, { ownerDocument: f, container: o, containers: r, previousActiveElement: d }) {
  let p = xr(), _ = !!(i & 4);
  Ov(f?.defaultView, "focus", (S) => {
    if (!_ || !p.current) return;
    let v = Hv(r);
    ma(o.current) && v.add(o.current);
    let h = d.current;
    if (!h) return;
    let R = S.target;
    ma(R) ? jv(v, R) ? (d.current = R, dl(R)) : (S.preventDefault(), S.stopPropagation(), dl(h)) : dl(d.current);
  }, !0);
}
function jv(i, f) {
  for (let o of i) if (o.contains(f)) return !0;
  return !1;
}
function Bv(i) {
  var f;
  return !!(i.enter || i.enterFrom || i.enterTo || i.leave || i.leaveFrom || i.leaveTo) || !tu((f = i.as) != null ? f : Yv) || tt.Children.count(i.children) === 1;
}
let Gi = A.createContext(null);
Gi.displayName = "TransitionContext";
var Og = ((i) => (i.Visible = "visible", i.Hidden = "hidden", i))(Og || {});
function Mg() {
  let i = A.useContext(Gi);
  if (i === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return i;
}
function Dg() {
  let i = A.useContext(Xi);
  if (i === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return i;
}
let Xi = A.createContext(null);
Xi.displayName = "NestingContext";
function Qi(i) {
  return "children" in i ? Qi(i.children) : i.current.filter(({ el: f }) => f.current !== null).filter(({ state: f }) => f === "visible").length > 0;
}
function qv(i, f) {
  let o = va(i), r = A.useRef([]), d = xr(), p = Bi(), _ = At((q, B = Xl.Hidden) => {
    let Q = r.current.findIndex(({ el: Z }) => Z === q);
    Q !== -1 && (ml(B, { [Xl.Unmount]() {
      r.current.splice(Q, 1);
    }, [Xl.Hidden]() {
      r.current[Q].state = "hidden";
    } }), p.microTask(() => {
      var Z;
      !Qi(r) && d.current && ((Z = o.current) == null || Z.call(o));
    }));
  }), S = At((q) => {
    let B = r.current.find(({ el: Q }) => Q === q);
    return B ? B.state !== "visible" && (B.state = "visible") : r.current.push({ el: q, state: "visible" }), () => _(q, Xl.Unmount);
  }), v = A.useRef([]), h = A.useRef(Promise.resolve()), R = A.useRef({ enter: [], leave: [] }), x = At((q, B, Q) => {
    v.current.splice(0), f && (f.chains.current[B] = f.chains.current[B].filter(([Z]) => Z !== q)), f?.chains.current[B].push([q, new Promise((Z) => {
      v.current.push(Z);
    })]), f?.chains.current[B].push([q, new Promise((Z) => {
      Promise.all(R.current[B].map(([F, P]) => P)).then(() => Z());
    })]), B === "enter" ? h.current = h.current.then(() => f?.wait.current).then(() => Q(B)) : Q(B);
  }), j = At((q, B, Q) => {
    Promise.all(R.current[B].splice(0).map(([Z, F]) => F)).then(() => {
      var Z;
      (Z = v.current.shift()) == null || Z();
    }).then(() => Q(B));
  });
  return A.useMemo(() => ({ children: r, register: S, unregister: _, onStart: x, onStop: j, wait: h, chains: R }), [S, _, r, x, j, R, h]);
}
let Yv = A.Fragment, Lv = Ni.RenderStrategy;
function Cg(i, f) {
  var o, r;
  let { transition: d = !0, beforeEnter: p, afterEnter: _, beforeLeave: S, afterLeave: v, enter: h, enterFrom: R, enterTo: x, entered: j, leave: q, leaveFrom: B, leaveTo: Q, ...Z } = i, [F, P] = A.useState(null), K = A.useRef(null), G = Bv(i), V = Ve(...G ? [K, f, P] : f === null ? [] : [f]), it = (o = Z.unmount) == null || o ? Xl.Unmount : Xl.Hidden, { show: J, appear: Xt, initial: ee } = Mg(), [Rt, Zt] = A.useState(J ? "visible" : "hidden"), jt = Dg(), { register: Qt, unregister: Jt } = jt;
  oe(() => Qt(K), [Qt, K]), oe(() => {
    if (it === Xl.Hidden && K.current) {
      if (J && Rt !== "visible") {
        Zt("visible");
        return;
      }
      return ml(Rt, { hidden: () => Jt(K), visible: () => Qt(K) });
    }
  }, [Rt, K, Qt, Jt, J, it]);
  let $t = Li();
  oe(() => {
    if (G && $t && Rt === "visible" && K.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [K, Rt, $t, G]);
  let M = ee && !Xt, Y = Xt && J && ee, $ = A.useRef(!1), st = qv(() => {
    $.current || (Zt("hidden"), Jt(K));
  }, jt), vt = At((mt) => {
    $.current = !0;
    let Bt = mt ? "enter" : "leave";
    st.onStart(K, Bt, (Tt) => {
      Tt === "enter" ? p?.() : Tt === "leave" && S?.();
    });
  }), y = At((mt) => {
    let Bt = mt ? "enter" : "leave";
    $.current = !1, st.onStop(K, Bt, (Tt) => {
      Tt === "enter" ? _?.() : Tt === "leave" && v?.();
    }), Bt === "leave" && !Qi(st) && (Zt("hidden"), Jt(K));
  });
  A.useEffect(() => {
    G && d || (vt(J), y(J));
  }, [J, G, d]);
  let N = !(!d || !G || !$t || M), [, H] = F1(N, F, J, { start: vt, end: y }), L = oa({ ref: V, className: ((r = zr(Z.className, Y && h, Y && R, H.enter && h, H.enter && H.closed && R, H.enter && !H.closed && x, H.leave && q, H.leave && !H.closed && B, H.leave && H.closed && Q, !H.transition && J && j)) == null ? void 0 : r.trim()) || void 0, ...k1(H) }), I = 0;
  Rt === "visible" && (I |= Ye.Open), Rt === "hidden" && (I |= Ye.Closed), J && Rt === "hidden" && (I |= Ye.Opening), !J && Rt === "visible" && (I |= Ye.Closing);
  let nt = He();
  return tt.createElement(Xi.Provider, { value: st }, tt.createElement(eg, { value: I }, nt({ ourProps: L, theirProps: Z, defaultTag: Yv, features: Lv, visible: Rt === "visible", name: "Transition.Child" })));
}
function Ng(i, f) {
  let { show: o, appear: r = !1, unmount: d = !0, ...p } = i, _ = A.useRef(null), S = Bv(i), v = Ve(...S ? [_, f] : f === null ? [] : [f]);
  Li();
  let h = Yi();
  if (o === void 0 && h !== null && (o = (h & Ye.Open) === Ye.Open), o === void 0) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [R, x] = A.useState(o ? "visible" : "hidden"), j = qv(() => {
    o || x("hidden");
  }), [q, B] = A.useState(!0), Q = A.useRef([o]);
  oe(() => {
    q !== !1 && Q.current[Q.current.length - 1] !== o && (Q.current.push(o), B(!1));
  }, [Q, o]);
  let Z = A.useMemo(() => ({ show: o, appear: r, initial: q }), [o, r, q]);
  oe(() => {
    o ? x("visible") : !Qi(j) && _.current !== null && x("hidden");
  }, [o, j]);
  let F = { unmount: d }, P = At(() => {
    var V;
    q && B(!1), (V = i.beforeEnter) == null || V.call(i);
  }), K = At(() => {
    var V;
    q && B(!1), (V = i.beforeLeave) == null || V.call(i);
  }), G = He();
  return tt.createElement(Xi.Provider, { value: j }, tt.createElement(Gi.Provider, { value: Z }, G({ ourProps: { ...F, as: A.Fragment, children: tt.createElement(Gv, { ref: v, ...F, ...p, beforeEnter: P, beforeLeave: K }) }, theirProps: {}, defaultTag: A.Fragment, features: Lv, visible: R === "visible", name: "Transition" })));
}
function Ug(i, f) {
  let o = A.useContext(Gi) !== null, r = Yi() !== null;
  return tt.createElement(tt.Fragment, null, !o && r ? tt.createElement(Cr, { ref: f, ...i }) : tt.createElement(Gv, { ref: f, ...i }));
}
let Cr = se(Ng), Gv = se(Cg), Hr = se(Ug), Ci = Object.assign(Cr, { Child: Hr, Root: Cr });
var Rg = ((i) => (i[i.Open = 0] = "Open", i[i.Closed = 1] = "Closed", i))(Rg || {}), xg = ((i) => (i[i.SetTitleId = 0] = "SetTitleId", i))(xg || {});
let Hg = { 0(i, f) {
  return i.titleId === f.id ? i : { ...i, titleId: f.id };
} }, jr = A.createContext(null);
jr.displayName = "DialogContext";
function wi(i) {
  let f = A.useContext(jr);
  if (f === null) {
    let o = new Error(`<${i} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, wi), o;
  }
  return f;
}
function jg(i, f) {
  return ml(f.type, Hg, i, f);
}
let rv = se(function(i, f) {
  let o = A.useId(), { id: r = `headlessui-dialog-${o}`, open: d, onClose: p, initialFocus: _, role: S = "dialog", autoFocus: v = !0, __demoMode: h = !1, unmount: R = !1, ...x } = i, j = A.useRef(!1);
  S = (function() {
    return S === "dialog" || S === "alertdialog" ? S : (j.current || (j.current = !0, console.warn(`Invalid role [${S}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog");
  })();
  let q = Yi();
  d === void 0 && q !== null && (d = (q & Ye.Open) === Ye.Open);
  let B = A.useRef(null), Q = Ve(B, f), Z = Ur(B.current), F = d ? 0 : 1, [P, K] = A.useReducer(jg, { titleId: null, descriptionId: null, panelRef: A.createRef() }), G = At(() => p(!1)), V = At((H) => K({ type: 0, id: H })), it = Li() ? F === 0 : !1, [J, Xt] = og(), ee = { get current() {
    var H;
    return (H = P.panelRef.current) != null ? H : B.current;
  } }, Rt = xv(), { resolveContainers: Zt } = hg({ mainTreeNode: Rt, portals: J, defaultContainers: [ee] }), jt = q !== null ? (q & Ye.Closing) === Ye.Closing : !1;
  M1(h || jt ? !1 : it, { allowed: At(() => {
    var H, L;
    return [(L = (H = B.current) == null ? void 0 : H.closest("[data-headlessui-portal]")) != null ? L : null];
  }), disallowed: At(() => {
    var H;
    return [(H = Rt?.closest("body > *:not(#headlessui-portal-root)")) != null ? H : null];
  }) });
  let Qt = _v.get(null);
  oe(() => {
    if (it) return Qt.actions.push(r), () => Qt.actions.pop(r);
  }, [Qt, r, it]);
  let Jt = Ev(Qt, A.useCallback((H) => Qt.selectors.isTop(H, r), [Qt, r]));
  L1(Jt, Zt, (H) => {
    H.preventDefault(), G();
  }), mg(Jt, Z?.defaultView, (H) => {
    H.preventDefault(), H.stopPropagation(), document.activeElement && "blur" in document.activeElement && typeof document.activeElement.blur == "function" && document.activeElement.blur(), G();
  }), K1(h || jt ? !1 : it, Z, Zt), D1(it, B, G);
  let [$t, M] = c1(), Y = A.useMemo(() => [{ dialogState: F, close: G, setTitleId: V, unmount: R }, P], [F, G, V, R, P]), $ = nu({ open: F === 0 }), st = { ref: Q, id: r, role: S, tabIndex: -1, "aria-modal": h ? void 0 : F === 0 ? !0 : void 0, "aria-labelledby": P.titleId, "aria-describedby": $t, unmount: R }, vt = !vg(), y = sa.None;
  it && !h && (y |= sa.RestoreFocus, y |= sa.TabLock, v && (y |= sa.AutoFocus), vt && (y |= sa.InitialFocus));
  let N = He();
  return tt.createElement(lg, null, tt.createElement(cv, { force: !0 }, tt.createElement(dg, null, tt.createElement(jr.Provider, { value: Y }, tt.createElement(Uv, { target: B }, tt.createElement(cv, { force: !1 }, tt.createElement(M, { slot: $ }, tt.createElement(Xt, null, tt.createElement(_g, { initialFocus: _, initialFocusFallback: B, containers: Zt, features: y }, tt.createElement(m1, { value: G }, N({ ourProps: st, theirProps: x, slot: $, defaultTag: Bg, features: qg, visible: F === 0, name: "Dialog" })))))))))));
}), Bg = "div", qg = Ni.RenderStrategy | Ni.Static;
function Yg(i, f) {
  let { transition: o = !1, open: r, ...d } = i, p = Yi(), _ = i.hasOwnProperty("open") || p !== null, S = i.hasOwnProperty("onClose");
  if (!_ && !S) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!_) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!S) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (!p && typeof i.open != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${i.open}`);
  if (typeof i.onClose != "function") throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${i.onClose}`);
  return (r !== void 0 || o) && !d.static ? tt.createElement(fv, null, tt.createElement(Ci, { show: r, transition: o, unmount: d.unmount }, tt.createElement(rv, { ref: f, ...d }))) : tt.createElement(fv, null, tt.createElement(rv, { ref: f, open: r, ...d }));
}
let Lg = "div";
function Gg(i, f) {
  let o = A.useId(), { id: r = `headlessui-dialog-panel-${o}`, transition: d = !1, ...p } = i, [{ dialogState: _, unmount: S }, v] = wi("Dialog.Panel"), h = Ve(f, v.panelRef), R = nu({ open: _ === 0 }), x = At((Z) => {
    Z.stopPropagation();
  }), j = { ref: h, id: r, onClick: x }, q = d ? Hr : A.Fragment, B = d ? { unmount: S } : {}, Q = He();
  return tt.createElement(q, { ...B }, Q({ ourProps: j, theirProps: p, slot: R, defaultTag: Lg, name: "Dialog.Panel" }));
}
let Xg = "div";
function Qg(i, f) {
  let { transition: o = !1, ...r } = i, [{ dialogState: d, unmount: p }] = wi("Dialog.Backdrop"), _ = nu({ open: d === 0 }), S = { ref: f, "aria-hidden": !0 }, v = o ? Hr : A.Fragment, h = o ? { unmount: p } : {}, R = He();
  return tt.createElement(v, { ...h }, R({ ourProps: S, theirProps: r, slot: _, defaultTag: Xg, name: "Dialog.Backdrop" }));
}
let wg = "h2";
function Zg(i, f) {
  let o = A.useId(), { id: r = `headlessui-dialog-title-${o}`, ...d } = i, [{ dialogState: p, setTitleId: _ }] = wi("Dialog.Title"), S = Ve(f);
  A.useEffect(() => (_(r), () => _(null)), [r, _]);
  let v = nu({ open: p === 0 }), h = { ref: S, id: r };
  return He()({ ourProps: h, theirProps: d, slot: v, defaultTag: wg, name: "Dialog.Title" });
}
let Vg = se(Yg), Kg = se(Gg);
se(Qg);
let Jg = se(Zg), Di = Object.assign(Vg, { Panel: Kg, Title: Jg, Description: s1 });
const $g = "_container_lfa5t_2", kg = "_openButton_lfa5t_7", Fg = "_modalOverlay_lfa5t_29", Wg = "_backdrop_lfa5t_35", Ig = "_backdropEnter_lfa5t_42", Pg = "_backdropEnterFrom_lfa5t_46", tp = "_backdropEnterTo_lfa5t_50", ep = "_backdropLeave_lfa5t_54", lp = "_backdropLeaveFrom_lfa5t_58", ap = "_backdropLeaveTo_lfa5t_62", np = "_modalContainer_lfa5t_67", up = "_modalWrapper_lfa5t_73", ip = "_modalPanel_lfa5t_83", cp = "_panelEnter_lfa5t_97", fp = "_panelEnterFrom_lfa5t_101", rp = "_panelEnterTo_lfa5t_106", op = "_panelLeave_lfa5t_111", sp = "_panelLeaveFrom_lfa5t_115", dp = "_panelLeaveTo_lfa5t_120", mp = "_modalHeader_lfa5t_126", vp = "_modalTitle_lfa5t_130", hp = "_modalBody_lfa5t_138", yp = "_modalDescription_lfa5t_142", gp = "_modalContent_lfa5t_148", pp = "_modalActions_lfa5t_170", bp = "_closeButton_lfa5t_177", Ot = {
  container: $g,
  openButton: kg,
  modalOverlay: Fg,
  backdrop: Wg,
  backdropEnter: Ig,
  backdropEnterFrom: Pg,
  backdropEnterTo: tp,
  backdropLeave: ep,
  backdropLeaveFrom: lp,
  backdropLeaveTo: ap,
  modalContainer: np,
  modalWrapper: up,
  modalPanel: ip,
  panelEnter: cp,
  panelEnterFrom: fp,
  panelEnterTo: rp,
  panelLeave: op,
  panelLeaveFrom: sp,
  panelLeaveTo: dp,
  modalHeader: mp,
  modalTitle: vp,
  modalBody: hp,
  modalDescription: yp,
  modalContent: gp,
  modalActions: pp,
  closeButton: bp
}, Sp = "._container_lfa5t_2{display:inline-block}._openButton_lfa5t_7{padding:.75rem 1.5rem;background-color:#6366f1;color:#fff;border:none;border-radius:8px;font-size:1rem;font-weight:500;cursor:pointer;transition:background-color .2s}._openButton_lfa5t_7:hover{background-color:#4f46e5}._openButton_lfa5t_7:focus{outline:2px solid #6366f1;outline-offset:2px}._modalOverlay_lfa5t_29{position:relative;z-index:50}._backdrop_lfa5t_35{position:fixed;inset:0;background-color:#00000080}._backdropEnter_lfa5t_42{transition:opacity .3s cubic-bezier(.4,0,.2,1)}._backdropEnterFrom_lfa5t_46{opacity:0}._backdropEnterTo_lfa5t_50{opacity:1}._backdropLeave_lfa5t_54{transition:opacity .2s cubic-bezier(.4,0,.2,1)}._backdropLeaveFrom_lfa5t_58{opacity:1}._backdropLeaveTo_lfa5t_62{opacity:0}._modalContainer_lfa5t_67{position:fixed;inset:0;overflow-y:auto}._modalWrapper_lfa5t_73{display:flex;min-height:100%;align-items:center;justify-content:center;padding:1rem;text-align:center}._modalPanel_lfa5t_83{width:100%;max-width:28rem;transform:scale(1);overflow:hidden;border-radius:12px;background-color:#fff;padding:1.5rem;text-align:left;box-shadow:0 20px 25px -5px #0000001a,0 10px 10px -5px #0000000a;transition:all .3s cubic-bezier(.4,0,.2,1)}._panelEnter_lfa5t_97{transition:all .3s cubic-bezier(.4,0,.2,1)}._panelEnterFrom_lfa5t_101{opacity:0;transform:scale(.95)}._panelEnterTo_lfa5t_106{opacity:1;transform:scale(1)}._panelLeave_lfa5t_111{transition:all .2s cubic-bezier(.4,0,.2,1)}._panelLeaveFrom_lfa5t_115{opacity:1;transform:scale(1)}._panelLeaveTo_lfa5t_120{opacity:0;transform:scale(.95)}._modalHeader_lfa5t_126{margin-bottom:1rem}._modalTitle_lfa5t_130{font-size:1.5rem;font-weight:700;color:#111827;margin:0}._modalBody_lfa5t_138{margin-top:.5rem}._modalDescription_lfa5t_142{font-size:.875rem;color:#6b7280;margin-bottom:1rem}._modalContent_lfa5t_148{margin-top:1rem}._modalContent_lfa5t_148 p{margin:0 0 .75rem;color:#374151;line-height:1.6}._modalContent_lfa5t_148 ul{margin:0;padding-left:1.5rem;color:#374151;line-height:1.8}._modalContent_lfa5t_148 li{margin-bottom:.25rem}._modalActions_lfa5t_170{margin-top:1.5rem;display:flex;gap:.75rem;justify-content:flex-end}._closeButton_lfa5t_177{padding:.625rem 1.25rem;background-color:#6366f1;color:#fff;border:none;border-radius:6px;font-size:.875rem;font-weight:500;cursor:pointer;transition:background-color .2s}._closeButton_lfa5t_177:hover{background-color:#4f46e5}._closeButton_lfa5t_177:focus{outline:2px solid #6366f1;outline-offset:2px}@media(max-width:640px){._modalPanel_lfa5t_83{max-width:90vw;padding:1.25rem}._modalTitle_lfa5t_130{font-size:1.25rem}}";
function _p({
  isOpen: i = !1,
  title: f = "React Modal",
  description: o = "This is a modal dialog built with Headless UI for React."
}) {
  const [r, d] = A.useState(i);
  A.useEffect(() => {
    d(i);
  }, [i]), A.useEffect(() => {
    const S = "react-modal-styles";
    if (!document.getElementById(S)) {
      const v = document.createElement("style");
      v.id = S, v.textContent = Sp, document.head.appendChild(v);
    }
  }, []);
  function p() {
    d(!1);
  }
  function _() {
    d(!0);
  }
  return /* @__PURE__ */ ut.jsxs("div", { className: Ot.container, children: [
    /* @__PURE__ */ ut.jsx(
      "button",
      {
        type: "button",
        onClick: _,
        className: Ot.openButton,
        children: "Open React Modal"
      }
    ),
    /* @__PURE__ */ ut.jsx(Ci, { appear: !0, show: r, as: A.Fragment, children: /* @__PURE__ */ ut.jsxs(Di, { as: "div", className: Ot.modalOverlay, onClose: p, children: [
      /* @__PURE__ */ ut.jsx(
        Ci.Child,
        {
          as: A.Fragment,
          enter: Ot.backdropEnter,
          enterFrom: Ot.backdropEnterFrom,
          enterTo: Ot.backdropEnterTo,
          leave: Ot.backdropLeave,
          leaveFrom: Ot.backdropLeaveFrom,
          leaveTo: Ot.backdropLeaveTo,
          children: /* @__PURE__ */ ut.jsx("div", { className: Ot.backdrop, "aria-hidden": "true" })
        }
      ),
      /* @__PURE__ */ ut.jsx("div", { className: Ot.modalContainer, children: /* @__PURE__ */ ut.jsx("div", { className: Ot.modalWrapper, children: /* @__PURE__ */ ut.jsx(
        Ci.Child,
        {
          as: A.Fragment,
          enter: Ot.panelEnter,
          enterFrom: Ot.panelEnterFrom,
          enterTo: Ot.panelEnterTo,
          leave: Ot.panelLeave,
          leaveFrom: Ot.panelLeaveFrom,
          leaveTo: Ot.panelLeaveTo,
          children: /* @__PURE__ */ ut.jsxs(Di.Panel, { className: Ot.modalPanel, children: [
            /* @__PURE__ */ ut.jsx("div", { className: Ot.modalHeader, children: /* @__PURE__ */ ut.jsx(Di.Title, { as: "h3", className: Ot.modalTitle, children: f }) }),
            /* @__PURE__ */ ut.jsx("div", { className: Ot.modalBody, children: /* @__PURE__ */ ut.jsxs("slot", { name: "content", children: [
              /* @__PURE__ */ ut.jsx(Di.Description, { className: Ot.modalDescription, children: o }),
              /* @__PURE__ */ ut.jsxs("div", { className: Ot.modalContent, children: [
                /* @__PURE__ */ ut.jsx("p", { children: "This modal demonstrates Headless UI integration in a React Web Component. It features:" }),
                /* @__PURE__ */ ut.jsxs("ul", { children: [
                  /* @__PURE__ */ ut.jsx("li", { children: "✅ Automatic accessibility (ARIA attributes)" }),
                  /* @__PURE__ */ ut.jsx("li", { children: "✅ Focus trap management" }),
                  /* @__PURE__ */ ut.jsx("li", { children: "✅ ESC key to close" }),
                  /* @__PURE__ */ ut.jsx("li", { children: "✅ Click outside to close" }),
                  /* @__PURE__ */ ut.jsx("li", { children: "✅ Smooth transitions" })
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ ut.jsx("div", { className: Ot.modalActions, children: /* @__PURE__ */ ut.jsx(
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
const Ep = Hi(_p, {
  props: {
    isOpen: "boolean",
    title: "string",
    description: "string"
  },
  shadow: "open"
});
customElements.get("react-modal") || customElements.define("react-modal", Ep);
const Tp = "_button_a3w2z_1", zp = "_primary_a3w2z_29", Ap = "_secondary_a3w2z_38", Op = "_success_a3w2z_47", Mp = "_danger_a3w2z_56", Dp = "_small_a3w2z_65", Cp = "_large_a3w2z_70", Er = {
  button: Tp,
  primary: zp,
  secondary: Ap,
  success: Op,
  danger: Mp,
  small: Dp,
  large: Cp
}, Np = "._button_a3w2z_1{display:inline-flex;align-items:center;justify-content:center;padding:.5rem 1rem;font-size:1rem;font-weight:500;border:none;border-radius:.375rem;cursor:pointer;transition:all .2s ease-in-out;font-family:inherit}._button_a3w2z_1:disabled{opacity:.5;cursor:not-allowed}._button_a3w2z_1:not(:disabled):hover{transform:translateY(-1px);box-shadow:0 4px 6px #0000001a}._button_a3w2z_1:not(:disabled):active{transform:translateY(0)}._primary_a3w2z_29{background-color:#3b82f6;color:#fff}._primary_a3w2z_29:not(:disabled):hover{background-color:#2563eb}._secondary_a3w2z_38{background-color:#6b7280;color:#fff}._secondary_a3w2z_38:not(:disabled):hover{background-color:#4b5563}._success_a3w2z_47{background-color:#10b981;color:#fff}._success_a3w2z_47:not(:disabled):hover{background-color:#059669}._danger_a3w2z_56{background-color:#ef4444;color:#fff}._danger_a3w2z_56:not(:disabled):hover{background-color:#dc2626}._small_a3w2z_65{padding:.25rem .75rem;font-size:.875rem}._large_a3w2z_70{padding:.75rem 1.5rem;font-size:1.125rem}";
function Up({
  label: i = "Button",
  variant: f = "primary",
  size: o = "medium",
  onbuttonclick: r
}) {
  const [d, p] = A.useState(!1), _ = A.useRef(null);
  A.useEffect(() => {
    const h = _.current?.closest("react-button");
    if (!h) return;
    p(h.hasAttribute("disabled"));
    const R = new MutationObserver((x) => {
      x.forEach((j) => {
        j.type === "attributes" && j.attributeName === "disabled" && p(h.hasAttribute("disabled"));
      });
    });
    return R.observe(h, { attributes: !0 }), () => R.disconnect();
  }, []), A.useEffect(() => {
    const h = "react-button-styles";
    if (!document.getElementById(h)) {
      const R = document.createElement("style");
      R.id = h, R.textContent = Np, document.head.appendChild(R);
    }
  }, []);
  const S = () => {
    if (!d && r)
      try {
        new Function(r)();
      } catch (h) {
        console.error("Error executing onbuttonclick:", h);
      }
  }, v = [
    Er.button,
    Er[f],
    o !== "medium" ? Er[o] : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ ut.jsx("div", { ref: _, children: /* @__PURE__ */ ut.jsx(
    "button",
    {
      className: v,
      disabled: d,
      onClick: S,
      type: "button",
      children: i
    }
  ) });
}
const Rp = Hi(Up, {
  props: {
    label: "string",
    variant: "string",
    size: "string",
    disabled: "boolean",
    onbuttonclick: "string"
  }
});
customElements.get("react-button") || customElements.define("react-button", Rp);
const xp = "_dropdown_1rheh_1", Hp = "_button_1rheh_8", jp = "_buttonDisabled_1rheh_33", Bp = "_arrow_1rheh_38", qp = "_arrowOpen_1rheh_49", Yp = "_menu_1rheh_53", Lp = "_item_1rheh_67", Gp = "_itemSelected_1rheh_77", Xp = "_placeholder_1rheh_83", ol = {
  dropdown: xp,
  button: Hp,
  buttonDisabled: jp,
  arrow: Bp,
  arrowOpen: qp,
  menu: Yp,
  item: Lp,
  itemSelected: Gp,
  placeholder: Xp
}, Qp = "._dropdown_1rheh_1{position:relative;display:inline-block;width:100%;max-width:300px}._button_1rheh_8{width:100%;padding:.5rem 2.5rem .5rem 1rem;font-size:1rem;background-color:#fff;border:1px solid #d1d5db;border-radius:.375rem;cursor:pointer;display:flex;align-items:center;justify-content:space-between;transition:all .2s ease-in-out;position:relative}._button_1rheh_8:hover{border-color:#9ca3af}._button_1rheh_8:focus{outline:none;border-color:#3b82f6;box-shadow:0 0 0 3px #3b82f61a}._buttonDisabled_1rheh_33{opacity:.5;cursor:not-allowed}._arrow_1rheh_38{position:absolute;right:1rem;width:0;height:0;border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid #6b7280;transition:transform .2s ease-in-out}._arrowOpen_1rheh_49{transform:rotate(180deg)}._menu_1rheh_53{position:absolute;top:calc(100% + .25rem);left:0;right:0;background-color:#fff;border:1px solid #d1d5db;border-radius:.375rem;box-shadow:0 10px 15px -3px #0000001a;max-height:300px;overflow-y:auto;z-index:10}._item_1rheh_67{padding:.5rem 1rem;cursor:pointer;transition:background-color .2s ease-in-out}._item_1rheh_67:hover{background-color:#f3f4f6}._itemSelected_1rheh_77{background-color:#eff6ff;color:#3b82f6;font-weight:500}._placeholder_1rheh_83{color:#9ca3af}";
function wp({
  options: i = "[]",
  selected: f = "",
  placeholder: o = "Select an option",
  disabled: r = !1,
  onvaluechange: d = "",
  onChange: p
}) {
  const [_, S] = A.useState(!1), [v, h] = A.useState(f), [R, x] = A.useState([]), [j, q] = A.useState(!1), B = A.useRef(null);
  A.useEffect(() => {
    const G = B.current?.closest("react-dropdown");
    if (!G) return;
    q(G.hasAttribute("disabled"));
    const V = new MutationObserver((it) => {
      it.forEach((J) => {
        J.type === "attributes" && J.attributeName === "disabled" && q(G.hasAttribute("disabled"));
      });
    });
    return V.observe(G, { attributes: !0 }), () => V.disconnect();
  }, []), A.useEffect(() => {
    console.log("ReactDropdown disabled state:", { disabled: r, isDisabled: j });
  }, [r, j]), A.useEffect(() => {
    const G = "react-dropdown-styles";
    if (!document.getElementById(G)) {
      const V = document.createElement("style");
      V.id = G, V.textContent = Qp, document.head.appendChild(V);
    }
  }, []), A.useEffect(() => {
    let G = [];
    try {
      const V = JSON.parse(i);
      G = Array.isArray(V) ? V : [];
    } catch (V) {
      console.error("Failed to parse options JSON:", V), G = [];
    }
    x((V) => JSON.stringify(V) === JSON.stringify(G) ? V : G);
  }, [i]), A.useEffect(() => {
    h(f);
  }, [f]), A.useEffect(() => {
    console.log("disabled prop changed:", { disabled: r, isDisabled: j });
  }, [r, j]), A.useEffect(() => {
    if (!_) return;
    const G = (it) => {
      B.current && !B.current.contains(it.target) && S(!1);
    }, V = setTimeout(() => {
      document.addEventListener("click", G);
    }, 0);
    return () => {
      clearTimeout(V), document.removeEventListener("click", G);
    };
  }, [_]);
  const Q = (G) => {
    j || (G.stopPropagation(), S(!_));
  }, Z = (G, V) => {
    if (!j && (G.stopPropagation(), h(V.value), S(!1), p && p(V.value, V), d))
      try {
        new Function("value", "option", d)(V.value, V);
      } catch (it) {
        console.error("Error executing onvaluechange:", it);
      }
  }, F = R.find((G) => G.value === v), P = F ? F.label : o, K = !F;
  return /* @__PURE__ */ ut.jsxs("div", { className: ol.dropdown, ref: B, children: [
    /* @__PURE__ */ ut.jsxs(
      "button",
      {
        className: `${ol.button} ${j ? ol.buttonDisabled : ""}`,
        onClick: Q,
        disabled: j,
        type: "button",
        children: [
          /* @__PURE__ */ ut.jsx("span", { className: K ? ol.placeholder : "", children: P }),
          /* @__PURE__ */ ut.jsx("span", { className: `${ol.arrow} ${_ ? ol.arrowOpen : ""}` })
        ]
      }
    ),
    _ && /* @__PURE__ */ ut.jsx("div", { className: ol.menu, children: R.map((G) => /* @__PURE__ */ ut.jsx(
      "div",
      {
        className: `${ol.item} ${G.value === v ? ol.itemSelected : ""}`,
        onClick: (V) => Z(V, G),
        children: G.label
      },
      G.value
    )) })
  ] });
}
const Zp = Hi(wp, {
  props: {
    options: "string",
    selected: "string",
    placeholder: "string",
    disabled: "boolean",
    onvaluechange: "string"
  }
});
customElements.get("react-dropdown") || customElements.define("react-dropdown", Zp);
export {
  Up as ReactButton,
  Gy as ReactCounter,
  wp as ReactDropdown,
  _p as ReactModal
};
