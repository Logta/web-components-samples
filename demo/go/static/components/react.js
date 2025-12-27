var Qg = { exports: {} }, pp = {};
var C2;
function pT() {
  if (C2) return pp;
  C2 = 1;
  var W = /* @__PURE__ */ Symbol.for("react.transitional.element"), lt = /* @__PURE__ */ Symbol.for("react.fragment");
  function qt(H, Rt, xt) {
    var ve = null;
    if (xt !== void 0 && (ve = "" + xt), Rt.key !== void 0 && (ve = "" + Rt.key), "key" in Rt) {
      xt = {};
      for (var tt in Rt)
        tt !== "key" && (xt[tt] = Rt[tt]);
    } else xt = Rt;
    return Rt = xt.ref, {
      $$typeof: W,
      type: H,
      key: ve,
      ref: Rt !== void 0 ? Rt : null,
      props: xt
    };
  }
  return pp.Fragment = lt, pp.jsx = qt, pp.jsxs = qt, pp;
}
var vp = {}, Lg = { exports: {} }, Lt = {};
var U2;
function vT() {
  if (U2) return Lt;
  U2 = 1;
  var W = /* @__PURE__ */ Symbol.for("react.transitional.element"), lt = /* @__PURE__ */ Symbol.for("react.portal"), qt = /* @__PURE__ */ Symbol.for("react.fragment"), H = /* @__PURE__ */ Symbol.for("react.strict_mode"), Rt = /* @__PURE__ */ Symbol.for("react.profiler"), xt = /* @__PURE__ */ Symbol.for("react.consumer"), ve = /* @__PURE__ */ Symbol.for("react.context"), tt = /* @__PURE__ */ Symbol.for("react.forward_ref"), nt = /* @__PURE__ */ Symbol.for("react.suspense"), $ = /* @__PURE__ */ Symbol.for("react.memo"), Ht = /* @__PURE__ */ Symbol.for("react.lazy"), X = /* @__PURE__ */ Symbol.for("react.activity"), U = Symbol.iterator;
  function it(S) {
    return S === null || typeof S != "object" ? null : (S = U && S[U] || S["@@iterator"], typeof S == "function" ? S : null);
  }
  var Vt = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, De = Object.assign, fe = {};
  function le(S, B, F) {
    this.props = S, this.context = B, this.refs = fe, this.updater = F || Vt;
  }
  le.prototype.isReactComponent = {}, le.prototype.setState = function(S, B) {
    if (typeof S != "object" && typeof S != "function" && S != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, S, B, "setState");
  }, le.prototype.forceUpdate = function(S) {
    this.updater.enqueueForceUpdate(this, S, "forceUpdate");
  };
  function Tl() {
  }
  Tl.prototype = le.prototype;
  function Be(S, B, F) {
    this.props = S, this.context = B, this.refs = fe, this.updater = F || Vt;
  }
  var Je = Be.prototype = new Tl();
  Je.constructor = Be, De(Je, le.prototype), Je.isPureReactComponent = !0;
  var tl = Array.isArray;
  function ul() {
  }
  var zt = { H: null, A: null, T: null, S: null }, Zt = Object.prototype.hasOwnProperty;
  function _e(S, B, F) {
    var k = F.ref;
    return {
      $$typeof: W,
      type: S,
      key: B,
      ref: k !== void 0 ? k : null,
      props: F
    };
  }
  function st(S, B) {
    return _e(S.type, B, S.props);
  }
  function Ye(S) {
    return typeof S == "object" && S !== null && S.$$typeof === W;
  }
  function yt(S) {
    var B = { "=": "=0", ":": "=2" };
    return "$" + S.replace(/[=:]/g, function(F) {
      return B[F];
    });
  }
  var jt = /\/+/g;
  function Qe(S, B) {
    return typeof S == "object" && S !== null && S.key != null ? yt("" + S.key) : B.toString(36);
  }
  function je(S) {
    switch (S.status) {
      case "fulfilled":
        return S.value;
      case "rejected":
        throw S.reason;
      default:
        switch (typeof S.status == "string" ? S.then(ul, ul) : (S.status = "pending", S.then(
          function(B) {
            S.status === "pending" && (S.status = "fulfilled", S.value = B);
          },
          function(B) {
            S.status === "pending" && (S.status = "rejected", S.reason = B);
          }
        )), S.status) {
          case "fulfilled":
            return S.value;
          case "rejected":
            throw S.reason;
        }
    }
    throw S;
  }
  function D(S, B, F, k, gt) {
    var Gt = typeof S;
    (Gt === "undefined" || Gt === "boolean") && (S = null);
    var Et = !1;
    if (S === null) Et = !0;
    else
      switch (Gt) {
        case "bigint":
        case "string":
        case "number":
          Et = !0;
          break;
        case "object":
          switch (S.$$typeof) {
            case W:
            case lt:
              Et = !0;
              break;
            case Ht:
              return Et = S._init, D(
                Et(S._payload),
                B,
                F,
                k,
                gt
              );
          }
      }
    if (Et)
      return gt = gt(S), Et = k === "" ? "." + Qe(S, 0) : k, tl(gt) ? (F = "", Et != null && (F = Et.replace(jt, "$&/") + "/"), D(gt, B, F, "", function(qa) {
        return qa;
      })) : gt != null && (Ye(gt) && (gt = st(
        gt,
        F + (gt.key == null || S && S.key === gt.key ? "" : ("" + gt.key).replace(
          jt,
          "$&/"
        ) + "/") + Et
      )), B.push(gt)), 1;
    Et = 0;
    var Le = k === "" ? "." : k + ":";
    if (tl(S))
      for (var he = 0; he < S.length; he++)
        k = S[he], Gt = Le + Qe(k, he), Et += D(
          k,
          B,
          F,
          Gt,
          gt
        );
    else if (he = it(S), typeof he == "function")
      for (S = he.call(S), he = 0; !(k = S.next()).done; )
        k = k.value, Gt = Le + Qe(k, he++), Et += D(
          k,
          B,
          F,
          Gt,
          gt
        );
    else if (Gt === "object") {
      if (typeof S.then == "function")
        return D(
          je(S),
          B,
          F,
          k,
          gt
        );
      throw B = String(S), Error(
        "Objects are not valid as a React child (found: " + (B === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : B) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Et;
  }
  function L(S, B, F) {
    if (S == null) return S;
    var k = [], gt = 0;
    return D(S, k, "", "", function(Gt) {
      return B.call(F, Gt, gt++);
    }), k;
  }
  function P(S) {
    if (S._status === -1) {
      var B = S._result;
      B = B(), B.then(
        function(F) {
          (S._status === 0 || S._status === -1) && (S._status = 1, S._result = F);
        },
        function(F) {
          (S._status === 0 || S._status === -1) && (S._status = 2, S._result = F);
        }
      ), S._status === -1 && (S._status = 0, S._result = B);
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var pt = typeof reportError == "function" ? reportError : function(S) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var B = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof S == "object" && S !== null && typeof S.message == "string" ? String(S.message) : String(S),
        error: S
      });
      if (!window.dispatchEvent(B)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", S);
      return;
    }
    console.error(S);
  }, At = {
    map: L,
    forEach: function(S, B, F) {
      L(
        S,
        function() {
          B.apply(this, arguments);
        },
        F
      );
    },
    count: function(S) {
      var B = 0;
      return L(S, function() {
        B++;
      }), B;
    },
    toArray: function(S) {
      return L(S, function(B) {
        return B;
      }) || [];
    },
    only: function(S) {
      if (!Ye(S))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return S;
    }
  };
  return Lt.Activity = X, Lt.Children = At, Lt.Component = le, Lt.Fragment = qt, Lt.Profiler = Rt, Lt.PureComponent = Be, Lt.StrictMode = H, Lt.Suspense = nt, Lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = zt, Lt.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(S) {
      return zt.H.useMemoCache(S);
    }
  }, Lt.cache = function(S) {
    return function() {
      return S.apply(null, arguments);
    };
  }, Lt.cacheSignal = function() {
    return null;
  }, Lt.cloneElement = function(S, B, F) {
    if (S == null)
      throw Error(
        "The argument must be a React element, but you passed " + S + "."
      );
    var k = De({}, S.props), gt = S.key;
    if (B != null)
      for (Gt in B.key !== void 0 && (gt = "" + B.key), B)
        !Zt.call(B, Gt) || Gt === "key" || Gt === "__self" || Gt === "__source" || Gt === "ref" && B.ref === void 0 || (k[Gt] = B[Gt]);
    var Gt = arguments.length - 2;
    if (Gt === 1) k.children = F;
    else if (1 < Gt) {
      for (var Et = Array(Gt), Le = 0; Le < Gt; Le++)
        Et[Le] = arguments[Le + 2];
      k.children = Et;
    }
    return _e(S.type, gt, k);
  }, Lt.createContext = function(S) {
    return S = {
      $$typeof: ve,
      _currentValue: S,
      _currentValue2: S,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, S.Provider = S, S.Consumer = {
      $$typeof: xt,
      _context: S
    }, S;
  }, Lt.createElement = function(S, B, F) {
    var k, gt = {}, Gt = null;
    if (B != null)
      for (k in B.key !== void 0 && (Gt = "" + B.key), B)
        Zt.call(B, k) && k !== "key" && k !== "__self" && k !== "__source" && (gt[k] = B[k]);
    var Et = arguments.length - 2;
    if (Et === 1) gt.children = F;
    else if (1 < Et) {
      for (var Le = Array(Et), he = 0; he < Et; he++)
        Le[he] = arguments[he + 2];
      gt.children = Le;
    }
    if (S && S.defaultProps)
      for (k in Et = S.defaultProps, Et)
        gt[k] === void 0 && (gt[k] = Et[k]);
    return _e(S, Gt, gt);
  }, Lt.createRef = function() {
    return { current: null };
  }, Lt.forwardRef = function(S) {
    return { $$typeof: tt, render: S };
  }, Lt.isValidElement = Ye, Lt.lazy = function(S) {
    return {
      $$typeof: Ht,
      _payload: { _status: -1, _result: S },
      _init: P
    };
  }, Lt.memo = function(S, B) {
    return {
      $$typeof: $,
      type: S,
      compare: B === void 0 ? null : B
    };
  }, Lt.startTransition = function(S) {
    var B = zt.T, F = {};
    zt.T = F;
    try {
      var k = S(), gt = zt.S;
      gt !== null && gt(F, k), typeof k == "object" && k !== null && typeof k.then == "function" && k.then(ul, pt);
    } catch (Gt) {
      pt(Gt);
    } finally {
      B !== null && F.types !== null && (B.types = F.types), zt.T = B;
    }
  }, Lt.unstable_useCacheRefresh = function() {
    return zt.H.useCacheRefresh();
  }, Lt.use = function(S) {
    return zt.H.use(S);
  }, Lt.useActionState = function(S, B, F) {
    return zt.H.useActionState(S, B, F);
  }, Lt.useCallback = function(S, B) {
    return zt.H.useCallback(S, B);
  }, Lt.useContext = function(S) {
    return zt.H.useContext(S);
  }, Lt.useDebugValue = function() {
  }, Lt.useDeferredValue = function(S, B) {
    return zt.H.useDeferredValue(S, B);
  }, Lt.useEffect = function(S, B) {
    return zt.H.useEffect(S, B);
  }, Lt.useEffectEvent = function(S) {
    return zt.H.useEffectEvent(S);
  }, Lt.useId = function() {
    return zt.H.useId();
  }, Lt.useImperativeHandle = function(S, B, F) {
    return zt.H.useImperativeHandle(S, B, F);
  }, Lt.useInsertionEffect = function(S, B) {
    return zt.H.useInsertionEffect(S, B);
  }, Lt.useLayoutEffect = function(S, B) {
    return zt.H.useLayoutEffect(S, B);
  }, Lt.useMemo = function(S, B) {
    return zt.H.useMemo(S, B);
  }, Lt.useOptimistic = function(S, B) {
    return zt.H.useOptimistic(S, B);
  }, Lt.useReducer = function(S, B, F) {
    return zt.H.useReducer(S, B, F);
  }, Lt.useRef = function(S) {
    return zt.H.useRef(S);
  }, Lt.useState = function(S) {
    return zt.H.useState(S);
  }, Lt.useSyncExternalStore = function(S, B, F) {
    return zt.H.useSyncExternalStore(
      S,
      B,
      F
    );
  }, Lt.useTransition = function() {
    return zt.H.useTransition();
  }, Lt.version = "19.2.3", Lt;
}
var bp = { exports: {} };
bp.exports;
var H2;
function gT() {
  return H2 || (H2 = 1, (function(W, lt) {
    process.env.NODE_ENV !== "production" && (function() {
      function qt(v, M) {
        Object.defineProperty(xt.prototype, v, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              M[0],
              M[1]
            );
          }
        });
      }
      function H(v) {
        return v === null || typeof v != "object" ? null : (v = _i && v[_i] || v["@@iterator"], typeof v == "function" ? v : null);
      }
      function Rt(v, M) {
        v = (v = v.constructor) && (v.displayName || v.name) || "ReactClass";
        var I = v + "." + M;
        Di[I] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          M,
          v
        ), Di[I] = !0);
      }
      function xt(v, M, I) {
        this.props = v, this.context = M, this.refs = me, this.updater = I || xa;
      }
      function ve() {
      }
      function tt(v, M, I) {
        this.props = v, this.context = M, this.refs = me, this.updater = I || xa;
      }
      function nt() {
      }
      function $(v) {
        return "" + v;
      }
      function Ht(v) {
        try {
          $(v);
          var M = !1;
        } catch {
          M = !0;
        }
        if (M) {
          M = console;
          var I = M.error, et = typeof Symbol == "function" && Symbol.toStringTag && v[Symbol.toStringTag] || v.constructor.name || "Object";
          return I.call(
            M,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            et
          ), $(v);
        }
      }
      function X(v) {
        if (v == null) return null;
        if (typeof v == "function")
          return v.$$typeof === rs ? null : v.displayName || v.name || null;
        if (typeof v == "string") return v;
        switch (v) {
          case S:
            return "Fragment";
          case F:
            return "Profiler";
          case B:
            return "StrictMode";
          case Et:
            return "Suspense";
          case Le:
            return "SuspenseList";
          case ct:
            return "Activity";
        }
        if (typeof v == "object")
          switch (typeof v.tag == "number" && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), v.$$typeof) {
            case At:
              return "Portal";
            case gt:
              return v.displayName || "Context";
            case k:
              return (v._context.displayName || "Context") + ".Consumer";
            case Gt:
              var M = v.render;
              return v = v.displayName, v || (v = M.displayName || M.name || "", v = v !== "" ? "ForwardRef(" + v + ")" : "ForwardRef"), v;
            case he:
              return M = v.displayName || null, M !== null ? M : X(v.type) || "Memo";
            case qa:
              M = v._payload, v = v._init;
              try {
                return X(v(M));
              } catch {
              }
          }
        return null;
      }
      function U(v) {
        if (v === S) return "<>";
        if (typeof v == "object" && v !== null && v.$$typeof === qa)
          return "<...>";
        try {
          var M = X(v);
          return M ? "<" + M + ">" : "<...>";
        } catch {
          return "<...>";
        }
      }
      function it() {
        var v = rt.A;
        return v === null ? null : v.getOwner();
      }
      function Vt() {
        return Error("react-stack-top-frame");
      }
      function De(v) {
        if (Ri.call(v, "key")) {
          var M = Object.getOwnPropertyDescriptor(v, "key").get;
          if (M && M.isReactWarning) return !1;
        }
        return v.key !== void 0;
      }
      function fe(v, M) {
        function I() {
          gc || (gc = !0, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            M
          ));
        }
        I.isReactWarning = !0, Object.defineProperty(v, "key", {
          get: I,
          configurable: !0
        });
      }
      function le() {
        var v = X(this.type);
        return Ir[v] || (Ir[v] = !0, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        )), v = this.props.ref, v !== void 0 ? v : null;
      }
      function Tl(v, M, I, et, dt, _t) {
        var ht = I.ref;
        return v = {
          $$typeof: pt,
          type: v,
          key: M,
          props: I,
          _owner: et
        }, (ht !== void 0 ? ht : null) !== null ? Object.defineProperty(v, "ref", {
          enumerable: !1,
          get: le
        }) : Object.defineProperty(v, "ref", { enumerable: !1, value: null }), v._store = {}, Object.defineProperty(v._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: 0
        }), Object.defineProperty(v, "_debugInfo", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: null
        }), Object.defineProperty(v, "_debugStack", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: dt
        }), Object.defineProperty(v, "_debugTask", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: _t
        }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
      }
      function Be(v, M) {
        return M = Tl(
          v.type,
          M,
          v.props,
          v._owner,
          v._debugStack,
          v._debugTask
        ), v._store && (M._store.validated = v._store.validated), M;
      }
      function Je(v) {
        tl(v) ? v._store && (v._store.validated = 1) : typeof v == "object" && v !== null && v.$$typeof === qa && (v._payload.status === "fulfilled" ? tl(v._payload.value) && v._payload.value._store && (v._payload.value._store.validated = 1) : v._store && (v._store.validated = 1));
      }
      function tl(v) {
        return typeof v == "object" && v !== null && v.$$typeof === pt;
      }
      function ul(v) {
        var M = { "=": "=0", ":": "=2" };
        return "$" + v.replace(/[=:]/g, function(I) {
          return M[I];
        });
      }
      function zt(v, M) {
        return typeof v == "object" && v !== null && v.key != null ? (Ht(v.key), ul("" + v.key)) : M.toString(36);
      }
      function Zt(v) {
        switch (v.status) {
          case "fulfilled":
            return v.value;
          case "rejected":
            throw v.reason;
          default:
            switch (typeof v.status == "string" ? v.then(nt, nt) : (v.status = "pending", v.then(
              function(M) {
                v.status === "pending" && (v.status = "fulfilled", v.value = M);
              },
              function(M) {
                v.status === "pending" && (v.status = "rejected", v.reason = M);
              }
            )), v.status) {
              case "fulfilled":
                return v.value;
              case "rejected":
                throw v.reason;
            }
        }
        throw v;
      }
      function _e(v, M, I, et, dt) {
        var _t = typeof v;
        (_t === "undefined" || _t === "boolean") && (v = null);
        var ht = !1;
        if (v === null) ht = !0;
        else
          switch (_t) {
            case "bigint":
            case "string":
            case "number":
              ht = !0;
              break;
            case "object":
              switch (v.$$typeof) {
                case pt:
                case At:
                  ht = !0;
                  break;
                case qa:
                  return ht = v._init, _e(
                    ht(v._payload),
                    M,
                    I,
                    et,
                    dt
                  );
              }
          }
        if (ht) {
          ht = v, dt = dt(ht);
          var Pt = et === "" ? "." + zt(ht, 0) : et;
          return vc(dt) ? (I = "", Pt != null && (I = Pt.replace(Pr, "$&/") + "/"), _e(dt, M, I, "", function(ta) {
            return ta;
          })) : dt != null && (tl(dt) && (dt.key != null && (ht && ht.key === dt.key || Ht(dt.key)), I = Be(
            dt,
            I + (dt.key == null || ht && ht.key === dt.key ? "" : ("" + dt.key).replace(
              Pr,
              "$&/"
            ) + "/") + Pt
          ), et !== "" && ht != null && tl(ht) && ht.key == null && ht._store && !ht._store.validated && (I._store.validated = 2), dt = I), M.push(dt)), 1;
        }
        if (ht = 0, Pt = et === "" ? "." : et + ":", vc(v))
          for (var wt = 0; wt < v.length; wt++)
            et = v[wt], _t = Pt + zt(et, wt), ht += _e(
              et,
              M,
              I,
              _t,
              dt
            );
        else if (wt = H(v), typeof wt == "function")
          for (wt === v.entries && (Mn || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), Mn = !0), v = wt.call(v), wt = 0; !(et = v.next()).done; )
            et = et.value, _t = Pt + zt(et, wt++), ht += _e(
              et,
              M,
              I,
              _t,
              dt
            );
        else if (_t === "object") {
          if (typeof v.then == "function")
            return _e(
              Zt(v),
              M,
              I,
              et,
              dt
            );
          throw M = String(v), Error(
            "Objects are not valid as a React child (found: " + (M === "[object Object]" ? "object with keys {" + Object.keys(v).join(", ") + "}" : M) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return ht;
      }
      function st(v, M, I) {
        if (v == null) return v;
        var et = [], dt = 0;
        return _e(v, et, "", "", function(_t) {
          return M.call(I, _t, dt++);
        }), et;
      }
      function Ye(v) {
        if (v._status === -1) {
          var M = v._ioInfo;
          M != null && (M.start = M.end = performance.now()), M = v._result;
          var I = M();
          if (I.then(
            function(dt) {
              if (v._status === 0 || v._status === -1) {
                v._status = 1, v._result = dt;
                var _t = v._ioInfo;
                _t != null && (_t.end = performance.now()), I.status === void 0 && (I.status = "fulfilled", I.value = dt);
              }
            },
            function(dt) {
              if (v._status === 0 || v._status === -1) {
                v._status = 2, v._result = dt;
                var _t = v._ioInfo;
                _t != null && (_t.end = performance.now()), I.status === void 0 && (I.status = "rejected", I.reason = dt);
              }
            }
          ), M = v._ioInfo, M != null) {
            M.value = I;
            var et = I.displayName;
            typeof et == "string" && (M.name = et);
          }
          v._status === -1 && (v._status = 0, v._result = I);
        }
        if (v._status === 1)
          return M = v._result, M === void 0 && console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
            M
          ), "default" in M || console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
            M
          ), M.default;
        throw v._result;
      }
      function yt() {
        var v = rt.H;
        return v === null && console.error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        ), v;
      }
      function jt() {
        rt.asyncTransitions--;
      }
      function Qe(v) {
        if (Sc === null)
          try {
            var M = ("require" + Math.random()).slice(0, 7);
            Sc = (W && W[M]).call(
              W,
              "timers"
            ).setImmediate;
          } catch {
            Sc = function(et) {
              ds === !1 && (ds = !0, typeof MessageChannel > "u" && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var dt = new MessageChannel();
              dt.port1.onmessage = et, dt.port2.postMessage(void 0);
            };
          }
        return Sc(v);
      }
      function je(v) {
        return 1 < v.length && typeof AggregateError == "function" ? new AggregateError(v) : v[0];
      }
      function D(v, M) {
        M !== rn - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        ), rn = M;
      }
      function L(v, M, I) {
        var et = rt.actQueue;
        if (et !== null)
          if (et.length !== 0)
            try {
              P(et), Qe(function() {
                return L(v, M, I);
              });
              return;
            } catch (dt) {
              rt.thrownErrors.push(dt);
            }
          else rt.actQueue = null;
        0 < rt.thrownErrors.length ? (et = je(rt.thrownErrors), rt.thrownErrors.length = 0, I(et)) : M(v);
      }
      function P(v) {
        if (!Ga) {
          Ga = !0;
          var M = 0;
          try {
            for (; M < v.length; M++) {
              var I = v[M];
              do {
                rt.didUsePromise = !1;
                var et = I(!1);
                if (et !== null) {
                  if (rt.didUsePromise) {
                    v[M] = I, v.splice(0, M);
                    return;
                  }
                  I = et;
                } else break;
              } while (!0);
            }
            v.length = 0;
          } catch (dt) {
            v.splice(0, M + 1), rt.thrownErrors.push(dt);
          } finally {
            Ga = !1;
          }
        }
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var pt = /* @__PURE__ */ Symbol.for("react.transitional.element"), At = /* @__PURE__ */ Symbol.for("react.portal"), S = /* @__PURE__ */ Symbol.for("react.fragment"), B = /* @__PURE__ */ Symbol.for("react.strict_mode"), F = /* @__PURE__ */ Symbol.for("react.profiler"), k = /* @__PURE__ */ Symbol.for("react.consumer"), gt = /* @__PURE__ */ Symbol.for("react.context"), Gt = /* @__PURE__ */ Symbol.for("react.forward_ref"), Et = /* @__PURE__ */ Symbol.for("react.suspense"), Le = /* @__PURE__ */ Symbol.for("react.suspense_list"), he = /* @__PURE__ */ Symbol.for("react.memo"), qa = /* @__PURE__ */ Symbol.for("react.lazy"), ct = /* @__PURE__ */ Symbol.for("react.activity"), _i = Symbol.iterator, Di = {}, xa = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function(v) {
          Rt(v, "forceUpdate");
        },
        enqueueReplaceState: function(v) {
          Rt(v, "replaceState");
        },
        enqueueSetState: function(v) {
          Rt(v, "setState");
        }
      }, uu = Object.assign, me = {};
      Object.freeze(me), xt.prototype.isReactComponent = {}, xt.prototype.setState = function(v, M) {
        if (typeof v != "object" && typeof v != "function" && v != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, v, M, "setState");
      }, xt.prototype.forceUpdate = function(v) {
        this.updater.enqueueForceUpdate(this, v, "forceUpdate");
      };
      var Pl = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      };
      for (Mi in Pl)
        Pl.hasOwnProperty(Mi) && qt(Mi, Pl[Mi]);
      ve.prototype = xt.prototype, Pl = tt.prototype = new ve(), Pl.constructor = tt, uu(Pl, xt.prototype), Pl.isPureReactComponent = !0;
      var vc = Array.isArray, rs = /* @__PURE__ */ Symbol.for("react.client.reference"), rt = {
        H: null,
        A: null,
        T: null,
        S: null,
        actQueue: null,
        asyncTransitions: 0,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
      }, Ri = Object.prototype.hasOwnProperty, iu = console.createTask ? console.createTask : function() {
        return null;
      };
      Pl = {
        react_stack_bottom_frame: function(v) {
          return v();
        }
      };
      var gc, vl, Ir = {}, Mo = Pl.react_stack_bottom_frame.bind(
        Pl,
        Vt
      )(), Co = iu(U(Vt)), Mn = !1, Pr = /\/+/g, Uo = typeof reportError == "function" ? reportError : function(v) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var M = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof v == "object" && v !== null && typeof v.message == "string" ? String(v.message) : String(v),
            error: v
          });
          if (!window.dispatchEvent(M)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", v);
          return;
        }
        console.error(v);
      }, ds = !1, Sc = null, rn = 0, Al = !1, Ga = !1, Ul = typeof queueMicrotask == "function" ? function(v) {
        queueMicrotask(function() {
          return queueMicrotask(v);
        });
      } : Qe;
      Pl = Object.freeze({
        __proto__: null,
        c: function(v) {
          return yt().useMemoCache(v);
        }
      });
      var Mi = {
        map: st,
        forEach: function(v, M, I) {
          st(
            v,
            function() {
              M.apply(this, arguments);
            },
            I
          );
        },
        count: function(v) {
          var M = 0;
          return st(v, function() {
            M++;
          }), M;
        },
        toArray: function(v) {
          return st(v, function(M) {
            return M;
          }) || [];
        },
        only: function(v) {
          if (!tl(v))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return v;
        }
      };
      lt.Activity = ct, lt.Children = Mi, lt.Component = xt, lt.Fragment = S, lt.Profiler = F, lt.PureComponent = tt, lt.StrictMode = B, lt.Suspense = Et, lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = rt, lt.__COMPILER_RUNTIME = Pl, lt.act = function(v) {
        var M = rt.actQueue, I = rn;
        rn++;
        var et = rt.actQueue = M !== null ? M : [], dt = !1;
        try {
          var _t = v();
        } catch (wt) {
          rt.thrownErrors.push(wt);
        }
        if (0 < rt.thrownErrors.length)
          throw D(M, I), v = je(rt.thrownErrors), rt.thrownErrors.length = 0, v;
        if (_t !== null && typeof _t == "object" && typeof _t.then == "function") {
          var ht = _t;
          return Ul(function() {
            dt || Al || (Al = !0, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          }), {
            then: function(wt, ta) {
              dt = !0, ht.then(
                function(dn) {
                  if (D(M, I), I === 0) {
                    try {
                      P(et), Qe(function() {
                        return L(
                          dn,
                          wt,
                          ta
                        );
                      });
                    } catch (Ho) {
                      rt.thrownErrors.push(Ho);
                    }
                    if (0 < rt.thrownErrors.length) {
                      var Ci = je(
                        rt.thrownErrors
                      );
                      rt.thrownErrors.length = 0, ta(Ci);
                    }
                  } else wt(dn);
                },
                function(dn) {
                  D(M, I), 0 < rt.thrownErrors.length && (dn = je(
                    rt.thrownErrors
                  ), rt.thrownErrors.length = 0), ta(dn);
                }
              );
            }
          };
        }
        var Pt = _t;
        if (D(M, I), I === 0 && (P(et), et.length !== 0 && Ul(function() {
          dt || Al || (Al = !0, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), rt.actQueue = null), 0 < rt.thrownErrors.length)
          throw v = je(rt.thrownErrors), rt.thrownErrors.length = 0, v;
        return {
          then: function(wt, ta) {
            dt = !0, I === 0 ? (rt.actQueue = et, Qe(function() {
              return L(
                Pt,
                wt,
                ta
              );
            })) : wt(Pt);
          }
        };
      }, lt.cache = function(v) {
        return function() {
          return v.apply(null, arguments);
        };
      }, lt.cacheSignal = function() {
        return null;
      }, lt.captureOwnerStack = function() {
        var v = rt.getCurrentStack;
        return v === null ? null : v();
      }, lt.cloneElement = function(v, M, I) {
        if (v == null)
          throw Error(
            "The argument must be a React element, but you passed " + v + "."
          );
        var et = uu({}, v.props), dt = v.key, _t = v._owner;
        if (M != null) {
          var ht;
          t: {
            if (Ri.call(M, "ref") && (ht = Object.getOwnPropertyDescriptor(
              M,
              "ref"
            ).get) && ht.isReactWarning) {
              ht = !1;
              break t;
            }
            ht = M.ref !== void 0;
          }
          ht && (_t = it()), De(M) && (Ht(M.key), dt = "" + M.key);
          for (Pt in M)
            !Ri.call(M, Pt) || Pt === "key" || Pt === "__self" || Pt === "__source" || Pt === "ref" && M.ref === void 0 || (et[Pt] = M[Pt]);
        }
        var Pt = arguments.length - 2;
        if (Pt === 1) et.children = I;
        else if (1 < Pt) {
          ht = Array(Pt);
          for (var wt = 0; wt < Pt; wt++)
            ht[wt] = arguments[wt + 2];
          et.children = ht;
        }
        for (et = Tl(
          v.type,
          dt,
          et,
          _t,
          v._debugStack,
          v._debugTask
        ), dt = 2; dt < arguments.length; dt++)
          Je(arguments[dt]);
        return et;
      }, lt.createContext = function(v) {
        return v = {
          $$typeof: gt,
          _currentValue: v,
          _currentValue2: v,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        }, v.Provider = v, v.Consumer = {
          $$typeof: k,
          _context: v
        }, v._currentRenderer = null, v._currentRenderer2 = null, v;
      }, lt.createElement = function(v, M, I) {
        for (var et = 2; et < arguments.length; et++)
          Je(arguments[et]);
        et = {};
        var dt = null;
        if (M != null)
          for (wt in vl || !("__self" in M) || "key" in M || (vl = !0, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), De(M) && (Ht(M.key), dt = "" + M.key), M)
            Ri.call(M, wt) && wt !== "key" && wt !== "__self" && wt !== "__source" && (et[wt] = M[wt]);
        var _t = arguments.length - 2;
        if (_t === 1) et.children = I;
        else if (1 < _t) {
          for (var ht = Array(_t), Pt = 0; Pt < _t; Pt++)
            ht[Pt] = arguments[Pt + 2];
          Object.freeze && Object.freeze(ht), et.children = ht;
        }
        if (v && v.defaultProps)
          for (wt in _t = v.defaultProps, _t)
            et[wt] === void 0 && (et[wt] = _t[wt]);
        dt && fe(
          et,
          typeof v == "function" ? v.displayName || v.name || "Unknown" : v
        );
        var wt = 1e4 > rt.recentlyCreatedOwnerStacks++;
        return Tl(
          v,
          dt,
          et,
          it(),
          wt ? Error("react-stack-top-frame") : Mo,
          wt ? iu(U(v)) : Co
        );
      }, lt.createRef = function() {
        var v = { current: null };
        return Object.seal(v), v;
      }, lt.forwardRef = function(v) {
        v != null && v.$$typeof === he ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : typeof v != "function" ? console.error(
          "forwardRef requires a render function but was given %s.",
          v === null ? "null" : typeof v
        ) : v.length !== 0 && v.length !== 2 && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          v.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        ), v != null && v.defaultProps != null && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var M = { $$typeof: Gt, render: v }, I;
        return Object.defineProperty(M, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return I;
          },
          set: function(et) {
            I = et, v.name || v.displayName || (Object.defineProperty(v, "name", { value: et }), v.displayName = et);
          }
        }), M;
      }, lt.isValidElement = tl, lt.lazy = function(v) {
        v = { _status: -1, _result: v };
        var M = {
          $$typeof: qa,
          _payload: v,
          _init: Ye
        }, I = {
          name: "lazy",
          start: -1,
          end: -1,
          value: null,
          owner: null,
          debugStack: Error("react-stack-top-frame"),
          debugTask: console.createTask ? console.createTask("lazy()") : null
        };
        return v._ioInfo = I, M._debugInfo = [{ awaited: I }], M;
      }, lt.memo = function(v, M) {
        v == null && console.error(
          "memo: The first argument must be a component. Instead received: %s",
          v === null ? "null" : typeof v
        ), M = {
          $$typeof: he,
          type: v,
          compare: M === void 0 ? null : M
        };
        var I;
        return Object.defineProperty(M, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return I;
          },
          set: function(et) {
            I = et, v.name || v.displayName || (Object.defineProperty(v, "name", { value: et }), v.displayName = et);
          }
        }), M;
      }, lt.startTransition = function(v) {
        var M = rt.T, I = {};
        I._updatedFibers = /* @__PURE__ */ new Set(), rt.T = I;
        try {
          var et = v(), dt = rt.S;
          dt !== null && dt(I, et), typeof et == "object" && et !== null && typeof et.then == "function" && (rt.asyncTransitions++, et.then(jt, jt), et.then(nt, Uo));
        } catch (_t) {
          Uo(_t);
        } finally {
          M === null && I._updatedFibers && (v = I._updatedFibers.size, I._updatedFibers.clear(), 10 < v && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), M !== null && I.types !== null && (M.types !== null && M.types !== I.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), M.types = I.types), rt.T = M;
        }
      }, lt.unstable_useCacheRefresh = function() {
        return yt().useCacheRefresh();
      }, lt.use = function(v) {
        return yt().use(v);
      }, lt.useActionState = function(v, M, I) {
        return yt().useActionState(
          v,
          M,
          I
        );
      }, lt.useCallback = function(v, M) {
        return yt().useCallback(v, M);
      }, lt.useContext = function(v) {
        var M = yt();
        return v.$$typeof === k && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        ), M.useContext(v);
      }, lt.useDebugValue = function(v, M) {
        return yt().useDebugValue(v, M);
      }, lt.useDeferredValue = function(v, M) {
        return yt().useDeferredValue(v, M);
      }, lt.useEffect = function(v, M) {
        return v == null && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), yt().useEffect(v, M);
      }, lt.useEffectEvent = function(v) {
        return yt().useEffectEvent(v);
      }, lt.useId = function() {
        return yt().useId();
      }, lt.useImperativeHandle = function(v, M, I) {
        return yt().useImperativeHandle(v, M, I);
      }, lt.useInsertionEffect = function(v, M) {
        return v == null && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), yt().useInsertionEffect(v, M);
      }, lt.useLayoutEffect = function(v, M) {
        return v == null && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), yt().useLayoutEffect(v, M);
      }, lt.useMemo = function(v, M) {
        return yt().useMemo(v, M);
      }, lt.useOptimistic = function(v, M) {
        return yt().useOptimistic(v, M);
      }, lt.useReducer = function(v, M, I) {
        return yt().useReducer(v, M, I);
      }, lt.useRef = function(v) {
        return yt().useRef(v);
      }, lt.useState = function(v) {
        return yt().useState(v);
      }, lt.useSyncExternalStore = function(v, M, I) {
        return yt().useSyncExternalStore(
          v,
          M,
          I
        );
      }, lt.useTransition = function() {
        return yt().useTransition();
      }, lt.version = "19.2.3", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  })(bp, bp.exports)), bp.exports;
}
var N2;
function bm() {
  return N2 || (N2 = 1, process.env.NODE_ENV === "production" ? Lg.exports = vT() : Lg.exports = gT()), Lg.exports;
}
var B2;
function ST() {
  return B2 || (B2 = 1, process.env.NODE_ENV !== "production" && (function() {
    function W(S) {
      if (S == null) return null;
      if (typeof S == "function")
        return S.$$typeof === Ye ? null : S.displayName || S.name || null;
      if (typeof S == "string") return S;
      switch (S) {
        case fe:
          return "Fragment";
        case Tl:
          return "Profiler";
        case le:
          return "StrictMode";
        case ul:
          return "Suspense";
        case zt:
          return "SuspenseList";
        case st:
          return "Activity";
      }
      if (typeof S == "object")
        switch (typeof S.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), S.$$typeof) {
          case De:
            return "Portal";
          case Je:
            return S.displayName || "Context";
          case Be:
            return (S._context.displayName || "Context") + ".Consumer";
          case tl:
            var B = S.render;
            return S = S.displayName, S || (S = B.displayName || B.name || "", S = S !== "" ? "ForwardRef(" + S + ")" : "ForwardRef"), S;
          case Zt:
            return B = S.displayName || null, B !== null ? B : W(S.type) || "Memo";
          case _e:
            B = S._payload, S = S._init;
            try {
              return W(S(B));
            } catch {
            }
        }
      return null;
    }
    function lt(S) {
      return "" + S;
    }
    function qt(S) {
      try {
        lt(S);
        var B = !1;
      } catch {
        B = !0;
      }
      if (B) {
        B = console;
        var F = B.error, k = typeof Symbol == "function" && Symbol.toStringTag && S[Symbol.toStringTag] || S.constructor.name || "Object";
        return F.call(
          B,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          k
        ), lt(S);
      }
    }
    function H(S) {
      if (S === fe) return "<>";
      if (typeof S == "object" && S !== null && S.$$typeof === _e)
        return "<...>";
      try {
        var B = W(S);
        return B ? "<" + B + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function Rt() {
      var S = yt.A;
      return S === null ? null : S.getOwner();
    }
    function xt() {
      return Error("react-stack-top-frame");
    }
    function ve(S) {
      if (jt.call(S, "key")) {
        var B = Object.getOwnPropertyDescriptor(S, "key").get;
        if (B && B.isReactWarning) return !1;
      }
      return S.key !== void 0;
    }
    function tt(S, B) {
      function F() {
        D || (D = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          B
        ));
      }
      F.isReactWarning = !0, Object.defineProperty(S, "key", {
        get: F,
        configurable: !0
      });
    }
    function nt() {
      var S = W(this.type);
      return L[S] || (L[S] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), S = this.props.ref, S !== void 0 ? S : null;
    }
    function $(S, B, F, k, gt, Gt) {
      var Et = F.ref;
      return S = {
        $$typeof: Vt,
        type: S,
        key: B,
        props: F,
        _owner: k
      }, (Et !== void 0 ? Et : null) !== null ? Object.defineProperty(S, "ref", {
        enumerable: !1,
        get: nt
      }) : Object.defineProperty(S, "ref", { enumerable: !1, value: null }), S._store = {}, Object.defineProperty(S._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(S, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(S, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: gt
      }), Object.defineProperty(S, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Gt
      }), Object.freeze && (Object.freeze(S.props), Object.freeze(S)), S;
    }
    function Ht(S, B, F, k, gt, Gt) {
      var Et = B.children;
      if (Et !== void 0)
        if (k)
          if (Qe(Et)) {
            for (k = 0; k < Et.length; k++)
              X(Et[k]);
            Object.freeze && Object.freeze(Et);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else X(Et);
      if (jt.call(B, "key")) {
        Et = W(S);
        var Le = Object.keys(B).filter(function(qa) {
          return qa !== "key";
        });
        k = 0 < Le.length ? "{key: someKey, " + Le.join(": ..., ") + ": ...}" : "{key: someKey}", At[Et + k] || (Le = 0 < Le.length ? "{" + Le.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          k,
          Et,
          Le,
          Et
        ), At[Et + k] = !0);
      }
      if (Et = null, F !== void 0 && (qt(F), Et = "" + F), ve(B) && (qt(B.key), Et = "" + B.key), "key" in B) {
        F = {};
        for (var he in B)
          he !== "key" && (F[he] = B[he]);
      } else F = B;
      return Et && tt(
        F,
        typeof S == "function" ? S.displayName || S.name || "Unknown" : S
      ), $(
        S,
        Et,
        F,
        Rt(),
        gt,
        Gt
      );
    }
    function X(S) {
      U(S) ? S._store && (S._store.validated = 1) : typeof S == "object" && S !== null && S.$$typeof === _e && (S._payload.status === "fulfilled" ? U(S._payload.value) && S._payload.value._store && (S._payload.value._store.validated = 1) : S._store && (S._store.validated = 1));
    }
    function U(S) {
      return typeof S == "object" && S !== null && S.$$typeof === Vt;
    }
    var it = bm(), Vt = /* @__PURE__ */ Symbol.for("react.transitional.element"), De = /* @__PURE__ */ Symbol.for("react.portal"), fe = /* @__PURE__ */ Symbol.for("react.fragment"), le = /* @__PURE__ */ Symbol.for("react.strict_mode"), Tl = /* @__PURE__ */ Symbol.for("react.profiler"), Be = /* @__PURE__ */ Symbol.for("react.consumer"), Je = /* @__PURE__ */ Symbol.for("react.context"), tl = /* @__PURE__ */ Symbol.for("react.forward_ref"), ul = /* @__PURE__ */ Symbol.for("react.suspense"), zt = /* @__PURE__ */ Symbol.for("react.suspense_list"), Zt = /* @__PURE__ */ Symbol.for("react.memo"), _e = /* @__PURE__ */ Symbol.for("react.lazy"), st = /* @__PURE__ */ Symbol.for("react.activity"), Ye = /* @__PURE__ */ Symbol.for("react.client.reference"), yt = it.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, jt = Object.prototype.hasOwnProperty, Qe = Array.isArray, je = console.createTask ? console.createTask : function() {
      return null;
    };
    it = {
      react_stack_bottom_frame: function(S) {
        return S();
      }
    };
    var D, L = {}, P = it.react_stack_bottom_frame.bind(
      it,
      xt
    )(), pt = je(H(xt)), At = {};
    vp.Fragment = fe, vp.jsx = function(S, B, F) {
      var k = 1e4 > yt.recentlyCreatedOwnerStacks++;
      return Ht(
        S,
        B,
        F,
        !1,
        k ? Error("react-stack-top-frame") : P,
        k ? je(H(S)) : pt
      );
    }, vp.jsxs = function(S, B, F) {
      var k = 1e4 > yt.recentlyCreatedOwnerStacks++;
      return Ht(
        S,
        B,
        F,
        !0,
        k ? Error("react-stack-top-frame") : P,
        k ? je(H(S)) : pt
      );
    };
  })()), vp;
}
var Y2;
function bT() {
  return Y2 || (Y2 = 1, process.env.NODE_ENV === "production" ? Qg.exports = pT() : Qg.exports = ST()), Qg.exports;
}
var ss = bT(), ET = bm(), Vg = { exports: {} }, gp = {}, Zg = { exports: {} }, g1 = {};
var j2;
function TT() {
  return j2 || (j2 = 1, (function(W) {
    function lt(D, L) {
      var P = D.length;
      D.push(L);
      t: for (; 0 < P; ) {
        var pt = P - 1 >>> 1, At = D[pt];
        if (0 < Rt(At, L))
          D[pt] = L, D[P] = At, P = pt;
        else break t;
      }
    }
    function qt(D) {
      return D.length === 0 ? null : D[0];
    }
    function H(D) {
      if (D.length === 0) return null;
      var L = D[0], P = D.pop();
      if (P !== L) {
        D[0] = P;
        t: for (var pt = 0, At = D.length, S = At >>> 1; pt < S; ) {
          var B = 2 * (pt + 1) - 1, F = D[B], k = B + 1, gt = D[k];
          if (0 > Rt(F, P))
            k < At && 0 > Rt(gt, F) ? (D[pt] = gt, D[k] = P, pt = k) : (D[pt] = F, D[B] = P, pt = B);
          else if (k < At && 0 > Rt(gt, P))
            D[pt] = gt, D[k] = P, pt = k;
          else break t;
        }
      }
      return L;
    }
    function Rt(D, L) {
      var P = D.sortIndex - L.sortIndex;
      return P !== 0 ? P : D.id - L.id;
    }
    if (W.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var xt = performance;
      W.unstable_now = function() {
        return xt.now();
      };
    } else {
      var ve = Date, tt = ve.now();
      W.unstable_now = function() {
        return ve.now() - tt;
      };
    }
    var nt = [], $ = [], Ht = 1, X = null, U = 3, it = !1, Vt = !1, De = !1, fe = !1, le = typeof setTimeout == "function" ? setTimeout : null, Tl = typeof clearTimeout == "function" ? clearTimeout : null, Be = typeof setImmediate < "u" ? setImmediate : null;
    function Je(D) {
      for (var L = qt($); L !== null; ) {
        if (L.callback === null) H($);
        else if (L.startTime <= D)
          H($), L.sortIndex = L.expirationTime, lt(nt, L);
        else break;
        L = qt($);
      }
    }
    function tl(D) {
      if (De = !1, Je(D), !Vt)
        if (qt(nt) !== null)
          Vt = !0, ul || (ul = !0, yt());
        else {
          var L = qt($);
          L !== null && je(tl, L.startTime - D);
        }
    }
    var ul = !1, zt = -1, Zt = 5, _e = -1;
    function st() {
      return fe ? !0 : !(W.unstable_now() - _e < Zt);
    }
    function Ye() {
      if (fe = !1, ul) {
        var D = W.unstable_now();
        _e = D;
        var L = !0;
        try {
          t: {
            Vt = !1, De && (De = !1, Tl(zt), zt = -1), it = !0;
            var P = U;
            try {
              e: {
                for (Je(D), X = qt(nt); X !== null && !(X.expirationTime > D && st()); ) {
                  var pt = X.callback;
                  if (typeof pt == "function") {
                    X.callback = null, U = X.priorityLevel;
                    var At = pt(
                      X.expirationTime <= D
                    );
                    if (D = W.unstable_now(), typeof At == "function") {
                      X.callback = At, Je(D), L = !0;
                      break e;
                    }
                    X === qt(nt) && H(nt), Je(D);
                  } else H(nt);
                  X = qt(nt);
                }
                if (X !== null) L = !0;
                else {
                  var S = qt($);
                  S !== null && je(
                    tl,
                    S.startTime - D
                  ), L = !1;
                }
              }
              break t;
            } finally {
              X = null, U = P, it = !1;
            }
            L = void 0;
          }
        } finally {
          L ? yt() : ul = !1;
        }
      }
    }
    var yt;
    if (typeof Be == "function")
      yt = function() {
        Be(Ye);
      };
    else if (typeof MessageChannel < "u") {
      var jt = new MessageChannel(), Qe = jt.port2;
      jt.port1.onmessage = Ye, yt = function() {
        Qe.postMessage(null);
      };
    } else
      yt = function() {
        le(Ye, 0);
      };
    function je(D, L) {
      zt = le(function() {
        D(W.unstable_now());
      }, L);
    }
    W.unstable_IdlePriority = 5, W.unstable_ImmediatePriority = 1, W.unstable_LowPriority = 4, W.unstable_NormalPriority = 3, W.unstable_Profiling = null, W.unstable_UserBlockingPriority = 2, W.unstable_cancelCallback = function(D) {
      D.callback = null;
    }, W.unstable_forceFrameRate = function(D) {
      0 > D || 125 < D ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Zt = 0 < D ? Math.floor(1e3 / D) : 5;
    }, W.unstable_getCurrentPriorityLevel = function() {
      return U;
    }, W.unstable_next = function(D) {
      switch (U) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = U;
      }
      var P = U;
      U = L;
      try {
        return D();
      } finally {
        U = P;
      }
    }, W.unstable_requestPaint = function() {
      fe = !0;
    }, W.unstable_runWithPriority = function(D, L) {
      switch (D) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          D = 3;
      }
      var P = U;
      U = D;
      try {
        return L();
      } finally {
        U = P;
      }
    }, W.unstable_scheduleCallback = function(D, L, P) {
      var pt = W.unstable_now();
      switch (typeof P == "object" && P !== null ? (P = P.delay, P = typeof P == "number" && 0 < P ? pt + P : pt) : P = pt, D) {
        case 1:
          var At = -1;
          break;
        case 2:
          At = 250;
          break;
        case 5:
          At = 1073741823;
          break;
        case 4:
          At = 1e4;
          break;
        default:
          At = 5e3;
      }
      return At = P + At, D = {
        id: Ht++,
        callback: L,
        priorityLevel: D,
        startTime: P,
        expirationTime: At,
        sortIndex: -1
      }, P > pt ? (D.sortIndex = P, lt($, D), qt(nt) === null && D === qt($) && (De ? (Tl(zt), zt = -1) : De = !0, je(tl, P - pt))) : (D.sortIndex = At, lt(nt, D), Vt || it || (Vt = !0, ul || (ul = !0, yt()))), D;
    }, W.unstable_shouldYield = st, W.unstable_wrapCallback = function(D) {
      var L = U;
      return function() {
        var P = U;
        U = L;
        try {
          return D.apply(this, arguments);
        } finally {
          U = P;
        }
      };
    };
  })(g1)), g1;
}
var S1 = {};
var q2;
function AT() {
  return q2 || (q2 = 1, (function(W) {
    process.env.NODE_ENV !== "production" && (function() {
      function lt() {
        if (tl = !1, _e) {
          var D = W.unstable_now();
          yt = D;
          var L = !0;
          try {
            t: {
              Be = !1, Je && (Je = !1, zt(st), st = -1), Tl = !0;
              var P = le;
              try {
                e: {
                  for (ve(D), fe = H(it); fe !== null && !(fe.expirationTime > D && nt()); ) {
                    var pt = fe.callback;
                    if (typeof pt == "function") {
                      fe.callback = null, le = fe.priorityLevel;
                      var At = pt(
                        fe.expirationTime <= D
                      );
                      if (D = W.unstable_now(), typeof At == "function") {
                        fe.callback = At, ve(D), L = !0;
                        break e;
                      }
                      fe === H(it) && Rt(it), ve(D);
                    } else Rt(it);
                    fe = H(it);
                  }
                  if (fe !== null) L = !0;
                  else {
                    var S = H(Vt);
                    S !== null && $(
                      tt,
                      S.startTime - D
                    ), L = !1;
                  }
                }
                break t;
              } finally {
                fe = null, le = P, Tl = !1;
              }
              L = void 0;
            }
          } finally {
            L ? jt() : _e = !1;
          }
        }
      }
      function qt(D, L) {
        var P = D.length;
        D.push(L);
        t: for (; 0 < P; ) {
          var pt = P - 1 >>> 1, At = D[pt];
          if (0 < xt(At, L))
            D[pt] = L, D[P] = At, P = pt;
          else break t;
        }
      }
      function H(D) {
        return D.length === 0 ? null : D[0];
      }
      function Rt(D) {
        if (D.length === 0) return null;
        var L = D[0], P = D.pop();
        if (P !== L) {
          D[0] = P;
          t: for (var pt = 0, At = D.length, S = At >>> 1; pt < S; ) {
            var B = 2 * (pt + 1) - 1, F = D[B], k = B + 1, gt = D[k];
            if (0 > xt(F, P))
              k < At && 0 > xt(gt, F) ? (D[pt] = gt, D[k] = P, pt = k) : (D[pt] = F, D[B] = P, pt = B);
            else if (k < At && 0 > xt(gt, P))
              D[pt] = gt, D[k] = P, pt = k;
            else break t;
          }
        }
        return L;
      }
      function xt(D, L) {
        var P = D.sortIndex - L.sortIndex;
        return P !== 0 ? P : D.id - L.id;
      }
      function ve(D) {
        for (var L = H(Vt); L !== null; ) {
          if (L.callback === null) Rt(Vt);
          else if (L.startTime <= D)
            Rt(Vt), L.sortIndex = L.expirationTime, qt(it, L);
          else break;
          L = H(Vt);
        }
      }
      function tt(D) {
        if (Je = !1, ve(D), !Be)
          if (H(it) !== null)
            Be = !0, _e || (_e = !0, jt());
          else {
            var L = H(Vt);
            L !== null && $(
              tt,
              L.startTime - D
            );
          }
      }
      function nt() {
        return tl ? !0 : !(W.unstable_now() - yt < Ye);
      }
      function $(D, L) {
        st = ul(function() {
          D(W.unstable_now());
        }, L);
      }
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()), W.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var Ht = performance;
        W.unstable_now = function() {
          return Ht.now();
        };
      } else {
        var X = Date, U = X.now();
        W.unstable_now = function() {
          return X.now() - U;
        };
      }
      var it = [], Vt = [], De = 1, fe = null, le = 3, Tl = !1, Be = !1, Je = !1, tl = !1, ul = typeof setTimeout == "function" ? setTimeout : null, zt = typeof clearTimeout == "function" ? clearTimeout : null, Zt = typeof setImmediate < "u" ? setImmediate : null, _e = !1, st = -1, Ye = 5, yt = -1;
      if (typeof Zt == "function")
        var jt = function() {
          Zt(lt);
        };
      else if (typeof MessageChannel < "u") {
        var Qe = new MessageChannel(), je = Qe.port2;
        Qe.port1.onmessage = lt, jt = function() {
          je.postMessage(null);
        };
      } else
        jt = function() {
          ul(lt, 0);
        };
      W.unstable_IdlePriority = 5, W.unstable_ImmediatePriority = 1, W.unstable_LowPriority = 4, W.unstable_NormalPriority = 3, W.unstable_Profiling = null, W.unstable_UserBlockingPriority = 2, W.unstable_cancelCallback = function(D) {
        D.callback = null;
      }, W.unstable_forceFrameRate = function(D) {
        0 > D || 125 < D ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : Ye = 0 < D ? Math.floor(1e3 / D) : 5;
      }, W.unstable_getCurrentPriorityLevel = function() {
        return le;
      }, W.unstable_next = function(D) {
        switch (le) {
          case 1:
          case 2:
          case 3:
            var L = 3;
            break;
          default:
            L = le;
        }
        var P = le;
        le = L;
        try {
          return D();
        } finally {
          le = P;
        }
      }, W.unstable_requestPaint = function() {
        tl = !0;
      }, W.unstable_runWithPriority = function(D, L) {
        switch (D) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            D = 3;
        }
        var P = le;
        le = D;
        try {
          return L();
        } finally {
          le = P;
        }
      }, W.unstable_scheduleCallback = function(D, L, P) {
        var pt = W.unstable_now();
        switch (typeof P == "object" && P !== null ? (P = P.delay, P = typeof P == "number" && 0 < P ? pt + P : pt) : P = pt, D) {
          case 1:
            var At = -1;
            break;
          case 2:
            At = 250;
            break;
          case 5:
            At = 1073741823;
            break;
          case 4:
            At = 1e4;
            break;
          default:
            At = 5e3;
        }
        return At = P + At, D = {
          id: De++,
          callback: L,
          priorityLevel: D,
          startTime: P,
          expirationTime: At,
          sortIndex: -1
        }, P > pt ? (D.sortIndex = P, qt(Vt, D), H(it) === null && D === H(Vt) && (Je ? (zt(st), st = -1) : Je = !0, $(tt, P - pt))) : (D.sortIndex = At, qt(it, D), Be || Tl || (Be = !0, _e || (_e = !0, jt()))), D;
      }, W.unstable_shouldYield = nt, W.unstable_wrapCallback = function(D) {
        var L = le;
        return function() {
          var P = le;
          le = L;
          try {
            return D.apply(this, arguments);
          } finally {
            le = P;
          }
        };
      }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  })(S1)), S1;
}
var x2;
function J2() {
  return x2 || (x2 = 1, process.env.NODE_ENV === "production" ? Zg.exports = TT() : Zg.exports = AT()), Zg.exports;
}
var Jg = { exports: {} }, Ya = {};
var G2;
function OT() {
  if (G2) return Ya;
  G2 = 1;
  var W = bm();
  function lt(nt) {
    var $ = "https://react.dev/errors/" + nt;
    if (1 < arguments.length) {
      $ += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var Ht = 2; Ht < arguments.length; Ht++)
        $ += "&args[]=" + encodeURIComponent(arguments[Ht]);
    }
    return "Minified React error #" + nt + "; visit " + $ + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function qt() {
  }
  var H = {
    d: {
      f: qt,
      r: function() {
        throw Error(lt(522));
      },
      D: qt,
      C: qt,
      L: qt,
      m: qt,
      X: qt,
      S: qt,
      M: qt
    },
    p: 0,
    findDOMNode: null
  }, Rt = /* @__PURE__ */ Symbol.for("react.portal");
  function xt(nt, $, Ht) {
    var X = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Rt,
      key: X == null ? null : "" + X,
      children: nt,
      containerInfo: $,
      implementation: Ht
    };
  }
  var ve = W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function tt(nt, $) {
    if (nt === "font") return "";
    if (typeof $ == "string")
      return $ === "use-credentials" ? $ : "";
  }
  return Ya.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = H, Ya.createPortal = function(nt, $) {
    var Ht = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!$ || $.nodeType !== 1 && $.nodeType !== 9 && $.nodeType !== 11)
      throw Error(lt(299));
    return xt(nt, $, null, Ht);
  }, Ya.flushSync = function(nt) {
    var $ = ve.T, Ht = H.p;
    try {
      if (ve.T = null, H.p = 2, nt) return nt();
    } finally {
      ve.T = $, H.p = Ht, H.d.f();
    }
  }, Ya.preconnect = function(nt, $) {
    typeof nt == "string" && ($ ? ($ = $.crossOrigin, $ = typeof $ == "string" ? $ === "use-credentials" ? $ : "" : void 0) : $ = null, H.d.C(nt, $));
  }, Ya.prefetchDNS = function(nt) {
    typeof nt == "string" && H.d.D(nt);
  }, Ya.preinit = function(nt, $) {
    if (typeof nt == "string" && $ && typeof $.as == "string") {
      var Ht = $.as, X = tt(Ht, $.crossOrigin), U = typeof $.integrity == "string" ? $.integrity : void 0, it = typeof $.fetchPriority == "string" ? $.fetchPriority : void 0;
      Ht === "style" ? H.d.S(
        nt,
        typeof $.precedence == "string" ? $.precedence : void 0,
        {
          crossOrigin: X,
          integrity: U,
          fetchPriority: it
        }
      ) : Ht === "script" && H.d.X(nt, {
        crossOrigin: X,
        integrity: U,
        fetchPriority: it,
        nonce: typeof $.nonce == "string" ? $.nonce : void 0
      });
    }
  }, Ya.preinitModule = function(nt, $) {
    if (typeof nt == "string")
      if (typeof $ == "object" && $ !== null) {
        if ($.as == null || $.as === "script") {
          var Ht = tt(
            $.as,
            $.crossOrigin
          );
          H.d.M(nt, {
            crossOrigin: Ht,
            integrity: typeof $.integrity == "string" ? $.integrity : void 0,
            nonce: typeof $.nonce == "string" ? $.nonce : void 0
          });
        }
      } else $ == null && H.d.M(nt);
  }, Ya.preload = function(nt, $) {
    if (typeof nt == "string" && typeof $ == "object" && $ !== null && typeof $.as == "string") {
      var Ht = $.as, X = tt(Ht, $.crossOrigin);
      H.d.L(nt, Ht, {
        crossOrigin: X,
        integrity: typeof $.integrity == "string" ? $.integrity : void 0,
        nonce: typeof $.nonce == "string" ? $.nonce : void 0,
        type: typeof $.type == "string" ? $.type : void 0,
        fetchPriority: typeof $.fetchPriority == "string" ? $.fetchPriority : void 0,
        referrerPolicy: typeof $.referrerPolicy == "string" ? $.referrerPolicy : void 0,
        imageSrcSet: typeof $.imageSrcSet == "string" ? $.imageSrcSet : void 0,
        imageSizes: typeof $.imageSizes == "string" ? $.imageSizes : void 0,
        media: typeof $.media == "string" ? $.media : void 0
      });
    }
  }, Ya.preloadModule = function(nt, $) {
    if (typeof nt == "string")
      if ($) {
        var Ht = tt($.as, $.crossOrigin);
        H.d.m(nt, {
          as: typeof $.as == "string" && $.as !== "script" ? $.as : void 0,
          crossOrigin: Ht,
          integrity: typeof $.integrity == "string" ? $.integrity : void 0
        });
      } else H.d.m(nt);
  }, Ya.requestFormReset = function(nt) {
    H.d.r(nt);
  }, Ya.unstable_batchedUpdates = function(nt, $) {
    return nt($);
  }, Ya.useFormState = function(nt, $, Ht) {
    return ve.H.useFormState(nt, $, Ht);
  }, Ya.useFormStatus = function() {
    return ve.H.useHostTransitionStatus();
  }, Ya.version = "19.2.3", Ya;
}
var ja = {};
var w2;
function zT() {
  return w2 || (w2 = 1, process.env.NODE_ENV !== "production" && (function() {
    function W() {
    }
    function lt(X) {
      return "" + X;
    }
    function qt(X, U, it) {
      var Vt = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      try {
        lt(Vt);
        var De = !1;
      } catch {
        De = !0;
      }
      return De && (console.error(
        "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
        typeof Symbol == "function" && Symbol.toStringTag && Vt[Symbol.toStringTag] || Vt.constructor.name || "Object"
      ), lt(Vt)), {
        $$typeof: $,
        key: Vt == null ? null : "" + Vt,
        children: X,
        containerInfo: U,
        implementation: it
      };
    }
    function H(X, U) {
      if (X === "font") return "";
      if (typeof U == "string")
        return U === "use-credentials" ? U : "";
    }
    function Rt(X) {
      return X === null ? "`null`" : X === void 0 ? "`undefined`" : X === "" ? "an empty string" : 'something with type "' + typeof X + '"';
    }
    function xt(X) {
      return X === null ? "`null`" : X === void 0 ? "`undefined`" : X === "" ? "an empty string" : typeof X == "string" ? JSON.stringify(X) : typeof X == "number" ? "`" + X + "`" : 'something with type "' + typeof X + '"';
    }
    function ve() {
      var X = Ht.H;
      return X === null && console.error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      ), X;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var tt = bm(), nt = {
      d: {
        f: W,
        r: function() {
          throw Error(
            "Invalid form element. requestFormReset must be passed a form that was rendered by React."
          );
        },
        D: W,
        C: W,
        L: W,
        m: W,
        X: W,
        S: W,
        M: W
      },
      p: 0,
      findDOMNode: null
    }, $ = /* @__PURE__ */ Symbol.for("react.portal"), Ht = tt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
    ), ja.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = nt, ja.createPortal = function(X, U) {
      var it = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!U || U.nodeType !== 1 && U.nodeType !== 9 && U.nodeType !== 11)
        throw Error("Target container is not a DOM element.");
      return qt(X, U, null, it);
    }, ja.flushSync = function(X) {
      var U = Ht.T, it = nt.p;
      try {
        if (Ht.T = null, nt.p = 2, X)
          return X();
      } finally {
        Ht.T = U, nt.p = it, nt.d.f() && console.error(
          "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
        );
      }
    }, ja.preconnect = function(X, U) {
      typeof X == "string" && X ? U != null && typeof U != "object" ? console.error(
        "ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",
        xt(U)
      ) : U != null && typeof U.crossOrigin != "string" && console.error(
        "ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",
        Rt(U.crossOrigin)
      ) : console.error(
        "ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        Rt(X)
      ), typeof X == "string" && (U ? (U = U.crossOrigin, U = typeof U == "string" ? U === "use-credentials" ? U : "" : void 0) : U = null, nt.d.C(X, U));
    }, ja.prefetchDNS = function(X) {
      if (typeof X != "string" || !X)
        console.error(
          "ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
          Rt(X)
        );
      else if (1 < arguments.length) {
        var U = arguments[1];
        typeof U == "object" && U.hasOwnProperty("crossOrigin") ? console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          xt(U)
        ) : console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          xt(U)
        );
      }
      typeof X == "string" && nt.d.D(X);
    }, ja.preinit = function(X, U) {
      if (typeof X == "string" && X ? U == null || typeof U != "object" ? console.error(
        "ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",
        xt(U)
      ) : U.as !== "style" && U.as !== "script" && console.error(
        'ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',
        xt(U.as)
      ) : console.error(
        "ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        Rt(X)
      ), typeof X == "string" && U && typeof U.as == "string") {
        var it = U.as, Vt = H(it, U.crossOrigin), De = typeof U.integrity == "string" ? U.integrity : void 0, fe = typeof U.fetchPriority == "string" ? U.fetchPriority : void 0;
        it === "style" ? nt.d.S(
          X,
          typeof U.precedence == "string" ? U.precedence : void 0,
          {
            crossOrigin: Vt,
            integrity: De,
            fetchPriority: fe
          }
        ) : it === "script" && nt.d.X(X, {
          crossOrigin: Vt,
          integrity: De,
          fetchPriority: fe,
          nonce: typeof U.nonce == "string" ? U.nonce : void 0
        });
      }
    }, ja.preinitModule = function(X, U) {
      var it = "";
      typeof X == "string" && X || (it += " The `href` argument encountered was " + Rt(X) + "."), U !== void 0 && typeof U != "object" ? it += " The `options` argument encountered was " + Rt(U) + "." : U && "as" in U && U.as !== "script" && (it += " The `as` option encountered was " + xt(U.as) + "."), it ? console.error(
        "ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",
        it
      ) : (it = U && typeof U.as == "string" ? U.as : "script", it) === "script" || (it = xt(it), console.error(
        'ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',
        it,
        X
      )), typeof X == "string" && (typeof U == "object" && U !== null ? (U.as == null || U.as === "script") && (it = H(
        U.as,
        U.crossOrigin
      ), nt.d.M(X, {
        crossOrigin: it,
        integrity: typeof U.integrity == "string" ? U.integrity : void 0,
        nonce: typeof U.nonce == "string" ? U.nonce : void 0
      })) : U == null && nt.d.M(X));
    }, ja.preload = function(X, U) {
      var it = "";
      if (typeof X == "string" && X || (it += " The `href` argument encountered was " + Rt(X) + "."), U == null || typeof U != "object" ? it += " The `options` argument encountered was " + Rt(U) + "." : typeof U.as == "string" && U.as || (it += " The `as` option encountered was " + Rt(U.as) + "."), it && console.error(
        'ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',
        it
      ), typeof X == "string" && typeof U == "object" && U !== null && typeof U.as == "string") {
        it = U.as;
        var Vt = H(
          it,
          U.crossOrigin
        );
        nt.d.L(X, it, {
          crossOrigin: Vt,
          integrity: typeof U.integrity == "string" ? U.integrity : void 0,
          nonce: typeof U.nonce == "string" ? U.nonce : void 0,
          type: typeof U.type == "string" ? U.type : void 0,
          fetchPriority: typeof U.fetchPriority == "string" ? U.fetchPriority : void 0,
          referrerPolicy: typeof U.referrerPolicy == "string" ? U.referrerPolicy : void 0,
          imageSrcSet: typeof U.imageSrcSet == "string" ? U.imageSrcSet : void 0,
          imageSizes: typeof U.imageSizes == "string" ? U.imageSizes : void 0,
          media: typeof U.media == "string" ? U.media : void 0
        });
      }
    }, ja.preloadModule = function(X, U) {
      var it = "";
      typeof X == "string" && X || (it += " The `href` argument encountered was " + Rt(X) + "."), U !== void 0 && typeof U != "object" ? it += " The `options` argument encountered was " + Rt(U) + "." : U && "as" in U && typeof U.as != "string" && (it += " The `as` option encountered was " + Rt(U.as) + "."), it && console.error(
        'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',
        it
      ), typeof X == "string" && (U ? (it = H(
        U.as,
        U.crossOrigin
      ), nt.d.m(X, {
        as: typeof U.as == "string" && U.as !== "script" ? U.as : void 0,
        crossOrigin: it,
        integrity: typeof U.integrity == "string" ? U.integrity : void 0
      })) : nt.d.m(X));
    }, ja.requestFormReset = function(X) {
      nt.d.r(X);
    }, ja.unstable_batchedUpdates = function(X, U) {
      return X(U);
    }, ja.useFormState = function(X, U, it) {
      return ve().useFormState(X, U, it);
    }, ja.useFormStatus = function() {
      return ve().useHostTransitionStatus();
    }, ja.version = "19.2.3", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), ja;
}
var X2;
function K2() {
  if (X2) return Jg.exports;
  X2 = 1;
  function W() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(W);
      } catch (lt) {
        console.error(lt);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (W(), Jg.exports = OT()) : Jg.exports = zT(), Jg.exports;
}
var Q2;
function _T() {
  if (Q2) return gp;
  Q2 = 1;
  var W = J2(), lt = bm(), qt = K2();
  function H(l) {
    var n = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        n += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function Rt(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function xt(l) {
    var n = l, u = l;
    if (l.alternate) for (; n.return; ) n = n.return;
    else {
      l = n;
      do
        n = l, (n.flags & 4098) !== 0 && (u = n.return), l = n.return;
      while (l);
    }
    return n.tag === 3 ? u : null;
  }
  function ve(l) {
    if (l.tag === 13) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function tt(l) {
    if (l.tag === 31) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function nt(l) {
    if (xt(l) !== l)
      throw Error(H(188));
  }
  function $(l) {
    var n = l.alternate;
    if (!n) {
      if (n = xt(l), n === null) throw Error(H(188));
      return n !== l ? null : l;
    }
    for (var u = l, c = n; ; ) {
      var s = u.return;
      if (s === null) break;
      var r = s.alternate;
      if (r === null) {
        if (c = s.return, c !== null) {
          u = c;
          continue;
        }
        break;
      }
      if (s.child === r.child) {
        for (r = s.child; r; ) {
          if (r === u) return nt(s), l;
          if (r === c) return nt(s), n;
          r = r.sibling;
        }
        throw Error(H(188));
      }
      if (u.return !== c.return) u = s, c = r;
      else {
        for (var m = !1, g = s.child; g; ) {
          if (g === u) {
            m = !0, u = s, c = r;
            break;
          }
          if (g === c) {
            m = !0, c = s, u = r;
            break;
          }
          g = g.sibling;
        }
        if (!m) {
          for (g = r.child; g; ) {
            if (g === u) {
              m = !0, u = r, c = s;
              break;
            }
            if (g === c) {
              m = !0, c = r, u = s;
              break;
            }
            g = g.sibling;
          }
          if (!m) throw Error(H(189));
        }
      }
      if (u.alternate !== c) throw Error(H(190));
    }
    if (u.tag !== 3) throw Error(H(188));
    return u.stateNode.current === u ? l : n;
  }
  function Ht(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l;
    for (l = l.child; l !== null; ) {
      if (n = Ht(l), n !== null) return n;
      l = l.sibling;
    }
    return null;
  }
  var X = Object.assign, U = /* @__PURE__ */ Symbol.for("react.element"), it = /* @__PURE__ */ Symbol.for("react.transitional.element"), Vt = /* @__PURE__ */ Symbol.for("react.portal"), De = /* @__PURE__ */ Symbol.for("react.fragment"), fe = /* @__PURE__ */ Symbol.for("react.strict_mode"), le = /* @__PURE__ */ Symbol.for("react.profiler"), Tl = /* @__PURE__ */ Symbol.for("react.consumer"), Be = /* @__PURE__ */ Symbol.for("react.context"), Je = /* @__PURE__ */ Symbol.for("react.forward_ref"), tl = /* @__PURE__ */ Symbol.for("react.suspense"), ul = /* @__PURE__ */ Symbol.for("react.suspense_list"), zt = /* @__PURE__ */ Symbol.for("react.memo"), Zt = /* @__PURE__ */ Symbol.for("react.lazy"), _e = /* @__PURE__ */ Symbol.for("react.activity"), st = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Ye = Symbol.iterator;
  function yt(l) {
    return l === null || typeof l != "object" ? null : (l = Ye && l[Ye] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var jt = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Qe(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === jt ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case De:
        return "Fragment";
      case le:
        return "Profiler";
      case fe:
        return "StrictMode";
      case tl:
        return "Suspense";
      case ul:
        return "SuspenseList";
      case _e:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Vt:
          return "Portal";
        case Be:
          return l.displayName || "Context";
        case Tl:
          return (l._context.displayName || "Context") + ".Consumer";
        case Je:
          var n = l.render;
          return l = l.displayName, l || (l = n.displayName || n.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case zt:
          return n = l.displayName || null, n !== null ? n : Qe(l.type) || "Memo";
        case Zt:
          n = l._payload, l = l._init;
          try {
            return Qe(l(n));
          } catch {
          }
      }
    return null;
  }
  var je = Array.isArray, D = lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, L = qt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, pt = [], At = -1;
  function S(l) {
    return { current: l };
  }
  function B(l) {
    0 > At || (l.current = pt[At], pt[At] = null, At--);
  }
  function F(l, n) {
    At++, pt[At] = l.current, l.current = n;
  }
  var k = S(null), gt = S(null), Gt = S(null), Et = S(null);
  function Le(l, n) {
    switch (F(Gt, n), F(gt, l), F(k, null), n.nodeType) {
      case 9:
      case 11:
        l = (l = n.documentElement) && (l = l.namespaceURI) ? Nv(l) : 0;
        break;
      default:
        if (l = n.tagName, n = n.namespaceURI)
          n = Nv(n), l = r0(n, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    B(k), F(k, l);
  }
  function he() {
    B(k), B(gt), B(Gt);
  }
  function qa(l) {
    l.memoizedState !== null && F(Et, l);
    var n = k.current, u = r0(n, l.type);
    n !== u && (F(gt, l), F(k, u));
  }
  function ct(l) {
    gt.current === l && (B(k), B(gt)), Et.current === l && (B(Et), zr._currentValue = P);
  }
  var _i, Di;
  function xa(l) {
    if (_i === void 0)
      try {
        throw Error();
      } catch (u) {
        var n = u.stack.trim().match(/\n( *(at )?)/);
        _i = n && n[1] || "", Di = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + _i + l + Di;
  }
  var uu = !1;
  function me(l, n) {
    if (!l || uu) return "";
    uu = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var c = {
        DetermineComponentFrameRoot: function() {
          try {
            if (n) {
              var J = function() {
                throw Error();
              };
              if (Object.defineProperty(J.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(J, []);
                } catch (w) {
                  var j = w;
                }
                Reflect.construct(l, [], J);
              } else {
                try {
                  J.call();
                } catch (w) {
                  j = w;
                }
                l.call(J.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (w) {
                j = w;
              }
              (J = l()) && typeof J.catch == "function" && J.catch(function() {
              });
            }
          } catch (w) {
            if (w && j && typeof w.stack == "string")
              return [w.stack, j.stack];
          }
          return [null, null];
        }
      };
      c.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        c.DetermineComponentFrameRoot,
        "name"
      );
      s && s.configurable && Object.defineProperty(
        c.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var r = c.DetermineComponentFrameRoot(), m = r[0], g = r[1];
      if (m && g) {
        var A = m.split(`
`), Y = g.split(`
`);
        for (s = c = 0; c < A.length && !A[c].includes("DetermineComponentFrameRoot"); )
          c++;
        for (; s < Y.length && !Y[s].includes(
          "DetermineComponentFrameRoot"
        ); )
          s++;
        if (c === A.length || s === Y.length)
          for (c = A.length - 1, s = Y.length - 1; 1 <= c && 0 <= s && A[c] !== Y[s]; )
            s--;
        for (; 1 <= c && 0 <= s; c--, s--)
          if (A[c] !== Y[s]) {
            if (c !== 1 || s !== 1)
              do
                if (c--, s--, 0 > s || A[c] !== Y[s]) {
                  var Q = `
` + A[c].replace(" at new ", " at ");
                  return l.displayName && Q.includes("<anonymous>") && (Q = Q.replace("<anonymous>", l.displayName)), Q;
                }
              while (1 <= c && 0 <= s);
            break;
          }
      }
    } finally {
      uu = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? xa(u) : "";
  }
  function Pl(l, n) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return xa(l.type);
      case 16:
        return xa("Lazy");
      case 13:
        return l.child !== n && n !== null ? xa("Suspense Fallback") : xa("Suspense");
      case 19:
        return xa("SuspenseList");
      case 0:
      case 15:
        return me(l.type, !1);
      case 11:
        return me(l.type.render, !1);
      case 1:
        return me(l.type, !0);
      case 31:
        return xa("Activity");
      default:
        return "";
    }
  }
  function vc(l) {
    try {
      var n = "", u = null;
      do
        n += Pl(l, u), u = l, l = l.return;
      while (l);
      return n;
    } catch (c) {
      return `
Error generating stack: ` + c.message + `
` + c.stack;
    }
  }
  var rs = Object.prototype.hasOwnProperty, rt = W.unstable_scheduleCallback, Ri = W.unstable_cancelCallback, iu = W.unstable_shouldYield, gc = W.unstable_requestPaint, vl = W.unstable_now, Ir = W.unstable_getCurrentPriorityLevel, Mo = W.unstable_ImmediatePriority, Co = W.unstable_UserBlockingPriority, Mn = W.unstable_NormalPriority, Pr = W.unstable_LowPriority, Uo = W.unstable_IdlePriority, ds = W.log, Sc = W.unstable_setDisableYieldValue, rn = null, Al = null;
  function Ga(l) {
    if (typeof ds == "function" && Sc(l), Al && typeof Al.setStrictMode == "function")
      try {
        Al.setStrictMode(rn, l);
      } catch {
      }
  }
  var Ul = Math.clz32 ? Math.clz32 : M, Mi = Math.log, v = Math.LN2;
  function M(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Mi(l) / v | 0) | 0;
  }
  var I = 256, et = 262144, dt = 4194304;
  function _t(l) {
    var n = l & 42;
    if (n !== 0) return n;
    switch (l & -l) {
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
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
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
        return l;
    }
  }
  function ht(l, n, u) {
    var c = l.pendingLanes;
    if (c === 0) return 0;
    var s = 0, r = l.suspendedLanes, m = l.pingedLanes;
    l = l.warmLanes;
    var g = c & 134217727;
    return g !== 0 ? (c = g & ~r, c !== 0 ? s = _t(c) : (m &= g, m !== 0 ? s = _t(m) : u || (u = g & ~l, u !== 0 && (s = _t(u))))) : (g = c & ~r, g !== 0 ? s = _t(g) : m !== 0 ? s = _t(m) : u || (u = c & ~l, u !== 0 && (s = _t(u)))), s === 0 ? 0 : n !== 0 && n !== s && (n & r) === 0 && (r = s & -s, u = n & -n, r >= u || r === 32 && (u & 4194048) !== 0) ? n : s;
  }
  function Pt(l, n) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & n) === 0;
  }
  function wt(l, n) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
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
        return n + 5e3;
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
  function ta() {
    var l = dt;
    return dt <<= 1, (dt & 62914560) === 0 && (dt = 4194304), l;
  }
  function dn(l) {
    for (var n = [], u = 0; 31 > u; u++) n.push(l);
    return n;
  }
  function Ci(l, n) {
    l.pendingLanes |= n, n !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function Ho(l, n, u, c, s, r) {
    var m = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var g = l.entanglements, A = l.expirationTimes, Y = l.hiddenUpdates;
    for (u = m & ~u; 0 < u; ) {
      var Q = 31 - Ul(u), J = 1 << Q;
      g[Q] = 0, A[Q] = -1;
      var j = Y[Q];
      if (j !== null)
        for (Y[Q] = null, Q = 0; Q < j.length; Q++) {
          var w = j[Q];
          w !== null && (w.lane &= -536870913);
        }
      u &= ~J;
    }
    c !== 0 && hs(l, c, 0), r !== 0 && s === 0 && l.tag !== 0 && (l.suspendedLanes |= r & ~(m & ~n));
  }
  function hs(l, n, u) {
    l.pendingLanes |= n, l.suspendedLanes &= ~n;
    var c = 31 - Ul(n);
    l.entangledLanes |= n, l.entanglements[c] = l.entanglements[c] | 1073741824 | u & 261930;
  }
  function cu(l, n) {
    var u = l.entangledLanes |= n;
    for (l = l.entanglements; u; ) {
      var c = 31 - Ul(u), s = 1 << c;
      s & n | l[c] & n && (l[c] |= n), u &= ~s;
    }
  }
  function wa(l, n) {
    var u = n & -n;
    return u = (u & 42) !== 0 ? 1 : td(u), (u & (l.suspendedLanes | n)) !== 0 ? 0 : u;
  }
  function td(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
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
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function Em(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function ed() {
    var l = L.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : _r(l.type));
  }
  function Tm(l, n) {
    var u = L.p;
    try {
      return L.p = l, n();
    } finally {
      L.p = u;
    }
  }
  var Cn = Math.random().toString(36).slice(2), Re = "__reactFiber$" + Cn, fa = "__reactProps$" + Cn, Ui = "__reactContainer$" + Cn, ld = "__reactEvents$" + Cn, Am = "__reactListeners$" + Cn, Ep = "__reactHandles$" + Cn, Om = "__reactResources$" + Cn, ou = "__reactMarker$" + Cn;
  function ad(l) {
    delete l[Re], delete l[fa], delete l[ld], delete l[Am], delete l[Ep];
  }
  function bc(l) {
    var n = l[Re];
    if (n) return n;
    for (var u = l.parentNode; u; ) {
      if (n = u[Ui] || u[Re]) {
        if (u = n.alternate, n.child !== null || u !== null && u.child !== null)
          for (l = Fn(l); l !== null; ) {
            if (u = l[Re]) return u;
            l = Fn(l);
          }
        return n;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function Ec(l) {
    if (l = l[Re] || l[Ui]) {
      var n = l.tag;
      if (n === 5 || n === 6 || n === 13 || n === 31 || n === 26 || n === 27 || n === 3)
        return l;
    }
    return null;
  }
  function No(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l.stateNode;
    throw Error(H(33));
  }
  function Tc(l) {
    var n = l[Om];
    return n || (n = l[Om] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function Ee(l) {
    l[ou] = !0;
  }
  var Ac = /* @__PURE__ */ new Set(), Hi = {};
  function Ni(l, n) {
    fu(l, n), fu(l + "Capture", n);
  }
  function fu(l, n) {
    for (Hi[l] = n, l = 0; l < n.length; l++)
      Ac.add(n[l]);
  }
  var nd = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), ud = {}, Bo = {};
  function Yo(l) {
    return rs.call(Bo, l) ? !0 : rs.call(ud, l) ? !1 : nd.test(l) ? Bo[l] = !0 : (ud[l] = !0, !1);
  }
  function jo(l, n, u) {
    if (Yo(n))
      if (u === null) l.removeAttribute(n);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(n);
            return;
          case "boolean":
            var c = n.toLowerCase().slice(0, 5);
            if (c !== "data-" && c !== "aria-") {
              l.removeAttribute(n);
              return;
            }
        }
        l.setAttribute(n, "" + u);
      }
  }
  function id(l, n, u) {
    if (u === null) l.removeAttribute(n);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(n);
          return;
      }
      l.setAttribute(n, "" + u);
    }
  }
  function Fu(l, n, u, c) {
    if (c === null) l.removeAttribute(u);
    else {
      switch (typeof c) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(n, u, "" + c);
    }
  }
  function Xa(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function cd(l) {
    var n = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function zm(l, n, u) {
    var c = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      n
    );
    if (!l.hasOwnProperty(n) && typeof c < "u" && typeof c.get == "function" && typeof c.set == "function") {
      var s = c.get, r = c.set;
      return Object.defineProperty(l, n, {
        configurable: !0,
        get: function() {
          return s.call(this);
        },
        set: function(m) {
          u = "" + m, r.call(this, m);
        }
      }), Object.defineProperty(l, n, {
        enumerable: c.enumerable
      }), {
        getValue: function() {
          return u;
        },
        setValue: function(m) {
          u = "" + m;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[n];
        }
      };
    }
  }
  function od(l) {
    if (!l._valueTracker) {
      var n = cd(l) ? "checked" : "value";
      l._valueTracker = zm(
        l,
        n,
        "" + l[n]
      );
    }
  }
  function _m(l) {
    if (!l) return !1;
    var n = l._valueTracker;
    if (!n) return !0;
    var u = n.getValue(), c = "";
    return l && (c = cd(l) ? l.checked ? "true" : "false" : l.value), l = c, l !== u ? (n.setValue(l), !0) : !1;
  }
  function ms(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Kg = /[\n"\\]/g;
  function Qa(l) {
    return l.replace(
      Kg,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function ys(l, n, u, c, s, r, m, g) {
    l.name = "", m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? l.type = m : l.removeAttribute("type"), n != null ? m === "number" ? (n === 0 && l.value === "" || l.value != n) && (l.value = "" + Xa(n)) : l.value !== "" + Xa(n) && (l.value = "" + Xa(n)) : m !== "submit" && m !== "reset" || l.removeAttribute("value"), n != null ? Oc(l, m, Xa(n)) : u != null ? Oc(l, m, Xa(u)) : c != null && l.removeAttribute("value"), s == null && r != null && (l.defaultChecked = !!r), s != null && (l.checked = s && typeof s != "function" && typeof s != "symbol"), g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" ? l.name = "" + Xa(g) : l.removeAttribute("name");
  }
  function ps(l, n, u, c, s, r, m, g) {
    if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (l.type = r), n != null || u != null) {
      if (!(r !== "submit" && r !== "reset" || n != null)) {
        od(l);
        return;
      }
      u = u != null ? "" + Xa(u) : "", n = n != null ? "" + Xa(n) : u, g || n === l.value || (l.value = n), l.defaultValue = n;
    }
    c = c ?? s, c = typeof c != "function" && typeof c != "symbol" && !!c, l.checked = g ? l.checked : !!c, l.defaultChecked = !!c, m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (l.name = m), od(l);
  }
  function Oc(l, n, u) {
    n === "number" && ms(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function qo(l, n, u, c) {
    if (l = l.options, n) {
      n = {};
      for (var s = 0; s < u.length; s++)
        n["$" + u[s]] = !0;
      for (u = 0; u < l.length; u++)
        s = n.hasOwnProperty("$" + l[u].value), l[u].selected !== s && (l[u].selected = s), s && c && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + Xa(u), n = null, s = 0; s < l.length; s++) {
        if (l[s].value === u) {
          l[s].selected = !0, c && (l[s].defaultSelected = !0);
          return;
        }
        n !== null || l[s].disabled || (n = l[s]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Dm(l, n, u) {
    if (n != null && (n = "" + Xa(n), n !== l.value && (l.value = n), u == null)) {
      l.defaultValue !== n && (l.defaultValue = n);
      return;
    }
    l.defaultValue = u != null ? "" + Xa(u) : "";
  }
  function Rm(l, n, u, c) {
    if (n == null) {
      if (c != null) {
        if (u != null) throw Error(H(92));
        if (je(c)) {
          if (1 < c.length) throw Error(H(93));
          c = c[0];
        }
        u = c;
      }
      u == null && (u = ""), n = u;
    }
    u = Xa(n), l.defaultValue = u, c = l.textContent, c === u && c !== "" && c !== null && (l.value = c), od(l);
  }
  function su(l, n) {
    if (n) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = n;
        return;
      }
    }
    l.textContent = n;
  }
  var Tp = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Ap(l, n, u) {
    var c = n.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? c ? l.setProperty(n, "") : n === "float" ? l.cssFloat = "" : l[n] = "" : c ? l.setProperty(n, u) : typeof u != "number" || u === 0 || Tp.has(n) ? n === "float" ? l.cssFloat = u : l[n] = ("" + u).trim() : l[n] = u + "px";
  }
  function Op(l, n, u) {
    if (n != null && typeof n != "object")
      throw Error(H(62));
    if (l = l.style, u != null) {
      for (var c in u)
        !u.hasOwnProperty(c) || n != null && n.hasOwnProperty(c) || (c.indexOf("--") === 0 ? l.setProperty(c, "") : c === "float" ? l.cssFloat = "" : l[c] = "");
      for (var s in n)
        c = n[s], n.hasOwnProperty(s) && u[s] !== c && Ap(l, s, c);
    } else
      for (var r in n)
        n.hasOwnProperty(r) && Ap(l, r, n[r]);
  }
  function Mm(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
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
  var $g = /* @__PURE__ */ new Map([
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
  ]), vs = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function hn(l) {
    return vs.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function Un() {
  }
  var fd = null;
  function sd(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var ru = null, zc = null;
  function gs(l) {
    var n = Ec(l);
    if (n && (l = n.stateNode)) {
      var u = l[fa] || null;
      t: switch (l = n.stateNode, n.type) {
        case "input":
          if (ys(
            l,
            u.value,
            u.defaultValue,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name
          ), n = u.name, u.type === "radio" && n != null) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll(
              'input[name="' + Qa(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < u.length; n++) {
              var c = u[n];
              if (c !== l && c.form === l.form) {
                var s = c[fa] || null;
                if (!s) throw Error(H(90));
                ys(
                  c,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
                );
              }
            }
            for (n = 0; n < u.length; n++)
              c = u[n], c.form === l.form && _m(c);
          }
          break t;
        case "textarea":
          Dm(l, u.value, u.defaultValue);
          break t;
        case "select":
          n = u.value, n != null && qo(l, !!u.multiple, n, !1);
      }
    }
  }
  var xo = !1;
  function Cm(l, n, u) {
    if (xo) return l(n, u);
    xo = !0;
    try {
      var c = l(n);
      return c;
    } finally {
      if (xo = !1, (ru !== null || zc !== null) && (Ef(), ru && (n = ru, l = zc, zc = ru = null, gs(n), l)))
        for (n = 0; n < l.length; n++) gs(l[n]);
    }
  }
  function Hl(l, n) {
    var u = l.stateNode;
    if (u === null) return null;
    var c = u[fa] || null;
    if (c === null) return null;
    u = c[n];
    t: switch (n) {
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
        (c = !c.disabled) || (l = l.type, c = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !c;
        break t;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function")
      throw Error(
        H(231, n, typeof u)
      );
    return u;
  }
  var Iu = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ss = !1;
  if (Iu)
    try {
      var Go = {};
      Object.defineProperty(Go, "passive", {
        get: function() {
          Ss = !0;
        }
      }), window.addEventListener("test", Go, Go), window.removeEventListener("test", Go, Go);
    } catch {
      Ss = !1;
    }
  var Pu = null, Um = null, rd = null;
  function Hm() {
    if (rd) return rd;
    var l, n = Um, u = n.length, c, s = "value" in Pu ? Pu.value : Pu.textContent, r = s.length;
    for (l = 0; l < u && n[l] === s[l]; l++) ;
    var m = u - l;
    for (c = 1; c <= m && n[u - c] === s[r - c]; c++) ;
    return rd = s.slice(l, 1 < c ? 1 - c : void 0);
  }
  function dd(l) {
    var n = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && n === 13 && (l = 13)) : l = n, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function bs() {
    return !0;
  }
  function zp() {
    return !1;
  }
  function Kl(l) {
    function n(u, c, s, r, m) {
      this._reactName = u, this._targetInst = s, this.type = c, this.nativeEvent = r, this.target = m, this.currentTarget = null;
      for (var g in l)
        l.hasOwnProperty(g) && (u = l[g], this[g] = u ? u(r) : r[g]);
      return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? bs : zp, this.isPropagationStopped = zp, this;
    }
    return X(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = bs);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = bs);
      },
      persist: function() {
      },
      isPersistent: bs
    }), n;
  }
  var Bi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Es = Kl(Bi), wo = X({}, Bi, { view: 0, detail: 0 }), kg = Kl(wo), Nm, Bm, Ts, hd = X({}, wo, {
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
    getModifierState: mn,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== Ts && (Ts && l.type === "mousemove" ? (Nm = l.screenX - Ts.screenX, Bm = l.screenY - Ts.screenY) : Bm = Nm = 0, Ts = l), Nm);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : Bm;
    }
  }), Xo = Kl(hd), _p = X({}, hd, { dataTransfer: 0 }), Dp = Kl(_p), Rp = X({}, wo, { relatedTarget: 0 }), md = Kl(Rp), Ym = X({}, Bi, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Mp = Kl(Ym), _c = X({}, Bi, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Dc = Kl(_c), Hn = X({}, Bi, { data: 0 }), Cp = Kl(Hn), jm = {
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
  }, du = {
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
  }, Up = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Nn(l) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(l) : (l = Up[l]) ? !!n[l] : !1;
  }
  function mn() {
    return Nn;
  }
  var yd = X({}, wo, {
    key: function(l) {
      if (l.key) {
        var n = jm[l.key] || l.key;
        if (n !== "Unidentified") return n;
      }
      return l.type === "keypress" ? (l = dd(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? du[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: mn,
    charCode: function(l) {
      return l.type === "keypress" ? dd(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? dd(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), pd = Kl(yd), qm = X({}, hd, {
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
  }), Bn = Kl(qm), Wg = X({}, wo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: mn
  }), Hp = Kl(Wg), Np = X({}, Bi, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Fg = Kl(Np), xm = X({}, hd, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ig = Kl(xm), Bp = X({}, Bi, {
    newState: 0,
    oldState: 0
  }), Gm = Kl(Bp), vd = [9, 13, 27, 32], Qo = Iu && "CompositionEvent" in window, Rc = null;
  Iu && "documentMode" in document && (Rc = document.documentMode);
  var ea = Iu && "TextEvent" in window && !Rc, wm = Iu && (!Qo || Rc && 8 < Rc && 11 >= Rc), As = " ", Yi = !1;
  function gd(l, n) {
    switch (l) {
      case "keyup":
        return vd.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Xm(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var Mc = !1;
  function Yp(l, n) {
    switch (l) {
      case "compositionend":
        return Xm(n);
      case "keypress":
        return n.which !== 32 ? null : (Yi = !0, As);
      case "textInput":
        return l = n.data, l === As && Yi ? null : l;
      default:
        return null;
    }
  }
  function Pg(l, n) {
    if (Mc)
      return l === "compositionend" || !Qo && gd(l, n) ? (l = Hm(), rd = Um = Pu = null, Mc = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length)
            return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return wm && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Qm = {
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
  function hu(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n === "input" ? !!Qm[l.type] : n === "textarea";
  }
  function Lm(l, n, u, c) {
    ru ? zc ? zc.push(c) : zc = [c] : ru = c, n = Sr(n, "onChange"), 0 < n.length && (u = new Es(
      "onChange",
      "change",
      null,
      u,
      c
    ), l.push({ event: u, listeners: n }));
  }
  var Cc = null, ji = null;
  function Uc(l) {
    Cv(l, 0);
  }
  function Lo(l) {
    var n = No(l);
    if (_m(n)) return l;
  }
  function Vm(l, n) {
    if (l === "change") return n;
  }
  var Sd = !1;
  if (Iu) {
    var sa;
    if (Iu) {
      var Yn = "oninput" in document;
      if (!Yn) {
        var Zm = document.createElement("div");
        Zm.setAttribute("oninput", "return;"), Yn = typeof Zm.oninput == "function";
      }
      sa = Yn;
    } else sa = !1;
    Sd = sa && (!document.documentMode || 9 < document.documentMode);
  }
  function bd() {
    Cc && (Cc.detachEvent("onpropertychange", Ed), ji = Cc = null);
  }
  function Ed(l) {
    if (l.propertyName === "value" && Lo(ji)) {
      var n = [];
      Lm(
        n,
        ji,
        l,
        sd(l)
      ), Cm(Uc, n);
    }
  }
  function jp(l, n, u) {
    l === "focusin" ? (bd(), Cc = n, ji = u, Cc.attachEvent("onpropertychange", Ed)) : l === "focusout" && bd();
  }
  function qp(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Lo(ji);
  }
  function qi(l, n) {
    if (l === "click") return Lo(n);
  }
  function Hc(l, n) {
    if (l === "input" || l === "change")
      return Lo(n);
  }
  function xp(l, n) {
    return l === n && (l !== 0 || 1 / l === 1 / n) || l !== l && n !== n;
  }
  var la = typeof Object.is == "function" ? Object.is : xp;
  function yn(l, n) {
    if (la(l, n)) return !0;
    if (typeof l != "object" || l === null || typeof n != "object" || n === null)
      return !1;
    var u = Object.keys(l), c = Object.keys(n);
    if (u.length !== c.length) return !1;
    for (c = 0; c < u.length; c++) {
      var s = u[c];
      if (!rs.call(n, s) || !la(l[s], n[s]))
        return !1;
    }
    return !0;
  }
  function Jm(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function Km(l, n) {
    var u = Jm(l);
    l = 0;
    for (var c; u; ) {
      if (u.nodeType === 3) {
        if (c = l + u.textContent.length, l <= n && c >= n)
          return { node: u, offset: n - l };
        l = c;
      }
      t: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break t;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = Jm(u);
    }
  }
  function Nc(l, n) {
    return l && n ? l === n ? !0 : l && l.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Nc(l, n.parentNode) : "contains" in l ? l.contains(n) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function xi(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var n = ms(l.document); n instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof n.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = n.contentWindow;
      else break;
      n = ms(l.document);
    }
    return n;
  }
  function Os(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n && (n === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || n === "textarea" || l.contentEditable === "true");
  }
  var zs = Iu && "documentMode" in document && 11 >= document.documentMode, Gi = null, Vo = null, pn = null, jn = !1;
  function Td(l, n, u) {
    var c = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    jn || Gi == null || Gi !== ms(c) || (c = Gi, "selectionStart" in c && Os(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
      anchorNode: c.anchorNode,
      anchorOffset: c.anchorOffset,
      focusNode: c.focusNode,
      focusOffset: c.focusOffset
    }), pn && yn(pn, c) || (pn = c, c = Sr(Vo, "onSelect"), 0 < c.length && (n = new Es(
      "onSelect",
      "select",
      null,
      n,
      u
    ), l.push({ event: n, listeners: c }), n.target = Gi)));
  }
  function ti(l, n) {
    var u = {};
    return u[l.toLowerCase()] = n.toLowerCase(), u["Webkit" + l] = "webkit" + n, u["Moz" + l] = "moz" + n, u;
  }
  var qn = {
    animationend: ti("Animation", "AnimationEnd"),
    animationiteration: ti("Animation", "AnimationIteration"),
    animationstart: ti("Animation", "AnimationStart"),
    transitionrun: ti("Transition", "TransitionRun"),
    transitionstart: ti("Transition", "TransitionStart"),
    transitioncancel: ti("Transition", "TransitionCancel"),
    transitionend: ti("Transition", "TransitionEnd")
  }, Zo = {}, wi = {};
  Iu && (wi = document.createElement("div").style, "AnimationEvent" in window || (delete qn.animationend.animation, delete qn.animationiteration.animation, delete qn.animationstart.animation), "TransitionEvent" in window || delete qn.transitionend.transition);
  function ge(l) {
    if (Zo[l]) return Zo[l];
    if (!qn[l]) return l;
    var n = qn[l], u;
    for (u in n)
      if (n.hasOwnProperty(u) && u in wi)
        return Zo[l] = n[u];
    return l;
  }
  var _s = ge("animationend"), $m = ge("animationiteration"), Ad = ge("animationstart"), Bc = ge("transitionrun"), Ds = ge("transitionstart"), mu = ge("transitioncancel"), Gp = ge("transitionend"), yu = /* @__PURE__ */ new Map(), Jo = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Jo.push("scrollEnd");
  function ra(l, n) {
    yu.set(l, n), Ni(n, [l]);
  }
  var Yc = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(n)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  }, Ke = [], Nl = 0, vn = 0;
  function La() {
    for (var l = Nl, n = vn = Nl = 0; n < l; ) {
      var u = Ke[n];
      Ke[n++] = null;
      var c = Ke[n];
      Ke[n++] = null;
      var s = Ke[n];
      Ke[n++] = null;
      var r = Ke[n];
      if (Ke[n++] = null, c !== null && s !== null) {
        var m = c.pending;
        m === null ? s.next = s : (s.next = m.next, m.next = s), c.pending = s;
      }
      r !== 0 && Od(u, s, r);
    }
  }
  function Va(l, n, u, c) {
    Ke[Nl++] = l, Ke[Nl++] = n, Ke[Nl++] = u, Ke[Nl++] = c, vn |= c, l.lanes |= c, l = l.alternate, l !== null && (l.lanes |= c);
  }
  function gn(l, n, u, c) {
    return Va(l, n, u, c), Rs(l);
  }
  function ei(l, n) {
    return Va(l, null, null, n), Rs(l);
  }
  function Od(l, n, u) {
    l.lanes |= u;
    var c = l.alternate;
    c !== null && (c.lanes |= u);
    for (var s = !1, r = l.return; r !== null; )
      r.childLanes |= u, c = r.alternate, c !== null && (c.childLanes |= u), r.tag === 22 && (l = r.stateNode, l === null || l._visibility & 1 || (s = !0)), l = r, r = r.return;
    return l.tag === 3 ? (r = l.stateNode, s && n !== null && (s = 31 - Ul(u), l = r.hiddenUpdates, c = l[s], c === null ? l[s] = [n] : c.push(n), n.lane = u | 536870912), r) : null;
  }
  function Rs(l) {
    if (50 < bf)
      throw bf = 0, sr = null, Error(H(185));
    for (var n = l.return; n !== null; )
      l = n, n = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var da = {};
  function wp(l, n, u, c) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function il(l, n, u, c) {
    return new wp(l, n, u, c);
  }
  function jc(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function li(l, n) {
    var u = l.alternate;
    return u === null ? (u = il(
      l.tag,
      n,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = n, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, n = l.dependencies, u.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function km(l, n) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = n, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, n = u.dependencies, l.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), l;
  }
  function zd(l, n, u, c, s, r) {
    var m = 0;
    if (c = l, typeof l == "function") jc(l) && (m = 1);
    else if (typeof l == "string")
      m = g0(
        l,
        u,
        k.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      t: switch (l) {
        case _e:
          return l = il(31, u, n, s), l.elementType = _e, l.lanes = r, l;
        case De:
          return ai(u.children, s, r, n);
        case fe:
          m = 8, s |= 24;
          break;
        case le:
          return l = il(12, u, n, s | 2), l.elementType = le, l.lanes = r, l;
        case tl:
          return l = il(13, u, n, s), l.elementType = tl, l.lanes = r, l;
        case ul:
          return l = il(19, u, n, s), l.elementType = ul, l.lanes = r, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Be:
                m = 10;
                break t;
              case Tl:
                m = 9;
                break t;
              case Je:
                m = 11;
                break t;
              case zt:
                m = 14;
                break t;
              case Zt:
                m = 16, c = null;
                break t;
            }
          m = 29, u = Error(
            H(130, l === null ? "null" : typeof l, "")
          ), c = null;
      }
    return n = il(m, u, n, s), n.elementType = l, n.type = c, n.lanes = r, n;
  }
  function ai(l, n, u, c) {
    return l = il(7, l, c, n), l.lanes = u, l;
  }
  function Ko(l, n, u) {
    return l = il(6, l, null, n), l.lanes = u, l;
  }
  function Wm(l) {
    var n = il(18, null, null, 0);
    return n.stateNode = l, n;
  }
  function _d(l, n, u) {
    return n = il(
      4,
      l.children !== null ? l.children : [],
      l.key,
      n
    ), n.lanes = u, n.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, n;
  }
  var Fm = /* @__PURE__ */ new WeakMap();
  function Za(l, n) {
    if (typeof l == "object" && l !== null) {
      var u = Fm.get(l);
      return u !== void 0 ? u : (n = {
        value: l,
        source: n,
        stack: vc(n)
      }, Fm.set(l, n), n);
    }
    return {
      value: l,
      source: n,
      stack: vc(n)
    };
  }
  var Ja = [], qc = 0, Ms = null, rl = 0, _a = [], ha = 0, xn = null, Da = 1, Gn = "";
  function Sn(l, n) {
    Ja[qc++] = rl, Ja[qc++] = Ms, Ms = l, rl = n;
  }
  function Im(l, n, u) {
    _a[ha++] = Da, _a[ha++] = Gn, _a[ha++] = xn, xn = l;
    var c = Da;
    l = Gn;
    var s = 32 - Ul(c) - 1;
    c &= ~(1 << s), u += 1;
    var r = 32 - Ul(n) + s;
    if (30 < r) {
      var m = s - s % 5;
      r = (c & (1 << m) - 1).toString(32), c >>= m, s -= m, Da = 1 << 32 - Ul(n) + s | u << s | c, Gn = r + l;
    } else
      Da = 1 << r | u << s | c, Gn = l;
  }
  function $o(l) {
    l.return !== null && (Sn(l, 1), Im(l, 1, 0));
  }
  function Dd(l) {
    for (; l === Ms; )
      Ms = Ja[--qc], Ja[qc] = null, rl = Ja[--qc], Ja[qc] = null;
    for (; l === xn; )
      xn = _a[--ha], _a[ha] = null, Gn = _a[--ha], _a[ha] = null, Da = _a[--ha], _a[ha] = null;
  }
  function Cs(l, n) {
    _a[ha++] = Da, _a[ha++] = Gn, _a[ha++] = xn, Da = n.id, Gn = n.overflow, xn = l;
  }
  var Bl = null, qe = null, ne = !1, pu = null, Ol = !1, vu = Error(H(519));
  function bn(l) {
    var n = Error(
      H(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Wo(Za(n, l)), vu;
  }
  function Us(l) {
    var n = l.stateNode, u = l.type, c = l.memoizedProps;
    switch (n[Re] = l, n[fa] = c, u) {
      case "dialog":
        ae("cancel", n), ae("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        ae("load", n);
        break;
      case "video":
      case "audio":
        for (u = 0; u < _f.length; u++)
          ae(_f[u], n);
        break;
      case "source":
        ae("error", n);
        break;
      case "img":
      case "image":
      case "link":
        ae("error", n), ae("load", n);
        break;
      case "details":
        ae("toggle", n);
        break;
      case "input":
        ae("invalid", n), ps(
          n,
          c.value,
          c.defaultValue,
          c.checked,
          c.defaultChecked,
          c.type,
          c.name,
          !0
        );
        break;
      case "select":
        ae("invalid", n);
        break;
      case "textarea":
        ae("invalid", n), Rm(n, c.value, c.defaultValue, c.children);
    }
    u = c.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || n.textContent === "" + u || c.suppressHydrationWarning === !0 || c0(n.textContent, u) ? (c.popover != null && (ae("beforetoggle", n), ae("toggle", n)), c.onScroll != null && ae("scroll", n), c.onScrollEnd != null && ae("scrollend", n), c.onClick != null && (n.onclick = Un), n = !0) : n = !1, n || bn(l, !0);
  }
  function ko(l) {
    for (Bl = l.return; Bl; )
      switch (Bl.tag) {
        case 5:
        case 31:
        case 13:
          Ol = !1;
          return;
        case 27:
        case 3:
          Ol = !0;
          return;
        default:
          Bl = Bl.return;
      }
  }
  function gu(l) {
    if (l !== Bl) return !1;
    if (!ne) return ko(l), ne = !0, !1;
    var n = l.tag, u;
    if ((u = n !== 3 && n !== 27) && ((u = n === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || Rf(l.type, l.memoizedProps)), u = !u), u && qe && bn(l), ko(l), n === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(H(317));
      qe = Ch(l);
    } else if (n === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(H(317));
      qe = Ch(l);
    } else
      n === 27 ? (n = qe, Wn(l.type) ? (l = Tr, Tr = null, qe = l) : qe = n) : qe = Bl ? Aa(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Xi() {
    qe = Bl = null, ne = !1;
  }
  function Pm() {
    var l = pu;
    return l !== null && (al === null ? al = l : al.push.apply(
      al,
      l
    ), pu = null), l;
  }
  function Wo(l) {
    pu === null ? pu = [l] : pu.push(l);
  }
  var Rd = S(null), ni = null, wn = null;
  function ma(l, n, u) {
    F(Rd, n._currentValue), n._currentValue = u;
  }
  function Xn(l) {
    l._currentValue = Rd.current, B(Rd);
  }
  function Md(l, n, u) {
    for (; l !== null; ) {
      var c = l.alternate;
      if ((l.childLanes & n) !== n ? (l.childLanes |= n, c !== null && (c.childLanes |= n)) : c !== null && (c.childLanes & n) !== n && (c.childLanes |= n), l === u) break;
      l = l.return;
    }
  }
  function Su(l, n, u, c) {
    var s = l.child;
    for (s !== null && (s.return = l); s !== null; ) {
      var r = s.dependencies;
      if (r !== null) {
        var m = s.child;
        r = r.firstContext;
        t: for (; r !== null; ) {
          var g = r;
          r = s;
          for (var A = 0; A < n.length; A++)
            if (g.context === n[A]) {
              r.lanes |= u, g = r.alternate, g !== null && (g.lanes |= u), Md(
                r.return,
                u,
                l
              ), c || (m = null);
              break t;
            }
          r = g.next;
        }
      } else if (s.tag === 18) {
        if (m = s.return, m === null) throw Error(H(341));
        m.lanes |= u, r = m.alternate, r !== null && (r.lanes |= u), Md(m, u, l), m = null;
      } else m = s.child;
      if (m !== null) m.return = s;
      else
        for (m = s; m !== null; ) {
          if (m === l) {
            m = null;
            break;
          }
          if (s = m.sibling, s !== null) {
            s.return = m.return, m = s;
            break;
          }
          m = m.return;
        }
      s = m;
    }
  }
  function Yl(l, n, u, c) {
    l = null;
    for (var s = n, r = !1; s !== null; ) {
      if (!r) {
        if ((s.flags & 524288) !== 0) r = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var m = s.alternate;
        if (m === null) throw Error(H(387));
        if (m = m.memoizedProps, m !== null) {
          var g = s.type;
          la(s.pendingProps.value, m.value) || (l !== null ? l.push(g) : l = [g]);
        }
      } else if (s === Et.current) {
        if (m = s.alternate, m === null) throw Error(H(387));
        m.memoizedState.memoizedState !== s.memoizedState.memoizedState && (l !== null ? l.push(zr) : l = [zr]);
      }
      s = s.return;
    }
    l !== null && Su(
      n,
      l,
      u,
      c
    ), n.flags |= 262144;
  }
  function xc(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!la(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function Nt(l) {
    ni = l, wn = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function K(l) {
    return Hs(ni, l);
  }
  function ui(l, n) {
    return ni === null && Nt(l), Hs(l, n);
  }
  function Hs(l, n) {
    var u = n._currentValue;
    if (n = { context: n, memoizedValue: u, next: null }, wn === null) {
      if (l === null) throw Error(H(308));
      wn = n, l.dependencies = { lanes: 0, firstContext: n }, l.flags |= 524288;
    } else wn = wn.next = n;
    return u;
  }
  var cl = typeof AbortController < "u" ? AbortController : function() {
    var l = [], n = this.signal = {
      aborted: !1,
      addEventListener: function(u, c) {
        l.push(c);
      }
    };
    this.abort = function() {
      n.aborted = !0, l.forEach(function(u) {
        return u();
      });
    };
  }, ty = W.unstable_scheduleCallback, ey = W.unstable_NormalPriority, dl = {
    $$typeof: Be,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Ns() {
    return {
      controller: new cl(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Bs(l) {
    l.refCount--, l.refCount === 0 && ty(ey, function() {
      l.controller.abort();
    });
  }
  var Gc = null, Ys = 0, Qi = 0, gl = null;
  function Te(l, n) {
    if (Gc === null) {
      var u = Gc = [];
      Ys = 0, Qi = Th(), gl = {
        status: "pending",
        value: void 0,
        then: function(c) {
          u.push(c);
        }
      };
    }
    return Ys++, n.then(js, js), n;
  }
  function js() {
    if (--Ys === 0 && Gc !== null) {
      gl !== null && (gl.status = "fulfilled");
      var l = Gc;
      Gc = null, Qi = 0, gl = null;
      for (var n = 0; n < l.length; n++) (0, l[n])();
    }
  }
  function qs(l, n) {
    var u = [], c = {
      status: "pending",
      value: null,
      reason: null,
      then: function(s) {
        u.push(s);
      }
    };
    return l.then(
      function() {
        c.status = "fulfilled", c.value = n;
        for (var s = 0; s < u.length; s++) (0, u[s])(n);
      },
      function(s) {
        for (c.status = "rejected", c.reason = s, s = 0; s < u.length; s++)
          (0, u[s])(void 0);
      }
    ), c;
  }
  var ii = D.S;
  D.S = function(l, n) {
    $y = vl(), typeof n == "object" && n !== null && typeof n.then == "function" && Te(l, n), ii !== null && ii(l, n);
  };
  var Ka = S(null);
  function $a() {
    var l = Ka.current;
    return l !== null ? l : Ce.pooledCache;
  }
  function Fo(l, n) {
    n === null ? F(Ka, Ka.current) : F(Ka, n.pool);
  }
  function wc() {
    var l = $a();
    return l === null ? null : { parent: dl._currentValue, pool: l };
  }
  var Li = Error(H(460)), Xc = Error(H(474)), Io = Error(H(542)), Qc = { then: function() {
  } };
  function ly(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function ay(l, n, u) {
    switch (u = l[u], u === void 0 ? l.push(n) : u !== n && (n.then(Un, Un), n = u), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw l = n.reason, Cd(l), l;
      default:
        if (typeof n.status == "string") n.then(Un, Un);
        else {
          if (l = Ce, l !== null && 100 < l.shellSuspendCounter)
            throw Error(H(482));
          l = n, l.status = "pending", l.then(
            function(c) {
              if (n.status === "pending") {
                var s = n;
                s.status = "fulfilled", s.value = c;
              }
            },
            function(c) {
              if (n.status === "pending") {
                var s = n;
                s.status = "rejected", s.reason = c;
              }
            }
          );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw l = n.reason, Cd(l), l;
        }
        throw Zi = n, Li;
    }
  }
  function Vi(l) {
    try {
      var n = l._init;
      return n(l._payload);
    } catch (u) {
      throw u !== null && typeof u == "object" && typeof u.then == "function" ? (Zi = u, Li) : u;
    }
  }
  var Zi = null;
  function ny() {
    if (Zi === null) throw Error(H(459));
    var l = Zi;
    return Zi = null, l;
  }
  function Cd(l) {
    if (l === Li || l === Io)
      throw Error(H(483));
  }
  var Ji = null, Lc = 0;
  function xs(l) {
    var n = Lc;
    return Lc += 1, Ji === null && (Ji = []), ay(Ji, l, n);
  }
  function Po(l, n) {
    n = n.props.ref, l.ref = n !== void 0 ? n : null;
  }
  function Gs(l, n) {
    throw n.$$typeof === U ? Error(H(525)) : (l = Object.prototype.toString.call(n), Error(
      H(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : l
      )
    ));
  }
  function Xp(l) {
    function n(C, _) {
      if (l) {
        var N = C.deletions;
        N === null ? (C.deletions = [_], C.flags |= 16) : N.push(_);
      }
    }
    function u(C, _) {
      if (!l) return null;
      for (; _ !== null; )
        n(C, _), _ = _.sibling;
      return null;
    }
    function c(C) {
      for (var _ = /* @__PURE__ */ new Map(); C !== null; )
        C.key !== null ? _.set(C.key, C) : _.set(C.index, C), C = C.sibling;
      return _;
    }
    function s(C, _) {
      return C = li(C, _), C.index = 0, C.sibling = null, C;
    }
    function r(C, _, N) {
      return C.index = N, l ? (N = C.alternate, N !== null ? (N = N.index, N < _ ? (C.flags |= 67108866, _) : N) : (C.flags |= 67108866, _)) : (C.flags |= 1048576, _);
    }
    function m(C) {
      return l && C.alternate === null && (C.flags |= 67108866), C;
    }
    function g(C, _, N, Z) {
      return _ === null || _.tag !== 6 ? (_ = Ko(N, C.mode, Z), _.return = C, _) : (_ = s(_, N), _.return = C, _);
    }
    function A(C, _, N, Z) {
      var St = N.type;
      return St === De ? Q(
        C,
        _,
        N.props.children,
        Z,
        N.key
      ) : _ !== null && (_.elementType === St || typeof St == "object" && St !== null && St.$$typeof === Zt && Vi(St) === _.type) ? (_ = s(_, N.props), Po(_, N), _.return = C, _) : (_ = zd(
        N.type,
        N.key,
        N.props,
        null,
        C.mode,
        Z
      ), Po(_, N), _.return = C, _);
    }
    function Y(C, _, N, Z) {
      return _ === null || _.tag !== 4 || _.stateNode.containerInfo !== N.containerInfo || _.stateNode.implementation !== N.implementation ? (_ = _d(N, C.mode, Z), _.return = C, _) : (_ = s(_, N.children || []), _.return = C, _);
    }
    function Q(C, _, N, Z, St) {
      return _ === null || _.tag !== 7 ? (_ = ai(
        N,
        C.mode,
        Z,
        St
      ), _.return = C, _) : (_ = s(_, N), _.return = C, _);
    }
    function J(C, _, N) {
      if (typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint")
        return _ = Ko(
          "" + _,
          C.mode,
          N
        ), _.return = C, _;
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case it:
            return N = zd(
              _.type,
              _.key,
              _.props,
              null,
              C.mode,
              N
            ), Po(N, _), N.return = C, N;
          case Vt:
            return _ = _d(
              _,
              C.mode,
              N
            ), _.return = C, _;
          case Zt:
            return _ = Vi(_), J(C, _, N);
        }
        if (je(_) || yt(_))
          return _ = ai(
            _,
            C.mode,
            N,
            null
          ), _.return = C, _;
        if (typeof _.then == "function")
          return J(C, xs(_), N);
        if (_.$$typeof === Be)
          return J(
            C,
            ui(C, _),
            N
          );
        Gs(C, _);
      }
      return null;
    }
    function j(C, _, N, Z) {
      var St = _ !== null ? _.key : null;
      if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint")
        return St !== null ? null : g(C, _, "" + N, Z);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case it:
            return N.key === St ? A(C, _, N, Z) : null;
          case Vt:
            return N.key === St ? Y(C, _, N, Z) : null;
          case Zt:
            return N = Vi(N), j(C, _, N, Z);
        }
        if (je(N) || yt(N))
          return St !== null ? null : Q(C, _, N, Z, null);
        if (typeof N.then == "function")
          return j(
            C,
            _,
            xs(N),
            Z
          );
        if (N.$$typeof === Be)
          return j(
            C,
            _,
            ui(C, N),
            Z
          );
        Gs(C, N);
      }
      return null;
    }
    function w(C, _, N, Z, St) {
      if (typeof Z == "string" && Z !== "" || typeof Z == "number" || typeof Z == "bigint")
        return C = C.get(N) || null, g(_, C, "" + Z, St);
      if (typeof Z == "object" && Z !== null) {
        switch (Z.$$typeof) {
          case it:
            return C = C.get(
              Z.key === null ? N : Z.key
            ) || null, A(_, C, Z, St);
          case Vt:
            return C = C.get(
              Z.key === null ? N : Z.key
            ) || null, Y(_, C, Z, St);
          case Zt:
            return Z = Vi(Z), w(
              C,
              _,
              N,
              Z,
              St
            );
        }
        if (je(Z) || yt(Z))
          return C = C.get(N) || null, Q(_, C, Z, St, null);
        if (typeof Z.then == "function")
          return w(
            C,
            _,
            N,
            xs(Z),
            St
          );
        if (Z.$$typeof === Be)
          return w(
            C,
            _,
            N,
            ui(_, Z),
            St
          );
        Gs(_, Z);
      }
      return null;
    }
    function ft(C, _, N, Z) {
      for (var St = null, re = null, mt = _, Xt = _ = 0, Kt = null; mt !== null && Xt < N.length; Xt++) {
        mt.index > Xt ? (Kt = mt, mt = null) : Kt = mt.sibling;
        var pe = j(
          C,
          mt,
          N[Xt],
          Z
        );
        if (pe === null) {
          mt === null && (mt = Kt);
          break;
        }
        l && mt && pe.alternate === null && n(C, mt), _ = r(pe, _, Xt), re === null ? St = pe : re.sibling = pe, re = pe, mt = Kt;
      }
      if (Xt === N.length)
        return u(C, mt), ne && Sn(C, Xt), St;
      if (mt === null) {
        for (; Xt < N.length; Xt++)
          mt = J(C, N[Xt], Z), mt !== null && (_ = r(
            mt,
            _,
            Xt
          ), re === null ? St = mt : re.sibling = mt, re = mt);
        return ne && Sn(C, Xt), St;
      }
      for (mt = c(mt); Xt < N.length; Xt++)
        Kt = w(
          mt,
          C,
          Xt,
          N[Xt],
          Z
        ), Kt !== null && (l && Kt.alternate !== null && mt.delete(
          Kt.key === null ? Xt : Kt.key
        ), _ = r(
          Kt,
          _,
          Xt
        ), re === null ? St = Kt : re.sibling = Kt, re = Kt);
      return l && mt.forEach(function(Pn) {
        return n(C, Pn);
      }), ne && Sn(C, Xt), St;
    }
    function Ot(C, _, N, Z) {
      if (N == null) throw Error(H(151));
      for (var St = null, re = null, mt = _, Xt = _ = 0, Kt = null, pe = N.next(); mt !== null && !pe.done; Xt++, pe = N.next()) {
        mt.index > Xt ? (Kt = mt, mt = null) : Kt = mt.sibling;
        var Pn = j(C, mt, pe.value, Z);
        if (Pn === null) {
          mt === null && (mt = Kt);
          break;
        }
        l && mt && Pn.alternate === null && n(C, mt), _ = r(Pn, _, Xt), re === null ? St = Pn : re.sibling = Pn, re = Pn, mt = Kt;
      }
      if (pe.done)
        return u(C, mt), ne && Sn(C, Xt), St;
      if (mt === null) {
        for (; !pe.done; Xt++, pe = N.next())
          pe = J(C, pe.value, Z), pe !== null && (_ = r(pe, _, Xt), re === null ? St = pe : re.sibling = pe, re = pe);
        return ne && Sn(C, Xt), St;
      }
      for (mt = c(mt); !pe.done; Xt++, pe = N.next())
        pe = w(mt, C, Xt, pe.value, Z), pe !== null && (l && pe.alternate !== null && mt.delete(pe.key === null ? Xt : pe.key), _ = r(pe, _, Xt), re === null ? St = pe : re.sibling = pe, re = pe);
      return l && mt.forEach(function(Zv) {
        return n(C, Zv);
      }), ne && Sn(C, Xt), St;
    }
    function He(C, _, N, Z) {
      if (typeof N == "object" && N !== null && N.type === De && N.key === null && (N = N.props.children), typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case it:
            t: {
              for (var St = N.key; _ !== null; ) {
                if (_.key === St) {
                  if (St = N.type, St === De) {
                    if (_.tag === 7) {
                      u(
                        C,
                        _.sibling
                      ), Z = s(
                        _,
                        N.props.children
                      ), Z.return = C, C = Z;
                      break t;
                    }
                  } else if (_.elementType === St || typeof St == "object" && St !== null && St.$$typeof === Zt && Vi(St) === _.type) {
                    u(
                      C,
                      _.sibling
                    ), Z = s(_, N.props), Po(Z, N), Z.return = C, C = Z;
                    break t;
                  }
                  u(C, _);
                  break;
                } else n(C, _);
                _ = _.sibling;
              }
              N.type === De ? (Z = ai(
                N.props.children,
                C.mode,
                Z,
                N.key
              ), Z.return = C, C = Z) : (Z = zd(
                N.type,
                N.key,
                N.props,
                null,
                C.mode,
                Z
              ), Po(Z, N), Z.return = C, C = Z);
            }
            return m(C);
          case Vt:
            t: {
              for (St = N.key; _ !== null; ) {
                if (_.key === St)
                  if (_.tag === 4 && _.stateNode.containerInfo === N.containerInfo && _.stateNode.implementation === N.implementation) {
                    u(
                      C,
                      _.sibling
                    ), Z = s(_, N.children || []), Z.return = C, C = Z;
                    break t;
                  } else {
                    u(C, _);
                    break;
                  }
                else n(C, _);
                _ = _.sibling;
              }
              Z = _d(N, C.mode, Z), Z.return = C, C = Z;
            }
            return m(C);
          case Zt:
            return N = Vi(N), He(
              C,
              _,
              N,
              Z
            );
        }
        if (je(N))
          return ft(
            C,
            _,
            N,
            Z
          );
        if (yt(N)) {
          if (St = yt(N), typeof St != "function") throw Error(H(150));
          return N = St.call(N), Ot(
            C,
            _,
            N,
            Z
          );
        }
        if (typeof N.then == "function")
          return He(
            C,
            _,
            xs(N),
            Z
          );
        if (N.$$typeof === Be)
          return He(
            C,
            _,
            ui(C, N),
            Z
          );
        Gs(C, N);
      }
      return typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint" ? (N = "" + N, _ !== null && _.tag === 6 ? (u(C, _.sibling), Z = s(_, N), Z.return = C, C = Z) : (u(C, _), Z = Ko(N, C.mode, Z), Z.return = C, C = Z), m(C)) : u(C, _);
    }
    return function(C, _, N, Z) {
      try {
        Lc = 0;
        var St = He(
          C,
          _,
          N,
          Z
        );
        return Ji = null, St;
      } catch (mt) {
        if (mt === Li || mt === Io) throw mt;
        var re = il(29, mt, null, C.mode);
        return re.lanes = Z, re.return = C, re;
      }
    };
  }
  var Ki = Xp(!0), uy = Xp(!1), ci = !1;
  function ws(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Ud(l, n) {
    l = l.updateQueue, n.updateQueue === l && (n.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function oi(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function ka(l, n, u) {
    var c = l.updateQueue;
    if (c === null) return null;
    if (c = c.shared, (ye & 2) !== 0) {
      var s = c.pending;
      return s === null ? n.next = n : (n.next = s.next, s.next = n), c.pending = n, n = Rs(l), Od(l, null, u), n;
    }
    return Va(l, c, n, u), Rs(l);
  }
  function $i(l, n, u) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (u & 4194048) !== 0)) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, cu(l, u);
    }
  }
  function Hd(l, n) {
    var u = l.updateQueue, c = l.alternate;
    if (c !== null && (c = c.updateQueue, u === c)) {
      var s = null, r = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var m = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          r === null ? s = r = m : r = r.next = m, u = u.next;
        } while (u !== null);
        r === null ? s = r = n : r = r.next = n;
      } else s = r = n;
      u = {
        baseState: c.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: r,
        shared: c.shared,
        callbacks: c.callbacks
      }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = n : l.next = n, u.lastBaseUpdate = n;
  }
  var iy = !1;
  function ki() {
    if (iy) {
      var l = gl;
      if (l !== null) throw l;
    }
  }
  function bu(l, n, u, c) {
    iy = !1;
    var s = l.updateQueue;
    ci = !1;
    var r = s.firstBaseUpdate, m = s.lastBaseUpdate, g = s.shared.pending;
    if (g !== null) {
      s.shared.pending = null;
      var A = g, Y = A.next;
      A.next = null, m === null ? r = Y : m.next = Y, m = A;
      var Q = l.alternate;
      Q !== null && (Q = Q.updateQueue, g = Q.lastBaseUpdate, g !== m && (g === null ? Q.firstBaseUpdate = Y : g.next = Y, Q.lastBaseUpdate = A));
    }
    if (r !== null) {
      var J = s.baseState;
      m = 0, Q = Y = A = null, g = r;
      do {
        var j = g.lane & -536870913, w = j !== g.lane;
        if (w ? (te & j) === j : (c & j) === j) {
          j !== 0 && j === Qi && (iy = !0), Q !== null && (Q = Q.next = {
            lane: 0,
            tag: g.tag,
            payload: g.payload,
            callback: null,
            next: null
          });
          t: {
            var ft = l, Ot = g;
            j = n;
            var He = u;
            switch (Ot.tag) {
              case 1:
                if (ft = Ot.payload, typeof ft == "function") {
                  J = ft.call(He, J, j);
                  break t;
                }
                J = ft;
                break t;
              case 3:
                ft.flags = ft.flags & -65537 | 128;
              case 0:
                if (ft = Ot.payload, j = typeof ft == "function" ? ft.call(He, J, j) : ft, j == null) break t;
                J = X({}, J, j);
                break t;
              case 2:
                ci = !0;
            }
          }
          j = g.callback, j !== null && (l.flags |= 64, w && (l.flags |= 8192), w = s.callbacks, w === null ? s.callbacks = [j] : w.push(j));
        } else
          w = {
            lane: j,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null
          }, Q === null ? (Y = Q = w, A = J) : Q = Q.next = w, m |= j;
        if (g = g.next, g === null) {
          if (g = s.shared.pending, g === null)
            break;
          w = g, g = w.next, w.next = null, s.lastBaseUpdate = w, s.shared.pending = null;
        }
      } while (!0);
      Q === null && (A = J), s.baseState = A, s.firstBaseUpdate = Y, s.lastBaseUpdate = Q, r === null && (s.shared.lanes = 0), $n |= m, l.lanes = m, l.memoizedState = J;
    }
  }
  function Nd(l, n) {
    if (typeof l != "function")
      throw Error(H(191, l));
    l.call(n);
  }
  function Wi(l, n) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        Nd(u[l], n);
  }
  var zl = S(null), Vc = S(0);
  function Qp(l, n) {
    l = Kn, F(Vc, l), F(zl, n), Kn = l | n.baseLanes;
  }
  function Xs() {
    F(Vc, Kn), F(zl, zl.current);
  }
  function tf() {
    Kn = Vc.current, B(zl), B(Vc);
  }
  var ya = S(null), Wa = null;
  function Eu(l) {
    var n = l.alternate;
    F($e, $e.current & 1), F(ya, l), Wa === null && (n === null || zl.current !== null || n.memoizedState !== null) && (Wa = l);
  }
  function ef(l) {
    F($e, $e.current), F(ya, l), Wa === null && (Wa = l);
  }
  function Bd(l) {
    l.tag === 22 ? (F($e, $e.current), F(ya, l), Wa === null && (Wa = l)) : Qn();
  }
  function Qn() {
    F($e, $e.current), F(ya, ya.current);
  }
  function pa(l) {
    B(ya), Wa === l && (Wa = null), B($e);
  }
  var $e = S(0);
  function lf(l) {
    for (var n = l; n !== null; ) {
      if (n.tag === 13) {
        var u = n.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || On(u) || oc(u)))
          return n;
      } else if (n.tag === 19 && (n.memoizedProps.revealOrder === "forwards" || n.memoizedProps.revealOrder === "backwards" || n.memoizedProps.revealOrder === "unstable_legacy-backwards" || n.memoizedProps.revealOrder === "together")) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === l) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === l) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  var Tu = 0, Qt = null, Ae = null, hl = null, Zc = !1, Jc = !1, fi = !1, Qs = 0, af = 0, Fi = null, Lp = 0;
  function el() {
    throw Error(H(321));
  }
  function si(l, n) {
    if (n === null) return !1;
    for (var u = 0; u < n.length && u < l.length; u++)
      if (!la(l[u], n[u])) return !1;
    return !0;
  }
  function Ls(l, n, u, c, s, r) {
    return Tu = r, Qt = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, D.H = l === null || l.memoizedState === null ? Fp : Fd, fi = !1, r = u(c, s), fi = !1, Jc && (r = Vp(
      n,
      u,
      c,
      s
    )), Yd(l), r;
  }
  function Yd(l) {
    D.H = Is;
    var n = Ae !== null && Ae.next !== null;
    if (Tu = 0, hl = Ae = Qt = null, Zc = !1, af = 0, Fi = null, n) throw Error(H(300));
    l === null || ml || (l = l.dependencies, l !== null && xc(l) && (ml = !0));
  }
  function Vp(l, n, u, c) {
    Qt = l;
    var s = 0;
    do {
      if (Jc && (Fi = null), af = 0, Jc = !1, 25 <= s) throw Error(H(301));
      if (s += 1, hl = Ae = null, l.updateQueue != null) {
        var r = l.updateQueue;
        r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
      }
      D.H = Ip, r = n(u, c);
    } while (Jc);
    return r;
  }
  function tS() {
    var l = D.H, n = l.useState()[0];
    return n = typeof n.then == "function" ? $c(n) : n, l = l.useState()[0], (Ae !== null ? Ae.memoizedState : null) !== l && (Qt.flags |= 1024), n;
  }
  function jd() {
    var l = Qs !== 0;
    return Qs = 0, l;
  }
  function Kc(l, n, u) {
    n.updateQueue = l.updateQueue, n.flags &= -2053, l.lanes &= ~u;
  }
  function Vs(l) {
    if (Zc) {
      for (l = l.memoizedState; l !== null; ) {
        var n = l.queue;
        n !== null && (n.pending = null), l = l.next;
      }
      Zc = !1;
    }
    Tu = 0, hl = Ae = Qt = null, Jc = !1, af = Qs = 0, Fi = null;
  }
  function jl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return hl === null ? Qt.memoizedState = hl = l : hl = hl.next = l, hl;
  }
  function ol() {
    if (Ae === null) {
      var l = Qt.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = Ae.next;
    var n = hl === null ? Qt.memoizedState : hl.next;
    if (n !== null)
      hl = n, Ae = l;
    else {
      if (l === null)
        throw Qt.alternate === null ? Error(H(467)) : Error(H(310));
      Ae = l, l = {
        memoizedState: Ae.memoizedState,
        baseState: Ae.baseState,
        baseQueue: Ae.baseQueue,
        queue: Ae.queue,
        next: null
      }, hl === null ? Qt.memoizedState = hl = l : hl = hl.next = l;
    }
    return hl;
  }
  function Zs() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function $c(l) {
    var n = af;
    return af += 1, Fi === null && (Fi = []), l = ay(Fi, l, n), n = Qt, (hl === null ? n.memoizedState : hl.next) === null && (n = n.alternate, D.H = n === null || n.memoizedState === null ? Fp : Fd), l;
  }
  function nf(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return $c(l);
      if (l.$$typeof === Be) return K(l);
    }
    throw Error(H(438, String(l)));
  }
  function qd(l) {
    var n = null, u = Qt.updateQueue;
    if (u !== null && (n = u.memoCache), n == null) {
      var c = Qt.alternate;
      c !== null && (c = c.updateQueue, c !== null && (c = c.memoCache, c != null && (n = {
        data: c.data.map(function(s) {
          return s.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), u === null && (u = Zs(), Qt.updateQueue = u), u.memoCache = n, u = n.data[n.index], u === void 0)
      for (u = n.data[n.index] = Array(l), c = 0; c < l; c++)
        u[c] = st;
    return n.index++, u;
  }
  function Au(l, n) {
    return typeof n == "function" ? n(l) : n;
  }
  function Ou(l) {
    var n = ol();
    return xd(n, Ae, l);
  }
  function xd(l, n, u) {
    var c = l.queue;
    if (c === null) throw Error(H(311));
    c.lastRenderedReducer = u;
    var s = l.baseQueue, r = c.pending;
    if (r !== null) {
      if (s !== null) {
        var m = s.next;
        s.next = r.next, r.next = m;
      }
      n.baseQueue = s = r, c.pending = null;
    }
    if (r = l.baseState, s === null) l.memoizedState = r;
    else {
      n = s.next;
      var g = m = null, A = null, Y = n, Q = !1;
      do {
        var J = Y.lane & -536870913;
        if (J !== Y.lane ? (te & J) === J : (Tu & J) === J) {
          var j = Y.revertLane;
          if (j === 0)
            A !== null && (A = A.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: Y.action,
              hasEagerState: Y.hasEagerState,
              eagerState: Y.eagerState,
              next: null
            }), J === Qi && (Q = !0);
          else if ((Tu & j) === j) {
            Y = Y.next, j === Qi && (Q = !0);
            continue;
          } else
            J = {
              lane: 0,
              revertLane: Y.revertLane,
              gesture: null,
              action: Y.action,
              hasEagerState: Y.hasEagerState,
              eagerState: Y.eagerState,
              next: null
            }, A === null ? (g = A = J, m = r) : A = A.next = J, Qt.lanes |= j, $n |= j;
          J = Y.action, fi && u(r, J), r = Y.hasEagerState ? Y.eagerState : u(r, J);
        } else
          j = {
            lane: J,
            revertLane: Y.revertLane,
            gesture: Y.gesture,
            action: Y.action,
            hasEagerState: Y.hasEagerState,
            eagerState: Y.eagerState,
            next: null
          }, A === null ? (g = A = j, m = r) : A = A.next = j, Qt.lanes |= J, $n |= J;
        Y = Y.next;
      } while (Y !== null && Y !== n);
      if (A === null ? m = r : A.next = g, !la(r, l.memoizedState) && (ml = !0, Q && (u = gl, u !== null)))
        throw u;
      l.memoizedState = r, l.baseState = m, l.baseQueue = A, c.lastRenderedState = r;
    }
    return s === null && (c.lanes = 0), [l.memoizedState, c.dispatch];
  }
  function Gd(l) {
    var n = ol(), u = n.queue;
    if (u === null) throw Error(H(311));
    u.lastRenderedReducer = l;
    var c = u.dispatch, s = u.pending, r = n.memoizedState;
    if (s !== null) {
      u.pending = null;
      var m = s = s.next;
      do
        r = l(r, m.action), m = m.next;
      while (m !== s);
      la(r, n.memoizedState) || (ml = !0), n.memoizedState = r, n.baseQueue === null && (n.baseState = r), u.lastRenderedState = r;
    }
    return [r, c];
  }
  function cy(l, n, u) {
    var c = Qt, s = ol(), r = ne;
    if (r) {
      if (u === void 0) throw Error(H(407));
      u = u();
    } else u = n();
    var m = !la(
      (Ae || s).memoizedState,
      u
    );
    if (m && (s.memoizedState = u, ml = !0), s = s.queue, Vd(wd.bind(null, c, s, l), [
      l
    ]), s.getSnapshot !== n || m || hl !== null && hl.memoizedState.tag & 1) {
      if (c.flags |= 2048, Wc(
        9,
        { destroy: void 0 },
        oy.bind(
          null,
          c,
          s,
          u,
          n
        ),
        null
      ), Ce === null) throw Error(H(349));
      r || (Tu & 127) !== 0 || Js(c, n, u);
    }
    return u;
  }
  function Js(l, n, u) {
    l.flags |= 16384, l = { getSnapshot: n, value: u }, n = Qt.updateQueue, n === null ? (n = Zs(), Qt.updateQueue = n, n.stores = [l]) : (u = n.stores, u === null ? n.stores = [l] : u.push(l));
  }
  function oy(l, n, u, c) {
    n.value = u, n.getSnapshot = c, Xd(n) && Qd(l);
  }
  function wd(l, n, u) {
    return u(function() {
      Xd(n) && Qd(l);
    });
  }
  function Xd(l) {
    var n = l.getSnapshot;
    l = l.value;
    try {
      var u = n();
      return !la(l, u);
    } catch {
      return !0;
    }
  }
  function Qd(l) {
    var n = ei(l, 2);
    n !== null && Ta(n, l, 2);
  }
  function fy(l) {
    var n = jl();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), fi) {
        Ga(!0);
        try {
          u();
        } finally {
          Ga(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = l, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Au,
      lastRenderedState: l
    }, n;
  }
  function ql(l, n, u, c) {
    return l.baseState = u, xd(
      l,
      Ae,
      typeof c == "function" ? c : Au
    );
  }
  function Zp(l, n, u, c, s) {
    if (Fs(l)) throw Error(H(485));
    if (l = n.action, l !== null) {
      var r = {
        payload: s,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(m) {
          r.listeners.push(m);
        }
      };
      D.T !== null ? u(!0) : r.isTransition = !1, c(r), u = n.pending, u === null ? (r.next = n.pending = r, sy(n, r)) : (r.next = u.next, n.pending = u.next = r);
    }
  }
  function sy(l, n) {
    var u = n.action, c = n.payload, s = l.state;
    if (n.isTransition) {
      var r = D.T, m = {};
      D.T = m;
      try {
        var g = u(s, c), A = D.S;
        A !== null && A(m, g), ry(l, n, g);
      } catch (Y) {
        kc(l, n, Y);
      } finally {
        r !== null && m.types !== null && (r.types = m.types), D.T = r;
      }
    } else
      try {
        r = u(s, c), ry(l, n, r);
      } catch (Y) {
        kc(l, n, Y);
      }
  }
  function ry(l, n, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(c) {
        dy(l, n, c);
      },
      function(c) {
        return kc(l, n, c);
      }
    ) : dy(l, n, u);
  }
  function dy(l, n, u) {
    n.status = "fulfilled", n.value = u, hy(n), l.state = u, n = l.pending, n !== null && (u = n.next, u === n ? l.pending = null : (u = u.next, n.next = u, sy(l, u)));
  }
  function kc(l, n, u) {
    var c = l.pending;
    if (l.pending = null, c !== null) {
      c = c.next;
      do
        n.status = "rejected", n.reason = u, hy(n), n = n.next;
      while (n !== c);
    }
    l.action = null;
  }
  function hy(l) {
    l = l.listeners;
    for (var n = 0; n < l.length; n++) (0, l[n])();
  }
  function Ks(l, n) {
    return n;
  }
  function my(l, n) {
    if (ne) {
      var u = Ce.formState;
      if (u !== null) {
        t: {
          var c = Qt;
          if (ne) {
            if (qe) {
              e: {
                for (var s = qe, r = Ol; s.nodeType !== 8; ) {
                  if (!r) {
                    s = null;
                    break e;
                  }
                  if (s = Aa(
                    s.nextSibling
                  ), s === null) {
                    s = null;
                    break e;
                  }
                }
                r = s.data, s = r === "F!" || r === "F" ? s : null;
              }
              if (s) {
                qe = Aa(
                  s.nextSibling
                ), c = s.data === "F!";
                break t;
              }
            }
            bn(c);
          }
          c = !1;
        }
        c && (n = u[0]);
      }
    }
    return u = jl(), u.memoizedState = u.baseState = n, c = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ks,
      lastRenderedState: n
    }, u.queue = c, u = kd.bind(
      null,
      Qt,
      c
    ), c.dispatch = u, c = fy(!1), r = Ii.bind(
      null,
      Qt,
      !1,
      c.queue
    ), c = jl(), s = {
      state: n,
      dispatch: null,
      action: l,
      pending: null
    }, c.queue = s, u = Zp.bind(
      null,
      Qt,
      s,
      r,
      u
    ), s.dispatch = u, c.memoizedState = l, [n, u, !1];
  }
  function Jp(l) {
    var n = ol();
    return $s(n, Ae, l);
  }
  function $s(l, n, u) {
    if (n = xd(
      l,
      n,
      Ks
    )[0], l = Ou(Au)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var c = $c(n);
      } catch (m) {
        throw m === Li ? Io : m;
      }
    else c = n;
    n = ol();
    var s = n.queue, r = s.dispatch;
    return u !== n.memoizedState && (Qt.flags |= 2048, Wc(
      9,
      { destroy: void 0 },
      yy.bind(null, s, u),
      null
    )), [c, r, l];
  }
  function yy(l, n) {
    l.action = n;
  }
  function py(l) {
    var n = ol(), u = Ae;
    if (u !== null)
      return $s(n, u, l);
    ol(), n = n.memoizedState, u = ol();
    var c = u.queue.dispatch;
    return u.memoizedState = l, [n, c, !1];
  }
  function Wc(l, n, u, c) {
    return l = { tag: l, create: u, deps: c, inst: n, next: null }, n = Qt.updateQueue, n === null && (n = Zs(), Qt.updateQueue = n), u = n.lastEffect, u === null ? n.lastEffect = l.next = l : (c = u.next, u.next = l, l.next = c, n.lastEffect = l), l;
  }
  function vy() {
    return ol().memoizedState;
  }
  function uf(l, n, u, c) {
    var s = jl();
    Qt.flags |= l, s.memoizedState = Wc(
      1 | n,
      { destroy: void 0 },
      u,
      c === void 0 ? null : c
    );
  }
  function cf(l, n, u, c) {
    var s = ol();
    c = c === void 0 ? null : c;
    var r = s.memoizedState.inst;
    Ae !== null && c !== null && si(c, Ae.memoizedState.deps) ? s.memoizedState = Wc(n, r, u, c) : (Qt.flags |= l, s.memoizedState = Wc(
      1 | n,
      r,
      u,
      c
    ));
  }
  function Ld(l, n) {
    uf(8390656, 8, l, n);
  }
  function Vd(l, n) {
    cf(2048, 8, l, n);
  }
  function gy(l) {
    Qt.flags |= 4;
    var n = Qt.updateQueue;
    if (n === null)
      n = Zs(), Qt.updateQueue = n, n.events = [l];
    else {
      var u = n.events;
      u === null ? n.events = [l] : u.push(l);
    }
  }
  function ks(l) {
    var n = ol().memoizedState;
    return gy({ ref: n, nextImpl: l }), function() {
      if ((ye & 2) !== 0) throw Error(H(440));
      return n.impl.apply(void 0, arguments);
    };
  }
  function Zd(l, n) {
    return cf(4, 2, l, n);
  }
  function Sy(l, n) {
    return cf(4, 4, l, n);
  }
  function Jd(l, n) {
    if (typeof n == "function") {
      l = l();
      var u = n(l);
      return function() {
        typeof u == "function" ? u() : n(null);
      };
    }
    if (n != null)
      return l = l(), n.current = l, function() {
        n.current = null;
      };
  }
  function by(l, n, u) {
    u = u != null ? u.concat([l]) : null, cf(4, 4, Jd.bind(null, n, l), u);
  }
  function Ln() {
  }
  function Kd(l, n) {
    var u = ol();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    return n !== null && si(n, c[1]) ? c[0] : (u.memoizedState = [l, n], l);
  }
  function Kp(l, n) {
    var u = ol();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    if (n !== null && si(n, c[1]))
      return c[0];
    if (c = l(), fi) {
      Ga(!0);
      try {
        l();
      } finally {
        Ga(!1);
      }
    }
    return u.memoizedState = [c, n], c;
  }
  function Ws(l, n, u) {
    return u === void 0 || (Tu & 1073741824) !== 0 && (te & 261930) === 0 ? l.memoizedState = n : (l.memoizedState = u, l = ov(), Qt.lanes |= l, $n |= l, u);
  }
  function zu(l, n, u, c) {
    return la(u, n) ? u : zl.current !== null ? (l = Ws(l, u, c), la(l, n) || (ml = !0), l) : (Tu & 42) === 0 || (Tu & 1073741824) !== 0 && (te & 261930) === 0 ? (ml = !0, l.memoizedState = u) : (l = ov(), Qt.lanes |= l, $n |= l, n);
  }
  function $d(l, n, u, c, s) {
    var r = L.p;
    L.p = r !== 0 && 8 > r ? r : 8;
    var m = D.T, g = {};
    D.T = g, Ii(l, !1, n, u);
    try {
      var A = s(), Y = D.S;
      if (Y !== null && Y(g, A), A !== null && typeof A == "object" && typeof A.then == "function") {
        var Q = qs(
          A,
          c
        );
        ri(
          l,
          n,
          Q,
          Ua(l)
        );
      } else
        ri(
          l,
          n,
          c,
          Ua(l)
        );
    } catch (J) {
      ri(
        l,
        n,
        { then: function() {
        }, status: "rejected", reason: J },
        Ua()
      );
    } finally {
      L.p = r, m !== null && g.types !== null && (m.types = g.types), D.T = m;
    }
  }
  function $p() {
  }
  function of(l, n, u, c) {
    if (l.tag !== 5) throw Error(H(476));
    var s = ff(l).queue;
    $d(
      l,
      s,
      n,
      P,
      u === null ? $p : function() {
        return Me(l), u(c);
      }
    );
  }
  function ff(l) {
    var n = l.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: P,
      baseState: P,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Au,
        lastRenderedState: P
      },
      next: null
    };
    var u = {};
    return n.next = {
      memoizedState: u,
      baseState: u,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Au,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = n, l = l.alternate, l !== null && (l.memoizedState = n), n;
  }
  function Me(l) {
    var n = ff(l);
    n.next === null && (n = l.alternate.memoizedState), ri(
      l,
      n.next.queue,
      {},
      Ua()
    );
  }
  function Ey() {
    return K(zr);
  }
  function kp() {
    return ol().memoizedState;
  }
  function Ty() {
    return ol().memoizedState;
  }
  function _u(l) {
    for (var n = l.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var u = Ua();
          l = oi(u);
          var c = ka(n, l, u);
          c !== null && (Ta(c, n, u), $i(c, n, u)), n = { cache: Ns() }, l.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function Wp(l, n, u) {
    var c = Ua();
    u = {
      lane: c,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Fs(l) ? Wd(n, u) : (u = gn(l, n, u, c), u !== null && (Ta(u, l, c), Ay(u, n, c)));
  }
  function kd(l, n, u) {
    var c = Ua();
    ri(l, n, u, c);
  }
  function ri(l, n, u, c) {
    var s = {
      lane: c,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Fs(l)) Wd(n, s);
    else {
      var r = l.alternate;
      if (l.lanes === 0 && (r === null || r.lanes === 0) && (r = n.lastRenderedReducer, r !== null))
        try {
          var m = n.lastRenderedState, g = r(m, u);
          if (s.hasEagerState = !0, s.eagerState = g, la(g, m))
            return Va(l, n, s, 0), Ce === null && La(), !1;
        } catch {
        }
      if (u = gn(l, n, s, c), u !== null)
        return Ta(u, l, c), Ay(u, n, c), !0;
    }
    return !1;
  }
  function Ii(l, n, u, c) {
    if (c = {
      lane: 2,
      revertLane: Th(),
      gesture: null,
      action: c,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Fs(l)) {
      if (n) throw Error(H(479));
    } else
      n = gn(
        l,
        u,
        c,
        2
      ), n !== null && Ta(n, l, 2);
  }
  function Fs(l) {
    var n = l.alternate;
    return l === Qt || n !== null && n === Qt;
  }
  function Wd(l, n) {
    Jc = Zc = !0;
    var u = l.pending;
    u === null ? n.next = n : (n.next = u.next, u.next = n), l.pending = n;
  }
  function Ay(l, n, u) {
    if ((u & 4194048) !== 0) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, cu(l, u);
    }
  }
  var Is = {
    readContext: K,
    use: nf,
    useCallback: el,
    useContext: el,
    useEffect: el,
    useImperativeHandle: el,
    useLayoutEffect: el,
    useInsertionEffect: el,
    useMemo: el,
    useReducer: el,
    useRef: el,
    useState: el,
    useDebugValue: el,
    useDeferredValue: el,
    useTransition: el,
    useSyncExternalStore: el,
    useId: el,
    useHostTransitionStatus: el,
    useFormState: el,
    useActionState: el,
    useOptimistic: el,
    useMemoCache: el,
    useCacheRefresh: el
  };
  Is.useEffectEvent = el;
  var Fp = {
    readContext: K,
    use: nf,
    useCallback: function(l, n) {
      return jl().memoizedState = [
        l,
        n === void 0 ? null : n
      ], l;
    },
    useContext: K,
    useEffect: Ld,
    useImperativeHandle: function(l, n, u) {
      u = u != null ? u.concat([l]) : null, uf(
        4194308,
        4,
        Jd.bind(null, n, l),
        u
      );
    },
    useLayoutEffect: function(l, n) {
      return uf(4194308, 4, l, n);
    },
    useInsertionEffect: function(l, n) {
      uf(4, 2, l, n);
    },
    useMemo: function(l, n) {
      var u = jl();
      n = n === void 0 ? null : n;
      var c = l();
      if (fi) {
        Ga(!0);
        try {
          l();
        } finally {
          Ga(!1);
        }
      }
      return u.memoizedState = [c, n], c;
    },
    useReducer: function(l, n, u) {
      var c = jl();
      if (u !== void 0) {
        var s = u(n);
        if (fi) {
          Ga(!0);
          try {
            u(n);
          } finally {
            Ga(!1);
          }
        }
      } else s = n;
      return c.memoizedState = c.baseState = s, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: s
      }, c.queue = l, l = l.dispatch = Wp.bind(
        null,
        Qt,
        l
      ), [c.memoizedState, l];
    },
    useRef: function(l) {
      var n = jl();
      return l = { current: l }, n.memoizedState = l;
    },
    useState: function(l) {
      l = fy(l);
      var n = l.queue, u = kd.bind(null, Qt, n);
      return n.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: Ln,
    useDeferredValue: function(l, n) {
      var u = jl();
      return Ws(u, l, n);
    },
    useTransition: function() {
      var l = fy(!1);
      return l = $d.bind(
        null,
        Qt,
        l.queue,
        !0,
        !1
      ), jl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, n, u) {
      var c = Qt, s = jl();
      if (ne) {
        if (u === void 0)
          throw Error(H(407));
        u = u();
      } else {
        if (u = n(), Ce === null)
          throw Error(H(349));
        (te & 127) !== 0 || Js(c, n, u);
      }
      s.memoizedState = u;
      var r = { value: u, getSnapshot: n };
      return s.queue = r, Ld(wd.bind(null, c, r, l), [
        l
      ]), c.flags |= 2048, Wc(
        9,
        { destroy: void 0 },
        oy.bind(
          null,
          c,
          r,
          u,
          n
        ),
        null
      ), u;
    },
    useId: function() {
      var l = jl(), n = Ce.identifierPrefix;
      if (ne) {
        var u = Gn, c = Da;
        u = (c & ~(1 << 32 - Ul(c) - 1)).toString(32) + u, n = "_" + n + "R_" + u, u = Qs++, 0 < u && (n += "H" + u.toString(32)), n += "_";
      } else
        u = Lp++, n = "_" + n + "r_" + u.toString(32) + "_";
      return l.memoizedState = n;
    },
    useHostTransitionStatus: Ey,
    useFormState: my,
    useActionState: my,
    useOptimistic: function(l) {
      var n = jl();
      n.memoizedState = n.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return n.queue = u, n = Ii.bind(
        null,
        Qt,
        !0,
        u
      ), u.dispatch = n, [l, n];
    },
    useMemoCache: qd,
    useCacheRefresh: function() {
      return jl().memoizedState = _u.bind(
        null,
        Qt
      );
    },
    useEffectEvent: function(l) {
      var n = jl(), u = { impl: l };
      return n.memoizedState = u, function() {
        if ((ye & 2) !== 0)
          throw Error(H(440));
        return u.impl.apply(void 0, arguments);
      };
    }
  }, Fd = {
    readContext: K,
    use: nf,
    useCallback: Kd,
    useContext: K,
    useEffect: Vd,
    useImperativeHandle: by,
    useInsertionEffect: Zd,
    useLayoutEffect: Sy,
    useMemo: Kp,
    useReducer: Ou,
    useRef: vy,
    useState: function() {
      return Ou(Au);
    },
    useDebugValue: Ln,
    useDeferredValue: function(l, n) {
      var u = ol();
      return zu(
        u,
        Ae.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = Ou(Au)[0], n = ol().memoizedState;
      return [
        typeof l == "boolean" ? l : $c(l),
        n
      ];
    },
    useSyncExternalStore: cy,
    useId: kp,
    useHostTransitionStatus: Ey,
    useFormState: Jp,
    useActionState: Jp,
    useOptimistic: function(l, n) {
      var u = ol();
      return ql(u, Ae, l, n);
    },
    useMemoCache: qd,
    useCacheRefresh: Ty
  };
  Fd.useEffectEvent = ks;
  var Ip = {
    readContext: K,
    use: nf,
    useCallback: Kd,
    useContext: K,
    useEffect: Vd,
    useImperativeHandle: by,
    useInsertionEffect: Zd,
    useLayoutEffect: Sy,
    useMemo: Kp,
    useReducer: Gd,
    useRef: vy,
    useState: function() {
      return Gd(Au);
    },
    useDebugValue: Ln,
    useDeferredValue: function(l, n) {
      var u = ol();
      return Ae === null ? Ws(u, l, n) : zu(
        u,
        Ae.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = Gd(Au)[0], n = ol().memoizedState;
      return [
        typeof l == "boolean" ? l : $c(l),
        n
      ];
    },
    useSyncExternalStore: cy,
    useId: kp,
    useHostTransitionStatus: Ey,
    useFormState: py,
    useActionState: py,
    useOptimistic: function(l, n) {
      var u = ol();
      return Ae !== null ? ql(u, Ae, l, n) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: qd,
    useCacheRefresh: Ty
  };
  Ip.useEffectEvent = ks;
  function Fc(l, n, u, c) {
    n = l.memoizedState, u = u(c, n), u = u == null ? n : X({}, n, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var En = {
    enqueueSetState: function(l, n, u) {
      l = l._reactInternals;
      var c = Ua(), s = oi(c);
      s.payload = n, u != null && (s.callback = u), n = ka(l, s, c), n !== null && (Ta(n, l, c), $i(n, l, c));
    },
    enqueueReplaceState: function(l, n, u) {
      l = l._reactInternals;
      var c = Ua(), s = oi(c);
      s.tag = 1, s.payload = n, u != null && (s.callback = u), n = ka(l, s, c), n !== null && (Ta(n, l, c), $i(n, l, c));
    },
    enqueueForceUpdate: function(l, n) {
      l = l._reactInternals;
      var u = Ua(), c = oi(u);
      c.tag = 2, n != null && (c.callback = n), n = ka(l, c, u), n !== null && (Ta(n, l, u), $i(n, l, u));
    }
  };
  function Oy(l, n, u, c, s, r, m) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(c, r, m) : n.prototype && n.prototype.isPureReactComponent ? !yn(u, c) || !yn(s, r) : !0;
  }
  function Pp(l, n, u, c) {
    l = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(u, c), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(u, c), n.state !== l && En.enqueueReplaceState(n, n.state, null);
  }
  function Pi(l, n) {
    var u = n;
    if ("ref" in n) {
      u = {};
      for (var c in n)
        c !== "ref" && (u[c] = n[c]);
    }
    if (l = l.defaultProps) {
      u === n && (u = X({}, u));
      for (var s in l)
        u[s] === void 0 && (u[s] = l[s]);
    }
    return u;
  }
  function Id(l) {
    Yc(l);
  }
  function zy(l) {
    console.error(l);
  }
  function Pd(l) {
    Yc(l);
  }
  function sf(l, n) {
    try {
      var u = l.onUncaughtError;
      u(n.value, { componentStack: n.stack });
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  function Ps(l, n, u) {
    try {
      var c = l.onCaughtError;
      c(u.value, {
        componentStack: u.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null
      });
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  function _y(l, n, u) {
    return u = oi(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      sf(l, n);
    }, u;
  }
  function Dy(l) {
    return l = oi(l), l.tag = 3, l;
  }
  function Ry(l, n, u, c) {
    var s = u.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var r = c.value;
      l.payload = function() {
        return s(r);
      }, l.callback = function() {
        Ps(n, u, c);
      };
    }
    var m = u.stateNode;
    m !== null && typeof m.componentDidCatch == "function" && (l.callback = function() {
      Ps(n, u, c), typeof s != "function" && (ke === null ? ke = /* @__PURE__ */ new Set([this]) : ke.add(this));
      var g = c.stack;
      this.componentDidCatch(c.value, {
        componentStack: g !== null ? g : ""
      });
    });
  }
  function eS(l, n, u, c, s) {
    if (u.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
      if (n = u.alternate, n !== null && Yl(
        n,
        u,
        s,
        !0
      ), u = ya.current, u !== null) {
        switch (u.tag) {
          case 31:
          case 13:
            return Wa === null ? gh() : u.alternate === null && Ge === 0 && (Ge = 3), u.flags &= -257, u.flags |= 65536, u.lanes = s, c === Qc ? u.flags |= 16384 : (n = u.updateQueue, n === null ? u.updateQueue = /* @__PURE__ */ new Set([c]) : n.add(c), hr(l, c, s)), !1;
          case 22:
            return u.flags |= 65536, c === Qc ? u.flags |= 16384 : (n = u.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([c])
            }, u.updateQueue = n) : (u = n.retryQueue, u === null ? n.retryQueue = /* @__PURE__ */ new Set([c]) : u.add(c)), hr(l, c, s)), !1;
        }
        throw Error(H(435, u.tag));
      }
      return hr(l, c, s), gh(), !1;
    }
    if (ne)
      return n = ya.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = s, c !== vu && (l = Error(H(422), { cause: c }), Wo(Za(l, u)))) : (c !== vu && (n = Error(H(423), {
        cause: c
      }), Wo(
        Za(n, u)
      )), l = l.current.alternate, l.flags |= 65536, s &= -s, l.lanes |= s, c = Za(c, u), s = _y(
        l.stateNode,
        c,
        s
      ), Hd(l, s), Ge !== 4 && (Ge = 2)), !1;
    var r = Error(H(520), { cause: c });
    if (r = Za(r, u), fr === null ? fr = [r] : fr.push(r), Ge !== 4 && (Ge = 2), n === null) return !0;
    c = Za(c, u), u = n;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = s & -s, u.lanes |= l, l = _y(u.stateNode, c, l), Hd(u, l), !1;
        case 1:
          if (n = u.type, r = u.stateNode, (u.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (ke === null || !ke.has(r))))
            return u.flags |= 65536, s &= -s, u.lanes |= s, s = Dy(s), Ry(
              s,
              l,
              u,
              c
            ), Hd(u, s), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var th = Error(H(461)), ml = !1;
  function Ve(l, n, u, c) {
    n.child = l === null ? uy(n, null, u, c) : Ki(
      n,
      l.child,
      u,
      c
    );
  }
  function My(l, n, u, c, s) {
    u = u.render;
    var r = n.ref;
    if ("ref" in c) {
      var m = {};
      for (var g in c)
        g !== "ref" && (m[g] = c[g]);
    } else m = c;
    return Nt(n), c = Ls(
      l,
      n,
      u,
      m,
      r,
      s
    ), g = jd(), l !== null && !ml ? (Kc(l, n, s), Pa(l, n, s)) : (ne && g && $o(n), n.flags |= 1, Ve(l, n, c, s), n.child);
  }
  function Cy(l, n, u, c, s) {
    if (l === null) {
      var r = u.type;
      return typeof r == "function" && !jc(r) && r.defaultProps === void 0 && u.compare === null ? (n.tag = 15, n.type = r, Uy(
        l,
        n,
        r,
        c,
        s
      )) : (l = zd(
        u.type,
        null,
        c,
        n,
        n.mode,
        s
      ), l.ref = n.ref, l.return = n, n.child = l);
    }
    if (r = l.child, !ah(l, s)) {
      var m = r.memoizedProps;
      if (u = u.compare, u = u !== null ? u : yn, u(m, c) && l.ref === n.ref)
        return Pa(l, n, s);
    }
    return n.flags |= 1, l = li(r, c), l.ref = n.ref, l.return = n, n.child = l;
  }
  function Uy(l, n, u, c, s) {
    if (l !== null) {
      var r = l.memoizedProps;
      if (yn(r, c) && l.ref === n.ref)
        if (ml = !1, n.pendingProps = c = r, ah(l, s))
          (l.flags & 131072) !== 0 && (ml = !0);
        else
          return n.lanes = l.lanes, Pa(l, n, s);
    }
    return eh(
      l,
      n,
      u,
      c,
      s
    );
  }
  function tv(l, n, u, c) {
    var s = c.children, r = l !== null ? l.memoizedState : null;
    if (l === null && n.stateNode === null && (n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), c.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (r = r !== null ? r.baseLanes | u : u, l !== null) {
          for (c = n.child = l.child, s = 0; c !== null; )
            s = s | c.lanes | c.childLanes, c = c.sibling;
          c = s & ~r;
        } else c = 0, n.child = null;
        return va(
          l,
          n,
          r,
          u,
          c
        );
      }
      if ((u & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Fo(
          n,
          r !== null ? r.cachePool : null
        ), r !== null ? Qp(n, r) : Xs(), Bd(n);
      else
        return c = n.lanes = 536870912, va(
          l,
          n,
          r !== null ? r.baseLanes | u : u,
          u,
          c
        );
    } else
      r !== null ? (Fo(n, r.cachePool), Qp(n, r), Qn(), n.memoizedState = null) : (l !== null && Fo(n, null), Xs(), Qn());
    return Ve(l, n, s, u), n.child;
  }
  function tc(l, n) {
    return l !== null && l.tag === 22 || n.stateNode !== null || (n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), n.sibling;
  }
  function va(l, n, u, c, s) {
    var r = $a();
    return r = r === null ? null : { parent: dl._currentValue, pool: r }, n.memoizedState = {
      baseLanes: u,
      cachePool: r
    }, l !== null && Fo(n, null), Xs(), Bd(n), l !== null && Yl(l, n, c, !0), n.childLanes = s, null;
  }
  function tr(l, n) {
    return n = ar(
      { mode: n.mode, children: n.children },
      l.mode
    ), n.ref = l.ref, l.child = n, n.return = l, n;
  }
  function ga(l, n, u) {
    return Ki(n, l.child, null, u), l = tr(n, n.pendingProps), l.flags |= 2, pa(n), n.memoizedState = null, l;
  }
  function ev(l, n, u) {
    var c = n.pendingProps, s = (n.flags & 128) !== 0;
    if (n.flags &= -129, l === null) {
      if (ne) {
        if (c.mode === "hidden")
          return l = tr(n, c), n.lanes = 536870912, tc(null, l);
        if (ef(n), (l = qe) ? (l = jv(
          l,
          Ol
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (n.memoizedState = {
          dehydrated: l,
          treeContext: xn !== null ? { id: Da, overflow: Gn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = Wm(l), u.return = n, n.child = u, Bl = n, qe = null)) : l = null, l === null) throw bn(n);
        return n.lanes = 536870912, null;
      }
      return tr(n, c);
    }
    var r = l.memoizedState;
    if (r !== null) {
      var m = r.dehydrated;
      if (ef(n), s)
        if (n.flags & 256)
          n.flags &= -257, n = ga(
            l,
            n,
            u
          );
        else if (n.memoizedState !== null)
          n.child = l.child, n.flags |= 128, n = null;
        else throw Error(H(558));
      else if (ml || Yl(l, n, u, !1), s = (u & l.childLanes) !== 0, ml || s) {
        if (c = Ce, c !== null && (m = wa(c, u), m !== 0 && m !== r.retryLane))
          throw r.retryLane = m, ei(l, m), Ta(c, l, m), th;
        gh(), n = ga(
          l,
          n,
          u
        );
      } else
        l = r.treeContext, qe = Aa(m.nextSibling), Bl = n, ne = !0, pu = null, Ol = !1, l !== null && Cs(n, l), n = tr(n, c), n.flags |= 4096;
      return n;
    }
    return l = li(l.child, {
      mode: c.mode,
      children: c.children
    }), l.ref = n.ref, n.child = l, l.return = n, l;
  }
  function Fa(l, n) {
    var u = n.ref;
    if (u === null)
      l !== null && l.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(H(284));
      (l === null || l.ref !== u) && (n.flags |= 4194816);
    }
  }
  function eh(l, n, u, c, s) {
    return Nt(n), u = Ls(
      l,
      n,
      u,
      c,
      void 0,
      s
    ), c = jd(), l !== null && !ml ? (Kc(l, n, s), Pa(l, n, s)) : (ne && c && $o(n), n.flags |= 1, Ve(l, n, u, s), n.child);
  }
  function ec(l, n, u, c, s, r) {
    return Nt(n), n.updateQueue = null, u = Vp(
      n,
      c,
      u,
      s
    ), Yd(l), c = jd(), l !== null && !ml ? (Kc(l, n, r), Pa(l, n, r)) : (ne && c && $o(n), n.flags |= 1, Ve(l, n, u, r), n.child);
  }
  function Hy(l, n, u, c, s) {
    if (Nt(n), n.stateNode === null) {
      var r = da, m = u.contextType;
      typeof m == "object" && m !== null && (r = K(m)), r = new u(c, r), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = En, n.stateNode = r, r._reactInternals = n, r = n.stateNode, r.props = c, r.state = n.memoizedState, r.refs = {}, ws(n), m = u.contextType, r.context = typeof m == "object" && m !== null ? K(m) : da, r.state = n.memoizedState, m = u.getDerivedStateFromProps, typeof m == "function" && (Fc(
        n,
        u,
        m,
        c
      ), r.state = n.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (m = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), m !== r.state && En.enqueueReplaceState(r, r.state, null), bu(n, c, r, s), ki(), r.state = n.memoizedState), typeof r.componentDidMount == "function" && (n.flags |= 4194308), c = !0;
    } else if (l === null) {
      r = n.stateNode;
      var g = n.memoizedProps, A = Pi(u, g);
      r.props = A;
      var Y = r.context, Q = u.contextType;
      m = da, typeof Q == "object" && Q !== null && (m = K(Q));
      var J = u.getDerivedStateFromProps;
      Q = typeof J == "function" || typeof r.getSnapshotBeforeUpdate == "function", g = n.pendingProps !== g, Q || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (g || Y !== m) && Pp(
        n,
        r,
        c,
        m
      ), ci = !1;
      var j = n.memoizedState;
      r.state = j, bu(n, c, r, s), ki(), Y = n.memoizedState, g || j !== Y || ci ? (typeof J == "function" && (Fc(
        n,
        u,
        J,
        c
      ), Y = n.memoizedState), (A = ci || Oy(
        n,
        u,
        A,
        c,
        j,
        Y,
        m
      )) ? (Q || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = c, n.memoizedState = Y), r.props = c, r.state = Y, r.context = m, c = A) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), c = !1);
    } else {
      r = n.stateNode, Ud(l, n), m = n.memoizedProps, Q = Pi(u, m), r.props = Q, J = n.pendingProps, j = r.context, Y = u.contextType, A = da, typeof Y == "object" && Y !== null && (A = K(Y)), g = u.getDerivedStateFromProps, (Y = typeof g == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (m !== J || j !== A) && Pp(
        n,
        r,
        c,
        A
      ), ci = !1, j = n.memoizedState, r.state = j, bu(n, c, r, s), ki();
      var w = n.memoizedState;
      m !== J || j !== w || ci || l !== null && l.dependencies !== null && xc(l.dependencies) ? (typeof g == "function" && (Fc(
        n,
        u,
        g,
        c
      ), w = n.memoizedState), (Q = ci || Oy(
        n,
        u,
        Q,
        c,
        j,
        w,
        A
      ) || l !== null && l.dependencies !== null && xc(l.dependencies)) ? (Y || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(c, w, A), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(
        c,
        w,
        A
      )), typeof r.componentDidUpdate == "function" && (n.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || m === l.memoizedProps && j === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && j === l.memoizedState || (n.flags |= 1024), n.memoizedProps = c, n.memoizedState = w), r.props = c, r.state = w, r.context = A, c = Q) : (typeof r.componentDidUpdate != "function" || m === l.memoizedProps && j === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && j === l.memoizedState || (n.flags |= 1024), c = !1);
    }
    return r = c, Fa(l, n), c = (n.flags & 128) !== 0, r || c ? (r = n.stateNode, u = c && typeof u.getDerivedStateFromError != "function" ? null : r.render(), n.flags |= 1, l !== null && c ? (n.child = Ki(
      n,
      l.child,
      null,
      s
    ), n.child = Ki(
      n,
      null,
      u,
      s
    )) : Ve(l, n, u, s), n.memoizedState = r.state, l = n.child) : l = Pa(
      l,
      n,
      s
    ), l;
  }
  function Vn(l, n, u, c) {
    return Xi(), n.flags |= 256, Ve(l, n, u, c), n.child;
  }
  var er = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function lr(l) {
    return { baseLanes: l, cachePool: wc() };
  }
  function Ia(l, n, u) {
    return l = l !== null ? l.childLanes & ~u : 0, n && (l |= Ea), l;
  }
  function Ny(l, n, u) {
    var c = n.pendingProps, s = !1, r = (n.flags & 128) !== 0, m;
    if ((m = r) || (m = l !== null && l.memoizedState === null ? !1 : ($e.current & 2) !== 0), m && (s = !0, n.flags &= -129), m = (n.flags & 32) !== 0, n.flags &= -33, l === null) {
      if (ne) {
        if (s ? Eu(n) : Qn(), (l = qe) ? (l = jv(
          l,
          Ol
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (n.memoizedState = {
          dehydrated: l,
          treeContext: xn !== null ? { id: Da, overflow: Gn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = Wm(l), u.return = n, n.child = u, Bl = n, qe = null)) : l = null, l === null) throw bn(n);
        return oc(l) ? n.lanes = 32 : n.lanes = 536870912, null;
      }
      var g = c.children;
      return c = c.fallback, s ? (Qn(), s = n.mode, g = ar(
        { mode: "hidden", children: g },
        s
      ), c = ai(
        c,
        s,
        u,
        null
      ), g.return = n, c.return = n, g.sibling = c, n.child = g, c = n.child, c.memoizedState = lr(u), c.childLanes = Ia(
        l,
        m,
        u
      ), n.memoizedState = er, tc(null, c)) : (Eu(n), lc(n, g));
    }
    var A = l.memoizedState;
    if (A !== null && (g = A.dehydrated, g !== null)) {
      if (r)
        n.flags & 256 ? (Eu(n), n.flags &= -257, n = Ic(
          l,
          n,
          u
        )) : n.memoizedState !== null ? (Qn(), n.child = l.child, n.flags |= 128, n = null) : (Qn(), g = c.fallback, s = n.mode, c = ar(
          { mode: "visible", children: c.children },
          s
        ), g = ai(
          g,
          s,
          u,
          null
        ), g.flags |= 2, c.return = n, g.return = n, c.sibling = g, n.child = c, Ki(
          n,
          l.child,
          null,
          u
        ), c = n.child, c.memoizedState = lr(u), c.childLanes = Ia(
          l,
          m,
          u
        ), n.memoizedState = er, n = tc(null, c));
      else if (Eu(n), oc(g)) {
        if (m = g.nextSibling && g.nextSibling.dataset, m) var Y = m.dgst;
        m = Y, c = Error(H(419)), c.stack = "", c.digest = m, Wo({ value: c, source: null, stack: null }), n = Ic(
          l,
          n,
          u
        );
      } else if (ml || Yl(l, n, u, !1), m = (u & l.childLanes) !== 0, ml || m) {
        if (m = Ce, m !== null && (c = wa(m, u), c !== 0 && c !== A.retryLane))
          throw A.retryLane = c, ei(l, c), Ta(m, l, c), th;
        On(g) || gh(), n = Ic(
          l,
          n,
          u
        );
      } else
        On(g) ? (n.flags |= 192, n.child = l.child, n = null) : (l = A.treeContext, qe = Aa(
          g.nextSibling
        ), Bl = n, ne = !0, pu = null, Ol = !1, l !== null && Cs(n, l), n = lc(
          n,
          c.children
        ), n.flags |= 4096);
      return n;
    }
    return s ? (Qn(), g = c.fallback, s = n.mode, A = l.child, Y = A.sibling, c = li(A, {
      mode: "hidden",
      children: c.children
    }), c.subtreeFlags = A.subtreeFlags & 65011712, Y !== null ? g = li(
      Y,
      g
    ) : (g = ai(
      g,
      s,
      u,
      null
    ), g.flags |= 2), g.return = n, c.return = n, c.sibling = g, n.child = c, tc(null, c), c = n.child, g = l.child.memoizedState, g === null ? g = lr(u) : (s = g.cachePool, s !== null ? (A = dl._currentValue, s = s.parent !== A ? { parent: A, pool: A } : s) : s = wc(), g = {
      baseLanes: g.baseLanes | u,
      cachePool: s
    }), c.memoizedState = g, c.childLanes = Ia(
      l,
      m,
      u
    ), n.memoizedState = er, tc(l.child, c)) : (Eu(n), u = l.child, l = u.sibling, u = li(u, {
      mode: "visible",
      children: c.children
    }), u.return = n, u.sibling = null, l !== null && (m = n.deletions, m === null ? (n.deletions = [l], n.flags |= 16) : m.push(l)), n.child = u, n.memoizedState = null, u);
  }
  function lc(l, n) {
    return n = ar(
      { mode: "visible", children: n },
      l.mode
    ), n.return = l, l.child = n;
  }
  function ar(l, n) {
    return l = il(22, l, null, n), l.lanes = 0, l;
  }
  function Ic(l, n, u) {
    return Ki(n, l.child, null, u), l = lc(
      n,
      n.pendingProps.children
    ), l.flags |= 2, n.memoizedState = null, l;
  }
  function Pc(l, n, u) {
    l.lanes |= n;
    var c = l.alternate;
    c !== null && (c.lanes |= n), Md(l.return, n, u);
  }
  function lh(l, n, u, c, s, r) {
    var m = l.memoizedState;
    m === null ? l.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: c,
      tail: u,
      tailMode: s,
      treeForkCount: r
    } : (m.isBackwards = n, m.rendering = null, m.renderingStartTime = 0, m.last = c, m.tail = u, m.tailMode = s, m.treeForkCount = r);
  }
  function By(l, n, u) {
    var c = n.pendingProps, s = c.revealOrder, r = c.tail;
    c = c.children;
    var m = $e.current, g = (m & 2) !== 0;
    if (g ? (m = m & 1 | 2, n.flags |= 128) : m &= 1, F($e, m), Ve(l, n, c, u), c = ne ? rl : 0, !g && l !== null && (l.flags & 128) !== 0)
      t: for (l = n.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && Pc(l, u, n);
        else if (l.tag === 19)
          Pc(l, u, n);
        else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === n) break t;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === n)
            break t;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    switch (s) {
      case "forwards":
        for (u = n.child, s = null; u !== null; )
          l = u.alternate, l !== null && lf(l) === null && (s = u), u = u.sibling;
        u = s, u === null ? (s = n.child, n.child = null) : (s = u.sibling, u.sibling = null), lh(
          n,
          !1,
          s,
          u,
          r,
          c
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (u = null, s = n.child, n.child = null; s !== null; ) {
          if (l = s.alternate, l !== null && lf(l) === null) {
            n.child = s;
            break;
          }
          l = s.sibling, s.sibling = u, u = s, s = l;
        }
        lh(
          n,
          !0,
          u,
          null,
          r,
          c
        );
        break;
      case "together":
        lh(
          n,
          !1,
          null,
          null,
          void 0,
          c
        );
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function Pa(l, n, u) {
    if (l !== null && (n.dependencies = l.dependencies), $n |= n.lanes, (u & n.childLanes) === 0)
      if (l !== null) {
        if (Yl(
          l,
          n,
          u,
          !1
        ), (u & n.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && n.child !== l.child)
      throw Error(H(153));
    if (n.child !== null) {
      for (l = n.child, u = li(l, l.pendingProps), n.child = u, u.return = n; l.sibling !== null; )
        l = l.sibling, u = u.sibling = li(l, l.pendingProps), u.return = n;
      u.sibling = null;
    }
    return n.child;
  }
  function ah(l, n) {
    return (l.lanes & n) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && xc(l)));
  }
  function nh(l, n, u) {
    switch (n.tag) {
      case 3:
        Le(n, n.stateNode.containerInfo), ma(n, dl, l.memoizedState.cache), Xi();
        break;
      case 27:
      case 5:
        qa(n);
        break;
      case 4:
        Le(n, n.stateNode.containerInfo);
        break;
      case 10:
        ma(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 31:
        if (n.memoizedState !== null)
          return n.flags |= 128, ef(n), null;
        break;
      case 13:
        var c = n.memoizedState;
        if (c !== null)
          return c.dehydrated !== null ? (Eu(n), n.flags |= 128, null) : (u & n.child.childLanes) !== 0 ? Ny(l, n, u) : (Eu(n), l = Pa(
            l,
            n,
            u
          ), l !== null ? l.sibling : null);
        Eu(n);
        break;
      case 19:
        var s = (l.flags & 128) !== 0;
        if (c = (u & n.childLanes) !== 0, c || (Yl(
          l,
          n,
          u,
          !1
        ), c = (u & n.childLanes) !== 0), s) {
          if (c)
            return By(
              l,
              n,
              u
            );
          n.flags |= 128;
        }
        if (s = n.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), F($e, $e.current), c) break;
        return null;
      case 22:
        return n.lanes = 0, tv(
          l,
          n,
          u,
          n.pendingProps
        );
      case 24:
        ma(n, dl, l.memoizedState.cache);
    }
    return Pa(l, n, u);
  }
  function Yy(l, n, u) {
    if (l !== null)
      if (l.memoizedProps !== n.pendingProps)
        ml = !0;
      else {
        if (!ah(l, u) && (n.flags & 128) === 0)
          return ml = !1, nh(
            l,
            n,
            u
          );
        ml = (l.flags & 131072) !== 0;
      }
    else
      ml = !1, ne && (n.flags & 1048576) !== 0 && Im(n, rl, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        t: {
          var c = n.pendingProps;
          if (l = Vi(n.elementType), n.type = l, typeof l == "function")
            jc(l) ? (c = Pi(l, c), n.tag = 1, n = Hy(
              null,
              n,
              l,
              c,
              u
            )) : (n.tag = 0, n = eh(
              null,
              n,
              l,
              c,
              u
            ));
          else {
            if (l != null) {
              var s = l.$$typeof;
              if (s === Je) {
                n.tag = 11, n = My(
                  null,
                  n,
                  l,
                  c,
                  u
                );
                break t;
              } else if (s === zt) {
                n.tag = 14, n = Cy(
                  null,
                  n,
                  l,
                  c,
                  u
                );
                break t;
              }
            }
            throw n = Qe(l) || l, Error(H(306, n, ""));
          }
        }
        return n;
      case 0:
        return eh(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 1:
        return c = n.type, s = Pi(
          c,
          n.pendingProps
        ), Hy(
          l,
          n,
          c,
          s,
          u
        );
      case 3:
        t: {
          if (Le(
            n,
            n.stateNode.containerInfo
          ), l === null) throw Error(H(387));
          c = n.pendingProps;
          var r = n.memoizedState;
          s = r.element, Ud(l, n), bu(n, c, null, u);
          var m = n.memoizedState;
          if (c = m.cache, ma(n, dl, c), c !== r.cache && Su(
            n,
            [dl],
            u,
            !0
          ), ki(), c = m.element, r.isDehydrated)
            if (r = {
              element: c,
              isDehydrated: !1,
              cache: m.cache
            }, n.updateQueue.baseState = r, n.memoizedState = r, n.flags & 256) {
              n = Vn(
                l,
                n,
                c,
                u
              );
              break t;
            } else if (c !== s) {
              s = Za(
                Error(H(424)),
                n
              ), Wo(s), n = Vn(
                l,
                n,
                c,
                u
              );
              break t;
            } else
              for (l = n.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, qe = Aa(l.firstChild), Bl = n, ne = !0, pu = null, Ol = !0, u = uy(
                n,
                null,
                c,
                u
              ), n.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
          else {
            if (Xi(), c === s) {
              n = Pa(
                l,
                n,
                u
              );
              break t;
            }
            Ve(l, n, c, u);
          }
          n = n.child;
        }
        return n;
      case 26:
        return Fa(l, n), l === null ? (u = Hf(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = u : ne || (u = n.type, l = n.pendingProps, c = cc(
          Gt.current
        ).createElement(u), c[Re] = n, c[fa] = l, $l(c, u, l), Ee(c), n.stateNode = c) : n.memoizedState = Hf(
          n.type,
          l.memoizedProps,
          n.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return qa(n), l === null && ne && (c = n.stateNode = Cf(
          n.type,
          n.pendingProps,
          Gt.current
        ), Bl = n, Ol = !0, s = qe, Wn(n.type) ? (Tr = s, qe = Aa(c.firstChild)) : qe = s), Ve(
          l,
          n,
          n.pendingProps.children,
          u
        ), Fa(l, n), l === null && (n.flags |= 4194304), n.child;
      case 5:
        return l === null && ne && ((s = c = qe) && (c = nS(
          c,
          n.type,
          n.pendingProps,
          Ol
        ), c !== null ? (n.stateNode = c, Bl = n, qe = Aa(c.firstChild), Ol = !1, s = !0) : s = !1), s || bn(n)), qa(n), s = n.type, r = n.pendingProps, m = l !== null ? l.memoizedProps : null, c = r.children, Rf(s, r) ? c = null : m !== null && Rf(s, m) && (n.flags |= 32), n.memoizedState !== null && (s = Ls(
          l,
          n,
          tS,
          null,
          null,
          u
        ), zr._currentValue = s), Fa(l, n), Ve(l, n, c, u), n.child;
      case 6:
        return l === null && ne && ((l = u = qe) && (u = kt(
          u,
          n.pendingProps,
          Ol
        ), u !== null ? (n.stateNode = u, Bl = n, qe = null, l = !0) : l = !1), l || bn(n)), null;
      case 13:
        return Ny(l, n, u);
      case 4:
        return Le(
          n,
          n.stateNode.containerInfo
        ), c = n.pendingProps, l === null ? n.child = Ki(
          n,
          null,
          c,
          u
        ) : Ve(l, n, c, u), n.child;
      case 11:
        return My(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 7:
        return Ve(
          l,
          n,
          n.pendingProps,
          u
        ), n.child;
      case 8:
        return Ve(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 12:
        return Ve(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 10:
        return c = n.pendingProps, ma(n, n.type, c.value), Ve(l, n, c.children, u), n.child;
      case 9:
        return s = n.type._context, c = n.pendingProps.children, Nt(n), s = K(s), c = c(s), n.flags |= 1, Ve(l, n, c, u), n.child;
      case 14:
        return Cy(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 15:
        return Uy(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 19:
        return By(l, n, u);
      case 31:
        return ev(l, n, u);
      case 22:
        return tv(
          l,
          n,
          u,
          n.pendingProps
        );
      case 24:
        return Nt(n), c = K(dl), l === null ? (s = $a(), s === null && (s = Ce, r = Ns(), s.pooledCache = r, r.refCount++, r !== null && (s.pooledCacheLanes |= u), s = r), n.memoizedState = { parent: c, cache: s }, ws(n), ma(n, dl, s)) : ((l.lanes & u) !== 0 && (Ud(l, n), bu(n, null, null, u), ki()), s = l.memoizedState, r = n.memoizedState, s.parent !== c ? (s = { parent: c, cache: c }, n.memoizedState = s, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = s), ma(n, dl, c)) : (c = r.cache, ma(n, dl, c), c !== s.cache && Su(
          n,
          [dl],
          u,
          !0
        ))), Ve(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(H(156, n.tag));
  }
  function Du(l) {
    l.flags |= 4;
  }
  function jy(l, n, u, c, s) {
    if ((n = (l.mode & 32) !== 0) && (n = !1), n) {
      if (l.flags |= 16777216, (s & 335544128) === s)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (rv()) l.flags |= 8192;
        else
          throw Zi = Qc, Xc;
    } else l.flags &= -16777217;
  }
  function qy(l, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !Na(n))
      if (rv()) l.flags |= 8192;
      else
        throw Zi = Qc, Xc;
  }
  function aa(l, n) {
    n !== null && (l.flags |= 4), l.flags & 16384 && (n = l.tag !== 22 ? ta() : 536870912, l.lanes |= n, ll |= n);
  }
  function rf(l, n) {
    if (!ne)
      switch (l.tailMode) {
        case "hidden":
          n = l.tail;
          for (var u = null; n !== null; )
            n.alternate !== null && (u = n), n = n.sibling;
          u === null ? l.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = l.tail;
          for (var c = null; u !== null; )
            u.alternate !== null && (c = u), u = u.sibling;
          c === null ? n || l.tail === null ? l.tail = null : l.tail.sibling = null : c.sibling = null;
      }
  }
  function Ut(l) {
    var n = l.alternate !== null && l.alternate.child === l.child, u = 0, c = 0;
    if (n)
      for (var s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, c |= s.subtreeFlags & 65011712, c |= s.flags & 65011712, s.return = l, s = s.sibling;
    else
      for (s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, c |= s.subtreeFlags, c |= s.flags, s.return = l, s = s.sibling;
    return l.subtreeFlags |= c, l.childLanes = u, n;
  }
  function lv(l, n, u) {
    var c = n.pendingProps;
    switch (Dd(n), n.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ut(n), null;
      case 1:
        return Ut(n), null;
      case 3:
        return u = n.stateNode, c = null, l !== null && (c = l.memoizedState.cache), n.memoizedState.cache !== c && (n.flags |= 2048), Xn(dl), he(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (gu(n) ? Du(n) : l === null || l.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, Pm())), Ut(n), null;
      case 26:
        var s = n.type, r = n.memoizedState;
        return l === null ? (Du(n), r !== null ? (Ut(n), qy(n, r)) : (Ut(n), jy(
          n,
          s,
          null,
          c,
          u
        ))) : r ? r !== l.memoizedState ? (Du(n), Ut(n), qy(n, r)) : (Ut(n), n.flags &= -16777217) : (l = l.memoizedProps, l !== c && Du(n), Ut(n), jy(
          n,
          s,
          l,
          c,
          u
        )), null;
      case 27:
        if (ct(n), u = Gt.current, s = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== c && Du(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(H(166));
            return Ut(n), null;
          }
          l = k.current, gu(n) ? Us(n) : (l = Cf(s, c, u), n.stateNode = l, Du(n));
        }
        return Ut(n), null;
      case 5:
        if (ct(n), s = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== c && Du(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(H(166));
            return Ut(n), null;
          }
          if (r = k.current, gu(n))
            Us(n);
          else {
            var m = cc(
              Gt.current
            );
            switch (r) {
              case 1:
                r = m.createElementNS(
                  "http://www.w3.org/2000/svg",
                  s
                );
                break;
              case 2:
                r = m.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  s
                );
                break;
              default:
                switch (s) {
                  case "svg":
                    r = m.createElementNS(
                      "http://www.w3.org/2000/svg",
                      s
                    );
                    break;
                  case "math":
                    r = m.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      s
                    );
                    break;
                  case "script":
                    r = m.createElement("div"), r.innerHTML = "<script><\/script>", r = r.removeChild(
                      r.firstChild
                    );
                    break;
                  case "select":
                    r = typeof c.is == "string" ? m.createElement("select", {
                      is: c.is
                    }) : m.createElement("select"), c.multiple ? r.multiple = !0 : c.size && (r.size = c.size);
                    break;
                  default:
                    r = typeof c.is == "string" ? m.createElement(s, { is: c.is }) : m.createElement(s);
                }
            }
            r[Re] = n, r[fa] = c;
            t: for (m = n.child; m !== null; ) {
              if (m.tag === 5 || m.tag === 6)
                r.appendChild(m.stateNode);
              else if (m.tag !== 4 && m.tag !== 27 && m.child !== null) {
                m.child.return = m, m = m.child;
                continue;
              }
              if (m === n) break t;
              for (; m.sibling === null; ) {
                if (m.return === null || m.return === n)
                  break t;
                m = m.return;
              }
              m.sibling.return = m.return, m = m.sibling;
            }
            n.stateNode = r;
            t: switch ($l(r, s, c), s) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                c = !!c.autoFocus;
                break t;
              case "img":
                c = !0;
                break t;
              default:
                c = !1;
            }
            c && Du(n);
          }
        }
        return Ut(n), jy(
          n,
          n.type,
          l === null ? null : l.memoizedProps,
          n.pendingProps,
          u
        ), null;
      case 6:
        if (l && n.stateNode != null)
          l.memoizedProps !== c && Du(n);
        else {
          if (typeof c != "string" && n.stateNode === null)
            throw Error(H(166));
          if (l = Gt.current, gu(n)) {
            if (l = n.stateNode, u = n.memoizedProps, c = null, s = Bl, s !== null)
              switch (s.tag) {
                case 27:
                case 5:
                  c = s.memoizedProps;
              }
            l[Re] = n, l = !!(l.nodeValue === u || c !== null && c.suppressHydrationWarning === !0 || c0(l.nodeValue, u)), l || bn(n, !0);
          } else
            l = cc(l).createTextNode(
              c
            ), l[Re] = n, n.stateNode = l;
        }
        return Ut(n), null;
      case 31:
        if (u = n.memoizedState, l === null || l.memoizedState !== null) {
          if (c = gu(n), u !== null) {
            if (l === null) {
              if (!c) throw Error(H(318));
              if (l = n.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(H(557));
              l[Re] = n;
            } else
              Xi(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            Ut(n), l = !1;
          } else
            u = Pm(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), l = !0;
          if (!l)
            return n.flags & 256 ? (pa(n), n) : (pa(n), null);
          if ((n.flags & 128) !== 0)
            throw Error(H(558));
        }
        return Ut(n), null;
      case 13:
        if (c = n.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (s = gu(n), c !== null && c.dehydrated !== null) {
            if (l === null) {
              if (!s) throw Error(H(318));
              if (s = n.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(H(317));
              s[Re] = n;
            } else
              Xi(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            Ut(n), s = !1;
          } else
            s = Pm(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = s), s = !0;
          if (!s)
            return n.flags & 256 ? (pa(n), n) : (pa(n), null);
        }
        return pa(n), (n.flags & 128) !== 0 ? (n.lanes = u, n) : (u = c !== null, l = l !== null && l.memoizedState !== null, u && (c = n.child, s = null, c.alternate !== null && c.alternate.memoizedState !== null && c.alternate.memoizedState.cachePool !== null && (s = c.alternate.memoizedState.cachePool.pool), r = null, c.memoizedState !== null && c.memoizedState.cachePool !== null && (r = c.memoizedState.cachePool.pool), r !== s && (c.flags |= 2048)), u !== l && u && (n.child.flags |= 8192), aa(n, n.updateQueue), Ut(n), null);
      case 4:
        return he(), l === null && Df(n.stateNode.containerInfo), Ut(n), null;
      case 10:
        return Xn(n.type), Ut(n), null;
      case 19:
        if (B($e), c = n.memoizedState, c === null) return Ut(n), null;
        if (s = (n.flags & 128) !== 0, r = c.rendering, r === null)
          if (s) rf(c, !1);
          else {
            if (Ge !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = n.child; l !== null; ) {
                if (r = lf(l), r !== null) {
                  for (n.flags |= 128, rf(c, !1), l = r.updateQueue, n.updateQueue = l, aa(n, l), n.subtreeFlags = 0, l = u, u = n.child; u !== null; )
                    km(u, l), u = u.sibling;
                  return F(
                    $e,
                    $e.current & 1 | 2
                  ), ne && Sn(n, c.treeForkCount), n.child;
                }
                l = l.sibling;
              }
            c.tail !== null && vl() > Se && (n.flags |= 128, s = !0, rf(c, !1), n.lanes = 4194304);
          }
        else {
          if (!s)
            if (l = lf(r), l !== null) {
              if (n.flags |= 128, s = !0, l = l.updateQueue, n.updateQueue = l, aa(n, l), rf(c, !0), c.tail === null && c.tailMode === "hidden" && !r.alternate && !ne)
                return Ut(n), null;
            } else
              2 * vl() - c.renderingStartTime > Se && u !== 536870912 && (n.flags |= 128, s = !0, rf(c, !1), n.lanes = 4194304);
          c.isBackwards ? (r.sibling = n.child, n.child = r) : (l = c.last, l !== null ? l.sibling = r : n.child = r, c.last = r);
        }
        return c.tail !== null ? (l = c.tail, c.rendering = l, c.tail = l.sibling, c.renderingStartTime = vl(), l.sibling = null, u = $e.current, F(
          $e,
          s ? u & 1 | 2 : u & 1
        ), ne && Sn(n, c.treeForkCount), l) : (Ut(n), null);
      case 22:
      case 23:
        return pa(n), tf(), c = n.memoizedState !== null, l !== null ? l.memoizedState !== null !== c && (n.flags |= 8192) : c && (n.flags |= 8192), c ? (u & 536870912) !== 0 && (n.flags & 128) === 0 && (Ut(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : Ut(n), u = n.updateQueue, u !== null && aa(n, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), c = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (c = n.memoizedState.cachePool.pool), c !== u && (n.flags |= 2048), l !== null && B(Ka), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), n.memoizedState.cache !== u && (n.flags |= 2048), Xn(dl), Ut(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(H(156, n.tag));
  }
  function av(l, n) {
    switch (Dd(n), n.tag) {
      case 1:
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 3:
        return Xn(dl), he(), l = n.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (n.flags = l & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return ct(n), null;
      case 31:
        if (n.memoizedState !== null) {
          if (pa(n), n.alternate === null)
            throw Error(H(340));
          Xi();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 13:
        if (pa(n), l = n.memoizedState, l !== null && l.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(H(340));
          Xi();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 19:
        return B($e), null;
      case 4:
        return he(), null;
      case 10:
        return Xn(n.type), null;
      case 22:
      case 23:
        return pa(n), tf(), l !== null && B(Ka), l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 24:
        return Xn(dl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function nv(l, n) {
    switch (Dd(n), n.tag) {
      case 3:
        Xn(dl), he();
        break;
      case 26:
      case 27:
      case 5:
        ct(n);
        break;
      case 4:
        he();
        break;
      case 31:
        n.memoizedState !== null && pa(n);
        break;
      case 13:
        pa(n);
        break;
      case 19:
        B($e);
        break;
      case 10:
        Xn(n.type);
        break;
      case 22:
      case 23:
        pa(n), tf(), l !== null && B(Ka);
        break;
      case 24:
        Xn(dl);
    }
  }
  function Tn(l, n) {
    try {
      var u = n.updateQueue, c = u !== null ? u.lastEffect : null;
      if (c !== null) {
        var s = c.next;
        u = s;
        do {
          if ((u.tag & l) === l) {
            c = void 0;
            var r = u.create, m = u.inst;
            c = r(), m.destroy = c;
          }
          u = u.next;
        } while (u !== s);
      }
    } catch (g) {
      ze(n, n.return, g);
    }
  }
  function tn(l, n, u) {
    try {
      var c = n.updateQueue, s = c !== null ? c.lastEffect : null;
      if (s !== null) {
        var r = s.next;
        c = r;
        do {
          if ((c.tag & l) === l) {
            var m = c.inst, g = m.destroy;
            if (g !== void 0) {
              m.destroy = void 0, s = n;
              var A = u, Y = g;
              try {
                Y();
              } catch (Q) {
                ze(
                  s,
                  A,
                  Q
                );
              }
            }
          }
          c = c.next;
        } while (c !== r);
      }
    } catch (Q) {
      ze(n, n.return, Q);
    }
  }
  function uh(l) {
    var n = l.updateQueue;
    if (n !== null) {
      var u = l.stateNode;
      try {
        Wi(n, u);
      } catch (c) {
        ze(l, l.return, c);
      }
    }
  }
  function ac(l, n, u) {
    u.props = Pi(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (c) {
      ze(l, n, c);
    }
  }
  function Ru(l, n) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var c = l.stateNode;
            break;
          case 30:
            c = l.stateNode;
            break;
          default:
            c = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(c) : u.current = c;
      }
    } catch (s) {
      ze(l, n, s);
    }
  }
  function Zn(l, n) {
    var u = l.ref, c = l.refCleanup;
    if (u !== null)
      if (typeof c == "function")
        try {
          c();
        } catch (s) {
          ze(l, n, s);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (s) {
          ze(l, n, s);
        }
      else u.current = null;
  }
  function xy(l) {
    var n = l.type, u = l.memoizedProps, c = l.stateNode;
    try {
      t: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && c.focus();
          break t;
        case "img":
          u.src ? c.src = u.src : u.srcSet && (c.srcset = u.srcSet);
      }
    } catch (s) {
      ze(l, l.return, s);
    }
  }
  function ih(l, n, u) {
    try {
      var c = l.stateNode;
      f0(c, l.type, u, n), c[fa] = n;
    } catch (s) {
      ze(l, l.return, s);
    }
  }
  function Gy(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && Wn(l.type) || l.tag === 4;
  }
  function df(l) {
    t: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || Gy(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && Wn(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue t;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function hf(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, n) : (n = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, n.appendChild(l), u = u._reactRootContainer, u != null || n.onclick !== null || (n.onclick = Un));
    else if (c !== 4 && (c === 27 && Wn(l.type) && (u = l.stateNode, n = null), l = l.child, l !== null))
      for (hf(l, n, u), l = l.sibling; l !== null; )
        hf(l, n, u), l = l.sibling;
  }
  function mf(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? u.insertBefore(l, n) : u.appendChild(l);
    else if (c !== 4 && (c === 27 && Wn(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for (mf(l, n, u), l = l.sibling; l !== null; )
        mf(l, n, u), l = l.sibling;
  }
  function wy(l) {
    var n = l.stateNode, u = l.memoizedProps;
    try {
      for (var c = l.type, s = n.attributes; s.length; )
        n.removeAttributeNode(s[0]);
      $l(n, c, u), n[Re] = l, n[fa] = u;
    } catch (r) {
      ze(l, l.return, r);
    }
  }
  var di = !1, Sl = !1, ch = !1, Xy = typeof WeakSet == "function" ? WeakSet : Set, xl = null;
  function yf(l, n) {
    if (l = l.containerInfo, Dh = Dl, l = xi(l), Os(l)) {
      if ("selectionStart" in l)
        var u = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        t: {
          u = (u = l.ownerDocument) && u.defaultView || window;
          var c = u.getSelection && u.getSelection();
          if (c && c.rangeCount !== 0) {
            u = c.anchorNode;
            var s = c.anchorOffset, r = c.focusNode;
            c = c.focusOffset;
            try {
              u.nodeType, r.nodeType;
            } catch {
              u = null;
              break t;
            }
            var m = 0, g = -1, A = -1, Y = 0, Q = 0, J = l, j = null;
            e: for (; ; ) {
              for (var w; J !== u || s !== 0 && J.nodeType !== 3 || (g = m + s), J !== r || c !== 0 && J.nodeType !== 3 || (A = m + c), J.nodeType === 3 && (m += J.nodeValue.length), (w = J.firstChild) !== null; )
                j = J, J = w;
              for (; ; ) {
                if (J === l) break e;
                if (j === u && ++Y === s && (g = m), j === r && ++Q === c && (A = m), (w = J.nextSibling) !== null) break;
                J = j, j = J.parentNode;
              }
              J = w;
            }
            u = g === -1 || A === -1 ? null : { start: g, end: A };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (Rh = { focusedElem: l, selectionRange: u }, Dl = !1, xl = n; xl !== null; )
      if (n = xl, l = n.child, (n.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = n, xl = l;
      else
        for (; xl !== null; ) {
          switch (n = xl, r = n.alternate, l = n.flags, n.tag) {
            case 0:
              if ((l & 4) !== 0 && (l = n.updateQueue, l = l !== null ? l.events : null, l !== null))
                for (u = 0; u < l.length; u++)
                  s = l[u], s.ref.impl = s.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && r !== null) {
                l = void 0, u = n, s = r.memoizedProps, r = r.memoizedState, c = u.stateNode;
                try {
                  var ft = Pi(
                    u.type,
                    s
                  );
                  l = c.getSnapshotBeforeUpdate(
                    ft,
                    r
                  ), c.__reactInternalSnapshotBeforeUpdate = l;
                } catch (Ot) {
                  ze(
                    u,
                    u.return,
                    Ot
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = n.stateNode.containerInfo, u = l.nodeType, u === 9)
                  Er(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Er(l);
                      break;
                    default:
                      l.textContent = "";
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
              if ((l & 1024) !== 0) throw Error(H(163));
          }
          if (l = n.sibling, l !== null) {
            l.return = n.return, xl = l;
            break;
          }
          xl = n.return;
        }
  }
  function nr(l, n, u) {
    var c = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        hi(l, u), c & 4 && Tn(5, u);
        break;
      case 1:
        if (hi(l, u), c & 4)
          if (l = u.stateNode, n === null)
            try {
              l.componentDidMount();
            } catch (m) {
              ze(u, u.return, m);
            }
          else {
            var s = Pi(
              u.type,
              n.memoizedProps
            );
            n = n.memoizedState;
            try {
              l.componentDidUpdate(
                s,
                n,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (m) {
              ze(
                u,
                u.return,
                m
              );
            }
          }
        c & 64 && uh(u), c & 512 && Ru(u, u.return);
        break;
      case 3:
        if (hi(l, u), c & 64 && (l = u.updateQueue, l !== null)) {
          if (n = null, u.child !== null)
            switch (u.child.tag) {
              case 27:
              case 5:
                n = u.child.stateNode;
                break;
              case 1:
                n = u.child.stateNode;
            }
          try {
            Wi(l, n);
          } catch (m) {
            ze(u, u.return, m);
          }
        }
        break;
      case 27:
        n === null && c & 4 && wy(u);
      case 26:
      case 5:
        hi(l, u), n === null && c & 4 && xy(u), c & 512 && Ru(u, u.return);
        break;
      case 12:
        hi(l, u);
        break;
      case 31:
        hi(l, u), c & 4 && uv(l, u);
        break;
      case 13:
        hi(l, u), c & 4 && Vy(l, u), c & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = en.bind(
          null,
          u
        ), Mf(l, u))));
        break;
      case 22:
        if (c = u.memoizedState !== null || di, !c) {
          n = n !== null && n.memoizedState !== null || Sl, s = di;
          var r = Sl;
          di = c, (Sl = n) && !r ? Jn(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : hi(l, u), di = s, Sl = r;
        }
        break;
      case 30:
        break;
      default:
        hi(l, u);
    }
  }
  function Qy(l) {
    var n = l.alternate;
    n !== null && (l.alternate = null, Qy(n)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (n = l.stateNode, n !== null && ad(n)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var xe = null, Sa = !1;
  function Mu(l, n, u) {
    for (u = u.child; u !== null; )
      Ly(l, n, u), u = u.sibling;
  }
  function Ly(l, n, u) {
    if (Al && typeof Al.onCommitFiberUnmount == "function")
      try {
        Al.onCommitFiberUnmount(rn, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        Sl || Zn(u, n), Mu(
          l,
          n,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        Sl || Zn(u, n);
        var c = xe, s = Sa;
        Wn(u.type) && (xe = u.stateNode, Sa = !1), Mu(
          l,
          n,
          u
        ), co(u.stateNode), xe = c, Sa = s;
        break;
      case 5:
        Sl || Zn(u, n);
      case 6:
        if (c = xe, s = Sa, xe = null, Mu(
          l,
          n,
          u
        ), xe = c, Sa = s, xe !== null)
          if (Sa)
            try {
              (xe.nodeType === 9 ? xe.body : xe.nodeName === "HTML" ? xe.ownerDocument.body : xe).removeChild(u.stateNode);
            } catch (r) {
              ze(
                u,
                n,
                r
              );
            }
          else
            try {
              xe.removeChild(u.stateNode);
            } catch (r) {
              ze(
                u,
                n,
                r
              );
            }
        break;
      case 18:
        xe !== null && (Sa ? (l = xe, h0(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), wf(l)) : h0(xe, u.stateNode));
        break;
      case 4:
        c = xe, s = Sa, xe = u.stateNode.containerInfo, Sa = !0, Mu(
          l,
          n,
          u
        ), xe = c, Sa = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        tn(2, u, n), Sl || tn(4, u, n), Mu(
          l,
          n,
          u
        );
        break;
      case 1:
        Sl || (Zn(u, n), c = u.stateNode, typeof c.componentWillUnmount == "function" && ac(
          u,
          n,
          c
        )), Mu(
          l,
          n,
          u
        );
        break;
      case 21:
        Mu(
          l,
          n,
          u
        );
        break;
      case 22:
        Sl = (c = Sl) || u.memoizedState !== null, Mu(
          l,
          n,
          u
        ), Sl = c;
        break;
      default:
        Mu(
          l,
          n,
          u
        );
    }
  }
  function uv(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        wf(l);
      } catch (u) {
        ze(n, n.return, u);
      }
    }
  }
  function Vy(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        wf(l);
      } catch (u) {
        ze(n, n.return, u);
      }
  }
  function ur(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var n = l.stateNode;
        return n === null && (n = l.stateNode = new Xy()), n;
      case 22:
        return l = l.stateNode, n = l._retryCache, n === null && (n = l._retryCache = new Xy()), n;
      default:
        throw Error(H(435, l.tag));
    }
  }
  function ir(l, n) {
    var u = ur(l);
    n.forEach(function(c) {
      if (!u.has(c)) {
        u.add(c);
        var s = _v.bind(null, l, c);
        c.then(s, s);
      }
    });
  }
  function ba(l, n) {
    var u = n.deletions;
    if (u !== null)
      for (var c = 0; c < u.length; c++) {
        var s = u[c], r = l, m = n, g = m;
        t: for (; g !== null; ) {
          switch (g.tag) {
            case 27:
              if (Wn(g.type)) {
                xe = g.stateNode, Sa = !1;
                break t;
              }
              break;
            case 5:
              xe = g.stateNode, Sa = !1;
              break t;
            case 3:
            case 4:
              xe = g.stateNode.containerInfo, Sa = !0;
              break t;
          }
          g = g.return;
        }
        if (xe === null) throw Error(H(160));
        Ly(r, m, s), xe = null, Sa = !1, r = s.alternate, r !== null && (r.return = null), s.return = null;
      }
    if (n.subtreeFlags & 13886)
      for (n = n.child; n !== null; )
        oh(n, l), n = n.sibling;
  }
  var Jt = null;
  function oh(l, n) {
    var u = l.alternate, c = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ba(n, l), Ra(l), c & 4 && (tn(3, l, l.return), Tn(3, l), tn(5, l, l.return));
        break;
      case 1:
        ba(n, l), Ra(l), c & 512 && (Sl || u === null || Zn(u, u.return)), c & 64 && di && (l = l.updateQueue, l !== null && (c = l.callbacks, c !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? c : u.concat(c))));
        break;
      case 26:
        var s = Jt;
        if (ba(n, l), Ra(l), c & 512 && (Sl || u === null || Zn(u, u.return)), c & 4) {
          var r = u !== null ? u.memoizedState : null;
          if (c = l.memoizedState, u === null)
            if (c === null)
              if (l.stateNode === null) {
                t: {
                  c = l.type, u = l.memoizedProps, s = s.ownerDocument || s;
                  e: switch (c) {
                    case "title":
                      r = s.getElementsByTagName("title")[0], (!r || r[ou] || r[Re] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = s.createElement(c), s.head.insertBefore(
                        r,
                        s.querySelector("head > title")
                      )), $l(r, c, u), r[Re] = l, Ee(r), c = r;
                      break t;
                    case "link":
                      var m = v0(
                        "link",
                        "href",
                        s
                      ).get(c + (u.href || ""));
                      if (m) {
                        for (var g = 0; g < m.length; g++)
                          if (r = m[g], r.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && r.getAttribute("rel") === (u.rel == null ? null : u.rel) && r.getAttribute("title") === (u.title == null ? null : u.title) && r.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                            m.splice(g, 1);
                            break e;
                          }
                      }
                      r = s.createElement(c), $l(r, c, u), s.head.appendChild(r);
                      break;
                    case "meta":
                      if (m = v0(
                        "meta",
                        "content",
                        s
                      ).get(c + (u.content || ""))) {
                        for (g = 0; g < m.length; g++)
                          if (r = m[g], r.getAttribute("content") === (u.content == null ? null : "" + u.content) && r.getAttribute("name") === (u.name == null ? null : u.name) && r.getAttribute("property") === (u.property == null ? null : u.property) && r.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && r.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                            m.splice(g, 1);
                            break e;
                          }
                      }
                      r = s.createElement(c), $l(r, c, u), s.head.appendChild(r);
                      break;
                    default:
                      throw Error(H(468, c));
                  }
                  r[Re] = l, Ee(r), c = r;
                }
                l.stateNode = c;
              } else
                Nh(
                  s,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = p0(
                s,
                c,
                l.memoizedProps
              );
          else
            r !== c ? (r === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : r.count--, c === null ? Nh(
              s,
              l.type,
              l.stateNode
            ) : p0(
              s,
              c,
              l.memoizedProps
            )) : c === null && l.stateNode !== null && ih(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        ba(n, l), Ra(l), c & 512 && (Sl || u === null || Zn(u, u.return)), u !== null && c & 4 && ih(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (ba(n, l), Ra(l), c & 512 && (Sl || u === null || Zn(u, u.return)), l.flags & 32) {
          s = l.stateNode;
          try {
            su(s, "");
          } catch (ft) {
            ze(l, l.return, ft);
          }
        }
        c & 4 && l.stateNode != null && (s = l.memoizedProps, ih(
          l,
          s,
          u !== null ? u.memoizedProps : s
        )), c & 1024 && (ch = !0);
        break;
      case 6:
        if (ba(n, l), Ra(l), c & 4) {
          if (l.stateNode === null)
            throw Error(H(162));
          c = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = c;
          } catch (ft) {
            ze(l, l.return, ft);
          }
        }
        break;
      case 3:
        if (Yf = null, s = Jt, Jt = na(n.containerInfo), ba(n, l), Jt = s, Ra(l), c & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            wf(n.containerInfo);
          } catch (ft) {
            ze(l, l.return, ft);
          }
        ch && (ch = !1, Zy(l));
        break;
      case 4:
        c = Jt, Jt = na(
          l.stateNode.containerInfo
        ), ba(n, l), Ra(l), Jt = c;
        break;
      case 12:
        ba(n, l), Ra(l);
        break;
      case 31:
        ba(n, l), Ra(l), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, ir(l, c)));
        break;
      case 13:
        ba(n, l), Ra(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (kn = vl()), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, ir(l, c)));
        break;
      case 22:
        s = l.memoizedState !== null;
        var A = u !== null && u.memoizedState !== null, Y = di, Q = Sl;
        if (di = Y || s, Sl = Q || A, ba(n, l), Sl = Q, di = Y, Ra(l), c & 8192)
          t: for (n = l.stateNode, n._visibility = s ? n._visibility & -2 : n._visibility | 1, s && (u === null || A || di || Sl || to(l)), u = null, n = l; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (u === null) {
                A = u = n;
                try {
                  if (r = A.stateNode, s)
                    m = r.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none";
                  else {
                    g = A.stateNode;
                    var J = A.memoizedProps.style, j = J != null && J.hasOwnProperty("display") ? J.display : null;
                    g.style.display = j == null || typeof j == "boolean" ? "" : ("" + j).trim();
                  }
                } catch (ft) {
                  ze(A, A.return, ft);
                }
              }
            } else if (n.tag === 6) {
              if (u === null) {
                A = n;
                try {
                  A.stateNode.nodeValue = s ? "" : A.memoizedProps;
                } catch (ft) {
                  ze(A, A.return, ft);
                }
              }
            } else if (n.tag === 18) {
              if (u === null) {
                A = n;
                try {
                  var w = A.stateNode;
                  s ? yl(w, !0) : yl(A.stateNode, !1);
                } catch (ft) {
                  ze(A, A.return, ft);
                }
              }
            } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === l) && n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === l) break t;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === l) break t;
              u === n && (u = null), n = n.return;
            }
            u === n && (u = null), n.sibling.return = n.return, n = n.sibling;
          }
        c & 4 && (c = l.updateQueue, c !== null && (u = c.retryQueue, u !== null && (c.retryQueue = null, ir(l, u))));
        break;
      case 19:
        ba(n, l), Ra(l), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, ir(l, c)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ba(n, l), Ra(l);
    }
  }
  function Ra(l) {
    var n = l.flags;
    if (n & 2) {
      try {
        for (var u, c = l.return; c !== null; ) {
          if (Gy(c)) {
            u = c;
            break;
          }
          c = c.return;
        }
        if (u == null) throw Error(H(160));
        switch (u.tag) {
          case 27:
            var s = u.stateNode, r = df(l);
            mf(l, r, s);
            break;
          case 5:
            var m = u.stateNode;
            u.flags & 32 && (su(m, ""), u.flags &= -33);
            var g = df(l);
            mf(l, g, m);
            break;
          case 3:
          case 4:
            var A = u.stateNode.containerInfo, Y = df(l);
            hf(
              l,
              Y,
              A
            );
            break;
          default:
            throw Error(H(161));
        }
      } catch (Q) {
        ze(l, l.return, Q);
      }
      l.flags &= -3;
    }
    n & 4096 && (l.flags &= -4097);
  }
  function Zy(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var n = l;
        Zy(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), l = l.sibling;
      }
  }
  function hi(l, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        nr(l, n.alternate, n), n = n.sibling;
  }
  function to(l) {
    for (l = l.child; l !== null; ) {
      var n = l;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          tn(4, n, n.return), to(n);
          break;
        case 1:
          Zn(n, n.return);
          var u = n.stateNode;
          typeof u.componentWillUnmount == "function" && ac(
            n,
            n.return,
            u
          ), to(n);
          break;
        case 27:
          co(n.stateNode);
        case 26:
        case 5:
          Zn(n, n.return), to(n);
          break;
        case 22:
          n.memoizedState === null && to(n);
          break;
        case 30:
          to(n);
          break;
        default:
          to(n);
      }
      l = l.sibling;
    }
  }
  function Jn(l, n, u) {
    for (u = u && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var c = n.alternate, s = l, r = n, m = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          Jn(
            s,
            r,
            u
          ), Tn(4, r);
          break;
        case 1:
          if (Jn(
            s,
            r,
            u
          ), c = r, s = c.stateNode, typeof s.componentDidMount == "function")
            try {
              s.componentDidMount();
            } catch (Y) {
              ze(c, c.return, Y);
            }
          if (c = r, s = c.updateQueue, s !== null) {
            var g = c.stateNode;
            try {
              var A = s.shared.hiddenCallbacks;
              if (A !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < A.length; s++)
                  Nd(A[s], g);
            } catch (Y) {
              ze(c, c.return, Y);
            }
          }
          u && m & 64 && uh(r), Ru(r, r.return);
          break;
        case 27:
          wy(r);
        case 26:
        case 5:
          Jn(
            s,
            r,
            u
          ), u && c === null && m & 4 && xy(r), Ru(r, r.return);
          break;
        case 12:
          Jn(
            s,
            r,
            u
          );
          break;
        case 31:
          Jn(
            s,
            r,
            u
          ), u && m & 4 && uv(s, r);
          break;
        case 13:
          Jn(
            s,
            r,
            u
          ), u && m & 4 && Vy(s, r);
          break;
        case 22:
          r.memoizedState === null && Jn(
            s,
            r,
            u
          ), Ru(r, r.return);
          break;
        case 30:
          break;
        default:
          Jn(
            s,
            r,
            u
          );
      }
      n = n.sibling;
    }
  }
  function fh(l, n) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && Bs(u));
  }
  function sh(l, n) {
    l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && Bs(l));
  }
  function An(l, n, u, c) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        pf(
          l,
          n,
          u,
          c
        ), n = n.sibling;
  }
  function pf(l, n, u, c) {
    var s = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        An(
          l,
          n,
          u,
          c
        ), s & 2048 && Tn(9, n);
        break;
      case 1:
        An(
          l,
          n,
          u,
          c
        );
        break;
      case 3:
        An(
          l,
          n,
          u,
          c
        ), s & 2048 && (l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && Bs(l)));
        break;
      case 12:
        if (s & 2048) {
          An(
            l,
            n,
            u,
            c
          ), l = n.stateNode;
          try {
            var r = n.memoizedProps, m = r.id, g = r.onPostCommit;
            typeof g == "function" && g(
              m,
              n.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (A) {
            ze(n, n.return, A);
          }
        } else
          An(
            l,
            n,
            u,
            c
          );
        break;
      case 31:
        An(
          l,
          n,
          u,
          c
        );
        break;
      case 13:
        An(
          l,
          n,
          u,
          c
        );
        break;
      case 23:
        break;
      case 22:
        r = n.stateNode, m = n.alternate, n.memoizedState !== null ? r._visibility & 2 ? An(
          l,
          n,
          u,
          c
        ) : cr(l, n) : r._visibility & 2 ? An(
          l,
          n,
          u,
          c
        ) : (r._visibility |= 2, vf(
          l,
          n,
          u,
          c,
          (n.subtreeFlags & 10256) !== 0 || !1
        )), s & 2048 && fh(m, n);
        break;
      case 24:
        An(
          l,
          n,
          u,
          c
        ), s & 2048 && sh(n.alternate, n);
        break;
      default:
        An(
          l,
          n,
          u,
          c
        );
    }
  }
  function vf(l, n, u, c, s) {
    for (s = s && ((n.subtreeFlags & 10256) !== 0 || !1), n = n.child; n !== null; ) {
      var r = l, m = n, g = u, A = c, Y = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          vf(
            r,
            m,
            g,
            A,
            s
          ), Tn(8, m);
          break;
        case 23:
          break;
        case 22:
          var Q = m.stateNode;
          m.memoizedState !== null ? Q._visibility & 2 ? vf(
            r,
            m,
            g,
            A,
            s
          ) : cr(
            r,
            m
          ) : (Q._visibility |= 2, vf(
            r,
            m,
            g,
            A,
            s
          )), s && Y & 2048 && fh(
            m.alternate,
            m
          );
          break;
        case 24:
          vf(
            r,
            m,
            g,
            A,
            s
          ), s && Y & 2048 && sh(m.alternate, m);
          break;
        default:
          vf(
            r,
            m,
            g,
            A,
            s
          );
      }
      n = n.sibling;
    }
  }
  function cr(l, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var u = l, c = n, s = c.flags;
        switch (c.tag) {
          case 22:
            cr(u, c), s & 2048 && fh(
              c.alternate,
              c
            );
            break;
          case 24:
            cr(u, c), s & 2048 && sh(c.alternate, c);
            break;
          default:
            cr(u, c);
        }
        n = n.sibling;
      }
  }
  var Ma = 8192;
  function Cu(l, n, u) {
    if (l.subtreeFlags & Ma)
      for (l = l.child; l !== null; )
        iv(
          l,
          n,
          u
        ), l = l.sibling;
  }
  function iv(l, n, u) {
    switch (l.tag) {
      case 26:
        Cu(
          l,
          n,
          u
        ), l.flags & Ma && l.memoizedState !== null && Yu(
          u,
          Jt,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        Cu(
          l,
          n,
          u
        );
        break;
      case 3:
      case 4:
        var c = Jt;
        Jt = na(l.stateNode.containerInfo), Cu(
          l,
          n,
          u
        ), Jt = c;
        break;
      case 22:
        l.memoizedState === null && (c = l.alternate, c !== null && c.memoizedState !== null ? (c = Ma, Ma = 16777216, Cu(
          l,
          n,
          u
        ), Ma = c) : Cu(
          l,
          n,
          u
        ));
        break;
      default:
        Cu(
          l,
          n,
          u
        );
    }
  }
  function rh(l) {
    var n = l.alternate;
    if (n !== null && (l = n.child, l !== null)) {
      n.child = null;
      do
        n = l.sibling, l.sibling = null, l = n;
      while (l !== null);
    }
  }
  function gf(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          xl = c, dh(
            c,
            l
          );
        }
      rh(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        Jy(l), l = l.sibling;
  }
  function Jy(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        gf(l), l.flags & 2048 && tn(9, l, l.return);
        break;
      case 3:
        gf(l);
        break;
      case 12:
        gf(l);
        break;
      case 22:
        var n = l.stateNode;
        l.memoizedState !== null && n._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (n._visibility &= -3, or(l)) : gf(l);
        break;
      default:
        gf(l);
    }
  }
  function or(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          xl = c, dh(
            c,
            l
          );
        }
      rh(l);
    }
    for (l = l.child; l !== null; ) {
      switch (n = l, n.tag) {
        case 0:
        case 11:
        case 15:
          tn(8, n, n.return), or(n);
          break;
        case 22:
          u = n.stateNode, u._visibility & 2 && (u._visibility &= -3, or(n));
          break;
        default:
          or(n);
      }
      l = l.sibling;
    }
  }
  function dh(l, n) {
    for (; xl !== null; ) {
      var u = xl;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          tn(8, u, n);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var c = u.memoizedState.cachePool.pool;
            c != null && c.refCount++;
          }
          break;
        case 24:
          Bs(u.memoizedState.cache);
      }
      if (c = u.child, c !== null) c.return = u, xl = c;
      else
        t: for (u = l; xl !== null; ) {
          c = xl;
          var s = c.sibling, r = c.return;
          if (Qy(c), c === u) {
            xl = null;
            break t;
          }
          if (s !== null) {
            s.return = r, xl = s;
            break t;
          }
          xl = r;
        }
    }
  }
  var cv = {
    getCacheForType: function(l) {
      var n = K(dl), u = n.data.get(l);
      return u === void 0 && (u = l(), n.data.set(l, u)), u;
    },
    cacheSignal: function() {
      return K(dl).controller.signal;
    }
  }, Ky = typeof WeakMap == "function" ? WeakMap : Map, ye = 0, Ce = null, ue = null, te = 0, Oe = 0, Mt = null, Uu = !1, nc = !1, hh = !1, Kn = 0, Ge = 0, $n = 0, eo = 0, mh = 0, Ea = 0, ll = 0, fr = null, al = null, yh = !1, kn = 0, $y = 0, Se = 1 / 0, Sf = null, ke = null, _l = 0, mi = null, uc = null, Hu = 0, Ca = 0, ph = null, vh = null, bf = 0, sr = null;
  function Ua() {
    return (ye & 2) !== 0 && te !== 0 ? te & -te : D.T !== null ? Th() : ed();
  }
  function ov() {
    if (Ea === 0)
      if ((te & 536870912) === 0 || ne) {
        var l = et;
        et <<= 1, (et & 3932160) === 0 && (et = 262144), Ea = l;
      } else Ea = 536870912;
    return l = ya.current, l !== null && (l.flags |= 32), Ea;
  }
  function Ta(l, n, u) {
    (l === Ce && (Oe === 2 || Oe === 9) || l.cancelPendingCommit !== null) && (Nu(l, 0), yi(
      l,
      te,
      Ea,
      !1
    )), Ci(l, u), ((ye & 2) === 0 || l !== Ce) && (l === Ce && ((ye & 2) === 0 && (eo |= u), Ge === 4 && yi(
      l,
      te,
      Ea,
      !1
    )), Bu(l));
  }
  function fv(l, n, u) {
    if ((ye & 6) !== 0) throw Error(H(327));
    var c = !u && (n & 127) === 0 && (n & l.expiredLanes) === 0 || Pt(l, n), s = c ? mv(l, n) : Sh(l, n, !0), r = c;
    do {
      if (s === 0) {
        nc && !c && yi(l, n, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, r && !sv(u)) {
          s = Sh(l, n, !1), r = !1;
          continue;
        }
        if (s === 2) {
          if (r = n, l.errorRecoveryDisabledLanes & r)
            var m = 0;
          else
            m = l.pendingLanes & -536870913, m = m !== 0 ? m : m & 536870912 ? 536870912 : 0;
          if (m !== 0) {
            n = m;
            t: {
              var g = l;
              s = fr;
              var A = g.current.memoizedState.isDehydrated;
              if (A && (Nu(g, m).flags |= 256), m = Sh(
                g,
                m,
                !1
              ), m !== 2) {
                if (hh && !A) {
                  g.errorRecoveryDisabledLanes |= r, eo |= r, s = 4;
                  break t;
                }
                r = al, al = s, r !== null && (al === null ? al = r : al.push.apply(
                  al,
                  r
                ));
              }
              s = m;
            }
            if (r = !1, s !== 2) continue;
          }
        }
        if (s === 1) {
          Nu(l, 0), yi(l, n, 0, !0);
          break;
        }
        t: {
          switch (c = l, r = s, r) {
            case 0:
            case 1:
              throw Error(H(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              yi(
                c,
                n,
                Ea,
                !Uu
              );
              break t;
            case 2:
              al = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(H(329));
          }
          if ((n & 62914560) === n && (s = kn + 300 - vl(), 10 < s)) {
            if (yi(
              c,
              n,
              Ea,
              !Uu
            ), ht(c, 0, !0) !== 0) break t;
            Hu = n, c.timeoutHandle = br(
              rr.bind(
                null,
                c,
                u,
                al,
                Sf,
                yh,
                n,
                Ea,
                eo,
                ll,
                Uu,
                r,
                "Throttled",
                -0,
                0
              ),
              s
            );
            break t;
          }
          rr(
            c,
            u,
            al,
            Sf,
            yh,
            n,
            Ea,
            eo,
            ll,
            Uu,
            r,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Bu(l);
  }
  function rr(l, n, u, c, s, r, m, g, A, Y, Q, J, j, w) {
    if (l.timeoutHandle = -1, J = n.subtreeFlags, J & 8192 || (J & 16785408) === 16785408) {
      J = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Un
      }, iv(
        n,
        r,
        J
      );
      var ft = (r & 62914560) === r ? kn - vl() : (r & 4194048) === r ? $y - vl() : 0;
      if (ft = S0(
        J,
        ft
      ), ft !== null) {
        Hu = r, l.cancelPendingCommit = ft(
          gv.bind(
            null,
            l,
            n,
            r,
            u,
            c,
            s,
            m,
            g,
            A,
            Q,
            J,
            null,
            j,
            w
          )
        ), yi(l, r, m, !Y);
        return;
      }
    }
    gv(
      l,
      n,
      r,
      u,
      c,
      s,
      m,
      g,
      A
    );
  }
  function sv(l) {
    for (var n = l; ; ) {
      var u = n.tag;
      if ((u === 0 || u === 11 || u === 15) && n.flags & 16384 && (u = n.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var c = 0; c < u.length; c++) {
          var s = u[c], r = s.getSnapshot;
          s = s.value;
          try {
            if (!la(r(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (u = n.child, n.subtreeFlags & 16384 && u !== null)
        u.return = n, n = u;
      else {
        if (n === l) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === l) return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function yi(l, n, u, c) {
    n &= ~mh, n &= ~eo, l.suspendedLanes |= n, l.pingedLanes &= ~n, c && (l.warmLanes |= n), c = l.expirationTimes;
    for (var s = n; 0 < s; ) {
      var r = 31 - Ul(s), m = 1 << r;
      c[r] = -1, s &= ~m;
    }
    u !== 0 && hs(l, u, n);
  }
  function Ef() {
    return (ye & 6) === 0 ? (vi(0), !1) : !0;
  }
  function ky() {
    if (ue !== null) {
      if (Oe === 0)
        var l = ue.return;
      else
        l = ue, wn = ni = null, Vs(l), Ji = null, Lc = 0, l = ue;
      for (; l !== null; )
        nv(l.alternate, l), l = l.return;
      ue = null;
    }
  }
  function Nu(l, n) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, Bv(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), Hu = 0, ky(), Ce = l, ue = u = li(l.current, null), te = n, Oe = 0, Mt = null, Uu = !1, nc = Pt(l, n), hh = !1, ll = Ea = mh = eo = $n = Ge = 0, al = fr = null, yh = !1, (n & 8) !== 0 && (n |= n & 32);
    var c = l.entangledLanes;
    if (c !== 0)
      for (l = l.entanglements, c &= n; 0 < c; ) {
        var s = 31 - Ul(c), r = 1 << s;
        n |= l[s], c &= ~r;
      }
    return Kn = n, La(), u;
  }
  function Tf(l, n) {
    Qt = null, D.H = Is, n === Li || n === Io ? (n = ny(), Oe = 3) : n === Xc ? (n = ny(), Oe = 4) : Oe = n === th ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, Mt = n, ue === null && (Ge = 1, sf(
      l,
      Za(n, l.current)
    ));
  }
  function rv() {
    var l = ya.current;
    return l === null ? !0 : (te & 4194048) === te ? Wa === null : (te & 62914560) === te || (te & 536870912) !== 0 ? l === Wa : !1;
  }
  function dv() {
    var l = D.H;
    return D.H = Is, l === null ? Is : l;
  }
  function hv() {
    var l = D.A;
    return D.A = cv, l;
  }
  function gh() {
    Ge = 4, Uu || (te & 4194048) !== te && ya.current !== null || (nc = !0), ($n & 134217727) === 0 && (eo & 134217727) === 0 || Ce === null || yi(
      Ce,
      te,
      Ea,
      !1
    );
  }
  function Sh(l, n, u) {
    var c = ye;
    ye |= 2;
    var s = dv(), r = hv();
    (Ce !== l || te !== n) && (Sf = null, Nu(l, n)), n = !1;
    var m = Ge;
    t: do
      try {
        if (Oe !== 0 && ue !== null) {
          var g = ue, A = Mt;
          switch (Oe) {
            case 8:
              ky(), m = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              ya.current === null && (n = !0);
              var Y = Oe;
              if (Oe = 0, Mt = null, lo(l, g, A, Y), u && nc) {
                m = 0;
                break t;
              }
              break;
            default:
              Y = Oe, Oe = 0, Mt = null, lo(l, g, A, Y);
          }
        }
        lS(), m = Ge;
        break;
      } catch (Q) {
        Tf(l, Q);
      }
    while (!0);
    return n && l.shellSuspendCounter++, wn = ni = null, ye = c, D.H = s, D.A = r, ue === null && (Ce = null, te = 0, La()), m;
  }
  function lS() {
    for (; ue !== null; ) yv(ue);
  }
  function mv(l, n) {
    var u = ye;
    ye |= 2;
    var c = dv(), s = hv();
    Ce !== l || te !== n ? (Sf = null, Se = vl() + 500, Nu(l, n)) : nc = Pt(
      l,
      n
    );
    t: do
      try {
        if (Oe !== 0 && ue !== null) {
          n = ue;
          var r = Mt;
          e: switch (Oe) {
            case 1:
              Oe = 0, Mt = null, lo(l, n, r, 1);
              break;
            case 2:
            case 9:
              if (ly(r)) {
                Oe = 0, Mt = null, pv(n);
                break;
              }
              n = function() {
                Oe !== 2 && Oe !== 9 || Ce !== l || (Oe = 7), Bu(l);
              }, r.then(n, n);
              break t;
            case 3:
              Oe = 7;
              break t;
            case 4:
              Oe = 5;
              break t;
            case 7:
              ly(r) ? (Oe = 0, Mt = null, pv(n)) : (Oe = 0, Mt = null, lo(l, n, r, 7));
              break;
            case 5:
              var m = null;
              switch (ue.tag) {
                case 26:
                  m = ue.memoizedState;
                case 5:
                case 27:
                  var g = ue;
                  if (m ? Na(m) : g.stateNode.complete) {
                    Oe = 0, Mt = null;
                    var A = g.sibling;
                    if (A !== null) ue = A;
                    else {
                      var Y = g.return;
                      Y !== null ? (ue = Y, dr(Y)) : ue = null;
                    }
                    break e;
                  }
              }
              Oe = 0, Mt = null, lo(l, n, r, 5);
              break;
            case 6:
              Oe = 0, Mt = null, lo(l, n, r, 6);
              break;
            case 8:
              ky(), Ge = 6;
              break t;
            default:
              throw Error(H(462));
          }
        }
        ic();
        break;
      } catch (Q) {
        Tf(l, Q);
      }
    while (!0);
    return wn = ni = null, D.H = c, D.A = s, ye = u, ue !== null ? 0 : (Ce = null, te = 0, La(), Ge);
  }
  function ic() {
    for (; ue !== null && !iu(); )
      yv(ue);
  }
  function yv(l) {
    var n = Yy(l.alternate, l, Kn);
    l.memoizedProps = l.pendingProps, n === null ? dr(l) : ue = n;
  }
  function pv(l) {
    var n = l, u = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = ec(
          u,
          n,
          n.pendingProps,
          n.type,
          void 0,
          te
        );
        break;
      case 11:
        n = ec(
          u,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          te
        );
        break;
      case 5:
        Vs(n);
      default:
        nv(u, n), n = ue = km(n, Kn), n = Yy(u, n, Kn);
    }
    l.memoizedProps = l.pendingProps, n === null ? dr(l) : ue = n;
  }
  function lo(l, n, u, c) {
    wn = ni = null, Vs(n), Ji = null, Lc = 0;
    var s = n.return;
    try {
      if (eS(
        l,
        s,
        n,
        u,
        te
      )) {
        Ge = 1, sf(
          l,
          Za(u, l.current)
        ), ue = null;
        return;
      }
    } catch (r) {
      if (s !== null) throw ue = s, r;
      Ge = 1, sf(
        l,
        Za(u, l.current)
      ), ue = null;
      return;
    }
    n.flags & 32768 ? (ne || c === 1 ? l = !0 : nc || (te & 536870912) !== 0 ? l = !1 : (Uu = l = !0, (c === 2 || c === 9 || c === 3 || c === 6) && (c = ya.current, c !== null && c.tag === 13 && (c.flags |= 16384))), vv(n, l)) : dr(n);
  }
  function dr(l) {
    var n = l;
    do {
      if ((n.flags & 32768) !== 0) {
        vv(
          n,
          Uu
        );
        return;
      }
      l = n.return;
      var u = lv(
        n.alternate,
        n,
        Kn
      );
      if (u !== null) {
        ue = u;
        return;
      }
      if (n = n.sibling, n !== null) {
        ue = n;
        return;
      }
      ue = n = l;
    } while (n !== null);
    Ge === 0 && (Ge = 5);
  }
  function vv(l, n) {
    do {
      var u = av(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, ue = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !n && (l = l.sibling, l !== null)) {
        ue = l;
        return;
      }
      ue = l = u;
    } while (l !== null);
    Ge = 6, ue = null;
  }
  function gv(l, n, u, c, s, r, m, g, A) {
    l.cancelPendingCommit = null;
    do
      Af();
    while (_l !== 0);
    if ((ye & 6) !== 0) throw Error(H(327));
    if (n !== null) {
      if (n === l.current) throw Error(H(177));
      if (r = n.lanes | n.childLanes, r |= vn, Ho(
        l,
        u,
        r,
        m,
        g,
        A
      ), l === Ce && (ue = Ce = null, te = 0), uc = n, mi = l, Hu = u, Ca = r, ph = s, vh = c, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, Dv(Mn, function() {
        return Av(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), c = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || c) {
        c = D.T, D.T = null, s = L.p, L.p = 2, m = ye, ye |= 4;
        try {
          yf(l, n, u);
        } finally {
          ye = m, L.p = s, D.T = c;
        }
      }
      _l = 1, Sv(), bv(), Ev();
    }
  }
  function Sv() {
    if (_l === 1) {
      _l = 0;
      var l = mi, n = uc, u = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || u) {
        u = D.T, D.T = null;
        var c = L.p;
        L.p = 2;
        var s = ye;
        ye |= 4;
        try {
          oh(n, l);
          var r = Rh, m = xi(l.containerInfo), g = r.focusedElem, A = r.selectionRange;
          if (m !== g && g && g.ownerDocument && Nc(
            g.ownerDocument.documentElement,
            g
          )) {
            if (A !== null && Os(g)) {
              var Y = A.start, Q = A.end;
              if (Q === void 0 && (Q = Y), "selectionStart" in g)
                g.selectionStart = Y, g.selectionEnd = Math.min(
                  Q,
                  g.value.length
                );
              else {
                var J = g.ownerDocument || document, j = J && J.defaultView || window;
                if (j.getSelection) {
                  var w = j.getSelection(), ft = g.textContent.length, Ot = Math.min(A.start, ft), He = A.end === void 0 ? Ot : Math.min(A.end, ft);
                  !w.extend && Ot > He && (m = He, He = Ot, Ot = m);
                  var C = Km(
                    g,
                    Ot
                  ), _ = Km(
                    g,
                    He
                  );
                  if (C && _ && (w.rangeCount !== 1 || w.anchorNode !== C.node || w.anchorOffset !== C.offset || w.focusNode !== _.node || w.focusOffset !== _.offset)) {
                    var N = J.createRange();
                    N.setStart(C.node, C.offset), w.removeAllRanges(), Ot > He ? (w.addRange(N), w.extend(_.node, _.offset)) : (N.setEnd(_.node, _.offset), w.addRange(N));
                  }
                }
              }
            }
            for (J = [], w = g; w = w.parentNode; )
              w.nodeType === 1 && J.push({
                element: w,
                left: w.scrollLeft,
                top: w.scrollTop
              });
            for (typeof g.focus == "function" && g.focus(), g = 0; g < J.length; g++) {
              var Z = J[g];
              Z.element.scrollLeft = Z.left, Z.element.scrollTop = Z.top;
            }
          }
          Dl = !!Dh, Rh = Dh = null;
        } finally {
          ye = s, L.p = c, D.T = u;
        }
      }
      l.current = n, _l = 2;
    }
  }
  function bv() {
    if (_l === 2) {
      _l = 0;
      var l = mi, n = uc, u = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || u) {
        u = D.T, D.T = null;
        var c = L.p;
        L.p = 2;
        var s = ye;
        ye |= 4;
        try {
          nr(l, n.alternate, n);
        } finally {
          ye = s, L.p = c, D.T = u;
        }
      }
      _l = 3;
    }
  }
  function Ev() {
    if (_l === 4 || _l === 3) {
      _l = 0, gc();
      var l = mi, n = uc, u = Hu, c = vh;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? _l = 5 : (_l = 0, uc = mi = null, Tv(l, l.pendingLanes));
      var s = l.pendingLanes;
      if (s === 0 && (ke = null), Em(u), n = n.stateNode, Al && typeof Al.onCommitFiberRoot == "function")
        try {
          Al.onCommitFiberRoot(
            rn,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (c !== null) {
        n = D.T, s = L.p, L.p = 2, D.T = null;
        try {
          for (var r = l.onRecoverableError, m = 0; m < c.length; m++) {
            var g = c[m];
            r(g.value, {
              componentStack: g.stack
            });
          }
        } finally {
          D.T = n, L.p = s;
        }
      }
      (Hu & 3) !== 0 && Af(), Bu(l), s = l.pendingLanes, (u & 261930) !== 0 && (s & 42) !== 0 ? l === sr ? bf++ : (bf = 0, sr = l) : bf = 0, vi(0);
    }
  }
  function Tv(l, n) {
    (l.pooledCacheLanes &= n) === 0 && (n = l.pooledCache, n != null && (l.pooledCache = null, Bs(n)));
  }
  function Af() {
    return Sv(), bv(), Ev(), Av();
  }
  function Av() {
    if (_l !== 5) return !1;
    var l = mi, n = Ca;
    Ca = 0;
    var u = Em(Hu), c = D.T, s = L.p;
    try {
      L.p = 32 > u ? 32 : u, D.T = null, u = ph, ph = null;
      var r = mi, m = Hu;
      if (_l = 0, uc = mi = null, Hu = 0, (ye & 6) !== 0) throw Error(H(331));
      var g = ye;
      if (ye |= 4, Jy(r.current), pf(
        r,
        r.current,
        m,
        u
      ), ye = g, vi(0, !1), Al && typeof Al.onPostCommitFiberRoot == "function")
        try {
          Al.onPostCommitFiberRoot(rn, r);
        } catch {
        }
      return !0;
    } finally {
      L.p = s, D.T = c, Tv(l, n);
    }
  }
  function Ov(l, n, u) {
    n = Za(u, n), n = _y(l.stateNode, n, 2), l = ka(l, n, 2), l !== null && (Ci(l, 2), Bu(l));
  }
  function ze(l, n, u) {
    if (l.tag === 3)
      Ov(l, l, u);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          Ov(
            n,
            l,
            u
          );
          break;
        } else if (n.tag === 1) {
          var c = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (ke === null || !ke.has(c))) {
            l = Za(u, l), u = Dy(2), c = ka(n, u, 2), c !== null && (Ry(
              u,
              c,
              n,
              l
            ), Ci(c, 2), Bu(c));
            break;
          }
        }
        n = n.return;
      }
  }
  function hr(l, n, u) {
    var c = l.pingCache;
    if (c === null) {
      c = l.pingCache = new Ky();
      var s = /* @__PURE__ */ new Set();
      c.set(n, s);
    } else
      s = c.get(n), s === void 0 && (s = /* @__PURE__ */ new Set(), c.set(n, s));
    s.has(u) || (hh = !0, s.add(u), l = Wy.bind(null, l, n, u), n.then(l, l));
  }
  function Wy(l, n, u) {
    var c = l.pingCache;
    c !== null && c.delete(n), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, Ce === l && (te & u) === u && (Ge === 4 || Ge === 3 && (te & 62914560) === te && 300 > vl() - kn ? (ye & 2) === 0 && Nu(l, 0) : mh |= u, ll === te && (ll = 0)), Bu(l);
  }
  function zv(l, n) {
    n === 0 && (n = ta()), l = ei(l, n), l !== null && (Ci(l, n), Bu(l));
  }
  function en(l) {
    var n = l.memoizedState, u = 0;
    n !== null && (u = n.retryLane), zv(l, u);
  }
  function _v(l, n) {
    var u = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var c = l.stateNode, s = l.memoizedState;
        s !== null && (u = s.retryLane);
        break;
      case 19:
        c = l.stateNode;
        break;
      case 22:
        c = l.stateNode._retryCache;
        break;
      default:
        throw Error(H(314));
    }
    c !== null && c.delete(n), zv(l, u);
  }
  function Dv(l, n) {
    return rt(l, n);
  }
  var Of = null, ao = null, Fy = !1, bh = !1, Iy = !1, pi = 0;
  function Bu(l) {
    l !== ao && l.next === null && (ao === null ? Of = ao = l : ao = ao.next = l), bh = !0, Fy || (Fy = !0, yr());
  }
  function vi(l, n) {
    if (!Iy && bh) {
      Iy = !0;
      do
        for (var u = !1, c = Of; c !== null; ) {
          if (l !== 0) {
            var s = c.pendingLanes;
            if (s === 0) var r = 0;
            else {
              var m = c.suspendedLanes, g = c.pingedLanes;
              r = (1 << 31 - Ul(42 | l) + 1) - 1, r &= s & ~(m & ~g), r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0;
            }
            r !== 0 && (u = !0, no(c, r));
          } else
            r = te, r = ht(
              c,
              c === Ce ? r : 0,
              c.cancelPendingCommit !== null || c.timeoutHandle !== -1
            ), (r & 3) === 0 || Pt(c, r) || (u = !0, no(c, r));
          c = c.next;
        }
      while (u);
      Iy = !1;
    }
  }
  function Eh() {
    Py();
  }
  function Py() {
    bh = Fy = !1;
    var l = 0;
    pi !== 0 && aS() && (l = pi);
    for (var n = vl(), u = null, c = Of; c !== null; ) {
      var s = c.next, r = t0(c, n);
      r === 0 ? (c.next = null, u === null ? Of = s : u.next = s, s === null && (ao = u)) : (u = c, (l !== 0 || (r & 3) !== 0) && (bh = !0)), c = s;
    }
    _l !== 0 && _l !== 5 || vi(l), pi !== 0 && (pi = 0);
  }
  function t0(l, n) {
    for (var u = l.suspendedLanes, c = l.pingedLanes, s = l.expirationTimes, r = l.pendingLanes & -62914561; 0 < r; ) {
      var m = 31 - Ul(r), g = 1 << m, A = s[m];
      A === -1 ? ((g & u) === 0 || (g & c) !== 0) && (s[m] = wt(g, n)) : A <= n && (l.expiredLanes |= g), r &= ~g;
    }
    if (n = Ce, u = te, u = ht(
      l,
      l === n ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c = l.callbackNode, u === 0 || l === n && (Oe === 2 || Oe === 9) || l.cancelPendingCommit !== null)
      return c !== null && c !== null && Ri(c), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || Pt(l, u)) {
      if (n = u & -u, n === l.callbackPriority) return n;
      switch (c !== null && Ri(c), Em(u)) {
        case 2:
        case 8:
          u = Co;
          break;
        case 32:
          u = Mn;
          break;
        case 268435456:
          u = Uo;
          break;
        default:
          u = Mn;
      }
      return c = mr.bind(null, l), u = rt(u, c), l.callbackPriority = n, l.callbackNode = u, n;
    }
    return c !== null && c !== null && Ri(c), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function mr(l, n) {
    if (_l !== 0 && _l !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (Af() && l.callbackNode !== u)
      return null;
    var c = te;
    return c = ht(
      l,
      l === Ce ? c : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c === 0 ? null : (fv(l, c, n), t0(l, vl()), l.callbackNode != null && l.callbackNode === u ? mr.bind(null, l) : null);
  }
  function no(l, n) {
    if (Af()) return null;
    fv(l, n, !0);
  }
  function yr() {
    Yv(function() {
      (ye & 6) !== 0 ? rt(
        Mo,
        Eh
      ) : Py();
    });
  }
  function Th() {
    if (pi === 0) {
      var l = Qi;
      l === 0 && (l = I, I <<= 1, (I & 261888) === 0 && (I = 256)), pi = l;
    }
    return pi;
  }
  function Rv(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : hn("" + l);
  }
  function uo(l, n) {
    var u = n.ownerDocument.createElement("input");
    return u.name = n.name, u.value = n.value, l.id && u.setAttribute("form", l.id), n.parentNode.insertBefore(u, n), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function pr(l, n, u, c, s) {
    if (n === "submit" && u && u.stateNode === s) {
      var r = Rv(
        (s[fa] || null).action
      ), m = c.submitter;
      m && (n = (n = m[fa] || null) ? Rv(n.formAction) : m.getAttribute("formAction"), n !== null && (r = n, m = null));
      var g = new Es(
        "action",
        "action",
        null,
        c,
        s
      );
      l.push({
        event: g,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (c.defaultPrevented) {
                if (pi !== 0) {
                  var A = m ? uo(s, m) : new FormData(s);
                  of(
                    u,
                    {
                      pending: !0,
                      data: A,
                      method: s.method,
                      action: r
                    },
                    null,
                    A
                  );
                }
              } else
                typeof r == "function" && (g.preventDefault(), A = m ? uo(s, m) : new FormData(s), of(
                  u,
                  {
                    pending: !0,
                    data: A,
                    method: s.method,
                    action: r
                  },
                  r,
                  A
                ));
            },
            currentTarget: s
          }
        ]
      });
    }
  }
  for (var Ah = 0; Ah < Jo.length; Ah++) {
    var zf = Jo[Ah], e0 = zf.toLowerCase(), l0 = zf[0].toUpperCase() + zf.slice(1);
    ra(
      e0,
      "on" + l0
    );
  }
  ra(_s, "onAnimationEnd"), ra($m, "onAnimationIteration"), ra(Ad, "onAnimationStart"), ra("dblclick", "onDoubleClick"), ra("focusin", "onFocus"), ra("focusout", "onBlur"), ra(Bc, "onTransitionRun"), ra(Ds, "onTransitionStart"), ra(mu, "onTransitionCancel"), ra(Gp, "onTransitionEnd"), fu("onMouseEnter", ["mouseout", "mouseover"]), fu("onMouseLeave", ["mouseout", "mouseover"]), fu("onPointerEnter", ["pointerout", "pointerover"]), fu("onPointerLeave", ["pointerout", "pointerover"]), Ni(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Ni(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Ni("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Ni(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Ni(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Ni(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var _f = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Mv = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_f)
  );
  function Cv(l, n) {
    n = (n & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var c = l[u], s = c.event;
      c = c.listeners;
      t: {
        var r = void 0;
        if (n)
          for (var m = c.length - 1; 0 <= m; m--) {
            var g = c[m], A = g.instance, Y = g.currentTarget;
            if (g = g.listener, A !== r && s.isPropagationStopped())
              break t;
            r = g, s.currentTarget = Y;
            try {
              r(s);
            } catch (Q) {
              Yc(Q);
            }
            s.currentTarget = null, r = A;
          }
        else
          for (m = 0; m < c.length; m++) {
            if (g = c[m], A = g.instance, Y = g.currentTarget, g = g.listener, A !== r && s.isPropagationStopped())
              break t;
            r = g, s.currentTarget = Y;
            try {
              r(s);
            } catch (Q) {
              Yc(Q);
            }
            s.currentTarget = null, r = A;
          }
      }
    }
  }
  function ae(l, n) {
    var u = n[ld];
    u === void 0 && (u = n[ld] = /* @__PURE__ */ new Set());
    var c = l + "__bubble";
    u.has(c) || (vr(n, l, 2, !1), u.add(c));
  }
  function a0(l, n, u) {
    var c = 0;
    n && (c |= 4), vr(
      u,
      l,
      c,
      n
    );
  }
  var Oh = "_reactListening" + Math.random().toString(36).slice(2);
  function Df(l) {
    if (!l[Oh]) {
      l[Oh] = !0, Ac.forEach(function(u) {
        u !== "selectionchange" && (Mv.has(u) || a0(u, !1, l), a0(u, !0, l));
      });
      var n = l.nodeType === 9 ? l : l.ownerDocument;
      n === null || n[Oh] || (n[Oh] = !0, a0("selectionchange", !1, n));
    }
  }
  function vr(l, n, u, c) {
    switch (_r(n)) {
      case 2:
        var s = ju;
        break;
      case 8:
        s = qu;
        break;
      default:
        s = kl;
    }
    u = s.bind(
      null,
      n,
      u,
      l
    ), s = void 0, !Ss || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (s = !0), c ? s !== void 0 ? l.addEventListener(n, u, {
      capture: !0,
      passive: s
    }) : l.addEventListener(n, u, !0) : s !== void 0 ? l.addEventListener(n, u, {
      passive: s
    }) : l.addEventListener(n, u, !1);
  }
  function n0(l, n, u, c, s) {
    var r = c;
    if ((n & 1) === 0 && (n & 2) === 0 && c !== null)
      t: for (; ; ) {
        if (c === null) return;
        var m = c.tag;
        if (m === 3 || m === 4) {
          var g = c.stateNode.containerInfo;
          if (g === s) break;
          if (m === 4)
            for (m = c.return; m !== null; ) {
              var A = m.tag;
              if ((A === 3 || A === 4) && m.stateNode.containerInfo === s)
                return;
              m = m.return;
            }
          for (; g !== null; ) {
            if (m = bc(g), m === null) return;
            if (A = m.tag, A === 5 || A === 6 || A === 26 || A === 27) {
              c = r = m;
              continue t;
            }
            g = g.parentNode;
          }
        }
        c = c.return;
      }
    Cm(function() {
      var Y = r, Q = sd(u), J = [];
      t: {
        var j = yu.get(l);
        if (j !== void 0) {
          var w = Es, ft = l;
          switch (l) {
            case "keypress":
              if (dd(u) === 0) break t;
            case "keydown":
            case "keyup":
              w = pd;
              break;
            case "focusin":
              ft = "focus", w = md;
              break;
            case "focusout":
              ft = "blur", w = md;
              break;
            case "beforeblur":
            case "afterblur":
              w = md;
              break;
            case "click":
              if (u.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              w = Xo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              w = Dp;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              w = Hp;
              break;
            case _s:
            case $m:
            case Ad:
              w = Mp;
              break;
            case Gp:
              w = Fg;
              break;
            case "scroll":
            case "scrollend":
              w = kg;
              break;
            case "wheel":
              w = Ig;
              break;
            case "copy":
            case "cut":
            case "paste":
              w = Dc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              w = Bn;
              break;
            case "toggle":
            case "beforetoggle":
              w = Gm;
          }
          var Ot = (n & 4) !== 0, He = !Ot && (l === "scroll" || l === "scrollend"), C = Ot ? j !== null ? j + "Capture" : null : j;
          Ot = [];
          for (var _ = Y, N; _ !== null; ) {
            var Z = _;
            if (N = Z.stateNode, Z = Z.tag, Z !== 5 && Z !== 26 && Z !== 27 || N === null || C === null || (Z = Hl(_, C), Z != null && Ot.push(
              gr(_, Z, N)
            )), He) break;
            _ = _.return;
          }
          0 < Ot.length && (j = new w(
            j,
            ft,
            null,
            u,
            Q
          ), J.push({ event: j, listeners: Ot }));
        }
      }
      if ((n & 7) === 0) {
        t: {
          if (j = l === "mouseover" || l === "pointerover", w = l === "mouseout" || l === "pointerout", j && u !== fd && (ft = u.relatedTarget || u.fromElement) && (bc(ft) || ft[Ui]))
            break t;
          if ((w || j) && (j = Q.window === Q ? Q : (j = Q.ownerDocument) ? j.defaultView || j.parentWindow : window, w ? (ft = u.relatedTarget || u.toElement, w = Y, ft = ft ? bc(ft) : null, ft !== null && (He = xt(ft), Ot = ft.tag, ft !== He || Ot !== 5 && Ot !== 27 && Ot !== 6) && (ft = null)) : (w = null, ft = Y), w !== ft)) {
            if (Ot = Xo, Z = "onMouseLeave", C = "onMouseEnter", _ = "mouse", (l === "pointerout" || l === "pointerover") && (Ot = Bn, Z = "onPointerLeave", C = "onPointerEnter", _ = "pointer"), He = w == null ? j : No(w), N = ft == null ? j : No(ft), j = new Ot(
              Z,
              _ + "leave",
              w,
              u,
              Q
            ), j.target = He, j.relatedTarget = N, Z = null, bc(Q) === Y && (Ot = new Ot(
              C,
              _ + "enter",
              ft,
              u,
              Q
            ), Ot.target = N, Ot.relatedTarget = He, Z = Ot), He = Z, w && ft)
              e: {
                for (Ot = Uv, C = w, _ = ft, N = 0, Z = C; Z; Z = Ot(Z))
                  N++;
                Z = 0;
                for (var St = _; St; St = Ot(St))
                  Z++;
                for (; 0 < N - Z; )
                  C = Ot(C), N--;
                for (; 0 < Z - N; )
                  _ = Ot(_), Z--;
                for (; N--; ) {
                  if (C === _ || _ !== null && C === _.alternate) {
                    Ot = C;
                    break e;
                  }
                  C = Ot(C), _ = Ot(_);
                }
                Ot = null;
              }
            else Ot = null;
            w !== null && zh(
              J,
              j,
              w,
              Ot,
              !1
            ), ft !== null && He !== null && zh(
              J,
              He,
              ft,
              Ot,
              !0
            );
          }
        }
        t: {
          if (j = Y ? No(Y) : window, w = j.nodeName && j.nodeName.toLowerCase(), w === "select" || w === "input" && j.type === "file")
            var re = Vm;
          else if (hu(j))
            if (Sd)
              re = Hc;
            else {
              re = qp;
              var mt = jp;
            }
          else
            w = j.nodeName, !w || w.toLowerCase() !== "input" || j.type !== "checkbox" && j.type !== "radio" ? Y && Mm(Y.elementType) && (re = Vm) : re = qi;
          if (re && (re = re(l, Y))) {
            Lm(
              J,
              re,
              u,
              Q
            );
            break t;
          }
          mt && mt(l, j, Y), l === "focusout" && Y && j.type === "number" && Y.memoizedProps.value != null && Oc(j, "number", j.value);
        }
        switch (mt = Y ? No(Y) : window, l) {
          case "focusin":
            (hu(mt) || mt.contentEditable === "true") && (Gi = mt, Vo = Y, pn = null);
            break;
          case "focusout":
            pn = Vo = Gi = null;
            break;
          case "mousedown":
            jn = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            jn = !1, Td(J, u, Q);
            break;
          case "selectionchange":
            if (zs) break;
          case "keydown":
          case "keyup":
            Td(J, u, Q);
        }
        var Xt;
        if (Qo)
          t: {
            switch (l) {
              case "compositionstart":
                var Kt = "onCompositionStart";
                break t;
              case "compositionend":
                Kt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                Kt = "onCompositionUpdate";
                break t;
            }
            Kt = void 0;
          }
        else
          Mc ? gd(l, u) && (Kt = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (Kt = "onCompositionStart");
        Kt && (wm && u.locale !== "ko" && (Mc || Kt !== "onCompositionStart" ? Kt === "onCompositionEnd" && Mc && (Xt = Hm()) : (Pu = Q, Um = "value" in Pu ? Pu.value : Pu.textContent, Mc = !0)), mt = Sr(Y, Kt), 0 < mt.length && (Kt = new Cp(
          Kt,
          l,
          null,
          u,
          Q
        ), J.push({ event: Kt, listeners: mt }), Xt ? Kt.data = Xt : (Xt = Xm(u), Xt !== null && (Kt.data = Xt)))), (Xt = ea ? Yp(l, u) : Pg(l, u)) && (Kt = Sr(Y, "onBeforeInput"), 0 < Kt.length && (mt = new Cp(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          Q
        ), J.push({
          event: mt,
          listeners: Kt
        }), mt.data = Xt)), pr(
          J,
          l,
          Y,
          u,
          Q
        );
      }
      Cv(J, n);
    });
  }
  function gr(l, n, u) {
    return {
      instance: l,
      listener: n,
      currentTarget: u
    };
  }
  function Sr(l, n) {
    for (var u = n + "Capture", c = []; l !== null; ) {
      var s = l, r = s.stateNode;
      if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || r === null || (s = Hl(l, u), s != null && c.unshift(
        gr(l, s, r)
      ), s = Hl(l, n), s != null && c.push(
        gr(l, s, r)
      )), l.tag === 3) return c;
      l = l.return;
    }
    return [];
  }
  function Uv(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function zh(l, n, u, c, s) {
    for (var r = n._reactName, m = []; u !== null && u !== c; ) {
      var g = u, A = g.alternate, Y = g.stateNode;
      if (g = g.tag, A !== null && A === c) break;
      g !== 5 && g !== 26 && g !== 27 || Y === null || (A = Y, s ? (Y = Hl(u, r), Y != null && m.unshift(
        gr(u, Y, A)
      )) : s || (Y = Hl(u, r), Y != null && m.push(
        gr(u, Y, A)
      ))), u = u.return;
    }
    m.length !== 0 && l.push({ event: n, listeners: m });
  }
  var Hv = /\r\n?/g, u0 = /\u0000|\uFFFD/g;
  function i0(l) {
    return (typeof l == "string" ? l : "" + l).replace(Hv, `
`).replace(u0, "");
  }
  function c0(l, n) {
    return n = i0(n), i0(l) === n;
  }
  function Ue(l, n, u, c, s, r) {
    switch (u) {
      case "children":
        typeof c == "string" ? n === "body" || n === "textarea" && c === "" || su(l, c) : (typeof c == "number" || typeof c == "bigint") && n !== "body" && su(l, "" + c);
        break;
      case "className":
        id(l, "class", c);
        break;
      case "tabIndex":
        id(l, "tabindex", c);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        id(l, u, c);
        break;
      case "style":
        Op(l, c, r);
        break;
      case "data":
        if (n !== "object") {
          id(l, "data", c);
          break;
        }
      case "src":
      case "href":
        if (c === "" && (n !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (c == null || typeof c == "function" || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = hn("" + c), l.setAttribute(u, c);
        break;
      case "action":
      case "formAction":
        if (typeof c == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof r == "function" && (u === "formAction" ? (n !== "input" && Ue(l, n, "name", s.name, s, null), Ue(
            l,
            n,
            "formEncType",
            s.formEncType,
            s,
            null
          ), Ue(
            l,
            n,
            "formMethod",
            s.formMethod,
            s,
            null
          ), Ue(
            l,
            n,
            "formTarget",
            s.formTarget,
            s,
            null
          )) : (Ue(l, n, "encType", s.encType, s, null), Ue(l, n, "method", s.method, s, null), Ue(l, n, "target", s.target, s, null)));
        if (c == null || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = hn("" + c), l.setAttribute(u, c);
        break;
      case "onClick":
        c != null && (l.onclick = Un);
        break;
      case "onScroll":
        c != null && ae("scroll", l);
        break;
      case "onScrollEnd":
        c != null && ae("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(H(61));
          if (u = c.__html, u != null) {
            if (s.children != null) throw Error(H(60));
            l.innerHTML = u;
          }
        }
        break;
      case "multiple":
        l.multiple = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "muted":
        l.muted = c && typeof c != "function" && typeof c != "symbol";
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
        if (c == null || typeof c == "function" || typeof c == "boolean" || typeof c == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = hn("" + c), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          u
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
        c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "" + c) : l.removeAttribute(u);
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
        c && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        c === !0 ? l.setAttribute(u, "") : c !== !1 && c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        c != null && typeof c != "function" && typeof c != "symbol" && !isNaN(c) && 1 <= c ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        c == null || typeof c == "function" || typeof c == "symbol" || isNaN(c) ? l.removeAttribute(u) : l.setAttribute(u, c);
        break;
      case "popover":
        ae("beforetoggle", l), ae("toggle", l), jo(l, "popover", c);
        break;
      case "xlinkActuate":
        Fu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          c
        );
        break;
      case "xlinkArcrole":
        Fu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          c
        );
        break;
      case "xlinkRole":
        Fu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          c
        );
        break;
      case "xlinkShow":
        Fu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          c
        );
        break;
      case "xlinkTitle":
        Fu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          c
        );
        break;
      case "xlinkType":
        Fu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          c
        );
        break;
      case "xmlBase":
        Fu(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          c
        );
        break;
      case "xmlLang":
        Fu(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          c
        );
        break;
      case "xmlSpace":
        Fu(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          c
        );
        break;
      case "is":
        jo(l, "is", c);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = $g.get(u) || u, jo(l, u, c));
    }
  }
  function o0(l, n, u, c, s, r) {
    switch (u) {
      case "style":
        Op(l, c, r);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(H(61));
          if (u = c.__html, u != null) {
            if (s.children != null) throw Error(H(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof c == "string" ? su(l, c) : (typeof c == "number" || typeof c == "bigint") && su(l, "" + c);
        break;
      case "onScroll":
        c != null && ae("scroll", l);
        break;
      case "onScrollEnd":
        c != null && ae("scrollend", l);
        break;
      case "onClick":
        c != null && (l.onclick = Un);
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
        if (!Hi.hasOwnProperty(u))
          t: {
            if (u[0] === "o" && u[1] === "n" && (s = u.endsWith("Capture"), n = u.slice(2, s ? u.length - 7 : void 0), r = l[fa] || null, r = r != null ? r[u] : null, typeof r == "function" && l.removeEventListener(n, r, s), typeof c == "function")) {
              typeof r != "function" && r !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(n, c, s);
              break t;
            }
            u in l ? l[u] = c : c === !0 ? l.setAttribute(u, "") : jo(l, u, c);
          }
    }
  }
  function $l(l, n, u) {
    switch (n) {
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
        ae("error", l), ae("load", l);
        var c = !1, s = !1, r;
        for (r in u)
          if (u.hasOwnProperty(r)) {
            var m = u[r];
            if (m != null)
              switch (r) {
                case "src":
                  c = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(H(137, n));
                default:
                  Ue(l, n, r, m, u, null);
              }
          }
        s && Ue(l, n, "srcSet", u.srcSet, u, null), c && Ue(l, n, "src", u.src, u, null);
        return;
      case "input":
        ae("invalid", l);
        var g = r = m = s = null, A = null, Y = null;
        for (c in u)
          if (u.hasOwnProperty(c)) {
            var Q = u[c];
            if (Q != null)
              switch (c) {
                case "name":
                  s = Q;
                  break;
                case "type":
                  m = Q;
                  break;
                case "checked":
                  A = Q;
                  break;
                case "defaultChecked":
                  Y = Q;
                  break;
                case "value":
                  r = Q;
                  break;
                case "defaultValue":
                  g = Q;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (Q != null)
                    throw Error(H(137, n));
                  break;
                default:
                  Ue(l, n, c, Q, u, null);
              }
          }
        ps(
          l,
          r,
          g,
          A,
          Y,
          m,
          s,
          !1
        );
        return;
      case "select":
        ae("invalid", l), c = m = r = null;
        for (s in u)
          if (u.hasOwnProperty(s) && (g = u[s], g != null))
            switch (s) {
              case "value":
                r = g;
                break;
              case "defaultValue":
                m = g;
                break;
              case "multiple":
                c = g;
              default:
                Ue(l, n, s, g, u, null);
            }
        n = r, u = m, l.multiple = !!c, n != null ? qo(l, !!c, n, !1) : u != null && qo(l, !!c, u, !0);
        return;
      case "textarea":
        ae("invalid", l), r = s = c = null;
        for (m in u)
          if (u.hasOwnProperty(m) && (g = u[m], g != null))
            switch (m) {
              case "value":
                c = g;
                break;
              case "defaultValue":
                s = g;
                break;
              case "children":
                r = g;
                break;
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(H(91));
                break;
              default:
                Ue(l, n, m, g, u, null);
            }
        Rm(l, c, s, r);
        return;
      case "option":
        for (A in u)
          u.hasOwnProperty(A) && (c = u[A], c != null) && (A === "selected" ? l.selected = c && typeof c != "function" && typeof c != "symbol" : Ue(l, n, A, c, u, null));
        return;
      case "dialog":
        ae("beforetoggle", l), ae("toggle", l), ae("cancel", l), ae("close", l);
        break;
      case "iframe":
      case "object":
        ae("load", l);
        break;
      case "video":
      case "audio":
        for (c = 0; c < _f.length; c++)
          ae(_f[c], l);
        break;
      case "image":
        ae("error", l), ae("load", l);
        break;
      case "details":
        ae("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        ae("error", l), ae("load", l);
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
        for (Y in u)
          if (u.hasOwnProperty(Y) && (c = u[Y], c != null))
            switch (Y) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(H(137, n));
              default:
                Ue(l, n, Y, c, u, null);
            }
        return;
      default:
        if (Mm(n)) {
          for (Q in u)
            u.hasOwnProperty(Q) && (c = u[Q], c !== void 0 && o0(
              l,
              n,
              Q,
              c,
              u,
              void 0
            ));
          return;
        }
    }
    for (g in u)
      u.hasOwnProperty(g) && (c = u[g], c != null && Ue(l, n, g, c, u, null));
  }
  function f0(l, n, u, c) {
    switch (n) {
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
        var s = null, r = null, m = null, g = null, A = null, Y = null, Q = null;
        for (w in u) {
          var J = u[w];
          if (u.hasOwnProperty(w) && J != null)
            switch (w) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                A = J;
              default:
                c.hasOwnProperty(w) || Ue(l, n, w, null, c, J);
            }
        }
        for (var j in c) {
          var w = c[j];
          if (J = u[j], c.hasOwnProperty(j) && (w != null || J != null))
            switch (j) {
              case "type":
                r = w;
                break;
              case "name":
                s = w;
                break;
              case "checked":
                Y = w;
                break;
              case "defaultChecked":
                Q = w;
                break;
              case "value":
                m = w;
                break;
              case "defaultValue":
                g = w;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (w != null)
                  throw Error(H(137, n));
                break;
              default:
                w !== J && Ue(
                  l,
                  n,
                  j,
                  w,
                  c,
                  J
                );
            }
        }
        ys(
          l,
          m,
          g,
          A,
          Y,
          Q,
          r,
          s
        );
        return;
      case "select":
        w = m = g = j = null;
        for (r in u)
          if (A = u[r], u.hasOwnProperty(r) && A != null)
            switch (r) {
              case "value":
                break;
              case "multiple":
                w = A;
              default:
                c.hasOwnProperty(r) || Ue(
                  l,
                  n,
                  r,
                  null,
                  c,
                  A
                );
            }
        for (s in c)
          if (r = c[s], A = u[s], c.hasOwnProperty(s) && (r != null || A != null))
            switch (s) {
              case "value":
                j = r;
                break;
              case "defaultValue":
                g = r;
                break;
              case "multiple":
                m = r;
              default:
                r !== A && Ue(
                  l,
                  n,
                  s,
                  r,
                  c,
                  A
                );
            }
        n = g, u = m, c = w, j != null ? qo(l, !!u, j, !1) : !!c != !!u && (n != null ? qo(l, !!u, n, !0) : qo(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        w = j = null;
        for (g in u)
          if (s = u[g], u.hasOwnProperty(g) && s != null && !c.hasOwnProperty(g))
            switch (g) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ue(l, n, g, null, c, s);
            }
        for (m in c)
          if (s = c[m], r = u[m], c.hasOwnProperty(m) && (s != null || r != null))
            switch (m) {
              case "value":
                j = s;
                break;
              case "defaultValue":
                w = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(H(91));
                break;
              default:
                s !== r && Ue(l, n, m, s, c, r);
            }
        Dm(l, j, w);
        return;
      case "option":
        for (var ft in u)
          j = u[ft], u.hasOwnProperty(ft) && j != null && !c.hasOwnProperty(ft) && (ft === "selected" ? l.selected = !1 : Ue(
            l,
            n,
            ft,
            null,
            c,
            j
          ));
        for (A in c)
          j = c[A], w = u[A], c.hasOwnProperty(A) && j !== w && (j != null || w != null) && (A === "selected" ? l.selected = j && typeof j != "function" && typeof j != "symbol" : Ue(
            l,
            n,
            A,
            j,
            c,
            w
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
        for (var Ot in u)
          j = u[Ot], u.hasOwnProperty(Ot) && j != null && !c.hasOwnProperty(Ot) && Ue(l, n, Ot, null, c, j);
        for (Y in c)
          if (j = c[Y], w = u[Y], c.hasOwnProperty(Y) && j !== w && (j != null || w != null))
            switch (Y) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (j != null)
                  throw Error(H(137, n));
                break;
              default:
                Ue(
                  l,
                  n,
                  Y,
                  j,
                  c,
                  w
                );
            }
        return;
      default:
        if (Mm(n)) {
          for (var He in u)
            j = u[He], u.hasOwnProperty(He) && j !== void 0 && !c.hasOwnProperty(He) && o0(
              l,
              n,
              He,
              void 0,
              c,
              j
            );
          for (Q in c)
            j = c[Q], w = u[Q], !c.hasOwnProperty(Q) || j === w || j === void 0 && w === void 0 || o0(
              l,
              n,
              Q,
              j,
              c,
              w
            );
          return;
        }
    }
    for (var C in u)
      j = u[C], u.hasOwnProperty(C) && j != null && !c.hasOwnProperty(C) && Ue(l, n, C, null, c, j);
    for (J in c)
      j = c[J], w = u[J], !c.hasOwnProperty(J) || j === w || j == null && w == null || Ue(l, n, J, j, c, w);
  }
  function _h(l) {
    switch (l) {
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
  function s0() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, n = 0, u = performance.getEntriesByType("resource"), c = 0; c < u.length; c++) {
        var s = u[c], r = s.transferSize, m = s.initiatorType, g = s.duration;
        if (r && g && _h(m)) {
          for (m = 0, g = s.responseEnd, c += 1; c < u.length; c++) {
            var A = u[c], Y = A.startTime;
            if (Y > g) break;
            var Q = A.transferSize, J = A.initiatorType;
            Q && _h(J) && (A = A.responseEnd, m += Q * (A < g ? 1 : (g - Y) / (A - Y)));
          }
          if (--c, n += 8 * (r + m) / (s.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return n / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var Dh = null, Rh = null;
  function cc(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Nv(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function r0(l, n) {
    if (l === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && n === "foreignObject" ? 0 : l;
  }
  function Rf(l, n) {
    return l === "textarea" || l === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var Mh = null;
  function aS() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Mh ? !1 : (Mh = l, !0) : (Mh = null, !1);
  }
  var br = typeof setTimeout == "function" ? setTimeout : void 0, Bv = typeof clearTimeout == "function" ? clearTimeout : void 0, io = typeof Promise == "function" ? Promise : void 0, Yv = typeof queueMicrotask == "function" ? queueMicrotask : typeof io < "u" ? function(l) {
    return io.resolve(null).then(l).catch(d0);
  } : br;
  function d0(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function Wn(l) {
    return l === "head";
  }
  function h0(l, n) {
    var u = n, c = 0;
    do {
      var s = u.nextSibling;
      if (l.removeChild(u), s && s.nodeType === 8)
        if (u = s.data, u === "/$" || u === "/&") {
          if (c === 0) {
            l.removeChild(s), wf(n);
            return;
          }
          c--;
        } else if (u === "$" || u === "$?" || u === "$~" || u === "$!" || u === "&")
          c++;
        else if (u === "html")
          co(l.ownerDocument.documentElement);
        else if (u === "head") {
          u = l.ownerDocument.head, co(u);
          for (var r = u.firstChild; r; ) {
            var m = r.nextSibling, g = r.nodeName;
            r[ou] || g === "SCRIPT" || g === "STYLE" || g === "LINK" && r.rel.toLowerCase() === "stylesheet" || u.removeChild(r), r = m;
          }
        } else
          u === "body" && co(l.ownerDocument.body);
      u = s;
    } while (u);
    wf(n);
  }
  function yl(l, n) {
    var u = l;
    l = 0;
    do {
      var c = u.nextSibling;
      if (u.nodeType === 1 ? n ? (u._stashedDisplay = u.style.display, u.style.display = "none") : (u.style.display = u._stashedDisplay || "", u.getAttribute("style") === "" && u.removeAttribute("style")) : u.nodeType === 3 && (n ? (u._stashedText = u.nodeValue, u.nodeValue = "") : u.nodeValue = u._stashedText || ""), c && c.nodeType === 8)
        if (u = c.data, u === "/$") {
          if (l === 0) break;
          l--;
        } else
          u !== "$" && u !== "$?" && u !== "$~" && u !== "$!" || l++;
      u = c;
    } while (u);
  }
  function Er(l) {
    var n = l.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var u = n;
      switch (n = n.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Er(u), ad(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function nS(l, n, u, c) {
    for (; l.nodeType === 1; ) {
      var s = u;
      if (l.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!c && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (c) {
        if (!l[ou])
          switch (n) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (r = l.getAttribute("rel"), r === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (r !== s.rel || l.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || l.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || l.getAttribute("title") !== (s.title == null ? null : s.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (r = l.getAttribute("src"), (r !== (s.src == null ? null : s.src) || l.getAttribute("type") !== (s.type == null ? null : s.type) || l.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && r && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (n === "input" && l.type === "hidden") {
        var r = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && l.getAttribute("name") === r)
          return l;
      } else return l;
      if (l = Aa(l.nextSibling), l === null) break;
    }
    return null;
  }
  function kt(l, n, u) {
    if (n === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = Aa(l.nextSibling), l === null)) return null;
    return l;
  }
  function jv(l, n) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !n || (l = Aa(l.nextSibling), l === null)) return null;
    return l;
  }
  function On(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function oc(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function Mf(l, n) {
    var u = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = n;
    else if (l.data !== "$?" || u.readyState !== "loading")
      n();
    else {
      var c = function() {
        n(), u.removeEventListener("DOMContentLoaded", c);
      };
      u.addEventListener("DOMContentLoaded", c), l._reactRetry = c;
    }
  }
  function Aa(l) {
    for (; l != null; l = l.nextSibling) {
      var n = l.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = l.data, n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&" || n === "F!" || n === "F")
          break;
        if (n === "/$" || n === "/&") return null;
      }
    }
    return l;
  }
  var Tr = null;
  function Ch(l) {
    l = l.nextSibling;
    for (var n = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "/$" || u === "/&") {
          if (n === 0)
            return Aa(l.nextSibling);
          n--;
        } else
          u !== "$" && u !== "$!" && u !== "$?" && u !== "$~" && u !== "&" || n++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function Fn(l) {
    l = l.previousSibling;
    for (var n = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?" || u === "$~" || u === "&") {
          if (n === 0) return l;
          n--;
        } else u !== "/$" && u !== "/&" || n++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function Cf(l, n, u) {
    switch (n = cc(u), l) {
      case "html":
        if (l = n.documentElement, !l) throw Error(H(452));
        return l;
      case "head":
        if (l = n.head, !l) throw Error(H(453));
        return l;
      case "body":
        if (l = n.body, !l) throw Error(H(454));
        return l;
      default:
        throw Error(H(451));
    }
  }
  function co(l) {
    for (var n = l.attributes; n.length; )
      l.removeAttributeNode(n[0]);
    ad(l);
  }
  var Ha = /* @__PURE__ */ new Map(), Ar = /* @__PURE__ */ new Set();
  function na(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var In = L.d;
  L.d = {
    f: uS,
    r: qv,
    D: G,
    C: be,
    L: iS,
    m: m0,
    X: gi,
    S: y0,
    M: fc
  };
  function uS() {
    var l = In.f(), n = Ef();
    return l || n;
  }
  function qv(l) {
    var n = Ec(l);
    n !== null && n.tag === 5 && n.type === "form" ? Me(n) : In.r(l);
  }
  var Uf = typeof document > "u" ? null : document;
  function bl(l, n, u) {
    var c = Uf;
    if (c && typeof n == "string" && n) {
      var s = Qa(n);
      s = 'link[rel="' + l + '"][href="' + s + '"]', typeof u == "string" && (s += '[crossorigin="' + u + '"]'), Ar.has(s) || (Ar.add(s), l = { rel: l, crossOrigin: u, href: n }, c.querySelector(s) === null && (n = c.createElement("link"), $l(n, "link", l), Ee(n), c.head.appendChild(n)));
    }
  }
  function G(l) {
    In.D(l), bl("dns-prefetch", l, null);
  }
  function be(l, n) {
    In.C(l, n), bl("preconnect", l, n);
  }
  function iS(l, n, u) {
    In.L(l, n, u);
    var c = Uf;
    if (c && l && n) {
      var s = 'link[rel="preload"][as="' + Qa(n) + '"]';
      n === "image" && u && u.imageSrcSet ? (s += '[imagesrcset="' + Qa(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (s += '[imagesizes="' + Qa(
        u.imageSizes
      ) + '"]')) : s += '[href="' + Qa(l) + '"]';
      var r = s;
      switch (n) {
        case "style":
          r = ln(l);
          break;
        case "script":
          r = oo(l);
      }
      Ha.has(r) || (l = X(
        {
          rel: "preload",
          href: n === "image" && u && u.imageSrcSet ? void 0 : l,
          as: n
        },
        u
      ), Ha.set(r, l), c.querySelector(s) !== null || n === "style" && c.querySelector(sc(r)) || n === "script" && c.querySelector(Bf(r)) || (n = c.createElement("link"), $l(n, "link", l), Ee(n), c.head.appendChild(n)));
    }
  }
  function m0(l, n) {
    In.m(l, n);
    var u = Uf;
    if (u && l) {
      var c = n && typeof n.as == "string" ? n.as : "script", s = 'link[rel="modulepreload"][as="' + Qa(c) + '"][href="' + Qa(l) + '"]', r = s;
      switch (c) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = oo(l);
      }
      if (!Ha.has(r) && (l = X({ rel: "modulepreload", href: l }, n), Ha.set(r, l), u.querySelector(s) === null)) {
        switch (c) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(Bf(r)))
              return;
        }
        c = u.createElement("link"), $l(c, "link", l), Ee(c), u.head.appendChild(c);
      }
    }
  }
  function y0(l, n, u) {
    In.S(l, n, u);
    var c = Uf;
    if (c && l) {
      var s = Tc(c).hoistableStyles, r = ln(l);
      n = n || "default";
      var m = s.get(r);
      if (!m) {
        var g = { loading: 0, preload: null };
        if (m = c.querySelector(
          sc(r)
        ))
          g.loading = 5;
        else {
          l = X(
            { rel: "stylesheet", href: l, "data-precedence": n },
            u
          ), (u = Ha.get(r)) && Uh(l, u);
          var A = m = c.createElement("link");
          Ee(A), $l(A, "link", l), A._p = new Promise(function(Y, Q) {
            A.onload = Y, A.onerror = Q;
          }), A.addEventListener("load", function() {
            g.loading |= 1;
          }), A.addEventListener("error", function() {
            g.loading |= 2;
          }), g.loading |= 4, Or(m, n, c);
        }
        m = {
          type: "stylesheet",
          instance: m,
          count: 1,
          state: g
        }, s.set(r, m);
      }
    }
  }
  function gi(l, n) {
    In.X(l, n);
    var u = Uf;
    if (u && l) {
      var c = Tc(u).hoistableScripts, s = oo(l), r = c.get(s);
      r || (r = u.querySelector(Bf(s)), r || (l = X({ src: l, async: !0 }, n), (n = Ha.get(s)) && Hh(l, n), r = u.createElement("script"), Ee(r), $l(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, c.set(s, r));
    }
  }
  function fc(l, n) {
    In.M(l, n);
    var u = Uf;
    if (u && l) {
      var c = Tc(u).hoistableScripts, s = oo(l), r = c.get(s);
      r || (r = u.querySelector(Bf(s)), r || (l = X({ src: l, async: !0, type: "module" }, n), (n = Ha.get(s)) && Hh(l, n), r = u.createElement("script"), Ee(r), $l(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, c.set(s, r));
    }
  }
  function Hf(l, n, u, c) {
    var s = (s = Gt.current) ? na(s) : null;
    if (!s) throw Error(H(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (n = ln(u.href), u = Tc(
          s
        ).hoistableStyles, c = u.get(n), c || (c = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = ln(u.href);
          var r = Tc(
            s
          ).hoistableStyles, m = r.get(l);
          if (m || (s = s.ownerDocument || s, m = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, r.set(l, m), (r = s.querySelector(
            sc(l)
          )) && !r._p && (m.instance = r, m.state.loading = 5), Ha.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, Ha.set(l, u), r || xv(
            s,
            l,
            u,
            m.state
          ))), n && c === null)
            throw Error(H(528, ""));
          return m;
        }
        if (n && c !== null)
          throw Error(H(529, ""));
        return null;
      case "script":
        return n = u.async, u = u.src, typeof u == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = oo(u), u = Tc(
          s
        ).hoistableScripts, c = u.get(n), c || (c = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(H(444, l));
    }
  }
  function ln(l) {
    return 'href="' + Qa(l) + '"';
  }
  function sc(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Nf(l) {
    return X({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function xv(l, n, u, c) {
    l.querySelector('link[rel="preload"][as="style"][' + n + "]") ? c.loading = 1 : (n = l.createElement("link"), c.preload = n, n.addEventListener("load", function() {
      return c.loading |= 1;
    }), n.addEventListener("error", function() {
      return c.loading |= 2;
    }), $l(n, "link", u), Ee(n), l.head.appendChild(n));
  }
  function oo(l) {
    return '[src="' + Qa(l) + '"]';
  }
  function Bf(l) {
    return "script[async]" + l;
  }
  function p0(l, n, u) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var c = l.querySelector(
            'style[data-href~="' + Qa(u.href) + '"]'
          );
          if (c)
            return n.instance = c, Ee(c), c;
          var s = X({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return c = (l.ownerDocument || l).createElement(
            "style"
          ), Ee(c), $l(c, "style", s), Or(c, u.precedence, l), n.instance = c;
        case "stylesheet":
          s = ln(u.href);
          var r = l.querySelector(
            sc(s)
          );
          if (r)
            return n.state.loading |= 4, n.instance = r, Ee(r), r;
          c = Nf(u), (s = Ha.get(s)) && Uh(c, s), r = (l.ownerDocument || l).createElement("link"), Ee(r);
          var m = r;
          return m._p = new Promise(function(g, A) {
            m.onload = g, m.onerror = A;
          }), $l(r, "link", c), n.state.loading |= 4, Or(r, u.precedence, l), n.instance = r;
        case "script":
          return r = oo(u.src), (s = l.querySelector(
            Bf(r)
          )) ? (n.instance = s, Ee(s), s) : (c = u, (s = Ha.get(r)) && (c = X({}, u), Hh(c, s)), l = l.ownerDocument || l, s = l.createElement("script"), Ee(s), $l(s, "link", c), l.head.appendChild(s), n.instance = s);
        case "void":
          return null;
        default:
          throw Error(H(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (c = n.instance, n.state.loading |= 4, Or(c, u.precedence, l));
    return n.instance;
  }
  function Or(l, n, u) {
    for (var c = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), s = c.length ? c[c.length - 1] : null, r = s, m = 0; m < c.length; m++) {
      var g = c[m];
      if (g.dataset.precedence === n) r = g;
      else if (r !== s) break;
    }
    r ? r.parentNode.insertBefore(l, r.nextSibling) : (n = u.nodeType === 9 ? u.head : u, n.insertBefore(l, n.firstChild));
  }
  function Uh(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.title == null && (l.title = n.title);
  }
  function Hh(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.integrity == null && (l.integrity = n.integrity);
  }
  var Yf = null;
  function v0(l, n, u) {
    if (Yf === null) {
      var c = /* @__PURE__ */ new Map(), s = Yf = /* @__PURE__ */ new Map();
      s.set(u, c);
    } else
      s = Yf, c = s.get(u), c || (c = /* @__PURE__ */ new Map(), s.set(u, c));
    if (c.has(l)) return c;
    for (c.set(l, null), u = u.getElementsByTagName(l), s = 0; s < u.length; s++) {
      var r = u[s];
      if (!(r[ou] || r[Re] || l === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
        var m = r.getAttribute(n) || "";
        m = l + m;
        var g = c.get(m);
        g ? g.push(r) : c.set(m, [r]);
      }
    }
    return c;
  }
  function Nh(l, n, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      n === "title" ? l.querySelector("head > title") : null
    );
  }
  function g0(l, n, u) {
    if (u === 1 || n.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "")
          break;
        return !0;
      case "link":
        if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError)
          break;
        return n.rel === "stylesheet" ? (l = n.disabled, typeof n.precedence == "string" && l == null) : !0;
      case "script":
        if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string")
          return !0;
    }
    return !1;
  }
  function Na(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function Yu(l, n, u, c) {
    if (u.type === "stylesheet" && (typeof c.media != "string" || matchMedia(c.media).matches !== !1) && (u.state.loading & 4) === 0) {
      if (u.instance === null) {
        var s = ln(c.href), r = n.querySelector(
          sc(s)
        );
        if (r) {
          n = r._p, n !== null && typeof n == "object" && typeof n.then == "function" && (l.count++, l = Bh.bind(l), n.then(l, l)), u.state.loading |= 4, u.instance = r, Ee(r);
          return;
        }
        r = n.ownerDocument || n, c = Nf(c), (s = Ha.get(s)) && Uh(c, s), r = r.createElement("link"), Ee(r);
        var m = r;
        m._p = new Promise(function(g, A) {
          m.onload = g, m.onerror = A;
        }), $l(r, "link", c), u.instance = r;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(u, n), (n = u.state.preload) && (u.state.loading & 3) === 0 && (l.count++, u = Bh.bind(l), n.addEventListener("load", u), n.addEventListener("error", u));
    }
  }
  var an = 0;
  function S0(l, n) {
    return l.stylesheets && l.count === 0 && jh(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(u) {
      var c = setTimeout(function() {
        if (l.stylesheets && jh(l, l.stylesheets), l.unsuspend) {
          var r = l.unsuspend;
          l.unsuspend = null, r();
        }
      }, 6e4 + n);
      0 < l.imgBytes && an === 0 && (an = 62500 * s0());
      var s = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && jh(l, l.stylesheets), l.unsuspend)) {
            var r = l.unsuspend;
            l.unsuspend = null, r();
          }
        },
        (l.imgBytes > an ? 50 : 800) + n
      );
      return l.unsuspend = u, function() {
        l.unsuspend = null, clearTimeout(c), clearTimeout(s);
      };
    } : null;
  }
  function Bh() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) jh(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Yh = null;
  function jh(l, n) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Yh = /* @__PURE__ */ new Map(), n.forEach(Gl, l), Yh = null, Bh.call(l));
  }
  function Gl(l, n) {
    if (!(n.state.loading & 4)) {
      var u = Yh.get(l);
      if (u) var c = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), Yh.set(l, u);
        for (var s = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), r = 0; r < s.length; r++) {
          var m = s[r];
          (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") && (u.set(m.dataset.precedence, m), c = m);
        }
        c && u.set(null, c);
      }
      s = n.instance, m = s.getAttribute("data-precedence"), r = u.get(m) || c, r === c && u.set(null, s), u.set(m, s), this.count++, c = Bh.bind(this), s.addEventListener("load", c), s.addEventListener("error", c), r ? r.parentNode.insertBefore(s, r.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(s, l.firstChild)), n.state.loading |= 4;
    }
  }
  var zr = {
    $$typeof: Be,
    Provider: null,
    Consumer: null,
    _currentValue: P,
    _currentValue2: P,
    _threadCount: 0
  };
  function b0(l, n, u, c, s, r, m, g, A) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = dn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = dn(0), this.hiddenUpdates = dn(null), this.identifierPrefix = c, this.onUncaughtError = s, this.onCaughtError = r, this.onRecoverableError = m, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = A, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function qh(l, n, u, c, s, r, m, g, A, Y, Q, J) {
    return l = new b0(
      l,
      n,
      u,
      m,
      A,
      Y,
      Q,
      J,
      g
    ), n = 1, r === !0 && (n |= 24), r = il(3, null, null, n), l.current = r, r.stateNode = l, n = Ns(), n.refCount++, l.pooledCache = n, n.refCount++, r.memoizedState = {
      element: c,
      isDehydrated: u,
      cache: n
    }, ws(r), l;
  }
  function fo(l) {
    return l ? (l = da, l) : da;
  }
  function Gv(l, n, u, c, s, r) {
    s = fo(s), c.context === null ? c.context = s : c.pendingContext = s, c = oi(n), c.payload = { element: u }, r = r === void 0 ? null : r, r !== null && (c.callback = r), u = ka(l, c, n), u !== null && (Ta(u, l, n), $i(u, l, n));
  }
  function xh(l, n) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < n ? u : n;
    }
  }
  function E0(l, n) {
    xh(l, n), (l = l.alternate) && xh(l, n);
  }
  function wv(l) {
    if (l.tag === 13 || l.tag === 31) {
      var n = ei(l, 67108864);
      n !== null && Ta(n, l, 67108864), E0(l, 67108864);
    }
  }
  function so(l) {
    if (l.tag === 13 || l.tag === 31) {
      var n = Ua();
      n = td(n);
      var u = ei(l, n);
      u !== null && Ta(u, l, n), E0(l, n);
    }
  }
  var Dl = !0;
  function ju(l, n, u, c) {
    var s = D.T;
    D.T = null;
    var r = L.p;
    try {
      L.p = 2, kl(l, n, u, c);
    } finally {
      L.p = r, D.T = s;
    }
  }
  function qu(l, n, u, c) {
    var s = D.T;
    D.T = null;
    var r = L.p;
    try {
      L.p = 8, kl(l, n, u, c);
    } finally {
      L.p = r, D.T = s;
    }
  }
  function kl(l, n, u, c) {
    if (Dl) {
      var s = T0(c);
      if (s === null)
        n0(
          l,
          n,
          c,
          Gh,
          u
        ), Si(l, c);
      else if (cS(
        s,
        l,
        n,
        u,
        c
      ))
        c.stopPropagation();
      else if (Si(l, c), n & 4 && -1 < Oa.indexOf(l)) {
        for (; s !== null; ) {
          var r = Ec(s);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
                  var m = _t(r.pendingLanes);
                  if (m !== 0) {
                    var g = r;
                    for (g.pendingLanes |= 2, g.entangledLanes |= 2; m; ) {
                      var A = 1 << 31 - Ul(m);
                      g.entanglements[1] |= A, m &= ~A;
                    }
                    Bu(r), (ye & 6) === 0 && (Se = vl() + 500, vi(0));
                  }
                }
                break;
              case 31:
              case 13:
                g = ei(r, 2), g !== null && Ta(g, r, 2), Ef(), E0(r, 2);
            }
          if (r = T0(c), r === null && n0(
            l,
            n,
            c,
            Gh,
            u
          ), r === s) break;
          s = r;
        }
        s !== null && c.stopPropagation();
      } else
        n0(
          l,
          n,
          c,
          null,
          u
        );
    }
  }
  function T0(l) {
    return l = sd(l), jf(l);
  }
  var Gh = null;
  function jf(l) {
    if (Gh = null, l = bc(l), l !== null) {
      var n = xt(l);
      if (n === null) l = null;
      else {
        var u = n.tag;
        if (u === 13) {
          if (l = ve(n), l !== null) return l;
          l = null;
        } else if (u === 31) {
          if (l = tt(n), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          l = null;
        } else n !== l && (l = null);
      }
    }
    return Gh = l, null;
  }
  function _r(l) {
    switch (l) {
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
        switch (Ir()) {
          case Mo:
            return 2;
          case Co:
            return 8;
          case Mn:
          case Pr:
            return 32;
          case Uo:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var qf = !1, Rl = null, Wl = null, ua = null, rc = /* @__PURE__ */ new Map(), zn = /* @__PURE__ */ new Map(), We = [], Oa = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Si(l, n) {
    switch (l) {
      case "focusin":
      case "focusout":
        Rl = null;
        break;
      case "dragenter":
      case "dragleave":
        Wl = null;
        break;
      case "mouseover":
      case "mouseout":
        ua = null;
        break;
      case "pointerover":
      case "pointerout":
        rc.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        zn.delete(n.pointerId);
    }
  }
  function ro(l, n, u, c, s, r) {
    return l === null || l.nativeEvent !== r ? (l = {
      blockedOn: n,
      domEventName: u,
      eventSystemFlags: c,
      nativeEvent: r,
      targetContainers: [s]
    }, n !== null && (n = Ec(n), n !== null && wv(n)), l) : (l.eventSystemFlags |= c, n = l.targetContainers, s !== null && n.indexOf(s) === -1 && n.push(s), l);
  }
  function cS(l, n, u, c, s) {
    switch (n) {
      case "focusin":
        return Rl = ro(
          Rl,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "dragenter":
        return Wl = ro(
          Wl,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "mouseover":
        return ua = ro(
          ua,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "pointerover":
        var r = s.pointerId;
        return rc.set(
          r,
          ro(
            rc.get(r) || null,
            l,
            n,
            u,
            c,
            s
          )
        ), !0;
      case "gotpointercapture":
        return r = s.pointerId, zn.set(
          r,
          ro(
            zn.get(r) || null,
            l,
            n,
            u,
            c,
            s
          )
        ), !0;
    }
    return !1;
  }
  function Xv(l) {
    var n = bc(l.target);
    if (n !== null) {
      var u = xt(n);
      if (u !== null) {
        if (n = u.tag, n === 13) {
          if (n = ve(u), n !== null) {
            l.blockedOn = n, Tm(l.priority, function() {
              so(u);
            });
            return;
          }
        } else if (n === 31) {
          if (n = tt(u), n !== null) {
            l.blockedOn = n, Tm(l.priority, function() {
              so(u);
            });
            return;
          }
        } else if (n === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Dr(l) {
    if (l.blockedOn !== null) return !1;
    for (var n = l.targetContainers; 0 < n.length; ) {
      var u = T0(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var c = new u.constructor(
          u.type,
          u
        );
        fd = c, u.target.dispatchEvent(c), fd = null;
      } else
        return n = Ec(u), n !== null && wv(n), l.blockedOn = u, !1;
      n.shift();
    }
    return !0;
  }
  function xf(l, n, u) {
    Dr(l) && u.delete(n);
  }
  function Qv() {
    qf = !1, Rl !== null && Dr(Rl) && (Rl = null), Wl !== null && Dr(Wl) && (Wl = null), ua !== null && Dr(ua) && (ua = null), rc.forEach(xf), zn.forEach(xf);
  }
  function xu(l, n) {
    l.blockedOn === n && (l.blockedOn = null, qf || (qf = !0, W.unstable_scheduleCallback(
      W.unstable_NormalPriority,
      Qv
    )));
  }
  var Gf = null;
  function Lv(l) {
    Gf !== l && (Gf = l, W.unstable_scheduleCallback(
      W.unstable_NormalPriority,
      function() {
        Gf === l && (Gf = null);
        for (var n = 0; n < l.length; n += 3) {
          var u = l[n], c = l[n + 1], s = l[n + 2];
          if (typeof c != "function") {
            if (jf(c || u) === null)
              continue;
            break;
          }
          var r = Ec(u);
          r !== null && (l.splice(n, 3), n -= 3, of(
            r,
            {
              pending: !0,
              data: s,
              method: u.method,
              action: c
            },
            c,
            s
          ));
        }
      }
    ));
  }
  function wf(l) {
    function n(A) {
      return xu(A, l);
    }
    Rl !== null && xu(Rl, l), Wl !== null && xu(Wl, l), ua !== null && xu(ua, l), rc.forEach(n), zn.forEach(n);
    for (var u = 0; u < We.length; u++) {
      var c = We[u];
      c.blockedOn === l && (c.blockedOn = null);
    }
    for (; 0 < We.length && (u = We[0], u.blockedOn === null); )
      Xv(u), u.blockedOn === null && We.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (c = 0; c < u.length; c += 3) {
        var s = u[c], r = u[c + 1], m = s[fa] || null;
        if (typeof r == "function")
          m || Lv(u);
        else if (m) {
          var g = null;
          if (r && r.hasAttribute("formAction")) {
            if (s = r, m = r[fa] || null)
              g = m.formAction;
            else if (jf(s) !== null) continue;
          } else g = m.action;
          typeof g == "function" ? u[c + 1] = g : (u.splice(c, 3), c -= 3), Lv(u);
        }
      }
  }
  function A0() {
    function l(r) {
      r.canIntercept && r.info === "react-transition" && r.intercept({
        handler: function() {
          return new Promise(function(m) {
            return s = m;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function n() {
      s !== null && (s(), s = null), c || setTimeout(u, 20);
    }
    function u() {
      if (!c && !navigation.transition) {
        var r = navigation.currentEntry;
        r && r.url != null && navigation.navigate(r.url, {
          state: r.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var c = !1, s = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", n), navigation.addEventListener("navigateerror", n), setTimeout(u, 100), function() {
        c = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", n), navigation.removeEventListener("navigateerror", n), s !== null && (s(), s = null);
      };
    }
  }
  function wh(l) {
    this._internalRoot = l;
  }
  Xh.prototype.render = wh.prototype.render = function(l) {
    var n = this._internalRoot;
    if (n === null) throw Error(H(409));
    var u = n.current, c = Ua();
    Gv(u, c, l, n, null, null);
  }, Xh.prototype.unmount = wh.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var n = l.containerInfo;
      Gv(l.current, 2, null, l, null, null), Ef(), n[Ui] = null;
    }
  };
  function Xh(l) {
    this._internalRoot = l;
  }
  Xh.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var n = ed();
      l = { blockedOn: null, target: l, priority: n };
      for (var u = 0; u < We.length && n !== 0 && n < We[u].priority; u++) ;
      We.splice(u, 0, l), u === 0 && Xv(l);
    }
  };
  var O0 = lt.version;
  if (O0 !== "19.2.3")
    throw Error(
      H(
        527,
        O0,
        "19.2.3"
      )
    );
  L.findDOMNode = function(l) {
    var n = l._reactInternals;
    if (n === void 0)
      throw typeof l.render == "function" ? Error(H(188)) : (l = Object.keys(l).join(","), Error(H(268, l)));
    return l = $(n), l = l !== null ? Ht(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var Vv = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: D,
    reconcilerVersion: "19.2.3"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Rr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Rr.isDisabled && Rr.supportsFiber)
      try {
        rn = Rr.inject(
          Vv
        ), Al = Rr;
      } catch {
      }
  }
  return gp.createRoot = function(l, n) {
    if (!Rt(l)) throw Error(H(299));
    var u = !1, c = "", s = Id, r = zy, m = Pd;
    return n != null && (n.unstable_strictMode === !0 && (u = !0), n.identifierPrefix !== void 0 && (c = n.identifierPrefix), n.onUncaughtError !== void 0 && (s = n.onUncaughtError), n.onCaughtError !== void 0 && (r = n.onCaughtError), n.onRecoverableError !== void 0 && (m = n.onRecoverableError)), n = qh(
      l,
      1,
      !1,
      null,
      null,
      u,
      c,
      null,
      s,
      r,
      m,
      A0
    ), l[Ui] = n.current, Df(l), new wh(n);
  }, gp.hydrateRoot = function(l, n, u) {
    if (!Rt(l)) throw Error(H(299));
    var c = !1, s = "", r = Id, m = zy, g = Pd, A = null;
    return u != null && (u.unstable_strictMode === !0 && (c = !0), u.identifierPrefix !== void 0 && (s = u.identifierPrefix), u.onUncaughtError !== void 0 && (r = u.onUncaughtError), u.onCaughtError !== void 0 && (m = u.onCaughtError), u.onRecoverableError !== void 0 && (g = u.onRecoverableError), u.formState !== void 0 && (A = u.formState)), n = qh(
      l,
      1,
      !0,
      n,
      u ?? null,
      c,
      s,
      A,
      r,
      m,
      g,
      A0
    ), n.context = fo(null), u = n.current, c = Ua(), c = td(c), s = oi(c), s.callback = null, ka(u, s, c), u = c, n.current.lanes = u, Ci(n, u), Bu(n), l[Ui] = n.current, Df(l), new Xh(n);
  }, gp.version = "19.2.3", gp;
}
var Sp = {};
var L2;
function DT() {
  return L2 || (L2 = 1, process.env.NODE_ENV !== "production" && (function() {
    function W(t, e) {
      for (t = t.memoizedState; t !== null && 0 < e; )
        t = t.next, e--;
      return t;
    }
    function lt(t, e, a, i) {
      if (a >= e.length) return i;
      var o = e[a], f = bl(t) ? t.slice() : kt({}, t);
      return f[o] = lt(t[o], e, a + 1, i), f;
    }
    function qt(t, e, a) {
      if (e.length !== a.length)
        console.warn("copyWithRename() expects paths of the same length");
      else {
        for (var i = 0; i < a.length - 1; i++)
          if (e[i] !== a[i]) {
            console.warn(
              "copyWithRename() expects paths to be the same except for the deepest key"
            );
            return;
          }
        return H(t, e, a, 0);
      }
    }
    function H(t, e, a, i) {
      var o = e[i], f = bl(t) ? t.slice() : kt({}, t);
      return i + 1 === e.length ? (f[a[i]] = f[o], bl(f) ? f.splice(o, 1) : delete f[o]) : f[o] = H(
        t[o],
        e,
        a,
        i + 1
      ), f;
    }
    function Rt(t, e, a) {
      var i = e[a], o = bl(t) ? t.slice() : kt({}, t);
      return a + 1 === e.length ? (bl(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = Rt(t[i], e, a + 1), o);
    }
    function xt() {
      return !1;
    }
    function ve() {
      return null;
    }
    function tt() {
      console.error(
        "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
      );
    }
    function nt() {
      console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      );
    }
    function $() {
    }
    function Ht() {
    }
    function X(t) {
      var e = [];
      return t.forEach(function(a) {
        e.push(a);
      }), e.sort().join(", ");
    }
    function U(t, e, a, i) {
      return new Pg(t, e, a, i);
    }
    function it(t, e) {
      t.context === Vf && (zh(t.current, 2, e, t, null, null), tn());
    }
    function Vt(t, e) {
      if (Xu !== null) {
        var a = e.staleFamilies;
        e = e.updatedFamilies, ur(), Yp(
          t.current,
          e,
          a
        ), tn();
      }
    }
    function De(t) {
      Xu = t;
    }
    function fe(t) {
      return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
    }
    function le(t) {
      var e = t, a = t;
      if (t.alternate) for (; e.return; ) e = e.return;
      else {
        t = e;
        do
          e = t, (e.flags & 4098) !== 0 && (a = e.return), t = e.return;
        while (t);
      }
      return e.tag === 3 ? a : null;
    }
    function Tl(t) {
      if (t.tag === 13) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
      }
      return null;
    }
    function Be(t) {
      if (t.tag === 31) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
      }
      return null;
    }
    function Je(t) {
      if (le(t) !== t)
        throw Error("Unable to find node on an unmounted component.");
    }
    function tl(t) {
      var e = t.alternate;
      if (!e) {
        if (e = le(t), e === null)
          throw Error("Unable to find node on an unmounted component.");
        return e !== t ? null : t;
      }
      for (var a = t, i = e; ; ) {
        var o = a.return;
        if (o === null) break;
        var f = o.alternate;
        if (f === null) {
          if (i = o.return, i !== null) {
            a = i;
            continue;
          }
          break;
        }
        if (o.child === f.child) {
          for (f = o.child; f; ) {
            if (f === a) return Je(o), t;
            if (f === i) return Je(o), e;
            f = f.sibling;
          }
          throw Error("Unable to find node on an unmounted component.");
        }
        if (a.return !== i.return) a = o, i = f;
        else {
          for (var d = !1, h = o.child; h; ) {
            if (h === a) {
              d = !0, a = o, i = f;
              break;
            }
            if (h === i) {
              d = !0, i = o, a = f;
              break;
            }
            h = h.sibling;
          }
          if (!d) {
            for (h = f.child; h; ) {
              if (h === a) {
                d = !0, a = f, i = o;
                break;
              }
              if (h === i) {
                d = !0, i = f, a = o;
                break;
              }
              h = h.sibling;
            }
            if (!d)
              throw Error(
                "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue."
              );
          }
        }
        if (a.alternate !== i)
          throw Error(
            "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
          );
      }
      if (a.tag !== 3)
        throw Error("Unable to find node on an unmounted component.");
      return a.stateNode.current === a ? t : e;
    }
    function ul(t) {
      var e = t.tag;
      if (e === 5 || e === 26 || e === 27 || e === 6) return t;
      for (t = t.child; t !== null; ) {
        if (e = ul(t), e !== null) return e;
        t = t.sibling;
      }
      return null;
    }
    function zt(t) {
      return t === null || typeof t != "object" ? null : (t = qv && t[qv] || t["@@iterator"], typeof t == "function" ? t : null);
    }
    function Zt(t) {
      if (t == null) return null;
      if (typeof t == "function")
        return t.$$typeof === Uf ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case Mf:
          return "Fragment";
        case Tr:
          return "Profiler";
        case Aa:
          return "StrictMode";
        case co:
          return "Suspense";
        case Ha:
          return "SuspenseList";
        case In:
          return "Activity";
      }
      if (typeof t == "object")
        switch (typeof t.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), t.$$typeof) {
          case oc:
            return "Portal";
          case Fn:
            return t.displayName || "Context";
          case Ch:
            return (t._context.displayName || "Context") + ".Consumer";
          case Cf:
            var e = t.render;
            return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
          case Ar:
            return e = t.displayName || null, e !== null ? e : Zt(t.type) || "Memo";
          case na:
            e = t._payload, t = t._init;
            try {
              return Zt(t(e));
            } catch {
            }
        }
      return null;
    }
    function _e(t) {
      return typeof t.tag == "number" ? st(t) : typeof t.name == "string" ? t.name : null;
    }
    function st(t) {
      var e = t.type;
      switch (t.tag) {
        case 31:
          return "Activity";
        case 24:
          return "Cache";
        case 9:
          return (e._context.displayName || "Context") + ".Consumer";
        case 10:
          return e.displayName || "Context";
        case 18:
          return "DehydratedFragment";
        case 11:
          return t = e.render, t = t.displayName || t.name || "", e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 26:
        case 27:
        case 5:
          return e;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return Zt(e);
        case 8:
          return e === Aa ? "StrictMode" : "Mode";
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
        case 14:
        case 15:
          if (typeof e == "function")
            return e.displayName || e.name || null;
          if (typeof e == "string") return e;
          break;
        case 29:
          if (e = t._debugInfo, e != null) {
            for (var a = e.length - 1; 0 <= a; a--)
              if (typeof e[a].name == "string") return e[a].name;
          }
          if (t.return !== null)
            return st(t.return);
      }
      return null;
    }
    function Ye(t) {
      return { current: t };
    }
    function yt(t, e) {
      0 > gi ? console.error("Unexpected pop.") : (e !== y0[gi] && console.error("Unexpected Fiber popped."), t.current = m0[gi], m0[gi] = null, y0[gi] = null, gi--);
    }
    function jt(t, e, a) {
      gi++, m0[gi] = t.current, y0[gi] = a, t.current = e;
    }
    function Qe(t) {
      return t === null && console.error(
        "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."
      ), t;
    }
    function je(t, e) {
      jt(ln, e, t), jt(Hf, t, t), jt(fc, null, t);
      var a = e.nodeType;
      switch (a) {
        case 9:
        case 11:
          a = a === 9 ? "#document" : "#fragment", e = (e = e.documentElement) && (e = e.namespaceURI) ? sv(e) : _o;
          break;
        default:
          if (a = e.tagName, e = e.namespaceURI)
            e = sv(e), e = yi(
              e,
              a
            );
          else
            switch (a) {
              case "svg":
                e = vm;
                break;
              case "math":
                e = Yg;
                break;
              default:
                e = _o;
            }
      }
      a = a.toLowerCase(), a = _m(null, a), a = {
        context: e,
        ancestorInfo: a
      }, yt(fc, t), jt(fc, a, t);
    }
    function D(t) {
      yt(fc, t), yt(Hf, t), yt(ln, t);
    }
    function L() {
      return Qe(fc.current);
    }
    function P(t) {
      t.memoizedState !== null && jt(sc, t, t);
      var e = Qe(fc.current), a = t.type, i = yi(e.context, a);
      a = _m(e.ancestorInfo, a), i = { context: i, ancestorInfo: a }, e !== i && (jt(Hf, t, t), jt(fc, i, t));
    }
    function pt(t) {
      Hf.current === t && (yt(fc, t), yt(Hf, t)), sc.current === t && (yt(sc, t), hp._currentValue = Fr);
    }
    function At() {
    }
    function S() {
      if (Nf === 0) {
        xv = console.log, oo = console.info, Bf = console.warn, p0 = console.error, Or = console.group, Uh = console.groupCollapsed, Hh = console.groupEnd;
        var t = {
          configurable: !0,
          enumerable: !0,
          value: At,
          writable: !0
        };
        Object.defineProperties(console, {
          info: t,
          log: t,
          warn: t,
          error: t,
          group: t,
          groupCollapsed: t,
          groupEnd: t
        });
      }
      Nf++;
    }
    function B() {
      if (Nf--, Nf === 0) {
        var t = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: kt({}, t, { value: xv }),
          info: kt({}, t, { value: oo }),
          warn: kt({}, t, { value: Bf }),
          error: kt({}, t, { value: p0 }),
          group: kt({}, t, { value: Or }),
          groupCollapsed: kt({}, t, { value: Uh }),
          groupEnd: kt({}, t, { value: Hh })
        });
      }
      0 > Nf && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function F(t) {
      var e = Error.prepareStackTrace;
      if (Error.prepareStackTrace = void 0, t = t.stack, Error.prepareStackTrace = e, t.startsWith(`Error: react-stack-top-frame
`) && (t = t.slice(29)), e = t.indexOf(`
`), e !== -1 && (t = t.slice(e + 1)), e = t.indexOf("react_stack_bottom_frame"), e !== -1 && (e = t.lastIndexOf(
        `
`,
        e
      )), e !== -1)
        t = t.slice(0, e);
      else return "";
      return t;
    }
    function k(t) {
      if (Yf === void 0)
        try {
          throw Error();
        } catch (a) {
          var e = a.stack.trim().match(/\n( *(at )?)/);
          Yf = e && e[1] || "", v0 = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + Yf + t + v0;
    }
    function gt(t, e) {
      if (!t || Nh) return "";
      var a = g0.get(t);
      if (a !== void 0) return a;
      Nh = !0, a = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var i = null;
      i = G.H, G.H = null, S();
      try {
        var o = {
          DetermineComponentFrameRoot: function() {
            try {
              if (e) {
                var E = function() {
                  throw Error();
                };
                if (Object.defineProperty(E.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(E, []);
                  } catch (at) {
                    var q = at;
                  }
                  Reflect.construct(t, [], E);
                } else {
                  try {
                    E.call();
                  } catch (at) {
                    q = at;
                  }
                  t.call(E.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (at) {
                  q = at;
                }
                (E = t()) && typeof E.catch == "function" && E.catch(function() {
                });
              }
            } catch (at) {
              if (at && q && typeof at.stack == "string")
                return [at.stack, q.stack];
            }
            return [null, null];
          }
        };
        o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var f = Object.getOwnPropertyDescriptor(
          o.DetermineComponentFrameRoot,
          "name"
        );
        f && f.configurable && Object.defineProperty(
          o.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var d = o.DetermineComponentFrameRoot(), h = d[0], y = d[1];
        if (h && y) {
          var p = h.split(`
`), z = y.split(`
`);
          for (d = f = 0; f < p.length && !p[f].includes(
            "DetermineComponentFrameRoot"
          ); )
            f++;
          for (; d < z.length && !z[d].includes(
            "DetermineComponentFrameRoot"
          ); )
            d++;
          if (f === p.length || d === z.length)
            for (f = p.length - 1, d = z.length - 1; 1 <= f && 0 <= d && p[f] !== z[d]; )
              d--;
          for (; 1 <= f && 0 <= d; f--, d--)
            if (p[f] !== z[d]) {
              if (f !== 1 || d !== 1)
                do
                  if (f--, d--, 0 > d || p[f] !== z[d]) {
                    var R = `
` + p[f].replace(
                      " at new ",
                      " at "
                    );
                    return t.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", t.displayName)), typeof t == "function" && g0.set(t, R), R;
                  }
                while (1 <= f && 0 <= d);
              break;
            }
        }
      } finally {
        Nh = !1, G.H = i, B(), Error.prepareStackTrace = a;
      }
      return p = (p = t ? t.displayName || t.name : "") ? k(p) : "", typeof t == "function" && g0.set(t, p), p;
    }
    function Gt(t, e) {
      switch (t.tag) {
        case 26:
        case 27:
        case 5:
          return k(t.type);
        case 16:
          return k("Lazy");
        case 13:
          return t.child !== e && e !== null ? k("Suspense Fallback") : k("Suspense");
        case 19:
          return k("SuspenseList");
        case 0:
        case 15:
          return gt(t.type, !1);
        case 11:
          return gt(t.type.render, !1);
        case 1:
          return gt(t.type, !0);
        case 31:
          return k("Activity");
        default:
          return "";
      }
    }
    function Et(t) {
      try {
        var e = "", a = null;
        do {
          e += Gt(t, a);
          var i = t._debugInfo;
          if (i)
            for (var o = i.length - 1; 0 <= o; o--) {
              var f = i[o];
              if (typeof f.name == "string") {
                var d = e;
                t: {
                  var h = f.name, y = f.env, p = f.debugLocation;
                  if (p != null) {
                    var z = F(p), R = z.lastIndexOf(`
`), E = R === -1 ? z : z.slice(R + 1);
                    if (E.indexOf(h) !== -1) {
                      var q = `
` + E;
                      break t;
                    }
                  }
                  q = k(
                    h + (y ? " [" + y + "]" : "")
                  );
                }
                e = d + q;
              }
            }
          a = t, t = t.return;
        } while (t);
        return e;
      } catch (at) {
        return `
Error generating stack: ` + at.message + `
` + at.stack;
      }
    }
    function Le(t) {
      return (t = t ? t.displayName || t.name : "") ? k(t) : "";
    }
    function he() {
      if (Na === null) return null;
      var t = Na._debugOwner;
      return t != null ? _e(t) : null;
    }
    function qa() {
      if (Na === null) return "";
      var t = Na;
      try {
        var e = "";
        switch (t.tag === 6 && (t = t.return), t.tag) {
          case 26:
          case 27:
          case 5:
            e += k(t.type);
            break;
          case 13:
            e += k("Suspense");
            break;
          case 19:
            e += k("SuspenseList");
            break;
          case 31:
            e += k("Activity");
            break;
          case 30:
          case 0:
          case 15:
          case 1:
            t._debugOwner || e !== "" || (e += Le(
              t.type
            ));
            break;
          case 11:
            t._debugOwner || e !== "" || (e += Le(
              t.type.render
            ));
        }
        for (; t; )
          if (typeof t.tag == "number") {
            var a = t;
            t = a._debugOwner;
            var i = a._debugStack;
            if (t && i) {
              var o = F(i);
              o !== "" && (e += `
` + o);
            }
          } else if (t.debugStack != null) {
            var f = t.debugStack;
            (t = t.owner) && f && (e += `
` + F(f));
          } else break;
        var d = e;
      } catch (h) {
        d = `
Error generating stack: ` + h.message + `
` + h.stack;
      }
      return d;
    }
    function ct(t, e, a, i, o, f, d) {
      var h = Na;
      _i(t);
      try {
        return t !== null && t._debugTask ? t._debugTask.run(
          e.bind(null, a, i, o, f, d)
        ) : e(a, i, o, f, d);
      } finally {
        _i(h);
      }
      throw Error(
        "runWithFiberInDEV should never be called in production. This is a bug in React."
      );
    }
    function _i(t) {
      G.getCurrentStack = t === null ? null : qa, Yu = !1, Na = t;
    }
    function Di(t) {
      return typeof Symbol == "function" && Symbol.toStringTag && t[Symbol.toStringTag] || t.constructor.name || "Object";
    }
    function xa(t) {
      try {
        return uu(t), !1;
      } catch {
        return !0;
      }
    }
    function uu(t) {
      return "" + t;
    }
    function me(t, e) {
      if (xa(t))
        return console.error(
          "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",
          e,
          Di(t)
        ), uu(t);
    }
    function Pl(t, e) {
      if (xa(t))
        return console.error(
          "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",
          e,
          Di(t)
        ), uu(t);
    }
    function vc(t) {
      if (xa(t))
        return console.error(
          "Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",
          Di(t)
        ), uu(t);
    }
    function rs(t) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
      var e = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (e.isDisabled) return !0;
      if (!e.supportsFiber)
        return console.error(
          "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"
        ), !0;
      try {
        so = e.inject(t), Dl = e;
      } catch (a) {
        console.error("React instrumentation encountered an error: %o.", a);
      }
      return !!e.checkDCE;
    }
    function rt(t) {
      if (typeof E0 == "function" && wv(t), Dl && typeof Dl.setStrictMode == "function")
        try {
          Dl.setStrictMode(so, t);
        } catch (e) {
          ju || (ju = !0, console.error(
            "React instrumentation encountered an error: %o",
            e
          ));
        }
    }
    function Ri(t) {
      return t >>>= 0, t === 0 ? 32 : 31 - (T0(t) / Gh | 0) | 0;
    }
    function iu(t) {
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
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), t;
      }
    }
    function gc(t, e, a) {
      var i = t.pendingLanes;
      if (i === 0) return 0;
      var o = 0, f = t.suspendedLanes, d = t.pingedLanes;
      t = t.warmLanes;
      var h = i & 134217727;
      return h !== 0 ? (i = h & ~f, i !== 0 ? o = iu(i) : (d &= h, d !== 0 ? o = iu(d) : a || (a = h & ~t, a !== 0 && (o = iu(a))))) : (h = i & ~f, h !== 0 ? o = iu(h) : d !== 0 ? o = iu(d) : a || (a = i & ~t, a !== 0 && (o = iu(a)))), o === 0 ? 0 : e !== 0 && e !== o && (e & f) === 0 && (f = o & -o, a = e & -e, f >= a || f === 32 && (a & 4194048) !== 0) ? e : o;
    }
    function vl(t, e) {
      return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
    }
    function Ir(t, e) {
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
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), -1;
      }
    }
    function Mo() {
      var t = qf;
      return qf <<= 1, (qf & 62914560) === 0 && (qf = 4194304), t;
    }
    function Co(t) {
      for (var e = [], a = 0; 31 > a; a++) e.push(t);
      return e;
    }
    function Mn(t, e) {
      t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
    }
    function Pr(t, e, a, i, o, f) {
      var d = t.pendingLanes;
      t.pendingLanes = a, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= a, t.entangledLanes &= a, t.errorRecoveryDisabledLanes &= a, t.shellSuspendCounter = 0;
      var h = t.entanglements, y = t.expirationTimes, p = t.hiddenUpdates;
      for (a = d & ~a; 0 < a; ) {
        var z = 31 - kl(a), R = 1 << z;
        h[z] = 0, y[z] = -1;
        var E = p[z];
        if (E !== null)
          for (p[z] = null, z = 0; z < E.length; z++) {
            var q = E[z];
            q !== null && (q.lane &= -536870913);
          }
        a &= ~R;
      }
      i !== 0 && Uo(t, i, 0), f !== 0 && o === 0 && t.tag !== 0 && (t.suspendedLanes |= f & ~(d & ~e));
    }
    function Uo(t, e, a) {
      t.pendingLanes |= e, t.suspendedLanes &= ~e;
      var i = 31 - kl(e);
      t.entangledLanes |= e, t.entanglements[i] = t.entanglements[i] | 1073741824 | a & 261930;
    }
    function ds(t, e) {
      var a = t.entangledLanes |= e;
      for (t = t.entanglements; a; ) {
        var i = 31 - kl(a), o = 1 << i;
        o & e | t[i] & e && (t[i] |= e), a &= ~o;
      }
    }
    function Sc(t, e) {
      var a = e & -e;
      return a = (a & 42) !== 0 ? 1 : rn(a), (a & (t.suspendedLanes | e)) !== 0 ? 0 : a;
    }
    function rn(t) {
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
    function Al(t, e, a) {
      if (qu)
        for (t = t.pendingUpdatersLaneMap; 0 < a; ) {
          var i = 31 - kl(a), o = 1 << i;
          t[i].add(e), a &= ~o;
        }
    }
    function Ga(t, e) {
      if (qu)
        for (var a = t.pendingUpdatersLaneMap, i = t.memoizedUpdaters; 0 < e; ) {
          var o = 31 - kl(e);
          t = 1 << o, o = a[o], 0 < o.size && (o.forEach(function(f) {
            var d = f.alternate;
            d !== null && i.has(d) || i.add(f);
          }), o.clear()), e &= ~t;
        }
    }
    function Ul(t) {
      return t &= -t, Rl < t ? Wl < t ? (t & 134217727) !== 0 ? ua : rc : Wl : Rl;
    }
    function Mi() {
      var t = be.p;
      return t !== 0 ? t : (t = window.event, t === void 0 ? ua : Dh(t.type));
    }
    function v(t, e) {
      var a = be.p;
      try {
        return be.p = t, e();
      } finally {
        be.p = a;
      }
    }
    function M(t) {
      delete t[We], delete t[Oa], delete t[ro], delete t[cS], delete t[Xv];
    }
    function I(t) {
      var e = t[We];
      if (e) return e;
      for (var a = t.parentNode; a; ) {
        if (e = a[Si] || a[We]) {
          if (a = e.alternate, e.child !== null || a !== null && a.child !== null)
            for (t = ao(t); t !== null; ) {
              if (a = t[We])
                return a;
              t = ao(t);
            }
          return e;
        }
        t = a, a = t.parentNode;
      }
      return null;
    }
    function et(t) {
      if (t = t[We] || t[Si]) {
        var e = t.tag;
        if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
          return t;
      }
      return null;
    }
    function dt(t) {
      var e = t.tag;
      if (e === 5 || e === 26 || e === 27 || e === 6)
        return t.stateNode;
      throw Error("getNodeFromInstance: Invalid argument.");
    }
    function _t(t) {
      var e = t[Dr];
      return e || (e = t[Dr] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
    }
    function ht(t) {
      t[xf] = !0;
    }
    function Pt(t, e) {
      wt(t, e), wt(t + "Capture", e);
    }
    function wt(t, e) {
      xu[t] && console.error(
        "EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",
        t
      ), xu[t] = e;
      var a = t.toLowerCase();
      for (Gf[a] = t, t === "onDoubleClick" && (Gf.ondblclick = t), t = 0; t < e.length; t++)
        Qv.add(e[t]);
    }
    function ta(t, e) {
      Lv[e.type] || e.onChange || e.onInput || e.readOnly || e.disabled || e.value == null || console.error(
        t === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
      ), e.onChange || e.readOnly || e.disabled || e.checked == null || console.error(
        "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
      );
    }
    function dn(t) {
      return an.call(wh, t) ? !0 : an.call(A0, t) ? !1 : wf.test(t) ? wh[t] = !0 : (A0[t] = !0, console.error("Invalid attribute name: `%s`", t), !1);
    }
    function Ci(t, e, a) {
      if (dn(e)) {
        if (!t.hasAttribute(e)) {
          switch (typeof a) {
            case "symbol":
            case "object":
              return a;
            case "function":
              return a;
            case "boolean":
              if (a === !1) return a;
          }
          return a === void 0 ? void 0 : null;
        }
        return t = t.getAttribute(e), t === "" && a === !0 ? !0 : (me(a, e), t === "" + a ? a : t);
      }
    }
    function Ho(t, e, a) {
      if (dn(e))
        if (a === null) t.removeAttribute(e);
        else {
          switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
              t.removeAttribute(e);
              return;
            case "boolean":
              var i = e.toLowerCase().slice(0, 5);
              if (i !== "data-" && i !== "aria-") {
                t.removeAttribute(e);
                return;
              }
          }
          me(a, e), t.setAttribute(e, "" + a);
        }
    }
    function hs(t, e, a) {
      if (a === null) t.removeAttribute(e);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            t.removeAttribute(e);
            return;
        }
        me(a, e), t.setAttribute(e, "" + a);
      }
    }
    function cu(t, e, a, i) {
      if (i === null) t.removeAttribute(a);
      else {
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            t.removeAttribute(a);
            return;
        }
        me(i, a), t.setAttributeNS(e, a, "" + i);
      }
    }
    function wa(t) {
      switch (typeof t) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return t;
        case "object":
          return vc(t), t;
        default:
          return "";
      }
    }
    function td(t) {
      var e = t.type;
      return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
    }
    function Em(t, e, a) {
      var i = Object.getOwnPropertyDescriptor(
        t.constructor.prototype,
        e
      );
      if (!t.hasOwnProperty(e) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
        var o = i.get, f = i.set;
        return Object.defineProperty(t, e, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(d) {
            vc(d), a = "" + d, f.call(this, d);
          }
        }), Object.defineProperty(t, e, {
          enumerable: i.enumerable
        }), {
          getValue: function() {
            return a;
          },
          setValue: function(d) {
            vc(d), a = "" + d;
          },
          stopTracking: function() {
            t._valueTracker = null, delete t[e];
          }
        };
      }
    }
    function ed(t) {
      if (!t._valueTracker) {
        var e = td(t) ? "checked" : "value";
        t._valueTracker = Em(
          t,
          e,
          "" + t[e]
        );
      }
    }
    function Tm(t) {
      if (!t) return !1;
      var e = t._valueTracker;
      if (!e) return !0;
      var a = e.getValue(), i = "";
      return t && (i = td(t) ? t.checked ? "true" : "false" : t.value), t = i, t !== a ? (e.setValue(t), !0) : !1;
    }
    function Cn(t) {
      if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
      try {
        return t.activeElement || t.body;
      } catch {
        return t.body;
      }
    }
    function Re(t) {
      return t.replace(
        Xh,
        function(e) {
          return "\\" + e.charCodeAt(0).toString(16) + " ";
        }
      );
    }
    function fa(t, e) {
      e.checked === void 0 || e.defaultChecked === void 0 || Vv || (console.error(
        "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        he() || "A component",
        e.type
      ), Vv = !0), e.value === void 0 || e.defaultValue === void 0 || O0 || (console.error(
        "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        he() || "A component",
        e.type
      ), O0 = !0);
    }
    function Ui(t, e, a, i, o, f, d, h) {
      t.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? (me(d, "type"), t.type = d) : t.removeAttribute("type"), e != null ? d === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + wa(e)) : t.value !== "" + wa(e) && (t.value = "" + wa(e)) : d !== "submit" && d !== "reset" || t.removeAttribute("value"), e != null ? Am(t, d, wa(e)) : a != null ? Am(t, d, wa(a)) : i != null && t.removeAttribute("value"), o == null && f != null && (t.defaultChecked = !!f), o != null && (t.checked = o && typeof o != "function" && typeof o != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? (me(h, "name"), t.name = "" + wa(h)) : t.removeAttribute("name");
    }
    function ld(t, e, a, i, o, f, d, h) {
      if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (me(f, "type"), t.type = f), e != null || a != null) {
        if (!(f !== "submit" && f !== "reset" || e != null)) {
          ed(t);
          return;
        }
        a = a != null ? "" + wa(a) : "", e = e != null ? "" + wa(e) : a, h || e === t.value || (t.value = e), t.defaultValue = e;
      }
      i = i ?? o, i = typeof i != "function" && typeof i != "symbol" && !!i, t.checked = h ? t.checked : !!i, t.defaultChecked = !!i, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (me(d, "name"), t.name = d), ed(t);
    }
    function Am(t, e, a) {
      e === "number" && Cn(t.ownerDocument) === t || t.defaultValue === "" + a || (t.defaultValue = "" + a);
    }
    function Ep(t, e) {
      e.value == null && (typeof e.children == "object" && e.children !== null ? Er.Children.forEach(e.children, function(a) {
        a == null || typeof a == "string" || typeof a == "number" || typeof a == "bigint" || l || (l = !0, console.error(
          "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
        ));
      }) : e.dangerouslySetInnerHTML == null || n || (n = !0, console.error(
        "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
      ))), e.selected == null || Rr || (console.error(
        "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
      ), Rr = !0);
    }
    function Om() {
      var t = he();
      return t ? `

Check the render method of \`` + t + "`." : "";
    }
    function ou(t, e, a, i) {
      if (t = t.options, e) {
        e = {};
        for (var o = 0; o < a.length; o++)
          e["$" + a[o]] = !0;
        for (a = 0; a < t.length; a++)
          o = e.hasOwnProperty("$" + t[a].value), t[a].selected !== o && (t[a].selected = o), o && i && (t[a].defaultSelected = !0);
      } else {
        for (a = "" + wa(a), e = null, o = 0; o < t.length; o++) {
          if (t[o].value === a) {
            t[o].selected = !0, i && (t[o].defaultSelected = !0);
            return;
          }
          e !== null || t[o].disabled || (e = t[o]);
        }
        e !== null && (e.selected = !0);
      }
    }
    function ad(t, e) {
      for (t = 0; t < c.length; t++) {
        var a = c[t];
        if (e[a] != null) {
          var i = bl(e[a]);
          e.multiple && !i ? console.error(
            "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",
            a,
            Om()
          ) : !e.multiple && i && console.error(
            "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",
            a,
            Om()
          );
        }
      }
      e.value === void 0 || e.defaultValue === void 0 || u || (console.error(
        "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"
      ), u = !0);
    }
    function bc(t, e) {
      e.value === void 0 || e.defaultValue === void 0 || s || (console.error(
        "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",
        he() || "A component"
      ), s = !0), e.children != null && e.value == null && console.error(
        "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
      );
    }
    function Ec(t, e, a) {
      if (e != null && (e = "" + wa(e), e !== t.value && (t.value = e), a == null)) {
        t.defaultValue !== e && (t.defaultValue = e);
        return;
      }
      t.defaultValue = a != null ? "" + wa(a) : "";
    }
    function No(t, e, a, i) {
      if (e == null) {
        if (i != null) {
          if (a != null)
            throw Error(
              "If you supply `defaultValue` on a <textarea>, do not pass children."
            );
          if (bl(i)) {
            if (1 < i.length)
              throw Error("<textarea> can only have at most one child.");
            i = i[0];
          }
          a = i;
        }
        a == null && (a = ""), e = a;
      }
      a = wa(e), t.defaultValue = a, i = t.textContent, i === a && i !== "" && i !== null && (t.value = i), ed(t);
    }
    function Tc(t, e) {
      return t.serverProps === void 0 && t.serverTail.length === 0 && t.children.length === 1 && 3 < t.distanceFromLeaf && t.distanceFromLeaf > 15 - e ? Tc(t.children[0], e) : t;
    }
    function Ee(t) {
      return "  " + "  ".repeat(t);
    }
    function Ac(t) {
      return "+ " + "  ".repeat(t);
    }
    function Hi(t) {
      return "- " + "  ".repeat(t);
    }
    function Ni(t) {
      switch (t.tag) {
        case 26:
        case 27:
        case 5:
          return t.type;
        case 16:
          return "Lazy";
        case 31:
          return "Activity";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 0:
        case 15:
          return t = t.type, t.displayName || t.name || null;
        case 11:
          return t = t.type.render, t.displayName || t.name || null;
        case 1:
          return t = t.type, t.displayName || t.name || null;
        default:
          return null;
      }
    }
    function fu(t, e) {
      return r.test(t) ? (t = JSON.stringify(t), t.length > e - 2 ? 8 > e ? '{"..."}' : "{" + t.slice(0, e - 7) + '..."}' : "{" + t + "}") : t.length > e ? 5 > e ? '{"..."}' : t.slice(0, e - 3) + "..." : t;
    }
    function nd(t, e, a) {
      var i = 120 - 2 * a;
      if (e === null)
        return Ac(a) + fu(t, i) + `
`;
      if (typeof e == "string") {
        for (var o = 0; o < e.length && o < t.length && e.charCodeAt(o) === t.charCodeAt(o); o++) ;
        return o > i - 8 && 10 < o && (t = "..." + t.slice(o - 8), e = "..." + e.slice(o - 8)), Ac(a) + fu(t, i) + `
` + Hi(a) + fu(e, i) + `
`;
      }
      return Ee(a) + fu(t, i) + `
`;
    }
    function ud(t) {
      return Object.prototype.toString.call(t).replace(/^\[object (.*)\]$/, function(e, a) {
        return a;
      });
    }
    function Bo(t, e) {
      switch (typeof t) {
        case "string":
          return t = JSON.stringify(t), t.length > e ? 5 > e ? '"..."' : t.slice(0, e - 4) + '..."' : t;
        case "object":
          if (t === null) return "null";
          if (bl(t)) return "[...]";
          if (t.$$typeof === On)
            return (e = Zt(t.type)) ? "<" + e + ">" : "<...>";
          var a = ud(t);
          if (a === "Object") {
            a = "", e -= 2;
            for (var i in t)
              if (t.hasOwnProperty(i)) {
                var o = JSON.stringify(i);
                if (o !== '"' + i + '"' && (i = o), e -= i.length - 2, o = Bo(
                  t[i],
                  15 > e ? e : 15
                ), e -= o.length, 0 > e) {
                  a += a === "" ? "..." : ", ...";
                  break;
                }
                a += (a === "" ? "" : ",") + i + ":" + o;
              }
            return "{" + a + "}";
          }
          return a;
        case "function":
          return (e = t.displayName || t.name) ? "function " + e : "function";
        default:
          return String(t);
      }
    }
    function Yo(t, e) {
      return typeof t != "string" || r.test(t) ? "{" + Bo(t, e - 2) + "}" : t.length > e - 2 ? 5 > e ? '"..."' : '"' + t.slice(0, e - 5) + '..."' : '"' + t + '"';
    }
    function jo(t, e, a) {
      var i = 120 - a.length - t.length, o = [], f;
      for (f in e)
        if (e.hasOwnProperty(f) && f !== "children") {
          var d = Yo(
            e[f],
            120 - a.length - f.length - 1
          );
          i -= f.length + d.length + 2, o.push(f + "=" + d);
        }
      return o.length === 0 ? a + "<" + t + `>
` : 0 < i ? a + "<" + t + " " + o.join(" ") + `>
` : a + "<" + t + `
` + a + "  " + o.join(`
` + a + "  ") + `
` + a + `>
`;
    }
    function id(t, e, a) {
      var i = "", o = kt({}, e), f;
      for (f in t)
        if (t.hasOwnProperty(f)) {
          delete o[f];
          var d = 120 - 2 * a - f.length - 2, h = Bo(t[f], d);
          e.hasOwnProperty(f) ? (d = Bo(e[f], d), i += Ac(a) + f + ": " + h + `
`, i += Hi(a) + f + ": " + d + `
`) : i += Ac(a) + f + ": " + h + `
`;
        }
      for (var y in o)
        o.hasOwnProperty(y) && (t = Bo(
          o[y],
          120 - 2 * a - y.length - 2
        ), i += Hi(a) + y + ": " + t + `
`);
      return i;
    }
    function Fu(t, e, a, i) {
      var o = "", f = /* @__PURE__ */ new Map();
      for (p in a)
        a.hasOwnProperty(p) && f.set(
          p.toLowerCase(),
          p
        );
      if (f.size === 1 && f.has("children"))
        o += jo(
          t,
          e,
          Ee(i)
        );
      else {
        for (var d in e)
          if (e.hasOwnProperty(d) && d !== "children") {
            var h = 120 - 2 * (i + 1) - d.length - 1, y = f.get(d.toLowerCase());
            if (y !== void 0) {
              f.delete(d.toLowerCase());
              var p = e[d];
              y = a[y];
              var z = Yo(
                p,
                h
              );
              h = Yo(
                y,
                h
              ), typeof p == "object" && p !== null && typeof y == "object" && y !== null && ud(p) === "Object" && ud(y) === "Object" && (2 < Object.keys(p).length || 2 < Object.keys(y).length || -1 < z.indexOf("...") || -1 < h.indexOf("...")) ? o += Ee(i + 1) + d + `={{
` + id(
                p,
                y,
                i + 2
              ) + Ee(i + 1) + `}}
` : (o += Ac(i + 1) + d + "=" + z + `
`, o += Hi(i + 1) + d + "=" + h + `
`);
            } else
              o += Ee(i + 1) + d + "=" + Yo(e[d], h) + `
`;
          }
        f.forEach(function(R) {
          if (R !== "children") {
            var E = 120 - 2 * (i + 1) - R.length - 1;
            o += Hi(i + 1) + R + "=" + Yo(a[R], E) + `
`;
          }
        }), o = o === "" ? Ee(i) + "<" + t + `>
` : Ee(i) + "<" + t + `
` + o + Ee(i) + `>
`;
      }
      return t = a.children, e = e.children, typeof t == "string" || typeof t == "number" || typeof t == "bigint" ? (f = "", (typeof e == "string" || typeof e == "number" || typeof e == "bigint") && (f = "" + e), o += nd(f, "" + t, i + 1)) : (typeof e == "string" || typeof e == "number" || typeof e == "bigint") && (o = t == null ? o + nd("" + e, null, i + 1) : o + nd("" + e, void 0, i + 1)), o;
    }
    function Xa(t, e) {
      var a = Ni(t);
      if (a === null) {
        for (a = "", t = t.child; t; )
          a += Xa(t, e), t = t.sibling;
        return a;
      }
      return Ee(e) + "<" + a + `>
`;
    }
    function cd(t, e) {
      var a = Tc(t, e);
      if (a !== t && (t.children.length !== 1 || t.children[0] !== a))
        return Ee(e) + `...
` + cd(a, e + 1);
      a = "";
      var i = t.fiber._debugInfo;
      if (i)
        for (var o = 0; o < i.length; o++) {
          var f = i[o].name;
          typeof f == "string" && (a += Ee(e) + "<" + f + `>
`, e++);
        }
      if (i = "", o = t.fiber.pendingProps, t.fiber.tag === 6)
        i = nd(o, t.serverProps, e), e++;
      else if (f = Ni(t.fiber), f !== null)
        if (t.serverProps === void 0) {
          i = e;
          var d = 120 - 2 * i - f.length - 2, h = "";
          for (p in o)
            if (o.hasOwnProperty(p) && p !== "children") {
              var y = Yo(o[p], 15);
              if (d -= p.length + y.length + 2, 0 > d) {
                h += " ...";
                break;
              }
              h += " " + p + "=" + y;
            }
          i = Ee(i) + "<" + f + h + `>
`, e++;
        } else
          t.serverProps === null ? (i = jo(
            f,
            o,
            Ac(e)
          ), e++) : typeof t.serverProps == "string" ? console.error(
            "Should not have matched a non HostText fiber to a Text node. This is a bug in React."
          ) : (i = Fu(
            f,
            o,
            t.serverProps,
            e
          ), e++);
      var p = "";
      for (o = t.fiber.child, f = 0; o && f < t.children.length; )
        d = t.children[f], d.fiber === o ? (p += cd(d, e), f++) : p += Xa(o, e), o = o.sibling;
      for (o && 0 < t.children.length && (p += Ee(e) + `...
`), o = t.serverTail, t.serverProps === null && e--, t = 0; t < o.length; t++)
        f = o[t], p = typeof f == "string" ? p + (Hi(e) + fu(f, 120 - 2 * e) + `
`) : p + jo(
          f.type,
          f.props,
          Hi(e)
        );
      return a + i + p;
    }
    function zm(t) {
      try {
        return `

` + cd(t, 0);
      } catch {
        return "";
      }
    }
    function od(t, e, a) {
      for (var i = e, o = null, f = 0; i; )
        i === t && (f = 0), o = {
          fiber: i,
          children: o !== null ? [o] : [],
          serverProps: i === e ? a : i === t ? null : void 0,
          serverTail: [],
          distanceFromLeaf: f
        }, f++, i = i.return;
      return o !== null ? zm(o).replaceAll(/^[+-]/gm, ">") : "";
    }
    function _m(t, e) {
      var a = kt({}, t || Q), i = { tag: e };
      return g.indexOf(e) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), A.indexOf(e) !== -1 && (a.pTagInButtonScope = null), m.indexOf(e) !== -1 && e !== "address" && e !== "div" && e !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, e === "form" && (a.formTag = i), e === "a" && (a.aTagInScope = i), e === "button" && (a.buttonTagInScope = i), e === "nobr" && (a.nobrTagInScope = i), e === "p" && (a.pTagInButtonScope = i), e === "li" && (a.listItemTagAutoclosing = i), (e === "dd" || e === "dt") && (a.dlItemTagAutoclosing = i), e === "#document" || e === "html" ? a.containerTagInScope = null : a.containerTagInScope || (a.containerTagInScope = i), t !== null || e !== "#document" && e !== "html" && e !== "body" ? a.implicitRootScope === !0 && (a.implicitRootScope = !1) : a.implicitRootScope = !0, a;
    }
    function ms(t, e, a) {
      switch (e) {
        case "select":
          return t === "hr" || t === "option" || t === "optgroup" || t === "script" || t === "template" || t === "#text";
        case "optgroup":
          return t === "option" || t === "#text";
        case "option":
          return t === "#text";
        case "tr":
          return t === "th" || t === "td" || t === "style" || t === "script" || t === "template";
        case "tbody":
        case "thead":
        case "tfoot":
          return t === "tr" || t === "style" || t === "script" || t === "template";
        case "colgroup":
          return t === "col" || t === "template";
        case "table":
          return t === "caption" || t === "colgroup" || t === "tbody" || t === "tfoot" || t === "thead" || t === "style" || t === "script" || t === "template";
        case "head":
          return t === "base" || t === "basefont" || t === "bgsound" || t === "link" || t === "meta" || t === "title" || t === "noscript" || t === "noframes" || t === "style" || t === "script" || t === "template";
        case "html":
          if (a) break;
          return t === "head" || t === "body" || t === "frameset";
        case "frameset":
          return t === "frame";
        case "#document":
          if (!a) return t === "html";
      }
      switch (t) {
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return e !== "h1" && e !== "h2" && e !== "h3" && e !== "h4" && e !== "h5" && e !== "h6";
        case "rp":
        case "rt":
          return Y.indexOf(e) === -1;
        case "caption":
        case "col":
        case "colgroup":
        case "frameset":
        case "frame":
        case "tbody":
        case "td":
        case "tfoot":
        case "th":
        case "thead":
        case "tr":
          return e == null;
        case "head":
          return a || e === null;
        case "html":
          return a && e === "#document" || e === null;
        case "body":
          return a && (e === "#document" || e === "html") || e === null;
      }
      return !0;
    }
    function Kg(t, e) {
      switch (t) {
        case "address":
        case "article":
        case "aside":
        case "blockquote":
        case "center":
        case "details":
        case "dialog":
        case "dir":
        case "div":
        case "dl":
        case "fieldset":
        case "figcaption":
        case "figure":
        case "footer":
        case "header":
        case "hgroup":
        case "main":
        case "menu":
        case "nav":
        case "ol":
        case "p":
        case "section":
        case "summary":
        case "ul":
        case "pre":
        case "listing":
        case "table":
        case "hr":
        case "xmp":
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return e.pTagInButtonScope;
        case "form":
          return e.formTag || e.pTagInButtonScope;
        case "li":
          return e.listItemTagAutoclosing;
        case "dd":
        case "dt":
          return e.dlItemTagAutoclosing;
        case "button":
          return e.buttonTagInScope;
        case "a":
          return e.aTagInScope;
        case "nobr":
          return e.nobrTagInScope;
      }
      return null;
    }
    function Qa(t, e) {
      for (; t; ) {
        switch (t.tag) {
          case 5:
          case 26:
          case 27:
            if (t.type === e) return t;
        }
        t = t.return;
      }
      return null;
    }
    function ys(t, e) {
      e = e || Q;
      var a = e.current;
      if (e = (a = ms(
        t,
        a && a.tag,
        e.implicitRootScope
      ) ? null : a) ? null : Kg(t, e), e = a || e, !e) return !0;
      var i = e.tag;
      if (e = String(!!a) + "|" + t + "|" + i, J[e]) return !1;
      J[e] = !0;
      var o = (e = Na) ? Qa(e.return, i) : null, f = e !== null && o !== null ? od(o, e, null) : "", d = "<" + t + ">";
      return a ? (a = "", i === "table" && t === "tr" && (a += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), console.error(
        `In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,
        d,
        i,
        a,
        f
      )) : console.error(
        `In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,
        d,
        i,
        f
      ), e && (t = e.return, o === null || t === null || o === t && t._debugOwner === e._debugOwner || ct(o, function() {
        console.error(
          `<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,
          i,
          d
        );
      })), !1;
    }
    function ps(t, e, a) {
      if (a || ms("#text", e, !1))
        return !0;
      if (a = "#text|" + e, J[a]) return !1;
      J[a] = !0;
      var i = (a = Na) ? Qa(a, e) : null;
      return a = a !== null && i !== null ? od(
        i,
        a,
        a.tag !== 6 ? { children: null } : null
      ) : "", /\S/.test(t) ? console.error(
        `In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,
        e,
        a
      ) : console.error(
        `In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,
        e,
        a
      ), !1;
    }
    function Oc(t, e) {
      if (e) {
        var a = t.firstChild;
        if (a && a === t.lastChild && a.nodeType === 3) {
          a.nodeValue = e;
          return;
        }
      }
      t.textContent = e;
    }
    function qo(t) {
      return t.replace(C, function(e, a) {
        return a.toUpperCase();
      });
    }
    function Dm(t, e, a) {
      var i = e.indexOf("--") === 0;
      i || (-1 < e.indexOf("-") ? N.hasOwnProperty(e) && N[e] || (N[e] = !0, console.error(
        "Unsupported style property %s. Did you mean %s?",
        e,
        qo(e.replace(He, "ms-"))
      )) : Ot.test(e) ? N.hasOwnProperty(e) && N[e] || (N[e] = !0, console.error(
        "Unsupported vendor-prefixed style property %s. Did you mean %s?",
        e,
        e.charAt(0).toUpperCase() + e.slice(1)
      )) : !_.test(a) || Z.hasOwnProperty(a) && Z[a] || (Z[a] = !0, console.error(
        `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
        e,
        a.replace(_, "")
      )), typeof a == "number" && (isNaN(a) ? St || (St = !0, console.error(
        "`NaN` is an invalid value for the `%s` css style property.",
        e
      )) : isFinite(a) || re || (re = !0, console.error(
        "`Infinity` is an invalid value for the `%s` css style property.",
        e
      )))), a == null || typeof a == "boolean" || a === "" ? i ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : i ? t.setProperty(e, a) : typeof a != "number" || a === 0 || mt.has(e) ? e === "float" ? t.cssFloat = a : (Pl(a, e), t[e] = ("" + a).trim()) : t[e] = a + "px";
    }
    function Rm(t, e, a) {
      if (e != null && typeof e != "object")
        throw Error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      if (e && Object.freeze(e), t = t.style, a != null) {
        if (e) {
          var i = {};
          if (a) {
            for (var o in a)
              if (a.hasOwnProperty(o) && !e.hasOwnProperty(o))
                for (var f = j[o] || [o], d = 0; d < f.length; d++)
                  i[f[d]] = o;
          }
          for (var h in e)
            if (e.hasOwnProperty(h) && (!a || a[h] !== e[h]))
              for (o = j[h] || [h], f = 0; f < o.length; f++)
                i[o[f]] = h;
          h = {};
          for (var y in e)
            for (o = j[y] || [y], f = 0; f < o.length; f++)
              h[o[f]] = y;
          y = {};
          for (var p in i)
            if (o = i[p], (f = h[p]) && o !== f && (d = o + "," + f, !y[d])) {
              y[d] = !0, d = console;
              var z = e[o];
              d.error.call(
                d,
                "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
                z == null || typeof z == "boolean" || z === "" ? "Removing" : "Updating",
                o,
                f
              );
            }
        }
        for (var R in a)
          !a.hasOwnProperty(R) || e != null && e.hasOwnProperty(R) || (R.indexOf("--") === 0 ? t.setProperty(R, "") : R === "float" ? t.cssFloat = "" : t[R] = "");
        for (var E in e)
          p = e[E], e.hasOwnProperty(E) && a[E] !== p && Dm(t, E, p);
      } else
        for (i in e)
          e.hasOwnProperty(i) && Dm(t, i, e[i]);
    }
    function su(t) {
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
    function Tp(t) {
      return pe.get(t) || t;
    }
    function Ap(t, e) {
      if (an.call(Qh, e) && Qh[e])
        return !0;
      if (k2.test(e)) {
        if (t = "aria-" + e.slice(4).toLowerCase(), t = Zv.hasOwnProperty(t) ? t : null, t == null)
          return console.error(
            "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
            e
          ), Qh[e] = !0;
        if (e !== t)
          return console.error(
            "Invalid ARIA attribute `%s`. Did you mean `%s`?",
            e,
            t
          ), Qh[e] = !0;
      }
      if ($2.test(e)) {
        if (t = e.toLowerCase(), t = Zv.hasOwnProperty(t) ? t : null, t == null) return Qh[e] = !0, !1;
        e !== t && (console.error(
          "Unknown ARIA attribute `%s`. Did you mean `%s`?",
          e,
          t
        ), Qh[e] = !0);
      }
      return !0;
    }
    function Op(t, e) {
      var a = [], i;
      for (i in e)
        Ap(t, i) || a.push(i);
      e = a.map(function(o) {
        return "`" + o + "`";
      }).join(", "), a.length === 1 ? console.error(
        "Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        e,
        t
      ) : 1 < a.length && console.error(
        "Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        e,
        t
      );
    }
    function Mm(t, e, a, i) {
      if (an.call(nn, e) && nn[e])
        return !0;
      var o = e.toLowerCase();
      if (o === "onfocusin" || o === "onfocusout")
        return console.error(
          "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
        ), nn[e] = !0;
      if (typeof a == "function" && (t === "form" && e === "action" || t === "input" && e === "formAction" || t === "button" && e === "formAction"))
        return !0;
      if (i != null) {
        if (t = i.possibleRegistrationNames, i.registrationNameDependencies.hasOwnProperty(e))
          return !0;
        if (i = t.hasOwnProperty(o) ? t[o] : null, i != null)
          return console.error(
            "Invalid event handler property `%s`. Did you mean `%s`?",
            e,
            i
          ), nn[e] = !0;
        if (E1.test(e))
          return console.error(
            "Unknown event handler property `%s`. It will be ignored.",
            e
          ), nn[e] = !0;
      } else if (E1.test(e))
        return W2.test(e) && console.error(
          "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
          e
        ), nn[e] = !0;
      if (F2.test(e) || I2.test(e)) return !0;
      if (o === "innerhtml")
        return console.error(
          "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
        ), nn[e] = !0;
      if (o === "aria")
        return console.error(
          "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
        ), nn[e] = !0;
      if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
        return console.error(
          "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
          typeof a
        ), nn[e] = !0;
      if (typeof a == "number" && isNaN(a))
        return console.error(
          "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
          e
        ), nn[e] = !0;
      if (Pn.hasOwnProperty(o)) {
        if (o = Pn[o], o !== e)
          return console.error(
            "Invalid DOM property `%s`. Did you mean `%s`?",
            e,
            o
          ), nn[e] = !0;
      } else if (e !== o)
        return console.error(
          "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
          e,
          o
        ), nn[e] = !0;
      switch (e) {
        case "dangerouslySetInnerHTML":
        case "children":
        case "style":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          return !0;
        case "innerText":
        case "textContent":
          return !0;
      }
      switch (typeof a) {
        case "boolean":
          switch (e) {
            case "autoFocus":
            case "checked":
            case "multiple":
            case "muted":
            case "selected":
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
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
            case "capture":
            case "download":
            case "inert":
              return !0;
            default:
              return o = e.toLowerCase().slice(0, 5), o === "data-" || o === "aria-" ? !0 : (a ? console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                a,
                e,
                e,
                a,
                e
              ) : console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                a,
                e,
                e,
                a,
                e,
                e,
                e
              ), nn[e] = !0);
          }
        case "function":
        case "symbol":
          return nn[e] = !0, !1;
        case "string":
          if (a === "false" || a === "true") {
            switch (e) {
              case "checked":
              case "selected":
              case "multiple":
              case "muted":
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
              case "inert":
                break;
              default:
                return !0;
            }
            console.error(
              "Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",
              a,
              e,
              a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".',
              e,
              a
            ), nn[e] = !0;
          }
      }
      return !0;
    }
    function $g(t, e, a) {
      var i = [], o;
      for (o in e)
        Mm(t, o, e[o], a) || i.push(o);
      e = i.map(function(f) {
        return "`" + f + "`";
      }).join(", "), i.length === 1 ? console.error(
        "Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        e,
        t
      ) : 1 < i.length && console.error(
        "Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        e,
        t
      );
    }
    function vs(t) {
      return P2.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
    }
    function hn() {
    }
    function Un(t) {
      return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
    }
    function fd(t) {
      var e = et(t);
      if (e && (t = e.stateNode)) {
        var a = t[Oa] || null;
        t: switch (t = e.stateNode, e.type) {
          case "input":
            if (Ui(
              t,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ), e = a.name, a.type === "radio" && e != null) {
              for (a = t; a.parentNode; ) a = a.parentNode;
              for (me(e, "name"), a = a.querySelectorAll(
                'input[name="' + Re(
                  "" + e
                ) + '"][type="radio"]'
              ), e = 0; e < a.length; e++) {
                var i = a[e];
                if (i !== t && i.form === t.form) {
                  var o = i[Oa] || null;
                  if (!o)
                    throw Error(
                      "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported."
                    );
                  Ui(
                    i,
                    o.value,
                    o.defaultValue,
                    o.defaultValue,
                    o.checked,
                    o.defaultChecked,
                    o.type,
                    o.name
                  );
                }
              }
              for (e = 0; e < a.length; e++)
                i = a[e], i.form === t.form && Tm(i);
            }
            break t;
          case "textarea":
            Ec(t, a.value, a.defaultValue);
            break t;
          case "select":
            e = a.value, e != null && ou(t, !!a.multiple, e, !1);
        }
      }
    }
    function sd(t, e, a) {
      if (oS) return t(e, a);
      oS = !0;
      try {
        var i = t(e);
        return i;
      } finally {
        if (oS = !1, (Lh !== null || Vh !== null) && (tn(), Lh && (e = Lh, t = Vh, Vh = Lh = null, fd(e), t)))
          for (e = 0; e < t.length; e++) fd(t[e]);
      }
    }
    function ru(t, e) {
      var a = t.stateNode;
      if (a === null) return null;
      var i = a[Oa] || null;
      if (i === null) return null;
      a = i[e];
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
          (i = !i.disabled) || (t = t.type, i = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !i;
          break t;
        default:
          t = !1;
      }
      if (t) return null;
      if (a && typeof a != "function")
        throw Error(
          "Expected `" + e + "` listener to be a function, instead got a value of `" + typeof a + "` type."
        );
      return a;
    }
    function zc() {
      if (Jv) return Jv;
      var t, e = sS, a = e.length, i, o = "value" in Xf ? Xf.value : Xf.textContent, f = o.length;
      for (t = 0; t < a && e[t] === o[t]; t++) ;
      var d = a - t;
      for (i = 1; i <= d && e[a - i] === o[f - i]; i++) ;
      return Jv = o.slice(t, 1 < i ? 1 - i : void 0);
    }
    function gs(t) {
      var e = t.keyCode;
      return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
    }
    function xo() {
      return !0;
    }
    function Cm() {
      return !1;
    }
    function Hl(t) {
      function e(a, i, o, f, d) {
        this._reactName = a, this._targetInst = o, this.type = i, this.nativeEvent = f, this.target = d, this.currentTarget = null;
        for (var h in t)
          t.hasOwnProperty(h) && (a = t[h], this[h] = a ? a(f) : f[h]);
        return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? xo : Cm, this.isPropagationStopped = Cm, this;
      }
      return kt(e.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = xo);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = xo);
        },
        persist: function() {
        },
        isPersistent: xo
      }), e;
    }
    function Iu(t) {
      var e = this.nativeEvent;
      return e.getModifierState ? e.getModifierState(t) : (t = dE[t]) ? !!e[t] : !1;
    }
    function Ss() {
      return Iu;
    }
    function Go(t, e) {
      switch (t) {
        case "keyup":
          return OE.indexOf(e.keyCode) !== -1;
        case "keydown":
          return e.keyCode !== z1;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Pu(t) {
      return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
    }
    function Um(t, e) {
      switch (t) {
        case "compositionend":
          return Pu(e);
        case "keypress":
          return e.which !== D1 ? null : (M1 = !0, R1);
        case "textInput":
          return t = e.data, t === R1 && M1 ? null : t;
        default:
          return null;
      }
    }
    function rd(t, e) {
      if (Zh)
        return t === "compositionend" || !mS && Go(t, e) ? (t = zc(), Jv = sS = Xf = null, Zh = !1, t) : null;
      switch (t) {
        case "paste":
          return null;
        case "keypress":
          if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
            if (e.char && 1 < e.char.length)
              return e.char;
            if (e.which)
              return String.fromCharCode(e.which);
          }
          return null;
        case "compositionend":
          return _1 && e.locale !== "ko" ? null : e.data;
        default:
          return null;
      }
    }
    function Hm(t) {
      var e = t && t.nodeName && t.nodeName.toLowerCase();
      return e === "input" ? !!_E[t.type] : e === "textarea";
    }
    function dd(t) {
      if (!dc) return !1;
      t = "on" + t;
      var e = t in document;
      return e || (e = document.createElement("div"), e.setAttribute(t, "return;"), e = typeof e[t] == "function"), e;
    }
    function bs(t, e, a, i) {
      Lh ? Vh ? Vh.push(i) : Vh = [i] : Lh = i, e = $n(e, "onChange"), 0 < e.length && (a = new Kv(
        "onChange",
        "change",
        null,
        a,
        i
      ), t.push({ event: a, listeners: e }));
    }
    function zp(t) {
      Oe(t, 0);
    }
    function Kl(t) {
      var e = dt(t);
      if (Tm(e)) return t;
    }
    function Bi(t, e) {
      if (t === "change") return e;
    }
    function Es() {
      C0 && (C0.detachEvent("onpropertychange", wo), U0 = C0 = null);
    }
    function wo(t) {
      if (t.propertyName === "value" && Kl(U0)) {
        var e = [];
        bs(
          e,
          U0,
          t,
          Un(t)
        ), sd(zp, e);
      }
    }
    function kg(t, e, a) {
      t === "focusin" ? (Es(), C0 = e, U0 = a, C0.attachEvent("onpropertychange", wo)) : t === "focusout" && Es();
    }
    function Nm(t) {
      if (t === "selectionchange" || t === "keyup" || t === "keydown")
        return Kl(U0);
    }
    function Bm(t, e) {
      if (t === "click") return Kl(e);
    }
    function Ts(t, e) {
      if (t === "input" || t === "change")
        return Kl(e);
    }
    function hd(t, e) {
      return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
    }
    function Xo(t, e) {
      if (un(t, e)) return !0;
      if (typeof t != "object" || t === null || typeof e != "object" || e === null)
        return !1;
      var a = Object.keys(t), i = Object.keys(e);
      if (a.length !== i.length) return !1;
      for (i = 0; i < a.length; i++) {
        var o = a[i];
        if (!an.call(e, o) || !un(t[o], e[o]))
          return !1;
      }
      return !0;
    }
    function _p(t) {
      for (; t && t.firstChild; ) t = t.firstChild;
      return t;
    }
    function Dp(t, e) {
      var a = _p(t);
      t = 0;
      for (var i; a; ) {
        if (a.nodeType === 3) {
          if (i = t + a.textContent.length, t <= e && i >= e)
            return { node: a, offset: e - t };
          t = i;
        }
        t: {
          for (; a; ) {
            if (a.nextSibling) {
              a = a.nextSibling;
              break t;
            }
            a = a.parentNode;
          }
          a = void 0;
        }
        a = _p(a);
      }
    }
    function Rp(t, e) {
      return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Rp(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
    }
    function md(t) {
      t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
      for (var e = Cn(t.document); e instanceof t.HTMLIFrameElement; ) {
        try {
          var a = typeof e.contentWindow.location.href == "string";
        } catch {
          a = !1;
        }
        if (a) t = e.contentWindow;
        else break;
        e = Cn(t.document);
      }
      return e;
    }
    function Ym(t) {
      var e = t && t.nodeName && t.nodeName.toLowerCase();
      return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
    }
    function Mp(t, e, a) {
      var i = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
      pS || Jh == null || Jh !== Cn(i) || (i = Jh, "selectionStart" in i && Ym(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
        anchorNode: i.anchorNode,
        anchorOffset: i.anchorOffset,
        focusNode: i.focusNode,
        focusOffset: i.focusOffset
      }), H0 && Xo(H0, i) || (H0 = i, i = $n(yS, "onSelect"), 0 < i.length && (e = new Kv(
        "onSelect",
        "select",
        null,
        e,
        a
      ), t.push({ event: e, listeners: i }), e.target = Jh)));
    }
    function _c(t, e) {
      var a = {};
      return a[t.toLowerCase()] = e.toLowerCase(), a["Webkit" + t] = "webkit" + e, a["Moz" + t] = "moz" + e, a;
    }
    function Dc(t) {
      if (vS[t]) return vS[t];
      if (!Kh[t]) return t;
      var e = Kh[t], a;
      for (a in e)
        if (e.hasOwnProperty(a) && a in U1)
          return vS[t] = e[a];
      return t;
    }
    function Hn(t, e) {
      j1.set(t, e), Pt(e, [t]);
    }
    function Cp(t) {
      for (var e = kv, a = 0; a < t.length; a++) {
        var i = t[a];
        if (typeof i == "object" && i !== null)
          if (bl(i) && i.length === 2 && typeof i[0] == "string") {
            if (e !== kv && e !== TS)
              return bS;
            e = TS;
          } else return bS;
        else {
          if (typeof i == "function" || typeof i == "string" && 50 < i.length || e !== kv && e !== ES)
            return bS;
          e = ES;
        }
      }
      return e;
    }
    function jm(t, e, a, i) {
      for (var o in t)
        an.call(t, o) && o[0] !== "_" && du(o, t[o], e, a, i);
    }
    function du(t, e, a, i, o) {
      switch (typeof e) {
        case "object":
          if (e === null) {
            e = "null";
            break;
          } else {
            if (e.$$typeof === On) {
              var f = Zt(e.type) || "…", d = e.key;
              e = e.props;
              var h = Object.keys(e), y = h.length;
              if (d == null && y === 0) {
                e = "<" + f + " />";
                break;
              }
              if (3 > i || y === 1 && h[0] === "children" && d == null) {
                e = "<" + f + " … />";
                break;
              }
              a.push([
                o + "  ".repeat(i) + t,
                "<" + f
              ]), d !== null && du(
                "key",
                d,
                a,
                i + 1,
                o
              ), t = !1;
              for (var p in e)
                p === "children" ? e.children != null && (!bl(e.children) || 0 < e.children.length) && (t = !0) : an.call(e, p) && p[0] !== "_" && du(
                  p,
                  e[p],
                  a,
                  i + 1,
                  o
                );
              a.push([
                "",
                t ? ">…</" + f + ">" : "/>"
              ]);
              return;
            }
            if (f = Object.prototype.toString.call(e), f = f.slice(8, f.length - 1), f === "Array") {
              if (p = Cp(e), p === ES || p === kv) {
                e = JSON.stringify(e);
                break;
              } else if (p === TS) {
                for (a.push([
                  o + "  ".repeat(i) + t,
                  ""
                ]), t = 0; t < e.length; t++)
                  f = e[t], du(
                    f[0],
                    f[1],
                    a,
                    i + 1,
                    o
                  );
                return;
              }
            }
            if (f === "Promise") {
              if (e.status === "fulfilled") {
                if (f = a.length, du(
                  t,
                  e.value,
                  a,
                  i,
                  o
                ), a.length > f) {
                  a = a[f], a[1] = "Promise<" + (a[1] || "Object") + ">";
                  return;
                }
              } else if (e.status === "rejected" && (f = a.length, du(
                t,
                e.reason,
                a,
                i,
                o
              ), a.length > f)) {
                a = a[f], a[1] = "Rejected Promise<" + a[1] + ">";
                return;
              }
              a.push([
                "  ".repeat(i) + t,
                "Promise"
              ]);
              return;
            }
            f === "Object" && (p = Object.getPrototypeOf(e)) && typeof p.constructor == "function" && (f = p.constructor.name), a.push([
              o + "  ".repeat(i) + t,
              f === "Object" ? 3 > i ? "" : "…" : f
            ]), 3 > i && jm(e, a, i + 1, o);
            return;
          }
        case "function":
          e = e.name === "" ? "() => {}" : e.name + "() {}";
          break;
        case "string":
          e = e === NE ? "…" : JSON.stringify(e);
          break;
        case "undefined":
          e = "undefined";
          break;
        case "boolean":
          e = e ? "true" : "false";
          break;
        default:
          e = String(e);
      }
      a.push([
        o + "  ".repeat(i) + t,
        e
      ]);
    }
    function Up(t, e, a, i) {
      var o = !0;
      for (d in t)
        d in e || (a.push([
          Wv + "  ".repeat(i) + d,
          "…"
        ]), o = !1);
      for (var f in e)
        if (f in t) {
          var d = t[f], h = e[f];
          if (d !== h) {
            if (i === 0 && f === "children")
              o = "  ".repeat(i) + f, a.push(
                [Wv + o, "…"],
                [Fv + o, "…"]
              );
            else {
              if (!(3 <= i)) {
                if (typeof d == "object" && typeof h == "object" && d !== null && h !== null && d.$$typeof === h.$$typeof)
                  if (h.$$typeof === On) {
                    if (d.type === h.type && d.key === h.key) {
                      d = Zt(h.type) || "…", o = "  ".repeat(i) + f, d = "<" + d + " … />", a.push(
                        [Wv + o, d],
                        [Fv + o, d]
                      ), o = !1;
                      continue;
                    }
                  } else {
                    var y = Object.prototype.toString.call(d), p = Object.prototype.toString.call(h);
                    if (y === p && (p === "[object Object]" || p === "[object Array]")) {
                      y = [
                        G1 + "  ".repeat(i) + f,
                        p === "[object Array]" ? "Array" : ""
                      ], a.push(y), p = a.length, Up(
                        d,
                        h,
                        a,
                        i + 1
                      ) ? p === a.length && (y[1] = "Referentially unequal but deeply equal objects. Consider memoization.") : o = !1;
                      continue;
                    }
                  }
                else if (typeof d == "function" && typeof h == "function" && d.name === h.name && d.length === h.length && (y = Function.prototype.toString.call(d), p = Function.prototype.toString.call(h), y === p)) {
                  d = h.name === "" ? "() => {}" : h.name + "() {}", a.push([
                    G1 + "  ".repeat(i) + f,
                    d + " Referentially unequal function closure. Consider memoization."
                  ]);
                  continue;
                }
              }
              du(f, d, a, i, Wv), du(f, h, a, i, Fv);
            }
            o = !1;
          }
        } else
          a.push([
            Fv + "  ".repeat(i) + f,
            "…"
          ]), o = !1;
      return o;
    }
    function Nn(t) {
      se = t & 63 ? "Blocking" : t & 64 ? "Gesture" : t & 4194176 ? "Transition" : t & 62914560 ? "Suspense" : t & 2080374784 ? "Idle" : "Other";
    }
    function mn(t, e, a, i) {
      Fe && (Lf.start = e, Lf.end = a, ho.color = "warning", ho.tooltipText = i, ho.properties = null, (t = t._debugTask) ? t.run(
        performance.measure.bind(
          performance,
          i,
          Lf
        )
      ) : performance.measure(i, Lf));
    }
    function yd(t, e, a) {
      mn(t, e, a, "Reconnect");
    }
    function pd(t, e, a, i, o) {
      var f = st(t);
      if (f !== null && Fe) {
        var d = t.alternate, h = t.actualDuration;
        if (d === null || d.child !== t.child)
          for (var y = t.child; y !== null; y = y.sibling)
            h -= y.actualDuration;
        i = 0.5 > h ? i ? "tertiary-light" : "primary-light" : 10 > h ? i ? "tertiary" : "primary" : 100 > h ? i ? "tertiary-dark" : "primary-dark" : "error";
        var p = t.memoizedProps;
        h = t._debugTask, p !== null && d !== null && d.memoizedProps !== p ? (y = [BE], p = Up(
          d.memoizedProps,
          p,
          y,
          0
        ), 1 < y.length && (p && !Qf && (d.lanes & o) === 0 && 100 < t.actualDuration ? (Qf = !0, y[0] = YE, ho.color = "warning", ho.tooltipText = w1) : (ho.color = i, ho.tooltipText = f), ho.properties = y, Lf.start = e, Lf.end = a, h != null ? h.run(
          performance.measure.bind(
            performance,
            "​" + f,
            Lf
          )
        ) : performance.measure(
          "​" + f,
          Lf
        ))) : h != null ? h.run(
          console.timeStamp.bind(
            console,
            f,
            e,
            a,
            Gu,
            void 0,
            i
          )
        ) : console.timeStamp(
          f,
          e,
          a,
          Gu,
          void 0,
          i
        );
      }
    }
    function qm(t, e, a, i) {
      if (Fe) {
        var o = st(t);
        if (o !== null) {
          for (var f = null, d = [], h = 0; h < i.length; h++) {
            var y = i[h];
            f == null && y.source !== null && (f = y.source._debugTask), y = y.value, d.push([
              "Error",
              typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y)
            ]);
          }
          t.key !== null && du("key", t.key, d, 0, ""), t.memoizedProps !== null && jm(t.memoizedProps, d, 0, ""), f == null && (f = t._debugTask), t = {
            start: e,
            end: a,
            detail: {
              devtools: {
                color: "error",
                track: Gu,
                tooltipText: t.tag === 13 ? "Hydration failed" : "Error boundary caught an error",
                properties: d
              }
            }
          }, f ? f.run(
            performance.measure.bind(performance, "​" + o, t)
          ) : performance.measure("​" + o, t);
        }
      }
    }
    function Bn(t, e, a, i, o) {
      if (o !== null) {
        if (Fe) {
          var f = st(t);
          if (f !== null) {
            i = [];
            for (var d = 0; d < o.length; d++) {
              var h = o[d].value;
              i.push([
                "Error",
                typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h)
              ]);
            }
            t.key !== null && du("key", t.key, i, 0, ""), t.memoizedProps !== null && jm(t.memoizedProps, i, 0, ""), e = {
              start: e,
              end: a,
              detail: {
                devtools: {
                  color: "error",
                  track: Gu,
                  tooltipText: "A lifecycle or effect errored",
                  properties: i
                }
              }
            }, (t = t._debugTask) ? t.run(
              performance.measure.bind(
                performance,
                "​" + f,
                e
              )
            ) : performance.measure("​" + f, e);
          }
        }
      } else
        f = st(t), f !== null && Fe && (o = 1 > i ? "secondary-light" : 100 > i ? "secondary" : 500 > i ? "secondary-dark" : "error", (t = t._debugTask) ? t.run(
          console.timeStamp.bind(
            console,
            f,
            e,
            a,
            Gu,
            void 0,
            o
          )
        ) : console.timeStamp(
          f,
          e,
          a,
          Gu,
          void 0,
          o
        ));
    }
    function Wg(t, e, a, i) {
      if (Fe && !(e <= t)) {
        var o = (a & 738197653) === a ? "tertiary-dark" : "primary-dark";
        a = (a & 536870912) === a ? "Prepared" : (a & 201326741) === a ? "Hydrated" : "Render", i ? i.run(
          console.timeStamp.bind(
            console,
            a,
            t,
            e,
            se,
            ce,
            o
          )
        ) : console.timeStamp(
          a,
          t,
          e,
          se,
          ce,
          o
        );
      }
    }
    function Hp(t, e, a, i) {
      !Fe || e <= t || (a = (a & 738197653) === a ? "tertiary-dark" : "primary-dark", i ? i.run(
        console.timeStamp.bind(
          console,
          "Prewarm",
          t,
          e,
          se,
          ce,
          a
        )
      ) : console.timeStamp(
        "Prewarm",
        t,
        e,
        se,
        ce,
        a
      ));
    }
    function Np(t, e, a, i) {
      !Fe || e <= t || (a = (a & 738197653) === a ? "tertiary-dark" : "primary-dark", i ? i.run(
        console.timeStamp.bind(
          console,
          "Suspended",
          t,
          e,
          se,
          ce,
          a
        )
      ) : console.timeStamp(
        "Suspended",
        t,
        e,
        se,
        ce,
        a
      ));
    }
    function Fg(t, e, a, i, o, f) {
      if (Fe && !(e <= t)) {
        a = [];
        for (var d = 0; d < i.length; d++) {
          var h = i[d].value;
          a.push([
            "Recoverable Error",
            typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h)
          ]);
        }
        t = {
          start: t,
          end: e,
          detail: {
            devtools: {
              color: "primary-dark",
              track: se,
              trackGroup: ce,
              tooltipText: o ? "Hydration Failed" : "Recovered after Error",
              properties: a
            }
          }
        }, f ? f.run(
          performance.measure.bind(performance, "Recovered", t)
        ) : performance.measure("Recovered", t);
      }
    }
    function xm(t, e, a, i) {
      !Fe || e <= t || (i ? i.run(
        console.timeStamp.bind(
          console,
          "Errored",
          t,
          e,
          se,
          ce,
          "error"
        )
      ) : console.timeStamp(
        "Errored",
        t,
        e,
        se,
        ce,
        "error"
      ));
    }
    function Ig(t, e, a, i) {
      !Fe || e <= t || (i ? i.run(
        console.timeStamp.bind(
          console,
          a,
          t,
          e,
          se,
          ce,
          "secondary-light"
        )
      ) : console.timeStamp(
        a,
        t,
        e,
        se,
        ce,
        "secondary-light"
      ));
    }
    function Bp(t, e, a, i, o) {
      if (Fe && !(e <= t)) {
        for (var f = [], d = 0; d < a.length; d++) {
          var h = a[d].value;
          f.push([
            "Error",
            typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h)
          ]);
        }
        t = {
          start: t,
          end: e,
          detail: {
            devtools: {
              color: "error",
              track: se,
              trackGroup: ce,
              tooltipText: i ? "Remaining Effects Errored" : "Commit Errored",
              properties: f
            }
          }
        }, o ? o.run(
          performance.measure.bind(performance, "Errored", t)
        ) : performance.measure("Errored", t);
      }
    }
    function Gm(t, e, a) {
      !Fe || e <= t || console.timeStamp(
        "Animating",
        t,
        e,
        se,
        ce,
        "secondary-dark"
      );
    }
    function vd() {
      for (var t = $h, e = AS = $h = 0; e < t; ) {
        var a = wu[e];
        wu[e++] = null;
        var i = wu[e];
        wu[e++] = null;
        var o = wu[e];
        wu[e++] = null;
        var f = wu[e];
        if (wu[e++] = null, i !== null && o !== null) {
          var d = i.pending;
          d === null ? o.next = o : (o.next = d.next, d.next = o), i.pending = o;
        }
        f !== 0 && wm(a, o, f);
      }
    }
    function Qo(t, e, a, i) {
      wu[$h++] = t, wu[$h++] = e, wu[$h++] = a, wu[$h++] = i, AS |= i, t.lanes |= i, t = t.alternate, t !== null && (t.lanes |= i);
    }
    function Rc(t, e, a, i) {
      return Qo(t, e, a, i), As(t);
    }
    function ea(t, e) {
      return Qo(t, null, null, e), As(t);
    }
    function wm(t, e, a) {
      t.lanes |= a;
      var i = t.alternate;
      i !== null && (i.lanes |= a);
      for (var o = !1, f = t.return; f !== null; )
        f.childLanes |= a, i = f.alternate, i !== null && (i.childLanes |= a), f.tag === 22 && (t = f.stateNode, t === null || t._visibility & N0 || (o = !0)), t = f, f = f.return;
      return t.tag === 3 ? (f = t.stateNode, o && e !== null && (o = 31 - kl(a), t = f.hiddenUpdates, i = t[o], i === null ? t[o] = [e] : i.push(e), e.lane = a | 536870912), f) : null;
    }
    function As(t) {
      if (ip > FE)
        throw Zr = ip = 0, cp = l1 = null, Error(
          "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
        );
      Zr > IE && (Zr = 0, cp = null, console.error(
        "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
      )), t.alternate === null && (t.flags & 4098) !== 0 && An(t);
      for (var e = t, a = e.return; a !== null; )
        e.alternate === null && (e.flags & 4098) !== 0 && An(t), e = a, a = e.return;
      return e.tag === 3 ? e.stateNode : null;
    }
    function Yi(t) {
      if (Xu === null) return t;
      var e = Xu(t);
      return e === void 0 ? t : e.current;
    }
    function gd(t) {
      if (Xu === null) return t;
      var e = Xu(t);
      return e === void 0 ? t != null && typeof t.render == "function" && (e = Yi(t.render), t.render !== e) ? (e = { $$typeof: Cf, render: e }, t.displayName !== void 0 && (e.displayName = t.displayName), e) : t : e.current;
    }
    function Xm(t, e) {
      if (Xu === null) return !1;
      var a = t.elementType;
      e = e.type;
      var i = !1, o = typeof e == "object" && e !== null ? e.$$typeof : null;
      switch (t.tag) {
        case 1:
          typeof e == "function" && (i = !0);
          break;
        case 0:
          (typeof e == "function" || o === na) && (i = !0);
          break;
        case 11:
          (o === Cf || o === na) && (i = !0);
          break;
        case 14:
        case 15:
          (o === Ar || o === na) && (i = !0);
          break;
        default:
          return !1;
      }
      return !!(i && (t = Xu(a), t !== void 0 && t === Xu(e)));
    }
    function Mc(t) {
      Xu !== null && typeof WeakSet == "function" && (kh === null && (kh = /* @__PURE__ */ new WeakSet()), kh.add(t));
    }
    function Yp(t, e, a) {
      do {
        var i = t, o = i.alternate, f = i.child, d = i.sibling, h = i.tag;
        i = i.type;
        var y = null;
        switch (h) {
          case 0:
          case 15:
          case 1:
            y = i;
            break;
          case 11:
            y = i.render;
        }
        if (Xu === null)
          throw Error("Expected resolveFamily to be set during hot reload.");
        var p = !1;
        if (i = !1, y !== null && (y = Xu(y), y !== void 0 && (a.has(y) ? i = !0 : e.has(y) && (h === 1 ? i = !0 : p = !0))), kh !== null && (kh.has(t) || o !== null && kh.has(o)) && (i = !0), i && (t._debugNeedsRemount = !0), (i || p) && (o = ea(t, 2), o !== null && Ut(o, t, 2)), f === null || i || Yp(
          f,
          e,
          a
        ), d === null) break;
        t = d;
      } while (!0);
    }
    function Pg(t, e, a, i) {
      this.tag = t, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null, this.actualDuration = -0, this.actualStartTime = -1.1, this.treeBaseDuration = this.selfBaseDuration = -0, this._debugTask = this._debugStack = this._debugOwner = this._debugInfo = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, X1 || typeof Object.preventExtensions != "function" || Object.preventExtensions(this);
    }
    function Qm(t) {
      return t = t.prototype, !(!t || !t.isReactComponent);
    }
    function hu(t, e) {
      var a = t.alternate;
      switch (a === null ? (a = U(
        t.tag,
        e,
        t.key,
        t.mode
      ), a.elementType = t.elementType, a.type = t.type, a.stateNode = t.stateNode, a._debugOwner = t._debugOwner, a._debugStack = t._debugStack, a._debugTask = t._debugTask, a._debugHookTypes = t._debugHookTypes, a.alternate = t, t.alternate = a) : (a.pendingProps = e, a.type = t.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null, a.actualDuration = -0, a.actualStartTime = -1.1), a.flags = t.flags & 65011712, a.childLanes = t.childLanes, a.lanes = t.lanes, a.child = t.child, a.memoizedProps = t.memoizedProps, a.memoizedState = t.memoizedState, a.updateQueue = t.updateQueue, e = t.dependencies, a.dependencies = e === null ? null : {
        lanes: e.lanes,
        firstContext: e.firstContext,
        _debugThenableState: e._debugThenableState
      }, a.sibling = t.sibling, a.index = t.index, a.ref = t.ref, a.refCleanup = t.refCleanup, a.selfBaseDuration = t.selfBaseDuration, a.treeBaseDuration = t.treeBaseDuration, a._debugInfo = t._debugInfo, a._debugNeedsRemount = t._debugNeedsRemount, a.tag) {
        case 0:
        case 15:
          a.type = Yi(t.type);
          break;
        case 1:
          a.type = Yi(t.type);
          break;
        case 11:
          a.type = gd(t.type);
      }
      return a;
    }
    function Lm(t, e) {
      t.flags &= 65011714;
      var a = t.alternate;
      return a === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null, t.selfBaseDuration = 0, t.treeBaseDuration = 0) : (t.childLanes = a.childLanes, t.lanes = a.lanes, t.child = a.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = a.memoizedProps, t.memoizedState = a.memoizedState, t.updateQueue = a.updateQueue, t.type = a.type, e = a.dependencies, t.dependencies = e === null ? null : {
        lanes: e.lanes,
        firstContext: e.firstContext,
        _debugThenableState: e._debugThenableState
      }, t.selfBaseDuration = a.selfBaseDuration, t.treeBaseDuration = a.treeBaseDuration), t;
    }
    function Cc(t, e, a, i, o, f) {
      var d = 0, h = t;
      if (typeof t == "function")
        Qm(t) && (d = 1), h = Yi(h);
      else if (typeof t == "string")
        d = L(), d = Cv(t, a, d) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
      else
        t: switch (t) {
          case In:
            return e = U(31, a, e, o), e.elementType = In, e.lanes = f, e;
          case Mf:
            return Uc(
              a.children,
              o,
              f,
              e
            );
          case Aa:
            d = 8, o |= Ba, o |= bi;
            break;
          case Tr:
            return t = a, i = o, typeof t.id != "string" && console.error(
              'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
              typeof t.id
            ), e = U(12, t, e, i | Wt), e.elementType = Tr, e.lanes = f, e.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, e;
          case co:
            return e = U(13, a, e, o), e.elementType = co, e.lanes = f, e;
          case Ha:
            return e = U(19, a, e, o), e.elementType = Ha, e.lanes = f, e;
          default:
            if (typeof t == "object" && t !== null)
              switch (t.$$typeof) {
                case Fn:
                  d = 10;
                  break t;
                case Ch:
                  d = 9;
                  break t;
                case Cf:
                  d = 11, h = gd(h);
                  break t;
                case Ar:
                  d = 14;
                  break t;
                case na:
                  d = 16, h = null;
                  break t;
              }
            h = "", (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), t === null ? a = "null" : bl(t) ? a = "array" : t !== void 0 && t.$$typeof === On ? (a = "<" + (Zt(t.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : a = typeof t, (d = i ? _e(i) : null) && (h += `

Check the render method of \`` + d + "`."), d = 29, a = Error(
              "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (a + "." + h)
            ), h = null;
        }
      return e = U(d, a, e, o), e.elementType = t, e.type = h, e.lanes = f, e._debugOwner = i, e;
    }
    function ji(t, e, a) {
      return e = Cc(
        t.type,
        t.key,
        t.props,
        t._owner,
        e,
        a
      ), e._debugOwner = t._owner, e._debugStack = t._debugStack, e._debugTask = t._debugTask, e;
    }
    function Uc(t, e, a, i) {
      return t = U(7, t, i, e), t.lanes = a, t;
    }
    function Lo(t, e, a) {
      return t = U(6, t, null, e), t.lanes = a, t;
    }
    function Vm(t) {
      var e = U(18, null, null, Ct);
      return e.stateNode = t, e;
    }
    function Sd(t, e, a) {
      return e = U(
        4,
        t.children !== null ? t.children : [],
        t.key,
        e
      ), e.lanes = a, e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation
      }, e;
    }
    function sa(t, e) {
      if (typeof t == "object" && t !== null) {
        var a = OS.get(t);
        return a !== void 0 ? a : (e = {
          value: t,
          source: e,
          stack: Et(e)
        }, OS.set(t, e), e);
      }
      return {
        value: t,
        source: e,
        stack: Et(e)
      };
    }
    function Yn(t, e) {
      qi(), Wh[Fh++] = B0, Wh[Fh++] = Iv, Iv = t, B0 = e;
    }
    function Zm(t, e, a) {
      qi(), Qu[Lu++] = yo, Qu[Lu++] = po, Qu[Lu++] = Cr, Cr = t;
      var i = yo;
      t = po;
      var o = 32 - kl(i) - 1;
      i &= ~(1 << o), a += 1;
      var f = 32 - kl(e) + o;
      if (30 < f) {
        var d = o - o % 5;
        f = (i & (1 << d) - 1).toString(32), i >>= d, o -= d, yo = 1 << 32 - kl(e) + o | a << o | i, po = f + t;
      } else
        yo = 1 << f | a << o | i, po = t;
    }
    function bd(t) {
      qi(), t.return !== null && (Yn(t, 1), Zm(t, 1, 0));
    }
    function Ed(t) {
      for (; t === Iv; )
        Iv = Wh[--Fh], Wh[Fh] = null, B0 = Wh[--Fh], Wh[Fh] = null;
      for (; t === Cr; )
        Cr = Qu[--Lu], Qu[Lu] = null, po = Qu[--Lu], Qu[Lu] = null, yo = Qu[--Lu], Qu[Lu] = null;
    }
    function jp() {
      return qi(), Cr !== null ? { id: yo, overflow: po } : null;
    }
    function qp(t, e) {
      qi(), Qu[Lu++] = yo, Qu[Lu++] = po, Qu[Lu++] = Cr, yo = e.id, po = e.overflow, Cr = t;
    }
    function qi() {
      ie || console.error(
        "Expected to be hydrating. This is a bug in React. Please file an issue."
      );
    }
    function Hc(t, e) {
      if (t.return === null) {
        if (tu === null)
          tu = {
            fiber: t,
            children: [],
            serverProps: void 0,
            serverTail: [],
            distanceFromLeaf: e
          };
        else {
          if (tu.fiber !== t)
            throw Error(
              "Saw multiple hydration diff roots in a pass. This is a bug in React."
            );
          tu.distanceFromLeaf > e && (tu.distanceFromLeaf = e);
        }
        return tu;
      }
      var a = Hc(
        t.return,
        e + 1
      ).children;
      return 0 < a.length && a[a.length - 1].fiber === t ? (a = a[a.length - 1], a.distanceFromLeaf > e && (a.distanceFromLeaf = e), a) : (e = {
        fiber: t,
        children: [],
        serverProps: void 0,
        serverTail: [],
        distanceFromLeaf: e
      }, a.push(e), e);
    }
    function xp() {
      ie && console.error(
        "We should not be hydrating here. This is a bug in React. Please file a bug."
      );
    }
    function la(t, e) {
      hc || (t = Hc(t, 0), t.serverProps = null, e !== null && (e = _v(e), t.serverTail.push(e)));
    }
    function yn(t) {
      var e = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : !1, a = "", i = tu;
      throw i !== null && (tu = null, a = zm(i)), zs(
        sa(
          Error(
            "Hydration failed because the server rendered " + (e ? "text" : "HTML") + ` didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch` + a
          ),
          t
        )
      ), zS;
    }
    function Jm(t) {
      var e = t.stateNode, a = t.type, i = t.memoizedProps;
      switch (e[We] = t, e[Oa] = i, Ea(a, i), a) {
        case "dialog":
          Mt("cancel", e), Mt("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Mt("load", e);
          break;
        case "video":
        case "audio":
          for (a = 0; a < op.length; a++)
            Mt(op[a], e);
          break;
        case "source":
          Mt("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Mt("error", e), Mt("load", e);
          break;
        case "details":
          Mt("toggle", e);
          break;
        case "input":
          ta("input", i), Mt("invalid", e), fa(e, i), ld(
            e,
            i.value,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name,
            !0
          );
          break;
        case "option":
          Ep(e, i);
          break;
        case "select":
          ta("select", i), Mt("invalid", e), ad(e, i);
          break;
        case "textarea":
          ta("textarea", i), Mt("invalid", e), bc(e, i), No(
            e,
            i.value,
            i.defaultValue,
            i.children
          );
      }
      a = i.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || e.textContent === "" + a || i.suppressHydrationWarning === !0 || $y(e.textContent, a) ? (i.popover != null && (Mt("beforetoggle", e), Mt("toggle", e)), i.onScroll != null && Mt("scroll", e), i.onScrollEnd != null && Mt("scrollend", e), i.onClick != null && (e.onclick = hn), e = !0) : e = !1, e || yn(t, !0);
    }
    function Km(t) {
      for (za = t.return; za; )
        switch (za.tag) {
          case 5:
          case 31:
          case 13:
            Vu = !1;
            return;
          case 27:
          case 3:
            Vu = !0;
            return;
          default:
            za = za.return;
        }
    }
    function Nc(t) {
      if (t !== za) return !1;
      if (!ie)
        return Km(t), ie = !0, !1;
      var e = t.tag, a;
      if ((a = e !== 3 && e !== 27) && ((a = e === 5) && (a = t.type, a = !(a !== "form" && a !== "button") || Ef(t.type, t.memoizedProps)), a = !a), a && Ie) {
        for (a = Ie; a; ) {
          var i = Hc(t, 0), o = _v(a);
          i.serverTail.push(o), a = o.type === "Suspense" ? Of(a) : en(a.nextSibling);
        }
        yn(t);
      }
      if (Km(t), e === 13) {
        if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        Ie = Of(t);
      } else if (e === 31) {
        if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        Ie = Of(t);
      } else
        e === 27 ? (e = Ie, ic(t.type) ? (t = m1, m1 = null, Ie = t) : Ie = e) : Ie = za ? en(t.stateNode.nextSibling) : null;
      return !0;
    }
    function xi() {
      Ie = za = null, hc = ie = !1;
    }
    function Os() {
      var t = Zf;
      return t !== null && (sn === null ? sn = t : sn.push.apply(
        sn,
        t
      ), Zf = null), t;
    }
    function zs(t) {
      Zf === null ? Zf = [t] : Zf.push(t);
    }
    function Gi() {
      var t = tu;
      if (t !== null) {
        tu = null;
        for (var e = zm(t); 0 < t.children.length; )
          t = t.children[0];
        ct(t.fiber, function() {
          console.error(
            `A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,
            "https://react.dev/link/hydration-mismatch",
            e
          );
        });
      }
    }
    function Vo() {
      Ih = Pv = null, Ph = !1;
    }
    function pn(t, e, a) {
      jt(_S, e._currentValue, t), e._currentValue = a, jt(DS, e._currentRenderer, t), e._currentRenderer !== void 0 && e._currentRenderer !== null && e._currentRenderer !== L1 && console.error(
        "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
      ), e._currentRenderer = L1;
    }
    function jn(t, e) {
      t._currentValue = _S.current;
      var a = DS.current;
      yt(DS, e), t._currentRenderer = a, yt(_S, e);
    }
    function Td(t, e, a) {
      for (; t !== null; ) {
        var i = t.alternate;
        if ((t.childLanes & e) !== e ? (t.childLanes |= e, i !== null && (i.childLanes |= e)) : i !== null && (i.childLanes & e) !== e && (i.childLanes |= e), t === a) break;
        t = t.return;
      }
      t !== a && console.error(
        "Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function ti(t, e, a, i) {
      var o = t.child;
      for (o !== null && (o.return = t); o !== null; ) {
        var f = o.dependencies;
        if (f !== null) {
          var d = o.child;
          f = f.firstContext;
          t: for (; f !== null; ) {
            var h = f;
            f = o;
            for (var y = 0; y < e.length; y++)
              if (h.context === e[y]) {
                f.lanes |= a, h = f.alternate, h !== null && (h.lanes |= a), Td(
                  f.return,
                  a,
                  t
                ), i || (d = null);
                break t;
              }
            f = h.next;
          }
        } else if (o.tag === 18) {
          if (d = o.return, d === null)
            throw Error(
              "We just came from a parent so we must have had a parent. This is a bug in React."
            );
          d.lanes |= a, f = d.alternate, f !== null && (f.lanes |= a), Td(
            d,
            a,
            t
          ), d = null;
        } else d = o.child;
        if (d !== null) d.return = o;
        else
          for (d = o; d !== null; ) {
            if (d === t) {
              d = null;
              break;
            }
            if (o = d.sibling, o !== null) {
              o.return = d.return, d = o;
              break;
            }
            d = d.return;
          }
        o = d;
      }
    }
    function qn(t, e, a, i) {
      t = null;
      for (var o = e, f = !1; o !== null; ) {
        if (!f) {
          if ((o.flags & 524288) !== 0) f = !0;
          else if ((o.flags & 262144) !== 0) break;
        }
        if (o.tag === 10) {
          var d = o.alternate;
          if (d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          if (d = d.memoizedProps, d !== null) {
            var h = o.type;
            un(o.pendingProps.value, d.value) || (t !== null ? t.push(h) : t = [h]);
          }
        } else if (o === sc.current) {
          if (d = o.alternate, d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          d.memoizedState.memoizedState !== o.memoizedState.memoizedState && (t !== null ? t.push(hp) : t = [hp]);
        }
        o = o.return;
      }
      t !== null && ti(
        e,
        t,
        a,
        i
      ), e.flags |= 262144;
    }
    function Zo(t) {
      for (t = t.firstContext; t !== null; ) {
        if (!un(
          t.context._currentValue,
          t.memoizedValue
        ))
          return !0;
        t = t.next;
      }
      return !1;
    }
    function wi(t) {
      Pv = t, Ih = null, t = t.dependencies, t !== null && (t.firstContext = null);
    }
    function ge(t) {
      return Ph && console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      ), $m(Pv, t);
    }
    function _s(t, e) {
      return Pv === null && wi(t), $m(t, e);
    }
    function $m(t, e) {
      var a = e._currentValue;
      if (e = { context: e, memoizedValue: a, next: null }, Ih === null) {
        if (t === null)
          throw Error(
            "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
          );
        Ih = e, t.dependencies = {
          lanes: 0,
          firstContext: e,
          _debugThenableState: null
        }, t.flags |= 524288;
      } else Ih = Ih.next = e;
      return a;
    }
    function Ad() {
      return {
        controller: new xE(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function Bc(t) {
      t.controller.signal.aborted && console.warn(
        "A cache instance was retained after it was already freed. This likely indicates a bug in React."
      ), t.refCount++;
    }
    function Ds(t) {
      t.refCount--, 0 > t.refCount && console.warn(
        "A cache instance was released after it was already freed. This likely indicates a bug in React."
      ), t.refCount === 0 && GE(wE, function() {
        t.controller.abort();
      });
    }
    function mu(t, e, a) {
      (t & 127) !== 0 ? 0 > mc && (mc = Xl(), j0 = tg(e), RS = e, a != null && (MS = st(a)), (de & (Il | au)) !== oa && (pl = !0, Kf = Y0), t = Tf(), e = Nu(), t !== tm || e !== q0 ? tm = -1.1 : e !== null && (Kf = Y0), Nr = t, q0 = e) : (t & 4194048) !== 0 && 0 > Zu && (Zu = Xl(), x0 = tg(e), V1 = e, a != null && (Z1 = st(a)), 0 > bo) && (t = Tf(), e = Nu(), (t !== kf || e !== Br) && (kf = -1.1), $f = t, Br = e);
    }
    function Gp(t) {
      if (0 > mc) {
        mc = Xl(), j0 = t._debugTask != null ? t._debugTask : null, (de & (Il | au)) !== oa && (Kf = Y0);
        var e = Tf(), a = Nu();
        e !== tm || a !== q0 ? tm = -1.1 : a !== null && (Kf = Y0), Nr = e, q0 = a;
      }
      0 > Zu && (Zu = Xl(), x0 = t._debugTask != null ? t._debugTask : null, 0 > bo) && (t = Tf(), e = Nu(), (t !== kf || e !== Br) && (kf = -1.1), $f = t, Br = e);
    }
    function yu() {
      var t = Ur;
      return Ur = 0, t;
    }
    function Jo(t) {
      var e = Ur;
      return Ur = t, e;
    }
    function ra(t) {
      var e = Ur;
      return Ur += t, e;
    }
    function Yc() {
      Dt = Tt = -1.1;
    }
    function Ke() {
      var t = Tt;
      return Tt = -1.1, t;
    }
    function Nl(t) {
      0 <= t && (Tt = t);
    }
    function vn() {
      var t = fl;
      return fl = -0, t;
    }
    function La(t) {
      0 <= t && (fl = t);
    }
    function Va() {
      var t = nl;
      return nl = null, t;
    }
    function gn() {
      var t = pl;
      return pl = !1, t;
    }
    function ei(t) {
      cn = Xl(), 0 > t.actualStartTime && (t.actualStartTime = cn);
    }
    function Od(t) {
      if (0 <= cn) {
        var e = Xl() - cn;
        t.actualDuration += e, t.selfBaseDuration = e, cn = -1;
      }
    }
    function Rs(t) {
      if (0 <= cn) {
        var e = Xl() - cn;
        t.actualDuration += e, cn = -1;
      }
    }
    function da() {
      if (0 <= cn) {
        var t = Xl(), e = t - cn;
        cn = -1, Ur += e, fl += e, Dt = t;
      }
    }
    function wp(t) {
      nl === null && (nl = []), nl.push(t), go === null && (go = []), go.push(t);
    }
    function il() {
      cn = Xl(), 0 > Tt && (Tt = cn);
    }
    function jc(t) {
      for (var e = t.child; e; )
        t.actualDuration += e.actualDuration, e = e.sibling;
    }
    function li(t, e) {
      if (w0 === null) {
        var a = w0 = [];
        US = 0, Yr = Ky(), em = {
          status: "pending",
          value: void 0,
          then: function(i) {
            a.push(i);
          }
        };
      }
      return US++, e.then(km, km), e;
    }
    function km() {
      if (--US === 0 && (-1 < Zu || (bo = -1.1), w0 !== null)) {
        em !== null && (em.status = "fulfilled");
        var t = w0;
        w0 = null, Yr = 0, em = null;
        for (var e = 0; e < t.length; e++) (0, t[e])();
      }
    }
    function zd(t, e) {
      var a = [], i = {
        status: "pending",
        value: null,
        reason: null,
        then: function(o) {
          a.push(o);
        }
      };
      return t.then(
        function() {
          i.status = "fulfilled", i.value = e;
          for (var o = 0; o < a.length; o++) (0, a[o])(e);
        },
        function(o) {
          for (i.status = "rejected", i.reason = o, o = 0; o < a.length; o++)
            (0, a[o])(void 0);
        }
      ), i;
    }
    function ai() {
      var t = jr.current;
      return t !== null ? t : Xe.pooledCache;
    }
    function Ko(t, e) {
      e === null ? jt(jr, jr.current, t) : jt(jr, e.pool, t);
    }
    function Wm() {
      var t = ai();
      return t === null ? null : { parent: wl._currentValue, pool: t };
    }
    function _d() {
      return { didWarnAboutUncachedPromise: !1, thenables: [] };
    }
    function Fm(t) {
      return t = t.status, t === "fulfilled" || t === "rejected";
    }
    function Za(t, e, a) {
      G.actQueue !== null && (G.didUsePromise = !0);
      var i = t.thenables;
      if (a = i[a], a === void 0 ? i.push(e) : a !== e && (t.didWarnAboutUncachedPromise || (t.didWarnAboutUncachedPromise = !0, console.error(
        "A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework."
      )), e.then(hn, hn), e = a), e._debugInfo === void 0) {
        t = performance.now(), i = e.displayName;
        var o = {
          name: typeof i == "string" ? i : "Promise",
          start: t,
          end: t,
          value: e
        };
        e._debugInfo = [{ awaited: o }], e.status !== "fulfilled" && e.status !== "rejected" && (t = function() {
          o.end = performance.now();
        }, e.then(t, t));
      }
      switch (e.status) {
        case "fulfilled":
          return e.value;
        case "rejected":
          throw t = e.reason, Ms(t), t;
        default:
          if (typeof e.status == "string")
            e.then(hn, hn);
          else {
            if (t = Xe, t !== null && 100 < t.shellSuspendCounter)
              throw Error(
                "An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
              );
            t = e, t.status = "pending", t.then(
              function(f) {
                if (e.status === "pending") {
                  var d = e;
                  d.status = "fulfilled", d.value = f;
                }
              },
              function(f) {
                if (e.status === "pending") {
                  var d = e;
                  d.status = "rejected", d.reason = f;
                }
              }
            );
          }
          switch (e.status) {
            case "fulfilled":
              return e.value;
            case "rejected":
              throw t = e.reason, Ms(t), t;
          }
          throw xr = e, K0 = !0, lm;
      }
    }
    function Ja(t) {
      try {
        return ZE(t);
      } catch (e) {
        throw e !== null && typeof e == "object" && typeof e.then == "function" ? (xr = e, K0 = !0, lm) : e;
      }
    }
    function qc() {
      if (xr === null)
        throw Error(
          "Expected a suspended thenable. This is a bug in React. Please file an issue."
        );
      var t = xr;
      return xr = null, K0 = !1, t;
    }
    function Ms(t) {
      if (t === lm || t === og)
        throw Error(
          "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
        );
    }
    function rl(t) {
      var e = Ft;
      return t != null && (Ft = e === null ? t : e.concat(t)), e;
    }
    function _a() {
      var t = Ft;
      if (t != null) {
        for (var e = t.length - 1; 0 <= e; e--)
          if (t[e].name != null) {
            var a = t[e].debugTask;
            if (a != null) return a;
          }
      }
      return null;
    }
    function ha(t, e, a) {
      for (var i = Object.keys(t.props), o = 0; o < i.length; o++) {
        var f = i[o];
        if (f !== "children" && f !== "key") {
          e === null && (e = ji(t, a.mode, 0), e._debugInfo = Ft, e.return = a), ct(
            e,
            function(d) {
              console.error(
                "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                d
              );
            },
            f
          );
          break;
        }
      }
    }
    function xn(t) {
      var e = $0;
      return $0 += 1, am === null && (am = _d()), Za(am, t, e);
    }
    function Da(t, e) {
      e = e.props.ref, t.ref = e !== void 0 ? e : null;
    }
    function Gn(t, e) {
      throw e.$$typeof === jv ? Error(
        `A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`
      ) : (t = Object.prototype.toString.call(e), Error(
        "Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead."
      ));
    }
    function Sn(t, e) {
      var a = _a();
      a !== null ? a.run(
        Gn.bind(null, t, e)
      ) : Gn(t, e);
    }
    function Im(t, e) {
      var a = st(t) || "Component";
      rb[a] || (rb[a] = !0, e = e.displayName || e.name || "Component", t.tag === 3 ? console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,
        e,
        e,
        e
      ) : console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,
        e,
        e,
        a,
        e,
        a
      ));
    }
    function $o(t, e) {
      var a = _a();
      a !== null ? a.run(
        Im.bind(null, t, e)
      ) : Im(t, e);
    }
    function Dd(t, e) {
      var a = st(t) || "Component";
      db[a] || (db[a] = !0, e = String(e), t.tag === 3 ? console.error(
        `Symbols are not valid as a React child.
  root.render(%s)`,
        e
      ) : console.error(
        `Symbols are not valid as a React child.
  <%s>%s</%s>`,
        a,
        e,
        a
      ));
    }
    function Cs(t, e) {
      var a = _a();
      a !== null ? a.run(
        Dd.bind(null, t, e)
      ) : Dd(t, e);
    }
    function Bl(t) {
      function e(b, T) {
        if (t) {
          var O = b.deletions;
          O === null ? (b.deletions = [T], b.flags |= 16) : O.push(T);
        }
      }
      function a(b, T) {
        if (!t) return null;
        for (; T !== null; )
          e(b, T), T = T.sibling;
        return null;
      }
      function i(b) {
        for (var T = /* @__PURE__ */ new Map(); b !== null; )
          b.key !== null ? T.set(b.key, b) : T.set(b.index, b), b = b.sibling;
        return T;
      }
      function o(b, T) {
        return b = hu(b, T), b.index = 0, b.sibling = null, b;
      }
      function f(b, T, O) {
        return b.index = O, t ? (O = b.alternate, O !== null ? (O = O.index, O < T ? (b.flags |= 67108866, T) : O) : (b.flags |= 67108866, T)) : (b.flags |= 1048576, T);
      }
      function d(b) {
        return t && b.alternate === null && (b.flags |= 67108866), b;
      }
      function h(b, T, O, V) {
        return T === null || T.tag !== 6 ? (T = Lo(
          O,
          b.mode,
          V
        ), T.return = b, T._debugOwner = b, T._debugTask = b._debugTask, T._debugInfo = Ft, T) : (T = o(T, O), T.return = b, T._debugInfo = Ft, T);
      }
      function y(b, T, O, V) {
        var ut = O.type;
        return ut === Mf ? (T = z(
          b,
          T,
          O.props.children,
          V,
          O.key
        ), ha(O, T, b), T) : T !== null && (T.elementType === ut || Xm(T, O) || typeof ut == "object" && ut !== null && ut.$$typeof === na && Ja(ut) === T.type) ? (T = o(T, O.props), Da(T, O), T.return = b, T._debugOwner = O._owner, T._debugInfo = Ft, T) : (T = ji(O, b.mode, V), Da(T, O), T.return = b, T._debugInfo = Ft, T);
      }
      function p(b, T, O, V) {
        return T === null || T.tag !== 4 || T.stateNode.containerInfo !== O.containerInfo || T.stateNode.implementation !== O.implementation ? (T = Sd(O, b.mode, V), T.return = b, T._debugInfo = Ft, T) : (T = o(T, O.children || []), T.return = b, T._debugInfo = Ft, T);
      }
      function z(b, T, O, V, ut) {
        return T === null || T.tag !== 7 ? (T = Uc(
          O,
          b.mode,
          V,
          ut
        ), T.return = b, T._debugOwner = b, T._debugTask = b._debugTask, T._debugInfo = Ft, T) : (T = o(T, O), T.return = b, T._debugInfo = Ft, T);
      }
      function R(b, T, O) {
        if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint")
          return T = Lo(
            "" + T,
            b.mode,
            O
          ), T.return = b, T._debugOwner = b, T._debugTask = b._debugTask, T._debugInfo = Ft, T;
        if (typeof T == "object" && T !== null) {
          switch (T.$$typeof) {
            case On:
              return O = ji(
                T,
                b.mode,
                O
              ), Da(O, T), O.return = b, b = rl(T._debugInfo), O._debugInfo = Ft, Ft = b, O;
            case oc:
              return T = Sd(
                T,
                b.mode,
                O
              ), T.return = b, T._debugInfo = Ft, T;
            case na:
              var V = rl(T._debugInfo);
              return T = Ja(T), b = R(b, T, O), Ft = V, b;
          }
          if (bl(T) || zt(T))
            return O = Uc(
              T,
              b.mode,
              O,
              null
            ), O.return = b, O._debugOwner = b, O._debugTask = b._debugTask, b = rl(T._debugInfo), O._debugInfo = Ft, Ft = b, O;
          if (typeof T.then == "function")
            return V = rl(T._debugInfo), b = R(
              b,
              xn(T),
              O
            ), Ft = V, b;
          if (T.$$typeof === Fn)
            return R(
              b,
              _s(b, T),
              O
            );
          Sn(b, T);
        }
        return typeof T == "function" && $o(b, T), typeof T == "symbol" && Cs(b, T), null;
      }
      function E(b, T, O, V) {
        var ut = T !== null ? T.key : null;
        if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
          return ut !== null ? null : h(b, T, "" + O, V);
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case On:
              return O.key === ut ? (ut = rl(O._debugInfo), b = y(
                b,
                T,
                O,
                V
              ), Ft = ut, b) : null;
            case oc:
              return O.key === ut ? p(b, T, O, V) : null;
            case na:
              return ut = rl(O._debugInfo), O = Ja(O), b = E(
                b,
                T,
                O,
                V
              ), Ft = ut, b;
          }
          if (bl(O) || zt(O))
            return ut !== null ? null : (ut = rl(O._debugInfo), b = z(
              b,
              T,
              O,
              V,
              null
            ), Ft = ut, b);
          if (typeof O.then == "function")
            return ut = rl(O._debugInfo), b = E(
              b,
              T,
              xn(O),
              V
            ), Ft = ut, b;
          if (O.$$typeof === Fn)
            return E(
              b,
              T,
              _s(b, O),
              V
            );
          Sn(b, O);
        }
        return typeof O == "function" && $o(b, O), typeof O == "symbol" && Cs(b, O), null;
      }
      function q(b, T, O, V, ut) {
        if (typeof V == "string" && V !== "" || typeof V == "number" || typeof V == "bigint")
          return b = b.get(O) || null, h(T, b, "" + V, ut);
        if (typeof V == "object" && V !== null) {
          switch (V.$$typeof) {
            case On:
              return O = b.get(
                V.key === null ? O : V.key
              ) || null, b = rl(V._debugInfo), T = y(
                T,
                O,
                V,
                ut
              ), Ft = b, T;
            case oc:
              return b = b.get(
                V.key === null ? O : V.key
              ) || null, p(T, b, V, ut);
            case na:
              var Yt = rl(V._debugInfo);
              return V = Ja(V), T = q(
                b,
                T,
                O,
                V,
                ut
              ), Ft = Yt, T;
          }
          if (bl(V) || zt(V))
            return O = b.get(O) || null, b = rl(V._debugInfo), T = z(
              T,
              O,
              V,
              ut,
              null
            ), Ft = b, T;
          if (typeof V.then == "function")
            return Yt = rl(V._debugInfo), T = q(
              b,
              T,
              O,
              xn(V),
              ut
            ), Ft = Yt, T;
          if (V.$$typeof === Fn)
            return q(
              b,
              T,
              O,
              _s(T, V),
              ut
            );
          Sn(T, V);
        }
        return typeof V == "function" && $o(T, V), typeof V == "symbol" && Cs(T, V), null;
      }
      function at(b, T, O, V) {
        if (typeof O != "object" || O === null) return V;
        switch (O.$$typeof) {
          case On:
          case oc:
            Ht(b, T, O);
            var ut = O.key;
            if (typeof ut != "string") break;
            if (V === null) {
              V = /* @__PURE__ */ new Set(), V.add(ut);
              break;
            }
            if (!V.has(ut)) {
              V.add(ut);
              break;
            }
            ct(T, function() {
              console.error(
                "Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",
                ut
              );
            });
            break;
          case na:
            O = Ja(O), at(b, T, O, V);
        }
        return V;
      }
      function ot(b, T, O, V) {
        for (var ut = null, Yt = null, bt = null, vt = T, $t = T = 0, Pe = null; vt !== null && $t < O.length; $t++) {
          vt.index > $t ? (Pe = vt, vt = null) : Pe = vt.sibling;
          var Cl = E(
            b,
            vt,
            O[$t],
            V
          );
          if (Cl === null) {
            vt === null && (vt = Pe);
            break;
          }
          ut = at(
            b,
            Cl,
            O[$t],
            ut
          ), t && vt && Cl.alternate === null && e(b, vt), T = f(Cl, T, $t), bt === null ? Yt = Cl : bt.sibling = Cl, bt = Cl, vt = Pe;
        }
        if ($t === O.length)
          return a(b, vt), ie && Yn(b, $t), Yt;
        if (vt === null) {
          for (; $t < O.length; $t++)
            vt = R(b, O[$t], V), vt !== null && (ut = at(
              b,
              vt,
              O[$t],
              ut
            ), T = f(
              vt,
              T,
              $t
            ), bt === null ? Yt = vt : bt.sibling = vt, bt = vt);
          return ie && Yn(b, $t), Yt;
        }
        for (vt = i(vt); $t < O.length; $t++)
          Pe = q(
            vt,
            b,
            $t,
            O[$t],
            V
          ), Pe !== null && (ut = at(
            b,
            Pe,
            O[$t],
            ut
          ), t && Pe.alternate !== null && vt.delete(
            Pe.key === null ? $t : Pe.key
          ), T = f(
            Pe,
            T,
            $t
          ), bt === null ? Yt = Pe : bt.sibling = Pe, bt = Pe);
        return t && vt.forEach(function(Ro) {
          return e(b, Ro);
        }), ie && Yn(b, $t), Yt;
      }
      function Ze(b, T, O, V) {
        if (O == null)
          throw Error("An iterable object provided no iterator.");
        for (var ut = null, Yt = null, bt = T, vt = T = 0, $t = null, Pe = null, Cl = O.next(); bt !== null && !Cl.done; vt++, Cl = O.next()) {
          bt.index > vt ? ($t = bt, bt = null) : $t = bt.sibling;
          var Ro = E(b, bt, Cl.value, V);
          if (Ro === null) {
            bt === null && (bt = $t);
            break;
          }
          Pe = at(
            b,
            Ro,
            Cl.value,
            Pe
          ), t && bt && Ro.alternate === null && e(b, bt), T = f(Ro, T, vt), Yt === null ? ut = Ro : Yt.sibling = Ro, Yt = Ro, bt = $t;
        }
        if (Cl.done)
          return a(b, bt), ie && Yn(b, vt), ut;
        if (bt === null) {
          for (; !Cl.done; vt++, Cl = O.next())
            bt = R(b, Cl.value, V), bt !== null && (Pe = at(
              b,
              bt,
              Cl.value,
              Pe
            ), T = f(
              bt,
              T,
              vt
            ), Yt === null ? ut = bt : Yt.sibling = bt, Yt = bt);
          return ie && Yn(b, vt), ut;
        }
        for (bt = i(bt); !Cl.done; vt++, Cl = O.next())
          $t = q(
            bt,
            b,
            vt,
            Cl.value,
            V
          ), $t !== null && (Pe = at(
            b,
            $t,
            Cl.value,
            Pe
          ), t && $t.alternate !== null && bt.delete(
            $t.key === null ? vt : $t.key
          ), T = f(
            $t,
            T,
            vt
          ), Yt === null ? ut = $t : Yt.sibling = $t, Yt = $t);
        return t && bt.forEach(function(yT) {
          return e(b, yT);
        }), ie && Yn(b, vt), ut;
      }
      function oe(b, T, O, V) {
        if (typeof O == "object" && O !== null && O.type === Mf && O.key === null && (ha(O, null, b), O = O.props.children), typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case On:
              var ut = rl(O._debugInfo);
              t: {
                for (var Yt = O.key; T !== null; ) {
                  if (T.key === Yt) {
                    if (Yt = O.type, Yt === Mf) {
                      if (T.tag === 7) {
                        a(
                          b,
                          T.sibling
                        ), V = o(
                          T,
                          O.props.children
                        ), V.return = b, V._debugOwner = O._owner, V._debugInfo = Ft, ha(O, V, b), b = V;
                        break t;
                      }
                    } else if (T.elementType === Yt || Xm(
                      T,
                      O
                    ) || typeof Yt == "object" && Yt !== null && Yt.$$typeof === na && Ja(Yt) === T.type) {
                      a(
                        b,
                        T.sibling
                      ), V = o(T, O.props), Da(V, O), V.return = b, V._debugOwner = O._owner, V._debugInfo = Ft, b = V;
                      break t;
                    }
                    a(b, T);
                    break;
                  } else e(b, T);
                  T = T.sibling;
                }
                O.type === Mf ? (V = Uc(
                  O.props.children,
                  b.mode,
                  V,
                  O.key
                ), V.return = b, V._debugOwner = b, V._debugTask = b._debugTask, V._debugInfo = Ft, ha(O, V, b), b = V) : (V = ji(
                  O,
                  b.mode,
                  V
                ), Da(V, O), V.return = b, V._debugInfo = Ft, b = V);
              }
              return b = d(b), Ft = ut, b;
            case oc:
              t: {
                for (ut = O, O = ut.key; T !== null; ) {
                  if (T.key === O)
                    if (T.tag === 4 && T.stateNode.containerInfo === ut.containerInfo && T.stateNode.implementation === ut.implementation) {
                      a(
                        b,
                        T.sibling
                      ), V = o(
                        T,
                        ut.children || []
                      ), V.return = b, b = V;
                      break t;
                    } else {
                      a(b, T);
                      break;
                    }
                  else e(b, T);
                  T = T.sibling;
                }
                V = Sd(
                  ut,
                  b.mode,
                  V
                ), V.return = b, b = V;
              }
              return d(b);
            case na:
              return ut = rl(O._debugInfo), O = Ja(O), b = oe(
                b,
                T,
                O,
                V
              ), Ft = ut, b;
          }
          if (bl(O))
            return ut = rl(O._debugInfo), b = ot(
              b,
              T,
              O,
              V
            ), Ft = ut, b;
          if (zt(O)) {
            if (ut = rl(O._debugInfo), Yt = zt(O), typeof Yt != "function")
              throw Error(
                "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
              );
            var bt = Yt.call(O);
            return bt === O ? (b.tag !== 0 || Object.prototype.toString.call(b.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(bt) !== "[object Generator]") && (fb || console.error(
              "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
            ), fb = !0) : O.entries !== Yt || YS || (console.error(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), YS = !0), b = Ze(
              b,
              T,
              bt,
              V
            ), Ft = ut, b;
          }
          if (typeof O.then == "function")
            return ut = rl(O._debugInfo), b = oe(
              b,
              T,
              xn(O),
              V
            ), Ft = ut, b;
          if (O.$$typeof === Fn)
            return oe(
              b,
              T,
              _s(b, O),
              V
            );
          Sn(b, O);
        }
        return typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint" ? (ut = "" + O, T !== null && T.tag === 6 ? (a(
          b,
          T.sibling
        ), V = o(T, ut), V.return = b, b = V) : (a(b, T), V = Lo(
          ut,
          b.mode,
          V
        ), V.return = b, V._debugOwner = b, V._debugTask = b._debugTask, V._debugInfo = Ft, b = V), d(b)) : (typeof O == "function" && $o(b, O), typeof O == "symbol" && Cs(b, O), a(b, T));
      }
      return function(b, T, O, V) {
        var ut = Ft;
        Ft = null;
        try {
          $0 = 0;
          var Yt = oe(
            b,
            T,
            O,
            V
          );
          return am = null, Yt;
        } catch (Pe) {
          if (Pe === lm || Pe === og) throw Pe;
          var bt = U(29, Pe, null, b.mode);
          bt.lanes = V, bt.return = b;
          var vt = bt._debugInfo = Ft;
          if (bt._debugOwner = b._debugOwner, bt._debugTask = b._debugTask, vt != null) {
            for (var $t = vt.length - 1; 0 <= $t; $t--)
              if (typeof vt[$t].stack == "string") {
                bt._debugOwner = vt[$t], bt._debugTask = vt[$t].debugTask;
                break;
              }
          }
          return bt;
        } finally {
          Ft = ut;
        }
      };
    }
    function qe(t, e) {
      var a = bl(t);
      return t = !a && typeof zt(t) == "function", a || t ? (a = a ? "array" : "iterable", console.error(
        "A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",
        a,
        e,
        a
      ), !1) : !0;
    }
    function ne(t) {
      t.updateQueue = {
        baseState: t.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null
      };
    }
    function pu(t, e) {
      t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        callbacks: null
      });
    }
    function Ol(t) {
      return {
        lane: t,
        tag: mb,
        payload: null,
        callback: null,
        next: null
      };
    }
    function vu(t, e, a) {
      var i = t.updateQueue;
      if (i === null) return null;
      if (i = i.shared, qS === i && !vb) {
        var o = st(t);
        console.error(
          `An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,
          o
        ), vb = !0;
      }
      return (de & Il) !== oa ? (o = i.pending, o === null ? e.next = e : (e.next = o.next, o.next = e), i.pending = e, e = As(t), wm(t, null, a), e) : (Qo(t, i, e, a), As(t));
    }
    function bn(t, e, a) {
      if (e = e.updateQueue, e !== null && (e = e.shared, (a & 4194048) !== 0)) {
        var i = e.lanes;
        i &= t.pendingLanes, a |= i, e.lanes = a, ds(t, a);
      }
    }
    function Us(t, e) {
      var a = t.updateQueue, i = t.alternate;
      if (i !== null && (i = i.updateQueue, a === i)) {
        var o = null, f = null;
        if (a = a.firstBaseUpdate, a !== null) {
          do {
            var d = {
              lane: a.lane,
              tag: a.tag,
              payload: a.payload,
              callback: null,
              next: null
            };
            f === null ? o = f = d : f = f.next = d, a = a.next;
          } while (a !== null);
          f === null ? o = f = e : f = f.next = e;
        } else o = f = e;
        a = {
          baseState: i.baseState,
          firstBaseUpdate: o,
          lastBaseUpdate: f,
          shared: i.shared,
          callbacks: i.callbacks
        }, t.updateQueue = a;
        return;
      }
      t = a.lastBaseUpdate, t === null ? a.firstBaseUpdate = e : t.next = e, a.lastBaseUpdate = e;
    }
    function ko() {
      if (xS) {
        var t = em;
        if (t !== null) throw t;
      }
    }
    function gu(t, e, a, i) {
      xS = !1;
      var o = t.updateQueue;
      Wf = !1, qS = o.shared;
      var f = o.firstBaseUpdate, d = o.lastBaseUpdate, h = o.shared.pending;
      if (h !== null) {
        o.shared.pending = null;
        var y = h, p = y.next;
        y.next = null, d === null ? f = p : d.next = p, d = y;
        var z = t.alternate;
        z !== null && (z = z.updateQueue, h = z.lastBaseUpdate, h !== d && (h === null ? z.firstBaseUpdate = p : h.next = p, z.lastBaseUpdate = y));
      }
      if (f !== null) {
        var R = o.baseState;
        d = 0, z = p = y = null, h = f;
        do {
          var E = h.lane & -536870913, q = E !== h.lane;
          if (q ? (It & E) === E : (i & E) === E) {
            E !== 0 && E === Yr && (xS = !0), z !== null && (z = z.next = {
              lane: 0,
              tag: h.tag,
              payload: h.payload,
              callback: null,
              next: null
            });
            t: {
              E = t;
              var at = h, ot = e, Ze = a;
              switch (at.tag) {
                case yb:
                  if (at = at.payload, typeof at == "function") {
                    Ph = !0;
                    var oe = at.call(
                      Ze,
                      R,
                      ot
                    );
                    if (E.mode & Ba) {
                      rt(!0);
                      try {
                        at.call(Ze, R, ot);
                      } finally {
                        rt(!1);
                      }
                    }
                    Ph = !1, R = oe;
                    break t;
                  }
                  R = at;
                  break t;
                case jS:
                  E.flags = E.flags & -65537 | 128;
                case mb:
                  if (oe = at.payload, typeof oe == "function") {
                    if (Ph = !0, at = oe.call(
                      Ze,
                      R,
                      ot
                    ), E.mode & Ba) {
                      rt(!0);
                      try {
                        oe.call(Ze, R, ot);
                      } finally {
                        rt(!1);
                      }
                    }
                    Ph = !1;
                  } else at = oe;
                  if (at == null) break t;
                  R = kt({}, R, at);
                  break t;
                case pb:
                  Wf = !0;
              }
            }
            E = h.callback, E !== null && (t.flags |= 64, q && (t.flags |= 8192), q = o.callbacks, q === null ? o.callbacks = [E] : q.push(E));
          } else
            q = {
              lane: E,
              tag: h.tag,
              payload: h.payload,
              callback: h.callback,
              next: null
            }, z === null ? (p = z = q, y = R) : z = z.next = q, d |= E;
          if (h = h.next, h === null) {
            if (h = o.shared.pending, h === null)
              break;
            q = h, h = q.next, q.next = null, o.lastBaseUpdate = q, o.shared.pending = null;
          }
        } while (!0);
        z === null && (y = R), o.baseState = y, o.firstBaseUpdate = p, o.lastBaseUpdate = z, f === null && (o.shared.lanes = 0), Pf |= d, t.lanes = d, t.memoizedState = R;
      }
      qS = null;
    }
    function Xi(t, e) {
      if (typeof t != "function")
        throw Error(
          "Invalid argument passed as callback. Expected a function. Instead received: " + t
        );
      t.call(e);
    }
    function Pm(t, e) {
      var a = t.shared.hiddenCallbacks;
      if (a !== null)
        for (t.shared.hiddenCallbacks = null, t = 0; t < a.length; t++)
          Xi(a[t], e);
    }
    function Wo(t, e) {
      var a = t.callbacks;
      if (a !== null)
        for (t.callbacks = null, t = 0; t < a.length; t++)
          Xi(a[t], e);
    }
    function Rd(t, e) {
      var a = pc;
      jt(sg, a, t), jt(nm, e, t), pc = a | e.baseLanes;
    }
    function ni(t) {
      jt(sg, pc, t), jt(
        nm,
        nm.current,
        t
      );
    }
    function wn(t) {
      pc = sg.current, yt(nm, t), yt(sg, t);
    }
    function ma(t) {
      var e = t.alternate;
      jt(
        Ml,
        Ml.current & um,
        t
      ), jt(eu, t, t), Ju === null && (e === null || nm.current !== null || e.memoizedState !== null) && (Ju = t);
    }
    function Xn(t) {
      jt(Ml, Ml.current, t), jt(eu, t, t), Ju === null && (Ju = t);
    }
    function Md(t) {
      t.tag === 22 ? (jt(Ml, Ml.current, t), jt(eu, t, t), Ju === null && (Ju = t)) : Su(t);
    }
    function Su(t) {
      jt(Ml, Ml.current, t), jt(
        eu,
        eu.current,
        t
      );
    }
    function Yl(t) {
      yt(eu, t), Ju === t && (Ju = null), yt(Ml, t);
    }
    function xc(t) {
      for (var e = t; e !== null; ) {
        if (e.tag === 13) {
          var a = e.memoizedState;
          if (a !== null && (a = a.dehydrated, a === null || hr(a) || Wy(a)))
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
    function Nt() {
      var t = x;
      $u === null ? $u = [t] : $u.push(t);
    }
    function K() {
      var t = x;
      if ($u !== null && (Ao++, $u[Ao] !== t)) {
        var e = st(Bt);
        if (!gb.has(e) && (gb.add(e), $u !== null)) {
          for (var a = "", i = 0; i <= Ao; i++) {
            var o = $u[i], f = i === Ao ? t : o;
            for (o = i + 1 + ". " + o; 30 > o.length; )
              o += " ";
            o += f + `
`, a += o;
          }
          console.error(
            `React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,
            e,
            a
          );
        }
      }
    }
    function ui(t) {
      t == null || bl(t) || console.error(
        "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",
        x,
        typeof t
      );
    }
    function Hs() {
      var t = st(Bt);
      bb.has(t) || (bb.add(t), console.error(
        "ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",
        t
      ));
    }
    function cl() {
      throw Error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      );
    }
    function ty(t, e) {
      if (F0) return !1;
      if (e === null)
        return console.error(
          "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
          x
        ), !1;
      t.length !== e.length && console.error(
        `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
        x,
        "[" + e.join(", ") + "]",
        "[" + t.join(", ") + "]"
      );
      for (var a = 0; a < e.length && a < t.length; a++)
        if (!un(t[a], e[a])) return !1;
      return !0;
    }
    function ey(t, e, a, i, o, f) {
      Eo = f, Bt = e, $u = t !== null ? t._debugHookTypes : null, Ao = -1, F0 = t !== null && t.type !== e.type, (Object.prototype.toString.call(a) === "[object AsyncFunction]" || Object.prototype.toString.call(a) === "[object AsyncGeneratorFunction]") && (f = st(Bt), GS.has(f) || (GS.add(f), console.error(
        "%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",
        f === null ? "An unknown Component" : "<" + f + ">"
      ))), e.memoizedState = null, e.updateQueue = null, e.lanes = 0, G.H = t !== null && t.memoizedState !== null ? XS : $u !== null ? Eb : wS, wr = f = (e.mode & Ba) !== Ct;
      var d = HS(a, i, o);
      if (wr = !1, cm && (d = Ns(
        e,
        a,
        i,
        o
      )), f) {
        rt(!0);
        try {
          d = Ns(
            e,
            a,
            i,
            o
          );
        } finally {
          rt(!1);
        }
      }
      return dl(t, e), d;
    }
    function dl(t, e) {
      e._debugHookTypes = $u, e.dependencies === null ? To !== null && (e.dependencies = {
        lanes: 0,
        firstContext: null,
        _debugThenableState: To
      }) : e.dependencies._debugThenableState = To, G.H = I0;
      var a = we !== null && we.next !== null;
      if (Eo = 0, $u = x = Ql = we = Bt = null, Ao = -1, t !== null && (t.flags & 65011712) !== (e.flags & 65011712) && console.error(
        "Internal React error: Expected static flag was missing. Please notify the React team."
      ), dg = !1, W0 = 0, To = null, a)
        throw Error(
          "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
        );
      t === null || Ll || (t = t.dependencies, t !== null && Zo(t) && (Ll = !0)), K0 ? (K0 = !1, t = !0) : t = !1, t && (e = st(e) || "Unknown", Sb.has(e) || GS.has(e) || (Sb.add(e), console.error(
        "`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary."
      )));
    }
    function Ns(t, e, a, i) {
      Bt = t;
      var o = 0;
      do {
        if (cm && (To = null), W0 = 0, cm = !1, o >= KE)
          throw Error(
            "Too many re-renders. React limits the number of renders to prevent an infinite loop."
          );
        if (o += 1, F0 = !1, Ql = we = null, t.updateQueue != null) {
          var f = t.updateQueue;
          f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
        }
        Ao = -1, G.H = Tb, f = HS(e, a, i);
      } while (cm);
      return f;
    }
    function Bs() {
      var t = G.H, e = t.useState()[0];
      return e = typeof e.then == "function" ? qs(e) : e, t = t.useState()[0], (we !== null ? we.memoizedState : null) !== t && (Bt.flags |= 1024), e;
    }
    function Gc() {
      var t = hg !== 0;
      return hg = 0, t;
    }
    function Ys(t, e, a) {
      e.updateQueue = t.updateQueue, e.flags = (e.mode & bi) !== Ct ? e.flags & -402655237 : e.flags & -2053, t.lanes &= ~a;
    }
    function Qi(t) {
      if (dg) {
        for (t = t.memoizedState; t !== null; ) {
          var e = t.queue;
          e !== null && (e.pending = null), t = t.next;
        }
        dg = !1;
      }
      Eo = 0, $u = Ql = we = Bt = null, Ao = -1, x = null, cm = !1, W0 = hg = 0, To = null;
    }
    function gl() {
      var t = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Ql === null ? Bt.memoizedState = Ql = t : Ql = Ql.next = t, Ql;
    }
    function Te() {
      if (we === null) {
        var t = Bt.alternate;
        t = t !== null ? t.memoizedState : null;
      } else t = we.next;
      var e = Ql === null ? Bt.memoizedState : Ql.next;
      if (e !== null)
        Ql = e, we = t;
      else {
        if (t === null)
          throw Bt.alternate === null ? Error(
            "Update hook called on initial render. This is likely a bug in React. Please file an issue."
          ) : Error("Rendered more hooks than during the previous render.");
        we = t, t = {
          memoizedState: we.memoizedState,
          baseState: we.baseState,
          baseQueue: we.baseQueue,
          queue: we.queue,
          next: null
        }, Ql === null ? Bt.memoizedState = Ql = t : Ql = Ql.next = t;
      }
      return Ql;
    }
    function js() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function qs(t) {
      var e = W0;
      return W0 += 1, To === null && (To = _d()), t = Za(To, t, e), e = Bt, (Ql === null ? e.memoizedState : Ql.next) === null && (e = e.alternate, G.H = e !== null && e.memoizedState !== null ? XS : wS), t;
    }
    function ii(t) {
      if (t !== null && typeof t == "object") {
        if (typeof t.then == "function") return qs(t);
        if (t.$$typeof === Fn) return ge(t);
      }
      throw Error("An unsupported type was passed to use(): " + String(t));
    }
    function Ka(t) {
      var e = null, a = Bt.updateQueue;
      if (a !== null && (e = a.memoCache), e == null) {
        var i = Bt.alternate;
        i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (e = {
          data: i.data.map(function(o) {
            return o.slice();
          }),
          index: 0
        })));
      }
      if (e == null && (e = { data: [], index: 0 }), a === null && (a = js(), Bt.updateQueue = a), a.memoCache = e, a = e.data[e.index], a === void 0 || F0)
        for (a = e.data[e.index] = Array(t), i = 0; i < t; i++)
          a[i] = uS;
      else
        a.length !== t && console.error(
          "Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",
          a.length,
          t
        );
      return e.index++, a;
    }
    function $a(t, e) {
      return typeof e == "function" ? e(t) : e;
    }
    function Fo(t, e, a) {
      var i = gl();
      if (a !== void 0) {
        var o = a(e);
        if (wr) {
          rt(!0);
          try {
            a(e);
          } finally {
            rt(!1);
          }
        }
      } else o = e;
      return i.memoizedState = i.baseState = o, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: o
      }, i.queue = t, t = t.dispatch = tS.bind(
        null,
        Bt,
        t
      ), [i.memoizedState, t];
    }
    function wc(t) {
      var e = Te();
      return Li(e, we, t);
    }
    function Li(t, e, a) {
      var i = t.queue;
      if (i === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      i.lastRenderedReducer = a;
      var o = t.baseQueue, f = i.pending;
      if (f !== null) {
        if (o !== null) {
          var d = o.next;
          o.next = f.next, f.next = d;
        }
        e.baseQueue !== o && console.error(
          "Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."
        ), e.baseQueue = o = f, i.pending = null;
      }
      if (f = t.baseState, o === null) t.memoizedState = f;
      else {
        e = o.next;
        var h = d = null, y = null, p = e, z = !1;
        do {
          var R = p.lane & -536870913;
          if (R !== p.lane ? (It & R) === R : (Eo & R) === R) {
            var E = p.revertLane;
            if (E === 0)
              y !== null && (y = y.next = {
                lane: 0,
                revertLane: 0,
                gesture: null,
                action: p.action,
                hasEagerState: p.hasEagerState,
                eagerState: p.eagerState,
                next: null
              }), R === Yr && (z = !0);
            else if ((Eo & E) === E) {
              p = p.next, E === Yr && (z = !0);
              continue;
            } else
              R = {
                lane: 0,
                revertLane: p.revertLane,
                gesture: null,
                action: p.action,
                hasEagerState: p.hasEagerState,
                eagerState: p.eagerState,
                next: null
              }, y === null ? (h = y = R, d = f) : y = y.next = R, Bt.lanes |= E, Pf |= E;
            R = p.action, wr && a(f, R), f = p.hasEagerState ? p.eagerState : a(f, R);
          } else
            E = {
              lane: R,
              revertLane: p.revertLane,
              gesture: p.gesture,
              action: p.action,
              hasEagerState: p.hasEagerState,
              eagerState: p.eagerState,
              next: null
            }, y === null ? (h = y = E, d = f) : y = y.next = E, Bt.lanes |= R, Pf |= R;
          p = p.next;
        } while (p !== null && p !== e);
        if (y === null ? d = f : y.next = h, !un(f, t.memoizedState) && (Ll = !0, z && (a = em, a !== null)))
          throw a;
        t.memoizedState = f, t.baseState = d, t.baseQueue = y, i.lastRenderedState = f;
      }
      return o === null && (i.lanes = 0), [t.memoizedState, i.dispatch];
    }
    function Xc(t) {
      var e = Te(), a = e.queue;
      if (a === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      a.lastRenderedReducer = t;
      var i = a.dispatch, o = a.pending, f = e.memoizedState;
      if (o !== null) {
        a.pending = null;
        var d = o = o.next;
        do
          f = t(f, d.action), d = d.next;
        while (d !== o);
        un(f, e.memoizedState) || (Ll = !0), e.memoizedState = f, e.baseQueue === null && (e.baseState = f), a.lastRenderedState = f;
      }
      return [f, i];
    }
    function Io(t, e, a) {
      var i = Bt, o = gl();
      if (ie) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        var f = a();
        im || f === a() || (console.error(
          "The result of getServerSnapshot should be cached to avoid an infinite loop"
        ), im = !0);
      } else {
        if (f = e(), im || (a = e(), un(f, a) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), im = !0)), Xe === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        (It & 127) !== 0 || ly(i, e, f);
      }
      return o.memoizedState = f, a = { value: f, getSnapshot: e }, o.queue = a, Vc(
        Vi.bind(null, i, a, t),
        [t]
      ), i.flags |= 2048, bu(
        Ku | fn,
        { destroy: void 0 },
        ay.bind(
          null,
          i,
          a,
          f,
          e
        ),
        null
      ), f;
    }
    function Qc(t, e, a) {
      var i = Bt, o = Te(), f = ie;
      if (f) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        a = a();
      } else if (a = e(), !im) {
        var d = e();
        un(a, d) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), im = !0);
      }
      (d = !un(
        (we || o).memoizedState,
        a
      )) && (o.memoizedState = a, Ll = !0), o = o.queue;
      var h = Vi.bind(null, i, o, t);
      if (zl(2048, fn, h, [t]), o.getSnapshot !== e || d || Ql !== null && Ql.memoizedState.tag & Ku) {
        if (i.flags |= 2048, bu(
          Ku | fn,
          { destroy: void 0 },
          ay.bind(
            null,
            i,
            o,
            a,
            e
          ),
          null
        ), Xe === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        f || (Eo & 127) !== 0 || ly(i, e, a);
      }
      return a;
    }
    function ly(t, e, a) {
      t.flags |= 16384, t = { getSnapshot: e, value: a }, e = Bt.updateQueue, e === null ? (e = js(), Bt.updateQueue = e, e.stores = [t]) : (a = e.stores, a === null ? e.stores = [t] : a.push(t));
    }
    function ay(t, e, a, i) {
      e.value = a, e.getSnapshot = i, Zi(e) && ny(t);
    }
    function Vi(t, e, a) {
      return a(function() {
        Zi(e) && (mu(2, "updateSyncExternalStore()", t), ny(t));
      });
    }
    function Zi(t) {
      var e = t.getSnapshot;
      t = t.value;
      try {
        var a = e();
        return !un(t, a);
      } catch {
        return !0;
      }
    }
    function ny(t) {
      var e = ea(t, 2);
      e !== null && Ut(e, t, 2);
    }
    function Cd(t) {
      var e = gl();
      if (typeof t == "function") {
        var a = t;
        if (t = a(), wr) {
          rt(!0);
          try {
            a();
          } finally {
            rt(!1);
          }
        }
      }
      return e.memoizedState = e.baseState = t, e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: $a,
        lastRenderedState: t
      }, e;
    }
    function Ji(t) {
      t = Cd(t);
      var e = t.queue, a = jd.bind(null, Bt, e);
      return e.dispatch = a, [t.memoizedState, a];
    }
    function Lc(t) {
      var e = gl();
      e.memoizedState = e.baseState = t;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = a, e = Vs.bind(
        null,
        Bt,
        !0,
        a
      ), a.dispatch = e, [t, e];
    }
    function xs(t, e) {
      var a = Te();
      return Po(a, we, t, e);
    }
    function Po(t, e, a, i) {
      return t.baseState = a, Li(
        t,
        we,
        typeof i == "function" ? i : $a
      );
    }
    function Gs(t, e) {
      var a = Te();
      return we !== null ? Po(a, we, t, e) : (a.baseState = t, [t, a.queue.dispatch]);
    }
    function Xp(t, e, a, i, o) {
      if (jl(t))
        throw Error("Cannot update form state while rendering.");
      if (t = e.action, t !== null) {
        var f = {
          payload: o,
          action: t,
          next: null,
          isTransition: !0,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function(d) {
            f.listeners.push(d);
          }
        };
        G.T !== null ? a(!0) : f.isTransition = !1, i(f), a = e.pending, a === null ? (f.next = e.pending = f, Ki(e, f)) : (f.next = a.next, e.pending = a.next = f);
      }
    }
    function Ki(t, e) {
      var a = e.action, i = e.payload, o = t.state;
      if (e.isTransition) {
        var f = G.T, d = {};
        d._updatedFibers = /* @__PURE__ */ new Set(), G.T = d;
        try {
          var h = a(o, i), y = G.S;
          y !== null && y(d, h), uy(t, e, h);
        } catch (p) {
          ws(t, e, p);
        } finally {
          f !== null && d.types !== null && (f.types !== null && f.types !== d.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), f.types = d.types), G.T = f, f === null && d._updatedFibers && (t = d._updatedFibers.size, d._updatedFibers.clear(), 10 < t && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          ));
        }
      } else
        try {
          d = a(o, i), uy(t, e, d);
        } catch (p) {
          ws(t, e, p);
        }
    }
    function uy(t, e, a) {
      a !== null && typeof a == "object" && typeof a.then == "function" ? (G.asyncTransitions++, a.then(Zc, Zc), a.then(
        function(i) {
          ci(t, e, i);
        },
        function(i) {
          return ws(t, e, i);
        }
      ), e.isTransition || console.error(
        "An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop."
      )) : ci(t, e, a);
    }
    function ci(t, e, a) {
      e.status = "fulfilled", e.value = a, Ud(e), t.state = a, e = t.pending, e !== null && (a = e.next, a === e ? t.pending = null : (a = a.next, e.next = a, Ki(t, a)));
    }
    function ws(t, e, a) {
      var i = t.pending;
      if (t.pending = null, i !== null) {
        i = i.next;
        do
          e.status = "rejected", e.reason = a, Ud(e), e = e.next;
        while (e !== i);
      }
      t.action = null;
    }
    function Ud(t) {
      t = t.listeners;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
    function oi(t, e) {
      return e;
    }
    function ka(t, e) {
      if (ie) {
        var a = Xe.formState;
        if (a !== null) {
          t: {
            var i = Bt;
            if (ie) {
              if (Ie) {
                e: {
                  for (var o = Ie, f = Vu; o.nodeType !== 8; ) {
                    if (!f) {
                      o = null;
                      break e;
                    }
                    if (o = en(
                      o.nextSibling
                    ), o === null) {
                      o = null;
                      break e;
                    }
                  }
                  f = o.data, o = f === s1 || f === c2 ? o : null;
                }
                if (o) {
                  Ie = en(
                    o.nextSibling
                  ), i = o.data === s1;
                  break t;
                }
              }
              yn(i);
            }
            i = !1;
          }
          i && (e = a[0]);
        }
      }
      return a = gl(), a.memoizedState = a.baseState = e, i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: oi,
        lastRenderedState: e
      }, a.queue = i, a = jd.bind(
        null,
        Bt,
        i
      ), i.dispatch = a, i = Cd(!1), f = Vs.bind(
        null,
        Bt,
        !1,
        i.queue
      ), i = gl(), o = {
        state: e,
        dispatch: null,
        action: t,
        pending: null
      }, i.queue = o, a = Xp.bind(
        null,
        Bt,
        o,
        f,
        a
      ), o.dispatch = a, i.memoizedState = t, [e, a, !1];
    }
    function $i(t) {
      var e = Te();
      return Hd(e, we, t);
    }
    function Hd(t, e, a) {
      if (e = Li(
        t,
        e,
        oi
      )[0], t = wc($a)[0], typeof e == "object" && e !== null && typeof e.then == "function")
        try {
          var i = qs(e);
        } catch (d) {
          throw d === lm ? og : d;
        }
      else i = e;
      e = Te();
      var o = e.queue, f = o.dispatch;
      return a !== e.memoizedState && (Bt.flags |= 2048, bu(
        Ku | fn,
        { destroy: void 0 },
        iy.bind(null, o, a),
        null
      )), [i, f, t];
    }
    function iy(t, e) {
      t.action = e;
    }
    function ki(t) {
      var e = Te(), a = we;
      if (a !== null)
        return Hd(e, a, t);
      Te(), e = e.memoizedState, a = Te();
      var i = a.queue.dispatch;
      return a.memoizedState = t, [e, i, !1];
    }
    function bu(t, e, a, i) {
      return t = { tag: t, create: a, deps: i, inst: e, next: null }, e = Bt.updateQueue, e === null && (e = js(), Bt.updateQueue = e), a = e.lastEffect, a === null ? e.lastEffect = t.next = t : (i = a.next, a.next = t, t.next = i, e.lastEffect = t), t;
    }
    function Nd(t) {
      var e = gl();
      return t = { current: t }, e.memoizedState = t;
    }
    function Wi(t, e, a, i) {
      var o = gl();
      Bt.flags |= t, o.memoizedState = bu(
        Ku | e,
        { destroy: void 0 },
        a,
        i === void 0 ? null : i
      );
    }
    function zl(t, e, a, i) {
      var o = Te();
      i = i === void 0 ? null : i;
      var f = o.memoizedState.inst;
      we !== null && i !== null && ty(i, we.memoizedState.deps) ? o.memoizedState = bu(e, f, a, i) : (Bt.flags |= t, o.memoizedState = bu(
        Ku | e,
        f,
        a,
        i
      ));
    }
    function Vc(t, e) {
      (Bt.mode & bi) !== Ct ? Wi(276826112, fn, t, e) : Wi(8390656, fn, t, e);
    }
    function Qp(t) {
      Bt.flags |= 4;
      var e = Bt.updateQueue;
      if (e === null)
        e = js(), Bt.updateQueue = e, e.events = [t];
      else {
        var a = e.events;
        a === null ? e.events = [t] : a.push(t);
      }
    }
    function Xs(t) {
      var e = gl(), a = { impl: t };
      return e.memoizedState = a, function() {
        if ((de & Il) !== oa)
          throw Error(
            "A function wrapped in useEffectEvent can't be called during rendering."
          );
        return a.impl.apply(void 0, arguments);
      };
    }
    function tf(t) {
      var e = Te().memoizedState;
      return Qp({ ref: e, nextImpl: t }), function() {
        if ((de & Il) !== oa)
          throw Error(
            "A function wrapped in useEffectEvent can't be called during rendering."
          );
        return e.impl.apply(void 0, arguments);
      };
    }
    function ya(t, e) {
      var a = 4194308;
      return (Bt.mode & bi) !== Ct && (a |= 134217728), Wi(a, lu, t, e);
    }
    function Wa(t, e) {
      if (typeof e == "function") {
        t = t();
        var a = e(t);
        return function() {
          typeof a == "function" ? a() : e(null);
        };
      }
      if (e != null)
        return e.hasOwnProperty("current") || console.error(
          "Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.",
          "an object with keys {" + Object.keys(e).join(", ") + "}"
        ), t = t(), e.current = t, function() {
          e.current = null;
        };
    }
    function Eu(t, e, a) {
      typeof e != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        e !== null ? typeof e : "null"
      ), a = a != null ? a.concat([t]) : null;
      var i = 4194308;
      (Bt.mode & bi) !== Ct && (i |= 134217728), Wi(
        i,
        lu,
        Wa.bind(null, e, t),
        a
      );
    }
    function ef(t, e, a) {
      typeof e != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        e !== null ? typeof e : "null"
      ), a = a != null ? a.concat([t]) : null, zl(
        4,
        lu,
        Wa.bind(null, e, t),
        a
      );
    }
    function Bd(t, e) {
      return gl().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    }
    function Qn(t, e) {
      var a = Te();
      e = e === void 0 ? null : e;
      var i = a.memoizedState;
      return e !== null && ty(e, i[1]) ? i[0] : (a.memoizedState = [t, e], t);
    }
    function pa(t, e) {
      var a = gl();
      e = e === void 0 ? null : e;
      var i = t();
      if (wr) {
        rt(!0);
        try {
          t();
        } finally {
          rt(!1);
        }
      }
      return a.memoizedState = [i, e], i;
    }
    function $e(t, e) {
      var a = Te();
      e = e === void 0 ? null : e;
      var i = a.memoizedState;
      if (e !== null && ty(e, i[1]))
        return i[0];
      if (i = t(), wr) {
        rt(!0);
        try {
          t();
        } finally {
          rt(!1);
        }
      }
      return a.memoizedState = [i, e], i;
    }
    function lf(t, e) {
      var a = gl();
      return Ae(a, t, e);
    }
    function Tu(t, e) {
      var a = Te();
      return hl(
        a,
        we.memoizedState,
        t,
        e
      );
    }
    function Qt(t, e) {
      var a = Te();
      return we === null ? Ae(a, t, e) : hl(
        a,
        we.memoizedState,
        t,
        e
      );
    }
    function Ae(t, e, a) {
      return a === void 0 || (Eo & 1073741824) !== 0 && (It & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = a, t = rf(), Bt.lanes |= t, Pf |= t, a);
    }
    function hl(t, e, a, i) {
      return un(a, e) ? a : nm.current !== null ? (t = Ae(t, a, i), un(t, e) || (Ll = !0), t) : (Eo & 42) === 0 || (Eo & 1073741824) !== 0 && (It & 261930) === 0 ? (Ll = !0, t.memoizedState = a) : (t = rf(), Bt.lanes |= t, Pf |= t, e);
    }
    function Zc() {
      G.asyncTransitions--;
    }
    function Jc(t, e, a, i, o) {
      var f = be.p;
      be.p = f !== 0 && f < Wl ? f : Wl;
      var d = G.T, h = {};
      h._updatedFibers = /* @__PURE__ */ new Set(), G.T = h, Vs(t, !1, e, a);
      try {
        var y = o(), p = G.S;
        if (p !== null && p(h, y), y !== null && typeof y == "object" && typeof y.then == "function") {
          G.asyncTransitions++, y.then(Zc, Zc);
          var z = zd(
            y,
            i
          );
          Kc(
            t,
            e,
            z,
            aa(t)
          );
        } else
          Kc(
            t,
            e,
            i,
            aa(t)
          );
      } catch (R) {
        Kc(
          t,
          e,
          { then: function() {
          }, status: "rejected", reason: R },
          aa(t)
        );
      } finally {
        be.p = f, d !== null && h.types !== null && (d.types !== null && d.types !== h.types && console.error(
          "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
        ), d.types = h.types), G.T = d, d === null && h._updatedFibers && (t = h._updatedFibers.size, h._updatedFibers.clear(), 10 < t && console.warn(
          "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
        ));
      }
    }
    function fi(t, e, a, i) {
      if (t.tag !== 5)
        throw Error(
          "Expected the form instance to be a HostComponent. This is a bug in React."
        );
      var o = Qs(t).queue;
      Gp(t), Jc(
        t,
        o,
        e,
        Fr,
        a === null ? $ : function() {
          return af(t), a(i);
        }
      );
    }
    function Qs(t) {
      var e = t.memoizedState;
      if (e !== null) return e;
      e = {
        memoizedState: Fr,
        baseState: Fr,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: $a,
          lastRenderedState: Fr
        },
        next: null
      };
      var a = {};
      return e.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: $a,
          lastRenderedState: a
        },
        next: null
      }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
    }
    function af(t) {
      G.T === null && console.error(
        "requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition."
      );
      var e = Qs(t);
      e.next === null && (e = t.alternate.memoizedState), Kc(
        t,
        e.next.queue,
        {},
        aa(t)
      );
    }
    function Fi() {
      var t = Cd(!1);
      return t = Jc.bind(
        null,
        Bt,
        t.queue,
        !0,
        !1
      ), gl().memoizedState = t, [!1, t];
    }
    function Lp() {
      var t = wc($a)[0], e = Te().memoizedState;
      return [
        typeof t == "boolean" ? t : qs(t),
        e
      ];
    }
    function el() {
      var t = Xc($a)[0], e = Te().memoizedState;
      return [
        typeof t == "boolean" ? t : qs(t),
        e
      ];
    }
    function si() {
      return ge(hp);
    }
    function Ls() {
      var t = gl(), e = Xe.identifierPrefix;
      if (ie) {
        var a = po, i = yo;
        a = (i & ~(1 << 32 - kl(i) - 1)).toString(32) + a, e = "_" + e + "R_" + a, a = hg++, 0 < a && (e += "H" + a.toString(32)), e += "_";
      } else
        a = JE++, e = "_" + e + "r_" + a.toString(32) + "_";
      return t.memoizedState = e;
    }
    function Yd() {
      return gl().memoizedState = Vp.bind(
        null,
        Bt
      );
    }
    function Vp(t, e) {
      for (var a = t.return; a !== null; ) {
        switch (a.tag) {
          case 24:
          case 3:
            var i = aa(a), o = Ol(i), f = vu(a, o, i);
            f !== null && (mu(i, "refresh()", t), Ut(f, a, i), bn(f, a, i)), t = Ad(), e != null && f !== null && console.error(
              "The seed argument is not enabled outside experimental channels."
            ), o.payload = { cache: t };
            return;
        }
        a = a.return;
      }
    }
    function tS(t, e, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = aa(t);
      var o = {
        lane: i,
        revertLane: 0,
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      jl(t) ? ol(e, o) : (o = Rc(t, e, o, i), o !== null && (mu(i, "dispatch()", t), Ut(o, t, i), Zs(o, e, i)));
    }
    function jd(t, e, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = aa(t), Kc(t, e, a, i) && mu(i, "setState()", t);
    }
    function Kc(t, e, a, i) {
      var o = {
        lane: i,
        revertLane: 0,
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (jl(t)) ol(e, o);
      else {
        var f = t.alternate;
        if (t.lanes === 0 && (f === null || f.lanes === 0) && (f = e.lastRenderedReducer, f !== null)) {
          var d = G.H;
          G.H = Ti;
          try {
            var h = e.lastRenderedState, y = f(h, a);
            if (o.hasEagerState = !0, o.eagerState = y, un(y, h))
              return Qo(t, e, o, 0), Xe === null && vd(), !1;
          } catch {
          } finally {
            G.H = d;
          }
        }
        if (a = Rc(t, e, o, i), a !== null)
          return Ut(a, t, i), Zs(a, e, i), !0;
      }
      return !1;
    }
    function Vs(t, e, a, i) {
      if (G.T === null && Yr === 0 && console.error(
        "An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."
      ), i = {
        lane: 2,
        revertLane: Ky(),
        gesture: null,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, jl(t)) {
        if (e)
          throw Error("Cannot update optimistic state while rendering.");
        console.error("Cannot call startTransition while rendering.");
      } else
        e = Rc(
          t,
          a,
          i,
          2
        ), e !== null && (mu(2, "setOptimistic()", t), Ut(e, t, 2));
    }
    function jl(t) {
      var e = t.alternate;
      return t === Bt || e !== null && e === Bt;
    }
    function ol(t, e) {
      cm = dg = !0;
      var a = t.pending;
      a === null ? e.next = e : (e.next = a.next, a.next = e), t.pending = e;
    }
    function Zs(t, e, a) {
      if ((a & 4194048) !== 0) {
        var i = e.lanes;
        i &= t.pendingLanes, a |= i, e.lanes = a, ds(t, a);
      }
    }
    function $c(t) {
      if (t !== null && typeof t != "function") {
        var e = String(t);
        Nb.has(e) || (Nb.add(e), console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          t
        ));
      }
    }
    function nf(t, e, a, i) {
      var o = t.memoizedState, f = a(i, o);
      if (t.mode & Ba) {
        rt(!0);
        try {
          f = a(i, o);
        } finally {
          rt(!1);
        }
      }
      f === void 0 && (e = Zt(e) || "Component", Mb.has(e) || (Mb.add(e), console.error(
        "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
        e
      ))), o = f == null ? o : kt({}, o, f), t.memoizedState = o, t.lanes === 0 && (t.updateQueue.baseState = o);
    }
    function qd(t, e, a, i, o, f, d) {
      var h = t.stateNode;
      if (typeof h.shouldComponentUpdate == "function") {
        if (a = h.shouldComponentUpdate(
          i,
          f,
          d
        ), t.mode & Ba) {
          rt(!0);
          try {
            a = h.shouldComponentUpdate(
              i,
              f,
              d
            );
          } finally {
            rt(!1);
          }
        }
        return a === void 0 && console.error(
          "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
          Zt(e) || "Component"
        ), a;
      }
      return e.prototype && e.prototype.isPureReactComponent ? !Xo(a, i) || !Xo(o, f) : !0;
    }
    function Au(t, e, a, i) {
      var o = e.state;
      typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(a, i), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(a, i), e.state !== o && (t = st(t) || "Component", Ob.has(t) || (Ob.add(t), console.error(
        "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
        t
      )), QS.enqueueReplaceState(
        e,
        e.state,
        null
      ));
    }
    function Ou(t, e) {
      var a = e;
      if ("ref" in e) {
        a = {};
        for (var i in e)
          i !== "ref" && (a[i] = e[i]);
      }
      if (t = t.defaultProps) {
        a === e && (a = kt({}, a));
        for (var o in t)
          a[o] === void 0 && (a[o] = t[o]);
      }
      return a;
    }
    function xd(t) {
      SS(t), console.warn(
        `%s

%s
`,
        om ? "An error occurred in the <" + om + "> component." : "An error occurred in one of your React components.",
        `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`
      );
    }
    function Gd(t) {
      var e = om ? "The above error occurred in the <" + om + "> component." : "The above error occurred in one of your React components.", a = "React will try to recreate this component tree from scratch using the error boundary you provided, " + ((LS || "Anonymous") + ".");
      if (typeof t == "object" && t !== null && typeof t.environmentName == "string") {
        var i = t.environmentName;
        t = [
          `%o

%s

%s
`,
          t,
          e,
          a
        ].slice(0), typeof t[0] == "string" ? t.splice(
          0,
          1,
          y2 + " " + t[0],
          p2,
          xg + i + xg,
          v2
        ) : t.splice(
          0,
          0,
          y2,
          p2,
          xg + i + xg,
          v2
        ), t.unshift(console), i = hT.apply(console.error, t), i();
      } else
        console.error(
          `%o

%s

%s
`,
          t,
          e,
          a
        );
    }
    function cy(t) {
      SS(t);
    }
    function Js(t, e) {
      try {
        om = e.source ? st(e.source) : null, LS = null;
        var a = e.value;
        if (G.actQueue !== null)
          G.thrownErrors.push(a);
        else {
          var i = t.onUncaughtError;
          i(a, { componentStack: e.stack });
        }
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function oy(t, e, a) {
      try {
        om = a.source ? st(a.source) : null, LS = st(e);
        var i = t.onCaughtError;
        i(a.value, {
          componentStack: a.stack,
          errorBoundary: e.tag === 1 ? e.stateNode : null
        });
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function wd(t, e, a) {
      return a = Ol(a), a.tag = jS, a.payload = { element: null }, a.callback = function() {
        ct(e.source, Js, t, e);
      }, a;
    }
    function Xd(t) {
      return t = Ol(t), t.tag = jS, t;
    }
    function Qd(t, e, a, i) {
      var o = a.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var f = i.value;
        t.payload = function() {
          return o(f);
        }, t.callback = function() {
          Mc(a), ct(
            i.source,
            oy,
            e,
            a,
            i
          );
        };
      }
      var d = a.stateNode;
      d !== null && typeof d.componentDidCatch == "function" && (t.callback = function() {
        Mc(a), ct(
          i.source,
          oy,
          e,
          a,
          i
        ), typeof o != "function" && (es === null ? es = /* @__PURE__ */ new Set([this]) : es.add(this)), QE(this, i), typeof o == "function" || (a.lanes & 2) === 0 && console.error(
          "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
          st(a) || "Unknown"
        );
      });
    }
    function fy(t, e, a, i, o) {
      if (a.flags |= 32768, qu && pf(t, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        if (e = a.alternate, e !== null && qn(
          e,
          a,
          o,
          !0
        ), ie && (hc = !0), a = eu.current, a !== null) {
          switch (a.tag) {
            case 31:
            case 13:
              return Ju === null ? hf() : a.alternate === null && sl === zo && (sl = pg), a.flags &= -257, a.flags |= 65536, a.lanes = o, i === fg ? a.flags |= 16384 : (e = a.updateQueue, e === null ? a.updateQueue = /* @__PURE__ */ new Set([i]) : e.add(i), oh(t, i, o)), !1;
            case 22:
              return a.flags |= 65536, i === fg ? a.flags |= 16384 : (e = a.updateQueue, e === null ? (e = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([i])
              }, a.updateQueue = e) : (a = e.retryQueue, a === null ? e.retryQueue = /* @__PURE__ */ new Set([i]) : a.add(i)), oh(t, i, o)), !1;
          }
          throw Error(
            "Unexpected Suspense handler tag (" + a.tag + "). This is a bug in React."
          );
        }
        return oh(t, i, o), hf(), !1;
      }
      if (ie)
        return hc = !0, e = eu.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = o, i !== zS && zs(
          sa(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",
              { cause: i }
            ),
            a
          )
        )) : (i !== zS && zs(
          sa(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering the entire root.",
              { cause: i }
            ),
            a
          )
        ), t = t.current.alternate, t.flags |= 65536, o &= -o, t.lanes |= o, i = sa(i, a), o = wd(
          t.stateNode,
          i,
          o
        ), Us(t, o), sl !== Ff && (sl = Xr)), !1;
      var f = sa(
        Error(
          "There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",
          { cause: i }
        ),
        a
      );
      if (np === null ? np = [f] : np.push(f), sl !== Ff && (sl = Xr), e === null) return !0;
      i = sa(i, a), a = e;
      do {
        switch (a.tag) {
          case 3:
            return a.flags |= 65536, t = o & -o, a.lanes |= t, t = wd(
              a.stateNode,
              i,
              t
            ), Us(a, t), !1;
          case 1:
            if (e = a.type, f = a.stateNode, (a.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (es === null || !es.has(f))))
              return a.flags |= 65536, o &= -o, a.lanes |= o, o = Xd(o), Qd(
                o,
                t,
                a,
                i
              ), Us(a, o), !1;
        }
        a = a.return;
      } while (a !== null);
      return !1;
    }
    function ql(t, e, a, i) {
      e.child = t === null ? hb(e, null, a, i) : Gr(
        e,
        t.child,
        a,
        i
      );
    }
    function Zp(t, e, a, i, o) {
      a = a.render;
      var f = e.ref;
      if ("ref" in i) {
        var d = {};
        for (var h in i)
          h !== "ref" && (d[h] = i[h]);
      } else d = i;
      return wi(e), i = ey(
        t,
        e,
        a,
        d,
        f,
        o
      ), h = Gc(), t !== null && !Ll ? (Ys(t, e, o), Ln(t, e, o)) : (ie && h && bd(e), e.flags |= 1, ql(t, e, i, o), e.child);
    }
    function sy(t, e, a, i, o) {
      if (t === null) {
        var f = a.type;
        return typeof f == "function" && !Qm(f) && f.defaultProps === void 0 && a.compare === null ? (a = Yi(f), e.tag = 15, e.type = a, uf(e, f), ry(
          t,
          e,
          a,
          i,
          o
        )) : (t = Cc(
          a.type,
          null,
          i,
          e,
          e.mode,
          o
        ), t.ref = e.ref, t.return = e, e.child = t);
      }
      if (f = t.child, !Kd(t, o)) {
        var d = f.memoizedProps;
        if (a = a.compare, a = a !== null ? a : Xo, a(d, i) && t.ref === e.ref)
          return Ln(
            t,
            e,
            o
          );
      }
      return e.flags |= 1, t = hu(f, i), t.ref = e.ref, t.return = e, e.child = t;
    }
    function ry(t, e, a, i, o) {
      if (t !== null) {
        var f = t.memoizedProps;
        if (Xo(f, i) && t.ref === e.ref && e.type === t.type)
          if (Ll = !1, e.pendingProps = i = f, Kd(t, o))
            (t.flags & 131072) !== 0 && (Ll = !0);
          else
            return e.lanes = t.lanes, Ln(t, e, o);
      }
      return yy(
        t,
        e,
        a,
        i,
        o
      );
    }
    function dy(t, e, a, i) {
      var o = i.children, f = t !== null ? t.memoizedState : null;
      if (t === null && e.stateNode === null && (e.stateNode = {
        _visibility: N0,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), i.mode === "hidden") {
        if ((e.flags & 128) !== 0) {
          if (f = f !== null ? f.baseLanes | a : a, t !== null) {
            for (i = e.child = t.child, o = 0; i !== null; )
              o = o | i.lanes | i.childLanes, i = i.sibling;
            i = o & ~f;
          } else i = 0, e.child = null;
          return hy(
            t,
            e,
            f,
            a,
            i
          );
        }
        if ((a & 536870912) !== 0)
          e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && Ko(
            e,
            f !== null ? f.cachePool : null
          ), f !== null ? Rd(e, f) : ni(e), Md(e);
        else
          return i = e.lanes = 536870912, hy(
            t,
            e,
            f !== null ? f.baseLanes | a : a,
            a,
            i
          );
      } else
        f !== null ? (Ko(e, f.cachePool), Rd(e, f), Su(e), e.memoizedState = null) : (t !== null && Ko(e, null), ni(e), Su(e));
      return ql(t, e, o, a), e.child;
    }
    function kc(t, e) {
      return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
        _visibility: N0,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), e.sibling;
    }
    function hy(t, e, a, i, o) {
      var f = ai();
      return f = f === null ? null : {
        parent: wl._currentValue,
        pool: f
      }, e.memoizedState = {
        baseLanes: a,
        cachePool: f
      }, t !== null && Ko(e, null), ni(e), Md(e), t !== null && qn(t, e, i, !0), e.childLanes = o, null;
    }
    function Ks(t, e) {
      var a = e.hidden;
      return a !== void 0 && console.error(
        `<Activity> doesn't accept a hidden prop. Use mode="hidden" instead.
- <Activity %s>
+ <Activity %s>`,
        a === !0 ? "hidden" : a === !1 ? "hidden={false}" : "hidden={...}",
        a ? 'mode="hidden"' : 'mode="visible"'
      ), e = ks(
        { mode: e.mode, children: e.children },
        t.mode
      ), e.ref = t.ref, t.child = e, e.return = t, e;
    }
    function my(t, e, a) {
      return Gr(e, t.child, null, a), t = Ks(
        e,
        e.pendingProps
      ), t.flags |= 2, Yl(e), e.memoizedState = null, t;
    }
    function Jp(t, e, a) {
      var i = e.pendingProps, o = (e.flags & 128) !== 0;
      if (e.flags &= -129, t === null) {
        if (ie) {
          if (i.mode === "hidden")
            return t = Ks(e, i), e.lanes = 536870912, kc(null, t);
          if (Xn(e), (t = Ie) ? (a = ze(
            t,
            Vu
          ), a = a !== null && a.data === Kr ? a : null, a !== null && (i = {
            dehydrated: a,
            treeContext: jp(),
            retryLane: 536870912,
            hydrationErrors: null
          }, e.memoizedState = i, i = Vm(a), i.return = e, e.child = i, za = e, Ie = null)) : a = null, a === null)
            throw la(e, t), yn(e);
          return e.lanes = 536870912, null;
        }
        return Ks(e, i);
      }
      var f = t.memoizedState;
      if (f !== null) {
        var d = f.dehydrated;
        if (Xn(e), o)
          if (e.flags & 256)
            e.flags &= -257, e = my(
              t,
              e,
              a
            );
          else if (e.memoizedState !== null)
            e.child = t.child, e.flags |= 128, e = null;
          else
            throw Error(
              "Client rendering an Activity suspended it again. This is a bug in React."
            );
        else if (xp(), (a & 536870912) !== 0 && df(e), Ll || qn(
          t,
          e,
          a,
          !1
        ), o = (a & t.childLanes) !== 0, Ll || o) {
          if (i = Xe, i !== null && (d = Sc(
            i,
            a
          ), d !== 0 && d !== f.retryLane))
            throw f.retryLane = d, ea(t, d), Ut(i, t, d), VS;
          hf(), e = my(
            t,
            e,
            a
          );
        } else
          t = f.treeContext, Ie = en(
            d.nextSibling
          ), za = e, ie = !0, Zf = null, hc = !1, tu = null, Vu = !1, t !== null && qp(e, t), e = Ks(e, i), e.flags |= 4096;
        return e;
      }
      return f = t.child, i = { mode: i.mode, children: i.children }, (a & 536870912) !== 0 && (a & t.lanes) !== 0 && df(e), t = hu(f, i), t.ref = e.ref, e.child = t, t.return = e, t;
    }
    function $s(t, e) {
      var a = e.ref;
      if (a === null)
        t !== null && t.ref !== null && (e.flags |= 4194816);
      else {
        if (typeof a != "function" && typeof a != "object")
          throw Error(
            "Expected ref to be a function, an object returned by React.createRef(), or undefined/null."
          );
        (t === null || t.ref !== a) && (e.flags |= 4194816);
      }
    }
    function yy(t, e, a, i, o) {
      if (a.prototype && typeof a.prototype.render == "function") {
        var f = Zt(a) || "Unknown";
        Bb[f] || (console.error(
          "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
          f,
          f
        ), Bb[f] = !0);
      }
      return e.mode & Ba && Ei.recordLegacyContextWarning(
        e,
        null
      ), t === null && (uf(e, e.type), a.contextTypes && (f = Zt(a) || "Unknown", jb[f] || (jb[f] = !0, console.error(
        "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
        f
      )))), wi(e), a = ey(
        t,
        e,
        a,
        i,
        void 0,
        o
      ), i = Gc(), t !== null && !Ll ? (Ys(t, e, o), Ln(t, e, o)) : (ie && i && bd(e), e.flags |= 1, ql(t, e, a, o), e.child);
    }
    function py(t, e, a, i, o, f) {
      return wi(e), Ao = -1, F0 = t !== null && t.type !== e.type, e.updateQueue = null, a = Ns(
        e,
        i,
        a,
        o
      ), dl(t, e), i = Gc(), t !== null && !Ll ? (Ys(t, e, f), Ln(t, e, f)) : (ie && i && bd(e), e.flags |= 1, ql(t, e, a, f), e.child);
    }
    function Wc(t, e, a, i, o) {
      switch (ve(e)) {
        case !1:
          var f = e.stateNode, d = new e.type(
            e.memoizedProps,
            f.context
          ).state;
          f.updater.enqueueSetState(f, d, null);
          break;
        case !0:
          e.flags |= 128, e.flags |= 65536, f = Error("Simulated error coming from DevTools");
          var h = o & -o;
          if (e.lanes |= h, d = Xe, d === null)
            throw Error(
              "Expected a work-in-progress root. This is a bug in React. Please file an issue."
            );
          h = Xd(h), Qd(
            h,
            d,
            e,
            sa(f, e)
          ), Us(e, h);
      }
      if (wi(e), e.stateNode === null) {
        if (d = Vf, f = a.contextType, "contextType" in a && f !== null && (f === void 0 || f.$$typeof !== Fn) && !Hb.has(a) && (Hb.add(a), h = f === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? " However, it is set to a " + typeof f + "." : f.$$typeof === Ch ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", console.error(
          "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
          Zt(a) || "Component",
          h
        )), typeof f == "object" && f !== null && (d = ge(f)), f = new a(i, d), e.mode & Ba) {
          rt(!0);
          try {
            f = new a(i, d);
          } finally {
            rt(!1);
          }
        }
        if (d = e.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = QS, e.stateNode = f, f._reactInternals = e, f._reactInternalInstance = Ab, typeof a.getDerivedStateFromProps == "function" && d === null && (d = Zt(a) || "Component", zb.has(d) || (zb.add(d), console.error(
          "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
          d,
          f.state === null ? "null" : "undefined",
          d
        ))), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function") {
          var y = h = d = null;
          if (typeof f.componentWillMount == "function" && f.componentWillMount.__suppressDeprecationWarning !== !0 ? d = "componentWillMount" : typeof f.UNSAFE_componentWillMount == "function" && (d = "UNSAFE_componentWillMount"), typeof f.componentWillReceiveProps == "function" && f.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? h = "componentWillReceiveProps" : typeof f.UNSAFE_componentWillReceiveProps == "function" && (h = "UNSAFE_componentWillReceiveProps"), typeof f.componentWillUpdate == "function" && f.componentWillUpdate.__suppressDeprecationWarning !== !0 ? y = "componentWillUpdate" : typeof f.UNSAFE_componentWillUpdate == "function" && (y = "UNSAFE_componentWillUpdate"), d !== null || h !== null || y !== null) {
            f = Zt(a) || "Component";
            var p = typeof a.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Db.has(f) || (Db.add(f), console.error(
              `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,
              f,
              p,
              d !== null ? `
  ` + d : "",
              h !== null ? `
  ` + h : "",
              y !== null ? `
  ` + y : ""
            ));
          }
        }
        f = e.stateNode, d = Zt(a) || "Component", f.render || (a.prototype && typeof a.prototype.render == "function" ? console.error(
          "No `render` method found on the %s instance: did you accidentally return an object from the constructor?",
          d
        ) : console.error(
          "No `render` method found on the %s instance: you may have forgotten to define `render`.",
          d
        )), !f.getInitialState || f.getInitialState.isReactClassApproved || f.state || console.error(
          "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
          d
        ), f.getDefaultProps && !f.getDefaultProps.isReactClassApproved && console.error(
          "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
          d
        ), f.contextType && console.error(
          "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
          d
        ), a.childContextTypes && !Ub.has(a) && (Ub.add(a), console.error(
          "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
          d
        )), a.contextTypes && !Cb.has(a) && (Cb.add(a), console.error(
          "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
          d
        )), typeof f.componentShouldUpdate == "function" && console.error(
          "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
          d
        ), a.prototype && a.prototype.isPureReactComponent && typeof f.shouldComponentUpdate < "u" && console.error(
          "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
          Zt(a) || "A pure component"
        ), typeof f.componentDidUnmount == "function" && console.error(
          "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
          d
        ), typeof f.componentDidReceiveProps == "function" && console.error(
          "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
          d
        ), typeof f.componentWillRecieveProps == "function" && console.error(
          "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
          d
        ), typeof f.UNSAFE_componentWillRecieveProps == "function" && console.error(
          "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
          d
        ), h = f.props !== i, f.props !== void 0 && h && console.error(
          "When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
          d
        ), f.defaultProps && console.error(
          "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
          d,
          d
        ), typeof f.getSnapshotBeforeUpdate != "function" || typeof f.componentDidUpdate == "function" || _b.has(a) || (_b.add(a), console.error(
          "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
          Zt(a)
        )), typeof f.getDerivedStateFromProps == "function" && console.error(
          "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof f.getDerivedStateFromError == "function" && console.error(
          "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof a.getSnapshotBeforeUpdate == "function" && console.error(
          "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
          d
        ), (h = f.state) && (typeof h != "object" || bl(h)) && console.error("%s.state: must be set to an object or null", d), typeof f.getChildContext == "function" && typeof a.childContextTypes != "object" && console.error(
          "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
          d
        ), f = e.stateNode, f.props = i, f.state = e.memoizedState, f.refs = {}, ne(e), d = a.contextType, f.context = typeof d == "object" && d !== null ? ge(d) : Vf, f.state === i && (d = Zt(a) || "Component", Rb.has(d) || (Rb.add(d), console.error(
          "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
          d
        ))), e.mode & Ba && Ei.recordLegacyContextWarning(
          e,
          f
        ), Ei.recordUnsafeLifecycleWarnings(
          e,
          f
        ), f.state = e.memoizedState, d = a.getDerivedStateFromProps, typeof d == "function" && (nf(
          e,
          a,
          d,
          i
        ), f.state = e.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (d = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), d !== f.state && (console.error(
          "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          st(e) || "Component"
        ), QS.enqueueReplaceState(
          f,
          f.state,
          null
        )), gu(e, i, f, o), ko(), f.state = e.memoizedState), typeof f.componentDidMount == "function" && (e.flags |= 4194308), (e.mode & bi) !== Ct && (e.flags |= 134217728), f = !0;
      } else if (t === null) {
        f = e.stateNode;
        var z = e.memoizedProps;
        h = Ou(a, z), f.props = h;
        var R = f.context;
        y = a.contextType, d = Vf, typeof y == "object" && y !== null && (d = ge(y)), p = a.getDerivedStateFromProps, y = typeof p == "function" || typeof f.getSnapshotBeforeUpdate == "function", z = e.pendingProps !== z, y || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (z || R !== d) && Au(
          e,
          f,
          i,
          d
        ), Wf = !1;
        var E = e.memoizedState;
        f.state = E, gu(e, i, f, o), ko(), R = e.memoizedState, z || E !== R || Wf ? (typeof p == "function" && (nf(
          e,
          a,
          p,
          i
        ), R = e.memoizedState), (h = Wf || qd(
          e,
          a,
          h,
          i,
          E,
          R,
          d
        )) ? (y || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (e.flags |= 4194308), (e.mode & bi) !== Ct && (e.flags |= 134217728)) : (typeof f.componentDidMount == "function" && (e.flags |= 4194308), (e.mode & bi) !== Ct && (e.flags |= 134217728), e.memoizedProps = i, e.memoizedState = R), f.props = i, f.state = R, f.context = d, f = h) : (typeof f.componentDidMount == "function" && (e.flags |= 4194308), (e.mode & bi) !== Ct && (e.flags |= 134217728), f = !1);
      } else {
        f = e.stateNode, pu(t, e), d = e.memoizedProps, y = Ou(a, d), f.props = y, p = e.pendingProps, E = f.context, R = a.contextType, h = Vf, typeof R == "object" && R !== null && (h = ge(R)), z = a.getDerivedStateFromProps, (R = typeof z == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (d !== p || E !== h) && Au(
          e,
          f,
          i,
          h
        ), Wf = !1, E = e.memoizedState, f.state = E, gu(e, i, f, o), ko();
        var q = e.memoizedState;
        d !== p || E !== q || Wf || t !== null && t.dependencies !== null && Zo(t.dependencies) ? (typeof z == "function" && (nf(
          e,
          a,
          z,
          i
        ), q = e.memoizedState), (y = Wf || qd(
          e,
          a,
          y,
          i,
          E,
          q,
          h
        ) || t !== null && t.dependencies !== null && Zo(t.dependencies)) ? (R || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(i, q, h), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
          i,
          q,
          h
        )), typeof f.componentDidUpdate == "function" && (e.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || d === t.memoizedProps && E === t.memoizedState || (e.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === t.memoizedProps && E === t.memoizedState || (e.flags |= 1024), e.memoizedProps = i, e.memoizedState = q), f.props = i, f.state = q, f.context = h, f = y) : (typeof f.componentDidUpdate != "function" || d === t.memoizedProps && E === t.memoizedState || (e.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === t.memoizedProps && E === t.memoizedState || (e.flags |= 1024), f = !1);
      }
      if (h = f, $s(t, e), d = (e.flags & 128) !== 0, h || d) {
        if (h = e.stateNode, _i(e), d && typeof a.getDerivedStateFromError != "function")
          a = null, cn = -1;
        else if (a = P1(h), e.mode & Ba) {
          rt(!0);
          try {
            P1(h);
          } finally {
            rt(!1);
          }
        }
        e.flags |= 1, t !== null && d ? (e.child = Gr(
          e,
          t.child,
          null,
          o
        ), e.child = Gr(
          e,
          null,
          a,
          o
        )) : ql(t, e, a, o), e.memoizedState = h.state, t = e.child;
      } else
        t = Ln(
          t,
          e,
          o
        );
      return o = e.stateNode, f && o.props !== i && (fm || console.error(
        "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
        st(e) || "a component"
      ), fm = !0), t;
    }
    function vy(t, e, a, i) {
      return xi(), e.flags |= 256, ql(t, e, a, i), e.child;
    }
    function uf(t, e) {
      e && e.childContextTypes && console.error(
        `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
        e.displayName || e.name || "Component"
      ), typeof e.getDerivedStateFromProps == "function" && (t = Zt(e) || "Unknown", qb[t] || (console.error(
        "%s: Function components do not support getDerivedStateFromProps.",
        t
      ), qb[t] = !0)), typeof e.contextType == "object" && e.contextType !== null && (e = Zt(e) || "Unknown", Yb[e] || (console.error(
        "%s: Function components do not support contextType.",
        e
      ), Yb[e] = !0));
    }
    function cf(t) {
      return { baseLanes: t, cachePool: Wm() };
    }
    function Ld(t, e, a) {
      return t = t !== null ? t.childLanes & ~a : 0, e && (t |= Rn), t;
    }
    function Vd(t, e, a) {
      var i, o = e.pendingProps;
      xt(e) && (e.flags |= 128);
      var f = !1, d = (e.flags & 128) !== 0;
      if ((i = d) || (i = t !== null && t.memoizedState === null ? !1 : (Ml.current & k0) !== 0), i && (f = !0, e.flags &= -129), i = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
        if (ie) {
          if (f ? ma(e) : Su(e), (t = Ie) ? (a = ze(
            t,
            Vu
          ), a = a !== null && a.data !== Kr ? a : null, a !== null && (i = {
            dehydrated: a,
            treeContext: jp(),
            retryLane: 536870912,
            hydrationErrors: null
          }, e.memoizedState = i, i = Vm(a), i.return = e, e.child = i, za = e, Ie = null)) : a = null, a === null)
            throw la(e, t), yn(e);
          return Wy(a) ? e.lanes = 32 : e.lanes = 536870912, null;
        }
        var h = o.children;
        if (o = o.fallback, f) {
          Su(e);
          var y = e.mode;
          return h = ks(
            { mode: "hidden", children: h },
            y
          ), o = Uc(
            o,
            y,
            a,
            null
          ), h.return = e, o.return = e, h.sibling = o, e.child = h, o = e.child, o.memoizedState = cf(a), o.childLanes = Ld(
            t,
            i,
            a
          ), e.memoizedState = ZS, kc(
            null,
            o
          );
        }
        return ma(e), gy(
          e,
          h
        );
      }
      var p = t.memoizedState;
      if (p !== null) {
        var z = p.dehydrated;
        if (z !== null) {
          if (d)
            e.flags & 256 ? (ma(e), e.flags &= -257, e = Zd(
              t,
              e,
              a
            )) : e.memoizedState !== null ? (Su(e), e.child = t.child, e.flags |= 128, e = null) : (Su(e), h = o.fallback, y = e.mode, o = ks(
              {
                mode: "visible",
                children: o.children
              },
              y
            ), h = Uc(
              h,
              y,
              a,
              null
            ), h.flags |= 2, o.return = e, h.return = e, o.sibling = h, e.child = o, Gr(
              e,
              t.child,
              null,
              a
            ), o = e.child, o.memoizedState = cf(a), o.childLanes = Ld(
              t,
              i,
              a
            ), e.memoizedState = ZS, e = kc(
              null,
              o
            ));
          else if (ma(e), xp(), (a & 536870912) !== 0 && df(e), Wy(
            z
          )) {
            if (i = z.nextSibling && z.nextSibling.dataset, i) {
              h = i.dgst;
              var R = i.msg;
              y = i.stck;
              var E = i.cstck;
            }
            f = R, i = h, o = y, z = E, h = f, y = z, h = Error(h || "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."), h.stack = o || "", h.digest = i, i = y === void 0 ? null : y, o = {
              value: h,
              source: null,
              stack: i
            }, typeof i == "string" && OS.set(
              h,
              o
            ), zs(o), e = Zd(
              t,
              e,
              a
            );
          } else if (Ll || qn(
            t,
            e,
            a,
            !1
          ), i = (a & t.childLanes) !== 0, Ll || i) {
            if (i = Xe, i !== null && (o = Sc(
              i,
              a
            ), o !== 0 && o !== p.retryLane))
              throw p.retryLane = o, ea(
                t,
                o
              ), Ut(
                i,
                t,
                o
              ), VS;
            hr(
              z
            ) || hf(), e = Zd(
              t,
              e,
              a
            );
          } else
            hr(
              z
            ) ? (e.flags |= 192, e.child = t.child, e = null) : (t = p.treeContext, Ie = en(
              z.nextSibling
            ), za = e, ie = !0, Zf = null, hc = !1, tu = null, Vu = !1, t !== null && qp(e, t), e = gy(
              e,
              o.children
            ), e.flags |= 4096);
          return e;
        }
      }
      return f ? (Su(e), h = o.fallback, y = e.mode, E = t.child, z = E.sibling, o = hu(
        E,
        {
          mode: "hidden",
          children: o.children
        }
      ), o.subtreeFlags = E.subtreeFlags & 65011712, z !== null ? h = hu(
        z,
        h
      ) : (h = Uc(
        h,
        y,
        a,
        null
      ), h.flags |= 2), h.return = e, o.return = e, o.sibling = h, e.child = o, kc(null, o), o = e.child, h = t.child.memoizedState, h === null ? h = cf(a) : (y = h.cachePool, y !== null ? (E = wl._currentValue, y = y.parent !== E ? { parent: E, pool: E } : y) : y = Wm(), h = {
        baseLanes: h.baseLanes | a,
        cachePool: y
      }), o.memoizedState = h, o.childLanes = Ld(
        t,
        i,
        a
      ), e.memoizedState = ZS, kc(
        t.child,
        o
      )) : (p !== null && (a & 62914560) === a && (a & t.lanes) !== 0 && df(e), ma(e), a = t.child, t = a.sibling, a = hu(a, {
        mode: "visible",
        children: o.children
      }), a.return = e, a.sibling = null, t !== null && (i = e.deletions, i === null ? (e.deletions = [t], e.flags |= 16) : i.push(t)), e.child = a, e.memoizedState = null, a);
    }
    function gy(t, e) {
      return e = ks(
        { mode: "visible", children: e },
        t.mode
      ), e.return = t, t.child = e;
    }
    function ks(t, e) {
      return t = U(22, t, null, e), t.lanes = 0, t;
    }
    function Zd(t, e, a) {
      return Gr(e, t.child, null, a), t = gy(
        e,
        e.pendingProps.children
      ), t.flags |= 2, e.memoizedState = null, t;
    }
    function Sy(t, e, a) {
      t.lanes |= e;
      var i = t.alternate;
      i !== null && (i.lanes |= e), Td(
        t.return,
        e,
        a
      );
    }
    function Jd(t, e, a, i, o, f) {
      var d = t.memoizedState;
      d === null ? t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: o,
        treeForkCount: f
      } : (d.isBackwards = e, d.rendering = null, d.renderingStartTime = 0, d.last = i, d.tail = a, d.tailMode = o, d.treeForkCount = f);
    }
    function by(t, e, a) {
      var i = e.pendingProps, o = i.revealOrder, f = i.tail, d = i.children, h = Ml.current;
      if ((i = (h & k0) !== 0) ? (h = h & um | k0, e.flags |= 128) : h &= um, jt(Ml, h, e), h = o ?? "null", o !== "forwards" && o !== "unstable_legacy-backwards" && o !== "together" && o !== "independent" && !xb[h])
        if (xb[h] = !0, o == null)
          console.error(
            'The default for the <SuspenseList revealOrder="..."> prop is changing. To be future compatible you must explictly specify either "independent" (the current default), "together", "forwards" or "legacy_unstable-backwards".'
          );
        else if (o === "backwards")
          console.error(
            'The rendering order of <SuspenseList revealOrder="backwards"> is changing. To be future compatible you must specify revealOrder="legacy_unstable-backwards" instead.'
          );
        else if (typeof o == "string")
          switch (o.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards":
            case "independent":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',
                o,
                o.toLowerCase()
              );
              break;
            case "forward":
            case "backward":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',
                o,
                o.toLowerCase()
              );
              break;
            default:
              console.error(
                '"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',
                o
              );
          }
        else
          console.error(
            '%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',
            o
          );
      h = f ?? "null", yg[h] || (f == null ? (o === "forwards" || o === "backwards" || o === "unstable_legacy-backwards") && (yg[h] = !0, console.error(
        'The default for the <SuspenseList tail="..."> prop is changing. To be future compatible you must explictly specify either "visible" (the current default), "collapsed" or "hidden".'
      )) : f !== "visible" && f !== "collapsed" && f !== "hidden" ? (yg[h] = !0, console.error(
        '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "visible", "collapsed" or "hidden"?',
        f
      )) : o !== "forwards" && o !== "backwards" && o !== "unstable_legacy-backwards" && (yg[h] = !0, console.error(
        '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
        f
      )));
      t: if ((o === "forwards" || o === "backwards" || o === "unstable_legacy-backwards") && d !== void 0 && d !== null && d !== !1)
        if (bl(d)) {
          for (h = 0; h < d.length; h++)
            if (!qe(
              d[h],
              h
            ))
              break t;
        } else if (h = zt(d), typeof h == "function") {
          if (h = h.call(d))
            for (var y = h.next(), p = 0; !y.done; y = h.next()) {
              if (!qe(y.value, p)) break t;
              p++;
            }
        } else
          console.error(
            'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
            o
          );
      if (ql(t, e, d, a), ie ? (qi(), d = B0) : d = 0, !i && t !== null && (t.flags & 128) !== 0)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13)
            t.memoizedState !== null && Sy(t, a, e);
          else if (t.tag === 19)
            Sy(t, a, e);
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
      switch (o) {
        case "forwards":
          for (a = e.child, o = null; a !== null; )
            t = a.alternate, t !== null && xc(t) === null && (o = a), a = a.sibling;
          a = o, a === null ? (o = e.child, e.child = null) : (o = a.sibling, a.sibling = null), Jd(
            e,
            !1,
            o,
            a,
            f,
            d
          );
          break;
        case "backwards":
        case "unstable_legacy-backwards":
          for (a = null, o = e.child, e.child = null; o !== null; ) {
            if (t = o.alternate, t !== null && xc(t) === null) {
              e.child = o;
              break;
            }
            t = o.sibling, o.sibling = a, a = o, o = t;
          }
          Jd(
            e,
            !0,
            a,
            null,
            f,
            d
          );
          break;
        case "together":
          Jd(
            e,
            !1,
            null,
            null,
            void 0,
            d
          );
          break;
        default:
          e.memoizedState = null;
      }
      return e.child;
    }
    function Ln(t, e, a) {
      if (t !== null && (e.dependencies = t.dependencies), cn = -1, Pf |= e.lanes, (a & e.childLanes) === 0)
        if (t !== null) {
          if (qn(
            t,
            e,
            a,
            !1
          ), (a & e.childLanes) === 0)
            return null;
        } else return null;
      if (t !== null && e.child !== t.child)
        throw Error("Resuming work not yet implemented.");
      if (e.child !== null) {
        for (t = e.child, a = hu(t, t.pendingProps), e.child = a, a.return = e; t.sibling !== null; )
          t = t.sibling, a = a.sibling = hu(t, t.pendingProps), a.return = e;
        a.sibling = null;
      }
      return e.child;
    }
    function Kd(t, e) {
      return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Zo(t)));
    }
    function Kp(t, e, a) {
      switch (e.tag) {
        case 3:
          je(
            e,
            e.stateNode.containerInfo
          ), pn(
            e,
            wl,
            t.memoizedState.cache
          ), xi();
          break;
        case 27:
        case 5:
          P(e);
          break;
        case 4:
          je(
            e,
            e.stateNode.containerInfo
          );
          break;
        case 10:
          pn(
            e,
            e.type,
            e.memoizedProps.value
          );
          break;
        case 12:
          (a & e.childLanes) !== 0 && (e.flags |= 4), e.flags |= 2048;
          var i = e.stateNode;
          i.effectDuration = -0, i.passiveEffectDuration = -0;
          break;
        case 31:
          if (e.memoizedState !== null)
            return e.flags |= 128, Xn(e), null;
          break;
        case 13:
          if (i = e.memoizedState, i !== null)
            return i.dehydrated !== null ? (ma(e), e.flags |= 128, null) : (a & e.child.childLanes) !== 0 ? Vd(
              t,
              e,
              a
            ) : (ma(e), t = Ln(
              t,
              e,
              a
            ), t !== null ? t.sibling : null);
          ma(e);
          break;
        case 19:
          var o = (t.flags & 128) !== 0;
          if (i = (a & e.childLanes) !== 0, i || (qn(
            t,
            e,
            a,
            !1
          ), i = (a & e.childLanes) !== 0), o) {
            if (i)
              return by(
                t,
                e,
                a
              );
            e.flags |= 128;
          }
          if (o = e.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), jt(
            Ml,
            Ml.current,
            e
          ), i) break;
          return null;
        case 22:
          return e.lanes = 0, dy(
            t,
            e,
            a,
            e.pendingProps
          );
        case 24:
          pn(
            e,
            wl,
            t.memoizedState.cache
          );
      }
      return Ln(t, e, a);
    }
    function Ws(t, e, a) {
      if (e._debugNeedsRemount && t !== null) {
        a = Cc(
          e.type,
          e.key,
          e.pendingProps,
          e._debugOwner || null,
          e.mode,
          e.lanes
        ), a._debugStack = e._debugStack, a._debugTask = e._debugTask;
        var i = e.return;
        if (i === null) throw Error("Cannot swap the root fiber.");
        if (t.alternate = null, e.alternate = null, a.index = e.index, a.sibling = e.sibling, a.return = e.return, a.ref = e.ref, a._debugInfo = e._debugInfo, e === i.child)
          i.child = a;
        else {
          var o = i.child;
          if (o === null)
            throw Error("Expected parent to have a child.");
          for (; o.sibling !== e; )
            if (o = o.sibling, o === null)
              throw Error("Expected to find the previous sibling.");
          o.sibling = a;
        }
        return e = i.deletions, e === null ? (i.deletions = [t], i.flags |= 16) : e.push(t), a.flags |= 2, a;
      }
      if (t !== null)
        if (t.memoizedProps !== e.pendingProps || e.type !== t.type)
          Ll = !0;
        else {
          if (!Kd(t, a) && (e.flags & 128) === 0)
            return Ll = !1, Kp(
              t,
              e,
              a
            );
          Ll = (t.flags & 131072) !== 0;
        }
      else
        Ll = !1, (i = ie) && (qi(), i = (e.flags & 1048576) !== 0), i && (i = e.index, qi(), Zm(e, B0, i));
      switch (e.lanes = 0, e.tag) {
        case 16:
          t: if (i = e.pendingProps, t = Ja(e.elementType), e.type = t, typeof t == "function")
            Qm(t) ? (i = Ou(
              t,
              i
            ), e.tag = 1, e.type = t = Yi(t), e = Wc(
              null,
              e,
              t,
              i,
              a
            )) : (e.tag = 0, uf(e, t), e.type = t = Yi(t), e = yy(
              null,
              e,
              t,
              i,
              a
            ));
          else {
            if (t != null) {
              if (o = t.$$typeof, o === Cf) {
                e.tag = 11, e.type = t = gd(t), e = Zp(
                  null,
                  e,
                  t,
                  i,
                  a
                );
                break t;
              } else if (o === Ar) {
                e.tag = 14, e = sy(
                  null,
                  e,
                  t,
                  i,
                  a
                );
                break t;
              }
            }
            throw e = "", t !== null && typeof t == "object" && t.$$typeof === na && (e = " Did you wrap a component in React.lazy() more than once?"), a = Zt(t) || t, Error(
              "Element type is invalid. Received a promise that resolves to: " + a + ". Lazy element type must resolve to a class or function." + e
            );
          }
          return e;
        case 0:
          return yy(
            t,
            e,
            e.type,
            e.pendingProps,
            a
          );
        case 1:
          return i = e.type, o = Ou(
            i,
            e.pendingProps
          ), Wc(
            t,
            e,
            i,
            o,
            a
          );
        case 3:
          t: {
            if (je(
              e,
              e.stateNode.containerInfo
            ), t === null)
              throw Error(
                "Should have a current fiber. This is a bug in React."
              );
            i = e.pendingProps;
            var f = e.memoizedState;
            o = f.element, pu(t, e), gu(e, i, null, a);
            var d = e.memoizedState;
            if (i = d.cache, pn(e, wl, i), i !== f.cache && ti(
              e,
              [wl],
              a,
              !0
            ), ko(), i = d.element, f.isDehydrated)
              if (f = {
                element: i,
                isDehydrated: !1,
                cache: d.cache
              }, e.updateQueue.baseState = f, e.memoizedState = f, e.flags & 256) {
                e = vy(
                  t,
                  e,
                  i,
                  a
                );
                break t;
              } else if (i !== o) {
                o = sa(
                  Error(
                    "This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."
                  ),
                  e
                ), zs(o), e = vy(
                  t,
                  e,
                  i,
                  a
                );
                break t;
              } else
                for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, Ie = en(t.firstChild), za = e, ie = !0, Zf = null, hc = !1, tu = null, Vu = !0, a = hb(
                  e,
                  null,
                  i,
                  a
                ), e.child = a; a; )
                  a.flags = a.flags & -3 | 4096, a = a.sibling;
            else {
              if (xi(), i === o) {
                e = Ln(
                  t,
                  e,
                  a
                );
                break t;
              }
              ql(
                t,
                e,
                i,
                a
              );
            }
            e = e.child;
          }
          return e;
        case 26:
          return $s(t, e), t === null ? (a = t0(
            e.type,
            null,
            e.pendingProps,
            null
          )) ? e.memoizedState = a : ie || (a = e.type, t = e.pendingProps, i = Qe(
            ln.current
          ), i = rr(
            i
          ).createElement(a), i[We] = e, i[Oa] = t, ke(i, a, t), ht(i), e.stateNode = i) : e.memoizedState = t0(
            e.type,
            t.memoizedProps,
            e.pendingProps,
            t.memoizedState
          ), null;
        case 27:
          return P(e), t === null && ie && (i = Qe(ln.current), o = L(), i = e.stateNode = pi(
            e.type,
            e.pendingProps,
            i,
            o,
            !1
          ), hc || (o = Ua(
            i,
            e.type,
            e.pendingProps,
            o
          ), o !== null && (Hc(e, 0).serverProps = o)), za = e, Vu = !0, o = Ie, ic(e.type) ? (m1 = o, Ie = en(
            i.firstChild
          )) : Ie = o), ql(
            t,
            e,
            e.pendingProps.children,
            a
          ), $s(t, e), t === null && (e.flags |= 4194304), e.child;
        case 5:
          return t === null && ie && (f = L(), i = ys(
            e.type,
            f.ancestorInfo
          ), o = Ie, (d = !o) || (d = Av(
            o,
            e.type,
            e.pendingProps,
            Vu
          ), d !== null ? (e.stateNode = d, hc || (f = Ua(
            d,
            e.type,
            e.pendingProps,
            f
          ), f !== null && (Hc(e, 0).serverProps = f)), za = e, Ie = en(
            d.firstChild
          ), Vu = !1, f = !0) : f = !1, d = !f), d && (i && la(e, o), yn(e))), P(e), o = e.type, f = e.pendingProps, d = t !== null ? t.memoizedProps : null, i = f.children, Ef(o, f) ? i = null : d !== null && Ef(o, d) && (e.flags |= 32), e.memoizedState !== null && (o = ey(
            t,
            e,
            Bs,
            null,
            null,
            a
          ), hp._currentValue = o), $s(t, e), ql(
            t,
            e,
            i,
            a
          ), e.child;
        case 6:
          return t === null && ie && (a = e.pendingProps, t = L(), i = t.ancestorInfo.current, a = i != null ? ps(
            a,
            i.tag,
            t.ancestorInfo.implicitRootScope
          ) : !0, t = Ie, (i = !t) || (i = Ov(
            t,
            e.pendingProps,
            Vu
          ), i !== null ? (e.stateNode = i, za = e, Ie = null, i = !0) : i = !1, i = !i), i && (a && la(e, t), yn(e))), null;
        case 13:
          return Vd(t, e, a);
        case 4:
          return je(
            e,
            e.stateNode.containerInfo
          ), i = e.pendingProps, t === null ? e.child = Gr(
            e,
            null,
            i,
            a
          ) : ql(
            t,
            e,
            i,
            a
          ), e.child;
        case 11:
          return Zp(
            t,
            e,
            e.type,
            e.pendingProps,
            a
          );
        case 7:
          return ql(
            t,
            e,
            e.pendingProps,
            a
          ), e.child;
        case 8:
          return ql(
            t,
            e,
            e.pendingProps.children,
            a
          ), e.child;
        case 12:
          return e.flags |= 4, e.flags |= 2048, i = e.stateNode, i.effectDuration = -0, i.passiveEffectDuration = -0, ql(
            t,
            e,
            e.pendingProps.children,
            a
          ), e.child;
        case 10:
          return i = e.type, o = e.pendingProps, f = o.value, "value" in o || Gb || (Gb = !0, console.error(
            "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"
          )), pn(e, i, f), ql(
            t,
            e,
            o.children,
            a
          ), e.child;
        case 9:
          return o = e.type._context, i = e.pendingProps.children, typeof i != "function" && console.error(
            "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
          ), wi(e), o = ge(o), i = HS(
            i,
            o,
            void 0
          ), e.flags |= 1, ql(
            t,
            e,
            i,
            a
          ), e.child;
        case 14:
          return sy(
            t,
            e,
            e.type,
            e.pendingProps,
            a
          );
        case 15:
          return ry(
            t,
            e,
            e.type,
            e.pendingProps,
            a
          );
        case 19:
          return by(
            t,
            e,
            a
          );
        case 31:
          return Jp(t, e, a);
        case 22:
          return dy(
            t,
            e,
            a,
            e.pendingProps
          );
        case 24:
          return wi(e), i = ge(wl), t === null ? (o = ai(), o === null && (o = Xe, f = Ad(), o.pooledCache = f, Bc(f), f !== null && (o.pooledCacheLanes |= a), o = f), e.memoizedState = {
            parent: i,
            cache: o
          }, ne(e), pn(e, wl, o)) : ((t.lanes & a) !== 0 && (pu(t, e), gu(e, null, null, a), ko()), o = t.memoizedState, f = e.memoizedState, o.parent !== i ? (o = {
            parent: i,
            cache: i
          }, e.memoizedState = o, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = o), pn(e, wl, i)) : (i = f.cache, pn(e, wl, i), i !== o.cache && ti(
            e,
            [wl],
            a,
            !0
          ))), ql(
            t,
            e,
            e.pendingProps.children,
            a
          ), e.child;
        case 29:
          throw e.pendingProps;
      }
      throw Error(
        "Unknown unit of work tag (" + e.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function zu(t) {
      t.flags |= 4;
    }
    function $d(t, e, a, i, o) {
      if ((e = (t.mode & qE) !== Ct) && (e = !1), e) {
        if (t.flags |= 16777216, (o & 335544128) === o)
          if (t.stateNode.complete) t.flags |= 8192;
          else if (xy()) t.flags |= 8192;
          else
            throw xr = fg, BS;
      } else t.flags &= -16777217;
    }
    function $p(t, e) {
      if (e.type !== "stylesheet" || (e.state.loading & ku) !== Wr)
        t.flags &= -16777217;
      else if (t.flags |= 16777216, !ae(e))
        if (xy()) t.flags |= 8192;
        else
          throw xr = fg, BS;
    }
    function of(t, e) {
      e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Mo() : 536870912, t.lanes |= e, Vr |= e);
    }
    function ff(t, e) {
      if (!ie)
        switch (t.tailMode) {
          case "hidden":
            e = t.tail;
            for (var a = null; e !== null; )
              e.alternate !== null && (a = e), e = e.sibling;
            a === null ? t.tail = null : a.sibling = null;
            break;
          case "collapsed":
            a = t.tail;
            for (var i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : i.sibling = null;
        }
    }
    function Me(t) {
      var e = t.alternate !== null && t.alternate.child === t.child, a = 0, i = 0;
      if (e)
        if ((t.mode & Wt) !== Ct) {
          for (var o = t.selfBaseDuration, f = t.child; f !== null; )
            a |= f.lanes | f.childLanes, i |= f.subtreeFlags & 65011712, i |= f.flags & 65011712, o += f.treeBaseDuration, f = f.sibling;
          t.treeBaseDuration = o;
        } else
          for (o = t.child; o !== null; )
            a |= o.lanes | o.childLanes, i |= o.subtreeFlags & 65011712, i |= o.flags & 65011712, o.return = t, o = o.sibling;
      else if ((t.mode & Wt) !== Ct) {
        o = t.actualDuration, f = t.selfBaseDuration;
        for (var d = t.child; d !== null; )
          a |= d.lanes | d.childLanes, i |= d.subtreeFlags, i |= d.flags, o += d.actualDuration, f += d.treeBaseDuration, d = d.sibling;
        t.actualDuration = o, t.treeBaseDuration = f;
      } else
        for (o = t.child; o !== null; )
          a |= o.lanes | o.childLanes, i |= o.subtreeFlags, i |= o.flags, o.return = t, o = o.sibling;
      return t.subtreeFlags |= i, t.childLanes = a, e;
    }
    function Ey(t, e, a) {
      var i = e.pendingProps;
      switch (Ed(e), e.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return Me(e), null;
        case 1:
          return Me(e), null;
        case 3:
          return a = e.stateNode, i = null, t !== null && (i = t.memoizedState.cache), e.memoizedState.cache !== i && (e.flags |= 2048), jn(wl, e), D(e), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (t === null || t.child === null) && (Nc(e) ? (Gi(), zu(e)) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Os())), Me(e), null;
        case 26:
          var o = e.type, f = e.memoizedState;
          return t === null ? (zu(e), f !== null ? (Me(e), $p(
            e,
            f
          )) : (Me(e), $d(
            e,
            o,
            null,
            i,
            a
          ))) : f ? f !== t.memoizedState ? (zu(e), Me(e), $p(
            e,
            f
          )) : (Me(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== i && zu(e), Me(e), $d(
            e,
            o,
            t,
            i,
            a
          )), null;
        case 27:
          if (pt(e), a = Qe(ln.current), o = e.type, t !== null && e.stateNode != null)
            t.memoizedProps !== i && zu(e);
          else {
            if (!i) {
              if (e.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return Me(e), null;
            }
            t = L(), Nc(e) ? Jm(e) : (t = pi(
              o,
              i,
              a,
              t,
              !0
            ), e.stateNode = t, zu(e));
          }
          return Me(e), null;
        case 5:
          if (pt(e), o = e.type, t !== null && e.stateNode != null)
            t.memoizedProps !== i && zu(e);
          else {
            if (!i) {
              if (e.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return Me(e), null;
            }
            var d = L();
            if (Nc(e))
              Jm(e);
            else {
              switch (f = Qe(ln.current), ys(o, d.ancestorInfo), d = d.context, f = rr(f), d) {
                case vm:
                  f = f.createElementNS(
                    Kt,
                    o
                  );
                  break;
                case Yg:
                  f = f.createElementNS(
                    Xt,
                    o
                  );
                  break;
                default:
                  switch (o) {
                    case "svg":
                      f = f.createElementNS(
                        Kt,
                        o
                      );
                      break;
                    case "math":
                      f = f.createElementNS(
                        Xt,
                        o
                      );
                      break;
                    case "script":
                      f = f.createElement("div"), f.innerHTML = "<script><\/script>", f = f.removeChild(
                        f.firstChild
                      );
                      break;
                    case "select":
                      f = typeof i.is == "string" ? f.createElement("select", {
                        is: i.is
                      }) : f.createElement("select"), i.multiple ? f.multiple = !0 : i.size && (f.size = i.size);
                      break;
                    default:
                      f = typeof i.is == "string" ? f.createElement(o, {
                        is: i.is
                      }) : f.createElement(o), o.indexOf("-") === -1 && (o !== o.toLowerCase() && console.error(
                        "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
                        o
                      ), Object.prototype.toString.call(f) !== "[object HTMLUnknownElement]" || an.call(f2, o) || (f2[o] = !0, console.error(
                        "The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",
                        o
                      )));
                  }
              }
              f[We] = e, f[Oa] = i;
              t: for (d = e.child; d !== null; ) {
                if (d.tag === 5 || d.tag === 6)
                  f.appendChild(d.stateNode);
                else if (d.tag !== 4 && d.tag !== 27 && d.child !== null) {
                  d.child.return = d, d = d.child;
                  continue;
                }
                if (d === e) break t;
                for (; d.sibling === null; ) {
                  if (d.return === null || d.return === e)
                    break t;
                  d = d.return;
                }
                d.sibling.return = d.return, d = d.sibling;
              }
              e.stateNode = f;
              t: switch (ke(f, o, i), o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  i = !!i.autoFocus;
                  break t;
                case "img":
                  i = !0;
                  break t;
                default:
                  i = !1;
              }
              i && zu(e);
            }
          }
          return Me(e), $d(
            e,
            e.type,
            t === null ? null : t.memoizedProps,
            e.pendingProps,
            a
          ), null;
        case 6:
          if (t && e.stateNode != null)
            t.memoizedProps !== i && zu(e);
          else {
            if (typeof i != "string" && e.stateNode === null)
              throw Error(
                "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
              );
            if (t = Qe(ln.current), a = L(), Nc(e)) {
              if (t = e.stateNode, a = e.memoizedProps, o = !hc, i = null, f = za, f !== null)
                switch (f.tag) {
                  case 3:
                    o && (o = Dv(
                      t,
                      a,
                      i
                    ), o !== null && (Hc(e, 0).serverProps = o));
                    break;
                  case 27:
                  case 5:
                    i = f.memoizedProps, o && (o = Dv(
                      t,
                      a,
                      i
                    ), o !== null && (Hc(
                      e,
                      0
                    ).serverProps = o));
                }
              t[We] = e, t = !!(t.nodeValue === a || i !== null && i.suppressHydrationWarning === !0 || $y(t.nodeValue, a)), t || yn(e, !0);
            } else
              o = a.ancestorInfo.current, o != null && ps(
                i,
                o.tag,
                a.ancestorInfo.implicitRootScope
              ), t = rr(t).createTextNode(
                i
              ), t[We] = e, e.stateNode = t;
          }
          return Me(e), null;
        case 31:
          if (a = e.memoizedState, t === null || t.memoizedState !== null) {
            if (i = Nc(e), a !== null) {
              if (t === null) {
                if (!i)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t)
                  throw Error(
                    "Expected to have a hydrated activity instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                t[We] = e, Me(e), (e.mode & Wt) !== Ct && a !== null && (t = e.child, t !== null && (e.treeBaseDuration -= t.treeBaseDuration));
              } else
                Gi(), xi(), (e.flags & 128) === 0 && (a = e.memoizedState = null), e.flags |= 4, Me(e), (e.mode & Wt) !== Ct && a !== null && (t = e.child, t !== null && (e.treeBaseDuration -= t.treeBaseDuration));
              t = !1;
            } else
              a = Os(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a), t = !0;
            if (!t)
              return e.flags & 256 ? (Yl(e), e) : (Yl(e), null);
            if ((e.flags & 128) !== 0)
              throw Error(
                "Client rendering an Activity suspended it again. This is a bug in React."
              );
          }
          return Me(e), null;
        case 13:
          if (i = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
            if (o = i, f = Nc(e), o !== null && o.dehydrated !== null) {
              if (t === null) {
                if (!f)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (f = e.memoizedState, f = f !== null ? f.dehydrated : null, !f)
                  throw Error(
                    "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                f[We] = e, Me(e), (e.mode & Wt) !== Ct && o !== null && (o = e.child, o !== null && (e.treeBaseDuration -= o.treeBaseDuration));
              } else
                Gi(), xi(), (e.flags & 128) === 0 && (o = e.memoizedState = null), e.flags |= 4, Me(e), (e.mode & Wt) !== Ct && o !== null && (o = e.child, o !== null && (e.treeBaseDuration -= o.treeBaseDuration));
              o = !1;
            } else
              o = Os(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = o), o = !0;
            if (!o)
              return e.flags & 256 ? (Yl(e), e) : (Yl(e), null);
          }
          return Yl(e), (e.flags & 128) !== 0 ? (e.lanes = a, (e.mode & Wt) !== Ct && jc(e), e) : (a = i !== null, t = t !== null && t.memoizedState !== null, a && (i = e.child, o = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (o = i.alternate.memoizedState.cachePool.pool), f = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (f = i.memoizedState.cachePool.pool), f !== o && (i.flags |= 2048)), a !== t && a && (e.child.flags |= 8192), of(e, e.updateQueue), Me(e), (e.mode & Wt) !== Ct && a && (t = e.child, t !== null && (e.treeBaseDuration -= t.treeBaseDuration)), null);
        case 4:
          return D(e), t === null && nc(
            e.stateNode.containerInfo
          ), Me(e), null;
        case 10:
          return jn(e.type, e), Me(e), null;
        case 19:
          if (yt(Ml, e), i = e.memoizedState, i === null) return Me(e), null;
          if (o = (e.flags & 128) !== 0, f = i.rendering, f === null)
            if (o) ff(i, !1);
            else {
              if (sl !== zo || t !== null && (t.flags & 128) !== 0)
                for (t = e.child; t !== null; ) {
                  if (f = xc(t), f !== null) {
                    for (e.flags |= 128, ff(i, !1), t = f.updateQueue, e.updateQueue = t, of(e, t), e.subtreeFlags = 0, t = a, a = e.child; a !== null; )
                      Lm(a, t), a = a.sibling;
                    return jt(
                      Ml,
                      Ml.current & um | k0,
                      e
                    ), ie && Yn(e, i.treeForkCount), e.child;
                  }
                  t = t.sibling;
                }
              i.tail !== null && Gl() > Tg && (e.flags |= 128, o = !0, ff(i, !1), e.lanes = 4194304);
            }
          else {
            if (!o)
              if (t = xc(f), t !== null) {
                if (e.flags |= 128, o = !0, t = t.updateQueue, e.updateQueue = t, of(e, t), ff(i, !0), i.tail === null && i.tailMode === "hidden" && !f.alternate && !ie)
                  return Me(e), null;
              } else
                2 * Gl() - i.renderingStartTime > Tg && a !== 536870912 && (e.flags |= 128, o = !0, ff(i, !1), e.lanes = 4194304);
            i.isBackwards ? (f.sibling = e.child, e.child = f) : (t = i.last, t !== null ? t.sibling = f : e.child = f, i.last = f);
          }
          return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Gl(), t.sibling = null, a = Ml.current, a = o ? a & um | k0 : a & um, jt(Ml, a, e), ie && Yn(e, i.treeForkCount), t) : (Me(e), null);
        case 22:
        case 23:
          return Yl(e), wn(e), i = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== i && (e.flags |= 8192) : i && (e.flags |= 8192), i ? (a & 536870912) !== 0 && (e.flags & 128) === 0 && (Me(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Me(e), a = e.updateQueue, a !== null && of(e, a.retryQueue), a = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), i = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool), i !== a && (e.flags |= 2048), t !== null && yt(jr, e), null;
        case 24:
          return a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), jn(wl, e), Me(e), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(
        "Unknown unit of work tag (" + e.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function kp(t, e) {
      switch (Ed(e), e.tag) {
        case 1:
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, (e.mode & Wt) !== Ct && jc(e), e) : null;
        case 3:
          return jn(wl, e), D(e), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
        case 26:
        case 27:
        case 5:
          return pt(e), null;
        case 31:
          if (e.memoizedState !== null) {
            if (Yl(e), e.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            xi();
          }
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, (e.mode & Wt) !== Ct && jc(e), e) : null;
        case 13:
          if (Yl(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
            if (e.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            xi();
          }
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, (e.mode & Wt) !== Ct && jc(e), e) : null;
        case 19:
          return yt(Ml, e), null;
        case 4:
          return D(e), null;
        case 10:
          return jn(e.type, e), null;
        case 22:
        case 23:
          return Yl(e), wn(e), t !== null && yt(jr, e), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, (e.mode & Wt) !== Ct && jc(e), e) : null;
        case 24:
          return jn(wl, e), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function Ty(t, e) {
      switch (Ed(e), e.tag) {
        case 3:
          jn(wl, e), D(e);
          break;
        case 26:
        case 27:
        case 5:
          pt(e);
          break;
        case 4:
          D(e);
          break;
        case 31:
          e.memoizedState !== null && Yl(e);
          break;
        case 13:
          Yl(e);
          break;
        case 19:
          yt(Ml, e);
          break;
        case 10:
          jn(e.type, e);
          break;
        case 22:
        case 23:
          Yl(e), wn(e), t !== null && yt(jr, e);
          break;
        case 24:
          jn(wl, e);
      }
    }
    function _u(t) {
      return (t.mode & Wt) !== Ct;
    }
    function Wp(t, e) {
      _u(t) ? (il(), ri(e, t), da()) : ri(e, t);
    }
    function kd(t, e, a) {
      _u(t) ? (il(), Ii(
        a,
        t,
        e
      ), da()) : Ii(
        a,
        t,
        e
      );
    }
    function ri(t, e) {
      try {
        var a = e.updateQueue, i = a !== null ? a.lastEffect : null;
        if (i !== null) {
          var o = i.next;
          a = o;
          do {
            if ((a.tag & t) === t && (i = void 0, (t & on) !== rg && (mm = !0), i = ct(
              e,
              LE,
              a
            ), (t & on) !== rg && (mm = !1), i !== void 0 && typeof i != "function")) {
              var f = void 0;
              f = (a.tag & lu) !== 0 ? "useLayoutEffect" : (a.tag & on) !== 0 ? "useInsertionEffect" : "useEffect";
              var d = void 0;
              d = i === null ? " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof i.then == "function" ? `

It looks like you wrote ` + f + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + f + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching` : " You returned: " + i, ct(
                e,
                function(h, y) {
                  console.error(
                    "%s must not return anything besides a function, which is used for clean-up.%s",
                    h,
                    y
                  );
                },
                f,
                d
              );
            }
            a = a.next;
          } while (a !== o);
        }
      } catch (h) {
        Jt(e, e.return, h);
      }
    }
    function Ii(t, e, a) {
      try {
        var i = e.updateQueue, o = i !== null ? i.lastEffect : null;
        if (o !== null) {
          var f = o.next;
          i = f;
          do {
            if ((i.tag & t) === t) {
              var d = i.inst, h = d.destroy;
              h !== void 0 && (d.destroy = void 0, (t & on) !== rg && (mm = !0), o = e, ct(
                o,
                VE,
                o,
                a,
                h
              ), (t & on) !== rg && (mm = !1));
            }
            i = i.next;
          } while (i !== f);
        }
      } catch (y) {
        Jt(e, e.return, y);
      }
    }
    function Fs(t, e) {
      _u(t) ? (il(), ri(e, t), da()) : ri(e, t);
    }
    function Wd(t, e, a) {
      _u(t) ? (il(), Ii(
        a,
        t,
        e
      ), da()) : Ii(
        a,
        t,
        e
      );
    }
    function Ay(t) {
      var e = t.updateQueue;
      if (e !== null) {
        var a = t.stateNode;
        t.type.defaultProps || "ref" in t.memoizedProps || fm || (a.props !== t.memoizedProps && console.error(
          "Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
          st(t) || "instance"
        ), a.state !== t.memoizedState && console.error(
          "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
          st(t) || "instance"
        ));
        try {
          ct(
            t,
            Wo,
            e,
            a
          );
        } catch (i) {
          Jt(t, t.return, i);
        }
      }
    }
    function Is(t, e, a) {
      return t.getSnapshotBeforeUpdate(e, a);
    }
    function Fp(t, e) {
      var a = e.memoizedProps, i = e.memoizedState;
      e = t.stateNode, t.type.defaultProps || "ref" in t.memoizedProps || fm || (e.props !== t.memoizedProps && console.error(
        "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
        st(t) || "instance"
      ), e.state !== t.memoizedState && console.error(
        "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
        st(t) || "instance"
      ));
      try {
        var o = Ou(
          t.type,
          a
        ), f = ct(
          t,
          Is,
          e,
          o,
          i
        );
        a = wb, f !== void 0 || a.has(t.type) || (a.add(t.type), ct(t, function() {
          console.error(
            "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",
            st(t)
          );
        })), e.__reactInternalSnapshotBeforeUpdate = f;
      } catch (d) {
        Jt(t, t.return, d);
      }
    }
    function Fd(t, e, a) {
      a.props = Ou(
        t.type,
        t.memoizedProps
      ), a.state = t.memoizedState, _u(t) ? (il(), ct(
        t,
        ub,
        t,
        e,
        a
      ), da()) : ct(
        t,
        ub,
        t,
        e,
        a
      );
    }
    function Ip(t) {
      var e = t.ref;
      if (e !== null) {
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
        if (typeof e == "function")
          if (_u(t))
            try {
              il(), t.refCleanup = e(a);
            } finally {
              da();
            }
          else t.refCleanup = e(a);
        else
          typeof e == "string" ? console.error("String refs are no longer supported.") : e.hasOwnProperty("current") || console.error(
            "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",
            st(t)
          ), e.current = a;
      }
    }
    function Fc(t, e) {
      try {
        ct(t, Ip, t);
      } catch (a) {
        Jt(t, e, a);
      }
    }
    function En(t, e) {
      var a = t.ref, i = t.refCleanup;
      if (a !== null)
        if (typeof i == "function")
          try {
            if (_u(t))
              try {
                il(), ct(t, i);
              } finally {
                da(t);
              }
            else ct(t, i);
          } catch (o) {
            Jt(t, e, o);
          } finally {
            t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
          }
        else if (typeof a == "function")
          try {
            if (_u(t))
              try {
                il(), ct(t, a, null);
              } finally {
                da(t);
              }
            else ct(t, a, null);
          } catch (o) {
            Jt(t, e, o);
          }
        else a.current = null;
    }
    function Oy(t, e, a, i) {
      var o = t.memoizedProps, f = o.id, d = o.onCommit;
      o = o.onRender, e = e === null ? "mount" : "update", ug && (e = "nested-update"), typeof o == "function" && o(
        f,
        e,
        t.actualDuration,
        t.treeBaseDuration,
        t.actualStartTime,
        a
      ), typeof d == "function" && d(f, e, i, a);
    }
    function Pp(t, e, a, i) {
      var o = t.memoizedProps;
      t = o.id, o = o.onPostCommit, e = e === null ? "mount" : "update", ug && (e = "nested-update"), typeof o == "function" && o(
        t,
        e,
        i,
        a
      );
    }
    function Pi(t) {
      var e = t.type, a = t.memoizedProps, i = t.stateNode;
      try {
        ct(
          t,
          dv,
          i,
          e,
          a,
          t
        );
      } catch (o) {
        Jt(t, t.return, o);
      }
    }
    function Id(t, e, a) {
      try {
        ct(
          t,
          gh,
          t.stateNode,
          t.type,
          a,
          e,
          t
        );
      } catch (i) {
        Jt(t, t.return, i);
      }
    }
    function zy(t) {
      return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && ic(t.type) || t.tag === 4;
    }
    function Pd(t) {
      t: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || zy(t.return)) return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
          if (t.tag === 27 && ic(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & 2)) return t.stateNode;
      }
    }
    function sf(t, e, a) {
      var i = t.tag;
      if (i === 5 || i === 6)
        t = t.stateNode, e ? (mv(a), (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(t, e)) : (mv(a), e = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, e.appendChild(t), a = a._reactRootContainer, a != null || e.onclick !== null || (e.onclick = hn));
      else if (i !== 4 && (i === 27 && ic(t.type) && (a = t.stateNode, e = null), t = t.child, t !== null))
        for (sf(t, e, a), t = t.sibling; t !== null; )
          sf(t, e, a), t = t.sibling;
    }
    function Ps(t, e, a) {
      var i = t.tag;
      if (i === 5 || i === 6)
        t = t.stateNode, e ? a.insertBefore(t, e) : a.appendChild(t);
      else if (i !== 4 && (i === 27 && ic(t.type) && (a = t.stateNode), t = t.child, t !== null))
        for (Ps(t, e, a), t = t.sibling; t !== null; )
          Ps(t, e, a), t = t.sibling;
    }
    function _y(t) {
      for (var e, a = t.return; a !== null; ) {
        if (zy(a)) {
          e = a;
          break;
        }
        a = a.return;
      }
      if (e == null)
        throw Error(
          "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
        );
      switch (e.tag) {
        case 27:
          e = e.stateNode, a = Pd(t), Ps(
            t,
            a,
            e
          );
          break;
        case 5:
          a = e.stateNode, e.flags & 32 && (Sh(a), e.flags &= -33), e = Pd(t), Ps(
            t,
            e,
            a
          );
          break;
        case 3:
        case 4:
          e = e.stateNode.containerInfo, a = Pd(t), sf(
            t,
            a,
            e
          );
          break;
        default:
          throw Error(
            "Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue."
          );
      }
    }
    function Dy(t) {
      var e = t.stateNode, a = t.memoizedProps;
      try {
        ct(
          t,
          Bu,
          t.type,
          a,
          e,
          t
        );
      } catch (i) {
        Jt(t, t.return, i);
      }
    }
    function Ry(t, e) {
      return e.tag === 31 ? (e = e.memoizedState, t.memoizedState !== null && e === null) : e.tag === 13 ? (t = t.memoizedState, e = e.memoizedState, t !== null && t.dehydrated !== null && (e === null || e.dehydrated === null)) : e.tag === 3 ? t.memoizedState.isDehydrated && (e.flags & 256) === 0 : !1;
    }
    function eS(t, e) {
      if (t = t.containerInfo, r1 = Gg, t = md(t), Ym(t)) {
        if ("selectionStart" in t)
          var a = {
            start: t.selectionStart,
            end: t.selectionEnd
          };
        else
          t: {
            a = (a = t.ownerDocument) && a.defaultView || window;
            var i = a.getSelection && a.getSelection();
            if (i && i.rangeCount !== 0) {
              a = i.anchorNode;
              var o = i.anchorOffset, f = i.focusNode;
              i = i.focusOffset;
              try {
                a.nodeType, f.nodeType;
              } catch {
                a = null;
                break t;
              }
              var d = 0, h = -1, y = -1, p = 0, z = 0, R = t, E = null;
              e: for (; ; ) {
                for (var q; R !== a || o !== 0 && R.nodeType !== 3 || (h = d + o), R !== f || i !== 0 && R.nodeType !== 3 || (y = d + i), R.nodeType === 3 && (d += R.nodeValue.length), (q = R.firstChild) !== null; )
                  E = R, R = q;
                for (; ; ) {
                  if (R === t) break e;
                  if (E === a && ++p === o && (h = d), E === f && ++z === i && (y = d), (q = R.nextSibling) !== null) break;
                  R = E, E = R.parentNode;
                }
                R = q;
              }
              a = h === -1 || y === -1 ? null : { start: h, end: y };
            } else a = null;
          }
        a = a || { start: 0, end: 0 };
      } else a = null;
      for (d1 = {
        focusedElem: t,
        selectionRange: a
      }, Gg = !1, ca = e; ca !== null; )
        if (e = ca, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null)
          t.return = e, ca = t;
        else
          for (; ca !== null; ) {
            switch (t = e = ca, a = t.alternate, o = t.flags, t.tag) {
              case 0:
                if ((o & 4) !== 0 && (t = t.updateQueue, t = t !== null ? t.events : null, t !== null))
                  for (a = 0; a < t.length; a++)
                    o = t[a], o.ref.impl = o.nextImpl;
                break;
              case 11:
              case 15:
                break;
              case 1:
                (o & 1024) !== 0 && a !== null && Fp(t, a);
                break;
              case 3:
                if ((o & 1024) !== 0) {
                  if (t = t.stateNode.containerInfo, a = t.nodeType, a === 9)
                    Af(t);
                  else if (a === 1)
                    switch (t.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        Af(t);
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
                if ((o & 1024) !== 0)
                  throw Error(
                    "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."
                  );
            }
            if (t = e.sibling, t !== null) {
              t.return = e.return, ca = t;
              break;
            }
            ca = e.return;
          }
    }
    function th(t, e, a) {
      var i = Ke(), o = vn(), f = Va(), d = gn(), h = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Fa(t, a), h & 4 && Wp(a, lu | Ku);
          break;
        case 1:
          if (Fa(t, a), h & 4)
            if (t = a.stateNode, e === null)
              a.type.defaultProps || "ref" in a.memoizedProps || fm || (t.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                st(a) || "instance"
              ), t.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                st(a) || "instance"
              )), _u(a) ? (il(), ct(
                a,
                NS,
                a,
                t
              ), da()) : ct(
                a,
                NS,
                a,
                t
              );
            else {
              var y = Ou(
                a.type,
                e.memoizedProps
              );
              e = e.memoizedState, a.type.defaultProps || "ref" in a.memoizedProps || fm || (t.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                st(a) || "instance"
              ), t.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                st(a) || "instance"
              )), _u(a) ? (il(), ct(
                a,
                lb,
                a,
                t,
                y,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              ), da()) : ct(
                a,
                lb,
                a,
                t,
                y,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              );
            }
          h & 64 && Ay(a), h & 512 && Fc(a, a.return);
          break;
        case 3:
          if (e = yu(), Fa(t, a), h & 64 && (h = a.updateQueue, h !== null)) {
            if (y = null, a.child !== null)
              switch (a.child.tag) {
                case 27:
                case 5:
                  y = a.child.stateNode;
                  break;
                case 1:
                  y = a.child.stateNode;
              }
            try {
              ct(
                a,
                Wo,
                h,
                y
              );
            } catch (z) {
              Jt(a, a.return, z);
            }
          }
          t.effectDuration += Jo(e);
          break;
        case 27:
          e === null && h & 4 && Dy(a);
        case 26:
        case 5:
          if (Fa(t, a), e === null) {
            if (h & 4) Pi(a);
            else if (h & 64) {
              t = a.type, e = a.memoizedProps, y = a.stateNode;
              try {
                ct(
                  a,
                  hv,
                  y,
                  t,
                  e,
                  a
                );
              } catch (z) {
                Jt(
                  a,
                  a.return,
                  z
                );
              }
            }
          }
          h & 512 && Fc(a, a.return);
          break;
        case 12:
          if (h & 4) {
            h = yu(), Fa(t, a), t = a.stateNode, t.effectDuration += ra(h);
            try {
              ct(
                a,
                Oy,
                a,
                e,
                Jf,
                t.effectDuration
              );
            } catch (z) {
              Jt(a, a.return, z);
            }
          } else Fa(t, a);
          break;
        case 31:
          Fa(t, a), h & 4 && Cy(t, a);
          break;
        case 13:
          Fa(t, a), h & 4 && Uy(t, a), h & 64 && (t = a.memoizedState, t !== null && (t = t.dehydrated, t !== null && (h = hi.bind(
            null,
            a
          ), zv(t, h))));
          break;
        case 22:
          if (h = a.memoizedState !== null || Oo, !h) {
            e = e !== null && e.memoizedState !== null || Vl, y = Oo;
            var p = Vl;
            Oo = h, (Vl = e) && !p ? (Vn(
              t,
              a,
              (a.subtreeFlags & 8772) !== 0
            ), (a.mode & Wt) !== Ct && 0 <= Tt && 0 <= Dt && 0.05 < Dt - Tt && yd(
              a,
              Tt,
              Dt
            )) : Fa(t, a), Oo = y, Vl = p;
          }
          break;
        case 30:
          break;
        default:
          Fa(t, a);
      }
      (a.mode & Wt) !== Ct && 0 <= Tt && 0 <= Dt && ((pl || 0.05 < fl) && Bn(
        a,
        Tt,
        Dt,
        fl,
        nl
      ), a.alternate === null && a.return !== null && a.return.alternate !== null && 0.05 < Dt - Tt && (Ry(
        a.return.alternate,
        a.return
      ) || mn(
        a,
        Tt,
        Dt,
        "Mount"
      ))), Nl(i), La(o), nl = f, pl = d;
    }
    function ml(t) {
      var e = t.alternate;
      e !== null && (t.alternate = null, ml(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && M(e)), t.stateNode = null, t._debugOwner = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
    }
    function Ve(t, e, a) {
      for (a = a.child; a !== null; )
        My(
          t,
          e,
          a
        ), a = a.sibling;
    }
    function My(t, e, a) {
      if (Dl && typeof Dl.onCommitFiberUnmount == "function")
        try {
          Dl.onCommitFiberUnmount(so, a);
        } catch (p) {
          ju || (ju = !0, console.error(
            "React instrumentation encountered an error: %o",
            p
          ));
        }
      var i = Ke(), o = vn(), f = Va(), d = gn();
      switch (a.tag) {
        case 26:
          Vl || En(a, e), Ve(
            t,
            e,
            a
          ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (t = a.stateNode, t.parentNode.removeChild(t));
          break;
        case 27:
          Vl || En(a, e);
          var h = Zl, y = _n;
          ic(a.type) && (Zl = a.stateNode, _n = !1), Ve(
            t,
            e,
            a
          ), ct(
            a,
            vi,
            a.stateNode
          ), Zl = h, _n = y;
          break;
        case 5:
          Vl || En(a, e);
        case 6:
          if (h = Zl, y = _n, Zl = null, Ve(
            t,
            e,
            a
          ), Zl = h, _n = y, Zl !== null)
            if (_n)
              try {
                ct(
                  a,
                  pv,
                  Zl,
                  a.stateNode
                );
              } catch (p) {
                Jt(
                  a,
                  e,
                  p
                );
              }
            else
              try {
                ct(
                  a,
                  yv,
                  Zl,
                  a.stateNode
                );
              } catch (p) {
                Jt(
                  a,
                  e,
                  p
                );
              }
          break;
        case 18:
          Zl !== null && (_n ? (t = Zl, lo(
            t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
            a.stateNode
          ), io(t)) : lo(Zl, a.stateNode));
          break;
        case 4:
          h = Zl, y = _n, Zl = a.stateNode.containerInfo, _n = !0, Ve(
            t,
            e,
            a
          ), Zl = h, _n = y;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          Ii(
            on,
            a,
            e
          ), Vl || kd(
            a,
            e,
            lu
          ), Ve(
            t,
            e,
            a
          );
          break;
        case 1:
          Vl || (En(a, e), h = a.stateNode, typeof h.componentWillUnmount == "function" && Fd(
            a,
            e,
            h
          )), Ve(
            t,
            e,
            a
          );
          break;
        case 21:
          Ve(
            t,
            e,
            a
          );
          break;
        case 22:
          Vl = (h = Vl) || a.memoizedState !== null, Ve(
            t,
            e,
            a
          ), Vl = h;
          break;
        default:
          Ve(
            t,
            e,
            a
          );
      }
      (a.mode & Wt) !== Ct && 0 <= Tt && 0 <= Dt && (pl || 0.05 < fl) && Bn(
        a,
        Tt,
        Dt,
        fl,
        nl
      ), Nl(i), La(o), nl = f, pl = d;
    }
    function Cy(t, e) {
      if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
        t = t.dehydrated;
        try {
          ct(
            e,
            bh,
            t
          );
        } catch (a) {
          Jt(e, e.return, a);
        }
      }
    }
    function Uy(t, e) {
      if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
        try {
          ct(
            e,
            Iy,
            t
          );
        } catch (a) {
          Jt(e, e.return, a);
        }
    }
    function tv(t) {
      switch (t.tag) {
        case 31:
        case 13:
        case 19:
          var e = t.stateNode;
          return e === null && (e = t.stateNode = new Xb()), e;
        case 22:
          return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new Xb()), e;
        default:
          throw Error(
            "Unexpected Suspense handler tag (" + t.tag + "). This is a bug in React."
          );
      }
    }
    function tc(t, e) {
      var a = tv(t);
      e.forEach(function(i) {
        if (!a.has(i)) {
          if (a.add(i), qu)
            if (sm !== null && rm !== null)
              pf(rm, sm);
            else
              throw Error(
                "Expected finished root and lanes to be set. This is a bug in React."
              );
          var o = to.bind(null, t, i);
          i.then(o, o);
        }
      });
    }
    function va(t, e) {
      var a = e.deletions;
      if (a !== null)
        for (var i = 0; i < a.length; i++) {
          var o = t, f = e, d = a[i], h = Ke(), y = f;
          t: for (; y !== null; ) {
            switch (y.tag) {
              case 27:
                if (ic(y.type)) {
                  Zl = y.stateNode, _n = !1;
                  break t;
                }
                break;
              case 5:
                Zl = y.stateNode, _n = !1;
                break t;
              case 3:
              case 4:
                Zl = y.stateNode.containerInfo, _n = !0;
                break t;
            }
            y = y.return;
          }
          if (Zl === null)
            throw Error(
              "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
            );
          My(o, f, d), Zl = null, _n = !1, (d.mode & Wt) !== Ct && 0 <= Tt && 0 <= Dt && 0.05 < Dt - Tt && mn(
            d,
            Tt,
            Dt,
            "Unmount"
          ), Nl(h), o = d, f = o.alternate, f !== null && (f.return = null), o.return = null;
        }
      if (e.subtreeFlags & 13886)
        for (e = e.child; e !== null; )
          tr(e, t), e = e.sibling;
    }
    function tr(t, e) {
      var a = Ke(), i = vn(), o = Va(), f = gn(), d = t.alternate, h = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          va(e, t), ga(t), h & 4 && (Ii(
            on | Ku,
            t,
            t.return
          ), ri(on | Ku, t), kd(
            t,
            t.return,
            lu | Ku
          ));
          break;
        case 1:
          if (va(e, t), ga(t), h & 512 && (Vl || d === null || En(d, d.return)), h & 64 && Oo && (h = t.updateQueue, h !== null && (d = h.callbacks, d !== null))) {
            var y = h.shared.hiddenCallbacks;
            h.shared.hiddenCallbacks = y === null ? d : y.concat(d);
          }
          break;
        case 26:
          if (y = Ai, va(e, t), ga(t), h & 512 && (Vl || d === null || En(d, d.return)), h & 4) {
            var p = d !== null ? d.memoizedState : null;
            if (h = t.memoizedState, d === null)
              if (h === null)
                if (t.stateNode === null) {
                  t: {
                    h = t.type, d = t.memoizedProps, y = y.ownerDocument || y;
                    e: switch (h) {
                      case "title":
                        p = y.getElementsByTagName(
                          "title"
                        )[0], (!p || p[xf] || p[We] || p.namespaceURI === Kt || p.hasAttribute("itemprop")) && (p = y.createElement(h), y.head.insertBefore(
                          p,
                          y.querySelector(
                            "head > title"
                          )
                        )), ke(p, h, d), p[We] = t, ht(p), h = p;
                        break t;
                      case "link":
                        var z = _f(
                          "link",
                          "href",
                          y
                        ).get(h + (d.href || ""));
                        if (z) {
                          for (var R = 0; R < z.length; R++)
                            if (p = z[R], p.getAttribute("href") === (d.href == null || d.href === "" ? null : d.href) && p.getAttribute("rel") === (d.rel == null ? null : d.rel) && p.getAttribute("title") === (d.title == null ? null : d.title) && p.getAttribute("crossorigin") === (d.crossOrigin == null ? null : d.crossOrigin)) {
                              z.splice(R, 1);
                              break e;
                            }
                        }
                        p = y.createElement(h), ke(p, h, d), y.head.appendChild(
                          p
                        );
                        break;
                      case "meta":
                        if (z = _f(
                          "meta",
                          "content",
                          y
                        ).get(h + (d.content || ""))) {
                          for (R = 0; R < z.length; R++)
                            if (p = z[R], me(
                              d.content,
                              "content"
                            ), p.getAttribute("content") === (d.content == null ? null : "" + d.content) && p.getAttribute("name") === (d.name == null ? null : d.name) && p.getAttribute("property") === (d.property == null ? null : d.property) && p.getAttribute("http-equiv") === (d.httpEquiv == null ? null : d.httpEquiv) && p.getAttribute("charset") === (d.charSet == null ? null : d.charSet)) {
                              z.splice(R, 1);
                              break e;
                            }
                        }
                        p = y.createElement(h), ke(p, h, d), y.head.appendChild(
                          p
                        );
                        break;
                      default:
                        throw Error(
                          'getNodesForType encountered a type it did not expect: "' + h + '". This is a bug in React.'
                        );
                    }
                    p[We] = t, ht(p), h = p;
                  }
                  t.stateNode = h;
                } else
                  Mv(
                    y,
                    t.type,
                    t.stateNode
                  );
              else
                t.stateNode = Ah(
                  y,
                  h,
                  t.memoizedProps
                );
            else
              p !== h ? (p === null ? d.stateNode !== null && (d = d.stateNode, d.parentNode.removeChild(d)) : p.count--, h === null ? Mv(
                y,
                t.type,
                t.stateNode
              ) : Ah(
                y,
                h,
                t.memoizedProps
              )) : h === null && t.stateNode !== null && Id(
                t,
                t.memoizedProps,
                d.memoizedProps
              );
          }
          break;
        case 27:
          va(e, t), ga(t), h & 512 && (Vl || d === null || En(d, d.return)), d !== null && h & 4 && Id(
            t,
            t.memoizedProps,
            d.memoizedProps
          );
          break;
        case 5:
          if (va(e, t), ga(t), h & 512 && (Vl || d === null || En(d, d.return)), t.flags & 32) {
            y = t.stateNode;
            try {
              ct(
                t,
                Sh,
                y
              );
            } catch (ot) {
              Jt(t, t.return, ot);
            }
          }
          h & 4 && t.stateNode != null && (y = t.memoizedProps, Id(
            t,
            y,
            d !== null ? d.memoizedProps : y
          )), h & 1024 && (JS = !0, t.type !== "form" && console.error(
            "Unexpected host component type. Expected a form. This is a bug in React."
          ));
          break;
        case 6:
          if (va(e, t), ga(t), h & 4) {
            if (t.stateNode === null)
              throw Error(
                "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue."
              );
            h = t.memoizedProps, d = d !== null ? d.memoizedProps : h, y = t.stateNode;
            try {
              ct(
                t,
                lS,
                y,
                d,
                h
              );
            } catch (ot) {
              Jt(t, t.return, ot);
            }
          }
          break;
        case 3:
          if (y = yu(), jg = null, p = Ai, Ai = Eh(e.containerInfo), va(e, t), Ai = p, ga(t), h & 4 && d !== null && d.memoizedState.isDehydrated)
            try {
              ct(
                t,
                Fy,
                e.containerInfo
              );
            } catch (ot) {
              Jt(t, t.return, ot);
            }
          JS && (JS = !1, ev(t)), e.effectDuration += Jo(
            y
          );
          break;
        case 4:
          h = Ai, Ai = Eh(
            t.stateNode.containerInfo
          ), va(e, t), ga(t), Ai = h;
          break;
        case 12:
          h = yu(), va(e, t), ga(t), t.stateNode.effectDuration += ra(h);
          break;
        case 31:
          va(e, t), ga(t), h & 4 && (h = t.updateQueue, h !== null && (t.updateQueue = null, tc(t, h)));
          break;
        case 13:
          va(e, t), ga(t), t.child.flags & 8192 && t.memoizedState !== null != (d !== null && d.memoizedState !== null) && (Eg = Gl()), h & 4 && (h = t.updateQueue, h !== null && (t.updateQueue = null, tc(t, h)));
          break;
        case 22:
          y = t.memoizedState !== null;
          var E = d !== null && d.memoizedState !== null, q = Oo, at = Vl;
          if (Oo = q || y, Vl = at || E, va(e, t), Vl = at, Oo = q, E && !y && !q && !at && (t.mode & Wt) !== Ct && 0 <= Tt && 0 <= Dt && 0.05 < Dt - Tt && yd(
            t,
            Tt,
            Dt
          ), ga(t), h & 8192)
            t: for (e = t.stateNode, e._visibility = y ? e._visibility & ~N0 : e._visibility | N0, !y || d === null || E || Oo || Vl || (ec(t), (t.mode & Wt) !== Ct && 0 <= Tt && 0 <= Dt && 0.05 < Dt - Tt && mn(
              t,
              Tt,
              Dt,
              "Disconnect"
            )), d = null, e = t; ; ) {
              if (e.tag === 5 || e.tag === 26) {
                if (d === null) {
                  E = d = e;
                  try {
                    p = E.stateNode, y ? ct(
                      E,
                      gv,
                      p
                    ) : ct(
                      E,
                      Ev,
                      E.stateNode,
                      E.memoizedProps
                    );
                  } catch (ot) {
                    Jt(E, E.return, ot);
                  }
                }
              } else if (e.tag === 6) {
                if (d === null) {
                  E = e;
                  try {
                    z = E.stateNode, y ? ct(
                      E,
                      Sv,
                      z
                    ) : ct(
                      E,
                      Tv,
                      z,
                      E.memoizedProps
                    );
                  } catch (ot) {
                    Jt(E, E.return, ot);
                  }
                }
              } else if (e.tag === 18) {
                if (d === null) {
                  E = e;
                  try {
                    R = E.stateNode, y ? ct(
                      E,
                      vv,
                      R
                    ) : ct(
                      E,
                      bv,
                      E.stateNode
                    );
                  } catch (ot) {
                    Jt(E, E.return, ot);
                  }
                }
              } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
                e.child.return = e, e = e.child;
                continue;
              }
              if (e === t) break t;
              for (; e.sibling === null; ) {
                if (e.return === null || e.return === t)
                  break t;
                d === e && (d = null), e = e.return;
              }
              d === e && (d = null), e.sibling.return = e.return, e = e.sibling;
            }
          h & 4 && (h = t.updateQueue, h !== null && (d = h.retryQueue, d !== null && (h.retryQueue = null, tc(t, d))));
          break;
        case 19:
          va(e, t), ga(t), h & 4 && (h = t.updateQueue, h !== null && (t.updateQueue = null, tc(t, h)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          va(e, t), ga(t);
      }
      (t.mode & Wt) !== Ct && 0 <= Tt && 0 <= Dt && ((pl || 0.05 < fl) && Bn(
        t,
        Tt,
        Dt,
        fl,
        nl
      ), t.alternate === null && t.return !== null && t.return.alternate !== null && 0.05 < Dt - Tt && (Ry(
        t.return.alternate,
        t.return
      ) || mn(
        t,
        Tt,
        Dt,
        "Mount"
      ))), Nl(a), La(i), nl = o, pl = f;
    }
    function ga(t) {
      var e = t.flags;
      if (e & 2) {
        try {
          ct(t, _y, t);
        } catch (a) {
          Jt(t, t.return, a);
        }
        t.flags &= -3;
      }
      e & 4096 && (t.flags &= -4097);
    }
    function ev(t) {
      if (t.subtreeFlags & 1024)
        for (t = t.child; t !== null; ) {
          var e = t;
          ev(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
        }
    }
    function Fa(t, e) {
      if (e.subtreeFlags & 8772)
        for (e = e.child; e !== null; )
          th(t, e.alternate, e), e = e.sibling;
    }
    function eh(t) {
      var e = Ke(), a = vn(), i = Va(), o = gn();
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          kd(
            t,
            t.return,
            lu
          ), ec(t);
          break;
        case 1:
          En(t, t.return);
          var f = t.stateNode;
          typeof f.componentWillUnmount == "function" && Fd(
            t,
            t.return,
            f
          ), ec(t);
          break;
        case 27:
          ct(
            t,
            vi,
            t.stateNode
          );
        case 26:
        case 5:
          En(t, t.return), ec(t);
          break;
        case 22:
          t.memoizedState === null && ec(t);
          break;
        case 30:
          ec(t);
          break;
        default:
          ec(t);
      }
      (t.mode & Wt) !== Ct && 0 <= Tt && 0 <= Dt && (pl || 0.05 < fl) && Bn(
        t,
        Tt,
        Dt,
        fl,
        nl
      ), Nl(e), La(a), nl = i, pl = o;
    }
    function ec(t) {
      for (t = t.child; t !== null; )
        eh(t), t = t.sibling;
    }
    function Hy(t, e, a, i) {
      var o = Ke(), f = vn(), d = Va(), h = gn(), y = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Vn(
            t,
            a,
            i
          ), Wp(a, lu);
          break;
        case 1:
          if (Vn(
            t,
            a,
            i
          ), e = a.stateNode, typeof e.componentDidMount == "function" && ct(
            a,
            NS,
            a,
            e
          ), e = a.updateQueue, e !== null) {
            t = a.stateNode;
            try {
              ct(
                a,
                Pm,
                e,
                t
              );
            } catch (p) {
              Jt(a, a.return, p);
            }
          }
          i && y & 64 && Ay(a), Fc(a, a.return);
          break;
        case 27:
          Dy(a);
        case 26:
        case 5:
          Vn(
            t,
            a,
            i
          ), i && e === null && y & 4 && Pi(a), Fc(a, a.return);
          break;
        case 12:
          if (i && y & 4) {
            y = yu(), Vn(
              t,
              a,
              i
            ), i = a.stateNode, i.effectDuration += ra(y);
            try {
              ct(
                a,
                Oy,
                a,
                e,
                Jf,
                i.effectDuration
              );
            } catch (p) {
              Jt(a, a.return, p);
            }
          } else
            Vn(
              t,
              a,
              i
            );
          break;
        case 31:
          Vn(
            t,
            a,
            i
          ), i && y & 4 && Cy(t, a);
          break;
        case 13:
          Vn(
            t,
            a,
            i
          ), i && y & 4 && Uy(t, a);
          break;
        case 22:
          a.memoizedState === null && Vn(
            t,
            a,
            i
          ), Fc(a, a.return);
          break;
        case 30:
          break;
        default:
          Vn(
            t,
            a,
            i
          );
      }
      (a.mode & Wt) !== Ct && 0 <= Tt && 0 <= Dt && (pl || 0.05 < fl) && Bn(
        a,
        Tt,
        Dt,
        fl,
        nl
      ), Nl(o), La(f), nl = d, pl = h;
    }
    function Vn(t, e, a) {
      for (a = a && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; )
        Hy(
          t,
          e.alternate,
          e,
          a
        ), e = e.sibling;
    }
    function er(t, e) {
      var a = null;
      t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== a && (t != null && Bc(t), a != null && Ds(a));
    }
    function lr(t, e) {
      t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (Bc(e), t != null && Ds(t));
    }
    function Ia(t, e, a, i, o) {
      if (e.subtreeFlags & 10256 || e.actualDuration !== 0 && (e.alternate === null || e.alternate.child !== e.child))
        for (e = e.child; e !== null; ) {
          var f = e.sibling;
          Ny(
            t,
            e,
            a,
            i,
            f !== null ? f.actualStartTime : o
          ), e = f;
        }
    }
    function Ny(t, e, a, i, o) {
      var f = Ke(), d = vn(), h = Va(), y = gn(), p = Qf, z = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          (e.mode & Wt) !== Ct && 0 < e.actualStartTime && (e.flags & 1) !== 0 && pd(
            e,
            e.actualStartTime,
            o,
            Fl,
            a
          ), Ia(
            t,
            e,
            a,
            i,
            o
          ), z & 2048 && Fs(e, fn | Ku);
          break;
        case 1:
          (e.mode & Wt) !== Ct && 0 < e.actualStartTime && ((e.flags & 128) !== 0 ? qm(
            e,
            e.actualStartTime,
            o,
            []
          ) : (e.flags & 1) !== 0 && pd(
            e,
            e.actualStartTime,
            o,
            Fl,
            a
          )), Ia(
            t,
            e,
            a,
            i,
            o
          );
          break;
        case 3:
          var R = yu(), E = Fl;
          Fl = e.alternate !== null && e.alternate.memoizedState.isDehydrated && (e.flags & 256) === 0, Ia(
            t,
            e,
            a,
            i,
            o
          ), Fl = E, z & 2048 && (a = null, e.alternate !== null && (a = e.alternate.memoizedState.cache), i = e.memoizedState.cache, i !== a && (Bc(i), a != null && Ds(a))), t.passiveEffectDuration += Jo(
            R
          );
          break;
        case 12:
          if (z & 2048) {
            z = yu(), Ia(
              t,
              e,
              a,
              i,
              o
            ), t = e.stateNode, t.passiveEffectDuration += ra(z);
            try {
              ct(
                e,
                Pp,
                e,
                e.alternate,
                Jf,
                t.passiveEffectDuration
              );
            } catch (q) {
              Jt(e, e.return, q);
            }
          } else
            Ia(
              t,
              e,
              a,
              i,
              o
            );
          break;
        case 31:
          z = Fl, R = e.alternate !== null ? e.alternate.memoizedState : null, E = e.memoizedState, R !== null && E === null ? (E = e.deletions, E !== null && 0 < E.length && E[0].tag === 18 ? (Fl = !1, R = R.hydrationErrors, R !== null && qm(
            e,
            e.actualStartTime,
            o,
            R
          )) : Fl = !0) : Fl = !1, Ia(
            t,
            e,
            a,
            i,
            o
          ), Fl = z;
          break;
        case 13:
          z = Fl, R = e.alternate !== null ? e.alternate.memoizedState : null, E = e.memoizedState, R === null || R.dehydrated === null || E !== null && E.dehydrated !== null ? Fl = !1 : (E = e.deletions, E !== null && 0 < E.length && E[0].tag === 18 ? (Fl = !1, R = R.hydrationErrors, R !== null && qm(
            e,
            e.actualStartTime,
            o,
            R
          )) : Fl = !0), Ia(
            t,
            e,
            a,
            i,
            o
          ), Fl = z;
          break;
        case 23:
          break;
        case 22:
          E = e.stateNode, R = e.alternate, e.memoizedState !== null ? E._visibility & mo ? Ia(
            t,
            e,
            a,
            i,
            o
          ) : Ic(
            t,
            e,
            a,
            i,
            o
          ) : E._visibility & mo ? Ia(
            t,
            e,
            a,
            i,
            o
          ) : (E._visibility |= mo, lc(
            t,
            e,
            a,
            i,
            (e.subtreeFlags & 10256) !== 0 || e.actualDuration !== 0 && (e.alternate === null || e.alternate.child !== e.child),
            o
          ), (e.mode & Wt) === Ct || Fl || (t = e.actualStartTime, 0 <= t && 0.05 < o - t && yd(e, t, o), 0 <= Tt && 0 <= Dt && 0.05 < Dt - Tt && yd(
            e,
            Tt,
            Dt
          ))), z & 2048 && er(
            R,
            e
          );
          break;
        case 24:
          Ia(
            t,
            e,
            a,
            i,
            o
          ), z & 2048 && lr(e.alternate, e);
          break;
        default:
          Ia(
            t,
            e,
            a,
            i,
            o
          );
      }
      (e.mode & Wt) !== Ct && ((t = !Fl && e.alternate === null && e.return !== null && e.return.alternate !== null) && (a = e.actualStartTime, 0 <= a && 0.05 < o - a && mn(
        e,
        a,
        o,
        "Mount"
      )), 0 <= Tt && 0 <= Dt && ((pl || 0.05 < fl) && Bn(
        e,
        Tt,
        Dt,
        fl,
        nl
      ), t && 0.05 < Dt - Tt && mn(
        e,
        Tt,
        Dt,
        "Mount"
      ))), Nl(f), La(d), nl = h, pl = y, Qf = p;
    }
    function lc(t, e, a, i, o, f) {
      for (o = o && ((e.subtreeFlags & 10256) !== 0 || e.actualDuration !== 0 && (e.alternate === null || e.alternate.child !== e.child)), e = e.child; e !== null; ) {
        var d = e.sibling;
        ar(
          t,
          e,
          a,
          i,
          o,
          d !== null ? d.actualStartTime : f
        ), e = d;
      }
    }
    function ar(t, e, a, i, o, f) {
      var d = Ke(), h = vn(), y = Va(), p = gn(), z = Qf;
      o && (e.mode & Wt) !== Ct && 0 < e.actualStartTime && (e.flags & 1) !== 0 && pd(
        e,
        e.actualStartTime,
        f,
        Fl,
        a
      );
      var R = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          lc(
            t,
            e,
            a,
            i,
            o,
            f
          ), Fs(e, fn);
          break;
        case 23:
          break;
        case 22:
          var E = e.stateNode;
          e.memoizedState !== null ? E._visibility & mo ? lc(
            t,
            e,
            a,
            i,
            o,
            f
          ) : Ic(
            t,
            e,
            a,
            i,
            f
          ) : (E._visibility |= mo, lc(
            t,
            e,
            a,
            i,
            o,
            f
          )), o && R & 2048 && er(
            e.alternate,
            e
          );
          break;
        case 24:
          lc(
            t,
            e,
            a,
            i,
            o,
            f
          ), o && R & 2048 && lr(e.alternate, e);
          break;
        default:
          lc(
            t,
            e,
            a,
            i,
            o,
            f
          );
      }
      (e.mode & Wt) !== Ct && 0 <= Tt && 0 <= Dt && (pl || 0.05 < fl) && Bn(
        e,
        Tt,
        Dt,
        fl,
        nl
      ), Nl(d), La(h), nl = y, pl = p, Qf = z;
    }
    function Ic(t, e, a, i, o) {
      if (e.subtreeFlags & 10256 || e.actualDuration !== 0 && (e.alternate === null || e.alternate.child !== e.child))
        for (var f = e.child; f !== null; ) {
          e = f.sibling;
          var d = t, h = a, y = i, p = e !== null ? e.actualStartTime : o, z = Qf;
          (f.mode & Wt) !== Ct && 0 < f.actualStartTime && (f.flags & 1) !== 0 && pd(
            f,
            f.actualStartTime,
            p,
            Fl,
            h
          );
          var R = f.flags;
          switch (f.tag) {
            case 22:
              Ic(
                d,
                f,
                h,
                y,
                p
              ), R & 2048 && er(f.alternate, f);
              break;
            case 24:
              Ic(
                d,
                f,
                h,
                y,
                p
              ), R & 2048 && lr(f.alternate, f);
              break;
            default:
              Ic(
                d,
                f,
                h,
                y,
                p
              );
          }
          Qf = z, f = e;
        }
    }
    function Pc(t, e, a) {
      if (t.subtreeFlags & P0)
        for (t = t.child; t !== null; )
          lh(
            t,
            e,
            a
          ), t = t.sibling;
    }
    function lh(t, e, a) {
      switch (t.tag) {
        case 26:
          Pc(
            t,
            e,
            a
          ), t.flags & P0 && t.memoizedState !== null && a0(
            a,
            Ai,
            t.memoizedState,
            t.memoizedProps
          );
          break;
        case 5:
          Pc(
            t,
            e,
            a
          );
          break;
        case 3:
        case 4:
          var i = Ai;
          Ai = Eh(
            t.stateNode.containerInfo
          ), Pc(
            t,
            e,
            a
          ), Ai = i;
          break;
        case 22:
          t.memoizedState === null && (i = t.alternate, i !== null && i.memoizedState !== null ? (i = P0, P0 = 16777216, Pc(
            t,
            e,
            a
          ), P0 = i) : Pc(
            t,
            e,
            a
          ));
          break;
        default:
          Pc(
            t,
            e,
            a
          );
      }
    }
    function By(t) {
      var e = t.alternate;
      if (e !== null && (t = e.child, t !== null)) {
        e.child = null;
        do
          e = t.sibling, t.sibling = null, t = e;
        while (t !== null);
      }
    }
    function Pa(t) {
      var e = t.deletions;
      if ((t.flags & 16) !== 0) {
        if (e !== null)
          for (var a = 0; a < e.length; a++) {
            var i = e[a], o = Ke();
            ca = i, Du(
              i,
              t
            ), (i.mode & Wt) !== Ct && 0 <= Tt && 0 <= Dt && 0.05 < Dt - Tt && mn(
              i,
              Tt,
              Dt,
              "Unmount"
            ), Nl(o);
          }
        By(t);
      }
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; )
          ah(t), t = t.sibling;
    }
    function ah(t) {
      var e = Ke(), a = vn(), i = Va(), o = gn();
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Pa(t), t.flags & 2048 && Wd(
            t,
            t.return,
            fn | Ku
          );
          break;
        case 3:
          var f = yu();
          Pa(t), t.stateNode.passiveEffectDuration += Jo(f);
          break;
        case 12:
          f = yu(), Pa(t), t.stateNode.passiveEffectDuration += ra(f);
          break;
        case 22:
          f = t.stateNode, t.memoizedState !== null && f._visibility & mo && (t.return === null || t.return.tag !== 13) ? (f._visibility &= ~mo, nh(t), (t.mode & Wt) !== Ct && 0 <= Tt && 0 <= Dt && 0.05 < Dt - Tt && mn(
            t,
            Tt,
            Dt,
            "Disconnect"
          )) : Pa(t);
          break;
        default:
          Pa(t);
      }
      (t.mode & Wt) !== Ct && 0 <= Tt && 0 <= Dt && (pl || 0.05 < fl) && Bn(
        t,
        Tt,
        Dt,
        fl,
        nl
      ), Nl(e), La(a), pl = o, nl = i;
    }
    function nh(t) {
      var e = t.deletions;
      if ((t.flags & 16) !== 0) {
        if (e !== null)
          for (var a = 0; a < e.length; a++) {
            var i = e[a], o = Ke();
            ca = i, Du(
              i,
              t
            ), (i.mode & Wt) !== Ct && 0 <= Tt && 0 <= Dt && 0.05 < Dt - Tt && mn(
              i,
              Tt,
              Dt,
              "Unmount"
            ), Nl(o);
          }
        By(t);
      }
      for (t = t.child; t !== null; )
        Yy(t), t = t.sibling;
    }
    function Yy(t) {
      var e = Ke(), a = vn(), i = Va(), o = gn();
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Wd(
            t,
            t.return,
            fn
          ), nh(t);
          break;
        case 22:
          var f = t.stateNode;
          f._visibility & mo && (f._visibility &= ~mo, nh(t));
          break;
        default:
          nh(t);
      }
      (t.mode & Wt) !== Ct && 0 <= Tt && 0 <= Dt && (pl || 0.05 < fl) && Bn(
        t,
        Tt,
        Dt,
        fl,
        nl
      ), Nl(e), La(a), pl = o, nl = i;
    }
    function Du(t, e) {
      for (; ca !== null; ) {
        var a = ca, i = a, o = e, f = Ke(), d = vn(), h = Va(), y = gn();
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            Wd(
              i,
              o,
              fn
            );
            break;
          case 23:
          case 22:
            i.memoizedState !== null && i.memoizedState.cachePool !== null && (o = i.memoizedState.cachePool.pool, o != null && Bc(o));
            break;
          case 24:
            Ds(i.memoizedState.cache);
        }
        if ((i.mode & Wt) !== Ct && 0 <= Tt && 0 <= Dt && (pl || 0.05 < fl) && Bn(
          i,
          Tt,
          Dt,
          fl,
          nl
        ), Nl(f), La(d), pl = y, nl = h, i = a.child, i !== null) i.return = a, ca = i;
        else
          t: for (a = t; ca !== null; ) {
            if (i = ca, f = i.sibling, d = i.return, ml(i), i === a) {
              ca = null;
              break t;
            }
            if (f !== null) {
              f.return = d, ca = f;
              break t;
            }
            ca = d;
          }
      }
    }
    function jy() {
      kE.forEach(function(t) {
        return t();
      });
    }
    function qy() {
      var t = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
      return t || G.actQueue === null || console.error(
        "The current testing environment is not configured to support act(...)"
      ), t;
    }
    function aa(t) {
      if ((de & Il) !== oa && It !== 0)
        return It & -It;
      var e = G.T;
      return e !== null ? (e._updatedFibers || (e._updatedFibers = /* @__PURE__ */ new Set()), e._updatedFibers.add(t), Ky()) : Mi();
    }
    function rf() {
      if (Rn === 0)
        if ((It & 536870912) === 0 || ie) {
          var t = _r;
          _r <<= 1, (_r & 3932160) === 0 && (_r = 262144), Rn = t;
        } else Rn = 536870912;
      return t = eu.current, t !== null && (t.flags |= 32), Rn;
    }
    function Ut(t, e, a) {
      if (mm && console.error("useInsertionEffect must not schedule updates."), a1 && (zg = !0), (t === Xe && (Ne === Qr || Ne === Lr) || t.cancelPendingCommit !== null) && (Ru(t, 0), Tn(
        t,
        It,
        Rn,
        !1
      )), Mn(t, a), (de & Il) !== oa && t === Xe) {
        if (Yu)
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              t = ee && st(ee) || "Unknown", l2.has(t) || (l2.add(t), e = st(e) || "Unknown", console.error(
                "Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",
                e,
                t,
                t
              ));
              break;
            case 1:
              e2 || (console.error(
                "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."
              ), e2 = !0);
          }
      } else
        qu && Al(t, e, a), cr(e), t === Xe && ((de & Il) === oa && (ts |= a), sl === Ff && Tn(
          t,
          It,
          Rn,
          !1
        )), Ma(t);
    }
    function lv(t, e, a) {
      if ((de & (Il | au)) !== oa)
        throw Error("Should not already be working.");
      if (It !== 0 && ee !== null) {
        var i = ee, o = Gl();
        switch ($1) {
          case lp:
          case Qr:
            var f = G0;
            Fe && ((i = i._debugTask) ? i.run(
              console.timeStamp.bind(
                console,
                "Suspended",
                f,
                o,
                Gu,
                void 0,
                "primary-light"
              )
            ) : console.timeStamp(
              "Suspended",
              f,
              o,
              Gu,
              void 0,
              "primary-light"
            ));
            break;
          case Lr:
            f = G0, Fe && ((i = i._debugTask) ? i.run(
              console.timeStamp.bind(
                console,
                "Action",
                f,
                o,
                Gu,
                void 0,
                "primary-light"
              )
            ) : console.timeStamp(
              "Action",
              f,
              o,
              Gu,
              void 0,
              "primary-light"
            ));
            break;
          default:
            Fe && (i = o - G0, 3 > i || console.timeStamp(
              "Blocked",
              G0,
              o,
              Gu,
              void 0,
              5 > i ? "primary-light" : 10 > i ? "primary" : 100 > i ? "primary-dark" : "error"
            ));
        }
      }
      f = (a = !a && (e & 127) === 0 && (e & t.expiredLanes) === 0 || vl(t, e)) ? di(t, e) : mf(t, e, !0);
      var d = a;
      do {
        if (f === zo) {
          dm && !a && Tn(t, e, 0, !1), e = Ne, G0 = Xl(), $1 = e;
          break;
        } else {
          if (i = Gl(), o = t.current.alternate, d && !nv(o)) {
            Nn(e), o = ia, f = i, !Fe || f <= o || (El ? El.run(
              console.timeStamp.bind(
                console,
                "Teared Render",
                o,
                f,
                se,
                ce,
                "error"
              )
            ) : console.timeStamp(
              "Teared Render",
              o,
              f,
              se,
              ce,
              "error"
            )), ac(e, i), f = mf(t, e, !1), d = !1;
            continue;
          }
          if (f === Xr) {
            if (d = e, t.errorRecoveryDisabledLanes & d)
              var h = 0;
            else
              h = t.pendingLanes & -536870913, h = h !== 0 ? h : h & 536870912 ? 536870912 : 0;
            if (h !== 0) {
              Nn(e), xm(
                ia,
                i,
                e,
                El
              ), ac(e, i), e = h;
              t: {
                i = t, f = d, d = np;
                var y = i.current.memoizedState.isDehydrated;
                if (y && (Ru(i, h).flags |= 256), h = mf(
                  i,
                  h,
                  !1
                ), h !== Xr) {
                  if (kS && !y) {
                    i.errorRecoveryDisabledLanes |= f, ts |= f, f = Ff;
                    break t;
                  }
                  i = sn, sn = d, i !== null && (sn === null ? sn = i : sn.push.apply(
                    sn,
                    i
                  ));
                }
                f = h;
              }
              if (d = !1, f !== Xr) continue;
              i = Gl();
            }
          }
          if (f === ep) {
            Nn(e), xm(
              ia,
              i,
              e,
              El
            ), ac(e, i), Ru(t, 0), Tn(t, e, 0, !0);
            break;
          }
          t: {
            switch (a = t, f) {
              case zo:
              case ep:
                throw Error("Root did not complete. This is a bug in React.");
              case Ff:
                if ((e & 4194048) !== e) break;
              case vg:
                Nn(e), Hp(
                  ia,
                  i,
                  e,
                  El
                ), ac(e, i), o = e, (o & 127) !== 0 ? lg = i : (o & 4194048) !== 0 && (ag = i), Tn(
                  a,
                  e,
                  Rn,
                  !If
                );
                break t;
              case Xr:
                sn = null;
                break;
              case pg:
              case Qb:
                break;
              default:
                throw Error("Unknown root exit status.");
            }
            if (G.actQueue !== null)
              xe(
                a,
                o,
                e,
                sn,
                up,
                bg,
                Rn,
                ts,
                Vr,
                f,
                null,
                null,
                ia,
                i
              );
            else {
              if ((e & 62914560) === e && (d = Eg + Zb - Gl(), 10 < d)) {
                if (Tn(
                  a,
                  e,
                  Rn,
                  !If
                ), gc(a, 0, !0) !== 0) break t;
                Oi = e, a.timeoutHandle = s2(
                  av.bind(
                    null,
                    a,
                    o,
                    sn,
                    up,
                    bg,
                    e,
                    Rn,
                    ts,
                    Vr,
                    If,
                    f,
                    "Throttled",
                    ia,
                    i
                  ),
                  d
                );
                break t;
              }
              av(
                a,
                o,
                sn,
                up,
                bg,
                e,
                Rn,
                ts,
                Vr,
                If,
                f,
                null,
                ia,
                i
              );
            }
          }
        }
        break;
      } while (!0);
      Ma(t);
    }
    function av(t, e, a, i, o, f, d, h, y, p, z, R, E, q) {
      t.timeoutHandle = kr;
      var at = e.subtreeFlags, ot = null;
      if ((at & 8192 || (at & 16785408) === 16785408) && (ot = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: hn
      }, lh(e, f, ot), at = (f & 62914560) === f ? Eg - Gl() : (f & 4194048) === f ? Vb - Gl() : 0, at = Oh(ot, at), at !== null)) {
        Oi = f, t.cancelPendingCommit = at(
          xe.bind(
            null,
            t,
            e,
            f,
            a,
            i,
            o,
            d,
            h,
            y,
            z,
            ot,
            ot.waitingForViewTransition ? "Waiting for the previous Animation" : 0 < ot.count ? 0 < ot.imgCount ? "Suspended on CSS and Images" : "Suspended on CSS" : ot.imgCount === 1 ? "Suspended on an Image" : 0 < ot.imgCount ? "Suspended on Images" : null,
            E,
            q
          )
        ), Tn(
          t,
          f,
          d,
          !p
        );
        return;
      }
      xe(
        t,
        e,
        f,
        a,
        i,
        o,
        d,
        h,
        y,
        z,
        ot,
        R,
        E,
        q
      );
    }
    function nv(t) {
      for (var e = t; ; ) {
        var a = e.tag;
        if ((a === 0 || a === 11 || a === 15) && e.flags & 16384 && (a = e.updateQueue, a !== null && (a = a.stores, a !== null)))
          for (var i = 0; i < a.length; i++) {
            var o = a[i], f = o.getSnapshot;
            o = o.value;
            try {
              if (!un(f(), o)) return !1;
            } catch {
              return !1;
            }
          }
        if (a = e.child, e.subtreeFlags & 16384 && a !== null)
          a.return = e, e = a;
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
    function Tn(t, e, a, i) {
      e &= ~WS, e &= ~ts, t.suspendedLanes |= e, t.pingedLanes &= ~e, i && (t.warmLanes |= e), i = t.expirationTimes;
      for (var o = e; 0 < o; ) {
        var f = 31 - kl(o), d = 1 << f;
        i[f] = -1, o &= ~d;
      }
      a !== 0 && Uo(t, a, e);
    }
    function tn() {
      return (de & (Il | au)) === oa ? (Cu(0), !1) : !0;
    }
    function uh() {
      if (ee !== null) {
        if (Ne === Dn)
          var t = ee.return;
        else
          t = ee, Vo(), Qi(t), am = null, $0 = 0, t = ee;
        for (; t !== null; )
          Ty(t.alternate, t), t = t.return;
        ee = null;
      }
    }
    function ac(t, e) {
      (t & 127) !== 0 && (Hr = e), (t & 4194048) !== 0 && (So = e), (t & 62914560) !== 0 && (J1 = e), (t & 2080374784) !== 0 && (K1 = e);
    }
    function Ru(t, e) {
      Fe && (console.timeStamp(
        "Blocking Track",
        3e-3,
        3e-3,
        "Blocking",
        ce,
        "primary-light"
      ), console.timeStamp(
        "Transition Track",
        3e-3,
        3e-3,
        "Transition",
        ce,
        "primary-light"
      ), console.timeStamp(
        "Suspense Track",
        3e-3,
        3e-3,
        "Suspense",
        ce,
        "primary-light"
      ), console.timeStamp(
        "Idle Track",
        3e-3,
        3e-3,
        "Idle",
        ce,
        "primary-light"
      ));
      var a = ia;
      if (ia = Xl(), It !== 0 && 0 < a) {
        if (Nn(It), sl === pg || sl === Ff)
          Hp(
            a,
            ia,
            e,
            El
          );
        else {
          var i = ia, o = El;
          if (Fe && !(i <= a)) {
            var f = (e & 738197653) === e ? "tertiary-dark" : "primary-dark", d = (e & 536870912) === e ? "Prewarm" : (e & 201326741) === e ? "Interrupted Hydration" : "Interrupted Render";
            o ? o.run(
              console.timeStamp.bind(
                console,
                d,
                a,
                i,
                se,
                ce,
                f
              )
            ) : console.timeStamp(
              d,
              a,
              i,
              se,
              ce,
              f
            );
          }
        }
        ac(It, ia);
      }
      if (a = El, El = null, (e & 127) !== 0) {
        El = j0, o = 0 <= mc && mc < Hr ? Hr : mc, i = 0 <= Nr && Nr < Hr ? Hr : Nr, f = 0 <= i ? i : 0 <= o ? o : ia, 0 <= lg ? (Nn(2), Np(
          lg,
          f,
          e,
          a
        )) : ng & 127, a = o;
        var h = i, y = q0, p = 0 < tm, z = Kf === Y0, R = Kf === eg;
        if (o = ia, i = j0, f = RS, d = MS, Fe) {
          if (se = "Blocking", 0 < a ? a > o && (a = o) : a = o, 0 < h ? h > a && (h = a) : h = a, y !== null && a > h) {
            var E = p ? "secondary-light" : "warning";
            i ? i.run(
              console.timeStamp.bind(
                console,
                p ? "Consecutive" : "Event: " + y,
                h,
                a,
                se,
                ce,
                E
              )
            ) : console.timeStamp(
              p ? "Consecutive" : "Event: " + y,
              h,
              a,
              se,
              ce,
              E
            );
          }
          o > a && (h = z ? "error" : (e & 738197653) === e ? "tertiary-light" : "primary-light", z = R ? "Promise Resolved" : z ? "Cascading Update" : 5 < o - a ? "Update Blocked" : "Update", R = [], d != null && R.push(["Component name", d]), f != null && R.push(["Method name", f]), a = {
            start: a,
            end: o,
            detail: {
              devtools: {
                properties: R,
                track: se,
                trackGroup: ce,
                color: h
              }
            }
          }, i ? i.run(
            performance.measure.bind(
              performance,
              z,
              a
            )
          ) : performance.measure(z, a));
        }
        mc = -1.1, Kf = 0, MS = RS = null, lg = -1.1, tm = Nr, Nr = -1.1, Hr = Xl();
      }
      if ((e & 4194048) !== 0 && (El = x0, o = 0 <= bo && bo < So ? So : bo, a = 0 <= Zu && Zu < So ? So : Zu, i = 0 <= $f && $f < So ? So : $f, f = 0 <= i ? i : 0 <= a ? a : ia, 0 <= ag ? (Nn(256), Np(
        ag,
        f,
        e,
        El
      )) : ng & 4194048, R = i, h = Br, y = 0 < kf, p = CS === eg, f = ia, i = x0, d = V1, z = Z1, Fe && (se = "Transition", 0 < a ? a > f && (a = f) : a = f, 0 < o ? o > a && (o = a) : o = a, 0 < R ? R > o && (R = o) : R = o, o > R && h !== null && (E = y ? "secondary-light" : "warning", i ? i.run(
        console.timeStamp.bind(
          console,
          y ? "Consecutive" : "Event: " + h,
          R,
          o,
          se,
          ce,
          E
        )
      ) : console.timeStamp(
        y ? "Consecutive" : "Event: " + h,
        R,
        o,
        se,
        ce,
        E
      )), a > o && (i ? i.run(
        console.timeStamp.bind(
          console,
          "Action",
          o,
          a,
          se,
          ce,
          "primary-dark"
        )
      ) : console.timeStamp(
        "Action",
        o,
        a,
        se,
        ce,
        "primary-dark"
      )), f > a && (o = p ? "Promise Resolved" : 5 < f - a ? "Update Blocked" : "Update", R = [], z != null && R.push(["Component name", z]), d != null && R.push(["Method name", d]), a = {
        start: a,
        end: f,
        detail: {
          devtools: {
            properties: R,
            track: se,
            trackGroup: ce,
            color: "primary-light"
          }
        }
      }, i ? i.run(
        performance.measure.bind(
          performance,
          o,
          a
        )
      ) : performance.measure(o, a))), Zu = bo = -1.1, CS = 0, ag = -1.1, kf = $f, $f = -1.1, So = Xl()), (e & 62914560) !== 0 && (ng & 62914560) !== 0 && (Nn(4194304), Gm(J1, ia)), (e & 2080374784) !== 0 && (ng & 2080374784) !== 0 && (Nn(268435456), Gm(K1, ia)), a = t.timeoutHandle, a !== kr && (t.timeoutHandle = kr, oT(a)), a = t.cancelPendingCommit, a !== null && (t.cancelPendingCommit = null, a()), Oi = 0, uh(), Xe = t, ee = a = hu(
        t.current,
        null
      ), It = e, Ne = Dn, nu = null, If = !1, dm = vl(t, e), kS = !1, sl = zo, Vr = Rn = WS = ts = Pf = 0, sn = np = null, bg = !1, (e & 8) !== 0 && (e |= e & 32), i = t.entangledLanes, i !== 0)
        for (t = t.entanglements, i &= e; 0 < i; )
          o = 31 - kl(i), f = 1 << o, e |= t[o], i &= ~f;
      return pc = e, vd(), t = x1(), 1e3 < t - q1 && (G.recentlyCreatedOwnerStacks = 0, q1 = t), Ei.discardPendingWarnings(), a;
    }
    function Zn(t, e) {
      Bt = null, G.H = I0, G.getCurrentStack = null, Yu = !1, Na = null, e === lm || e === og ? (e = qc(), Ne = lp) : e === BS ? (e = qc(), Ne = Lb) : Ne = e === VS ? $S : e !== null && typeof e == "object" && typeof e.then == "function" ? ap : gg, nu = e;
      var a = ee;
      a === null ? (sl = ep, Js(
        t,
        sa(e, t.current)
      )) : a.mode & Wt && Od(a);
    }
    function xy() {
      var t = eu.current;
      return t === null ? !0 : (It & 4194048) === It ? Ju === null : (It & 62914560) === It || (It & 536870912) !== 0 ? t === Ju : !1;
    }
    function ih() {
      var t = G.H;
      return G.H = I0, t === null ? I0 : t;
    }
    function Gy() {
      var t = G.A;
      return G.A = $E, t;
    }
    function df(t) {
      El === null && (El = t._debugTask == null ? null : t._debugTask);
    }
    function hf() {
      sl = Ff, If || (It & 4194048) !== It && eu.current !== null || (dm = !0), (Pf & 134217727) === 0 && (ts & 134217727) === 0 || Xe === null || Tn(
        Xe,
        It,
        Rn,
        !1
      );
    }
    function mf(t, e, a) {
      var i = de;
      de |= Il;
      var o = ih(), f = Gy();
      if (Xe !== t || It !== e) {
        if (qu) {
          var d = t.memoizedUpdaters;
          0 < d.size && (pf(t, It), d.clear()), Ga(t, e);
        }
        up = null, Ru(t, e);
      }
      e = !1, d = sl;
      t: do
        try {
          if (Ne !== Dn && ee !== null) {
            var h = ee, y = nu;
            switch (Ne) {
              case $S:
                uh(), d = vg;
                break t;
              case lp:
              case Qr:
              case Lr:
              case ap:
                eu.current === null && (e = !0);
                var p = Ne;
                if (Ne = Dn, nu = null, yf(t, h, y, p), a && dm) {
                  d = zo;
                  break t;
                }
                break;
              default:
                p = Ne, Ne = Dn, nu = null, yf(t, h, y, p);
            }
          }
          wy(), d = sl;
          break;
        } catch (z) {
          Zn(t, z);
        }
      while (!0);
      return e && t.shellSuspendCounter++, Vo(), de = i, G.H = o, G.A = f, ee === null && (Xe = null, It = 0, vd()), d;
    }
    function wy() {
      for (; ee !== null; ) ch(ee);
    }
    function di(t, e) {
      var a = de;
      de |= Il;
      var i = ih(), o = Gy();
      if (Xe !== t || It !== e) {
        if (qu) {
          var f = t.memoizedUpdaters;
          0 < f.size && (pf(t, It), f.clear()), Ga(t, e);
        }
        up = null, Tg = Gl() + Jb, Ru(t, e);
      } else
        dm = vl(
          t,
          e
        );
      t: do
        try {
          if (Ne !== Dn && ee !== null)
            e: switch (e = ee, f = nu, Ne) {
              case gg:
                Ne = Dn, nu = null, yf(
                  t,
                  e,
                  f,
                  gg
                );
                break;
              case Qr:
              case Lr:
                if (Fm(f)) {
                  Ne = Dn, nu = null, Xy(e);
                  break;
                }
                e = function() {
                  Ne !== Qr && Ne !== Lr || Xe !== t || (Ne = Sg), Ma(t);
                }, f.then(e, e);
                break t;
              case lp:
                Ne = Sg;
                break t;
              case Lb:
                Ne = KS;
                break t;
              case Sg:
                Fm(f) ? (Ne = Dn, nu = null, Xy(e)) : (Ne = Dn, nu = null, yf(
                  t,
                  e,
                  f,
                  Sg
                ));
                break;
              case KS:
                var d = null;
                switch (ee.tag) {
                  case 26:
                    d = ee.memoizedState;
                  case 5:
                  case 27:
                    var h = ee;
                    if (d ? ae(d) : h.stateNode.complete) {
                      Ne = Dn, nu = null;
                      var y = h.sibling;
                      if (y !== null) ee = y;
                      else {
                        var p = h.return;
                        p !== null ? (ee = p, nr(p)) : ee = null;
                      }
                      break e;
                    }
                    break;
                  default:
                    console.error(
                      "Unexpected type of fiber triggered a suspensey commit. This is a bug in React."
                    );
                }
                Ne = Dn, nu = null, yf(
                  t,
                  e,
                  f,
                  KS
                );
                break;
              case ap:
                Ne = Dn, nu = null, yf(
                  t,
                  e,
                  f,
                  ap
                );
                break;
              case $S:
                uh(), sl = vg;
                break t;
              default:
                throw Error(
                  "Unexpected SuspendedReason. This is a bug in React."
                );
            }
          G.actQueue !== null ? wy() : Sl();
          break;
        } catch (z) {
          Zn(t, z);
        }
      while (!0);
      return Vo(), G.H = i, G.A = o, de = a, ee !== null ? zo : (Xe = null, It = 0, vd(), sl);
    }
    function Sl() {
      for (; ee !== null && !Yh(); )
        ch(ee);
    }
    function ch(t) {
      var e = t.alternate;
      (t.mode & Wt) !== Ct ? (ei(t), e = ct(
        t,
        Ws,
        e,
        t,
        pc
      ), Od(t)) : e = ct(
        t,
        Ws,
        e,
        t,
        pc
      ), t.memoizedProps = t.pendingProps, e === null ? nr(t) : ee = e;
    }
    function Xy(t) {
      var e = ct(t, xl, t);
      t.memoizedProps = t.pendingProps, e === null ? nr(t) : ee = e;
    }
    function xl(t) {
      var e = t.alternate, a = (t.mode & Wt) !== Ct;
      switch (a && ei(t), t.tag) {
        case 15:
        case 0:
          e = py(
            e,
            t,
            t.pendingProps,
            t.type,
            void 0,
            It
          );
          break;
        case 11:
          e = py(
            e,
            t,
            t.pendingProps,
            t.type.render,
            t.ref,
            It
          );
          break;
        case 5:
          Qi(t);
        default:
          Ty(e, t), t = ee = Lm(t, pc), e = Ws(e, t, pc);
      }
      return a && Od(t), e;
    }
    function yf(t, e, a, i) {
      Vo(), Qi(e), am = null, $0 = 0;
      var o = e.return;
      try {
        if (fy(
          t,
          o,
          e,
          a,
          It
        )) {
          sl = ep, Js(
            t,
            sa(a, t.current)
          ), ee = null;
          return;
        }
      } catch (f) {
        if (o !== null) throw ee = o, f;
        sl = ep, Js(
          t,
          sa(a, t.current)
        ), ee = null;
        return;
      }
      e.flags & 32768 ? (ie || i === gg ? t = !0 : dm || (It & 536870912) !== 0 ? t = !1 : (If = t = !0, (i === Qr || i === Lr || i === lp || i === ap) && (i = eu.current, i !== null && i.tag === 13 && (i.flags |= 16384))), Qy(e, t)) : nr(e);
    }
    function nr(t) {
      var e = t;
      do {
        if ((e.flags & 32768) !== 0) {
          Qy(
            e,
            If
          );
          return;
        }
        var a = e.alternate;
        if (t = e.return, ei(e), a = ct(
          e,
          Ey,
          a,
          e,
          pc
        ), (e.mode & Wt) !== Ct && Rs(e), a !== null) {
          ee = a;
          return;
        }
        if (e = e.sibling, e !== null) {
          ee = e;
          return;
        }
        ee = e = t;
      } while (e !== null);
      sl === zo && (sl = Qb);
    }
    function Qy(t, e) {
      do {
        var a = kp(t.alternate, t);
        if (a !== null) {
          a.flags &= 32767, ee = a;
          return;
        }
        if ((t.mode & Wt) !== Ct) {
          Rs(t), a = t.actualDuration;
          for (var i = t.child; i !== null; )
            a += i.actualDuration, i = i.sibling;
          t.actualDuration = a;
        }
        if (a = t.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !e && (t = t.sibling, t !== null)) {
          ee = t;
          return;
        }
        ee = t = a;
      } while (t !== null);
      sl = vg, ee = null;
    }
    function xe(t, e, a, i, o, f, d, h, y, p, z, R, E, q) {
      t.cancelPendingCommit = null;
      do
        ur();
      while (Jl !== ls);
      if (Ei.flushLegacyContextWarning(), Ei.flushPendingUnsafeLifecycleWarnings(), (de & (Il | au)) !== oa)
        throw Error("Should not already be working.");
      if (Nn(a), p === Xr ? xm(
        E,
        q,
        a,
        El
      ) : i !== null ? Fg(
        E,
        q,
        a,
        i,
        e !== null && e.alternate !== null && e.alternate.memoizedState.isDehydrated && (e.flags & 256) !== 0,
        El
      ) : Wg(
        E,
        q,
        a,
        El
      ), e !== null) {
        if (a === 0 && console.error(
          "finishedLanes should not be empty during a commit. This is a bug in React."
        ), e === t.current)
          throw Error(
            "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."
          );
        if (f = e.lanes | e.childLanes, f |= AS, Pr(
          t,
          a,
          f,
          d,
          h,
          y
        ), t === Xe && (ee = Xe = null, It = 0), hm = e, as = t, Oi = a, PS = f, e1 = o, Ib = i, t1 = q, Pb = R, zi = Ag, t2 = null, e.actualDuration !== 0 || (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, vf(fo, function() {
          return rp = window.event, zi === Ag && (zi = IS), ir(), null;
        })) : (t.callbackNode = null, t.callbackPriority = 0), go = null, Jf = Xl(), R !== null && Ig(
          q,
          Jf,
          R,
          El
        ), i = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || i) {
          i = G.T, G.T = null, o = be.p, be.p = Rl, d = de, de |= au;
          try {
            eS(t, e, a);
          } finally {
            de = d, be.p = o, G.T = i;
          }
        }
        Jl = $b, Sa(), Mu(), Ly();
      }
    }
    function Sa() {
      if (Jl === $b) {
        Jl = ls;
        var t = as, e = hm, a = Oi, i = (e.flags & 13878) !== 0;
        if ((e.subtreeFlags & 13878) !== 0 || i) {
          i = G.T, G.T = null;
          var o = be.p;
          be.p = Rl;
          var f = de;
          de |= au;
          try {
            sm = a, rm = t, Yc(), tr(e, t), rm = sm = null, a = d1;
            var d = md(t.containerInfo), h = a.focusedElem, y = a.selectionRange;
            if (d !== h && h && h.ownerDocument && Rp(
              h.ownerDocument.documentElement,
              h
            )) {
              if (y !== null && Ym(h)) {
                var p = y.start, z = y.end;
                if (z === void 0 && (z = p), "selectionStart" in h)
                  h.selectionStart = p, h.selectionEnd = Math.min(
                    z,
                    h.value.length
                  );
                else {
                  var R = h.ownerDocument || document, E = R && R.defaultView || window;
                  if (E.getSelection) {
                    var q = E.getSelection(), at = h.textContent.length, ot = Math.min(
                      y.start,
                      at
                    ), Ze = y.end === void 0 ? ot : Math.min(y.end, at);
                    !q.extend && ot > Ze && (d = Ze, Ze = ot, ot = d);
                    var oe = Dp(
                      h,
                      ot
                    ), b = Dp(
                      h,
                      Ze
                    );
                    if (oe && b && (q.rangeCount !== 1 || q.anchorNode !== oe.node || q.anchorOffset !== oe.offset || q.focusNode !== b.node || q.focusOffset !== b.offset)) {
                      var T = R.createRange();
                      T.setStart(oe.node, oe.offset), q.removeAllRanges(), ot > Ze ? (q.addRange(T), q.extend(b.node, b.offset)) : (T.setEnd(b.node, b.offset), q.addRange(T));
                    }
                  }
                }
              }
              for (R = [], q = h; q = q.parentNode; )
                q.nodeType === 1 && R.push({
                  element: q,
                  left: q.scrollLeft,
                  top: q.scrollTop
                });
              for (typeof h.focus == "function" && h.focus(), h = 0; h < R.length; h++) {
                var O = R[h];
                O.element.scrollLeft = O.left, O.element.scrollTop = O.top;
              }
            }
            Gg = !!r1, d1 = r1 = null;
          } finally {
            de = f, be.p = o, G.T = i;
          }
        }
        t.current = e, Jl = kb;
      }
    }
    function Mu() {
      if (Jl === kb) {
        Jl = ls;
        var t = t2;
        if (t !== null) {
          Jf = Xl();
          var e = vo, a = Jf;
          !Fe || a <= e || console.timeStamp(
            t,
            e,
            a,
            se,
            ce,
            "secondary-light"
          );
        }
        t = as, e = hm, a = Oi;
        var i = (e.flags & 8772) !== 0;
        if ((e.subtreeFlags & 8772) !== 0 || i) {
          i = G.T, G.T = null;
          var o = be.p;
          be.p = Rl;
          var f = de;
          de |= au;
          try {
            sm = a, rm = t, Yc(), th(
              t,
              e.alternate,
              e
            ), rm = sm = null;
          } finally {
            de = f, be.p = o, G.T = i;
          }
        }
        t = t1, e = Pb, vo = Xl(), t = e === null ? t : Jf, e = vo, a = zi === FS, i = El, go !== null ? Bp(
          t,
          e,
          go,
          !1,
          i
        ) : !Fe || e <= t || (i ? i.run(
          console.timeStamp.bind(
            console,
            a ? "Commit Interrupted View Transition" : "Commit",
            t,
            e,
            se,
            ce,
            a ? "error" : "secondary-dark"
          )
        ) : console.timeStamp(
          a ? "Commit Interrupted View Transition" : "Commit",
          t,
          e,
          se,
          ce,
          a ? "error" : "secondary-dark"
        )), Jl = Wb;
      }
    }
    function Ly() {
      if (Jl === Fb || Jl === Wb) {
        if (Jl === Fb) {
          var t = vo;
          vo = Xl();
          var e = vo, a = zi === FS;
          !Fe || e <= t || console.timeStamp(
            a ? "Interrupted View Transition" : "Starting Animation",
            t,
            e,
            se,
            ce,
            a ? " error" : "secondary-light"
          ), zi !== FS && (zi = Kb);
        }
        Jl = ls, jh(), t = as;
        var i = hm;
        e = Oi, a = Ib;
        var o = i.actualDuration !== 0 || (i.subtreeFlags & 10256) !== 0 || (i.flags & 10256) !== 0;
        o ? Jl = Og : (Jl = ls, hm = as = null, Vy(
          t,
          t.pendingLanes
        ), Zr = 0, cp = null);
        var f = t.pendingLanes;
        if (f === 0 && (es = null), o || sh(t), f = Ul(e), i = i.stateNode, Dl && typeof Dl.onCommitFiberRoot == "function")
          try {
            var d = (i.current.flags & 128) === 128;
            switch (f) {
              case Rl:
                var h = b0;
                break;
              case Wl:
                h = qh;
                break;
              case ua:
                h = fo;
                break;
              case rc:
                h = xh;
                break;
              default:
                h = fo;
            }
            Dl.onCommitFiberRoot(
              so,
              i,
              h,
              d
            );
          } catch (R) {
            ju || (ju = !0, console.error(
              "React instrumentation encountered an error: %o",
              R
            ));
          }
        if (qu && t.memoizedUpdaters.clear(), jy(), a !== null) {
          d = G.T, h = be.p, be.p = Rl, G.T = null;
          try {
            var y = t.onRecoverableError;
            for (i = 0; i < a.length; i++) {
              var p = a[i], z = uv(p.stack);
              ct(
                p.source,
                y,
                p.value,
                z
              );
            }
          } finally {
            G.T = d, be.p = h;
          }
        }
        (Oi & 3) !== 0 && ur(), Ma(t), f = t.pendingLanes, (e & 261930) !== 0 && (f & 42) !== 0 ? (ig = !0, t === l1 ? ip++ : (ip = 0, l1 = t)) : ip = 0, o || ac(e, vo), Cu(0);
      }
    }
    function uv(t) {
      return t = { componentStack: t }, Object.defineProperty(t, "digest", {
        get: function() {
          console.error(
            'You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.'
          );
        }
      }), t;
    }
    function Vy(t, e) {
      (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Ds(e)));
    }
    function ur() {
      return Sa(), Mu(), Ly(), ir();
    }
    function ir() {
      if (Jl !== Og) return !1;
      var t = as, e = PS;
      PS = 0;
      var a = Ul(Oi), i = ua > a ? ua : a;
      a = G.T;
      var o = be.p;
      try {
        be.p = i, G.T = null;
        var f = e1;
        e1 = null, i = as;
        var d = Oi;
        if (Jl = ls, hm = as = null, Oi = 0, (de & (Il | au)) !== oa)
          throw Error("Cannot flush passive effects while already rendering.");
        Nn(d), a1 = !0, zg = !1;
        var h = 0;
        if (go = null, h = Gl(), zi === Kb)
          Gm(
            vo,
            h,
            XE
          );
        else {
          var y = vo, p = h, z = zi === IS;
          !Fe || p <= y || (El ? El.run(
            console.timeStamp.bind(
              console,
              z ? "Waiting for Paint" : "Waiting",
              y,
              p,
              se,
              ce,
              "secondary-light"
            )
          ) : console.timeStamp(
            z ? "Waiting for Paint" : "Waiting",
            y,
            p,
            se,
            ce,
            "secondary-light"
          ));
        }
        y = de, de |= au;
        var R = i.current;
        Yc(), ah(R);
        var E = i.current;
        R = t1, Yc(), Ny(
          i,
          E,
          d,
          f,
          R
        ), sh(i), de = y;
        var q = Gl();
        if (E = h, R = El, go !== null ? Bp(
          E,
          q,
          go,
          !0,
          R
        ) : !Fe || q <= E || (R ? R.run(
          console.timeStamp.bind(
            console,
            "Remaining Effects",
            E,
            q,
            se,
            ce,
            "secondary-dark"
          )
        ) : console.timeStamp(
          "Remaining Effects",
          E,
          q,
          se,
          ce,
          "secondary-dark"
        )), ac(d, q), Cu(0, !1), zg ? i === cp ? Zr++ : (Zr = 0, cp = i) : Zr = 0, zg = a1 = !1, Dl && typeof Dl.onPostCommitFiberRoot == "function")
          try {
            Dl.onPostCommitFiberRoot(so, i);
          } catch (ot) {
            ju || (ju = !0, console.error(
              "React instrumentation encountered an error: %o",
              ot
            ));
          }
        var at = i.current.stateNode;
        return at.effectDuration = 0, at.passiveEffectDuration = 0, !0;
      } finally {
        be.p = o, G.T = a, Vy(t, e);
      }
    }
    function ba(t, e, a) {
      e = sa(a, e), wp(e), e = wd(t.stateNode, e, 2), t = vu(t, e, 2), t !== null && (Mn(t, 2), Ma(t));
    }
    function Jt(t, e, a) {
      if (mm = !1, t.tag === 3)
        ba(t, t, a);
      else {
        for (; e !== null; ) {
          if (e.tag === 3) {
            ba(
              e,
              t,
              a
            );
            return;
          }
          if (e.tag === 1) {
            var i = e.stateNode;
            if (typeof e.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (es === null || !es.has(i))) {
              t = sa(a, t), wp(t), a = Xd(2), i = vu(e, a, 2), i !== null && (Qd(
                a,
                i,
                e,
                t
              ), Mn(i, 2), Ma(i));
              return;
            }
          }
          e = e.return;
        }
        console.error(
          `Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,
          a
        );
      }
    }
    function oh(t, e, a) {
      var i = t.pingCache;
      if (i === null) {
        i = t.pingCache = new WE();
        var o = /* @__PURE__ */ new Set();
        i.set(e, o);
      } else
        o = i.get(e), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(e, o));
      o.has(a) || (kS = !0, o.add(a), i = Ra.bind(null, t, e, a), qu && pf(t, a), e.then(i, i));
    }
    function Ra(t, e, a) {
      var i = t.pingCache;
      i !== null && i.delete(e), t.pingedLanes |= t.suspendedLanes & a, t.warmLanes &= ~a, (a & 127) !== 0 ? 0 > mc && (Hr = mc = Xl(), j0 = tg("Promise Resolved"), Kf = eg) : (a & 4194048) !== 0 && 0 > Zu && (So = Zu = Xl(), x0 = tg("Promise Resolved"), CS = eg), qy() && G.actQueue === null && console.error(
        `A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`
      ), Xe === t && (It & a) === a && (sl === Ff || sl === pg && (It & 62914560) === It && Gl() - Eg < Zb ? (de & Il) === oa && Ru(t, 0) : WS |= a, Vr === It && (Vr = 0)), Ma(t);
    }
    function Zy(t, e) {
      e === 0 && (e = Mo()), t = ea(t, e), t !== null && (Mn(t, e), Ma(t));
    }
    function hi(t) {
      var e = t.memoizedState, a = 0;
      e !== null && (a = e.retryLane), Zy(t, a);
    }
    function to(t, e) {
      var a = 0;
      switch (t.tag) {
        case 31:
        case 13:
          var i = t.stateNode, o = t.memoizedState;
          o !== null && (a = o.retryLane);
          break;
        case 19:
          i = t.stateNode;
          break;
        case 22:
          i = t.stateNode._retryCache;
          break;
        default:
          throw Error(
            "Pinged unknown suspense boundary type. This is probably a bug in React."
          );
      }
      i !== null && i.delete(e), Zy(t, a);
    }
    function Jn(t, e, a) {
      if ((e.subtreeFlags & 67117056) !== 0)
        for (e = e.child; e !== null; ) {
          var i = t, o = e, f = o.type === Aa;
          f = a || f, o.tag !== 22 ? o.flags & 67108864 ? f && ct(
            o,
            fh,
            i,
            o
          ) : Jn(
            i,
            o,
            f
          ) : o.memoizedState === null && (f && o.flags & 8192 ? ct(
            o,
            fh,
            i,
            o
          ) : o.subtreeFlags & 67108864 && ct(
            o,
            Jn,
            i,
            o,
            f
          )), e = e.sibling;
        }
    }
    function fh(t, e) {
      rt(!0);
      try {
        eh(e), Yy(e), Hy(t, e.alternate, e, !1), ar(t, e, 0, null, !1, 0);
      } finally {
        rt(!1);
      }
    }
    function sh(t) {
      var e = !0;
      t.current.mode & (Ba | bi) || (e = !1), Jn(
        t,
        t.current,
        e
      );
    }
    function An(t) {
      if ((de & Il) === oa) {
        var e = t.tag;
        if (e === 3 || e === 1 || e === 0 || e === 11 || e === 14 || e === 15) {
          if (e = st(t) || "ReactComponent", _g !== null) {
            if (_g.has(e)) return;
            _g.add(e);
          } else _g = /* @__PURE__ */ new Set([e]);
          ct(t, function() {
            console.error(
              "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously tries to update the component. Move this work to useEffect instead."
            );
          });
        }
      }
    }
    function pf(t, e) {
      qu && t.memoizedUpdaters.forEach(function(a) {
        Al(t, a, e);
      });
    }
    function vf(t, e) {
      var a = G.actQueue;
      return a !== null ? (a.push(e), PE) : S0(t, e);
    }
    function cr(t) {
      qy() && G.actQueue === null && ct(t, function() {
        console.error(
          `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,
          st(t)
        );
      });
    }
    function Ma(t) {
      t !== ym && t.next === null && (ym === null ? Dg = ym = t : ym = ym.next = t), Rg = !0, G.actQueue !== null ? u1 || (u1 = !0, cv()) : n1 || (n1 = !0, cv());
    }
    function Cu(t, e) {
      if (!i1 && Rg) {
        i1 = !0;
        do
          for (var a = !1, i = Dg; i !== null; ) {
            if (t !== 0) {
              var o = i.pendingLanes;
              if (o === 0) var f = 0;
              else {
                var d = i.suspendedLanes, h = i.pingedLanes;
                f = (1 << 31 - kl(42 | t) + 1) - 1, f &= o & ~(d & ~h), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
              }
              f !== 0 && (a = !0, or(i, f));
            } else
              f = It, f = gc(
                i,
                i === Xe ? f : 0,
                i.cancelPendingCommit !== null || i.timeoutHandle !== kr
              ), (f & 3) === 0 || vl(i, f) || (a = !0, or(i, f));
            i = i.next;
          }
        while (a);
        i1 = !1;
      }
    }
    function iv() {
      rp = window.event, rh();
    }
    function rh() {
      Rg = u1 = n1 = !1;
      var t = 0;
      ns !== 0 && ky() && (t = ns);
      for (var e = Gl(), a = null, i = Dg; i !== null; ) {
        var o = i.next, f = gf(i, e);
        f === 0 ? (i.next = null, a === null ? Dg = o : a.next = o, o === null && (ym = a)) : (a = i, (t !== 0 || (f & 3) !== 0) && (Rg = !0)), i = o;
      }
      Jl !== ls && Jl !== Og || Cu(t), ns !== 0 && (ns = 0);
    }
    function gf(t, e) {
      for (var a = t.suspendedLanes, i = t.pingedLanes, o = t.expirationTimes, f = t.pendingLanes & -62914561; 0 < f; ) {
        var d = 31 - kl(f), h = 1 << d, y = o[d];
        y === -1 ? ((h & a) === 0 || (h & i) !== 0) && (o[d] = Ir(h, e)) : y <= e && (t.expiredLanes |= h), f &= ~h;
      }
      if (e = Xe, a = It, a = gc(
        t,
        t === e ? a : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== kr
      ), i = t.callbackNode, a === 0 || t === e && (Ne === Qr || Ne === Lr) || t.cancelPendingCommit !== null)
        return i !== null && dh(i), t.callbackNode = null, t.callbackPriority = 0;
      if ((a & 3) === 0 || vl(t, a)) {
        if (e = a & -a, e !== t.callbackPriority || G.actQueue !== null && i !== c1)
          dh(i);
        else return e;
        switch (Ul(a)) {
          case Rl:
          case Wl:
            a = qh;
            break;
          case ua:
            a = fo;
            break;
          case rc:
            a = xh;
            break;
          default:
            a = fo;
        }
        return i = Jy.bind(null, t), G.actQueue !== null ? (G.actQueue.push(i), a = c1) : a = S0(a, i), t.callbackPriority = e, t.callbackNode = a, e;
      }
      return i !== null && dh(i), t.callbackPriority = 2, t.callbackNode = null, 2;
    }
    function Jy(t, e) {
      if (ig = ug = !1, rp = window.event, Jl !== ls && Jl !== Og)
        return t.callbackNode = null, t.callbackPriority = 0, null;
      var a = t.callbackNode;
      if (zi === Ag && (zi = IS), ur() && t.callbackNode !== a)
        return null;
      var i = It;
      return i = gc(
        t,
        t === Xe ? i : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== kr
      ), i === 0 ? null : (lv(
        t,
        i,
        e
      ), gf(t, Gl()), t.callbackNode != null && t.callbackNode === a ? Jy.bind(null, t) : null);
    }
    function or(t, e) {
      if (ur()) return null;
      ug = ig, ig = !1, lv(t, e, !0);
    }
    function dh(t) {
      t !== c1 && t !== null && Bh(t);
    }
    function cv() {
      G.actQueue !== null && G.actQueue.push(function() {
        return rh(), null;
      }), fT(function() {
        (de & (Il | au)) !== oa ? S0(
          b0,
          iv
        ) : rh();
      });
    }
    function Ky() {
      if (ns === 0) {
        var t = Yr;
        t === 0 && (t = jf, jf <<= 1, (jf & 261888) === 0 && (jf = 256)), ns = t;
      }
      return ns;
    }
    function ye(t) {
      return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : (me(t, "action"), vs("" + t));
    }
    function Ce(t, e) {
      var a = e.ownerDocument.createElement("input");
      return a.name = e.name, a.value = e.value, t.id && a.setAttribute("form", t.id), e.parentNode.insertBefore(a, e), t = new FormData(t), a.parentNode.removeChild(a), t;
    }
    function ue(t, e, a, i, o) {
      if (e === "submit" && a && a.stateNode === o) {
        var f = ye(
          (o[Oa] || null).action
        ), d = i.submitter;
        d && (e = (e = d[Oa] || null) ? ye(e.formAction) : d.getAttribute("formAction"), e !== null && (f = e, d = null));
        var h = new Kv(
          "action",
          "action",
          null,
          i,
          o
        );
        t.push({
          event: h,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (i.defaultPrevented) {
                  if (ns !== 0) {
                    var y = d ? Ce(
                      o,
                      d
                    ) : new FormData(o), p = {
                      pending: !0,
                      data: y,
                      method: o.method,
                      action: f
                    };
                    Object.freeze(p), fi(
                      a,
                      p,
                      null,
                      y
                    );
                  }
                } else
                  typeof f == "function" && (h.preventDefault(), y = d ? Ce(
                    o,
                    d
                  ) : new FormData(o), p = {
                    pending: !0,
                    data: y,
                    method: o.method,
                    action: f
                  }, Object.freeze(p), fi(
                    a,
                    p,
                    f,
                    y
                  ));
              },
              currentTarget: o
            }
          ]
        });
      }
    }
    function te(t, e, a) {
      t.currentTarget = a;
      try {
        e(t);
      } catch (i) {
        SS(i);
      }
      t.currentTarget = null;
    }
    function Oe(t, e) {
      e = (e & 4) !== 0;
      for (var a = 0; a < t.length; a++) {
        var i = t[a];
        t: {
          var o = void 0, f = i.event;
          if (i = i.listeners, e)
            for (var d = i.length - 1; 0 <= d; d--) {
              var h = i[d], y = h.instance, p = h.currentTarget;
              if (h = h.listener, y !== o && f.isPropagationStopped())
                break t;
              y !== null ? ct(
                y,
                te,
                f,
                h,
                p
              ) : te(f, h, p), o = y;
            }
          else
            for (d = 0; d < i.length; d++) {
              if (h = i[d], y = h.instance, p = h.currentTarget, h = h.listener, y !== o && f.isPropagationStopped())
                break t;
              y !== null ? ct(
                y,
                te,
                f,
                h,
                p
              ) : te(f, h, p), o = y;
            }
        }
      }
    }
    function Mt(t, e) {
      o1.has(t) || console.error(
        'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
        t
      );
      var a = e[ro];
      a === void 0 && (a = e[ro] = /* @__PURE__ */ new Set());
      var i = t + "__bubble";
      a.has(i) || (hh(e, t, 2, !1), a.add(i));
    }
    function Uu(t, e, a) {
      o1.has(t) && !e && console.error(
        'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
        t
      );
      var i = 0;
      e && (i |= 4), hh(
        a,
        t,
        i,
        e
      );
    }
    function nc(t) {
      if (!t[Mg]) {
        t[Mg] = !0, Qv.forEach(function(a) {
          a !== "selectionchange" && (o1.has(a) || Uu(a, !1, t), Uu(a, !0, t));
        });
        var e = t.nodeType === 9 ? t : t.ownerDocument;
        e === null || e[Mg] || (e[Mg] = !0, Uu("selectionchange", !1, e));
      }
    }
    function hh(t, e, a, i) {
      switch (Dh(e)) {
        case Rl:
          var o = o0;
          break;
        case Wl:
          o = $l;
          break;
        default:
          o = f0;
      }
      a = o.bind(
        null,
        e,
        a,
        t
      ), o = void 0, !fS || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (o = !0), i ? o !== void 0 ? t.addEventListener(e, a, {
        capture: !0,
        passive: o
      }) : t.addEventListener(e, a, !0) : o !== void 0 ? t.addEventListener(e, a, {
        passive: o
      }) : t.addEventListener(
        e,
        a,
        !1
      );
    }
    function Kn(t, e, a, i, o) {
      var f = i;
      if ((e & 1) === 0 && (e & 2) === 0 && i !== null)
        t: for (; ; ) {
          if (i === null) return;
          var d = i.tag;
          if (d === 3 || d === 4) {
            var h = i.stateNode.containerInfo;
            if (h === o) break;
            if (d === 4)
              for (d = i.return; d !== null; ) {
                var y = d.tag;
                if ((y === 3 || y === 4) && d.stateNode.containerInfo === o)
                  return;
                d = d.return;
              }
            for (; h !== null; ) {
              if (d = I(h), d === null) return;
              if (y = d.tag, y === 5 || y === 6 || y === 26 || y === 27) {
                i = f = d;
                continue t;
              }
              h = h.parentNode;
            }
          }
          i = i.return;
        }
      sd(function() {
        var p = f, z = Un(a), R = [];
        t: {
          var E = j1.get(t);
          if (E !== void 0) {
            var q = Kv, at = t;
            switch (t) {
              case "keypress":
                if (gs(a) === 0) break t;
              case "keydown":
              case "keyup":
                q = mE;
                break;
              case "focusin":
                at = "focus", q = hS;
                break;
              case "focusout":
                at = "blur", q = hS;
                break;
              case "beforeblur":
              case "afterblur":
                q = hS;
                break;
              case "click":
                if (a.button === 2) break t;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                q = T1;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                q = lE;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                q = vE;
                break;
              case H1:
              case N1:
              case B1:
                q = uE;
                break;
              case Y1:
                q = SE;
                break;
              case "scroll":
              case "scrollend":
                q = tE;
                break;
              case "wheel":
                q = EE;
                break;
              case "copy":
              case "cut":
              case "paste":
                q = cE;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                q = O1;
                break;
              case "toggle":
              case "beforetoggle":
                q = AE;
            }
            var ot = (e & 4) !== 0, Ze = !ot && (t === "scroll" || t === "scrollend"), oe = ot ? E !== null ? E + "Capture" : null : E;
            ot = [];
            for (var b = p, T; b !== null; ) {
              var O = b;
              if (T = O.stateNode, O = O.tag, O !== 5 && O !== 26 && O !== 27 || T === null || oe === null || (O = ru(b, oe), O != null && ot.push(
                Ge(
                  b,
                  O,
                  T
                )
              )), Ze) break;
              b = b.return;
            }
            0 < ot.length && (E = new q(
              E,
              at,
              null,
              a,
              z
            ), R.push({
              event: E,
              listeners: ot
            }));
          }
        }
        if ((e & 7) === 0) {
          t: {
            if (E = t === "mouseover" || t === "pointerover", q = t === "mouseout" || t === "pointerout", E && a !== z0 && (at = a.relatedTarget || a.fromElement) && (I(at) || at[Si]))
              break t;
            if ((q || E) && (E = z.window === z ? z : (E = z.ownerDocument) ? E.defaultView || E.parentWindow : window, q ? (at = a.relatedTarget || a.toElement, q = p, at = at ? I(at) : null, at !== null && (Ze = le(at), ot = at.tag, at !== Ze || ot !== 5 && ot !== 27 && ot !== 6) && (at = null)) : (q = null, at = p), q !== at)) {
              if (ot = T1, O = "onMouseLeave", oe = "onMouseEnter", b = "mouse", (t === "pointerout" || t === "pointerover") && (ot = O1, O = "onPointerLeave", oe = "onPointerEnter", b = "pointer"), Ze = q == null ? E : dt(q), T = at == null ? E : dt(at), E = new ot(
                O,
                b + "leave",
                q,
                a,
                z
              ), E.target = Ze, E.relatedTarget = T, O = null, I(z) === p && (ot = new ot(
                oe,
                b + "enter",
                at,
                a,
                z
              ), ot.target = T, ot.relatedTarget = Ze, O = ot), Ze = O, q && at)
                e: {
                  for (ot = eo, oe = q, b = at, T = 0, O = oe; O; O = ot(O))
                    T++;
                  O = 0;
                  for (var V = b; V; V = ot(V))
                    O++;
                  for (; 0 < T - O; )
                    oe = ot(oe), T--;
                  for (; 0 < O - T; )
                    b = ot(b), O--;
                  for (; T--; ) {
                    if (oe === b || b !== null && oe === b.alternate) {
                      ot = oe;
                      break e;
                    }
                    oe = ot(oe), b = ot(b);
                  }
                  ot = null;
                }
              else ot = null;
              q !== null && mh(
                R,
                E,
                q,
                ot,
                !1
              ), at !== null && Ze !== null && mh(
                R,
                Ze,
                at,
                ot,
                !0
              );
            }
          }
          t: {
            if (E = p ? dt(p) : window, q = E.nodeName && E.nodeName.toLowerCase(), q === "select" || q === "input" && E.type === "file")
              var ut = Bi;
            else if (Hm(E))
              if (C1)
                ut = Ts;
              else {
                ut = Nm;
                var Yt = kg;
              }
            else
              q = E.nodeName, !q || q.toLowerCase() !== "input" || E.type !== "checkbox" && E.type !== "radio" ? p && su(p.elementType) && (ut = Bi) : ut = Bm;
            if (ut && (ut = ut(t, p))) {
              bs(
                R,
                ut,
                a,
                z
              );
              break t;
            }
            Yt && Yt(t, E, p), t === "focusout" && p && E.type === "number" && p.memoizedProps.value != null && Am(E, "number", E.value);
          }
          switch (Yt = p ? dt(p) : window, t) {
            case "focusin":
              (Hm(Yt) || Yt.contentEditable === "true") && (Jh = Yt, yS = p, H0 = null);
              break;
            case "focusout":
              H0 = yS = Jh = null;
              break;
            case "mousedown":
              pS = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              pS = !1, Mp(
                R,
                a,
                z
              );
              break;
            case "selectionchange":
              if (DE) break;
            case "keydown":
            case "keyup":
              Mp(
                R,
                a,
                z
              );
          }
          var bt;
          if (mS)
            t: {
              switch (t) {
                case "compositionstart":
                  var vt = "onCompositionStart";
                  break t;
                case "compositionend":
                  vt = "onCompositionEnd";
                  break t;
                case "compositionupdate":
                  vt = "onCompositionUpdate";
                  break t;
              }
              vt = void 0;
            }
          else
            Zh ? Go(t, a) && (vt = "onCompositionEnd") : t === "keydown" && a.keyCode === z1 && (vt = "onCompositionStart");
          vt && (_1 && a.locale !== "ko" && (Zh || vt !== "onCompositionStart" ? vt === "onCompositionEnd" && Zh && (bt = zc()) : (Xf = z, sS = "value" in Xf ? Xf.value : Xf.textContent, Zh = !0)), Yt = $n(
            p,
            vt
          ), 0 < Yt.length && (vt = new A1(
            vt,
            t,
            null,
            a,
            z
          ), R.push({
            event: vt,
            listeners: Yt
          }), bt ? vt.data = bt : (bt = Pu(a), bt !== null && (vt.data = bt)))), (bt = zE ? Um(t, a) : rd(t, a)) && (vt = $n(
            p,
            "onBeforeInput"
          ), 0 < vt.length && (Yt = new fE(
            "onBeforeInput",
            "beforeinput",
            null,
            a,
            z
          ), R.push({
            event: Yt,
            listeners: vt
          }), Yt.data = bt)), ue(
            R,
            t,
            p,
            a,
            z
          );
        }
        Oe(R, e);
      });
    }
    function Ge(t, e, a) {
      return {
        instance: t,
        listener: e,
        currentTarget: a
      };
    }
    function $n(t, e) {
      for (var a = e + "Capture", i = []; t !== null; ) {
        var o = t, f = o.stateNode;
        if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || f === null || (o = ru(t, a), o != null && i.unshift(
          Ge(t, o, f)
        ), o = ru(t, e), o != null && i.push(
          Ge(t, o, f)
        )), t.tag === 3) return i;
        t = t.return;
      }
      return [];
    }
    function eo(t) {
      if (t === null) return null;
      do
        t = t.return;
      while (t && t.tag !== 5 && t.tag !== 27);
      return t || null;
    }
    function mh(t, e, a, i, o) {
      for (var f = e._reactName, d = []; a !== null && a !== i; ) {
        var h = a, y = h.alternate, p = h.stateNode;
        if (h = h.tag, y !== null && y === i) break;
        h !== 5 && h !== 26 && h !== 27 || p === null || (y = p, o ? (p = ru(a, f), p != null && d.unshift(
          Ge(a, p, y)
        )) : o || (p = ru(a, f), p != null && d.push(
          Ge(a, p, y)
        ))), a = a.return;
      }
      d.length !== 0 && t.push({ event: e, listeners: d });
    }
    function Ea(t, e) {
      Op(t, e), t !== "input" && t !== "textarea" && t !== "select" || e == null || e.value !== null || b1 || (b1 = !0, t === "select" && e.multiple ? console.error(
        "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
        t
      ) : console.error(
        "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
        t
      ));
      var a = {
        registrationNameDependencies: xu,
        possibleRegistrationNames: Gf
      };
      su(t) || typeof e.is == "string" || $g(t, e, a), e.contentEditable && !e.suppressContentEditableWarning && e.children != null && console.error(
        "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
      );
    }
    function ll(t, e, a, i) {
      e !== a && (a = kn(a), kn(e) !== a && (i[t] = e));
    }
    function fr(t, e, a) {
      e.forEach(function(i) {
        a[mi(i)] = i === "style" ? uc(t) : t.getAttribute(i);
      });
    }
    function al(t, e) {
      e === !1 ? console.error(
        "Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",
        t,
        t,
        t
      ) : console.error(
        "Expected `%s` listener to be a function, instead got a value of `%s` type.",
        t,
        typeof e
      );
    }
    function yh(t, e) {
      return t = t.namespaceURI === Xt || t.namespaceURI === Kt ? t.ownerDocument.createElementNS(
        t.namespaceURI,
        t.tagName
      ) : t.ownerDocument.createElement(t.tagName), t.innerHTML = e, t.innerHTML;
    }
    function kn(t) {
      return xa(t) && (console.error(
        "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",
        Di(t)
      ), uu(t)), (typeof t == "string" ? t : "" + t).replace(tT, `
`).replace(eT, "");
    }
    function $y(t, e) {
      return e = kn(e), kn(t) === e;
    }
    function Se(t, e, a, i, o, f) {
      switch (a) {
        case "children":
          typeof i == "string" ? (ps(i, e, !1), e === "body" || e === "textarea" && i === "" || Oc(t, i)) : (typeof i == "number" || typeof i == "bigint") && (ps("" + i, e, !1), e !== "body" && Oc(t, "" + i));
          break;
        case "className":
          hs(t, "class", i);
          break;
        case "tabIndex":
          hs(t, "tabindex", i);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          hs(t, a, i);
          break;
        case "style":
          Rm(t, i, f);
          break;
        case "data":
          if (e !== "object") {
            hs(t, "data", i);
            break;
          }
        case "src":
        case "href":
          if (i === "" && (e !== "a" || a !== "href")) {
            console.error(
              a === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
              a,
              a
            ), t.removeAttribute(a);
            break;
          }
          if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
            t.removeAttribute(a);
            break;
          }
          me(i, a), i = vs("" + i), t.setAttribute(a, i);
          break;
        case "action":
        case "formAction":
          if (i != null && (e === "form" ? a === "formAction" ? console.error(
            "You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."
          ) : typeof i == "function" && (o.encType == null && o.method == null || Hg || (Hg = !0, console.error(
            "Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."
          )), o.target == null || Ug || (Ug = !0, console.error(
            "Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."
          ))) : e === "input" || e === "button" ? a === "action" ? console.error(
            "You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."
          ) : e !== "input" || o.type === "submit" || o.type === "image" || Cg ? e !== "button" || o.type == null || o.type === "submit" || Cg ? typeof i == "function" && (o.name == null || u2 || (u2 = !0, console.error(
            'Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'
          )), o.formEncType == null && o.formMethod == null || Hg || (Hg = !0, console.error(
            "Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."
          )), o.formTarget == null || Ug || (Ug = !0, console.error(
            "Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."
          ))) : (Cg = !0, console.error(
            'A button can only specify a formAction along with type="submit" or no type.'
          )) : (Cg = !0, console.error(
            'An input can only specify a formAction along with type="submit" or type="image".'
          )) : console.error(
            a === "action" ? "You can only pass the action prop to <form>." : "You can only pass the formAction prop to <input> or <button>."
          )), typeof i == "function") {
            t.setAttribute(
              a,
              "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
            );
            break;
          } else
            typeof f == "function" && (a === "formAction" ? (e !== "input" && Se(t, e, "name", o.name, o, null), Se(
              t,
              e,
              "formEncType",
              o.formEncType,
              o,
              null
            ), Se(
              t,
              e,
              "formMethod",
              o.formMethod,
              o,
              null
            ), Se(
              t,
              e,
              "formTarget",
              o.formTarget,
              o,
              null
            )) : (Se(
              t,
              e,
              "encType",
              o.encType,
              o,
              null
            ), Se(t, e, "method", o.method, o, null), Se(
              t,
              e,
              "target",
              o.target,
              o,
              null
            )));
          if (i == null || typeof i == "symbol" || typeof i == "boolean") {
            t.removeAttribute(a);
            break;
          }
          me(i, a), i = vs("" + i), t.setAttribute(a, i);
          break;
        case "onClick":
          i != null && (typeof i != "function" && al(a, i), t.onclick = hn);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && al(a, i), Mt("scroll", t));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && al(a, i), Mt("scrollend", t));
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = i.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              t.innerHTML = a;
            }
          }
          break;
        case "multiple":
          t.multiple = i && typeof i != "function" && typeof i != "symbol";
          break;
        case "muted":
          t.muted = i && typeof i != "function" && typeof i != "symbol";
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
          if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
            t.removeAttribute("xlink:href");
            break;
          }
          me(i, a), a = vs("" + i), t.setAttributeNS(Jr, "xlink:href", a);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          i != null && typeof i != "function" && typeof i != "symbol" ? (me(i, a), t.setAttribute(a, "" + i)) : t.removeAttribute(a);
          break;
        case "inert":
          i !== "" || Ng[a] || (Ng[a] = !0, console.error(
            "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
            a
          ));
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
          i && typeof i != "function" && typeof i != "symbol" ? t.setAttribute(a, "") : t.removeAttribute(a);
          break;
        case "capture":
        case "download":
          i === !0 ? t.setAttribute(a, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? (me(i, a), t.setAttribute(a, i)) : t.removeAttribute(a);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? (me(i, a), t.setAttribute(a, i)) : t.removeAttribute(a);
          break;
        case "rowSpan":
        case "start":
          i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? t.removeAttribute(a) : (me(i, a), t.setAttribute(a, i));
          break;
        case "popover":
          Mt("beforetoggle", t), Mt("toggle", t), Ho(t, "popover", i);
          break;
        case "xlinkActuate":
          cu(
            t,
            Jr,
            "xlink:actuate",
            i
          );
          break;
        case "xlinkArcrole":
          cu(
            t,
            Jr,
            "xlink:arcrole",
            i
          );
          break;
        case "xlinkRole":
          cu(
            t,
            Jr,
            "xlink:role",
            i
          );
          break;
        case "xlinkShow":
          cu(
            t,
            Jr,
            "xlink:show",
            i
          );
          break;
        case "xlinkTitle":
          cu(
            t,
            Jr,
            "xlink:title",
            i
          );
          break;
        case "xlinkType":
          cu(
            t,
            Jr,
            "xlink:type",
            i
          );
          break;
        case "xmlBase":
          cu(
            t,
            f1,
            "xml:base",
            i
          );
          break;
        case "xmlLang":
          cu(
            t,
            f1,
            "xml:lang",
            i
          );
          break;
        case "xmlSpace":
          cu(
            t,
            f1,
            "xml:space",
            i
          );
          break;
        case "is":
          f != null && console.error(
            'Cannot update the "is" prop after it has been initialized.'
          ), Ho(t, "is", i);
          break;
        case "innerText":
        case "textContent":
          break;
        case "popoverTarget":
          i2 || i == null || typeof i != "object" || (i2 = !0, console.error(
            "The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",
            i
          ));
        default:
          !(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N" ? (a = Tp(a), Ho(t, a, i)) : xu.hasOwnProperty(a) && i != null && typeof i != "function" && al(a, i);
      }
    }
    function Sf(t, e, a, i, o, f) {
      switch (a) {
        case "style":
          Rm(t, i, f);
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = i.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              t.innerHTML = a;
            }
          }
          break;
        case "children":
          typeof i == "string" ? Oc(t, i) : (typeof i == "number" || typeof i == "bigint") && Oc(t, "" + i);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && al(a, i), Mt("scroll", t));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && al(a, i), Mt("scrollend", t));
          break;
        case "onClick":
          i != null && (typeof i != "function" && al(a, i), t.onclick = hn);
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
          if (xu.hasOwnProperty(a))
            i != null && typeof i != "function" && al(a, i);
          else
            t: {
              if (a[0] === "o" && a[1] === "n" && (o = a.endsWith("Capture"), e = a.slice(2, o ? a.length - 7 : void 0), f = t[Oa] || null, f = f != null ? f[a] : null, typeof f == "function" && t.removeEventListener(e, f, o), typeof i == "function")) {
                typeof f != "function" && f !== null && (a in t ? t[a] = null : t.hasAttribute(a) && t.removeAttribute(a)), t.addEventListener(e, i, o);
                break t;
              }
              a in t ? t[a] = i : i === !0 ? t.setAttribute(a, "") : Ho(t, a, i);
            }
      }
    }
    function ke(t, e, a) {
      switch (Ea(e, a), e) {
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
          Mt("error", t), Mt("load", t);
          var i = !1, o = !1, f;
          for (f in a)
            if (a.hasOwnProperty(f)) {
              var d = a[f];
              if (d != null)
                switch (f) {
                  case "src":
                    i = !0;
                    break;
                  case "srcSet":
                    o = !0;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  default:
                    Se(t, e, f, d, a, null);
                }
            }
          o && Se(t, e, "srcSet", a.srcSet, a, null), i && Se(t, e, "src", a.src, a, null);
          return;
        case "input":
          ta("input", a), Mt("invalid", t);
          var h = f = d = o = null, y = null, p = null;
          for (i in a)
            if (a.hasOwnProperty(i)) {
              var z = a[i];
              if (z != null)
                switch (i) {
                  case "name":
                    o = z;
                    break;
                  case "type":
                    d = z;
                    break;
                  case "checked":
                    y = z;
                    break;
                  case "defaultChecked":
                    p = z;
                    break;
                  case "value":
                    f = z;
                    break;
                  case "defaultValue":
                    h = z;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (z != null)
                      throw Error(
                        e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                      );
                    break;
                  default:
                    Se(t, e, i, z, a, null);
                }
            }
          fa(t, a), ld(
            t,
            f,
            h,
            y,
            p,
            d,
            o,
            !1
          );
          return;
        case "select":
          ta("select", a), Mt("invalid", t), i = d = f = null;
          for (o in a)
            if (a.hasOwnProperty(o) && (h = a[o], h != null))
              switch (o) {
                case "value":
                  f = h;
                  break;
                case "defaultValue":
                  d = h;
                  break;
                case "multiple":
                  i = h;
                default:
                  Se(
                    t,
                    e,
                    o,
                    h,
                    a,
                    null
                  );
              }
          ad(t, a), e = f, a = d, t.multiple = !!i, e != null ? ou(t, !!i, e, !1) : a != null && ou(t, !!i, a, !0);
          return;
        case "textarea":
          ta("textarea", a), Mt("invalid", t), f = o = i = null;
          for (d in a)
            if (a.hasOwnProperty(d) && (h = a[d], h != null))
              switch (d) {
                case "value":
                  i = h;
                  break;
                case "defaultValue":
                  o = h;
                  break;
                case "children":
                  f = h;
                  break;
                case "dangerouslySetInnerHTML":
                  if (h != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  Se(
                    t,
                    e,
                    d,
                    h,
                    a,
                    null
                  );
              }
          bc(t, a), No(t, i, o, f);
          return;
        case "option":
          Ep(t, a);
          for (y in a)
            a.hasOwnProperty(y) && (i = a[y], i != null) && (y === "selected" ? t.selected = i && typeof i != "function" && typeof i != "symbol" : Se(t, e, y, i, a, null));
          return;
        case "dialog":
          Mt("beforetoggle", t), Mt("toggle", t), Mt("cancel", t), Mt("close", t);
          break;
        case "iframe":
        case "object":
          Mt("load", t);
          break;
        case "video":
        case "audio":
          for (i = 0; i < op.length; i++)
            Mt(op[i], t);
          break;
        case "image":
          Mt("error", t), Mt("load", t);
          break;
        case "details":
          Mt("toggle", t);
          break;
        case "embed":
        case "source":
        case "link":
          Mt("error", t), Mt("load", t);
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
          for (p in a)
            if (a.hasOwnProperty(p) && (i = a[p], i != null))
              switch (p) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(
                    e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                  );
                default:
                  Se(t, e, p, i, a, null);
              }
          return;
        default:
          if (su(e)) {
            for (z in a)
              a.hasOwnProperty(z) && (i = a[z], i !== void 0 && Sf(
                t,
                e,
                z,
                i,
                a,
                void 0
              ));
            return;
          }
      }
      for (h in a)
        a.hasOwnProperty(h) && (i = a[h], i != null && Se(t, e, h, i, a, null));
    }
    function _l(t, e, a, i) {
      switch (Ea(e, i), e) {
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
          var o = null, f = null, d = null, h = null, y = null, p = null, z = null;
          for (q in a) {
            var R = a[q];
            if (a.hasOwnProperty(q) && R != null)
              switch (q) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  y = R;
                default:
                  i.hasOwnProperty(q) || Se(
                    t,
                    e,
                    q,
                    null,
                    i,
                    R
                  );
              }
          }
          for (var E in i) {
            var q = i[E];
            if (R = a[E], i.hasOwnProperty(E) && (q != null || R != null))
              switch (E) {
                case "type":
                  f = q;
                  break;
                case "name":
                  o = q;
                  break;
                case "checked":
                  p = q;
                  break;
                case "defaultChecked":
                  z = q;
                  break;
                case "value":
                  d = q;
                  break;
                case "defaultValue":
                  h = q;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (q != null)
                    throw Error(
                      e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  q !== R && Se(
                    t,
                    e,
                    E,
                    q,
                    i,
                    R
                  );
              }
          }
          e = a.type === "checkbox" || a.type === "radio" ? a.checked != null : a.value != null, i = i.type === "checkbox" || i.type === "radio" ? i.checked != null : i.value != null, e || !i || n2 || (console.error(
            "A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), n2 = !0), !e || i || a2 || (console.error(
            "A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), a2 = !0), Ui(
            t,
            d,
            h,
            y,
            p,
            z,
            f,
            o
          );
          return;
        case "select":
          q = d = h = E = null;
          for (f in a)
            if (y = a[f], a.hasOwnProperty(f) && y != null)
              switch (f) {
                case "value":
                  break;
                case "multiple":
                  q = y;
                default:
                  i.hasOwnProperty(f) || Se(
                    t,
                    e,
                    f,
                    null,
                    i,
                    y
                  );
              }
          for (o in i)
            if (f = i[o], y = a[o], i.hasOwnProperty(o) && (f != null || y != null))
              switch (o) {
                case "value":
                  E = f;
                  break;
                case "defaultValue":
                  h = f;
                  break;
                case "multiple":
                  d = f;
                default:
                  f !== y && Se(
                    t,
                    e,
                    o,
                    f,
                    i,
                    y
                  );
              }
          i = h, e = d, a = q, E != null ? ou(t, !!e, E, !1) : !!a != !!e && (i != null ? ou(t, !!e, i, !0) : ou(t, !!e, e ? [] : "", !1));
          return;
        case "textarea":
          q = E = null;
          for (h in a)
            if (o = a[h], a.hasOwnProperty(h) && o != null && !i.hasOwnProperty(h))
              switch (h) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  Se(t, e, h, null, i, o);
              }
          for (d in i)
            if (o = i[d], f = a[d], i.hasOwnProperty(d) && (o != null || f != null))
              switch (d) {
                case "value":
                  E = o;
                  break;
                case "defaultValue":
                  q = o;
                  break;
                case "children":
                  break;
                case "dangerouslySetInnerHTML":
                  if (o != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  o !== f && Se(t, e, d, o, i, f);
              }
          Ec(t, E, q);
          return;
        case "option":
          for (var at in a)
            E = a[at], a.hasOwnProperty(at) && E != null && !i.hasOwnProperty(at) && (at === "selected" ? t.selected = !1 : Se(
              t,
              e,
              at,
              null,
              i,
              E
            ));
          for (y in i)
            E = i[y], q = a[y], i.hasOwnProperty(y) && E !== q && (E != null || q != null) && (y === "selected" ? t.selected = E && typeof E != "function" && typeof E != "symbol" : Se(
              t,
              e,
              y,
              E,
              i,
              q
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
          for (var ot in a)
            E = a[ot], a.hasOwnProperty(ot) && E != null && !i.hasOwnProperty(ot) && Se(
              t,
              e,
              ot,
              null,
              i,
              E
            );
          for (p in i)
            if (E = i[p], q = a[p], i.hasOwnProperty(p) && E !== q && (E != null || q != null))
              switch (p) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (E != null)
                    throw Error(
                      e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  Se(
                    t,
                    e,
                    p,
                    E,
                    i,
                    q
                  );
              }
          return;
        default:
          if (su(e)) {
            for (var Ze in a)
              E = a[Ze], a.hasOwnProperty(Ze) && E !== void 0 && !i.hasOwnProperty(Ze) && Sf(
                t,
                e,
                Ze,
                void 0,
                i,
                E
              );
            for (z in i)
              E = i[z], q = a[z], !i.hasOwnProperty(z) || E === q || E === void 0 && q === void 0 || Sf(
                t,
                e,
                z,
                E,
                i,
                q
              );
            return;
          }
      }
      for (var oe in a)
        E = a[oe], a.hasOwnProperty(oe) && E != null && !i.hasOwnProperty(oe) && Se(t, e, oe, null, i, E);
      for (R in i)
        E = i[R], q = a[R], !i.hasOwnProperty(R) || E === q || E == null && q == null || Se(t, e, R, E, i, q);
    }
    function mi(t) {
      switch (t) {
        case "class":
          return "className";
        case "for":
          return "htmlFor";
        default:
          return t;
      }
    }
    function uc(t) {
      var e = {};
      t = t.style;
      for (var a = 0; a < t.length; a++) {
        var i = t[a];
        e[i] = t.getPropertyValue(i);
      }
      return e;
    }
    function Hu(t, e, a) {
      if (e != null && typeof e != "object")
        console.error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      else {
        var i, o = i = "", f;
        for (f in e)
          if (e.hasOwnProperty(f)) {
            var d = e[f];
            d != null && typeof d != "boolean" && d !== "" && (f.indexOf("--") === 0 ? (Pl(d, f), i += o + f + ":" + ("" + d).trim()) : typeof d != "number" || d === 0 || mt.has(f) ? (Pl(d, f), i += o + f.replace(w, "-$1").toLowerCase().replace(ft, "-ms-") + ":" + ("" + d).trim()) : i += o + f.replace(w, "-$1").toLowerCase().replace(ft, "-ms-") + ":" + d + "px", o = ";");
          }
        i = i || null, e = t.getAttribute("style"), e !== i && (i = kn(i), kn(e) !== i && (a.style = uc(t)));
      }
    }
    function Ca(t, e, a, i, o, f) {
      if (o.delete(a), t = t.getAttribute(a), t === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (me(i, e), t === "" + i)
              return;
        }
      ll(e, t, i, f);
    }
    function ph(t, e, a, i, o, f) {
      if (o.delete(a), t = t.getAttribute(a), t === null) {
        switch (typeof i) {
          case "function":
          case "symbol":
            return;
        }
        if (!i) return;
      } else
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (i) return;
        }
      ll(e, t, i, f);
    }
    function vh(t, e, a, i, o, f) {
      if (o.delete(a), t = t.getAttribute(a), t === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (me(i, a), t === "" + i)
              return;
        }
      ll(e, t, i, f);
    }
    function bf(t, e, a, i, o, f) {
      if (o.delete(a), t = t.getAttribute(a), t === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
          default:
            if (isNaN(i)) return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (!isNaN(i) && (me(i, e), t === "" + i))
              return;
        }
      ll(e, t, i, f);
    }
    function sr(t, e, a, i, o, f) {
      if (o.delete(a), t = t.getAttribute(a), t === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (me(i, e), a = vs("" + i), t === a)
              return;
        }
      ll(e, t, i, f);
    }
    function Ua(t, e, a, i) {
      for (var o = {}, f = /* @__PURE__ */ new Set(), d = t.attributes, h = 0; h < d.length; h++)
        switch (d[h].name.toLowerCase()) {
          case "value":
            break;
          case "checked":
            break;
          case "selected":
            break;
          default:
            f.add(d[h].name);
        }
      if (su(e)) {
        for (var y in a)
          if (a.hasOwnProperty(y)) {
            var p = a[y];
            if (p != null) {
              if (xu.hasOwnProperty(y))
                typeof p != "function" && al(y, p);
              else if (a.suppressHydrationWarning !== !0)
                switch (y) {
                  case "children":
                    typeof p != "string" && typeof p != "number" || ll(
                      "children",
                      t.textContent,
                      p,
                      o
                    );
                    continue;
                  case "suppressContentEditableWarning":
                  case "suppressHydrationWarning":
                  case "defaultValue":
                  case "defaultChecked":
                  case "innerHTML":
                  case "ref":
                    continue;
                  case "dangerouslySetInnerHTML":
                    d = t.innerHTML, p = p ? p.__html : void 0, p != null && (p = yh(t, p), ll(
                      y,
                      d,
                      p,
                      o
                    ));
                    continue;
                  case "style":
                    f.delete(y), Hu(t, p, o);
                    continue;
                  case "offsetParent":
                  case "offsetTop":
                  case "offsetLeft":
                  case "offsetWidth":
                  case "offsetHeight":
                  case "isContentEditable":
                  case "outerText":
                  case "outerHTML":
                    f.delete(y.toLowerCase()), console.error(
                      "Assignment to read-only property will result in a no-op: `%s`",
                      y
                    );
                    continue;
                  case "className":
                    f.delete("class"), d = Ci(
                      t,
                      "class",
                      p
                    ), ll(
                      "className",
                      d,
                      p,
                      o
                    );
                    continue;
                  default:
                    i.context === _o && e !== "svg" && e !== "math" ? f.delete(y.toLowerCase()) : f.delete(y), d = Ci(
                      t,
                      y,
                      p
                    ), ll(
                      y,
                      d,
                      p,
                      o
                    );
                }
            }
          }
      } else
        for (p in a)
          if (a.hasOwnProperty(p) && (y = a[p], y != null)) {
            if (xu.hasOwnProperty(p))
              typeof y != "function" && al(p, y);
            else if (a.suppressHydrationWarning !== !0)
              switch (p) {
                case "children":
                  typeof y != "string" && typeof y != "number" || ll(
                    "children",
                    t.textContent,
                    y,
                    o
                  );
                  continue;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "value":
                case "checked":
                case "selected":
                case "defaultValue":
                case "defaultChecked":
                case "innerHTML":
                case "ref":
                  continue;
                case "dangerouslySetInnerHTML":
                  d = t.innerHTML, y = y ? y.__html : void 0, y != null && (y = yh(t, y), d !== y && (o[p] = { __html: d }));
                  continue;
                case "className":
                  Ca(
                    t,
                    p,
                    "class",
                    y,
                    f,
                    o
                  );
                  continue;
                case "tabIndex":
                  Ca(
                    t,
                    p,
                    "tabindex",
                    y,
                    f,
                    o
                  );
                  continue;
                case "style":
                  f.delete(p), Hu(t, y, o);
                  continue;
                case "multiple":
                  f.delete(p), ll(
                    p,
                    t.multiple,
                    y,
                    o
                  );
                  continue;
                case "muted":
                  f.delete(p), ll(
                    p,
                    t.muted,
                    y,
                    o
                  );
                  continue;
                case "autoFocus":
                  f.delete("autofocus"), ll(
                    p,
                    t.autofocus,
                    y,
                    o
                  );
                  continue;
                case "data":
                  if (e !== "object") {
                    f.delete(p), d = t.getAttribute("data"), ll(
                      p,
                      d,
                      y,
                      o
                    );
                    continue;
                  }
                case "src":
                case "href":
                  if (!(y !== "" || e === "a" && p === "href" || e === "object" && p === "data")) {
                    console.error(
                      p === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
                      p,
                      p
                    );
                    continue;
                  }
                  sr(
                    t,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                case "action":
                case "formAction":
                  if (d = t.getAttribute(p), typeof y == "function") {
                    f.delete(p.toLowerCase()), p === "formAction" ? (f.delete("name"), f.delete("formenctype"), f.delete("formmethod"), f.delete("formtarget")) : (f.delete("enctype"), f.delete("method"), f.delete("target"));
                    continue;
                  } else if (d === lT) {
                    f.delete(p.toLowerCase()), ll(
                      p,
                      "function",
                      y,
                      o
                    );
                    continue;
                  }
                  sr(
                    t,
                    p,
                    p.toLowerCase(),
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkHref":
                  sr(
                    t,
                    p,
                    "xlink:href",
                    y,
                    f,
                    o
                  );
                  continue;
                case "contentEditable":
                  vh(
                    t,
                    p,
                    "contenteditable",
                    y,
                    f,
                    o
                  );
                  continue;
                case "spellCheck":
                  vh(
                    t,
                    p,
                    "spellcheck",
                    y,
                    f,
                    o
                  );
                  continue;
                case "draggable":
                case "autoReverse":
                case "externalResourcesRequired":
                case "focusable":
                case "preserveAlpha":
                  vh(
                    t,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
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
                  ph(
                    t,
                    p,
                    p.toLowerCase(),
                    y,
                    f,
                    o
                  );
                  continue;
                case "capture":
                case "download":
                  t: {
                    h = t;
                    var z = d = p, R = o;
                    if (f.delete(z), h = h.getAttribute(z), h === null)
                      switch (typeof y) {
                        case "undefined":
                        case "function":
                        case "symbol":
                          break t;
                        default:
                          if (y === !1) break t;
                      }
                    else if (y != null)
                      switch (typeof y) {
                        case "function":
                        case "symbol":
                          break;
                        case "boolean":
                          if (y === !0 && h === "") break t;
                          break;
                        default:
                          if (me(y, d), h === "" + y)
                            break t;
                      }
                    ll(
                      d,
                      h,
                      y,
                      R
                    );
                  }
                  continue;
                case "cols":
                case "rows":
                case "size":
                case "span":
                  t: {
                    if (h = t, z = d = p, R = o, f.delete(z), h = h.getAttribute(z), h === null)
                      switch (typeof y) {
                        case "undefined":
                        case "function":
                        case "symbol":
                        case "boolean":
                          break t;
                        default:
                          if (isNaN(y) || 1 > y) break t;
                      }
                    else if (y != null)
                      switch (typeof y) {
                        case "function":
                        case "symbol":
                        case "boolean":
                          break;
                        default:
                          if (!(isNaN(y) || 1 > y) && (me(y, d), h === "" + y))
                            break t;
                      }
                    ll(
                      d,
                      h,
                      y,
                      R
                    );
                  }
                  continue;
                case "rowSpan":
                  bf(
                    t,
                    p,
                    "rowspan",
                    y,
                    f,
                    o
                  );
                  continue;
                case "start":
                  bf(
                    t,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                case "xHeight":
                  Ca(
                    t,
                    p,
                    "x-height",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkActuate":
                  Ca(
                    t,
                    p,
                    "xlink:actuate",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkArcrole":
                  Ca(
                    t,
                    p,
                    "xlink:arcrole",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkRole":
                  Ca(
                    t,
                    p,
                    "xlink:role",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkShow":
                  Ca(
                    t,
                    p,
                    "xlink:show",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkTitle":
                  Ca(
                    t,
                    p,
                    "xlink:title",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkType":
                  Ca(
                    t,
                    p,
                    "xlink:type",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlBase":
                  Ca(
                    t,
                    p,
                    "xml:base",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlLang":
                  Ca(
                    t,
                    p,
                    "xml:lang",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlSpace":
                  Ca(
                    t,
                    p,
                    "xml:space",
                    y,
                    f,
                    o
                  );
                  continue;
                case "inert":
                  y !== "" || Ng[p] || (Ng[p] = !0, console.error(
                    "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
                    p
                  )), ph(
                    t,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                default:
                  if (!(2 < p.length) || p[0] !== "o" && p[0] !== "O" || p[1] !== "n" && p[1] !== "N") {
                    h = Tp(p), d = !1, i.context === _o && e !== "svg" && e !== "math" ? f.delete(h.toLowerCase()) : (z = p.toLowerCase(), z = Pn.hasOwnProperty(
                      z
                    ) && Pn[z] || null, z !== null && z !== p && (d = !0, f.delete(z)), f.delete(h));
                    t: if (z = t, R = h, h = y, dn(R))
                      if (z.hasAttribute(R))
                        z = z.getAttribute(
                          R
                        ), me(
                          h,
                          R
                        ), h = z === "" + h ? h : z;
                      else {
                        switch (typeof h) {
                          case "function":
                          case "symbol":
                            break t;
                          case "boolean":
                            if (z = R.toLowerCase().slice(0, 5), z !== "data-" && z !== "aria-")
                              break t;
                        }
                        h = h === void 0 ? void 0 : null;
                      }
                    else h = void 0;
                    d || ll(
                      p,
                      h,
                      y,
                      o
                    );
                  }
              }
          }
      return 0 < f.size && a.suppressHydrationWarning !== !0 && fr(t, f, o), Object.keys(o).length === 0 ? null : o;
    }
    function ov(t, e) {
      switch (t.length) {
        case 0:
          return "";
        case 1:
          return t[0];
        case 2:
          return t[0] + " " + e + " " + t[1];
        default:
          return t.slice(0, -1).join(", ") + ", " + e + " " + t[t.length - 1];
      }
    }
    function Ta(t) {
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
    function fv() {
      if (typeof performance.getEntriesByType == "function") {
        for (var t = 0, e = 0, a = performance.getEntriesByType("resource"), i = 0; i < a.length; i++) {
          var o = a[i], f = o.transferSize, d = o.initiatorType, h = o.duration;
          if (f && h && Ta(d)) {
            for (d = 0, h = o.responseEnd, i += 1; i < a.length; i++) {
              var y = a[i], p = y.startTime;
              if (p > h) break;
              var z = y.transferSize, R = y.initiatorType;
              z && Ta(R) && (y = y.responseEnd, d += z * (y < h ? 1 : (h - p) / (y - p)));
            }
            if (--i, e += 8 * (f + d) / (o.duration / 1e3), t++, 10 < t) break;
          }
        }
        if (0 < t) return e / t / 1e6;
      }
      return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
    }
    function rr(t) {
      return t.nodeType === 9 ? t : t.ownerDocument;
    }
    function sv(t) {
      switch (t) {
        case Kt:
          return vm;
        case Xt:
          return Yg;
        default:
          return _o;
      }
    }
    function yi(t, e) {
      if (t === _o)
        switch (e) {
          case "svg":
            return vm;
          case "math":
            return Yg;
          default:
            return _o;
        }
      return t === vm && e === "foreignObject" ? _o : t;
    }
    function Ef(t, e) {
      return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
    }
    function ky() {
      var t = window.event;
      return t && t.type === "popstate" ? t === h1 ? !1 : (h1 = t, !0) : (h1 = null, !1);
    }
    function Nu() {
      var t = window.event;
      return t && t !== rp ? t.type : null;
    }
    function Tf() {
      var t = window.event;
      return t && t !== rp ? t.timeStamp : -1.1;
    }
    function rv(t) {
      setTimeout(function() {
        throw t;
      });
    }
    function dv(t, e, a) {
      switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && t.focus();
          break;
        case "img":
          a.src ? t.src = a.src : a.srcSet && (t.srcset = a.srcSet);
      }
    }
    function hv() {
    }
    function gh(t, e, a, i) {
      _l(t, e, a, i), t[Oa] = i;
    }
    function Sh(t) {
      Oc(t, "");
    }
    function lS(t, e, a) {
      t.nodeValue = a;
    }
    function mv(t) {
      if (!t.__reactWarnedAboutChildrenConflict) {
        var e = t[Oa] || null;
        if (e !== null) {
          var a = et(t);
          a !== null && (typeof e.children == "string" || typeof e.children == "number" ? (t.__reactWarnedAboutChildrenConflict = !0, ct(a, function() {
            console.error(
              'Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "children" text content using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.'
            );
          })) : e.dangerouslySetInnerHTML != null && (t.__reactWarnedAboutChildrenConflict = !0, ct(a, function() {
            console.error(
              'Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "dangerouslySetInnerHTML" using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.'
            );
          })));
        }
      }
    }
    function ic(t) {
      return t === "head";
    }
    function yv(t, e) {
      t.removeChild(e);
    }
    function pv(t, e) {
      (t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t).removeChild(e);
    }
    function lo(t, e) {
      var a = e, i = 0;
      do {
        var o = a.nextSibling;
        if (t.removeChild(a), o && o.nodeType === 8)
          if (a = o.data, a === sp || a === Bg) {
            if (i === 0) {
              t.removeChild(o), io(e);
              return;
            }
            i--;
          } else if (a === fp || a === us || a === $r || a === pm || a === Kr)
            i++;
          else if (a === nT)
            vi(
              t.ownerDocument.documentElement
            );
          else if (a === iT) {
            a = t.ownerDocument.head, vi(a);
            for (var f = a.firstChild; f; ) {
              var d = f.nextSibling, h = f.nodeName;
              f[xf] || h === "SCRIPT" || h === "STYLE" || h === "LINK" && f.rel.toLowerCase() === "stylesheet" || a.removeChild(f), f = d;
            }
          } else
            a === uT && vi(t.ownerDocument.body);
        a = o;
      } while (a);
      io(e);
    }
    function dr(t, e) {
      var a = t;
      t = 0;
      do {
        var i = a.nextSibling;
        if (a.nodeType === 1 ? e ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (e ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), i && i.nodeType === 8)
          if (a = i.data, a === sp) {
            if (t === 0) break;
            t--;
          } else
            a !== fp && a !== us && a !== $r && a !== pm || t++;
        a = i;
      } while (a);
    }
    function vv(t) {
      dr(t, !0);
    }
    function gv(t) {
      t = t.style, typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function Sv(t) {
      t.nodeValue = "";
    }
    function bv(t) {
      dr(t, !1);
    }
    function Ev(t, e) {
      e = e[cT], e = e != null && e.hasOwnProperty("display") ? e.display : null, t.style.display = e == null || typeof e == "boolean" ? "" : ("" + e).trim();
    }
    function Tv(t, e) {
      t.nodeValue = e;
    }
    function Af(t) {
      var e = t.firstChild;
      for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
        var a = e;
        switch (e = e.nextSibling, a.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            Af(a), M(a);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (a.rel.toLowerCase() === "stylesheet") continue;
        }
        t.removeChild(a);
      }
    }
    function Av(t, e, a, i) {
      for (; t.nodeType === 1; ) {
        var o = a;
        if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
          if (!i && (t.nodeName !== "INPUT" || t.type !== "hidden"))
            break;
        } else if (i) {
          if (!t[xf])
            switch (e) {
              case "meta":
                if (!t.hasAttribute("itemprop")) break;
                return t;
              case "link":
                if (f = t.getAttribute("rel"), f === "stylesheet" && t.hasAttribute("data-precedence"))
                  break;
                if (f !== o.rel || t.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || t.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || t.getAttribute("title") !== (o.title == null ? null : o.title))
                  break;
                return t;
              case "style":
                if (t.hasAttribute("data-precedence")) break;
                return t;
              case "script":
                if (f = t.getAttribute("src"), (f !== (o.src == null ? null : o.src) || t.getAttribute("type") !== (o.type == null ? null : o.type) || t.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && f && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                  break;
                return t;
              default:
                return t;
            }
        } else if (e === "input" && t.type === "hidden") {
          me(o.name, "name");
          var f = o.name == null ? null : "" + o.name;
          if (o.type === "hidden" && t.getAttribute("name") === f)
            return t;
        } else return t;
        if (t = en(t.nextSibling), t === null) break;
      }
      return null;
    }
    function Ov(t, e, a) {
      if (e === "") return null;
      for (; t.nodeType !== 3; )
        if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !a || (t = en(t.nextSibling), t === null)) return null;
      return t;
    }
    function ze(t, e) {
      for (; t.nodeType !== 8; )
        if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = en(t.nextSibling), t === null)) return null;
      return t;
    }
    function hr(t) {
      return t.data === us || t.data === $r;
    }
    function Wy(t) {
      return t.data === pm || t.data === us && t.ownerDocument.readyState !== o2;
    }
    function zv(t, e) {
      var a = t.ownerDocument;
      if (t.data === $r)
        t._reactRetry = e;
      else if (t.data !== us || a.readyState !== o2)
        e();
      else {
        var i = function() {
          e(), a.removeEventListener("DOMContentLoaded", i);
        };
        a.addEventListener("DOMContentLoaded", i), t._reactRetry = i;
      }
    }
    function en(t) {
      for (; t != null; t = t.nextSibling) {
        var e = t.nodeType;
        if (e === 1 || e === 3) break;
        if (e === 8) {
          if (e = t.data, e === fp || e === pm || e === us || e === $r || e === Kr || e === s1 || e === c2)
            break;
          if (e === sp || e === Bg)
            return null;
        }
      }
      return t;
    }
    function _v(t) {
      if (t.nodeType === 1) {
        for (var e = t.nodeName.toLowerCase(), a = {}, i = t.attributes, o = 0; o < i.length; o++) {
          var f = i[o];
          a[mi(f.name)] = f.name.toLowerCase() === "style" ? uc(t) : f.value;
        }
        return { type: e, props: a };
      }
      return t.nodeType === 8 ? t.data === Kr ? { type: "Activity", props: {} } : { type: "Suspense", props: {} } : t.nodeValue;
    }
    function Dv(t, e, a) {
      return a === null || a[aT] !== !0 ? (t.nodeValue === e ? t = null : (e = kn(e), t = kn(t.nodeValue) === e ? null : t.nodeValue), t) : null;
    }
    function Of(t) {
      t = t.nextSibling;
      for (var e = 0; t; ) {
        if (t.nodeType === 8) {
          var a = t.data;
          if (a === sp || a === Bg) {
            if (e === 0)
              return en(t.nextSibling);
            e--;
          } else
            a !== fp && a !== pm && a !== us && a !== $r && a !== Kr || e++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function ao(t) {
      t = t.previousSibling;
      for (var e = 0; t; ) {
        if (t.nodeType === 8) {
          var a = t.data;
          if (a === fp || a === pm || a === us || a === $r || a === Kr) {
            if (e === 0) return t;
            e--;
          } else
            a !== sp && a !== Bg || e++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function Fy(t) {
      io(t);
    }
    function bh(t) {
      io(t);
    }
    function Iy(t) {
      io(t);
    }
    function pi(t, e, a, i, o) {
      switch (o && ys(t, i.ancestorInfo), e = rr(a), t) {
        case "html":
          if (t = e.documentElement, !t)
            throw Error(
              "React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return t;
        case "head":
          if (t = e.head, !t)
            throw Error(
              "React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return t;
        case "body":
          if (t = e.body, !t)
            throw Error(
              "React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return t;
        default:
          throw Error(
            "resolveSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
    }
    function Bu(t, e, a, i) {
      if (!a[Si] && et(a)) {
        var o = a.tagName.toLowerCase();
        console.error(
          "You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.",
          o,
          o,
          o
        );
      }
      switch (t) {
        case "html":
        case "head":
        case "body":
          break;
        default:
          console.error(
            "acquireSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
      for (o = a.attributes; o.length; )
        a.removeAttributeNode(o[0]);
      ke(a, t, e), a[We] = i, a[Oa] = e;
    }
    function vi(t) {
      for (var e = t.attributes; e.length; )
        t.removeAttributeNode(e[0]);
      M(t);
    }
    function Eh(t) {
      return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
    }
    function Py(t, e, a) {
      var i = gm;
      if (i && typeof e == "string" && e) {
        var o = Re(e);
        o = 'link[rel="' + t + '"][href="' + o + '"]', typeof a == "string" && (o += '[crossorigin="' + a + '"]'), m2.has(o) || (m2.add(o), t = { rel: t, crossOrigin: a, href: e }, i.querySelector(o) === null && (e = i.createElement("link"), ke(e, "link", t), ht(e), i.head.appendChild(e)));
      }
    }
    function t0(t, e, a, i) {
      var o = (o = ln.current) ? Eh(o) : null;
      if (!o)
        throw Error(
          '"resourceRoot" was expected to exist. This is a bug in React.'
        );
      switch (t) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof a.precedence == "string" && typeof a.href == "string" ? (a = no(a.href), e = _t(o).hoistableStyles, i = e.get(a), i || (i = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, e.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
            t = no(a.href);
            var f = _t(o).hoistableStyles, d = f.get(t);
            if (!d && (o = o.ownerDocument || o, d = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: { loading: Wr, preload: null }
            }, f.set(t, d), (f = o.querySelector(
              yr(t)
            )) && !f._p && (d.instance = f, d.state.loading = dp | ku), !Wu.has(t))) {
              var h = {
                rel: "preload",
                as: "style",
                href: a.href,
                crossOrigin: a.crossOrigin,
                integrity: a.integrity,
                media: a.media,
                hrefLang: a.hrefLang,
                referrerPolicy: a.referrerPolicy
              };
              Wu.set(t, h), f || Rv(
                o,
                t,
                h,
                d.state
              );
            }
            if (e && i === null)
              throw a = `

  - ` + mr(e) + `
  + ` + mr(a), Error(
                "Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
              );
            return d;
          }
          if (e && i !== null)
            throw a = `

  - ` + mr(e) + `
  + ` + mr(a), Error(
              "Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
            );
          return null;
        case "script":
          return e = a.async, a = a.src, typeof a == "string" && e && typeof e != "function" && typeof e != "symbol" ? (a = uo(a), e = _t(o).hoistableScripts, i = e.get(a), i || (i = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, e.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        default:
          throw Error(
            'getResource encountered a type it did not expect: "' + t + '". this is a bug in React.'
          );
      }
    }
    function mr(t) {
      var e = 0, a = "<link";
      return typeof t.rel == "string" ? (e++, a += ' rel="' + t.rel + '"') : an.call(t, "rel") && (e++, a += ' rel="' + (t.rel === null ? "null" : "invalid type " + typeof t.rel) + '"'), typeof t.href == "string" ? (e++, a += ' href="' + t.href + '"') : an.call(t, "href") && (e++, a += ' href="' + (t.href === null ? "null" : "invalid type " + typeof t.href) + '"'), typeof t.precedence == "string" ? (e++, a += ' precedence="' + t.precedence + '"') : an.call(t, "precedence") && (e++, a += " precedence={" + (t.precedence === null ? "null" : "invalid type " + typeof t.precedence) + "}"), Object.getOwnPropertyNames(t).length > e && (a += " ..."), a + " />";
    }
    function no(t) {
      return 'href="' + Re(t) + '"';
    }
    function yr(t) {
      return 'link[rel="stylesheet"][' + t + "]";
    }
    function Th(t) {
      return kt({}, t, {
        "data-precedence": t.precedence,
        precedence: null
      });
    }
    function Rv(t, e, a, i) {
      t.querySelector(
        'link[rel="preload"][as="style"][' + e + "]"
      ) ? i.loading = dp : (e = t.createElement("link"), i.preload = e, e.addEventListener("load", function() {
        return i.loading |= dp;
      }), e.addEventListener("error", function() {
        return i.loading |= d2;
      }), ke(e, "link", a), ht(e), t.head.appendChild(e));
    }
    function uo(t) {
      return '[src="' + Re(t) + '"]';
    }
    function pr(t) {
      return "script[async]" + t;
    }
    function Ah(t, e, a) {
      if (e.count++, e.instance === null)
        switch (e.type) {
          case "style":
            var i = t.querySelector(
              'style[data-href~="' + Re(a.href) + '"]'
            );
            if (i)
              return e.instance = i, ht(i), i;
            var o = kt({}, a, {
              "data-href": a.href,
              "data-precedence": a.precedence,
              href: null,
              precedence: null
            });
            return i = (t.ownerDocument || t).createElement("style"), ht(i), ke(i, "style", o), zf(i, a.precedence, t), e.instance = i;
          case "stylesheet":
            o = no(a.href);
            var f = t.querySelector(
              yr(o)
            );
            if (f)
              return e.state.loading |= ku, e.instance = f, ht(f), f;
            i = Th(a), (o = Wu.get(o)) && e0(i, o), f = (t.ownerDocument || t).createElement("link"), ht(f);
            var d = f;
            return d._p = new Promise(function(h, y) {
              d.onload = h, d.onerror = y;
            }), ke(f, "link", i), e.state.loading |= ku, zf(f, a.precedence, t), e.instance = f;
          case "script":
            return f = uo(a.src), (o = t.querySelector(
              pr(f)
            )) ? (e.instance = o, ht(o), o) : (i = a, (o = Wu.get(f)) && (i = kt({}, a), l0(i, o)), t = t.ownerDocument || t, o = t.createElement("script"), ht(o), ke(o, "link", i), t.head.appendChild(o), e.instance = o);
          case "void":
            return null;
          default:
            throw Error(
              'acquireResource encountered a resource type it did not expect: "' + e.type + '". this is a bug in React.'
            );
        }
      else
        e.type === "stylesheet" && (e.state.loading & ku) === Wr && (i = e.instance, e.state.loading |= ku, zf(i, a.precedence, t));
      return e.instance;
    }
    function zf(t, e, a) {
      for (var i = a.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ), o = i.length ? i[i.length - 1] : null, f = o, d = 0; d < i.length; d++) {
        var h = i[d];
        if (h.dataset.precedence === e) f = h;
        else if (f !== o) break;
      }
      f ? f.parentNode.insertBefore(t, f.nextSibling) : (e = a.nodeType === 9 ? a.head : a, e.insertBefore(t, e.firstChild));
    }
    function e0(t, e) {
      t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
    }
    function l0(t, e) {
      t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
    }
    function _f(t, e, a) {
      if (jg === null) {
        var i = /* @__PURE__ */ new Map(), o = jg = /* @__PURE__ */ new Map();
        o.set(a, i);
      } else
        o = jg, i = o.get(a), i || (i = /* @__PURE__ */ new Map(), o.set(a, i));
      if (i.has(t)) return i;
      for (i.set(t, null), a = a.getElementsByTagName(t), o = 0; o < a.length; o++) {
        var f = a[o];
        if (!(f[xf] || f[We] || t === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== Kt) {
          var d = f.getAttribute(e) || "";
          d = t + d;
          var h = i.get(d);
          h ? h.push(f) : i.set(d, [f]);
        }
      }
      return i;
    }
    function Mv(t, e, a) {
      t = t.ownerDocument || t, t.head.insertBefore(
        a,
        e === "title" ? t.querySelector("head > title") : null
      );
    }
    function Cv(t, e, a) {
      var i = !a.ancestorInfo.containerTagInScope;
      if (a.context === vm || e.itemProp != null)
        return !i || e.itemProp == null || t !== "meta" && t !== "title" && t !== "style" && t !== "link" && t !== "script" || console.error(
          "Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",
          t,
          t
        ), !1;
      switch (t) {
        case "meta":
        case "title":
          return !0;
        case "style":
          if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "") {
            i && console.error(
              'Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`.'
            );
            break;
          }
          return !0;
        case "link":
          if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError) {
            if (e.rel === "stylesheet" && typeof e.precedence == "string") {
              t = e.href;
              var o = e.onError, f = e.disabled;
              a = [], e.onLoad && a.push("`onLoad`"), o && a.push("`onError`"), f != null && a.push("`disabled`"), o = ov(a, "and"), o += a.length === 1 ? " prop" : " props", f = a.length === 1 ? "an " + o : "the " + o, a.length && console.error(
                'React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',
                t,
                f,
                o
              );
            }
            i && (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" ? console.error(
              "Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"
            ) : (e.onError || e.onLoad) && console.error(
              "Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ));
            break;
          }
          return e.rel === "stylesheet" ? (t = e.precedence, e = e.disabled, typeof t != "string" && i && console.error(
            'Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'
          ), typeof t == "string" && e == null) : !0;
        case "script":
          if (t = e.async && typeof e.async != "function" && typeof e.async != "symbol", !t || e.onLoad || e.onError || !e.src || typeof e.src != "string") {
            i && (t ? e.onLoad || e.onError ? console.error(
              "Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              "Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              'Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.'
            ));
            break;
          }
          return !0;
        case "noscript":
        case "template":
          i && console.error(
            "Cannot render <%s> outside the main document. Try moving it into the root <head> tag.",
            t
          );
      }
      return !1;
    }
    function ae(t) {
      return !(t.type === "stylesheet" && (t.state.loading & h2) === Wr);
    }
    function a0(t, e, a, i) {
      if (a.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (a.state.loading & ku) === Wr) {
        if (a.instance === null) {
          var o = no(i.href), f = e.querySelector(
            yr(o)
          );
          if (f) {
            e = f._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = Df.bind(t), e.then(t, t)), a.state.loading |= ku, a.instance = f, ht(f);
            return;
          }
          f = e.ownerDocument || e, i = Th(i), (o = Wu.get(o)) && e0(i, o), f = f.createElement("link"), ht(f);
          var d = f;
          d._p = new Promise(function(h, y) {
            d.onload = h, d.onerror = y;
          }), ke(f, "link", i), a.instance = f;
        }
        t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(a, e), (e = a.state.preload) && (a.state.loading & h2) === Wr && (t.count++, a = Df.bind(t), e.addEventListener("load", a), e.addEventListener("error", a));
      }
    }
    function Oh(t, e) {
      return t.stylesheets && t.count === 0 && vr(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(a) {
        var i = setTimeout(function() {
          if (t.stylesheets && vr(t, t.stylesheets), t.unsuspend) {
            var f = t.unsuspend;
            t.unsuspend = null, f();
          }
        }, sT + e);
        0 < t.imgBytes && y1 === 0 && (y1 = 125 * fv() * dT);
        var o = setTimeout(
          function() {
            if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && vr(t, t.stylesheets), t.unsuspend)) {
              var f = t.unsuspend;
              t.unsuspend = null, f();
            }
          },
          (t.imgBytes > y1 ? 50 : rT) + e
        );
        return t.unsuspend = a, function() {
          t.unsuspend = null, clearTimeout(i), clearTimeout(o);
        };
      } : null;
    }
    function Df() {
      if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
        if (this.stylesheets)
          vr(this, this.stylesheets);
        else if (this.unsuspend) {
          var t = this.unsuspend;
          this.unsuspend = null, t();
        }
      }
    }
    function vr(t, e) {
      t.stylesheets = null, t.unsuspend !== null && (t.count++, qg = /* @__PURE__ */ new Map(), e.forEach(n0, t), qg = null, Df.call(t));
    }
    function n0(t, e) {
      if (!(e.state.loading & ku)) {
        var a = qg.get(t);
        if (a) var i = a.get(p1);
        else {
          a = /* @__PURE__ */ new Map(), qg.set(t, a);
          for (var o = t.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ), f = 0; f < o.length; f++) {
            var d = o[f];
            (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (a.set(d.dataset.precedence, d), i = d);
          }
          i && a.set(p1, i);
        }
        o = e.instance, d = o.getAttribute("data-precedence"), f = a.get(d) || i, f === i && a.set(p1, o), a.set(d, o), this.count++, i = Df.bind(this), o.addEventListener("load", i), o.addEventListener("error", i), f ? f.parentNode.insertBefore(o, f.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(o, t.firstChild)), e.state.loading |= ku;
      }
    }
    function gr(t, e, a, i, o, f, d, h, y) {
      for (this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = kr, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Co(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Co(0), this.hiddenUpdates = Co(null), this.identifierPrefix = i, this.onUncaughtError = o, this.onCaughtError = f, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = y, this.incompleteTransitions = /* @__PURE__ */ new Map(), this.passiveEffectDuration = this.effectDuration = -0, this.memoizedUpdaters = /* @__PURE__ */ new Set(), t = this.pendingUpdatersLaneMap = [], e = 0; 31 > e; e++) t.push(/* @__PURE__ */ new Set());
      this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
    }
    function Sr(t, e, a, i, o, f, d, h, y, p, z, R) {
      return t = new gr(
        t,
        e,
        a,
        d,
        y,
        p,
        z,
        R,
        h
      ), e = jE, f === !0 && (e |= Ba | bi), e |= Wt, f = U(3, null, null, e), t.current = f, f.stateNode = t, e = Ad(), Bc(e), t.pooledCache = e, Bc(e), f.memoizedState = {
        element: i,
        isDehydrated: a,
        cache: e
      }, ne(f), t;
    }
    function Uv(t) {
      return t ? (t = Vf, t) : Vf;
    }
    function zh(t, e, a, i, o, f) {
      if (Dl && typeof Dl.onScheduleFiberRoot == "function")
        try {
          Dl.onScheduleFiberRoot(so, i, a);
        } catch (d) {
          ju || (ju = !0, console.error(
            "React instrumentation encountered an error: %o",
            d
          ));
        }
      o = Uv(o), i.context === null ? i.context = o : i.pendingContext = o, Yu && Na !== null && !g2 && (g2 = !0, console.error(
        `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
        st(Na) || "Unknown"
      )), i = Ol(e), i.payload = { element: a }, f = f === void 0 ? null : f, f !== null && (typeof f != "function" && console.error(
        "Expected the last optional `callback` argument to be a function. Instead received: %s.",
        f
      ), i.callback = f), a = vu(t, i, e), a !== null && (mu(e, "root.render()", null), Ut(a, t, e), bn(a, t, e));
    }
    function Hv(t, e) {
      if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
        var a = t.retryLane;
        t.retryLane = a !== 0 && a < e ? a : e;
      }
    }
    function u0(t, e) {
      Hv(t, e), (t = t.alternate) && Hv(t, e);
    }
    function i0(t) {
      if (t.tag === 13 || t.tag === 31) {
        var e = ea(t, 67108864);
        e !== null && Ut(e, t, 67108864), u0(t, 67108864);
      }
    }
    function c0(t) {
      if (t.tag === 13 || t.tag === 31) {
        var e = aa(t);
        e = rn(e);
        var a = ea(t, e);
        a !== null && Ut(a, t, e), u0(t, e);
      }
    }
    function Ue() {
      return Na;
    }
    function o0(t, e, a, i) {
      var o = G.T;
      G.T = null;
      var f = be.p;
      try {
        be.p = Rl, f0(t, e, a, i);
      } finally {
        be.p = f, G.T = o;
      }
    }
    function $l(t, e, a, i) {
      var o = G.T;
      G.T = null;
      var f = be.p;
      try {
        be.p = Wl, f0(t, e, a, i);
      } finally {
        be.p = f, G.T = o;
      }
    }
    function f0(t, e, a, i) {
      if (Gg) {
        var o = _h(i);
        if (o === null)
          Kn(
            t,
            e,
            i,
            wg,
            a
          ), Rh(t, i);
        else if (Nv(
          o,
          t,
          e,
          a,
          i
        ))
          i.stopPropagation();
        else if (Rh(t, i), e & 4 && -1 < mT.indexOf(t)) {
          for (; o !== null; ) {
            var f = et(o);
            if (f !== null)
              switch (f.tag) {
                case 3:
                  if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                    var d = iu(f.pendingLanes);
                    if (d !== 0) {
                      var h = f;
                      for (h.pendingLanes |= 2, h.entangledLanes |= 2; d; ) {
                        var y = 1 << 31 - kl(d);
                        h.entanglements[1] |= y, d &= ~y;
                      }
                      Ma(f), (de & (Il | au)) === oa && (Tg = Gl() + Jb, Cu(0));
                    }
                  }
                  break;
                case 31:
                case 13:
                  h = ea(f, 2), h !== null && Ut(h, f, 2), tn(), u0(f, 2);
              }
            if (f = _h(i), f === null && Kn(
              t,
              e,
              i,
              wg,
              a
            ), f === o) break;
            o = f;
          }
          o !== null && i.stopPropagation();
        } else
          Kn(
            t,
            e,
            i,
            null,
            a
          );
      }
    }
    function _h(t) {
      return t = Un(t), s0(t);
    }
    function s0(t) {
      if (wg = null, t = I(t), t !== null) {
        var e = le(t);
        if (e === null) t = null;
        else {
          var a = e.tag;
          if (a === 13) {
            if (t = Tl(e), t !== null) return t;
            t = null;
          } else if (a === 31) {
            if (t = Be(e), t !== null) return t;
            t = null;
          } else if (a === 3) {
            if (e.stateNode.current.memoizedState.isDehydrated)
              return e.tag === 3 ? e.stateNode.containerInfo : null;
            t = null;
          } else e !== t && (t = null);
        }
      }
      return wg = t, null;
    }
    function Dh(t) {
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
          return Rl;
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
          return Wl;
        case "message":
          switch (zr()) {
            case b0:
              return Rl;
            case qh:
              return Wl;
            case fo:
            case Gv:
              return ua;
            case xh:
              return rc;
            default:
              return ua;
          }
        default:
          return ua;
      }
    }
    function Rh(t, e) {
      switch (t) {
        case "focusin":
        case "focusout":
          is = null;
          break;
        case "dragenter":
        case "dragleave":
          cs = null;
          break;
        case "mouseover":
        case "mouseout":
          os = null;
          break;
        case "pointerover":
        case "pointerout":
          mp.delete(e.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          yp.delete(e.pointerId);
      }
    }
    function cc(t, e, a, i, o, f) {
      return t === null || t.nativeEvent !== f ? (t = {
        blockedOn: e,
        domEventName: a,
        eventSystemFlags: i,
        nativeEvent: f,
        targetContainers: [o]
      }, e !== null && (e = et(e), e !== null && i0(e)), t) : (t.eventSystemFlags |= i, e = t.targetContainers, o !== null && e.indexOf(o) === -1 && e.push(o), t);
    }
    function Nv(t, e, a, i, o) {
      switch (e) {
        case "focusin":
          return is = cc(
            is,
            t,
            e,
            a,
            i,
            o
          ), !0;
        case "dragenter":
          return cs = cc(
            cs,
            t,
            e,
            a,
            i,
            o
          ), !0;
        case "mouseover":
          return os = cc(
            os,
            t,
            e,
            a,
            i,
            o
          ), !0;
        case "pointerover":
          var f = o.pointerId;
          return mp.set(
            f,
            cc(
              mp.get(f) || null,
              t,
              e,
              a,
              i,
              o
            )
          ), !0;
        case "gotpointercapture":
          return f = o.pointerId, yp.set(
            f,
            cc(
              yp.get(f) || null,
              t,
              e,
              a,
              i,
              o
            )
          ), !0;
      }
      return !1;
    }
    function r0(t) {
      var e = I(t.target);
      if (e !== null) {
        var a = le(e);
        if (a !== null) {
          if (e = a.tag, e === 13) {
            if (e = Tl(a), e !== null) {
              t.blockedOn = e, v(t.priority, function() {
                c0(a);
              });
              return;
            }
          } else if (e === 31) {
            if (e = Be(a), e !== null) {
              t.blockedOn = e, v(t.priority, function() {
                c0(a);
              });
              return;
            }
          } else if (e === 3 && a.stateNode.current.memoizedState.isDehydrated) {
            t.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
            return;
          }
        }
      }
      t.blockedOn = null;
    }
    function Rf(t) {
      if (t.blockedOn !== null) return !1;
      for (var e = t.targetContainers; 0 < e.length; ) {
        var a = _h(t.nativeEvent);
        if (a === null) {
          a = t.nativeEvent;
          var i = new a.constructor(
            a.type,
            a
          ), o = i;
          z0 !== null && console.error(
            "Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."
          ), z0 = o, a.target.dispatchEvent(i), z0 === null && console.error(
            "Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."
          ), z0 = null;
        } else
          return e = et(a), e !== null && i0(e), t.blockedOn = a, !1;
        e.shift();
      }
      return !0;
    }
    function Mh(t, e, a) {
      Rf(t) && a.delete(e);
    }
    function aS() {
      v1 = !1, is !== null && Rf(is) && (is = null), cs !== null && Rf(cs) && (cs = null), os !== null && Rf(os) && (os = null), mp.forEach(Mh), yp.forEach(Mh);
    }
    function br(t, e) {
      t.blockedOn === e && (t.blockedOn = null, v1 || (v1 = !0, yl.unstable_scheduleCallback(
        yl.unstable_NormalPriority,
        aS
      )));
    }
    function Bv(t) {
      Xg !== t && (Xg = t, yl.unstable_scheduleCallback(
        yl.unstable_NormalPriority,
        function() {
          Xg === t && (Xg = null);
          for (var e = 0; e < t.length; e += 3) {
            var a = t[e], i = t[e + 1], o = t[e + 2];
            if (typeof i != "function") {
              if (s0(i || a) === null)
                continue;
              break;
            }
            var f = et(a);
            f !== null && (t.splice(e, 3), e -= 3, a = {
              pending: !0,
              data: o,
              method: a.method,
              action: i
            }, Object.freeze(a), fi(
              f,
              a,
              i,
              o
            ));
          }
        }
      ));
    }
    function io(t) {
      function e(y) {
        return br(y, t);
      }
      is !== null && br(is, t), cs !== null && br(cs, t), os !== null && br(os, t), mp.forEach(e), yp.forEach(e);
      for (var a = 0; a < fs.length; a++) {
        var i = fs[a];
        i.blockedOn === t && (i.blockedOn = null);
      }
      for (; 0 < fs.length && (a = fs[0], a.blockedOn === null); )
        r0(a), a.blockedOn === null && fs.shift();
      if (a = (t.ownerDocument || t).$$reactFormReplay, a != null)
        for (i = 0; i < a.length; i += 3) {
          var o = a[i], f = a[i + 1], d = o[Oa] || null;
          if (typeof f == "function")
            d || Bv(a);
          else if (d) {
            var h = null;
            if (f && f.hasAttribute("formAction")) {
              if (o = f, d = f[Oa] || null)
                h = d.formAction;
              else if (s0(o) !== null) continue;
            } else h = d.action;
            typeof h == "function" ? a[i + 1] = h : (a.splice(i, 3), i -= 3), Bv(a);
          }
        }
    }
    function Yv() {
      function t(f) {
        f.canIntercept && f.info === "react-transition" && f.intercept({
          handler: function() {
            return new Promise(function(d) {
              return o = d;
            });
          },
          focusReset: "manual",
          scroll: "manual"
        });
      }
      function e() {
        o !== null && (o(), o = null), i || setTimeout(a, 20);
      }
      function a() {
        if (!i && !navigation.transition) {
          var f = navigation.currentEntry;
          f && f.url != null && navigation.navigate(f.url, {
            state: f.getState(),
            info: "react-transition",
            history: "replace"
          });
        }
      }
      if (typeof navigation == "object") {
        var i = !1, o = null;
        return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(a, 100), function() {
          i = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener(
            "navigatesuccess",
            e
          ), navigation.removeEventListener(
            "navigateerror",
            e
          ), o !== null && (o(), o = null);
        };
      }
    }
    function d0(t) {
      this._internalRoot = t;
    }
    function Wn(t) {
      this._internalRoot = t;
    }
    function h0(t) {
      t[Si] && (t._reactRootContainer ? console.error(
        "You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."
      ) : console.error(
        "You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."
      ));
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var yl = J2(), Er = bm(), nS = K2(), kt = Object.assign, jv = /* @__PURE__ */ Symbol.for("react.element"), On = /* @__PURE__ */ Symbol.for("react.transitional.element"), oc = /* @__PURE__ */ Symbol.for("react.portal"), Mf = /* @__PURE__ */ Symbol.for("react.fragment"), Aa = /* @__PURE__ */ Symbol.for("react.strict_mode"), Tr = /* @__PURE__ */ Symbol.for("react.profiler"), Ch = /* @__PURE__ */ Symbol.for("react.consumer"), Fn = /* @__PURE__ */ Symbol.for("react.context"), Cf = /* @__PURE__ */ Symbol.for("react.forward_ref"), co = /* @__PURE__ */ Symbol.for("react.suspense"), Ha = /* @__PURE__ */ Symbol.for("react.suspense_list"), Ar = /* @__PURE__ */ Symbol.for("react.memo"), na = /* @__PURE__ */ Symbol.for("react.lazy"), In = /* @__PURE__ */ Symbol.for("react.activity"), uS = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), qv = Symbol.iterator, Uf = /* @__PURE__ */ Symbol.for("react.client.reference"), bl = Array.isArray, G = Er.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, be = nS.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, iS = Object.freeze({
      pending: !1,
      data: null,
      method: null,
      action: null
    }), m0 = [], y0 = [], gi = -1, fc = Ye(null), Hf = Ye(null), ln = Ye(null), sc = Ye(null), Nf = 0, xv, oo, Bf, p0, Or, Uh, Hh;
    At.__reactDisabledLog = !0;
    var Yf, v0, Nh = !1, g0 = new (typeof WeakMap == "function" ? WeakMap : Map)(), Na = null, Yu = !1, an = Object.prototype.hasOwnProperty, S0 = yl.unstable_scheduleCallback, Bh = yl.unstable_cancelCallback, Yh = yl.unstable_shouldYield, jh = yl.unstable_requestPaint, Gl = yl.unstable_now, zr = yl.unstable_getCurrentPriorityLevel, b0 = yl.unstable_ImmediatePriority, qh = yl.unstable_UserBlockingPriority, fo = yl.unstable_NormalPriority, Gv = yl.unstable_LowPriority, xh = yl.unstable_IdlePriority, E0 = yl.log, wv = yl.unstable_setDisableYieldValue, so = null, Dl = null, ju = !1, qu = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u", kl = Math.clz32 ? Math.clz32 : Ri, T0 = Math.log, Gh = Math.LN2, jf = 256, _r = 262144, qf = 4194304, Rl = 2, Wl = 8, ua = 32, rc = 268435456, zn = Math.random().toString(36).slice(2), We = "__reactFiber$" + zn, Oa = "__reactProps$" + zn, Si = "__reactContainer$" + zn, ro = "__reactEvents$" + zn, cS = "__reactListeners$" + zn, Xv = "__reactHandles$" + zn, Dr = "__reactResources$" + zn, xf = "__reactMarker$" + zn, Qv = /* @__PURE__ */ new Set(), xu = {}, Gf = {}, Lv = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    }, wf = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), A0 = {}, wh = {}, Xh = /[\n"\\]/g, O0 = !1, Vv = !1, Rr = !1, l = !1, n = !1, u = !1, c = ["value", "defaultValue"], s = !1, r = /["'&<>\n\t]|^\s|\s$/, m = "address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(
      " "
    ), g = "applet caption html table td th marquee object template foreignObject desc title".split(
      " "
    ), A = g.concat(["button"]), Y = "dd dt li option optgroup p rp rt".split(" "), Q = {
      current: null,
      formTag: null,
      aTagInScope: null,
      buttonTagInScope: null,
      nobrTagInScope: null,
      pTagInButtonScope: null,
      listItemTagAutoclosing: null,
      dlItemTagAutoclosing: null,
      containerTagInScope: null,
      implicitRootScope: !1
    }, J = {}, j = {
      animation: "animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(
        " "
      ),
      background: "backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(
        " "
      ),
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: "borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(
        " "
      ),
      borderBlockEnd: [
        "borderBlockEndColor",
        "borderBlockEndStyle",
        "borderBlockEndWidth"
      ],
      borderBlockStart: [
        "borderBlockStartColor",
        "borderBlockStartStyle",
        "borderBlockStartWidth"
      ],
      borderBottom: [
        "borderBottomColor",
        "borderBottomStyle",
        "borderBottomWidth"
      ],
      borderColor: [
        "borderBottomColor",
        "borderLeftColor",
        "borderRightColor",
        "borderTopColor"
      ],
      borderImage: [
        "borderImageOutset",
        "borderImageRepeat",
        "borderImageSlice",
        "borderImageSource",
        "borderImageWidth"
      ],
      borderInlineEnd: [
        "borderInlineEndColor",
        "borderInlineEndStyle",
        "borderInlineEndWidth"
      ],
      borderInlineStart: [
        "borderInlineStartColor",
        "borderInlineStartStyle",
        "borderInlineStartWidth"
      ],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: [
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
        "borderTopLeftRadius",
        "borderTopRightRadius"
      ],
      borderRight: [
        "borderRightColor",
        "borderRightStyle",
        "borderRightWidth"
      ],
      borderStyle: [
        "borderBottomStyle",
        "borderLeftStyle",
        "borderRightStyle",
        "borderTopStyle"
      ],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: [
        "borderBottomWidth",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth"
      ],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: "fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(
        " "
      ),
      fontVariant: "fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(
        " "
      ),
      gap: ["columnGap", "rowGap"],
      grid: "gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(
        " "
      ),
      gridArea: [
        "gridColumnEnd",
        "gridColumnStart",
        "gridRowEnd",
        "gridRowStart"
      ],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: [
        "gridTemplateAreas",
        "gridTemplateColumns",
        "gridTemplateRows"
      ],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: "maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(
        " "
      ),
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: [
        "textDecorationColor",
        "textDecorationLine",
        "textDecorationStyle"
      ],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: [
        "transitionDelay",
        "transitionDuration",
        "transitionProperty",
        "transitionTimingFunction"
      ],
      wordWrap: ["overflowWrap"]
    }, w = /([A-Z])/g, ft = /^ms-/, Ot = /^(?:webkit|moz|o)[A-Z]/, He = /^-ms-/, C = /-(.)/g, _ = /;\s*$/, N = {}, Z = {}, St = !1, re = !1, mt = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    ), Xt = "http://www.w3.org/1998/Math/MathML", Kt = "http://www.w3.org/2000/svg", pe = /* @__PURE__ */ new Map([
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
    ]), Pn = {
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      fetchpriority: "fetchPriority",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      inert: "inert",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      popover: "popover",
      popovertarget: "popoverTarget",
      popovertargetaction: "popoverTargetAction",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      transformorigin: "transformOrigin",
      "transform-origin": "transformOrigin",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Zv = {
      "aria-current": 0,
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      "aria-hidden": 0,
      "aria-invalid": 0,
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0,
      "aria-braillelabel": 0,
      "aria-brailleroledescription": 0,
      "aria-colindextext": 0,
      "aria-rowindextext": 0
    }, Qh = {}, $2 = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), k2 = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), b1 = !1, nn = {}, E1 = /^on./, W2 = /^on[^A-Z]/, F2 = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), I2 = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), P2 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, z0 = null, Lh = null, Vh = null, oS = !1, dc = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), fS = !1;
    if (dc)
      try {
        var _0 = {};
        Object.defineProperty(_0, "passive", {
          get: function() {
            fS = !0;
          }
        }), window.addEventListener("test", _0, _0), window.removeEventListener("test", _0, _0);
      } catch {
        fS = !1;
      }
    var Xf = null, sS = null, Jv = null, Mr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Kv = Hl(Mr), D0 = kt({}, Mr, { view: 0, detail: 0 }), tE = Hl(D0), rS, dS, R0, $v = kt({}, D0, {
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
      getModifierState: Ss,
      button: 0,
      buttons: 0,
      relatedTarget: function(t) {
        return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
      },
      movementX: function(t) {
        return "movementX" in t ? t.movementX : (t !== R0 && (R0 && t.type === "mousemove" ? (rS = t.screenX - R0.screenX, dS = t.screenY - R0.screenY) : dS = rS = 0, R0 = t), rS);
      },
      movementY: function(t) {
        return "movementY" in t ? t.movementY : dS;
      }
    }), T1 = Hl($v), eE = kt({}, $v, { dataTransfer: 0 }), lE = Hl(eE), aE = kt({}, D0, { relatedTarget: 0 }), hS = Hl(aE), nE = kt({}, Mr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), uE = Hl(nE), iE = kt({}, Mr, {
      clipboardData: function(t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      }
    }), cE = Hl(iE), oE = kt({}, Mr, { data: 0 }), A1 = Hl(
      oE
    ), fE = A1, sE = {
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
    }, rE = {
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
    }, dE = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    }, hE = kt({}, D0, {
      key: function(t) {
        if (t.key) {
          var e = sE[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress" ? (t = gs(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? rE[t.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ss,
      charCode: function(t) {
        return t.type === "keypress" ? gs(t) : 0;
      },
      keyCode: function(t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function(t) {
        return t.type === "keypress" ? gs(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      }
    }), mE = Hl(hE), yE = kt({}, $v, {
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
    }), O1 = Hl(yE), pE = kt({}, D0, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ss
    }), vE = Hl(pE), gE = kt({}, Mr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), SE = Hl(gE), bE = kt({}, $v, {
      deltaX: function(t) {
        return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
      },
      deltaY: function(t) {
        return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), EE = Hl(bE), TE = kt({}, Mr, {
      newState: 0,
      oldState: 0
    }), AE = Hl(TE), OE = [9, 13, 27, 32], z1 = 229, mS = dc && "CompositionEvent" in window, M0 = null;
    dc && "documentMode" in document && (M0 = document.documentMode);
    var zE = dc && "TextEvent" in window && !M0, _1 = dc && (!mS || M0 && 8 < M0 && 11 >= M0), D1 = 32, R1 = String.fromCharCode(D1), M1 = !1, Zh = !1, _E = {
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
    }, C0 = null, U0 = null, C1 = !1;
    dc && (C1 = dd("input") && (!document.documentMode || 9 < document.documentMode));
    var un = typeof Object.is == "function" ? Object.is : hd, DE = dc && "documentMode" in document && 11 >= document.documentMode, Jh = null, yS = null, H0 = null, pS = !1, Kh = {
      animationend: _c("Animation", "AnimationEnd"),
      animationiteration: _c("Animation", "AnimationIteration"),
      animationstart: _c("Animation", "AnimationStart"),
      transitionrun: _c("Transition", "TransitionRun"),
      transitionstart: _c("Transition", "TransitionStart"),
      transitioncancel: _c("Transition", "TransitionCancel"),
      transitionend: _c("Transition", "TransitionEnd")
    }, vS = {}, U1 = {};
    dc && (U1 = document.createElement("div").style, "AnimationEvent" in window || (delete Kh.animationend.animation, delete Kh.animationiteration.animation, delete Kh.animationstart.animation), "TransitionEvent" in window || delete Kh.transitionend.transition);
    var H1 = Dc("animationend"), N1 = Dc("animationiteration"), B1 = Dc("animationstart"), RE = Dc("transitionrun"), ME = Dc("transitionstart"), CE = Dc("transitioncancel"), Y1 = Dc("transitionend"), j1 = /* @__PURE__ */ new Map(), gS = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
    gS.push("scrollEnd");
    var q1 = 0;
    if (typeof performance == "object" && typeof performance.now == "function")
      var UE = performance, x1 = function() {
        return UE.now();
      };
    else {
      var HE = Date;
      x1 = function() {
        return HE.now();
      };
    }
    var SS = typeof reportError == "function" ? reportError : function(t) {
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
    }, NE = "This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.", kv = 0, bS = 1, ES = 2, TS = 3, Wv = "– ", Fv = "+ ", G1 = "  ", Fe = typeof console < "u" && typeof console.timeStamp == "function" && typeof performance < "u" && typeof performance.measure == "function", Gu = "Components ⚛", ce = "Scheduler ⚛", se = "Blocking", Qf = !1, ho = {
      color: "primary",
      properties: null,
      tooltipText: "",
      track: Gu
    }, Lf = {
      start: -0,
      end: -0,
      detail: { devtools: ho }
    }, BE = ["Changed Props", ""], w1 = "This component received deeply equal props. It might benefit from useMemo or the React Compiler in its owner.", YE = ["Changed Props", w1], N0 = 1, mo = 2, wu = [], $h = 0, AS = 0, Vf = {};
    Object.freeze(Vf);
    var Xu = null, kh = null, Ct = 0, jE = 1, Wt = 2, Ba = 8, bi = 16, qE = 32, X1 = !1;
    try {
      var Q1 = Object.preventExtensions({});
    } catch {
      X1 = !0;
    }
    var OS = /* @__PURE__ */ new WeakMap(), Wh = [], Fh = 0, Iv = null, B0 = 0, Qu = [], Lu = 0, Cr = null, yo = 1, po = "", za = null, Ie = null, ie = !1, hc = !1, tu = null, Zf = null, Vu = !1, zS = Error(
      "Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), _S = Ye(null), DS = Ye(null), L1 = {}, Pv = null, Ih = null, Ph = !1, xE = typeof AbortController < "u" ? AbortController : function() {
      var t = [], e = this.signal = {
        aborted: !1,
        addEventListener: function(a, i) {
          t.push(i);
        }
      };
      this.abort = function() {
        e.aborted = !0, t.forEach(function(a) {
          return a();
        });
      };
    }, GE = yl.unstable_scheduleCallback, wE = yl.unstable_NormalPriority, wl = {
      $$typeof: Fn,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
      _currentRenderer: null,
      _currentRenderer2: null
    }, Xl = yl.unstable_now, tg = console.createTask ? console.createTask : function() {
      return null;
    }, Y0 = 1, eg = 2, ia = -0, Jf = -0, vo = -0, go = null, cn = -1.1, Ur = -0, fl = -0, Tt = -1.1, Dt = -1.1, nl = null, pl = !1, Hr = -0, mc = -1.1, j0 = null, Kf = 0, RS = null, MS = null, Nr = -1.1, q0 = null, tm = -1.1, lg = -1.1, So = -0, bo = -1.1, Zu = -1.1, CS = 0, x0 = null, V1 = null, Z1 = null, $f = -1.1, Br = null, kf = -1.1, ag = -1.1, J1 = -0, K1 = -0, ng = 0, XE = null, $1 = 0, G0 = -1.1, ug = !1, ig = !1, w0 = null, US = 0, Yr = 0, em = null, k1 = G.S;
    G.S = function(t, e) {
      if (Vb = Gl(), typeof e == "object" && e !== null && typeof e.then == "function") {
        if (0 > bo && 0 > Zu) {
          bo = Xl();
          var a = Tf(), i = Nu();
          (a !== kf || i !== Br) && (kf = -1.1), $f = a, Br = i;
        }
        li(t, e);
      }
      k1 !== null && k1(t, e);
    };
    var jr = Ye(null), Ei = {
      recordUnsafeLifecycleWarnings: function() {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function() {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    }, X0 = [], Q0 = [], L0 = [], V0 = [], Z0 = [], J0 = [], qr = /* @__PURE__ */ new Set();
    Ei.recordUnsafeLifecycleWarnings = function(t, e) {
      qr.has(t.type) || (typeof e.componentWillMount == "function" && e.componentWillMount.__suppressDeprecationWarning !== !0 && X0.push(t), t.mode & Ba && typeof e.UNSAFE_componentWillMount == "function" && Q0.push(t), typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && L0.push(t), t.mode & Ba && typeof e.UNSAFE_componentWillReceiveProps == "function" && V0.push(t), typeof e.componentWillUpdate == "function" && e.componentWillUpdate.__suppressDeprecationWarning !== !0 && Z0.push(t), t.mode & Ba && typeof e.UNSAFE_componentWillUpdate == "function" && J0.push(t));
    }, Ei.flushPendingUnsafeLifecycleWarnings = function() {
      var t = /* @__PURE__ */ new Set();
      0 < X0.length && (X0.forEach(function(h) {
        t.add(
          st(h) || "Component"
        ), qr.add(h.type);
      }), X0 = []);
      var e = /* @__PURE__ */ new Set();
      0 < Q0.length && (Q0.forEach(function(h) {
        e.add(
          st(h) || "Component"
        ), qr.add(h.type);
      }), Q0 = []);
      var a = /* @__PURE__ */ new Set();
      0 < L0.length && (L0.forEach(function(h) {
        a.add(
          st(h) || "Component"
        ), qr.add(h.type);
      }), L0 = []);
      var i = /* @__PURE__ */ new Set();
      0 < V0.length && (V0.forEach(
        function(h) {
          i.add(
            st(h) || "Component"
          ), qr.add(h.type);
        }
      ), V0 = []);
      var o = /* @__PURE__ */ new Set();
      0 < Z0.length && (Z0.forEach(function(h) {
        o.add(
          st(h) || "Component"
        ), qr.add(h.type);
      }), Z0 = []);
      var f = /* @__PURE__ */ new Set();
      if (0 < J0.length && (J0.forEach(function(h) {
        f.add(
          st(h) || "Component"
        ), qr.add(h.type);
      }), J0 = []), 0 < e.size) {
        var d = X(
          e
        );
        console.error(
          `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
          d
        );
      }
      0 < i.size && (d = X(
        i
      ), console.error(
        `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,
        d
      )), 0 < f.size && (d = X(
        f
      ), console.error(
        `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
        d
      )), 0 < t.size && (d = X(t), console.warn(
        `componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < a.size && (d = X(
        a
      ), console.warn(
        `componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < o.size && (d = X(o), console.warn(
        `componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      ));
    };
    var cg = /* @__PURE__ */ new Map(), W1 = /* @__PURE__ */ new Set();
    Ei.recordLegacyContextWarning = function(t, e) {
      for (var a = null, i = t; i !== null; )
        i.mode & Ba && (a = i), i = i.return;
      a === null ? console.error(
        "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."
      ) : !W1.has(t.type) && (i = cg.get(a), t.type.contextTypes != null || t.type.childContextTypes != null || e !== null && typeof e.getChildContext == "function") && (i === void 0 && (i = [], cg.set(a, i)), i.push(t));
    }, Ei.flushLegacyContextWarning = function() {
      cg.forEach(function(t) {
        if (t.length !== 0) {
          var e = t[0], a = /* @__PURE__ */ new Set();
          t.forEach(function(o) {
            a.add(st(o) || "Component"), W1.add(o.type);
          });
          var i = X(a);
          ct(e, function() {
            console.error(
              `Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,
              i
            );
          });
        }
      });
    }, Ei.discardPendingWarnings = function() {
      X0 = [], Q0 = [], L0 = [], V0 = [], Z0 = [], J0 = [], cg = /* @__PURE__ */ new Map();
    };
    var F1 = {
      react_stack_bottom_frame: function(t, e, a) {
        var i = Yu;
        Yu = !0;
        try {
          return t(e, a);
        } finally {
          Yu = i;
        }
      }
    }, HS = F1.react_stack_bottom_frame.bind(F1), I1 = {
      react_stack_bottom_frame: function(t) {
        var e = Yu;
        Yu = !0;
        try {
          return t.render();
        } finally {
          Yu = e;
        }
      }
    }, P1 = I1.react_stack_bottom_frame.bind(I1), tb = {
      react_stack_bottom_frame: function(t, e) {
        try {
          e.componentDidMount();
        } catch (a) {
          Jt(t, t.return, a);
        }
      }
    }, NS = tb.react_stack_bottom_frame.bind(
      tb
    ), eb = {
      react_stack_bottom_frame: function(t, e, a, i, o) {
        try {
          e.componentDidUpdate(a, i, o);
        } catch (f) {
          Jt(t, t.return, f);
        }
      }
    }, lb = eb.react_stack_bottom_frame.bind(
      eb
    ), ab = {
      react_stack_bottom_frame: function(t, e) {
        var a = e.stack;
        t.componentDidCatch(e.value, {
          componentStack: a !== null ? a : ""
        });
      }
    }, QE = ab.react_stack_bottom_frame.bind(
      ab
    ), nb = {
      react_stack_bottom_frame: function(t, e, a) {
        try {
          a.componentWillUnmount();
        } catch (i) {
          Jt(t, e, i);
        }
      }
    }, ub = nb.react_stack_bottom_frame.bind(
      nb
    ), ib = {
      react_stack_bottom_frame: function(t) {
        var e = t.create;
        return t = t.inst, e = e(), t.destroy = e;
      }
    }, LE = ib.react_stack_bottom_frame.bind(ib), cb = {
      react_stack_bottom_frame: function(t, e, a) {
        try {
          a();
        } catch (i) {
          Jt(t, e, i);
        }
      }
    }, VE = cb.react_stack_bottom_frame.bind(cb), ob = {
      react_stack_bottom_frame: function(t) {
        var e = t._init;
        return e(t._payload);
      }
    }, ZE = ob.react_stack_bottom_frame.bind(ob), lm = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."
    ), BS = Error(
      "Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), og = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."
    ), fg = {
      then: function() {
        console.error(
          'Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.'
        );
      }
    }, xr = null, K0 = !1, am = null, $0 = 0, Ft = null, YS, fb = YS = !1, sb = {}, rb = {}, db = {};
    Ht = function(t, e, a) {
      if (a !== null && typeof a == "object" && a._store && (!a._store.validated && a.key == null || a._store.validated === 2)) {
        if (typeof a._store != "object")
          throw Error(
            "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
          );
        a._store.validated = 1;
        var i = st(t), o = i || "null";
        if (!sb[o]) {
          sb[o] = !0, a = a._owner, t = t._debugOwner;
          var f = "";
          t && typeof t.tag == "number" && (o = st(t)) && (f = `

Check the render method of \`` + o + "`."), f || i && (f = `

Check the top-level render call using <` + i + ">.");
          var d = "";
          a != null && t !== a && (i = null, typeof a.tag == "number" ? i = st(a) : typeof a.name == "string" && (i = a.name), i && (d = " It was passed a child from " + i + ".")), ct(e, function() {
            console.error(
              'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
              f,
              d
            );
          });
        }
      }
    };
    var Gr = Bl(!0), hb = Bl(!1), mb = 0, yb = 1, pb = 2, jS = 3, Wf = !1, vb = !1, qS = null, xS = !1, nm = Ye(null), sg = Ye(0), eu = Ye(null), Ju = null, um = 1, k0 = 2, Ml = Ye(0), rg = 0, Ku = 1, on = 2, lu = 4, fn = 8, im, gb = /* @__PURE__ */ new Set(), Sb = /* @__PURE__ */ new Set(), GS = /* @__PURE__ */ new Set(), bb = /* @__PURE__ */ new Set(), Eo = 0, Bt = null, we = null, Ql = null, dg = !1, cm = !1, wr = !1, hg = 0, W0 = 0, To = null, JE = 0, KE = 25, x = null, $u = null, Ao = -1, F0 = !1, I0 = {
      readContext: ge,
      use: ii,
      useCallback: cl,
      useContext: cl,
      useEffect: cl,
      useImperativeHandle: cl,
      useLayoutEffect: cl,
      useInsertionEffect: cl,
      useMemo: cl,
      useReducer: cl,
      useRef: cl,
      useState: cl,
      useDebugValue: cl,
      useDeferredValue: cl,
      useTransition: cl,
      useSyncExternalStore: cl,
      useId: cl,
      useHostTransitionStatus: cl,
      useFormState: cl,
      useActionState: cl,
      useOptimistic: cl,
      useMemoCache: cl,
      useCacheRefresh: cl
    };
    I0.useEffectEvent = cl;
    var wS = null, Eb = null, XS = null, Tb = null, yc = null, Ti = null, mg = null;
    wS = {
      readContext: function(t) {
        return ge(t);
      },
      use: ii,
      useCallback: function(t, e) {
        return x = "useCallback", Nt(), ui(e), Bd(t, e);
      },
      useContext: function(t) {
        return x = "useContext", Nt(), ge(t);
      },
      useEffect: function(t, e) {
        return x = "useEffect", Nt(), ui(e), Vc(t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return x = "useImperativeHandle", Nt(), ui(a), Eu(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        x = "useInsertionEffect", Nt(), ui(e), Wi(4, on, t, e);
      },
      useLayoutEffect: function(t, e) {
        return x = "useLayoutEffect", Nt(), ui(e), ya(t, e);
      },
      useMemo: function(t, e) {
        x = "useMemo", Nt(), ui(e);
        var a = G.H;
        G.H = yc;
        try {
          return pa(t, e);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(t, e, a) {
        x = "useReducer", Nt();
        var i = G.H;
        G.H = yc;
        try {
          return Fo(t, e, a);
        } finally {
          G.H = i;
        }
      },
      useRef: function(t) {
        return x = "useRef", Nt(), Nd(t);
      },
      useState: function(t) {
        x = "useState", Nt();
        var e = G.H;
        G.H = yc;
        try {
          return Ji(t);
        } finally {
          G.H = e;
        }
      },
      useDebugValue: function() {
        x = "useDebugValue", Nt();
      },
      useDeferredValue: function(t, e) {
        return x = "useDeferredValue", Nt(), lf(t, e);
      },
      useTransition: function() {
        return x = "useTransition", Nt(), Fi();
      },
      useSyncExternalStore: function(t, e, a) {
        return x = "useSyncExternalStore", Nt(), Io(
          t,
          e,
          a
        );
      },
      useId: function() {
        return x = "useId", Nt(), Ls();
      },
      useFormState: function(t, e) {
        return x = "useFormState", Nt(), Hs(), ka(t, e);
      },
      useActionState: function(t, e) {
        return x = "useActionState", Nt(), ka(t, e);
      },
      useOptimistic: function(t) {
        return x = "useOptimistic", Nt(), Lc(t);
      },
      useHostTransitionStatus: si,
      useMemoCache: Ka,
      useCacheRefresh: function() {
        return x = "useCacheRefresh", Nt(), Yd();
      },
      useEffectEvent: function(t) {
        return x = "useEffectEvent", Nt(), Xs(t);
      }
    }, Eb = {
      readContext: function(t) {
        return ge(t);
      },
      use: ii,
      useCallback: function(t, e) {
        return x = "useCallback", K(), Bd(t, e);
      },
      useContext: function(t) {
        return x = "useContext", K(), ge(t);
      },
      useEffect: function(t, e) {
        return x = "useEffect", K(), Vc(t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return x = "useImperativeHandle", K(), Eu(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        x = "useInsertionEffect", K(), Wi(4, on, t, e);
      },
      useLayoutEffect: function(t, e) {
        return x = "useLayoutEffect", K(), ya(t, e);
      },
      useMemo: function(t, e) {
        x = "useMemo", K();
        var a = G.H;
        G.H = yc;
        try {
          return pa(t, e);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(t, e, a) {
        x = "useReducer", K();
        var i = G.H;
        G.H = yc;
        try {
          return Fo(t, e, a);
        } finally {
          G.H = i;
        }
      },
      useRef: function(t) {
        return x = "useRef", K(), Nd(t);
      },
      useState: function(t) {
        x = "useState", K();
        var e = G.H;
        G.H = yc;
        try {
          return Ji(t);
        } finally {
          G.H = e;
        }
      },
      useDebugValue: function() {
        x = "useDebugValue", K();
      },
      useDeferredValue: function(t, e) {
        return x = "useDeferredValue", K(), lf(t, e);
      },
      useTransition: function() {
        return x = "useTransition", K(), Fi();
      },
      useSyncExternalStore: function(t, e, a) {
        return x = "useSyncExternalStore", K(), Io(
          t,
          e,
          a
        );
      },
      useId: function() {
        return x = "useId", K(), Ls();
      },
      useActionState: function(t, e) {
        return x = "useActionState", K(), ka(t, e);
      },
      useFormState: function(t, e) {
        return x = "useFormState", K(), Hs(), ka(t, e);
      },
      useOptimistic: function(t) {
        return x = "useOptimistic", K(), Lc(t);
      },
      useHostTransitionStatus: si,
      useMemoCache: Ka,
      useCacheRefresh: function() {
        return x = "useCacheRefresh", K(), Yd();
      },
      useEffectEvent: function(t) {
        return x = "useEffectEvent", K(), Xs(t);
      }
    }, XS = {
      readContext: function(t) {
        return ge(t);
      },
      use: ii,
      useCallback: function(t, e) {
        return x = "useCallback", K(), Qn(t, e);
      },
      useContext: function(t) {
        return x = "useContext", K(), ge(t);
      },
      useEffect: function(t, e) {
        x = "useEffect", K(), zl(2048, fn, t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return x = "useImperativeHandle", K(), ef(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        return x = "useInsertionEffect", K(), zl(4, on, t, e);
      },
      useLayoutEffect: function(t, e) {
        return x = "useLayoutEffect", K(), zl(4, lu, t, e);
      },
      useMemo: function(t, e) {
        x = "useMemo", K();
        var a = G.H;
        G.H = Ti;
        try {
          return $e(t, e);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(t, e, a) {
        x = "useReducer", K();
        var i = G.H;
        G.H = Ti;
        try {
          return wc(t, e, a);
        } finally {
          G.H = i;
        }
      },
      useRef: function() {
        return x = "useRef", K(), Te().memoizedState;
      },
      useState: function() {
        x = "useState", K();
        var t = G.H;
        G.H = Ti;
        try {
          return wc($a);
        } finally {
          G.H = t;
        }
      },
      useDebugValue: function() {
        x = "useDebugValue", K();
      },
      useDeferredValue: function(t, e) {
        return x = "useDeferredValue", K(), Tu(t, e);
      },
      useTransition: function() {
        return x = "useTransition", K(), Lp();
      },
      useSyncExternalStore: function(t, e, a) {
        return x = "useSyncExternalStore", K(), Qc(
          t,
          e,
          a
        );
      },
      useId: function() {
        return x = "useId", K(), Te().memoizedState;
      },
      useFormState: function(t) {
        return x = "useFormState", K(), Hs(), $i(t);
      },
      useActionState: function(t) {
        return x = "useActionState", K(), $i(t);
      },
      useOptimistic: function(t, e) {
        return x = "useOptimistic", K(), xs(t, e);
      },
      useHostTransitionStatus: si,
      useMemoCache: Ka,
      useCacheRefresh: function() {
        return x = "useCacheRefresh", K(), Te().memoizedState;
      },
      useEffectEvent: function(t) {
        return x = "useEffectEvent", K(), tf(t);
      }
    }, Tb = {
      readContext: function(t) {
        return ge(t);
      },
      use: ii,
      useCallback: function(t, e) {
        return x = "useCallback", K(), Qn(t, e);
      },
      useContext: function(t) {
        return x = "useContext", K(), ge(t);
      },
      useEffect: function(t, e) {
        x = "useEffect", K(), zl(2048, fn, t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return x = "useImperativeHandle", K(), ef(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        return x = "useInsertionEffect", K(), zl(4, on, t, e);
      },
      useLayoutEffect: function(t, e) {
        return x = "useLayoutEffect", K(), zl(4, lu, t, e);
      },
      useMemo: function(t, e) {
        x = "useMemo", K();
        var a = G.H;
        G.H = mg;
        try {
          return $e(t, e);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(t, e, a) {
        x = "useReducer", K();
        var i = G.H;
        G.H = mg;
        try {
          return Xc(t, e, a);
        } finally {
          G.H = i;
        }
      },
      useRef: function() {
        return x = "useRef", K(), Te().memoizedState;
      },
      useState: function() {
        x = "useState", K();
        var t = G.H;
        G.H = mg;
        try {
          return Xc($a);
        } finally {
          G.H = t;
        }
      },
      useDebugValue: function() {
        x = "useDebugValue", K();
      },
      useDeferredValue: function(t, e) {
        return x = "useDeferredValue", K(), Qt(t, e);
      },
      useTransition: function() {
        return x = "useTransition", K(), el();
      },
      useSyncExternalStore: function(t, e, a) {
        return x = "useSyncExternalStore", K(), Qc(
          t,
          e,
          a
        );
      },
      useId: function() {
        return x = "useId", K(), Te().memoizedState;
      },
      useFormState: function(t) {
        return x = "useFormState", K(), Hs(), ki(t);
      },
      useActionState: function(t) {
        return x = "useActionState", K(), ki(t);
      },
      useOptimistic: function(t, e) {
        return x = "useOptimistic", K(), Gs(t, e);
      },
      useHostTransitionStatus: si,
      useMemoCache: Ka,
      useCacheRefresh: function() {
        return x = "useCacheRefresh", K(), Te().memoizedState;
      },
      useEffectEvent: function(t) {
        return x = "useEffectEvent", K(), tf(t);
      }
    }, yc = {
      readContext: function(t) {
        return nt(), ge(t);
      },
      use: function(t) {
        return tt(), ii(t);
      },
      useCallback: function(t, e) {
        return x = "useCallback", tt(), Nt(), Bd(t, e);
      },
      useContext: function(t) {
        return x = "useContext", tt(), Nt(), ge(t);
      },
      useEffect: function(t, e) {
        return x = "useEffect", tt(), Nt(), Vc(t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return x = "useImperativeHandle", tt(), Nt(), Eu(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        x = "useInsertionEffect", tt(), Nt(), Wi(4, on, t, e);
      },
      useLayoutEffect: function(t, e) {
        return x = "useLayoutEffect", tt(), Nt(), ya(t, e);
      },
      useMemo: function(t, e) {
        x = "useMemo", tt(), Nt();
        var a = G.H;
        G.H = yc;
        try {
          return pa(t, e);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(t, e, a) {
        x = "useReducer", tt(), Nt();
        var i = G.H;
        G.H = yc;
        try {
          return Fo(t, e, a);
        } finally {
          G.H = i;
        }
      },
      useRef: function(t) {
        return x = "useRef", tt(), Nt(), Nd(t);
      },
      useState: function(t) {
        x = "useState", tt(), Nt();
        var e = G.H;
        G.H = yc;
        try {
          return Ji(t);
        } finally {
          G.H = e;
        }
      },
      useDebugValue: function() {
        x = "useDebugValue", tt(), Nt();
      },
      useDeferredValue: function(t, e) {
        return x = "useDeferredValue", tt(), Nt(), lf(t, e);
      },
      useTransition: function() {
        return x = "useTransition", tt(), Nt(), Fi();
      },
      useSyncExternalStore: function(t, e, a) {
        return x = "useSyncExternalStore", tt(), Nt(), Io(
          t,
          e,
          a
        );
      },
      useId: function() {
        return x = "useId", tt(), Nt(), Ls();
      },
      useFormState: function(t, e) {
        return x = "useFormState", tt(), Nt(), ka(t, e);
      },
      useActionState: function(t, e) {
        return x = "useActionState", tt(), Nt(), ka(t, e);
      },
      useOptimistic: function(t) {
        return x = "useOptimistic", tt(), Nt(), Lc(t);
      },
      useMemoCache: function(t) {
        return tt(), Ka(t);
      },
      useHostTransitionStatus: si,
      useCacheRefresh: function() {
        return x = "useCacheRefresh", Nt(), Yd();
      },
      useEffectEvent: function(t) {
        return x = "useEffectEvent", tt(), Nt(), Xs(t);
      }
    }, Ti = {
      readContext: function(t) {
        return nt(), ge(t);
      },
      use: function(t) {
        return tt(), ii(t);
      },
      useCallback: function(t, e) {
        return x = "useCallback", tt(), K(), Qn(t, e);
      },
      useContext: function(t) {
        return x = "useContext", tt(), K(), ge(t);
      },
      useEffect: function(t, e) {
        x = "useEffect", tt(), K(), zl(2048, fn, t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return x = "useImperativeHandle", tt(), K(), ef(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        return x = "useInsertionEffect", tt(), K(), zl(4, on, t, e);
      },
      useLayoutEffect: function(t, e) {
        return x = "useLayoutEffect", tt(), K(), zl(4, lu, t, e);
      },
      useMemo: function(t, e) {
        x = "useMemo", tt(), K();
        var a = G.H;
        G.H = Ti;
        try {
          return $e(t, e);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(t, e, a) {
        x = "useReducer", tt(), K();
        var i = G.H;
        G.H = Ti;
        try {
          return wc(t, e, a);
        } finally {
          G.H = i;
        }
      },
      useRef: function() {
        return x = "useRef", tt(), K(), Te().memoizedState;
      },
      useState: function() {
        x = "useState", tt(), K();
        var t = G.H;
        G.H = Ti;
        try {
          return wc($a);
        } finally {
          G.H = t;
        }
      },
      useDebugValue: function() {
        x = "useDebugValue", tt(), K();
      },
      useDeferredValue: function(t, e) {
        return x = "useDeferredValue", tt(), K(), Tu(t, e);
      },
      useTransition: function() {
        return x = "useTransition", tt(), K(), Lp();
      },
      useSyncExternalStore: function(t, e, a) {
        return x = "useSyncExternalStore", tt(), K(), Qc(
          t,
          e,
          a
        );
      },
      useId: function() {
        return x = "useId", tt(), K(), Te().memoizedState;
      },
      useFormState: function(t) {
        return x = "useFormState", tt(), K(), $i(t);
      },
      useActionState: function(t) {
        return x = "useActionState", tt(), K(), $i(t);
      },
      useOptimistic: function(t, e) {
        return x = "useOptimistic", tt(), K(), xs(t, e);
      },
      useMemoCache: function(t) {
        return tt(), Ka(t);
      },
      useHostTransitionStatus: si,
      useCacheRefresh: function() {
        return x = "useCacheRefresh", K(), Te().memoizedState;
      },
      useEffectEvent: function(t) {
        return x = "useEffectEvent", tt(), K(), tf(t);
      }
    }, mg = {
      readContext: function(t) {
        return nt(), ge(t);
      },
      use: function(t) {
        return tt(), ii(t);
      },
      useCallback: function(t, e) {
        return x = "useCallback", tt(), K(), Qn(t, e);
      },
      useContext: function(t) {
        return x = "useContext", tt(), K(), ge(t);
      },
      useEffect: function(t, e) {
        x = "useEffect", tt(), K(), zl(2048, fn, t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return x = "useImperativeHandle", tt(), K(), ef(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        return x = "useInsertionEffect", tt(), K(), zl(4, on, t, e);
      },
      useLayoutEffect: function(t, e) {
        return x = "useLayoutEffect", tt(), K(), zl(4, lu, t, e);
      },
      useMemo: function(t, e) {
        x = "useMemo", tt(), K();
        var a = G.H;
        G.H = Ti;
        try {
          return $e(t, e);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(t, e, a) {
        x = "useReducer", tt(), K();
        var i = G.H;
        G.H = Ti;
        try {
          return Xc(t, e, a);
        } finally {
          G.H = i;
        }
      },
      useRef: function() {
        return x = "useRef", tt(), K(), Te().memoizedState;
      },
      useState: function() {
        x = "useState", tt(), K();
        var t = G.H;
        G.H = Ti;
        try {
          return Xc($a);
        } finally {
          G.H = t;
        }
      },
      useDebugValue: function() {
        x = "useDebugValue", tt(), K();
      },
      useDeferredValue: function(t, e) {
        return x = "useDeferredValue", tt(), K(), Qt(t, e);
      },
      useTransition: function() {
        return x = "useTransition", tt(), K(), el();
      },
      useSyncExternalStore: function(t, e, a) {
        return x = "useSyncExternalStore", tt(), K(), Qc(
          t,
          e,
          a
        );
      },
      useId: function() {
        return x = "useId", tt(), K(), Te().memoizedState;
      },
      useFormState: function(t) {
        return x = "useFormState", tt(), K(), ki(t);
      },
      useActionState: function(t) {
        return x = "useActionState", tt(), K(), ki(t);
      },
      useOptimistic: function(t, e) {
        return x = "useOptimistic", tt(), K(), Gs(t, e);
      },
      useMemoCache: function(t) {
        return tt(), Ka(t);
      },
      useHostTransitionStatus: si,
      useCacheRefresh: function() {
        return x = "useCacheRefresh", K(), Te().memoizedState;
      },
      useEffectEvent: function(t) {
        return x = "useEffectEvent", tt(), K(), tf(t);
      }
    };
    var Ab = {}, Ob = /* @__PURE__ */ new Set(), zb = /* @__PURE__ */ new Set(), _b = /* @__PURE__ */ new Set(), Db = /* @__PURE__ */ new Set(), Rb = /* @__PURE__ */ new Set(), Mb = /* @__PURE__ */ new Set(), Cb = /* @__PURE__ */ new Set(), Ub = /* @__PURE__ */ new Set(), Hb = /* @__PURE__ */ new Set(), Nb = /* @__PURE__ */ new Set();
    Object.freeze(Ab);
    var QS = {
      enqueueSetState: function(t, e, a) {
        t = t._reactInternals;
        var i = aa(t), o = Ol(i);
        o.payload = e, a != null && ($c(a), o.callback = a), e = vu(t, o, i), e !== null && (mu(i, "this.setState()", t), Ut(e, t, i), bn(e, t, i));
      },
      enqueueReplaceState: function(t, e, a) {
        t = t._reactInternals;
        var i = aa(t), o = Ol(i);
        o.tag = yb, o.payload = e, a != null && ($c(a), o.callback = a), e = vu(t, o, i), e !== null && (mu(i, "this.replaceState()", t), Ut(e, t, i), bn(e, t, i));
      },
      enqueueForceUpdate: function(t, e) {
        t = t._reactInternals;
        var a = aa(t), i = Ol(a);
        i.tag = pb, e != null && ($c(e), i.callback = e), e = vu(t, i, a), e !== null && (mu(a, "this.forceUpdate()", t), Ut(e, t, a), bn(e, t, a));
      }
    }, om = null, LS = null, VS = Error(
      "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."
    ), Ll = !1, Bb = {}, Yb = {}, jb = {}, qb = {}, fm = !1, xb = {}, yg = {}, ZS = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    }, Gb = !1, wb = null;
    wb = /* @__PURE__ */ new Set();
    var Oo = !1, Vl = !1, JS = !1, Xb = typeof WeakSet == "function" ? WeakSet : Set, ca = null, sm = null, rm = null, Zl = null, _n = !1, Ai = null, Fl = !1, P0 = 8192, $E = {
      getCacheForType: function(t) {
        var e = ge(wl), a = e.data.get(t);
        return a === void 0 && (a = t(), e.data.set(t, a)), a;
      },
      cacheSignal: function() {
        return ge(wl).controller.signal;
      },
      getOwner: function() {
        return Na;
      }
    };
    if (typeof Symbol == "function" && Symbol.for) {
      var tp = Symbol.for;
      tp("selector.component"), tp("selector.has_pseudo_class"), tp("selector.role"), tp("selector.test_id"), tp("selector.text");
    }
    var kE = [], WE = typeof WeakMap == "function" ? WeakMap : Map, oa = 0, Il = 2, au = 4, zo = 0, ep = 1, Xr = 2, pg = 3, Ff = 4, vg = 6, Qb = 5, de = oa, Xe = null, ee = null, It = 0, Dn = 0, gg = 1, Qr = 2, lp = 3, Lb = 4, KS = 5, ap = 6, Sg = 7, $S = 8, Lr = 9, Ne = Dn, nu = null, If = !1, dm = !1, kS = !1, pc = 0, sl = zo, Pf = 0, ts = 0, WS = 0, Rn = 0, Vr = 0, np = null, sn = null, bg = !1, Eg = 0, Vb = 0, Zb = 300, Tg = 1 / 0, Jb = 500, up = null, El = null, es = null, Ag = 0, FS = 1, IS = 2, Kb = 3, ls = 0, $b = 1, kb = 2, Wb = 3, Fb = 4, Og = 5, Jl = 0, as = null, hm = null, Oi = 0, PS = 0, t1 = -0, e1 = null, Ib = null, Pb = null, zi = Ag, t2 = null, FE = 50, ip = 0, l1 = null, a1 = !1, zg = !1, IE = 50, Zr = 0, cp = null, mm = !1, _g = null, e2 = !1, l2 = /* @__PURE__ */ new Set(), PE = {}, Dg = null, ym = null, n1 = !1, u1 = !1, Rg = !1, i1 = !1, ns = 0, c1 = {};
    (function() {
      for (var t = 0; t < gS.length; t++) {
        var e = gS[t], a = e.toLowerCase();
        e = e[0].toUpperCase() + e.slice(1), Hn(a, "on" + e);
      }
      Hn(H1, "onAnimationEnd"), Hn(N1, "onAnimationIteration"), Hn(B1, "onAnimationStart"), Hn("dblclick", "onDoubleClick"), Hn("focusin", "onFocus"), Hn("focusout", "onBlur"), Hn(RE, "onTransitionRun"), Hn(ME, "onTransitionStart"), Hn(CE, "onTransitionCancel"), Hn(Y1, "onTransitionEnd");
    })(), wt("onMouseEnter", ["mouseout", "mouseover"]), wt("onMouseLeave", ["mouseout", "mouseover"]), wt("onPointerEnter", ["pointerout", "pointerover"]), wt("onPointerLeave", ["pointerout", "pointerover"]), Pt(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ), Pt(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ), Pt("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), Pt(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ), Pt(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ), Pt(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
    var op = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ), o1 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(op)
    ), Mg = "_reactListening" + Math.random().toString(36).slice(2), a2 = !1, n2 = !1, Cg = !1, u2 = !1, Ug = !1, Hg = !1, i2 = !1, Ng = {}, tT = /\r\n?/g, eT = /\u0000|\uFFFD/g, Jr = "http://www.w3.org/1999/xlink", f1 = "http://www.w3.org/XML/1998/namespace", lT = "javascript:throw new Error('React form unexpectedly submitted.')", aT = "suppressHydrationWarning", Kr = "&", Bg = "/&", fp = "$", sp = "/$", us = "$?", $r = "$~", pm = "$!", nT = "html", uT = "body", iT = "head", s1 = "F!", c2 = "F", o2 = "loading", cT = "style", _o = 0, vm = 1, Yg = 2, r1 = null, d1 = null, f2 = { dialog: !0, webview: !0 }, h1 = null, rp = void 0, s2 = typeof setTimeout == "function" ? setTimeout : void 0, oT = typeof clearTimeout == "function" ? clearTimeout : void 0, kr = -1, r2 = typeof Promise == "function" ? Promise : void 0, fT = typeof queueMicrotask == "function" ? queueMicrotask : typeof r2 < "u" ? function(t) {
      return r2.resolve(null).then(t).catch(rv);
    } : s2, m1 = null, Wr = 0, dp = 1, d2 = 2, h2 = 3, ku = 4, Wu = /* @__PURE__ */ new Map(), m2 = /* @__PURE__ */ new Set(), Do = be.d;
    be.d = {
      f: function() {
        var t = Do.f(), e = tn();
        return t || e;
      },
      r: function(t) {
        var e = et(t);
        e !== null && e.tag === 5 && e.type === "form" ? af(e) : Do.r(t);
      },
      D: function(t) {
        Do.D(t), Py("dns-prefetch", t, null);
      },
      C: function(t, e) {
        Do.C(t, e), Py("preconnect", t, e);
      },
      L: function(t, e, a) {
        Do.L(t, e, a);
        var i = gm;
        if (i && t && e) {
          var o = 'link[rel="preload"][as="' + Re(e) + '"]';
          e === "image" && a && a.imageSrcSet ? (o += '[imagesrcset="' + Re(
            a.imageSrcSet
          ) + '"]', typeof a.imageSizes == "string" && (o += '[imagesizes="' + Re(
            a.imageSizes
          ) + '"]')) : o += '[href="' + Re(t) + '"]';
          var f = o;
          switch (e) {
            case "style":
              f = no(t);
              break;
            case "script":
              f = uo(t);
          }
          Wu.has(f) || (t = kt(
            {
              rel: "preload",
              href: e === "image" && a && a.imageSrcSet ? void 0 : t,
              as: e
            },
            a
          ), Wu.set(f, t), i.querySelector(o) !== null || e === "style" && i.querySelector(
            yr(f)
          ) || e === "script" && i.querySelector(pr(f)) || (e = i.createElement("link"), ke(e, "link", t), ht(e), i.head.appendChild(e)));
        }
      },
      m: function(t, e) {
        Do.m(t, e);
        var a = gm;
        if (a && t) {
          var i = e && typeof e.as == "string" ? e.as : "script", o = 'link[rel="modulepreload"][as="' + Re(i) + '"][href="' + Re(t) + '"]', f = o;
          switch (i) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              f = uo(t);
          }
          if (!Wu.has(f) && (t = kt({ rel: "modulepreload", href: t }, e), Wu.set(f, t), a.querySelector(o) === null)) {
            switch (i) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                if (a.querySelector(pr(f)))
                  return;
            }
            i = a.createElement("link"), ke(i, "link", t), ht(i), a.head.appendChild(i);
          }
        }
      },
      X: function(t, e) {
        Do.X(t, e);
        var a = gm;
        if (a && t) {
          var i = _t(a).hoistableScripts, o = uo(t), f = i.get(o);
          f || (f = a.querySelector(
            pr(o)
          ), f || (t = kt({ src: t, async: !0 }, e), (e = Wu.get(o)) && l0(t, e), f = a.createElement("script"), ht(f), ke(f, "link", t), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      },
      S: function(t, e, a) {
        Do.S(t, e, a);
        var i = gm;
        if (i && t) {
          var o = _t(i).hoistableStyles, f = no(t);
          e = e || "default";
          var d = o.get(f);
          if (!d) {
            var h = { loading: Wr, preload: null };
            if (d = i.querySelector(
              yr(f)
            ))
              h.loading = dp | ku;
            else {
              t = kt(
                {
                  rel: "stylesheet",
                  href: t,
                  "data-precedence": e
                },
                a
              ), (a = Wu.get(f)) && e0(t, a);
              var y = d = i.createElement("link");
              ht(y), ke(y, "link", t), y._p = new Promise(function(p, z) {
                y.onload = p, y.onerror = z;
              }), y.addEventListener("load", function() {
                h.loading |= dp;
              }), y.addEventListener("error", function() {
                h.loading |= d2;
              }), h.loading |= ku, zf(d, e, i);
            }
            d = {
              type: "stylesheet",
              instance: d,
              count: 1,
              state: h
            }, o.set(f, d);
          }
        }
      },
      M: function(t, e) {
        Do.M(t, e);
        var a = gm;
        if (a && t) {
          var i = _t(a).hoistableScripts, o = uo(t), f = i.get(o);
          f || (f = a.querySelector(
            pr(o)
          ), f || (t = kt({ src: t, async: !0, type: "module" }, e), (e = Wu.get(o)) && l0(t, e), f = a.createElement("script"), ht(f), ke(f, "link", t), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      }
    };
    var gm = typeof document > "u" ? null : document, jg = null, sT = 6e4, rT = 800, dT = 500, y1 = 0, p1 = null, qg = null, Fr = iS, hp = {
      $$typeof: Fn,
      Provider: null,
      Consumer: null,
      _currentValue: Fr,
      _currentValue2: Fr,
      _threadCount: 0
    }, y2 = "%c%s%c", p2 = "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", v2 = "", xg = " ", hT = Function.prototype.bind, g2 = !1, S2 = null, b2 = null, E2 = null, T2 = null, A2 = null, O2 = null, z2 = null, _2 = null, D2 = null, R2 = null;
    S2 = function(t, e, a, i) {
      e = W(t, e), e !== null && (a = lt(e.memoizedState, a, 0, i), e.memoizedState = a, e.baseState = a, t.memoizedProps = kt({}, t.memoizedProps), a = ea(t, 2), a !== null && Ut(a, t, 2));
    }, b2 = function(t, e, a) {
      e = W(t, e), e !== null && (a = Rt(e.memoizedState, a, 0), e.memoizedState = a, e.baseState = a, t.memoizedProps = kt({}, t.memoizedProps), a = ea(t, 2), a !== null && Ut(a, t, 2));
    }, E2 = function(t, e, a, i) {
      e = W(t, e), e !== null && (a = qt(e.memoizedState, a, i), e.memoizedState = a, e.baseState = a, t.memoizedProps = kt({}, t.memoizedProps), a = ea(t, 2), a !== null && Ut(a, t, 2));
    }, T2 = function(t, e, a) {
      t.pendingProps = lt(t.memoizedProps, e, 0, a), t.alternate && (t.alternate.pendingProps = t.pendingProps), e = ea(t, 2), e !== null && Ut(e, t, 2);
    }, A2 = function(t, e) {
      t.pendingProps = Rt(t.memoizedProps, e, 0), t.alternate && (t.alternate.pendingProps = t.pendingProps), e = ea(t, 2), e !== null && Ut(e, t, 2);
    }, O2 = function(t, e, a) {
      t.pendingProps = qt(
        t.memoizedProps,
        e,
        a
      ), t.alternate && (t.alternate.pendingProps = t.pendingProps), e = ea(t, 2), e !== null && Ut(e, t, 2);
    }, z2 = function(t) {
      var e = ea(t, 2);
      e !== null && Ut(e, t, 2);
    }, _2 = function(t) {
      var e = Mo(), a = ea(t, e);
      a !== null && Ut(a, t, e);
    }, D2 = function(t) {
      ve = t;
    }, R2 = function(t) {
      xt = t;
    };
    var Gg = !0, wg = null, v1 = !1, is = null, cs = null, os = null, mp = /* @__PURE__ */ new Map(), yp = /* @__PURE__ */ new Map(), fs = [], mT = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    ), Xg = null;
    if (Wn.prototype.render = d0.prototype.render = function(t) {
      var e = this._internalRoot;
      if (e === null) throw Error("Cannot update an unmounted root.");
      var a = arguments;
      typeof a[1] == "function" ? console.error(
        "does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ) : fe(a[1]) ? console.error(
        "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."
      ) : typeof a[1] < "u" && console.error(
        "You passed a second argument to root.render(...) but it only accepts one argument."
      ), a = t;
      var i = e.current, o = aa(i);
      zh(i, o, a, e, null, null);
    }, Wn.prototype.unmount = d0.prototype.unmount = function() {
      var t = arguments;
      if (typeof t[0] == "function" && console.error(
        "does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ), t = this._internalRoot, t !== null) {
        this._internalRoot = null;
        var e = t.containerInfo;
        (de & (Il | au)) !== oa && console.error(
          "Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."
        ), zh(t.current, 2, null, t, null, null), tn(), e[Si] = null;
      }
    }, Wn.prototype.unstable_scheduleHydration = function(t) {
      if (t) {
        var e = Mi();
        t = { blockedOn: null, target: t, priority: e };
        for (var a = 0; a < fs.length && e !== 0 && e < fs[a].priority; a++) ;
        fs.splice(a, 0, t), a === 0 && r0(t);
      }
    }, (function() {
      var t = Er.version;
      if (t !== "19.2.3")
        throw Error(
          `Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      ` + (t + `
  - react-dom:  19.2.3
Learn more: https://react.dev/warnings/version-mismatch`)
        );
    })(), typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"
    ), be.findDOMNode = function(t) {
      var e = t._reactInternals;
      if (e === void 0)
        throw typeof t.render == "function" ? Error("Unable to find node on an unmounted component.") : (t = Object.keys(t).join(","), Error(
          "Argument appears to not be a ReactComponent. Keys: " + t
        ));
      return t = tl(e), t = t !== null ? ul(t) : null, t = t === null ? null : t.stateNode, t;
    }, !(function() {
      var t = {
        bundleType: 1,
        version: "19.2.3",
        rendererPackageName: "react-dom",
        currentDispatcherRef: G,
        reconcilerVersion: "19.2.3"
      };
      return t.overrideHookState = S2, t.overrideHookStateDeletePath = b2, t.overrideHookStateRenamePath = E2, t.overrideProps = T2, t.overridePropsDeletePath = A2, t.overridePropsRenamePath = O2, t.scheduleUpdate = z2, t.scheduleRetry = _2, t.setErrorHandler = D2, t.setSuspenseHandler = R2, t.scheduleRefresh = Vt, t.scheduleRoot = it, t.setRefreshHandler = De, t.getCurrentFiber = Ue, rs(t);
    })() && dc && window.top === window.self && (-1 < navigator.userAgent.indexOf("Chrome") && navigator.userAgent.indexOf("Edge") === -1 || -1 < navigator.userAgent.indexOf("Firefox"))) {
      var M2 = window.location.protocol;
      /^(https?|file):$/.test(M2) && console.info(
        "%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools" + (M2 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq` : ""),
        "font-weight:bold"
      );
    }
    Sp.createRoot = function(t, e) {
      if (!fe(t))
        throw Error("Target container is not a DOM element.");
      h0(t);
      var a = !1, i = "", o = xd, f = Gd, d = cy;
      return e != null && (e.hydrate ? console.warn(
        "hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."
      ) : typeof e == "object" && e !== null && e.$$typeof === On && console.error(
        `You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`
      ), e.unstable_strictMode === !0 && (a = !0), e.identifierPrefix !== void 0 && (i = e.identifierPrefix), e.onUncaughtError !== void 0 && (o = e.onUncaughtError), e.onCaughtError !== void 0 && (f = e.onCaughtError), e.onRecoverableError !== void 0 && (d = e.onRecoverableError)), e = Sr(
        t,
        1,
        !1,
        null,
        null,
        a,
        i,
        null,
        o,
        f,
        d,
        Yv
      ), t[Si] = e.current, nc(t), new d0(e);
    }, Sp.hydrateRoot = function(t, e, a) {
      if (!fe(t))
        throw Error("Target container is not a DOM element.");
      h0(t), e === void 0 && console.error(
        "Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)"
      );
      var i = !1, o = "", f = xd, d = Gd, h = cy, y = null;
      return a != null && (a.unstable_strictMode === !0 && (i = !0), a.identifierPrefix !== void 0 && (o = a.identifierPrefix), a.onUncaughtError !== void 0 && (f = a.onUncaughtError), a.onCaughtError !== void 0 && (d = a.onCaughtError), a.onRecoverableError !== void 0 && (h = a.onRecoverableError), a.formState !== void 0 && (y = a.formState)), e = Sr(
        t,
        1,
        !0,
        e,
        a ?? null,
        i,
        o,
        y,
        f,
        d,
        h,
        Yv
      ), e.context = Uv(null), a = e.current, i = aa(a), i = rn(i), o = Ol(i), o.callback = null, vu(a, o, i), mu(i, "hydrateRoot()", null), a = i, e.current.lanes = a, Mn(e, a), Ma(e), t[Si] = e.current, nc(t), new Wn(e);
    }, Sp.version = "19.2.3", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), Sp;
}
var V2;
function RT() {
  if (V2) return Vg.exports;
  V2 = 1;
  function W() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(W);
      } catch (lt) {
        console.error(lt);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (W(), Vg.exports = _T()) : Vg.exports = DT(), Vg.exports;
}
var MT = RT();
const CT = "_container_3e8r5_1", UT = "_counter_3e8r5_10", HT = "_button_3e8r5_17", NT = "_count_3e8r5_10", BT = "_label_3e8r5_40", Sm = {
  container: CT,
  counter: UT,
  button: HT,
  count: NT,
  label: BT
};
function Z2({ initialCount: W = 0 }) {
  const [lt, qt] = ET.useState(W);
  return /* @__PURE__ */ ss.jsx("div", { className: Sm.container, children: /* @__PURE__ */ ss.jsxs("div", { className: Sm.counter, children: [
    /* @__PURE__ */ ss.jsx("div", { className: Sm.label, children: "React Counter:" }),
    /* @__PURE__ */ ss.jsx(
      "button",
      {
        className: Sm.button,
        onClick: () => qt(lt - 1),
        children: "-"
      }
    ),
    /* @__PURE__ */ ss.jsx("span", { className: Sm.count, children: lt }),
    /* @__PURE__ */ ss.jsx(
      "button",
      {
        className: Sm.button,
        onClick: () => qt(lt + 1),
        children: "+"
      }
    )
  ] }) });
}
class YT extends HTMLElement {
  constructor() {
    super(...arguments), this._root = null;
  }
  connectedCallback() {
    const lt = document.createElement("div");
    this.appendChild(lt);
    const qt = parseInt(this.getAttribute("count") || "0", 10) || 0;
    this._root = MT.createRoot(lt), this._root.render(/* @__PURE__ */ ss.jsx(Z2, { initialCount: qt }));
  }
  disconnectedCallback() {
    this._root && this._root.unmount();
  }
  static get observedAttributes() {
    return ["count"];
  }
  attributeChangedCallback(lt, qt, H) {
    if (lt === "count" && this._root) {
      const Rt = parseInt(H || "0", 10) || 0;
      this._root.render(/* @__PURE__ */ ss.jsx(Z2, { initialCount: Rt }));
    }
  }
}
customElements.define("react-counter", YT);
export {
  YT as default
};
