function Hn(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var Xe = { exports: {} }, _ = {};
var hr;
function Vn() {
  if (hr) return _;
  hr = 1;
  var u = /* @__PURE__ */ Symbol.for("react.element"), t = /* @__PURE__ */ Symbol.for("react.portal"), n = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), i = /* @__PURE__ */ Symbol.for("react.profiler"), c = /* @__PURE__ */ Symbol.for("react.provider"), f = /* @__PURE__ */ Symbol.for("react.context"), b = /* @__PURE__ */ Symbol.for("react.forward_ref"), v = /* @__PURE__ */ Symbol.for("react.suspense"), w = /* @__PURE__ */ Symbol.for("react.memo"), $ = /* @__PURE__ */ Symbol.for("react.lazy"), E = Symbol.iterator;
  function L(s) {
    return s === null || typeof s != "object" ? null : (s = E && s[E] || s["@@iterator"], typeof s == "function" ? s : null);
  }
  var A = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, P = Object.assign, ue = {};
  function K(s, d, C) {
    this.props = s, this.context = d, this.refs = ue, this.updater = C || A;
  }
  K.prototype.isReactComponent = {}, K.prototype.setState = function(s, d) {
    if (typeof s != "object" && typeof s != "function" && s != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, s, d, "setState");
  }, K.prototype.forceUpdate = function(s) {
    this.updater.enqueueForceUpdate(this, s, "forceUpdate");
  };
  function Ue() {
  }
  Ue.prototype = K.prototype;
  function le(s, d, C) {
    this.props = s, this.context = d, this.refs = ue, this.updater = C || A;
  }
  var ce = le.prototype = new Ue();
  ce.constructor = le, P(ce, K.prototype), ce.isPureReactComponent = !0;
  var G = Array.isArray, z = Object.prototype.hasOwnProperty, W = { current: null }, X = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ne(s, d, C) {
    var R, O = {}, D = null, M = null;
    if (d != null) for (R in d.ref !== void 0 && (M = d.ref), d.key !== void 0 && (D = "" + d.key), d) z.call(d, R) && !X.hasOwnProperty(R) && (O[R] = d[R]);
    var N = arguments.length - 2;
    if (N === 1) O.children = C;
    else if (1 < N) {
      for (var T = Array(N), V = 0; V < N; V++) T[V] = arguments[V + 2];
      O.children = T;
    }
    if (s && s.defaultProps) for (R in N = s.defaultProps, N) O[R] === void 0 && (O[R] = N[R]);
    return { $$typeof: u, type: s, key: D, ref: M, props: O, _owner: W.current };
  }
  function De(s, d) {
    return { $$typeof: u, type: s.type, key: d, ref: s.ref, props: s.props, _owner: s._owner };
  }
  function $e(s) {
    return typeof s == "object" && s !== null && s.$$typeof === u;
  }
  function at(s) {
    var d = { "=": "=0", ":": "=2" };
    return "$" + s.replace(/[=:]/g, function(C) {
      return d[C];
    });
  }
  var Ie = /\/+/g;
  function Ee(s, d) {
    return typeof s == "object" && s !== null && s.key != null ? at("" + s.key) : d.toString(36);
  }
  function fe(s, d, C, R, O) {
    var D = typeof s;
    (D === "undefined" || D === "boolean") && (s = null);
    var M = !1;
    if (s === null) M = !0;
    else switch (D) {
      case "string":
      case "number":
        M = !0;
        break;
      case "object":
        switch (s.$$typeof) {
          case u:
          case t:
            M = !0;
        }
    }
    if (M) return M = s, O = O(M), s = R === "" ? "." + Ee(M, 0) : R, G(O) ? (C = "", s != null && (C = s.replace(Ie, "$&/") + "/"), fe(O, d, C, "", function(V) {
      return V;
    })) : O != null && ($e(O) && (O = De(O, C + (!O.key || M && M.key === O.key ? "" : ("" + O.key).replace(Ie, "$&/") + "/") + s)), d.push(O)), 1;
    if (M = 0, R = R === "" ? "." : R + ":", G(s)) for (var N = 0; N < s.length; N++) {
      D = s[N];
      var T = R + Ee(D, N);
      M += fe(D, d, C, T, O);
    }
    else if (T = L(s), typeof T == "function") for (s = T.call(s), N = 0; !(D = s.next()).done; ) D = D.value, T = R + Ee(D, N++), M += fe(D, d, C, T, O);
    else if (D === "object") throw d = String(s), Error("Objects are not valid as a React child (found: " + (d === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : d) + "). If you meant to render a collection of children, use an array instead.");
    return M;
  }
  function Y(s, d, C) {
    if (s == null) return s;
    var R = [], O = 0;
    return fe(s, R, "", "", function(D) {
      return d.call(C, D, O++);
    }), R;
  }
  function Q(s) {
    if (s._status === -1) {
      var d = s._result;
      d = d(), d.then(function(C) {
        (s._status === 0 || s._status === -1) && (s._status = 1, s._result = C);
      }, function(C) {
        (s._status === 0 || s._status === -1) && (s._status = 2, s._result = C);
      }), s._status === -1 && (s._status = 0, s._result = d);
    }
    if (s._status === 1) return s._result.default;
    throw s._result;
  }
  var y = { current: null }, oe = { transition: null }, Le = { ReactCurrentDispatcher: y, ReactCurrentBatchConfig: oe, ReactCurrentOwner: W };
  function de() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return _.Children = { map: Y, forEach: function(s, d, C) {
    Y(s, function() {
      d.apply(this, arguments);
    }, C);
  }, count: function(s) {
    var d = 0;
    return Y(s, function() {
      d++;
    }), d;
  }, toArray: function(s) {
    return Y(s, function(d) {
      return d;
    }) || [];
  }, only: function(s) {
    if (!$e(s)) throw Error("React.Children.only expected to receive a single React element child.");
    return s;
  } }, _.Component = K, _.Fragment = n, _.Profiler = i, _.PureComponent = le, _.StrictMode = o, _.Suspense = v, _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Le, _.act = de, _.cloneElement = function(s, d, C) {
    if (s == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + s + ".");
    var R = P({}, s.props), O = s.key, D = s.ref, M = s._owner;
    if (d != null) {
      if (d.ref !== void 0 && (D = d.ref, M = W.current), d.key !== void 0 && (O = "" + d.key), s.type && s.type.defaultProps) var N = s.type.defaultProps;
      for (T in d) z.call(d, T) && !X.hasOwnProperty(T) && (R[T] = d[T] === void 0 && N !== void 0 ? N[T] : d[T]);
    }
    var T = arguments.length - 2;
    if (T === 1) R.children = C;
    else if (1 < T) {
      N = Array(T);
      for (var V = 0; V < T; V++) N[V] = arguments[V + 2];
      R.children = N;
    }
    return { $$typeof: u, type: s.type, key: O, ref: D, props: R, _owner: M };
  }, _.createContext = function(s) {
    return s = { $$typeof: f, _currentValue: s, _currentValue2: s, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, s.Provider = { $$typeof: c, _context: s }, s.Consumer = s;
  }, _.createElement = ne, _.createFactory = function(s) {
    var d = ne.bind(null, s);
    return d.type = s, d;
  }, _.createRef = function() {
    return { current: null };
  }, _.forwardRef = function(s) {
    return { $$typeof: b, render: s };
  }, _.isValidElement = $e, _.lazy = function(s) {
    return { $$typeof: $, _payload: { _status: -1, _result: s }, _init: Q };
  }, _.memo = function(s, d) {
    return { $$typeof: w, type: s, compare: d === void 0 ? null : d };
  }, _.startTransition = function(s) {
    var d = oe.transition;
    oe.transition = {};
    try {
      s();
    } finally {
      oe.transition = d;
    }
  }, _.unstable_act = de, _.useCallback = function(s, d) {
    return y.current.useCallback(s, d);
  }, _.useContext = function(s) {
    return y.current.useContext(s);
  }, _.useDebugValue = function() {
  }, _.useDeferredValue = function(s) {
    return y.current.useDeferredValue(s);
  }, _.useEffect = function(s, d) {
    return y.current.useEffect(s, d);
  }, _.useId = function() {
    return y.current.useId();
  }, _.useImperativeHandle = function(s, d, C) {
    return y.current.useImperativeHandle(s, d, C);
  }, _.useInsertionEffect = function(s, d) {
    return y.current.useInsertionEffect(s, d);
  }, _.useLayoutEffect = function(s, d) {
    return y.current.useLayoutEffect(s, d);
  }, _.useMemo = function(s, d) {
    return y.current.useMemo(s, d);
  }, _.useReducer = function(s, d, C) {
    return y.current.useReducer(s, d, C);
  }, _.useRef = function(s) {
    return y.current.useRef(s);
  }, _.useState = function(s) {
    return y.current.useState(s);
  }, _.useSyncExternalStore = function(s, d, C) {
    return y.current.useSyncExternalStore(s, d, C);
  }, _.useTransition = function() {
    return y.current.useTransition();
  }, _.version = "18.3.1", _;
}
var Re = { exports: {} };
Re.exports;
var vr;
function Bn() {
  return vr || (vr = 1, (function(u, t) {
    process.env.NODE_ENV !== "production" && (function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var n = "18.3.1", o = /* @__PURE__ */ Symbol.for("react.element"), i = /* @__PURE__ */ Symbol.for("react.portal"), c = /* @__PURE__ */ Symbol.for("react.fragment"), f = /* @__PURE__ */ Symbol.for("react.strict_mode"), b = /* @__PURE__ */ Symbol.for("react.profiler"), v = /* @__PURE__ */ Symbol.for("react.provider"), w = /* @__PURE__ */ Symbol.for("react.context"), $ = /* @__PURE__ */ Symbol.for("react.forward_ref"), E = /* @__PURE__ */ Symbol.for("react.suspense"), L = /* @__PURE__ */ Symbol.for("react.suspense_list"), A = /* @__PURE__ */ Symbol.for("react.memo"), P = /* @__PURE__ */ Symbol.for("react.lazy"), ue = /* @__PURE__ */ Symbol.for("react.offscreen"), K = Symbol.iterator, Ue = "@@iterator";
      function le(e) {
        if (e === null || typeof e != "object")
          return null;
        var r = K && e[K] || e[Ue];
        return typeof r == "function" ? r : null;
      }
      var ce = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, G = {
        transition: null
      }, z = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, W = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, X = {}, ne = null;
      function De(e) {
        ne = e;
      }
      X.setExtraStackFrame = function(e) {
        ne = e;
      }, X.getCurrentStack = null, X.getStackAddendum = function() {
        var e = "";
        ne && (e += ne);
        var r = X.getCurrentStack;
        return r && (e += r() || ""), e;
      };
      var $e = !1, at = !1, Ie = !1, Ee = !1, fe = !1, Y = {
        ReactCurrentDispatcher: ce,
        ReactCurrentBatchConfig: G,
        ReactCurrentOwner: W
      };
      Y.ReactDebugCurrentFrame = X, Y.ReactCurrentActQueue = z;
      function Q(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), l = 1; l < r; l++)
            a[l - 1] = arguments[l];
          oe("warn", e, a);
        }
      }
      function y(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), l = 1; l < r; l++)
            a[l - 1] = arguments[l];
          oe("error", e, a);
        }
      }
      function oe(e, r, a) {
        {
          var l = Y.ReactDebugCurrentFrame, p = l.getStackAddendum();
          p !== "" && (r += "%s", a = a.concat([p]));
          var m = a.map(function(h) {
            return String(h);
          });
          m.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, m);
        }
      }
      var Le = {};
      function de(e, r) {
        {
          var a = e.constructor, l = a && (a.displayName || a.name) || "ReactClass", p = l + "." + r;
          if (Le[p])
            return;
          y("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", r, l), Le[p] = !0;
        }
      }
      var s = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(e) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(e, r, a) {
          de(e, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(e, r, a, l) {
          de(e, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(e, r, a, l) {
          de(e, "setState");
        }
      }, d = Object.assign, C = {};
      Object.freeze(C);
      function R(e, r, a) {
        this.props = e, this.context = r, this.refs = C, this.updater = a || s;
      }
      R.prototype.isReactComponent = {}, R.prototype.setState = function(e, r) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, r, "setState");
      }, R.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      {
        var O = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, D = function(e, r) {
          Object.defineProperty(R.prototype, e, {
            get: function() {
              Q("%s(...) is deprecated in plain JavaScript React classes. %s", r[0], r[1]);
            }
          });
        };
        for (var M in O)
          O.hasOwnProperty(M) && D(M, O[M]);
      }
      function N() {
      }
      N.prototype = R.prototype;
      function T(e, r, a) {
        this.props = e, this.context = r, this.refs = C, this.updater = a || s;
      }
      var V = T.prototype = new N();
      V.constructor = T, d(V, R.prototype), V.isPureReactComponent = !0;
      function Nr() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      var Ur = Array.isArray;
      function ze(e) {
        return Ur(e);
      }
      function Dr(e) {
        {
          var r = typeof Symbol == "function" && Symbol.toStringTag, a = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return a;
        }
      }
      function Ir(e) {
        try {
          return Tt(e), !1;
        } catch {
          return !0;
        }
      }
      function Tt(e) {
        return "" + e;
      }
      function Fe(e) {
        if (Ir(e))
          return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Dr(e)), Tt(e);
      }
      function Lr(e, r, a) {
        var l = e.displayName;
        if (l)
          return l;
        var p = r.displayName || r.name || "";
        return p !== "" ? a + "(" + p + ")" : a;
      }
      function xt(e) {
        return e.displayName || "Context";
      }
      function Z(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case c:
            return "Fragment";
          case i:
            return "Portal";
          case b:
            return "Profiler";
          case f:
            return "StrictMode";
          case E:
            return "Suspense";
          case L:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case w:
              var r = e;
              return xt(r) + ".Consumer";
            case v:
              var a = e;
              return xt(a._context) + ".Provider";
            case $:
              return Lr(e, e.render, "ForwardRef");
            case A:
              var l = e.displayName || null;
              return l !== null ? l : Z(e.type) || "Memo";
            case P: {
              var p = e, m = p._payload, h = p._init;
              try {
                return Z(h(m));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var we = Object.prototype.hasOwnProperty, jt = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Mt, Nt, ut;
      ut = {};
      function Ut(e) {
        if (we.call(e, "ref")) {
          var r = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function Dt(e) {
        if (we.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function zr(e, r) {
        var a = function() {
          Mt || (Mt = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
      function Fr(e, r) {
        var a = function() {
          Nt || (Nt = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
      function Hr(e) {
        if (typeof e.ref == "string" && W.current && e.__self && W.current.stateNode !== e.__self) {
          var r = Z(W.current.type);
          ut[r] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', r, e.ref), ut[r] = !0);
        }
      }
      var lt = function(e, r, a, l, p, m, h) {
        var g = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: o,
          // Built-in properties that belong on the element
          type: e,
          key: r,
          ref: a,
          props: h,
          // Record the component responsible for creating this element.
          _owner: m
        };
        return g._store = {}, Object.defineProperty(g._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(g, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: l
        }), Object.defineProperty(g, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: p
        }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
      };
      function Vr(e, r, a) {
        var l, p = {}, m = null, h = null, g = null, S = null;
        if (r != null) {
          Ut(r) && (h = r.ref, Hr(r)), Dt(r) && (Fe(r.key), m = "" + r.key), g = r.__self === void 0 ? null : r.__self, S = r.__source === void 0 ? null : r.__source;
          for (l in r)
            we.call(r, l) && !jt.hasOwnProperty(l) && (p[l] = r[l]);
        }
        var k = arguments.length - 2;
        if (k === 1)
          p.children = a;
        else if (k > 1) {
          for (var x = Array(k), j = 0; j < k; j++)
            x[j] = arguments[j + 2];
          Object.freeze && Object.freeze(x), p.children = x;
        }
        if (e && e.defaultProps) {
          var U = e.defaultProps;
          for (l in U)
            p[l] === void 0 && (p[l] = U[l]);
        }
        if (m || h) {
          var I = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          m && zr(p, I), h && Fr(p, I);
        }
        return lt(e, m, h, g, S, W.current, p);
      }
      function Br(e, r) {
        var a = lt(e.type, r, e.ref, e._self, e._source, e._owner, e.props);
        return a;
      }
      function Wr(e, r, a) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var l, p = d({}, e.props), m = e.key, h = e.ref, g = e._self, S = e._source, k = e._owner;
        if (r != null) {
          Ut(r) && (h = r.ref, k = W.current), Dt(r) && (Fe(r.key), m = "" + r.key);
          var x;
          e.type && e.type.defaultProps && (x = e.type.defaultProps);
          for (l in r)
            we.call(r, l) && !jt.hasOwnProperty(l) && (r[l] === void 0 && x !== void 0 ? p[l] = x[l] : p[l] = r[l]);
        }
        var j = arguments.length - 2;
        if (j === 1)
          p.children = a;
        else if (j > 1) {
          for (var U = Array(j), I = 0; I < j; I++)
            U[I] = arguments[I + 2];
          p.children = U;
        }
        return lt(e.type, m, h, g, S, k, p);
      }
      function pe(e) {
        return typeof e == "object" && e !== null && e.$$typeof === o;
      }
      var It = ".", Yr = ":";
      function qr(e) {
        var r = /[=:]/g, a = {
          "=": "=0",
          ":": "=2"
        }, l = e.replace(r, function(p) {
          return a[p];
        });
        return "$" + l;
      }
      var Lt = !1, Kr = /\/+/g;
      function zt(e) {
        return e.replace(Kr, "$&/");
      }
      function ct(e, r) {
        return typeof e == "object" && e !== null && e.key != null ? (Fe(e.key), qr("" + e.key)) : r.toString(36);
      }
      function He(e, r, a, l, p) {
        var m = typeof e;
        (m === "undefined" || m === "boolean") && (e = null);
        var h = !1;
        if (e === null)
          h = !0;
        else
          switch (m) {
            case "string":
            case "number":
              h = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case o:
                case i:
                  h = !0;
              }
          }
        if (h) {
          var g = e, S = p(g), k = l === "" ? It + ct(g, 0) : l;
          if (ze(S)) {
            var x = "";
            k != null && (x = zt(k) + "/"), He(S, r, x, "", function(Fn) {
              return Fn;
            });
          } else S != null && (pe(S) && (S.key && (!g || g.key !== S.key) && Fe(S.key), S = Br(
            S,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            a + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (S.key && (!g || g.key !== S.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              zt("" + S.key) + "/"
            ) : "") + k
          )), r.push(S));
          return 1;
        }
        var j, U, I = 0, H = l === "" ? It : l + Yr;
        if (ze(e))
          for (var Je = 0; Je < e.length; Je++)
            j = e[Je], U = H + ct(j, Je), I += He(j, r, a, U, p);
        else {
          var gt = le(e);
          if (typeof gt == "function") {
            var fr = e;
            gt === fr.entries && (Lt || Q("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Lt = !0);
            for (var Ln = gt.call(fr), dr, zn = 0; !(dr = Ln.next()).done; )
              j = dr.value, U = H + ct(j, zn++), I += He(j, r, a, U, p);
          } else if (m === "object") {
            var pr = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (pr === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : pr) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return I;
      }
      function Ve(e, r, a) {
        if (e == null)
          return e;
        var l = [], p = 0;
        return He(e, l, "", "", function(m) {
          return r.call(a, m, p++);
        }), l;
      }
      function Gr(e) {
        var r = 0;
        return Ve(e, function() {
          r++;
        }), r;
      }
      function Jr(e, r, a) {
        Ve(e, function() {
          r.apply(this, arguments);
        }, a);
      }
      function Xr(e) {
        return Ve(e, function(r) {
          return r;
        }) || [];
      }
      function Qr(e) {
        if (!pe(e))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
      function Zr(e) {
        var r = {
          $$typeof: w,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: e,
          _currentValue2: e,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        r.Provider = {
          $$typeof: v,
          _context: r
        };
        var a = !1, l = !1, p = !1;
        {
          var m = {
            $$typeof: w,
            _context: r
          };
          Object.defineProperties(m, {
            Provider: {
              get: function() {
                return l || (l = !0, y("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), r.Provider;
              },
              set: function(h) {
                r.Provider = h;
              }
            },
            _currentValue: {
              get: function() {
                return r._currentValue;
              },
              set: function(h) {
                r._currentValue = h;
              }
            },
            _currentValue2: {
              get: function() {
                return r._currentValue2;
              },
              set: function(h) {
                r._currentValue2 = h;
              }
            },
            _threadCount: {
              get: function() {
                return r._threadCount;
              },
              set: function(h) {
                r._threadCount = h;
              }
            },
            Consumer: {
              get: function() {
                return a || (a = !0, y("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), r.Consumer;
              }
            },
            displayName: {
              get: function() {
                return r.displayName;
              },
              set: function(h) {
                p || (Q("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", h), p = !0);
              }
            }
          }), r.Consumer = m;
        }
        return r._currentRenderer = null, r._currentRenderer2 = null, r;
      }
      var Ce = -1, ft = 0, Ft = 1, en = 2;
      function tn(e) {
        if (e._status === Ce) {
          var r = e._result, a = r();
          if (a.then(function(m) {
            if (e._status === ft || e._status === Ce) {
              var h = e;
              h._status = Ft, h._result = m;
            }
          }, function(m) {
            if (e._status === ft || e._status === Ce) {
              var h = e;
              h._status = en, h._result = m;
            }
          }), e._status === Ce) {
            var l = e;
            l._status = ft, l._result = a;
          }
        }
        if (e._status === Ft) {
          var p = e._result;
          return p === void 0 && y(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, p), "default" in p || y(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, p), p.default;
        } else
          throw e._result;
      }
      function rn(e) {
        var r = {
          // We use these fields to store the result.
          _status: Ce,
          _result: e
        }, a = {
          $$typeof: P,
          _payload: r,
          _init: tn
        };
        {
          var l, p;
          Object.defineProperties(a, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return l;
              },
              set: function(m) {
                y("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), l = m, Object.defineProperty(a, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return p;
              },
              set: function(m) {
                y("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), p = m, Object.defineProperty(a, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return a;
      }
      function nn(e) {
        e != null && e.$$typeof === A ? y("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? y("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && y("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && y("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var r = {
          $$typeof: $,
          render: e
        };
        {
          var a;
          Object.defineProperty(r, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return a;
            },
            set: function(l) {
              a = l, !e.name && !e.displayName && (e.displayName = l);
            }
          });
        }
        return r;
      }
      var Ht;
      Ht = /* @__PURE__ */ Symbol.for("react.module.reference");
      function Vt(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === c || e === b || fe || e === f || e === E || e === L || Ee || e === ue || $e || at || Ie || typeof e == "object" && e !== null && (e.$$typeof === P || e.$$typeof === A || e.$$typeof === v || e.$$typeof === w || e.$$typeof === $ || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        e.$$typeof === Ht || e.getModuleId !== void 0));
      }
      function on(e, r) {
        Vt(e) || y("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var a = {
          $$typeof: A,
          type: e,
          compare: r === void 0 ? null : r
        };
        {
          var l;
          Object.defineProperty(a, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return l;
            },
            set: function(p) {
              l = p, !e.name && !e.displayName && (e.displayName = p);
            }
          });
        }
        return a;
      }
      function B() {
        var e = ce.current;
        return e === null && y(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
      }
      function sn(e) {
        var r = B();
        if (e._context !== void 0) {
          var a = e._context;
          a.Consumer === e ? y("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : a.Provider === e && y("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return r.useContext(e);
      }
      function an(e) {
        var r = B();
        return r.useState(e);
      }
      function un(e, r, a) {
        var l = B();
        return l.useReducer(e, r, a);
      }
      function ln(e) {
        var r = B();
        return r.useRef(e);
      }
      function cn(e, r) {
        var a = B();
        return a.useEffect(e, r);
      }
      function fn(e, r) {
        var a = B();
        return a.useInsertionEffect(e, r);
      }
      function dn(e, r) {
        var a = B();
        return a.useLayoutEffect(e, r);
      }
      function pn(e, r) {
        var a = B();
        return a.useCallback(e, r);
      }
      function hn(e, r) {
        var a = B();
        return a.useMemo(e, r);
      }
      function vn(e, r, a) {
        var l = B();
        return l.useImperativeHandle(e, r, a);
      }
      function mn(e, r) {
        {
          var a = B();
          return a.useDebugValue(e, r);
        }
      }
      function yn() {
        var e = B();
        return e.useTransition();
      }
      function bn(e) {
        var r = B();
        return r.useDeferredValue(e);
      }
      function gn() {
        var e = B();
        return e.useId();
      }
      function _n(e, r, a) {
        var l = B();
        return l.useSyncExternalStore(e, r, a);
      }
      var Se = 0, Bt, Wt, Yt, qt, Kt, Gt, Jt;
      function Xt() {
      }
      Xt.__reactDisabledLog = !0;
      function $n() {
        {
          if (Se === 0) {
            Bt = console.log, Wt = console.info, Yt = console.warn, qt = console.error, Kt = console.group, Gt = console.groupCollapsed, Jt = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: Xt,
              writable: !0
            };
            Object.defineProperties(console, {
              info: e,
              log: e,
              warn: e,
              error: e,
              group: e,
              groupCollapsed: e,
              groupEnd: e
            });
          }
          Se++;
        }
      }
      function En() {
        {
          if (Se--, Se === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: d({}, e, {
                value: Bt
              }),
              info: d({}, e, {
                value: Wt
              }),
              warn: d({}, e, {
                value: Yt
              }),
              error: d({}, e, {
                value: qt
              }),
              group: d({}, e, {
                value: Kt
              }),
              groupCollapsed: d({}, e, {
                value: Gt
              }),
              groupEnd: d({}, e, {
                value: Jt
              })
            });
          }
          Se < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var dt = Y.ReactCurrentDispatcher, pt;
      function Be(e, r, a) {
        {
          if (pt === void 0)
            try {
              throw Error();
            } catch (p) {
              var l = p.stack.trim().match(/\n( *(at )?)/);
              pt = l && l[1] || "";
            }
          return `
` + pt + e;
        }
      }
      var ht = !1, We;
      {
        var wn = typeof WeakMap == "function" ? WeakMap : Map;
        We = new wn();
      }
      function Qt(e, r) {
        if (!e || ht)
          return "";
        {
          var a = We.get(e);
          if (a !== void 0)
            return a;
        }
        var l;
        ht = !0;
        var p = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var m;
        m = dt.current, dt.current = null, $n();
        try {
          if (r) {
            var h = function() {
              throw Error();
            };
            if (Object.defineProperty(h.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(h, []);
              } catch (H) {
                l = H;
              }
              Reflect.construct(e, [], h);
            } else {
              try {
                h.call();
              } catch (H) {
                l = H;
              }
              e.call(h.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (H) {
              l = H;
            }
            e();
          }
        } catch (H) {
          if (H && l && typeof H.stack == "string") {
            for (var g = H.stack.split(`
`), S = l.stack.split(`
`), k = g.length - 1, x = S.length - 1; k >= 1 && x >= 0 && g[k] !== S[x]; )
              x--;
            for (; k >= 1 && x >= 0; k--, x--)
              if (g[k] !== S[x]) {
                if (k !== 1 || x !== 1)
                  do
                    if (k--, x--, x < 0 || g[k] !== S[x]) {
                      var j = `
` + g[k].replace(" at new ", " at ");
                      return e.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", e.displayName)), typeof e == "function" && We.set(e, j), j;
                    }
                  while (k >= 1 && x >= 0);
                break;
              }
          }
        } finally {
          ht = !1, dt.current = m, En(), Error.prepareStackTrace = p;
        }
        var U = e ? e.displayName || e.name : "", I = U ? Be(U) : "";
        return typeof e == "function" && We.set(e, I), I;
      }
      function Cn(e, r, a) {
        return Qt(e, !1);
      }
      function Sn(e) {
        var r = e.prototype;
        return !!(r && r.isReactComponent);
      }
      function Ye(e, r, a) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return Qt(e, Sn(e));
        if (typeof e == "string")
          return Be(e);
        switch (e) {
          case E:
            return Be("Suspense");
          case L:
            return Be("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case $:
              return Cn(e.render);
            case A:
              return Ye(e.type, r, a);
            case P: {
              var l = e, p = l._payload, m = l._init;
              try {
                return Ye(m(p), r, a);
              } catch {
              }
            }
          }
        return "";
      }
      var Zt = {}, er = Y.ReactDebugCurrentFrame;
      function qe(e) {
        if (e) {
          var r = e._owner, a = Ye(e.type, e._source, r ? r.type : null);
          er.setExtraStackFrame(a);
        } else
          er.setExtraStackFrame(null);
      }
      function An(e, r, a, l, p) {
        {
          var m = Function.call.bind(we);
          for (var h in e)
            if (m(e, h)) {
              var g = void 0;
              try {
                if (typeof e[h] != "function") {
                  var S = Error((l || "React class") + ": " + a + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw S.name = "Invariant Violation", S;
                }
                g = e[h](r, h, l, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (k) {
                g = k;
              }
              g && !(g instanceof Error) && (qe(p), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", l || "React class", a, h, typeof g), qe(null)), g instanceof Error && !(g.message in Zt) && (Zt[g.message] = !0, qe(p), y("Failed %s type: %s", a, g.message), qe(null));
            }
        }
      }
      function he(e) {
        if (e) {
          var r = e._owner, a = Ye(e.type, e._source, r ? r.type : null);
          De(a);
        } else
          De(null);
      }
      var vt;
      vt = !1;
      function tr() {
        if (W.current) {
          var e = Z(W.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
      function Rn(e) {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), a = e.lineNumber;
          return `

Check your code at ` + r + ":" + a + ".";
        }
        return "";
      }
      function On(e) {
        return e != null ? Rn(e.__source) : "";
      }
      var rr = {};
      function kn(e) {
        var r = tr();
        if (!r) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (r = `

Check the top-level render call using <` + a + ">.");
        }
        return r;
      }
      function nr(e, r) {
        if (!(!e._store || e._store.validated || e.key != null)) {
          e._store.validated = !0;
          var a = kn(r);
          if (!rr[a]) {
            rr[a] = !0;
            var l = "";
            e && e._owner && e._owner !== W.current && (l = " It was passed a child from " + Z(e._owner.type) + "."), he(e), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, l), he(null);
          }
        }
      }
      function or(e, r) {
        if (typeof e == "object") {
          if (ze(e))
            for (var a = 0; a < e.length; a++) {
              var l = e[a];
              pe(l) && nr(l, r);
            }
          else if (pe(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var p = le(e);
            if (typeof p == "function" && p !== e.entries)
              for (var m = p.call(e), h; !(h = m.next()).done; )
                pe(h.value) && nr(h.value, r);
          }
        }
      }
      function ir(e) {
        {
          var r = e.type;
          if (r == null || typeof r == "string")
            return;
          var a;
          if (typeof r == "function")
            a = r.propTypes;
          else if (typeof r == "object" && (r.$$typeof === $ || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          r.$$typeof === A))
            a = r.propTypes;
          else
            return;
          if (a) {
            var l = Z(r);
            An(a, e.props, "prop", l, e);
          } else if (r.PropTypes !== void 0 && !vt) {
            vt = !0;
            var p = Z(r);
            y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", p || "Unknown");
          }
          typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Pn(e) {
        {
          for (var r = Object.keys(e.props), a = 0; a < r.length; a++) {
            var l = r[a];
            if (l !== "children" && l !== "key") {
              he(e), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", l), he(null);
              break;
            }
          }
          e.ref !== null && (he(e), y("Invalid attribute `ref` supplied to `React.Fragment`."), he(null));
        }
      }
      function sr(e, r, a) {
        var l = Vt(e);
        if (!l) {
          var p = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (p += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var m = On(r);
          m ? p += m : p += tr();
          var h;
          e === null ? h = "null" : ze(e) ? h = "array" : e !== void 0 && e.$$typeof === o ? (h = "<" + (Z(e.type) || "Unknown") + " />", p = " Did you accidentally export a JSX literal instead of a component?") : h = typeof e, y("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", h, p);
        }
        var g = Vr.apply(this, arguments);
        if (g == null)
          return g;
        if (l)
          for (var S = 2; S < arguments.length; S++)
            or(arguments[S], e);
        return e === c ? Pn(g) : ir(g), g;
      }
      var ar = !1;
      function Tn(e) {
        var r = sr.bind(null, e);
        return r.type = e, ar || (ar = !0, Q("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(r, "type", {
          enumerable: !1,
          get: function() {
            return Q("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), r;
      }
      function xn(e, r, a) {
        for (var l = Wr.apply(this, arguments), p = 2; p < arguments.length; p++)
          or(arguments[p], l.type);
        return ir(l), l;
      }
      function jn(e, r) {
        var a = G.transition;
        G.transition = {};
        var l = G.transition;
        G.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          e();
        } finally {
          if (G.transition = a, a === null && l._updatedFibers) {
            var p = l._updatedFibers.size;
            p > 10 && Q("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), l._updatedFibers.clear();
          }
        }
      }
      var ur = !1, Ke = null;
      function Mn(e) {
        if (Ke === null)
          try {
            var r = ("require" + Math.random()).slice(0, 7), a = u && u[r];
            Ke = a.call(u, "timers").setImmediate;
          } catch {
            Ke = function(p) {
              ur === !1 && (ur = !0, typeof MessageChannel > "u" && y("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var m = new MessageChannel();
              m.port1.onmessage = p, m.port2.postMessage(void 0);
            };
          }
        return Ke(e);
      }
      var ve = 0, lr = !1;
      function cr(e) {
        {
          var r = ve;
          ve++, z.current === null && (z.current = []);
          var a = z.isBatchingLegacy, l;
          try {
            if (z.isBatchingLegacy = !0, l = e(), !a && z.didScheduleLegacyUpdate) {
              var p = z.current;
              p !== null && (z.didScheduleLegacyUpdate = !1, bt(p));
            }
          } catch (U) {
            throw Ge(r), U;
          } finally {
            z.isBatchingLegacy = a;
          }
          if (l !== null && typeof l == "object" && typeof l.then == "function") {
            var m = l, h = !1, g = {
              then: function(U, I) {
                h = !0, m.then(function(H) {
                  Ge(r), ve === 0 ? mt(H, U, I) : U(H);
                }, function(H) {
                  Ge(r), I(H);
                });
              }
            };
            return !lr && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              h || (lr = !0, y("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), g;
          } else {
            var S = l;
            if (Ge(r), ve === 0) {
              var k = z.current;
              k !== null && (bt(k), z.current = null);
              var x = {
                then: function(U, I) {
                  z.current === null ? (z.current = [], mt(S, U, I)) : U(S);
                }
              };
              return x;
            } else {
              var j = {
                then: function(U, I) {
                  U(S);
                }
              };
              return j;
            }
          }
        }
      }
      function Ge(e) {
        e !== ve - 1 && y("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), ve = e;
      }
      function mt(e, r, a) {
        {
          var l = z.current;
          if (l !== null)
            try {
              bt(l), Mn(function() {
                l.length === 0 ? (z.current = null, r(e)) : mt(e, r, a);
              });
            } catch (p) {
              a(p);
            }
          else
            r(e);
        }
      }
      var yt = !1;
      function bt(e) {
        if (!yt) {
          yt = !0;
          var r = 0;
          try {
            for (; r < e.length; r++) {
              var a = e[r];
              do
                a = a(!0);
              while (a !== null);
            }
            e.length = 0;
          } catch (l) {
            throw e = e.slice(r + 1), l;
          } finally {
            yt = !1;
          }
        }
      }
      var Nn = sr, Un = xn, Dn = Tn, In = {
        map: Ve,
        forEach: Jr,
        count: Gr,
        toArray: Xr,
        only: Qr
      };
      t.Children = In, t.Component = R, t.Fragment = c, t.Profiler = b, t.PureComponent = T, t.StrictMode = f, t.Suspense = E, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y, t.act = cr, t.cloneElement = Un, t.createContext = Zr, t.createElement = Nn, t.createFactory = Dn, t.createRef = Nr, t.forwardRef = nn, t.isValidElement = pe, t.lazy = rn, t.memo = on, t.startTransition = jn, t.unstable_act = cr, t.useCallback = pn, t.useContext = sn, t.useDebugValue = mn, t.useDeferredValue = bn, t.useEffect = cn, t.useId = gn, t.useImperativeHandle = vn, t.useInsertionEffect = fn, t.useLayoutEffect = dn, t.useMemo = hn, t.useReducer = un, t.useRef = ln, t.useState = an, t.useSyncExternalStore = _n, t.useTransition = yn, t.version = n, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    })();
  })(Re, Re.exports)), Re.exports;
}
var mr;
function Wn() {
  return mr || (mr = 1, process.env.NODE_ENV === "production" ? Xe.exports = Vn() : Xe.exports = Bn()), Xe.exports;
}
var Yn = Wn();
const tt = /* @__PURE__ */ Hn(Yn);
const qn = /* @__PURE__ */ new Set(["children", "localName", "ref", "style", "className"]), yr = /* @__PURE__ */ new WeakMap(), br = (u, t, n, o, i) => {
  const c = i?.[t];
  c === void 0 ? (u[t] = n, n == null && t in HTMLElement.prototype && u.removeAttribute(t)) : n !== o && ((f, b, v) => {
    let w = yr.get(f);
    w === void 0 && yr.set(f, w = /* @__PURE__ */ new Map());
    let $ = w.get(b);
    v !== void 0 ? $ === void 0 ? (w.set(b, $ = { handleEvent: v }), f.addEventListener(b, $)) : $.handleEvent = v : $ !== void 0 && (w.delete(b), f.removeEventListener(b, $));
  })(u, c, n);
}, rt = ({ react: u, tagName: t, elementClass: n, events: o, displayName: i }) => {
  const c = new Set(Object.keys(o ?? {})), f = u.forwardRef(((b, v) => {
    const w = u.useRef(/* @__PURE__ */ new Map()), $ = u.useRef(null), E = {}, L = {};
    for (const [A, P] of Object.entries(b)) qn.has(A) ? E[A === "className" ? "class" : A] = P : c.has(A) || A in n.prototype ? L[A] = P : E[A] = P;
    return u.useLayoutEffect((() => {
      if ($.current === null) return;
      const A = /* @__PURE__ */ new Map();
      for (const P in L) br($.current, P, b[P], w.current.get(P), o), w.current.delete(P), A.set(P, b[P]);
      for (const [P, ue] of w.current) br($.current, P, void 0, ue, o);
      w.current = A;
    })), u.useLayoutEffect((() => {
      $.current?.removeAttribute("defer-hydration");
    }), []), E.suppressHydrationWarning = !0, u.createElement(t, { ...E, ref: u.useCallback(((A) => {
      $.current = A, typeof v == "function" ? v(A) : v !== null && (v.current = A);
    }), [v]) });
  }));
  return f.displayName = i ?? n.name, f;
};
const Qe = globalThis, $t = Qe.ShadowRoot && (Qe.ShadyCSS === void 0 || Qe.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Et = /* @__PURE__ */ Symbol(), gr = /* @__PURE__ */ new WeakMap();
let Pr = class {
  constructor(t, n, o) {
    if (this._$cssResult$ = !0, o !== Et) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = n;
  }
  get styleSheet() {
    let t = this.o;
    const n = this.t;
    if ($t && t === void 0) {
      const o = n !== void 0 && n.length === 1;
      o && (t = gr.get(n)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), o && gr.set(n, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const je = (u) => new Pr(typeof u == "string" ? u : u + "", void 0, Et), nt = (u, ...t) => {
  const n = u.length === 1 ? u[0] : t.reduce((o, i, c) => o + ((f) => {
    if (f._$cssResult$ === !0) return f.cssText;
    if (typeof f == "number") return f;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + f + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + u[c + 1], u[0]);
  return new Pr(n, u, Et);
}, Kn = (u, t) => {
  if ($t) u.adoptedStyleSheets = t.map((n) => n instanceof CSSStyleSheet ? n : n.styleSheet);
  else for (const n of t) {
    const o = document.createElement("style"), i = Qe.litNonce;
    i !== void 0 && o.setAttribute("nonce", i), o.textContent = n.cssText, u.appendChild(o);
  }
}, _r = $t ? (u) => u : (u) => u instanceof CSSStyleSheet ? ((t) => {
  let n = "";
  for (const o of t.cssRules) n += o.cssText;
  return je(n);
})(u) : u;
const { is: Gn, defineProperty: Jn, getOwnPropertyDescriptor: Xn, getOwnPropertyNames: Qn, getOwnPropertySymbols: Zn, getPrototypeOf: eo } = Object, ot = globalThis, $r = ot.trustedTypes, to = $r ? $r.emptyScript : "", ro = ot.reactiveElementPolyfillSupport, Oe = (u, t) => u, Ze = { toAttribute(u, t) {
  switch (t) {
    case Boolean:
      u = u ? to : null;
      break;
    case Object:
    case Array:
      u = u == null ? u : JSON.stringify(u);
  }
  return u;
}, fromAttribute(u, t) {
  let n = u;
  switch (t) {
    case Boolean:
      n = u !== null;
      break;
    case Number:
      n = u === null ? null : Number(u);
      break;
    case Object:
    case Array:
      try {
        n = JSON.parse(u);
      } catch {
        n = null;
      }
  }
  return n;
} }, wt = (u, t) => !Gn(u, t), Er = { attribute: !0, type: String, converter: Ze, reflect: !1, useDefault: !1, hasChanged: wt };
Symbol.metadata ??= /* @__PURE__ */ Symbol("metadata"), ot.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
let me = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ??= []).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, n = Er) {
    if (n.state && (n.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((n = Object.create(n)).wrapped = !0), this.elementProperties.set(t, n), !n.noAccessor) {
      const o = /* @__PURE__ */ Symbol(), i = this.getPropertyDescriptor(t, o, n);
      i !== void 0 && Jn(this.prototype, t, i);
    }
  }
  static getPropertyDescriptor(t, n, o) {
    const { get: i, set: c } = Xn(this.prototype, t) ?? { get() {
      return this[n];
    }, set(f) {
      this[n] = f;
    } };
    return { get: i, set(f) {
      const b = i?.call(this);
      c?.call(this, f), this.requestUpdate(t, b, o);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Er;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Oe("elementProperties"))) return;
    const t = eo(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Oe("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Oe("properties"))) {
      const n = this.properties, o = [...Qn(n), ...Zn(n)];
      for (const i of o) this.createProperty(i, n[i]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const n = litPropertyMetadata.get(t);
      if (n !== void 0) for (const [o, i] of n) this.elementProperties.set(o, i);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [n, o] of this.elementProperties) {
      const i = this._$Eu(n, o);
      i !== void 0 && this._$Eh.set(i, n);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const n = [];
    if (Array.isArray(t)) {
      const o = new Set(t.flat(1 / 0).reverse());
      for (const i of o) n.unshift(_r(i));
    } else t !== void 0 && n.push(_r(t));
    return n;
  }
  static _$Eu(t, n) {
    const o = n.attribute;
    return o === !1 ? void 0 : typeof o == "string" ? o : typeof t == "string" ? t.toLowerCase() : void 0;
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
    const t = /* @__PURE__ */ new Map(), n = this.constructor.elementProperties;
    for (const o of n.keys()) this.hasOwnProperty(o) && (t.set(o, this[o]), delete this[o]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Kn(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((t) => t.hostConnected?.());
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((t) => t.hostDisconnected?.());
  }
  attributeChangedCallback(t, n, o) {
    this._$AK(t, o);
  }
  _$ET(t, n) {
    const o = this.constructor.elementProperties.get(t), i = this.constructor._$Eu(t, o);
    if (i !== void 0 && o.reflect === !0) {
      const c = (o.converter?.toAttribute !== void 0 ? o.converter : Ze).toAttribute(n, o.type);
      this._$Em = t, c == null ? this.removeAttribute(i) : this.setAttribute(i, c), this._$Em = null;
    }
  }
  _$AK(t, n) {
    const o = this.constructor, i = o._$Eh.get(t);
    if (i !== void 0 && this._$Em !== i) {
      const c = o.getPropertyOptions(i), f = typeof c.converter == "function" ? { fromAttribute: c.converter } : c.converter?.fromAttribute !== void 0 ? c.converter : Ze;
      this._$Em = i;
      const b = f.fromAttribute(n, c.type);
      this[i] = b ?? this._$Ej?.get(i) ?? b, this._$Em = null;
    }
  }
  requestUpdate(t, n, o, i = !1, c) {
    if (t !== void 0) {
      const f = this.constructor;
      if (i === !1 && (c = this[t]), o ??= f.getPropertyOptions(t), !((o.hasChanged ?? wt)(c, n) || o.useDefault && o.reflect && c === this._$Ej?.get(t) && !this.hasAttribute(f._$Eu(t, o)))) return;
      this.C(t, n, o);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, n, { useDefault: o, reflect: i, wrapped: c }, f) {
    o && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t) && (this._$Ej.set(t, f ?? n ?? this[t]), c !== !0 || f !== void 0) || (this._$AL.has(t) || (this.hasUpdated || o || (n = void 0), this._$AL.set(t, n)), i === !0 && this._$Em !== t && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (n) {
      Promise.reject(n);
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
        for (const [i, c] of this._$Ep) this[i] = c;
        this._$Ep = void 0;
      }
      const o = this.constructor.elementProperties;
      if (o.size > 0) for (const [i, c] of o) {
        const { wrapped: f } = c, b = this[i];
        f !== !0 || this._$AL.has(i) || b === void 0 || this.C(i, void 0, c, b);
      }
    }
    let t = !1;
    const n = this._$AL;
    try {
      t = this.shouldUpdate(n), t ? (this.willUpdate(n), this._$EO?.forEach((o) => o.hostUpdate?.()), this.update(n)) : this._$EM();
    } catch (o) {
      throw t = !1, this._$EM(), o;
    }
    t && this._$AE(n);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    this._$EO?.forEach((n) => n.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
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
    this._$Eq &&= this._$Eq.forEach((n) => this._$ET(n, this[n])), this._$EM();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
me.elementStyles = [], me.shadowRootOptions = { mode: "open" }, me[Oe("elementProperties")] = /* @__PURE__ */ new Map(), me[Oe("finalized")] = /* @__PURE__ */ new Map(), ro?.({ ReactiveElement: me }), (ot.reactiveElementVersions ??= []).push("2.1.2");
const Ct = globalThis, wr = (u) => u, et = Ct.trustedTypes, Cr = et ? et.createPolicy("lit-html", { createHTML: (u) => u }) : void 0, Tr = "$lit$", ee = `lit$${Math.random().toFixed(9).slice(2)}$`, xr = "?" + ee, no = `<${xr}>`, ae = document, ke = () => ae.createComment(""), Pe = (u) => u === null || typeof u != "object" && typeof u != "function", St = Array.isArray, oo = (u) => St(u) || typeof u?.[Symbol.iterator] == "function", _t = `[ 	
\f\r]`, Ae = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Sr = /-->/g, Ar = />/g, ie = RegExp(`>|${_t}(?:([^\\s"'>=/]+)(${_t}*=${_t}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Rr = /'/g, Or = /"/g, jr = /^(?:script|style|textarea|title)$/i, io = (u) => (t, ...n) => ({ _$litType$: u, strings: t, values: n }), ye = io(1), be = /* @__PURE__ */ Symbol.for("lit-noChange"), F = /* @__PURE__ */ Symbol.for("lit-nothing"), kr = /* @__PURE__ */ new WeakMap(), se = ae.createTreeWalker(ae, 129);
function Mr(u, t) {
  if (!St(u) || !u.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Cr !== void 0 ? Cr.createHTML(t) : t;
}
const so = (u, t) => {
  const n = u.length - 1, o = [];
  let i, c = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", f = Ae;
  for (let b = 0; b < n; b++) {
    const v = u[b];
    let w, $, E = -1, L = 0;
    for (; L < v.length && (f.lastIndex = L, $ = f.exec(v), $ !== null); ) L = f.lastIndex, f === Ae ? $[1] === "!--" ? f = Sr : $[1] !== void 0 ? f = Ar : $[2] !== void 0 ? (jr.test($[2]) && (i = RegExp("</" + $[2], "g")), f = ie) : $[3] !== void 0 && (f = ie) : f === ie ? $[0] === ">" ? (f = i ?? Ae, E = -1) : $[1] === void 0 ? E = -2 : (E = f.lastIndex - $[2].length, w = $[1], f = $[3] === void 0 ? ie : $[3] === '"' ? Or : Rr) : f === Or || f === Rr ? f = ie : f === Sr || f === Ar ? f = Ae : (f = ie, i = void 0);
    const A = f === ie && u[b + 1].startsWith("/>") ? " " : "";
    c += f === Ae ? v + no : E >= 0 ? (o.push(w), v.slice(0, E) + Tr + v.slice(E) + ee + A) : v + ee + (E === -2 ? b : A);
  }
  return [Mr(u, c + (u[n] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), o];
};
class Te {
  constructor({ strings: t, _$litType$: n }, o) {
    let i;
    this.parts = [];
    let c = 0, f = 0;
    const b = t.length - 1, v = this.parts, [w, $] = so(t, n);
    if (this.el = Te.createElement(w, o), se.currentNode = this.el.content, n === 2 || n === 3) {
      const E = this.el.content.firstChild;
      E.replaceWith(...E.childNodes);
    }
    for (; (i = se.nextNode()) !== null && v.length < b; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) for (const E of i.getAttributeNames()) if (E.endsWith(Tr)) {
          const L = $[f++], A = i.getAttribute(E).split(ee), P = /([.?@])?(.*)/.exec(L);
          v.push({ type: 1, index: c, name: P[2], strings: A, ctor: P[1] === "." ? uo : P[1] === "?" ? lo : P[1] === "@" ? co : it }), i.removeAttribute(E);
        } else E.startsWith(ee) && (v.push({ type: 6, index: c }), i.removeAttribute(E));
        if (jr.test(i.tagName)) {
          const E = i.textContent.split(ee), L = E.length - 1;
          if (L > 0) {
            i.textContent = et ? et.emptyScript : "";
            for (let A = 0; A < L; A++) i.append(E[A], ke()), se.nextNode(), v.push({ type: 2, index: ++c });
            i.append(E[L], ke());
          }
        }
      } else if (i.nodeType === 8) if (i.data === xr) v.push({ type: 2, index: c });
      else {
        let E = -1;
        for (; (E = i.data.indexOf(ee, E + 1)) !== -1; ) v.push({ type: 7, index: c }), E += ee.length - 1;
      }
      c++;
    }
  }
  static createElement(t, n) {
    const o = ae.createElement("template");
    return o.innerHTML = t, o;
  }
}
function ge(u, t, n = u, o) {
  if (t === be) return t;
  let i = o !== void 0 ? n._$Co?.[o] : n._$Cl;
  const c = Pe(t) ? void 0 : t._$litDirective$;
  return i?.constructor !== c && (i?._$AO?.(!1), c === void 0 ? i = void 0 : (i = new c(u), i._$AT(u, n, o)), o !== void 0 ? (n._$Co ??= [])[o] = i : n._$Cl = i), i !== void 0 && (t = ge(u, i._$AS(u, t.values), i, o)), t;
}
class ao {
  constructor(t, n) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = n;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: n }, parts: o } = this._$AD, i = (t?.creationScope ?? ae).importNode(n, !0);
    se.currentNode = i;
    let c = se.nextNode(), f = 0, b = 0, v = o[0];
    for (; v !== void 0; ) {
      if (f === v.index) {
        let w;
        v.type === 2 ? w = new Me(c, c.nextSibling, this, t) : v.type === 1 ? w = new v.ctor(c, v.name, v.strings, this, t) : v.type === 6 && (w = new fo(c, this, t)), this._$AV.push(w), v = o[++b];
      }
      f !== v?.index && (c = se.nextNode(), f++);
    }
    return se.currentNode = ae, i;
  }
  p(t) {
    let n = 0;
    for (const o of this._$AV) o !== void 0 && (o.strings !== void 0 ? (o._$AI(t, o, n), n += o.strings.length - 2) : o._$AI(t[n])), n++;
  }
}
class Me {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t, n, o, i) {
    this.type = 2, this._$AH = F, this._$AN = void 0, this._$AA = t, this._$AB = n, this._$AM = o, this.options = i, this._$Cv = i?.isConnected ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const n = this._$AM;
    return n !== void 0 && t?.nodeType === 11 && (t = n.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, n = this) {
    t = ge(this, t, n), Pe(t) ? t === F || t == null || t === "" ? (this._$AH !== F && this._$AR(), this._$AH = F) : t !== this._$AH && t !== be && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : oo(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== F && Pe(this._$AH) ? this._$AA.nextSibling.data = t : this.T(ae.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    const { values: n, _$litType$: o } = t, i = typeof o == "number" ? this._$AC(t) : (o.el === void 0 && (o.el = Te.createElement(Mr(o.h, o.h[0]), this.options)), o);
    if (this._$AH?._$AD === i) this._$AH.p(n);
    else {
      const c = new ao(i, this), f = c.u(this.options);
      c.p(n), this.T(f), this._$AH = c;
    }
  }
  _$AC(t) {
    let n = kr.get(t.strings);
    return n === void 0 && kr.set(t.strings, n = new Te(t)), n;
  }
  k(t) {
    St(this._$AH) || (this._$AH = [], this._$AR());
    const n = this._$AH;
    let o, i = 0;
    for (const c of t) i === n.length ? n.push(o = new Me(this.O(ke()), this.O(ke()), this, this.options)) : o = n[i], o._$AI(c), i++;
    i < n.length && (this._$AR(o && o._$AB.nextSibling, i), n.length = i);
  }
  _$AR(t = this._$AA.nextSibling, n) {
    for (this._$AP?.(!1, !0, n); t !== this._$AB; ) {
      const o = wr(t).nextSibling;
      wr(t).remove(), t = o;
    }
  }
  setConnected(t) {
    this._$AM === void 0 && (this._$Cv = t, this._$AP?.(t));
  }
}
class it {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, n, o, i, c) {
    this.type = 1, this._$AH = F, this._$AN = void 0, this.element = t, this.name = n, this._$AM = i, this.options = c, o.length > 2 || o[0] !== "" || o[1] !== "" ? (this._$AH = Array(o.length - 1).fill(new String()), this.strings = o) : this._$AH = F;
  }
  _$AI(t, n = this, o, i) {
    const c = this.strings;
    let f = !1;
    if (c === void 0) t = ge(this, t, n, 0), f = !Pe(t) || t !== this._$AH && t !== be, f && (this._$AH = t);
    else {
      const b = t;
      let v, w;
      for (t = c[0], v = 0; v < c.length - 1; v++) w = ge(this, b[o + v], n, v), w === be && (w = this._$AH[v]), f ||= !Pe(w) || w !== this._$AH[v], w === F ? t = F : t !== F && (t += (w ?? "") + c[v + 1]), this._$AH[v] = w;
    }
    f && !i && this.j(t);
  }
  j(t) {
    t === F ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class uo extends it {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === F ? void 0 : t;
  }
}
class lo extends it {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== F);
  }
}
class co extends it {
  constructor(t, n, o, i, c) {
    super(t, n, o, i, c), this.type = 5;
  }
  _$AI(t, n = this) {
    if ((t = ge(this, t, n, 0) ?? F) === be) return;
    const o = this._$AH, i = t === F && o !== F || t.capture !== o.capture || t.once !== o.once || t.passive !== o.passive, c = t !== F && (o === F || i);
    i && this.element.removeEventListener(this.name, this, o), c && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class fo {
  constructor(t, n, o) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = n, this.options = o;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    ge(this, t);
  }
}
const po = Ct.litHtmlPolyfillSupport;
po?.(Te, Me), (Ct.litHtmlVersions ??= []).push("3.3.2");
const ho = (u, t, n) => {
  const o = n?.renderBefore ?? t;
  let i = o._$litPart$;
  if (i === void 0) {
    const c = n?.renderBefore ?? null;
    o._$litPart$ = i = new Me(t.insertBefore(ke(), c), c, void 0, n ?? {});
  }
  return i._$AI(u), i;
};
const At = globalThis;
class te extends me {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const t = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= t.firstChild, t;
  }
  update(t) {
    const n = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = ho(n, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return be;
  }
}
te._$litElement$ = !0, te.finalized = !0, At.litElementHydrateSupport?.({ LitElement: te });
const vo = At.litElementPolyfillSupport;
vo?.({ LitElement: te });
(At.litElementVersions ??= []).push("4.2.2");
const mo = (u) => (t, n) => {
  n !== void 0 ? n.addInitializer(() => {
    customElements.define(u, t);
  }) : customElements.define(u, t);
};
const yo = { attribute: !0, type: String, converter: Ze, reflect: !1, hasChanged: wt }, bo = (u = yo, t, n) => {
  const { kind: o, metadata: i } = n;
  let c = globalThis.litPropertyMetadata.get(i);
  if (c === void 0 && globalThis.litPropertyMetadata.set(i, c = /* @__PURE__ */ new Map()), o === "setter" && ((u = Object.create(u)).wrapped = !0), c.set(n.name, u), o === "accessor") {
    const { name: f } = n;
    return { set(b) {
      const v = t.get.call(this);
      t.set.call(this, b), this.requestUpdate(f, v, u, !0, b);
    }, init(b) {
      return b !== void 0 && this.C(f, void 0, u, b), b;
    } };
  }
  if (o === "setter") {
    const { name: f } = n;
    return function(b) {
      const v = this[f];
      t.call(this, b), this.requestUpdate(f, v, u, !0, b);
    };
  }
  throw Error("Unsupported decorator location: " + o);
};
function q(u) {
  return (t, n) => typeof n == "object" ? bo(u, t, n) : ((o, i, c) => {
    const f = i.hasOwnProperty(c);
    return i.constructor.createProperty(c, o), f ? Object.getOwnPropertyDescriptor(i, c) : void 0;
  })(u, t, n);
}
function go(u) {
  return q({ ...u, state: !0, attribute: !1 });
}
const _o = (u, t, n) => (n.configurable = !0, n.enumerable = !0, Reflect.decorate && typeof t != "object" && Object.defineProperty(u, t, n), n);
function $o(u, t) {
  return (n, o, i) => {
    const c = (f) => f.renderRoot?.querySelector(u) ?? null;
    return _o(n, o, { get() {
      return c(this);
    } });
  };
}
const Eo = ":host{display:block;padding:20px;border:2px solid #ff6b00;border-radius:8px;margin:10px 0;background:#fff5f0}.counter{display:flex;align-items:center;gap:15px;font-size:18px}button{padding:8px 16px;font-size:16px;border:1px solid #ff6b00;background:#ff6b00;color:#fff;border-radius:4px;cursor:pointer;transition:background .2s}button:hover{background:#e55a00}.count{font-weight:700;min-width:40px;text-align:center;font-size:24px;color:#333}.label{color:#666;font-size:14px}";
var wo = Object.defineProperty, Co = (u, t, n, o) => {
  for (var i = void 0, c = u.length - 1, f; c >= 0; c--)
    (f = u[c]) && (i = f(t, n, i) || i);
  return i && wo(t, n, i), i;
};
const Ot = class Ot extends te {
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
    return ye`
      <div class="counter">
        <div class="label">Lit Counter:</div>
        <button @click=${this.decrement}>-</button>
        <span class="count">${this.count}</span>
        <button @click=${this.increment}>+</button>
      </div>
    `;
  }
};
Ot.styles = nt`${je(Eo)}`;
let xe = Ot;
Co([
  q({ type: Number })
], xe.prototype, "count");
customElements.define("lit-counter", xe);
const Mo = rt({
  tagName: "lit-counter",
  elementClass: xe,
  react: tt,
  events: {
    // 必要に応じてイベントハンドリングを追加
  }
}), So = ".button{display:inline-flex;align-items:center;justify-content:center;padding:.5rem 1rem;font-size:1rem;font-weight:500;border:none;border-radius:.375rem;cursor:pointer;transition:all .2s ease-in-out;font-family:inherit}.button:disabled{opacity:.5;cursor:not-allowed}.button:not(:disabled):hover{transform:translateY(-1px);box-shadow:0 4px 6px #0000001a}.button:not(:disabled):active{transform:translateY(0)}.button--primary{background-color:#3b82f6;color:#fff}.button--primary:not(:disabled):hover{background-color:#2563eb}.button--secondary{background-color:#6b7280;color:#fff}.button--secondary:not(:disabled):hover{background-color:#4b5563}.button--success{background-color:#10b981;color:#fff}.button--success:not(:disabled):hover{background-color:#059669}.button--danger{background-color:#ef4444;color:#fff}.button--danger:not(:disabled):hover{background-color:#dc2626}.button--small{padding:.25rem .75rem;font-size:.875rem}.button--large{padding:.75rem 1.5rem;font-size:1.125rem}";
var Ao = Object.defineProperty, st = (u, t, n, o) => {
  for (var i = void 0, c = u.length - 1, f; c >= 0; c--)
    (f = u[c]) && (i = f(t, n, i) || i);
  return i && Ao(t, n, i), i;
};
const kt = class kt extends te {
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
    const t = ["button"];
    return t.push(`button--${this.variant}`), this.size !== "medium" && t.push(`button--${this.size}`), t.join(" ");
  }
  render() {
    return ye`
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
kt.styles = nt`${je(So)}`;
let re = kt;
st([
  q({ type: String })
], re.prototype, "label");
st([
  q({ type: String })
], re.prototype, "variant");
st([
  q({ type: String })
], re.prototype, "size");
st([
  q({ type: Boolean })
], re.prototype, "disabled");
customElements.define("lit-button", re);
const No = rt({
  tagName: "lit-button",
  elementClass: re,
  react: tt,
  events: {
    onButtonClick: "button-click"
  }
}), Ro = ".dropdown{position:relative;display:inline-block;width:100%;max-width:300px}.dropdown__button{width:100%;padding:.5rem 2.5rem .5rem 1rem;font-size:1rem;background-color:#fff;border:1px solid #d1d5db;border-radius:.375rem;cursor:pointer;display:flex;align-items:center;justify-content:space-between;transition:all .2s ease-in-out;position:relative}.dropdown__button:hover{border-color:#9ca3af}.dropdown__button:focus{outline:none;border-color:#3b82f6;box-shadow:0 0 0 3px #3b82f61a}.dropdown__button--disabled{opacity:.5;cursor:not-allowed}.dropdown__arrow{position:absolute;right:1rem;width:0;height:0;border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid #6b7280;transition:transform .2s ease-in-out}.dropdown__arrow--open{transform:rotate(180deg)}.dropdown__menu{position:absolute;top:calc(100% + .25rem);left:0;right:0;background-color:#fff;border:1px solid #d1d5db;border-radius:.375rem;box-shadow:0 10px 15px -3px #0000001a;max-height:300px;overflow-y:auto;z-index:10}.dropdown__item{padding:.5rem 1rem;cursor:pointer;transition:background-color .2s ease-in-out}.dropdown__item:hover{background-color:#f3f4f6}.dropdown__item--selected{background-color:#eff6ff;color:#3b82f6;font-weight:500}.dropdown__placeholder{color:#9ca3af}";
var Oo = Object.defineProperty, Ne = (u, t, n, o) => {
  for (var i = void 0, c = u.length - 1, f; c >= 0; c--)
    (f = u[c]) && (i = f(t, n, i) || i);
  return i && Oo(t, n, i), i;
};
const Pt = class Pt extends te {
  constructor() {
    super(...arguments), this.options = "[]", this.selected = "", this.placeholder = "Select an option", this.disabled = !1, this.isOpen = !1, this.parsedOptions = [], this.handleClickOutside = (t) => {
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
    this.disabled || (this.selected = t.value, this.isOpen = !1, this.dispatchEvent(new CustomEvent("change", {
      detail: { value: t.value, option: t },
      bubbles: !0,
      composed: !0
    })));
  }
  getSelectedLabel() {
    const t = this.parsedOptions.find((n) => n.value === this.selected);
    return t ? t.label : this.placeholder;
  }
  render() {
    const t = this.getSelectedLabel(), n = !this.parsedOptions.find((o) => o.value === this.selected);
    return ye`
      <div class="dropdown">
        <button
          class="dropdown__button ${this.disabled ? "dropdown__button--disabled" : ""}"
          @click="${this.handleToggle}"
          ?disabled="${this.disabled}"
        >
          <span class="${n ? "dropdown__placeholder" : ""}">
            ${t}
          </span>
          <span class="dropdown__arrow ${this.isOpen ? "dropdown__arrow--open" : ""}"></span>
        </button>
        ${this.isOpen ? ye`
          <div class="dropdown__menu">
            ${this.parsedOptions.map((o) => ye`
              <div
                class="dropdown__item ${o.value === this.selected ? "dropdown__item--selected" : ""}"
                @click="${() => this.handleSelect(o)}"
              >
                ${o.label}
              </div>
            `)}
          </div>
        ` : ""}
      </div>
    `;
  }
};
Pt.styles = nt`${je(Ro)}`;
let J = Pt;
Ne([
  q({ type: String })
], J.prototype, "options");
Ne([
  q({ type: String })
], J.prototype, "selected");
Ne([
  q({ type: String })
], J.prototype, "placeholder");
Ne([
  q({ type: Boolean })
], J.prototype, "disabled");
Ne([
  go()
], J.prototype, "isOpen");
customElements.define("lit-dropdown", J);
const Uo = rt({
  tagName: "lit-dropdown",
  elementClass: J,
  react: tt,
  events: {
    onChange: "change"
  }
}), ko = ".container{display:inline-block}.open-button{padding:.75rem 1.5rem;background-color:#f59e0b;color:#fff;border:none;border-radius:8px;font-size:1rem;font-weight:500;cursor:pointer;transition:background-color .2s}.open-button:hover{background-color:#d97706}.open-button:focus{outline:2px solid #f59e0b;outline-offset:2px}dialog{border:none;border-radius:12px;padding:0;max-width:28rem;box-shadow:0 20px 25px -5px #0000001a,0 10px 10px -5px #0000000a;animation:slideIn .3s cubic-bezier(.4,0,.2,1)}dialog::backdrop{background-color:#00000080;animation:fadeIn .3s cubic-bezier(.4,0,.2,1)}@keyframes slideIn{0%{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.modal-panel{padding:1.5rem;background-color:#fff}.modal-header{margin-bottom:1rem}.modal-title{font-size:1.5rem;font-weight:700;color:#111827;margin:0}.modal-body{margin-top:.5rem}.modal-description{font-size:.875rem;color:#6b7280;margin-bottom:1rem}.modal-content{margin-top:1rem}.modal-content p{margin:0 0 .75rem;color:#374151;line-height:1.6}.modal-content ul{margin:0;padding-left:1.5rem;color:#374151;line-height:1.8}.modal-content li{margin-bottom:.25rem}.modal-actions{margin-top:1.5rem;display:flex;gap:.75rem;justify-content:flex-end}.close-button{padding:.625rem 1.25rem;background-color:#f59e0b;color:#fff;border:none;border-radius:6px;font-size:.875rem;font-weight:500;cursor:pointer;transition:background-color .2s}.close-button:hover{background-color:#d97706}.close-button:focus{outline:2px solid #f59e0b;outline-offset:2px}@media(max-width:640px){dialog{max-width:90vw}.modal-panel{padding:1.25rem}.modal-title{font-size:1.25rem}}";
var Po = Object.defineProperty, To = Object.getOwnPropertyDescriptor, Rt = (u, t, n, o) => {
  for (var i = o > 1 ? void 0 : o ? To(t, n) : t, c = u.length - 1, f; c >= 0; c--)
    (f = u[c]) && (i = (o ? f(t, n, i) : f(i)) || i);
  return o && i && Po(t, n, i), i;
};
let _e = class extends te {
  constructor() {
    super(...arguments), this.open = !1;
  }
  updated(u) {
    u.has("open") && (this.open ? this.dialog?.showModal() : this.dialog?.close());
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
  handleBackdropClick(u) {
    const n = u.target.getBoundingClientRect();
    (u.clientX < n.left || u.clientX > n.right || u.clientY < n.top || u.clientY > n.bottom) && this.closeModal();
  }
  render() {
    return ye`
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
_e.styles = nt`${je(ko)}`;
Rt([
  q({ type: Boolean })
], _e.prototype, "open", 2);
Rt([
  $o("dialog")
], _e.prototype, "dialog", 2);
_e = Rt([
  mo("lit-modal")
], _e);
const Do = rt({
  tagName: "lit-modal",
  elementClass: _e,
  react: tt,
  events: {
    onModalClose: "modal-close"
  }
});
export {
  No as Button,
  Mo as Counter,
  Uo as Dropdown,
  re as LitButton,
  xe as LitCounter,
  J as LitDropdown,
  _e as LitModal,
  Do as Modal
};
